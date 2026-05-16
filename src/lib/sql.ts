import initSqlJs, { Database as SqlJsDatabase } from "sql.js";

let SQL: Awaited<ReturnType<typeof initSqlJs>> | null = null;

export default async function initSql(): Promise<typeof SQL> {
  if (SQL) return SQL;

  SQL = await initSqlJs({
    locateFile: (file: string) => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.2/${file}`,
  });

  return SQL;
}

export type Database = SqlJsDatabase;