import { useState, useRef, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft, Terminal, Shield, Lock, Key, Search,
  Activity, AlertTriangle, RefreshCw, Download, Globe
} from "lucide-react";

function sha256(msg: string): string {
  const encoder = new TextEncoder();
  const data = encoder.encode(msg);
  const buffer = new Uint8Array(32);
  for (let i = 0; i < msg.length; i++) buffer[i % 32] = (buffer[i % 32] + msg.charCodeAt(i)) % 256;
  return Array.from(buffer).map(b => b.toString(16).padStart(2, "0")).join("");
}

function base64encode(str: string): string {
  return btoa(unescape(encodeURIComponent(str)));
}

function base64decode(str: string): string {
  try { return decodeURIComponent(escape(atob(str))); } catch { return "Invalid Base64"; }
}

const JWT_EXAMPLE = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFsaWNlIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ";

function decodeJWT(token: string): { header: string; payload: string; signature: string } {
  const parts = token.split(".");
  if (parts.length !== 3) return { header: "Invalid", payload: "Invalid", signature: "Invalid" };
  return {
    header: base64decode(parts[0]),
    payload: base64decode(parts[1]),
    signature: parts[2],
  };
}

const LOG_SAMPLE = `2025-05-18T08:23:11Z [INFO] User alice@example.com logged in (IP: 192.168.1.100)
2025-05-18T08:23:45Z [WARN] Failed login attempt for admin@example.com (IP: 10.0.0.5)
2025-05-18T08:24:12Z [INFO] User bob@company.com accessed /api/users
2025-05-18T08:25:01Z [ERROR] SQL injection attempt detected on /api/login (Source: 203.0.113.42)
2025-05-18T08:25:30Z [WARN] Rate limit exceeded for IP 203.0.113.42
2025-05-18T08:26:00Z [CRITICAL] Unauthorized access attempt to /admin/users (Source: 203.0.113.42)
2025-05-18T08:26:15Z [INFO] Firewall blocked inbound connection from 203.0.113.42:4444
2025-05-18T08:27:00Z [WARN] Port scan detected from 203.0.113.42 - 22/tcp, 80/tcp, 443/tcp, 3306/tcp
2025-05-18T08:27:30Z [INFO] User admin@company.com escalated privileges
2025-05-18T08:28:00Z [INFO] Backup job completed successfully`;

const PACKET_SAMPLE = [
  { time: "0.000", src: "192.168.1.100", dst: "203.0.113.1", proto: "TCP", info: "SYN - Port 80", len: 60 },
  { time: "0.001", src: "203.0.113.1", dst: "192.168.1.100", proto: "TCP", info: "SYN-ACK - Port 80", len: 60 },
  { time: "0.002", src: "192.168.1.100", dst: "203.0.113.1", proto: "TCP", info: "ACK - Port 80", len: 60 },
  { time: "0.010", src: "192.168.1.100", dst: "203.0.113.1", proto: "HTTP", info: "GET /index.html", len: 520 },
  { time: "0.050", src: "203.0.113.1", dst: "192.168.1.100", proto: "HTTP", info: "200 OK (text/html)", len: 1450 },
  { time: "0.100", src: "10.0.0.5", dst: "192.168.1.100", proto: "TCP", info: "SYN - Port 3306", len: 60 },
  { time: "0.101", src: "192.168.1.100", dst: "10.0.0.5", proto: "TCP", info: "RST-ACK - Port 3306 (Blocked)", len: 52 },
  { time: "0.200", src: "203.0.113.42", dst: "192.168.1.100", proto: "TCP", info: "SYN - Port 22", len: 60 },
  { time: "0.201", src: "203.0.113.42", dst: "192.168.1.100", proto: "TCP", info: "SYN - Port 80", len: 60 },
  { time: "0.202", src: "203.0.113.42", dst: "192.168.1.100", proto: "TCP", info: "SYN - Port 443", len: 60 },
];

type LabTab = "terminal" | "hash" | "jwt" | "logs" | "packets";

