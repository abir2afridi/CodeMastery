# CODEMASTERY — TYPESCRIPT TRACK ADDITION

# Add TypeScript as a 5th track to the existing CodeMastery platform

# 65+ chapters · JS-aware curriculum · Deep type system coverage

## OVERVIEW

Extend the existing CodeMastery platform (Next.js 14 + TypeScript + Tailwind) by adding a complete TypeScript learning track. Follow ALL existing design patterns, data structures, component conventions, and curriculum depth standards already established.

IMPORTANT PREREQUISITE AWARENESS: TypeScript builds directly on JavaScript. This track assumes the student has either:
A) Completed the JavaScript track on CodeMastery, OR
B) Already knows JavaScript from elsewhere

The track handles this by: at the start of each chapter, if a JS concept is referenced, show a "📖 JS Prerequisite" callout with a link to the relevant JS chapter. Never re-teach JS basics — instead link back. Focus 100% on what TypeScript ADDS.

---

## COMPILER SETUP FOR TYPESCRIPT

TypeScript compiles to JavaScript. For browser execution, use the TypeScript compiler API (typescript npm package) compiled with webpack, OR use a CDN approach.

Implementation for /components/compiler/TypeScriptCompiler.tsx:

Option A (Recommended): Use the TypeScript Playground API approach

- Load @typescript/typescript-standalone from CDN
- Compile TS → JS in the browser using ts.transpileModule()
- Execute the compiled JS in an iframe (same as existing JS compiler)
- Show both: TypeScript source (editor) + compiled JavaScript (toggle panel) + output (iframe)

Option B: Use a web worker to run TypeScript compilation off the main thread

The compiler has 4 panels:

- Panel 1: TypeScript editor (CodeMirror with @codemirror/lang-javascript + TypeScript dialect)
- Panel 2 (toggleable): Compiled JavaScript output (read-only, auto-updated)
- Panel 3: Type errors panel (shows red squiggles explanation, like an IDE)
- Panel 4: Live preview output (iframe)

Type error display:

- As user types, show type errors in real-time (like VS Code)
- Each error: error code (TS2304), message, line number, fix suggestion
- Errors styled with red underline in editor + error list panel

---

## CURRICULUM DATA STRUCTURE

Add to /lib/curriculum/typescript-curriculum.ts following existing type interfaces.

Track metadata:

- id: "typescript"
- title: "TypeScript"
- tagline: "JavaScript, but with superpowers"
- icon: "🔷"
- color: "#3178C6"
- totalChapters: 65
- estimatedHours: 90

---

## FULL CURRICULUM — 65 CHAPTERS

=== PART 1: INTRODUCTION TO TYPESCRIPT (Chapters 1–8) ===

Chapter 1: What Is TypeScript and Why Does It Exist?
Difficulty: Beginner | XP: 100 | Time: 30 min

Learning objectives:

- Understand the problem TypeScript solves
- Know the relationship between TypeScript and JavaScript
- Set up TypeScript environment
- Run first TypeScript file
- Understand what "type safety" means in practice

Sections (400+ words each, no placeholders):

1.1 — The Problem with JavaScript
Real-world analogy: JavaScript without types is like a restaurant kitchen where any ingredient can go in any dish. The chef only discovers the mistake when the food reaches the table (at runtime). TypeScript is like labeling every container — you catch problems in the kitchen (at compile time), not at the table.

Content: JavaScript was designed in 10 days. It has a fundamental flaw: you can call a function with the wrong arguments, assign the wrong type of value to a variable, or misspell a property name — and JavaScript won't complain. The error only shows up when your code runs, possibly in production, possibly for an important user.

Example (real bug that TypeScript prevents):

```javascript
function getUser(id) {
  return fetchUser(id);
}
getUser(); // No argument — JS silently passes undefined
// Bug discovered only when it crashes in production
```

TypeScript would catch this immediately: "Expected 1 argument, but got 0. (TS2554)"

Statistics: Microsoft found that 15% of reported JavaScript bugs in public projects could have been caught at compile time with TypeScript. Airbnb reported 38% of bugs could have been prevented.

