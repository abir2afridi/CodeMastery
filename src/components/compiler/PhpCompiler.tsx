import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { RotateCcw, Trash2, ArrowLeft, Play, Square, Terminal, AlertTriangle, Loader2, Code2, Eye } from "lucide-react";
import { useI18n } from "@/hooks/useI18n";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DEFAULT_PHP = `<?php
// Welcome to PHP!
// PHP runs on the SERVER - the browser never sees this code

echo "Hello, CodeMastery!" . "\\n";

// Variables start with $
$name = "PHP Student";
$age = 25;
$isLearning = true;

echo "Name: $name\\n";
echo "Age: $age\\n";

// Arrays
$fruits = array("Apple", "Banana", "Orange");
echo "Fruits: " . implode(", ", $fruits) . "\\n";

// Loops
foreach ($fruits as $fruit) {
    echo "I like $fruit\\n";
}

// Functions
function greet($name) {
    return "Hello, $name!";
}

echo greet("CodeMastery");
?>`;

const TEMPLATES = [
  { name: "Hello World", code: `<?php
echo "Hello, World!";
?>` },
  { name: "HTML Generator", code: `<!DOCTYPE html>
<html>
<head><title>Dynamic Page</title></head>
<body>
<?php
$title = "Welcome";
$message = "Hello from PHP!";
?>
<h1><?php echo $title; ?></h1>
<p><?php echo $message; ?></p>
<p>Current time: <?php echo date("Y-m-d H:i:s"); ?></p>
</body>
</html>` },
  { name: "Form Handler", code: `<?php
// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"] ?? "");
    $email = htmlspecialchars($_POST["email"] ?? "");

    echo "Name: " . $name . "<br>";
    echo "Email: " . $email . "<br>";
} else {
?>
<form method="post">
    Name: <input type="text" name="name"><br>
    Email: <input type="email" name="email"><br>
    <button type="submit">Submit</button>
</form>
<?php } ?>` },
  { name: "Array Functions", code: `<?php
$numbers = [5, 2, 8, 1, 9];

echo "Original: " . implode(", ", $numbers) . "\\n";
echo "Sorted: " . implode(", ", sort($numbers)) . "\\n";
echo "Sum: " . array_sum($numbers) . "\\n";
echo "Max: " . max($numbers) . "\\n";
echo "Min: " . min($numbers) . "\\n";
?>` },
  { name: "JSON API", code: `<?php
header("Content-Type: application/json");

$data = [
    "status" => "success",
    "message" => "Welcome to PHP API",
    "timestamp" => time(),
    "data" => [
        "name" => "CodeMastery",
        "version" => "1.0"
    ]
];

echo json_encode($data, JSON_PRETTY_PRINT);
?>` },
];

interface Props {
  initialCode?: string;
}

