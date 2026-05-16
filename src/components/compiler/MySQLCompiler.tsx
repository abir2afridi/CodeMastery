import { useState, useEffect, useRef } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql, SQLite } from "@codemirror/lang-sql";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Play, Database, Table2, AlertTriangle, Loader2, Download, RefreshCw, Settings, User, Activity } from "lucide-react";

const DEFAULT_MYSQL = `-- Welcome to MySQL!
-- MySQL is the world's most popular open-source database

-- Show databases
SHOW DATABASES;

-- Create a database
CREATE DATABASE shop;
USE shop;

-- Create tables with MySQL-specific features
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Insert sample data
INSERT INTO users (username, email) VALUES
  ('admin', 'admin@shop.com'),
  ('customer1', 'customer1@shop.com');

-- Query users
SELECT * FROM users;

-- Create products table
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock INT DEFAULT 0,
  category ENUM('electronics', 'clothing', 'books')
) ENGINE=InnoDB;

INSERT INTO products (name, price, stock, category) VALUES
  ('Laptop', 999.99, 50, 'electronics'),
  ('T-Shirt', 29.99, 100, 'clothing'),
  ('Novel', 14.99, 200, 'books');

-- MySQL-specific: EXPLAIN for query analysis
EXPLAIN SELECT * FROM products WHERE price > 50;`;

const INITIAL_DATA = `-- Initialize sample database
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  status ENUM('active', 'inactive') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (username, email, status) VALUES
  ('alice', 'alice@example.com', 'active'),
  ('bob', 'bob@example.com', 'active'),
  ('charlie', 'charlie@example.com', 'inactive');

CREATE TABLE IF NOT EXISTS orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  status ENUM('pending', 'completed', 'cancelled') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO orders (user_id, total, status) VALUES
  (1, 150.00, 'completed'),
  (2, 75.50, 'pending'),
  (1, 200.00, 'completed'),
  (3, 45.00, 'cancelled');

CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  category VARCHAR(50)
);

INSERT INTO products (name, price, category) VALUES
  ('Laptop', 999.99, 'electronics'),
  ('Mouse', 29.99, 'electronics'),
  ('Shirt', 19.99, 'clothing'),
  ('Book', 14.99, 'books');`;

