/**
 * Sequence Stories Puzzle Data
 * Captain Advaith's Pattern Lab
 *
 * Each puzzle has steps in the CORRECT order.
 * The app will shuffle them for the player to reorder.
 *
 * Level 1: 4 puzzles, 3 steps each (simple daily routines & nature)
 * Level 2: 4 puzzles, 4 steps each (daily routines)
 * Level 3: 4 puzzles, 4 steps each (space stories)
 * Level 4: 4 puzzles, 5 steps each (cause-effect sequences)
 * Level 5: 4 puzzles, 5 steps each (complex sequences)
 * Total: 20 puzzles
 */

export const STORY_PUZZLES = {
  // ─────────────────────────────────────────────
  // LEVEL 1 — 3-step sequences (very easy)
  // ─────────────────────────────────────────────
  1: [
    {
      type: 'story',
      title: 'Good Morning!',
      instruction: 'Put the steps in the right order!',
      steps: [
        { emoji: '😴', label: 'Wake up from bed' },
        { emoji: '🪥', label: 'Brush your teeth' },
        { emoji: '🥣', label: 'Eat breakfast' },
      ],
      hint: 'Think about what you do first every morning',
      category: 'daily life',
    },
    {
      type: 'story',
      title: 'Baby Chick is Born',
      instruction: 'Put the steps in the right order!',
      steps: [
        { emoji: '🥚', label: 'Hen lays an egg' },
        { emoji: '🐣', label: 'Chick hatches out' },
        { emoji: '🐥', label: 'Chick grows up' },
      ],
      hint: 'What comes first — the egg or the chick?',
      category: 'nature',
    },
    {
      type: 'story',
      title: 'Time for Bath',
      instruction: 'Put the steps in the right order!',
      steps: [
        { emoji: '🚿', label: 'Turn on the water' },
        { emoji: '🧼', label: 'Use soap to scrub' },
        { emoji: '🧹', label: 'Dry with a towel' },
      ],
      hint: 'You need water before you can use soap!',
      category: 'daily life',
    },
    {
      type: 'story',
      title: 'Butterfly Life',
      instruction: 'Put the steps in the right order!',
      steps: [
        { emoji: '🐛', label: 'A caterpillar crawls' },
        { emoji: '🫘', label: 'It makes a cocoon' },
        { emoji: '🦋', label: 'A butterfly flies out!' },
      ],
      hint: 'A caterpillar changes into something beautiful',
      category: 'nature',
    },
  ],

  // ─────────────────────────────────────────────
  // LEVEL 2 — 4-step daily routines
  // ─────────────────────────────────────────────
  2: [
    {
      type: 'story',
      title: 'Getting Ready for School',
      instruction: 'Put the steps in the right order!',
      steps: [
        { emoji: '⏰', label: 'Alarm rings, wake up!' },
        { emoji: '🪥', label: 'Brush teeth and wash face' },
        { emoji: '👕', label: 'Wear your uniform' },
        { emoji: '🎒', label: 'Pick up bag and go to school' },
      ],
      hint: 'What happens right after you wake up?',
      category: 'daily life',
    },
    {
      type: 'story',
      title: 'Making Chai for Amma',
      instruction: 'Put the steps in the right order!',
      steps: [
        { emoji: '💧', label: 'Boil water in a pot' },
        { emoji: '🍵', label: 'Add tea leaves and sugar' },
        { emoji: '🥛', label: 'Pour in milk' },
        { emoji: '☕', label: 'Pour chai into a cup' },
      ],
      hint: 'You need hot water first before adding anything',
      category: 'cooking',
    },
    {
      type: 'story',
      title: 'Going to the Park',
      instruction: 'Put the steps in the right order!',
      steps: [
        { emoji: '👟', label: 'Put on your shoes' },
        { emoji: '🚶', label: 'Walk to the park' },
        { emoji: '🤸', label: 'Play on the swings' },
        { emoji: '🏠', label: 'Come back home' },
      ],
      hint: 'You need shoes before you can walk outside!',
      category: 'daily life',
    },
    {
      type: 'story',
      title: 'Feeding a Puppy',
      instruction: 'Put the steps in the right order!',
      steps: [
        { emoji: '🍲', label: 'Get the food bowl' },
        { emoji: '🥘', label: 'Put food in the bowl' },
        { emoji: '🐶', label: 'Puppy eats the food' },
        { emoji: '😊', label: 'Puppy wags its tail happily' },
      ],
      hint: 'You need a bowl before you can fill it',
      category: 'animals',
    },
  ],

  // ─────────────────────────────────────────────
  // LEVEL 3 — 4-step space stories
  // ─────────────────────────────────────────────
  3: [
    {
      type: 'story',
      title: 'Mission to the Moon',
      instruction: 'Put the steps in the right order!',
      steps: [
        { emoji: '🔧', label: 'Build a rocket ship' },
        { emoji: '🚀', label: 'Launch into the sky' },
        { emoji: '🌙', label: 'Land on the Moon' },
        { emoji: '🏴', label: 'Plant a flag on the Moon' },
      ],
      hint: 'You need to build a rocket before you can fly it!',
      category: 'space',
    },
    {
      type: 'story',
      title: 'Astronaut Gets Ready',
      instruction: 'Put the steps in the right order!',
      steps: [
        { emoji: '🧑‍🚀', label: 'Put on the space suit' },
        { emoji: '🪖', label: 'Wear the helmet' },
        { emoji: '🚀', label: 'Climb into the rocket' },
        { emoji: '🌟', label: 'Blast off into space!' },
      ],
      hint: 'An astronaut needs a suit before going to space',
      category: 'space',
    },
    {
      type: 'story',
      title: 'Exploring Mars',
      instruction: 'Put the steps in the right order!',
      steps: [
        { emoji: '🚀', label: 'Fly the spaceship to Mars' },
        { emoji: '🪂', label: 'Parachute down to the ground' },
        { emoji: '🤖', label: 'Send out a robot rover' },
        { emoji: '📸', label: 'Take photos of red rocks' },
      ],
      hint: 'You need to reach Mars before you can explore it',
      category: 'space',
    },
    {
      type: 'story',
      title: 'Satellite in Space',
      instruction: 'Put the steps in the right order!',
      steps: [
        { emoji: '🏗️', label: 'Scientists build a satellite' },
        { emoji: '🚀', label: 'Rocket carries it to space' },
        { emoji: '🛰️', label: 'Satellite orbits the Earth' },
        { emoji: '📡', label: 'It sends signals back home' },
      ],
      hint: 'First you build it, then you send it up!',
      category: 'space',
    },
  ],

  // ─────────────────────────────────────────────
  // LEVEL 4 — 5-step cause-effect sequences
  // ─────────────────────────────────────────────
  4: [
    {
      type: 'story',
      title: 'Growing a Mango Tree',
      instruction: 'Put the steps in the right order!',
      steps: [
        { emoji: '🌱', label: 'Plant a mango seed' },
        { emoji: '💧', label: 'Water it every day' },
        { emoji: '🌿', label: 'A small plant grows' },
        { emoji: '🌳', label: 'It becomes a big tree' },
        { emoji: '🥭', label: 'Yummy mangoes grow on it!' },
      ],
      hint: 'Seeds need water to grow into plants',
      category: 'nature',
    },
    {
      type: 'story',
      title: 'Rain and the Rainbow',
      instruction: 'Put the steps in the right order!',
      steps: [
        { emoji: '☁️', label: 'Dark clouds fill the sky' },
        { emoji: '🌧️', label: 'Rain starts falling down' },
        { emoji: '💧', label: 'Puddles form on the ground' },
        { emoji: '🌤️', label: 'The sun comes back out' },
        { emoji: '🌈', label: 'A rainbow appears!' },
      ],
      hint: 'Clouds come before rain, and sun comes before the rainbow',
      category: 'nature',
    },
    {
      type: 'story',
      title: 'Making Roti',
      instruction: 'Put the steps in the right order!',
      steps: [
        { emoji: '🫗', label: 'Mix flour and water into dough' },
        { emoji: '🤲', label: 'Roll the dough into a ball' },
        { emoji: '🫓', label: 'Flatten it with a rolling pin' },
        { emoji: '🍳', label: 'Cook it on the hot tawa' },
        { emoji: '🧈', label: 'Add butter and eat!' },
      ],
      hint: 'You make dough first, then shape it, then cook it',
      category: 'cooking',
    },
    {
      type: 'story',
      title: 'Frog Life Cycle',
      instruction: 'Put the steps in the right order!',
      steps: [
        { emoji: '🟠', label: 'Frog lays tiny eggs in water' },
        { emoji: '🐟', label: 'Tadpoles hatch from the eggs' },
        { emoji: '🦎', label: 'Tadpoles grow little legs' },
        { emoji: '🐸', label: 'They become baby frogs' },
        { emoji: '💚', label: 'Frogs hop onto land!' },
      ],
      hint: 'Frogs start as eggs in the water',
      category: 'nature',
    },
  ],

  // ─────────────────────────────────────────────
  // LEVEL 5 — 5-step complex sequences
  // ─────────────────────────────────────────────
  5: [
    {
      type: 'story',
      title: 'Chandrayaan Moon Mission',
      instruction: 'Put the steps in the right order!',
      steps: [
        { emoji: '👩‍🔬', label: 'Scientists at ISRO plan the mission' },
        { emoji: '🔧', label: 'Engineers build the spacecraft' },
        { emoji: '🚀', label: 'Rocket launches from Sriharikota' },
        { emoji: '🌙', label: 'Spacecraft lands on the Moon' },
        { emoji: '🤖', label: 'Rover explores the Moon surface' },
      ],
      hint: 'ISRO scientists plan first, then engineers build',
      category: 'space',
    },
    {
      type: 'story',
      title: 'Volcano Eruption',
      instruction: 'Put the steps in the right order!',
      steps: [
        { emoji: '🌋', label: 'Hot lava builds up inside' },
        { emoji: '💨', label: 'Pressure pushes the lava up' },
        { emoji: '🔥', label: 'Volcano erupts with fire and ash' },
        { emoji: '🪨', label: 'Lava flows down and cools into rock' },
        { emoji: '🌱', label: 'Plants slowly grow on new land' },
      ],
      hint: 'Lava builds up pressure before it erupts',
      category: 'science',
    },
    {
      type: 'story',
      title: 'Building a Treehouse',
      instruction: 'Put the steps in the right order!',
      steps: [
        { emoji: '🌳', label: 'Find a big strong tree' },
        { emoji: '📐', label: 'Draw a plan for the treehouse' },
        { emoji: '🪵', label: 'Collect wood and nails' },
        { emoji: '🔨', label: 'Hammer and build the house' },
        { emoji: '🎉', label: 'Climb up and play inside!' },
      ],
      hint: 'You need a plan before you start building',
      category: 'adventure',
    },
    {
      type: 'story',
      title: 'Water Cycle Adventure',
      instruction: 'Put the steps in the right order!',
      steps: [
        { emoji: '🌊', label: 'Sun heats the ocean water' },
        { emoji: '💨', label: 'Water turns into vapour and rises' },
        { emoji: '☁️', label: 'Vapour forms clouds in the sky' },
        { emoji: '🌧️', label: 'Clouds get heavy and rain falls' },
        { emoji: '🏞️', label: 'Water flows into rivers and oceans' },
      ],
      hint: 'The sun heats water and it goes up into the sky',
      category: 'science',
    },
  ],
};
