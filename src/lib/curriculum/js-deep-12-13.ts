import type { Chapter } from "./types";

export const jsCh12: Chapter = {
  id: "js-ch-12",
  number: 12,
  title: "Arrays",
  subtitle: "Ordered collections — and the methods that make JavaScript feel functional.",
  difficulty: "Intermediate",
  estimatedMinutes: 45,
  xpReward: 140,
  prerequisites: ["js-ch-11"],
  partLabel: "Part 3: Data Structures",
  learningObjectives: [
    "Create, access, and mutate arrays correctly.",
    "Distinguish mutating methods (push, splice) from non-mutating ones (map, filter, slice).",
    "Use map, filter, reduce to transform data without loops.",
    "Spread, destructure, and clone arrays safely.",
    "Avoid the most common array bugs (reference sharing, off-by-one).",
  ],
  sections: [
    {
      id: "js12-s1",
      title: "Arrays Aren't Lists",
      whyItMatters: "JavaScript arrays look like the lists you'd get in Python or Java, but they're actually objects with numeric keys. Knowing this explains every weird thing arrays do.",
      realWorldAnalogy: "An array is like a numbered row of lockers. The locker numbers are 0,1,2,3… and each locker can hold anything — even another row of lockers.",
      content: `Create with literal syntax (always preferred):

\`\`\`
const fruits = ['apple', 'banana', 'cherry'];
\`\`\`

Access by zero-indexed position:

\`\`\`
fruits[0];           // 'apple'
fruits[fruits.length - 1]; // 'cherry'
fruits.at(-1);       // 'cherry' — modern, supports negative indices
\`\`\`

length is a property, not a method:

\`\`\`
fruits.length;  // 3
fruits.length = 1;  // truncates to ['apple']
\`\`\`

Arrays can hold mixed types — numbers, strings, objects, other arrays, functions:

\`\`\`
const mixed = [1, 'two', { three: 3 }, [4, 5], () => 6];
\`\`\``,
      callouts: [
        { type: "common-mistake", title: "Don't use new Array(3)", content: "It creates an array of length 3 with NO elements — different from [undefined, undefined, undefined]. .map() on it does nothing. Just use [] literals." },
      ],
    },
    {
      id: "js12-s2",
      title: "Mutating vs Non-mutating",
      whyItMatters: "The single biggest source of array bugs. Some methods change the original array, others return a new one. Mix them up and your data 'disappears' across components.",
      content: `**Mutating** (changes the original):

- \`push(x)\` — add to end, returns new length
- \`pop()\` — remove from end, returns the item
- \`shift()\` — remove from front
- \`unshift(x)\` — add to front
- \`splice(i, n, ...x)\` — remove n items at i, insert x there
- \`sort()\`, \`reverse()\` — in place

**Non-mutating** (returns a new array):

- \`slice(start, end)\` — copy a range
- \`concat(arr)\` — combine arrays
- \`map(fn)\`, \`filter(fn)\` — transform/select
- \`flat()\`, \`flatMap()\` — flatten nesting
- Spread \`[...arr]\` — clone

\`\`\`
const a = [1, 2, 3];
const b = a.slice();   // safe copy
const c = [...a, 4];   // safe append
a.push(99);            // mutates a; b and c untouched
\`\`\`

In React, Redux, and most modern code: **prefer non-mutating**. Mutating shared arrays causes mysterious "stale" UI.`,
      codeExamples: [{
        id: "js12-ex1",
        title: "Add an item — three ways",
        description: "Same goal, very different consequences.",
        code: { javascript: `const original = [1, 2, 3];\n\n// Mutating\nconst withMutate = original;\nwithMutate.push(4);\nconsole.log('original after mutate:', original); // [1,2,3,4] !!\n\n// Reset and try non-mutating\nconst original2 = [1, 2, 3];\nconst withSpread = [...original2, 4];\nconsole.log('original2:', original2);  // [1,2,3]\nconsole.log('new:', withSpread);       // [1,2,3,4]` },
          explanation: "push mutated original because withMutate was the same array. Spread created a fresh array — the original is safe.",
          tryItPrompt: "Replace push with .concat([4]). Does original change?",
        }],
    },
    {
      id: "js12-s3",
      title: "map, filter, reduce",
      whyItMatters: "These three replace 90% of for-loops. Code becomes shorter, easier to read, and impossible to get an off-by-one wrong on.",
      content: `**map** transforms every element into a new one:

\`\`\`
const prices = [10, 20, 30];
const withTax = prices.map(p => p * 1.2);
// [12, 24, 36]
\`\`\`

**filter** keeps only items that pass a test:

\`\`\`
const ages = [12, 18, 25, 7];
const adults = ages.filter(a => a >= 18);
// [18, 25]
\`\`\`

**reduce** collapses an array to a single value:

\`\`\`
const total = [10, 20, 30].reduce((sum, n) => sum + n, 0);
// 60
\`\`\`

The second arg \`0\` is the starting accumulator. Forget it and reduce uses the first item, which is a bug magnet.

Chaining is where these shine:

\`\`\`
const total = orders
  .filter(o => o.status === 'paid')
  .map(o => o.amount)
  .reduce((sum, n) => sum + n, 0);
\`\`\`

Each step returns a new array — no shared state, no off-by-one.`,
      callouts: [
        { type: "pro-tip", title: "Use forEach for side-effects, not map", content: "If you're not building a new array, use forEach (or a regular for loop). Using map and ignoring the result confuses readers and wastes memory." },
      ],
    },
    {
      id: "js12-s4",
      title: "Destructuring & Spread",
      whyItMatters: "Modern JavaScript code is built on these. They make swaps, cloning, and parameter handling one-liners.",
      content: `**Destructuring** unpacks array values into variables:

\`\`\`
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first=1, second=2, rest=[3,4,5]
\`\`\`

Skip elements with empty slots:

\`\`\`
const [, , third] = [1, 2, 3];
\`\`\`

Defaults handle missing values:

\`\`\`
const [a = 'x', b = 'y'] = ['hello'];
// a='hello', b='y'
\`\`\`

**Spread** does the opposite — expands an array:

\`\`\`
const a = [1, 2];
const b = [3, 4];
const combined = [...a, ...b, 5]; // [1,2,3,4,5]

const max = Math.max(...[10, 5, 8]); // 10 — passes as args
\`\`\`

The classic swap:

\`\`\`
let x = 1, y = 2;
[x, y] = [y, x];  // x=2, y=1 — no temp variable
\`\`\``,
      microExercise: {
        instruction: "Given const nums = [5, 1, 8, 3, 9], use array methods to get the sum of just the even-or-greater-than-5 values.",
        starterCode: { javascript: `const nums = [5, 1, 8, 3, 9];\n// your code here — log the result\n` },
        hint: "filter to keep what you want, then reduce with starting value 0.",
        solution: { javascript: `const nums = [5, 1, 8, 3, 9];\nconst total = nums\n  .filter(n => n >= 5 || n % 2 === 0)\n  .reduce((s, n) => s + n, 0);\nconsole.log(total); // 8 + 5 + 9 + 8... let's compute: filter keeps 5,8,9 -> 22\n` },
      },
      deepDive: "Spread is shallow. [...arr] copies the top level but objects inside still share references — mutate one and both 'copies' see it. For deep clones use structuredClone(arr) (built-in since 2022).",
    },
  ],
  exercises: [
    {
      id: "js12-ex1",
      title: "Cart total",
      difficulty: 1,
      description: "Sum the prices of items in a shopping cart.",
      requirements: ["Use reduce", "Provide an initial value of 0", "Log the total"],
      starterCode: { html: `<div id="out">Open the console</div>`, javascript: `const cart = [\n  { item: 'Book', price: 12 },\n  { item: 'Pen', price: 3 },\n  { item: 'Mug', price: 8 },\n];\n// your code here` },
      hints: ["reduce takes (accumulator, item) => ...", "Don't forget the second argument: 0", "Each item has a .price"],
      solution: { html: `<div id="out">Open the console</div>`, javascript: `const cart = [\n  { item: 'Book', price: 12 },\n  { item: 'Pen', price: 3 },\n  { item: 'Mug', price: 8 },\n];\nconst total = cart.reduce((sum, x) => sum + x.price, 0);\nconsole.log('Total: $' + total);` },
      solutionExplanation: "reduce walks through the array maintaining a running sum, starting from 0. The callback returns the new accumulator each iteration.",
    },
    {
      id: "js12-ex2",
      title: "Active users only",
      difficulty: 2,
      description: "From a list of users, get an array of names of users who are active and over 18.",
      requirements: ["Chain filter and map", "Don't mutate the original", "Log the resulting names array"],
      starterCode: { html: `<div id="out">Console</div>`, javascript: `const users = [\n  { name: 'Ana', age: 25, active: true },\n  { name: 'Bob', age: 17, active: true },\n  { name: 'Cy',  age: 30, active: false },\n  { name: 'Dee', age: 22, active: true },\n];\n// your code here` },
      hints: ["filter first to remove inactive/underage", "Then map each survivor to its .name", "Methods chain: arr.filter(...).map(...)"],
      solution: { html: `<div id="out">Console</div>`, javascript: `const users = [\n  { name: 'Ana', age: 25, active: true },\n  { name: 'Bob', age: 17, active: true },\n  { name: 'Cy',  age: 30, active: false },\n  { name: 'Dee', age: 22, active: true },\n];\nconst names = users\n  .filter(u => u.active && u.age >= 18)\n  .map(u => u.name);\nconsole.log(names); // ['Ana', 'Dee']` },
      solutionExplanation: "filter narrows the list; map projects each remaining object to just its name. Original users array is untouched.",
    },
    {
      id: "js12-ex3",
      title: "Group by category",
      difficulty: 3,
      description: "Use reduce to group an array of products into an object keyed by category.",
      requirements: ["Use reduce with initial value {}", "Each key is a category, each value is an array of products in it", "Don't mutate the inputs"],
      starterCode: { html: `<div id="out">Console</div>`, javascript: `const products = [\n  { name: 'Apple', cat: 'fruit' },\n  { name: 'Bread', cat: 'bakery' },\n  { name: 'Pear',  cat: 'fruit' },\n  { name: 'Cake',  cat: 'bakery' },\n  { name: 'Milk',  cat: 'dairy' },\n];\n// your code here` },
      hints: ["Start with {} as the accumulator", "For each product, ensure acc[cat] exists, then push the product", "Return the accumulator each iteration"],
      solution: { html: `<div id="out">Console</div>`, javascript: `const products = [\n  { name: 'Apple', cat: 'fruit' },\n  { name: 'Bread', cat: 'bakery' },\n  { name: 'Pear',  cat: 'fruit' },\n  { name: 'Cake',  cat: 'bakery' },\n  { name: 'Milk',  cat: 'dairy' },\n];\nconst grouped = products.reduce((acc, p) => {\n  (acc[p.cat] ??= []).push(p);\n  return acc;\n}, {});\nconsole.log(grouped);\n// modern alternative: Object.groupBy(products, p => p.cat)` },
      solutionExplanation: "(acc[p.cat] ??= []) creates an empty array for the category if needed (using nullish-coalescing assignment), then push adds the product. Reduce builds up the grouped object one item at a time.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "js12-q1", type: "mcq", question: "Which method does NOT mutate the original array?", options: ["push", "splice", "sort", "map"], correctAnswer: 3, explanation: "map returns a new array. push, splice, and sort mutate.", difficulty: 1 },
      { id: "js12-q2", type: "code-output", question: "What's logged?", code: `const a = [1,2,3];\nconst b = a;\nb.push(4);\nconsole.log(a.length);`, options: ["3", "4", "undefined", "Error"], correctAnswer: 1, explanation: "b and a reference the SAME array. push on b mutates a too — length is now 4.", difficulty: 2 },
      { id: "js12-q3", type: "mcq", question: "Best way to safely append without mutating?", options: ["arr.push(x)", "arr.concat(x) or [...arr, x]", "arr[arr.length] = x", "arr.add(x)"], correctAnswer: 1, explanation: "Both concat and spread return a NEW array, leaving the original untouched.", difficulty: 2 },
      { id: "js12-q4", type: "code-output", question: "What's the result?", code: `[1,2,3,4].filter(n => n > 2).reduce((s,n) => s+n, 0)`, options: ["3", "7", "10", "0"], correctAnswer: 1, explanation: "filter keeps [3,4]; reduce sums them starting from 0 → 7.", difficulty: 2 },
      { id: "js12-q5", type: "spot-the-bug", question: "What's wrong?", code: `const total = [10, 20, 30].reduce((s, n) => s + n);`, options: ["Missing initial value — works here but fails on empty arrays", "reduce doesn't exist", "Need to specify a key", "Must use a regular function"], correctAnswer: 0, explanation: "Without an initial value, reduce uses the first element. On an empty array it throws TypeError. Always pass 0 (or the appropriate seed).", difficulty: 3 },
    ],
  },
  cheatSheet: [
    { label: "Create", value: "const a = [1, 2, 3]" },
    { label: "Last item", value: "a.at(-1)" },
    { label: "Add (mutate)", value: "a.push(x)" },
    { label: "Add (new copy)", value: "[...a, x]" },
    { label: "Transform", value: "a.map(x => x * 2)" },
    { label: "Select", value: "a.filter(x => x > 0)" },
    { label: "Aggregate", value: "a.reduce((s, x) => s + x, 0)" },
    { label: "Clone shallow", value: "[...a] or a.slice()" },
    { label: "Destructure", value: "const [first, ...rest] = a" },
  ],
};

