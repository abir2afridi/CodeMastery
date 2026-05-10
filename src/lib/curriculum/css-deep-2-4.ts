import type { Chapter } from "./types";

// ============================================================================
// CSS CHAPTER 2 — YOUR FIRST CSS FILE
// ============================================================================
export const cssCh02: Chapter = {
  id: "css-ch-02",
  number: 2,
  title: "Your First CSS File",
  subtitle: "Three ways to add CSS to a page, and which one to actually use.",
  difficulty: "Absolute Beginner",
  estimatedMinutes: 30,
  xpReward: 100,
  prerequisites: ["css-ch-01"],
  partLabel: "Part 1: CSS Fundamentals",
  learningObjectives: [
    "Write CSS in inline, internal, and external forms.",
    "Link an external stylesheet to an HTML page using <link>.",
    "Understand the cascade order when multiple stylesheets exist.",
    "Use comments to organize and document CSS.",
    "Recognize why external stylesheets are the professional standard.",
  ],
  sections: [
    {
      id: "ch02-s1",
      title: "Three Ways to Add CSS",
      whyItMatters: "Knowing all three methods means you can read any codebase you encounter and you can pick the right method for each situation. Each one has a real use case.",
      realWorldAnalogy: "Inline CSS is like writing a sticky note on a single object. Internal CSS is like a house style guide pinned in the kitchen. External CSS is like a corporate brand book — one document everyone references.",
      content: `**Method 1 — Inline CSS** lives directly on an element, inside a \`style\` attribute:

\`\`\`html
<p style="color: red; font-size: 24px;">Hello</p>
\`\`\`

Inline CSS only affects the single element it's written on. It is the highest-priority form of CSS (overrides everything except \`!important\`), which makes it both powerful and dangerous. Use sparingly — for one-off overrides, dynamically-set styles from JavaScript, or HTML emails (where external stylesheets often don't work).

**Method 2 — Internal CSS** lives inside a \`<style>\` tag in the HTML document's \`<head>\`:

\`\`\`html
<head>
  <style>
    p { color: red; font-size: 24px; }
  </style>
</head>
\`\`\`

Internal CSS affects every matching element on the page. It's good for one-off pages, prototypes, or above-the-fold critical CSS. The downside: it only applies to that one HTML file. If you have 10 pages, you'd have to copy the styles into all 10.

**Method 3 — External CSS** lives in its own \`.css\` file and is linked from the HTML \`<head>\`:

\`\`\`html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
\`\`\`

\`\`\`css
/* styles.css */
p { color: red; font-size: 24px; }
\`\`\`

External CSS is the professional standard. One file styles every page. The browser caches it, so visiting a second page doesn't re-download the styles. This is how 99% of real-world websites work.`,
      codeExamples: [
        {
          id: "ch02-s1-ex1",
          title: "All three methods on one page",
          description: "See all three styles applied at once. Inline wins because it's most specific.",
          code: {
            html: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      /* Internal CSS */\n      p { color: blue; font-size: 18px; }\n    </style>\n  </head>\n  <body>\n    <p>I'm blue (internal CSS)</p>\n    <p style="color: red;">I'm red (inline overrides internal)</p>\n  </body>\n</html>`,
          },
          explanation: "Both paragraphs match the internal `p` rule, but the second one's inline style overrides just the color. Font size still comes from internal CSS.",
          tryItPrompt: "Add a third paragraph and try giving it a green color via inline style.",
        },
      ],
      callouts: [
        { type: "tip", title: "Pick external CSS by default", content: "Unless you have a specific reason to use inline or internal, always use an external .css file. It's cacheable, reusable, and easier to maintain." },
      ],
    },
    {
      id: "ch02-s2",
      title: "How <link> Works",
      whyItMatters: "Almost every CSS bug starts with a stylesheet that didn't load. Understanding the link tag prevents 90% of 'why isn't my CSS working?' moments.",
      content: `The \`<link>\` tag connects an external CSS file to an HTML document. Three attributes matter:

**rel="stylesheet"** tells the browser this is a CSS stylesheet (not a favicon, not an alternate version). Always required.

**href="..."** is the path to the .css file. Same URL rules as links and images: absolute, root-relative, or relative.

**media="..."** (optional) restricts when the stylesheet applies. \`media="print"\` only loads it for printing; \`media="(max-width: 600px)"\` only loads on small screens. Useful for performance — the browser doesn't block on stylesheets it doesn't currently need.

\`\`\`html
<head>
  <link rel="stylesheet" href="/css/main.css">
  <link rel="stylesheet" href="/css/print.css" media="print">
</head>
\`\`\`

The \`<link>\` tag must live inside \`<head>\` (placing it in \`<body>\` is invalid and triggers a slow re-render). It's a void element — no closing tag.

You can link multiple stylesheets to the same page. They cascade in the order they appear: later ones override earlier ones for conflicting rules. This is why the order of your link tags matters.`,
      codeExamples: [
        {
          id: "ch02-s2-ex1",
          title: "Multiple stylesheets cascading",
          description: "Two stylesheets, both setting the body color. The second wins because it loads later.",
          code: {
            html: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>body { color: blue; }</style>\n    <style>body { color: green; }</style>\n  </head>\n  <body>\n    <p>I'm green because the second style block wins.</p>\n  </body>\n</html>`,
          },
          explanation: "When two stylesheets set the same property, the one that loads later wins (assuming equal specificity, which we'll cover in Chapter 4).",
          tryItPrompt: "Swap the order of the two style blocks. Now the paragraph should be blue.",
        },
      ],
      callouts: [
        { type: "common-mistake", title: "Wrong path = silent failure", content: "If <link href> points to a file that doesn't exist, the browser does NOT show an error — it just silently uses no styles. Open DevTools Network tab to confirm your CSS file loaded." },
        { type: "warning", title: "Don't put <link> in <body>", content: "It's invalid HTML and causes a 'flash of unstyled content' (FOUC) before the styles apply. Always in <head>." },
      ],
      microExercise: {
        instruction: "Link an external stylesheet called 'theme.css' from the same folder as your HTML.",
        starterCode: { html: `<!DOCTYPE html>\n<html>\n  <head>\n    <title>My page</title>\n    <!-- add link here -->\n  </head>\n  <body><h1>Hi</h1></body>\n</html>` },
        hint: "<link rel=\"...\" href=\"...\">",
        solution: { html: `<!DOCTYPE html>\n<html>\n  <head>\n    <title>My page</title>\n    <link rel="stylesheet" href="theme.css">\n  </head>\n  <body><h1>Hi</h1></body>\n</html>` },
      },
    },
    {
      id: "ch02-s3",
      title: "CSS Syntax: Rules, Selectors, Declarations",
      whyItMatters: "Every line of CSS you'll ever write follows the same shape. Master the anatomy and the rest is just learning property names.",
      content: `Every CSS rule has the same structure:

\`\`\`css
selector {
  property: value;
  property: value;
}
\`\`\`

**Selector** — the part that picks which HTML elements to style. Examples: \`p\` (all paragraphs), \`.button\` (all elements with class "button"), \`#header\` (the element with id "header"). We'll cover selectors in depth in the next chapter.

**Curly braces** \`{ }\` wrap the **declaration block** — the actual styles to apply.

**Property** — what you want to change. \`color\`, \`font-size\`, \`margin\`, \`background\`, etc. There are over 500 CSS properties; you'll use about 50 regularly.

**Colon** \`:\` separates property from value.

**Value** — what to set the property to. \`red\`, \`24px\`, \`1.5em\`, \`linear-gradient(...)\`, etc. Some properties accept many types of values.

**Semicolon** \`;\` ends each declaration. The semicolon after the last declaration is optional but always include it — adding new declarations later is easier when every line ends with one.

**Comments** start with \`/*\` and end with \`*/\`. They can span multiple lines. CSS doesn't support \`//\` single-line comments (that's JavaScript).

\`\`\`css
/* This is a comment */
.button {
  background: blue;     /* The button's background */
  color: white;         /* The text color */
  padding: 12px 24px;   /* Spacing inside */
  border-radius: 6px;
}
\`\`\``,
      codeExamples: [
        {
          id: "ch02-s3-ex1",
          title: "Anatomy of a rule, annotated",
          description: "Every part of CSS syntax in a single tiny example.",
          code: {
            html: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      /* This rule styles all <h1> elements */\n      h1 {\n        color: hotpink;\n        font-size: 48px;\n        text-align: center;\n      }\n    </style>\n  </head>\n  <body>\n    <h1>I am styled by CSS</h1>\n  </body>\n</html>`,
          },
          explanation: "Selector: h1. Three declarations inside the block. Each declaration is property: value;.",
          tryItPrompt: "Add a fourth declaration: text-transform: uppercase. Reload to see the heading become ALL CAPS.",
        },
      ],
      callouts: [
        { type: "common-mistake", title: "Missing semicolons cascade silently", content: "If you forget a semicolon, CSS often skips the broken declaration AND the next one. When 'a property won't apply,' check the previous declaration for a missing semicolon." },
        { type: "pro-tip", title: "Use comments to section your CSS", content: "Pros write big comment banners like /* === LAYOUT === */ to organize files. Future you will thank present you." },
      ],
    },
    {
      id: "ch02-s4",
      title: "Where CSS Lives in a Real Project",
      whyItMatters: "Knowing the conventions used in real codebases means you can jump into any project without spending an hour figuring out where the styles are.",
      content: `Real-world projects organize CSS in patterns. The most common:

**Single file** for tiny sites: \`styles.css\` in the root or in a \`/css\` folder. Beginner-friendly.

**Multiple files by purpose**: \`reset.css\`, \`typography.css\`, \`layout.css\`, \`components.css\`. Each one is linked separately, and they cascade in the order linked. Common in older codebases.

**One file per component**: \`button.css\`, \`card.css\`, \`navbar.css\`. Modern frontend frameworks (React, Vue, Svelte) often use this style with CSS Modules or scoped styles.

**Utility-first** (Tailwind): a single huge stylesheet of small utility classes (\`.text-red-500\`, \`.p-4\`, \`.flex\`). You apply them directly in HTML. Becoming the dominant approach in 2024+.

**CSS-in-JS**: styles are written inside JavaScript files, scoped to components, and injected at runtime. Used by libraries like styled-components, Emotion.

For your first months learning CSS, stick with one external stylesheet linked from the HTML. As you grow into frameworks and bigger projects, you'll naturally encounter the other patterns.`,
      callouts: [
        { type: "info", title: "Reset and normalize", content: "Browsers apply different default styles. A 'CSS reset' (like reset.css) or 'normalize' file evens out the defaults so your styles look the same everywhere. Many frameworks include one automatically." },
      ],
      deepDive: `**Critical CSS** is a performance technique where the styles needed for the above-the-fold content are inlined in <style> tags in the head, while the rest is loaded asynchronously. This makes the page render visually before the full stylesheet downloads. Tools like Critters and Penthouse automate this.

**Cache busting**: Browsers cache external CSS aggressively. When you update a file, the browser may keep using the old version. Pros add a query string or hash to the filename: \`<link href="styles.css?v=20240115">\` or \`styles.abc123.css\`. Build tools (Vite, Webpack) do this automatically.

**HTTP/2 and bundling**: in the past, every linked CSS file required a separate HTTP request, so pros bundled everything into one file for performance. With HTTP/2 and HTTP/3, multiple small files can be just as fast — sometimes faster, because partial caches can be reused. Modern best practice is "many small files, but use a build tool that knows what it's doing."`,
    },
  ],
  exercises: [
    {
      id: "css-ch-02-ex1",
      title: "Three rules, three properties each",
      difficulty: 1,
      description: "Style a page with three different elements (h1, p, and a div) using internal CSS. Each rule should set at least three properties.",
      requirements: ["Use internal <style> tag", "Three different selectors", "At least three declarations per rule"],
      starterCode: { html: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      /* your rules */\n    </style>\n  </head>\n  <body>\n    <h1>Title</h1>\n    <p>Some text</p>\n    <div>A div</div>\n  </body>\n</html>` },
      hints: ["Try color, font-size, font-weight, padding, background, border for inspiration"],
      solution: {
        html: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      h1 {\n        color: navy;\n        font-size: 36px;\n        text-align: center;\n      }\n      p {\n        color: #333;\n        font-size: 18px;\n        line-height: 1.6;\n      }\n      div {\n        background: lightyellow;\n        padding: 16px;\n        border-radius: 8px;\n      }\n    </style>\n  </head>\n  <body>\n    <h1>Title</h1>\n    <p>Some text</p>\n    <div>A div</div>\n  </body>\n</html>`,
      },
      solutionExplanation: "Three rules, three declarations each. Notice each rule's selector matches its element type.",
    },
    {
      id: "css-ch-02-ex2",
      title: "Cascade demonstration",
      difficulty: 2,
      description: "Create a page where two rules try to style the same heading: one sets red, the other sets blue. Make blue win, then swap the order to make red win.",
      requirements: ["Two style blocks (or rules) targeting the same element", "Demonstrate that order determines the winner"],
      starterCode: { html: `<!DOCTYPE html>\n<html>\n  <head>\n    <!-- two competing styles -->\n  </head>\n  <body><h1>What color?</h1></body>\n</html>` },
      hints: ["Order in the source is what determines the winner when specificity ties"],
      solution: {
        html: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>h1 { color: red; }</style>\n    <style>h1 { color: blue; }</style>\n  </head>\n  <body><h1>What color?</h1></body>\n</html>`,
      },
      solutionExplanation: "Heading is blue because the blue rule loads after the red rule. Swap them and red wins. This is the cascade — the C in CSS.",
    },
    {
      id: "css-ch-02-ex3",
      title: "Inline overrides everything",
      difficulty: 1,
      description: "Make a paragraph red via internal CSS, then override it to green using inline style on that single paragraph.",
      requirements: ["Internal CSS sets paragraphs to red", "Inline style on one paragraph overrides to green"],
      starterCode: { html: `<!DOCTYPE html>\n<html>\n  <head><style>/* internal */</style></head>\n  <body>\n    <p>Should be red</p>\n    <p>Should be green</p>\n  </body>\n</html>` },
      hints: ["Inline style attribute syntax: style=\"color: green;\""],
      solution: {
        html: `<!DOCTYPE html>\n<html>\n  <head><style>p { color: red; }</style></head>\n  <body>\n    <p>Should be red</p>\n    <p style="color: green;">Should be green</p>\n  </body>\n</html>`,
      },
      solutionExplanation: "Inline style has higher specificity than any selector in <style>. The first paragraph stays red; the second is overridden to green.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "css-ch-02-q1",
        type: "mcq",
        question: "Which method is the professional standard for adding CSS to a website?",
        options: ["Inline style attributes", "Internal <style> tags", "External .css files linked with <link>", "JavaScript injection"],
        correctAnswer: 2,
        explanation: "External stylesheets are cacheable, reusable across pages, and easy to maintain — the standard approach.",
        difficulty: 1,
      },
      {
        id: "css-ch-02-q2",
        type: "mcq",
        question: "Where should the <link> tag for a stylesheet go?",
        options: ["Inside <body>", "Inside <head>", "Anywhere", "Inside <footer>"],
        correctAnswer: 1,
        explanation: "Always in <head>. Placing it in <body> is invalid and causes flashes of unstyled content.",
        difficulty: 1,
      },
      {
        id: "css-ch-02-q3",
        type: "spot-the-bug",
        question: "Why doesn't the second paragraph turn red?",
        code: `<style>\n  p { color: red\n  font-size: 18px;\n}\n</style>\n<p>One</p>\n<p>Two</p>`,
        options: [
          "p selector is wrong",
          "Missing semicolon after 'red' breaks the rule",
          "color: red isn't valid",
          "Need !important",
        ],
        correctAnswer: 1,
        explanation: "The missing semicolon makes the parser treat 'red font-size: 18px' as a single invalid value, dropping the color entirely.",
        difficulty: 2,
      },
      {
        id: "css-ch-02-q4",
        type: "mcq",
        question: "If two stylesheets both set h1 color and have equal specificity, which wins?",
        options: ["The first one linked", "The last one linked", "The shorter one", "Neither — it's a conflict"],
        correctAnswer: 1,
        explanation: "When specificity is equal, source order decides — later wins. This is the C (cascade) in CSS.",
        difficulty: 2,
      },
      {
        id: "css-ch-02-q5",
        type: "true-false",
        question: "CSS supports // for single-line comments.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "Only /* ... */ works in CSS. // is JavaScript syntax.",
        difficulty: 1,
      },
    ],
  },
  cheatSheet: [
    { label: "External link", value: '<link rel="stylesheet" href="styles.css">' },
    { label: "Internal CSS", value: '<style>p { color: red; }</style>' },
    { label: "Inline CSS", value: '<p style="color: red;">' },
    { label: "Rule shape", value: 'selector { property: value; }' },
    { label: "Comment", value: '/* like this */' },
    { label: "Multiple stylesheets", value: 'Cascade in source order — later wins' },
  ],
};

// ============================================================================
// CSS CHAPTER 3 — SELECTORS
// ============================================================================
export const cssCh03: Chapter = {
  id: "css-ch-03",
  number: 3,
  title: "Selectors",
  subtitle: "How CSS picks which elements to style. The single most important skill in the language.",
  difficulty: "Beginner",
  estimatedMinutes: 45,
  xpReward: 130,
  prerequisites: ["css-ch-02"],
  partLabel: "Part 1: CSS Fundamentals",
  learningObjectives: [
    "Use type, class, and id selectors and know when each is appropriate.",
    "Combine selectors with descendant, child, sibling, and grouping combinators.",
    "Apply attribute selectors to target elements by their attributes and values.",
    "Use pseudo-classes (:hover, :focus, :first-child, :nth-child) for state and position.",
    "Use pseudo-elements (::before, ::after) to add decorative content without HTML changes.",
  ],
  sections: [
    {
      id: "ch03-s1",
      title: "The Big Three: Type, Class, ID",
      whyItMatters: "These three account for ~80% of all selectors in real-world CSS. Get comfortable with them and you can read most stylesheets you'll encounter.",
      realWorldAnalogy: "Type selectors are like 'all chairs in this room.' Classes are like 'all chairs marked with a blue sticker.' IDs are like 'the unique chair labeled VIP.'",
      content: `**Type selector** matches every element of a given HTML tag. Just write the tag name:

\`\`\`css
p { color: gray; }       /* every paragraph */
button { padding: 8px; } /* every button */
\`\`\`

Type selectors are the broadest tool. Use them for site-wide defaults — body text color, link styling, default button padding.

**Class selector** matches elements with a specific \`class\` attribute. Write a dot \`.\` followed by the class name:

\`\`\`html
<button class="primary">Save</button>
<button class="primary danger">Delete</button>
\`\`\`

\`\`\`css
.primary { background: blue; color: white; }
.danger  { background: red; }
\`\`\`

The "Delete" button has both classes, so it gets both rule sets. The danger rule wins for background because it loads later. Classes are the workhorse of CSS — most styles you write target classes.

**ID selector** matches the single element with a specific \`id\` attribute. Write a hash \`#\` followed by the id:

\`\`\`html
<header id="site-header">...</header>
\`\`\`

\`\`\`css
#site-header { background: navy; }
\`\`\`

IDs must be unique on a page (only one \`id="site-header"\` allowed). For that reason, IDs are mostly avoided in CSS — classes are more reusable. Use IDs for genuinely-unique elements like the page header, or for JavaScript hooks.`,
      codeExamples: [
        {
          id: "ch03-s1-ex1",
          title: "All three in action",
          description: "One element styled by type, class, and id at once.",
          code: {
            html: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      button { padding: 12px 24px; border: none; border-radius: 6px; }\n      .primary { background: #3b82f6; color: white; }\n      #save-button { font-weight: bold; box-shadow: 0 4px 12px rgba(0,0,0,0.2); }\n    </style>\n  </head>\n  <body>\n    <button>Plain</button>\n    <button class="primary">Primary</button>\n    <button class="primary" id="save-button">Save</button>\n  </body>\n</html>`,
          },
          explanation: "All three buttons get padding (type). Two get blue background (class). The last gets bold + shadow (id). Layered styling at three levels.",
          tryItPrompt: "Add a fourth button with class='primary danger' and a new .danger rule with red background.",
        },
      ],
      callouts: [
        { type: "tip", title: "Prefer classes over IDs", content: "IDs have very high specificity, which makes overrides annoying. Classes are reusable. As a rule of thumb: 95% classes, 5% IDs." },
      ],
    },
    {
      id: "ch03-s2",
      title: "Combining Selectors: Descendant, Child, Sibling, Group",
      whyItMatters: "Combinators let you write rules that say 'links inside the navigation' without touching the HTML. They're how you keep CSS clean as a project grows.",
      content: `**Descendant combinator** (space) — matches an element inside another, at any nesting depth:

\`\`\`css
nav a { color: white; }   /* every <a> anywhere inside <nav> */
\`\`\`

**Child combinator** (\`>\`) — matches direct children only:

\`\`\`css
ul > li { padding: 8px; }   /* only top-level <li>, not nested ones */
\`\`\`

**Adjacent sibling combinator** (\`+\`) — matches an element directly after another:

\`\`\`css
h2 + p { margin-top: 0; }   /* the paragraph IMMEDIATELY after an h2 */
\`\`\`

**General sibling combinator** (\`~\`) — matches all siblings after another:

\`\`\`css
h2 ~ p { color: gray; }   /* every <p> that follows an <h2> at the same level */
\`\`\`

**Selector list** (comma) — applies the same styles to multiple selectors:

\`\`\`css
h1, h2, h3 { font-family: Georgia, serif; }   /* all three */
\`\`\``,
      codeExamples: [
        {
          id: "ch03-s2-ex1",
          title: "Descendant vs child",
          description: "Compare the difference between space and >.",
          code: {
            html: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      ul li { color: blue; }       /* every li inside ul, including nested */\n      ul > li { font-weight: bold; } /* only direct children */\n    </style>\n  </head>\n  <body>\n    <ul>\n      <li>Top level (blue, bold)</li>\n      <li>Top level\n        <ul>\n          <li>Nested (blue, NOT bold)</li>\n        </ul>\n      </li>\n    </ul>\n  </body>\n</html>`,
          },
          explanation: "The descendant selector matches both levels. The child selector matches only direct children, so the nested item stays normal weight.",
          tryItPrompt: "Add a third level of nesting and observe which styles still apply.",
        },
      ],
      callouts: [
        { type: "pro-tip", title: "Group to dry up your CSS", content: "If three selectors share styles, group them: `h1, h2, h3 { ... }`. Don't repeat yourself." },
      ],
      microExercise: {
        instruction: "Make every paragraph DIRECTLY inside a div bold, but NOT paragraphs nested deeper.",
        starterCode: {
          html: `<style>\n  /* your rule */\n</style>\n<div>\n  <p>Bold</p>\n  <section><p>Not bold</p></section>\n</div>`,
        },
        hint: "Use the > combinator.",
        solution: {
          html: `<style>\n  div > p { font-weight: bold; }\n</style>\n<div>\n  <p>Bold</p>\n  <section><p>Not bold</p></section>\n</div>`,
        },
      },
    },
    {
      id: "ch03-s3",
      title: "Attribute Selectors",
      whyItMatters: "When you need to style elements based on their attributes — like input types or links to external sites — attribute selectors are the cleanest tool.",
      content: `Attribute selectors target elements by what attributes they have or what those attributes contain.

\`\`\`css
[disabled]              /* any element with a disabled attribute */
[type="email"]          /* exact match */
[href^="https"]         /* starts with */
[href$=".pdf"]          /* ends with */
[class*="btn"]          /* contains */
[lang|="en"]            /* exactly "en" or starts with "en-" */
\`\`\`

The four operators \`^=\`, \`$=\`, \`*=\`, and \`|=\` are powerful. Real-world examples:

\`\`\`css
/* Style all email inputs */
input[type="email"] { border: 1px solid #aaa; }

/* Mark external links with an icon */
a[href^="http"]::after { content: " ↗"; }

/* Style PDF download links */
a[href$=".pdf"]::before { content: "📄 "; }

/* Disabled buttons get a muted look */
button[disabled] { opacity: 0.5; cursor: not-allowed; }
\`\`\`

Attribute selectors work without any class needed in the HTML — you target what's already there. They're also case-sensitive by default; add \`i\` to make case-insensitive: \`[type="email" i]\`.`,
      codeExamples: [
        {
          id: "ch03-s3-ex1",
          title: "External link icon, automatically",
          description: "Append an arrow to every link that starts with http (i.e., external links).",
          code: {
            html: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      a[href^="http"]::after { content: " ↗"; color: #888; }\n    </style>\n  </head>\n  <body>\n    <p><a href="/about">Internal</a> | <a href="https://wikipedia.org">Wikipedia</a></p>\n  </body>\n</html>`,
          },
          explanation: "The internal link stays plain. The external one automatically gets an arrow — without any class on the HTML.",
          tryItPrompt: "Add a third link to a .pdf file and use [href$='.pdf']::before to add a 📄 icon.",
        },
      ],
    },
    {
      id: "ch03-s4",
      title: "Pseudo-classes: States and Positions",
      whyItMatters: "Pseudo-classes are how you style hover effects, focus rings, every other table row, the first item in a list, and dozens of other patterns you see daily.",
      content: `Pseudo-classes start with a single colon and select elements based on **state** or **position**, not on the markup.

**State pseudo-classes** describe how the user is interacting:

\`\`\`css
a:hover    { color: red; }           /* mouse over the link */
a:focus    { outline: 2px solid blue; } /* keyboard focus */
a:active   { color: pink; }          /* being clicked right now */
a:visited  { color: purple; }        /* user has visited this URL before */
input:disabled { background: #eee; }
input:checked  { ... }               /* for checkboxes/radios */
\`\`\`

**Position pseudo-classes** describe the element's place among siblings:

\`\`\`css
li:first-child  { font-weight: bold; }
li:last-child   { border: none; }
li:nth-child(2) { color: red; }      /* the 2nd <li> */
li:nth-child(odd) { background: #f5f5f5; }   /* zebra stripes */
li:nth-child(even) { background: white; }
li:nth-child(3n)  { color: blue; }   /* every 3rd item */
\`\`\`

\`:nth-child()\` is incredibly powerful. The argument can be a number, a keyword (odd, even), or a formula like \`3n+1\` (every 3rd starting from 1).

**Negation:**

\`\`\`css
button:not(.disabled) { cursor: pointer; }
\`\`\`

**Has** (modern, supported in all major browsers since 2023):

\`\`\`css
li:has(img) { padding: 12px; }   /* list items that contain an image */
\`\`\``,
      codeExamples: [
        {
          id: "ch03-s4-ex1",
          title: "Hover, focus, and zebra stripes",
          description: "Three pseudo-classes for free interactivity and polish.",
          code: {
            html: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      table { border-collapse: collapse; width: 100%; }\n      td { padding: 8px 12px; border-bottom: 1px solid #eee; }\n      tr:nth-child(odd)  { background: #f9f9f9; }\n      tr:hover           { background: #fff3cd; }\n      a:hover            { color: tomato; }\n      a:focus            { outline: 3px solid #6366f1; outline-offset: 2px; }\n    </style>\n  </head>\n  <body>\n    <table>\n      <tr><td>Row 1</td><td><a href="#">Link</a></td></tr>\n      <tr><td>Row 2</td><td><a href="#">Link</a></td></tr>\n      <tr><td>Row 3</td><td><a href="#">Link</a></td></tr>\n      <tr><td>Row 4</td><td><a href="#">Link</a></td></tr>\n    </table>\n  </body>\n</html>`,
          },
          explanation: "Rows alternate colors. Hovering a row highlights it. Tabbing to a link adds a focus ring. All free, no JavaScript.",
          tryItPrompt: "Tab through the page with the keyboard. The focus ring proves your page is keyboard-accessible — a critical a11y feature.",
        },
      ],
      callouts: [
        { type: "warning", title: "Never remove focus styles", content: "Many beginners write `*:focus { outline: none; }` because they think it looks cleaner. This breaks the page for keyboard users — they can no longer tell where they are. Style focus, don't hide it." },
      ],
    },
    {
      id: "ch03-s5",
      title: "Pseudo-elements: ::before and ::after",
      whyItMatters: "Pseudo-elements let you add decorative content (icons, quotes, badges, dividers) without bloating your HTML. They're a CSS superpower.",
      content: `Pseudo-elements use a double colon \`::\` and create a virtual element that doesn't exist in the HTML. The two main ones:

**::before** inserts content at the start of an element's contents.
**::after** inserts content at the end.

Both REQUIRE a \`content\` property — even an empty one (\`content: ""\`) — or they don't render.

\`\`\`css
.quote::before { content: "\\201C"; font-size: 2em; }   /* "  curly quote */
.quote::after  { content: "\\201D"; }                   /*  " */
\`\`\`

Common patterns:

\`\`\`css
/* Required field marker */
label.required::after { content: " *"; color: red; }

/* External link icon */
a[target="_blank"]::after { content: " ↗"; }

/* Custom underline that doesn't sit on the descenders */
.fancy-link {
  position: relative;
}
.fancy-link::after {
  content: "";
  position: absolute;
  left: 0; bottom: -2px;
  width: 100%; height: 2px;
  background: currentColor;
  transform: scaleX(0);
  transition: transform 0.3s;
}
.fancy-link:hover::after { transform: scaleX(1); }
\`\`\`

That last example is a fancy hover-underline animation built entirely from CSS — no extra HTML.`,
      codeExamples: [
        {
          id: "ch03-s5-ex1",
          title: "Required field marker",
          description: "Add a red asterisk to required form labels without changing the HTML.",
          code: {
            html: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      label { display: block; margin: 8px 0 4px; font-family: sans-serif; }\n      label.required::after { content: " *"; color: red; font-weight: bold; }\n      input { padding: 6px 10px; border: 1px solid #ccc; border-radius: 4px; }\n    </style>\n  </head>\n  <body>\n    <label class="required">Name</label>\n    <input>\n    <label>Nickname (optional)</label>\n    <input>\n    <label class="required">Email</label>\n    <input type="email">\n  </body>\n</html>`,
          },
          explanation: "Adding the .required class to a label automatically appends a red asterisk — no extra HTML or JavaScript needed.",
          tryItPrompt: "Make the asterisk pulse using a keyframe animation (we'll cover those in a later chapter).",
        },
      ],
      deepDive: `**Why double colons?** CSS3 introduced the \`::\` syntax to distinguish pseudo-ELEMENTS (real visual content like ::before) from pseudo-CLASSES (states like :hover). For backwards compatibility, browsers still accept the single-colon form (\`:before\`) for the original four pseudo-elements (::before, ::after, ::first-line, ::first-letter). Newer pseudo-elements (::placeholder, ::selection, ::backdrop) require the double colon.

**Generated content can use attributes.** \`content: attr(data-tooltip)\` reads the value of an attribute and displays it. This powers many CSS-only tooltip patterns.

**Pseudo-elements don't appear in the DOM.** They're invisible to JavaScript — \`document.querySelector('::before')\` doesn't work. They're purely a presentational layer added by CSS.`,
    },
  ],
  exercises: [
    {
      id: "css-ch-03-ex1",
      title: "Style by class and ID",
      difficulty: 1,
      description: "Create three buttons: one default, one with class 'primary' (blue), and one with id 'submit' (large + green).",
      requirements: ["Type selector for default button styles", "Class selector for primary", "ID selector for submit"],
      starterCode: { html: `<!DOCTYPE html>\n<html><head><style>\n  /* your rules */\n</style></head>\n<body>\n  <button>Default</button>\n  <button class="primary">Primary</button>\n  <button id="submit">Submit</button>\n</body></html>` },
      hints: ["Use button {} for type, .primary {} for class, #submit {} for ID"],
      solution: {
        html: `<!DOCTYPE html>\n<html><head><style>\n  button { padding: 10px 20px; border: 1px solid #ccc; border-radius: 6px; background: white; cursor: pointer; }\n  .primary { background: #3b82f6; color: white; border-color: #3b82f6; }\n  #submit { background: #10b981; color: white; font-size: 18px; padding: 14px 28px; }\n</style></head>\n<body>\n  <button>Default</button>\n  <button class="primary">Primary</button>\n  <button id="submit">Submit</button>\n</body></html>`,
      },
      solutionExplanation: "Three selector types layer styles. The submit button overrides padding because ID has higher specificity than the type selector.",
    },
    {
      id: "css-ch-03-ex2",
      title: "Zebra-striped table",
      difficulty: 2,
      description: "Style a 5-row table with alternating row colors and a hover highlight.",
      requirements: ["Use :nth-child(odd) or (even)", "Add :hover effect on rows", "Remove default table borders"],
      starterCode: { html: `<table>\n  <tr><td>One</td></tr>\n  <tr><td>Two</td></tr>\n  <tr><td>Three</td></tr>\n  <tr><td>Four</td></tr>\n  <tr><td>Five</td></tr>\n</table>` },
      hints: [":nth-child(odd) targets every other row. tr:hover targets the hovered row."],
      solution: {
        html: `<style>\n  table { border-collapse: collapse; width: 100%; font-family: sans-serif; }\n  td { padding: 12px; border: none; }\n  tr:nth-child(odd) { background: #f3f4f6; }\n  tr:hover { background: #fef3c7; }\n</style>\n<table>\n  <tr><td>One</td></tr>\n  <tr><td>Two</td></tr>\n  <tr><td>Three</td></tr>\n  <tr><td>Four</td></tr>\n  <tr><td>Five</td></tr>\n</table>`,
      },
      solutionExplanation: "nth-child(odd) zebra-stripes the table. tr:hover adds a yellow highlight on mouse over. No JavaScript, no extra HTML.",
    },
    {
      id: "css-ch-03-ex3",
      title: "External link arrows",
      difficulty: 3,
      description: "Use attribute selectors and ::after to add an ↗ icon to all external links (those starting with https) automatically.",
      requirements: ["Use [href^=\"https\"] attribute selector", "Use ::after with content property", "Internal links stay unchanged"],
      starterCode: { html: `<style>\n  /* your rule */\n</style>\n<p><a href="/about">Internal</a> · <a href="https://example.com">External</a> · <a href="/blog">Internal</a></p>` },
      hints: ["The selector is a[href^=\"https\"]::after"],
      solution: {
        html: `<style>\n  a[href^="https"]::after {\n    content: " ↗";\n    color: #888;\n    font-size: 0.85em;\n  }\n</style>\n<p><a href="/about">Internal</a> · <a href="https://example.com">External</a> · <a href="/blog">Internal</a></p>`,
      },
      solutionExplanation: "The attribute selector picks links whose href starts with 'https'. The ::after pseudo-element adds the arrow visually. Internal links remain plain.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "css-ch-03-q1",
        type: "mcq",
        question: "How do you select all elements with class 'card'?",
        options: ["card", "#card", ".card", "*card"],
        correctAnswer: 2,
        explanation: "Class selectors use a leading dot. # is for IDs, no prefix is type, * is universal.",
        difficulty: 1,
      },
      {
        id: "css-ch-03-q2",
        type: "mcq",
        question: "What does `nav > a` select?",
        options: [
          "Every <a> anywhere inside <nav>",
          "Only <a> elements that are direct children of <nav>",
          "The first <a> after <nav>",
          "All <a> and <nav> elements",
        ],
        correctAnswer: 1,
        explanation: "The > combinator means direct child only. <a> nested deeper inside other elements is excluded.",
        difficulty: 2,
      },
      {
        id: "css-ch-03-q3",
        type: "mcq",
        question: "What does `tr:nth-child(odd)` select?",
        options: [
          "The first <tr>",
          "Every <tr> at an odd position (1st, 3rd, 5th, ...)",
          "Every <tr> with an odd number of children",
          "All <tr> elements",
        ],
        correctAnswer: 1,
        explanation: ":nth-child(odd) matches the 1st, 3rd, 5th, etc. siblings. Used for zebra-striping tables.",
        difficulty: 2,
      },
      {
        id: "css-ch-03-q4",
        type: "spot-the-bug",
        question: "Why doesn't the ::before show up?",
        code: `.warning::before { color: red; }`,
        options: [
          ".warning class doesn't exist",
          "Missing content property — pseudo-elements without content don't render",
          "Use ::after instead",
          "Use single colon",
        ],
        correctAnswer: 1,
        explanation: "::before and ::after require a content property to render. Even content: \"\" (empty) is enough.",
        difficulty: 3,
      },
      {
        id: "css-ch-03-q5",
        type: "mcq",
        question: "Which selects every <li> that contains an <img>?",
        options: [
          "li img",
          "li > img",
          "li:has(img)",
          "li + img",
        ],
        correctAnswer: 2,
        explanation: ":has() is the parent selector — it lets you style an element based on its descendants. Modern browsers support it since 2023.",
        difficulty: 3,
      },
    ],
  },
  cheatSheet: [
    { label: "Type", value: "p { ... }" },
    { label: "Class", value: ".btn { ... }" },
    { label: "ID", value: "#header { ... }" },
    { label: "Descendant", value: "nav a (any depth)" },
    { label: "Child", value: "ul > li (direct only)" },
    { label: "Adjacent sibling", value: "h2 + p" },
    { label: "Group", value: "h1, h2, h3 { ... }" },
    { label: "Attribute", value: 'input[type="email"]' },
    { label: "Hover", value: "a:hover" },
    { label: "Nth child", value: "li:nth-child(odd)" },
    { label: "Pseudo-element", value: ".badge::after { content: \"!\"; }" },
  ],
};

// ============================================================================
// CSS CHAPTER 4 — SPECIFICITY & THE CASCADE
// ============================================================================
export const cssCh04: Chapter = {
  id: "css-ch-04",
  number: 4,
  title: "Specificity & The Cascade",
  subtitle: "Why your CSS isn't working — and how to fix it the right way (without !important).",
  difficulty: "Beginner",
  estimatedMinutes: 35,
  xpReward: 110,
  prerequisites: ["css-ch-03"],
  partLabel: "Part 1: CSS Fundamentals",
  learningObjectives: [
    "Calculate the specificity of any selector and predict which rule wins.",
    "Understand the full cascade order: origin, importance, specificity, source order.",
    "Diagnose 'why isn't my style applying' bugs using DevTools.",
    "Use the cascade intentionally instead of fighting it.",
    "Know when (rarely) !important is acceptable.",
  ],
  sections: [
    {
      id: "ch04-s1",
      title: "What 'Cascade' Actually Means",
      whyItMatters: "The C in CSS is Cascade. If you don't understand it, every CSS bug feels like magic. Once you do, every bug becomes a 30-second fix.",
      realWorldAnalogy: "Imagine three judges each give a score for the same gymnastics routine. The cascade is the rulebook that decides whose score wins when they disagree.",
      content: `When the browser is figuring out the final styles for an element, it asks: "How many rules try to set this property?" If only one rule does, easy — that one wins. If multiple rules conflict, the browser uses a tiebreaker procedure called **the cascade**.

The cascade is a sequence of checks, in this order:

**1. Origin & importance.** Where did the rule come from? Browser default, user stylesheet, author (your) stylesheet? And is \`!important\` involved? Author rules win over browser defaults. Important author rules win over normal author rules.

**2. Specificity.** When two author rules conflict, the more specific one wins. Specificity is a score we'll calculate in the next section.

**3. Source order.** When specificity ties, the rule that appears later in the source code wins.

That's it. Three steps, applied in order. Most beginner problems are step 2 (specificity), so we'll spend most of this chapter there.

The cascade applies per property, not per rule. If two rules both target the same element but set different properties, both apply — the cascade only kicks in when properties conflict.`,
      callouts: [
        { type: "info", title: "The cascade is deterministic", content: "There's no randomness. Given the same HTML and CSS, every browser computes the exact same final styles. If something looks different, it's because of the cascade — not a bug." },
      ],
    },
    {
      id: "ch04-s2",
      title: "How to Calculate Specificity",
      whyItMatters: "Once you can score selectors, you can predict and fix any cascade bug in seconds.",
      content: `Every selector has a specificity score with three numbers: **(IDs, Classes, Types)**. Higher numbers beat lower numbers, with leftmost taking priority.

**How to count:**

- Count IDs in the selector → first number
- Count classes, attribute selectors, and pseudo-classes → second number
- Count type selectors and pseudo-elements → third number
- The universal selector (\`*\`) and combinators (\`>\`, \`+\`, \`~\`) count as zero

Examples:

\`\`\`
p                           → (0,0,1)
.btn                        → (0,1,0)
#header                     → (1,0,0)
ul li                       → (0,0,2)
nav a:hover                 → (0,1,2)  /* 1 type+1 type, 1 pseudo-class */
#sidebar .menu li.active    → (1,2,1)
[type="email"]              → (0,1,0)
\`\`\`

**Comparing scores:** read left to right. (1,0,0) beats (0,99,99) because the IDs column wins. (0,2,0) beats (0,1,99) for the same reason on the classes column.

**Inline styles** count as (1,0,0,0) — a fourth column that always wins over any selector. This is why inline style is so powerful (and why you should use it sparingly).

**\`!important\`** lives outside the specificity calculation entirely. An \`!important\` declaration beats any non-important declaration regardless of specificity.

So the full priority order, highest to lowest:
1. Inline style with !important
2. ID/class/type selector with !important  
3. Inline style (no !important)
4. Selectors compared by (ID, class, type) score
5. Browser defaults`,
      codeExamples: [
        {
          id: "ch04-s2-ex1",
          title: "Specificity in action",
          description: "Five rules try to color a single button. Predict the winner before running.",
          code: {
            html: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      button                 { color: black; }      /* (0,0,1) */\n      .btn                   { color: blue; }       /* (0,1,0) */\n      .btn.primary           { color: green; }      /* (0,2,0) */\n      #save                  { color: orange; }     /* (1,0,0) */\n      button.btn.primary#save { color: purple; }    /* (1,2,1) — winner */\n    </style>\n  </head>\n  <body>\n    <button id="save" class="btn primary">What color?</button>\n  </body>\n</html>`,
          },
          explanation: "Read top to bottom by score. (1,2,1) beats (1,0,0), which beats (0,2,0), which beats (0,1,0), which beats (0,0,1). The button is purple.",
          tryItPrompt: "Add a 6th rule with style=\"color: red\" inline. Does it win? (Yes — inline beats all non-important selectors.)",
        },
      ],
      callouts: [
        { type: "pro-tip", title: "DevTools shows specificity", content: "In Chrome DevTools, hover the Styles panel — it shows which rules apply, which are overridden (struck through), and the specificity of each." },
      ],
      microExercise: {
        instruction: "What's the specificity of `header nav ul li.active a:hover`?",
        starterCode: { html: `<!-- Compute on paper, then verify -->` },
        hint: "Count: IDs (none), classes/pseudo-classes (.active + :hover = 2), types (header, nav, ul, li, a = 5).",
        solution: { html: `<!-- (0, 2, 5) -->` },
      },
    },
    {
      id: "ch04-s3",
      title: "The Source Order Tiebreaker",
      whyItMatters: "When specificities tie, source order decides. This is why moving a rule from line 5 to line 50 can change your entire layout.",
      content: `When two rules have identical specificity, the one that appears later in the source wins. "Later" means:

- Within one stylesheet: the rule lower in the file wins
- Across multiple stylesheets: the rule from the stylesheet linked LATER wins
- Internal \`<style>\` vs external \`<link>\`: whichever appears later in the HTML wins

\`\`\`html
<head>
  <link rel="stylesheet" href="reset.css">    <!-- loads first -->
  <link rel="stylesheet" href="theme.css">    <!-- loads second -->
  <style>body { color: red; }</style>         <!-- loads last -->
</head>
\`\`\`

If reset.css, theme.css, and the inline style all set \`body { color: ... }\` with the same selector, the inline style wins because it's last.

**This means file order matters in your CSS.** A common pattern is:
1. Reset/normalize first (lowest priority foundations)
2. Base typography, layout
3. Components
4. Utilities last (highest priority overrides)

When you import a CSS framework, your custom CSS goes AFTER the framework's CSS so your overrides win.`,
      codeExamples: [
        {
          id: "ch04-s3-ex1",
          title: "Same selector, source order decides",
          description: "Both rules have specificity (0,1,0). The one written later wins.",
          code: {
            html: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      .badge { background: red; }\n      .badge { background: green; }\n    </style>\n  </head>\n  <body>\n    <span class="badge" style="padding:8px 16px; color:white;">Green wins</span>\n  </body>\n</html>`,
          },
          explanation: "Both rules tie on specificity (0,1,0). Source order is the tiebreaker — the green rule comes second, so it wins.",
          tryItPrompt: "Swap the order of the two rules. Now red wins.",
        },
      ],
    },
    {
      id: "ch04-s4",
      title: "!important and Why You Probably Shouldn't",
      whyItMatters: "!important is the nuclear option. It works, but it makes future you (or your teammates) hate present you. Knowing when it's actually OK is part of being a senior developer.",
      content: `Adding \`!important\` to a declaration makes it win against any non-important rule, regardless of specificity:

\`\`\`css
.urgent { color: red !important; }
\`\`\`

This sounds great until you have to override it later. The only way to beat \`!important\` is with another \`!important\` AND higher specificity. You quickly end up in an arms race where every rule has \`!important\` — at which point !important is meaningless again, AND your CSS is unmaintainable.

**Acceptable uses:**

1. **Utility classes that MUST win.** Tailwind uses \`!important\` for forced-display utilities like \`!hidden\`. Bootstrap does the same. Whitelisted in design-system contexts.
2. **Overriding third-party CSS** you don't control (a JS library, an embedded widget). You sometimes have no other option.
3. **User stylesheets** for accessibility (high-contrast modes, larger fonts). Users genuinely need the nuclear option to override site styles.

**Better alternatives:**

- **Increase specificity** by adding a parent selector: \`.section .btn { ... }\` beats \`.btn { ... }\` cleanly.
- **Move the rule later** in the source.
- **Use a more specific selector** — but don't go overboard or you'll create the opposite problem.
- **Refactor** the conflicting rule rather than fight it with overrides.

If you find yourself reaching for \`!important\` more than once or twice in a project, your CSS architecture probably needs work.`,
      callouts: [
        { type: "warning", title: "!important is contagious", content: "Once one team member adds !important to win a battle, others have to do the same to win against them. Within months, your stylesheet becomes a war zone. Avoid starting it." },
        { type: "common-mistake", title: "Inline style + !important", content: "`<div style=\"color: red !important\">` beats virtually every other rule. This is the strongest possible CSS — useful for debugging, terrible for production." },
      ],
      deepDive: `**Cascade layers (@layer)** are a 2022 addition to CSS that lets you create explicit priority groups:

\`\`\`css
@layer reset, theme, components, utilities;

@layer theme {
  .btn { background: blue; }   /* loses to anything in components */
}
@layer components {
  .btn { background: green; }  /* wins over theme regardless of specificity */
}
\`\`\`

Layers cleanly solve the "I need to override third-party CSS" problem without resorting to !important. Modern frameworks like Tailwind v3+ use them.

**Specificity inflation** is the slow drift where every rule has higher specificity than the last. It happens because adding selectors is the easiest way to beat the cascade. Project linters like Stylelint can warn when specificity gets too high and force a refactor.`,
    },
    {
      id: "ch04-s5",
      title: "Debugging Cascade Bugs",
      whyItMatters: "Eventually, every CSS bug you'll ever write reduces to 'I have the wrong specificity.' Knowing how to diagnose it is a daily skill.",
      content: `When a CSS rule isn't applying:

**1. Open DevTools → Elements → Styles panel.** It shows every rule that targets the selected element, with overridden rules struck through. The winning rule is unstruck.

**2. Check if the rule is even matching.** If your rule isn't in the panel at all, your selector is wrong. Common causes: typo in the class name, missing parent in a descendant selector, wrong file linked.

**3. Check the strikethrough.** A struck-through declaration means another rule beat it. Look at the rule that won and compare specificity.

**4. Check Computed tab.** Shows the final value of every property after the cascade resolves. If \`color\` is "rgb(0,0,0)" and you expected red, the cascade picked black somewhere.

**5. Try the !important trick — to debug only.** Temporarily add \`!important\` to your rule. If it now applies, the bug was specificity. If it STILL doesn't apply, your selector isn't matching. Then remove the \`!important\` and fix the real issue.

**6. Check inheritance.** Some properties (color, font, line-height, text-align) are inherited from the parent. If a parent has \`color: red\`, every child inherits red unless explicitly overridden.

**7. Check for typos.** \`backgound-color\` (missing 'r') silently fails. CSS doesn't tell you a property name is wrong — it just ignores it.`,
      callouts: [
        { type: "pro-tip", title: "DevTools shows specificity", content: "Hover the selector in the Styles panel — Chrome shows a tooltip like 'Specificity (0,1,2)'. Compare to the winning rule to see what to beat." },
      ],
    },
  ],
  exercises: [
    {
      id: "css-ch-04-ex1",
      title: "Predict the winner",
      difficulty: 1,
      description: "Five rules try to color a paragraph. Without running the code, write down the final color and the specificity of the winning rule.",
      requirements: ["Read the code carefully", "Calculate specificity for each rule", "Predict the result, then verify"],
      starterCode: {
        html: `<!DOCTYPE html>\n<html><head><style>\n  p             { color: black; }\n  .text         { color: blue; }\n  p.text        { color: purple; }\n  #intro        { color: green; }\n  #intro.text   { color: orange; }\n</style></head>\n<body>\n  <p id="intro" class="text">What color am I?</p>\n</body></html>`,
      },
      hints: ["IDs beat classes. Calculate (ID,class,type) for each rule."],
      solution: {
        html: `<!-- Final color: ORANGE.\n     Specificities: p=(0,0,1), .text=(0,1,0), p.text=(0,1,1), #intro=(1,0,0), #intro.text=(1,1,0).\n     #intro.text wins because it has both an ID and a class. -->`,
      },
      solutionExplanation: "Rule by rule: #intro.text scores (1,1,0) — highest. It wins the color, so the paragraph is orange.",
    },
    {
      id: "css-ch-04-ex2",
      title: "Beat without !important",
      difficulty: 2,
      description: "The .btn rule sets red. Add a NEW rule that beats it WITHOUT using !important and WITHOUT modifying the existing rule.",
      requirements: ["Don't change the existing .btn rule", "Don't use !important", "Make the button green"],
      starterCode: {
        html: `<style>\n  .btn { background: red; color: white; padding: 12px 24px; }\n  /* add your rule below */\n</style>\n<button class="btn">Click</button>`,
      },
      hints: ["Increase specificity by adding a selector — like an attribute or another class context."],
      solution: {
        html: `<style>\n  .btn { background: red; color: white; padding: 12px 24px; }\n  button.btn { background: green; } /* (0,1,1) beats (0,1,0) */\n</style>\n<button class="btn">Click</button>`,
      },
      solutionExplanation: "Adding 'button' before .btn raises specificity to (0,1,1), which beats the original (0,1,0). The added rule also comes later in source, so source order would have decided too — but we won by specificity first.",
    },
    {
      id: "css-ch-04-ex3",
      title: "Debug the failing style",
      difficulty: 3,
      description: "The author wanted the heading to be hot pink, but it's still blue. Diagnose and fix WITHOUT using !important.",
      requirements: ["Identify why the pink rule loses", "Fix using a better selector or restructured rule"],
      starterCode: {
        html: `<style>\n  #header h1 { color: blue; }     /* (1,0,1) */\n  .pink { color: hotpink; }       /* (0,1,0) */\n</style>\n<header id="header">\n  <h1 class="pink">Why am I blue?</h1>\n</header>`,
      },
      hints: ["The blue rule has higher specificity. Either raise the pink rule's specificity or restructure."],
      solution: {
        html: `<style>\n  #header h1 { color: blue; }\n  #header h1.pink { color: hotpink; } /* (1,1,1) beats (1,0,1) */\n</style>\n<header id="header">\n  <h1 class="pink">Why am I blue?</h1>\n</header>`,
      },
      solutionExplanation: "The blue rule scored (1,0,1) and beat the pink rule's (0,1,0). We added a parent context to the pink rule, raising it to (1,1,1) — which beats blue.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "css-ch-04-q1",
        type: "mcq",
        question: "Which selector has the HIGHEST specificity?",
        options: ["p", ".main p", "#hero p", "p.intro"],
        correctAnswer: 2,
        explanation: "Scores: p=(0,0,1), .main p=(0,1,1), #hero p=(1,0,1), p.intro=(0,1,1). #hero p wins because IDs (1) beat classes.",
        difficulty: 2,
      },
      {
        id: "css-ch-04-q2",
        type: "mcq",
        question: "Two rules have identical specificity. Which wins?",
        options: ["The one with more properties", "The one with !important", "The one that appears later in the source", "The shorter one"],
        correctAnswer: 2,
        explanation: "When specificity ties, source order decides — the later rule wins. This is why CSS file order matters.",
        difficulty: 1,
      },
      {
        id: "css-ch-04-q3",
        type: "mcq",
        question: "An inline style sets color: red. A stylesheet rule with !important sets color: blue. Which wins?",
        options: ["Red (inline always wins)", "Blue (!important wins over inline without !important)", "Whichever loaded later", "Neither"],
        correctAnswer: 1,
        explanation: "!important beats inline style. The only way to beat !important is with another !important + higher specificity.",
        difficulty: 3,
      },
      {
        id: "css-ch-04-q4",
        type: "true-false",
        question: "Using !important is good practice when a style 'just won't apply.'",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. !important fixes the symptom but starts an arms race. Better: increase specificity or fix the conflicting rule.",
        difficulty: 1,
      },
      {
        id: "css-ch-04-q5",
        type: "spot-the-bug",
        question: "Why is the link still blue?",
        code: `<style>\n  a { color: blue; }\n  .external { color: red; }\n</style>\n<nav>\n  <a class="external" href="https://example.com">Link</a>\n</nav>`,
        options: [
          ".external doesn't match",
          "Both selectors have specificity (0,0,1) and (0,1,0); .external should win — the link IS red. The bug is in the question.",
          "Need to use a.external",
          "Need !important",
        ],
        correctAnswer: 1,
        explanation: "Trick question — the link IS red. .external (0,1,0) beats a (0,0,1). Trust the math, not your eyes (or the question).",
        difficulty: 3,
      },
    ],
  },
  cheatSheet: [
    { label: "Specificity score", value: "(IDs, classes+attrs+pseudo-classes, types+pseudo-elements)" },
    { label: "p", value: "(0,0,1)" },
    { label: ".btn", value: "(0,1,0)" },
    { label: "#hero", value: "(1,0,0)" },
    { label: "Inline style", value: "(1,0,0,0) — beats all selectors" },
    { label: "!important", value: "Wins regardless — avoid" },
    { label: "Cascade order", value: "Origin → Importance → Specificity → Source order" },
    { label: "Debugging", value: "DevTools Styles panel shows winners and losers" },
  ],
};
