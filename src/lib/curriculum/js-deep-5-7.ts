import type { Chapter } from "./types";

export const jsCh05: Chapter = {
  id: "js-ch-05",
  number: 5,
  title: "Type Coercion: JavaScript's Most Notorious Quirk",
  subtitle: "Why '5' + 3 is '53' but '5' - 3 is 2 — and how to never be caught off guard.",
  difficulty: "Beginner",
  estimatedMinutes: 35,
  xpReward: 110,
  prerequisites: ["js-ch-04"],
  partLabel: "Part 1: JS Absolute Basics",
  learningObjectives: [
    "Distinguish implicit coercion from explicit conversion.",
    "Predict the result of mixing strings, numbers, and booleans.",
    "Use === instead of == and explain why.",
    "Convert between types deliberately with String(), Number(), Boolean().",
  ],
  sections: [
    {
      id: "js05-s1",
      title: "What Is Coercion?",
      whyItMatters: "Coercion is JavaScript silently converting one type to another. It's the #1 source of weird bugs and viral 'JavaScript is broken' Twitter threads. Master it and JS stops surprising you.",
      realWorldAnalogy: "Coercion is like a translator who eagerly translates everything you say — even when you didn't ask. Sometimes helpful, sometimes hilarious.",
      content: `JavaScript has 7 primitive types: \`string\`, \`number\`, \`boolean\`, \`undefined\`, \`null\`, \`bigint\`, \`symbol\`. Plus \`object\`.

When operators encounter mixed types, JS often coerces (auto-converts) one or both operands. Examples:

\`\`\`
'5' + 3       // '53'    (number coerced to string, + concatenates)
'5' - 3       // 2       (string coerced to number, - is arithmetic)
'5' * '2'     // 10      (both strings coerced to numbers)
true + 1      // 2       (true → 1)
false + 1     // 1       (false → 0)
null + 1      // 1       (null → 0)
undefined + 1 // NaN     (undefined → NaN)
[] + []       // ''      (arrays → empty strings)
[] + {}       // '[object Object]'
{} + []       // 0       (parsed as block + 0 in some contexts!)
\`\`\`

**The core rules:**

- **\`+\`** with ANY string operand = concatenate (number/boolean/null becomes string)
- **\`-\`**, **\`*\`**, **\`/\`**, **\`%\`** always force both sides to numbers
- **Comparisons** (\`<\`, \`>\`, \`<=\`, \`>=\`) usually convert to numbers
- **Loose equality \`==\`** does extensive coercion (avoid)
- **Strict equality \`===\`** does NO coercion (use this)`,
      callouts: [
        { type: "warning", title: "Always use === over ==", content: "== triggers coercion: 0 == '' is true, null == undefined is true, '0' == false is true. === skips all that — types must match. Modern codebases ban == entirely (via ESLint)." },
      ],
    },
    {
      id: "js05-s2",
      title: "Coercion to Boolean: Truthy and Falsy",
      whyItMatters: "Every \`if\` statement, every \`&&\`/\`||\`, every ternary depends on truthy/falsy. Knowing exactly what's falsy is non-negotiable.",
      content: `When JS needs a boolean (in \`if\`, \`while\`, \`!value\`, etc.), it coerces. The full list of **falsy** values — every single one:

1. \`false\`
2. \`0\` (and \`-0\`, \`0n\` for bigint)
3. \`""\` (empty string)
4. \`null\`
5. \`undefined\`
6. \`NaN\`

**That's it. Memorize this list.** Everything else is truthy.

\`\`\`
if (0) console.log('no')          // skipped
if ('0') console.log('yes')       // RUNS — non-empty string
if ([]) console.log('yes')        // RUNS — arrays are truthy
if ({}) console.log('yes')        // RUNS — objects are truthy
if (' ') console.log('yes')       // RUNS — space is non-empty
if (null) console.log('no')       // skipped
\`\`\`

**Common gotcha — empty array is truthy:**

\`\`\`
if (myArray.length) { /* has items */ }   // CORRECT
if (myArray) { /* truthy even if empty */ }  // BUG
\`\`\`

**\`&&\` and \`||\` short-circuit:**

\`\`\`
'hello' || 'world'  // 'hello'  (returns first truthy)
'' || 'fallback'    // 'fallback'  (first is falsy, returns second)
null || 'default'   // 'default'

'hello' && 'world'  // 'world'   (first truthy, returns second)
'' && 'world'       // ''        (first falsy, returns it)

// Common pattern: provide default
const name = user.name || 'Anonymous';
\`\`\`

**Nullish coalescing \`??\`** — better default-value operator. Only falls back for \`null\` or \`undefined\`, not all falsy values:

\`\`\`
const port = config.port || 3000;  // BUG: if port is 0, uses 3000
const port = config.port ?? 3000;  // CORRECT: only fallback if null/undefined
\`\`\``,
      codeExamples: [
        {
          id: "js05-s2-ex1",
          title: "The truthy/falsy table in action",
          description: "Run this and study the output to lock in which values are falsy.",
          code: {
            html: '<p>Open the console</p>',
            javascript: `const values = [false, 0, '', null, undefined, NaN, '0', 'false', [], {}, ' ', -1];
for (const v of values) {
  console.log(JSON.stringify(v), '→', Boolean(v) ? 'truthy' : 'FALSY');
}`,
          },
          explanation: "Boolean(v) shows the coerced result. The 6 falsy values stand out. Note how '0' and 'false' (strings) are TRUTHY because they're non-empty strings.",
          tryItPrompt: "Add a few of your own values: try a function, a Date, Infinity, -0.",
        },
      ],
    },
    {
      id: "js05-s3",
      title: "Explicit Conversion (The Right Way)",
      whyItMatters: "Instead of relying on implicit coercion, professional code converts deliberately. Crystal clear intent, no surprises.",
      content: `**To string:**
\`\`\`
String(123)         // '123'
String(true)        // 'true'
String(null)        // 'null'
String(undefined)   // 'undefined'
(123).toString()    // '123'
\`\`\`

**To number:**
\`\`\`
Number('42')        // 42
Number('42px')      // NaN  (strict: must be entirely numeric)
Number('')          // 0    (gotcha)
Number(true)        // 1
Number(false)       // 0
Number(null)        // 0
Number(undefined)   // NaN

parseInt('42px', 10)    // 42  (lenient: parses leading digits)
parseFloat('3.14abc')   // 3.14

+'42'    // 42  (unary plus shortcut)
\`\`\`

**To boolean:**
\`\`\`
Boolean(0)       // false
Boolean('')      // false
Boolean('any')   // true

!!value          // double-bang shortcut: convert anything to boolean
\`\`\`

**Always pass radix to parseInt:**
\`\`\`
parseInt('0x10')      // 16  (interprets as hex)
parseInt('010')       // 10 in modern JS (was 8 in old browsers)
parseInt('010', 10)   // 10  (always specify base 10)
\`\`\``,
      callouts: [
        { type: "pro-tip", title: "Convert at boundaries", content: "When data enters your app (form input, API response, query params), convert it to the right type IMMEDIATELY. Then internal code never deals with surprise types." },
      ],
      microExercise: {
        instruction: "Given `let age = '25';` (a string), use Number() to convert it and log age + 5 (should print 30).",
        starterCode: { html: '<p>Console</p>', javascript: "let age = '25';\n// convert and log" },
        hint: "let n = Number(age); console.log(n + 5);",
        solution: { html: '<p>Console</p>', javascript: "let age = '25';\nconst n = Number(age);\nconsole.log(n + 5);" },
      },
    },
  ],
  exercises: [
    {
      id: "js05-ex1",
      title: "Predict and verify",
      difficulty: 2,
      description: "Before running, predict each result. Then console.log to check.",
      requirements: ["Log all 5 expressions", "Compare your predictions to the actual output"],
      starterCode: { html: '<p>Console</p>', javascript: "// predict each, then log:\n// '5' + 2\n// '5' - 2\n// true + true\n// null == undefined\n// null === undefined" },
      hints: ["+ with a string concatenates", "- always coerces to number", "=== never coerces"],
      solution: { html: '<p>Console</p>', javascript: "console.log('5' + 2);          // '52'\nconsole.log('5' - 2);          // 3\nconsole.log(true + true);      // 2\nconsole.log(null == undefined); // true\nconsole.log(null === undefined); // false" },
      solutionExplanation: "+ concats with string, - coerces, true→1, == coerces null/undefined together, === doesn't.",
    },
    {
      id: "js05-ex2",
      title: "Safe defaults with ??",
      difficulty: 2,
      description: "Given a config object, provide defaults that don't break when 0 or '' is the actual value.",
      requirements: ["Use ?? (not ||)", "Verify 0 and '' pass through unchanged"],
      starterCode: { html: '<p>Console</p>', javascript: "const config = { port: 0, name: '', timeout: undefined };\n// log port (should be 0), name (should be ''), timeout (should be 5000)" },
      hints: ["?? only falls back for null/undefined"],
      solution: { html: '<p>Console</p>', javascript: "const config = { port: 0, name: '', timeout: undefined };\nconsole.log(config.port ?? 3000);     // 0\nconsole.log(config.name ?? 'Anon');   // ''\nconsole.log(config.timeout ?? 5000);  // 5000" },
      solutionExplanation: "?? is the modern correct default operator. || would have replaced 0 and '' incorrectly.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "js05-q1", type: "code-output", question: "What does `'5' + 3` evaluate to?", options: ["8", "'53'", "53", "Error"], correctAnswer: 1, explanation: "+ with a string operand concatenates. '5' + 3 = '53' (string).", difficulty: 1 },
      { id: "js05-q2", type: "code-output", question: "What does `'5' - 3` evaluate to?", options: ["'53'", "'2'", "2", "Error"], correctAnswer: 2, explanation: "- only does arithmetic — string is coerced to number 5, then 5 - 3 = 2.", difficulty: 2 },
      { id: "js05-q3", type: "mcq", question: "Which of these is NOT falsy?", options: ["0", "''", "[]", "null"], correctAnswer: 2, explanation: "Empty array [] is TRUTHY — only false, 0, '', null, undefined, NaN are falsy.", difficulty: 2 },
      { id: "js05-q4", type: "mcq", question: "Why prefer === over ==?", options: ["Faster", "No type coercion — types must match", "It's newer", "It's required by browsers"], correctAnswer: 1, explanation: "=== compares type AND value. == coerces and gives surprising results like 0 == ''.", difficulty: 1 },
      { id: "js05-q5", type: "code-output", question: "What does `Boolean('false')` return?", options: ["false", "true", "'false'", "NaN"], correctAnswer: 1, explanation: "'false' is a non-empty string, which is TRUTHY. Boolean('false') = true.", difficulty: 3 },
      { id: "js05-q6", type: "mcq", question: "Difference between ?? and ||?", options: ["No difference", "?? falls back only for null/undefined; || falls back for any falsy", "?? is older", "|| is for arrays only"], correctAnswer: 1, explanation: "?? is strict — only null/undefined trigger fallback. || triggers for 0, '', false, etc. too.", difficulty: 3 },
      { id: "js05-q7", type: "mcq", question: "Best way to convert '42' to the number 42?", options: ["+'42'", "Number('42')", "parseInt('42', 10)", "All of the above"], correctAnswer: 3, explanation: "All three work. Number() and parseInt(s, 10) are most explicit and readable.", difficulty: 2 },
    ],
  },
  cheatSheet: [
    { label: "Falsy values", value: "false, 0, '', null, undefined, NaN" },
    { label: "+ with string", value: "concatenates" },
    { label: "- * / %", value: "always coerce to number" },
    { label: "Use", value: "=== (never ==)" },
    { label: "Default", value: "x ?? fallback (not ||)" },
    { label: "To number", value: "Number(x), +x, parseInt(x, 10)" },
    { label: "To string", value: "String(x), `${x}`" },
    { label: "To bool", value: "Boolean(x), !!x" },
  ],
};

