// Shared game constants: used both on server (character init) and client (UI/logic).
// No server-only imports here so it can run in the browser bundle too.

export type Faction = "light" | "dark";
export type ClassId =
  | "rogue"
  | "warrior"
  | "mage"
  | "priest"
  | "archer"
  | "berserker"
  | "merchant"
  | "shaman"
  | "druid";

export const FACTIONS: { id: Faction; name: string; description: string }[] = [
  { id: "light", name: "Свет", description: "Люди и эльфы, хранители старого мира." },
  { id: "dark", name: "Тьма", description: "Орки и нежить, дети разрушенных земель." },
];

export const RACES: Record<Faction, { id: string; name: string }[]> = {
  light: [
    { id: "human", name: "Человек" },
    { id: "elf", name: "Эльф" },
  ],
  dark: [
    { id: "orc", name: "Орк" },
    { id: "undead", name: "Нежить" },
  ],
};

export interface ClassDef {
  id: ClassId;
  name: string;
  role: string;
  description: string;
  baseStr: number;
  baseAgi: number;
  baseInt: number;
  baseVit: number;
  icon: string;
  color: string;
}

export const CLASSES: ClassDef[] = [
  { id: "warrior", name: "Воин", role: "Танк / ближний бой", description: "Крепкий боец переднего края, держит удар и рубит врагов.", baseStr: 9, baseAgi: 4, baseInt: 2, baseVit: 10, icon: "sword", color: "#c94b4b" },
  { id: "rogue", name: "Разбойник", role: "Ближний бой / крит", description: "Быстрый убийца, наносящий серию точных ударов.", baseStr: 6, baseAgi: 10, baseInt: 2, baseVit: 6, icon: "dagger", color: "#7a5cff" },
  { id: "mage", name: "Маг", role: "Дальний бой / маг", description: "Повелитель стихийной магии, наносит урон по площади.", baseStr: 2, baseAgi: 4, baseInt: 11, baseVit: 5, icon: "fireball", color: "#4b9bff" },
  { id: "priest", name: "Жрец", role: "Поддержка / лекарь", description: "Служитель света, исцеляет союзников и карает врагов.", baseStr: 2, baseAgi: 3, baseInt: 10, baseVit: 7, icon: "heal", color: "#ffd24b" },
  { id: "archer", name: "Стрелок", role: "Дальний бой", description: "Меткий лучник, атакующий на расстоянии.", baseStr: 5, baseAgi: 10, baseInt: 3, baseVit: 6, icon: "bow", color: "#4bcf7a" },
  { id: "berserker", name: "Берсерк", role: "Ближний бой / урон", description: "Неистовый воин, жертвующий защитой ради разрушительной силы.", baseStr: 11, baseAgi: 6, baseInt: 1, baseVit: 6, icon: "axe", color: "#ff7a4b" },
  { id: "merchant", name: "Торговец", role: "Универсал", description: "Хитрый делец, использующий золото и снаряжение как оружие.", baseStr: 5, baseAgi: 6, baseInt: 5, baseVit: 6, icon: "coin", color: "#d4af37" },
  { id: "shaman", name: "Шаман", role: "Поддержка / маг", description: "Заклинатель духов, сочетающий магию стихий и исцеление.", baseStr: 4, baseAgi: 4, baseInt: 9, baseVit: 7, icon: "totem", color: "#3fd4c4" },
  { id: "druid", name: "Друид", role: "Гибрид", description: "Хранитель природы, владеет когтями и целебными травами.", baseStr: 6, baseAgi: 6, baseInt: 7, baseVit: 7, icon: "leaf", color: "#6ac24b" },
];

export function getClass(id: string): ClassDef {
  return CLASSES.find((c) => c.id === id) ?? CLASSES[0];
}

export type AbilityType = "damage" | "heal" | "buff_atk" | "buff_def" | "dot" | "execute";

export interface AbilityDef {
  id: string;
  name: string;
  icon: string;
  type: AbilityType;
  cooldown: number; // seconds
  manaCost: number;
  power: number; // multiplier applied to attack/spell power or heal power
  description: string;
  targeted: boolean; // true = needs enemy target, false = self/ally
}

