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
  type?: "tree" | "rock" | "grass" | "fence" | "statue" | "well" | "ruin" | "stall" | "barrel" | "cart" | "lamp";
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
  backgroundColor?: string;
  backgroundPattern?: string;
  buildings: (Rect & { id: string; label?: string })[];
  trees: DecorSprite[];
  roads?: Rect[];
  portals: PortalDef[];
  spawn: { x: number; y: number };
  monsterSpawns: SpawnPointDef[];
  description?: string;
}

function monster(id: string) {
  return MONSTER_TYPES.find((m) => m.id === id)!;
}

// ==================== ГЛОБАЛЬНАЯ КАРТА ====================
export const WORLD_MAP = {
  width: 2400,
  height: 1800,
  locations: [
    { id: "city", x: 1100, y: 920, name: "Ривендол" },
    { id: "forest", x: 620, y: 620, name: "Тёмный лес" },
    { id: "plains", x: 1580, y: 580, name: "Зелёные равнины" },
    { id: "hills", x: 1820, y: 1120, name: "Холмы Ветров" },
    { id: "swamp", x: 380, y: 1220, name: "Туманное болото" },
    { id: "mountains", x: 1480, y: 280, name: "Горный перевал" },
    { id: "ruins", x: 920, y: 380, name: "Руины храма" },
    { id: "desert", x: 380, y: 420, name: "Пески Забвения" },
    { id: "lake", x: 1720, y: 1480, name: "Озеро Зеркал" },
    { id: "dungeon", x: 720, y: 1480, name: "Подземелье Теней" },
    { id: "village", x: 1320, y: 1420, name: "Деревня Эльдара" },
  ],
  connections: [
    ["city", "forest"], ["city", "plains"], ["city", "hills"],
    ["forest", "desert"], ["forest", "ruins"],
    ["plains", "mountains"], ["plains", "hills"],
    ["hills", "lake"], ["hills", "village"],
    ["swamp", "dungeon"], ["swamp", "forest"],
    ["ruins", "mountains"], ["desert", "swamp"],
    ["lake", "village"], ["dungeon", "village"],
  ],
};

// ==================== ГОРОД РИВЕНДОЛ — ЖИВОЙ ИЗОМЕТРИЧЕСКИЙ ГОРОД ====================

// Основные здания
const cityBuildings = [
  // Крупные здания
  { id: "guild", x: 920, y: 380, w: 480, h: 320, label: "Гильдия воинов" },
  { id: "weapon", x: 1520, y: 340, w: 360, h: 280, label: "Оружейная" },
  { id: "armor", x: 1520, y: 680, w: 360, h: 280, label: "Бронная" },
  { id: "magic", x: 1520, y: 1020, w: 360, h: 280, label: "Магическая лавка" },
  { id: "bank", x: 480, y: 920, w: 400, h: 280, label: "Банк Ривендола" },
  { id: "tavern", x: 120, y: 1240, w: 420, h: 300, label: "Таверна «Золотой Дракон»" },
  { id: "temple", x: 580, y: 480, w: 320, h: 260, label: "Храм Света" },
  { id: "forge", x: 1080, y: 820, w: 280, h: 220, label: "Кузница" },
  
  // Рыночные ларьки (как на картинке)
  { id: "stall1", x: 680, y: 720, w: 140, h: 110, label: "Овощи" },
  { id: "stall2", x: 860, y: 740, w: 140, h: 110, label: "Фрукты" },
  { id: "stall3", x: 1040, y: 720, w: 140, h: 110, label: "Мясо" },
  { id: "stall4", x: 1220, y: 740, w: 140, h: 110, label: "Хлеб" },
  { id: "stall5", x: 1400, y: 720, w: 140, h: 110, label: "Рыба" },
  { id: "stall6", x: 1580, y: 740, w: 140, h: 110, label: "Специи" },
  
  { id: "stall7", x: 720, y: 920, w: 140, h: 110, label: "Ткани" },
  { id: "stall8", x: 900, y: 940, w: 140, h: 110, label: "Кожа" },
  { id: "stall9", x: 1080, y: 920, w: 140, h: 110, label: "Оружие" },
  { id: "stall10", x: 1260, y: 940, w: 140, h: 110, label: "Броня" },
  
  { id: "stall11", x: 680, y: 1120, w: 140, h: 110, label: "Зелья" },
  { id: "stall12", x: 860, y: 1140, w: 140, h: 110, label: "Книги" },
  { id: "stall13", x: 1040, y: 1120, w: 140, h: 110, label: "Ювелир" },
  { id: "stall14", x: 1220, y: 1140, w: 140, h: 110, label: "Артефакты" },
];

