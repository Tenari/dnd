export const SPELLS = {
  acid_splash: {
    label: 'Acid Splash',
    spell_level: 0,
    magic_type: 'conjuration',
    cast_time: 1,
    cast_time_unit: 'action',
    range: 12,
    components: ['v','s'],
    duration: 0,
    description: 'You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage. This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).',
    saving_throw_type: 'dex',
    target: {
      max: 2,
      adjacent: true,
    },
    damage: {
      type: 'acid',
      lvl: {1: '1d6', 5: '2d6', 11: '3d6', 17: '4d6'},
    }
  },
  cure_wounds: {
    label: 'Cure Wounds',
    spell_level: 1,
    magic_type: 'evocation',
    cast_time: 1,
    cast_time_unit: 'action',
    range: 1,
    components: ['v','s'],
    duration: 0,
    description: 'A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs. When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.',
    target: {
      max: 1,
    },
    healing: {
      per_spell_lvl: '1d8',
      bonus: 'spellcasting_ability_mod',
    }
  },
  guidance: {
    label: 'Guidance',
    spell_level: 0,
  },
  light: {
    label: 'Light',
    spell_level: 0,
  },
  mending: {
    label: 'Mending',
    spell_level: 0,
  },
  resistance: {
    label: 'Resistance',
    spell_level: 0,
  },
  sacred_flame: {
    label: 'Sacred Flame',
    spell_level: 0,
  },
  spare_the_dying: {
    label: 'Spare the Dying',
    spell_level: 0,
  },
  thaumaturgy: {
    label: 'Thaumaturgy',
    spell_level: 0,
  },
}