export const CLASS_ABILITIES: Record<ClassId, AbilityDef[]> = {
  warrior: [
    { id: "w1", name: "Рубящий удар", icon: "sword", type: "damage", cooldown: 3, manaCost: 8, power: 1.3, description: "Мощный удар мечом по цели.", targeted: true },
    { id: "w2", name: "Щитовой бросок", icon: "shield", type: "damage", cooldown: 6, manaCost: 12, power: 1.1, description: "Бросок щита, оглушающий врага.", targeted: true },
    { id: "w3", name: "Боевой клич", icon: "star", type: "buff_atk", cooldown: 18, manaCost: 15, power: 0.25, description: "Увеличивает силу атаки на время.", targeted: false },
    { id: "w4", name: "Неукротимость", icon: "shield", type: "buff_def", cooldown: 20, manaCost: 15, power: 0.3, description: "Увеличивает защиту на время.", targeted: false },
    { id: "w5", name: "Разрушительный удар", icon: "sword", type: "damage", cooldown: 12, manaCost: 25, power: 2.2, description: "Сокрушительный удар по врагу.", targeted: true },
  ],
  rogue: [
    // === ГЕНЕРАТОРЫ (генерируют комбо-очки) ===
    { id: "r1", name: "Коварный удар", icon: "dagger", type: "damage", cooldown: 1.5, manaCost: 35, power: 0.65, description: "Генерирует 1 комбо-очко. Базовая атака.", targeted: true },
    { id: "r2", name: "Удар в спину", icon: "dagger", type: "damage", cooldown: 2.5, manaCost: 40, power: 0.85, description: "Мощный удар со спины. Генерирует 1 комбо-очко.", targeted: true },

    // === ФИНИШЕРЫ (тратят комбо-очки) ===
    { id: "r3", name: "Отравление", icon: "skull", type: "dot", cooldown: 8, manaCost: 25, power: 1.1, description: "Финишер: усиливает яды и наносит урон.", targeted: true },
    { id: "r4", name: "Потрошение", icon: "dagger", type: "damage", cooldown: 10, manaCost: 30, power: 1.4, description: "Мощный финишер. Урон растёт с комбо-очками.", targeted: true },
    { id: "r5", name: "Ядовитый клинок", icon: "skull", type: "dot", cooldown: 12, manaCost: 35, power: 1.6, description: "Сильный DoT-финшер (специализация Отравление).", targeted: true },

    // === Утилити ===
    { id: "r6", name: "Шаг тени", icon: "star", type: "buff_def", cooldown: 18, manaCost: 30, power: 0.3, description: "Телепортируется за спину цели.", targeted: true },
  ],
  mage: [
    { id: "m1", name: "Огненный шар", icon: "fireball", type: "damage", cooldown: 3, manaCost: 12, power: 1.4, description: "Сгусток пламени по цели.", targeted: true },
    { id: "m2", name: "Ледяная стрела", icon: "fireball", type: "damage", cooldown: 6, manaCost: 14, power: 1.2, description: "Замедляет и наносит урон холодом.", targeted: true },
    { id: "m3", name: "Цепная молния", icon: "lightning", type: "damage", cooldown: 9, manaCost: 18, power: 1.6, description: "Разряд молнии по врагу.", targeted: true },
    { id: "m4", name: "Метеор", icon: "fireball", type: "damage", cooldown: 16, manaCost: 30, power: 2.6, description: "Огненная глыба с небес.", targeted: true },
    { id: "m5", name: "Щит из маны", icon: "shield", type: "buff_def", cooldown: 20, manaCost: 20, power: 0.3, description: "Поглощает часть входящего урона.", targeted: false },
  ],
  priest: [
    { id: "p1", name: "Лечение", icon: "heal", type: "heal", cooldown: 4, manaCost: 14, power: 1.4, description: "Восстанавливает здоровье.", targeted: false },
    { id: "p2", name: "Малое лечение", icon: "heal", type: "heal", cooldown: 2, manaCost: 7, power: 0.7, description: "Быстрое и дешёвое лечение.", targeted: false },
    { id: "p3", name: "Благословение", icon: "star", type: "buff_atk", cooldown: 18, manaCost: 15, power: 0.25, description: "Благословляет, повышая силу атаки.", targeted: false },
    { id: "p4", name: "Кара", icon: "lightning", type: "damage", cooldown: 6, manaCost: 14, power: 1.2, description: "Урон светом по врагу.", targeted: true },
    { id: "p5", name: "Возрождение", icon: "heal", type: "heal", cooldown: 22, manaCost: 32, power: 3.0, description: "Мощное исцеление.", targeted: false },
  ],
  archer: [
    { id: "a1", name: "Точный выстрел", icon: "bow", type: "damage", cooldown: 3, manaCost: 8, power: 1.35, description: "Точный выстрел по цели.", targeted: true },
    { id: "a2", name: "Быстрые стрелы", icon: "bow", type: "damage", cooldown: 5, manaCost: 10, power: 1.1, description: "Серия быстрых выстрелов.", targeted: true },
    { id: "a3", name: "Ядовитая стрела", icon: "skull", type: "dot", cooldown: 10, manaCost: 16, power: 1.0, description: "Стрела с ядом.", targeted: true },
    { id: "a4", name: "Град стрел", icon: "bow", type: "damage", cooldown: 12, manaCost: 22, power: 1.9, description: "Стрелы дождём по области.", targeted: true },
    { id: "a5", name: "Выстрел в голову", icon: "bow", type: "execute", cooldown: 15, manaCost: 26, power: 2.5, description: "Смертельно точный выстрел.", targeted: true },
  ],
  berserker: [
    { id: "b1", name: "Дикий удар", icon: "axe", type: "damage", cooldown: 3, manaCost: 8, power: 1.4, description: "Неистовый удар топором.", targeted: true },
    { id: "b2", name: "Кровожадность", icon: "star", type: "buff_atk", cooldown: 16, manaCost: 12, power: 0.35, description: "Повышает урон ценой защиты.", targeted: false },
    { id: "b3", name: "Свирепость", icon: "axe", type: "damage", cooldown: 7, manaCost: 14, power: 1.5, description: "Серия жестоких ударов.", targeted: true },
    { id: "b4", name: "Игнорирование боли", icon: "heal", type: "heal", cooldown: 14, manaCost: 16, power: 1.0, description: "Восстанавливает часть здоровья.", targeted: false },
    { id: "b5", name: "Ярость берсерка", icon: "axe", type: "damage", cooldown: 14, manaCost: 24, power: 2.4, description: "Разрушительная серия ударов.", targeted: true },
  ],
  merchant: [
    { id: "t1", name: "Бросок монет", icon: "coin", type: "damage", cooldown: 3, manaCost: 8, power: 1.2, description: "Бросает тяжёлые монеты во врага.", targeted: true },
    { id: "t2", name: "Выгодная сделка", icon: "coin", type: "buff_def", cooldown: 16, manaCost: 14, power: 0.25, description: "Повышает защиту на время.", targeted: false },
    { id: "t3", name: "Приманка", icon: "skull", type: "dot", cooldown: 10, manaCost: 15, power: 0.9, description: "Ослабляет врага ловушкой.", targeted: true },
    { id: "t4", name: "Тяжёлый кошель", icon: "coin", type: "damage", cooldown: 9, manaCost: 18, power: 1.7, description: "Оглушающий удар кошелём с золотом.", targeted: true },
    { id: "t5", name: "Инвестиция", icon: "heal", type: "heal", cooldown: 18, manaCost: 20, power: 1.6, description: "Вкладывает золото в собственное здоровье.", targeted: false },
  ],
  shaman: [
    { id: "s1", name: "Удар молнии", icon: "lightning", type: "damage", cooldown: 3, manaCost: 10, power: 1.35, description: "Разряд молнии по врагу.", targeted: true },
    { id: "s2", name: "Тотем исцеления", icon: "totem", type: "heal", cooldown: 8, manaCost: 16, power: 1.3, description: "Призывает тотем, исцеляющий шамана.", targeted: false },
    { id: "s3", name: "Оковы земли", icon: "skull", type: "dot", cooldown: 10, manaCost: 14, power: 0.9, description: "Замедляет и наносит урон земли.", targeted: true },
    { id: "s4", name: "Духи волков", icon: "lightning", type: "damage", cooldown: 12, manaCost: 22, power: 1.9, description: "Призрачные волки атакуют врага.", targeted: true },
    { id: "s5", name: "Очищение", icon: "heal", type: "heal", cooldown: 20, manaCost: 26, power: 2.6, description: "Снимает усталость и исцеляет.", targeted: false },
  ],
  druid: [
    { id: "d1", name: "Удар когтями", icon: "leaf", type: "damage", cooldown: 3, manaCost: 8, power: 1.3, description: "Удар когтями оборотня.", targeted: true },
    { id: "d2", name: "Природное исцеление", icon: "heal", type: "heal", cooldown: 6, manaCost: 14, power: 1.3, description: "Целебная сила природы.", targeted: false },
    { id: "d3", name: "Ядовитый шип", icon: "skull", type: "dot", cooldown: 10, manaCost: 15, power: 1.0, description: "Шип с ядом наносит урон со временем.", targeted: true },
    { id: "d4", name: "Обличье медведя", icon: "shield", type: "buff_def", cooldown: 18, manaCost: 15, power: 0.35, description: "Превращение, повышающее защиту.", targeted: false },
    { id: "d5", name: "Гнев природы", icon: "leaf", type: "damage", cooldown: 14, manaCost: 24, power: 2.3, description: "Мощный природный катаклизм.", targeted: true },
  ],
};

