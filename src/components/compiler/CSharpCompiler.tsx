import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { RotateCcw, Trash2, ArrowLeft, Play, Square, Terminal, AlertTriangle, Loader2, Code2 } from "lucide-react";
import { useI18n } from "@/hooks/useI18n";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DEFAULT_CSHARP = `// Welcome to C# Programming!
using System;

// Modern top-level statements (C# 9+)
Console.WriteLine("Hello, CodeMastery!");

// Variables
var name = "C# Student";
int age = 25;
double gpa = 3.75;
bool isActive = true;

Console.WriteLine($"Name: {name}");
Console.WriteLine($"Age: {age}");
Console.WriteLine($"GPA: {gpa:F2}");
Console.WriteLine($"Active: {isActive}");

// Nullable types
string? maybeNull = null;
Console.WriteLine(maybeNull ?? "Default Value");
`;

interface Props {
  initialCode?: string;
}

export function CSharpCompiler({ initialCode }: Props) {
  const navigate = useNavigate();
  const { t } = useI18n();
  const [code, setCode] = useState(initialCode ?? DEFAULT_CSHARP);
  const [output, setOutput] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [executionTime, setExecutionTime] = useState<number | null>(null);

  const runCode = async () => {
    setError(null);
    setOutput("");
    setIsRunning(true);
    setExecutionTime(null);

    const startTime = performance.now();

    try {
      const response = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: "csharp",
          version: "6.12.0",
          files: [{ name: "Program.cs", content: code }],
          stdin: input
        })
      });

      const data = await response.json();
      const endTime = performance.now();
      setExecutionTime(Math.round(endTime - startTime));

      if (data.run?.stderr) {
        setError(data.run.stderr);
      } else if (data.run?.stdout) {
        setOutput(data.run.stdout);
      } else {
        setOutput("(No output)");
      }
    } catch (err: any) {
      setError(err.message || "Execution failed. Please try again.");
    } finally {
      setIsRunning(false);
    }
  };

  const clearOutput = () => {
    setOutput("");
    setError(null);
    setExecutionTime(null);
  };

  const resetCode = () => {
    setCode(DEFAULT_CSHARP);
    clearOutput();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t("system.prevNode")}
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#9B4993]" />
              <h1 className="text-lg font-black uppercase tracking-tight">C# Compiler</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={resetCode}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
            <Button variant="outline" size="sm" onClick={clearOutput}>
              <Trash2 className="h-4 w-4 mr-2" />
              Clear
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-200px)]">
          {/* Editor Panel */}
          <div className="flex flex-col border border-border rounded-lg overflow-hidden">
            <div className="bg-card border-b border-border px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-[#9B4993]" />
                <span className="text-xs font-mono uppercase tracking-widest">Program.cs</span>
                <span className="text-[10px] text-muted-foreground ml-2">C# 9+ (Top-level statements)</span>
              </div>
              <Button size="sm" onClick={runCode} disabled={isRunning}>
                {isRunning ? (
                  <Square className="h-4 w-4 mr-2 text-red-500" />
                ) : (
                  <Play className="h-4 w-4 mr-2" />
                )}
                {isRunning ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-1" />
                    Running...
                  </>
                ) : (
                  "Run (Ctrl+Enter)"
                )}
              </Button>
            </div>
            <div className="flex-1 overflow-hidden">
              <CodeMirror
                value={code}
                onChange={(v) => setCode(v)}
                extensions={[javascript()]}
                theme={oneDark}
                className="h-full [&_.cm-editor]:h-full"
                basicSetup={{
                  lineNumbers: true,
                  highlightActiveLineGutter: true,
                  highlightSpecialChars: true,
                  foldGutter: true,
                  dropCursor: true,
                  allowMultipleSelections: true,
                  indentOnInput: true,
                  bracketMatching: true,
                  closeBrackets: true,
                  autocompletion: true,
                  rectangularSelection: true,
                  crosshairCursor: true,
                  highlightActiveLine: true,
                  highlightSelectionMatches: true,
                  closeBracketsKeymap: true,
                  searchKeymap: true,
                  foldKeymap: true,
                  completionKeymap: true,
                  lintKeymap: true,
                }}
              />
            </div>
          </div>

          {/* Output Panel */}
          <div className="flex flex-col border border-border rounded-lg overflow-hidden">
            <Tabs defaultValue="output" className="flex-1 flex flex-col">
              <div className="bg-card border-b border-border px-4 py-2 flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="output">
                    <Terminal className="h-4 w-4 mr-1" />
                    Output
                  </TabsTrigger>
                  <TabsTrigger value="il">
                    <Code2 className="h-4 w-4 mr-1" />
                    IL Code
                  </TabsTrigger>
                </TabsList>
                {executionTime !== null && (
                  <span className="text-[10px] text-muted-foreground">
                    Ran in {executionTime}ms
                  </span>
                )}
              </div>

              <TabsContent value="output" className="flex-1 flex flex-col m-0">
                {/* Input Section */}
                <div className="border-b border-border bg-card/50">
                  <div className="px-4 py-2 flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                      stdin input
                    </span>
                  </div>
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter input values (one per line)..."
                    className="w-full h-24 px-4 py-2 bg-background border-0 text-xs font-mono resize-none focus:outline-none focus:ring-1 focus:ring-border"
                  />
                </div>

                {/* Output Section */}
                <div className="flex-1 overflow-auto bg-black/95 p-4">
                  {error ? (
                    <div className="flex items-start gap-3 text-red-400">
                      <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-mono font-bold uppercase">Error</p>
                        <pre className="text-xs font-mono mt-1 whitespace-pre-wrap">{error}</pre>
                      </div>
                    </div>
                  ) : output ? (
                    <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">{output}</pre>
                  ) : (
                    <div className="text-muted-foreground text-sm font-mono">
                      <p>// Output will appear here</p>
                      <p className="mt-2 text-xs opacity-50">Press Run to compile and execute</p>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="il" className="flex-1 m-0">
                <div className="h-full overflow-auto bg-black/95 p-4">
                  <div className="text-muted-foreground text-xs font-mono">
                    <p className="text-[#9B4993]">// IL (Intermediate Language) view</p>
                    <p className="mt-2 text-xs opacity-50">
                      IL view shows the compiled Intermediate Language bytecode.
                      This helps understand how C# compiles to IL and how the CLR executes it.
                    </p>
                    <p className="mt-4 text-[10px] opacity-30 font-mono whitespace-pre">
                      .method private hidebysig static void<br />
                      &nbsp;&nbsp;...Main() cil managed<br />
                      &nbsp;&nbsp;&#123;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;// Method body<br />
                      &nbsp;&nbsp;&#125;
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-6 flex items-center justify-center gap-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>Piston API (.NET 6)</span>
          </div>
          <div className="flex items-center gap-2">
            <span>C# 9+ (Top-level statements)</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Supports LINQ, async/await, records</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CSharpCompiler;