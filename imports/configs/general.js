import { ITEMS } from './items.js';

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

let profs = {
  light_armor: 'Light armor',
  medium_armor: 'Medium armor',
  heavy_armor: 'Heavy armor',
  simple_weapon: 'Simple weapons',
  simple_melee_weapon: 'Simple melee weapons',
  martial_weapon: 'Martial weapons',
  martial_melee_weapon: 'Martial melee weapons',

  athletics: 'Athletics',
  acrobatics: 'Acrobatics',
  sleight_of_hand: 'Sleight of Hand',
  stealth: 'Stealth',
  arcana: 'Arcana',
  history: 'History',
  investigation: 'Investigation',
  nature: 'Nature',
  religion: 'Religion',
  animal_handling: 'Animal handling',
  insight: 'Insight',
  medicine: 'Medicine',
  perception: 'Perception',
  survival: 'Survival',
  deception: 'Deception',
  intimidation: 'Intimidation',
  performance: 'Performance',
  persuasion: 'Persuasion',

  str_saving_throw: 'Strength saving throws',
  con_saving_throw: 'Constitution saving throws',
  dex_saving_throw: 'Dexterity saving throws',
  inte_saving_throw: 'Intelligence saving throws',
  wis_saving_throw: 'Wisdom saving throws',
  cha_saving_throw: 'Charisma saving throws',

  str_check: 'Strength check',
  con_check: 'Constitution check',
  dex_check: 'Dexterity check',
  inte_check: 'Intelligence check',
  wis_check: 'Wisdom check',
  cha_check: 'Charisma check',
};
_.each(ITEMS, function(item, key) {
  if(!_.contains(['gear','gear_pack','container'], item.type)) {
    profs[key] = item.name;
  }
});

export const PROFICIENCIES = profs;

export const PROFICIENCY_BONUS = {
  1: 2, 2: 2, 3: 2, 4: 2,
  5: 3, 6: 3, 7: 3, 8: 3,
  9: 4, 10: 4, 11: 4, 12: 4,
  13: 5, 14: 5, 15: 5, 16: 5,
  17: 6, 18: 6, 19: 6, 20: 6,
}
