import type { Chapter } from "./types";

// ============================================================================
// JS CHAPTER 8 — Functions Part 1
// ============================================================================
export const jsCh08: Chapter = {
  id: "js-ch-08",
  number: 8,
  title: "Functions — Part 1: Declarations, Parameters & Return",
  subtitle: "The smallest unit of reusable logic. Get the basics right and everything else gets easier.",
  difficulty: "Beginner",
  estimatedMinutes: 40,
  xpReward: 140,
  prerequisites: ["js-ch-07"],
  partLabel: "Part 1: JS Absolute Basics",
  learningObjectives: [
    "Write function declarations and function expressions and explain the difference.",
    "Pass arguments by value and by reference.",
    "Use default parameter values, rest parameters, and the arguments object.",
    "Return values from functions, including early returns.",
    "Recognize when a function should and shouldn't return undefined.",
  ],
  sections: [
    {
      id: "js08-s1",
      title: "Why Functions Exist",
      whyItMatters: "Without functions, every program is a long, unreadable list of statements. Functions let you name a chunk of behavior, reuse it, and reason about it independently.",
      realWorldAnalogy: "A function is like a recipe. You write it once with the ingredients (parameters) and steps (body). Then anyone can 'call' it whenever they want to make the dish, and the recipe doesn't care who's cooking.",
      content: `Imagine writing a program that calculates tax for an order. Without functions, every place that needs a tax calculation has to repeat the same lines. If the tax rate changes, you hunt down every copy. Functions solve this: you write the calculation once, give it a name, and call it from anywhere.

\`\`\`
function calculateTax(amount) {
  return amount * 0.20;
}

const total1 = calculateTax(100);   // 20
const total2 = calculateTax(50);    // 10
\`\`\`

Three things happen here:

1. **Definition** — \`function calculateTax(amount) { ... }\` creates a function and gives it a name.
2. **Call (invocation)** — \`calculateTax(100)\` runs the function with \`amount = 100\`.
3. **Return** — \`return amount * 0.20\` produces a value the caller can use.

Functions transform inputs (parameters) into outputs (return values). The classic mathematical idea — y = f(x) — applies directly. **The cleanest functions take inputs, produce outputs, and don't touch anything else** (no global variables, no I/O). These are called *pure functions* and they're easy to test, easy to reason about, and easy to reuse.`,
      callouts: [
        { type: "tip", title: "Functions name behavior", content: "When you find yourself copy-pasting more than 3 lines, stop and consider extracting them into a function. Naming the chunk often clarifies what it actually does." },
      ],
    },
    {
      id: "js08-s2",
      title: "Function Declarations vs Expressions",
      whyItMatters: "JS has multiple ways to create functions. Knowing the difference between declarations and expressions explains the most-asked JS interview question (hoisting).",
      content: `**Function declaration** — uses the \`function\` keyword followed by a name:

\`\`\`
function greet(name) {
  return "Hello, " + name;
}

greet("Alice");   // works
\`\`\`

Declarations are **hoisted**: the JS engine knows about them before any code runs, so you can call them BEFORE they appear in the file.

\`\`\`
greet("Alice");   // works! prints Hello, Alice

function greet(name) {
  return "Hello, " + name;
}
\`\`\`

**Function expression** — a function used as a value, often assigned to a variable:

\`\`\`
const greet = function(name) {
  return "Hello, " + name;
};

greet("Alice");   // works
\`\`\`

Function expressions are **NOT hoisted** as functions. The variable \`greet\` is hoisted (with \`var\`) or in the temporal dead zone (with \`let\`/\`const\`), but its value isn't assigned until that line runs.

\`\`\`
greet("Alice");                     // ❌ ReferenceError or TypeError

const greet = function(name) {       // value not assigned yet
  return "Hello, " + name;
};
\`\`\`

**Arrow function** — a more concise expression syntax (covered in Part 2):

\`\`\`
const greet = (name) => "Hello, " + name;
\`\`\`

**Which to use:**

- **Function declarations** for top-level utility functions you call from many places. Hoisting lets you organize code logically (high-level code at the top, helpers at the bottom).
- **Function expressions / arrow functions** when assigning a function to a variable, passing as an argument, or defining a method on an object.

Modern style guides (Airbnb, Standard) lean toward arrow functions for everything except top-level utility functions. Either is fine — be consistent.`,
      callouts: [
        { type: "info", title: "Hoisting in one sentence", content: "Function declarations are usable everywhere in their scope. Function expressions are only usable AFTER the line where they're assigned." },
        { type: "common-mistake", title: "Calling a const-bound function before it's defined", content: "If you see 'Cannot access X before initialization', you're trying to call a const-assigned function before that line runs. Move the call below or use a function declaration." },
      ],
      codeExamples: [
        {
          id: "js08-s2-ex1",
          title: "Hoisting comparison",
          description: "Try running each call and see which one throws.",
          code: {
            html: `<p>Open the console</p>`,
            javascript: `// Declaration — hoisted, works\nconsole.log(declared(2));   // 4\n\nfunction declared(x) {\n  return x * 2;\n}\n\n// Expression — NOT hoisted\ntry {\n  console.log(expressed(2));   // throws\n} catch (e) {\n  console.log("Caught:", e.message);\n}\n\nconst expressed = function(x) {\n  return x * 2;\n};\n\n// Now it works\nconsole.log(expressed(2));   // 4`,
          },
          explanation: "declared() runs fine before its definition because declarations are hoisted. expressed() throws ReferenceError because const-bound function expressions can't be called until their line runs.",
          tryItPrompt: "Convert the declaration to a const arrow function and watch the first call fail too.",
        },
      ],
    },
    {
      id: "js08-s3",
      title: "Parameters and Arguments",
      whyItMatters: "Parameters are how data flows into a function. Modern JS gives you several powerful ways to handle them.",
      content: `**Parameters** are the names listed in the function definition. **Arguments** are the actual values passed when called. They're often confused but the distinction matters.

\`\`\`
function add(a, b) {           // a, b are parameters
  return a + b;
}

add(2, 3);                     // 2 and 3 are arguments
\`\`\`

**Default parameter values** — set when the caller passes nothing (or undefined):

\`\`\`
function greet(name = "stranger") {
  return "Hello, " + name;
}

greet();          // "Hello, stranger"
greet("Alice");   // "Hello, Alice"
greet(undefined); // "Hello, stranger" (undefined triggers default)
greet(null);      // "Hello, null" (null does NOT trigger default!)
\`\`\`

**Defaults can reference earlier parameters:**

\`\`\`
function range(start = 0, end = start + 10) {
  return [start, end];
}
range();         // [0, 10]
range(5);        // [5, 15]
range(5, 20);    // [5, 20]
\`\`\`

**Rest parameters** — collect all remaining arguments into an array. Marked with \`...\`:

\`\`\`
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

sum(1, 2, 3);          // 6
sum(1, 2, 3, 4, 5);    // 15
sum();                 // 0
\`\`\`

Rest must be the LAST parameter. You can have other parameters before it:

\`\`\`
function logFirst(label, ...rest) {
  console.log(label, "→", rest);
}

logFirst("nums", 1, 2, 3);    // "nums" → [1, 2, 3]
\`\`\`

**The legacy \`arguments\` object** — inside any non-arrow function, \`arguments\` is an array-like object holding all passed arguments:

\`\`\`
function legacy() {
  console.log(arguments.length);  // 3
  console.log(arguments[0]);      // 'a'
}
legacy('a', 'b', 'c');
\`\`\`

\`arguments\` is older, NOT a real array (no .map, .filter), and **doesn't work in arrow functions**. Modern code uses rest (\`...args\`) instead. Recognize \`arguments\` in old code; reach for rest parameters in new code.`,
      callouts: [
        { type: "tip", title: "Defaults trigger only on undefined", content: "Passing null, 0, false, or '' does NOT trigger the default — only undefined (or omitting) does." },
        { type: "common-mistake", title: "Rest must be last", content: "function f(...args, last) { ... } is a syntax error. Rest collects everything remaining, so it has to be the final parameter." },
      ],
      codeExamples: [
        {
          id: "js08-s3-ex1",
          title: "Defaults + rest in action",
          description: "A flexible API using both modern parameter features.",
          code: {
            javascript: `function buildMessage(greeting = "Hello", ...names) {\n  if (names.length === 0) return greeting + ", world!";\n  return greeting + ", " + names.join(" and ") + "!";\n}\n\nconsole.log(buildMessage());                      // Hello, world!\nconsole.log(buildMessage("Hi"));                  // Hi, world!\nconsole.log(buildMessage("Hi", "Alice"));         // Hi, Alice!\nconsole.log(buildMessage("Hi", "Alice", "Bob"));  // Hi, Alice and Bob!`,
          },
          explanation: "Default 'Hello' fires when no args. Rest collects all the names into an array. The function gracefully handles any number of inputs.",
          tryItPrompt: "Add a third name and see them joined.",
        },
      ],
    },
    {
      id: "js08-s4",
      title: "Pass by Value vs Pass by Reference",
      whyItMatters: "JS passes primitives one way and objects another. Confusing them produces bugs that look like 'why did my array change?!'",
      content: `**Primitives** (number, string, boolean, null, undefined, symbol, bigint) are passed **by value**. The function gets a copy. Changing the parameter inside the function does NOT affect the original variable outside.

\`\`\`
function double(n) {
  n = n * 2;       // changes only the local copy
}

let x = 5;
double(x);
console.log(x);    // still 5
\`\`\`

**Objects** (and arrays, which are objects) are passed **by reference** — technically, by value of the reference. The function gets the same reference, so mutating the object's contents affects the original.

\`\`\`
function addItem(arr) {
  arr.push("new");      // mutates the original array
}

const items = ["a", "b"];
addItem(items);
console.log(items);    // ["a", "b", "new"]  ← changed!
\`\`\`

But **reassigning the parameter** inside the function does NOT affect the original variable:

\`\`\`
function reassign(arr) {
  arr = ["different"];  // local reassignment only
}

const items = ["a", "b"];
reassign(items);
console.log(items);    // still ["a", "b"]
\`\`\`

This trips beginners up: the reference is copied, so reassigning the local copy points it elsewhere — but the original variable still points to the original object.

**Avoid mutating arguments unless that's explicitly the function's purpose.** Functions that mutate are called "impure" and are harder to reason about. Prefer returning a new object/array:

\`\`\`
// MUTATES (often a bug source)
function addItemMut(arr, item) {
  arr.push(item);
  return arr;
}

// PURE — returns new array, leaves original alone
function addItemPure(arr, item) {
  return [...arr, item];
}

const a = [1, 2];
const b = addItemPure(a, 3);
console.log(a);   // [1, 2]    unchanged
console.log(b);   // [1, 2, 3]
\`\`\`

The pure version is easier to test, easier to debug, and works better with React/Redux and other immutability-based patterns.`,
      callouts: [
        { type: "warning", title: "Object mutation surprises", content: "If you pass an object to a function and the function changes a property, the change persists outside. This is the cause of many 'spooky' bugs." },
        { type: "pro-tip", title: "Prefer pure functions", content: "Returning a new value is almost always better than mutating an argument. Use spread (...) and Object.assign to copy." },
      ],
    },
    {
      id: "js08-s5",
      title: "Return Values and Early Returns",
      whyItMatters: "Returning the right value at the right time is the most important thing a function does. Most function bugs are 'forgot to return' bugs.",
      content: `Every function returns a value. If you don't write \`return\`, the function returns \`undefined\`.

\`\`\`
function noReturn() {
  const x = 5;
  // implicit return undefined
}
console.log(noReturn());   // undefined
\`\`\`

\`return\` immediately exits the function and produces a value:

\`\`\`
function isAdult(age) {
  if (age >= 18) return true;
  return false;
}
\`\`\`

Or more concisely (and idiomatically):

\`\`\`
function isAdult(age) {
  return age >= 18;
}
\`\`\`

**Early returns** (also called "guard clauses") are a powerful pattern for handling edge cases first and keeping the main logic flat:

\`\`\`
// Nested — harder to read
function calculate(user) {
  if (user) {
    if (user.isActive) {
      if (user.balance > 0) {
        return user.balance * 0.1;
      } else {
        return 0;
      }
    } else {
      return null;
    }
  } else {
    return null;
  }
}

// Early returns — much cleaner
function calculate(user) {
  if (!user) return null;
  if (!user.isActive) return null;
  if (user.balance <= 0) return 0;
  return user.balance * 0.1;
}
\`\`\`

The second version reads top-to-bottom: handle the bad cases first, then continue with the happy path. Senior developers strongly prefer this style.

**Returning multiple values** — JS functions can only return one thing, but you can return an object or array:

\`\`\`
function divideWithRemainder(a, b) {
  return {
    quotient: Math.floor(a / b),
    remainder: a % b,
  };
}

const { quotient, remainder } = divideWithRemainder(17, 5);
\`\`\`

This pattern is everywhere in modern JS. Hooks like React's \`useState\` return arrays for the same reason.

**The semicolon trap with return.** Don't put a newline immediately after \`return\` — JS auto-inserts a semicolon and your function returns undefined:

\`\`\`
function buggy() {
  return                  // ← ASI inserts ; here!
    { value: 42 };        // unreachable
}
buggy();   // undefined, not { value: 42 }
\`\`\`

Always keep the value on the same line as \`return\`, or wrap in parens for multi-line returns:

\`\`\`
function safe() {
  return (
    value > 100
      ? "big"
      : "small"
  );
}
\`\`\``,
      callouts: [
        { type: "pro-tip", title: "Early returns over nested if", content: "Guard clauses (early returns for bad cases) are dramatically more readable than deeply nested if/else." },
        { type: "warning", title: "Never newline after return", content: "Automatic Semicolon Insertion will quietly turn `return\\n{ x: 1 }` into `return; { x: 1 }`. Keep return on the same line as the value." },
      ],
      microExercise: {
        instruction: "Write a function `firstWord(str)` that returns the first word of a string, or null if the string is empty.",
        starterCode: { javascript: `function firstWord(str) {\n  // your code\n}\n\nconsole.log(firstWord('Hello world'));   // 'Hello'\nconsole.log(firstWord(''));              // null` },
        hint: "Use an early return for the empty case. Then split on space and return the first element.",
        solution: { javascript: `function firstWord(str) {\n  if (!str) return null;\n  return str.split(' ')[0];\n}\n\nconsole.log(firstWord('Hello world'));   // 'Hello'\nconsole.log(firstWord(''));              // null` },
      },
    },
  ],
  exercises: [
    {
      id: "js08-ex1",
      title: "Greeting function with default",
      difficulty: 1,
      description: "Write a function `greet(name)` that returns 'Hello, [name]!' but defaults to 'Hello, friend!' if no name is passed.",
      requirements: [
        "Function uses a default parameter",
        "Returns the formatted string",
        "Works with no argument, with an argument, and with undefined",
      ],
      starterCode: { javascript: `function greet(/* parameter with default */) {\n  // return greeting\n}\n\nconsole.log(greet());          // 'Hello, friend!'\nconsole.log(greet('Alice'));   // 'Hello, Alice!'` },
      hints: [
        "function greet(name = 'friend') { ... }",
        "Use template literals or string concatenation",
      ],
      solution: { javascript: `function greet(name = 'friend') {\n  return \`Hello, \${name}!\`;\n}\n\nconsole.log(greet());          // 'Hello, friend!'\nconsole.log(greet('Alice'));   // 'Hello, Alice!'` },
      solutionExplanation: "Default parameter activates when no value (or undefined) is passed. Template literal builds the string cleanly.",
    },
    {
      id: "js08-ex2",
      title: "Sum any number of arguments",
      difficulty: 2,
      description: "Write a function `sumAll(...numbers)` that returns the sum of any number of arguments. Return 0 if no arguments.",
      requirements: [
        "Use rest parameters (...numbers)",
        "Use Array reduce or a loop",
        "Returns 0 when called with no arguments",
      ],
      starterCode: { javascript: `function sumAll(/* rest parameter */) {\n  // sum and return\n}\n\nconsole.log(sumAll());                 // 0\nconsole.log(sumAll(5));                // 5\nconsole.log(sumAll(1, 2, 3, 4));       // 10` },
      hints: [
        "function sumAll(...nums) { ... }",
        "nums.reduce((sum, n) => sum + n, 0)",
        "The 0 in reduce is the starting value (handles empty case)",
      ],
      solution: { javascript: `function sumAll(...numbers) {\n  return numbers.reduce((sum, n) => sum + n, 0);\n}\n\nconsole.log(sumAll());                 // 0\nconsole.log(sumAll(5));                // 5\nconsole.log(sumAll(1, 2, 3, 4));       // 10` },
      solutionExplanation: "Rest parameter collects all args into an array. reduce sums them with 0 as the initial value, which handles the empty-args case.",
    },
    {
      id: "js08-ex3",
      title: "Pure addItem function",
      difficulty: 3,
      description: "Write `addItem(arr, item)` that returns a NEW array with the item appended, leaving the original array unchanged.",
      requirements: [
        "Does NOT mutate the original array",
        "Returns a new array including the appended item",
        "Use spread syntax",
      ],
      starterCode: { javascript: `function addItem(arr, item) {\n  // return new array, don't mutate\n}\n\nconst original = [1, 2, 3];\nconst result = addItem(original, 4);\n\nconsole.log(original);   // [1, 2, 3]   (unchanged)\nconsole.log(result);     // [1, 2, 3, 4]` },
      hints: [
        "[...arr, item] creates a new array",
        "Don't use arr.push() — that mutates",
      ],
      solution: { javascript: `function addItem(arr, item) {\n  return [...arr, item];\n}\n\nconst original = [1, 2, 3];\nconst result = addItem(original, 4);\n\nconsole.log(original);   // [1, 2, 3]\nconsole.log(result);     // [1, 2, 3, 4]` },
      solutionExplanation: "Spread copies all elements of arr into a new array, then item is appended. The original arr is never touched — pure function.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "js08-q1", type: "mcq", question: "Which function form is hoisted (callable before its definition)?", options: ["function declaration", "function expression assigned to const", "Arrow function assigned to const", "All are hoisted equally"], correctAnswer: 0, explanation: "Function declarations are fully hoisted. Function expressions and arrow functions assigned to variables only become callable after their line executes.", difficulty: 2 },
      { id: "js08-q2", type: "code-output", question: "What does this print?", code: `function f(x) { x = x * 2; }\nlet n = 5;\nf(n);\nconsole.log(n);`, options: ["10", "5", "undefined", "NaN"], correctAnswer: 1, explanation: "Numbers are passed by value. Reassigning x inside f doesn't affect n outside. Output: 5.", difficulty: 2 },
      { id: "js08-q3", type: "code-output", question: "What does this print?", code: `function f(arr) { arr.push(99); }\nconst nums = [1, 2];\nf(nums);\nconsole.log(nums);`, options: ["[1, 2]", "[1, 2, 99]", "[99, 1, 2]", "Error"], correctAnswer: 1, explanation: "Arrays are passed by reference. .push mutates the original array. Output: [1, 2, 99].", difficulty: 2 },
      { id: "js08-q4", type: "mcq", question: "When does a default parameter value activate?", options: ["When the argument is null", "When the argument is undefined or omitted", "When the argument is 0 or false", "When the argument is empty string"], correctAnswer: 1, explanation: "Defaults trigger only on undefined (or no argument). null, 0, false, '' all skip the default.", difficulty: 2 },
      { id: "js08-q5", type: "spot-the-bug", question: "What's wrong here?", code: `function getUser() {\n  return\n    { name: 'Alex' };\n}`, options: ["Missing semicolons", "Newline after return causes ASI to insert ; — function returns undefined", "Object can't be returned", "Need parentheses"], correctAnswer: 1, explanation: "Automatic Semicolon Insertion turns this into 'return;' followed by an unreachable object. Always keep return value on same line.", difficulty: 3 },
      { id: "js08-q6", type: "mcq", question: "What's the rest parameter syntax?", options: ["function f(...args)", "function f(*args)", "function f(args[])", "function f(args = [])"], correctAnswer: 0, explanation: "...args (three dots before the name, must be last param) collects all remaining arguments into a real array.", difficulty: 1 },
      { id: "js08-q7", type: "true-false", question: "A function that doesn't include `return` returns undefined.", options: ["True", "False"], correctAnswer: 0, explanation: "True. Every function returns something — explicit value, or implicit undefined.", difficulty: 1 },
      { id: "js08-q8", type: "mcq", question: "Which is the cleaner pattern?", options: ["Deeply nested if/else", "Early returns (guard clauses)", "Try/catch around everything", "Storing results in global variables"], correctAnswer: 1, explanation: "Early returns flatten nesting and put edge cases up front. Senior devs strongly prefer this.", difficulty: 2 },
    ],
  },
  cheatSheet: [
    { label: "Declaration", value: "function name() { ... } (hoisted)" },
    { label: "Expression", value: "const name = function() { ... }" },
    { label: "Default param", value: "function f(x = 10)" },
    { label: "Rest param (last)", value: "function f(...args)" },
    { label: "Return", value: "return value; (else undefined)" },
    { label: "Early return", value: "if (!input) return null;" },
    { label: "Multi-return", value: "return { a, b }" },
    { label: "Avoid mutation", value: "Return new array/object" },
    { label: "Pass primitives", value: "by value (copy)" },
    { label: "Pass objects", value: "by reference (shared)" },
  ],
};