// Дороги
const cityRoads: Rect[] = [
  { x: 600, y: 680, w: 1100, h: 90 },
  { x: 820, y: 380, w: 90, h: 520 },
  { x: 420, y: 1080, w: 1360, h: 80 },
  { x: 1120, y: 920, w: 90, h: 380 },
];

// Деревья + декор
const cityTrees: DecorSprite[] = [
  // Деревья
  { id: "ct1", x: 180, y: 240, scale: 1.4, collide: true },
  { id: "ct2", x: 320, y: 160, scale: 1.2 },
  { id: "ct3", x: 620, y: 220, scale: 1.5, collide: true },
  { id: "ct4", x: 1680, y: 200, scale: 1.3 },
  { id: "ct5", x: 1820, y: 480, scale: 1.1 },
  { id: "ct6", x: 380, y: 640, scale: 1.2 },
  { id: "ct7", x: 680, y: 1180, scale: 1.4, collide: true },
  { id: "ct8", x: 1620, y: 1240, scale: 1.3 },
  { id: "ct9", x: 980, y: 1420, scale: 1.1 },

  // Рыночные ларьки (дополнительные)
  { id: "stall15", x: 1420, y: 1120, scale: 1.0, type: "stall" },
  { id: "stall16", x: 1600, y: 1140, scale: 1.0, type: "stall" },
  
  // Бочки и ящики
  { id: "barrel1", x: 540, y: 860, scale: 0.9, type: "barrel" },
  { id: "barrel2", x: 580, y: 880, scale: 0.85, type: "barrel" },
  { id: "barrel3", x: 920, y: 880, scale: 0.9, type: "barrel" },
  { id: "barrel4", x: 1380, y: 860, scale: 0.85, type: "barrel" },
  { id: "barrel5", x: 1420, y: 880, scale: 0.9, type: "barrel" },

  // Телеги
  { id: "cart1", x: 720, y: 980, scale: 1.1, type: "cart" },
  { id: "cart2", x: 1480, y: 980, scale: 1.0, type: "cart" },

  // Колодцы и фонари
  { id: "well1", x: 420, y: 780, scale: 1.0, type: "well", collide: true },
  { id: "lamp1", x: 780, y: 640, scale: 0.8, type: "lamp" },
  { id: "lamp2", x: 1120, y: 640, scale: 0.8, type: "lamp" },
  { id: "lamp3", x: 1480, y: 640, scale: 0.8, type: "lamp" },
];

// ==================== ДРУГИЕ ЛОКАЦИИ ====================

const forestTrees: DecorSprite[] = Array.from({ length: 48 }, (_, i) => ({
  id: `ft${i}`,
  x: 140 + (i % 8) * 230 + Math.sin(i) * 50,
  y: 160 + Math.floor(i / 8) * 170 + (i % 4) * 35,
  scale: 0.95 + (i % 5) * 0.12,
  collide: i % 3 !== 0,
}));

const forestRoads: Rect[] = [
  { x: 200, y: 720, w: 1500, h: 65 },
  { x: 820, y: 420, w: 75, h: 580 },
];

const plainsBuildings = [
  { id: "windmill", x: 580, y: 340, w: 200, h: 280, label: "Мельница" },
  { id: "farm1", x: 1220, y: 620, w: 320, h: 180, label: "Ферма" },
  { id: "farm2", x: 1640, y: 940, w: 280, h: 160, label: "Сарай" },
];

const plainsTrees: DecorSprite[] = [
  { id: "pt1", x: 240, y: 220, scale: 1.5, collide: true },
  { id: "pt2", x: 940, y: 160, scale: 1.2 },
  { id: "pt3", x: 1480, y: 320, scale: 1.4, collide: true },
  { id: "pt4", x: 480, y: 820, scale: 1.3 },
  { id: "pt5", x: 1180, y: 1120, scale: 1.1 },
  { id: "pt6", x: 1740, y: 720, scale: 1.2 },
];

