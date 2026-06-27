/**
 * "Critical AI and Participatory AI: World News / Updates".
 *
 * A curated, easy-to-update list of developments in responsible, critical and
 * participatory AI from around the world. Add a new update by adding an object
 * at the top of `updates` (and its title/desc rows to the translation CSV).
 * Keep `date` as YYYY-MM-DD so they sort cleanly.
 *
 * Title/description/region are translation keys (resolved via t() at render
 * time); the words live in src/i18n/translations.csv. date/source/url are data.
 */

const updates = [
  {
    id: 'bhashini',
    date: '2026-01-15',
    regionKey: 'region.India',
    titleKey: 'news.bhashini.title',
    descKey: 'news.bhashini.desc',
    source: 'Digital India Bhashini Division',
    url: ''
  },
  {
    id: 'masakhane',
    date: '2025-08-01',
    regionKey: 'region.Africa',
    titleKey: 'news.masakhane.title',
    descKey: 'news.masakhane.desc',
    source: 'Masakhane / EMNLP',
    url: ''
  },
  {
    id: 'care',
    date: '2025-06-10',
    regionKey: 'region.Global',
    titleKey: 'news.care.title',
    descKey: 'news.care.desc',
    source: 'Global Indigenous Data Alliance',
    url: 'https://www.gida-global.org/care'
  }
];

module.exports = {
  all() {
    return [...updates].sort((a, b) => (a.date < b.date ? 1 : -1));
  }
};
