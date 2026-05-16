import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Play, Code2, Layout, Terminal, RefreshCw, FileCode, Component } from "lucide-react";

const DEFAULT_SCRIPT = `import { ref, computed } from 'vue'

// Reactive state
const count = ref(0)
const message = ref('Hello Vue!')
const items = ref([
  { id: 1, name: 'Apple', price: 1.5 },
  { id: 2, name: 'Banana', price: 0.8 },
  { id: 3, name: 'Orange', price: 2.0 }
])

// Computed
const totalPrice = computed(() => {
  return items.value.reduce((sum, item) => sum + item.price, 0)
})

const isEven = computed(() => count.value % 2 === 0)

// Methods
const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}

const reset = () => {
  count.value = 0
}

const addItem = () => {
  const newId = items.value.length + 1
  items.value.push({
    id: newId,
    name: \`Item \${newId}\`,
    price: Math.random() * 3
  })
}

// Expose to template
return { count, message, items, totalPrice, isEven, increment, decrement, reset, addItem }`;

const DEFAULT_TEMPLATE = `<div class="container">
  <header class="header">
    <h1>{{ message }}</h1>
    <p class="counter-info">
      Count: <strong>{{ count }}</strong>
      <span :class="{ 'even': isEven, 'odd': !isEven }">
        ({{ isEven ? 'Even' : 'Odd' }})
      </span>
    </p>
  </header>

  <main>
    <div class="controls">
      <button @click="decrement" class="btn btn-danger">-</button>
      <button @click="reset" class="btn btn-secondary">Reset</button>
      <button @click="increment" class="btn btn-success">+</button>
    </div>

    <div class="add-item">
      <button @click="addItem" class="btn btn-primary">
        Add Item
      </button>
    </div>

    <div class="items-list">
      <h3>Items ({{ items.length }})</h3>
      <ul>
        <li v-for="item in items" :key="item.id">
          <span class="item-name">{{ item.name }}</span>
          <span class="item-price">\${{ item.price.toFixed(2) }}</span>
        </li>
      </ul>
      <p class="total">Total: <strong>\${{ totalPrice.toFixed(2) }}</strong></p>
    </div>
  </main>
</div>

<!-- Output: {{ 2 + 2 }} = {{ 2 + 2 }} -->`;

const DEFAULT_CSS = `.container {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 30px;
  padding: 20px;
  background: linear-gradient(135deg, #42B883 0%, #34495E 100%);
  color: white;
  border-radius: 12px;
}

.header h1 {
  margin: 0;
  font-size: 1.8rem;
}

.counter-info {
  margin-top: 15px;
  font-size: 1.1rem;
}

.counter-info strong {
  font-size: 1.4rem;
}

.even {
  color: #42B883;
}

.odd {
  color: #FF6B6B;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.btn {
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-success {
  background: #42B883;
  color: white;
}

.btn-success:hover {
  background: #359268;
}

.btn-danger {
  background: #FF6B6B;
  color: white;
}

.btn-danger:hover {
  background: #e05555;
}

.btn-secondary {
  background: #95a5a6;
  color: white;
}

.btn-primary {
  background: #3498db;
  color: white;
  width: 100%;
}

.btn-primary:hover {
  background: #2980b9;
}

.add-item {
  margin-bottom: 20px;
}

.items-list {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
}

.items-list h3 {
  margin-top: 0;
  color: #2c3e50;
}

.items-list ul {
  list-style: none;
  padding: 0;
}

.items-list li {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background: white;
  margin-bottom: 8px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.item-name {
  font-weight: 500;
  color: #2c3e50;
}

.item-price {
  color: #42B883;
  font-weight: 600;
}

.total {
  text-align: right;
  font-size: 1.2rem;
  color: #2c3e50;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 2px solid #e0e0e0;
}

.total strong {
  color: #42B883;
}`;

type Tab = "script" | "template" | "style";

