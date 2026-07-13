import {
  sqliteTable,
  integer,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

export const users = sqliteTable(
  "users",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    username: text("username").notNull(),
    passwordHash: text("password_hash").notNull(),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull().$defaultFn(() => new Date()),
  },
  (table) => ({
    usernameIdx: uniqueIndex("users_username_idx").on(table.username),
  }),
);

export const sessions = sqliteTable("sessions", {
  token: text("token").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().$defaultFn(() => new Date()),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
});

export const characters = sqliteTable(
  "characters",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    name: text("name").notNull(),
    faction: text("faction").notNull(),
    race: text("race").notNull(),
    className: text("class_name").notNull(),
    level: integer("level").notNull().default(1),
    exp: integer("exp").notNull().default(0),
    gold: integer("gold").notNull().default(50),
    hp: integer("hp").notNull().default(100),
    mp: integer("mp").notNull().default(50),
    location: text("location").notNull().default("city"),
    posX: integer("pos_x").notNull().default(600),
    posY: integer("pos_y").notNull().default(600),
    talents: text("talents", { mode: "json" }).notNull().$defaultFn(() => ({})),
    equipment: text("equipment", { mode: "json" }).notNull().$defaultFn(() => ({})),
    inventory: text("inventory", { mode: "json" }).notNull().$defaultFn(() => ({})),
    settings: text("settings", { mode: "json" }).notNull().$defaultFn(() => ({})),
    createdAt: integer("created_at", { mode: "timestamp" }).notNull().$defaultFn(() => new Date()),
    updatedAt: integer("updated_at", { mode: "timestamp" }).notNull().$defaultFn(() => new Date()),
  },
  (table) => ({
    nameIdx: uniqueIndex("characters_name_idx").on(table.name),
  }),
);
