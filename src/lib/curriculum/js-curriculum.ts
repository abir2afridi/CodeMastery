import type { Chapter, Quiz, Exercise } from "./types";
import { jsCh02, jsCh03, jsCh04 } from "./js-deep-2-4";
import { jsCh05, jsCh06, jsCh07 } from "./js-deep-5-7";
import { jsCh08, jsCh09, jsCh10 } from "./js-deep-8-10";
import { jsCh11 } from "./js-deep-11";
import { jsCh12, jsCh13 } from "./js-deep-12-13";
import { jsCh14, jsCh15, jsCh16, jsCh17, jsCh18, jsCh19, jsCh20 } from "./js-deep-14-20";
import { jsCh21, jsCh22, jsCh23, jsCh24, jsCh25, jsCh26, jsCh27, jsCh28, jsCh29, jsCh30 } from "./js-deep-21-30";
import { jsCh31, jsCh32, jsCh33, jsCh34, jsCh35, jsCh36, jsCh37, jsCh38, jsCh39, jsCh40 } from "./js-deep-31-40";
import { jsCh41, jsCh42, jsCh43, jsCh44, jsCh45, jsCh46, jsCh47, jsCh48, jsCh49, jsCh50, jsCh51, jsCh52, jsCh53, jsCh54, jsCh55 } from "./js-deep-41-55";
import { jsCh56, jsCh57, jsCh58, jsCh59, jsCh60, jsCh61, jsCh62, jsCh63, jsCh64, jsCh65, jsCh66, jsCh67, jsCh68, jsCh69, jsCh70 } from "./js-deep-56-70";

const stubQuiz = (chapterId: string, topic: string): Quiz => ({
  passingScore: 80,
  questions: [
    { id: `${chapterId}-q1`, type: "mcq", question: `Which best describes ${topic}?`, options: [`A core JavaScript concept used in real codebases.`, "Removed from JavaScript.", "Only available in Node.", "Browser-specific only."], correctAnswer: 0, explanation: `${topic} is a standard part of JavaScript.`, difficulty: 1 },
    { id: `${chapterId}-q2`, type: "true-false", question: `${topic} is worth deep study.`, options: ["True", "False"], correctAnswer: 0, explanation: "Every topic in this curriculum was selected for real-world relevance.", difficulty: 1 },
    { id: `${chapterId}-q3`, type: "mcq", question: `Best reference for ${topic}?`, options: ["MDN Web Docs", "Random forums", "Outdated tutorials", "Guesswork"], correctAnswer: 0, explanation: "MDN is the canonical reference.", difficulty: 1 },
  ],
});

const stubExercises = (chapterId: string): Exercise[] => [{
  id: `${chapterId}-ex1`,
  title: "Practice the chapter concepts",
  difficulty: 1,
  description: "Apply the chapter's JS concept in a small example.",
  requirements: ["Use the main concept", "Log results to console", "Test in compiler"],
  starterCode: { html: "<button id=\"btn\">Click me</button>", javascript: "// your code here" },
  hints: ["Re-read the chapter", "Use console.log to inspect", "Open the console panel"],
  solution: { html: "<button id=\"btn\">Click me</button>", javascript: "document.getElementById('btn').addEventListener('click', () => console.log('clicked'));" },
  solutionExplanation: "A minimal example demonstrating the chapter's concept.",
}];

const makeStub = (number: number, title: string, subtitle: string, difficulty: Chapter["difficulty"], partLabel: string, prevId?: string): Chapter => {
  const id = `js-ch-${String(number).padStart(2, "0")}`;
  return {
    id, number, title, subtitle, difficulty,
    estimatedMinutes: 30, xpReward: 100,
    prerequisites: prevId ? [prevId] : [],
    learningObjectives: [`Understand ${title}.`, `Apply ${title} in real code.`, `Recognize common pitfalls.`],
    partLabel,
    sections: [{
      id: `${id}-s1`,
      title: `Introduction to ${title}`,
      whyItMatters: `${title} is a core JavaScript topic. Mastering it makes you a stronger developer.`,
      content: `This chapter covers ${title}. Detailed lesson content is being expanded chapter by chapter — the platform, compiler, and quiz system are fully functional. Use the in-page mini compiler to experiment freely.\n\nFor in-depth coverage right now, refer to MDN Web Docs while we expand this chapter's written content.`,
      codeExamples: [{
        id: `${id}-ex1`,
        title: `${title} — quick example`,
        description: `A minimal demo of ${title}.`,
        code: { html: `<div id="out">Watch the console</div>`, javascript: `console.log('Learning ${title}');\ndocument.getElementById('out').textContent = 'Hello from JS!';` },
        explanation: "Logs a message and updates the page text.",
        tryItPrompt: "Change the strings and re-run.",
      }],
    }],
    exercises: stubExercises(id),
    quiz: stubQuiz(id, title),
    cheatSheet: [{ label: "Topic", value: title }],
  };
};