export const jsCh13: Chapter = {
  id: "js-ch-13",
  number: 13,
  title: "Objects",
  subtitle: "Key-value collections — the most-used data structure in JavaScript.",
  difficulty: "Intermediate",
  estimatedMinutes: 45,
  xpReward: 140,
  prerequisites: ["js-ch-12"],
  partLabel: "Part 3: Data Structures",
  learningObjectives: [
    "Create and access object properties using dot and bracket notation.",
    "Iterate over keys, values, and entries.",
    "Spread, merge, and destructure objects.",
    "Distinguish reference equality from value equality.",
    "Use Object.freeze and shorthand syntax effectively.",
  ],
  sections: [
    {
      id: "js13-s1",
      title: "Objects Are Everywhere",
      whyItMatters: "Arrays, functions, dates, errors, DOM nodes, JSON responses — they're all objects. Mastering objects IS mastering JavaScript.",
      realWorldAnalogy: "An object is a labeled drawer organizer. Each compartment has a name (the key) and holds whatever you want (the value).",
      content: `Object literal syntax — the 99% case:

\`\`\`
const user = {
  name: 'Ana',
  age: 25,
  isAdmin: false,
};
\`\`\`

Two ways to access:

\`\`\`
user.name        // 'Ana' — dot notation
user['name']     // 'Ana' — bracket notation
\`\`\`

Use dot when you know the key at write-time. Use brackets when the key is dynamic:

\`\`\`
const field = 'age';
user[field];     // 25
user['full-name']; // dot syntax can't have dashes — must use brackets
\`\`\`

Add and update by assignment:

\`\`\`
user.email = 'ana@example.com';  // adds new key
user.age = 26;                   // updates existing
delete user.isAdmin;             // removes the key
\`\`\``,
    },
    {
      id: "js13-s2",
      title: "Iterating Objects",
      whyItMatters: "Unlike arrays, objects don't have .map or .filter. The conversion methods Object.keys/values/entries are how you bridge into array-land.",
      content: `Three companion functions:

\`\`\`
const scores = { math: 90, sci: 85, eng: 78 };

Object.keys(scores);    // ['math', 'sci', 'eng']
Object.values(scores);  // [90, 85, 78]
Object.entries(scores); // [['math', 90], ['sci', 85], ['eng', 78]]
\`\`\`

Once you have an array, all the methods from Chapter 12 work:

\`\`\`
const total = Object.values(scores).reduce((s, n) => s + n, 0);

const passing = Object.entries(scores)
  .filter(([_, score]) => score >= 80)
  .map(([subject]) => subject);
// ['math', 'sci']
\`\`\`

To go back from entries to an object:

\`\`\`
Object.fromEntries([['a', 1], ['b', 2]]); // { a: 1, b: 2 }
\`\`\``,
      callouts: [
        { type: "info", title: "for...in vs for...of", content: "for...in iterates object KEYS (and inherits prototype keys — usually unwanted). for...of works on iterables like arrays and Maps. For objects, prefer Object.entries() with for...of." },
      ],
    },
    {
      id: "js13-s3",
      title: "Spread, Merge, Destructure",
      whyItMatters: "These three operations make immutable updates ergonomic — exactly what React, Redux, and modern JS expect.",
      content: `**Spread** copies own enumerable properties:

\`\`\`
const base = { a: 1, b: 2 };
const extended = { ...base, c: 3 };
// { a: 1, b: 2, c: 3 }
\`\`\`

**Merge** with override (later wins):

\`\`\`
const defaults = { theme: 'light', size: 'md' };
const userPrefs = { theme: 'dark' };
const final = { ...defaults, ...userPrefs };
// { theme: 'dark', size: 'md' }
\`\`\`

**Destructure** unpacks keys into variables:

\`\`\`
const { name, age } = user;
\`\`\`

With renaming + defaults:

\`\`\`
const { name: fullName, country = 'Unknown' } = user;
\`\`\`

Rest pattern collects the leftovers:

\`\`\`
const { id, ...rest } = { id: 1, name: 'Ana', age: 25 };
// id = 1; rest = { name: 'Ana', age: 25 }
\`\`\``,
      codeExamples: [{
        id: "js13-ex1",
        title: "Immutable update",
        description: "Update one field without mutating the original.",
        code: { javascript: `const user = { id: 1, name: 'Ana', age: 25 };\n\nconst updated = { ...user, age: 26 };\n\nconsole.log(user);    // unchanged: age 25\nconsole.log(updated); // age: 26` },
          explanation: "Spread copies all keys, then age:26 overrides. The original user object is untouched — critical for React state.",
          tryItPrompt: "Add a new email field in the same operation.",
        }],
    },
    {
      id: "js13-s4",
      title: "Equality and References",
      whyItMatters: "Two objects with identical contents are NOT equal. This catches everyone once. Knowing why prevents hours of debugging.",
      content: `Objects are compared by **reference**, not by value:

\`\`\`
{ a: 1 } === { a: 1 }   // false!
\`\`\`

Each literal creates a new object. They live at different memory addresses, so === is false.

Same address → equal:

\`\`\`
const x = { a: 1 };
const y = x;
x === y;  // true
\`\`\`

For value equality, you need a deep-compare helper or a quick (lossy) trick:

\`\`\`
JSON.stringify({a:1}) === JSON.stringify({a:1});  // true
\`\`\`

JSON-stringify breaks on functions, undefined, dates, and key order. For real comparisons use lodash isEqual or write a recursive function.`,
      callouts: [
        { type: "warning", title: "Frozen ≠ deep frozen", content: "Object.freeze(obj) prevents adding/removing top-level keys. Nested objects can still be mutated. Use a recursive deep-freeze if you need true immutability." },
      ],
      microExercise: {
        instruction: "Given const settings = { theme: 'light', font: 'Inter', density: 'comfy' }, build a new object with theme switched to 'dark' — without mutating settings.",
        starterCode: { javascript: `const settings = { theme: 'light', font: 'Inter', density: 'comfy' };\n// your code\n` },
        hint: "Spread settings into a new object literal, then override theme.",
        solution: { javascript: `const settings = { theme: 'light', font: 'Inter', density: 'comfy' };\nconst dark = { ...settings, theme: 'dark' };\nconsole.log(settings); // unchanged\nconsole.log(dark);` },
      },
      deepDive: "Modern JS has shorthand property syntax: { name } is the same as { name: name }. And computed keys: { [\\`key_\\${id}\\`]: value }. Both make builders much cleaner.",
    },
  ],
  exercises: [
    {
      id: "js13-ex1",
      title: "Print user info",
      difficulty: 1,
      description: "Iterate over a user object and log each key/value.",
      requirements: ["Use Object.entries", "Log each pair as 'key: value'"],
      starterCode: { html: `<div>Console</div>`, javascript: `const user = { name: 'Ana', age: 25, role: 'admin' };\n// your code` },
      hints: ["Object.entries returns [key, value] pairs", "Use forEach or for...of with destructuring"],
      solution: { html: `<div>Console</div>`, javascript: `const user = { name: 'Ana', age: 25, role: 'admin' };\nObject.entries(user).forEach(([k, v]) => console.log(\`\${k}: \${v}\`));` },
      solutionExplanation: "Object.entries gives you a real array of [key, value] tuples. Destructure each tuple in the callback for clean access.",
    },
    {
      id: "js13-ex2",
      title: "Merge user defaults",
      difficulty: 2,
      description: "Combine default settings with user overrides without mutating either.",
      requirements: ["Use spread to merge", "User values must win on conflicts", "Neither input can be mutated"],
      starterCode: { html: `<div>Console</div>`, javascript: `const defaults = { theme: 'light', notifications: true, fontSize: 14 };\nconst user = { theme: 'dark', fontSize: 16 };\n// your code` },
      hints: ["Spread defaults first, then user", "Later spread wins on duplicate keys", "Log all three to verify originals are untouched"],
      solution: { html: `<div>Console</div>`, javascript: `const defaults = { theme: 'light', notifications: true, fontSize: 14 };\nconst user = { theme: 'dark', fontSize: 16 };\nconst merged = { ...defaults, ...user };\nconsole.log(merged);   // theme dark, notifications true, fontSize 16\nconsole.log(defaults); // unchanged\nconsole.log(user);     // unchanged` },
      solutionExplanation: "Order matters: { ...defaults, ...user } means user keys override matching defaults. Both source objects remain untouched.",
    },
    {
      id: "js13-ex3",
      title: "Invert an object",
      difficulty: 3,
      description: "Swap keys and values. Given { a: 1, b: 2 }, produce { 1: 'a', 2: 'b' }.",
      requirements: ["Use Object.entries + Object.fromEntries", "Don't use a for-loop", "Handle string-keyed values correctly"],
      starterCode: { html: `<div>Console</div>`, javascript: `const colors = { red: '#f00', green: '#0f0', blue: '#00f' };\n// invert -> { '#f00': 'red', ... }\n` },
      hints: ["Object.entries → array of [k,v]", "Map each pair to [v,k]", "Object.fromEntries reassembles into an object"],
      solution: { html: `<div>Console</div>`, javascript: `const colors = { red: '#f00', green: '#0f0', blue: '#00f' };\nconst inverted = Object.fromEntries(\n  Object.entries(colors).map(([k, v]) => [v, k])\n);\nconsole.log(inverted);` },
      solutionExplanation: "entries → swap each pair → fromEntries. Functional, no loops, no mutation. Note: if two keys have the same value, the later one wins (object keys must be unique).",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "js13-q1", type: "code-output", question: "What's logged?", code: `console.log({a:1} === {a:1});`, options: ["true", "false", "undefined", "Error"], correctAnswer: 1, explanation: "Each literal is a new object at a different memory address. === compares references, not contents.", difficulty: 2 },
      { id: "js13-q2", type: "mcq", question: "When MUST you use bracket notation?", options: ["Always", "When the key is dynamic or contains special characters", "Never — dot is always better", "Only with numbers"], correctAnswer: 1, explanation: "Dot notation can't handle keys with dashes/spaces or keys stored in variables. Brackets handle both.", difficulty: 1 },
      { id: "js13-q3", type: "mcq", question: "Best way to update one field immutably?", options: ["obj.field = value", "Object.assign(obj, {field: value})", "{ ...obj, field: value }", "obj['field'] = value"], correctAnswer: 2, explanation: "Spread creates a new object — the original is untouched. The other options either mutate or return the same reference.", difficulty: 2 },
      { id: "js13-q4", type: "code-output", question: "What's the result?", code: `const { a, ...rest } = { a: 1, b: 2, c: 3 };\nconsole.log(rest);`, options: ["{a:1}", "{b:2, c:3}", "{a:1, b:2, c:3}", "[2, 3]"], correctAnswer: 1, explanation: "a is destructured out; rest collects everything else into a new object.", difficulty: 2 },
      { id: "js13-q5", type: "true-false", question: "Object.freeze prevents mutation of nested objects too.", options: ["True", "False"], correctAnswer: 1, explanation: "freeze is shallow. Nested objects need to be frozen recursively for true immutability.", difficulty: 2 },
    ],
  },
  cheatSheet: [
    { label: "Create", value: "const o = { key: value }" },
    { label: "Access", value: "o.key  /  o['key']" },
    { label: "Add/update", value: "o.newKey = value" },
    { label: "Delete", value: "delete o.key" },
    { label: "Keys/Values/Entries", value: "Object.keys(o) / .values(o) / .entries(o)" },
    { label: "Merge", value: "{ ...defaults, ...overrides }" },
    { label: "Destructure", value: "const { a, b: renamed = 0 } = o" },
    { label: "Rest", value: "const { id, ...rest } = o" },
    { label: "From pairs", value: "Object.fromEntries(arr)" },
  ],
};
