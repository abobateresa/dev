"use client";

import { Icon, type IconName } from "@/components/game/Icon";
import { getClass } from "@/lib/game-data";

interface TopBarProps {
  name: string;
  level: number;
  faction: string;
  className: string;
  hp: number;
  maxHp: number;
  mp: number;
  maxMp: number;
  gold: number;
  locationName: string;
  playerPos: { x: number; y: number };
  mapSize: { w: number; h: number };
  portals: { x: number; y: number }[];
  mobDots: { x: number; y: number; alive: boolean }[];
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onOpen: (modal: "character" | "talents" | "forge" | "settings" | "help" | "worldmap") => void;
  onLogout: () => void;
}

function MenuButton({ icon, label, onClick }: { icon: IconName; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      title={label}
      className="group relative flex h-11 w-11 items-center justify-center rounded-xl border border-amber-900/60 bg-gradient-to-b from-[#3a2a1c] to-[#211611] text-amber-200 shadow-inner shadow-black/60 transition-all hover:border-amber-500 hover:text-amber-50 active:scale-[0.96]"
    >
      <Icon name={icon} className="h-6 w-6" />
      <div className="absolute -bottom-5 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded bg-black/90 px-2 py-0.5 text-[9px] text-amber-300 group-hover:block">
        {label}
      </div>
    </button>
  );
}

