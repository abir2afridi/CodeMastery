import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Play, Code2, Layout, Terminal, RefreshCw, Settings, FileCode, Component, Zap } from "lucide-react";

const DEFAULT_TS = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  count = 0;
  isLoggedIn = false;

  users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' }
  ];

  increment() {
    this.count++;
  }

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  getMessage(): string {
    return this.isLoggedIn
      ? 'Welcome back!'
      : 'Please log in';
  }
}`;

const DEFAULT_HTML = `<div class="container">
  <header class="header">
    <h1>{{ title }}</h1>
    <p class="status">{{ getMessage() }}</p>
  </header>

  <main>
    <!-- Conditional rendering -->
    <div *ngIf="isLoggedIn" class="dashboard">
      <div class="counter">
        <h2>Counter: {{ count }}</h2>
        <button (click)="increment()" class="btn">
          Increment
        </button>
      </div>

      <div class="user-list">
        <h3>Users</h3>
        <ul>
          <li *ngFor="let user of users; trackBy: trackById">
            {{ user.name }} ({{ user.email }})
          </li>
        </ul>
      </div>
    </div>

    <div *ngIf="!isLoggedIn" class="login-prompt">
      <button (click)="toggleLogin()" class="btn btn-primary">
        Login
      </button>
    </div>
  </main>
</div>

<!-- Output: {{ 2 + 2 }} -->

<ng-template #loading>
  <p>Loading...</p>
</ng-template>`;

const DEFAULT_CSS = `.container {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 30px;
  padding: 20px;
  background: linear-gradient(135deg, #DD0031 0%, #C3002F 100%);
  color: white;
  border-radius: 8px;
}

.header h1 {
  margin: 0;
  font-size: 2rem;
}

.status {
  margin-top: 10px;
  opacity: 0.9;
}

.dashboard {
  display: grid;
  gap: 20px;
}

.counter {
  text-align: center;
  padding: 30px;
  background: #f5f5f5;
  border-radius: 8px;
}

.counter h2 {
  color: #DD0031;
  font-size: 3rem;
  margin: 0 0 20px;
}

.btn {
  padding: 12px 24px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: #DD0031;
  color: white;
  transition: background 0.2s;
}

.btn:hover {
  background: #b00229;
}

.btn-primary {
  background: #007bff;
}

.login-prompt {
  text-align: center;
  padding: 40px;
}

.user-list {
  padding: 20px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.user-list ul {
  list-style: none;
  padding: 0;
}

.user-list li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.user-list li:last-child {
  border-bottom: none;
}`;

type Tab = "ts" | "html" | "css";

export default function AngularCompiler() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("ts");
  const [tsCode, setTsCode] = useState(DEFAULT_TS);
  const [htmlCode, setHtmlCode] = useState(DEFAULT_HTML);
  const [cssCode, setCssCode] = useState(DEFAULT_CSS);
  const [logs, setLogs] = useState<string[]>(["Angular app initialized", "TypeScript compilation: OK", "Template compilation: OK"]);

  const handleRun = () => {
    setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] Build successful`, "Application running at http://localhost:4200"]);
  };

  const handleReset = () => {
    setTsCode(DEFAULT_TS);
    setHtmlCode(DEFAULT_HTML);
    setCssCode(DEFAULT_CSS);
    setLogs(["Angular app reset", "TypeScript compilation: OK", "Template compilation: OK"]);
  };

  const codeMap: Record<Tab, { value: string; setValue: (v: string) => void; lang: any }> = {
    ts: { value: tsCode, setValue: setTsCode, lang: javascript({ jsx: true }) },
    html: { value: htmlCode, setValue: setHtmlCode, lang: html() },
    css: { value: cssCode, setValue: setCssCode, lang: css() },
  };

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
              <Component className="h-6 w-6 text-[#DD0031]" />
              <span className="font-bold text-lg">Angular Playground</span>
              <span className="text-xs bg-[#DD0031]/20 text-[#DD0031] px-2 py-0.5 rounded">Angular 17+</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleReset}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset
            </Button>
            <Button size="sm" className="bg-[#DD0031] hover:bg-[#DD0031]/80" onClick={handleRun}>
              <Play className="h-4 w-4 mr-2" />
              Run
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Editor Panel */}
          <div className="space-y-4">
            {/* File Tabs */}
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab("ts")}
                className={`px-4 py-2 flex items-center gap-2 text-sm font-medium border-b-2 ${
                  activeTab === "ts" ? "border-[#DD0031] text-[#DD0031]" : "border-transparent"
                }`}
              >
                <FileCode className="h-4 w-4" />
                app.component.ts
              </button>
              <button
                onClick={() => setActiveTab("html")}
                className={`px-4 py-2 flex items-center gap-2 text-sm font-medium border-b-2 ${
                  activeTab === "html" ? "border-[#DD0031] text-[#DD0031]" : "border-transparent"
                }`}
              >
                <Code2 className="h-4 w-4" />
                app.component.html
              </button>
              <button
                onClick={() => setActiveTab("css")}
                className={`px-4 py-2 flex items-center gap-2 text-sm font-medium border-b-2 ${
                  activeTab === "css" ? "border-[#DD0031] text-[#DD0031]" : "border-transparent"
                }`}
              >
                <Layout className="h-4 w-4" />
                app.component.css
              </button>
            </div>

            {/* Code Editor */}
            <div className="border rounded-lg overflow-hidden">
              <CodeMirror
                value={codeMap[activeTab].value}
                height="450px"
                extensions={[codeMap[activeTab].lang]}
                theme={oneDark}
                onChange={(val) => codeMap[activeTab].setValue(val)}
                className="text-sm"
              />
            </div>
          </div>

          {/* Preview & Output */}
          <div className="space-y-4">
            {/* Live Preview */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-muted/50 px-4 py-2 border-b flex items-center gap-2">
                <Layout className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium text-sm">Live Preview</span>
                <span className="text-xs text-green-500 ml-auto">● Running</span>
              </div>
              <div className="p-4 bg-white min-h-[300px]">
                <div className="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 800px; margin: 0 auto;">
                  <header style={{ textAlign: 'center', marginBottom: '30px', padding: '20px', background: 'linear-gradient(135deg, #DD0031 0%, #C3002F 100%)', color: 'white', borderRadius: '8px' }}>
                    <h1 style={{ margin: 0, fontSize: '2rem' }}>Angular App</h1>
                    <p style={{ marginTop: '10px', opacity: 0.9 }}>Please log in</p>
                  </header>
                  <div style={{ textAlign: 'center', padding: '40px' }}>
                    <button style={{ padding: '12px 24px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer', background: '#007bff', color: 'white' }}>Login</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-muted/50 px-4 py-2 border-b flex items-center gap-2">
                <Terminal className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium text-sm">Terminal</span>
              </div>
              <div className="p-4 bg-black min-h-[150px] font-mono text-sm">
                {logs.map((log, i) => (
                  <div key={i} className="text-green-400">{log}</div>
                ))}
                <div className="text-gray-500 mt-2">$ _</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}