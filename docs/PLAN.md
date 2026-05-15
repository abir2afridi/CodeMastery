# CODEMASTERY — FULL MASTER PROMPT
# Zero-to-Pro HTML, CSS & JavaScript Learning Platform
# Stack: Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion

You are a senior full-stack engineer and expert educator. Build a complete production-ready programming learning platform called **CodeMastery** where an absolute beginner — someone who has never written a single line of code — can go from zero to professional-level mastery in HTML, CSS, and JavaScript. Every concept, no matter how tiny, must be explained. Do not skip anything. Do not use placeholder content. Every lesson must be real, accurate, and deeply educational.

---

## CORE PHILOSOPHY

The #1 rule: A user who has never used a computer for coding should be able to open this website, start Chapter 1, and eventually become job-ready — using only this platform. This means:

- NEVER assume prior knowledge in any chapter
- EVERY chapter starts with WHY this topic matters before HOW to use it
- EVERY concept gets a real-world analogy first, then technical explanation
- EVERY code example is runnable in the built-in compiler
- EVERY chapter has micro-exercises (not just at the end — throughout)
- If a topic needs 500 sub-levels, build 500 sub-levels
- Quality > Speed. Depth > Breadth.

---

## DESIGN SYSTEM

Theme: Dark mode default. Space/terminal aesthetic.
Primary bg: #0A0E1A
Card bg: #0F1629
Border: #1E2A45
Electric blue accent: #00D4FF
Violet accent: #7C3AED
Green (success): #10B981
Amber (warning): #F59E0B
Red (error): #EF4444
Text primary: #E2E8F0
Text muted: #64748B

Fonts (Google Fonts):
- Headings: "Space Grotesk"
- Body: "Inter"
- Code: "JetBrains Mono"

UI patterns: Glassmorphism cards, subtle grid background, neon glow on active elements, smooth Framer Motion transitions on all page changes and interactions.

---

## PROJECT STRUCTURE

```
/app
  /page.tsx                              ← Landing page
  /setup/page.tsx                        ← First visit: name input + track selection
  /learn/page.tsx                        ← Main dashboard (3 tracks)
  /learn/[track]/page.tsx                ← Track overview with full chapter list
  /learn/[track]/[chapterId]/page.tsx    ← Lesson page (main learning view)
  /learn/[track]/[chapterId]/practice/page.tsx  ← Practice exercises for that chapter
  /quiz/[track]/[chapterId]/page.tsx     ← Chapter quiz
  /compiler/page.tsx                     ← Standalone full-screen compiler
  /certificate/[certId]/page.tsx         ← Certificate view + download
  /profile/page.tsx                      ← User stats, XP, streak, completed chapters

/components
  /layout/Navbar.tsx
  /layout/Sidebar.tsx
  /lesson/LessonContent.tsx              ← Renders MDX lesson content
  /lesson/CodeBlock.tsx                  ← Syntax-highlighted code with "Try it" button
  /lesson/CalloutBox.tsx                 ← Info / Warning / Tip / Error callout boxes
  /lesson/MiniCompiler.tsx               ← Inline mini compiler within lesson
  /compiler/FullCompiler.tsx             ← 4-panel compiler (HTML/CSS/JS/Preview)
  /quiz/QuizCard.tsx
  /quiz/QuizResult.tsx
  /certificate/CertificateCanvas.tsx     ← Beautiful certificate component
  /ui/ProgressBar.tsx
  /ui/XPBadge.tsx
  /ui/DifficultyBadge.tsx
  /ui/StreakCounter.tsx
  /ui/LevelBadge.tsx

/lib
  /curriculum
    /html-curriculum.ts                  ← ALL HTML lessons (50+ chapters)
    /css-curriculum.ts                   ← ALL CSS lessons (55+ chapters)
    /js-curriculum.ts                    ← ALL JS lessons (70+ chapters)
    /index.ts                            ← Exports all tracks
  /progress.ts                           ← localStorage read/write
  /certificate.ts                        ← Certificate ID generator + html2canvas + jsPDF
  /xp.ts                                 ← XP calculation system
  /streak.ts                             ← Daily streak tracking

/hooks
  /useProgress.ts
  /useXP.ts
  /useStreak.ts
  /useChapterUnlock.ts
```

---

## DATA STRUCTURES

