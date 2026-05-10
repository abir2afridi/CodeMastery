import type { Chapter } from "./types";

export const jsCh14: Chapter = {
  id: "js-ch-14",
  number: 14,
  title: "Arrays Advanced",
  subtitle: "Deep dive into array methods and patterns.",
  difficulty: "Intermediate",
  estimatedMinutes: 60,
  xpReward: 160,
  prerequisites: ["js-ch-12"],
  partLabel: "Part 3: Data Structures",
  learningObjectives: [
    "Master reduce for complex transformations.",
    "Use flat, flatMap for nested arrays.",
    "Sort with custom comparators.",
    "Find and filter efficiently.",
    "Understand array iteration patterns.",
  ],
  sections: [
    {
      id: "js14-s1",
      title: "Reduce: The Swiss Army Knife",
      whyItMatters: "reduce can implement every other array method. Mastering it unlocks powerful data transformations.",
      realWorldAnalogy: "reduce is like a factory assembly line where each item passes through a worker who adds it to the running product.",
      content: `reduce takes an accumulator and current value:

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];

// Sum
const sum = numbers.reduce((acc, num) => acc + num, 0);
// 15

// Product
const product = numbers.reduce((acc, num) => acc * num, 1);
// 120

// Group by
const words = ['apple', 'banana', 'apricot', 'blueberry'];
const grouped = words.reduce((acc, word) => {
  const first = word[0];
  acc[first] = acc[first] || [];
  acc[first].push(word);
  return acc;
}, {});
// { a: ['apple', 'apricot'], b: ['banana', 'blueberry'] }
\`\`\`

Always provide an initial value to avoid bugs with empty arrays.`,
    },
    {
      id: "js14-s2",
      title: "Flat and FlatMap",
      whyItMatters: "Nested arrays are common in real-world data. flat and flatMap simplify working with them.",
      content: `flatten nested arrays:

\`\`\`javascript
const nested = [[1, 2], [3, 4], [5, 6]];

// flat
const flat = nested.flat();
// [1, 2, 3, 4, 5, 6]

// flat with depth
const deep = [[1, [2, [3]]]];
const flattened = deep.flat(2);
// [1, 2, 3]

// flatMap = map + flat
const doubled = numbers.flatMap(n => [n, n * 2]);
// [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
\`\`\``,
    },
    {
      id: "js14-s3",
      title: "Sorting",
      whyItMatters: "Default sort converts to strings. For numbers and objects, you need custom comparators.",
      content: `Sort numbers correctly:

\`\`\`javascript
const nums = [10, 2, 1, 20];

// Wrong - converts to strings
nums.sort(); // [1, 10, 2, 20]

// Correct
nums.sort((a, b) => a - b); // [1, 2, 10, 20]

// Descending
nums.sort((a, b) => b - a); // [20, 10, 2, 1]
\`\`\`

Sort objects:

\`\`\`javascript
const users = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 }
];

users.sort((a, b) => a.age - b.age);
// [{ name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 }]
\`\`\``,
    },
  ],
  exercises: [
    { id: "js14-ex1", title: "Sum with reduce", difficulty: 2, description: "Use reduce to sum an array of numbers.", requirements: ["Use reduce", "Handle empty arrays", "Return number"], starterCode: { javascript: "function sum(numbers) {\n  // Your code here\n}" }, hints: ["Provide initial value of 0", "acc + num"], solution: { javascript: "function sum(numbers) {\n  return numbers.reduce((acc, num) => acc + num, 0);\n}" }, solutionExplanation: "reduce with initial value 0 safely sums all numbers." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js14-q1", type: "mcq", question: "What does reduce return without initial value on empty array?", options: ["undefined", "0", "Error", "[]"], correctAnswer: 2, explanation: "reduce throws TypeError when called on empty array without initial value.", difficulty: 2 }] },
  cheatSheet: [{ label: "Sum", value: "reduce((acc, n) => acc + n, 0)" }, { label: "Flat", value: "flat()" }, { label: "Sort numbers", value: "sort((a, b) => a - b)" }],
};

export const jsCh15: Chapter = {
  id: "js-ch-15",
  number: 15,
  title: "Objects",
  subtitle: "Key-value pairs and the foundation of JavaScript.",
  difficulty: "Intermediate",
  estimatedMinutes: 60,
  xpReward: 160,
  prerequisites: ["js-ch-11"],
  partLabel: "Part 3: Data Structures",
  learningObjectives: [
    "Create and access objects.",
    "Use object methods and this.",
    "Destructure objects.",
    "Spread and clone objects.",
    "Understand reference vs primitive.",
  ],
  sections: [
    {
      id: "js15-s1",
      title: "Object Basics",
      whyItMatters: "Objects are the building blocks of JavaScript. Almost everything in JS is an object.",
      realWorldAnalogy: "An object is like a backpack with labeled pockets. Each pocket (key) holds something (value) you can retrieve by its label.",
      content: `Create objects with literal syntax:

\`\`\`javascript
const person = {
  name: 'Alice',
  age: 30,
  greet() {
    return \`Hello, I'm \${this.name}\`;\n  }\n};\n\nperson.greet(); // \"Hello, I'm Alice\"\n\`\`\`\n\nAccess properties:\n\n\`\`\`javascript\nperson.name;        // 'Alice'\nperson['age'];      // 30\nconst key = 'name';\nperson[key];        // 'Alice' - dynamic access\n\`\`\`\n\nAdd and delete properties:\n\n\`\`\`javascript\nperson.email = 'alice@example.com';\ndelete person.email;\n\`\`\``,
    },
    {
      id: "js15-s2",
      title: "Object Methods",
      whyItMatters: "Objects have built-in methods for common operations like converting to JSON, getting keys, and checking properties.",
      content: `Useful object methods:\n\n\`\`\`javascript\nconst user = { name: 'Alice', age: 30, email: 'alice@example.com' };\n\n// Get all keys\nObject.keys(user); // ['name', 'age', 'email']\n\n// Get all values\nObject.values(user); // ['Alice', 30, 'alice@example.com']\n\n// Get key-value pairs\nObject.entries(user); // [['name', 'Alice'], ['age', 30], ['email', 'alice@example.com']]\n\n// Check if property exists\n'name' in user; // true\nuser.hasOwnProperty('name'); // true\n\n// Freeze object (prevent changes)\nObject.freeze(user);\nuser.name = 'Bob'; // Ignored in strict mode\n\`\`\``,
    },
    {
      id: "js15-s3",
      title: "Destructuring and Spread",
      whyItMatters: "Destructuring extracts values cleanly. Spread copies and merges objects efficiently.",
      content: `Destructure objects:\n\n\`\`\`javascript\nconst person = { name: 'Alice', age: 30, city: 'NYC' };\n\nconst { name, age } = person;\nconsole.log(name); // 'Alice'\n\n// With default values\nconst { name, country = 'USA' } = person;\nconsole.log(country); // 'USA'\n\`\`\`\n\nSpread for cloning and merging:\n\n\`\`\`javascript\nconst original = { a: 1, b: 2 };\nconst clone = { ...original }; // Shallow clone\n\nconst merged = { ...original, c: 3, b: 3 };\n// { a: 1, b: 3, c: 3 } - later properties override\n\`\`\`\n\nNote: Spread is shallow. Nested objects are still references. Use structuredClone() for deep cloning.`,
    },
  ],
  exercises: [
    { id: "js15-ex1", title: "Extract properties", difficulty: 1, description: "Use destructuring to extract name and age.", requirements: ["Destructure object", "Return extracted values"], starterCode: { javascript: "function getPersonInfo(person) {\n  // Destructure here\n  return { name, age };\n}" }, hints: ["Use const { name, age } = person"], solution: { javascript: "function getPersonInfo(person) {\n  const { name, age } = person;\n  return { name, age };\n}" }, solutionExplanation: "Destructuring extracts properties into variables." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js15-q1", type: "mcq", question: "What does Object.keys() return?", options: ["Values", "Keys", "Entries", "Object"], correctAnswer: 1, explanation: "Object.keys() returns an array of the object's property names.", difficulty: 1 }] },
  cheatSheet: [{ label: "Keys", value: "Object.keys(obj)" }, { label: "Destructure", value: "const { prop } = obj" }, { label: "Spread", value: "{ ...obj }" }],
};

export const jsCh16: Chapter = {
  id: "js-ch-16",
  number: 16,
  title: "Date",
  subtitle: "Working with dates and times.",
  difficulty: "Intermediate",
  estimatedMinutes: 45,
  xpReward: 140,
  prerequisites: ["js-ch-11"],
  partLabel: "Part 3: Data Structures",
  learningObjectives: [
    "Create and manipulate dates.",
    "Format dates for display.",
    "Calculate date differences.",
    "Handle time zones.",
    "Use modern date libraries.",
  ],
  sections: [
    {
      id: "js16-s1",
      title: "Creating Dates",
      whyItMatters: "Working with dates is essential for scheduling, logging, and time-based features.",
      content: `Create dates:\n\n\`\`\`javascript\n// Current date\nconst now = new Date();\n\n// Specific date\nconst birthday = new Date('1990-05-15');\nconst another = new Date(1990, 4, 15); // Month is 0-indexed!\n\n// Timestamp\nconst fromTimestamp = new Date(1620000000000);\n\`\`\`\n\nGet date parts:\n\n\`\`\`javascript\nconst date = new Date();\ndate.getFullYear();  // 2024\ndate.getMonth();    // 0-11\n\ndate.getDate();     // 1-31\ndate.getDay();      // 0-6 (Sunday is 0)\ndate.getHours();    // 0-23\n\`\`\``,
    },
    {
      id: "js16-s2",
      title: "Formatting Dates",
      whyItMatters: "Users need readable date formats, not raw Date objects.",
      content: `Format dates:\n\n\`\`\`javascript\nconst date = new Date();\n\n// toLocaleString\nconsole.log(date.toLocaleDateString()); // \"5/15/1990\"\nconsole.log(date.toLocaleString('en-US', {\n  weekday: 'long',\n  year: 'numeric',\n  month: 'long',\n  day: 'numeric'\n}));\n// \"Tuesday, May 15, 1990\"\n\n// ISO format\nconsole.log(date.toISOString()); // \"1990-05-15T00:00:00.000Z\"\n\`\`\`\n\nFor complex formatting, use libraries like date-fns or luxon instead of manual formatting.`,
    },
    {
      id: "js16-s3",
      title: "Date Math",
      whyItMatters: "Calculating date differences and adding time is common in applications.",
      content: `Date calculations:\n\n\`\`\`javascript\nconst now = new Date();\nconst future = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);\n// 7 days in the future\n\n// Difference in days\nconst diff = future - now; // milliseconds\nconst days = diff / (1000 * 60 * 60 * 24);\n\n// Add time\nnow.setDate(now.getDate() + 1); // Tomorrow\nnow.setMonth(now.getMonth() + 1); // Next month\n\`\`\`\n\nWarning: setDate() can overflow into next month. Use setDate(0) for last day of previous month.`,
    },
  ],
  exercises: [
    { id: "js16-ex1", title: "Format date", difficulty: 1, description: "Format a date as 'YYYY-MM-DD'.", requirements: ["Get year, month, day", "Format as string"], starterCode: { javascript: "function formatDate(date) {\n  // Return 'YYYY-MM-DD'\n}" }, hints: ["Use getFullYear, getMonth, getDate", "Pad with leading zeros"], solution: { javascript: "function formatDate(date) {\n  const year = date.getFullYear();\n  const month = String(date.getMonth() + 1).padStart(2, '0');\n  const day = String(date.getDate()).padStart(2, '0');\n  return `\${year}-\${month}-\${day}`;\n}" }, solutionExplanation: "Pad single digits with leading zeros for consistent formatting." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js16-q1", type: "mcq", question: "What does getMonth() return?", options: ["1-12", "0-11", "Month name", "Timestamp"], correctAnswer: 1, explanation: "getMonth() returns 0-11, where 0 is January.", difficulty: 2 }] },
  cheatSheet: [{ label: "Current date", value: "new Date()" }, { label: "Format", value: "toLocaleDateString()" }, { label: "Add days", value: "setDate(getDate() + n)" }],
};

export const jsCh17: Chapter = {
  id: "js-ch-17",
  number: 17,
  title: "Regular Expressions",
  subtitle: "Pattern matching for strings.",
  difficulty: "Advanced",
  estimatedMinutes: 60,
  xpReward: 180,
  prerequisites: ["js-ch-11"],
  partLabel: "Part 3: Data Structures",
  learningObjectives: [
    "Create regex patterns.",
    "Use regex methods.",
    "Match, replace, and split with regex.",
    "Capture groups.",
    "Validate input with regex.",
  ],
  sections: [
    {
      id: "js17-s1",
      title: "Regex Basics",
      whyItMatters: "Regular expressions are powerful for pattern matching, validation, and text processing.",
      realWorldAnalogy: "Regex is like a super-powered find-and-replace that understands patterns, not just exact text.",
      content: `Create regex:\n\n\`\`\`javascript\nconst pattern = /hello/;\nconst withFlags = /hello/gi; // g = global, i = case-insensitive\nconst fromString = new RegExp('hello', 'gi');\n\`\`\`\n\nTest if pattern matches:\n\n\`\`\`javascript\nconst text = 'Hello World';\nconst pattern = /hello/i;\n\npattern.test(text); // true\n\`\`\`\n\nFind matches:\n\n\`\`\`javascript\ntext.match(/hello/i); // ['Hello']\ntext.match(/l/g); // ['l', 'l']\n\`\`\``,
    },
    {
      id: "js17-s2",
      title: "Common Patterns",
      whyItMatters: "Knowing common patterns saves time and prevents errors.",
      content: `Useful patterns:\n\n\`\`\`javascript\n// Email (basic)\nconst emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n\n// Phone number (US)\nconst phonePattern = /^\\d{3}-\\d{3}-\\d{4}$/;\n\n// Only numbers\nconst numberPattern = /^\\d+$/;\n\n// Password (at least 8 chars, 1 uppercase, 1 number)\nconst passwordPattern = /^(?=.*[A-Z])(?=.*\\d).{8,}$/;\n\n// Whitespace\nconst whitespacePattern = /\\s+/;\n\`\`\`\n\nReplace with regex:\n\n\`\`\`javascript\nconst text = 'Hello World';\ntext.replace(/World/, 'Universe'); // 'Hello Universe'\ntext.replace(/l/g, 'L'); // 'HeLLo WorLd'\n\`\`\``,
    },
    {
      id: "js17-s3",
      title: "Capture Groups",
      whyItMatters: "Capture groups let you extract specific parts of a match.",
      content: `Extract parts with groups:\n\n\`\`\`javascript\nconst text = 'John: 30, Jane: 25';\nconst pattern = /(\\w+): (\\d+)/g;\n\nlet match;\nwhile ((match = pattern.exec(text)) !== null) {\n  console.log(match[1]); // Name\n  console.log(match[2]); // Age\n}\n// John, 30, Jane, 25\n\`\`\`\n\nReplace with groups:\n\n\`\`\`javascript\nconst date = '2024-05-15';\nconst reformatted = date.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$3/$2/$1');\n// '15/05/2024'\n\`\`\``,
    },
  ],
  exercises: [
    { id: "js17-ex1", title: "Validate email", difficulty: 2, description: "Create a function to validate email format.", requirements: ["Use regex", "Return boolean", "Handle basic validation"], starterCode: { javascript: "function isValidEmail(email) {\n  // Return true if valid email format\n}" }, hints: ["Use /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/", "Use test() method"], solution: { javascript: "function isValidEmail(email) {\n  const pattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  return pattern.test(email);\n}" }, solutionExplanation: "The regex checks for basic email format: text@text.text" },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js17-q1", type: "mcq", question: "What does the g flag do?", options: ["Case-insensitive", "Global search", "Multiline", "Greedy"], correctAnswer: 1, explanation: "The g flag finds all matches, not just the first one.", difficulty: 2 }] },
  cheatSheet: [{ label: "Test", value: "pattern.test(string)" }, { label: "Match", value: "string.match(pattern)" }, { label: "Replace", value: "string.replace(pattern, replacement)" }],
};

export const jsCh18: Chapter = {
  id: "js-ch-18",
  number: 18,
  title: "JSON",
  subtitle: "JavaScript Object Notation for data exchange.",
  difficulty: "Intermediate",
  estimatedMinutes: 45,
  xpReward: 140,
  prerequisites: ["js-ch-15"],
  partLabel: "Part 3: Data Structures",
  learningObjectives: [
    "Parse JSON strings.",
    "Stringify objects to JSON.",
    "Handle JSON errors.",
    "Work with APIs using JSON.",
    "Understand JSON limitations.",
  ],
  sections: [
    {
      id: "js18-s1",
      title: "JSON Basics",
      whyItMatters: "JSON is the standard format for data exchange between servers and browsers.",
      realWorldAnalogy: "JSON is like a shipping container - a standard format that everyone understands for transporting data.",
      content: "JSON is a string format that looks like JavaScript objects:\n\n\`\`\`json\n{\n  \"name\": \"Alice\",\n  \"age\": 30,\n  \"isActive\": true,\n  \"hobbies\": [\"reading\", \"coding\"]\n}\n\`\`\`\n\nKey differences from JavaScript:\n- Keys must be in double quotes\n- No trailing commas\n- No comments\n- Only specific data types (string, number, boolean, array, object, null)",
    },
    {
      id: "js18-s2",
      title: "Parse and Stringify",
      whyItMatters: "Converting between JSON strings and JavaScript objects is essential for API communication.",
      content: `Parse JSON to object:\n\n\`\`\`javascript\nconst jsonString = '{\"name\":\"Alice\",\"age\":30}';\nconst obj = JSON.parse(jsonString);\nconsole.log(obj.name); // 'Alice'\n\`\`\`\n\nStringify object to JSON:\n\n\`\`\`javascript\nconst person = { name: 'Alice', age: 30 };\nconst jsonString = JSON.stringify(person);\n// '{\"name\":\"Alice\",\"age\":30}'\n\n// Pretty print\nconst pretty = JSON.stringify(person, null, 2);\n/*\n{\n  \"name\": \"Alice\",\n  \"age\": 30\n}\n*/\n\`\`\``,
    },
    {
      id: "js18-s3",
      title: "Error Handling",
      whyItMatters: "Invalid JSON will crash your code if not handled properly.",
      content: `Always handle JSON parse errors:\n\n\`\`\`javascript\nfunction safeParse(jsonString) {\n  try {\n    return JSON.parse(jsonString);\n  } catch (error) {\n    console.error('Invalid JSON:', error.message);\n    return null;\n  }\n}\n\nsafeParse('{invalid}'); // null, logs error\n\`\`\`\n\nCommon issues:\n- Trailing commas\n- Unquoted keys\n- Single quotes instead of double quotes\n- Comments (not allowed in standard JSON)`,
    },
  ],
  exercises: [
    { id: "js18-ex1", title: "Parse JSON safely", difficulty: 2, description: "Create a function that safely parses JSON.", requirements: ["Use try-catch", "Return object or null", "Handle errors"], starterCode: { javascript: "function safeParse(jsonString) {\n  // Parse safely with error handling\n}" }, hints: ["Wrap JSON.parse in try", "Catch and return null on error"], solution: { javascript: "function safeParse(jsonString) {\n  try {\n    return JSON.parse(jsonString);\n  } catch (error) {\n    console.error('Parse error:', error.message);\n    return null;\n  }\n}" }, solutionExplanation: "try-catch prevents crashes from invalid JSON." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js18-q1", type: "mcq", question: "Which converts object to JSON string?", options: ["JSON.parse()", "JSON.stringify()", "JSON.to()", "JSON.string()"], correctAnswer: 1, explanation: "JSON.stringify() converts JavaScript objects to JSON strings.", difficulty: 1 }] },
  cheatSheet: [{ label: "Parse", value: "JSON.parse(string)" }, { label: "Stringify", value: "JSON.stringify(obj)" }, { label: "Pretty", value: "JSON.stringify(obj, null, 2)" }],
};

export const jsCh19: Chapter = {
  id: "js-ch-19",
  number: 19,
  title: "Map and Set",
  subtitle: "Modern data structures for specific use cases.",
  difficulty: "Intermediate",
  estimatedMinutes: 50,
  xpReward: 150,
  prerequisites: ["js-ch-12"],
  partLabel: "Part 3: Data Structures",
  learningObjectives: [
    "Use Map for key-value storage.",
    "Use Set for unique values.",
    "Understand Map vs Object.",
    "Use WeakMap and WeakSet.",
    "Convert between data structures.",
  ],
  sections: [
    {
      id: "js19-s1",
      title: "Map",
      whyItMatters: "Map is like Object but with better features: any key type, ordered iteration, and built-in methods.",
      content: `Create and use Map:\n\n\`\`\`javascript\nconst map = new Map();\n\n// Set values\nmap.set('name', 'Alice');\nmap.set(1, 'number key');\nmap.set({ id: 1 }, 'object key');\n\n// Get values\nmap.get('name'); // 'Alice'\nmap.get('unknown'); // undefined\n\n// Check existence\nmap.has('name'); // true\n\n// Delete\nmap.delete('name');\n\n// Size\nmap.size;\n\`\`\`\n\nIterate Map:\n\n\`\`\`javascript\nfor (const [key, value] of map) {\n  console.log(key, value);\n}\n\`\`\``,
    },
    {
      id: "js19-s2",
      title: "Set",
      whyItMatters: "Set automatically removes duplicates, perfect for unique value collections.",
      content: `Create and use Set:\n\n\`\`\`javascript\nconst set = new Set([1, 2, 2, 3, 3, 3]);\nconsole.log(set); // Set {1, 2, 3}\n\n// Add\nset.add(4);\n\n// Check existence\nset.has(2); // true\n\n// Delete\nset.delete(2);\n\n// Convert to array\nconst uniqueArray = [...set]; // [1, 3, 4]\n\n// Remove duplicates from array\nconst arr = [1, 2, 2, 3];\nconst unique = [...new Set(arr)]; // [1, 2, 3]\n\`\`\``,
    },
    {
      id: "js19-s3",
      title: "Map vs Object",
      whyItMatters: "Choosing the right data structure improves code clarity and performance.",
      content: `Use Map when:\n- Keys can be any type (not just strings/symbols)\n- You need frequent additions/deletions\n- You care about insertion order\n- You need to know the size\n\nUse Object when:\n- Keys are strings/symbols\n- You need JSON serialization\n- You're working with existing APIs\n\nPerformance:\n- Map is faster for frequent additions/deletions\n- Object is faster for simple access\n\nExample:\n\n\`\`\`javascript\n// Object\nconst obj = {};\nobj[1] = 'one'; // key becomes '1'\n\n// Map\nconst map = new Map();\nmap.set(1, 'one'); // key stays 1 (number)\n\`\`\``,
    },
  ],
  exercises: [
    { id: "js19-ex1", title: "Remove duplicates", difficulty: 1, description: "Use Set to remove duplicates from an array.", requirements: ["Use Set", "Return array of unique values"], starterCode: { javascript: "function unique(arr) {\n  // Return array with duplicates removed\n}" }, hints: ["new Set(arr)", "Spread to array"], solution: { javascript: "function unique(arr) {\n  return [...new Set(arr)];\n}" }, solutionExplanation: "Set automatically removes duplicates, spread converts back to array." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js19-q1", type: "mcq", question: "What does Set automatically do?", options: ["Sort values", "Remove duplicates", "Convert to string", "Cache values"], correctAnswer: 1, explanation: "Set only stores unique values, automatically removing duplicates.", difficulty: 1 }] },
  cheatSheet: [{ label: "Create Map", value: "new Map()" }, { label: "Create Set", value: "new Set()" }, { label: "Unique array", value: "[...new Set(arr)]" }],
};

export const jsCh20: Chapter = {
  id: "js-ch-20",
  number: 20,
  title: "Iterators and Generators",
  subtitle: "Advanced iteration patterns.",
  difficulty: "Advanced",
  estimatedMinutes: 60,
  xpReward: 180,
  prerequisites: ["js-ch-12"],
  partLabel: "Part 3: Data Structures",
  learningObjectives: [
    "Understand iteration protocols.",
    "Create custom iterators.",
    "Use generators for lazy evaluation.",
    "Yield values from generators.",
    "Use generators for async flows.",
  ],
  sections: [
    {
      id: "js20-s1",
      title: "Iteration Protocol",
      whyItMatters: "Understanding how iteration works lets you create custom iterable objects.",
      content: "Iterable protocol: Object with [Symbol.iterator] method\n\nIterator protocol: Object with next() method returning {value, done}\n\n\`\`\`javascript\n// Custom iterable\nconst myIterable = {\n  data: [1, 2, 3],\n  [Symbol.iterator]() {\n    let index = 0;\n    return {\n      next: () => {\n        if (index < this.data.length) {\n          return { value: this.data[index++], done: false };\n        }\n        return { value: undefined, done: true };\n      }\n    };\n  }\n};\n\nfor (const num of myIterable) {\n  console.log(num); // 1, 2, 3\n}\n\`\`\`",
    },
    {
      id: "js20-s2",
      title: "Generators",
      whyItMatters: "Generators provide a cleaner way to create iterators and enable lazy evaluation.",
      content: `Create generators with function*:\n\n\`\`\`javascript\nfunction* countToThree() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\n\nconst gen = countToThree();\ngen.next(); // { value: 1, done: false }\ngen.next(); // { value: 2, done: false }\ngen.next(); // { value: 3, done: false }\ngen.next(); // { value: undefined, done: true }\n\`\`\`\n\nGenerators with loops:\n\n\`\`\`javascript\nfunction* fibonacci() {\n  let [a, b] = [0, 1];\n  while (true) {\n    yield a;\n    [a, b] = [b, a + b];\n  }\n}\n\nconst fib = fibonacci();\nfib.next().value; // 0\nfib.next().value; // 1\nfib.next().value; // 1\nfib.next().value; // 2\n\`\`\``,
    },
    {
      id: "js20-s3",
      title: "Generator Use Cases",
      whyItMatters: "Generators excel at sequences, infinite streams, and async flows.",
      content: `Infinite sequence:\n\n\`\`\`javascript\nfunction* naturalNumbers() {\n  let i = 1;\n  while (true) {\n    yield i++;\n  }\n}\n\n// Take first 5\nconst nums = naturalNumbers();\nfor (let i = 0; i < 5; i++) {\n  console.log(nums.next().value); // 1, 2, 3, 4, 5\n}\n\`\`\`\n\nDelegation:\n\n\`\`\`javascript\nfunction* inner() {\n  yield 'a';\n  yield 'b';\n}\n\nfunction* outer() {\n  yield 'start';\n  yield* inner(); // delegate to inner\n  yield 'end';\n}\n\n[...outer()]; // ['start', 'a', 'b', 'end']\n\`\`\``,
    },
  ],
  exercises: [
    { id: "js20-ex1", title: "Create range generator", difficulty: 3, description: "Create a generator that yields numbers from start to end.", requirements: ["Use function*", "Yield numbers", "Handle start/end"], starterCode: { javascript: "function* range(start, end) {\n  // Yield numbers from start to end\n}" }, hints: ["Use for loop", "Yield each number"], solution: { javascript: "function* range(start, end) {\n  for (let i = start; i <= end; i++) {\n    yield i;\n  }\n}" }, solutionExplanation: "Generators with loops easily create number sequences." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js20-q1", type: "mcq", question: "What keyword yields values in generators?", options: ["return", "yield", "output", "emit"], correctAnswer: 1, explanation: "yield returns a value and pauses execution, maintaining state.", difficulty: 2 }] },
  cheatSheet: [{ label: "Generator", value: "function* name() { yield value }" }, { label: "Next", value: "gen.next()" }, { label: "Delegate", value: "yield* otherGenerator()" }],
};
