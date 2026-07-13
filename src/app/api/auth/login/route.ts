import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { createSession, setSessionCookie, verifyPassword } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const username = String(body.username ?? "").trim();
    const password = String(body.password ?? "");

    const rows = await db.select().from(users).where(eq(users.username, username)).limit(1);
    const user = rows[0];
    if (!user) {
      return Response.json({ error: "Неверный логин или пароль." }, { status: 401 });
    }
    const valid = await verifyPassword(password, user.passwordHash);
    if (!valid) {
      return Response.json({ error: "Неверный логин или пароль." }, { status: 401 });
    }

    const token = await createSession(user.id);
    await setSessionCookie(token);

    return Response.json({ ok: true, user: { id: user.id, username: user.username } });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Не удалось выполнить вход." }, { status: 500 });
  }
}
