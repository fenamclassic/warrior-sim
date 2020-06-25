class Player {
  constructor(testItem, testType, enchtype) {
    this.rage = 0;
    this.ragewasted = 0;
    this.level = 60;
    this.timer = 0;
    this.dodgeTimer = 0;
    this.revengeTimer = 0;
    this.extraattacks = 0;
    this.batchedextras = 0;
    this.nextswinghs = false;
    this.nextswingcl = false;
    this.nextswingwf = false;
    this.aqbooks = $('select[name="aqbooks"]').val() == 'Yes';
    this.weaponrng = $('select[name="weaponrng"]').val() == 'Yes';
    this.tankmode = $('select[name="tankmode"]').val() == 'Yes';
    if (enchtype == 1) {
      this.testEnch = testItem;
      this.testEnchType = testType;
    } else if (enchtype == 2) {
      this.testTempEnch = testItem;
      this.testTempEnchType = testType;
    } else {
      this.testItem = testItem;
      this.testItemType = testType;
    }
    this.target = {
      level: parseInt($('input[name="targetlevel"]').val()),
      basearmor: parseInt($('input[name="targetarmor"]').val()),
      armor: parseInt($('input[name="targetarmor"]').val()),
      defense: parseInt($('input[name="targetlevel"]').val()) * 5,
      mitigation:
        1 -
        15 *
          ((parseInt($('input[name="targetresistance"]').val()) + 24) / 6000),
      binaryresist: parseInt(
        10000 -
          8300 *
            (1 -
              (parseInt($('input[name="targetresistance"]').val()) * 0.15) / 60)
      )
    };
    this.base = {
      ap: 0,
      agi: 0,
      str: 0,
      sta: 0,
      hit: 0,
      crit: 0,
      spellcrit: 0,
      skill_0: this.level * 5,
      skill_1: this.level * 5,
      skill_2: this.level * 5,
      skill_3: this.level * 5,
      skill_4: this.level * 5,
      skill_5: this.level * 5,
      haste: 1,
      strmod: 1,
      agimod: 1,
      stamod: 1,
      dmgmod: 1,
      apmod: 1,
      dmgtakenmod: 1,
      armormod: 1,
      ac: 0,
      defense: this.level * 5,
      dodge: 0,
      parry: 5,
      block: 5,
      blockvalue: 0
    };
    this.stats = {};
    this.auras = {};
    this.spells = {};
    this.items = [];
    this.shield = false;
    this.addRace();
    this.addTalents();
    this.addGear();
    if (!this.mh) return;
    this.addSets();
    this.addEnchants();
    this.addTempEnchants();
    this.addBuffs();
    this.addSpells();
    if (this.talents.armormod) this.base.armormod *= (1 + this.talents.armormod / 100)
    if (this.talents.enrage) this.auras.enrage = new Enrage(this);
    if (this.talents.flurry) this.auras.flurry = new Flurry(this);
    if (this.spells.shieldblock) this.auras.shieldblockbuff = new ShieldBlockBuff(this);
    if (this.spells.overpower) this.auras.battlestance = new BattleStance(this);
    if (this.items.includes(9449)) this.auras.pummeler = new Pummeler(this);
    if (this.items.includes(14554))
      this.auras.cloudkeeper = new Cloudkeeper(this);
    if (this.items.includes(20130)) this.auras.flask = new Flask(this);
    if (this.items.includes(23041)) this.auras.slayer = new Slayer(this);
    if (this.items.includes(22954)) this.auras.spider = new Spider(this);
    if (this.items.includes(23570)) this.auras.gabbar = new Gabbar(this);
    if (this.items.includes(21180))
      this.auras.earthstrike = new Earthstrike(this);
    this.threatmod =
      (this.defstance ? 1.3 : 0.8) *
      (this.salvation ? 0.7 : 1) *
      (1 + 0.01 * this.talents.threatmod);
    this.update();
    if (this.oh)
      this.oh.timer = Math.round((this.oh.speed * 1000) / this.stats.haste / 2);
  }
  addRace() {
    for (let race of races) {
      if (race.name == $('select[name="race"]').val()) {
        this.base.aprace = race.ap;
        this.base.ap += race.ap;
        this.base.str += race.str;
        this.base.agi += race.agi;
        this.base.sta += race.sta;
        this.base.skill_0 += race.skill_0;
        this.base.skill_1 += race.skill_1;
        this.base.skill_2 += race.skill_2;
        this.base.skill_3 += race.skill_3;
      }
    }
  }
  addTalents() {
    this.talents = {};
    for (let tree in talents) {
      for (let talent of talents[tree].t) {
        $.extend(this.talents, talent.aura(talent.c));
      }
    }
  }
  addGear() {
    for (let type in gear) {
      for (let item of gear[type]) {
        if (
          (this.testItemType == type && this.testItem == item.id) ||
          (this.testItemType != type && item.selected)
        ) {
          for (let prop in this.base) this.base[prop] += item[prop] || 0;
          if (item.skill && item.skill > 0) {
            if (item.type == 'Varied') {
              this.base['skill_1'] += item.skill;
              this.base['skill_2'] += item.skill;
              this.base['skill_3'] += item.skill;
            } else {
              let sk = WEAPONTYPE[item.type.toUpperCase()];
              this.base['skill_' + sk] += item.skill;
            }
          }

          if (type == 'mainhand' || type == 'offhand' || type == 'twohand')
            this.addWeapon(item, type);

          if (type == 'shield') {
            this.shield = true;
          }

          // Blazefury Medallion
          if (item.id == 17111) {
            this.attackproc = {};
            this.attackproc.chance = item.procchance * 100;
            this.attackproc.magicdmg = item.magicdmg;
          }

          if (item.procchance && type == 'trinket') {
            let proc = {};
            proc.chance = item.procchance * 100;
            proc.extra = item.procextra;
            proc.magicdmg = item.magicdmg;
            if (item.procspell) {
              this.auras[item.procspell.toLowerCase()] = eval(
                'new ' + item.procspell + '(this)'
              );
              proc.spell = this.auras[item.procspell.toLowerCase()];
            }
            this['trinketproc' + (this.trinketproc1 ? 2 : 1)] = proc;
          }

          this.items.push(item.id);
        }
      }
    }

    if (this.mh && this.mh.twohand) {
      for (let type in gear) {
        for (let item of gear[type]) {
          if (type != 'hands' && type != 'head') continue;
          if (
            (this.testItemType == type && this.testItem == item.id) ||
            (this.testItemType != type && item.selected)
          ) {
            if (item.skill && item.skill > 0) {
              if (item.type == 'Varied') {
                this.base['skill_1'] -= item.skill;
                this.base['skill_2'] -= item.skill;
                this.base['skill_3'] -= item.skill;
              } else {
                let sk = WEAPONTYPE[item.type.toUpperCase()];
                this.base['skill_' + sk] -= item.skill;
              }
            }
          }
        }
      }
    }
  }
  addWeapon(item, type) {
    let ench, tempench;
    for (let item of enchant[type]) {
      if (item.temp) continue;
      if (this.testEnchType == type && this.testEnch == item.id) ench = item;
      else if (this.testEnchType != type && item.selected) ench = item;
    }
    for (let item of enchant[type]) {
      if (!item.temp) continue;
      if (this.testTempEnchType == type && this.testTempEnch == item.id)
        tempench = item;
      else if (this.testTempEnchType != type && item.selected) tempench = item;
    }

    if (type == 'mainhand')
      this.mh = new Weapon(this, item, ench, tempench, false, false);

    if (type == 'offhand')
      this.oh = new Weapon(this, item, ench, tempench, true, false);

    if (type == 'twohand')
      this.mh = new Weapon(this, item, ench, tempench, false, true);
  }
  addEnchants() {
    for (let type in enchant) {
      for (let item of enchant[type]) {
        if (item.temp) continue;
        if (
          (this.testEnchType == type && this.testEnch == item.id) ||
          (this.testEnchType != type && item.selected)
        ) {
          for (let prop in this.base) {
            if (prop == 'haste') this.base.haste *= 1 + item.haste / 100 || 1;
            else this.base[prop] += item[prop] || 0;
          }
        }
      }
    }
  }
  addTempEnchants() {
    for (let type in enchant) {
      for (let item of enchant[type]) {
        if (!item.temp) continue;
        if (type == 'mainhand' && this.mh.windfury) continue;
        if (
          (this.testTempEnchType == type && this.testTempEnch == item.id) ||
          (this.testTempEnchType != type && item.selected)
        ) {
          for (let prop in this.base) this.base[prop] += item[prop] || 0;
        }
      }
    }
  }
  addSets() {
    for (let set of sets) {
      let counter = 0;
      for (let item of set.items) if (this.items.includes(item)) counter++;
      if (counter == 0) continue;
      for (let bonus of set.bonus) {
        if (counter >= bonus.count) {
          for (let prop in bonus.stats)
            this.base[prop] += bonus.stats[prop] || 0;
          if (bonus.stats.procspell) {
            this.attackproc = {};
            this.attackproc.chance = bonus.stats.procchance * 100;
            this.auras[bonus.stats.procspell.toLowerCase()] = eval(
              'new ' + bonus.stats.procspell + '(this)'
            );
            this.attackproc.spell = this.auras[
              bonus.stats.procspell.toLowerCase()
            ];
          }
        }
      }
    }
  }
  addBuffs() {
    for (let buff of buffs) {
      if (buff.active) {
        let apbonus = 0;
        if (buff.group == 'battleshout') {
          apbonus = ~~(
            (this.aqbooks ? 232 : buff.ap) * this.talents.impbattleshout
          );
          if (this.aqbooks) apbonus += 39;
        }
        if (buff.group === 'stance') {
          if (buff.id === 2458) {
            this.zerkstance = true;
          } else if (buff.id === 71) {
            this.defstance = true;
          }
        }
        if (buff.group == 'vaelbuff') this.vaelbuff = true;
        if (buff.group == 'salvation') this.salvation = true;

        this.base.ap += (buff.ap || 0) + apbonus;
        this.base.ac += buff.ac || 0;
        this.base.agi += buff.agi || 0;
        this.base.str += buff.str || 0;
        this.base.sta += buff.sta || 0;
        this.base.crit += buff.crit || 0;
        this.base.hit += buff.hit || 0;
        this.base.spellcrit += buff.spellcrit || 0;
        this.base.agimod *= 1 + buff.agimod / 100 || 1;
        this.base.strmod *= 1 + buff.strmod / 100 || 1;
        this.base.stamod *= 1 + buff.stamod / 100 || 1;
        this.base.dmgmod *= 1 + buff.dmgmod / 100 || 1;
        this.base.haste *= 1 + buff.haste / 100 || 1;
        this.base.armormod *= 1 + buff.armormod / 100 || 1;
        this.base.dmgtakenmod *= 1 + buff.dmgtakenmod / 100 || 1;
      }
    }
  }
  addSpells() {
    for (let spell of spells) {
      if (spell.active) {
        if (spell.aura)
          this.auras[spell.classname.toLowerCase()] = eval(
            `new ${spell.classname}(this)`
          );
        else
          this.spells[spell.classname.toLowerCase()] = eval(
            `new ${spell.classname}(this)`
          );
      }
    }
  }
  reset(rage) {
    this.rage = rage;
    this.ragewasted = 0;
    this.timer = 0;
    this.dodgeTimer = 0;
    this.revengeTimer = 0;
    this.mh.timer = 0;
    if (this.oh) this.oh.use();
    this.extraattacks = 0;
    this.batchedextras = 0;
    this.nextswinghs = false;
    this.nextswingcl = false;
    this.nextswingwf = false;
    for (let s in this.spells) {
      this.spells[s].timer = 0;
      this.spells[s].stacks = 0;
    }
    for (let s in this.auras) {
      this.auras[s].timer = 0;
      this.auras[s].firstuse = true;
      this.auras[s].stacks = 0;
    }
    this.update();
  }
  update() {
    this.updateAuras();
    this.mh.glanceChance = this.getGlanceChance(this.mh);
    this.armorReduction = this.getArmorReduction();
    this.mh.miss = this.getMissChance(this.mh);
    this.mh.dwmiss = this.mh.miss;
    this.mh.dodge = this.getDodgeChance(this.mh);
    this.mh.parry = this.getParryChance(this.mh);
    this.mh.block = this.getBlockChance(this.mh);

    if (this.oh) {
      this.mh.dwmiss = this.getDWMissChance(this.mh);
      this.oh.glanceChance = this.getGlanceChance(this.oh);
      this.oh.miss = this.getMissChance(this.oh);
      this.oh.dwmiss = this.getDWMissChance(this.oh);
      this.oh.dodge = this.getDodgeChance(this.oh);
      this.oh.parry = this.getParryChance(this.oh);
      this.oh.block = this.getBlockChance(this.oh);
    }
  }
  updateAuras() {
    for (let prop in this.base) this.stats[prop] = this.base[prop];
    for (let name in this.auras) {
      if (this.auras[name].timer) {
        for (let prop in this.auras[name].stats)
          this.stats[prop] += this.auras[name].stats[prop];
        for (let prop in this.auras[name].mult_stats)
          this.stats[prop] *= 1 + this.auras[name].mult_stats[prop] / 100;
      }
    }
    this.stats.str = ~~(this.stats.str * this.stats.strmod);
    this.stats.agi = ~~(this.stats.agi * this.stats.agimod);
    this.stats.sta = ~~(this.stats.sta * this.stats.stamod);
    this.stats.ap += this.stats.str * 2;
    this.stats.crit += this.stats.agi / 20;
    this.crit = this.getCritChance();

    this.stats.ac = ~~(
      (this.stats.ac + this.stats.agi * 2) *
      this.stats.armormod
    );
    this.stats.dodge =
      (this.stats.agi / 20) +
      ((this.stats.defense - this.target.level * 5) * 0.04) +
      this.stats.dodge;
    this.stats.dodge = Math.trunc(this.stats.dodge * 100) / 100;
    this.stats.parry =
      (this.stats.defense - this.target.level * 5) * 0.04 + this.stats.parry;
    this.stats.block = (this.stats.defense - this.target.level * 5) * 0.04 + this.stats.block;
    this.stats.blockvalue += ~~(this.stats.str / 20);

    if (this.stats.apmod != 1)
      this.stats.ap += ~~(
        (this.base.aprace + this.stats.str * 2) *
        (this.stats.apmod - 1)
      );
    if (this.stats.haste > 2) this.stats.haste = 2;
  }
  updateStrength() {
    this.stats.str = this.base.str;
    this.stats.ap = this.base.ap;

    for (let name in this.auras) {
      if (this.auras[name].timer) {
        if (this.auras[name].stats.str)
          this.stats.str += this.auras[name].stats.str;
        if (this.auras[name].stats.ap)
          this.stats.ap += this.auras[name].stats.ap;
      }
    }
    this.stats.str = ~~(this.stats.str * this.stats.strmod);
    this.stats.ap += this.stats.str * 2;
    this.stats.blockvalue = this.base.blockvalue + ~~(this.stats.str / 20);

    if (this.stats.apmod != 1)
      this.stats.ap += ~~(
        (this.base.aprace + this.stats.str * 2) *
        (this.stats.apmod - 1)
      );
  }
  updateAP() {
    this.stats.ap = this.base.ap;
    for (let name in this.auras) {
      if (this.auras[name].timer && this.auras[name].stats.ap)
        this.stats.ap += this.auras[name].stats.ap;
    }
    this.stats.ap += this.stats.str * 2;

    if (this.stats.apmod != 1)
      this.stats.ap += ~~(
        (this.base.aprace + this.stats.str * 2) *
        (this.stats.apmod - 1)
      );
  }
  updateHaste() {
    this.stats.haste = this.base.haste;
    if (this.auras.flurry && this.auras.flurry.timer)
      this.stats.haste *= 1 + this.auras.flurry.mult_stats.haste / 100;
    if (this.auras.berserking && this.auras.berserking.timer)
      this.stats.haste *= 1 + this.auras.berserking.mult_stats.haste / 100;
    if (this.auras.empyrean && this.auras.empyrean.timer)
      this.stats.haste *= 1 + this.auras.empyrean.mult_stats.haste / 100;
    if (this.auras.eskhandar && this.auras.eskhandar.timer)
      this.stats.haste *= 1 + this.auras.eskhandar.mult_stats.haste / 100;
    if (this.auras.pummeler && this.auras.pummeler.timer)
      this.stats.haste *= 1 + this.auras.pummeler.mult_stats.haste / 100;
    if (this.auras.spider && this.auras.spider.timer)
      this.stats.haste *= 1 + this.auras.spider.mult_stats.haste / 100;
    if (this.stats.haste > 2) this.stats.haste = 2;
  }
  updateBonusDmg() {
    let bonus = 0;
    if (this.auras.zeal && this.auras.zeal.timer)
      bonus += this.auras.zeal.stats.bonusdmg;
    this.mh.bonusdmg = this.mh.basebonusdmg + bonus;
    this.oh.bonusdmg = this.oh.basebonusdmg + bonus;
  }
  updateArmorReduction() {
    this.target.armor = this.target.basearmor;
    if (this.auras.annihilator && this.auras.annihilator.timer)
      this.target.armor = Math.max(
        this.target.armor -
          this.auras.annihilator.stacks * this.auras.annihilator.armor,
        0
      );
    if (this.auras.bonereaver && this.auras.bonereaver.timer)
      this.target.armor = Math.max(
        this.target.armor -
          this.auras.bonereaver.stacks * this.auras.bonereaver.armor,
        0
      );
    if (this.auras.swarmguard && this.auras.swarmguard.timer)
      this.target.armor = Math.max(
        this.target.armor -
          this.auras.swarmguard.stacks * this.auras.swarmguard.armor,
        0
      );
    this.armorReduction = this.getArmorReduction();
  }
  updateDmgMod() {
    this.stats.dmgmod = this.base.dmgmod;
    if (this.auras.enrage && this.auras.enrage.timer) {
      this.stats.dmgmod *= 1 + this.auras.enrage.mult_stats.dmgmod / 100;
    }
    for (let name in this.auras) {
      if (this.auras[name].timer && this.auras[name].mult_stats.dmgmod)
        this.stats.dmgmod *= 1 + this.auras[name].mult_stats.dmgmod / 100;
    }
  }
  getGlanceReduction(weapon) {
    let diff = this.target.defense - this.stats['skill_' + weapon.type];
    let low = 1.3 - 0.05 * diff;
    let high = 1.2 - 0.03 * diff;
    if (this.weaponrng)
      return (
        rng(Math.min(low, 0.91) * 1000, Math.min(high, 0.99) * 1000) / 1000
      );
    else
      return (
        avg(Math.min(low, 0.91) * 1000, Math.min(high, 0.99) * 1000) / 1000
      );
  }
  getGlanceChance(weapon) {
    return (
      10 +
      (this.target.defense -
        Math.min(this.level * 5, this.stats['skill_' + weapon.type])) *
        2
    );
  }
  getMissChance(weapon) {
    let diff = this.target.defense - this.stats['skill_' + weapon.type];
    let miss = 5 + (diff > 10 ? diff * 0.2 : diff * 0.1);
    miss -= diff > 10 ? this.stats.hit - 1 : this.stats.hit;
    return miss > 0 ? miss : 0;
  }
  getDWMissChance(weapon) {
    let diff = this.target.defense - this.stats['skill_' + weapon.type];
    let miss = 5 + (diff > 10 ? diff * 0.2 : diff * 0.1);
    miss = miss * 0.8 + 20; //v1
    //miss += 19; // v2
    miss -= diff > 10 ? this.stats.hit - 1 : this.stats.hit;
    return miss > 0 ? miss : 0;
  }
  getCritChance() {
    let crit =
      this.stats.crit +
      (this.talents.crit || 0) +
      (this.level - this.target.level) * 1 +
      (this.level - this.target.level) * 0.6;
    return Math.max(crit, 0);
  }
  getDodgeChance(weapon) {
    return 5 + (this.target.defense - this.stats['skill_' + weapon.type]) * 0.1;
  }
  getParryChance(weapon) {
    if (this.target.level - this.level > 2) {
      return (
        14 - (this.target.defense - this.stats['skill_' + weapon.type]) * 0.1
      );
    } else {
      return (
        5 + (this.target.defense - this.stats['skill_' + weapon.type]) * 0.1
      );
    }
  }
  getBlockChance(weapon) {
    return Math.min(
      5,
      5 + (this.target.defense - this.stats['skill_' + weapon.type]) * 0.1
    );
  }
  getArmorReduction() {
    let r = this.target.armor / (this.target.armor + 400 + 85 * this.level);
    return r > 0.75 ? 0.75 : r;
  }
  addRage(dmg, result, weapon, spell) {
    if (spell) {
      if (
        result == RESULT.MISS ||
        result == RESULT.DODGE ||
        result == RESULT.PARRY
      )
        this.rage += spell.usedrage
          ? spell.usedrage
          : spell.refund
          ? spell.cost * 0.8
          : 0;
    } else {
      if (result == RESULT.DODGE || result == RESULT.PARRY)
        this.rage += (weapon.avgdmg() / 230.6) * 7.5 * 0.75;
      else if (result != RESULT.MISS) this.rage += (dmg / 230.6) * 7.5;
    }
    if (!spell || spell instanceof HeroicStrike) {
      if (
        result != RESULT.MISS &&
        result != RESULT.DODGE &&
        result != RESULT.PARRY &&
        this.talents.umbridledwrath &&
        rng10k() < this.talents.umbridledwrath * 100
      )
        this.rage += 1;
    }

    if (this.rage > 100) {
      this.ragewasted += this.rage - 100;
      this.rage = 100;
    };
  }
  step(simulation) {
    this.timer = this.timer < 400 ? 0 : this.timer - 400;
    this.dodgeTimer = this.dodgeTimer < 400 ? 0 : this.dodgeTimer - 400;
    this.revengeTimer = this.revengeTimer < 400 ? 0 : this.revengeTimer - 400;

    // Spells
    if (this.spells.mortalstrike) this.spells.mortalstrike.step();
    if (this.spells.bloodthirst) this.spells.bloodthirst.step();
    if (this.spells.shieldslam) this.spells.shieldslam.step();
    if (this.spells.bloodrage) this.spells.bloodrage.step();
    if (this.spells.whirlwind) this.spells.whirlwind.step();
    if (this.spells.overpower) this.spells.overpower.step();
    if (this.spells.revenge) this.spells.revenge.step();
    if (this.spells.shieldblock) this.spells.shieldblock.step();

    // Auras
    if (this.auras.deepwounds && this.auras.deepwounds.timer) {
      this.auras.deepwounds.step(simulation);
      if (this.auras.deepwounds.timer) this.auras.deepwounds.step(simulation);
    }
    if (this.auras.battlestance && this.auras.battlestance.timer) {
      this.auras.battlestance.step();
    }
    if (
      this.auras.mightyragepotion &&
      this.auras.mightyragepotion.firstuse &&
      this.auras.mightyragepotion.timer
    ) {
      this.auras.mightyragepotion.step();
    }
    if (
      this.auras.deathwish &&
      this.auras.deathwish.firstuse &&
      this.auras.deathwish.timer
    ) {
      this.auras.deathwish.step();
    }
    if (
      this.auras.recklessness &&
      this.auras.recklessness.firstuse &&
      this.auras.recklessness.timer
    ) {
      this.auras.recklessness.step();
    }
    if (
      this.auras.bloodfury &&
      this.auras.bloodfury.firstuse &&
      this.auras.bloodfury.timer
    ) {
      this.auras.bloodfury.step();
    }
    if (
      this.auras.berserking &&
      this.auras.berserking.firstuse &&
      this.auras.berserking.timer
    ) {
      this.auras.berserking.step();
    }
    if (
      this.auras.cloudkeeper &&
      this.auras.cloudkeeper.firstuse &&
      this.auras.cloudkeeper.timer
    ) {
      this.auras.cloudkeeper.step();
    }
    if (
      this.auras.flask &&
      this.auras.flask.firstuse &&
      this.auras.flask.timer
    ) {
      this.auras.flask.step();
    }
    if (
      this.auras.slayer &&
      this.auras.slayer.firstuse &&
      this.auras.slayer.timer
    ) {
      this.auras.slayer.step();
    }
    if (
      this.auras.spider &&
      this.auras.spider.firstuse &&
      this.auras.spider.timer
    ) {
      this.auras.spider.step();
    }
    if (
      this.auras.gabbar &&
      this.auras.gabbar.firstuse &&
      this.auras.gabbar.timer
    ) {
      this.auras.gabbar.step();
    }
    if (
      this.auras.earthstrike &&
      this.auras.earthstrike.firstuse &&
      this.auras.earthstrike.timer
    ) {
      this.auras.earthstrike.step();
    }
    if (
      this.auras.pummeler &&
      this.auras.pummeler.firstuse &&
      this.auras.pummeler.timer
    ) {
      this.auras.pummeler.step();
    }
    if (this.mh.proc1 && this.mh.proc1.spell && this.mh.proc1.spell.timer) {
      this.mh.proc1.spell.step();
    }
    if (this.mh.proc2 && this.mh.proc2.spell && this.mh.proc2.spell.timer) {
      this.mh.proc2.spell.step();
    }
    if (
      this.oh &&
      this.oh.proc1 &&
      this.oh.proc1.spell &&
      this.oh.proc1.spell.timer
    ) {
      this.oh.proc1.spell.step();
    }
    if (
      this.oh &&
      this.oh.proc2 &&
      this.oh.proc2.spell &&
      this.oh.proc2.spell.timer
    ) {
      this.oh.proc2.spell.step();
    }
    if (this.mh.windfury && this.mh.windfury.timer) {
      this.mh.windfury.step();
    }
    if (
      this.trinketproc1 &&
      this.trinketproc1.spell &&
      this.trinketproc1.spell.timer
    ) {
      this.trinketproc1.spell.step();
    }
    if (
      this.trinketproc2 &&
      this.trinketproc2.spell &&
      this.trinketproc2.spell.timer
    ) {
      this.trinketproc2.spell.step();
    }
    if (
      this.attackproc &&
      this.attackproc.spell &&
      this.attackproc.spell.timer
    ) {
      this.attackproc.spell.step();
    }
    if (this.auras.shieldblockbuff && this.auras.shieldblockbuff.timer) {
      this.auras.shieldblockbuff.step();
    }
  }
  rollweapon(weapon) {
    let tmp = 0;
    let roll = rng10k();
    tmp += Math.max(this.nextswinghs ? weapon.miss : weapon.dwmiss, 0) * 100;
    if (roll < tmp) return RESULT.MISS;
    tmp += weapon.dodge * 100;
    if (roll < tmp) return RESULT.DODGE;
    if (this.tankmode) {
      tmp += weapon.parry * 100;
      if (roll < tmp) return RESULT.PARRY;
    }
    tmp += weapon.glanceChance * 100;
    if (roll < tmp) return RESULT.GLANCE;
    tmp += (this.crit + weapon.crit) * 100;
    if (roll < tmp) return RESULT.CRIT;
    return RESULT.HIT;
  }
  rollspell(spell) {
    let tmp = 0;
    let roll = rng10k();
    tmp += Math.max(this.mh.miss, 0) * 100;
    if (roll < tmp) return RESULT.MISS;
    if (spell.canDodge) {
      tmp += this.mh.dodge * 100;
      if (roll < tmp) return RESULT.DODGE;
      if (this.tankmode) {
        tmp += this.mh.parry * 100;
        if (roll < tmp) return RESULT.PARRY;
      }
    }
    roll = rng10k();
    let crit = this.crit + this.mh.crit;
    if (spell instanceof Overpower) crit += this.talents.overpowercrit;
    if (roll < crit * 100 && !spell.nocrit) return RESULT.CRIT;
    return RESULT.HIT;
  }
  rollblock(weapon) {
    let tmp = 0;
    let roll = rng10k();
    tmp += weapon.block * 100;
    if (roll < tmp) return RESULT.BLOCK;
    else return RESULT.HIT;
  }
  attackmh(weapon, wf) {
    let spell = null;
    let procdmg = 0;
    let procbasethreat = 0;
    let result;

    this.nextswingwf = false;
    if (this.nextswinghs) {
      this.nextswinghs = false;
      if (this.spells.heroicstrike.cost <= this.rage) {
        result = this.rollspell(this.spells.heroicstrike);
        spell = this.spells.heroicstrike;
        this.rage -= spell.cost;
      } else {
        result = this.rollweapon(weapon);
      }
    } else {
      result = this.rollweapon(weapon);
    }

    let dmg = weapon.dmg(spell);
    let procattack = this.procattack(spell, weapon, result, wf);
    procdmg = procattack ? procattack.dmg : 0;
    procbasethreat = procattack ? procattack.basethreat : 0;

    if (result == RESULT.PARRY) {
      this.targetref.parryHaste();
    }

    if (result == RESULT.DODGE) {
      this.dodgeTimer = 5000;
    }
    if (result == RESULT.GLANCE) {
      dmg *= this.getGlanceReduction(weapon);
    }
    if (result == RESULT.CRIT) {
      dmg *= 2 + (spell ? this.talents.abilitiescrit : 0);
      this.proccrit();
    }

    weapon.use();
    let done = this.dealdamage(dmg, result, weapon, spell);

    if (this.tankmode) {
      if (this.rollblock(weapon) == RESULT.BLOCK) {
        if (spell) {
          spell.data[RESULT.BLOCK]++;
        } else {
          weapon.data[RESULT.BLOCK]++;
        }
        done = Math.max(done - 46, 0);
      }
    }

    if (spell) {
      spell.totaldmg += done;
      spell.data[result]++;
      spell.totalthreat +=
        (spell.basethreat + done) * this.threatmod * spell.threatmod;
    } else {
      weapon.totaldmg += done;
      weapon.data[result]++;
      weapon.totalthreat += done * this.threatmod;
    }
    weapon.totalprocdmg += procdmg;
    weapon.totalprocthreat += procdmg * this.threatmod;
    let threat = spell
      ? result !== RESULT.MISS &&
        result !== RESULT.DODGE &&
        result !== RESULT.PARRY
        ? spell.basethreat
        : 0
      : 0;
    return {
      dmg: done + procdmg,
      threat: (done + threat + procdmg + procbasethreat) * this.threatmod
    };
  }
  attackoh(weapon) {
    let procdmg = 0;
    let procbasethreat = 0;
    let result;
    result = this.rollweapon(weapon);

    let dmg = weapon.dmg();
    let procattack = this.procattack(null, weapon, result);
    procdmg = procattack ? procattack.dmg : 0;
    procbasethreat = procattack ? procattack.basethreat : 0;

    if (result == RESULT.PARRY) {
      this.targetref.parryHaste();
    }

    if (result == RESULT.DODGE) {
      this.dodgeTimer = 5000;
    }
    if (result == RESULT.GLANCE) {
      dmg *= this.getGlanceReduction(weapon);
    }
    if (result == RESULT.CRIT) {
      dmg *= 2;
      this.proccrit();
    }

    weapon.use();
    let done = this.dealdamage(dmg, result, weapon);

    if (this.tankmode) {
      if (this.rollblock(weapon) == RESULT.BLOCK) {
        weapon.data[RESULT.BLOCK]++;
        done = Math.max(done - 46, 0);
      }
    }

    weapon.data[result]++;
    weapon.totaldmg += done;
    weapon.totalthreat += done * this.threatmod;
    weapon.totalprocdmg += procdmg;
    weapon.totalprocthreat += procdmg * this.threatmod;
    return { dmg: done + procdmg, threat: (done + procdmg + procbasethreat) * this.threatmod };
  }
  cast(spell) {
    spell.use();
    let procdmg = 0;
    let procbasethreat = 0;
    let dmg = spell.dmg() * this.mh.modifier;
    let result = this.rollspell(spell);

    if (
      spell instanceof Bloodthirst ||
      spell instanceof Whirlwind ||
      spell instanceof ShieldSlam ||
      spell instanceof Overpower ||
      spell instanceof Execute ||
      spell instanceof HeroicStrike ||
      spell instanceof MortalStrike ||
      spell instanceof Hamstring ||
      spell instanceof SunderArmor ||
      spell instanceof Slam ||
      spell instanceof Revenge
    ) {
      if (this.auras.warriorswrath && this.auras.warriorswrath.timer > 0) {
        this.auras.warriorswrath.step();
        this.auras.warriorswrath.timer = 0;
        this.rage += 5;
        if (this.rage > 100) {
          this.ragewasted += this.rage - 100;
          this.rage = 100;
        };
      }
    }

    let procattack = this.procattack(spell, this.mh, result);
    procdmg = procattack ? procattack.dmg : 0;
    procbasethreat = procattack ? procattack.basethreat : 0;

    if (result == RESULT.PARRY) {
      this.targetref.parryHaste();
    }

    if (result == RESULT.DODGE) {
      this.dodgeTimer = 5000;
    }
    if (result == RESULT.CRIT) {
      dmg *= 2 + this.talents.abilitiescrit;
      this.proccrit();
    }

    let done = this.dealdamage(dmg, result, this.mh, spell);

    if (this.tankmode && spell.canDodge) {
      if (this.rollblock(this.mh) == RESULT.BLOCK) {
        spell.data[RESULT.BLOCK]++;
        done = Math.max(done - 46, 0);
      }
    }

    spell.data[result]++;
    spell.totaldmg += done;
    let threat =
      result !== RESULT.MISS &&
      result !== RESULT.DODGE &&
      result !== RESULT.PARRY
        ? (spell.basethreat + done) * this.threatmod * spell.threatmod
        : 0;
    spell.totalthreat += threat;
    this.mh.totalprocdmg += procdmg;
    this.mh.totalprocthreat += procdmg * this.threatmod;
    return { dmg: done + procdmg, threat: threat + (procdmg + procbasethreat) * this.threatmod };
  }
  dealdamage(dmg, result, weapon, spell) {
    if (
      result != RESULT.MISS &&
      result != RESULT.DODGE &&
      result != RESULT.PARRY
    ) {
      dmg *= this.stats.dmgmod;
      dmg *= 1 - this.armorReduction;
      this.addRage(dmg, result, weapon, spell);
      return ~~dmg;
    } else {
      this.addRage(dmg, result, weapon, spell);
      return 0;
    }
  }
  proccrit() {
    if (this.auras.flurry) this.auras.flurry.use();
    if (this.auras.deepwounds) this.auras.deepwounds.use();
  }
  proccrittaken() {
    if (this.auras.enrage) this.auras.enrage.use();
  }
  procattack(spell, weapon, result, wf) {
    let procdmg = 0;
    let procbasethreat = 0;
    if (
      result != RESULT.MISS &&
      result != RESULT.DODGE &&
      result != RESULT.PARRY
    ) {
      if (weapon.proc1 && rng10k() < weapon.proc1.chance) {
        if (weapon.proc1.spell) weapon.proc1.spell.use();
        if (weapon.proc1.magicdmg)
          procdmg += this.magicproc(weapon.proc1.magicdmg);
          if (weapon.thunderfury) {
            procbasethreat += 235;
          }
        if (weapon.proc1.physdmg)
          procdmg += this.physproc(weapon.proc1.physdmg);
        if (weapon.proc1.extra) this.extraattacks += weapon.proc1.extra;
      }
      if (weapon.proc2 && rng10k() < weapon.proc2.chance) {
        if (weapon.proc2.spell) weapon.proc2.spell.use();
        if (weapon.proc2.magicdmg)
          procdmg += this.magicproc(weapon.proc2.magicdmg);
      }
      if (weapon.windfury && !wf && rng10k() < 2000) {
        weapon.windfury.use();
      }
      if (this.trinketproc1 && rng10k() < this.trinketproc1.chance) {
        if (this.trinketproc1.extra)
          this.batchedextras += this.trinketproc1.extra;
        if (this.trinketproc1.magicdmg)
          procdmg += this.magicproc(this.trinketproc1.magicdmg);
        if (this.trinketproc1.spell) this.trinketproc1.spell.use();
      }
      if (this.trinketproc2 && rng10k() < this.trinketproc2.chance) {
        if (this.trinketproc2.extra)
          this.batchedextras += this.trinketproc2.extra;
        if (this.trinketproc2.magicdmg)
          procdmg += this.magicproc(this.trinketproc2.magicdmg);
        if (this.trinketproc2.spell) this.trinketproc2.spell.use();
      }
      if (this.attackproc && rng10k() < this.attackproc.chance) {
        if (this.attackproc.magicdmg)
          procdmg += this.magicproc(this.attackproc.magicdmg);
        if (this.attackproc.spell) this.attackproc.spell.use();
      }
      if (this.talents.swordproc && weapon.type == WEAPONTYPE.SWORD) {
        if (rng10k() < this.talents.swordproc * 100) this.extraattacks++;
      }
    }
    if (!spell || spell instanceof HeroicStrike) {
      if (this.auras.flurry && this.auras.flurry.stacks)
        this.auras.flurry.step();
      if (this.auras.enrage && this.auras.enrage.stacks)
        this.auras.enrage.step();
      if (this.mh.windfury && this.mh.windfury.stacks) this.mh.windfury.proc();
    }
    return { dmg: procdmg, basethreat: procbasethreat };
  }
  magicproc(dmg) {
    let mod = 1;
    if (rng10k() < 1700) return 0;
    if (rng10k() < this.stats.spellcrit * 100) mod = 1.5;
    return ~~(dmg * this.target.mitigation * mod);
  }
  physproc(dmg) {
    let tmp = 0;
    let roll = rng10k();
    tmp += Math.max(this.mh.miss, 0) * 100;
    if (roll < tmp) dmg = 0;
    tmp += this.mh.dodge * 100;
    if (roll < tmp) {
      this.dodgeTimer = 5000;
      dmg = 0;
    }
    roll = rng10k();
    let crit = this.crit + this.mh.crit;
    if (roll < crit * 100) dmg *= 2;
    return dmg * this.stats.dmgmod * this.mh.modifier;
  }
}
