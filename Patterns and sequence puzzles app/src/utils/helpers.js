/** Convert hex colour + alpha → rgba() string. */
export function hexA(hex, a) {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}

/** Lighten (positive pct) or darken (negative pct) a hex colour. */
export function shade(hex, pct) {
  const h = hex.replace('#', '');
  const num = parseInt(h, 16);
  let r = (num >> 16) + Math.round(255 * pct / 100);
  let g = ((num >> 8) & 0xff) + Math.round(255 * pct / 100);
  let b = (num & 0xff) + Math.round(255 * pct / 100);
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

/** Format seconds as M:SS */
export function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

/** Get today's date string YYYY-MM-DD (local) */
export function todayStr() {
  return new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD
}

/** Fisher-Yates shuffle — returns a new array. */
export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Pick n random items from array (without replacement). */
export function pickRandom(arr, n) {
  return shuffle(arr).slice(0, Math.min(n, arr.length));
}

/** Clamp a number between min and max. */
export function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}
