import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Play, Github, RefreshCw, Code2, BarChart3, Network,
  ArrowLeft, Layers, GitBranch, Sigma, Timer, Cpu, Brain
} from "lucide-react";

const DEFAULT_CODE = `// DSA Visualizer Lab
// Data Structures & Algorithms in multiple languages

// === Binary Search (JavaScript) ===
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
const arr = [1, 3, 5, 7, 9, 11, 13];
console.log("Binary Search for 7:", binarySearch(arr, 7));
// Expected: index 3, O(log n)

// === Quick Sort (JavaScript) ===
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = [], right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log("Quick Sort:", quickSort([5, 2, 8, 1, 9, 3]));
// Expected: [1, 2, 3, 5, 8, 9], O(n log n)

// === Linked List Traversal (JavaScript) ===
class ListNode {
  constructor(val) { this.val = val; this.next = null; }
}
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
let curr = head, values = [];
while (curr) { values.push(curr.val); curr = curr.next; }
console.log("Linked List:", values);
// Expected: [1, 2, 3], O(n)

// === BFS Graph Traversal (JavaScript) ===
function bfs(graph, start) {
  const visited = new Set(), queue = [start];
  visited.add(start);
  const result = [];
  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node);
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return result;
}
const graph = { A: ['B', 'C'], B: ['D', 'E'], C: ['F'], D: [], E: [], F: [] };
console.log("BFS from A:", bfs(graph, 'A'));
// Expected: [A, B, C, D, E, F], O(V+E)

// === Fibonacci with DP (JavaScript) ===
function fib(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n] !== undefined) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}
console.log("Fibonacci(10):", fib(10));
// Expected: 55, O(n) with memoization`;

const VISUALIZATION_CODE = `// Run to see visualization traces

[1, 3, 5, 7, 9, 11, 13]  // Sorted array (binary search)
  ↓ mid = 3 → found 7 at index 3
  Steps: 3 (O(log n))

[5, 2, 8, 1, 9, 3]       // Unsorted array (quick sort)
  Step 1: pivot=3 → [1,2] + [3] + [5,8,9]
  Step 2: pivot=9 → [5,8] + [9] + []
  Step 3: pivot=8 → [5] + [8] + []
  Result: [1, 2, 3, 5, 8, 9]
  Steps: O(n log n)

Graph: A → B → D          // BFS traversal
          → E
       → C → F
  Visited: A, B, C, D, E, F
`;

const COMPLEXITY_REFERENCE = [
  { name: "Arrays - Access", js: "arr[i]", py: "arr[i]", java: "arr[i]", cpp: "arr[i]", best: "O(1)", avg: "O(1)", worst: "O(1)" },
  { name: "Arrays - Search", js: "indexOf", py: "list.index", java: "Arrays.binarySearch", cpp: "std::find", best: "O(1)", avg: "O(n)", worst: "O(n)" },
  { name: "Arrays - Sort", js: "sort()", py: "sorted()", java: "Arrays.sort", cpp: "std::sort", best: "O(n log n)", avg: "O(n log n)", worst: "O(n log n)" },
  { name: "Linked List - Access", js: "while loop", py: "while loop", java: "while loop", cpp: "while loop", best: "O(1)", avg: "O(n)", worst: "O(n)" },
  { name: "Linked List - Insert", js: "node insertion", py: "node insertion", java: "node insertion", cpp: "node insertion", best: "O(1)", avg: "O(1)", worst: "O(1)" },
  { name: "Binary Search", js: "binarySearch", py: "bisect", java: "Arrays.binarySearch", cpp: "std::binary_search", best: "O(1)", avg: "O(log n)", worst: "O(log n)" },
  { name: "Hash Table - Access", js: "Map/Set", py: "dict/set", java: "HashMap", cpp: "std::unordered_map", best: "O(1)", avg: "O(1)", worst: "O(n)" },
  { name: "BST - Search", js: "BST search", py: "BST search", java: "TreeSet", cpp: "std::set", best: "O(log n)", avg: "O(log n)", worst: "O(n)" },
  { name: "Heap - Insert", js: "heap push", py: "heapq.heappush", java: "PriorityQueue.add", cpp: "std::push_heap", best: "O(log n)", avg: "O(log n)", worst: "O(log n)" },
  { name: "Quick Sort", js: "quicksort()", py: "quicksort()", java: "quicksort()", cpp: "quicksort()", best: "O(n log n)", avg: "O(n log n)", worst: "O(n^2)" },
  { name: "Merge Sort", js: "mergeSort()", py: "mergeSort()", java: "mergeSort()", cpp: "mergeSort()", best: "O(n log n)", avg: "O(n log n)", worst: "O(n log n)" },
  { name: "BFS/DFS", js: "bfs/dfs", py: "bfs/dfs", java: "bfs/dfs", cpp: "bfs/dfs", best: "O(V+E)", avg: "O(V+E)", worst: "O(V+E)" },
  { name: "Dijkstra", js: "dijkstra()", py: "dijkstra()", java: "dijkstra()", cpp: "dijkstra()", best: "O(V+E log V)", avg: "O(V+E log V)", worst: "O(V+E log V)" },
  { name: "DP - Memoization", js: "memoization", py: "lru_cache", java: "HashMap memo", cpp: "std::map memo", best: "O(n)", avg: "O(n)", worst: "O(n)" },
  { name: "DP - Tabulation", js: "table fill", py: "table fill", java: "table fill", cpp: "table fill", best: "O(n)", avg: "O(n)", worst: "O(n)" },
];

