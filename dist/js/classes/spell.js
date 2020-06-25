class Spell {
  constructor(player) {
    this.timer = 0;
    this.cost = 0;
    this.cooldown = 0;
    this.player = player;
    this.refund = true;
    this.canDodge = true;
    this.totaldmg = 0;
    this.totalthreat = 0;
    this.threatmod = 1;
    this.basethreat = 0;
    this.data = [0, 0, 0, 0, 0, 0, 0];
    this.name = this.constructor.name;
  }
  dmg() {
    return 0;
  }
  use() {
    this.player.timer = 1500;
    this.player.rage -= this.cost;
    this.timer = this.cooldown * 1000;
  }
  step() {
    this.timer = this.timer < 400 ? 0 : this.timer - 400;
  }
  canUse() {
    return this.timer == 0 && this.cost <= this.player.rage;
  }
}

class Bloodthirst extends Spell {
  constructor(player) {
    super(player);
    this.cost = 30;
    this.cooldown = 6;
    this.threshold = parseInt(spells[0].minrage);
  }
  dmg() {
    return this.player.stats.ap * 0.45;
  }
  canUse() {
    return (
      this.timer == 0 &&
      this.cost <= this.player.rage &&
      this.player.rage >= this.threshold
    );
  }
}

class Whirlwind extends Spell {
  constructor(player) {
    super(player);
    this.cost = 25;
    this.cooldown = 10;
    this.refund = false;
    this.threshold = parseInt(spells[5].minrage);
    this.maincd = parseInt(spells[5].maincd) * 1000;
  }
  dmg() {
    let dmg;
    if (this.player.weaponrng)
      dmg = rng(
        this.player.mh.mindmg + this.player.mh.bonusdmg,
        this.player.mh.maxdmg + this.player.mh.bonusdmg
      );
    else
      dmg = avg(
        this.player.mh.mindmg + this.player.mh.bonusdmg,
        this.player.mh.maxdmg + this.player.mh.bonusdmg
      );
    return dmg + (this.player.stats.ap / 14) * this.player.mh.normSpeed;
  }
  canUse() {
    return (
      this.timer == 0 &&
      this.cost <= this.player.rage &&
      (this.player.rage >= this.threshold ||
        (this.player.spells.bloodthirst &&
          this.player.spells.bloodthirst.timer >= this.maincd) ||
        (this.player.spells.mortalstrike &&
          this.player.spells.mortalstrike.timer >= this.maincd))
    );
  }
}

class Overpower extends Spell {
  constructor(player) {
    super(player);
    this.cost = 5;
    this.cooldown = 5;
    this.canDodge = false;
    this.threshold = parseInt(spells[9].maxrage);
    this.maincd = parseInt(spells[9].maincd);
  }
  dmg() {
    let dmg;
    if (this.player.weaponrng)
      dmg =
        35 +
        rng(
          this.player.mh.mindmg + this.player.mh.bonusdmg,
          this.player.mh.maxdmg + this.player.mh.bonusdmg
        );
    else
      dmg =
        35 +
        avg(
          this.player.mh.mindmg + this.player.mh.bonusdmg,
          this.player.mh.maxdmg + this.player.mh.bonusdmg
        );
    return dmg + (this.player.stats.ap / 14) * this.player.mh.normSpeed;
  }
  use() {
    this.player.timer = this.player.zerkstance ? 2000 : 1500;
    this.player.dodgeTimer = 0;
    this.player.rage = Math.min(
      this.player.rage,
      this.player.talents.rageretained
    );
    this.player.rage -= this.cost;
    this.timer = this.cooldown * 1000;
    if (this.player.zerkstance) this.player.auras.battlestance.use();
  }
  canUse() {
    return (
      this.timer == 0 &&
      this.cost <= this.player.rage &&
      this.player.dodgeTimer > 0 &&
      this.player.rage <= this.threshold &&
      ((this.player.spells.bloodthirst &&
        this.player.spells.bloodthirst.timer >= this.maincd) ||
        (this.player.spells.mortalstrike &&
          this.player.spells.mortalstrike.timer >= this.maincd))
    );
  }
}

