"use client";

import { Icon, type IconName } from "@/components/game/Icon";
import type { AbilityDef } from "@/lib/game-data";

interface BottomBarProps {
  abilities: AbilityDef[];
  cooldownReadyAt: Record<string, number>;
  now: number;
  hp: number;
  maxHp: number;
  mp: number;
  maxMp: number;
  potionsHp: number;
  potionsMp: number;
  mana: number;
  level: number;
  targetLock: boolean;
  onToggleLock: () => void;
  onUseAbility: (index: number) => void;
  onUsePotion: (kind: "hp" | "mp") => void;
}

function Orb({ value, max, color, label }: { value: number; max: number; color: string; label: string }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-black/70 bg-black/60 shadow-inner">
      <div
        className="absolute inset-1 rounded-full opacity-90 transition-[height]"
        style={{
          background: `linear-gradient(to top, ${color} 0%, ${color}cc ${pct}%, transparent ${pct}%)`,
        }}
      />
      <div className="relative z-10 text-center text-[10px] font-bold text-white drop-shadow">
        <div>{Math.round(value)}</div>
        <div className="text-[8px] font-normal opacity-80">{label}</div>
      </div>
    </div>
  );
}

export function BottomBar(props: BottomBarProps) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-3 z-30 flex items-end justify-center gap-3">
      <button
        onClick={props.onToggleLock}
        title="Удерживать цель"
        className={`pointer-events-auto flex h-11 w-11 items-center justify-center self-center rounded-lg border shadow-[0_8px_20px_rgba(0,0,0,0.5)] ${
          props.targetLock ? "border-amber-400 bg-amber-800/70 text-amber-100" : "border-amber-900/60 bg-gradient-to-b from-[#241811] to-[#140d09] text-amber-300"
        }`}
      >
        <Icon name="lock" className="h-5 w-5" />
      </button>

      <div className="pointer-events-auto flex items-end gap-2 rounded-2xl border border-amber-900/70 bg-gradient-to-b from-[#241811]/95 to-[#140d09]/95 p-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
        <Orb value={props.hp} max={props.maxHp} color="#ef4444" label="ОЗ" />

        <div className="flex items-end gap-1.5">
          {props.abilities.map((ab, i) => {
            const readyAt = props.cooldownReadyAt[ab.id] ?? 0;
            const remaining = Math.max(0, readyAt - props.now);
            const cdPct = remaining > 0 ? Math.min(100, (remaining / (ab.cooldown * 1000)) * 100) : 0;
            const noMana = props.mana < ab.manaCost;
            return (
              <button
                key={ab.id}
                onClick={() => props.onUseAbility(i)}
                title={`${ab.name} (${ab.manaCost} маны)`}
                className={`group relative flex h-14 w-14 flex-col items-center justify-center overflow-hidden rounded-lg border-2 shadow-inner transition active:scale-95 ${
                  noMana ? "border-sky-900/60 opacity-70" : "border-amber-800/80"
                }`}
                style={{ background: "radial-gradient(circle at 30% 20%, #3a2a1c, #140d09)" }}
              >
                <Icon name={ab.icon as IconName} className="h-7 w-7 text-amber-100" />
                <span className="absolute left-1 top-0.5 text-[9px] font-bold text-amber-300">{i + 1}</span>
                <span className="absolute bottom-0.5 right-1 text-[8px] text-sky-300">{ab.manaCost}</span>
                {remaining > 0 && (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black/70 text-sm font-bold text-white"
                    style={{ clipPath: `inset(${100 - cdPct}% 0 0 0)` }}
                  >
                    {(remaining / 1000).toFixed(1)}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <Orb value={props.mp} max={props.maxMp} color="#3b82f6" label="ОМ" />

        <div className="flex items-end gap-1.5">
          <button
            onClick={() => props.onUsePotion("hp")}
            className="relative flex h-12 w-12 flex-col items-center justify-center rounded-lg border-2 border-red-900/70 shadow-inner active:scale-95"
            style={{ background: "radial-gradient(circle at 30% 20%, #3a1c1c, #140909)" }}
            title="Зелье здоровья"
          >
            <Icon name="potionHp" className="h-6 w-6" />
            <span className="absolute bottom-0 right-1 text-[9px] font-bold text-red-200">{props.potionsHp}</span>
          </button>
          <button
            onClick={() => props.onUsePotion("mp")}
            className="relative flex h-12 w-12 flex-col items-center justify-center rounded-lg border-2 border-sky-900/70 shadow-inner active:scale-95"
            style={{ background: "radial-gradient(circle at 30% 20%, #1c283a, #090d14)" }}
            title="Зелье маны"
          >
            <Icon name="potionMp" className="h-6 w-6" />
            <span className="absolute bottom-0 right-1 text-[9px] font-bold text-sky-200">{props.potionsMp}</span>
          </button>
        </div>
      </div>

      <div className="pointer-events-auto flex h-11 w-11 items-center justify-center self-center rounded-full border-2 border-amber-500 bg-gradient-to-b from-[#3a2a1c] to-[#140d09] text-sm font-bold text-amber-200 shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
        {props.level}
      </div>
    </div>
  );
}
