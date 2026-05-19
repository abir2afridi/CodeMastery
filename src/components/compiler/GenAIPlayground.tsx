import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "chat" | "agent" | "rag" | "stream" | "embed";

const BRAND = "#EC4899";

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "chat", label: "AI Chat", icon: "\u{1F4AC}" },
  { id: "agent", label: "Agent Builder", icon: "\u{1F916}" },
  { id: "rag", label: "RAG Visualizer", icon: "\u{1F50D}" },
  { id: "stream", label: "Token Stream", icon: "\u{1F4E1}" },
  { id: "embed", label: "Embedding Explorer", icon: "\u{1F9E9}" },
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

function GlowingDot({ color, pulse }: { color: string; pulse?: boolean }) {
  return (
    <motion.span
      className="inline-block w-2 h-2 rounded-full"
      style={{ backgroundColor: color }}
      animate={pulse ? { opacity: [1, 0.3, 1], scale: [1, 0.8, 1] } : undefined}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

// ── Chat Messages ──
interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: number;
  model?: string;
  tokens?: number;
}

type GenModel = "gpt4" | "claude3" | "gemini" | "llama3" | "mistral";

const genModels: { id: GenModel; label: string; color: string; speed: string }[] = [
  { id: "gpt4", label: "GPT-4", color: "#10a37f", speed: "Fast" },
  { id: "claude3", label: "Claude 3", color: "#d97706", speed: "Medium" },
  { id: "gemini", label: "Gemini", color: "#1a73e8", speed: "Fast" },
  { id: "llama3", label: "Llama 3", color: "#7c3aed", speed: "Very Fast" },
  { id: "mistral", label: "Mistral", color: "#dc2626", speed: "Very Fast" },
];

const promptTemplates = [
  { label: "Explain Code", prompt: "Explain this code in detail:\n\n```python\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n```" },
  { label: "Write a Poem", prompt: "Write a short poem about artificial intelligence and the future of humanity." },
  { label: "Summarize", prompt: "Summarize the key concepts of Retrieval-Augmented Generation (RAG) in AI." },
  { label: "Brainstorm", prompt: "Brainstorm 10 creative SaaS product ideas that leverage generative AI." },
  { label: "Debug Code", prompt: "Debug this code and fix the issue:\n\n```js\nfunction findMax(arr) {\n  let max = 0;\n  for (let i = 0; i < arr.length; i++) {\n    if (arr[i] > max) max = arr[i];\n  }\n}\n```" },
];

const aiResponses: Record<string, string[]> = {
  "Explain Code": [
    "Here's a detailed explanation of the Fibonacci function:\n\n**What it does:**\nThis recursive function calculates the nth Fibonacci number. The Fibonacci sequence starts with 0, 1, 1, 2, 3, 5, 8, 13... where each number is the sum of the two preceding ones.\n\n**Base Case:**\nWhen `n <= 1`, the function returns `n` directly (F(0)=0, F(1)=1).\n\n**Recursive Case:**\nFor n > 1, it calls itself twice: `fibonacci(n-1)` + `fibonacci(n-2)`.\n\n**Time Complexity:** O(2^n) — exponential! Each call branches into two more calls.\n\n**Optimization:** Use memoization to cache results, reducing to O(n).",
  ],
  "Write a Poem": [
    "**Silicon Dreams**\n\nIn circuits deep where electrons flow,\nA new intelligence begins to grow.\nNot born of flesh or mortal clay,\nBut code that learns a different way.\n\nIt reads our words, it studies art,\nIt maps the chambers of the heart.\nNo hunger drives it, no fear of death,\nJust endless data, every breath.\n\nWill it be friend or rival race?\nA mirror held to human face?\nPerhaps the question we should ask\nIs not its power, but our own task.\n\nTo teach it kindness, truth, and grace,\nAnd let it help the human race\nReach heights we never dared to dream—\nWhere mind and machine form one team.",
  ],
  "Summarize": [
    "**Retrieval-Augmented Generation (RAG) — Key Concepts**\n\nRAG is a technique that enhances LLM outputs by retrieving relevant information from external knowledge sources before generating a response.\n\n**Core Components:**\n1. **Indexing** — Documents are chunked, embedded into vectors, and stored in a vector database.\n2. **Retrieval** — When a query comes in, it's embedded and used to search for the most relevant document chunks.\n3. **Generation** — The retrieved context is injected into the prompt, and the LLM generates a response grounded in that context.\n\n**Benefits:**\n- Grounds responses in factual data\n- Reduces hallucinations\n- Enables knowledge updates without retraining\n- Supports citations and source attribution\n\n**Common Stack:** LangChain + Pinecone/Weaviate + OpenAI/Claude + Embedding models",
  ],
  "Brainstorm": [
    "**10 GenAI SaaS Product Ideas**\n\n1. **DocuMind AI** — Intelligent document analysis platform that extracts insights from contracts, reports, and research papers.\n2. **CodeReviewGPT** — Automated code review assistant that catches bugs, suggests optimizations, and enforces style guides.\n3. **LegalLex** — AI-powered contract drafting and review for small businesses.\n4. **EduTutor Pro** — Personalized tutoring platform that adapts to each student's learning style.\n5. **HealthCompanion** — AI health assistant for symptom analysis, medication tracking, and wellness planning.\n6. **MarketPulse** — Real-time market sentiment analysis from news, social media, and earnings calls.\n7. **DesignMate** — AI UI/UX design assistant that generates components, layouts, and design systems.\n8. **SupportGenie** — Smart customer support platform with context-aware chatbots and agent assist.\n9. **ResumeCraft** — AI-powered resume builder with tailored optimization for ATS systems.\n10. **DataStory** — Natural language data analytics that turns queries into visualizations and narratives.",
  ],
  "Debug Code": [
    "**Issues Found:**\n\n1. **Missing return statement** — The `findMax` function doesn't return `max`!\n2. **Edge case: empty array** — If `arr` is empty, `max = 0` is misleading (what if all numbers are negative?)\n3. **Input validation** — Doesn't handle non-array inputs.\n\n**Fixed Version:**\n```js\nfunction findMax(arr) {\n  if (!Array.isArray(arr) || arr.length === 0) {\n    return undefined;\n  }\n  let max = arr[0];\n  for (let i = 1; i < arr.length; i++) {\n    if (arr[i] > max) max = arr[i];\n  }\n  return max;\n}\n```\n\n**Improvements:**\n- Returns `undefined` for empty/invalid input\n- Initializes `max` with first element (handles negative values)\n- Returns the computed maximum value",
  ],
};

function genId() { return Math.random().toString(36).slice(2, 9); }

// ── Tab 1: ChatGPT-style Chat ──
function ChatTab() {
  const [messages, setMessages] = useState<Message[]>([
    { id: "welcome", role: "assistant", content: "Hello! I'm your GenAI assistant. Ask me anything about generative AI, prompt engineering, LLMs, or try one of the templates below.", timestamp: Date.now(), model: "gpt4" },
  ]);
  const [input, setInput] = useState("");
  const [selectedModel, setSelectedModel] = useState<GenModel>("gpt4");
  const [temperature, setTemperature] = useState(0.7);
  const [topP, setTopP] = useState(0.9);
  const [maxTokens, setMaxTokens] = useState(1024);
  const [streaming, setStreaming] = useState(false);
  const [currentStream, setCurrentStream] = useState("");
  const [showTemplates, setShowTemplates] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const streamIdxRef = useRef(0);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, currentStream]);

  const sendMessage = useCallback((content: string) => {
    if (!content.trim() || streaming) return;
    setShowTemplates(false);

    const userMsg: Message = { id: genId(), role: "user", content, timestamp: Date.now() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setStreaming(true);
    setCurrentStream("");

    const templateKey = promptTemplates.find((t) => t.prompt === content)?.label
      || promptTemplates.find((t) => content.includes(t.prompt.slice(0, 30)))?.label;
    const responseText = templateKey && aiResponses[templateKey]
      ? aiResponses[templateKey][0]
      : `Great question about **${content.slice(0, 40)}...**\n\nGenerative AI encompasses a wide range of technologies including large language models, diffusion models for image generation, and multimodal systems that combine text, images, and audio.\n\nKey aspects to consider:\n- **Architecture**: Transformers form the backbone of most modern GenAI systems\n- **Training**: Models are trained on massive datasets using self-supervised learning\n- **Fine-tuning**: Domain-specific adaptation through techniques like LoRA and PEFT\n- **Deployment**: Production systems require careful consideration of latency, cost, and safety\n\nWould you like me to elaborate on any specific aspect?`;

    let idx = 0;
    const interval = setInterval(() => {
      idx += 2;
      setCurrentStream(responseText.slice(0, idx));
      if (idx >= responseText.length) {
        clearInterval(interval);
        const aiMsg: Message = {
          id: genId(), role: "assistant", content: responseText,
          timestamp: Date.now(), model: selectedModel,
          tokens: Math.ceil(responseText.length / 4),
        };
        setMessages((prev) => [...prev, aiMsg]);
        setCurrentStream("");
        setStreaming(false);
      }
    }, 25);
  }, [streaming, selectedModel, input]);

  const selectTemplate = useCallback((prompt: string) => {
    setInput(prompt);
    setShowTemplates(false);
  }, []);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 h-full">
      <div className="xl:col-span-3 flex flex-col h-full min-h-0">
        <SectionLabel>AI Chat {streaming && <GlowingDot color={BRAND} pulse />}</SectionLabel>

        <div className="flex-1 overflow-y-auto space-y-3 pr-2 mb-3 min-h-0">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                  msg.role === "user"
                    ? "text-white"
                    : "bg-foreground/5 border border-foreground/10"
                }`}
                style={msg.role === "user" ? { backgroundColor: BRAND } : {}}
              >
                {msg.role === "assistant" && (
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider">
                      {genModels.find((m) => m.id === msg.model)?.label || "AI"}
                    </span>
                    {msg.tokens && (
                      <span className="text-[9px] text-foreground/30">{msg.tokens} tokens</span>
                    )}
                  </div>
                )}
                <div className="text-xs leading-relaxed whitespace-pre-wrap">{msg.content}</div>
              </div>
            </div>
          ))}

          {streaming && (
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-2xl px-4 py-3 bg-foreground/5 border border-foreground/10">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider">
                    {genModels.find((m) => m.id === selectedModel)?.label}
                  </span>
                  <GlowingDot color={BRAND} pulse />
                </div>
                <div className="text-xs leading-relaxed whitespace-pre-wrap">{currentStream}</div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="relative">
          {showTemplates && (
            <div className="absolute bottom-full mb-2 left-0 right-0 bg-card border border-foreground/10 rounded-xl overflow-hidden shadow-xl z-10">
              {promptTemplates.map((t, i) => (
                <button
                  key={i}
                  onClick={() => selectTemplate(t.prompt)}
                  className="w-full text-left px-4 py-2.5 text-xs font-medium text-foreground/70 hover:bg-foreground/5 hover:text-foreground transition-colors border-b border-foreground/5 last:border-0"
                >
                  {t.icon || "\u{1F4DD}"} {t.label}
                </button>
              ))}
            </div>
          )}
          <div className="flex gap-2">
            <textarea
              className="flex-1 bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-3 text-xs font-mono resize-none outline-none focus:border-pink-500/50 transition-colors"
              rows={2}
              placeholder="Ask about generative AI..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(input); } }}
            />
            <div className="flex flex-col gap-1.5">
              <button
                onClick={() => sendMessage(input)}
                disabled={streaming || !input.trim()}
                className="px-4 py-3 rounded-xl text-xs font-bold text-white transition-all disabled:opacity-30"
                style={{ backgroundColor: BRAND }}
              >
                {streaming ? "\u{23F3}" : "\u{2191}"}
              </button>
              <button
                onClick={() => setShowTemplates(!showTemplates)}
                className="px-4 py-2 rounded-xl text-xs text-foreground/50 hover:text-foreground bg-foreground/5 transition-all"
              >
                {"\u{1F4CB}"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Controls */}
      <div className="space-y-4">
        <SectionLabel>Model</SectionLabel>
        <div className="space-y-1.5">
          {genModels.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedModel(m.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border text-left transition-all ${
                selectedModel === m.id
                  ? "border-foreground/30 bg-foreground/5"
                  : "border-transparent hover:bg-foreground/5"
              }`}
            >
              <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: m.color }} />
              <div className="min-w-0">
                <div className="text-xs font-bold truncate">{m.label}</div>
                <div className="text-[9px] text-foreground/40">{m.speed}</div>
              </div>
              {selectedModel === m.id && (
                <span className="ml-auto text-[9px] text-pink-500 font-bold">ON</span>
              )}
            </button>
          ))}
        </div>

        <SectionLabel>Parameters</SectionLabel>
        <div className="space-y-3 px-1">
          <div>
            <div className="flex justify-between text-[10px] text-foreground/50 mb-1">
              <span>Temperature</span><span>{temperature.toFixed(1)}</span>
            </div>
            <input type="range" min="0" max="2" step="0.1" value={temperature}
              onChange={(e) => setTemperature(parseFloat(e.target.value))}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style={{ accentColor: BRAND }}
            />
          </div>
          <div>
            <div className="flex justify-between text-[10px] text-foreground/50 mb-1">
              <span>Top-P</span><span>{topP.toFixed(1)}</span>
            </div>
            <input type="range" min="0" max="1" step="0.05" value={topP}
              onChange={(e) => setTopP(parseFloat(e.target.value))}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style={{ accentColor: BRAND }}
            />
          </div>
          <div>
            <div className="flex justify-between text-[10px] text-foreground/50 mb-1">
              <span>Max Tokens</span><span>{maxTokens}</span>
            </div>
            <input type="range" min="64" max="4096" step="64" value={maxTokens}
              onChange={(e) => setMaxTokens(parseInt(e.target.value))}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style={{ accentColor: BRAND }}
            />
          </div>
        </div>

        <SectionLabel>Stats</SectionLabel>
        <div className="space-y-1 text-[10px] font-mono text-foreground/50">
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5">
            <span>Messages</span><span>{messages.length - 1}</span>
          </div>
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5">
            <span>Total Tokens</span><span>{messages.reduce((s, m) => s + (m.tokens || 0), 0)}</span>
          </div>
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5">
            <span>Est. Cost</span><span>~${(messages.reduce((s, m) => s + (m.tokens || 0), 0) * 0.00001).toFixed(4)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Tab 2: Agent Builder ──
function AgentTab() {
  const [tools, setTools] = useState<string[]>(["web_search", "code_interpreter", "file_reader"]);
  const [agentPrompt, setAgentPrompt] = useState("You are a helpful AI assistant with access to tools.");
  const [taskInput, setTaskInput] = useState("");
  const [agentLog, setAgentLog] = useState<string[]>(["Agent simulation ready. Enter a task to begin."]);
  const [running, setRunning] = useState(false);
  const [memoryEnabled, setMemoryEnabled] = useState(true);
  const [memory, setMemory] = useState<string[]>([]);

  const availableTools = [
    { id: "web_search", label: "Web Search", icon: "\u{1F50D}" },
    { id: "code_interpreter", label: "Code Interpreter", icon: "\u{1F4BB}" },
    { id: "file_reader", label: "File Reader", icon: "\u{1F4C4}" },
    { id: "image_gen", label: "Image Generation", icon: "\u{1F5BC}\u{FE0F}" },
    { id: "calculator", label: "Calculator", icon: "\u{1F522}" },
    { id: "database", label: "Database Query", icon: "\u{1F4CA}" },
  ];

  const toggleTool = useCallback((toolId: string) => {
    setTools((prev) => prev.includes(toolId) ? prev.filter((t) => t !== toolId) : [...prev, toolId]);
  }, []);

  const runAgent = useCallback(() => {
    if (!taskInput.trim() || running) return;
    setRunning(true);
    setAgentLog(["Initializing agent...", `System: ${agentPrompt}`, `Tools: [${tools.join(", ")}]`, `Memory: ${memoryEnabled ? "enabled" : "disabled"}`, "---"]);

    const steps = [
      `\u{1F50D} Searching for: "${taskInput}"...`,
      `\u{2705} Retrieved 3 relevant sources`,
      `\u{1F4DD} Processing information through LLM...`,
      `\u{1F9E0} Consulting memory: ${memoryEnabled ? "found 2 relevant past interactions" : "skipped (disabled)"}`,
      `\u{1F522} Running analysis on retrieved data...`,
      `\u{1F4AC} Generating response...`,
      `\u{2705} Task complete. Response: Based on my analysis of ${taskInput}, here are the key findings and recommendations. The data suggests several actionable insights that can be implemented immediately.`,
    ];

    let stepIdx = 0;
    const interval = setInterval(() => {
      if (stepIdx < steps.length) {
        setAgentLog((prev) => [...prev, steps[stepIdx]]);
        stepIdx++;
      } else {
        clearInterval(interval);
        setMemory((prev) => [...prev.slice(-9), `Task: ${taskInput}`]);
        setRunning(false);
        setAgentLog((prev) => [...prev, "---", `\u{2705} Agent finished in ${(steps.length * 0.8).toFixed(1)}s`]);
      }
    }, 800);
  }, [taskInput, agentPrompt, tools, running, memoryEnabled]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="xl:col-span-2 space-y-4 flex flex-col min-h-0">
        <SectionLabel>Agent Workflow {running && <GlowingDot color="#10b981" pulse />}</SectionLabel>

        <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4 flex-1 overflow-y-auto min-h-[250px]">
          {agentLog.map((line, i) => (
            <div key={i} className="text-[10px] font-mono leading-relaxed text-foreground/60 whitespace-nowrap">{line}</div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            className="flex-1 bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-2.5 text-xs font-mono outline-none focus:border-pink-500/50 transition-colors"
            placeholder="Enter a task for the AI agent..."
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") runAgent(); }}
          />
          <button
            onClick={runAgent}
            disabled={running || !taskInput.trim()}
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-white transition-all disabled:opacity-30"
            style={{ backgroundColor: BRAND }}
          >
            {running ? "\u{23F3}" : "\u{25B6}"}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <SectionLabel>Tools</SectionLabel>
        <div className="space-y-1.5">
          {availableTools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => toggleTool(tool.id)}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all ${
                tools.includes(tool.id)
                  ? "text-foreground bg-foreground/5 border border-foreground/10"
                  : "text-foreground/40 hover:text-foreground/60 border border-transparent"
              }`}
            >
              <span className="text-sm">{tool.icon}</span>
              <span>{tool.label}</span>
              {tools.includes(tool.id) && (
                <span className="ml-auto text-[9px] text-pink-500">ON</span>
              )}
            </button>
          ))}
        </div>

        <SectionLabel>System Prompt</SectionLabel>
        <textarea
          className="w-full h-24 bg-foreground/5 border border-foreground/10 rounded-xl p-3 text-[10px] font-mono resize-none outline-none focus:border-pink-500/50 transition-colors"
          value={agentPrompt}
          onChange={(e) => setAgentPrompt(e.target.value)}
        />

        <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-foreground/5">
          <span className="text-[10px] text-foreground/60">Memory</span>
          <button
            onClick={() => setMemoryEnabled(!memoryEnabled)}
            className={`w-8 h-4 rounded-full transition-colors relative ${memoryEnabled ? "bg-pink-500" : "bg-foreground/20"}`}
          >
            <motion.div
              className="absolute top-0.5 w-3 h-3 bg-white rounded-full"
              animate={{ left: memoryEnabled ? 18 : 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </button>
        </div>

        {memory.length > 0 && (
          <>
            <SectionLabel>Memory ({memory.length})</SectionLabel>
            <div className="space-y-1 max-h-[120px] overflow-y-auto">
              {memory.map((m, i) => (
                <div key={i} className="text-[9px] font-mono text-foreground/40 truncate px-2 py-1 rounded bg-foreground/5">{m}</div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ── Tab 3: RAG Visualizer ──
function RAGTab() {
  const [query, setQuery] = useState("");
  const [documents] = useState([
    { id: 1, title: "Transformers Paper (2017)", content: "The Transformer model architecture eschews recurrence and instead relies entirely on an attention mechanism to draw global dependencies between input and output.", relevance: 0 },
    { id: 2, title: "RAG Paper (2020)", content: "Retrieval-Augmented Generation combines pre-trained parametric memory with non-parametric memory for knowledge-intensive NLP tasks.", relevance: 0 },
    { id: 3, title: "GPT-4 Technical Report", content: "GPT-4 is a large multimodal model capable of processing text and image inputs and producing text outputs.", relevance: 0 },
    { id: 4, title: "Claude Model Card", content: "Claude is an AI assistant created by Anthropic using constitutional AI methods for safe and helpful responses.", relevance: 0 },
    { id: 5, title: "Vector Database Guide", content: "Vector databases store embeddings and enable efficient similarity search using algorithms like HNSW and IVF.", relevance: 0 },
    { id: 6, title: "Prompt Engineering Guide", content: "Chain-of-thought prompting enables complex reasoning by breaking down problems into intermediate steps.", relevance: 0 },
  ]);
  const [retrieved, setRetrieved] = useState<typeof documents>([]);
  const [searching, setSearching] = useState(false);
  const [showPipeline, setShowPipeline] = useState(false);

  const runRAG = useCallback(() => {
    if (!query.trim()) return;
    setSearching(true);
    setShowPipeline(true);
    setRetrieved([]);

    // Simulate embedding + retrieval
    setTimeout(() => {
      const scored = documents.map((d) => ({
        ...d,
        relevance: Math.min(0.99, (d.content.toLowerCase().includes(query.toLowerCase().slice(0, 5)) ? 0.7 : 0.1) + Math.random() * 0.25),
      })).sort((a, b) => b.relevance - a.relevance).slice(0, 4);
      setRetrieved(scored);
      setSearching(false);
    }, 1200);
  }, [query, documents]);

  const pipelineSteps = [
    { label: "Query", desc: `"${query || "..."}"`, active: true },
    { label: "Embed", desc: "Query → Vector (768d)", active: true },
    { label: "Vector Search", desc: "ANN search in DB", active: searching ? "running" : retrieved.length > 0 },
    { label: "Retrieve", desc: `${retrieved.length} chunks fetched`, active: retrieved.length > 0 },
    { label: "Augment", desc: "Context + Query → Prompt", active: retrieved.length > 0 },
    { label: "Generate", desc: "LLM → Response", active: retrieved.length > 0 },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="xl:col-span-2 space-y-4">
        <SectionLabel>RAG Pipeline</SectionLabel>

        {/* Pipeline Steps */}
        {showPipeline && (
          <div className="flex items-center gap-1 overflow-x-auto pb-2">
            {pipelineSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-1 shrink-0">
                <div
                  className={`px-3 py-1.5 rounded-lg text-[9px] font-bold whitespace-nowrap transition-all ${
                    step.active === "running"
                      ? "text-pink-500 bg-pink-500/10 border border-pink-500/30"
                    : step.active
                      ? "text-emerald-500 bg-emerald-500/10 border border-emerald-500/30"
                      : "text-foreground/30 bg-foreground/5 border border-foreground/10"
                  }`}
                >
                  {step.label}
                  {step.active === "running" && <GlowingDot color={BRAND} pulse />}
                </div>
                {step.active && step.desc && (
                  <span className="text-[8px] text-foreground/30 max-w-[80px] truncate">{step.desc}</span>
                )}
                {i < pipelineSteps.length - 1 && (
                  <span className="text-foreground/20 text-[10px]">\u{2192}</span>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-2">
          <input
            className="flex-1 bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-2.5 text-xs font-mono outline-none focus:border-pink-500/50 transition-colors"
            placeholder="Ask a question (e.g., What is the Transformer architecture?)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") runRAG(); }}
          />
          <button
            onClick={runRAG}
            disabled={searching || !query.trim()}
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-white transition-all disabled:opacity-30"
            style={{ backgroundColor: BRAND }}
          >
            {searching ? "\u{23F3}" : "\u{1F50D}"}
          </button>
        </div>

        {/* Retrieved Documents */}
        <div className="space-y-2 min-h-[200px]">
          {searching && (
            <div className="flex items-center justify-center py-8">
              <GlowingDot color={BRAND} pulse />
              <span className="text-xs text-foreground/40 ml-2">Searching vector database...</span>
            </div>
          )}
          {retrieved.map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bg-foreground/5 border border-foreground/10 rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold">{doc.title}</span>
                  <span className="text-[9px] text-foreground/40 bg-foreground/5 px-1.5 py-0.5 rounded">Chunk {doc.id}</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-500 font-bold">
                  {(doc.relevance * 100).toFixed(0)}%
                </span>
              </div>
              <p className="text-[10px] text-foreground/60 leading-relaxed line-clamp-2">{doc.content}</p>
              <div className="mt-2 h-1.5 bg-foreground/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${doc.relevance * 100}%` }}
                  style={{ backgroundColor: doc.relevance > 0.6 ? "#10b981" : "#f59e0b" }}
                />
              </div>
            </motion.div>
          ))}
          {!searching && retrieved.length === 0 && showPipeline && (
            <div className="flex items-center justify-center py-12 text-foreground/30 text-xs italic">
              Enter a query to search the knowledge base
            </div>
          )}
          {retrieved.length > 0 && (
            <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4">
              <p className="text-[10px] font-bold text-foreground/40 mb-2">Augmented Prompt</p>
              <div className="text-[10px] font-mono text-foreground/60 leading-relaxed bg-foreground/5 p-3 rounded-lg">
                <span className="text-pink-500">Context:</span> {retrieved.map((d) => d.content).join(" ").slice(0, 200)}...
                {"\n\n"}
                <span className="text-pink-500">Query:</span> {query}
                {"\n\n"}
                <span className="text-pink-500">Instructions:</span> Answer based on the provided context.
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <SectionLabel>Knowledge Base</SectionLabel>
        <div className="space-y-1.5">
          {documents.map((doc) => (
            <div key={doc.id} className="px-3 py-2 rounded-lg bg-foreground/5 border border-foreground/5">
              <p className="text-[10px] font-bold text-foreground/70 truncate">{doc.title}</p>
              <p className="text-[9px] text-foreground/40 truncate">{doc.content.slice(0, 60)}...</p>
            </div>
          ))}
        </div>

        <SectionLabel>Config</SectionLabel>
        <div className="space-y-1 text-[10px] font-mono text-foreground/50">
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5">
            <span>Top-K</span><span>{retrieved.length || 4}</span>
          </div>
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5">
            <span>Chunk Size</span><span>512</span>
          </div>
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5">
            <span>Embed Model</span><span>text-embedding-3</span>
          </div>
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5">
            <span>DB Type</span><span>Pinecone</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Tab 4: Token Stream ──
function StreamTab() {
  const [tokens, setTokens] = useState<{ text: string; prob: number; type: "token" | "special" | "space" }[]>([]);
  const [streaming, setStreaming] = useState(false);
  const [contextPos, setContextPos] = useState(0);
  const [contextSize, setContextSize] = useState(4096);
  const [inputText, setInputText] = useState("Generative AI is transforming how we build software and interact with machines.");
  const tokenEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    tokenEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [tokens]);

  const startStream = useCallback(() => {
    if (streaming) return;
    setTokens([]);
    setStreaming(true);
    setContextPos(0);

    const words = inputText.split(/(\s+)/).filter(Boolean);
    let wordIdx = 0;

    const interval = setInterval(() => {
      if (wordIdx < words.length) {
        const word = words[wordIdx];
        const isSpace = /^\s+$/.test(word);
        // Simulate subword tokenization
        if (word.length <= 3 || isSpace) {
          setTokens((prev) => [...prev, { text: word, prob: 0.85 + Math.random() * 0.14, type: isSpace ? "space" : "token" }]);
        } else {
          const mid = Math.ceil(word.length / 2);
          setTokens((prev) => [...prev,
            { text: word.slice(0, mid), prob: 0.7 + Math.random() * 0.2, type: "token" },
          ]);
          setTimeout(() => {
            setTokens((prev) => [...prev,
              { text: word.slice(mid), prob: 0.8 + Math.random() * 0.15, type: "token" },
            ]);
          }, 30);
        }
        setContextPos((prev) => Math.min(prev + word.length * 2, contextSize));
        wordIdx++;
      } else {
        clearInterval(interval);
        setStreaming(false);
      }
    }, 120);
  }, [inputText, streaming, contextSize]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="xl:col-span-2 space-y-4">
        <SectionLabel>Token Streaming {streaming && <GlowingDot color={BRAND} pulse />}</SectionLabel>

        {/* Context Window */}
        <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-foreground/40">Context Window</span>
            <span className="text-[9px] font-mono text-foreground/30">{contextPos} / {contextSize} tokens</span>
          </div>
          <div className="h-3 bg-foreground/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: BRAND }}
              animate={{ width: `${(contextPos / contextSize) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="flex justify-between text-[8px] text-foreground/30 mt-0.5">
            <span>0</span>
            <span>{Math.round(contextSize * 0.25)}</span>
            <span>{Math.round(contextSize * 0.5)}</span>
            <span>{Math.round(contextSize * 0.75)}</span>
            <span>{contextSize}</span>
          </div>
        </div>

        {/* Token Display */}
        <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4 min-h-[200px] max-h-[400px] overflow-y-auto">
          <div className="flex flex-wrap gap-0.5 leading-relaxed">
            {tokens.map((t, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`inline-block px-0.5 rounded text-xs font-mono transition-colors ${
                  t.type === "space" ? "bg-transparent" : "hover:bg-foreground/10"
                }`}
                style={t.type !== "space" ? { backgroundColor: `${BRAND}${Math.round(t.prob * 30).toString(16).padStart(2, "0")}` } : {}}
                title={`prob: ${(t.prob * 100).toFixed(0)}%`}
              >
                {t.type === "space" ? "\u{00A0}\u{00A0}" : t.text}
              </motion.span>
            ))}
            {streaming && <span className="animate-pulse text-pink-500 text-xs">{"\u{258C}"}</span>}
            <div ref={tokenEndRef} />
          </div>
          {tokens.length === 0 && !streaming && (
            <p className="text-xs text-foreground/30 italic">Click "Stream" to see token-by-token generation</p>
          )}
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <input
            className="flex-1 bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-2.5 text-xs font-mono outline-none focus:border-pink-500/50 transition-colors"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            onClick={startStream}
            disabled={streaming || !inputText.trim()}
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-white transition-all disabled:opacity-30"
            style={{ backgroundColor: BRAND }}
          >
            {streaming ? "\u{23F3}" : "\u{25B6} Stream"}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <SectionLabel>Token Stats</SectionLabel>
        <div className="space-y-1 text-[10px] font-mono text-foreground/50">
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5">
            <span>Tokens</span><span>{tokens.length}</span>
          </div>
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5">
            <span>Characters</span><span>{tokens.reduce((s, t) => s + t.text.length, 0)}</span>
          </div>
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5">
            <span>Avg Prob</span><span>{(tokens.reduce((s, t) => s + t.prob, 0) / (tokens.length || 1) * 100).toFixed(0)}%</span>
          </div>
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5">
            <span>Context Used</span><span>{((contextPos / contextSize) * 100).toFixed(0)}%</span>
          </div>
        </div>

        <SectionLabel>Config</SectionLabel>
        <div className="space-y-3 px-1">
          <div>
            <div className="flex justify-between text-[10px] text-foreground/50 mb-1">
              <span>Context Size</span><span>{contextSize}</span>
            </div>
            <input type="range" min="1024" max="32768" step="1024" value={contextSize}
              onChange={(e) => setContextSize(parseInt(e.target.value))}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style={{ accentColor: BRAND }}
            />
          </div>
        </div>

        {tokens.length > 0 && (
          <>
            <SectionLabel>Top Tokens</SectionLabel>
            <div className="space-y-1">
              {[...tokens].filter((t) => t.type === "token").slice(-5).reverse().map((t, i) => (
                <div key={i} className="flex items-center gap-2 px-2 py-1 rounded bg-foreground/5">
                  <span className="text-[10px] font-mono font-bold text-foreground/70">"{t.text}"</span>
                  <span className="ml-auto text-[9px] text-emerald-500">{(t.prob * 100).toFixed(0)}%</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ── Tab 5: Embedding Explorer ──
function EmbedTab() {
  const [embedInput, setEmbedInput] = useState("AI");
  const [embedding, setEmbedding] = useState<number[]>([]);
  const [generating, setGenerating] = useState(false);
  const [dimensions, setDimensions] = useState(8);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<{ text: string; score: number }[]>([]);

  const sampleTexts = [
    "Artificial Intelligence", "Machine Learning", "Deep Learning",
    "Natural Language Processing", "Computer Vision", "Robotics",
    "Data Science", "Neural Networks", "Reinforcement Learning",
    "Python programming", "JavaScript frameworks", "Cloud computing",
  ];

  const generateEmbedding = useCallback((text: string) => {
    setGenerating(true);
    setTimeout(() => {
      // Simulate embedding generation with deterministic-ish values
      const seed = text.length + text.charCodeAt(0) || 0;
      const emb = Array.from({ length: dimensions }, (_, i) => {
        const val = Math.sin(seed * (i + 1) * 0.7) * 0.5 + 0.5;
        return Math.round(val * 1000) / 1000;
      });
      setEmbedding(emb);
      setGenerating(false);
    }, 600);
  }, [dimensions]);

  const runSearch = useCallback(() => {
    if (!searchQuery.trim()) return;
    const seed = searchQuery.length + searchQuery.charCodeAt(0) || 0;
    const results = sampleTexts
      .map((text) => {
        const sim = Math.min(0.99, (text.toLowerCase().includes(searchQuery.toLowerCase().slice(0, 3)) ? 0.5 : 0.05) + Math.random() * 0.4);
        return { text, score: Math.round(sim * 1000) / 1000 };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
    setSearchResults(results);
  }, [searchQuery]);

  const maxVal = Math.max(...embedding, 0.01);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-full">
      <div className="xl:col-span-2 space-y-4">
        <SectionLabel>Embedding Vector</SectionLabel>

        <div className="flex gap-2">
          <input
            className="flex-1 bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-2.5 text-xs font-mono outline-none focus:border-pink-500/50 transition-colors"
            value={embedInput}
            onChange={(e) => setEmbedInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") generateEmbedding(embedInput); }}
          />
          <button
            onClick={() => generateEmbedding(embedInput)}
            disabled={generating || !embedInput.trim()}
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-white transition-all disabled:opacity-30"
            style={{ backgroundColor: BRAND }}
          >
            {generating ? "\u{23F3}" : "\u{1F9E9}"}
          </button>
        </div>

        {embedding.length > 0 && (
          <div className="bg-foreground/5 border border-foreground/10 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold text-foreground/40">Vector ({dimensions}d)</span>
              <span className="text-[9px] text-foreground/30">[{embedding.map((v) => v.toFixed(3)).join(", ")}]</span>
            </div>
            <div className="flex gap-1 items-end h-24">
              {embedding.map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${(val / maxVal) * 100}%` }}
                  className="flex-1 rounded-t-sm"
                  style={{ backgroundColor: val > 0.5 ? "#EC4899" : "#8B5CF6" }}
                  title={`dim ${i}: ${val.toFixed(3)}`}
                />
              ))}
            </div>
          </div>
        )}

        <SectionLabel>Semantic Search</SectionLabel>
        <div className="flex gap-2">
          <input
            className="flex-1 bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-2.5 text-xs font-mono outline-none focus:border-pink-500/50 transition-colors"
            placeholder="Search sample texts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") runSearch(); }}
          />
          <button
            onClick={runSearch}
            disabled={!searchQuery.trim()}
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-white transition-all disabled:opacity-30"
            style={{ backgroundColor: BRAND }}
          >
            {"\u{1F50D}"}
          </button>
        </div>

        {searchResults.length > 0 && (
          <div className="space-y-1.5">
            {searchResults.map((r, i) => (
              <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-foreground/5 border border-foreground/5">
                <span className="text-xs text-foreground/70 flex-1">{r.text}</span>
                <span className="text-[10px] font-mono font-bold" style={{ color: r.score > 0.5 ? "#10b981" : "#f59e0b" }}>
                  {(r.score * 100).toFixed(0)}%
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-4">
        <SectionLabel>Config</SectionLabel>
        <div>
          <div className="flex justify-between text-[10px] text-foreground/50 mb-1">
            <span>Dimensions</span><span>{dimensions}</span>
          </div>
          <input type="range" min="4" max="64" step="2" value={dimensions}
            onChange={(e) => { setDimensions(parseInt(e.target.value)); setEmbedding([]); }}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
            style={{ accentColor: BRAND }}
          />
        </div>

        <SectionLabel>Sample Corpus</SectionLabel>
        <div className="space-y-1 max-h-[300px] overflow-y-auto">
          {sampleTexts.map((text, i) => (
            <button
              key={i}
              onClick={() => { setEmbedInput(text); generateEmbedding(text); }}
              className="w-full text-left px-3 py-1.5 rounded-lg text-[10px] text-foreground/60 hover:bg-foreground/5 transition-colors"
            >
              {text}
            </button>
          ))}
        </div>

        <SectionLabel>Embed Stats</SectionLabel>
        <div className="space-y-1 text-[10px] font-mono text-foreground/50">
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5">
            <span>Dimensions</span><span>{dimensions}</span>
          </div>
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5">
            <span>Model</span><span>text-embedding-3</span>
          </div>
          <div className="flex justify-between px-2 py-1 rounded bg-foreground/5">
            <span>Norm</span><span>{embedding.length ? Math.sqrt(embedding.reduce((s, v) => s + v * v, 0)).toFixed(3) : "-"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ──
export function GenAIPlayground() {
  const [activeTab, setActiveTab] = useState<Tab>("chat");

  const renderTab = () => {
    switch (activeTab) {
      case "chat": return <ChatTab />;
      case "agent": return <AgentTab />;
      case "rag": return <RAGTab />;
      case "stream": return <StreamTab />;
      case "embed": return <EmbedTab />;
      default: return null;
    }
  };

  return (
    <div className="w-full h-full flex flex-col" style={{ isolation: "isolate" }}>
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #EC4899 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
      />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(circle, #EC4899 0%, transparent 70%)", transform: "translate(-20%, 20%)" }}
      />

      {/* Tabs */}
      <div className="flex border-b border-foreground/10 shrink-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="flex items-center gap-1.5 px-4 py-3 text-xs font-bold border-b-2 transition-all"
            style={tabStyle(activeTab === tab.id)}
          >
            <span>{tab.icon}</span>
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto p-6" style={{ minHeight: 0 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0.6, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.4, y: -4 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {renderTab()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
