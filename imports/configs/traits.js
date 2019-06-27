export const TRAITS = {
  darkvision_dwarf: {
    key: "darkvision_dwarf",
    name: "Darkvision (Dwarf)",
    desc: "You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray.",
  },
  dwarven_resilience: {
    key: "dwarven_resiliance",
    "name": "Dwarven Resilience",
    desc: "You have advantage on saving throws against poison, and you have resistance against poison damage.",
    combat: true,
  },
  stonecunning: {
    key: "stonecunning",
    "name": "Stonecunning",
    desc: "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
  },
  dwarven_toughness: {
    key: "dwarven_toughness",
    "name": "Dwarven Toughness",
    desc: "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.",
    hp_max_bonus_per_level: 1,
  },
  darkvision_elf: {
    key: "darkvision_elf",
    name: "Darkvision (Elf)",
    desc: "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
  },
  keen_senses: {
    key: "keen_senses",
    name: "Keen Senses",
    desc: "You have proficiency in the Perception skill",
  },
  fey_ancestry: {
    key: "fey_ancestry",
    name: "Fey Ancestry",
    desc: "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
    combat: true,
  },
  trance: {
    key: "trance",
    name: "Trance",
    desc: "Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is \"trance.\") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep. If you meditate during a long rest, you finish the rest after only 4 hours. You otherwise obey all the rules for a long rest; only the duration is changed.",
  },
  elf_weapon_training: {
    key: "elf_weapon_training",
    name: "Elf Weapon Training",
    desc: "You have proficiency with the longsword, shortsword, shortbow, and longbow.",
  },
  cantrip: {
    key: "cantrip",
    name: "Cantrip",
    desc: "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.",
    chooses_cantrip: true,
  },
  fleet_of_foot: {
    key: "fleet_of_foot",
    name: "Fleet of Foot",
    desc: "Your base walking speed increases to 35 feet. (7 spaces)",
  },
  mask_of_the_wild: {
    key: "mask_of_the_wild",
    name: "Mask of the Wild",
    desc: "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.",
    combat: true,
  },
  lucky: {
    key: "lucky",
    name: "Lucky",
    desc: "When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.",
    combat: true,
  },
  brave: {
    key: "brave",
    name: "Brave",
    desc: "You have advantage on saving throws against being frightened.",
    combat: true,
  },
  halfling_nimbleness: {
    key: "halfling_nimbleness",
    name: "Halfling Nimbleness",
    desc: "You can move through the space of any creature that is of a size larger than yours.",
    combat: true,
  },
  naturally_stealthy: {
    key: "naturally_stealthy",
    name: "Naturally Stealthy",
    desc: "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.",
    combat: true,
  },
  stout_resilience: {
    key: "stout_resilience",
    name: "Stout Resilience",
    desc: "You have advantage on saving throws against poison, and you have resistance against poison damage.",
    combat: true,
  },
  draconic_ancestry: {
    key: "draconic_ancestry",
    name: "Draconic Ancestry",
    desc: "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
    chooses_ancestry: true,
  },
  breath_weapon: {
    key: "breath_weapon",
    name: "Breath Weapon",
    desc: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation.\nWhen you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level.\nAfter you use your breath weapon, you can't use it again until you complete a short or long rest.",
    combat: true,
  },
  draconic_damage_resistance: {
    key: "draconic_damage_resistance",
    name: "Damage Resistance",
    desc: "You have resistance to the damage type associated with your draconic ancestry.",
    combat: true,
  },
  darkvision_gnome: {
    key: "darkvision_gnome",
    name: "Darkvision",
    desc: "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
  },
  gnome_cunning: {
    key: "gnome_cunning",
    name: "Gnome Cunning",
    desc: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
    combat: true,
  },
  natural_illusionist: {
    key: "natural_illusionist",
    name: "Natural Illusionist",
    desc: "You know the minor illusion cantrip. Intelligence is your spellcasting ability for it.",
  },
  speak_with_small_beasts: {
    key: "speak_with_small_beasts",
    name: "Speak with Small Beasts",
    desc: "Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets.",
  },
  artificers_lore: {
    key: "artificers_lore",
    name: "Artificer's Lore",
    desc: "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.",
  },
  tinker: {
    key: "tinker",
    name: "Tinker",
    desc: "You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options:",
  },
  clockwork_toy: {
    key: "clockwork_toy",
    name: "Clockwork Toy",
    desc: "This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.",
  },
  fire_starter: {
    key: "fire_starter",
    name: "Fire Starter",
    desc: "The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.",
  },
  music_box: {
    key: "music_box",
    name: "Music Box",
    desc: "When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed.",
  },
  darkvision_half_elf: {
    key: "darkvision_half_elf",
    name: "Darkvision",
    desc: "Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
  },
  skill_versatility: {
    key: "skill_versatility",
    name: "Skill Versatility",
    desc: "You gain proficiency in two skills of your choice.",
  },
  darkvision_half_orc: {
    key: "darkvision_half_orc",
    name: "Darkvision",
    desc: "Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
  },
  menacing: {
    key: "menacing",
    name: "Menacing",
    desc: "You gain proficiency in the Intimidation skill.",
  },
  relentless_endurance: {
    key: "relentless_endurance",
    name: "Relentless endurance",
    desc: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.",
    combat: true,
  },
  savage_attacks: {
    key: "savage_attacks",
    name: "Savage Attacks",
    desc: "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.",
    combat: true,
  },
  darkvision_tiefling: {
    key: "darkvision_tiefling",
    name: "Darkvision",
    desc: "Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
  },
  hellish_resistance: {
    key: "hellish_resistance",
    name: "Hellish Resistance",
    desc: "You have resistance to fire damage.",
    combat: true,
  },
  infernal_legacy: {
    key: "infernal_legacy",
    name: "Infernal Legacy",
    desc: "You know the thaumaturgy cantrip. Once you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell; you must finish a long rest in order to cast the spell again using this trait. Once you reach 5th level, you can also cast the darkness spell; you must finish a long rest in order to cast the spell again using this trait. Charisma is your spellcasting ability for these spells.",
    combat: true,
  },
};
