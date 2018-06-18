export const CLASSES = {
  barbarian: {
    label: 'Barbarian',
    key: 'barbarian',
    description: 'Barbarians come alive in the chaos of combat. They can enter a berserk state where rage takes over, giving them superhuman strength and resilience. A barbarian can draw on this reservoir of fury only a few times without resting, but those few rages are usually sufficient to defeat whatever threats arise.',
    hp: {
      base: 12,
      gain_per_level: 7,
    },
    proficiencies: [
      'light_armor', 'medium_armor', 'shield', 'simple_weapon', 'martial_weapon', 'str_saving_throw', 'con_saving_throw'
    ],
    proficiency_options: {
      choose: 2,
      choices: ['animal_handling', 'athletics', 'intimidation', 'nature', 'perception', 'survival'],
    },
    wealth: 50,
    item_options: [
      [['greataxe'],['martial_melee_weapon']],
      [['handaxe', 'handaxe'], ['simple_weapon']],
    ],
    items: ['explorer_pack','javelin', 'javelin', 'javelin', 'javelin'],
    features: {
      1: ['rage', 'unarmored_defense'],
      2: ['reckless_attack', 'danger_sense'],
    },
    ability_score_improvement: {
      levels: [4, 8, 12, 16, 19],
      max: 20,
      points: 2,
    }
  },
  cleric: {
    label: 'Cleric',
    key: 'cleric',
    description: 'Divine magic, as the name suggests, is the power of the gods, flowing from them into the world. Clerics are conduits for that power, manifesting it as miraculous effects. The gods don\'t grant this power to everyone who seeks it, but only to those chosen to fulfill a high calling. Harnessing divine magic doesn\'t rely on study or training. A cleric might learn formulaic prayers and ancient rites, but the ability to cast cleric spells relies on devotion and an intuitive sense of a deity\'s wishes. Clerics combine the helpful magic of healing and inspiring their allies with spells that harm and hinder foes. They can provoke awe and dread, lay curses of plague or poison, and even call down flames from heaven to consume their enemies. For those evildoers who will benefit most from a mace to the head, clerics depend on their combat training to let them wade into melee with the power of the gods on their side.',
    hp: {
      base: 8,
      gain_per_level: 5,
    },
    proficiencies: [
      'light_armor', 'medium_armor', 'shield', 'simple_weapon', 'wis_saving_throw', 'cha_saving_throw'
    ],
    proficiency_options: {
      choose: 2,
      choices: ['history', 'insight', 'medicine', 'persuasion', 'religion'],
    },
    wealth: 125,
    item_options: [
      [['mace'],['warhammer']],
      [['scale_mail'], ['leather_armor'],['chain_mail']],
      [['light_crossbow', 'bolt_20'], ['simple_weapon']],
      [['priest_pack'],['explorer_pack']],
    ],
    items: ['shield','holy_symbol'],
    features: {
      1: ['spellcasting', 'divine_domain'],
    },
    spellcasting_details: {
      prepare: true,
      ability: 'wis',
      ritual: true,
      focus: 'holy_symbol',
      prepare_list: 'wis_level',
      cantrips: {
        1: 3, 2: 3, 3: 3,
        4: 4, 5: 4, 6: 4, 7: 4, 8: 4, 9: 4,
        10: 5, 11: 5, 12: 5, 13: 5, 14: 5, 15: 5, 16: 5, 17: 5, 18: 5, 19: 5, 20: 5,
      },
      slots: {
        1: {1: 2},
        2: {1: 3},
        3: {1: 4, 2: 2},
        4: {1: 4, 2: 3},
        5: {1: 4, 2: 3, 3: 2},
        6: {1: 4, 2: 3, 3: 3},
        7: {1: 4, 2: 3, 3: 3, 4: 1},
        8: {1: 4, 2: 3, 3: 3, 4: 2},
        9: {1: 4, 2: 3, 3: 3, 4: 3, 5: 1},
        10: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2},
        11: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1},
        12: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1},
        13: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1},
        14: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1},
        15: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1},
        16: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1},
        17: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1},
        18: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1},
        19: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 2, 7: 1, 8: 1, 9: 1},
        20: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 2, 7: 2, 8: 1, 9: 1},
      },
      spells: [
        ['guidance', 'light', 'mending', 'resistance', 'sacred_flame', 'spare_the_dying', 'thaumaturgy'],
        ['bane','bless','command','create_or_destroy_water', 'cure_wounds', 'detect_evil_and_good', 'detect_magic', 'detect_poison_and_disease', 'guiding_bolt', 'healing_word', 'inflict_wounds', 'protection_from_evil_and_good', 'purify_food_and_drink', 'sanctuary', 'shield_of_faith'],
        ['aid','augury','blindness/deafness', 'calm_emotions', 'continual_flame', 'enhance_ability', 'find_traps', 'gentle_repose', 'hold_person', 'lesser_restoration', 'locate_object', 'prayer_of_healing', 'protection_from_poison', 'silence', 'spiritual_weapon', 'warding_bond', 'zone_of_truth'],
        ['animate_dead','beacon_of_hope', 'bestow_curse', 'clairvoyance', 'create_food_and_water', 'daylight', 'dispel_magic', 'feign_death', 'glyph_of_warding', 'magic_circle', 'mass_healing_word', 'meld_into_stone', 'protection_from_energy', 'remove_curse', 'revivify', 'sending', 'speak_with_dead', 'spirit_guardians', 'tongues', 'water_walk'],
        ['banishment', 'control_water', 'death_ward', 'divination', 'freedom_of_movement', 'guardian_of_faith', 'locate_creature', 'stone_shape'],
        ['commune', 'contagion', 'dispel_evil_and_good', 'flame_strike', 'geas', 'greater_restoration','hallow','insect_plague','legend_lore','mass_cure_wounds','planar_binding','raise_dead','scrying'],
        ['blade_barrier','create_undead','find_the_path','forbiddance','harm','heal','heroes_feast','planar_ally','true_seeing','word_of_recall'],
        ['conjure_celestial','divine_word','etherealness','fire_storm','plane_shift','regenerate','resurrection','symbol'],
        ['antimagic_field','control_weather','earthquake','holy_aura'],
        ['astral_projection','gate','mass_heal','true_resurrection'],
      ]
    },
    divine_domains: {
      knowledge: {
        label: 'Knowledge',
        spells: {
          1: ['command','identify'],
          3: ['augury', 'suggestion'],
          5: ['nondetection', 'speak_with_dead'],
          7: ['arcane_eye', 'confusion'],
          9: ['legend_lore', 'scrying'],
        },
        features: ['extra_language', 'extra_language', 'double_proficiency', 'double_proficiency'],
        double_proficiency_options: {
          choose: 2,
          choices: ['arcana', 'history', 'nature', 'religion'],
        },
      },
      life: {
        label: 'Life',
        spells: {
          1: ['bless','cure_wounds'],
          3: ['lesser_restoration', 'spiritual_weapon'],
          5: ['beacon_of_hope', 'revivify'],
          7: ['death_ward', 'guardian_of_faith'],
          9: ['mass_cure_wounds', 'raise_dead'],
        },
        bonus: ['heavy_armor_proficiency'],
        features: ['disciple_of_life'],
      }
    },
    ability_score_improvement: {
      levels: [4, 8, 12, 16, 19],
      max: 20,
      points: 2,
    },
  },
  fighter: {
    label: 'Fighter',
    key: 'fighter',
    hp: {
      base: 10,
      gain_per_level: 6,
    },
    proficiencies: [
      'light_armor', 'medium_armor', 'heavy_armor', 'shield', 'simple_weapon', 'martial_weapon', 'str_saving_throw', 'con_saving_throw'
    ],
    proficiency_options: {
      choose: 2,
      choices: ['acrobatics', 'animal_handling', 'athletics', 'history', 'insight', 'intimidation', 'perception', 'survival'],
    },
    wealth: 125,
    item_options: [
      [['chain_mail'],['leather_armor', 'longbow', 'arrow_20']],
      [['martial_weapon','shield'], ['martial_weapon','martial_weapon']],
      [['light_crossbow', 'bolt_20'], ['handaxe', 'handaxe']],
      [['dungeoneer_pack'],['explorer_pack']],
    ],
  },
  rogue: {
    label: "Rogue",
    key: 'rogue',
    hp: {
      base: 8,
      gain_per_level: 5,
    },
    proficiencies: [
      'light_armor', 'simple_weapon', 'hand_crossbow','longsword', 'rapier', 'shortsword', 'theives_tools', 'dex_saving_throw', 'inte_saving_throw'
    ],
    proficiency_options: {
      choose: 2,
      choices: ['acrobatics', 'athletics', 'deception', 'insight', 'intimidation', 'investigation', 'perception', 'performance', 'persuasion', 'sleight_of_hand', 'stealth'],
    },
    wealth: 100,
    item_options: [
      [['rapier'],['short_sword']],
      [['shortbow','arrow_20'], ['short_sword']],
      [['burglar_pack'], ['dungeoneer_pack'], ['explorer_pack']],
    ],
    items: ['leather_armor','dagger','dagger','theives_tools'],
  },
  wizard: {
    label: "Wizard",
    key: 'wizard',
    hp: {
      base: 6,
      gain_per_level: 4,
    },
    proficiencies: [
      'dagger', 'dart', 'sling', 'quarterstaff', 'light_crossbow', 'inte_saving_throw', 'wis_saving_throw'
    ],
    proficiency_options: {
      choose: 2,
      choices: ['arcana', 'history', 'insight', 'investigation', 'medicine', 'religion'],
    },
    wealth: 100,
    item_options: [
      [['quarterstaff'],['dagger']],
      [['component_pouch'], ['arcane_focus']],
      [['scholar_pack'], ['explorer_pack']],
    ],
    items: ['spellbook'],
  },
}
