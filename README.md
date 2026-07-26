# Handoff: Under the Print — host on GitHub Pages

## Overview
Anthony Khaimov's markets-research site. Static, no build step, no backend. Task: get it live on GitHub Pages (free) with a custom domain later.

## About these files
These are finished, production HTML — not mockups to recreate. `support.js` is a small runtime these pages depend on (template directives, component logic) and must ship alongside them as-is; don't rewrite it into React/Vue/etc. This is a "deploy as static files" job, not a "reimplement the design" job.

## What to do
1. Create a GitHub repo, commit these files at the repo root.
2. **Rename `Post Open Weights.dc.html`** to something without spaces first — e.g. `post-open-weights.dc.html` (spaces break cleanly in URLs/GitHub Pages). Update the one link to it in `Home.dc.html` (`href="Post Open Weights.dc.html"`) to match.
3. Add `index.html` that either redirects to `Home.dc.html` or is a copy/rename of it — GitHub Pages serves `index.html` at the domain root by default. Simplest: rename `Home.dc.html` → `index.html` and fix the internal `href="Home.dc.html"` links (3 occurrences) to `href="./"` or `index.html`.
4. Enable Pages in repo Settings → Pages → deploy from the `main` branch, root folder. No build command needed — it's plain static HTML/JS.
5. Once live, wire the custom domain via Settings → Pages → Custom domain (adds a `CNAME` file), then point the domain's DNS at GitHub Pages per GitHub's instructions.

## Routing
- `Home.dc.html` (→ rename to `index.html`) is the landing page.
- `About.dc.html` — About page.
- `Note.dc.html?p=<slug>` — renders one of 14 posts from `posts-data.js` by slug (client-side, reads `location.search`). All 14 existing post links already point here correctly.
- `Post Open Weights.dc.html` is the one exception — a standalone post file instead of going through `Note.dc.html?p=`. Fine to keep as its own page, just needs the rename in step 2.

## Live market tape
`feed.js` pulls the ticker in the header:
- Keyless + always live: USDJPY/EURUSD (Frankfurter), stablecoin caps (CoinGecko).
- Needs a free Twelve Data API key for equity/vol/commodity ETF quotes (SPY, QQQ, DIA, IWM, GLD, BNO, VIXY). **No key is stored in source** — by design. To enable it, open the deployed site once with `?feedkey=<your key>` in the URL; the key persists to the visitor's own `localStorage` and is never committed or served to anyone else. Get a free key at twelvedata.com.
- Refreshes every 12h client-side; falls back to a static Jul 24 2026 snapshot if all fetches fail.
- No secrets in these files — confirmed via a security pass just before this handoff.

## API key setup (do this)
Copy `.env.example` to `.env` and set `TWELVEDATA_API_KEY=<a free key from twelvedata.com>`. `.env` is already in `.gitignore` — never commit it.

Important: this is a static site with no server or build step, so a plain `.env` value can't be read by the browser at runtime the way it would in a backend app. Wire it in one of these ways instead of putting the key in the committed HTML/JS:
- Preferred: at deploy time (e.g. in the GitHub Actions Pages workflow), read `TWELVEDATA_API_KEY` from a GitHub Actions secret (not a committed `.env`) and inject it into the built output — e.g. write it to a small generated `feed-key.js` that `feed.js` imports, and make sure that generated file is also gitignored/untracked.
- Acceptable fallback (already built into `feed.js`): visitors provide their own key once via `?feedkey=<key>` in the URL; it's saved to their own browser's localStorage and never touches the repo. This is how the site works today with zero setup.

Either way, the committed source must never contain a real key — that was the point of removing it earlier.

## Assets
No external images — `image-slot.js` is a drag-drop image placeholder component, currently unused/empty on these pages (fine to leave in).

## Files in this bundle
- `Home.dc.html`, `About.dc.html`, `Note.dc.html`, `Post Open Weights.dc.html` — pages
- `posts-data.js` — the 14-post archive content
- `feed.js` — market tape fetch/cache logic
- `support.js` — required runtime, ships as-is
- `image-slot.js` — image placeholder component