1.2 — TypeScript: A Superset of JavaScript
TypeScript is NOT a separate language. It is JavaScript with a type system on top. Every valid JavaScript file is a valid TypeScript file. TypeScript compiles (transpiles) to plain JavaScript. The browser never sees TypeScript — it sees the compiled JS output.

Visual mental model: TypeScript is a layer on top of JavaScript. Write TypeScript → TypeScript Compiler (tsc) checks for type errors → Outputs regular .js file → Browser runs the .js.

TypeScript does NOT add new runtime features (no new methods, no new syntax at runtime). It only adds compile-time checking.

1.3 — Setting Up TypeScript

```bash
npm install -g typescript
tsc --version  # Verify
mkdir ts-project && cd ts-project
npm init -y
npm install typescript --save-dev
npx tsc --init  # Creates tsconfig.json
```

tsconfig.json key options explained:

- "target": "ES2020" — which JS version to compile to
- "module": "commonjs" — module system
- "strict": true — enables ALL strict type checks (ALWAYS use this)
- "outDir": "./dist" — where compiled JS goes
- "rootDir": "./src" — where your .ts files live
- "noImplicitAny": true — errors if any type is implicitly 'any'

1.4 — First TypeScript File
Create src/index.ts:

```typescript
// The colon after variable name is the TYPE ANNOTATION
let message: string = "Hello, TypeScript!";
let count: number = 42;
let isActive: boolean = true;

console.log(message);  // Hello, TypeScript!

// Now try this — TypeScript PREVENTS it:
// message = 42;  // Error: Type 'number' is not assignable to type 'string'
```

Compile: npx tsc → Outputs dist/index.js → Run: node dist/index.js

Using ts-node for development (no compile step):
npm install -D ts-node → npx ts-node src/index.ts

1.5 — TypeScript vs JavaScript: What Changes?
Differences a JS developer will notice immediately:

- Add type annotations with : Type syntax
- Function parameters NEED types (with strict mode)
- You get red underlines in VS Code before running (IDE integration)
- Compilation step added to workflow
- .ts extension instead of .js
- tsconfig.json in project root

What stays the same: ALL of JavaScript still works. Arrays, objects, classes, async/await, destructuring — all identical syntax.

Quiz (8 questions — all with detailed explanations):
Q1: What does TypeScript compile to? A) Machine code B) JavaScript C) Python D) WebAssembly — Answer: B — TypeScript always compiles to plain JavaScript. The browser never sees TypeScript code.
Q2 (True/False): TypeScript adds new features that work in the browser that JavaScript doesn't have. — Answer: False — TypeScript only adds compile-time type checking. At runtime, it's just JavaScript.
Q3: What command initializes a TypeScript configuration file? A) ts init B) tsc --init C) typescript setup D) npm init ts — Answer: B
Q4 (Code output): What error does TypeScript give for: let x: number = "hello"? — Answer: Type 'string' is not assignable to type 'number'. — Explanation: TypeScript's type checker sees that "hello" is a string but x was declared as number. This mismatch is a type error.
Q5: What does "strict": true in tsconfig.json do? A) Makes TypeScript compile faster B) Enables all strict type-checking options C) Prevents any code from running D) Only allows ES5 syntax — Answer: B
Q6 (Fill blank): TypeScript files use the ___ extension. Answer: .ts
Q7 (True/False): Every valid JavaScript file is a valid TypeScript file. Answer: True — Explanation: TypeScript is a superset of JavaScript. You can rename any .js file to .ts and it will be valid TypeScript (though it may have implicit 'any' warnings).
Q8: What percentage of Airbnb's bugs could TypeScript have prevented? A) 5% B) 15% C) 38% D) 75% — Answer: C

---

Chapter 2: Basic Types — The Foundation
Difficulty: Beginner | XP: 100 | Time: 40 min

2.1 — Primitive Types in TypeScript
string, number, boolean — same as JavaScript primitives but now explicitly annotated.

```typescript
let firstName: string = "Alice";
let age: number = 25;
let isLoggedIn: boolean = false;
```

