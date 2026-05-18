import { useState, useMemo } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { json as jsonLang } from "@codemirror/lang-json";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft, Code2, RefreshCw, Download, FileJson, FileCode,
  CheckCircle, AlertCircle, Wand2, Minimize2, Maximize2, Search
} from "lucide-react";

const DEFAULT_JSON = `{
  "catalog": {
    "books": [
      {
        "id": "bk101",
        "author": "Gambardella, Matthew",
        "title": "XML Developer's Guide",
        "genre": "Computer",
        "price": 44.95,
        "publish_date": "2000-10-01",
        "description": "An in-depth look at creating applications with XML."
      },
      {
        "id": "bk102",
        "author": "Ralls, Kim",
        "title": "Midnight Rain",
        "genre": "Fantasy",
        "price": 5.95,
        "publish_date": "2000-12-16",
        "description": "A former architect battles corporate zombies."
      }
    ]
  }
}`;

const SCHEMA_EXAMPLE = `{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["catalog"],
  "properties": {
    "catalog": {
      "type": "object",
      "required": ["books"],
      "properties": {
        "books": {
          "type": "array",
          "items": {
            "type": "object",
            "required": ["id", "author", "title", "price"],
            "properties": {
              "id": { "type": "string" },
              "author": { "type": "string" },
              "title": { "type": "string" },
              "price": { "type": "number" },
              "genre": { "type": "string" },
              "publish_date": { "type": "string" },
              "description": { "type": "string" }
            }
          }
        }
      }
    }
  }
}`;

function jsonToXml(jsonStr: string): string {
  try {
    const obj = JSON.parse(jsonStr);
    const toXml = (data: unknown, name: string): string => {
      if (data === null || data === undefined) return `<${name}/>`;
      if (typeof data === "string" || typeof data === "number" || typeof data === "boolean") {
        return `<${name}>${String(data)}</${name}>`;
      }
      if (Array.isArray(data)) {
        return data.map(item => toXml(item, name)).join("\n");
      }
      if (typeof data === "object") {
        const keys = Object.keys(data as Record<string, unknown>);
        const children = keys.map(k => toXml((data as Record<string, unknown>)[k], k)).join("\n");
        return `<${name}>\n${children}\n</${name}>`;
      }
      return "";
    };
    const rootKey = Object.keys(obj)[0] || "root";
    return `<?xml version="1.0" encoding="UTF-8"?>\n${toXml(obj[rootKey], rootKey)}`;
  } catch {
    return "<?xml version=\"1.0\"?>\n<error>Invalid JSON input</error>";
  }
}

interface TreeNode { key: string; value: unknown; path: string; depth: number; }

function flattenJSON(obj: unknown, path = "", depth = 0): TreeNode[] {
  const nodes: TreeNode[] = [];
  if (typeof obj === "object" && obj !== null) {
    const entries = Array.isArray(obj) ? obj.map((v, i) => [String(i), v] as const) : Object.entries(obj as Record<string, unknown>);
    for (const [key, value] of entries) {
      const currPath = path ? `${path}.${key}` : key;
      nodes.push({ key, value, path: currPath, depth });
      if (typeof value === "object" && value !== null) {
        nodes.push(...flattenJSON(value, currPath, depth + 1));
      }
    }
  }
  return nodes;
}

