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

function ResourceOrb({ value, max, color, label, icon }: { 
  value: number; 
  max: number; 
  color: string; 
  label: string;
  icon: IconName;
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  
  return (
    <div className="group relative flex flex-col items-center">
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-black/80 bg-black/70 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.6)]">
        {/* Background glow */}
        <div 
          className="absolute inset-[3px] rounded-full opacity-30" 
          style={{ background: `radial-gradient(circle at 40% 30%, ${color}55, transparent)` }} 
        />
        
        {/* Progress fill */}
        <div 
          className="absolute inset-[3px] rounded-full transition-all duration-200" 
          style={{ 
            background: `conic-gradient(${color} ${pct * 3.6}deg, transparent ${pct * 3.6}deg)` 
          }} 
        />
        
        {/* Inner circle */}
        <div className="relative z-10 flex h-14 w-14 flex-col items-center justify-center rounded-full border border-black/60 bg-black/80">
          <div className="text-[15px] font-bold tabular-nums text-white tracking-[-0.5px]">
            {Math.round(value)}
          </div>
          <div className="text-[8px] font-medium text-white/60 -mt-0.5">{label}</div>
        </div>
      </div>
      
      {/* Value under orb */}
      <div className="mt-1 text-[10px] text-white/50 tabular-nums">
        {Math.round(value)} / {max}
      </div>
    </div>
  );
}

export function BottomBar(props: BottomBarProps) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex items-end justify-center gap-4">
      
      {/* Target Lock Button */}
      <button
        onClick={props.onToggleLock}
        title={props.targetLock ? "Снять блокировку цели" : "Заблокировать цель"}
        className={`pointer-events-auto flex h-14 w-14 items-center justify-center self-center rounded-2xl border-2 shadow-[0_6px_20px_rgba(0,0,0,0.5)] transition-all active:scale-[0.95] ${
          props.targetLock 
            ? "border-amber-400 bg-amber-800/70 text-amber-100" 
            : "border-amber-900/60 bg-gradient-to-b from-[#241811] to-[#140d09] text-amber-300 hover:border-amber-700"
        }`}
      >
        <Icon name="lock" className="h-6 w-6" />
      </button>

      {/* Main Action Bar */}
      <div className="pointer-events-auto flex items-end gap-3 rounded-3xl border border-amber-900/70 bg-gradient-to-b from-[#241811]/95 to-[#140d09]/95 p-3 shadow-[0_12px_40px_rgba(0,0,0,0.65)]">
        
        {/* HP Orb */}
        <ResourceOrb 
          value={props.hp} 
          max={props.maxHp} 
          color="#ef4444" 
          label="HP" 
          icon="potionHp" 
        />

        {/* Abilities */}
        <div className="flex items-end gap-2 px-2">
          {props.abilities.map((ab, i) => {
            const readyAt = props.cooldownReadyAt[ab.id] ?? 0;
            const remaining = Math.max(0, readyAt - props.now);
            const cdPct = remaining > 0 ? Math.min(100, (remaining / (ab.cooldown * 1000)) * 100) : 0;
            const noMana = props.mana < ab.manaCost;

            return (
              <button
                key={ab.id}
                onClick={() => props.onUseAbility(i)}
                disabled={noMana}
                title={`${ab.name} — ${ab.manaCost} маны`}
                className={`group relative flex h-16 w-16 flex-col items-center justify-center overflow-hidden rounded-2xl border-2 shadow-[0_4px_12px_rgba(0,0,0,0.4)] active:scale-[0.96] transition-all ${
                  noMana 
                    ? "border-sky-900/70 opacity-60" 
                    : "border-amber-800/80 hover:border-amber-600"
                }`}
                style={{ 
                  background: "radial-gradient(circle at 35% 25%, #3a2a1c, #140d09)" 
                }}
              >
                <Icon name={ab.icon as IconName} className="h-8 w-8 text-amber-100 drop-shadow" />
                
                {/* Hotkey number */}
                <div className="absolute left-1.5 top-1 text-[10px] font-bold text-amber-400/90">
                  {i + 1}
                </div>
                
                {/* Mana cost */}
                <div className="absolute bottom-1 right-1.5 text-[9px] font-semibold text-sky-400">
                  {ab.manaCost}
                </div>

                {/* Cooldown overlay */}
                {remaining > 0 && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-black/75 text-xl font-bold text-white/90"
                    style={{ clipPath: `inset(${100 - cdPct}% 0 0 0)` }}
                  >
                    {(remaining / 1000).toFixed(1)}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* MP Orb */}
        <ResourceOrb 
          value={props.mp} 
          max={props.maxMp} 
          color="#3b82f6" 
          label="MP" 
          icon="potionMp" 
        />

        {/* Potions */}
        <div className="flex flex-col gap-1.5 pl-2">
          <button
            onClick={() => props.onUsePotion("hp")}
            className="group relative flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-red-900/70 shadow-inner active:scale-[0.96] transition-all"
            style={{ background: "radial-gradient(circle at 35% 25%, #3a1c1c, #140909)" }}
            title="Зелье здоровья"
          >
            <Icon name="potionHp" className="h-6 w-6 text-red-400" />
            <span className="absolute -bottom-0.5 right-1 text-[10px] font-bold text-red-300 tabular-nums">
              {props.potionsHp}
            </span>
          </button>

          <button
            onClick={() => props.onUsePotion("mp")}
            className="group relative flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-sky-900/70 shadow-inner active:scale-[0.96] transition-all"
            style={{ background: "radial-gradient(circle at 35% 25%, #1c283a, #090d14)" }}
            title="Зелье маны"
          >
            <Icon name="potionMp" className="h-6 w-6 text-sky-400" />
            <span className="absolute -bottom-0.5 right-1 text-[10px] font-bold text-sky-300 tabular-nums">
              {props.potionsMp}
            </span>
          </button>
        </div>
      </div>

      {/* Level Orb */}
      <div className="pointer-events-auto flex h-14 w-14 items-center justify-center self-center rounded-2xl border-[3px] border-amber-500/80 bg-gradient-to-b from-[#3a2a1c] to-[#140d09] text-xl font-bold text-amber-200 shadow-[0_6px_20px_rgba(0,0,0,0.5)]">
        {props.level}
      </div>
    </div>
  );
}