Type inference: TypeScript can INFER types without annotation. let x = 42 — TypeScript automatically knows x is number. Best practice: let TypeScript infer when it's obvious, annotate when it's not.

2.2 — Array Types
Two syntaxes (both valid):

```typescript
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];  // Generic syntax
let matrix: number[][] = [[1, 2], [3, 4]];   // 2D array
```

2.3 — Tuple Types
Fixed-length arrays where each position has a specific type:

```typescript
let person: [string, number] = ["Alice", 25];
let rgb: [number, number, number] = [255, 128, 0];
// Labeled tuples (more readable):
let point: [x: number, y: number] = [10, 20];
```

When to use tuples: function return values with multiple values, CSV row data, coordinates.

2.4 — Special Types: any, unknown, never, void
any: The escape hatch (AVOID — defeats the purpose of TypeScript)
unknown: Like any but TYPE-SAFE — you must check the type before using it
void: Function returns nothing (no return statement or return;)
never: Function NEVER returns (throws error or infinite loop)

```typescript
function logMessage(msg: string): void { console.log(msg); }
function throwError(msg: string): never { throw new Error(msg); }
function processInput(input: unknown) {
  if (typeof input === "string") {
    console.log(input.toUpperCase()); // Now TypeScript allows this
  }
}
```

2.5 — null and undefined in TypeScript
With strict mode: null and undefined are NOT assignable to other types.

```typescript
let name: string = null;  // Error in strict mode!
let name: string | null = null;  // Correct — union type
```

The strictNullChecks option — why it matters, how to handle nullable values.

[Continue this exact depth for all 65 chapters...]

---

Chapter 3: Type Inference and Type Annotations — When to Use Which
Chapter 4: Object Types and Interfaces — Part 1
Chapter 5: Object Types and Interfaces — Part 2
Chapter 6: Type Aliases vs Interfaces — The Definitive Guide
Chapter 7: Union Types and Intersection Types
Chapter 8: Literal Types and Template Literal Types

=== PART 2: FUNCTIONS IN TYPESCRIPT (Chapters 9–15) ===

Chapter 9: Typing Functions — Parameters and Return Types
Chapter 10: Optional and Default Parameters
Chapter 11: Rest Parameters and Overloads
Chapter 12: Function Types and Signatures
Chapter 13: this in TypeScript Functions
Chapter 14: Generics — Part 1 (Generic Functions)
Chapter 15: Generics — Part 2 (Generic Constraints)

[Each chapter: 400+ words per section, 8+ quiz questions with detailed explanations, 3 exercises]

=== PART 3: CLASSES AND OOP (Chapters 16–24) ===

Chapter 16: Classes in TypeScript — Typed Properties
Chapter 17: Access Modifiers (public, private, protected, readonly)
Chapter 18: Abstract Classes
Chapter 19: Interfaces with Classes (implements)
Chapter 20: Generics with Classes
Chapter 21: Decorators — Experimental Feature
Chapter 22: Declaration Merging
Chapter 23: Mixins in TypeScript
Chapter 24: Design Patterns with TypeScript

=== PART 4: ADVANCED TYPE SYSTEM (Chapters 25–40) ===

Chapter 25: Enums — const enum vs regular enum
Chapter 26: Mapped Types (Record, Partial, Required, Readonly, Pick, Omit)
Chapter 27: Conditional Types (T extends U ? X : Y)
Chapter 28: Infer Keyword in Conditional Types
Chapter 29: Template Literal Types
Chapter 30: Discriminated Unions
Chapter 31: Type Guards (typeof, instanceof, in, custom type guards)
Chapter 32: The satisfies Operator (TypeScript 4.9+)
Chapter 33: Utility Types — All Built-in Types
Chapter 34: Recursive Types
Chapter 35: Variadic Tuple Types
Chapter 36: Index Signatures
Chapter 37: keyof, typeof, ReturnType, Parameters, InstanceType
Chapter 38: Namespace and Module Augmentation
Chapter 39: Declaration Files (.d.ts)
Chapter 40: Type Narrowing — Complete Guide

