import { Track, Chapter, Section, Exercise, Quiz, QuizQuestion, CodeExample, MicroExercise, Callout, CheatSheetItem } from './types';

// Helper for creating exercises
const makeExercise = (id: string, title: string, desc: string, reqs: string[], starter: string, hint: string, sol: string): Exercise => ({
  id,
  title,
  difficulty: 1 as const,
  description: desc,
  requirements: reqs,
  starterCode: { javascript: starter },
  hints: [hint],
  solution: { javascript: sol },
  solutionExplanation: "Solution provided."
});

// Bengali translations map (key = chapter id)
const bnTitles: Record<string, { title: string; subtitle: string }> = {
  "ts-ch-1": { title: "টাইপস্ক্রিপ্ট কী এবং কেন এটি আছে?", subtitle: "টাইপস্ক্রিপ্ট কোন সমস্যা সমাধান করে তা বুঝুন" },
  "ts-ch-2": { title: "বেসিক টাইপস — ভিত্তি", subtitle: "primitive types, arrays, এবং special types বুঝুন" },
  "ts-ch-3": { title: "টাইপ ইনফারেন্স — টাইপস্ক্রিপ্ট অনুমান করে", subtitle: "কখন টাইপ ইনফার হয় এবং কখন অ্যানোটেশন দরকার" },
  "ts-ch-4": { title: "ইন্টারফেস — কাস্টম টাইপ তৈরি", subtitle: "অবজেক্টের জন্য টাইপ স্ট্রাকচার সংজ্ঞায়িত করুন" },
  "ts-ch-5": { title: "অ্যারে এবং অবজেক্ট টাইপ", subtitle: "complex ডেটা স্ট্রাকচার টাইপ করুন" },
  "ts-ch-6": { title: "অ্যালায়াস এবং ইন্টারসেকশন", subtitle: "টাইপ রিইউজ এবং কম্বিন করুন" },
  "ts-ch-7": { title: "ইউনিয়ন এবং টাইপ গার্ড", subtitle: "একাধিক টাইপ একসাথে ব্যবহার করুন" },
  "ts-ch-8": { title: "any, unknown, never, এবং void", subtitle: "বিশেষ টাইপগুলো বুঝুন" },
  "ts-ch-9": { title: "ফাংশন টাইপস — পারামিটার এবং রিটার্ন", subtitle: "ফাংশনের জন্য টাইপ সংজ্ঞায়িত করুন" },
  "ts-ch-10": { title: "অপশনাল এবং ডিফল্ট পারামিটার", subtitle: "flexible ফাংশন পারামিটার" },
  "ts-ch-11": { title: "রেস্ট পারামিটার এবং ফাংশন ওভারলোডিং", subtitle: "উন্নত ফাংশন প্যাটার্ন" },
  "ts-ch-12": { title: "ফাংশন টাইপ এবং কলব্যাক", subtitle: "ফাংশনকে টাইপ হিসেবে ব্যবহার করুন" },
  "ts-ch-13": { title: "this ইন ফাংশনস", subtitle: "this কনটেক্সট সঠিকভাবে হ্যান্ডেল করুন" },
  "ts-ch-14": { title: "জেনেরিক ফাংশনস — রিইউজেবল কোড", subtitle: "টাইপ-সেফ ফাংশন যা যেকোনো ডেটার সাথে কাজ করে" },
  "ts-ch-15": { title: "জেনেরিক কনস্ট্রেইন্টস", subtitle: "জেনেরিক টাইপকে সীমাবদ্ধ করুন" },
  "ts-ch-16": { title: "ক্লাসেস — অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং", subtitle: "ক্লাস দিয়ে অবজেক্ট তৈরি করুন" },
  "ts-ch-17": { title: "অ্যাক্সেস মডিফায়ারস — public, private, protected", subtitle: "প্রপার্টি এবং মেথডের দৃশ্যমানতা নিয়ন্ত্রণ" },
  "ts-ch-18": { title: "ইনহেরিটেন্স — প্যারেন্ট থেকে চাইল্ড", subtitle: "ক্লাস প্রসারিত করুন" },
  "ts-ch-19": { title: "অ্যাবস্ট্রাক্ট ক্লাস এবং মেথড", subtitle: "বেস ক্লাস যা ইমপ্লিমেন্ট করতে হবে" },
  "ts-ch-20": { title: "ইন্টারফেস বনাম ক্লাস", subtitle: "কখন কোন ব্যবহার করবেন" },
  "ts-ch-21": { title: "জেনেরিক ক্লাসেস", subtitle: "পুনরায় ব্যবহারযোগ্য ক্লাস টেমপ্লেট" },
  "ts-ch-22": { title: "ডেকোরেটরস", subtitle: "ক্লাস এবং মেথড পরিবর্তন" },
  "ts-ch-23": { title: "ইন্টারফেস মার্জিং এবং মিক্সিনস", subtitle: "উন্নত প্যাটার্ন" },
  "ts-ch-24": { title: "ডিজাইন প্যাটার্নস", subtitle: "টাইপস্ক্রিপ্টে কমন প্যাটার্ন" },
  "ts-ch-25": { title: "ইউনিয়ন টাইপস — যখন একটি ভ্যালু একাধিক টাইপ হতে পারে", subtitle: "এক ভ্যারিয়েবল, একাধিক সম্ভাব্য টাইপ" },
  "ts-ch-26": { title: "টাইপ অ্যালায়াস — টাইপে নাম দিন", subtitle: "নিজের টাইপ নাম তৈরি করুন" },
  "ts-ch-27": { title: "লিটারাল টাইপস — নির্দিষ্ট স্ট্রিং, নম্বর, বা বুলিয়ান", subtitle: "সঠিক ভ্যালু হিসেবে টাইপ" },
  "ts-ch-28": { title: "never টাইপ — যে ফাংশন কখনো রিটার্ন করে না", subtitle: "never এবং void বুঝুন" },
  "ts-ch-29": { title: "unknown টাইপ — নিরাপদ any", subtitle: "type-safe any রিপ্লেসমেন্ট" },
  "ts-ch-30": { title: "টাইপ গার্ডস — কাস্টম টাইপ চেক", subtitle: "কাস্টম টাইপ ন্যারোইং" },
  "ts-ch-31": { title: "ডিসক্রিমিনেটেড ইউনিয়নস — ট্যাগড ইউনিয়ন টাইপস", subtitle: "প্যাটার্ন ম্যাচিং with টাইপ সেফটি" },
  "ts-ch-32": { title: "ইন্টারসেকশন টাইপস — টাইপ কম্বিন করা", subtitle: "একাধিক টাইপ একসাথে" },
  "ts-ch-33": { title: "ইউটিলিটি টাইপস — বিল্ট-ইন টাইপ ট্রান্সফর্মেশনস", subtitle: "কমন টাইপ হেল্পারস" },
  "ts-ch-34": { title: "জেনেরিক কনস্ট্রেইন্টস — টাইপ পারামিটার সীমাবদ্ধ করা", subtitle: "কোন টাইপ ব্যবহার করা যাবে তা সীমিত করুন" },
  "ts-ch-35": { title: "ম্যাপড টাইপস — টাইপ থেকে টাইপ তৈরি", subtitle: "ডায়নামিক্যালি টাইপ ট্রান্সফর্ম" },
  "ts-ch-36": { title: "টেমপ্লেট লিটারাল টাইপস — স্ট্রিং টাইপস স্টেরয়েডস", subtitle: "প্যাটার্ন-ভিত্তিক স্ট্রিং টাইপস" },
  "ts-ch-37": { title: "কন্ডিশনাল টাইপস — টাইপ-লেভেল ইফ স্টেটমেন্টস", subtitle: "শর্তের ভিত্তিতে টাইপ পরিবর্তন" },
  "ts-ch-38": { title: "infer কীওয়ার্ড — টাইপ এক্সট্রাক্ট", subtitle: "প্যাটার্ন ম্যাচিং for টাইপস" },
  "ts-ch-39": { title: "ডিক্লারেশন মার্জিং — ইন্টারফেস এক্সটেনশন", subtitle: "কিভাবে ইন্টারফেস মার্জ হয়" },
  "ts-ch-40": { title: "মডিউল অগমেন্টেশন — বিল্ট-ইন টাইপস এক্সটেন্ড", subtitle: "বিদ্যমান টাইপসে যোগ করুন" },
  "ts-ch-41": { title: "প্রোডাকশন টাইপস্ক্রিপ্ট প্রজেক্ট সেটআপ", subtitle: "প্রজেক্ট কনফিগারেশন ডিপ ডাইভ" },
  "ts-ch-42": { title: "থার্ড-পার্টি জাভাস্ক্রিপ্ট লাইব্রেরির সাথে কাজ করা", subtitle: "আনটাইপড কোড টাইপিং" },
  "ts-ch-43": { title: "এরর হ্যান্ডলিং ইথ রেজাল্ট টাইপস", subtitle: "স্পষ্ট এরর হ্যান্ডলিং" },
  "ts-ch-44": { title: "ইভেন্ট-ড্রিভেন টাইপস — টাইপ-সেফ ইভেন্ট সিস্টেমস", subtitle: "টাইপড ইভেন্ট হ্যান্ডলিং" },
  "ts-ch-45": { title: "স্টেট ম্যানেজমেন্ট ইথ টাইপস্ক্রিপ্ট", subtitle: "টাইপড স্টেট কন্টেইনারস" },
  "ts-ch-46": { title: "API টাইপস — JSON থেকে টাইপস্ক্রিপ্ট", subtitle: "API রেসপন্স টাইপিং" },
  "ts-ch-47": { title: "টেস্টিং টাইপস্ক্রিপ্ট — টাইপ টেস্টিং টেকনিকস", subtitle: "আপনার টাইপস কাজ করছে তা যাচাই করুন" },
  "ts-ch-48": { title: "রিঅ্যাক্ট ইথ টাইপস্ক্রিপ্ট — কম্পোনেন্ট টাইপস", subtitle: "টাইপড রিঅ্যাক্ট কম্পোনেন্টস" },
  "ts-ch-49": { title: "নোড.জেএস ইথ টাইপস্ক্রিপ্ট — ব্যাকএন্ড টাইপস", subtitle: "সার্ভার-সাইড টাইপস্ক্রিপ্ট" },
  "ts-ch-50": { title: "ডাটাবেস টাইপস — টাইপ-সেফ ডাটাবেস অপারেশনস", subtitle: "SQL এবং NoSQL এর জন্য টাইপস" },
  "ts-ch-51": { title: "টাইপ-সেফ API ক্লায়েন্টস — ফেচ র‍্যাপারস", subtitle: "টাইপড HTTP রিকোয়েস্টস" },
  "ts-ch-52": { title: "কনফিগারেশন টাইপস — টাইপ-সেফ কনফিগ অবজেক্টস", subtitle: "টাইপড কনফিগারেশন" },
  "ts-ch-53": { title: "এরর বাউন্ডারিস — সেন্ট্রালাইজড এরর হ্যান্ডলিং", subtitle: "টাইপড এরর হ্যান্ডলিং" },
  "ts-ch-54": { title: "টাইপ-সেফ রাউটিং — পারামিটার এবং কোয়েরি টাইপস", subtitle: "টাইপড রাউট পারামিটারস" },
  "ts-ch-55": { title: "বিল্ড এবং ডিপ্লয়মেন্ট — প্রোডাকশন টাইপস্ক্রিপ্ট", subtitle: "প্রোডাকশনের জন্য অপ্টিমাইজ" },
  "ts-ch-56": { title: "প্রজেক্ট: টাইপ-সেফ টোডো অ্যাপ্লিকেশন", subtitle: "সম্পূর্ণ টোডো অ্যাপ বানান" },
  "ts-ch-57": { title: "প্রজেক্ট: REST API ক্লায়েন্ট লাইব্রেরি", subtitle: "টাইপ-সেফ HTTP র‍্যাপার" },
  "ts-ch-58": { title: "প্রজেক্ট: স্টেট ম্যানেজমেন্ট লাইব্রেরি", subtitle: "নিজের স্টোর বানান" },
  "ts-ch-59": { title: "প্রজেক্ট: ফর্ম ভ্যালিডেশন লাইব্রেরি", subtitle: "টাইপ-সেফ ফর্ম হ্যান্ডলিং" },
  "ts-ch-60": { title: "প্রজেক্ট: টাইপ-সেফ রাউটার", subtitle: "রাউটিং সিস্টেম বানান" },
  "ts-ch-61": { title: "প্রজেক্ট: ডেটা ট্রান্সফর্ম পাইপলাইন", subtitle: "টাইপ-সেফ ডেটা প্রসেসিং" },
  "ts-ch-62": { title: "প্রজেক্ট: ডিপেন্ডেন্সি ইনজেকশন কন্টেইনার", subtitle: "টাইপ-সেফ DI সিস্টেম" },
  "ts-ch-63": { title: "প্রজেক্ট: ইভেন্ট বাস সিস্টেম", subtitle: "টাইপ-সেফ পাব/সাব" },
  "ts-ch-64": { title: "প্রজেক্ট: টাইপ-সেফ API স্কিমা ভ্যালিডেটর", subtitle: "স্কিমার বিরুদ্ধে ভ্যালিডেট" },
  "ts-ch-65": { title: "ফাইনাল প্রজেক্ট: টাইপ-সেফ কম্পোনেন্ট লাইব্রেরি", subtitle: "সম্পূর্ণ কম্পোনেন্ট লাইব্রেরি" },
};

// Function to add Bn fields to chapters
function addBnTranslations(chapters: Chapter[]): Chapter[] {
  return chapters.map(ch => {
    const bn = bnTitles[ch.id];
    if (!bn) return ch;
    return {
      ...ch,
      titleBn: bn.title,
      subtitleBn: bn.subtitle,
      learningObjectivesBn: ch.learningObjectives.map(o => `[BN] ${o}`),
    };
  });
}

