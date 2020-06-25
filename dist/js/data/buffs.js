var buffs = [
  {
    id: 2458,
    spellid: true,
    name: 'Berserker Stance',
    iconname: 'Ability_Racial_Avatar',
    crit: 3,
    group: 'stance',
    dmgtakenmod: 10
  },
  {
    id: 71,
    spellid: true,
    name: 'Defensive Stance',
    iconname: 'ability_warrior_defensivestance',
    group: 'stance',
    dmgtakenmod: -10
  },
  {
    id: 27578,
    spellid: true,
    name: 'Battle Shout',
    iconname: 'Ability_Warrior_BattleShout',
    group: 'battleshout',
    ap: 193,
    disableSpell: 'battleshout'
  },
  {
    id: 22888,
    spellid: true,
    name: 'Rallying Cry of the Dragonslayer',
    iconname: 'inv_misc_head_dragon_01',
    group: '',
    ap: 140,
    crit: 5,
    spellcrit: 10
  },
  {
    id: 24425,
    spellid: true,
    name: 'Spirit of Zandalar',
    iconname: 'ability_creature_poison_05',
    group: '',
    strmod: 15,
    agimod: 15,
    stamod: 15
  },
  {
    id: 23768,
    spellid: true,
    name: "Sayge's Dark Fortune of Damage",
    iconname: 'inv_misc_orb_02',
    group: 'darkfortune',
    dmgmod: 10
  },
  {
    id: 23735,
    spellid: true,
    name: "Sayge's Dark Fortune of Strength",
    iconname: 'inv_misc_orb_02',
    group: 'darkfortune',
    strmod: 10
  },
  {
    id: 22817,
    spellid: true,
    name: "Fengus' Ferocity",
    iconname: 'spell_nature_undyingstrength',
    group: '',
    ap: 200
  },
  {
    id: 22818,
    spellid: true,
    name: "Mol'dar's Moxie",
    iconname: 'spell_nature_massteleport',
    group: '',
    stamod: 15
  },
  {
    id: 22820,
    spellid: true,
    name: "Slip'kik's Savvy",
    iconname: 'spell_holy_lesserheal02',
    group: '',
    spellcrit: 3
  },
  {
    id: 15366,
    spellid: true,
    name: 'Songflower Serenade',
    iconname: 'spell_holy_mindvision',
    group: '',
    crit: 5,
    str: 15,
    agi: 15,
    spellcrit: 5
  },
  {
    id: 16609,
    spellid: true,
    name: "Warchief's Blessing",
    iconname: 'spell_arcane_teleportorgrimmar',
    group: '',
    haste: 15
  },
  {
    id: 17007,
    spellid: true,
    name: 'Leader of the Pack',
    iconname: 'spell_nature_unyeildingstamina',
    group: '',
    crit: 3
  },
  {
    id: 9885,
    spellid: true,
    name: 'Mark of the Wild',
    iconname: 'spell_nature_regeneration',
    group: '',
    str: 16,
    agi: 16,
    int: 16,
    sta: 16
  },
  {
    id: 10938,
    spellid: true,
    name: 'Power Word: Fortitude',
    iconname: 'spell_holy_wordfortitude',
    sta: 70
  },
  {
    id: 15363,
    spellid: true,
    name: 'Inspiration',
    iconname: 'spell_holy_layonhands',
    armormod: 25
  },
  {
    id: 20906,
    spellid: true,
    name: 'Trueshot Aura',
    iconname: 'ability_trueshot',
    group: '',
    ap: 100
  },
  {
    id: 20217,
    spellid: true,
    name: 'Blessing of Kings',
    iconname: 'spell_magic_magearmor',
    group: '',
    strmod: 10,
    agimod: 10,
    stamod: 10
  },
  {
    id: 19838,
    spellid: true,
    name: 'Blessing of Might',
    iconname: 'spell_holy_fistofjustice',
    group: '',
    ap: 186
  },
  {
    id: 1038,
    spellid: true,
    name: 'Blessing of Salvation',
    iconname: 'spell_holy_sealofsalvation',
    group: 'salvation'
  },
  {
    id: 20235,
    spellid: true,
    name: 'Improved Lay on Hands',
    iconname: 'spell_holy_layonhands',
    armormod: 30
  },
  {
    id: 10614,
    spellid: true,
    name: 'Windfury Totem',
    iconname: 'spell_nature_windfury',
    group: ''
  },
  {
    id: 10627,
    spellid: true,
    name: 'Grace of Air Totem',
    iconname: 'spell_nature_invisibilitytotem',
    group: '',
    agi: 67
  },
  {
    id: 10442,
    spellid: true,
    name: 'Strength of Earth Totem',
    iconname: 'spell_nature_earthbindtotem',
    group: '',
    str: 61
  },
  {
    id: 8410,
    name: 'R.O.I.D.S.',
    iconname: 'inv_stone_15',
    group: 'blasted',
    str: 25
  },
  {
    id: 8412,
    name: 'Ground Scorpok Assay',
    iconname: 'inv_misc_dust_02',
    group: 'blasted',
    agi: 25
  },
  {
    id: 13455,
    name: 'Greater Stoneshield Potion',
    iconname: 'inv_potion_69',
    group: 'potion',
    ac: 2000
  },
  {
    id: 13452,
    name: 'Elixir of the Mongoose',
    iconname: 'inv_potion_32',
    group: 'elixir',
    agi: 25,
    crit: 2
  },
  {
    id: 9187,
    name: 'Elixir of Greater Agility',
    iconname: 'inv_potion_94',
    group: 'elixir',
    agi: 25
  },
  {
    id: 12451,
    name: 'Juju Power',
    iconname: 'inv_misc_monsterscales_11',
    group: 'str',
    str: 30
  },
  {
    id: 9206,
    name: 'Elixir of Giants',
    iconname: 'inv_potion_61',
    group: 'str',
    str: 25
  },
  {
    id: 12460,
    name: 'Juju Might',
    iconname: 'inv_misc_monsterscales_07',
    group: 'ap',
    ap: 40
  },
  {
    id: 12820,
    name: 'Winterfall Firewater',
    iconname: 'inv_potion_92',
    group: 'ap',
    ap: 35
  },
  {
    id: 20452,
    name: 'Smoked Desert Dumplings',
    iconname: 'inv_misc_food_64',
    group: 'food',
    str: 20
  },
  {
    id: 13928,
    name: 'Grilled Squid',
    iconname: 'inv_misc_fish_13',
    group: 'food',
    agi: 10
  },
  {
    id: 13810,
    name: 'Blessed Sunfruit',
    iconname: 'inv_misc_food_41',
    group: 'food',
    str: 10
  },
  {
    id: 5206,
    name: 'Bogling Root',
    iconname: 'inv_misc_herb_07',
    group: '',
    bonusdmg: 1
  },
  {
    id: 22237,
    name: 'Dark Desire',
    iconname: 'inv_valentineschocolate04',
    group: '',
    hit: 2
  },
  // {
  //    id: 27666,
  //    spellid: true,
  //    name: "Darnassus Gift of Friendship",
  //    iconname: "inv_holiday_christmas_present_02",
  //    agi: 30,
  // },
  {
    id: 23513,
    spellid: true,
    name: 'Essence of the Red',
    iconname: 'spell_fire_lavaspawn',
    group: 'vaelbuff'
  },
  // {
  //    id: 26393,
  //    spellid: true,
  //    name: "Elune's Blessing",
  //    iconname: "inv_misc_gem_pearl_02",
  //    strmod: 10,
  //    agimod: 10,
  // },
];
