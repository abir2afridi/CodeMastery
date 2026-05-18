import { useState, useRef, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft, Play, RefreshCw, Download, Code2, Terminal,
  Server, Send, Key, FileCode, Globe, Shield
} from "lucide-react";

const DEFAULT_CODE = `// Simple Express-like Server Demo
const http = require('http');

const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const path = url.pathname;
  const method = req.method;

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (path === '/api/users' && method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ success: true, data: users }));
  } else if (path.startsWith('/api/users/') && method === 'GET') {
    const id = parseInt(path.split('/')[3]);
    const user = users.find(u => u.id === id);
    if (user) {
      res.statusCode = 200;
      res.end(JSON.stringify({ success: true, data: user }));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ success: false, error: 'User not found' }));
    }
  } else if (path === '/api/health' && method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ status: 'ok', uptime: process.uptime() }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ success: false, error: 'Route not found' }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
  console.log('Routes:');
  console.log('  GET /api/users');
  console.log('  GET /api/users/:id');
  console.log('  GET /api/health');
});
`;

const API_PRESETS = [
  { method: "GET", path: "/api/users", body: "" },
  { method: "GET", path: "/api/users/1", body: "" },
  { method: "GET", path: "/api/health", body: "" },
  { method: "GET", path: "/api/unknown", body: "" },
];

