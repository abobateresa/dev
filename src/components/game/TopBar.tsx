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
  onOpen: (modal: "character" | "talents" | "forge" | "settings" | "help") => void;
  onLogout: () => void;
}

function MenuButton({ icon, label, onClick }: { icon: IconName; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      title={label}
      className="group relative flex h-11 w-11 items-center justify-center rounded-lg border border-amber-900/60 bg-gradient-to-b from-[#3a2a1c] to-[#211611] text-amber-200 shadow-inner shadow-black/50 transition hover:border-amber-500 hover:text-amber-50 active:scale-95"
    >
      <Icon name={icon} className="h-6 w-6" />
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
    <div className="pointer-events-none fixed inset-x-0 top-0 z-30 flex items-start justify-between gap-3 p-3">
      {/* Character panel */}
      <div className="pointer-events-auto flex items-center gap-3 rounded-xl border border-amber-900/60 bg-gradient-to-b from-[#241811]/95 to-[#140d09]/95 p-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.55)]">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border-2 shadow-inner"
          style={{ borderColor: cls.color, background: `radial-gradient(circle at 30% 30%, ${cls.color}55, #1a1108)` }}
        >
          <Icon name={cls.icon as IconName} className="h-8 w-8 text-white" />
        </div>
        <div className="w-52">
          <div className="flex items-center justify-between text-[13px] font-semibold text-amber-100">
            <span className="truncate">{props.name}</span>
            <span className="ml-1 rounded bg-amber-900/70 px-1.5 py-0.5 text-[11px] text-amber-200">{props.level} lvl</span>
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-wide text-amber-300/70">
            {props.faction === "light" ? "Свет" : "Тьма"} · {cls.name}
          </div>
          <div className="mt-1.5 h-3 w-full overflow-hidden rounded-full border border-black/60 bg-black/50">
            <div className="h-full bg-gradient-to-r from-emerald-700 via-emerald-500 to-emerald-400 transition-[width]" style={{ width: `${hpPct}%` }} />
          </div>
          <div className="mt-1 h-2.5 w-full overflow-hidden rounded-full border border-black/60 bg-black/50">
            <div className="h-full bg-gradient-to-r from-sky-800 via-sky-500 to-sky-400 transition-[width]" style={{ width: `${mpPct}%` }} />
          </div>
        </div>
      </div>

      {/* Center menu */}
      <div className="pointer-events-auto flex items-center gap-2 rounded-xl border border-amber-900/60 bg-gradient-to-b from-[#241811]/95 to-[#140d09]/95 p-2 shadow-[0_8px_24px_rgba(0,0,0,0.55)]">
        <MenuButton icon="user" label="Персонаж" onClick={() => props.onOpen("character")} />
        <MenuButton icon="book" label="Таланты" onClick={() => props.onOpen("talents")} />
        <MenuButton icon="anvil" label="Кузница" onClick={() => props.onOpen("forge")} />
        <MenuButton icon="gear" label="Настройки" onClick={() => props.onOpen("settings")} />
        <MenuButton icon="question" label="Помощь" onClick={() => props.onOpen("help")} />
      </div>

      {/* Right: gold + fullscreen + minimap */}
      <div className="pointer-events-auto flex flex-col items-end gap-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 rounded-lg border border-amber-900/60 bg-gradient-to-b from-[#241811]/95 to-[#140d09]/95 px-3 py-1.5 text-amber-200 shadow-[0_8px_24px_rgba(0,0,0,0.55)]">
            <Icon name="coin" className="h-5 w-5 text-yellow-400" />
            <span className="text-sm font-semibold">{props.gold}</span>
          </div>
          <button
            onClick={props.onToggleFullscreen}
            title="Во весь экран"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-amber-900/60 bg-gradient-to-b from-[#241811]/95 to-[#140d09]/95 text-amber-200 shadow-[0_8px_24px_rgba(0,0,0,0.55)] hover:text-amber-50"
          >
            <Icon name="expand" className="h-5 w-5" />
          </button>
          <button
            onClick={props.onLogout}
            title="Выйти"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-amber-900/60 bg-gradient-to-b from-[#241811]/95 to-[#140d09]/95 text-amber-200 shadow-[0_8px_24px_rgba(0,0,0,0.55)] hover:text-red-300"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-amber-800 bg-[#0c1a10] shadow-[0_8px_24px_rgba(0,0,0,0.55)]">
          <div className="absolute inset-0 opacity-70" style={{ background: "radial-gradient(circle at 50% 50%, #1e3320, #08120a)" }} />
          {props.portals.map((p, i) => (
            <div
              key={i}
              className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400 shadow-[0_0_6px_2px_rgba(168,85,247,0.8)]"
              style={{ left: `${(p.x / props.mapSize.w) * 100}%`, top: `${(p.y / props.mapSize.h) * 100}%` }}
            />
          ))}
          {props.mobDots.map((m, i) => (
            <div
              key={i}
              className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                left: `${(m.x / props.mapSize.w) * 100}%`,
                top: `${(m.y / props.mapSize.h) * 100}%`,
                background: m.alive ? "#e64545" : "transparent",
              }}
            />
          ))}
          <div
            className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.9)]"
            style={{ left: `${mapDotX}%`, top: `${mapDotY}%` }}
          />
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded bg-black/60 px-1.5 text-[10px] text-amber-200">{props.locationName}</div>
        </div>
      </div>
    </div>
  );
}
