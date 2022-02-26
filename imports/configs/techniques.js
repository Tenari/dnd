const unarmed = {
  basic_strike: {
    key: 'basic_strike',
    label: 'Basic Strike',
    desc: 'Kick or Punch your opponent',
    chi: 'none',
    cost: 0,
    hit: 'd20+Quickness',
    dmg: '1d4+Mastery',
    // `range` is not set to indicate that the weapon range applies. 
    // If there is an extended (or shortened) range, it's like 
    // range: {accurate: 1, penalty: -2} 
    // to indicate that the weapon range is modified by those values

    // `target` is not set to indicate that it targets a single opponent, but some move target multiple like:
    // target: 3            to allow user to select 3 individual targets in range
    // target: {range: 4}   to target all enemies in range 4 spaces
    // target: {range: 4, conditions: [{sword: true}]}   to target all enemies in range 4 spaces that meet all the conditions
 
    // the conditions the character must meet at the time of use
    conditions: [
      {armed: false}
    ],
    // the conditions the character must meet to learn
    prereqs: [
    ],
    // the effects that using this technique causes (beyond simple combat damage)
    effects: [
    ]
  },
  double_strike: {
    key: 'double_strike',
    label: 'Double Strike',
    desc: 'Kick or Punch your opponent twice in quick succession',
    chi: 'none',
    cost: 0,
    hit: 'd20+Quickness',
    dmg: '2d4+Mastery',
    conditions: [
      {armed: false}
    ],
    prereqs: [
      {technique: 'basic_strike', mastery: 'competent'}
    ],
  },
  basic_chi_strike: {
    key: 'basic_chi_strike',
    label: 'Basic Chi Strike',
    desc: 'Boost a punch with your chi.',
    chi: 'any',
    cost: 1,
    hit: 'd20+Quickness',
    dmg: '1d4+Mastery+Tranquility',
    conditions: [
      {armed: false}
    ],
    prereqs: [
      {technique: 'basic_strike', mastery: 'incompetent'}
    ],
  },
  fire_punch: {
    key: 'fire_punch',
    label: 'Fire Punch',
    desc: 'Boost a punch with your fire chi.',
    chi: 'fire',
    cost: 1,
    hit: 'd20+Quickness+1',
    dmg: '1d4+Mastery+Tranquility',
    conditions: [
      {armed: false}
    ],
    prereqs: [
      {technique: 'basic_chi_strike', mastery: 'mediocre'}
    ],
  },
};

const dagger = {
  basic_stab: {
    key: 'basic_stab',
    label: 'Basic Stab',
    desc: 'Stab your opponent with a dagger',
    chi: 'none',
    cost: 0,
    hit: 'd20+Quickness',
    dmg: 'Weapon+Mastery',
    conditions: [
      {armed: true, weapon: 'dagger'}
    ],
    prereqs: [
    ],
  },
  basic_chi_stab: {
    key: 'basic_chi_stab',
    label: 'Basic Chi Stab',
    desc: 'Boost a dagger stab with your chi.',
    chi: 'any',
    cost: 1,
    hit: 'd20+Quickness',
    dmg: 'Weapon+Mastery+Tranquility',
    conditions: [
      {armed: true, weapon: 'dagger'}
    ],
    prereqs: [
      {technique: 'basic_stab', mastery: 'mediocre'}
    ],
  },
  stab_like_water: {
    key: 'stab_like_water',
    label: 'Stab like Water',
    desc: 'Boost a dagger stab with your water chi.',
    chi: 'water',
    cost: 1,
    hit: 'd20+Quickness+1',
    dmg: 'Weapon+Mastery+Tranquility',
    conditions: [
      {armed: true, weapon: 'dagger'}
    ],
    prereqs: [
      {technique: 'basic_chi_stab', mastery: 'mediocre'}
    ],
  },
};

const sword = {
  basic_slash: {
    key: 'basic_slash',
    label: 'Basic Slash',
    desc: 'Slash your opponent with a sword',
    chi: 'none',
    cost: 0,
    hit: 'd20+Quickness',
    dmg: 'Weapon+Mastery',
    conditions: [
      {armed: true, weapon: 'sword'}
    ],
    prereqs: [
    ],
  },
  endless_sword: {
    key: 'endless_sword',
    label: 'Endless Sword',
    desc: 'Every enemy within 20 feet holding a bladed weapon is attacked.',
    chi: 'metal',
    cost: 20,
    hit: 'd20+Quickness',
    dmg: 'Weapon+Mastery+Tranquility',
    target: {range: 4, conditions: [{weapon: ['sword', 'dagger']}]},
    conditions: [
      {armed: true, weapon: 'sword'}
    ],
    prereqs: [
      {technique: 'basic_slash', mastery: 'competent'}
    ],
  },
};

const blunt = {
  basic_swing: {
    key: 'basic_swing',
    label: 'Basic Swing',
    desc: 'Swing your blunt weapon',
    chi: 'none',
    cost: 0,
    hit: 'd20+Quickness',
    dmg: 'Weapon+Mastery',
    conditions: [
      {armed: true, weapon: 'blunt'}
    ],
    prereqs: [
    ],
  },
};

const pole = {
  basic_block: {
    key: 'basic_block',
    label: 'Basic Block',
    desc: 'Block with your polearm. Gives next attack on you a -5 to Hit.',
    chi: 'none',
    cost: 0,
    //hit is not set, to indicate that it automatically occurs
    //dmg is not set, to indicate that is does no damage
    conditions: [
      {armed: true, weapon: 'pole'}
    ],
    prereqs: [
    ],
    effects: [
      {target: 'self', hit_reduction: 5, duration: 'single attack'}
    ]
  },
};

const thrown = {
  basic_throw: {
    key: 'basic_throw',
    label: 'Basic Throw',
    desc: 'Throw something at your opponent',
    chi: 'none',
    cost: 0,
    hit: 'd20+Strength',
    dmg: 'Weapon+Mastery',
    conditions: [
      {armed: true, weapon: 'thrown'}
    ],
    prereqs: [
    ],
  },
};

const bow = {
  basic_shot: {
    key: 'basic_shot',
    label: 'Basic Shot',
    desc: 'Shoot an arrow at your opponent',
    chi: 'none',
    cost: 0,
    hit: 'd20+Strength',
    dmg: 'Weapon+Mastery',
    conditions: [
      {armed: true, weapon: 'bow'}
    ],
    prereqs: [
    ],
  },
};


const noncombat = {
  adaptive_weapon_1: {
    key: 'adaptive_weapon_1',
    label: 'Adaptive Weapon +1',
    chi: 'pure',
    desc: 'Enchant an ordinary weapon to give +1 to attacks channeling the chi type first imprinted on it.',
    cost: 10,
  },
  duplicate_plant: {
    key: 'duplicate_plant',
    label: 'Duplicate Plant',
    chi: 'wood',
    desc: 'Duplicate a living plant in the ground next to it. Chi cost scales with rarity: 1/10/100/1000',
    cost: [1,10,100,1000],
  },
};

export const TECHNIQUES = {
  ...unarmed,
  ...dagger,
  ...sword,
  ...blunt,
  ...pole,
  ...thrown,
  ...bow,

  ...noncombat,
};
