/**
 * Loktech translation engine.
 *
 * Reads ONE file - src/i18n/translations.csv - at startup and serves the right
 * words for whichever language the reader picked. The CSV has a row per piece
 * of text and a column per language:
 *
 *     key , context , en , hi , mwr , bgc
 *
 * Translators (experts) only ever edit that CSV in Excel / Google Sheets and
 * save it back as CSV. Nothing in the code needs to change to add translations.
 *
 * Rules baked in:
 *   - An empty cell falls back to English, so a half-translated sheet still
 *     renders a complete page.
 *   - A language only appears in the on-site switcher once it has at least one
 *     translated cell (English is always available).
 *   - {placeholders} in a string are filled from the vars passed to t().
 *   - To add a language: add a column to the CSV and a row to LANGUAGES below.
 *
 * No build step and no extra dependencies, so it runs as-is on Hostinger.
 */

const fs = require('fs');
const path = require('path');

const CSV_PATH = path.join(__dirname, 'translations.csv');

// The languages the site knows about. `native` is what shows on the switcher.
// A language is only OFFERED to readers if it actually has translations (see
// availableLanguages); English is the always-present base.
const LANGUAGES = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'hi', label: 'Hindi', native: 'हिंदी' },
  { code: 'mwr', label: 'Marwari', native: 'मारवाड़ी' },
  { code: 'bgc', label: 'Haryanvi', native: 'हरियाणवी' }
];

const DEFAULT_LANG = 'en';

/**
 * Minimal, correct CSV parser: handles quoted fields, escaped quotes ("")
 * and newlines inside quotes. Returns an array of rows (arrays of strings).
 */
function parseCSV(text) {
  text = text.replace(/^﻿/, ''); // strip a leading BOM if Excel added one
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  let i = 0;

  while (i < text.length) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i += 2; continue; }
        inQuotes = false; i++; continue;
      }
      field += c; i++; continue;
    }
    if (c === '"') { inQuotes = true; i++; continue; }
    if (c === ',') { row.push(field); field = ''; i++; continue; }
    if (c === '\r') { i++; continue; }
    if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; i++; continue; }
    field += c; i++;
  }
  if (field.length > 0 || row.length > 0) { row.push(field); rows.push(row); }
  return rows;
}

function load() {
  const raw = fs.readFileSync(CSV_PATH, 'utf8');
  const rows = parseCSV(raw);
  if (rows.length === 0) return { dict: {}, coverage: {} };

  const header = rows[0].map((h) => h.trim());
  const col = {};
  header.forEach((h, idx) => { col[h] = idx; });

  const dict = {};
  const coverage = {};
  LANGUAGES.forEach((l) => { coverage[l.code] = 0; });

  for (let r = 1; r < rows.length; r++) {
    const cells = rows[r];
    const key = (cells[col.key] || '').trim();
    if (!key) continue;
    const entry = {};
    LANGUAGES.forEach((l) => {
      const v = cells[col[l.code]];
      if (v != null && v !== '') {
        entry[l.code] = v;
        coverage[l.code]++;
      }
    });
    dict[key] = entry;
  }
  return { dict, coverage };
}

const { dict, coverage } = load();

/** Look up a key in the chosen language, falling back to English then the key. */
function t(key, lang, vars) {
  const entry = dict[key];
  let s;
  if (entry) s = entry[lang] != null ? entry[lang] : entry[DEFAULT_LANG];
  if (s == null) s = key; // visible signal that a key is missing from the sheet
  if (vars) {
    s = s.replace(/\{(\w+)\}/g, (m, name) => (vars[name] != null ? vars[name] : m));
  }
  return s;
}

/** Languages to show in the switcher: English plus any with real translations. */
function availableLanguages() {
  return LANGUAGES.filter((l) => l.code === DEFAULT_LANG || coverage[l.code] > 0);
}

function isValidLang(code) {
  return LANGUAGES.some((l) => l.code === code);
}

module.exports = {
  LANGUAGES,
  DEFAULT_LANG,
  t,
  availableLanguages,
  isValidLang,
  coverage
};
