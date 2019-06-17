const SUBCLASSES = {
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
      1: [
        "Command",
        "Identify",
      ],
      3: [
        "Augury",
        "Suggestion",
      ],
      5: [
        "Nondetection",
        "Speak with Dead",
      ],
      7: [
        "Arcane Eye",
        "Confusion",
      ],
      9: [
        "Legend Lore",
        "Scrying",
      ],
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
      1: [
        "Bless",
        "Cure Wounds",
      ],
      3: [
        "Lesser Restoration",
        "Spiritual Weapon",
      ],
      5: [
        "Beacon of Hope",
        "Revivify",
      ],
      7: [
        "Death Ward",
      ],
      9: [
        "Mass Cure Wounds",
        "Raise Dead",
      ],
    }
  }
};
