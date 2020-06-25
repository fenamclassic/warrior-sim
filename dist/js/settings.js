var SIM = SIM || {};

SIM.SETTINGS = {
  init: function() {
    var view = this;
    view.variables();
    view.events();
    view.buildSpells();
    view.buildBuffs();
    view.buildTalents();
  },

  variables: function() {
    var view = this;
    view.body = $('body');
    view.buffs = view.body.find('article.buffs');
    view.fight = view.body.find('article.fight');
    view.rotation = view.body.find('article.rotation');
    view.talents = view.body.find('article.talents');
    view.filter = view.body.find('article.filter');
    view.presets = view.body.find('article.presets');
    view.close = view.body.find('section.settings .btn-close');
    view.bg = view.body.find('section.sidebar .bg');
  },

  events: function() {
    var view = this;

    view.close.click(function(e) {
      e.preventDefault();
      $('.js-settings').removeClass('active');
      $('section.settings').removeClass('active');
    });

    view.buffs.on('click', '.icon', function() {
      let obj = $(this).toggleClass('active');
      if (obj.data('group') === 'stance') {
        $(this).addClass('active');
      }
      if (obj.hasClass('active')) {
        if (obj.data('group')) {
          obj
            .siblings()
            .filter('[data-group="' + obj.data('group') + '"]')
            .removeClass('active');
        }
        if (obj.data('disable-spell'))
          $(
            '.rotation [data-id="' + obj.data('disable-spell') + '"]'
          ).removeClass('active');
      }
      for (let buff of buffs) {
        buff.active = view.buffs
          .find('[data-id="' + buff.id + '"]')
          .hasClass('active');
      }
      SIM.UI.updateSession();
      SIM.UI.updateSidebar();
    });

    view.talents.on('click', '.icon', function(e) {
      let talent = view.getTalent($(this));
      talent.c = talent.c < talent.m ? talent.c + 1 : talent.m;
      $(this).attr('data-count', talent.c);
      if (talent.c >= talent.m) $(this).addClass('maxed');
      if (talent.enable)
        $('.rotation [data-id="' + talent.enable + '"]').removeClass('hidden');
      $(this)
        .find('a')
        .attr(
          'href',
          'https://classic.wowhead.com/spell=' +
            talent.s[talent.c == 0 ? 0 : talent.c - 1]
        );
      SIM.UI.updateSession();
      SIM.UI.updateSidebar();
    });

    view.talents.on('contextmenu', '.icon', function(e) {
      e.preventDefault();
      let talent = view.getTalent($(this));
      talent.c = talent.c < 1 ? 0 : talent.c - 1;
      $(this).attr('data-count', talent.c);
      $(this).removeClass('maxed');
      if (talent.c == 0 && talent.enable) {
        $('.rotation [data-id="' + talent.enable + '"]')
          .removeClass('active')
          .addClass('hidden');
        for (let spell of spells)
          if (spell.id == talent.enable) spell.active = false;
      }
      $(this)
        .find('a')
        .attr(
          'href',
          'https://classic.wowhead.com/spell=' +
            talent.s[talent.c == 0 ? 0 : talent.c - 1]
        );
      SIM.UI.updateSession();
      SIM.UI.updateSidebar();
    });

    view.filter.on('click', '.sources li', function(e) {
      $(this).toggleClass('active');
      if ($(this).hasClass('active')) {
        let id = $(this).data('id');
        view.filter.find(`.phases [data-sources*="${id}"]`).addClass('active');
      }
      SIM.UI.updateSession();
      SIM.UI.filterGear();
    });

    view.filter.on('click', '.phases li', function(e) {
      $(this).toggleClass('active');
      let sources = $(this)
        .data('sources')
        .split(',');
      let show = $(this).hasClass('active');
      for (let source of sources) {
        if (show)
          view.filter
            .find('.sources [data-id="' + source + '"]')
            .addClass('active');
        else
          view.filter
            .find('.sources [data-id="' + source + '"]')
            .removeClass('active');
      }
      SIM.UI.updateSession();
      SIM.UI.filterGear();
    });

    view.rotation.on('click', '.spell', function(e) {
      let t = e.target;
      if (t.nodeName == 'LI' || t.nodeName == 'INPUT') return;
      $(this).toggleClass('active');
      let id = $(this).data('id');
      for (let spell of spells) {
        if (spell.id == id) spell.active = $(this).hasClass('active');
      }
      SIM.UI.updateSession();
    });

    view.rotation.on('keyup', 'input[type="text"]', function(e) {
      let id = $(this)
        .parents('.spell')
        .data('id');
      for (let spell of spells) {
        if (spell.id == id) spell[$(this).attr('name')] = $(this).val();
      }
      SIM.UI.updateSession();
    });

    view.fight.on('change', 'select[name="race"]', function(e) {
      var val = $(this).val();
      var bloodfury = view.rotation.find('[data-id="20572"]');
      var berserking = view.rotation.find('[data-id="26296"]');
      var disableSpell;

      if (val == 'Orc') {
        bloodfury.removeClass('hidden');
      } else {
        bloodfury.addClass('hidden').removeClass('active');
        disableSpell = 20572;
      }
      if (val == 'Troll') {
        berserking.removeClass('hidden');
      } else {
        berserking.addClass('hidden').removeClass('active');
        disableSpell = 26296;
      }

      for (let spell of spells) {
        if (spell.id == disableSpell) spell.active = false;
      }

      view.bg.attr('data-race', val);

      SIM.UI.updateSession();
      SIM.UI.updateSidebar();
    });

    view.fight.on('change', 'select[name="aqbooks"]', function(e) {
      SIM.UI.updateSession();
      SIM.UI.updateSidebar();
    });

    view.fight.on('keyup', 'input[type="text"]', function(e) {
      SIM.UI.updateSession();
      SIM.UI.updateSidebar();
    });

    view.fight.on('change', 'select[name="weaponrng"]', function(e) {
      SIM.UI.updateSession();
      SIM.UI.updateSidebar();
    });

    view.fight.on('change', 'select[name="tankmode"]', function(e) {
      view.resetUI();
      view.buildSpells();
      view.buildBuffs();
      view.buildTalents();

      SIM.UI.updateSession();
      SIM.UI.updateSidebar();
    });

    view.presets.on('click', '.buff li', function(e) {
      let btn = $(this);
      let _buffs = [];
      view.buffs.find('.active').each(function() {
        _buffs.push($(this).attr('data-id'));
      });
      let _wbuffs = [
        '22888', // Rallying Cry of the Dragonslayer
        '24425', // Spirit of Zandalar
        //'23768', // Sayge's Dark Fortune of Damage
        '22817', // Fengus' Ferocity
        '22818', // Mol'dar's Moxie
        //'22820', // Slip'kik's Savvy
        '15366' // Songflower Serenade
        //'16609', // Warchief's Blessing
      ];
      if (btn.hasClass('active')) {
        btn.removeClass('active');
        _wbuffs.forEach((value, index, array) => {
          if (_buffs.indexOf(value) > -1)
            _buffs.splice(_buffs.indexOf(value), 1);
          view.buffs.find(`[data-id="${value}"]`).removeClass('active');
        });
      } else {
        btn.addClass('active');
        _wbuffs.forEach((value, index, array) => {
          if (_buffs.indexOf(value) === -1) _buffs.push(value);
          view.buffs.find(`[data-id="${value}"]`).addClass('active');
        });
      }

      for (let buff of buffs) {
        buff.active = view.buffs
          .find('[data-id="' + buff.id + '"]')
          .hasClass('active');
      }

      SIM.UI.updateSession();
      SIM.UI.updateSidebar();
    });

    view.presets.on('click', '.spec li', function(e) {
      let btn = $(this);
      if (!btn.hasClass('active')) {
        btn.toggleClass('active');
        btn.siblings().removeClass('active');

        localStorage.clear();

        switch (btn.data('id')) {
          case 'dps': {
            SIM.UI.loadCustomSession('default');
            break;
          }
          case 'tank-prot': {
            SIM.UI.loadCustomSession('prot');
            break;
          }
          case 'tank-fprot': {
            SIM.UI.loadCustomSession('fprot');
            break;
          }
          default:
            break;
        }

        view.resetUI();
        view.buildSpells();
        view.buildBuffs();
        view.buildTalents();

        SIM.UI.updateSession();
        SIM.UI.updateSidebar();
      }
    });

    view.presets.on('click', '.setup li', function(e) {
      localStorage.clear();
      SIM.UI.loadCustomSession('tf');
      view.resetUI();
      view.buildSpells();
      view.buildBuffs();
      view.buildTalents();
      SIM.UI.updateSession();
      SIM.UI.updateSidebar();
    });
  },

  copyBuffs: function() {
    let _buffs = [];
    for (let buff in buffs) {
      if (buffs[buff].active) {
        _buffs.push(buffs[buff].id);
      }
    }
    return _buffs;
  },

  copySpells: function() {
    return spells;
  },

  copySources: function() {
    let _sources = [];
    this.filter.find('.sources .active').each(function() {
      _sources.push($(this).attr('data-id'));
    });
    return _sources;
  },

  copyPhases: function() {
    let _phases = [];
    this.filter.find('.phases .active').each(function() {
      _phases.push($(this).attr('data-id'));
    });
    return _phases;
  },

  copyTalents: function() {
    let _talents = [];
    for (let tree in talents) {
      let values = [];
      for (let val in talents[tree].t) {
        values.push(talents[tree].t[val].c);
      }
      _talents.push({ n: talents[tree].n, t: values });
    }
    return _talents;
  },

  copyGear: function() {
    let _gear = {};
    for (let type in gear) {
      _gear[type] = [];
      for (let item in gear[type]) {
        let temp = {};
        temp.id = gear[type][item].id;
        temp.selected = gear[type][item].selected;
        temp.dps = gear[type][item].dps;
        temp.tps = gear[type][item].tps;
        temp.dtps = gear[type][item].dtps;
        _gear[type].push(temp);
      }
    }
    return _gear;
  },

  copyEnchants: function() {
    let _enchants = {};
    for (let type in enchant) {
      _enchants[type] = [];
      for (let item in enchant[type]) {
        let temp = {};
        temp.id = enchant[type][item].id;
        temp.selected = enchant[type][item].selected;
        temp.dps = enchant[type][item].dps;
        temp.tps = enchant[type][item].tps;
        temp.dtps = enchant[type][item].dtps;
        _enchants[type].push(temp);
      }
    }
    return _enchants;
  },

  copyAll: function() {
    let obj = {};
    obj.buffs = this.copyBuffs();
    obj.rotation = this.copySpells();
    obj.sources = this.copySources();
    obj.phases = this.copyPhases();
    obj.talents = this.copyTalents();
    obj.gear = this.copyGear();
    obj.enchant = this.copyEnchants();
    return ify(obj);
  },

  buildSpells: function() {
    var view = this;
    for (let spell of spells) {
      let div = $(`<div data-id="${spell.id}" class="spell"><div class="icon">
            <img src="dist/img/${spell.iconname.toLowerCase()}.jpg " alt="${
        spell.name
      }">
            <a href="https://classic.wowhead.com/spell=${
              spell.id
            }" class="wh-tooltip"></a>
            </div><ul class="options"></ul></div>`);

      if (spell.time == -1)
        div.find('.options').append('<li>Used on cooldown</li>');
      if (spell.time > -1)
        div
          .find('.options')
          .append(
            `<li>Use at <input type="text" name="time" value="${spell.time}" data-numberonly="true" /> seconds</li>`
          );
      if (spell.lasttime > -1)
        div
          .find('.options')
          .append(
            `<li>Use on last <input type="text" name="lasttime" value="${spell.lasttime}" data-numberonly="true" /> seconds</li>`
          );
      if (spell.minrage !== undefined)
        div
          .find('.options')
          .append(
            `<li>Use when above <input type="text" name="minrage" value="${spell.minrage}" data-numberonly="true" /> rage</li>`
          );
      if (spell.maxrage !== undefined)
        div
          .find('.options')
          .append(
            `<li>Use when below <input type="text" name="maxrage" value="${spell.maxrage}" data-numberonly="true" /> rage</li>`
          );
      if (spell.globals !== undefined)
        div
          .find('.options')
          .append(
            `<li>Use on first <input type="text" name="globals" value="${spell.globals}" data-numberonly="true" /> globals</li>`
          );
      if (spell.maincd !== undefined)
        div
          .find('.options')
          .append(
            `<li>BT/MS cooldown >= <input type="text" name="maincd" value="${spell.maincd}" data-numberonly="true" /> secs</li>`
          );
      if (spell.crusaders !== undefined)
        div
          .find('.options')
          .append(
            `<li>when <input type="text" name="crusaders" value="${spell.crusaders}" data-numberonly="true" /> crusaders are up</li>`
          );
      if (spell.haste !== undefined)
        div
          .find('.options')
          .append(
            `<li>Attack speed at <input type="text" name="haste" value="${spell.haste}" data-numberonly="true" /> %</li>`
          );
      if (spell.priorityap !== undefined)
        div
          .find('.options')
          .append(
            `<li>Prioritize BT/MS when >= <input style="width:25px" type="text" name="priorityap" value="${spell.priorityap}" data-numberonly="true" /> AP</li>`
          );
      if (spell.id == 23255)
        div.find('.options').append(`<li>Include Deep Wounds damage</li>`);
      if (spell.id == 11605)
        div.find('.options').append(`<li>Slam macro with MH swing</li>`);
      if (spell.id == 2687)
        div.find('.options').append('<li>Used on cooldown below 80 rage</li>');
      if (spell.hidden) div.addClass('hidden');
      if (localStorage.race == 'Orc' && spell.id == 20572)
        div.removeClass('hidden');
      if (localStorage.race == 'Troll' && spell.id == 26296)
        div.removeClass('hidden');
      if (spell.active) div.addClass('active');

      if (spell.maincd !== undefined) {
        div.find('.options li:first-of-type').append(' or');
      }

      if (spell.crusaders !== undefined) {
        div.find('.options li:first-of-type').append(' or');
      }

      if (spell.id == 11567) {
        div.find('.options').empty();
        div
          .find('.options')
          .append(
            `<li>Queue when above <input type="text" name="minrage" value="${spell.minrage}" data-numberonly="true"> rage or BT/MS cooldown >= <input type="text" name="maincd" value="4" data-numberonly="true"> secs</li>`
          );
        div
          .find('.options')
          .append(
            `<li>Unqueue if below <input type="text" name="unqueue" value="${spell.unqueue}" data-numberonly="true" /> rage on swing</li>`
          );
      }

      if (spell.id == 11585) {
        div.find('.options').empty();
        div
          .find('.options')
          .append(
            `<li>Use when below <input type="text" name="maxrage" value="${spell.maxrage}" data-numberonly="true" /> rage and</li>`
          );
        div
          .find('.options')
          .append(
            `<li>BT/MS cooldown >= <input type="text" name="maincd" value="${spell.maincd}" data-numberonly="true" /> secs</li>`
          );
      }

      if (spell.id == 11597) {
        div.find('.options').empty();
        if ($('select[name="tankmode"]').val() === 'Yes') {
          div
            .find('.options')
            .append(
              `<li>Use when above <input type="text" name="minrage" value="${spell.minrage}" data-numberonly="true" /> rage</li>`
            );
        } else {
          div
            .find('.options')
            .append(
              `<li>Use on first <input type="text" name="globals" value="${spell.globals}" data-numberonly="true" /> globals</li>`
            );
        }
      }

      view.rotation.append(div);
    }

    view.rotation
      .children()
      .eq(3)
      .appendTo(view.rotation);
  },

  buildBuffs: function() {
    var view = this;
    for (let buff of buffs) {
      let wh = buff.spellid ? 'spell' : 'item';
      let active = buff.active ? 'active' : '';
      let group = buff.group ? `data-group="${buff.group}"` : '';
      let disable = buff.disableSpell
        ? `data-disable-spell="${buff.disableSpell}"`
        : '';
      let html = `<div data-id="${
        buff.id
      }" class="icon ${active}" ${group} ${disable}>
                            <img src="dist/img/${buff.iconname.toLowerCase()}.jpg " alt="${
        buff.name
      }">
                            <a href="https://classic.wowhead.com/${wh}=${
        buff.id
      }" class="wh-tooltip"></a>
                        </div>`;
      view.buffs.append(html);
    }
  },

  buildTalents: function() {
    var view = this;
    for (let tree of talents) {
      let table = $(
        '<table><tr><th colspan="4">' + tree.n + '</th></tr></table>'
      );
      for (let i = 0; i < 7; i++)
        table.prepend('<tr><td></td><td></td><td></td><td></td></tr>');
      for (let talent of tree.t) {
        let div = $(
          '<div class="icon" data-count="' +
            talent.c +
            '" data-x="' +
            talent.x +
            '" data-y="' +
            talent.y +
            '"></div>'
        );
        div.html(
          '<img src="dist/img/' +
            talent.iconname.toLowerCase() +
            '.jpg" alt="' +
            talent.n +
            '" />'
        );
        if (talent.c >= talent.m) div.addClass('maxed');
        if (talent.enable && talent.c == 0)
          view.rotation
            .find('[data-id="' + talent.enable + '"]')
            .addClass('hidden');
        if (talent.enable && talent.c > 0)
          view.rotation
            .find('[data-id="' + talent.enable + '"]')
            .removeClass('hidden');
        div.append(
          '<a href="https://classic.wowhead.com/spell=' +
            talent.s[talent.c == 0 ? 0 : talent.c - 1] +
            '" class="wh-tooltip"></a>'
        );
        table
          .find('tr')
          .eq(talent.y)
          .children()
          .eq(talent.x)
          .append(div);
      }
      view.talents.append(table);
    }
  },

  getTalent: function(div) {
    let tree = div.parents('table').index();
    let x = div.data('x');
    let y = div.data('y');
    for (let talent of talents[tree - 1].t)
      if (talent.x == x && talent.y == y) return talent;
  },

  resetTalents: function() {
    var view = this;
    view.talents.find('table').remove();
    view.buildTalents();
  },

  resetUI: function() {
    var view = this;
    view.buffs.find('*:not(".tag")').remove();
    view.rotation.find('*:not(".tag")').remove();
    view.talents.find('*:not(".tag")').remove();
  }
};
