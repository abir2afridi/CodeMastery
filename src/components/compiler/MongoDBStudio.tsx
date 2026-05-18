import { useState, useRef } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Play, Database, RefreshCw, Code2, Table2, Terminal,
  ArrowLeft, Server, Layers, Search, BarChart3, Shield,
  GitBranch, FileJson
} from "lucide-react";

const DEFAULT_CODE = `// MongoDB Shell Demo
// MongoDB is a NoSQL document database

// Switch to a database (creates if not exists)
use('mydb');

// Create a collection
db.createCollection('users');

// Insert a single document
db.users.insertOne({
  name: "Alice",
  email: "alice@example.com",
  age: 28,
  status: "active",
  tags: ["admin", "premium"]
});

// Insert multiple documents
db.users.insertMany([
  { name: "Bob", email: "bob@example.com", age: 35, status: "active", tags: ["user"] },
  { name: "Charlie", email: "charlie@example.com", age: 22, status: "inactive", tags: ["user"] },
  { name: "Diana", email: "diana@example.com", age: 31, status: "active", tags: ["moderator"] }
]);

// Query all documents
db.users.find();

// Query with filter
db.users.find({ status: "active" });

// Query with projection
db.users.find({ status: "active" }, { name: 1, email: 1, _id: 0 });

// Update a document
db.users.updateOne(
  { name: "Alice" },
  { $set: { age: 29 } }
);

// Update multiple documents
db.users.updateMany(
  { status: "active" },
  { $inc: { age: 1 } }
);

// Delete a document
db.users.deleteOne({ name: "Charlie" });

// Aggregation pipeline
db.users.aggregate([
  { $match: { status: "active" } },
  { $group: { _id: "$status", count: { $sum: 1 }, avgAge: { $avg: "$age" } } },
  { $sort: { count: -1 } }
]);

// Create an index
db.users.createIndex({ email: 1 });

// Show databases and collections
show('dbs');
show('collections');`;

const DEMO_USERS = [
  { _id: "ObjectId('664a1b2c3d4e5f6a7b8c9d01')", name: "Alice", email: "alice@example.com", age: 29, status: "active", tags: ["admin", "premium"] },
  { _id: "ObjectId('664a1b2c3d4e5f6a7b8c9d02')", name: "Bob", email: "bob@example.com", age: 36, status: "active", tags: ["user"] },
  { _id: "ObjectId('664a1b2c3d4e5f6a7b8c9d03')", name: "Charlie", email: "charlie@example.com", age: 22, status: "inactive", tags: ["user"] },
  { _id: "ObjectId('664a1b2c3d4e5f6a7b8c9d04')", name: "Diana", email: "diana@example.com", age: 32, status: "active", tags: ["moderator"] },
];

let simulatedDb: Record<string, unknown[]> = {};

const resetSimulatedData = () => {
  simulatedDb = {
    users: JSON.parse(JSON.stringify(DEMO_USERS)),
  };
};

resetSimulatedData();

const formatJSON = (obj: unknown, indent = 2): string => {
  return JSON.stringify(obj, null, indent);
};

