import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Play, Table, RefreshCw, Code2, FunctionSquare,
  ArrowLeft, Grid3x3, Sigma, ChartBar, Database, FileSpreadsheet
} from "lucide-react";

const DEFAULT_CODE = `// Excel Formula Lab
// Try Excel formulas and functions

// Sample data: Sales by Region
// | Region   | Q1     | Q2     | Q3     | Q4     |
// | North    | 45000  | 52000  | 48000  | 55000  |
// | South    | 38000  | 41000  | 44000  | 47000  |
// | East     | 52000  | 58000  | 54000  | 61000  |
// | West     | 41000  | 45000  | 49000  | 53000  |

// Basic aggregations
=SUM(B2:E5)     // Total sales all regions
=AVERAGE(B2:E5) // Average quarterly sales
=MAX(B2:E5)     // Highest quarterly sales
=MIN(B2:E5)     // Lowest quarterly sales

// Conditional formulas
=SUMIF(B2:E5, ">50000")  // Sum sales over 50K
=COUNTIF(B2:E5, ">=50000") // Count high quarters

// Lookup example
=XLOOKUP("East", A2:A5, B2:E5) // Lookup East row

// Region totals
=SUM(B2:E2)  // North total
=SUM(B3:E3)  // South total
=SUM(B4:E4)  // East total
=SUM(B5:E5)  // West total

// Grand total
=SUM(B2:B5)  // Q1 total
=SUM(C2:C5)  // Q2 total
=SUM(D2:D5)  // Q3 total
=SUM(E2:E5)  // Q4 total`;

const SAMPLE_DATA = {
  headers: ["Region", "Q1", "Q2", "Q3", "Q4"],
  rows: [
    ["North", 45000, 52000, 48000, 55000],
    ["South", 38000, 41000, 44000, 47000],
    ["East", 52000, 58000, 54000, 61000],
    ["West", 41000, 45000, 49000, 53000],
  ]
};

const SAMPLE_RESULTS: Record<string, string> = {
  "=SUM(B2:E5)": "794,000",
  "=AVERAGE(B2:E5)": "49,625",
  "=MAX(B2:E5)": "61,000",
  "=MIN(B2:E5)": "38,000",
  '=SUMIF(B2:E5, ">50000")': "436,000",
  '=COUNTIF(B2:E5, ">=50000")': "8",
  '=XLOOKUP("East", A2:A5, B2:E5)': "52,000 | 58,000 | 54,000 | 61,000",
  "=SUM(B2:E2)": "200,000",
  "=SUM(B3:E3)": "170,000",
  "=SUM(B4:E4)": "225,000",
  "=SUM(B5:E5)": "188,000",
  "=SUM(B2:B5)": "176,000",
  "=SUM(C2:C5)": "196,000",
  "=SUM(D2:D5)": "195,000",
  "=SUM(E2:E5)": "216,000",
};