class Execute extends Spell {
  constructor(player) {
    super(player);
    this.cost = 15 - player.talents.executecost;
    this.usedrage = 0;
    this.threatmod = 1.25;
  }
  dmg() {
    return 600 + 15 * this.usedrage;
  }
  use() {
    this.player.timer = 1500;
    this.usedrage = ~~(this.player.rage - this.cost);
    this.player.rage = 0;
  }
  canUse() {
    return this.cost <= this.player.rage;
  }
}

class BerserkerRage extends Spell {
  constructor(player) {
    super(player);
    this.cost = 0;
    this.bonusrage = 0 + player.talents.berserkerbonus;
    this.cooldown = 30;
    this.name = 'Berserker Rage';
  }
  use() {
    this.player.timer = 1500;
    this.player.rage -= this.cost;
    this.timer = this.cooldown * 1000;
    this.player.rage += this.bonusrage;
  }
  canUse() {
    return this.timer == 0;
  }
}

class Bloodrage extends Spell {
  constructor(player) {
    super(player);
    this.cost = 0;
    this.rage = 20 + player.talents.bloodragebonus;
    this.threshold = 100 - this.rage;
    this.cooldown = 60;
  }
  use() {
    this.player.timer = Math.max(400, this.player.timer);
    this.timer = this.cooldown * 1000;
    this.player.rage += this.rage;
  }
  canUse() {
    return this.timer == 0 && this.player.rage < this.threshold;
  }
}

class HeroicStrike extends Spell {
  constructor(player) {
    super(player);
    this.cost = 15 - player.talents.impheroicstrike;
    this.threshold = parseInt(spells[2].minrage);
    this.maincd = parseInt(spells[2].maincd) * 1000;
    this.unqueue = parseInt(spells[2].unqueue);
    this.name = 'Heroic Strike';
    this.bonus = player.aqbooks ? 157 : 138;
    this.basethreat = player.aqbooks ? 175 : 145;
  }
  use() {
    this.player.timer = Math.max(400, this.player.timer);
    this.player.nextswinghs = true;
  }
  canUse() {
    return (
      !this.player.nextswinghs &&
      this.cost <= this.player.rage &&
      (this.player.rage >= this.threshold ||
        (this.player.spells.bloodthirst &&
          this.player.spells.bloodthirst.timer >= this.maincd) ||
        (this.player.spells.mortalstrike &&
          this.player.spells.mortalstrike.timer >= this.maincd))
    );
  }
}

class MortalStrike extends Spell {
  constructor(player) {
    super(player);
    this.cost = 30;
    this.cooldown = 6;
    this.name = 'Mortal Strike';
    this.threshold = parseInt(spells[1].minrage);
  }
  dmg() {
    let dmg;
    if (this.player.weaponrng)
      dmg =
        160 +
        rng(
          this.player.mh.mindmg + this.player.mh.bonusdmg,
          this.player.mh.maxdmg + this.player.mh.bonusdmg
        );
    else
      dmg =
        160 +
        avg(
          this.player.mh.mindmg + this.player.mh.bonusdmg,
          this.player.mh.maxdmg + this.player.mh.bonusdmg
        );
    return dmg + (this.player.stats.ap / 14) * this.player.mh.normSpeed;
  }
  canUse() {
    return (
      this.timer == 0 &&
      this.cost <= this.player.rage &&
      this.player.rage >= this.threshold
    );
  }
}

class Hamstring extends Spell {
  constructor(player) {
    super(player);
    this.cost = 10;
    this.threshold = parseInt(spells[18].minrage);
  }
  dmg() {
    return 45;
  }
  canUse() {
    return (
      this.timer == 0 &&
      this.player.rage >= this.threshold &&
      this.cost <= this.player.rage
    );
  }
}

class SunderArmor extends Spell {
  constructor(player) {
    super(player);
    this.cost = 15 - player.talents.impsunderarmor;
    this.globals = parseInt(spells[16].globals);
    this.threshold = parseInt(spells[16].minrage);
    this.stacks = 0;
    this.nocrit = true;
    this.name = 'Sunder Armor';
    this.basethreat = 261;
  }
  use() {
    this.player.timer = 1500;
    this.player.rage -= this.cost;
    this.stacks++;
  }
  canUse() {
    return (
      (this.player.tankmode ? this.player.rage >= this.threshold : (this.stacks < this.globals)) &&
      this.cost <= this.player.rage
    );
  }
}

