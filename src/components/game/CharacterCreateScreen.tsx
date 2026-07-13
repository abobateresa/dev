"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { CLASSES, FACTIONS, RACES, type Faction } from "@/lib/game-data";
import { Icon, type IconName } from "@/components/game/Icon";
import type { CharacterRow } from "@/components/game/types";

export function CharacterCreateScreen({
  onCreated,
  onCancel,
  canCancel,
}: {
  onCreated: (c: CharacterRow) => void;
  onCancel: () => void;
  canCancel: boolean;
}) {
  const [faction, setFaction] = useState<Faction>("light");
  const [race, setRace] = useState(RACES.light[0].id);
  const [className, setClassName] = useState(CLASSES[0].id);
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const races = useMemo(() => RACES[faction], [faction]);
  const selectedClass = CLASSES.find((c) => c.id === className)!;

  function chooseFaction(f: Faction) {
    setFaction(f);
    setRace(RACES[f][0].id);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/characters", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ name, faction, race, className }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Ошибка");
        setLoading(false);
        return;
      }
      onCreated(data.character);
    } catch {
      setError("Ошибка соединения с сервером.");
      setLoading(false);
    }
  }

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center overflow-y-auto bg-cover bg-center p-4"
      style={{ backgroundImage: "linear-gradient(rgba(6,4,2,0.78), rgba(6,4,2,0.9)), url(/images/ground-city.png)" }}
    >
      {/* Логотип сверху */}
      <div className="fade-in mb-3 mt-4">
        <Image 
          src="/images/logo/war-cry.png" 
          alt="War Cry" 
          width={180} 
          height={72} 
          className="drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          priority
        />
      </div>

      <form onSubmit={submit} className="fade-in w-full max-w-3xl rounded-2xl border-2 border-amber-800 bg-gradient-to-b from-[#241811]/95 to-[#140d09]/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
        <h1 className="mb-5 text-2xl font-black text-amber-300">Создание персонажа</h1>

        <div className="mb-5">
          <div className="mb-2 text-sm font-semibold text-amber-300/80">Фракция</div>
          <div className="grid grid-cols-2 gap-3">
            {FACTIONS.map((f) => (
              <button
                type="button"
                key={f.id}
                onClick={() => chooseFaction(f.id)}
                className={`rounded-xl border-2 p-3 text-left transition ${
                  faction === f.id ? "border-amber-400 bg-amber-900/40" : "border-amber-900/50 bg-black/20 hover:border-amber-700"
                }`}
              >
                <div className="font-bold text-amber-100">{f.name}</div>
                <div className="text-xs text-amber-300/70">{f.description}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <div className="mb-2 text-sm font-semibold text-amber-300/80">Раса</div>
          <div className="grid grid-cols-2 gap-3">
            {races.map((r) => (
              <button
                type="button"
                key={r.id}
                onClick={() => setRace(r.id)}
                className={`rounded-xl border-2 px-3 py-2 text-sm font-semibold transition ${
                  race === r.id ? "border-amber-400 bg-amber-900/40 text-amber-100" : "border-amber-900/50 bg-black/20 text-amber-300/80 hover:border-amber-700"
                }`}
              >
                {r.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <div className="mb-2 text-sm font-semibold text-amber-300/80">Роль (класс)</div>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
            {CLASSES.map((c) => (
              <button
                type="button"
                key={c.id}
                onClick={() => setClassName(c.id)}
                title={c.role}
                className={`flex flex-col items-center gap-1 rounded-xl border-2 p-2.5 transition ${
                  className === c.id ? "border-amber-400 bg-amber-900/40" : "border-amber-900/50 bg-black/20 hover:border-amber-700"
                }`}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg border-2"
                  style={{ borderColor: c.color, background: `radial-gradient(circle at 30% 30%, ${c.color}55, #1a1108)` }}
                >
                  <Icon name={c.icon as IconName} className="h-6 w-6 text-white" />
                </div>
                <span className="text-[11px] font-semibold text-amber-100">{c.name}</span>
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-amber-300/60">
            <span className="font-semibold text-amber-200">{selectedClass.name}</span> — {selectedClass.role}. {selectedClass.description}
          </p>
        </div>

        <div className="mb-5">
          <label className="mb-1 block text-sm font-semibold text-amber-300/80">Имя персонажа</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            minLength={2}
            maxLength={16}
            placeholder="Введите имя"
            className="w-full rounded-lg border border-amber-900/60 bg-black/40 px-3 py-2 text-amber-50 outline-none focus:border-amber-500"
          />
        </div>

        {error && <div className="mb-4 rounded-lg border border-red-800 bg-red-950/50 px-3 py-2 text-sm text-red-200">{error}</div>}

        <div className="flex gap-3">
          {canCancel && (
            <button type="button" onClick={onCancel} className="flex-1 rounded-lg border border-amber-800 py-2.5 font-semibold text-amber-300 hover:bg-amber-900/30">
              Назад
            </button>
          )}
          <button
            type="submit"
            disabled={loading}
            className="flex-1 rounded-lg border border-amber-600 bg-gradient-to-b from-amber-600 to-amber-800 py-2.5 font-bold text-white shadow-lg hover:brightness-110 disabled:opacity-50"
          >
            {loading ? "Создание..." : "Создать героя"}
          </button>
        </div>
      </form>
    </div>
  );
}
