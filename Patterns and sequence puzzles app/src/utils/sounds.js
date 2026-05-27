/**
 * Sound & Speech system — uses Web Audio API for synthesised effects
 * and Web Speech API for voice narration.
 * No external audio files needed.
 */

let audioCtx = null;

function getCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/** Play a tone with given frequency, type, duration, and volume. */
function playTone(freq, type = 'sine', duration = 0.15, vol = 0.3) {
  try {
    const ctx = getCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // Silently fail if audio context is blocked
  }
}

/** Pleasant ascending chime for correct answers. */
export function playCorrect() {
  const ctx = getCtx();
  const t = ctx.currentTime;
  [523.25, 659.25, 783.99].forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, t + i * 0.1);
    gain.gain.setValueAtTime(0.25, t + i * 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.1 + 0.3);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t + i * 0.1);
    osc.stop(t + i * 0.1 + 0.3);
  });
}

/** Gentle low buzz for wrong answers — not harsh, just informative. */
export function playWrong() {
  playTone(180, 'triangle', 0.3, 0.15);
}

/** Sparkle sound for celebrations and star bursts. */
export function playStarBurst() {
  const ctx = getCtx();
  const t = ctx.currentTime;
  [880, 1100, 1320, 1500, 1760].forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, t + i * 0.06);
    gain.gain.setValueAtTime(0.12, t + i * 0.06);
    gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.06 + 0.15);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t + i * 0.06);
    osc.stop(t + i * 0.06 + 0.15);
  });
}

/** Soft click for button taps. */
export function playClick() {
  playTone(600, 'sine', 0.05, 0.1);
}

/** Whoosh sound for transitions. */
export function playWhoosh() {
  try {
    const ctx = getCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(400, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.25);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.25);
  } catch (e) {}
}

/**
 * Speak text aloud using Web Speech API.
 * iPad Safari-safe: must be called from a user gesture context
 * or after a user-interaction audio unlock.
 */
export function speak(text, speed = 1.0) {
  if (!window.speechSynthesis) return;
  // Cancel any ongoing speech
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = speed;
  utter.pitch = 1.1; // Slightly higher for kid-friendly voice
  utter.volume = 0.9;
  // Prefer English voice
  const voices = window.speechSynthesis.getVoices();
  const enVoice = voices.find(v => v.lang.startsWith('en') && v.name.includes('Female'))
    || voices.find(v => v.lang.startsWith('en'))
    || voices[0];
  if (enVoice) utter.voice = enVoice;
  window.speechSynthesis.speak(utter);
}

/** Unlock audio context — call on first user tap (for iPad Safari). */
export function unlockAudio() {
  try {
    getCtx();
    // Create and play a silent buffer to unlock
    const ctx = getCtx();
    const buf = ctx.createBuffer(1, 1, 22050);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.connect(ctx.destination);
    src.start(0);
  } catch (e) {}
  // Also prime speech synthesis
  if (window.speechSynthesis) {
    const u = new SpeechSynthesisUtterance('');
    u.volume = 0;
    window.speechSynthesis.speak(u);
  }
}
