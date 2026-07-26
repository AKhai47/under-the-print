// Vercel serverless function — proxies Twelve Data's /quote endpoint so the API
// key stays server-side and is never shipped to the browser. Configure the key
// as an Environment Variable named TWELVEDATA_API_KEY in the Vercel project
// (Settings -> Environment Variables). Nothing here is committed.

const ALLOWED = new Set(['SPY', 'QQQ', 'DIA', 'IWM', 'GLD', 'BNO', 'VIXY']);

module.exports = async (req, res) => {
  const key = process.env.TWELVEDATA_API_KEY;
  if (!key) {
    res.status(500).json({ code: 500, message: 'TWELVEDATA_API_KEY is not configured' });
    return;
  }

  // Allowlist the tape's own symbols so the proxy can't be used as an open relay
  // to burn the key's quota on arbitrary lookups.
  const requested = String((req.query && req.query.symbol) || '')
    .split(',').map((s) => s.trim().toUpperCase()).filter(Boolean);
  const symbols = requested.filter((s) => ALLOWED.has(s));
  if (!symbols.length) {
    res.status(400).json({ code: 400, message: 'no valid symbols requested' });
    return;
  }

  try {
    const url = 'https://api.twelvedata.com/quote?symbol=' +
      encodeURIComponent(symbols.join(',')) + '&apikey=' + encodeURIComponent(key);
    const upstream = await fetch(url);
    const data = await upstream.json();
    // Cache at the edge briefly; the client also caches the tape for 12h.
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    res.status(200).json(data);
  } catch (e) {
    res.status(502).json({ code: 502, message: 'upstream fetch failed' });
  }
};
