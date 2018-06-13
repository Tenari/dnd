export function attributeKeyToLabel(key) {
  let shortKey = key.split('_')[0];
  if (_.keys(ABILITIES).indexOf(shortKey) != -1) {
    return ABILITIES[shortKey];
  } else if (shortKey == 'any') {
    return 'Any attribute of your choice';
  } else if (_.keys(DEFENSES).indexOf(shortKey) != -1) {
    return DEFENSES[shortKey];
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

export const DEFENSES = {
  fortitude: 'Fortitude',
  reflex: 'Reflex',
  will: 'Will',
}

export const ABILITY_SCORE_COST = {
  9: 1,
  10: 1,
  11: 1,
  12: 1,
  13: 1,
  14: 2,
  15: 2,
  16: 2,
  17: 3,
  18: 4,
}
