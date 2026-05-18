import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "editor" | "api" | "network";

const BRAND = "#F59E0B";

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "editor", label: "Code Editor", icon: "\u{1F4BB}" },
  { id: "api", label: "API Tester", icon: "\u{1F310}" },
  { id: "network", label: "Network", icon: "\u{1F4E1}" },
];

function tabStyle(active: boolean) {
  return {
    borderColor: active ? BRAND : "transparent",
    color: active ? BRAND : "hsl(var(--foreground)/0.5)",
  };
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="h-px w-4 bg-foreground/20" />
      <span className="text-[9px] font-black tracking-[0.3em] text-foreground/40 uppercase">{children}</span>
    </div>
  );
}

// Mock API responses
const mockEndpoints: Record<string, { data: any; delay: number }> = {
  "/api/users": {
    data: [
      { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
      { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Editor" },
      { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "Viewer" },
      { id: 4, name: "Diana Prince", email: "diana@example.com", role: "Editor" },
      { id: 5, name: "Eve Wilson", email: "eve@example.com", role: "Viewer" },
    ],
    delay: 600,
  },
  "/api/products": {
    data: [
      { id: 101, name: "Wireless Mouse", price: 29.99, stock: 45 },
      { id: 102, name: "Mechanical Keyboard", price: 89.99, stock: 22 },
      { id: 103, name: "USB-C Hub", price: 49.99, stock: 67 },
      { id: 104, name: "Monitor Stand", price: 39.99, stock: 13 },
      { id: 105, name: "Webcam HD", price: 69.99, stock: 38 },
    ],
    delay: 800,
  },
  "/api/todos": {
    data: [
      { id: 201, task: "Review pull request", done: false },
      { id: 202, task: "Update documentation", done: true },
      { id: 203, task: "Fix login bug", done: false },
      { id: 204, task: "Deploy to staging", done: false },
      { id: 205, task: "Write unit tests", done: true },
    ],
    delay: 500,
  },
  "/api/comments": {
    data: [
      { id: 301, author: "Alice", text: "Great work!", postId: 1 },
      { id: 302, author: "Bob", text: "I have a question about this.", postId: 1 },
      { id: 303, author: "Charlie", text: "Can you add more examples?", postId: 2 },
    ],
    delay: 400,
  },
  "/api/auth/login": {
    data: { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock", expiresIn: 3600, user: { id: 1, name: "Alice" } },
    delay: 1000,
  },
};

// ── Mock API Handler ──
function mockRequest(method: string, url: string, body?: string): Promise<{ status: number; statusText: string; data: any; time: number }> {
  const start = performance.now();
  return new Promise((resolve, reject) => {
    const ep = mockEndpoints[url];
    if (!ep) {
      setTimeout(() => {
        resolve({ status: 404, statusText: "Not Found", data: { error: `Endpoint ${url} not found` }, time: Math.round(performance.now() - start) });
      }, 200);
      return;
    }
    setTimeout(() => {
      if (method === "GET") {
        resolve({ status: 200, statusText: "OK", data: ep.data, time: Math.round(performance.now() - start) });
      } else if (method === "POST") {
        const parsed = body ? JSON.parse(body) : {};
        resolve({ status: 201, statusText: "Created", data: { ...ep.data[0], ...parsed, id: Date.now() }, time: Math.round(performance.now() - start) });
      } else if (method === "PUT") {
        const parsed = body ? JSON.parse(body) : {};
        resolve({ status: 200, statusText: "OK", data: { ...ep.data[0], ...parsed }, time: Math.round(performance.now() - start) });
      } else if (method === "PATCH") {
        const parsed = body ? JSON.parse(body) : {};
        resolve({ status: 200, statusText: "OK", data: { ...ep.data[0], ...parsed }, time: Math.round(performance.now() - start) });
      } else if (method === "DELETE") {
        resolve({ status: 204, statusText: "No Content", data: null, time: Math.round(performance.now() - start) });
      } else {
        reject({ status: 405, statusText: "Method Not Allowed", data: { error: `Method ${method} not allowed` } });
      }
    }, ep.delay);
  });
}

// ── Code Editor Tab ──
function CodeEditorTab() {
  const [html, setHtml] = useState(`<div id="app">
  <h1>AJAX Demo</h1>
  <button id="loadBtn">Load Users</button>
  <div id="output"></div>
</div>`);
  const [css, setCss] = useState(`body { font-family:system-ui,sans-serif; padding:1rem; }
button { background:#F59E0B; color:#fff; border:none; padding:0.5rem 1rem; cursor:pointer; }
#output { margin-top:1rem; }`);
  const [js, setJs] = useState(`document.getElementById("loadBtn").addEventListener("click", async () => {
  const out = document.getElementById("output");
  out.textContent = "Loading...";
  try {
    const res = await fetch("/api/users");
    const data = await res.json();
    out.innerHTML = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
  } catch (err) {
    out.textContent = "Error: " + err.message;
  }
});`);
  const [log, setLog] = useState<string[]>([]);

  const runCode = useCallback(() => {
    setLog((l) => [...l, "> Code executed (simulated)"]);
    try {
      // Simulate the fetch
      mockRequest("GET", "/api/users", undefined).then((resp) => {
        setLog((l) => [...l, `> GET /api/users → ${resp.status} (${resp.time}ms)`, `> Response: ${JSON.stringify(resp.data).slice(0, 100)}...`]);
      });
    } catch (e: any) {
      setLog((l) => [...l, `> Error: ${e.message}`]);
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-full gap-4">
      <div className="flex-1 space-y-3">
        <SectionLabel>HTML</SectionLabel>
        <textarea value={html} onChange={(e) => setHtml(e.target.value)} className="w-full h-24 bg-black text-green-400 p-2 text-[10px] font-mono border border-foreground/10 resize-none" spellCheck={false} />
        <SectionLabel>CSS</SectionLabel>
        <textarea value={css} onChange={(e) => setCss(e.target.value)} className="w-full h-24 bg-black text-cyan-400 p-2 text-[10px] font-mono border border-foreground/10 resize-none" spellCheck={false} />
        <SectionLabel>JavaScript</SectionLabel>
        <textarea value={js} onChange={(e) => setJs(e.target.value)} className="w-full h-32 bg-black text-yellow-400 p-2 text-[10px] font-mono border border-foreground/10 resize-none" spellCheck={false} />
        <div className="flex gap-2">
          <button onClick={runCode} className="px-4 py-1.5 text-[10px] font-black tracking-widest uppercase text-white" style={{ backgroundColor: BRAND }}>Run</button>
          <button onClick={() => setLog([])} className="px-4 py-1.5 text-[10px] font-black tracking-widest uppercase border" style={{ borderColor: `${BRAND}44`, color: BRAND }}>Clear Log</button>
        </div>
      </div>
      <div className="flex-1">
        <SectionLabel>Console</SectionLabel>
        <div className="bg-black border border-foreground/10 p-3 h-80 overflow-y-auto font-mono text-[10px] space-y-1">
          {log.length === 0 && <span className="text-foreground/20">Ready</span>}
          {log.map((l, i) => (
            <div key={i} className="text-green-400/80">{l}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── API Tester Tab ──
function APITester() {
  const [method, setMethod] = useState<"GET" | "POST" | "PUT" | "PATCH" | "DELETE">("GET");
  const [url, setUrl] = useState("/api/users");
  const [body, setBody] = useState("");
  const [headers, setHeaders] = useState('{\n  "Content-Type": "application/json"\n}');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<{ status: number; data: any; time: number } | null>(null);

  const sendRequest = useCallback(async () => {
    setLoading(true);
    setResponse(null);
    try {
      const resp = await mockRequest(method, url, body || undefined);
      setResponse(resp);
    } catch (e: any) {
      setResponse({ status: e.status || 500, data: e.data || { error: "Request failed" }, time: 0 });
    }
    setLoading(false);
  }, [method, url, body]);

  const statusColor = (s: number) => {
    if (s >= 200 && s < 300) return "#22C55E";
    if (s >= 300 && s < 400) return "#F59E0B";
    if (s >= 400) return "#EF4444";
    return "hsl(var(--foreground)/0.5)";
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 h-full">
      <div className="flex-1 space-y-4">
        <div className="flex gap-2">
          {(["GET","POST","PUT","PATCH","DELETE"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMethod(m)}
              className="px-3 py-1.5 text-[10px] font-black tracking-widest uppercase border transition-all"
              style={{
                backgroundColor: method === m ? BRAND : "transparent",
                color: method === m ? "#fff" : "hsl(var(--foreground)/0.5)",
                borderColor: method === m ? BRAND : "hsl(var(--foreground)/0.1)",
              }}
            >
              {m}
            </button>
          ))}
        </div>
        <div>
          <SectionLabel>Request URL</SectionLabel>
          <div className="flex gap-2">
            <input value={url} onChange={(e) => setUrl(e.target.value)} className="flex-1 bg-foreground/5 border text-foreground p-2 text-xs font-mono" style={{ borderColor: `${BRAND}44` }} placeholder="/api/endpoint" />
            <button onClick={sendRequest} disabled={loading} className="px-5 py-2 text-xs font-black tracking-widest uppercase text-white disabled:opacity-30" style={{ backgroundColor: BRAND }}>
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
        {method !== "GET" && method !== "DELETE" && (
          <div>
            <SectionLabel>Request Body (JSON)</SectionLabel>
            <textarea value={body} onChange={(e) => setBody(e.target.value)} className="w-full h-28 bg-black text-green-400 p-2 text-[10px] font-mono border border-foreground/10 resize-none" spellCheck={false} placeholder='{"key": "value"}' />
          </div>
        )}
        <div>
          <SectionLabel>Headers (JSON)</SectionLabel>
          <textarea value={headers} onChange={(e) => setHeaders(e.target.value)} className="w-full h-20 bg-black text-cyan-400 p-2 text-[10px] font-mono border border-foreground/10 resize-none" spellCheck={false} />
        </div>
      </div>
      <div className="flex-1">
        <SectionLabel>Response</SectionLabel>
        <div className="bg-black border border-foreground/10 p-3 min-h-64 font-mono text-xs">
          {loading && <p className="text-yellow-500 animate-pulse">Waiting for response...</p>}
          {response && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-black tracking-wider uppercase">Status:</span>
                <span className="font-black text-sm" style={{ color: statusColor(response.status) }}>
                  {response.status} {response.statusText}
                </span>
                <span className="text-foreground/30 text-[9px] ml-auto">{response.time}ms</span>
              </div>
              <pre className="text-green-400/80 whitespace-pre-wrap break-all">
                {JSON.stringify(response.data, null, 2)}
              </pre>
            </div>
          )}
          {!loading && !response && <span className="text-foreground/20">Send a request to see the response</span>}
        </div>
      </div>
    </div>
  );
}

// ── Network Visualizer ──
function NetworkVisualizer() {
  const [log, setLog] = useState<{ method: string; url: string; status: number; time: number; timestamp: string }[]>([]);

  const sendTest = useCallback((endpoint: string) => {
    const start = performance.now();
    const methods = ["GET","GET","POST","GET","DELETE"] as const;
    const m = methods[log.length % methods.length];
    setTimeout(() => {
      const elapsed = Math.round(performance.now() - start);
      const status = endpoint in mockEndpoints ? (m === "DELETE" ? 204 : m === "POST" ? 201 : 200) : 404;
      setLog((l) => [...l, { method: m, url: endpoint, status, time: elapsed, timestamp: new Date().toLocaleTimeString() }]);
    }, 200 + Math.random() * 400);
  }, [log]);

  const clearLog = useCallback(() => setLog([]), []);

  const statusColor = (s: number) => {
    if (s >= 200 && s < 300) return "#22C55E";
    if (s >= 400) return "#EF4444";
    return "#F59E0B";
  };

  return (
    <div className="space-y-4 h-full">
      <div className="flex flex-wrap gap-2">
        {Object.keys(mockEndpoints).map((ep) => (
          <button key={ep} onClick={() => sendTest(ep)} className="px-3 py-1.5 text-[9px] font-black tracking-widest uppercase border transition-all" style={{ borderColor: `${BRAND}44`, color: BRAND }}>
            {ep}
          </button>
        ))}
        <button onClick={clearLog} className="ml-auto px-3 py-1.5 text-[9px] font-black tracking-widest uppercase border" style={{ borderColor: "hsl(var(--foreground)/0.1)", color: "hsl(var(--foreground)/0.5)" }}>
          Clear
        </button>
      </div>

      <div className="bg-black border border-foreground/10 min-h-64">
        <div className="grid grid-cols-12 gap-2 p-2 border-b border-foreground/10 text-[8px] font-black tracking-wider text-foreground/30 uppercase">
          <span className="col-span-2">Time</span>
          <span className="col-span-1">Method</span>
          <span className="col-span-3">URL</span>
          <span className="col-span-2">Status</span>
          <span className="col-span-4">Latency</span>
        </div>
        {log.length === 0 && <p className="text-[10px] text-foreground/20 p-4 font-mono">No requests yet. Click an endpoint above to test.</p>}
        {log.map((entry, i) => (
          <div key={i} className="grid grid-cols-12 gap-2 p-2 border-b border-foreground/5 text-[10px] font-mono items-center hover:bg-foreground/[0.02]">
            <span className="col-span-2 text-foreground/30">{entry.timestamp}</span>
            <span className="col-span-1 font-black" style={{ color: BRAND }}>{entry.method}</span>
            <span className="col-span-3 text-foreground/50 truncate">{entry.url}</span>
            <span className="col-span-2 font-black" style={{ color: statusColor(entry.status) }}>{entry.status}</span>
            <span className="col-span-4">
              <div className="flex items-center gap-2">
                <div className="h-1.5 bg-foreground/5 rounded-full flex-1 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${Math.min(100, (entry.time / 1000) * 100)}%`,
                      backgroundColor: entry.time < 300 ? "#22C55E" : entry.time < 600 ? "#F59E0B" : "#EF4444",
                    }}
                  />
                </div>
                <span className="text-[8px] text-foreground/30">{entry.time}ms</span>
              </div>
            </span>
          </div>
        ))}
      </div>

      {log.length > 0 && (
        <div className="p-3 border border-foreground/10 text-[10px]">
          <span className="text-foreground/30">Summary: </span>
          <span className="text-green-500">{log.filter((l) => l.status < 300).length} success</span>
          <span className="mx-2 text-foreground/20">|</span>
          <span className="text-red-500">{log.filter((l) => l.status >= 400).length} errors</span>
          <span className="mx-2 text-foreground/20">|</span>
          <span className="text-foreground/50">Avg latency: {Math.round(log.reduce((s, l) => s + l.time, 0) / log.length)}ms</span>
        </div>
      )}
    </div>
  );
}

export default function AJAXPlayground() {
  const [activeTab, setActiveTab] = useState<Tab>("editor");

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="border-b border-foreground/10 bg-foreground/[0.02] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{/* 🌐 */}{"\u{1F310}"}</span>
          <div>
            <h1 className="text-lg font-black tracking-tight uppercase">AJAX Playground</h1>
            <p className="text-[9px] font-black tracking-widest text-foreground/30 uppercase">Async Web Communication Sandbox</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[8px] font-black tracking-widest text-green-500 uppercase">Mock API Online</span>
        </div>
      </div>

      <div className="border-b border-foreground/10">
        <div className="max-w-7xl mx-auto flex overflow-x-auto px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-5 py-3 text-xs font-black tracking-widest uppercase border-b-2 transition-all whitespace-nowrap flex items-center gap-2"
              style={tabStyle(activeTab === tab.id)}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 px-6 py-6 overflow-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {activeTab === "editor" && <CodeEditorTab />}
            {activeTab === "api" && <APITester />}
            {activeTab === "network" && <NetworkVisualizer />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