class Slam extends Spell {
  constructor(player) {
    super(player);
    this.cost = 0;
    this.casttime = 1500 - player.talents.impslam * 100;
  }
  dmg() {
    let dmg;
    if (this.player.weaponrng)
      dmg =
        87 +
        rng(
          this.player.mh.mindmg + this.player.mh.bonusdmg,
          this.player.mh.maxdmg + this.player.mh.bonusdmg
        );
    else
      dmg =
        87 +
        avg(
          this.player.mh.mindmg + this.player.mh.bonusdmg,
          this.player.mh.maxdmg + this.player.mh.bonusdmg
        );
    return dmg + (this.player.stats.ap / 14) * this.player.mh.speed;
  }
  use() {
    return;
  }
  queue() {
    this.player.timer = 1500;
    this.player.nextswingslam = true;
    this.player.rage -= this.cost;
  }
  canUse() {
    return (
      this.player.timer == 0 &&
      this.player.mh.timer < this.casttime + 10 &&
      this.player.mh.timer > this.casttime - 10 &&
      this.cost <= this.player.rage
    );
  }
}

class Revenge extends Spell {
  constructor(player) {
    super(player);
    this.cost = 5;
    this.cooldown = 6;
    this.name = 'Revenge';
    this.basethreat = player.aqbooks ? 355 : 315;
    this.threshold = parseInt(spells[19].minrage);
  }
  dmg() {
    return this.player.aqbooks ? avg(81, 99) : avg(64, 78);
  }
  canUse() {
    return (
      this.timer == 0 &&
      this.player.rage >= this.threshold &&
      this.cost <= this.player.rage &&
      this.player.revengeTimer > 0
    );
  }
}

class ShieldSlam extends Spell {
  constructor(player) {
    super(player);
    this.cost = 20;
    this.cooldown = 6;
    this.name = 'Shield Slam';
    this.basethreat = 250;
    this.threshold = parseInt(spells[20].minrage);
  }
  dmg() {
    return avg(225, 235) + this.player.stats.blockvalue;
  }
  canUse() {
    return (
      this.timer == 0 &&
      this.cost <= this.player.rage &&
      this.player.rage >= this.threshold &&
      this.player.shield
    );
  }
}

class ShieldBlock extends Spell {  constructor(player) {
    super(player);
    this.cost = 10;
    this.cooldown = 6;
    this.name = 'Shield Block';
    this.threshold = parseInt(spells[21].minrage);
  }
  dmg() {
    return avg(342, 358) + this.player.stats.blockvalue;
  }
  use() {
    this.player.rage -= this.cost;
    this.timer = this.cooldown * 1000;
  }
  canUse() {
    return (
      this.timer == 0 &&
      this.cost <= this.player.rage &&
      this.player.rage >= this.threshold &&
      this.player.shield
    );
  }
}

class Aura {
  constructor(player) {
    this.timer = 0;
    this.stats = {};
    this.mult_stats = {};
    this.player = player;
    this.firstuse = true;
    this.duration = 0;
    this.stacks = 0;
    this.uptime = 0;
    this.name = this.constructor.name;
  }
  use() {
    this.timer = this.duration * 1000;
    this.player.updateAuras();
  }
  step() {
    if (this.timer <= 400) {
      this.uptime += this.timer;
      this.timer = 0;
      this.firstuse = false;
      this.player.updateAuras();
    } else {
      this.uptime += 400;
      this.timer -= 400;
    }
  }
}

class Recklessness extends Aura {
  constructor(player) {
    super(player);
    this.duration = 15;
    this.stats = { crit: 100 };
    this.mult_stats = { dmgtakenmod: 20 };
  }
  use() {
    this.timer = this.duration * 1000;
    this.player.timer = 1500;
    this.player.updateAuras();
  }
  canUse() {
    return this.firstuse && !this.timer;
  }
}