// ============================================================================
// JS CHAPTER 9 — Functions Part 2
// ============================================================================
export const jsCh09: Chapter = {
  id: "js-ch-09",
  number: 9,
  title: "Functions — Part 2: Arrow Functions, Closures & Higher-Order",
  subtitle: "Modern function syntax and the patterns that power React, Redux, and every modern JS library.",
  difficulty: "Intermediate",
  estimatedMinutes: 45,
  xpReward: 160,
  prerequisites: ["js-ch-08"],
  partLabel: "Part 1: JS Absolute Basics",
  learningObjectives: [
    "Write arrow functions with implicit and explicit return.",
    "Explain how arrow functions handle `this` differently from regular functions.",
    "Define a closure and recognize one in the wild.",
    "Use functions as arguments (callbacks) and as return values.",
    "Apply array higher-order methods (map, filter, reduce) — the most-used pattern in JS.",
  ],
  sections: [
    {
      id: "js09-s1",
      title: "Arrow Function Syntax",
      whyItMatters: "Arrow functions are the modern default for most function use cases. They're concise, behave well in callbacks, and dominate every modern JS codebase.",
      content: `Arrow functions were added in ES6 (2015). The syntax is:

\`\`\`
const add = (a, b) => a + b;

// Equivalent to:
const add = function(a, b) {
  return a + b;
};
\`\`\`

The arrow form is shorter when the function is small. Several variants:

**Single parameter — parentheses optional:**
\`\`\`
const square = x => x * x;
const square = (x) => x * x;       // also valid
\`\`\`

**No parameters — empty parens required:**
\`\`\`
const greet = () => "Hello!";
\`\`\`

**Multiple parameters — parens required:**
\`\`\`
const add = (a, b) => a + b;
\`\`\`

**Single expression — implicit return:**
\`\`\`
const double = x => x * 2;     // returns x * 2
\`\`\`

**Function body — explicit return needed:**
\`\`\`
const double = x => {
  const result = x * 2;
  return result;               // must say return
};
\`\`\`

**Returning an object literal — wrap in parens:**
\`\`\`
const makeUser = (name) => ({ name, role: "user" });
//                       ↑ parens distinguish object from block
\`\`\`

Without the parens, JS thinks \`{ name }\` is a function body block (with a label!), not an object. Always wrap object literal returns in parens.

**When to use arrow vs regular function:**

- **Arrow** for callbacks, array methods, short utility functions, event handlers.
- **Function declaration** for top-level utilities (hoisted, named in stack traces).
- **Function expression with name** when you want hoisting AND a name in stack traces.
- **Method on an object** — write \`name() { ... }\` shorthand or use \`function\` if you need its own \`this\`.

Most modern code is 80% arrow, 20% function declarations. The exception is class methods, which use the regular method syntax.`,
      callouts: [
        { type: "common-mistake", title: "Implicit return + object literal", content: "const f = () => { id: 1 }  // ← function body, returns undefined!  Use const f = () => ({ id: 1 }) instead." },
      ],
      codeExamples: [
        {
          id: "js09-s1-ex1",
          title: "Arrow forms side-by-side",
          description: "Five arrow functions doing different things.",
          code: {
            javascript: `// Implicit return\nconst sq = x => x * x;\n\n// Explicit return\nconst sqWithLog = x => {\n  console.log("squaring", x);\n  return x * x;\n};\n\n// No params\nconst rand = () => Math.random();\n\n// Multiple params\nconst dist = (a, b) => Math.abs(a - b);\n\n// Returning an object literal — note the parens\nconst pair = (a, b) => ({ a, b });\n\nconsole.log(sq(5));            // 25\nconsole.log(rand());           // random\nconsole.log(dist(10, 3));      // 7\nconsole.log(pair("x", "y"));   // { a: "x", b: "y" }`,
          },
          explanation: "All five arrow forms in one demo. Implicit return saves typing; object literals need parens to disambiguate from a function body.",
          tryItPrompt: "Add an arrow function that takes ...nums and returns their average.",
        },
      ],
    },
    {
      id: "js09-s2",
      title: "Arrow Functions and `this`",
      whyItMatters: "The biggest reason arrow functions exist: they don't have their own `this`. This eliminates a whole class of bugs that plagued pre-2015 JavaScript.",
      content: `Inside a regular function, \`this\` is determined by **how the function is called**:

- Method call: \`obj.method()\` — \`this\` is \`obj\`.
- Standalone call: \`fn()\` — \`this\` is \`undefined\` in strict mode (or \`window\` in sloppy mode).
- Constructor: \`new Fn()\` — \`this\` is the new object.

This made callbacks painful in pre-arrow JS:

\`\`\`
const counter = {
  count: 0,
  start() {
    setInterval(function() {
      this.count++;        // ❌ this is NOT counter — this is undefined!
    }, 1000);
  }
};
\`\`\`

Inside the \`function()\`, \`this\` is set fresh by the way \`setInterval\` calls it (with no context), so \`this.count\` blows up. Old fixes used \`const self = this\` or \`.bind(this)\`. Ugly.

**Arrow functions don't have their own \`this\`** — they inherit \`this\` from the surrounding scope. So:

\`\`\`
const counter = {
  count: 0,
  start() {
    setInterval(() => {
      this.count++;        // ✅ this refers to counter (from start()'s context)
      console.log(this.count);
    }, 1000);
  }
};
counter.start();
\`\`\`

This single feature eliminates 90% of the historic this-confusion. **Use arrow functions for callbacks** and \`this\` will Just Work.

**The downside:** arrow functions can't be methods on an object literal if you want \`this\` to refer to the object:

\`\`\`
const obj = {
  count: 0,
  inc: () => {
    this.count++;     // ❌ this is the OUTER scope, not obj
  },
};
obj.inc();   // doesn't work
\`\`\`

For methods, use the regular method shorthand:

\`\`\`
const obj = {
  count: 0,
  inc() {
    this.count++;     // ✅ this is obj
  },
};
\`\`\`

**Arrow functions also can't:**
- Be used as constructors with \`new\`.
- Have their own \`arguments\` object (use rest \`...args\` instead).
- Be generators.

For typical use — callbacks, utility functions, array methods — arrows are the right choice.`,
      callouts: [
        { type: "pro-tip", title: "Arrow callbacks fix `this`", content: "Whenever you pass a callback inside a class method or object method, prefer an arrow. It will inherit the outer this." },
        { type: "warning", title: "Don't arrow-method", content: "Object methods that use this should be regular function shorthand, not arrows. Arrows steal this from the surrounding scope." },
      ],
    },
    {
      id: "js09-s3",
      title: "Closures",
      whyItMatters: "Closures are how JavaScript implements private state, factory functions, and most async patterns. They're the topic of every JS interview.",
      realWorldAnalogy: "A closure is like a backpack. When a function is created, it packs up all the variables it can see in its surrounding scope. Even after the outer function returns and goes away, the inner function still carries that backpack everywhere it goes.",
      content: `A **closure** is created when an inner function references variables from an outer function's scope. The inner function "closes over" those variables — meaning it keeps access to them even after the outer function has finished running.

\`\`\`
function makeCounter() {
  let count = 0;                    // local to makeCounter

  return function() {               // inner function closes over count
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter());   // 1
console.log(counter());   // 2
console.log(counter());   // 3
\`\`\`

\`makeCounter\` finished running on the first call, but the inner function still has access to \`count\`. Each call to \`counter()\` increments the same private \`count\` variable. **No global variable, no class — just a closure.**

**Why this matters:**

1. **Private state.** Variables inside the outer function are inaccessible from outside, but persist for the inner function. This is JavaScript's primary "module" pattern — it predates classes.

\`\`\`
function makeWallet(initial = 0) {
  let balance = initial;

  return {
    deposit(amount) { balance += amount; },
    withdraw(amount) {
      if (amount > balance) throw new Error("Insufficient funds");
      balance -= amount;
    },
    getBalance() { return balance; },
  };
}

const w = makeWallet(100);
w.deposit(50);
w.withdraw(30);
console.log(w.getBalance());  // 120
console.log(w.balance);       // undefined — private!
\`\`\`

2. **Function factories.** Generate specialized functions on demand:

\`\`\`
function multiplier(by) {
  return n => n * by;
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5));   // 10
console.log(triple(5));   // 15
\`\`\`

Each returned arrow function has its own \`by\` variable in its closure.

3. **Event handlers and callbacks.** Closures let async code remember context:

\`\`\`
function setupButton(name) {
  document.getElementById("btn").addEventListener("click", () => {
    console.log("Clicked by", name);    // remembers name!
  });
}
setupButton("Alice");
\`\`\`

When the button is clicked seconds later, the handler still knows \`name\` thanks to the closure.

**The classic "loop closure" gotcha:** with \`var\` (function-scoped), all closures in a loop share the SAME variable:

\`\`\`
// BUG with var:
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Logs: 3, 3, 3   (not 0, 1, 2!)

// FIX with let (block-scoped) — each iteration gets its own i:
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Logs: 0, 1, 2   ✅
\`\`\`

This is one of the historical reasons \`let\` was added. Modern code uses \`let\` everywhere and the gotcha disappears.`,
      callouts: [
        { type: "info", title: "Closure = function + remembered scope", content: "Every function in JS technically forms a closure over its surrounding variables. We just call it 'a closure' when the inner function outlives its outer." },
        { type: "pro-tip", title: "Closures are the JS module pattern", content: "Before ES modules, closures were the only way to have private variables. They're still useful for encapsulating state without classes." },
      ],
      codeExamples: [
        {
          id: "js09-s3-ex1",
          title: "Closure-based counter",
          description: "Three independent counters using closures.",
          code: {
            javascript: `function makeCounter() {\n  let count = 0;\n  return {\n    inc: () => ++count,\n    dec: () => --count,\n    get: () => count,\n  };\n}\n\nconst a = makeCounter();\nconst b = makeCounter();\n\na.inc(); a.inc(); a.inc();   // a is at 3\nb.inc();                      // b is at 1\n\nconsole.log("a:", a.get());   // 3\nconsole.log("b:", b.get());   // 1\nconsole.log(a.count);         // undefined — private`,
          },
          explanation: "Each makeCounter() call creates a fresh closure with its own count variable. a and b are completely independent. count is unreachable from outside.",
          tryItPrompt: "Add a `reset()` method that sets count back to 0.",
        },
      ],
    },
    {
      id: "js09-s4",
      title: "Higher-Order Functions",
      whyItMatters: "Functions that take or return other functions ARE the modern JS programming style. Mastering them unlocks map/filter/reduce, Promise chains, React hooks, Redux middleware, and 90% of useful patterns.",
      content: `A **higher-order function** is a function that does at least one of:

1. **Takes another function as an argument.**
2. **Returns a function.**

You've already seen both:

\`\`\`
// Takes a function:
[1, 2, 3].map(n => n * 2);                  // [2, 4, 6]
setTimeout(() => console.log("hi"), 1000);  // takes a callback

// Returns a function:
function multiplier(by) {
  return n => n * by;
}
\`\`\`

The function passed in is called a **callback**. The function returned is sometimes called a **factory** or **partially-applied** function.

**Common patterns:**

**Wrapping** — add behavior around an existing function:

\`\`\`
function withLogging(fn) {
  return function(...args) {
    console.log("Calling with:", args);
    const result = fn(...args);
    console.log("Returned:", result);
    return result;
  };
}

const add = (a, b) => a + b;
const loggedAdd = withLogging(add);
loggedAdd(2, 3);   // logs the call and result, returns 5
\`\`\`

**Composing** — chain transforms together:

\`\`\`
const double = x => x * 2;
const inc = x => x + 1;
const compose = (f, g) => x => f(g(x));

const doubleThenInc = compose(inc, double);
doubleThenInc(3);   // 7  (3 → 6 → 7)
\`\`\`

**Currying** — turn a multi-arg function into a chain of single-arg functions:

\`\`\`
const curry = fn => a => b => fn(a, b);
const add = (a, b) => a + b;
const curriedAdd = curry(add);

curriedAdd(2)(3);   // 5
const add5 = curriedAdd(5);
add5(10);            // 15
\`\`\`

These are advanced patterns, but the underlying idea — functions that operate on other functions — is everywhere. **Read more code than you write to develop intuition for them.**`,
      callouts: [
        { type: "tip", title: "Functions are values", content: "In JS, a function can be passed, stored, and returned just like a number or string. This is what makes higher-order functions possible." },
      ],
    },
    {
      id: "js09-s5",
      title: "map, filter, reduce — The Holy Trinity",
      whyItMatters: "These three array methods cover 80% of array work in modern JavaScript. Mastering them is non-negotiable.",
      content: `**\`map\`** — transform every element. Returns a new array of the same length.

\`\`\`
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
//                              ↑ called for each element
console.log(doubled);   // [2, 4, 6, 8]

const users = [{ name: "Alice" }, { name: "Bob" }];
const names = users.map(user => user.name);
console.log(names);     // ["Alice", "Bob"]
\`\`\`

\`map\` does NOT mutate the original. The callback gets \`(element, index, array)\` — most code only uses the first.

**\`filter\`** — keep only elements that pass a test. Returns a new array of equal-or-shorter length.

\`\`\`
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);     // [2, 4, 6]

const adults = users.filter(u => u.age >= 18);
\`\`\`

The callback returns truthy (keep) or falsy (drop).

**\`reduce\`** — combine all elements into a single value. The most powerful (and most-feared) of the three.

\`\`\`
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, n) => acc + n, 0);
//                          ↑ accumulator    ↑ initial value
console.log(sum);   // 10

const product = numbers.reduce((acc, n) => acc * n, 1);
console.log(product);   // 24
\`\`\`

The callback receives the accumulator (running result) and the current element. Whatever you return becomes the next accumulator. The second argument to \`reduce\` is the starting accumulator value.

**reduce can build anything:**

\`\`\`
// Group by property
const people = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Carol", role: "admin" },
];

const byRole = people.reduce((acc, p) => {
  if (!acc[p.role]) acc[p.role] = [];
  acc[p.role].push(p);
  return acc;
}, {});
// { admin: [Alice, Carol], user: [Bob] }
\`\`\`

**Chaining** — combine these freely:

\`\`\`
const result = users
  .filter(u => u.active)
  .map(u => u.name.toUpperCase())
  .reduce((acc, name) => acc + ", " + name);
\`\`\`

This style — pipeline of small transformations — is the heart of functional JavaScript.

**Other high-value array methods:**

- \`forEach(fn)\` — like map but doesn't return; for side effects only.
- \`find(fn)\` — first element matching predicate, or undefined.
- \`findIndex(fn)\` — index of first match, or -1.
- \`some(fn)\` — true if ANY element matches.
- \`every(fn)\` — true if ALL elements match.
- \`flatMap(fn)\` — map then flatten one level.
- \`sort(fn)\` — mutating sort; provide a comparator for non-string sorts.

These aren't in this chapter's quiz but you'll use them constantly.`,
      callouts: [
        { type: "pro-tip", title: "Pipeline thinking", content: "Get comfortable chaining .filter().map().reduce(). This style is dramatically more readable than nested for-loops once you internalize it." },
        { type: "warning", title: "reduce is the trickiest", content: "reduce trips up many devs. Always provide an initial value (second arg) — without it, an empty array throws." },
      ],
      microExercise: {
        instruction: "Given const products = [{name:'A',price:10,stock:0},{name:'B',price:20,stock:5},{name:'C',price:30,stock:2}], use filter+reduce to compute the total dollar value of in-stock products.",
        starterCode: { javascript: `const products = [\n  {name:'A',price:10,stock:0},\n  {name:'B',price:20,stock:5},\n  {name:'C',price:30,stock:2}\n];\n\n// Compute total value of in-stock items (price * stock)\n// Expected: 20*5 + 30*2 = 160` },
        hint: "products.filter(p => p.stock > 0).reduce((acc, p) => acc + p.price * p.stock, 0)",
        solution: { javascript: `const products = [\n  {name:'A',price:10,stock:0},\n  {name:'B',price:20,stock:5},\n  {name:'C',price:30,stock:2}\n];\n\nconst total = products\n  .filter(p => p.stock > 0)\n  .reduce((acc, p) => acc + p.price * p.stock, 0);\n\nconsole.log(total);   // 160` },
      },
    },
  ],
  exercises: [
    {
      id: "js09-ex1",
      title: "Convert to arrow functions",
      difficulty: 1,
      description: "Rewrite the three function expressions below as arrow functions.",
      requirements: [
        "All three become arrow functions",
        "Use implicit return where possible",
        "Function still works the same",
      ],
      starterCode: { javascript: `const add = function(a, b) {\n  return a + b;\n};\n\nconst greet = function(name) {\n  return "Hello, " + name;\n};\n\nconst getRandom = function() {\n  return Math.random();\n};\n\n// rewrite as arrow functions above\n\nconsole.log(add(2, 3));\nconsole.log(greet("Alice"));\nconsole.log(getRandom());` },
      hints: [
        "(a, b) => a + b",
        "Single param can omit parens: name => ...",
        "No params needs empty parens: () => ...",
      ],
      solution: { javascript: `const add = (a, b) => a + b;\nconst greet = name => "Hello, " + name;\nconst getRandom = () => Math.random();\n\nconsole.log(add(2, 3));        // 5\nconsole.log(greet("Alice"));   // Hello, Alice\nconsole.log(getRandom());      // random number` },
      solutionExplanation: "All three converted with implicit return. Single-param arrow can drop parens. No-param needs empty ().",
    },
    {
      id: "js09-ex2",
      title: "Counter factory with closure",
      difficulty: 2,
      description: "Build a `makeCounter(start, step)` that returns an object with `inc()`, `dec()`, and `get()` methods. Each counter should be independent.",
      requirements: [
        "Counter starts at `start` value",
        "inc() increases by `step`, dec() decreases by `step`",
        "get() returns current value",
        "Two counters created from makeCounter must NOT share state",
      ],
      starterCode: { javascript: `function makeCounter(start, step) {\n  // closure here\n}\n\nconst a = makeCounter(0, 1);\nconst b = makeCounter(100, 5);\n\na.inc(); a.inc(); a.inc();\nb.inc();\n\nconsole.log(a.get());   // expect 3\nconsole.log(b.get());   // expect 105` },
      hints: [
        "let count = start; inside the outer function",
        "Return an object with three arrow methods that close over count",
        "inc: () => count += step",
      ],
      solution: { javascript: `function makeCounter(start, step) {\n  let count = start;\n  return {\n    inc: () => count += step,\n    dec: () => count -= step,\n    get: () => count,\n  };\n}\n\nconst a = makeCounter(0, 1);\nconst b = makeCounter(100, 5);\n\na.inc(); a.inc(); a.inc();\nb.inc();\n\nconsole.log(a.get());   // 3\nconsole.log(b.get());   // 105` },
      solutionExplanation: "Each call to makeCounter creates a fresh count variable, captured by the three returned arrow functions. The two counters are fully independent.",
    },
    {
      id: "js09-ex3",
      title: "Filter, map, reduce a product list",
      difficulty: 3,
      description: "Given a list of products, find the total revenue (price × quantity) of all products in the 'electronics' category that have quantity > 0.",
      requirements: [
        "Use .filter() for category and stock check",
        "Use .map() to compute price × quantity per product",
        "Use .reduce() to sum the revenues",
        "Final result is a single number",
      ],
      starterCode: { javascript: `const products = [\n  { name: "Laptop", category: "electronics", price: 1200, quantity: 3 },\n  { name: "Phone", category: "electronics", price: 800, quantity: 0 },\n  { name: "T-shirt", category: "clothing", price: 20, quantity: 50 },\n  { name: "Headphones", category: "electronics", price: 150, quantity: 10 },\n  { name: "Jeans", category: "clothing", price: 50, quantity: 15 },\n];\n\n// Compute total revenue of in-stock electronics\n// Expected: 1200*3 + 150*10 = 3600 + 1500 = 5100` },
      hints: [
        ".filter(p => p.category === 'electronics' && p.quantity > 0)",
        ".map(p => p.price * p.quantity)",
        ".reduce((sum, n) => sum + n, 0)",
      ],
      solution: { javascript: `const products = [\n  { name: "Laptop", category: "electronics", price: 1200, quantity: 3 },\n  { name: "Phone", category: "electronics", price: 800, quantity: 0 },\n  { name: "T-shirt", category: "clothing", price: 20, quantity: 50 },\n  { name: "Headphones", category: "electronics", price: 150, quantity: 10 },\n  { name: "Jeans", category: "clothing", price: 50, quantity: 15 },\n];\n\nconst totalRevenue = products\n  .filter(p => p.category === "electronics" && p.quantity > 0)\n  .map(p => p.price * p.quantity)\n  .reduce((sum, n) => sum + n, 0);\n\nconsole.log(totalRevenue);   // 5100` },
      solutionExplanation: "Three-step pipeline: keep only relevant products (filter), turn each into a revenue number (map), sum them (reduce). This is the modern JS data-processing style.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "js09-q1", type: "code-output", question: "What does `const f = x => ({ id: x })` return when called with 5?", options: ["undefined", "{ id: 5 }", "5", "Error"], correctAnswer: 1, explanation: "Parens around the object literal disambiguate from a function body. Returns { id: 5 }.", difficulty: 2 },
      { id: "js09-q2", type: "spot-the-bug", question: "Why does this return undefined?", code: `const f = x => { id: x };\nconsole.log(f(5));`, options: ["x is undefined", "{ id: x } is treated as a function body block, not an object — no return", "Need 'function' keyword", "Need brackets"], correctAnswer: 1, explanation: "Without parens, { id: x } is parsed as a block with a label `id:`. Wrap object literals in parens: x => ({ id: x }).", difficulty: 3 },
      { id: "js09-q3", type: "true-false", question: "Arrow functions have their own `this` like regular functions.", options: ["True", "False"], correctAnswer: 1, explanation: "False. Arrows inherit `this` from the surrounding scope. This is their key behavioral difference.", difficulty: 2 },
      { id: "js09-q4", type: "mcq", question: "What is a closure?", options: ["A function that closes a connection", "A function bundled with the variables from its surrounding scope", "A function that returns nothing", "A bug fix"], correctAnswer: 1, explanation: "Closure = function + the variables it captured from its surrounding scope. Lets functions remember context.", difficulty: 2 },
      { id: "js09-q5", type: "code-output", question: "What does this print?", code: `function make() {\n  let n = 0;\n  return () => ++n;\n}\nconst a = make();\nconst b = make();\na(); a(); b();\nconsole.log(a(), b());`, options: ["3 2", "3 1", "2 1", "1 1"], correctAnswer: 0, explanation: "Each make() creates a fresh closure with its own n. a is called 3 times → returns 3 on the third call. b is called twice → returns 2 on its second call (line uses b()).", difficulty: 3 },
      { id: "js09-q6", type: "mcq", question: "Which method transforms each array element into something new?", options: ["filter", "map", "reduce", "forEach"], correctAnswer: 1, explanation: "map calls the callback for each element and returns a new array of the results.", difficulty: 1 },
      { id: "js09-q7", type: "mcq", question: "What's the second argument to reduce?", options: ["The current element", "The starting value of the accumulator", "The number of iterations", "Optional flag"], correctAnswer: 1, explanation: "reduce(callback, initial). Always provide initial — otherwise reduce on an empty array throws.", difficulty: 2 },
      { id: "js09-q8", type: "mcq", question: "What's a higher-order function?", options: ["A faster function", "A function that takes or returns another function", "A function in a class", "A function with default params"], correctAnswer: 1, explanation: "Higher-order functions either accept functions as arguments (map, filter, addEventListener) or return functions (factories like multiplier).", difficulty: 1 },
    ],
  },
  cheatSheet: [
    { label: "Arrow basic", value: "(a, b) => a + b" },
    { label: "Single param", value: "x => x * 2" },
    { label: "No params", value: "() => 42" },
    { label: "Object return", value: "x => ({ id: x })" },
    { label: "this in arrow", value: "Inherited from surrounding scope" },
    { label: "Closure", value: "Inner fn remembers outer vars" },
    { label: "map", value: "Transform each → new array" },
    { label: "filter", value: "Keep matching → new shorter array" },
    { label: "reduce", value: "Combine all → single value" },
    { label: "Higher-order", value: "Takes/returns functions" },
  ],
};

