module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/db/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db,
    "sqlite",
    ()=>sqlite
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$better$2d$sqlite3$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/better-sqlite3/driver.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$better$2d$sqlite3$29$__ = __turbopack_context__.i("[externals]/better-sqlite3 [external] (better-sqlite3, cjs, [project]/node_modules/better-sqlite3)");
;
;
const databaseUrl = process.env.DATABASE_URL || "sqlite.db";
const globalForDb = globalThis;
const sqlite = globalForDb.__arenaNextJsSqliteDb ?? new __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$better$2d$sqlite3$29$__["default"](databaseUrl);
if ("TURBOPACK compile-time truthy", 1) {
    globalForDb.__arenaNextJsSqliteDb = sqlite;
}
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$better$2d$sqlite3$2f$driver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["drizzle"])(sqlite);
}),
"[project]/src/db/schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "characters",
    ()=>characters,
    "sessions",
    ()=>sessions,
    "users",
    ()=>users
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sqlite-core/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sqlite-core/columns/integer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sqlite-core/columns/text.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sqlite-core/indexes.js [app-route] (ecmascript)");
;
const users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sqliteTable"])("users", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("id").primaryKey({
        autoIncrement: true
    }),
    username: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("username").notNull(),
    passwordHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("password_hash").notNull(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("created_at", {
        mode: "timestamp"
    }).notNull().$defaultFn(()=>new Date())
}, (table)=>({
        usernameIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uniqueIndex"])("users_username_idx").on(table.username)
    }));
const sessions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sqliteTable"])("sessions", {
    token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("token").primaryKey(),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("user_id").notNull().references(()=>users.id, {
        onDelete: "cascade"
    }),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("created_at", {
        mode: "timestamp"
    }).notNull().$defaultFn(()=>new Date()),
    expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("expires_at", {
        mode: "timestamp"
    }).notNull()
});
const characters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sqliteTable"])("characters", {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("id").primaryKey({
        autoIncrement: true
    }),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("user_id").notNull().references(()=>users.id, {
        onDelete: "cascade"
    }),
    name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("name").notNull(),
    faction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("faction").notNull(),
    race: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("race").notNull(),
    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("class_name").notNull(),
    level: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("level").notNull().default(1),
    exp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("exp").notNull().default(0),
    gold: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("gold").notNull().default(50),
    hp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("hp").notNull().default(100),
    mp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("mp").notNull().default(50),
    location: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("location").notNull().default("city"),
    posX: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("pos_x").notNull().default(600),
    posY: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("pos_y").notNull().default(600),
    talents: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("talents", {
        mode: "json"
    }).notNull().$defaultFn(()=>({})),
    equipment: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("equipment", {
        mode: "json"
    }).notNull().$defaultFn(()=>({})),
    inventory: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("inventory", {
        mode: "json"
    }).notNull().$defaultFn(()=>({})),
    settings: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("settings", {
        mode: "json"
    }).notNull().$defaultFn(()=>({})),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("created_at", {
        mode: "timestamp"
    }).notNull().$defaultFn(()=>new Date()),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("updated_at", {
        mode: "timestamp"
    }).notNull().$defaultFn(()=>new Date())
}, (table)=>({
        nameIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$indexes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["uniqueIndex"])("characters_name_idx").on(table.name)
    }));
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SESSION_COOKIE",
    ()=>SESSION_COOKIE,
    "clearSessionCookie",
    ()=>clearSessionCookie,
    "createSession",
    ()=>createSession,
    "getCurrentUser",
    ()=>getCurrentUser,
    "getSessionToken",
    ()=>getSessionToken,
    "hashPassword",
    ()=>hashPassword,
    "setSessionCookie",
    ()=>setSessionCookie,
    "verifyPassword",
    ()=>verifyPassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/schema.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
const SESSION_COOKIE = "lad_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 30; // 30 days
async function hashPassword(password) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(password, 10);
}
async function verifyPassword(password, hash) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(password, hash);
}
async function createSession(userId) {
    const token = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomBytes"])(32).toString("hex");
    const expiresAt = new Date(Date.now() + SESSION_TTL_MS);
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessions"]).values({
        token,
        userId,
        expiresAt
    });
    // best-effort cleanup of expired sessions
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessions"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["lt"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessions"].expiresAt, new Date())).catch(()=>{});
    return token;
}
async function setSessionCookie(token) {
    const store = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    store.set(SESSION_COOKIE, token, {
        httpOnly: true,
        sameSite: "lax",
        secure: ("TURBOPACK compile-time value", "development") === "production",
        path: "/",
        maxAge: SESSION_TTL_MS / 1000
    });
}
async function clearSessionCookie() {
    const store = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    store.delete(SESSION_COOKIE);
}
async function getCurrentUser() {
    const store = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const token = store.get(SESSION_COOKIE)?.value;
    if (!token) return null;
    const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"].id,
        username: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"].username,
        expiresAt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessions"].expiresAt
    }).from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessions"]).innerJoin(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessions"].userId, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["users"].id)).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sessions"].token, token)).limit(1);
    const row = rows[0];
    if (!row) return null;
    if (row.expiresAt.getTime() < Date.now()) return null;
    return {
        id: row.id,
        username: row.username
    };
}
async function getSessionToken() {
    const store = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    return store.get(SESSION_COOKIE)?.value ?? null;
}
}),
"[project]/src/lib/game-data.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/app/api/characters/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/db/schema.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/game-data.ts [app-route] (ecmascript)");
;
;
;
;
;
const dynamic = "force-dynamic";
async function GET() {
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentUser"])();
    if (!user) return Response.json({
        error: "Не авторизован."
    }, {
        status: 401
    });
    const chars = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["characters"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["characters"].userId, user.id));
    return Response.json({
        characters: chars
    });
}
async function POST(req) {
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentUser"])();
    if (!user) return Response.json({
        error: "Не авторизован."
    }, {
        status: 401
    });
    try {
        const body = await req.json();
        const name = String(body.name ?? "").trim();
        const faction = String(body.faction ?? "");
        const race = String(body.race ?? "");
        const className = String(body.className ?? "");
        if (name.length < 2 || name.length > 16 || !/^[a-zA-Zа-яА-Я0-9_ ]+$/.test(name)) {
            return Response.json({
                error: "Имя должно быть 2-16 символов."
            }, {
                status: 400
            });
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FACTIONS"].some((f)=>f.id === faction)) {
            return Response.json({
                error: "Некорректная фракция."
            }, {
                status: 400
            });
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RACES"][faction].some((r)=>r.id === race)) {
            return Response.json({
                error: "Некорректная раса."
            }, {
                status: 400
            });
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CLASSES"].some((c)=>c.id === className)) {
            return Response.json({
                error: "Некорректный класс."
            }, {
                status: 400
            });
        }
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["characters"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["characters"].name, name)).limit(1);
        if (existing.length > 0) {
            return Response.json({
                error: "Такое имя персонажа уже занято."
            }, {
                status: 409
            });
        }
        const countRows = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["characters"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["characters"].userId, user.id));
        if (countRows.length >= 5) {
            return Response.json({
                error: "Достигнут лимит персонажей (5)."
            }, {
                status: 400
            });
        }
        const inserted = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$db$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["characters"]).values({
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
            equipment: {
                weapon: 0,
                armor: 0,
                amulet: 0
            },
            inventory: {
                potionsHp: 3,
                potionsMp: 3
            },
            settings: {}
        }).returning();
        return Response.json({
            character: inserted[0]
        });
    } catch (err) {
        console.error(err);
        return Response.json({
            error: "Не удалось создать персонажа."
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0i~tsdl._.js.map