const stripQuotes = (str: string): string => {
  return str.replace(/^['"]|['"]$/g, "");
};

export default function MongoDBStudio() {
  const navigate = useNavigate();
  const [code, setCode] = useState(DEFAULT_CODE);
  const [output, setOutput] = useState<Array<{ type: string; content: string }>>([]);
  const [isRunning, setIsRunning] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  const executeCode = () => {
    setIsRunning(true);
    setOutput([]);
    resetSimulatedData();

    setTimeout(() => {
      const results: Array<{ type: string; content: string }> = [];
      let currentDb = "test";
      const seenCommands = new Set<string>();
      const lines = code.split("\n");
      let buffer = "";
      let braceDepth = 0;
      let bracketDepth = 0;
      let inString = false;
      let stringChar = "";

      const processStatement = (stmt: string) => {
        const s = stmt.trim();
        if (!s || s.startsWith("//")) return;

        const commandKey = s.replace(/\s+/g, " ").substring(0, 80);

        if (seenCommands.has(commandKey)) return;
        seenCommands.add(commandKey);

        try {
          // use('dbname')
          const useMatch = s.match(/^use\s*\(\s*['"](.+?)['"]\s*\)\s*;?\s*$/);
          if (useMatch) {
            currentDb = useMatch[1];
            results.push({ type: "info", content: `switched to db ${currentDb}` });
            return;
          }

          // show('dbs')
          if (/^show\s*\(\s*['"]dbs['"]\s*\)\s*;?\s*$/.test(s)) {
            results.push({
              type: "output",
              content: `admin      0.000GB\nconfig     0.000GB\nlocal      0.000GB\n${currentDb}       0.001GB`,
            });
            return;
          }

          // show('collections') or show collections
          if (/^show\s*\(\s*['"]collections['"]\s*\)\s*;?\s*$/.test(s) || /^show\s+collections\s*;?\s*$/.test(s)) {
            const colls = Object.keys(simulatedDb);
            results.push({
              type: "output",
              content: colls.length > 0 ? colls.join("\n") : "(no collections)",
            });
            return;
          }

          // db.createCollection
          if (/db\.\s*createCollection\s*\(/.test(s)) {
            const collMatch = s.match(/createCollection\s*\(\s*['"](.+?)['"]\s*\)/);
            if (collMatch && !simulatedDb[collMatch[1]]) {
              simulatedDb[collMatch[1]] = [];
            }
            results.push({ type: "output", content: "{ ok: 1 }" });
            return;
          }

          // db.collection.insertOne
          if (/\.insertOne\s*\(/.test(s)) {
            results.push({
              type: "output",
              content: formatJSON({
                acknowledged: true,
                insertedId: "ObjectId('664a1b2c3d4e5f6a7b8c9d99')",
              }),
            });
            return;
          }

          // db.collection.insertMany
          if (/\.insertMany\s*\(/.test(s)) {
            const countMatch = s.match(/insertMany\s*\(/);
            if (countMatch) {
              const arr = s.match(/\{[^}]+\}/g);
              const count = arr ? arr.length : 2;
              const ids: Record<string, string> = {};
              for (let i = 0; i < count; i++) {
                ids[String(i)] = `ObjectId('664a1b2c3d4e5f6a${String(i).padStart(12, "0")}')`;
              }
              results.push({
                type: "output",
                content: formatJSON({ acknowledged: true, insertedIds: ids }),
              });
            }
            return;
          }

          // db.collection.find()
          if (/\.find\s*\(\s*\)/.test(s)) {
            const coll = s.match(/db\.(\w+)\.find/);
            const collection = coll ? coll[1] : "users";
            const data = simulatedDb[collection] || [];
            if (data.length > 0) {
              results.push({
                type: "output",
                content: data.map((d: unknown, i: number) => `${i > 0 ? "\n" : ""}${formatJSON(d)}`).join("\n") + `\n\n${data.length} document(s) returned`,
              });
            } else {
              results.push({ type: "output", content: "(no documents)" });
            }
            return;
          }

          // db.collection.find({ ... })
          if (/\.find\s*\(\s*\{/.test(s) && !/\.find\s*\(\s*\{\s*\}/.test(s)) {
            const hasProjection = s.match(/\.find\s*\(\s*\{[^}]*\}\s*,\s*\{/);
            const coll = s.match(/db\.(\w+)\.find/);
            const collection = coll ? coll[1] : "users";
            const data = simulatedDb[collection] || [];

            if (hasProjection) {
              const projected = data.map((d: Record<string, unknown>) => ({
                name: d.name,
                email: d.email,
              }));
              results.push({
                type: "output",
                content: projected.map((d, i) => `${i > 0 ? "\n" : ""}${formatJSON(d)}`).join("\n") + `\n\n${projected.length} document(s) returned`,
              });
            } else {
              const filtered = data.filter((d: Record<string, unknown>) =>
                Object.entries(extractFilter(s)).every(([k, v]) => d[k] === v)
              );
              results.push({
                type: "output",
                content: filtered.length > 0
                  ? filtered.map((d, i) => `${i > 0 ? "\n" : ""}${formatJSON(d)}`).join("\n") + `\n\n${filtered.length} document(s) returned`
                  : "(no matching documents)",
              });
            }
            return;
          }

          // db.collection.find({}) (empty filter)
          if (/\.find\s*\(\s*\{\s*\}\s*\)/.test(s)) {
            const coll = s.match(/db\.(\w+)\.find/);
            const collection = coll ? coll[1] : "users";
            const data = simulatedDb[collection] || [];
            results.push({
              type: "output",
              content: data.map((d, i) => `${i > 0 ? "\n" : ""}${formatJSON(d)}`).join("\n") + `\n\n${data.length} document(s) returned`,
            });
            return;
          }

          // db.collection.aggregate
          if (/\.aggregate\s*\(/.test(s)) {
            const hasGroup = s.includes("$group") || s.includes("$match");
            if (hasGroup) {
              const results_arr = [
                { _id: "active", count: 3, avgAge: 30.67 },
                { _id: "inactive", count: 1, avgAge: 22 },
              ];
              results.push({
                type: "output",
                content: results_arr.map((r, i) => `${i > 0 ? "\n" : ""}${formatJSON(r)}`).join("\n") + `\n\n${results_arr.length} document(s) returned`,
              });
            } else {
              results.push({ type: "output", content: "[]\n\n0 document(s) returned" });
            }
            return;
          }

          // db.collection.updateOne
          if (/\.updateOne\s*\(/.test(s)) {
            results.push({
              type: "output",
              content: formatJSON({
                acknowledged: true,
                matchedCount: 1,
                modifiedCount: 1,
              }),
            });
            return;
          }

          // db.collection.updateMany
          if (/\.updateMany\s*\(/.test(s)) {
            results.push({
              type: "output",
              content: formatJSON({
                acknowledged: true,
                matchedCount: 3,
                modifiedCount: 3,
              }),
            });
            return;
          }

          // db.collection.deleteOne
          if (/\.deleteOne\s*\(/.test(s)) {
            results.push({
              type: "output",
              content: formatJSON({ acknowledged: true, deletedCount: 1 }),
            });
            return;
          }

          // db.collection.deleteMany
          if (/\.deleteMany\s*\(/.test(s)) {
            results.push({
              type: "output",
              content: formatJSON({ acknowledged: true, deletedCount: 2 }),
            });
            return;
          }

          // db.collection.createIndex
          if (/\.createIndex\s*\(/.test(s)) {
            results.push({
              type: "output",
              content: formatJSON({
                createdCollectionAutomatically: false,
                numIndexesBefore: 1,
                numIndexesAfter: 2,
                ok: 1,
              }),
            });
            return;
          }

          results.push({ type: "output", content: `Type "it" for more` });
        } catch {
          results.push({ type: "error", content: "SyntaxError: Unexpected token" });
        }
      };

      for (const rawLine of lines) {
        const line = rawLine;

        for (const ch of line) {
          if (inString) {
            if (ch === "\\") {
              buffer += ch;
              continue;
            }
            if (ch === stringChar) {
              inString = false;
            }
            buffer += ch;
            continue;
          }

          if (ch === "'" || ch === '"' || ch === "`") {
            inString = true;
            stringChar = ch;
            buffer += ch;
            continue;
          }

          if (ch === "{" || ch === "[") {
            if (ch === "{") braceDepth++;
            if (ch === "[") bracketDepth++;
            buffer += ch;
            continue;
          }

          if (ch === "}" || ch === "]") {
            if (ch === "}") braceDepth--;
            if (ch === "]") bracketDepth--;
            buffer += ch;
            continue;
          }

          buffer += ch;

          if (ch === ";" && braceDepth === 0 && bracketDepth === 0) {
            processStatement(buffer);
            buffer = "";
          }
        }

        if (buffer.trim() && braceDepth === 0 && bracketDepth === 0 && !buffer.trim().startsWith("//")) {
          processStatement(buffer);
          buffer = "";
        }
      }

      if (buffer.trim() && braceDepth === 0 && bracketDepth === 0 && !buffer.trim().startsWith("//")) {
        processStatement(buffer);
      }

      if (results.length === 0) {
        results.push({ type: "output", content: "Code executed successfully (simulated)" });
      }

      setOutput(results);
      setIsRunning(false);
    }, 400);
  };

  const handleReset = () => {
    setCode(DEFAULT_CODE);
    setOutput([]);
    resetSimulatedData();
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          <div className="flex items-center gap-2">
            <Database className="w-6 h-6 text-[#47A248]" />
            <h1 className="text-xl font-bold text-white">MongoDB Studio</h1>
            <span className="ml-1">🍃</span>
            <span className="text-xs bg-[#47A248]/20 text-[#47A248] px-2 py-0.5 rounded font-mono">mongosh 7.0</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={handleReset}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Reset
          </Button>
          <Button
            onClick={executeCode}
            disabled={isRunning}
            className="bg-[#47A248] text-white hover:bg-[#47A248]/80"
          >
            <Play className="w-4 h-4 mr-2" />
            {isRunning ? "Running..." : "Execute"}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left: Editor + Terminal Output */}
        <div className="w-1/2 flex flex-col border-r border-gray-700">
          {/* Editor header */}
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
            <Code2 className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">MongoDB Shell</span>
            <span className="ml-2 text-xs text-gray-500">(JavaScript syntax)</span>
          </div>

          {/* CodeMirror Editor */}
          <div className="flex-1 overflow-auto">
            <CodeMirror
              value={code}
              height="100%"
              theme={oneDark}
              extensions={[javascript()]}
              onChange={(value) => setCode(value)}
              className="h-full text-base"
            />
          </div>

          {/* Terminal Output */}
          <div className="h-56 bg-gray-850 border-t border-gray-700" style={{ backgroundColor: "#1a1d23" }}>
            <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-700 bg-gray-800">
              <Terminal className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">mongosh Output</span>
              {output.length > 0 && (
                <span className="text-xs text-gray-500 ml-auto">{output.length} result(s)</span>
              )}
            </div>
            <div ref={outputRef} className="p-3 font-mono text-xs overflow-auto h-[calc(100%-36px)] space-y-3">
              {output.length > 0 ? (
                output.map((item, index) => (
                  <div key={index}>
                    <div className="text-gray-500 mb-0.5 text-[10px]">&gt;</div>
                    <div
                      className={`whitespace-pre-wrap p-2 rounded ${
                        item.type === "error"
                          ? "bg-red-500/20 text-red-400 border border-red-500/30"
                          : item.type === "info"
                          ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          : "bg-gray-800/80 text-[#e6e6e6] border border-gray-700/50"
                      }`}
                    >
                      {item.content}
                    </div>
                  </div>
                ))
              ) : (
                <span className="text-gray-500">Run code to see mongosh output...</span>
              )}
            </div>
          </div>
        </div>

        {/* Right: Quick Reference */}
        <div className="w-1/2 flex flex-col">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
            <FileJson className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">MongoDB Quick Reference</span>
          </div>
          <div className="flex-1 p-4 overflow-auto text-gray-300">
            <div className="space-y-4">
              {/* CRUD Operations */}
              <div>
                <h3 className="font-semibold text-[#47A248] mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  CRUD Operations
                </h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`db.collection.insertOne(<doc>)
db.collection.insertMany([<docs>])

db.collection.find(<filter>, <projection>)

db.collection.updateOne(<filter>, <update>)
db.collection.updateMany(<filter>, <update>)
db.collection.replaceOne(<filter>, <doc>)

db.collection.deleteOne(<filter>)
db.collection.deleteMany(<filter>)`}
                </pre>
              </div>

              {/* Query Operators */}
              <div>
                <h3 className="font-semibold text-[#47A248] mb-2 flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  Query Operators
                </h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`$eq, $ne       # Equal / Not equal
$gt, $gte      # Greater than (or equal)
$lt, $lte      # Less than (or equal)
$in, $nin      # In array / Not in array
$regex         # Pattern matching
$exists        # Field exists
$type          # Field type check
$and, $or, $not # Logical operators`}
                </pre>
              </div>

              {/* Aggregation Stages */}
              <div>
                <h3 className="font-semibold text-[#47A248] mb-2 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Aggregation Stages
                </h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`$match   # Filter documents
$group   # Group by expression
$project # Reshape documents
$sort    # Sort documents
$limit   # Limit documents
$skip    # Skip documents
$unwind  # Deconstruct arrays
$lookup  # Join collections
$addFields  # Add computed fields
$count   # Count documents`}
                </pre>
              </div>

              {/* Index Types */}
              <div>
                <h3 className="font-semibold text-[#47A248] mb-2 flex items-center gap-2">
                  <GitBranch className="w-4 h-4" />
                  Index Types
                </h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`Single:       db.coll.createIndex({ field: 1 })
Compound:     db.coll.createIndex({ a: 1, b: -1 })
Multikey:     db.coll.createIndex({ tags: 1 })
Text:         db.coll.createIndex({ desc: "text" })
Geospatial:   db.coll.createIndex({ loc: "2dsphere" })
Hashed:       db.coll.createIndex({ field: "hashed" })
TTL:          db.coll.createIndex({ ts: 1 }, { expireAfterSeconds: 3600 })`}
                </pre>
              </div>

              {/* Data Types */}
              <div>
                <h3 className="font-semibold text-[#47A248] mb-2 flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  Data Types
                </h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`ObjectId("<hex>")     # Unique identifier
ISODate("<iso>")      # Date/time
NumberLong(<n>)       # 64-bit integer
NumberDecimal("<n>")  # High-precision decimal
Binary("<data>", <t>) # Binary data
UUID("<hex>")         # UUID
Timestamp(<t>, <i>)   # Timestamp
MinKey / MaxKey       # Comparison bounds
Null                  # Null value`}
                </pre>
              </div>

              {/* Shell Commands */}
              <div>
                <h3 className="font-semibold text-[#47A248] mb-2 flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  Shell Commands
                </h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`use(<db>)            # Switch database
show('dbs')          # List databases
show('collections')  # List collections
show('tables')       # List collections (SQL)
db.dropDatabase()    # Drop current database
db.stats()           # Database statistics
db.help()            # Database help`}
                </pre>
              </div>

              {/* Update Operators */}
              <div>
                <h3 className="font-semibold text-[#47A248] mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Update Operators
                </h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`$set       # Set field value
$unset     # Remove field
$inc       # Increment field
$mul       # Multiply field
$push      # Add to array
$pull      # Remove from array
$addToSet  # Add if not exists
$rename    # Rename field
$min/$max  # Update if less/greater`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const extractFilter = (s: string): Record<string, string> => {
  const filter: Record<string, string> = {};
  const keyMatch = s.match(/(\w+):\s*['"](.+?)['"]/);
  if (keyMatch) {
    filter[keyMatch[1]] = keyMatch[2];
  }
  return filter;
};
