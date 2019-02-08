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
    speed: 6,
    dex_bonus: 2,
    vision: 'darkvision',
    proficiencies: [116, 42, 48, 33, 56],
    saving_throw_advantages: ['charmed'],
    sleep: 'trance',
    inte_bonus: 1,
    extra_wizard_cantrips: 1,
    features: ['extra_language'],
    languages: ['common', 'elvish'],
  },
  wood_elf: {
    label: 'Wood Elf',
    description: 'Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.',
    size: 'medium',
    speed: 7,
    dex_bonus: 2,
    vision: 'darkvision',
    proficiencies: [116, 42, 48, 33, 56],
    saving_throw_advantages: ['charmed'],
    sleep: 'trance',
    wis_bonus: 1,
    languages: ['common', 'elvish'],
  },
  lightfoot_halfling: {
    label: 'Lightfoot Halfling',
    description: 'The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense. Standing about 3 feet tall, they appear relatively harmless and so have managed to survive for centuries in the shadow of empires and on the edges of wars and political strife. They are inclined to be stout, weighing between 40 and 45 pounds.',
    size: 'small',
    speed: 5,
    lucky: true, // When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.
    dex_bonus: 2,
    saving_throw_advantages: ['frightened'],
    features: ['nimbleness'],//You can move through the space of any creature that is of a size larger than yours.
    cha_bonus: 1,
    proficiencies: [],
    languages: ['common', 'halfling'],
    //Naturally Stealthy. You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.
  },
  stout_halfling: {
    label: 'Stout Halfling',
    description: 'The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense. Standing about 3 feet tall, they appear relatively harmless and so have managed to survive for centuries in the shadow of empires and on the edges of wars and political strife. They are inclined to be stout, weighing between 40 and 45 pounds.',
    size: 'small',
    speed: 5,
    lucky: true, // When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.
    dex_bonus: 2,
    saving_throw_advantages: ['frightened', 'poison'],
    resistances: ['poison'],
    nimbleness: true, //You can move through the space of any creature that is of a size larger than yours.
    con_bonus: 1,
    proficiencies: [],
    languages: ['common', 'halfling'],
  },
  human: {
    label: 'Human',
    description: 'In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that’s why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators,the achievers,and the pioneers of the worlds.',
    size: 'medium',
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
    speed: 6,
    str_bonus: 2,
    cha_bonus: 1,
    features: ['draconic_ancestry'],
    languages: ['common', 'draconic'],
  },
  forest_gnome: {
    label: 'Forest Gnome',
    description: 'A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body. Gnomes average slightly over 3 feet tall and weigh 40 to 45 pounds. As a forest gnome, you have a natural knack for illusion and inherent quickness and stealth.',
    size: 'small',
    speed: 5,
    inte_bonus: 2,
    vision: 'darkvision',
    saving_throw_advantages: ['inte_saving_throw_vs_magic', 'wis_saving_throw_vs_magic', 'cha_saving_throw_vs_magic'],
    dex_bonus: 1,
    spells: ['minor_illusion'],
    features: ['speak_with_small_beasts'],
    languages: ['common', 'gnomish'],
  },
  rock_gnome: {
    label: 'Rock Gnome',
    description: 'A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body. Gnomes average slightly over 3 feet tall and weigh 40 to 45 pounds. As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes.',
    size: 'small',
    speed: 5,
    inte_bonus: 2,
    vision: 'darkvision',
    saving_throw_advantages: ['inte_saving_throw_vs_magic', 'wis_saving_throw_vs_magic', 'cha_saving_throw_vs_magic'],
    con_bonus: 1,
    double_proficiencies: ['inte_history'],
    proficiencies: ['artisan_tools'],
    tiny_clockwork_device: true,
    languages: ['common', 'gnomish'],
  },
  half_elf: {
    label: 'Half-Elf',
    description: 'Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves.',
    cha_bonus: 2,
    two_other_bonus: 1,
    size: 'medium',
    speed: 6,
    vision: 'darkvision',
    saving_throw_advantages: ['charmed'],
    proficiency_options: ['skill', 'skill'],
    languages: ['common', 'elvish'],
    features: ['extra_language'],
  },
  half_orc: {
    label: 'Half-Orc',
    description: 'Half-orcs’ grayish pigmentation, sloping foreheads, jutting jaws, prominent teeth, and towering builds make their orcish heritage plain for all to see. Half-orcs stand between 6 and 7 feet tall and usually weigh between 180 and 250 pounds.',
    str_bonus: 2,
    con_bonus: 1,
    size: 'medium',
    speed: 6,
    vision: 'darkvision',
    proficiencies: ['intimidation'],
    features: ['relentless_endurance', 'savage_attacks'],
    languages: ['common', 'orc'],
  },
  tiefling: {
    label: 'Tiefling',
    description: 'Tieflings are derived from human bloodlines, and in the broadest possible sense, they still look human. However, their infernal heritage has left a clear imprint on their appearance. Tieflings have large horns that take any of a variety of shapes: some have curling horns like a ram, others have straight and tall horns like a gazelle’s, and some spiral upward like an antelopes’ horns. They have thick tails, four to five feet long, which lash or coil around their legs when they get upset or nervous. Their canine teeth are sharply pointed, and their eyes are solid colors—black, red, white, silver, or gold—with no visible sclera or pupil. Their skin tones cover the full range of human coloration, but also include various shades of red. Their hair, cascading down from behind their horns, is usually dark, from black or brown to dark red, blue, or purple.',
    inte_bonus: 1,
    cha_bonus: 2,
    size: 'medium',
    speed: 6,
    vision: 'darkvision',
    resistances: ['fire'],
    infernal_legacy: true, // thaumaturgy, hellish_rebuke @lvl3, darkness @lvl5
    languages: ['common', 'infernal'],
  }
};
