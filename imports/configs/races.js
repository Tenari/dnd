export const RACES = {
  mountain_dwarf: {
    label: 'Mountain Dwarf',
    description: 'Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller. Their courage and endurance are also easily a match for any of the larger folk.',
		"alignment": "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",
		"age": "Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years.",
    size: 'medium',
		"size_description": "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",
    speed: 5,
    con_bonus: 2,
    str_bonus: 2,
    proficiencies: [1, 2, 35, 24, 26, 51],
		"starting_proficiency_options": {
			"choose": 1,
			"type": "proficiencies",
			"from": [
				{
					"url": "http://www.dnd5eapi.co/api/proficiencies/71",
					"name": "Smith's tools"
				},
				{
					"url": "http://www.dnd5eapi.co/api/proficiencies/59",
					"name": "Brewer's supplies"
				},
				{
					"url": "http://www.dnd5eapi.co/api/proficiencies/68",
					"name": "Mason's tools"
				}
			]
		},
		"traits": ["darkvision_dwarf", "dwarven_resilience", "stonecunning"],
    languages: ['common', 'dwarvish'],
  },
  hill_dwarf: {
    label: 'Hill Dwarf',
    description: 'Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller. Their courage and endurance are also easily a match for any of the larger folk.',
		"alignment": "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",
		"age": "Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years.",
    size: 'medium',
		"size_description": "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",
    speed: 5,
    con_bonus: 2,
    wis_bonus: 1,
    proficiencies: [35, 24, 26, 51],
		"starting_proficiency_options": {
			"choose": 1,
			"type": "proficiencies",
			"from": [
				{
					"url": "http://www.dnd5eapi.co/api/proficiencies/71",
					"name": "Smith's tools"
				},
				{
					"url": "http://www.dnd5eapi.co/api/proficiencies/59",
					"name": "Brewer's supplies"
				},
				{
					"url": "http://www.dnd5eapi.co/api/proficiencies/68",
					"name": "Mason's tools"
				}
			]
		},
		"traits": ["darkvision_dwarf", "dwarven_resilience", "stonecunning", "dwarven_toughness"],
    languages: ['common', 'dwarvish'],
  },
  high_elf: {
    label: 'High Elf',
    description: 'Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.',
    size: 'medium',
    size_description: 'Elves range from under 5 to over 6 feet tall and have slender builds.',
    speed: 6,
    dex_bonus: 2,
    inte_bonus: 1,
    proficiencies: [116, 42, 48, 33, 56],
    saving_throw_advantages: ['charmed'],
    extra_wizard_cantrips: 1,
    features: ['extra_language'],
    traits: ["darkvision_elf", "keen_senses", "fey_ancestry", "trance", "elf_weapon_training", "cantrip"],
    languages: ['common', 'elvish'],
  },
  wood_elf: {
    label: 'Wood Elf',
    description: 'Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.',
    size: 'medium',
    size_description: 'Elves range from under 5 to over 6 feet tall and have slender builds.',
    speed: 7,
    dex_bonus: 2,
    wis_bonus: 1,
    proficiencies: [116, 42, 48, 33, 56],
    saving_throw_advantages: ['charmed'],
    languages: ['common', 'elvish'],
    traits: ["darkvision_elf", "keen_senses", "fey_ancestry", "trance", "elf_weapon_training", "fleet_of_foot", "mask_of_the_wild"],
  },
  lightfoot_halfling: {
    label: 'Lightfoot Halfling',
    description: 'The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense. Standing about 3 feet tall, they appear relatively harmless and so have managed to survive for centuries in the shadow of empires and on the edges of wars and political strife. They are inclined to be stout, weighing between 40 and 45 pounds.',
    size: 'small',
    size_description: "Halflings average about 3 feet tall and weigh about 40 pounds.",
    speed: 5,
    dex_bonus: 2,
    cha_bonus: 1,
    saving_throw_advantages: ['frightened'],
    features: [],
    proficiencies: [],
    languages: ['common', 'halfling'],
    traits: ["lucky", "brave", "halfling_nimbleness", "naturally_stealthy"],
  },
  stout_halfling: {
    label: 'Stout Halfling',
    description: 'The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense. Standing about 3 feet tall, they appear relatively harmless and so have managed to survive for centuries in the shadow of empires and on the edges of wars and political strife. They are inclined to be stout, weighing between 40 and 45 pounds.',
    size: 'small',
    size_description: "Halflings average about 3 feet tall and weigh about 40 pounds.",
    speed: 5,
    dex_bonus: 2,
    con_bonus: 1,
    saving_throw_advantages: ['frightened', 'poison'],
    proficiencies: [],
    languages: ['common', 'halfling'],
    traits: ["lucky", "brave", "halfling_nimbleness", "stout_resilience"],
  },
  human: {
    label: 'Human',
    description: 'In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that’s why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators,the achievers,and the pioneers of the worlds.',
    size: 'medium',
    size_description: "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall.",
    speed: 6,
    str_bonus: 1,
    con_bonus: 1,
    dex_bonus: 1,
    inte_bonus: 1,
    wis_bonus: 1,
    cha_bonus: 1,
    proficiencies: [],
    languages: ['common'],
    features: ['extra_language'],
  },
  dragonborn: {
    label: 'Dragonborn',
    description: 'Born of dragons, as their name proclaims, the dragonborn walk proudly through a world that greets them with fearful incomprehension. Shaped by draconic gods or the dragons themselves, dragonborn originally hatched from dragon eggs as a unique race, combining the best attributes of dragons and humanoids. Some dragonborn are faithful servants to true dragons, others form the ranks of soldiers in great wars, and still others find themselves adrift, with no clear calling in life.',
    size: 'medium',
    size_description: "Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds.",
    speed: 6,
    str_bonus: 2,
    cha_bonus: 1,
    features: [],
    languages: ['common', 'draconic'],
    traits: ["draconic_ancestry","breath_weapon","draconic_damage_resistance"],
  },
  forest_gnome: {
    label: 'Forest Gnome',
    description: 'A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body. As a forest gnome, you have a natural knack for illusion and inherent quickness and stealth.',
    size: 'small',
    size_description: "Gnomes are between 3 and 4 feet tall and average about 40 pounds.",
    speed: 5,
    inte_bonus: 2,
    dex_bonus: 1,
    saving_throw_advantages: ['inte_saving_throw_vs_magic', 'wis_saving_throw_vs_magic', 'cha_saving_throw_vs_magic'],
    spells: ['minor_illusion'],
    features: [],
    traits: ["darkvision_gnome","gnome_cunning", "natural_illusionist","speak_with_small_beasts"],
    languages: ['common', 'gnomish'],
  },
  rock_gnome: {
    label: 'Rock Gnome',
    description: 'A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body. As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes.',
    size: 'small',
    size_description: "Gnomes are between 3 and 4 feet tall and average about 40 pounds.",
    speed: 5,
    inte_bonus: 2,
    con_bonus: 1,
    saving_throw_advantages: ['inte_saving_throw_vs_magic', 'wis_saving_throw_vs_magic', 'cha_saving_throw_vs_magic'],
    double_proficiencies: ['inte_history'],
    proficiencies: [72],
    languages: ['common', 'gnomish'],
    traits: ["darkvision_gnome","gnome_cunning","artificers_lore", "tinker", "clockwork_toy","fire_starter","music_box"],
  },
  half_elf: {
    label: 'Half-Elf',
    description: 'Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves.',
    size: 'medium',
    size_description: "Half-elves are about the same size as humans, ranging from 5 to 6 feet tall.",
    speed: 6,
    cha_bonus: 2,
    two_other_bonus: 1,
    saving_throw_advantages: ['charmed'],
		"starting_proficiency_options": {
			"choose": 2,
			"type": "proficiencies",
			"from": [
        {
          "index": 105,
          "name": "Skill: Acrobatics",
          "url": "http://www.dnd5eapi.co/api/proficiencies/105"
        }, {
          "index": 106,
          "name": "Skill: Animal Handling",
          "url": "http://www.dnd5eapi.co/api/proficiencies/106"
        }, {
          "index": 107,
          "name": "Skill: Arcana",
          "url": "http://www.dnd5eapi.co/api/proficiencies/107"
        }, {
          "index": 108,
          "name": "Skill: Athletics",
          "url": "http://www.dnd5eapi.co/api/proficiencies/108"
        }, {
          "index": 109,
          "name": "Skill: Deception",
          "url": "http://www.dnd5eapi.co/api/proficiencies/109"
        }, {
          "index": 110,
          "name": "Skill: History",
          "url": "http://www.dnd5eapi.co/api/proficiencies/110"
        }, {
          "index": 111,
          "name": "Skill: Insight",
          "url": "http://www.dnd5eapi.co/api/proficiencies/111"
        }, {
          "index": 112,
          "name": "Skill: Intimidation",
          "url": "http://www.dnd5eapi.co/api/proficiencies/112"
        }, {
          "index": 113,
          "name": "Skill: Investigation",
          "url": "http://www.dnd5eapi.co/api/proficiencies/113"
        }, {
          "index": 114,
          "name": "Skill: Medicine",
          "url": "http://www.dnd5eapi.co/api/proficiencies/114"
        }, {
          "index": 115,
          "name": "Skill: Nature",
          "url": "http://www.dnd5eapi.co/api/proficiencies/115"
        }, {
          "index": 116,
          "name": "Skill: Perception",
          "url": "http://www.dnd5eapi.co/api/proficiencies/116"
        }, {
          "index": 117,
          "name": "Skill: Performance",
          "url": "http://www.dnd5eapi.co/api/proficiencies/117"
        }, {
          "index": 118,
          "name": "Skill: Persuasion",
          "url": "http://www.dnd5eapi.co/api/proficiencies/118"
        }, {
          "index": 119,
          "name": "Skill: Religion",
          "url": "http://www.dnd5eapi.co/api/proficiencies/119"
        }, {
          "index": 120,
          "name": "Skill: Sleight of Hand",
          "url": "http://www.dnd5eapi.co/api/proficiencies/120"
        }, {
          "index": 121,
          "name": "Skill: Stealth",
          "url": "http://www.dnd5eapi.co/api/proficiencies/121"
        }, {
          "index": 122,
          "name": "Skill: Survival",
          "url": "http://www.dnd5eapi.co/api/proficiencies/122"
        }
			]
		},
    languages: ['common', 'elvish'],
    features: ['extra_language'],
    traits: ["darkvision_half_elf","fey_ancestry","skill_versatility"],
  },
  half_orc: {
    label: 'Half-Orc',
    description: 'Half-orcs’ grayish pigmentation, sloping foreheads, jutting jaws, prominent teeth, and towering builds make their orcish heritage plain for all to see. Half-orcs stand between 6 and 7 feet tall and usually weigh between 180 and 250 pounds.',
    size: 'medium',
    size_description: "Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall.",
    speed: 6,
    str_bonus: 2,
    con_bonus: 1,
    proficiencies: [112],
    traits: ["darkvision_half_orc","menacing",'relentless_endurance', 'savage_attacks'],
    languages: ['common', 'orc'],
  },
  tiefling: {
    label: 'Tiefling',
    description: 'Tieflings are derived from human bloodlines, and in the broadest possible sense, they still look human. However, their infernal heritage has left a clear imprint on their appearance. Tieflings have large horns that take any of a variety of shapes: some have curling horns like a ram, others have straight and tall horns like a gazelle’s, and some spiral upward like an antelopes’ horns. They have thick tails, four to five feet long, which lash or coil around their legs when they get upset or nervous. Their canine teeth are sharply pointed, and their eyes are solid colors—black, red, white, silver, or gold—with no visible sclera or pupil. Their skin tones cover the full range of human coloration, but also include various shades of red. Their hair, cascading down from behind their horns, is usually dark, from black or brown to dark red, blue, or purple.',
    inte_bonus: 1,
    cha_bonus: 2,
    size: 'medium',
    size_description: "Tieflings are about the same size and build as humans.",
    speed: 6,
    resistances: ['fire'],
    languages: ['common', 'infernal'],
    traits: ["darkvision_tiefling", "hellish_resistance","infernal_legacy"]
  }
};
