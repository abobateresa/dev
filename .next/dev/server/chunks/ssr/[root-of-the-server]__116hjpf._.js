module.exports = [
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/timers [external] (timers, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("timers", () => require("timers"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[project]/src/lib/game-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Shared game constants: used both on server (character init) and client (UI/logic).
// No server-only imports here so it can run in the browser bundle too.
__turbopack_context__.s([
    "CLASSES",
    ()=>CLASSES,
    "CLASS_ABILITIES",
    ()=>CLASS_ABILITIES,
    "EQUIPMENT_SLOTS",
    ()=>EQUIPMENT_SLOTS,
    "FACTIONS",
    ()=>FACTIONS,
    "MAX_EQUIP_LEVEL",
    ()=>MAX_EQUIP_LEVEL,
    "MONSTER_TYPES",
    ()=>MONSTER_TYPES,
    "RACES",
    ()=>RACES,
    "ROLE_LIST",
    ()=>ROLE_LIST,
    "TALENT_BRANCHES",
    ()=>TALENT_BRANCHES,
    "TALENT_RANKS",
    ()=>TALENT_RANKS,
    "computeStats",
    ()=>computeStats,
    "expForLevel",
    ()=>expForLevel,
    "getClass",
    ()=>getClass,
    "talentPointsForLevel",
    ()=>talentPointsForLevel,
    "upgradeCost",
    ()=>upgradeCost
]);
const FACTIONS = [
    {
        id: "light",
        name: "Свет",
        description: "Люди и эльфы, хранители старого мира."
    },
    {
        id: "dark",
        name: "Тьма",
        description: "Орки и нежить, дети разрушенных земель."
    }
];
const RACES = {
    light: [
        {
            id: "human",
            name: "Человек"
        },
        {
            id: "elf",
            name: "Эльф"
        }
    ],
    dark: [
        {
            id: "orc",
            name: "Орк"
        },
        {
            id: "undead",
            name: "Нежить"
        }
    ]
};
const CLASSES = [
    {
        id: "warrior",
        name: "Воин",
        role: "Танк / ближний бой",
        description: "Крепкий боец переднего края, держит удар и рубит врагов.",
        baseStr: 9,
        baseAgi: 4,
        baseInt: 2,
        baseVit: 10,
        icon: "sword",
        color: "#c94b4b"
    },
    {
        id: "rogue",
        name: "Разбойник",
        role: "Ближний бой / крит",
        description: "Быстрый убийца, наносящий серию точных ударов.",
        baseStr: 6,
        baseAgi: 10,
        baseInt: 2,
        baseVit: 6,
        icon: "dagger",
        color: "#7a5cff"
    },
    {
        id: "mage",
        name: "Маг",
        role: "Дальний бой / маг",
        description: "Повелитель стихийной магии, наносит урон по площади.",
        baseStr: 2,
        baseAgi: 4,
        baseInt: 11,
        baseVit: 5,
        icon: "fireball",
        color: "#4b9bff"
    },
    {
        id: "priest",
        name: "Жрец",
        role: "Поддержка / лекарь",
        description: "Служитель света, исцеляет союзников и карает врагов.",
        baseStr: 2,
        baseAgi: 3,
        baseInt: 10,
        baseVit: 7,
        icon: "heal",
        color: "#ffd24b"
    },
    {
        id: "archer",
        name: "Стрелок",
        role: "Дальний бой",
        description: "Меткий лучник, атакующий на расстоянии.",
        baseStr: 5,
        baseAgi: 10,
        baseInt: 3,
        baseVit: 6,
        icon: "bow",
        color: "#4bcf7a"
    },
    {
        id: "berserker",
        name: "Берсерк",
        role: "Ближний бой / урон",
        description: "Неистовый воин, жертвующий защитой ради разрушительной силы.",
        baseStr: 11,
        baseAgi: 6,
        baseInt: 1,
        baseVit: 6,
        icon: "axe",
        color: "#ff7a4b"
    },
    {
        id: "merchant",
        name: "Торговец",
        role: "Универсал",
        description: "Хитрый делец, использующий золото и снаряжение как оружие.",
        baseStr: 5,
        baseAgi: 6,
        baseInt: 5,
        baseVit: 6,
        icon: "coin",
        color: "#d4af37"
    },
    {
        id: "shaman",
        name: "Шаман",
        role: "Поддержка / маг",
        description: "Заклинатель духов, сочетающий магию стихий и исцеление.",
        baseStr: 4,
        baseAgi: 4,
        baseInt: 9,
        baseVit: 7,
        icon: "totem",
        color: "#3fd4c4"
    },
    {
        id: "druid",
        name: "Друид",
        role: "Гибрид",
        description: "Хранитель природы, владеет когтями и целебными травами.",
        baseStr: 6,
        baseAgi: 6,
        baseInt: 7,
        baseVit: 7,
        icon: "leaf",
        color: "#6ac24b"
    }
];
function getClass(id) {
    return CLASSES.find((c)=>c.id === id) ?? CLASSES[0];
}
const CLASS_ABILITIES = {
    warrior: [
        {
            id: "w1",
            name: "Рубящий удар",
            icon: "sword",
            type: "damage",
            cooldown: 3,
            manaCost: 8,
            power: 1.3,
            description: "Мощный удар мечом по цели.",
            targeted: true
        },
        {
            id: "w2",
            name: "Щитовой бросок",
            icon: "shield",
            type: "damage",
            cooldown: 6,
            manaCost: 12,
            power: 1.1,
            description: "Бросок щита, оглушающий врага.",
            targeted: true
        },
        {
            id: "w3",
            name: "Боевой клич",
            icon: "star",
            type: "buff_atk",
            cooldown: 18,
            manaCost: 15,
            power: 0.25,
            description: "Увеличивает силу атаки на время.",
            targeted: false
        },
        {
            id: "w4",
            name: "Неукротимость",
            icon: "shield",
            type: "buff_def",
            cooldown: 20,
            manaCost: 15,
            power: 0.3,
            description: "Увеличивает защиту на время.",
            targeted: false
        },
        {
            id: "w5",
            name: "Разрушительный удар",
            icon: "sword",
            type: "damage",
            cooldown: 12,
            manaCost: 25,
            power: 2.2,
            description: "Сокрушительный удар по врагу.",
            targeted: true
        }
    ],
    rogue: [
        // === ГЕНЕРАТОРЫ (генерируют комбо-очки) ===
        {
            id: "r1",
            name: "Коварный удар",
            icon: "dagger",
            type: "damage",
            cooldown: 1.5,
            manaCost: 35,
            power: 0.65,
            description: "Генерирует 1 комбо-очко. Базовая атака.",
            targeted: true
        },
        {
            id: "r2",
            name: "Удар в спину",
            icon: "dagger",
            type: "damage",
            cooldown: 2.5,
            manaCost: 40,
            power: 0.85,
            description: "Мощный удар со спины. Генерирует 1 комбо-очко.",
            targeted: true
        },
        // === ФИНИШЕРЫ (тратят комбо-очки) ===
        {
            id: "r3",
            name: "Отравление",
            icon: "skull",
            type: "dot",
            cooldown: 8,
            manaCost: 25,
            power: 1.1,
            description: "Финишер: усиливает яды и наносит урон.",
            targeted: true
        },
        {
            id: "r4",
            name: "Потрошение",
            icon: "dagger",
            type: "damage",
            cooldown: 10,
            manaCost: 30,
            power: 1.4,
            description: "Мощный финишер. Урон растёт с комбо-очками.",
            targeted: true
        },
        {
            id: "r5",
            name: "Ядовитый клинок",
            icon: "skull",
            type: "dot",
            cooldown: 12,
            manaCost: 35,
            power: 1.6,
            description: "Сильный DoT-финшер (специализация Отравление).",
            targeted: true
        },
        // === Утилити ===
        {
            id: "r6",
            name: "Шаг тени",
            icon: "star",
            type: "buff_def",
            cooldown: 18,
            manaCost: 30,
            power: 0.3,
            description: "Телепортируется за спину цели.",
            targeted: true
        }
    ],
    mage: [
        {
            id: "m1",
            name: "Огненный шар",
            icon: "fireball",
            type: "damage",
            cooldown: 3,
            manaCost: 12,
            power: 1.4,
            description: "Сгусток пламени по цели.",
            targeted: true
        },
        {
            id: "m2",
            name: "Ледяная стрела",
            icon: "fireball",
            type: "damage",
            cooldown: 6,
            manaCost: 14,
            power: 1.2,
            description: "Замедляет и наносит урон холодом.",
            targeted: true
        },
        {
            id: "m3",
            name: "Цепная молния",
            icon: "lightning",
            type: "damage",
            cooldown: 9,
            manaCost: 18,
            power: 1.6,
            description: "Разряд молнии по врагу.",
            targeted: true
        },
        {
            id: "m4",
            name: "Метеор",
            icon: "fireball",
            type: "damage",
            cooldown: 16,
            manaCost: 30,
            power: 2.6,
            description: "Огненная глыба с небес.",
            targeted: true
        },
        {
            id: "m5",
            name: "Щит из маны",
            icon: "shield",
            type: "buff_def",
            cooldown: 20,
            manaCost: 20,
            power: 0.3,
            description: "Поглощает часть входящего урона.",
            targeted: false
        }
    ],
    priest: [
        {
            id: "p1",
            name: "Лечение",
            icon: "heal",
            type: "heal",
            cooldown: 4,
            manaCost: 14,
            power: 1.4,
            description: "Восстанавливает здоровье.",
            targeted: false
        },
        {
            id: "p2",
            name: "Малое лечение",
            icon: "heal",
            type: "heal",
            cooldown: 2,
            manaCost: 7,
            power: 0.7,
            description: "Быстрое и дешёвое лечение.",
            targeted: false
        },
        {
            id: "p3",
            name: "Благословение",
            icon: "star",
            type: "buff_atk",
            cooldown: 18,
            manaCost: 15,
            power: 0.25,
            description: "Благословляет, повышая силу атаки.",
            targeted: false
        },
        {
            id: "p4",
            name: "Кара",
            icon: "lightning",
            type: "damage",
            cooldown: 6,
            manaCost: 14,
            power: 1.2,
            description: "Урон светом по врагу.",
            targeted: true
        },
        {
            id: "p5",
            name: "Возрождение",
            icon: "heal",
            type: "heal",
            cooldown: 22,
            manaCost: 32,
            power: 3.0,
            description: "Мощное исцеление.",
            targeted: false
        }
    ],
    archer: [
        {
            id: "a1",
            name: "Точный выстрел",
            icon: "bow",
            type: "damage",
            cooldown: 3,
            manaCost: 8,
            power: 1.35,
            description: "Точный выстрел по цели.",
            targeted: true
        },
        {
            id: "a2",
            name: "Быстрые стрелы",
            icon: "bow",
            type: "damage",
            cooldown: 5,
            manaCost: 10,
            power: 1.1,
            description: "Серия быстрых выстрелов.",
            targeted: true
        },
        {
            id: "a3",
            name: "Ядовитая стрела",
            icon: "skull",
            type: "dot",
            cooldown: 10,
            manaCost: 16,
            power: 1.0,
            description: "Стрела с ядом.",
            targeted: true
        },
        {
            id: "a4",
            name: "Град стрел",
            icon: "bow",
            type: "damage",
            cooldown: 12,
            manaCost: 22,
            power: 1.9,
            description: "Стрелы дождём по области.",
            targeted: true
        },
        {
            id: "a5",
            name: "Выстрел в голову",
            icon: "bow",
            type: "execute",
            cooldown: 15,
            manaCost: 26,
            power: 2.5,
            description: "Смертельно точный выстрел.",
            targeted: true
        }
    ],
    berserker: [
        {
            id: "b1",
            name: "Дикий удар",
            icon: "axe",
            type: "damage",
            cooldown: 3,
            manaCost: 8,
            power: 1.4,
            description: "Неистовый удар топором.",
            targeted: true
        },
        {
            id: "b2",
            name: "Кровожадность",
            icon: "star",
            type: "buff_atk",
            cooldown: 16,
            manaCost: 12,
            power: 0.35,
            description: "Повышает урон ценой защиты.",
            targeted: false
        },
        {
            id: "b3",
            name: "Свирепость",
            icon: "axe",
            type: "damage",
            cooldown: 7,
            manaCost: 14,
            power: 1.5,
            description: "Серия жестоких ударов.",
            targeted: true
        },
        {
            id: "b4",
            name: "Игнорирование боли",
            icon: "heal",
            type: "heal",
            cooldown: 14,
            manaCost: 16,
            power: 1.0,
            description: "Восстанавливает часть здоровья.",
            targeted: false
        },
        {
            id: "b5",
            name: "Ярость берсерка",
            icon: "axe",
            type: "damage",
            cooldown: 14,
            manaCost: 24,
            power: 2.4,
            description: "Разрушительная серия ударов.",
            targeted: true
        }
    ],
    merchant: [
        {
            id: "t1",
            name: "Бросок монет",
            icon: "coin",
            type: "damage",
            cooldown: 3,
            manaCost: 8,
            power: 1.2,
            description: "Бросает тяжёлые монеты во врага.",
            targeted: true
        },
        {
            id: "t2",
            name: "Выгодная сделка",
            icon: "coin",
            type: "buff_def",
            cooldown: 16,
            manaCost: 14,
            power: 0.25,
            description: "Повышает защиту на время.",
            targeted: false
        },
        {
            id: "t3",
            name: "Приманка",
            icon: "skull",
            type: "dot",
            cooldown: 10,
            manaCost: 15,
            power: 0.9,
            description: "Ослабляет врага ловушкой.",
            targeted: true
        },
        {
            id: "t4",
            name: "Тяжёлый кошель",
            icon: "coin",
            type: "damage",
            cooldown: 9,
            manaCost: 18,
            power: 1.7,
            description: "Оглушающий удар кошелём с золотом.",
            targeted: true
        },
        {
            id: "t5",
            name: "Инвестиция",
            icon: "heal",
            type: "heal",
            cooldown: 18,
            manaCost: 20,
            power: 1.6,
            description: "Вкладывает золото в собственное здоровье.",
            targeted: false
        }
    ],
    shaman: [
        {
            id: "s1",
            name: "Удар молнии",
            icon: "lightning",
            type: "damage",
            cooldown: 3,
            manaCost: 10,
            power: 1.35,
            description: "Разряд молнии по врагу.",
            targeted: true
        },
        {
            id: "s2",
            name: "Тотем исцеления",
            icon: "totem",
            type: "heal",
            cooldown: 8,
            manaCost: 16,
            power: 1.3,
            description: "Призывает тотем, исцеляющий шамана.",
            targeted: false
        },
        {
            id: "s3",
            name: "Оковы земли",
            icon: "skull",
            type: "dot",
            cooldown: 10,
            manaCost: 14,
            power: 0.9,
            description: "Замедляет и наносит урон земли.",
            targeted: true
        },
        {
            id: "s4",
            name: "Духи волков",
            icon: "lightning",
            type: "damage",
            cooldown: 12,
            manaCost: 22,
            power: 1.9,
            description: "Призрачные волки атакуют врага.",
            targeted: true
        },
        {
            id: "s5",
            name: "Очищение",
            icon: "heal",
            type: "heal",
            cooldown: 20,
            manaCost: 26,
            power: 2.6,
            description: "Снимает усталость и исцеляет.",
            targeted: false
        }
    ],
    druid: [
        {
            id: "d1",
            name: "Удар когтями",
            icon: "leaf",
            type: "damage",
            cooldown: 3,
            manaCost: 8,
            power: 1.3,
            description: "Удар когтями оборотня.",
            targeted: true
        },
        {
            id: "d2",
            name: "Природное исцеление",
            icon: "heal",
            type: "heal",
            cooldown: 6,
            manaCost: 14,
            power: 1.3,
            description: "Целебная сила природы.",
            targeted: false
        },
        {
            id: "d3",
            name: "Ядовитый шип",
            icon: "skull",
            type: "dot",
            cooldown: 10,
            manaCost: 15,
            power: 1.0,
            description: "Шип с ядом наносит урон со временем.",
            targeted: true
        },
        {
            id: "d4",
            name: "Обличье медведя",
            icon: "shield",
            type: "buff_def",
            cooldown: 18,
            manaCost: 15,
            power: 0.35,
            description: "Превращение, повышающее защиту.",
            targeted: false
        },
        {
            id: "d5",
            name: "Гнев природы",
            icon: "leaf",
            type: "damage",
            cooldown: 14,
            manaCost: 24,
            power: 2.3,
            description: "Мощный природный катаклизм.",
            targeted: true
        }
    ]
};
const TALENT_BRANCHES = [
    {
        id: "strength",
        name: "Сила",
        icon: "sword",
        description: "Увеличивает силовой урон."
    },
    {
        id: "vitality",
        name: "Стойкость",
        icon: "shield",
        description: "Увеличивает здоровье и защиту."
    },
    {
        id: "spirit",
        name: "Дух",
        icon: "star",
        description: "Увеличивает ману и силу заклинаний."
    }
];
const TALENT_RANKS = 5;
function talentPointsForLevel(level) {
    return Math.max(0, level - 1);
}
const EQUIPMENT_SLOTS = [
    {
        id: "weapon",
        name: "Оружие",
        icon: "sword"
    },
    {
        id: "armor",
        name: "Броня",
        icon: "shield"
    },
    {
        id: "amulet",
        name: "Амулет",
        icon: "star"
    }
];
const MAX_EQUIP_LEVEL = 10;
function upgradeCost(level) {
    return Math.round(20 * Math.pow(level + 1, 1.6));
}
function computeStats(ch) {
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
    return {
        str,
        agi,
        int: intel,
        vit,
        attack,
        spellPower,
        defense,
        maxHp,
        maxMp,
        critChance
    };
}
function expForLevel(level) {
    return Math.round(80 * Math.pow(level, 1.35));
}
const MONSTER_TYPES = [
    {
        id: "wolf",
        name: "Лесной волк",
        level: 3,
        maxHp: 120,
        attack: 8,
        expReward: 24,
        goldReward: 6
    },
    {
        id: "spirit",
        name: "Дух леса",
        level: 5,
        maxHp: 180,
        attack: 12,
        expReward: 40,
        goldReward: 10
    },
    {
        id: "bandit",
        name: "Разбойник-изгой",
        level: 7,
        maxHp: 260,
        attack: 16,
        expReward: 60,
        goldReward: 16
    },
    {
        id: "ogre",
        name: "Лесной огр",
        level: 10,
        maxHp: 420,
        attack: 22,
        expReward: 100,
        goldReward: 28
    }
];
const ROLE_LIST = CLASSES.map((c)=>c.id);
}),
"[project]/src/components/game/world-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LOCATIONS",
    ()=>LOCATIONS,
    "WORLD_MAP",
    ()=>WORLD_MAP,
    "rectsIntersect",
    ()=>rectsIntersect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/game-data.ts [app-rsc] (ecmascript)");
;
function monster(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MONSTER_TYPES"].find((m)=>m.id === id);
}
const WORLD_MAP = {
    width: 2400,
    height: 1800,
    locations: [
        {
            id: "city",
            x: 1100,
            y: 920,
            name: "Ривендол"
        },
        {
            id: "forest",
            x: 620,
            y: 620,
            name: "Тёмный лес"
        },
        {
            id: "plains",
            x: 1580,
            y: 580,
            name: "Зелёные равнины"
        },
        {
            id: "hills",
            x: 1820,
            y: 1120,
            name: "Холмы Ветров"
        },
        {
            id: "swamp",
            x: 380,
            y: 1220,
            name: "Туманное болото"
        },
        {
            id: "mountains",
            x: 1480,
            y: 280,
            name: "Горный перевал"
        },
        {
            id: "ruins",
            x: 920,
            y: 380,
            name: "Руины храма"
        },
        {
            id: "desert",
            x: 380,
            y: 420,
            name: "Пески Забвения"
        },
        {
            id: "lake",
            x: 1720,
            y: 1480,
            name: "Озеро Зеркал"
        },
        {
            id: "dungeon",
            x: 720,
            y: 1480,
            name: "Подземелье Теней"
        },
        {
            id: "village",
            x: 1320,
            y: 1420,
            name: "Деревня Эльдара"
        }
    ],
    connections: [
        [
            "city",
            "forest"
        ],
        [
            "city",
            "plains"
        ],
        [
            "city",
            "hills"
        ],
        [
            "forest",
            "desert"
        ],
        [
            "forest",
            "ruins"
        ],
        [
            "plains",
            "mountains"
        ],
        [
            "plains",
            "hills"
        ],
        [
            "hills",
            "lake"
        ],
        [
            "hills",
            "village"
        ],
        [
            "swamp",
            "dungeon"
        ],
        [
            "swamp",
            "forest"
        ],
        [
            "ruins",
            "mountains"
        ],
        [
            "desert",
            "swamp"
        ],
        [
            "lake",
            "village"
        ],
        [
            "dungeon",
            "village"
        ]
    ]
};
// ==================== ГОРОД РИВЕНДОЛ — ЖИВОЙ ИЗОМЕТРИЧЕСКИЙ ГОРОД ====================
// Основные здания
const cityBuildings = [
    // Крупные здания
    {
        id: "guild",
        x: 920,
        y: 380,
        w: 480,
        h: 320,
        label: "Гильдия воинов"
    },
    {
        id: "weapon",
        x: 1520,
        y: 340,
        w: 360,
        h: 280,
        label: "Оружейная"
    },
    {
        id: "armor",
        x: 1520,
        y: 680,
        w: 360,
        h: 280,
        label: "Бронная"
    },
    {
        id: "magic",
        x: 1520,
        y: 1020,
        w: 360,
        h: 280,
        label: "Магическая лавка"
    },
    {
        id: "bank",
        x: 480,
        y: 920,
        w: 400,
        h: 280,
        label: "Банк Ривендола"
    },
    {
        id: "tavern",
        x: 120,
        y: 1240,
        w: 420,
        h: 300,
        label: "Таверна «Золотой Дракон»"
    },
    {
        id: "temple",
        x: 580,
        y: 480,
        w: 320,
        h: 260,
        label: "Храм Света"
    },
    {
        id: "forge",
        x: 1080,
        y: 820,
        w: 280,
        h: 220,
        label: "Кузница"
    },
    // Рыночные ларьки (как на картинке)
    {
        id: "stall1",
        x: 680,
        y: 720,
        w: 140,
        h: 110,
        label: "Овощи"
    },
    {
        id: "stall2",
        x: 860,
        y: 740,
        w: 140,
        h: 110,
        label: "Фрукты"
    },
    {
        id: "stall3",
        x: 1040,
        y: 720,
        w: 140,
        h: 110,
        label: "Мясо"
    },
    {
        id: "stall4",
        x: 1220,
        y: 740,
        w: 140,
        h: 110,
        label: "Хлеб"
    },
    {
        id: "stall5",
        x: 1400,
        y: 720,
        w: 140,
        h: 110,
        label: "Рыба"
    },
    {
        id: "stall6",
        x: 1580,
        y: 740,
        w: 140,
        h: 110,
        label: "Специи"
    },
    {
        id: "stall7",
        x: 720,
        y: 920,
        w: 140,
        h: 110,
        label: "Ткани"
    },
    {
        id: "stall8",
        x: 900,
        y: 940,
        w: 140,
        h: 110,
        label: "Кожа"
    },
    {
        id: "stall9",
        x: 1080,
        y: 920,
        w: 140,
        h: 110,
        label: "Оружие"
    },
    {
        id: "stall10",
        x: 1260,
        y: 940,
        w: 140,
        h: 110,
        label: "Броня"
    },
    {
        id: "stall11",
        x: 680,
        y: 1120,
        w: 140,
        h: 110,
        label: "Зелья"
    },
    {
        id: "stall12",
        x: 860,
        y: 1140,
        w: 140,
        h: 110,
        label: "Книги"
    },
    {
        id: "stall13",
        x: 1040,
        y: 1120,
        w: 140,
        h: 110,
        label: "Ювелир"
    },
    {
        id: "stall14",
        x: 1220,
        y: 1140,
        w: 140,
        h: 110,
        label: "Артефакты"
    }
];
// Дороги
const cityRoads = [
    {
        x: 600,
        y: 680,
        w: 1100,
        h: 90
    },
    {
        x: 820,
        y: 380,
        w: 90,
        h: 520
    },
    {
        x: 420,
        y: 1080,
        w: 1360,
        h: 80
    },
    {
        x: 1120,
        y: 920,
        w: 90,
        h: 380
    }
];
// Деревья + декор
const cityTrees = [
    // Деревья
    {
        id: "ct1",
        x: 180,
        y: 240,
        scale: 1.4,
        collide: true
    },
    {
        id: "ct2",
        x: 320,
        y: 160,
        scale: 1.2
    },
    {
        id: "ct3",
        x: 620,
        y: 220,
        scale: 1.5,
        collide: true
    },
    {
        id: "ct4",
        x: 1680,
        y: 200,
        scale: 1.3
    },
    {
        id: "ct5",
        x: 1820,
        y: 480,
        scale: 1.1
    },
    {
        id: "ct6",
        x: 380,
        y: 640,
        scale: 1.2
    },
    {
        id: "ct7",
        x: 680,
        y: 1180,
        scale: 1.4,
        collide: true
    },
    {
        id: "ct8",
        x: 1620,
        y: 1240,
        scale: 1.3
    },
    {
        id: "ct9",
        x: 980,
        y: 1420,
        scale: 1.1
    },
    // Рыночные ларьки (дополнительные)
    {
        id: "stall15",
        x: 1420,
        y: 1120,
        scale: 1.0,
        type: "stall"
    },
    {
        id: "stall16",
        x: 1600,
        y: 1140,
        scale: 1.0,
        type: "stall"
    },
    // Бочки и ящики
    {
        id: "barrel1",
        x: 540,
        y: 860,
        scale: 0.9,
        type: "barrel"
    },
    {
        id: "barrel2",
        x: 580,
        y: 880,
        scale: 0.85,
        type: "barrel"
    },
    {
        id: "barrel3",
        x: 920,
        y: 880,
        scale: 0.9,
        type: "barrel"
    },
    {
        id: "barrel4",
        x: 1380,
        y: 860,
        scale: 0.85,
        type: "barrel"
    },
    {
        id: "barrel5",
        x: 1420,
        y: 880,
        scale: 0.9,
        type: "barrel"
    },
    // Телеги
    {
        id: "cart1",
        x: 720,
        y: 980,
        scale: 1.1,
        type: "cart"
    },
    {
        id: "cart2",
        x: 1480,
        y: 980,
        scale: 1.0,
        type: "cart"
    },
    // Колодцы и фонари
    {
        id: "well1",
        x: 420,
        y: 780,
        scale: 1.0,
        type: "well",
        collide: true
    },
    {
        id: "lamp1",
        x: 780,
        y: 640,
        scale: 0.8,
        type: "lamp"
    },
    {
        id: "lamp2",
        x: 1120,
        y: 640,
        scale: 0.8,
        type: "lamp"
    },
    {
        id: "lamp3",
        x: 1480,
        y: 640,
        scale: 0.8,
        type: "lamp"
    }
];
// ==================== ДРУГИЕ ЛОКАЦИИ ====================
const forestTrees = Array.from({
    length: 48
}, (_, i)=>({
        id: `ft${i}`,
        x: 140 + i % 8 * 230 + Math.sin(i) * 50,
        y: 160 + Math.floor(i / 8) * 170 + i % 4 * 35,
        scale: 0.95 + i % 5 * 0.12,
        collide: i % 3 !== 0
    }));
const forestRoads = [
    {
        x: 200,
        y: 720,
        w: 1500,
        h: 65
    },
    {
        x: 820,
        y: 420,
        w: 75,
        h: 580
    }
];
const plainsBuildings = [
    {
        id: "windmill",
        x: 580,
        y: 340,
        w: 200,
        h: 280,
        label: "Мельница"
    },
    {
        id: "farm1",
        x: 1220,
        y: 620,
        w: 320,
        h: 180,
        label: "Ферма"
    },
    {
        id: "farm2",
        x: 1640,
        y: 940,
        w: 280,
        h: 160,
        label: "Сарай"
    }
];
const plainsTrees = [
    {
        id: "pt1",
        x: 240,
        y: 220,
        scale: 1.5,
        collide: true
    },
    {
        id: "pt2",
        x: 940,
        y: 160,
        scale: 1.2
    },
    {
        id: "pt3",
        x: 1480,
        y: 320,
        scale: 1.4,
        collide: true
    },
    {
        id: "pt4",
        x: 480,
        y: 820,
        scale: 1.3
    },
    {
        id: "pt5",
        x: 1180,
        y: 1120,
        scale: 1.1
    },
    {
        id: "pt6",
        x: 1740,
        y: 720,
        scale: 1.2
    }
];
const plainsRoads = [
    {
        x: 380,
        y: 640,
        w: 1800,
        h: 60
    }
];
const hillsTrees = Array.from({
    length: 32
}, (_, i)=>({
        id: `ht${i}`,
        x: 200 + i % 7 * 300,
        y: 240 + Math.floor(i / 7) * 240,
        scale: 0.9 + i % 4 * 0.18,
        collide: true
    }));
const hillsRoads = [
    {
        x: 620,
        y: 520,
        w: 1200,
        h: 55
    },
    {
        x: 1020,
        y: 860,
        w: 65,
        h: 620
    }
];
const swampTrees = [
    {
        id: "sw1",
        x: 260,
        y: 400,
        scale: 1.6,
        collide: true
    },
    {
        id: "sw2",
        x: 720,
        y: 540,
        scale: 1.4,
        collide: true
    },
    {
        id: "sw3",
        x: 1180,
        y: 360,
        scale: 1.7,
        collide: true
    },
    {
        id: "sw4",
        x: 1540,
        y: 720,
        scale: 1.3
    },
    {
        id: "sw5",
        x: 420,
        y: 980,
        scale: 1.5,
        collide: true
    },
    {
        id: "sw6",
        x: 1020,
        y: 1140,
        scale: 1.2
    }
];
const swampRoads = [
    {
        x: 340,
        y: 760,
        w: 1380,
        h: 52
    }
];
const mountainsBuildings = [
    {
        id: "watchtower",
        x: 860,
        y: 360,
        w: 180,
        h: 260,
        label: "Сторожевая башня"
    }
];
const mountainsTrees = [
    {
        id: "mt1",
        x: 300,
        y: 200,
        scale: 1.1,
        collide: true
    },
    {
        id: "mt2",
        x: 660,
        y: 440,
        scale: 1.0
    },
    {
        id: "mt3",
        x: 1180,
        y: 300,
        scale: 1.2,
        collide: true
    },
    {
        id: "mt4",
        x: 1540,
        y: 540,
        scale: 1.3
    }
];
const ruinsBuildings = [
    {
        id: "temple1",
        x: 720,
        y: 440,
        w: 420,
        h: 360,
        label: "Разрушенный храм"
    },
    {
        id: "altar",
        x: 1180,
        y: 720,
        w: 180,
        h: 160,
        label: "Древний алтарь"
    }
];
const ruinsTrees = [
    {
        id: "ru1",
        x: 260,
        y: 300,
        scale: 1.5,
        collide: true
    },
    {
        id: "ru2",
        x: 960,
        y: 260,
        scale: 1.3
    },
    {
        id: "ru3",
        x: 1540,
        y: 400,
        scale: 1.4,
        collide: true
    },
    {
        id: "ru4",
        x: 560,
        y: 880,
        scale: 1.2
    }
];
const desertTrees = [
    {
        id: "ds1",
        x: 340,
        y: 400,
        scale: 1.3,
        collide: true
    },
    {
        id: "ds2",
        x: 820,
        y: 540,
        scale: 1.0
    },
    {
        id: "ds3",
        x: 1300,
        y: 360,
        scale: 1.2,
        collide: true
    },
    {
        id: "ds4",
        x: 1680,
        y: 720,
        scale: 1.1
    }
];
const desertRoads = [
    {
        x: 300,
        y: 660,
        w: 1600,
        h: 55
    }
];
const lakeTrees = [
    {
        id: "lk1",
        x: 440,
        y: 300,
        scale: 1.6,
        collide: true
    },
    {
        id: "lk2",
        x: 1020,
        y: 200,
        scale: 1.4
    },
    {
        id: "lk3",
        x: 1480,
        y: 440,
        scale: 1.5,
        collide: true
    },
    {
        id: "lk4",
        x: 720,
        y: 820,
        scale: 1.3
    },
    {
        id: "lk5",
        x: 1240,
        y: 980,
        scale: 1.2
    }
];
const lakeRoads = [
    {
        x: 560,
        y: 620,
        w: 1060,
        h: 52
    }
];
const dungeonBuildings = [
    {
        id: "dgate",
        x: 720,
        y: 440,
        w: 460,
        h: 320,
        label: "Вход в подземелье"
    }
];
const dungeonTrees = [
    {
        id: "dg1",
        x: 260,
        y: 340,
        scale: 1.4,
        collide: true
    },
    {
        id: "dg2",
        x: 1180,
        y: 300,
        scale: 1.2
    },
    {
        id: "dg3",
        x: 1540,
        y: 620,
        scale: 1.5,
        collide: true
    }
];
const villageBuildings = [
    {
        id: "house1",
        x: 500,
        y: 540,
        w: 280,
        h: 200,
        label: "Дом старосты"
    },
    {
        id: "house2",
        x: 860,
        y: 720,
        w: 240,
        h: 180,
        label: "Кузница"
    },
    {
        id: "house3",
        x: 1180,
        y: 500,
        w: 260,
        h: 190,
        label: "Таверна"
    }
];
const villageTrees = [
    {
        id: "vl1",
        x: 300,
        y: 360,
        scale: 1.4,
        collide: true
    },
    {
        id: "vl2",
        x: 720,
        y: 300,
        scale: 1.2
    },
    {
        id: "vl3",
        x: 1340,
        y: 660,
        scale: 1.3,
        collide: true
    },
    {
        id: "vl4",
        x: 980,
        y: 980,
        scale: 1.1
    }
];
const villageRoads = [
    {
        x: 400,
        y: 660,
        w: 1200,
        h: 55
    }
];
const LOCATIONS = {
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
            {
                x: 1180,
                y: 1520,
                toLocation: "forest",
                toX: 300,
                toY: 140,
                label: "→ Тёмный лес"
            },
            {
                x: 1780,
                y: 680,
                toLocation: "plains",
                toX: 200,
                toY: 720,
                label: "→ Равнины"
            },
            {
                x: 420,
                y: 1080,
                toLocation: "swamp",
                toX: 1580,
                toY: 480,
                label: "→ Болото"
            },
            {
                x: 1920,
                y: 1380,
                toLocation: "hills",
                toX: 380,
                toY: 720,
                label: "→ Холмы"
            }
        ],
        spawn: {
            x: 1180,
            y: 1460
        },
        monsterSpawns: [],
        description: "Столица королевства. Здесь кипит жизнь."
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
            {
                x: 240,
                y: 160,
                toLocation: "city",
                toX: 1140,
                toY: 1400,
                label: "→ Ривендол"
            },
            {
                x: 1780,
                y: 460,
                toLocation: "ruins",
                toX: 480,
                toY: 880,
                label: "→ Руины"
            },
            {
                x: 460,
                y: 1640,
                toLocation: "swamp",
                toX: 1060,
                toY: 320,
                label: "→ Болото"
            },
            {
                x: 1820,
                y: 1680,
                toLocation: "dungeon",
                toX: 420,
                toY: 740,
                label: "→ Подземелье"
            }
        ],
        spawn: {
            x: 300,
            y: 180
        },
        monsterSpawns: [
            {
                id: "fm1",
                x: 560,
                y: 520,
                monster: monster("wolf")
            },
            {
                id: "fm2",
                x: 980,
                y: 420,
                monster: monster("wolf")
            },
            {
                id: "fm3",
                x: 1480,
                y: 560,
                monster: monster("spirit")
            },
            {
                id: "fm4",
                x: 740,
                y: 980,
                monster: monster("bandit")
            },
            {
                id: "fm5",
                x: 1200,
                y: 1080,
                monster: monster("bandit")
            },
            {
                id: "fm6",
                x: 1720,
                y: 940,
                monster: monster("ogre")
            },
            {
                id: "fm7",
                x: 520,
                y: 1480,
                monster: monster("spirit")
            },
            {
                id: "fm8",
                x: 1380,
                y: 1580,
                monster: monster("wolf")
            }
        ],
        description: "Мрачный лес, полный опасностей."
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
            {
                x: 200,
                y: 720,
                toLocation: "city",
                toX: 1720,
                toY: 720,
                label: "→ Ривендол"
            },
            {
                x: 2220,
                y: 520,
                toLocation: "mountains",
                toX: 480,
                toY: 720,
                label: "→ Горы"
            },
            {
                x: 1780,
                y: 1380,
                toLocation: "hills",
                toX: 720,
                toY: 480,
                label: "→ Холмы"
            },
            {
                x: 480,
                y: 480,
                toLocation: "ruins",
                toX: 1580,
                toY: 980,
                label: "→ Руины"
            }
        ],
        spawn: {
            x: 240,
            y: 720
        },
        monsterSpawns: [
            {
                id: "pm1",
                x: 720,
                y: 460,
                monster: monster("wolf")
            },
            {
                id: "pm2",
                x: 1340,
                y: 620,
                monster: monster("spirit")
            },
            {
                id: "pm3",
                x: 1920,
                y: 840,
                monster: monster("bandit")
            },
            {
                id: "pm4",
                x: 1040,
                y: 1180,
                monster: monster("ogre")
            }
        ],
        description: "Открытые равнины."
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
            {
                x: 380,
                y: 720,
                toLocation: "city",
                toX: 1880,
                toY: 1320,
                label: "→ Ривендол"
            },
            {
                x: 1780,
                y: 480,
                toLocation: "plains",
                toX: 2120,
                y: 940,
                label: "→ Равнины"
            },
            {
                x: 1920,
                y: 1580,
                toLocation: "lake",
                toX: 720,
                toY: 560,
                label: "→ Озеро"
            },
            {
                x: 720,
                y: 1820,
                toLocation: "village",
                toX: 1180,
                toY: 420,
                label: "→ Деревня"
            }
        ],
        spawn: {
            x: 420,
            y: 760
        },
        monsterSpawns: [
            {
                id: "hm1",
                x: 660,
                y: 420,
                monster: monster("spirit")
            },
            {
                id: "hm2",
                x: 1180,
                y: 720,
                monster: monster("wolf")
            },
            {
                id: "hm3",
                x: 1540,
                y: 980,
                monster: monster("bandit")
            },
            {
                id: "hm4",
                x: 880,
                y: 1380,
                monster: monster("ogre")
            }
        ],
        description: "Ветреные холмы."
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
            {
                x: 1580,
                y: 480,
                toLocation: "city",
                toX: 520,
                toY: 1120,
                label: "→ Ривендол"
            },
            {
                x: 360,
                y: 320,
                toLocation: "forest",
                toX: 480,
                toY: 1520,
                label: "→ Лес"
            },
            {
                x: 1780,
                y: 1380,
                toLocation: "dungeon",
                toX: 720,
                toY: 720,
                label: "→ Подземелье"
            },
            {
                x: 480,
                y: 1520,
                toLocation: "desert",
                toX: 1580,
                toY: 720,
                label: "→ Пески"
            }
        ],
        spawn: {
            x: 1580,
            y: 520
        },
        monsterSpawns: [
            {
                id: "sm1",
                x: 560,
                y: 660,
                monster: monster("spirit")
            },
            {
                id: "sm2",
                x: 1040,
                y: 520,
                monster: monster("wolf")
            },
            {
                id: "sm3",
                x: 1480,
                y: 980,
                monster: monster("bandit")
            },
            {
                id: "sm4",
                x: 780,
                y: 1380,
                monster: monster("ogre")
            }
        ],
        description: "Ядовитое болото."
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
            {
                x: 480,
                y: 720,
                toLocation: "plains",
                toX: 2120,
                toY: 560,
                label: "→ Равнины"
            },
            {
                x: 1780,
                y: 420,
                toLocation: "ruins",
                toX: 720,
                toY: 680,
                label: "→ Руины"
            }
        ],
        spawn: {
            x: 540,
            y: 760
        },
        monsterSpawns: [
            {
                id: "mm1",
                x: 720,
                y: 460,
                monster: monster("ogre")
            },
            {
                id: "mm2",
                x: 1180,
                y: 720,
                monster: monster("spirit")
            },
            {
                id: "mm3",
                x: 1540,
                y: 980,
                monster: monster("wolf")
            }
        ],
        description: "Суровые горы."
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
            {
                x: 480,
                y: 880,
                toLocation: "forest",
                toX: 1720,
                toY: 520,
                label: "→ Лес"
            },
            {
                x: 1580,
                y: 980,
                toLocation: "plains",
                toX: 520,
                toY: 480,
                label: "→ Равнины"
            },
            {
                x: 720,
                y: 680,
                toLocation: "mountains",
                toX: 1720,
                toY: 480,
                label: "→ Горы"
            }
        ],
        spawn: {
            x: 520,
            y: 940
        },
        monsterSpawns: [
            {
                id: "rm1",
                x: 720,
                y: 560,
                monster: monster("spirit")
            },
            {
                id: "rm2",
                x: 1180,
                y: 720,
                monster: monster("bandit")
            },
            {
                id: "rm3",
                x: 1540,
                y: 1080,
                monster: monster("ogre")
            }
        ],
        description: "Забытый храм."
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
            {
                x: 1580,
                y: 720,
                toLocation: "swamp",
                toX: 480,
                toY: 1480,
                label: "→ Болото"
            },
            {
                x: 480,
                y: 480,
                toLocation: "forest",
                toX: 1780,
                toY: 520,
                label: "→ Лес"
            }
        ],
        spawn: {
            x: 1620,
            y: 760
        },
        monsterSpawns: [
            {
                id: "dm1",
                x: 720,
                y: 560,
                monster: monster("bandit")
            },
            {
                id: "dm2",
                x: 1180,
                y: 720,
                monster: monster("spirit")
            },
            {
                id: "dm3",
                x: 1680,
                y: 980,
                monster: monster("ogre")
            }
        ],
        description: "Жаркие пески."
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
            {
                x: 720,
                y: 560,
                toLocation: "hills",
                toX: 1820,
                toY: 1520,
                label: "→ Холмы"
            },
            {
                x: 1580,
                y: 1380,
                toLocation: "village",
                toX: 720,
                toY: 480,
                label: "→ Деревня"
            }
        ],
        spawn: {
            x: 780,
            y: 620
        },
        monsterSpawns: [
            {
                id: "lm1",
                x: 660,
                y: 520,
                monster: monster("spirit")
            },
            {
                id: "lm2",
                x: 1180,
                y: 780,
                monster: monster("wolf")
            },
            {
                id: "lm3",
                x: 1540,
                y: 1040,
                monster: monster("bandit")
            }
        ],
        description: "Красивое озеро."
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
            {
                x: 720,
                y: 720,
                toLocation: "swamp",
                toX: 1720,
                toY: 1340,
                label: "→ Болото"
            },
            {
                x: 480,
                y: 1380,
                toLocation: "forest",
                toX: 1780,
                toY: 1580,
                label: "→ Лес"
            },
            {
                x: 1580,
                y: 480,
                toLocation: "village",
                toX: 1180,
                toY: 1380,
                label: "→ Деревня"
            }
        ],
        spawn: {
            x: 780,
            y: 780
        },
        monsterSpawns: [
            {
                id: "dd1",
                x: 720,
                y: 520,
                monster: monster("ogre")
            },
            {
                id: "dd2",
                x: 1180,
                y: 720,
                monster: monster("spirit")
            },
            {
                id: "dd3",
                x: 1540,
                y: 980,
                monster: monster("bandit")
            }
        ],
        description: "Мрачное подземелье."
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
            {
                x: 1180,
                y: 440,
                toLocation: "hills",
                toX: 720,
                toY: 1720,
                label: "→ Холмы"
            },
            {
                x: 720,
                y: 480,
                toLocation: "lake",
                toX: 1480,
                toY: 1380,
                label: "→ Озеро"
            },
            {
                x: 1580,
                y: 1380,
                toLocation: "dungeon",
                toX: 480,
                toY: 720,
                label: "→ Подземелье"
            }
        ],
        spawn: {
            x: 1180,
            y: 480
        },
        monsterSpawns: [
            {
                id: "vm1",
                x: 660,
                y: 620,
                monster: monster("wolf")
            },
            {
                id: "vm2",
                x: 1180,
                y: 820,
                monster: monster("spirit")
            },
            {
                id: "vm3",
                x: 1540,
                y: 1080,
                monster: monster("bandit")
            }
        ],
        description: "Мирная деревня."
    }
};
function rectsIntersect(a, b) {
    return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}
}),
"[project]/src/lib/game-server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getGameServer",
    ()=>getGameServer
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/http [external] (http, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2f$wrapper$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/socket.io/wrapper.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/game/world-data.ts [app-rsc] (ecmascript)");
;
;
;
// ==================== GAME SERVER ====================
class GameServer {
    io;
    httpServer;
    rooms = new Map();
    tickInterval = null;
    constructor(httpServer){
        this.httpServer = httpServer ?? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__["createServer"])();
        this.io = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2f$wrapper$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Server"](this.httpServer, {
            cors: {
                origin: "*",
                methods: [
                    "GET",
                    "POST"
                ]
            },
            path: "/api/socket"
        });
        this.setupSocketHandlers();
        this.startGameLoop();
        if (!httpServer) {
            const port = Number(process.env.MULTIPLAYER_PORT ?? 3101);
            this.httpServer.listen(port, "0.0.0.0", ()=>{
                console.log(`[MP] Socket server listening on port ${port}`);
            });
        }
    }
    setupSocketHandlers() {
        this.io.on("connection", (socket)=>{
            console.log(`[MP] Player connected: ${socket.id}`);
            // Join location room
            socket.on("join_location", ({ locationId, playerData })=>{
                this.joinPlayerToLocation(socket.id, locationId, playerData);
            });
            // Player movement
            socket.on("player_move", ({ x, y })=>{
                this.handlePlayerMove(socket.id, x, y);
            });
            socket.on("player_state_update", (playerData)=>{
                this.handlePlayerStateUpdate(socket.id, playerData);
            });
            // Player attacks mob
            socket.on("attack_mob", ({ mobId })=>{
                this.handleAttackMob(socket.id, mobId);
            });
            // Use ability
            socket.on("use_ability", ({ abilityId, targetId })=>{
                this.handleUseAbility(socket.id, abilityId, targetId);
            });
            // Disconnect
            socket.on("disconnect", ()=>{
                this.removePlayer(socket.id);
                console.log(`[MP] Player disconnected: ${socket.id}`);
            });
        });
    }
    joinPlayerToLocation(socketId, locationId, playerData) {
        // Leave previous rooms
        for (const room of this.rooms.values()){
            room.players.delete(socketId);
        }
        if (!this.rooms.has(locationId)) {
            this.createRoom(locationId);
        }
        const room = this.rooms.get(locationId);
        const player = {
            id: socketId,
            ...playerData,
            lastUpdate: Date.now()
        };
        room.players.set(socketId, player);
        // Send initial state to player
        const socket = this.io.sockets.sockets.get(socketId);
        if (socket) {
            socket.join(locationId);
            socket.emit("initial_state", {
                players: Array.from(room.players.values()),
                mobs: Array.from(room.mobs.values())
            });
        }
        // Broadcast new player to others in room
        this.io.to(locationId).emit("player_joined", player);
    }
    handlePlayerStateUpdate(socketId, playerData) {
        for (const room of this.rooms.values()){
            const player = room.players.get(socketId);
            if (!player) continue;
            const updatedPlayer = {
                ...player,
                ...playerData,
                id: socketId,
                lastUpdate: Date.now()
            };
            room.players.set(socketId, updatedPlayer);
            const hasPositionChange = typeof playerData.x === "number" || typeof playerData.y === "number" || typeof playerData.location === "string";
            if (hasPositionChange) {
                this.io.to(room.locationId).emit("player_moved", {
                    id: socketId,
                    x: updatedPlayer.x,
                    y: updatedPlayer.y,
                    location: updatedPlayer.location
                });
            }
            break;
        }
    }
    createRoom(locationId) {
        const location = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LOCATIONS"][locationId];
        if (!location) return;
        const mobs = new Map();
        for (const spawn of location.monsterSpawns){
            mobs.set(spawn.id, {
                spawnId: spawn.id,
                defId: spawn.monster.id,
                name: spawn.monster.name,
                level: spawn.monster.level,
                x: spawn.x,
                y: spawn.y,
                hp: spawn.monster.maxHp,
                maxHp: spawn.monster.maxHp,
                alive: true,
                aggroed: false,
                targetPlayerId: null,
                lastAttackAt: 0,
                respawnAt: null
            });
        }
        this.rooms.set(locationId, {
            locationId,
            players: new Map(),
            mobs,
            lastTick: Date.now()
        });
        console.log(`[MP] Created room for location: ${locationId}`);
    }
    handlePlayerMove(socketId, x, y) {
        for (const room of this.rooms.values()){
            const player = room.players.get(socketId);
            if (player) {
                player.x = x;
                player.y = y;
                player.lastUpdate = Date.now();
                // Broadcast to others in the same room
                this.io.to(room.locationId).emit("player_moved", {
                    id: socketId,
                    x,
                    y
                });
                break;
            }
        }
    }
    handleAttackMob(socketId, mobId) {
        for (const room of this.rooms.values()){
            const player = room.players.get(socketId);
            const mob = room.mobs.get(mobId);
            if (player && mob && mob.alive) {
                // Simple damage calculation (can be improved later)
                const damage = Math.floor(Math.random() * 25) + 15;
                mob.hp = Math.max(0, mob.hp - damage);
                if (mob.hp <= 0) {
                    mob.alive = false;
                    mob.respawnAt = Date.now() + 9000;
                    mob.aggroed = false;
                    mob.targetPlayerId = null;
                } else {
                    mob.aggroed = true;
                    mob.targetPlayerId = socketId;
                }
                // Broadcast mob update
                this.io.to(room.locationId).emit("mob_updated", {
                    spawnId: mob.spawnId,
                    hp: mob.hp,
                    alive: mob.alive,
                    aggroed: mob.aggroed
                });
                // Broadcast damage number
                this.io.to(room.locationId).emit("damage_number", {
                    x: mob.x,
                    y: mob.y,
                    damage,
                    isPlayer: false
                });
            }
        }
    }
    handleUseAbility(socketId, abilityId, targetId) {
        // Placeholder for ability handling
        console.log(`[MP] Player ${socketId} used ability ${abilityId}`);
    }
    removePlayer(socketId) {
        for (const room of this.rooms.values()){
            if (room.players.has(socketId)) {
                room.players.delete(socketId);
                this.io.to(room.locationId).emit("player_left", socketId);
                break;
            }
        }
    }
    // ==================== GAME LOOP ====================
    startGameLoop() {
        if (this.tickInterval) clearInterval(this.tickInterval);
        this.tickInterval = setInterval(()=>{
            this.tick();
        }, 100); // 10 ticks per second
    }
    tick() {
        const now = Date.now();
        for (const room of this.rooms.values()){
            // Mob AI and respawn
            for (const mob of room.mobs.values()){
                if (!mob.alive) {
                    if (mob.respawnAt && now >= mob.respawnAt) {
                        mob.alive = true;
                        mob.hp = mob.maxHp;
                        mob.x = this.getSpawnPosition(room.locationId, mob.spawnId).x;
                        mob.y = this.getSpawnPosition(room.locationId, mob.spawnId).y;
                        mob.aggroed = false;
                        mob.targetPlayerId = null;
                        mob.respawnAt = null;
                        this.io.to(room.locationId).emit("mob_updated", {
                            spawnId: mob.spawnId,
                            hp: mob.hp,
                            alive: true,
                            x: mob.x,
                            y: mob.y
                        });
                    }
                    continue;
                }
                // Simple mob AI (chase nearest player)
                if (mob.aggroed && mob.targetPlayerId) {
                    const target = room.players.get(mob.targetPlayerId);
                    if (target) {
                        const dx = target.x - mob.x;
                        const dy = target.y - mob.y;
                        const dist = Math.hypot(dx, dy);
                        if (dist > 60 && dist < 400) {
                            const speed = 1.8;
                            mob.x += dx / dist * speed;
                            mob.y += dy / dist * speed;
                            this.io.to(room.locationId).emit("mob_moved", {
                                spawnId: mob.spawnId,
                                x: mob.x,
                                y: mob.y
                            });
                        }
                    }
                }
            }
            // Broadcast full state every ~500ms
            if (now - room.lastTick > 500) {
                this.io.to(room.locationId).emit("full_state_update", {
                    players: Array.from(room.players.values()),
                    mobs: Array.from(room.mobs.values())
                });
                room.lastTick = now;
            }
        }
    }
    getSpawnPosition(locationId, spawnId) {
        const location = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$game$2f$world$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LOCATIONS"][locationId];
        const spawn = location?.monsterSpawns.find((s)=>s.id === spawnId);
        return spawn ? {
            x: spawn.x,
            y: spawn.y
        } : {
            x: 500,
            y: 500
        };
    }
    getIO() {
        return this.io;
    }
}
let gameServer = null;
function getGameServer(httpServer) {
    if (!gameServer && httpServer) {
        gameServer = new GameServer(httpServer);
    }
    return gameServer;
}
const __TURBOPACK__default__export__ = GameServer;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/game-server.ts [app-rsc] (ecmascript)");
;
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGameServer"])();
const metadata = {
    title: "Свет и Тьма — браузерная MMO",
    description: "Браузерная ролевая игра: ходьба по клику, способности, таланты, кузница, порталы между локациями."
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "ru",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: "bg-black text-white antialiased",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__116hjpf._.js.map