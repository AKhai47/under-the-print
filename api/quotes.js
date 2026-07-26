// Vercel serverless function — proxies Twelve Data's /quote endpoint so the API
// key stays server-side and is never shipped to the browser. Configure the key
// as an Environment Variable named TWELVEDATA_API_KEY in the Vercel project.
//
// Twelve Data's free tier allows only 8 API credits/minute and a 7-symbol quote
// costs 7 credits, so we (a) edge-cache good responses to avoid re-hitting the
// upstream on every load, and (b) serve the last good payload through a transient
// 429 so a momentary rate limit never drops the tape to "partial".

const ALLOWED = new Set(['SPY', 'QQQ', 'DIA', 'IWM', 'GLD', 'BNO', 'VIXY']);
const LAST_GOOD_TTL = 15 * 60 * 1000; // survives only while the lambda stays warm

let lastGood = null; // { at, data }

module.exports = async (req, res) => {
  const key = process.env.TWELVEDATA_API_KEY;
  if (!key) {
    res.setHeader('Cache-Control', 'no-store');
    res.status(500).json({ code: 500, message: 'TWELVEDATA_API_KEY is not configured' });
    return;
  }

  // Allowlist the tape's own symbols so the proxy can't be used as an open relay
  // to burn the key's quota on arbitrary lookups.
  const requested = String((req.query && req.query.symbol) || '')
    .split(',').map((s) => s.trim().toUpperCase()).filter(Boolean);
  const symbols = requested.filter((s) => ALLOWED.has(s));
  if (!symbols.length) {
    res.setHeader('Cache-Control', 'no-store');
    res.status(400).json({ code: 400, message: 'no valid symbols requested' });
    return;
  }

  // Good responses are cached at the edge for 5 min and served stale for up to an
  // hour while a single background revalidation refreshes them.
  const serveGood = (data) => {
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=3600');
    res.status(200).json(data);
  };

  try {
    const url = 'https://api.twelvedata.com/quote?symbol=' +
      encodeURIComponent(symbols.join(',')) + '&apikey=' + encodeURIComponent(key);
    const upstream = await fetch(url);
    const data = await upstream.json();
    const errored = data && data.code && data.code >= 400;

    if (!errored) {
      lastGood = { at: Date.now(), data };
      serveGood(data);
      return;
    }

    // Upstream error (typically 429 rate limit): fall back to the last good
    // payload if it's still fresh, so the tape stays live.
    if (lastGood && Date.now() - lastGood.at < LAST_GOOD_TTL) {
      serveGood(lastGood.data);
      return;
    }
    res.setHeader('Cache-Control', 'no-store'); // don't cache the error
    res.status(200).json(data); // client will fall back to partial
  } catch (e) {
    if (lastGood && Date.now() - lastGood.at < LAST_GOOD_TTL) {
      serveGood(lastGood.data);
      return;
    }
    res.setHeader('Cache-Control', 'no-store');
    res.status(502).json({ code: 502, message: 'upstream fetch failed' });
  }
};
