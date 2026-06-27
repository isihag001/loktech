/**
 * The Loktech catalogue.
 *
 * Every resource in the repository is one object in `items`. To add a new
 * booklet / notebook / questionnaire, add an entry here and add its title/desc
 * rows to src/i18n/translations.csv. The two existing booklets point at the
 * preserved original site under /legacy and are displayed exactly as authored.
 *
 * All visible text is referenced by a translation key (titleKey, descKey, ...)
 * and resolved at render time via t(); the words themselves live in the CSV.
 *
 * Fields:
 *   id        unique slug
 *   type      one of TYPES (booklet | notebook | questionnaire | workshop | article)
 *   titleKey  translation key for the resource title
 *   descKey   translation key for the one-line description
 *   img       thumbnail under /public (legacy images are reused)
 *   href      where the resource opens (a legacy page, a route, or a download)
 *   status    'ready' (clickable) | 'soon' (planned, shown greyed with a label)
 *   langKey   optional content-language badge key, e.g. for the Marwari originals
 *   featured  optional: show on the home page
 */

const TYPES = {
  booklet: { labelKey: 'type.booklet' },
  notebook: { labelKey: 'type.notebook' },
  questionnaire: { labelKey: 'type.questionnaire' },
  workshop: { labelKey: 'type.workshop' },
  article: { labelKey: 'type.article' }
};

const items = [
  // ---- Existing, preserved booklets (DO NOT EDIT, served from /legacy) ----
  {
    id: 'booklet-1',
    type: 'booklet',
    titleKey: 'cat.booklet-1.title',
    descKey: 'cat.booklet-1.desc',
    img: '/legacy/images/img-001.png',
    href: '/legacy/booklet1/booklet1.html',
    status: 'ready',
    langKey: 'lang.marwari',
    featured: true
  },
  {
    id: 'booklet-2',
    type: 'booklet',
    titleKey: 'cat.booklet-2.title',
    descKey: 'cat.booklet-2.desc',
    img: '/legacy/images/img-200.png',
    href: '/legacy/booklet2/booklet2.html',
    status: 'ready',
    langKey: 'lang.marwari',
    featured: true
  },

  // ---- Planned resources (placeholders to fill later) ----
  {
    id: 'booklet-computer-basics',
    type: 'booklet',
    titleKey: 'cat.booklet-computer-basics.title',
    descKey: 'cat.booklet-computer-basics.desc',
    img: '/legacy/images/img-015.png',
    href: '/catalogue',
    status: 'soon'
  },
  {
    id: 'booklet-how-ai-learns',
    type: 'booklet',
    titleKey: 'cat.booklet-how-ai-learns.title',
    descKey: 'cat.booklet-how-ai-learns.desc',
    img: '/legacy/images/img-009.png',
    href: '/catalogue',
    status: 'soon'
  },
  {
    id: 'notebook-intro',
    type: 'notebook',
    titleKey: 'cat.notebook-intro.title',
    descKey: 'cat.notebook-intro.desc',
    img: '/legacy/images/img-011.png',
    href: '/catalogue',
    status: 'soon'
  },
  {
    id: 'questionnaire-bioregional',
    type: 'questionnaire',
    titleKey: 'cat.questionnaire-bioregional.title',
    descKey: 'cat.questionnaire-bioregional.desc',
    img: '/legacy/images/img-008.png',
    href: '/catalogue',
    status: 'soon'
  }
];

module.exports = {
  TYPES,
  all(type) {
    return type ? items.filter((i) => i.type === type) : items;
  },
  featured() {
    return items.filter((i) => i.featured);
  },
  types() {
    const present = new Set(items.map((i) => i.type));
    return Object.entries(TYPES)
      .filter(([key]) => present.has(key))
      .map(([key, v]) => ({ key, ...v }));
  },
  sections() {
    return [
      { href: '/learn', titleKey: 'home.section.learn.title', descKey: 'home.section.learn.desc' },
      { href: '/impact', titleKey: 'home.section.impact.title', descKey: 'home.section.impact.desc' },
      { href: '/news', titleKey: 'home.section.news.title', descKey: 'home.section.news.desc' },
      { href: '/catalogue', titleKey: 'home.section.catalogue.title', descKey: 'home.section.catalogue.desc' }
    ];
  }
};