export const typescriptTrack: Track = {
  id: "typescript",
  title: "TypeScript",
  titleBn: "টাইপস্ক্রিপ্ট",
  tagline: "JavaScript, but with superpowers",
  icon: "https://img.icons8.com/color/144/typescript--v1.png",
  colorVar: "typescript",
  brandColor: "#3178C6",
  glowColor: "#3178C6",
  totalChapters: 65,
  estimatedHours: 90,
  chapters: [
    // ============ PART 1: INTRODUCTION ============
    {
      id: "ts-ch-1",
      number: 1,
      partLabel: "PART 1: INTRODUCTION TO TYPESCRIPT",
      title: "What Is TypeScript and Why Does It Exist?",
      subtitle: "Understanding the problem TypeScript solves",
      difficulty: "Beginner",
      estimatedMinutes: 30,
      xpReward: 100,
      prerequisites: [],
      learningObjectives: [
        "Understand the problem TypeScript solves",
        "Know the relationship between TypeScript and JavaScript",
        "Set up TypeScript environment",
        "Run first TypeScript file",
        "Understand what 'type safety' means in practice"
      ],
      sections: [
        {
          id: "ch1-problem",
          title: "The Problem with JavaScript",
          whyItMatters: "JavaScript was designed quickly and lacks the safeguards that prevent common bugs. Understanding this problem is the key to understanding why TypeScript exists.",
          realWorldAnalogy: "JavaScript without types is like a restaurant kitchen where any ingredient can go in any dish. The chef only discovers the mistake when the food reaches the table (at runtime). TypeScript is like labeling every container — you catch problems in the kitchen (at compile time), not at the table.",
          content: `JavaScript was designed in 10 days in 1995 by Brendan Eich at Netscape. While it has become the foundation of the modern web, it has a fundamental flaw: you can call a function with the wrong arguments, assign the wrong type of value to a variable, or misspell a property name — and JavaScript won't complain at all. The error only shows up when your code runs, possibly in production, possibly for an important user.

Consider this common bug that happens in JavaScript:

\`\`\`javascript
function getUser(id) {
  return fetchUser(id);
}
getUser(); // No argument — JS silently passes undefined
// Bug discovered only when it crashes in production
\`\`\`

In JavaScript, calling getUser() without an argument doesn't cause any error at the time of the call. The function receives undefined, tries to use it, and eventually crashes somewhere else in the codebase — far from the actual cause of the problem.

Statistics show the scope of this issue:
- Microsoft found that 15% of reported JavaScript bugs in public projects could have been caught at compile time with TypeScript
- Airbnb reported that 38% of all bugs in their codebase could have been prevented with static type checking
- Google reports that their TypeScript migration caught millions of potential runtime errors

This is the problem TypeScript was created to solve.`,
          callouts: [
            {
              type: "tip",
              title: "TypeScript Doesn't Replace JavaScript",
              content: "TypeScript is not a different language — it's JavaScript with a type system added on top. Every valid JavaScript file is a valid TypeScript file."
            }
          ],
          codeExamples: [
            {
              id: "ch1-js-bug",
              title: "A Common JavaScript Bug",
              description: "Demonstrates silent failure in JavaScript",
              code: { javascript: `function getUser(id) {\n  return fetchUser(id);\n}\n\n// Calling without argument - no error!\ngetUser();\n\n// But it will crash later with a confusing error` },
              explanation: "JavaScript doesn't validate function arguments at call time. The bug goes unnoticed until runtime."
            }
          ]
        },
        {
          id: "ch1-ts-solution",
          title: "TypeScript: A Superset of JavaScript",
          whyItMatters: "TypeScript adds compile-time type checking without changing how JavaScript works at runtime.",
          content: `TypeScript is NOT a separate language. It is JavaScript with a type system on top. Every valid JavaScript file is a valid TypeScript file. TypeScript compiles (transpiles) to plain JavaScript. The browser never sees TypeScript — it sees only the compiled JS output.

Visual mental model: TypeScript is a layer on top of JavaScript. You write TypeScript code → TypeScript Compiler (tsc) checks for type errors → Outputs a regular .js file → Browser runs the .js file.

TypeScript does NOT add new runtime features. It doesn't add new methods or new syntax that works in the browser. It only adds compile-time checking. At runtime, TypeScript is just JavaScript.

Key points:
- TypeScript files use the .ts extension (or .tsx for JSX)
- TypeScript compiles to JavaScript that runs in any browser
- The type system exists only during development
- You can gradually adopt TypeScript in existing JavaScript projects`,
          callouts: [
            {
              type: "info",
              title: "Transpilation vs Compilation",
              content: "TypeScript 'transpiles' to JavaScript — it converts TypeScript syntax to equivalent JavaScript. This is different from 'compiling' to machine code."
            }
          ]
        },
        {
          id: "ch1-setup",
          title: "Setting Up TypeScript",
          whyItMatters: "You need to install and configure TypeScript before you can start writing type-safe code.",
          content: `To use TypeScript, you need the TypeScript compiler (tsc). You can install it globally or as a project dependency:

\`\`\`bash
npm install -g typescript
tsc --version  # Verify installation
\`\`\`

For a project, use local installation:

\`\`\`bash
mkdir ts-project && cd ts-project
npm init -y
npm install typescript --save-dev
npx tsc --init  # Creates tsconfig.json
\`\`\`

The tsconfig.json file is the configuration for TypeScript. Key options explained:

- "target": "ES2020" — which JavaScript version to compile to
- "module": "commonjs" — module system (how code is organized)
- "strict": true — enables ALL strict type checks (ALWAYS use this!)
- "outDir": "./dist" — where compiled JavaScript files go
- "rootDir": "./src" — where your .ts files live
- "noImplicitAny": true — errors if any type is implicitly 'any'

The strict option is the most important setting. It enables all strict type-checking options and should always be true for new projects.`,
          codeExamples: [
            {
              id: "ch1-tsconfig",
              title: "Sample tsconfig.json",
              description: "Recommended TypeScript configuration",
              code: { javascript: `{\n  "compilerOptions": {\n    "target": "ES2020",\n    "module": "commonjs",\n    "strict": true,\n    "outDir": "./dist",\n    "rootDir": "./src",\n    "noImplicitAny": true,\n    "esModuleInterop": true\n  }\n}` },
              explanation: "This configuration enables all strict type checking and compiles to modern JavaScript."
            }
          ]
        },
        {
          id: "ch1-first-file",
          title: "Your First TypeScript File",
          whyItMatters: "Now you'll write actual TypeScript code and see the difference from JavaScript.",
          content: `Create a file called src/index.ts. The colon after variable name is the TYPE ANNOTATION — it's how you tell TypeScript what type a value should be.

\`\`\`typescript
// The colon after variable name is the TYPE ANNOTATION
let message: string = "Hello, TypeScript!";
let count: number = 42;
let isActive: boolean = true;

console.log(message);  // Hello, TypeScript!

// Now try this — TypeScript PREVENTS it at compile time:
// message = 42;  // Error: Type 'number' is not assignable to type 'string'
\`\`\`

Compile and run:
\`\`\`bash
npx tsc           # Compiles to dist/index.js
node dist/index.js  # Runs the compiled JavaScript
\`\`\`

For faster development, use ts-node which runs TypeScript directly without a compilation step:
\`\`\`bash
npm install -D ts-node
npx ts-node src/index.ts
\`\`\``,
          codeExamples: [
            {
              id: "ch1-first-ts",
              title: "First TypeScript Code",
              description: "Basic type annotations",
              code: { javascript: `let message: string = "Hello, TypeScript!";\nlet count: number = 42;\nlet isActive: boolean = true;\n\nconsole.log(message);\nconsole.log(count);\nconsole.log(isActive);\n\n// This line would cause a compile error:\n// message = 42;` },
              explanation: "Type annotations (the :string, :number, :boolean) tell TypeScript what type each variable should hold."
            }
          ]
        },
        {
          id: "ch1-vs-js",
          title: "TypeScript vs JavaScript: What Changes?",
          whyItMatters: "Understanding what changes when you add TypeScript helps you appreciate its benefits.",
          content: `Differences a JavaScript developer will notice immediately:

What changes:
- Add type annotations with : Type syntax
- Function parameters NEED types in strict mode
- You get red underlines in VS Code before running (IDE integration)
- A compilation step is added to your workflow
- Files use .ts extension instead of .js
- tsconfig.json appears in project root

What stays the same:
- ALL of JavaScript still works. Arrays, objects, classes, async/await, destructuring — all identical syntax
- JavaScript libraries work the same way
- The browser runs the same JavaScript output

The key insight: TypeScript doesn't change what your code does — it helps you write correct code before you run it.`,
          callouts: [
            {
              type: "common-mistake",
              title: "Don't Confuse TypeScript with New Syntax",
              content: "TypeScript doesn't add new runtime features. If you see new syntax in a .ts file, it's either type annotations or something that compiles to JavaScript."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch1-ex1",
          title: "Set Up TypeScript Project",
          difficulty: 1,
          description: "Create a TypeScript project and verify it compiles.",
          requirements: [
            "Initialize a new Node.js project",
            "Install TypeScript",
            "Create tsconfig.json with strict mode enabled",
            "Write a simple .ts file and compile it"
          ],
          starterCode: { javascript: "// Create your first TypeScript file\n\n// Add: let greeting: string = \"Hello!\";\n// Then run: npx tsc" },
          hints: [
            "Use npm init -y to initialize",
            "Use npm install -D typescript",
            "Use npx tsc --init to create config"
          ],
          solution: { javascript: "// index.ts\nlet greeting: string = \"Hello, TypeScript!\";\nconsole.log(greeting);" },
          solutionExplanation: "A simple TypeScript file with a string type annotation that compiles to JavaScript."
        },
        {
          id: "ch1-ex2",
          title: "Catch a Type Error",
          difficulty: 1,
          description: "Write code that causes a TypeScript type error.",
          requirements: [
            "Create a number variable",
            "Try to assign a string to it",
            "Observe the compile-time error"
          ],
          starterCode: { javascript: "// Declare a number variable\n// Try to assign a string to it\n// What error do you see?" },
          hints: [
            "Use let num: number = 0;",
            "Then try: num = \"text\";"
          ],
          solution: { javascript: "let num: number = 42;\n// num = \"hello\"; // Uncomment to see error\n\n// Error: Type 'string' is not assignable to type 'number'" },
          solutionExplanation: "TypeScript catches type mismatches at compile time, preventing runtime errors."
        },
        {
          id: "ch1-ex3",
          title: "Your First Typed Function",
          difficulty: 1,
          description: "Write a function with proper type annotations.",
          requirements: [
            "Create a function that takes a name (string)",
            "Add return type annotation (string)",
            "Return a greeting message"
          ],
          starterCode: { javascript: "// Create a greet function\n// It should take a name parameter\n// And return a greeting string" },
          hints: [
            "Syntax: function greet(name: string): string",
            "Return type goes after the parameter parentheses"
          ],
          solution: { javascript: "function greet(name: string): string {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet(\"Alice\"));\nconsole.log(greet(\"Bob\"));" },
          solutionExplanation: "Function parameter types and return types are declared after the parameter list."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch1-q1",
            type: "mcq",
            question: "What does TypeScript compile to?",
            options: [
              "Machine code",
              "JavaScript",
              "Python",
              "WebAssembly"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "TypeScript always compiles to plain JavaScript. The browser never sees TypeScript code. It receives regular JavaScript that can run in any browser."
          },
          {
            id: "ch1-q2",
            type: "true-false",
            question: "TypeScript adds new features that work in the browser that JavaScript doesn't have.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "False — TypeScript only adds compile-time type checking. At runtime, it's just JavaScript with no additional features."
          },
          {
            id: "ch1-q3",
            type: "mcq",
            question: "What command initializes a TypeScript configuration file?",
            options: [
              "ts init",
              "tsc --init",
              "typescript setup",
              "npm init ts"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "The tsc --init command creates a tsconfig.json file with default TypeScript compiler options."
          },
          {
            id: "ch1-q4",
            type: "code-output",
            question: "What error does TypeScript give for: let x: number = \"hello\"?",
            code: "let x: number = \"hello\";",
            correctAnswer: "Type 'string' is not assignable to type 'number'",
            difficulty: 1,
            explanation: "TypeScript's type checker sees that 'hello' is a string but x was declared as number. This mismatch is a type error."
          },
          {
            id: "ch1-q5",
            type: "mcq",
            question: "What does 'strict': true in tsconfig.json do?",
            options: [
              "Makes TypeScript compile faster",
              "Enables all strict type-checking options",
              "Prevents any code from running",
              "Only allows ES5 syntax"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "The strict option enables all strict type-checking options including strict null checks, no implicit any, and more."
          },
          {
            id: "ch1-q6",
            type: "fill-blank",
            question: "TypeScript files use the ___ extension.",
            correctAnswer: ".ts",
            difficulty: 1,
            explanation: "TypeScript files use the .ts extension. JSX/React files use .tsx extension."
          },
          {
            id: "ch1-q7",
            type: "true-false",
            question: "Every valid JavaScript file is a valid TypeScript file.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "True — TypeScript is a superset of JavaScript. You can rename any .js file to .ts and it will be valid TypeScript (though it may have implicit 'any' warnings)."
          },
          {
            id: "ch1-q8",
            type: "mcq",
            question: "What percentage of Airbnb's bugs could TypeScript have prevented?",
            options: [
              "5%",
              "15%",
              "38%",
              "75%"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "Airbnb reported that 38% of bugs in their codebase could have been prevented with static type checking using TypeScript."
          }
        ],
        passingScore: 6
      },
      cheatSheet: [
        { label: "Install TypeScript", value: "npm install -D typescript" },
        { label: "Initialize config", value: "npx tsc --init" },
        { label: "Compile", value: "npx tsc" },
        { label: "Compile & watch", value: "npx tsc --watch" },
        { label: "Run directly", value: "npx ts-node file.ts" },
        { label: "Type annotation", value: "let x: string = 'hi'" },
        { label: "Function types", value: "function f(x: string): number" },
        { label: "Strict mode", value: '"strict": true in tsconfig' }
      ]
    },
    {
      id: "ts-ch-2",
      number: 2,
      partLabel: "PART 1: INTRODUCTION TO TYPESCRIPT",
      title: "Basic Types — The Foundation",
      subtitle: "Understanding primitive types, arrays, and special types",
      difficulty: "Beginner",
      estimatedMinutes: 40,
      xpReward: 100,
      prerequisites: ["ts-ch-1"],
      learningObjectives: [
        "Understand primitive types: string, number, boolean",
        "Work with array types",
        "Use tuple types for fixed-length arrays",
        "Understand special types: any, unknown, never, void",
        "Handle null and undefined correctly"
      ],
      sections: [
        {
          id: "ch2-primitives",
          title: "Primitive Types in TypeScript",
          whyItMatters: "Primitive types are the building blocks of all TypeScript code.",
          content: `TypeScript supports three primitive types that correspond to JavaScript primitives: string, number, and boolean.

\`\`\`typescript
let firstName: string = "Alice";
let age: number = 25;
let isLoggedIn: boolean = false;
\`\`\`

Type inference: TypeScript can INFER types without explicit annotation. When you assign a value at declaration, TypeScript automatically knows the type:

\`\`\`typescript
let x = 42;  // TypeScript knows x is number
let name = "Alice";  // TypeScript knows name is string
\`\`\`

Best practice: Let TypeScript infer when it's obvious (like with initial values), but annotate when it's not (like function parameters or when you need explicit documentation).

\`\`\`typescript
// Inference works well here
let count = 0;
let message = "hello";

// But annotate explicitly for clarity
let userId: string;  // explicitly declared, no initial value
\`\`\``,
          codeExamples: [
            {
              id: "ch2-primitives",
              title: "Primitive Type Annotations",
              description: "Basic type annotations for primitives",
              code: { javascript: `// Explicit annotations\nlet name: string = \"Alice\";\nlet age: number = 25;\nlet isActive: boolean = true;\n\n// Type inference (TypeScript figures it out)\nlet inferredName = \"Bob\";  // string\nlet inferredAge = 30;      // number\nlet inferredActive = false; // boolean\n\n// Type is locked after inference\n// inferredName = 42; // Error!` },
              explanation: "Use explicit annotations for clarity, let inference work when type is obvious."
            }
          ]
        },
        {
          id: "ch2-arrays",
          title: "Array Types",
          whyItMatters: "Arrays are one of the most common data structures in JavaScript, and TypeScript needs to know what's in them.",
          content: `In TypeScript, arrays are typed. You can declare an array type in two equivalent ways:

\`\`\`typescript
// Array of numbers - two syntaxes
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];  // Generic syntax

// Both are equivalent
let mixed: (string | number)[] = ["a", "b", 1, 2];
\`\`\`

Multi-dimensional arrays:

\`\`\`typescript
let matrix: number[][] = [[1, 2], [3, 4]];
let grid: string[][] = [["a", "b"], ["c", "d"]];
\`\`\`

The number[] syntax is more common and easier to read. The Array<Type> syntax is useful when you need more complex generic type parameters.`,
          callouts: [
            {
              type: "tip",
              title: "Consistency",
              content: "Pick one syntax and stick with it. The number[] style is more common in the TypeScript community."
            }
          ]
        },
        {
          id: "ch2-tuples",
          title: "Tuple Types",
          whyItMatters: "Tuples represent fixed-length arrays where each position has a specific type.",
          content: `A tuple is a fixed-length array where each position has a specific type. Unlike regular arrays where all elements are the same type, tuples can have different types at each position.

\`\`\`typescript
// Basic tuple
let person: [string, number] = ["Alice", 25];
let rgb: [number, number, number] = [255, 128, 0];

// Accessing elements
console.log(person[0]); // "Alice"
console.log(person[1]); // 25

// Labeled tuples (TypeScript 4.0+)
let point: [x: number, y: number] = [10, 20];
\`\`\`

When to use tuples:
- Function return values with multiple values (like CSS custom properties)
- CSV row data where you know the exact structure
- Coordinates or points in 2D/3D space

\`\`\`typescript
// Tuple as function return
function getUser(): [string, number, boolean] {
  return ["Alice", 25, true];
}
\`\`\``,
          codeExamples: [
            {
              id: "ch2-tuple-example",
              title: "Tuple in Practice",
              description: "Using tuples for coordinate data",
              code: { javascript: `// Use tuple for coordinates\ntype Point = [x: number, y: number];\n\nfunction distance(p1: Point, p2: Point): number {\n  const dx = p2[0] - p1[0];\n  const dy = p2[1] - p1[1];\n  return Math.sqrt(dx * dx + dy * dy);\n}\n\nconst start: Point = [0, 0];\nconst end: Point = [3, 4];\nconsole.log(distance(start, end)); // 5` },
              explanation: "Tuples are perfect for fixed-size collections with different types."
            }
          ]
        },
        {
          id: "ch2-special-types",
          title: "Special Types: any, unknown, never, void",
          whyItMatters: "These special types handle edge cases and enable advanced type patterns.",
          content: `TypeScript has four special types for specific scenarios:

**any** - The escape hatch (USE SPARINGLY)
\`\`\`typescript
let anything: any = 42;
anything = "hello";  // OK
anything = true;    // OK
anything.foo.bar;    // OK - no type checking!
\`\`\`
any disables all type checking. It defeats the purpose of TypeScript. Avoid it unless absolutely necessary.

**unknown** - Type-safe any
\`\`\`typescript
let something: unknown = 42;
// something.toFixed(2); // Error! Don't know the type

if (typeof something === "number") {
  something.toFixed(2); // OK after narrowing
}
\`\`\`
unknown requires you to check the type before using it. It's safer than any.

**void** - Function returns nothing
\`\`\`typescript
function logMessage(msg: string): void {
  console.log(msg);
  // no return statement
}
\`\`\`
void means the function doesn't return a meaningful value.

**never** - Function never returns
\`\`\`typescript
function throwError(msg: string): never {
  throw new Error(msg);
}

function infiniteLoop(): never {
  while (true) {}
}
\`\`\`
never is used for functions that throw errors or run forever.`,
          callouts: [
            {
              type: "common-mistake",
              title: "Don't Use any",
              content: "If you find yourself using 'any', consider whether you should use 'unknown' instead, or define a proper type."
            }
          ]
        },
        {
          id: "ch2-null-undefined",
          title: "null and undefined in TypeScript",
          whyItMatters: "TypeScript's strict null checks help prevent one of the most common JavaScript bugs: null reference errors.",
          content: `With strict mode enabled, null and undefined are NOT assignable to other types by default:

\`\`\`typescript
// In strict mode - these cause errors:
let name: string = null;    // Error!
let age: number = undefined; // Error!
\`\`\`

To allow null/undefined, use UNION TYPES:
\`\`\`typescript
// Explicitly allow null
let name: string | null = null;

// Explicitly allow undefined
let age: number | undefined = undefined;

// Allow both
let value: string | null | undefined = undefined;
\`\`\`

The strictNullChecks option (enabled by strict: true) is important because it forces you to handle nullable values explicitly. This prevents the famous "Cannot read property 'x' of undefined" errors.

\`\`\`typescript
// Without strict null checks:
let user = getUser();
user.name; // Might crash if user is null!

// With strict null checks:
let user = getUser(); // type might be User | null
if (user) {
  user.name; // Safe - we checked!
}
\`\`\``,
          codeExamples: [
            {
              id: "ch2-null-safe",
              title: "Safe Null Handling",
              description: "Handling potentially null values",
              code: { javascript: `// Safe null handling\nfunction greet(name: string | null): string {\n  if (name === null) {\n    return \"Hello, Guest!\";\n  }\n  return \`Hello, \${name}!\`;\n}\n\nconsole.log(greet(\"Alice\")); // Hello, Alice!\nconsole.log(greet(null));    // Hello, Guest!` },
              explanation: "Union types and explicit null checks make your code safer."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch2-ex1",
          title: "Array Type Practice",
          difficulty: 1,
          description: "Create arrays with proper type annotations.",
          requirements: [
            "Create an array of numbers",
            "Create an array of strings",
            "Create a tuple with 3 elements"
          ],
          starterCode: { javascript: "// Create typed arrays\n// 1. numbers: number[]\n// 2. names: string[]\n// 3. coordinates: [number, number, number]" },
          hints: [
            "Use number[] for arrays",
            "Use tuple syntax: [type1, type2, type3]"
          ],
          solution: { javascript: "let numbers: number[] = [1, 2, 3, 4, 5];\nlet names: string[] = [\"Alice\", \"Bob\", \"Charlie\"];\nlet coordinates: [number, number, number] = [10, 20, 30];" },
          solutionExplanation: "Arrays use [] notation, tuples use parentheses with commas."
        },
        {
          id: "ch2-ex2",
          title: "Handle Null Safely",
          difficulty: 2,
          description: "Write a function that handles nullable input.",
          requirements: [
            "Function takes string | null",
            "Returns 'Hello, Guest!' if null",
            "Returns greeting with name if not null"
          ],
          starterCode: { javascript: "// Create greet function that handles null" },
          hints: [
            "Use union type: string | null",
            "Use if statement to check for null"
          ],
          solution: { javascript: "function greet(name: string | null): string {\n  if (name === null) {\n    return \"Hello, Guest!\";\n  }\n  return `Hello, ${name}!`;\n}" },
          solutionExplanation: "Union types require explicit handling of each case."
        },
        {
          id: "ch2-ex3",
          title: "Use unknown Instead of any",
          difficulty: 2,
          description: "Convert code using any to use unknown safely.",
          requirements: [
            "Create a variable of type unknown",
            "Use type narrowing to safely use the value",
            "Demonstrate the safety difference"
          ],
          starterCode: { javascript: "// Convert this to use unknown\n// let data: any = getData();\n// console.log(data.toUpperCase()); // Unsafe!" },
          hints: [
            "Use typeof for primitive type narrowing",
            "Check type before using methods"
          ],
          solution: { javascript: "let data: unknown = \"hello world\";\n\n// Safe - type narrowed\nif (typeof data === \"string\") {\n  console.log(data.toUpperCase()); // OK!\n}\n\n// This would cause an error:\n// console.log(data.toUpperCase()); // Error!" },
          solutionExplanation: "unknown requires type narrowing before use, unlike any."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch2-q1",
            type: "mcq",
            question: "What are the three primitive types in TypeScript?",
            options: [
              "int, float, double",
              "string, number, boolean",
              "char, int, bool",
              "text, digit, yesno"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "TypeScript has three primitive types matching JavaScript: string, number, and boolean."
          },
          {
            id: "ch2-q2",
            type: "mcq",
            question: "Which array type syntax is more common in TypeScript?",
            options: [
              "Array<number>",
              "number[]",
              "array[number]",
              "[number]"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "The number[] syntax is more common and readable than the Array<Type> generic syntax."
          },
          {
            id: "ch2-q3",
            type: "mcq",
            question: "What's the difference between any and unknown?",
            options: [
              "They are the same",
              "any has no type checking, unknown requires type narrowing",
              "unknown is for numbers only",
              "any is deprecated"
            ],
            correctAnswer: 1,
            difficulty: 2,
            explanation: "unknown is a type-safe version of any - you must narrow the type before using it."
          },
          {
            id: "ch2-q4",
            type: "mcq",
            question: "What does the never type represent?",
            options: [
              "A function that returns undefined",
              "A function that never returns",
              "A variable that can't have a value",
              "A type that is never used"
            ],
            correctAnswer: 1,
            difficulty: 2,
            explanation: "never represents functions that throw errors or run forever - they never return normally."
          },
          {
            id: "ch2-q5",
            type: "true-false",
            question: "With strict mode, you can assign null to a string variable.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "In strict mode, you must use union types like string | null to allow null values."
          },
          {
            id: "ch2-q6",
            type: "mcq",
            question: "What is a tuple?",
            options: [
              "A single value",
              "A fixed-length array with specific types at each position",
              "A function that returns multiple values",
              "A special object type"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "A tuple is a fixed-length array where each position has a specific type."
          },
          {
            id: "ch2-q7",
            type: "fill-blank",
            question: "A function that doesn't return a value has a return type of __.",
            correctAnswer: "void",
            difficulty: 1,
            explanation: "void is used for functions that don't return a meaningful value."
          },
          {
            id: "ch2-q8",
            type: "mcq",
            question: "What's the best practice for type inference?",
            options: [
              "Always annotate every variable",
              "Let TypeScript infer when obvious, annotate when not",
              "Never use inference",
              "Only use inference for numbers"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Let TypeScript infer types when they're obvious from initialization, but annotate for clarity when needed."
          }
        ],
        passingScore: 6
      },
      cheatSheet: [
        { label: "String type", value: "let s: string = 'hello'" },
        { label: "Number type", value: "let n: number = 42" },
        { label: "Boolean type", value: "let b: boolean = true" },
        { label: "Array type", value: "let arr: number[] = [1, 2]" },
        { label: "Tuple type", value: "let t: [string, number]" },
        { label: "Any type", value: "let a: any = anything" },
        { label: "Unknown type", value: "let u: unknown = maybe" },
        { label: "Void type", value: "function f(): void" },
        { label: "Never type", value: "function f(): never" },
        { label: "Nullable", value: "let x: string | null" }
      ]
    },
    {
      id: "ts-ch-3",
      number: 3,
      partLabel: "PART 1: INTRODUCTION TO TYPESCRIPT",
      title: "Type Inference and Type Annotations",
      subtitle: "When to use which and why",
      difficulty: "Beginner",
      estimatedMinutes: 35,
      xpReward: 100,
      prerequisites: ["ts-ch-1", "ts-ch-2"],
      learningObjectives: [
        "Understand type inference in TypeScript",
        "Know when to use explicit annotations vs inference",
        "Apply best practices for type annotations"
      ],
      sections: [
        {
          id: "ch3-inference",
          title: "How Type Inference Works",
          whyItMatters: "TypeScript automatically infers types from values, making code cleaner while maintaining safety.",
          content: `TypeScript analyzes your code and determines types automatically when you don't explicitly specify them. This is called type inference.

\`\`\`typescript
// TypeScript infers these types automatically
let name = "Alice";        // type: string
let age = 25;             // type: number
let isActive = true;      // type: boolean
let numbers = [1, 2, 3];  // type: number[]
\`\`\`

Inference happens at:
- Variable declarations with initializers
- Function return types (when return is obvious)
- Object property types (from object literals)
- Array types (from array literals)

\`\`\`typescript
// Function return type is inferred
function add(a: number, b: number) {
  return a + b;  // Return type inferred as number
}

// Object inference
const user = {
  name: "Alice",
  age: 25
};  // Type inferred as { name: string; age: number }
\`\`\``,
          callouts: [
            {
              type: "tip",
              title: "Let Inference Work for Initialized Variables",
              content: "When you initialize a variable with a value, TypeScript usually knows the best type. Let it do its job."
            }
          ]
        },
        {
          id: "ch3-annotations",
          title: "When to Use Explicit Annotations",
          whyItMatters: "Explicit annotations provide clarity and prevent unexpected type inference.",
          content: `Use explicit annotations when:

1. **No initializer** - Variable declared but not assigned:
\`\`\`typescript
let name: string;  // Must annotate - no value to infer from
name = "Alice";
\`\`\`

2. **Function parameters** - Always annotate these:
\`\`\`typescript
function greet(name: string): string {  // Both need annotations
  return \`Hello, \${name}!\`;
}
\`\`\`

3. **Complex return types** - When inference might be wrong:
\`\`\`typescript
function parseJSON(json: string): object | null {
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}
\`\`\`

4. **Documentation** - When the type isn't obvious:
\`\`\`typescript
// What is this ID? A string could be anything
let userId: string = getUserId();
// vs
let userId: UserId = getUserId();  // Clear intent
\`\`\`
`,
          codeExamples: [
            {
              id: "ch3-explicit",
              title: "Explicit vs Inferred",
              description: "When to use each approach",
              code: { javascript: `// Let TypeScript infer - obvious from value\nlet count = 0;\nlet name = \"Alice\";\nlet isActive = true;\n\n// Explicit annotation needed\nlet id: string;\nlet data: unknown;\n\n// Function parameters need annotations\nfunction processUser(user: User): void {\n  // ...\n}\n\n// Complex return type - explicit helps\nfunction getData(): Promise<Data | null> {\n  // ...\n}` },
              explanation: "Use inference for obvious types, annotations for parameters and unclear types."
            }
          ]
        },
        {
          id: "ch3-best-practices",
          title: "Best Practices",
          whyItMatters: "Consistent typing patterns make code more maintainable.",
          content: `Follow these guidelines:

**Do:**
- Annotate function parameters and return types explicitly
- Annotate variables without initializers
- Use type aliases for complex types
- Let inference work for local variables with obvious types

**Don't:**
- Over-annotate obvious types (let x: string = "hello")
- Use any when you can use unknown
- Annotate everything just for "clarity" when inference is fine

**Consistency is key:**
\`\`\`typescript
// Pick a style and stick with it
// Option 1: More inference (common in modern TypeScript)
const handleClick = (event: MouseEvent) => {
  const target = event.target;
  // ...
};

// Option 2: More explicit
const handleClick = (event: MouseEvent): void => {
  const target: HTMLElement = event.target as HTMLElement;
  // ...
};
\`\`\`
Both are valid - just be consistent within your codebase.`,
          callouts: [
            {
              type: "pro-tip",
              title: "IDE Integration",
              content: "Let your IDE (VS Code) show you types. Hover over variables to see inferred types - this helps learn what TypeScript infers."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch3-ex1",
          title: "Infer or Annotate?",
          difficulty: 1,
          description: "Choose when to infer or annotate.",
          requirements: [
            "Annotate function parameters",
            "Let TypeScript infer local variables",
            "Annotate return type for complex functions"
          ],
          starterCode: { javascript: "// Fix: Add annotations where needed\nfunction calculate(a, b) {\n  let result = a * b;\n  return result;\n}" },
          hints: [
            "Parameters need annotations",
            "result can be inferred",
            "Return type can be inferred but explicit is clearer"
          ],
          solution: { javascript: "function calculate(a: number, b: number): number {\n  let result = a * b;  // inferred as number\n  return result;\n}" },
          solutionExplanation: "Parameters need annotations, return type can be inferred."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch3-q1",
            type: "mcq",
            question: "When does TypeScript NOT infer types automatically?",
            options: [
              "When a variable has an initial value",
              "When a function returns a value",
              "When a variable is declared without initialization",
              "When an array is created"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "TypeScript needs a value to infer from. Without initialization, you must annotate."
          },
          {
            id: "ch3-q2",
            type: "true-false",
            question: "You should annotate every variable for clarity.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "Over-annotating makes code verbose. Let inference work when type is obvious."
          },
          {
            id: "ch3-q3",
            type: "mcq",
            question: "Which should you ALWAYS annotate?",
            options: [
              "Local variables with initial values",
              "Function parameters",
              "Constants with literal values",
              "Array elements"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Function parameters must be annotated - TypeScript can't infer what you'll pass."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        { label: "Inference", value: "let x = 42; // number" },
        { label: "Annotation", value: "let x: number;" },
        { label: "Param annotation", value: "function f(x: type)" },
        { label: "Return annotation", value: "function f(): type" },
        { label: "No initializer", value: "let x: string;" }
      ]
    },
    {
      id: "ts-ch-4",
      number: 4,
      partLabel: "PART 1: INTRODUCTION TO TYPESCRIPT",
      title: "Object Types and Interfaces — Part 1",
      subtitle: "Defining object shapes",
      difficulty: "Beginner",
      estimatedMinutes: 40,
      xpReward: 100,
      prerequisites: ["ts-ch-2", "ts-ch-3"],
      learningObjectives: [
        "Create interfaces for object shapes",
        "Define optional properties",
        "Understand readonly properties"
      ],
      sections: [
        {
          id: "ch4-interfaces",
          title: "Creating Interfaces",
          whyItMatters: "Interfaces define the shape of objects - essential for type safety.",
          content: `An interface defines what an object should look like:

\`\`\`typescript
interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = {
  name: "Alice",
  age: 25,
  email: "alice@example.com"
};
\`\`\`

Interfaces can have:
- Required properties (must be present)
- Optional properties (may or may not be present)
- Readonly properties (cannot be modified)

\`\`\`typescript
interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;  // Optional - with ?
  readonly createdAt: Date;  // Cannot be modified
}
\`\`\`
`,
          codeExamples: [
            {
              id: "ch4-basic-interface",
              title: "Basic Interface",
              description: "Defining an object shape",
              code: { javascript: `interface User {\n  name: string;\n  age: number;\n  email: string;\n}\n\nconst user: User = {\n  name: \"Alice\",\n  age: 25,\n  email: \"alice@example.com\"\n};\n\n// Error - missing required property\n// const bad: User = { name: \"Bob\" };` },
              explanation: "All required properties must be provided when creating an object."
            }
          ]
        },
        {
          id: "ch4-optional",
          title: "Optional Properties",
          whyItMatters: "Not all properties are required - optional properties add flexibility.",
          content: `Add ? after property name to make it optional:

\`\`\`typescript
interface User {
  name: string;
  age?: number;  // Optional
  email?: string;  // Optional
}

const user1: User = { name: "Alice" };  // OK
const user2: User = { name: "Bob", age: 30 };  // OK
const user3: User = { name: "Carol", email: "c@example.com" };  // OK
\`\`\`

Accessing optional properties:
\`\`\`typescript
function greet(user: User): string {
  if (user.age !== undefined) {
    return \`Hello, \${user.name}! You are \${user.age}.\`;
  }
  return \`Hello, \${user.name}!\`;
}
\`\`\`
`,
          callouts: [
            {
              type: "tip",
              title: "Use Optional Wisely",
              content: "Only make properties optional if they genuinely might not exist. Don't make everything optional."
            }
          ]
        },
        {
          id: "ch4-readonly",
          title: "Readonly Properties",
          whyItMatters: "Prevents modification of properties that should never change.",
          content: `Use readonly to mark properties that cannot be modified:

\`\`\`typescript
interface User {
  readonly id: string;  // Set once, never changes
  name: string;
  createdAt: readonly Date;  // Note: Date itself isn't immutable
}

const user: User = {
  id: "123",
  name: "Alice",
  createdAt: new Date()
};

user.name = "Bob";  // OK
// user.id = "456";  // Error! Cannot assign to readonly
\`\`\`

Use cases:
- IDs that are assigned once
- Timestamps that shouldn't change
- Configuration values
`,
          codeExamples: [
            {
              id: "ch4-readonly-example",
              title: "Readonly in Practice",
              description: "Using readonly for immutable data",
              code: { javascript: `interface Config {\n  readonly apiUrl: string;\n  readonly maxRetries: number;\n}\n\nconst config: Config = {\n  apiUrl: \"https://api.example.com\",\n  maxRetries: 3\n};\n\n// These would cause errors:\n// config.apiUrl = \"other\";\n// config.maxRetries = 5;` },
              explanation: "Readonly properties prevent accidental modification."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch4-ex1",
          title: "Create an Interface",
          difficulty: 1,
          description: "Define an interface for a book.",
          requirements: [
            "Interface with title, author (both required)",
            "pageCount optional",
            "isbn readonly"
          ],
          starterCode: { javascript: "// Create Book interface\n// Then create a book object" },
          hints: [
            "Use ? for optional",
            "Use readonly for immutable"
          ],
          solution: { javascript: "interface Book {\n  title: string;\n  author: string;\n  pageCount?: number;\n  readonly isbn: string;\n}\n\nconst book: Book = {\n  title: \"TypeScript Guide\",\n  author: \"Alice\",\n  isbn: \"978-3-16-148410-0\"\n};" },
          solutionExplanation: "Interface defines shape, optional and readonly modifiers work as expected."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch4-q1",
            type: "mcq",
            question: "How do you make a property optional in an interface?",
            options: [
              "Use '?' at the end of the property name",
              "Use 'optional' keyword",
              "Use 'maybe' type",
              "Leave the type empty"
            ],
            correctAnswer: 0,
            difficulty: 1,
            explanation: "Add ? after the property name: age?: number"
          },
          {
            id: "ch4-q2",
            type: "mcq",
            question: "What does readonly prevent?",
            options: [
              "Reading the property",
              "Modifying the property after creation",
              "Creating objects with that property",
              "Using the property in functions"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Readonly properties can be set at creation but cannot be modified."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Interface", value: "interface Name { prop: type }" },
        { label: "Optional", value: "prop?: type" },
        { label: "Readonly", value: "readonly prop: type" },
        { label: "Object type", value: "let obj: { k: type }" }
      ]
    },
    {
      id: "ts-ch-5",
      number: 5,
      partLabel: "PART 1: INTRODUCTION TO TYPESCRIPT",
      title: "Object Types and Interfaces — Part 2",
      subtitle: "Advanced interface patterns",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 110,
      prerequisites: ["ts-ch-4"],
      learningObjectives: [
        "Use index signatures for dynamic properties",
        "Extend interfaces with inheritance",
        "Use intersection types"
      ],
      sections: [
        {
          id: "ch5-index-signatures",
          title: "Index Signatures",
          whyItMatters: "When you don't know all property names ahead of time.",
          content: `Use index signatures when you want objects with dynamic keys:

\`\`\`typescript
interface StringDictionary {
  [key: string]: string;  // Any string key maps to string value
}

const dict: StringDictionary = {
  "hello": "world",
  "foo": "bar"
};
\`\`\`

Common use cases:
- Flexible data storage
- API responses with variable fields
- Caches or lookups

\`\`\`typescript
interface UserScores {
  [gameId: string]: number;  // Game ID -> score
}

const scores: UserScores = {
  "game1": 100,
  "game2": 250,
  "game3": 75
};
\`\`\`

Warning: Index signatures lose type safety for individual keys.
`,
          callouts: [
            {
              type: "common-mistake",
              title: "Don't Overuse Index Signatures",
              content: "If you know the property names, use specific properties instead. Index signatures are for truly dynamic data."
            }
          ]
        },
        {
          id: "ch5-interface-extends",
          title: "Interface Extension",
          whyItMatters: "Build complex types from simpler ones through inheritance.",
          content: `Interfaces can extend other interfaces:

\`\`\`typescript
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: string;
  department: string;
}

const emp: Employee = {
  name: "Alice",
  age: 30,
  employeeId: "E123",
  department: "Engineering"
};
\`\`\`

Extend multiple interfaces:
\`\`\`typescript
interface Named {
  name: string;
}

interface Aged {
  age: number;
}

interface Person extends Named, Aged {
  email: string;
}
\`\`\`
`,
          codeExamples: [
            {
              id: "ch5-extends",
              title: "Interface Inheritance",
              description: "Building on existing interfaces",
              code: { javascript: `interface Base {\n  id: string;\n  createdAt: Date;\n}\n\ninterface User extends Base {\n  name: string;\n  email: string;\n}\n\ninterface Admin extends User {\n  role: \"admin\" | \"superadmin\";\n  permissions: string[];\n}` },
              explanation: "Each level adds more specific properties."
            }
          ]
        },
        {
          id: "ch5-intersection",
          title: "Intersection Types",
          whyItMatters: "Combine types without inheritance.",
          content: `Intersection types (&) combine multiple types:

\`\`\`typescript
interface Named {
  name: string;
}

interface Aged {
  age: number;
}

// Intersection type - has BOTH
type Person = Named & Aged;

const person: Person = {
  name: "Alice",
  age: 25
};
\`\`\`

Difference from extends:
- Interface extends: Single inheritance
- Intersection: Can combine any types (even primitives)

\`\`\`typescript
type StringAndLength = string & { length: number };
// This would be never in practice, but shows the concept
\`\`\`
`,
          callouts: [
            {
              type: "tip",
              title: "Extension vs Intersection",
              content: "Use extends for object inheritance, intersection for mixing capabilities."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch5-ex1",
          title: "Extend Interfaces",
          difficulty: 2,
          description: "Create a hierarchy of interfaces.",
          requirements: [
            "Base interface with id and createdAt",
            "Extend with user properties",
            "Add admin-specific properties"
          ],
          starterCode: { javascript: "// Create the interface hierarchy" },
          hints: ["Use extends keyword", "Each level adds properties"],
          solution: { javascript: "interface Base {\n  id: string;\n  createdAt: Date;\n}\n\ninterface User extends Base {\n  name: string;\n  email: string;\n}\n\ninterface Admin extends User {\n  role: \"admin\" | \"superadmin\";\n}" },
          solutionExplanation: "Interface inheritance builds a type hierarchy."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch5-q1",
            type: "mcq",
            question: "When should you use index signatures?",
            options: [
              "When you know all property names",
              "When property names are dynamic/unknown",
              "When you need better performance",
              "Never - avoid them"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Index signatures are for dynamic/unknown property names."
          },
          {
            id: "ch5-q2",
            type: "mcq",
            question: "What does & do in TypeScript?",
            options: [
              "Creates a union",
              "Creates an intersection",
              "Checks equality",
              "Creates a reference"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "The & operator creates intersection types."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Index sig", value: "[key: string]: type" },
        { label: "Extends", value: "interface A extends B" },
        { label: "Intersection", value: "type A = B & C" }
      ]
    },
    {
      id: "ts-ch-6",
      number: 6,
      partLabel: "PART 1: INTRODUCTION TO TYPESCRIPT",
      title: "Type Aliases vs Interfaces",
      subtitle: "When to use each",
      difficulty: "Intermediate",
      estimatedMinutes: 35,
      xpReward: 100,
      prerequisites: ["ts-ch-4", "ts-ch-5"],
      learningObjectives: [
        "Understand type aliases",
        "Know when to use type vs interface",
        "Apply each appropriately"
      ],
      sections: [
        {
          id: "ch6-type-aliases",
          title: "Creating Type Aliases",
          whyItMatters: "Type aliases give names to types, making code more readable.",
          content: `Type aliases create a new name for a type:

\`\`\`typescript
// Primitive alias
type ID = string;

// Object alias
type User = {
  name: string;
  age: number;
};

// Function type alias
type Callback = (result: string) => void;
\`\`\`

Type aliases can represent:
- Primitives
- Objects
- Unions
- Tuples
- Functions
- Any other type

\`\`\`typescript
// Union type alias
type Status = "pending" | "success" | "error";

// Tuple alias
type Point = [number, number];
\`\`\`
`,
          codeExamples: [
            {
              id: "ch6-aliases",
              title: "Type Alias Examples",
              description: "Various uses of type aliases",
              code: { javascript: `type UserId = string;\ntype UserRole = \"admin\" | \"user\" | \"guest\";\ntype Coordinate = { x: number; y: number };\ntype EventHandler = (e: Event) => void;\n\n// Using the aliases\nconst userId: UserId = \"abc123\";\nconst role: UserRole = \"admin\";\nconst handler: EventHandler = (e) => console.log(e);` },
              explanation: "Type aliases make complex types more readable and reusable."
            }
          ]
        },
        {
          id: "ch6-comparison",
          title: "Interface vs Type Alias",
          whyItMatters: "Both can define object shapes - knowing when to use each is important.",
          content: `**Interface** - Best for:
- Object shapes
- Class definitions
- Extending other interfaces
- Declaration merging

**Type Alias** - Best for:
- Primitives
- Unions
- Tuples
- Function types
- Complex combinations

\`\`\`typescript
// Interface - better for objects
interface User {
  name: string;
}

// Type alias - better for unions
type Status = "loading" | "success" | "error";
\`\`\`

Both can define objects, but interfaces support extension and declaration merging.
`,
          callouts: [
            {
              type: "tip",
              title: "Use Interface for Objects",
              content: "When defining object shapes, interfaces are more common and support more features."
            },
            {
              type: "tip",
              title: "Use Type for Everything Else",
              content: "Unions, tuples, functions, and primitives are typically done with type aliases."
            }
          ]
        },
        {
          id: "ch6-when-to-use",
          title: "Decision Guide",
          whyItMatters: "Consistent choices make code easier to understand.",
          content: `Quick decision guide:

1. **Defining an object?** → Use interface
2. **Defining a class?** → Use interface
3. **Need to merge declarations?** → Use interface
4. **Creating a union?** → Use type
5. **Creating a tuple?** → Use type
6. **Defining a function type?** → Use type
7. **Wrapping a primitive?** → Use type

\`\`\`typescript
// Object → Interface
interface User { name: string; }

// Union → Type
type Status = "on" | "off";

// Function → Type
type Handler = (e: Event) => void;

// Tuple → Type
type Point = [number, number];
\`\`\`
`,
          codeExamples: [
            {
              id: "ch6-decision",
              title: "Choosing the Right Approach",
              description: "Apply the decision guide",
              code: { javascript: `// Object - use interface\ninterface Config {\n  apiKey: string;\n}\n\n// Union - use type\ntype Theme = \"light\" | \"dark\";\n\n// Function - use type\ntype LogFn = (msg: string) => void;\n\n// Tuple - use type\ntype Pair = [string, number];` },
              explanation: "Match the type to its purpose for cleaner code."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch6-ex1",
          title: "Choose Wisely",
          difficulty: 2,
          description: "Convert between interface and type appropriately.",
          requirements: [
            "Use type for a union",
            "Use interface for an object",
            "Use type for a function"
          ],
          starterCode: { javascript: "// Convert these appropriately" },
          hints: [" Unions → type", " Objects → interface", " Functions → type"],
          solution: { javascript: "// Union → type\ntype Status = \"loading\" | \"loaded\" | \"error\";\n\n// Object → interface\ninterface User {\n  name: string;\n  email: string;\n}\n\n// Function → type\ntype Handler = (data: string) => void;" },
          solutionExplanation: "Match each type to its appropriate category."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch6-q1",
            type: "mcq",
            question: "What can interfaces do that type aliases cannot?",
            options: [
              "Define unions",
              "Extend/inherit other types",
              "Define function types",
              "Create aliases"
            ],
            correctAnswer: 1,
            difficulty: 2,
            explanation: "Interfaces can extend other interfaces. Types can use intersections but not extends."
          },
          {
            id: "ch6-q2",
            type: "mcq",
            question: "What's the best choice for defining a union type?",
            options: [
              "interface",
              "type alias",
              "class",
              "enum"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Type aliases are the standard way to define unions."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Type alias", value: "type Name = ..." },
        { label: "Objects", value: "interface I { }" },
        { label: "Unions", value: "type T = A | B" },
        { label: "Functions", value: "type F = () => void" }
      ]
    },
    {
      id: "ts-ch-7",
      number: 7,
      partLabel: "PART 1: INTRODUCTION TO TYPESCRIPT",
      title: "Union Types and Intersection Types",
      subtitle: "Combining types flexibly",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 110,
      prerequisites: ["ts-ch-2", "ts-ch-4"],
      learningObjectives: [
        "Create and use union types",
        "Understand union member types",
        "Use intersection types effectively"
      ],
      sections: [
        {
          id: "ch7-union-basics",
          title: "Union Types Basics",
          whyItMatters: "Union types express that a value can be one of several types.",
          content: `A union type represents a value that can be one of multiple types:

\`\`\`typescript
// String or number
let value: string | number = "hello";
value = 42;  // Also valid
\`\`\`

Common uses:
- Function parameters that accept multiple types
- Variables that might be different types at different times
- API responses with different shapes

\`\`\`typescript
function processInput(input: string | number): string {
  if (typeof input === "string") {
    return input.toUpperCase();  // String methods work
  }
  return input.toFixed(2);  // Number methods work
}
\`\`\`

Union with literal types:
\`\`\`typescript
type Status = "loading" | "success" | "error";
let status: Status = "loading";
status = "success";  // OK
// status = "pending";  // Error - not in union
\`\`\`
`,
          codeExamples: [
            {
              id: "ch7-union-example",
              title: "Working with Unions",
              description: "Union types in functions",
              code: { javascript: `type Result = string | number;\n\nfunction display(value: Result): string {\n  if (typeof value === \"string\") {\n    return \`String: \${value}\`;\n  }\n  return \`Number: \${value}\`;\n}\n\nconsole.log(display(\"hello\")); // String: hello\nconsole.log(display(42));      // Number: 42` },
              explanation: "Use typeof or other checks to narrow union types."
            }
          ]
        },
        {
          id: "ch7-union-narrowing",
          title: "Union Narrowing",
          whyItMatters: "TypeScript can't know which union member you're using - you must narrow.",
          content: `Union narrowing (type guards) helps TypeScript understand the specific type:

\`\`\`typescript
function process(value: string | number): void {
  // Cannot do this - TypeScript doesn't know which type
  // value.toUpperCase();

  // Must narrow first
  if (typeof value === "string") {
    console.log(value.toUpperCase());  // Now TypeScript knows it's string
  } else {
    console.log(value.toFixed(2));  // Now TypeScript knows it's number
  }
}
\`\`\`

Narrowing techniques:
- typeof for primitives
- instanceof for classes
- in operator for objects
- Custom type guards

\`\`\`typescript
interface Dog {
  bark(): void;
}

interface Cat {
  meow(): void;
}

function makeSound(animal: Dog | Cat): void {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}
\`\`\`
`,
          callouts: [
            {
              type: "common-mistake",
              title: "Don't Forget to Narrow",
              content: "When using union types, always narrow before using type-specific methods."
            }
          ]
        },
        {
          id: "ch7-intersection",
          title: "Intersection Types Deep Dive",
          whyItMatters: "Intersection combines types - a value must satisfy all of them.",
          content: `Intersection types create a type with all properties of multiple types:

\`\`\`typescript
interface Printable {
  print(): void;
}

interface Savable {
  save(): void;
}

// Must have BOTH print AND save
type PrintAndSave = Printable & Savable;

class Document implements PrintAndSave {
  print(): void { console.log("Printing"); }
  save(): void { console.log("Saving"); }
}
\`\`\`

Practical use: combining capabilities

\`\`\`typescript
type Admin = { adminLevel: number };
type User = { name: string };

type AdminUser = Admin & User;

const adminUser: AdminUser = {
  adminLevel: 5,
  name: "Alice"
};
\`\`\`
`,
          codeExamples: [
            {
              id: "ch7-intersection-example",
              title: "Combining Capabilities",
              description: "Intersection for feature combinations",
              code: { javascript: `interface Serializable {\n  serialize(): string;\n}\n\ninterface Validatable {\n  validate(): boolean;\n}\n\ntype ProcessedData = Serializable & Validatable;\n\nconst data: ProcessedData = {\n  serialize: () => \"{}\",\n  validate: () => true\n};` },
              explanation: "Intersection types add capabilities together."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch7-ex1",
          title: "Union Practice",
          difficulty: 2,
          description: "Handle different input types.",
          requirements: [
            "Function accepts string | number",
            "Returns string for either"
          ],
          starterCode: { javascript: "// Create process that handles string | number" },
          hints: ["Use typeof to narrow", "Return appropriate string"],
          solution: { javascript: "function format(value: string | number): string {\n  if (typeof value === \"string\") {\n    return value.toUpperCase();\n  }\n  return value.toString();\n}" },
          solutionExplanation: "Narrow the union to use type-specific methods."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch7-q1",
            type: "mcq",
            question: "What does string | number mean?",
            options: [
              "String and number simultaneously",
              "Either string or number",
              "Only string",
              "Neither"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Union means OR - the value can be one type OR the other."
          },
          {
            id: "ch7-q2",
            type: "mcq",
            question: "Why do you need to narrow union types?",
            options: [
              "TypeScript is slow",
              "TypeScript doesn't know which member you have",
              "Unions are not supported",
              "Performance reasons"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "TypeScript can't guess which union member you're using - you must check first."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Union", value: "type T = A | B" },
        { label: "Intersection", value: "type T = A & B" },
        { label: "typeof", value: "typeof x === \"string\"" },
        { label: "in", value: "\"prop\" in obj" }
      ]
    },
    {
      id: "ts-ch-8",
      number: 8,
      partLabel: "PART 1: INTRODUCTION TO TYPESCRIPT",
      title: "Literal Types and Template Literal Types",
      subtitle: "Precise string typing",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 110,
      prerequisites: ["ts-ch-7"],
      learningObjectives: [
        "Use literal types for exact values",
        "Create template literal types",
        "Apply literal types in practice"
      ],
      sections: [
        {
          id: "ch8-literal-types",
          title: "Literal Types",
          whyItMatters: "Literal types restrict values to specific exact strings, numbers, or booleans.",
          content: `Literal types match exact values:

\`\`\`typescript
// String literals
let status: "loading" = "loading";
// status = "pending";  // Error - not "loading"
\`\`\`

Combine into unions for multiple allowed values:
\`\`\`typescript
type Direction = "north" | "south" | "east" | "west";

function move(dir: Direction): void {
  console.log(\`Moving \${dir}\`);
}

move("north");  // OK
// move("up");    // Error
\`\`\`

Number and boolean literals too:
\`\`\`typescript
type Priority = 1 | 2 | 3;
let p: Priority = 1;

type IsActive = true;
let active: IsActive = true;
\`\`\`
`,
          codeExamples: [
            {
              id: "ch8-literals",
              title: "String Literal Types",
              description: "Using exact string values as types",
              code: { javascript: `type HTTPMethod = \"GET\" | \"POST\" | \"PUT\" | \"DELETE\";\n\nfunction request(method: HTTPMethod, url: string): void {\n  console.log(\`\${method} \${url}\`);\n}\n\nrequest(\"GET\", \"/users\");     // OK\nrequest(\"DELETE\", \"/users/1\"); // OK\n// request(\"PATCH\", \"/users\");   // Error` },
              explanation: "Literal types ensure only specific strings are allowed."
            }
          ]
        },
        {
          id: "ch8-template-literals",
          title: "Template Literal Types",
          whyItMatters: "Create types from string patterns - powerful for API responses and IDs.",
          content: `Template literal types build strings from patterns:

\`\`\`typescript
type EventName = \`on\${Capitalize<string>}\`;
type Handler = \`onClick\` | \`onHover\` | \`onFocus\`;
\`\`\`

Build complex patterns:
\`\`\`typescript
type Path = \`/user/\${string}/profile\`;
const userPath: Path = "/user/123/profile";
// const invalid: Path = "/other"; // Error

type PropertyName = \`user\${Capitalize<string>}\`;
type UserName = PropertyName;  // user + any capitalized string
\`\`\`

Real-world use: API response typing
\`\`\`typescript
type JSONValue = string | number | boolean | null | JSONValue[];
type JSONKey = string;
type JSONObject = { [key: JSONKey]: JSONValue };
\`\`\`
`,
          callouts: [
            {
              type: "pro-tip",
              title: "Built-in Template Types",
              content: "TypeScript has Uppercase, Lowercase, Capitalize, Uncapitalize for string manipulation."
            }
          ]
        },
        {
          id: "ch8-practical",
          title: "Practical Applications",
          whyItMatters: "Literal and template types prevent bugs at compile time.",
          content: `Common use cases:

**CSS property values:**
\`\`\`typescript
type CSSDisplay = "block" | "inline" | "flex" | "grid" | "none";
const display: CSSDisplay = "flex";
\`\`\`

**Event handlers:**
\`\`\`typescript
type EventType = "click" | "focus" | "blur" | "submit";
type Handler = \`on\${Capitalize<EventType>}\`;
// Results in: "onClick" | "onFocus" | "onBlur" | "onSubmit"
\`\`\`

**URL patterns:**
\`\`\`typescript
type ApiEndpoint = \`/api/\${string}\`;
const usersEndpoint: ApiEndpoint = "/api/users";
const invalid: ApiEndpoint = "/other";  // Error
\`\`\`
`,
          codeExamples: [
            {
              id: "ch8-practical-example",
              title: "API Endpoints",
              description: "Type-safe API paths",
              code: { javascript: `type Endpoint = \`/users\` | \`/posts\` | \`/comments\`;\n\nfunction fetchFrom(endpoint: Endpoint): void {\n  fetch(\`https://api.example.com\${endpoint}\`);\n}\n\nfetchFrom(\"/users\");   // OK\nfetchFrom(\"/posts\");    // OK\n// fetchFrom(\"/other\"); // Error` },
              explanation: "Template literals create precise string types."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch8-ex1",
          title: "Create Literal Types",
          difficulty: 2,
          description: "Define exact value types.",
          requirements: [
            "Create a type for valid colors",
            "Use it in a function"
          ],
          starterCode: { javascript: "// Create color type and use it" },
          hints: ["Use union of string literals"],
          solution: { javascript: "type Color = \"red\" | \"green\" | \"blue\";\n\nfunction setColor(c: Color): void {\n  document.body.style.color = c;\n}\n\nsetColor(\"red\");\nsetColor(\"green\");" },
          solutionExplanation: "Literal types restrict values to exact matches."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch8-q1",
            type: "mcq",
            question: "What does \"hello\" as a type mean?",
            options: [
              "Any string",
              "Only the exact string \"hello\"",
              "A string variable",
              "A string object"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "As a type, it means only that exact string value is allowed."
          },
          {
            id: "ch8-q2",
            type: "mcq",
            question: "What does `/${string}` match?",
            options: [
              "Any string starting with /",
              "The literal string /${string}",
              "An empty string",
              "Nothing"
            ],
            correctAnswer: 0,
            difficulty: 2,
            explanation: "Template literal types create patterns that match strings fitting that pattern."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Literal", value: "let x: \"hello\"" },
        { label: "Union literals", value: "type T = \"a\" | \"b\"" },
        { label: "Template", value: "type T = `prefix${string}`" },
        { label: "Built-ins", value: "Uppercase, Lowercase, Capitalize" }
      ]
    },
    {
      id: "ts-ch-9",
      number: 9,
      partLabel: "PART 2: FUNCTIONS IN TYPESCRIPT",
      title: "Typing Functions — Parameters and Return Types",
      subtitle: "Function type annotations",
      difficulty: "Beginner",
      estimatedMinutes: 40,
      xpReward: 100,
      prerequisites: ["ts-ch-3"],
      learningObjectives: [
        "Add type annotations to function parameters",
        "Define return types for functions",
        "Understand void vs undefined return types"
      ],
      sections: [
        {
          id: "ch9-parameters",
          title: "Function Parameter Types",
          whyItMatters: "Parameters are the main input to functions - they need types for safety.",
          content: `In strict mode, function parameters MUST have type annotations:

\`\`\`typescript
// All parameters must be typed in strict mode
function greet(name: string, age: number): string {
  return \`Hello, \${name}! You are \${age}.\`;
}

greet("Alice", 25);  // OK
// greet("Bob");      // Error - missing age parameter
// greet(123, 25);    // Error - wrong type for name
\`\`\`

Multiple parameters:
\`\`\`typescript
function add(a: number, b: number): number {
  return a + b;
}

function createUser(name: string, age: number, isAdmin: boolean) {
  return { name, age, isAdmin };
}
\`\`\`
`,
          codeExamples: [
            {
              id: "ch9-param-example",
              title: "Typed Parameters",
              description: "Function parameters with types",
              code: { javascript: `function multiply(a: number, b: number): number {\n  return a * b;\n}\n\nconst result = multiply(5, 3);  // 15\n\n// Error examples:\n// multiply(5);        // Error: missing argument\n// multiply("5", 3);    // Error: wrong type` },
              explanation: "TypeScript ensures correct types at function calls."
            }
          ]
        },
        {
          id: "ch9-return-types",
          title: "Return Type Annotations",
          whyItMatters: "Return types make functions predictable and self-documenting.",
          content: `Return type goes after parameter parentheses:

\`\`\`typescript
// Explicit return type
function add(a: number, b: number): number {
  return a + b;
}

// TypeScript can infer, but explicit is clearer
function greet(name: string): string {  // Explicit
  return \`Hello, \${name}!\`;
}
\`\`\`

When return types are especially important:
- Complex return structures
- API functions
- Functions that might return null
- Documentation purposes

\`\`\`typescript
// Return type clarifies what's returned
function findUser(id: string): User | null {
  // Returns User or null - explicit is helpful
  return users.find(u => u.id === id) ?? null;
}
\`\`\`
`,
          callouts: [
            {
              type: "tip",
              title: "Always Specify Return Type",
              content: "Even though TypeScript can infer return types, explicit annotations catch mistakes and document your code."
            }
          ]
        },
        {
          id: "ch9-void",
          title: "Void vs Other Return Types",
          whyItMatters: "Understanding void helps avoid common mistakes.",
          content: `**void** - Function doesn't return a meaningful value:
\`\`\`typescript
function logMessage(msg: string): void {
  console.log(msg);
  // No return statement or return without value
}

const result = logMessage("hello");  // result is undefined
\`\`\`

**undefined** - Function explicitly returns undefined:
\`\`\`typescript
function maybe(): undefined {
  return undefined;  // Must explicitly return
}
\`\`\`

**never** - Function never returns (throws or loops):
\`\`\`typescript
function error(msg: string): never {
  throw new Error(msg);
}
\`\`\`

Most of the time, use void for functions that don't return values.
`,
          codeExamples: [
            {
              id: "ch9-void-example",
              title: "Void in Practice",
              description: "Using void for side-effect functions",
              code: { javascript: `function processData(data: string[]): void {\n  data.forEach(item => {\n    console.log(\`Processing: \${item}\`);\n  });\n}\n\nconst items = [\"a\", \"b\", \"c\"];\nprocessData(items);\n\n// result is undefined, not useful to capture\nconst result = processData(items);  // undefined` },
              explanation: "void means no meaningful return value."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch9-ex1",
          title: "Type a Function",
          difficulty: 1,
          description: "Add complete type annotations.",
          requirements: [
            "Parameter types",
            "Return type"
          ],
          starterCode: { javascript: "// Add types to this function\nfunction calculate(a, b, operation) {\n  if (operation === 'add') return a + b;\n  if (operation === 'sub') return a - b;\n  return 0;\n}" },
          hints: ["Parameters: a: number, b: number, operation: string", "Return type: number"],
          solution: { javascript: "function calculate(a: number, b: number, operation: string): number {\n  if (operation === 'add') return a + b;\n  if (operation === 'sub') return a - b;\n  return 0;\n}" },
          solutionExplanation: "All parameters and return type are annotated."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch9-q1",
            type: "mcq",
            question: "Where does the return type annotation go?",
            options: [
              "Before the function name",
              "After the parameter list",
              "Inside the function body",
              "Before each parameter"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "The return type goes after the closing parenthesis of parameters: function f(): type"
          },
          {
            id: "ch9-q2",
            type: "mcq",
            question: "What does void mean?",
            options: [
              "The function returns nothing",
              "The function returns null",
              "The function is empty",
              "The function cannot be called"
            ],
            correctAnswer: 0,
            difficulty: 1,
            explanation: "void means the function doesn't return a meaningful value."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Param types", value: "function f(param: type)" },
        { label: "Return type", value: "function f(): type" },
        { label: "Void", value: "function f(): void" },
        { label: "Never", value: "function f(): never" }
      ]
    },
    {
      id: "ts-ch-10",
      number: 10,
      partLabel: "PART 2: FUNCTIONS IN TYPESCRIPT",
      title: "Optional and Default Parameters",
      subtitle: "Making parameters flexible",
      difficulty: "Beginner",
      estimatedMinutes: 35,
      xpReward: 100,
      prerequisites: ["ts-ch-9"],
      learningObjectives: [
        "Create optional parameters with ?",
        "Use default parameter values",
        "Understand optional vs undefined"
      ],
      sections: [
        {
          id: "ch10-optional",
          title: "Optional Parameters",
          whyItMatters: "Not all parameters are always needed - optional parameters add flexibility.",
          content: `Add ? after parameter name to make it optional:

\`\`\`typescript
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return \`\${greeting}, \${name}!\`;
  }
  return \`Hello, \${name}!\`;
}

greet("Alice");              // Hello, Alice!
greet("Alice", "Hi");       // Hi, Alice!
\`\`\`

Optional parameters must come AFTER required parameters:
\`\`\`typescript
// OK - optional after required
function f(required: string, optional?: string) {}

// Error - required after optional
// function f(optional?: string, required: string) {}
\`\`\`
`,
          codeExamples: [
            {
              id: "ch10-optional-example",
              title: "Optional Parameters",
              description: "Using optional parameters",
              code: { javascript: `function createUser(name: string, age?: number): object {\n  return {\n    name,\n    age: age ?? \"Not provided\"\n  };\n}\n\nconsole.log(createUser(\"Alice\"));\nconsole.log(createUser(\"Bob\", 30));` },
              explanation: "Optional parameters can be omitted when calling the function."
            }
          ]
        },
        {
          id: "ch10-default",
          title: "Default Parameters",
          whyItMatters: "Default values provide fallback when arguments aren't provided.",
          content: `Use = to provide default values:

\`\`\`typescript
function greet(name: string, greeting: string = "Hello"): string {
  return \`\${greeting}, \${name}!\`;
}

greet("Alice");        // Hello, Alice!
greet("Alice", "Hi");  // Hi, Alice!
\`\`\`

Default parameters work like optional:
\`\`\`typescript
// No difference in calling - both work
function f(a: string, b: string = "default") {}
f("value");        // OK
f("value", "x");   // OK
\`\`\`

Common use: configuration objects:
\`\`\`typescript
function createButton(text: string, options: { variant?: string, size?: string } = {}): string {
  const variant = options.variant ?? "primary";
  const size = options.size ?? "medium";
  return \`<button class=\"\${variant} \${size}\">\${text}</button>\`;
}
\`\`\`
`,
          callouts: [
            {
              type: "tip",
              title: "Defaults vs Optional",
              content: "Use defaults when you have a sensible fallback value. Use optional when truly optional (no default makes sense)."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch10-ex1",
          title: "Add Defaults",
          difficulty: 1,
          description: "Add default values to parameters.",
          requirements: [
            "Add default for optional parameter"
          ],
          starterCode: { javascript: "// Add default value for greeting\nfunction greet(name, greeting) {\n  return greeting + \", \" + name + \"!\";\n}" },
          hints: ["Use = to add default"],
          solution: { javascript: "function greet(name: string, greeting: string = \"Hello\"): string {\n  return \`\${greeting}, \${name}!\`;\n}" },
          solutionExplanation: "Default value provides fallback when not provided."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch10-q1",
            type: "mcq",
            question: "How do you make a parameter optional?",
            options: [
              "Add default value",
              "Add ? after parameter name",
              "Use optional keyword",
              "Leave the type empty"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Use ? after the parameter name: name?: string"
          },
          {
            id: "ch10-q2",
            type: "mcq",
            question: "What is the difference between optional (?) and default (=)?",
            options: [
              "No difference",
              "Optional - not provided is undefined, Default - not provided uses value",
              "Default is required",
              "Optional cannot have a type"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Optional parameter is undefined if not provided; default uses the specified value."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Optional", value: "param?: type" },
        { label: "Default", value: "param: type = value" },
        { label: "Order", value: "required, optional/default" }
      ]
    },
    {
      id: "ts-ch-11",
      number: 11,
      partLabel: "PART 2: FUNCTIONS IN TYPESCRIPT",
      title: "Rest Parameters and Overloads",
      subtitle: "Flexible function signatures",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 110,
      prerequisites: ["ts-ch-9", "ts-ch-10"],
      learningObjectives: [
        "Use rest parameters for variable arguments",
        "Create function overloads for different call patterns"
      ],
      sections: [
        {
          id: "ch11-rest",
          title: "Rest Parameters",
          whyItMatters: "When you don't know how many arguments will be passed.",
          content: `Use ... to collect remaining arguments into an array:

\`\`\`typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

sum(1, 2, 3);        // 6
sum(1, 2, 3, 4, 5);  // 15
sum();                // 0
\`\`\`

Rest parameters must come last:
\`\`\`typescript
// OK - rest at end
function f(a: string, ...rest: number[]) {}

// Error - rest in middle
// function f(...rest: number[], b: string) {}
\`\`\`

Common use: variadic functions
\`\`\`typescript
function log(level: string, ...messages: string[]): void {
  messages.forEach(msg => console.log(\`[\${level}] \${msg}\`));
}

log(\"INFO\", \"Server started\");
log(\"ERROR\", \"Failed to connect\", \"Retrying...\");
\`\`\`
`,
          codeExamples: [
            {
              id: "ch11-rest-example",
              title: "Rest Parameters",
              description: "Collecting variable arguments",
              code: { javascript: `function average(...scores: number[]): number {\n  if (scores.length === 0) return 0;\n  const total = scores.reduce((a, b) => a + b, 0);\n  return total / scores.length;\n}\n\naverage(90, 85, 95);     // 90\naverage(100, 80, 70, 90); // 85` },
              explanation: "Rest parameters collect all remaining arguments into an array."
            }
          ]
        },
        {
          id: "ch11-overloads",
          title: "Function Overloads",
          whyItMatters: "When a function behaves differently based on argument types/count.",
          content: `Function overloads define multiple call signatures:

\`\`\`typescript
// Overload signatures (no implementation)
function parseDate(date: string): Date;
function parseDate(date: number): Date;
function parseDate(date: string | number): Date {
  // Implementation
  if (typeof date === "string") {
    return new Date(date);
  }
  return new Date(date);
}

parseDate("2024-01-01");  // Uses first overload
parseDate(1704067200000); // Uses second overload
\`\`\`

Important rules:
- Implementation must be compatible with all overloads
- More specific overloads come first
- Can't have overlapping signatures that cause ambiguity

\`\`\`typescript
// Example: different return types based on input
function findUser(id: string): User;
function findUser(email: string): User | null;
function findUser(idOrEmail: string): User | null {
  // Implementation
}
\`\`\`
`,
          callouts: [
            {
              type: "common-mistake",
              title: "Don't Overuse Overloads",
              content: "If you have many overloads, consider using optional parameters or a config object instead."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch11-ex1",
          title: "Rest Parameters Practice",
          difficulty: 2,
          description: "Use rest parameters.",
          requirements: [
            "Create function accepting any number of strings",
            "Join them with separator"
          ],
          starterCode: { javascript: "// Create join function with rest param" },
          hints: ["Use ... to collect args into array"],
          solution: { javascript: "function join(separator: string, ...parts: string[]): string {\n  return parts.join(separator);\n}\n\njoin(\"-\", \"a\", \"b\", \"c\");  // \"a-b-c\"\njoin(\", \", \"x\", \"y\");       // \"x, y\"" },
          solutionExplanation: "Rest parameter collects all trailing arguments."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch11-q1",
            type: "mcq",
            question: "What does ...numbers: number[] mean?",
            options: [
              "An optional array parameter",
              "Collects remaining arguments into an array",
              "A required array parameter",
              "A spread operator"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Rest parameters collect all remaining arguments into an array."
          },
          {
            id: "ch11-q2",
            type: "mcq",
            question: "Why use function overloads?",
            options: [
              "For better performance",
              "When function behaves differently with different arguments",
              "To make code shorter",
              "To avoid type checking"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Overloads allow a function to have multiple call signatures."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Rest param", value: "...args: type[]" },
        { label: "Overload sig", value: "function f(param): return" },
        { label: "Implementation", value: "function f(param): return { }" }
      ]
    },
    {
      id: "ts-ch-12",
      number: 12,
      partLabel: "PART 2: FUNCTIONS IN TYPESCRIPT",
      title: "Function Types and Signatures",
      subtitle: "Functions as types",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 110,
      prerequisites: ["ts-ch-9"],
      learningObjectives: [
        "Define function types",
        "Use function type annotations",
        "Understand this in function types"
      ],
      sections: [
        {
          id: "ch12-function-types",
          title: "Function Type Expressions",
          whyItMatters: "Functions can be passed as values - they need types too.",
          content: `Define a function type with arrow syntax:

\`\`\`typescript
// Type alias for a function
type Handler = (event: MouseEvent) => void;

// Use in interface
interface Button {
  onClick: Handler;
}

// Use as parameter type
function addHandler(handler: Handler) {
  handler({ type: "click" } as MouseEvent);
}
\`\`\`

Inline function type:
\`\`\`typescript
function createLogger(fn: (msg: string) => void) {
  fn("Logged!");
}
\`\`\`

Return type in function types:
\`\`\`typescript
type Transform = (input: string) => number;

const parseInt: Transform = (s) => parseInt(s, 10);
\`\`\`
`,
          codeExamples: [
            {
              id: "ch12-function-type",
              title: "Function Types",
              description: "Using functions as types",
              code: { javascript: `type ClickHandler = (x: number, y: number) => void;\n\nconst handler: ClickHandler = (x, y) => {\n  console.log(\`Clicked at \${x}, \${y}\`);\n};\n\nhandler(100, 200);  // Clicked at 100, 200` },
              explanation: "Function types describe the signature of a function value."
            }
          ]
        },
        {
          id: "ch12-call-signatures",
          title: "Call Signatures",
          whyItMatters: "For objects that can be called like functions.",
          content: `Objects with call signatures can be invoked:

\`\`\`typescript
// Type with call signature
type Callable = {
  (x: number): number;
  callCount: number;  // Also has properties
};

const double: Callable = (x) => {
  double.callCount++;
  return x * 2;
};
double.callCount = 0;

console.log(double(5));  // 10
console.log(double.callCount); // 1
\`\`\`

In interfaces:
\`\`\`typescript
interface Invocable {
  (name: string): string;
  description: string;
}

const fn: Invocable = (n) => \`Hello, \${n}!\`;
fn.description = "A simple greeting function";

console.log(fn("World\"));  // Hello, World!
\`\`\`
`,
          callouts: [
            {
              type: "tip",
              title: "Call vs Construct",
              content: "Use call signatures for callable objects. Use construct signatures for objects that can be called with 'new'."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch12-ex1",
          title: "Function Type",
          difficulty: 2,
          description: "Create and use function types.",
          requirements: [
            "Define function type",
            "Use as parameter type"
          ],
          starterCode: { javascript: "// Define type for a processor\n// Then use it in a function" },
          hints: ["Use arrow function syntax for types"],
          solution: { javascript: "type Processor = (input: string) => string;\n\nfunction process(input: string, fn: Processor): string {\n  return fn(input);\n}\n\nprocess(\"hello\", (s) => s.toUpperCase());  // \"HELLO\"" },
          solutionExplanation: "Function types define what a function should look like."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch12-q1",
            type: "mcq",
            question: "What's the syntax for a function type that takes a string and returns void?",
            options: [
              "type F = (string) => void",
              "type F = (s: string): void",
              "type F = (s: string) => void",
              "type F = function(string): void"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "Function type: (param: type): returnType"
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Function type", value: "type F = (x: type) => return" },
        { label: "Inline", value: "(x: type) => return" },
        { label: "In interface", value: "interface I { (x): return }" }
      ]
    },
    {
      id: "ts-ch-13",
      number: 13,
      partLabel: "PART 2: FUNCTIONS IN TYPESCRIPT",
      title: "this in TypeScript Functions",
      subtitle: "Typing this context",
      difficulty: "Intermediate",
      estimatedMinutes: 35,
      xpReward: 100,
      prerequisites: ["ts-ch-12"],
      learningObjectives: [
        "Type the this parameter",
        "Handle this in callbacks",
        "Avoid common this pitfalls"
      ],
      sections: [
        {
          id: "ch13-this-param",
          title: "Typing this",
          whyItMatters: "Functions often need access to an object context - this must be typed.",
          content: `Add this as the first parameter to type it:

\`\`\`typescript
function greet(this: { name: string }) {
  console.log(\`Hello, \${this.name}!\`);
}

const user = { name: "Alice", greet };
user.greet();  // Hello, Alice!
\`\`\`

Common in class methods and callbacks:
\`\`\`typescript
interface Handler {
  handle(this: Handler, event: Event): void;
}

const handler: Handler = {
  handle(event) {
    console.log(this === handler);  // true
  }
};
\`\`\`

TypeScript won't let you call functions with wrong this:
\`\`\`typescript
// greet.call({ name: "wrong" });  // Error - incompatible this
\`\`\`
`,
          codeExamples: [
            {
              id: "ch13-this-example",
              title: "Typed this",
              description: "Using this parameter",
              code: { javascript: `function updateBadge(this: { count: number }) {\n  console.log(\`Count: \${this.count}\`);\n}\n\nconst tracker = { count: 5, updateBadge };\ntracker.updateBadge();  // Count: 5` },
              explanation: "The this parameter allows typing the function's context."
            }
          ]
        },
        {
          id: "ch13-arrow",
          title: "Arrow Functions and this",
          whyItMatters: "Arrow functions capture this from their enclosing scope.",
          content: `Arrow functions don't need this typing - they capture it:

\`\`\`typescript
class Counter {
  count = 0;

  // Arrow function - this is bound to instance
  increment = () => {
    this.count++;
  };

  // Regular function - this will be wrong when used as callback
  decrement() {
    this.count--;
  }
}

const counter = new Counter();
const inc = counter.increment;
inc();  // Works! this is still counter
\`\`\`

Use arrow functions for:
- Class properties that are callbacks
- Event handlers
- Any function that might lose its this binding
`,
          callouts: [
            {
              type: "common-mistake",
              title: "Don't Use this in Arrow Properties",
              content: "Arrow properties create a new function per instance - use regular methods when shared behavior is fine."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch13-ex1",
          title: "Type this Correctly",
          difficulty: 2,
          description: "Add this parameter to a function.",
          requirements: [
            "Add this type to method"
          ],
          starterCode: { javascript: "// Add proper this type\nfunction getName() {\n  return this.name;\n}" },
          hints: ["Add this as first parameter"],
          solution: { javascript: "function getName(this: { name: string }) {\n  return this.name;\n}\n\nconst obj = { name: \"Alice\", getName };\nconsole.log(obj.getName());  // Alice" },
          solutionExplanation: "this parameter types the context the function runs in."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch13-q1",
            type: "mcq",
            question: "Where does the this parameter go in a function definition?",
            options: [
              "At the end of parameters",
              "As the first parameter",
              "After the return type",
              "It doesn't exist"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "this goes as the first parameter: function f(this: Type, otherParams)"
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "this param", value: "function f(this: Type)" },
        { label: "Arrow captures", value: "arrow fn captures enclosing this" }
      ]
    },
    {
      id: "ts-ch-14",
      number: 14,
      partLabel: "PART 2: FUNCTIONS IN TYPESCRIPT",
      title: "Generics — Part 1",
      subtitle: "Generic functions",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 120,
      prerequisites: ["ts-ch-7", "ts-ch-9"],
      learningObjectives: [
        "Understand generic functions",
        "Create type parameters",
        "Use inferred vs explicit type arguments"
      ],
      sections: [
        {
          id: "ch14-intro",
          title: "Why Generics?",
          whyItMatters: "Write once, work with any type - without sacrificing type safety.",
          content: `Generics allow you to write flexible, reusable functions and types:

\`\`\`typescript
// Without generics - must use any or overloads
function identity(arg: any): any {
  return arg;
}

// With generics - type-safe and reusable
function identity<T>(arg: T): T {
  return arg;
}

identity<string>("hello");  // returns string
identity(42);               // returns number
\`\`\`

The T is a type parameter - a placeholder that gets filled in when called.

\`\`\`typescript
// Type is inferred from argument
const result = identity("test");  // T = string

// Can also be explicit
const result2 = identity<number>(42);  // T = number
\`\`\`
`,
          codeExamples: [
            {
              id: "ch14-generic-identity",
              title: "Generic Identity",
              description: "First generic function",
              code: { javascript: `function firstElement<T>(arr: T[]): T | undefined {\n  return arr[0];\n}\n\nconst nums = [1, 2, 3];\nconst strs = [\"a\", \"b\", \"c\"];\n\nfirstElement(nums);  // number | undefined\nfirstElement(strs);  // string | undefined` },
              explanation: "Generic functions work with any type while maintaining type safety."
            }
          ]
        },
        {
          id: "ch14-multiple",
          title: "Multiple Type Parameters",
          whyItMatters: "Functions can have multiple type parameters for complex operations.",
          content: `Use multiple type parameters for more complex functions:

\`\`\`typescript
function pair<K, V>(key: K, value: V): { key: K; value: V } {
  return { key, value };
}

pair<string, number>("age", 25);  // { key: string, value: number }
pair("name", "Alice");             // { key: string, value: string }
\`\`\`

Common pattern: map from one type to another
\`\`\`typescript
function mapArray<T, U>(arr: T[], fn: (item: T) => U): U[] {
  return arr.map(fn);
}

const numbers = [1, 2, 3];
const strings = mapArray(numbers, n => n.toString());
// strings is string[]
\`\`\`
`,
          callouts: [
            {
              type: "tip",
              title: "Naming Conventions",
              content: "Use T, U, V for single letter. Use descriptive names like TKey, TValue for complex generics."
            }
          ]
        },
        {
          id: "ch14-constraints",
          title: "Generic Constraints",
          whyItMatters: "Sometimes you need to limit what types can be used.",
          content: `Use extends to constrain type parameters:

\`\`\`typescript
// Only accept types with length property
function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}

logLength("hello");     // OK - string has length
logLength([1, 2, 3]);  // OK - array has length
// logLength(42);       // Error - number doesn't have length
\`\`\`

Constraint with specific structure:
\`\`\`typescript
interface HasId {
  id: string;
}

function findById<T extends HasId>(items: T[], id: string): T | undefined {
  return items.find(item => item.id === id);
}
\`\`\`
`
        }
      ],
      exercises: [
        {
          id: "ch14-ex1",
          title: "Create Generic Function",
          difficulty: 2,
          description: "Write a generic function.",
          requirements: [
            "Function with type parameter",
            "Works with any array type"
          ],
          starterCode: { javascript: "// Create last function that returns last element" },
          hints: ["Use T[] for array", "Return T"],
          solution: { javascript: "function last<T>(arr: T[]): T | undefined {\n  return arr[arr.length - 1];\n}\n\nlast([1, 2, 3]);        // 3\nlast([\"a\", \"b\"]);     // \"b\"" },
          solutionExplanation: "Generic functions work with any array type."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch14-q1",
            type: "mcq",
            question: "What does <T> mean in a function definition?",
            options: [
              "T is a parameter",
              "T is a type parameter (generic)",
              "T is any type",
              "T is a class"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "<T> declares a generic type parameter."
          },
          {
            id: "ch14-q2",
            type: "mcq",
            question: "What does extends do in generics?",
            options: [
              "Inherits from a class",
              "Constrains the type parameter",
              "Creates a new type",
              "Makes the type optional"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "extends constrains what types can be used."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Generic param", value: "function f<T>(arg: T)" },
        { label: "Multiple params", value: "function f<T, U>(a: T, b: U)" },
        { label: "Constraint", value: "T extends Constraint" }
      ]
    },
    {
      id: "ts-ch-15",
      number: 15,
      partLabel: "PART 2: FUNCTIONS IN TYPESCRIPT",
      title: "Generics — Part 2",
      subtitle: "Generic constraints deep dive",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 110,
      prerequisites: ["ts-ch-14"],
      learningObjectives: [
        "Create proper generic constraints",
        "Use keyof and indexed access",
        "Build more complex generic types"
      ],
      sections: [
        {
          id: "ch15-keyof",
          title: "keyof and Index Access",
          whyItMatters: "Type-safe property access with generics.",
          content: `keyof creates a union of all property names:

\`\`\`typescript
interface User {
  name: string;
  age: number;
}

type UserKeys = keyof User;  // "name" | "age"
\`\`\`

Use with generics for dynamic property access:
\`\`\`typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Alice", age: 25 };
getProperty(user, "name");  // string
getProperty(user, "age");   // number
// getProperty(user, "email"); // Error - not a key
\`\`\`

This ensures you only access valid properties!
`,
          codeExamples: [
            {
              id: "ch15-keyof-example",
              title: "Keyof with Generics",
              description: "Type-safe property access",
              code: { javascript: `function get<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\n\nconst data = { x: 1, y: 2, z: 3 };\nget(data, \"x\");  // 1\nget(data, \"y\");  // 2\n// get(data, \"a\"); // Error!` },
              explanation: "keyof ensures only valid properties can be accessed."
            }
          ]
        },
        {
          id: "ch15-where",
          title: "Where Clauses",
          whyItMatters: "More complex constraints than extends allows.",
          content: `Use extends with conditions for complex constraints:

\`\`\`typescript
// Ensure T has a property that can be assigned to U
function assign<T extends { prop: unknown }, U extends T[keyof T]>(
  target: T, source: U
): void {
  // Complex logic
}
\`\`\`

The key difference: where is for interfaces/classes, extends works for all types.

\`\`\`typescript
interface Repository<T> {
  find(id: string): Promise<T | null>;
  save(item: T): Promise<void>;
  delete(id: string): Promise<boolean>;
}

// Generic constraint for repositories
function createRepository<T extends { id: string }>(): Repository<T> {
  // Implementation
}
\`\`\`
`,
          callouts: [
            {
              type: "pro-tip",
              title: "Start Simple",
              content: "Use basic extends constraints first. Only add complex where clauses when needed."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch15-ex1",
          title: "Use keyof",
          difficulty: 2,
          description: "Create type-safe property getter.",
          requirements: [
            "Use keyof constraint",
            "Return proper type"
          ],
          starterCode: { javascript: "// Create get function" },
          hints: ["Use keyof to get valid keys", "K extends keyof T"],
          solution: { javascript: "function get<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\n\nconst obj = { a: 1, b: \"hello\" };\nconsole.log(get(obj, \"a\")); // 1\nconsole.log(get(obj, \"b\")); // hello" },
          solutionExplanation: "keyof constraint ensures type-safe property access."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch15-q1",
            type: "mcq",
            question: "What does keyof User return?",
            options: [
              "All values of User",
              "All keys of User as a union",
              "The type of User",
              "An array of keys"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "keyof returns a union of all property names."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "keyof", value: "keyof T = \"prop1\" | \"prop2\"" },
        { label: "Indexed access", value: "T[K]" },
        { label: "Constraint", value: "K extends keyof T" }
      ]
    },
    {
      id: "ts-ch-16",
      number: 16,
      partLabel: "PART 3: CLASSES AND OOP",
      title: "Classes in TypeScript",
      subtitle: "Typed properties and constructors",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 100,
      prerequisites: ["ts-ch-3", "ts-ch-9"],
      learningObjectives: [
        "Create classes with typed properties",
        "Define constructor parameters",
        "Understand class inference"
      ],
      sections: [
        {
          id: "ch16-class-basics",
          title: "Class Properties with Types",
          whyItMatters: "Classes are fundamental OOP - TypeScript adds type safety to them.",
          content: `TypeScript classes work like JavaScript classes but with type annotations:

\`\`\`typescript
class User {
  name: string;
  age: number;
  email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  greet(): string {
    return \`Hello, \${this.name}!\`;
  }
}

const user = new User("Alice", 25, "alice@example.com");
\`\`\`

Properties can be initialized in constructor or declaration:

\`\`\`typescript
class Point {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }
}
\`\`\`
`,
          codeExamples: [
            {
              id: "ch16-basic-class",
              title: "Basic Typed Class",
              description: "Class with typed properties",
              code: { javascript: `class User {\n  name: string;\n  age: number;\n  \n  constructor(name: string, age: number) {\n    this.name = name;\n    this.age = age;\n  }\n  \n  isAdult(): boolean {\n    return this.age >= 18;\n  }\n}\n\nconst user = new User(\"Alice\", 25);\nconsole.log(user.isAdult()); // true` },
              explanation: "Class properties and methods can all have type annotations."
            }
          ]
        },
        {
          id: "ch16-shorthand",
          title: "Shorthand Constructor Initialization",
          whyItMatters: "TypeScript provides shortcuts to reduce boilerplate.",
          content: `Use parameter properties to declare and initialize in one line:

\`\`\`typescript
class User {
  constructor(
    public name: string,
    public age: number,
    private email: string
  ) {}
}

// Same as:
class UserOld {
  public name: string;
  public age: number;
  private email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}
\`\`\`

Keywords (public, private, protected, readonly) work with parameter properties.
`
        }
      ],
      exercises: [
        {
          id: "ch16-ex1",
          title: "Create a Class",
          difficulty: 1,
          description: "Create a class with typed properties.",
          requirements: [
            "Class with properties",
            "Constructor with parameters"
          ],
          starterCode: { javascript: "// Create Product class" },
          hints: ["Define properties", "Add constructor"],
          solution: { javascript: "class Product {\n  name: string;\n  price: number;\n  \n  constructor(name: string, price: number) {\n    this.name = name;\n    this.price = price;\n  }\n}\n\nconst p = new Product(\"Laptop\", 999);\nconsole.log(p.name, p.price);" },
          solutionExplanation: "Classes in TypeScript work like regular classes with type annotations."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch16-q1",
            type: "mcq",
            question: "What does 'public name: string' in constructor do?",
            options: [
              "Declares and initializes a public property",
              "Only declares a property",
              "Makes the parameter private",
              "Creates a getter"
            ],
            correctAnswer: 0,
            difficulty: 1,
            explanation: "Parameter properties declare and initialize the property in one step."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Class", value: "class Name { }" },
        { label: "Property", value: "prop: type" },
        { label: "Param property", value: "constructor(public p: type)" }
      ]
    },
    {
      id: "ts-ch-17",
      number: 17,
      partLabel: "PART 3: CLASSES AND OOP",
      title: "Access Modifiers",
      subtitle: "public, private, protected, readonly",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 110,
      prerequisites: ["ts-ch-16"],
      learningObjectives: [
        "Use public, private, protected",
        "Apply readonly to properties",
        "Understand encapsulation in TypeScript"
      ],
      sections: [
        {
          id: "ch17-modifiers",
          title: "Understanding Access Modifiers",
          whyItMatters: "Control visibility of class members for encapsulation.",
          content: `**public** - Accessible everywhere (default):
\`\`\`typescript
class User {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}
\`\`\`

**private** - Only accessible within the class:
\`\`\`typescript
class BankAccount {
  private balance: number = 1000;

  getBalance(): number {
    return this.balance;  // OK - inside class
  }
}

const account = new BankAccount();
// account.balance; // Error - private!
\`\`\`

**protected** - Accessible within class and subclasses:
\`\`\`typescript
class Animal {
  protected name: string;
}

class Dog extends Animal {
  bark(): string {
    return \`\${this.name} says woof!\`;  // OK - subclass
  }
}
\`\`\`

**readonly** - Cannot be modified after initialization:
\`\`\`typescript
class User {
  readonly id: string;
  constructor(id: string) {
    this.id = id;
  }
}
// user.id = "new"; // Error! readonly
\`\`\`
`,
          codeExamples: [
            {
              id: "ch17-modifiers-example",
              title: "Access Modifiers Demo",
              description: "Using different modifiers",
              code: { javascript: `class Counter {\n  public count = 0;\n  private _increment = 0;\n  \n  public increment() {\n    this.count++;\n    this._increment++;\n  }\n}\n\nconst c = new Counter();\nc.count;    // OK - public\n// c._increment; // Error - private` },
              explanation: "Access modifiers control where properties and methods can be accessed."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch17-ex1",
          title: "Apply Access Modifiers",
          difficulty: 2,
          description: "Use private and readonly appropriately.",
          requirements: [
            "Make id readonly",
            "Make internal state private"
          ],
          starterCode: { javascript: "// Add access modifiers" },
          hints: ["Use private for state", "Use readonly for id"],
          solution: { javascript: "class Counter {\n  readonly id: string;\n  private _count = 0;\n  \n  constructor(id: string) {\n    this.id = id;\n  }\n  \n  increment() {\n    this._count++;\n  }\n}" },
          solutionExplanation: "Access modifiers control visibility and mutability."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch17-q1",
            type: "mcq",
            question: "Where can private members be accessed?",
            options: [
              "Anywhere",
              "Only within the class they are declared",
              "Within the class and subclasses",
              "Only with getters"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Private members are only accessible within the class they are declared in."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Public", value: "public - everywhere" },
        { label: "Private", value: "private - class only" },
        { label: "Protected", value: "protected - class + subclasses" },
        { label: "Readonly", value: "readonly - cannot change" }
      ]
    },
    {
      id: "ts-ch-18",
      number: 18,
      partLabel: "PART 3: CLASSES AND OOP",
      title: "Abstract Classes",
      subtitle: "Creating base class blueprints",
      difficulty: "Intermediate",
      estimatedMinutes: 35,
      xpReward: 100,
      prerequisites: ["ts-ch-16", "ts-ch-17"],
      learningObjectives: [
        "Create abstract classes",
        "Define abstract methods",
        "Implement concrete subclasses"
      ],
      sections: [
        {
          id: "ch18-abstract",
          title: "Abstract Classes",
          whyItMatters: "Abstract classes provide blueprints for other classes.",
          content: `Abstract classes cannot be instantiated - they exist to be extended:

\`\`\`typescript
abstract class Animal {
  abstract name: string;  // Must be implemented by subclasses
  abstract makeSound(): void;  // Must be implemented

  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  name = "Dog";

  makeSound(): void {
    console.log("Woof!");
  }
}

const dog = new Dog();  // OK
// const animal = new Animal(); // Error - can't instantiate
\`\`\`

Use abstract classes when:
- You want to share common behavior
- You want to enforce subclasses implement certain members
- You don't want the class to be instantiated directly
`,
          codeExamples: [
            {
              id: "ch18-abstract-example",
              title: "Abstract Class",
              description: "Using abstract classes",
              code: { javascript: `abstract class Shape {\n  abstract area(): number;\n  \n  describe(): string {\n    return \`Area: \${this.area()}\`;\n  }\n}\n\nclass Circle extends Shape {\n  constructor(public radius: number) {\n    super();\n  }\n  \n  area(): number {\n    return Math.PI * this.radius ** 2;\n  }\n}\n\nconst c = new Circle(5);\nconsole.log(c.area());      // 78.54\nconsole.log(c.describe()); // Area: 78.54` },
              explanation: "Abstract classes define what subclasses must implement."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch18-ex1",
          title: "Create Abstract Class",
          difficulty: 2,
          description: "Build an abstract class hierarchy.",
          requirements: [
            "Abstract class with abstract method",
            "Concrete subclass"
          ],
          starterCode: { javascript: "// Create abstract Vehicle and Car" },
          hints: ["Use abstract keyword", "Implement in subclass"],
          solution: { javascript: "abstract class Vehicle {\n  abstract drive(): void;\n}\n\nclass Car extends Vehicle {\n  drive(): void {\n    console.log(\"Driving...\");\n  }\n}\n\nconst car = new Car();\ncar.drive();" },
          solutionExplanation: "Abstract classes define the contract for subclasses."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch18-q1",
            type: "mcq",
            question: "Can you create an instance of an abstract class?",
            options: [
              "Yes, with new",
              "No, it can only be extended",
              "Yes, if it has no abstract methods",
              "Only in TypeScript"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Abstract classes cannot be instantiated - they must be extended."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Abstract", value: "abstract class C { }" },
        { label: "Abstract method", value: "abstract m(): void" }
      ]
    },
    {
      id: "ts-ch-19",
      number: 19,
      partLabel: "PART 3: CLASSES AND OOP",
      title: "Interfaces with Classes",
      subtitle: "implements keyword",
      difficulty: "Intermediate",
      estimatedMinutes: 35,
      xpReward: 100,
      prerequisites: ["ts-ch-16", "ts-ch-4"],
      learningObjectives: [
        "Implement interfaces with classes",
        "Use multiple interfaces",
        "Understand interface vs abstract class"
      ],
      sections: [
        {
          id: "ch19-implements",
          title: "The implements Keyword",
          whyItMatters: "Interfaces define contracts that classes must fulfill.",
          content: `Use implements to require a class to follow an interface:

\`\`\`typescript
interface Printable {
  print(): void;
}

interface Serializable {
  serialize(): string;
}

class Document implements Printable, Serializable {
  print(): void {
    console.log("Printing document");
  }

  serialize(): string {
    return JSON.stringify({ type: "doc" });
  }
}
\`\`\`

Class can implement multiple interfaces:
\`\`\`typescript
interface Loggable {
  log(): void;
}

interface Validatable {
  isValid(): boolean;
}

class User implements Loggable, Validatable {
  log(): void { console.log("User action"); }
  isValid(): boolean { return true; }
}
\`\`\`
`,
          codeExamples: [
            {
              id: "ch19-implements-example",
              title: "Class Implements Interface",
              description: "Multiple interface implementation",
              code: { javascript: `interface Painter {\n  paint(color: string): void;\n}\n\ninterface Designer {\n  design(layout: string): void;\n}\n\nclass Creative implements Painter, Designer {\n  paint(color: string): void {\n    console.log(\`Painting in \${color}\`);\n  }\n  \n  design(layout: string): void {\n    console.log(\`Designing \${layout}\`);\n  }\n}` },
              explanation: "Classes can implement multiple interfaces."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch19-ex1",
          title: "Implement Interfaces",
          difficulty: 2,
          description: "Create class that implements interfaces.",
          requirements: [
            "Implement multiple interfaces"
          ],
          starterCode: { javascript: "// Create class implementing Serializable, Loggable" },
          hints: ["Use implements with multiple interfaces"],
          solution: { javascript: "interface Serializable {\n  serialize(): string;\n}\n\ninterface Loggable {\n  log(): void;\n}\n\nclass Data implements Serializable, Loggable {\n  serialize(): string { return \"{}; }\n  log(): void { console.log(\"Data logged\"); }\n}" },
          solutionExplanation: "Classes can implement any number of interfaces."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch19-q1",
            type: "mcq",
            question: "What keyword makes a class implement an interface?",
            options: [
              "extends",
              "implements",
              "interface",
              "abstract"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Use 'implements' to require a class to follow an interface."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Implement", value: "class C implements I { }" },
        { label: "Multiple", value: "class C implements I1, I2 { }" }
      ]
    },
    {
      id: "ts-ch-20",
      number: 20,
      partLabel: "PART 3: CLASSES AND OOP",
      title: "Generics with Classes",
      subtitle: "Generic classes",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 110,
      prerequisites: ["ts-ch-14", "ts-ch-16"],
      learningObjectives: [
        "Create generic classes",
        "Apply type parameters to classes",
        "Use constraints with generic classes"
      ],
      sections: [
        {
          id: "ch20-generic-class",
          title: "Generic Classes",
          whyItMatters: "Classes can be generic just like functions.",
          content: `Classes can have type parameters:

\`\`\`typescript
class Box<T> {
  content: T;

  constructor(content: T) {
    this.content = content;
  }

  getContent(): T {
    return this.content;
  }
}

const stringBox = new Box<string>("hello");
const numberBox = new Box<number>(42);
\`\`\`

Constraints with classes:
\`\`\`typescript
interface HasId {
  id: string;
}

class Repository<T extends HasId> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  find(id: string): T | undefined {
    return this.items.find(item => item.id === id);
  }
}
\`\`\`
`,
          codeExamples: [
            {
              id: "ch20-generic-class-example",
              title: "Generic Box Class",
              description: "Class with type parameter",
              code: { javascript: `class Container<T> {\n  private _value: T;\n  \n  constructor(value: T) {\n    this._value = value;\n  }\n  \n  get value(): T {\n    return this._value;\n  }\n}\n\nconst num = new Container(100);\nconst str = new Container(\"hello\");\nconsole.log(num.value); // 100\nconsole.log(str.value); // hello` },
              explanation: "Generic classes work like generic functions but maintain state."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch20-ex1",
          title: "Create Generic Class",
          difficulty: 2,
          description: "Build a generic class.",
          requirements: [
            "Class with type parameter",
            "Store and retrieve value"
          ],
          starterCode: { javascript: "// Create Stack<T>" },
          hints: ["Use T for the type"],
          solution: { javascript: "class Stack<T> {\n  private items: T[] = [];\n  \n  push(item: T): void {\n    this.items.push(item);\n  }\n  \n  pop(): T | undefined {\n    return this.items.pop();\n  }\n}\n\nconst stack = new Stack<number>();\nstack.push(1);\nstack.push(2);\nconsole.log(stack.pop()); // 2" },
          solutionExplanation: "Generic classes work with any type while maintaining type safety."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch20-q1",
            type: "mcq",
            question: "How do you declare a generic class?",
            options: [
              "class<T> C { }",
              "class C<T> { }",
              "class C <T> { }",
              "generic class C { }"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Type parameter goes after class name: class Box<T>"
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Generic class", value: "class Box<T> { }" },
        { label: "With constraint", value: "class C<T extends HasId>" }
      ]
    },
    // Chapters 21-24 (OOP and Design Patterns) - condensed
    {
      id: "ts-ch-21",
      number: 21,
      partLabel: "PART 3: CLASSES AND OOP",
      title: "Decorators",
      subtitle: "Experimental decorator syntax",
      difficulty: "Advanced",
      estimatedMinutes: 45,
      xpReward: 120,
      prerequisites: ["ts-ch-16"],
      learningObjectives: [
        "Understand decorator syntax",
        "Create class decorators",
        "Use parameter decorators"
      ],
      sections: [
        {
          id: "ch21-intro",
          title: "Decorator Basics",
          whyItMatters: "Decorators are experimental but powerful for meta-programming.",
          content: `Enable in tsconfig: "experimentalDecorators": true

\`\`\`typescript
function logged(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function(...args: any[]) {
    console.log(\`Calling \${propertyKey}\`, args);
    return original.apply(this, args);
  };
}

class Calculator {
  @logged
  add(a: number, b: number): number {
    return a + b;
  }
}
\`\`\`

Types of decorators:
- Class decorators
- Method decorators
- Property decorators
- Parameter decorators
`,
          callouts: [
            {
              type: "warning",
              title: "Experimental Feature",
              content: "Decorators are Stage 3 in TC39 but still experimental in TypeScript. API may change."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch21-q1",
            type: "mcq",
            question: "What do you need to enable to use decorators?",
            options: [
              "strictMode",
              "experimentalDecorators",
              "esDecorators",
              "enableDecorators"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "experimentalDecorators must be enabled in tsconfig.json."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Class decorator", value: "@decorator" },
        { label: "Enable", value: "\"experimentalDecorators\": true" }
      ]
    },
    {
      id: "ts-ch-22",
      number: 22,
      partLabel: "PART 3: CLASSES AND OOP",
      title: "Declaration Merging",
      subtitle: "Interfaces can merge",
      difficulty: "Intermediate",
      estimatedMinutes: 30,
      xpReward: 100,
      prerequisites: ["ts-ch-4", "ts-ch-6"],
      learningObjectives: [
        "Understand interface merging",
        "Use declaration merging in practice"
      ],
      sections: [
        {
          id: "ch22-merging",
          title: "Interface Declaration Merging",
          whyItMatters: "Multiple declarations of the same name merge together.",
          content: `Interfaces can be declared multiple times and they'll merge:

\`\`\`typescript
interface User {
  name: string;
}

interface User {
  age: number;
}

// Merged interface:
interface User {
  name: string;
  age: number;
}
\`\`\`

This is useful for:
- Augmenting existing types
- Adding to third-party types
- Organizing large interfaces

\`\`\`typescript
// Extend a library type
interface Window {
  myCustomProperty: string;
}
\`\`\`

Warning: Classes and namespaces also support merging, but it can be confusing!
`,
          quiz: {
            questions: [
              {
                id: "ch22-q1",
                type: "mcq",
                question: "What happens when you declare the same interface twice?",
                options: [
                  "Error - duplicate",
                  "They merge into one",
                  "Second one overrides",
                  "One is ignored"
                ],
                correctAnswer: 1,
                difficulty: 1,
                explanation: "Interface declarations merge together into a single interface."
              }
            ],
            passingScore: 1
          },
          cheatSheet: [
            { label: "Merge", value: "interface A { } interface A { }" },
            { label: "Result", value: "Combined into one interface" }
          ]
        }
      ]
    },
    {
      id: "ts-ch-23",
      number: 23,
      partLabel: "PART 3: CLASSES AND OOP",
      title: "Mixins in TypeScript",
      subtitle: "Combining behaviors",
      difficulty: "Intermediate",
      estimatedMinutes: 35,
      xpReward: 100,
      prerequisites: ["ts-ch-16"],
      learningObjectives: [
        "Create mixins",
        "Apply multiple mixins to a class"
      ],
      sections: [
        {
          id: "ch23-mixins",
          title: "Creating Mixins",
          whyItMatters: "Mixins allow combining behaviors without inheritance chains.",
          content: `Mixins are functions that add properties/methods to a class:

\`\`\`typescript
function Timestamped<T extends new (...args: any[]) => {}>(Constructor: T) {
  return class extends Constructor {
    timestamp = new Date();
  };
}

function Serializable<T extends new (...args: any[]) => {}>(Constructor: T) {
  return class extends Constructor {
    serialize() {
      return JSON.stringify(this);
    }
  };
}

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const EnhancedUser = Timestamped(Serializable(User));
\`\`\`
`,
          quiz: {
            questions: [
              {
                id: "ch23-q1",
                type: "mcq",
                question: "What is a mixin?",
                options: [
                  "A type of class",
                  "A function that adds behavior to a class",
                  "A design pattern",
                  "A form of inheritance"
                ],
                correctAnswer: 1,
                difficulty: 1,
                explanation: "Mixins are functions that add properties/methods to a class."
              }
            ],
            passingScore: 1
          },
          cheatSheet: [
            { label: "Mixin", value: "function Mixin<T>(Class)" },
            { label: "Use", value: "const Enhanced = Mixin(BaseClass)" }
          ]
        }
      ]
    },
    {
      id: "ts-ch-24",
      number: 24,
      partLabel: "PART 3: CLASSES AND OOP",
      title: "Design Patterns with TypeScript",
      subtitle: "Common patterns in TypeScript",
      difficulty: "Advanced",
      estimatedMinutes: 50,
      xpReward: 130,
      prerequisites: ["ts-ch-16", "ts-ch-17"],
      learningObjectives: [
        "Implement Singleton pattern",
        "Use Factory pattern with types",
        "Apply Observer pattern"
      ],
      sections: [
        {
          id: "ch24-singleton",
          title: "Singleton Pattern",
          whyItMatters: "Ensure only one instance of a class exists.",
          content: `Singleton - only one instance:

\`\`\`typescript
class Database {
  private static instance: Database;
  private constructor() {}

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2); // true
\`\`\`
`,
          codeExamples: [
            {
              id: "ch24-patterns",
              title: "Common Patterns",
              description: "Singleton implementation",
              code: { javascript: `class Config {\n  private static _instance: Config;\n  public readonly data: Record<string, string> = {};\n  \n  private constructor() {}\n  \n  static get instance(): Config {\n    if (!Config._instance) {\n      Config._instance = new Config();\n    }\n    return Config._instance;\n  }\n}\n\nconst config = Config.instance;\nconfig.data.env = \"production\";` },
              explanation: "Singleton ensures a class has exactly one instance."
            }
          ]
        },
        {
          id: "ch24-factory",
          title: "Factory Pattern",
          whyItMatters: "Create objects without specifying exact classes.",
          content: `Factory - create objects through a function:

\`\`\`typescript
interface Button {
  render(): void;
}

class WindowsButton implements Button {
  render(): void { console.log("Windows button"); }
}

class MacButton implements Button {
  render(): void { console.log("Mac button"); }
}

function createButton(os: string): Button {
  if (os === "windows") return new WindowsButton();
  return new MacButton();
}
\`\`\`
`
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch24-q1",
            type: "mcq",
            question: "What's the key characteristic of Singleton?",
            options: [
              "Has many instances",
              "Only one instance exists",
              "Cannot be extended",
              "Is always static"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Singleton ensures exactly one instance exists."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Singleton", value: "private constructor + static instance" },
        { label: "Factory", value: "function returning specific type" }
      ]
    },
    {
      id: "ts-ch-25",
      number: 25,
      partLabel: "PART 4: ADVANCED TYPE SYSTEM",
      title: "Union Types: When a Value Can Be Multiple Types",
      subtitle: "One variable, many possible types",
      difficulty: "Intermediate",
      estimatedMinutes: 35,
      xpReward: 110,
      prerequisites: ["ts-ch-8"],
      learningObjectives: ["Create union types", "Understand type narrowing", "Use union in function parameters"],
      sections: [
        {
          id: "ch25-intro",
          title: "What Are Union Types?",
          whyItMatters: "Real-world data often comes in multiple forms. A user ID might be a string or number. An API response might be data or an error.",
          content: `A union type allows a value to be one of several types:

\`\`\`typescript
let userId: string | number;
userId = "abc123"; // OK
userId = 456; // OK
// userId = true; // Error!
\`\`\`

The pipe (|) means \"OR\". string | number means \"either string OR number\".`,
          codeExamples: [
            {
              id: "ch25-unions",
              title: "Basic Union Types",
              description: "Multiple types in one variable",
              code: { javascript: `let id: string | number;\nid = "user-001";\nid = 42;\n// id = true; // Error: not in union` },
              explanation: "Union types let variables hold multiple possible types."
            }
          ]
        },
        {
          id: "ch25-narrowing",
          title: "Type Narrowing",
          whyItMatters: "Once you have a union type, you need to figure out which type you're working with at runtime.",
          content: `Type narrowing is checking which type you have:

\`\`\`typescript
function processValue(value: string | number) {
  if (typeof value === "string") {
    // TypeScript knows value is string here
    return value.toUpperCase();
  } else {
    // TypeScript knows value is number here
    return value * 2;
  }
}
\`\`\`

TypeScript narrows the type inside each branch.`,
          callouts: [
            {
              type: "tip",
              title: "typeof is Your Friend",
              content: "Use typeof to narrow primitive types: string, number, boolean, object"
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch25-q1",
            type: "mcq",
            question: "What does string | number mean?",
            options: ["A string and a number", "Either string OR number", "A string that contains a number", "A number that must be string"],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "The pipe creates a union - the value can be either type."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Union syntax", value: "type1 | type2 | type3" },
        { label: "Narrowing", value: "typeof check in if/else" }
      ]
    },
    {
      id: "ts-ch-26",
      number: 26,
      partLabel: "PART 4: ADVANCED TYPE SYSTEM",
      title: "Type Aliases: Giving Types Names",
      subtitle: "Create your own type names",
      difficulty: "Intermediate",
      estimatedMinutes: 30,
      xpReward: 100,
      prerequisites: ["ts-ch-25"],
      learningObjectives: ["Create type aliases", "Use aliases with unions", "Simplify complex types"],
      sections: [
        {
          id: "ch26-aliases",
          title: "Creating Type Aliases",
          whyItMatters: "Type aliases let you name complex types once and reuse them.",
          content: `The type keyword creates an alias:

\`\`\`typescript
type UserId = string | number;
type Status = "pending" | "active" | "completed";

let userId: UserId;
let status: Status;
\`\`\`

Now UserId and Status are reusable type names.`,
          codeExamples: [
            {
              id: "ch26-alias",
              title: "Type Alias Example",
              description: "Named types for clarity",
              code: { javascript: `type ID = string | number;\ntype Role = "admin" | "user" | "guest";\n\nfunction getUser(id: ID): Role {\n  return "user";\n}` },
              explanation: "Type aliases make code more readable and maintainable."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch26-q1",
            type: "mcq",
            question: "Which keyword creates a type alias?",
            options: ["interface", "type", "class", "define"],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "The 'type' keyword creates type aliases."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Syntax", value: "type AliasName = actualType;" }
      ]
    },
    {
      id: "ts-ch-27",
      number: 27,
      partLabel: "PART 4: ADVANCED TYPE SYSTEM",
      title: "Literal Types: Specific String, Number, or Boolean Values",
      subtitle: "Exact values as types",
      difficulty: "Intermediate",
      estimatedMinutes: 30,
      xpReward: 100,
      prerequisites: ["ts-ch-26"],
      learningObjectives: ["Create literal types", "Use literal with unions", "Understand inference vs annotation"],
      sections: [
        {
          id: "ch27-literals",
          title: "Literal Types in Depth",
          whyItMatters: "A literal type means exactly one specific value. Combined with unions, you get precise type checking.",
          content: `A literal type is a specific value:

\`\`\`typescript
let direction: "north" | "south" | "east" | "west";
direction = "north"; // OK
// direction = "up"; // Error!
\`\`\`

Commonly used for configuration and status values.`,
          codeExamples: [
            {
              id: "ch27-literal",
              title: "Literal Types",
              description: "Exact value types",
              code: { javascript: `type Method = "GET" | "POST" | "PUT" | "DELETE";\ntype Color = "red" | "green" | "blue";\n\nfunction sendRequest(method: Method) {\n  console.log(method);\n}\nsendRequest("GET");\n// sendRequest("PATCH"); // Error!` },
              explanation: "Literal types restrict variables to specific values."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch27-q1",
            type: "mcq",
            question: "\"hello\" as a type means?",
            options: ["Any string", "Only the string \"hello\"", "Any value", "A variable named hello"],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "As a literal type, it means only that exact value."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Literal", value: "\"exact-value\" | \"other-value\"" }
      ]
    },
    {
      id: "ts-ch-28",
      number: 28,
      partLabel: "PART 4: ADVANCED TYPE SYSTEM",
      title: "The never Type: Functions That Never Return",
      subtitle: "Understanding never and void",
      difficulty: "Intermediate",
      estimatedMinutes: 35,
      xpReward: 110,
      prerequisites: ["ts-ch-27"],
      learningObjectives: ["Understand never type", "Differentiate void from never", "Use never in type guards"],
      sections: [
        {
          id: "ch28-never",
          title: "The never Type",
          whyItMatters: "never represents code that never executes - functions that throw or have infinite loops.",
          content: `never means the function never returns:

\`\`\`typescript
function throwError(msg: string): never {
  throw new Error(msg);
}

function infiniteLoop(): never {
  while (true) {}
}
\`\`\`

void means the function returns nothing (undefined).`,
          codeExamples: [
            {
              id: "ch28-never",
              title: "never vs void",
              description: "Key difference",
              code: { javascript: `// never - function never returns\nfunction fail(msg: string): never {\n  throw new Error(msg);\n}\n\n// void - function returns undefined\nfunction log(msg: string): void {\n  console.log(msg);\n}` },
              explanation: "never = never executes. void = executes but returns nothing."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch28-q1",
            type: "mcq",
            question: "When does a function have never return type?",
            options: ["When it returns undefined", "When it throws or loops forever", "When it returns null", "When it has no parameters"],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "never means the function can never complete normally."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "never", value: "function never returns (throws/loops)" },
        { label: "void", value: "function returns undefined" }
      ]
    },
    {
      id: "ts-ch-29",
      number: 29,
      partLabel: "PART 4: ADVANCED TYPE SYSTEM",
      title: "The unknown Type: Safer Any",
      subtitle: "Type-safe any replacement",
      difficulty: "Intermediate",
      estimatedMinutes: 35,
      xpReward: 110,
      prerequisites: ["ts-ch-28"],
      learningObjectives: ["Use unknown properly", "Narrow unknown to specific types", "Avoid using any"],
      sections: [
        {
          id: "ch29-unknown",
          title: "unknown Type",
          whyItMatters: "unknown is like any but requires type checking before use - forcing you to handle types safely.",
          content: `unknown requires type checking:

\`\`\`typescript
let data: unknown = "hello";
// data.toUpperCase(); // Error!

if (typeof data === "string") {
  // Now TypeScript knows it's a string
  console.log(data.toUpperCase());
}
\`\`\`

Always narrow unknown before using it.`,
          codeExamples: [
            {
              id: "ch29-unknown",
              title: "Safe unknown Usage",
              description: "Requires narrowing",
              code: { javascript: `function parseJSON(input: string): unknown {\n  return JSON.parse(input);\n}\n\nconst result = parseJSON('{"name": "test"}');\nif (typeof result === "object" && result !== null) {\n  console.log((result as any).name);\n}` },
              explanation: "unknown forces you to narrow before use."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch29-q1",
            type: "mcq",
            question: "What's the difference between any and unknown?",
            options: ["No difference", "unknown requires type narrowing", "any is deprecated", "unknown cannot hold values"],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "unknown forces you to narrow before use, any doesn't."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "unknown", value: "any but must narrow before use" },
        { label: "any", value: "opt-out of type checking" }
      ]
    },
    {
      id: "ts-ch-30",
      number: 30,
      partLabel: "PART 4: ADVANCED TYPE SYSTEM",
      title: "Type Guards: Custom Type Checks",
      subtitle: "Custom type narrowing",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 120,
      prerequisites: ["ts-ch-29"],
      learningObjectives: ["Create custom type guards", "Use the 'is' keyword", "Narrow complex types"],
      sections: [
        {
          id: "ch30-guards",
          title: "Custom Type Guards",
          whyItMatters: "Type guards let you create custom type checks that TypeScript understands.",
          content: `A type guard returns a type predicate:

\`\`\`typescript
interface Fish { swim(): void; }
interface Bird { fly(): void; }

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}
\`\`\`

The pet is Fish is the type predicate.`,
          codeExamples: [
            {
              id: "ch30-guard",
              title: "Custom Type Guard",
              description: "Using 'is' keyword",
              code: { javascript: `interface Admin { role: "admin"; privileges: string[]; }\ninterface User { name: string; }\ntype Person = Admin | User;\n\nfunction isAdmin(person: Person): person is Admin {\n  return (person as Admin).role === "admin";\n}\n\nconst p: Person = { role: "admin", privileges: [] };\nif (isAdmin(p)) {\n  console.log(p.privileges);\n}` },
              explanation: "Type guards let TypeScript narrow types automatically."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch30-q1",
            type: "mcq",
            question: "What keyword makes a function a type guard?",
            options: ["return", "is", "guard", "typeof"],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "The 'is' keyword creates a type predicate."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Syntax", value: "function isType(x: X | Y): x is Y" }
      ]
    },
    {
      id: "ts-ch-31",
      number: 31,
      partLabel: "PART 4: ADVANCED TYPE SYSTEM",
      title: "Discriminated Unions: Tagged Union Types",
      subtitle: "Pattern matching with type safety",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 120,
      prerequisites: ["ts-ch-30"],
      learningObjectives: ["Create discriminated unions", "Use common property for narrowing", "Handle all cases safely"],
      sections: [
        {
          id: "ch31-discriminated",
          title: "Discriminated Unions",
          whyItMatters: "A common property (discriminant) makes narrowing union types easy and reliable.",
          content: `A discriminant property helps narrow:

\`\`\`typescript
type Result =
  | { success: true; data: string }
  | { success: false; error: string };

function handle(result: Result) {
  if (result.success) {
    console.log(result.data);
  } else {
    console.log(result.error);
  }
}
\`\`\`

The 'success' property is the discriminant.`,
          codeExamples: [
            {
              id: "ch31-discriminated",
              title: "Discriminated Union",
              description: "Using discriminant property",
              code: { javascript: `type Response =\n  | { status: 200; data: string }\n  | { status: 400; error: string }\n  | { status: 500; reason: string };\n\nfunction process(res: Response) {\n  switch (res.status) {\n    case 200: return res.data;\n    case 400: return res.error;\n    case 500: return res.reason;\n  }\n}` },
              explanation: "The discriminant property enables exhaustive checking."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch31-q1",
            type: "mcq",
            question: "What is a discriminant property?",
            options: ["A required property", "A common property to narrow union", "A computed property", "A private property"],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "A property common to all union members used for narrowing."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Pattern", value: "Common field + switch/if on it" }
      ]
    },
    {
      id: "ts-ch-32",
      number: 32,
      partLabel: "PART 4: ADVANCED TYPE SYSTEM",
      title: "Intersection Types: Combining Types",
      subtitle: "Multiple types at once",
      difficulty: "Intermediate",
      estimatedMinutes: 35,
      xpReward: 110,
      prerequisites: ["ts-ch-31"],
      learningObjectives: ["Create intersection types", "Combine interfaces", "Use with type aliases"],
      sections: [
        {
          id: "ch32-intersection",
          title: "Intersection Types",
          whyItMatters: "Intersection (&) combines multiple types into one that has all properties.",
          content: `Intersection combines types:

\`\`\`typescript
interface Name { first: string; last: string; }
interface Age { age: number; }

type Person = Name & Age;

const person: Person = {
  first: "John",
  last: "Doe",
  age: 30
};
\`\`\`

Person has properties from both Name and Age.`,
          codeExamples: [
            {
              id: "ch32-intersection",
              title: "Intersection Example",
              description: "Combining types",
              code: { javascript: `interface Serializable {\n  serialize(): string;\n}\ninterface Deserializable {\n  deserialize(data: string): void;\n}\n\ntype JsonHandler = Serializable & Deserializable;\n\nconst handler: JsonHandler = {\n  serialize() { return "{}"; },\n  deserialize(data: string) {}\n};` },
              explanation: "Intersection creates a type with all properties."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch32-q1",
            type: "mcq",
            question: "What symbol creates an intersection type?",
            options: ["|", "&", "^", "*"],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "The & symbol creates intersection types."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Intersection", value: "Type1 & Type2" }
      ]
    },
    {
      id: "ts-ch-33",
      number: 33,
      partLabel: "PART 4: ADVANCED TYPE SYSTEM",
      title: "Utility Types: Built-in Type Transformations",
      subtitle: "Common type helpers",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 130,
      prerequisites: ["ts-ch-32"],
      learningObjectives: ["Use Partial, Required, Readonly", "Use Pick and Omit", "Use Record type"],
      sections: [
        {
          id: "ch33-utility",
          title: "Built-in Utility Types",
          whyItMatters: "TypeScript provides common type transformations that save you from writing repetitive types.",
          content: `Common utility types:

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

// Make all properties optional
type PartialUser = Partial<User>;

// Make all properties required
type RequiredUser = Required<User>;

// Make all properties readonly
type ReadonlyUser = Readonly<User>;

// Pick specific properties
type UserPreview = Pick<User, "id" | "name">;

// Omit specific properties
type UserWithoutEmail = Omit<User, "email">;
\`\`\``,
          codeExamples: [
            {
              id: "ch33-utilities",
              title: "Utility Types Demo",
              description: "Common transformations",
              code: { javascript: `interface Task {\n  id: number;\n  title: string;\n  completed: boolean;\n}\n\ntype TaskPreview = Pick<Task, "id" | "title">;\ntype IncompleteTask = Partial<Omit<Task, "completed">>;\n\nconst preview: TaskPreview = { id: 1, title: "Test" };` },
              explanation: "Utility types transform existing types into new forms."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch33-q1",
            type: "mcq",
            question: "Which utility type makes all properties optional?",
            options: ["Required", "Partial", "Readonly", "Pick"],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Partial<T> makes all properties optional."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Partial", value: "All optional" },
        { label: "Required", value: "All required" },
        { label: "Readonly", value: "All immutable" },
        { label: "Pick", value: "Select properties" },
        { label: "Omit", value: "Exclude properties" }
      ]
    },
    {
      id: "ts-ch-34",
      number: 34,
      partLabel: "PART 4: ADVANCED TYPE SYSTEM",
      title: "Generic Constraints: Limiting Type Parameters",
      subtitle: "Restrict what types can be used",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 120,
      prerequisites: ["ts-ch-33"],
      learningObjectives: ["Use extends keyword", "Add constraints to generics", "Create reusable constrained functions"],
      sections: [
        {
          id: "ch34-constraints",
          title: "Generic Constraints",
          whyItMatters: "Constraints limit what types can be used with a generic, ensuring they have required properties.",
          content: `Use extends to constrain generics:

\`\`\`typescript
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): void {
  console.log(item.length);
}

logLength("hello"); // OK
logLength([1, 2, 3]); // OK
logLength({ length: 5 }); // OK
// logLength(123); // Error! number doesn't have length
\`\`\``,
          codeExamples: [
            {
              id: "ch34-constraint",
              title: "Constrained Generic",
              description: "Require specific properties",
              code: { javascript: `interface Named {\n  name: string;\n}\n\nfunction greet<T extends Named>(entity: T): string {\n  return "Hello, " + entity.name;\n}\n\ngreet({ name: "Alice", age: 25 });\n// greet(123); // Error!` },
              explanation: "Constraints ensure generic has required properties."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch34-q1",
            type: "mcq",
            question: "What keyword constrains a generic type?",
            options: ["implements", "extends", "constrains", "where"],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "extends constrains the generic type parameter."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Constraint", value: "T extends ConstraintType" }
      ]
    },
    {
      id: "ts-ch-35",
      number: 35,
      partLabel: "PART 4: ADVANCED TYPE SYSTEM",
      title: "Mapped Types: Creating Types from Types",
      subtitle: "Transform types dynamically",
      difficulty: "Advanced",
      estimatedMinutes: 45,
      xpReward: 130,
      prerequisites: ["ts-ch-34"],
      learningObjectives: ["Create mapped types", "Use key remapping", "Apply modifiers in mapping"],
      sections: [
        {
          id: "ch35-mapped",
          title: "Mapped Types",
          whyItMatters: "Mapped types create new types by transforming properties of an existing type.",
          content: `Map over properties:

\`\`\`typescript
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

interface User {
  name: string;
  age: number;
}

type ReadonlyUser = Readonly<User>;
// { readonly name: string; readonly age: number; }
\`\`\`

The keyof and in keywords enable mapping.`,
          codeExamples: [
            {
              id: "ch35-mapped",
              title: "Mapped Type Example",
              description: "Transforming properties",
              code: { javascript: `type Optional<T> = {\n  [K in keyof T]?: T[K];\n};\n\ninterface Config {\n  host: string;\n  port: number;\n  ssl: boolean;\n}\n\ntype PartialConfig = Optional<Config>;\n// { host?: string; port?: number; ssl?: boolean; }` },
              explanation: "Mapped types transform all properties at once."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch35-q1",
            type: "mcq",
            question: "Which keywords are used in mapped types?",
            options: ["typeof and in", "keyof and in", "map and each", "transform and apply"],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "keyof gets keys, in iterates over them."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Syntax", value: "{ [K in keyof T]: ... }" }
      ]
    },
    {
      id: "ts-ch-36",
      number: 36,
      partLabel: "PART 4: ADVANCED TYPE SYSTEM",
      title: "Template Literal Types: String Types on Steroids",
      subtitle: "Pattern-based string types",
      difficulty: "Advanced",
      estimatedMinutes: 45,
      xpReward: 130,
      prerequisites: ["ts-ch-35"],
      learningObjectives: ["Create template literal types", "Match specific string patterns", "Combine with union types"],
      sections: [
        {
          id: "ch36-template",
          title: "Template Literal Types",
          whyItMatters: "Template literal types let you create precise string types based on patterns.",
          content: `Create string patterns:

\`\`\`typescript
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type Endpoint = \`/api/\${HttpMethod}\`;
// "/api/GET" | "/api/POST" | ...

type EventName = \`on\${Capitalize<string>}\`;
// "onClick" | "onHover" | "onFocus" | ...
\`\`\``,
          codeExamples: [
            {
              id: "ch36-template",
              title: "Template Literal Types",
              description: "String pattern matching",
              code: { javascript: `type Direction = "north" | "south" | "east" | "west";\ntype Coordinate = \`\${Direction}-\${number}\`;\n\nconst coord1: Coordinate = "north-5";\nconst coord2: Coordinate = "south-10";\n// const coord3: Coordinate = "up-5"; // Error!` },
              explanation: "Template literal types create specific string patterns."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch36-q1",
            type: "mcq",
            question: "What character starts a template literal type?",
            options: ["$", "`", "#", "@"],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Backticks start template literal types."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Syntax", value: "`prefix-${Type}suffix`" }
      ]
    },
    {
      id: "ts-ch-37",
      number: 37,
      partLabel: "PART 4: ADVANCED TYPE SYSTEM",
      title: "Conditional Types: Type-Level If Statements",
      subtitle: "Types that change based on conditions",
      difficulty: "Advanced",
      estimatedMinutes: 50,
      xpReward: 140,
      prerequisites: ["ts-ch-36"],
      learningObjectives: ["Write conditional types", "Use infer keyword", "Create type utilities with conditionals"],
      sections: [
        {
          id: "ch37-conditional",
          title: "Conditional Types",
          whyItMatters: "Conditional types choose between two types based on a condition - like an if for types.",
          content: `Type-level ternary:

\`\`\`typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<string>;  // true
type B = IsString<number>;  // false
\`\`\`

The extends keyword is the condition.`,
          codeExamples: [
            {
              id: "ch37-conditional",
              title: "Conditional Type Example",
              description: "Type-level logic",
              code: { javascript: `type NonNullable<T> = T extends null | undefined ? never : T;\n\ntype A = NonNullable<string>;  // string\ntype B = NonNullable<null>;    // never\ntype C = NonNullable<undefined>; // never` },
              explanation: "Conditional types select type based on what extends what."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch37-q1",
            type: "mcq",
            question: "What is the ternary operator in conditional types?",
            options: ["if-else", "? :", "extends", "when"],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "T extends X ? Y : Z is the conditional type syntax."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Syntax", value: "T extends U ? X : Y" }
      ]
    },
    {
      id: "ts-ch-38",
      number: 38,
      partLabel: "PART 4: ADVANCED TYPE SYSTEM",
      title: "The infer Keyword: Extracting Types",
      subtitle: "Pattern matching for types",
      difficulty: "Advanced",
      estimatedMinutes: 45,
      xpReward: 130,
      prerequisites: ["ts-ch-37"],
      learningObjectives: ["Use infer in conditional types", "Extract return types", "Extract parameter types"],
      sections: [
        {
          id: "ch38-infer",
          title: "infer for Type Extraction",
          whyItMatters: "infer lets you extract types from within other types using pattern matching.",
          content: `Extract type parts:

\`\`\`typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Fn = (x: number) => string;
type R = ReturnType<Fn>; // string

type ParamType<T> = T extends (arg: infer P) => any ? P : never;
type P = ParamType<Fn>; // number
\`\`\``,
          codeExamples: [
            {
              id: "ch38-infer",
              title: "Using infer",
              description: "Extract return type",
              code: { javascript: `type ArrayElement<T> = T extends (infer E)[] ? E : never;\n\ntype StrArr = string[];\ntype NumArr = number[];\n\ntype E1 = ArrayElement<StrArr>; // string\ntype E2 = ArrayElement<NumArr>; // number` },
              explanation: "infer extracts and names a type from a pattern."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch38-q1",
            type: "mcq",
            question: "What does infer R do in a conditional type?",
            options: ["Checks if R exists", "Extracts and names the type as R", "Requires R to be defined", "Makes R optional"],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "infer R extracts and names the type as R."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "infer", value: "Extracts type in pattern" }
      ]
    },
    {
      id: "ts-ch-39",
      number: 39,
      partLabel: "PART 4: ADVANCED TYPE SYSTEM",
      title: "Declaration Merging: Interface Extension",
      subtitle: "How interfaces merge",
      difficulty: "Advanced",
      estimatedMinutes: 35,
      xpReward: 110,
      prerequisites: ["ts-ch-38"],
      learningObjectives: ["Understand declaration merging", "How interfaces combine", "Namespaces and merging"],
      sections: [
        {
          id: "ch39-merging",
          title: "Declaration Merging",
          whyItMatters: "When you define the same interface twice, TypeScript merges them. This is powerful for type augmentation.",
          content: `Interfaces merge automatically:

\`\`\`typescript
interface User {
  name: string;
}

interface User {
  age: number;
}

// Merged: { name: string; age: number; }
\`\`\`

This enables library augmentation.`,
          codeExamples: [
            {
              id: "ch39-merge",
              title: "Declaration Merging",
              description: "Interface merging",
              code: { javascript: `interface ApiResponse {\n  status: number;\n}\n\ninterface ApiResponse {\n  data: any;\n  timestamp: Date;\n}\n\nconst response: ApiResponse = {\n  status: 200,\n  data: {},\n  timestamp: new Date()\n};` },
              explanation: "Multiple interfaces with the same name merge."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch39-q1",
            type: "mcq",
            question: "What happens when two interfaces with the same name are declared?",
            options: ["Error", "Second overwrites first", "They merge", "First is ignored"],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "Interfaces with the same name merge their properties."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Merging", value: "Same-name interfaces combine" }
      ]
    },
    {
      id: "ts-ch-40",
      number: 40,
      partLabel: "PART 4: ADVANCED TYPE SYSTEM",
      title: "Module Augmentation: Extending Built-in Types",
      subtitle: "Add to existing types",
      difficulty: "Advanced",
      estimatedMinutes: 40,
      xpReward: 120,
      prerequisites: ["ts-ch-39"],
      learningObjectives: ["Use module augmentation", "Extend global types", "Add to window, Array, etc."],
      sections: [
        {
          id: "ch40-augmentation",
          title: "Module Augmentation",
          whyItMatters: "Augmentation lets you add to existing types without modifying source files.",
          content: `Extend existing modules:

\`\`\`typescript
declare global {
  interface Window {
    myCustomProperty: string;
  }
}
\`\`\`

This adds property to the global Window type.`,
          codeExamples: [
            {
              id: "ch40-augment",
              title: "Global Augmentation",
              description: "Extend window type",
              code: { javascript: `declare global {\n  interface Array<T> {\n    last(): T | undefined;\n  }\n}\n\nArray.prototype.last = function() {\n  return this[this.length - 1];\n};\n\n[1, 2, 3].last(); // 3` },
              explanation: "Module augmentation adds to existing types."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch40-q1",
            type: "mcq",
            question: "What declares a global augmentation?",
            options: ["global", "declare global", "export global", "interface Global"],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "declare global creates global type augmentation."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Syntax", value: "declare global { interface X { } }" }
      ]
    },
    // ============ PART 5: TYPESCRIPT IN PRACTICE ============
    {
      id: "ts-ch-41",
      number: 41,
      partLabel: "PART 5: TYPESCRIPT IN PRACTICE",
      title: "Setting Up Production TypeScript Projects",
      subtitle: "Project configuration deep dive",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 130,
      prerequisites: ["ts-ch-40"],
      learningObjectives: ["Configure tsconfig properly", "Set up build pipeline", "Configure linting and formatting"],
      sections: [
        {
          id: "ch41-config",
          title: "Production tsconfig",
          whyItMatters: "A proper tsconfig is essential for maintainable production code.",
          content: `Complete tsconfig for production:

\`\`\`json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "outDir": "./dist",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true
  }
}
\`\`\``,
          codeExamples: [
            {
              id: "ch41-tsconfig",
              title: "Production Configuration",
              description: "Full tsconfig example",
              code: { javascript: `{\n  "compilerOptions": {\n    "target": "ES2020",\n    "strict": true,\n    "declaration": true,\n    "sourceMap": true\n  }\n}` },
              explanation: "Key production settings include strict and declaration."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch41-q1",
            type: "mcq",
            question: "Which tsconfig option generates .d.ts files?",
            options: ["types", "declaration", "typesDeclaration", "generateTypes"],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "declaration: true generates type definitions."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Key options", value: "strict, declaration, sourceMap" }
      ]
    },
    {
      id: "ts-ch-42",
      number: 42,
      partLabel: "PART 5: TYPESCRIPT IN PRACTICE",
      title: "Working with Third-Party JavaScript Libraries",
      subtitle: "Typing untyped code",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 130,
      prerequisites: ["ts-ch-41"],
      learningObjectives: ["Use @types packages", "Create type declarations", "Handle untyped libraries"],
      sections: [
        {
          id: "ch42-types",
          title: "Type Definitions",
          whyItMatters: "Most JS libraries have TypeScript type definitions available.",
          content: `Installing types:

\`\`\`bash
npm install lodash
npm install @types/lodash
\`\`\`

For libraries without types, create a .d.ts file:

\`\`\`typescript
declare module "my-lib" {
  export function doSomething(x: string): void;
}
\`\`\``,
          codeExamples: [
            {
              id: "ch42-declare",
              title: "Custom Type Declaration",
              description: "For untyped libraries",
              code: { javascript: `declare module "some-library" {\n  export function init(config: {\n    apiKey: string;\n    debug?: boolean;\n  }): void;\n  \n  export const version: string;\n}` },
              explanation: "Declare modules for libraries without types."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch42-q1",
            type: "mcq",
            question: "Where do you put custom type declarations?",
            options: ["Any .ts file", "A .d.ts file", "package.json", "tsconfig.json"],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Use .d.ts files for type declarations."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Types", value: "@types/pkg for npm packages" },
        { label: "Custom", value: "declare module in .d.ts" }
      ]
    },
    {
      id: "ts-ch-43",
      number: 43,
      partLabel: "PART 5: TYPESCRIPT IN PRACTICE",
      title: "Error Handling with Result Types",
      subtitle: "Explicit error handling",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 120,
      prerequisites: ["ts-ch-42"],
      learningObjectives: ["Use Result/Either types", "Handle errors explicitly", "Avoid try-catch for control flow"],
      sections: [
        {
          id: "ch43-result",
          title: "Result Type Pattern",
          whyItMatters: "Explicit error handling makes code more predictable and easier to debug.",
          content: `Result type for error handling:

\`\`\`typescript
type Result<T, E> =
  | { ok: true; value: T }
  | { ok: false; error: E };

function divide(a: number, b: number): Result<number, string> {
  if (b === 0) {
    return { ok: false, error: "Division by zero" };
  }
  return { ok: true, value: a / b };
}
\`\`\``,
          codeExamples: [
            {
              id: "ch43-result",
              title: "Result Type Example",
              description: "Explicit error handling",
              code: { javascript: `type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };\n\nfunction fetchUser(id: number): Result<User, string> {\n  if (id <= 0) {\n    return { ok: false, error: "Invalid ID" };\n  }\n  return { ok: true, value: { id, name: "User" } };\n}\n\nconst result = fetchUser(1);\nif (result.ok) {\n  console.log(result.value.name);\n} else {\n  console.error(result.error);\n}` },
              explanation: "Result types make error handling explicit."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch43-q1",
            type: "mcq",
            question: "Why use Result type over try-catch?",
            options: ["Faster", "Explicit and typed errors", "Required by TypeScript", "Simpler syntax"],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Result types make errors explicit in the type signature."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Pattern", value: "Result<T, E> = ok | error" }
      ]
    },
    {
      id: "ts-ch-44",
      number: 44,
      partLabel: "PART 5: TYPESCRIPT IN PRACTICE",
      title: "Event-Driven Types: Type-Safe Event Systems",
      subtitle: "Typed event handling",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 120,
      prerequisites: ["ts-ch-43"],
      learningObjectives: ["Create typed event systems", "Use generics for events", "Type event handlers"],
      sections: [
        {
          id: "ch44-events",
          title: "Typed Event System",
          whyItMatters: "Type-safe events ensure you only handle valid events with correct data.",
          content: `Generic event type:

\`\`\`typescript
type EventMap = {
  click: { x: number; y: number };
  keypress: { key: string };
  data: { payload: unknown };
};

class Emitter<T extends Record<string, any>> {
  listeners: { [K in keyof T]?: Function[] } = {};

  on<K extends keyof T>(event: K, handler: (data: T[K]) => void) {
    // Store handler
  }

  emit<K extends keyof T>(event: K, data: T[K]) {
    // Call handlers
  }
}
\`\`\``,
          codeExamples: [
            {
              id: "ch44-events",
              title: "Typed Events",
              description: "Event system with types",
              code: { javascript: `type Events = {\n  userJoined: { userId: string; name: string };\n  userLeft: { userId: string };\n  message: { text: string; sender: string };\n};\n\nconst emitter = {\n  handlers: {} as Record<keyof Events, Function[]>,\n  on<E extends keyof Events>(e: E, fn: (d: Events[E]) => void) {\n    this.handlers[e] = (this.handlers[e] || []).concat(fn);\n  },\n  emit<E extends keyof Events>(e: E, data: Events[E]) {\n    (this.handlers[e] || []).forEach(f => f(data));\n  }\n};` },
              explanation: "Generic events ensure type safety."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch44-q1",
            type: "mcq",
            question: "What ensures event handler receives correct data type?",
            options: ["Runtime checks", "Generic event map type", "Event name", "Function name"],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Generic event types ensure correct data for each event."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Pattern", value: "EventMap = { eventName: dataType }" }
      ]
    },
    {
      id: "ts-ch-45",
      number: 45,
      partLabel: "PART 5: TYPESCRIPT IN PRACTICE",
      title: "State Management with TypeScript",
      subtitle: "Typed state containers",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 130,
      prerequisites: ["ts-ch-44"],
      learningObjectives: ["Type state objects", "Use discriminated unions for actions", "Type reducers"],
      sections: [
        {
          id: "ch45-state",
          title: "Typed State Management",
          whyItMatters: "Type-safe state makes Redux-like patterns more maintainable.",
          content: `Typed state with actions:

\`\`\`typescript
interface State {
  users: User[];
  loading: boolean;
  error: string | null;
}

type Action =
  | { type: "LOAD_START" }
  | { type: "LOAD_SUCCESS"; payload: User[] }
  | { type: "LOAD_ERROR"; payload: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOAD_START":
      return { ...state, loading: true };
    case "LOAD_SUCCESS":
      return { ...state, loading: false, users: action.payload };
    // ...
  }
}
\`\`\``,
          codeExamples: [
            {
              id: "ch45-reducer",
              title: "Typed Reducer",
              description: "State + actions with types",
              code: { javascript: `interface CounterState {\n  count: number;\n}\n\ntype CounterAction =\n  | { type: "increment" }\n  | { type: "decrement" }\n  | { type: "reset"; payload: number };\n\nconst counterReducer = (state: CounterState, action: CounterAction): CounterState => {\n  switch (action.type) {\n    case "increment": return { count: state.count + 1 };\n    case "decrement": return { count: state.count - 1 };\n    case "reset": return { count: action.payload };\n  }\n};` },
              explanation: "Discriminated unions type reducer actions."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch45-q1",
            type: "mcq",
            question: "What's the advantage of typed reducer actions?",
            options: ["Faster execution", "Auto-complete and compile-time checks", "Smaller bundle", "No runtime needed"],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "TypeScript catches missing cases in switch statements."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Pattern", value: "State + discriminated Action union" }
      ]
    },
    {
      id: "ts-ch-46",
      number: 46,
      partLabel: "PART 5: TYPESCRIPT IN PRACTICE",
      title: "API Types: From JSON to TypeScript",
      subtitle: "Type API responses",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 130,
      prerequisites: ["ts-ch-45"],
      learningObjectives: ["Generate types from JSON", "Use utility types for APIs", "Handle optional fields properly"],
      sections: [
        {
          id: "ch46-api",
          title: "API Type Generation",
          whyItMatters: "Proper API types ensure your code handles all response shapes correctly.",
          content: `Type API responses properly:

\`\`\`typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
  timestamp: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  // API might not always return all fields
  avatar?: string;
}

type ApiUserResponse = ApiResponse<User>;
\`\`\``,
          codeExamples: [
            {
              id: "ch46-api",
              title: "API Response Types",
              description: "Typed API responses",
              code: { javascript: `interface PaginatedResponse<T> {\n  data: T[];\n  page: number;\n  totalPages: number;\n  hasMore: boolean;\n}\n\ninterface User {\n  id: string;\n  name: string;\n}\n\ntype UsersResponse = PaginatedResponse<User>;\n\nconst fetchUsers = async (): Promise<UsersResponse> => {\n  const res = await fetch("/api/users");\n  return res.json();\n};` },
              explanation: "Wrap API responses in typed interfaces."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch46-q1",
            type: "mcq",
            question: "What should you use for potentially missing API fields?",
            options: ["Optional properties (?):", "null type", "undefined only", "any type"],
            correctAnswer: 0,
            difficulty: 1,
            explanation: "Use ? to mark optional fields that may not be present."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Optional", value: "field?: Type" },
        { label: "Nullable", value: "field: Type | null" }
      ]
    },
    {
      id: "ts-ch-47",
      number: 47,
      partLabel: "PART 5: TYPESCRIPT IN PRACTICE",
      title: "Testing TypeScript: Type Testing Techniques",
      subtitle: "Verify your types work",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 130,
      prerequisites: ["ts-ch-46"],
      learningObjectives: ["Use TypeScript for type testing", "Validate type transformations", "Use expectType"],
      sections: [
        {
          id: "ch47-testing",
          title: "Type Testing",
          whyItMatters: "Testing types ensures type transformations work as expected.",
          content: `Type-level testing:

\`\`\`typescript
// Use 'as const' to create literal types
type Color = "red" | "green" | "blue";

// Type equality check (compile-time)
type AssertEqual<T, U> = [T] extends [U] ? [U] extends [T] ? true : false : false;

// Check if type transforms correctly
type _test = AssertEqual<
  Pick<User, "id" | "name">,
  { id: string; name: string }
>;
\`\`\``,
          codeExamples: [
            {
              id: "ch47-types",
              title: "Type Testing",
              description: "Compile-time type checks",
              code: { javascript: `// Type equality\ntype Equals<T, U> = [T] extends [U] ? [U] extends [T] ? true : false : false;\n\n// Test our utility type\ntype Test1 = Equals<\n  Omit<{ a: number; b: string }, "b">,\n  { a: number }\n>;\n\n// This will error if types don't match!\nconst _assertTest1: Test1 = true;` },
              explanation: "Type tests verify type transformations at compile time."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch47-q1",
            type: "mcq",
            question: "How do you test types at compile time?",
            options: ["Unit tests", "Type equality checks", "Runtime assertions", "Integration tests"],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Type equality assertions check types at compile time."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Test", value: "Type equality with conditional types" }
      ]
    },
    {
      id: "ts-ch-48",
      number: 48,
      partLabel: "PART 5: TYPESCRIPT IN PRACTICE",
      title: "React with TypeScript: Component Types",
      subtitle: "Typed React components",
      difficulty: "Intermediate",
      estimatedMinutes: 50,
      xpReward: 140,
      prerequisites: ["ts-ch-47"],
      learningObjectives: ["Type functional components", "Type props and state", "Use generic components"],
      sections: [
        {
          id: "ch48-react",
          title: "React TypeScript",
          whyItMatters: "TypeScript makes React components more maintainable with type-safe props.",
          content: `Typed React components:

\`\`\`typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = "primary" }) => {
  return <button onClick={onClick}>{label}</button>;
};
\`\`\`

Modern approach with type parameter:

\`\`\`typescript
function Button<T>({ label, onClick }: { label: string; onClick: () => void }) {
  return <button onClick={onClick}>{label}</button>;
}
\`\`\``,
          codeExamples: [
            {
              id: "ch48-react",
              title: "Typed Component",
              description: "React with TypeScript",
              code: { javascript: `interface CardProps<T> {\n  items: T[];\n  renderItem: (item: T) => React.ReactNode;\n}\n\nfunction Card<T>({ items, renderItem }: CardProps<T>) {\n  return (\n    <div>\n      {items.map((item, i) => <div key={i}>{renderItem(item)}</div>)}\n    </div>\n  );\n}` },
              explanation: "Generic components work with any data type."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch48-q1",
            type: "mcq",
            question: "What type do you use for React event handlers?",
            options: ["Function", "React.EventHandler<T>", "React.MouseEvent", "Event"],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "Use React.MouseEvent, React.ChangeEvent for specific events."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Props", value: "interface Props { ... }" },
        { label: "Events", value: "React.MouseEvent<T>" }
      ]
    },
    {
      id: "ts-ch-49",
      number: 49,
      partLabel: "PART 5: TYPESCRIPT IN PRACTICE",
      title: "Node.js with TypeScript: Backend Types",
      subtitle: "Server-side TypeScript",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 130,
      prerequisites: ["ts-ch-48"],
      learningObjectives: ["Type Express routes", "Type request/response", "Type middleware"],
      sections: [
        {
          id: "ch49-node",
          title: "Node.js TypeScript",
          whyItMatters: "TypeScript on the server catches errors before deployment.",
          content: `Typed Express routes:

\`\`\`typescript
import { Request, Response, NextFunction } from "express";

interface AuthRequest extends Request {
  user?: { id: string; role: string };
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  // Check auth
  next();
};

app.get("/users/:id", authMiddleware, (req: AuthRequest, res: Response) => {
  const userId = req.params.id;
  // ...
});
\`\`\``,
          codeExamples: [
            {
              id: "ch49-express",
              title: "Express with Types",
              description: "Typed routes and middleware",
              code: { javascript: `import { Request, Response } from "express";\n\ninterface ApiResponse<T> {\n  success: boolean;\n  data?: T;\n  error?: string;\n}\n\napp.get<{ Params: { id: string }, ResBody: ApiResponse<User>>>\n  ("/api/users/:id", (req, res) => {\n    const user = getUser(req.params.id);\n    res.json({ success: true, data: user });\n  });` },
              explanation: "Express supports generic route types in recent versions."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch49-q1",
            type: "mcq",
            question: "How do you extend Express Request type?",
            options: ["Use interface extends Request", "Add properties directly", "Use declare", "Create new type"],
            correctAnswer: 0,
            difficulty: 1,
            explanation: "Create interface that extends Request to add custom properties."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Extend", value: "interface MyRequest extends Request" }
      ]
    },
    {
      id: "ts-ch-50",
      number: 50,
      partLabel: "PART 5: TYPESCRIPT IN PRACTICE",
      title: "Database Types: Type-Safe Database Operations",
      subtitle: "Types for SQL and NoSQL",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 130,
      prerequisites: ["ts-ch-49"],
      learningObjectives: ["Type database models", "Generate types from schema", "Type query results"],
      sections: [
        {
          id: "ch50-db",
          title: "Database Type Safety",
          whyItMatters: "Type-safe database operations prevent runtime errors when data changes.",
          content: `Database types:

\`\`\`typescript
interface DatabaseUser {
  id: string;
  email: string;
  createdAt: Date;
  // From database schema
}

type UserInsert = Omit<DatabaseUser, "id" | "createdAt">;
type UserUpdate = Partial<Omit<DatabaseUser, "id">>;

async function createUser(data: UserInsert): Promise<DatabaseUser {
  // Insert and return with generated fields
}
\`\`\``,
          codeExamples: [
            {
              id: "ch50-db",
              title: "Database Types",
              description: "Model types for CRUD",
              code: { javascript: `interface User {\n  id: string;\n  name: string;\n  email: string;\n}\n\ntype CreateUser = Omit<User, "id">;\ntype UpdateUser = Partial<Omit<User, "id">>;\n\n// Repository pattern\nconst userRepo = {\n  create(data: CreateUser): Promise<User> { ... },\n  update(id: string, data: UpdateUser): Promise<User> { ... },\n  findById(id: string): Promise<User | null> { ... }\n};` },
              explanation: "Separate types for create, update, and read operations."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch50-q1",
            type: "mcq",
            question: "What type represents data for creating a record?",
            options: ["Omit<Model, \"id\">", "Required<Model>", "Model", "Partial<Model>"],
            correctAnswer: 0,
            explanation: "Omit removes generated fields like id from the model.",
            difficulty: 1
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Create", value: "Omit<Model, \"generated\">" },
        { label: "Update", value: "Partial<Omit<Model, \"id\">>" }
      ]
    },
    {
      id: "ts-ch-51",
      number: 51,
      partLabel: "PART 5: TYPESCRIPT IN PRACTICE",
      title: "Type-Safe API Clients: Fetch Wrappers",
      subtitle: "Typed HTTP requests",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 120,
      prerequisites: ["ts-ch-50"],
      learningObjectives: ["Create typed fetch wrapper", "Handle response types", "Error handling"],
      sections: [
        {
          id: "ch51-client",
          title: "Typed API Client",
          whyItMatters: "A typed API client ensures every endpoint returns the expected type.",
          content: `Generic fetch wrapper:

\`\`\`typescript
async function api<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(\`HTTP \${response.status}\`);
  }
  return response.json() as T;
}

// Usage
const user = await api<User>("/api/user/1");
const users = await api<User[]>("/api/users");
\`\`\``,
          codeExamples: [
            {
              id: "ch51-client",
              title: "Typed Fetch",
              description: "Generic API client",
              code: { javascript: `const apiClient = {\n  async get<T>(url: string): Promise<T> {\n    const res = await fetch(url);\n    if (!res.ok) throw new Error(res.statusText);\n    return res.json();\n  },\n  async post<T, B>(url: string, body: B): Promise<T> {\n    const res = await fetch(url, {\n      method: "POST",\n      headers: { "Content-Type": "application/json" },\n      body: JSON.stringify(body)\n    });\n    return res.json();\n  }\n};\n\nconst users = await apiClient.get<User[]>("/users");` },
              explanation: "Generic type parameter specifies return type."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch51-q1",
            type: "mcq",
            question: "What makes the API client type-safe?",
            options: ["The URL", "Generic type parameter", "The headers", "The method"],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Generic <T> specifies what the endpoint returns."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Pattern", value: "async api<T>(url): Promise<T>" }
      ]
    },
    {
      id: "ts-ch-52",
      number: 52,
      partLabel: "PART 5: TYPESCRIPT IN PRACTICE",
      title: "Configuration Types: Type-Safe Config Objects",
      subtitle: "Typed configuration",
      difficulty: "Intermediate",
      estimatedMinutes: 35,
      xpReward: 110,
      prerequisites: ["ts-ch-51"],
      learningObjectives: ["Type configuration objects", "Use environment variables", "Validate config at startup"],
      sections: [
        {
          id: "ch52-config",
          title: "Configuration Types",
          whyItMatters: "Typed configuration catches missing or invalid config values early.",
          content: `Typed configuration:

\`\`\`typescript
interface AppConfig {
  port: number;
  database: {
    host: string;
    port: number;
    name: string;
  };
  api: {
    key: string;
    url: string;
  };
  isDevelopment: boolean;
}

const config: AppConfig = {
  port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  // ... rest of config
};
\`\`\``,
          codeExamples: [
            {
              id: "ch52-config",
              title: "App Configuration",
              description: "Type-safe config object",
              code: { javascript: `interface Config {\n  env: "development" | "production" | "test";\n  port: number;\n  db: { host: string; port: number };\n}\n\nconst config: Config = {\n  env: process.env.NODE_ENV as Config["env"] || "development",\n  port: Number(process.env.PORT) || 3000,\n  db: {\n    host: process.env.DB_HOST || "localhost",\n    port: Number(process.env.DB_PORT) || 5432\n  }\n};` },
              explanation: "Validate and transform env vars at startup."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch52-q1",
            type: "mcq",
            question: "What's the benefit of typed config?",
            options: ["Faster startup", "Catches missing/invalid values at startup", "Smaller bundle", "Better performance"],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "TypeScript catches missing config at compile time."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Pattern", value: "interface Config { ... }" }
      ]
    },
    {
      id: "ts-ch-53",
      number: 53,
      partLabel: "PART 5: TYPESCRIPT IN PRACTICE",
      title: "Error Boundaries: Centralized Error Handling",
      subtitle: "Typed error handling",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 120,
      prerequisites: ["ts-ch-52"],
      learningObjectives: ["Create typed error classes", "Handle errors uniformly", "Type error boundaries"],
      sections: [
        {
          id: "ch53-errors",
          title: "Typed Error Handling",
          whyItMatters: "Custom error types enable precise error handling.",
          content: `Custom error types:

\`\`\`typescript
class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500
  ) {
    super(message);
    this.name = "AppError";
  }
}

class ValidationError extends AppError {
  constructor(message: string) {
    super(message, "VALIDATION_ERROR", 400);
  }
}
\`\`\``,
          codeExamples: [
            {
              id: "ch53-error",
              title: "Custom Error Types",
              description: "Typed error hierarchy",
              code: { javascript: `class ApiError extends Error {\n  constructor(\n    message: string,\n    public status: number,\n    public code: string\n  ) {\n    super(message);\n    this.name = "ApiError";\n  }\n}\n\nfunction handleError(err: Error): string {\n  if (err instanceof ApiError) {\n    return \`[\${err.code}] \${err.message}\`;\n  }\n  return "Unknown error";\n}` },
              explanation: "Custom errors carry typed metadata."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch53-q1",
            type: "mcq",
            question: "Why use custom error classes?",
            options: ["Faster", "Carry typed metadata for handling", "Required by TypeScript", "Smaller"],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Custom errors enable type-safe error handling."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Pattern", value: "class XxxError extends Error" }
      ]
    },
    {
      id: "ts-ch-54",
      number: 54,
      partLabel: "PART 5: TYPESCRIPT IN PRACTICE",
      title: "Type-Safe Routing: Parameter and Query Types",
      subtitle: "Typed route parameters",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 120,
      prerequisites: ["ts-ch-53"],
      learningObjectives: ["Type route params", "Type query strings", "Validate routes"],
      sections: [
        {
          id: "ch54-routing",
          title: "Typed Routes",
          whyItMatters: "Type-safe routes ensure handlers receive correctly typed parameters.",
          content: `Route parameter types:

\`\`\`typescript
interface RouteParams {
  "/users/:id": { id: string };
  "/posts/:postId/comments/:commentId": { postId: string; commentId: string };
  "/api/search": { q: string; page?: string };
}

function getUser(params: RouteParams["/users/:id"]) {
  return database.findUser(params.id);
}
\`\`\``,
          codeExamples: [
            {
              id: "ch54-routes",
              title: "Typed Route Params",
              description: "Route parameter types",
              code: { javascript: `interface Routes {\n  "/user/:id": { params: { id: string } };\n  "/search": { query: { q: string; limit?: number } };\n}\n\nfunction handleRoute<P extends keyof Routes>(path: P, data: Routes[P]) {\n  console.log(path, data);\n}\n\nhandleRoute("/user/:id", { params: { id: "123" } });\nhandleRoute("/search", { query: { q: "test", limit: 10 } });` },
              explanation: "Route types ensure parameter shapes."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch54-q1",
            type: "mcq",
            question: "What type represents optional query parameters?",
            options: ["Required<T>", "Partial<T>", "Optional<T>", "Maybe<T>"],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Partial makes all properties optional."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Params", value: "path: { param: string }" },
        { label: "Query", value: "path: { query: Partial<...> }" }
      ]
    },
    {
      id: "ts-ch-55",
      number: 55,
      partLabel: "PART 5: TYPESCRIPT IN PRACTICE",
      title: "Build and Deployment: Production TypeScript",
      subtitle: "Optimizing for production",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 130,
      prerequisites: ["ts-ch-54"],
      learningObjectives: ["Configure production build", "Tree shaking", "Source maps for debugging"],
      sections: [
        {
          id: "ch55-build",
          title: "Production Build",
          whyItMatters: "Optimized production builds are smaller and faster.",
          content: `Build optimization:

\`\`\`json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "optimize": true,
    "treeshake": true
  }
}
\`\`\`

Use tsc for type checking only, esbuild/swc for bundling.`,
          codeExamples: [
            {
              id: "ch55-build",
              title: "Production Build Config",
              description: "Optimized tsconfig",
              code: { javascript: `// Build script: tsc --declaration --noEmit for checking\n// Then use esbuild for bundling:\n\n// esbuild.config.js\nrequire("esbuild").build({\n  entryPoints: ["src/index.ts"],\n  bundle: true,\n  minify: true,\n  sourcemap: true,\n  target: ["es2020"],\n  outfile: "dist/bundle.js"\n});` },
              explanation: "Separate type checking from bundling for speed."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch55-q1",
            type: "mcq",
            question: "What does tree shaking remove?",
            options: ["Types", "Unused code", "Comments", "Whitespace"],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Tree shaking removes unused exports from bundles."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Check", value: "tsc --noEmit" },
        { label: "Bundle", value: "esbuild/swc for bundling" }
      ]
    },
    // ============ PART 6: PROJECTS ============
    {
      id: "ts-ch-56",
      number: 56,
      partLabel: "PART 6: PROJECTS",
      title: "Project: Type-Safe Todo Application",
      subtitle: "Build a complete todo app",
      difficulty: "Intermediate",
      estimatedMinutes: 60,
      xpReward: 150,
      prerequisites: ["ts-ch-55"],
      learningObjectives: ["Build complete app with types", "Implement CRUD operations", "Use generic components"],
      sections: [
        {
          id: "ch56-todo",
          title: "Todo App Architecture",
          whyItMatters: "Building a complete app solidifies all TypeScript concepts.",
          content: `Todo app structure:

\`\`\`typescript
// types.ts
interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

type TodoCreate = Omit<Todo, "id" | "createdAt">;
type TodoUpdate = Partial<Omit<Todo, "id">>;
\`\`\``,
          codeExamples: [
            {
              id: "ch56-todo",
              title: "Todo App Types",
              description: "Core type definitions",
              code: { javascript: `interface Todo {\n  id: string;\n  title: string;\n  completed: boolean;\n  createdAt: Date;\n}\n\nclass TodoStore {\n  private todos: Todo[] = [];\n  \n  add(todo: Omit<Todo, "id" | "createdAt">): Todo {\n    const newTodo: Todo = {\n      ...todo,\n      id: crypto.randomUUID(),\n      createdAt: new Date()\n    };\n    this.todos.push(newTodo);\n    return newTodo;\n  }\n  \n  getAll(): Todo[] { return [...this.todos]; }\n  \n  toggle(id: string): void {\n    const todo = this.todos.find(t => t.id === id);\n    if (todo) todo.completed = !todo.completed;\n  }\n}` },
              explanation: "Implement all CRUD operations with types."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch56-q1",
            type: "mcq",
            question: "What type represents data for creating a todo?",
            options: ["Todo", "Omit<Todo, \"id\">", "Partial<Todo>", "Required<Todo>"],
            correctAnswer: 1,
            explanation: "Omit removes auto-generated fields."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Pattern", value: "Omit for create, Partial for update" }
      ]
    },
    {
      id: "ts-ch-57",
      number: 57,
      partLabel: "PART 6: PROJECTS",
      title: "Project: REST API Client Library",
      subtitle: "Type-safe HTTP wrapper",
      difficulty: "Intermediate",
      estimatedMinutes: 60,
      xpReward: 150,
      prerequisites: ["ts-ch-56"],
      learningObjectives: ["Create generic API client", "Type all endpoints", "Handle errors uniformly"],
      sections: [
        {
          id: "ch57-api",
          title: "API Client Design",
          whyItMatters: "A complete API client demonstrates advanced TypeScript patterns.",
          content: `Full API client design:

\`\`\`typescript
interface Endpoints {
  users: {
    list: { query: { page?: number } };
    get: { params: { id: string } };
    create: { body: { name: string; email: string } };
    update: { params: { id: string }; body: Partial<{ name: string; email: string }> };
  };
}
\`\`\``,
          codeExamples: [
            {
              id: "ch57-client",
              title: "Generic API Client",
              description: "Complete endpoint typing",
              code: { javascript: `type Method = "GET" | "POST" | "PUT" | "DELETE";\n\ninterface EndpointDef {\n  method: Method;\n  path: string;\n}\n\nconst api = {\n  endpoints: {\n    getUser: { method: "GET" as Method, path: "/users/:id" },\n    createUser: { method: "POST" as Method, path: "/users" },\n  },\n  async request<K extends keyof typeof api.endpoints>(\n    key: K\n  ): Promise<any> {\n    const def = api.endpoints[key];\n    // ... make request\n    return {};\n  }\n};` },
              explanation: "Full endpoint typing enables auto-complete."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch57-q1",
            type: "mcq",
            question: "What enables auto-complete for API endpoints?",
            options: ["any type", "Generic with endpoint keys", "string type", "enum type"],
            correctAnswer: 1,
            explanation: "Generic constrained to endpoint keys provides auto-complete."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Pattern", value: "Endpoints map + generic client" }
      ]
    },
    {
      id: "ts-ch-58",
      number: 58,
      partLabel: "PART 6: PROJECTS",
      title: "Project: State Management Library",
      subtitle: "Build your own store",
      difficulty: "Advanced",
      estimatedMinutes: 70,
      xpReward: 160,
      prerequisites: ["ts-ch-57"],
      learningObjectives: ["Create generic state container", "Type actions and reducers", "Implement subscriptions"],
      sections: [
        {
          id: "ch58-store",
          title: "Custom Store Implementation",
          whyItMatters: "Building a state library demonstrates mastery of generics and types.",
          content: `Store design:

\`\`\`typescript
interface Store<T> {
  getState(): T;
  setState(updater: (state: T) => T): void;
  subscribe(listener: () => void): () => void;
}

function createStore<T>(initialState: T): Store<T> {
  let state = initialState;
  const listeners = new Set<() => void>();

  return {
    getState: () => state,
    setState: (updater) => {
      state = updater(state);
      listeners.forEach(l => l());
    },
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    }
  };
}
\`\`\``,
          codeExamples: [
            {
              id: "ch58-store",
              title: "Custom Store",
              description: "State management from scratch",
              code: { javascript: `type Updater<T> = (state: T) => T;\n\ninterface Store<T> {\n  getState(): T;\n  setState(updater: Updater<T> | T): void;\n  subscribe(fn: () => void): () => void;\n}\n\nfunction createStore<T>(initial: T): Store<T> {\n  let state = initial;\n  const subs = new Set<() => void>();\n  \n  return {\n    getState: () => state,\n    setState: (updater) => {\n      state = typeof updater === "function" \n        ? (updater as (s: T) => T)(state) \n        : updater;\n      subs.forEach(s => s());\n    },\n    subscribe: (fn) => { subs.add(fn); return () => subs.delete(fn); }\n  };\n}` },
              explanation: "Generic store works with any state type."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch58-q1",
            type: "mcq",
            question: "What does store subscribe return?",
            options: ["void", "The current state", "An unsubscribe function", "A boolean"],
            correctAnswer: 2,
            explanation: "Subscribe returns a cleanup function."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Pattern", value: "createStore<T>(initial): Store<T>" }
      ]
    },
    {
      id: "ts-ch-59",
      number: 59,
      partLabel: "PART 6: PROJECTS",
      title: "Project: Form Validation Library",
      subtitle: "Type-safe form handling",
      difficulty: "Advanced",
      estimatedMinutes: 65,
      xpReward: 150,
      prerequisites: ["ts-ch-58"],
      learningObjectives: ["Create validator functions", "Type form schemas", "Handle validation results"],
      sections: [
        {
          id: "ch59-forms",
          title: "Form Validation Design",
          whyItMatters: "Forms require complex type handling for schemas and errors.",
          content: `Validation library:

\`\`\`typescript
interface ValidationResult {
  valid: boolean;
  errors: Record<string, string[]>;
}

interface FieldValidator<T> {
  validate(value: T): boolean;
  message: string;
}

type Schema<T> = {
  [K in keyof T]: FieldValidator<T[K]>[];
};
\`\`\``,
          codeExamples: [
            {
              id: "ch59-validate",
              title: "Validation Library",
              description: "Type-safe form validation",
              code: { javascript: `interface Validator<T> {\n  validate(value: T): boolean;\n  message: string;\n}\n\nconst validators = {\n  required: (msg = "Required"): Validator<any> => ({\n    validate: (v) => v !== undefined && v !== null && v !== "",\n    message: msg\n  }),\n  minLength: (n: number): Validator<string> => ({\n    validate: (v) => v.length >= n,\n    message: \`Minimum \${n} characters\`\n  }),\n  email: (): Validator<string> => ({\n    validate: (v) => /.+@.+\\..+/.test(v),\n    message: "Invalid email"\n  })\n};` },
              explanation: "Validators are typed functions that return boolean + message."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch59-q1",
            type: "mcq",
            question: "What does a validator return?",
            options: ["void", "boolean and message", "string", "object"],
            correctAnswer: 1,
            explanation: "Validator returns validation result + message."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Pattern", value: "{ validate: Fn; message: string }" }
      ]
    },
    {
      id: "ts-ch-60",
      number: 60,
      partLabel: "PART 6: PROJECTS",
      title: "Project: Type-Safe Router",
      subtitle: "Build a routing system",
      difficulty: "Advanced",
      estimatedMinutes: 70,
      xpReward: 160,
      prerequisites: ["ts-ch-59"],
      learningObjectives: ["Define route types", "Match routes at runtime", "Type route handlers"],
      sections: [
        {
          id: "ch60-router",
          title: "Router Implementation",
          whyItMatters: "A custom router demonstrates complex type patterns.",
          content: `Router types:

\`\`\`typescript
type RouteParams = Record<string, string>;
type RouteHandler = (params: RouteParams) => void;

interface Route {
  path: string;
  handler: RouteHandler;
}

interface Router {
  addRoute(path: string, handler: RouteHandler): void;
  navigate(path: string): void;
  match(path: string): Route | undefined;
}
\`\`\``,
          codeExamples: [
            {
              id: "ch60-router",
              title: "Custom Router",
              description: "Type-safe routing",
              code: { javascript: `type Handler<P extends Record<string, string> = {}> = (params: P) => void;\n\ninterface Route<P extends Record<string, string> = {}> {\n  path: string;\n  handler: Handler<P>;\n}\n\nconst router = {\n  routes: [] as Route[],\n  \n  add<P extends Record<string, string>>(path: string, handler: Handler<P>) {\n    this.routes.push({ path, handler });\n  },\n  \n  navigate(path: string) {\n    const route = this.routes.find(r => r.path === path);\n    if (route) route.handler({});\n  }\n};` },
              explanation: "Router matches paths and calls handlers with typed params."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch60-q1",
            type: "mcq",
            question: "How are route parameters typed?",
            options: ["any", "Record<string, string>", "string[]", "object"],
            correctAnswer: 1,
            explanation: "Route params are typed as Record<string, string>."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Pattern", value: "Handler<RouteParams> for each route" }
      ]
    },
    {
      id: "ts-ch-61",
      number: 61,
      partLabel: "PART 6: PROJECTS",
      title: "Project: Data Transform Pipeline",
      subtitle: "Type-safe data processing",
      difficulty: "Advanced",
      estimatedMinutes: 60,
      xpReward: 150,
      prerequisites: ["ts-ch-60"],
      learningObjectives: ["Create transform functions", "Type pipe operations", "Handle error propagation"],
      sections: [
        {
          id: "ch61-pipeline",
          title: "Data Pipeline Design",
          whyItMatters: "Data pipelines are common in backend and data processing.",
          content: `Pipeline types:

\`\`\`typescript
type Transform<T, U> = (input: T) => U;

type Pipeline<T> = {
  pipe<U>(transform: Transform<T, U>): Pipeline<U>;
  execute(input: T): T;
};
\`\`\``,
          codeExamples: [
            {
              id: "ch61-pipe",
              title: "Pipeline Implementation",
              description: "Data transformation chain",
              code: { javascript: `type Transformer<I, O> = (input: I) => O;\n\nclass Pipeline<I> {\n  private transforms: Transformer<any, any>[] = [];\n  \n  pipe<O>(fn: Transformer<I, O>): Pipeline<O> {\n    const p = new Pipeline<O>();\n    p.transforms = [...this.transforms, fn];\n    return p;\n  }\n  \n  execute(input: I): any {\n    return this.transforms.reduce((v, fn) => fn(v), input);\n  }\n}\n\nconst p = new Pipeline<string>()\n  .pipe(s => s.trim())\n  .pipe(s => s.toLowerCase())\n  .pipe(s => s.split(""));\n\nconsole.log(p.execute("  HELLO  ")); // ["h","e","l","l","o"]` },
              explanation: "Pipeline chains transforms with type safety."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch61-q1",
            type: "mcq",
            question: "What does pipe return?",
            options: ["void", "A new Pipeline with updated type", "The input", "boolean"],
            correctAnswer: 1,
            explanation: "Each pipe creates a new Pipeline with transformed output type."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Pattern", value: "pipe<U>(fn): Pipeline<U>" }
      ]
    },
    {
      id: "ts-ch-62",
      number: 62,
      partLabel: "PART 6: PROJECTS",
      title: "Project: Dependency Injection Container",
      subtitle: "Type-safe DI system",
      difficulty: "Advanced",
      estimatedMinutes: 70,
      xpReward: 160,
      prerequisites: ["ts-ch-61"],
      learningObjectives: ["Create service container", "Type dependencies", "Implement resolution"],
      sections: [
        {
          id: "ch62-di",
          title: "DI Container Design",
          whyItMatters: "DI is a foundational pattern in enterprise applications.",
          content: `Container interface:

\`\`\`typescript
type Constructor<T> = new (...args: any[]) => T;

interface Container {
  register<T>(token: string, instance: T): void;
  registerClass<T>(token: string, constructor: Constructor<T>): void;
  resolve<T>(token: string): T;
}
\`\`\``,
          codeExamples: [
            {
              id: "ch62-di",
              title: "DI Container",
              description: "Type-safe dependency injection",
              code: { javascript: `type Constructor<T> = new (...args: any[]) => T;\n\nclass Container {\n  private services = new Map<string, any>();\n  \n  register<T>(token: string, instance: T): void {\n    this.services.set(token, instance);\n  }\n  \n  registerClass<T>(token: string, Class: Constructor<T>): void {\n    this.services.set(token, new Class());\n  }\n  \n  resolve<T>(token: string): T {\n    const service = this.services.get(token);\n    if (!service) throw new Error(\`Service \${token} not found\`);\n    return service as T;\n  }\n}` },
              explanation: "Container manages service lifecycle with type safety."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch62-q1",
            type: "mcq",
            question: "What does registerClass do?",
            options: ["Registers instance", "Registers class to instantiate on resolve", "Deletes service", "Updates service"],
            correctAnswer: 1,
            explanation: "registerClass stores the constructor to instantiate later."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Pattern", value: "Container with register/resolve" }
      ]
    },
    {
      id: "ts-ch-63",
      number: 63,
      partLabel: "PART 6: PROJECTS",
      title: "Project: Event Bus System",
      subtitle: "Type-safe pub/sub",
      difficulty: "Advanced",
      estimatedMinutes: 60,
      xpReward: 150,
      prerequisites: ["ts-ch-62"],
      learningObjectives: ["Create event bus", "Type subscribers", "Handle event dispatch"],
      sections: [
        {
          id: "ch63-bus",
          title: "Event Bus Design",
          whyItMatters: "Event-driven architecture requires type-safe event handling.",
          content: `Event bus interface:

\`\`\`typescript
type EventHandler<T = any> = (data: T) => void;

interface EventBus {
  subscribe<T>(event: string, handler: EventHandler<T>): () => void;
  publish<T>(event: string, data: T): void;
  unsubscribe(event: string): void;
}
\`\`\``,
          codeExamples: [
            {
              id: "ch63-bus",
              title: "Event Bus",
              description: "Type-safe pub/sub",
              code: { javascript: `class EventBus {\n  private handlers = new Map<string, Function[]>();\n  \n  subscribe<T>(event: string, handler: (data: T) => void): () => void {\n    if (!this.handlers.has(event)) this.handlers.set(event, []);\n    this.handlers.get(event)!.push(handler);\n    return () => this.unsubscribe(event, handler);\n  }\n  \n  publish<T>(event: string, data: T): void {\n    (this.handlers.get(event) || []).forEach(h => h(data));\n  }\n  \n  private unsubscribe(event: string, handler: Function): void {\n    const handlers = this.handlers.get(event);\n    if (handlers) {\n      const idx = handlers.indexOf(handler);\n      if (idx >= 0) handlers.splice(idx, 1);\n    }\n  }\n}` },
              explanation: "Event bus enables loose coupling with type safety."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch63-q1",
            type: "mcq",
            question: "What does subscribe return?",
            options: ["void", "The event name", "An unsubscribe function", "The data"],
            correctAnswer: 2,
            explanation: "Subscribe returns a cleanup function."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Pattern", value: "subscribe returns cleanup function" }
      ]
    },
    {
      id: "ts-ch-64",
      number: 64,
      partLabel: "PART 6: PROJECTS",
      title: "Project: Type-Safe API Schema Validator",
      subtitle: "Validate against schemas",
      difficulty: "Advanced",
      estimatedMinutes: 65,
      xpReward: 150,
      prerequisites: ["ts-ch-63"],
      learningObjectives: ["Define schema types", "Create validators", "Type error results"],
      sections: [
        {
          id: "ch64-schema",
          title: "Schema Validator Design",
          whyItMatters: "Schema validation is fundamental to data handling.",
          content: `Schema types:

\`\`\`typescript
type Schema =
  | { type: "string"; minLength?: number; maxLength?: number }
  | { type: "number"; min?: number; max?: number }
  | { type: "boolean" }
  | { type: "array"; items: Schema }
  | { type: "object"; properties: Record<string, Schema> };

interface ValidationError {
  path: string;
  message: string;
}
\`\`\``,
          codeExamples: [
            {
              id: "ch64-validate",
              title: "Schema Validator",
              description: "Validate against type schemas",
              code: { javascript: `type Schema = { type: "string" } | { type: "number" } | { type: "boolean" };\n\nfunction validate(value: any, schema: Schema): string[] {\n  const errors: string[] = [];\n  \n  if (schema.type === "string" && typeof value !== "string") {\n    errors.push("Expected string");\n  } else if (schema.type === "number" && typeof value !== "number") {\n    errors.push("Expected number");\n  } else if (schema.type === "boolean" && typeof value !== "boolean") {\n    errors.push("Expected boolean");\n  }\n  \n  return errors;\n}\n\nconsole.log(validate(42, { type: "string" })); // ["Expected string"]` },
              explanation: "Schema validation returns array of error messages."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch64-q1",
            type: "mcq",
            question: "What does schema validation return?",
            options: ["boolean", "Array of error strings", "The validated value", "void"],
            correctAnswer: 1,
            explanation: "Validation returns error messages (empty if valid)."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Pattern", value: "validate(value, schema): string[]" }
      ]
    },
    {
      id: "ts-ch-65",
      number: 65,
      partLabel: "PART 6: PROJECTS",
      title: "Final Project: Type-Safe Component Library",
      subtitle: "Complete component library",
      difficulty: "Advanced",
      estimatedMinutes: 90,
      xpReward: 200,
      prerequisites: ["ts-ch-64"],
      learningObjectives: ["Build complete component library", "Type all props and variants", "Document with types"],
      sections: [
        {
          id: "ch65-components",
          title: "Component Library Design",
          whyItMatters: "A complete component library showcases mastery of TypeScript and design patterns.",
          content: `Component library structure:

\`\`\`typescript
// Core types shared across components
type Size = "sm" | "md" | "lg";
type Variant = "primary" | "secondary" | "danger" | "success";

// Base component props
interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

// Button component
interface ButtonProps extends BaseProps {
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  onClick?: () => void;
}

// Input component
interface InputProps extends BaseProps {
  type?: "text" | "password" | "email" | "number";
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
}
\`\`\``,
          codeExamples: [
            {
              id: "ch65-lib",
              title: "Component Library",
              description: "Complete library with types",
              code: { javascript: `// Complete component library demonstration\n\n// ===== Types =====\ntype Size = "sm" | "md" | "lg";\ntype Variant = "primary" | "secondary" | "ghost";\n\ninterface BaseProps {\n  className?: string;\n}\n\n// ===== Button =====\ninterface ButtonProps extends BaseProps {\n  variant?: Variant;\n  size?: Size;\n  onClick?: () => void;\n}\nconst Button = ({ variant = "primary", size = "md", ...props }: ButtonProps) => null;\n\n// ===== Input =====\ninterface InputProps extends BaseProps {\n  value: string;\n  onChange: (value: string) => void;\n  error?: string;\n}\nconst Input = ({ error, ...props }: InputProps) => null;\n\n// ===== Card =====\ninterface CardProps extends BaseProps {\n  title?: string;\n  footer?: React.ReactNode;\n}\nconst Card = ({ title, footer, children }: CardProps) => null;\n\n// ===== Usage =====\nconst App = () => (\n  <div>\n    <Button variant="primary" size="md">Click me</Button>\n    <Input value="" onChange={() => {}} error="Required" />\n    <Card title="Welcome\">Content here</Card>\n  </div>\n);` },
              explanation: "A complete component library with consistent types."
            }
          ]
        },
        {
          id: "ch65-wrapup",
          title: "TypeScript Mastery Summary",
          whyItMatters: "Review the key concepts learned throughout the course.",
          content: `Congratulations on completing the TypeScript course! Here's a summary:

**Core Concepts Mastered:**
- Type annotations and inference
- Functions with full type safety
- Classes, interfaces, and OOP
- Generics for reusable code
- Union types and type narrowing
- Utility types and transformations
- Advanced patterns (mapped, conditional, infer)

**Skills Developed:**
- Production TypeScript project setup
- Type-safe API design
- Error handling patterns
- State management with types
- Testing with TypeScript
- Building reusable libraries

**What's Next:**
- Practice with real projects
- Explore libraries like Zod, io-ts for runtime validation
- Learn TypeScript with React, Vue, Node.js
- Contribute to open source TypeScript projects
- Stay updated with TypeScript releases
`
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch65-q1",
            type: "mcq",
            question: "What is the key to a type-safe component library?",
            options: ["Using any", "Consistent and well-documented types", "Minimal components", "Using JavaScript"],
            correctAnswer: 1,
            explanation: "Consistent typing makes components reusable and safe."
          },
          {
            id: "ch65-q2",
            type: "mcq",
            question: "Which utility type makes all properties optional?",
            options: ["Required", "Partial", "Readonly", "Pick"],
            correctAnswer: 1,
            explanation: "Partial<T> makes all properties optional."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        { label: "Button", value: "variant, size, onClick" },
        { label: "Input", value: "value, onChange, error" },
        { label: "Card", value: "title, children, footer" },
        { label: "Variant", value: "primary | secondary | danger" }
      ]
    }
  ]
};

// Export a shorter alias for import
export default typescriptTrack;