class Enrage extends Aura {
  constructor(player, percentage) {
    super(player);
    this.duration = 12;
    this.mult_stats = { dmgmod: player.talents.enrage };
    this.startstep = 0;
  }
  step() {
    this.stacks--;
    this.uptime += this.player.simulation.step - this.startstep;
    this.startstep = this.player.simulation.step;
    if (!this.stacks) {
      this.timer = 0;
      this.player.updateDmgMod();
    }
  }
  use() {
    this.timer = this.duration * 1000;
    if (!this.stacks) {
      this.timer = 0;
      this.player.updateDmgMod();
    }
    this.stacks = 12;
  }
}

class Flurry extends Aura {
  constructor(player, percentage) {
    super(player);
    this.duration = 12;
    this.mult_stats = { haste: player.talents.flurry };
    this.startstep = 0;
  }
  step() {
    this.stacks--;
    this.uptime += this.player.simulation.step - this.startstep;
    this.startstep = this.player.simulation.step;
    if (!this.stacks) {
      this.timer = 0;
      this.player.updateHaste();
    }
  }
  use() {
    this.timer = this.duration * 1000;
    if (!this.stacks) {
      this.startstep = this.player.simulation.step;
      this.player.updateHaste();
    }
    this.stacks = 3;
  }
}

class DeepWounds extends Aura {
  constructor(player) {
    super(player);
    this.duration = 12;
    this.name = 'Deep Wounds';
    this.totaldmg = 0;
  }
  step(simulation) {
    this.uptime += this.timer < 200 ? this.timer : 200;
    this.timer = this.timer < 200 ? 0 : this.timer - 200;
    if (
      this.timer == 0 ||
      this.timer % 3000 == 0 ||
      this.timer % 6000 == 0 ||
      this.timer % 9000 == 0
    ) {
      let min =
        this.player.mh.mindmg +
        this.player.mh.bonusdmg +
        (this.player.stats.ap / 14) * this.player.mh.speed;
      let max =
        this.player.mh.maxdmg +
        this.player.mh.bonusdmg +
        (this.player.stats.ap / 14) * this.player.mh.speed;
      let dmg = (min + max) / 2;
      dmg *=
        this.player.mh.modifier *
        this.player.stats.dmgmod *
        this.player.talents.deepwounds;
      simulation.idmg += ~~(dmg / 4);
      this.totaldmg += ~~(dmg / 4);
    }
  }
  use() {
    this.timer = this.duration * 1000;
  }
}

class Crusader extends Aura {
  constructor(player) {
    super(player);
    this.duration = 15;
    this.stats = { str: 100 };
  }
  use() {
    this.timer = this.duration * 1000;
    this.player.updateStrength();
  }
  step() {
    if (this.timer <= 400) {
      this.uptime += this.timer;
      this.timer = 0;
      this.firstuse = false;
      this.player.updateStrength();
    } else {
      this.uptime += 400;
      this.timer -= 400;
    }
  }
}

class Cloudkeeper extends Aura {
  constructor(player) {
    super(player);
    this.duration = 30;
    this.stats = { ap: 100 };
  }
  canUse() {
    return this.firstuse && !this.timer;
  }
}

class Felstriker extends Aura {
  constructor(player) {
    super(player);
    this.duration = 3;
    this.stats = { crit: 100, hit: 100 };
  }
  use() {
    this.timer = this.duration * 1000;
    this.player.update();
  }
  step() {
    if (this.timer <= 400) {
      this.uptime += this.timer;
      this.timer = 0;
      this.firstuse = false;
      this.player.update();
    } else {
      this.uptime += 400;
      this.timer -= 400;
    }
  }
}

