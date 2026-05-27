/** Module catalogue — static metadata only. Star progress lives in appState. */
export const MODULES = [
  {
    id: 'repeating', num: 1,
    title: 'Repeating Patterns',
    skill: 'Pattern recognition',
    color: '#FF6FB5', loop: 'repeat',
    age: '5-7', ring: false, unlock: 0, starsMax: 30,
  },
  {
    id: 'growing', num: 2,
    title: 'Growing Patterns',
    skill: 'Escalation thinking',
    color: '#FFD93D', loop: 'grow',
    age: '5-7', ring: true, unlock: 0, starsMax: 30,
  },
  {
    id: 'numbers', num: 3,
    title: 'Number Sequences',
    skill: 'Skip counting',
    color: '#4D96FF', loop: 'number',
    age: '6-8', ring: false, unlock: 0, starsMax: 30,
  },
  {
    id: 'shape', num: 4,
    title: 'Shape & Colour',
    skill: 'Multi-attribute logic',
    color: '#4ECDC4', loop: 'shape',
    age: '6-8', ring: false, unlock: 10, starsMax: 30,
  },
  {
    id: 'odd', num: 5,
    title: 'Odd One Out',
    skill: 'Categorisation',
    color: '#FF8C42', loop: 'odd',
    age: '6-8', ring: true, unlock: 15, starsMax: 30,
  },
  {
    id: 'story', num: 6,
    title: 'Sequence Stories',
    skill: 'Cause & effect',
    color: '#A78BFA', loop: 'story',
    age: '6-9', ring: false, unlock: 20, starsMax: 30,
  },
];

/** Rank thresholds and metadata */
export const RANKS = [
  { id: 0, name: 'Space Cadet',        ico: '🥇', threshold: 0,   next: 21,  color: '#4ECDC4' },
  { id: 1, name: 'Pattern Apprentice', ico: '🛰️', threshold: 21,  next: 51,  color: '#A78BFA' },
  { id: 2, name: 'Logic Explorer',     ico: '🪐', threshold: 51,  next: 101, color: '#4D96FF' },
  { id: 3, name: 'Sequence Master',    ico: '🌠', threshold: 101, next: 201, color: '#FF6FB5' },
  { id: 4, name: 'Pattern Genius',     ico: '👑', threshold: 201, next: 9999, color: '#FFD93D' },
];

/** Compute rank index from total stars */
export function getRankIdx(stars) {
  let idx = 0;
  for (let i = RANKS.length - 1; i >= 0; i--) {
    if (stars >= RANKS[i].threshold) { idx = i; break; }
  }
  return idx;
}

/** Compute rank progress percentage (0-100) within current rank band */
export function getRankProgress(stars) {
  const idx = getRankIdx(stars);
  const rank = RANKS[idx];
  if (idx === RANKS.length - 1) return 100;
  const band = rank.next - rank.threshold;
  const within = stars - rank.threshold;
  return Math.min(100, Math.round((within / band) * 100));
}

/** Initial app state stored in localStorage */
export const INITIAL_STATE = {
  name: 'Advaith',
  stars: 0,
  streak: 0,
  lastLoginDate: null,
  modules: {
    repeating: { stars: 0, completed: [], accuracy: [], hintUsed: 0 },
    growing:   { stars: 0, completed: [], accuracy: [], hintUsed: 0 },
    numbers:   { stars: 0, completed: [], accuracy: [], hintUsed: 0 },
    shape:     { stars: 0, completed: [], accuracy: [], hintUsed: 0 },
    odd:       { stars: 0, completed: [], accuracy: [], hintUsed: 0 },
    story:     { stars: 0, completed: [], accuracy: [], hintUsed: 0 },
  },
  planets: [],
  badges: [],
  dailyChallenge: {
    date: null,
    completed: [],
    bonusStarsClaimed: false,
  },
  timeSpent: { repeating: 0, growing: 0, numbers: 0, shape: 0, odd: 0, story: 0 },
  weeklyMinutes: [0, 0, 0, 0, 0, 0, 0],
};

/** Initial settings stored in localStorage */
export const INITIAL_SETTINGS = {
  sfx: true,
  music: false,
  voiceSpeed: 1.0,
  telugu: false,
  hints: 2,
  difficulty: 'adaptive',
  adaptiveDifficulty: true,
};