export default function NodeJSPlayground() {
  const navigate = useNavigate();
  const [code, setCode] = useState(DEFAULT_CODE);
  const [logs, setLogs] = useState<{ level: string; text: string; time: string }[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(0);
  const [apiResponse, setApiResponse] = useState<{ status: number; body: string } | null>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [logs]);

  const runCode = () => {
    setIsRunning(true);
    setLogs([]);
    setApiResponse(null);
    setTimeout(() => {
      const newLogs: { level: string; text: string; time: string }[] = [];
      const time = () => new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
      newLogs.push({ level: "info", text: "Server starting...", time: time() });
      newLogs.push({ level: "info", text: "Server running on port 3000", time: time() });
      newLogs.push({ level: "info", text: "Routes:", time: time() });
      newLogs.push({ level: "info", text: "  GET /api/users", time: time() });
      newLogs.push({ level: "info", text: "  GET /api/users/:id", time: time() });
      newLogs.push({ level: "info", text: "  GET /api/health", time: time() });
      setLogs(newLogs);
      setIsRunning(false);
    }, 600);
  };

  const sendRequest = (idx: number) => {
    setSelectedRoute(idx);
    const preset = API_PRESETS[idx];
    const time = () => new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setIsRunning(true);

    setTimeout(() => {
      let status = 200;
      let body: Record<string, unknown> = {};

      if (preset.path === "/api/users") {
        body = { success: true, data: [
          { id: 1, name: "Alice", email: "alice@example.com" },
          { id: 2, name: "Bob", email: "bob@example.com" },
        ]};
      } else if (preset.path === "/api/users/1") {
        body = { success: true, data: { id: 1, name: "Alice", email: "alice@example.com" } };
      } else if (preset.path === "/api/health") {
        body = { status: "ok", uptime: process.uptime() };
      } else {
        status = 404;
        body = { success: false, error: "Route not found" };
      }

      setApiResponse({ status, body: JSON.stringify(body, null, 2) });
      setLogs(prev => [...prev, { level: "info", text: `${preset.method} ${preset.path} → ${status}`, time: time() }]);
      setIsRunning(false);
    }, 400);
  };

  const reset = () => {
    setCode(DEFAULT_CODE);
    setLogs([]);
    setApiResponse(null);
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "server.js";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <header className="h-12 border-b border-border flex items-center justify-between px-4 bg-muted/30 shrink-0">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="h-8 w-8 p-0">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="w-px h-4 bg-border mx-1" />
          <Server className="h-4 w-4 text-green-500" />
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-green-500">NODEJS_PLAYGROUND</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Button size="sm" variant="ghost" className="h-7 px-2 text-[9px] font-black" onClick={runCode}>
            <Play className="h-3 w-3 mr-1" /> Run Server
          </Button>
          <Button size="sm" variant="ghost" className="h-7 px-2 text-[9px] font-black" onClick={handleDownload}>
            <Download className="h-3 w-3 mr-1" /> .js
          </Button>
          <Button size="sm" variant="ghost" className="h-7 px-2 text-[9px] font-black" onClick={reset}>
            <RefreshCw className="h-3 w-3 mr-1" /> Reset
          </Button>
        </div>
      </header>

      <div className="flex-1 overflow-hidden flex flex-col lg:flex-row">
        {/* Left - Editor + Terminal */}
        <div className="flex-1 flex flex-col min-w-0 border-r border-border">
          <div className="flex-1 overflow-hidden">
            <CodeMirror
              value={code}
              height="100%"
              theme={oneDark}
              extensions={[javascript()]}
              onChange={setCode}
              basicSetup={{ lineNumbers: true, foldGutter: true, highlightActiveLine: true }}
              className="text-[13px] font-mono"
            />
          </div>
          {/* Terminal */}
          <div className="h-48 border-t border-border bg-black/40 flex flex-col shrink-0">
            <div className="flex items-center gap-2 px-3 py-1.5 border-b border-border/20 bg-foreground/5">
              <Terminal className="h-3 w-3 text-green-500" />
              <span className="text-[9px] font-black text-green-500 tracking-[0.2em] uppercase">Terminal</span>
            </div>
            <div ref={outputRef} className="flex-1 overflow-y-auto p-3 space-y-1 font-mono text-[11px]">
              {logs.length === 0 && (
                <div className="text-zinc-700 italic flex items-center gap-2">
                  <span className="text-green-500/50">&gt;</span> Click "Run Server" to start
                </div>
              )}
              {logs.map((l, i) => (
                <div key={i} className="flex gap-2 text-zinc-400">
                  <span className="text-zinc-600 shrink-0">[{l.time}]</span>
                  <span className="text-green-500 font-black">&gt;</span>
                  <span className={l.text.startsWith("  ") ? "text-zinc-500" : ""}>{l.text}</span>
                </div>
              ))}
              {isRunning && (
                <div className="flex items-center gap-2 text-yellow-500 animate-pulse">
                  <span className="text-[9px]">●</span> Processing...
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right - API Testing + Info */}
        <div className="w-full lg:w-96 flex flex-col shrink-0">
          {/* API Testing */}
          <div className="border-b border-border">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-muted/20">
              <Send className="h-3 w-3 text-blue-400" />
              <span className="text-[9px] font-black text-blue-400 tracking-[0.2em] uppercase">API Testing</span>
            </div>
            <div className="p-3 space-y-2">
              {API_PRESETS.map((p, i) => (
                <button key={i} onClick={() => sendRequest(i)}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-[10px] font-mono transition-colors border ${
                    selectedRoute === i ? "bg-blue-500/10 border-blue-500/40 text-blue-300" : "bg-black/20 border-border/30 text-zinc-400 hover:border-zinc-600"
                  }`}
                >
                  <span className={`font-black uppercase text-[9px] ${
                    p.method === "GET" ? "text-green-500" : p.method === "POST" ? "text-blue-500" : "text-yellow-500"
                  }`}>{p.method}</span>
                  <span className="flex-1 text-left">{p.path}</span>
                  <Send className="h-3 w-3 opacity-40" />
                </button>
              ))}
            </div>
          </div>

          {/* API Response */}
          <div className="flex-1 overflow-auto">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-muted/20 border-b border-border">
              <Code2 className="h-3 w-3 text-purple-400" />
              <span className="text-[9px] font-black text-purple-400 tracking-[0.2em] uppercase">Response</span>
              {apiResponse && (
                <span className={`ml-auto text-[10px] font-black ${apiResponse.status < 300 ? "text-green-500" : "text-red-500"}`}>
                  {apiResponse.status}
                </span>
              )}
            </div>
            <div className="p-3">
              {apiResponse ? (
                <pre className="text-xs font-mono text-zinc-300 bg-black/20 p-3 rounded-sm overflow-x-auto whitespace-pre-wrap">
                  {apiResponse.body}
                </pre>
              ) : (
                <div className="text-zinc-600 text-xs italic font-mono p-3">Select an endpoint to test the API...</div>
              )}
            </div>
            {/* Quick Reference */}
            <div className="border-t border-border p-3">
              <h3 className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-2">Express Reference</h3>
              <div className="grid grid-cols-2 gap-1.5 text-[10px] font-mono text-zinc-500">
                <span><span className="text-blue-400">app.get()</span> Read data</span>
                <span><span className="text-green-400">app.post()</span> Create data</span>
                <span><span className="text-yellow-400">app.put()</span> Update data</span>
                <span><span className="text-red-400">app.delete()</span> Delete data</span>
                <span><span className="text-purple-400">app.use()</span> Middleware</span>
                <span><span className="text-orange-400">req.params</span> Route params</span>
                <span><span className="text-orange-400">req.query</span> Query string</span>
                <span><span className="text-orange-400">req.body</span> Request body</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