// ============================================================================
// DEEP CHAPTER 1
// ============================================================================
const ch01: Chapter = {
  id: "js-ch-01",
  number: 1,
  title: "What Is JavaScript? The Language of the Web",
  subtitle: "From a 10-day prototype to the most-used language on Earth.",
  difficulty: "Absolute Beginner",
  estimatedMinutes: 35,
  xpReward: 100,
  prerequisites: [],
  partLabel: "Part 1: JS Absolute Basics",
  learningObjectives: [
    "Explain what JavaScript is and where it runs.",
    "Distinguish JavaScript from Java (no relation).",
    "Understand what an engine is and name the major ones.",
    "Recognize what JavaScript is used for beyond the browser.",
    "Open and use the browser's console as a JavaScript playground.",
  ],
  sections: [
    {
      id: "js01-s1",
      title: "The Origin Story",
      whyItMatters: "JavaScript has more quirks than any other major language. Most of them make sense only when you know the history.",
      realWorldAnalogy: "JavaScript was built like a house thrown together in a weekend, then turned into a skyscraper over 30 years. Every weird floor plan has a historical reason.",
      content: `In May 1995, a young programmer named **Brendan Eich** was hired by Netscape (the company that made the dominant web browser at the time). His mission: create a scripting language for the browser, in **10 days**. Yes, ten. The first version of JavaScript was prototyped in less than two weeks.

At the time, the hottest language in the world was **Java**. Netscape had a marketing partnership with Sun Microsystems (Java's creator). So Brendan's new language was named "JavaScript" purely as a marketing tactic — to ride Java's hype. **JavaScript and Java have almost nothing in common.** It's like the difference between a car and a carpet. Calling your language JavaScript was the equivalent of naming your hamburger restaurant "iPhone" in 2008.

Despite its rushed birth, JavaScript took off because it was the *only* language that ran in browsers. Microsoft soon copied it as "JScript" for Internet Explorer, and the two competed bitterly. To unify them, Netscape submitted JavaScript to the **ECMA standards body** in 1996. The official name became **ECMAScript** (the spec) — but everyone still calls it JavaScript (the implementation).

For its first decade, JavaScript was a toy language used for form validation and silly animations. Then in 2008, Google released the **V8 engine** for Chrome — the first JavaScript engine that was *fast*. Suddenly JavaScript could power real applications. Gmail, Google Maps, and eventually Figma showed what was possible. In 2009, Ryan Dahl took V8 out of the browser and created **Node.js**, letting JavaScript run on servers.

Today JavaScript is everywhere: browsers (every single one), servers (Node, Deno, Bun), mobile apps (React Native), desktop apps (VS Code is JavaScript via Electron), embedded devices, robotics, even spacecraft. **It is the most-used programming language in the world**, with more than 17 million developers.`,
      callouts: [
        { type: "info", title: "ECMAScript versions", content: "You'll see references to ES5 (2009), ES6/ES2015, ES2017, ES2020, etc. These are spec versions. Modern browsers support up through the latest. We'll use modern syntax throughout this course." },
        { type: "warning", title: "JavaScript ≠ Java", content: "These are completely different languages with similar names. If you ever see a job posting that lists 'JavaScript or Java' as if interchangeable, the company doesn't know what they're hiring for." },
      ],
    },
    {
      id: "js01-s2",
      title: "Engines and Where JS Runs",
      whyItMatters: "Knowing the engine helps you understand performance behavior and cross-browser quirks.",
      content: `A **JavaScript engine** is the program that reads JS code and executes it. The major engines:

- **V8** — Made by Google. Powers Chrome, Edge, Node.js, Deno, Electron. The dominant engine.
- **SpiderMonkey** — Made by Mozilla. Powers Firefox. (Brendan Eich's original engine, evolved.)
- **JavaScriptCore (JSC)** — Made by Apple. Powers Safari and all iOS browsers.

These engines compile your JavaScript code into machine instructions on the fly using a technique called **just-in-time (JIT) compilation**. They watch which parts of your code run a lot ("hot" code) and aggressively optimize them. This is why JavaScript is much faster than people expect.

**Where JavaScript runs:**

- **Browser** — Every webpage you've ever visited used JavaScript. The browser exposes APIs like \`document\` (the DOM), \`fetch\` (HTTP), \`localStorage\`, etc.
- **Server (Node.js)** — Powers backends for Netflix, LinkedIn, PayPal. Provides APIs for files, networking, databases.
- **Desktop (Electron)** — VS Code, Slack, Discord, WhatsApp Desktop, Figma Desktop are all JavaScript wrapped in a native shell.
- **Mobile (React Native)** — Instagram, Facebook, Discord mobile apps use JS for a large portion of their UI.
- **CLI tools** — npm itself, Vite, Vue CLI, ESLint, Prettier, and thousands of tools you use daily.
- **Embedded** — JS runs on Raspberry Pi, Arduino-style devices, smart TVs, and even some satellites.

The key insight: **the language is the same** in all these environments. What differs is the available APIs. \`document.getElementById\` only exists in browsers; \`require('fs')\` only exists in Node. The core language — variables, functions, objects, async — is identical.`,
      callouts: [
        { type: "tip", title: "Learn once, deploy everywhere", content: "Once you learn JavaScript, you can build websites, mobile apps, desktop apps, servers, and games. No other language has this reach." },
      ],
    },
    {
      id: "js01-s3",
      title: "Your First JavaScript",
      whyItMatters: "You need a place to type JavaScript and see results before you understand anything else. The browser console is the fastest path.",
      content: `Open this very webpage in Chrome (or any browser). Press **F12** (or Cmd + Option + I on Mac). Click the **Console** tab. You're now looking at a live JavaScript REPL — a place where you can type any JavaScript and get instant results.

Try these one at a time:

\`\`\`
2 + 2
\`\`\`

Press Enter. You'll see \`4\`. Congratulations, you just ran JavaScript.

\`\`\`
"Hello, " + "world!"
\`\`\`

You'll see \`'Hello, world!'\` — JavaScript joined two text strings together using the \`+\` operator.

\`\`\`
console.log("This is my first script")
\`\`\`

\`console.log\` is the most important function in your career. It prints a value to the console. You will use it to inspect what your code is doing thousands of times. **\`console.log\` is your best debugging friend.**

\`\`\`
alert("Hi from JavaScript")
\`\`\`

A popup appears! \`alert\` shows a message in a browser dialog. It's old-fashioned but useful for quick demos.

\`\`\`
let name = prompt("What's your name?")
console.log("Hello " + name)
\`\`\`

\`prompt\` shows a text input dialog. Whatever you type gets stored in the variable \`name\`, then logged to the console. You just wrote a tiny interactive program.

This is the rhythm of learning JavaScript: type, see output, learn. The compiler in this lesson is even better — it captures \`console.log\` output and shows it inline.`,
      codeExamples: [
        {
          id: "js01-s3-ex1",
          title: "console.log in action",
          description: "Run this and watch the console panel below the preview for the output.",
          code: {
            html: `<h1>Open the console below ↓</h1>`,
            javascript: `console.log("Hello, world!");\nconsole.log("2 + 2 =", 2 + 2);\nconsole.log("Today is great");`,
          },
          explanation: "Three console.log statements. The first prints text. The second prints text + the result of an expression. The third prints another string. Each appears as a separate line in the console.",
          tryItPrompt: "Add a fourth console.log that prints your name. Then add one that calculates 100 * 7.",
        },
        {
          id: "js01-s3-ex2",
          title: "Three ways to add JavaScript to a page",
          description: "JavaScript can be inline, in a <script> tag, or in a separate file linked via <script src='...'>. Here we show inline + script tag.",
          code: {
            html: `<button onclick="alert('Inline JS!')">Inline</button>\n<button id="other">Script tag</button>`,
            javascript: `document.getElementById('other').addEventListener('click', () => {\n  alert('From a script tag!');\n});`,
          },
          explanation: "The first button uses inline JS via the onclick attribute. The second button has its event handler attached from a separate <script> block, which is the cleaner, modern approach.",
          tryItPrompt: "Click each button. Then change both alert messages and re-run.",
        },
      ],
      callouts: [
        { type: "pro-tip", title: "Live in the console", content: "Open DevTools and use the console as a calculator, a string manipulator, a quick-test playground. Type any JavaScript expression and Enter — instant feedback. This is how senior devs explore." },
        { type: "common-mistake", title: "Forgetting to log", content: "Beginners often write JavaScript and wonder 'why isn't anything happening?' — usually because they didn't log or output anything. Always console.log() to verify your code ran." },
      ],
      microExercise: {
        instruction: "Use console.log to print your name and your age (you can make up the age).",
        starterCode: { html: "<p>Open the console</p>", javascript: "// log your name and age" },
        hint: "console.log accepts multiple arguments separated by commas.",
        solution: { html: "<p>Open the console</p>", javascript: "console.log('My name is', 'Alex');\nconsole.log('I am', 25, 'years old');" },
      },
    },
  ],
  exercises: [
    {
      id: "js01-ex1",
      title: "Three console messages",
      difficulty: 1,
      description: "Use console.log three times to print: a greeting, a math result, and a true/false comparison.",
      requirements: ["At least 3 separate console.log calls", "One must include a math expression like 5 + 3", "One must include a comparison like 10 > 5"],
      starterCode: { html: "<p>Check the console</p>", javascript: "// your code" },
      hints: ["console.log('text')", "console.log(5 + 3)", "console.log(10 > 5) // prints true"],
      solution: { html: "<p>Check the console</p>", javascript: "console.log('Hello!');\nconsole.log('5 + 3 =', 5 + 3);\nconsole.log('Is 10 > 5?', 10 > 5);" },
      solutionExplanation: "Three console.log calls each demonstrating a different type of value: a string, an arithmetic expression, and a boolean comparison.",
    },
    {
      id: "js01-ex2",
      title: "Interactive greeting",
      difficulty: 2,
      description: "Use prompt() to ask the user's name and console.log a custom greeting.",
      requirements: ["Use prompt to capture input", "Store the input in a variable using `let`", "Log a personalized greeting"],
      starterCode: { html: "<p>Watch for the prompt and check the console</p>", javascript: "// your code" },
      hints: ["let name = prompt('Your name?')", "console.log('Hello ' + name)"],
      solution: { html: "<p>Watch for the prompt and check the console</p>", javascript: "let name = prompt('What is your name?');\nconsole.log('Hello, ' + name + '! Welcome to JavaScript.');" },
      solutionExplanation: "prompt() shows an input dialog and returns the typed text. We store it in `name`, then build a greeting using the + operator to concatenate strings.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "js01-q1", type: "mcq", question: "Who created JavaScript?", options: ["Bill Gates", "Brendan Eich", "Tim Berners-Lee", "Linus Torvalds"], correctAnswer: 1, explanation: "Brendan Eich created JavaScript at Netscape in 1995, in 10 days.", difficulty: 1 },
      { id: "js01-q2", type: "true-false", question: "JavaScript and Java are essentially the same language.", options: ["True", "False"], correctAnswer: 1, explanation: "False. They share a name purely for marketing reasons. They are completely different languages.", difficulty: 1 },
      { id: "js01-q3", type: "mcq", question: "What is the official spec name for JavaScript?", options: ["WebScript", "ECMAScript", "JavaSpec", "MDN Standard"], correctAnswer: 1, explanation: "ECMAScript is the official standardized specification. JavaScript is the most popular implementation.", difficulty: 2 },
      { id: "js01-q4", type: "mcq", question: "Which engine powers Chrome and Node.js?", options: ["SpiderMonkey", "JavaScriptCore", "V8", "Chakra"], correctAnswer: 2, explanation: "V8 was created by Google and is used by Chrome, Edge, Node.js, Deno, and Electron-based apps.", difficulty: 2 },
      { id: "js01-q5", type: "mcq", question: "Which function prints to the developer console?", options: ["print()", "console.log()", "echo()", "System.out()"], correctAnswer: 1, explanation: "console.log() is the standard way to print/debug values to the browser console.", difficulty: 1 },
      { id: "js01-q6", type: "code-output", question: "What does this print?", code: "console.log(2 + '2');", options: ["4", "'4'", "'22'", "Error"], correctAnswer: 2, explanation: "When + is used with a string, JavaScript concatenates rather than adds. 2 becomes '2', then '2' + '2' = '22'. We'll cover type coercion in chapter 6.", difficulty: 3 },
      { id: "js01-q7", type: "mcq", question: "Which of these is NOT a place JavaScript can run?", options: ["Web browsers", "Node.js servers", "Inside Microsoft Excel directly without any wrapper", "Electron desktop apps"], correctAnswer: 2, explanation: "Excel uses VBA, not JavaScript natively. (Office Scripts in Excel Online uses TypeScript-like JS, but classic Excel doesn't.)", difficulty: 2 },
      { id: "js01-q8", type: "mcq", question: "What does JIT stand for in 'JIT compilation'?", options: ["Java In Time", "Just In Time", "Just Inline Translation", "Java Internal Type"], correctAnswer: 1, explanation: "Just-In-Time. The engine compiles code to machine instructions on-the-fly as it runs, rather than ahead of time.", difficulty: 2 },
    ],
  },
  cheatSheet: [
    { label: "Created by", value: "Brendan Eich, Netscape, 1995" },
    { label: "Spec name", value: "ECMAScript (ES)" },
    { label: "Major engines", value: "V8 (Chrome), SpiderMonkey (Firefox), JSC (Safari)" },
    { label: "Runs in", value: "Browsers, Node, Deno, Electron, mobile, embedded" },
    { label: "Console output", value: "console.log(value)" },
    { label: "User input", value: "prompt('question')" },
    { label: "Popup", value: "alert('message')" },
  ],
};

