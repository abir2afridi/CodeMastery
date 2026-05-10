import type { Chapter } from "./types";

export const jsCh56: Chapter = {
  id: "js-ch-56",
  number: 56,
  title: "ES Modules",
  subtitle: "import/export and dynamic imports.",
  difficulty: "Intermediate",
  estimatedMinutes: 50,
  xpReward: 160,
  prerequisites: ["js-ch-08"],
  partLabel: "Part 6: Modern JS, Ecosystem, Projects",
  learningObjectives: [
    "Use import and export.",
    "Understand module scope.",
    "Use named and default exports.",
    "Use dynamic imports.",
    "Understand module loading.",
  ],
  sections: [
    {
      id: "js56-s1",
      title: "Exporting",
      whyItMatters: "Modules let you organize code into reusable pieces.",
      content: "Named export:\n\n```javascript\n// utils.js\nexport const add = (a, b) => a + b;\nexport const subtract = (a, b) => a - b;\n```\n\nDefault export:\n\n```javascript\n// math.js\nexport default function add(a, b) {\n  return a + b;\n}\n```\n\nExport after declaration:\n\n```javascript\nconst PI = 3.14;\nexport { PI };\n```",
    },
    {
      id: "js56-s2",
      title: "Importing",
      whyItMatters: "Importing lets you use code from other modules.",
      content: "Named import:\n\n```javascript\nimport { add, subtract } from './utils.js';\n```\n\nDefault import:\n\n```javascript\nimport add from './math.js';\n```\n\nImport all:\n\n```javascript\nimport * as utils from './utils.js';\nutils.add(1, 2);\n```\n\nRename import:\n\n```javascript\nimport { add as addNumbers } from './utils.js';\n```",
    },
    {
      id: "js56-s3",
      title: "Dynamic Imports",
      whyItMatters: "Dynamic imports load modules on demand, improving performance.",
      content: "Dynamic import returns Promise:\n\n```javascript\nconst module = await import('./utils.js');\nmodule.add(1, 2);\n```\n\nCode splitting:\n\n```javascript\nbutton.addEventListener('click', async () => {\n  const { heavyFunction } = await import('./heavy.js');\n  heavyFunction();\n});\n```\n\nLoad only when needed.",
    },
  ],
  exercises: [
    { id: "js56-ex1", title: "Create module", difficulty: 2, description: "Create a module with named and default exports.", requirements: ["Named export", "Default export", "Import both"], starterCode: { javascript: "// Create exports\nexport const PI = 3.14;\nexport default function circleArea(radius) {\n  return PI * radius * radius;\n}" }, hints: ["export const", "export default"], solution: { javascript: "export const PI = 3.14;\nexport default function circleArea(radius) {\n  return PI * radius * radius;\n}" }, solutionExplanation: "Named exports with export const, default export for main function." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js56-q1", type: "mcq", question: "How to import default?", options: ["import { fn }", "import fn", "import default fn", "import *"], correctAnswer: 1, explanation: "Default import does not use braces.", difficulty: 1 }] },
  cheatSheet: [{ label: "Named export", value: "export const" }, { label: "Default export", value: "export default" }, { label: "Dynamic", value: "await import()" }],
};

export const jsCh57: Chapter = {
  id: "js-ch-57",
  number: 57,
  title: "Functional Programming",
  subtitle: "Pure functions, immutability.",
  difficulty: "Advanced",
  estimatedMinutes: 60,
  xpReward: 180,
  prerequisites: ["js-ch-14"],
  partLabel: "Part 6: Modern JS, Ecosystem, Projects",
  learningObjectives: [
    "Understand pure functions.",
    "Use immutable patterns.",
    "Use map, filter, reduce.",
    "Understand function composition.",
    "Avoid side effects.",
  ],
  sections: [
    {
      id: "js57-s1",
      title: "Pure Functions",
      whyItMatters: "Pure functions are predictable and easier to test.",
      content: "Pure function: same input = same output, no side effects\n\n```javascript\n// Pure\nconst add = (a, b) => a + b;\n\n// Impure\nlet counter = 0;\nconst increment = () => counter++;\n```\n\nBenefits:\n- Predictable\n- Testable\n- Cacheable",
    },
    {
      id: "js57-s2",
      title: "Immutability",
      whyItMatters: "Immutability prevents bugs from unexpected mutations.",
      content: "Avoid mutations:\n\n```javascript\n// Mutable (bad)\nconst items = [1, 2, 3];\nitems.push(4);\n\n// Immutable (good)\nconst newItems = [...items, 4];\n```\n\nObject spread:\n\n```javascript\nconst user = { name: 'Alice' };\nconst updatedUser = { ...user, age: 30 };\n```\n\nArray methods: map, filter, reduce return new arrays.",
    },
    {
      id: "js57-s3",
      title: "Function Composition",
      whyItMatters: "Composition combines small functions into complex operations.",
      content: "Compose functions:\n\n```javascript\nconst compose = (f, g) => (x) => f(g(x));\n\nconst add = (x) => x + 1;\nconst double = (x) => x * 2;\n\nconst addThenDouble = compose(double, add);\naddThenDouble(5); // 12\n```\n\nPipe (left to right):\n\n```javascript\nconst pipe = (f, g) => (x) => g(f(x));\n```",
    },
  ],
  exercises: [
    { id: "js57-ex1", title: "Pure function", difficulty: 2, description: "Write a pure function.", requirements: ["No side effects", "Same input = same output", "Return new value"], starterCode: { javascript: "// Write a pure function that squares a number\nconst square = (num) => {\n  // Your code\n};" }, hints: ["Do not modify external state", "Return calculated value"], solution: { javascript: "const square = (num) => num * num;" }, solutionExplanation: "Pure function: takes input, returns output, no side effects." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js57-q1", type: "mcq", question: "What makes a function pure?", options: ["Uses this", "Has side effects", "Same input = same output", "Async"], correctAnswer: 2, explanation: "Pure functions always return same output for same input with no side effects.", difficulty: 2 }] },
  cheatSheet: [{ label: "Pure", value: "No side effects" }, { label: "Immutable", value: "Spread operator" }, { label: "Compose", value: "f(g(x))" }],
};

export const jsCh58: Chapter = {
  id: "js-ch-58",
  number: 58,
  title: "Design Patterns",
  subtitle: "Singleton, observer, factory, strategy.",
  difficulty: "Advanced",
  estimatedMinutes: 75,
  xpReward: 200,
  prerequisites: ["js-ch-25"],
  partLabel: "Part 6: Modern JS, Ecosystem, Projects",
  learningObjectives: [
    "Understand common patterns.",
    "Implement singleton pattern.",
    "Implement observer pattern.",
    "Implement factory pattern.",
    "Implement strategy pattern.",
  ],
  sections: [
    {
      id: "js58-s1",
      title: "Singleton",
      whyItMatters: "Singleton ensures only one instance exists.",
      content: "Singleton pattern:\n\n```javascript\nclass Database {\n  static instance = null;\n  \n  static getInstance() {\n    if (!this.instance) {\n      this.instance = new Database();\n    }\n    return this.instance;\n  }\n}\n\nconst db1 = Database.getInstance();\nconst db2 = Database.getInstance();\nconsole.log(db1 === db2); // true\n```",
    },
    {
      id: "js58-s2",
      title: "Observer",
      whyItMatters: "Observer pattern enables pub/sub communication.",
      content: "Observer pattern:\n\n```javascript\nclass Subject {\n  constructor() {\n    this.observers = [];\n  }\n  \n  subscribe(observer) {\n    this.observers.push(observer);\n  }\n  \n  notify(data) {\n    this.observers.forEach(obs => obs.update(data));\n  }\n}\n```",
    },
    {
      id: "js58-s3",
      title: "Factory and Strategy",
      whyItMatters: "Factory creates objects, Strategy changes behavior.",
      content: "Factory:\n\n```javascript\nclass CarFactory {\n  create(type) {\n    switch(type) {\n      case 'sedan': return new Sedan();\n      case 'suv': return new SUV();\n    }\n  }\n}\n```\n\nStrategy:\n\n```javascript\nclass PaymentStrategy {\n  pay(amount) { }\n}\nclass CreditCard extends PaymentStrategy {\n  pay(amount) { console.log('Charged', amount); }\n}\n```",
    },
  ],
  exercises: [
    { id: "js58-ex1", title: "Implement singleton", difficulty: 3, description: "Create a singleton class.", requirements: ["Static instance", "getInstance method", "Return same instance"], starterCode: { javascript: "class Logger {\n  static instance = null;\n  \n  static getInstance() {\n    // Return singleton instance\n  }\n  \n  log(message) {\n    console.log(message);\n  }\n}" }, hints: ["Check if instance exists", "Create if null"], solution: { javascript: "class Logger {\n  static instance = null;\n  \n  static getInstance() {\n    if (!Logger.instance) {\n      Logger.instance = new Logger();\n    }\n    return Logger.instance;\n  }\n  \n  log(message) {\n    console.log(message);\n  }\n}" }, solutionExplanation: "Singleton ensures only one Logger instance exists." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js58-q1", type: "mcq", question: "What does singleton ensure?", options: ["Multiple instances", "One instance", "No instances", "Lazy loading"], correctAnswer: 1, explanation: "Singleton pattern ensures only one instance of a class exists.", difficulty: 1 }] },
  cheatSheet: [{ label: "Singleton", value: "static getInstance()" }, { label: "Observer", value: "subscribe/notify" }, { label: "Factory", value: "create(type)" }],
};

export const jsCh59: Chapter = {
  id: "js-ch-59",
  number: 59,
  title: "TypeScript Intro",
  subtitle: "Why types matter.",
  difficulty: "Intermediate",
  estimatedMinutes: 60,
  xpReward: 170,
  prerequisites: ["js-ch-02"],
  partLabel: "Part 6: Modern JS, Ecosystem, Projects",
  learningObjectives: [
    "Understand type safety.",
    "Use basic types.",
    "Use interfaces.",
    "Understand type inference.",
    "Know when to use TypeScript.",
  ],
  sections: [
    {
      id: "js59-s1",
      title: "Type Safety",
      whyItMatters: "TypeScript catches errors at compile time.",
      content: "Basic types:\n\n```typescript\nlet name: string = 'Alice';\nlet age: number = 30;\nlet isAdmin: boolean = true;\nlet items: string[] = ['a', 'b'];\n```\n\nType annotations catch errors:\n\n```typescript\nlet count: number = 'hello'; // Error!\n```\n\nType inference:\n\n```typescript\nlet name = 'Alice'; // inferred as string\nname = 123; // Error!\n```",
    },
    {
      id: "js59-s2",
      title: "Interfaces",
      whyItMatters: "Interfaces define the shape of objects.",
      content: "Define interface:\n\n```typescript\ninterface User {\n  id: number;\n  name: string;\n  email?: string; // optional\n}\n\nconst user: User = {\n  id: 1,\n  name: 'Alice'\n};\n```\n\nFunction types:\n\n```typescript\ninterface Calculator {\n  add(a: number, b: number): number;\n}\n```",
    },
    {
      id: "js59-s3",
      title: "Benefits",
      whyItMatters: "TypeScript provides many benefits over plain JavaScript.",
      content: "Benefits:\n- Catch errors at compile time\n- Better IDE autocomplete\n- Self-documenting code\n- Refactor with confidence\n- Large codebase maintainability\n\nTrade-offs:\n- Learning curve\n- Build step required\n- More verbose",
    },
  ],
  exercises: [
    { id: "js59-ex1", title: "Define interface", difficulty: 1, description: "Define a TypeScript interface.", requirements: ["Define interface", "Add properties", "Type annotation"], starterCode: { javascript: "// Define Product interface\ninterface Product {\n  id: number;\n  name: string;\n  price: number;\n}\n\nconst product = {} as Product;" }, hints: ["Add type annotations", "Use interface"], solution: { javascript: "interface Product {\n  id: number;\n  name: string;\n  price: number;\n}\n\nconst product: Product = {\n  id: 1,\n  name: 'Widget',\n  price: 9.99\n};" }, solutionExplanation: "Interface defines shape, type annotation ensures correctness." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js59-q1", type: "mcq", question: "What does TypeScript do?", options: ["Runs in browser", "Compiles to JS", "Replaces JS", "Adds runtime"], correctAnswer: 1, explanation: "TypeScript compiles to JavaScript and adds type checking.", difficulty: 1 }] },
  cheatSheet: [{ label: "Types", value: "let x: string" }, { label: "Interface", value: "interface Name { }" }, { label: "Optional", value: "prop?: type" }],
};

export const jsCh60: Chapter = {
  id: "js-ch-60",
  number: 60,
  title: "Build Tools",
  subtitle: "npm, Vite, Webpack basics.",
  difficulty: "Intermediate",
  estimatedMinutes: 60,
  xpReward: 170,
  prerequisites: ["js-ch-56"],
  partLabel: "Part 6: Modern JS, Ecosystem, Projects",
  learningObjectives: [
    "Understand npm.",
    "Use package.json.",
    "Use Vite for development.",
    "Understand bundling.",
    "Build for production.",
  ],
  sections: [
    {
      id: "js60-s1",
      title: "npm and package.json",
      whyItMatters: "npm is the package manager for JavaScript.",
      content: "Initialize project:\n\n```bash\nnpm init -y\n```\n\nInstall dependencies:\n\n```bash\nnpm install lodash\nnpm install --save-dev typescript\n```\n\npackage.json:\n\n```json\n{\n  \"name\": \"my-project\",\n  \"version\": \"1.0.0\",\n  \"scripts\": {\n    \"build\": \"vite build\"\n  }\n}\n```",
    },
    {
      id: "js60-s2",
      title: "Vite",
      whyItMatters: "Vite is a fast modern build tool.",
      content: "Create Vite project:\n\n```bash\nnpm create vite@latest my-app\n```\n\nDev server:\n\n```bash\nnpm run dev\n```\n\nBuild:\n\n```bash\nnpm run build\n```\n\nVite uses ES modules for fast HMR.",
    },
    {
      id: "js60-s3",
      title: "Bundling",
      whyItMatters: "Bundlers combine modules for browser compatibility.",
      content: "Why bundle:\n- Reduce HTTP requests\n- Transpile modern JS\n- Optimize assets\n- Source maps for debugging\n\nModern bundlers:\n- Vite (Rollup)\n- Webpack\n- esbuild\n- Parcel",
    },
  ],
  exercises: [
    { id: "js60-ex1", title: "Package script", difficulty: 1, description: "Add a script to package.json.", requirements: ["Add script", "Run script"], starterCode: { javascript: "// Add a 'test' script that runs 'echo Testing' to package.json" }, hints: ["Add to scripts object"], solution: { javascript: "// package.json\n{\n  \"scripts\": {\n    \"test\": \"echo \\\"Testing\\\"\"\n  }\n}\n// Run with: npm test" }, solutionExplanation: "Scripts in package.json can be run with npm run." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js60-q1", type: "mcq", question: "What is npm?", options: ["New JS version", "Package manager", "Build tool", "Framework"], correctAnswer: 1, explanation: "npm is Node Package Manager for JavaScript dependencies.", difficulty: 1 }] },
  cheatSheet: [{ label: "Init", value: "npm init" }, { label: "Install", value: "npm install" }, { label: "Vite", value: "npm create vite" }],
};

export const jsCh61: Chapter = {
  id: "js-ch-61",
  number: 61,
  title: "Testing",
  subtitle: "Vitest, unit tests, async tests.",
  difficulty: "Intermediate",
  estimatedMinutes: 60,
  xpReward: 170,
  prerequisites: ["js-ch-57"],
  partLabel: "Part 6: Modern JS, Ecosystem, Projects",
  learningObjectives: [
    "Write unit tests.",
    "Test async code.",
    "Use test runners.",
    "Mock dependencies.",
    "Understand test coverage.",
  ],
  sections: [
    {
      id: "js61-s1",
      title: "Unit Testing",
      whyItMatters: "Tests ensure code works correctly.",
      content: "Basic test:\n\n```javascript\nimport { test, expect } from 'vitest';\n\nfunction add(a, b) {\n  return a + b;\n}\n\ntest('adds numbers', () => {\n  expect(add(2, 3)).toBe(5);\n});\n```\n\nMatchers:\n\n```javascript\nexpect(value).toBe(expected);\nexpect(value).toEqual(expected);\nexpect(value).toContain(substring);\nexpect(array).toHaveLength(length);\n```",
    },
    {
      id: "js61-s2",
      title: "Async Tests",
      whyItMatters: "Testing async code requires special handling.",
      content: "Test async functions:\n\n```javascript\ntest('async test', async () => {\n  const data = await fetchData();\n  expect(data).toBeDefined();\n});\n```\n\nTest promises:\n\n```javascript\ntest('promise test', () => {\n  return fetchData().then(data => {\n    expect(data).toBeDefined();\n  });\n});\n```",
    },
    {
      id: "js61-s3",
      title: "Test Organization",
      whyItMatters: "Well-organized tests are maintainable.",
      content: "Group tests:\n\n```javascript\ndescribe('Calculator', () => {\n  test('adds', () => { });\n  test('subtracts', () => { });\n});\n```\n\nSetup/teardown:\n\n```javascript\nbeforeEach(() => {\n  // Setup before each test\n});\n\nafterEach(() => {\n  // Cleanup after each test\n});\n```",
    },
  ],
  exercises: [
    { id: "js61-ex1", title: "Write test", difficulty: 2, description: "Write a simple unit test.", requirements: ["Import test", "Expect result", "Test function"], starterCode: { javascript: "import { test, expect } from 'vitest';\n\nfunction multiply(a, b) {\n  return a * b;\n}\n\n// Write a test for multiply" }, hints: ["test('description', () => {})", "expect().toBe()"], solution: { javascript: "import { test, expect } from 'vitest';\n\nfunction multiply(a, b) {\n  return a * b;\n}\n\ntest('multiplies numbers', () => {\n  expect(multiply(3, 4)).toBe(12);\n});" }, solutionExplanation: "Test function uses expect with matcher to verify result." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js61-q1", type: "mcq", question: "How to test async?", options: ["Just call it", "Use async/await", "Use setTimeout", "No special handling"], correctAnswer: 1, explanation: "Use async/await or return the promise in async tests.", difficulty: 2 }] },
  cheatSheet: [{ label: "Test", value: "test('name', () => {})" }, { label: "Expect", value: "expect().toBe()" }, { label: "Async", value: "async test" }],
};

export const jsCh62: Chapter = {
  id: "js-ch-62",
  number: 62,
  title: "Security",
  subtitle: "XSS, CSRF, CSP.",
  difficulty: "Advanced",
  estimatedMinutes: 60,
  xpReward: 180,
  prerequisites: ["js-ch-43"],
  partLabel: "Part 6: Modern JS, Ecosystem, Projects",
  learningObjectives: [
    "Understand XSS vulnerabilities.",
    "Prevent XSS attacks.",
    "Understand CSRF.",
    "Use CSP headers.",
    "Secure user input.",
  ],
  sections: [
    {
      id: "js62-s1",
      title: "XSS Prevention",
      whyItMatters: "XSS attacks can steal user data.",
      content: "Cross-Site Scripting (XSS):\n\n```javascript\n// Dangerous\ninnerHTML = userInput;\n\n// Safe\ntextContent = userInput;\n```\n\nSanitize input:\n\n```javascript\nfunction sanitize(str) {\n  const div = document.createElement('div');\n  div.textContent = str;\n  return div.innerHTML;\n}\n```\n\nUse textContent instead of innerHTML for user input.",
    },
    {
      id: "js62-s2",
      title: "CSRF Protection",
      whyItMatters: "CSRF tricks users into unwanted actions.",
      content: "CSRF tokens:\n\n```javascript\n// Server generates token\nconst csrfToken = generateToken();\n\n// Include in form\n<input type=\"hidden\" name=\"csrf_token\" value=\"${csrfToken}\">\n```\n\nSameSite cookies:\n\n```javascript\nSet-Cookie: session=abc; SameSite=Strict\n```\n\nVerify tokens on server.",
    },
    {
      id: "js62-s3",
      title: "Content Security Policy",
      whyItMatters: "CSP restricts resources the browser can load.",
      content: "CSP header:\n\n```http\nContent-Security-Policy: default-src 'self'; script-src 'self' cdn.example.com\n```\n\nMeta tag:\n\n```html\n<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self'\">\n```\n\nPrevents loading unauthorized scripts.",
    },
  ],
  exercises: [
    { id: "js62-ex1", title: "Prevent XSS", difficulty: 2, description: "Secure user input display.", requirements: ["Use safe method", "Avoid innerHTML", "Sanitize if needed"], starterCode: { javascript: "function displayUserInput(input) {\n  // Display input safely\n  const div = document.createElement('div');\n  // Your code\n  document.body.appendChild(div);\n}" }, hints: ["Use textContent"], solution: { javascript: "function displayUserInput(input) {\n  const div = document.createElement('div');\n  div.textContent = input; // Safe\n  document.body.appendChild(div);\n}" }, solutionExplanation: "textContent is safe from XSS attacks." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js62-q1", type: "mcq", question: "Which prevents XSS?", options: ["innerHTML", "textContent", "eval", "document.write"], correctAnswer: 1, explanation: "textContent does not parse HTML, preventing XSS.", difficulty: 1 }] },
  cheatSheet: [{ label: "XSS", value: "Use textContent" }, { label: "CSRF", value: "Use tokens" }, { label: "CSP", value: "Content-Security-Policy" }],
};

export const jsCh63: Chapter = {
  id: "js-ch-63",
  number: 63,
  title: "Performance Optimization",
  subtitle: "Lazy loading, debouncing, memoization.",
  difficulty: "Advanced",
  estimatedMinutes: 60,
  xpReward: 180,
  prerequisites: ["js-ch-46"],
  partLabel: "Part 6: Modern JS, Ecosystem, Projects",
  learningObjectives: [
    "Use lazy loading.",
    "Implement debouncing.",
    "Implement throttling.",
    "Use memoization.",
    "Measure performance.",
  ],
  sections: [
    {
      id: "js63-s1",
      title: "Debouncing",
      whyItMatters: "Debouncing limits function calls to improve performance.",
      content: "Debounce implementation:\n\n```javascript\nfunction debounce(fn, delay) {\n  let timeout;\n  return (...args) => {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => fn(...args), delay);\n  };\n}\n\nconst debouncedSearch = debounce(search, 300);\n```\n\nUse for: search input, resize handlers.",
    },
    {
      id: "js63-s2",
      title: "Throttling",
      whyItMatters: "Throttling limits function call frequency.",
      content: "Throttle implementation:\n\n```javascript\nfunction throttle(fn, delay) {\n  let lastCall = 0;\n  return (...args) => {\n    const now = Date.now();\n    if (now - lastCall >= delay) {\n      fn(...args);\n      lastCall = now;\n    }\n  };\n}\n\nconst throttledScroll = throttle(handleScroll, 100);\n```\n\nUse for: scroll handlers, mousemove.",
    },
    {
      id: "js63-s3",
      title: "Memoization",
      whyItMatters: "Memoization caches results to avoid recomputation.",
      content: "Memoize function:\n\n```javascript\nfunction memoize(fn) {\n  const cache = new Map();\n  return (...args) => {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) return cache.get(key);\n    const result = fn(...args);\n    cache.set(key, result);\n    return result;\n  };\n}\n```\n\nCache expensive computations.",
    },
  ],
  exercises: [
    { id: "js63-ex1", title: "Implement debounce", difficulty: 2, description: "Create a debounce function.", requirements: ["Delay execution", "Cancel previous", "Return function"], starterCode: { javascript: "function debounce(fn, delay) {\n  let timeout;\n  return function(...args) {\n    // Clear previous timeout\n    // Set new timeout\n  };\n}" }, hints: ["clearTimeout", "setTimeout"], solution: { javascript: "function debounce(fn, delay) {\n  let timeout;\n  return function(...args) {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => fn.apply(this, args), delay);\n  };\n}" }, solutionExplanation: "clearTimeout cancels previous, setTimeout schedules new call." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js63-q1", type: "mcq", question: "When to use debounce?", options: ["Click events", "Search input", "Page load", "Single call"], correctAnswer: 1, explanation: "Debounce is ideal for search input to wait for typing to stop.", difficulty: 1 }] },
  cheatSheet: [{ label: "Debounce", value: "Wait for pause" }, { label: "Throttle", value: "Limit frequency" }, { label: "Memoize", value: "Cache results" }],
};

export const jsCh64: Chapter = {
  id: "js-ch-64",
  number: 64,
  title: "Project 1: Todo App",
  subtitle: "Build a complete todo application.",
  difficulty: "Intermediate",
  estimatedMinutes: 90,
  xpReward: 250,
  prerequisites: ["js-ch-48"],
  partLabel: "Part 6: Modern JS, Ecosystem, Projects",
  learningObjectives: [
    "Build complete application.",
    "Use DOM manipulation.",
    "Handle events.",
    "Use localStorage.",
    "Implement CRUD operations.",
  ],
  sections: [
    {
      id: "js64-s1",
      title: "Project Overview",
      whyItMatters: "Building a complete app demonstrates skills integration.",
      content: "Features:\n- Add todos\n- Mark complete\n- Delete todos\n- Persist to localStorage\n- Filter todos\n\nThis project combines DOM, events, storage, and state management.",
    },
  ],
  exercises: [
    { id: "js64-ex1", title: "Build todo app", difficulty: 3, description: "Complete todo application.", requirements: ["Add todos", "Toggle complete", "Delete todos", "Persist storage"], starterCode: { html: "<input id=\"input\" placeholder=\"Add todo\">\n<button id=\"add\">Add</button>\n<ul id=\"list\"></ul>", css: ".completed { text-decoration: line-through; }", javascript: "const input = document.getElementById('input');\nconst addBtn = document.getElementById('add');\nconst list = document.getElementById('list');\n\nlet todos = [];\n\n// Implement CRUD with localStorage persistence" }, hints: ["localStorage for persistence", "createElement for DOM", "addEventListener for events"], solution: { javascript: "const input = document.getElementById('input');\nconst addBtn = document.getElementById('add');\nconst list = document.getElementById('list');\n\nlet todos = JSON.parse(localStorage.getItem('todos') || '[]');\n\nfunction save() {\n  localStorage.setItem('todos', JSON.stringify(todos));\n}\n\nfunction render() {\n  list.innerHTML = '';\n  todos.forEach((todo, index) => {\n    const li = document.createElement('li');\n    li.textContent = todo.text;\n    li.className = todo.completed ? 'completed' : '';\n    \n    const delBtn = document.createElement('button');\n    delBtn.textContent = 'Delete';\n    delBtn.onclick = () => {\n      todos.splice(index, 1);\n      save();\n      render();\n    };\n    \n    li.onclick = () => {\n      todo.completed = !todo.completed;\n      save();\n      render();\n    };\n    \n    li.appendChild(delBtn);\n    list.appendChild(li);\n  });\n}\n\naddBtn.onclick = () => {\n  if (input.value.trim()) {\n    todos.push({ text: input.value, completed: false });\n    input.value = '';\n    save();\n    render();\n  }\n};\n\nrender();" }, solutionExplanation: "Complete CRUD with localStorage persistence and DOM updates." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js64-q1", type: "mcq", question: "Which stores data persistently?", options: ["sessionStorage", "localStorage", "memory", "cookies"], correctAnswer: 1, explanation: "localStorage persists across browser sessions.", difficulty: 1 }] },
  cheatSheet: [{ label: "CRUD", value: "Create, Read, Update, Delete" }, { label: "Storage", value: "localStorage" }, { label: "Render", value: "Update DOM" }],
};

export const jsCh65: Chapter = {
  id: "js-ch-65",
  number: 65,
  title: "Project 2: Weather App",
  subtitle: "Fetch API and async data.",
  difficulty: "Intermediate",
  estimatedMinutes: 90,
  xpReward: 250,
  prerequisites: ["js-ch-36"],
  partLabel: "Part 6: Modern JS, Ecosystem, Projects",
  learningObjectives: [
    "Use Fetch API.",
    "Handle async data.",
    "Display API data.",
    "Handle errors.",
    "Use async/await.",
  ],
  sections: [
    {
      id: "js65-s1",
      title: "Project Overview",
      whyItMatters: "Real API integration is essential for modern web apps.",
      content: "Features:\n- Fetch weather data\n- Display by city\n- Handle loading state\n- Handle errors\n- Use a public weather API\n\nDemonstrates async/await and error handling.",
    },
  ],
  exercises: [
    { id: "js65-ex1", title: "Fetch weather", difficulty: 3, description: "Fetch and display weather data.", requirements: ["Use fetch", "Handle async", "Display data", "Handle errors"], starterCode: { html: "<input id=\"city\" placeholder=\"Enter city\">\n<button id=\"search\">Search</button>\n<div id=\"result\"></div>", css: "", javascript: "const cityInput = document.getElementById('city');\nconst searchBtn = document.getElementById('search');\nconst result = document.getElementById('result');\n\nsearchBtn.addEventListener('click', async () => {\n  const city = cityInput.value;\n  result.textContent = 'Loading...';\n  \n  try {\n    // Fetch weather data from API\n    // Display temperature and conditions\n  } catch (error) {\n    result.textContent = 'Error: ' + error.message;\n  }\n});" }, hints: ["fetch(url)", "await response.json()", "try/catch for errors"], solution: { javascript: "const cityInput = document.getElementById('city');\nconst searchBtn = document.getElementById('search');\nconst result = document.getElementById('result');\n\nsearchBtn.addEventListener('click', async () => {\n  const city = cityInput.value;\n  result.textContent = 'Loading...';\n  \n  try {\n    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_KEY&units=metric`);\n    if (!response.ok) throw new Error('City not found');\n    const data = await response.json();\n    result.textContent = `${data.main.temp}°C - ${data.weather[0].description}`;\n  } catch (error) {\n    result.textContent = 'Error: ' + error.message;\n  }\n});" }, solutionExplanation: "Fetch with error handling, parse JSON, display result." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js65-q1", type: "mcq", question: "How to handle fetch errors?", options: ["Ignore", "try/catch", "if/else", "return"], correctAnswer: 1, explanation: "Use try/catch to handle fetch errors and network issues.", difficulty: 1 }] },
  cheatSheet: [{ label: "Fetch", value: "await fetch(url)" }, { label: "Parse", value: "await response.json()" }, { label: "Error", value: "try/catch" }],
};

export const jsCh66: Chapter = {
  id: "js-ch-66",
  number: 66,
  title: "Project 3: Modal Component",
  subtitle: "Reusable UI component.",
  difficulty: "Intermediate",
  estimatedMinutes: 75,
  xpReward: 220,
  prerequisites: ["js-ch-44"],
  partLabel: "Part 6: Modern JS, Ecosystem, Projects",
  learningObjectives: [
    "Create reusable components.",
    "Use event delegation.",
    "Handle accessibility.",
    "Create overlay system.",
    "Component architecture.",
  ],
  sections: [
    {
      id: "js66-s1",
      title: "Project Overview",
      whyItMatters: "Component-based architecture is fundamental to modern development.",
      content: "Features:\n- Open modal on trigger\n- Close on button/overlay click\n- Close on Escape key\n- Accessibility (ARIA)\n- Animation\n\nDemonstrates component design patterns.",
    },
  ],
  exercises: [
    { id: "js66-ex1", title: "Build modal", difficulty: 3, description: "Create a reusable modal component.", requirements: ["Overlay and content", "Open/close methods", "Event handlers", "Accessibility"], starterCode: { html: "<button id=\"open\">Open Modal</button>\n<div id=\"modal\" class=\"modal hidden\">\n  <div class=\"overlay\"></div>\n  <div class=\"content\">\n    <h2>Modal</h2>\n    <p>Content here</p>\n    <button class=\"close\">Close</button>\n  </div>\n</div>", css: ".modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; }\n.overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.5); }\n.content { position: relative; background: white; padding: 20px; width: 400px; margin: 100px auto; }\n.hidden { display: none; }", javascript: "const openBtn = document.getElementById('open');\nconst modal = document.getElementById('modal');\nconst closeBtn = modal.querySelector('.close');\nconst overlay = modal.querySelector('.overlay');\n\n// Implement open/close with event listeners and Escape key" }, hints: ["classList.toggle('hidden')", "addEventListener", "keydown for Escape"], solution: { javascript: "const openBtn = document.getElementById('open');\nconst modal = document.getElementById('modal');\nconst closeBtn = modal.querySelector('.close');\nconst overlay = modal.querySelector('.overlay');\n\nfunction open() {\n  modal.classList.remove('hidden');\n}\n\nfunction close() {\n  modal.classList.add('hidden');\n}\n\nopenBtn.addEventListener('click', open);\ncloseBtn.addEventListener('click', close);\noverlay.addEventListener('click', close);\n\ndocument.addEventListener('keydown', (e) => {\n  if (e.key === 'Escape') close();\n});" }, solutionExplanation: "Toggle class for visibility, multiple close methods, Escape key support." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js66-q1", type: "mcq", question: "Which key closes modals?", options: ["Enter", "Tab", "Escape", "Space"], correctAnswer: 2, explanation: "Escape key is the standard for closing modals/dialogs.", difficulty: 1 }] },
  cheatSheet: [{ label: "Toggle", value: "classList.toggle()" }, { label: "Events", value: "Multiple listeners" }, { label: "A11y", value: "Escape key" }],
};

export const jsCh67: Chapter = {
  id: "js-ch-67",
  number: 67,
  title: "Project 4: Form Validation",
  subtitle: "Real-time form validation.",
  difficulty: "Advanced",
  estimatedMinutes: 75,
  xpReward: 230,
  prerequisites: ["js-ch-48"],
  partLabel: "Part 6: Modern JS, Ecosystem, Projects",
  learningObjectives: [
    "Validate forms in real-time.",
    "Show error messages.",
    "Use regex for validation.",
    "Handle form submission.",
    "Provide user feedback.",
  ],
  sections: [
    {
      id: "js67-s1",
      title: "Project Overview",
      whyItMatters: "Form validation improves UX and data quality.",
      content: "Features:\n- Real-time validation\n- Email format check\n- Password strength\n- Error messages\n- Submit only if valid\n\nDemonstrates regex and form handling.",
    },
  ],
  exercises: [
    { id: "js67-ex1", title: "Validate form", difficulty: 3, description: "Implement form validation.", requirements: ["Validate on input", "Show errors", "Prevent invalid submit", "Regex patterns"], starterCode: { html: "<form id=\"form\">\n  <input type=\"email\" id=\"email\" placeholder=\"Email\">\n  <span id=\"emailError\"></span>\n  <br>\n  <input type=\"password\" id=\"password\" placeholder=\"Password\">\n  <span id=\"passwordError\"></span>\n  <br>\n  <button type=\"submit\">Submit</button>\n</form>", css: ".error { color: red; }", javascript: "const form = document.getElementById('form');\nconst email = document.getElementById('email');\nconst password = document.getElementById('password');\nconst emailError = document.getElementById('emailError');\nconst passwordError = document.getElementById('passwordError');\n\n// Implement validation with regex and error display" }, hints: ["Email regex", "Password length check", "addEventListener input", "e.preventDefault()"], solution: { javascript: "const form = document.getElementById('form');\nconst email = document.getElementById('email');\nconst password = document.getElementById('password');\nconst emailError = document.getElementById('emailError');\nconst passwordError = document.getElementById('passwordError');\n\nconst emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n\nfunction validateEmail() {\n  if (!emailRegex.test(email.value)) {\n    emailError.textContent = 'Invalid email';\n    return false;\n  }\n  emailError.textContent = '';\n  return true;\n}\n\nfunction validatePassword() {\n  if (password.value.length < 8) {\n    passwordError.textContent = 'Password must be 8+ characters';\n    return false;\n  }\n  passwordError.textContent = '';\n  return true;\n}\n\nemail.addEventListener('input', validateEmail);\npassword.addEventListener('input', validatePassword);\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  if (validateEmail() && validatePassword()) {\n    alert('Form submitted!');\n  }\n});" }, solutionExplanation: "Real-time validation on input, regex for email, submit only if valid." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js67-q1", type: "mcq", question: "Which event for real-time validation?", options: ["submit", "change", "input", "focus"], correctAnswer: 2, explanation: "input event fires on every keystroke for real-time validation.", difficulty: 1 }] },
  cheatSheet: [{ label: "Regex", value: "/pattern/" }, { label: "Input", value: "input event" }, { label: "Prevent", value: "e.preventDefault()" }],
};

export const jsCh68: Chapter = {
  id: "js-ch-68",
  number: 68,
  title: "Project 5: Infinite Scroll",
  subtitle: "Dynamic content loading.",
  difficulty: "Advanced",
  estimatedMinutes: 90,
  xpReward: 250,
  prerequisites: ["js-ch-54"],
  partLabel: "Part 6: Modern JS, Ecosystem, Projects",
  learningObjectives: [
    "Use Intersection Observer.",
    "Load data dynamically.",
    "Handle loading states.",
    "Implement infinite scroll.",
    "Performance optimization.",
  ],
  sections: [
    {
      id: "js68-s1",
      title: "Project Overview",
      whyItMatters: "Infinite scroll is common in social feeds and e-commerce.",
      content: "Features:\n- Load items on scroll\n- Show loading indicator\n- Use Intersection Observer\n- Fetch data incrementally\n- Append to DOM\n\nDemonstrates Intersection Observer and async patterns.",
    },
  ],
  exercises: [
    { id: "js68-ex1", title: "Implement infinite scroll", difficulty: 3, description: "Create infinite scroll list.", requirements: ["Intersection Observer", "Load more items", "Append to DOM", "Loading state"], starterCode: { html: "<div id=\"list\"></div>\n<div id=\"sentinel\">Loading...</div>", css: "", javascript: "const list = document.getElementById('list');\nconst sentinel = document.getElementById('sentinel');\n\nlet page = 1;\nlet loading = false;\n\nasync function loadItems() {\n  // Load items and append to list\n}\n\n// Implement infinite scroll with Intersection Observer" }, hints: ["new IntersectionObserver", "isIntersecting", "loadItems"], solution: { javascript: "const list = document.getElementById('list');\nconst sentinel = document.getElementById('sentinel');\n\nlet page = 1;\nlet loading = false;\n\nasync function loadItems() {\n  if (loading) return;\n  loading = true;\n  \n  // Simulate API call\n  await new Promise(r => setTimeout(r, 500));\n  \n  for (let i = 0; i < 5; i++) {\n    const item = document.createElement('div');\n    item.textContent = `Item ${page * 5 + i}`;\n    list.appendChild(item);\n  }\n  \n  page++;\n  loading = false;\n}\n\nconst observer = new IntersectionObserver((entries) => {\n  if (entries[0].isIntersecting) {\n    loadItems();\n  }\n});\n\nobserver.observe(sentinel);\nloadItems();" }, solutionExplanation: "Intersection Observer detects scroll to bottom, loads more items." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js68-q1", type: "mcq", question: "Which API detects viewport entry?", options: ["MutationObserver", "ResizeObserver", "IntersectionObserver", "PerformanceObserver"], correctAnswer: 2, explanation: "IntersectionObserver detects when elements enter/leave viewport.", difficulty: 1 }] },
  cheatSheet: [{ label: "Observer", value: "new IntersectionObserver()" }, { label: "Detect", value: "isIntersecting" }, { label: "Load", value: "async fetch" }],
};

export const jsCh69: Chapter = {
  id: "js-ch-69",
  number: 69,
  title: "Project 6: Drag and Drop Kanban",
  subtitle: "Interactive task board.",
  difficulty: "Advanced",
  estimatedMinutes: 90,
  xpReward: 280,
  prerequisites: ["js-ch-53"],
  partLabel: "Part 6: Modern JS, Ecosystem, Projects",
  learningObjectives: [
    "Use Drag and Drop API.",
    "Implement task management.",
    "Handle drag events.",
    "Update state on drop.",
    "Visual feedback.",
  ],
  sections: [
    {
      id: "js69-s1",
      title: "Project Overview",
      whyItMatters: "Drag and drop is essential for interactive UIs.",
      content: "Features:\n- Three columns (Todo, In Progress, Done)\n- Draggable tasks\n- Drop zones\n- Move tasks between columns\n- Visual feedback\n\nDemonstrates Drag and Drop API and state management.",
    },
  ],
  exercises: [
    { id: "js69-ex1", title: "Build kanban", difficulty: 3, description: "Create drag and drop kanban board.", requirements: ["Draggable tasks", "Drop zones", "Move between columns", "Event handling"], starterCode: { html: "<div class=\"board\">\n  <div class=\"column\" data-status=\"todo\">\n    <h3>Todo</h3>\n    <div class=\"task\" draggable=\"true\">Task 1</div>\n  </div>\n  <div class=\"column\" data-status=\"in-progress\">\n    <h3>In Progress</h3>\n  </div>\n  <div class=\"column\" data-status=\"done\">\n    <h3>Done</h3>\n  </div>\n</div>", css: ".board { display: flex; gap: 20px; }\n.column { flex: 1; background: #f0f0f0; padding: 10px; min-height: 200px; }\n.task { background: white; padding: 10px; margin: 5px 0; cursor: move; }", javascript: "// Implement drag and drop between columns" }, hints: ["dragstart: setData", "dragover: preventDefault", "drop: handle drop"], solution: { javascript: "const tasks = document.querySelectorAll('.task');\nconst columns = document.querySelectorAll('.column');\n\ntasks.forEach(task => {\n  task.addEventListener('dragstart', (e) => {\n    e.dataTransfer.setData('text/plain', task.textContent);\n    task.classList.add('dragging');\n  });\n  \n  task.addEventListener('dragend', () => {\n    task.classList.remove('dragging');\n  });\n});\n\ncolumns.forEach(column => {\n  column.addEventListener('dragover', (e) => {\n    e.preventDefault();\n  });\n  \n  column.addEventListener('drop', (e) => {\n    e.preventDefault();\n    const taskText = e.dataTransfer.getData('text/plain');\n    const task = document.querySelector('.dragging');\n    column.appendChild(task);\n  });\n});" }, solutionExplanation: "Drag and Drop API with dataTransfer to move tasks between columns." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js69-q1", type: "mcq", question: "What enables drop?", options: ["draggable attribute", "preventDefault in dragover", "setData", "getData"], correctAnswer: 1, explanation: "preventDefault() in dragover is required to allow dropping.", difficulty: 2 }] },
  cheatSheet: [{ label: "Drag", value: "dragstart: setData" }, { label: "Allow", value: "dragover: preventDefault" }, { label: "Drop", value: "drop: getData/appendChild" }],
};

export const jsCh70: Chapter = {
  id: "js-ch-70",
  number: 70,
  title: "JavaScript Mastery Assessment",
  subtitle: "Final comprehensive assessment.",
  difficulty: "Expert",
  estimatedMinutes: 90,
  xpReward: 350,
  prerequisites: ["js-ch-69"],
  partLabel: "Part 6: Modern JS, Ecosystem, Projects",
  learningObjectives: [
    "Demonstrate comprehensive JavaScript knowledge.",
    "Apply all learned concepts.",
    "Build complex application.",
    "Show problem-solving skills.",
    "Complete the curriculum.",
  ],
  sections: [
    {
      id: "js70-s1",
      title: "Assessment Overview",
      whyItMatters: "This final assessment tests all skills learned throughout the curriculum.",
      content: "Assessment covers:\n- Language fundamentals\n- Async JavaScript\n- DOM manipulation\n- Modern JavaScript\n- Build tools and ecosystem\n- Best practices and patterns\n\nComplete the capstone project to demonstrate mastery.",
    },
  ],
  exercises: [
    { id: "js70-ex1", title: "Capstone project", difficulty: 3, description: "Build a complete application combining all skills.", requirements: ["Multiple features", "Async operations", "DOM manipulation", "State management", "Persistence", "Error handling"], starterCode: { javascript: "// Build a complete app of your choice that demonstrates:\n// - Async data fetching\n// - DOM manipulation\n// - Event handling\n// - State management\n// - Local storage\n// - Error handling\n// - Modern JS features\n\nExamples: Task manager, Weather app with forecasts, Note-taking app" }, hints: ["Plan features", "Use modules", "Handle edge cases"], solution: { javascript: "// Example: Task Manager App\n// Features: CRUD, localStorage, drag and drop, filtering\n\nconst app = document.getElementById('app');\n\nlet tasks = JSON.parse(localStorage.getItem('tasks') || '[]');\n\nfunction save() {\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n}\n\nfunction render() {\n  // Render tasks with filters\n}\n\n// Implement full application\n// This is your capstone - show all your skills!" }, solutionExplanation: "Capstone project demonstrates comprehensive JavaScript mastery." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js70-q1", type: "mcq", question: "What does async/await do?", options: ["Makes code sync", "Simplifies async code", "Runs in parallel", "Improves performance"], correctAnswer: 1, explanation: "async/await makes asynchronous code look synchronous and easier to read.", difficulty: 1 }, { id: "js70-q2", type: "mcq", question: "Which prevents XSS?", options: ["innerHTML", "textContent", "eval", "document.write"], correctAnswer: 1, explanation: "textContent does not parse HTML, preventing XSS attacks.", difficulty: 1 }, { id: "js70-q3", type: "mcq", question: "What does closure do?", options: ["Delete variables", "Remember outer scope", "Stop execution", "Create new scope"], correctAnswer: 1, explanation: "Closures let functions remember variables from their outer scope.", difficulty: 2 }] },
  cheatSheet: [{ label: "Async", value: "async/await" }, { label: "DOM", value: "querySelector, addEventListener" }, { label: "State", value: "localStorage, state management" }],
};
