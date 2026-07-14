"use client";

import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/game/Icon";
import {
  EQUIPMENT_SLOTS,
  MAX_EQUIP_LEVEL,
  TALENT_BRANCHES,
  TALENT_RANKS,
  getClass,
  talentPointsForLevel,
  upgradeCost,
  type CharacterStats,
  type EquipmentSlot,
  type TalentBranch,
} from "@/lib/game-data";

export function ModalShell({ title, onClose, children, wide }: { title: string; onClose: () => void; children: ReactNode; wide?: boolean }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onMouseDown={onClose}>
      <div
        onMouseDown={(e) => e.stopPropagation()}
        className={`relative max-h-[88vh] overflow-y-auto rounded-3xl border-2 border-amber-800/90 bg-gradient-to-b from-[#2a2219] to-[#140d09] p-6 text-amber-100 shadow-[0_25px_70px_rgba(0,0,0,0.85)] ${
          wide ? "w-full max-w-4xl" : "w-full max-w-lg"
        }`}
      >
        {/* Header */}
        <div className="mb-5 flex items-center justify-between border-b border-amber-900/70 pb-4">
          <div>
            <h2 className="text-2xl font-bold tracking-[0.5px] text-amber-200">{title}</h2>
            <div className="h-px w-12 bg-amber-700 mt-1" />
          </div>
          <button 
            onClick={onClose} 
            className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-900/60 hover:bg-amber-900/30 text-amber-300 transition"
          >
            <Icon name="close" className="h-4 w-4" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export function CharacterModal({
  onClose,
  name,
  faction,
  race,
  className,
  level,
  exp,
  expNeeded,
  stats,
}: {
  onClose: () => void;
  name: string;
  faction: string;
  race: string;
  className: string;
  level: number;
  exp: number;
  expNeeded: number;
  stats: CharacterStats;
}) {
  const cls = getClass(className);
  const rows: [string, string | number][] = [
    ["Сила", stats.str],
    ["Ловкость", stats.agi],
    ["Интеллект", stats.int],
    ["Выносливость", stats.vit],
    ["Атака", stats.attack],
    ["Сила магии", stats.spellPower],
    ["Защита", stats.defense],
    ["Шанс крита", `${stats.critChance}%`],
    ["Здоровье (макс)", stats.maxHp],
    ["Мана (макс)", stats.maxMp],
  ];
  return (
    <ModalShell title="Персонаж" onClose={onClose}>
      <div className="flex items-center gap-3">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-xl border-2"
          style={{ borderColor: cls.color, background: `radial-gradient(circle at 30% 30%, ${cls.color}55, #1a1108)` }}
        >
          <Icon name={cls.icon as IconName} className="h-9 w-9 text-white" />
        </div>
        <div>
          <div className="text-xl font-bold">{name}</div>
          <div className="text-sm text-amber-300/80">
            {faction === "light" ? "Свет" : "Тьма"} · {race} · {cls.name}
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="flex justify-between text-xs text-amber-300/70">
          <span>Уровень {level}</span>
          <span>
            {exp} / {expNeeded} опыта
          </span>
        </div>
        <div className="mt-1 h-2.5 w-full overflow-hidden rounded-full border border-black/60 bg-black/50">
          <div className="h-full bg-gradient-to-r from-purple-700 to-purple-400" style={{ width: `${Math.min(100, (exp / expNeeded) * 100)}%` }} />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
        {rows.map(([k, v]) => (
          <div key={k} className="flex items-center justify-between rounded-lg border border-amber-900/50 bg-black/20 px-3 py-2">
            <span className="text-amber-300/80">{k}</span>
            <span className="font-semibold">{v}</span>
          </div>
        ))}
      </div>
    </ModalShell>
  );
}

export function TalentsModal({
  onClose,
  talents,
  level,
  onSpend,
}: {
  onClose: () => void;
  talents: Partial<Record<TalentBranch, number>>;
  level: number;
  onSpend: (branch: TalentBranch) => void;
}) {
  const spent = Object.values(talents).reduce((a, b) => a + (b ?? 0), 0);
  const available = talentPointsForLevel(level) - spent;
  return (
    <ModalShell title="Дерево талантов" onClose={onClose} wide>
      <div className="mb-3 text-sm text-amber-300/80">Свободные очки: <span className="font-bold text-amber-100">{available}</span></div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {TALENT_BRANCHES.map((branch) => {
          const rank = talents[branch.id] ?? 0;
          return (
            <div key={branch.id} className="rounded-xl border border-amber-900/50 bg-black/20 p-3">
              <div className="mb-2 flex items-center gap-2">
                <Icon name={branch.icon as IconName} className="h-5 w-5 text-amber-300" />
                <div className="font-semibold">{branch.name}</div>
              </div>
              <p className="mb-3 text-xs text-amber-300/70">{branch.description}</p>
              <div className="flex gap-1.5">
                {Array.from({ length: TALENT_RANKS }).map((_, i) => {
                  const filled = i < rank;
                  const isNext = i === rank;
                  return (
                    <button
                      key={i}
                      disabled={!isNext || available <= 0}
                      onClick={() => onSpend(branch.id)}
                      className={`h-8 flex-1 rounded border text-xs font-bold transition ${
                        filled
                          ? "border-amber-400 bg-amber-600/70 text-white"
                          : isNext && available > 0
                          ? "border-amber-500 bg-amber-900/40 text-amber-200 hover:bg-amber-800/60"
                          : "border-amber-900/40 bg-black/30 text-amber-700"
                      }`}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>
              <div className="mt-2 text-[11px] text-amber-300/60">Изучено: {rank}/{TALENT_RANKS}</div>
            </div>
          );
        })}
      </div>
    </ModalShell>
  );
}

export function ForgeModal({
  onClose,
  equipment,
  gold,
  onUpgrade,
  onBuyPotion,
}: {
  onClose: () => void;
  equipment: Partial<Record<EquipmentSlot, number>>;
  gold: number;
  onUpgrade: (slot: EquipmentSlot) => void;
  onBuyPotion: (kind: "hp" | "mp") => void;
}) {
  return (
    <ModalShell title="Кузница и лавка" onClose={onClose} wide>
      <div className="mb-2 flex items-center gap-2 text-sm text-amber-300/80">
        <Icon name="coin" className="h-4 w-4 text-yellow-400" /> Золото: <span className="font-bold text-amber-100">{gold}</span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {EQUIPMENT_SLOTS.map((slot) => {
          const lvl = equipment[slot.id] ?? 0;
          const maxed = lvl >= MAX_EQUIP_LEVEL;
          const cost = upgradeCost(lvl);
          return (
            <div key={slot.id} className="rounded-xl border border-amber-900/50 bg-black/20 p-3">
              <div className="mb-2 flex items-center gap-2">
                <Icon name={slot.icon as IconName} className="h-5 w-5 text-amber-300" />
                <div className="font-semibold">{slot.name}</div>
              </div>
              <div className="mb-2 text-xs text-amber-300/70">Уровень: {lvl}/{MAX_EQUIP_LEVEL}</div>
              <div className="mb-3 h-2 w-full overflow-hidden rounded-full border border-black/60 bg-black/50">
                <div className="h-full bg-gradient-to-r from-orange-700 to-orange-400" style={{ width: `${(lvl / MAX_EQUIP_LEVEL) * 100}%` }} />
              </div>
              <button
                disabled={maxed || gold < cost}
                onClick={() => onUpgrade(slot.id)}
                className="w-full rounded-lg border border-amber-700 bg-amber-900/50 py-1.5 text-sm font-semibold text-amber-100 transition hover:bg-amber-800/60 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {maxed ? "Максимум" : `Улучшить (${cost} зол.)`}
              </button>
            </div>
          );
        })}
      </div>
      <div className="mt-4 border-t border-amber-900/50 pt-3">
        <div className="mb-2 text-sm font-semibold text-amber-200">Лавка зелий</div>
        <div className="flex gap-3">
          <button
            onClick={() => onBuyPotion("hp")}
            disabled={gold < 15}
            className="flex flex-1 items-center justify-between rounded-lg border border-red-900/60 bg-black/20 px-3 py-2 text-sm hover:bg-red-950/40 disabled:opacity-40"
          >
            <span className="flex items-center gap-2"><Icon name="potionHp" className="h-5 w-5" /> Зелье здоровья</span>
            <span className="text-amber-300">15 зол.</span>
          </button>
          <button
            onClick={() => onBuyPotion("mp")}
            disabled={gold < 15}
            className="flex flex-1 items-center justify-between rounded-lg border border-sky-900/60 bg-black/20 px-3 py-2 text-sm hover:bg-sky-950/40 disabled:opacity-40"
          >
            <span className="flex items-center gap-2"><Icon name="potionMp" className="h-5 w-5" /> Зелье маны</span>
            <span className="text-amber-300">15 зол.</span>
          </button>
        </div>
      </div>
    </ModalShell>
  );
}

export function SettingsModal({
  onClose,
  musicVolume,
  sfxVolume,
  showGrid,
  showNames,
  onChange,
  onLogout,
  onExitToSelect,
}: {
  onClose: () => void;
  musicVolume: number;
  sfxVolume: number;
  showGrid: boolean;
  showNames: boolean;
  onChange: (patch: Partial<{ musicVolume: number; sfxVolume: number; showGrid: boolean; showNames: boolean }>) => void;
  onLogout: () => void;
  onExitToSelect: () => void;
}) {
  return (
    <ModalShell title="Настройки" onClose={onClose}>
      <div className="space-y-4 text-sm">
        <div>
          <label className="mb-1 flex justify-between text-amber-300/80">
            <span>Громкость музыки</span>
            <span>{musicVolume}%</span>
          </label>
          <input type="range" min={0} max={100} value={musicVolume} onChange={(e) => onChange({ musicVolume: Number(e.target.value) })} className="w-full accent-amber-500" />
        </div>
        <div>
          <label className="mb-1 flex justify-between text-amber-300/80">
            <span>Громкость эффектов</span>
            <span>{sfxVolume}%</span>
          </label>
          <input type="range" min={0} max={100} value={sfxVolume} onChange={(e) => onChange({ sfxVolume: Number(e.target.value) })} className="w-full accent-amber-500" />
        </div>
        <label className="flex items-center justify-between rounded-lg border border-amber-900/50 bg-black/20 px-3 py-2">
          <span>Показывать сетку карты</span>
          <input type="checkbox" checked={showGrid} onChange={(e) => onChange({ showGrid: e.target.checked })} className="h-4 w-4 accent-amber-500" />
        </label>
        <label className="flex items-center justify-between rounded-lg border border-amber-900/50 bg-black/20 px-3 py-2">
          <span>Показывать имена</span>
          <input type="checkbox" checked={showNames} onChange={(e) => onChange({ showNames: e.target.checked })} className="h-4 w-4 accent-amber-500" />
        </label>
        <div className="flex gap-2 border-t border-amber-900/50 pt-3">
          <button onClick={onExitToSelect} className="flex-1 rounded-lg border border-amber-700 bg-amber-900/40 py-2 font-semibold hover:bg-amber-800/50">
            Выбор персонажа
          </button>
          <button onClick={onLogout} className="flex-1 rounded-lg border border-red-800 bg-red-950/40 py-2 font-semibold text-red-200 hover:bg-red-900/50">
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </ModalShell>
  );
}

export function HelpModal({ onClose }: { onClose: () => void }) {
  return (
    <ModalShell title="Помощь" onClose={onClose}>
      <ul className="list-disc space-y-2 pl-5 text-sm text-amber-200/90">
        <li>Левая кнопка мыши по земле — передвижение персонажа.</li>
        <li>Левая кнопка мыши по врагу — выбрать цель и начать автоатаку в радиусе досягаемости.</li>
        <li>Клавиши 1–5 или иконки внизу — применение способностей по выбранной цели.</li>
        <li>Зелья здоровья/маны восстанавливают часть характеристик, покупаются в кузнице.</li>
        <li>Портал в городе переносит в Тёмный лес и обратно.</li>
        <li>Здания блокируют проход — их нельзя пересечь.</li>
        <li>Очки талантов даются за уровень, тратятся в дереве талантов.</li>
        <li>Кнопка во весь экран разворачивает игру на весь монитор.</li>
      </ul>
    </ModalShell>
  );
}
