import { db } from "@/db";
import { characters } from "@/db/schema";
import { eq } from "drizzle-orm";
import { getCurrentUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return Response.json({ user: null, characters: [] });
  }
  const chars = await db.select().from(characters).where(eq(characters.userId, user.id));
  return Response.json({ user, characters: chars });
}
