import { useState, useEffect, useRef } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql, SQLite } from "@codemirror/lang-sql";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { RotateCcw, Trash2, ArrowLeft, Play, Database, Table2, AlertTriangle, Loader2, Download, Copy, RefreshCw } from "lucide-react";
import { useI18n } from "@/hooks/useI18n";

const DEFAULT_SQL = `-- Welcome to SQL!
-- SQL is the language of databases

-- Let's start with a simple SELECT
SELECT * FROM users;

-- Create your own tables
CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  name TEXT,
  price REAL,
  category TEXT
);

-- Insert data
INSERT INTO products (name, price, category) VALUES
  ('Laptop', 999.99, 'Electronics'),
  ('Shirt', 29.99, 'Clothing'),
  ('Book', 14.99, 'Education');

-- Query the data
SELECT * FROM products WHERE price > 50;`;

const INITIAL_DATA = `-- Sample data to get you started
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT,
  email TEXT,
  country TEXT
);

INSERT INTO users (name, email, country) VALUES
  ('Alice', 'alice@example.com', 'USA'),
  ('Bob', 'bob@example.com', 'UK'),
  ('Charlie', 'charlie@example.com', 'Canada');

CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  total REAL,
  status TEXT,
  created_at TEXT
);

INSERT INTO orders (user_id, total, status, created_at) VALUES
  (1, 150.00, 'completed', '2024-01-15'),
  (2, 75.50, 'pending', '2024-01-16'),
  (1, 200.00, 'completed', '2024-01-17'),
  (3, 45.00, 'cancelled', '2024-01-18');`;