class DeathWish extends Aura {
  constructor(player) {
    super(player);
    this.duration = 30;
    this.mult_stats = { dmgmod: 20, armormod: -20 };
    this.name = 'Death Wish';
    this.crusaders = parseInt(spells[6].crusaders);
    this.deathwishstep = parseInt(spells[6].time) * 1000;
  }
  use() {
    this.timer = this.duration * 1000;
    this.player.rage -= 10;
    this.player.timer = 1500;
    this.player.updateDmgMod();
  }
  canUse(step) {
    return (
      this.firstuse &&
      !this.timer &&
      this.player.rage >= 10 &&
      (step > this.deathwishstep ||
        (this.crusaders == 1 &&
          ((this.player.auras.crusader1 && this.player.auras.crusader1.timer) ||
            (this.player.auras.crusader2 &&
              this.player.auras.crusader2.timer))) ||
        (this.crusaders == 2 &&
          this.player.auras.crusader1 &&
          this.player.auras.crusader1.timer &&
          this.player.auras.crusader2 &&
          this.player.auras.crusader2.timer))
    );
  }
  step() {
    if (this.timer <= 400) {
      this.uptime += this.timer;
      this.timer = 0;
      this.firstuse = false;
      this.player.updateDmgMod();
    } else {
      this.uptime += 400;
      this.timer -= 400;
    }
  }
}

class BattleStance extends Aura {
  constructor(player) {
    super(player);
    this.duration = 2;
    this.stats = { crit: -3 };
    this.name = 'Battle Stance';
  }
  step() {
    if (this.timer <= 400) {
      this.timer = 0;
      this.firstuse = false;
      this.player.updateAuras();
      this.player.rage = Math.min(
        this.player.rage,
        this.player.talents.rageretained
      );
    } else {
      this.timer -= 400;
    }
  }
}

class JujuFlurry extends Aura {
  constructor(player) {
    super(player);
    this.mult_stats = { haste: 3 };
    this.duration = 20;
    this.name = 'Juju Flurry';
  }
  use() {
    this.timer = this.duration * 1000;
    this.player.timer = 400;
    this.player.updateHaste();
  }
  step() {
    if (this.timer <= 400) {
      this.uptime += this.timer;
      this.timer = 0;
      this.firstuse = false;
      this.player.updateHaste();
    } else {
      this.uptime += 400;
      this.timer -= 400;
    }
  }
  canUse() {
    return this.firstuse && !this.timer;
  }
}

class MightyRagePotion extends Aura {
  constructor(player) {
    super(player);
    this.stats = { str: 60 };
    this.duration = 20;
    this.crusaders = parseInt(spells[13].crusaders);
    this.ragestep = parseInt(spells[13].time) * 1000;
    this.name = 'Mighty Rage Potion';
  }
  use() {
    this.timer = this.duration * 1000;
    this.player.rage = Math.min(this.player.rage + ~~rng(45, 75), 100);
    this.player.timer = 400;
    this.player.updateStrength();
  }
  canUse(step) {
    return (
      this.firstuse &&
      !this.timer &&
      (step > this.ragestep ||
        (this.crusaders == 1 &&
          ((this.player.auras.crusader1 && this.player.auras.crusader1.timer) ||
            (this.player.auras.crusader2 &&
              this.player.auras.crusader2.timer))) ||
        (this.crusaders == 2 &&
          this.player.auras.crusader1 &&
          this.player.auras.crusader1.timer &&
          this.player.auras.crusader2 &&
          this.player.auras.crusader2.timer))
    );
  }
  step() {
    if (this.timer <= 400) {
      this.uptime += this.timer;
      this.timer = 0;
      this.firstuse = false;
      this.player.updateStrength();
    } else {
      this.uptime += 400;
      this.timer -= 400;
    }
  }
}

class BloodFury extends Aura {
  constructor(player) {
    super(player);
    this.duration = 15;
    this.mult_stats = { apmod: 25 };
    this.name = 'Blood Fury';
  }
  use() {
    this.timer = this.duration * 1000;
    this.player.timer = 1500;
    this.player.updateAuras();
  }
  canUse() {
    return this.firstuse && !this.timer;
  }
}

class Berserking extends Aura {
  constructor(player) {
    super(player);
    this.duration = 10;
    this.mult_stats = { haste: parseInt(spells[10].haste) };
  }
  use() {
    this.timer = this.duration * 1000;
    this.player.rage -= 5;
    this.player.timer = 1500;
    this.player.updateHaste();
  }
  step() {
    if (this.timer <= 400) {
      this.uptime += this.timer;
      this.timer = 0;
      this.firstuse = false;
      this.player.updateHaste();
    } else {
      this.uptime += 400;
      this.timer -= 400;
    }
  }
  canUse() {
    return this.firstuse && !this.timer && this.player.rage >= 5;
  }
}

