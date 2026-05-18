import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Code2, Database, Terminal, RefreshCw, Table } from "lucide-react";

const DEFAULT_SQL = `-- PostgreSQL Playground
-- Try writing SQL queries here!

-- Create a sample table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    age INTEGER CHECK (age >= 18),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO users (username, email, age) VALUES
    ('john_doe', 'john@example.com', 25),
    ('jane_smith', 'jane@example.com', 30),
    ('bob_wilson', 'bob@example.com', 28),
    ('alice_brown', 'alice@example.com', 22);

-- Select all users
SELECT * FROM users;

-- Filter with WHERE
SELECT * FROM users WHERE age > 25;

-- Aggregate functions
SELECT 
    COUNT(*) as total_users,
    AVG(age) as average_age,
    MIN(age) as youngest,
    MAX(age) as oldest
FROM users;

-- Group by example
SELECT age, COUNT(*) as count FROM users GROUP BY age ORDER BY age;

-- Update example
UPDATE users SET age = 26 WHERE username = 'john_doe';

-- Verify the update
SELECT * FROM users ORDER BY id;

-- Delete example
-- DELETE FROM users WHERE age < 23;

-- Drop table (cleanup)
-- DROP TABLE users;
`;

interface PostgresCompilerProps {
  initialCode?: string;
}

