import {
  CLASS_ABILITIES,
  computeStats,
  expForLevel,
  getClass,
  talentPointsForLevel,
  upgradeCost,
  type AbilityDef,
  type EquipmentSlot,
  type TalentBranch,
} from "@/lib/game-data";
import { LOCATIONS, rectsIntersect, type Rect } from "@/components/game/world-data";
import type { CharacterRow } from "@/components/game/types";

export interface MobState {
  spawnId: string;
  defId: string;
  name: string;
  level: number;
  x: number;
  y: number;
  spawnX: number;
  spawnY: number;
  hp: number;
  maxHp: number;
  alive: boolean;
  respawnAt: number | null;
  dotDamage: number;
  dotTicksLeft: number;
  dotNextAt: number;
  flashUntil: number;
  aggroed: boolean;           // новый флаг агрессии
  lastAttackAt: number;       // для атаки моба
}

export interface FloatingText {
  id: number;
  x: number;
  y: number;
  text: string;
  color: string;
  createdAt: number;
}

export interface BuffInfo {
  mult: number;
  until: number;
}

export interface EngineState {
  location: string;
  x: number;
  y: number;
  moveTargetX: number | null;
  moveTargetY: number | null;
  chasingMobId: string | null;
  facing: number;
  hp: number;
  mp: number;
  level: number;
  exp: number;
  gold: number;
  talents: Partial<Record<TalentBranch, number>>;
  equipment: Partial<Record<EquipmentSlot, number>>;
  inventory: { potionsHp: number; potionsMp: number };
  selectedTargetId: string | null;
  targetLock: boolean;
  mobs: Record<string, MobState>;
  cooldowns: Record<string, number>;
  buffAtk: BuffInfo | null;
  buffDef: BuffInfo | null;
  floatingTexts: FloatingText[];
  autoAttackReadyAt: number;
  invulnUntil: number;
  dead: boolean;
  message: string | null;
  messageUntil: number;
  lastSaveAt: number;
  ftId: number;
  moveArrivalAction: null | { type: "portal"; toLocation: string; toX: number; toY: number };

  // === ROGUE SYSTEM ===
  energy: number;
  maxEnergy: number;
  comboPoints: number;
  lastEnergyRegen: number;
}

const PLAYER_SPEED = 260; // px/s
const AUTO_ATTACK_INTERVAL = 1500;
const MELEE_RANGE = 90;
const RANGED_RANGE = 320;
const CASTER_CLASSES = new Set(["mage", "priest", "shaman"]);

// === AGGRO SYSTEM ===
const MOB_AGGRO_RANGE = 280;
const MOB_DEAGGRO_RANGE = 420;
const MOB_ATTACK_INTERVAL = 1650;
const MOB_ATTACK_RANGE = 68;

export function isRangedClass(className: string) {
  return className === "archer" || CASTER_CLASSES.has(className);
}

export function attackRangeFor(className: string) {
  return isRangedClass(className) ? RANGED_RANGE : MELEE_RANGE;
}

export function createInitialEngineState(character: CharacterRow): EngineState {
  const mobs: Record<string, MobState> = {};
  const loc = LOCATIONS[character.location] ?? LOCATIONS.city;
  for (const sp of loc.monsterSpawns) {
    mobs[sp.id] = {
      spawnId: sp.id,
      defId: sp.monster.id,
      name: sp.monster.name,
      level: sp.monster.level,
      x: sp.x,
      y: sp.y,
      spawnX: sp.x,
      spawnY: sp.y,
      hp: sp.monster.maxHp,
      maxHp: sp.monster.maxHp,
      alive: true,
      respawnAt: null,
      dotDamage: 0,
      dotTicksLeft: 0,
      dotNextAt: 0,
      flashUntil: 0,
      aggroed: false,
      lastAttackAt: 0,
    };
  }

  const isRogue = character.className === "rogue";

  return {
    location: loc.id,
    x: character.posX,
    y: character.posY,
    moveTargetX: null,
    moveTargetY: null,
    chasingMobId: null,
    facing: 1,
    hp: character.hp,
    mp: character.mp,
    level: character.level,
    exp: character.exp,
    gold: character.gold,
    talents: character.talents ?? {},
    equipment: character.equipment ?? { weapon: 0, armor: 0, amulet: 0 },
    inventory: {
      potionsHp: character.inventory?.potionsHp ?? 3,
      potionsMp: character.inventory?.potionsMp ?? 3,
    },
    selectedTargetId: null,
    targetLock: false,
    mobs,
    cooldowns: {},
    buffAtk: null,
    buffDef: null,
    floatingTexts: [],
    autoAttackReadyAt: 0,
    invulnUntil: 0,
    dead: false,
    message: null,
    messageUntil: 0,
    lastSaveAt: Date.now(),
    ftId: 1,
    moveArrivalAction: null,

    // Rogue resources
    energy: isRogue ? 100 : 0,
    maxEnergy: isRogue ? 100 : 0,
    comboPoints: 0,
    lastEnergyRegen: Date.now(),
  };
}

