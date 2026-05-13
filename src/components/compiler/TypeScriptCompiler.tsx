import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Monitor, Tablet, Smartphone, RotateCcw, Trash2, ExternalLink, ArrowLeft, Play, AlertCircle, FileCode, Terminal } from "lucide-react";
import { useI18n } from "@/hooks/useI18n";

declare global {
  interface Window {
    ts: any;
  }
}

const DEFAULT_TYPESCRIPT = `// Welcome to TypeScript!
// TypeScript adds type safety to JavaScript

// Basic type annotations
let message: string = "Hello, TypeScript!";
let count: number = 42;
let isActive: boolean = true;

console.log(message);
console.log("Count:", count);
console.log("Active:", isActive);

// Try uncommenting this - TypeScript will catch the error!
// message = 42; // Error: Type 'number' is not assignable to type 'string'

// Function with type annotations
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

console.log(greet("CodeMastery"));

// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
console.log("Numbers:", numbers);

// Objects with interfaces
interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = {
  name: "Alice",
  age: 25,
  email: "alice@example.com"
};

console.log("User:", user);

// Try changing age to a string - TypeScript will error!
// user.age = "twenty-five"; // Error`;

interface Props {
  initialCode?: string;
}

interface TypeError {
  code: string;
  message: string;
  line: number;
  column: number;
  endLine?: number;
  endColumn?: number;
}

