import type { MonsterDef } from "@/lib/game-data";
import { MONSTER_TYPES } from "@/lib/game-data";

export interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface DecorSprite {
  id: string;
  x: number;
  y: number;
  scale: number;
  collide?: boolean;
}

export interface PortalDef {
  x: number;
  y: number;
  toLocation: string;
  toX: number;
  toY: number;
  label: string;
}

export interface SpawnPointDef {
  id: string;
  x: number;
  y: number;
  monster: MonsterDef;
}

export interface LocationDef {
  id: string;
  name: string;
  width: number;
  height: number;
  background: string;
  buildings: (Rect & { id: string; label?: string })[];
  trees: DecorSprite[];
  portals: PortalDef[];
  spawn: { x: number; y: number };
  monsterSpawns: SpawnPointDef[];
}

const cityBuildings: (Rect & { id: string; label?: string })[] = [
  { id: "guild", x: 640, y: 90, w: 340, h: 230, label: "Гильдия воинов" },
  { id: "weapon-shop", x: 1180, y: 190, w: 280, h: 210, label: "Магазин оружия" },
  { id: "armor-shop", x: 1180, y: 450, w: 280, h: 210, label: "Магазин брони" },
  { id: "magic-shop", x: 1180, y: 710, w: 280, h: 210, label: "Магазин магии" },
  { id: "bank", x: 260, y: 660, w: 300, h: 190, label: "Банк" },
  { id: "tavern", x: 60, y: 900, w: 300, h: 190, label: "Таверна" },
];

const cityTrees: DecorSprite[] = [
  { id: "t1", x: 90, y: 110, scale: 1.1 },
  { id: "t2", x: 210, y: 180, scale: 0.9 },
  { id: "t3", x: 150, y: 320, scale: 1.2 },
  { id: "t4", x: 330, y: 90, scale: 1 },
  { id: "t5", x: 1520, y: 120, scale: 1.1 },
  { id: "t6", x: 1620, y: 320, scale: 0.9 },
  { id: "t7", x: 1550, y: 950, scale: 1 },
  { id: "t8", x: 1650, y: 1050, scale: 1.2 },
];

const forestTrees: DecorSprite[] = [
  { id: "f1", x: 150, y: 200, scale: 1.2, collide: true },
  { id: "f2", x: 320, y: 140, scale: 1, collide: true },
  { id: "f3", x: 520, y: 260, scale: 1.3, collide: true },
  { id: "f4", x: 750, y: 160, scale: 1, collide: true },
  { id: "f5", x: 980, y: 240, scale: 1.2, collide: true },
  { id: "f6", x: 1220, y: 180, scale: 1, collide: true },
  { id: "f7", x: 1400, y: 340, scale: 1.1, collide: true },
  { id: "f8", x: 200, y: 500, scale: 1 },
  { id: "f9", x: 460, y: 620, scale: 1.2 },
  { id: "f10", x: 720, y: 540, scale: 1 },
  { id: "f11", x: 980, y: 620, scale: 1.1 },
  { id: "f12", x: 1250, y: 560, scale: 1 },
  { id: "f13", x: 1450, y: 700, scale: 1.2, collide: true },
  { id: "f14", x: 300, y: 850, scale: 1 },
  { id: "f15", x: 650, y: 900, scale: 1.1 },
  { id: "f16", x: 1000, y: 950, scale: 1 },
  { id: "f17", x: 1300, y: 1000, scale: 1.2, collide: true },
  { id: "f18", x: 80, y: 1050, scale: 1 },
];

function monster(id: string) {
  return MONSTER_TYPES.find((m) => m.id === id)!;
}

const forestMonsterSpawns: SpawnPointDef[] = [
  { id: "m1", x: 420, y: 420, monster: monster("wolf") },
  { id: "m2", x: 700, y: 400, monster: monster("wolf") },
  { id: "m3", x: 950, y: 460, monster: monster("spirit") },
  { id: "m4", x: 550, y: 700, monster: monster("spirit") },
  { id: "m5", x: 1100, y: 750, monster: monster("bandit") },
  { id: "m6", x: 800, y: 850, monster: monster("bandit") },
  { id: "m7", x: 1300, y: 850, monster: monster("ogre") },
];

export const LOCATIONS: Record<string, LocationDef> = {
  city: {
    id: "city",
    name: "Город Ривендол",
    width: 1900,
    height: 1300,
    background: "/images/ground-city.jpg",
    buildings: cityBuildings,
    trees: cityTrees,
    portals: [
      { x: 950, y: 1000, toLocation: "forest", toX: 140, toY: 1080, label: "Портал в Тёмный лес" },
    ],
    spawn: { x: 900, y: 1080 },
    monsterSpawns: [],
  },
  forest: {
    id: "forest",
    name: "Тёмный лес",
    width: 1600,
    height: 1300,
    background: "/images/ground-forest.jpg",
    buildings: [],
    trees: forestTrees,
    portals: [
      { x: 100, y: 1100, toLocation: "city", toX: 880, toY: 1120, label: "Портал в город" },
    ],
    spawn: { x: 140, y: 1080 },
    monsterSpawns: forestMonsterSpawns,
  },
};

export function rectsIntersect(a: Rect, b: Rect): boolean {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}
