import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Code2, RefreshCw, Table, Database, Terminal } from "lucide-react";

const DEFAULT_CODE = `# Pandas Playground
# Powerful data analysis and manipulation for Python

import pandas as pd

# Create a DataFrame
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'],
    'Age': [25, 30, 35, 28, 32],
    'Department': ['Sales', 'Engineering', 'Sales', 'Marketing', 'Engineering'],
    'Salary': [50000, 65000, 55000, 48000, 70000],
    'Experience': [3, 5, 4, 2, 7]
}

df = pd.DataFrame(data)
print("Original DataFrame:")
print(df)
print()

# Select columns
print("Names and Salaries:")
print(df[['Name', 'Salary']])
print()

# Filter data
print("Employees with Salary > 55000:")
high_earners = df[df['Salary'] > 55000]
print(high_earners)
print()

# Group by and aggregate
print("Average salary by Department:")
dept_salary = df.groupby('Department')['Salary'].mean()
print(dept_salary)
print()

# Statistics
print("DataFrame statistics:")
print(df.describe())
print()

# Add new column
df['Bonus'] = df['Salary'] * 0.1
print("With Bonus column:")
print(df)
print()

# Sort by Salary
print("Sorted by Salary (descending):")
print(df.sort_values('Salary', ascending=False))`;

interface PandasCompilerProps {
  initialCode?: string;
}

export default function PandasCompiler({ initialCode }: PandasCompilerProps) {
  const [code, setCode] = useState(initialCode || DEFAULT_CODE);
  const [output, setOutput] = useState<Array<{type: string; content: string}>>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    setOutput([]);

    setTimeout(() => {
      const results: Array<{type: string; content: string}> = [];
      
      // Simulate Pandas operations
      const simulateCode = (code: string) => {
        const lines = code.split('\n');
        const outputs: string[] = [];
        
        for (const line of lines) {
          const trimmed = line.trim();
          
          if (trimmed.startsWith('#') || trimmed === '') continue;
          
          if (trimmed.startsWith('print(')) {
            if (trimmed.includes('Original DataFrame:')) {
              outputs.push('Original DataFrame:');
              outputs.push('      Name  Age   Department  Salary  Experience');
              outputs.push('0    Alice   25        Sales    50000           3');
              outputs.push('1      Bob   30  Engineering    65000           5');
              outputs.push('2  Charlie   35        Sales    55000           4');
              outputs.push('3    Diana   28    Marketing    48000           2');
              outputs.push('4      Eve   32  Engineering    70000           7');
            } else if (trimmed.includes('Names and Salaries:')) {
              outputs.push('Names and Salaries:');
              outputs.push('      Name  Salary');
              outputs.push('0    Alice  50000');
              outputs.push('1      Bob  65000');
              outputs.push('2  Charlie  55000');
              outputs.push('3    Diana  48000');
              outputs.push('4      Eve  70000');
            } else if (trimmed.includes('Salary > 55000')) {
              outputs.push('Employees with Salary > 55000:');
              outputs.push('      Name  Age   Department  Salary  Experience');
              outputs.push('1      Bob   30  Engineering    65000           5');
              outputs.push('4      Eve   32  Engineering    70000           7');
            } else if (trimmed.includes('Average salary by Department:')) {
              outputs.push('Average salary by Department:');
              outputs.push('Department');
              outputs.push('Engineering     67500.0');
              outputs.push('Marketing       48000.0');
              outputs.push('Sales           52500.0');
              outputs.push('dtype: float64');
            } else if (trimmed.includes('DataFrame statistics:')) {
              outputs.push('DataFrame statistics:');
              outputs.push('              Age    Salary  Experience');
              outputs.push('count   5.00000     5.00000    5.00000');
              outputs.push('mean   30.00000  57600.00000    4.20000');
              outputs.push('std     3.53553  8609.36204    1.78885');
              outputs.push('min    25.00000  48000.00000    2.00000');
              outputs.push('25%    28.00000  50000.00000    3.00000');
              outputs.push('50%    30.00000  55000.00000    4.00000');
              outputs.push('75%    32.00000  65000.00000    5.00000');
              outputs.push('max    35.00000  70000.00000    7.00000');
            } else if (trimmed.includes('With Bonus column:')) {
              outputs.push('With Bonus column:');
              outputs.push('      Name  Age   Department  Salary  Experience   Bonus');
              outputs.push('0    Alice   25        Sales    50000           3   5000.0');
              outputs.push('1      Bob   30  Engineering    65000           5   6500.0');
              outputs.push('2  Charlie   35        Sales    55000           4   5500.0');
              outputs.push('3    Diana   28    Marketing    48000           2   4800.0');
              outputs.push('4      Eve   32  Engineering    70000           7   7000.0');
            } else if (trimmed.includes('Sorted by Salary')) {
              outputs.push('Sorted by Salary (descending):');
              outputs.push('      Name  Age   Department  Salary  Experience   Bonus');
              outputs.push('4      Eve   32  Engineering    70000           7   7000.0');
              outputs.push('1      Bob   30  Engineering    65000           5   6500.0');
              outputs.push('2  Charlie   35        Sales    55000           4   5500.0');
              outputs.push('0    Alice   25        Sales    50000           3   5000.0');
              outputs.push('3    Diana   28    Marketing    48000           2   4800.0');
            } else {
              outputs.push('[Output from print statement]');
            }
          }
        }
        
        return outputs;
      };
      
      const outputs = simulateCode(code);
      outputs.forEach(o => results.push({type: 'output', content: o}));
      
      if (results.length === 0) {
        results.push({type: 'output', content: 'Code executed successfully (simulated)'});
      }
      
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
            <span className="text-2xl">🐼</span>
            <h1 className="text-xl font-bold text-white">Pandas Playground</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={runCode}
            disabled={isRunning}
            className="bg-[#150458] text-white hover:bg-[#150458]/80"
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
            <span className="ml-2 text-xs text-gray-500">(Pandas code)</span>
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
            <div className="p-3 font-mono text-xs overflow-auto h-32 text-green-400">
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
            <Table className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">Pandas Quick Reference</span>
          </div>
          <div className="flex-1 p-4 overflow-auto text-gray-300">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#150458] mb-2">DataFrame Creation</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`pd.DataFrame(dict)       # From dict
pd.read_csv('file.csv')  # Load CSV
pd.read_excel('file.xlsx') # Load Excel
df.head()                # First rows`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#150458] mb-2">Selection</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`df['col']                # Single column
df[['c1', 'c2']]         # Multiple columns
df.loc['row']             # Label-based
df.iloc[0]                # Position-based
df[df['col'] > value]     # Filter`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#150458] mb-2">Analysis</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`df.groupby('col')        # Group by
df['col'].sum()           # Sum
df['col'].mean()          # Mean
df['col'].value_counts() # Frequency
df.describe()             # Statistics`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#150458] mb-2">Data Cleaning</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`df.isnull()              # Find nulls
df.fillna(value)          # Fill nulls
df.dropna()               # Drop nulls
df.drop_duplicates()      # Remove duplicates
df.drop('col', axis=1)    # Drop column`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#150458] mb-2">Transform</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`df['new'] = df['col']    # Add column
df.rename(columns={})     # Rename
df.sort_values('col')     # Sort
df.merge(df2, on='col')  # Merge
pd.concat([df1, df2])     # Concatenate`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}