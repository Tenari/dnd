import { ITEMS } from './items.js';

export function roll(diceStr) {
  let tokens = diceStr.split('d');
  let total = 0;
  for (let i = 0; i < parseInt(tokens[0]); i+= 1) {
    total += (parseInt(Math.random()*parseInt(tokens[1]))+1)
  }
  return total;
}

export function advantageRoll(advantageKey) {
  let secondRoll = null;
  let originalRoll = roll('1d20');
  let finalRoll = originalRoll;
  if (advantageKey != 'normal') {
    secondRoll = roll('1d20');
    if (advantageKey == 'advantage') {
      finalRoll = _.max([originalRoll, secondRoll]);
    } else {
      finalRoll = _.min([originalRoll, secondRoll]);
    }
  }
  return {finalRoll, originalRoll, secondRoll};
}

export function calculateAC(character, items) {
  // AC is calculated as 
  // worn_armor_base_ac + shield_base_ac + dex mod (if applicable)
  // OR
  // 10 + Dex mod if not wearing armor or a shield
  if (_.isString(items[0])) throw "incorrect method signature, items should be array of objects";

  let armor = _.find(items, function(item) {return item.equipment_category == "Armor" && item.armor_category != 'Shield';});
  let shield = _.find(items, function(item) {return item.equipment_category == "Armor" && item.armor_category == 'Shield';});
  if (armor || shield) {
    let dexBonus = abilityModifier(character.dex);
    if (armor) {
      if (armor.armor_class.dex_bonus == false) {
        dexBonus = 0;
      } else if (armor.armor_class.max_bonus) {
        dexBonus = _.min([armor.armor_class.max_bonus, dexBonus]);
      }
    }
    return (armor && armor.armor_class.base || 0) + (shield && shield.armor_class.base || 0) + dexBonus;
  } else {
    return 10 + abilityModifier(character.dex);
  }
}

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
  dex: 'Dexterity',
  con: 'Consitution',
  inte: 'Intelligence',
  wis: 'Wisdom',
  cha: 'Charisma',
}

export function abilityModifier(score) {
  return parseInt((score - 10) / 2);
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

export const PROFICIENCY_BONUS = {
  1: 2, 2: 2, 3: 2, 4: 2,
  5: 3, 6: 3, 7: 3, 8: 3,
  9: 4, 10: 4, 11: 4, 12: 4,
  13: 5, 14: 5, 15: 5, 16: 5,
  17: 6, 18: 6, 19: 6, 20: 6,
}

export const CR_TO_XP = {
  0: 10, 0.125: 25, 0.25: 50, 0.5: 100, 1: 200,
  2: 450, 3: 700, 4: 1100, 5: 1800, 6: 2300, 7: 2900,
  8: 3900, 9: 5000, 10: 5900, 11: 7200, 12: 8400,
  13: 10000, 14: 11500, 15: 13000, 16: 15000, 17: 18000,
  18: 20000, 19: 22000, 20: 25000, 21: 33000, 22: 41000,
  23: 50000, 24: 62000, 30: 155000
}
