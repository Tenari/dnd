// feature types are temporary_state, passive, class_flavor, action
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
    key: 'divine_domain',
    type: 'class_flavor',
    setup: {
      choices: [{value:'knowledge', label: 'Knowledge'}, {value:'life', label: 'Life'}, {value:'light', label: 'Light'}, {value: 'nature', label:'Nature'}, {value: 'tempest', label: 'Tempest'}, {value: 'trickery', label: 'Trickery'}, {value: 'war', label: 'War'}],
    }
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
  spellcasting: {
    label: 'Spellcasting',
    key: 'spellcasting',
    setup: {
      klass: 'spellcasting_details' //indicates that the details regarding spellcasting feature setup can be found in the 'spellcasting_details' attribute on the class object
    }
  },
  channel_divinity: {
    label: 'Channel Divinity',
    type: 'action',
    uses_per_rest: {
      2: 1, 3: 1, 4: 1, 5: 1,
      6: 2, 7: 2, 8: 2, 9: 2, 10: 2, 11: 2, 12: 2, 13: 2, 14: 2, 15: 2, 16: 2, 17: 2,
      18: 3, 19: 3, 20: 3
    },
    actions: {
      turn_undead: {
        range: 6,
        components: ['v','s'],
        target: {
          all_undead: true,
        },
        saving_throw_type: 'wis',
        duration: 10,
        description: 'A turned creature must spend its turns trying to move as far away from you as it can, and it can’t willingly move to a space within 30 feet of you. It also can’t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the Dodge action.',
      },
      knowledge_of_the_ages: {
        duration: 100,
        description: 'Starting at 2nd level, you can use your Channel Divinity to tap into a divine well of knowledge. As an action, you choose one skill or tool. For 10 minutes, you have proficiency with the chosen skill or tool.',
        divine_domain: 'knowledge',
        min_level: 2,
        proficiency_options: {
          choose: 1,
          choices: ['athletics','acrobatics','sleight_of_hand','stealth','arcana','history','investigation','nature','religion','animal_handling','insight','medicine','perception','survival','deception','intimidation','performance','persuasion','theives_tools', 'alchemist_supplies','brewer_supplies', 'calligrapher_supplies','carpenter_tools','cartographer_tools','cook_utensils','glassblower_tools','jeweler_tools','leatherworker_tools','mason_tools','painter_supplies','potter_tools','smith_tools','tinker_tools','weaver_tools','woodcarver_tools','dice_set','playing_card_set','bagpipes','drum','dulcimer','flute','lute','lyre','horn','pan_flute','shawm','viol','navigator_tools','land_vehicles','water_vehicles'],
        },
      },
      preserve_life: {
        duration: 0,
        components: ['v','s'],
        range: 6,
        target: {
          any: true,
        },
        healing: {
          divide_among_targets: true,
          base: 'cleric_level',
          multiplier: 5,
          max_per_target: 'half', // This feature can restore a creature to no more than half of its hit point maximum.
        },
      }
    }
  },
}
