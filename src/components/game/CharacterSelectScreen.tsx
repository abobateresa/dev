"use client";

import { useState } from "react";
import Image from "next/image";
import type { CharacterRow } from "@/components/game/types";
import { getClass } from "@/lib/game-data";
import { Icon, type IconName } from "@/components/game/Icon";

export function CharacterSelectScreen({
  characters,
  username,
  onPlay,
  onCreateNew,
  onDeleted,
  onLogout,
}: {
  characters: CharacterRow[];
  username: string;
  onPlay: (c: CharacterRow) => void;
  onCreateNew: () => void;
  onDeleted: (id: number) => void;
  onLogout: () => void;
}) {
  const [busy, setBusy] = useState<number | null>(null);
  const [selectedChar, setSelectedChar] = useState<CharacterRow | null>(characters[0] || null);

  async function handleDelete(id: number) {
    if (!confirm("Удалить персонажа безвозвратно?")) return;
    setBusy(id);
    await fetch(`/api/characters/${id}`, { method: "DELETE", credentials: "include" });
    setBusy(null);
    if (selectedChar?.id === id) {
      setSelectedChar(characters.filter(c => c.id !== id)[0] || null);
    }
    onDeleted(id);
  }

  return (
    <div
      className="fixed inset-0 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "linear-gradient(rgba(6,4,2,0.88), rgba(6,4,2,0.94)), url(/images/ground-forest.png)" }}
    >
      {/* Логотип - слева сверху */}
      <div className="absolute top-4 left-4 z-30">
        <Image 
          src="/images/logo/war-cry.png" 
          alt="War Cry" 
          width={140} 
          height={56} 
          className="drop-shadow-[0_8px_20px_rgba(0,0,0,0.9)]"
          priority
        />
      </div>

      {/* Аккаунт - справа сверху */}
      <div className="absolute top-4 right-4 z-30">
        <div className="rounded-lg bg-black/70 border border-amber-700/60 backdrop-blur-sm px-3 py-2 shadow-lg">
          <div className="text-[10px] font-bold uppercase text-amber-500/80">Аккаунт</div>
          <div className="text-sm font-black text-amber-200">{username}</div>
        </div>
      </div>

      {/* Кнопка выхода - справа снизу */}
      <div className="absolute bottom-4 right-4 z-30">
        <button 
          onClick={onLogout} 
          className="rounded-lg border border-red-700/70 bg-red-950/80 backdrop-blur-sm px-4 py-2 text-sm font-bold text-red-200 hover:brightness-125 transition-all shadow-lg"
        >
          🚪 Выйти
        </button>
      </div>

      {/* Основной контент - 3 колонки компактно */}
      <div className="h-full flex items-center justify-center gap-3 px-4 py-20">
        
        {/* ЛЕВАЯ КОЛОНКА - Новости (20%) */}
        <div className="w-[340px] h-[600px]">
          <div className="h-full rounded-2xl border-2 border-amber-700/60 bg-gradient-to-b from-[#2a1a0f]/98 to-[#1f1209]/98 backdrop-blur-md p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b-2 border-amber-800/50">
              <span className="text-3xl">�</span>
              <h2 className="text-2xl font-black text-amber-300 drop-shadow-lg">Новости</h2>
            </div>
            
            <div className="space-y-4 overflow-y-auto h-[calc(100%-80px)] pr-2 scrollbar-thin scrollbar-thumb-amber-800 scrollbar-track-transparent">
              <div className="rounded-xl bg-gradient-to-br from-amber-950/50 to-black/60 border border-amber-800/40 p-4 hover:border-amber-600/60 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded-md bg-amber-600/80 text-[10px] font-black text-white uppercase tracking-wider">Обновление</span>
                  <span className="text-xs text-amber-600/70 font-semibold">13.07.2026</span>
                </div>
                <h3 className="font-bold text-amber-100 mb-2">🎉 Добро пожаловать!</h3>
                <p className="text-sm text-amber-300/80 leading-relaxed">
                  Легендарная игра War Cry возвращается! Создайте своего героя и отправляйтесь в эпическое приключение по миру света и тьмы.
                </p>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-blue-950/50 to-black/60 border border-blue-800/40 p-4 hover:border-blue-600/60 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded-md bg-blue-600/80 text-[10px] font-black text-white uppercase tracking-wider">Событие</span>
                  <span className="text-xs text-amber-600/70 font-semibold">10.07.2026</span>
                </div>
                <h3 className="font-bold text-blue-100 mb-2">⚔️ Новые классы</h3>
                <p className="text-sm text-amber-300/80 leading-relaxed">
                  Доступно 10 уникальных классов: воин, маг, лучник, разбойник и другие! Каждый со своими способностями.
                </p>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-purple-950/50 to-black/60 border border-purple-800/40 p-4 hover:border-purple-600/60 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded-md bg-purple-600/80 text-[10px] font-black text-white uppercase tracking-wider">Фичи</span>
                  <span className="text-xs text-amber-600/70 font-semibold">05.07.2026</span>
                </div>
                <h3 className="font-bold text-purple-100 mb-2">🏆 PvP Арены</h3>
                <p className="text-sm text-amber-300/80 leading-relaxed">
                  Сражайтесь с другими игроками на аренах, в подземельях и открытом мире!
                </p>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-green-950/50 to-black/60 border border-green-800/40 p-4 hover:border-green-600/60 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded-md bg-green-600/80 text-[10px] font-black text-white uppercase tracking-wider">Система</span>
                  <span className="text-xs text-amber-600/70 font-semibold">01.07.2026</span>
                </div>
                <h3 className="font-bold text-green-100 mb-2">🛡️ Экипировка</h3>
                <p className="text-sm text-amber-300/80 leading-relaxed">
                  Собирайте легендарное оружие, броню и артефакты для усиления персонажа.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ЦЕНТРАЛЬНАЯ КОЛОНКА - Превью персонажа (40%) */}
        <div className="flex-1 max-w-[500px] h-[600px]">
          <div className="h-full rounded-2xl border-2 border-amber-700/60 bg-gradient-to-b from-[#2a1a0f]/98 to-[#1f1209]/98 backdrop-blur-md shadow-[0_25px_70px_rgba(0,0,0,0.9)]">
            {selectedChar ? (
              <div className="h-full flex flex-col p-8">
                {/* Иконка класса */}
                <div className="flex justify-center mb-6">
                  <div
                    className="relative flex h-40 w-40 items-center justify-center rounded-3xl border-4 shadow-2xl"
                    style={{ 
                      borderColor: getClass(selectedChar.className).color, 
                      background: `radial-gradient(circle at 40% 40%, ${getClass(selectedChar.className).color}88, #0f0805)`,
                      boxShadow: `0 25px 50px rgba(0,0,0,0.8), 0 0 40px ${getClass(selectedChar.className).color}44, inset 0 2px 20px ${getClass(selectedChar.className).color}33`
                    }}
                  >
                    <Icon name={getClass(selectedChar.className).icon as IconName} className="h-24 w-24 text-white drop-shadow-2xl" />
                    {/* Свечение */}
                    <div className="absolute inset-0 rounded-3xl" style={{ 
                      background: `radial-gradient(circle at 50% 50%, ${getClass(selectedChar.className).color}22, transparent 70%)`,
                    }}></div>
                  </div>
                </div>

                {/* Имя персонажа */}
                <h2 className="text-5xl font-black text-center text-amber-100 mb-3 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                  {selectedChar.name}
                </h2>

                {/* Информация */}
                <div className="flex items-center justify-center gap-3 text-amber-400/90 mb-6 text-sm font-bold">
                  <span className="px-3 py-1 rounded-lg bg-amber-900/40 border border-amber-700/50">Уровень {selectedChar.level}</span>
                  <span>•</span>
                  <span>{selectedChar.faction === "light" ? "⚡ Свет" : "🌙 Тьма"}</span>
                  <span>•</span>
                  <span className="text-amber-300">{getClass(selectedChar.className).name}</span>
                </div>

                {/* Характеристики */}
                <div className="grid grid-cols-2 gap-3 mb-6 flex-1">
                  <div className="rounded-xl bg-gradient-to-br from-red-950/60 to-black/70 border-2 border-red-800/50 p-4 shadow-lg">
                    <div className="text-xs text-red-400/80 mb-1 font-bold uppercase tracking-wide">Здоровье</div>
                    <div className="text-3xl font-black text-red-200 flex items-center gap-2">
                      <span>❤️</span>
                      <span>{selectedChar.hp}</span>
                    </div>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-blue-950/60 to-black/70 border-2 border-blue-800/50 p-4 shadow-lg">
                    <div className="text-xs text-blue-400/80 mb-1 font-bold uppercase tracking-wide">Мана</div>
                    <div className="text-3xl font-black text-blue-200 flex items-center gap-2">
                      <span>💧</span>
                      <span>{selectedChar.mp}</span>
                    </div>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-amber-950/60 to-black/70 border-2 border-amber-800/50 p-4 shadow-lg">
                    <div className="text-xs text-amber-400/80 mb-1 font-bold uppercase tracking-wide">Золото</div>
                    <div className="text-3xl font-black text-amber-200 flex items-center gap-2">
                      <span>💰</span>
                      <span>{selectedChar.gold}</span>
                    </div>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-purple-950/60 to-black/70 border-2 border-purple-800/50 p-4 shadow-lg">
                    <div className="text-xs text-purple-400/80 mb-1 font-bold uppercase tracking-wide">Опыт</div>
                    <div className="text-3xl font-black text-purple-200 flex items-center gap-2">
                      <span>⭐</span>
                      <span>{selectedChar.exp}</span>
                    </div>
                  </div>
                </div>

                {/* Кнопка играть */}
                <button
                  onClick={() => onPlay(selectedChar)}
                  className="group relative overflow-hidden rounded-2xl border-3 border-amber-500 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 py-5 font-black text-2xl text-white shadow-[0_10px_30px_rgba(217,119,6,0.6),0_0_40px_rgba(217,119,6,0.3)] transition-all duration-200 hover:shadow-[0_15px_40px_rgba(217,119,6,0.8),0_0_50px_rgba(217,119,6,0.5)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/20 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <span className="relative drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] flex items-center justify-center gap-3">
                    <span className="text-3xl">⚔️</span>
                    <span>Войти в игру</span>
                  </span>
                </button>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                <div className="text-8xl mb-6 opacity-30">🎭</div>
                <h3 className="text-2xl font-bold text-amber-300 mb-3">Нет персонажа</h3>
                <p className="text-amber-400/70 mb-8 max-w-xs">
                  Выберите персонажа из списка справа или создайте нового героя
                </p>
                <button
                  onClick={onCreateNew}
                  className="rounded-xl border-2 border-amber-600 bg-gradient-to-b from-amber-600 to-amber-800 px-8 py-4 text-lg font-bold text-white hover:brightness-110 transition-all shadow-lg"
                >
                  ✨ Создать персонажа
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА - Список персонажей (20%) */}
        <div className="w-[340px] h-[600px]">
          <div className="h-full rounded-2xl border-2 border-amber-700/60 bg-gradient-to-b from-[#2a1a0f]/98 to-[#1f1209]/98 backdrop-blur-md p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b-2 border-amber-800/50">
              <span className="text-3xl">⚔️</span>
              <h2 className="text-2xl font-black text-amber-300 drop-shadow-lg">Персонажи</h2>
              <div className="ml-auto px-2.5 py-1 rounded-lg bg-amber-900/50 border border-amber-700/50 text-sm font-black text-amber-300">
                {characters.length}/5
              </div>
            </div>

            <div className="space-y-3 overflow-y-auto h-[calc(100%-160px)] pr-2 mb-4 scrollbar-thin scrollbar-thumb-amber-800 scrollbar-track-transparent">
              {characters.map((c) => {
                const cls = getClass(c.className);
                const isSelected = selectedChar?.id === c.id;
                
                return (
                  <div 
                    key={c.id} 
                    onClick={() => setSelectedChar(c)}
                    className={`cursor-pointer rounded-xl border-2 transition-all duration-200 ${
                      isSelected 
                        ? "border-amber-500 bg-gradient-to-br from-amber-900/60 to-amber-950/40 shadow-[0_0_20px_rgba(217,119,6,0.3)] scale-[1.02]" 
                        : "border-amber-900/50 bg-black/40 hover:border-amber-700 hover:bg-black/60 hover:scale-[1.01]"
                    }`}
                  >
                    <div className="flex items-center gap-3 p-3">
                      <div
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-2 shadow-lg"
                        style={{ 
                          borderColor: cls.color, 
                          background: `radial-gradient(circle at 30% 30%, ${cls.color}66, #0f0805)`,
                          boxShadow: `0 4px 12px rgba(0,0,0,0.5), 0 0 15px ${cls.color}33`
                        }}
                      >
                        <Icon name={cls.icon as IconName} className="h-8 w-8 text-white drop-shadow-lg" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="truncate font-black text-amber-100">{c.name}</div>
                        <div className="truncate text-xs text-amber-400/80 font-semibold">
                          Ур.{c.level} • {cls.name}
                        </div>
                      </div>
                      {isSelected && (
                        <div className="text-amber-400 text-xl">✓</div>
                      )}
                    </div>
                    
                    {isSelected && (
                      <div className="px-3 pb-3 pt-0">
                        <button
                          disabled={busy === c.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(c.id);
                          }}
                          className="w-full rounded-lg border-2 border-red-800/70 bg-gradient-to-br from-red-950/70 to-red-900/50 px-3 py-2 text-xs font-bold text-red-200 hover:brightness-110 disabled:opacity-40 transition-all shadow-md"
                        >
                          🗑️ Удалить персонажа
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}

              {characters.length === 0 && (
                <div className="text-center py-12 text-amber-400/60">
                  <div className="text-5xl mb-3 opacity-40">👤</div>
                  <p className="text-sm">Нет персонажей</p>
                </div>
              )}
            </div>

            {/* Кнопка создания персонажа */}
            {characters.length < 5 && (
              <button
                onClick={onCreateNew}
                className="w-full rounded-xl border-2 border-dashed border-amber-600/70 bg-gradient-to-br from-amber-950/40 to-black/30 py-4 text-amber-300 hover:border-amber-500 hover:bg-gradient-to-br hover:from-amber-900/50 hover:to-black/40 transition-all font-bold text-lg shadow-inner"
              >
                <span className="flex items-center justify-center gap-2">
                  <span className="text-2xl">✨</span>
                  <span>Создать персонажа</span>
                </span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
