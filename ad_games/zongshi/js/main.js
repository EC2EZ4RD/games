import { ASSET, QUALITIES, generateEquipment } from './data.js?v=14';
import { gameState } from './state.js?v=14';
import { audio } from './audio.js?v=14';
import { BattleEngine } from './battle.js?v=14';
import { UIController } from './ui.js?v=14';
import { ToastZeroEmoji } from './ui.js?v=14';

const webglCanvas = document.getElementById('battle-webgl');
const canvas = document.getElementById('battle-canvas');
let ui = null;

const battle = new BattleEngine(webglCanvas, canvas, {
  onHudSync(snap) {
    ui?.updateBattleHud(snap);
  },
  onStageVictory(res, dpsList) {
    const { st, droppedSkills } = res;
    const rewardText = `通关奖励：灵石 +${st.rewardSpiritStone} · 修为 +${st.rewardXiuwei}` +
      (droppedSkills.length ? ` · 秘籍：${droppedSkills.map((s) => `《${s.name}》`).join(' ')}` : '') +
      (st.isBossStage ? ' · 首领战利品装备已入背包！' : '');
    ui.renderAll();
    // 玩家在其他页签浏览时，后台静默通关并提示，避免弹窗打断操作
    if (ui.activeTab !== 'lianggong') {
      ui.toast(`后台通关 ${st.tag}！灵石+${st.rewardSpiritStone}，自动进入下一关`);
      battle.startStage(gameState.state.currentStage);
      ui.renderAll();
      return;
    }
    ui.showSettlement({
      win: true,
      title: '胜 利',
      subtitle: `已突破 ${st.tag} · ${st.chapter.name}`,
      rewardsText: rewardText,
      dpsList,
      onNext: () => {
        battle.startStage(gameState.state.currentStage);
        ui.renderAll();
      },
    });
  },
  onTravelVictory(spot, dpsList) {
    gameState.state.spiritStone += spot.stones;
    gameState.state.herbs += spot.herb;
    const eq = generateEquipment(null, spot.rewardQuality);
    gameState.state.bagEquips.push(eq);
    gameState.addGridItem({ kind: 'orb', quality: Math.min(5, spot.rewardQuality), count: 1 });
    gameState.notify('travel_win');
    ui.renderAll();
    ui.showSettlement({
      win: true,
      title: '斩 妖 凯 旋',
      subtitle: `击败游历首领【${spot.bossName}】`,
      rewardsText: `获得：${QUALITIES[eq.quality].name}·${eq.name}、混元青×${spot.herb}、灵石×${spot.stones}、高阶经验球×1！`,
      dpsList,
      onNext: () => {
        battle.startStage(gameState.state.currentStage);
        ui.renderAll();
      },
    });
  },
  onDummyFinish({ totalDmg, dps, dpsList }) {
    ui.renderAll();
    ui.showSettlement({
      win: true,
      title: '试 炼 结 束',
      subtitle: `25秒总伤害：${totalDmg.toLocaleString()} · 秒伤 ${dps.toLocaleString()}/秒`,
      rewardsText: `历史最高秒伤记录：${gameState.state.bestDummyDps.toLocaleString()} / 秒`,
      dpsList,
      onNext: () => {
        battle.startStage(gameState.state.currentStage);
        ui.renderAll();
      },
    });
  },
  onDefeat(st, dpsList) {
    ui.renderAll();
    ui.showSettlement({
      win: false,
      title: '失 败',
      subtitle: `暂未突破 ${st.tag}，试试拖拽合成高阶武学、点亮天书或突破修为！`,
      rewardsText: null,
      dpsList,
      onNext: () => {
        battle.startStage(gameState.state.currentStage);
        ui.renderAll();
      },
    });
  },
});

ui = new UIController(battle);
ui.renderAll();

// 窗口尺寸变化时保持画布清晰
window.addEventListener('resize', () => battle.resize());

// 每秒挂机时间递增 & 修为气泡定时再生
setInterval(() => {
  gameState.state.idleSeconds = Math.min(86400, gameState.state.idleSeconds + 1);
  if (gameState.state.idleSeconds % 12 === 0) {
    gameState.respawnBubblesIfNeeded();
    gameState.save();
    if (ui.activeTab === 'shimen' && ui.shimenView === 'xiuwei') {
      ui.renderShimen();
    }
  }
}, 1000);

// 登录开屏起名随机池 & 点击「踏入江湖」-> 保存名号、解锁原版 BGM 并从 1-1 启动战斗！
const WUXIA_NAMES = ['嵩山少侠', '清风剑客', '云梦书生', '太华孤鸿', '青城牧云', '北冥逍遥', '剑阁听雪', '洛阳叶孤'];
const splash = document.getElementById('splash-screen');
const nameInput = document.getElementById('inp-player-name');
if (nameInput && gameState.state.playerName) {
  nameInput.value = gameState.state.playerName;
}
document.getElementById('btn-rand-name')?.addEventListener('click', () => {
  if (!nameInput) return;
  const pick = WUXIA_NAMES[Math.floor(Math.random() * WUXIA_NAMES.length)];
  nameInput.value = pick;
});

document.getElementById('btn-enter-game').addEventListener('click', () => {
  const customName = nameInput?.value?.trim();
  if (customName) {
    gameState.state.playerName = customName;
    gameState.save();
  }
  audio.unlock();
  audio.playPop();
  audio.playBgm(ASSET.bgm('mus_shanshangliangong_normal.ogg'));
  splash.classList.remove('hidden');
  splash.classList.add('fade-out');
  setTimeout(() => splash.classList.add('hidden'), 460);
  document.getElementById('btn-mobile-sb')?.classList.remove('hidden');
  battle.resize();
  battle.start();
  battle.startStage(gameState.state.currentStage);
  ui.renderAll();
});

// 大厅封面截图模式 (?cover=1)：自动进入纯净 1-1 实机练功战斗画面
if (new URLSearchParams(location.search).get('cover') === '1') {
  splash.classList.add('hidden');
  document.getElementById('btn-mobile-sb')?.classList.add('hidden');
  battle.resize();
  battle.start();
  battle.startStage(gameState.state.currentStage);
  ui.renderAll();
}
