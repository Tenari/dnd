export const BACKGROUNDS = {
  acolyte: {
    label: 'Acolyte',
    proficiencies: [111, 119],
    features: ['extra_language', 'extra_language'],
    items: [
      {item:{name: "Holy Symbol", index: 93}, quantity: 1},
      {item:{name:"Book",index:73},quantity:1},
      {item:{name:"Stick of Incense",index:257},quantity: 5},
      {item:{name:"Clothes, fine",index:85},quantity: 1},
      {item:{name:"Clothes, common",index:83},quantity: 1}
    ],
    wealth: 15,
  },
  criminal: {
    label: 'Criminal',
    proficiencies: [109, 121, 77, 96],
    features: [],
    items: [{item:{index: 88, name:'Crowbar'}, quantity: 1},{item: {index: 83, name: "Clothes, common"}, quantity: 1}],
    wealth: 15,
  },
  folk_hero: {
    label: 'Folk Hero',
    proficiencies: [106, 122, 71, 97],
    features: [],
    items: [
      {item:{name:"Smith’s tools",index:174},quantity: 1},
      {item:{name:"Shovel",index:141},quantity: 1},
      {item:{name:"Pot, iron",index:128},quantity: 1},
      {item:{name:"Clothes, common",index:83},quantity: 1},
    ],
    wealth: 10,
  },
  noble: {
    label: 'Noble',
    proficiencies: [118, 110, 78],
    features: ['extra_language'],
    items: [
      {item:{name:"Clothes, fine",index:85},quantity: 1},
      {item:{name:"Signet ring",index:143},quantity: 1},
      {item:{name:"Pedigree scroll",index:258},quantity: 1},
    ],
    wealth: 25,
  },
  sage: {
    label: 'Sage',
    proficiencies: [107, 110],
    features: ['extra_language','extra_language'],
    items: [
      {item:{name:"Ink (1 ounce bottle)",index:102},quantity: 1},
      {item:{name:"Ink pen",index:103},quantity: 1},
      {item:{name:"Clothes, common",index:83},quantity: 1},
    ],
    wealth: 10,
  },
  soldier: {
    label: 'Soldier',
    proficiencies: [108, 112, 80, 97],
    features: [],
    items: [
      {item:{name:"Playing card set",index:179},quantity: 1},
      {item:{name:"Clothes, common",index:83},quantity: 1},
    ],
    wealth: 10,
  },
}