export function PhpCompiler({ initialCode }: Props) {
  const navigate = useNavigate();
  const { t } = useI18n();
  const [code, setCode] = useState(initialCode ?? DEFAULT_PHP);
  const [output, setOutput] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [executionTime, setExecutionTime] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"output" | "errors" | "html">("output");
  const [template, setTemplate] = useState("default");

  const runCode = async () => {
    setError(null);
    setOutput("");
    setIsRunning(true);
    setExecutionTime(null);
    setActiveTab("output");

    const startTime = performance.now();

    try {
      const response = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: "php",
          version: "8.2.3",
          files: [{ name: "index.php", content: code }],
          stdin: input
        })
      });

      const data = await response.json();
      const endTime = performance.now();
      setExecutionTime(Math.round(endTime - startTime));

      if (data.run?.stderr) {
        setError(data.run.stderr);
        setActiveTab("errors");
      } else if (data.run?.stdout) {
        setOutput(data.run.stdout);

        // Check if output contains HTML tags
        if (data.run.stdout.trim().match(/<[a-z]+[^>]*>/i)) {
          setActiveTab("html");
        }
      } else {
        setOutput("(No output)");
      }
    } catch (err: any) {
      setError(err.message || "Execution failed. Please try again.");
      setActiveTab("errors");
    } finally {
      setIsRunning(false);
    }
  };

  const clearOutput = () => {
    setOutput("");
    setError(null);
    setExecutionTime(null);
  };

  const resetCode = () => {
    setCode(DEFAULT_PHP);
    clearOutput();
    setTemplate("default");
  };

  const loadTemplate = (templateName: string) => {
    const tpl = TEMPLATES.find(t => t.name === templateName);
    if (tpl) {
      setCode(tpl.code);
      setTemplate(templateName);
      clearOutput();
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-lg font-bold flex items-center gap-2">
                <Code2 className="h-5 w-5 text-php" />
                PHP Compiler
              </h1>
              <p className="text-xs text-muted-foreground">Running on PHP 8.2</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <select
              value={template}
              onChange={(e) => loadTemplate(e.target.value)}
              className="bg-muted border border-border px-3 py-1.5 text-xs rounded-none"
            >
              <option value="default">Template...</option>
              {TEMPLATES.map(t => (
                <option key={t.name} value={t.name}>{t.name}</option>
              ))}
            </select>
            <Button variant="outline" size="sm" onClick={copyCode}>
              Copy
            </Button>
            <Button variant="outline" size="sm" onClick={resetCode}>
              <RotateCcw className="h-4 w-4 mr-1" />
              Reset
            </Button>
            <Button size="sm" onClick={runCode} disabled={isRunning}>
              {isRunning ? (
                <>
                  <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                  Running...
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 mr-1" />
                  Run (Ctrl+Enter)
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 container py-4">
        <div className="grid grid-cols-2 gap-4 h-[calc(100vh-180px)]">
          {/* Editor */}
          <div className="border border-border overflow-hidden">
            <CodeMirror
              value={code}
              height="100%"
              theme={oneDark}
              onChange={(val) => setCode(val)}
              className="h-full text-sm"
              basicSetup={{
                lineNumbers: true,
                highlightActiveLineGutter: true,
                highlightSpecialChars: true,
                history: true,
                foldGutter: true,
                drawSelection: true,
                dropCursor: true,
                allowMultipleSelections: true,
                indentOnInput: true,
                syntaxHighlighting: true,
                bracketMatching: true,
                closeBrackets: true,
                autocompletion: true,
                rectangularSelection: true,
                crosshairCursor: true,
                highlightActiveLine: true,
                highlightSelectionMatches: true,
                closeBracketsKeymap: true,
                defaultKeymap: true,
                searchKeymap: true,
                historyKeymap: true,
                foldKeymap: true,
                completionKeymap: true,
                lintKeymap: true,
              }}
            />
          </div>

          {/* Output Panel */}
          <div className="border border-border overflow-hidden flex flex-col">
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="flex-1 flex flex-col">
              <div className="border-b border-border px-4 py-2 flex items-center justify-between bg-muted/30">
                <TabsList className="h-8">
                  <TabsTrigger value="output" className="text-xs gap-1">
                    <Terminal className="h-3 w-3" />
                    Output
                  </TabsTrigger>
                  <TabsTrigger value="errors" className="text-xs gap-1">
                    <AlertTriangle className="h-3 w-3" />
                    Errors
                  </TabsTrigger>
                  <TabsTrigger value="html" className="text-xs gap-1">
                    <Eye className="h-3 w-3" />
                    HTML Preview
                  </TabsTrigger>
                </TabsList>
                {executionTime !== null && (
                  <span className="text-xs text-muted-foreground">
                    {executionTime}ms
                  </span>
                )}
              </div>

              <TabsContent value="output" className="flex-1 m-0 p-4 overflow-auto bg-obsidian">
                <pre className="text-sm font-mono text-terminal-green whitespace-pre-wrap">
                  {output || "Run your PHP code to see output..."}
                </pre>
              </TabsContent>

              <TabsContent value="errors" className="flex-1 m-0 p-4 overflow-auto bg-obsidian">
                <pre className="text-sm font-mono text-crimson whitespace-pre-wrap">
                  {error || "No errors"}
                </pre>
              </TabsContent>

              <TabsContent value="html" className="flex-1 m-0 p-0 overflow-hidden">
                {output.trim().match(/<[a-z]+[^>]*>/i) ? (
                  <iframe
                    srcDoc={output}
                    className="w-full h-full border-0"
                    sandbox="allow-scripts"
                    title="PHP HTML Output"
                  />
                ) : (
                  <div className="p-4 text-muted-foreground text-sm">
                    No HTML to preview. Output does not contain HTML tags.
                  </div>
                )}
              </TabsContent>
            </Tabs>

            {/* Input Section */}
            <div className="border-t border-border p-4 bg-muted/30">
              <label className="text-xs font-medium text-muted-foreground mb-2 block">
                STDIN (for fgets/STDIN input)
              </label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter input for PHP STDIN..."
                className="w-full h-20 bg-background border border-border p-2 text-sm font-mono resize-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Keyboard shortcut hint */}
      <div className="border-t border-border py-2 px-4 text-xs text-muted-foreground flex items-center justify-center gap-4">
        <span>Ctrl+Enter to run</span>
        <span>|</span>
        <span>PHP 8.2.3</span>
        <span>|</span>
        <span>Server-side execution via Piston API</span>
      </div>
    </div>
  );
}