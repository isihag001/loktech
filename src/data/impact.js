/**
 * "AI's Impact — Benefits & Harms".
 *
 * Two balanced lists so people can weigh what AI gives and what it takes.
 * These mirror the themes explored in the existing booklets but are short,
 * standalone summaries. The booklets remain the deep-dive (see the catalogue).
 * (English for now — to be translated later.)
 */

const benefits = [
  { icon: '🏥', title: 'Health', desc: 'Early detection of illness, and medical advice in your own language.' },
  { icon: '🌊', title: 'Disaster warnings', desc: 'Early warning for floods, storms and drought.' },
  { icon: '🌱', title: 'Protecting the land', desc: 'Detecting pollution and planning resources better.' },
  { icon: '🗣️', title: 'Keeping language alive', desc: 'Giving local languages a place in the digital world.' },
  { icon: '🌾', title: 'Better farming', desc: 'Information about pests, weather and prices in your language.' },
  { icon: '📚', title: 'Better learning', desc: 'Help for every child based on what they need.' }
];

const harms = [
  { icon: '🪔', title: 'Cultural erasure', desc: 'AI built only on foreign data can forget your traditions and festivals.' },
  { icon: '🔇', title: 'Harm to language', desc: 'The "standard language" trap — treating your dialect as "wrong".' },
  { icon: '🦟', title: 'Data taken without asking', desc: '"Data colonialism" — your data extracted and taken away.' },
  { icon: '⚖️', title: 'Bias & stereotypes', desc: 'AI treating old prejudices as truth and acting unfairly.' },
  { icon: '🤥', title: 'Hallucinations', desc: 'AI can state made-up things with confidence — always verify.' },
  { icon: '💧', title: 'Environmental cost', desc: 'Large AI models consume huge amounts of electricity and water.' }
];

module.exports = {
  benefits() { return benefits; },
  harms() { return harms; }
};
