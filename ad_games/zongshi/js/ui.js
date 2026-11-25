import {
  ASSET, QUALITIES, SECTS, MARTIAL_ARTS, MARTIAL_BY_ID,
  REALMS, CHAPTERS, getStageConfig, TIANSHU_NODES,
  EQUIP_SLOTS, DIVINE_WEAPONS, TRAVEL_SPOTS, generateEquipment,
} from './data.js?v=14';
import { gameState, formatTierName } from './state.js?v=14';
import { audio } from './audio.js?v=14';
import { RoleHeroViewer3D, XiuweiHeroViewer3D } from './scene3d.js?v=14';

export const ToastZeroEmoji = true;
const SECT_ORDER = ['shaolin', 'wudang', 'jiange', 'xiaoyao', 'dengxian'];

export class UIController {
  constructor(battle) {
    this.battle = battle;
    this.roleViewer = null;
    this.xiuweiViewer = null;
    this.activeTab = 'lianggong';
    this.shimenView = 'hub'; // 'hub' | 'xiuwei' | 'tianshu' | 'shenbing'
    this.tianshuSub = 'tree'; // 'tree' | 'tupu' | 'jiban' | 'gift'
    this.bondPageIdx = 1; // 默认展示第2页【武当】对齐 046_bond_page2.png，可左右翻页浏览全部5大门派
    this.bagFilter = 'all';

    this.drag = null;
    this.ghostEl = document.getElementById('drag-ghost');
    this.modalRoot = document.getElementById('modal-root');
    this.revealRoot = document.getElementById('reveal-root');
    this.toastRoot = document.getElementById('toast-root');

    this._bindGlobalControls();
    this._bindDragHandlers();
  }

  toast(msg) {
    const el = document.createElement('div');
    el.className = 'toast-item';
    el.textContent = msg;
    this.toastRoot.appendChild(el);
    setTimeout(() => el.remove(), 2200);
  }

  playMergeVfxOnCell(idx) {
    const cell = document.querySelector(`.grid-cell[data-idx="${idx}"]`);
    if (!cell) return;
    const fx = document.createElement('div');
    fx.className = 'merge-vfx-burst';
    fx.innerHTML = `
      <img src="./game-assets/textures/assets/artres/art_vfx/vfx_texture/fx_ui_t_hecheng_07.png" alt="" />
      <img src="./game-assets/textures/assets/artres/art_vfx/vfx_texture_hd/fx_ui_t_hecheng_08.png" alt="" />
    `;
    cell.appendChild(fx);
    setTimeout(() => fx.remove(), 580);
  }

  _isWorldUnlocked() {
    return gameState.state.realmIndex >= 3 || gameState.state.maxClearedStage >= 7;
  }

