import { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Code2, RefreshCw, Maximize2 } from "lucide-react";

const DEFAULT_HTML = `<div id="app">
  <h1>jQuery Playground</h1>\n  <p class="description">Click the button to see jQuery in action!</p>\n  \n  <button id="show-btn" class="btn">Show</button>\n  <button id="hide-btn" class="btn">Hide</button>\n  <button id="toggle-btn" class="btn">Toggle</button>\n  <button id="animate-btn" class="btn">Animate</button>\n  \n  <div id="message-box" class="message">\n    Hello from jQuery! 🎉\n  </div>\n  \n  <ul id="item-list">\n    <li>Item 1</li>\n    <li>Item 2</li>\n    <li>Item 3</li>\n  </ul>\n  \n  <input type="text" id="name-input" placeholder="Type something...">\n  <p id="input-result"></p>\n</div>`;

const DEFAULT_CSS = `.btn {\n  padding: 10px 20px;\n  margin: 5px;\n  border: none;\n  border-radius: 4px;\n  background: #0769AD;\n  color: white;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background 0.3s;\n}\n\n.btn:hover {\n  background: #055a8c;\n}\n\n#message-box {\n  padding: 20px;\n  margin: 15px 0;\n  background: #e8f4fd;\n  border-left: 4px solid #0769AD;\n  font-size: 18px;\n  color: #333;\n}\n\n#item-list {\n  list-style: none;\n  padding: 0;\n  margin: 15px 0;\n}\n\n#item-list li {\n  padding: 10px;\n  margin: 5px 0;\n  background: #f5f5f5;\n  border-radius: 4px;\n  transition: all 0.3s;\n}\n\n#item-list li.highlighted {\n  background: #ffd700;\n  transform: scale(1.02);\n}\n\n#item-list li.animated {\n  background: #90EE90;\n  font-weight: bold;\n}\n\n#name-input {\n  padding: 10px;\n  width: 200px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 14px;\n}\n\n#input-result {\n  margin-top: 10px;\n  color: #666;\n}\n\n.description {\n  color: #666;\n  margin-bottom: 15px;\n}`;

const DEFAULT_JQUERY = `$(document).ready(function() {\n  console.log('jQuery is ready!');\n  \n  // Show button\n  $('#show-btn').click(function() {\n    $('#message-box').show(300);\n    console.log('Message box shown');\n  });\n  \n  // Hide button\n  $('#hide-btn').click(function() {\n    $('#message-box').hide(300);\n    console.log('Message box hidden');\n  });\n  \n  // Toggle button\n  $('#toggle-btn').click(function() {\n    $('#message-box').toggle(300);\n    console.log('Message box toggled');\n  });\n  \n  // Animate button\n  $('#animate-btn').click(function() {\n    $('#message-box').animate({\n      fontSize: '24px',\n      padding: '30px'\n    }, 500, function() {\n      // Callback after animation\n      $(this).animate({\n        fontSize: '18px',\n        padding: '20px'\n      }, 300);\n    });\n    console.log('Message box animated');\n  });\n  \n  // List item click\n  $('#item-list li').click(function() {\n    $(this).toggleClass('highlighted');\n    console.log('Item clicked:', $(this).text());\n  });\n  \n  // Input event\n  $('#name-input').on('input', function() {\n    var value = $(this).val();\n    $('#input-result').text('You typed: ' + value);\n  });\n  \n  // Hover effect\n  $('#item-list li').hover(\n    function() {\n      $(this).addClass('animated');\n    },\n    function() {\n      $(this).removeClass('animated');\n    }\n  );\n});`;

interface JQueryCompilerProps {
  initialHtml?: string;
  initialCss?: string;
  initialJquery?: string;
}

