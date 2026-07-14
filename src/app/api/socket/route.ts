import { Server as NetServer } from "http";
import { NextRequest } from "next/server";
import { Server as SocketIOServer } from "socket.io";

export const dynamic = "force-dynamic";

let io: SocketIOServer | undefined;

export async function GET(req: NextRequest) {
  // @ts-ignore
  const server = (req as any).socket?.server as NetServer;

  if (server && !io) {
    console.log("[Socket.IO] Initializing server...");

    io = new SocketIOServer(server, {
      path: "/api/socket",
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });

    io.on("connection", (socket) => {
      console.log(`[MP] Player connected: ${socket.id}`);

      socket.on("join_location", ({ locationId, playerData }) => {
        socket.join(locationId);
        socket.emit("initial_state", { players: [], mobs: [] });
      });

      socket.on("player_move", (data) => {
        socket.broadcast.emit("player_moved", data);
      });

      socket.on("attack_mob", (data) => {
        socket.broadcast.emit("mob_updated", data);
      });

      socket.on("disconnect", () => {
        console.log(`[MP] Player disconnected: ${socket.id}`);
      });
    });
  }

  return new Response("Socket.IO server is running", { status: 200 });
}