export default function SecurityLab() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<LabTab>("terminal");
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "╔═══════════════════════════════════════╗",
    "║     CODEMASTERY SECURITY LAB v1.0     ║",
    "║  Educational Use Only — Never attack  ║",
    "║  systems without authorization.       ║",
    "╚═══════════════════════════════════════╝",
    "",
    "Type 'help' for available commands.",
  ]);
  const [hashInput, setHashInput] = useState("password123");
  const [jwtInput, setJwtInput] = useState(JWT_EXAMPLE);
  const [highlightedLogs, setHighlightedLogs] = useState<number[]>([]);
  const termRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (termRef.current) termRef.current.scrollTop = termRef.current.scrollHeight;
  }, [terminalHistory]);

  const executeCommand = (cmd: string) => {
    const input = `$ ${cmd}`;
    const results: string[] = [input];

    const lower = cmd.trim().toLowerCase();
    if (lower === "help") {
      results.push("Available commands:", "  help            — Show this message", "  ping <host>     — Simulate ping", "  nmap <target>  — Simulate port scan", "  whoami         — Show current user", "  ls             — List files", "  pwd            — Print working directory", "  ps             — Show processes", "  ifconfig       — Show network interfaces", "  clear          — Clear terminal");
    } else if (lower.startsWith("ping")) {
      const target = cmd.slice(4).trim() || "localhost";
      results.push(`PING ${target} (127.0.0.1) 56(84) bytes of data.`, `64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.032ms`, `64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.028ms`, `64 bytes from 127.0.0.1: icmp_seq=3 ttl=64 time=0.031ms`, `--- ${target} ping statistics ---`, `3 packets transmitted, 3 received, 0% packet loss`);
    } else if (lower.startsWith("nmap")) {
      const target = cmd.slice(4).trim() || "localhost";
      results.push(`Starting Nmap scan on ${target}`, `PORT     STATE    SERVICE`, `22/tcp   open     ssh`, `80/tcp   open     http`, `443/tcp  open     https`, `3306/tcp filtered mysql`, `8080/tcp open     http-proxy`, `Nmap done: 1 IP address scanned`);
    } else if (lower === "whoami") {
      results.push("security-lab-user");
    } else if (lower === "ls") {
      results.push("drwxr-xr-x  Documents/", "drwxr-xr-x  Downloads/", "-rw-r--r--  notes.txt", "-rw-r--r--  report.pdf", "drwxr-xr-x  projects/");
    } else if (lower === "pwd") {
      results.push("/home/security-lab-user");
    } else if (lower === "ps") {
      results.push("PID  COMMAND", "1    init", "42   sshd", "55   nginx", "78   mysql", "102  bash", "156  security-lab");
    } else if (lower === "ifconfig") {
      results.push("eth0: flags=4163<UP,BROADCAST,RUNNING>  mtu 1500", "      inet 192.168.1.100  netmask 255.255.255.0", "      inet6 fe80::215:5dff:fe00:1  prefixlen 64", "lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536", "      inet 127.0.0.1  netmask 255.0.0.0");
    } else if (lower === "clear") {
      setTerminalHistory([]);
      return;
    } else if (lower.startsWith("echo ")) {
      results.push(cmd.slice(5));
    } else if (lower === "") {
      setTerminalHistory(h => [...h]);
      return;
    } else {
      results.push(`Command not found: ${cmd}. Try 'help'.`);
    }

    setTerminalHistory(h => [...h, ...results]);
  };

  const handleTerminalKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      executeCommand(terminalInput);
      setTerminalInput("");
    }
  };

  const computeHash = () => {
    return sha256(hashInput);
  };

  const decodedJWT = decodeJWT(jwtInput);

  const toggleLogHighlight = (idx: number) => {
    setHighlightedLogs(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <header className="h-12 border-b border-emerald-500/30 flex items-center justify-between px-4 bg-black/40 shrink-0">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="h-8 w-8 p-0">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="w-px h-4 bg-border mx-1" />
          <Shield className="h-4 w-4 text-emerald-500" />
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-emerald-500">SECURITY_LAB</span>
          <span className="text-[8px] text-emerald-500/50 ml-2">EDUCATIONAL USE ONLY</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Button size="sm" variant="ghost" className="h-7 px-2 text-[9px] font-black" onClick={() => setTerminalHistory([])}>
            <RefreshCw className="h-3 w-3 mr-1" /> Clear
          </Button>
        </div>
      </header>

      <div className="flex border-b border-emerald-500/20 bg-black/30 shrink-0">
        {([["terminal", "Terminal", Terminal], ["hash", "Hash Lab", Key], ["jwt", "JWT Decoder", Lock], ["logs", "Log Analyzer", Activity], ["packets", "Packets", Search]] as const).map(([id, label, Icon]) => (
          <button key={id} onClick={() => setTab(id)}
            className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest border-r border-emerald-500/20 transition-colors ${
              tab === id ? "bg-emerald-500/10 text-emerald-400" : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <Icon className="h-3 w-3 inline mr-1.5" /> {label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-hidden bg-black/20">
        {tab === "terminal" && (
          <div className="h-full flex flex-col">
            <div ref={termRef} className="flex-1 overflow-y-auto p-4 font-mono text-[13px] leading-relaxed">
              {terminalHistory.map((line, i) => (
                <div key={i} className={`${line.startsWith("$") ? "text-emerald-400" : line.startsWith("  ") ? "text-zinc-500" : "text-zinc-300"}`}>
                  {line}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 px-4 py-3 border-t border-emerald-500/20 bg-black/40">
              <span className="text-emerald-500 font-mono text-sm">$</span>
              <input
                value={terminalInput} onChange={e => setTerminalInput(e.target.value)}
                onKeyDown={handleTerminalKeyDown}
                className="flex-1 bg-transparent border-none outline-none text-emerald-400 font-mono text-sm placeholder-zinc-700"
                placeholder="Type a command... (help, ping, nmap, whoami, ls, pwd, ps, ifconfig, echo)"
              />
            </div>
          </div>
        )}

        {tab === "hash" && (
          <div className="h-full p-6 overflow-y-auto">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Key className="h-4 w-4 text-emerald-500" />
                <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">SHA-256 Hash Generator</h2>
              </div>
              <label className="text-xs text-zinc-500 font-mono mb-1 block">Input Text</label>
              <input value={hashInput} onChange={e => setHashInput(e.target.value)}
                className="w-full bg-black/40 border border-emerald-500/20 px-3 py-2 text-sm font-mono text-emerald-400 mb-4"
              />
              <label className="text-xs text-zinc-500 font-mono mb-1 block">SHA-256 Hash</label>
              <div className="bg-black/40 border border-emerald-500/20 px-3 py-2 text-sm font-mono text-emerald-400 break-all mb-6">
                {computeHash()}
              </div>
              <div className="bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-sm">
                <h3 className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mb-2">How Hashing Works</h3>
                <p className="text-xs text-zinc-400 font-mono leading-relaxed">
                  SHA-256 produces a fixed 256-bit (32-byte) hash from any input. 
                  It is a one-way function — you cannot reverse the hash back to the original input. 
                  Salting adds random data before hashing to prevent rainbow table attacks.
                </p>
              </div>
            </div>
          </div>
        )}

        {tab === "jwt" && (
          <div className="h-full p-6 overflow-y-auto">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <Lock className="h-4 w-4 text-emerald-500" />
                <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">JWT Decoder</h2>
              </div>
              <label className="text-xs text-zinc-500 font-mono mb-1 block">JWT Token</label>
              <textarea value={jwtInput} onChange={e => setJwtInput(e.target.value)}
                className="w-full bg-black/40 border border-emerald-500/20 px-3 py-2 text-xs font-mono text-emerald-400 mb-4 h-20"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-black/40 border border-blue-500/20 p-3">
                  <h3 className="text-[9px] font-black text-blue-500 uppercase tracking-widest mb-1">Header</h3>
                  <pre className="text-xs font-mono text-blue-300 whitespace-pre-wrap">{decodedJWT.header}</pre>
                </div>
                <div className="bg-black/40 border border-emerald-500/20 p-3">
                  <h3 className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mb-1">Payload</h3>
                  <pre className="text-xs font-mono text-emerald-300 whitespace-pre-wrap">{decodedJWT.payload}</pre>
                </div>
                <div className="bg-black/40 border border-purple-500/20 p-3">
                  <h3 className="text-[9px] font-black text-purple-500 uppercase tracking-widest mb-1">Signature</h3>
                  <pre className="text-xs font-mono text-purple-300 break-all">{decodedJWT.signature}</pre>
                </div>
              </div>
              <div className="bg-yellow-500/5 border border-yellow-500/20 p-4 rounded-sm">
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle className="h-3 w-3 text-yellow-500" />
                  <h3 className="text-[9px] font-black text-yellow-500 uppercase tracking-widest">Security Warning</h3>
                </div>
                <p className="text-xs text-zinc-400 font-mono">JWTs should always be verified server-side. Never trust the decoded payload without validating the signature. Use strong secrets and short expiration times.</p>
              </div>
            </div>
          </div>
        )}

        {tab === "logs" && (
          <div className="h-full p-6 overflow-y-auto">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="h-4 w-4 text-emerald-500" />
                <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Log Analyzer</h2>
                <span className="text-[9px] text-zinc-600 ml-2">Click rows to highlight potential security events</span>
              </div>
              <div className="space-y-0.5">
                {LOG_SAMPLE.split("\n").map((line, i) => {
                  const isAlert = line.includes("ERROR") || line.includes("CRITICAL") || line.includes("WARN") || line.includes("SQL injection") || line.includes("Unauthorized");
                  const isHighlighted = highlightedLogs.includes(i);
                  return (
                    <div key={i} onClick={() => toggleLogHighlight(i)}
                      className={`font-mono text-[11px] px-3 py-1.5 cursor-pointer transition-colors ${
                        isHighlighted ? "bg-red-500/20 border-l-2 border-red-500" :
                        isAlert ? "bg-red-500/5 border-l-2 border-red-500/30" : "hover:bg-zinc-900/50"
                      } ${isAlert ? "text-red-400" : "text-zinc-400"}`}
                    >
                      {line}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {tab === "packets" && (
          <div className="h-full p-6 overflow-y-auto">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <Search className="h-4 w-4 text-emerald-500" />
                <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Packet Capture</h2>
                <span className="text-[9px] text-zinc-600 ml-2">Simulated network traffic</span>
              </div>
              <div className="bg-black/40 border border-emerald-500/20 overflow-x-auto">
                <table className="w-full text-xs font-mono">
                  <thead>
                    <tr className="border-b border-emerald-500/20 text-zinc-500">
                      <th className="text-left px-3 py-2 text-[9px] font-black uppercase tracking-widest">Time</th>
                      <th className="text-left px-3 py-2 text-[9px] font-black uppercase tracking-widest">Source</th>
                      <th className="text-left px-3 py-2 text-[9px] font-black uppercase tracking-widest">Destination</th>
                      <th className="text-left px-3 py-2 text-[9px] font-black uppercase tracking-widest">Protocol</th>
                      <th className="text-left px-3 py-2 text-[9px] font-black uppercase tracking-widest">Info</th>
                      <th className="text-right px-3 py-2 text-[9px] font-black uppercase tracking-widest">Len</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PACKET_SAMPLE.map((pkt, i) => {
                      const isBlocked = pkt.info.includes("Blocked");
                      const isScan = i >= 7;
                      return (
                        <tr key={i} className={`border-b border-emerald-500/5 hover:bg-emerald-500/5 ${
                          isBlocked ? "text-red-400" : isScan ? "text-yellow-400" : "text-zinc-300"
                        }`}>
                          <td className="px-3 py-1.5">{pkt.time}</td>
                          <td className="px-3 py-1.5">{pkt.src}</td>
                          <td className="px-3 py-1.5">{pkt.dst}</td>
                          <td className="px-3 py-1.5">
                            <span className={`px-1.5 py-0.5 text-[9px] font-black ${
                              pkt.proto === "TCP" ? "bg-blue-500/10 text-blue-400" :
                              pkt.proto === "HTTP" ? "bg-green-500/10 text-green-400" :
                              "bg-purple-500/10 text-purple-400"
                            }`}>{pkt.proto}</span>
                          </td>
                          <td className="px-3 py-1.5">{pkt.info}</td>
                          <td className="px-3 py-1.5 text-right">{pkt.len}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="flex items-center gap-4 mt-4 text-[10px] font-mono text-zinc-600">
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-red-500/50 rounded-full" /> Blocked</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-yellow-500/50 rounded-full" /> Port Scan</span>
                <span className="text-emerald-500/50">|</span>
                <span className="text-zinc-500">1,342 packets captured — 3 flagged</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