const plainsRoads: Rect[] = [{ x: 380, y: 640, w: 1800, h: 60 }];

const hillsTrees: DecorSprite[] = Array.from({ length: 32 }, (_, i) => ({
  id: `ht${i}`,
  x: 200 + (i % 7) * 300,
  y: 240 + Math.floor(i / 7) * 240,
  scale: 0.9 + (i % 4) * 0.18,
  collide: true,
}));

const hillsRoads: Rect[] = [
  { x: 620, y: 520, w: 1200, h: 55 },
  { x: 1020, y: 860, w: 65, h: 620 },
];

const swampTrees: DecorSprite[] = [
  { id: "sw1", x: 260, y: 400, scale: 1.6, collide: true },
  { id: "sw2", x: 720, y: 540, scale: 1.4, collide: true },
  { id: "sw3", x: 1180, y: 360, scale: 1.7, collide: true },
  { id: "sw4", x: 1540, y: 720, scale: 1.3 },
  { id: "sw5", x: 420, y: 980, scale: 1.5, collide: true },
  { id: "sw6", x: 1020, y: 1140, scale: 1.2 },
];

const swampRoads: Rect[] = [{ x: 340, y: 760, w: 1380, h: 52 }];

const mountainsBuildings = [
  { id: "watchtower", x: 860, y: 360, w: 180, h: 260, label: "Сторожевая башня" },
];

const mountainsTrees: DecorSprite[] = [
  { id: "mt1", x: 300, y: 200, scale: 1.1, collide: true },
  { id: "mt2", x: 660, y: 440, scale: 1.0 },
  { id: "mt3", x: 1180, y: 300, scale: 1.2, collide: true },
  { id: "mt4", x: 1540, y: 540, scale: 1.3 },
];

const ruinsBuildings = [
  { id: "temple1", x: 720, y: 440, w: 420, h: 360, label: "Разрушенный храм" },
  { id: "altar", x: 1180, y: 720, w: 180, h: 160, label: "Древний алтарь" },
];

const ruinsTrees: DecorSprite[] = [
  { id: "ru1", x: 260, y: 300, scale: 1.5, collide: true },
  { id: "ru2", x: 960, y: 260, scale: 1.3 },
  { id: "ru3", x: 1540, y: 400, scale: 1.4, collide: true },
  { id: "ru4", x: 560, y: 880, scale: 1.2 },
];

const desertTrees: DecorSprite[] = [
  { id: "ds1", x: 340, y: 400, scale: 1.3, collide: true },
  { id: "ds2", x: 820, y: 540, scale: 1.0 },
  { id: "ds3", x: 1300, y: 360, scale: 1.2, collide: true },
  { id: "ds4", x: 1680, y: 720, scale: 1.1 },
];

const desertRoads: Rect[] = [{ x: 300, y: 660, w: 1600, h: 55 }];

const lakeTrees: DecorSprite[] = [
  { id: "lk1", x: 440, y: 300, scale: 1.6, collide: true },
  { id: "lk2", x: 1020, y: 200, scale: 1.4 },
  { id: "lk3", x: 1480, y: 440, scale: 1.5, collide: true },
  { id: "lk4", x: 720, y: 820, scale: 1.3 },
  { id: "lk5", x: 1240, y: 980, scale: 1.2 },
];

const lakeRoads: Rect[] = [{ x: 560, y: 620, w: 1060, h: 52 }];

const dungeonBuildings = [
  { id: "dgate", x: 720, y: 440, w: 460, h: 320, label: "Вход в подземелье" },
];

const dungeonTrees: DecorSprite[] = [
  { id: "dg1", x: 260, y: 340, scale: 1.4, collide: true },
  { id: "dg2", x: 1180, y: 300, scale: 1.2 },
  { id: "dg3", x: 1540, y: 620, scale: 1.5, collide: true },
];

const villageBuildings = [
  { id: "house1", x: 500, y: 540, w: 280, h: 200, label: "Дом старосты" },
  { id: "house2", x: 860, y: 720, w: 240, h: 180, label: "Кузница" },
  { id: "house3", x: 1180, y: 500, w: 260, h: 190, label: "Таверна" },
];