// ============================================================================
// JS CHAPTER 10 — Strings Deep Dive
// ============================================================================
export const jsCh10: Chapter = {
  id: "js-ch-10",
  number: 10,
  title: "Strings Deep Dive",
  subtitle: "Template literals, the 30 most-used string methods, and the Unicode gotchas that bite everyone.",
  difficulty: "Beginner",
  estimatedMinutes: 40,
  xpReward: 130,
  prerequisites: ["js-ch-09"],
  partLabel: "Part 2: Working With Data",
  learningObjectives: [
    "Build strings with template literals including expressions and multi-line.",
    "Use the most common search/test methods (includes, startsWith, indexOf).",
    "Slice and split strings (substring, slice, split).",
    "Transform strings (toUpperCase, trim, replace, replaceAll, padStart).",
    "Recognize Unicode pitfalls (length doesn't equal character count for emoji).",
  ],
  sections: [
    {
      id: "js10-s1",
      title: "Template Literals",
      whyItMatters: "Template literals replaced string concatenation in 2015. They're shorter, cleaner, and support multi-line out of the box.",
      content: `Template literals use **backticks** (\\\`) instead of single or double quotes:

\`\`\`
const name = "Alice";
const greeting = \`Hello, \${name}!\`;
\`\`\`

Inside backticks, **\`\${expression}\`** inserts the result of any JS expression:

\`\`\`
const a = 5, b = 3;
console.log(\`\${a} + \${b} = \${a + b}\`);   // "5 + 3 = 8"

const user = { name: "Alice", age: 30 };
console.log(\`User \${user.name} is \${user.age}\`);

console.log(\`Now: \${new Date().toLocaleTimeString()}\`);
\`\`\`

You can put any expression in \`\${...}\` — function calls, ternaries, math, anything.

**Multi-line strings** — backticks preserve newlines:

\`\`\`
const html = \`
  <div>
    <h1>\${title}</h1>
    <p>\${body}</p>
  </div>
\`;
\`\`\`

No more \`"line1\\n" + "line2\\n"\` mess.

**Compared to old-school concatenation:**

\`\`\`
// OLD — string concatenation
const msg = "Hello, " + name + "! You are " + age + " years old.";

// NEW — template literal
const msg = \`Hello, \${name}! You are \${age} years old.\`;
\`\`\`

Always use template literals in modern code unless you have a specific reason not to.

**Tagged templates** — an advanced feature where a function processes the template:

\`\`\`
function highlight(strings, ...values) {
  return strings.reduce((acc, str, i) =>
    acc + str + (values[i] ? \`<mark>\${values[i]}</mark>\` : ""), "");
}

const name = "Alice";
const result = highlight\`Welcome, \${name}!\`;
// "Welcome, <mark>Alice</mark>!"
\`\`\`

This powers libraries like \`styled-components\` and is worth recognizing, though you rarely need to write your own. Template literals are 99% used for plain interpolation.`,
      callouts: [
        { type: "tip", title: "Backticks always", content: "Default to backticks for any string with variables, multi-line content, or that may need them later. Reserve quotes for static strings." },
      ],
      codeExamples: [
        {
          id: "js10-s1-ex1",
          title: "Template literals showcase",
          description: "Interpolation, expressions, and multi-line in one demo.",
          code: {
            javascript: `const user = { name: "Alex", role: "admin" };\nconst items = ["A", "B", "C"];\n\nconst summary = \`\nUser: \${user.name}\nRole: \${user.role.toUpperCase()}\nItems: \${items.length}\nFirst: \${items[0] ?? "none"}\nMath: 2 + 3 = \${2 + 3}\n\`;\n\nconsole.log(summary);`,
          },
          explanation: "Multi-line, multiple interpolated expressions including a method call, a ternary-equivalent (??), and arithmetic. All in a single readable template.",
          tryItPrompt: "Add a line that shows the items joined with commas using items.join(', ').",
        },
      ],
    },
    {
      id: "js10-s2",
      title: "Length and Indexing",
      whyItMatters: "These are the most basic string operations — but they have one huge gotcha around Unicode that bites everyone eventually.",
      content: `**\`length\`** returns the number of characters... almost.

\`\`\`
"hello".length;        // 5
"".length;             // 0
" ".length;            // 1
\`\`\`

**Indexing** with brackets returns one character (returns undefined if out of range):

\`\`\`
const s = "hello";
s[0];      // "h"
s[4];      // "o"
s[10];     // undefined
\`\`\`

You can also use \`charAt\`:

\`\`\`
s.charAt(0);    // "h"
s.charAt(10);   // ""  (empty string instead of undefined)
\`\`\`

**Strings are immutable.** You CANNOT change a character in place:

\`\`\`
const s = "hello";
s[0] = "H";       // silently fails (in strict mode: error)
console.log(s);   // still "hello"
\`\`\`

To "modify" a string, build a new one:

\`\`\`
const fixed = "H" + s.slice(1);
console.log(fixed);   // "Hello"
\`\`\`

**The big Unicode gotcha:** \`length\` counts **code units**, not characters. For most ASCII it doesn't matter. For emoji and many Asian/Indian scripts, it does:

\`\`\`
"😀".length;          // 2  (single emoji = 2 UTF-16 code units!)
"🇺🇸".length;          // 4  (flag = 2 emoji combined)
"a̐".length;           // 2  (a + combining accent)
\`\`\`

So \`s.length\` is "the byte size in UTF-16 code units" not "how many characters the user sees".

For accurate user-perceived character counting, use the iterator (which respects emoji boundaries):

\`\`\`
[..."😀"].length;     // 1  ✅
[..."🇺🇸"].length;     // still 2 (flag is 2 codepoints in spec)
\`\`\`

For full grapheme-cluster counting (combined emoji families etc.) you need \`Intl.Segmenter\`:

\`\`\`
const seg = new Intl.Segmenter("en", { granularity: "grapheme" });
[...seg.segment("👨‍👩‍👧")].length;   // 1
\`\`\`

For 95% of code, \`length\` and \`[i]\` are fine. **But never use them to truncate user-input text** without thinking about emoji — you'll cut them in half and produce garbage. Use a slice with care or a library like \`grapheme-splitter\`.`,
      callouts: [
        { type: "warning", title: "Emoji break length", content: "An emoji often counts as 2 in .length. If you're truncating user input, this can produce broken displays." },
        { type: "info", title: "Strings are immutable", content: "You can't change a character in place. Every 'modification' actually creates a new string." },
      ],
    },
    {
      id: "js10-s3",
      title: "Searching Strings",
      whyItMatters: "Checking whether a string contains, starts with, or ends with another string is one of the most common operations in any program.",
      content: `**Modern (preferred):**

\`\`\`
const s = "Hello, World!";

s.includes("World");        // true
s.startsWith("Hello");      // true
s.endsWith("!");            // true

s.includes("Hello", 5);     // false (starts searching at index 5)
s.startsWith("World", 7);   // true (substring at index 7)
\`\`\`

These three return boolean and are the modern preferred way to test for substrings.

**Older but still useful:**

\`\`\`
s.indexOf("World");         // 7    (position of first match, or -1)
s.lastIndexOf("o");         // 8    (last occurrence)
s.search(/World/);          // 7    (regex version of indexOf)
\`\`\`

\`indexOf\` returns -1 if not found, so you'll see the old idiom:

\`\`\`
if (s.indexOf("foo") !== -1) { ... }
\`\`\`

In modern code, prefer:

\`\`\`
if (s.includes("foo")) { ... }
\`\`\`

**Case-insensitive search** — convert both to lower case (the simple approach):

\`\`\`
function caseInsensitiveIncludes(haystack, needle) {
  return haystack.toLowerCase().includes(needle.toLowerCase());
}

caseInsensitiveIncludes("Hello, World!", "WORLD");   // true
\`\`\`

For more sophisticated matching (accents, locale-aware), use \`localeCompare\` or regex with \`/i\` flag:

\`\`\`
"Hello".match(/hello/i);    // matches
\`\`\`

Regex deserves its own chapter — we cover it in chapter 20.`,
      callouts: [
        { type: "tip", title: "includes for booleans, indexOf for positions", content: "Use includes/startsWith/endsWith when you need yes/no. Use indexOf when you need to know WHERE the match is." },
      ],
    },
    {
      id: "js10-s4",
      title: "Slicing and Splitting",
      whyItMatters: "Extracting parts of strings (the first word, the file extension, the first 100 characters) is constant work.",
      content: `**\`slice(start, end)\`** — returns a substring from index \`start\` (inclusive) to \`end\` (exclusive). Negative indices count from the end.

\`\`\`
const s = "Hello, World!";

s.slice(0, 5);        // "Hello"
s.slice(7);           // "World!"      (no end = to the end)
s.slice(-6);          // "World!"      (last 6 chars)
s.slice(-6, -1);      // "World"       (last 6 chars excluding final)
\`\`\`

**\`substring(start, end)\`** — similar to slice but doesn't accept negative indices (treats them as 0). For modern code, **always use slice**.

**\`substr(start, length)\`** — DEPRECATED. Don't use in new code; recognize it in old code.

**\`split(separator)\`** — break a string into an array.

\`\`\`
"a,b,c".split(",");           // ["a", "b", "c"]
"hello world".split(" ");     // ["hello", "world"]
"hello".split("");            // ["h", "e", "l", "l", "o"]
"line1\\nline2".split("\\n");   // ["line1", "line2"]

// Limit the number of pieces:
"a,b,c,d".split(",", 2);      // ["a", "b"]
\`\`\`

**Joining is the opposite** — \`array.join(separator)\` glues an array into a string:

\`\`\`
["a", "b", "c"].join(", ");    // "a, b, c"
["a", "b", "c"].join("");      // "abc"
\`\`\`

**Common patterns:**

\`\`\`
// Get the file extension
"document.pdf".split(".").pop();    // "pdf"

// Reverse a string
"hello".split("").reverse().join("");   // "olleh"

// Get the first word
"Hello world".split(" ")[0];        // "Hello"

// Truncate to N chars with ellipsis
function truncate(s, n) {
  return s.length > n ? s.slice(0, n) + "…" : s;
}
truncate("Lorem ipsum dolor sit", 10);   // "Lorem ipsu…"
\`\`\``,
      callouts: [
        { type: "tip", title: "slice over substring", content: "slice supports negative indices and is more flexible. substring is older and less useful. Reach for slice every time." },
      ],
    },
    {
      id: "js10-s5",
      title: "Transforming Strings",
      whyItMatters: "Trimming whitespace, changing case, replacing text, and padding are everyday tasks. Modern JS has clean APIs for all of them.",
      content: `**Case:**

\`\`\`
"hello".toUpperCase();      // "HELLO"
"HELLO".toLowerCase();      // "hello"
"Hello".toUpperCase().toLowerCase();   // "hello"
\`\`\`

There's no built-in \`toTitleCase\` — write your own:

\`\`\`
const title = s => s
  .toLowerCase()
  .split(" ")
  .map(w => w[0].toUpperCase() + w.slice(1))
  .join(" ");

title("hello world");    // "Hello World"
\`\`\`

**Whitespace:**

\`\`\`
"  hello  ".trim();          // "hello"
"  hello  ".trimStart();     // "hello  "
"  hello  ".trimEnd();       // "  hello"
\`\`\`

\`trim\` removes leading and trailing whitespace (spaces, tabs, newlines). Always trim user input before validation.

**Padding:**

\`\`\`
"5".padStart(3, "0");        // "005"
"5".padEnd(3, "0");          // "500"
"abc".padStart(6, " ");      // "   abc"
\`\`\`

Padding is great for aligning numbers, formatting times, generating slugs.

**Replacement:**

\`\`\`
"hello world".replace("world", "JS");        // "hello JS"
"hello world world".replace("world", "JS");  // "hello JS world"   (only first!)
\`\`\`

\`replace\` only replaces the FIRST occurrence by default. To replace all, use \`replaceAll\` (modern) or a global regex:

\`\`\`
"hello world world".replaceAll("world", "JS");        // "hello JS JS"
"hello world world".replace(/world/g, "JS");          // "hello JS JS"
\`\`\`

**Repeat:**

\`\`\`
"-".repeat(10);              // "----------"
"abc".repeat(3);             // "abcabcabc"
\`\`\`

**Concatenation** — use \`+\` or template literals. The \`.concat()\` method exists but is slower and rarely used:

\`\`\`
"a" + "b";                   // "ab"
\`\${"a"}\${"b"}\`;              // "ab"
"a".concat("b");             // "ab"  (rare)
\`\`\`

**Turning numbers into strings, strings into numbers:**

\`\`\`
String(42);              // "42"
(42).toString();         // "42"
\`\${42}\`;                 // "42"

Number("42");            // 42
parseInt("42px");        // 42  (stops at non-digit)
parseFloat("3.14abc");   // 3.14
+"42";                   // 42  (unary + coerces)
\`\`\``,
      callouts: [
        { type: "common-mistake", title: "replace only does first match", content: "'foo bar foo'.replace('foo', 'baz') = 'baz bar foo'. Use replaceAll for all matches, or a /pattern/g regex." },
        { type: "tip", title: "trim user input always", content: "Before saving emails, usernames, etc., always .trim() to avoid leading/trailing space bugs." },
      ],
      microExercise: {
        instruction: "Write a function `slug(title)` that turns 'Hello World, How Are You?' into 'hello-world-how-are-you' (lowercase, spaces and punctuation → dashes, no leading/trailing dashes).",
        starterCode: { javascript: `function slug(title) {\n  // your code\n}\n\nconsole.log(slug('Hello World, How Are You?'));   // 'hello-world-how-are-you'` },
        hint: "lowercase → trim → replace non-alphanumeric runs with '-' (regex /[^a-z0-9]+/g works) → strip leading/trailing dashes",
        solution: { javascript: `function slug(title) {\n  return title\n    .toLowerCase()\n    .trim()\n    .replace(/[^a-z0-9]+/g, '-')\n    .replace(/^-+|-+$/g, '');\n}\n\nconsole.log(slug('Hello World, How Are You?'));   // 'hello-world-how-are-you'` },
      },
    },
  ],
  exercises: [
    {
      id: "js10-ex1",
      title: "Template-literal greeting",
      difficulty: 1,
      description: "Write a function `greet(user)` that takes an object {name, age, role} and returns a multi-line greeting using a template literal.",
      requirements: [
        "Use a template literal with backticks",
        "Interpolate name, age, and role",
        "Multi-line — at least 3 lines in the output",
      ],
      starterCode: { javascript: `function greet(user) {\n  // template literal here\n}\n\nconsole.log(greet({ name: 'Alice', age: 30, role: 'admin' }));` },
      hints: [
        "Use backticks: `Hello, ${user.name}`",
        "Use \\n or actual newlines inside the backticks for multi-line",
      ],
      solution: { javascript: `function greet(user) {\n  return \`\nHello, \${user.name}!\nYou are \${user.age} years old.\nYour role is \${user.role.toUpperCase()}.\n\`;\n}\n\nconsole.log(greet({ name: 'Alice', age: 30, role: 'admin' }));` },
      solutionExplanation: "Backticks let you embed expressions and span multiple lines. .toUpperCase() runs as part of the interpolation.",
    },
    {
      id: "js10-ex2",
      title: "Email validation helpers",
      difficulty: 2,
      description: "Write three functions: `cleanEmail(s)` (trim + lowercase), `isEmailLike(s)` (returns true if it includes '@' and a '.'), and `getDomain(email)` (returns the part after '@').",
      requirements: [
        "cleanEmail trims and lowercases",
        "isEmailLike checks for '@' AND '.'",
        "getDomain returns the substring after '@'",
        "All three handle edge cases (empty string, no @)",
      ],
      starterCode: { javascript: `function cleanEmail(s) { /* */ }\nfunction isEmailLike(s) { /* */ }\nfunction getDomain(email) { /* */ }\n\nconsole.log(cleanEmail('  Alice@EXAMPLE.com  '));   // 'alice@example.com'\nconsole.log(isEmailLike('alice@example.com'));      // true\nconsole.log(isEmailLike('not-an-email'));           // false\nconsole.log(getDomain('alice@example.com'));        // 'example.com'\nconsole.log(getDomain('no-at-symbol'));             // '' or null` },
      hints: [
        "s.trim().toLowerCase()",
        "s.includes('@') && s.includes('.')",
        "email.split('@')[1] ?? ''",
      ],
      solution: { javascript: `function cleanEmail(s) {\n  return s.trim().toLowerCase();\n}\n\nfunction isEmailLike(s) {\n  return s.includes('@') && s.includes('.');\n}\n\nfunction getDomain(email) {\n  return email.split('@')[1] ?? '';\n}\n\nconsole.log(cleanEmail('  Alice@EXAMPLE.com  '));   // 'alice@example.com'\nconsole.log(isEmailLike('alice@example.com'));      // true\nconsole.log(isEmailLike('not-an-email'));           // false\nconsole.log(getDomain('alice@example.com'));        // 'example.com'\nconsole.log(getDomain('no-at-symbol'));             // ''` },
      solutionExplanation: "Three small focused string helpers. Trim handles user-paste artifacts. The ?? operator gives a safe default when split produces only one element.",
    },
    {
      id: "js10-ex3",
      title: "Build a slug generator",
      difficulty: 3,
      description: "Write `slug(title)` that converts 'Hello World — How are you?' to 'hello-world-how-are-you'. Lowercase, replace any run of non-alphanumeric characters with a single dash, and strip leading/trailing dashes.",
      requirements: [
        "Lowercase the input",
        "Replace runs of non-alphanumeric chars with '-'",
        "Strip leading and trailing dashes",
        "Multiple punctuation chars should collapse to a single dash",
      ],
      starterCode: { javascript: `function slug(title) {\n  // your code\n}\n\nconsole.log(slug('Hello World — How are you?'));   // 'hello-world-how-are-you'\nconsole.log(slug('  Lots   of   spaces  '));        // 'lots-of-spaces'\nconsole.log(slug('--leading-and-trailing--'));      // 'leading-and-trailing'` },
      hints: [
        ".toLowerCase()",
        ".replace(/[^a-z0-9]+/g, '-') replaces runs of non-alphanumerics",
        ".replace(/^-+|-+$/g, '') strips leading/trailing dashes",
        "Chain the calls",
      ],
      solution: { javascript: `function slug(title) {\n  return title\n    .toLowerCase()\n    .replace(/[^a-z0-9]+/g, '-')\n    .replace(/^-+|-+$/g, '');\n}\n\nconsole.log(slug('Hello World — How are you?'));   // 'hello-world-how-are-you'\nconsole.log(slug('  Lots   of   spaces  '));        // 'lots-of-spaces'\nconsole.log(slug('--leading-and-trailing--'));      // 'leading-and-trailing'` },
      solutionExplanation: "Three chained transforms: lowercase, runs of bad chars → dash, strip leading/trailing dashes. The /g flag is essential for replacing ALL matches.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "js10-q1", type: "code-output", question: "What does `\\`\\${1+2}\\`` produce?", options: ["'1+2'", "'3'", "'${1+2}'", "Error"], correctAnswer: 1, explanation: "Template literal expressions are evaluated. ${1+2} = 3.", difficulty: 1 },
      { id: "js10-q2", type: "true-false", question: "'😀'.length equals 1.", options: ["True", "False"], correctAnswer: 1, explanation: "False! Most emoji take 2 UTF-16 code units, so .length returns 2. This is the classic Unicode gotcha.", difficulty: 3 },
      { id: "js10-q3", type: "code-output", question: "What does 'hello world world'.replace('world', 'JS') return?", options: ["'hello JS JS'", "'hello JS world'", "'hello world JS'", "Error"], correctAnswer: 1, explanation: ".replace() with a string only replaces the FIRST match. Use replaceAll or /world/g to replace all.", difficulty: 2 },
      { id: "js10-q4", type: "mcq", question: "Which method returns true if a string contains another?", options: [".has()", ".contains()", ".includes()", ".find()"], correctAnswer: 2, explanation: ".includes() returns boolean. The other names don't exist on strings.", difficulty: 1 },
      { id: "js10-q5", type: "code-output", question: "What does 'hello'.slice(-3) return?", options: ["'hel'", "'llo'", "'lo'", "Error"], correctAnswer: 1, explanation: "Negative index counts from the end. -3 takes the last 3 characters: 'llo'.", difficulty: 2 },
      { id: "js10-q6", type: "mcq", question: "What does 'a,b,c'.split(',') return?", options: ["'a','b','c'", "['a', 'b', 'c']", "['a,b,c']", "Error"], correctAnswer: 1, explanation: "split returns an array of substrings broken at the separator.", difficulty: 1 },
      { id: "js10-q7", type: "spot-the-bug", question: "Why doesn't this change the string?", code: `let s = 'hello';\ns[0] = 'H';\nconsole.log(s);`, options: ["Need quotes", "Strings are immutable — you can't change a character in place", "Use let not const", "Need .charAt"], correctAnswer: 1, explanation: "Strings are immutable. To 'change' a character, build a new string: 'H' + s.slice(1).", difficulty: 2 },
      { id: "js10-q8", type: "mcq", question: "Which is the modern preferred way to build dynamic strings?", options: ["Concatenation with +", "Template literals with backticks", ".concat()", "join()"], correctAnswer: 1, explanation: "Template literals are cleaner, support multi-line, and are the modern default.", difficulty: 1 },
    ],
  },
  cheatSheet: [
    { label: "Template literal", value: "`Hello, ${name}!`" },
    { label: "Multi-line", value: "Just include newlines in backticks" },
    { label: "Length", value: "s.length (caveat: emoji)" },
    { label: "Contains", value: "s.includes('x')" },
    { label: "Starts/ends", value: "s.startsWith / s.endsWith" },
    { label: "Slice", value: "s.slice(start, end) (negative ok)" },
    { label: "Split", value: "s.split(',') → array" },
    { label: "Trim", value: "s.trim() / trimStart / trimEnd" },
    { label: "Case", value: "s.toUpperCase() / toLowerCase()" },
    { label: "Replace all", value: "s.replaceAll('a','b') or /a/g" },
    { label: "Pad", value: "s.padStart(n, '0')" },
    { label: "Repeat", value: "'-'.repeat(10)" },
  ],
};
