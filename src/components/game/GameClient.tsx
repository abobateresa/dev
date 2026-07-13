"use client";

import { useEffect, useState } from "react";
import type { AuthUser, CharacterRow } from "@/components/game/types";
import { AuthScreen } from "@/components/game/AuthScreen";
import { CharacterSelectScreen } from "@/components/game/CharacterSelectScreen";
import { CharacterCreateScreen } from "@/components/game/CharacterCreateScreen";
import { GameScreen } from "@/components/game/GameScreen";

type Screen = "loading" | "auth" | "select" | "create" | "game";

export function GameClient() {
  const [screen, setScreen] = useState<Screen>("loading");
  const [user, setUser] = useState<AuthUser | null>(null);
  const [characters, setCharacters] = useState<CharacterRow[]>([]);
  const [active, setActive] = useState<CharacterRow | null>(null);

  useEffect(() => {
    fetch("/api/auth/me", { credentials: "include" })
      .then((r) => r.json())
      .then((data) => {
        if (data.user) {
          setUser(data.user);
          setCharacters(data.characters ?? []);
          setScreen("select");
        } else {
          setScreen("auth");
        }
      })
      .catch(() => setScreen("auth"));
  }, []);

  function handleAuthed(u: AuthUser) {
    setUser(u);
    fetch("/api/characters", { credentials: "include" })
      .then((r) => r.json())
      .then((data) => {
        setCharacters(data.characters ?? []);
        setScreen("select");
      });
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
    setUser(null);
    setCharacters([]);
    setActive(null);
    setScreen("auth");
  }

  if (screen === "loading") {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#140d09] text-amber-300">
        <div className="text-lg font-semibold">Загрузка мира...</div>
      </div>
    );
  }

  if (screen === "auth") {
    return <AuthScreen onAuthed={handleAuthed} />;
  }

  if (screen === "select" && user) {
    return (
      <CharacterSelectScreen
        username={user.username}
        characters={characters}
        onPlay={(c) => {
          setActive(c);
          setScreen("game");
        }}
        onCreateNew={() => setScreen("create")}
        onDeleted={(id) => setCharacters((cs) => cs.filter((c) => c.id !== id))}
        onLogout={handleLogout}
      />
    );
  }

  if (screen === "create") {
    return (
      <CharacterCreateScreen
        canCancel={characters.length > 0}
        onCancel={() => setScreen("select")}
        onCreated={(c) => {
          setCharacters((cs) => [...cs, c]);
          setActive(c);
          setScreen("game");
        }}
      />
    );
  }

  if (screen === "game" && active) {
    return (
      <GameScreen
        character={active}
        onExitToSelect={() => {
          setScreen("select");
          fetch("/api/characters", { credentials: "include" })
            .then((r) => r.json())
            .then((data) => setCharacters(data.characters ?? []));
        }}
        onLogout={handleLogout}
      />
    );
  }

  return null;
}