```typescript
// /lib/curriculum/types.ts

export interface Track {
  id: "html" | "css" | "javascript";
  title: string;
  tagline: string;
  icon: string;
  color: string;
  totalChapters: number;
  estimatedHours: number;
  chapters: Chapter[];
}

export interface Chapter {
  id: string;                    // e.g. "html-ch-01"
  number: number;
  title: string;
  subtitle: string;              // One-line description
  difficulty: "Absolute Beginner" | "Beginner" | "Intermediate" | "Advanced" | "Expert";
  estimatedMinutes: number;
  xpReward: number;
  prerequisites: string[];       // chapter IDs that must be completed first
  learningObjectives: string[];  // What the student will be able to DO after this chapter
  sections: Section[];
  exercises: Exercise[];         // Practice exercises at end
  quiz: Quiz;
  cheatSheet: CheatSheetItem[];  // Quick reference card
  project?: MiniProject;         // Larger hands-on project (at end of parts)
}

export interface Section {
  id: string;
  title: string;
  content: string;               // Full detailed text (markdown, never placeholder)
  realWorldAnalogy?: string;     // Analogy before technical explanation
  whyItMatters: string;          // Why this concept exists
  codeExamples: CodeExample[];
  callouts: Callout[];           // Tips, warnings, common mistakes
  microExercise?: MicroExercise; // Quick 1-2 min inline exercise
  deepDive?: string;             // Extra optional depth content (collapsible)
  visualDiagram?: string;        // SVG or HTML diagram description
}

export interface CodeExample {
  id: string;
  title: string;
  description: string;
  code: {
    html?: string;
    css?: string;
    javascript?: string;
  };
  explanation: string;          // Line-by-line explanation of the code
  output?: string;              // What the user will see when they run it
  tryItPrompt: string;          // "Try changing X to see what happens"
  commonVariations: string[];   // Other ways to write this
}

export interface Callout {
  type: "tip" | "warning" | "error" | "info" | "analogy" | "common-mistake" | "pro-tip";
  title: string;
  content: string;
}

export interface MicroExercise {
  instruction: string;
  starterCode: { html?: string; css?: string; javascript?: string; };
  hint: string;
  solution: { html?: string; css?: string; javascript?: string; };
}

export interface Exercise {
  id: string;
  title: string;
  difficulty: 1 | 2 | 3;       // 1=easy, 2=medium, 3=hard
  description: string;
  requirements: string[];       // Checklist of what the exercise needs
  starterCode: { html?: string; css?: string; javascript?: string; };
  hints: string[];              // Progressive hints (3 levels)
  solution: { html?: string; css?: string; javascript?: string; };
  solutionExplanation: string;
}

export interface Quiz {
  questions: QuizQuestion[];    // Minimum 8 per chapter
  passingScore: number;         // 80
  timeLimit?: number;           // seconds (optional)
}

export interface QuizQuestion {
  id: string;
  type: "mcq" | "true-false" | "fill-blank" | "code-output" | "spot-the-bug";
  question: string;
  code?: string;                // For code-output and spot-the-bug types
  options?: string[];           // For MCQ
  correctAnswer: string | number;
  explanation: string;          // Detailed explanation shown after answering
  difficulty: 1 | 2 | 3;
}

export interface UserProgress {
  name: string;
  createdAt: string;
  lastActiveAt: string;
  currentStreak: number;
  longestStreak: number;
  totalXP: number;
  tracks: {
    [trackId: string]: TrackProgress;
  };
}

export interface TrackProgress {
  started: boolean;
  startedAt?: string;
  completedAt?: string;
  currentChapterId?: string;
  chapters: {
    [chapterId: string]: ChapterProgress;
  };
  certificateId?: string;
  certificateIssuedAt?: string;
}

export interface ChapterProgress {
  status: "locked" | "not_started" | "in_progress" | "completed";
  completedAt?: string;
  quizScore?: number;
  quizAttempts: number;
  exercisesCompleted: number;
  totalExercises: number;
  timeSpentMinutes: number;
  xpEarned: number;
}
```

---

## COMPILER SYSTEM (Most important feature)

Build a powerful 4-panel live code compiler. This is the heart of the platform.

### FullCompiler Component (/compiler/page.tsx + /components/compiler/FullCompiler.tsx)

Layout:
- Top bar: "CodeMastery Compiler" logo, panel toggles, fullscreen button, share button, reset button
- Left side (60%): Three editor panels stacked — HTML, CSS, JavaScript
  - Each panel has: colored header (orange/HTML, blue/CSS, yellow/JS), CodeMirror 6 editor
  - Panels are resizable (drag to resize)
  - Each panel has: copy button, collapse button, format button
- Right side (40%): Live preview iframe
  - Updates in real-time (debounced 300ms) as user types
  - Shows actual rendered output
  - Has "Open in new tab" button
  - Has device size toggles: Desktop / Tablet / Mobile (changes iframe width)
- Bottom bar: Console output (catches JS errors and console.log statements)

### MiniCompiler Component (embedded in lessons)

Each code example in lessons has a mini version:
- Shows the pre-filled code example
- Has "Run Code" button → shows output in an iframe below
- Has "Edit & Try" button → opens the code in full compiler with this code pre-loaded
- Has "Reset" button → resets to original example code
- Shows syntax highlighting with line numbers

Implementation:
- Use CodeMirror 6 for ALL editors
  - @codemirror/lang-html, @codemirror/lang-css, @codemirror/lang-javascript
  - Theme: custom dark theme matching the site
- Live preview iframe: combine HTML + CSS + JS into a single srcdoc string
- Console capture: wrap the iframe with a script that overrides console.log/error/warn
  and postMessages the output to the parent