// ---------------- Talent tree ----------------
export type TalentBranch = "strength" | "vitality" | "spirit";

export const TALENT_BRANCHES: { id: TalentBranch; name: string; icon: string; description: string }[] = [
  { id: "strength", name: "Сила", icon: "sword", description: "Увеличивает силовой урон." },
  { id: "vitality", name: "Стойкость", icon: "shield", description: "Увеличивает здоровье и защиту." },
  { id: "spirit", name: "Дух", icon: "star", description: "Увеличивает ману и силу заклинаний." },
];

export const TALENT_RANKS = 5;

export function talentPointsForLevel(level: number): number {
  return Math.max(0, level - 1);
}

// ---------------- Equipment / Forge ----------------
export type EquipmentSlot = "weapon" | "armor" | "amulet";

export const EQUIPMENT_SLOTS: { id: EquipmentSlot; name: string; icon: string }[] = [
  { id: "weapon", name: "Оружие", icon: "sword" },
  { id: "armor", name: "Броня", icon: "shield" },
  { id: "amulet", name: "Амулет", icon: "star" },
];

export const MAX_EQUIP_LEVEL = 10;

export function upgradeCost(level: number): number {
  return Math.round(20 * Math.pow(level + 1, 1.6));
}

// ---------------- Derived stats ----------------
export interface CharacterStats {
  str: number;
  agi: number;
  int: number;
  vit: number;
  attack: number;
  spellPower: number;
  defense: number;
  maxHp: number;
  maxMp: number;
  critChance: number;
}

