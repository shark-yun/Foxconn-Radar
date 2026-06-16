const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");

const root = __dirname;
const port = Number(process.env.PORT || 4173);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
};

function sendJson(res, status, payload) {
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
  });
  res.end(JSON.stringify(payload));
}

function compactNumber(value) {
  if (typeof value !== "string") return Number(value || 0);
  const cleaned = value.replace(/,/g, "").trim();
  return Number(cleaned || 0);
}

function toYmd(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}

function shiftDate(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

async function fetchJson(url) {
  const upstream = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 FoxconnAnalyst/1.0",
      accept: "application/json",
    },
  });
  if (!upstream.ok) throw new Error(`TWSE ${upstream.status}`);
  return upstream.json();
}

async function proxyChart(req, res, url) {
  const symbol = url.searchParams.get("symbol");
  const days = Number(url.searchParams.get("days") || 92);
  const range = url.searchParams.get("range");
  const requestedInterval = url.searchParams.get("interval") || "1d";
  if (!symbol) {
    sendJson(res, 400, { error: "Missing symbol" });
    return;
  }

  const period2 = Math.floor(Date.now() / 1000);
  const period1 = period2 - Math.min(Math.max(days, 7), 730) * 24 * 60 * 60;
  const yahooUrl = new URL(`https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}`);
  if (range) {
    yahooUrl.searchParams.set("range", range);
  } else {
    yahooUrl.searchParams.set("period1", String(period1));
    yahooUrl.searchParams.set("period2", String(period2));
  }
  yahooUrl.searchParams.set("interval", requestedInterval);
  yahooUrl.searchParams.set("events", "history");

  try {
    const upstream = await fetch(yahooUrl, {
      headers: {
        "user-agent": "Mozilla/5.0 FoxconnAnalyst/1.0",
        accept: "application/json",
      },
    });
    const text = await upstream.text();
    res.writeHead(upstream.ok ? 200 : upstream.status, {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=60",
    });
    res.end(text);
  } catch (error) {
    sendJson(res, 502, { error: error.message });
  }
}

async function fetchInstitutional(date, symbol) {
  const twseUrl = new URL("https://www.twse.com.tw/rwd/zh/fund/T86");
  twseUrl.searchParams.set("date", date);
  twseUrl.searchParams.set("selectType", "ALLBUT0999");
  twseUrl.searchParams.set("response", "json");
  const payload = await fetchJson(twseUrl);
  if (payload.stat !== "OK") return null;
  const row = payload.data?.find((item) => item[0] === symbol);
  if (!row) return null;
  return {
    date: payload.date || date,
    foreignNet: compactNumber(row[4]) / 1000,
    investmentTrustNet: compactNumber(row[10]) / 1000,
    dealerNet: compactNumber(row[11]) / 1000,
    totalNet: compactNumber(row[18]) / 1000,
  };
}

async function fetchMargin(date, symbol) {
  const twseUrl = new URL("https://www.twse.com.tw/rwd/zh/marginTrading/MI_MARGN");
  twseUrl.searchParams.set("date", date);
  twseUrl.searchParams.set("selectType", "ALL");
  twseUrl.searchParams.set("response", "json");
  const payload = await fetchJson(twseUrl);
  if (payload.stat !== "OK") return null;
  const summary = payload.tables?.find((table) => table.title?.includes("融資融券彙總"));
  const row = summary?.data?.find((item) => item[0] === symbol);
  if (!row) return null;
  return {
    marginBuy: compactNumber(row[2]),
    marginSell: compactNumber(row[3]),
    marginBalance: compactNumber(row[6]),
    shortBuy: compactNumber(row[8]),
    shortSell: compactNumber(row[9]),
    shortBalance: compactNumber(row[12]),
  };
}

function demoChipSeries(symbol, days) {
  const rows = [];
  let marginBalance = symbol === "2317" ? 86000 : 18000;
  let shortBalance = symbol === "2317" ? 5200 : 1200;
  const seed = symbol.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  for (let index = days - 1; index >= 0; index -= 1) {
    const date = shiftDate(new Date(), -index);
    if (date.getDay() === 0 || date.getDay() === 6) continue;
    const wave = Math.sin((days - index + seed) / 3);
    const foreignNet = Math.round(wave * 4200 + ((seed % 7) - 3) * 300);
    const investmentTrustNet = Math.round(Math.cos((days - index + seed) / 4) * 950);
    const dealerNet = Math.round(Math.sin((days - index + seed) / 5) * 700);
    const totalNet = foreignNet + investmentTrustNet + dealerNet;
    marginBalance += Math.round(Math.cos((days - index + seed) / 2.7) * 850);
    shortBalance = Math.max(0, shortBalance + Math.round(Math.sin((days - index + seed) / 2.2) * 160));
    rows.push({
      date: toYmd(date),
      foreignNet,
      investmentTrustNet,
      dealerNet,
      totalNet,
      marginBalance,
      shortBalance,
      source: "demo",
    });
  }
  return rows.slice(-days);
}

async function proxyChips(req, res, url) {
  const symbol = (url.searchParams.get("symbol") || "2317").replace(/\D/g, "");
  const days = Math.min(Math.max(Number(url.searchParams.get("days") || 20), 5), 40);
  if (!symbol) {
    sendJson(res, 400, { error: "Missing symbol" });
    return;
  }

  const rows = [];
  let cursor = new Date();
  let attempts = 0;
  while (rows.length < days && attempts < days * 3) {
    attempts += 1;
    if (cursor.getDay() !== 0 && cursor.getDay() !== 6) {
      const date = toYmd(cursor);
      try {
        const [inst, margin] = await Promise.all([
          fetchInstitutional(date, symbol),
          fetchMargin(date, symbol),
        ]);
        if (inst) {
          rows.push({
            ...inst,
            ...(margin || {}),
            source: margin ? "twse" : "twse-partial",
          });
        }
      } catch (error) {
        // Skip holidays, unsettled days, and transient TWSE responses.
      }
    }
    cursor = shiftDate(cursor, -1);
  }

  const data = rows.length ? rows.reverse() : demoChipSeries(symbol, days);
  sendJson(res, 200, {
    symbol,
    source: rows.length ? "twse" : "demo",
    data,
  });
}

async function serveStatic(res, pathname) {
  const requested = pathname === "/" ? "/index.html" : pathname;
  const filePath = path.normalize(path.join(root, requested));
  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  try {
    const body = await fs.readFile(filePath);
    const ext = path.extname(filePath);
    res.writeHead(200, {
      "content-type": mimeTypes[ext] || "application/octet-stream",
      "cache-control": "no-store",
    });
    res.end(body);
  } catch (error) {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("Not found");
  }
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname === "/api/chart") {
    await proxyChart(req, res, url);
    return;
  }
  if (url.pathname === "/api/chips") {
    await proxyChips(req, res, url);
    return;
  }
  await serveStatic(res, decodeURIComponent(url.pathname));
});

server.listen(port, () => {
  console.log(`Foxconn Analyst running at http://localhost:${port}/`);
});