export const jsCh06: Chapter = {
  id: "js-ch-06",
  number: 6,
  title: "Conditionals: Making Decisions",
  subtitle: "if / else, switch, ternary — choose the right tool for each branch.",
  difficulty: "Beginner",
  estimatedMinutes: 30,
  xpReward: 100,
  prerequisites: ["js-ch-05"],
  partLabel: "Part 1: JS Absolute Basics",
  learningObjectives: [
    "Write clear if/else if/else chains.",
    "Use ternary expressions for inline value selection.",
    "Use switch for multi-branch enum-like decisions.",
    "Apply guard clauses and early returns to flatten nested code.",
  ],
  sections: [
    {
      id: "js06-s1",
      title: "if / else if / else",
      whyItMatters: "Conditionals are how programs make decisions. Every login check, every form validation, every game rule is a conditional.",
      content: `Basic shape:
\`\`\`
if (condition) {
  // runs if condition is truthy
} else if (otherCondition) {
  // runs if first false but this is truthy
} else {
  // runs if all above are false
}
\`\`\`

Real example:
\`\`\`
const score = 85;

if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
} else if (score >= 70) {
  grade = 'C';
} else {
  grade = 'F';
}
\`\`\`

**Curly braces:** technically optional for single-statement bodies, but **always include them**:
\`\`\`
if (x) doThing();        // legal but error-prone
if (x) { doThing(); }    // safe
\`\`\`

The braceless form caused Apple's famous 2014 "goto fail" SSL bug. Always brace.

**Comparison operators:**
- \`===\` strict equality
- \`!==\` strict inequality
- \`<\`, \`<=\`, \`>\`, \`>=\` numeric/string comparison
- \`&&\` logical AND
- \`||\` logical OR
- \`!\` logical NOT

**Combining:**
\`\`\`
if (age >= 18 && hasLicense) { /* can drive */ }
if (role === 'admin' || role === 'owner') { /* can edit */ }
if (!isLoggedIn) { /* redirect */ }
\`\`\``,
      callouts: [
        { type: "common-mistake", title: "= vs == vs ===", content: "if (x = 5) ASSIGNS 5 to x and then evaluates 5 (truthy). Always =, ==, ===: assignment, loose equality, strict equality. Most editors warn on = inside if." },
      ],
    },
    {
      id: "js06-s2",
      title: "Ternary and Switch",
      whyItMatters: "Ternary is concise for value selection. Switch is clean for many discrete cases. Right tool for the job.",
      content: `**Ternary** (\`condition ? whenTrue : whenFalse\`) — use for picking a VALUE, not running statements:
\`\`\`
const greeting = isMorning ? 'Good morning' : 'Hello';
const fee = isMember ? 0 : 10;

// JSX-style: const className = isActive ? 'btn-active' : 'btn';

// Nested (use sparingly — gets unreadable fast)
const size = width < 600 ? 'sm' : width < 1024 ? 'md' : 'lg';
\`\`\`

**Switch** — clean for multiple discrete values:
\`\`\`
switch (day) {
  case 'Monday':
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
  case 'Friday':
    return 'weekday';
  case 'Saturday':
  case 'Sunday':
    return 'weekend';
  default:
    return 'unknown';
}
\`\`\`

Key facts:
- Cases use **strict equality** (\`===\`) for matching.
- **\`break\`** exits the switch — without it, execution "falls through" to the next case (sometimes intentional, often a bug).
- \`return\` also exits the switch (and the function).
- \`default\` is the catch-all (always include for safety).

**When to use which:**
- 1-2 conditions → \`if\`
- Pick value based on simple condition → ternary
- Many discrete equal values → \`switch\` or object lookup
- Complex conditions → \`if/else if\` chain

**Modern alternative to long switches — object lookup:**
\`\`\`
const grades = {
  90: 'A', 80: 'B', 70: 'C', 60: 'D'
};
const grade = grades[Math.floor(score / 10) * 10] ?? 'F';
\`\`\``,
      codeExamples: [
        {
          id: "js06-s2-ex1",
          title: "Three styles for the same logic",
          description: "Same role-permission check expressed three ways.",
          code: {
            html: '<p>Console</p>',
            javascript: `const role = 'editor';

// 1. if/else
let canEdit;
if (role === 'admin' || role === 'editor') {
  canEdit = true;
} else {
  canEdit = false;
}
console.log('if/else:', canEdit);

// 2. ternary
const canEdit2 = (role === 'admin' || role === 'editor') ? true : false;
console.log('ternary:', canEdit2);

// 3. boolean expression directly
const canEdit3 = role === 'admin' || role === 'editor';
console.log('direct:', canEdit3);  // cleanest`,
          },
          explanation: "When the result IS a boolean, just use the expression directly — no if/ternary needed. This is the cleanest version.",
          tryItPrompt: "Change role to 'viewer' and re-run. All three should print false.",
        },
      ],
      callouts: [
        { type: "pro-tip", title: "Guard clauses > nesting", content: "Instead of if (loggedIn) { if (admin) { if (active) { ... } } }, return early: if (!loggedIn) return; if (!admin) return; if (!active) return; .... Flatter code is easier to follow." },
      ],
      microExercise: {
        instruction: "Write a function `weather(temp)` that returns 'cold' if temp<10, 'mild' if 10-25, 'hot' otherwise.",
        starterCode: { html: '<p>Console</p>', javascript: "function weather(temp) {\n  // your code\n}\nconsole.log(weather(5), weather(20), weather(35));" },
        hint: "Two if statements + final else (or one if/else if/else chain).",
        solution: { html: '<p>Console</p>', javascript: "function weather(temp) {\n  if (temp < 10) return 'cold';\n  if (temp <= 25) return 'mild';\n  return 'hot';\n}\nconsole.log(weather(5), weather(20), weather(35));" },
      },
    },
  ],
  exercises: [
    {
      id: "js06-ex1",
      title: "FizzBuzz",
      difficulty: 2,
      description: "Loop 1-15. Print 'Fizz' if divisible by 3, 'Buzz' if by 5, 'FizzBuzz' if both, else the number.",
      requirements: ["Use modulo %", "Handle FizzBuzz case first", "console.log each result"],
      starterCode: { html: '<p>Console</p>', javascript: "for (let i = 1; i <= 15; i++) {\n  // your code\n}" },
      hints: ["i % 15 === 0 means divisible by both", "Check most-specific case first"],
      solution: { html: '<p>Console</p>', javascript: "for (let i = 1; i <= 15; i++) {\n  if (i % 15 === 0) console.log('FizzBuzz');\n  else if (i % 3 === 0) console.log('Fizz');\n  else if (i % 5 === 0) console.log('Buzz');\n  else console.log(i);\n}" },
      solutionExplanation: "Classic interview problem. Order matters — check most specific (i%15) first.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "js06-q1", type: "mcq", question: "Which evaluates to true?", options: ["1 == '1'", "1 === '1'", "1 === 1.0", "All of the above except b"], correctAnswer: 3, explanation: "1 == '1' true (coercion), 1 === '1' false (different types), 1 === 1.0 true (numbers).", difficulty: 3 },
      { id: "js06-q2", type: "mcq", question: "What's wrong with `if (x = 5) {...}`?", options: ["Nothing", "= is assignment, not comparison", "x must be declared", "Missing semicolon"], correctAnswer: 1, explanation: "= ASSIGNS 5 to x. The condition becomes 5 (truthy) — likely not what you wanted. Use ===.", difficulty: 2 },
      { id: "js06-q3", type: "mcq", question: "When should you use a ternary?", options: ["For complex multi-line logic", "To pick between two values", "Always, instead of if", "Never"], correctAnswer: 1, explanation: "Ternary shines for value selection: const x = cond ? a : b. For multi-line logic, use if.", difficulty: 1 },
      { id: "js06-q4", type: "mcq", question: "What does case fall-through mean?", options: ["Cases are skipped", "Without break, execution continues into the next case", "Switch breaks", "Default always runs"], correctAnswer: 1, explanation: "Missing break causes the next case body to execute too — sometimes intentional for grouping, often a bug.", difficulty: 2 },
      { id: "js06-q5", type: "code-output", question: "What is logged?", code: "const x = 0;\nif (x) console.log('truthy');\nelse console.log('falsy');", options: ["truthy", "falsy", "Error", "Nothing"], correctAnswer: 1, explanation: "0 is falsy, so the else branch runs.", difficulty: 1 },
      { id: "js06-q6", type: "true-false", question: "Switch cases use === for matching.", options: ["True", "False"], correctAnswer: 0, explanation: "True. switch(x) case y: matches if x === y, no coercion.", difficulty: 2 },
    ],
  },
  cheatSheet: [
    { label: "if/else", value: "if (cond) { ... } else { ... }" },
    { label: "Ternary", value: "cond ? a : b" },
    { label: "Switch", value: "switch (x) { case v: ...; break; default: ... }" },
    { label: "Logical", value: "&& AND, || OR, ! NOT" },
    { label: "Strict equal", value: "=== / !===" },
    { label: "Guard clause", value: "if (!ok) return; // continue happy path" },
  ],
};