class Empyrean extends Aura {
  constructor(player) {
    super(player);
    this.duration = 10;
    this.mult_stats = { haste: 20 };
    this.name = 'Empyrean Haste';
  }
  use() {
    this.timer = this.duration * 1000;
    this.player.updateHaste();
  }
  step() {
    if (this.timer <= 400) {
      this.uptime += this.timer;
      this.timer = 0;
      this.firstuse = false;
      this.player.updateHaste();
    } else {
      this.uptime += 400;
      this.timer -= 400;
    }
  }
}

class Eskhandar extends Aura {
  constructor(player) {
    super(player);
    this.duration = 5;
    this.mult_stats = { haste: 30 };
    this.name = 'Eskhandar Haste';
  }
  use() {
    this.timer = this.duration * 1000;
    this.player.updateHaste();
  }
  step() {
    if (this.timer <= 400) {
      this.uptime += this.timer;
      this.timer = 0;
      this.firstuse = false;
      this.player.updateHaste();
    } else {
      this.uptime += 400;
      this.timer -= 400;
    }
  }
}

class Zeal extends Aura {
  constructor(player) {
    super(player);
    this.duration = 15;
    this.stats = { bonusdmg: 10 };
  }
  use() {
    this.timer = this.duration * 1000;
    this.player.updateBonusDmg();
  }
  step() {
    if (this.timer <= 400) {
      this.uptime += this.timer;
      this.timer = 0;
      this.firstuse = false;
      this.player.updateBonusDmg();
    } else {
      this.uptime += 400;
      this.timer -= 400;
    }
  }
}

class Annihilator extends Aura {
  constructor(player) {
    super(player);
    this.duration = 45;
    this.armor = 200;
    this.stacks = 0;
  }
  use() {
    if (rng10k() < this.player.target.binaryresist) return;
    this.timer = this.duration * 1000;
    this.stacks = this.stacks > 2 ? 3 : this.stacks + 1;
    this.player.updateArmorReduction();
  }
  step() {
    if (this.timer <= 400) {
      this.uptime += this.timer;
      this.timer = 0;
      this.firstuse = false;
      this.player.updateArmorReduction();
    } else {
      this.uptime += 400;
      this.timer -= 400;
    }
  }
}

class Bonereaver extends Aura {
  constructor(player) {
    super(player);
    this.duration = 10;
    this.armor = 700;
    this.stacks = 0;
  }
  use() {
    this.timer = this.duration * 1000;
    this.stacks = this.stacks > 2 ? 3 : this.stacks + 1;
    this.player.updateArmorReduction();
  }
  step() {
    if (this.timer <= 400) {
      this.uptime += this.timer;
      this.timer = 0;
      this.firstuse = false;
      this.player.updateArmorReduction();
    } else {
      this.uptime += 400;
      this.timer -= 400;
    }
  }
}

class Destiny extends Aura {
  constructor(player) {
    super(player);
    this.duration = 10;
    this.stats = { str: 200 };
  }
}

class Untamed extends Aura {
  constructor(player) {
    super(player);
    this.duration = 8;
    this.stats = { str: 300 };
    this.name = 'The Untamed Blade';
  }
}

class Pummeler extends Aura {
  constructor(player) {
    super(player);
    this.duration = 30;
    this.mult_stats = { haste: 50 };
    this.name = 'Manual Crowd Pummeler';
  }
  use() {
    this.timer = this.duration * 1000;
    this.player.updateHaste();
  }
  step() {
    if (this.timer <= 400) {
      this.uptime += this.timer;
      this.timer = 0;
      this.firstuse = false;
      this.player.updateHaste();
    } else {
      this.uptime += 400;
      this.timer -= 400;
    }
  }
  canUse() {
    return this.firstuse && !this.timer;
  }
}