export default function VueCompiler() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("script");
  const [scriptCode, setScriptCode] = useState(DEFAULT_SCRIPT);
  const [templateCode, setTemplateCode] = useState(DEFAULT_TEMPLATE);
  const [styleCode, setStyleCode] = useState(DEFAULT_CSS);
  const [logs, setLogs] = useState<string[]>(["Vue app initialized", "Vite dev server ready", "State: 0 items, $0.00 total"]);

  const handleRun = () => {
    setLogs((prev) => [
      ...prev,
      `[${new Date().toLocaleTimeString()}] Build successful`,
      "Application running at http://localhost:5173"
    ]);
  };

  const handleReset = () => {
    setScriptCode(DEFAULT_SCRIPT);
    setTemplateCode(DEFAULT_TEMPLATE);
    setStyleCode(DEFAULT_CSS);
    setLogs(["Vue app reset", "Vite dev server ready", "State: 0 items, $0.00 total"]);
  };

  const codeMap: Record<Tab, { value: string; setValue: (v: string) => void; lang: any; label: string }> = {
    script: { value: scriptCode, setValue: setScriptCode, lang: javascript({ jsx: true }), label: "script" },
    template: { value: templateCode, setValue: setTemplateCode, lang: html(), label: "template" },
    style: { value: styleCode, setValue: setStyleCode, lang: css(), label: "style" },
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
              <Component className="h-6 w-6 text-[#42B883]" />
              <span className="font-bold text-lg">Vue Playground</span>
              <span className="text-xs bg-[#42B883]/20 text-[#42B883] px-2 py-0.5 rounded">Vue 3 + Composition API</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleReset}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset
            </Button>
            <Button size="sm" className="bg-[#42B883] hover:bg-[#42B883]/80" onClick={handleRun}>
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
                onClick={() => setActiveTab("script")}
                className={`px-4 py-2 flex items-center gap-2 text-sm font-medium border-b-2 ${
                  activeTab === "script" ? "border-[#42B883] text-[#42B883]" : "border-transparent"
                }`}
              >
                <FileCode className="h-4 w-4" />
                App.vue (script)
              </button>
              <button
                onClick={() => setActiveTab("template")}
                className={`px-4 py-2 flex items-center gap-2 text-sm font-medium border-b-2 ${
                  activeTab === "template" ? "border-[#42B883] text-[#42B883]" : "border-transparent"
                }`}
              >
                <Layout className="h-4 w-4" />
                App.vue (template)
              </button>
              <button
                onClick={() => setActiveTab("style")}
                className={`px-4 py-2 flex items-center gap-2 text-sm font-medium border-b-2 ${
                  activeTab === "style" ? "border-[#42B883] text-[#42B883]" : "border-transparent"
                }`}
              >
                <Code2 className="h-4 w-4" />
                App.vue (style)
              </button>
            </div>

            {/* Editor */}
            <div className="border rounded-lg overflow-hidden">
              <CodeMirror
                value={codeMap[activeTab].value}
                height="400px"
                theme={oneDark}
                extensions={[codeMap[activeTab].lang]}
                onChange={codeMap[activeTab].setValue}
                className="text-sm"
              />
            </div>

            {/* Terminal */}
            <div className="border rounded-lg bg-black text-green-400 p-4 font-mono text-xs">
              <div className="flex items-center gap-2 mb-2 text-gray-400">
                <Terminal className="h-4 w-4" />
                <span>Console Output</span>
              </div>
              <div className="space-y-1 max-h-40 overflow-y-auto">
                {logs.map((log, i) => (
                  <div key={i}>{log}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="border rounded-lg bg-white min-h-[500px]">
            <div className="bg-gray-100 border-b px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-2 text-sm text-gray-600">Preview - http://localhost:5173</span>
            </div>
            <div className="p-4">
              <div className="preview-placeholder">
                <style>{styleCode}</style>
                <div className="container">
                  <header className="header">
                    <h1>Hello Vue!</h1>
                    <p className="counter-info">
                      Count: <strong>0</strong>
                      <span className="even">(Even)</span>
                    </p>
                  </header>
                  <main>
                    <div className="controls">
                      <button className="btn btn-danger">-</button>
                      <button className="btn btn-secondary">Reset</button>
                      <button className="btn btn-success">+</button>
                    </div>
                    <div className="add-item">
                      <button className="btn btn-primary">Add Item</button>
                    </div>
                    <div className="items-list">
                      <h3>Items (0)</h3>
                      <ul></ul>
                      <p className="total">Total: <strong>$0.00</strong></p>
                    </div>
                  </main>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Live preview requires browser-based Vue runtime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}