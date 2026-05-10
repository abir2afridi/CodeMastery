import type { Chapter } from "./types";

// ============================================================================
// JS CHAPTER 2 — VARIABLES
// ============================================================================
export const jsCh02: Chapter = {
  id: "js-ch-02",
  number: 2,
  title: "Variables: let, const, and var",
  subtitle: "How JavaScript stores data — and why one keyword should be retired forever.",
  difficulty: "Absolute Beginner",
  estimatedMinutes: 35,
  xpReward: 110,
  prerequisites: ["js-ch-01"],
  partLabel: "Part 1: JavaScript Foundations",
  learningObjectives: [
    "Declare variables using let and const correctly.",
    "Choose between let and const based on whether the value will change.",
    "Understand block scope and the temporal dead zone.",
    "Recognize why var is dangerous and avoid it.",
    "Follow naming conventions used by professional JavaScript developers.",
  ],
  sections: [
    {
      id: "ch02-s1",
      title: "What a Variable Actually Is",
      whyItMatters: "Variables are the most basic building block of every program. Misunderstanding them causes bugs that are very hard to debug because they look like the program is lying to you.",
      realWorldAnalogy: "A variable is a labeled box. You write a name on the outside, you put a value inside. When you say the name, JavaScript opens the box and gives you what's inside. You can usually swap what's in the box for something else.",
      content: `In JavaScript, you create a variable using one of three keywords: \`let\`, \`const\`, or \`var\`. They all create a name that holds a value.

\`\`\`js
let age = 25;
const name = "Alice";
var oldStyle = "don't use me";
\`\`\`

After that line, the names \`age\`, \`name\`, and \`oldStyle\` exist in your program. You can use them anywhere they're "in scope" (we'll explain scope in section 3).

To change a variable's value later, just assign a new value:

\`\`\`js
let age = 25;
age = 26;          // works
console.log(age);  // 26
\`\`\`

There's an important difference: **\`let\` allows reassignment, \`const\` does not.**

\`\`\`js
const name = "Alice";
name = "Bob";  // ERROR: Assignment to constant variable
\`\`\`

This rule is enforced by JavaScript itself, not just convention. Trying to reassign a const throws an error and stops your program.

The choice between \`let\` and \`const\` is one of the most important habits a JavaScript developer forms. The rule of thumb is: **start with \`const\`, switch to \`let\` only when you discover you need to reassign.** Most variables in real-world code never get reassigned, so most variables should be const.`,
      codeExamples: [
        {
          id: "ch02-s1-ex1",
          title: "let vs const",
          description: "Try changing each variable and see what happens.",
          code: {
            javascript: `let counter = 0;\ncounter = counter + 1;\nconsole.log("Counter:", counter); // 1\n\nconst PI = 3.14159;\n// PI = 3.14; // Uncomment to see the error\nconsole.log("Pi:", PI);\n\nconst greeting = "Hello";\n// We can use it many times — that's fine\nconsole.log(greeting + ", world!");`,
          },
          explanation: "counter changes — let. PI and greeting never change — const. Const doesn't mean 'this can never be used,' just 'this name can never point to a different value.'",
          tryItPrompt: "Uncomment the PI = 3.14 line and run again. You'll see a red error in the console.",
        },
      ],
      callouts: [
        { type: "tip", title: "Default to const", content: "About 80% of variables in real codebases are const. Always reach for const first; switch to let only when you genuinely need to reassign." },
      ],
    },
    {
      id: "ch02-s2",
      title: "const With Objects: An Important Subtlety",
      whyItMatters: "This catches every beginner. Understanding it now prevents the 'wait, I thought const was supposed to be constant?' confusion later.",
      content: `\`const\` means the **variable name** can't be reassigned to point to a different value. It does NOT mean the value itself is frozen.

For primitive values (numbers, strings, booleans), this distinction doesn't matter — primitives can't be modified anyway.

But for objects and arrays, the contents CAN change even when the variable is const:

\`\`\`js
const user = { name: "Alice", age: 25 };

user.age = 26;       // ✅ Works — modifying a property
user.email = "a@b";  // ✅ Works — adding a property
user = {};           // ❌ ERROR — reassigning the variable
\`\`\`

\`\`\`js
const colors = ["red", "green"];

colors.push("blue");  // ✅ Works — modifying the array
colors[0] = "pink";   // ✅ Works — replacing an element
colors = [];          // ❌ ERROR — reassigning the variable
\`\`\`

Why? Because the variable doesn't hold the object — it holds a *reference* to the object. \`const\` locks the reference, not the object. The object itself sits in memory and can be modified by anyone who has the reference.

To truly freeze an object, you need \`Object.freeze(obj)\` — but that's rarely necessary in practice. Most code relies on the convention "treat const objects as if they're immutable" without enforcing it.`,
      codeExamples: [
        {
          id: "ch02-s2-ex1",
          title: "Modifying a const object",
          description: "The object's contents change, but the variable keeps pointing to the same object.",
          code: {
            javascript: `const profile = { name: "Alice" };\nconsole.log(profile); // { name: 'Alice' }\n\nprofile.name = "Bob";\nprofile.age = 30;\nconsole.log(profile); // { name: 'Bob', age: 30 }\n\n// But this throws:\n// profile = { name: "Charlie" };`,
          },
          explanation: "We mutated the object freely. The const keeps the variable from being reassigned, but the object's properties are fair game.",
          tryItPrompt: "Try freezing the object with Object.freeze(profile) before the mutations. Now they fail silently in non-strict mode, or throw in strict mode.",
        },
      ],
      callouts: [
        { type: "common-mistake", title: '"const arrays should be immutable"', content: "False. const arrays can have items pushed, popped, sorted, and replaced. The const only prevents reassigning the variable to a different array." },
      ],
    },
    {
      id: "ch02-s3",
      title: "Block Scope and the Temporal Dead Zone",
      whyItMatters: "Modern JavaScript (let/const) uses block scope, which is more predictable than the function scope of the old `var` keyword. Once you understand it, certain bugs become impossible.",
      content: `A **block** in JavaScript is anything between curly braces: an if-statement body, a for-loop body, a function body, or even a standalone \`{ ... }\`.

\`let\` and \`const\` are **block-scoped** — they only exist inside the block where they're declared:

\`\`\`js
if (true) {
  const message = "Hello";
  console.log(message); // works
}
console.log(message); // ❌ ReferenceError: message is not defined
\`\`\`

This is exactly what you want. Variables don't leak out of their block, so you don't accidentally clash with code elsewhere.

Loops create a new scope per iteration:

\`\`\`js
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
console.log(i); // ❌ ReferenceError — i is gone after the loop
\`\`\`

**The Temporal Dead Zone (TDZ)** is the time between entering a scope and the line where a let/const variable is declared. During the TDZ, accessing the variable throws an error:

\`\`\`js
console.log(x); // ❌ ReferenceError — TDZ
let x = 10;
console.log(x); // 10
\`\`\`

This sounds esoteric but it's a feature, not a bug. Without TDZ, the first console.log would print \`undefined\` — a hidden bug. With TDZ, you get an immediate, loud error pointing at the real problem.`,
      codeExamples: [
        {
          id: "ch02-s3-ex1",
          title: "Block scope in action",
          description: "Variables stay where they belong.",
          code: {
            javascript: `function process(items) {\n  if (items.length > 0) {\n    const first = items[0];\n    console.log("First item:", first);\n  }\n  // 'first' doesn't exist out here\n  // console.log(first); // would throw\n}\n\nprocess(["a", "b", "c"]);`,
          },
          explanation: "first is declared inside the if-block. It exists for the duration of that block, then disappears. This prevents subtle bugs where leftover variables interfere with later code.",
          tryItPrompt: "Move the const first declaration above the if-statement. Now it's accessible everywhere in the function.",
        },
      ],
      callouts: [
        { type: "info", title: "Why TDZ exists", content: "It catches typos and ordering mistakes early. Without TDZ, accessing a variable before its declaration would silently give 'undefined,' and you'd have to hunt for the source of a wrong value." },
      ],
      microExercise: {
        instruction: "Why does this throw an error? Fix it.",
        starterCode: {
          javascript: `for (let i = 0; i < 3; i++) {\n  // some code\n}\nconsole.log("Final i:", i);`,
        },
        hint: "i is block-scoped to the for-loop. Declare i outside the loop if you need it after.",
        solution: {
          javascript: `let i;\nfor (i = 0; i < 3; i++) {\n  // some code\n}\nconsole.log("Final i:", i); // 3`,
        },
      },
    },
    {
      id: "ch02-s4",
      title: "Why var Is Banned in Modern Code",
      whyItMatters: "You'll see var in old codebases and tutorials. Knowing exactly why it's bad helps you confidently rewrite legacy code and avoid recreating its bugs.",
      content: `\`var\` was the only variable keyword in JavaScript for 20 years. It has three behaviors that range from confusing to actively dangerous:

**Problem 1 — Function scope, not block scope.** \`var\` ignores curly braces and only respects function boundaries:

\`\`\`js
function greet() {
  if (true) {
    var name = "Alice";
  }
  console.log(name); // "Alice" — leaked out of the if-block
}
\`\`\`

This is how variables accidentally leak between unrelated code sections.

**Problem 2 — Hoisting with undefined.** A \`var\` declaration is silently moved to the top of its function, but its assignment stays in place:

\`\`\`js
console.log(x); // undefined (NOT an error)
var x = 10;
console.log(x); // 10
\`\`\`

This is what hoisting actually means: the *declaration* is hoisted, the *initialization* is not. The result is variables that exist but are undefined — a bug magnet. \`let\` and \`const\` fix this with the TDZ.

**Problem 3 — Redeclaration is allowed.** You can declare the same var twice in the same scope and JavaScript silently allows it:

\`\`\`js
var count = 1;
var count = 99; // No error. count is now 99.
\`\`\`

This makes typos and naming clashes invisible. \`let\` and \`const\` throw an error if you redeclare in the same scope.

**The verdict:** Don't use \`var\`. Even legacy codebases are migrating away. Modern linters (ESLint with the recommended config) warn or error on every \`var\` you write. Use \`const\` by default, \`let\` when you need reassignment, and \`var\` never.`,
      codeExamples: [
        {
          id: "ch02-s4-ex1",
          title: "var vs let in a loop",
          description: "A classic gotcha that let solves elegantly.",
          code: {
            javascript: `// With var (the bug):\nvar funcs = [];\nfor (var i = 0; i < 3; i++) {\n  funcs.push(function() { return i; });\n}\nconsole.log(funcs.map(f => f())); // [3, 3, 3] — all share the SAME i\n\n// With let (the fix):\nconst funcs2 = [];\nfor (let j = 0; j < 3; j++) {\n  funcs2.push(function() { return j; });\n}\nconsole.log(funcs2.map(f => f())); // [0, 1, 2] — each j is its own scope`,
          },
          explanation: "var i is one variable shared across all iterations. By the time the functions run, i is 3. let j creates a fresh j per iteration, so each function captures its own value.",
          tryItPrompt: "This bug bit a generation of developers. Run the code and see how let elegantly solves it.",
        },
      ],
      callouts: [
        { type: "error", title: "Don't use var in new code", content: "There is zero benefit to var in modern JavaScript. Every modern style guide bans it. The only reason to know about var is to refactor old code." },
      ],
    },
    {
      id: "ch02-s5",
      title: "Naming Variables Like a Pro",
      whyItMatters: "Variable names are the documentation that runs alongside your code. Bad names create bugs, slow down teammates, and make your past self look careless.",
      content: `JavaScript names follow two main rules: they can contain letters, digits, \`_\`, and \`$\`; they cannot start with a digit; they cannot use reserved keywords like \`if\` or \`function\`.

Beyond the rules, conventions matter:

**camelCase for variables and functions:**

\`\`\`js
const userName = "Alice";        // ✅
const user_name = "Alice";       // ❌ snake_case (Python style)
const username = "Alice";        // ❌ ambiguous on multi-word names
\`\`\`

**PascalCase for classes and components:**

\`\`\`js
class UserProfile { ... }
function Button(props) { ... }   // React convention
\`\`\`

**SCREAMING_SNAKE_CASE for true constants:**

\`\`\`js
const MAX_RETRIES = 3;
const API_BASE_URL = "https://api.example.com";
\`\`\`

**Be specific.** \`data\`, \`info\`, \`stuff\`, \`thing\` are red flags. Better: \`userData\`, \`orderInfo\`, \`searchResults\`. The variable name should answer "what is this?" without you having to read the next 20 lines.

**Booleans usually start with \`is\`, \`has\`, \`can\`, \`should\`:**

\`\`\`js
const isLoggedIn = true;
const hasPermission = false;
const canEdit = true;
\`\`\`

**Avoid abbreviations** unless they're truly universal. \`url\`, \`id\`, \`html\` are fine. \`usr\`, \`pwd\`, \`btn\` save three letters and cost a future reader 30 seconds of guessing.

**Plurals for arrays:**

\`\`\`js
const user = { name: "Alice" };       // singular for single object
const users = [user1, user2, user3];  // plural for arrays
\`\`\`

This makes \`for (const user of users)\` read naturally — exactly like English.`,
      callouts: [
        { type: "pro-tip", title: "Code is read 10x more than written", content: "Spend the extra 5 seconds picking a great name. Future you (or a coworker) will spend 5 minutes saved every time they read it." },
      ],
      deepDive: `**Hoisting under the hood.** JavaScript engines do a two-pass scan of every function: first they note every var declaration and function statement, then they execute the code. By the time execution starts, every var declaration is "already there" with the value undefined. This is why \`console.log(x)\` before \`var x = 10\` prints undefined instead of throwing.

let and const are also hoisted, but they're put in the temporal dead zone until execution reaches their declaration. Same mechanism, much safer behavior.

**Why JavaScript uses camelCase.** Brendan Eich (JavaScript's creator) modeled the syntax after Java, which used camelCase. Browsers and the standard library all followed suit. Snake_case (used in Python and Ruby) and kebab-case (used in CSS and HTML) work too — but using them in JavaScript marks you as new to the ecosystem.`,
    },
  ],
  exercises: [
    {
      id: "js-ch-02-ex1",
      title: "Choose the right keyword",
      difficulty: 1,
      description: "Declare four variables: a constant pi, a counter starting at 0, a user object that won't be reassigned but will gain properties, and a max-attempts constant.",
      requirements: ["pi: const, value 3.14159", "counter: let, value 0", "user: const, empty object", "MAX_ATTEMPTS: const, value 5"],
      starterCode: { javascript: `// declare your variables here\n\n// then increment counter:\n// add a name property to user:` },
      hints: ["Constants that won't be reassigned use const, even for objects (you can still mutate properties)", "MAX_ATTEMPTS is a screaming constant"],
      solution: {
        javascript: `const pi = 3.14159;\nlet counter = 0;\nconst user = {};\nconst MAX_ATTEMPTS = 5;\n\ncounter = counter + 1;\nuser.name = "Alice";\n\nconsole.log({ pi, counter, user, MAX_ATTEMPTS });`,
      },
      solutionExplanation: "counter needs let because we reassign it. user is const but we add properties — that's allowed because we're mutating, not reassigning.",
    },
    {
      id: "js-ch-02-ex2",
      title: "Predict block scope",
      difficulty: 2,
      description: "What does each console.log print? Write your answers, then run the code to verify.",
      requirements: ["Read carefully without running", "Predict the output of each log"],
      starterCode: {
        javascript: `let a = 1;\n{\n  let a = 2;\n  console.log("inner a:", a);\n}\nconsole.log("outer a:", a);\n\nfor (let i = 0; i < 2; i++) {\n  // some code\n}\ntry { console.log("i after loop:", i); } catch (e) { console.log("Error:", e.message); }`,
      },
      hints: ["Each block creates its own scope", "i exists only inside the for-loop block"],
      solution: {
        javascript: `// inner a: 2  (the inner let shadows the outer)\n// outer a: 1  (outer was untouched)\n// Error: i is not defined  (i was scoped to the loop)\n\n// To verify, run the original code as-is.`,
      },
      solutionExplanation: "Inner let creates a new variable that shadows the outer one — they're entirely separate. The for-loop's i is gone after the loop ends.",
    },
    {
      id: "js-ch-02-ex3",
      title: "Refactor away from var",
      difficulty: 3,
      description: "This old function uses var and has a subtle bug. Rewrite it with let/const and explain what was wrong.",
      requirements: ["Replace every var with let or const", "Fix the closure-in-loop bug", "Code should print 0, 1, 2 (not 3, 3, 3)"],
      starterCode: {
        javascript: `function buildHandlers() {\n  var handlers = [];\n  for (var i = 0; i < 3; i++) {\n    handlers.push(function() { return i; });\n  }\n  return handlers;\n}\n\nvar result = buildHandlers().map(function(fn) { return fn(); });\nconsole.log(result); // [3, 3, 3] — wrong!`,
      },
      hints: ["Change var i to let i — that gives each iteration its own i"],
      solution: {
        javascript: `function buildHandlers() {\n  const handlers = [];\n  for (let i = 0; i < 3; i++) {\n    handlers.push(function() { return i; });\n  }\n  return handlers;\n}\n\nconst result = buildHandlers().map(fn => fn());\nconsole.log(result); // [0, 1, 2] — fixed!`,
      },
      solutionExplanation: "var i was a single shared variable; by the time the handlers ran, i was 3. let i creates a per-iteration variable, so each handler captures its own value.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "js-ch-02-q1",
        type: "mcq",
        question: "Which keyword should you reach for FIRST when declaring a variable in modern JavaScript?",
        options: ["var", "let", "const", "function"],
        correctAnswer: 2,
        explanation: "Default to const. Switch to let only if you discover you need to reassign. Never use var in new code.",
        difficulty: 1,
      },
      {
        id: "js-ch-02-q2",
        type: "code-output",
        question: "What does this print?",
        code: `const obj = { count: 0 };\nobj.count = 5;\nconsole.log(obj.count);`,
        options: ["Error", "0", "5", "undefined"],
        correctAnswer: 2,
        explanation: "const prevents reassigning obj, but the object's properties can still be mutated. count becomes 5.",
        difficulty: 2,
      },
      {
        id: "js-ch-02-q3",
        type: "code-output",
        question: "What does this print?",
        code: `if (true) {\n  let x = 10;\n}\nconsole.log(x);`,
        options: ["10", "undefined", "ReferenceError", "null"],
        correctAnswer: 2,
        explanation: "let is block-scoped. x exists only inside the if-block. Accessing it outside throws ReferenceError.",
        difficulty: 2,
      },
      {
        id: "js-ch-02-q4",
        type: "code-output",
        question: "What does this print?",
        code: `console.log(x);\nvar x = 5;`,
        options: ["5", "undefined", "ReferenceError", "null"],
        correctAnswer: 1,
        explanation: "var is hoisted with value undefined. The console.log runs before the assignment, so it sees undefined. (With let, it would throw.)",
        difficulty: 3,
      },
      {
        id: "js-ch-02-q5",
        type: "true-false",
        question: "You can use the same name with let twice in the same scope.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. let and const both throw if you redeclare in the same scope. Only var allows it (silently).",
        difficulty: 2,
      },
      {
        id: "js-ch-02-q6",
        type: "mcq",
        question: "Which name follows JavaScript conventions for a variable holding the user's age?",
        options: ["user_age", "USERAGE", "userAge", "UserAge"],
        correctAnswer: 2,
        explanation: "JavaScript uses camelCase for variables. PascalCase is for classes; SCREAMING_SNAKE_CASE is for true constants.",
        difficulty: 1,
      },
    ],
  },
  cheatSheet: [
    { label: "Mutable variable", value: "let count = 0;" },
    { label: "Constant binding", value: "const name = 'Alice';" },
    { label: "Object const", value: "const obj = {}; obj.x = 1; // OK" },
    { label: "Array const", value: "const arr = []; arr.push(1); // OK" },
    { label: "Block scope", value: "{ let x = 1; } x // ❌ undefined" },
    { label: "Naming", value: "camelCase for vars, PascalCase for classes, SCREAMING for constants" },
    { label: "Avoid", value: "var (function-scoped, hoisted, allows redeclare)" },
  ],
};