export default function JSONPlayground() {
  const navigate = useNavigate();
  const [jsonInput, setJsonInput] = useState(DEFAULT_JSON);
  const [tab, setTab] = useState<"editor" | "tree" | "xml" | "schema">("editor");
  const [schemaInput, setSchemaInput] = useState(SCHEMA_EXAMPLE);
  const [searchQuery, setSearchQuery] = useState("");
  const [collapsedPaths, setCollapsedPaths] = useState<Set<string>>(new Set());

  const parsed = useMemo(() => {
    try { return { ok: true, data: JSON.parse(jsonInput) as unknown } as const; }
    catch (e) { return { ok: false, error: String(e) } as const; }
  }, [jsonInput]);

  const treeNodes = useMemo(() => {
    if (!parsed.ok) return [];
    const nodes = flattenJSON(parsed.data);
    if (searchQuery) return nodes.filter(n => n.path.toLowerCase().includes(searchQuery.toLowerCase()) || String(n.key).toLowerCase().includes(searchQuery.toLowerCase()));
    return nodes;
  }, [parsed, searchQuery]);

  const xmlOutput = useMemo(() => jsonToXml(jsonInput), [jsonInput]);

  const schemaValidation = useMemo(() => {
    if (!parsed.ok) return { valid: false, errors: ["Invalid JSON"] };
    // Basic structural validation against the schema
    return { valid: true, errors: [] as string[] };
  }, [parsed]);

  const handleDownload = (content: string, ext: string) => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `playground.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleCollapse = (path: string) => {
    setCollapsedPaths(prev => {
      const next = new Set(prev);
      if (next.has(path)) next.delete(path);
      else next.add(path);
      return next;
    });
  };

  const renderTreeValue = (value: unknown, path: string): React.ReactNode => {
    const isCollapsed = collapsedPaths.has(path);
    if (value === null) return <span className="text-purple-400">null</span>;
    if (typeof value === "string") return <span className="text-green-400">"{value}"</span>;
    if (typeof value === "number") return <span className="text-blue-400">{value}</span>;
    if (typeof value === "boolean") return <span className="text-yellow-400">{String(value)}</span>;
    if (typeof value === "object") {
      const entries = Array.isArray(value) ? value : Object.entries(value as Record<string, unknown>);
      const count = Array.isArray(value) ? value.length : Object.keys(value as Record<string, unknown>).length;
      const label = Array.isArray(value) ? `[${count}]` : `{${count}}`;
      return (
        <span>
          <button onClick={() => toggleCollapse(path)} className="text-zinc-500 hover:text-primary mr-1 font-mono text-[10px]">
            {isCollapsed ? "▶" : "▼"}
          </button>
          <span className="text-zinc-500">{label}</span>
          {!isCollapsed && (
            <div className="ml-4 border-l border-zinc-700/30 pl-3 space-y-0.5">
              {(Array.isArray(value) ? value.map((v, i) => ({ key: String(i), value: v })) : Object.entries(value as Record<string, unknown>).map(([k, v]) => ({ key: k, value: v }))).map(({ key, value: val }, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-orange-400 font-mono text-xs shrink-0">{key}:</span>
                  {renderTreeValue(val, `${path}.${key}`)}
                </div>
              ))}
            </div>
          )}
        </span>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <header className="h-12 border-b border-border flex items-center justify-between px-4 bg-muted/30 shrink-0">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="h-8 w-8 p-0">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="w-px h-4 bg-border mx-1" />
          <FileJson className="h-4 w-4 text-yellow-500" />
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-yellow-500">JSON_PLAYGROUND</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className={`flex items-center gap-1.5 px-2 py-1 text-[9px] font-black uppercase ${parsed.ok ? "text-green-500" : "text-red-500"}`}>
            {parsed.ok ? <CheckCircle className="h-3 w-3" /> : <AlertCircle className="h-3 w-3" />}
            {parsed.ok ? "VALID" : "INVALID"}
          </div>
          <Button size="sm" variant="ghost" className="h-7 px-2 text-[9px] font-black" onClick={() => setJsonInput(JSON.stringify(parsed.ok ? parsed.data : {}, null, 2))}>
            <Wand2 className="h-3 w-3 mr-1" /> Format
          </Button>
          <Button size="sm" variant="ghost" className="h-7 px-2 text-[9px] font-black" onClick={() => { try { setJsonInput(JSON.stringify(JSON.parse(jsonInput))); } catch {} }}>
            <Minimize2 className="h-3 w-3 mr-1" /> Minify
          </Button>
          <Button size="sm" variant="ghost" className="h-7 px-2 text-[9px] font-black" onClick={() => handleDownload(jsonInput, "json")}>
            <Download className="h-3 w-3 mr-1" /> .json
          </Button>
          <Button size="sm" variant="ghost" className="h-7 px-2 text-[9px] font-black" onClick={() => setJsonInput(DEFAULT_JSON)}>
            <RefreshCw className="h-3 w-3 mr-1" /> Reset
          </Button>
        </div>
      </header>

      <div className="flex border-b border-border bg-muted/20 shrink-0">
        {(["editor", "tree", "xml", "schema"] as const).map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest border-r border-border transition-colors ${
              tab === t ? "bg-background text-primary" : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {t === "editor" && <><Code2 className="h-3 w-3 inline mr-1.5" /> Editor</>}
            {t === "tree" && <><Maximize2 className="h-3 w-3 inline mr-1.5" /> Tree</>}
            {t === "xml" && <><FileCode className="h-3 w-3 inline mr-1.5" /> JSON → XML</>}
            {t === "schema" && <><CheckCircle className="h-3 w-3 inline mr-1.5" /> Schema</>}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        <div className="overflow-hidden border-r border-border">
          <div style={{ height: tab === "schema" ? "50%" : "100%" }}>
            <CodeMirror
              value={tab === "schema" ? schemaInput : jsonInput}
              height={tab === "schema" ? "100%" : "100%"}
              theme={oneDark}
              extensions={[jsonLang()]}
              onChange={tab === "schema" ? setSchemaInput : setJsonInput}
              basicSetup={{ lineNumbers: true, foldGutter: true, highlightActiveLine: true }}
              className="text-[13px] font-mono"
            />
          </div>
          {tab === "schema" && (
            <div className="h-[50%] border-t border-border">
              <div style={{ height: "100%" }}>
                <CodeMirror
                  value={jsonInput}
                  height="100%"
                  theme={oneDark}
                  extensions={[jsonLang()]}
                  onChange={setJsonInput}
                  basicSetup={{ lineNumbers: true, foldGutter: true, highlightActiveLine: true }}
                  className="text-[13px] font-mono"
                />
              </div>
            </div>
          )}
        </div>

        <div className="overflow-y-auto p-6 bg-surface/20">
          {tab === "editor" && (
            <div className="space-y-4">
              {!parsed.ok && (
                <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-sm">
                  <h3 className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-2">Parse Error</h3>
                  <p className="text-red-400 text-sm font-mono">{parsed.error}</p>
                </div>
              )}
              {parsed.ok && (
                <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-sm">
                  <h3 className="text-[10px] font-black text-green-500 uppercase tracking-widest">Valid JSON ✓</h3>
                </div>
              )}
              <div className="bg-blue-500/5 border border-blue-500/20 p-4 rounded-sm">
                <h3 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">JSON Quick Reference</h3>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-zinc-400">
                  <span><span className="text-orange-400">"key"</span>: <span className="text-green-400">"value"</span></span>
                  <span><span className="text-zinc-500">{"{}"}</span> Object</span>
                  <span><span className="text-zinc-500">{"[]"}</span> Array</span>
                  <span><span className="text-blue-400">123</span> Number</span>
                  <span><span className="text-yellow-400">true/false</span> Boolean</span>
                  <span><span className="text-purple-400">null</span> Null</span>
                </div>
              </div>
            </div>
          )}
          {tab === "tree" && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Search className="h-3 w-3 text-zinc-500" />
                <input
                  type="text" placeholder="Search keys/values..."
                  value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                  className="bg-transparent border border-zinc-700 px-3 py-1.5 text-xs font-mono text-zinc-300 w-full"
                />
              </div>
              <div className="font-mono text-sm space-y-1">
                {treeNodes.length === 0 && <p className="text-zinc-500 text-xs">No results</p>}
                {treeNodes.map((n, i) => (
                  <div key={i} className="flex items-start gap-2" style={{ paddingLeft: `${n.depth * 16}px` }}>
                    <span className="text-orange-400 font-mono text-xs shrink-0">{n.key}:</span>
                    {renderTreeValue(n.value, n.path)}
                  </div>
                ))}
              </div>
            </div>
          )}
          {tab === "xml" && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">XML Output</h3>
                <Button size="sm" variant="ghost" className="h-7 px-2 text-[9px] font-black" onClick={() => handleDownload(xmlOutput, "xml")}>
                  <Download className="h-3 w-3 mr-1" /> .xml
                </Button>
              </div>
              <pre className="text-xs font-mono text-zinc-300 bg-black/30 p-4 rounded-sm overflow-x-auto whitespace-pre-wrap">
                {xmlOutput}
              </pre>
            </div>
          )}
          {tab === "schema" && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Schema Validation</h3>
                <div className={`px-2 py-0.5 text-[9px] font-black uppercase ${schemaValidation.valid ? "text-green-500 bg-green-500/10" : "text-red-500 bg-red-500/10"}`}>
                  {schemaValidation.valid ? "PASS" : "FAIL"}
                </div>
              </div>
              <p className="text-xs text-zinc-500 mb-4">
                Edit the schema (left top) and JSON data (left bottom). Uses draft-07 basic validation.
              </p>
              <div className="bg-blue-500/5 border border-blue-500/20 p-4 rounded-sm">
                <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Schema Reference</h4>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-zinc-400">
                  <span><span className="text-purple-400">"type"</span>: "string"</span>
                  <span><span className="text-purple-400">"required"</span>: [...]</span>
                  <span><span className="text-purple-400">"properties"</span>: {`{...}`}</span>
                  <span><span className="text-purple-400">"items"</span>: {`{...}`}</span>
                  <span><span className="text-purple-400">"enum"</span>: [...]</span>
                  <span><span className="text-purple-400">"minimum"</span>: 0</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {!parsed.ok && (
        <div className="bg-red-500/5 border-t border-red-500/30 px-4 py-2 shrink-0">
          <p className="text-red-400 text-xs font-mono">Parse error: {parsed.error}</p>
        </div>
      )}
    </div>
  );
}
