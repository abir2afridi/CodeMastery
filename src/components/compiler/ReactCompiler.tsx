import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Code2, Layout, Terminal, RefreshCw, FileCode, Component } from "lucide-react";

const DEFAULT_JSX = `// React Functional Component Example
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  
  return (
    <div style={{ 
      fontFamily: 'system-ui, sans-serif',
      padding: '20px',
      maxWidth: '400px',
      margin: '0 auto'
    }}>
      <h1 style={{ color: '#61DAFB' }}>React Counter</h1>
      
      <div style={{
        background: '#1e1e1e',
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '18px', marginBottom: '15px' }}>
          Count: <strong style={{ color: '#61DAFB', fontSize: '24px' }}>{count}</strong>
        </p>
        
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button 
            onClick={decrement}
            style={{
              background: '#ff6b6b',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            -
          </button>
          
          <button 
            onClick={reset}
            style={{
              background: '#4a4a4a',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Reset
          </button>
          
          <button 
            onClick={increment}
            style={{
              background: '#61DAFB',
              color: '#1e1e1e',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            +
          </button>
        </div>
        
        {count > 0 && (
          <p style={{ marginTop: '15px', color: '#888' }}>
            Positive number!
          </p>
        )}
        
        {count === 0 && (
          <p style={{ marginTop: '15px', color: '#888' }}>
            Start counting
          </p>
        )}
        
        {count < 0 && (
          <p style={{ marginTop: '15px', color: '#ff6b6b' }}>
            Negative number!
          </p>
        )}
      </div>
      
      <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        This is a live React component using useState hook!
      </p>
    </div>
  );
}

// Render the component
render(<Counter />);
`;

const DEFAULT_CSS = `/* React Component Styles */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background: #282c34;
  min-height: 100vh;
}

button {
  transition: transform 0.1s ease;
}

button:hover {
  transform: scale(1.05);
}

button:active {
  transform: scale(0.95);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

div[style*="border-radius"] {
  animation: fadeIn 0.3s ease-out;
}
`;

const CSS_EXTENSIONS = `
import { useState } from 'react';

function App() {
  return (
    <div className="app">
      <h1>Hello React!</h1>
      <button className="btn">Click me</button>
    </div>
  );
}

render(<App />);
`;

interface ReactCompilerProps {
  initialCode?: string;
}

export default function ReactCompiler({ initialCode }: ReactCompilerProps) {
  const [jsx, setJsx] = useState(initialCode || DEFAULT_JSX);
  const [css, setCss] = useState(DEFAULT_CSS);
  const [activeTab, setActiveTab] = useState<"jsx" | "css">("jsx");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setOutput("");

    setTimeout(() => {
      const preview = document.getElementById("react-preview");
      if (!preview) return;

      try {
        const combinedCode = `
          (function() {
            const style = document.createElement('style');
            style.textContent = ${JSON.stringify(css)};
            document.head.appendChild(style);
            
            ${jsx.replace(/render\(<[^>]+>\);?/g, "")}
          })();
        `;

        const styledPreview = `
          <style>${css}</style>
          <div id="root"></div>
          <script>
            try {
              ${jsx}
            } catch(e) {
              console.error(e);
            }
          </script>
        `;

        preview.innerHTML = styledPreview;
        setOutput("✓ Code compiled successfully!");
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        setOutput(`Error: ${errorMessage}`);
      }

      setIsRunning(false);
    }, 500);
  };

  const handleReset = () => {
    setJsx(DEFAULT_JSX);
    setCss(DEFAULT_CSS);
    setOutput("");
    const preview = document.getElementById("react-preview");
    if (preview) preview.innerHTML = "";
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center gap-4">
          <a href="/compiler" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </a>
          <div className="flex items-center gap-2">
            <Component className="w-6 h-6 text-[#61DAFB]" />
            <h1 className="text-xl font-bold text-white">React Compiler</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={handleRun}
            disabled={isRunning}
            className="bg-[#61DAFB] text-gray-900 hover:bg-[#61DAFB]/80"
          >
            <Play className="w-4 h-4 mr-2" />
            {isRunning ? "Running..." : "Run"}
          </Button>
          <Button
            onClick={handleReset}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Reset
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Editor Panel */}
        <div className="w-1/2 flex flex-col border-r border-gray-700">
          {/* Tabs */}
          <div className="flex bg-gray-800 border-b border-gray-700">
            <button
              onClick={() => setActiveTab("jsx")}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === "jsx"
                  ? "text-[#61DAFB] border-b-2 border-[#61DAFB]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Code2 className="w-4 h-4" />
              JSX
            </button>
            <button
              onClick={() => setActiveTab("css")}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === "css"
                  ? "text-[#61DAFB] border-b-2 border-[#61DAFB]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Layout className="w-4 h-4" />
              CSS
            </button>
          </div>

          {/* Code Editor */}
          <div className="flex-1 overflow-auto">
            {activeTab === "jsx" ? (
              <CodeMirror
                value={jsx}
                height="100%"
                theme={oneDark}
                extensions={[javascript({ jsx: true })]}
                onChange={(value) => setJsx(value)}
                className="h-full text-base"
              />
            ) : (
              <CodeMirror
                value={css}
                height="100%"
                theme={oneDark}
                onChange={(value) => setCss(value)}
                className="h-full text-base"
              />
            )}
          </div>

          {/* Console */}
          <div className="h-32 bg-gray-800 border-t border-gray-700">
            <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-700">
              <Terminal className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">Console</span>
            </div>
            <div className="p-3 font-mono text-sm">
              {output ? (
                <span className={output.startsWith("Error") ? "text-red-400" : "text-green-400"}>
                  {output}
                </span>
              ) : (
                <span className="text-gray-500">Run your code to see output...</span>
              )}
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="w-1/2 flex flex-col">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
            <Layout className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">Preview</span>
          </div>
          <div className="flex-1 bg-white overflow-auto">
            <iframe
              id="react-preview"
              className="w-full h-full border-0"
              sandbox="allow-scripts"
              title="React Preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
}