Dependencies:
```bash
npm install @codemirror/state @codemirror/view @codemirror/lang-html 
  @codemirror/lang-css @codemirror/lang-javascript @codemirror/theme-one-dark
  @uiw/react-codemirror framer-motion html2canvas jspdf canvas-confetti
  lucide-react next-themes
```

---

## FULL CURRICULUM — HTML TRACK (50 Chapters)

Build this in /lib/curriculum/html-curriculum.ts with COMPLETE content (no placeholders):

=== PART 1: THE ABSOLUTE BEGINNING (Chapters 1–6) ===

Chapter 1: "What Even Is a Website?" (Absolute Beginner)
Learning objectives:
- Understand what HTML is and why it exists
- Understand the relationship between HTML, CSS, and JavaScript
- Know what a browser does
- Be able to explain the web stack in simple terms

Sections (write each section with 400-600 words minimum):
1.1 — The Real World Analogy: Think of a website like a house
  - HTML = the structure/walls/rooms (content and skeleton)
  - CSS = the paint, furniture, decoration (how it looks)
  - JavaScript = the electricity, plumbing, doors that open (how it behaves)
  - Content: Full analogy walkthrough. What happens when you type a URL. What a browser actually does. DNS explained like a phonebook. HTTP like a postal service. Servers like restaurants.

1.2 — A Brief History of HTML
  - Tim Berners-Lee, CERN, 1991
  - Why HTML was invented (sharing research documents)
  - HTML 1 → HTML 2 → HTML 3.2 → HTML 4 → XHTML → HTML5 (2014)
  - What is the W3C and WHATWG
  - Why this history matters for you as a developer

1.3 — What is a Browser and How Does It Work?
  - List: Chrome, Firefox, Safari, Edge, Opera
  - The rendering engine (Blink, WebKit, Gecko)
  - Step by step: what happens when you press Enter on a URL
  - The browser downloads HTML → parses it → downloads CSS → applies styles → downloads JS → executes it → you see a page
  - Developer Tools: how to open them (F12 / Cmd+Option+I), what the tabs mean

1.4 — Setting Up Your First Tools
  - What is a text editor vs a word processor (Word vs VS Code)
  - Install VS Code (step by step with screenshots description)
  - Essential VS Code settings for beginners (auto-save, word wrap, format on save)
  - Install the "Live Server" extension (step by step)
  - Install the "Prettier" extension
  - What is a file extension? (.html, .css, .js, .png etc.)
  - Creating your first project folder

Chapter 2: Your Very First HTML File (Absolute Beginner)
2.1 — Creating a File
  - Open VS Code → File → New File → Save As → "index.html"
  - Why files are named "index.html" (web server default page)
  - File naming rules: no spaces, lowercase, use hyphens, no special characters
  - Where to save files (Desktop or Documents — create a "my-projects" folder)
  - What happens if you just double-click the .html file (opens in browser)

