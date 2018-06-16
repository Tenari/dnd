export function attributeKeyToLabel(key) {
  let shortKey = key.split('_bonus')[0];
  if (_.keys(ABILITIES).indexOf(shortKey) != -1) {
    return ABILITIES[shortKey];
  } else if (shortKey == 'any') {
    return 'Any attribute of your choice';
  } else if (shortKey == 'hp_max') {
    return "Maximum HP";
  } else if (shortKey == 'hp_gain') {
    return "Maximum HP Gain each level";
  }
}


export const ABILITIES = {
  str: 'Strength',
  con: 'Consitution',
  dex: 'Dexterity',
  inte: 'Intelligence',
  wis: 'Wisdom',
  cha: 'Charisma',
}

export const ALIGNMENTS = [
  {value: 'lg', label: 'Lawful Good'},
  {value: 'ng', label: 'Neutral Good'},
  {value: 'cg', label: 'Chaotic Good'},
  {value: 'ln', label: 'Lawful Neutral'},
  {value: 'n', label: 'Neutral'},
  {value: 'cn', label: 'Chaotic Neutral'},
  {value: 'le', label: 'Lawful Evil'},
  {value: 'ne', label: 'Neutral Evil'},
  {value: 'ce', label: 'Chaotic Evil'},
];

export const LANGUAGES = {
  common: 'Common',
  dwarvish: 'Dwarvish',
  elvish: 'Elvish',
  giant: 'Giant',
  gnomish: 'Gnomish',
  goblin: 'Goblin',
  halfling: 'Halfling',
  orc: 'Orc',
  abyssal: 'Abyssal',
  celestial: 'Celestial',
  draconic: 'Draconic',
  deep_speech: 'Deep Speech',
  infernal: 'Infernal',
  primordial: 'Primordial',
  sylvan: 'Sylvan',
  undercommon: 'Undercommon',
}

export const ABILITY_SCORE_COST = {
  9: 1,
  10: 1,
  11: 1,
  12: 1,
  13: 1,
  14: 2,
  15: 2,
}

export const PROFICIENCIES = {
  light_armor: 'Light armor',
  medium_armor: 'Medium armor',
  heavy_armor: 'Heavy armor',
  simple_weapon: 'Simple weapons',
  martial_weapon: 'Martial weapons',
  longsword: 'Longsword',
  animal_handling: 'Animal handling',
  athletics: 'Athletics',
  intimidation: 'Intimidation',
  str_saving_throw: 'Strength saving throws',
  con_saving_throw: 'Constitution saving throws',
  dex_saving_throw: 'Dexterity saving throws',
  inte_saving_throw: 'Intelligence saving throws',
  wis_saving_throw: 'Wisdom saving throws',
  cha_saving_throw: 'Charisma saving throws',
}

export const FEATURES = {
  rage: {
    label: 'Rage',
    type: 'temporary_state',
    action: 'bonus',
    endable: true,
    conditions: ['no_heavy_armor'],
    advantage: ['str_saving_throw', 'str_check'],
    uses_per_day: {
      1: 2, 2: 2,
      3: 3, 4: 3, 5: 3,
      6: 4, 7: 4, 8: 4, 9: 4, 10: 4, 11: 4,
      12: 5, 13: 5, 14: 5, 15: 5, 16: 5,
      17: 6, 18: 6, 19: 6, 20: 10000000,
    },
    damage_bonus: {
      1: 2, 2: 2, 3: 2, 4: 2, 5: 2, 6: 2, 7: 2, 8: 2,
      9: 3, 10: 3, 11: 3, 12: 3, 13: 3, 14: 3, 15: 3,
      16: 4, 17: 4, 18: 4, 19: 4, 20: 4
    },
    damage_bonus_conditions: ['melee', 'str'],
    resistances: ['bludgeoning','piercing','slashing'],
    drawbacks: ['no_spell_cast'],
    duration: 10,
  },
  unarmored_defense: {
    label: 'Unarmored Defense',
    type: 'passive',
    conditions: ['no_armor'],
    effects: ['AC_10_dex_con'],
    shield_ok: true,
  },
  divine_domain: {
    label: 'Divine Domain',
    type: 'features',
    choices: ['knowledge', 'life', 'light', 'nature', 'tempest', 'trickery', 'war'],
  },
  disciple_of_life: {
    label: 'Disciple of Life',
    type: 'passive',
    conditions: ['healing_spell', 'no_cantrip'],
    effects: ['hp_bonus'],
    hp_bonus: {
      base: 2,
      mod: 'spell_level',
    }
  },
}
