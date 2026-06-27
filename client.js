const companies = [
  {
    symbol: "2317.TW",
    name: "鴻海",
    group: "core",
    role: "EMS / AI server / EV platform",
    currency: "TWD",
    color: "#1f7a8c",
    fallbackPrice: 183.5,
  },
  {
    symbol: "2354.TW",
    name: "鴻準精密",
    group: "affiliate",
    role: "機構件與散熱",
    currency: "TWD",
    color: "#b98518",
    fallbackPrice: 68.4,
  },
  {
    symbol: "601138.SS",
    name: "工業富聯",
    group: "affiliate",
    role: "雲端網通與工業互聯網",
    currency: "CNY",
    color: "#315f9f",
    fallbackPrice: 27.2,
  },
  {
    symbol: "6088.HK",
    name: "鴻騰精密科技",
    group: "affiliate",
    role: "連接器與高速傳輸",
    currency: "HKD",
    color: "#7f5aa2",
    fallbackPrice: 3.1,
  },
  {
    symbol: "6414.TW",
    name: "樺漢科技",
    group: "affiliate",
    role: "工業電腦與邊緣運算",
    currency: "TWD",
    color: "#16875d",
    fallbackPrice: 292,
  },
  {
    symbol: "2038.HK",
    name: "富智康集團",
    group: "affiliate",
    role: "手機製造服務",
    currency: "HKD",
    color: "#6d7f8e",
    fallbackPrice: 0.82,
  },
  {
    symbol: "2382.TW",
    name: "廣達",
    group: "peer",
    role: "AI server / notebook ODM",
    currency: "TWD",
    color: "#c7473d",
    fallbackPrice: 298,
  },
  {
    symbol: "2324.TW",
    name: "仁寶",
    group: "peer",
    role: "PC / smart devices ODM",
    currency: "TWD",
    color: "#4b6f44",
    fallbackPrice: 35.1,
  },
  {
    symbol: "3231.TW",
    name: "緯創",
    group: "peer",
    role: "AI server / ICT ODM",
    currency: "TWD",
    color: "#8c4f1f",
    fallbackPrice: 118,
  },
  {
    symbol: "2356.TW",
    name: "英業達",
    group: "peer",
    role: "server / PC ODM",
    currency: "TWD",
    color: "#4b5f99",
    fallbackPrice: 45.3,
  },
  {
    symbol: "4938.TW",
    name: "和碩",
    group: "peer",
    role: "consumer electronics ODM",
    currency: "TWD",
    color: "#8b6b37",
    fallbackPrice: 92.8,
  },
  {
    symbol: "2330.TW",
    name: "台積電",
    group: "benchmark",
    role: "半導體晶圓代工",
    currency: "TWD",
    color: "#7752a6",
    fallbackPrice: 970,
  },
  {
    symbol: "^TWII",
    name: "加權指數",
    group: "benchmark",
    role: "台股大盤",
    currency: "INDEX",
    color: "#43515e",
    fallbackPrice: 21900,
  },
];

const financials = {
  "2317.TW": {
    labels: ["2024Q4", "2025Q1", "2025Q2", "2025Q3", "2025Q4", "2026Q1"],
    revenue: [2130, 1628, 1775, 1854, 2212, 1685],
    gross: [6.4, 6.3, 6.5, 6.7, 6.8, 6.5],
    opm: [2.9, 2.8, 3.0, 3.1, 3.3, 2.9],
    eps: [3.12, 2.18, 2.54, 2.72, 3.36, 2.24],
    focus: "AI 伺服器出貨、iPhone 週期、EV 平台費用率",
  },
  "2382.TW": {
    labels: ["2024Q4", "2025Q1", "2025Q2", "2025Q3", "2025Q4", "2026Q1"],
    revenue: [348, 292, 317, 356, 402, 331],
    gross: [8.1, 8.5, 8.8, 9.0, 9.2, 8.7],
    opm: [4.4, 4.7, 4.9, 5.1, 5.3, 4.8],
    eps: [3.8, 3.2, 3.6, 4.1, 4.7, 3.7],
    focus: "AI server 毛利率與 CSP 訂單能見度",
  },
  "2324.TW": {
    labels: ["2024Q4", "2025Q1", "2025Q2", "2025Q3", "2025Q4", "2026Q1"],
    revenue: [265, 226, 241, 252, 276, 232],
    gross: [4.8, 4.9, 5.0, 5.1, 5.1, 4.9],
    opm: [1.6, 1.5, 1.6, 1.7, 1.8, 1.5],
    eps: [0.72, 0.55, 0.62, 0.68, 0.78, 0.56],
    focus: "PC 補庫存與非 PC 業務占比",
  },
  "3231.TW": {
    labels: ["2024Q4", "2025Q1", "2025Q2", "2025Q3", "2025Q4", "2026Q1"],
    revenue: [248, 214, 236, 269, 312, 251],
    gross: [7.4, 7.8, 8.2, 8.5, 8.9, 8.1],
    opm: [3.2, 3.4, 3.7, 4.0, 4.2, 3.6],
    eps: [1.9, 1.45, 1.72, 2.02, 2.35, 1.68],
    focus: "AI server ramp、墨西哥產能與營運槓桿",
  },
  "2356.TW": {
    labels: ["2024Q4", "2025Q1", "2025Q2", "2025Q3", "2025Q4", "2026Q1"],
    revenue: [148, 126, 137, 151, 168, 139],
    gross: [5.9, 6.0, 6.1, 6.3, 6.4, 6.1],
    opm: [2.1, 2.0, 2.2, 2.4, 2.5, 2.1],
    eps: [0.86, 0.62, 0.72, 0.84, 0.96, 0.7],
    focus: "伺服器產品組合與 PC 季節性",
  },
  "4938.TW": {
    labels: ["2024Q4", "2025Q1", "2025Q2", "2025Q3", "2025Q4", "2026Q1"],
    revenue: [326, 251, 274, 305, 352, 278],
    gross: [4.4, 4.5, 4.7, 4.8, 4.9, 4.6],
    opm: [1.7, 1.6, 1.8, 1.9, 2.0, 1.7],
    eps: [1.8, 1.2, 1.42, 1.66, 2.02, 1.35],
    focus: "消費性電子需求與轉投資收益",
  },
};

const state = {
  range: "3mo",
  heroRange: "1mo",
  chartMode: "line",
  marketData: new Map(),
  chipData: new Map(),
  chipSymbol: "2317",
  visibleAffiliates: new Set(["2317.TW", "2354.TW", "601138.SS", "6088.HK", "6414.TW"]),
  dataMode: "loading",
};

const twseChipSymbols = ["2317", "2354", "6414", "2382", "2324", "3231", "2356", "4938", "2330"];

const rangeDays = {
  "1mo": 31,
  "3mo": 92,
  "6mo": 184,
  "1y": 366,
};

const returnPeriods = [
  { label: "當天", days: 1 },
  { label: "3天", days: 3 },
  { label: "10天", days: 10 },
  { label: "30天", days: 30 },
  { label: "60天", days: 60 },
  { label: "150天", days: 150 },
];

const heroRangeDays = {
  "5d": 5,
  "1mo": 31,
  "3mo": 92,
  "6mo": 184,
  "1y": 366,
};

