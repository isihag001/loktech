/**
 * "AI's Impact: Benefits and Harms".
 *
 * Two balanced lists so people can weigh what AI gives and what it takes.
 * These mirror the themes explored in the existing booklets but are short,
 * standalone summaries. The booklets remain the deep-dive (see the catalogue).
 * (English for now, to be translated later.)
 */

const benefits = [
  { title: 'Health', desc: 'Early detection of illness, and medical advice in your own language.' },
  { title: 'Disaster warnings', desc: 'Early warning for floods, storms and drought.' },
  { title: 'Protecting the land', desc: 'Detecting pollution and planning resources better.' },
  { title: 'Keeping language alive', desc: 'Giving local languages a place in the digital world.' },
  { title: 'Better farming', desc: 'Information about pests, weather and prices in your language.' },
  { title: 'Better learning', desc: 'Help for every child based on what they need.' }
];

const harms = [
  { title: 'Cultural erasure', desc: 'AI built only on foreign data can forget your traditions and festivals.' },
  { title: 'Harm to language', desc: 'The "standard language" trap, treating your dialect as "wrong".' },
  { title: 'Data taken without asking', desc: 'Data colonialism: your data extracted and taken away.' },
  { title: 'Bias and stereotypes', desc: 'AI treating old prejudices as truth and acting unfairly.' },
  { title: 'Hallucinations', desc: 'AI can state made-up things with confidence, so always verify.' },
  { title: 'Environmental cost', desc: 'Large AI models consume huge amounts of electricity and water.' }
];

module.exports = {
  benefits() { return benefits; },
  harms() { return harms; }
};
