function sendJson(res, status, payload) {
  res.status(status).setHeader("cache-control", "no-store");
  res.json(payload);
}

module.exports = async function handler(req, res) {
  const symbol = req.query.symbol;
  const days = Number(req.query.days || 92);
  const range = req.query.range;
  const requestedInterval = req.query.interval || "1d";

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
    res
      .status(upstream.ok ? 200 : upstream.status)
      .setHeader("content-type", "application/json; charset=utf-8");
    res.setHeader("cache-control", "public, max-age=60");
    res.send(text);
  } catch (error) {
    sendJson(res, 502, { error: error.message });
  }
};
