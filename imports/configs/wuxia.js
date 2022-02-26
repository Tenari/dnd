export const ABILITIES = {
  str: {
    label: "Strength",
    key: 'str',
  },
  quick: {
    label: "Quickness",
    key: 'quick',
  },
  inte: {
    label: "Intelligence",
    key: 'inte',
  },
  cha: {
    label: "Charisma",
    key: 'cha',
  },
  tran: {
    label: "Tranquility",
    key: 'tran',
  },
};

export const ABILITY_SCORE_COST = {
  1: 1,
  2: 1,
  3: 2,
  4: 3,
};

export const FAMILY_BACKGROUND = {
  clanSize: {
    small: {
      key: 'small',
      label: "Small",
      description: "Your clan has almost died out with only a few remaining families bearing its name.",
      bonus: 'inte',
    },
    medium: {
      key: 'medium',
      label: "Medium",
      description: "Your clan is somewhat spread out, with a few relatives in all the nearby villages.",
      bonus: 'tran',
    },
    large: {
      key: 'large',
      label: "Large",
      description: "Your clan is well known. Most people in your country probably know someone from your clan.",
      bonus: 'cha',
    }
  },
  familyStatus: {
    peasant: {
      key: 'peasant',
      label: "Peasant",
      description: "Your family is very poor. You've worked hard every day out of necessity.",
      bonus: 'str',
    },
    artisan: {
      key: 'artisan',
      label: "Artisan",
      description: "You come from a family of artisans. You have some skill with your hands, and a keen eye.",
      bonus: 'quick',
    },
    noble: {
      key: 'noble',
      label: "Noble",
      description: "You come from money and prestige. You've had the finest tutors in the land as you studied the classics.",
      bonus: 'inte',
    }
  },
  hometown: {
    farming: {
      key: 'farming',
      label: "Farming Village",
      description: "You hail from a small farming community and spent a lot of time outdoors growing up.",
      bonus: 'tran',
    },
    fishing: {
      key: 'fishing',
      label: "Fishing Village",
      description: "You hail from a small fishing community and spent a lot of time sailing growing up.",
      bonus: 'quick',
    },
    mining: {
      key: 'mining',
      label: "Mining Town",
      description: "You hail from a town of medium size, with a industrial base centered around the mining deposits. You've probably hauled some ore at some point.",
      bonus: 'str',
    },
    capital: {
      key: 'capital',
      label: "Capital City",
      description: "You hail from the nation's biggest city--the capital. You're used to crowds and dealing with people.",
      bonus: 'cha',
    },
  },
  firstStep: {
    family: {
      key: 'family',
      label: "Family Teaching",
      description: "You learned to sense and manipulate chi by secret techniques passed down through your family line.",
      bonus: 'cha',
    },
    meditate: {
      key: 'meditate',
      label: "Personal Meditation",
      description: "You gained the power to sense and manipulate chi through your dedication to personal meditation.",
      bonus: 'tran',
    },
    martial: {
      key: 'martial',
      label: "Martial Arts Practice",
      description: "Your dedication to martial arts, sparring, and combat in general resulted in an epiphany that allowed you to sense and manipulate chi.",
      bonus: 'str',
    },
    pill: {
      key: 'pill',
      label: "Alchemical Pill",
      description: "Whether by good luck or by being rich, you were able to aquire an alchemical pill that awakened your spiritual senses and gave the ability to manipulate chi.",
      bonus: 'inte',
    },
  },
};

