function sendJson(res, status, payload) {
  res.status(status).setHeader("cache-control", "no-store");
  res.json(payload);
}

function compactNumber(value) {
  if (typeof value !== "string") return Number(value || 0);
  return Number(value.replace(/,/g, "").trim() || 0);
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

module.exports = async function handler(req, res) {
  const symbol = String(req.query.symbol || "2317").replace(/\D/g, "");
  const days = Math.min(Math.max(Number(req.query.days || 20), 5), 40);
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

  sendJson(res, 200, {
    symbol,
    source: rows.length ? "twse" : "demo",
    data: rows.length ? rows.reverse() : demoChipSeries(symbol, days),
  });
};
