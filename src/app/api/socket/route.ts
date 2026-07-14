import { NextResponse } from "next/server";
import { getGameServer } from "@/lib/game-server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  try {
    const gameServer = getGameServer();

    if (!gameServer) {
      console.error("[Socket.IO] Failed to initialize game server");
      return NextResponse.json({ error: "Failed to initialize server" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Socket.IO] Error in GET handler:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}