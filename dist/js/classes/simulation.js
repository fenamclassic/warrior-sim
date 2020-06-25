var RESULT = {
  HIT: 0,
  MISS: 1,
  DODGE: 2,
  CRIT: 3,
  GLANCE: 4,
  PARRY: 5,
  BLOCK: 6,
  CRUSH: 7
};

class Simulation {
  constructor(player, target, callback_finished, callback_update) {
    this.player = player;
    this.player.targetref = target;
    this.target = target;
    this.timesecsmin = parseInt($('input[name="timesecsmin"]').val());
    this.timesecsmax = parseInt($('input[name="timesecsmax"]').val());
    this.startrage = parseInt($('input[name="startrage"]').val());
    this.iterations = parseInt($('input[name="simulations"]').val());
    this.idmg = 0;
    this.totaldmg = 0;
    this.ithreat = 0;
    this.totalthreat = 0;
    this.idmgtaken = 0;
    this.totaldmgtaken = 0;
    this.totalragewasted = 0;
    this.totalduration = 0;
    this.mindps = 99999;
    this.maxdps = 0;
    this.mintps = 99999;
    this.maxtps = 0;
    this.mindtps = 99999;
    this.maxdtps = 0;
    this.maxcallstack = Math.min(Math.floor(this.iterations / 10), 1000);
    this.starttime = 0;
    this.endtime = 0;
    this.cb_update = callback_update;
    this.cb_finished = callback_finished;
    this.player.simulation = this;
    this.spread = [];
    this.tpsspread = [];
    this.dtpsspread = [];

    // this.steps
    this.bloodfurystep = parseInt(spells[11].time) * 1000;
    this.berserkingstep = parseInt(spells[10].time) * 1000;
    this.reckstep = parseInt(spells[7].time) * 1000;
    this.priorityap = parseInt(spells[4].priorityap);
  }
  start() {
    this.run(1);
    this.starttime = new Date().getTime();
  }
  run(iteration) {
    this.step = 1;
    this.idmg = 0;
    this.ithreat = 0;
    this.idmgtaken = 0;
    let player = this.player;
    let target = this.target;
    player.reset(this.startrage);
    this.maxsteps = rng(this.timesecsmin * 1000, this.timesecsmax * 1000);
    this.duration = this.maxsteps / 1000;
    this.executestep = Math.max(
      this.maxsteps - parseInt(spells[4].lasttime) * 1000,
      0
    );
    this.fifteenstep = Math.max(this.maxsteps - 16000, 0);
    this.twentystep = Math.max(this.maxsteps - 21000, 0);
    this.thirtystep = Math.max(this.maxsteps - 31000, 0);
    this.sixtystep = Math.max(this.maxsteps - 61000, 0);
    while (this.step < this.maxsteps) {
      let next;
      let nextbatch = 400 - (this.step % 400);

      if (
        player.mh.timer >= nextbatch &&
        (!player.oh || player.oh.timer >= nextbatch) &&
        (player.tankmode ? target.timer >= nextbatch : true)
      )
        next = nextbatch;
      else {
        let tmpnext = Math.min(player.mh.timer, player.oh ? player.oh.timer : 9999);
        next = player.tankmode ? Math.min(tmpnext, target.timer) : tmpnext;
      }

      this.step += next;
      let batch = this.step % 400 == 0;
      if (batch && this.step % 3000 <= 200 && player.talents.angermanagement)
        player.rage = player.rage >= 99 ? 100 : player.rage + 1;
      if (batch && player.vaelbuff && this.step % 1000 <= 200)
        player.rage = player.rage >= 80 ? 100 : player.rage + 20;

      player.mh.step(next);
      if (player.oh) player.oh.step(next);
      if (player.tankmode) target.step(next);
      if (batch) player.step(this);

      if (player.mh.timer == 0) {
        let attack = player.attackmh(player.mh, player.nextswingwf);
        this.idmg += attack.dmg;
        this.ithreat += attack.threat;
      }
      if (player.oh && player.oh.timer == 0) {
        let attack = player.attackoh(player.oh);
        this.idmg += attack.dmg;
        this.ithreat += attack.threat;
      }
      if (player.tankmode && target.timer === 0) {
        let attack = target.attack();
        this.idmgtaken += attack.dmg;
      }

      if (batch && player.timer == 0) {
        if (player.spells.bloodrage && player.spells.bloodrage.canUse()) {
          player.spells.bloodrage.use();
        } else if (
          player.auras.mightyragepotion &&
          player.auras.mightyragepotion.canUse(this.step)
        ) {
          player.auras.mightyragepotion.use();
        } else if (
          player.auras.cloudkeeper &&
          player.auras.cloudkeeper.canUse() &&
          this.step > this.thirtystep
        ) {
          player.auras.cloudkeeper.use();
        } else if (
          player.auras.flask &&
          player.auras.flask.canUse() &&
          this.step > this.sixtystep
        ) {
          player.auras.flask.use();
        } else if (
          player.auras.slayer &&
          player.auras.slayer.canUse() &&
          this.step > this.twentystep
        ) {
          player.auras.slayer.use();
        } else if (
          player.auras.spider &&
          player.auras.spider.canUse() &&
          this.step > this.fifteenstep
        ) {
          player.auras.spider.use();
        } else if (
          player.auras.gabbar &&
          player.auras.gabbar.canUse() &&
          this.step > this.twentystep
        ) {
          player.auras.gabbar.use();
        } else if (
          player.auras.earthstrike &&
          player.auras.earthstrike.canUse() &&
          this.step > this.twentystep
        ) {
          player.auras.earthstrike.use();
        } else if (
          player.auras.swarmguard &&
          player.auras.swarmguard.canUse() &&
          this.step > this.thirtystep
        ) {
          player.auras.swarmguard.useBuff();
        } else if (
          player.auras.pummeler &&
          player.auras.pummeler.canUse() &&
          this.step > this.thirtystep
        ) {
          player.auras.pummeler.use();
        } else if (
          !player.tankmode &&
          player.spells.sunderarmor &&
          player.spells.sunderarmor.canUse()
        ) {
          let spell = player.cast(player.spells.sunderarmor);
          this.idmg += spell.dmg;
          this.ithreat += spell.threat;
        } else if (
          player.auras.deathwish &&
          player.auras.deathwish.canUse(this.step)
        ) {
          player.auras.deathwish.use();
        } else if (
          player.auras.bloodfury &&
          player.auras.bloodfury.canUse() &&
          this.step > this.bloodfurystep
        ) {
          player.auras.bloodfury.use();
        } else if (
          player.auras.berserking &&
          player.auras.berserking.canUse() &&
          this.step > this.berserkingstep
        ) {
          player.auras.berserking.use();
        } else if (
          player.auras.recklessness &&
          player.auras.recklessness.canUse() &&
          this.step > this.reckstep
        ) {
          player.auras.recklessness.use();
        } else if (player.spells.execute && this.step > this.executestep) {
          if (
            player.spells.bloodthirst &&
            player.stats.ap >= this.priorityap &&
            player.spells.bloodthirst.canUse()
          ) {
            let spell = player.cast(player.spells.bloodthirst);
            this.idmg += spell.dmg;
            this.ithreat += spell.threat;
          } else if (
            player.spells.mortalstrike &&
            player.stats.ap >= this.priorityap &&
            player.spells.mortalstrike.canUse()
          ) {
            let spell = player.cast(player.spells.mortalstrike);
            this.idmg += spell.dmg;
            this.ithreat += spell.threat;
          } else if (player.spells.execute.canUse()) {
            let spell = player.cast(player.spells.execute);
            this.idmg += spell.dmg;
            this.ithreat += spell.threat;
          }
        } else if (
          player.spells.overpower &&
          player.spells.overpower.canUse()
        ) {
          let spell = player.cast(player.spells.overpower);
          this.idmg += spell.dmg;
          this.ithreat += spell.threat;
        } else if (
          player.spells.bloodthirst &&
          player.spells.bloodthirst.canUse()
        ) {
          let spell = player.cast(player.spells.bloodthirst);
          this.idmg += spell.dmg;
          this.ithreat += spell.threat;
        } else if (
          player.spells.shieldslam &&
          player.spells.shieldslam.canUse()
        ) {
          let spell = player.cast(player.spells.shieldslam);
          this.idmg += spell.dmg;
          this.ithreat += spell.threat;
        } else if (
          player.spells.mortalstrike &&
          player.spells.mortalstrike.canUse()
        ) {
          let spell = player.cast(player.spells.mortalstrike);
          this.idmg += spell.dmg;
          this.ithreat += spell.threat;
        } else if (
          player.spells.revenge &&
          player.spells.revenge.canUse()
        ) {
          let spell = player.cast(player.spells.revenge);
          this.idmg += spell.dmg;
          this.ithreat += spell.threat;
        } else if (
          player.tankmode &&
          player.spells.sunderarmor &&
          player.spells.sunderarmor.canUse()
        ) {
          let spell = player.cast(player.spells.sunderarmor);
          this.idmg += spell.dmg;
          this.ithreat += spell.threat;
        } else if (
          player.spells.whirlwind &&
          player.spells.whirlwind.canUse()
        ) {
          let spell = player.cast(player.spells.whirlwind);
          this.idmg += spell.dmg;
          this.ithreat += spell.threat;
        } else if (
          player.spells.hamstring &&
          player.spells.hamstring.canUse()
        ) {
          let spell = player.cast(player.spells.hamstring);
          this.idmg += spell.dmg;
          this.ithreat += spell.threat;
        }
      }

      if (
        batch &&
        player.spells.shieldblock &&
        player.spells.shieldblock.canUse()
      ) {
        player.spells.shieldblock.use();
        player.auras.shieldblockbuff.use();
      }

      if (
        batch &&
        player.spells.heroicstrike &&
        player.spells.heroicstrike.canUse()
      ) {
        player.spells.heroicstrike.use();
      }

      if (
        batch &&
        player.spells.heroicstrike &&
        player.mh.timer <= 400 &&
        player.rage < player.spells.heroicstrike.unqueue
      ) {
        this.player.nextswinghs = false;
      }

      if (player.extraattacks > 0) {
        player.mh.timer = 0;
        player.extraattacks--;
      }
      if (player.batchedextras > 0) {
        player.mh.timer = 400 - (this.step % 400);
        player.batchedextras--;
      }
    }

    this.totaldmg += this.idmg;
    this.totalthreat += this.ithreat;
    this.totaldmgtaken += this.idmgtaken;
    this.totalragewasted += this.player.ragewasted;
    this.totalduration += this.duration;

    let dps = this.idmg / this.duration;
    if (dps < this.mindps) this.mindps = dps;
    if (dps > this.maxdps) this.maxdps = dps;
    dps = Math.round(dps);
    if (!this.spread[dps]) this.spread[dps] = 1;
    else this.spread[dps]++;

    let tps = this.ithreat / this.duration;
    if (tps < this.mintps) this.mintps = tps;
    if (tps > this.maxtps) this.maxtps = tps;
    tps = Math.round(tps);
    if (!this.tpsspread[tps]) this.tpsspread[tps] = 1;
    else this.tpsspread[tps]++;

    let dtps = this.idmgtaken / this.duration;
    if (dtps < this.mindtps) this.mindtps = dtps;
    if (dtps > this.maxdtps) this.maxdtps = dtps;
    dtps = Math.round(dtps);
    if (!this.dtpsspread[dtps]) this.dtpsspread[dtps] = 1;
    else this.dtpsspread[dtps]++;

    if (iteration == this.iterations) {
      this.endtime = new Date().getTime();
      if (this.cb_finished) this.cb_finished();
    } else if (iteration % this.maxcallstack == 0) {
      let view = this;
      if (this.cb_update) this.cb_update(iteration);
      setTimeout(function() {
        view.run(iteration + 1);
      }, 0);
    } else {
      this.run(iteration + 1);
    }
  }
}

function rng(min, max) {
  return ~~(Math.random() * (max - min + 1) + min);
}

function rng10k() {
  return ~~(Math.random() * 10000);
}

function avg(min, max) {
  return (min + max) / 2;
}
