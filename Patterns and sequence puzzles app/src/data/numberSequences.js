/**
 * Number Sequences Puzzle Bank
 * Captain Advaith's Pattern Lab
 *
 * 30 puzzles total — 6 per level (Levels 1–5)
 * All numbers within 1–100, age-appropriate for 5–8 year olds
 */

export const NUMBER_PUZZLES = {

  /* ──────────────────────────────────────────────
   * LEVEL 1 — Count by 1s forward (very easy)
   * ──────────────────────────────────────────────*/
  1: [
    {
      type: 'number',
      sequence: [1, 2, 3, 4, '?'],
      blankIndex: 4,
      answer: 5,
      options: [5, 6, 3, 7],
      hint: 'Count up by 1 each time!',
      rule: '+1',
      visual: ['🚀', '🚀🚀', '🚀🚀🚀', '🚀🚀🚀🚀', '?']
    },
    {
      type: 'number',
      sequence: [2, 3, 4, 5, '?'],
      blankIndex: 4,
      answer: 6,
      options: [6, 7, 4, 8],
      hint: 'Each number is one more than the last!',
      rule: '+1',
      visual: ['🍎🍎', '🍎🍎🍎', '🍎🍎🍎🍎', '🍎🍎🍎🍎🍎', '?']
    },
    {
      type: 'number',
      sequence: [3, 4, 5, 6, '?'],
      blankIndex: 4,
      answer: 7,
      options: [7, 8, 5, 9],
      hint: 'Add 1 to get the next number!',
      rule: '+1',
      visual: ['⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐⭐⭐', '?']
    },
    {
      type: 'number',
      sequence: [5, 6, 7, 8, '?'],
      blankIndex: 4,
      answer: 9,
      options: [9, 10, 7, 6],
      hint: 'Keep counting forward by 1!',
      rule: '+1',
      visual: ['🌟🌟🌟🌟🌟', '🌟🌟🌟🌟🌟🌟', '🌟🌟🌟🌟🌟🌟🌟', '🌟🌟🌟🌟🌟🌟🌟🌟', '?']
    },
    {
      type: 'number',
      sequence: [4, 5, 6, 7, '?'],
      blankIndex: 4,
      answer: 8,
      options: [8, 9, 6, 10],
      hint: 'What comes after 7 when you count?',
      rule: '+1',
      visual: ['🐟🐟🐟🐟', '🐟🐟🐟🐟🐟', '🐟🐟🐟🐟🐟🐟', '🐟🐟🐟🐟🐟🐟🐟', '?']
    },
    {
      type: 'number',
      sequence: [6, 7, 8, 9, '?'],
      blankIndex: 4,
      answer: 10,
      options: [10, 11, 8, 12],
      hint: 'Count one more after 9!',
      rule: '+1',
      visual: ['🍌🍌🍌🍌🍌🍌', '🍌🍌🍌🍌🍌🍌🍌', '🍌🍌🍌🍌🍌🍌🍌🍌', '🍌🍌🍌🍌🍌🍌🍌🍌🍌', '?']
    }
  ],

  /* ──────────────────────────────────────────────
   * LEVEL 2 — Count by 2s (easy)
   * ──────────────────────────────────────────────*/
  2: [
    {
      type: 'number',
      sequence: [2, 4, 6, 8, '?'],
      blankIndex: 4,
      answer: 10,
      options: [10, 9, 12, 7],
      hint: 'Skip one number each time — count by 2s!',
      rule: '+2',
      visual: ['🚀🚀', '🚀🚀🚀🚀', '🚀🚀🚀🚀🚀🚀', '🚀🚀🚀🚀🚀🚀🚀🚀', '?']
    },
    {
      type: 'number',
      sequence: [1, 3, 5, 7, '?'],
      blankIndex: 4,
      answer: 9,
      options: [9, 8, 10, 11],
      hint: 'Add 2 every time!',
      rule: '+2',
      visual: ['🐸', '🐸🐸🐸', '🐸🐸🐸🐸🐸', '🐸🐸🐸🐸🐸🐸🐸', '?']
    },
    {
      type: 'number',
      sequence: [4, 6, 8, 10, '?'],
      blankIndex: 4,
      answer: 12,
      options: [12, 11, 14, 9],
      hint: 'Each number jumps by 2!',
      rule: '+2',
      visual: ['🍊🍊🍊🍊', '🍊🍊🍊🍊🍊🍊', '🍊🍊🍊🍊🍊🍊🍊🍊', '🍊🍊🍊🍊🍊🍊🍊🍊🍊🍊', '?']
    },
    {
      type: 'number',
      sequence: [6, 8, 10, 12, '?'],
      blankIndex: 4,
      answer: 14,
      options: [14, 13, 16, 11],
      hint: 'Skip counting by 2 — what comes next?',
      rule: '+2',
      visual: ['🌙🌙🌙🌙🌙🌙', '🌙🌙🌙🌙🌙🌙🌙🌙', '🌙🌙🌙🌙🌙🌙🌙🌙🌙🌙', '🌙🌙🌙🌙🌙🌙🌙🌙🌙🌙🌙🌙', '?']
    },
    {
      type: 'number',
      sequence: [10, 12, 14, 16, '?'],
      blankIndex: 4,
      answer: 18,
      options: [18, 17, 20, 15],
      hint: 'Add 2 to 16!',
      rule: '+2',
      visual: ['🌕', '🌕🌕', '🌕🌕🌕', '🌕🌕🌕🌕', '?']
    },
    {
      type: 'number',
      sequence: [3, 5, 7, 9, '?'],
      blankIndex: 4,
      answer: 11,
      options: [11, 10, 12, 13],
      hint: 'These are odd numbers — add 2 each time!',
      rule: '+2',
      visual: ['🐱🐱🐱', '🐱🐱🐱🐱🐱', '🐱🐱🐱🐱🐱🐱🐱', '🐱🐱🐱🐱🐱🐱🐱🐱🐱', '?']
    }
  ],

  /* ──────────────────────────────────────────────
   * LEVEL 3 — Count by 5s and by 3s (medium)
   * ──────────────────────────────────────────────*/
  3: [
    {
      type: 'number',
      sequence: [5, 10, 15, 20, '?'],
      blankIndex: 4,
      answer: 25,
      options: [25, 22, 30, 21],
      hint: 'Count by 5 — like counting fingers on your hands!',
      rule: '+5',
      visual: ['🖐️', '🖐️🖐️', '🖐️🖐️🖐️', '🖐️🖐️🖐️🖐️', '?']
    },
    {
      type: 'number',
      sequence: [10, 15, 20, 25, '?'],
      blankIndex: 4,
      answer: 30,
      options: [30, 28, 35, 26],
      hint: 'Add 5 each time!',
      rule: '+5',
      visual: ['🌟🌟', '🌟🌟🌟', '🌟🌟🌟🌟', '🌟🌟🌟🌟🌟', '?']
    },
    {
      type: 'number',
      sequence: [3, 6, 9, 12, '?'],
      blankIndex: 4,
      answer: 15,
      options: [15, 13, 14, 18],
      hint: 'Count by 3 — jump three numbers each time!',
      rule: '+3',
      visual: ['🍉🍉🍉', '🍉🍉🍉🍉🍉🍉', '🍉🍉🍉🍉🍉🍉🍉🍉🍉', '🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉🍉', '?']
    },
    {
      type: 'number',
      sequence: [6, 9, 12, 15, '?'],
      blankIndex: 4,
      answer: 18,
      options: [18, 16, 20, 17],
      hint: 'Each number is 3 more than the last!',
      rule: '+3',
      visual: ['🐝🐝', '🐝🐝🐝', '🐝🐝🐝🐝', '🐝🐝🐝🐝🐝', '?']
    },
    {
      type: 'number',
      sequence: [20, 25, 30, 35, '?'],
      blankIndex: 4,
      answer: 40,
      options: [40, 38, 45, 36],
      hint: 'Skip count by 5 — add 5 to 35!',
      rule: '+5',
      visual: ['🚂', '🚂🚃', '🚂🚃🚃', '🚂🚃🚃🚃', '?']
    },
    {
      type: 'number',
      sequence: [9, 12, 15, 18, '?'],
      blankIndex: 4,
      answer: 21,
      options: [21, 20, 19, 24],
      hint: 'Keep adding 3!',
      rule: '+3',
      visual: ['🎈🎈🎈', '🎈🎈🎈🎈', '🎈🎈🎈🎈🎈', '🎈🎈🎈🎈🎈🎈', '?']
    }
  ],

  /* ──────────────────────────────────────────────
   * LEVEL 4 — Count by 10s and mixed patterns
   * ──────────────────────────────────────────────*/
  4: [
    {
      type: 'number',
      sequence: [10, 20, 30, 40, '?'],
      blankIndex: 4,
      answer: 50,
      options: [50, 45, 60, 41],
      hint: 'Count by 10 — like counting groups of 10!',
      rule: '+10',
      visual: ['🔟', '🔟🔟', '🔟🔟🔟', '🔟🔟🔟🔟', '?']
    },
    {
      type: 'number',
      sequence: [20, 30, 40, 50, '?'],
      blankIndex: 4,
      answer: 60,
      options: [60, 55, 70, 51],
      hint: 'Add 10 each time!',
      rule: '+10',
      visual: ['🌍', '🌍🌏', '🌍🌏🌎', '🌍🌏🌎🌍', '?']
    },
    {
      type: 'number',
      sequence: [4, 8, 12, 16, '?'],
      blankIndex: 4,
      answer: 20,
      options: [20, 18, 22, 17],
      hint: 'Each number grows by 4!',
      rule: '+4',
      visual: ['🐾', '🐾🐾', '🐾🐾🐾', '🐾🐾🐾🐾', '?']
    },
    {
      type: 'number',
      sequence: [50, 60, 70, 80, '?'],
      blankIndex: 4,
      answer: 90,
      options: [90, 85, 100, 81],
      hint: 'Big jumps of 10!',
      rule: '+10',
      visual: ['🪐', '🪐🪐', '🪐🪐🪐', '🪐🪐🪐🪐', '?']
    },
    {
      type: 'number',
      sequence: [8, 12, 16, 20, '?'],
      blankIndex: 4,
      answer: 24,
      options: [24, 22, 28, 21],
      hint: 'Add 4 each time to find the answer!',
      rule: '+4',
      visual: ['🦋🦋', '🦋🦋🦋', '🦋🦋🦋🦋', '🦋🦋🦋🦋🦋', '?']
    },
    {
      type: 'number',
      sequence: [15, 20, 25, 30, '?'],
      blankIndex: 4,
      answer: 35,
      options: [35, 32, 40, 31],
      hint: 'Jump by 5 from 30!',
      rule: '+5',
      visual: ['🎯', '🎯🎯', '🎯🎯🎯', '🎯🎯🎯🎯', '?']
    }
  ],

  /* ──────────────────────────────────────────────
   * LEVEL 5 — Countdown and tricky patterns
   * ──────────────────────────────────────────────*/
  5: [
    {
      type: 'number',
      sequence: [20, 18, 16, 14, '?'],
      blankIndex: 4,
      answer: 12,
      options: [12, 13, 10, 15],
      hint: 'Counting down by 2 each time!',
      rule: '-2',
      visual: ['🚀🚀🚀🚀🚀', '🚀🚀🚀🚀', '🚀🚀🚀', '🚀🚀', '?']
    },
    {
      type: 'number',
      sequence: [15, 12, 9, 6, '?'],
      blankIndex: 4,
      answer: 3,
      options: [3, 4, 5, 2],
      hint: 'Take away 3 each time!',
      rule: '-3',
      visual: ['🌟🌟🌟🌟🌟', '🌟🌟🌟🌟', '🌟🌟🌟', '🌟🌟', '?']
    },
    {
      type: 'number',
      sequence: [50, 45, 40, 35, '?'],
      blankIndex: 4,
      answer: 30,
      options: [30, 32, 25, 34],
      hint: 'Subtract 5 from each number!',
      rule: '-5',
      visual: ['🪐🪐🪐🪐🪐', '🪐🪐🪐🪐', '🪐🪐🪐', '🪐🪐', '?']
    },
    {
      type: 'number',
      sequence: [100, 90, 80, 70, '?'],
      blankIndex: 4,
      answer: 60,
      options: [60, 65, 50, 69],
      hint: 'Blast off countdown — subtract 10!',
      rule: '-10',
      visual: ['🔟🔟🔟🔟🔟', '🔟🔟🔟🔟', '🔟🔟🔟', '🔟🔟', '?']
    },
    {
      type: 'number',
      sequence: [2, 4, 8, 16, '?'],
      blankIndex: 4,
      answer: 32,
      options: [32, 24, 20, 30],
      hint: 'Each number doubles — multiply by 2!',
      rule: 'x2',
      visual: ['🐛', '🐛🐛', '🐛🐛🐛🐛', '🐛🐛🐛🐛🐛🐛🐛🐛', '?']
    },
    {
      type: 'number',
      sequence: [1, 2, 4, 7, '?'],
      blankIndex: 4,
      answer: 11,
      options: [11, 10, 9, 12],
      hint: 'The gap grows by 1 each time: +1, +2, +3, +?',
      rule: '+1,+2,+3,+4',
      visual: ['🌟', '🌟🌟', '🌟🌟🌟🌟', '🌟🌟🌟🌟🌟🌟🌟', '?']
    }
  ]

};
