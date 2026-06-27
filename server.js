/**
 * Loktech — community AI-literacy resource repository.
 *
 * A small, dependency-light Express app designed to run on shared Node hosting
 * (e.g. Hostinger) straight from a GitHub repo: `npm install` then `npm start`.
 * It binds to the host-provided port and renders content from a data layer so
 * adding a new resource means adding one entry in src/data — not writing HTML.
 *
 * All visible text comes from src/i18n/translations.csv via res.locals.t, so
 * the whole site can be translated by editing that one sheet.
 */
const path = require('path');
const express = require('express');

const catalogue = require('./src/data/catalogue');
const learning = require('./src/data/learning');
const impact = require('./src/data/impact');
const news = require('./src/data/news');
const i18n = require('./src/i18n');

const app = express();

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Static assets. The preserved original site lives untouched under /public/legacy
// and is served verbatim at /legacy.
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '1h' }));

// Make site-wide data available to every template.
const SITE = {
  name: 'Loktech',
  year: new Date().getFullYear()
};

// Read the chosen language from a tiny cookie (no dependency needed).
function readLangCookie(req) {
  const header = req.headers.cookie;
  if (!header) return null;
  const match = header.split(';').map((c) => c.trim()).find((c) => c.startsWith('lang='));
  if (!match) return null;
  const value = decodeURIComponent(match.slice('lang='.length));
  return i18n.isValidLang(value) ? value : null;
}

// Per-request locals: current language + a bound t() helper for templates.
app.use((req, res, next) => {
  const lang = readLangCookie(req) || i18n.DEFAULT_LANG;
  res.locals.site = SITE;
  res.locals.path = req.path;
  res.locals.lang = lang;
  res.locals.langs = i18n.availableLanguages();
  res.locals.returnUrl = encodeURIComponent(req.originalUrl);
  res.locals.t = (key, vars) => i18n.t(key, lang, vars);
  next();
});

// Switch language: set the cookie for a year, then return where the reader was.
app.get('/lang/:code', (req, res) => {
  const code = req.params.code;
  if (i18n.isValidLang(code)) {
    res.setHeader('Set-Cookie', `lang=${code}; Path=/; Max-Age=31536000; SameSite=Lax`);
  }
  // Only honour same-site relative return paths (avoid open redirects).
  let back = req.query.r || '/';
  if (typeof back !== 'string' || !back.startsWith('/') || back.startsWith('//')) back = '/';
  res.redirect(back);
});

// Routes
app.get('/', (req, res) => {
  res.render('home', {
    titleKey: 'page.home',
    featured: catalogue.featured(),
    sections: catalogue.sections()
  });
});

app.get('/catalogue', (req, res) => {
  const type = req.query.type || null;
  res.render('catalogue', {
    titleKey: 'page.catalogue',
    items: catalogue.all(type),
    types: catalogue.types(),
    activeType: type
  });
});

app.get('/learn', (req, res) => {
  res.render('learn', {
    titleKey: 'page.learn',
    track: learning.track()
  });
});

app.get('/impact', (req, res) => {
  res.render('impact', {
    titleKey: 'page.impact',
    benefits: impact.benefits(),
    harms: impact.harms()
  });
});

app.get('/news', (req, res) => {
  res.render('news', {
    titleKey: 'page.news',
    updates: news.all()
  });
});

app.get('/about', (req, res) => {
  res.render('about', { titleKey: 'page.about' });
});

// 404
app.use((req, res) => {
  res.status(404).render('404', { titleKey: 'page.404' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Loktech running on port ${PORT}`);
});
