import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";
import { EditorView } from "@codemirror/view";
import { Play, RotateCcw, Terminal, Cpu, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  initialCode: string;
  height?: number;
  autoRun?: boolean;
}

export function PythonMiniCompiler({ initialCode, height = 240, autoRun = true }: Props) {
  const [code, setCode] = useState(initialCode);
  const [logs, setLogs] = useState<{ level: string; text: string; time: string }[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [isPyodideLoading, setIsPyodideLoading] = useState(true);
  const [isCompiling, setIsCompiling] = useState(false);
  const pyodideRef = useRef<any>(null);

  // Initialize Pyodide
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js';
    script.async = true;
    
    script.onload = () => {
      (window as any).pyodide.loadPyodide().then((pyodide: any) => {
        pyodideRef.current = pyodide;
        setIsPyodideLoading(false);
        
        // Pre-install common packages
        pyodide.runPythonAsync(`
          import micropip
          micropip.install(['numpy', 'pandas', 'matplotlib'])
        `);
      });
    };
    
    document.head.appendChild(script);
    
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (!autoRun || isPyodideLoading) return;
    const t = setTimeout(() => runCode(), 500);
    return () => clearTimeout(t);
  }, [code, autoRun, isPyodideLoading]);

  const runCode = async () => {
    if (!pyodideRef.current || isRunning || isPyodideLoading) return;
    
    setIsRunning(true);
    setIsCompiling(true);
    setLogs([]);

    try {
      const pyodide = pyodideRef.current;
      
      // Redirect stdout and stderr
      pyodide.runPythonAsync(`
        import sys
        from io import StringIO
        
        old_stdout = sys.stdout
        old_stderr = sys.stderr
        sys.stdout = StringIO()
        sys.stderr = StringIO()
      `);

      // Run user code
      await pyodide.runPythonAsync(code);
      
      // Get captured output
      const result = await pyodide.runPythonAsync(`
        output = sys.stdout.getvalue()
        error_output = sys.stderr.getvalue()
        
        sys.stdout = old_stdout
        sys.stderr = old_stderr
        
        if error_output:
          print(f"ERROR: {error_output}")
        else:
          print(output)
      `);

      // Process output
      const outputText = result[0];
      const lines = outputText.split('\n');
      const processedLogs: { level: string; text: string; time: string }[] = [];

      for (const line of lines) {
        if (line.startsWith('ERROR: ')) {
          const time = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
          processedLogs.push({ level: 'error', text: line.substring(7), time });
        } else if (line.trim()) {
          const time = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
          processedLogs.push({ level: 'info', text: line, time });
        }
      }

      setLogs(processedLogs);
      
    } catch (error: any) {
      const time = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setLogs([{ level: 'error', text: `Error: ${error.message}`, time }]);
    } finally {
      setIsCompiling(false);
      setIsRunning(false);
    }
  };

  const reset = () => {
    setCode(initialCode);
    setLogs([]);
  };

  const { theme } = useTheme();

  return (
    <div className="my-6 relative border border-border bg-background group overflow-hidden shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between bg-surface border-b border-border px-4 py-2">
        <div className="flex items-center gap-2">
          <Cpu className="h-3 w-3 text-primary" />
          <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase">PYTHON_COMPILER</span>
        </div>
        <div className="flex items-center gap-2">
          <div className={cn("w-1.5 h-1.5 rounded-full", isRunning ? "bg-green-500 animate-pulse" : "bg-zinc-600")} />
          <button
            onClick={reset}
            className="px-2 py-1 text-[9px] font-bold text-zinc-400 hover:text-white bg-black/40 rounded border border-border/20"
          >
            RESET
          </button>
          <button
            onClick={runCode}
            disabled={isRunning || isPyodideLoading}
            className="px-3 py-1 text-[9px] font-bold text-black bg-primary hover:bg-primary/90 rounded flex items-center gap-1"
          >
            <Play className="h-3 w-3" /> RUN
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-0">
        {/* Editor */}
        <div className="border-r border-border" style={{ height }}>
          {isPyodideLoading ? (
            <div className="h-full flex items-center justify-center text-zinc-400">
              <div className="text-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary border-t-transparent mx-auto mb-2"></div>
                <div className="text-xs">Loading Python runtime...</div>
              </div>
            </div>
          ) : (
            <CodeMirror
              value={code}
              height={`${height}px`}
              theme={theme === "dark" ? oneDark : "light"}
              extensions={[python(), EditorView.lineWrapping]}
              onChange={setCode}
              basicSetup={{
                lineNumbers: true,
                foldGutter: false,
                highlightActiveLine: true,
                syntaxHighlighting: true,
                bracketMatching: true,
              }}
              className="text-[13px] font-mono"
            />
          )}
        </div>

        {/* Output */}
        <div className="bg-white relative overflow-hidden" style={{ height }}>
          <AnimatePresence mode="wait">
            {isCompiling ? (
              <motion.div
                key="compiling"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-zinc-950 flex flex-col items-center justify-center gap-3"
              >
                <Zap className="h-6 w-6 text-primary animate-bounce" />
                <span className="text-[10px] font-black text-primary tracking-widest">EXECUTING</span>
              </motion.div>
            ) : (
              <div className="h-full bg-zinc-50 overflow-auto p-3 font-mono text-[12px]">
                {logs.length === 0 && (
                  <div className="text-zinc-400 italic flex items-center gap-2">
                    <Terminal className="h-3 w-3" /> Run code to see output...
                  </div>
                )}
                {logs.map((log, i) => (
                  <div
                    key={i}
                    className={cn(
                      "mb-1 flex gap-2 items-start",
                      log.level === 'error' ? 'text-red-600' : 'text-zinc-800'
                    )}
                  >
                    <span className="text-[9px] text-zinc-400">[{log.time}]</span>
                    <span className="break-all">{log.text}</span>
                  </div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
