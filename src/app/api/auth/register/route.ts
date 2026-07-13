import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { createSession, hashPassword, setSessionCookie } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const username = String(body.username ?? "").trim();
    const password = String(body.password ?? "");

    if (username.length < 3 || username.length > 20 || !/^[a-zA-Zа-яА-Я0-9_]+$/.test(username)) {
      return Response.json(
        { error: "Логин должен быть 3-20 символов: буквы, цифры, подчёркивание." },
        { status: 400 },
      );
    }
    if (password.length < 4) {
      return Response.json({ error: "Пароль должен быть не короче 4 символов." }, { status: 400 });
    }

    const existing = await db.select().from(users).where(eq(users.username, username)).limit(1);
    if (existing.length > 0) {
      return Response.json({ error: "Такой логин уже занят." }, { status: 409 });
    }

    const passwordHash = await hashPassword(password);
    const inserted = await db.insert(users).values({ username, passwordHash }).returning();
    const user = inserted[0];

    const token = await createSession(user.id);
    await setSessionCookie(token);

    return Response.json({ ok: true, user: { id: user.id, username: user.username } });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Не удалось зарегистрироваться." }, { status: 500 });
  }
}
