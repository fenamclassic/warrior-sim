class Target {
  constructor(player, level, basedamage, attackspeed) {
      this.player = player;
      this.level = level;

      this.basedamage = basedamage;
      this.attackspeed = attackspeed;

      this.totaldamage = 0;

      this.timer = 0;
      this.revengeTimer = 0;
      this.auras = {};
      this.attacktable = {};
      this.damagereduction = 0;

      this.data = [0,0,0,0,0,0,0,0];

      this.update();
  }    
  getCrushChance() {
      return Math.max((this.level - this.player.level) * 5 * 2 - 15, 0);
  }
  getMissChance() {
      return Math.max(5 + (this.level * 5 - this.player.base.defense) * 0.04 , 0);
  }
  getCritChance() {
      return Math.max(5 - (this.level * 5 - this.player.base.defense) * 0.04 , 0);
  }
  getDodgeChance() {
      return Math.max(this.player.stats.dodge, 0);
  }
  getParryChance() {
      return Math.max(this.player.stats.parry, 0);
  }
  getBlockChance() {
      return this.player.shield ? Math.max(this.player.stats.block, 0) : 0;
  }
  getArmorReduction() {
      let r = this.player.stats.ac / (this.player.stats.ac + 400 + 85 * this.player.level);
      return r > 0.75 ? 0.75 : r;
  }

  update() {
    this.attacktable.crush = this.getCrushChance();
    this.attacktable.miss = this.getMissChance();
    this.attacktable.crit = this.getCritChance();
    this.attacktable.dodge = this.getDodgeChance();
    this.attacktable.parry = this.getParryChance();
    this.attacktable.block = this.getBlockChance();
    this.damagereduction = this.getArmorReduction();
  }

  rollAttack() {        
    let tmp = 0;
    let roll = rng10k();
    tmp += this.attacktable.miss * 100;
    if (roll < tmp) return RESULT.MISS;
    tmp += this.attacktable.dodge * 100;
    if (roll < tmp) return RESULT.DODGE;
    tmp += this.attacktable.parry * 100;
    if (roll < tmp) return RESULT.PARRY;
    tmp += this.attacktable.block * 100;
    if (roll < tmp) return RESULT.BLOCK;
    tmp += this.attacktable.crit * 100;
    if (roll < tmp) return RESULT.CRIT;
    tmp += this.attacktable.crush * 100;
    if (roll < tmp) return RESULT.CRUSH;
    return RESULT.HIT;
  }

  rollDamage(damage, result, armor) {
    let final = damage;

    switch(result) {
      case RESULT.MISS: 
        final = 0;
        break;
      case RESULT.DODGE: 
        final = 0;
        break;
      case RESULT.PARRY: 
        final = 0;
        break;
      case RESULT.BLOCK: 
        final = damage - this.player.stats.blockvalue;
        break;
      case RESULT.CRIT: 
        final *= 2;
        break;
      case RESULT.CRUSH: 
        final *= 1.5;
        break;
      default: 
        break;
    }

    return final * (1 - armor);
  }

  attack() {
    this.update();
    let result = this.rollAttack();
    this.data[result]++;

    let dmg = this.rollDamage(this.basedamage, result, this.damagereduction ? this.damagereduction : 0);

    if (result === RESULT.DODGE) {
      this.player.revengeTimer = 5000;
    } else if (result === RESULT.PARRY) {
      this.player.revengeTimer = 5000;
      this.player.mh.parryHaste();
    } else if (result === RESULT.BLOCK) {
      this.player.revengeTimer = 5000;
      if (this.player.talents.blockragechance) {
        let tmp = rng10k();
        if (tmp < this.player.talents.blockragechance * 100) {
          this.player.rage += 1;
          if (this.player.rage > 100) {
            this.player.ragewasted = this.player.rage - 100;
            this.player.rage = 100;
          }
        }
      }
      if (this.player.auras.shieldblockbuff) {
        this.player.auras.shieldblockbuff.hit();
      }
      if (this.player.stats.blockvalue > 0) {
        dmg = Math.max(dmg - this.player.stats.blockvalue, 0);
      } 
    } else if (result === RESULT.CRIT) {
      this.player.proccrittaken();
    }

    dmg *= this.player.stats.dmgtakenmod;

    let conversionFactor = 0.0091107836 * Math.pow(this.player.level, 2) + 3.225598133 * this.player.level + 4.2652911;
    let rage = dmg / conversionFactor * 2.5;
    this.player.rage += rage;
    if (this.player.rage > 100) {
      this.player.ragewasted = this.player.rage - 100;
      this.player.rage = 100;
    }

    this.totaldamage += dmg;
    this.timer = this.attackspeed * 1000;

    return { dmg: dmg, result: result };
  }

  parryHaste() {
    if (this.timer > this.attackspeed * 1000 * 0.6) {
      this.timer -= this.attackspeed * 1000 * 0.4;
    } else if (this.timer > this.attackspeed * 1000 * 0.2) {
      this.timer -= this.timer * 0.2;
    }
  }

  step(next) {
    this.timer -= next;
    this.revengeTimer -= next;
  }
}
