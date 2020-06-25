var session = {
  default: {
    buffs: [
      2458,
      27578,
      22888,
      22817,
      9885,
      20906,
      20217,
      19838,
      13452,
      12451,
      12460,
      13810
    ],
    rotation: [
      {
        id: '23894',
        name: 'Bloodthirst',
        classname: 'Bloodthirst',
        iconname: 'spell_nature_bloodlust',
        minrage: '30',
        hidden: true,
        active: true
      },
      {
        id: '27580',
        name: 'Mortal Strike',
        classname: 'MortalStrike',
        iconname: 'ability_warrior_savageblow',
        minrage: '30',
        hidden: true,
        active: false
      },
      {
        id: '11567',
        name: 'Heroic Strike',
        classname: 'HeroicStrike',
        iconname: 'ability_rogue_ambush',
        minrage: '30',
        maincd: '4',
        unqueue: '0',
        active: true
      },
      {
        id: '11609',
        name: 'Cleave',
        classname: 'Cleave',
        iconname: 'ability_warrior_cleave',
        minrage: '40',
        hidden: true,
        active: false
      },
      {
        id: '20662',
        name: 'Execute',
        classname: 'Execute',
        iconname: 'inv_sword_48',
        lasttime: '8',
        priorityap: '2000',
        active: true,
        starttime: '52'
      },
      {
        id: '1680',
        name: 'Whirlwind',
        classname: 'Whirlwind',
        iconname: 'ability_whirlwind',
        minrage: '50',
        maincd: '2',
        active: true
      },
      {
        id: '12328',
        name: 'Death Wish',
        classname: 'DeathWish',
        iconname: 'spell_shadow_deathpact',
        time: '29',
        crusaders: '0',
        hidden: true,
        aura: true,
        active: true
      },
      {
        id: '1719',
        name: 'Recklessness',
        classname: 'Recklessness',
        iconname: 'ability_criticalstrike',
        time: '44',
        aura: true,
        active: false
      },
      {
        id: '11551',
        name: 'Battle Shout',
        classname: 'BattleShout',
        iconname: 'ability_warrior_battleshout',
        time: -1,
        hidden: true,
        active: false
      },
      {
        id: '11585',
        name: 'Overpower',
        classname: 'Overpower',
        iconname: 'ability_meleedamage',
        maxrage: '25',
        maincd: '2',
        active: false
      },
      {
        id: '26296',
        name: 'Berserking',
        classname: 'Berserking',
        iconname: 'racial_troll_berserk',
        time: '50',
        haste: '30',
        hidden: true,
        aura: true,
        active: false
      },
      {
        id: '20572',
        name: 'Blood Fury',
        classname: 'BloodFury',
        iconname: 'racial_orc_berserkerstrength',
        time: '35',
        hidden: true,
        aura: true,
        active: false
      },
      {
        id: '2687',
        name: 'Bloodrage',
        classname: 'Bloodrage',
        iconname: 'ability_racial_bloodrage',
        active: true
      },
      {
        id: '17528',
        name: 'Mighty Rage Potion',
        classname: 'MightyRagePotion',
        iconname: 'inv_potion_41',
        time: '39',
        crusaders: '0',
        aura: true,
        active: true
      },
      {
        id: '16322',
        name: 'Juju Flurry',
        classname: 'JujuFlurry',
        iconname: 'inv_misc_monsterscales_17',
        time: '39',
        aura: true,
        hidden: true,
        active: false
      },
      {
        id: '23255',
        name: 'Deep Wounds',
        classname: 'DeepWounds',
        iconname: 'ability_backstab',
        hidden: true,
        aura: true,
        active: false
      },
      {
        id: '11597',
        name: 'Sunder Armor',
        classname: 'SunderArmor',
        iconname: 'ability_warrior_sunder',
        globals: '1',
        active: true
      },
      {
        id: '11605',
        name: 'Slam',
        classname: 'Slam',
        iconname: 'ability_warrior_decisivestrike',
        hidden: true,
        active: false
      },
      {
        id: '7373',
        name: 'Hamstring',
        classname: 'Hamstring',
        iconname: 'ability_shockwave',
        minrage: '50',
        active: false
      },
      {
        id: '11601',
        name: 'Revenge',
        classname: 'Revenge',
        iconname: 'ability_warrior_revenge',
        minrage: '5',
        active: true
      },
      {
        id: 23925,
        name: 'Shield Slam',
        classname: 'ShieldSlam',
        iconname: 'inv_shield_05',
        minrage: 20,
        hidden: true,
        active: false
      }
    ],
    sources: [
      'quest',
      'crafting',
      'dungeon',
      'onyxia',
      'mc',
      'bwl',
      'zg',
      'worldboss',
      'pvp',
      'other'
    ],
    phases: ['1', '2', '3', '4'],
    talents: [
      { n: 'Arms', t: [3, 0, 3, 0, 5, 0, 0, 1, 3, 0, 2, 0, 0, 0, 0, 0, 0, 0] },
      { n: 'Fury', t: [0, 5, 0, 5, 0, 0, 0, 5, 5, 2, 5, 0, 1, 0, 0, 5, 1] },
      {
        n: 'Protection',
        t: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ],
    gear: {
      head: [
        { id: 12587, selected: false, dps: '925.95' },
        { id: 20623, selected: false },
        { id: 21329, selected: false },
        { id: 18817, selected: false, dps: '931.03' },
        { id: 22418, selected: false },
        { id: 9375, selected: false, dps: '897.31' },
        { id: 20521, selected: false, dps: '922.64' },
        { id: 21460, selected: false },
        { id: 19372, selected: false, dps: '930.15' },
        { id: 21999, selected: false },
        { id: 16866, selected: false, dps: '905.91' },
        { id: 22411, selected: false, dps: '912.33' },
        { id: 16731, selected: false, dps: '911.66' },
        { id: 16963, selected: false, dps: '907.29' },
        { id: 12640, selected: true, dps: '937.16' },
        { id: 13404, selected: false, dps: '912.16' },
        {
          id: 23314,
          selected: false,
          dps: '518.49',
          tps: '632.39',
          dtps: '885.72'
        },
        { id: 16478, selected: false, dps: '927.05' }
      ],
      neck: [
        { id: 19491, selected: false, dps: '935.18' },
        { id: 21664, selected: false },
        { id: 22150, selected: false },
        { id: 17111, selected: false, dps: '925.86' },
        { id: 21505, selected: false },
        { id: 18205, selected: false, dps: '926.58' },
        { id: 21809, selected: false },
        { id: 11933, selected: false, dps: '927.13' },
        { id: 15411, selected: false, dps: '935.82' },
        { id: 18404, selected: true, dps: '936.99' },
        { id: 22340, selected: false },
        { id: 19377, selected: false, dps: '937.05' },
        { id: 23023, selected: false },
        { id: 23053, selected: false },
        { id: 19856, selected: false },
        { id: 17044, selected: false, dps: '926.53' }
      ],
      shoulder: [
        { id: 20683, selected: false },
        { id: 20212, selected: false },
        { id: 15051, selected: false, dps: '935.55' },
        { id: 19878, selected: false },
        { id: 21330, selected: false },
        { id: 19394, selected: false, dps: '948.82' },
        { id: 22419, selected: false },
        { id: 16868, selected: false, dps: '933.61' },
        { id: 21639, selected: false },
        { id: 16961, selected: false, dps: '932.04' },
        { id: 21805, selected: false },
        {
          id: 23315,
          selected: false,
          dps: '517.16',
          tps: '630.95',
          dtps: '894.42'
        },
        { id: 16480, dps: '948.82' },
        { id: 20517, selected: false, dps: '938.71' },
        { id: 22001, selected: false },
        { id: 16733, selected: false, dps: '935.07' },
        { id: 12927, selected: true, dps: '937.10' },
        { id: 12082, selected: false, dps: '927.99' }
      ],
      back: [
        {
          id: 19398,
          selected: false,
          dps: '504.07',
          tps: '617.13',
          dtps: '872.56'
        },
        { id: 13340, selected: true, dps: '937.27' },
        { id: 21701, selected: false },
        { id: 19436, selected: false, dps: '942.83' },
        { id: 21710, selected: false },
        { id: 21621, selected: false },
        { id: 20073, selected: false },
        { id: 23030, selected: false },
        { id: 17102, selected: false, dps: '933.81' },
        { id: 17107, selected: false, dps: '928.15' },
        { id: 21394, selected: false },
        { id: 21187, selected: false },
        { id: 18204, selected: false, dps: '932.34' },
        { id: 18689, selected: false, dps: '930.09' },
        { id: 18541, selected: false, dps: '939.30' },
        { id: 21456, selected: false },
        { id: 23045, selected: false },
        { id: 13397, selected: false, dps: '931.76' },
        { id: 19084, selected: false, dps: '930.13' },
        { id: 19907, selected: false },
        { id: 20691, selected: false }
      ],
      chest: [
        { id: 15050, selected: false, dps: '915.21' },
        { id: 19690, selected: false },
        { id: 21814, selected: false },
        { id: 12757, selected: false, dps: '929.14' },
        { id: 21997, selected: false },
        { id: 16865, selected: false, dps: '913.51' },
        { id: 12895, selected: false, dps: '918.97' },
        { id: 16730, selected: false, dps: '914.83' },
        { id: 16966, selected: false, dps: '910.54' },
        { id: 14637, selected: false, dps: '930.24' },
        { id: 21331, selected: false },
        { id: 11926, selected: false, dps: '925.40' },
        { id: 23226, selected: false },
        { id: 19405, selected: false, dps: '927.71' },
        { id: 22191, selected: false },
        { id: 18530, selected: false, dps: '926.88' },
        { id: 23000, selected: false },
        { id: 16477, selected: false, dps: '929.56' },
        {
          id: 23300,
          selected: false,
          dps: '503.39',
          tps: '615.22',
          dtps: '894.16'
        },
        { id: 19904, selected: false },
        { id: 11726, selected: true, dps: '937.00' },
        { id: 19822, selected: false },
        { id: 13944, selected: false, dps: '927.05' },
        { id: 21680, selected: false }
      ],
      wrist: [
        { id: 20687, selected: false },
        { id: 12936, selected: true, dps: '937.51' },
        { id: 19578, selected: false, dps: '942.56' },
        { id: 16959, selected: false, dps: '932.73' },
        { id: 21457, selected: false },
        { id: 21996, selected: false },
        { id: 16861, selected: false, dps: '931.02' },
        { id: 16735, selected: false, dps: '930.60' },
        { id: 21184, selected: false },
        { id: 18533, selected: false, dps: '935.95' },
        { id: 21618, selected: false },
        { id: 21602, selected: false },
        { id: 21491, selected: false },
        { id: 19824, selected: false },
        { id: 13400, selected: false, dps: '938.94' },
        { id: 19146, selected: false, dps: '942.38' },
        { id: 18812, selected: false, dps: '937.87' },
        { id: 22936, selected: false }
      ],
      hands: [
        { id: 18823, selected: false, dps: '931.90' },
        { id: 15063, selected: true, dps: '937.54' },
        { id: 14551, selected: false, dps: '922.24' },
        { id: 19143, selected: false, dps: '939.48' },
        { id: 21581, selected: false },
        { id: 21998, selected: false },
        { id: 16863, selected: false, dps: '930.03' },
        { id: 21674, selected: false },
        { id: 21479, selected: false },
        { id: 16737, selected: false, dps: '924.69' },
        { id: 16964, selected: false, dps: '920.96' },
        { id: 21672, selected: false },
        { id: 16484, dps: '935.73' },
        { id: 23286, selected: false, dps: '922.45' },
        { id: 13162, selected: false, dps: '926.98' },
        { id: 22714, selected: false },
        { id: 12639, selected: false, dps: '919.85' },
        { id: 13963, selected: false, dps: '921.83' },
        { id: 19157, dps: '935.17' }
      ],
      waist: [
        { id: 20204, selected: false, dps: '938.64' },
        { id: 21994, selected: false },
        { id: 16864, selected: false, dps: '931.90' },
        { id: 21586, selected: false },
        { id: 20216, selected: false },
        { id: 20213, selected: false },
        { id: 21503, selected: false },
        { id: 16736, selected: false, dps: '930.13' },
        { id: 13142, selected: false, dps: '929.98' },
        { id: 23219, selected: false },
        { id: 18505, selected: false, dps: '926.19' },
        { id: 13959, selected: true, dps: '937.51' },
        {
          id: 19087,
          selected: false,
          dps: '478.06',
          tps: '589.46',
          dtps: '843.41'
        },
        { id: 19137, selected: false, dps: '953.66' },
        { id: 21463, selected: false },
        { id: 21598, selected: false },
        { id: 19823, selected: false },
        { id: 19380, selected: false, dps: '941.61' },
        { id: 21692, selected: false },
        { id: 16960, selected: false, dps: '930.66' }
      ],
      legs: [
        { id: 20671, selected: false },
        { id: 15052, selected: false, dps: '921.73' },
        { id: 12963, selected: false, dps: '919.97' },
        { id: 19855, selected: false },
        { id: 14638, selected: false, dps: '921.04' },
        { id: 14554, selected: false, dps: '949.37' },
        { id: 145541, selected: false, dps: '929.50' },
        { id: 21332, selected: false },
        { id: 20627, selected: false },
        { id: 15062, selected: true, dps: '937.04' },
        { id: 18380, selected: false, dps: '930.49' },
        { id: 13498, selected: false, dps: '924.81' },
        { id: 23071, selected: false },
        { id: 19402, selected: false, dps: '937.56' },
        { id: 23068, selected: false },
        { id: 22000, selected: false },
        { id: 16867, selected: false, dps: '921.82' },
        { id: 21495, selected: false },
        { id: 16732, selected: false, dps: '927.62' },
        { id: 16962, selected: false, dps: '917.62' },
        { id: 16479, selected: false, dps: '943.55' },
        {
          id: 23301,
          selected: false,
          dps: '500.18',
          tps: '612.32',
          dtps: '913.43'
        },
        { id: 21651, selected: false },
        { id: 22672, selected: false },
        { id: 22385, selected: false }
      ],
      feet: [
        { id: 20208, selected: false },
        { id: 12555, selected: false, dps: '940.52' },
        { id: 16984, selected: false, dps: '930.50' },
        { id: 19906, selected: false },
        { id: 14616, selected: true, dps: '937.31' },
        { id: 21995, selected: false },
        { id: 21688, selected: false },
        { id: 19381, selected: false, dps: '944.02' },
        { id: 21493, selected: false },
        { id: 21706, selected: false },
        { id: 16734, selected: false, dps: '929.84' },
        { id: 19387, selected: false, dps: '952.26' },
        { id: 21333, selected: false },
        { id: 13210, selected: false, dps: '934.80' },
        { id: 16483, dps: '946.66' },
        { id: 23287, selected: false, dps: '934.33' },
        { id: 16862, selected: false, dps: '932.46' },
        { id: 16965, selected: false, dps: '931.87' },
        { id: 13070, selected: false, dps: '937.82' },
        { id: 21490, selected: false },
        { id: 12553, selected: false, dps: '936.67' },
        { id: 13967, selected: false, dps: '936.42' },
        {
          id: 11731,
          selected: false,
          dps: '499.96',
          tps: '612.41',
          dtps: '908.41'
        }
      ],
      finger: [
        { id: 19376, dps: '910.68' },
        { id: 17063, dps: '918.78' },
        { id: 21182 },
        { id: 19925 },
        { id: 22961 },
        { id: 18522, dps: '912.37' },
        { id: 23038 },
        { id: 17713, dps: '912.67' },
        { id: 19432, dps: '924.14' },
        { id: 19325, selected: true, dps: '922.06' },
        { id: 12548, selected: true, dps: '917.04' },
        { id: 19384, dps: '922.56' },
        { id: 21189 },
        { id: 13098, dps: '918.56' },
        { id: 19514, dps: '917.49' },
        { id: 18821, dps: '926.89' },
        { id: 21601 },
        { id: 21477 },
        { id: 21596 },
        { id: 21677 },
        { id: 19898 },
        { id: 198981, selected: false },
        { id: 22722 },
        { id: 23018 },
        { id: 21393 },
        { id: 21205 },
        { id: 18500, dps: '914.57' }
      ],
      trinket: [
        { id: 21670 },
        { id: 13965, selected: true, dps: '914.68' },
        { id: 18537, dps: '901.63' },
        { id: 19289, dps: '898.71' },
        { id: 20130, dps: '946.80' },
        { id: 19406, dps: '920.41' },
        { id: 21180 },
        { id: 11815, selected: true, dps: '915.33' },
        { id: 22321, dps: '897.29' },
        { id: 23570 },
        { id: 22954 },
        { id: 19120, dps: '904.31' },
        { id: 13209, dps: '922.15' },
        { id: 23041 }
      ],
      ranged: [
        { id: 18680, selected: false, dps: '931.68' },
        { id: 21478, selected: false },
        { id: 16996, selected: false, dps: '928.55' },
        { id: 19350, selected: false, dps: '935.04' },
        { id: 19993, selected: false },
        { id: 21616, selected: false },
        { id: 22318, selected: false, dps: '932.54' },
        { id: 20038, selected: false },
        { id: 22811, selected: false },
        { id: 19562, selected: false, dps: '927.96' },
        { id: 12653, selected: false, dps: '933.42' },
        { id: 18323, selected: false, dps: '931.84' },
        { id: 17069, selected: true, dps: '937.22' },
        { id: 12651, selected: false, dps: '930.68' },
        { id: 19107, selected: false, dps: '936.80' },
        { id: 18738, selected: false, dps: '928.37' },
        { id: 21459, selected: false },
        { id: 22347, selected: false },
        { id: 13040, selected: false, dps: '931.09' },
        { id: 22812, selected: false },
        { id: 20599, selected: false },
        { id: 13039, selected: false, dps: '933.30' },
        { id: 17072, selected: false, dps: '936.72' },
        { id: 13248, selected: false, dps: '928.88' },
        { id: 20722, selected: false },
        { id: 19368, selected: false, dps: '933.97' },
        { id: 19853, selected: false },
        { id: 13139, selected: false, dps: '932.91' },
        { id: 23557, selected: false },
        { id: 21800, selected: false },
        { id: 22810, selected: false },
        { id: 13380, selected: false, dps: '928.29' }
      ],
      mainhand: [
        { id: 19852, selected: false },
        { id: 12798, selected: false, dps: '922.20' },
        { id: 811, selected: false, dps: '878.75' },
        { id: 21242, selected: false },
        { id: 18737, selected: false, dps: '879.07' },
        { id: 19363, selected: false, dps: '936.04' },
        { id: 17016, selected: false, dps: '888.53' },
        { id: 17068, selected: false, dps: '918.80' },
        { id: 19362, selected: false, dps: '914.11' },
        { id: 871, selected: false, dps: '880.21' },
        { id: 19103, selected: false, dps: '890.81' },
        { id: 22816, selected: false },
        { id: 13952, selected: false, dps: '877.11' },
        { id: 18827, selected: false, dps: '942.30' },
        { id: 13015, selected: false, dps: '879.09' },
        { id: 21392, selected: false },
        { id: 20675, selected: false },
        { id: 19921, selected: false },
        {
          id: 199211,
          selected: false,
          dps: '475.64',
          tps: '579.30',
          dtps: '860.89'
        },
        { id: 14555, selected: false, dps: '872.53' },
        { id: 19166, selected: false, dps: '875.75' },
        { id: 21244, selected: false },
        { id: 13368, selected: false, dps: '871.42' },
        { id: 18805, selected: false, dps: '898.67' },
        { id: 13984, selected: false, dps: '864.08' },
        { id: 21126, selected: false },
        { id: 19346, selected: false, dps: '901.43' },
        { id: 20578, selected: false },
        { id: 19859, selected: false },
        { id: 12590, selected: false, dps: '904.44' },
        { id: 12709, selected: false, dps: '861.45' },
        { id: 19099, selected: false, dps: '871.67' },
        { id: 17071, selected: false, dps: '884.93' },
        { id: 23044, selected: false },
        { id: 12783, selected: false, dps: '874.90' },
        { id: 18838, selected: false, dps: '923.10' },
        { id: 22802, selected: false },
        { id: 22804, selected: false },
        { id: 18816, selected: false, dps: '902.10' },
        { id: 21498, selected: false },
        { id: 5267, selected: false, dps: '866.95' },
        { id: 19542, selected: false, dps: '869.33' },
        { id: 21522, selected: false },
        { id: 19324, selected: false, dps: '885.58' },
        { id: 22377, selected: false },
        { id: 19365, selected: false, dps: '931.72' },
        { id: 18203, selected: false, dps: '915.01' },
        { id: 18844, selected: false, dps: '941.37' },
        { id: 22317, selected: false },
        { id: 21673, selected: false },
        { id: 19896, selected: false },
        { id: 22404, selected: false, dps: '879.61' },
        { id: 21837, selected: false },
        { id: 21268, selected: false },
        { id: 19170, selected: false, dps: '928.03' },
        { id: 17112, selected: false, dps: '958.25' },
        { id: 11684, selected: false, dps: '943.36' },
        { id: 20580, selected: false },
        { id: 18865, selected: false, dps: '965.34' },
        { id: 13006, selected: false, dps: '909.44' },
        { id: 23221, selected: false },
        { id: 22384, selected: false, dps: '921.78' },
        { id: 21715, selected: false },
        { id: 19908, selected: false },
        { id: 19335, selected: false, dps: '937.32' },
        { id: 19104, selected: false, dps: '912.95' },
        { id: 22808, selected: false },
        { id: 18376, selected: false, dps: '905.07' },
        { id: 21650, selected: false },
        { id: 19168, selected: false, dps: '924.10' },
        { id: 19867, selected: false },
        { id: 18832, selected: false, dps: '944.96' },
        { id: 18484, selected: false, dps: '907.17' },
        { id: 19352, selected: false, dps: '959.41' },
        { id: 19110, selected: false, dps: '903.02' },
        { id: 12940, selected: false, dps: '916.81' },
        { id: 17015, selected: false, dps: '903.16' },
        { id: 19968, selected: false },
        { id: 23054, selected: false },
        { id: 23014, selected: false },
        { id: 2244, selected: false, dps: '917.39' },
        { id: 19351, selected: false, dps: '945.26' },
        { id: 15806, selected: false, dps: '910.67' },
        { id: 20577, selected: false },
        { id: 18348, selected: false, dps: '925.48' },
        { id: 12584, selected: false, dps: '965.16' },
        { id: 23456, selected: false, dps: '962.51' },
        { id: 21520, selected: false },
        { id: 22378, selected: false },
        { id: 6622, selected: false, dps: '911.97' },
        { id: 19901, selected: false },
        { id: 1728, selected: false, dps: '920.84' },
        { id: 23577, selected: false },
        { id: 17705, selected: false, dps: '908.69' },
        { id: 19019, selected: false, dps: '988.54' },
        { id: 19865, selected: false },
        { id: 22806, selected: false },
        { id: 17075, selected: true, dps: '936.82' },
        { id: 19554, selected: false, dps: '908.74' },
        { id: 14487, selected: false, dps: '900.88' },
        {
          id: 18683,
          selected: false,
          dps: '459.92',
          tps: '563.60',
          dtps: '862.20'
        }
      ],
      offhand: [
        { id: 19852, selected: false },
        { id: 21242, selected: false },
        { id: 18737, selected: false, dps: '906.64' },
        { id: 19363, selected: false, dps: '939.49' },
        { id: 17068, selected: false, dps: '920.37' },
        { id: 19362, selected: false, dps: '927.43' },
        { id: 871, selected: false, dps: '908.74' },
        { id: 19103, selected: false, dps: '910.49' },
        { id: 22816, selected: false },
        { id: 18827, selected: false, dps: '942.09' },
        { id: 13015, selected: false, dps: '904.93' },
        { id: 21392, selected: false },
        { id: 20675, selected: false },
        { id: 19921, selected: false },
        {
          id: 199211,
          selected: false,
          dps: '476.82',
          tps: '587.85',
          dtps: '861.26'
        },
        { id: 14555, selected: false, dps: '908.98' },
        { id: 19166, selected: false, dps: '909.10' },
        { id: 21244, selected: false },
        { id: 13368, selected: false, dps: '910.81' },
        { id: 18805, selected: false, dps: '930.10' },
        { id: 13984, selected: false, dps: '902.40' },
        { id: 21126, selected: false },
        { id: 18392, selected: false, dps: '930.06' },
        { id: 19346, selected: false, dps: '926.50' },
        { id: 20578, selected: false },
        { id: 19859, selected: false },
        { id: 12590, selected: false, dps: '929.41' },
        { id: 19099, selected: false, dps: '907.82' },
        { id: 17071, selected: false, dps: '913.39' },
        { id: 23044, selected: false },
        { id: 12783, selected: false, dps: '911.66' },
        { id: 18838, selected: false, dps: '941.80' },
        { id: 22802, selected: false },
        { id: 22804, selected: false },
        { id: 18816, selected: false, dps: '923.09' },
        { id: 21498, selected: false },
        { id: 5267, selected: false, dps: '906.06' },
        { id: 19542, selected: false, dps: '906.90' },
        { id: 21522, selected: false },
        { id: 19324, selected: false, dps: '913.89' },
        { id: 22377, selected: false },
        { id: 19910, selected: false },
        { id: 23242, selected: false },
        { id: 18202, selected: false, dps: '913.79' },
        { id: 18848, selected: false, dps: '942.35' },
        { id: 22317, selected: false },
        { id: 21837, selected: false },
        { id: 21268, selected: false },
        { id: 19170, selected: false, dps: '942.00' },
        { id: 18865, selected: false, dps: '970.85' },
        { id: 23221, selected: false },
        { id: 21715, selected: false },
        { id: 19908, selected: false },
        { id: 19104, selected: true, dps: '936.99' },
        { id: 22808, selected: false },
        { id: 18376, selected: false, dps: '926.87' },
        { id: 21650, selected: false },
        { id: 19168, selected: false, dps: '939.64' },
        { id: 18832, selected: false, dps: '962.90' },
        { id: 18484, selected: false, dps: '931.99' },
        { id: 19352, selected: false, dps: '965.92' },
        { id: 19110, selected: false, dps: '925.32' },
        { id: 12939, selected: false, dps: '924.68' },
        { id: 23054, selected: false },
        { id: 23014, selected: false },
        { id: 19351, selected: false, dps: '967.27' },
        { id: 15806, selected: false, dps: '935.26' },
        { id: 20577, selected: false },
        { id: 12584, selected: false, dps: '970.68' },
        { id: 23456, selected: false, dps: '971.84' },
        { id: 21520, selected: false },
        { id: 22378, selected: false },
        { id: 19901, selected: false },
        { id: 23577, selected: false },
        { id: 17705, selected: false, dps: '923.60' },
        { id: 19019, selected: false, dps: '979.56' },
        { id: 19866, selected: false },
        { id: 22806, selected: false },
        { id: 17075, selected: false, dps: '946.53' },
        { id: 19554, selected: false, dps: '933.75' },
        { id: 14487, selected: false, dps: '924.05' },
        {
          id: 18683,
          selected: false,
          dps: '459.43',
          tps: '570.13',
          dtps: '861.62'
        }
      ],
      shield: [{ id: 19349 }],
      twohand: [
        { id: 12784, selected: false, dps: '660.25' },
        { id: 1263, selected: false, dps: '669.75' },
        { id: 21134, selected: false },
        { id: 19354, selected: false, dps: '692.90' },
        { id: 19353, selected: false, dps: '716.40' },
        { id: 11931, selected: false, dps: '651.77' },
        { id: 13983, selected: false, dps: '641.58' },
        { id: 19962, selected: false },
        { id: 18831, selected: false, dps: '725.12' },
        { id: 18759, selected: false, dps: '650.19' },
        { id: 21856, selected: false },
        { id: 19169, selected: false, dps: '676.14' },
        { id: 22815, selected: false },
        { id: 17104, selected: false, dps: '704.41' },
        { id: 13285, selected: false, dps: '635.86' },
        { id: 18538, selected: false, dps: '689.18' },
        { id: 19900, selected: false },
        { id: 18420, selected: false, dps: '696.89' },
        { id: 20696, selected: false },
        { id: 22348, selected: false },
        { id: 19358, selected: false, dps: '734.34' },
        { id: 17073, selected: false, dps: '696.18' },
        { id: 13167, selected: false, dps: '679.54' },
        { id: 12796, selected: false, dps: '676.55' },
        { id: 18868, selected: false, dps: '751.77' },
        { id: 19918, selected: false },
        { id: 22798, selected: false },
        { id: 12969, selected: false, dps: '666.24' },
        { id: 17182, selected: false, dps: '751.18' },
        { id: 17193, selected: false, dps: '696.77' },
        { id: 19323, selected: false, dps: '713.99' },
        { id: 9449, selected: false, dps: '750.02' },
        { id: 21635, selected: false },
        { id: 19167, selected: false, dps: '703.48' },
        { id: 12583, selected: false, dps: '664.80' },
        { id: 19874, selected: false },
        { id: 22314, selected: false, dps: '651.03' },
        { id: 18871, selected: false, dps: '725.45' },
        { id: 19106, selected: false, dps: '657.96' },
        { id: 18502, selected: false, dps: '643.09' },
        { id: 17223, selected: false, dps: '665.13' },
        { id: 18725, selected: false, dps: '657.86' },
        { id: 19963, selected: false },
        { id: 20660, selected: false },
        { id: 23039, selected: false },
        { id: 19946, selected: false },
        { id: 19364, selected: false, dps: '764.81' },
        { id: 18520, selected: false, dps: '694.07' },
        { id: 12592, selected: false, dps: '681.79' },
        { id: 2801, selected: false, dps: '708.54' },
        { id: 17076, selected: false, dps: '763.22' },
        { id: 22813, selected: false },
        { id: 22691, selected: false },
        { id: 20669, selected: false },
        { id: 647, selected: false, dps: '698.51' },
        { id: 18877, selected: false, dps: '751.46' },
        { id: 21679, selected: false },
        { id: 21492, selected: false },
        { id: 18822, selected: false, dps: '737.44' },
        { id: 13163, selected: false, dps: '681.76' },
        { id: 13505, selected: false, dps: '680.64' },
        { id: 19334, selected: false, dps: '757.47' },
        { id: 18542, selected: false, dps: '715.34' },
        { id: 13982, selected: false, dps: '676.71' },
        { id: 19854, selected: false },
        { id: 19357, selected: false }
      ],
      custom: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
        { id: 12 },
        { id: 13 },
        { id: 14 },
        { id: 15 },
        { id: 16 },
        { id: 17 },
        { id: 18 },
        { id: 19 }
      ]
    },
    enchant: {
      head: [
        { id: 18329, dps: '936.65' },
        { id: 11647, dps: '935.61' },
        { id: 11645, selected: true, dps: '937.23' }
      ],
      shoulder: [{ id: 29483 }, { id: 24422 }],
      back: [{ id: 25084 }, { id: 13882, selected: true, dps: '937.30' }],
      chest: [
        { id: 20025, dps: '938.86' },
        { id: 13941, selected: true, dps: '936.98' }
      ],
      wrist: [
        { id: 13939, selected: false, dps: '935.57' },
        { id: 20010, selected: true, dps: '937.10' }
      ],
      hands: [
        { id: 25080 },
        { id: 20012, dps: '936.77' },
        { id: 20013, selected: true, dps: '937.30' },
        { id: 13948, selected: false, dps: '938.51' }
      ],
      legs: [
        { id: 18329, selected: false, dps: '936.70' },
        { id: 11647, dps: '935.51' },
        { id: 11645, selected: true, dps: '937.28' }
      ],
      feet: [
        { id: 20023, dps: '941.47' },
        { id: 13890, selected: true, dps: '936.97' }
      ],
      mainhand: [
        { id: 23800, selected: false, dps: '919.78' },
        { id: 23799, selected: false, dps: '923.30' },
        { id: 20034, selected: true, dps: '937.24' },
        { id: 13898, selected: false, dps: '917.82' },
        { id: 20032, selected: false, dps: '915.65' },
        { id: 20031, selected: false, dps: '914.76' },
        { id: 18262, selected: true, dps: '937.44' },
        { id: 12404, selected: false, dps: '922.01' },
        { id: 23122, selected: false }
      ],
      offhand: [
        { id: 23800, selected: false, dps: '929.21' },
        { id: 23799, selected: false, dps: '932.84' },
        { id: 20034, selected: true, dps: '936.89' },
        { id: 13898, selected: false, dps: '924.44' },
        { id: 20032, selected: false, dps: '924.29' },
        { id: 20031, selected: false, dps: '923.00' },
        { id: 18262, selected: true, dps: '937.06' },
        { id: 12404, selected: false, dps: '919.30' },
        { id: 23122, selected: false }
      ],
      twohand: [
        { id: 27837, selected: false, dps: '702.34' },
        { id: 23799, selected: false, dps: '700.92' },
        { id: 20034, selected: false, dps: '714.20' },
        { id: 13898, selected: false, dps: '700.16' },
        { id: 20032, selected: false, dps: '698.81' },
        { id: 18262, selected: false, dps: '714.18' },
        { id: 12404, selected: false, dps: '704.61' },
        { id: 23122, selected: false },
        { id: 20030, selected: false, dps: '698.50' }
      ]
    }
  },
  dps: {},
  fprot: {
    buffs: [71, 27578, 22888, 24425, 22817, 22818, 15366, 9885, 20217, 19838, 13452, 20452],
    rotation: [
      {
        id: '23894',
        name: 'Bloodthirst',
        classname: 'Bloodthirst',
        iconname: 'spell_nature_bloodlust',
        minrage: '30',
        hidden: true,
        active: true
      },
      {
        id: '27580',
        name: 'Mortal Strike',
        classname: 'MortalStrike',
        iconname: 'ability_warrior_savageblow',
        minrage: '30',
        hidden: true,
        active: false
      },
      {
        id: '11567',
        name: 'Heroic Strike',
        classname: 'HeroicStrike',
        iconname: 'ability_rogue_ambush',
        minrage: '30',
        maincd: '4',
        unqueue: '0',
        active: true
      },
      {
        id: '11609',
        name: 'Cleave',
        classname: 'Cleave',
        iconname: 'ability_warrior_cleave',
        minrage: '40',
        hidden: true,
        active: false
      },
      {
        id: '20662',
        name: 'Execute',
        classname: 'Execute',
        iconname: 'inv_sword_48',
        lasttime: '8',
        priorityap: '2000',
        active: false,
        starttime: '52'
      },
      {
        id: '1680',
        name: 'Whirlwind',
        classname: 'Whirlwind',
        iconname: 'ability_whirlwind',
        minrage: '50',
        maincd: '2',
        active: false
      },
      {
        id: '12328',
        name: 'Death Wish',
        classname: 'DeathWish',
        iconname: 'spell_shadow_deathpact',
        time: '0',
        crusaders: '0',
        hidden: true,
        aura: true,
        active: true
      },
      {
        id: '1719',
        name: 'Recklessness',
        classname: 'Recklessness',
        iconname: 'ability_criticalstrike',
        time: '44',
        aura: true,
        active: false
      },
      {
        id: '11551',
        name: 'Battle Shout',
        classname: 'BattleShout',
        iconname: 'ability_warrior_battleshout',
        time: -1,
        hidden: true,
        active: false
      },
      {
        id: '11585',
        name: 'Overpower',
        classname: 'Overpower',
        iconname: 'ability_meleedamage',
        maxrage: '25',
        maincd: '2',
        active: false
      },
      {
        id: '26296',
        name: 'Berserking',
        classname: 'Berserking',
        iconname: 'racial_troll_berserk',
        time: '50',
        haste: '30',
        hidden: true,
        aura: true,
        active: false
      },
      {
        id: '20572',
        name: 'Blood Fury',
        classname: 'BloodFury',
        iconname: 'racial_orc_berserkerstrength',
        time: '35',
        hidden: true,
        aura: true,
        active: false
      },
      {
        id: '2687',
        name: 'Bloodrage',
        classname: 'Bloodrage',
        iconname: 'ability_racial_bloodrage',
        active: false
      },
      {
        id: '17528',
        name: 'Mighty Rage Potion',
        classname: 'MightyRagePotion',
        iconname: 'inv_potion_41',
        time: '39',
        crusaders: '0',
        aura: true,
        active: false
      },
      {
        id: '16322',
        name: 'Juju Flurry',
        classname: 'JujuFlurry',
        iconname: 'inv_misc_monsterscales_17',
        time: '39',
        aura: true,
        hidden: true,
        active: false
      },
      {
        id: '23255',
        name: 'Deep Wounds',
        classname: 'DeepWounds',
        iconname: 'ability_backstab',
        hidden: true,
        aura: true,
        active: false
      },
      {
        id: '11597',
        name: 'Sunder Armor',
        classname: 'SunderArmor',
        iconname: 'ability_warrior_sunder',
        globals: '1',
        active: true
      },
      {
        id: '11605',
        name: 'Slam',
        classname: 'Slam',
        iconname: 'ability_warrior_decisivestrike',
        hidden: true,
        active: false
      },
      {
        id: '7373',
        name: 'Hamstring',
        classname: 'Hamstring',
        iconname: 'ability_shockwave',
        minrage: '50',
        active: false
      },
      {
        id: '11601',
        name: 'Revenge',
        classname: 'Revenge',
        iconname: 'ability_warrior_revenge',
        minrage: '5',
        active: true
      },
      {
        id: 23925,
        name: 'Shield Slam',
        classname: 'ShieldSlam',
        iconname: 'inv_shield_05',
        minrage: 20,
        hidden: true,
        active: false
      }
    ],
    sources: [
      'quest',
      'crafting',
      'dungeon',
      'onyxia',
      'mc',
      'bwl',
      'zg',
      'worldboss',
      'pvp',
      'other'
    ],
    phases: ['1', '2', '3', '4'],
    talents: [
      { n: 'Arms', t: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
      { n: 'Fury', t: [0, 5, 5, 0, 0, 1, 0, 4, 5, 0, 5, 0, 1, 0, 0, 5, 1] },
      {
        n: 'Protection',
        t: [5, 0, 2, 3, 0, 1, 1, 0, 5, 2, 0, 0, 0, 0, 0, 0, 0]
      }
    ],
    gear: {
      head: [
        {
          id: 12587,
          selected: false,
          dps: '508.24',
          tps: '621.37',
          dtps: '936.25'
        },
        {
          id: 20623,
          selected: false,
          dps: '503.59',
          tps: '618.08',
          dtps: '922.17'
        },
        { id: 21329, selected: false },
        {
          id: 18817,
          selected: false,
          dps: '505.37',
          tps: '618.89',
          dtps: '897.67'
        },
        { id: 22418, selected: false },
        {
          id: 9375,
          selected: false,
          dps: '496.49',
          tps: '610.09',
          dtps: '932.37'
        },
        {
          id: 20521,
          selected: false,
          dps: '517.87',
          tps: '631.20',
          dtps: '892.34'
        },
        { id: 21460, selected: false },
        {
          id: 19372,
          selected: true,
          dps: '513.02',
          tps: '626.47',
          dtps: '871.93'
        },
        { id: 21999, selected: false },
        {
          id: 16866,
          selected: false,
          dps: '502.62',
          tps: '615.61',
          dtps: '858.76'
        },
        {
          id: 22411,
          selected: false,
          dps: '524.10',
          tps: '638.95',
          dtps: '888.73'
        },
        {
          id: 16731,
          selected: false,
          dps: '507.23',
          tps: '620.73',
          dtps: '885.49'
        },
        {
          id: 16963,
          selected: false,
          dps: '504.34',
          tps: '617.70',
          dtps: '854.25'
        },
        {
          id: 12640,
          selected: false,
          dps: '532.30',
          tps: '646.73',
          dtps: '878.51'
        },
        {
          id: 13404,
          selected: false,
          dps: '517.05',
          tps: '631.11',
          dtps: '925.74'
        },
        {
          id: 23314,
          selected: false,
          dps: '518.49',
          tps: '632.39',
          dtps: '885.72'
        },
        {
          id: 16478,
          selected: false,
          dps: '512.76',
          tps: '626.31',
          dtps: '871.67'
        }
      ],
      neck: [
        {
          id: 19491,
          selected: false,
          dps: '508.01',
          tps: '620.78',
          dtps: '870.90'
        },
        { id: 21664, selected: false },
        { id: 22150, selected: false },
        {
          id: 17111,
          selected: false,
          dps: '503.47',
          tps: '615.43',
          dtps: '868.55'
        },
        { id: 21505, selected: false },
        {
          id: 18205,
          selected: false,
          dps: '501.14',
          tps: '613.71',
          dtps: '859.95'
        },
        { id: 21809, selected: false },
        {
          id: 11933,
          selected: false,
          dps: '503.10',
          tps: '615.47',
          dtps: '873.08'
        },
        {
          id: 15411,
          selected: false,
          dps: '504.88',
          tps: '617.94',
          dtps: '871.44'
        },
        {
          id: 18404,
          selected: true,
          dps: '517.08',
          tps: '630.18',
          dtps: '869.79'
        },
        { id: 22340, selected: false },
        {
          id: 19377,
          selected: false,
          dps: '514.19',
          tps: '627.45',
          dtps: '868.16'
        },
        { id: 23023, selected: false },
        { id: 23053, selected: false },
        {
          id: 19856,
          selected: false,
          dps: '509.62',
          tps: '622.36',
          dtps: '873.79'
        },
        {
          id: 17044,
          selected: false,
          dps: '498.56',
          tps: '611.01',
          dtps: '871.50'
        }
      ],
      shoulder: [
        {
          id: 20683,
          selected: false,
          dps: '526.03',
          tps: '640.01',
          dtps: '893.00'
        },
        {
          id: 20212,
          selected: false,
          dps: '520.94',
          tps: '634.25',
          dtps: '890.73'
        },
        {
          id: 15051,
          selected: false,
          dps: '517.54',
          tps: '631.01',
          dtps: '920.93'
        },
        {
          id: 19878,
          selected: false,
          dps: '517.74',
          tps: '630.91',
          dtps: '893.89'
        },
        { id: 21330, selected: false },
        {
          id: 19394,
          selected: false,
          dps: '523.86',
          tps: '637.72',
          dtps: '870.06'
        },
        { id: 22419, selected: false },
        {
          id: 16868,
          selected: false,
          dps: '517.92',
          tps: '631.56',
          dtps: '884.72'
        },
        { id: 21639, selected: false },
        {
          id: 16961,
          selected: true,
          dps: '518.48',
          tps: '632.39',
          dtps: '872.94'
        },
        { id: 21805, selected: false },
        {
          id: 23315,
          selected: false,
          dps: '517.16',
          tps: '630.95',
          dtps: '894.42'
        },
        {
          id: 16480,
          selected: false,
          dps: '527.37',
          tps: '641.43',
          dtps: '885.85'
        },
        {
          id: 20517,
          selected: false,
          dps: '521.72',
          tps: '636.09',
          dtps: '907.10'
        },
        { id: 22001, selected: false },
        {
          id: 16733,
          selected: false,
          dps: '512.56',
          tps: '626.30',
          dtps: '902.86'
        },
        {
          id: 12927,
          selected: false,
          dps: '530.38',
          tps: '645.08',
          dtps: '936.33'
        },
        {
          id: 12082,
          selected: false,
          dps: '526.86',
          tps: '642.10',
          dtps: '931.59'
        }
      ],
      back: [
        {
          id: 19398,
          selected: false,
          dps: '504.07',
          tps: '617.13',
          dtps: '872.56'
        },
        {
          id: 13340,
          selected: false,
          dps: '498.08',
          tps: '610.30',
          dtps: '870.31'
        },
        { id: 21701, selected: false },
        {
          id: 19436,
          selected: false,
          dps: '507.49',
          tps: '619.89',
          dtps: '872.38'
        },
        { id: 21710, selected: false },
        { id: 21621, selected: false },
        {
          id: 20073,
          selected: false,
          dps: '502.23',
          tps: '614.65',
          dtps: '869.30'
        },
        { id: 23030, selected: false },
        {
          id: 17102,
          selected: false,
          dps: '492.63',
          tps: '604.51',
          dtps: '874.10'
        },
        {
          id: 17107,
          selected: false,
          dps: '501.40',
          tps: '614.18',
          dtps: '866.06'
        },
        { id: 21394, selected: false },
        { id: 21187, selected: false },
        {
          id: 18204,
          selected: false,
          dps: '495.90',
          tps: '608.72',
          dtps: '872.28'
        },
        {
          id: 18689,
          selected: false,
          dps: '499.19',
          tps: '611.55',
          dtps: '863.61'
        },
        {
          id: 18541,
          selected: false,
          dps: '517.64',
          tps: '631.86',
          dtps: '873.99'
        },
        { id: 21456, selected: false },
        { id: 23045, selected: false },
        {
          id: 13397,
          selected: false,
          dps: '496.85',
          tps: '609.55',
          dtps: '874.60'
        },
        {
          id: 19084,
          selected: false,
          dps: '499.21',
          tps: '611.52',
          dtps: '867.25'
        },
        {
          id: 19907,
          selected: true,
          dps: '507.64',
          tps: '621.00',
          dtps: '870.33'
        },
        {
          id: 20691,
          selected: false,
          dps: '499.15',
          tps: '611.47',
          dtps: '871.09'
        }
      ],
      chest: [
        {
          id: 15050,
          selected: false,
          dps: '503.29',
          tps: '616.10',
          dtps: '928.45'
        },
        { id: 19690, selected: false },
        { id: 21814, selected: false },
        {
          id: 12757,
          selected: false,
          dps: '502.67',
          tps: '614.91',
          dtps: '933.38'
        },
        { id: 21997, selected: false },
        {
          id: 16865,
          selected: false,
          dps: '498.39',
          tps: '610.93',
          dtps: '879.12'
        },
        {
          id: 12895,
          selected: false,
          dps: '504.58',
          tps: '617.14',
          dtps: '899.10'
        },
        {
          id: 16730,
          selected: false,
          dps: '499.13',
          tps: '611.27',
          dtps: '902.46'
        },
        {
          id: 16966,
          selected: true,
          dps: '497.40',
          tps: '610.06',
          dtps: '865.50'
        },
        {
          id: 14637,
          selected: false,
          dps: '507.23',
          tps: '620.28',
          dtps: '947.36'
        },
        { id: 21331, selected: false },
        {
          id: 11926,
          selected: false,
          dps: '498.45',
          tps: '610.71',
          dtps: '932.53'
        },
        { id: 23226, selected: false },
        {
          id: 19405,
          selected: false,
          dps: '514.24',
          tps: '626.91',
          dtps: '881.95'
        },
        { id: 22191, selected: false },
        {
          id: 18530,
          selected: false,
          dps: '502.39',
          tps: '614.38',
          dtps: '930.28'
        },
        { id: 23000, selected: false },
        {
          id: 16477,
          selected: false,
          dps: '503.65',
          tps: '615.83',
          dtps: '879.50'
        },
        {
          id: 23300,
          selected: false,
          dps: '503.39',
          tps: '615.22',
          dtps: '894.16'
        },
        { id: 19904, selected: false },
        {
          id: 11726,
          selected: false,
          dps: '504.66',
          tps: '617.10',
          dtps: '930.47'
        },
        { id: 19822, selected: false },
        {
          id: 13944,
          selected: false,
          dps: '502.01',
          tps: '614.32',
          dtps: '950.09'
        },
        { id: 21680, selected: false }
      ],
      wrist: [
        { id: 20687, selected: false },
        {
          id: 12936,
          selected: false,
          dps: '507.73',
          tps: '621.43',
          dtps: '872.77'
        },
        {
          id: 19578,
          selected: false,
          dps: '503.30',
          tps: '615.37',
          dtps: '868.37'
        },
        {
          id: 16959,
          selected: true,
          dps: '497.38',
          tps: '610.36',
          dtps: '867.20'
        },
        { id: 21457, selected: false },
        { id: 21996, selected: false },
        {
          id: 16861,
          selected: false,
          dps: '495.92',
          tps: '608.79',
          dtps: '868.74'
        },
        {
          id: 16735,
          selected: false,
          dps: '499.00',
          tps: '611.79',
          dtps: '874.32'
        },
        { id: 21184, selected: false },
        {
          id: 18533,
          selected: false,
          dps: '499.36',
          tps: '611.65',
          dtps: '870.66'
        },
        { id: 21618, selected: false },
        { id: 21602, selected: false },
        { id: 21491, selected: false },
        { id: 19824, selected: false },
        {
          id: 13400,
          selected: false,
          dps: '498.16',
          tps: '610.65',
          dtps: '875.84'
        },
        {
          id: 19146,
          selected: false,
          dps: '502.67',
          tps: '614.95',
          dtps: '893.61'
        },
        {
          id: 18812,
          selected: false,
          dps: '505.51',
          tps: '619.62',
          dtps: '878.06'
        },
        { id: 22936, selected: false }
      ],
      hands: [
        {
          id: 18823,
          selected: true,
          dps: '501.31',
          tps: '613.96',
          dtps: '868.55'
        },
        {
          id: 15063,
          selected: false,
          dps: '472.67',
          tps: '582.82',
          dtps: '864.60'
        },
        {
          id: 14551,
          selected: false,
          dps: '487.42',
          tps: '599.83',
          dtps: '865.10'
        },
        {
          id: 19143,
          selected: false,
          dps: '475.42',
          tps: '585.73',
          dtps: '829.06'
        },
        { id: 21581, selected: false },
        { id: 21998, selected: false },
        {
          id: 16863,
          selected: false,
          dps: '486.94',
          tps: '598.94',
          dtps: '825.18'
        },
        { id: 21674, selected: false },
        { id: 21479, selected: false },
        {
          id: 16737,
          selected: false,
          dps: '474.09',
          tps: '584.28',
          dtps: '838.90'
        },
        {
          id: 16964,
          selected: false,
          dps: '472.17',
          tps: '582.53',
          dtps: '807.64'
        },
        { id: 21672, selected: false },
        {
          id: 16484,
          selected: false,
          dps: '474.57',
          tps: '586.03',
          dtps: '832.43'
        },
        {
          id: 23286,
          selected: false,
          dps: '471.85',
          tps: '582.20',
          dtps: '840.36'
        },
        {
          id: 13162,
          selected: false,
          dps: '473.30',
          tps: '583.31',
          dtps: '835.75'
        },
        { id: 22714, selected: false },
        {
          id: 12639,
          selected: false,
          dps: '466.48',
          tps: '576.68',
          dtps: '823.29'
        },
        {
          id: 13963,
          selected: false,
          dps: '488.16',
          tps: '600.32',
          dtps: '854.81'
        },
        {
          id: 19157,
          selected: false,
          dps: '474.58',
          tps: '585.11',
          dtps: '852.25'
        }
      ],
      waist: [
        {
          id: 20204,
          selected: false,
          dps: '486.33',
          tps: '596.79',
          dtps: '839.26'
        },
        { id: 21994, selected: false },
        {
          id: 16864,
          selected: false,
          dps: '481.03',
          tps: '591.23',
          dtps: '818.53'
        },
        { id: 21586, selected: false },
        { id: 20216, selected: false },
        { id: 20213, selected: false },
        { id: 21503, selected: false },
        {
          id: 16736,
          selected: false,
          dps: '479.15',
          tps: '589.27',
          dtps: '840.78'
        },
        {
          id: 13142,
          selected: false,
          dps: '491.14',
          tps: '603.60',
          dtps: '838.72'
        },
        { id: 23219, selected: false },
        {
          id: 18505,
          selected: true,
          dps: '497.77',
          tps: '610.72',
          dtps: '864.70'
        },
        {
          id: 13959,
          selected: false,
          dps: '481.94',
          tps: '592.69',
          dtps: '840.59'
        },
        {
          id: 19087,
          selected: false,
          dps: '478.06',
          tps: '589.46',
          dtps: '843.41'
        },
        {
          id: 19137,
          selected: false,
          dps: '507.60',
          tps: '619.99',
          dtps: '826.69'
        },
        { id: 21463, selected: false },
        { id: 21598, selected: false },
        { id: 19823, selected: false },
        {
          id: 19380,
          selected: false,
          dps: '483.25',
          tps: '593.56',
          dtps: '849.06'
        },
        { id: 21692, selected: false },
        {
          id: 16960,
          selected: false,
          dps: '478.82',
          tps: '589.40',
          dtps: '822.50'
        }
      ],
      legs: [
        { id: 20671, selected: false },
        {
          id: 15052,
          selected: false,
          dps: '500.94',
          tps: '613.32',
          dtps: '941.26'
        },
        {
          id: 12963,
          selected: false,
          dps: '503.65',
          tps: '617.29',
          dtps: '943.32'
        },
        { id: 19855, selected: false },
        {
          id: 14638,
          selected: false,
          dps: '500.26',
          tps: '612.83',
          dtps: '958.45'
        },
        {
          id: 14554,
          selected: false,
          dps: '515.10',
          tps: '626.86',
          dtps: '911.98'
        },
        {
          id: 145541,
          selected: false,
          dps: '503.28',
          tps: '616.09',
          dtps: '913.81'
        },
        { id: 21332, selected: false },
        { id: 20627, selected: false },
        {
          id: 15062,
          selected: false,
          dps: '501.89',
          tps: '614.76',
          dtps: '960.56'
        },
        {
          id: 18380,
          selected: false,
          dps: '500.78',
          tps: '612.86',
          dtps: '920.56'
        },
        {
          id: 13498,
          selected: false,
          dps: '504.21',
          tps: '616.86',
          dtps: '916.44'
        },
        { id: 23071, selected: false },
        {
          id: 19402,
          selected: false,
          dps: '507.78',
          tps: '619.94',
          dtps: '899.78'
        },
        { id: 23068, selected: false },
        { id: 22000, selected: false },
        {
          id: 16867,
          selected: false,
          dps: '501.02',
          tps: '613.88',
          dtps: '888.60'
        },
        { id: 21495, selected: false },
        {
          id: 16732,
          selected: false,
          dps: '503.49',
          tps: '615.77',
          dtps: '922.30'
        },
        {
          id: 16962,
          selected: true,
          dps: '499.87',
          tps: '612.62',
          dtps: '865.05'
        },
        {
          id: 16479,
          selected: false,
          dps: '512.58',
          tps: '626.21',
          dtps: '901.97'
        },
        {
          id: 23301,
          selected: false,
          dps: '500.18',
          tps: '612.32',
          dtps: '913.43'
        },
        { id: 21651, selected: false },
        { id: 22672, selected: false },
        { id: 22385, selected: false }
      ],
      feet: [
        { id: 20208, selected: false },
        {
          id: 12555,
          selected: false,
          dps: '502.77',
          tps: '615.06',
          dtps: '933.65'
        },
        {
          id: 16984,
          selected: false,
          dps: '498.47',
          tps: '611.18',
          dtps: '903.59'
        },
        { id: 19906, selected: false },
        {
          id: 14616,
          selected: false,
          dps: '508.25',
          tps: '621.74',
          dtps: '910.54'
        },
        { id: 21995, selected: false },
        { id: 21688, selected: false },
        {
          id: 19381,
          selected: false,
          dps: '520.19',
          tps: '634.46',
          dtps: '905.95'
        },
        { id: 21493, selected: false },
        { id: 21706, selected: false },
        {
          id: 16734,
          selected: false,
          dps: '497.49',
          tps: '610.02',
          dtps: '895.36'
        },
        {
          id: 19387,
          selected: false,
          dps: '517.30',
          tps: '630.54',
          dtps: '877.90'
        },
        { id: 21333, selected: false },
        {
          id: 13210,
          selected: false,
          dps: '499.91',
          tps: '612.08',
          dtps: '926.25'
        },
        {
          id: 16483,
          selected: false,
          dps: '513.58',
          tps: '626.61',
          dtps: '873.53'
        },
        {
          id: 23287,
          selected: false,
          dps: '501.96',
          tps: '614.71',
          dtps: '888.23'
        },
        {
          id: 16862,
          selected: false,
          dps: '497.79',
          tps: '610.58',
          dtps: '875.65'
        },
        {
          id: 16965,
          selected: true,
          dps: '496.76',
          tps: '609.60',
          dtps: '864.97'
        },
        {
          id: 13070,
          selected: false,
          dps: '497.40',
          tps: '609.84',
          dtps: '886.23'
        },
        { id: 21490, selected: false },
        {
          id: 12553,
          selected: false,
          dps: '495.53',
          tps: '608.10',
          dtps: '923.10'
        },
        {
          id: 13967,
          selected: false,
          dps: '505.04',
          tps: '618.81',
          dtps: '904.94'
        },
        {
          id: 11731,
          selected: false,
          dps: '499.96',
          tps: '612.41',
          dtps: '908.41'
        }
      ],
      finger: [
        { id: 19376, dps: '447.86', tps: '556.26', dtps: '863.65' },
        {
          id: 17063,
          selected: true,
          dps: '472.36',
          tps: '583.82',
          dtps: '864.08'
        },
        { id: 21182, selected: false },
        { id: 19925, selected: false },
        { id: 22961, selected: false },
        { id: 18522, dps: '456.00', tps: '563.47', dtps: '863.25' },
        { id: 23038, selected: false },
        { id: 17713, dps: '465.39', tps: '574.74', dtps: '866.95' },
        { id: 19432, dps: '456.41', tps: '564.73', dtps: '863.19' },
        {
          id: 19325,
          selected: false,
          dps: '466.04',
          tps: '575.65',
          dtps: '865.19'
        },
        {
          id: 12548,
          selected: false,
          dps: '451.22',
          tps: '559.68',
          dtps: '864.09'
        },
        {
          id: 19384,
          selected: true,
          dps: '471.19',
          tps: '580.64',
          dtps: '863.21'
        },
        { id: 21189, selected: false },
        { id: 13098, dps: '452.00', tps: '559.63', dtps: '863.16' },
        { id: 19514, dps: '454.65', tps: '562.58', dtps: '869.47' },
        { id: 18821, dps: '457.51', tps: '565.62', dtps: '868.06' },
        { id: 21601, selected: false },
        { id: 21477, selected: false },
        { id: 21596, selected: false },
        { id: 21677, selected: false },
        { id: 19898, selected: false },
        { id: 198981, selected: false },
        { id: 22722, selected: false },
        { id: 23018, selected: false },
        { id: 21393, selected: false },
        { id: 21205, selected: false },
        { id: 18500, dps: '465.57', tps: '574.74', dtps: '865.77' }
      ],
      trinket: [
        { id: 21670, selected: false },
        {
          id: 13965,
          selected: false,
          dps: '450.42',
          tps: '562.82',
          dtps: '861.86'
        },
        { id: 18537, dps: '450.48', tps: '563.34', dtps: '849.21' },
        { id: 19289, dps: '448.73', tps: '561.07', dtps: '863.79' },
        {
          id: 20130,
          selected: true,
          dps: '487.63',
          tps: '599.48',
          dtps: '869.45'
        },
        { id: 19406, dps: '477.66', tps: '592.48', dtps: '857.74' },
        { id: 21180, selected: false },
        {
          id: 11815,
          selected: true,
          dps: '456.74',
          tps: '569.63',
          dtps: '861.91'
        },
        { id: 22321, dps: '446.23', tps: '558.80', dtps: '863.70' },
        { id: 23570, selected: false },
        { id: 22954, selected: false },
        { id: 19120, dps: '458.40', tps: '572.01', dtps: '862.66' },
        { id: 13209, dps: '468.65', tps: '581.12', dtps: '862.28' },
        { id: 23041, selected: false }
      ],
      ranged: [
        {
          id: 18680,
          selected: false,
          dps: '487.88',
          tps: '598.77',
          dtps: '867.46'
        },
        { id: 21478, selected: false },
        {
          id: 16996,
          selected: false,
          dps: '487.59',
          tps: '598.94',
          dtps: '865.12'
        },
        {
          id: 19350,
          selected: false,
          dps: '490.87',
          tps: '601.97',
          dtps: '866.70'
        },
        { id: 19993, selected: false },
        { id: 21616, selected: false },
        {
          id: 22318,
          selected: false,
          dps: '489.18',
          tps: '600.56',
          dtps: '867.63'
        },
        { id: 20038, selected: false },
        { id: 22811, selected: false },
        {
          id: 19562,
          selected: false,
          dps: '487.68',
          tps: '598.46',
          dtps: '868.03'
        },
        {
          id: 12653,
          selected: false,
          dps: '495.31',
          tps: '606.11',
          dtps: '863.01'
        },
        {
          id: 18323,
          selected: false,
          dps: '499.60',
          tps: '612.46',
          dtps: '860.55'
        },
        {
          id: 17069,
          selected: false,
          dps: '506.67',
          tps: '619.20',
          dtps: '867.04'
        },
        {
          id: 12651,
          selected: true,
          dps: '496.80',
          tps: '609.14',
          dtps: '869.76'
        },
        {
          id: 19107,
          selected: false,
          dps: '494.07',
          tps: '604.81',
          dtps: '865.86'
        },
        {
          id: 18738,
          selected: false,
          dps: '487.37',
          tps: '598.42',
          dtps: '864.79'
        },
        { id: 21459, selected: false },
        { id: 22347, selected: false },
        {
          id: 13040,
          selected: false,
          dps: '487.52',
          tps: '598.55',
          dtps: '870.51'
        },
        { id: 22812, selected: false },
        { id: 20599, selected: false },
        {
          id: 13039,
          selected: false,
          dps: '488.01',
          tps: '598.72',
          dtps: '861.35'
        },
        {
          id: 17072,
          selected: false,
          dps: '487.73',
          tps: '598.62',
          dtps: '863.03'
        },
        {
          id: 13248,
          selected: false,
          dps: '486.88',
          tps: '598.19',
          dtps: '864.19'
        },
        { id: 20722, selected: false },
        {
          id: 19368,
          selected: false,
          dps: '485.05',
          tps: '595.59',
          dtps: '869.05'
        },
        { id: 19853, selected: false },
        {
          id: 13139,
          selected: false,
          dps: '485.27',
          tps: '596.75',
          dtps: '867.65'
        },
        { id: 23557, selected: false },
        { id: 21800, selected: false },
        { id: 22810, selected: false },
        {
          id: 13380,
          selected: false,
          dps: '486.61',
          tps: '598.02',
          dtps: '863.30'
        }
      ],
      mainhand: [
        {
          id: 19852,
          selected: false,
          dps: '467.24',
          tps: '571.36',
          dtps: '862.53'
        },
        {
          id: 12798,
          selected: false,
          dps: '481.07',
          tps: '587.98',
          dtps: '868.38'
        },
        {
          id: 811,
          selected: false,
          dps: '459.33',
          tps: '561.18',
          dtps: '859.54'
        },
        { id: 21242, selected: false },
        {
          id: 18737,
          selected: false,
          dps: '451.99',
          tps: '558.85',
          dtps: '865.29'
        },
        {
          id: 19363,
          selected: false,
          dps: '491.58',
          tps: '596.29',
          dtps: '859.75'
        },
        {
          id: 17016,
          selected: false,
          dps: '463.66',
          tps: '567.36',
          dtps: '855.57'
        },
        {
          id: 17068,
          selected: false,
          dps: '488.23',
          tps: '588.63',
          dtps: '858.87'
        },
        {
          id: 19362,
          selected: false,
          dps: '478.72',
          tps: '582.57',
          dtps: '862.34'
        },
        {
          id: 871,
          selected: false,
          dps: '445.53',
          tps: '557.95',
          dtps: '878.82'
        },
        {
          id: 19103,
          selected: false,
          dps: '469.10',
          tps: '571.65',
          dtps: '855.76'
        },
        { id: 22816, selected: false },
        {
          id: 13952,
          selected: false,
          dps: '452.69',
          tps: '556.84',
          dtps: '861.53'
        },
        {
          id: 18827,
          selected: false,
          dps: '499.55',
          tps: '600.52',
          dtps: '859.04'
        },
        {
          id: 13015,
          selected: false,
          dps: '452.23',
          tps: '556.96',
          dtps: '859.25'
        },
        { id: 21392, selected: false },
        {
          id: 20675,
          selected: false,
          dps: '463.59',
          tps: '567.36',
          dtps: '857.67'
        },
        {
          id: 19921,
          selected: false,
          dps: '476.78',
          tps: '580.91',
          dtps: '865.83'
        },
        {
          id: 199211,
          selected: false,
          dps: '475.64',
          tps: '579.30',
          dtps: '860.89'
        },
        {
          id: 14555,
          selected: false,
          dps: '498.57',
          tps: '619.95',
          dtps: '881.11'
        },
        {
          id: 19166,
          selected: false,
          dps: '504.72',
          tps: '618.88',
          dtps: '871.76'
        },
        { id: 21244, selected: false },
        {
          id: 13368,
          selected: false,
          dps: '497.67',
          tps: '616.38',
          dtps: '880.80'
        },
        {
          id: 18805,
          selected: false,
          dps: '515.27',
          tps: '629.18',
          dtps: '876.02'
        },
        {
          id: 13984,
          selected: false,
          dps: '495.58',
          tps: '612.02',
          dtps: '875.58'
        },
        { id: 21126, selected: false },
        {
          id: 19346,
          selected: true,
          dps: '525.48',
          tps: '634.84',
          dtps: '867.16'
        },
        {
          id: 20578,
          selected: false,
          dps: '524.36',
          tps: '634.13',
          dtps: '868.53'
        },
        {
          id: 19859,
          selected: false,
          dps: '523.82',
          tps: '632.36',
          dtps: '868.66'
        },
        {
          id: 12590,
          selected: false,
          dps: '530.48',
          tps: '642.41',
          dtps: '875.43'
        },
        {
          id: 12709,
          selected: false,
          dps: '490.52',
          tps: '612.19',
          dtps: '886.69'
        },
        {
          id: 19099,
          selected: false,
          dps: '503.15',
          tps: '613.14',
          dtps: '869.92'
        },
        {
          id: 17071,
          selected: false,
          dps: '520.00',
          tps: '630.11',
          dtps: '870.70'
        },
        { id: 23044, selected: false },
        {
          id: 12783,
          selected: false,
          dps: '503.98',
          tps: '615.58',
          dtps: '872.83'
        },
        {
          id: 18838,
          selected: false,
          dps: '539.83',
          tps: '648.58',
          dtps: '871.01'
        },
        { id: 22802, selected: false },
        { id: 22804, selected: false },
        {
          id: 18816,
          selected: false,
          dps: '529.54',
          tps: '639.46',
          dtps: '868.74'
        },
        { id: 21498, selected: false },
        {
          id: 5267,
          selected: false,
          dps: '496.35',
          tps: '612.30',
          dtps: '884.32'
        },
        {
          id: 19542,
          selected: false,
          dps: '502.38',
          tps: '614.62',
          dtps: '870.84'
        },
        { id: 21522, selected: false },
        {
          id: 19324,
          selected: false,
          dps: '521.65',
          tps: '630.39',
          dtps: '873.23'
        },
        { id: 22377, selected: false },
        {
          id: 19365,
          selected: false,
          dps: '485.31',
          tps: '589.42',
          dtps: '859.20'
        },
        {
          id: 18203,
          selected: false,
          dps: '472.49',
          tps: '585.38',
          dtps: '879.32'
        },
        {
          id: 18844,
          selected: false,
          dps: '500.13',
          tps: '600.35',
          dtps: '854.00'
        },
        { id: 22317, selected: false },
        { id: 21673, selected: false },
        {
          id: 19896,
          selected: false,
          dps: '463.69',
          tps: '566.94',
          dtps: '860.54'
        },
        {
          id: 22404,
          selected: false,
          dps: '454.97',
          tps: '558.94',
          dtps: '861.85'
        },
        { id: 21837, selected: false },
        { id: 21268, selected: false },
        {
          id: 19170,
          selected: false,
          dps: '473.94',
          tps: '577.35',
          dtps: '863.15'
        },
        {
          id: 17112,
          selected: false,
          dps: '504.53',
          tps: '608.01',
          dtps: '860.82'
        },
        {
          id: 11684,
          selected: false,
          dps: '480.45',
          tps: '586.93',
          dtps: '863.18'
        },
        { id: 20580, selected: false },
        {
          id: 18865,
          selected: false,
          dps: '499.40',
          tps: '599.52',
          dtps: '858.70'
        },
        {
          id: 13006,
          selected: false,
          dps: '465.59',
          tps: '567.56',
          dtps: '853.32'
        },
        { id: 23221, selected: false },
        {
          id: 22384,
          selected: false,
          dps: '480.81',
          tps: '584.76',
          dtps: '862.79'
        },
        { id: 21715, selected: false },
        {
          id: 19908,
          selected: false,
          dps: '469.09',
          tps: '573.21',
          dtps: '860.94'
        },
        {
          id: 19335,
          selected: false,
          dps: '482.99',
          tps: '586.70',
          dtps: '854.44'
        },
        {
          id: 19104,
          selected: false,
          dps: '465.76',
          tps: '567.56',
          dtps: '860.87'
        },
        { id: 22808, selected: false },
        {
          id: 18376,
          selected: false,
          dps: '453.51',
          tps: '557.30',
          dtps: '854.37'
        },
        { id: 21650, selected: false },
        {
          id: 19168,
          selected: false,
          dps: '468.52',
          tps: '573.67',
          dtps: '857.26'
        },
        {
          id: 19867,
          selected: false,
          dps: '462.60',
          tps: '566.63',
          dtps: '856.83'
        },
        {
          id: 18832,
          selected: false,
          dps: '484.10',
          tps: '587.38',
          dtps: '858.71'
        },
        {
          id: 18484,
          selected: false,
          dps: '461.04',
          tps: '565.02',
          dtps: '859.08'
        },
        {
          id: 19352,
          selected: false,
          dps: '488.37',
          tps: '592.32',
          dtps: '858.86'
        },
        {
          id: 19110,
          selected: false,
          dps: '459.54',
          tps: '563.62',
          dtps: '857.15'
        },
        {
          id: 12940,
          selected: false,
          dps: '464.75',
          tps: '566.29',
          dtps: '861.51'
        },
        {
          id: 17015,
          selected: false,
          dps: '456.61',
          tps: '560.39',
          dtps: '853.54'
        },
        {
          id: 19968,
          selected: false,
          dps: '462.28',
          tps: '567.79',
          dtps: '859.75'
        },
        { id: 23054, selected: false },
        { id: 23014, selected: false },
        {
          id: 2244,
          selected: false,
          dps: '466.87',
          tps: '567.95',
          dtps: '859.40'
        },
        {
          id: 19351,
          selected: false,
          dps: '498.24',
          tps: '603.53',
          dtps: '852.76'
        },
        {
          id: 15806,
          selected: false,
          dps: '458.94',
          tps: '564.32',
          dtps: '870.13'
        },
        {
          id: 20577,
          selected: false,
          dps: '484.01',
          tps: '586.99',
          dtps: '857.27'
        },
        {
          id: 18348,
          selected: false,
          dps: '466.26',
          tps: '570.64',
          dtps: '859.61'
        },
        {
          id: 12584,
          selected: false,
          dps: '501.50',
          tps: '601.80',
          dtps: '857.21'
        },
        {
          id: 23456,
          selected: false,
          dps: '483.98',
          tps: '589.53',
          dtps: '871.75'
        },
        { id: 21520, selected: false },
        { id: 22378, selected: false },
        {
          id: 6622,
          selected: false,
          dps: '466.15',
          tps: '568.69',
          dtps: '857.55'
        },
        {
          id: 19901,
          selected: false,
          dps: '468.52',
          tps: '572.35',
          dtps: '858.41'
        },
        {
          id: 1728,
          selected: false,
          dps: '476.90',
          tps: '576.90',
          dtps: '858.98'
        },
        { id: 23577, selected: false },
        {
          id: 17705,
          selected: false,
          dps: '459.97',
          tps: '564.85',
          dtps: '865.29'
        },
        {
          id: 19019,
          selected: false,
          dps: '514.00',
          tps: '614.53',
          dtps: '864.42'
        },
        {
          id: 19865,
          selected: false,
          dps: '473.20',
          tps: '579.82',
          dtps: '872.04'
        },
        { id: 22806, selected: false },
        {
          id: 17075,
          selected: false,
          dps: '483.79',
          tps: '587.64',
          dtps: '859.44'
        },
        {
          id: 19554,
          selected: false,
          dps: '466.31',
          tps: '569.58',
          dtps: '861.90'
        },
        {
          id: 14487,
          selected: false,
          dps: '454.03',
          tps: '557.21',
          dtps: '860.76'
        },
        {
          id: 18683,
          selected: false,
          dps: '459.92',
          tps: '563.60',
          dtps: '862.20'
        }
      ],
      offhand: [
        {
          id: 19852,
          selected: false,
          dps: '469.25',
          tps: '580.96',
          dtps: '867.30'
        },
        { id: 21242, selected: false },
        {
          id: 18737,
          selected: false,
          dps: '468.63',
          tps: '580.29',
          dtps: '873.08'
        },
        {
          id: 19363,
          selected: false,
          dps: '483.44',
          tps: '595.80',
          dtps: '861.71'
        },
        {
          id: 17068,
          selected: false,
          dps: '471.14',
          tps: '582.63',
          dtps: '859.96'
        },
        {
          id: 19362,
          selected: false,
          dps: '474.52',
          tps: '586.04',
          dtps: '865.06'
        },
        {
          id: 871,
          selected: false,
          dps: '464.56',
          tps: '576.78',
          dtps: '876.79'
        },
        {
          id: 19103,
          selected: false,
          dps: '471.36',
          tps: '581.77',
          dtps: '864.68'
        },
        { id: 22816, selected: false },
        {
          id: 18827,
          selected: false,
          dps: '476.36',
          tps: '588.21',
          dtps: '865.10'
        },
        {
          id: 13015,
          selected: false,
          dps: '464.09',
          tps: '575.06',
          dtps: '860.75'
        },
        { id: 21392, selected: false },
        { id: 20675, selected: false },
        {
          id: 19921,
          selected: false,
          dps: '474.60',
          tps: '586.13',
          dtps: '864.29'
        },
        {
          id: 199211,
          selected: false,
          dps: '476.82',
          tps: '587.85',
          dtps: '861.26'
        },
        {
          id: 14555,
          selected: false,
          dps: '509.65',
          tps: '624.08',
          dtps: '880.67'
        },
        {
          id: 19166,
          selected: false,
          dps: '507.78',
          tps: '622.12',
          dtps: '877.33'
        },
        { id: 21244, selected: false },
        {
          id: 13368,
          selected: false,
          dps: '510.57',
          tps: '624.49',
          dtps: '881.23'
        },
        {
          id: 18805,
          selected: true,
          dps: '521.70',
          tps: '635.39',
          dtps: '877.20'
        },
        {
          id: 13984,
          selected: false,
          dps: '505.85',
          tps: '619.47',
          dtps: '880.96'
        },
        { id: 21126, selected: false },
        {
          id: 18392,
          selected: false,
          dps: '509.48',
          tps: '624.85',
          dtps: '888.04'
        },
        {
          id: 19346,
          selected: false,
          dps: '518.25',
          tps: '631.69',
          dtps: '875.39'
        },
        {
          id: 20578,
          selected: false,
          dps: '513.09',
          tps: '625.74',
          dtps: '874.89'
        },
        {
          id: 19859,
          selected: false,
          dps: '515.36',
          tps: '628.29',
          dtps: '870.38'
        },
        {
          id: 12590,
          selected: false,
          dps: '512.32',
          tps: '625.45',
          dtps: '873.76'
        },
        {
          id: 19099,
          selected: false,
          dps: '503.13',
          tps: '615.49',
          dtps: '871.67'
        },
        {
          id: 17071,
          selected: false,
          dps: '509.46',
          tps: '622.85',
          dtps: '872.83'
        },
        { id: 23044, selected: false },
        {
          id: 12783,
          selected: false,
          dps: '502.54',
          tps: '615.36',
          dtps: '875.33'
        },
        {
          id: 18838,
          selected: false,
          dps: '521.63',
          tps: '636.04',
          dtps: '865.88'
        },
        { id: 22802, selected: false },
        { id: 22804, selected: false },
        {
          id: 18816,
          selected: false,
          dps: '514.79',
          tps: '627.86',
          dtps: '876.09'
        },
        { id: 21498, selected: false },
        {
          id: 5267,
          selected: false,
          dps: '504.41',
          tps: '618.09',
          dtps: '877.10'
        },
        {
          id: 19542,
          selected: false,
          dps: '502.80',
          tps: '616.03',
          dtps: '872.94'
        },
        { id: 21522, selected: false },
        {
          id: 19324,
          selected: false,
          dps: '506.84',
          tps: '619.52',
          dtps: '869.36'
        },
        { id: 22377, selected: false },
        {
          id: 19910,
          selected: false,
          dps: '466.31',
          tps: '578.97',
          dtps: '876.45'
        },
        { id: 23242, selected: false },
        {
          id: 18202,
          selected: false,
          dps: '477.39',
          tps: '589.63',
          dtps: '875.09'
        },
        {
          id: 18848,
          selected: false,
          dps: '479.00',
          tps: '590.50',
          dtps: '860.07'
        },
        { id: 22317, selected: false },
        { id: 21837, selected: false },
        { id: 21268, selected: false },
        {
          id: 19170,
          selected: false,
          dps: '466.75',
          tps: '578.29',
          dtps: '870.90'
        },
        {
          id: 18865,
          selected: false,
          dps: '484.49',
          tps: '595.40',
          dtps: '858.09'
        },
        { id: 23221, selected: false },
        { id: 21715, selected: false },
        {
          id: 19908,
          selected: false,
          dps: '469.25',
          tps: '580.41',
          dtps: '862.37'
        },
        {
          id: 19104,
          selected: false,
          dps: '470.16',
          tps: '580.75',
          dtps: '861.60'
        },
        { id: 22808, selected: false },
        {
          id: 18376,
          selected: false,
          dps: '465.66',
          tps: '576.40',
          dtps: '851.02'
        },
        { id: 21650, selected: false },
        {
          id: 19168,
          selected: false,
          dps: '471.12',
          tps: '583.00',
          dtps: '864.62'
        },
        {
          id: 18832,
          selected: false,
          dps: '472.70',
          tps: '583.98',
          dtps: '861.94'
        },
        {
          id: 18484,
          selected: false,
          dps: '466.49',
          tps: '577.18',
          dtps: '861.42'
        },
        {
          id: 19352,
          selected: false,
          dps: '486.66',
          tps: '598.30',
          dtps: '861.21'
        },
        {
          id: 19110,
          selected: false,
          dps: '460.97',
          tps: '571.54',
          dtps: '861.94'
        },
        {
          id: 12939,
          selected: false,
          dps: '463.22',
          tps: '574.37',
          dtps: '846.44'
        },
        { id: 23054, selected: false },
        { id: 23014, selected: false },
        {
          id: 19351,
          selected: false,
          dps: '490.05',
          tps: '602.70',
          dtps: '850.27'
        },
        {
          id: 15806,
          selected: false,
          dps: '468.56',
          tps: '580.29',
          dtps: '869.64'
        },
        {
          id: 20577,
          selected: false,
          dps: '476.11',
          tps: '586.90',
          dtps: '852.06'
        },
        {
          id: 12584,
          selected: false,
          dps: '482.78',
          tps: '593.18',
          dtps: '860.81'
        },
        {
          id: 23456,
          selected: false,
          dps: '490.17',
          tps: '602.54',
          dtps: '874.90'
        },
        { id: 21520, selected: false },
        { id: 22378, selected: false },
        {
          id: 19901,
          selected: false,
          dps: '465.82',
          tps: '576.62',
          dtps: '863.39'
        },
        { id: 23577, selected: false },
        {
          id: 17705,
          selected: false,
          dps: '454.39',
          tps: '564.29',
          dtps: '863.31'
        },
        {
          id: 19019,
          selected: false,
          dps: '496.52',
          tps: '606.66',
          dtps: '868.82'
        },
        {
          id: 19866,
          selected: false,
          dps: '478.85',
          tps: '591.70',
          dtps: '872.41'
        },
        { id: 22806, selected: false },
        {
          id: 17075,
          selected: false,
          dps: '472.17',
          tps: '583.56',
          dtps: '859.61'
        },
        {
          id: 19554,
          selected: false,
          dps: '468.00',
          tps: '578.64',
          dtps: '858.14'
        },
        {
          id: 14487,
          selected: false,
          dps: '459.52',
          tps: '570.12',
          dtps: '863.31'
        },
        {
          id: 18683,
          selected: false,
          dps: '459.43',
          tps: '570.13',
          dtps: '861.62'
        }
      ],
      shield: [{ id: 19349 }],
      twohand: [
        { id: 12784, selected: false, dps: '660.25' },
        { id: 1263, selected: false, dps: '669.75' },
        { id: 21134, selected: false },
        { id: 19354, selected: false, dps: '692.90' },
        { id: 19353, selected: false, dps: '716.40' },
        { id: 11931, selected: false, dps: '651.77' },
        { id: 13983, selected: false, dps: '641.58' },
        { id: 19962, selected: false },
        { id: 18831, selected: false, dps: '725.12' },
        { id: 18759, selected: false, dps: '650.19' },
        { id: 21856, selected: false },
        { id: 19169, selected: false, dps: '676.14' },
        { id: 22815, selected: false },
        { id: 17104, selected: false, dps: '704.41' },
        { id: 13285, selected: false, dps: '635.86' },
        { id: 18538, selected: false, dps: '689.18' },
        { id: 19900, selected: false },
        { id: 18420, selected: false, dps: '696.89' },
        { id: 20696, selected: false },
        { id: 22348, selected: false },
        { id: 19358, selected: false, dps: '734.34' },
        { id: 17073, selected: false, dps: '696.18' },
        { id: 13167, selected: false, dps: '679.54' },
        { id: 12796, selected: false, dps: '676.55' },
        { id: 18868, selected: false, dps: '751.77' },
        { id: 19918, selected: false },
        { id: 22798, selected: false },
        { id: 12969, selected: false, dps: '666.24' },
        { id: 17182, selected: false, dps: '751.18' },
        { id: 17193, selected: false, dps: '696.77' },
        { id: 19323, selected: false, dps: '713.99' },
        { id: 9449, selected: false, dps: '750.02' },
        { id: 21635, selected: false },
        { id: 19167, selected: false, dps: '703.48' },
        { id: 12583, selected: false, dps: '664.80' },
        { id: 19874, selected: false },
        { id: 22314, selected: false, dps: '651.03' },
        { id: 18871, selected: false, dps: '725.45' },
        { id: 19106, selected: false, dps: '657.96' },
        { id: 18502, selected: false, dps: '643.09' },
        { id: 17223, selected: false, dps: '665.13' },
        { id: 18725, selected: false, dps: '657.86' },
        { id: 19963, selected: false },
        { id: 20660, selected: false },
        { id: 23039, selected: false },
        { id: 19946, selected: false },
        { id: 19364, selected: false, dps: '764.81' },
        { id: 18520, selected: false, dps: '694.07' },
        { id: 12592, selected: false, dps: '681.79' },
        { id: 2801, selected: false, dps: '708.54' },
        { id: 17076, selected: false, dps: '763.22' },
        { id: 22813, selected: false },
        { id: 22691, selected: false },
        { id: 20669, selected: false },
        { id: 647, selected: false, dps: '698.51' },
        { id: 18877, selected: false, dps: '751.46' },
        { id: 21679, selected: false },
        { id: 21492, selected: false },
        { id: 18822, selected: false, dps: '737.44' },
        { id: 13163, selected: false, dps: '681.76' },
        { id: 13505, selected: false, dps: '680.64' },
        { id: 19334, selected: false, dps: '757.47' },
        { id: 18542, selected: false, dps: '715.34' },
        { id: 13982, selected: false, dps: '676.71' },
        { id: 19854, selected: false },
        { id: 19357, selected: false }
      ],
      custom: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
        { id: 12 },
        { id: 13 },
        { id: 14 },
        { id: 15 },
        { id: 16 },
        { id: 17 },
        { id: 18 },
        { id: 19 }
      ]
    },
    enchant: {
      head: [
        { id: 18329, dps: '936.65' },
        { id: 11647, dps: '935.61' },
        { id: 11645, selected: false, dps: '937.23' }
      ],
      shoulder: [{ id: 29483 }, { id: 24422, selected: true }],
      back: [{ id: 25084 }, { id: 13882, selected: true, dps: '937.30' }],
      chest: [
        { id: 20025, dps: '938.86' },
        { id: 13941, selected: false, dps: '936.98' }
      ],
      wrist: [
        { id: 13939, selected: false, dps: '935.57' },
        { id: 20010, selected: true, dps: '937.10' }
      ],
      hands: [
        { id: 25080 },
        { id: 20012, selected: true, dps: '936.77' },
        { id: 20013, selected: false, dps: '937.30' },
        { id: 13948, selected: false, dps: '938.51' }
      ],
      legs: [
        { id: 18329, selected: false, dps: '936.70' },
        { id: 11647, dps: '935.51' },
        { id: 11645, selected: false, dps: '937.28' }
      ],
      feet: [
        { id: 20023, dps: '941.47' },
        { id: 13890, selected: true, dps: '936.97' }
      ],
      mainhand: [
        { id: 23800, selected: false, dps: '919.78' },
        { id: 23799, selected: false, dps: '923.30' },
        { id: 20034, selected: true, dps: '937.24' },
        { id: 13898, selected: false, dps: '917.82' },
        { id: 20032, selected: false, dps: '915.65' },
        { id: 20031, selected: false, dps: '914.76' },
        { id: 18262, selected: false, dps: '937.44' },
        { id: 12404, selected: false, dps: '922.01' },
        { id: 23122, selected: false }
      ],
      offhand: [
        { id: 23800, selected: false, dps: '929.21' },
        { id: 23799, selected: false, dps: '932.84' },
        { id: 20034, selected: true, dps: '936.89' },
        { id: 13898, selected: false, dps: '924.44' },
        { id: 20032, selected: false, dps: '924.29' },
        { id: 20031, selected: false, dps: '923.00' },
        { id: 18262, selected: false, dps: '937.06' },
        { id: 12404, selected: false, dps: '919.30' },
        { id: 23122, selected: false }
      ],
      twohand: [
        { id: 27837, selected: false, dps: '702.34' },
        { id: 23799, selected: false, dps: '700.92' },
        { id: 20034, selected: false, dps: '714.20' },
        { id: 13898, selected: false, dps: '700.16' },
        { id: 20032, selected: false, dps: '698.81' },
        { id: 18262, selected: false, dps: '714.18' },
        { id: 12404, selected: false, dps: '704.61' },
        { id: 23122, selected: false },
        { id: 20030, selected: false, dps: '698.50' }
      ]
    }
  },
  prot: {
    buffs: [
      71,
      27578,
      22888,
      24425,
      22817,
      22818,
      15366,
      9885,
      10938,
      20217,
      19838,
      13452
    ],
    rotation: [
      {
        id: '23894',
        name: 'Bloodthirst',
        classname: 'Bloodthirst',
        iconname: 'spell_nature_bloodlust',
        minrage: '30',
        hidden: true,
        active: false
      },
      {
        id: '27580',
        name: 'Mortal Strike',
        classname: 'MortalStrike',
        iconname: 'ability_warrior_savageblow',
        minrage: '30',
        hidden: true,
        active: false
      },
      {
        id: '11567',
        name: 'Heroic Strike',
        classname: 'HeroicStrike',
        iconname: 'ability_rogue_ambush',
        minrage: '30',
        maincd: '4',
        unqueue: '0',
        active: true
      },
      {
        id: '11609',
        name: 'Cleave',
        classname: 'Cleave',
        iconname: 'ability_warrior_cleave',
        minrage: '40',
        hidden: true,
        active: false
      },
      {
        id: '20662',
        name: 'Execute',
        classname: 'Execute',
        iconname: 'inv_sword_48',
        lasttime: '8',
        priorityap: '2000',
        active: false
      },
      {
        id: '1680',
        name: 'Whirlwind',
        classname: 'Whirlwind',
        iconname: 'ability_whirlwind',
        minrage: '50',
        maincd: '2',
        active: false
      },
      {
        id: '12328',
        name: 'Death Wish',
        classname: 'DeathWish',
        iconname: 'spell_shadow_deathpact',
        time: '0',
        crusaders: '0',
        hidden: true,
        aura: true,
        active: false
      },
      {
        id: '1719',
        name: 'Recklessness',
        classname: 'Recklessness',
        iconname: 'ability_criticalstrike',
        time: '44',
        aura: true,
        active: false
      },
      {
        id: '11551',
        name: 'Battle Shout',
        classname: 'BattleShout',
        iconname: 'ability_warrior_battleshout',
        time: -1,
        hidden: true,
        active: false
      },
      {
        id: '11585',
        name: 'Overpower',
        classname: 'Overpower',
        iconname: 'ability_meleedamage',
        maxrage: '25',
        maincd: '2',
        active: false
      },
      {
        id: '26296',
        name: 'Berserking',
        classname: 'Berserking',
        iconname: 'racial_troll_berserk',
        time: '50',
        haste: '30',
        hidden: true,
        aura: true,
        active: false
      },
      {
        id: '20572',
        name: 'Blood Fury',
        classname: 'BloodFury',
        iconname: 'racial_orc_berserkerstrength',
        time: '35',
        hidden: true,
        aura: true,
        active: false
      },
      {
        id: '2687',
        name: 'Bloodrage',
        classname: 'Bloodrage',
        iconname: 'ability_racial_bloodrage',
        active: false
      },
      {
        id: '17528',
        name: 'Mighty Rage Potion',
        classname: 'MightyRagePotion',
        iconname: 'inv_potion_41',
        time: '39',
        crusaders: '0',
        aura: true,
        active: false
      },
      {
        id: '16322',
        name: 'Juju Flurry',
        classname: 'JujuFlurry',
        iconname: 'inv_misc_monsterscales_17',
        time: '39',
        aura: true,
        hidden: true,
        active: false
      },
      {
        id: '23255',
        name: 'Deep Wounds',
        classname: 'DeepWounds',
        iconname: 'ability_backstab',
        hidden: true,
        aura: true,
        active: false
      },
      {
        id: '11597',
        name: 'Sunder Armor',
        classname: 'SunderArmor',
        iconname: 'ability_warrior_sunder',
        globals: '1',
        active: true
      },
      {
        id: '11605',
        name: 'Slam',
        classname: 'Slam',
        iconname: 'ability_warrior_decisivestrike',
        hidden: true,
        active: false
      },
      {
        id: '7373',
        name: 'Hamstring',
        classname: 'Hamstring',
        iconname: 'ability_shockwave',
        minrage: '50',
        active: false
      },
      {
        id: '11601',
        name: 'Revenge',
        classname: 'Revenge',
        iconname: 'ability_warrior_revenge',
        minrage: '5',
        active: true
      },
      {
        id: '23925',
        name: 'Shield Slam',
        classname: 'ShieldSlam',
        iconname: 'inv_shield_05',
        minrage: '20',
        hidden: true,
        active: true
      }
    ],
    sources: [
      'quest',
      'crafting',
      'dungeon',
      'onyxia',
      'mc',
      'bwl',
      'zg',
      'worldboss',
      'pvp',
      'other'
    ],
    phases: ['1', '2', '3', '4'],
    talents: [
      { n: 'Arms', t: [3, 2, 0, 0, 5, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
      { n: 'Fury', t: [0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
      {
        n: 'Protection',
        t: [5, 0, 2, 5, 0, 1, 1, 0, 5, 3, 0, 2, 1, 1, 0, 5, 1]
      }
    ],
    gear: {
      head: [
        { id: 12587, selected: false, dps: '524.86' },
        { id: 20623, selected: false, dps: '518.75' },
        { id: 21329, selected: false },
        { id: 18817, selected: false, dps: '527.64' },
        { id: 22418, selected: false },
        { id: 9375, selected: false, dps: '511.32' },
        { id: 20521, selected: false, dps: '533.58' },
        { id: 21460, selected: false },
        { id: 19372, selected: true, dps: '531.54' },
        { id: 21999, selected: false },
        { id: 16866, selected: false, dps: '519.03' },
        { id: 22411, selected: false, dps: '536.66' },
        { id: 16731, selected: false, dps: '520.95' },
        { id: 16963, selected: false, dps: '520.43' },
        { id: 12640, selected: false, dps: '546.51' },
        { id: 13404, selected: false, dps: '531.90' },
        { id: 23314, selected: false, dps: '535.84' },
        { id: 16478, selected: false, dps: '530.92' }
      ],
      neck: [
        { id: 19491, selected: false, dps: '508.01' },
        { id: 21664, selected: false },
        { id: 22150, selected: false },
        { id: 17111, selected: false, dps: '503.47' },
        { id: 21505, selected: false },
        { id: 18205, selected: false, dps: '501.14' },
        { id: 21809, selected: false },
        { id: 11933, selected: false, dps: '503.10' },
        { id: 15411, selected: false, dps: '504.88' },
        { id: 18404, selected: true, dps: '517.08' },
        { id: 22340, selected: false },
        { id: 19377, selected: false, dps: '514.19' },
        { id: 23023, selected: false },
        { id: 23053, selected: false },
        { id: 19856, selected: false, dps: '509.62' },
        { id: 17044, selected: false, dps: '498.56' }
      ],
      shoulder: [
        { id: 20683, selected: false, dps: '526.03' },
        { id: 20212, selected: false, dps: '520.94' },
        { id: 15051, selected: false, dps: '517.54' },
        { id: 19878, selected: false, dps: '517.74' },
        { id: 21330, selected: false },
        { id: 19394, selected: false, dps: '523.86' },
        { id: 22419, selected: false },
        { id: 16868, selected: false, dps: '517.92' },
        { id: 21639, selected: false },
        { id: 16961, selected: true, dps: '518.48' },
        { id: 21805, selected: false },
        { id: 23315, selected: false, dps: '517.16' },
        { id: 16480, selected: false, dps: '527.37' },
        { id: 20517, selected: false, dps: '521.72' },
        { id: 22001, selected: false },
        { id: 16733, selected: false, dps: '512.56' },
        { id: 12927, selected: false, dps: '530.38' },
        { id: 12082, selected: false, dps: '526.86' }
      ],
      back: [
        { id: 19398, selected: false, dps: '504.07' },
        { id: 13340, selected: false, dps: '498.08' },
        { id: 21701, selected: false },
        { id: 19436, selected: false, dps: '507.49' },
        { id: 21710, selected: false },
        { id: 21621, selected: false },
        { id: 20073, selected: false, dps: '502.23' },
        { id: 23030, selected: false },
        { id: 17102, selected: false, dps: '492.63' },
        { id: 17107, selected: false, dps: '501.40' },
        { id: 21394, selected: false },
        { id: 21187, selected: false },
        { id: 18204, selected: false, dps: '495.90' },
        { id: 18689, selected: false, dps: '499.19' },
        { id: 18541, selected: false, dps: '517.64' },
        { id: 21456, selected: false },
        { id: 23045, selected: false },
        { id: 13397, selected: false, dps: '496.85' },
        { id: 19084, selected: false, dps: '499.21' },
        { id: 19907, selected: true, dps: '507.64' },
        { id: 20691, selected: false, dps: '499.15' }
      ],
      chest: [
        { id: 15050, selected: false, dps: '503.29' },
        { id: 19690, selected: false },
        { id: 21814, selected: false },
        { id: 12757, selected: false, dps: '502.67' },
        { id: 21997, selected: false },
        { id: 16865, selected: false, dps: '498.39' },
        { id: 12895, selected: false, dps: '504.58' },
        { id: 16730, selected: false, dps: '499.13' },
        { id: 16966, selected: true, dps: '497.40' },
        { id: 14637, selected: false, dps: '507.23' },
        { id: 21331, selected: false },
        { id: 11926, selected: false, dps: '498.45' },
        { id: 23226, selected: false },
        { id: 19405, selected: false, dps: '514.24' },
        { id: 22191, selected: false },
        { id: 18530, selected: false, dps: '502.39' },
        { id: 23000, selected: false },
        { id: 16477, selected: false, dps: '503.65' },
        { id: 23300, selected: false, dps: '503.39' },
        { id: 19904, selected: false },
        { id: 11726, selected: false, dps: '504.66' },
        { id: 19822, selected: false },
        { id: 13944, selected: false, dps: '502.01' },
        { id: 21680, selected: false }
      ],
      wrist: [
        { id: 20687, selected: false, dps: '531.66' },
        { id: 12936, selected: false, dps: '535.05' },
        { id: 19578, selected: false, dps: '536.48' },
        { id: 16959, selected: true, dps: '549.35' },
        { id: 21457, selected: false },
        { id: 21996, selected: false },
        { id: 16861, selected: false, dps: '529.49' },
        { id: 16735, selected: false, dps: '528.09' },
        { id: 21184, selected: false },
        { id: 18533, selected: false, dps: '532.74' },
        { id: 21618, selected: false },
        { id: 21602, selected: false },
        { id: 21491, selected: false },
        { id: 19824, selected: false, dps: '533.42' },
        { id: 13400, selected: false, dps: '529.70' },
        { id: 19146, selected: false, dps: '537.18' },
        { id: 18812, selected: false, dps: '536.08' },
        { id: 22936, selected: false }
      ],
      hands: [
        { id: 18823, selected: true, dps: '501.31' },
        { id: 15063, selected: false, dps: '472.67' },
        { id: 14551, selected: false, dps: '487.42' },
        { id: 19143, selected: false, dps: '475.42' },
        { id: 21581, selected: false },
        { id: 21998, selected: false },
        { id: 16863, selected: false, dps: '486.94' },
        { id: 21674, selected: false },
        { id: 21479, selected: false },
        { id: 16737, selected: false, dps: '474.09' },
        { id: 16964, selected: false, dps: '472.17' },
        { id: 21672, selected: false },
        { id: 16484, selected: false, dps: '474.57' },
        { id: 23286, selected: false, dps: '471.85' },
        { id: 13162, selected: false, dps: '473.30' },
        { id: 22714, selected: false },
        { id: 12639, selected: false, dps: '466.48' },
        { id: 13963, selected: false, dps: '488.16' },
        { id: 19157, selected: false, dps: '474.58' }
      ],
      waist: [
        { id: 20204, selected: false, dps: '486.33' },
        { id: 21994, selected: false },
        { id: 16864, selected: false, dps: '481.03' },
        { id: 21586, selected: false },
        { id: 20216, selected: false },
        { id: 20213, selected: false },
        { id: 21503, selected: false },
        { id: 16736, selected: false, dps: '479.15' },
        { id: 13142, selected: false, dps: '491.14' },
        { id: 23219, selected: false },
        { id: 18505, selected: true, dps: '497.77' },
        { id: 13959, selected: false, dps: '481.94' },
        { id: 19087, selected: false, dps: '478.06' },
        { id: 19137, selected: false, dps: '507.60' },
        { id: 21463, selected: false },
        { id: 21598, selected: false },
        { id: 19823, selected: false },
        { id: 19380, selected: false, dps: '483.25' },
        { id: 21692, selected: false },
        { id: 16960, selected: false, dps: '478.82' }
      ],
      legs: [
        { id: 20671, selected: false },
        { id: 15052, selected: false, dps: '500.94' },
        { id: 12963, selected: false, dps: '503.65' },
        { id: 19855, selected: false },
        { id: 14638, selected: false, dps: '500.26' },
        { id: 14554, selected: false, dps: '515.10' },
        { id: 145541, selected: false, dps: '503.28' },
        { id: 21332, selected: false },
        { id: 20627, selected: false },
        { id: 15062, selected: false, dps: '501.89' },
        { id: 18380, selected: false, dps: '500.78' },
        { id: 13498, selected: false, dps: '504.21' },
        { id: 23071, selected: false },
        { id: 19402, selected: false, dps: '507.78' },
        { id: 23068, selected: false },
        { id: 22000, selected: false },
        { id: 16867, selected: false, dps: '501.02' },
        { id: 21495, selected: false },
        { id: 16732, selected: false, dps: '503.49' },
        { id: 16962, selected: true, dps: '499.87' },
        { id: 16479, selected: false, dps: '512.58' },
        { id: 23301, selected: false, dps: '500.18' },
        { id: 21651, selected: false },
        { id: 22672, selected: false },
        { id: 22385, selected: false }
      ],
      feet: [
        { id: 20208, selected: false },
        { id: 12555, selected: false, dps: '502.77' },
        { id: 16984, selected: false, dps: '498.47' },
        { id: 19906, selected: false },
        { id: 14616, selected: false, dps: '508.25' },
        { id: 21995, selected: false },
        { id: 21688, selected: false },
        { id: 19381, selected: false, dps: '520.19' },
        { id: 21493, selected: false },
        { id: 21706, selected: false },
        { id: 16734, selected: false, dps: '497.49' },
        { id: 19387, selected: false, dps: '517.30' },
        { id: 21333, selected: false },
        { id: 13210, selected: false, dps: '499.91' },
        { id: 16483, selected: false, dps: '513.58' },
        { id: 23287, selected: false, dps: '501.96' },
        { id: 16862, selected: false, dps: '497.79' },
        { id: 16965, selected: true, dps: '496.76' },
        { id: 13070, selected: false, dps: '497.40' },
        { id: 21490, selected: false },
        { id: 12553, selected: false, dps: '495.53' },
        { id: 13967, selected: false, dps: '505.04' },
        { id: 11731, selected: false, dps: '499.96' }
      ],
      finger: [
        { id: 19376, dps: '447.86' },
        { id: 17063, selected: true, dps: '472.36' },
        { id: 21182, selected: false },
        { id: 19925, selected: false },
        { id: 22961, selected: false },
        { id: 18522, dps: '456.00' },
        { id: 23038, selected: false },
        { id: 17713, dps: '465.39' },
        { id: 19432, dps: '456.41' },
        { id: 19325, selected: false, dps: '466.04' },
        { id: 12548, selected: false, dps: '451.22' },
        { id: 19384, selected: true, dps: '471.19' },
        { id: 21189, selected: false },
        { id: 13098, dps: '452.00' },
        { id: 19514, dps: '454.65' },
        { id: 18821, dps: '457.51' },
        { id: 21601, selected: false },
        { id: 21477, selected: false },
        { id: 21596, selected: false },
        { id: 21677, selected: false },
        { id: 19898, selected: false },
        { id: 198981, selected: false },
        { id: 22722, selected: false },
        { id: 23018, selected: false },
        { id: 21393, selected: false },
        { id: 21205, selected: false },
        { id: 18500, dps: '465.57' }
      ],
      trinket: [
        { id: 21670, selected: false },
        { id: 13965, selected: false, dps: '450.42' },
        { id: 18537, dps: '450.48' },
        { id: 19289, dps: '448.73' },
        { id: 20130, selected: true, dps: '487.63' },
        { id: 19406, dps: '477.66' },
        { id: 21180, selected: false },
        { id: 11815, selected: true, dps: '456.74' },
        { id: 22321, dps: '446.23' },
        { id: 23570, selected: false },
        { id: 22954, selected: false },
        { id: 19120, dps: '458.40' },
        { id: 13209, dps: '468.65' },
        { id: 23041, selected: false }
      ],
      ranged: [
        { id: 18680, selected: false, dps: '487.88' },
        { id: 21478, selected: false },
        { id: 16996, selected: false, dps: '487.59' },
        { id: 19350, selected: false, dps: '490.87' },
        { id: 19993, selected: false },
        { id: 21616, selected: false },
        { id: 22318, selected: false, dps: '489.18' },
        { id: 20038, selected: false },
        { id: 22811, selected: false },
        { id: 19562, selected: false, dps: '487.68' },
        { id: 12653, selected: false, dps: '495.31' },
        { id: 18323, selected: false, dps: '499.60' },
        { id: 17069, selected: false, dps: '506.67' },
        { id: 12651, selected: true, dps: '496.80' },
        { id: 19107, selected: false, dps: '494.07' },
        { id: 18738, selected: false, dps: '487.37' },
        { id: 21459, selected: false },
        { id: 22347, selected: false },
        { id: 13040, selected: false, dps: '487.52' },
        { id: 22812, selected: false },
        { id: 20599, selected: false },
        { id: 13039, selected: false, dps: '488.01' },
        { id: 17072, selected: false, dps: '487.73' },
        { id: 13248, selected: false, dps: '486.88' },
        { id: 20722, selected: false },
        { id: 19368, selected: false, dps: '485.05' },
        { id: 19853, selected: false },
        { id: 13139, selected: false, dps: '485.27' },
        { id: 23557, selected: false },
        { id: 21800, selected: false },
        { id: 22810, selected: false },
        { id: 13380, selected: false, dps: '486.61' }
      ],
      mainhand: [
        { id: 19852, selected: false, dps: '467.24' },
        { id: 12798, selected: false, dps: '481.07' },
        { id: 811, selected: false, dps: '459.33' },
        { id: 21242, selected: false },
        { id: 18737, selected: false, dps: '451.99' },
        { id: 19363, selected: false, dps: '491.58' },
        { id: 17016, selected: false, dps: '463.66' },
        { id: 17068, selected: false, dps: '488.23' },
        { id: 19362, selected: false, dps: '478.72' },
        { id: 871, selected: false, dps: '445.53' },
        { id: 19103, selected: false, dps: '469.10' },
        { id: 22816, selected: false },
        { id: 13952, selected: false, dps: '452.69' },
        { id: 18827, selected: false, dps: '499.55' },
        { id: 13015, selected: false, dps: '452.23' },
        { id: 21392, selected: false },
        { id: 20675, selected: false, dps: '463.59' },
        { id: 19921, selected: false, dps: '476.78' },
        { id: 199211, selected: false, dps: '475.64' },
        { id: 14555, selected: false, dps: '498.57' },
        { id: 19166, selected: false, dps: '504.72' },
        { id: 21244, selected: false },
        { id: 13368, selected: false, dps: '497.67' },
        { id: 18805, selected: false, dps: '515.27' },
        { id: 13984, selected: false, dps: '495.58' },
        { id: 21126, selected: false },
        { id: 19346, selected: true, dps: '525.48' },
        { id: 20578, selected: false, dps: '524.36' },
        { id: 19859, selected: false, dps: '523.82' },
        { id: 12590, selected: false, dps: '530.48' },
        { id: 12709, selected: false, dps: '490.52' },
        { id: 19099, selected: false, dps: '503.15' },
        { id: 17071, selected: false, dps: '520.00' },
        { id: 23044, selected: false },
        { id: 12783, selected: false, dps: '503.98' },
        { id: 18838, selected: false, dps: '539.83' },
        { id: 22802, selected: false },
        { id: 22804, selected: false },
        { id: 18816, selected: false, dps: '529.54' },
        { id: 21498, selected: false },
        { id: 5267, selected: false, dps: '496.35' },
        { id: 19542, selected: false, dps: '502.38' },
        { id: 21522, selected: false },
        { id: 19324, selected: false, dps: '521.65' },
        { id: 22377, selected: false },
        { id: 19365, selected: false, dps: '485.31' },
        { id: 18203, selected: false, dps: '472.49' },
        { id: 18844, selected: false, dps: '500.13' },
        { id: 22317, selected: false },
        { id: 21673, selected: false },
        { id: 19896, selected: false, dps: '463.69' },
        { id: 22404, selected: false, dps: '454.97' },
        { id: 21837, selected: false },
        { id: 21268, selected: false },
        { id: 19170, selected: false, dps: '473.94' },
        { id: 17112, selected: false, dps: '504.53' },
        { id: 11684, selected: false, dps: '480.45' },
        { id: 20580, selected: false },
        { id: 18865, selected: false, dps: '499.40' },
        { id: 13006, selected: false, dps: '465.59' },
        { id: 23221, selected: false },
        { id: 22384, selected: false, dps: '480.81' },
        { id: 21715, selected: false },
        { id: 19908, selected: false, dps: '469.09' },
        { id: 19335, selected: false, dps: '482.99' },
        { id: 19104, selected: false, dps: '465.76' },
        { id: 22808, selected: false },
        { id: 18376, selected: false, dps: '453.51' },
        { id: 21650, selected: false },
        { id: 19168, selected: false, dps: '468.52' },
        { id: 19867, selected: false, dps: '462.60' },
        { id: 18832, selected: false, dps: '484.10' },
        { id: 18484, selected: false, dps: '461.04' },
        { id: 19352, selected: false, dps: '488.37' },
        { id: 19110, selected: false, dps: '459.54' },
        { id: 12940, selected: false, dps: '464.75' },
        { id: 17015, selected: false, dps: '456.61' },
        { id: 19968, selected: false, dps: '462.28' },
        { id: 23054, selected: false },
        { id: 23014, selected: false },
        { id: 2244, selected: false, dps: '466.87' },
        { id: 19351, selected: false, dps: '498.24' },
        { id: 15806, selected: false, dps: '458.94' },
        { id: 20577, selected: false, dps: '484.01' },
        { id: 18348, selected: false, dps: '466.26' },
        { id: 12584, selected: false, dps: '501.50' },
        { id: 23456, selected: false, dps: '483.98' },
        { id: 21520, selected: false },
        { id: 22378, selected: false },
        { id: 6622, selected: false, dps: '466.15' },
        { id: 19901, selected: false, dps: '468.52' },
        { id: 1728, selected: false, dps: '476.90' },
        { id: 23577, selected: false },
        { id: 17705, selected: false, dps: '459.97' },
        { id: 19019, selected: false, dps: '514.00' },
        { id: 19865, selected: false, dps: '473.20' },
        { id: 22806, selected: false },
        { id: 17075, selected: false, dps: '483.79' },
        { id: 19554, selected: false, dps: '466.31' },
        { id: 14487, selected: false, dps: '454.03' },
        { id: 18683, selected: false, dps: '459.92' }
      ],
      offhand: [
        { id: 19852, selected: false, dps: '469.25' },
        { id: 21242, selected: false },
        { id: 18737, selected: false, dps: '468.63' },
        { id: 19363, selected: false, dps: '483.44' },
        { id: 17068, selected: false, dps: '471.14' },
        { id: 19362, selected: false, dps: '474.52' },
        { id: 871, selected: false, dps: '464.56' },
        { id: 19103, selected: false, dps: '471.36' },
        { id: 22816, selected: false },
        { id: 18827, selected: false, dps: '476.36' },
        { id: 13015, selected: false, dps: '464.09' },
        { id: 21392, selected: false },
        { id: 20675, selected: false },
        { id: 19921, selected: false, dps: '474.60' },
        { id: 199211, selected: false, dps: '476.82' },
        { id: 14555, selected: false, dps: '509.65' },
        { id: 19166, selected: false, dps: '507.78' },
        { id: 21244, selected: false },
        { id: 13368, selected: false, dps: '510.57' },
        { id: 18805, selected: false, dps: '521.70' },
        { id: 13984, selected: false, dps: '505.85' },
        { id: 21126, selected: false },
        { id: 18392, selected: false, dps: '509.48' },
        { id: 19346, selected: false, dps: '518.25' },
        { id: 20578, selected: false, dps: '513.09' },
        { id: 19859, selected: false, dps: '515.36' },
        { id: 12590, selected: false, dps: '512.32' },
        { id: 19099, selected: false, dps: '503.13' },
        { id: 17071, selected: false, dps: '509.46' },
        { id: 23044, selected: false },
        { id: 12783, selected: false, dps: '502.54' },
        { id: 18838, selected: false, dps: '521.63' },
        { id: 22802, selected: false },
        { id: 22804, selected: false },
        { id: 18816, selected: false, dps: '514.79' },
        { id: 21498, selected: false },
        { id: 5267, selected: false, dps: '504.41' },
        { id: 19542, selected: false, dps: '502.80' },
        { id: 21522, selected: false },
        { id: 19324, selected: false, dps: '506.84' },
        { id: 22377, selected: false },
        { id: 19910, selected: false, dps: '466.31' },
        { id: 23242, selected: false },
        { id: 18202, selected: false, dps: '477.39' },
        { id: 18848, selected: false, dps: '479.00' },
        { id: 22317, selected: false },
        { id: 21837, selected: false },
        { id: 21268, selected: false },
        { id: 19170, selected: false, dps: '466.75' },
        { id: 18865, selected: false, dps: '484.49' },
        { id: 23221, selected: false },
        { id: 21715, selected: false },
        { id: 19908, selected: false, dps: '469.25' },
        { id: 19104, selected: false, dps: '470.16' },
        { id: 22808, selected: false },
        { id: 18376, selected: false, dps: '465.66' },
        { id: 21650, selected: false },
        { id: 19168, selected: false, dps: '471.12' },
        { id: 18832, selected: false, dps: '472.70' },
        { id: 18484, selected: false, dps: '466.49' },
        { id: 19352, selected: false, dps: '486.66' },
        { id: 19110, selected: false, dps: '460.97' },
        { id: 12939, selected: false, dps: '463.22' },
        { id: 23054, selected: false },
        { id: 23014, selected: false },
        { id: 19351, selected: false, dps: '490.05' },
        { id: 15806, selected: false, dps: '468.56' },
        { id: 20577, selected: false, dps: '476.11' },
        { id: 12584, selected: false, dps: '482.78' },
        { id: 23456, selected: false, dps: '490.17' },
        { id: 21520, selected: false },
        { id: 22378, selected: false },
        { id: 19901, selected: false, dps: '465.82' },
        { id: 23577, selected: false },
        { id: 17705, selected: false, dps: '454.39' },
        { id: 19019, selected: false, dps: '496.52' },
        { id: 19866, selected: false, dps: '478.85' },
        { id: 22806, selected: false },
        { id: 17075, selected: false, dps: '472.17' },
        { id: 19554, selected: false, dps: '468.00' },
        { id: 14487, selected: false, dps: '459.52' },
        { id: 18683, selected: false, dps: '459.43' }
      ],
      shield: [{ id: 19349, selected: true }],
      twohand: [
        { id: 12784, selected: false, dps: '660.25' },
        { id: 1263, selected: false, dps: '669.75' },
        { id: 21134, selected: false },
        { id: 19354, selected: false, dps: '692.90' },
        { id: 19353, selected: false, dps: '716.40' },
        { id: 11931, selected: false, dps: '651.77' },
        { id: 13983, selected: false, dps: '641.58' },
        { id: 19962, selected: false },
        { id: 18831, selected: false, dps: '725.12' },
        { id: 18759, selected: false, dps: '650.19' },
        { id: 21856, selected: false },
        { id: 19169, selected: false, dps: '676.14' },
        { id: 22815, selected: false },
        { id: 17104, selected: false, dps: '704.41' },
        { id: 13285, selected: false, dps: '635.86' },
        { id: 18538, selected: false, dps: '689.18' },
        { id: 19900, selected: false },
        { id: 18420, selected: false, dps: '696.89' },
        { id: 20696, selected: false },
        { id: 22348, selected: false },
        { id: 19358, selected: false, dps: '734.34' },
        { id: 17073, selected: false, dps: '696.18' },
        { id: 13167, selected: false, dps: '679.54' },
        { id: 12796, selected: false, dps: '676.55' },
        { id: 18868, selected: false, dps: '751.77' },
        { id: 19918, selected: false },
        { id: 22798, selected: false },
        { id: 12969, selected: false, dps: '666.24' },
        { id: 17182, selected: false, dps: '751.18' },
        { id: 17193, selected: false, dps: '696.77' },
        { id: 19323, selected: false, dps: '713.99' },
        { id: 9449, selected: false, dps: '750.02' },
        { id: 21635, selected: false },
        { id: 19167, selected: false, dps: '703.48' },
        { id: 12583, selected: false, dps: '664.80' },
        { id: 19874, selected: false },
        { id: 22314, selected: false, dps: '651.03' },
        { id: 18871, selected: false, dps: '725.45' },
        { id: 19106, selected: false, dps: '657.96' },
        { id: 18502, selected: false, dps: '643.09' },
        { id: 17223, selected: false, dps: '665.13' },
        { id: 18725, selected: false, dps: '657.86' },
        { id: 19963, selected: false },
        { id: 20660, selected: false },
        { id: 23039, selected: false },
        { id: 19946, selected: false },
        { id: 19364, selected: false, dps: '764.81' },
        { id: 18520, selected: false, dps: '694.07' },
        { id: 12592, selected: false, dps: '681.79' },
        { id: 2801, selected: false, dps: '708.54' },
        { id: 17076, selected: false, dps: '763.22' },
        { id: 22813, selected: false },
        { id: 22691, selected: false },
        { id: 20669, selected: false },
        { id: 647, selected: false, dps: '698.51' },
        { id: 18877, selected: false, dps: '751.46' },
        { id: 21679, selected: false },
        { id: 21492, selected: false },
        { id: 18822, selected: false, dps: '737.44' },
        { id: 13163, selected: false, dps: '681.76' },
        { id: 13505, selected: false, dps: '680.64' },
        { id: 19334, selected: false, dps: '757.47' },
        { id: 18542, selected: false, dps: '715.34' },
        { id: 13982, selected: false, dps: '676.71' },
        { id: 19854, selected: false },
        { id: 19357, selected: false }
      ],
      custom: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
        { id: 12 },
        { id: 13 },
        { id: 14 },
        { id: 15 },
        { id: 16 },
        { id: 17 },
        { id: 18 },
        { id: 19 }
      ]
    },
    enchant: {
      head: [
        { id: 18329, dps: '936.65' },
        { id: 11647, dps: '935.61' },
        { id: 11645, selected: false, dps: '937.23' }
      ],
      shoulder: [{ id: 29483 }, { id: 24422, selected: true }],
      back: [{ id: 25084 }, { id: 13882, selected: true, dps: '937.30' }],
      chest: [
        { id: 20025, dps: '938.86' },
        { id: 13941, selected: false, dps: '936.98' }
      ],
      wrist: [
        { id: 13939, selected: false, dps: '935.57' },
        { id: 20010, selected: true, dps: '937.10' }
      ],
      hands: [
        { id: 25080 },
        { id: 20012, selected: true, dps: '936.77' },
        { id: 20013, selected: false, dps: '937.30' },
        { id: 13948, selected: false, dps: '938.51' }
      ],
      legs: [
        { id: 18329, selected: false, dps: '936.70' },
        { id: 11647, dps: '935.51' },
        { id: 11645, selected: false, dps: '937.28' }
      ],
      feet: [
        { id: 20023, dps: '941.47' },
        { id: 13890, selected: true, dps: '936.97' }
      ],
      mainhand: [
        { id: 23800, selected: false, dps: '919.78' },
        { id: 23799, selected: false, dps: '923.30' },
        { id: 20034, selected: false, dps: '937.24' },
        { id: 13898, selected: false, dps: '917.82' },
        { id: 20032, selected: false, dps: '915.65' },
        { id: 20031, selected: false, dps: '914.76' },
        { id: 18262, selected: false, dps: '937.44' },
        { id: 12404, selected: false, dps: '922.01' },
        { id: 23122, selected: false }
      ],
      offhand: [
        { id: 23800, selected: false, dps: '929.21' },
        { id: 23799, selected: false, dps: '932.84' },
        { id: 20034, selected: false, dps: '936.89' },
        { id: 13898, selected: false, dps: '924.44' },
        { id: 20032, selected: false, dps: '924.29' },
        { id: 20031, selected: false, dps: '923.00' },
        { id: 18262, selected: false, dps: '937.06' },
        { id: 12404, selected: false, dps: '919.30' },
        { id: 23122, selected: false }
      ],
      twohand: [
        { id: 27837, selected: false, dps: '702.34' },
        { id: 23799, selected: false, dps: '700.92' },
        { id: 20034, selected: false, dps: '714.20' },
        { id: 13898, selected: false, dps: '700.16' },
        { id: 20032, selected: false, dps: '698.81' },
        { id: 18262, selected: false, dps: '714.18' },
        { id: 12404, selected: false, dps: '704.61' },
        { id: 23122, selected: false },
        { id: 20030, selected: false, dps: '698.50' }
      ]
    }
  },
  tf: {
    buffs: [71, 27578, 22888, 24425, 22817, 22818, 15366, 9885, 20217, 19838, 13452, 20452],
    rotation: [
      {
        id: '23894',
        name: 'Bloodthirst',
        classname: 'Bloodthirst',
        iconname: 'spell_nature_bloodlust',
        minrage: '30',
        hidden: true,
        active: true
      },
      {
        id: '27580',
        name: 'Mortal Strike',
        classname: 'MortalStrike',
        iconname: 'ability_warrior_savageblow',
        minrage: '30',
        hidden: true,
        active: false
      },
      {
        id: '11567',
        name: 'Heroic Strike',
        classname: 'HeroicStrike',
        iconname: 'ability_rogue_ambush',
        minrage: '43',
        maincd: '4',
        unqueue: '0',
        active: true
      },
      {
        id: '11609',
        name: 'Cleave',
        classname: 'Cleave',
        iconname: 'ability_warrior_cleave',
        minrage: '40',
        hidden: true,
        active: false
      },
      {
        id: '20662',
        name: 'Execute',
        classname: 'Execute',
        iconname: 'inv_sword_48',
        lasttime: '8',
        priorityap: '2000',
        active: false,
        starttime: '52'
      },
      {
        id: '1680',
        name: 'Whirlwind',
        classname: 'Whirlwind',
        iconname: 'ability_whirlwind',
        minrage: '50',
        maincd: '2',
        active: false
      },
      {
        id: '12328',
        name: 'Death Wish',
        classname: 'DeathWish',
        iconname: 'spell_shadow_deathpact',
        time: '0',
        crusaders: '0',
        hidden: true,
        aura: true,
        active: true
      },
      {
        id: '1719',
        name: 'Recklessness',
        classname: 'Recklessness',
        iconname: 'ability_criticalstrike',
        time: '44',
        aura: true,
        active: false
      },
      {
        id: '11551',
        name: 'Battle Shout',
        classname: 'BattleShout',
        iconname: 'ability_warrior_battleshout',
        time: -1,
        hidden: true,
        active: false
      },
      {
        id: '11585',
        name: 'Overpower',
        classname: 'Overpower',
        iconname: 'ability_meleedamage',
        maxrage: '25',
        maincd: '2',
        active: false
      },
      {
        id: '26296',
        name: 'Berserking',
        classname: 'Berserking',
        iconname: 'racial_troll_berserk',
        time: '50',
        haste: '30',
        hidden: true,
        aura: true,
        active: false
      },
      {
        id: '20572',
        name: 'Blood Fury',
        classname: 'BloodFury',
        iconname: 'racial_orc_berserkerstrength',
        time: '35',
        hidden: true,
        aura: true,
        active: false
      },
      {
        id: '2687',
        name: 'Bloodrage',
        classname: 'Bloodrage',
        iconname: 'ability_racial_bloodrage',
        active: false
      },
      {
        id: '17528',
        name: 'Mighty Rage Potion',
        classname: 'MightyRagePotion',
        iconname: 'inv_potion_41',
        time: '39',
        crusaders: '0',
        aura: true,
        active: false
      },
      {
        id: '16322',
        name: 'Juju Flurry',
        classname: 'JujuFlurry',
        iconname: 'inv_misc_monsterscales_17',
        time: '39',
        aura: true,
        hidden: true,
        active: false
      },
      {
        id: '23255',
        name: 'Deep Wounds',
        classname: 'DeepWounds',
        iconname: 'ability_backstab',
        hidden: true,
        aura: true,
        active: false
      },
      {
        id: '11597',
        name: 'Sunder Armor',
        classname: 'SunderArmor',
        iconname: 'ability_warrior_sunder',
        globals: '1',
        minrage: '45',
        active: true
      },
      {
        id: '11605',
        name: 'Slam',
        classname: 'Slam',
        iconname: 'ability_warrior_decisivestrike',
        hidden: true,
        active: false
      },
      {
        id: '7373',
        name: 'Hamstring',
        classname: 'Hamstring',
        iconname: 'ability_shockwave',
        minrage: '50',
        active: false
      },
      {
        id: '11601',
        name: 'Revenge',
        classname: 'Revenge',
        iconname: 'ability_warrior_revenge',
        minrage: '5',
        active: true
      },
      {
        id: 23925,
        name: 'Shield Slam',
        classname: 'ShieldSlam',
        iconname: 'inv_shield_05',
        minrage: 20,
        hidden: true,
        active: false
      }
    ],
    sources: [
      'quest',
      'crafting',
      'dungeon',
      'onyxia',
      'mc',
      'bwl',
      'zg',
      'worldboss',
      'pvp',
      'other'
    ],
    phases: ['1', '2', '3', '4'],
    talents: [
      { n: 'Arms', t: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
      { n: 'Fury', t: [0, 5, 5, 0, 0, 1, 0, 4, 5, 0, 5, 0, 1, 0, 0, 5, 1] },
      {
        n: 'Protection',
        t: [5, 0, 2, 3, 0, 1, 1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ],
    gear: {
      head: [
        {
          id: 19372,
          selected: true
        }
      ],
      neck: [
        {
          id: 18404,
          selected: true
        }
      ],
      shoulder: [
        {
          id: 16961,
          selected: true
        }
      ],
      back: [
        {
          id: 19907,
          selected: true
        }
      ],
      chest: [
        {
          id: 16966,
          selected: true
        }
      ],
      wrist: [
        {
          id: 16959,
          selected: true
        }
      ],
      hands: [
        {
          id: 14551,
          selected: true
        }
      ],
      waist: [
        { 
          id: 19823, 
          selected: true 
        }
      ],
      feet: [
        {
          id: 16965,
          selected: true
        }
      ],
      finger: [
        {
          id: 17063,
          selected: true
        },
        {
          id: 19384,
          selected: true
        }
      ],
      ranged: [
        {
          id: 12651,
          selected: true
        }
      ],
      mainhand: [
        {
          id: 19019,
          selected: true
        }
      ],
      offhand: [
        {
          id: 18805,
          selected: true
        }
      ],
      shield: [
      ],
      twohand: [
      ],
      custom: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
        { id: 12 },
        { id: 13 },
        { id: 14 },
        { id: 15 },
        { id: 16 },
        { id: 17 },
        { id: 18 },
        { id: 19 }
      ]
    },
    enchant: {
      head: [],
      shoulder: [],
      back: [{ id: 13882, selected: true }],
      chest: [],
      wrist: [],
      hands: [
        { id: 13948, selected: true }
      ],
      legs: [],
      feet: [
        { id: 13890, selected: true }
      ],
      mainhand: [
        { id: 20034, selected: true }
      ],
      offhand: [
        { id: 20034, selected: true }
      ],
      twohand: []
    }
  }
};
