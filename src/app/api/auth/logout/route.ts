import { db } from "@/db";
import { sessions } from "@/db/schema";
import { eq } from "drizzle-orm";
import { clearSessionCookie, getSessionToken } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST() {
  const token = await getSessionToken();
  if (token) {
    await db.delete(sessions).where(eq(sessions.token, token));
  }
  await clearSessionCookie();
  return Response.json({ ok: true });
}