export function getStats(state: EngineState, className: string) {
  return computeStats({
    className,
    level: state.level,
    talents: state.talents,
    equipment: state.equipment,
  });
}

export function pushFloating(state: EngineState, x: number, y: number, text: string, color: string) {
  state.ftId += 1;
  state.floatingTexts.push({ id: state.ftId, x, y, text, color, createdAt: Date.now() });
  if (state.floatingTexts.length > 30) state.floatingTexts.shift();
}

function setMessage(state: EngineState, msg: string, durationMs = 2200) {
  state.message = msg;
  state.messageUntil = Date.now() + durationMs;
}

function playerBoxAt(x: number, y: number): Rect {
  return { x: x - 16, y: y - 10, w: 32, h: 20 };
}

function resolveMove(
  state: EngineState,
  dx: number,
  dy: number,
  buildings: Rect[],
  mapW: number,
  mapH: number,
) {
  const tryX = Math.max(20, Math.min(mapW - 20, state.x + dx));
  const boxX = playerBoxAt(tryX, state.y);
  const blockedX = buildings.some((b) => rectsIntersect(boxX, b));
  if (!blockedX) state.x = tryX;

  const tryY = Math.max(20, Math.min(mapH - 20, state.y + dy));
  const boxY = playerBoxAt(state.x, tryY);
  const blockedY = buildings.some((b) => rectsIntersect(boxY, b));
  if (!blockedY) state.y = tryY;
}

