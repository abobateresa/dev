import { db } from "@/db";
import { characters } from "@/db/schema";
import { eq } from "drizzle-orm";
import { getCurrentUser } from "@/lib/auth";
import { CLASSES, FACTIONS, RACES, type Faction } from "@/lib/game-data";

export const dynamic = "force-dynamic";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return Response.json({ error: "Не авторизован." }, { status: 401 });
  const chars = await db.select().from(characters).where(eq(characters.userId, user.id));
  return Response.json({ characters: chars });
}

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return Response.json({ error: "Не авторизован." }, { status: 401 });

  try {
    const body = await req.json();
    const name = String(body.name ?? "").trim();
    const faction = String(body.faction ?? "") as Faction;
    const race = String(body.race ?? "");
    const className = String(body.className ?? "");

    if (name.length < 2 || name.length > 16 || !/^[a-zA-Zа-яА-Я0-9_ ]+$/.test(name)) {
      return Response.json({ error: "Имя должно быть 2-16 символов." }, { status: 400 });
    }
    if (!FACTIONS.some((f) => f.id === faction)) {
      return Response.json({ error: "Некорректная фракция." }, { status: 400 });
    }
    if (!RACES[faction].some((r) => r.id === race)) {
      return Response.json({ error: "Некорректная раса." }, { status: 400 });
    }
    if (!CLASSES.some((c) => c.id === className)) {
      return Response.json({ error: "Некорректный класс." }, { status: 400 });
    }

    const existing = await db.select().from(characters).where(eq(characters.name, name)).limit(1);
    if (existing.length > 0) {
      return Response.json({ error: "Такое имя персонажа уже занято." }, { status: 409 });
    }

    const countRows = await db.select().from(characters).where(eq(characters.userId, user.id));
    if (countRows.length >= 5) {
      return Response.json({ error: "Достигнут лимит персонажей (5)." }, { status: 400 });
    }

    const inserted = await db
      .insert(characters)
      .values({
        userId: user.id,
        name,
        faction,
        race,
        className,
        level: 1,
        exp: 0,
        gold: 50,
        hp: 100,
        mp: 50,
        location: "city",
        posX: 900,
        posY: 950,
        talents: {},
        equipment: { weapon: 0, armor: 0, amulet: 0 },
        inventory: { potionsHp: 3, potionsMp: 3 },
        settings: {},
      })
      .returning();

    return Response.json({ character: inserted[0] });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Не удалось создать персонажа." }, { status: 500 });
  }
}
