"use client";

import { useState } from "react";
import Image from "next/image";
import type { AuthUser } from "@/components/game/types";

export function AuthScreen({ onAuthed }: { onAuthed: (user: AuthUser) => void }) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (mode === "register" && password !== password2) {
      setError("Пароли не совпадают.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`/api/auth/${mode}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Ошибка");
        setLoading(false);
        return;
      }
      onAuthed(data.user);
    } catch {
      setError("Ошибка соединения с сервером.");
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 flex bg-[#0a0806]">
      {/* Левая часть - фоновое изображение с логотипом */}
      <div 
        className="hidden md:flex md:w-1/2 lg:w-3/5 flex-col items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: "linear-gradient(rgba(6,4,2,0.4), rgba(6,4,2,0.6)), url(/images/ground-city.png)" }}
      >
        <div className="fade-in">
          <Image 
            src="/images/logo/war-cry.png" 
            alt="War Cry" 
            width={350} 
            height={140} 
            className="drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
            priority
          />
        </div>
      </div>

      {/* Правая часть - форма авторизации */}
      <div className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center p-8 bg-gradient-to-br from-[#1a1108] via-[#0d0804] to-[#0a0604] relative overflow-hidden">
        {/* Декоративные элементы фона */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-800 rounded-full blur-[100px]"></div>
        </div>

        <div className="fade-in w-full max-w-md relative z-10">
          {/* Логотип для мобильных */}
          <div className="md:hidden mb-8 flex justify-center">
            <Image 
              src="/images/logo/war-cry.png" 
              alt="War Cry" 
              width={200} 
              height={80} 
              className="drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
              priority
            />
          </div>

          <div className="rounded-2xl border-2 border-amber-700/50 bg-gradient-to-b from-[#2a1a0f]/98 via-[#1f1209]/98 to-[#140a05]/98 backdrop-blur-sm p-8 shadow-[0_25px_70px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,191,0,0.1)]">
            {/* Заголовок с декоративными линиями */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-700/50"></div>
                <h1 className="text-3xl font-black tracking-wide text-amber-300 drop-shadow-[0_2px_8px_rgba(255,191,0,0.5)]">
                  {mode === "login" ? "Авторизация" : "Регистрация"}
                </h1>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-700/50"></div>
              </div>

              {/* Переключатель режимов */}
              <div className="flex gap-2 p-1.5 rounded-xl bg-black/40 border border-amber-900/40">
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all duration-200 ${
                    mode === "login" 
                      ? "bg-gradient-to-b from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-900/50" 
                      : "text-amber-400/70 hover:text-amber-300 hover:bg-amber-950/30"
                  }`}
                >
                  Вход
                </button>
                <button
                  type="button"
                  onClick={() => setMode("register")}
                  className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all duration-200 ${
                    mode === "register" 
                      ? "bg-gradient-to-b from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-900/50" 
                      : "text-amber-400/70 hover:text-amber-300 hover:bg-amber-950/30"
                  }`}
                >
                  Регистрация
                </button>
              </div>
            </div>

            <form onSubmit={submit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-400/90">
                  Логин
                </label>
                <div className="relative">
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    minLength={3}
                    maxLength={20}
                    className="w-full rounded-xl border-2 border-amber-900/60 bg-black/50 px-4 py-3 text-amber-50 outline-none transition-all focus:border-amber-600 focus:bg-black/70 focus:shadow-[0_0_15px_rgba(217,119,6,0.3)] placeholder:text-amber-900/50"
                    placeholder="Введите логин"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-400/90">
                  Пароль
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={4}
                    className="w-full rounded-xl border-2 border-amber-900/60 bg-black/50 px-4 py-3 text-amber-50 outline-none transition-all focus:border-amber-600 focus:bg-black/70 focus:shadow-[0_0_15px_rgba(217,119,6,0.3)] placeholder:text-amber-900/50"
                    placeholder="Введите пароль"
                  />
                </div>
              </div>

              {mode === "register" && (
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-amber-400/90">
                    Повторите пароль
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      value={password2}
                      onChange={(e) => setPassword2(e.target.value)}
                      required
                      minLength={4}
                      className="w-full rounded-xl border-2 border-amber-900/60 bg-black/50 px-4 py-3 text-amber-50 outline-none transition-all focus:border-amber-600 focus:bg-black/70 focus:shadow-[0_0_15px_rgba(217,119,6,0.3)] placeholder:text-amber-900/50"
                      placeholder="Повторите пароль"
                    />
                  </div>
                </div>
              )}

              {error && (
                <div className="animate-shake rounded-xl border-2 border-red-700/60 bg-gradient-to-br from-red-950/80 to-red-900/60 px-4 py-3 text-sm font-semibold text-red-200 shadow-lg shadow-red-900/30">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">⚠</span>
                    <span>{error}</span>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group relative w-full overflow-hidden rounded-xl border-2 border-amber-600/80 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 py-3.5 font-black text-white shadow-[0_8px_20px_rgba(217,119,6,0.4)] transition-all duration-200 hover:shadow-[0_12px_30px_rgba(217,119,6,0.6)] hover:brightness-110 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative text-base tracking-wide drop-shadow-lg">
                  {loading ? "Загрузка..." : mode === "login" ? "🗝 Войти в игру" : "⚔ Создать аккаунт"}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