export const AFFINITIES = {
  pure: {
    key: 'pure',
    label: 'Pure',
    bases: ['pure'],
  },

  wood: {
    key: 'wood',
    label: 'Wood (Life)',
    bases: ['wood'],
  },
  fire: {
    key: 'fire',
    label: 'Fire',
    bases: ['fire'],
  },
  water: {
    key: 'water',
    label: 'Water',
    bases: ['water'],
  },
  metal: {
    key: 'metal',
    label: 'Metal',
    bases: ['metal'],
  },
  earth: {
    key: 'earth',
    label: 'Earth',
    bases: ['earth'],
  },

  // wood + X
  air: {
    key: 'air',
    label: 'Air (wood + fire)',
    bases: ['wood','fire'],
  },
  blood: {
    key: 'blood',
    label: 'Blood (wood + water)',
    bases: ['wood','water'],
  },
  force: {
    key: 'force',
    label: 'Force (wood + metal)',
    bases: ['wood','metal'],
  },
  gravity: {
    key: 'gravity',
    label: 'Gravity (wood + earth)',
    bases: ['wood','earth'],
  },

  // fire + X
  lightning: {
    key: 'lightning',
    label: 'Lightning (fire + water)',
    bases: ['fire','water'],
  },
  light: {
    key: 'light',
    label: 'Light (fire + metal)',
    bases: ['fire','metal'],
  },
  lava: {
    key: 'lava',
    label: 'Lava (fire + earth)',
    bases: ['fire','earth'],
  },

  // water + X
  ice: {
    key: 'ice',
    label: 'Ice (water + metal)',
    bases: ['water','metal'],
  },
  decay: {
    key: 'decay',
    label: 'Decay (water + earth)',
    bases: ['water','earth'],
  },

  // metal + X
  dark: {
    key: 'dark',
    label: 'Dark (metal + earth)',
    bases: ['metal','earth'],
  },
};

export const SECT_MASTERS = {
  unarmed: {
    key: "unarmed",
    label: "Unarmed Martial Master",
    name: "Master Shi",
    path: 'flaming_fist',
  },
  dagger: {
    key: "dagger",
    label: "Dagger Martial Master",
    name: "Master Shin",
    path: 'flowing_blade',
  },
  sword: {
    key: "sword",
    label: "Sword Martial Master",
    name: "Master Long",
    path: 'endless_sword',
  },
  blunt: {
    key: "blunt",
    label: "Club/Mace/Hammer Martial Master",
    name: "Master Xin",
    path: 'feet_of_five_flames',
  },
  pole: {
    key: "pole",
    label: "Polearm Martial Master",
    name: "Master Li",
    path: 'trodden_earth',
  },
  thrown: {
    key: "thrown",
    label: "Throwing Martial Master",
    name: "Master Dai",
    path: 'gentle_breeze',
  },
  bow: {
    key: "bow",
    label: "Bow Martial Master",
    name: "Master Zin",
    path: 'dripping_death',
  },
  alchemy: {
    key: "alchemy",
    label: "Alchemical Master",
    name: "Master Zhao",
    path: 'overflowing_growth',
  },
  smithing: {
    key: "smithing",
    label: "Smithing Master",
    name: "Master Po",
    path: 'fiery_forge',
  },
  enchanting: {
    key: "enchanting",
    label: "Enchanting Master",
    name: "Master Cao",
    path: 'heart_of_pure_stars',
  },
};

