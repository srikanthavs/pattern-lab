/**
 * Repeating Patterns Puzzle Bank
 * Captain Advaith's Pattern Lab
 *
 * 30 puzzles total — 6 per level (Levels 1–5)
 * Difficulty scales from simple AB repeats to mirror patterns.
 */

export const REPEATING_PUZZLES = {

  // ═══════════════════════════════════════════════════════════════
  // LEVEL 1 — AB Patterns (2-item repeat, 5 items total)
  // ═══════════════════════════════════════════════════════════════
  1: [
    {
      type: 'repeat',
      sequence: ['🚀', '⭐', '🚀', '⭐', '?'],
      blankIndex: 4,
      answer: '🚀',
      options: ['🚀', '🌙', '☄️', '⭐'],
      hint: 'Look at positions 1 and 3 — they are the same!',
      rule: 'AB repeat'
    },
    {
      type: 'repeat',
      sequence: ['🐶', '🐱', '🐶', '🐱', '?'],
      blankIndex: 4,
      answer: '🐶',
      options: ['🐰', '🐶', '🐱', '🐻'],
      hint: 'Dog, cat, dog, cat… what comes next?',
      rule: 'AB repeat'
    },
    {
      type: 'repeat',
      sequence: ['🍎', '🍌', '🍎', '🍌', '?'],
      blankIndex: 4,
      answer: '🍎',
      options: ['🍌', '🍊', '🍎', '🍇'],
      hint: 'Apple and banana take turns!',
      rule: 'AB repeat'
    },
    {
      type: 'repeat',
      sequence: ['🌸', '🌻', '🌸', '🌻', '?'],
      blankIndex: 4,
      answer: '🌸',
      options: ['🌺', '🌸', '🌷', '🌻'],
      hint: 'Pink flower, yellow flower, pink flower…',
      rule: 'AB repeat'
    },
    {
      type: 'repeat',
      sequence: ['🚗', '🚌', '🚗', '🚌', '?'],
      blankIndex: 4,
      answer: '🚗',
      options: ['🚗', '🚃', '✈️', '🚌'],
      hint: 'Car and bus keep repeating!',
      rule: 'AB repeat'
    },
    {
      type: 'repeat',
      sequence: ['🪐', '🌙', '🪐', '🌙', '?'],
      blankIndex: 4,
      answer: '🪐',
      options: ['⭐', '🌙', '🪐', '☄️'],
      hint: 'Planet, moon, planet, moon…',
      rule: 'AB repeat'
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // LEVEL 2 — ABC Patterns (3-item repeat, 7 items total)
  // ═══════════════════════════════════════════════════════════════
  2: [
    {
      type: 'repeat',
      sequence: ['🪐', '🌙', '☄️', '🪐', '🌙', '☄️', '?'],
      blankIndex: 6,
      answer: '🪐',
      options: ['🪐', '🌙', '☄️', '⭐'],
      hint: 'Three things repeat: planet, moon, comet!',
      rule: 'ABC repeat'
    },
    {
      type: 'repeat',
      sequence: ['🐰', '🐻', '🦊', '🐰', '🐻', '🦊', '?'],
      blankIndex: 6,
      answer: '🐰',
      options: ['🐻', '🐶', '🐰', '🦊'],
      hint: 'Bunny, bear, fox — then it starts again!',
      rule: 'ABC repeat'
    },
    {
      type: 'repeat',
      sequence: ['🍊', '🍇', '🍓', '🍊', '🍇', '🍓', '?'],
      blankIndex: 6,
      answer: '🍊',
      options: ['🍓', '🍊', '🍌', '🍇'],
      hint: 'Orange, grapes, strawberry — what starts the group?',
      rule: 'ABC repeat'
    },
    {
      type: 'repeat',
      sequence: ['🌺', '🌷', '🌹', '🌺', '🌷', '🌹', '?'],
      blankIndex: 6,
      answer: '🌺',
      options: ['🌹', '🌻', '🌺', '🌷'],
      hint: 'Three flowers repeat in a group!',
      rule: 'ABC repeat'
    },
    {
      type: 'repeat',
      sequence: ['🚃', '✈️', '🚢', '🚃', '✈️', '🚢', '?'],
      blankIndex: 6,
      answer: '🚃',
      options: ['🚢', '🚃', '🚗', '✈️'],
      hint: 'Train, plane, ship — then it repeats!',
      rule: 'ABC repeat'
    },
    {
      type: 'repeat',
      sequence: ['🚀', '⭐', '🛸', '🚀', '⭐', '🛸', '?'],
      blankIndex: 6,
      answer: '🚀',
      options: ['🛸', '🌙', '🚀', '⭐'],
      hint: 'Rocket, star, spaceship — the pattern has 3 items!',
      rule: 'ABC repeat'
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // LEVEL 3 — AABB Patterns (4-item repeat)
  // ═══════════════════════════════════════════════════════════════
  3: [
    {
      type: 'repeat',
      sequence: ['🌍', '🌍', '🌕', '🌕', '🌍', '🌍', '?'],
      blankIndex: 6,
      answer: '🌕',
      options: ['🌍', '🌕', '⭐', '🌙'],
      hint: 'Two earths, then two moons — what comes after two earths?',
      rule: 'AABB repeat'
    },
    {
      type: 'repeat',
      sequence: ['🐶', '🐶', '🐱', '🐱', '🐶', '🐶', '?'],
      blankIndex: 6,
      answer: '🐱',
      options: ['🐶', '🐰', '🐱', '🐻'],
      hint: 'Two dogs, two cats, two dogs… what pair starts next?',
      rule: 'AABB repeat'
    },
    {
      type: 'repeat',
      sequence: ['🍎', '🍎', '🍌', '🍌', '🍎', '🍎', '?'],
      blankIndex: 6,
      answer: '🍌',
      options: ['🍎', '🍌', '🍊', '🍇'],
      hint: 'Apples come in pairs, then bananas come in pairs!',
      rule: 'AABB repeat'
    },
    {
      type: 'repeat',
      sequence: ['🌸', '🌸', '🌻', '🌻', '🌸', '🌸', '?'],
      blankIndex: 6,
      answer: '🌻',
      options: ['🌸', '🌺', '🌻', '🌷'],
      hint: 'Each flower appears twice before switching!',
      rule: 'AABB repeat'
    },
    {
      type: 'repeat',
      sequence: ['🚗', '🚗', '🚌', '🚌', '🚗', '🚗', '?'],
      blankIndex: 6,
      answer: '🚌',
      options: ['🚃', '🚌', '🚗', '✈️'],
      hint: 'Two cars, two buses — they always come in pairs!',
      rule: 'AABB repeat'
    },
    {
      type: 'repeat',
      sequence: ['🚀', '🚀', '⭐', '⭐', '🚀', '🚀', '?'],
      blankIndex: 6,
      answer: '⭐',
      options: ['🚀', '☄️', '🌙', '⭐'],
      hint: 'Two rockets, two stars — what pair comes next?',
      rule: 'AABB repeat'
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // LEVEL 4 — ABBC Patterns (4-item repeat)
  // ═══════════════════════════════════════════════════════════════
  4: [
    {
      type: 'repeat',
      sequence: ['🛸', '⭐', '⭐', '🌙', '🛸', '⭐', '⭐', '?'],
      blankIndex: 7,
      answer: '🌙',
      options: ['🛸', '⭐', '🌙', '☄️'],
      hint: 'Spaceship, star, star, moon — the middle item is doubled!',
      rule: 'ABBC repeat'
    },
    {
      type: 'repeat',
      sequence: ['🐰', '🐻', '🐻', '🦊', '🐰', '🐻', '🐻', '?'],
      blankIndex: 7,
      answer: '🦊',
      options: ['🐰', '🐻', '🐱', '🦊'],
      hint: 'Bunny, two bears, fox — what finishes the group?',
      rule: 'ABBC repeat'
    },
    {
      type: 'repeat',
      sequence: ['🍎', '🍌', '🍌', '🍊', '🍎', '🍌', '🍌', '?'],
      blankIndex: 7,
      answer: '🍊',
      options: ['🍌', '🍎', '🍊', '🍇'],
      hint: 'Apple, two bananas, orange — the banana is doubled!',
      rule: 'ABBC repeat'
    },
    {
      type: 'repeat',
      sequence: ['🌷', '🌹', '🌹', '🌺', '🌷', '🌹', '🌹', '?'],
      blankIndex: 7,
      answer: '🌺',
      options: ['🌷', '🌹', '🌺', '🌻'],
      hint: 'One tulip, two roses, then a hibiscus!',
      rule: 'ABBC repeat'
    },
    {
      type: 'repeat',
      sequence: ['🚗', '🚌', '🚌', '🚃', '🚗', '🚌', '🚌', '?'],
      blankIndex: 7,
      answer: '🚃',
      options: ['🚗', '🚌', '✈️', '🚃'],
      hint: 'Car, two buses, train — find the last in the group!',
      rule: 'ABBC repeat'
    },
    {
      type: 'repeat',
      sequence: ['🪐', '🌙', '🌙', '☄️', '🪐', '🌙', '🌙', '?'],
      blankIndex: 7,
      answer: '☄️',
      options: ['🪐', '🌙', '☄️', '⭐'],
      hint: 'Planet, two moons, comet — what ends the pattern?',
      rule: 'ABBC repeat'
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // LEVEL 5 — ABCBA Mirror Patterns
  // ═══════════════════════════════════════════════════════════════
  5: [
    {
      type: 'repeat',
      sequence: ['🚀', '🪐', '⭐', '🪐', '?'],
      blankIndex: 4,
      answer: '🚀',
      options: ['🚀', '⭐', '🪐', '🌙'],
      hint: 'The pattern is a mirror — the end matches the start!',
      rule: 'ABCBA mirror'
    },
    {
      type: 'repeat',
      sequence: ['🐶', '🐱', '🐰', '🐱', '?'],
      blankIndex: 4,
      answer: '🐶',
      options: ['🐱', '🐰', '🐶', '🐻'],
      hint: 'Read it forwards and backwards — it should look the same!',
      rule: 'ABCBA mirror'
    },
    {
      type: 'repeat',
      sequence: ['🍎', '🍌', '🍊', '🍌', '?'],
      blankIndex: 4,
      answer: '🍎',
      options: ['🍊', '🍎', '🍌', '🍇'],
      hint: 'The first and last should be the same fruit!',
      rule: 'ABCBA mirror'
    },
    {
      type: 'repeat',
      sequence: ['🌸', '🌻', '🌺', '🌻', '?'],
      blankIndex: 4,
      answer: '🌸',
      options: ['🌸', '🌻', '🌺', '🌷'],
      hint: 'This pattern bounces back like a mirror!',
      rule: 'ABCBA mirror'
    },
    {
      type: 'repeat',
      sequence: ['🚗', '🚌', '🚃', '🚌', '?'],
      blankIndex: 4,
      answer: '🚗',
      options: ['🚃', '🚌', '✈️', '🚗'],
      hint: 'Position 1 and position 5 are twins!',
      rule: 'ABCBA mirror'
    },
    {
      type: 'repeat',
      sequence: ['🌍', '🌙', '⭐', '🌙', '?'],
      blankIndex: 4,
      answer: '🌍',
      options: ['⭐', '🌍', '🌙', '☄️'],
      hint: 'Earth, moon, star, moon… the pattern mirrors back!',
      rule: 'ABCBA mirror'
    }
  ]
};
