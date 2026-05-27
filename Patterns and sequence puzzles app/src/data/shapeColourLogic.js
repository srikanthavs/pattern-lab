// ============================================================
// Captain Advaith's Pattern Lab — Shape & Colour Logic Puzzles
// 30 puzzles · 6 per level · Levels 1–5
// ============================================================
// Colours:
//   #FF6FB5 = pink,  #4D96FF = blue,   #4ECDC4 = teal
//   #FFD93D = gold,  #6BCB77 = green,  #A78BFA = purple,  #FF8C42 = orange
//
// Shapes:
//   circle, square, triangle, diamond, star, hexagon
// ============================================================

export const SHAPE_PUZZLES = {

  // ──────────────────────────────────────────────────────────
  // LEVEL 1 — Same shape, alternating 2 colours
  // ──────────────────────────────────────────────────────────
  1: [
    {
      type: 'shape',
      sequence: [
        { shape: 'circle', color: '#FF6FB5' },
        { shape: 'circle', color: '#4D96FF' },
        { shape: 'circle', color: '#FF6FB5' },
        { shape: 'circle', color: '#4D96FF' },
        null,
      ],
      blankIndex: 4,
      answer: { shape: 'circle', color: '#FF6FB5' },
      options: [
        { shape: 'circle', color: '#FF6FB5' },
        { shape: 'square', color: '#FF6FB5' },
        { shape: 'circle', color: '#4ECDC4' },
        { shape: 'triangle', color: '#4D96FF' },
      ],
      hint: 'The colours take turns — pink, blue, pink, blue...',
      rule: 'alternating colour',
    },
    {
      type: 'shape',
      sequence: [
        { shape: 'square', color: '#FFD93D' },
        { shape: 'square', color: '#6BCB77' },
        { shape: 'square', color: '#FFD93D' },
        null,
        { shape: 'square', color: '#FFD93D' },
      ],
      blankIndex: 3,
      answer: { shape: 'square', color: '#6BCB77' },
      options: [
        { shape: 'square', color: '#FFD93D' },
        { shape: 'square', color: '#6BCB77' },
        { shape: 'circle', color: '#6BCB77' },
        { shape: 'square', color: '#FF6FB5' },
      ],
      hint: 'Gold and green squares keep swapping!',
      rule: 'alternating colour',
    },
    {
      type: 'shape',
      sequence: [
        { shape: 'triangle', color: '#A78BFA' },
        { shape: 'triangle', color: '#FF8C42' },
        null,
        { shape: 'triangle', color: '#FF8C42' },
        { shape: 'triangle', color: '#A78BFA' },
      ],
      blankIndex: 2,
      answer: { shape: 'triangle', color: '#A78BFA' },
      options: [
        { shape: 'triangle', color: '#A78BFA' },
        { shape: 'triangle', color: '#FF8C42' },
        { shape: 'diamond', color: '#A78BFA' },
        { shape: 'triangle', color: '#4D96FF' },
      ],
      hint: 'Purple, orange, purple, orange — which comes next?',
      rule: 'alternating colour',
    },
    {
      type: 'shape',
      sequence: [
        { shape: 'star', color: '#4ECDC4' },
        { shape: 'star', color: '#FFD93D' },
        { shape: 'star', color: '#4ECDC4' },
        { shape: 'star', color: '#FFD93D' },
        null,
      ],
      blankIndex: 4,
      answer: { shape: 'star', color: '#4ECDC4' },
      options: [
        { shape: 'star', color: '#4ECDC4' },
        { shape: 'star', color: '#FFD93D' },
        { shape: 'hexagon', color: '#4ECDC4' },
        { shape: 'star', color: '#FF6FB5' },
      ],
      hint: 'Teal and gold stars take turns!',
      rule: 'alternating colour',
    },
    {
      type: 'shape',
      sequence: [
        null,
        { shape: 'diamond', color: '#4D96FF' },
        { shape: 'diamond', color: '#FF6FB5' },
        { shape: 'diamond', color: '#4D96FF' },
        { shape: 'diamond', color: '#FF6FB5' },
      ],
      blankIndex: 0,
      answer: { shape: 'diamond', color: '#FF6FB5' },
      options: [
        { shape: 'diamond', color: '#4D96FF' },
        { shape: 'diamond', color: '#FF6FB5' },
        { shape: 'circle', color: '#FF6FB5' },
        { shape: 'diamond', color: '#6BCB77' },
      ],
      hint: 'Look at the pattern — pink, blue, pink, blue. What starts it off?',
      rule: 'alternating colour',
    },
    {
      type: 'shape',
      sequence: [
        { shape: 'hexagon', color: '#6BCB77' },
        { shape: 'hexagon', color: '#A78BFA' },
        { shape: 'hexagon', color: '#6BCB77' },
        null,
        { shape: 'hexagon', color: '#6BCB77' },
      ],
      blankIndex: 3,
      answer: { shape: 'hexagon', color: '#A78BFA' },
      options: [
        { shape: 'hexagon', color: '#6BCB77' },
        { shape: 'hexagon', color: '#A78BFA' },
        { shape: 'hexagon', color: '#FFD93D' },
        { shape: 'star', color: '#A78BFA' },
      ],
      hint: 'Green, purple, green, purple — keep the rhythm!',
      rule: 'alternating colour',
    },
  ],

  // ──────────────────────────────────────────────────────────
  // LEVEL 2 — Alternating 2 shapes, same colour
  // ──────────────────────────────────────────────────────────
  2: [
    {
      type: 'shape',
      sequence: [
        { shape: 'circle', color: '#FF6FB5' },
        { shape: 'square', color: '#FF6FB5' },
        { shape: 'circle', color: '#FF6FB5' },
        { shape: 'square', color: '#FF6FB5' },
        null,
      ],
      blankIndex: 4,
      answer: { shape: 'circle', color: '#FF6FB5' },
      options: [
        { shape: 'circle', color: '#FF6FB5' },
        { shape: 'square', color: '#FF6FB5' },
        { shape: 'triangle', color: '#FF6FB5' },
        { shape: 'circle', color: '#4D96FF' },
      ],
      hint: 'Circle, square, circle, square — what comes next?',
      rule: 'alternating shape',
    },
    {
      type: 'shape',
      sequence: [
        { shape: 'triangle', color: '#4D96FF' },
        { shape: 'diamond', color: '#4D96FF' },
        null,
        { shape: 'diamond', color: '#4D96FF' },
        { shape: 'triangle', color: '#4D96FF' },
      ],
      blankIndex: 2,
      answer: { shape: 'triangle', color: '#4D96FF' },
      options: [
        { shape: 'triangle', color: '#4D96FF' },
        { shape: 'diamond', color: '#4D96FF' },
        { shape: 'square', color: '#4D96FF' },
        { shape: 'triangle', color: '#FFD93D' },
      ],
      hint: 'Two blue shapes keep swapping — triangle and diamond!',
      rule: 'alternating shape',
    },
    {
      type: 'shape',
      sequence: [
        { shape: 'star', color: '#FFD93D' },
        { shape: 'hexagon', color: '#FFD93D' },
        { shape: 'star', color: '#FFD93D' },
        null,
        { shape: 'star', color: '#FFD93D' },
      ],
      blankIndex: 3,
      answer: { shape: 'hexagon', color: '#FFD93D' },
      options: [
        { shape: 'star', color: '#FFD93D' },
        { shape: 'hexagon', color: '#FFD93D' },
        { shape: 'hexagon', color: '#6BCB77' },
        { shape: 'diamond', color: '#FFD93D' },
      ],
      hint: 'Star, hexagon, star, hexagon — gold shapes taking turns!',
      rule: 'alternating shape',
    },
    {
      type: 'shape',
      sequence: [
        null,
        { shape: 'circle', color: '#6BCB77' },
        { shape: 'diamond', color: '#6BCB77' },
        { shape: 'circle', color: '#6BCB77' },
        { shape: 'diamond', color: '#6BCB77' },
      ],
      blankIndex: 0,
      answer: { shape: 'diamond', color: '#6BCB77' },
      options: [
        { shape: 'diamond', color: '#6BCB77' },
        { shape: 'circle', color: '#6BCB77' },
        { shape: 'square', color: '#6BCB77' },
        { shape: 'diamond', color: '#A78BFA' },
      ],
      hint: 'Diamond, circle, diamond, circle — what comes first?',
      rule: 'alternating shape',
    },
    {
      type: 'shape',
      sequence: [
        { shape: 'square', color: '#4ECDC4' },
        { shape: 'triangle', color: '#4ECDC4' },
        { shape: 'square', color: '#4ECDC4' },
        { shape: 'triangle', color: '#4ECDC4' },
        null,
      ],
      blankIndex: 4,
      answer: { shape: 'square', color: '#4ECDC4' },
      options: [
        { shape: 'square', color: '#4ECDC4' },
        { shape: 'triangle', color: '#4ECDC4' },
        { shape: 'circle', color: '#4ECDC4' },
        { shape: 'square', color: '#FF8C42' },
      ],
      hint: 'Square and triangle are teal best friends — who goes next?',
      rule: 'alternating shape',
    },
    {
      type: 'shape',
      sequence: [
        { shape: 'hexagon', color: '#A78BFA' },
        { shape: 'star', color: '#A78BFA' },
        null,
        { shape: 'star', color: '#A78BFA' },
        { shape: 'hexagon', color: '#A78BFA' },
      ],
      blankIndex: 2,
      answer: { shape: 'hexagon', color: '#A78BFA' },
      options: [
        { shape: 'hexagon', color: '#A78BFA' },
        { shape: 'star', color: '#A78BFA' },
        { shape: 'circle', color: '#A78BFA' },
        { shape: 'hexagon', color: '#FF6FB5' },
      ],
      hint: 'Purple hexagon, purple star — they keep alternating!',
      rule: 'alternating shape',
    },
  ],

  // ──────────────────────────────────────────────────────────
  // LEVEL 3 — Both shape AND colour alternate together
  // ──────────────────────────────────────────────────────────
  3: [
    {
      type: 'shape',
      sequence: [
        { shape: 'circle', color: '#FF6FB5' },
        { shape: 'square', color: '#4D96FF' },
        { shape: 'circle', color: '#FF6FB5' },
        { shape: 'square', color: '#4D96FF' },
        null,
      ],
      blankIndex: 4,
      answer: { shape: 'circle', color: '#FF6FB5' },
      options: [
        { shape: 'circle', color: '#FF6FB5' },
        { shape: 'square', color: '#4D96FF' },
        { shape: 'circle', color: '#4D96FF' },
        { shape: 'square', color: '#FF6FB5' },
      ],
      hint: 'Pink circle, blue square — both shape AND colour change together!',
      rule: 'alternating shape and colour',
    },
    {
      type: 'shape',
      sequence: [
        { shape: 'triangle', color: '#FFD93D' },
        { shape: 'star', color: '#6BCB77' },
        null,
        { shape: 'star', color: '#6BCB77' },
        { shape: 'triangle', color: '#FFD93D' },
      ],
      blankIndex: 2,
      answer: { shape: 'triangle', color: '#FFD93D' },
      options: [
        { shape: 'triangle', color: '#FFD93D' },
        { shape: 'star', color: '#6BCB77' },
        { shape: 'triangle', color: '#6BCB77' },
        { shape: 'star', color: '#FFD93D' },
      ],
      hint: 'Gold triangle and green star keep swapping — shape and colour!',
      rule: 'alternating shape and colour',
    },
    {
      type: 'shape',
      sequence: [
        { shape: 'diamond', color: '#A78BFA' },
        { shape: 'hexagon', color: '#FF8C42' },
        { shape: 'diamond', color: '#A78BFA' },
        null,
        { shape: 'diamond', color: '#A78BFA' },
      ],
      blankIndex: 3,
      answer: { shape: 'hexagon', color: '#FF8C42' },
      options: [
        { shape: 'hexagon', color: '#FF8C42' },
        { shape: 'diamond', color: '#A78BFA' },
        { shape: 'hexagon', color: '#A78BFA' },
        { shape: 'diamond', color: '#FF8C42' },
      ],
      hint: 'Purple diamond, orange hexagon — two things change each time!',
      rule: 'alternating shape and colour',
    },
    {
      type: 'shape',
      sequence: [
        null,
        { shape: 'circle', color: '#4ECDC4' },
        { shape: 'star', color: '#FF6FB5' },
        { shape: 'circle', color: '#4ECDC4' },
        { shape: 'star', color: '#FF6FB5' },
      ],
      blankIndex: 0,
      answer: { shape: 'star', color: '#FF6FB5' },
      options: [
        { shape: 'star', color: '#FF6FB5' },
        { shape: 'circle', color: '#4ECDC4' },
        { shape: 'star', color: '#4ECDC4' },
        { shape: 'circle', color: '#FF6FB5' },
      ],
      hint: 'Pink star, teal circle — figure out who goes first!',
      rule: 'alternating shape and colour',
    },
    {
      type: 'shape',
      sequence: [
        { shape: 'square', color: '#6BCB77' },
        { shape: 'triangle', color: '#4D96FF' },
        { shape: 'square', color: '#6BCB77' },
        { shape: 'triangle', color: '#4D96FF' },
        null,
      ],
      blankIndex: 4,
      answer: { shape: 'square', color: '#6BCB77' },
      options: [
        { shape: 'square', color: '#6BCB77' },
        { shape: 'triangle', color: '#4D96FF' },
        { shape: 'square', color: '#4D96FF' },
        { shape: 'triangle', color: '#6BCB77' },
      ],
      hint: 'Green square, blue triangle — both swap every time!',
      rule: 'alternating shape and colour',
    },
    {
      type: 'shape',
      sequence: [
        { shape: 'hexagon', color: '#FFD93D' },
        { shape: 'diamond', color: '#A78BFA' },
        { shape: 'hexagon', color: '#FFD93D' },
        null,
        { shape: 'hexagon', color: '#FFD93D' },
      ],
      blankIndex: 3,
      answer: { shape: 'diamond', color: '#A78BFA' },
      options: [
        { shape: 'diamond', color: '#A78BFA' },
        { shape: 'hexagon', color: '#FFD93D' },
        { shape: 'diamond', color: '#FFD93D' },
        { shape: 'hexagon', color: '#A78BFA' },
      ],
      hint: 'Gold hexagon and purple diamond — they trade places!',
      rule: 'alternating shape and colour',
    },
  ],

  // ──────────────────────────────────────────────────────────
  // LEVEL 4 — 3-item shape/colour cycles (ABC ABC …)
  // ──────────────────────────────────────────────────────────
  4: [
    {
      type: 'shape',
      sequence: [
        { shape: 'circle', color: '#FF6FB5' },
        { shape: 'circle', color: '#4D96FF' },
        { shape: 'circle', color: '#FFD93D' },
        { shape: 'circle', color: '#FF6FB5' },
        { shape: 'circle', color: '#4D96FF' },
        null,
      ],
      blankIndex: 5,
      answer: { shape: 'circle', color: '#FFD93D' },
      options: [
        { shape: 'circle', color: '#FFD93D' },
        { shape: 'circle', color: '#FF6FB5' },
        { shape: 'circle', color: '#4D96FF' },
        { shape: 'circle', color: '#6BCB77' },
      ],
      hint: 'Three colours repeat — pink, blue, gold, pink, blue, ???',
      rule: '3-colour cycle',
    },
    {
      type: 'shape',
      sequence: [
        { shape: 'triangle', color: '#4ECDC4' },
        { shape: 'square', color: '#4ECDC4' },
        { shape: 'star', color: '#4ECDC4' },
        { shape: 'triangle', color: '#4ECDC4' },
        null,
        { shape: 'star', color: '#4ECDC4' },
      ],
      blankIndex: 4,
      answer: { shape: 'square', color: '#4ECDC4' },
      options: [
        { shape: 'square', color: '#4ECDC4' },
        { shape: 'triangle', color: '#4ECDC4' },
        { shape: 'star', color: '#4ECDC4' },
        { shape: 'diamond', color: '#4ECDC4' },
      ],
      hint: 'Triangle, square, star — three shapes repeat in a loop!',
      rule: '3-shape cycle',
    },
    {
      type: 'shape',
      sequence: [
        { shape: 'circle', color: '#FF6FB5' },
        { shape: 'square', color: '#6BCB77' },
        { shape: 'triangle', color: '#4D96FF' },
        null,
        { shape: 'square', color: '#6BCB77' },
        { shape: 'triangle', color: '#4D96FF' },
      ],
      blankIndex: 3,
      answer: { shape: 'circle', color: '#FF6FB5' },
      options: [
        { shape: 'circle', color: '#FF6FB5' },
        { shape: 'square', color: '#6BCB77' },
        { shape: 'triangle', color: '#4D96FF' },
        { shape: 'circle', color: '#4D96FF' },
      ],
      hint: 'Pink circle, green square, blue triangle — the trio repeats!',
      rule: '3-item shape-colour cycle',
    },
    {
      type: 'shape',
      sequence: [
        { shape: 'diamond', color: '#A78BFA' },
        { shape: 'hexagon', color: '#FF8C42' },
        { shape: 'star', color: '#FFD93D' },
        { shape: 'diamond', color: '#A78BFA' },
        { shape: 'hexagon', color: '#FF8C42' },
        null,
      ],
      blankIndex: 5,
      answer: { shape: 'star', color: '#FFD93D' },
      options: [
        { shape: 'star', color: '#FFD93D' },
        { shape: 'diamond', color: '#A78BFA' },
        { shape: 'hexagon', color: '#FF8C42' },
        { shape: 'star', color: '#A78BFA' },
      ],
      hint: 'Purple diamond, orange hexagon, gold star — the group of three repeats!',
      rule: '3-item shape-colour cycle',
    },
    {
      type: 'shape',
      sequence: [
        { shape: 'star', color: '#6BCB77' },
        { shape: 'star', color: '#A78BFA' },
        { shape: 'star', color: '#FF8C42' },
        null,
        { shape: 'star', color: '#A78BFA' },
        { shape: 'star', color: '#FF8C42' },
      ],
      blankIndex: 3,
      answer: { shape: 'star', color: '#6BCB77' },
      options: [
        { shape: 'star', color: '#6BCB77' },
        { shape: 'star', color: '#A78BFA' },
        { shape: 'star', color: '#FF8C42' },
        { shape: 'star', color: '#4D96FF' },
      ],
      hint: 'Green, purple, orange — three star colours cycle around!',
      rule: '3-colour cycle',
    },
    {
      type: 'shape',
      sequence: [
        { shape: 'hexagon', color: '#4D96FF' },
        { shape: 'circle', color: '#4D96FF' },
        { shape: 'diamond', color: '#4D96FF' },
        { shape: 'hexagon', color: '#4D96FF' },
        null,
        { shape: 'diamond', color: '#4D96FF' },
      ],
      blankIndex: 4,
      answer: { shape: 'circle', color: '#4D96FF' },
      options: [
        { shape: 'circle', color: '#4D96FF' },
        { shape: 'hexagon', color: '#4D96FF' },
        { shape: 'diamond', color: '#4D96FF' },
        { shape: 'star', color: '#4D96FF' },
      ],
      hint: 'Hexagon, circle, diamond — three blue shapes loop around!',
      rule: '3-shape cycle',
    },
  ],

  // ──────────────────────────────────────────────────────────
  // LEVEL 5 — Two attributes changing independently
  //   e.g. shape cycles A-B-C while colour cycles X-Y
  // ──────────────────────────────────────────────────────────
  5: [
    {
      // Shape: circle, square, circle, square, circle, square
      // Colour: pink, blue, green, pink, blue, green
      type: 'shape',
      sequence: [
        { shape: 'circle', color: '#FF6FB5' },
        { shape: 'square', color: '#4D96FF' },
        { shape: 'circle', color: '#6BCB77' },
        { shape: 'square', color: '#FF6FB5' },
        { shape: 'circle', color: '#4D96FF' },
        null,
      ],
      blankIndex: 5,
      answer: { shape: 'square', color: '#6BCB77' },
      options: [
        { shape: 'square', color: '#6BCB77' },
        { shape: 'circle', color: '#6BCB77' },
        { shape: 'square', color: '#4D96FF' },
        { shape: 'circle', color: '#FF6FB5' },
      ],
      hint: 'The shapes flip between circle and square. The colours cycle: pink, blue, green. Track them separately!',
      rule: 'shape AB cycle + colour ABC cycle',
    },
    {
      // Shape: triangle, diamond, star, triangle, diamond, star
      // Colour: gold, teal, gold, teal, gold, teal
      type: 'shape',
      sequence: [
        { shape: 'triangle', color: '#FFD93D' },
        { shape: 'diamond', color: '#4ECDC4' },
        { shape: 'star', color: '#FFD93D' },
        { shape: 'triangle', color: '#4ECDC4' },
        null,
        { shape: 'star', color: '#4ECDC4' },
      ],
      blankIndex: 4,
      answer: { shape: 'diamond', color: '#FFD93D' },
      options: [
        { shape: 'diamond', color: '#FFD93D' },
        { shape: 'diamond', color: '#4ECDC4' },
        { shape: 'triangle', color: '#FFD93D' },
        { shape: 'star', color: '#FFD93D' },
      ],
      hint: 'Shapes go triangle, diamond, star. Colours flip gold and teal. Follow each pattern!',
      rule: 'shape ABC cycle + colour AB cycle',
    },
    {
      // Shape: hexagon, circle, hexagon, circle, hexagon, circle
      // Colour: purple, orange, blue, purple, orange, blue
      type: 'shape',
      sequence: [
        { shape: 'hexagon', color: '#A78BFA' },
        { shape: 'circle', color: '#FF8C42' },
        { shape: 'hexagon', color: '#4D96FF' },
        null,
        { shape: 'hexagon', color: '#A78BFA' },
        { shape: 'circle', color: '#FF8C42' },
      ],
      blankIndex: 3,
      answer: { shape: 'circle', color: '#A78BFA' },
      options: [
        { shape: 'circle', color: '#A78BFA' },
        { shape: 'hexagon', color: '#A78BFA' },
        { shape: 'circle', color: '#FF8C42' },
        { shape: 'circle', color: '#4D96FF' },
      ],
      hint: 'Shapes flip hexagon, circle. Colours cycle purple, orange, blue. Think about each one!',
      rule: 'shape AB cycle + colour ABC cycle',
    },
    {
      // Shape: square, triangle, diamond, square, triangle, diamond
      // Colour: pink, green, pink, green, pink, green
      type: 'shape',
      sequence: [
        { shape: 'square', color: '#FF6FB5' },
        { shape: 'triangle', color: '#6BCB77' },
        { shape: 'diamond', color: '#FF6FB5' },
        { shape: 'square', color: '#6BCB77' },
        { shape: 'triangle', color: '#FF6FB5' },
        null,
      ],
      blankIndex: 5,
      answer: { shape: 'diamond', color: '#6BCB77' },
      options: [
        { shape: 'diamond', color: '#6BCB77' },
        { shape: 'diamond', color: '#FF6FB5' },
        { shape: 'square', color: '#6BCB77' },
        { shape: 'triangle', color: '#6BCB77' },
      ],
      hint: 'Shapes repeat square, triangle, diamond. Colours flip pink and green. You got this!',
      rule: 'shape ABC cycle + colour AB cycle',
    },
    {
      // Shape: star, hexagon, star, hexagon, star, hexagon
      // Colour: blue, gold, teal, blue, gold, teal
      type: 'shape',
      sequence: [
        { shape: 'star', color: '#4D96FF' },
        { shape: 'hexagon', color: '#FFD93D' },
        { shape: 'star', color: '#4ECDC4' },
        { shape: 'hexagon', color: '#4D96FF' },
        null,
        { shape: 'hexagon', color: '#4ECDC4' },
      ],
      blankIndex: 4,
      answer: { shape: 'star', color: '#FFD93D' },
      options: [
        { shape: 'star', color: '#FFD93D' },
        { shape: 'hexagon', color: '#FFD93D' },
        { shape: 'star', color: '#4D96FF' },
        { shape: 'star', color: '#4ECDC4' },
      ],
      hint: 'Shapes swap star and hexagon. Colours go blue, gold, teal. Two patterns at once!',
      rule: 'shape AB cycle + colour ABC cycle',
    },
    {
      // Shape: circle, diamond, triangle, circle, diamond, triangle
      // Colour: orange, purple, orange, purple, orange, purple
      type: 'shape',
      sequence: [
        null,
        { shape: 'diamond', color: '#A78BFA' },
        { shape: 'triangle', color: '#FF8C42' },
        { shape: 'circle', color: '#A78BFA' },
        { shape: 'diamond', color: '#FF8C42' },
        { shape: 'triangle', color: '#A78BFA' },
      ],
      blankIndex: 0,
      answer: { shape: 'circle', color: '#FF8C42' },
      options: [
        { shape: 'circle', color: '#FF8C42' },
        { shape: 'circle', color: '#A78BFA' },
        { shape: 'diamond', color: '#FF8C42' },
        { shape: 'triangle', color: '#FF8C42' },
      ],
      hint: 'Shapes cycle circle, diamond, triangle. Colours flip orange and purple. What starts it all?',
      rule: 'shape ABC cycle + colour AB cycle',
    },
  ],
};