export function tick(state: EngineState, dtMs: number, className: string) {
  const now = Date.now();
  const loc = LOCATIONS[state.location] ?? LOCATIONS.city;
  const buildings: Rect[] = loc.buildings.map((b) => ({ x: b.x, y: b.y, w: b.w, h: b.h }));
  for (const t of loc.trees) {
    if (t.collide) {
      buildings.push({ x: t.x - 18 * t.scale, y: t.y - 10 * t.scale, w: 36 * t.scale, h: 26 * t.scale });
    }
  }

  const stats = getStats(state, className);

  // regen
  const regenFactor = dtMs / 1000;
  if (!state.dead) {
    state.hp = Math.min(stats.maxHp, state.hp + stats.maxHp * 0.015 * regenFactor);
    state.mp = Math.min(stats.maxMp, state.mp + stats.maxMp * 0.03 * regenFactor);

    // === ROGUE: Energy Regeneration ===
    if (className === "rogue" && state.energy < state.maxEnergy) {
      const now = Date.now();
      if (!state.lastEnergyRegen) state.lastEnergyRegen = now;

      const timeSinceRegen = now - state.lastEnergyRegen;
      if (timeSinceRegen >= 1000) {
        const energyRegen = 10; // 10 энергии в секунду
        state.energy = Math.min(state.maxEnergy, state.energy + energyRegen);
        state.lastEnergyRegen = now;
      }
    }
  }

  // buffs expire
  if (state.buffAtk && state.buffAtk.until < now) state.buffAtk = null;
  if (state.buffDef && state.buffDef.until < now) state.buffDef = null;
  if (state.message && state.messageUntil < now) state.message = null;

  // movement toward moveTarget
  if (!state.dead && state.moveTargetX != null && state.moveTargetY != null) {
    const dx = state.moveTargetX - state.x;
    const dy = state.moveTargetY - state.y;
    const dist = Math.hypot(dx, dy);
    if (dist < 6) {
      state.x = state.moveTargetX;
      state.y = state.moveTargetY;
      state.moveTargetX = null;
      state.moveTargetY = null;
      state.chasingMobId = null;
      if (state.moveArrivalAction) {
        const action = state.moveArrivalAction;
        state.moveArrivalAction = null;
        if (action.type === "portal") {
          teleport(state, action.toLocation, action.toX, action.toY);
        }
      }
    } else {
      const step = (PLAYER_SPEED * dtMs) / 1000;
      const ratio = Math.min(1, step / dist);
      state.facing = dx >= 0 ? 1 : -1;
      resolveMove(state, dx * ratio, dy * ratio, buildings, loc.width, loc.height);
      // if we got stuck against a building, cancel forward progress after a while (handled implicitly since dist stays)
    }
  }

  // chase logic: if chasing a mob to attack range
  if (!state.dead && state.chasingMobId) {
    const mob = state.mobs[state.chasingMobId];
    if (!mob || !mob.alive) {
      state.chasingMobId = null;
      state.moveTargetX = null;
      state.moveTargetY = null;
    } else {
      const range = attackRangeFor(className);
      const dist = Math.hypot(mob.x - state.x, mob.y - state.y);
      if (dist <= range - 10) {
        state.moveTargetX = null;
        state.moveTargetY = null;
      } else {
        state.moveTargetX = mob.x;
        state.moveTargetY = mob.y;
      }
    }
  }

  // mob dot ticks + respawn
  for (const mob of Object.values(state.mobs)) {
    if (!mob.alive) {
      if (mob.respawnAt && mob.respawnAt <= now) {
        mob.alive = true;
        mob.hp = mob.maxHp;
        mob.x = mob.spawnX;
        mob.y = mob.spawnY;
        mob.respawnAt = null;
        mob.aggroed = false;
        mob.lastAttackAt = 0;
      }
      continue;
    }
    if (mob.dotTicksLeft > 0 && mob.dotNextAt <= now) {
      mob.hp = Math.max(0, mob.hp - mob.dotDamage);
      mob.dotTicksLeft -= 1;
      mob.dotNextAt = now + 1000;
      mob.flashUntil = now + 200;
      pushFloating(state, mob.x, mob.y - 40, `-${mob.dotDamage}`, "#8ce26b");
      if (mob.hp <= 0) killMob(state, mob, now);
    }
  }

  // === MOB AGGRO / CHASE / ATTACK LOGIC ===
  if (!state.dead) {
    for (const mob of Object.values(state.mobs)) {
      if (!mob.alive) continue;

      const distToPlayer = Math.hypot(mob.x - state.x, mob.y - state.y);

      // Aggro
      if (!mob.aggroed && distToPlayer < MOB_AGGRO_RANGE) {
        mob.aggroed = true;
        pushFloating(state, mob.x, mob.y - 55, "!", "#ff5555");
      }

      // De-aggro
      if (mob.aggroed && distToPlayer > MOB_DEAGGRO_RANGE) {
        mob.aggroed = false;
      }

      // === Chase player when aggroed ===
      if (mob.aggroed) {
        const chaseSpeed = 135; // slower than player
        if (distToPlayer > MOB_ATTACK_RANGE + 15) {
          const dx = state.x - mob.x;
          const dy = state.y - mob.y;
          const len = Math.hypot(dx, dy) || 1;
          const step = (chaseSpeed * dtMs) / 1000;

          const nextX = mob.x + (dx / len) * step;
          const nextY = mob.y + (dy / len) * step;

          // simple collision check
          const box = { x: nextX - 18, y: nextY - 12, w: 36, h: 24 };
          const blocked = buildings.some((b) => rectsIntersect(box, b));

          if (!blocked) {
            mob.x = nextX;
            mob.y = nextY;
          }
        }
      }

      // Mob attacks player when aggroed
      if (mob.aggroed && distToPlayer <= MOB_ATTACK_RANGE && now - mob.lastAttackAt >= MOB_ATTACK_INTERVAL) {
        const incoming = Math.max(2, Math.round(mob.level * 3.8 + 4));
        if (state.invulnUntil < now) {
          state.hp = Math.max(0, state.hp - incoming);
          pushFloating(state, state.x, state.y - 55, `-${incoming}`, "#ff6b6b");
          mob.flashUntil = now + 180;
          mob.lastAttackAt = now;

          if (state.hp <= 0) {
            killPlayer(state);
          }
        }
      }
    }
  }

  // auto attack
  if (!state.dead && state.selectedTargetId) {
    const mob = state.mobs[state.selectedTargetId];
    if (mob && mob.alive) {
      const range = attackRangeFor(className);
      const dist = Math.hypot(mob.x - state.x, mob.y - state.y);
      if (dist <= range && state.autoAttackReadyAt <= now) {
        const atkMult = state.buffAtk ? 1 + state.buffAtk.mult : 1;
        const power = isRangedClass(className) ? stats.spellPower || stats.attack : stats.attack;
        const crit = Math.random() * 100 < stats.critChance;
        let dmg = Math.round(power * 0.7 * atkMult);
        if (crit) dmg = Math.round(dmg * 1.6);
        mob.hp = Math.max(0, mob.hp - dmg);
        mob.flashUntil = now + 200;
        mob.aggroed = true;
        pushFloating(state, mob.x, mob.y - 40, crit ? `${dmg}!` : `${dmg}`, crit ? "#ffd24b" : "#f4f4f4");
        state.autoAttackReadyAt = now + AUTO_ATTACK_INTERVAL;
        if (mob.hp <= 0) killMob(state, mob, now);
        // monster hits back
        const defMult = state.buffDef ? 1 + state.buffDef.mult : 1;
        const incoming = Math.max(1, Math.round((mob.level * 4 - stats.defense * defMult) * 0.6 + 3));
        if (state.invulnUntil < now) {
          state.hp = Math.max(0, state.hp - incoming);
          pushFloating(state, state.x, state.y - 50, `-${incoming}`, "#ff6b6b");
          if (state.hp <= 0) killPlayer(state);
        }
      }
    } else {
      state.selectedTargetId = null;
    }
  }

  // autosave marker handled outside
}

