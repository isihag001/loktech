/**
 * "AI's Impact: Benefits and Harms".
 *
 * Two balanced lists so people can weigh what AI gives and what it takes.
 * These mirror the themes explored in the existing booklets but are short,
 * standalone summaries. The booklets remain the deep-dive (see the catalogue).
 *
 * Titles/descriptions are translation keys (resolved via t() at render time);
 * the words live in src/i18n/translations.csv.
 */

const benefits = [
  { id: 'health', titleKey: 'impact.benefit.health.title', descKey: 'impact.benefit.health.desc' },
  { id: 'disaster', titleKey: 'impact.benefit.disaster.title', descKey: 'impact.benefit.disaster.desc' },
  { id: 'land', titleKey: 'impact.benefit.land.title', descKey: 'impact.benefit.land.desc' },
  { id: 'language', titleKey: 'impact.benefit.language.title', descKey: 'impact.benefit.language.desc' },
  { id: 'farming', titleKey: 'impact.benefit.farming.title', descKey: 'impact.benefit.farming.desc' },
  { id: 'learning', titleKey: 'impact.benefit.learning.title', descKey: 'impact.benefit.learning.desc' }
];

const harms = [
  { id: 'erasure', titleKey: 'impact.harm.erasure.title', descKey: 'impact.harm.erasure.desc' },
  { id: 'language', titleKey: 'impact.harm.language.title', descKey: 'impact.harm.language.desc' },
  { id: 'data', titleKey: 'impact.harm.data.title', descKey: 'impact.harm.data.desc' },
  { id: 'bias', titleKey: 'impact.harm.bias.title', descKey: 'impact.harm.bias.desc' },
  { id: 'hallucination', titleKey: 'impact.harm.hallucination.title', descKey: 'impact.harm.hallucination.desc' },
  { id: 'environment', titleKey: 'impact.harm.environment.title', descKey: 'impact.harm.environment.desc' }
];

module.exports = {
  benefits() { return benefits; },
  harms() { return harms; }
};
