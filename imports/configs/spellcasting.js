export const SPELLCASTING = {
  bard: {
    "key": 'bard',
    "class": {
      "index": 2,
      "name": "Bard"
    },
    "level": 1,
    "spellcasting_ability": 'cha',
    "info": [{
      "name": "Cantrips",
      "desc": ["You know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Bard table."]
    }, {
      "name": "Spell Slots",
      "desc": ["The Bard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.", "For example, if you know the 1st-level spell cure wounds and have a 1st-level and a 2nd-level spell slot available, you can cast cure wounds using either slot."]
    }, {
      "name": "Spells Known of 1st Level and Higher",
      "desc": ["You know four 1st-level spells of your choice from the bard spell list.", "The Spells Known column of the Bard table shows when you learn more bard spells of your choice.", "Each of these spells must be of a level for which you have spell slots, as shown on the table. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.", "Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots."]
    }, {
      "name": "Spellcasting Ability",
      "desc": ["Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.", "Spell save DC = 8 + your proficiency bonus + your Charisma modifier.", "Spell attack modifier = your proficiency bonus + your Charisma modifier."]
    }, {
      "name": "Ritual Casting",
      "desc": ["You can cast any bard spell you know as a ritual if that spell has the ritual tag."]
    }, {
      "name": "Spellcasting Focus",
      "desc": ["You can use a musical instrument (see Equipment) as a spellcasting focus for your bard spells."]
    }],
    all_prepared: true,
    details_per_level: {
      1:  {cantrips: 2, spells: 4,  slots: {1: 2}},
      2:  {cantrips: 2, spells: 5,  slots: {1: 3}},
      3:  {cantrips: 2, spells: 6,  slots: {1: 4, 2: 2}},
      4:  {cantrips: 3, spells: 7,  slots: {1: 4, 2: 3}},
      5:  {cantrips: 3, spells: 8,  slots: {1: 4, 2: 3, 3: 2}},
      6:  {cantrips: 3, spells: 9,  slots: {1: 4, 2: 3, 3: 3}},
      7:  {cantrips: 3, spells: 10, slots: {1: 4, 2: 3, 3: 3, 4: 1}},
      8:  {cantrips: 3, spells: 11, slots: {1: 4, 2: 3, 3: 3, 4: 2}},
      9:  {cantrips: 3, spells: 12, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 1}},
      10: {cantrips: 4, spells: 14, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2}},
      11: {cantrips: 4, spells: 15, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1}},
      12: {cantrips: 4, spells: 15, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1}},
      13: {cantrips: 4, spells: 16, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1}},
      14: {cantrips: 4, spells: 18, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1}},
      15: {cantrips: 4, spells: 19, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1}},
      16: {cantrips: 4, spells: 19, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1}},
      17: {cantrips: 4, spells: 20, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1}},
      18: {cantrips: 4, spells: 22, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1}},
      19: {cantrips: 4, spells: 22, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 2, 7: 1, 8: 1, 9: 1}},
      20: {cantrips: 4, spells: 22, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 2, 7: 2, 8: 1, 9: 1}},
    }
  },
  cleric: {
    key: 'cleric',
    "class": {
      "index": 3,
      "name": "Cleric"
    },
    "level": 1,
    "spellcasting_ability": 'wis',
    "info": [{
      "name": "Cantrips",
      "desc": ["At 1st level, you know three cantrips of your choice from the cleric spell list. You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table."]
    }, {
      "name": "Preparing and Casting Spells",
      "desc": ["The Cleric table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell\'s level or higher. You regain all expended spell slots when you finish a long rest.", "You prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots.", "For example, if you are a 3rd-level cleric, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn\'t remove it from your list of prepared spells.", "You can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list."]
    }, {
      "name": "Spellcasting Ability",
      "desc": ["Wisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one.", "Spell save DC = 8 + your proficiency bonus + your Wisdom modifier", "Spell attack modifier = your proficiency bonus + your Wisdom modifier"]
    }, {
      "name": "Ritual Casting",
      "desc": ["You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared."]
    }, {
      "name": "Spellcasting Focus",
      "desc": ["You can use a holy symbol (see Equipment) as a spellcasting focus for your cleric spells."]
    }],
    all_known: true, // true when the class does not need to learn spells, but is only limited by the highest slot level they have spells for. their list is determined by their class, period.
    details_per_level: {
      1:  {cantrips: 3, slots: {1: 2}},
      2:  {cantrips: 3, slots: {1: 3}},
      3:  {cantrips: 3, slots: {1: 4, 2: 2}},
      4:  {cantrips: 4, slots: {1: 4, 2: 3}},
      5:  {cantrips: 4, slots: {1: 4, 2: 3, 3: 2}},
      6:  {cantrips: 4, slots: {1: 4, 2: 3, 3: 3}},
      7:  {cantrips: 4, slots: {1: 4, 2: 3, 3: 3, 4: 1}},
      8:  {cantrips: 4, slots: {1: 4, 2: 3, 3: 3, 4: 2}},
      9:  {cantrips: 4, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 1}},
      10: {cantrips: 5, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2}},
      11: {cantrips: 5, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1}},
      12: {cantrips: 5, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1}},
      13: {cantrips: 5, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1}},
      14: {cantrips: 5, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1}},
      15: {cantrips: 5, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1}},
      16: {cantrips: 5, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1}},
      17: {cantrips: 5, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1}},
      18: {cantrips: 5, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1}},
      19: {cantrips: 5, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 2, 7: 1, 8: 1, 9: 1}},
      20: {cantrips: 5, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 2, 7: 2, 8: 1, 9: 1}},
    }
  },
  druid: {
    key: "druid",
    "class": {
      "index": 4,
      "name": "Druid"
    },
    "level": 1,
    "spellcasting_ability": "wis",
    "info": [{
      "name": "Cantrips",
      "desc": ["At 1st level, you know two cantrips of your choice from the druid spell list. You learn additional druid cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table."]
    }, {
      "name": "Preparing and Casting Spells",
      "desc": ["The Druid table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these druid spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.", "You prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your druid level (minimum of one spell). The spells must be of a level for which you have spell slots.", "For example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.", "You can also change your list of prepared spells when you finish a long rest. Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list."]
    }, {
      "name": "Spellcasting Ability",
      "desc": ["Wisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one."]
    }, {
      "name": "Ritual Casting",
      "desc": ["You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared."]
    }, {
      "name": "Spellcasting Focus",
      "desc": ["You can use a druidic focus (see chapter 5, â€œEquipmentâ€�) as a spellcasting focus for your druid spells."]
    }],
    details_per_level: {
      1:  {cantrips: 2, slots: {1: 2}},
      2:  {cantrips: 2, slots: {1: 3}},
      3:  {cantrips: 2, slots: {1: 4, 2: 2}},
      4:  {cantrips: 3, slots: {1: 4, 2: 3}},
      5:  {cantrips: 3, slots: {1: 4, 2: 3, 3: 2}},
      6:  {cantrips: 3, slots: {1: 4, 2: 3, 3: 3}},
      7:  {cantrips: 3, slots: {1: 4, 2: 3, 3: 3, 4: 1}},
      8:  {cantrips: 3, slots: {1: 4, 2: 3, 3: 3, 4: 2}},
      9:  {cantrips: 3, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 1}},
      10: {cantrips: 4, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2}},
      11: {cantrips: 4, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1}},
      12: {cantrips: 4, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1}},
      13: {cantrips: 4, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1}},
      14: {cantrips: 4, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1}},
      15: {cantrips: 4, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1}},
      16: {cantrips: 4, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1}},
      17: {cantrips: 4, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1}},
      18: {cantrips: 4, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 1, 7: 1, 8: 1, 9: 1}},
      19: {cantrips: 4, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 1, 8: 1, 9: 1}},
      20: {cantrips: 4, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 2, 8: 1, 9: 1}},
    }
  },
  paladin: {
    key: 'paladin',
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/7",
      "name": "Paladin"
    },
    "level": 2,
    "spellcasting_ability": 'cha',
    "info": [{
      "name": "Preparing and Casting Spells",
      "desc": ["The Paladin table shows how many spell slots you have to cast your spells. To cast one of your paladin spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.", "You prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.", "For example, if you are a 5th-level paladin, you have four 1st-level and two 2nd-level spell slots. With a Charisma of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or a 2nd- level slot. Casting the spell doesn't remove it from your list of prepared spells.", "You can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list."]
    }, {
      "name": "Spellcasting Ability",
      "desc": ["Charisma is your spellcasting ability for your paladin spells, since their power derives from the strength of your convictions. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a paladin spell you cast and when making an attack roll with one."]
    }, {
      "name": "Spellcasting Focus",
      "desc": ["You can use a holy symbol as a spellcasting focus for your paladin spells."]
    }],
    details_per_level: {
      1:  {cantrips: 0, slots: {1: 0}},
      2:  {cantrips: 0, slots: {1: 2}},
      3:  {cantrips: 0, slots: {1: 3}},
      4:  {cantrips: 0, slots: {1: 3}},
      5:  {cantrips: 0, slots: {1: 4, 2: 2}},
      6:  {cantrips: 0, slots: {1: 4, 2: 2}},
      7:  {cantrips: 0, slots: {1: 4, 2: 3}},
      8:  {cantrips: 0, slots: {1: 4, 2: 3}},
      9:  {cantrips: 0, slots: {1: 4, 2: 3, 3: 2}},
      10: {cantrips: 0, slots: {1: 4, 2: 3, 3: 2}},
      11: {cantrips: 0, slots: {1: 4, 2: 3, 3: 3}},
      12: {cantrips: 0, slots: {1: 4, 2: 3, 3: 3}},
      13: {cantrips: 0, slots: {1: 4, 2: 3, 3: 3, 4: 1}},
      14: {cantrips: 0, slots: {1: 4, 2: 3, 3: 3, 4: 1}},
      15: {cantrips: 0, slots: {1: 4, 2: 3, 3: 3, 4: 2}},
      16: {cantrips: 0, slots: {1: 4, 2: 3, 3: 3, 4: 2}},
      17: {cantrips: 0, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 1}},
      18: {cantrips: 0, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 1}},
      19: {cantrips: 0, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2}},
      20: {cantrips: 0, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2}},
    }
  },
  ranger: {
    key: 'ranger',
    "index": 5,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/8",
      "name": "Ranger"
    },
    "level": 2,
    "spellcasting_ability": 'wis',
    "info": [{
      "name": "Spell Slots",
      "desc": ["The Ranger table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.", "For example, if you know the 1st-level spell animal friendship and have a 1st-level and a 2nd-level spell slot available, you can cast animal friendship using either slot."]
    }, {
      "name": "Spells Known of 1st Level and Higher",
      "desc": ["You know two 1st-level spells of your choice from the ranger spell list.", "The Spells Known column of the Ranger table shows when you learn more ranger spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 5th level in this class, you can learn one new spell of 1st or 2nd level.", "Additionally, when you gain a level in this class, you can choose one of the ranger spells you know and replace it with another spell from the ranger spell list, which also must be of a level for which you have spell slots."]
    }, {
      "name": "Spellcasting Ability",
      "desc": ["Wisdom is your spellcasting ability for your ranger spells, since your magic draws on your attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a ranger spell you cast and when making an attack roll with one."]
    }],
    details_per_level: {
      1:  {cantrips: 0, spells: 0,  slots: {1: 0}},
      2:  {cantrips: 0, spells: 2,  slots: {1: 2}},
      3:  {cantrips: 0, spells: 3,  slots: {1: 3}},
      4:  {cantrips: 0, spells: 3,  slots: {1: 3}},
      5:  {cantrips: 0, spells: 4,  slots: {1: 4, 2: 2}},
      6:  {cantrips: 0, spells: 4,  slots: {1: 4, 2: 2}},
      7:  {cantrips: 0, spells: 5,  slots: {1: 4, 2: 3}},
      8:  {cantrips: 0, spells: 5,  slots: {1: 4, 2: 3}},
      9:  {cantrips: 0, spells: 6,  slots: {1: 4, 2: 3, 3: 2}},
      10: {cantrips: 0, spells: 6,  slots: {1: 4, 2: 3, 3: 2}},
      11: {cantrips: 0, spells: 7,  slots: {1: 4, 2: 3, 3: 3}},
      12: {cantrips: 0, spells: 7,  slots: {1: 4, 2: 3, 3: 3}},
      13: {cantrips: 0, spells: 8,  slots: {1: 4, 2: 3, 3: 3, 4: 1}},
      14: {cantrips: 0, spells: 8,  slots: {1: 4, 2: 3, 3: 3, 4: 1}},
      15: {cantrips: 0, spells: 9,  slots: {1: 4, 2: 3, 3: 3, 4: 2}},
      16: {cantrips: 0, spells: 9,  slots: {1: 4, 2: 3, 3: 3, 4: 2}},
      17: {cantrips: 0, spells: 10, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 1}},
      18: {cantrips: 0, spells: 10, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 1}},
      19: {cantrips: 0, spells: 11, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2}},
      20: {cantrips: 0, spells: 11, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2}},
    }
  },
  sorcerer: {
    key: 'sorcerer',
    "index": 6,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/10",
      "name": "Sorcerer"
    },
    "level": 1,
    "spellcasting_ability": 'cha',
    "info": [{
      "name": "Cantrips",
      "desc": ["At 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn additional sorcerer cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Sorcerer table."]
    }, {
      "name": "Spell Slots",
      "desc": ["The Sorcerer table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.", "For example, if you know the 1st-level spell burning hands and have a 1st-level and a 2nd-level spell slot available, you can cast burning hands using either slot."]
    }, {
      "name": "Spells Known of 1st Level and Higher",
      "desc": ["You know two 1st-level spells of your choice from the sorcerer spell list.", "The Spells Known column of the Sorcerer table shows when you learn more sorcerer spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level. ", "Additionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and replace it with another spell from the sorcerer spell list, which also must be of a level for which you have spell slots."]
    }, {
      "name": "Spellcasting Ability",
      "desc": ["Charisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one."]
    }, {
      "name": "Spellcasting Focus",
      "desc": ["You can use an arcane focus as a spellcasting focus for your sorcerer spells."]
    }],
    details_per_level: {
      1:  {sorcery_points: 0,  cantrips: 4, spells: 2,  slots: {1: 2}},
      2:  {sorcery_points: 2,  cantrips: 4, spells: 3,  slots: {1: 3}},
      3:  {sorcery_points: 3,  cantrips: 4, spells: 4,  slots: {1: 4, 2: 2}},
      4:  {sorcery_points: 4,  cantrips: 5, spells: 5,  slots: {1: 4, 2: 3}},
      5:  {sorcery_points: 5,  cantrips: 5, spells: 6,  slots: {1: 4, 2: 3, 3: 2}},
      6:  {sorcery_points: 6,  cantrips: 5, spells: 7,  slots: {1: 4, 2: 3, 3: 3}},
      7:  {sorcery_points: 7,  cantrips: 5, spells: 8,  slots: {1: 4, 2: 3, 3: 3, 4: 1}},
      8:  {sorcery_points: 8,  cantrips: 5, spells: 9,  slots: {1: 4, 2: 3, 3: 3, 4: 2}},
      9:  {sorcery_points: 9,  cantrips: 5, spells: 10, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 1}},
      10: {sorcery_points: 10, cantrips: 6, spells: 11, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2}},
      11: {sorcery_points: 11, cantrips: 6, spells: 12, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1}},
      12: {sorcery_points: 12, cantrips: 6, spells: 12, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1}},
      13: {sorcery_points: 13, cantrips: 6, spells: 13, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1}},
      14: {sorcery_points: 14, cantrips: 6, spells: 13, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1}},
      15: {sorcery_points: 15, cantrips: 6, spells: 14, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1}},
      16: {sorcery_points: 16, cantrips: 6, spells: 14, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1}},
      17: {sorcery_points: 17, cantrips: 6, spells: 15, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1}},
      18: {sorcery_points: 18, cantrips: 6, spells: 15, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1}},
      19: {sorcery_points: 19, cantrips: 6, spells: 15, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 2, 7: 1, 8: 1, 9: 1}},
      20: {sorcery_points: 20, cantrips: 6, spells: 15, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 2, 7: 2, 8: 1, 9: 1}},
    }
  },
  warlock: {
    key: 'warlock',
    "index": 7,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/11",
      "name": "Warlock"
    },
    "level": 1,
    "spellcasting_ability": 'cha',
    "info": [{
      "name": "Cantrips",
      "desc": ["You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table."]
    }, {
      "name": "Spell Slots",
      "desc": ["The Warlock table shows how many spell slots you have. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.", "For example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell thunderwave, you must spend one of those slots, and you cast it as a 3rd-level spell."]
    }, {
      "name": "Spells Known of 1st Level and Higher",
      "desc": ["At 1st level, you know two 1st-level spells of your choice from the warlock spell list.", "The Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level and higher. ", "A spell you choose must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level.", "Additionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots."]
    }, {
      "name": "Spellcasting Ability",
      "desc": ["Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one."]
    }, {
      "name": "Spellcasting Focus",
      "desc": ["You can use an arcane focus as a spellcasting focus for your warlock spells."]
    }],
    details_per_level: {
      1:  {cantrips: 2, spells: 2,  slots: {1: 1}, invocations: 0},
      2:  {cantrips: 2, spells: 3,  slots: {1: 2}, invocations: 2},
      3:  {cantrips: 2, spells: 4,  slots: {2: 2}, invocations: 2},
      4:  {cantrips: 3, spells: 5,  slots: {2: 2}, invocations: 2},
      5:  {cantrips: 3, spells: 6,  slots: {3: 2}, invocations: 3},
      6:  {cantrips: 3, spells: 7,  slots: {3: 2}, invocations: 3},
      7:  {cantrips: 3, spells: 8,  slots: {4: 2}, invocations: 4},
      8:  {cantrips: 3, spells: 9,  slots: {4: 2}, invocations: 4},
      9:  {cantrips: 3, spells: 10, slots: {5: 2}, invocations: 5},
      10: {cantrips: 4, spells: 10, slots: {5: 2}, invocations: 5},
      11: {cantrips: 4, spells: 11, slots: {5: 3}, invocations: 5},
      12: {cantrips: 4, spells: 11, slots: {5: 3}, invocations: 6},
      13: {cantrips: 4, spells: 12, slots: {5: 3}, invocations: 6},
      14: {cantrips: 4, spells: 12, slots: {5: 3}, invocations: 6},
      15: {cantrips: 4, spells: 13, slots: {5: 3}, invocations: 7},
      16: {cantrips: 4, spells: 13, slots: {5: 3}, invocations: 7},
      17: {cantrips: 4, spells: 14, slots: {5: 4}, invocations: 7},
      18: {cantrips: 4, spells: 14, slots: {5: 4}, invocations: 8},
      19: {cantrips: 4, spells: 15, slots: {5: 4}, invocations: 8},
      20: {cantrips: 4, spells: 15, slots: {5: 4}, invocations: 8},
    }
  },
  wizard: {
    key: 'wizard',
    "index": 8,
    "class": {
      "url": "http://www.dnd5eapi.co/api/classes/12",
      "name": "Wizard"
    },
    "level": 1,
    "spellcasting_ability": 'inte',
    "info": [{
      "name": "Cantrips",
      "desc": ["At 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table."]
    }, {
      "name": "Spellbook",
      "desc": ["At 1st level, you have a spellbook containing six 1st- level wizard spells of your choice. Your spellbook is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind."]
    }, {
      "name": "Preparing and Casting Spells",
      "desc": ["The Wizard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.", "You prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.", "For example, if you're a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your spellbook. If you prepare the 1st-level spell magic missile, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.", "You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list."]
    }, {
      "name": "Spellcasting Ability",
      "desc": ["Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one."]
    }, {
      "name": "Ritual Casting",
      "desc": ["You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don't need to have the spell prepared."]
    }, {
      "name": "Spellcasting Focus",
      "desc": ["You can use an arcane focus as a spellcasting focus for your wizard spells."]
    }],
    details_per_level: {
      1:  {spellbook: 6,  cantrips: 3, slots: {1: 2}},
      2:  {spellbook: 8,  cantrips: 3, slots: {1: 3}},
      3:  {spellbook: 10, cantrips: 3, slots: {1: 4, 2: 2}},
      4:  {spellbook: 12, cantrips: 4, slots: {1: 4, 2: 3}},
      5:  {spellbook: 14, cantrips: 4, slots: {1: 4, 2: 3, 3: 2}},
      6:  {spellbook: 16, cantrips: 4, slots: {1: 4, 2: 3, 3: 3}},
      7:  {spellbook: 18, cantrips: 4, slots: {1: 4, 2: 3, 3: 3, 4: 1}},
      8:  {spellbook: 20, cantrips: 4, slots: {1: 4, 2: 3, 3: 3, 4: 2}},
      9:  {spellbook: 22, cantrips: 4, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 1}},
      10: {spellbook: 24, cantrips: 5, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2}},
      11: {spellbook: 26, cantrips: 5, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1}},
      12: {spellbook: 28, cantrips: 5, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1}},
      13: {spellbook: 30, cantrips: 5, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1}},
      14: {spellbook: 32, cantrips: 5, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1}},
      15: {spellbook: 34, cantrips: 5, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1}},
      16: {spellbook: 36, cantrips: 5, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1}},
      17: {spellbook: 38, cantrips: 5, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1}},
      18: {spellbook: 40, cantrips: 5, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 1, 7: 1, 8: 1, 9: 1}},
      19: {spellbook: 42, cantrips: 5, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 1, 8: 1, 9: 1}},
      20: {spellbook: 44, cantrips: 5, slots: {1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 2, 8: 1, 9: 1}},
    }
  }
};
