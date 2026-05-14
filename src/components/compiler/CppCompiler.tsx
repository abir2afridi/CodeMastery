import { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { RotateCcw, Trash2, ArrowLeft, Play, Square, Terminal, AlertTriangle } from "lucide-react";
import { useI18n } from "@/hooks/useI18n";

declare global {
  interface Window {
    JSCPP: any;
  }
}

const DEFAULT_CPP = `// Welcome to C++ Programming!
// This is your first C++ program
#include <iostream>
#include <string>
#include <vector>

int main() {
    std::cout << "Hello, CodeMastery!\\n";

    // Variables
    int age = 25;
    std::string name = "C++ Student";
    double gpa = 3.75;

    std::cout << "Name: " << name << std::endl;
    std::cout << "Age: " << age << std::endl;
    std::cout << "GPA: " << gpa << std::endl;

    // Using auto
    auto numbers = std::vector<int>{1, 2, 3, 4, 5};
    std::cout << "Numbers: ";
    for (auto n : numbers) {
        std::cout << n << " ";
    }
    std::cout << std::endl;

    return 0;
}`;

interface Props {
  initialCode?: string;
}

export function CppCompiler({ initialCode }: Props) {
  const navigate = useNavigate();
  const { t } = useI18n();
  const [code, setCode] = useState(initialCode ?? DEFAULT_CPP);
  const [output, setOutput] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [jscppLoaded, setJscppLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/jscpp@latest/dist/JSCPP.es5.min.js";
    script.async = true;
    script.onload = () => setJscppLoaded(true);
    script.onerror = () => setError("Failed to load C++ compiler");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const runCode = async () => {
    setError(null);
    setOutput("");
    setIsRunning(true);

    try {
      if (!window.JSCPP) {
        throw new Error("C++ compiler not loaded. Please refresh the page.");
      }

      const JSCPP = window.JSCPP;
      const inputStream = new JSCPP.InputStream(input);
      const outputStream = new JSCPP.OutputStream();
      const jsccpOptions = { stdio: { input: inputStream, output: outputStream } };

      JSCPP.run(code, jsccpOptions);
      const result = outputStream.toString();
      setOutput(result || "(No output)");
    } catch (err: any) {
      setError(err.message || "Compilation error");
    } finally {
      setIsRunning(false);
    }
  };

  const clearOutput = () => {
    setOutput("");
    setError(null);
  };

  const resetCode = () => {
    setCode(DEFAULT_CPP);
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
              <div className="w-3 h-3 rounded-full bg-[#00599C]" />
              <h1 className="text-lg font-black uppercase tracking-tight">C++ Compiler</h1>
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
                <Terminal className="h-4 w-4 text-[#00599C]" />
                <span className="text-xs font-mono uppercase tracking-widest">main.cpp</span>
              </div>
              <Button size="sm" onClick={runCode} disabled={isRunning || !jscppLoaded}>
                {isRunning ? (
                  <Square className="h-4 w-4 mr-2 text-red-500" />
                ) : (
                  <Play className="h-4 w-4 mr-2" />
                )}
                {isRunning ? "Running..." : "Run (Ctrl+Enter)"}
              </Button>
            </div>
            <div className="flex-1 overflow-hidden">
              <CodeMirror
                value={code}
                onChange={(v) => setCode(v)}
                extensions={[cpp()]}
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
            <div className="bg-card border-b border-border px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-green-500" />
                <span className="text-xs font-mono uppercase tracking-widest">Output</span>
              </div>
              {!jscppLoaded && (
                <span className="text-[10px] text-muted-foreground">Loading compiler...</span>
              )}
            </div>

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
                placeholder="Enter input values..."
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
                  <p className="mt-2 text-xs opacity-50">Press Run or Ctrl+Enter to compile and execute</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-6 flex items-center justify-center gap-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>JSCPP vlatest</span>
          </div>
          <div className="flex items-center gap-2">
            <span>C++20 Standard</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Supports std::cout, std::cin, STL containers</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CppCompiler;