export default function MySQLCompiler() {
  const navigate = useNavigate();
  const [code, setCode] = useState(DEFAULT_MYSQL);
  const [output, setOutput] = useState<{ type: "success" | "error" | "info" | "explain"; message: string }[]>([]);
  const [results, setResults] = useState<Record<string, unknown[]> | null>(null);
  const [tables, setTables] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [executing, setExecuting] = useState(false);
  const [activeTab, setActiveTab] = useState<"query" | "admin">("query");
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
      setOutput([{ type: "info", message: "MySQL server simulation ready (SQLite engine)" }]);
    } catch (err) {
      setOutput([{ type: "error", message: `Failed to initialize: ${err}` }]);
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
    const newOutput: { type: "success" | "error" | "info" | "explain"; message: string }[] = [];
    setResults(null);

    try {
      const db = dbRef.current;
      const statements = code.split(";").filter((s) => s.trim());
      let rowsAffected = 0;
      const allResults: Record<string, unknown[]> = {};

      for (const stmt of statements) {
        if (!stmt.trim()) continue;
        const stmtUpper = stmt.trim().toUpperCase();

        try {
          if (stmtUpper.startsWith("SELECT") || stmtUpper.startsWith("SHOW") || stmtUpper.startsWith("DESCRIBE") || stmtUpper.startsWith("EXPLAIN") || stmtUpper.startsWith("PRAGMA")) {
            const result = db.exec(stmt);
            if (result.length > 0) {
              if (stmtUpper.startsWith("EXPLAIN")) {
                newOutput.push({ type: "explain", message: `📊 Query Plan (simulated EXPLAIN)\n\nNote: Full EXPLAIN requires MySQL server. This is a simulation.` });
              }
              const columns = result[0].columns;
              const rows = result[0].values.map((row: unknown[]) => {
                const obj: Record<string, unknown> = {};
                columns.forEach((col, i) => { obj[col] = row[i]; });
                return obj;
              });
              allResults[`Query ${Object.keys(allResults).length + 1}`] = rows;
            } else {
              newOutput.push({ type: "info", message: "Empty result set" });
            }
          } else if (stmtUpper.startsWith("USE")) {
            newOutput.push({ type: "info", message: `Database changed (simulated: ${stmt.replace(/USE/i, '').trim()})` });
          } else if (stmtUpper.startsWith("CREATE DATABASE")) {
            newOutput.push({ type: "success", message: `Database created (simulated)` });
          } else {
            db.run(stmt);
            const changes = db.getRowsModified();
            rowsAffected += changes;
          }
        } catch (e) {
          newOutput.push({ type: "error", message: `Error: ${e}` });
        }
      }

      if (rowsAffected > 0) {
        newOutput.push({ type: "success", message: `${rowsAffected} row(s) affected` });
      }
      if (Object.keys(allResults).length > 0) {
        setResults(allResults);
      }
      updateTables(db);
    } catch (err) {
      newOutput.push({ type: "error", message: `${err}` });
    }

    setOutput(newOutput);
    setExecuting(false);
  };

  const resetDatabase = () => {
    if (dbRef.current) dbRef.current.close();
    initDatabase();
    setCode(DEFAULT_MYSQL);
    setResults(null);
  };

  const exportCSV = (data: unknown[]) => {
    if (!data.length) return;
    const headers = Object.keys(data[0] as object);
    const rows = data.map((row) => headers.map((h) => (row as Record<string, unknown>)[h] ?? "").join(","));
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mysql_result.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-[#00758F] mx-auto mb-4" />
          <p className="text-muted-foreground">Starting MySQL server...</p>
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
              <Database className="h-6 w-6 text-[#00758F]" />
              <span className="font-bold text-lg">MySQL Playground</span>
              <span className="text-xs bg-[#00758F]/20 text-[#00758F] px-2 py-0.5 rounded">MySQL 8.0</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={resetDatabase}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset
            </Button>
            <Button size="sm" className="bg-[#00758F] hover:bg-[#00758F]/80" onClick={executeCode} disabled={executing}>
              {executing ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Play className="h-4 w-4 mr-2" />}
              Execute
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex gap-4">
            <button onClick={() => setActiveTab("query")} className={`py-2 px-4 text-sm font-medium border-b-2 ${activeTab === "query" ? "border-[#00758F] text-[#00758F]" : "border-transparent"}`}>
              <Play className="h-4 w-4 inline mr-2" />Query Editor
            </button>
            <button onClick={() => setActiveTab("admin")} className={`py-2 px-4 text-sm font-medium border-b-2 ${activeTab === "admin" ? "border-[#00758F] text-[#00758F]" : "border-transparent"}`}>
              <Settings className="h-4 w-4 inline mr-2" />Admin Panel
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4">
        {activeTab === "query" ? (
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
                  <p className="text-sm text-muted-foreground">No tables</p>
                )}
              </div>
            </div>

            {/* Output Panel */}
            <div className="space-y-4">
              <div className="border rounded-lg p-4 bg-card min-h-[200px]">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-sm">Output</span>
                </div>
                {output.length > 0 ? (
                  <div className="space-y-2 text-sm font-mono">
                    {output.map((o, i) => (
                      <div key={i} className={`p-2 rounded whitespace-pre-wrap ${o.type === "error" ? "bg-red-500/20 text-red-400" : o.type === "success" ? "bg-green-500/20 text-green-400" : o.type === "explain" ? "bg-[#00758F]/20 text-[#00758F]" : "bg-blue-500/20 text-blue-400"}`}>
                        {o.type === "error" && <AlertTriangle className="h-4 w-4 inline mr-2" />}
                        {o.message}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">Run a query</p>
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
        ) : (
          /* Admin Panel */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4 bg-card">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="h-5 w-5 text-[#00758F]" />
                <span className="font-medium">Server Status</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>Status:</span><span className="text-green-500">Running</span></div>
                <div className="flex justify-between"><span>Version:</span><span>8.0 (Simulated)</span></div>
                <div className="flex justify-between"><span>Connections:</span><span>1</span></div>
                <div className="flex justify-between"><span>Uptime:</span><span>Session</span></div>
              </div>
            </div>
            <div className="border rounded-lg p-4 bg-card">
              <div className="flex items-center gap-2 mb-4">
                <User className="h-5 w-5 text-[#00758F]" />
                <span className="font-medium">Users</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>root</span><span>ALL PRIVILEGES</span></div>
                <div className="flex justify-between"><span>alice</span><span>SELECT,INSERT</span></div>
                <div className="flex justify-between"><span>bob</span><span>SELECT</span></div>
              </div>
            </div>
            <div className="border rounded-lg p-4 bg-card">
              <div className="flex items-center gap-2 mb-4">
                <Database className="h-5 w-5 text-[#00758F]" />
                <span className="font-medium">Databases</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span>information_schema</span><span>System</span></div>
                <div className="flex justify-between"><span>mysql</span><span>System</span></div>
                <div className="flex justify-between"><span>shop</span><span>Custom</span></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}