  _bindGlobalControls() {
    document.querySelectorAll('#bottom-nav .nav-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        audio.playClick();
        const t = btn.dataset.tab;
        if ((t === 'youli' || t === 'bangpai') && !this._isWorldUnlocked()) {
          this.toast(t === 'youli' ? '通关 1-4 或突破至【武者·三重】开启游历（右侧助手可一键全开）' : '通关 1-4 或突破至【武者·三重】开启帮派（右侧助手可一键全开）');
          return;
        }
        if (t === 'shimen') this.shimenView = 'hub';
        this.switchTab(t);
      });
    });

    document.getElementById('pill-realm').addEventListener('click', () => {
      audio.playClick();
      this.shimenView = 'xiuwei';
      this.switchTab('shimen');
    });

    document.getElementById('btn-currency-plus')?.addEventListener('click', () => {
      audio.playClick();
      gameState.state.spiritStone += 500;
      gameState.notify('currency');
      this.toast('宗门馈赠：灵石 +500！');
      this.renderAll();
    });

    const muteBtn = document.getElementById('btn-mute');
    muteBtn?.addEventListener('click', () => {
      const next = !audio.muted;
      audio.setMuted(next);
      muteBtn.textContent = next ? '配乐: 关' : '配乐: 开';
    });

    document.getElementById('btn-mobile-sb')?.addEventListener('click', () => {
      document.getElementById('sandbox-panel')?.classList.toggle('mobile-open');
    });
    document.getElementById('btn-close-sb')?.addEventListener('click', () => {
      document.getElementById('sandbox-panel')?.classList.remove('mobile-open');
    });

    document.getElementById('btn-stage-info').addEventListener('click', () => {
      audio.playClick();
      this.openStageModal();
    });
    document.getElementById('btn-idle-bag').addEventListener('click', () => {
      audio.playClick();
      this.openIdleModal();
    });
    document.getElementById('btn-quick-tianshu').addEventListener('click', () => {
      audio.playClick();
      this.shimenView = 'tianshu';
      this.tianshuSub = 'tree';
      this.switchTab('shimen');
    });
    document.getElementById('btn-bond-lotus').addEventListener('click', () => {
      audio.playClick();
      this.shimenView = 'tianshu';
      this.tianshuSub = 'jiban';
      this.switchTab('shimen');
    });
    document.getElementById('btn-speed').addEventListener('click', () => {
      audio.playClick();
      const s = gameState.state;
      s.battleSpeed = s.battleSpeed === 1 ? 2 : s.battleSpeed === 2 ? 3 : 1;
      document.getElementById('btn-speed').textContent = `x${s.battleSpeed}`;
      gameState.save();
    });

    // 左下「前往领奖」打开 1:1 复刻的「师姐的教诲」弹窗 (042_chapter_claim.png)
    document.getElementById('btn-quest-bar').addEventListener('click', () => {
      audio.playClick();
      this.openQuestModal();
    });

    document.getElementById('btn-comprehend')?.addEventListener('click', () => {
      const res = gameState.comprehendManual();
      if (!res.ok) return this.toast(res.reason);
      audio.playMerge(res.skill.quality);
      this.toast(`领悟【${QUALITIES[res.skill.quality].name}·${res.skill.name}】！`);
      if (res.skill.quality >= 2) this.showReveal(res.skill);
      this.renderAll();
    });

    document.getElementById('btn-auto-merge')?.addEventListener('click', () => {
      const batch = document.getElementById('chk-batch-merge')?.checked;
      let mergedCount = 0;
      let lastRes = null;
      const limit = batch ? 12 : 1;
      for (let k = 0; k < limit; k++) {
        const res = gameState.autoMergeOnce();
        if (!res.ok) {
          if (mergedCount === 0) this.toast(res.reason);
          break;
        }
        mergedCount++;
        lastRes = res;
      }
      if (lastRes) {
        if (lastRes.action === 'merge_skill') {
          audio.playMerge(lastRes.skill.quality);
          if (lastRes.upgraded) {
            this.showReveal(lastRes.skill);
          } else {
            this.toast(`合成出同阶【${lastRes.skill.name}】，下次升阶率提升至 ${Math.round((lastRes.nextRate || 0.75) * 100)}%！`);
          }
        } else if (lastRes.action === 'merge_orb') {
          audio.playMerge(lastRes.quality);
          this.toast(mergedCount > 1 ? `批量合成完成（共 ${mergedCount} 次）！` : `合成【武学经验·${QUALITIES[lastRes.quality].short}】！`);
        }
        this.renderAll();
      }
    });

    document.getElementById('sb-gift')?.addEventListener('click', () => {
      gameState.sandboxGiftPack();
      audio.playMerge(3);
      this.toast('已发放体验补给包：灵石+2000、混元青+5、高阶秘籍与紫品装备！');
      this.renderAll();
    });
    document.getElementById('sb-high')?.addEventListener('click', () => {
      const sk = gameState.sandboxSpawnHighSkills();
      audio.playBreakthrough();
      this.showReveal(sk);
      this.toast(`已解锁全系统并在牌桌投放【${sk.name}】！`);
      this.renderAll();
    });
    document.getElementById('sb-xp')?.addEventListener('click', () => {
      const r = gameState.getRealm();
      gameState.state.xiuweiExp = r.needExp;
      gameState.notify('sandbox');
      audio.playPop();
      this.toast('当前修为已圆满！点击顶部境界胶囊前往突破！');
      this.renderAll();
    });
    document.getElementById('sb-jump-boss')?.addEventListener('click', () => {
      const ch = Math.floor(gameState.state.currentStage / 8);
      const bossStage = ch * 8 + 7;
      gameState.state.currentStage = bossStage;
      this.switchTab('lianggong');
      this.battle.startStage(bossStage);
      this.toast(`直面第 ${ch + 1} 章关底首领！`);
      this.renderAll();
    });
    document.getElementById('sb-next-ch')?.addEventListener('click', () => {
      const nextCh = (Math.floor(gameState.state.currentStage / 8) + 1) % CHAPTERS.length;
      gameState.state.currentStage = nextCh * 8;
      this.switchTab('lianggong');
      this.battle.startStage(nextCh * 8);
      this.toast(`已切换至第 ${nextCh + 1} 章·${CHAPTERS[nextCh].name}`);
      this.renderAll();
    });
    document.getElementById('sb-reset')?.addEventListener('click', () => {
      this.closeModal();
      this.revealRoot.classList.add('hidden');
      gameState.reset();
      this.activeTab = 'lianggong';
      this.shimenView = 'hub';
      this.switchTab('lianggong');
      this.battle.startStage(0);
      this.renderAll();
      const splashEl = document.getElementById('splash-screen');
      const nameInp = document.getElementById('inp-player-name');
      if (nameInp) nameInp.value = gameState.state.playerName;
      document.getElementById('btn-mobile-sb')?.classList.add('hidden');
      document.getElementById('sandbox-panel')?.classList.remove('mobile-open');
      if (splashEl) {
        splashEl.classList.remove('hidden', 'fade-out');
      }
      this.toast('已清空存档，回到【武徒·一重 · 1-1】全新零起点！');
    });

    this.modalRoot.addEventListener('click', (e) => {
      if (e.target === this.modalRoot) this.closeModal();
    });
    this.revealRoot.addEventListener('click', () => {
      this.revealRoot.classList.add('hidden');
    });
  }

  switchTab(tab) {
    if (this.activeTab === 'role' && tab !== 'role' && this.roleViewer) {
      this.roleViewer.dispose();
      this.roleViewer = null;
    }
    this.activeTab = tab;
    document.querySelectorAll('.tab-view').forEach((el) => el.classList.remove('active'));
    document.getElementById(`tab-${tab}`)?.classList.add('active');

    if (tab === 'shimen') {
      audio.playBgm(ASSET.bgm('mus_sm_bp_ui.ogg'));
    } else if (tab === 'youli') {
      audio.playBgm(ASSET.bgm('mus_mainpage_normal.ogg'));
    } else if (tab === 'lianggong') {
      this.battle.resize();
      const st = getStageConfig(gameState.state.currentStage);
      audio.playBgm(st.isBossStage ? st.chapter.bossBgm : st.chapter.bgm);
    }
    this.renderAll();
  }

  // =========================================================================
  // 拖拽合成 / 上阵 / 升级
  // =========================================================================
  _bindDragHandlers() {
    window.addEventListener('pointermove', (e) => {
      if (!this.drag) return;
      const dx = e.clientX - this.drag.startX;
      const dy = e.clientY - this.drag.startY;
      if (!this.drag.moved && Math.hypot(dx, dy) > 8) {
        this.drag.moved = true;
        this._startDragGhost(this.drag.fromIdx, e.clientX, e.clientY);
      }
      if (this.drag.moved) {
        this.ghostEl.style.left = `${e.clientX}px`;
        this.ghostEl.style.top = `${e.clientY}px`;
      }
    });

    window.addEventListener('pointerup', (e) => {
      if (!this.drag) return;
      const d = this.drag;
      this.drag = null;
      this._clearDragVisuals();

      if (!d.moved) {
        const item = gameState.state.grid[d.fromIdx];
        if (item) {
          audio.playClick();
          if (item.kind === 'skill') this.openSkillModal('grid', d.fromIdx);
          else this.openOrbModal(d.fromIdx);
        }
        return;
      }

      const el = document.elementFromPoint(e.clientX, e.clientY);
      const slotEl = el?.closest('.skill-slot');
      const cellEl = el?.closest('.grid-cell');

      if (slotEl) {
        const slotIdx = Number(slotEl.dataset.slot);
        const res = gameState.handleGridToSlot(d.fromIdx, slotIdx);
        if (!res.ok) {
          if (res.reason) this.toast(res.reason);
        } else {
          this.battle.syncHeroStats();
          if (res.action === 'skill_up') {
            audio.playMerge(4);
            const m = MARTIAL_BY_ID[res.skillId];
            this.toast(`《${m.name}》提升至 ${formatTierName(res.level)}！`);
          } else {
            audio.playMerge(2);
            this.toast('武学已上阵！战力提升！');
          }
          this.renderAll();
        }
      } else if (cellEl) {
        const toIdx = Number(cellEl.dataset.idx);
        const res = gameState.handleGridToGrid(d.fromIdx, toIdx);
        if (!res.ok) {
          if (res.reason) this.toast(res.reason);
        } else {
          if (res.action === 'merge_skill') {
            audio.playMerge(res.skill.quality);
            if (res.upgraded) {
              this.showReveal(res.skill);
            } else {
              this.toast(`领悟未升阶，产出【${res.skill.name}】；下次升阶保底 +25% → ${Math.round((res.nextRate || 0.75) * 100)}%！`);
            }
          } else if (res.action === 'merge_orb') {
            audio.playMerge(res.quality);
            this.toast(`合成【武学经验·${QUALITIES[res.quality].short}】！`);
          } else if (res.action === 'skill_up') {
            audio.playMerge(3);
            this.toast(`《${MARTIAL_BY_ID[res.skillId].name}》提升至 ${formatTierName(res.level)}！`);
          }
          this.renderAll();
          if (res.action === 'merge_skill' || res.action === 'merge_orb' || res.action === 'skill_up') {
            this.playMergeVfxOnCell(toIdx);
          }
        }
      }
    });
  }

  _startDragGhost(fromIdx, cx, cy) {
    const item = gameState.state.grid[fromIdx];
    if (!item) return;
    const cell = document.querySelector(`.grid-cell[data-idx="${fromIdx}"]`);
    cell?.classList.add('dragging');
    this.ghostEl.innerHTML = this._renderGridTokenHtml(item);
    this.ghostEl.style.left = `${cx}px`;
    this.ghostEl.style.top = `${cy}px`;
    this.ghostEl.classList.remove('hidden');

    const maxQ = gameState.getRealm().unlockMaxQuality;
    document.querySelectorAll('.grid-cell').forEach((el) => {
      const idx = Number(el.dataset.idx);
      if (idx === fromIdx) return;
      const other = gameState.state.grid[idx];
      if (!other) return;
      if (item.kind === 'orb' && other.kind === 'orb' && item.quality === other.quality && item.quality < 5) {
        el.classList.add('drop-valid');
      } else if (item.kind === 'orb' && other.kind === 'skill' && MARTIAL_BY_ID[other.skillId]?.quality === item.quality) {
        el.classList.add('drop-valid');
      } else if (item.kind === 'skill' && other.kind === 'skill') {
        const qA = MARTIAL_BY_ID[item.skillId]?.quality;
        const qB = MARTIAL_BY_ID[other.skillId]?.quality;
        if (qA === qB && ((qA < 5 && qA + 1 <= maxQ) || item.skillId === other.skillId)) {
          el.classList.add('drop-valid');
        }
      }
    });

    document.querySelectorAll('.skill-slot').forEach((el) => {
      const sIdx = Number(el.dataset.slot);
      if (!gameState.isSlotUnlocked(sIdx)) return;
      const sl = gameState.state.slots[sIdx];
      if (item.kind === 'skill') {
        el.classList.add('drop-valid');
      } else if (item.kind === 'orb' && sl && item.quality >= MARTIAL_BY_ID[sl.skillId].quality) {
        el.classList.add('drop-valid');
      }
    });
  }

  _clearDragVisuals() {
    this.ghostEl.classList.add('hidden');
    this.ghostEl.innerHTML = '';
    document.querySelectorAll('.dragging, .drop-valid').forEach((el) => {
      el.classList.remove('dragging', 'drop-valid');
    });
  }

  // =========================================================================
  // 章节任务数据（1:1 双篇递进：041 武徒篇 -> 042 武者篇 师姐的教诲）
  // =========================================================================
  _getChapterTasksInfo() {
    const s = gameState.state;
    const claimed = s.claimedChapterTasks || [];
    const grandList = s.claimedChapterGrand || [];

    // 第一篇：武徒篇（零起点新手破局三任务，对齐 041_goto_reward2.png）
    if (!grandList.includes('ch0')) {
      const merges = Math.min(2, s.statsCount.merge || 0);
      const blueMerges = Math.min(1, s.statsCount.mergeBlue || (s.discovered.some((id) => MARTIAL_BY_ID[id]?.quality >= 2) ? 1 : 0));
      const cleared14 = s.maxClearedStage >= 3 ? 1 : 0; // 通关首领 1-4

      const tasks = [
        { id: 'c0_merge_g', title: '合成绿品武学', cur: merges,     target: 2, nav: 'lianggong' },
        { id: 'c0_merge_b', title: '合成蓝品武学', cur: blueMerges, target: 1, nav: 'lianggong' },
        { id: 'c0_stage14', title: '通关 1-4',     cur: cleared14,  target: 1, nav: 'lianggong' },
      ].map((t) => ({
        ...t,
        claimed: claimed.includes(t.id),
        ready: t.cur >= t.target && !claimed.includes(t.id),
      }));

      const allDone = tasks.every((t) => t.claimed);
      return {
        grandKey: 'ch0',
        chapterTitle: '武徒篇',
        tasks,
        anyReady: tasks.some((t) => t.ready) || allDone,
        allDone,
        grandClaimed: false,
      };
    }

    // 第二篇：武者篇（对齐 042_chapter_claim.png）
    const hasPurple = s.discovered.some((id) => MARTIAL_BY_ID[id]?.quality >= 3);
    const stageCleared24 = s.maxClearedStage >= 11 ? 1 : 0; // 通关 2-4 首领
    const skillUps = Math.min(2, s.statsCount.skillUp || 0);

    const tasks = [
      { id: 'ct_purple', title: '获得紫品武学', cur: hasPurple ? 1 : 0, target: 1, nav: 'lianggong' },
      { id: 'ct_stage',  title: '通关 2-4',     cur: stageCleared24,     target: 1, nav: 'lianggong' },
      { id: 'ct_up',     title: '升级武学重数', cur: skillUps,           target: 2, nav: 'lianggong' },
    ].map((t) => ({
      ...t,
      claimed: claimed.includes(t.id),
      ready: t.cur >= t.target && !claimed.includes(t.id),
    }));

    const allDone = tasks.every((t) => t.claimed);
    const grandClaimed = grandList.includes('ch1');
    return {
      grandKey: 'ch1',
      chapterTitle: '武者篇',
      tasks,
      anyReady: tasks.some((t) => t.ready) || (allDone && !grandClaimed),
      allDone,
      grandClaimed,
    };
  }

  // =========================================================================
  // 渲染核心 HUD、技能槽、合成棋盘与底部导航
  // =========================================================================
  updateBattleHud(snap) {
    document.getElementById('hud-stage-tag').textContent = snap.stageLabel;
    document.getElementById('hud-enemy-rem').textContent = `x${snap.remCount}`;
    document.getElementById('hud-timer').textContent = `${snap.timer}秒`;
    const pct = Math.min(100, Math.round(((snap.waveIndex + 1) / Math.max(1, snap.waveTotal)) * 100));
    document.getElementById('hud-wave-fill').style.height = `${pct}%`;

    for (let i = 0; i < 6; i++) {
      const slotEl = document.querySelector(`.skill-slot[data-slot="${i}"]`);
      if (!slotEl) continue;
      const mask = slotEl.querySelector('.cd-mask');
      const numEl = slotEl.querySelector('.cd-num');
      const maxCd = snap.skillMaxCds[i] || 1;
      const rem = Math.max(0, snap.skillCds[i] || 0);
      if (mask) mask.style.height = `${Math.min(100, (rem / maxCd) * 100)}%`;
      if (numEl) numEl.textContent = rem > 0.15 ? Math.ceil(rem) : '';
    }
  }

  renderAll() {
    if (this.roleViewer && this.activeTab !== 'role') {
      this.roleViewer.dispose();
      this.roleViewer = null;
    }
    if (this.xiuweiViewer && !(this.activeTab === 'shimen' && this.shimenView === 'xiuwei')) {
      this.xiuweiViewer.dispose();
      this.xiuweiViewer = null;
    }
    this.renderTopBarAndNav();
    this.renderSandboxStats();
    if (this.activeTab === 'lianggong') this.renderLianggong();
    else if (this.activeTab === 'role') this.renderRole();
    else if (this.activeTab === 'shimen') this.renderShimen();
    else if (this.activeTab === 'youli') this.renderYouli();
    else if (this.activeTab === 'bangpai') this.renderBangpai();
    else if (this.activeTab === 'bag') this.renderBag();
  }

  renderTopBarAndNav() {
    const s = gameState.state;
    const realm = gameState.getRealm();
    const stats = gameState.computeStats();
    const pct = Math.min(100, (s.xiuweiExp / realm.needExp) * 100);
    const canBreak = gameState.canBreakthrough();

    // 顶栏显隐规则严格对齐真机截图：
    // 角色页 (006.png) 与 修为页 (018.png) 使用各自专属顶栏；天书子页隐藏底部主6栏；练功页 (003.png) 隐藏货币胶囊！
    const topBar = document.getElementById('top-bar');
    const bottomNav = document.getElementById('bottom-nav');
    const hideTop = this.activeTab === 'role' || (this.activeTab === 'shimen' && this.shimenView === 'xiuwei');
    const hideBottom = this.activeTab === 'shimen' && this.shimenView !== 'hub';
    topBar.classList.toggle('hidden', hideTop);
    bottomNav.classList.toggle('hidden', hideBottom);

    document.getElementById('pill-currency')?.classList.toggle('hidden', this.activeTab === 'lianggong');

    document.getElementById('hud-realm-name').textContent = realm.name;
    document.getElementById('hud-realm-pct').textContent = `${pct.toFixed(2)}%`;
    document.getElementById('pill-realm').classList.toggle('ready', canBreak);
    document.getElementById('realm-red-dot').classList.toggle('hidden', !canBreak);
    document.getElementById('hud-power').textContent = stats.power;
    document.getElementById('hud-stone').textContent = s.spiritStone;
    document.getElementById('btn-speed').textContent = `x${s.battleSpeed}`;

    const pityPctEl = document.getElementById('merge-pity-pct');
    if (pityPctEl) pityPctEl.textContent = `${Math.round(gameState.getMergeSuccessRate() * 100)}%`;

    // 底部 6 大导航状态与锁图标同步 (003 / 006 / 012 / 054.png)
    const worldUnlocked = this._isWorldUnlocked();
    const chapInfo = this._getChapterTasksInfo();
    document.getElementById('nav-dot-shimen')?.classList.toggle('hidden', !(canBreak || s.bubbles.length >= 4));
    document.getElementById('nav-dot-lianggong')?.classList.toggle('hidden', !(this.activeTab !== 'lianggong' && chapInfo.anyReady));

    document.querySelectorAll('#bottom-nav .nav-btn').forEach((btn) => {
      const t = btn.dataset.tab;
      const isAct = t === this.activeTab;
      const isLocked = (t === 'youli' || t === 'bangpai') && !worldUnlocked;
      btn.classList.toggle('active', isAct);
      btn.classList.toggle('locked-look', isLocked && !isAct);
      const bgImg = btn.querySelector('.nav-diamond-bg');
      if (bgImg) {
        bgImg.src = isAct
          ? ASSET.sprite('worldcombat_active_buttom')
          : isLocked
            ? ASSET.sprite('worldcombat_lock_buttom')
            : ASSET.sprite('worldcombat_idle_buttom');
      }
    });
  }

  renderSandboxStats() {
    const box = document.getElementById('sb-stats-box');
    if (!box) return;
    const st = gameState.computeStats();
    const activeBonds = Object.values(st.bonds).filter((b) => b.activeTier);
    box.innerHTML = `
      <div class="sb-stat-pill"><span>战力</span><b style="color:#ffd54f">${st.power.toLocaleString()}</b></div>
      <div class="sb-stat-pill"><span>气血</span><b>${st.hp.toLocaleString()}</b></div>
      <div class="sb-stat-pill"><span>攻击</span><b>${st.atk}</b></div>
      <div class="sb-stat-pill"><span>防御</span><b>${st.def}</b></div>
      <div class="sb-stat-pill"><span>灵石</span><b style="color:#9be7ff">${gameState.state.spiritStone}</b></div>
      <div class="sb-stat-pill"><span>混元青</span><b style="color:#86efac">${gameState.state.herbs}</b></div>
      <div class="sb-stat-pill" style="grid-column:1/-1"><span>已激活羁绊</span><b style="color:#6ee7b7">${activeBonds.length ? activeBonds.map((b) => `${b.sect.name}(${b.count})`).join(' · ') : '暂无'}</b></div>
    `;
  }

  renderLianggong() {
    const s = gameState.state;
    const chapInfo = this._getChapterTasksInfo();
    const activeTask = chapInfo.tasks.find((t) => !t.claimed) || chapInfo.tasks[0];
    const qTextEl = document.getElementById('hud-quest-text');
    const qDotEl = document.getElementById('quest-dot');
    if (chapInfo.anyReady) {
      qTextEl.innerHTML = '前往领奖';
      qDotEl?.classList.remove('hidden');
    } else if (activeTask) {
      qTextEl.innerHTML = `${activeTask.title}<span style="color:#ff6b5b">(${activeTask.cur}/${activeTask.target})</span>`;
      qDotEl?.classList.add('hidden');
    } else {
      qTextEl.textContent = '章节任务已完成';
      qDotEl?.classList.add('hidden');
    }

    document.getElementById('idle-dot')?.classList.toggle('hidden', s.idleSeconds < 1800);
    document.getElementById('tianshu-dot')?.classList.toggle('hidden', s.spiritStone < 100);

    // 六瓣星芒门派羁绊盘点亮对应花瓣
    const bonds = gameState.getActiveBonds();
    const activeCount = Object.values(bonds).filter((b) => b.activeTier).length;
    const petals = document.querySelectorAll('#bond-hex-petals .hex-petal');
    petals.forEach((p, idx) => {
      p.classList.toggle('lit', idx < activeCount * 2);
    });

    // 6格原版上阵武学槽 (003_enter.png)
    const slotsEl = document.getElementById('skill-slots');
    slotsEl.innerHTML = '';
    for (let i = 0; i < 6; i++) {
      const unlocked = gameState.isSlotUnlocked(i);
      const sl = s.slots[i];
      const div = document.createElement('div');
      div.className = 'skill-slot' + (unlocked ? '' : ' locked');
      div.dataset.slot = i;

      if (!unlocked) {
        div.innerHTML = `<img class="slot-lock-img" src="${ASSET.sprite('com_item_lock01')}" alt="锁定" />`;
        div.addEventListener('click', () => this.toast('突破至【武者·四重】解锁第 6 个武学槽位！'));
      } else if (sl) {
        const m = MARTIAL_BY_ID[sl.skillId];
        const sectHtml = m.sect
          ? `<img class="sect-icon-mini" src="${ASSET.sectTag(m.sect)}" alt="${SECTS[m.sect].name}" />`
          : '';
        // 原版 003_enter.png 底部菱形阶位宝石 (lv > 1 时显示)
        const gemHtml = sl.level > 1
          ? `<span class="lv-gem-wrap"><img src="${ASSET.qualityLevelGem(sl.level)}" alt="" /></span>`
          : '';
        div.innerHTML = `
          <img class="skill-img" src="${m.icon}" alt="${m.name}" />
          <div class="cd-mask"></div>
          <div class="cd-num"></div>
          <img class="slot-frame" src="${ASSET.qualitySlot(m.quality)}" alt="" />
          ${sectHtml}
          ${gemHtml}
        `;
        div.addEventListener('click', () => {
          audio.playClick();
          this.openSkillModal('slot', i);
        });
      } else {
        div.innerHTML = `<img class="slot-add-img" src="${ASSET.sprite('skill_item_add')}" alt="+" />`;
        div.addEventListener('click', () => this.toast('拖拽下方牌桌的武学到此槽位即可上阵！'));
      }
      slotsEl.appendChild(div);
    }

    // 6×3 纯净透底合成棋盘（空格完全隐形，严格复刻 003_enter.png）
    const gridEl = document.getElementById('merge-grid');
    gridEl.innerHTML = '';
    for (let i = 0; i < s.grid.length; i++) {
      const item = s.grid[i];
      const cell = document.createElement('div');
      cell.className = 'grid-cell' + (item ? ' has-item' : '');
      cell.dataset.idx = i;
      if (item) {
        cell.innerHTML = this._renderGridTokenHtml(item);
        cell.addEventListener('pointerdown', (e) => {
          if (e.button !== 0 && e.pointerType === 'mouse') return;
          this.drag = { fromIdx: i, startX: e.clientX, startY: e.clientY, moved: false };
        });
      }
      gridEl.appendChild(cell);
    }

    // 1:1 原版新手引导小手 (guide_img_hand.png, 对照 050_speed_x1.png)：
    // 1) 从未合成过时：小手引导拖动首格秘籍合成；2) 合成后有空武学槽且牌桌有秘籍时：引导拖上阵！
    document.querySelectorAll('.newbie-guide-hand').forEach((el) => el.remove());
    if ((s.statsCount.merge || 0) === 0 && s.grid[0]?.kind === 'skill' && s.grid[1]?.kind === 'skill') {
      const c0 = gridEl.querySelector('.grid-cell[data-idx="0"]');
      if (c0) {
        const hand = document.createElement('img');
        hand.className = 'newbie-guide-hand slide-right';
        hand.src = ASSET.sprite('guide_img_hand');
        hand.alt = '';
        c0.appendChild(hand);
      }
    } else if (!s.slots[1]) {
      const firstBookIdx = s.grid.findIndex((it) => it && it.kind === 'skill');
      const targetCell = firstBookIdx >= 0 ? gridEl.querySelector(`.grid-cell[data-idx="${firstBookIdx}"]`) : null;
      if (targetCell) {
        const hand = document.createElement('img');
        hand.className = 'newbie-guide-hand slide-up';
        hand.src = ASSET.sprite('guide_img_hand');
        hand.alt = '';
        targetCell.appendChild(hand);
      }
    }
  }

  _renderGridTokenHtml(item) {
    if (item.kind === 'orb') {
      const qDef = QUALITIES[item.quality] || QUALITIES[1];
      return `
        <div class="orb-token">
          <img class="orb-ring" src="${ASSET.qualityOrbRing(item.quality)}" alt="" />
          <img class="orb-core" src="${ASSET.item(qDef.orbItem)}" alt="经验球" />
          <span class="orb-count">${item.count || 1}</span>
        </div>
      `;
    }
    const m = MARTIAL_BY_ID[item.skillId];
    const sectBadge = m.sect
      ? `<img class="book-sect-mini" src="${ASSET.sectTag(m.sect)}" alt="${SECTS[m.sect].name}" />`
      : '';
    return `
      <div class="card-book">
        <img class="book-icon" src="${m.icon}" alt="${m.name}" />
        <img class="book-frame" src="${ASSET.qualityBook(m.quality)}" alt="" />
        ${sectBadge}
      </div>
    `;
  }

  // =========================================================================
  // 原版弹窗体系：师姐的教诲 (042) / 挂机奖励 (032) / 关卡详情 (051) / 武学详情 (029) / 恭喜获得 (052)
  // =========================================================================
  openModal(html, { customShell = false, hideClose = false } = {}) {
    if (customShell) {
      this.modalRoot.innerHTML = html;
    } else {
      this.modalRoot.innerHTML = `
        <div class="modal-card">
          ${hideClose ? '' : '<button class="modal-close-img" id="btn-modal-x" title="关闭"></button>'}
          ${html}
        </div>
      `;
    }
    this.modalRoot.classList.remove('hidden');
    document.getElementById('btn-modal-x')?.addEventListener('click', () => this.closeModal());
  }

  closeModal() {
    if (this._settleTimer) {
      clearInterval(this._settleTimer);
      this._settleTimer = null;
    }
    this.modalRoot.classList.remove('settle-mode');
    this.modalRoot.classList.add('hidden');
    this.modalRoot.innerHTML = '';
  }

  // 1:1 复刻 052_merge_drag.png「恭喜获得」全屏金芒绽放！
  showReveal(skill) {
    // 若底层恰好有自动弹出的关卡结算层，先收起避免文字重影叠透
    if (this.modalRoot.classList.contains('settle-mode')) {
      this.closeModal();
      this.battle.startStage(gameState.state.currentStage);
    }
    const qDef = QUALITIES[skill.quality];
    this.revealRoot.innerHTML = `
      <div class="reveal-box">
        <div class="reveal-rays"></div>
        <div style="position:relative;z-index:2;margin-bottom:16px">
          <img src="${ASSET.uiLarge('result/result_txt_gain.png')}" style="height:46px;object-fit:contain;filter:drop-shadow(0 0 14px rgba(255,204,64,0.95))" alt="恭喜获得" />
        </div>
        <div style="position:relative;z-index:2;width:136px;height:152px;margin:0 auto 18px">
          <img src="${skill.icon}" style="position:absolute;left:20%;top:8%;width:69%;height:78%;object-fit:cover;border-radius:6px" />
          <img src="${ASSET.qualityBook(skill.quality)}" style="position:relative;width:100%;height:100%;object-fit:fill;z-index:2;filter:drop-shadow(0 0 26px ${qDef.glow})" />
        </div>
        <div style="position:relative;z-index:2;font-size:17px;font-weight:900;color:${qDef.color};text-shadow:0 1px 4px #000;margin-bottom:10px">${skill.name}</div>
        <div style="position:relative;z-index:2;font-size:14px;font-weight:800;color:#ffffff;text-shadow:0 1px 4px #000,0 0 3px #000;max-width:316px;margin:0 auto;line-height:1.55">${skill.desc}</div>
      </div>
    `;
    this.revealRoot.classList.remove('hidden');
  }

  // 1:1 复刻 042_chapter_claim.png「师姐的教诲」（薰衣草顶栏 + 右上师姐执卷立绘溢出 + 章节奖励 + 发光宝箱领奖！）
  openQuestModal() {
    const info = this._getChapterTasksInfo();
    this.openModal(`
      <div class="shijie-modal">
        <button class="modal-close-img" id="btn-modal-x" style="top:14px;right:14px"></button>
        <div class="shijie-top-banner">
          <img class="shijie-bg-art" src="${ASSET.uiLarge('com/com_popup_bg_01_2.png')}" alt="" />
          <div style="position:relative;z-index:4;display:flex;align-items:center;gap:4px">
            <img src="${ASSET.sprite('com_title_decoration_01')}" style="width:26px;height:26px;object-fit:contain;opacity:0.7" alt="" />
            <span style="font-size:21px;font-weight:900;color:#333942">师姐的教诲</span>
          </div>
          <div style="position:relative;z-index:4;font-size:15px;font-weight:800;color:#c26a27;margin:4px 0 18px 12px">${info.chapterTitle}</div>
          <div class="shijie-chap-bar">章节奖励</div>
          <div style="position:relative;z-index:4;display:flex;align-items:center;gap:8px;margin-top:8px">
            <div class="bag-item-sq" style="width:58px;height:58px;background:#fff;padding:3px;border-radius:8px;box-shadow:0 2px 6px rgba(0,0,0,0.08)">
              <div style="position:relative;width:100%;height:100%;border-radius:6px;background:url('${ASSET.qualitySquare(3)}') center/100% 100% no-repeat;display:grid;place-items:center">
                <img src="${ASSET.item('71203')}" style="width:42px;height:42px;object-fit:contain" />
                <b style="position:absolute;right:4px;bottom:1px;font-size:12px;color:#fff;text-shadow:0 1px 2px #000">1</b>
              </div>
            </div>
            <div class="bag-item-sq" style="width:58px;height:58px;background:#fff;padding:3px;border-radius:8px;box-shadow:0 2px 6px rgba(0,0,0,0.08)">
              <div style="position:relative;width:100%;height:100%;border-radius:6px;background:url('${ASSET.qualitySquare(2)}') center/100% 100% no-repeat;display:grid;place-items:center">
                <img src="${ASSET.item('1103')}" style="width:42px;height:42px;object-fit:contain" />
                <b style="position:absolute;right:4px;bottom:1px;font-size:12px;color:#fff;text-shadow:0 1px 2px #000">2</b>
              </div>
            </div>
            ${info.allDone && !info.grandClaimed ? `
              <button class="chest-claim-btn" id="btn-claim-chap-grand" title="领取章节大奖">
                <img src="${ASSET.sprite('com_item_box_01')}" alt="领奖" />
              </button>
            ` : ''}
          </div>
        </div>

        <div style="padding:8px 12px 2px">
          <div class="unity-sec-title">章节任务</div>
        </div>
        ${info.tasks.map((t) => {
          const pct = Math.min(100, Math.round((t.cur / t.target) * 100));
          return `
            <div class="shijie-task-row">
              <div style="flex:1">
                <div style="font-size:15px;font-weight:800;color:#2c3539">${t.title}</div>
                <div class="shijie-prog-track">
                  <div class="shijie-prog-fill" style="width:${pct}%"></div>
                  <span class="shijie-prog-txt">${Math.min(t.cur, t.target)}/${t.target}</span>
                </div>
              </div>
              <div style="position:relative;width:44px;height:44px;border-radius:6px;background:url('${ASSET.qualitySquare(3)}') center/100% 100% no-repeat;display:grid;place-items:center;flex-shrink:0">
                <img src="${ASSET.item('81001')}" style="width:36px;height:36px;object-fit:contain" alt="混元青" />
                <b style="position:absolute;right:3px;bottom:0;font-size:11px;color:#fff;text-shadow:0 1px 2px #000">1</b>
              </div>
              <div style="width:74px;display:flex;justify-content:center;flex-shrink:0">
                ${t.claimed
                  ? '<span style="font-size:12px;font-weight:800;color:#9ca3af">已领取</span>'
                  : t.ready
                    ? `<button class="chest-claim-btn btn-chap-task-claim" data-tid="${t.id}" title="点击领取混元青"><img src="${ASSET.sprite('com_item_box_01')}" alt="领取" /></button>`
                    : `<button class="pill-btn white-go btn-chap-task-go" data-tid="${t.id}">前往</button>`
                }
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `, { customShell: true });

    this.modalRoot.querySelectorAll('.btn-chap-task-claim').forEach((b) => {
      b.onclick = () => {
        const tid = b.dataset.tid;
        gameState.state.claimedChapterTasks = gameState.state.claimedChapterTasks || [];
        if (!gameState.state.claimedChapterTasks.includes(tid)) {
          gameState.state.claimedChapterTasks.push(tid);
          gameState.state.herbs += 1;
          gameState.state.spiritStone += 120;
          gameState.notify('chapter_task');
          audio.playVictory();
          this.toast('领取章节任务奖励：混元青×1、灵石×120！');
          this.openQuestModal();
          this.renderAll();
        }
      };
    });
    document.getElementById('btn-claim-chap-grand')?.addEventListener('click', () => {
      gameState.state.claimedChapterGrand = gameState.state.claimedChapterGrand || [];
      const key = info.grandKey || 'ch0';
      if (!gameState.state.claimedChapterGrand.includes(key)) {
        gameState.state.claimedChapterGrand.push(key);
      }
      const sk = gameState.randomSkillByQuality(3, { allowAboveRealm: true });
      gameState.addGridItem({ kind: 'skill', skillId: sk.id, level: 1 });
      gameState.addGridItem({ kind: 'orb', quality: 2, count: 2 });
      gameState.notify('chapter_grand');
      audio.playBreakthrough();
      this.closeModal();
      this.showReveal(sk);
      this.renderAll();
    });
    this.modalRoot.querySelectorAll('.btn-chap-task-go').forEach((b) => {
      b.onclick = () => {
        audio.playClick();
        this.closeModal();
        this.toast('在下方牌桌拖拽经验球升级武学或通关首领即可达成！');
      };
    });
  }

  // 1:1 复刻 029_grid_card_detail.png「武学详情」（玉青回纹圆章顶栏 + 锁/分享双圆钮 + 无进阶留白胶囊）
  openSkillModal(location, index) {
    const entry = location === 'slot' ? gameState.state.slots[index] : gameState.state.grid[index];
    if (!entry) return;
    const m = MARTIAL_BY_ID[entry.skillId];
    const lv = entry.level || 1;
    const lvMult = 1 + (lv - 1) * 0.22;
    const power = gameState.getSkillPower(m.id, lv);

    this.openModal(`
      <div class="modal-card no-pad-top" style="max-width:356px;padding-bottom:18px;overflow:hidden">
        <div style="position:relative;margin:0 -16px 8px;padding:18px 16px 14px;background:url('${ASSET.qualityRect(m.quality)}') center top / 100% 100% no-repeat;display:flex;align-items:center;gap:16px">
          <!-- 右上原版锁定与分享圆形按钮 -->
          <div style="position:absolute;top:12px;right:12px;display:flex;gap:6px">
            <button id="btn-sk-lock" style="width:28px;height:28px;border-radius:50%;border:none;background:#fff;box-shadow:0 2px 5px rgba(0,0,0,0.12);display:grid;place-items:center;cursor:pointer">
              <img src="${ASSET.sprite('skill_icon_lock_02')}" style="width:17px;height:17px;object-fit:contain;filter:brightness(0.35)" />
            </button>
            <button id="btn-sk-share" style="width:28px;height:28px;border-radius:50%;border:none;background:#fff;box-shadow:0 2px 5px rgba(0,0,0,0.12);display:grid;place-items:center;cursor:pointer">
              <img src="${ASSET.sprite('com_btn_icon_07')}" style="width:15px;height:15px;object-fit:contain;filter:brightness(0.32)" />
            </button>
          </div>

          <!-- 左侧圆章中心武学卡 + 双剑战力 -->
          <div style="width:94px;display:flex;flex-direction:column;align-items:center;flex-shrink:0;margin-left:4px">
            <div style="position:relative;width:62px;height:70px">
              <img src="${m.icon}" style="position:absolute;inset:4% 5% 11% 5%;width:90%;height:85%;object-fit:cover;border-radius:6px" />
              <img src="${ASSET.qualitySlot(m.quality)}" style="position:relative;width:100%;height:100%;object-fit:fill;z-index:2" />
            </div>
            <div style="display:inline-flex;align-items:center;gap:3px;margin-top:6px;font-size:15px;font-weight:900;color:#d97706">
              <img src="${ASSET.sprite('com_power_icon')}" style="width:16px;height:16px;object-fit:contain" />
              <span>${power}</span>
            </div>
          </div>

          <div style="flex:1;padding-top:4px">
            <div style="font-size:19px;font-weight:900;color:#273634;margin-bottom:4px">${m.name}</div>
            <div style="font-size:13px;color:#4a5c58;line-height:1.65">
              <div>武学等级：${formatTierName(lv)} ${m.sect ? `<span style="color:${SECTS[m.sect].color};font-weight:800">【${SECTS[m.sect].name}】</span>` : ''}</div>
              <div>技能冷却：${m.cd.toFixed(1)}秒</div>
              <div style="display:flex;align-items:center;gap:4px">
                <span>武学特性：</span>
                <span style="display:inline-flex;align-items:center;padding:0 7px;height:18px;border-radius:4px;background:#f27559;color:#fff;font-size:11px;font-weight:800">${m.tag}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="unity-sec-title">上阵属性</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px 12px;font-size:14px;color:#37474f;padding:2px 6px 8px">
          <div>气血：${Math.round(m.baseHp * lvMult)}</div>
          <div>攻击：${Math.round(m.baseAtk * lvMult)}</div>
          <div>防御：${Math.round(m.baseDef * lvMult)}</div>
        </div>

        <div class="unity-sec-title">武学效果</div>
        <div style="font-size:14px;line-height:1.6;color:#37474f;padding:2px 6px 10px">${m.desc}</div>

        <div class="unity-sec-title">进阶效果</div>
        ${m.adv.length
          ? `<div style="font-size:13px;color:#455a64;padding:4px 6px 18px;line-height:1.6">${m.adv.map((t) => `<div>• ${t}</div>`).join('')}</div>`
          : `<div style="margin:22px 14px 28px;height:30px;border-radius:99px;border:1px solid #e2e8f0;display:flex;align-items:center;justify-content:space-between;padding:0 12px;color:#64748b;font-size:13px">
               <span style="opacity:.45">❖</span><span>此武学无进阶效果</span><span style="opacity:.45">❖</span>
             </div>`
        }

        <div style="display:flex;gap:10px;justify-content:center">
          <button id="btn-sk-reroll" class="pill-btn ${gameState.state.spiritStone >= 50 ? 'gold' : 'gray'}">转换</button>
          ${location === 'grid' ? '<button id="btn-sk-equip" class="pill-btn gold">上阵</button>' : ''}
        </div>
      </div>
    `, { customShell: true });

    document.getElementById('btn-sk-lock')?.addEventListener('click', () => this.toast('已切换武学锁定保护状态'));
    document.getElementById('btn-sk-share')?.addEventListener('click', () => this.toast(`已分享【${m.name}】至世界频道！`));
    document.getElementById('btn-sk-reroll')?.addEventListener('click', () => {
      const res = gameState.rerollSkill(location, index);
      if (!res.ok) return this.toast(res.reason);
      audio.playMerge(res.skill.quality);
      this.battle.syncHeroStats();
      this.closeModal();
      this.showReveal(res.skill);
      this.renderAll();
    });
    document.getElementById('btn-sk-equip')?.addEventListener('click', () => {
      let bestSlot = 0;
      let minQ = 99;
      for (let i = 0; i < 6; i++) {
        if (!gameState.isSlotUnlocked(i)) continue;
        if (!gameState.state.slots[i]) { bestSlot = i; break; }
        const sq = MARTIAL_BY_ID[gameState.state.slots[i].skillId].quality;
        if (sq < minQ) { minQ = sq; bestSlot = i; }
      }
      const res = gameState.handleGridToSlot(index, bestSlot);
      if (res.ok) {
        audio.playMerge(2);
        this.battle.syncHeroStats();
        this.toast('武学已上阵！');
        this.closeModal();
        this.renderAll();
      }
    });
  }

  openOrbModal(gridIdx) {
    const item = gameState.state.grid[gridIdx];
    if (!item) return;
    const qDef = QUALITIES[item.quality];
    const nextQ = QUALITIES[item.quality + 1];
    this.openModal(`
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:12px">
        <img src="${ASSET.sprite('com_title_decoration_01')}" style="width:24px;height:24px" alt="" />
        <span style="font-size:19px;font-weight:900;color:#273634">武学经验 · ${qDef.short}</span>
      </div>
      <div style="display:flex;gap:14px;align-items:center;margin-bottom:16px">
        <div style="width:68px;height:68px;border-radius:8px;background:url('${ASSET.qualitySquare(item.quality)}') center/100% 100% no-repeat;display:grid;place-items:center;flex-shrink:0">
          <img src="${ASSET.item(qDef.orbItem)}" style="width:54px;height:54px;object-fit:contain" />
        </div>
        <div style="font-size:13px;color:#3d5e55;line-height:1.6">
          <div>当前数量：<b>${item.count || 1}</b></div>
          <div>拖至上方【${qDef.name}】及以下武学槽可提升重数${nextQ ? `；两颗同品可合成「武学经验·${nextQ.short}」` : ''}。</div>
        </div>
      </div>
      <div style="text-align:center">
        <button id="btn-orb-ok" class="pill-btn gold">确定</button>
      </div>
    `);
    document.getElementById('btn-orb-ok')?.addEventListener('click', () => this.closeModal());
  }

  // 1:1 复刻 051_stage_select.png「关卡详情」（棕褐渐变怪头卡片 + 通关奖励 + 挂机奖励 + 关卡切换）
  openStageModal() {
    const curIdx = gameState.state.currentStage;
    const st = getStageConfig(curIdx);
    const maxUnlocked = Math.min(39, Math.max(curIdx, gameState.state.maxClearedStage + 1));
    const mon = st.isBossStage ? st.chapter.boss : st.chapter.enemies[0];

    const chips = [];
    for (let i = 0; i <= Math.min(39, maxUnlocked + 2); i++) {
      const cfg = getStageConfig(i);
      const locked = i > maxUnlocked;
      const active = i === curIdx;
      chips.push(`
        <button class="stage-chip" data-stage="${i}" ${locked ? 'disabled' : ''} style="
          padding:4px 2px;border-radius:6px;border:1px solid ${active ? '#f59e0b' : '#e2e8f0'};
          background:${active ? '#fef3c7' : locked ? '#f8fafc' : '#fff'};
          color:${locked ? '#94a3b8' : '#334155'};font-size:11px;font-weight:800;cursor:${locked ? 'not-allowed' : 'pointer'}
        ">${cfg.label}</button>
      `);
    }

    this.openModal(`
      <div style="display:flex;align-items:center;gap:4px;margin-bottom:12px">
        <img src="${ASSET.sprite('com_title_decoration_01')}" style="width:26px;height:26px;object-fit:contain" alt="" />
        <span style="font-size:20px;font-weight:900;color:#273634">关卡详情</span>
      </div>

      <!-- 原版棕褐渐变头栏 + 圆形双层木人头像框 -->
      <div style="border-radius:12px;border:1px solid #e2e8f0;overflow:hidden;margin-bottom:10px;background:#fff">
        <div style="height:36px;background:linear-gradient(90deg,#52545d 0%,#8d6a62 100%);display:flex;align-items:center;justify-content:space-between;padding:0 12px 0 98px;color:#fff">
          <span style="font-size:15px;font-weight:800">${st.chapter.name}</span>
          <img src="${ASSET.sprite('wooden_icon_statistics')}" style="width:20px;height:20px;object-fit:contain" alt="" />
        </div>
        <div style="position:relative;padding:8px 12px 10px 98px;font-size:13px;color:#37474f;line-height:1.55">
          <div style="position:absolute;left:12px;top:-28px;width:72px;height:72px;border-radius:50%;background:#fff;border:3px solid #cbd5e1;overflow:hidden;display:grid;place-items:center;box-shadow:0 3px 8px rgba(0,0,0,0.18)">
            <img src="${mon.portrait}" style="width:100%;height:100%;object-fit:cover" alt="${mon.name}" />
          </div>
          <div>敌人：${mon.name}</div>
          <div>数量：x${st.isBossStage ? 1 : 7}个</div>
          <div>神识强度：0</div>
        </div>
      </div>

      <div class="unity-sec-title">通关奖励</div>
      <div style="border:1px solid #e5e7eb;border-radius:10px;padding:12px;display:flex;justify-content:center;gap:10px;margin-bottom:8px">
        <div style="position:relative;width:56px;height:56px;border-radius:6px;background:url('${ASSET.qualitySquare(st.dropQuality)}') center/100% 100% no-repeat;display:grid;place-items:center">
          <img src="${ASSET.item('71201')}" style="width:42px;height:42px;object-fit:contain" />
          <b style="position:absolute;right:4px;bottom:1px;font-size:12px;color:#fff;text-shadow:0 1px 2px #000">${st.rewardBooks}</b>
        </div>
        <div style="position:relative;width:56px;height:56px;border-radius:6px;background:url('${ASSET.qualitySquare(2)}') center/100% 100% no-repeat;display:grid;place-items:center">
          <img src="${ASSET.item('1103')}" style="width:42px;height:42px;object-fit:contain" />
          <b style="position:absolute;right:4px;bottom:1px;font-size:12px;color:#fff;text-shadow:0 1px 2px #000">${st.rewardOrbs}</b>
        </div>
      </div>

      <div class="unity-sec-title">挂机奖励</div>
      <div style="border:1px solid #e5e7eb;border-radius:10px;padding:10px 12px;display:grid;grid-template-columns:1fr 1fr;align-items:center;margin-bottom:10px;font-size:14px;font-weight:800;color:#0d9488">
        <div style="display:flex;align-items:center;gap:8px;border-right:1px solid #e5e7eb">
          <img src="${ASSET.item('71200')}" style="width:28px;height:28px;object-fit:contain" />
          <span>+${st.idleBooksPerDay}/天</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding-left:14px">
          <img src="${ASSET.item('1103')}" style="width:26px;height:26px;object-fit:contain" />
          <span>+${st.idleOrbsPerDay}/天</span>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:5px;margin-bottom:14px">${chips.join('')}</div>

      <div style="text-align:center">
        <button id="btn-stage-ok" class="pill-btn gold">确定</button>
      </div>
    `);

    this.modalRoot.querySelectorAll('.stage-chip').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.stage);
        gameState.state.currentStage = idx;
        gameState.save();
        this.battle.startStage(idx);
        this.closeModal();
        this.renderAll();
      });
    });
    document.getElementById('btn-stage-ok')?.addEventListener('click', () => this.closeModal());
  }

  // 1:1 复刻 032_idle_bag.png「挂机奖励」（蓝天绿叶进度轴 + 角色定位针 + 掉落倒计时 + 收获奖励）
  openIdleModal() {
    const p = gameState.getIdlePreview();
    const mins = Math.floor(p.sec / 60);
    const secs = p.sec % 60;
    const hrs = Math.floor(mins / 60);
    const timeStr = hrs > 0
      ? `${String(hrs).padStart(2, '0')}:${String(mins % 60).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
      : `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    const nodes = ['1-1', '1-4', '1-8', '2-4', '2-8'];
    const curNodeIdx = Math.min(4, Math.max(0, Math.floor((gameState.state.maxClearedStage + 2) / 3)));

    this.openModal(`
      <div style="display:flex;align-items:center;gap:4px;margin-bottom:14px">
        <img src="${ASSET.sprite('com_title_decoration_01')}" style="width:26px;height:26px;object-fit:contain" alt="" />
        <span style="font-size:20px;font-weight:900;color:#273634">挂机奖励</span>
      </div>

      <!-- 蓝天树叶横幅 + 5节点进度线 + 头像水滴定位针 -->
      <div style="position:relative;border-radius:12px;border:1px solid #cbd5e1;overflow:visible;margin-bottom:10px;background:#fff">
        <div style="height:88px;border-radius:11px 11px 0 0;background:url('${ASSET.uiLarge('wooden/wooden_bg_progress.png')}') center top / 100% 132px no-repeat;position:relative;padding:38px 14px 0">
          <div style="position:relative;height:4px;background:rgba(90,115,135,0.45);border-radius:99px">
            <div style="width:${curNodeIdx * 25}%;height:100%;background:#fde047;border-radius:99px"></div>
          </div>
          <div style="display:flex;justify-content:space-between;margin-top:-9px;position:relative">
            ${nodes.map((lbl, idx) => `
              <div style="display:flex;flex-direction:column;align-items:center;position:relative">
                ${idx === curNodeIdx ? `
                  <div style="position:absolute;top:-44px;width:40px;height:40px;border-radius:50%;border:2px solid #334155;background:#bbf7d0;overflow:hidden;box-shadow:0 3px 6px rgba(0,0,0,0.25)">
                    <img src="${ASSET.head('chr_male_001')}" style="width:100%;height:100%;object-fit:cover" alt="" />
                  </div>
                ` : ''}
                <img src="${ASSET.sprite(idx <= curNodeIdx ? 'wooden_img_dot_active' : 'wooden_img_dot_idle')}" style="width:14px;height:14px;object-fit:contain" alt="" />
                <span style="margin-top:4px;padding:1px 9px;border-radius:99px;background:#fff;font-size:11px;font-weight:800;color:#334155;box-shadow:0 1px 3px rgba(0,0,0,0.15)">${lbl}</span>
              </div>
            `).join('')}
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;padding:8px 10px;background:#fff;border-radius:0 0 11px 11px;font-size:13px;font-weight:800;color:#0d9488">
          <div style="display:flex;align-items:center;justify-content:center;gap:4px;border-right:1px solid #e2e8f0">
            <img src="${ASSET.item('71200')}" style="width:24px;height:24px;object-fit:contain" />
            <span>${p.st.idleBooksPerDay}个/天</span>
            <img src="${ASSET.sprite('com_update')}" style="width:14px;height:16px;object-fit:contain" />
          </div>
          <div style="display:flex;align-items:center;justify-content:center;gap:4px;color:#475569">
            <img src="${ASSET.item('1103')}" style="width:22px;height:22px;object-fit:contain" />
            <span>${p.st.idleOrbsPerDay}个/天</span>
          </div>
        </div>
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center">
        <div class="unity-sec-title">掉落道具</div>
        <span style="font-size:13px;font-weight:800;color:#273634">练功挂机加成：${gameState.state.realmIndex >= 2 ? '25%' : '0%'}</span>
      </div>
      <div style="background:#eaeced;border-radius:10px;padding:12px;min-height:132px;display:flex;gap:12px;align-items:flex-start;margin-bottom:8px">
        <div style="text-align:center">
          <div style="position:relative;width:54px;height:54px;border-radius:6px;background:url('${ASSET.qualitySquare(0)}') center/100% 100% no-repeat;display:grid;place-items:center">
            <img src="${ASSET.item('71200')}" style="width:42px;height:42px;object-fit:contain" />
            <b style="position:absolute;right:4px;bottom:1px;font-size:12px;color:#fff;text-shadow:0 1px 2px #000">${Math.max(1, p.books)}</b>
          </div>
          <div style="font-size:11px;color:#475569;margin-top:3px">00:17:59</div>
        </div>
        <div style="text-align:center">
          <div style="position:relative;width:54px;height:54px;border-radius:6px;background:url('${ASSET.qualitySquare(2)}') center/100% 100% no-repeat;display:grid;place-items:center">
            <img src="${ASSET.item('1103')}" style="width:42px;height:42px;object-fit:contain" />
            <b style="position:absolute;right:4px;bottom:1px;font-size:12px;color:#fff;text-shadow:0 1px 2px #000">${Math.max(1, p.orbs)}</b>
          </div>
          <div style="font-size:11px;color:#475569;margin-top:3px">00:41:46</div>
        </div>
      </div>

      <div style="display:flex;justify-content:space-between;align-items:center">
        <div class="unity-sec-title">挂机时间</div>
        <span style="font-size:13px;font-weight:800;color:#475569"><b style="color:#0d9488">${timeStr}</b>/24:00:00</span>
      </div>
      <div style="height:8px;border-radius:99px;background:#a3a8ae;overflow:hidden;margin:4px 0 18px">
        <div style="width:${Math.max(4, Math.min(100, (p.sec / 86400) * 100))}%;height:100%;background:#fde047;border-radius:99px"></div>
      </div>

      <div style="text-align:center">
        <button id="btn-claim-idle" class="pill-btn gold">收获奖励</button>
      </div>
    `, { hideClose: true });

    document.getElementById('btn-claim-idle')?.addEventListener('click', () => {
      const res = gameState.claimIdleRewards();
      if (!res.ok) return this.toast(res.reason);
      audio.playVictory();
      this.toast(`收获灵石×${res.info.stones}、修为×${res.info.xiuwei}、秘籍×${res.addedBooks}！`);
      this.closeModal();
      this.renderAll();
    });
  }

  // 1:1 复刻 004_battle_t6.png 全屏模糊胜负结算（零 emoji）
  showSettlement({ win, title, subtitle, rewardsText, dpsList, onNext }) {
    if (this._settleTimer) {
      clearInterval(this._settleTimer);
      this._settleTimer = null;
    }
    const mvp = dpsList?.[0];
    const ratings = gameState.getGrowthRatings();
    const crestHtml = win
      ? `<div class="settle-crest">
           <img class="crest-bg" src="${ASSET.uiLarge('result/result_title_bg_team_04.png')}" alt="" />
           <img class="crest-txt" src="${ASSET.uiLarge('result/result_txt_win.png')}" alt="${title}" />
         </div>`
      : `<div class="settle-crest">
           <img class="crest-bg" src="${ASSET.uiLarge('result/result_lose_03.png')}" alt="" />
           <img class="crest-bg" src="${ASSET.uiLarge('result/result_lose_01.png')}" alt="" />
           <img class="crest-sword" src="${ASSET.uiLarge('result/result_lose_02.png')}" alt="" />
           <img class="crest-txt" src="${ASSET.uiLarge('result/result_txt_lose.png')}" alt="${title}" />
         </div>`;

    const barsHtml = (dpsList || []).slice(0, 5).map((it) => `
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;font-size:11px">
        <img src="${it.skill.icon}" style="width:26px;height:26px;border-radius:5px;border:1.5px solid ${QUALITIES[it.skill.quality].color}" />
        <div style="flex:1;text-align:left">
          <div style="display:flex;justify-content:space-between"><b>${it.skill.name}</b><span style="color:#fde68a">${it.pct}%</span></div>
          <div style="height:5px;background:rgba(255,255,255,0.16);border-radius:99px;overflow:hidden;margin-top:2px">
            <div style="width:${Math.max(4, it.pct)}%;height:100%;background:${QUALITIES[it.skill.quality].color}"></div>
          </div>
        </div>
      </div>
    `).join('');

    this.modalRoot.classList.add('settle-mode');
    this.modalRoot.innerHTML = `
      <div class="settle-fullscreen">
        ${crestHtml}
        <div style="font-size:12px;color:#d1fae5;opacity:.92;margin-bottom:4px">${subtitle}</div>
        ${mvp ? `
          <div class="settle-divider">❖ 伤害统计 ❖</div>
          <div class="settle-mvp-row">
            <div style="position:relative;width:50px;height:54px">
              <img src="${mvp.skill.icon}" style="position:absolute;inset:5% 6% 12% 6%;width:88%;height:83%;object-fit:cover;border-radius:6px" />
              <img src="${ASSET.qualitySlot(mvp.skill.quality)}" style="position:relative;width:100%;height:100%;object-fit:fill;z-index:2" />
            </div>
            <div style="text-align:left">
              <span style="background:linear-gradient(90deg,#f97316,#ef4444);color:#fff;font-size:10px;padding:1px 7px;border-radius:4px;font-weight:900">最佳</span>
              <div style="font-size:14px;font-weight:900;margin-top:3px">${mvp.skill.name} <span style="color:#fde68a;margin-left:4px">${mvp.pct}%</span></div>
            </div>
            <button id="btn-dps-chart" title="展开全部伤害柱状图" style="width:38px;height:38px;border-radius:50%;border:2px solid rgba(255,255,255,0.82);background:rgba(20,38,32,0.7);display:grid;place-items:center;cursor:pointer">
              <img src="${ASSET.sprite('wooden_icon_statistics')}" style="width:20px;height:20px;object-fit:contain" alt="" />
            </button>
          </div>
          <div id="settle-dps-bars" class="hidden" style="background:rgba(12,24,20,0.72);border-radius:12px;padding:10px 12px;margin:8px 16px">${barsHtml}</div>
        ` : ''}
        ${rewardsText ? `<div style="background:rgba(52,211,153,0.18);border:1px solid rgba(110,231,183,0.45);padding:9px 14px;border-radius:12px;font-size:12px;color:#ecfdf5;margin:10px 16px">${rewardsText}</div>` : ''}
        ${!win ? `
          <div class="settle-divider">❖ 实力提升 ❖</div>
          <div class="settle-boost-row">
            <button id="btn-fail-tianshu" class="settle-boost-btn">
              <span class="settle-boost-circle"><img src="${ASSET.sprite('wooden_btn_skill')}" alt="" /></span>
              <span style="font-size:12px;font-weight:900;color:#fde68a">天书:<span class="rating-badge" style="background:${ratings.tianshu.color};color:#fff">${ratings.tianshu.label}</span></span>
            </button>
            <button id="btn-fail-xiuwei" class="settle-boost-btn">
              <span class="settle-boost-circle"><img src="${ASSET.sprite('com_playerinfo_npc')}" alt="" /></span>
              <span style="font-size:12px;font-weight:900;color:#fde68a">修为:<span class="rating-badge" style="background:${ratings.xiuwei.color};color:#fff">${ratings.xiuwei.label}</span></span>
            </button>
          </div>
        ` : ''}
        <div style="margin-top:12px">
          <button id="btn-settle-next" class="pill-btn gold" style="min-width:168px">${win ? '继续历练' : '重整再战'}</button>
          <div id="settle-countdown" style="margin-top:10px;font-size:12px;color:rgba(255,255,255,0.82)">6秒后自动关闭</div>
        </div>
      </div>
    `;
    this.modalRoot.classList.remove('hidden');

    let secLeft = 6;
    this._settleTimer = setInterval(() => {
      secLeft -= 1;
      const cdEl = document.getElementById('settle-countdown');
      if (cdEl) cdEl.textContent = `${Math.max(1, secLeft)}秒后自动关闭`;
      if (secLeft <= 0) {
        this.closeModal();
        onNext?.();
      }
    }, 1000);

    document.getElementById('btn-dps-chart')?.addEventListener('click', () => {
      document.getElementById('settle-dps-bars')?.classList.toggle('hidden');
    });
    document.getElementById('btn-fail-tianshu')?.addEventListener('click', () => {
      this.closeModal();
      this.shimenView = 'tianshu';
      this.tianshuSub = 'tree';
      this.switchTab('shimen');
    });
    document.getElementById('btn-fail-xiuwei')?.addEventListener('click', () => {
      this.closeModal();
      this.shimenView = 'xiuwei';
      this.switchTab('shimen');
    });
    document.getElementById('btn-settle-next')?.addEventListener('click', () => {
      this.closeModal();
      onNext?.();
    });
  }

  // =========================================================================
  // 师门页签（012 山门 / 018 修为树 / 013 天书树 / 046 门派羁绊分页轮播）
  // =========================================================================
  renderShimen() {
    if (this.xiuweiViewer && this.shimenView !== 'xiuwei') {
      this.xiuweiViewer.dispose();
      this.xiuweiViewer = null;
    }
    this.renderTopBarAndNav();
    const root = document.getElementById('shimen-container');
    if (this.shimenView === 'hub') {
      const canBreak = gameState.canBreakthrough();
      root.innerHTML = `
        <div class="shimen-hub">
          <video class="shimen-video-bg" src="./game-assets/apk/assets/Videos/shimen.mp4" poster="./game-assets/textures/_bundles/resourcesab/prefabs/scenes/map_gui_003.prefab/ShiMenVideoBG.png" autoplay loop muted playsinline></video>
          <button class="shimen-plaque" id="go-tianshu" style="top:13.5%;left:39%">
            <strong>天书</strong>
          </button>
          <button class="shimen-plaque" id="go-xiuwei" style="top:56%;right:21%">
            <strong>修为</strong>
            ${canBreak ? `<img class="badge-dot" src="${ASSET.sprite('com_tag_redpoint_01')}" alt="" />` : ''}
          </button>
          <button class="shimen-plaque" id="go-shenbing" style="bottom:25%;left:10%;background:linear-gradient(180deg,rgba(245,240,222,0.92),rgba(225,214,185,0.92));color:#4e3d28;border-color:#cbb68e">
            <strong>神兵</strong>
          </button>
        </div>
      `;
      document.getElementById('go-tianshu').onclick = () => { audio.playClick(); this.shimenView = 'tianshu'; this.renderShimen(); };
      document.getElementById('go-xiuwei').onclick = () => { audio.playClick(); this.shimenView = 'xiuwei'; this.renderShimen(); };
      document.getElementById('go-shenbing').onclick = () => { audio.playClick(); this.shimenView = 'shenbing'; this.renderShimen(); };
      return;
    }

    if (this.shimenView === 'xiuwei') return this._renderXiuwei(root);
    if (this.shimenView === 'tianshu') return this._renderTianshu(root);
    if (this.shimenView === 'shenbing') return this._renderShenbing(root);
  }

  // 1:1 复刻 018_shimen_xiuwei.png（真 3D 树下草坡吐纳场景 + 左上宗师之路 + 右上新解锁紫书横条 + 底部进补混元青）
  _renderXiuwei(root) {
    if (this.xiuweiViewer) {
      this.xiuweiViewer.dispose();
      this.xiuweiViewer = null;
    }
    const s = gameState.state;
    const realm = gameState.getRealm();
    const pct = Math.min(100, (s.xiuweiExp / realm.needExp) * 100);
    const canBreak = gameState.canBreakthrough();

    const bubblesHtml = s.bubbles.map((b) => `
      <button class="xiuwei-bubble" data-bid="${b.id}" style="left:${b.x}%;top:${b.y}%;animation-delay:${(b.id % 5) * 0.35}s">
        <img src="${ASSET.xiuweiBall(b.style)}" alt="灵气" />
        <span>${Math.round(b.val * (1 + s.realmIndex * 0.35))}</span>
      </button>
    `).join('');

    root.innerHTML = `
      <div class="xiuwei-view">
        <canvas id="xiuwei-3d-canvas" class="xiuwei-webgl-bg"></canvas>
        <div style="display:flex;justify-content:space-between;align-items:flex-start;z-index:5;position:relative">
          <div style="display:flex;flex-direction:column;align-items:center">
            <div style="width:46px;height:46px;border-radius:50%;background:rgba(22,42,38,0.72);border:1.5px solid rgba(255,255,255,0.65);display:grid;place-items:center">
              <img src="${ASSET.sprite('player_level_btn_icon_shenshi')}" style="width:32px;height:32px;object-fit:contain" />
            </div>
            <span style="margin-top:-6px;padding:1px 8px;border-radius:99px;background:rgba(22,42,38,0.82);font-size:11px;font-weight:800;color:#fff">宗师之路</span>
          </div>

          <div style="display:flex;align-items:center;gap:6px;padding:5px 10px 5px 18px;border-radius:99px 0 0 99px;background:linear-gradient(90deg,rgba(20,42,32,0),rgba(20,42,32,0.72) 25%,rgba(20,42,32,0.82));margin-right:-14px">
            <div style="text-align:right;font-size:12px;line-height:1.35">
              <div style="color:#fff;font-weight:900">【${realm.name}】</div>
              <div style="color:#fde68a;font-weight:800">${realm.unlockText}</div>
            </div>
            <div style="position:relative;width:44px;height:44px">
              <img src="${ASSET.item('71203')}" style="width:42px;height:42px;object-fit:contain" />
              <img src="${ASSET.sprite('com_tag_redpoint_04')}" style="position:absolute;top:-6px;right:-4px;width:24px;height:24px" />
            </div>
          </div>
        </div>

        <div class="xiuwei-bubbles">${bubblesHtml}</div>

        <div style="position:relative;z-index:5;text-align:center;padding-bottom:6px">
          <div style="font-size:20px;font-weight:900;color:#fff;text-shadow:0 2px 6px rgba(0,0,0,0.88);margin-bottom:8px">${realm.group}【${realm.sub}】</div>
          <div style="display:flex;align-items:center;gap:6px;margin:0 8px 34px">
            <div style="flex:1;height:14px;border-radius:99px;background:rgba(12,26,18,0.72);border:1px solid rgba(255,255,255,0.42);position:relative;overflow:hidden">
              <div style="width:${Math.max(4, pct)}%;height:100%;background:linear-gradient(90deg,#fde68a,#f59e0b);border-radius:99px"></div>
              <span style="position:absolute;inset:0;display:grid;place-items:center;font-size:11px;font-weight:800;color:#fff;text-shadow:0 1px 2px #000">${s.xiuweiExp}/${realm.needExp}</span>
            </div>
            <span style="width:20px;height:20px;border-radius:50%;background:rgba(255,255,255,0.88);color:#334155;font-size:12px;font-weight:900;display:grid;place-items:center">?</span>
          </div>

          <div style="font-size:13px;font-weight:900;color:#ffffff;text-shadow:0 1px 4px rgba(0,0,0,0.92),0 0 2px #000;margin-bottom:6px">今日次数：<span style="color:#6ee7b7">${Math.max(0, 10 - (s.herbUsedToday || 0))}/10</span></div>
          <div style="display:flex;align-items:center;justify-content:center;gap:12px">
            <button id="btn-xw-back" class="book-back-btn xiuwei-back-light" style="position:absolute;left:0;bottom:2px" title="返回师门"></button>
            ${canBreak
              ? `<button id="btn-breakthrough" class="pill-btn gold" style="min-width:154px;height:40px;animation:pulseGlow 1.3s infinite">突破境界</button>`
              : `<button id="btn-use-herb" class="pill-btn gold" style="min-width:154px;height:40px;display:inline-flex;align-items:center;justify-content:center;gap:4px">
                   <span>进补</span>
                   <img src="${ASSET.item('81001')}" style="width:20px;height:20px;object-fit:contain" />
                   <span style="color:${s.herbs > 0 ? '#fff' : '#ef4444'}">${s.herbs}</span><span>/1</span>
                 </button>`
            }
          </div>
        </div>
      </div>
    `;

    const xwCanvas = document.getElementById('xiuwei-3d-canvas');
    if (xwCanvas) this.xiuweiViewer = new XiuweiHeroViewer3D(xwCanvas);

    document.getElementById('btn-xw-back').onclick = () => { audio.playClick(); this.shimenView = 'hub'; this.renderShimen(); };
    root.querySelectorAll('.xiuwei-bubble').forEach((btn) => {
      btn.addEventListener('click', () => {
        const gain = gameState.popBubble(Number(btn.dataset.bid));
        if (gain) {
          audio.playPop();
          this.toast(`吸纳天地灵气，修为 +${gain}！`);
          this._renderXiuwei(root);
        }
      });
    });
    document.getElementById('btn-use-herb')?.addEventListener('click', () => {
      const res = gameState.useHerb();
      if (!res.ok) return this.toast(res.reason);
      audio.playMerge(3);
      this.toast(`服用混元青，修为 +${res.gain}！`);
      this._renderXiuwei(root);
    });
    document.getElementById('btn-breakthrough')?.addEventListener('click', () => {
      const res = gameState.breakthrough();
      if (res.ok) {
        audio.playBreakthrough();
        this.battle.syncHeroStats();
        this.toast(`境界突破成功！晋升【${res.realm.name}】！${res.realm.unlockText}`);
        this.renderAll();
      }
    });
  }

  // 1:1 复刻 013_shimen_tianshu.png（天书树）与 046_bond_page2.png（门派羁绊五页轮播 + 底部原版四图标栏）
  _renderTianshu(root) {
    const s = gameState.state;
    let bodyHtml = '';

    if (this.tianshuSub === 'tree') {
      const totalLv = TIANSHU_NODES.reduce((acc, n) => acc + (s.tianshu[n.id] || 0), 0);
      const totalMax = TIANSHU_NODES.reduce((acc, n) => acc + n.maxLv, 0);
      const renderNodeBtn = (n, isCircle = false) => {
        if (!n) return '';
        const lv = s.tianshu[n.id] || 0;
        const locked = n.req && (s.tianshu[n.req] || 0) < 1;
        const maxed = lv >= n.maxLv;
        const isAdv = n.tier !== '基础';
        return `
          <div style="display:flex;flex-direction:column;align-items:center">
            <button class="ts-node-btn ${isCircle ? 'circle' : ''} ${maxed ? 'maxed' : ''} ${locked ? 'locked' : ''} btn-ts-open" data-nid="${n.id}">
              <img class="node-art" src="${n.icon}" alt="${n.name}" />
              ${locked ? `<img class="node-lock-overlay" src="${ASSET.sprite('com_item_lock01')}" alt="" />` : ''}
              <span class="ts-node-tier ${isAdv ? 'adv' : ''}">${n.tier}</span>
              <span class="ts-node-pill">${maxed ? '圆满' : `${lv}/${n.maxLv}`}</span>
            </button>
          </div>
        `;
      };
      const [n0, n1, n2, n3, n4, n5] = TIANSHU_NODES;
      bodyHtml = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <div style="display:flex;align-items:center;gap:8px">
            <div class="top-pill" style="height:26px;background:rgba(42,82,74,0.68);font-size:12px">
              <img src="${ASSET.item('1103')}" style="width:16px;height:16px" />
              <span>${s.tianshuPoints || 0}</span>
            </div>
            <span style="width:34px;height:34px;border-radius:50%;background:#fff;border:1px solid #cbd5e1;display:grid;place-items:center;font-size:11px;font-weight:800;color:#334155">重置</span>
          </div>
          <button id="btn-ts-overview" style="border:none;border-radius:99px;background:#fff;padding:4px 12px;font-size:12px;font-weight:800;color:#334155;box-shadow:0 2px 5px rgba(0,0,0,0.08);cursor:pointer;display:inline-flex;align-items:center;gap:4px"><span>属性总览</span><img src="${ASSET.sprite('wooden_btn_detail')}" style="width:14px;height:14px;object-fit:contain;filter:brightness(0.35)" alt="" /></button>
        </div>

        <div style="text-align:center;margin-bottom:8px">
          <img src="${ASSET.uiLarge('book/book_icon_achievement_01.png')}" style="width:104px;height:82px;object-fit:contain" />
          <div style="font-size:18px;font-weight:900;color:#fff;text-shadow:0 1px 4px #28564e;margin-top:-10px">基础篇</div>
          <div style="display:inline-block;padding:1px 14px;border-radius:99px;background:#557a6e;color:#86f7c2;font-size:12px;font-weight:800;margin-top:2px">${totalLv}/${totalMax}</div>
        </div>

        <div class="ts-tree-wrap">
          ${renderNodeBtn(n0, false)}
          <div class="ts-tree-stem"></div>
          ${renderNodeBtn(n1, false)}
          <div class="ts-tree-stem"></div>
          <div class="ts-tree-branch">
            ${renderNodeBtn(n2, true)}
            ${renderNodeBtn(n3, true)}
          </div>
          <div class="ts-tree-stem"></div>
          <div class="ts-tree-branch">
            ${renderNodeBtn(n4, true)}
            ${renderNodeBtn(n5, true)}
          </div>
        </div>
      `;
    } else if (this.tianshuSub === 'tupu') {
      const grouped = [3, 4, 5, 2, 1];
      bodyHtml = `
        <div class="white-card" style="text-align:center">
          <b>武学图谱已收录：${s.discovered.length} / ${MARTIAL_ARTS.length}</b>
          <div style="font-size:12px;color:#0d9488;margin-top:2px">每收录 1 门武学，全基础属性永久 +1%（当前 +${s.discovered.length}%）</div>
        </div>
        ${grouped.map((qId) => {
          const qDef = QUALITIES[qId];
          const list = MARTIAL_ARTS.filter((m) => m.quality === qId);
          return `
            <div class="white-card">
              <div class="unity-sec-title" style="margin-top:0">${qDef.name}武学</div>
              <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
                ${list.map((m) => {
                  const has = s.discovered.includes(m.id);
                  return `
                    <div style="text-align:center;opacity:${has ? 1 : 0.45}">
                      <div style="position:relative;aspect-ratio:1;border-radius:8px;overflow:hidden">
                        <img src="${m.icon}" style="position:absolute;inset:4%;width:92%;height:92%;object-fit:cover;border-radius:6px;filter:${has ? 'none' : 'grayscale(1)'}" />
                        <img src="${ASSET.qualitySlot(m.quality)}" style="position:relative;width:100%;height:100%;object-fit:fill;z-index:2" />
                        ${m.sect ? `<img src="${ASSET.sectTag(m.sect)}" style="position:absolute;top:0;left:0;width:18px;height:18px;z-index:3" />` : ''}
                      </div>
                      <div style="font-size:11px;font-weight:800;margin-top:3px">${m.name}</div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `;
        }).join('')}
      `;
    } else if (this.tianshuSub === 'jiban') {
      // 1:1 复刻 046_bond_page2.png：顶部「当前羁绊」+ 下方「所有羁绊」单门派翻页轮播卡片！
      const bonds = gameState.getActiveBonds();
      const topBond = Object.values(bonds).find((b) => b.count > 0) || bonds.shaolin;
      const curSectId = SECT_ORDER[this.bondPageIdx % SECT_ORDER.length];
      const curBond = bonds[curSectId];
      const sectSkills = MARTIAL_ARTS.filter((m) => m.sect === curSectId);

      // 补齐 14 格（2行×7列）展示觉醒「极」与「?」未收录槽，严格对齐 046_bond_page2.png！
      const matrixCells = [];
      sectSkills.forEach((m) => matrixCells.push({ m, awaken: false }));
      sectSkills.slice(-Math.min(4, sectSkills.length)).forEach((m) => matrixCells.push({ m, awaken: true }));
      while (matrixCells.length < 14) matrixCells.push({ mystery: true });

      bodyHtml = `
        <div style="position:relative;margin-top:10px;margin-bottom:22px">
          <div style="position:absolute;top:-12px;left:50%;transform:translateX(-50%);padding:3px 22px;border-radius:99px;background:linear-gradient(90deg,#52998e,#6bb0a5,#52998e);color:#fff;font-size:13px;font-weight:800;z-index:2;white-space:nowrap">❖ &nbsp;当前羁绊&nbsp; ❖</div>
          <div style="background:rgba(255,255,255,0.55);border:1px solid rgba(255,255,255,0.8);border-radius:12px;padding:18px 10px 10px">
            <div class="white-card" style="margin:0;display:flex;align-items:center;gap:12px">
              <img src="${topBond.sect.icon}" style="width:48px;height:48px;border-radius:8px;filter:${topBond.activeTier ? 'none' : 'brightness(0.55)'}" />
              <div style="flex:1">
                <div style="display:flex;justify-content:space-between;align-items:center">
                  <span style="font-size:15px;font-weight:900"><b style="color:${topBond.sect.color}">【${topBond.sect.name}】</b>1级羁绊</span>
                  <span style="padding:0 10px;border-radius:99px;background:#c5b89b;color:#fff;font-size:11px;font-weight:800">${topBond.count}/${topBond.sect.tiers[0].need}</span>
                </div>
                <div style="font-size:12px;color:#0d9488;font-weight:700;margin-top:4px">${topBond.sect.tiers[0].desc}</div>
              </div>
            </div>
          </div>
        </div>

        <div style="background:#84b3aa;border-radius:12px;overflow:hidden;box-shadow:0 4px 14px rgba(20,60,50,0.1)">
          <div style="text-align:center;padding:6px 0;color:#fff;font-size:14px;font-weight:800">❖ &nbsp;所有羁绊&nbsp; ❖</div>
          <div style="background:#ffffff;border-radius:12px 12px 0 0;padding:14px 12px 12px">
            <div style="display:flex;align-items:center;gap:12px;padding-bottom:10px;border-bottom:1px solid #eef2f3">
              <img src="${curBond.sect.icon}" style="width:52px;height:52px;border-radius:8px" />
              <div>
                <div style="font-size:16px;font-weight:900;color:#273634">【${curBond.sect.name}】武学羁绊</div>
                <div style="font-size:13px;font-weight:800;color:#c26a27;margin-top:3px">同时上阵【${curBond.sect.name}】武学${curBond.sect.tiers.map((t) => t.need).join('/')}个</div>
              </div>
            </div>

            <div style="padding:10px 2px">
              ${curBond.sect.tiers.map((t, ti) => `
                <div style="margin-bottom:8px">
                  <div style="display:flex;align-items:center;gap:6px;font-size:14px;font-weight:800;color:#273634">
                    <span style="font-size:10px;color:#64748b">❖</span>
                    <span>${ti + 1}级羁绊</span>
                    <span style="padding:0 10px;border-radius:99px;background:${curBond.count >= t.need ? '#10b981' : '#c5b89b'};color:#fff;font-size:11px">${curBond.count}/${t.need}</span>
                  </div>
                  <div style="font-size:13px;color:${curBond.count >= t.need ? '#0d9488' : '#64748b'};padding-left:14px;margin-top:2px">${t.desc}</div>
                </div>
              `).join('')}
            </div>

            <div style="font-size:14px;font-weight:800;color:#273634;margin:4px 0 8px"><span style="font-size:10px;color:#64748b">❖</span> 羁绊武学</div>
            <div style="display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:5px;margin-bottom:14px">
              ${matrixCells.slice(0, 14).map((cell) => {
                if (cell.mystery) {
                  return `<div style="min-width:0;aspect-ratio:1;border-radius:6px;background:#1e2426;border:1.5px solid #9ca3af;display:grid;place-items:center;color:#9ca3af;font-size:18px;font-weight:900">?</div>`;
                }
                const m = cell.m;
                return `
                  <div style="position:relative;min-width:0;aspect-ratio:1;border-radius:6px;overflow:visible">
                    <img src="${m.icon}" style="width:100%;height:100%;object-fit:cover;border-radius:6px;border:1.5px solid ${QUALITIES[m.quality].color};display:block" />
                    <img src="${ASSET.sectTag(curSectId)}" style="position:absolute;top:-3px;left:-3px;width:13px;height:13px" />
                    ${cell.awaken ? '<span style="position:absolute;top:-3px;right:-2px;background:#f59e0b;color:#fff;font-size:8px;font-weight:900;padding:0 2px;border-radius:3px">极</span>' : ''}
                  </div>
                `;
              }).join('')}
            </div>

            <!-- 底部五门派左右切换轮播条 (< ◆ ◇ ◆ ◆ ◆ >) -->
            <div style="height:32px;border-radius:99px;background:#eef5ef;display:flex;align-items:center;justify-content:space-between;padding:0 16px">
              <button id="btn-bond-prev" style="border:none;background:transparent;font-size:18px;font-weight:900;color:#7c8f88;cursor:pointer">❮</button>
              <div style="display:flex;gap:12px;align-items:center">
                ${SECT_ORDER.map((_, idx) => `
                  <span class="bond-dot-btn" data-bidx="${idx}" style="width:8px;height:8px;transform:rotate(45deg);background:${idx === this.bondPageIdx ? '#fef08a' : '#7c8f88'};border:1px solid #64748b;cursor:pointer"></span>
                `).join('')}
              </div>
              <button id="btn-bond-next" style="border:none;background:transparent;font-size:18px;font-weight:900;color:#7c8f88;cursor:pointer">❯</button>
            </div>
          </div>
        </div>
      `;
    } else {
      const milestones = [
        { id: 'g1', need: 10, desc: '收录 10 门武学 → 灵石×300' },
        { id: 'g2', need: 14, desc: '收录 14 门武学 → 灵石×500 + 混元青×1' },
        { id: 'g3', need: 18, desc: '收录 18 门武学 → 灵石×800 + 混元青×2' },
        { id: 'g4', need: 22, desc: '收录 22 门武学 → 灵石×1500 + 橙品装备' },
      ];
      bodyHtml = milestones.map((ms) => {
        const claimed = s.claimedGifts.includes(ms.id);
        const ready = s.discovered.length >= ms.need && !claimed;
        return `
          <div class="white-card" style="display:flex;align-items:center;justify-content:space-between;gap:10px">
            <div>
              <div style="font-size:13px;font-weight:900">${ms.desc}</div>
              <div style="font-size:11px;color:#0d9488;margin-top:2px">进度：${s.discovered.length} / ${ms.need}</div>
            </div>
            <button class="pill-btn ${claimed ? 'gray' : ready ? 'gold' : 'gray'} btn-gift-claim" data-gid="${ms.id}" style="min-width:86px;height:32px;font-size:13px" ${ready ? '' : 'disabled'}>
              ${claimed ? '已领' : ready ? '领取' : '未达成'}
            </button>
          </div>
        `;
      }).join('');
    }

    const tabIcon = (sub, base) => `./game-assets/textures/assets/resourcesab/ui_new/uiimage/icon/tab/${base}_${this.tianshuSub === sub ? 'active' : 'idle'}.png`;

    root.innerHTML = `
      <div class="jade-page">
        <div style="padding:2px 16px 4px;font-size:22px;font-weight:900;color:#fff;text-shadow:0 1px 4px #28564e">${
          this.tianshuSub === 'tree' ? '天书' : this.tianshuSub === 'tupu' ? '图谱' : this.tianshuSub === 'jiban' ? '' : '馈赠'
        }</div>
        <div class="jade-scroll">${bodyHtml}</div>
        <div class="book-bottom-bar">
          <button id="ts-back" class="book-back-btn" title="返回师门"></button>
          <div class="book-tabs-right">
            <button class="book-tab-item ${this.tianshuSub === 'tree' ? 'active' : ''}" data-sub="tree">
              <img class="bt-icon" src="${tabIcon('tree', 'tab_book_01')}" alt="" />
              <span>天书</span>
            </button>
            <button class="book-tab-item ${this.tianshuSub === 'tupu' ? 'active' : ''}" data-sub="tupu">
              <img class="bt-icon" src="${tabIcon('tupu', 'tab_book_02')}" alt="" />
              <span>图谱</span>
            </button>
            <button class="book-tab-item ${this.tianshuSub === 'jiban' ? 'active' : ''}" data-sub="jiban">
              <img class="bt-icon" src="${tabIcon('jiban', 'tab_book_03')}" alt="" />
              <span>羁绊</span>
            </button>
            <button class="book-tab-item ${this.tianshuSub === 'gift' ? 'active' : ''}" data-sub="gift">
              <img class="bt-icon" src="${tabIcon('gift', 'tab_com_gift')}" alt="" />
              <span>馈赠</span>
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('ts-back').onclick = () => { audio.playClick(); this.shimenView = 'hub'; this.renderShimen(); };
    root.querySelectorAll('.book-tab-item[data-sub]').forEach((b) => {
      b.onclick = () => { audio.playClick(); this.tianshuSub = b.dataset.sub; this._renderTianshu(root); };
    });
    document.getElementById('btn-bond-prev')?.addEventListener('click', () => {
      audio.playClick();
      this.bondPageIdx = (this.bondPageIdx + SECT_ORDER.length - 1) % SECT_ORDER.length;
      this._renderTianshu(root);
    });
    document.getElementById('btn-bond-next')?.addEventListener('click', () => {
      audio.playClick();
      this.bondPageIdx = (this.bondPageIdx + 1) % SECT_ORDER.length;
      this._renderTianshu(root);
    });
    root.querySelectorAll('.bond-dot-btn').forEach((d) => {
      d.onclick = () => { audio.playClick(); this.bondPageIdx = Number(d.dataset.bidx); this._renderTianshu(root); };
    });
    document.getElementById('btn-ts-overview')?.addEventListener('click', () => {
      const st = gameState.computeStats();
      this.openModal(`
        <div style="font-size:18px;font-weight:900;margin-bottom:10px">天书属性总览</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:13px;background:#f1faf6;padding:12px;border-radius:10px">
          <div>总气血：<b>${st.hp.toLocaleString()}</b></div>
          <div>总攻击：<b>${st.atk}</b></div>
          <div>总防御：<b>${st.def}</b></div>
          <div>会心率：<b>${Math.round(st.crit * 100)}%</b></div>
        </div>
      `);
    });
    root.querySelectorAll('.btn-ts-open').forEach((b) => {
      b.onclick = () => {
        audio.playClick();
        const n = TIANSHU_NODES.find((x) => x.id === b.dataset.nid);
        if (!n) return;
        const lv = gameState.state.tianshu[n.id] || 0;
        const locked = n.req && (gameState.state.tianshu[n.req] || 0) < 1;
        const cost = n.costBase * (lv + 1);
        const maxed = lv >= n.maxLv;
        const enough = gameState.state.spiritStone >= cost;
        this.openModal(`
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
            <img src="${n.icon}" style="width:60px;height:60px;border-radius:12px;border:2px solid #10b981;object-fit:cover" />
            <div>
              <div style="font-size:18px;font-weight:900">${n.name} <span style="font-size:12px;color:#00a79d">${maxed ? '圆满' : `${lv}/${n.maxLv}`}</span></div>
              <div style="font-size:12px;color:#475569">${n.tier}天书节点</div>
            </div>
          </div>
          <div class="unity-sec-title">下级效果</div>
          <div style="padding:4px 8px 10px;font-size:13px">${n.desc}</div>
          <div style="text-align:center;margin-top:8px">
            ${!maxed ? `<div style="font-size:12px;margin-bottom:8px">消耗灵石：<b style="color:${enough ? '#00a79d' : '#e64b4b'}">${gameState.state.spiritStone}</b> / ${cost}</div>` : ''}
            <button id="btn-ts-modal-up" class="pill-btn ${maxed || locked || !enough ? 'gray' : 'gold'}" ${maxed ? 'disabled' : ''}>
              ${maxed ? '已圆满' : locked ? '前置未解锁' : '激活领悟'}
            </button>
          </div>
        `);
        document.getElementById('btn-ts-modal-up')?.addEventListener('click', () => {
          const res = gameState.upgradeTianshu(n.id);
          if (!res.ok) return this.toast(res.reason);
          audio.playMerge(3);
          this.battle.syncHeroStats();
          this.toast(`【${n.name}】提升至 ${res.lv}/${n.maxLv}！`);
          this.closeModal();
          this.renderAll();
        });
      };
    });
    root.querySelectorAll('.btn-gift-claim').forEach((b) => {
      b.onclick = () => {
        const id = b.dataset.gid;
        const map = { g1: [300, 0, 0], g2: [500, 1, 0], g3: [800, 2, 0], g4: [1500, 0, 4] };
        const [st, hb, eq] = map[id];
        gameState.state.claimedGifts.push(id);
        gameState.state.spiritStone += st;
        gameState.state.herbs += hb;
        if (eq) gameState.state.bagEquips.push(generateEquipment(null, eq));
        gameState.notify('gift');
        audio.playVictory();
        this.toast('领取天书馈赠成功！');
        this.renderAll();
      };
    });
  }

  _renderShenbing(root) {
    const s = gameState.state;
    root.innerHTML = `
      <div class="jade-page">
        <div style="padding:2px 16px 6px;font-size:21px;font-weight:900;color:#fff;text-shadow:0 1px 4px #28564e">神兵阁</div>
        <div class="jade-scroll">
          ${DIVINE_WEAPONS.map((w) => {
            const owned = s.ownedWeapons.includes(w.id);
            const active = s.activeWeapon === w.id;
            return `
              <div class="white-card" style="display:flex;align-items:center;gap:12px">
                <img src="${w.icon}" style="width:56px;height:56px;object-fit:contain;background:#1e293b;border-radius:10px;padding:4px" />
                <div style="flex:1">
                  <div style="font-size:14px;font-weight:900">${w.name} ${active ? '<span style="color:#d97706;font-size:11px">[佩戴中]</span>' : ''}</div>
                  <div style="font-size:11px;color:#475569">攻击 +${w.atk} · 气血 +${w.hp}</div>
                  <div style="font-size:11px;color:#059669;font-weight:800">特效：${w.bonus}</div>
                </div>
                <button class="pill-btn ${owned ? 'jade' : 'gold'} btn-forge" data-wid="${w.id}" style="min-width:86px;height:32px;font-size:13px">
                  ${active ? '已佩戴' : owned ? '佩戴' : `${w.cost}灵石`}
                </button>
              </div>
            `;
          }).join('')}
        </div>
        <div class="book-bottom-bar">
          <button id="sb-back" class="book-back-btn" title="返回师门"></button>
        </div>
      </div>
    `;
    document.getElementById('sb-back').onclick = () => { audio.playClick(); this.shimenView = 'hub'; this.renderShimen(); };
    root.querySelectorAll('.btn-forge').forEach((b) => {
      b.onclick = () => {
        const res = gameState.forgeWeapon(b.dataset.wid);
        if (!res.ok) return this.toast(res.reason);
        audio.playBreakthrough();
        this.battle.syncHeroStats();
        this.toast(res.forged ? `成功铸造神兵【${res.forged.name}】！` : '已切换佩戴神兵！');
        this.renderAll();
      };
    });
  }

  // =========================================================================
  // 角色页（1:1 复刻 006_tab_role.png：左上圆头像+战力+境界，右上点赞+装扮，下方共鸣+一键穿戴+配装）
  // =========================================================================
  renderRole() {
    if (this.roleViewer) {
      this.roleViewer.dispose();
      this.roleViewer = null;
    }
    const s = gameState.state;
    const realm = gameState.getRealm();
    const stats = gameState.computeStats();
    const pct = Math.min(100, (s.xiuweiExp / realm.needExp) * 100);
    const el = document.getElementById('role-screen');
    const mainSlots = EQUIP_SLOTS.slice(0, 6);
    const accSlots = EQUIP_SLOTS.slice(6, 8);
    const renderSlot = (sl) => {
      const eq = s.equipped[sl.id];
      return `
        <div class="equip-slot-box" data-eqslot="${sl.id}" style="${eq ? `background:url('${ASSET.qualitySquare(eq.quality)}') center / 100% 100% no-repeat` : ''}">
          ${eq ? `<img src="${eq.icon}" alt="${eq.name}" /><small>${eq.name}${eq.enhance ? '+' + eq.enhance : ''}</small>` : `<span class="plus-mark">+</span>`}
        </div>
      `;
    };

    el.innerHTML = `
      <div class="role-3d-full">
        <canvas id="role-3d-canvas"></canvas>
      </div>
      <div class="role-hud-overlay">
        <div class="role-header-bar">
          <div>
            <div class="role-profile-card">
              <div class="role-avatar-ring">
                <img src="${ASSET.head('chr_male_001')}" alt="" />
              </div>
              <div style="line-height:1.25">
                <div style="display:flex;align-items:center;gap:5px;font-size:14px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000">
                  <span>${s.playerName}</span>
                  <img src="${ASSET.sprite('com_power_icon2')}" style="width:16px;height:16px" />
                  <span style="color:#ffe999">${stats.power}</span>
                </div>
                <div style="font-size:11px;font-weight:800;color:#fff">${realm.name}</div>
                <div style="font-size:11px;font-weight:900;color:#86f7c2">${pct.toFixed(2)}%</div>
              </div>
            </div>

            <div class="role-attr-title">
              <span>❖ 属性</span>
              <button id="btn-role-detail" style="width:20px;height:20px;border-radius:50%;border:none;background:#fff;color:#334155;font-weight:900;font-size:12px;cursor:pointer">!</button>
            </div>
            <div class="role-attr-lines">
              <div><span>气血:</span><b>${stats.hp}</b></div>
              <div><span>真气:</span><b>${stats.qi}</b></div>
              <div><span>攻击:</span><b>${stats.atk}</b></div>
              <div><span>防御:</span><b>${stats.def}</b></div>
            </div>
          </div>

          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:14px;margin-top:36px">
            <button id="btn-role-like" style="display:flex;align-items:center;gap:14px;height:28px;padding:0 16px 0 3px;border-radius:99px;border:1px solid rgba(255,255,255,0.65);background:rgba(48,120,165,0.45);color:#fff;font-weight:800;cursor:pointer">
              <span style="width:22px;height:22px;border-radius:50%;background:#fff;display:grid;place-items:center">
                <img src="${ASSET.sprite('com_icon_player_upvote_btn')}" style="width:14px;height:14px;object-fit:contain;filter:brightness(0.55) sepia(0.8) hue-rotate(-15deg) saturate(2.5)" />
              </span>
              <span>${s.likes || 0}</span>
            </button>
            <button id="btn-role-dress" style="position:relative;width:42px;height:42px;border-radius:50%;border:1.5px solid rgba(255,255,255,0.75);background:rgba(28,58,72,0.58);display:grid;place-items:center;cursor:pointer">
              <img src="${ASSET.sprite('player_transmog_icon')}" style="width:24px;height:24px;object-fit:contain;margin-top:-4px" />
              <span style="position:absolute;bottom:-5px;font-size:11px;font-weight:900;color:#fff;text-shadow:0 1px 3px #000">装扮</span>
            </button>
          </div>
        </div>

        <div class="role-bottom-equip">
          <div class="equip-sections-row">
            <div>
              <div class="equip-sec-head"><span>装备</span></div>
              <div class="equip-grid-6">${mainSlots.map(renderSlot).join('')}</div>
            </div>
            <div>
              <div class="equip-sec-head"><span>饰品</span></div>
              <div class="equip-grid-2">${accSlots.map(renderSlot).join('')}</div>
            </div>
          </div>
          <div class="role-action-row">
            <button id="btn-forge-roll" class="role-white-circle-btn" title="共鸣 / 锻造新装备">
              <span class="rwc-circle"><img src="${ASSET.sprite('player_resonance_btn')}" alt="" /></span>
              <span>共鸣</span>
            </button>
            <button id="btn-equip-all" class="pill-btn gold" style="min-width:152px;height:38px;font-size:15px">一键穿戴</button>
            <button id="btn-role-bag" class="role-white-circle-btn" title="查看闲置配装">
              <span class="rwc-circle"><img src="${ASSET.sprite('com_icon_player_solution_btn')}" alt="" /></span>
              <span>配装</span>
            </button>
          </div>
        </div>
      </div>
    `;

    const roleCanvas = document.getElementById('role-3d-canvas');
    if (roleCanvas) this.roleViewer = new RoleHeroViewer3D(roleCanvas);

    document.getElementById('btn-role-like').onclick = () => {
      s.likes = (s.likes || 0) + 1;
      gameState.save();
      audio.playClick();
      this.renderRole();
    };
    document.getElementById('btn-role-dress').onclick = () => this.toast('当前穿戴外观：嵩山少侠·青衫剑客');
    document.getElementById('btn-equip-all').onclick = () => {
      const ok = gameState.equipBestAll();
      audio.playMerge(2);
      this.battle.syncHeroStats();
      this.toast(ok ? '已一键穿戴最强装备！' : '当前穿戴已是最佳装备！');
      this.renderAll();
    };
    document.getElementById('btn-role-detail').onclick = () => {
      audio.playClick();
      this.openModal(`
        <div style="font-size:18px;font-weight:900;margin-bottom:10px">${s.playerName} · 详细属性</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:13px;background:#f1faf6;padding:12px;border-radius:10px">
          <div>气血：<b>${stats.hp.toLocaleString()}</b></div>
          <div>真气：<b>${stats.qi}</b></div>
          <div>攻击：<b>${stats.atk}</b></div>
          <div>防御：<b>${stats.def}</b></div>
          <div>会心率：<b>${Math.round(stats.crit * 100)}%</b></div>
          <div>攻速加成：<b>+${Math.round(stats.haste * 100)}%</b></div>
          <div>招架率：<b>${Math.round(stats.parry * 100)}%</b></div>
          <div>武学增伤：<b>+${Math.round(stats.dmgPct * 100)}%</b></div>
        </div>
      `);
    };
    document.getElementById('btn-role-bag').onclick = () => {
      audio.playClick();
      this.openModal(`
        <div style="font-size:18px;font-weight:900;margin-bottom:10px">配装方案 · 闲置装备 (${s.bagEquips.length})</div>
        <div style="display:flex;flex-direction:column;gap:8px">
          ${s.bagEquips.map((e) => `
            <div style="display:flex;align-items:center;gap:10px;background:#f8fafc;padding:8px 10px;border-radius:10px">
              <div style="width:44px;height:44px;border-radius:6px;background:url('${ASSET.qualitySquare(e.quality)}') center/100% 100% no-repeat;display:grid;place-items:center">
                <img src="${e.icon}" style="width:36px;height:36px;object-fit:contain" />
              </div>
              <div style="flex:1">
                <div style="font-size:13px;font-weight:900">${e.name}</div>
                <div style="font-size:11px;color:#475569">攻+${e.atk} 血+${e.hp} 防+${e.def}</div>
              </div>
              <button class="pill-btn gold bag-eq-btn" data-uid="${e.uid}" style="min-width:74px;height:30px;font-size:12px">穿戴</button>
            </div>
          `).join('') || '<div style="text-align:center;color:#64748b;padding:16px">暂无闲置装备，可点击左下「共鸣」锻造新装备！</div>'}
        </div>
      `);
      this.modalRoot.querySelectorAll('.bag-eq-btn').forEach((b) => {
        b.onclick = () => {
          gameState.equipItem(b.dataset.uid);
          audio.playClick();
          this.battle.syncHeroStats();
          this.toast('装备已穿戴！');
          this.closeModal();
          this.renderAll();
        };
      });
    };
    document.getElementById('btn-forge-roll').onclick = () => {
      if (gameState.state.spiritStone < 120) return this.toast('灵石不足（锻造共鸣需 120 灵石）');
      gameState.state.spiritStone -= 120;
      const maxQ = Math.min(5, Math.max(2, gameState.getRealm().unlockMaxQuality));
      const roll = Math.random();
      const q = roll < 0.2 ? maxQ : roll < 0.5 ? Math.max(1, maxQ - 1) : 1;
      const eq = generateEquipment(null, q);
      gameState.state.bagEquips.push(eq);
      gameState.notify('equip');
      audio.playMerge(q);
      this.toast(`共鸣打造出【${QUALITIES[q].name}·${eq.name}】！`);
      this.renderAll();
    };
    el.querySelectorAll('.equip-slot-box').forEach((box) => {
      box.onclick = () => {
        const sid = box.dataset.eqslot;
        const eq = gameState.state.equipped[sid];
        if (!eq) return this.toast('该部位尚未穿戴装备');
        const cost = 80 + (eq.enhance || 0) * 65;
        this.openModal(`
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
            <div style="width:58px;height:58px;border-radius:8px;background:url('${ASSET.qualitySquare(eq.quality)}') center/100% 100% no-repeat;display:grid;place-items:center">
              <img src="${eq.icon}" style="width:46px;height:46px;object-fit:contain" />
            </div>
            <div>
              <div style="font-size:17px;font-weight:900">${eq.name} ${eq.enhance ? `+${eq.enhance}` : ''}</div>
              <div style="font-size:12px;color:#475569">攻击 +${eq.atk} · 气血 +${eq.hp} · 防御 +${eq.def}</div>
            </div>
          </div>
          <div style="text-align:center">
            <button id="btn-do-enh" class="pill-btn gold">精炼强化 (${cost}灵石)</button>
          </div>
        `);
        document.getElementById('btn-do-enh').onclick = () => {
          const res = gameState.enhanceEquip(sid);
          if (!res.ok) return this.toast(res.reason);
          audio.playMerge(3);
          this.battle.syncHeroStats();
          this.toast(`强化成功！${eq.name} +${res.enhance}`);
          this.closeModal();
          this.renderAll();
        };
      };
    });
  }

  renderYouli() {
    const el = document.getElementById('youli-container');
    el.innerHTML = `
      <div style="position:absolute;top:52px;left:12px;right:12px;background:rgba(14,34,28,0.82);padding:8px 12px;border-radius:12px;font-size:12px;border:1px solid rgba(254,240,138,0.35)">
        <b>九州游历 · 秘境首领挑战</b>（击败掉落高阶装备与混元青）
      </div>
      ${TRAVEL_SPOTS.map((sp) => `
        <button class="map-pin" data-tid="${sp.id}" style="left:${sp.x}%;top:${sp.y}%">
          <img src="${sp.portrait}" alt="${sp.bossName}" />
          <div class="map-pin-text">
            <strong>${sp.name}</strong>
            <small>${sp.bossName} · 推荐 ${(sp.powerRec / 10000).toFixed(1)}万</small>
          </div>
        </button>
      `).join('')}
    `;
    el.querySelectorAll('.map-pin').forEach((pin) => {
      pin.onclick = () => {
        const sp = TRAVEL_SPOTS.find((t) => t.id === pin.dataset.tid);
        if (!sp) return;
        audio.playClick();
        this.openModal(`
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
            <img src="${sp.portrait}" style="width:62px;height:62px;border-radius:50%;border:2.5px solid #f59e0b;object-fit:cover" />
            <div>
              <div style="font-size:18px;font-weight:900">${sp.name} · ${sp.bossName}</div>
              <div style="font-size:12px;color:#b45309;font-weight:700">推荐战力：${sp.powerRec.toLocaleString()}</div>
              <div style="font-size:12px;color:#0f766e">击败奖励：${sp.rewardText} + 灵石×${sp.stones}</div>
            </div>
          </div>
          <div style="text-align:center">
            <button id="btn-go-boss" class="pill-btn gold">立即迎战首领</button>
          </div>
        `);
        document.getElementById('btn-go-boss').onclick = () => {
          this.closeModal();
          this.switchTab('lianggong');
          this.battle.startTravelBoss(sp);
        };
      };
    });
  }

  renderBangpai() {
    const s = gameState.state;
    const el = document.getElementById('bangpai-container');
    el.innerHTML = `
      <video class="shimen-video-bg" src="./game-assets/apk/assets/Videos/bangpai.mp4" poster="./game-assets/textures/_bundles/resourcesab/prefabs/scenes/x46_bangpai_001.prefab/BangPaiVideoBG.png" autoplay loop muted playsinline></video>
      <div style="position:relative;z-index:2">
      <div class="white-card">
        <div style="font-size:17px;font-weight:900;color:#0f766e">天下第一帮（宗门驻地）</div>
        <div style="font-size:12px;color:#475569;margin-top:4px">宗主：${s.playerName} · 帮派等级：Lv.5</div>
      </div>
      <div class="white-card" style="display:flex;align-items:center;justify-content:space-between;gap:10px">
        <div>
          <div style="font-size:14px;font-weight:900">每日帮派俸禄</div>
          <div style="font-size:11px;color:#475569">领取 灵石×400 + 混元青×1</div>
        </div>
        <button id="btn-bp-sign" class="pill-btn ${s.guildSignedIn ? 'gray' : 'gold'}" style="min-width:86px;height:32px;font-size:13px" ${s.guildSignedIn ? 'disabled' : ''}>
          ${s.guildSignedIn ? '已领取' : '领取'}
        </button>
      </div>
      <div class="white-card" style="display:flex;align-items:center;justify-content:space-between;gap:10px">
        <div>
          <div style="font-size:14px;font-weight:900">帮派练武场鼓舞</div>
          <div style="font-size:11px;color:#475569">全角色基础属性永久提升 +10%</div>
        </div>
        <button id="btn-bp-buff" class="pill-btn ${s.guildBuffActive ? 'jade' : 'gold'}" style="min-width:86px;height:32px;font-size:13px" ${s.guildBuffActive ? 'disabled' : ''}>
          ${s.guildBuffActive ? '已激活' : '激活'}
        </button>
      </div>
      <div class="white-card">
        <div style="font-size:15px;font-weight:900;color:#b45309">千年玄铁木人桩 · 25秒输出试炼</div>
        <div style="font-size:12px;color:#475569;margin:6px 0 10px">历史最高秒伤：<b style="color:#d97706">${s.bestDummyDps.toLocaleString()} / 秒</b></div>
        <button id="btn-bp-dummy" class="pill-btn gold" style="width:100%">开启 25 秒木人桩测伤</button>
      </div>
      </div>
    `;
    document.getElementById('btn-bp-sign')?.addEventListener('click', () => {
      s.guildSignedIn = true; s.spiritStone += 400; s.herbs += 1;
      gameState.notify('guild'); audio.playVictory(); this.renderAll();
    });
    document.getElementById('btn-bp-buff')?.addEventListener('click', () => {
      s.guildBuffActive = true; gameState.notify('guild'); this.battle.syncHeroStats();
      audio.playBreakthrough(); this.renderAll();
    });
    document.getElementById('btn-bp-dummy')?.addEventListener('click', () => {
      audio.playClick(); this.switchTab('lianggong'); this.battle.startDummyTrial();
    });
  }

  // =========================================================================
  // 背包页（1:1 复刻 054_tab_bag.png：5栏深灰绿分段胶囊 + 左侧品质方框横条卡片 + 底部已使用数量）
  // =========================================================================
  renderBag() {
    const s = gameState.state;
    const el = document.getElementById('bag-container');
    const items = [];
    if (s.herbs > 0) {
      items.push({ cat: 'drug', q: 3, icon: ASSET.item('81001'), name: '混元青 · 武者', count: s.herbs, action: 'herb' });
    }
    // 统计牌桌中经验球以对齐 054_tab_bag.png
    const orbCounts = {};
    for (const c of s.grid) {
      if (c && c.kind === 'orb') orbCounts[c.quality] = (orbCounts[c.quality] || 0) + (c.count || 1);
    }
    [3, 2, 1].forEach((q) => {
      if (orbCounts[q]) {
        items.push({ cat: 'mat', q, icon: ASSET.item(QUALITIES[q].orbItem), name: `武学经验 · ${QUALITIES[q].short}`, count: orbCounts[q] });
      }
    });
    if (s.spiritStone > 0) {
      items.push({ cat: 'special', q: 2, icon: ASSET.item('1351'), name: '宗门灵石', count: s.spiritStone });
    }
    s.bagEquips.forEach((eq) => {
      items.push({ cat: 'equip', q: eq.quality, icon: eq.icon, name: eq.name, count: 1, action: 'equip', uid: eq.uid });
    });

    const filtered = this.bagFilter === 'all' ? items : items.filter((it) => it.cat === this.bagFilter);

    el.innerHTML = `
      <div class="jade-page">
        <div class="bag-top-pills">
          ${[['all', '全部'], ['equip', '装备'], ['mat', '材料'], ['drug', '药品'], ['special', '特殊']].map(([k, lbl]) => `
            <button class="bag-pill-tab ${this.bagFilter === k ? 'active' : ''}" data-bf="${k}">${lbl}</button>
          `).join('')}
        </div>
        <div class="jade-scroll" style="display:flex;flex-direction:column;justify-content:space-between">
          <div>
            ${filtered.map((it) => `
              <div class="bag-row-card" data-act="${it.action || ''}" data-uid="${it.uid || ''}">
                <div class="bag-item-sq" style="background-image:url('${ASSET.qualitySquare(it.q)}')">
                  <img src="${it.icon}" alt="${it.name}" />
                </div>
                <div style="flex:1;font-size:15px;font-weight:700;color:#273634">${it.name}</div>
                <div style="font-size:15px;font-weight:700;color:#4a5c58">x${it.count}</div>
              </div>
            `).join('') || '<div style="text-align:center;color:#64748b;padding:48px 0;font-size:13px">暂无该分类物品</div>'}
          </div>

          <div style="text-align:center;padding-top:16px">
            <div style="height:1px;background:rgba(120,150,138,0.35);margin-bottom:8px"></div>
            <div style="font-size:13px;font-weight:700;color:#8c6a4a">当前已使用数量：${items.length}/300</div>
          </div>
        </div>
      </div>
    `;

    el.querySelectorAll('[data-bf]').forEach((b) => {
      b.onclick = () => { audio.playClick(); this.bagFilter = b.dataset.bf; this.renderBag(); };
    });
    el.querySelectorAll('.bag-row-card').forEach((row) => {
      row.onclick = () => {
        const act = row.dataset.act;
        if (act === 'herb') {
          const r = gameState.useHerb();
          if (r.ok) { audio.playMerge(3); this.toast(`使用混元青，修为 +${r.gain}！`); this.renderAll(); }
        } else if (act === 'equip') {
          gameState.equipItem(row.dataset.uid);
          audio.playClick();
          this.battle.syncHeroStats();
          this.toast('装备已穿戴！');
          this.renderAll();
        }
      };
    });
  }
}