export default function JQueryCompiler({ initialHtml, initialCss, initialJquery }: JQueryCompilerProps) {
  const [htmlCode, setHtmlCode] = useState(initialHtml || DEFAULT_HTML);
  const [cssCode, setCssCode] = useState(initialCss || DEFAULT_CSS);
  const [jqueryCode, setJqueryCode] = useState(initialJquery || DEFAULT_JQUERY);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState<"html" | "css" | "jquery">("html");
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const runCode = () => {
    setIsRunning(true);
    setConsoleOutput([]);

    setTimeout(() => {
      const fullHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>
            // Override console.log to capture output
            (function() {
              var originalLog = console.log;
              console.log = function() {
                var args = Array.prototype.slice.call(arguments);
                window.parent.postMessage({ type: 'console', message: args.join(' ') }, '*');
                originalLog.apply(console, arguments);
              };
            })();
            
            // Capture errors
            window.onerror = function(msg, url, line) {
              window.parent.postMessage({ type: 'error', message: msg + ' (line ' + line + ')' }, '*');
            };
            
            try {
              ${jqueryCode}
            } catch(e) {
              console.log('Error: ' + e.message);
            }
          </script>
        </body>
        </html>
      `;

      const iframe = document.getElementById("preview-frame") as HTMLIFrameElement;
      if (iframe) {
        iframe.srcdoc = fullHtml;
      }

      setIsRunning(false);
    }, 300);
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "console") {
        setConsoleOutput(prev => [...prev, `> ${event.data.message}`]);
      } else if (event.data.type === "error") {
        setConsoleOutput(prev => [...prev, `❌ Error: ${event.data.message}`]);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const handleReset = () => {
    setHtmlCode(DEFAULT_HTML);
    setCssCode(DEFAULT_CSS);
    setJqueryCode(DEFAULT_JQUERY);
    setConsoleOutput([]);
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
            <span className="text-2xl">💙</span>
            <h1 className="text-xl font-bold text-white">jQuery Playground</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={runCode}
            disabled={isRunning}
            className="bg-[#0769AD] text-white hover:bg-[#0769AD]/80"
          >
            <Play className="w-4 h-4 mr-2" />
            {isRunning ? "Running..." : "Run (Shift+Enter)"}
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
          {/* Tab Buttons */}
          <div className="flex bg-gray-800 border-b border-gray-700">
            <button
              onClick={() => setActiveTab("html")}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "html"
                  ? "bg-gray-700 text-white border-b-2 border-[#0769AD]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              HTML
            </button>
            <button
              onClick={() => setActiveTab("css")}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "css"
                  ? "bg-gray-700 text-white border-b-2 border-[#0769AD]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              CSS
            </button>
            <button
              onClick={() => setActiveTab("jquery")}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "jquery"
                  ? "bg-gray-700 text-white border-b-2 border-[#0769AD]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              jQuery
            </button>
          </div>

          {/* Code Editor */}
          <div className="flex-1 overflow-auto">
            {activeTab === "html" && (
              <CodeMirror
                value={htmlCode}
                height="100%"
                theme={oneDark}
                extensions={[html()]}
                onChange={(value) => setHtmlCode(value)}
                className="h-full text-base"
              />
            )}
            {activeTab === "css" && (
              <CodeMirror
                value={cssCode}
                height="100%"
                theme={oneDark}
                extensions={[css()]}
                onChange={(value) => setCssCode(value)}
                className="h-full text-base"
              />
            )}
            {activeTab === "jquery" && (
              <CodeMirror
                value={jqueryCode}
                height="100%"
                theme={oneDark}
                extensions={[javascript()]}
                onChange={(value) => setJqueryCode(value)}
                className="h-full text-base"
              />
            )}
          </div>

          {/* Console */}
          <div className="h-32 bg-gray-800 border-t border-gray-700">
            <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-700">
              <Code2 className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">Console</span>
            </div>
            <div className="p-2 font-mono text-xs overflow-auto h-20 text-gray-300">
              {consoleOutput.length > 0 ? (
                consoleOutput.map((line, i) => (
                  <div key={i} className="mb-1">{line}</div>
                ))
              ) : (
                <span className="text-gray-500">Run code to see console output...</span>
              )}
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="w-1/2 flex flex-col">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
            <div className="flex items-center gap-2">
              <Maximize2 className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-300">Live Preview</span>
            </div>
          </div>
          <div className="flex-1 bg-white">
            <iframe
              id="preview-frame"
              className="w-full h-full border-0"
              sandbox="allow-scripts"
              title="Preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
}