/**
 * Loktech — community AI-literacy resource repository.
 *
 * A small, dependency-light Express app designed to run on shared Node hosting
 * (e.g. Hostinger) straight from a GitHub repo: `npm install` then `npm start`.
 * It binds to the host-provided port and renders content from a data layer so
 * adding a new resource means adding one entry in src/data — not writing HTML.
 */
const path = require('path');
const express = require('express');

const catalogue = require('./src/data/catalogue');
const learning = require('./src/data/learning');
const impact = require('./src/data/impact');
const news = require('./src/data/news');

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
  tagline: 'AI for Our Village',
  taglineEn: 'AI knowledge, owned by the village',
  year: new Date().getFullYear()
};

app.use((req, res, next) => {
  res.locals.site = SITE;
  res.locals.path = req.path;
  res.locals.TYPES = catalogue.TYPES;
  next();
});

// Routes
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Loktech',
    featured: catalogue.featured(),
    sections: catalogue.sections()
  });
});

app.get('/catalogue', (req, res) => {
  const type = req.query.type || null;
  res.render('catalogue', {
    title: 'सगळा संसाधन / Catalogue',
    items: catalogue.all(type),
    types: catalogue.types(),
    activeType: type
  });
});

app.get('/learn', (req, res) => {
  res.render('learn', {
    title: 'कंप्यूटर अर AI ने समझो / Learn',
    track: learning.track()
  });
});

app.get('/impact', (req, res) => {
  res.render('impact', {
    title: 'AI रो असर / Impact',
    benefits: impact.benefits(),
    harms: impact.harms()
  });
});

app.get('/news', (req, res) => {
  res.render('news', {
    title: 'क्रिटिकल अर पार्टिसिपेटरी AI खबरां / Critical & Participatory AI News',
    updates: news.all()
  });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'आ साइट रे बारे में / About' });
});

// 404
app.use((req, res) => {
  res.status(404).render('404', { title: 'पानो कोनी मिल्यो / Not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Loktech running on port ${PORT}`);
});