function killMob(state: EngineState, mob: MobState, now: number) {
  mob.alive = false;
  mob.respawnAt = now + 9000;
  mob.dotTicksLeft = 0;
  const monsterExp = Math.round(20 + mob.level * 12);
  const monsterGold = Math.round(4 + mob.level * 2.4);
  state.exp += monsterExp;
  state.gold += monsterGold;
  pushFloating(state, mob.x, mob.y - 60, `+${monsterExp} опыта`, "#7ec8ff");
  pushFloating(state, mob.x, mob.y - 78, `+${monsterGold} золота`, "#ffd24b");
  if (state.selectedTargetId === mob.spawnId) state.selectedTargetId = null;
  handleLevelUps(state);
}

function handleLevelUps(state: EngineState) {
  let leveled = false;
  while (state.exp >= expForLevel(state.level)) {
    state.exp -= expForLevel(state.level);
    state.level += 1;
    leveled = true;
  }
  if (leveled) {
    setMessage(state, `Новый уровень: ${state.level}!`, 3000);
  }
}

function killPlayer(state: EngineState) {
  state.dead = true;
  state.selectedTargetId = null;
  state.moveTargetX = null;
  state.moveTargetY = null;
  state.chasingMobId = null;
  setMessage(state, "Вы погибли... возрождение в городе.", 3000);
}

export function respawnPlayer(state: EngineState, className: string) {
  const loc = LOCATIONS.city;
  teleport(state, "city", loc.spawn.x, loc.spawn.y);
  const stats = getStats(state, className);
  state.hp = Math.round(stats.maxHp * 0.6);
  state.mp = Math.round(stats.maxMp * 0.6);
  state.dead = false;
  state.invulnUntil = Date.now() + 3000;
}

export function teleport(state: EngineState, toLocation: string, x: number, y: number) {
  const loc = LOCATIONS[toLocation];
  if (!loc) return;
  state.location = toLocation;
  state.x = x;
  state.y = y;
  state.moveTargetX = null;
  state.moveTargetY = null;
  state.chasingMobId = null;
  state.selectedTargetId = null;
  state.moveArrivalAction = null;
  const mobs: Record<string, MobState> = {};
  for (const sp of loc.monsterSpawns) {
    mobs[sp.id] = {
      spawnId: sp.id,
      defId: sp.monster.id,
      name: sp.monster.name,
      level: sp.monster.level,
      x: sp.x,
      y: sp.y,
      spawnX: sp.x,
      spawnY: sp.y,
      hp: sp.monster.maxHp,
      maxHp: sp.monster.maxHp,
      alive: true,
      respawnAt: null,
      dotDamage: 0,
      dotTicksLeft: 0,
      dotNextAt: 0,
      flashUntil: 0,
      aggroed: false,
      lastAttackAt: 0,
    };
  }
  state.mobs = mobs;
}

