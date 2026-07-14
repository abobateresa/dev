import { NextRequest } from "next/server";
import { getGameServer } from "@/lib/game-server";

// This route is used to initialize Socket.IO
export async function GET(req: NextRequest) {
  // Socket.IO is initialized in the custom server
  // For development with `next dev`, we use a different approach
  return new Response("Socket.IO server running", { status: 200 });
}