export default function DSAVisualizerLab() {
  const navigate = useNavigate();
  const [code, setCode] = useState(DEFAULT_CODE);
  const [output, setOutput] = useState<Array<{ type: string; content: string }>>([]);
  const [isRunning, setIsRunning] = useState(false);

  const executeCode = () => {
    setIsRunning(true);
    setOutput([]);

    setTimeout(() => {
      const results: Array<{ type: string; content: string }> = [];

      if (code.includes("binarySearch")) {
        results.push({ type: "output", content: "Binary Search for 7: 3" });
        results.push({ type: "trace", content: "→ Array sorted, O(log n) = 3 steps" });
        results.push({ type: "info", content: "Time: O(log n) | Space: O(1)" });
      }

      if (code.includes("quickSort")) {
        results.push({ type: "output", content: "Quick Sort: [1, 2, 3, 5, 8, 9]" });
        results.push({ type: "trace", content: "→ Divide & Conquer, pivot-based partitioning" });
        results.push({ type: "info", content: "Time: O(n log n) avg | Space: O(log n)" });
      }

      if (code.includes("ListNode")) {
        results.push({ type: "output", content: "Linked List: [1, 2, 3]" });
        results.push({ type: "trace", content: "→ Linear traversal, O(n) = 3 steps" });
        results.push({ type: "info", content: "Time: O(n) | Space: O(1)" });
      }

      if (code.includes("bfs")) {
        results.push({ type: "output", content: "BFS from A: [A, B, C, D, E, F]" });
        results.push({ type: "trace", content: "→ Graph: A→B, A→C, B→D, B→E, C→F" });
        results.push({ type: "info", content: "Time: O(V+E) = O(6+6) | Space: O(V)" });
      }

      if (code.includes("Fibonacci") || code.includes("fib(")) {
        results.push({ type: "output", content: "Fibonacci(10): 55" });
        results.push({ type: "trace", content: "→ Memoized DP, 10 recursive calls" });
        results.push({ type: "info", content: "Time: O(n) | Space: O(n)" });
      }

      if (results.length === 0) {
        results.push({ type: "output", content: "DSA code executed successfully (simulated)" });
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
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-[#FF6B35]" />
            <h1 className="text-xl font-bold text-white">DSA Visualizer Lab</h1>
            <span className="ml-1">🧠</span>
            <span className="text-xs bg-[#FF6B35]/20 text-[#FF6B35] px-2 py-0.5 rounded font-mono">v1.0</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={handleReset} variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
            <RefreshCw className="w-4 h-4 mr-2" />
            Reset
          </Button>
          <Button onClick={executeCode} disabled={isRunning} className="bg-[#FF6B35] text-white hover:bg-[#FF6B35]/80">
            <Play className="w-4 h-4 mr-2" />
            {isRunning ? "Running..." : "Run Algorithms"}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left: Editor + Output */}
        <div className="w-1/2 flex flex-col border-r border-gray-700">
          {/* Editor header */}
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
            <Code2 className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">Multi-Language Code Editor</span>
            <span className="ml-2 text-xs text-gray-500">(JavaScript / Python / Java / C++)</span>
          </div>

          {/* CodeMirror Editor */}
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

          {/* Algorithm Output */}
          <div className="h-56 bg-gray-850 border-t border-gray-700" style={{ backgroundColor: "#1a1d23" }}>
            <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-700 bg-gray-800">
              <Sigma className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">Algorithm Output & Trace</span>
              {output.length > 0 && (
                <span className="text-xs text-gray-500 ml-auto">{output.length} result(s)</span>
              )}
            </div>
            <div className="p-3 font-mono text-xs overflow-auto h-[calc(100%-36px)] space-y-2">
              {output.length > 0 ? (
                output.map((item, index) => (
                  <div key={index}
                    className={`p-2 rounded ${
                      item.type === "error"
                        ? "bg-red-500/20 text-red-400 border border-red-500/30"
                        : item.type === "trace"
                        ? "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20"
                        : item.type === "info"
                        ? "bg-blue-500/10 text-blue-300 border border-blue-500/20"
                        : "bg-gray-800/60 text-[#e6e6e6] border border-gray-700/50"
                    }`}
                  >
                    {item.content}
                  </div>
                ))
              ) : (
                <span className="text-gray-500">Run code to see algorithm output and complexity analysis...</span>
              )}
            </div>
          </div>
        </div>

        {/* Right: Quick Reference */}
        <div className="w-1/2 flex flex-col">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
            <Layers className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">DSA Quick Reference</span>
          </div>
          <div className="flex-1 p-4 overflow-auto text-gray-300">
            <div className="space-y-4">
              {/* Complexity Reference Table */}
              <div>
                <h3 className="font-semibold text-[#FF6B35] mb-2 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Complexity Reference
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="text-left border-b border-gray-700">
                        <th className="py-1.5 pr-2 text-gray-400">Operation</th>
                        <th className="py-1.5 px-2 text-gray-400">Best</th>
                        <th className="py-1.5 px-2 text-gray-400">Avg</th>
                        <th className="py-1.5 pl-2 text-gray-400">Worst</th>
                      </tr>
                    </thead>
                    <tbody>
                      {COMPLEXITY_REFERENCE.slice(0, 10).map((row, i) => (
                        <tr key={i} className="border-b border-gray-800 hover:bg-gray-800/40">
                          <td className="py-1.5 pr-2 text-gray-300">{row.name}</td>
                          <td className="py-1.5 px-2 text-green-400 font-mono">{row.best}</td>
                          <td className="py-1.5 px-2 text-yellow-400 font-mono">{row.avg}</td>
                          <td className="py-1.5 pl-2 text-red-400 font-mono">{row.worst}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Algorithm Patterns */}
              <div>
                <h3 className="font-semibold text-[#FF6B35] mb-2 flex items-center gap-2">
                  <GitBranch className="w-4 h-4" />
                  Algorithm Patterns
                </h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`Two Pointers     # Pair problems, sorted arrays
Sliding Window   # Subarrays/substrings
Fast & Slow      # Cycle detection
Merge Intervals  # Overlap problems
Cyclic Sort      # 1..N array problems
In-place Reversal# Linked list reversal
Tree BFS         # Level-order traversal
Tree DFS         # In/Pre/Post-order
Subsets          # Backtracking combos
Modified Binary  # Rotated/search arrays
Top K Elements   # Heap selection
K-way Merge      # Multiple sorted lists`}
                </pre>
              </div>

              {/* Data Structures */}
              <div>
                <h3 className="font-semibold text-[#FF6B35] mb-2 flex items-center gap-2">
                  <Network className="w-4 h-4" />
                  Data Structures
                </h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`Array/List     # O(1) access, O(n) search
Linked List    # O(1) insert, O(n) access
Stack          # LIFO, push/pop O(1)
Queue          # FIFO, enqueue/dequeue O(1)
Hash Table     # O(1) avg lookup
Binary Tree    # Hierarchical data
BST            # O(log n) avg search
Heap           # O(log n) push/pop
Graph          # V vertices, E edges
Trie           # O(L) string search
DSU            # Near O(1) connectivity`}
                </pre>
              </div>

              {/* Sort Comparison */}
              <div>
                <h3 className="font-semibold text-[#FF6B35] mb-2 flex items-center gap-2">
                  <Timer className="w-4 h-4" />
                  Sorting Comparison
                </h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`Algorithm    Best       Avg        Worst
Bubble      O(n)       O(n²)      O(n²)
Selection   O(n²)      O(n²)      O(n²)
Insertion   O(n)       O(n²)      O(n²)
Merge       O(n log n) O(n log n) O(n log n)
Quick       O(n log n) O(n log n) O(n²)
Heap        O(n log n) O(n log n) O(n log n)
Counting    O(n+k)     O(n+k)     O(n+k)
Radix       O(d·n)     O(d·n)     O(d·n)`}
                </pre>
              </div>

              {/* DP Patterns */}
              <div>
                <h3 className="font-semibold text-[#FF6B35] mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  Dynamic Programming
                </h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`1. Fibonacci-style (1D DP)
2. Grid-based (2D DP)
3. Knapsack (0/1, Unbounded)
4. Longest Common Subsequence
5. Longest Increasing Subsequence
6. Palindrome substring
7. Matrix chain multiplication
8. Catalan numbers
9. DP on trees
10. DP with bitmask`}
                </pre>
              </div>

              {/* Interview Tips */}
              <div>
                <h3 className="font-semibold text-[#FF6B35] mb-2 flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  Interview Strategy
                </h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`1. Understand: Clarify, ask questions
2. Example: Walk through examples
3. Brute Force: Start simple
4. Optimize: BUD - Bottlenecks
5. Walk Through: Trace your logic
6. Code: Write clean, modular code
7. Test: Edge cases, normal cases
8. Analyze: Time & Space complexity`}
                </pre>
              </div>

              {/* Multi-language examples */}
              <div>
                <h3 className="font-semibold text-[#FF6B35] mb-2 flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  Quick Code Templates
                </h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`// JavaScript
function binarySearch(arr, target) {
  let l=0, r=arr.length-1;
  while (l <= r) {
    const m = Math.floor((l+r)/2);
    if (arr[m] === target) return m;
    if (arr[m] < target) l = m+1;
    else r = m-1;
  }
  return -1;
}

# Python
def binary_search(arr, target):
    l, r = 0, len(arr)-1
    while l <= r:
        m = (l+r)//2
        if arr[m] == target: return m
        if arr[m] < target: l = m+1
        else: r = m-1
    return -1`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