2.2 — The Magic First Lines
  - Type this EXACT code in the file:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My First Web Page</title>
    </head>
    <body>
      <h1>Hello, World!</h1>
      <p>I made my first website!</p>
    </body>
    </html>
    ```
  - Now click "Go Live" in VS Code bottom bar
  - You should see your page in the browser!
  - Line-by-line breakdown of EVERY single character in this code
  - Why this is called a "boilerplate" or "template"

2.3 — Understanding Tags
  - What is a tag? < and > are angle brackets, the word inside is the tag name
  - Opening tag: <tagname>
  - Closing tag: </tagname> (note the forward slash)
  - Everything between opening and closing tag is the "content"
  - Self-closing tags (no content needed): like <br> and <img>
  - Tags are NOT case sensitive but ALWAYS use lowercase (industry standard)
  - Tags can be nested inside each other (like boxes inside boxes)
  - Whitespace (spaces/enters) between tags is ignored by the browser

2.4 — The DOCTYPE Declaration
  - What is <!DOCTYPE html>?
  - History: why DOCTYPE existed (browser wars, quirks mode vs standards mode)
  - HTML5 simplified it to just <!DOCTYPE html>
  - It must ALWAYS be the very first line of every HTML file
  - Without it: "quirks mode" — old broken rendering
  - Common mistake: putting a space or blank line before DOCTYPE

2.5 — The HTML, Head, and Body Tags
  - <html lang="en"> — the root element, wraps EVERYTHING
    - lang attribute: tells browsers/screen readers/search engines the language
    - lang="en" for English, lang="bn" for Bengali, full list of codes
  - <head> — invisible metadata about the page (not shown to users)
    - Everything in here is for the browser, not the visitor
  - <body> — everything visible goes here
    - All text, images, buttons, forms go inside <body>

Chapter 3: Text in HTML (Absolute Beginner)
[Write full sections for headings h1-h6 with full explanation of hierarchy, paragraphs, line breaks, horizontal rules, all text formatting tags with real use cases and examples]

Chapter 4: Links — Connecting the Web (Absolute Beginner)
[Full sections: what is a hyperlink, href attribute, absolute vs relative URLs, mailto and tel links, same page anchor links, target="_blank" security issue, download attribute, styling visited/hover states]

Chapter 5: Images (Absolute Beginner)
[Full sections: img tag, src attribute, alt attribute (accessibility + SEO), width/height, file formats explained (JPEG vs PNG vs WebP vs SVG vs GIF), loading="lazy", broken image handling, using free image sources]

Chapter 6: Lists (Absolute Beginner)
[Full sections: unordered list, ordered list, list items, nested lists, description lists, when to use each type, list in navigation menus]

=== PART 2: STRUCTURE & LAYOUT (Chapters 7–14) ===

Chapter 7: HTML Structure Deep Dive
Chapter 8: Tables — Full Deep Dive
Chapter 9: Forms — Part 1 (Text inputs, labels, buttons)
Chapter 10: Forms — Part 2 (Checkboxes, radios, selects, textarea)
Chapter 11: Forms — Part 3 (File upload, date/time, range, color, validation)
Chapter 12: Semantic HTML — Why Structure Matters
Chapter 13: The Head Element — Everything About Metadata
Chapter 14: Linking Resources (CSS files, JS files, favicons)

[Each chapter: same depth as chapters 1-6. Full sections, multiple code examples, callouts, micro-exercises]

=== PART 3: MEDIA & EMBEDS (Chapters 15–20) ===

Chapter 15: Audio and Video
Chapter 16: iFrames and Embeds
Chapter 17: SVG in HTML — Introduction
Chapter 18: Canvas Element Basics
Chapter 19: HTML5 APIs (localStorage preview, Geolocation)
Chapter 20: Special Characters and Entities

=== PART 4: ACCESSIBILITY (Chapters 21–26) ===

Chapter 21: What is Web Accessibility and Why It Matters
Chapter 22: ARIA Roles and Attributes
Chapter 23: Keyboard Navigation
Chapter 24: Screen Readers
Chapter 25: Forms and Accessibility
Chapter 26: Images and Accessibility

=== PART 5: SEO & PERFORMANCE (Chapters 27–32) ===

Chapter 27: How Search Engines Read HTML
Chapter 28: Meta Tags for SEO
Chapter 29: Open Graph and Social Sharing
Chapter 30: Structured Data and Schema.org
Chapter 31: HTML Performance (Critical Rendering Path)
Chapter 32: HTML Validation and Best Practices

=== PART 6: ADVANCED HTML (Chapters 33–40) ===

Chapter 33: Web Components Intro
Chapter 34: Template and Slot Elements
Chapter 35: HTML Dialog Element
Chapter 36: Details and Summary
Chapter 37: Progressive Web Apps and Manifest
Chapter 38: Microdata
Chapter 39: HTML Email Basics
Chapter 40: Common HTML Anti-Patterns and Code Review

=== PART 7: PROJECTS (Chapters 41–50) ===

Chapter 41: Project — Personal Bio Page (Beginner)
Chapter 42: Project — Recipe Page with Tables and Forms
Chapter 43: Project — Photo Gallery Page
Chapter 44: Project — Multi-page Website (Home + About + Contact)
Chapter 45: Project — Accessible Form with Validation
Chapter 46: Mini Challenge Set 1 (10 small challenges)
Chapter 47: Mini Challenge Set 2 (10 medium challenges)
Chapter 48: Mini Challenge Set 3 (10 hard challenges)
Chapter 49: Code Review — Common HTML Mistakes
Chapter 50: HTML Mastery Recap + Certificate Prep Quiz

---

## FULL CURRICULUM — CSS TRACK (55 Chapters)

/lib/curriculum/css-curriculum.ts — all content written in full:

=== PART 1: CSS FUNDAMENTALS (Chapters 1–8) ===

Chapter 1: What is CSS and How Does It Work?
- The browser's default stylesheet and why pages have basic styling without CSS
- Three ways to add CSS (inline, internal, external) with pros/cons of each
- How the browser parses CSS — the CSSOM
- CSS rule anatomy: selector, property, value, declaration, rule, ruleset

Chapter 2: Your First CSS File
- Creating style.css, linking it to HTML with <link>
- rel="stylesheet", href path (relative), type attribute (optional in HTML5)
- Changing colors, fonts, and sizes — first wins
- Using the browser DevTools to inspect and live-edit CSS

Chapter 3: CSS Selectors — Part 1
- Universal selector (*)
- Element selector (p, h1, div)
- Class selector (.my-class) — multiple classes on one element, one class on multiple elements
- ID selector (#my-id) — should be unique per page, not recommended for CSS
- Grouping selectors (h1, h2, h3 { })
- Attribute selectors: [href], [href="value"], [href^="https"], [href$=".pdf"], [href*="google"]

Chapter 4: CSS Selectors — Part 2
- Descendant combinator (div p)
- Child combinator (div > p)
- Adjacent sibling combinator (h1 + p)
- General sibling combinator (h1 ~ p)
- Pseudo-classes: :hover, :focus, :active, :visited, :link
- Structural pseudo-classes: :first-child, :last-child, :nth-child(n), :nth-of-type(n), :only-child
- :not(), :is(), :where(), :has() — the parent selector

Chapter 5: Specificity and the Cascade
- The full specificity calculation system (a,b,c,d scoring)
- !important — when and why to avoid it
- The cascade order: browser default → user styles → author styles → author !important
- Inheritance — which properties inherit and which don't
- CSS reset and normalize — why and how

Chapter 6: The Box Model (Most Important CSS Concept)
- Every element is a box: content → padding → border → margin
- content-box vs border-box (always use border-box)
- Margin collapsing — the most confusing CSS behavior, explained in detail
- Negative margins
- display: block vs inline box model differences

Chapter 7: Colors and Backgrounds
- All color formats: named, hex, rgb, rgba, hsl, hsla, oklch (modern)
- background-color, background-image, background-repeat, background-size
- background-position, background-attachment (fixed parallax effect)
- background shorthand
- Multiple backgrounds
- Gradients as backgrounds (preview — full chapter later)

Chapter 8: Typography in CSS
- font-family with system font stacks and Google Fonts
- @font-face — how to use custom fonts
- font-size with every unit: px, em, rem, vw, %, clamp()
- font-weight (100-900, named values)
- line-height and why 1.5-1.7 is ideal for body text
- letter-spacing, word-spacing
- text-align, text-indent, text-decoration, text-transform
- All text properties with examples

=== PART 2: LAYOUT (Chapters 9–20) ===

Chapter 9: The Display Property
Chapter 10: CSS Units — The Complete Guide
Chapter 11: Positioning (static, relative, absolute, fixed, sticky)
Chapter 12: Z-index and Stacking Contexts
Chapter 13: Flexbox — Part 1 (Container Properties)
Chapter 14: Flexbox — Part 2 (Item Properties + Real Layouts)
Chapter 15: CSS Grid — Part 1 (Defining the Grid)
Chapter 16: CSS Grid — Part 2 (Placing Items + Advanced)
Chapter 17: Responsive Design — Part 1 (Media Queries)
Chapter 18: Responsive Design — Part 2 (Fluid Typography + Containers)
Chapter 19: CSS Variables
Chapter 20: Float and Clear (Legacy + Still Valid Uses)

=== PART 3: VISUAL EFFECTS (Chapters 21–30) ===

Chapter 21: Borders, Shadows, and Outlines
Chapter 22: CSS Gradients — Complete Guide
Chapter 23: CSS Transforms
Chapter 24: CSS Transitions
Chapter 25: CSS Animations — Part 1
Chapter 26: CSS Animations — Part 2 + Performance
Chapter 27: CSS Filters and Backdrop Filter
Chapter 28: Blend Modes
Chapter 29: Clip-path and Shapes
Chapter 30: Scroll Behavior and Snap

=== PART 4: ADVANCED (Chapters 31–44) ===

Chapter 31: Pseudo-elements (::before, ::after, ::selection, ::placeholder)
Chapter 32: CSS Custom Properties Advanced Patterns
Chapter 33: calc(), min(), max(), clamp()
Chapter 34: CSS Architecture — BEM
Chapter 35: CSS Architecture — ITCSS and Layers (@layer)
Chapter 36: Dark Mode Implementation
Chapter 37: CSS Accessibility
Chapter 38: Sass/SCSS Introduction
Chapter 39: Tailwind CSS Introduction
Chapter 40: CSS Performance and Optimization
Chapter 41: CSS Debugging Techniques
Chapter 42: Print Styles
Chapter 43: Modern CSS (nesting, :has(), subgrid, container queries)
Chapter 44: CSS Grid Advanced (masonry, magazine layouts)

=== PART 5: PROJECTS (Chapters 45–55) ===

Chapter 45: Project — Styled Personal Portfolio (Beginner)
Chapter 46: Project — Responsive Blog Layout
Chapter 47: Project — Landing Page with Animations
Chapter 48: Project — Dashboard UI (Dark Theme)
Chapter 49: Project — E-commerce Product Card
Chapter 50: Project — CSS Art (Pure CSS illustration)
Chapter 51: Mini Challenge Set 1
Chapter 52: Mini Challenge Set 2
Chapter 53: Mini Challenge Set 3
Chapter 54: Code Review — Common CSS Mistakes
Chapter 55: CSS Mastery Recap + Certificate Prep

---

## FULL CURRICULUM — JAVASCRIPT TRACK (70 Chapters)

/lib/curriculum/js-curriculum.ts — all content written in full:

=== PART 1: JS ABSOLUTE BASICS (Chapters 1–10) ===

Chapter 1: What is JavaScript? The Language of the Web
- History: Brendan Eich, 10 days, Netscape 1995
- JavaScript vs Java (completely different, same name was marketing)
- ECMAScript — the specification behind JavaScript
- JavaScript engines: V8 (Chrome/Node), SpiderMonkey (Firefox), JavaScriptCore (Safari)
- Where JavaScript runs: browser, server (Node.js), desktop (Electron), mobile (React Native)
- How JS is interpreted: just-in-time (JIT) compilation explained simply
- What you can build with JS: websites, apps, games, servers, CLI tools, AI

Chapter 2: Your First JavaScript
- Three ways to add JS to HTML: inline onclick, internal <script>, external .js file
- Why external .js files are best (separation of concerns)
- Where to put <script> tag (end of body vs head with defer)
- defer vs async explained clearly with diagrams
- console.log() — your best friend for debugging
- The browser console — how to open it, how to use it as a REPL
- alert(), confirm(), prompt() — quick I/O functions
- Your first script: a greeting message

Chapter 3: Variables
- What is a variable? (A labeled box that stores a value — full analogy)
- Three ways to declare: var, let, const
- var: function-scoped, hoisted, can be re-declared (OLD — avoid)
- let: block-scoped, not hoisted to usable state, can be reassigned (USE THIS)
- const: block-scoped, must be initialized, CANNOT be reassigned (USE FOR CONSTANTS)
- Naming rules: camelCase, cannot start with number, no spaces, no hyphens
- Good naming: descriptive (userAge not x), meaningful (productPrice not price2)
- Case sensitivity: userName ≠ username ≠ UserName

Chapter 4: Data Types — The Building Blocks
- JavaScript has 8 data types (7 primitive + 1 object)
- typeof operator — checking the type of a value
- STRING: text, wrapped in quotes (single, double, backtick)
  - All 3 quote types — when to use each
  - Escape sequences: \n, \t, \\, \', \"
  - Template literals (backtick strings) — multi-line and interpolation with ${expression}
- NUMBER: integers and decimals (JavaScript has only one number type)
  - Integers: 42, -7, 0
  - Floats: 3.14, -0.5, 1000.99
  - Special values: Infinity, -Infinity, NaN (Not a Number)
  - Maximum safe integer: Number.MAX_SAFE_INTEGER
  - The famous 0.1 + 0.2 ≠ 0.3 problem and why it happens (IEEE 754)
- BOOLEAN: true or false only (no other values)
  - Comparisons return booleans
  - Used in if conditions
- UNDEFINED: declared but not assigned
- NULL: intentionally empty value (typeof null === "object" bug explained)
- BIGINT: for huge integers (number followed by n)
- SYMBOL: unique identifiers (advanced)
- OBJECT: everything else (arrays, functions, dates, etc.)

Chapter 5: Operators — All of Them
[Full sections on arithmetic, assignment, comparison (== vs ===), logical, bitwise, ternary, nullish coalescing, optional chaining, typeof, instanceof, in, comma, void — with examples for EVERY operator]

Chapter 6: Type Coercion — JavaScript's Quirks
[Implicit vs explicit coercion, truthy/falsy values complete list, == coercion rules, why 0 == false but 0 !== false, string + number = string, number + boolean = number, null == undefined but null !== 0]

Chapter 7: Conditionals — Making Decisions
[if, else if, else, switch with all edge cases, ternary operator, short-circuit evaluation, nullish coalescing for default values, optional chaining]

Chapter 8: Loops — Repeating Actions
[for loop anatomy, while loop, do-while, for...of (arrays and strings), for...in (objects — and why to avoid for arrays), break and continue, labeled statements, infinite loop — what it is and how to avoid it]

Chapter 9: Functions — Part 1
[Function declarations, function expressions, parameters vs arguments, default parameters, rest parameters, return values, hoisting difference between declaration and expression, functions as values]

Chapter 10: Functions — Part 2
[Arrow functions all syntax forms, this in arrow functions, IIFE, higher-order functions, callbacks, closures introduction, recursion with examples]

=== PART 2: WORKING WITH DATA (Chapters 11–20) ===

Chapter 11: Strings — Deep Dive (All 40+ methods)
Chapter 12: Numbers — Math Object and Number Methods
Chapter 13: Arrays — Part 1 (Creation, access, basic methods)
Chapter 14: Arrays — Part 2 (map, filter, reduce, forEach, find, sort)
Chapter 15: Arrays — Part 3 (Spread, destructuring, flat, chaining)
Chapter 16: Objects — Part 1 (Literals, access, methods, this)
Chapter 17: Objects — Part 2 (Spread, destructuring, Object.keys/values/entries)
Chapter 18: Objects — Part 3 (Property descriptors, freeze, seal, create)
Chapter 19: Date and Time
Chapter 20: Regular Expressions

=== PART 3: SCOPE, CLOSURES, OOP (Chapters 21–30) ===

Chapter 21: Scope — Global, Function, Block
Chapter 22: Closures — Deep Dive with 5 Real Use Cases
Chapter 23: Hoisting — Full Explanation
Chapter 24: Prototype Chain
Chapter 25: Classes — Part 1 (Basics, constructor, methods)
Chapter 26: Classes — Part 2 (Inheritance, private fields, static)
Chapter 27: The "this" Keyword — Complete Guide
Chapter 28: Map, Set, WeakMap, WeakSet
Chapter 29: Iterators and Generators
Chapter 30: Symbols and Metaprogramming

=== PART 4: ASYNC JAVASCRIPT (Chapters 31–40) ===

Chapter 31: The JavaScript Runtime (Event Loop, Call Stack, Queues)
Chapter 32: Callbacks and Callback Hell
Chapter 33: Promises — Part 1
Chapter 34: Promises — Part 2 (Promise.all, race, allSettled, any)
Chapter 35: Async/Await
Chapter 36: The Fetch API and HTTP
Chapter 37: Working with REST APIs
Chapter 38: Error Handling — try/catch/finally, Custom Errors
Chapter 39: JSON — Parse, Stringify, Deep Work
Chapter 40: Local Storage, Session Storage, Cookies

=== PART 5: DOM AND BROWSER (Chapters 41–55) ===

Chapter 41: The DOM — What Is It?
Chapter 42: Selecting Elements
Chapter 43: Reading and Changing Content
Chapter 44: Creating, Adding, Removing Elements
Chapter 45: Working with Attributes, Classes, Styles
Chapter 46: Events — Part 1 (addEventListener, event object)
Chapter 47: Events — Part 2 (Bubbling, capturing, delegation)
Chapter 48: Forms in JavaScript
Chapter 49: Timers (setTimeout, setInterval, requestAnimationFrame)
Chapter 50: Scroll Events and IntersectionObserver
Chapter 51: Drag and Drop API
Chapter 52: Browser Storage — IndexedDB
Chapter 53: Web APIs Collection (Clipboard, Vibration, Share, etc.)
Chapter 54: Canvas API — Drawing with JavaScript
Chapter 55: Web Workers

=== PART 6: MODERN JS AND ECOSYSTEM (Chapters 56–65) ===

Chapter 56: ES Modules (import/export, dynamic import)
Chapter 57: Functional Programming Concepts
Chapter 58: Design Patterns (Singleton, Observer, Factory, Strategy, Module)
Chapter 59: TypeScript Introduction
Chapter 60: Build Tools (npm, Vite, Webpack basics)
Chapter 61: Testing (Vitest, unit tests, async tests)
Chapter 62: Security in JavaScript (XSS, CSRF, CSP)
Chapter 63: Performance Optimization
Chapter 64: Debugging Techniques (DevTools, breakpoints, profiler)
Chapter 65: Memory Management

=== PART 7: PROJECTS (Chapters 66–70) ===

Chapter 66: Project — Interactive Todo App (CRUD + LocalStorage)
Chapter 67: Project — Weather App (Fetch API + DOM)
Chapter 68: Project — Quiz Game with Timer and Score
Chapter 69: Project — Kanban Board (Drag & Drop + IndexedDB)
Chapter 70: JavaScript Mastery Recap + Certificate Prep

---

## LESSON PAGE LAYOUT (/learn/[track]/[chapterId]/page.tsx)

This is the most critical page — build it perfectly:

Left sidebar (20%):
- Current track name and icon
- Progress bar (chapters completed)
- Full scrollable chapter list
  - Each chapter: number, title, lock icon (if locked), checkmark (if done), current highlight
  - Color-coded difficulty badges
  - Click to navigate (only if unlocked)

Main content area (55%):
- Sticky top bar: breadcrumb + chapter number + estimated time + Mark Complete button
- Chapter title (large) + subtitle + difficulty badge + XP badge
- Learning objectives box (styled, bulleted list)
- Chapter content rendered section by section:
  - Each section has a title, content (full text), real-world analogy box, why-it-matters box
  - After each section: inline CodeExample with MiniCompiler
  - Callout boxes: color-coded (tip=blue, warning=amber, error=red, common-mistake=coral)
  - Micro-exercises (collapsible with hint and solution buttons)
  - Deep dive sections (click to expand extra depth content)
- After all sections: Practice Exercises panel (3 exercises: easy/medium/hard)
- Bottom: "Chapter Complete — Take Quiz" CTA button

Right sidebar (25%):
- Scroll-spy table of contents (highlights current section as you scroll)
- Quick reference / cheat sheet card for this chapter
- Related chapters
- "Need help?" links

The Mark Complete button:
- Only appears after user has scrolled through 90% of content
- When clicked: marks chapter as complete, awards XP, shows celebration animation
- Then prompts: "Take the Quiz to unlock next chapter"

---

## QUIZ PAGE (/quiz/[track]/[chapterId]/page.tsx)

- Timer bar at top (optional, controlled per quiz)
- Question type rendering:
  - MCQ: styled radio buttons, 4 options
  - True/False: 2 large buttons
  - Fill in the blank: styled text input
  - Code output: syntax-highlighted code block → "What does this output?" 
  - Spot the bug: broken code shown → user clicks the line with the bug
- After each answer:
  - Show ✓ or ✗ with color animation
  - Show detailed explanation (never just "correct" — always explain WHY)
  - Show the next question button
- Results screen:
  - Animated score circle
  - Pass (≥80%): "Chapter Unlocked! 🎉" + confetti + XP reward shown + Next chapter button
  - Fail (<80%): List of wrong answers with explanations + "Review Chapter" + "Retry Quiz" buttons
  - All quiz attempts are recorded in progress

---

## CERTIFICATE SYSTEM

When a user completes ALL chapters in a track with ≥80% on every quiz:

1. Auto-trigger: Confetti explosion (canvas-confetti)
2. Show congratulations modal: "You have mastered HTML! 🏆"
3. Generate certificate ID: "CM-HTML-1778430388807-W7S3NY"
4. Save to localStorage with timestamp
5. Redirect to /certificate/[certId]

Certificate design (/components/certificate/CertificateCanvas.tsx):
- 1200×850px canvas (landscape A4 ratio)
- Deep navy background with subtle grid
- Gold ornamental border (CSS border with box-shadow glow)
- "CodeMastery" logo at top center
- Decorative divider line
- "CERTIFICATE OF MASTERY" heading
- "This is to certify that"
- Student name in large cursive-style font (Playfair Display or similar)
- "has successfully completed the"
- Track name in electric blue accent color
- "Mastery Track with a score of X%"
- Issue date (formatted: April 17, 2026)
- Certificate ID (small, bottom right)
- Two download buttons:
  - "Download PNG" — uses html2canvas to capture the certificate div
  - "Download PDF" — uses jsPDF with html2canvas
- "Share on LinkedIn" button

---

## PROGRESS AND GAMIFICATION SYSTEM

XP system:
- Complete a chapter: +100 XP
- Pass quiz first try: +50 XP bonus
- Pass quiz with 100%: +100 XP bonus
- Complete a practice exercise (easy): +20 XP
- Complete a practice exercise (medium): +40 XP
- Complete a practice exercise (hard): +80 XP
- Daily login streak: +10 XP per day

Levels:
- Level 1: 0–500 XP (Newcomer)
- Level 2: 500–1500 XP (Explorer)
- Level 3: 1500–3500 XP (Builder)
- Level 4: 3500–7000 XP (Developer)
- Level 5: 7000–12000 XP (Coder)
- Level 6: 12000–20000 XP (Engineer)
- Level 7: 20000+ XP (Master)

Level-up: animated modal with new title + XP breakdown

---

## IMPLEMENTATION ORDER

Implement in EXACTLY this order. Complete each step fully before moving on:

Step 1: Set up Next.js 14 project with TypeScript and Tailwind
Step 2: Create the design system (colors, typography, reusable UI components)
Step 3: Build the data types (/lib/curriculum/types.ts)
Step 4: Write the COMPLETE HTML curriculum (/lib/curriculum/html-curriculum.ts)
   - All 50 chapters with REAL content (not placeholder text)
   - Full section content (400+ words per section)
   - All code examples with full explanations
   - All quiz questions (8+ per chapter) with detailed explanations
   - All practice exercises with hints and solutions
Step 5: Write the COMPLETE CSS curriculum (/lib/curriculum/css-curriculum.ts)
Step 6: Write the COMPLETE JS curriculum (/lib/curriculum/js-curriculum.ts)
Step 7: Progress system (useProgress hook, localStorage)
Step 8: XP and streak system
Step 9: Landing page with animated hero
Step 10: Setup page (first visit — enter name, pick starting track)
Step 11: Dashboard page
Step 12: Track overview page with chapter list sidebar
Step 13: Lesson page (full implementation)
Step 14: MiniCompiler component (embedded in lessons)
Step 15: Quiz page (all question types)
Step 16: Practice exercises page
Step 17: Full 4-panel Compiler page
Step 18: Certificate component and generation
Step 19: Certificate download page
Step 20: Profile page (stats, XP, history)
Step 21: Mobile responsive (all pages)
Step 22: Page transitions (Framer Motion)
Step 23: Loading states and error handling
Step 24: Final polish and testing

---

## QUALITY REQUIREMENTS — NON-NEGOTIABLE

1. ZERO placeholder content. Every chapter must have real educational text.
2. Every section: minimum 400 words of explanation
3. Every code example must be syntactically correct and runnable
4. Every quiz question must have a thorough explanation (not just "correct!")
5. The compiler must work in real-time (debounced updates)
6. Console output from preview iframe must be captured and shown
7. Chapter locking must work correctly (cannot skip ahead without completing previous)
8. Certificate only issues when ALL chapters done + ALL quizzes ≥80%
9. Full TypeScript strict mode — zero type errors
10. Fully responsive on mobile (360px) through desktop (1920px)
11. All text must be readable (WCAG AA contrast minimum)
12. No broken links or missing routes
13. Progress must persist across browser sessions (localStorage)
14. All Framer Motion animations must respect prefers-reduced-motion
15. Code highlighting must work for all 3 languages in every context

---

## SPECIAL NOTES ON CURRICULUM DEPTH

The curriculum must be written as if by an expert teacher who deeply cares about their student never being confused. For each concept:

- Start with WHY it exists in the real world
- Give a non-technical analogy first
- Then show the technical reality
- Show the simplest possible example
- Show the common real-world use case
- Show what happens when you make the most common mistake
- Explain how to recognize and fix that mistake
- Give a "deep dive" section for curious students
- End with a memorable summary sentence

For absolute beginner chapters (Part 1 of each track), write as if you are explaining to someone who has never written code and may be afraid of making mistakes. Be warm, encouraging, and never condescending.
