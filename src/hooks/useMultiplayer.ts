"use client";

import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

export function useMultiplayer(locationId: string, playerData: any) {
  const [players, setPlayers] = useState<any[]>([]);
  const [mobs, setMobs] = useState<any[]>([]);
  const [connected, setConnected] = useState(false);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const socket = io({
      path: "/api/socket",                    // ← ПРАВИЛЬНЫЙ ПУТЬ
      transports: ["polling", "websocket"],
      reconnection: true,
      reconnectionAttempts: 10,
      timeout: 20000,
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("[MP] ✅ Connected");
      setConnected(true);
      socket.emit("join_location", { locationId, playerData });
    });

    socket.on("connect_error", (err) => {
      console.error("[MP] Connect error:", err.message);
    });

    socket.on("disconnect", (reason) => {
      console.log("[MP] Disconnected:", reason);
      setConnected(false);
    });

    socket.on("initial_state", (data) => {
      setPlayers(data.players || []);
      setMobs(data.mobs || []);
    });

    socket.on("player_joined", (player) => {
      setPlayers((prev) => [...prev.filter(p => p.id !== player.id), player]);
    });

    socket.on("player_left", (id) => {
      setPlayers((prev) => prev.filter(p => p.id !== id));
    });

    socket.on("player_moved", (data) => {
      setPlayers((prev) =>
        prev.map((p) => (p.id === data.id ? { ...p, x: data.x, y: data.y } : p))
      );
    });

    socket.on("full_state_update", (data) => {
      setPlayers(data.players || []);
      setMobs(data.mobs || []);
    });

    return () => socket.disconnect();
  }, [locationId]);

  const sendMove = (x: number, y: number) => {
    socketRef.current?.emit("player_move", { x, y });
  };

  const attackMob = (mobId: string) => {
    socketRef.current?.emit("attack_mob", { mobId });
  };

  return { players, mobs, connected, sendMove, attackMob };
}