export const PATHS = {
 // pure
 heart_of_pure_stars: {
   key: 'heart_of_pure_stars',
   label: "The Heart of Pure Stars",
   chi: 'pure',
   high: 'Immortal',
   weapon: 'bow',
   rarity: 'Uncommon',
   focus: 'enchanting',
   techniques: ['adaptive_weapon_1'],
 },
 // wood
 overflowing_growth: {
   key: 'overflowing_growth',
   label: "The Path of Overflowing Growth",
   chi: 'wood',
   high: 'Heavenly Ruler',
   weapon: 'pole',
   rarity: 'Uncommon',
   focus: 'alchemy',
   techniques: ['duplicate_plant'],
 },
 // fire
 flaming_fist: {
   key: 'flaming_fist',
   label: "The Path of the Flaming Fist",
   chi: 'fire',
   high: 'Diamond',
   weapon: 'unarmed',
   rarity: 'Common',
   focus: 'combat',
   techniques: ['double_strike', 'basic_chi_strike','fire_punch'],
 },
 fiery_forge: {
   key: 'fiery_forge',
   label: "The Fiery Forge Path",
   chi: 'fire',
   high: 'Heavenly Ruler',
   weapon: 'blunt',
   rarity: 'Uncommon',
   focus: 'smithing',
   techniques: ['basic_swing'],
 },
 feet_of_five_flames: {
   key: 'feet_of_five_flames',
   label: "The Feet of Five Flames",
   chi: 'fire',
   high: 'Immortal',
   weapon: 'blunt',
   rarity: 'Rare',
   focus: 'combat',
   techniques: ["basic_swing"],
 },
 // water
 flowing_blade: {
   key: 'flowing_blade',
   label: "The Path of the Flowing Blade",
   chi: 'water',
   high: 'Heavenly Warrior',
   weapon: 'dagger',
   rarity: 'Common',
   focus: 'combat',
   techniques: ["basic_stab", "basic_chi_stab", "stab_like_water"],
 },
 // metal
 endless_sword: {
   key: 'endless_sword',
   label: "The Path of the Endless Sword",
   chi: 'metal',
   high: 'Immortal',
   weapon: 'sword',
   rarity: 'Rare',
   focus: 'combat',
   techniques: ['basic_slash','endless_sword'],
 },
 // earth
 trodden_earth: {
   key: 'trodden_earth',
   label: "The Trodden Earth Path",
   chi: 'earth',
   high: 'Immortal',
   weapon: 'pole',
   rarity: 'Common',
   focus: 'combat',
   techniques: ["basic_block"],
 },
 // air
 gentle_breeze: {
   key: 'gentle_breeze',
   label: "The Gentle Breeze Path",
   chi: 'air',
   high: 'Immortal',
   weapon: 'thrown',
   rarity: 'Uncommon',
   focus: 'combat',
   techniques: ["basic_throw"],
 },
 // blood
 dripping_death: {
   key: 'dripping_death',
   label: "The Path of Dripping Death",
   chi: 'blood',
   high: 'Heavenly Ruler',
   weapon: 'bow',
   rarity: 'Rare',
   focus: 'combat',
   techniques: ["basic_shot"],
 },
 // force
 unseen_arrow: {
   key: 'unseen_arrow',
   label: "The Unseen Arrow Path",
   chi: 'force',
   high: 'Heavenly Warrior',
   weapon: 'bow',
   rarity: 'Uncommon',
   focus: 'combat',
   techniques: ["basic_shot"],
 },
};

export const RARITIES = ["Common","Uncommon","Rare","Extinct"];

export const TECHNIQUE_MASTERIES = {
  incompetent: {key: 'incompetent', label: 'Incompetent', uses: 9},
  mediocre: {key: 'mediocre', label: 'Mediocre', uses: 99},
  competent: {key: 'competent', label: 'Competent', uses: 999},
  innovative: {key: 'innovative', label: 'Innovative', uses: 9999},
  master: {key: 'master', label: 'Master', uses: 9999999999},
};

export const WEAPON_TYPES = {
  dagger: {
    key: 'dagger',
    label: 'Dagger',
    range: { // this is equivalent to "melee"
      accurate: 1 // means 1 square
      // `penalty: X` would be a further range at which you could still hit but take a -2 to hit chance
    },
    dmg: 'd6',
    cost: 'low',
  },
  sword: {
    key: 'sword',
    label: 'Sword',
    range: {
      accurate: 1,
    },
    dmg: 'd8',
    cost: 'high',
  },
  blunt: {
    key: 'blunt',
    label: 'Blunt (mace/club)',
    range: {
      accurate: 1,
    },
    dmg: 'd6',
    cost: 'med',
  },
  pole: {
    key: 'pole',
    label: 'Polearm',
    range: {
      accurate: 1,
      penalty:  2,
    },
    dmg: 'd6',
    cost: 'low',
  },
  thrown: {
    key: 'thrown',
    label: 'Thrown',
    range: {
      accurate: 4,
      penalty:  8,
    },
    dmg: 'd4',
    cost: 'med',
  },
  bow: {
    key: 'bow',
    label: 'Bow',
    range: {
      accurate: 8,
      penalty:  16,
    },
    dmg: 'd6',
    cost: 'high',
  },
};