export interface CharacterLike {
  className: string;
  level: number;
  talents: Partial<Record<TalentBranch, number>>;
  equipment: Partial<Record<EquipmentSlot, number>>;
}

export function computeStats(ch: CharacterLike): CharacterStats {
  const cls = getClass(ch.className);
  const lvl = ch.level;
  const str = cls.baseStr + Math.floor(lvl * 0.8);
  const agi = cls.baseAgi + Math.floor(lvl * 0.6);
  const intel = cls.baseInt + Math.floor(lvl * 0.6);
  const vit = cls.baseVit + Math.floor(lvl * 0.7);

  const tStr = ch.talents.strength ?? 0;
  const tVit = ch.talents.vitality ?? 0;
  const tSpirit = ch.talents.spirit ?? 0;

  const weaponLvl = ch.equipment.weapon ?? 0;
  const armorLvl = ch.equipment.armor ?? 0;
  const amuletLvl = ch.equipment.amulet ?? 0;

  const attack = Math.round(str * 2.2 + weaponLvl * 4 + tStr * 6);
  const spellPower = Math.round(intel * 2.2 + weaponLvl * 3 + tStr * 3 + tSpirit * 4);
  const defense = Math.round(vit * 1.2 + armorLvl * 3 + tVit * 5);
  const maxHp = Math.round(80 + lvl * 16 + vit * 5 + armorLvl * 6 + tVit * 22);
  const maxMp = Math.round(40 + lvl * 8 + intel * 4 + amuletLvl * 4 + tSpirit * 16);
  const critChance = Math.min(60, Math.round(agi * 0.6 + amuletLvl * 1.2));

  return { str, agi, int: intel, vit, attack, spellPower, defense, maxHp, maxMp, critChance };
}

export function expForLevel(level: number): number {
  return Math.round(80 * Math.pow(level, 1.35));
}

// ---------------- Monsters ----------------
export interface MonsterDef {
  id: string;
  name: string;
  level: number;
  maxHp: number;
  attack: number;
  expReward: number;
  goldReward: number;
}

export const MONSTER_TYPES: MonsterDef[] = [
  { id: "wolf", name: "Лесной волк", level: 3, maxHp: 120, attack: 8, expReward: 24, goldReward: 6 },
  { id: "spirit", name: "Дух леса", level: 5, maxHp: 180, attack: 12, expReward: 40, goldReward: 10 },
  { id: "bandit", name: "Разбойник-изгой", level: 7, maxHp: 260, attack: 16, expReward: 60, goldReward: 16 },
  { id: "ogre", name: "Лесной огр", level: 10, maxHp: 420, attack: 22, expReward: 100, goldReward: 28 },
];

export const ROLE_LIST = CLASSES.map((c) => c.id);
