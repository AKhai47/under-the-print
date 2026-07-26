// Live market feed for the Under the Print tape.
//
// Tiers:
//   keyless  — stablecoin market caps (CoinGecko), USD/JPY (Frankfurter). Always live.
//   keyed    — equity/vol/commodity quotes via Twelve Data (free tier). Needs an API key.
//   static   — policy prints (Fed funds, CPI, core PCE, Section 301) that no free quote
//              API carries. Hard-coded with an as-of date and labelled as such.
//
// Key resolution order: ?feedkey=... (persisted) -> localStorage -> prop passed in.
// A Twelve Data free key is read-only and rate-limited, but it IS visible in a public
// static site's network tab. That is the trade for having no backend.

const LS_KEY = 'utp-feed-key';
const LS_CACHE = 'utp-feed-cache';
const CACHE_MS = 12 * 60 * 60 * 1000;

export const STATIC_AS_OF = 'JUL 24 2026';

// Fallback tape — real July 24 2026 closes. Shown until live data lands, and kept
// as the display if every request fails.
export const STATIC_ITEMS = [
  { label: 'S&P fut', value: '7,441.50 ▾3.50', dir: 'down' },
  { label: 'Dow fut', value: '51,911 ▲17', dir: 'up' },
  { label: 'Nasdaq fut', value: '28,548 ▾72.75', dir: 'down' },
  { label: 'Russell fut', value: '2,944.90 ▾6.80', dir: 'down' },
  { label: 'VIX', value: '18.70 ▲2.06', dir: 'down' },
  { label: 'Gold', value: '4,029.40 ▾20.80', dir: 'down' },
  { label: 'Brent', value: '<75', dir: 'up' },
  { label: 'Fed funds', value: '3.50–3.75%', dir: 'flat' },
  { label: 'CPI YoY', value: '4.1%', dir: 'down' },
  { label: 'Core PCE', value: '3.4%', dir: 'down' },
  { label: 'Stablecoins', value: '$230bn', dir: 'flat' },
  { label: 'USDT', value: '$142bn', dir: 'flat' },
  { label: 'USDC', value: '$60bn', dir: 'flat' },
  { label: 'Sec 301', value: '10–12.5%', dir: 'flat' }
];

// Policy prints. No free feed carries these; they change on a release calendar, so
// they are maintained by hand and stamped.
const POLICY = [
  { label: 'Fed funds', value: '3.50–3.75%', dir: 'flat' },
  { label: 'CPI YoY', value: '4.1%', dir: 'down' },
  { label: 'Core PCE', value: '3.4%', dir: 'down' },
  { label: 'Sec 301', value: '10–12.5%', dir: 'flat' }
];

// Twelve Data free tier covers US equities/ETFs and FX, not index or futures symbols.
// So the tape quotes the instruments actually being fetched — ETF proxies, named as
// ETFs. Never label an ETF print as a futures print.
const KEYED = [
  { symbol: 'SPY', label: 'SPY' },
  { symbol: 'QQQ', label: 'QQQ' },
  { symbol: 'DIA', label: 'DIA' },
  { symbol: 'IWM', label: 'IWM' },
  { symbol: 'GLD', label: 'GLD' },
  { symbol: 'BNO', label: 'BNO' },
  { symbol: 'VIXY', label: 'VIXY' }
];

export function resolveKey(propKey) {
  try {
    const q = new URLSearchParams(location.search).get('feedkey');
    if (q) { localStorage.setItem(LS_KEY, q.trim()); return q.trim(); }
    const stored = localStorage.getItem(LS_KEY);
    if (stored) return stored;
  } catch (e) {}
  return (propKey || '').trim();
}

function num(n, digits) {
  return Number(n).toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

function money(n) {
  if (!isFinite(n)) return null;
  if (n >= 1e12) return '$' + num(n / 1e12, 2) + 'tn';
  if (n >= 1e9) return '$' + num(n / 1e9, 0) + 'bn';
  return '$' + num(n / 1e6, 0) + 'mn';
}

async function json(url, ms = 6000) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    const r = await fetch(url, { signal: ctrl.signal });
    if (!r.ok) throw new Error(r.status);
    return await r.json();
  } finally { clearTimeout(t); }
}

