export const SUBCLASSES = {
  cleric_knowledge: {
    key: "cleric_knowledge",
    "name": "Knowledge",
    desc: [
      "The gods of knowledge—including Oghma, Boccob, Gilean, Aureon, and Thoth—value learning and understanding above all. Some teach that knowledge is to be gathered and shared in libraries and universities, or promote the practical knowledge of craft and invention. Some deities hoard knowledge and keep its secrets to themselves. And some promise their followers that they will gain tremendous power if they unlock the secrets of the multiverse. Followers of these gods study esoteric lore, collect old tomes, delve into the secret places of the earth, and learn all they can. Some gods of knowledge promote the practical knowledge of craft and invention, including smith deities like Gond, Reorx, Onatar, Moradin, Hephaestus, and Goibhniu."
    ],
    proficiency_choices: [
      {
        choose: 2,
        type: "double_proficiencies",
        from: [
          {"url": "http://www.dnd5eapi.co/api/proficiencies/110", "name": "Skill: History"},
          {"url": "http://www.dnd5eapi.co/api/proficiencies/107", "name": "Skill: Arcana"},
          {"url": "http://www.dnd5eapi.co/api/proficiencies/115", "name": "Skill: Nature"},
          {"url": "http://www.dnd5eapi.co/api/proficiencies/119", "name": "Skill: Religion"},
        ]
      }
    ],
    spells: {
      1: [ "Command", "Identify"],
      3: [ "Augury", "Suggestion"],
      5: [ "Nondetection", "Speak with Dead"],
      7: [ "Arcane Eye", "Confusion" ],
      9: [ "Legend Lore", "Scrying"],
    }
  },
  cleric_life: {
    key: "cleric_life",
    "name": "Life",
    desc: [
      "The Life domain focuses on the vibrant positive energy—one of the fundamental forces of the universe—that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities, sun gods, gods of healing or endurance, and gods of home and community."
    ],
    proficiencies: [
      {name: "Heavy armor", "url": "http://www.dnd5eapi.co/api/proficiencies/3"}
    ],
    spells: {
      1: ["Bless", "Cure Wounds"],
      3: ["Lesser Restoration", "Spiritual Weapon"],
      5: ["Beacon of Hope", "Revivify"],
      7: ["Guardian of Faith", "Death Ward"],
      9: ["Mass Cure Wounds", "Raise Dead"],
    }
  },
  cleric_light: {
    key: "cleric_light",
    "name": "Light",
    desc: [
      "Gods of light—including Helm, Lathander, Pholtus, Branchala, the Silver Flame, Belenus, Apollo, and Re-Horakhty—promote the ideals of rebirth and renewal, truth, vigilance, and beauty, often using the symbol of the sun. Some of these gods are portrayed as the sun itself or as a charioteer who guides the sun across the sky. Others are tireless sentinels whose eyes pierce every shadow and see through every deception. Some are deities of beauty and artistry, who teach that art is a vehicle for the soul's improvement. Clerics of a god of light are enlightened souls infused with radiance and the power of their gods' discerning vision, charged with chasing away lies and burning away darkness."
    ],
    cantrips: {
      1: ['Light']
    },
    spells: {
      1: [
        "Burning Hands",
        "Faerie Fire",
      ],
      3: [
        "Flaming Sphere",
        "Scorching Ray",
      ],
      5: [
        "Daylight",
        "Fireball",
      ],
      7: [
        "Guardian of Faith",
        "Wall of Fire"
      ],
      9: [
        "Flame Strike",
        "Scrying",
      ],
    }
  },
  cleric_nature: {
    key: "cleric_nature",
    "name": "Nature",
    desc: [
      "Gods of nature are as varied as the natural world itself, from inscrutable gods of the deep forests (such as Silvanus, Obad-Hai, Chislev, Balinor, and Pan) to friendly deities associated with particular springs and groves (such as Eldath). Druids revere nature as a whole and might serve one of these deities, practicing mysterious rites and reciting all-but-forgotten prayers in their own secret tongue. But many of these gods have clerics as well, champions who take a more active role in advancing the interests of a particular nature god. These clerics might hunt the evil monstrosities that despoil the woodlands, bless the harvest of the faithful, or wither the crops of those who anger their gods."
    ],
    cantrip_choices: {
      1: [{from: 'druid_list'}]
    },
    proficiency_choices: [
      {
        choose: 1,
        type: "proficiencies",
        from: [
          {"url": "http://www.dnd5eapi.co/api/proficiencies/106", "name": "Skill: Animal Handling"},
          {"url": "http://www.dnd5eapi.co/api/proficiencies/115", "name": "Skill: Nature"},
          {"url": "http://www.dnd5eapi.co/api/proficiencies/122", "name": "Skill: Survival"},
        ]
      }
    ],
    spells: {
      1: [
        "Animal Friendship",
        "Speak with Animals",
      ],
      3: [
        "Barkskin",
        "Spike Growth",
      ],
      5: [
        "Plant Growth",
        "Wind Wall",
      ],
      7: [
        "Dominate Beast",
        "Grasping Vine"
      ],
      9: [
        "Insect Plague",
        "Tree Stride",
      ],
    }
  },
  cleric_tempest: {
    key: "cleric_tempest",
    "name": "Tempest",
    desc: [
      "Gods whose portfolios include the Tempest domain—including Talos, Umberlee, Kord, Zeboim, the Devourer, Zeus, and Thor—govern storms, sea, and sky. They include gods of lightning and thunder, gods of earthquakes, some fire gods, and certain gods of violence, physical strength, and courage. In some pantheons, a god of this domain rules over other deities and is known for swift justice delivered by thunderbolts. In the pantheons of seafaring people, gods of this domain are ocean deities and the patrons of sailors. Tempest gods send their clerics to inspire fear in the common folk, either to keep those folk on the path of righteousness or to encourage them to offer sacrifices of propitiation to ward off divine wrath."
    ],
    proficiencies: [
      {name: "Heavy armor", "url": "http://www.dnd5eapi.co/api/proficiencies/3"},
      {name: "Martial weapons", "url": "http://www.dnd5eapi.co/api/proficiencies/20"},
    ],
    spells: {
      1: [ "Fog Cloud", "Thunderwave"],
      3: ["Gust of Wind", "Shatter"],
      5: [ "Call Lightning", "Sleet Storm"],
      7: [ "Control Water", "Ice Storm"],
      9: [ "Destructive Wave", "Insect Plague"],
    }
  },
  cleric_trickery: {
    key: "cleric_trickery",
    "name": "Trickery",
    desc: [
      "Gods of trickery—such as Tymora, Beshaba, Olidammara, the Traveler, Garl Glittergold, and Loki—are mischief-makers and instigators who stand as a constant challenge to the accepted order among both gods and mortals. They're patrons of thieves, scoundrels, gamblers, rebels, and liberators. Their clerics are a disruptive force in the world, puncturing pride, mocking tyrants, stealing from the rich, freeing captives, and flouting hollow traditions. They prefer subterfuge, pranks, deception, and theft rather than direct confrontation."
    ],
    spells: {
      1: [ "Charm Person", "Disguise Self"],
      3: [ "Mirror Image", "Pass without Trace"],
      5: [ "Blink", "Dispel Magic"],
      7: [ "Dimension Door", "Polymorph"],
      9: [ "Dominate Person", "Modify Memory"],
    }
  },
  cleric_war: {
    key: "cleric_war",
    "name": "War",
    desc: [
      "War has many manifestations. It can make heroes of ordinary people. It can be desperate and horrific, with acts of cruelty and cowardice eclipsing instances of excellence and courage. In either case, the gods of war watch over warriors and reward them for their great deeds. The clerics of such gods excel in battle, inspiring others to fight the good fight or offering acts of violence as prayers. Gods of war include champions of honor and chivalry (such as Torm, Heironeous, and Kiri-Jolith) as well as gods of destruction and pillage (such as Erythnul, the Fury, Gruumsh, and Ares) and gods of conquest and domination (such as Bane, Hextor, and Maglubiyet). Other war gods (such as Tempus, Nike, and Nuada) take a more neutral stance, promoting war in all its manifestations and supporting warriors in any circumstance."
    ],
    proficiencies: [
      {name: "Heavy armor", "url": "http://www.dnd5eapi.co/api/proficiencies/3"},
      {name: "Martial weapons", "url": "http://www.dnd5eapi.co/api/proficiencies/20"},
    ],
    spells: {
      1: [ "Divine Favor", "Shield of Faith"],
      3: [ "Magic Weapon", "Spiritual Weapon"],
      5: [ "Crusader's Mantle", "Spirit Guardians"],
      7: [ "Freedom of Movement", "Stoneskin"],
      9: [ "Flame Strike", "Hold Monster"],
    }
  },
  ancestral_guardian: {
    key: 'ancestral_guardian',
    name: "Ancestral Guardian",
    desc: [
      "Some barbarians hail from cultures that revere their ancestors. These tribes teach that the warriors of the past linger in the world as mighty spirits, who can guide and protect the living. When a barbarian who follows this path rages, the barbarian contacts the spirit world and calls on these guardian spirits for aid.",
      "Barbarians who draw on their ancestral guardians can better fight to protect their tribes and their allies. In order to cement ties to their ancestral guardians, barbarians who follow this path cover themselves in elaborate tattoos that celebrate their ancestors' deeds. These tattoos tell sagas of victories against terrible monsters and other fearsome rivals."
    ],
  },
  battlerager: {
    key: 'battlerager',
    name: "Battlerager",
    desc: [
      "Known as Kuldjargh (literally \"axe idiot\") in Dwarvish, battleragers are dwarf followers of the gods of war and take the Path of the Battlerager. They specialize in wearing bulky, spiked armor and throwing themselves into combat, striking with their body itself and giving themselves over to the fury of battle."
    ]
  },
  berserker: {
    key: 'berserker',
    name: "Berserker",
    desc: [
    ]
  },
  storm_herald: {
    key: 'storm_herald',
    name: "Storm Herald",
    desc: [
    ]
  },
  totem_warrior: {
    key: 'totem_warrior',
    name: "Totem Warrior",
    desc: [
    ]
  },
  zealot: {
    key: 'zealot',
    name: "Zealot",
    desc: [
    ]
  },
  battle_master: {
    key: 'battle_master',
    name: "Battle Master",
    desc: [
    ]
  },
  champion: {
    key: 'champion',
    name: "Champion",
    desc: [
    ]
  },
  eldritch_knight: {
    key: 'eldritch_knight',
    name: "Eldritch Knight",
    desc: [
    ]
  },
  four_elements: {
    key: 'four_elements',
    name: "Four Elements",
    desc: [
    ]
  },
  open_hand: {
    key: 'open_hand',
    name: "Open Hand",
    desc: [
    ]
  },
  shadow: {
    key: 'shadow',
    name: "Shadow",
    desc: [
    ]
  },
  abjuration: {
    key: 'abjuration',
    name: 'Abjuration',
    desc: [
      "The School of Abjuration emphasizes magic that blocks, banishes, or protects. Detractors of this school say that its tradition is about denial, negation rather than positive assertion. You understand, however, that ending harmful effects, protecting the weak, and banishing evil influences is anything but a philosophical void. It is a proud and respected vocation.",
      "Called abjurers, members of this school are sought when baleful spirits require exorcism, when important locations must be guarded against magical spying, and when portals to other planes of existence must be closed."
    ]
  },
  conjuration: {
    key:'conjuration',
    name: 'Conjuration',
    desc: [
      "As a conjurer, you favor spells that produce objects and creatures out of thin air. You can conjure billowing clouds of killing fog or summon creatures from elsewhere to fight on your behalf. As your mastery grows, you learn spells of transportation and can teleport yourself across vast distances, even to other planes of existence, in an instant."
    ],
  },
  divination: {
    key: 'divination',
    name: 'Divination',
    desc: [
      "The counsel of a diviner is sought by royalty and commoners alike, for all seek a clearer understanding of the past, present, and future. As a diviner, you strive to part the veils of space, time, and consciousness so that you can see clearly. You work to master spells of discernment, remote viewing, supernatural knowledge, and foresight."
    ],
  },
  enchantment: {
    key: 'enchantment',
    name: 'Enchantment',
    desc: [
      "As a member of the School of Enchantment, you have honed your ability to magically entrance and beguile other people and monsters. Some enchanters are peacemakers who bewitch the violent to lay down their arms and charm the cruel into showing mercy. Others are tyrants who magically bind the unwilling into their service. Most enchanters fall somewhere in between."
    ],
  },
  evocation: {
    key: 'evocation',
    name: 'Evocation',
    desc: [
      "You focus your study on magic that creates powerful elemental effects such as bitter cold, searing flame, rolling thunder, crackling lightning, and burning acid. Some evokers find employment in military forces, serving as artillery to blast enemy armies from afar. Others use their spectacular power to protect the weak, while some seek their own gain as bandits, adventurers, or aspiring tyrants."
    ],
  },
  illusion: {
    key: 'illusion',
    name: 'Illusion',
    desc: [
      "You focus your studies on magic that dazzles the senses, befuddles the mind, and tricks even the wisest folk. Your magic is subtle, but the illusions crafted by your keen mind make the impossible seem real. Some illusionists—including many gnome wizards—are benign tricksters who use their spells to entertain. Others are more sinister masters of deception, using their illusions to frighten and fool others for their personal gain."
    ],
    cantrips: {
      2: ['Minor Illusion']
    },
  },
  necromancy: {
    key: 'necromancy',
    name: 'Necromancy',
    desc: [
      "The School of Necromancy explores the cosmic forces of life, death, and undeath. As you focus your studies in this tradition, you learn to manipulate the energy that animates all living things. As you progress, you learn to sap the life force from a creature as your magic destroys its body, transforming that vital energy into magical power you can manipulate.",
      "Most people see necromancers as menacing, or even villainous, due to the close association with death. Not all necromancers are evil, but the forces they manipulate are considered taboo by many societies."
    ],
  },
  transmutation: {
    key: 'transmutation',
    name: 'Transmutation',
    desc: [
      "You are a student of spells that modify energy and matter. To you, the world is not a fixed thing, but eminently mutable, and you delight in being an agent of change. You wield the raw stuff of creation and learn to alter both physical forms and mental qualities. Your magic gives you the tools to become a smith on reality's forge.",
      "Some transmuters are tinkerers and pranksters, turning people into toads and transforming copper into silver for fun and occasional profit. Others pursue their magical studies with deadly seriousness, seeking the power of the gods to make and destroy worlds."
    ],
  },
};
