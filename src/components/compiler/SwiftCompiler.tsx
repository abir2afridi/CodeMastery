import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Code2, RefreshCw, Terminal, Smartphone } from "lucide-react";

const DEFAULT_CODE = `import Foundation

// Swift Playground
// Modern programming for the Apple ecosystem

// Variables and Constants
let appName = "CodeMastery"
var version = 1.0

// Collections
let languages = ["Swift", "Objective-C", "C"]
var scores: [String: Int] = [:]

// Structs
struct Developer {
    let name: String
    var experience: Int
    
    func greet() -> String {
        return "Hi, I'm \\(name) with \\(experience) years of experience"
    }
}

let dev = Developer(name: "Alice", experience: 3)
print(dev.greet())

// Optionals
var optionalName: String? = "Bob"
if let name = optionalName {
    print("Hello, \\(name)")
}

// Closures
let numbers = [1, 2, 3, 4, 5]
let doubled = numbers.map { $0 * 2 }
print("Doubled: \\(doubled)")

print("\\nSwift Playground Ready!")`;

interface SwiftCompilerProps {
  initialCode?: string;
}

export default function SwiftCompiler({ initialCode }: SwiftCompilerProps) {
  const [code, setCode] = useState(initialCode || DEFAULT_CODE);
  const [output, setOutput] = useState<Array<{type: string; content: string}>>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    setOutput([]);

    setTimeout(() => {
      const results: Array<{type: string; content: string}> = [];
      
      const outputs = [
        "Hi, I'm Alice with 3 years of experience",
        "Hello, Bob",
        "Doubled: [2, 4, 6, 8, 10]",
        "",
        "Swift Playground Ready!",
        "",
        "🕊️ Swift Key Concepts:",
        "",
        "📝 Fundamentals:",
        "   - let for constants, var for variables",
        "   - Type inference and safety",
        "   - Optionals with ? and !",
        "",
        "📦 Collections:",
        "   - Arrays: [1, 2, 3]",
        "   - Dictionaries: [key: value]",
        "   - Sets: Set([1, 2, 3])",
        "",
        "🏗️ Type System:",
        "   - struct (value type)",
        "   - class (reference type)",
        "   - enum (with associated values)",
        "   - protocol (interface)",
        "",
        "⚡ Modern Features:",
        "   - Closures with trailing syntax",
        "   - async/await concurrency",
        "   - actors for data races",
        "   - Codable for JSON",
        "",
        "📱 SwiftUI:",
        "   - Declarative UI framework",
        "   - @State, @Binding, @ObservedObject",
        "   - MVVM architecture",
        "",
        "✅ Build: Xcode build",
        "✅ Test: Xcode test",
      ];
      
      outputs.forEach(o => results.push({type: 'output', content: o}));
      
      setOutput(results);
      setIsRunning(false);
    }, 500);
  };

  const handleReset = () => {
    setCode(DEFAULT_CODE);
    setOutput([]);
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
            <span className="text-2xl">🕊️</span>
            <h1 className="text-xl font-bold text-white">Swift Playground</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={runCode}
            disabled={isRunning}
            className="bg-[#FA7343] text-white hover:bg-[#FA7343]/80"
          >
            <Play className="w-4 h-4 mr-2" />
            {isRunning ? "Running..." : "Execute (Shift+Enter)"}
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
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
            <Code2 className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">Swift Editor</span>
          </div>
          
          <div className="flex-1 overflow-auto">
            <CodeMirror
              value={code}
              height="100%"
              theme={oneDark}
              extensions={[javascript()]}
              onChange={(value) => setCode(value)}
              className="h-full text-base"
            />
          </div>

          {/* Output Console */}
          <div className="h-48 bg-gray-800 border-t border-gray-700">
            <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-700">
              <Terminal className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">Output</span>
            </div>
            <div className="p-3 font-mono text-sm overflow-auto h-32 text-green-400">
              {output.length > 0 ? (
                output.map((item, index) => (
                  <div key={index} className="mb-1 whitespace-pre">
                    {item.content}
                  </div>
                ))
              ) : (
                <span className="text-gray-500">Run code to see output...</span>
              )}
            </div>
          </div>
        </div>

        {/* Info Panel */}
        <div className="w-1/2 flex flex-col">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
            <Smartphone className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">Swift Quick Reference</span>
          </div>
          <div className="flex-1 p-4 overflow-auto text-gray-300">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#FA7343] mb-2">Variables & Constants</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`let name = "Alice"     // Constant
var score = 0         // Variable
var x: Int = 10       // Explicit type
let names = ["A", "B"] // Array`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#FA7343] mb-2">Optionals</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`var name: String? = nil
if let n = name { }
guard let n = name else { }
let display = name ?? "Guest"`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#FA7343] mb-2">Functions & Closures</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`func greet(name: String) -> String {
    return "Hi, \\(name)"
}
numbers.map { $0 * 2 }  // Closure`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#FA7343] mb-2">Structs & Classes</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`struct S { var p: String }
class C { var p: String
    init(p: String) { self.p = p }
}`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#FA7343] mb-2">Error Handling</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`enum E: Error { case bad }
func f() throws { }
do { try f() } catch { }`}
                </pre>
              </div>

              <div>
                <h3 className="font-semibold text-[#FA7343] mb-2">SwiftUI</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`struct V: View {
    @State var count = 0
    var body: some View {
        Text("Hello")
    }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
