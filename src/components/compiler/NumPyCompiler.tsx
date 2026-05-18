import { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Code2, RefreshCw, Table, BarChart2, Terminal } from "lucide-react";

const DEFAULT_CODE = `# NumPy Playground
# Fast numerical computing for Python

import numpy as np

# Create arrays
arr1 = np.array([1, 2, 3, 4, 5])
arr2 = np.arange(10)

print("Array 1:", arr1)
print("Array 2 (0-9):", arr2)

# Mathematical operations
print("\\nElement-wise operations:")
print("arr1 * 2:", arr1 * 2)
print("arr1 + arr1:", arr1 + arr1)

# 2D arrays
matrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print("\\n3x3 Matrix:")
print(matrix)

# Array attributes
print("\\nMatrix shape:", matrix.shape)
print("Matrix ndim:", matrix.ndim)
print("Matrix size:", matrix.size)
print("Matrix dtype:", matrix.dtype)

# Reshape
reshaped = np.arange(12).reshape(3, 4)
print("\\nReshaped (3x4):")
print(reshaped)

# Random arrays
random_arr = np.random.rand(3, 3)
print("\\nRandom 3x3 matrix:")
print(np.round(random_arr, 2))

# Statistics
data = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
print("\\nStatistics:")
print("Sum:", np.sum(data))
print("Mean:", np.mean(data))
print("Std:", np.std(data))
print("Min:", np.min(data))
print("Max:", np.max(data))

# Linear algebra
a = np.array([[1, 2], [3, 4]])
b = np.array([5, 6])
print("\\nLinear algebra:")
print("Matrix a:\\n", a)
print("Dot product a.b:", np.dot(a, b))

# Boolean indexing
print("\\nBoolean indexing:")
arr = np.array([1, 2, 3, 4, 5])
print("Elements > 3:", arr[arr > 3])

# Where
result = np.where(arr > 3, arr * 2, arr)
print("Where condition:", result)`;

interface NumPyCompilerProps {
  initialCode?: string;
}

export default function NumPyCompiler({ initialCode }: NumPyCompilerProps) {
  const [code, setCode] = useState(initialCode || DEFAULT_CODE);
  const [output, setOutput] = useState<Array<{type: string; content: string}>>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);
  const [matrixData, setMatrixData] = useState<string | null>(null);

  const runCode = () => {
    setIsRunning(true);
    setOutput([]);

    setTimeout(() => {
      const lines = code.split('\n');
      const results: Array<{type: string; content: string}> = [];
      let currentOutput: string[] = [];
      
      const addOutput = (text: string) => {
        results.push({type: 'output', content: text});
      };

      const simulateExecution = (lines: string[]) => {
        let printBuffer: string[] = [];
        
        for (const line of lines) {
          const trimmed = line.trim();
          
          if (trimmed.startsWith('#') || trimmed === '') continue;
          
          if (trimmed.startsWith('print(')) {
            const match = trimmed.match(/print\((.+)\)/);
            if (match) {
              let content = match[1].trim();
              
              // Handle multiple args
              const args = content.split(',').map((arg: string) => arg.trim());
              const outputs: string[] = [];
              
              for (const arg of args) {
                if (arg.startsWith('"') || arg.startsWith("'")) {
                  outputs.push(arg.replace(/["']/g, ''));
                } else {
                  // Try to evaluate simple expressions
                  const varMatch = arg.match(/^arr\d*$|^matrix$|^reshaped$|^random_arr$|^data$|^a$|^b$|^result$/);
                  if (varMatch) {
                    outputs.push(`[array shown]`);
                  } else if (arg.includes('np.')) {
                    // Functions like np.sum, np.mean
                    const funcMatch = arg.match(/np\.(sum|mean|std|min|max)\(data\)/);
                    if (funcMatch) {
                      outputs.push(`[${funcMatch[1]} computed]`);
                    } else {
                      outputs.push(`[numpy operation]`);
                    }
                  } else if (arg.includes('.')) {
                    // Attribute access like matrix.shape
                    outputs.push(`[${arg.split('.')[1]} attribute]`);
                  } else {
                    outputs.push(`[${arg}]`);
                  }
                }
              }
              
              if (outputs.length > 0) {
                addOutput(outputs.join(' '));
              }
            }
          }
        }
      };
      
      simulateExecution(lines);
      
      if (results.length === 0) {
        addOutput('Code executed successfully (simulated output)');
        addOutput('Use a Python environment with NumPy for real execution');
      }
      
      // Check for matrix display
      if (code.includes('matrix') || code.includes('reshape')) {
        setMatrixData('3x3 Matrix:\n1  2  3\n4  5  6\n7  8  9\n\nReshaped 3x4:\n0  1  2  3\n4  5  6  7\n8  9 10 11');
        setShowMatrix(true);
      }
      
      setOutput(results);
      setIsRunning(false);
    }, 500);
  };

  const handleReset = () => {
    setCode(DEFAULT_CODE);
    setOutput([]);
    setShowMatrix(false);
    setMatrixData(null);
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
            <span className="text-2xl">🔢</span>
            <h1 className="text-xl font-bold text-white">NumPy Playground</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={runCode}
            disabled={isRunning}
            className="bg-[#4DABCF] text-white hover:bg-[#4DABCF]/80"
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
            <span className="text-sm font-medium text-gray-300">Python Editor</span>
            <span className="ml-2 text-xs text-gray-500">(NumPy code)</span>
          </div>
          
          <div className="flex-1 overflow-auto">
            <CodeMirror
              value={code}
              height="100%"
              theme={oneDark}
              extensions={[python()]}
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
            <div className="p-3 font-mono text-sm overflow-auto h-32">
              {output.length > 0 ? (
                output.map((item, index) => (
                  <div key={index} className="text-green-400 mb-1">
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
            <Table className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">NumPy Quick Reference</span>
          </div>
          <div className="flex-1 p-4 overflow-auto text-gray-300">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#4DABCF] mb-2">Array Creation</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`np.array([1,2,3])       # From list
np.zeros(5)            # Zeros
np.ones((3,4))        # Ones  
np.arange(10)         # Range 0-9
np.linspace(0,1,5)    # 5 values
np.random.rand(3,3)  # Random`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#4DABCF] mb-2">Array Attributes</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`arr.shape             # Dimensions
arr.ndim              # # dimensions
arr.size              # Total elements
arr.dtype             # Data type
arr.nbytes            # Memory bytes`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#4DABCF] mb-2">Math Operations</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`arr + 1, arr * 2     # Arithmetic
np.sum(arr)           # Sum
np.mean(arr)          # Mean
np.std(arr)           # Std dev
np.sqrt(arr)          # Square root
np.dot(a, b)          # Dot product`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#4DABCF] mb-2">Indexing & Slicing</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`arr[0]               # First element
arr[-1]              # Last element
arr[2:5]             # Slice
arr[arr > 3]         # Boolean mask
arr[[0,2,4]]         # Fancy index`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#4DABCF] mb-2">Reshaping</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`arr.reshape(3,4)     # 3x4 reshape
arr.flatten()        # Copy to 1D
arr.ravel()          # View to 1D
arr.T                # Transpose`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}