export default function PostgresCompiler({ initialCode }: PostgresCompilerProps) {
  const [sqlCode, setSqlCode] = useState(initialCode || DEFAULT_SQL);
  const [output, setOutput] = useState<Array<{type: string; message: string}>>([]);
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setOutput([]);

    setTimeout(() => {
      const lines = sqlCode.split('\n');
      const results: Array<{type: string; message: string}> = [];
      
      // Simple simulation of SQL execution
      let tableCreated = false;
      let rowsInserted = 0;
      
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('--')) continue;
        
        const upperLine = trimmed.toUpperCase();
        
        if (upperLine.includes('CREATE TABLE')) {
          tableCreated = true;
          results.push({type: 'success', message: '✓ Table created successfully'});
        } else if (upperLine.includes('INSERT INTO')) {
          rowsInserted += 1;
          results.push({type: 'success', message: `✓ 1 row inserted`});
        } else if (upperLine.includes('SELECT')) {
          if (tableCreated) {
            results.push({type: 'result', message: 'Query executed successfully (4 rows returned)'});
            if (trimmed.includes('COUNT') || trimmed.includes('AVG') || trimmed.includes('MIN') || trimmed.includes('MAX')) {
              results.push({type: 'result', message: '┌────────────┬────────────┬───────────┬─────────┐'});
              results.push({type: 'result', message: '│ total_users │ average_age │ youngest │ oldest  │'});
              results.push({type: 'result', message: '├────────────┼────────────┼───────────┼─────────┤'});
              results.push({type: 'result', message: '│     4      │   26.25    │    22    │   30   │'});
              results.push({type: 'result', message: '└────────────┴────────────┴───────────┴─────────┘'});
            } else if (trimmed.includes('GROUP BY')) {
              results.push({type: 'result', message: '┌───────┬───────┐'});
              results.push({type: 'result', message: '│  age  │ count │'});
              results.push({type: 'result', message: '├───────┼───────┤'});
              results.push({type: 'result', message: '│   22  │   1  │'});
              results.push({type: 'result', message: '│   25  │   1  │'});
              results.push({type: 'result', message: '│   28  │   1  │'});
              results.push({type: 'result', message: '│   30  │   1  │'});
              results.push({type: 'result', message: '└───────┴───────┘'});
            } else {
              results.push({type: 'result', message: '┌────┬──────────────┬─────────────────────┬──────┬──────────────────────┐'});
              results.push({type: 'result', message: '│ id │  username   │       email         │ age  │     created_at       │'});
              results.push({type: 'result', message: '├────┼──────────────┼─────────────────────┼──────┼──────────────────────┤'});
              results.push({type: 'result', message: '│ 1  │ john_doe    │ john@example.com    │ 26   │ 2024-01-15 10:30:00│'});
              results.push({type: 'result', message: '│ 2  │ jane_smith  │ jane@example.com    │ 30   │ 2024-01-15 10:30:00│'});
              results.push({type: 'result', message: '│ 3  │ bob_wilson  │ bob@example.com     │ 28   │ 2024-01-15 10:30:00│'});
              results.push({type: 'result', message: '│ 4  │ alice_brown │ alice@example.com  │ 22   │ 2024-01-15 10:30:00│'});
              results.push({type: 'result', message: '└────┴──────────────┴─────────────────────┴──────┴──────────────────────┘'});
            }
          } else {
            results.push({type: 'error', message: 'Error: relation "users" does not exist'});
          }
        } else if (upperLine.includes('UPDATE')) {
          results.push({type: 'success', message: '✓ 1 row updated'});
        } else if (upperLine.includes('DELETE')) {
          results.push({type: 'success', message: '✓ 1 row deleted'});
        } else if (upperLine.includes('DROP TABLE')) {
          results.push({type: 'success', message: '✓ Table dropped'});
          tableCreated = false;
        }
      }
      
      if (results.length === 0) {
        results.push({type: 'info', message: 'No SQL statements detected. Write your queries above and click Run.'});
      }
      
      setOutput(results);
      setIsRunning(false);
    }, 500);
  };

  const handleReset = () => {
    setSqlCode(DEFAULT_SQL);
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
            <span className="text-2xl">🐘</span>
            <h1 className="text-xl font-bold text-white">PostgreSQL Playground</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={handleRun}
            disabled={isRunning}
            className="bg-[#336791] text-white hover:bg-[#336791]/80"
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
            <span className="text-sm font-medium text-gray-300">SQL Editor</span>
          </div>
          
          <div className="flex-1 overflow-auto">
            <CodeMirror
              value={sqlCode}
              height="100%"
              theme={oneDark}
              extensions={[sql()]}
              onChange={(value) => setSqlCode(value)}
              className="h-full text-base"
            />
          </div>

          {/* Output Console */}
          <div className="h-48 bg-gray-800 border-t border-gray-700">
            <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-700">
              <Terminal className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">Query Results</span>
            </div>
            <div className="p-3 font-mono text-sm overflow-auto h-32">
              {output.length > 0 ? (
                output.map((item, index) => (
                  <div 
                    key={index} 
                    className={
                      item.type === 'error' ? 'text-red-400 mb-1' :
                      item.type === 'success' ? 'text-green-400 mb-1' :
                      item.type === 'result' ? 'text-blue-300 mb-1' :
                      'text-gray-400 mb-1'
                    }
                  >
                    {item.message}
                  </div>
                ))
              ) : (
                <span className="text-gray-500">Execute SQL to see results...</span>
              )}
            </div>
          </div>
        </div>

        {/* Info Panel */}
        <div className="w-1/2 flex flex-col">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
            <Database className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">PostgreSQL Quick Reference</span>
          </div>
          <div className="flex-1 p-4 overflow-auto text-gray-300">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#336791] mb-2">Basic Commands</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`SELECT * FROM table;
INSERT INTO table (col) VALUES (val);
UPDATE table SET col = val WHERE id = 1;
DELETE FROM table WHERE id = 1;`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#336791] mb-2">Data Types</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`INTEGER, BIGINT, SMALLINT
DECIMAL(p,s), NUMERIC(p,s)
VARCHAR(n), TEXT
BOOLEAN
DATE, TIME, TIMESTAMP
JSON, JSONB
SERIAL (auto-increment)`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#336791] mb-2">Constraints</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`PRIMARY KEY
FOREIGN KEY REFERENCES other(id)
NOT NULL
UNIQUE
CHECK (value > 0)
DEFAULT 'value'`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#336791] mb-2">Aggregates</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`COUNT(*), COUNT(column)
SUM(column), AVG(column)
MIN(column), MAX(column)
GROUP BY column
HAVING condition`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}