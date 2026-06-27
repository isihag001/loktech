/**
 * "Critical AI and Participatory AI: World News / Updates".
 *
 * A curated, easy-to-update list of developments in responsible, critical and
 * participatory AI from around the world. Add a new update by adding an object
 * at the top of `updates`. Keep `date` as YYYY-MM-DD so they sort cleanly.
 *
 * (English for now. A live RSS feed can be added later, but a curated list
 * keeps the site fast, cheap to host, and free of unreliable outbound calls.)
 */

const updates = [
  {
    date: '2026-01-15',
    region: 'India',
    title: 'Bhashini: donating your voice to build Indian-language AI',
    desc: "India's initiative lets people donate their voice to build community language-data for AI.",
    source: 'Digital India Bhashini Division',
    url: ''
  },
  {
    date: '2025-08-01',
    region: 'Africa',
    title: 'Masakhane: community-built translation for 30+ African languages',
    desc: 'African communities built their own translation tools, a model example of participatory AI.',
    source: 'Masakhane / EMNLP',
    url: ''
  },
  {
    date: '2025-06-10',
    region: 'Global',
    title: 'CARE principles for Indigenous data governance gain ground',
    desc: "Communities' right to control and benefit from their own data is gaining traction worldwide.",
    source: 'Global Indigenous Data Alliance',
    url: 'https://www.gida-global.org/care'
  }
];

module.exports = {
  all() {
    return [...updates].sort((a, b) => (a.date < b.date ? 1 : -1));
  }
};
