export const RACES = {
  mountain_dwarf: {
    label: 'Mountain Dwarf',
    size: 'medium',
    speed: 5,
    con_bonus: 2,
    str_bonus: 2,
    vision: 'darkvision', // Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.
    proficiencies: ['light_armor', 'medium_armor', 'battleaxe', 'handaxe', 'light_hammer', 'warhammer'],
    resistances: ['poison'],
    saving_throw_advantages: ['poison'],
 //   extra_feature: 'dwarven_armor_training', // You have profciency with light and medium armor.
// Dwarven Resilience. You have advantage on saving throws against poison, and you have resistance against poison damage (explained in chapter 9).
//Dwarven Combat Training. You have profciency with the battleaxe, handaxe, light hammer, and warhammer.
  },
  hill_dwarf: {
    label: 'Hill Dwarf',
    size: 'medium',
    speed: 5,
    con_bonus: 2,
    wis_bonus: 1,
    vision: 'darkvision', // Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.
    hp_max_bonus: 1,
    hp_gain_bonus: 1,
//    extra_feature: 'dwarven_toughness', // Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.
    resistances: ['poison'],
    saving_throw_advantages: ['poison'],
  },
  high_elf: {
    label: 'High Elf',
    size: 'medium',
    speed: 6,
    dex_bonus: 2,
    vision: 'darkvision',
    proficiencies: ['perception', 'longsword', 'shortsword', 'shortbow', 'longbow'],
    saving_throw_advantages: ['charmed'],
    sleep: 'trance',
    inte_bonus: 1,
    extra_wizard_cantrips: 1,
  },
  wood_elf: {
    label: 'Wood Elf',
    size: 'medium',
    speed: 7,
    dex_bonus: 2,
    vision: 'darkvision',
    proficiencies: ['perception', 'longsword', 'shortsword', 'shortbow', 'longbow'],
    saving_throw_advantages: ['charmed'],
    sleep: 'trance',
    wis_bonus: 1,
  },
  human: {
    label: 'Human',
    size: 'medium',
    speed: 6,
    str_bonus: 1,
    con_bonus: 1,
    dex_bonus: 1,
    inte_bonus: 1,
    wis_bonus: 1,
    cha_bonus: 1,
  },
  lightfoot_halfling: {
    label: 'Lightfoot Halfling',
    size: 'small',
    speed: 5,
    lucky: true, // When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.
    dex_bonus: 2,
    saving_throw_advantages: ['frightened'],
    nimbleness: true, //You can move through the space of any creature that is of a size larger than yours.
    cha_bonus: 1,
    //Naturally Stealthy. You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.
  },
  stout_halfling: {
    label: 'Stout Halfling',
    size: 'small',
    speed: 5,
    lucky: true, // When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.
    dex_bonus: 2,
    saving_throw_advantages: ['frightened', 'poison'],
    resistances: ['poison'],
    nimbleness: true, //You can move through the space of any creature that is of a size larger than yours.
    con_bonus: 1,
  },
};
