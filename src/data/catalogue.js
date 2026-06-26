/**
 * The Loktech catalogue.
 *
 * Every resource in the repository is one object in `items`. To add a new
 * booklet / notebook / questionnaire, add an entry here. Nothing else needs to
 * change. The two existing booklets point at the preserved original site under
 * /legacy and are displayed exactly as they were authored (in Marwari).
 *
 * NOTE: The new site is in English for now; it will be translated to Marwari
 * and Hindi later. The original booklets are NOT translated or edited.
 *
 * Fields:
 *   id        unique slug
 *   type      one of TYPES (booklet | notebook | questionnaire | workshop | article)
 *   title     resource title
 *   desc      one-line plain description
 *   img       thumbnail under /public (legacy images are reused)
 *   href      where the resource opens (a legacy page, a route, or a download)
 *   status    'ready' (clickable) | 'soon' (planned, shown greyed with a label)
 *   lang      optional content-language tag, e.g. 'Marwari' for the originals
 *   featured  optional: show on the home page
 */

const TYPES = {
  booklet: { label: 'Booklet', icon: '📖' },
  notebook: { label: 'Jupyter Notebook', icon: '💻' },
  questionnaire: { label: 'Questionnaire', icon: '📝' },
  workshop: { label: 'Workshop', icon: '🤝' },
  article: { label: 'Article', icon: '📄' }
};

const items = [
  // ---- Existing, preserved booklets (DO NOT EDIT — served from /legacy) ----
  {
    id: 'booklet-1',
    type: 'booklet',
    title: 'Booklet 1 — AI for Our Village (A Village Guide)',
    desc: 'The basics of AI for villages, its impact, and a community toolkit. (Original, in Marwari.)',
    img: '/legacy/images/img-001.png',
    href: '/legacy/booklet1/booklet1.html',
    status: 'ready',
    lang: 'Marwari',
    featured: true
  },
  {
    id: 'booklet-2',
    type: 'booklet',
    title: 'Booklet 2 — Deeper Topics & Practice',
    desc: 'Deeper themes and practical use. (Original, in Marwari.)',
    img: '/legacy/images/img-200.png',
    href: '/legacy/booklet2/booklet2.html',
    status: 'ready',
    lang: 'Marwari',
    featured: true
  },

  // ---- Planned resources (placeholders to fill later) ----
  {
    id: 'booklet-computer-basics',
    type: 'booklet',
    title: 'Booklet 3 — How a Computer Works (from the ground up)',
    desc: 'From electricity and buttons to chips, memory and programs — explained in plain language.',
    img: '/legacy/images/img-015.png',
    href: '/catalogue',
    status: 'soon'
  },
  {
    id: 'booklet-how-ai-learns',
    type: 'booklet',
    title: 'Booklet 4 — How AI Learns (data, training, models)',
    desc: 'Understand every part of AI in depth: data, training, and models.',
    img: '/legacy/images/img-009.png',
    href: '/catalogue',
    status: 'soon'
  },
  {
    id: 'notebook-intro',
    type: 'notebook',
    title: 'Notebook 1 — Try AI with Your Own Hands',
    desc: 'A simple Jupyter notebook — run it yourself to see how a computer learns patterns.',
    img: '/legacy/images/img-011.png',
    href: '/catalogue',
    status: 'soon'
  },
  {
    id: 'questionnaire-bioregional',
    type: 'questionnaire',
    title: 'Questionnaire — Bioregional, Community & Location-specific',
    desc: 'Co-designed with native speakers, language experts and bioregionalism practitioners. (In progress.)',
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
      {
        href: '/learn',
        icon: '🧠',
        title: 'Understand Computers & AI',
        desc: 'How a computer works and how AI learns — every part, in depth.'
      },
      {
        href: '/impact',
        icon: '⚖️',
        title: "AI's Impact — Benefits & Harms",
        desc: 'How AI is changing the world, and the good and bad it brings.'
      },
      {
        href: '/news',
        icon: '🌍',
        title: 'Critical & Participatory AI News',
        desc: 'The latest on responsible and community-led AI from around the world.'
      },
      {
        href: '/catalogue',
        icon: '📚',
        title: 'All Resources (Catalogue)',
        desc: 'Every booklet, notebook and questionnaire in one place.'
      }
    ];
  }
};
