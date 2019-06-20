export const CLASS_FEATURES = [
  {
    "index": 1,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/1",
      "name": "Barbarian"
    },
    "subclass": {},
    "name": "Rage",
    "level": 1,
    "desc": [
      "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren't wearing heavy armor:",
      "• You have advantage on Strength checks and Strength saving throws.",
      "• When you make a melee weapon Attack using Strength, you gain a +2 bonus to the damage roll. This bonus increases as you level.",
      "• You have Resistance to bludgeoning, piercing, and slashing damage.",
      "If you are able to cast Spells, you can't cast them or concentrate on them while raging.",
      "Your rage lasts for 1 minute. It ends early if you are knocked Unconscious or if Your Turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on Your Turn as a Bonus Action.",
      "Once you have raged the maximum number of times for your barbarian level, you must finish a Long Rest before you can rage again. You may rage 2 times at 1st level, 3 at 3rd, 4 at 6th, 5 at 12th, and 6 at 17th."
    ],
    combat: true,
    action: {
      key: 'barbarian_rage',
      size: 'bonus',
      uses_per_day: {
        1: 2, 2: 2,
        3: 3, 4: 3, 5: 3,
        6: 4, 7: 4, 8: 4, 9: 4, 10: 4, 11: 4,
        12: 5, 13: 5, 14: 5, 15: 5, 16: 5,
        17: 6, 18: 6, 19: 6, 20: 10000000,
      },
      produced_effect: {
        conditions: ['no_heavy_armor'],
        grantsAdvantage: {'str_check':true, 'str_saving_throw':true},
        endable: true,
        can_cast_spells: false,
        ends: {
          unconscious: true,
          no_attack_or_damage_taken_since_last_turn: true,
        },
        level_based_damage_bonus: {
          1: 2, 2: 2, 3: 2, 4: 2, 5: 2, 6: 2, 7: 2, 8: 2,
          9: 3, 10: 3, 11: 3, 12: 3, 13: 3, 14: 3, 15: 3,
          16: 4, 17: 4, 18: 4, 19: 4, 20: 4
        },
        resistances: ['bludgeoning','piercing','slashing'],
        duration: 60, // seconds
      }
    },
  },
  {
    "index": 2,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/1",
      "name": "Barbarian"
    },
    "subclass": {},
    "name": "Unarmored Defense",
    "level": 1,
    "desc": [
      "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit."
    ],
    combat: true,
  },
  {
    "index": 3,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/1",
      "name": "Barbarian"
    },
    "subclass": {},
    "name": "Reckless Attack",
    "level": 2,
    "desc": [
      "Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn."
    ],
    "url": "http://www.dnd5eapi.co/api/features/3"
  },
  {
    "index": 4,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/1",
      "name": "Barbarian"
    },
    "subclass": {},
    "name": "Danger Sense",
    "level": 2,
    "desc": [
      "At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can’t be blinded, deafened, or incapacitated."
    ],
    "url": "http://www.dnd5eapi.co/api/features/4"
  },
  {
    "index": 5,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/1",
      "name": "Barbarian"
    },
    "subclass": {},
    "name": "Primal Path",
    "level": 3,
    "desc": [
      "At 3rd level, you choose a path that shapes the nature of your rage. Choose the Path of the Berserker or the Path of the Totem Warrior, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels."
    ],
    "url": "http://www.dnd5eapi.co/api/features/5"
  },
  {
    "index": 6,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/1",
      "name": "Barbarian"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/1",
      "name": "Berserker"
    },
    "name": "Frenzy",
    "level": 3,
    "desc": [
      "Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion (as described in appendix A)."
    ],
    "url": "http://www.dnd5eapi.co/api/features/6"
  },
  {
    "index": 7,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/1",
      "name": "Barbarian"
    },
    "subclass": {},
    "name": "Ability Score Improvement 1",
    "level": 4,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/7"
  },
  {
    "index": 8,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/1",
      "name": "Barbarian"
    },
    "subclass": {},
    "name": "Extra Attack",
    "level": 5,
    "desc": [
      "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
    ],
    "url": "http://www.dnd5eapi.co/api/features/8"
  },
  {
    "index": 9,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/1",
      "name": "Barbarian"
    },
    "subclass": {},
    "name": "Fast Movement",
    "level": 5,
    "desc": [
      "Starting at 5th level, your speed increases by 10 feet while you aren’t wearing heavy armor."
    ],
    "url": "http://www.dnd5eapi.co/api/features/9"
  },
  {
    "index": 10,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/1",
      "name": "Barbarian"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/1",
      "name": "Berserker"
    },
    "name": "Mindless Rage",
    "level": 6,
    "desc": [
      "Beginning at 6th level, you can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage."
    ],
    "url": "http://www.dnd5eapi.co/api/features/10"
  },
  {
    "index": 11,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/1",
      "name": "Barbarian"
    },
    "subclass": {},
    "name": "Feral Instinct",
    "level": 7,
    "desc": [
      "By 7th level, your instincts are so honed that you have advantage on initiative rolls.",
      "Additionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn."
    ],
    "url": "http://www.dnd5eapi.co/api/features/11"
  },
  {
    "index": 12,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/1",
      "name": "Barbarian"
    },
    "subclass": {},
    "name": "Ability Score Improvement 2",
    "level": 8,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/12"
  },
  {
    "index": 13,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/1",
      "name": "Barbarian"
    },
    "subclass": {},
    "name": "Brutal Critical (1 die)",
    "level": 9,
    "desc": [
      "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/13"
  },
  {
    "index": 14,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/1",
      "name": "Barbarian"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/1",
      "name": "Berserker"
    },
    "name": "Intimidating Presence",
    "level": 10,
    "desc": [
      "Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you.",
      " If the creature succeeds on its saving throw, you can't use this feature on that creature again for 24 hours."
    ],
    "url": "http://www.dnd5eapi.co/api/features/14"
  },
  {
    "index": 15,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/1",
      "name": "Barbarian"
    },
    "subclass": {},
    "name": "Relentless Rage",
    "level": 11,
    "desc": [
      "Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.",
      "Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10."
    ],
    "url": "http://www.dnd5eapi.co/api/features/15"
  },
  {
    "index": 16,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/1",
      "name": "Barbarian"
    },
    "subclass": {},
    "name": "Ability Score Improvement 3",
    "level": 12,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/16"
  },
  {
    "index": 17,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/1",
      "name": "Barbarian"
    },
    "subclass": {},
    "name": "Brutal Critical (2 dice)",
    "level": 13,
    "desc": [
      "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/17"
  },
  {
    "index": 18,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/1",
      "name": "Barbarian"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/1",
      "name": "Berserker"
    },
    "name": "Retaliation",
    "level": 14,
    "desc": [
      "Starting at 14th level, when you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon Attack against that creature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/18"
  },
  {
    "index": 19,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/1",
      "name": "Barbarian"
    },
    "subclass": {},
    "name": "Persistent Rage",
    "level": 15,
    "desc": [
      "Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it."
    ],
    "url": "http://www.dnd5eapi.co/api/features/19"
  },
  {
    "index": 20,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/1",
      "name": "Barbarian"
    },
    "subclass": {},
    "name": "Ability Score Improvement 4",
    "level": 16,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/20"
  },
  {
    "index": 21,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/1",
      "name": "Barbarian"
    },
    "subclass": {},
    "name": "Brutal Critical (3 dice)",
    "level": 17,
    "desc": [
      "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack. This increases to two additional dice at 13th level and three additional dice at 17th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/21"
  },
  {
    "index": 22,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/1",
      "name": "Barbarian"
    },
    "subclass": {},
    "name": "Indomitable Might",
    "level": 18,
    "desc": [
      "Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total."
    ],
    "url": "http://www.dnd5eapi.co/api/features/22"
  },
  {
    "index": 23,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/1",
      "name": "Barbarian"
    },
    "subclass": {},
    "name": "Ability Score Improvement 5",
    "level": 19,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/23"
  },
  {
    "index": 24,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/1",
      "name": "Barbarian"
    },
    "subclass": {},
    "name": "Fast Movement",
    "level": 20,
    "desc": [
      "At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24."
    ],
    "url": "http://www.dnd5eapi.co/api/features/24"
  },
  {
    "index": 25,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Spellcasting",
    "level": 1,
    "desc": [
      "You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations."
    ],
    "reference": "http://www.dnd5eapi.co/api/spellcasting/bard",
    "url": "http://www.dnd5eapi.co/api/features/25"
  },
  {
    "index": 26,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Bardic Inspiration (d6)",
    "level": 1,
    "desc": [
      "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.",
      "You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest. ",
      "Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
    ],
    combat: true,
    "url": "http://www.dnd5eapi.co/api/features/26"
  },
  {
    "index": 27,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Jack of All Trades",
    "level": 2,
    "desc": [
      "Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn’t already include your proficiency bonus."
    ],
    "url": "http://www.dnd5eapi.co/api/features/27"
  },
  {
    "index": 28,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Song of Rest (d6)",
    "level": 2,
    "desc": [
      "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points. ",
      "The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/28"
  },
  {
    "index": 29,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Bard College",
    "level": 3,
    "desc": [
      "At 3rd level, you delve into the advanced techniques of a bard college of your choice: the College of Lore or the College of Valor, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th and 14th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/29"
  },
  {
    "index": 30,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/2",
      "name": "Lore"
    },
    "name": "Bonus Proficiencies",
    "level": 3,
    "desc": [
      "When you join the College of Lore at 3rd level, you gain proficiency with three skills of your choice."
    ],
    "url": "http://www.dnd5eapi.co/api/features/30"
  },
  {
    "index": 31,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/2",
      "name": "Lore"
    },
    "name": "Cutting Words",
    "level": 3,
    "desc": [
      "Also at 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others.",
      "When a creature that you can see within 60 feet of you makes an attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature's roll.",
      "You can choose to use this feature after the creature makes its roll, but before the GM determines whether the attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can't hear you or if it's immune to being charmed."
    ],
    "url": "http://www.dnd5eapi.co/api/features/31"
  },
  {
    "index": 32,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Choose: Expertise 1",
    "level": 3,
    "desc": [
      "At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. At 10th level, you can choose another two skill proficiencies to gain this benefit."
    ],
    "choice": {
      "choose": 2,
      "type": "feature",
      "from": [
        {
          "url": "http://www.dnd5eapi.co/api/features/278",
          "name": "Expertise: Acrobatics"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/277",
          "name": "Expertise: Animal Handling"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/261",
          "name": "Expertise: Arcana"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/262",
          "name": "Expertise: Athletics"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/263",
          "name": "Expertise: Deception"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/264",
          "name": "Expertise: History"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/265",
          "name": "Expertise: Insight"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/266",
          "name": "Expertise: Intimidation"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/267",
          "name": "Expertise: Investigation"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/268",
          "name": "Expertise: Medicine"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/269",
          "name": "Expertise: Nature"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/270",
          "name": "Expertise: Perception"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/271",
          "name": "Expertise: Performance"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/272",
          "name": "Expertise: Persuasion"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/273",
          "name": "Expertise: Religion"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/274",
          "name": "Expertise: Sleight of Hand"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/275",
          "name": "Expertise: Stealth"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/276",
          "name": "Expertise: Survival"
        }
      ]
    },
    "url": "http://www.dnd5eapi.co/api/features/32"
  },
  {
    "index": 33,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Expertise: Acrobatics",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/105"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Bard)",
    "url": "http://www.dnd5eapi.co/api/features/33"
  },
  {
    "index": 34,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Expertise: Animal Handling",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/106"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Bard)",
    "url": "http://www.dnd5eapi.co/api/features/34"
  },
  {
    "index": 35,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Expertise: Arcana",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/107"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Bard)",
    "url": "http://www.dnd5eapi.co/api/features/35"
  },
  {
    "index": 36,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Expertise: Athletics",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/108"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Bard)",
    "url": "http://www.dnd5eapi.co/api/features/36"
  },
  {
    "index": 37,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Expertise: Deception",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/109"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Bard)",
    "url": "http://www.dnd5eapi.co/api/features/37"
  },
  {
    "index": 38,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Expertise: History",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/110"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Bard)",
    "url": "http://www.dnd5eapi.co/api/features/38"
  },
  {
    "index": 39,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Expertise: Insight",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/111"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Bard)",
    "url": "http://www.dnd5eapi.co/api/features/39"
  },
  {
    "index": 40,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Expertise: Intimidation",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/112"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Bard)",
    "url": "http://www.dnd5eapi.co/api/features/40"
  },
  {
    "index": 41,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Expertise: Investigation",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/113"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Bard)",
    "url": "http://www.dnd5eapi.co/api/features/41"
  },
  {
    "index": 42,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Expertise: Medicine",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/114"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Bard)",
    "url": "http://www.dnd5eapi.co/api/features/42"
  },
  {
    "index": 43,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Expertise: Nature",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/115"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Bard)",
    "url": "http://www.dnd5eapi.co/api/features/43"
  },
  {
    "index": 44,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Expertise: Perception",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/116"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Bard)",
    "url": "http://www.dnd5eapi.co/api/features/44"
  },
  {
    "index": 45,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Expertise: Performance",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/117"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Bard)",
    "url": "http://www.dnd5eapi.co/api/features/45"
  },
  {
    "index": 46,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Expertise: Persuasion",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/118"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Bard)",
    "url": "http://www.dnd5eapi.co/api/features/46"
  },
  {
    "index": 47,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Expertise: Religion",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/119"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Bard)",
    "url": "http://www.dnd5eapi.co/api/features/47"
  },
  {
    "index": 48,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Expertise: Sleight of Hand",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/120"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Bard)",
    "url": "http://www.dnd5eapi.co/api/features/48"
  },
  {
    "index": 49,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Expertise: Stealth",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/121"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Bard)",
    "url": "http://www.dnd5eapi.co/api/features/49"
  },
  {
    "index": 50,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Expertise: Survival",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/122"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Bard)",
    "url": "http://www.dnd5eapi.co/api/features/50"
  },
  {
    "index": 51,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Ability Score Improvement 1",
    "level": 4,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/51"
  },
  {
    "index": 52,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Bardic Inspiration (d8)",
    "level": 5,
    "desc": [
      "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.",
      "You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest. ",
      "Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/52"
  },
  {
    "index": 53,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Font of Inspiration",
    "level": 5,
    "desc": [
      "Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest."
    ],
    "url": "http://www.dnd5eapi.co/api/features/53"
  },
  {
    "index": 54,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Countercharm",
    "level": 6,
    "desc": [
      "At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required)."
    ],
    "url": "http://www.dnd5eapi.co/api/features/54"
  },
  {
    "index": 55,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/2",
      "name": "Lore"
    },
    "name": "Additional Magical Secrets",
    "level": 6,
    "desc": [
      "At 6th level, you learn two spells of your choice from any class. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you but don't count against the number of bard spells you know."
    ],
    "url": "http://www.dnd5eapi.co/api/features/55"
  },
  {
    "index": 56,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Ability Score Improvement 2",
    "level": 8,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/56"
  },
  {
    "index": 57,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Song of Rest (d8)",
    "level": 9,
    "desc": [
      "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points. ",
      "The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/57"
  },
  {
    "index": 58,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Bardic Inspiration (d10)",
    "level": 10,
    "desc": [
      "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.",
      "You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest. ",
      "Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/58"
  },
  {
    "index": 59,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Choose: Expertise 2",
    "level": 10,
    "desc": [
      "At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. At 10th level, you can choose another two skill proficiencies to gain this benefit."
    ],
    "choice": {
      "choose": 2,
      "type": "feature",
      "from": [
        {
          "url": "http://www.dnd5eapi.co/api/features/278",
          "name": "Expertise: Acrobatics"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/277",
          "name": "Expertise: Animal Handling"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/261",
          "name": "Expertise: Arcana"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/262",
          "name": "Expertise: Athletics"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/263",
          "name": "Expertise: Deception"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/264",
          "name": "Expertise: History"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/265",
          "name": "Expertise: Insight"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/266",
          "name": "Expertise: Intimidation"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/267",
          "name": "Expertise: Investigation"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/268",
          "name": "Expertise: Medicine"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/269",
          "name": "Expertise: Nature"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/270",
          "name": "Expertise: Perception"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/271",
          "name": "Expertise: Performance"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/272",
          "name": "Expertise: Persuasion"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/273",
          "name": "Expertise: Religion"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/274",
          "name": "Expertise: Sleight of Hand"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/275",
          "name": "Expertise: Stealth"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/276",
          "name": "Expertise: Survival"
        }
      ]
    },
    "url": "http://www.dnd5eapi.co/api/features/59"
  },
  {
    "index": 60,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Magical Secrets 1",
    "level": 10,
    "desc": [
      "By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. ",
      "The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table. ",
      "You learn two additional spells from any class at 14th level and again at 18th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/60"
  },
  {
    "index": 61,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Ability Score Improvement 3",
    "level": 12,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/61"
  },
  {
    "index": 62,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Song of Rest (d10)",
    "level": 13,
    "desc": [
      "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points. ",
      "The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/62"
  },
  {
    "index": 63,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Magical Secrets 2",
    "level": 14,
    "desc": [
      "By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. ",
      "The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table. ",
      "You learn two additional spells from any class at 14th level and again at 18th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/63"
  },
  {
    "index": 64,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/2",
      "name": "Lore"
    },
    "name": "Peerless Skill",
    "level": 14,
    "desc": [
      "Starting at 14th level, when you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roll the die for the ability check, but before the GM tells you whether you succeed or fail."
    ],
    "url": "http://www.dnd5eapi.co/api/features/64"
  },
  {
    "index": 65,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Bardic Inspiration (d12)",
    "level": 15,
    "desc": [
      "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.",
      "You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest. ",
      "Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/65"
  },
  {
    "index": 66,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Ability Score Improvement 4",
    "level": 16,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/66"
  },
  {
    "index": 67,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Song of Rest (d12)",
    "level": 17,
    "desc": [
      "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points. ",
      "The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/67"
  },
  {
    "index": 68,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Magical Secrets 3",
    "level": 18,
    "desc": [
      "By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. ",
      "The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table. ",
      "You learn two additional spells from any class at 14th level and again at 18th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/68"
  },
  {
    "index": 69,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Ability Score Improvement 5",
    "level": 19,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/69"
  },
  {
    "index": 70,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/2",
      "name": "Bard"
    },
    "subclass": {},
    "name": "Superior Inspiration",
    "level": 20,
    "desc": [
      "At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use."
    ],
    "url": "http://www.dnd5eapi.co/api/features/70"
  },
  {
    "index": 71,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {},
    "name": "Spellcasting",
    "level": 1,
    "desc": [
      "As a conduit for divine power, you can cast cleric spells."
    ],
    "reference": "http://www.dnd5eapi.co/api/spellcasting/cleric",
    "url": "http://www.dnd5eapi.co/api/features/71"
  },
  {
    "index": 72,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {},
    "name": "Divine Domain",
    "level": 1,
    "desc": [
      "Choose one domain related to your deity: Knowledge, Life, Light, Nature, Tempest, Trickery, or War. Only the Life domain is detailed in the Open Game Licensed SRD. Additional Domains are described in the official rulebooks or products from other publishers.",
      "Your domain grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels."
    ],
    "url": "http://www.dnd5eapi.co/api/features/72"
  },
  {
    "index": 73,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {},
    "name": "Domain Spells 1",
    "level": 1,
    "desc": [
      "Each domain has a list of spells—its domain spells— that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day.",
      "If you have a domain spell that doesn’t appear on the cleric spell list, the spell is nonetheless a cleric spell for you."
    ],
    "url": "http://www.dnd5eapi.co/api/features/73"
  },
  {
    "index": 74,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {
      "key": "cleric_life",
      "name": "Life"
    },
    "name": "Bonus Proficiency",
    "level": 1,
    "desc": [
      "When you choose this domain at 1st level, you gain proficiency with heavy armor."
    ],
    "url": "http://www.dnd5eapi.co/api/features/74"
  },
  {
    "index": 75,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {
      "key": "cleric_life",
      "name": "Life"
    },
    "name": "Disciple of Life",
    "level": 1,
    "desc": [
      "Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell’s level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/75"
  },
  {
    "index": 76,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {},
    "name": "Channel Divinity (1/rest)",
    "level": 2,
    "desc": [
      "At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.",
      "When you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.",
      "Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.",
      "Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses."
    ],
    "url": "http://www.dnd5eapi.co/api/features/76"
  },
  {
    "index": 77,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {},
    "name": "Channel Divinity: Turn Undead",
    "level": 2,
    "desc": [
      "As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.",
      "A turned creature must spend its turns trying to move as far away from you as it can, and it can’t willingly move to a space within 30 feet of you. It also can’t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the Dodge action."
    ],
    "url": "http://www.dnd5eapi.co/api/features/77"
  },
  {
    "index": 78,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {
      "key": "cleric_life",
      "name": "Life"
    },
    "name": "Channel Divinity: Preserve Life",
    "level": 2,
    "desc": [
      "Starting at 2nd level, you can use your Channel Divinity to heal the badly injured.",
      "As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level.",
      "Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can’t use this feature on an undead or a construct."
    ],
    "url": "http://www.dnd5eapi.co/api/features/78"
  },
  {
    "index": 79,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {},
    "name": "Domain Spells 2",
    "level": 3,
    "desc": [
      "Each domain has a list of spells—its domain spells— that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day.",
      "If you have a domain spell that doesn’t appear on the cleric spell list, the spell is nonetheless a cleric spell for you."
    ],
    "url": "http://www.dnd5eapi.co/api/features/79"
  },
  {
    "index": 80,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {},
    "name": "Ability Score Improvement 1",
    "level": 4,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/80"
  },
  {
    "index": 81,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {},
    "name": "Domain Spells 3",
    "level": 5,
    "desc": [
      "Each domain has a list of spells—its domain spells— that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day.",
      "If you have a domain spell that doesn’t appear on the cleric spell list, the spell is nonetheless a cleric spell for you."
    ],
    "url": "http://www.dnd5eapi.co/api/features/81"
  },
  {
    "index": 82,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {},
    "name": "Destroy Undead (CR 1/2 or below)",
    "level": 5,
    "desc": [
      "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold."
    ],
    "url": "http://www.dnd5eapi.co/api/features/82"
  },
  {
    "index": 83,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {},
    "name": "Channel Divinity (2/rest)",
    "level": 6,
    "desc": [
      "Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses."
    ],
    "url": "http://www.dnd5eapi.co/api/features/83"
  },
  {
    "index": 84,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {
      "key": "cleric_life",
      "name": "Life"
    },
    "name": "Blessed Healer",
    "level": 6,
    "desc": [
      "Beginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell’s level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/84"
  },
  {
    "index": 85,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {},
    "name": "Domain Spells 4",
    "level": 7,
    "desc": [
      "Each domain has a list of spells—its domain spells— that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day.",
      "If you have a domain spell that doesn’t appear on the cleric spell list, the spell is nonetheless a cleric spell for you."
    ],
    "url": "http://www.dnd5eapi.co/api/features/85"
  },
  {
    "index": 86,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {},
    "name": "Ability Score Improvement 2",
    "level": 8,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/86"
  },
  {
    "index": 87,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {},
    "name": "Destroy Undead (CR 1 or below)",
    "level": 8,
    "desc": [
      "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold."
    ],
    "url": "http://www.dnd5eapi.co/api/features/87"
  },
  {
    "index": 88,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {
      "key": "cleric_life",
      "name": "Life"
    },
    "name": "Divine Strike",
    "level": 8,
    "desc": [
      "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8."
    ],
    "url": "http://www.dnd5eapi.co/api/features/88"
  },
  {
    "index": 89,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {},
    "name": "Domain Spells 5",
    "level": 9,
    "desc": [
      "Each domain has a list of spells—its domain spells— that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day.",
      "If you have a domain spell that doesn’t appear on the cleric spell list, the spell is nonetheless a cleric spell for you."
    ],
    "url": "http://www.dnd5eapi.co/api/features/89"
  },
  {
    "index": 90,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {},
    "name": "Divine Intervention",
    "level": 10,
    "desc": [
      "Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.",
      "Imploring your deity’s aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The GM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate.",
      "If your deity intervenes, you can’t use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.",
      "At 20th level, your call for intervention succeeds automatically, no roll required."
    ],
    "url": "http://www.dnd5eapi.co/api/features/90"
  },
  {
    "index": 91,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {},
    "name": "Destroy Undead (CR 2 or below)",
    "level": 11,
    "desc": [
      "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold."
    ],
    "url": "http://www.dnd5eapi.co/api/features/91"
  },
  {
    "index": 92,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {},
    "name": "Ability Score Improvement 3",
    "level": 12,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/92"
  },
  {
    "index": 93,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {},
    "name": "Destroy Undead (CR 3 or below)",
    "level": 14,
    "desc": [
      "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold."
    ],
    "url": "http://www.dnd5eapi.co/api/features/93"
  },
  {
    "index": 94,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {},
    "name": "Ability Score Improvement 4",
    "level": 16,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/94"
  },
  {
    "index": 95,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {},
    "name": "Destroy Undead (CR 4 or below)",
    "level": 17,
    "desc": [
      "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold."
    ],
    "url": "http://www.dnd5eapi.co/api/features/95"
  },
  {
    "index": 96,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {},
    "name": "Supreme Healing",
    "level": 17,
    "desc": [
      "Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring 2d6 hit points to a creature, you restore 12."
    ],
    "url": "http://www.dnd5eapi.co/api/features/96"
  },
  {
    "index": 97,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {},
    "name": "Channel Divinity (3/rest)",
    "level": 18,
    "desc": [
      "Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses."
    ],
    "url": "http://www.dnd5eapi.co/api/features/97"
  },
  {
    "index": 98,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {},
    "name": "Ability Score Improvement 5",
    "level": 19,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/98"
  },
  {
    "index": 99,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/3",
      "name": "Cleric"
    },
    "subclass": {},
    "name": "Divine Intervention Improvement",
    "level": 20,
    "desc": [
      "At 20th level, your call for intervention succeeds automatically, no roll required."
    ],
    "url": "http://www.dnd5eapi.co/api/features/99"
  },
  {
    "index": 100,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {},
    "name": "Spellcasting",
    "level": 1,
    "desc": [
      "Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will."
    ],
    "reference": "http://www.dnd5eapi.co/api/spellcasting/druid",
    "url": "http://www.dnd5eapi.co/api/features/100"
  },
  {
    "index": 101,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {},
    "name": "Druidic",
    "level": 1,
    "desc": [
      "You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic."
    ],
    "url": "http://www.dnd5eapi.co/api/features/101"
  },
  {
    "index": 102,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {},
    "name": "Wild Shape (CR 1/4 or below, no flying or swim speed)",
    "level": 2,
    "desc": [
      "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.",
      "Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.",
      "You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.",
      "While you are transformed, the following rules apply:",
      "• Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.",
      "• When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.",
      "• You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you've already cast.",
      "• You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.",
      "• You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the GM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form."
    ],
    "url": "http://www.dnd5eapi.co/api/features/102"
  },
  {
    "index": 103,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {},
    "name": "Druid Circle",
    "level": 2,
    "desc": [
      "At 2nd level, you choose to identify with a circle of druids: the Circle of the Land or the Circle of the Moon, both detailed at the end of the class description. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/103"
  },
  {
    "index": 104,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {
      "name": "Land",
      "url": "http://www.dnd5eapi.co/api/subclasses/4"
    },
    "name": "Choose: Circle of the Land",
    "level": 2,
    "desc": [
      "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle’s wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle’s mysterious rites."
    ],
    "choice": {
      "choose": 1,
      "type": "feature",
      "from": [
        {
          "url": "http://www.dnd5eapi.co/api/features/105",
          "name": "Circle of the Land: Arctic"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/106",
          "name": "Circle of the Land: Coast"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/107",
          "name": "Circle of the Land: Desert"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/108",
          "name": "Circle of the Land: Forest"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/109",
          "name": "Circle of the Land: Grassland"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/110",
          "name": "Circle of the Land: Mountain"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/111",
          "name": "Circle of the Land: Swamp"
        }
      ]
    },
    "url": "http://www.dnd5eapi.co/api/features/104"
  },
  {
    "index": 105,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {
      "name": "Land",
      "url": "http://www.dnd5eapi.co/api/subclasses/4"
    },
    "name": "Circle of the Land: Arctic",
    "level": 2,
    "desc": [
      "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle’s wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle’s mysterious rites."
    ],
    "group": "Circle of the Land",
    "url": "http://www.dnd5eapi.co/api/features/105"
  },
  {
    "index": 106,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {
      "name": "Land",
      "url": "http://www.dnd5eapi.co/api/subclasses/4"
    },
    "name": "Circle of the Land: Coast",
    "level": 2,
    "desc": [
      "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle’s wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle’s mysterious rites."
    ],
    "group": "Circle of the Land",
    "url": "http://www.dnd5eapi.co/api/features/106"
  },
  {
    "index": 107,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {
      "name": "Land",
      "url": "http://www.dnd5eapi.co/api/subclasses/4"
    },
    "name": "Circle of the Land: Desert",
    "level": 2,
    "desc": [
      "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle’s wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle’s mysterious rites."
    ],
    "group": "Circle of the Land",
    "url": "http://www.dnd5eapi.co/api/features/107"
  },
  {
    "index": 108,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {
      "name": "Land",
      "url": "http://www.dnd5eapi.co/api/subclasses/4"
    },
    "name": "Circle of the Land: Forest",
    "level": 2,
    "desc": [
      "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle’s wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle’s mysterious rites."
    ],
    "group": "Circle of the Land",
    "url": "http://www.dnd5eapi.co/api/features/108"
  },
  {
    "index": 109,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {
      "name": "Land",
      "url": "http://www.dnd5eapi.co/api/subclasses/4"
    },
    "name": "Circle of the Land: Grassland",
    "level": 2,
    "desc": [
      "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle’s wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle’s mysterious rites."
    ],
    "group": "Circle of the Land",
    "url": "http://www.dnd5eapi.co/api/features/109"
  },
  {
    "index": 110,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {
      "name": "Land",
      "url": "http://www.dnd5eapi.co/api/subclasses/4"
    },
    "name": "Circle of the Land: Mountain",
    "level": 2,
    "desc": [
      "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle’s wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle’s mysterious rites."
    ],
    "group": "Circle of the Land",
    "url": "http://www.dnd5eapi.co/api/features/110"
  },
  {
    "index": 111,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {
      "name": "Land",
      "url": "http://www.dnd5eapi.co/api/subclasses/4"
    },
    "name": "Circle of the Land: Swamp",
    "level": 2,
    "desc": [
      "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle’s wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle’s mysterious rites."
    ],
    "group": "Circle of the Land",
    "url": "http://www.dnd5eapi.co/api/features/111"
  },
  {
    "index": 112,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {
      "name": "Land",
      "url": "http://www.dnd5eapi.co/api/subclasses/4"
    },
    "name": "Bonus Cantrip",
    "level": 2,
    "desc": [
      "When you choose this circle at 2nd level, you learn one additional druid cantrip of your choice."
    ],
    "url": "http://www.dnd5eapi.co/api/features/112"
  },
  {
    "index": 113,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {
      "name": "Land",
      "url": "http://www.dnd5eapi.co/api/subclasses/4"
    },
    "name": "Natural Recovery",
    "level": 2,
    "desc": [
      "Starting at 2nd level, you can regain some of your magical energy by sitting in meditation and communing with nature. During a short rest, you choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your druid level (rounded up), and none of the slots can be 6th level or higher. You can’t use this feature again until you finish a long rest.",
      "For example, when you are a 4th-level druid, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level slot or two 1st-level slots."
    ],
    "url": "http://www.dnd5eapi.co/api/features/113"
  },
  {
    "index": 114,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {
      "name": "Land",
      "url": "http://www.dnd5eapi.co/api/subclasses/4"
    },
    "name": "Circle Spells 1",
    "level": 3,
    "desc": [
      "Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid.",
      "Choose that land—arctic, coast, desert, forest, grassland, mountain, or swamp—and consult the associated list of spells.",
      "Once you gain access to a circle spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day. If you gain access to a spell that doesn’t appear on the druid spell list, the spell is nonetheless a druid spell for you."
    ],
    "url": "http://www.dnd5eapi.co/api/features/114"
  },
  {
    "index": 115,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {},
    "name": "Wild Shape (CR 1/2 or below, no flying speed)",
    "level": 4,
    "desc": [
      "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.",
      "Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.",
      "You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.",
      "While you are transformed, the following rules apply:",
      "• Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.",
      "• When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.",
      "• You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you've already cast.",
      "• You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.",
      "• You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the GM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form."
    ],
    "url": "http://www.dnd5eapi.co/api/features/115"
  },
  {
    "index": 116,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {},
    "name": "Ability Score Improvement 1",
    "level": 4,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/116"
  },
  {
    "index": 117,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {
      "name": "Land",
      "url": "http://www.dnd5eapi.co/api/subclasses/4"
    },
    "name": "Circle Spells 2",
    "level": 5,
    "desc": [
      "Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid.",
      "Choose that land—arctic, coast, desert, forest, grassland, mountain, or swamp—and consult the associated list of spells.",
      "Once you gain access to a circle spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day. If you gain access to a spell that doesn’t appear on the druid spell list, the spell is nonetheless a druid spell for you."
    ],
    "url": "http://www.dnd5eapi.co/api/features/117"
  },
  {
    "index": 118,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {
      "name": "Land",
      "url": "http://www.dnd5eapi.co/api/subclasses/4"
    },
    "name": "Land's Stride",
    "level": 6,
    "desc": [
      "Starting at 6th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.",
      "In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell."
    ],
    "url": "http://www.dnd5eapi.co/api/features/118"
  },
  {
    "index": 119,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {
      "name": "Land",
      "url": "http://www.dnd5eapi.co/api/subclasses/4"
    },
    "name": "Circle Spells 3",
    "level": 7,
    "desc": [
      "Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid.",
      "Choose that land—arctic, coast, desert, forest, grassland, mountain, or swamp—and consult the associated list of spells.",
      "Once you gain access to a circle spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day. If you gain access to a spell that doesn’t appear on the druid spell list, the spell is nonetheless a druid spell for you."
    ],
    "url": "http://www.dnd5eapi.co/api/features/119"
  },
  {
    "index": 120,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {},
    "name": "Wild Shape (CR 1 or below)",
    "level": 8,
    "desc": [
      "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.",
      "Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.",
      "You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.",
      "While you are transformed, the following rules apply:",
      "• Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.",
      "• When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.",
      "• You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you've already cast.",
      "• You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.",
      "• You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the GM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form."
    ],
    "url": "http://www.dnd5eapi.co/api/features/120"
  },
  {
    "index": 121,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {},
    "name": "Ability Score Improvement 2",
    "level": 8,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/121"
  },
  {
    "index": 122,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {
      "name": "Land",
      "url": "http://www.dnd5eapi.co/api/subclasses/4"
    },
    "name": "Circle Spells 4",
    "level": 9,
    "desc": [
      "Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid.",
      "Choose that land—arctic, coast, desert, forest, grassland, mountain, or swamp—and consult the associated list of spells.",
      "Once you gain access to a circle spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day. If you gain access to a spell that doesn’t appear on the druid spell list, the spell is nonetheless a druid spell for you."
    ],
    "url": "http://www.dnd5eapi.co/api/features/122"
  },
  {
    "index": 123,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {
      "name": "Land",
      "url": "http://www.dnd5eapi.co/api/subclasses/4"
    },
    "name": "Nature's Ward",
    "level": 10,
    "desc": [
      "When you reach 10th level, you can't be charmed or frightened by elementals or fey, and you are immune to poison and disease."
    ],
    "url": "http://www.dnd5eapi.co/api/features/123"
  },
  {
    "index": 124,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {},
    "name": "Ability Score Improvement 3",
    "level": 12,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/124"
  },
  {
    "index": 125,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {
      "name": "Land",
      "url": "http://www.dnd5eapi.co/api/subclasses/4"
    },
    "name": "Nature's Sanctuary",
    "level": 14,
    "desc": [
      "When you reach 14th level, creatures of the natural world sense your connection to nature and become hesitant to attack you. When a beast or plant creature attacks you, that creature must make a Wisdom saving throw against your druid spell save DC. On a failed save, the creature must choose a different target, or the attack automatically misses. On a successful save, the creature is immune to this effect for 24 hours. The creature is aware of this effect before it makes its attack against you."
    ],
    "url": "http://www.dnd5eapi.co/api/features/125"
  },
  {
    "index": 126,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {},
    "name": "Ability Score Improvement 4",
    "level": 16,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/126"
  },
  {
    "index": 127,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {},
    "name": "Timeless Body",
    "level": 18,
    "desc": [
      "Starting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year."
    ],
    "url": "http://www.dnd5eapi.co/api/features/127"
  },
  {
    "index": 128,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {},
    "name": "Beast Spells",
    "level": 18,
    "desc": [
      "Beginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren't able to provide material components."
    ],
    "url": "http://www.dnd5eapi.co/api/features/128"
  },
  {
    "index": 129,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {},
    "name": "Ability Score Improvement 5",
    "level": 19,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/129"
  },
  {
    "index": 130,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/4",
      "name": "Druid"
    },
    "subclass": {},
    "name": "Archdruid",
    "level": 20,
    "desc": [
      "At 20th level, you can use your Wild Shape an unlimited number of times.",
      "Additionally, you can ignore the verbal and somatic components of your druid spells, as well as any material components that lack a cost and aren't consumed by a spell. You gain this benefit in both your normal shape and your beast shape from Wild Shape."
    ],
    "url": "http://www.dnd5eapi.co/api/features/130"
  },
  {
    "index": 131,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {},
    "name": "Choose: Fighting Style",
    "level": 1,
    "desc": [
      "You adopt a particular style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again."
    ],
    "choice": {
      "choose": 1,
      "type": "feature",
      "from": [
        {
          "url": "http://www.dnd5eapi.co/api/features/132",
          "name": "Fighting Style: Archery"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/133",
          "name": "Fighting Style: Defense"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/134",
          "name": "Fighting Style: Dueling"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/135",
          "name": "Fighting Style: Great Weapon Fighting"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/136",
          "name": "Fighting Style: Protection"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/137",
          "name": "Fighting Style: Two-Weapon Fighting"
        }
      ]
    },
    "url": "http://www.dnd5eapi.co/api/features/131"
  },
  {
    "index": 132,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {},
    "name": "Fighting Style: Archery",
    "level": 1,
    "desc": [
      "You gain a +2 bonus to attack rolls you make with ranged weapons."
    ],
    "group": "Fighting Style (Fighter)",
    "url": "http://www.dnd5eapi.co/api/features/132"
  },
  {
    "index": 133,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {},
    "name": "Fighting Style: Defense",
    "level": 1,
    "desc": [
      "While you are wearing armor, you gain a +1 bonus to AC."
    ],
    "group": "Fighting Style (Fighter)",
    "url": "http://www.dnd5eapi.co/api/features/133"
  },
  {
    "index": 134,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {},
    "name": "Fighting Style: Dueling",
    "level": 1,
    "desc": [
      "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon."
    ],
    "group": "Fighting Style (Fighter)",
    "url": "http://www.dnd5eapi.co/api/features/134"
  },
  {
    "index": 135,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {},
    "name": "Fighting Style: Great Weapon Fighting",
    "level": 1,
    "desc": [
      "When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit."
    ],
    "group": "Fighting Style (Fighter)",
    "url": "http://www.dnd5eapi.co/api/features/135"
  },
  {
    "index": 136,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {},
    "name": "Fighting Style: Protection",
    "level": 1,
    "desc": [
      "When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield."
    ],
    "group": "Fighting Style (Fighter)",
    "url": "http://www.dnd5eapi.co/api/features/136"
  },
  {
    "index": 137,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {},
    "name": "Fighting Style: Two-Weapon Fighting",
    "level": 1,
    "desc": [
      "When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack."
    ],
    "group": "Fighting Style (Fighter)",
    "url": "http://www.dnd5eapi.co/api/features/137"
  },
  {
    "index": 138,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {},
    "name": "Second Wind",
    "level": 1,
    "desc": [
      "You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again."
    ],
    "url": "http://www.dnd5eapi.co/api/features/138"
  },
  {
    "index": 139,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {},
    "name": "Action Surge (1 use)",
    "level": 2,
    "desc": [
      "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action.",
      "Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn."
    ],
    "url": "http://www.dnd5eapi.co/api/features/139"
  },
  {
    "index": 140,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {},
    "name": "Martial Archetype",
    "level": 3,
    "desc": [
      "At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques. Choose Champion, Battle Master, or Eldritch Knight, all detailed at the end of the class description. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/140"
  },
  {
    "index": 141,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/5",
      "name": "Champion"
    },
    "name": "Improved Critical",
    "level": 3,
    "desc": [
      "Beginning when you choose this archetype at 3rd level, your weapon attacks score a critical hit on a roll of 19 or 20."
    ],
    "url": "http://www.dnd5eapi.co/api/features/141"
  },
  {
    "index": 142,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {},
    "name": "Ability Score Improvement 1",
    "level": 4,
    "desc": [
      "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/142"
  },
  {
    "index": 143,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {},
    "name": "Extra Attack (1)",
    "level": 5,
    "desc": [
      "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class."
    ],
    "url": "http://www.dnd5eapi.co/api/features/143"
  },
  {
    "index": 144,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {},
    "name": "Ability Score Improvement 2",
    "level": 6,
    "desc": [
      "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/144"
  },
  {
    "index": 145,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/5",
      "name": "Champion"
    },
    "name": "Remarkable Athlete",
    "level": 7,
    "desc": [
      "Starting at 7th level, you can add half your proficiency bonus (round up) to any Strength, Dexterity, or Constitution check you make that doesn’t already use your proficiency bonus. In addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier."
    ],
    "url": "http://www.dnd5eapi.co/api/features/145"
  },
  {
    "index": 146,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {},
    "name": "Ability Score Improvement 3",
    "level": 8,
    "desc": [
      "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/146"
  },
  {
    "index": 147,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {},
    "name": "Indomitable (1 use)",
    "level": 9,
    "desc": [
      "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can’t use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/147"
  },
  {
    "index": 148,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/5",
      "name": "Champion"
    },
    "name": "Choose: Additional Fighting Style",
    "level": 10,
    "desc": [
      "At 10th level, you can choose a second option from the Fighting Style class feature. Superior Critical Starting at 15th level, your weapon attacks score a critical hit on a roll of 18–20."
    ],
    "choice": {
      "choose": 1,
      "type": "feature",
      "from": [
        {
          "url": "http://www.dnd5eapi.co/api/features/132",
          "name": "Fighting Style: Archery"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/133",
          "name": "Fighting Style: Defense"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/134",
          "name": "Fighting Style: Dueling"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/135",
          "name": "Fighting Style: Great Weapon Fighting"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/136",
          "name": "Fighting Style: Protection"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/137",
          "name": "Fighting Style: Two-Weapon Fighting"
        }
      ]
    },
    "url": "http://www.dnd5eapi.co/api/features/148"
  },
  {
    "index": 149,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {},
    "name": "Extra Attack (2)",
    "level": 11,
    "desc": [
      "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class."
    ],
    "url": "http://www.dnd5eapi.co/api/features/149"
  },
  {
    "index": 150,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {},
    "name": "Ability Score Improvement 4",
    "level": 12,
    "desc": [
      "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/150"
  },
  {
    "index": 151,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {},
    "name": "Indomitable (2 uses)",
    "level": 13,
    "desc": [
      "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can’t use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/151"
  },
  {
    "index": 152,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {},
    "name": "Ability Score Improvement 5",
    "level": 14,
    "desc": [
      "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/152"
  },
  {
    "index": 153,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/5",
      "name": "Champion"
    },
    "name": "Superior Critical",
    "level": 15,
    "desc": [
      "Starting at 15th level, your weapon attacks score a critical hit on a roll of 18–20."
    ],
    "url": "http://www.dnd5eapi.co/api/features/153"
  },
  {
    "index": 154,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {},
    "name": "Ability Score Improvement 6",
    "level": 16,
    "desc": [
      "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/154"
  },
  {
    "index": 155,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {},
    "name": "Action Surge (2 uses)",
    "level": 2,
    "desc": [
      "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action.",
      "Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn."
    ],
    "url": "http://www.dnd5eapi.co/api/features/155"
  },
  {
    "index": 156,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {},
    "name": "Indomitable (3 uses)",
    "level": 17,
    "desc": [
      "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can’t use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/156"
  },
  {
    "index": 157,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/5",
      "name": "Champion"
    },
    "name": "Survivor",
    "level": 18,
    "desc": [
      "At 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don’t gain this benefit if you have 0 hit points."
    ],
    "url": "http://www.dnd5eapi.co/api/features/157"
  },
  {
    "index": 158,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {},
    "name": "Ability Score Improvement 7",
    "level": 19,
    "desc": [
      "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/158"
  },
  {
    "index": 159,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/5",
      "name": "Fighter"
    },
    "subclass": {},
    "name": "Extra Attack (3)",
    "level": 20,
    "desc": [
      "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class."
    ],
    "url": "http://www.dnd5eapi.co/api/features/159"
  },
  {
    "index": 160,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {},
    "name": "Unarmored Defense",
    "level": 1,
    "desc": [
      "Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier."
    ],
    "url": "http://www.dnd5eapi.co/api/features/160"
  },
  {
    "index": 161,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {},
    "name": "Martial Arts",
    "level": 1,
    "desc": [
      "At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don’t have the two- handed or heavy property.",
      "You gain the following benefits while you are unarmed or wielding only monk weapons and you aren’t wearing armor or wielding a shield:",
      "• You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.",
      "• You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of Table: The Monk.",
      "• When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven’t already taken a bonus action this turn.",
      "Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon."
    ],
    "url": "http://www.dnd5eapi.co/api/features/161"
  },
  {
    "index": 162,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {},
    "name": "Ki",
    "level": 2,
    "desc": [
      "Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of Table: The Monk.",
      "You can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.",
      "When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.",
      "Some of your ki features require your target to make a saving throw to resist the feature’s effects. The saving throw DC is calculated as follows:",
      "Ki save DC = 8 + your proficiency bonus + your Wisdom modifier"
    ],
    "url": "http://www.dnd5eapi.co/api/features/162"
  },
  {
    "index": 163,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {},
    "name": "Flurry of Blows",
    "level": 2,
    "desc": [
      "Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action."
    ],
    "url": "http://www.dnd5eapi.co/api/features/163"
  },
  {
    "index": 164,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {},
    "name": "Patient Defense",
    "level": 2,
    "desc": [
      "You can spend 1 ki point to take the Dodge action as a bonus action on your turn."
    ],
    "url": "http://www.dnd5eapi.co/api/features/164"
  },
  {
    "index": 165,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {},
    "name": "Step of the Wind",
    "level": 2,
    "desc": [
      "You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn."
    ],
    "url": "http://www.dnd5eapi.co/api/features/165"
  },
  {
    "index": 166,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {},
    "name": "Unarmored Movement 1",
    "level": 2,
    "desc": [
      "Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in Table: The Monk.",
      "At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move."
    ],
    "url": "http://www.dnd5eapi.co/api/features/166"
  },
  {
    "index": 167,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {},
    "name": "Monastic Tradition",
    "level": 3,
    "desc": [
      "When you reach 3rd level, you commit yourself to a monastic tradition: the Way of the Open Hand, the Way of Shadow, or the Way of the Four Elements, all detailed at the end of the class description. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/167"
  },
  {
    "index": 168,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {},
    "name": "Deflect Missiles",
    "level": 3,
    "desc": [
      "Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level.",
      "If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack, which has a normal range of 20 feet and a long range of 60 feet."
    ],
    "url": "http://www.dnd5eapi.co/api/features/168"
  },
  {
    "index": 169,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/6",
      "name": "Open Hand"
    },
    "name": "Open Hand Technique",
    "level": 3,
    "desc": [
      "Starting when you choose this tradition at 3rd level, you can manipulate your enemy’s ki when you harness your own. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of the following effects on that target:",
      "• It must succeed on a Dexterity saving throw or be knocked prone.",
      "• It must make a Strength saving throw. If it fails, you can push it up to 15 feet away from you.",
      "• It can’t take reactions until the end of your next turn."
    ],
    "url": "http://www.dnd5eapi.co/api/features/169"
  },
  {
    "index": 170,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {},
    "name": "Ability Score Improvement 1",
    "level": 4,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/170"
  },
  {
    "index": 171,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {},
    "name": "Slow Fall",
    "level": 4,
    "desc": [
      "Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/171"
  },
  {
    "index": 172,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {},
    "name": "Extra Attack",
    "level": 5,
    "desc": [
      "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
    ],
    "url": "http://www.dnd5eapi.co/api/features/172"
  },
  {
    "index": 173,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {},
    "name": "Stunning Strike",
    "level": 5,
    "desc": [
      "Starting at 5th level, you can interfere with the flow of ki in an opponent’s body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn."
    ],
    "url": "http://www.dnd5eapi.co/api/features/173"
  },
  {
    "index": 174,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {},
    "name": "Ki Empowered Strikes",
    "level": 6,
    "desc": [
      "Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
    ],
    "url": "http://www.dnd5eapi.co/api/features/174"
  },
  {
    "index": 175,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/6",
      "name": "Open Hand"
    },
    "name": "Wholeness of Body",
    "level": 6,
    "desc": [
      "At 6th level, you gain the ability to heal yourself. As an action, you can regain hit points equal to three times your monk level. You must finish a long rest before you can use this feature again."
    ],
    "url": "http://www.dnd5eapi.co/api/features/175"
  },
  {
    "index": 176,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {},
    "name": "Evasion",
    "level": 7,
    "desc": [
      "At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon’s lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
    ],
    "url": "http://www.dnd5eapi.co/api/features/176"
  },
  {
    "index": 177,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {},
    "name": "Stillness of Mind",
    "level": 7,
    "desc": [
      "Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened."
    ],
    "url": "http://www.dnd5eapi.co/api/features/177"
  },
  {
    "index": 178,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {},
    "name": "Ability Score Improvement 2",
    "level": 8,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/178"
  },
  {
    "index": 179,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {},
    "name": "Unarmored Movement 2",
    "level": 9,
    "desc": [
      "Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in Table: The Monk.",
      "At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move."
    ],
    "url": "http://www.dnd5eapi.co/api/features/179"
  },
  {
    "index": 180,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {},
    "name": "Purity of Body",
    "level": 10,
    "desc": [
      "At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison."
    ],
    "url": "http://www.dnd5eapi.co/api/features/180"
  },
  {
    "index": 181,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/6",
      "name": "Open Hand"
    },
    "name": "Tranquility",
    "level": 11,
    "desc": [
      "Beginning at 11th level, you can enter a special meditation that surrounds you with an aura of peace. At the end of a long rest, you gain the effect of a sanctuary spell that lasts until the start of your next long rest (the spell can end early as normal). The saving throw DC for the spell equals 8 + your Wisdom modifier + your proficiency bonus."
    ],
    "url": "http://www.dnd5eapi.co/api/features/181"
  },
  {
    "index": 182,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {},
    "name": "Ability Score Improvement 3",
    "level": 12,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/182"
  },
  {
    "index": 183,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {},
    "name": "Tongue of the Sun and Moon",
    "level": 13,
    "desc": [
      "Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say."
    ],
    "url": "http://www.dnd5eapi.co/api/features/183"
  },
  {
    "index": 184,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {},
    "name": "Diamond Soul",
    "level": 14,
    "desc": [
      "Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws.",
      "Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result."
    ],
    "url": "http://www.dnd5eapi.co/api/features/184"
  },
  {
    "index": 185,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {},
    "name": "Timeless Body",
    "level": 15,
    "desc": [
      "At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can’t be aged magically. You can still die of old age, however. In addition, you no longer need food or water."
    ],
    "url": "http://www.dnd5eapi.co/api/features/185"
  },
  {
    "index": 186,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {},
    "name": "Ability Score Improvement 4",
    "level": 16,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/186"
  },
  {
    "index": 187,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/6",
      "name": "Open Hand"
    },
    "name": "Quivering Palm",
    "level": 17,
    "desc": [
      "At 17th level, you gain the ability to set up lethal vibrations in someone’s body. When you hit a creature with an unarmed strike, you can spend 3 ki points to start these imperceptible vibrations, which last for a number of days equal to your monk level. The vibrations are harmless unless you use your action to end them. To do so, you and the target must be on the same plane of existence. When you use this action, the creature must make a Constitution saving throw. If it fails, it is reduced to 0 hit points. If it succeeds, it takes 10d10 necrotic damage.",
      "You can have only one creature under the effect of this feature at a time. You can choose to end the vibrations harmlessly without using an action."
    ],
    "url": "http://www.dnd5eapi.co/api/features/187"
  },
  {
    "index": 188,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {},
    "name": "Empty Body",
    "level": 18,
    "desc": [
      "Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.",
      "Additionally, you can spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can’t take any other creatures with you."
    ],
    "url": "http://www.dnd5eapi.co/api/features/188"
  },
  {
    "index": 189,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {},
    "name": "Ability Score Improvement 5",
    "level": 19,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/189"
  },
  {
    "index": 190,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/6",
      "name": "Monk"
    },
    "subclass": {},
    "name": "Perfect Self",
    "level": 20,
    "desc": [
      "At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points."
    ],
    "url": "http://www.dnd5eapi.co/api/features/190"
  },
  {
    "index": 191,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {},
    "name": "Divine Sense",
    "level": 1,
    "desc": [
      "The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity. Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell.",
      "You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses."
    ],
    "url": "http://www.dnd5eapi.co/api/features/191"
  },
  {
    "index": 192,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {},
    "name": "Lay on Hands",
    "level": 1,
    "desc": [
      "Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level × 5.",
      "As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.",
      "Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.",
      "This feature has no effect on undead and constructs."
    ],
    "url": "http://www.dnd5eapi.co/api/features/192"
  },
  {
    "index": 193,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {},
    "name": "Choose: Fighting Style",
    "level": 2,
    "desc": [
      "At 2nd level, you adopt a style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again."
    ],
    "choice": {
      "choose": 1,
      "type": "feature",
      "from": [
        {
          "url": "http://www.dnd5eapi.co/api/features/194",
          "name": "Fighting Style: Defense"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/195",
          "name": "Fighting Style: Dueling"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/196",
          "name": "Fighting Style: Great Weapon Fighting"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/197",
          "name": "Fighting Style: Protection"
        }
      ]
    },
    "url": "http://www.dnd5eapi.co/api/features/193"
  },
  {
    "index": 194,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {},
    "name": "Fighting Style: Defense",
    "level": 2,
    "desc": [
      "While you are wearing armor, you gain a +1 bonus to AC."
    ],
    "group": "Fighting Style (Paladin)",
    "url": "http://www.dnd5eapi.co/api/features/194"
  },
  {
    "index": 195,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {},
    "name": "Fighting Style: Dueling",
    "level": 2,
    "desc": [
      "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon."
    ],
    "group": "Fighting Style (Paladin)",
    "url": "http://www.dnd5eapi.co/api/features/195"
  },
  {
    "index": 196,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {},
    "name": "Fighting Style: Great Weapon Fighting",
    "level": 2,
    "desc": [
      "When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll. The weapon must have the two-handed or versatile property for you to gain this benefit."
    ],
    "group": "Fighting Style (Paladin)",
    "url": "http://www.dnd5eapi.co/api/features/196"
  },
  {
    "index": 197,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {},
    "name": "Fighting Style: Protection",
    "level": 2,
    "desc": [
      "When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield."
    ],
    "group": "Fighting Style (Paladin)",
    "url": "http://www.dnd5eapi.co/api/features/197"
  },
  {
    "index": 198,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {},
    "name": "Spellcasting",
    "level": 2,
    "desc": [
      "By 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does."
    ],
    "reference": "http://www.dnd5eapi.co/api/spellcasting/paladin",
    "url": "http://www.dnd5eapi.co/api/features/198"
  },
  {
    "index": 199,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {},
    "name": "Divine Smite",
    "level": 2,
    "desc": [
      "Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon’s damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend."
    ],
    "url": "http://www.dnd5eapi.co/api/features/199"
  },
  {
    "index": 200,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {},
    "name": "Divine Health",
    "level": 3,
    "desc": [
      "By 3rd level, the divine magic flowing through you makes you immune to disease."
    ],
    "url": "http://www.dnd5eapi.co/api/features/200"
  },
  {
    "index": 201,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {},
    "name": "Sacred Oath",
    "level": 3,
    "desc": [
      "When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose the Oath of Devotion, the Oath of the Ancients, or the Oath of Vengeance, all detailed at the end of the class description.",
      "Your choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/201"
  },
  {
    "index": 202,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {},
    "name": "Oath Spells",
    "level": 3,
    "desc": [
      "Each oath has a list of associated spells. You gain access to these spells at the levels specified in the oath description. Once you gain access to an oath spell, you always have it prepared. Oath spells don’t count against the number of spells you can prepare each day.",
      "If you gain an oath spell that doesn’t appear on the paladin spell list, the spell is nonetheless a paladin spell for you."
    ],
    "url": "http://www.dnd5eapi.co/api/features/202"
  },
  {
    "index": 203,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {},
    "name": "Channel Divinity",
    "level": 3,
    "desc": [
      "Your oath allows you to channel divine energy to fuel magical effects. Each Channel Divinity option provided by your oath explains how to use it.",
      "When you use your Channel Divinity, you choose which option to use. You must then finish a short or long rest to use your Channel Divinity again.",
      "Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your paladin spell save DC."
    ],
    "url": "http://www.dnd5eapi.co/api/features/203"
  },
  {
    "index": 204,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/7",
      "name": "Devotion"
    },
    "name": "Channel Divinity: Sacred Weapon",
    "level": 3,
    "desc": [
      "As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity. For 1 minute, you add your Charisma modifier to attack rolls made with that weapon (with a minimum bonus of +1). The weapon also emits bright light in a 20-foot radius and dim light 20 feet beyond that. If the weapon is not already magical, it becomes magical for the duration.",
      "You can end this effect on your turn as part of any other action. If you are no longer holding or carrying this weapon, or if you fall unconscious, this effect ends."
    ],
    "url": "http://www.dnd5eapi.co/api/features/204"
  },
  {
    "index": 205,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/7",
      "name": "Devotion"
    },
    "name": "Channel Divinity: Turn the Unholy",
    "level": 3,
    "desc": [
      "As an action, you present your holy symbol and speak a prayer censuring fiends and undead, using your Channel Divinity. Each fiend or undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage.",
      "A turned creature must spend its turns trying to move as far away from you as it can, and it can’t willingly move to a space within 30 feet of you. It also can’t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the Dodge action."
    ],
    "url": "http://www.dnd5eapi.co/api/features/205"
  },
  {
    "index": 206,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {},
    "name": "Ability Score Improvement 1",
    "level": 4,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/206"
  },
  {
    "index": 207,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {},
    "name": "Extra Attack",
    "level": 5,
    "desc": [
      "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
    ],
    "url": "http://www.dnd5eapi.co/api/features/207"
  },
  {
    "index": 208,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {},
    "name": "Aura of Protection",
    "level": 6,
    "desc": [
      "Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus.",
      "At 18th level, the range of this aura increases to 30 feet."
    ],
    "url": "http://www.dnd5eapi.co/api/features/208"
  },
  {
    "index": 209,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/7",
      "name": "Devotion"
    },
    "name": "Aura of Devotion",
    "level": 7,
    "desc": [
      "Starting at 7th level, you and friendly creatures within 10 feet of you can’t be charmed while you are conscious.",
      "At 18th level, the range of this aura increases to 30 feet."
    ],
    "url": "http://www.dnd5eapi.co/api/features/209"
  },
  {
    "index": 210,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {},
    "name": "Ability Score Improvement 2",
    "level": 8,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/210"
  },
  {
    "index": 211,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {},
    "name": "Aura of Courage",
    "level": 10,
    "desc": [
      "Starting at 10th level, you and friendly creatures within 10 feet of you can’t be frightened while you are conscious.",
      "At 18th level, the range of this aura increases to 30 feet."
    ],
    "url": "http://www.dnd5eapi.co/api/features/211"
  },
  {
    "index": 212,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {},
    "name": "Improved Divine Smite",
    "level": 11,
    "desc": [
      "By 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage. If you also use your Divine Smite with an attack, you add this damage to the extra damage of your Divine Smite."
    ],
    "url": "http://www.dnd5eapi.co/api/features/212"
  },
  {
    "index": 213,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {},
    "name": "Ability Score Improvement 3",
    "level": 12,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/213"
  },
  {
    "index": 214,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {},
    "name": "Cleansing Touch",
    "level": 14,
    "desc": [
      "Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch.",
      "You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest."
    ],
    "url": "http://www.dnd5eapi.co/api/features/214"
  },
  {
    "index": 215,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/7",
      "name": "Devotion"
    },
    "name": "Purity of Spirit",
    "level": 15,
    "desc": [
      "Beginning at 15th level, you are always under the effects of a protection from evil and good spell."
    ],
    "url": "http://www.dnd5eapi.co/api/features/215"
  },
  {
    "index": 216,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {},
    "name": "Ability Score Improvement 4",
    "level": 16,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/216"
  },
  {
    "index": 217,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {},
    "name": "Aura improvements",
    "level": 18,
    "desc": [
      "At 18th level, the range of your auras increase to 30 feet."
    ],
    "url": "http://www.dnd5eapi.co/api/features/217"
  },
  {
    "index": 218,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {},
    "name": "Ability Score Improvement 5",
    "level": 19,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/218"
  },
  {
    "index": 219,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/7",
      "name": "Devotion"
    },
    "name": "Nimbus",
    "level": 20,
    "desc": [
      "At 20th level, as an action, you can emanate an aura of sunlight. For 1 minute, bright light shines from you in a 30-foot radius, and dim light shines 30 feet beyond that.",
      "Whenever an enemy creature starts its turn in the bright light, the creature takes 10 radiant damage.",
      "In addition, for the duration, you have advantage on saving throws against spells cast by fiends or undead."
    ],
    "url": "http://www.dnd5eapi.co/api/features/219"
  },
  {
    "index": 220,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {},
    "name": "Favored Enemy (1 type)",
    "level": 1,
    "desc": [
      "Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.",
      "Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.",
      "You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.",
      "When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.",
      "You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures."
    ],
    "url": "http://www.dnd5eapi.co/api/features/220"
  },
  {
    "index": 221,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {},
    "name": "Natural Explorer (1 terrain type)",
    "level": 1,
    "desc": [
      "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, or swamp. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in.",
      "While traveling for an hour or more in your favored terrain, you gain the following benefits:",
      "• Difficult terrain doesn’t slow your group’s travel.",
      "• Your group can’t become lost except by magical means.",
      "• Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.",
      "• If you are traveling alone, you can move stealthily at a normal pace.",
      "• When you forage, you find twice as much food as you normally would.",
      "• While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.",
      "You choose additional favored terrain types at 6th and 10th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/221"
  },
  {
    "index": 222,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {},
    "name": "Choose: Fighting Style",
    "level": 2,
    "desc": [
      "At 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again."
    ],
    "choice": {
      "choose": 1,
      "type": "feature",
      "from": [
        {
          "url": "http://www.dnd5eapi.co/api/features/223",
          "name": "Fighting Style: Archery"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/224",
          "name": "Fighting Style: Defense"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/225",
          "name": "Fighting Style: Dueling"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/226",
          "name": "Fighting Style: Two-Weapon Fighting"
        }
      ]
    },
    "url": "http://www.dnd5eapi.co/api/features/222"
  },
  {
    "index": 223,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {},
    "name": "Fighting Style: Archery",
    "level": 2,
    "desc": [
      "You gain a +2 bonus to attack rolls you make with ranged weapons."
    ],
    "group": "Fighting Style (Ranger)",
    "url": "http://www.dnd5eapi.co/api/features/223"
  },
  {
    "index": 224,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {},
    "name": "Fighting Style: Defense",
    "level": 2,
    "desc": [
      "While you are wearing armor, you gain a +1 bonus to AC."
    ],
    "group": "Fighting Style (Ranger)",
    "url": "http://www.dnd5eapi.co/api/features/224"
  },
  {
    "index": 225,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {},
    "name": "Fighting Style: Dueling",
    "level": 2,
    "desc": [
      "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon."
    ],
    "group": "Fighting Style (Ranger)",
    "url": "http://www.dnd5eapi.co/api/features/225"
  },
  {
    "index": 226,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {},
    "name": "Fighting Style: Two-Weapon Fighting",
    "level": 2,
    "desc": [
      "When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack."
    ],
    "group": "Fighting Style (Ranger)",
    "url": "http://www.dnd5eapi.co/api/features/226"
  },
  {
    "index": 227,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {},
    "name": "Spellcasting",
    "level": 2,
    "desc": [
      "By the time you reach 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does."
    ],
    "reference": "http://www.dnd5eapi.co/api/spellcasting/ranger",
    "url": "http://www.dnd5eapi.co/api/features/227"
  },
  {
    "index": 228,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {},
    "name": "Ranger Archetype",
    "level": 3,
    "desc": [
      "At 3rd level, you choose an archetype that you strive to emulate: Hunter or Beast Master, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/228"
  },
  {
    "index": 229,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/8",
      "name": "Hunter"
    },
    "name": "Choose: Hunter's Prey",
    "level": 3,
    "desc": [
      "At 3rd level, you gain one of the following features of your choice.",
      "Colossus Slayer",
      "Giant Killer",
      "Horde Breaker"
    ],
    "choice": {
      "choose": 1,
      "type": "feature",
      "from": [
        {
          "url": "http://www.dnd5eapi.co/api/features/230",
          "name": "Hunter's Prey: Colossus Slayer"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/231",
          "name": "Hunter's Prey: Giant Killer"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/232",
          "name": "Hunter's Prey: Horde Breaker"
        }
      ]
    },
    "url": "http://www.dnd5eapi.co/api/features/229"
  },
  {
    "index": 230,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/8",
      "name": "Hunter"
    },
    "name": "Hunter's Prey: Colossus Slayer",
    "level": 3,
    "desc": [
      "Your tenacity can wear down the most potent foes. When you hit a creature with a weapon attack, the creature takes an extra 1d8 damage if it’s below its hit point maximum. You can deal this extra damage only once per turn."
    ],
    "group": "Hunter's Prey",
    "url": "http://www.dnd5eapi.co/api/features/230"
  },
  {
    "index": 231,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/8",
      "name": "Hunter"
    },
    "name": "Hunter's Prey: Giant Killer",
    "level": 3,
    "desc": [
      "When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack that creature immediately after its attack, provided that you can see the creature."
    ],
    "group": "Hunter's Prey",
    "url": "http://www.dnd5eapi.co/api/features/231"
  },
  {
    "index": 232,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/8",
      "name": "Hunter"
    },
    "name": "Hunter's Prey: Horde Breaker",
    "level": 3,
    "desc": [
      "Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon."
    ],
    "group": "Hunter's Prey",
    "url": "http://www.dnd5eapi.co/api/features/232"
  },
  {
    "index": 233,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {},
    "name": "Primeval Awareness",
    "level": 3,
    "desc": [
      "Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn’t reveal the creatures’ location or number."
    ],
    "url": "http://www.dnd5eapi.co/api/features/233"
  },
  {
    "index": 234,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {},
    "name": "Ability Score Improvement 1",
    "level": 4,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/234"
  },
  {
    "index": 235,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {},
    "name": "Extra Attack",
    "level": 5,
    "desc": [
      "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
    ],
    "url": "http://www.dnd5eapi.co/api/features/235"
  },
  {
    "index": 236,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {},
    "name": "Favored Enemy (2 types)",
    "level": 6,
    "desc": [
      "Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.",
      "Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.",
      "You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.",
      "When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.",
      "You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures."
    ],
    "url": "http://www.dnd5eapi.co/api/features/236"
  },
  {
    "index": 237,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {},
    "name": "Natural Explorer (2 terrain types)",
    "level": 6,
    "desc": [
      "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, or swamp. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in.",
      "While traveling for an hour or more in your favored terrain, you gain the following benefits:",
      "• Difficult terrain doesn’t slow your group’s travel.",
      "• Your group can’t become lost except by magical means.",
      "• Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.",
      "• If you are traveling alone, you can move stealthily at a normal pace.",
      "• When you forage, you find twice as much food as you normally would.",
      "• While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.",
      "You choose additional favored terrain types at 6th and 10th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/237"
  },
  {
    "index": 238,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/8",
      "name": "Hunter"
    },
    "name": "Choose: Defensive Tactics",
    "level": 7,
    "desc": [
      "At 7th level, you gain one of the following features of your choice.",
      "Escape the Horde",
      "Multiattack Defense",
      "Steel Will"
    ],
    "choice": {
      "choose": 1,
      "type": "feature",
      "from": [
        {
          "url": "http://www.dnd5eapi.co/api/features/239",
          "name": "Defensive Tactics: Escape the Horde"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/240",
          "name": "Defensive Tactics: Multiattack Defense"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/241",
          "name": "Defensive Tactics: Steel Will"
        }
      ]
    },
    "url": "http://www.dnd5eapi.co/api/features/238"
  },
  {
    "index": 239,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/8",
      "name": "Hunter"
    },
    "name": "Defensive Tactics: Escape the Horde",
    "level": 7,
    "desc": [
      "Opportunity attacks against you are made with disadvantage."
    ],
    "group": "Defensive Tactics",
    "url": "http://www.dnd5eapi.co/api/features/239"
  },
  {
    "index": 240,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/8",
      "name": "Hunter"
    },
    "name": "Defensive Tactics: Multiattack Defense",
    "level": 7,
    "desc": [
      "When a creature hits you with an attack, you gain a +4 bonus to AC against all subsequent attacks made by that creature for the rest of the turn."
    ],
    "group": "Defensive Tactics",
    "url": "http://www.dnd5eapi.co/api/features/240"
  },
  {
    "index": 241,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/8",
      "name": "Hunter"
    },
    "name": "Defensive Tactics: Steel Will",
    "level": 7,
    "desc": [
      "You have advantage on saving throws against being frightened."
    ],
    "group": "Defensive Tactics",
    "url": "http://www.dnd5eapi.co/api/features/241"
  },
  {
    "index": 242,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {},
    "name": "Ability Score Improvement 2",
    "level": 8,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/242"
  },
  {
    "index": 243,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {},
    "name": "Land’s Stride",
    "level": 8,
    "desc": [
      "Starting at 8th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.",
      "In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell."
    ],
    "url": "http://www.dnd5eapi.co/api/features/243"
  },
  {
    "index": 244,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {},
    "name": "Natural Explorer (3 terrain types)",
    "level": 10,
    "desc": [
      "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, or swamp. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in.",
      "While traveling for an hour or more in your favored terrain, you gain the following benefits:",
      "• Difficult terrain doesn’t slow your group’s travel.",
      "• Your group can’t become lost except by magical means.",
      "• Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.",
      "• If you are traveling alone, you can move stealthily at a normal pace.",
      "• When you forage, you find twice as much food as you normally would.",
      "• While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.",
      "You choose additional favored terrain types at 6th and 10th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/244"
  },
  {
    "index": 245,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {},
    "name": "Hide in Plain Sight",
    "level": 10,
    "desc": [
      "Starting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.",
      "Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit."
    ],
    "url": "http://www.dnd5eapi.co/api/features/245"
  },
  {
    "index": 246,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/8",
      "name": "Hunter"
    },
    "name": "Choose: Multiattack",
    "level": 11,
    "desc": [
      "At 11th level, you gain one of the following features of your choice.",
      "Volley",
      "Whirlwind Attack"
    ],
    "choice": {
      "choose": 1,
      "type": "feature",
      "from": [
        {
          "url": "http://www.dnd5eapi.co/api/features/247",
          "name": "Multiattack: Volley"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/248",
          "name": "Multiattack: Whirlwind Attack"
        }
      ]
    },
    "url": "http://www.dnd5eapi.co/api/features/246"
  },
  {
    "index": 247,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/8",
      "name": "Hunter"
    },
    "name": "Multiattack: Volley",
    "level": 11,
    "desc": [
      "You can use your action to make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon’s range. You must have ammunition for each target, as normal, and you make a separate attack roll for each target."
    ],
    "group": "Multiattack",
    "url": "http://www.dnd5eapi.co/api/features/247"
  },
  {
    "index": 248,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/8",
      "name": "Hunter"
    },
    "name": "Multiattack: Whirlwind Attack",
    "level": 11,
    "desc": [
      "You can use your action to make a melee attack against any number of creatures within 5 feet of you, with a separate attack roll for each target."
    ],
    "group": "Multiattack",
    "url": "http://www.dnd5eapi.co/api/features/248"
  },
  {
    "index": 249,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {},
    "name": "Ability Score Improvement 4",
    "level": 12,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/249"
  },
  {
    "index": 250,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {},
    "name": "Favored Enemy (3 enemies)",
    "level": 14,
    "desc": [
      "Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.",
      "Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.",
      "You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.",
      "When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.",
      "You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures."
    ],
    "url": "http://www.dnd5eapi.co/api/features/250"
  },
  {
    "index": 251,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {},
    "name": "Vanish",
    "level": 14,
    "desc": [
      "Starting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can’t be tracked by nonmagical means, unless you choose to leave a trail."
    ],
    "url": "http://www.dnd5eapi.co/api/features/251"
  },
  {
    "index": 252,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/8",
      "name": "Hunter"
    },
    "name": "Choose: Superior Hunter's Defense",
    "level": 15,
    "desc": [
      "At 15th level, you gain one of the following features of your choice.",
      "Evasion",
      "Stand Against the Tide",
      "Uncanny Dodge"
    ],
    "choice": {
      "choose": 1,
      "type": "feature",
      "from": [
        {
          "url": "http://www.dnd5eapi.co/api/features/253",
          "name": "Superior Hunter's Defense: Evasion"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/254",
          "name": "Superior Hunter's Defense: Stand Against the Tide"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/255",
          "name": "Superior Hunter's Defense: Uncanny Dodge"
        }
      ]
    },
    "url": "http://www.dnd5eapi.co/api/features/252"
  },
  {
    "index": 253,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/8",
      "name": "Hunter"
    },
    "name": "Superior Hunter's Defense: Evasion",
    "level": 15,
    "desc": [
      "When you are subjected to an effect, such as a red dragon’s fiery breath or a lightning bolt spell, that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
    ],
    "group": "Superior Hunter's Defense",
    "url": "http://www.dnd5eapi.co/api/features/253"
  },
  {
    "index": 254,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/8",
      "name": "Hunter"
    },
    "name": "Superior Hunter's Defense: Stand Against the Tide",
    "level": 15,
    "desc": [
      "When a hostile creature misses you with a melee attack, you can use your reaction to force that creature to repeat the same attack against another creature (other than itself) of your choice."
    ],
    "group": "Superior Hunter's Defense",
    "url": "http://www.dnd5eapi.co/api/features/254"
  },
  {
    "index": 255,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/8",
      "name": "Hunter"
    },
    "name": "Superior Hunter's Defense: Uncanny Dodge",
    "level": 15,
    "desc": [
      "When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack’s damage against you."
    ],
    "group": "Superior Hunter's Defense",
    "url": "http://www.dnd5eapi.co/api/features/255"
  },
  {
    "index": 256,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {},
    "name": "Ability Score Improvement 4",
    "level": 16,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/256"
  },
  {
    "index": 257,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {},
    "name": "Feral Senses",
    "level": 18,
    "desc": [
      "At 18th level, you gain preternatural senses that help you fight creatures you can’t see. When you attack a creature you can’t see, your inability to see it doesn’t impose disadvantage on your attack rolls against it.",
      "You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn’t hidden from you and you aren’t blinded or deafened."
    ],
    "url": "http://www.dnd5eapi.co/api/features/257"
  },
  {
    "index": 258,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {},
    "name": "Ability Score Improvement 5",
    "level": 19,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/258"
  },
  {
    "index": 259,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "subclass": {},
    "name": "Foe Slayer",
    "level": 20,
    "desc": [
      "At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied."
    ],
    "url": "http://www.dnd5eapi.co/api/features/259"
  },
  {
    "index": 260,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Choose: Expertise 1",
    "level": 1,
    "desc": [
      "At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves’ tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.",
      "At 6th level, you can choose two more of your proficiencies (in skills or with thieves’ tools) to gain this benefit"
    ],
    "choice": {
      "choose": 2,
      "type": "feature",
      "from": [
        {
          "url": "http://www.dnd5eapi.co/api/features/278",
          "name": "Expertise: Acrobatics"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/277",
          "name": "Expertise: Animal Handling"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/261",
          "name": "Expertise: Arcana"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/262",
          "name": "Expertise: Athletics"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/263",
          "name": "Expertise: Deception"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/264",
          "name": "Expertise: History"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/265",
          "name": "Expertise: Insight"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/266",
          "name": "Expertise: Intimidation"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/267",
          "name": "Expertise: Investigation"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/268",
          "name": "Expertise: Medicine"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/269",
          "name": "Expertise: Nature"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/270",
          "name": "Expertise: Perception"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/271",
          "name": "Expertise: Performance"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/272",
          "name": "Expertise: Persuasion"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/273",
          "name": "Expertise: Religion"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/274",
          "name": "Expertise: Sleight of Hand"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/275",
          "name": "Expertise: Stealth"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/276",
          "name": "Expertise: Survival"
        }
      ]
    },
    "url": "http://www.dnd5eapi.co/api/features/260"
  },
  {
    "index": 261,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Expertise: Acrobatics",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/105"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Rogue)",
    "url": "http://www.dnd5eapi.co/api/features/261"
  },
  {
    "index": 262,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Expertise: Animal Handling",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/106"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Rogue)",
    "url": "http://www.dnd5eapi.co/api/features/262"
  },
  {
    "index": 263,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Expertise: Arcana",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/107"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Rogue)",
    "url": "http://www.dnd5eapi.co/api/features/263"
  },
  {
    "index": 264,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Expertise: Athletics",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/108"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Rogue)",
    "url": "http://www.dnd5eapi.co/api/features/264"
  },
  {
    "index": 265,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Expertise: Deception",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/109"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Rogue)",
    "url": "http://www.dnd5eapi.co/api/features/265"
  },
  {
    "index": 266,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Expertise: History",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/110"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Rogue)",
    "url": "http://www.dnd5eapi.co/api/features/266"
  },
  {
    "index": 267,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Expertise: Insight",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/111"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Rogue)",
    "url": "http://www.dnd5eapi.co/api/features/267"
  },
  {
    "index": 268,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Expertise: Intimidation",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/112"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Rogue)",
    "url": "http://www.dnd5eapi.co/api/features/268"
  },
  {
    "index": 269,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Expertise: Investigation",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/113"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Rogue)",
    "url": "http://www.dnd5eapi.co/api/features/269"
  },
  {
    "index": 270,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Expertise: Medicine",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/114"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Rogue)",
    "url": "http://www.dnd5eapi.co/api/features/270"
  },
  {
    "index": 271,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Expertise: Nature",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/115"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Rogue)",
    "url": "http://www.dnd5eapi.co/api/features/271"
  },
  {
    "index": 272,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Expertise: Perception",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/116"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Rogue)",
    "url": "http://www.dnd5eapi.co/api/features/272"
  },
  {
    "index": 273,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Expertise: Performance",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/117"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Rogue)",
    "url": "http://www.dnd5eapi.co/api/features/273"
  },
  {
    "index": 274,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Expertise: Persuasion",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/118"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Rogue)",
    "url": "http://www.dnd5eapi.co/api/features/274"
  },
  {
    "index": 275,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Expertise: Religion",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/119"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Rogue)",
    "url": "http://www.dnd5eapi.co/api/features/275"
  },
  {
    "index": 276,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Expertise: Sleight of Hand",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/120"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Rogue)",
    "url": "http://www.dnd5eapi.co/api/features/276"
  },
  {
    "index": 277,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Expertise: Stealth",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/121"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Rogue)",
    "url": "http://www.dnd5eapi.co/api/features/277"
  },
  {
    "index": 278,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Expertise: Survival",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/122"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Rogue)",
    "url": "http://www.dnd5eapi.co/api/features/278"
  },
  {
    "index": 279,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Expertise: Thieves' Tools",
    "prerequisites": [
      {
        "type": "proficiency",
        "proficiency": "http://www.dnd5eapi.co/api/proficiencies/96"
      }
    ],
    "desc": [
      "Your proficiency bonus is doubled for any ability check you make for this skill."
    ],
    "group": "Expertise (Rogue)",
    "url": "http://www.dnd5eapi.co/api/features/279"
  },
  {
    "index": 280,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Sneak Attack",
    "level": 1,
    "desc": [
      "Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.",
      "You don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll.",
      "The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table."
    ],
    "url": "http://www.dnd5eapi.co/api/features/280"
  },
  {
    "index": 281,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Thieves' Cant",
    "level": 1,
    "desc": [
      "During your rogue training you learned thieves’ cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves’ cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.",
      "In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves’ guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run."
    ],
    "url": "http://www.dnd5eapi.co/api/features/281"
  },
  {
    "index": 282,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Cunning Action",
    "level": 2,
    "desc": [
      "Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action."
    ],
    "url": "http://www.dnd5eapi.co/api/features/282"
  },
  {
    "index": 283,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Roguish Archetype",
    "level": 3,
    "desc": [
      "At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities. The Thief archetype is detailed at the bottom of this page. Additional archetypes are available in the original source material. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/283"
  },
  {
    "index": 284,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/9",
      "name": "Thief"
    },
    "name": "Fast Hands",
    "level": 3,
    "desc": [
      "Starting at 3rd level, you can use the bonus action granted by your Cunning Action to make a Dexterity (Sleight of Hand) check, use your thieves' tools to disarm a trap or open a lock, or take the Use an Object action."
    ],
    "url": "http://www.dnd5eapi.co/api/features/284"
  },
  {
    "index": 285,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/9",
      "name": "Thief"
    },
    "name": "Second-Story Work",
    "level": 3,
    "desc": [
      "When you choose this archetype at 3rd level, you gain the ability to climb faster than normal; climbing no longer costs you extra movement.",
      "In addition, when you make a running jump, the distance you cover increases by a number of feet equal to your Dexterity modifier."
    ],
    "url": "http://www.dnd5eapi.co/api/features/285"
  },
  {
    "index": 286,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Ability Score Improvement 1",
    "level": 4,
    "desc": [
      "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/286"
  },
  {
    "index": 287,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Uncanny Dodge",
    "level": 5,
    "desc": [
      "Starting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack’s damage against you."
    ],
    "url": "http://www.dnd5eapi.co/api/features/287"
  },
  {
    "index": 288,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Choose: Expertise 2",
    "level": 6,
    "desc": [
      "At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves’ tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.",
      "At 6th level, you can choose two more of your proficiencies (in skills or with thieves’ tools) to gain this benefit"
    ],
    "choice": {
      "choose": 2,
      "type": "feature",
      "from": [
        {
          "url": "http://www.dnd5eapi.co/api/features/278",
          "name": "Expertise: Acrobatics"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/277",
          "name": "Expertise: Animal Handling"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/261",
          "name": "Expertise: Arcana"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/262",
          "name": "Expertise: Athletics"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/263",
          "name": "Expertise: Deception"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/264",
          "name": "Expertise: History"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/265",
          "name": "Expertise: Insight"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/266",
          "name": "Expertise: Intimidation"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/267",
          "name": "Expertise: Investigation"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/268",
          "name": "Expertise: Medicine"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/269",
          "name": "Expertise: Nature"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/270",
          "name": "Expertise: Perception"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/271",
          "name": "Expertise: Performance"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/272",
          "name": "Expertise: Persuasion"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/273",
          "name": "Expertise: Religion"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/274",
          "name": "Expertise: Sleight of Hand"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/275",
          "name": "Expertise: Stealth"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/276",
          "name": "Expertise: Survival"
        }
      ]
    },
    "url": "http://www.dnd5eapi.co/api/features/288"
  },
  {
    "index": 289,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Evasion",
    "level": 7,
    "desc": [
      "Beginning at 7th level, you can nimbly dodge out of the way of certain area effects, such as a red dragon’s fiery breath or an ice storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
    ],
    "url": "http://www.dnd5eapi.co/api/features/289"
  },
  {
    "index": 290,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Ability Score Improvement 2",
    "level": 8,
    "desc": [
      "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/290"
  },
  {
    "index": 291,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/9",
      "name": "Thief"
    },
    "name": "Supreme Sneak",
    "level": 9,
    "desc": [
      "Starting at 9th level, you have advantage on a Dexterity (Stealth) check if you move no more than half your speed on the same turn."
    ],
    "url": "http://www.dnd5eapi.co/api/features/291"
  },
  {
    "index": 292,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Ability Score Improvement 3",
    "level": 10,
    "desc": [
      "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/292"
  },
  {
    "index": 293,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Reliable Talent",
    "level": 11,
    "desc": [
      "By 11th level, you have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10."
    ],
    "url": "http://www.dnd5eapi.co/api/features/293"
  },
  {
    "index": 294,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Ability Score Improvement 4",
    "level": 12,
    "desc": [
      "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/294"
  },
  {
    "index": 295,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/9",
      "name": "Thief"
    },
    "name": "Use Magic Device",
    "level": 13,
    "desc": [
      "By 13th level, you have learned enough about the workings of magic that you can improvise the use of items even when they are not intended for you. You ignore all class, race, and level requirements on the use of magic items."
    ],
    "url": "http://www.dnd5eapi.co/api/features/295"
  },
  {
    "index": 296,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Blindsense",
    "level": 14,
    "desc": [
      "Starting at 14th level, if you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you."
    ],
    "url": "http://www.dnd5eapi.co/api/features/296"
  },
  {
    "index": 297,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Slippery Mind",
    "level": 15,
    "desc": [
      "By 15th level, you have acquired greater mental strength. You gain proficiency in Wisdom saving throws."
    ],
    "url": "http://www.dnd5eapi.co/api/features/297"
  },
  {
    "index": 298,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Ability Score Improvement 5",
    "level": 16,
    "desc": [
      "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/298"
  },
  {
    "index": 299,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/9",
      "name": "Thief"
    },
    "name": "Thief's Reflexes",
    "level": 17,
    "desc": [
      "When you reach 17th level, you have become adept at laying ambushes and quickly escaping danger. You can take two turns during the first round of any combat. You take your first turn at your normal initiative and your second turn at your initiative minus 10. You can't use this feature when you are surprised."
    ],
    "url": "http://www.dnd5eapi.co/api/features/299"
  },
  {
    "index": 300,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Elusive",
    "level": 18,
    "desc": [
      "Beginning at 18th level, you are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren’t incapacitated."
    ],
    "url": "http://www.dnd5eapi.co/api/features/300"
  },
  {
    "index": 301,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Ability Score Improvement 6",
    "level": 19,
    "desc": [
      "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/301"
  },
  {
    "index": 302,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/9",
      "name": "Rogue"
    },
    "subclass": {},
    "name": "Stroke of Luck",
    "level": 20,
    "desc": [
      "At 20th level, you have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20.",
      "Once you use this feature, you can't use it again until you finish a short or long rest."
    ],
    "url": "http://www.dnd5eapi.co/api/features/302"
  },
  {
    "index": 303,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {},
    "name": "Spellcasting",
    "level": 1,
    "desc": [
      "An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells."
    ],
    "reference": "http://www.dnd5eapi.co/api/spellcasting/sorcerer",
    "url": "http://www.dnd5eapi.co/api/features/303"
  },
  {
    "index": 304,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {},
    "name": "Sorcerous Origin",
    "level": 1,
    "desc": [
      "Choose a sorcerous origin, which describes the source of your innate magical power: Draconic Bloodline or Wild Magic, both detailed at the end of the class description.",
      "Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/304"
  },
  {
    "index": 305,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/10",
      "name": "Draconic"
    },
    "name": "Choose: Dragon Ancestor",
    "level": 1,
    "desc": [
      "At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.",
      "You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
    ],
    "choice": {
      "choose": 2,
      "type": "feature",
      "from": [
        {
          "url": "http://www.dnd5eapi.co/api/features/306",
          "name": "Dragon Ancestor: Black - Acid Damage"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/307",
          "name": "Dragon Ancestor: Blue - Lightning Damage"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/308",
          "name": "Dragon Ancestor: Brass - Fire Damage"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/309",
          "name": "Dragon Ancestor: Bronze - Lightning Damage"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/310",
          "name": "Dragon Ancestor: Copper - Acid Damage"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/311",
          "name": "Dragon Ancestor: Gold - Fire Damage"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/312",
          "name": "Dragon Ancestor: Green - Poison Damage"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/313",
          "name": "Dragon Ancestor: Red - Fire Damage"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/314",
          "name": "Dragon Ancestor: Silver - Cold Damage"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/315",
          "name": "Dragon Ancestor: White - Cold Damage"
        }
      ]
    },
    "url": "http://www.dnd5eapi.co/api/features/305"
  },
  {
    "index": 306,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/10",
      "name": "Draconic"
    },
    "name": "Dragon Ancestor: Black - Acid Damage",
    "level": 1,
    "desc": [
      "At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.",
      "You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
    ],
    "group": "Dragon Ancestor",
    "url": "http://www.dnd5eapi.co/api/features/306"
  },
  {
    "index": 307,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/10",
      "name": "Draconic"
    },
    "name": "Dragon Ancestor: Blue - Lightning Damage",
    "level": 1,
    "desc": [
      "At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.",
      "You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
    ],
    "group": "Dragon Ancestor",
    "url": "http://www.dnd5eapi.co/api/features/307"
  },
  {
    "index": 308,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/10",
      "name": "Draconic"
    },
    "name": "Dragon Ancestor: Brass - Fire Damage",
    "level": 1,
    "desc": [
      "At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.",
      "You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
    ],
    "group": "Dragon Ancestor",
    "url": "http://www.dnd5eapi.co/api/features/308"
  },
  {
    "index": 309,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/10",
      "name": "Draconic"
    },
    "name": "Dragon Ancestor: Bronze - Lightning Damage",
    "level": 1,
    "desc": [
      "At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.",
      "You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
    ],
    "group": "Dragon Ancestor",
    "url": "http://www.dnd5eapi.co/api/features/309"
  },
  {
    "index": 310,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/10",
      "name": "Draconic"
    },
    "name": "Dragon Ancestor: Copper - Acid Damage",
    "level": 1,
    "desc": [
      "At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.",
      "You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
    ],
    "group": "Dragon Ancestor",
    "url": "http://www.dnd5eapi.co/api/features/310"
  },
  {
    "index": 311,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/10",
      "name": "Draconic"
    },
    "name": "Dragon Ancestor: Gold - Fire Damage",
    "level": 1,
    "desc": [
      "At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.",
      "You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
    ],
    "group": "Dragon Ancestor",
    "url": "http://www.dnd5eapi.co/api/features/311"
  },
  {
    "index": 312,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/10",
      "name": "Draconic"
    },
    "name": "Dragon Ancestor: Green - Poison Damage",
    "level": 1,
    "desc": [
      "At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.",
      "You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
    ],
    "group": "Dragon Ancestor",
    "url": "http://www.dnd5eapi.co/api/features/312"
  },
  {
    "index": 313,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/10",
      "name": "Draconic"
    },
    "name": "Dragon Ancestor: Red - Fire Damage",
    "level": 1,
    "desc": [
      "At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.",
      "You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
    ],
    "group": "Dragon Ancestor",
    "url": "http://www.dnd5eapi.co/api/features/313"
  },
  {
    "index": 314,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/10",
      "name": "Draconic"
    },
    "name": "Dragon Ancestor: Silver - Cold Damage",
    "level": 1,
    "desc": [
      "At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.",
      "You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
    ],
    "group": "Dragon Ancestor",
    "url": "http://www.dnd5eapi.co/api/features/314"
  },
  {
    "index": 315,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/10",
      "name": "Draconic"
    },
    "name": "Dragon Ancestor: White - Cold Damage",
    "level": 1,
    "desc": [
      "At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.",
      "You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
    ],
    "group": "Dragon Ancestor",
    "url": "http://www.dnd5eapi.co/api/features/315"
  },
  {
    "index": 316,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/10",
      "name": "Draconic"
    },
    "name": "Draconic Resilience",
    "level": 1,
    "desc": [
      "As magic flows through your body, it causes physical traits of your dragon ancestors to emerge. At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class.",
      "Additionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren’t wearing armor, your AC equals 13 + your Dexterity modifier."
    ],
    "url": "http://www.dnd5eapi.co/api/features/316"
  },
  {
    "index": 317,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {},
    "name": "Font of Magic",
    "level": 2,
    "desc": [
      "At 2nd level, you tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects.",
      "Sorcery Points",
      "You have 2 sorcery points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer table. You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest."
    ],
    "url": "http://www.dnd5eapi.co/api/features/317"
  },
  {
    "index": 318,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {},
    "name": "Flexible Casting: Creating Spell Slots",
    "level": 2,
    "desc": [
      "You can transform unexpended sorcery points into one spell slot as a bonus action on your turn. The Creating Spell Slots table shows the cost of creating a spell slot of a given level. You can create spell slots no higher in level than 5th. ",
      "Any spell slot you create with this feature vanishes when you finish a long rest."
    ],
    "url": "http://www.dnd5eapi.co/api/features/318"
  },
  {
    "index": 319,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {},
    "name": "Flexible Casting: Converting Spell Slot",
    "level": 2,
    "desc": [
      "As a bonus action on your turn, you can expend one spell slot and gain a number of sorcery points equal to the slot’s level.."
    ],
    "url": "http://www.dnd5eapi.co/api/features/319"
  },
  {
    "index": 320,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {},
    "name": "Choose: Metamagic",
    "level": 3,
    "desc": [
      "At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.",
      "You can use only one Metamagic option on a spell when you cast it, unless otherwise noted."
    ],
    "choice": {
      "choose": 2,
      "type": "feature",
      "from": [
        {
          "url": "http://www.dnd5eapi.co/api/features/321",
          "name": "Metamagic: Careful Spell"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/322",
          "name": "Metamagic: Distant Spell"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/323",
          "name": "Metamagic: Empowered Spell"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/324",
          "name": "Metamagic: Extended Spell"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/325",
          "name": "Metamagic: Heightened Spell"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/326",
          "name": "Metamagic: Quickened Spell"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/327",
          "name": "Metamagic: Subtle Spell"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/328",
          "name": "Metamagic: Twinned Spell"
        }
      ]
    },
    "url": "http://www.dnd5eapi.co/api/features/320"
  },
  {
    "index": 321,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {},
    "name": "Metamagic: Careful Spell",
    "level": 3,
    "desc": [
      "When you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell’s full force. To do so, you spend 1 sorcery point and choose a number of those creatures up to your Charisma modifier (minimum of one creature). A chosen creature automatically succeeds on its saving throw against the spell."
    ],
    "group": "Metamagic",
    "url": "http://www.dnd5eapi.co/api/features/321"
  },
  {
    "index": 322,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {},
    "name": "Metamagic: Distant Spell",
    "level": 3,
    "desc": [
      "When you cast a spell that has a range of 5 feet or greater, you can spend 1 sorcery point to double the range of the spell.",
      "When you cast a spell that has a range of touch, you can spend 1 sorcery point to make the range of the spell 30 feet."
    ],
    "group": "Metamagic",
    "url": "http://www.dnd5eapi.co/api/features/322"
  },
  {
    "index": 323,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {},
    "name": "Metamagic: Empowered Spell",
    "level": 3,
    "desc": [
      "When you roll damage for a spell, you can spend 1 sorcery point to reroll a number of the damage dice up to your Charisma modifier (minimum of one). You must use the new rolls.",
      "You can use Empowered Spell even if you have already used a different Metamagic option during the casting of the spell."
    ],
    "group": "Metamagic",
    "url": "http://www.dnd5eapi.co/api/features/323"
  },
  {
    "index": 324,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {},
    "name": "Metamagic: Extended Spell",
    "level": 3,
    "desc": [
      "When you cast a spell that has a duration of 1 minute or longer, you can spend 1 sorcery point to double its duration, to a maximum duration of 24 hours."
    ],
    "group": "Metamagic",
    "url": "http://www.dnd5eapi.co/api/features/324"
  },
  {
    "index": 325,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {},
    "name": "Metamagic: Heightened Spell",
    "level": 3,
    "desc": [
      "When you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw made against the spell."
    ],
    "group": "Metamagic",
    "url": "http://www.dnd5eapi.co/api/features/325"
  },
  {
    "index": 326,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {},
    "name": "Metamagic: Quickened Spell",
    "level": 3,
    "desc": [
      "When you cast a spell that has a casting time of 1 action, you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting."
    ],
    "group": "Metamagic",
    "url": "http://www.dnd5eapi.co/api/features/326"
  },
  {
    "index": 327,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {},
    "name": "Metamagic: Subtle Spell",
    "level": 3,
    "desc": [
      "When you cast a spell, you can spend 1 sorcery point to cast it without any somatic or verbal components."
    ],
    "group": "Metamagic",
    "url": "http://www.dnd5eapi.co/api/features/327"
  },
  {
    "index": 328,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {},
    "name": "Metamagic: Twinned Spell",
    "level": 3,
    "desc": [
      "When you cast a spell that targets only one creature and doesn’t have a range of self, you can spend a number of sorcery points equal to the spell’s level to target a second creature in range with the same spell (1 sorcery point if the spell is a cantrip).",
      "To be eligible, a spell must be incapable of targeting more than one creature at the spell’s current level. For example, magic missile and scorching ray aren’t eligible, but ray of frost and chromatic orb are."
    ],
    "url": "http://www.dnd5eapi.co/api/features/328"
  },
  {
    "index": 329,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {},
    "name": "Ability Score Improvement 1",
    "level": 4,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/329"
  },
  {
    "index": 330,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/10",
      "name": "Draconic"
    },
    "name": "Elemental Affinity",
    "level": 6,
    "desc": [
      "Starting at 6th level, when you cast a spell that deals damage of the type associated with your draconic ancestry, you can add your Charisma modifier to one damage roll of that spell. At the same time, you can spend 1 sorcery point to gain resistance to that damage type for 1 hour."
    ],
    "reference": "http://www.dnd5eapi.co/api/subclasses/10",
    "url": "http://www.dnd5eapi.co/api/features/330"
  },
  {
    "index": 331,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {},
    "name": "Ability Score Improvement 2",
    "level": 8,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/331"
  },
  {
    "index": 332,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {},
    "name": "Choose: Additional Metamagic",
    "level": 10,
    "desc": [
      "At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.",
      "You can use only one Metamagic option on a spell when you cast it, unless otherwise noted."
    ],
    "choice": {
      "choose": 1,
      "type": "feature",
      "from": [
        {
          "url": "http://www.dnd5eapi.co/api/features/327",
          "name": "Metamagic: Careful Spell"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/328",
          "name": "Metamagic: Distant Spell"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/321",
          "name": "Metamagic: Empowered Spell"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/322",
          "name": "Metamagic: Extended Spell"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/323",
          "name": "Metamagic: Heightened Spell"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/324",
          "name": "Metamagic: Quickened Spell"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/325",
          "name": "Metamagic: Subtle Spell"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/326",
          "name": "Metamagic: Twinned Spell"
        }
      ]
    },
    "url": "http://www.dnd5eapi.co/api/features/332"
  },
  {
    "index": 333,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {},
    "name": "Ability Score Improvement 3",
    "level": 12,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/333"
  },
  {
    "index": 334,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/10",
      "name": "Draconic"
    },
    "name": "Dragon Wings",
    "level": 14,
    "desc": [
      "At 14th level, you gain the ability to sprout a pair of dragon wings from your back, gaining a flying speed equal to your current speed. You can create these wings as a bonus action on your turn. They last until you dismiss them as a bonus action on your turn.",
      "You can’t manifest your wings while wearing armor unless the armor is made to accommodate them, and clothing not made to accommodate your wings might be destroyed when you manifest them."
    ],
    "url": "http://www.dnd5eapi.co/api/features/334"
  },
  {
    "index": 335,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {},
    "name": "Ability Score Improvement 4",
    "level": 16,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/335"
  },
  {
    "index": 336,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {},
    "name": "Choose: Additional Metamagic",
    "level": 17,
    "desc": [
      "At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.",
      "You can use only one Metamagic option on a spell when you cast it, unless otherwise noted."
    ],
    "choice": {
      "choose": 1,
      "type": "feature",
      "from": [
        {
          "url": "http://www.dnd5eapi.co/api/features/327",
          "name": "Metamagic: Careful Spell"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/328",
          "name": "Metamagic: Distant Spell"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/321",
          "name": "Metamagic: Empowered Spell"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/322",
          "name": "Metamagic: Extended Spell"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/323",
          "name": "Metamagic: Heightened Spell"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/324",
          "name": "Metamagic: Quickened Spell"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/325",
          "name": "Metamagic: Subtle Spell"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/326",
          "name": "Metamagic: Twinned Spell"
        }
      ]
    },
    "url": "http://www.dnd5eapi.co/api/features/336"
  },
  {
    "index": 337,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/10",
      "name": "Draconic"
    },
    "name": "Draconic Presence",
    "level": 18,
    "desc": [
      "Beginning at 18th level, you can channel the dread presence of your dragon ancestor, causing those around you to become awestruck or frightened. As an action, you can spend 5 sorcery points to draw on this power and exude an aura of awe or fear (your choice) to a distance of 60 feet. For 1 minute or until you lose your concentration (as if you were casting a concentration spell), each hostile creature that starts its turn in this aura must succeed on a Wisdom saving throw or be charmed (if you chose awe) or frightened (if you chose fear) until the aura ends. A creature that succeeds on this saving throw is immune to your aura for 24 hours."
    ],
    "url": "http://www.dnd5eapi.co/api/features/337"
  },
  {
    "index": 338,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {},
    "name": "Ability Score Improvement 5",
    "level": 19,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/338"
  },
  {
    "index": 339,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "subclass": {},
    "name": "Sorcerous Restoration",
    "level": 20,
    "desc": [
      "At 20th level, you regain 4 expended sorcery points whenever you finish a short rest."
    ],
    "url": "http://www.dnd5eapi.co/api/features/339"
  },
  {
    "index": 340,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Otherworldly Patron",
    "level": 1,
    "desc": [
      "At 1st level, you have struck a bargain with an otherworldly being of your choice: the Archfey, the Fiend, or the Great Old One, each of which is detailed at the end of the class description. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/340"
  },
  {
    "index": 341,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/11",
      "name": "Fiend"
    },
    "name": "Dark One's Blessing",
    "level": 1,
    "desc": [
      "Starting at 1st level, when you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum of 1)."
    ],
    "url": "http://www.dnd5eapi.co/api/features/341"
  },
  {
    "index": 342,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Pact Magic",
    "level": 1,
    "desc": [
      "Your arcane research and the magic bestowed on you by your patron have given you facility with spells."
    ],
    "reference": "http://www.dnd5eapi.co/api/spellcasting/warlock",
    "url": "http://www.dnd5eapi.co/api/features/342"
  },
  {
    "index": 343,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Choose: Eldritch Invocations",
    "level": 2,
    "desc": [
      "In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.",
      "At 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.",
      "Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level."
    ],
    "choice": {
      "choose": 2,
      "type": "feature",
      "from": [
        {
          "url": "http://www.dnd5eapi.co/api/features/344",
          "name": "Eldritch Invocation: Agonizing Blast"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/345",
          "name": "Eldritch Invocation: Armor of Shadows"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/346",
          "name": "Eldritch Invocation: Beast Speech"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/347",
          "name": "Eldritch Invocation: Beguiling Influence"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/348",
          "name": "Eldritch Invocation: Book of Ancient Secrets"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/349",
          "name": "Eldritch Invocation: Devil’s Sight"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/350",
          "name": "Eldritch Invocation: Eldritch Sight"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/351",
          "name": "Eldritch Invocation: Eldritch Spear"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/352",
          "name": "Eldritch Invocation: Eyes of the Rune Keeper"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/353",
          "name": "Eldritch Invocation: Fiendish Vigor"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/354",
          "name": "Eldritch Invocation: Gaze of Two Minds"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/355",
          "name": "Eldritch Invocation: Mask of Many Faces"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/356",
          "name": "Eldritch Invocation: Misty Visions"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/357",
          "name": "Eldritch Invocation: Repelling Blast"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/358",
          "name": "Eldritch Invocation: Thief of Five Fates"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/359",
          "name": "Eldritch Invocation: Voice of the Chain Master"
        }
      ]
    },
    "url": "http://www.dnd5eapi.co/api/features/343"
  },
  {
    "index": 344,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Agonizing Blast",
    "level": 2,
    "prerequisites": [
      {
        "type": "Spell",
        "spell": "http://www.dnd5eapi.co/api/spells/91"
      }
    ],
    "desc": [
      "When you cast eldritch blast, add your Charisma modifier to the damage it deals on a hit."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/344"
  },
  {
    "index": 345,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Armor of Shadows",
    "level": 2,
    "prerequisites": [],
    "desc": [
      "You can cast mage armor on yourself at will, without expending a spell slot or material components."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/345"
  },
  {
    "index": 346,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Beast Speech",
    "level": 2,
    "prerequisites": [],
    "desc": [
      "You can cast speak with animals at will, without expending a spell slot."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/346"
  },
  {
    "index": 347,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Beguiling Influence",
    "level": 2,
    "prerequisites": [],
    "desc": [
      "You gain proficiency in the Deception and Persuasion skills."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/347"
  },
  {
    "index": 348,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Book of Ancient Secrets",
    "level": 2,
    "prerequisites": [
      {
        "type": "feature",
        "feature": "http://www.dnd5eapi.co/api/features/270"
      }
    ],
    "desc": [
      "You can now inscribe magical rituals in your Book of Shadows. Choose two 1st-level spells that have the ritual tag from any class’s spell list (the two needn’t be from the same list). The spells appear in the book and don’t count against the number of spells you know. With your Book of Shadows in hand, you can cast the chosen spells as rituals. You can’t cast the spells except as rituals, unless you’ve learned them by some other means. You can also cast a warlock spell you know as a ritual if it has the ritual tag.",
      "On your adventures, you can add other ritual spells to your Book of Shadows. When you find such a spell, you can add it to the book if the spell’s level is equal to or less than half your warlock level (rounded up) and if you can spare the time to transcribe the spell. For each level of the spell, the transcription process takes 2 hours and costs 50 gp for the rare inks needed to inscribe it."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/348"
  },
  {
    "index": 349,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Devil’s Sight",
    "level": 2,
    "prerequisites": [],
    "desc": [
      "You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/349"
  },
  {
    "index": 350,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Eldritch Sight",
    "level": 2,
    "prerequisites": [],
    "desc": [
      "You can cast detect magic at will, without expending a spell slot."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/350"
  },
  {
    "index": 351,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Eldritch Spear",
    "level": 2,
    "prerequisites": [
      {
        "type": "Spell",
        "spell": "http://www.dnd5eapi.co/api/spells/91"
      }
    ],
    "desc": [
      "When you cast eldritch blast, its range is 300 feet."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/351"
  },
  {
    "index": 352,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Eyes of the Rune Keeper",
    "level": 2,
    "prerequisites": [],
    "desc": [
      "You can read all writing."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/352"
  },
  {
    "index": 353,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Fiendish Vigor",
    "level": 2,
    "prerequisites": [],
    "desc": [
      "You can cast false life on yourself at will as a 1st-level spell, without expending a spell slot or material components."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/353"
  },
  {
    "index": 354,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Gaze of Two Minds",
    "level": 2,
    "prerequisites": [],
    "desc": [
      "You can use your action to touch a willing humanoid and perceive through its senses until the end of your next turn. As long as the creature is on the same plane of existence as you, you can use your action on subsequent turns to maintain this connection, extending the duration until the end of your next turn. While perceiving through the other creature’s senses, you benefit from any special senses possessed by that creature, and you are blinded and deafened to your own surroundings."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/354"
  },
  {
    "index": 355,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Mask of Many Faces",
    "level": 2,
    "prerequisites": [],
    "desc": [
      "You can cast disguise self at will, without expending a spell slot."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/355"
  },
  {
    "index": 356,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Misty Visions",
    "level": 2,
    "prerequisites": [],
    "desc": [
      "You can cast silent image at will, without expending a spell slot or material components."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/356"
  },
  {
    "index": 357,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Repelling Blast",
    "level": 2,
    "prerequisites": [
      {
        "type": "Spell",
        "spell": "http://www.dnd5eapi.co/api/spells/91"
      }
    ],
    "desc": [
      "When you hit a creature with eldritch blast, you can push the creature up to 10 feet away from you in a straight line."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/357"
  },
  {
    "index": 358,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Thief of Five Fates",
    "level": 2,
    "prerequisites": [],
    "desc": [
      "You can cast bane once using a warlock spell slot. You can’t do so again until you finish a long rest."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/358"
  },
  {
    "index": 359,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Voice of the Chain Master",
    "level": 2,
    "prerequisites": [
      {
        "type": "feature",
        "feature": "http://www.dnd5eapi.co/api/features/268"
      }
    ],
    "desc": [
      "You can communicate telepathically with your familiar and perceive through your familiar’s senses as long as you are on the same plane of existence.",
      "Additionally, while perceiving through your familiar’s senses, you can also speak through your familiar in your own voice, even if your familiar is normally incapable of speech."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/359"
  },
  {
    "index": 360,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Mire the Mind",
    "level": 5,
    "prerequisites": [
      {
        "type": "level",
        "level": 5
      }
    ],
    "desc": [
      "You can cast slow once using a warlock spell slot. You can’t do so again until you finish a long rest."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/360"
  },
  {
    "index": 361,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: One with Shadows",
    "level": 5,
    "prerequisites": [
      {
        "type": "level",
        "level": 5
      }
    ],
    "desc": [
      "When you are in an area of dim light or darkness, you can use your action to become invisible until you move or take an action or a reaction."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/361"
  },
  {
    "index": 362,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Sign of Ill Omen",
    "level": 5,
    "prerequisites": [
      {
        "type": "level",
        "level": 5
      }
    ],
    "desc": [
      "You can cast bestow curse once using a warlock spell slot. You can’t do so again until you finish a long rest."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/362"
  },
  {
    "index": 363,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Thirsting Blade",
    "level": 5,
    "prerequisites": [
      {
        "type": "level",
        "level": 5
      },
      {
        "type": "feature",
        "feature": "http://www.dnd5eapi.co/api/features/269"
      }
    ],
    "desc": [
      "You can attack with your pact weapon twice, instead of once, whenever you take the Attack action on your turn."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/363"
  },
  {
    "index": 364,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Bewitching Whispers",
    "level": 7,
    "prerequisites": [
      {
        "type": "level",
        "level": 7
      }
    ],
    "desc": [
      "You can cast compulsion once using a warlock spell slot. You can’t do so again until you finish a long rest."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/364"
  },
  {
    "index": 365,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Dreadful Word",
    "level": 7,
    "prerequisites": [
      {
        "type": "level",
        "level": 7
      }
    ],
    "desc": [
      "You can cast confusion once using a warlock spell slot. You can’t do so again until you finish a long rest."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/365"
  },
  {
    "index": 366,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Sculptor of Flesh",
    "level": 7,
    "prerequisites": [
      {
        "type": "level",
        "level": 7
      }
    ],
    "desc": [
      "You can cast polymorph once using a warlock spell slot. You can’t do so again until you finish a long rest."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/366"
  },
  {
    "index": 367,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Ascendant Step",
    "level": 9,
    "prerequisites": [
      {
        "type": "level",
        "level": 9
      }
    ],
    "desc": [
      "You can cast levitate on yourself at will, without expending a spell slot or material components."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/367"
  },
  {
    "index": 368,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Minions of Chaos",
    "level": 9,
    "prerequisites": [
      {
        "type": "level",
        "level": 9
      }
    ],
    "desc": [
      "You can cast conjure elemental once using a warlock spell slot. You can’t do so again until you finish a long rest."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/368"
  },
  {
    "index": 369,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Otherworldly Leap",
    "level": 9,
    "prerequisites": [
      {
        "type": "level",
        "level": 9
      }
    ],
    "desc": [
      "You can cast jump on yourself at will, without expending a spell slot or material components."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/369"
  },
  {
    "index": 370,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Whispers of the Grave",
    "level": 9,
    "prerequisites": [
      {
        "type": "level",
        "level": 9
      }
    ],
    "desc": [
      "You can cast speak with dead at will, without expending a spell slot."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/370"
  },
  {
    "index": 371,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Lifedrinker",
    "level": 12,
    "prerequisites": [
      {
        "type": "level",
        "level": 12
      },
      {
        "type": "feature",
        "feature": "http://www.dnd5eapi.co/api/features/269"
      }
    ],
    "desc": [
      "When you hit a creature with your pact weapon, the creature takes extra necrotic damage equal to your Charisma modifier (minimum 1)."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/371"
  },
  {
    "index": 372,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Chains of Carceri",
    "level": 15,
    "prerequisites": [
      {
        "type": "level",
        "level": 15
      },
      {
        "type": "feature",
        "feature": "http://www.dnd5eapi.co/api/features/268"
      }
    ],
    "desc": [
      "You can cast hold monster at will—targeting a celestial, fiend, or elemental—without expending a spell slot or material components. You must finish a long rest before you can use this invocation on the same creature again."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/372"
  },
  {
    "index": 373,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Master of Myriad Forms",
    "level": 15,
    "prerequisites": [
      {
        "type": "level",
        "level": 15
      }
    ],
    "desc": [
      "You can cast alter self at will, without expending a spell slot."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/373"
  },
  {
    "index": 374,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Visions of Distant Realms",
    "level": 15,
    "prerequisites": [
      {
        "type": "level",
        "level": 15
      }
    ],
    "desc": [
      "You can cast arcane eye at will, without expending a spell slot."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/374"
  },
  {
    "index": 375,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Invocation: Witch Sight",
    "level": 15,
    "prerequisites": [
      {
        "type": "level",
        "level": 15
      }
    ],
    "desc": [
      "You can see the true form of any shapechanger or creature concealed by illusion or transmutation magic while the creature is within 30 feet of you and within line of sight."
    ],
    "group": "Eldritch Invocations",
    "url": "http://www.dnd5eapi.co/api/features/375"
  },
  {
    "index": 376,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Choose: Pact Boon",
    "level": 3,
    "desc": [
      "At 3rd level, your otherworldly patron bestows a gift upon you for your loyal service. You gain one of the following features of your choice."
    ],
    "choice": {
      "choose": 1,
      "type": "feature",
      "from": [
        {
          "url": "http://www.dnd5eapi.co/api/features/377",
          "name": "Pact of the Chain"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/378",
          "name": "Pact of the Blade"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/379",
          "name": "Pact of the Tome"
        }
      ]
    },
    "url": "http://www.dnd5eapi.co/api/features/376"
  },
  {
    "index": 377,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Pact of the Chain",
    "level": 3,
    "desc": [
      "You learn the find familiar spell and can cast it as a ritual. The spell doesn’t count against your number of spells known.",
      "When you cast the spell, you can choose one of the normal forms for your familiar or one of the following special forms: imp, pseudodragon, quasit, or sprite.",
      "Additionally, when you take the Attack action, you can forgo one of your own attacks to allow your familiar to make one attack of its own with its reaction.",
      "Your familiar is more cunning than a typical familiar. Its default form can be a reflection of your patron, with sprites and pseudodragons tied to the Archfey and imps and quasits tied to the Fiend. Because the Great Old One’s nature is inscrutable, any familiar form is suitable for it."
    ],
    "group": "Warlock Pact",
    "url": "http://www.dnd5eapi.co/api/features/377"
  },
  {
    "index": 378,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Pact of the Blade",
    "level": 3,
    "desc": [
      "You can use your action to create a pact weapon in your empty hand. You can choose the form that this melee weapon takes each time you create it. You are proficient with it while you wield it. This weapon counts as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
      "Your pact weapon disappears if it is more than 5 feet away from you for 1 minute or more. It also disappears if you use this feature again, if you dismiss the weapon (no action required), or if you die.",
      "You can transform one magic weapon into your pact weapon by performing a special ritual while you hold the weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest. You can then dismiss the weapon, shunting it into an extradimensional space, and it appears whenever you create your pact weapon thereafter. You can’t affect an artifact or a sentient weapon in this way. The weapon ceases being your pact weapon if you die, if you perform the 1-hour ritual on a different weapon, or if you use a 1-hour ritual to break your bond to it. The weapon appears at your feet if it is in the extradimensional space when the bond breaks.",
      "If your patron is the Archfey, your weapon might be a slender blade wrapped in leafy vines. If you serve the Fiend, your weapon could be an axe made of black metal and adorned with decorative flames. If your patron is the Great Old One, your weapon might be an ancient-­looking spear, with a gemstone embedded in its head, carved to look like a terrible unblinking eye."
    ],
    "group": "Warlock Pact",
    "url": "http://www.dnd5eapi.co/api/features/378"
  },
  {
    "index": 379,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Pact of the Tome",
    "level": 3,
    "desc": [
      "Your patron gives you a grimoire called a Book of Shadows. When you gain this feature, choose three cantrips from any class’s spell list (the three needn’t be from the same list). While the book is on your person, you can cast those cantrips at will. They don’t count against your number of cantrips known. If they don’t appear on the warlock spell list, they are nonetheless warlock spells for you.",
      "If you lose your Book of Shadows, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and it destroys the previous book. The book turns to ash when you die.",
      "Your Book of Shadows might be a fine, gilt-­edged tome with spells of enchantment and illusion, gifted to you by the lordly Archfey. It could be a weighty tome bound in demon hide studded with iron, holding spells of conjuration and a wealth of forbidden lore about the sinister regions of the cosmos, a gift of the Fiend. Or it could be the tattered diary of a lunatic driven mad by contact with the Great Old One, holding scraps of spells that only your own burgeoning insanity allows you to understand and cast."
    ],
    "group": "Warlock Pact",
    "url": "http://www.dnd5eapi.co/api/features/379"
  },
  {
    "index": 380,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Ability Score Improvement 1",
    "level": 4,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/380"
  },
  {
    "index": 381,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Choose: Additional Eldritch Invocation",
    "level": 5,
    "desc": [
      "In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.",
      "At 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.",
      "Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level."
    ],
    "choice": {
      "choose": 1,
      "type": "feature",
      "from": [
        {
          "url": "http://www.dnd5eapi.co/api/features/344",
          "name": "Eldritch Invocation: Agonizing Blast"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/345",
          "name": "Eldritch Invocation: Armor of Shadows"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/346",
          "name": "Eldritch Invocation: Beast Speech"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/347",
          "name": "Eldritch Invocation: Beguiling Influence"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/348",
          "name": "Eldritch Invocation: Book of Ancient Secrets"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/349",
          "name": "Eldritch Invocation: Devil’s Sight"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/350",
          "name": "Eldritch Invocation: Eldritch Sight"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/351",
          "name": "Eldritch Invocation: Eldritch Spear"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/352",
          "name": "Eldritch Invocation: Eyes of the Rune Keeper"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/353",
          "name": "Eldritch Invocation: Fiendish Vigor"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/354",
          "name": "Eldritch Invocation: Gaze of Two Minds"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/355",
          "name": "Eldritch Invocation: Mask of Many Faces"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/356",
          "name": "Eldritch Invocation: Misty Visions"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/357",
          "name": "Eldritch Invocation: Repelling Blast"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/358",
          "name": "Eldritch Invocation: Thief of Five Fates"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/359",
          "name": "Eldritch Invocation: Voice of the Chain Master"
        }
      ]
    },
    "url": "http://www.dnd5eapi.co/api/features/381"
  },
  {
    "index": 382,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/11",
      "name": "Fiend"
    },
    "name": "Dark One's Own Luck",
    "level": 6,
    "desc": [
      "Starting at 6th level, you can call on your patron to alter fate in your favor. When you make an ability check or a saving throw, you can use this feature to add a d10 to your roll. You can do so after seeing the initial roll but before any of the roll’s effects occur.",
      "Once you use this feature, you can’t use it again until you finish a short or long rest."
    ],
    "url": "http://www.dnd5eapi.co/api/features/382"
  },
  {
    "index": 383,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Choose: Additional Eldritch Invocation",
    "level": 7,
    "desc": [
      "In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.",
      "At 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.",
      "Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level."
    ],
    "choice": {
      "choose": 1,
      "type": "feature",
      "from": [
        {
          "url": "http://www.dnd5eapi.co/api/features/344",
          "name": "Eldritch Invocation: Agonizing Blast"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/345",
          "name": "Eldritch Invocation: Armor of Shadows"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/346",
          "name": "Eldritch Invocation: Beast Speech"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/347",
          "name": "Eldritch Invocation: Beguiling Influence"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/348",
          "name": "Eldritch Invocation: Book of Ancient Secrets"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/349",
          "name": "Eldritch Invocation: Devil’s Sight"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/350",
          "name": "Eldritch Invocation: Eldritch Sight"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/351",
          "name": "Eldritch Invocation: Eldritch Spear"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/352",
          "name": "Eldritch Invocation: Eyes of the Rune Keeper"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/353",
          "name": "Eldritch Invocation: Fiendish Vigor"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/354",
          "name": "Eldritch Invocation: Gaze of Two Minds"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/355",
          "name": "Eldritch Invocation: Mask of Many Faces"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/356",
          "name": "Eldritch Invocation: Misty Visions"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/357",
          "name": "Eldritch Invocation: Repelling Blast"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/358",
          "name": "Eldritch Invocation: Thief of Five Fates"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/359",
          "name": "Eldritch Invocation: Voice of the Chain Master"
        }
      ]
    },
    "url": "http://www.dnd5eapi.co/api/features/383"
  },
  {
    "index": 384,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Ability Score Improvement 2",
    "level": 8,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/384"
  },
  {
    "index": 385,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Choose: Additional Eldritch Invocation",
    "level": 9,
    "desc": [
      "In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.",
      "At 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.",
      "Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level."
    ],
    "choice": {
      "choose": 1,
      "type": "feature",
      "from": [
        {
          "url": "http://www.dnd5eapi.co/api/features/344",
          "name": "Eldritch Invocation: Agonizing Blast"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/345",
          "name": "Eldritch Invocation: Armor of Shadows"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/346",
          "name": "Eldritch Invocation: Beast Speech"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/347",
          "name": "Eldritch Invocation: Beguiling Influence"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/348",
          "name": "Eldritch Invocation: Book of Ancient Secrets"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/349",
          "name": "Eldritch Invocation: Devil’s Sight"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/350",
          "name": "Eldritch Invocation: Eldritch Sight"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/351",
          "name": "Eldritch Invocation: Eldritch Spear"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/352",
          "name": "Eldritch Invocation: Eyes of the Rune Keeper"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/353",
          "name": "Eldritch Invocation: Fiendish Vigor"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/354",
          "name": "Eldritch Invocation: Gaze of Two Minds"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/355",
          "name": "Eldritch Invocation: Mask of Many Faces"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/356",
          "name": "Eldritch Invocation: Misty Visions"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/357",
          "name": "Eldritch Invocation: Repelling Blast"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/358",
          "name": "Eldritch Invocation: Thief of Five Fates"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/359",
          "name": "Eldritch Invocation: Voice of the Chain Master"
        }
      ]
    },
    "url": "http://www.dnd5eapi.co/api/features/385"
  },
  {
    "index": 386,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/11",
      "name": "Fiend"
    },
    "name": "Fiendish Resilience",
    "level": 10,
    "desc": [
      "Starting at 10th level, you can choose one damage type when you finish a short or long rest. You gain resistance to that damage type until you choose a different one with this feature. Damage from magical weapons or silver weapons ignores this resistance."
    ],
    "url": "http://www.dnd5eapi.co/api/features/386"
  },
  {
    "index": 387,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Mystic Arcanum (6th level)",
    "level": 11,
    "desc": [
      "At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th- level spell from the warlock spell list as this arcanum.",
      "You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.",
      "At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th- level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest."
    ],
    "url": "http://www.dnd5eapi.co/api/features/387"
  },
  {
    "index": 388,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Ability Score Improvement 3",
    "level": 12,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/388"
  },
  {
    "index": 389,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Choose: Additional Eldritch Invocation",
    "level": 12,
    "desc": [
      "In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.",
      "At 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.",
      "Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level."
    ],
    "choice": {
      "choose": 1,
      "type": "feature",
      "from": [
        {
          "url": "http://www.dnd5eapi.co/api/features/344",
          "name": "Eldritch Invocation: Agonizing Blast"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/345",
          "name": "Eldritch Invocation: Armor of Shadows"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/346",
          "name": "Eldritch Invocation: Beast Speech"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/347",
          "name": "Eldritch Invocation: Beguiling Influence"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/348",
          "name": "Eldritch Invocation: Book of Ancient Secrets"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/349",
          "name": "Eldritch Invocation: Devil’s Sight"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/350",
          "name": "Eldritch Invocation: Eldritch Sight"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/351",
          "name": "Eldritch Invocation: Eldritch Spear"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/352",
          "name": "Eldritch Invocation: Eyes of the Rune Keeper"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/353",
          "name": "Eldritch Invocation: Fiendish Vigor"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/354",
          "name": "Eldritch Invocation: Gaze of Two Minds"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/355",
          "name": "Eldritch Invocation: Mask of Many Faces"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/356",
          "name": "Eldritch Invocation: Misty Visions"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/357",
          "name": "Eldritch Invocation: Repelling Blast"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/358",
          "name": "Eldritch Invocation: Thief of Five Fates"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/359",
          "name": "Eldritch Invocation: Voice of the Chain Master"
        }
      ]
    },
    "url": "http://www.dnd5eapi.co/api/features/389"
  },
  {
    "index": 390,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Mystic Arcanum (7th level)",
    "level": 13,
    "desc": [
      "At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th- level spell from the warlock spell list as this arcanum.",
      "You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.",
      "At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th- level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest."
    ],
    "url": "http://www.dnd5eapi.co/api/features/390"
  },
  {
    "index": 391,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/11",
      "name": "Fiend"
    },
    "name": "Hurl Through Hell",
    "level": 14,
    "desc": [
      "Starting at 14th level, when you hit a creature with an attack, you can use this feature to instantly transport the target through the lower planes. The creature disappears and hurtles through a nightmare landscape.",
      "At the end of your next turn, the target returns to the space it previously occupied, or the nearest unoccupied space. If the target is not a fiend, it takes 10d10 psychic damage as it reels from its horrific experience.",
      "Once you use this feature, you can’t use it again until you finish a long rest."
    ],
    "url": "http://www.dnd5eapi.co/api/features/391"
  },
  {
    "index": 392,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Mystic Arcanum (8th level)",
    "level": 15,
    "desc": [
      "At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th- level spell from the warlock spell list as this arcanum.",
      "You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.",
      "At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th- level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest."
    ],
    "url": "http://www.dnd5eapi.co/api/features/392"
  },
  {
    "index": 393,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Choose: Additional Eldritch Invocation",
    "level": 15,
    "desc": [
      "In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.",
      "At 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.",
      "Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level."
    ],
    "choice": {
      "choose": 1,
      "type": "feature",
      "from": [
        {
          "url": "http://www.dnd5eapi.co/api/features/344",
          "name": "Eldritch Invocation: Agonizing Blast"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/345",
          "name": "Eldritch Invocation: Armor of Shadows"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/346",
          "name": "Eldritch Invocation: Beast Speech"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/347",
          "name": "Eldritch Invocation: Beguiling Influence"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/348",
          "name": "Eldritch Invocation: Book of Ancient Secrets"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/349",
          "name": "Eldritch Invocation: Devil’s Sight"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/350",
          "name": "Eldritch Invocation: Eldritch Sight"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/351",
          "name": "Eldritch Invocation: Eldritch Spear"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/352",
          "name": "Eldritch Invocation: Eyes of the Rune Keeper"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/353",
          "name": "Eldritch Invocation: Fiendish Vigor"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/354",
          "name": "Eldritch Invocation: Gaze of Two Minds"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/355",
          "name": "Eldritch Invocation: Mask of Many Faces"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/356",
          "name": "Eldritch Invocation: Misty Visions"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/357",
          "name": "Eldritch Invocation: Repelling Blast"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/358",
          "name": "Eldritch Invocation: Thief of Five Fates"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/359",
          "name": "Eldritch Invocation: Voice of the Chain Master"
        }
      ]
    },
    "url": "http://www.dnd5eapi.co/api/features/393"
  },
  {
    "index": 394,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Ability Score Improvement 5",
    "level": 16,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/394"
  },
  {
    "index": 395,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Mystic Arcanum (9th level)",
    "level": 17,
    "desc": [
      "At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th- level spell from the warlock spell list as this arcanum.",
      "You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.",
      "At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th- level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest."
    ],
    "url": "http://www.dnd5eapi.co/api/features/395"
  },
  {
    "index": 396,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Choose: Additional Eldritch Invocation",
    "level": 18,
    "desc": [
      "In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.",
      "At 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.",
      "Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level."
    ],
    "choice": {
      "choose": 1,
      "type": "feature",
      "from": [
        {
          "url": "http://www.dnd5eapi.co/api/features/344",
          "name": "Eldritch Invocation: Agonizing Blast"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/345",
          "name": "Eldritch Invocation: Armor of Shadows"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/346",
          "name": "Eldritch Invocation: Beast Speech"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/347",
          "name": "Eldritch Invocation: Beguiling Influence"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/348",
          "name": "Eldritch Invocation: Book of Ancient Secrets"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/349",
          "name": "Eldritch Invocation: Devil’s Sight"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/350",
          "name": "Eldritch Invocation: Eldritch Sight"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/351",
          "name": "Eldritch Invocation: Eldritch Spear"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/352",
          "name": "Eldritch Invocation: Eyes of the Rune Keeper"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/353",
          "name": "Eldritch Invocation: Fiendish Vigor"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/354",
          "name": "Eldritch Invocation: Gaze of Two Minds"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/355",
          "name": "Eldritch Invocation: Mask of Many Faces"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/356",
          "name": "Eldritch Invocation: Misty Visions"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/357",
          "name": "Eldritch Invocation: Repelling Blast"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/358",
          "name": "Eldritch Invocation: Thief of Five Fates"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/359",
          "name": "Eldritch Invocation: Voice of the Chain Master"
        }
      ]
    },
    "url": "http://www.dnd5eapi.co/api/features/396"
  },
  {
    "index": 397,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Ability Score Improvement 6",
    "level": 19,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/397"
  },
  {
    "index": 398,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Eldritch Master",
    "level": 20,
    "desc": [
      "At 20th level, you can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature.",
      "Once you regain spell slots with this feature, you must finish a long rest before you can do so again."
    ],
    "url": "http://www.dnd5eapi.co/api/features/398"
  },
  {
    "index": 399,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "subclass": {},
    "name": "Choose: Additional Eldritch Invocation",
    "level": 20,
    "desc": [
      "In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.",
      "At 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.",
      "Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level."
    ],
    "choice": {
      "choose": 1,
      "type": "feature",
      "from": [
        {
          "url": "http://www.dnd5eapi.co/api/features/344",
          "name": "Eldritch Invocation: Agonizing Blast"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/345",
          "name": "Eldritch Invocation: Armor of Shadows"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/346",
          "name": "Eldritch Invocation: Beast Speech"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/347",
          "name": "Eldritch Invocation: Beguiling Influence"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/348",
          "name": "Eldritch Invocation: Book of Ancient Secrets"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/349",
          "name": "Eldritch Invocation: Devil’s Sight"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/350",
          "name": "Eldritch Invocation: Eldritch Sight"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/351",
          "name": "Eldritch Invocation: Eldritch Spear"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/352",
          "name": "Eldritch Invocation: Eyes of the Rune Keeper"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/353",
          "name": "Eldritch Invocation: Fiendish Vigor"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/354",
          "name": "Eldritch Invocation: Gaze of Two Minds"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/355",
          "name": "Eldritch Invocation: Mask of Many Faces"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/356",
          "name": "Eldritch Invocation: Misty Visions"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/357",
          "name": "Eldritch Invocation: Repelling Blast"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/358",
          "name": "Eldritch Invocation: Thief of Five Fates"
        },
        {
          "url": "http://www.dnd5eapi.co/api/features/359",
          "name": "Eldritch Invocation: Voice of the Chain Master"
        }
      ]
    },
    "url": "http://www.dnd5eapi.co/api/features/399"
  },
  {
    "index": 400,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/12",
      "name": "Wizard"
    },
    "subclass": {},
    "name": "Spellcasting",
    "level": 1,
    "desc": [
      "As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power."
    ],
    "reference": "http://www.dnd5eapi.co/api/spellcasting/wizard",
    "url": "http://www.dnd5eapi.co/api/features/400"
  },
  {
    "index": 401,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/12",
      "name": "Wizard"
    },
    "subclass": {},
    "name": "Arcane Recovery",
    "level": 1,
    "desc": [
      "You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.",
      "For example, if you’re a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots."
    ],
    "url": "http://www.dnd5eapi.co/api/features/401"
  },
  {
    "index": 402,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/12",
      "name": "Wizard"
    },
    "subclass": {},
    "name": "Arcane Tradition",
    "level": 2,
    "desc": [
      "When you reach 2nd level, you choose an arcane tradition, shaping your practice of magic through one of eight schools: Abjuration, Conjuration, Divination, Enchantment, Evocation, Illusion, Necromancy, or Transmutation, all detailed at the end of the class description.",
      "Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level."
    ],
    "url": "http://www.dnd5eapi.co/api/features/402"
  },
  {
    "index": 403,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/12",
      "name": "Wizard"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/12",
      "name": "Evocation"
    },
    "name": "Evocation Savant",
    "level": 2,
    "desc": [
      "Beginning when you select this school at 2nd level, the gold and time you must spend to copy an evocation spell into your spellbook is halved."
    ],
    "url": "http://www.dnd5eapi.co/api/features/403"
  },
  {
    "index": 404,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/12",
      "name": "Wizard"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/12",
      "name": "Evocation"
    },
    "name": "Sculpt Spells",
    "level": 2,
    "desc": [
      "Beginning at 2nd level, you can create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 + the spell’s level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save."
    ],
    combat: true,
    "url": "http://www.dnd5eapi.co/api/features/404"
  },
  {
    "index": 405,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/12",
      "name": "Wizard"
    },
    "subclass": {},
    "name": "Ability Score Improvement 1",
    "level": 4,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/405"
  },
  {
    "index": 406,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/12",
      "name": "Wizard"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/12",
      "name": "Evocation"
    },
    "name": "Potent Cantrip",
    "level": 6,
    "desc": [
      "Starting at 6th level, your damaging cantrips affect even creatures that avoid the brunt of the effect. When a creature succeeds on a saving throw against your cantrip, the creature takes half the cantrip’s damage (if any) but suffers no additional effect from the cantrip."
    ],
    combat: true,
    "url": "http://www.dnd5eapi.co/api/features/406"
  },
  {
    "index": 407,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/12",
      "name": "Wizard"
    },
    "subclass": {},
    "name": "Ability Score Improvement 2",
    "level": 8,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/407"
  },
  {
    "index": 409,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/12",
      "name": "Wizard"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/12",
      "name": "Evocation"
    },
    "name": "Empowered Evocation",
    "level": 10,
    "desc": [
      "Beginning at 10th level, you can add your Intelligence modifier to one damage roll of any wizard evocation spell you cast."
    ],
    combat: true,
    "url": "http://www.dnd5eapi.co/api/features/409"
  },
  {
    "index": 410,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/12",
      "name": "Wizard"
    },
    "subclass": {},
    "name": "Ability Score Improvement 3",
    "level": 12,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/410"
  },
  {
    "index": 412,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/12",
      "name": "Wizard"
    },
    "subclass": {
      "url": "http://www.dnd5eapi.co/api/subclasses/12",
      "name": "Evocation"
    },
    "name": "Overchannel",
    "level": 14,
    "desc": [
      "Starting at 14th level, you can increase the power of your simpler spells. When you cast a wizard spell of 1st through 5th level that deals damage, you can deal maximum damage with that spell.",
      "The first time you do so, you suffer no adverse effect. If you use this feature again before you finish a long rest, you take 2d12 necrotic damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the necrotic damage per spell level increases by 1d12. This damage ignores resistance and immunity."
    ],
    combat: true,
    "url": "http://www.dnd5eapi.co/api/features/412"
  },
  {
    "index": 413,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/12",
      "name": "Wizard"
    },
    "subclass": {},
    "name": "Ability Score Improvement 4",
    "level": 16,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/413"
  },
  {
    "index": 414,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/12",
      "name": "Wizard"
    },
    "subclass": {},
    "name": "Spell Mastery",
    "level": 18,
    "desc": [
      "At 18th level, you have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal.",
      "By spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels."
    ],
    combat: true,
    "url": "http://www.dnd5eapi.co/api/features/414"
  },
  {
    "index": 415,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/12",
      "name": "Wizard"
    },
    "subclass": {},
    "name": "Ability Score Improvement 5",
    "level": 19,
    "desc": [
      "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature."
    ],
    "url": "http://www.dnd5eapi.co/api/features/415"
  },
  {
    "index": 416,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/12",
      "name": "Wizard"
    },
    "subclass": {},
    "name": "Signature Spell",
    "level": 20,
    "desc": [
      "When you reach 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don’t count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can’t do so again until you finish a short or long rest.",
      "If you want to cast either spell at a higher level, you must expend a spell slot as normal."
    ],
    combat: true,
    "url": "http://www.dnd5eapi.co/api/features/416"
  },
  {
    "class": {
      index: 3,
      name: "Cleric",
    },
    subclass: {
      "key": "cleric_knowledge",
      "name": "Knowledge"
    },
    name: "Blessings of Knowledge",
    level: 1,
    desc: [
      "At 1st level, you learn two languages of your choice. You also become proficient in your choice of two of the following skills: Arcana, History, Nature, or Religion.",
      "Your proficiency bonus is doubled for any ability check you make that uses either of those skills."
    ],
  },
  {
    "class": {
      index: 3,
      name: "Cleric",
    },
    subclass: {
      "key": "cleric_knowledge",
      "name": "Knowledge"
    },
    name: "Channel Divinity: Knowledge of the Ages",
    level: 2,
    desc: [
      "Starting at 2nd level, you can use your Channel Divinity to tap into a divine well of knowledge. As an action, you choose one skill or tool. For 10 minutes, you have proficiency with the chosen skill or tool."
    ],
  },
  {
    "class": {
      index: 3,
      name: "Cleric",
    },
    subclass: {
      "key": "cleric_light",
      "name": "Light"
    },
    name: "Bonus Cantrip",
    level: 1,
    desc: [
      "When you choose this domain at 1st level, you gain the light cantrip if you don't already know it.",
    ],
  },
  {
    "class": {
      index: 3,
      name: "Cleric",
    },
    subclass: {
      "key": "cleric_light",
      "name": "Light"
    },
    name: "Warding Flame",
    level: 1,
    desc: [
      "Also at 1st level, you can interpose divine light between yourself and an attacking enemy. When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can't be blinded is immune to this feature.",
      "You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.",
    ],
  },
  {
    "class": {
      index: 3,
      name: "Cleric",
    },
    subclass: {
      "key": "cleric_light",
      "name": "Light"
    },
    name: "Channel Divinity: Radiance of the Dawn",
    level: 2,
    desc: [
      "Starting at 2nd level, you can use your Channel Divinity to harness sunlight, banishing darkness and dealing radiant damage to your foes.",
      "As an action, you present your holy symbol, and any magical darkness within 30 feet of you is dispelled. Additionally, each hostile creature within 30 feet of you must make a Constitution saving throw. A creature takes radiant damage equal to 2d10 + your cleric level on a failed saving throw, and half as much damage on a successful one. A creature that has total cover from you is not affected."
    ],
  },
  {
    "class": {
      index: 3,
      name: "Cleric",
    },
    subclass: {
      "key": "cleric_nature",
      "name": "Nature"
    },
    name: "Acolyte of Nature",
    level: 1,
    desc: [
      "At 1st level, you learn one druid cantrip of your choice. You also gain proficiency in one of the following skills of your choice: Animal Handling, Nature, or Survival.",
    ],
  },
  {
    "class": {
      index: 3,
      name: "Cleric",
    },
    subclass: {
      "key": "cleric_nature",
      "name": "Nature"
    },
    name: "Bonus Proficiency",
    level: 1,
    desc: [
      "Also at 1st level, you gain proficiency with heavy armor."
    ],
  },
  {
    "class": {
      index: 3,
      name: "Cleric",
    },
    subclass: {
      "key": "cleric_nature",
      "name": "Nature"
    },
    name: "Channel Divinity: Charm Animals and Plants",
    level: 2,
    desc: [
      "Starting at 2nd level, you can use your Channel Divinity to charm animals and plants.",
      "As an action, you present your holy symbol and invoke the name of your deity. Each beast or plant creature that can see you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is charmed by you for 1 minute or until it takes damage. While it is charmed by you, it is friendly to you and other creatures you designate.",
    ],
  },
  {
    "class": {
      index: 3,
      name: "Cleric",
    },
    subclass: {
      "key": "cleric_tempest",
      "name": "Tempest"
    },
    name: "Bonus Proficiencies",
    level: 1,
    desc: [
      "At 1st level, you gain proficiency with martial weapons and heavy armor."
    ],
  },
  {
    "class": {
      index: 3,
      name: "Cleric",
    },
    subclass: {
      "key": "cleric_tempest",
      "name": "Tempest"
    },
    name: "Wrath of the Storm",
    level: 1,
    desc: [
      "Also at 1st level, you can thunderously rebuke attackers. When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity saving throw. The creature takes 2d8 lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a successful one.",
      "You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest."
    ],
  },
  {
    "class": {
      index: 3,
      name: "Cleric",
    },
    subclass: {
      "key": "cleric_tempest",
      "name": "Tempest"
    },
    name: "Channel Divinity: Destructive Wrath",
    level: 2,
    desc: [
      "Starting at 2nd level, you can use your Channel Divinity to wield the power of the storm with unchecked ferocity.",
      "When you roll lightning or thunder damage, you can use your Channel Divinity to deal maximum damage, instead of rolling."
    ],
  },
  {
    "class": {
      index: 3,
      name: "Cleric",
    },
    subclass: {
      "key": "cleric_trickery",
      "name": "Trickery"
    },
    name: "Blessing of the Trickster",
    level: 1,
    desc: [
      "Starting when you choose this domain at 1st level, you can use your action to touch a willing creature other than yourself to give it advantage on Dexterity (Stealth) checks. This blessing lasts for 1 hour or until you use this feature again."
    ],
  },
  {
    "class": {
      index: 3,
      name: "Cleric",
    },
    subclass: {
      "key": "cleric_trickery",
      "name": "Trickery"
    },
    name: "Channel Divinity: Invoke Duplicity",
    level: 2,
    desc: [
      "Starting at 2nd level, you can use your Channel Divinity to create an illusory duplicate of yourself.",
      "As an action, you create a perfect illusion of yourself that lasts for 1 minute, or until you lose your concentration (as if you were concentrating on a spell). The illusion appears in an unoccupied space that you can see within 30 feet of you. As a bonus action on your turn, you can move the illusion up to 30 feet to a space you can see, but it must remain within 120 feet of you.",
      "For the duration, you can cast spells as though you were in the illusion's space, but you must use your own senses. Additionally, when both you and your illusion are within 5 feet of a creature that can see the illusion, you have advantage on attack rolls against that creature, given how distracting the illusion is to the target."
    ],
  },
  {
    "class": {
      index: 3,
      name: "Cleric",
    },
    subclass: {
      "key": "cleric_war",
      "name": "War"
    },
    name: "Bonus Proficiencies",
    level: 1,
    desc: [
      "At 1st level, you gain proficiency with martial weapons and heavy armor."
    ],
  },
  {
    "class": {
      index: 3,
      name: "Cleric",
    },
    subclass: {
      "key": "cleric_war",
      "name": "War"
    },
    name: "War Priest",
    level: 1,
    desc: [
      "From 1st level, your god delivers bolts of inspiration to you while you are engaged in battle. When you use the Attack action, you can make one weapon attack as a bonus action. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest."
    ],
  },
  {
    "class": {
      index: 3,
      name: "Cleric",
    },
    subclass: {
      "key": "cleric_war",
      "name": "War"
    },
    name: "Channel Divinity: Guided Strike",
    level: 1,
    desc: [
      "Starting at 2nd level, you can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses."
    ],
  },
  {
    "class": {index: 1, name: "Barbarian"},
    subclass: {
      "key": "ancestral_guardian",
      "name": "Ancestral Guardian"
    },
    name: "Ancestral Protectors",
    level: 3,
    desc: [
      "Starting when you choose this path at 3rd level, spectral warriors appear when you enter your rage. While you're raging, the first creature you hit with an attack on your turn becomes the target of the warriors, which hinder its attacks. Until the start of your next turn, that target has disadvantage on any attack roll that isn't against you, and when the target hits a creature other than you with an attack, that creature has resistance to the damage dealt by the attack. The effect on the target ends early if your rage ends."
    ],
  },
  {
    "class": {index: 1, name: "Barbarian"},
    subclass: {
      "key": "battlerager",
      "name": "Battlerager"
    },
    name: "Restriction - Dwarves Only",
    level: 3,
    desc: [
      "Only dwarves can follow the Path of the Battlerager. The battlerager fills a particular niche in dwarven society and culture.",
      "Your DM can lift this restriction to better suit the campaign. The restriction exists for the Forgotten Realms. It might not apply to your DM's setting or your DM's version of the Realms."
    ],
  },
  {
    "class": {index: 1, name: "Barbarian"},
    subclass: {
      "key": "battlerager",
      "name": "Battlerager"
    },
    name: "Battlerager Armor",
    level: 3,
    desc: [
      "When you choose this path at 3rd level, you gain the ability to use spiked armor as a weapon.",
      "While you are wearing spiked armor and are raging, you can use a bonus action to make one melee weapon attack with your armor spikes at a target within 5 feet of you. If the attack hits, the spikes deal 1d4 piercing damage. You use your Strength modifier for the attack and damage rolls.",
      "Additionally, when you use the Attack action to grapple a creature, the target takes 3 piercing damage if your grapple check succeeds."
    ],
  },
];