const charts = {};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function formatNumber(value, digits = 2) {
  if (!Number.isFinite(value)) return "--";
  return new Intl.NumberFormat("zh-TW", {
    maximumFractionDigits: digits,
    minimumFractionDigits: value < 10 ? Math.min(digits, 2) : 0,
  }).format(value);
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

function formatPercent(value) {
  if (!Number.isFinite(value)) return "--";
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
}

function formatSigned(value, digits = 0) {
  if (!Number.isFinite(value)) return "--";
  const sign = value > 0 ? "+" : "";
  return `${sign}${formatNumber(value, digits)}`;
}

function company(symbol) {
  return companies.find((item) => item.symbol === symbol);
}

function companyByStockNo(stockNo) {
  return companies.find((item) => item.symbol === `${stockNo}.TW`);
}

function latestPoint(series) {
  return series.points[series.points.length - 1] || { close: NaN };
}

function firstPoint(series) {
  return series.points[0] || { close: NaN };
}

function filteredPoints(series, days = rangeDays[state.range]) {
  const points = series?.points || [];
  const latest = points[points.length - 1];
  if (!latest || !Number.isFinite(days)) return points;
  const cutoff = new Date(latest.date);
  cutoff.setDate(cutoff.getDate() - days);
  const filtered = points.filter((point) => point.date >= cutoff);
  return filtered.length >= 2 ? filtered : points.slice(-2);
}

function changePercent(series, days = rangeDays[state.range]) {
  const points = filteredPoints(series, days);
  const first = points[0]?.close;
  const latest = latestPoint(series).close;
  if (!Number.isFinite(first) || first === 0 || !Number.isFinite(latest)) return NaN;
  return ((latest - first) / first) * 100;
}

function periodReturn(series, days) {
  const points = series?.points || [];
  const latest = latestPoint(series);
  if (!latest || !Number.isFinite(latest.close)) return NaN;
  const baselineIndex = Math.max(0, points.length - 1 - days);
  const baseline = points[baselineIndex];
  if (!baseline || !Number.isFinite(baseline.close) || baseline.close === 0) return NaN;
  return ((latest.close - baseline.close) / baseline.close) * 100;
}

function syntheticSeries(item, days) {
  const points = [];
  const now = new Date();
  const seed = item.symbol.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  let price = item.fallbackPrice;
  for (let i = days - 1; i >= 0; i -= 1) {
    const date = new Date(now);
    date.setDate(now.getDate() - i);
    const wave = Math.sin((days - i + seed) / 7) * 0.009;
    const drift = (item.group === "peer" ? 0.0008 : 0.00035) + ((seed % 9) - 4) / 20000;
    const shock = Math.cos((days - i + seed) / 11) * 0.006;
    const previous = price;
    price = Math.max(price * (1 + wave + drift + shock), item.fallbackPrice * 0.6);
    const open = previous;
    const high = Math.max(open, price) * (1 + 0.006 + Math.abs(wave) * 0.6);
    const low = Math.min(open, price) * (1 - 0.006 - Math.abs(shock) * 0.5);
    points.push({
      date,
      open: Number(open.toFixed(2)),
      high: Number(high.toFixed(2)),
      low: Number(low.toFixed(2)),
      close: Number(price.toFixed(2)),
    });
  }
  return {
    symbol: item.symbol,
    currency: item.currency,
    source: "demo",
    points,
  };
}

async function fetchYahooSeries(symbol, days) {
  const period2 = Math.floor(Date.now() / 1000);
  const period1 = period2 - days * 24 * 60 * 60;
  const localProxy = location.protocol.startsWith("http")
    ? `/api/chart?symbol=${encodeURIComponent(symbol)}&days=${days}`
    : "";
  const directYahoo = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(
    symbol,
  )}?period1=${period1}&period2=${period2}&interval=1d&events=history`;
  const urls = [localProxy, directYahoo].filter(Boolean);
  let payload;
  let lastError;
  for (const url of urls) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Chart API ${response.status}`);
      payload = await response.json();
      break;
    } catch (error) {
      lastError = error;
    }
  }
  if (!payload) throw lastError || new Error("Unable to fetch chart");
  return parseYahooSeries(symbol, payload);
}

function parseYahooSeries(symbol, payload, source = "live") {
  const result = payload.chart?.result?.[0];
  const timestamps = result?.timestamp || [];
  const quote = result?.indicators?.quote?.[0];
  const closes = quote?.close || [];
  const opens = quote?.open || [];
  const highs = quote?.high || [];
  const lows = quote?.low || [];
  const points = timestamps
    .map((timestamp, index) => ({
      date: new Date(timestamp * 1000),
      open: opens[index],
      high: highs[index],
      low: lows[index],
      close: closes[index],
    }))
    .filter((point) => Number.isFinite(point.close))
    .map((point) => ({
      ...point,
      open: Number.isFinite(point.open) ? point.open : point.close,
      high: Number.isFinite(point.high) ? point.high : point.close,
      low: Number.isFinite(point.low) ? point.low : point.close,
    }));
  if (points.length < 2) throw new Error(`No chart points for ${symbol}`);
  return {
    symbol,
    currency: result.meta?.currency || company(symbol)?.currency || "",
    source,
    points,
  };
}

async function loadMarketData() {
  const days = Math.max(rangeDays[state.range], 420);
  const targets = companies.map((item) => item.symbol);
  $("#statusLine").textContent = "載入 Yahoo Finance 市場資料中...";
  state.dataMode = "live";
  const result = await Promise.allSettled(
    targets.map(async (symbol) => {
      const item = company(symbol);
      try {
        return await fetchYahooSeries(symbol, days);
      } catch (error) {
        state.dataMode = "mixed";
        return syntheticSeries(item, days);
      }
    }),
  );

  result.forEach((entry) => {
    if (entry.status === "fulfilled") {
      state.marketData.set(entry.value.symbol, entry.value);
    }
  });

  const demoCount = Array.from(state.marketData.values()).filter((series) => series.source === "demo").length;
  const liveCount = state.marketData.size - demoCount;
  if (demoCount === 0) {
    $("#statusLine").textContent = "";
  } else {
    $("#statusLine").textContent = "";
  }
}

function demoChipRows(symbol, days = 20) {
  const rows = [];
  const seed = symbol.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  let marginBalance = symbol === "2317" ? 86000 : 18000;
  let shortBalance = symbol === "2317" ? 5200 : 1200;
  for (let index = days * 2; index >= 0 && rows.length < days; index -= 1) {
    const date = new Date();
    date.setDate(date.getDate() - index);
    if (date.getDay() === 0 || date.getDay() === 6) continue;
    const wave = Math.sin((days - index + seed) / 3);
    const foreignNet = Math.round(wave * 4200 + ((seed % 7) - 3) * 300);
    const investmentTrustNet = Math.round(Math.cos((days - index + seed) / 4) * 950);
    const dealerNet = Math.round(Math.sin((days - index + seed) / 5) * 700);
    const totalNet = foreignNet + investmentTrustNet + dealerNet;
    marginBalance += Math.round(Math.cos((days - index + seed) / 2.7) * 850);
    shortBalance = Math.max(0, shortBalance + Math.round(Math.sin((days - index + seed) / 2.2) * 160));
    rows.push({
      date: `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`,
      foreignNet,
      investmentTrustNet,
      dealerNet,
      totalNet,
      marginBalance,
      shortBalance,
      source: "demo",
    });
  }
  return rows;
}

