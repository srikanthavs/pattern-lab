/**
 * Growing Patterns Puzzle Data
 * Captain Advaith's Pattern Lab
 *
 * 30 puzzles across 5 difficulty levels (6 per level)
 * Each puzzle shows a growing sequence — the child must predict what comes next.
 *
 * Level 1: +1 growth
 * Level 2: +2 growth
 * Level 3: Doubling patterns
 * Level 4: +3 or +5 growth
 * Level 5: Fibonacci-lite / mixed growth
 */

export const GROWING_PUZZLES = {

  // ═══════════════════════════════════════════════════════════════
  // LEVEL 1 — Add 1 each time (+1 growth)
  // ═══════════════════════════════════════════════════════════════
  1: [
    {
      type: 'grow',
      sequence: ['⭐', '⭐⭐', '⭐⭐⭐', '?'],
      display: [1, 2, 3, '?'],
      answer: '⭐⭐⭐⭐',
      answerDisplay: 4,
      options: ['⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐', '⭐'],
      optionDisplays: [2, 4, 5, 1],
      hint: 'Each group grows by 1 more!',
      rule: '+1 each time'
    },
    {
      type: 'grow',
      sequence: ['🍎', '🍎🍎', '🍎🍎🍎', '?'],
      display: [1, 2, 3, '?'],
      answer: '🍎🍎🍎🍎',
      answerDisplay: 4,
      options: ['🍎🍎🍎🍎', '🍎🍎', '🍎🍎🍎🍎🍎', '🍎🍎🍎'],
      optionDisplays: [4, 2, 5, 3],
      hint: 'Count the apples — one more each time!',
      rule: '+1 each time'
    },
    {
      type: 'grow',
      sequence: ['🐟', '🐟🐟', '🐟🐟🐟', '?'],
      display: [1, 2, 3, '?'],
      answer: '🐟🐟🐟🐟',
      answerDisplay: 4,
      options: ['🐟🐟🐟', '🐟🐟🐟🐟🐟', '🐟🐟🐟🐟', '🐟🐟'],
      optionDisplays: [3, 5, 4, 2],
      hint: 'The fish keep joining — one more each step!',
      rule: '+1 each time'
    },
    {
      type: 'grow',
      sequence: ['🌙', '🌙🌙', '🌙🌙🌙', '🌙🌙🌙🌙', '?'],
      display: [1, 2, 3, 4, '?'],
      answer: '🌙🌙🌙🌙🌙',
      answerDisplay: 5,
      options: ['🌙🌙🌙🌙🌙', '🌙🌙🌙🌙', '🌙🌙🌙🌙🌙🌙', '🌙🌙🌙'],
      optionDisplays: [5, 4, 6, 3],
      hint: 'One more moon appears each time!',
      rule: '+1 each time'
    },
    {
      type: 'grow',
      sequence: ['🟢', '🟢🟢', '🟢🟢🟢', '?'],
      display: [1, 2, 3, '?'],
      answer: '🟢🟢🟢🟢',
      answerDisplay: 4,
      options: ['🟢🟢🟢🟢🟢', '🟢🟢🟢🟢', '🟢🟢', '🟢🟢🟢'],
      optionDisplays: [5, 4, 2, 3],
      hint: 'Add one green circle each time!',
      rule: '+1 each time'
    },
    {
      type: 'grow',
      sequence: ['🦋', '🦋🦋', '🦋🦋🦋', '🦋🦋🦋🦋', '?'],
      display: [1, 2, 3, 4, '?'],
      answer: '🦋🦋🦋🦋🦋',
      answerDisplay: 5,
      options: ['🦋🦋🦋', '🦋🦋🦋🦋🦋🦋', '🦋🦋🦋🦋🦋', '🦋🦋🦋🦋'],
      optionDisplays: [3, 6, 5, 4],
      hint: 'One more butterfly flutters in each time!',
      rule: '+1 each time'
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // LEVEL 2 — Add 2 each time (+2 growth)
  // ═══════════════════════════════════════════════════════════════
  2: [
    {
      type: 'grow',
      sequence: ['⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐⭐', '?'],
      display: [2, 4, 6, '?'],
      answer: '⭐⭐⭐⭐⭐⭐⭐⭐',
      answerDisplay: 8,
      options: ['⭐⭐⭐⭐⭐⭐⭐⭐', '⭐⭐⭐⭐⭐⭐⭐', '⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐', '⭐⭐⭐⭐⭐⭐'],
      optionDisplays: [8, 7, 10, 6],
      hint: 'We add 2 more stars each step!',
      rule: '+2 each time'
    },
    {
      type: 'grow',
      sequence: ['🍌🍌', '🍌🍌🍌🍌', '🍌🍌🍌🍌🍌🍌', '?'],
      display: [2, 4, 6, '?'],
      answer: '🍌🍌🍌🍌🍌🍌🍌🍌',
      answerDisplay: 8,
      options: ['🍌🍌🍌🍌🍌🍌🍌', '🍌🍌🍌🍌🍌🍌🍌🍌', '🍌🍌🍌🍌🍌🍌', '🍌🍌🍌🍌🍌🍌🍌🍌🍌🍌'],
      optionDisplays: [7, 8, 6, 10],
      hint: 'Two more bananas join the bunch each time!',
      rule: '+2 each time'
    },
    {
      type: 'grow',
      sequence: ['🔵', '🔵🔵🔵', '🔵🔵🔵🔵🔵', '?'],
      display: [1, 3, 5, '?'],
      answer: '🔵🔵🔵🔵🔵🔵🔵',
      answerDisplay: 7,
      options: ['🔵🔵🔵🔵🔵🔵', '🔵🔵🔵🔵🔵🔵🔵', '🔵🔵🔵🔵🔵🔵🔵🔵', '🔵🔵🔵🔵🔵🔵🔵🔵🔵'],
      optionDisplays: [6, 7, 8, 9],
      hint: 'Count the blue dots — they grow by 2!',
      rule: '+2 each time'
    },
    {
      type: 'grow',
      sequence: ['🐸🐸', '🐸🐸🐸🐸', '🐸🐸🐸🐸🐸🐸', '🐸🐸🐸🐸🐸🐸🐸🐸', '?'],
      display: [2, 4, 6, 8, '?'],
      answer: '🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸',
      answerDisplay: 10,
      options: ['🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸', '🐸🐸🐸🐸🐸🐸🐸🐸🐸', '🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸', '🐸🐸🐸🐸🐸🐸🐸🐸'],
      optionDisplays: [10, 9, 12, 8],
      hint: 'Two more frogs hop in each time!',
      rule: '+2 each time'
    },
    {
      type: 'grow',
      sequence: ['🌺🌺🌺', '🌺🌺🌺🌺🌺', '🌺🌺🌺🌺🌺🌺🌺', '?'],
      display: [3, 5, 7, '?'],
      answer: '🌺🌺🌺🌺🌺🌺🌺🌺🌺',
      answerDisplay: 9,
      options: ['🌺🌺🌺🌺🌺🌺🌺🌺', '🌺🌺🌺🌺🌺🌺🌺🌺🌺', '🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺', '🌺🌺🌺🌺🌺🌺🌺'],
      optionDisplays: [8, 9, 10, 7],
      hint: 'The garden grows by 2 flowers each time!',
      rule: '+2 each time'
    },
    {
      type: 'grow',
      sequence: ['🚀🚀🚀🚀', '🚀🚀🚀🚀🚀🚀', '🚀🚀🚀🚀🚀🚀🚀🚀', '?'],
      display: [4, 6, 8, '?'],
      answer: '🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀',
      answerDisplay: 10,
      options: ['🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀', '🚀🚀🚀🚀🚀🚀🚀🚀🚀', '🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀', '🚀🚀🚀🚀🚀🚀🚀🚀'],
      optionDisplays: [10, 9, 12, 8],
      hint: 'Two more rockets launch each time!',
      rule: '+2 each time'
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // LEVEL 3 — Doubling patterns (×2 growth)
  // ═══════════════════════════════════════════════════════════════
  3: [
    {
      type: 'grow',
      sequence: ['🌟', '🌟🌟', '🌟🌟🌟🌟', '?'],
      display: [1, 2, 4, '?'],
      answer: '🌟🌟🌟🌟🌟🌟🌟🌟',
      answerDisplay: 8,
      options: ['🌟🌟🌟🌟🌟🌟', '🌟🌟🌟🌟🌟🌟🌟🌟', '🌟🌟🌟🌟🌟', '🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟'],
      optionDisplays: [6, 8, 5, 10],
      hint: 'The number doubles each time — twice as many!',
      rule: '×2 each time'
    },
    {
      type: 'grow',
      sequence: ['🍓', '🍓🍓', '🍓🍓🍓🍓', '?'],
      display: [1, 2, 4, '?'],
      answer: '🍓🍓🍓🍓🍓🍓🍓🍓',
      answerDisplay: 8,
      options: ['🍓🍓🍓🍓🍓🍓🍓🍓', '🍓🍓🍓🍓🍓🍓', '🍓🍓🍓🍓🍓', '🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓'],
      optionDisplays: [8, 6, 5, 12],
      hint: 'Strawberries double every step!',
      rule: '×2 each time'
    },
    {
      type: 'grow',
      sequence: ['🐝🐝', '🐝🐝🐝🐝', '🐝🐝🐝🐝🐝🐝🐝🐝', '?'],
      display: [2, 4, 8, '?'],
      answer: 16,
      answerDisplay: 16,
      options: [10, 16, 12, 14],
      optionDisplays: [10, 16, 12, 14],
      hint: 'The bees double! 2 then 4 then 8 then...?',
      rule: '×2 each time'
    },
    {
      type: 'grow',
      sequence: ['🔴🔴🔴', '🔴🔴🔴🔴🔴🔴', '?'],
      display: [3, 6, '?'],
      answer: '🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴',
      answerDisplay: 12,
      options: [9, 12, 10, 15],
      optionDisplays: [9, 12, 10, 15],
      hint: 'Each group is double the one before!',
      rule: '×2 each time'
    },
    {
      type: 'grow',
      sequence: ['🦜', '🦜🦜', '🦜🦜🦜🦜', '🦜🦜🦜🦜🦜🦜🦜🦜', '?'],
      display: [1, 2, 4, 8, '?'],
      answer: 16,
      answerDisplay: 16,
      options: [12, 10, 16, 9],
      optionDisplays: [12, 10, 16, 9],
      hint: 'Parrots double: 1, 2, 4, 8... what next?',
      rule: '×2 each time'
    },
    {
      type: 'grow',
      sequence: ['🟡🟡', '🟡🟡🟡🟡', '?'],
      display: [2, 4, '?'],
      answer: '🟡🟡🟡🟡🟡🟡🟡🟡',
      answerDisplay: 8,
      options: ['🟡🟡🟡🟡🟡🟡🟡🟡', '🟡🟡🟡🟡🟡🟡', '🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡', '🟡🟡🟡🟡🟡'],
      optionDisplays: [8, 6, 10, 5],
      hint: 'Double the yellow dots each time!',
      rule: '×2 each time'
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // LEVEL 4 — Add 3 or Add 5 growth
  // ═══════════════════════════════════════════════════════════════
  4: [
    {
      type: 'grow',
      sequence: ['🌍🌍🌍🌍🌍', '🌍🌍🌍🌍🌍🌍🌍🌍🌍🌍', '?'],
      display: [5, 10, '?'],
      answer: 15,
      answerDisplay: 15,
      options: [12, 15, 20, 13],
      optionDisplays: [12, 15, 20, 13],
      hint: 'We add 5 planets each time!',
      rule: '+5 each time'
    },
    {
      type: 'grow',
      sequence: ['🐘🐘🐘', '🐘🐘🐘🐘🐘🐘', '🐘🐘🐘🐘🐘🐘🐘🐘🐘', '?'],
      display: [3, 6, 9, '?'],
      answer: 12,
      answerDisplay: 12,
      options: [10, 11, 12, 15],
      optionDisplays: [10, 11, 12, 15],
      hint: 'Three more elephants march in each time!',
      rule: '+3 each time'
    },
    {
      type: 'grow',
      sequence: ['🚀🚀🚀🚀🚀', '🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀', '?'],
      display: [5, 10, '?'],
      answer: 15,
      answerDisplay: 15,
      options: [15, 12, 20, 14],
      optionDisplays: [15, 12, 20, 14],
      hint: 'Five more rockets blast off each step!',
      rule: '+5 each time'
    },
    {
      type: 'grow',
      sequence: ['🎈🎈🎈🎈🎈', '🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈', '?'],
      display: [5, 10, '?'],
      answer: 15,
      answerDisplay: 15,
      options: [13, 15, 20, 11],
      optionDisplays: [13, 15, 20, 11],
      hint: 'Five more balloons float up each time!',
      rule: '+5 each time'
    },
    {
      type: 'grow',
      sequence: ['🐢🐢🐢🐢', '🐢🐢🐢🐢🐢🐢🐢', '🐢🐢🐢🐢🐢🐢🐢🐢🐢🐢', '?'],
      display: [4, 7, 10, '?'],
      answer: 13,
      answerDisplay: 13,
      options: [11, 12, 13, 14],
      optionDisplays: [11, 12, 13, 14],
      hint: 'Three more turtles waddle in each time!',
      rule: '+3 each time'
    },
    {
      type: 'grow',
      sequence: ['🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸', '?'],
      display: [10, '?'],
      answer: 15,
      answerDisplay: 15,
      options: [13, 15, 12, 20],
      optionDisplays: [13, 15, 12, 20],
      hint: 'The garden started at 5, grew to 10. What comes next? Add 5!',
      rule: '+5 each time'
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // LEVEL 5 — Mixed growth & Fibonacci-lite patterns
  // ═══════════════════════════════════════════════════════════════
  5: [
    {
      type: 'grow',
      sequence: ['🌟', '🌟', '🌟🌟', '🌟🌟🌟', '?'],
      display: [1, 1, 2, 3, '?'],
      answer: '🌟🌟🌟🌟🌟',
      answerDisplay: 5,
      options: [4, 5, 6, 3],
      optionDisplays: [4, 5, 6, 3],
      hint: 'Add the last two numbers to get the next! 2 + 3 = ?',
      rule: 'Add last two numbers'
    },
    {
      type: 'grow',
      sequence: ['🐝', '🐝', '🐝🐝', '🐝🐝🐝', '🐝🐝🐝🐝🐝', '?'],
      display: [1, 1, 2, 3, 5, '?'],
      answer: '🐝🐝🐝🐝🐝🐝🐝🐝',
      answerDisplay: 8,
      options: [6, 7, 8, 10],
      optionDisplays: [6, 7, 8, 10],
      hint: 'Each number is the sum of the two before it! 3 + 5 = ?',
      rule: 'Add last two numbers'
    },
    {
      type: 'grow',
      sequence: ['🔵🔵', '🔵🔵🔵', '🔵🔵🔵🔵🔵', '🔵🔵🔵🔵🔵🔵🔵🔵', '?'],
      display: [2, 3, 5, 8, '?'],
      answer: 13,
      answerDisplay: 13,
      options: [10, 11, 13, 15],
      optionDisplays: [10, 11, 13, 15],
      hint: 'Add the last two: 5 + 8 = ?',
      rule: 'Add last two numbers'
    },
    {
      type: 'grow',
      sequence: ['🍎', '🍎🍎🍎', '🍎🍎🍎🍎🍎🍎', '🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎', '?'],
      display: [1, 3, 6, 10, '?'],
      answer: 15,
      answerDisplay: 15,
      options: [12, 14, 15, 16],
      optionDisplays: [12, 14, 15, 16],
      hint: 'The jump gets bigger each time: +2, +3, +4... what is +5?',
      rule: 'Add 1 more each step'
    },
    {
      type: 'grow',
      sequence: ['🦋🦋', '🦋🦋🦋🦋', '🦋🦋🦋🦋🦋🦋🦋', '?'],
      display: [2, 4, 7, '?'],
      answer: 11,
      answerDisplay: 11,
      options: [9, 10, 11, 12],
      optionDisplays: [9, 10, 11, 12],
      hint: 'The gap grows: +2, then +3, then +4!',
      rule: 'Add 1 more each step'
    },
    {
      type: 'grow',
      sequence: ['🌙', '🌙🌙', '🌙🌙🌙', '🌙🌙🌙🌙🌙', '🌙🌙🌙🌙🌙🌙🌙🌙', '?'],
      display: [1, 2, 3, 5, 8, '?'],
      answer: 13,
      answerDisplay: 13,
      options: [10, 11, 13, 15],
      optionDisplays: [10, 11, 13, 15],
      hint: 'Add the last two numbers: 5 + 8 = ?',
      rule: 'Add last two numbers'
    }
  ]
};
