"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { CharacterRow } from "@/components/game/types";
import { LOCATIONS } from "@/components/game/world-data";
import {
  createInitialEngineState,
  getStats,
  issueMoveCommand,
  moveToPortal,
  pushFloating,
  respawnPlayer,
  selectTarget,
  tick,
  teleport,
  upgradeEquipment,
  usePotion,
  buyPotion,
  spendTalent,
  useAbility,
  abilitiesFor,
  attackRangeFor,
  type EngineState,
} from "@/components/game/engine";
import { expForLevel, type EquipmentSlot, type TalentBranch } from "@/lib/game-data";
import { TopBar } from "@/components/game/TopBar";
import { BottomBar } from "@/components/game/BottomBar";
import { CharacterModal, ForgeModal, HelpModal, SettingsModal, TalentsModal } from "@/components/game/Modals";
import { WorldMap } from "@/components/game/WorldMap";
import { useSound } from "@/components/game/useSound";
import { RogueResourceBar } from "@/components/game/RogueUI";
import { useMultiplayer } from "@/hooks/useMultiplayer";

type ModalKind = "character" | "talents" | "forge" | "settings" | "help" | "worldmap" | null;

function clampCam(pos: number, viewport: number, mapSize: number) {
  if (mapSize <= viewport) return mapSize / 2;
  return Math.max(viewport / 2, Math.min(mapSize - viewport / 2, pos));
}