export function issueMoveCommand(state: EngineState, x: number, y: number) {
  if (state.dead) return;
  state.moveTargetX = x;
  state.moveTargetY = y;
  state.chasingMobId = null;
  if (!state.targetLock) state.selectedTargetId = null;
}

export function selectTarget(state: EngineState, mobId: string) {
  if (state.dead) return;
  const mob = state.mobs[mobId];
  if (!mob || !mob.alive) return;
  state.selectedTargetId = mobId;
  mob.aggroed = true; // игрок атакует — моб становится агрессивным
}

export function useAbility(
  state: EngineState,
  className: string,
  ability: AbilityDef,
): { ok: boolean; reason?: string } {
  if (state.dead) return { ok: false, reason: "Вы мертвы" };
  const now = Date.now();
  const readyAt = state.cooldowns[ability.id] ?? 0;
  if (readyAt > now) return { ok: false, reason: "Способность перезаряжается" };

  const stats = getStats(state, className);
  if (state.mp < ability.manaCost) return { ok: false, reason: "Недостаточно маны" };

  let mob: MobState | null = null;
  if (ability.targeted) {
    mob = state.selectedTargetId ? state.mobs[state.selectedTargetId] : null;
    if (!mob || !mob.alive) return { ok: false, reason: "Нет цели" };
    const dist = Math.hypot(mob.x - state.x, mob.y - state.y);
    if (dist > attackRangeFor(className) + 60) return { ok: false, reason: "Цель слишком далеко" };
  }

  // === ROGUE RESOURCE SYSTEM ===
  if (className === "rogue") {
    const isGenerator = ["r1", "r2"].includes(ability.id); // Коварный удар / Удар в спину
    const isFinisher = ["r3", "r4", "r5"].includes(ability.id); // Отравление / Потрошение / Ядовитый клинок

    if (isGenerator) {
      if (state.energy < 35) return { ok: false, reason: "Недостаточно энергии" };
      state.energy -= 35;
      if (state.comboPoints < 5) state.comboPoints += 1;
    } else if (isFinisher) {
      if (state.comboPoints < 1) return { ok: false, reason: "Нет комбо-очков" };
      state.comboPoints = 0; // Сбрасываем комбо
    } else {
      if (state.energy < ability.manaCost) return { ok: false, reason: "Недостаточно энергии" };
      state.energy -= ability.manaCost;
    }
  } else {
    state.mp -= ability.manaCost;
  }

  state.cooldowns[ability.id] = now + ability.cooldown * 1000;

  const power = isRangedClass(className) ? Math.max(stats.spellPower, stats.attack) : stats.attack;
  const atkMult = state.buffAtk ? 1 + state.buffAtk.mult : 1;

  switch (ability.type) {
    case "damage": {
      const crit = Math.random() * 100 < stats.critChance;
      let dmg = Math.round(power * ability.power * atkMult);
      if (crit) dmg = Math.round(dmg * 1.6);
      mob!.hp = Math.max(0, mob!.hp - dmg);
      mob!.flashUntil = now + 250;
      pushFloating(state, mob!.x, mob!.y - 40, crit ? `${dmg}!` : `${dmg}`, crit ? "#ffd24b" : "#ff9d4b");
      if (mob!.hp <= 0) killMob(state, mob!, now);
      break;
    }
    case "execute": {
      const isLow = mob!.hp <= mob!.maxHp * 0.35;
      const mult = isLow ? ability.power * 1.6 : ability.power;
      let dmg = Math.round(power * mult * atkMult);
      const crit = Math.random() * 100 < stats.critChance;
      if (crit) dmg = Math.round(dmg * 1.6);
      mob!.hp = Math.max(0, mob!.hp - dmg);
      mob!.flashUntil = now + 250;
      pushFloating(state, mob!.x, mob!.y - 40, crit ? `${dmg}!` : `${dmg}`, "#ff5b5b");
      if (mob!.hp <= 0) killMob(state, mob!, now);
      break;
    }
    case "dot": {
      const initial = Math.round(power * ability.power * 0.4);
      mob!.hp = Math.max(0, mob!.hp - initial);
      mob!.dotDamage = Math.round(power * ability.power * 0.22);
      mob!.dotTicksLeft = 4;
      mob!.dotNextAt = now + 1000;
      mob!.flashUntil = now + 250;
      pushFloating(state, mob!.x, mob!.y - 40, `${initial}`, "#8ce26b");
      if (mob!.hp <= 0) killMob(state, mob!, now);
      break;
    }
    case "heal": {
      const healAmt = Math.round((stats.spellPower || stats.attack) * ability.power * 0.8 + 20);
      state.hp = Math.min(stats.maxHp, state.hp + healAmt);
      pushFloating(state, state.x, state.y - 50, `+${healAmt}`, "#6ef07a");
      break;
    }
    case "buff_atk": {
      state.buffAtk = { mult: ability.power, until: now + 12000 };
      pushFloating(state, state.x, state.y - 50, "Сила атаки!", "#ffd24b");
      break;
    }
    case "buff_def": {
      state.buffDef = { mult: ability.power, until: now + 12000 };
      pushFloating(state, state.x, state.y - 50, "Защита!", "#7ec8ff");
      break;
    }
  }

  return { ok: true };
}

