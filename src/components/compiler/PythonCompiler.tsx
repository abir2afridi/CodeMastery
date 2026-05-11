import { useEffect, useMemo, useRef, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Monitor, Tablet, Smartphone, RotateCcw, Trash2, ExternalLink, ArrowLeft, Play, Square } from "lucide-react";
import { useI18n } from "@/hooks/useI18n";

declare global {
  interface Window {
    pyodide: any;
  }
}

const DEFAULT_PYTHON = `# Welcome to Python!
# This is your first Python program
print("Hello, CodeMastery!")

# Try some basic operations
name = "CodeMastery Student"
age = 25
print(f"Hello, {name}! You are {age} years old.")

# Variables and data types
number = 42
text = "Python is fun"
is_learning = True
print(f"Number: {number}")
print(f"Text: {text}")
print(f"Learning: {is_learning}")

# Lists
fruits = ["apple", "banana", "orange"]
print(f"Fruits: {fruits}")

# Loops
for fruit in fruits:
    print(f"I like {fruit}")`;

interface Props {
  initialCode?: string;
}

export function PythonCompiler({ initialCode }: Props) {
  const navigate = useNavigate();
  const { t } = useI18n();
  const [code, setCode] = useState(initialCode ?? DEFAULT_PYTHON);
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [logs, setLogs] = useState<{ level: string; text: string }[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [isPyodideLoading, setIsPyodideLoading] = useState(true);
  const [output, setOutput] = useState("");
  const [matplotlibImages, setMatplotlibImages] = useState<string[]>([]);
  const pyodideRef = useRef<any>(null);

  // Initialize Pyodide
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js';
    script.async = true;
    
    script.onload = () => {
      window.pyodide.loadPyodide().then((pyodide: any) => {
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

  const runCode = async () => {
    if (!pyodideRef.current || isRunning) return;
    
    setIsRunning(true);
    setLogs([]);
    setOutput("");
    setMatplotlibImages([]);

    try {
      // Capture stdout and stderr
      const pyodide = pyodideRef.current;
      
      // Redirect print statements
      pyodide.runPythonAsync(`
        import sys
        from io import StringIO
        
        # Create StringIO objects to capture output
        old_stdout = sys.stdout
        old_stderr = sys.stderr
        sys.stdout = StringIO()
        sys.stderr = StringIO()
        
        # Store original matplotlib backend
        import matplotlib
        original_backend = matplotlib.get_backend()
        
        # Set matplotlib to use Agg backend for non-interactive plotting
        matplotlib.use('Agg')
        
        # Override plt.show() to save figure instead of displaying
        import matplotlib.pyplot as plt
        original_show = plt.show
        
        def custom_show():
          import io
          import base64
          buf = io.BytesIO()
          plt.savefig(buf, format='png', bbox_inches='tight', dpi=100)
          plt.close()
          buf.seek(0)
          img_str = base64.b64encode(buf.read()).decode()
          print(f"__MATPLOTLIB_IMG__:{img_str}")
          plt.clf()  # Clear figure for next plot
        
        plt.show = custom_show
      `);

      // Run user code
      await pyodide.runPythonAsync(code);
      
      // Get captured output
      const result = await pyodide.runPythonAsync(`
        output = sys.stdout.getvalue()
        error_output = sys.stderr.getvalue()
        
        # Restore stdout and stderr
        sys.stdout = old_stdout
        sys.stderr = old_stderr
        
        # Restore matplotlib backend
        if 'original_backend' in locals():
          matplotlib.use(original_backend)
        
        if error_output:
          print(f"ERROR: {error_output}")
        else:
          print(output)
      `);

      // Process output
      const outputText = result[0];
      const lines = outputText.split('\n');
      const processedLogs: { level: string; text: string }[] = [];
      const images: string[] = [];

      for (const line of lines) {
        if (line.startsWith('ERROR: ')) {
          processedLogs.push({ level: 'error', text: line.substring(7) });
        } else if (line.startsWith('__MATPLOTLIB_IMG__:')) {
          images.push(line.substring(20)); // Extract base64 image data
        } else if (line.trim()) {
          processedLogs.push({ level: 'info', text: line });
        }
      }

      setLogs(processedLogs);
      setOutput(processedLogs.map(log => log.text).join('\n'));
      setMatplotlibImages(images);
      
    } catch (error: any) {
      setLogs([{ level: 'error', text: `Error: ${error.message}` }]);
      setOutput(`Error: ${error.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  const clearOutput = () => {
    setLogs([]);
    setOutput("");
    setMatplotlibImages([]);
  };

  const resetCode = () => {
    setCode(DEFAULT_PYTHON);
    clearOutput();
  };

  const downloadCode = () => {
    const blob = new Blob([code], { type: 'text/x-python' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'code.py';
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
          <span className="text-[10px] text-foreground/40 font-black tracking-[0.2em] uppercase">PYTHON_COMPILER_v1.0</span>
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
          <div className="bg-[#3776AB] text-white px-4 py-2 flex items-center justify-between">
            <span className="text-sm font-medium">Python Editor</span>
            <div className="flex items-center gap-2">
              <Button 
                size="sm" 
                onClick={runCode}
                disabled={isRunning || isPyodideLoading}
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
            {isPyodideLoading ? (
              <div className="flex items-center justify-center h-full text-white">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white border-t-transparent border-t-2 mx-auto mb-2"></div>
                  <div>Loading Python runtime...</div>
                </div>
              </div>
            ) : (
              <CodeMirror 
                value={code} 
                height="100%" 
                theme={oneDark} 
                extensions={[python()]} 
                onChange={setCode} 
                className="h-full font-mono"
              />
            )}
          </div>
        </div>

        {/* Output Panel */}
        <div className="flex flex-col overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-border bg-muted/20">
            <button 
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                matplotlibImages.length > 0 
                  ? 'border-primary text-primary bg-primary/10' 
                  : 'border-transparent text-foreground/60 hover:text-foreground'
              }`}
              onClick={() => setMatplotlibImages([])}
            >
              Output
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                matplotlibImages.length > 0 
                  ? 'border-transparent text-foreground/60 hover:text-foreground' 
                  : 'border-primary text-primary bg-primary/10'
              }`}
              onClick={() => {
                // Show matplotlib images tab
              }}
            >
              Charts
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-hidden">
            {matplotlibImages.length > 0 ? (
              // Matplotlib Charts Tab
              <div className="h-full overflow-auto p-4 bg-white">
                <h3 className="text-lg font-semibold mb-4">Generated Charts</h3>
                <div className="space-y-4">
                  {matplotlibImages.map((imgData, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <img 
                        src={`data:image/png;base64,${imgData}`} 
                        alt={`Chart ${index + 1}`}
                        className="max-w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // Output Tab
              <div className="h-full bg-white">
                <div className="h-8 border-b border-border bg-muted/20 flex items-center justify-between px-3">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-black text-foreground/40">Console Output</span>
                  <button onClick={clearOutput} className="hover:text-primary transition-colors">
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
                <div className="h-[calc(100%-2rem)] overflow-auto p-3 font-mono text-sm">
                  {logs.length === 0 && !isRunning && (
                    <span className="text-gray-400 italic">Run your Python code to see output here...</span>
                  )}
                  {logs.length === 0 && isRunning && (
                    <span className="text-blue-400 animate-pulse">Executing Python code...</span>
                  )}
                  {logs.map((log, index) => (
                    <div 
                      key={index} 
                      className={`mb-2 ${
                        log.level === 'error' 
                          ? 'text-red-600' 
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
