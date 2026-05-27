/**
 * Central Puzzle Engine — generates, validates, and scores puzzles
 * for all 6 modules across 5 difficulty levels.
 */
import { shuffle, clamp } from './helpers.js';
import { REPEATING_PUZZLES } from '../data/repeatingPatterns.js';
import { GROWING_PUZZLES } from '../data/growingPatterns.js';
import { NUMBER_PUZZLES } from '../data/numberSequences.js';
import { SHAPE_PUZZLES } from '../data/shapeColourLogic.js';
import { ODD_PUZZLES } from '../data/oddOneOut.js';
import { STORY_PUZZLES } from '../data/sequenceStories.js';

/** Map module IDs to their puzzle banks. */
const PUZZLE_BANKS = {
  repeating: REPEATING_PUZZLES,
  growing:   GROWING_PUZZLES,
  numbers:   NUMBER_PUZZLES,
  shape:     SHAPE_PUZZLES,
  odd:       ODD_PUZZLES,
  story:     STORY_PUZZLES,
};

/** How many puzzles per level during gameplay. */
export const PUZZLES_PER_LEVEL = 5;

/**
 * Load puzzles for a given module and level.
 * Returns an array of puzzle objects, shuffled.
 * @param {string} moduleId - 'repeating', 'growing', etc.
 * @param {number} level - 1–5
 * @returns {Array} puzzles ready to play
 */
export function loadPuzzles(moduleId, level) {
  const bank = PUZZLE_BANKS[moduleId];
  if (!bank) return [];
  
  // Each bank is organized as { 1: [...], 2: [...], ... }
  const levelPuzzles = bank[level] || bank[1] || [];
  
  // Shuffle and pick PUZZLES_PER_LEVEL
  const picked = shuffle(levelPuzzles).slice(0, PUZZLES_PER_LEVEL);
  
  // For each puzzle, shuffle the options (but keep track of correct answer)
  return picked.map(p => {
    if (p.type === 'story') {
      // Story puzzles: shuffle the steps for the player to reorder
      return {
        ...p,
        shuffledSteps: shuffle(p.steps.map((s, i) => ({ ...s, correctIndex: i }))),
      };
    }
    
    if (p.type === 'odd') {
      // Odd one out: shuffle all items
      const shuffledItems = shuffle(p.items.map((item, i) => ({ ...item, originalIndex: i })));
      return { ...p, shuffledItems };
    }
    
    // Pattern/number/shape puzzles: shuffle options
    return {
      ...p,
      shuffledOptions: shuffle([...p.options]),
    };
  });
}

/**
 * Check if the selected answer is correct.
 * @param {Object} puzzle - the puzzle object
 * @param {*} answer - the player's answer
 * @returns {boolean}
 */
export function checkAnswer(puzzle, answer) {
  if (puzzle.type === 'story') {
    // Answer is an array of step indices in the player's order
    // Check if they match the correct order
    if (!Array.isArray(answer)) return false;
    return answer.every((step, i) => step.correctIndex === i);
  }
  
  if (puzzle.type === 'odd') {
    // Answer is the index of the odd item in the original items array
    return answer === puzzle.oddIndex;
  }
  
  // For pattern/number/shape: answer is the value they selected
  return answer === puzzle.answer;
}

/**
 * Get a contextual hint for a puzzle.
 * @param {Object} puzzle
 * @returns {string} hint text
 */
export function getHint(puzzle) {
  return puzzle.hint || 'Look carefully at the pattern and find what repeats!';
}

/**
 * Calculate stars earned (1–3) based on performance.
 * @param {number} timeSeconds - how long the level took
 * @param {number} hintsUsed - number of hints used
 * @param {number} wrongAttempts - number of wrong answers
 * @param {number} totalPuzzles - total puzzles in level
 * @returns {number} 1, 2, or 3 stars
 */
export function calculateStars(timeSeconds, hintsUsed, wrongAttempts, totalPuzzles = PUZZLES_PER_LEVEL) {
  // Base: 3 stars
  let stars = 3;
  
  // Deduct for hints
  if (hintsUsed >= 3) stars -= 1;
  if (hintsUsed >= 5) stars -= 1;
  
  // Deduct for wrong attempts
  const errorRate = wrongAttempts / totalPuzzles;
  if (errorRate > 0.5) stars -= 1;
  if (errorRate > 1.0) stars -= 1;
  
  // Deduct for very slow times (generous for a 6-year-old)
  if (timeSeconds > 180) stars -= 1; // > 3 minutes
  
  return clamp(stars, 1, 3);
}

/**
 * Calculate accuracy percentage for a level.
 * @param {number} correctFirst - puzzles answered correctly on first try
 * @param {number} total - total puzzles
 * @returns {number} 0–100
 */
export function calculateAccuracy(correctFirst, total) {
  if (total === 0) return 100;
  return Math.round((correctFirst / total) * 100);
}