=== PART 5: TYPESCRIPT IN PRACTICE (Chapters 41–55) ===

Chapter 41: TypeScript with Node.js and Express
Chapter 42: TypeScript with React — Part 1 (Props and State)
Chapter 43: TypeScript with React — Part 2 (Hooks and Context)
Chapter 44: TypeScript with React — Part 3 (Event Handling and Refs)
Chapter 45: TypeScript with Fetch and Axios
Chapter 46: TypeScript and JSON (typing API responses)
Chapter 47: TypeScript with DOM APIs
Chapter 48: TypeScript with async/await
Chapter 49: Error Handling Patterns in TypeScript
Chapter 50: TypeScript Configuration Deep Dive
Chapter 51: ESLint with TypeScript
Chapter 52: Testing TypeScript (Vitest + @types)
Chapter 53: Publishing TypeScript Libraries
Chapter 54: Migrating JavaScript to TypeScript
Chapter 55: TypeScript Performance Tips

=== PART 6: PROJECTS (Chapters 56–65) ===

Chapter 56: Project — Type-Safe Todo App (TypeScript + DOM)
Chapter 57: Project — CLI Tool with TypeScript + Node
Chapter 58: Project — Type-Safe REST API Client
Chapter 59: Project — React + TypeScript Component Library
Chapter 60: Project — Full TypeScript Express API with Zod Validation
Chapter 61: Mini Challenge Set 1 (10 type challenges — beginner)
Chapter 62: Mini Challenge Set 2 (10 type challenges — intermediate)
Chapter 63: Mini Challenge Set 3 (10 type challenges — advanced)
Chapter 64: TypeScript Common Mistakes and How to Fix Them
Chapter 65: TypeScript Mastery Recap + Certificate Prep

---

## TYPESCRIPT COMPILER TECHNICAL REQUIREMENTS

1. Use @typescript/typescript from CDN for in-browser compilation
   CDN: <https://unpkg.com/typescript/lib/typescript.js>

2. Compile pipeline in browser:

   ```javascript
   const ts = window.ts;
   const result = ts.transpileModule(tsCode, {
     compilerOptions: {
       target: ts.ScriptTarget.ES2020,
       module: ts.ModuleKind.None,
       strict: true,
     }
   });
   const jsCode = result.outputText;
   ```

3. Type error display:
   Use ts.createProgram() for full type checking (not just transpilation)
   Show errors with: error.messageText, error.file?.fileName, error.start position
   Map character positions to line/column numbers for editor highlighting

4. Three-panel compiler layout:
   - TypeScript editor (CodeMirror, left 50%)
   - Type errors + compiled JS tabs (top right 50%)
   - Live output preview (bottom right 50%)

5. Real-time error checking: debounce 500ms after user stops typing

---

## QUALITY REQUIREMENTS

- Zero placeholder content in any of the 65 chapters
- JS Prerequisite callouts in every chapter that references JS concepts
- All type examples must compile correctly (test every single one)
- Compiler must show real TypeScript errors (not just transpile)
- Every chapter: 8+ quiz questions with detailed explanations
- Every chapter: 3 practice exercises (type puzzles count as exercises)
- Certificate issues after all 65 chapters completed + all quizzes ≥80%
- Track color: #3178C6 (TypeScript blue)
- Track icon: TypeScript logo SVG

---

## IMPLEMENTATION ORDER FOR BOTH NEW TRACKS

1. Add "python" and "typescript" to Track type union in types.ts
2. Add Python and TypeScript to track list in dashboard (/learn/page.tsx)
3. Build PythonCompiler component + Pyodide integration
4. Build TypeScriptCompiler component + TS in-browser compilation
5. Write python-curriculum.ts (all 80 chapters — REAL content, no placeholders)
6. Write typescript-curriculum.ts (all 65 chapters — REAL content, no placeholders)
7. Add dedicated compiler routes: /compiler/python, /compiler/typescript
8. Update certificate system to support 2 new tracks
9. Update profile page to show all 5 track progress
10. Update landing page to show 5 tracks instead of 3
11. Test all compiler features for both languages
