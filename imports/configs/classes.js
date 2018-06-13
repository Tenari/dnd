export const CLASSES = {
  cleric: {
    label: 'Cleric',
    will_bonus: 2,
    armor_proficiencies: [
      'cloth',
      'leather',
      'hide',
      'chainmail',
    ],
    weapon_proficiencies: [
      'simple_melee',
      'simple_ranged',
    ],
    hp: {
      base: 12,
      base_mod: 'con_score',
      gain_per_level: 5,
      heals_per_day: 7,
      heals_per_day_bonus: 'con',
    },
    default_powers: [
      'turn_undead',
      'healing_word',
    ],
  },
  fighter: {
    label: 'Fighter',
    fortitude_bonus: 2,
    armor_proficiencies: [
      'cloth',
      'leather',
      'hide',
      'chainmail',
      'scale',
      'light_shield',
      'heavy_shield',
    ],
    weapon_proficiencies: [
      'simple_melee',
      'military_melee',
      'simple_ranged',
      'military_ranged',
    ],
    hp: {
      base: 15,
      base_mod: 'con_score',
      gain_per_level: 6,
      heals_per_day: 9,
      heals_per_day_bonus: 'con',
    },
    default_powers: [
      'combat_challenge',
      'combat_superiority',
    ]
  },
  rogue: {
    label: "Rogue",
    reflex_bonus: 2,
    armor_proficiencies: [
      'cloth', 'leather'
    ],
    weapon_proficiencies: [
      'dagger',
      'hand_crossbow',
      'shuriken',
      'sling',
      'short_sword'
    ],
    hp: {
      base: 12,
      base_mod: 'con_score',
      gain_per_level: 5,
      heals_per_day: 6,
      heals_per_day_bonus: 'con',
    },
    default_powers: [
      'sneak_attack',
      'rogue_weapon_talent',
    ]
  },
  wizard: {
    label: "Wizard",
    will_bonus: 2,
    armor_proficiencies: [
      'cloth',
    ],
    weapon_proficiencies: [
      'dagger',
      'quarterstaff',
    ],
    implement_proficiencies: [
      'orb', 'staff', 'wand'
    ],
    hp: {
      base: 10,
      base_mod: 'con_score',
      gain_per_level: 4,
      heals_per_day: 6,
      heals_per_day_bonus: 'con',
    },
    default_powers: [
      'mage_hand',
      'light',
    ]
  },
}
