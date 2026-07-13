import { db } from "@/db";
import { characters } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { getCurrentUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

async function loadOwned(id: number, userId: number) {
  const rows = await db
    .select()
    .from(characters)
    .where(and(eq(characters.id, id), eq(characters.userId, userId)))
    .limit(1);
  return rows[0] ?? null;
}

export async function GET(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser();
  if (!user) return Response.json({ error: "Не авторизован." }, { status: 401 });
  const { id } = await ctx.params;
  const character = await loadOwned(Number(id), user.id);
  if (!character) return Response.json({ error: "Персонаж не найден." }, { status: 404 });
  return Response.json({ character });
}

const ALLOWED_FIELDS = [
  "level",
  "exp",
  "gold",
  "hp",
  "mp",
  "location",
  "posX",
  "posY",
  "talents",
  "equipment",
  "inventory",
  "settings",
] as const;

export async function PATCH(req: Request, ctx: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser();
  if (!user) return Response.json({ error: "Не авторизован." }, { status: 401 });
  const { id } = await ctx.params;
  const character = await loadOwned(Number(id), user.id);
  if (!character) return Response.json({ error: "Персонаж не найден." }, { status: 404 });

  try {
    const body = await req.json();
    const update: Record<string, unknown> = {};
    for (const key of ALLOWED_FIELDS) {
      if (key in body) update[key] = body[key];
    }
    update.updatedAt = new Date();

    const updated = await db
      .update(characters)
      .set(update)
      .where(eq(characters.id, character.id))
      .returning();

    return Response.json({ character: updated[0] });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Не удалось сохранить." }, { status: 500 });
  }
}

export async function DELETE(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser();
  if (!user) return Response.json({ error: "Не авторизован." }, { status: 401 });
  const { id } = await ctx.params;
  const character = await loadOwned(Number(id), user.id);
  if (!character) return Response.json({ error: "Персонаж не найден." }, { status: 404 });
  await db.delete(characters).where(eq(characters.id, character.id));
  return Response.json({ ok: true });
}
