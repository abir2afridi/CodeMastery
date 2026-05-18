import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Code2, RefreshCw, Terminal, BarChart2 } from "lucide-react";

const DEFAULT_CODE = `# R Programming Playground
# Statistical computing and data science

# Variables and Vectors
x <- c(1, 2, 3, 4, 5)
y <- c(10, 20, 30, 40, 50)

# Vector operations
x + y
x * 2
mean(x)
sum(x)

# Create a data frame
students <- data.frame(
  name = c("Alice", "Bob", "Charlie", "Diana"),
  age = c(25, 30, 35, 28),
  score = c(85, 90, 78, 92)
)

print(students)

# Access columns
students$name
students$score

# Statistical summary
summary(students)

# Filter data
students[students$score > 80, ]

# Calculate statistics
mean(students$score)
sd(students$score)

# Basic plot
# plot(students$age, students$score)

print("R Playground Ready!")
print("Key Concepts: Vectors, Data Frames, dplyr, Statistics")`;

interface RCompilerProps {
  initialCode?: string;
}

export default function RCompiler({ initialCode }: RCompilerProps) {
  const [code, setCode] = useState(initialCode || DEFAULT_CODE);
  const [output, setOutput] = useState<Array<{type: string; content: string}>>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    setOutput([]);

    setTimeout(() => {
      const results: Array<{type: string; content: string}> = [];
      
      const outputs = [
        "R Playground Ready!",
        "",
        "📊 R Key Concepts:",
        "",
        "📝 Vectors:",
        "   - c() creates vectors",
        "   - Vectorized operations",
        "   - Subset with [ ]",
        "",
        "📋 Data Frames:",
        "   - Tabular data structure",
        "   - $ accesses columns",
        "   - Similar to spreadsheets",
        "",
        "🔧 dplyr Package:",
        "   - filter() - filter rows",
        "   - select() - choose columns",
        "   - mutate() - create columns",
        "   - summarize() - aggregate",
        "   - %>% - pipe operator",
        "",
        "📈 Statistics:",
        "   - mean(), median(), sd()",
        "   - lm() - linear regression",
        "   - t.test() - hypothesis testing",
        "",
        "📊 Visualization:",
        "   - plot() - basic plots",
        "   - ggplot2 - advanced charts",
        "   - hist() - histograms",
        "",
        "✅ Install tidyverse: install.packages('tidyverse')",
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
            <span className="text-2xl">📊</span>
            <h1 className="text-xl font-bold text-white">R Playground</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={runCode}
            disabled={isRunning}
            className="bg-[#276DC3] text-white hover:bg-[#276DC3]/80"
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
            <span className="text-sm font-medium text-gray-300">R Editor</span>
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
            <BarChart2 className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">R Quick Reference</span>
          </div>
          <div className="flex-1 p-4 overflow-auto text-gray-300">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#276DC3] mb-2">Basic Operations</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`x <- 5            # Assignment
c(1,2,3)         # Create vector
mean(x)          # Average
sum(x)           # Sum
sd(x)            # Standard deviation`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#276DC3] mb-2">Data Frames</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`df <- data.frame(col1, col2)
df$col1          # Access column
df[1,]           # First row
df[,1]           # First column`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#276DC3] mb-2">dplyr Verbs</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`select(df, col)     # Choose columns
filter(df, cond)   # Filter rows
mutate(df, new=val) # Add column
summarize(df, avg=mean(col))
%>%                 # Pipe operator`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#276DC3] mb-2">Statistics</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`lm(y ~ x)          # Linear regression
t.test()          # T-test
cor(x, y)         # Correlation
anova()           # ANOVA`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#276DC3] mb-2">Visualization</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`plot(x, y)         # Scatter plot
hist(x)           # Histogram
barplot(x)        # Bar chart
ggplot(df, aes()) # Advanced plots`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}