export const jsCh07: Chapter = {
  id: "js-ch-07",
  number: 7,
  title: "Loops: Repeating Work",
  subtitle: "for, while, for...of, for...in, and the modern array methods.",
  difficulty: "Beginner",
  estimatedMinutes: 35,
  xpReward: 110,
  prerequisites: ["js-ch-06"],
  partLabel: "Part 1: JS Absolute Basics",
  learningObjectives: [
    "Write classic for and while loops.",
    "Use for...of to iterate arrays and strings.",
    "Use for...in to iterate object keys.",
    "Recognize when forEach/map/filter is cleaner than a for loop.",
    "Control flow with break and continue.",
  ],
  sections: [
    {
      id: "js07-s1",
      title: "for and while",
      whyItMatters: "Loops are how you process collections of data. Every list, every search, every render involves looping.",
      content: `**Classic for loop** — use when you need an index counter:
\`\`\`
for (let i = 0; i < 5; i++) {
  console.log(i);  // 0, 1, 2, 3, 4
}
\`\`\`

Three semicolon-separated parts:
1. **Initialization** (\`let i = 0\`) — runs once
2. **Condition** (\`i < 5\`) — checked before each iteration
3. **Update** (\`i++\`) — runs after each iteration

**while loop** — when you don't know iteration count in advance:
\`\`\`
let n = 1;
while (n < 100) {
  n *= 2;
}
console.log(n);  // 128
\`\`\`

**do...while** — runs body at least once before checking:
\`\`\`
let answer;
do {
  answer = prompt('Continue? (y/n)');
} while (answer !== 'n');
\`\`\`

**break and continue:**

- **\`break\`** — exit the loop entirely
- **\`continue\`** — skip the rest of this iteration, go to next

\`\`\`
for (let i = 0; i < 10; i++) {
  if (i === 3) continue;  // skip 3
  if (i === 7) break;     // stop at 7
  console.log(i);  // 0, 1, 2, 4, 5, 6
}
\`\`\``,
      callouts: [
        { type: "common-mistake", title: "Off-by-one errors", content: "for (let i = 0; i <= arr.length; i++) — the <= reads one past the end (undefined!). Use < arr.length. The 'fence post problem' is the most common loop bug." },
        { type: "warning", title: "Infinite loops", content: "Forgetting to update the counter (or wrong condition direction) creates an infinite loop that freezes the browser. Always verify the loop will terminate." },
      ],
    },
    {
      id: "js07-s2",
      title: "for...of, for...in, and Array Methods",
      whyItMatters: "Modern JavaScript prefers expressive iteration over manual index counting. Pick the right tool and your code reads like English.",
      content: `**for...of** — iterate VALUES of an iterable (array, string, Set, Map):
\`\`\`
const fruits = ['apple', 'banana', 'cherry'];
for (const fruit of fruits) {
  console.log(fruit);
}

for (const char of 'hello') {
  console.log(char);  // h, e, l, l, o
}
\`\`\`

Cleaner than \`for (let i = 0; i < arr.length; i++) { const fruit = arr[i]; }\`.

**for...in** — iterate KEYS of an object:
\`\`\`
const user = { name: 'Ana', age: 30 };
for (const key in user) {
  console.log(key, user[key]);
}
\`\`\`

**Don't use for...in on arrays** — it iterates indices as strings AND any inherited properties. Use for...of for arrays.

**Functional array methods** — usually cleaner than for loops:
\`\`\`
const nums = [1, 2, 3, 4];

// forEach: do something with each
nums.forEach(n => console.log(n));

// map: transform each into a new array
const doubled = nums.map(n => n * 2);  // [2, 4, 6, 8]

// filter: keep matching items
const evens = nums.filter(n => n % 2 === 0);  // [2, 4]

// reduce: combine to a single value
const sum = nums.reduce((acc, n) => acc + n, 0);  // 10

// find: first match
const big = nums.find(n => n > 2);  // 3

// some / every
nums.some(n => n > 3);   // true (at least one)
nums.every(n => n > 0);  // true (all)
\`\`\`

These are the bread-and-butter of modern JS. We'll go deep in chapter 14.`,
      codeExamples: [
        {
          id: "js07-s2-ex1",
          title: "Same goal, three styles",
          description: "Sum the numbers in an array three ways.",
          code: {
            html: '<p>Console</p>',
            javascript: `const nums = [10, 20, 30, 40, 50];

// 1. Classic for
let sum1 = 0;
for (let i = 0; i < nums.length; i++) {
  sum1 += nums[i];
}

// 2. for...of
let sum2 = 0;
for (const n of nums) {
  sum2 += n;
}

// 3. reduce
const sum3 = nums.reduce((acc, n) => acc + n, 0);

console.log(sum1, sum2, sum3);  // 150 150 150`,
          },
          explanation: "All three produce 150. The reduce version is the most concise and idiomatic for 'combine an array into one value.'",
          tryItPrompt: "Now compute the maximum value using each style. (Hint: Math.max(...nums) is even shorter.)",
        },
      ],
      callouts: [
        { type: "pro-tip", title: "When to NOT use functional methods", content: "If you need to break early (stop iteration), forEach can't break. Use for...of. Performance-critical hot loops over millions of items also benefit from classic for." },
      ],
      microExercise: {
        instruction: "Use a for...of loop to log each item in `['red', 'green', 'blue']` prefixed with its index (use entries()).",
        starterCode: { html: '<p>Console</p>', javascript: "const colors = ['red', 'green', 'blue'];\n// log: 0: red, 1: green, 2: blue" },
        hint: "for (const [i, c] of colors.entries()) { ... }",
        solution: { html: '<p>Console</p>', javascript: "const colors = ['red', 'green', 'blue'];\nfor (const [i, c] of colors.entries()) {\n  console.log(`${i}: ${c}`);\n}" },
      },
    },
  ],
  exercises: [
    {
      id: "js07-ex1",
      title: "Sum and average",
      difficulty: 1,
      description: "Given an array of numbers, log the sum and average using a for...of loop.",
      requirements: ["Use for...of (not for or reduce)", "Log sum AND average"],
      starterCode: { html: '<p>Console</p>', javascript: "const nums = [4, 8, 15, 16, 23, 42];\n// your code" },
      hints: ["let total = 0;", "average = total / nums.length"],
      solution: { html: '<p>Console</p>', javascript: "const nums = [4, 8, 15, 16, 23, 42];\nlet total = 0;\nfor (const n of nums) total += n;\nconsole.log('Sum:', total);\nconsole.log('Average:', total / nums.length);" },
      solutionExplanation: "for...of is the cleanest classic loop for summing.",
    },
    {
      id: "js07-ex2",
      title: "Filter and double",
      difficulty: 2,
      description: "Take an array of numbers, KEEP only the even ones, then DOUBLE each. Use array methods.",
      requirements: ["Use filter", "Use map", "Chain them"],
      starterCode: { html: '<p>Console</p>', javascript: "const nums = [1, 2, 3, 4, 5, 6, 7, 8];\n// your code" },
      hints: ["nums.filter(n => n % 2 === 0).map(...)"],
      solution: { html: '<p>Console</p>', javascript: "const nums = [1, 2, 3, 4, 5, 6, 7, 8];\nconst result = nums.filter(n => n % 2 === 0).map(n => n * 2);\nconsole.log(result);  // [4, 8, 12, 16]" },
      solutionExplanation: "Chaining filter and map is the canonical pattern for 'select then transform.' Far cleaner than a for loop with an if.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "js07-q1", type: "code-output", question: "What does this print?", code: "for (let i = 0; i < 3; i++) console.log(i);", options: ["0 1 2", "1 2 3", "0 1 2 3", "1 2"], correctAnswer: 0, explanation: "Starts at 0, runs while i < 3, so 0, 1, 2.", difficulty: 1 },
      { id: "js07-q2", type: "mcq", question: "Best loop for iterating array values?", options: ["for", "for...in", "for...of", "while"], correctAnswer: 2, explanation: "for...of gives you the values directly. for...in is for object keys. for works but is more verbose.", difficulty: 2 },
      { id: "js07-q3", type: "mcq", question: "Why avoid for...in on arrays?", options: ["It's slower", "Iterates inherited properties and gives string keys", "Doesn't work on arrays", "Mutates the array"], correctAnswer: 1, explanation: "for...in iterates ALL enumerable properties (including from prototype) and treats indices as strings.", difficulty: 3 },
      { id: "js07-q4", type: "mcq", question: "What does break do?", options: ["Pauses the loop", "Exits the loop entirely", "Skips one iteration", "Reverses direction"], correctAnswer: 1, explanation: "break terminates the innermost loop completely. continue skips one iteration.", difficulty: 1 },
      { id: "js07-q5", type: "code-output", question: "What is `[1,2,3].map(n => n * 10)`?", options: ["60", "[10,20,30]", "[1,2,3]", "Error"], correctAnswer: 1, explanation: "map returns a new array with each element transformed.", difficulty: 2 },
      { id: "js07-q6", type: "mcq", question: "Which array method 'combines all items into a single value'?", options: ["map", "filter", "reduce", "forEach"], correctAnswer: 2, explanation: "reduce takes an accumulator + item callback and an initial value, producing one final value.", difficulty: 2 },
      { id: "js07-q7", type: "true-false", question: "forEach can break out early with break.", options: ["True", "False"], correctAnswer: 1, explanation: "False — forEach has no break. Use for...of or .some() to stop early.", difficulty: 3 },
    ],
  },
  cheatSheet: [
    { label: "for", value: "for (let i = 0; i < n; i++) { ... }" },
    { label: "while", value: "while (cond) { ... }" },
    { label: "for...of (values)", value: "for (const x of arr) { ... }" },
    { label: "for...in (keys)", value: "for (const k in obj) { ... }" },
    { label: "Transform", value: "arr.map(x => ...)" },
    { label: "Keep matching", value: "arr.filter(x => ...)" },
    { label: "Combine", value: "arr.reduce((acc, x) => ..., init)" },
    { label: "Exit / skip", value: "break / continue" },
  ],
};
