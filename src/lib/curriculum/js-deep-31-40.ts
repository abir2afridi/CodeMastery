import type { Chapter } from "./types";

export const jsCh31: Chapter = {
  id: "js-ch-31",
  number: 31,
  title: "JavaScript Runtime",
  subtitle: "Event loop, call stack, and task queues.",
  difficulty: "Advanced",
  estimatedMinutes: 60,
  xpReward: 180,
  prerequisites: ["js-ch-08"],
  learningObjectives: [
    "Understand the call stack.",
    "Learn how the event loop works.",
    "Understand microtask and macrotask queues.",
    "Know how async code executes.",
    "Understand single-threaded nature.",
  ],
  sections: [
    {
      id: "js31-s1",
      title: "Call Stack",
      whyItMatters: "The call stack tracks function execution. Understanding it helps debug stack traces and understand execution order.",
      realWorldAnalogy: "The call stack is like a stack of plates. You add plates (function calls) on top and remove them (return) from the top.",
      content: "JavaScript is single-threaded with one call stack:\n\n\`\`\`javascript\nfunction a() {\n  b();\n}\n\nfunction b() {\n  c();\n}\n\nfunction c() {\n  console.log('c');\n}\n\na(); // Stack: a → b → c (then unwinds)\n\`\`\`\n\nStack overflow occurs when stack exceeds limit:\n\n\`\`\`javascript\nfunction recurse() {\n  recurse(); // Stack overflow\n}\n\`\`\`",
    },
    {
      id: "js31-s2",
      title: "Event Loop",
      whyItMatters: "The event loop enables asynchronous operations despite JavaScript being single-threaded.",
      content: "Event loop coordinates call stack and task queues:\n\n1. Execute call stack until empty\n2. Check microtask queue (Promises)\n3. Check macrotask queue (setTimeout, events)\n4. Repeat\n\n\`\`\`javascript\nconsole.log('1');\n\nsetTimeout(() => console.log('2'), 0);\n\nPromise.resolve().then(() => console.log('3'));\n\nconsole.log('4');\n\n// Output: 1, 4, 3, 2\n// 1,4 - sync\n// 3 - microtask (Promise)\n// 2 - macrotask (setTimeout)\n\`\`\`",
    },
    {
      id: "js31-s3",
      title: "Task Queues",
      whyItMatters: "Different queues have different priorities. Microtasks run before macrotasks.",
      content: "Microtask queue (higher priority):\n- Promise.then/.catch/.finally\n- queueMicrotask()\n- MutationObserver\n\nMacrotask queue (lower priority):\n- setTimeout\n- setInterval\n- setImmediate (Node.js)\n- I/O operations\n- UI rendering\n\n\`\`\`javascript\nconsole.log('Start');\n\nsetTimeout(() => console.log('Timeout'), 0);\n\nPromise.resolve().then(() => {\n  console.log('Promise');\n  Promise.resolve().then(() => console.log('Nested Promise'));\n});\n\nconsole.log('End');\n\n// Output: Start, End, Promise, Nested Promise, Timeout\n\`\`\`",
    },
  ],
  exercises: [
    { id: "js31-ex1", title: "Predict output", difficulty: 2, description: "Predict the output order of this code.", requirements: ["Understand event loop", "Know queue priorities"], starterCode: { javascript: "console.log('A');\n\nsetTimeout(() => console.log('B'), 0);\n\nPromise.resolve().then(() => console.log('C'));\n\nconsole.log('D');" }, hints: ["Sync code runs first", "Microtasks before macrotasks"], solution: { javascript: "// Output: A, D, C, B\nconsole.log('A');\nsetTimeout(() => console.log('B'), 0);\nPromise.resolve().then(() => console.log('C'));\nconsole.log('D');" }, solutionExplanation: "Sync (A,D) → Microtasks (C) → Macrotasks (B)" },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js31-q1", type: "mcq", question: "Which queue has higher priority?", options: ["Macrotask", "Microtask", "Both equal", "Neither"], correctAnswer: 1, explanation: "Microtask queue runs before macrotask queue in the event loop.", difficulty: 2 }] },
  cheatSheet: [{ label: "Call stack", value: "LIFO function execution" }, { label: "Event loop", value: "Coordinates stack and queues" }, { label: "Microtask", value: "Promises, queueMicrotask" }],
  partLabel: "Part 4: Async JavaScript",
};

export const jsCh32: Chapter = {
  id: "js-ch-32",
  number: 32,
  title: "Callbacks",
  subtitle: "Functions as arguments and callback hell.",
  difficulty: "Intermediate",
  estimatedMinutes: 50,
  xpReward: 150,
  prerequisites: ["js-ch-08"],
  learningObjectives: [
    "Understand callback functions.",
    "Use callbacks for async operations.",
    "Handle errors with callbacks.",
    "Recognize callback hell.",
    "Avoid callback hell patterns.",
  ],
  sections: [
    {
      id: "js32-s1",
      title: "Callback Basics",
      whyItMatters: "Callbacks are the foundation of asynchronous JavaScript. Understanding them is essential for working with async code.",
      content: "A callback is a function passed as an argument:\n\n\`\`\`javascript\nfunction greet(name, callback) {\n  console.log('Hello ' + name);\n  callback();\n}\n\ngreet('Alice', () => {\n  console.log('Callback executed');\n});\n\`\`\`\n\nSynchronous callbacks:\n\n\`\`\`javascript\n[1, 2, 3].forEach(num => console.log(num * 2));\n\`\`\`\n\nAsynchronous callbacks:\n\n\`\`\`javascript\nsetTimeout(() => {\n  console.log('Delayed');\n}, 1000);\n\`\`\`",
    },
    {
      id: "js32-s2",
      title: "Error Handling",
      whyItMatters: "Callbacks need error handling patterns since try/catch doesn't work across async boundaries.",
      content: "Node.js error-first callback pattern:\n\n\`\`\`javascript\nfunction fetchData(callback) {\n  setTimeout(() => {\n    const error = null;\n    const data = { id: 1 };\n    callback(error, data);\n  }, 1000);\n}\n\nfetchData((error, data) => {\n  if (error) {\n    console.error('Error:', error);\n    return;\n  }\n  console.log('Data:', data);\n});\n\`\`\`\n\nThis pattern was standard before Promises.",
    },
    {
      id: "js32-s3",
      title: "Callback Hell",
      whyItMatters: "Nested callbacks create hard-to-read code. This problem led to Promises and async/await.",
      content: "Callback hell example:\n\n\`\`\`javascript\ngetData(id, (data1) => {\n  getMoreData(data1, (data2) => {\n    getMoreData(data2, (data3) => {\n      getMoreData(data3, (data4) => {\n        // Too deep!\n      });\n    });\n  });\n});\n\`\`\`\n\nSolutions:\n1. Name functions instead of inline\n2. Use Promises\n3. Use async/await\n\nBetter with named functions:\n\n\`\`\`javascript\nfunction handleData1(data1) { }\nfunction handleData2(data2) { }\n\ngetData(id, handleData1);\n\`\`\`",
    },
  ],
  exercises: [
    { id: "js32-ex1", title: "Create callback", difficulty: 1, description: "Create a function that accepts a callback.", requirements: ["Accept callback parameter", "Call callback", "Pass data to callback"], starterCode: { javascript: "function process(data, callback) {\n  // Call callback with processed data\n}\n\nprocess(5, result => console.log(result)); // Should log 10" }, hints: ["Call callback with transformed data"], solution: { javascript: "function process(data, callback) {\n  const result = data * 2;\n  callback(result);\n}\n\nprocess(5, result => console.log(result)); // 10" }, solutionExplanation: "Callbacks receive data after processing completes." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js32-q1", type: "mcq", question: "What causes callback hell?", options: ["Too many parameters", "Nested callbacks", "Async functions", "Global variables"], correctAnswer: 1, explanation: "Callback hell is caused by deeply nested callback functions.", difficulty: 1 }] },
  cheatSheet: [{ label: "Callback", value: "Function passed as argument" }, { label: "Error-first", value: "callback(error, data)" }, { label: "Hell", value: "Deeply nested callbacks" }],
  partLabel: "Part 4: Async JavaScript",
};

export const jsCh33: Chapter = {
  id: "js-ch-33",
  number: 33,
  title: "Promises — Part 1",
  subtitle: "Promise basics and chaining.",
  difficulty: "Intermediate",
  estimatedMinutes: 60,
  xpReward: 170,
  prerequisites: ["js-ch-32"],
  learningObjectives: [
    "Create and use Promises.",
    "Chain Promises with .then().",
    "Handle errors with .catch().",
    "Use .finally() for cleanup.",
    "Understand Promise states.",
  ],
  sections: [
    {
      id: "js33-s1",
      title: "Promise Basics",
      whyItMatters: "Promises provide a cleaner way to handle async operations than callbacks, avoiding callback hell.",
      realWorldAnalogy: "A Promise is like a restaurant buzzer. You get a buzzer (Promise) and can do other things while waiting. When ready, the buzzer lights up (resolves) or the kitchen tells you they're out (rejects).",
      content: "Create a Promise:\n\n\`\`\`javascript\nconst promise = new Promise((resolve, reject) => {\n  const success = true;\n  \n  if (success) {\n    resolve('Operation succeeded');\n  } else {\n    reject('Operation failed');\n  }\n});\n\npromise\n  .then(result => console.log(result))\n  .catch(error => console.error(error));\n\`\`\`\n\nPromise states:\n- pending: initial state\n- fulfilled: operation succeeded\n- rejected: operation failed\n- settled: fulfilled or rejected (immutable)",
    },
    {
      id: "js33-s2",
      title: "Chaining",
      whyItMatters: "Promise chaining enables sequential async operations without nesting.",
      content: "Chain .then() calls:\n\n\`\`\`javascript\nfetch('/user')\n  .then(response => response.json())\n  .then(user => fetch(`/posts/${user.id}`))\n  .then(response => response.json())\n  .then(posts => console.log(posts))\n  .catch(error => console.error(error));\n\`\`\`\n\nReturn values become next .then() argument:\n\n\`\`\`javascript\nPromise.resolve(1)\n  .then(x => x + 1) // 2\n  .then(x => x * 2) // 4\n  .then(x => console.log(x)); // 4\n\`\`\`\n\nReturn a Promise to chain async operations.",
    },
    {
      id: "js33-s3",
      title: "Error Handling",
      whyItMatters: "Proper error handling prevents unhandled Promise rejections.",
      content: "Use .catch() for errors:\n\n\`\`\`javascript\nPromise.reject('Error')\n  .then(result => {\n    console.log(result); // Won't run\n  })\n  .catch(error => {\n    console.error(error); // 'Error'\n  });\n\`\`\`\n\n.finally() always runs:\n\n\`\`\`javascript\nPromise.resolve()\n  .then(() => console.log('Success'))\n  .catch(() => console.log('Error'))\n  .finally(() => console.log('Cleanup')); // Always runs\n\`\`\`\n\nError propagates to nearest .catch():",
    },
  ],
  exercises: [
    { id: "js33-ex1", title: "Create Promise", difficulty: 2, description: "Create a Promise that resolves after 1 second.", requirements: ["Use setTimeout", "Resolve with value", "Return Promise"], starterCode: { javascript: "function delay(ms) {\n  // Return Promise that resolves after ms\n}\n\ndelay(1000).then(() => console.log('Done!'));" }, hints: ["new Promise((resolve) => {})", "setTimeout inside Promise"], solution: { javascript: "function delay(ms) {\n  return new Promise(resolve => {\n    setTimeout(() => resolve(), ms);\n  });\n}\n\ndelay(1000).then(() => console.log('Done!'));" }, solutionExplanation: "Promise wraps setTimeout, resolving after the delay." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js33-q1", type: "mcq", question: "What state is immutable?", options: ["pending", "fulfilled", "settled", "pending"], correctAnswer: 2, explanation: "Once a Promise is settled (fulfilled or rejected), its state cannot change.", difficulty: 2 }] },
  cheatSheet: [{ label: "Create", value: "new Promise((resolve, reject) => {})" }, { label: "Chain", value: ".then().then()" }, { label: "Error", value: ".catch()" }],
  partLabel: "Part 4: Async JavaScript",
};

export const jsCh34: Chapter = {
  id: "js-ch-34",
  number: 34,
  title: "Promises — Part 2",
  subtitle: "Promise.all, race, allSettled, any.",
  difficulty: "Advanced",
  estimatedMinutes: 50,
  xpReward: 160,
  prerequisites: ["js-ch-33"],
  learningObjectives: [
    "Use Promise.all for parallel operations.",
    "Use Promise.race for first completion.",
    "Use Promise.allSettled for all results.",
    "Use Promise.any for first success.",
    "Understand when to use each method.",
  ],
  sections: [
    {
      id: "js34-s1",
      title: "Promise.all",
      whyItMatters: "Promise.all runs multiple async operations in parallel and waits for all to complete.",
      content: "Wait for all Promises to resolve:\n\n\`\`\`javascript\nconst p1 = Promise.resolve(1);\nconst p2 = Promise.resolve(2);\nconst p3 = Promise.resolve(3);\n\nPromise.all([p1, p2, p3])\n  .then(values => console.log(values)); // [1, 2, 3]\n\`\`\`\n\nRejects if any Promise rejects:\n\n\`\`\`javascript\nPromise.all([\n  Promise.resolve(1),\n  Promise.reject('Error'),\n  Promise.resolve(3)\n]).catch(error => console.error(error)); // 'Error'\n\`\`\`\n\nUseful for parallel API calls.",
    },
    {
      id: "js34-s2",
      title: "Promise.race",
      whyItMatters: "Promise.race returns the first settled Promise, useful for timeouts or fastest response.",
      content: "First Promise to settle wins:\n\n\`\`\`javascript\nconst fast = new Promise(resolve => \n  setTimeout(() => resolve('Fast'), 100)\n);\nconst slow = new Promise(resolve => \n  setTimeout(() => resolve('Slow'), 200)\n);\n\nPromise.race([fast, slow])\n  .then(value => console.log(value)); // 'Fast'\n\`\`\`\n\nTimeout pattern:\n\n\`\`\`javascript\nconst timeout = new Promise((_, reject) => \n  setTimeout(() => reject('Timeout'), 5000)\n);\n\nPromise.race([fetch('/data'), timeout])\n  .catch(error => console.error(error));\n\`\`\`",
    },
    {
      id: "js34-s3",
      title: "allSettled and any",
      whyItMatters: "allSettled waits for all regardless of failures. any waits for first success.",
      content: "Promise.allSettled - never rejects:\n\n\`\`\`javascript\nPromise.allSettled([\n  Promise.resolve(1),\n  Promise.reject('Error'),\n  Promise.resolve(3)\n]).then(results => console.log(results));\n// [\n//   { status: 'fulfilled', value: 1 },\n//   { status: 'rejected', reason: 'Error' },\n//   { status: 'fulfilled', value: 3 }\n// ]\n\`\`\`\n\nPromise.any - first success:\n\n\`\`\`javascript\nPromise.any([\n  Promise.reject('Error 1'),\n  Promise.reject('Error 2'),\n  Promise.resolve('Success')\n]).then(value => console.log(value)); // 'Success'\n\`\`\`\n\nRejects only if all reject.",
    },
  ],
  exercises: [
    { id: "js34-ex1", title: "Parallel fetch", difficulty: 2, description: "Use Promise.all to fetch multiple resources in parallel.", requirements: ["Use Promise.all", "Fetch multiple URLs", "Handle results"], starterCode: { javascript: "const urls = ['/api/1', '/api/2', '/api/3'];\n\n// Fetch all URLs in parallel using Promise.all\n" }, hints: ["Map URLs to fetch promises", "Pass array to Promise.all"], solution: { javascript: "const urls = ['/api/1', '/api/2', '/api/3'];\n\nPromise.all(urls.map(url => fetch(url)))\n  .then(responses => console.log(responses));" }, solutionExplanation: "Promise.all runs all fetches in parallel." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js34-q1", type: "mcq", question: "When does Promise.all reject?", options: ["First resolve", "First reject", "All reject", "Never"], correctAnswer: 1, explanation: "Promise.all rejects immediately when any Promise rejects.", difficulty: 2 }] },
  cheatSheet: [{ label: "all", value: "Wait for all, reject on any failure" }, { label: "race", value: "First to settle" }, { label: "allSettled", value: "Wait for all, never rejects" }],
  partLabel: "Part 4: Async JavaScript",
};

export const jsCh35: Chapter = {
  id: "js-ch-35",
  number: 35,
  title: "Async/Await",
  subtitle: "Modern async syntax.",
  difficulty: "Intermediate",
  estimatedMinutes: 50,
  xpReward: 160,
  prerequisites: ["js-ch-33"],
  learningObjectives: [
    "Use async/await syntax.",
    "Handle errors with try/catch.",
    "Use await in loops.",
    "Understand async function behavior.",
    "Convert Promises to async/await.",
  ],
  sections: [
    {
      id: "js35-s1",
      title: "Async/Await Basics",
      whyItMatters: "Async/await makes async code look synchronous, making it easier to read and write.",
      content: "async functions return Promises:\n\n\`\`\`javascript\nasync function greet() {\n  return 'Hello';\n}\n\ngreet().then(value => console.log(value)); // 'Hello'\n\`\`\`\n\nawait pauses execution until Promise settles:\n\n\`\`\`javascript\nasync function fetchUser() {\n  const response = await fetch('/user');\n  const user = await response.json();\n  return user;\n}\n\`\`\`\n\nMust use await inside async function (or top-level in modules).",
    },
    {
      id: "js35-s2",
      title: "Error Handling",
      whyItMatters: "try/catch works with async/await, unlike with raw Promises.",
      content: "Use try/catch for errors:\n\n\`\`\`javascript\nasync function fetchData() {\n  try {\n    const response = await fetch('/data');\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Error:', error);\n    throw error; // Re-throw if needed\n  }\n}\n\`\`\`\n\n.finally() still works:\n\n\`\`\`javascript\nasync function process() {\n  try {\n    await doWork();\n  } finally {\n    await cleanup(); // Always runs\n  }\n}\n\`\`\`",
    },
    {
      id: "js35-s3",
      title: "Parallel Execution",
      whyItMatters: "Sequential await is slow. Use Promise.all for parallel operations.",
      content: "Sequential (slow):\n\n\`\`\`javascript\nconst a = await fetch('/a');\nconst b = await fetch('/b');\nconst c = await fetch('/c');\n\`\`\`\n\nParallel (fast):\n\n\`\`\`javascript\nconst [a, b, c] = await Promise.all([\n  fetch('/a'),\n  fetch('/b'),\n  fetch('/c')\n]);\n\`\`\`\n\nParallel with error handling:\n\n\`\`\`javascript\nconst results = await Promise.allSettled([\n  fetch('/a'),\n  fetch('/b'),\n  fetch('/c')\n]);\n\`\`\`",
    },
  ],
  exercises: [
    { id: "js35-ex1", title: "Convert to async/await", difficulty: 2, description: "Convert Promise chain to async/await.", requirements: ["Use async function", "Use await", "Handle errors"], starterCode: { javascript: "function getUser() {\n  return fetch('/user')\n    .then(res => res.json())\n    .then(user => user.name);\n}\n\n// Convert to async/await" }, hints: ["Add async keyword", "await each Promise", "Use try/catch"], solution: { javascript: "async function getUser() {\n  try {\n    const response = await fetch('/user');\n    const user = await response.json();\n    return user.name;\n  } catch (error) {\n    console.error(error);\n  }\n}" }, solutionExplanation: "async/await makes the code more readable than .then() chains." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js35-q1", type: "mcq", question: "What does async function return?", options: ["Value", "undefined", "Promise", "null"], correctAnswer: 2, explanation: "async functions always return a Promise.", difficulty: 1 }] },
  cheatSheet: [{ label: "async", value: "async function() {}" }, { label: "await", value: "await promise" }, { label: "try/catch", value: "try { await } catch {}" }],
  partLabel: "Part 4: Async JavaScript",
};

export const jsCh36: Chapter = {
  id: "js-ch-36",
  number: 36,
  title: "Fetch API",
  subtitle: "HTTP requests from JavaScript.",
  difficulty: "Intermediate",
  estimatedMinutes: 60,
  xpReward: 170,
  prerequisites: ["js-ch-35"],
  learningObjectives: [
    "Use fetch for HTTP requests.",
    "Handle different HTTP methods.",
    "Work with headers and body.",
    "Handle response status.",
    "Handle network errors.",
  ],
  sections: [
    {
      id: "js36-s1",
      title: "Fetch Basics",
      whyItMatters: "Fetch is the modern way to make HTTP requests in the browser, replacing XMLHttpRequest.",
      content: "GET request:\n\n\`\`\`javascript\nfetch('/api/users')\n  .then(response => response.json())\n  .then(data => console.log(data));\n\`\`\`\n\nWith async/await:\n\n\`\`\`javascript\nasync function getUsers() {\n  const response = await fetch('/api/users');\n  const data = await response.json();\n  return data;\n}\n\`\`\`\n\nResponse object has:\n- status: HTTP status code\n- ok: true if status 200-299\n- headers: Response headers\n- body: Response body stream",
    },
    {
      id: "js36-s2",
      title: "HTTP Methods",
      whyItMatters: "Different HTTP methods perform different actions on resources.",
      content: "POST with body:\n\n\`\`\`javascript\nfetch('/api/users', {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({ name: 'Alice' })\n}).then(response => response.json());\n\`\`\`\n\nPUT:\n\n\`\`\`javascript\nfetch('/api/users/1', {\n  method: 'PUT',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({ name: 'Bob' })\n});\n\`\`\`\n\nDELETE:\n\n\`\`\`javascript\nfetch('/api/users/1', { method: 'DELETE' });\n\`\`\`",
    },
    {
      id: "js36-s3",
      title: "Error Handling",
      whyItMatters: "Fetch doesn't reject on HTTP errors. You must check response.ok.",
      content: "Check for HTTP errors:\n\n\`\`\`javascript\nasync function fetchData() {\n  const response = await fetch('/api/data');\n  \n  if (!response.ok) {\n    throw new Error(`HTTP error! status: ${response.status}`);\n  }\n  \n  return await response.json();\n}\n\`\`\`\n\nNetwork errors:\n\n\`\`\`javascript\ntry {\n  const response = await fetch('/api/data');\n} catch (error) {\n  console.error('Network error:', error);\n}\n\`\`\`\n\nAlways check ok and use try/catch.",
    },
  ],
  exercises: [
    { id: "js36-ex1", title: "Fetch data", difficulty: 2, description: "Fetch data from an API with error handling.", requirements: ["Use fetch", "Check response.ok", "Handle errors"], starterCode: { javascript: "async function getData(url) {\n  // Fetch with error handling\n  try {\n    const response = await fetch(url);\n    // Check ok and return JSON\n  } catch (error) {\n    // Handle network error\n  }\n}" }, hints: ["if (!response.ok) throw error", "return await response.json()"], solution: { javascript: "async function getData(url) {\n  try {\n    const response = await fetch(url);\n    if (!response.ok) {\n      throw new Error(`HTTP ${response.status}`);\n    }\n    return await response.json();\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}" }, solutionExplanation: "Check response.ok for HTTP errors, try/catch for network errors." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js36-q1", type: "mcq", question: "Does fetch reject on 404?", options: ["Yes", "No", "Only with throw", "Depends"], correctAnswer: 1, explanation: "Fetch doesn't reject on HTTP errors. Check response.ok manually.", difficulty: 2 }] },
  cheatSheet: [{ label: "GET", value: "fetch(url)" }, { label: "POST", value: "fetch(url, { method: 'POST', body })" }, { label: "Check ok", value: "if (!response.ok)" }],
  partLabel: "Part 4: Async JavaScript",
};

export const jsCh37: Chapter = {
  id: "js-ch-37",
  number: 37,
  title: "Working with REST APIs",
  subtitle: "Real-world data fetching patterns.",
  difficulty: "Intermediate",
  estimatedMinutes: 60,
  xpReward: 170,
  prerequisites: ["js-ch-36"],
  learningObjectives: [
    "Understand REST principles.",
    "Build API client functions.",
    "Handle pagination.",
    "Work with query parameters.",
    "Cache API responses.",
  ],
  sections: [
    {
      id: "js37-s1",
      title: "REST Basics",
      whyItMatters: "REST is the standard for designing web APIs. Understanding it lets you work with any REST API.",
      content: "REST uses HTTP methods:\n\n- GET: Retrieve resource\n- POST: Create resource\n- PUT/PATCH: Update resource\n- DELETE: Remove resource\n\nTypical REST endpoints:\n\n\`\`\`\nGET    /api/users        # List users\nGET    /api/users/123    # Get user 123\nPOST   /api/users        # Create user\nPUT    /api/users/123    # Update user 123\nDELETE /api/users/123    # Delete user 123\n\`\`\`",
    },
    {
      id: "js37-s2",
      title: "API Client",
      whyItMatters: "Creating reusable API client functions reduces code duplication.",
      content: "Create API client:\n\n\`\`\`javascript\nconst api = {\n  baseUrl: '/api',\n  \n  async get(endpoint) {\n    const response = await fetch(this.baseUrl + endpoint);\n    if (!response.ok) throw new Error(response.statusText);\n    return response.json();\n  },\n  \n  async post(endpoint, data) {\n    const response = await fetch(this.baseUrl + endpoint, {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify(data)\n    });\n    if (!response.ok) throw new Error(response.statusText);\n    return response.json();\n  }\n};\n\nconst users = await api.get('/users');\n\`\`\`",
    },
    {
      id: "js37-s3",
      title: "Query Parameters",
      whyItMatters: "Query parameters filter, sort, and paginate API responses.",
      content: "URLSearchParams for query strings:\n\n\`\`\`javascript\nconst params = new URLSearchParams({\n  page: 1,\n  limit: 10,\n  sort: 'name'\n});\n\nfetch(`/api/users?${params}`);\n// /api/users?page=1&limit=10&sort=name\n\`\`\`\n\nManual construction:\n\n\`\`\`javascript\nconst url = new URL('/api/users', window.location.origin);\nurl.searchParams.set('page', '1');\nurl.searchParams.set('limit', '10');\n\nfetch(url);\n\`\`\`",
    },
  ],
  exercises: [
    { id: "js37-ex1", title: "Build API client", difficulty: 2, description: "Create a simple API client with GET and POST methods.", requirements: ["Base URL", "GET method", "POST method", "Error handling"], starterCode: { javascript: "const api = {\n  baseUrl: '/api',\n  \n  async get(endpoint) {\n    // Implement GET\n  },\n  \n  async post(endpoint, data) {\n    // Implement POST\n  }\n};\n\n// Use: api.get('/users')" }, hints: ["Use fetch", "Check response.ok", "Return JSON"], solution: { javascript: "const api = {\n  baseUrl: '/api',\n  \n  async get(endpoint) {\n    const response = await fetch(this.baseUrl + endpoint);\n    if (!response.ok) throw new Error('GET failed');\n    return response.json();\n  },\n  \n  async post(endpoint, data) {\n    const response = await fetch(this.baseUrl + endpoint, {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify(data)\n    });\n    if (!response.ok) throw new Error('POST failed');\n    return response.json();\n  }\n};" }, solutionExplanation: "API client encapsulates fetch logic with error handling." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js37-q1", type: "mcq", question: "Which method creates a resource?", options: ["GET", "POST", "PUT", "DELETE"], correctAnswer: 1, explanation: "POST is used to create new resources in REST APIs.", difficulty: 1 }] },
  cheatSheet: [{ label: "GET", value: "Retrieve" }, { label: "POST", value: "Create" }, { label: "PUT", value: "Update" }],
  partLabel: "Part 4: Async JavaScript",
};

export const jsCh38: Chapter = {
  id: "js-ch-38",
  number: 38,
  title: "Error Handling in Async Code",
  subtitle: "Try/catch, error boundaries, and best practices.",
  difficulty: "Advanced",
  estimatedMinutes: 50,
  xpReward: 160,
  prerequisites: ["js-ch-35"],
  learningObjectives: [
    "Use try/catch with async/await.",
    "Handle unhandled rejections.",
    "Create custom error types.",
    "Use error boundaries (React).",
    "Log errors effectively.",
  ],
  sections: [
    {
      id: "js38-s1",
      title: "Try/Catch Patterns",
      whyItMatters: "Proper error handling prevents crashes and provides useful debugging information.",
      content: "Wrap async operations:\n\n\`\`\`javascript\nasync function operation() {\n  try {\n    const data = await fetchData();\n    processData(data);\n  } catch (error) {\n    if (error instanceof NetworkError) {\n      console.error('Network issue:', error);\n    } else if (error instanceof ValidationError) {\n      console.error('Invalid data:', error);\n    } else {\n      console.error('Unknown error:', error);\n    }\n  }\n}\n\`\`\`\n\nDon't silently catch errors:\n\n\`\`\`javascript\n// Bad\ntry {\n  await riskyOperation();\n} catch (e) { }\n\n// Good\ntry {\n  await riskyOperation();\n} catch (e) {\n  console.error(e);\n  throw e; // Re-throw if needed\n}\n\`\`\`",
    },
    {
      id: "js38-s2",
      title: "Unhandled Rejections",
      whyItMatters: "Unhandled Promise rejections can crash Node.js apps and cause issues in browsers.",
      content: "Global error handler:\n\n\`\`\`javascript\nprocess.on('unhandledRejection', (reason, promise) => {\n  console.error('Unhandled rejection:', reason);\n});\n\n// Browser\nwindow.addEventListener('unhandledrejection', (event) => {\n  console.error('Unhandled rejection:', event.reason);\n  event.preventDefault();\n});\n\`\`\`\n\nAlways use .catch() or try/catch:\n\n\`\`\`javascript\n// Bad\nfetch('/data').then(res => res.json());\n\n// Good\nfetch('/data')\n  .then(res => res.json())\n  .catch(err => console.error(err));\n\`\`\`",
    },
    {
      id: "js38-s3",
      title: "Custom Errors",
      whyItMatters: "Custom errors let you distinguish between different error types.",
      content: "Create custom error class:\n\n\`\`\`javascript\nclass APIError extends Error {\n  constructor(message, status) {\n    super(message);\n    this.name = 'APIError';\n    this.status = status;\n  }\n}\n\nthrow new APIError('Not found', 404);\n\`\`\`\n\nUse instanceof to check type:\n\n\`\`\`javascript\ntry {\n  await apiCall();\n} catch (error) {\n  if (error instanceof APIError) {\n    handleAPIError(error);\n  } else {\n    handleGenericError(error);\n  }\n}\n\`\`\`",
    },
  ],
  exercises: [
    { id: "js38-ex1", title: "Handle errors", difficulty: 2, description: "Add proper error handling to async function.", requirements: ["Use try/catch", "Check error type", "Log error"], starterCode: { javascript: "async function processData() {\n  // Add try/catch with error handling\n  const data = await fetchData();\n  return transform(data);\n}" }, hints: ["Wrap await in try", "Catch and log error"], solution: { javascript: "async function processData() {\n  try {\n    const data = await fetchData();\n    return transform(data);\n  } catch (error) {\n    console.error('Failed to process data:', error);\n    throw error;\n  }\n}" }, solutionExplanation: "try/catch catches errors, logging provides debugging info." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js38-q1", type: "mcq", question: "What catches unhandled rejections?", options: ["try/catch", "unhandledrejection event", "window.onerror", "console.error"], correctAnswer: 1, explanation: "The unhandledrejection event catches Promise rejections without .catch().", difficulty: 2 }] },
  cheatSheet: [{ label: "try/catch", value: "try { await } catch {}" }, { label: "Global handler", value: "process.on('unhandledRejection')" }, { label: "Custom error", value: "class extends Error" }],
  partLabel: "Part 4: Async JavaScript",
};

export const jsCh39: Chapter = {
  id: "js-ch-39",
  number: 39,
  title: "Web Workers",
  subtitle: "Parallel JavaScript execution.",
  difficulty: "Advanced",
  estimatedMinutes: 60,
  xpReward: 180,
  prerequisites: ["js-ch-31"],
  learningObjectives: [
    "Understand Web Workers.",
    "Create and use workers.",
    "Communicate with workers.",
    "Handle worker errors.",
    "Know worker limitations.",
  ],
  sections: [
    {
      id: "js39-s1",
      title: "Web Worker Basics",
      whyItMatters: "Web Workers enable parallel execution, keeping the UI responsive during heavy computations.",
      realWorldAnalogy: "Web Workers are like hiring an assistant. They work independently while you continue your main tasks.",
      content: "Workers run in separate threads:\n\n\`\`\`javascript\n// worker.js\nself.onmessage = function(e) {\n  const result = heavyComputation(e.data);\n  self.postMessage(result);\n};\n\n// main.js\nconst worker = new Worker('worker.js');\n\nworker.onmessage = function(e) {\n  console.log('Result:', e.data);\n};\n\nworker.postMessage({ input: 42 });\n\`\`\`\n\nWorkers cannot access DOM, window, or document.",
    },
    {
      id: "js39-s2",
      title: "Worker Communication",
      whyItMatters: "Communication between main thread and worker is message-based.",
      content: "Send messages with postMessage:\n\n\`\`\`javascript\n// Main thread\nworker.postMessage({ type: 'compute', value: 100 });\n\n// Worker\nself.onmessage = function(e) {\n  const { type, value } = e.data;\n  if (type === 'compute') {\n    const result = value * 2;\n    self.postMessage({ type: 'result', value: result });\n  }\n};\n\`\`\`\n\nTransferable objects for performance:\n\n\`\`\`javascript\nconst buffer = new ArrayBuffer(1024);\nworker.postMessage(buffer, [buffer]); // Transfers ownership\n\`\`\`",
    },
    {
      id: "js39-s3",
      title: "Worker Patterns",
      whyItMatters: "Common patterns for using workers effectively.",
      content: "Inline worker with Blob:\n\n\`\`\`javascript\nconst workerCode = `\n  self.onmessage = function(e) {\n    self.postMessage(e.data * 2);\n  };\n`;\n\nconst blob = new Blob([workerCode], { type: 'application/javascript' });\nconst worker = new Worker(URL.createObjectURL(blob));\n\`\`\`\n\nTerminate worker:\n\n\`\`\`javascript\nworker.terminate();\n\`\`\`\n\nError handling:\n\n\`\`\`javascript\nworker.onerror = function(error) {\n  console.error('Worker error:', error.message);\n};\n\`\`\`",
    },
  ],
  exercises: [
    { id: "js39-ex1", title: "Create worker", difficulty: 3, description: "Create a simple Web Worker for computation.", requirements: ["Create worker", "Send message", "Receive result"], starterCode: { javascript: "// Create a worker that doubles numbers\nconst workerCode = `\n  self.onmessage = function(e) {\n    // Double the number and send back\n  };\n`;\n\nconst blob = new Blob([workerCode], { type: 'application/javascript' });\nconst worker = new Worker(URL.createObjectURL(blob));\n\n// Test\nworker.postMessage(5);\nworker.onmessage = (e) => console.log(e.data); // Should be 10" }, hints: ["Use e.data", "self.postMessage(result)"], solution: { javascript: "const workerCode = `\n  self.onmessage = function(e) {\n    const result = e.data * 2;\n    self.postMessage(result);\n  };\n`;\n\nconst blob = new Blob([workerCode], { type: 'application/javascript' });\nconst worker = new Worker(URL.createObjectURL(blob));\n\nworker.postMessage(5);\nworker.onmessage = (e) => console.log(e.data); // 10" }, solutionExplanation: "Worker receives message, computes, sends result back." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js39-q1", type: "mcq", question: "Can workers access DOM?", options: ["Yes", "No", "Only read", "With permission"], correctAnswer: 1, explanation: "Workers run in a separate context and cannot access DOM or window.", difficulty: 1 }] },
  cheatSheet: [{ label: "Create", value: "new Worker('file.js')" }, { label: "Send", value: "worker.postMessage(data)" }, { label: "Receive", value: "worker.onmessage = (e) => {}" }],
  partLabel: "Part 4: Async JavaScript",
};

export const jsCh40: Chapter = {
  id: "js-ch-40",
  number: 40,
  title: "Async Patterns & Best Practices",
  subtitle: "Common async patterns and anti-patterns.",
  difficulty: "Advanced",
  estimatedMinutes: 60,
  xpReward: 180,
  prerequisites: ["js-ch-35"],
  learningObjectives: [
    "Recognize async anti-patterns.",
    "Use proper error handling.",
    "Implement timeout patterns.",
    "Retry failed requests.",
    "Debounce and throttle async calls.",
  ],
  sections: [
    {
      id: "js40-s1",
      title: "Anti-Patterns",
      whyItMatters: "Avoiding common async anti-patterns prevents bugs and performance issues.",
      content: "Anti-pattern: Forgotten await:\n\n\`\`\`javascript\n// Bad\nfunction getData() {\n  fetch('/data'); // Promise not awaited\n}\n\n// Good\nasync function getData() {\n  await fetch('/data');\n}\n\`\`\`\n\nAnti-pattern: Sequential parallel operations:\n\n\`\`\`javascript\n// Bad - slow\nconst a = await fetch('/a');\nconst b = await fetch('/b');\n\n// Good - fast\nconst [a, b] = await Promise.all([fetch('/a'), fetch('/b')]);\n\`\`\`\n\nAnti-pattern: Ignoring errors:\n\n\`\`\`javascript\n// Bad\nfetch('/data').then(res => res.json()); // No .catch()\n\`\`\`",
    },
    {
      id: "js40-s2",
      title: "Timeout Pattern",
      whyItMatters: "Timeouts prevent hanging requests and improve user experience.",
      content: "Promise.race timeout:\n\n\`\`\`javascript\nfunction withTimeout(promise, ms) {\n  const timeout = new Promise((_, reject) => \n    setTimeout(() => reject(new Error('Timeout')), ms)\n  );\n  \n  return Promise.race([promise, timeout]);\n}\n\nwithTimeout(fetch('/data'), 5000)\n  .then(data => console.log(data))\n  .catch(err => console.error(err));\n\`\`\`\n\nAbortController for fetch:\n\n\`\`\`javascript\nconst controller = new AbortController();\n\nsetTimeout(() => controller.abort(), 5000);\n\nfetch('/data', { signal: controller.signal })\n  .then(data => console.log(data))\n  .catch(err => console.error('Aborted', err));\n\`\`\`",
    },
    {
      id: "js40-s3",
      title: "Retry Pattern",
      whyItMatters: "Retrying failed requests handles transient network issues.",
      content: "Exponential backoff retry:\n\n\`\`\`javascript\nasync function fetchWithRetry(url, maxRetries = 3) {\n  for (let i = 0; i < maxRetries; i++) {\n    try {\n      const response = await fetch(url);\n      if (response.ok) return response;\n    } catch (error) {\n      if (i === maxRetries - 1) throw error;\n      await new Promise(r => setTimeout(r, 1000 * Math.pow(2, i)));\n    }\n  }\n}\n\`\`\`\n\nWaits longer between retries: 1s, 2s, 4s...",
    },
  ],
  exercises: [
    { id: "js40-ex1", title: "Implement timeout", difficulty: 2, description: "Add timeout to async operation.", requirements: ["Use Promise.race", "Create timeout Promise", "Handle timeout"], starterCode: { javascript: "async function fetchWithTimeout(url, timeoutMs) {\n  // Implement timeout using Promise.race\n  const data = await fetch(url);\n  return data.json();\n}" }, hints: ["Create timeout Promise", "Race with fetch"], solution: { javascript: "async function fetchWithTimeout(url, timeoutMs) {\n  const timeout = new Promise((_, reject) => \n    setTimeout(() => reject(new Error('Timeout')), timeoutMs)\n  );\n  \n  const response = await Promise.race([fetch(url), timeout]);\n  return response.json();\n}" }, solutionExplanation: "Promise.race resolves with whichever settles first." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "js40-q1", type: "mcq", question: "Which is an async anti-pattern?", options: ["Parallel execution", "Sequential await", "Error handling", "Timeout"], correctAnswer: 1, explanation: "Sequential await of independent operations wastes time. Use Promise.all for parallel execution.", difficulty: 2 }] },
  cheatSheet: [{ label: "Timeout", value: "Promise.race(promise, timeout)" }, { label: "Retry", value: "Exponential backoff" }, { label: "Parallel", value: "Promise.all()" }],
  partLabel: "Part 4: Async JavaScript",
};
