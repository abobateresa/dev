"use client";

import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

export function useMultiplayer(locationId: string | null | undefined, playerData: any) {
  const [players, setPlayers] = useState<any[]>([]);
  const [mobs, setMobs] = useState<any[]>([]);
  const [connected, setConnected] = useState(false);
  const [playerId, setPlayerId] = useState<string | null>(null);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    if (!locationId) {
      console.warn("[MP] No location ID provided, skipping socket connection");
      setConnected(false);
      setPlayerId(null);
      return () => {};
    }

    const socketUrl = typeof window !== "undefined"
      ? (process.env.NEXT_PUBLIC_SOCKET_URL || (window.location.hostname === "localhost" ? "http://localhost:3101" : ""))
      : "";
    const normalizedSocketUrl = socketUrl || undefined;

    const socket = io(normalizedSocketUrl, {
      path: "/api/socket",
      transports: ["polling", "websocket"],
      reconnection: true,
      reconnectionAttempts: 10,
      timeout: 20000,
    });

    socketRef.current = socket;

    const onConnect = () => {
      console.log("[MP] ✅ Connected");
      setConnected(true);
      setPlayerId(socket.id ?? null);
      socket.emit("join_location", { locationId, playerData });
    };

    socket.on("connect", onConnect);

    socket.on("connect_error", (err) => {
      console.error("[MP] Connect error:", err.message);
    });

    socket.on("disconnect", (reason) => {
      console.log("[MP] Disconnected:", reason);
      setConnected(false);
      setPlayerId(null);
    });

    socket.on("initial_state", (data) => {
      setPlayers(data.players || []);
      setMobs(data.mobs || []);
    });

    socket.on("player_joined", (player) => {
      setPlayers((prev) => [...prev.filter((p) => p.id !== player.id), player]);
    });

    socket.on("player_left", (id) => {
      setPlayers((prev) => prev.filter((p) => p.id !== id));
    });

    socket.on("player_moved", (data) => {
      setPlayers((prev) =>
        prev.map((p) => (p.id === data.id ? { ...p, ...data } : p))
      );
    });

    socket.on("full_state_update", (data) => {
      setPlayers(data.players || []);
      setMobs(data.mobs || []);
    });

    return () => {
      socket.off("connect", onConnect);
      socket.disconnect();
    };
  }, [locationId]);

  useEffect(() => {
    if (!connected || !socketRef.current) return;
    socketRef.current.emit("player_state_update", playerData);
  }, [connected, playerData]);

  const sendMove = (x: number, y: number) => {
    socketRef.current?.emit("player_move", { x, y });
  };

  const attackMob = (mobId: string) => {
    socketRef.current?.emit("attack_mob", { mobId });
  };

  return { players, mobs, connected, playerId, sendMove, attackMob };
}