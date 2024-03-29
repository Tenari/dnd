export const CLASSES = {
  barbarian: {
		key: 'barbarian',
		"name": "Barbarian",
    "description": "Barbarians come alive in the chaos of combat. They can enter a berserk state where rage takes over, giving them superhuman strength and resilience. A barbarian can draw on this reservoir of fury only a few times without resting, but those few rages are usually sufficient to defeat whatever threats arise.",
		"hit_die": 12,
		"proficiency_choices": [
			{
				"choose": 2,
				"type": "proficiencies",
				"from": [
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/106",
						"name": "Skill: Animal Handling"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/108",
						"name": "Skill: Athletics"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/112",
						"name": "Skill: Intimidation"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/115",
						"name": "Skill: Nature"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/116",
						"name": "Skill: Perception"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/122",
						"name": "Skill: Survival"
					}
				]
			}
		],
		"proficiencies": [
			{
				"name": "Light armor",
				"url": "http://www.dnd5eapi.co/api/proficiencies/1"
			},
			{
				"name": "Medium armor",
				"url": "http://www.dnd5eapi.co/api/proficiencies/2"
			},
			{
				"name": "Shields",
				"url": "http://www.dnd5eapi.co/api/proficiencies/18"
			},
			{
				"name": "Simple weapons",
				"url": "http://www.dnd5eapi.co/api/proficiencies/19"
			},
			{
				"name": "Martial weapons",
				"url": "http://www.dnd5eapi.co/api/proficiencies/20"
			}
		],
		"saving_throws": [
			{
				"name": "STR",
				"url": "http://www.dnd5eapi.co/api/ability-scores/1"
			},
			{
				"name": "CON",
				"url": "http://www.dnd5eapi.co/api/ability-scores/3"
			}
		],
		"class_levels": {
			"url": "http://www.dnd5eapi.co/api/classes/barbarian/levels",
			"class": "Barbarian"
		},
    chooses_subclass_at_level: 3,
		"subclasses": [
			{"value": "ancestral_guardian", "label": "Ancestral Guardian"},
			{"value": "battlerager", "label": "Battlerager"},
			{"value": "berserker", "label": "Berserker"},
			{"value": "storm_herald", "label": "Storm Herald"},
			{"value": "totem_warrior", "label": "Totem Warrior"},
			{"value": "zealot", "label": "Zealot"},
		],
	},
	bard: {
		key: 'bard',
		"name": "Bard",
    "description": "In the worlds of D&D, words and music are not just vibrations of air, but vocalizations with power all their own. The bard is a master of song, speech, and the magic they contain. Bards say that the multiverse was spoken into existence, that the words of the gods gave it shape, and that echoes of these primordial Words of Creation still resound throughout the cosmos. The music of bards is an attempt to snatch and harness those echoes, subtly woven into their spells and powers.",
		"hit_die": 8,
		"proficiency_choices": [
			{
				"choose": 3,
				"type": "proficiencies",
				"from": [
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/105",
						"name": "Skill: Acrobatics"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/106",
						"name": "Skill: Animal Handling"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/107",
						"name": "Skill: Arcana"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/108",
						"name": "Skill: Athletics"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/109",
						"name": "Skill: Deception"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/110",
						"name": "Skill: History"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/111",
						"name": "Skill: Insight"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/112",
						"name": "Skill: Intimidation"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/113",
						"name": "Skill: Investigation"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/114",
						"name": "Skill: Medicine"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/115",
						"name": "Skill: Nature"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/116",
						"name": "Skill: Perception"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/117",
						"name": "Skill: Performance"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/118",
						"name": "Skill: Persuasion"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/119",
						"name": "Skill: Religion"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/120",
						"name": "Skill: Sleight of Hand"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/121",
						"name": "Skill: Stealth"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/122",
						"name": "Skill: Survival"
					}
				]
			},
			{
				"choose": 3,
				"type": "proficiencies",
				"from": [
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/81",
						"name": "Bagpipes"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/82",
						"name": "Drum"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/83",
						"name": "Dulcimer"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/84",
						"name": "Flute"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/85",
						"name": "Lute"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/86",
						"name": "Lyre"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/87",
						"name": "Horn"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/88",
						"name": "Pan flute"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/89",
						"name": "Shawm"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/90",
						"name": "Viol"
					}
				]
			}
		],
		"proficiencies": [
			{
				"name": "Light armor",
				"url": "http://www.dnd5eapi.co/api/proficiencies/1"
			},
			{
				"name": "Simple weapons",
				"url": "http://www.dnd5eapi.co/api/proficiencies/19"
			},
			{
				"name": "Longswords",
				"url": "http://www.dnd5eapi.co/api/proficiencies/42"
			},
			{
				"name": "Rapiers",
				"url": "http://www.dnd5eapi.co/api/proficiencies/46"
			},
			{
				"name": "Shortswords",
				"url": "http://www.dnd5eapi.co/api/proficiencies/48"
			},
			{
				"name": "Crossbows, hand",
				"url": "http://www.dnd5eapi.co/api/proficiencies/54"
			}
		],
		"saving_throws": [
			{
				"name": "DEX",
				"url": "http://www.dnd5eapi.co/api/ability-scores/2"
			},
			{
				"name": "CHA",
				"url": "http://www.dnd5eapi.co/api/ability-scores/6"
			}
		],
		"class_levels": {
			"url": "http://www.dnd5eapi.co/api/classes/bard/levels",
			"class": "Bard"
		},
    chooses_subclass_at_level: 3,
		"subclasses": [
			{"value": "lore","label": "College of Lore"},
			{"value": "valor","label": "College of Valor"},
		],
	},
	cleric: {
		"key": "cleric",
		"name": "Cleric",
    "description": "Divine magic, as the name suggests, is the power of the gods, flowing from them into the world. Clerics are conduits for that power, manifesting it as miraculous effects. The gods don\'t grant this power to everyone who seeks it, but only to those chosen to fulfill a high calling. Harnessing divine magic doesn\'t rely on study or training. A cleric might learn formulaic prayers and ancient rites, but the ability to cast cleric spells relies on devotion and an intuitive sense of a deity\'s wishes. Clerics combine the helpful magic of healing and inspiring their allies with spells that harm and hinder foes. They can provoke awe and dread, lay curses of plague or poison, and even call down flames from heaven to consume their enemies. For those evildoers who will benefit most from a mace to the head, clerics depend on their combat training to let them wade into melee with the power of the gods on their side.",
		"hit_die": 8,
		"proficiency_choices": [
			{
				"choose": 2,
				"type": "proficiencies",
				"from": [
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/110",
						"name": "Skill: History"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/111",
						"name": "Skill: Insight"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/114",
						"name": "Skill: Medicine"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/118",
						"name": "Skill: Persuasion"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/119",
						"name": "Skill: Religion"
					}
				]
			}
		],
		"proficiencies": [
			{
				"name": "Light armor",
				"url": "http://www.dnd5eapi.co/api/proficiencies/1"
			},
			{
				"name": "Medium armor",
				"url": "http://www.dnd5eapi.co/api/proficiencies/2"
			},
			{
				"name": "Shields",
				"url": "http://www.dnd5eapi.co/api/proficiencies/18"
			},
			{
				"name": "Simple weapons",
				"url": "http://www.dnd5eapi.co/api/proficiencies/19"
			}
		],
		"saving_throws": [
			{
				"name": "WIS",
				"url": "http://www.dnd5eapi.co/api/ability-scores/5"
			},
			{
				"name": "CHA",
				"url": "http://www.dnd5eapi.co/api/ability-scores/6"
			}
		],
		"class_levels": {
			"url": "http://www.dnd5eapi.co/api/classes/cleric/levels",
			"class": "Cleric"
		},
    chooses_subclass_at_level: 1,
		"subclasses": [
			{
				"value": 'cleric_knowledge',
				"label": "Knowledge"
			},
			{
				"value": 'cleric_life',
				"label": "Life"
			},
			{
				"value": 'cleric_light',
				"label": "Light"
			},
			{
				"value": 'cleric_nature',
				"label": "Nature"
			},
			{
				"value": 'cleric_tempest',
				"label": "Tempest"
			},
			{
				"value": 'cleric_trickery',
				"label": "Trickery"
			},
			{
				"value": 'cleric_war',
				"label": "War"
			}
		],
	},
	druid: {
		"key": "druid",
		"name": "Druid",
    "description": "Druids revere nature above all, gaining their spells and other magical powers either from the force of nature itself or from a nature deity. Many druids pursue a mystic spirituality of transcendent union with nature rather than devotion to a divine entity, while others serve gods of wild nature, animals, or elemental forces. The ancient druidic traditions are sometimes called the Old Faith, in contrast to the worship of gods in temples and shrines.",
		"hit_die": 8,
		"proficiency_choices": [
			{
				"choose": 2,
				"type": "proficiencies",
				"from": [
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/106",
						"name": "Skill: Animal Handling"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/107",
						"name": "Skill: Arcana"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/111",
						"name": "Skill: Insight"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/114",
						"name": "Skill: Medicine"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/115",
						"name": "Skill: Nature"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/116",
						"name": "Skill: Perception"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/119",
						"name": "Skill: Religion"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/122",
						"name": "Skill: Survival"
					}
				]
			}
		],
		"proficiencies": [
			{
				"name": "Light armor",
				"url": "http://www.dnd5eapi.co/api/proficiencies/1"
			},
			{
				"name": "Medium armor",
				"url": "http://www.dnd5eapi.co/api/proficiencies/2"
			},
			{
				"name": "Shields",
				"url": "http://www.dnd5eapi.co/api/proficiencies/18"
			},
			{
				"name": "Clubs",
				"url": "http://www.dnd5eapi.co/api/proficiencies/21"
			},
			{
				"name": "Daggers",
				"url": "http://www.dnd5eapi.co/api/proficiencies/22"
			},
			{
				"name": "Javelins",
				"url": "http://www.dnd5eapi.co/api/proficiencies/25"
			},
			{
				"name": "Maces",
				"url": "http://www.dnd5eapi.co/api/proficiencies/27"
			},
			{
				"name": "Quarterstaffs",
				"url": "http://www.dnd5eapi.co/api/proficiencies/28"
			},
			{
				"name": "Sickles",
				"url": "http://www.dnd5eapi.co/api/proficiencies/29"
			},
			{
				"name": "Spears",
				"url": "http://www.dnd5eapi.co/api/proficiencies/30"
			},
			{
				"name": "Darts",
				"url": "http://www.dnd5eapi.co/api/proficiencies/32"
			},
			{
				"name": "Slings",
				"url": "http://www.dnd5eapi.co/api/proficiencies/34"
			},
			{
				"name": "Scimitars",
				"url": "http://www.dnd5eapi.co/api/proficiencies/47"
			},
			{
				"name": "Herbalism Kit",
				"url": "http://www.dnd5eapi.co/api/proficiencies/93"
			}
		],
		"saving_throws": [
			{
				"name": "INT",
				"url": "http://www.dnd5eapi.co/api/ability-scores/4"
			},
			{
				"name": "WIS",
				"url": "http://www.dnd5eapi.co/api/ability-scores/5"
			}
		],
		"class_levels": {
			"url": "http://www.dnd5eapi.co/api/classes/druid/levels",
			"class": "Druid"
		},
    chooses_subclass_at_level: 2,
		"subclasses": [
			{"value": "dreams", "label": "Dreams"},
			{"value": "land", "label": "Land"},
			{"value": "moon", "label": "Moon"},
			{"value": "shepherd", "label": "Shepherd"},
			{"value": "spores", "label": "Spores"},
		],
	},
	fighter: {
		"key": "fighter",
		"name": "Fighter",
    "description": "Questing knights, conquering overlords, royal champions, elite foot soldiers, hardened mercenaries, and bandit kings—as fighters, they all share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. And they are well acquainted with death, both meting it out and staring it defiantly in the face.",
		"hit_die": 10,
		"proficiency_choices": [
			{
				"choose": 2,
				"type": "proficiencies",
				"from": [
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/105",
						"name": "Skill: Acrobatics"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/106",
						"name": "Skill: Animal Handling"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/108",
						"name": "Skill: Athletics"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/110",
						"name": "Skill: History"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/111",
						"name": "Skill: Insight"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/112",
						"name": "Skill: Intimidation"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/116",
						"name": "Skill: Perception"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/122",
						"name": "Skill: Survival"
					}
				]
			}
		],
		"proficiencies": [
			{
				"name": "All armor",
				"url": "http://www.dnd5eapi.co/api/proficiencies/4"
			},
			{
				"name": "Shields",
				"url": "http://www.dnd5eapi.co/api/proficiencies/18"
			},
			{
				"name": "Simple weapons",
				"url": "http://www.dnd5eapi.co/api/proficiencies/19"
			},
			{
				"name": "Martial weapons",
				"url": "http://www.dnd5eapi.co/api/proficiencies/20"
			}
		],
		"saving_throws": [
			{
				"name": "STR",
				"url": "http://www.dnd5eapi.co/api/ability-scores/1"
			},
			{
				"name": "CON",
				"url": "http://www.dnd5eapi.co/api/ability-scores/3"
			}
		],
		"class_levels": {
			"url": "http://www.dnd5eapi.co/api/classes/fighter/levels",
			"class": "Fighter"
		},
    chooses_subclass_at_level: 3,
		"subclasses": [
			{ "value": "weapon_master", label: "Weapon Master"},
			{ "value": "battle_master", label: "Battle Master"},
			{ "value": "champion", label: "Champion"},
			{ "value": "eldritch_knight", label: "Eldritch Knight"},
		],
	},
	monk: {
		"key": "monk",
		"name": "Monk",
    "description": "Monks make careful study of a magical energy that most monastic traditions call ki. Monks harness this power within themselves to create magical effects and exceed their bodies' physical capabilities, and some of their special attacks can hinder the flow of ki in their opponents.",
		"hit_die": 8,
		"proficiency_choices": [
			{
				"choose": 1,
				"type": "proficiencies",
				"from": [
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/58",
						"name": "Alchemist's supplies"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/59",
						"name": "Brewer's supplies"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/60",
						"name": "Calligrapher's supplies"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/61",
						"name": "Carpenter's tools"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/62",
						"name": "Cartographer's tools"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/63",
						"name": "Cobbler's tools"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/64",
						"name": "Cook's utensils"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/65",
						"name": "Glassblower's tools"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/66",
						"name": "Jeweler's tools"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/67",
						"name": "Leatherworker's tools"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/68",
						"name": "Mason's tools"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/69",
						"name": "Painter's supplies"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/70",
						"name": "Potter's tools"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/71",
						"name": "Smith's tools"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/72",
						"name": "Tinker's tools"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/73",
						"name": "Weaver's tools"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/74",
						"name": "Woodcarver's tools"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/75",
						"name": "Disguise kit"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/76",
						"name": "Forgery kit"
					}
				]
			},
			{
				"choose": 1,
				"type": "proficiencies",
				"from": [
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/81",
						"name": "Bagpipes"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/82",
						"name": "Drum"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/83",
						"name": "Dulcimer"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/84",
						"name": "Flute"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/85",
						"name": "Lute"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/86",
						"name": "Lyre"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/87",
						"name": "Horn"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/88",
						"name": "Pan flute"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/89",
						"name": "Shawm"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/90",
						"name": "Viol"
					}
				]
			},
			{
				"choose": 2,
				"type": "proficiencies",
				"from": [
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/105",
						"name": "Skill: Acrobatics"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/108",
						"name": "Skill: Athletics"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/110",
						"name": "Skill: History"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/111",
						"name": "Skill: Insight"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/119",
						"name": "Skill: Religion"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/121",
						"name": "Skill: Stealth"
					}
				]
			}
		],
		"proficiencies": [
			{
				"name": "Simple weapons",
				"url": "http://www.dnd5eapi.co/api/proficiencies/19"
			},
			{
				"name": "Shortswords",
				"url": "http://www.dnd5eapi.co/api/proficiencies/48"
			}
		],
		"saving_throws": [
			{"name": "STR"},
			{"name": "DEX"},
		],
		"class_levels": {
			"url": "http://www.dnd5eapi.co/api/classes/monk/levels",
			"class": "Monk"
		},
		"subclasses": [
			{value: 'four_elements', label: 'Four elements'},
			{value: 'open_hand', label: 'open_hand'},
			{value: 'shadow', label: 'Shadow'},
		],
	},
	paladin: {
		"key": "paladin",
		"name": "Paladin",
    "description":"A paladin swears to uphold justice and righteousness, to stand with the good things of the world against the encroaching darkness, and to hunt the forces of evil wherever they lurk.",
		"hit_die": 10,
		"proficiency_choices": [
			{
				"choose": 2,
				"type": "proficiencies",
				"from": [
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/108",
						"name": "Skill: Athletics"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/111",
						"name": "Skill: Insight"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/112",
						"name": "Skill: Intimidation"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/114",
						"name": "Skill: Medicine"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/118",
						"name": "Skill: Persuasion"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/119",
						"name": "Skill: Religion"
					}
				]
			}
		],
		"proficiencies": [
			{
				"name": "All armor",
				"url": "http://www.dnd5eapi.co/api/proficiencies/4"
			},
			{
				"name": "Shields",
				"url": "http://www.dnd5eapi.co/api/proficiencies/18"
			},
			{
				"name": "Simple weapons",
				"url": "http://www.dnd5eapi.co/api/proficiencies/19"
			},
			{
				"name": "Martial weapons",
				"url": "http://www.dnd5eapi.co/api/proficiencies/20"
			}
		],
		"saving_throws": [
			{"name": "WIS"},
			{"name": "CHA"},
		],
		"class_levels": {
			"url": "http://www.dnd5eapi.co/api/classes/paladin/levels",
			"class": "Paladin"
		},
		"subclasses": [
			{
				"url": "http://www.dnd5eapi.co/api/subclasses/7",
				"name": "Devotion"
			}
		],
	},
	ranger: {
		"key": "ranger",
		"name": "Ranger",
    "description": "Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of civilization--humanoid raiders, rampaging beasts and monstrosities, terrible giants and deadly dragons. They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble. Rangers focus their combat training on techniques that are particularly useful against their specific favored foes.",
		"hit_die": 10,
		"proficiency_choices": [
			{
				"choose": 3,
				"type": "proficiencies",
				"from": [
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/106",
						"name": "Skill: Animal Handling"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/108",
						"name": "Skill: Athletics"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/111",
						"name": "Skill: Insight"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/113",
						"name": "Skill: Investigation"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/115",
						"name": "Skill: Nature"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/116",
						"name": "Skill: Perception"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/121",
						"name": "Skill: Stealth"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/122",
						"name": "Skill: Survival"
					}
				]
			}
		],
		"proficiencies": [
			{
				"name": "Light armor",
				"url": "http://www.dnd5eapi.co/api/proficiencies/1"
			},
			{
				"name": "Medium armor",
				"url": "http://www.dnd5eapi.co/api/proficiencies/2"
			},
			{
				"name": "Shields",
				"url": "http://www.dnd5eapi.co/api/proficiencies/18"
			},
			{
				"name": "Simple weapons",
				"url": "http://www.dnd5eapi.co/api/proficiencies/19"
			},
			{
				"name": "Martial weapons",
				"url": "http://www.dnd5eapi.co/api/proficiencies/20"
			}
		],
		"saving_throws": [
			{"name": "STR"},
			{"name": "DEX"},
		],
		"class_levels": {
			"url": "http://www.dnd5eapi.co/api/classes/ranger/levels",
			"class": "Ranger"
		},
		"subclasses": [
			{
				"url": "http://www.dnd5eapi.co/api/subclasses/8",
				"name": "Hunter"
			}
		],
	},
	rogue: {
		"key": "rogue",
		"name": "Rogue",
    "description":"Rogues devote as much effort to mastering the use of a variety of skills as they do to perfecting their combat abilities, giving them a broad expertise that few other characters can match. Many rogues focus on stealth and deception, while others refine the skills that help them in a dungeon environment, such as climbing, finding and disarming traps, and opening locks.",
		"hit_die": 8,
		"proficiency_choices": [
			{
				"choose": 4,
				"type": "proficiencies",
				"from": [
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/105",
						"name": "Skill: Acrobatics"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/108",
						"name": "Skill: Athletics"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/109",
						"name": "Skill: Deception"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/111",
						"name": "Skill: Insight"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/112",
						"name": "Skill: Intimidation"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/113",
						"name": "Skill: Investigation"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/116",
						"name": "Skill: Perception"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/117",
						"name": "Skill: Performance"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/118",
						"name": "Skill: Persuasion"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/120",
						"name": "Skill: Sleight of Hand"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/121",
						"name": "Skill: Stealth"
					}
				]
			}
		],
		"proficiencies": [
			{
				"name": "Light armor",
				"url": "http://www.dnd5eapi.co/api/proficiencies/1"
			},
			{
				"name": "Simple weapons",
				"url": "http://www.dnd5eapi.co/api/proficiencies/19"
			},
			{
				"name": "Longswords",
				"url": "http://www.dnd5eapi.co/api/proficiencies/42"
			},
			{
				"name": "Rapiers",
				"url": "http://www.dnd5eapi.co/api/proficiencies/46"
			},
			{
				"name": "Shortswords",
				"url": "http://www.dnd5eapi.co/api/proficiencies/48"
			},
			{
				"name": "Crossbows, hand",
				"url": "http://www.dnd5eapi.co/api/proficiencies/54"
			},
			{
				"name": "Thieves' Tools",
				"url": "http://www.dnd5eapi.co/api/proficiencies/96"
			}
		],
		"saving_throws": [
			{"name": "DEX"},
			{"name": "INT"},
		],
		"class_levels": {
			"url": "http://www.dnd5eapi.co/api/classes/rogue/levels",
			"class": "Rogue"
		},
		"subclasses": [
			{
				"url": "http://www.dnd5eapi.co/api/subclasses/9",
				"name": "Thief"
			}
		],
	},
	sorcerer: {
		"key": "sorcerer",
		"name": "Sorcerer",
    "description":"Magic is a part of every sorcerer, suffusing body, mind, and spirit with a latent power that waits to be tapped. Some sorcerers wield magic that springs from an ancient bloodline infused with the magic of dragons. Others carry a raw, uncontrolled magic within them, a chaotic storm that manifests in unexpected ways.",
		"hit_die": 6,
		"proficiency_choices": [
			{
				"choose": 2,
				"type": "proficiencies",
				"from": [
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/107",
						"name": "Skill: Arcana"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/109",
						"name": "Skill: Deception"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/111",
						"name": "Skill: Insight"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/112",
						"name": "Skill: Intimidation"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/118",
						"name": "Skill: Persuasion"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/119",
						"name": "Skill: Religion"
					}
				]
			}
		],
		"proficiencies": [
			{
				"name": "Daggers",
				"url": "http://www.dnd5eapi.co/api/proficiencies/22"
			},
			{
				"name": "Quarterstaffs",
				"url": "http://www.dnd5eapi.co/api/proficiencies/28"
			},
			{
				"name": "Darts",
				"url": "http://www.dnd5eapi.co/api/proficiencies/32"
			},
			{
				"name": "Slings",
				"url": "http://www.dnd5eapi.co/api/proficiencies/34"
			}
		],
		"saving_throws": [
			{
				"name": "CON",
				"url": "http://www.dnd5eapi.co/api/ability-scores/3"
			},
			{
				"name": "CHA",
				"url": "http://www.dnd5eapi.co/api/ability-scores/6"
			}
		],
		"class_levels": {
			"url": "http://www.dnd5eapi.co/api/classes/sorcerer/levels",
			"class": "Sorcerer"
		},
		"subclasses": [
			{
				"url": "http://www.dnd5eapi.co/api/subclasses/10",
				"name": "Draconic"
			}
		],
	},
	warlock: {
		"key": "warlock",
		"name": "Warlock",
    "description":"Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular.",
		"hit_die": 8,
		"proficiency_choices": [
			{
				"choose": 2,
				"type": "proficiencies",
				"from": [
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/107",
						"name": "Skill: Arcana"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/109",
						"name": "Skill: Deception"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/110",
						"name": "Skill: History"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/112",
						"name": "Skill: Intimidation"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/113",
						"name": "Skill: Investigation"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/115",
						"name": "Skill: Nature"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/119",
						"name": "Skill: Religion"
					}
				]
			}
		],
		"proficiencies": [
			{
				"name": "Light armor",
				"url": "http://www.dnd5eapi.co/api/proficiencies/1"
			},
			{
				"name": "Simple weapons",
				"url": "http://www.dnd5eapi.co/api/proficiencies/19"
			}
		],
		"saving_throws": [
			{
				"name": "WIS",
				"url": "http://www.dnd5eapi.co/api/ability-scores/5"
			},
			{
				"name": "CHA",
				"url": "http://www.dnd5eapi.co/api/ability-scores/6"
			}
		],
		"class_levels": {
			"url": "http://www.dnd5eapi.co/api/classes/warlock/levels",
			"class": "Warlock"
		},
		"subclasses": [
			{
				"url": "http://www.dnd5eapi.co/api/subclasses/11",
				"name": "Fiend"
			}
		],
	},
	wizard: {
		"key": "wizard",
		"name": "Wizard",
    "description":"Wizards are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, and brute-force mind control.",
		"hit_die": 6,
		"proficiency_choices": [
			{
				"choose": 2,
				"type": "proficiencies",
				"from": [
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/107",
						"name": "Skill: Arcana"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/110",
						"name": "Skill: History"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/111",
						"name": "Skill: Insight"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/113",
						"name": "Skill: Investigation"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/114",
						"name": "Skill: Medicine"
					},
					{
						"url": "http://www.dnd5eapi.co/api/proficiencies/119",
						"name": "Skill: Religion"
					}
				]
			}
		],
		"proficiencies": [
			{
				"name": "Daggers",
				"url": "http://www.dnd5eapi.co/api/proficiencies/22"
			},
			{
				"name": "Quarterstaffs",
				"url": "http://www.dnd5eapi.co/api/proficiencies/28"
			},
			{
				"name": "Darts",
				"url": "http://www.dnd5eapi.co/api/proficiencies/32"
			},
			{
				"name": "Slings",
				"url": "http://www.dnd5eapi.co/api/proficiencies/34"
			}
		],
		"saving_throws": [
			{
				"name": "INT",
				"url": "http://www.dnd5eapi.co/api/ability-scores/4"
			},
			{
				"name": "WIS",
				"url": "http://www.dnd5eapi.co/api/ability-scores/5"
			}
		],
    chooses_subclass_at_level: 2,
		"class_levels": {
			"url": "http://www.dnd5eapi.co/api/classes/wizard/levels",
			"class": "Wizard"
		},
		"subclasses": [
			{"value": "abjuration", "label": "Abjuration"},
			{"value": "conjuration", "label": "Conjuration"},
			{"value": "divination", "label": "Divination"},
			{"value": "enchantment", "label": "Enchantment"},
			{"value": "evocation", "label": "Evocation"},
			{"value": "illusion", "label": "Illusion"},
			{"value": "necromancy", "label": "Necromancy"},
			{"value": "transmutation", "label": "Transmutation"},
		],
	}
};
