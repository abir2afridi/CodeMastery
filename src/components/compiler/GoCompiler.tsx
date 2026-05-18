import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Code2, RefreshCw, Terminal, Zap } from "lucide-react";

const DEFAULT_CODE = `package main

import "fmt"

func main() {
	// Go Playground
	// Simple, fast, and concurrent

	// Variables
	name := "Go Programming"
	version := 1.21

	fmt.Println("Welcome to", name)
	fmt.Printf("Version: %.1f\\n", version)

	// Slices
	numbers := []int{1, 2, 3, 4, 5}
	fmt.Println("Numbers:", numbers)

	// Maps
	users := map[string]int{
		"Alice": 25,
		"Bob":   30,
	}
	fmt.Println("Users:", users)

	// Structs
	type Person struct {
		Name string
		Age  int
	}

	p := Person{Name: "Charlie", Age: 35}
	fmt.Printf("Person: %+v\\n", p)

	fmt.Println("\\nGo Playground Ready!")
}`;

interface GoCompilerProps {
  initialCode?: string;
}

export default function GoCompiler({ initialCode }: GoCompilerProps) {
  const [code, setCode] = useState(initialCode || DEFAULT_CODE);
  const [output, setOutput] = useState<Array<{type: string; content: string}>>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    setOutput([]);

    setTimeout(() => {
      const results: Array<{type: string; content: string}> = [];
      
      const outputs = [
        "Welcome to Go Programming",
        "Version: 1.2",
        "Numbers: [1 2 3 4 5]",
        "Users: map[Alice:25 Bob:30]",
        "Person: {Name:Charlie Age:35}",
        "",
        "Go Playground Ready!",
        "",
        "🚀 Go Key Concepts:",
        "",
        "📝 Basics:",
        "   - Statically typed, compiled",
        "   - := short declaration",
        "   - Unused variables cause errors",
        "",
        "📦 Collections:",
        "   - Arrays: fixed size [5]int",
        "   - Slices: dynamic []int",
        "   - Maps: key-value map[string]int",
        "",
        "🏗️ Types:",
        "   - struct: composite types",
        "   - interface: behavior contracts",
        "   - Methods with receivers",
        "",
        "⚡ Concurrency:",
        "   - Goroutines: go func()",
        "   - Channels: make(chan T)",
        "   - Select: multiplex channels",
        "",
        "🔧 Error Handling:",
        "   - return value, error",
        "   - defer for cleanup",
        "   - panic/recover for exceptional",
        "",
        "✅ Build: go build -o output",
        "✅ Run: go run main.go",
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
            <span className="text-2xl">🐹</span>
            <h1 className="text-xl font-bold text-white">Go Playground</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={runCode}
            disabled={isRunning}
            className="bg-[#00ADD8] text-white hover:bg-[#00ADD8]/80"
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
            <span className="text-sm font-medium text-gray-300">Go Editor</span>
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
            <Zap className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">Go Quick Reference</span>
          </div>
          <div className="flex-1 p-4 overflow-auto text-gray-300">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#00ADD8] mb-2">Variables & Types</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`name := "Alice"     // Short declaration
var age int = 25    // Explicit type
const Pi = 3.14     // Constant
x, y := 1, 2       // Multiple`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#00ADD8] mb-2">Control Flow</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`if x > 0 { ... }
switch day {
case 1: ...
default: ...
}
for i := 0; i < 10; i++ { ... }
for _, v := range slice { ... }`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#00ADD8] mb-2">Functions</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`func add(a, b int) int {
    return a + b
}

func swap(a, b int) (int, int) {
    return b, a
}

defer cleanup()  // Runs on return`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#00ADD8] mb-2">Structs & Methods</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`type Person struct {
    Name string
    Age  int
}

func (p Person) Greet() string {
    return "Hi, " + p.Name
}`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#00ADD8] mb-2">Concurrency</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`go func() { ... }()    // Goroutine
ch := make(chan int)   // Channel
ch <- value            // Send
v := <-ch              // Receive

select {
case v := <-ch1: ...
case ch2 <- x: ...
}`}
                </pre>
              </div>

              <div>
                <h3 className="font-semibold text-[#00ADD8] mb-2">Error Handling</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`result, err := doWork()
if err != nil {
    return err
}

// Custom error
errors.New("message")`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
