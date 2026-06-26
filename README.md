# Loktech

A one-stop, accessibility-first repository of community AI-literacy resources —
booklets, Jupyter notebooks and questionnaires — built **with** Marwari-speaking
communities around Jodhpur, Rajasthan. Part of the **RAIL** (Responsible
Augmentation of Indigenous Languages) participatory framework.

The new site is in **English** for now and will be translated to Marwari and Hindi
later. The **two original booklets are kept exactly as written (in Marwari)** and
are served untouched from `/legacy`.

## What's inside

- **Learn** (`/learn`) — a ground-up path from how a computer works to how AI learns.
- **Impact** (`/impact`) — the benefits and harms of AI, side by side.
- **News** (`/news`) — critical & participatory AI updates from around the world.
- **Catalogue** (`/catalogue`) — every booklet, notebook and questionnaire.
- **Original site** (`/legacy/index.html`) — the first booklets, preserved verbatim.

## Run locally

```bash
npm install
npm start
# open http://localhost:3000
```

## Deploy on Hostinger (Node.js hosting)

1. Push this repo to GitHub.
2. In hPanel → **Websites → Node.js app**, connect the GitHub repo.
3. Set **Application startup file** to `server.js` (or use `npm start`).
4. Node version: **18+**. Hostinger runs `npm install` automatically.
5. The app listens on `process.env.PORT` (Hostinger provides it) — no extra config.

## Adding resources (no HTML needed)

Everything is data-driven. To add content, edit the files in `src/data/`:

| To add… | Edit | Notes |
|---|---|---|
| A booklet / notebook / questionnaire | `src/data/catalogue.js` | Add one object to `items`. Set `status: 'ready'` and a real `href` when it's live. |
| A learning-track step | `src/data/learning.js` | |
| A benefit / harm | `src/data/impact.js` | |
| A news update | `src/data/news.js` | Newest first; keep `date` as `YYYY-MM-DD`. |

## Project layout

```
server.js            Express app (binds to process.env.PORT)
src/views/           EJS templates + partials
src/data/            content (catalogue, learning, impact, news)
public/              css, js, images
public/legacy/       copy of the original site, served verbatim
Old Site Files/      the original site, kept in the repo untouched
```

## Notes

- `booklet1.html` references `QR.jpeg`; drop the real QR image at
  `public/legacy/QR.jpeg` when you have it (a missing image is harmless until then).
- Accessibility: large scalable text (A−/A/A+ control, remembered per visitor),
  high-contrast palette, 44px+ tap targets, keyboard focus styles, reduced-motion support.