export function usePotion(state: EngineState, className: string, kind: "hp" | "mp") {
  const stats = getStats(state, className);
  if (kind === "hp") {
    if (state.inventory.potionsHp <= 0) return { ok: false, reason: "Нет зелий здоровья" };
    state.inventory.potionsHp -= 1;
    state.hp = Math.min(stats.maxHp, state.hp + stats.maxHp * 0.4);
    pushFloating(state, state.x, state.y - 50, "+HP", "#6ef07a");
  } else {
    if (state.inventory.potionsMp <= 0) return { ok: false, reason: "Нет зелий маны" };
    state.inventory.potionsMp -= 1;
    state.mp = Math.min(stats.maxMp, state.mp + stats.maxMp * 0.4);
    pushFloating(state, state.x, state.y - 50, "+MP", "#7ec8ff");
  }
  return { ok: true };
}

export function buyPotion(state: EngineState, kind: "hp" | "mp"): { ok: boolean; reason?: string } {
  const cost = 15;
  if (state.gold < cost) return { ok: false, reason: "Недостаточно золота" };
  state.gold -= cost;
  if (kind === "hp") state.inventory.potionsHp += 1;
  else state.inventory.potionsMp += 1;
  return { ok: true };
}

export function spendTalent(state: EngineState, branch: TalentBranch): { ok: boolean; reason?: string } {
  const spent = Object.values(state.talents).reduce((a, b) => a + (b ?? 0), 0);
  const available = talentPointsForLevel(state.level) - spent;
  if (available <= 0) return { ok: false, reason: "Нет свободных очков" };
  const current = state.talents[branch] ?? 0;
  if (current >= 5) return { ok: false, reason: "Ветка изучена полностью" };
  state.talents = { ...state.talents, [branch]: current + 1 };
  return { ok: true };
}

export function upgradeEquipment(state: EngineState, slot: EquipmentSlot): { ok: boolean; reason?: string } {
  const current = state.equipment[slot] ?? 0;
  if (current >= 10) return { ok: false, reason: "Максимальный уровень" };
  const cost = upgradeCost(current);
  if (state.gold < cost) return { ok: false, reason: "Недостаточно золота" };
  state.gold -= cost;
  state.equipment = { ...state.equipment, [slot]: current + 1 };
  return { ok: true };
}

export function tryPortals(state: EngineState) {
  const loc = LOCATIONS[state.location];
  if (!loc) return;
  for (const portal of loc.portals) {
    const dist = Math.hypot(portal.x - state.x, portal.y - state.y);
    if (dist < 55) {
      teleport(state, portal.toLocation, portal.toX, portal.toY);
      return;
    }
  }
}

export function moveToPortal(state: EngineState, portalX: number, portalY: number, toLocation: string, toX: number, toY: number) {
  state.moveTargetX = portalX;
  state.moveTargetY = portalY;
  state.chasingMobId = null;
  state.moveArrivalAction = { type: "portal", toLocation, toX, toY };
}

export function attackClass(className: string) {
  return getClass(className);
}

export function abilitiesFor(className: string): AbilityDef[] {
  return CLASS_ABILITIES[className as keyof typeof CLASS_ABILITIES] ?? [];
}