export function GameScreen({
  character,
  onExitToSelect,
  onLogout,
}: {
  character: CharacterRow;
  onExitToSelect: () => void;
  onLogout: () => void;
}) {
  const stateRef = useRef<EngineState>(createInitialEngineState(character));
  const [, setTickN] = useState(0);
  const [now, setNow] = useState(() => Date.now());
  const [modal, setModal] = useState<ModalKind>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [viewport, setViewport] = useState({ w: 1280, h: 800 });
  const [settings, setSettings] = useState({
    musicVolume: character.settings?.musicVolume ?? 55,
    sfxVolume: character.settings?.sfxVolume ?? 65,
    showGrid: character.settings?.showGrid ?? false,
    showNames: character.settings?.showNames ?? true,
  });

  const sfxVolumeRef = useRef(settings.sfxVolume);
  sfxVolumeRef.current = settings.sfxVolume;
  const sound = useSound(sfxVolumeRef);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const settingsRef = useRef(settings);
  settingsRef.current = settings;

  const abilities = abilitiesFor(character.className);

  // ==================== MULTIPLAYER ====================
  const { 
    players: remotePlayers, 
    mobs: remoteMobs, 
    connected,
    sendMove,
    attackMob 
  } = useMultiplayer(character.location, {
    name: character.name,
    className: character.className,
    level: character.level,
    hp: character.hp,
    maxHp: 100,
    mp: character.mp,
    maxMp: 50,
    facing: 1,
  });

  // viewport size tracking
  useEffect(() => {
    function onResize() {
      setViewport({ w: window.innerWidth, h: window.innerHeight });
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // fullscreen tracking
  useEffect(() => {
    function onFsChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  const saveCharacter = useCallback((patch: Record<string, unknown>) => {
    fetch(`/api/characters/${character.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(patch),
    }).catch(() => {});
  }, [character.id]);

  // game loop
  useEffect(() => {
    let raf: number;
    let last = performance.now();
    let lastSave = Date.now();
    let running = true;

    function loop(t: number) {
      if (!running) return;
      const dt = Math.min(120, t - last);
      last = t;
      const st = stateRef.current;
      const wasDead = st.dead;
      tick(st, dt, character.className);

      if (st.dead && !wasDead) {
        sound.playError();
        window.setTimeout(() => {
          if (stateRef.current.dead) {
            respawnPlayer(stateRef.current, character.className);
            setTickN((n) => n + 1);
          }
        }, 2400);
      }

      const nowMs = Date.now();
      if (nowMs - lastSave > 4000) {
        lastSave = nowMs;
        saveCharacter({
          level: st.level,
          exp: st.exp,
          gold: st.gold,
          hp: Math.round(st.hp),
          mp: Math.round(st.mp),
          location: st.location,
          posX: Math.round(st.x),
          posY: Math.round(st.y),
          talents: st.talents,
          equipment: st.equipment,
          inventory: st.inventory,
          settings: settingsRef.current,
        });
      }

      setNow(nowMs);
      setTickN((n) => n + 1);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
    };
  }, []);

  // keyboard shortcuts
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (modal) {
        if (e.key === "Escape") setModal(null);
        return;
      }
      if (e.key >= "1" && e.key <= "5") {
        const idx = Number(e.key) - 1;
        handleUseAbility(idx);
      } else if (e.key === "Escape") {
        if (document.fullscreenElement) e.preventDefault();
        stateRef.current.selectedTargetId = null;
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modal]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  function handleUseAbility(idx: number) {
    const ability = abilities[idx];
    if (!ability) return;
    const res = useAbility(stateRef.current, character.className, ability);
    if (res.ok) {
      if (ability.type === "heal") sound.playHeal();
      else if (ability.type.startsWith("buff")) sound.playCast();
      else sound.playHit();
    } else {
      sound.playError();
      pushFloating(stateRef.current, stateRef.current.x, stateRef.current.y - 60, res.reason ?? "Нельзя", "#ff8080");
    }
    setTickN((n) => n + 1);
  }

  function handleUsePotion(kind: "hp" | "mp") {
    const res = usePotion(stateRef.current, character.className, kind);
    if (res.ok) sound.playHeal();
    else sound.playError();
    setTickN((n) => n + 1);
  }

  function handleBuyPotion(kind: "hp" | "mp") {
    const res = buyPotion(stateRef.current, kind);
    if (res.ok) sound.playClick();
    else sound.playError();
    setTickN((n) => n + 1);
  }

  function handleUpgrade(slot: EquipmentSlot) {
    const res = upgradeEquipment(stateRef.current, slot);
    if (res.ok) sound.playLevelUp();
    else sound.playError();
    setTickN((n) => n + 1);
  }

  function handleSpendTalent(branch: TalentBranch) {
    const res = spendTalent(stateRef.current, branch);
    if (res.ok) sound.playClick();
    else sound.playError();
    setTickN((n) => n + 1);
  }

  function handleSettingsChange(patch: Partial<typeof settings>) {
    setSettings((s) => {
      const next = { ...s, ...patch };
      saveCharacter({ settings: next });
      return next;
    });
  }

  function handleMobClick(mobId: string) {
    selectTarget(stateRef.current, mobId);
    sound.playClick();
    setTickN((n) => n + 1);
    attackMob(mobId);
  }

  function handlePortalClick(px: number, py: number, toLocation: string, toX: number, toY: number) {
    moveToPortal(stateRef.current, px, py, toLocation, toX, toY);
    setTickN((n) => n + 1);
  }

  // ПКМ — движение + отправка в мультиплеер
  function handleRightClick(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault();

    const st = stateRef.current;
    const loc = LOCATIONS[st.location] ?? LOCATIONS.city;
    const rect = viewportRef.current?.getBoundingClientRect();
    if (!rect) return;

    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;
    const camX = clampCam(st.x, viewport.w, loc.width);
    const camY = clampCam(st.y, viewport.h, loc.height);
    let worldX = localX - viewport.w / 2 + camX;
    let worldY = localY - viewport.h / 2 + camY;
    worldX = Math.max(10, Math.min(loc.width - 10, worldX));
    worldY = Math.max(10, Math.min(loc.height - 10, worldY));

    issueMoveCommand(st, worldX, worldY);
    setTickN((n) => n + 1);

    // Отправляем движение на сервер
    sendMove(worldX, worldY);
  }

  function handleLeftClickGround() {
    // intentionally empty
  }

  const st = stateRef.current;
  const loc = LOCATIONS[st.location] ?? LOCATIONS.city;
  const stats = getStats(st, character.className);
  const camX = clampCam(st.x, viewport.w, loc.width);
  const camY = clampCam(st.y, viewport.h, loc.height);
  const translateX = viewport.w / 2 - camX;
  const translateY = viewport.h / 2 - camY;
  const isRanged = attackRangeFor(character.className) > 150;
  const expNeeded = expForLevel(st.level);
  const isDark = character.faction === "dark";

  return (
    <div className="fixed inset-0 overflow-hidden bg-black text-white select-none">
      <div
        ref={viewportRef}
        onClick={handleLeftClickGround}
        onContextMenu={handleRightClick}
        className="absolute inset-0 cursor-crosshair overflow-hidden"
      >
        <div
          className="absolute left-0 top-0"
          style={{
            width: loc.width,
            height: loc.height,
            transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
            backgroundImage: `url(${loc.background})`,
            backgroundSize: "512px 512px",
            backgroundRepeat: "repeat",
          }}
        >
          {settings.showGrid && (
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{ backgroundImage: "linear-gradient(#ffffff33 1px, transparent 1px), linear-gradient(90deg, #ffffff33 1px, transparent 1px)", backgroundSize: "80px 80px" }}
            />
          )}

          {/* trees */}
          {loc.trees.map((t) => (
            <div
              key={t.id}
              className="absolute -translate-x-1/2 -translate-y-[85%]"
              style={{ left: t.x, top: t.y, width: 90 * t.scale, height: 110 * t.scale }}
            >
              <Image src="/images/tree.png" alt="" fill sizes="120px" className="object-contain drop-shadow-[0_10px_6px_rgba(0,0,0,0.5)]" />
            </div>
          ))}

          {/* buildings */}
          {loc.buildings.map((b) => (
            <div key={b.id} className="absolute" style={{ left: b.x, top: b.y, width: b.w, height: b.h }}>
              <Image src="/images/house.png" alt="" fill sizes="300px" className="object-fill drop-shadow-[0_14px_10px_rgba(0,0,0,0.6)]" />
              {b.label && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/60 px-2 py-0.5 text-[11px] text-sky-300">
                  &lt;{b.label}&gt;
                </div>
              )}
            </div>
          ))}

          {/* portals */}
          {loc.portals.map((p, i) => (
            <div
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                handlePortalClick(p.x, p.y, p.toLocation, p.toX, p.toY);
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{ left: p.x, top: p.y }}
            >
              <div className="portal-swirl h-16 w-16 rounded-full" />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/70 px-2 py-0.5 text-[11px] text-purple-300">
                {p.label}
              </div>
            </div>
          ))}

          {/* === ДРУГИЕ ИГРОКИ (MULTIPLAYER) === */}
          {remotePlayers
            .filter((p) => p.id !== character.id)
            .map((player) => (
              <div
                key={player.id}
                className="absolute -translate-x-1/2 -translate-y-[88%]"
                style={{ left: player.x, top: player.y, width: 70, height: 90 }}
              >
                {settings.showNames && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-semibold text-blue-300">
                    {player.name} [{player.level}]
                  </div>
                )}
                <div className="absolute -top-1 left-1/2 h-1.5 w-14 -translate-x-1/2 overflow-hidden rounded-full border border-black/70 bg-black/60">
                  <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400" style={{ width: `${(player.hp / player.maxHp) * 100}%` }} />
                </div>
                <div className="relative h-full w-full">
                  <Image src="/images/hero.png" alt="" fill sizes="90px" className="object-contain drop-shadow-[0_10px_8px_rgba(0,0,0,0.6)]" />
                </div>
              </div>
            ))}

          {/* === СЕТЕВЫЕ МОБЫ === */}
          {remoteMobs.map((m) => {
            if (!m.alive) return null;
            const hpPct = (m.hp / m.maxHp) * 100;
            return (
              <div
                key={m.spawnId}
                onClick={(e) => {
                  e.stopPropagation();
                  handleMobClick(m.spawnId);
                }}
                className="absolute -translate-x-1/2 -translate-y-[90%] cursor-pointer"
                style={{ left: m.x, top: m.y, width: 76, height: 90 }}
              >
                <div className="relative h-full w-full">
                  <Image src="/images/monster.png" alt="" fill sizes="90px" className="object-contain drop-shadow-[0_8px_6px_rgba(0,0,0,0.6)]" />
                </div>
                <div className="absolute -top-5 left-1/2 w-24 -translate-x-1/2 text-center text-[10px] text-red-300">
                  {m.name} [{m.level}]
                </div>
                <div className="absolute -top-1 left-1/2 h-1.5 w-16 -translate-x-1/2 overflow-hidden rounded-full border border-black/70 bg-black/60">
                  <div className="h-full bg-gradient-to-r from-red-700 to-red-400" style={{ width: `${hpPct}%` }} />
                </div>
              </div>
            );
          })}

          {/* LOCAL PLAYER (Ты сам) */}
          <div
            className="absolute -translate-x-1/2 -translate-y-[88%] transition-transform"
            style={{ left: st.x, top: st.y, width: 70, height: 90 }}
          >
            {settings.showNames && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-semibold text-emerald-300">
                {character.name} [{st.level}]
              </div>
            )}
            <div className="absolute -top-1 left-1/2 h-1.5 w-14 -translate-x-1/2 overflow-hidden rounded-full border border-black/70 bg-black/60">
              <div className="h-full bg-gradient-to-r from-emerald-700 to-emerald-400" style={{ width: `${(st.hp / stats.maxHp) * 100}%` }} />
            </div>
            <div className="relative h-full w-full" style={{ transform: st.facing < 0 ? "scaleX(-1)" : undefined }}>
              <Image src="/images/hero.png" alt="" fill sizes="90px" className="object-contain drop-shadow-[0_10px_8px_rgba(0,0,0,0.6)]" />
            </div>
            {isRanged && <div className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2" />}
          </div>
        </div>
      </div>

      {st.message && (
        <div className="pointer-events-none fixed left-1/2 top-20 z-40 -translate-x-1/2 rounded-lg border border-amber-600 bg-black/80 px-5 py-2 text-lg font-bold text-amber-200 shadow-lg">
          {st.message}
        </div>
      )}

      <TopBar
        name={character.name}
        level={st.level}
        faction={character.faction}
        className={character.className}
        hp={st.hp}
        maxHp={stats.maxHp}
        mp={st.mp}
        maxMp={stats.maxMp}
        gold={st.gold}
        locationName={loc.name}
        playerPos={{ x: st.x, y: st.y }}
        mapSize={{ w: loc.width, h: loc.height }}
        portals={loc.portals.map((p) => ({ x: p.x, y: p.y }))}
        mobDots={Object.values(st.mobs).map((m) => ({ x: m.x, y: m.y, alive: m.alive }))}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        onOpen={(m) => setModal(m)}
        onLogout={onLogout}
      />

      {character.className === "rogue" && (
        <div className="fixed bottom-[92px] left-1/2 -translate-x-1/2 z-40">
          <RogueResourceBar 
            energy={st.energy} 
            maxEnergy={st.maxEnergy} 
            comboPoints={st.comboPoints} 
          />
        </div>
      )}

      <BottomBar
        abilities={abilities}
        cooldownReadyAt={st.cooldowns}
        now={now}
        hp={st.hp}
        maxHp={stats.maxHp}
        mp={st.mp}
        maxMp={stats.maxMp}
        potionsHp={st.inventory.potionsHp}
        potionsMp={st.inventory.potionsMp}
        mana={st.mp}
        level={st.level}
        targetLock={st.targetLock}
        onToggleLock={() => {
          stateRef.current.targetLock = !stateRef.current.targetLock;
          setTickN((n) => n + 1);
        }}
        onUseAbility={handleUseAbility}
        onUsePotion={handleUsePotion}
      />

      {/* Модальные окна */}
      {modal === "character" && (
        <CharacterModal
          onClose={() => setModal(null)}
          name={character.name}
          faction={character.faction}
          race={character.race}
          className={character.className}
          level={st.level}
          exp={st.exp}
          expNeeded={expNeeded}
          stats={stats}
        />
      )}
      {modal === "talents" && <TalentsModal onClose={() => setModal(null)} talents={st.talents} level={st.level} onSpend={handleSpendTalent} />}
      {modal === "forge" && <ForgeModal onClose={() => setModal(null)} equipment={st.equipment} gold={st.gold} onUpgrade={handleUpgrade} onBuyPotion={handleBuyPotion} />}
      {modal === "settings" && (
        <SettingsModal
          onClose={() => setModal(null)}
          musicVolume={settings.musicVolume}
          sfxVolume={settings.sfxVolume}
          showGrid={settings.showGrid}
          showNames={settings.showNames}
          onChange={handleSettingsChange}
          onLogout={onLogout}
          onExitToSelect={() => {
            saveCharacter({
              level: st.level,
              exp: st.exp,
              gold: st.gold,
              hp: Math.round(st.hp),
              mp: Math.round(st.mp),
              location: st.location,
              posX: Math.round(st.x),
              posY: Math.round(st.y),
              talents: st.talents,
              equipment: st.equipment,
              inventory: st.inventory,
              settings: settingsRef.current,
            });
            onExitToSelect();
          }}
        />
      )}
      {modal === "help" && <HelpModal onClose={() => setModal(null)} />}

      {modal === "worldmap" && (
        <WorldMap
          currentLocation={st.location}
          onClose={() => setModal(null)}
          onTravel={(locId) => {
            const locData = LOCATIONS[locId];
            if (locData) {
              teleport(stateRef.current, locId, locData.spawn.x, locData.spawn.y);
              setModal(null);
              setTickN((n) => n + 1);
            }
          }}
        />
      )}
    </div>
  );
}