// ============================================================================
// REMAINING CHAPTERS (structured stubs)
// ============================================================================
const part1: Chapter[] = [
  ch01,
  jsCh02,
  jsCh03,
  jsCh04,
  jsCh05,
  jsCh06,
  jsCh07,
  jsCh08,
  jsCh09,
];

const part2: Chapter[] = [
  jsCh10,
  jsCh11,
  jsCh12,
  jsCh13,
  jsCh14,
  jsCh15,
  jsCh16,
  jsCh17,
  jsCh18,
  jsCh19,
  jsCh20,
];

const part3: Chapter[] = [
  jsCh21,
  jsCh22,
  jsCh23,
  jsCh24,
  jsCh25,
  jsCh26,
  jsCh27,
  jsCh28,
  jsCh29,
  jsCh30,
];

const part4: Chapter[] = [
  jsCh31,
  jsCh32,
  jsCh33,
  jsCh34,
  jsCh35,
  jsCh36,
  jsCh37,
  jsCh38,
  jsCh39,
  jsCh40,
];

const part5: Chapter[] = [
  jsCh41,
  jsCh42,
  jsCh43,
  jsCh44,
  jsCh45,
  jsCh46,
  jsCh47,
  jsCh48,
  jsCh49,
  jsCh50,
  jsCh51,
  jsCh52,
  jsCh53,
  jsCh54,
  jsCh55,
];

const part6: Chapter[] = [
  jsCh56,
  jsCh57,
  jsCh58,
  jsCh59,
  jsCh60,
  jsCh61,
  jsCh62,
  jsCh63,
  jsCh64,
  jsCh65,
  jsCh66,
  jsCh67,
  jsCh68,
  jsCh69,
  jsCh70,
];

const part7: Chapter[] = [
  makeStub(66, "Project: Todo App", "CRUD + localStorage.", "Intermediate", "Part 7: Projects", "js-ch-65"),
  makeStub(67, "Project: Weather App", "Fetch API + DOM.", "Intermediate", "Part 7: Projects", "js-ch-66"),
  makeStub(68, "Project: Quiz Game", "Timer and score.", "Intermediate", "Part 7: Projects", "js-ch-67"),
  makeStub(69, "Project: Kanban Board", "Drag & drop + IndexedDB.", "Advanced", "Part 7: Projects", "js-ch-68"),
  makeStub(70, "JS Mastery Recap & Cert Quiz", "Final cumulative quiz.", "Expert", "Part 7: Projects", "js-ch-69"),
];

export const jsChapters: Chapter[] = [...part1, ...part2, ...part3, ...part4, ...part5, ...part6, ...part7];