// ============================================================================
// JS CHAPTER 3 — DATA TYPES
// ============================================================================
export const jsCh03: Chapter = {
  id: "js-ch-03",
  number: 3,
  title: "Data Types",
  subtitle: "The seven primitives, the object family, and the typeof quirks every JavaScript dev memorizes.",
  difficulty: "Absolute Beginner",
  estimatedMinutes: 40,
  xpReward: 120,
  prerequisites: ["js-ch-02"],
  partLabel: "Part 1: JavaScript Foundations",
  learningObjectives: [
    "Identify all seven primitive types in JavaScript.",
    "Distinguish primitives from objects and explain how they behave differently.",
    "Use typeof correctly and recognize its famous quirks.",
    "Understand the difference between null and undefined.",
    "Use template literals and string methods for everyday text manipulation.",
  ],
  sections: [
    {
      id: "ch03-s1",
      title: "The Seven Primitive Types",
      whyItMatters: "Every value in JavaScript is one of a handful of types. Knowing the list cold prevents whole categories of bugs and makes documentation make sense.",
      realWorldAnalogy: "Primitives are like atoms: simple, indivisible building blocks. Objects (covered next) are like molecules: built from atoms but more complex.",
      content: `JavaScript has exactly seven primitive types:

**1. Number** — every numeric value, integers and decimals alike.

\`\`\`js
let age = 25;
let price = 9.99;
let huge = 1e10; // 10 billion
let infinity = Infinity;
let notANumber = NaN; // result of invalid math like 0/0
\`\`\`

JavaScript has only ONE number type. There's no separate int or float. All numbers are 64-bit floating point.

**2. String** — text. Surrounded by single quotes, double quotes, or backticks:

\`\`\`js
let name = "Alice";
let single = 'works too';
let template = \`Hello, \${name}\`; // backticks allow interpolation
\`\`\`

**3. Boolean** — true or false. That's it.

\`\`\`js
let isReady = true;
let isLocked = false;
\`\`\`

**4. Null** — the deliberate absence of a value. You set something to null when you mean "I checked and there's nothing here on purpose."

\`\`\`js
let selectedUser = null;
\`\`\`

**5. Undefined** — the absence of an assigned value. Variables that haven't been assigned are automatically undefined.

\`\`\`js
let x;
console.log(x); // undefined
\`\`\`

**6. BigInt** — integers larger than Number can safely hold (above 2^53). Written with a trailing \`n\`:

\`\`\`js
const big = 9007199254740993n;
\`\`\`

You'll rarely need BigInt; most apps don't deal with numbers that large.

**7. Symbol** — unique, immutable identifiers. Used as object keys when you need to guarantee no collision with other keys. Mostly an advanced feature; you can ignore it for the first few months.

\`\`\`js
const id = Symbol("id");
\`\`\`

These seven types are the entire universe of primitives. Everything else (arrays, functions, dates, regular expressions) is an object.`,
      codeExamples: [
        {
          id: "ch03-s1-ex1",
          title: "Each primitive in action",
          description: "Use typeof to inspect the type of any value.",
          code: {
            javascript: `console.log(typeof 42);          // "number"\nconsole.log(typeof 3.14);        // "number" — same type as 42\nconsole.log(typeof "hello");     // "string"\nconsole.log(typeof true);        // "boolean"\nconsole.log(typeof undefined);   // "undefined"\nconsole.log(typeof 9007199254740993n); // "bigint"\nconsole.log(typeof Symbol("a")); // "symbol"\n\n// The famous quirk:\nconsole.log(typeof null);        // "object" — historical bug, never fixed`,
          },
          explanation: "typeof returns a string telling you the type. Note the famous null quirk — typeof null is 'object,' a 25-year-old bug that can't be fixed without breaking the web.",
          tryItPrompt: "Try typeof on different values: typeof NaN, typeof Infinity, typeof 'NaN'. They might surprise you.",
        },
      ],
      callouts: [
        { type: "info", title: "typeof null === 'object'", content: "The single most-asked JavaScript quiz question. It's a bug from 1995 that was never fixed for backwards compatibility. Just memorize it." },
      ],
    },
    {
      id: "ch03-s2",
      title: "Objects: Everything Else",
      whyItMatters: "Objects are how you group related data. Once you understand them, the next 80% of JavaScript becomes easier to grasp.",
      content: `Anything that's not a primitive is an object. The main categories:

**Plain objects** — collections of key/value pairs:

\`\`\`js
const user = {
  name: "Alice",
  age: 25,
  email: "alice@example.com"
};
console.log(user.name);     // "Alice"
console.log(user["email"]); // "alice@example.com"
\`\`\`

**Arrays** — ordered lists. Technically objects under the hood, but with special syntax and methods:

\`\`\`js
const colors = ["red", "green", "blue"];
console.log(colors[0]);      // "red"
console.log(colors.length);  // 3
\`\`\`

**Functions** — also objects, just callable ones:

\`\`\`js
function greet(name) { return "Hi, " + name; }
console.log(typeof greet); // "function"  (special-case of object)
\`\`\`

**Built-ins** — Date, RegExp, Map, Set, etc. All objects.

\`\`\`js
const today = new Date();
const pattern = /^\\d+$/;
const cache = new Map();
\`\`\`

**The big difference between primitives and objects:** primitives are *copied by value*, objects are *copied by reference*.

\`\`\`js
let a = 5;
let b = a;
b = 10;
console.log(a); // 5 — unaffected

let x = { count: 5 };
let y = x;        // y points to the SAME object
y.count = 10;
console.log(x.count); // 10 — they're the same object!
\`\`\`

This is the source of countless bugs for beginners. To copy an object, you have to do it explicitly: \`{ ...x }\` or \`structuredClone(x)\`. We'll cover this in detail in a later chapter.`,
      codeExamples: [
        {
          id: "ch03-s2-ex1",
          title: "Reference vs value semantics",
          description: "Primitives copy. Objects share.",
          code: {
            javascript: `// Primitives — independent copies\nlet n1 = 10;\nlet n2 = n1;\nn2 = 999;\nconsole.log("n1:", n1, "n2:", n2); // 10 and 999\n\n// Objects — shared reference\nlet o1 = { val: 10 };\nlet o2 = o1;\no2.val = 999;\nconsole.log("o1.val:", o1.val); // 999 — they're the same object\n\n// To get an independent copy:\nlet o3 = { ...o1 };  // spread creates a shallow copy\no3.val = 0;\nconsole.log("o1.val:", o1.val, "o3.val:", o3.val); // 999 and 0`,
          },
          explanation: "Two variables can point to the same object. Mutating through one is visible through the other. Spread (...) creates a new object with the same properties.",
          tryItPrompt: "Try the same with arrays. Do let arr2 = arr1; arr2.push(99). What happens to arr1?",
        },
      ],
      callouts: [
        { type: "common-mistake", title: "Passing objects to functions", content: "Functions receive references to objects, not copies. If your function mutates the parameter, the caller sees the change. This is a frequent source of 'spooky action at a distance' bugs." },
      ],
    },
    {
      id: "ch03-s3",
      title: "null vs undefined",
      whyItMatters: "These two values both mean 'nothing,' but they mean it in different ways. Knowing when to use which separates beginners from intermediate developers.",
      content: `**undefined** is JavaScript's default. You get it when:

- A variable is declared but never assigned: \`let x;\`
- A function parameter is not provided
- You access an object property that doesn't exist
- A function doesn't explicitly return anything

\`\`\`js
let x;
console.log(x); // undefined

function noReturn() {}
console.log(noReturn()); // undefined

const obj = {};
console.log(obj.missing); // undefined
\`\`\`

**null** is what YOU set when you mean "intentionally empty." It never appears unless you (or a library) put it there.

\`\`\`js
let selectedItem = null; // explicitly nothing selected
\`\`\`

**Convention in real codebases:**

- Use \`undefined\` for "this hasn't been set yet" or "this is missing."
- Use \`null\` for "this was explicitly cleared / intentionally empty."

**The == vs === gotcha:**

\`\`\`js
null == undefined   // true (loose equality treats them as equal)
null === undefined  // false (strict equality compares types too)
\`\`\`

This is why most code uses \`===\` (strict equality) — \`==\` has too many quirks. The one practical use of \`null == x\` is checking for both at once: \`if (x == null)\` is true for both null and undefined.

**Optional chaining** (\`?.\`) and **nullish coalescing** (\`??\`) are modern operators that handle these elegantly:

\`\`\`js
const name = user?.profile?.name ?? "Anonymous";
// If user or user.profile is null/undefined, return "Anonymous"
\`\`\``,
      codeExamples: [
        {
          id: "ch03-s3-ex1",
          title: "null vs undefined in practice",
          description: "Notice how each shows up in different situations.",
          code: {
            javascript: `// Undefined: not yet set\nlet user;\nconsole.log(user); // undefined\n\n// Undefined: missing property\nconst person = { name: "Alice" };\nconsole.log(person.email); // undefined\n\n// Null: explicitly empty\nlet selected = null;\nconsole.log(selected); // null\n\n// Loose vs strict equality\nconsole.log(null == undefined);  // true\nconsole.log(null === undefined); // false\n\n// Modern handling\nconst displayName = person.email ?? "no email";\nconsole.log(displayName); // "no email"`,
          },
          explanation: "?? returns the right side ONLY if the left side is null or undefined. Other 'falsy' values like 0 or '' pass through unchanged — different from || which would replace them.",
          tryItPrompt: "Try `0 ?? 'default'` vs `0 || 'default'`. The first returns 0, the second returns 'default'. That's why ?? is usually safer.",
        },
      ],
      microExercise: {
        instruction: "What does each line print?",
        starterCode: {
          javascript: `console.log(typeof undefined);\nconsole.log(typeof null);\nconsole.log(undefined == null);\nconsole.log(undefined === null);`,
        },
        hint: "Remember: typeof null is the famous quirk; == is loose, === is strict.",
        solution: {
          javascript: `// "undefined"\n// "object"  ← the famous bug\n// true\n// false`,
        },
      },
    },
    {
      id: "ch03-s4",
      title: "Strings and Template Literals",
      whyItMatters: "Strings are the most common data type in 90% of programs. Knowing the modern syntax saves you from writing ugly code.",
      content: `Strings can use single quotes, double quotes, or backticks. Single and double quotes are interchangeable — pick one and stick with it within a project (most teams use single).

**Backticks** (template literals) are special. They allow:

**Interpolation** with \`\${}\`:

\`\`\`js
const name = "Alice";
const greeting = \`Hello, \${name}!\`;
\`\`\`

**Multi-line strings** without escapes:

\`\`\`js
const html = \`
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
\`;
\`\`\`

**Expressions inside the interpolation**, not just variables:

\`\`\`js
const total = \`The total is \${price * quantity + tax} dollars\`;
\`\`\`

Common string operations every developer uses daily:

\`\`\`js
const s = "Hello, World";

s.length              // 12
s.toUpperCase()       // "HELLO, WORLD"
s.toLowerCase()       // "hello, world"
s.includes("World")   // true
s.startsWith("Hell")  // true
s.endsWith("ld")      // true
s.indexOf("o")        // 4 (first match)
s.slice(7, 12)        // "World" (substring from index 7 to 12)
s.split(", ")         // ["Hello", "World"]
s.replace("World", "JS") // "Hello, JS"
s.trim()              // removes whitespace from both ends
s.repeat(3)           // "Hello, WorldHello, WorldHello, World"
\`\`\`

Strings are **immutable** — every method that "modifies" a string actually returns a new one. \`s.toUpperCase()\` does not change s; it returns a new string.

\`\`\`js
const original = "hello";
const upper = original.toUpperCase();
console.log(original); // "hello" — unchanged
console.log(upper);    // "HELLO"
\`\`\``,
      codeExamples: [
        {
          id: "ch03-s4-ex1",
          title: "Template literals at work",
          description: "Build a multi-line message that injects values cleanly.",
          code: {
            javascript: `const user = { name: "Alice", age: 25, role: "admin" };\n\nconst message = \`\nUser Profile\n============\nName: \${user.name}\nAge:  \${user.age}\nRole: \${user.role.toUpperCase()}\n\${user.age >= 18 ? "Status: Adult" : "Status: Minor"}\n\`;\n\nconsole.log(message);`,
          },
          explanation: "Multi-line. Interpolation. Method calls and ternary expressions inside ${}. This single feature replaces 90% of the string concatenation older code does.",
          tryItPrompt: "Add a fourth field — email — and include it in the message with a different format.",
        },
      ],
      deepDive: `**Tagged template literals.** You can prefix a template literal with a function name. The function receives the string parts and the interpolated values, letting you build custom string processors:

\`\`\`js
function html(strings, ...values) {
  // Sanitize each value, then assemble
  return strings.reduce((out, str, i) => 
    out + str + (values[i] ?? ""), "");
}

const name = "<script>";
const safe = html\`Hello \${name}!\`;
\`\`\`

This is how libraries like styled-components and lit-html provide their elegant template syntax.

**Why strings are immutable.** Mutable strings would require a copy-on-write semantic that hurts performance and creates aliasing bugs. By making strings immutable, the engine can safely intern them (reuse identical strings in memory) and pass them between threads without locking. Every modern language with strings has converged on this design.`,
    },
  ],
  exercises: [
    {
      id: "js-ch-03-ex1",
      title: "Type detective",
      difficulty: 1,
      description: "For each value below, write what typeof returns. Verify by running the code.",
      requirements: ["Predict before running", "Note the famous quirk for null"],
      starterCode: {
        javascript: `console.log(typeof 42);\nconsole.log(typeof "hi");\nconsole.log(typeof true);\nconsole.log(typeof undefined);\nconsole.log(typeof null);\nconsole.log(typeof []);\nconsole.log(typeof {});\nconsole.log(typeof function() {});`,
      },
      hints: ["null and arrays both return 'object' — be careful"],
      solution: {
        javascript: `// "number"\n// "string"\n// "boolean"\n// "undefined"\n// "object"   ← the famous quirk\n// "object"   ← arrays are objects\n// "object"\n// "function" ← functions are special-case objects`,
      },
      solutionExplanation: "Arrays and null both report as 'object.' For arrays, use Array.isArray() instead. For null, just check === null.",
    },
    {
      id: "js-ch-03-ex2",
      title: "Build a profile message",
      difficulty: 2,
      description: "Use template literals and string methods to build a formatted user profile message from a user object.",
      requirements: ["Use a template literal (backticks)", "Include the user's name in uppercase", "Show their initials (first letter of name + first letter of surname)", "Multi-line output"],
      starterCode: {
        javascript: `const user = { firstName: "alice", lastName: "smith", age: 27 };\n\n// build the message\nconst message = \`...\`;\n\nconsole.log(message);`,
      },
      hints: ["firstName[0] gives the first character", ".toUpperCase() converts a string"],
      solution: {
        javascript: `const user = { firstName: "alice", lastName: "smith", age: 27 };\n\nconst initials = user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase();\nconst fullName = \`\${user.firstName} \${user.lastName}\`.toUpperCase();\n\nconst message = \`\nProfile\n-------\nName: \${fullName}\nInitials: \${initials}\nAge: \${user.age}\n\`;\n\nconsole.log(message);`,
      },
      solutionExplanation: "Template literals make formatted output easy. We compute initials and full name first, then drop them into the template.",
    },
    {
      id: "js-ch-03-ex3",
      title: "Reference vs value puzzle",
      difficulty: 3,
      description: "Predict the output of this code without running it.",
      requirements: ["Trace each variable carefully", "Remember primitives copy, objects share"],
      starterCode: {
        javascript: `let a = 5;\nlet b = a;\nb += 10;\n\nlet x = { count: 5 };\nlet y = x;\ny.count += 10;\n\nlet arr1 = [1, 2, 3];\nlet arr2 = [...arr1]; // spread\narr2.push(4);\n\nconsole.log(a, b);\nconsole.log(x.count, y.count);\nconsole.log(arr1, arr2);`,
      },
      hints: ["Spread creates a new array; without spread, arr2 would point to arr1"],
      solution: {
        javascript: `// 5 15        — primitive: independent\n// 15 15      — object: same reference\n// [1,2,3] [1,2,3,4]  — spread copied the array, so they're independent`,
      },
      solutionExplanation: "Numbers are primitives → copied. Objects are references → shared. Spread (...) creates a shallow copy of an array or object, breaking the shared reference.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "js-ch-03-q1",
        type: "mcq",
        question: "How many primitive types does JavaScript have?",
        options: ["3", "5", "7", "10"],
        correctAnswer: 2,
        explanation: "Number, String, Boolean, Null, Undefined, BigInt, Symbol — exactly 7 primitives. Everything else is an object.",
        difficulty: 1,
      },
      {
        id: "js-ch-03-q2",
        type: "code-output",
        question: "What does this print?",
        code: `console.log(typeof null);`,
        options: ['"null"', '"undefined"', '"object"', '"primitive"'],
        correctAnswer: 2,
        explanation: 'The famous quirk — typeof null returns "object" due to a bug from 1995 that can\'t be fixed without breaking the web.',
        difficulty: 2,
      },
      {
        id: "js-ch-03-q3",
        type: "code-output",
        question: "What does this print?",
        code: `let a = { x: 1 };\nlet b = a;\nb.x = 99;\nconsole.log(a.x);`,
        options: ["1", "99", "undefined", "Error"],
        correctAnswer: 1,
        explanation: "Objects are shared by reference. b and a point to the same object. Mutating through b is visible through a.",
        difficulty: 2,
      },
      {
        id: "js-ch-03-q4",
        type: "code-output",
        question: "What does this print?",
        code: `console.log(0 ?? "default");\nconsole.log(0 || "default");`,
        options: ["0 and 0", "default and default", "0 and default", "default and 0"],
        correctAnswer: 2,
        explanation: "?? only replaces null/undefined — 0 passes through. || replaces any falsy value — 0 is falsy, so it's replaced.",
        difficulty: 3,
      },
      {
        id: "js-ch-03-q5",
        type: "mcq",
        question: "Which feature does template literals (backticks) provide that single/double quotes don't?",
        options: ["Bigger strings", "${} interpolation and multi-line support", "Faster performance", "Stricter typing"],
        correctAnswer: 1,
        explanation: "Template literals add ${} interpolation and allow multi-line strings without \\n. Single/double quotes have neither feature.",
        difficulty: 1,
      },
      {
        id: "js-ch-03-q6",
        type: "true-false",
        question: "Strings in JavaScript are immutable.",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation: "True. Methods like toUpperCase return NEW strings; the original is untouched. You can't modify a character in place.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "7 primitives", value: "Number, String, Boolean, Null, Undefined, BigInt, Symbol" },
    { label: "Check type", value: "typeof value" },
    { label: "typeof null quirk", value: '"object" — historical bug' },
    { label: "null", value: "Intentionally empty (you set it)" },
    { label: "undefined", value: "Not yet set (default)" },
    { label: "Template literal", value: "`Hello, ${name}!`" },
    { label: "Multi-line", value: "Backticks support \\n natively" },
    { label: "Object reference", value: "let b = a; b.x = 1; → a.x is also 1" },
    { label: "Shallow copy", value: "{ ...obj } or [...arr]" },
    { label: "Nullish coalescing", value: "value ?? fallback" },
  ],
};

// ============================================================================
// JS CHAPTER 4 — OPERATORS
// ============================================================================
export const jsCh04: Chapter = {
  id: "js-ch-04",
  number: 4,
  title: "Operators",
  subtitle: "Math, comparison, logical, and assignment — the verbs of JavaScript.",
  difficulty: "Beginner",
  estimatedMinutes: 35,
  xpReward: 110,
  prerequisites: ["js-ch-03"],
  partLabel: "Part 1: JavaScript Foundations",
  learningObjectives: [
    "Use arithmetic, assignment, comparison, and logical operators correctly.",
    "Always use === instead of == and explain why.",
    "Use logical operators (&&, ||, !) for both branching and short-circuiting.",
    "Apply the modern operators ?? (nullish coalescing) and ?. (optional chaining).",
    "Understand operator precedence well enough to add parentheses when needed.",
  ],
  sections: [
    {
      id: "ch04-s1",
      title: "Arithmetic and Assignment",
      whyItMatters: "Math operators look obvious — until you hit the quirky cases (string + number, modulo with negatives). Knowing the rules saves you from baffling bugs.",
      realWorldAnalogy: "Operators are verbs. Variables are nouns. A program is sentences.",
      content: `**Arithmetic operators:**

\`\`\`js
let a = 10, b = 3;
a + b   // 13   addition
a - b   // 7    subtraction
a * b   // 30   multiplication
a / b   // 3.333...  division (always float, never truncates)
a % b   // 1    modulo (remainder)
a ** b  // 1000 exponentiation (10^3)
\`\`\`

**The plus operator is overloaded.** With numbers it adds; with strings it concatenates. If EITHER side is a string, the other is converted to string:

\`\`\`js
1 + 2          // 3
"1" + 2        // "12"   ← number coerced to string
"price: " + 5  // "price: 5"
\`\`\`

This trips up beginners constantly. Always be explicit:

\`\`\`js
const cost = 10;
const tax = 2;
console.log("Total: " + (cost + tax)); // "Total: 12" — parentheses force math first
\`\`\`

**Assignment operators** combine an operation with assignment:

\`\`\`js
let x = 10;
x += 5;   // x = x + 5  → 15
x -= 3;   // x = x - 3  → 12
x *= 2;   // x = x * 2  → 24
x /= 4;   // x = x / 4  → 6
x %= 4;   // x = x % 4  → 2
x **= 3;  // x = x ** 3 → 8
\`\`\`

**Increment/decrement:**

\`\`\`js
let i = 0;
i++;   // i is now 1
i--;   // i is now 0
\`\`\`

There's also \`++i\` (pre-increment) vs \`i++\` (post-increment). The difference matters when you use the value in an expression:

\`\`\`js
let a = 5;
console.log(a++); // prints 5, THEN a becomes 6
console.log(++a); // a becomes 7, THEN prints 7
\`\`\`

In modern code, prefer \`i += 1\` and avoid \`++\`/\`--\` when used inside other expressions — it's clearer.`,
      codeExamples: [
        {
          id: "ch04-s1-ex1",
          title: "Watch out for + with strings",
          description: "Three almost-identical expressions, three different results.",
          code: {
            javascript: `console.log(1 + 2 + "3");   // "33"  → 1+2=3, then 3+"3"="33"\nconsole.log("1" + 2 + 3);   // "123" → "1"+2="12", then "12"+3="123"\nconsole.log(1 + 2 + 3);     // 6\n\n// To force math: wrap in parens or coerce explicitly\nconsole.log(Number("1") + 2 + 3); // 6`,
          },
          explanation: "JavaScript evaluates + left to right. Once a string appears, every subsequent + becomes concatenation. The order of operands matters.",
          tryItPrompt: "Predict the output of `'5' - 2`. Hint: minus, unlike plus, always means math.",
        },
      ],
      callouts: [
        { type: "common-mistake", title: '"5" + 1 is not 6', content: 'It\'s "51." Plus is the only arithmetic operator that doubles as string concatenation. Use Number(x) or parseInt(x) to coerce strings to numbers explicitly.' },
      ],
    },
    {
      id: "ch04-s2",
      title: "Comparison: Why == is Banned",
      whyItMatters: "Choosing == over === is the single most common cause of confusing JavaScript bugs. Learning to use === always saves you from a category of errors entirely.",
      content: `JavaScript has two equality operators:

**== (loose equality)** converts both sides to a common type before comparing. The conversion rules are baroque and surprising:

\`\`\`js
0 == false        // true
"" == false       // true
"0" == 0          // true
null == undefined // true
"5" == 5          // true
[] == false       // true (!)
[1] == 1          // true (!!)
\`\`\`

**=== (strict equality)** compares both type AND value. No conversion:

\`\`\`js
0 === false        // false (different types)
"5" === 5          // false
null === undefined // false
\`\`\`

**The rule is simple: always use ===.** The only universally accepted exception is \`x == null\`, which conveniently checks for both null AND undefined in one go.

**!= and !==** work the same way — \`!==\` is strict, \`!=\` is loose. Always use \`!==\`.

**Comparison operators:**

\`\`\`js
a < b    // less than
a > b    // greater than
a <= b   // less than or equal
a >= b   // greater than or equal
\`\`\`

These work as expected for numbers. For strings, they compare lexicographically (alphabetically by character codes), which gives some surprises:

\`\`\`js
"apple" < "banana"  // true
"Apple" < "apple"   // true (uppercase letters have lower codes)
"10" < "9"          // true (string comparison is character-by-character: "1" < "9")
\`\`\`

If you need to compare numeric strings as numbers, convert first: \`Number("10") < Number("9")\` → false.`,
      codeExamples: [
        {
          id: "ch04-s2-ex1",
          title: "Why === every time",
          description: "Same comparisons, two operators, very different results.",
          code: {
            javascript: `console.log("==  comparisons:");\nconsole.log("'5' == 5    →", "5" == 5);    // true\nconsole.log("0 == false   →", 0 == false);   // true\nconsole.log("null == undefined →", null == undefined); // true\n\nconsole.log("\\n=== comparisons:");\nconsole.log("'5' === 5   →", "5" === 5);   // false\nconsole.log("0 === false  →", 0 === false);  // false\nconsole.log("null === undefined →", null === undefined); // false\n\n// The accepted exception:\nconsole.log("\\nx == null catches both:");\nconsole.log("undefined == null →", undefined == null); // true\nconsole.log("null == null      →", null == null);      // true\nconsole.log("0 == null         →", 0 == null);         // false`,
          },
          explanation: "=== gives predictable results based on what you wrote. == applies a hidden conversion that surprises everyone. The exception x == null is sometimes accepted because it concisely checks for both null and undefined.",
          tryItPrompt: "Try [] == false, [] == [], and {} == {}. Each one teaches you something about JavaScript's quirks.",
        },
      ],
      callouts: [
        { type: "warning", title: "ESLint can ban == for you", content: "The rule 'eqeqeq' makes ESLint flag every == as an error. Most modern projects enable it. There is no good reason to ever use == in new code." },
      ],
    },
    {
      id: "ch04-s3",
      title: "Logical Operators and Short-Circuiting",
      whyItMatters: "Logical operators do far more than 'and/or' — they enable elegant patterns for default values, conditional rendering, and safe access. Mastering short-circuiting unlocks idiomatic JavaScript.",
      content: `**The three logical operators:**

\`\`\`js
a && b   // AND — true if both are truthy
a || b   // OR  — true if either is truthy
!a       // NOT — flips the truthiness
\`\`\`

But here's the surprise: \`&&\` and \`||\` don't return booleans. They return one of their operands.

**\`||\` returns the first truthy value, or the last value if all are falsy:**

\`\`\`js
"hi" || "default"      // "hi"
"" || "default"        // "default"
null || 0 || "value"   // "value"
0 || ""                // "" (last value, all falsy)
\`\`\`

**\`&&\` returns the first falsy value, or the last value if all are truthy:**

\`\`\`js
"a" && "b"           // "b"
"" && "b"            // ""
"a" && 0 && "b"      // 0
\`\`\`

This enables a classic pattern called **short-circuit evaluation**:

\`\`\`js
// Only call save() if user is truthy
user && save(user);

// Default value if name is missing/empty
const display = name || "Anonymous";

// Render only when isLoggedIn (used in React)
{isLoggedIn && <UserMenu />}
\`\`\`

**Falsy values** in JavaScript — the values that count as false in conditions:
\`false\`, \`0\`, \`-0\`, \`0n\`, \`""\`, \`null\`, \`undefined\`, \`NaN\`. **Everything else is truthy** — including \`"0"\`, \`"false"\`, \`[]\`, and \`{}\`.

**The modern alternative — ?? (nullish coalescing):**

\`||\` treats 0 and "" as falsy and replaces them. Sometimes that's wrong:

\`\`\`js
const count = 0;
const display = count || "no count";   // "no count" (probably not what you wanted)
const display2 = count ?? "no count";  // 0 (correct — 0 is a valid count)
\`\`\`

\`??\` only replaces null and undefined. Use it when you want "fall back ONLY if the value is missing."

**Optional chaining (\`?.\`)** safely accesses properties:

\`\`\`js
const city = user?.address?.city; // undefined if user or address is null/undefined
const result = api.fetch?.();      // undefined if fetch is missing
\`\`\``,
      codeExamples: [
        {
          id: "ch04-s3-ex1",
          title: "?? vs || in real code",
          description: "Pick the wrong one and your defaults will replace valid values.",
          code: {
            javascript: `const config = { volume: 0, name: "" };\n\n// Bug: || treats 0 and "" as falsy\nconsole.log(config.volume || 50);  // 50  ← wrong! 0 was a valid setting\nconsole.log(config.name || "Anonymous"); // "Anonymous"  ← maybe wrong\n\n// Fix: ?? only replaces null/undefined\nconsole.log(config.volume ?? 50);  // 0   ← correct\nconsole.log(config.name ?? "Anonymous"); // ""  ← respects empty string\n\n// Optional chaining\nconst user = { profile: null };\nconsole.log(user.profile?.name);   // undefined (no error)\nconsole.log(user?.profile?.name ?? "no name"); // "no name"`,
          },
          explanation: "Use ?? when 0 and '' are valid values you want to keep. Use || when you want to replace any falsy value. They're not interchangeable.",
          tryItPrompt: "Try `false ?? true` and `false || true`. They behave differently because false is falsy but not nullish.",
        },
      ],
      callouts: [
        { type: "pro-tip", title: "Truthy/falsy memorization", content: 'The 8 falsy values: false, 0, -0, 0n, "", null, undefined, NaN. Everything else is truthy. Memorize this list — it answers many "why is my condition wrong" questions.' },
      ],
      microExercise: {
        instruction: "Predict the value of each expression.",
        starterCode: {
          javascript: `console.log("a" || "b");\nconsole.log(0 || "fallback");\nconsole.log(0 ?? "fallback");\nconsole.log(null && "anything");\nconsole.log("first" && "second");`,
        },
        hint: "|| returns first truthy or last value. && returns first falsy or last value. ?? only replaces null/undefined.",
        solution: {
          javascript: `// "a"        — first truthy\n// "fallback" — 0 is falsy, fallback wins\n// 0          — 0 is not nullish, so it's kept\n// null       — short-circuits at first falsy\n// "second"   — both truthy, returns the last`,
        },
      },
    },
    {
      id: "ch04-s4",
      title: "Operator Precedence (and Why You Should Just Use Parens)",
      whyItMatters: "Knowing the rules helps you read others' code. Adding parentheses helps OTHERS read yours. The trade-off favors parens.",
      content: `Operators have a precedence order that determines what evaluates first when you don't use parentheses. The full table has ~20 levels, but a few common gotchas:

\`\`\`js
2 + 3 * 4       // 14, not 20 — * binds tighter than +
true || false && false  // true — && binds tighter than ||
!true || false  // false — ! binds tightest (unary), so this is (!true) || false → false || false
\`\`\`

The general order (high to low):
1. \`!\` (NOT), unary minus, \`++\`, \`--\`, \`typeof\`
2. \`**\` (exponent)
3. \`*\`, \`/\`, \`%\`
4. \`+\`, \`-\`
5. \`<\`, \`<=\`, \`>\`, \`>=\`
6. \`===\`, \`!==\`, \`==\`, \`!=\`
7. \`&&\`
8. \`||\`, \`??\`
9. \`?:\` (ternary)
10. \`=\`, \`+=\`, etc. (assignment)

**The pragmatic rule:** if you have to think about precedence for more than 5 seconds, add parentheses. They cost nothing and make the intent obvious:

\`\`\`js
// Confusing
const result = a && b || c && d;

// Clear
const result = (a && b) || (c && d);
\`\`\`

**The ternary operator** \`condition ? ifTrue : ifFalse\` is the only "operator" that takes three operands. It's an expression that returns a value:

\`\`\`js
const status = age >= 18 ? "adult" : "minor";
\`\`\`

Don't nest ternaries deeply — they become unreadable fast. If you have more than two cases, use if/else or a lookup object.`,
      callouts: [
        { type: "tip", title: "When in doubt, add parentheses", content: "Parens are free. They make code self-documenting and prevent precedence bugs. Pros add them generously; only beginners try to memorize the full precedence table." },
      ],
      deepDive: `**Why ?? has the same precedence as ||.** When ?? was added in 2020, the spec authors made it forbidden to mix with && or || without parentheses:

\`\`\`js
a || b ?? c    // SyntaxError
(a || b) ?? c  // OK
a || (b ?? c)  // OK
\`\`\`

This forces you to be explicit, eliminating an entire class of bugs. It's one of the rare cases where the language requires more verbosity for safety.

**Comma operator.** \`(a, b, c)\` evaluates each expression in order and returns the last one. Mostly seen in for-loops: \`for (let i=0, j=10; i<10; i++, j--)\`. In other contexts, it's almost always a mistake.`,
    },
  ],
  exercises: [
    {
      id: "js-ch-04-ex1",
      title: "Predict and verify",
      difficulty: 1,
      description: "Predict the result of each expression, then run the code to check.",
      requirements: ["Write your prediction as a comment", "Then verify"],
      starterCode: {
        javascript: `console.log(10 % 3);       // ?\nconsole.log(2 ** 8);       // ?\nconsole.log("a" + 1 + 2);  // ?\nconsole.log(1 + 2 + "a");  // ?\nconsole.log(10 / 3);       // ?`,
      },
      hints: ["% is remainder. ** is exponent. + with strings concatenates left-to-right."],
      solution: {
        javascript: `console.log(10 % 3);       // 1\nconsole.log(2 ** 8);       // 256\nconsole.log("a" + 1 + 2);  // "a12"\nconsole.log(1 + 2 + "a");  // "3a"\nconsole.log(10 / 3);       // 3.3333...`,
      },
      solutionExplanation: "Division never truncates in JavaScript. + with strings depends on order — once a string appears, everything after concatenates.",
    },
    {
      id: "js-ch-04-ex2",
      title: "Replace == with === (and fix the bugs)",
      difficulty: 2,
      description: "This function uses == loosely. Replace every == with === and fix any bugs that surface.",
      requirements: ["Replace == with ===", "Make sure the function still works for valid inputs"],
      starterCode: {
        javascript: `function isAdult(age) {\n  if (age == null) return false;\n  if (age == "0") return false;\n  return age >= 18;\n}\n\nconsole.log(isAdult(25));     // true\nconsole.log(isAdult("25"));   // true (with == — but is that intended?)\nconsole.log(isAdult(null));   // false\nconsole.log(isAdult(0));      // false`,
      },
      hints: ["age == null is the accepted shortcut for 'null OR undefined'. Otherwise use ===.", "If you want strings to work, convert first: Number(age)"],
      solution: {
        javascript: `function isAdult(age) {\n  if (age == null) return false;        // accepted: catches null AND undefined\n  if (age === 0 || age === "0") return false;\n  return Number(age) >= 18;             // explicit conversion if strings are valid\n}\n\nconsole.log(isAdult(25));     // true\nconsole.log(isAdult("25"));   // true (we explicitly convert)\nconsole.log(isAdult(null));   // false\nconsole.log(isAdult(undefined)); // false\nconsole.log(isAdult(0));      // false`,
      },
      solutionExplanation: "Strict equality made the implicit type-coercion explicit. Now anyone reading the function knows that strings ARE supported and HOW (Number conversion).",
    },
    {
      id: "js-ch-04-ex3",
      title: "?? vs || in defaults",
      difficulty: 3,
      description: "These three settings have different default behaviors. Pick ?? or || correctly for each.",
      requirements: ["volume: 0 is a valid value (mute), so default 50 only when missing", "name: empty string is invalid, default 'Anonymous'", "showAds: false is a valid value (turned off), default true only when missing"],
      starterCode: {
        javascript: `const userPrefs = { volume: 0, name: "", showAds: false };\n\nconst volume = userPrefs.volume ___ 50;\nconst name   = userPrefs.name ___ "Anonymous";\nconst showAds = userPrefs.showAds ___ true;\n\nconsole.log({ volume, name, showAds });\n// Goal: { volume: 0, name: "Anonymous", showAds: false }`,
      },
      hints: ["?? respects 0 and false but replaces null/undefined. || replaces all falsy values."],
      solution: {
        javascript: `const userPrefs = { volume: 0, name: "", showAds: false };\n\nconst volume = userPrefs.volume ?? 50;        // 0 is valid → keep it\nconst name   = userPrefs.name || "Anonymous"; // "" is invalid → replace\nconst showAds = userPrefs.showAds ?? true;    // false is valid → keep it\n\nconsole.log({ volume, name, showAds });\n// { volume: 0, name: "Anonymous", showAds: false } ✓`,
      },
      solutionExplanation: "?? for values where 0 and false are meaningful. || for values where any falsy means 'invalid, please replace.' Picking the wrong one silently corrupts data.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "js-ch-04-q1",
        type: "code-output",
        question: "What does this print?",
        code: `console.log("5" == 5);\nconsole.log("5" === 5);`,
        options: ["true and true", "false and false", "true and false", "false and true"],
        correctAnswer: 2,
        explanation: "== converts types before comparing, so '5' becomes 5 → true. === requires both type and value to match → false.",
        difficulty: 2,
      },
      {
        id: "js-ch-04-q2",
        type: "code-output",
        question: "What does this print?",
        code: `console.log(0 || "default");\nconsole.log(0 ?? "default");`,
        options: ["0 and 0", "default and default", "default and 0", "0 and default"],
        correctAnswer: 2,
        explanation: "|| treats 0 as falsy → returns 'default.' ?? only replaces null/undefined → returns 0.",
        difficulty: 3,
      },
      {
        id: "js-ch-04-q3",
        type: "code-output",
        question: "What does this print?",
        code: `console.log(2 + 3 * 4);`,
        options: ["20", "14", "24", "11"],
        correctAnswer: 1,
        explanation: "* binds tighter than +. 3*4=12, then 2+12=14.",
        difficulty: 1,
      },
      {
        id: "js-ch-04-q4",
        type: "mcq",
        question: "How many falsy values are there in JavaScript?",
        options: ["3", "5", "8", "12"],
        correctAnswer: 2,
        explanation: "Eight: false, 0, -0, 0n (BigInt zero), '', null, undefined, NaN. Everything else is truthy.",
        difficulty: 2,
      },
      {
        id: "js-ch-04-q5",
        type: "code-output",
        question: "What does this print?",
        code: `const user = null;\nconsole.log(user?.name ?? "no user");`,
        options: ["Error", "null", '"no user"', "undefined"],
        correctAnswer: 2,
        explanation: "?. safely returns undefined when user is null. Then ?? replaces undefined with 'no user.'",
        difficulty: 3,
      },
      {
        id: "js-ch-04-q6",
        type: "code-output",
        question: "What does this print?",
        code: `console.log("1" + 2 + 3);`,
        options: ["6", '"123"', '"15"', '"33"'],
        correctAnswer: 1,
        explanation: "Left to right: '1'+2='12', then '12'+3='123'. Once a string enters, every + becomes concatenation.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Arithmetic", value: "+ - * / % **" },
    { label: "Assignment", value: "= += -= *= /= %= **=" },
    { label: "Comparison", value: "Always use === and !==" },
    { label: "Logical", value: "&& (and), || (or), ! (not)" },
    { label: "Nullish coalescing", value: "value ?? fallback (only replaces null/undefined)" },
    { label: "Optional chaining", value: "obj?.prop?.nested" },
    { label: "Ternary", value: "condition ? ifTrue : ifFalse" },
    { label: "Falsy values", value: "false, 0, -0, 0n, '', null, undefined, NaN" },
    { label: "When precedence is unclear", value: "Add parentheses" },
  ],
};