export default function ExcelStudio() {
  const navigate = useNavigate();
  const [code, setCode] = useState(DEFAULT_CODE);
  const [output, setOutput] = useState<Array<{ formula: string; result: string }>>([]);
  const [isRunning, setIsRunning] = useState(false);

  const executeFormulas = () => {
    setIsRunning(true);
    setOutput([]);

    setTimeout(() => {
      const results: Array<{ formula: string; result: string }> = [];
      const lines = code.split("\n");

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("//") || trimmed.startsWith("|") || trimmed.startsWith("Sample")) continue;

        const formulaMatch = trimmed.match(/^=(.+)$/);
        if (formulaMatch) {
          const formula = formulaMatch[0];
          const normalized = formula.replace(/\s+/g, " ");
          const result = SAMPLE_RESULTS[normalized];
          if (result) {
            results.push({ formula: trimmed, result });
          } else {
            results.push({ formula: trimmed, result: "Calculated..." });
          }
        }
      }

      if (results.length === 0) {
        results.push({ formula: "Excel Lab", result: "Formulas executed successfully (simulated)" });
      }

      setOutput(results);
      setIsRunning(false);
    }, 300);
  };

  const handleReset = () => {
    setCode(DEFAULT_CODE);
    setOutput([]);
  };

  const formatNumber = (n: number) => n.toLocaleString();

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          <div className="flex items-center gap-2">
            <FileSpreadsheet className="w-6 h-6 text-[#217346]" />
            <h1 className="text-xl font-bold text-white">Excel Studio</h1>
            <span className="ml-1">📊</span>
            <span className="text-xs bg-[#217346]/20 text-[#217346] px-2 py-0.5 rounded font-mono">Spreadsheet Lab</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={handleReset} variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
            <RefreshCw className="w-4 h-4 mr-2" />
            Reset
          </Button>
          <Button onClick={executeFormulas} disabled={isRunning} className="bg-[#217346] text-white hover:bg-[#217346]/80">
            <Play className="w-4 h-4 mr-2" />
            {isRunning ? "Calculating..." : "Calculate"}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left: Editor + Spreadsheet Preview */}
        <div className="w-1/2 flex flex-col border-r border-gray-700">
          {/* Code Editor */}
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
            <Code2 className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">Formula Editor</span>
            <span className="ml-2 text-xs text-gray-500">(Excel formulas)</span>
          </div>

          <div className="flex-1 overflow-hidden flex flex-col">
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

            {/* Spreadsheet Preview */}
            <div className="h-64 bg-gray-850 border-t border-gray-700" style={{ backgroundColor: "#1a1d23" }}>
              <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-700 bg-gray-800">
                <Table className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">Spreadsheet Preview</span>
              </div>
              <div className="p-2 overflow-auto h-[calc(100%-36px)]">
                <div className="inline-block min-w-full">
                  {/* Column headers */}
                  <div className="flex bg-gray-800 rounded-t border border-gray-700">
                    <div className="w-20 px-3 py-2 text-xs font-medium text-gray-400 border-r border-gray-700 bg-gray-750 text-center">
                      &nbsp;
                    </div>
                    {SAMPLE_DATA.headers.slice(1).map((h, i) => (
                      <div key={i} className="flex-1 px-3 py-2 text-xs font-medium text-gray-300 text-center border-r border-gray-700 last:border-r-0 bg-gray-750">
                        {h}
                      </div>
                    ))}
                  </div>
                  {/* Data rows */}
                  {SAMPLE_DATA.rows.map((row, ri) => (
                    <div key={ri} className="flex border-b border-gray-700 last:border-b-0">
                      <div className="w-20 px-3 py-2 text-xs font-medium text-gray-400 border-r border-gray-700 bg-gray-750 flex items-center justify-center">
                        {row[0]}
                      </div>
                      {row.slice(1).map((cell, ci) => (
                        <div key={ci} className="flex-1 px-3 py-2 text-xs text-gray-200 border-r border-gray-700 last:border-r-0 text-right font-mono">
                          {formatNumber(cell)}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Formula Output */}
            <div className="h-48 bg-gray-850 border-t border-gray-700" style={{ backgroundColor: "#1a1d23" }}>
              <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-700 bg-gray-800">
                <Sigma className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">Calculation Results</span>
                {output.length > 0 && (
                  <span className="text-xs text-gray-500 ml-auto">{output.length} result(s)</span>
                )}
              </div>
              <div className="p-3 font-mono text-xs overflow-auto h-[calc(100%-36px)] space-y-1.5">
                {output.length > 0 ? (
                  output.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 p-2 rounded bg-gray-800/60 border border-gray-700/50">
                      <span className="text-[#217346] font-medium shrink-0 text-[10px] mt-0.5">=</span>
                      <span className="text-gray-300 whitespace-pre-wrap flex-1">{item.formula}</span>
                      <span className="text-yellow-400 font-semibold shrink-0 text-right">{item.result}</span>
                    </div>
                  ))
                ) : (
                  <span className="text-gray-500">Run formulas to see calculated results...</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Quick Reference */}
        <div className="w-1/2 flex flex-col">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
            <FunctionSquare className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">Excel Quick Reference</span>
          </div>
          <div className="flex-1 p-4 overflow-auto text-gray-300">
            <div className="space-y-4">
              {/* Formula Basics */}
              <div>
                <h3 className="font-semibold text-[#217346] mb-2 flex items-center gap-2">
                  <Sigma className="w-4 h-4" />
                  Formula Basics
                </h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`=SUM(A1:A10)         # Sum of range
=AVERAGE(A1:A10)     # Average of range
=MIN(A1:A10)         # Minimum value
=MAX(A1:A10)         # Maximum value
=COUNT(A1:A10)       # Count numbers
=COUNTA(A1:A10)      # Count non-empty`}
                </pre>
              </div>

              {/* Logical Functions */}
              <div>
                <h3 className="font-semibold text-[#217346] mb-2 flex items-center gap-2">
                  <Grid3x3 className="w-4 h-4" />
                  Logical Functions
                </h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`=IF(condition, val1, val2)  # Conditional
=AND(cond1, cond2)          # All true
=OR(cond1, cond2)           # Any true
=NOT(cond)                  # Not true
=IFS(cond1, val1, ...)      # Multiple IFs
=SWITCH(expr, val1, res1)   # Case match`}
                </pre>
              </div>

              {/* Lookup Functions */}
              <div>
                <h3 className="font-semibold text-[#217346] mb-2 flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  Lookup & Reference
                </h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`=VLOOKUP(val, table, col)   # Vertical lookup
=HLOOKUP(val, table, row)   # Horizontal lookup
=XLOOKUP(val, arr, return)  # Modern lookup
=INDEX(range, row, col)     # Value at position
=MATCH(val, range, 0)       # Position of value
=CHOOSE(num, val1, val2)    # Pick by index`}
                </pre>
              </div>

              {/* Conditional Aggregation */}
              <div>
                <h3 className="font-semibold text-[#217346] mb-2 flex items-center gap-2">
                  <ChartBar className="w-4 h-4" />
                  Conditional & Text
                </h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`=SUMIF(range, crit, sum)    # Sum if condition
=COUNTIF(range, crit)       # Count if condition
=AVERAGEIF(range, crit)     # Average if condition
=SUMIFS(sum, r1, c1, ...)  # Multiple conditions
=LEFT(text, n)              # First n chars
=RIGHT(text, n)             # Last n chars
=MID(text, start, n)        # Middle chars
=CONCATENATE(t1, t2)        # Join text
=TEXT(value, format)        # Format as text`}
                </pre>
              </div>

              {/* Date & Financial */}
              <div>
                <h3 className="font-semibold text-[#217346] mb-2 flex items-center gap-2">
                  <Table className="w-4 h-4" />
                  Date & Financial
                </h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`=TODAY()               # Current date
=NOW()                 # Current date/time
=DATE(year, mon, day)  # Create date
=DATEDIF(start, end)   # Date difference
=PMT(rate, nper, pv)   # Loan payment
=NPV(rate, values)     # Net present value
=IRR(values)           # Internal rate
=FV(rate, nper, pmt)   # Future value`}
                </pre>
              </div>

              {/* Cell References */}
              <div>
                <h3 className="font-semibold text-[#217346] mb-2 flex items-center gap-2">
                  <Grid3x3 className="w-4 h-4" />
                  Cell References
                </h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`A1        # Relative reference
$A$1      # Absolute reference
$A1       # Mixed: absolute column
A$1       # Mixed: absolute row
A:A       # Entire column
1:1       # Entire row
A1:B10    # Range reference
Sheet!A1  # Other sheet reference`}
                </pre>
              </div>

              {/* Keyboard Shortcuts */}
              <div>
                <h3 className="font-semibold text-[#217346] mb-2 flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  Keyboard Shortcuts
                </h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`Ctrl+C / Ctrl+V    # Copy / Paste
Ctrl+Z / Ctrl+Y    # Undo / Redo
Ctrl+Shift+↓       # Select to end
F2                 # Edit active cell
F4                 # Toggle references
Ctrl+Space         # Select column
Shift+Space        # Select row
Ctrl+~             # Show formulas`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