async function fetchQuotes(key) {
  const symbols = KEYED.map(k => k.symbol).join(',');
  const d = await json('https://api.twelvedata.com/quote?symbol=' + symbols + '&apikey=' + encodeURIComponent(key));
  if (d.code && d.code >= 400) throw new Error(d.message || 'quote error');
  const out = [];
  for (const k of KEYED) {
    const q = d[k.symbol] || (d.symbol === k.symbol ? d : null);
    if (!q || q.close == null) continue;
    const chg = Number(q.change);
    const dir = chg > 0 ? 'up' : chg < 0 ? 'down' : 'flat';
    const arrow = chg > 0 ? '▲' : chg < 0 ? '▾' : '·';
    out.push({
      label: k.label,
      value: num(q.close, 2) + ' ' + arrow + Math.abs(chg).toFixed(2),
      dir
    });
  }
  return out;
}

async function fetchStables() {
  const d = await json('https://api.coingecko.com/api/v3/simple/price?ids=tether,usd-coin&vs_currencies=usd&include_market_cap=true');
  const t = d.tether && d.tether.usd_market_cap;
  const c = d['usd-coin'] && d['usd-coin'].usd_market_cap;
  const out = [];
  if (t && c) out.push({ label: 'Stablecoins', value: money(t + c) + '+', dir: 'flat' });
  if (t) out.push({ label: 'USDT', value: money(t), dir: 'flat' });
  if (c) out.push({ label: 'USDC', value: money(c), dir: 'flat' });
  // Peg drift is the actual story on a stablecoin line, so print it when it matters.
  const peg = d.tether && d.tether.usd;
  if (peg && Math.abs(peg - 1) >= 0.002) {
    out.push({ label: 'USDT peg', value: peg.toFixed(4), dir: peg < 1 ? 'down' : 'up' });
  }
  return out;
}

async function fetchFx() {
  const d = await json('https://api.frankfurter.dev/v1/latest?base=USD&symbols=JPY,EUR');
  const out = [];
  if (d.rates && d.rates.JPY) out.push({ label: 'USDJPY', value: num(d.rates.JPY, 2), dir: 'flat' });
  if (d.rates && d.rates.EUR) out.push({ label: 'EURUSD', value: (1 / d.rates.EUR).toFixed(4), dir: 'flat' });
  return out;
}

function readCache() {
  try {
    const raw = localStorage.getItem(LS_CACHE);
    if (!raw) return null;
    const c = JSON.parse(raw);
    if (!c.items || !c.items.length) return null;
    if (Date.now() - c.at > CACHE_MS) return { ...c, stale: true };
    return c;
  } catch (e) { return null; }
}

function writeCache(payload) {
  try { localStorage.setItem(LS_CACHE, JSON.stringify(payload)); } catch (e) {}
}

/**
 * Returns { items, mode, asOf, note }.
 *   mode: 'live'   — at least one keyed quote came back
 *         'part'   — keyless data only (no key, or quote provider refused)
 *         'static' — nothing came back; showing the July 24 snapshot
 */
export async function loadTape(propKey) {
  const key = resolveKey(propKey);
  const cached = readCache();
  if (cached && !cached.stale) return { ...cached, cached: true };

  const jobs = [fetchStables().catch(() => null), fetchFx().catch(() => null)];
  if (key) jobs.unshift(fetchQuotes(key).catch(() => null));
  const res = await Promise.all(jobs);
  const quotes = key ? res[0] : null;
  const stables = key ? res[1] : res[0];
  const fx = key ? res[2] : res[1];

  const live = [];
  if (quotes && quotes.length) live.push(...quotes);
  if (fx && fx.length) live.push(...fx);
  if (stables && stables.length) live.push(...stables);

  if (!live.length) {
    if (cached) return { ...cached, stale: true };
    return { items: STATIC_ITEMS, mode: 'static', asOf: STATIC_AS_OF, note: 'feed unavailable' };
  }

  const stamp = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'America/New_York' }) + ' ET';
  const payload = {
    items: [...live, ...POLICY],
    mode: quotes && quotes.length ? 'live' : 'part',
    asOf: stamp,
    at: Date.now()
  };
  writeCache(payload);
  return payload;
}

// Shared view-model for the tape. Both Home and Note render the same bar.
export function tapeVals(feed) {
  const items = (feed && feed.items && feed.items.length) ? feed.items : STATIC_ITEMS;
  const mode = feed ? feed.mode : 'static';
  const color = { up: 'var(--up)', down: 'var(--down)', flat: 'var(--faint)' };
  return {
    tape: items.map(i => ({ label: i.label, value: i.value, color: color[i.dir] || 'var(--faint)' })),
    feedStamp: mode === 'live' ? 'LIVE ' + feed.asOf
      : mode === 'part' ? 'LIVE (PARTIAL) ' + feed.asOf
      : 'CLOSE ' + STATIC_AS_OF,
    feedDot: mode === 'static' ? 'var(--faint)' : 'var(--up)'
  };
}
