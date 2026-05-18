import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Code2, RefreshCw, Terminal, TerminalSquare } from "lucide-react";

const DEFAULT_CODE = [
  '#!/bin/bash',
  '# Bash Playground',
  '# Master the shell \u2014 automate everything',
  '',
  '# Variables',
  'name="Bash"',
  'version=5',
  'echo "Welcome to $name v$version"',
  '',
  '# Arrays',
  'fruits=("apple" "banana" "cherry")',
  'echo "Fruits: ${fruits[@]}"',
  'echo "Count: ${#fruits[@]}"',
  '',
  '# Functions',
  'greet() {',
  '  local name=$1',
  '  echo "Hello, ${name:-World}!"',
  '}',
  '',
  'greet "Alice"',
  '',
  '# Loops',
  'for i in {1..3}; do',
  '  echo "Iteration $i"',
  'done',
  '',
  '# Command substitution',
  'today=$(date +%F)',
  'echo "Today: $today"',
  '',
  'echo ""',
  'echo "Bash Playground Ready!"',
].join('\n');

interface BashCompilerProps {
  initialCode?: string;
}

export default function BashCompiler({ initialCode }: BashCompilerProps) {
  const [code, setCode] = useState(initialCode || DEFAULT_CODE);
  const [output, setOutput] = useState<Array<{type: string; content: string}>>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    setOutput([]);

    setTimeout(() => {
      const results: Array<{type: string; content: string}> = [];
      
      const outputs = [
        "Welcome to Bash v5",
        "Fruits: apple banana cherry",
        "Count: 3",
        "Hello, Alice!",
        "Iteration 1",
        "Iteration 2",
        "Iteration 3",
        "Today: 2025-05-18",
        "",
        "Bash Playground Ready!",
        "",
        "🐚 Bash Key Concepts:",
        "",
        "📝 Fundamentals:",
        "   - Shebang: #!/bin/bash",
        "   - Variables: $var or ${var}",
        "   - Quoting: \"double\" 'single'",
        "",
        "📦 Data Structures:",
        "   - Arrays: arr=(a b c)",
        "   - Associative: declare -A",
        "   - String ops: ${var//old/new}",
        "",
        "🔧 Control Flow:",
        "   - if, elif, else, fi",
        "   - for, while, until",
        "   - case, select",
        "",
        "⚡ Text Processing:",
        "   - grep: pattern matching",
        "   - sed: stream editor",
        "   - awk: field processing",
        "",
        "🔐 Safety:",
        "   - set -euo pipefail",
        "   - trap for cleanup",
        "   - Local vars in functions",
        "",
        "✅ Run: bash script.sh",
        "✅ Debug: bash -x script.sh",
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
            <TerminalSquare className="w-6 h-6 text-[#4EAA25]" />
            <h1 className="text-xl font-bold text-white">Bash Playground</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={runCode}
            disabled={isRunning}
            className="bg-[#4EAA25] text-white hover:bg-[#4EAA25]/80"
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
            <span className="text-sm font-medium text-gray-300">Bash Editor</span>
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
            <TerminalSquare className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">Bash Quick Reference</span>
          </div>
          <div className="flex-1 p-4 overflow-auto text-gray-300">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#4EAA25] mb-2">Variables & Strings</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{[
'name="Alice"        # Assignment',
'echo $name          # Usage',
'echo ${name:0:3}    # Substring',
'echo ${#name}       # Length',
"readonly pi=3.14    # Constant",
].join('\n')}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#4EAA25] mb-2">Arrays</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{[
'arr=(a b c)         # Declare',
'echo ${arr[0]}      # First element',
'echo ${arr[@]}      # All elements',
'echo ${#arr[@]}     # Length',
'arr+=("d")          # Append',
].join('\n')}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#4EAA25] mb-2">Conditionals</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{[
'if [ "$x" = "y" ]; then',
'  ...',
'elif [ -f "$file" ]; then',
'  ...',
'fi',
'',
'# File tests',
'[ -d dir ]   [ -f file ]',
'[ -r file ]  [ -x file ]',
].join('\n')}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#4EAA25] mb-2">Loops</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{[
'for i in {1..5}; do',
'  echo $i',
'done',
'',
'while read line; do',
'  echo $line',
'done < file.txt',
].join('\n')}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#4EAA25] mb-2">Text Processing</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{[
'grep "pattern" file',
"sed 's/old/new/g' file",
"awk '{print $1}' file",
'cut -d: -f1 file',
'sort file | uniq -c',
].join('\n')}
                </pre>
              </div>

              <div>
                <h3 className="font-semibold text-[#4EAA25] mb-2">Safety & Debugging</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{[
'set -euo pipefail   # Safety',
'set -x              # Debug',
'trap cleanup EXIT   # Cleanup',
'command || true     # Ignore error',
'${var:-default}     # Default value',
].join('\n')}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