class Windfury extends Aura {
  constructor(player) {
    super(player);
    this.stats = { ap: 315 };
  }
  use() {
    this.timer = 1500;
    this.stacks = 2;
    this.player.updateAP();
    this.player.extraattacks++;
    this.player.nextswingwf = true;
  }
  proc() {
    if (this.stacks < 2) {
      this.timer = 0;
      this.stacks = 0;
      this.player.updateAP();
    } else {
      this.stacks--;
    }
  }
  step() {
    if (this.timer <= 400) {
      this.timer = 0;
      this.stacks = 0;
      this.firstuse = false;
      this.player.updateAP();
    } else {
      this.timer -= 400;
    }
  }
}

class Swarmguard extends Aura {
  constructor(player) {
    super(player);
    this.duration = 30;
    this.armor = 200;
    this.stacks = 0;
    this.active = false;
  }
  use() {
    if (this.active) {
      this.stacks = this.stacks > 5 ? 6 : this.stacks + 1;
      this.player.updateArmorReduction();
    }
  }
  useBuff() {
    this.active = true;
    this.timer = this.duration * 1000;
  }
  step() {
    if (this.timer <= 400) {
      this.uptime += this.timer;
      this.timer = 0;
      this.firstuse = false;
      this.player.updateArmorReduction();
      this.active = false;
    } else {
      this.uptime += 400;
      this.timer -= 400;
    }
  }
  canUse() {
    return this.firstuse && !this.timer;
  }
}

class Flask extends Aura {
  constructor(player) {
    super(player);
    this.duration = 60;
    this.stats = { str: 75 };
    this.name = 'Diamond Flask';
  }
  canUse() {
    return this.firstuse && !this.timer;
  }
}

class Slayer extends Aura {
  constructor(player) {
    super(player);
    this.duration = 20;
    this.stats = { ap: 260 };
    this.name = "Slayer's Crest";
  }
  canUse() {
    return this.firstuse && !this.timer;
  }
}

class Spider extends Aura {
  constructor(player) {
    super(player);
    this.duration = 15;
    this.mult_stats = { haste: 20 };
    this.name = 'Kiss of the Spider';
  }
  canUse() {
    return this.firstuse && !this.timer;
  }
}

class Earthstrike extends Aura {
  constructor(player) {
    super(player);
    this.duration = 20;
    this.stats = { ap: 280 };
  }
  canUse() {
    return this.firstuse && !this.timer;
  }
}

class Gabbar extends Aura {
  constructor(player) {
    super(player);
    this.duration = 20;
    this.stats = { ap: 65 };
    this.name = 'Jom Gabbar';
  }
  canUse() {
    return this.firstuse && !this.timer;
  }
  use() {
    this.stats.ap = 65;
    this.timer = this.duration * 1000;
    this.player.updateAP();
  }
  step() {
    if (this.timer <= 400) {
      this.uptime += this.timer;
      this.timer = 0;
      this.firstuse = false;
      this.player.updateAP();
    } else {
      if (this.uptime && this.timer % 2000 == 0) {
        this.stats.ap += 65;
        this.player.updateAP();
      }
      this.uptime += 400;
      this.timer -= 400;
    }
  }
}

class PrimalBlessing extends Aura {
  constructor(player) {
    super(player);
    this.duration = 12;
    this.stats = { ap: 300 };
    this.name = 'Primal Blessing';
  }
}

class WarriorsWrath extends Aura {
  constructor(player) {
    super(player);
    this.duration = 15;
    this.name = "Warrior's Wrath";
    this.startstep = 0;
  }
}

class ShieldBlockBuff extends Aura {
  constructor(player) {
    super(player);
    this.duration = 5 + this.player.talents.extrablock * 0.5;
    this.name = "Shield Block";
    this.startstep = 0;
    this.stacks = 0;
    this.stats = { block: 75 };
  }
  use() {
    this.stacks = this.player.talents.extrablock > 0 ? 2 : 1;
    this.timer = this.duration * 1000;
    this.player.updateAuras();
  }
  hit() {
    this.stacks--;
    if (this.stacks === 0) {
      this.timer = 0;
    }
  }
}