export function TypeScriptCompiler({ initialCode }: Props) {
  const navigate = useNavigate();
  const { t } = useI18n();
  const [code, setCode] = useState(initialCode ?? DEFAULT_TYPESCRIPT);
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [logs, setLogs] = useState<{ level: string; text: string }[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [tsReady, setTsReady] = useState(false);
  const [compiledJs, setCompiledJs] = useState("");
  const [typeErrors, setTypeErrors] = useState<TypeError[]>([]);
  const [showCompiled, setShowCompiled] = useState(false);
  const [activeTab, setActiveTab] = useState<"output" | "errors" | "compiled">("output");
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  // Load TypeScript compiler from CDN
  useEffect(() => {
    const loadTypeScript = async () => {
      try {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/typescript@5.3.3/lib/typescript.js';
        script.async = true;

        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });

        if (!window.ts) {
          throw new Error('TypeScript not loaded');
        }

        setTsReady(true);
        setLogs([{ level: 'info', text: 'TypeScript compiler loaded successfully' }]);
      } catch (err: any) {
        console.error('Failed to load TypeScript:', err);
        setLogs([{ level: 'error', text: `Failed to load TypeScript: ${err.message}` }]);
      }
    };

    loadTypeScript();

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  // Compile TypeScript and check for errors
  const compileTypeScript = useCallback((tsCode: string) => {
    if (!window.ts || !tsReady) return;

    try {
      const ts = window.ts;

      // Transpile (convert TS to JS)
      const result = ts.transpileModule(tsCode, {
        compilerOptions: {
          target: ts.ScriptTarget.ES2020,
          module: ts.ModuleKind.None,
          strict: true,
          esModuleInterop: true,
          skipLibCheck: true,
          forceConsistentCasingInFileNames: true,
        }
      });

      setCompiledJs(result.outputText);

      // Full type checking with language service
      const fileName = "temp.ts";
      const sourceFile = ts.createSourceFile(
        fileName,
        tsCode,
        ts.ScriptTarget.Latest,
        true,
        ts.ScriptKind.TS
      );

      const compilerOptions: ts.CompilerOptions = {
        target: ts.ScriptTarget.ES2020,
        module: ts.ModuleKind.None,
        strict: true,
        noImplicitAny: true,
        strictNullChecks: true,
      };

      const program = ts.createProgram([fileName], compilerOptions, {
        getSourceFile: (name) => name === fileName ? sourceFile : undefined,
        writeFile: () => {},
        getDefaultLibFileName: () => "lib.d.ts",
        useCaseSensitiveFileNames: () => true,
        getCanonicalFileName: (fileName) => fileName,
        getCurrentDirectory: () => "",
        getNewLine: () => "\n",
        fileExists: (fileName) => fileName === fileName,
        readFile: (fileName) => fileName === fileName ? tsCode : undefined,
        directoryExists: () => true,
        getDirectories: () => [],
      });

      const emitResult = program.emit();
      const allDiagnostics = ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics);

      const errors: TypeError[] = [];
      allDiagnostics.forEach((diagnostic) => {
        if (diagnostic.start !== undefined && diagnostic.length !== undefined) {
          const startLine = sourceFile.getLineAndCharacterOfPosition(diagnostic.start);
          const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");

          // Extract error code if available
          let code = "TS0000";
          const codeMatch = message.match(/^TS(\d+)/);
          if (codeMatch) {
            code = `TS${codeMatch[1]}`;
          }

          errors.push({
            code,
            message: message.replace(/^TS\d+:?\s*/, ""),
            line: startLine.line + 1,
            column: startLine.character + 1,
          });
        }
      });

      setTypeErrors(errors);

      // Update logs with type errors
      if (errors.length > 0) {
        setLogs(prev => [
          ...prev,
          ...errors.map(e => ({ level: 'error', text: `Line ${e.line}: ${e.message}` }))
        ]);
      }

    } catch (err: any) {
      console.error('Compilation error:', err);
      setTypeErrors([{
        code: "TS9999",
        message: err.message,
        line: 1,
        column: 1
      }]);
    }
  }, [tsReady]);

  // Debounced type checking on code change
  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      compileTypeScript(code);
    }, 500);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [code, compileTypeScript]);

  const runCode = async () => {
    if (!tsReady || isRunning) return;

    setIsRunning(true);
    setLogs([]);

    try {
      // Get the compiled JS
      const ts = window.ts;
      const result = ts.transpileModule(code, {
        compilerOptions: {
          target: ts.ScriptTarget.ES2020,
          module: ts.ModuleKind.None,
        }
      });

      const jsCode = result.outputText;

      // Execute in iframe
      const iframe = iframeRef.current;
      if (iframe) {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (iframeDoc) {
          iframeDoc.open();
          iframeDoc.write(`
            <!DOCTYPE html>
            <html>
            <head>
              <script>
                // Override console to capture output
                const originalConsole = { ...console };
                console.log = (...args) => {
                  window.parent.postMessage({ type: 'console', level: 'log', args: args.map(a => String(a)) }, '*');
                };
                console.error = (...args) => {
                  window.parent.postMessage({ type: 'console', level: 'error', args: args.map(a => String(a)) }, '*');
                };
                console.warn = (...args) => {
                  window.parent.postMessage({ type: 'console', level: 'warn', args: args.map(a => String(a)) }, '*');
                };
                window.onerror = (msg, url, line, col, error) => {
                  window.parent.postMessage({ type: 'console', level: 'error', args: [msg] }, '*');
                };
              </script>
            </head>
            <body>
              <script>${jsCode}</script>
            </body>
            </html>
          `);
          iframeDoc.close();
        }
      }

      setLogs([{ level: 'info', text: 'Code executed successfully' }]);
      setActiveTab("output");

    } catch (error: any) {
      setLogs([{ level: 'error', text: `Runtime Error: ${error.message}` }]);
      setActiveTab("output");
    } finally {
      setIsRunning(false);
    }
  };

  // Listen for iframe console messages
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'console') {
        setLogs(prev => [...prev, {
          level: event.data.level,
          text: event.data.args.join(' ')
        }]);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const clearOutput = () => {
    setLogs([]);
  };

  const resetCode = () => {
    setCode(DEFAULT_TYPESCRIPT);
    clearOutput();
    setCompiledJs("");
    setTypeErrors([]);
  };

  const downloadCode = () => {
    const blob = new Blob([code], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'code.ts';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const widthClass = device === "mobile" ? "max-w-[375px]" : device === "tablet" ? "max-w-[768px]" : "max-w-full";

  return (
    <div className="h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="h-12 border-b border-border flex items-center justify-between px-4 bg-muted/30">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="h-8 w-8 p-0 hover:bg-foreground/5"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="w-px h-4 bg-border mx-2" />
          <span className="text-[10px] text-foreground/40 font-black tracking-[0.2em] uppercase">TYPESCRIPT_COMPILER_v1.0</span>
        </div>
        <div className="flex items-center gap-1">
          <Button size="sm" variant={device === "desktop" ? "secondary" : "ghost"} onClick={() => setDevice("desktop")} className="h-8 px-2"><Monitor className="h-4 w-4" /></Button>
          <Button size="sm" variant={device === "tablet" ? "secondary" : "ghost"} onClick={() => setDevice("tablet")} className="h-8 px-2"><Tablet className="h-4 w-4" /></Button>
          <Button size="sm" variant={device === "mobile" ? "secondary" : "ghost"} onClick={() => setDevice("mobile")} className="h-8 px-2"><Smartphone className="h-4 w-4" /></Button>
          <div className="w-px h-5 bg-border mx-2" />
          <Button size="sm" variant="ghost" onClick={downloadCode} className="h-8 font-black text-[9px] tracking-widest uppercase"><ExternalLink className="h-3.5 w-3.5 mr-1.5" /> {t("common.download")}</Button>
          <Button size="sm" variant="ghost" onClick={resetCode} className="h-8 font-black text-[9px] tracking-widest uppercase"><RotateCcw className="h-3.5 w-3.5 mr-1.5" /> {t("compiler.reset")}</Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        {/* Code Editor Panel */}
        <div className="flex flex-col border-r border-border overflow-hidden">
          <div className="bg-[#3178C6] text-white px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">TypeScript Editor</span>
              {typeErrors.length > 0 && (
                <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded">
                  {typeErrors.length} error{typeErrors.length > 1 ? 's' : ''}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                onClick={runCode}
                disabled={isRunning || !tsReady}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <Play className="h-4 w-4 mr-1" />
                {isRunning ? "Running..." : "Run Code"}
              </Button>
              <Button size="sm" variant="ghost" onClick={clearOutput} className="text-white hover:bg-white/20">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
            <CodeMirror
              value={code}
              height="100%"
              theme={oneDark}
              extensions={[javascript({ typescript: true })]}
              onChange={setCode}
              className="h-full font-mono"
            />
          </div>
        </div>

        {/* Output Panel */}
        <div className="flex flex-col overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-border bg-muted/20">
            <button
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'output'
                  ? 'border-primary text-primary bg-primary/10'
                  : 'border-transparent text-foreground/60 hover:text-foreground'
              }`}
              onClick={() => setActiveTab("output")}
            >
              <Terminal className="h-4 w-4 inline mr-1" />
              Output
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'errors'
                  ? 'border-red-500 text-red-500 bg-red-500/10'
                  : 'border-transparent text-foreground/60 hover:text-foreground'
              }`}
              onClick={() => setActiveTab("errors")}
            >
              <AlertCircle className="h-4 w-4 inline mr-1" />
              Errors
              {typeErrors.length > 0 && (
                <span className="ml-1 text-xs text-red-500">({typeErrors.length})</span>
              )}
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'compiled'
                  ? 'border-primary text-primary bg-primary/10'
                  : 'border-transparent text-foreground/60 hover:text-foreground'
              }`}
              onClick={() => setActiveTab("compiled")}
            >
              <FileCode className="h-4 w-4 inline mr-1" />
              Compiled JS
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-hidden">
            {activeTab === 'output' && (
              <div className="h-full bg-white">
                <div className="h-8 border-b border-border bg-muted/20 flex items-center justify-between px-3">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-black text-foreground/40">Console Output</span>
                  <button onClick={clearOutput} className="hover:text-primary transition-colors">
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
                <div className="h-[calc(100%-2rem)] overflow-auto p-3 font-mono text-sm">
                  {logs.length === 0 && !isRunning && (
                    <span className="text-gray-400 italic">Run your TypeScript code to see output here...</span>
                  )}
                  {logs.length === 0 && isRunning && (
                    <span className="text-blue-400 animate-pulse">Executing TypeScript code...</span>
                  )}
                  {logs.map((log, index) => (
                    <div
                      key={index}
                      className={`mb-2 ${
                        log.level === 'error'
                          ? 'text-red-600'
                          : log.level === 'warn'
                          ? 'text-yellow-600'
                          : 'text-gray-800'
                      }`}
                    >
                      <span className="text-gray-400 text-xs">
                        [{new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}]
                      </span>
                      {log.text}
                    </div>
                  ))}
                </div>
                {/* Live Preview iframe */}
                <div className="border-t border-border h-1/2">
                  <div className="h-8 border-b border-border bg-muted/20 flex items-center px-3">
                    <span className="text-[9px] uppercase tracking-[0.2em] font-black text-foreground/40">Live Preview</span>
                  </div>
                  <iframe
                    ref={iframeRef}
                    className="w-full h-[calc(100%-2rem)] bg-white"
                    sandbox="allow-scripts"
                    title="TypeScript Output"
                  />
                </div>
              </div>
            )}

            {activeTab === 'errors' && (
              <div className="h-full bg-white overflow-auto">
                <div className="h-8 border-b border-border bg-muted/20 flex items-center px-3">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-black text-foreground/40">Type Errors</span>
                </div>
                <div className="p-3">
                  {typeErrors.length === 0 && tsReady && (
                    <div className="flex items-center gap-2 text-green-600">
                      <AlertCircle className="h-5 w-5" />
                      <span className="text-sm">No type errors found</span>
                    </div>
                  )}
                  {!tsReady && (
                    <div className="flex items-center gap-2 text-yellow-600">
                      <AlertCircle className="h-5 w-5" />
                      <span className="text-sm">Loading TypeScript compiler...</span>
                    </div>
                  )}
                  {typeErrors.map((error, index) => (
                    <div key={index} className="mb-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono bg-red-600 text-white px-2 py-0.5 rounded">
                          {error.code}
                        </span>
                        <span className="text-sm font-medium text-red-800">
                          Line {error.line}, Col {error.column}
                        </span>
                      </div>
                      <p className="text-sm text-red-700">{error.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'compiled' && (
              <div className="h-full overflow-hidden">
                <div className="h-8 border-b border-border bg-muted/20 flex items-center px-3">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-black text-foreground/40">Compiled JavaScript</span>
                </div>
                <div className="h-[calc(100%-2rem)] overflow-auto">
                  <CodeMirror
                    value={compiledJs}
                    height="100%"
                    theme={oneDark}
                    extensions={[]}
                    editable={false}
                    className="h-full font-mono text-sm"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}