const villageTrees: DecorSprite[] = [
  { id: "vl1", x: 300, y: 360, scale: 1.4, collide: true },
  { id: "vl2", x: 720, y: 300, scale: 1.2 },
  { id: "vl3", x: 1340, y: 660, scale: 1.3, collide: true },
  { id: "vl4", x: 980, y: 980, scale: 1.1 },
];

const villageRoads: Rect[] = [{ x: 400, y: 660, w: 1200, h: 55 }];

// ==================== ЭКСПОРТ ====================

export const LOCATIONS: Record<string, LocationDef> = {
  city: {
    id: "city",
    name: "Город Ривендол",
    width: 2400,
    height: 1900,
    backgroundColor: "#2c241b",
    backgroundPattern: "repeating-linear-gradient(45deg, #3a2f1f22 0px, #3a2f1f22 3px, transparent 3px, transparent 28px)",
    buildings: cityBuildings,
    trees: cityTrees,
    roads: cityRoads,
    portals: [
      { x: 1180, y: 1520, toLocation: "forest", toX: 300, toY: 140, label: "→ Тёмный лес" },
      { x: 1780, y: 680, toLocation: "plains", toX: 200, toY: 720, label: "→ Равнины" },
      { x: 420, y: 1080, toLocation: "swamp", toX: 1580, toY: 480, label: "→ Болото" },
      { x: 1920, y: 1380, toLocation: "hills", toX: 380, toY: 720, label: "→ Холмы" },
    ],
    spawn: { x: 1180, y: 1460 },
    monsterSpawns: [],
    description: "Столица королевства. Здесь кипит жизнь.",
  },

  forest: {
    id: "forest",
    name: "Тёмный лес",
    width: 2300,
    height: 2000,
    backgroundColor: "#0f1a12",
    backgroundPattern: "repeating-radial-gradient(circle at 30% 40%, #1a2a1f 0px, transparent 2px)",
    buildings: [],
    trees: forestTrees,
    roads: forestRoads,
    portals: [
      { x: 240, y: 160, toLocation: "city", toX: 1140, toY: 1400, label: "→ Ривендол" },
      { x: 1780, y: 460, toLocation: "ruins", toX: 480, toY: 880, label: "→ Руины" },
      { x: 460, y: 1640, toLocation: "swamp", toX: 1060, toY: 320, label: "→ Болото" },
      { x: 1820, y: 1680, toLocation: "dungeon", toX: 420, toY: 740, label: "→ Подземелье" },
    ],
    spawn: { x: 300, y: 180 },
    monsterSpawns: [
      { id: "fm1", x: 560, y: 520, monster: monster("wolf") },
      { id: "fm2", x: 980, y: 420, monster: monster("wolf") },
      { id: "fm3", x: 1480, y: 560, monster: monster("spirit") },
      { id: "fm4", x: 740, y: 980, monster: monster("bandit") },
      { id: "fm5", x: 1200, y: 1080, monster: monster("bandit") },
      { id: "fm6", x: 1720, y: 940, monster: monster("ogre") },
      { id: "fm7", x: 520, y: 1480, monster: monster("spirit") },
      { id: "fm8", x: 1380, y: 1580, monster: monster("wolf") },
    ],
    description: "Мрачный лес, полный опасностей.",
  },

  plains: {
    id: "plains",
    name: "Зелёные равнины",
    width: 2600,
    height: 1800,
    backgroundColor: "#2a3a22",
    buildings: plainsBuildings,
    trees: plainsTrees,
    roads: plainsRoads,
    portals: [
      { x: 200, y: 720, toLocation: "city", toX: 1720, toY: 720, label: "→ Ривендол" },
      { x: 2220, y: 520, toLocation: "mountains", toX: 480, toY: 720, label: "→ Горы" },
      { x: 1780, y: 1380, toLocation: "hills", toX: 720, toY: 480, label: "→ Холмы" },
      { x: 480, y: 480, toLocation: "ruins", toX: 1580, toY: 980, label: "→ Руины" },
    ],
    spawn: { x: 240, y: 720 },
    monsterSpawns: [
      { id: "pm1", x: 720, y: 460, monster: monster("wolf") },
      { id: "pm2", x: 1340, y: 620, monster: monster("spirit") },
      { id: "pm3", x: 1920, y: 840, monster: monster("bandit") },
      { id: "pm4", x: 1040, y: 1180, monster: monster("ogre") },
    ],
    description: "Открытые равнины.",
  },

  hills: {
    id: "hills",
    name: "Холмы Ветров",
    width: 2400,
    height: 2100,
    backgroundColor: "#2c3a2f",
    buildings: [],
    trees: hillsTrees,
    roads: hillsRoads,
    portals: [
      { x: 380, y: 720, toLocation: "city", toX: 1880, toY: 1320, label: "→ Ривендол" },
      { x: 1780, y: 480, toLocation: "plains", toX: 2120, y: 940, label: "→ Равнины" },
      { x: 1920, y: 1580, toLocation: "lake", toX: 720, toY: 560, label: "→ Озеро" },
      { x: 720, y: 1820, toLocation: "village", toX: 1180, toY: 420, label: "→ Деревня" },
    ],
    spawn: { x: 420, y: 760 },
    monsterSpawns: [
      { id: "hm1", x: 660, y: 420, monster: monster("spirit") },
      { id: "hm2", x: 1180, y: 720, monster: monster("wolf") },
      { id: "hm3", x: 1540, y: 980, monster: monster("bandit") },
      { id: "hm4", x: 880, y: 1380, monster: monster("ogre") },
    ],
    description: "Ветреные холмы.",
  },

  swamp: {
    id: "swamp",
    name: "Туманное болото",
    width: 2200,
    height: 1900,
    backgroundColor: "#1a2a22",
    buildings: [],
    trees: swampTrees,
    roads: swampRoads,
    portals: [
      { x: 1580, y: 480, toLocation: "city", toX: 520, toY: 1120, label: "→ Ривендол" },
      { x: 360, y: 320, toLocation: "forest", toX: 480, toY: 1520, label: "→ Лес" },
      { x: 1780, y: 1380, toLocation: "dungeon", toX: 720, toY: 720, label: "→ Подземелье" },
      { x: 480, y: 1520, toLocation: "desert", toX: 1580, toY: 720, label: "→ Пески" },
    ],
    spawn: { x: 1580, y: 520 },
    monsterSpawns: [
      { id: "sm1", x: 560, y: 660, monster: monster("spirit") },
      { id: "sm2", x: 1040, y: 520, monster: monster("wolf") },
      { id: "sm3", x: 1480, y: 980, monster: monster("bandit") },
      { id: "sm4", x: 780, y: 1380, monster: monster("ogre") },
    ],
    description: "Ядовитое болото.",
  },

  mountains: {
    id: "mountains",
    name: "Горный перевал",
    width: 2200,
    height: 1800,
    backgroundColor: "#2a2f3a",
    buildings: mountainsBuildings,
    trees: mountainsTrees,
    roads: [],
    portals: [
      { x: 480, y: 720, toLocation: "plains", toX: 2120, toY: 560, label: "→ Равнины" },
      { x: 1780, y: 420, toLocation: "ruins", toX: 720, toY: 680, label: "→ Руины" },
    ],
    spawn: { x: 540, y: 760 },
    monsterSpawns: [
      { id: "mm1", x: 720, y: 460, monster: monster("ogre") },
      { id: "mm2", x: 1180, y: 720, monster: monster("spirit") },
      { id: "mm3", x: 1540, y: 980, monster: monster("wolf") },
    ],
    description: "Суровые горы.",
  },

  ruins: {
    id: "ruins",
    name: "Руины древнего храма",
    width: 2100,
    height: 1900,
    backgroundColor: "#2a2520",
    buildings: ruinsBuildings,
    trees: ruinsTrees,
    roads: [],
    portals: [
      { x: 480, y: 880, toLocation: "forest", toX: 1720, toY: 520, label: "→ Лес" },
      { x: 1580, y: 980, toLocation: "plains", toX: 520, toY: 480, label: "→ Равнины" },
      { x: 720, y: 680, toLocation: "mountains", toX: 1720, toY: 480, label: "→ Горы" },
    ],
    spawn: { x: 520, y: 940 },
    monsterSpawns: [
      { id: "rm1", x: 720, y: 560, monster: monster("spirit") },
      { id: "rm2", x: 1180, y: 720, monster: monster("bandit") },
      { id: "rm3", x: 1540, y: 1080, monster: monster("ogre") },
    ],
    description: "Забытый храм.",
  },

  desert: {
    id: "desert",
    name: "Пески Забвения",
    width: 2300,
    height: 1800,
    backgroundColor: "#c9a36b",
    buildings: [],
    trees: desertTrees,
    roads: desertRoads,
    portals: [
      { x: 1580, y: 720, toLocation: "swamp", toX: 480, toY: 1480, label: "→ Болото" },
      { x: 480, y: 480, toLocation: "forest", toX: 1780, toY: 520, label: "→ Лес" },
    ],
    spawn: { x: 1620, y: 760 },
    monsterSpawns: [
      { id: "dm1", x: 720, y: 560, monster: monster("bandit") },
      { id: "dm2", x: 1180, y: 720, monster: monster("spirit") },
      { id: "dm3", x: 1680, y: 980, monster: monster("ogre") },
    ],
    description: "Жаркие пески.",
  },

  lake: {
    id: "lake",
    name: "Озеро Зеркал",
    width: 2200,
    height: 1900,
    backgroundColor: "#1e3a4a",
    buildings: [],
    trees: lakeTrees,
    roads: lakeRoads,
    portals: [
      { x: 720, y: 560, toLocation: "hills", toX: 1820, toY: 1520, label: "→ Холмы" },
      { x: 1580, y: 1380, toLocation: "village", toX: 720, toY: 480, label: "→ Деревня" },
    ],
    spawn: { x: 780, y: 620 },
    monsterSpawns: [
      { id: "lm1", x: 660, y: 520, monster: monster("spirit") },
      { id: "lm2", x: 1180, y: 780, monster: monster("wolf") },
      { id: "lm3", x: 1540, y: 1040, monster: monster("bandit") },
    ],
    description: "Красивое озеро.",
  },

  dungeon: {
    id: "dungeon",
    name: "Подземелье Теней",
    width: 2000,
    height: 1800,
    backgroundColor: "#1a181f",
    buildings: dungeonBuildings,
    trees: dungeonTrees,
    roads: [],
    portals: [
      { x: 720, y: 720, toLocation: "swamp", toX: 1720, toY: 1340, label: "→ Болото" },
      { x: 480, y: 1380, toLocation: "forest", toX: 1780, toY: 1580, label: "→ Лес" },
      { x: 1580, y: 480, toLocation: "village", toX: 1180, toY: 1380, label: "→ Деревня" },
    ],
    spawn: { x: 780, y: 780 },
    monsterSpawns: [
      { id: "dd1", x: 720, y: 520, monster: monster("ogre") },
      { id: "dd2", x: 1180, y: 720, monster: monster("spirit") },
      { id: "dd3", x: 1540, y: 980, monster: monster("bandit") },
    ],
    description: "Мрачное подземелье.",
  },

  village: {
    id: "village",
    name: "Деревня Эльдара",
    width: 2100,
    height: 1800,
    backgroundColor: "#2a241f",
    buildings: villageBuildings,
    trees: villageTrees,
    roads: villageRoads,
    portals: [
      { x: 1180, y: 440, toLocation: "hills", toX: 720, toY: 1720, label: "→ Холмы" },
      { x: 720, y: 480, toLocation: "lake", toX: 1480, toY: 1380, label: "→ Озеро" },
      { x: 1580, y: 1380, toLocation: "dungeon", toX: 480, toY: 720, label: "→ Подземелье" },
    ],
    spawn: { x: 1180, y: 480 },
    monsterSpawns: [
      { id: "vm1", x: 660, y: 620, monster: monster("wolf") },
      { id: "vm2", x: 1180, y: 820, monster: monster("spirit") },
      { id: "vm3", x: 1540, y: 1080, monster: monster("bandit") },
    ],
    description: "Мирная деревня.",
  },
};

export function rectsIntersect(a: Rect, b: Rect): boolean {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}
