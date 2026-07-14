"use client";

import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

interface PlayerState {
  id: string;
  name: string;
  className: string;
  level: number;
  x: number;
  y: number;
  hp: number;
  maxHp: number;
  facing: number;
}

interface MobState {
  spawnId: string;
  name: string;
  level: number;
  x: number;
  y: number;
  hp: number;
  maxHp: number;
  alive: boolean;
  aggroed: boolean;
}

export function useMultiplayer(locationId: string, playerData: Omit<PlayerState, "id">) {
  const [players, setPlayers] = useState<PlayerState[]>([]);
  const [mobs, setMobs] = useState<MobState[]>([]);
  const [connected, setConnected] = useState(false);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    // Connect to Socket.IO
    const socket = io({
      path: "/api/socket",
      transports: ["websocket"],
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("[MP] Connected to server");
      setConnected(true);

      // Join location
      socket.emit("join_location", {
        locationId,
        playerData,
      });
    });

    socket.on("initial_state", (data: { players: PlayerState[]; mobs: MobState[] }) => {
      setPlayers(data.players);
      setMobs(data.mobs);
    });

    socket.on("player_joined", (player: PlayerState) => {
      setPlayers((prev) => [...prev.filter((p) => p.id !== player.id), player]);
    });

    socket.on("player_left", (playerId: string) => {
      setPlayers((prev) => prev.filter((p) => p.id !== playerId));
    });

    socket.on("player_moved", (data: { id: string; x: number; y: number }) => {
      setPlayers((prev) =>
        prev.map((p) =>
          p.id === data.id ? { ...p, x: data.x, y: data.y } : p
        )
      );
    });

    socket.on("mob_updated", (data: Partial<MobState> & { spawnId: string }) => {
      setMobs((prev) =>
        prev.map((m) =>
          m.spawnId === data.spawnId
            ? { ...m, ...data }
            : m
        )
      );
    });

    socket.on("mob_moved", (data: { spawnId: string; x: number; y: number }) => {
      setMobs((prev) =>
        prev.map((m) =>
          m.spawnId === data.spawnId ? { ...m, x: data.x, y: data.y } : m
        )
      );
    });

    socket.on("full_state_update", (data: { players: PlayerState[]; mobs: MobState[] }) => {
      setPlayers(data.players);
      setMobs(data.mobs);
    });

    socket.on("damage_number", (data: { x: number; y: number; damage: number; isPlayer: boolean }) => {
      // Can be used to show floating damage numbers
      console.log("[MP] Damage:", data);
    });

    return () => {
      socket.disconnect();
      setConnected(false);
    };
  }, [locationId]);

  // Send movement
  const sendMove = (x: number, y: number) => {
    if (socketRef.current?.connected) {
      socketRef.current.emit("player_move", { x, y });
    }
  };

  // Attack mob
  const attackMob = (mobId: string) => {
    if (socketRef.current?.connected) {
      socketRef.current.emit("attack_mob", { mobId });
    }
  };

  return {
    players,
    mobs,
    connected,
    sendMove,
    attackMob,
  };
}
