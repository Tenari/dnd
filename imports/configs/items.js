export const ITEMS = {
  padded_armor: {
    name: 'Padded armor',
    type: 'light_armor',
    weight: 8,
    cost: 5,
    armor: true,
    ac: {
      mod: 'dex',
      base: 11,
    },
    stealth_disadvantage: true,
  },
  leather_armor: {
    name: 'Leather armor',
    type: 'light_armor',
    weight: 10,
    cost: 10,
    armor: true,
    ac: {
      mod: 'dex',
      base: 11,
    },
  },
  studded_leather_armor: {
    name: 'Studded leather armor',
    type: 'light_armor',
    weight: 13,
    cost: 45,
    armor: true,
    ac: {
      mod: 'dex',
      base: 12,
    },
  },
  hide_armor: {
    name: 'Hide armor',
    type: 'medium_armor',
    weight: 12,
    cost: 10,
    armor: true,
    ac: {
      mod: 'dex',
      mod_max: 2,
      base: 12,
    },
  },
  chain_shirt: {
    name: 'Chain shirt',
    type: 'medium_armor',
    weight: 20,
    cost: 50,
    armor: true,
    ac: {
      mod: 'dex',
      mod_max: 2,
      base: 13,
    },
  },
  scale_mail: {
    name: 'Scale mail',
    type: 'medium_armor',
    cost: 50,
    weight: 45,
    armor: true,
    ac: {
      mod: 'dex',
      mod_max: 2,
      base: 14,
    },
    stealth_disadvantage: true,
  },
  breastplate: {
    name: 'Breastplate',
    type: 'medium_armor',
    cost: 400,
    weight: 20,
    armor: true,
    ac: {
      mod: 'dex',
      mod_max: 2,
      base: 14,
    },
  },
  half_plate: {
    name: 'Half plate',
    type: 'medium_armor',
    cost: 750,
    weight: 40,
    armor: true,
    ac: {
      mod: 'dex',
      mod_max: 2,
      base: 15,
    },
    stealth_disadvantage: true,
  },
  ring_mail: {
    name: 'Ring mail',
    type: 'heavy_armor',
    cost: 30,
    weight: 40,
    armor: true,
    ac: {
      base: 14,
    },
    stealth_disadvantage: true,
  },
  chain_mail: {
    name: 'Chain mail',
    type: 'heavy_armor',
    cost: 75,
    weight: 55,
    armor: true,
    min_str: 13,
    ac: {
      base: 16,
    },
    stealth_disadvantage: true,
  },
  splint_armor: {
    name: 'Splint armor',
    type: 'heavy_armor',
    cost: 200,
    weight: 60,
    armor: true,
    min_str: 15,
    ac: {
      base: 17,
    },
    stealth_disadvantage: true,
  },
  plate_armor: {
    name: 'Plate armor',
    type: 'heavy_armor',
    cost: 1500,
    weight: 65,
    armor: true,
    min_str: 15,
    ac: {
      base: 18,
    },
    stealth_disadvantage: true,
  },
  shield: {
    name: 'Shield',
    type: 'shield',
    cost: 10,
    weight: 6,
    ac_bonus: 2,
  },
  club: {
    name: 'Club',
    type: 'simple_weapon',
    cost: 0.1,
    weight: 2,
    weapon: true,
    melee: true,
    damage_type: 'bludgeoning',
    damage: '1d4',
    properties: ['light'],
  },
  dagger: {
    name: 'Dagger',
    type: 'simple_weapon',
    cost: 2,
    weight: 1,
    weapon: true,
    melee: true,
    ranged: true,
    damage_type: 'piercing',
    damage: '1d4',
    properties: ['finesse','light', 'thrown'],
    close_range: 4,
    far_range: 12,
  },
  greatclub: {
    name: 'Greatclub',
    type: 'simple_weapon',
    cost: 0.2,
    weight: 10,
    weapon: true,
    melee: true,
    damage_type: 'bludgeoning',
    damage: '1d8',
    properties: ['two_handed'],
  },
  hand_axe: {
    name: 'Hand axe',
    type: 'simple_weapon',
    cost: 5,
    weight: 2,
    weapon: true,
    melee: true,
    ranged: true,
    damage_type: 'slashing',
    damage: '1d6',
    properties: ['light', 'thrown'],
    close_range: 4,
    far_range: 12,
  },
  javelin: {
    name: 'Javelin',
    type: 'simple_weapon',
    cost: 0.5,
    weight: 2,
    weapon: true,
    melee: true,
    ranged: true,
    damage_type: 'piercing',
    damage: '1d6',
    properties: ['thrown'],
    close_range: 6,
    far_range: 24,
  },
  light_hammer: {
    name: 'Light hammer',
    type: 'simple_weapon',
    cost: 2,
    weight: 2,
    weapon: true,
    melee: true,
    ranged: true,
    damage_type: 'bludgeoning',
    damage: '1d4',
    properties: ['light','thrown'],
    close_range: 4,
    far_range: 12,
  },
  mace: {
    name: 'Mace',
    type: 'simple_weapon',
    cost: 5,
    weight: 4,
    weapon: true,
    melee: true,
    damage_type: 'bludgeoning',
    damage: '1d6',
    properties: [],
  },
  quarterstaff: {
    name: 'Quarterstaff',
    type: 'simple_weapon',
    cost: 0.2,
    weight: 4,
    weapon: true,
    melee: true,
    damage_type: 'bludgeoning',
    damage: '1d6',
    two_handed_damage: '1d8',
    properties: ['versatile'],
  },
  sickle: {
    name: 'Sickle',
    type: 'simple_weapon',
    cost: 1,
    weight: 2,
    weapon: true,
    melee: true,
    damage_type: 'slashing',
    damage: '1d4',
    properties: ['light'],
  },
  spear: {
    name: 'Spear',
    type: 'simple_weapon',
    cost: 1,
    weight: 3,
    weapon: true,
    melee: true,
    ranged: true,
    damage_type: 'piercing',
    damage: '1d6',
    two_handed_damage: '1d8',
    properties: ['versatile','thrown'],
    close_range: 4,
    far_range: 12,
  },
  light_crossbow: {
    name: 'Light crossbow',
    type: 'simple_weapon',
    cost: 25,
    weight: 5,
    weapon: true,
    ranged: true,
    damage: '1d8',
    damage_type: 'piercing',
    properties: ['ammunition','loading','two_handed'],
    close_range: 16,
    far_range: 64,
  },
  dart: {
    name: 'Dart',
    type: 'simple_weapon',
    cost: 0.05,
    weight: 0.25,
    weapon: true,
    ranged: true,
    damage: '1d4',
    damage_type: 'piercing',
    properties: ['thrown','finesse'],
    close_range: 4,
    far_range: 12,
  },
  shortbow: {
    name: 'Shortbow',
    type: 'simple_weapon',
    cost: 25,
    weight: 2,
    weapon: true,
    ranged: true,
    damage: '1d6',
    damage_type: 'piercing',
    properties: ['ammunition','two_handed'],
    close_range: 16,
    far_range: 64,
  },
  sling: {
    name: 'Sling',
    type: 'simple_weapon',
    cost: 0.1,
    weight: 0,
    weapon: true,
    ranged: true,
    damage: '1d4',
    damage_type: 'bludgeoning',
    properties: ['ammunition'],
    close_range: 6,
    far_range: 24,
  },
  battleaxe: {
    name: 'Battleaxe',
    type: 'martial_weapon',
    cost: 10,
    weight: 4,
    weapon: true,
    melee: true,
    damage: '1d8',
    damage_type: 'slashing',
    properties: ['versatile'],
    two_handed_damage: '1d10',
  },
  flail: {
    name: 'Flail',
    type: 'martial_weapon',
    cost: 10,
    weight: 2,
    weapon: true,
    melee: true,
    damage: '1d8',
    damage_type: 'bludgeoning',
    properties: [],
  },
  glaive: {
    name: 'Glaive',
    type: 'martial_weapon',
    cost: 20,
    weight: 6,
    weapon: true,
    melee: true,
    damage: '1d10',
    damage_type: 'slashing',
    properties: ['heavy','reach','two_handed'],
  },
  greataxe: {
    name: 'Greataxe',
    type: 'martial_weapon',
    cost: 30,
    weight: 7,
    weapon: true,
    melee: true,
    damage: '1d12',
    damage_type: 'slashing',
    properties: ['heavy','two_handed'],
  },
  greatsword: {
    name: 'Greatsword',
    type: 'martial_weapon',
    cost: 50,
    weight: 6,
    weapon: true,
    melee: true,
    damage: '2d6',
    damage_type: 'slashing',
    properties: ['heavy','two_handed'],
  },
  halberd: {
    name: 'Halberd',
    type: 'martial_weapon',
    cost: 20,
    weight: 6,
    weapon: true,
    melee: true,
    damage: '1d10',
    damage_type: 'slashing',
    properties: ['heavy','reach','two_handed'],
  },
  lance: {
    name: 'Lance',
    type: 'martial_weapon',
    cost: 10,
    weight: 6,
    weapon: true,
    melee: true,
    damage: '1d12',
    damage_type: 'piercing',
    properties: ['reach','special'],
  },
  longsword: {
    name: 'Longsword',
    type: 'martial_weapon',
    cost: 15,
    weight: 3,
    weapon: true,
    melee: true,
    damage: '1d8',
    damage_type: 'slashing',
    properties: ['versatile'],
    two_handed_damage: '1d10',
  },
  maul: {
    name: 'Maul',
    type: 'martial_weapon',
    cost: 10,
    weight: 10,
    weapon: true,
    melee: true,
    damage: '2d6',
    damage_type: 'bludgeoning',
    properties: ['heavy','two_handed'],
  },
  morningstar: {
    name: 'Morningstar',
    type: 'martial_weapon',
    cost: 15,
    weight: 4,
    weapon: true,
    melee: true,
    damage: '1d8',
    damage_type: 'piercing',
    properties: [],
  },
  pike: {
    name: 'Pike',
    type: 'martial_weapon',
    cost: 5,
    weight: 18,
    weapon: true,
    melee: true,
    damage: '1d10',
    damage_type: 'piercing',
    properties: ['heavy','reach','two_handed'],
  },
  rapier: {
    name: 'Rapier',
    type: 'martial_weapon',
    cost: 25,
    weight: 2,
    weapon: true,
    melee: true,
    damage: '1d8',
    damage_type: 'piercing',
    properties: ['finesse'],
  },
  scimitar: {
    name: 'Scimitar',
    type: 'martial_weapon',
    cost: 25,
    weight: 3,
    weapon: true,
    melee: true,
    damage: '1d6',
    damage_type: 'slashing',
    properties: ['finesse','light'],
  },
  shortsword: {
    name: 'Shortsword',
    type: 'martial_weapon',
    cost: 10,
    weight: 2,
    weapon: true,
    melee: true,
    damage: '1d6',
    damage_type: 'piercing',
    properties: ['finesse','light'],
  },
  trident: {
    name: 'Trident',
    type: 'martial_weapon',
    cost: 5,
    weight: 4,
    weapon: true,
    melee: true,
    ranged: true,
    damage: '1d6',
    damage_type: 'piercing',
    properties: ['thrown','versatile'],
    two_handed_damage: '1d8',
    close_range: 4,
    far_range: 12,
  },
  war_pick: {
    name: 'War pick',
    type: 'martial_weapon',
    cost: 5,
    weight: 2,
    weapon: true,
    melee: true,
    damage: '1d8',
    damage_type: 'piercing',
    properties: [],
  },
  warhammer: {
    name: 'Warhammer',
    type: 'martial_weapon',
    cost: 15,
    weight: 2,
    weapon: true,
    melee: true,
    damage: '1d8',
    damage_type: 'bludgeoning',
    properties: ['versatile'],
    two_handed_damage: '1d10',
  },
  whip: {
    name: 'Whip',
    type: 'martial_weapon',
    cost: 2,
    weight: 3,
    weapon: true,
    melee: true,
    damage: '1d4',
    damage_type: 'slashing',
    properties: ['finesse','reach'],
  },
  blowgun: {
    name: 'Blowgun',
    type: 'martial_weapon',
    cost: 10,
    weight: 1,
    weapon: true,
    ranged: true,
    damage: '1',
    damage_type: 'piercing',
    properties: ['loading','ammunition'],
    close_range: 5,
    far_range: 20,
  },
  hand_crossbow: {
    name: 'Hand crossbow',
    type: 'martial_weapon',
    cost: 75,
    weight: 3,
    weapon: true,
    ranged: true,
    damage: '1d6',
    damage_type: 'piercing',
    properties: ['light','loading','ammunition'],
    close_range: 6,
    far_range: 24,
  },
  heavy_crossbow: {
    name: 'Heavy crossbow',
    type: 'martial_weapon',
    cost: 50,
    weight: 18,
    weapon: true,
    ranged: true,
    damage: '1d10',
    damage_type: 'piercing',
    properties: ['heavy','loading','ammunition','two_handed'],
    close_range: 20,
    far_range: 80,
  },
  longbow: {
    name: 'Longbow',
    type: 'martial_weapon',
    cost: 50,
    weight: 2,
    weapon: true,
    ranged: true,
    damage: '1d8',
    damage_type: 'piercing',
    properties: ['heavy','ammunition','two_handed'],
    close_range: 30,
    far_range: 120,
  },
  net: {
    name: 'Net',
    type: 'martial_weapon',
    cost: 1,
    weight: 3,
    weapon: true,
    ranged: true,
    damage: '0',
    damage_type: 'none',
    properties: ['special','thrown'],
    close_range: 1,
    far_range: 3,
  },
  abacus: {
    name: 'Abacus',
    type: 'gear',
    cost: 2,
    weight: 2,
  },
  acid_vial: {
    name: 'Acid (vial)',
    type: 'simple_weapon',
    cost: 25,
    weight: 1,
    weapon: true,
    ranged: true,
    damage: '2d6',
    damage_type: 'acid',
    close_range: 4,
    far_range: 12,
  },
  alchemists_fire_flask: {
    name: 'Alchemist\'s fire (flask)',
    type: 'simple_weapon',
    cost: 50,
    weight: 1,
    weapon: true,
    ranged: true,
    damage: '0',
    damage_type: 'none',
    close_range: 4,
    far_range: 12,
    effect: { // starts at beginning of turn
      damage: '1d4',
      damage_type: 'fire',
      duration: 100000,
      end: {
        action: 'main',
        check: 'dex',
        dc: 10,
      }
    }
  },
  arrow: {
    name: 'Arrow',
    type: 'ammunition',
    cost: 0.05,
    weight: 0.05,
  },
  blowgun_needle: {
    name: 'Blowgun needle',
    type: 'ammunition',
    cost: 0.02,
    weight: 0.02,
  },
  crossbow_bolt: {
    name: 'Crossbow bolt',
    type: 'ammunition',
    cost: 0.05,
    weight: 0.075,
  },
  sling_bullet: {
    name: 'Sling bullet',
    type: 'ammunition',
    cost: 0.002,
    weight: 0.075,
  },
  antitoxin_vial: {
    name: 'Antitoxin (vial)',
    type: 'single_use',
    cost: 50,
    weight: 0,
    effect: {
      target: 'self',
      duration: 600,
      advantage: 'poison_saving_throw',
    },
  },
  crystal: {
    name: 'Crystal focus',
    type: 'arcane_focus',
    cost: 10,
    weight: 1,
  },
  orb: {
    name: 'Orb focus',
    type: 'arcane_focus',
    cost: 20,
    weight: 3,
  },
  rod: {
    name: 'Rod focus',
    type: 'arcane_focus',
    cost: 10,
    weight: 2,
  },
  staff: {
    name: 'Staff focus',
    type: 'arcane_focus',
    cost: 5,
    weight: 4,
  },
  wand: {
    name: 'Wand focus',
    type: 'arcane_focus',
    cost: 10,
    weight: 1,
  },
  backpack: {
    name: 'Backpack',
    type: 'container',
    cost: 2,
    weight: 5,
    capacity: 30,
  },
  ball_bearing_bag: {
    name: 'Bag of 1000 ball bearings',
    type: 'single_use',
    cost: 1,
    weight: 2,
    effect: {
      target: '2x2tile',
      duration: 100000,
      travel_saving_throw: 'dex',
      dc: 10,
      fail: 'prone',
      skip: 'half_speed',
    }
  },
  barrel: {
    name: 'Barrel',
    type: 'container',
    cost: 2,
    weight: 70,
    capacity: 120,
  },
  basket: {
    name: 'Basket',
    type: 'container',
    cost: 0.4,
    weight: 2,
    capacity: 40,
  },
  bedroll: {
    name: 'Bedroll',
    type: 'gear',
    cost: 1,
    weight: 7,
  },
  bell: {
    name: 'Bell',
    type: 'gear',
    cost: 1,
    weight: 0,
  },
  blanket: {
    name: 'Blanket',
    type: 'gear',
    cost: 0.5,
    weight: 3,
  },
  block_and_tackle: {
    name: 'Block and tackle',
    type: 'gear',
    cost: 1,
    weight: 5,
    description: 'allows you to lift 4x the weight you usually lift',
  },
  book: {
    name: 'Book',
    type: 'gear',
    cost: 25,
    weight: 5,
  },
  glass_bottle: {
    name: 'Bottle, glass',
    type: 'container',
    cost: 2,
    weight: 2,
    capacity: 2,
  },
  bucket: {
    name: 'Bucket',
    type: 'container',
    cost: 0.05,
    weight: 2,
    capacity: 15,
  },
  caltrops: {
    name: 'Caltrops (bag of 20)',
    type: 'single_use',
    cost: 1,
    weight: 2,
    effect: {
      target: '1x1tile',
      duration: 100000,
      travel_saving_throw: 'dex',
      dc: 15,
      fail: ['damage','stop_moving','reduced_speed'],
      damage: '1',
      damage_type: 'piercing',
      reduced_speed: 2, // lasts until healed
      skip: 'half_speed',
    }
  },
  candle: {
    name: 'Candle',
    type: 'gear',
    cost: 0.01,
    weight: 0,
    bright_radius: 1,
    dim_radius: 2,
  },
  case_crossbow_bolt: {
    name: 'Case, crossbow bolt',
    type: 'container',
    cost: 1,
    weight: 1,
    quantity: 20,
  },
};
