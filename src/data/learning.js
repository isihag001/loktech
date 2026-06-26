/**
 * The "Understand Computers & AI" learning track.
 *
 * An ordered, ground-up path: from how a computer physically works, through
 * data and the internet, to how AI learns and makes decisions. Each module is
 * a stop on the path. Modules marked `status: 'soon'` are outlines awaiting
 * full booklet/notebook content; 'ready' ones link to a finished resource.
 *
 * (English for now — to be translated later. Point `href` at a catalogue
 * resource once written.)
 */

const modules = [
  {
    n: 1,
    icon: '🔌',
    title: 'What a computer is, and how electricity runs it',
    desc: 'What happens inside when you press a button — electricity and on/off (0 and 1) basics.',
    status: 'soon'
  },
  {
    n: 2,
    icon: '🧩',
    title: 'Parts of a computer — processor, memory, storage',
    desc: 'How the CPU (brain), RAM (short-term memory) and disk (permanent storage) work together.',
    status: 'soon'
  },
  {
    n: 3,
    icon: '📥',
    title: 'What data is, and how a computer reads it',
    desc: 'How photos, sound and words all turn into numbers a computer can use.',
    status: 'soon'
  },
  {
    n: 4,
    icon: '🌐',
    title: 'How the internet and the "cloud" work',
    desc: 'How your phone talks to far-away computers, and where your data actually lives.',
    status: 'soon'
  },
  {
    n: 5,
    icon: '🧠',
    title: 'What AI really is — a computer that learns',
    desc: 'Writing rules vs. learning from examples — what is the difference?',
    status: 'soon'
  },
  {
    n: 6,
    icon: '📊',
    title: 'Training — how AI is taught with examples',
    desc: 'How AI finds patterns after seeing thousands of examples (sick crops, folk songs).',
    status: 'soon'
  },
  {
    n: 7,
    icon: '🗣️',
    title: 'How language AI (LLMs) talk',
    desc: 'How a tool like ChatGPT guesses the next word — and why it can be wrong.',
    status: 'soon'
  },
  {
    n: 8,
    icon: '🛠️',
    title: 'Try it yourself (hands-on notebooks)',
    desc: 'Simple Jupyter notebooks you can run to understand AI by doing.',
    status: 'soon'
  }
];

module.exports = {
  track() {
    return modules;
  }
};
