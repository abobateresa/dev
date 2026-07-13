import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

const databaseUrl = process.env.DATABASE_URL || "sqlite.db";

const globalForDb = globalThis as typeof globalThis & {
  __arenaNextJsSqliteDb?: Database.Database;
};

export const sqlite =
  globalForDb.__arenaNextJsSqliteDb ??
  new Database(databaseUrl);

if (process.env.NODE_ENV !== "production") {
  globalForDb.__arenaNextJsSqliteDb = sqlite;
}

export const db = drizzle(sqlite);