async function fetchJsonClient(url) {
  const response = await fetch(url, {
    headers: {
      accept: "application/json",
    },
  });
  if (!response.ok) throw new Error(`TWSE ${response.status}`);
  return response.json();
}

async function fetchInstitutionalClient(date, symbol) {
  const twseUrl = new URL("https://www.twse.com.tw/rwd/zh/fund/T86");
  twseUrl.searchParams.set("date", date);
  twseUrl.searchParams.set("selectType", "ALLBUT0999");
  twseUrl.searchParams.set("response", "json");
  const payload = await fetchJsonClient(twseUrl);
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

async function fetchMarginClient(date, symbol) {
  const twseUrl = new URL("https://www.twse.com.tw/rwd/zh/marginTrading/MI_MARGN");
  twseUrl.searchParams.set("date", date);
  twseUrl.searchParams.set("selectType", "ALL");
  twseUrl.searchParams.set("response", "json");
  const payload = await fetchJsonClient(twseUrl);
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

async function fetchChipRowsDirect(symbol, days = 20) {
  const rows = [];
  let cursor = new Date();
  let attempts = 0;
  while (rows.length < days && attempts < days * 3) {
    attempts += 1;
    if (cursor.getDay() !== 0 && cursor.getDay() !== 6) {
      const date = toYmd(cursor);
      try {
        const [inst, margin] = await Promise.all([
          fetchInstitutionalClient(date, symbol),
          fetchMarginClient(date, symbol),
        ]);
        if (inst) {
          rows.push({
            ...inst,
            ...(margin || {}),
            source: margin ? "twse-direct" : "twse-direct-partial",
          });
        }
      } catch (error) {
        // Skip holidays, unsettled days, CORS blocks, and transient TWSE responses.
      }
    }
    cursor = shiftDate(cursor, -1);
  }
  return rows.reverse();
}

async function loadChipData(symbol = state.chipSymbol, options = {}) {
  state.chipSymbol = symbol;
  if (!options.silent) {
    $("#statusLine").textContent = `載入 ${symbol} 每日籌碼資料中...`;
  }
  try {
    let rows = [];
    let source = "twse";
    if (location.protocol.startsWith("http")) {
      const response = await fetch(`/api/chips?symbol=${encodeURIComponent(symbol)}&days=20`);
      if (!response.ok) throw new Error(`Chip API ${response.status}`);
      const payload = await response.json();
      rows = Array.isArray(payload.data) && payload.data.length ? payload.data : [];
      source = payload.source || "twse";
    } else {
      rows = await fetchChipRowsDirect(symbol, 20);
      source = rows.length ? "twse-direct" : "demo";
    }
    if (!rows.length) {
      rows = demoChipRows(symbol);
      source = "demo";
    }
    state.chipData.set(symbol, {
      source,
      rows,
    });
  } catch (error) {
    try {
      const rows = await fetchChipRowsDirect(symbol, 20);
      state.chipData.set(symbol, {
        source: rows.length ? "twse-direct" : "demo",
        rows: rows.length ? rows : demoChipRows(symbol),
      });
    } catch (fallbackError) {
      state.chipData.set(symbol, {
        source: "demo",
        rows: demoChipRows(symbol),
      });
    }
  }
  const data = state.chipData.get(symbol);
  const item = companyByStockNo(symbol);
  const sourceText = chipSourceLabel(data.source);
  if (!options.silent || document.querySelector(".view.active")?.id === "chipsView") {
    $("#statusLine").textContent = `已更新 ${item?.name || symbol} 每日籌碼，來源 ${sourceText}。`;
  }
}

function normalizedData(series, days = rangeDays[state.range]) {
  const points = filteredPoints(series, days);
  const start = points[0]?.close;
  return points.map((point) => ({
    date: point.date,
    value: start ? ((point.close - start) / start) * 100 : 0,
  }));
}

function clearCanvas(canvas) {
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  return ctx;
}

function drawLineChart(canvas, seriesList, options = {}) {
  const ctx = clearCanvas(canvas);
  const width = canvas.width;
  const height = canvas.height;
  const pad = { top: 24, right: 24, bottom: 42, left: 56 };
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;
  const values = seriesList.flatMap((series) => series.data.map((point) => point.value));
  let min = Math.min(...values);
  let max = Math.max(...values);
  if (!Number.isFinite(min) || !Number.isFinite(max)) {
    min = -1;
    max = 1;
  }
  if (min === max) {
    min -= 1;
    max += 1;
  }
  const range = max - min;
  min -= range * 0.12;
  max += range * 0.12;

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#d9e1e8";
  ctx.lineWidth = 1;
  ctx.fillStyle = "#66717f";
  ctx.font = "24px Inter, Arial";

  for (let i = 0; i <= 4; i += 1) {
    const y = pad.top + (plotH * i) / 4;
    const value = max - ((max - min) * i) / 4;
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(width - pad.right, y);
    ctx.stroke();
    ctx.fillText(options.percent ? `${value.toFixed(1)}%` : formatNumber(value), 8, y + 8);
  }

  seriesList.forEach((series) => {
    ctx.strokeStyle = series.color;
    ctx.lineWidth = series.width || 3;
    ctx.beginPath();
    series.data.forEach((point, index) => {
      const x = pad.left + (plotW * index) / Math.max(series.data.length - 1, 1);
      const y = pad.top + plotH - ((point.value - min) / (max - min)) * plotH;
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    const last = series.data[series.data.length - 1];
    if (last && options.showLabels !== false) {
      const x = width - pad.right + 3;
      const y = pad.top + plotH - ((last.value - min) / (max - min)) * plotH;
      ctx.fillStyle = series.color;
      ctx.font = "22px Inter, Arial";
      ctx.fillText(series.name, Math.min(x, width - 120), Math.max(22, Math.min(height - 16, y)));
    }
  });

  const firstSeries = seriesList[0]?.data || [];
  if (firstSeries.length) {
    ctx.fillStyle = "#66717f";
    ctx.font = "22px Inter, Arial";
    const firstDate = firstSeries[0].date;
    const lastDate = firstSeries[firstSeries.length - 1].date;
    ctx.fillText(`${firstDate.getMonth() + 1}/${firstDate.getDate()}`, pad.left, height - 12);
    ctx.fillText(`${lastDate.getMonth() + 1}/${lastDate.getDate()}`, width - pad.right - 54, height - 12);
  }
}

function estimateSeries(values, metricKey) {
  const bias = {
    revenue: [-0.018, 0.012, -0.009, 0.016],
    gross: [-0.006, 0.004, -0.003, 0.005],
    opm: [-0.007, 0.006, -0.004, 0.004],
    eps: [-0.035, 0.024, -0.018, 0.028],
  }[metricKey];
  return values.map((value, index) => Number((value * (1 + bias[index % bias.length])).toFixed(2)));
}

function nextQuarterEstimate(values, metricKey) {
  const latest = values[values.length - 1] || 0;
  const previous = values[values.length - 2] || latest;
  const trend = latest - previous;
  const modifier = {
    revenue: 0.035,
    gross: 0.006,
    opm: 0.008,
    eps: 0.045,
  }[metricKey];
  return Number((latest + trend * 0.35 + latest * modifier).toFixed(2));
}

function parseQuarterLabel(label) {
  const match = String(label).match(/(\d{4})Q([1-4])/);
  if (!match) return null;
  return {
    year: Number(match[1]),
    quarter: Number(match[2]),
  };
}

function shortQuarterLabel(label, estimate = false) {
  const parsed = parseQuarterLabel(label);
  if (!parsed) return label;
  const year = String(parsed.year).slice(2);
  return `${year} Q${parsed.quarter}${estimate ? "E" : ""}`;
}

function fullQuarterLabel(label) {
  const parsed = parseQuarterLabel(label);
  if (!parsed) return label;
  return `${parsed.year} Q${parsed.quarter}`;
}

function nextQuarterLabel(label) {
  const parsed = parseQuarterLabel(label);
  if (!parsed) return "Next Q";
  const quarter = parsed.quarter === 4 ? 1 : parsed.quarter + 1;
  const year = parsed.quarter === 4 ? parsed.year + 1 : parsed.year;
  return `${year}Q${quarter}`;
}

function chipSourceLabel(source) {
  if (source === "demo") {
    return location.protocol === "file:" ? "示範資料（請改用 localhost / 部署站）" : "示範資料";
  }
  return "TWSE";
}

function earningsWindow(data) {
  const start = Math.max(0, data.labels.length - 3);
  const indexes = data.labels.slice(start).map((_, index) => start + index);
  const latestLabel = data.labels[indexes[indexes.length - 1]];
  return {
    indexes,
    labels: [...indexes.map((index) => shortQuarterLabel(data.labels[index])), shortQuarterLabel(nextQuarterLabel(latestLabel), true)],
  };
}

function drawEarningsMiniChart(canvas, config) {
  const ctx = clearCanvas(canvas);
  const width = canvas.width;
  const height = canvas.height;
  const pad = { top: 40, right: 34, bottom: 44, left: 62 };
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;
  const innerGutter = Math.min(32, plotW * 0.1);
  const pointW = plotW - innerGutter * 2;
  const allValues = [...config.actual, ...config.estimate].filter(Number.isFinite);
  let min = Math.min(...allValues);
  let max = Math.max(...allValues);
  if (!Number.isFinite(min) || !Number.isFinite(max)) {
    min = 0;
    max = 1;
  }
  const rawRange = max - min || Math.max(Math.abs(max) * 0.08, 1);
  const minimumRange = Math.max(Math.abs(max) * 0.12, config.minRange || 0);
  const visibleRange = Math.max(rawRange, minimumRange);
  const padding = visibleRange * 0.28;
  let axisMin = min - padding;
  let axisMax = max + padding;
  if (!config.allowNegative && axisMin < 0 && min >= 0) {
    axisMin = Math.max(0, min - padding);
  }
  if (axisMax === axisMin) axisMax = axisMin + 1;
  const yTicks = [axisMax, axisMin + (axisMax - axisMin) / 2, axisMin];
  const yFor = (value) => pad.top + plotH - ((value - axisMin) / (axisMax - axisMin)) * plotH;

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = "#edf2f6";
  ctx.lineWidth = 1;
  ctx.textBaseline = "middle";
  yTicks.forEach((tick) => {
    const y = yFor(tick);
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(width - pad.right, y);
    ctx.stroke();

    ctx.fillStyle = "#7a8793";
    ctx.font = "12px Inter, Arial";
    ctx.textAlign = "right";
    ctx.fillText(config.axisFormat(tick), pad.left - 8, y);
  });

  ctx.strokeStyle = "#b8c5cf";
  ctx.beginPath();
  ctx.moveTo(pad.left, pad.top);
  ctx.lineTo(pad.left, height - pad.bottom);
  ctx.stroke();

  ctx.fillStyle = "#202b36";
  ctx.font = "bold 20px Inter, Arial";
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillText(config.title, 16, 20);
  const latestIndex = config.actual.findLastIndex(Number.isFinite);
  if (latestIndex >= 0) {
    const titleWidth = ctx.measureText(config.title).width;
    ctx.fillStyle = config.color;
    ctx.font = "bold 15px Inter, Arial";
    ctx.fillText(config.format(config.actual[latestIndex]), 24 + titleWidth, 20);
  }

  ctx.font = "14px Inter, Arial";
  ctx.strokeStyle = `${config.color}b8`;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(width - 118, 20, 5, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = "#7a8793";
  ctx.fillText("預估", width - 108, 20);
  ctx.fillStyle = config.color;
  ctx.beginPath();
  ctx.arc(width - 58, 20, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillText("實際", width - 48, 20);

  const xFor = (index) => pad.left + innerGutter + (pointW * index) / Math.max(config.actual.length - 1, 1);
  const nextIndex = config.actual.findIndex((value) => !Number.isFinite(value));
  if (nextIndex >= 0) {
    const nextCenter = xFor(nextIndex);
    const regionX = Math.max(pad.left, nextCenter - pointW / Math.max(config.actual.length - 1, 1) / 2);
    ctx.fillStyle = "rgba(244, 248, 250, 0.48)";
    ctx.fillRect(regionX, pad.top, width - pad.right - regionX, height - pad.bottom - pad.top);
    ctx.strokeStyle = "#d9e1e8";
    ctx.setLineDash([4, 5]);
    ctx.beginPath();
    ctx.moveTo(regionX, pad.top);
    ctx.lineTo(regionX, height - pad.bottom);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  ctx.strokeStyle = `${config.color}38`;
  ctx.lineWidth = 1.7;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  config.estimate.forEach((estimate, index) => {
    const x = xFor(index);
    const y = yFor(estimate);
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.strokeStyle = `${config.color}64`;
  ctx.lineWidth = 1.9;
  ctx.beginPath();
  let startedActualLine = false;
  config.actual.forEach((actual, index) => {
    if (!Number.isFinite(actual)) return;
    const x = xFor(index);
    const y = yFor(actual);
    if (!startedActualLine) {
      ctx.moveTo(x, y);
      startedActualLine = true;
    } else {
      ctx.lineTo(x, y);
    }
  });
  if (startedActualLine) ctx.stroke();

  config.quarters.forEach((quarter, index) => {
    const actual = config.actual[index];
    const estimate = config.estimate[index];
    const center = xFor(index);
    const estimateY = yFor(estimate);
    const hasActual = Number.isFinite(actual);
    const actualY = hasActual ? yFor(actual) : null;
    const actualBeats = hasActual && actual >= estimate;

    if (hasActual) {
      ctx.strokeStyle = actualBeats ? "rgba(22, 135, 93, 0.28)" : "rgba(199, 71, 61, 0.26)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(center, estimateY);
      ctx.lineTo(center, actualY);
      ctx.stroke();
    }

    ctx.save();
    ctx.shadowColor = "rgba(31, 42, 55, 0.13)";
    ctx.shadowBlur = 8;
    ctx.shadowOffsetY = 2;
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = `${config.color}b8`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(center, estimateY, 6.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    if (hasActual) {
      ctx.save();
      ctx.shadowColor = "rgba(31, 42, 55, 0.16)";
      ctx.shadowBlur = 8;
      ctx.shadowOffsetY = 2;
      ctx.fillStyle = actualBeats ? config.color : "#c7473d";
      ctx.beginPath();
      ctx.arc(center, actualY, 6.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#ffffff";
      ctx.stroke();
      ctx.restore();

      const surprise = estimate ? ((actual - estimate) / Math.abs(estimate)) * 100 : 0;
      ctx.fillStyle = actualBeats ? "#16875d" : "#c7473d";
      ctx.font = "bold 13px Inter, Arial";
      ctx.textAlign = "center";
      const surpriseY = Math.max(pad.top + 13, Math.min(estimateY, actualY) - 14);
      ctx.fillText(`${actualBeats ? "+" : ""}${surprise.toFixed(1)}%`, center, surpriseY);
    } else {
      ctx.fillStyle = "#7a8793";
      ctx.font = "bold 12px Inter, Arial";
      ctx.textAlign = "center";
      ctx.fillText("預估", center, estimateY - 15);
    }

    ctx.fillStyle = "#66717f";
    ctx.font = !hasActual ? "bold 13px Inter, Arial" : "15px Inter, Arial";
    ctx.fillText(quarter, center, height - 18);
  });
  ctx.textAlign = "left";
}

function renderEarningsCharts(data) {
  const { indexes, labels } = earningsWindow(data);
  const metrics = [
    {
      canvas: "#revenueChart",
      title: "營收",
      key: "revenue",
      color: "#1f7a8c",
      values: data.revenue,
      format: (value) => `${formatNumber(value)} bn`,
      axisFormat: (value) => (Math.abs(value) >= 1000 ? `${(value / 1000).toFixed(1)}k` : formatNumber(value, 0)),
      minRange: 260,
    },
    {
      canvas: "#grossChart",
      title: "毛利率",
      key: "gross",
      color: "#b98518",
      values: data.gross,
      format: (value) => `${value.toFixed(1)}%`,
      axisFormat: (value) => `${value.toFixed(1)}%`,
      minRange: 0.6,
    },
    {
      canvas: "#opmChart",
      title: "營業利益率",
      key: "opm",
      color: "#16875d",
      values: data.opm,
      format: (value) => `${value.toFixed(1)}%`,
      axisFormat: (value) => `${value.toFixed(1)}%`,
      minRange: 0.5,
    },
    {
      canvas: "#epsChart",
      title: "EPS",
      key: "eps",
      color: "#315f9f",
      values: data.eps,
      format: (value) => formatNumber(value, 2),
      axisFormat: (value) => formatNumber(value, 1),
      minRange: 0.45,
    },
  ];

  metrics.forEach((metric) => {
    const actual = indexes.map((index) => metric.values[index]);
    const estimates = estimateSeries(actual, metric.key);
    const nextEstimate = nextQuarterEstimate(actual, metric.key);
    drawEarningsMiniChart($(metric.canvas), {
      title: metric.title,
      color: metric.color,
      quarters: labels,
      actual: [...actual, null],
      estimate: [...estimates, nextEstimate],
      format: metric.format,
      axisFormat: metric.axisFormat,
      minRange: metric.minRange,
      allowNegative: metric.key === "eps",
    });
  });
}

function drawPriceChart(canvas, points, accent = "#1f7a8c", options = {}) {
  const ctx = clearCanvas(canvas);
  const width = canvas.width;
  const height = canvas.height;
  const pad = { top: 26, right: 28, bottom: 30, left: 44 };
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;
  const values = points.flatMap((point) => [point.high, point.low, point.close]).filter(Number.isFinite);
  let min = Math.min(...values);
  let max = Math.max(...values);
  if (!Number.isFinite(min) || !Number.isFinite(max)) {
    min = 0;
    max = 1;
  }
  if (min === max) {
    min -= 1;
    max += 1;
  }
  const range = max - min;
  min -= range * 0.1;
  max += range * 0.14;
  const yFor = (value) => pad.top + plotH - ((value - min) / (max - min)) * plotH;
  const xFor = (index) => pad.left + (plotW * index) / Math.max(points.length - 1, 1);
  const drawSmoothClosePath = () => {
    if (!points.length) return;
    ctx.beginPath();
    points.forEach((point, index) => {
      const x = xFor(index);
      const y = yFor(point.close);
      if (index === 0) {
        ctx.moveTo(x, y);
        return;
      }
      const previous = points[index - 1];
      const previousX = xFor(index - 1);
      const previousY = yFor(previous.close);
      const midX = (previousX + x) / 2;
      const midY = (previousY + y) / 2;
      ctx.quadraticCurveTo(previousX, previousY, midX, midY);
      if (index === points.length - 1) {
        ctx.quadraticCurveTo(x, y, x, y);
      }
    });
  };

  const bg = ctx.createLinearGradient(0, 0, 0, height);
  bg.addColorStop(0, "#fbfdfe");
  bg.addColorStop(1, "#ffffff");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = "#e5ebf0";
  ctx.lineWidth = 1;
  ctx.fillStyle = "#7a8793";
  ctx.font = "15px Inter, Arial";
  ctx.textBaseline = "middle";
  for (let i = 0; i <= 3; i += 1) {
    const y = pad.top + (plotH * i) / 3;
    const value = max - ((max - min) * i) / 3;
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(width - pad.right, y);
    ctx.stroke();
    ctx.fillText(formatNumber(value, 1), 8, y);
  }

  if (points.length && options.mode !== "candle") {
    const area = ctx.createLinearGradient(0, pad.top, 0, height - pad.bottom);
    area.addColorStop(0, "rgba(31, 122, 140, 0.18)");
    area.addColorStop(0.68, "rgba(31, 122, 140, 0.045)");
    area.addColorStop(1, "rgba(31, 122, 140, 0)");
    drawSmoothClosePath();
    ctx.lineTo(xFor(points.length - 1), height - pad.bottom);
    ctx.lineTo(xFor(0), height - pad.bottom);
    ctx.closePath();
    ctx.fillStyle = area;
    ctx.fill();

    ctx.strokeStyle = accent;
    ctx.lineWidth = 3.5;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    drawSmoothClosePath();
    ctx.stroke();

    const latest = points[points.length - 1];
    const latestX = xFor(points.length - 1);
    const latestY = yFor(latest.close);
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = accent;
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.arc(latestX, latestY, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    const label = formatNumber(latest.close, 2);
    ctx.font = "bold 18px Inter, Arial";
    const labelW = ctx.measureText(label).width + 20;
    const labelX = Math.min(width - pad.right - labelW, Math.max(pad.left, latestX - labelW - 10));
    const labelY = Math.max(pad.top + 12, Math.min(height - pad.bottom - 18, latestY - 18));
    ctx.fillStyle = accent;
    ctx.beginPath();
    ctx.roundRect(labelX, labelY - 14, labelW, 28, 7);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.fillText(label, labelX + 10, labelY);
  }

  if (points.length && options.mode === "candle") {
    const candleW = Math.max(7, Math.min(22, plotW / Math.max(points.length, 1) * 0.58));
    points.forEach((point, index) => {
      const x = xFor(index);
      const openY = yFor(point.open);
      const closeY = yFor(point.close);
      const highY = yFor(point.high);
      const lowY = yFor(point.low);
      const rising = point.close >= point.open;
      const color = rising ? "#16875d" : "#c7473d";
      ctx.strokeStyle = color;
      ctx.fillStyle = rising ? "rgba(22, 135, 93, 0.78)" : "rgba(199, 71, 61, 0.78)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, highY);
      ctx.lineTo(x, lowY);
      ctx.stroke();
      const bodyY = Math.min(openY, closeY);
      const bodyH = Math.max(3, Math.abs(closeY - openY));
      ctx.fillRect(x - candleW / 2, bodyY, candleW, bodyH);
    });

    const latest = points[points.length - 1];
    const latestX = xFor(points.length - 1);
    const latestY = yFor(latest.close);
    const latestColor = latest.close >= latest.open ? "#16875d" : "#c7473d";
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = latestColor;
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.arc(latestX, latestY, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    const label = formatNumber(latest.close, 2);
    ctx.font = "bold 18px Inter, Arial";
    const labelW = ctx.measureText(label).width + 20;
    const labelX = Math.min(width - pad.right - labelW, Math.max(pad.left, latestX - labelW - 10));
    const labelY = Math.max(pad.top + 12, Math.min(height - pad.bottom - 18, latestY - 18));
    ctx.fillStyle = latestColor;
    ctx.beginPath();
    ctx.roundRect(labelX, labelY - 14, labelW, 28, 7);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.fillText(label, labelX + 10, labelY);
  }

  const latest = points[points.length - 1];
  if (latest && options.mode === "candle") {
    const meta = `O ${formatNumber(latest.open, 2)}  H ${formatNumber(latest.high, 2)}  L ${formatNumber(
      latest.low,
      2,
    )}  C ${formatNumber(latest.close, 2)}`;
    ctx.fillStyle = "#526170";
    ctx.font = "bold 15px Inter, Arial";
    ctx.textBaseline = "alphabetic";
    ctx.fillText(meta, pad.left, 22);
  }

  const firstDate = points[0]?.date;
  const lastDate = points[points.length - 1]?.date;
  if (firstDate && lastDate) {
    ctx.fillStyle = "#7a8793";
    ctx.font = "15px Inter, Arial";
    ctx.textBaseline = "alphabetic";
    if (options.intraday) {
      const timeText = (date) =>
        `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
      ctx.fillText(timeText(firstDate), pad.left, height - 12);
      ctx.fillText(timeText(lastDate), width - pad.right - 52, height - 12);
    } else {
      ctx.fillText(`${firstDate.getMonth() + 1}/${firstDate.getDate()}`, pad.left, height - 12);
      ctx.fillText(`${lastDate.getMonth() + 1}/${lastDate.getDate()}`, width - pad.right - 42, height - 12);
    }
  }
}

function drawChipChart(canvas, rows) {
  const ctx = clearCanvas(canvas);
  const width = canvas.width;
  const height = canvas.height;
  const pad = { top: 24, right: 74, bottom: 44, left: 68 };
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;
  const netValues = rows.flatMap((row) => [row.totalNet, row.foreignNet]).filter(Number.isFinite);
  const marginValues = rows.map((row) => row.marginBalance).filter(Number.isFinite);
  const netAbs = Math.max(1, ...netValues.map((value) => Math.abs(value)));
  const marginMin = Math.min(...marginValues);
  const marginMax = Math.max(...marginValues);
  const marginRange = Math.max(1, marginMax - marginMin);
  const zeroY = pad.top + plotH / 2;
  const barW = Math.max(8, plotW / Math.max(rows.length, 1) - 8);

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#d9e1e8";
  ctx.lineWidth = 1;
  ctx.fillStyle = "#66717f";
  ctx.font = "22px Inter, Arial";

  for (let i = 0; i <= 4; i += 1) {
    const y = pad.top + (plotH * i) / 4;
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(width - pad.right, y);
    ctx.stroke();
  }

  ctx.strokeStyle = "#98a8b6";
  ctx.beginPath();
  ctx.moveTo(pad.left, zeroY);
  ctx.lineTo(width - pad.right, zeroY);
  ctx.stroke();
  ctx.fillText("買超", 12, pad.top + 14);
  ctx.fillText("賣超", 12, height - pad.bottom - 4);
  ctx.fillText("融資", width - pad.right + 14, pad.top + 14);

  rows.forEach((row, index) => {
    const x = pad.left + (plotW * index) / Math.max(rows.length - 1, 1);
    const barHeight = Math.abs(row.totalNet / netAbs) * (plotH * 0.44);
    const y = row.totalNet >= 0 ? zeroY - barHeight : zeroY;
    ctx.fillStyle = row.totalNet >= 0 ? "rgba(31, 122, 140, 0.72)" : "rgba(199, 71, 61, 0.68)";
    ctx.fillRect(x - barW / 2, y, barW, Math.max(2, barHeight));
  });

  ctx.strokeStyle = "#c7473d";
  ctx.lineWidth = 3;
  ctx.beginPath();
  rows.forEach((row, index) => {
    const x = pad.left + (plotW * index) / Math.max(rows.length - 1, 1);
    const y = zeroY - (row.foreignNet / netAbs) * (plotH * 0.44);
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  ctx.strokeStyle = "#315f9f";
  ctx.lineWidth = 3;
  ctx.beginPath();
  rows.forEach((row, index) => {
    const x = pad.left + (plotW * index) / Math.max(rows.length - 1, 1);
    const y = pad.top + plotH - ((row.marginBalance - marginMin) / marginRange) * plotH;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  const firstDate = rows[0]?.date;
  const lastDate = rows[rows.length - 1]?.date;
  if (firstDate && lastDate) {
    ctx.fillStyle = "#66717f";
    ctx.font = "22px Inter, Arial";
    ctx.fillText(`${Number(firstDate.slice(4, 6))}/${Number(firstDate.slice(6, 8))}`, pad.left, height - 12);
    ctx.fillText(`${Number(lastDate.slice(4, 6))}/${Number(lastDate.slice(6, 8))}`, width - pad.right - 40, height - 12);
  }
}

function updateHero() {
  const foxconn = state.marketData.get("2317.TW");
  const point = latestPoint(foxconn);
  const percent = changePercent(foxconn, 1);
  $("#foxconnPrice").textContent = formatNumber(point.close, 2);
  $("#foxconnChange").textContent = formatPercent(percent);
  $("#foxconnChange").className = `change ${percent > 0 ? "up" : percent < 0 ? "down" : "neutral"}`;
  $("#foxconnUpdated").textContent = `更新 ${point.date.toLocaleDateString("zh-TW")}`;
  renderHeroCharts();
}

function heroPoints() {
  const foxconn = state.marketData.get("2317.TW");
  return filteredPoints(foxconn, heroRangeDays[state.heroRange]);
}

function heroRangeLabel() {
  return state.heroRange.toUpperCase().replace("1MO", "1M").replace("3MO", "3M").replace("6MO", "6M");
}

function renderHeroCharts() {
  const points = heroPoints();
  const accent = company("2317.TW").color;
  drawPriceChart($("#foxconnChart"), points, accent, { mode: state.chartMode, intraday: false });
  if ($("#chartModal").classList.contains("open")) {
    drawPriceChart($("#foxconnChartLarge"), points, accent, { mode: state.chartMode, intraday: false });
  }
  const latest = points[points.length - 1];
  if (latest) {
    $("#modalChartMeta").textContent = `${heroRangeLabel()} · ${
      state.chartMode === "candle" ? "K線" : "線圖"
    } · ${latest.date.toLocaleDateString("zh-TW")}`;
  }
}

function syncHeroControls() {
  $$("[data-hero-range]").forEach((item) => item.classList.toggle("active", item.dataset.heroRange === state.heroRange));
  $$("[data-chart-mode]").forEach((item) => item.classList.toggle("active", item.dataset.chartMode === state.chartMode));
}

function stockBadge(series) {
  const percent = changePercent(series);
  return `<span class="change ${percent > 0 ? "up" : percent < 0 ? "down" : "neutral"}">${formatPercent(percent)}</span>`;
}

function renderSnapshot() {
  const keySymbols = ["2317.TW", "2354.TW", "601138.SS", "6088.HK", "2382.TW", "2330.TW"];
  const rows = keySymbols.map((symbol) => {
    const item = company(symbol);
    const series = state.marketData.get(symbol);
    const day1 = periodReturn(series, 1);
    const day10 = periodReturn(series, 10);
    const day30 = periodReturn(series, 30);
    const price = formatNumber(latestPoint(series).close);
    const tone = (value) => (value > 0 ? "up" : value < 0 ? "down" : "neutral");
    return {
      item,
      symbol,
      price,
      day1,
      day10,
      day30,
      tone,
    };
  });

  $("#snapshotList").innerHTML = rows
    .map(
      ({ item, symbol, price, day1, day10, day30, tone }) => `<tr>
        <td>
          <strong>${item.name}</strong>
          <div class="snapshot-symbol">${symbol}</div>
        </td>
        <td>${price}</td>
        <td><span class="return-value ${tone(day1)}">${formatPercent(day1)}</span></td>
        <td><span class="return-value ${tone(day10)}">${formatPercent(day10)}</span></td>
        <td><span class="return-value ${tone(day30)}">${formatPercent(day30)}</span></td>
      </tr>`,
    )
    .join("");

  $("#snapshotMobileList").innerHTML = rows
    .map(
      ({ item, symbol, price, day1, day10, day30, tone }) => `<article class="snapshot-mobile-card">
        <div class="snapshot-mobile-head">
          <div>
            <div class="snapshot-name">${item.name}</div>
            <div class="snapshot-symbol">${symbol}</div>
          </div>
          <strong class="snapshot-mobile-price">${price}</strong>
        </div>
        <div class="snapshot-mobile-metrics">
          <div>
            <span>1D</span>
            <strong class="${tone(day1)}">${formatPercent(day1)}</strong>
          </div>
          <div>
            <span>10D</span>
            <strong class="${tone(day10)}">${formatPercent(day10)}</strong>
          </div>
          <div>
            <span>30D</span>
            <strong class="${tone(day30)}">${formatPercent(day30)}</strong>
          </div>
        </div>
      </article>`,
    )
    .join("");
}

function renderChartLegend(selector, symbols, options = {}) {
  $(selector).innerHTML = symbols
    .map((symbol) => {
      const item = company(symbol);
      const displaySymbol = symbol.replace(".TW", "").replace(".HK", "").replace(".SS", "");
      const symbolText = options.showSymbol === false ? "" : ` ${displaySymbol}`;
      return `<span class="legend-item">
        <span class="legend-swatch" style="--legend-color:${item.color}"></span>
        ${item.name}${symbolText}
      </span>`;
    })
    .join("");
}

function renderAffiliateSection() {
  const symbols = Array.from(state.visibleAffiliates);
  renderChartLegend("#affiliateLegend", symbols);
  const data = symbols.map((symbol) => {
    const item = company(symbol);
    return {
      name: item.name,
      color: item.color,
      data: normalizedData(state.marketData.get(symbol)).map((point) => ({
        date: point.date,
        value: point.value,
      })),
    };
  });
  drawLineChart($("#affiliateChart"), data, { percent: true, showLabels: false });

  $("#affiliateRows").innerHTML = symbols
    .map((symbol) => {
      const item = company(symbol);
      const series = state.marketData.get(symbol);
      return `<tr>
        <td><strong>${item.name}</strong></td>
        <td>${symbol}</td>
        <td>${formatNumber(latestPoint(series).close)}</td>
        <td>${stockBadge(series)}</td>
        <td>${item.role}</td>
      </tr>`;
    })
    .join("");
}

function renderPeerSection() {
  const symbols = ["2317.TW", "2382.TW", "2324.TW", "3231.TW", "2356.TW", "4938.TW"];
  renderChartLegend("#peerLegend", symbols, { showSymbol: false });

  drawLineChart(
    $("#peerChart"),
    symbols.map((symbol) => {
      const item = company(symbol);
      return {
        name: item.name,
        color: item.color,
        data: normalizedData(state.marketData.get(symbol)),
      };
    }),
    { percent: true, showLabels: false },
  );

  $("#peerRows").innerHTML = symbols
    .map((symbol) => {
      const item = company(symbol);
      const series = state.marketData.get(symbol);
      return `<tr>
        <td><strong>${item.name}</strong></td>
        <td>${symbol}</td>
        <td>${formatNumber(latestPoint(series).close)}</td>
        <td>${stockBadge(series)}</td>
        <td>${item.role}</td>
      </tr>`;
    })
    .join("");
}

function renderBenchmark() {
  const symbols = ["2317.TW", "2330.TW", "^TWII"];
  renderChartLegend("#benchmarkLegend", symbols);
  drawLineChart(
    $("#benchmarkChart"),
    symbols.map((symbol) => {
      const item = company(symbol);
      return {
        name: item.name,
        color: item.color,
        data: normalizedData(state.marketData.get(symbol)),
        width: symbol === "2317.TW" ? 4 : 3,
      };
    }),
    { percent: true, showLabels: false },
  );
}

function renderFinancialCompanyOptions() {
  const select = $("#financialCompany");
  select.innerHTML = Object.keys(financials)
    .map((symbol) => `<option value="${symbol}">${company(symbol).name} ${symbol}</option>`)
    .join("");
}

function renderChipCompanyOptions() {
  const select = $("#chipCompany");
  select.innerHTML = twseChipSymbols
    .map((stockNo) => {
      const item = companyByStockNo(stockNo);
      return `<option value="${stockNo}">${item?.name || stockNo} ${stockNo}</option>`;
    })
    .join("");
  select.value = state.chipSymbol;
}

function latestFinancial(symbol) {
  const data = financials[symbol];
  const index = data.labels.length - 1;
  return {
    revenue: data.revenue[index],
    gross: data.gross[index],
    opm: data.opm[index],
    eps: data.eps[index],
  };
}

function renderFinancials() {
  const symbol = $("#financialCompany").value || "2317.TW";
  const data = financials[symbol];
  $("#financeTickerLabel").textContent = symbol;
  renderEarningsCharts(data);

  const latest = latestFinancial(symbol);
  const compareBase = financials["2317.TW"] || data;
  const latestCompareQuarter = compareBase.labels[compareBase.labels.length - 1];
  $("#financeCompareQuarter").textContent = fullQuarterLabel(latestCompareQuarter);
  $("#metricGrid").innerHTML = [
    ["季度營收", `${formatNumber(latest.revenue)} bn`],
    ["毛利率", `${latest.gross.toFixed(1)}%`],
    ["營業利益率", `${latest.opm.toFixed(1)}%`],
    ["EPS", formatNumber(latest.eps, 2)],
  ]
    .map(
      ([label, value]) => `<article class="metric-card">
        <div class="metric-label">${label}</div>
        <div class="metric-value">${value}</div>
      </article>`,
    )
    .join("");

  $("#financeRows").innerHTML = Object.keys(financials)
    .map((itemSymbol) => {
      const item = company(itemSymbol);
      const itemData = financials[itemSymbol];
      const latestIndex = itemData.labels.length - 1;
      const previous = itemData.revenue[latestIndex - 4] || itemData.revenue[0];
      const revenueYoy = ((itemData.revenue[latestIndex] - previous) / previous) * 100;
      return `<tr>
        <td><strong>${item.name}</strong></td>
        <td>${formatPercent(revenueYoy)}</td>
        <td>${itemData.gross[latestIndex].toFixed(1)}%</td>
        <td>${itemData.opm[latestIndex].toFixed(1)}%</td>
        <td>${formatNumber(itemData.eps[latestIndex], 2)}</td>
        <td>${itemData.focus}</td>
      </tr>`;
    })
    .join("");
}

function renderChips() {
  const symbol = $("#chipCompany").value || state.chipSymbol;
  const data = state.chipData.get(symbol);
  const rows = data?.rows || [];
  if (!rows.length) return;
  const latest = rows[rows.length - 1];
  const sourceText = chipSourceLabel(data.source);
  $("#chipDateLabel").textContent = latest.date.replace(/(\d{4})(\d{2})(\d{2})/, "$1/$2/$3");
  $("#chipSourceLabel").textContent = `${sourceText} · 單位：張`;
  drawChipChart($("#chipChart"), rows);

  $("#chipMetricGrid").innerHTML = [
    ["外資買賣超", formatSigned(latest.foreignNet)],
    ["投信買賣超", formatSigned(latest.investmentTrustNet)],
    ["自營商買賣超", formatSigned(latest.dealerNet)],
    ["三大法人合計", formatSigned(latest.totalNet)],
    ["融資餘額", formatNumber(latest.marginBalance, 0)],
    ["融券餘額", formatNumber(latest.shortBalance, 0)],
  ]
    .map(
      ([label, value]) => `<article class="metric-card">
        <div class="metric-label">${label}</div>
        <div class="metric-value">${value}</div>
      </article>`,
    )
    .join("");

  $("#chipRows").innerHTML = rows
    .slice()
    .reverse()
    .map(
      (row) => `<tr>
        <td>${row.date.replace(/(\d{4})(\d{2})(\d{2})/, "$1/$2/$3")}</td>
        <td>${formatSigned(row.foreignNet)}</td>
        <td>${formatSigned(row.investmentTrustNet)}</td>
        <td>${formatSigned(row.dealerNet)}</td>
        <td><strong>${formatSigned(row.totalNet)}</strong></td>
        <td>${formatNumber(row.marginBalance, 0)}</td>
        <td>${formatNumber(row.shortBalance, 0)}</td>
      </tr>`,
    )
    .join("");
}

function renderAll() {
  updateHero();
  syncHeroControls();
  renderSnapshot();
  renderAffiliateSection();
  renderPeerSection();
  renderBenchmark();
  renderFinancials();
  renderChips();
}

function bindEvents() {
  const railToggle = $("#railToggle");
  if (railToggle) {
    railToggle.addEventListener("click", () => {
      const rail = document.querySelector(".rail");
      const open = rail.classList.toggle("open");
      railToggle.setAttribute("aria-expanded", String(open));
    });

    document.addEventListener("click", (event) => {
      const rail = document.querySelector(".rail");
      if (!rail.contains(event.target)) {
        rail.classList.remove("open");
        railToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  $$(".nav-tab").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".nav-tab").forEach((tab) => tab.classList.remove("active"));
      button.classList.add("active");
      $$(".view").forEach((view) => view.classList.remove("active"));
      $(`#${button.dataset.view}View`).classList.add("active");
      document.querySelector(".rail").classList.remove("open");
      if (railToggle) railToggle.setAttribute("aria-expanded", "false");
      renderFinancials();
      renderChips();
    });
  });

  $$(".tool-button").forEach((button) => {
    button.addEventListener("click", async () => {
      $$(".tool-button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.range = button.dataset.range;
      await loadMarketData();
      renderAll();
    });
  });

  $$("[data-symbol-toggle]").forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) state.visibleAffiliates.add(input.dataset.symbolToggle);
      else state.visibleAffiliates.delete(input.dataset.symbolToggle);
      if (!state.visibleAffiliates.size) {
        state.visibleAffiliates.add("2317.TW");
        $("[data-symbol-toggle='2317.TW']").checked = true;
      }
      renderAffiliateSection();
    });
  });

  $("#refreshButton").addEventListener("click", async () => {
    await loadMarketData();
    await loadChipData(state.chipSymbol, { silent: true });
    renderAll();
  });

  $("#financialCompany").addEventListener("change", renderFinancials);
  $("#chipCompany").addEventListener("change", async () => {
    await loadChipData($("#chipCompany").value);
    renderChips();
  });

  $$("[data-hero-range]").forEach((button) => {
    button.addEventListener("click", () => {
      state.heroRange = button.dataset.heroRange;
      syncHeroControls();
      renderHeroCharts();
    });
  });

  $$("[data-chart-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.chartMode = button.dataset.chartMode;
      syncHeroControls();
      renderHeroCharts();
    });
  });

  $("#foxconnChart").addEventListener("click", () => {
    state.chartMode = state.chartMode === "line" ? "candle" : "line";
    syncHeroControls();
    renderHeroCharts();
  });

  $("#expandHeroChart").addEventListener("click", () => {
    $("#chartModal").classList.add("open");
    $("#chartModal").setAttribute("aria-hidden", "false");
    renderHeroCharts();
  });

  $$("[data-close-chart-modal]").forEach((button) => {
    button.addEventListener("click", () => {
      $("#chartModal").classList.remove("open");
      $("#chartModal").setAttribute("aria-hidden", "true");
    });
  });
}

async function init() {
  renderFinancialCompanyOptions();
  renderChipCompanyOptions();
  bindEvents();
  await loadMarketData();
  renderAll();
  loadChipData(state.chipSymbol, { silent: true })
    .then(renderChips)
    .catch((error) => console.warn("Chip data load failed", error));
  renderAll();
}

init().catch((error) => {
  console.error(error);
  $("#statusLine").textContent = "載入失敗，請檢查網路或稍後再試。";
});
