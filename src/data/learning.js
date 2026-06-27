/**
 * The "Understand Computers and AI" learning track.
 *
 * An ordered, ground-up path: from how a computer physically works, through
 * data and the internet, to how AI learns and makes decisions. Each module is
 * a stop on the path. Modules marked `status: 'soon'` are outlines awaiting
 * full booklet/notebook content; 'ready' ones link to a finished resource.
 *
 * Titles/descriptions are translation keys (resolved via t() at render time);
 * the words live in src/i18n/translations.csv.
 */

const modules = [
  { n: 1, titleKey: 'learn.step.1.title', descKey: 'learn.step.1.desc', status: 'soon' },
  { n: 2, titleKey: 'learn.step.2.title', descKey: 'learn.step.2.desc', status: 'soon' },
  { n: 3, titleKey: 'learn.step.3.title', descKey: 'learn.step.3.desc', status: 'soon' },
  { n: 4, titleKey: 'learn.step.4.title', descKey: 'learn.step.4.desc', status: 'soon' },
  { n: 5, titleKey: 'learn.step.5.title', descKey: 'learn.step.5.desc', status: 'soon' },
  { n: 6, titleKey: 'learn.step.6.title', descKey: 'learn.step.6.desc', status: 'soon' },
  { n: 7, titleKey: 'learn.step.7.title', descKey: 'learn.step.7.desc', status: 'soon' },
  { n: 8, titleKey: 'learn.step.8.title', descKey: 'learn.step.8.desc', status: 'soon' }
];

module.exports = {
  track() {
    return modules;
  }
};