export function TopBar(props: TopBarProps) {
  const cls = getClass(props.className);
  const hpPct = Math.max(0, Math.min(100, (props.hp / props.maxHp) * 100));
  const mpPct = Math.max(0, Math.min(100, (props.mp / props.maxMp) * 100));
  const mapDotX = (props.playerPos.x / props.mapSize.w) * 100;
  const mapDotY = (props.playerPos.y / props.mapSize.h) * 100;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-40 flex items-start justify-between gap-4 p-3">
      {/* === LEFT: Character Panel (Detailed) === */}
      <div className="pointer-events-auto flex items-center gap-3 rounded-2xl border border-amber-900/60 bg-gradient-to-b from-[#241811]/95 to-[#140d09]/95 p-3 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
        {/* Avatar */}
        <div
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 shadow-inner"
          style={{ borderColor: cls.color, background: `radial-gradient(circle at 30% 30%, ${cls.color}44, #1a1108)` }}
        >
          <Icon name={cls.icon as IconName} className="h-9 w-9 text-white drop-shadow" />
        </div>

        <div className="w-56">
          {/* Name + Level + Class */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="truncate text-[15px] font-semibold text-amber-100">{props.name}</span>
              <span className="rounded bg-amber-900/80 px-2 py-px text-[10px] font-bold text-amber-200">LVL {props.level}</span>
            </div>
            <span className="text-[10px] text-amber-400/80">{props.faction === "light" ? "Свет" : "Тьма"}</span>
          </div>

          <div className="mt-0.5 text-[10px] text-amber-300/70 tracking-wider">{cls.name}</div>

          {/* HP Bar */}
          <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full border border-black/70 bg-black/60">
            <div
              className="h-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 transition-all duration-200"
              style={{ width: `${hpPct}%` }}
            />
          </div>

          {/* MP Bar */}
          <div className="mt-1 h-2 w-full overflow-hidden rounded-full border border-black/70 bg-black/60">
            <div
              className="h-full bg-gradient-to-r from-sky-600 via-sky-500 to-sky-400 transition-all duration-200"
              style={{ width: `${mpPct}%` }}
            />
          </div>

          {/* Quick Stats */}
          <div className="mt-1.5 flex justify-between text-[9px] text-amber-400/70">
            <div>HP: {Math.round(props.hp)}/{props.maxHp}</div>
            <div>MP: {Math.round(props.mp)}/{props.maxMp}</div>
          </div>
        </div>
      </div>

      {/* === CENTER: Location + Menu === */}
      <div className="pointer-events-auto mt-1 flex flex-col items-center gap-2">
        {/* Location Name */}
        <div className="flex items-center gap-2 rounded-full border border-amber-900/70 bg-black/70 px-5 py-1 text-sm text-amber-200 shadow">
          <Icon name="map" className="h-4 w-4 text-amber-400" />
          <span className="font-medium tracking-wide">{props.locationName}</span>
        </div>

        {/* Menu Buttons */}
        <div className="flex items-center gap-1.5 rounded-2xl border border-amber-900/60 bg-gradient-to-b from-[#241811]/95 to-[#140d09]/95 p-2 shadow-[0_8px_24px_rgba(0,0,0,0.55)]">
          <MenuButton icon="user" label="Персонаж" onClick={() => props.onOpen("character")} />
          <MenuButton icon="book" label="Таланты" onClick={() => props.onOpen("talents")} />
          <MenuButton icon="anvil" label="Кузница" onClick={() => props.onOpen("forge")} />
          <MenuButton icon="map" label="Карта мира" onClick={() => props.onOpen("worldmap")} />
          <MenuButton icon="gear" label="Настройки" onClick={() => props.onOpen("settings")} />
          <MenuButton icon="question" label="Помощь" onClick={() => props.onOpen("help")} />
        </div>
      </div>

      {/* === RIGHT: Gold + Minimap + Controls === */}
      <div className="pointer-events-auto flex flex-col items-end gap-2">
        {/* Top row: Gold + Buttons */}
        <div className="flex items-center gap-2">
          {/* Gold */}
          <div className="flex items-center gap-2 rounded-2xl border border-amber-900/60 bg-gradient-to-b from-[#241811]/95 to-[#140d09]/95 px-4 py-1.5 text-amber-200 shadow-[0_8px_24px_rgba(0,0,0,0.55)]">
            <Icon name="coin" className="h-5 w-5 text-yellow-400" />
            <span className="font-mono text-lg font-semibold tabular-nums tracking-wider">{props.gold}</span>
          </div>

          {/* Fullscreen */}
          <button
            onClick={props.onToggleFullscreen}
            title="Полный экран"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-900/60 bg-gradient-to-b from-[#241811]/95 to-[#140d09]/95 text-amber-200 shadow transition hover:text-amber-50 active:scale-95"
          >
            <Icon name="expand" className="h-5 w-5" />
          </button>

          {/* Logout */}
          <button
            onClick={props.onLogout}
            title="Выйти"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-900/50 bg-gradient-to-b from-[#2a1815] to-[#140d09] text-red-300 shadow transition hover:text-red-200 active:scale-95"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        {/* Detailed Minimap */}
        <div className="relative h-36 w-36 overflow-hidden rounded-2xl border-2 border-amber-800/80 bg-[#0c1a10] shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          <div className="absolute inset-0 opacity-70" style={{ background: "radial-gradient(circle at 50% 50%, #1e3320, #08120a)" }} />

          {/* Portals */}
          {props.portals.map((p, i) => (
            <div
              key={i}
              className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400 shadow-[0_0_8px_3px_rgba(168,85,247,0.9)]"
              style={{ left: `${(p.x / props.mapSize.w) * 100}%`, top: `${(p.y / props.mapSize.h) * 100}%` }}
            />
          ))}

          {/* Mobs */}
          {props.mobDots.map((m, i) => (
            <div
              key={i}
              className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                left: `${(m.x / props.mapSize.w) * 100}%`,
                top: `${(m.y / props.mapSize.h) * 100}%`,
                background: m.alive ? "#f87171" : "transparent",
                boxShadow: m.alive ? "0 0 4px #f87171" : "none",
              }}
            />
          ))}

          {/* Player */}
          <div
            className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-emerald-400 shadow-[0_0_10px_3px_rgba(52,211,153,0.9)]"
            style={{ left: `${mapDotX}%`, top: `${mapDotY}%` }}
          />

          {/* Location label */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 rounded-full bg-black/80 px-3 py-px text-[10px] font-medium text-amber-200">
            {props.locationName}
          </div>
        </div>
      </div>
    </div>
  );
}