export default function SQLCompiler() {
  const navigate = useNavigate();
  const { t } = useI18n();
  const [code, setCode] = useState(DEFAULT_SQL);
  const [output, setOutput] = useState<{ type: "success" | "error" | "info"; message: string }[]>([]);
  const [results, setResults] = useState<Record<string, unknown[]> | null>(null);
  const [tables, setTables] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [executing, setExecuting] = useState(false);
  const dbRef = useRef<SQLite | null>(null);

  useEffect(() => {
    initDatabase();
    return () => {
      dbRef.current?.destroy();
    };
  }, []);

  const initDatabase = async () => {
    setLoading(true);
    try {
      const initSqlJs = (await import("@/lib/sql")).default;
      const SQL = await initSqlJs();
      const db = new SQL.Database();
      db.run(INITIAL_DATA);
      dbRef.current = db;
      updateTables(db);
      setOutput([{ type: "info", message: "Database initialized with sample data" }]);
    } catch (err) {
      setOutput([{ type: "error", message: `Failed to initialize database: ${err}` }]);
    }
    setLoading(false);
  };

  const updateTables = (db: SQLite) => {
    try {
      const result = db.exec("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'");
      if (result.length > 0) {
        setTables(result[0].values.map((v: unknown[]) => v[0] as string));
      } else {
        setTables([]);
      }
    } catch {
      setTables([]);
    }
  };

  const executeCode = () => {
    if (!dbRef.current) return;
    setExecuting(true);
    setOutput([]);
    setResults(null);

    try {
      const db = dbRef.current;
      const statements = code.split(";").filter((s) => s.trim());

      let rowsAffected = 0;
      const allResults: Record<string, unknown[]> = {};

      for (const stmt of statements) {
        if (!stmt.trim()) continue;
        try {
          if (stmt.trim().toUpperCase().startsWith("SELECT") || stmt.trim().toUpperCase().startsWith("PRAGMA")) {
            const result = db.exec(stmt);
            if (result.length > 0) {
              const tableName = result[0].columns[0] ? "result" : result[0].columns.join("_");
              const columns = result[0].columns;
              const rows = result[0].values.map((row: unknown[]) => {
                const obj: Record<string, unknown> = {};
                columns.forEach((col, i) => {
                  obj[col] = row[i];
                });
                return obj;
              });
              allResults[`Query ${Object.keys(allResults).length + 1}`] = rows;
            }
          } else {
            db.run(stmt);
            const changes = db.getRowsModified();
            rowsAffected += changes;
          }
        } catch (e) {
          setOutput((prev) => [...prev, { type: "error", message: `Error: ${e}` }]);
        }
      }

      if (rowsAffected > 0) {
        setOutput((prev) => [...prev, { type: "success", message: `${rowsAffected} row(s) affected` }]);
      }
      if (Object.keys(allResults).length > 0) {
        setResults(allResults);
      }
      updateTables(db);
    } catch (err) {
      setOutput((prev) => [...prev, { type: "error", message: `${err}` }]);
    }

    setExecuting(false);
  };

  const resetDatabase = () => {
    if (dbRef.current) {
      dbRef.current.close();
    }
    initDatabase();
    setCode(DEFAULT_SQL);
    setResults(null);
  };

  const clearOutput = () => {
    setOutput([]);
    setResults(null);
  };

  const exportCSV = (data: unknown[]) => {
    if (!data.length) return;
    const headers = Object.keys(data[0] as object);
    const csv = [headers.join(","), ...data.map((row) => headers.map((h) => (row as Record<string, unknown>)[h]).join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "query_result.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">{t("compiler.loading") || "Loading SQL engine..."}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Database className="h-6 w-6 text-[#4479A1]" />
              <span className="font-bold text-lg">SQL Playground</span>
              <span className="text-xs bg-[#4479A1]/20 text-[#4479A1] px-2 py-0.5 rounded">SQLite</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={resetDatabase}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset DB
            </Button>
            <Button size="sm" onClick={executeCode} disabled={executing}>
              {executing ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Play className="h-4 w-4 mr-2" />}
              Run Query
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Editor Panel */}
          <div className="space-y-4">
            <div className="border rounded-lg overflow-hidden">
              <CodeMirror
                value={code}
                height="400px"
                extensions={[sql()]}
                theme={oneDark}
                onChange={(val) => setCode(val)}
                className="text-sm"
              />
            </div>

            {/* Tables Panel */}
            <div className="border rounded-lg p-4 bg-card">
              <div className="flex items-center gap-2 mb-3">
                <Table2 className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium text-sm">Tables</span>
                <span className="text-xs text-muted-foreground">({tables.length})</span>
              </div>
              {tables.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {tables.map((table) => (
                    <Button key={table} variant="outline" size="sm" className="text-xs" onClick={() => setCode(`SELECT * FROM ${table} LIMIT 100;`)}>
                      {table}
                    </Button>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No tables yet. Create one!</p>
              )}
            </div>
          </div>

          {/* Output Panel */}
          <div className="space-y-4">
            {/* Query Output */}
            <div className="border rounded-lg p-4 bg-card min-h-[200px]">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-sm">Query Output</span>
                <Button variant="ghost" size="sm" onClick={clearOutput}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              {output.length > 0 ? (
                <div className="space-y-2">
                  {output.map((o, i) => (
                    <div key={i} className={`text-sm p-2 rounded ${o.type === "error" ? "bg-red-500/20 text-red-400" : o.type === "success" ? "bg-green-500/20 text-green-400" : "bg-blue-500/20 text-blue-400"}`}>
                      {o.type === "error" && <AlertTriangle className="h-4 w-4 inline mr-2" />}
                      {o.message}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">Run a query to see results</p>
              )}
            </div>

            {/* Results Tables */}
            {results && Object.entries(results).map(([key, data]) => (
              <div key={key} className="border rounded-lg overflow-hidden">
                <div className="flex items-center justify-between p-3 bg-muted/50">
                  <span className="font-medium text-sm">{key}</span>
                  {data.length > 0 && (
                    <Button variant="ghost" size="sm" onClick={() => exportCSV(data)}>
                      <Download className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/30">
                      <tr>
                        {data.length > 0 && Object.keys(data[0] as object).map((col) => (
                          <th key={col} className="px-3 py-2 text-left font-medium text-muted-foreground whitespace-nowrap">{col}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((row, i) => (
                        <tr key={i} className="border-t hover:bg-muted/20">
                          {Object.values(row as object).map((val, j) => (
                            <td key={j} className="px-3 py-2 whitespace-nowrap">{val === null ? <span className="text-muted-foreground italic">NULL</span> : String(val)}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-2 text-xs text-muted-foreground text-right">{data.length} row(s)</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}