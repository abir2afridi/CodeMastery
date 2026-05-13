import type { Chapter, Quiz, Exercise } from "./types";
import { cssCh02, cssCh03, cssCh04 } from "./css-deep-2-4";
import { cssCh05, cssCh06, cssCh07, cssCh08 } from "./css-deep-5-8";
import { cssCh09, cssCh10, cssCh11 } from "./css-deep-9-11";
import { cssCh12 } from "./css-deep-12";
import { cssCh13, cssCh14 } from "./css-deep-13-14";
import { cssCh15, cssCh16, cssCh17, cssCh18, cssCh19, cssCh20 } from "./css-deep-15-20";
import { cssCh21, cssCh22, cssCh23, cssCh24, cssCh25, cssCh26, cssCh27, cssCh28, cssCh29, cssCh30 } from "./css-deep-21-30";
import { cssCh31, cssCh32, cssCh33, cssCh34, cssCh35, cssCh36, cssCh37, cssCh38, cssCh39, cssCh40, cssCh41, cssCh42, cssCh43, cssCh44 } from "./css-deep-31-44";
import { cssCh45, cssCh46, cssCh47, cssCh48, cssCh49, cssCh50, cssCh51, cssCh52, cssCh53, cssCh54, cssCh55 } from "./css-deep-45-55";

const stubQuiz = (chapterId: string, topic: string): Quiz => ({
  passingScore: 80,
  questions: [
    { id: `${chapterId}-q1`, type: "mcq", question: `Which best describes ${topic}?`, options: [`A core CSS feature you'll use often.`, "Removed from the spec.", "JavaScript only.", "Browser-specific only."], correctAnswer: 0, explanation: `${topic} is part of standard CSS.`, difficulty: 1 },
    { id: `${chapterId}-q2`, type: "true-false", question: `${topic} is worth learning deeply.`, options: ["True", "False"], correctAnswer: 0, explanation: "Every topic in this curriculum was selected for real-world relevance.", difficulty: 1 },
    { id: `${chapterId}-q3`, type: "mcq", question: `Best reference for ${topic}?`, options: ["MDN Web Docs", "Random forums", "Outdated tutorials", "Guesswork"], correctAnswer: 0, explanation: "MDN is the canonical reference.", difficulty: 1 },
  ],
});

const stubExercises = (chapterId: string): Exercise[] => [{
  id: `${chapterId}-ex1`,
  title: "Practice the chapter concepts",
  difficulty: 1,
  description: "Apply this chapter's CSS concept in a small example.",
  requirements: ["Use the main concept", "Make it valid", "Test in compiler"],
  starterCode: { html: "<div class=\"box\">Hello</div>", css: ".box { /* your styles */ }" },
  hints: ["Re-read the chapter", "Start minimal", "Inspect with DevTools"],
  solution: { html: "<div class=\"box\">Hello</div>", css: ".box { padding: 1rem; background: lightblue; }" },
  solutionExplanation: "A minimal example demonstrating the chapter's concept.",
}];

const makeStub = (number: number, title: string, subtitle: string, difficulty: Chapter["difficulty"], partLabel: string, prevId?: string, titleBn?: string, subtitleBn?: string): Chapter => {
  const id = `css-ch-${String(number).padStart(2, "0")}`;
  return {
    id, number, title, subtitle, difficulty,
    estimatedMinutes: 25, xpReward: 100,
    prerequisites: prevId ? [prevId] : [],
    learningObjectives: [`Understand ${title}.`, `Apply ${title} in real layouts.`, `Recognize common pitfalls.`],
    learningObjectivesBn: titleBn ? [`${titleBn} বুঝতে পারবেন।`, `${titleBn} প্রকৃত লেআউটে প্রয়োগ করতে পারবেন।`, `সাধারণ ভুল চিনতে পারবেন।`] : undefined,
    partLabel,
    partLabelBn: partLabel.replace("PART", "অংশ"),
    titleBn,
    subtitleBn,
    sections: [{
      id: `${id}-s1`,
      title: `Introduction to ${title}`,
      titleBn: titleBn ? `${titleBn} পরিচিতি` : undefined,
      whyItMatters: `${title} is a fundamental CSS topic. Master it and your designs become consistent and maintainable.`,
      whyItMattersBn: titleBn ? `${titleBn} CSS-এর একটি মৌলিক বিষয়। এটি আয়ত্ত করলে আপনার ডিজাইন সামঞ্জস্যপূর্ণ এবং রক্ষণাবেক্ষণযোগ্য হবে।` : undefined,
      content: `This chapter covers ${title}. Detailed lesson content is being expanded chapter by chapter — the platform, compiler, and quiz system are fully functional. Use the in-page mini compiler to experiment freely.\n\nFor in-depth coverage right now, refer to MDN Web Docs while we expand this chapter's written content.`,
      contentBn: titleBn ? `এই অধ্যায়ে ${titleBn} আছে। প্ল্যাটফর্ম, কম্পাইলার এবং কুইজ সিস্টেম সম্পূর্ণ কার্যকরী।` : undefined,
      codeExamples: [{
        id: `${id}-ex1`,
        title: `${title} — quick example`,
        titleBn: titleBn ? `${titleBn} — দ্রুত উদাহরণ` : undefined,
        description: `A minimal demo of ${title}.`,
        descriptionBn: titleBn ? `${titleBn}-এর সংক্ষিপ্ত ডেমো।` : undefined,
        code: { html: `<div class="demo">Demo</div>`, css: `.demo {\n  padding: 1rem;\n  background: linear-gradient(135deg, #00D4FF, #7C3AED);\n  color: white;\n  border-radius: 8px;\n}` },
        explanation: "A simple element with gradient background and rounded corners.",
        explanationBn: "গ্রেডিয়েন্ট ব্যাকগ্রাউন্ড এবং রাউন্ডেড কোর্নার সহ একটি সাধারণ এলিমেন্ট।",
        tryItPrompt: "Change the gradient colors and the padding value.",
        tryItPromptBn: "গ্রেডিয়েন্ট রঙ এবং প্যাডিং ভ্যালু পরিবর্তন করুন।",
      }],
    }],
    exercises: stubExercises(id),
    quiz: stubQuiz(id, title),
    cheatSheet: [{ label: title, value: "CSS property", labelBn: titleBn, valueBn: "CSS প্রপার্টি" }],
  };
};

// ============================================================================
// DEEP CHAPTER 1
// ============================================================================
const ch01: Chapter = {
  id: "css-ch-01",
  number: 1,
  title: "What Is CSS and How Does It Work?",
  subtitle: "From plain HTML to styled, beautiful websites.",
  difficulty: "Absolute Beginner",
  estimatedMinutes: 35,
  xpReward: 100,
  prerequisites: [],
  partLabel: "Part 1: CSS Fundamentals",
  learningObjectives: [
    "Explain what CSS does and why it's separate from HTML.",
    "Recognize the three ways to add CSS to a page.",
    "Read and write a basic CSS rule with correct syntax.",
    "Understand the CSSOM and how the browser applies styles.",
  ],
  sections: [
    {
      id: "css01-s1",
      title: "Why CSS Exists",
      whyItMatters: "Without CSS, every website would look like a 1995 academic paper. Understanding why CSS was invented will help you appreciate why it works the way it does.",
      realWorldAnalogy: "If HTML is the unfurnished house, CSS is the entire interior design industry. The same house can be styled like a minimalist Tokyo apartment, a Victorian mansion, or a beach bungalow — with no changes to the structure.",
      content: `In the early 1990s, HTML had no styling capability at all. Pages were just text — black on white, Times New Roman, default sizes. As the web grew, designers wanted control over fonts, colors, and layout. The first attempt was to add styling tags directly to HTML — tags like \`<font color="red">\` and the now-deprecated \`<center>\`. This was a disaster. Mixing structure and style meant you had to edit every single page to change a color. A 1000-page website became unmaintainable.

In 1996, the W3C published **CSS1** — Cascading Style Sheets. The breakthrough was *separation of concerns*: HTML describes the structure, CSS describes the appearance. Now you could change one CSS file and restyle a thousand pages instantly. This is the same principle that lets a single news website have a "dark mode" toggle today: the HTML doesn't change, only the CSS swaps.

CSS3 (which is what we use today, just called "CSS" now) added flexbox, grid, animations, transitions, custom properties, and dozens of other features. Modern CSS is a powerful design tool — a skilled CSS developer can build virtually any visual design.

The browser applies CSS through a process called **the CSSOM** (CSS Object Model). When a page loads, the browser reads the HTML and builds the DOM. It also reads the CSS and builds the CSSOM — a tree of all the style rules. Then it combines the two into the **render tree**, calculates where every element goes (layout), and paints pixels. This whole pipeline happens in milliseconds.`,
      callouts: [
        { type: "info", title: "Cascading", content: "The 'cascading' in CSS means: when multiple rules target the same element, the browser combines them following specific priority rules. Learning cascading order is essential — we'll cover it in chapter 5." },
      ],
    },
    {
      id: "css01-s2",
      title: "Three Ways to Add CSS",
      whyItMatters: "You'll see all three styles in real codebases. Knowing when to use each one separates juniors from professionals.",
      content: `**1. Inline styles** — written directly on an HTML element using the \`style\` attribute:

\`\`\`
<p style="color: red; font-size: 18px;">Red text</p>
\`\`\`

Pros: quick, scoped to one element.
Cons: not reusable, hard to maintain, mixes content with presentation.

**Use only as a last resort** — for example, when CSS values are computed dynamically by JavaScript. Otherwise, never inline.

**2. Internal stylesheet** — a \`<style>\` tag inside the \`<head>\`:

\`\`\`
<head>
  <style>
    p { color: red; font-size: 18px; }
  </style>
</head>
\`\`\`

Pros: reusable across the page, clean.
Cons: only applies to that one HTML file. If you have 10 pages, you have 10 copies.

**Use for single-page demos or page-specific styles** that don't apply elsewhere.

**3. External stylesheet** — a separate \`.css\` file linked from the HTML:

\`\`\`
<head>
  <link rel="stylesheet" href="style.css">
</head>
\`\`\`

And in \`style.css\`:

\`\`\`
p { color: red; font-size: 18px; }
\`\`\`

Pros: reusable across many pages, browsers cache the file (faster load on repeat visits), clean separation, easy to maintain.
Cons: requires an extra HTTP request the first time.

**This is the right choice 99% of the time.** All real production websites use external stylesheets.`,
      codeExamples: [
        {
          id: "css01-s2-ex1",
          title: "All three methods in one demo",
          description: "Three paragraphs styled three different ways. They all look the same — but the techniques are different.",
          code: {
            html: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .internal { color: blue; font-weight: bold; }\n  </style>\n</head>\n<body>\n  <p style="color: red; font-style: italic;">Inline style</p>\n  <p class="internal">Internal stylesheet</p>\n  <p class="external">External stylesheet (works in real projects)</p>\n</body>\n</html>`,
            css: `.external {\n  color: green;\n  text-decoration: underline;\n}`,
          },
          explanation: "The first <p> uses inline style. The second uses the <style> block. The third would use an external file in a real project — here we use the CSS panel of the compiler to demonstrate.",
          tryItPrompt: "Change the inline style color to purple. Then change the .internal color in the <style> block. Notice how each method targets only its own element.",
        },
      ],
      callouts: [
        { type: "pro-tip", title: "Order of precedence", content: "If multiple styles target the same property, inline beats internal beats external (assuming equal specificity). We'll dig into specificity in chapter 5." },
      ],
    },
    {
      id: "css01-s3",
      title: "CSS Rule Anatomy",
      whyItMatters: "Every line of CSS you write follows the same syntax. Get this in your bones now.",
      content: `A CSS rule has two parts: a **selector** and a **declaration block**.

\`\`\`
selector {
  property: value;
  property: value;
}
\`\`\`

For example:

\`\`\`
h1 {
  color: blue;
  font-size: 32px;
}
\`\`\`

- **Selector**: \`h1\` — this rule targets all \`<h1>\` elements.
- **Declaration block**: everything between the curly braces \`{ }\`.
- **Declaration**: a property-value pair like \`color: blue;\`. Each declaration ends with a semicolon.
- **Property**: \`color\` — the aspect to change.
- **Value**: \`blue\` — what to change it to.

A few syntax details that beginners often miss:

- The **colon** separates property from value.
- The **semicolon** ends each declaration. Technically the last one is optional, but ALWAYS include it (so you can add more rules later without bugs).
- Curly braces wrap the declaration block.
- Whitespace and indentation are ignored — they're for human readability.
- Comments use \`/* ... */\` (no // line comments in CSS).

Here's the same rule with multiple selectors (apply the same styles to several elements):

\`\`\`
h1, h2, h3 {
  color: navy;
  font-family: Georgia, serif;
}
\`\`\`

The comma between selectors means "apply this to every one of these."`,
      codeExamples: [
        {
          id: "css01-s3-ex1",
          title: "Reading and writing CSS rules",
          description: "Practice the syntax until it's automatic.",
          code: {
            html: `<h1>Big heading</h1>\n<h2>Medium heading</h2>\n<p>A paragraph of <span>inline span</span> text.</p>`,
            css: `/* Apply to h1 and h2 with one rule */\nh1, h2 {\n  color: #00D4FF;\n  font-family: Arial, sans-serif;\n}\n\n/* Style paragraphs */\np {\n  color: #E2E8F0;\n  line-height: 1.6;\n}\n\n/* Style only the span inside the paragraph */\nspan {\n  background-color: #7C3AED;\n  padding: 2px 6px;\n  border-radius: 4px;\n}`,
          },
          explanation: "Three CSS rules. The first targets two elements at once. The second targets all <p>. The third targets <span>. Comments explain each rule.",
          tryItPrompt: "Add a fourth rule that styles the <span> font-weight to bold. Then change the page background using a `body { ... }` rule.",
        },
      ],
      callouts: [
        { type: "common-mistake", title: "Forgetting the semicolon", content: "Forgetting the semicolon after a declaration is the #1 CSS bug. The browser will silently ignore the next declaration. Always end every line with ;" },
        { type: "tip", title: "Format consistently", content: "Most professionals format CSS with one declaration per line, indented inside the braces. Use Prettier (the VS Code extension) to auto-format on save." },
      ],
      microExercise: {
        instruction: "Style all <p> tags to have a font-size of 20px and a margin-bottom of 12px.",
        starterCode: { html: "<p>First.</p><p>Second.</p>", css: "/* write your rule here */" },
        hint: "Selector is `p`. Inside curly braces, set font-size and margin-bottom.",
        solution: { html: "<p>First.</p><p>Second.</p>", css: "p {\n  font-size: 20px;\n  margin-bottom: 12px;\n}" },
      },
    },
  ],
  exercises: [
    {
      id: "css01-ex1",
      title: "Style a simple page",
      difficulty: 1,
      description: "Take the provided HTML and style the h1 to be navy and the paragraphs to have a larger line-height.",
      requirements: ["h1 must be navy color", "Paragraphs must have line-height of 1.6 or greater", "Use external CSS panel (not inline)"],
      starterCode: { html: "<h1>My Page</h1>\n<p>First paragraph.</p>\n<p>Second paragraph.</p>", css: "/* write CSS here */" },
      hints: ["h1 { color: navy; }", "p { line-height: 1.6; }", "Don't forget semicolons"],
      solution: { html: "<h1>My Page</h1>\n<p>First paragraph.</p>\n<p>Second paragraph.</p>", css: "h1 { color: navy; }\np { line-height: 1.6; }" },
      solutionExplanation: "Two simple rules. The h1 selector targets the heading; the p selector targets all paragraphs.",
    },
    {
      id: "css01-ex2",
      title: "Group selectors",
      difficulty: 2,
      description: "Style h1, h2, h3 with the same color and font-family using a grouped selector.",
      requirements: ["Use a single rule (not three separate ones)", "Apply color and font-family", "Headings must look visually consistent"],
      starterCode: { html: "<h1>One</h1>\n<h2>Two</h2>\n<h3>Three</h3>", css: "/* grouped rule here */" },
      hints: ["Separate selectors with commas: h1, h2, h3", "Apply both properties inside one block"],
      solution: { html: "<h1>One</h1>\n<h2>Two</h2>\n<h3>Three</h3>", css: "h1, h2, h3 {\n  color: #7C3AED;\n  font-family: Georgia, serif;\n}" },
      solutionExplanation: "Comma-separated selectors apply the same styles to multiple element types — DRY (Don't Repeat Yourself).",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "css01-q1", type: "mcq", question: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Custom Style Syntax", "Creative Styling System"], correctAnswer: 1, explanation: "Cascading Style Sheets — 'cascading' refers to how multiple rules combine following priority rules.", difficulty: 1 },
      { id: "css01-q2", type: "mcq", question: "Which is the best way to add CSS for a real production website?", options: ["Inline styles on every element", "<style> in head", "External stylesheet linked via <link>", "JavaScript injection"], correctAnswer: 2, explanation: "External stylesheets are reusable across pages, cached by browsers, and keep concerns separated.", difficulty: 1 },
      { id: "css01-q3", type: "fill-blank", question: "In the rule `p { color: red; }`, the word `color` is the ____.", correctAnswer: "property", explanation: "color is the property; red is the value. Together they form a declaration.", difficulty: 2 },
      { id: "css01-q4", type: "spot-the-bug", question: "What's wrong with this CSS?", code: "h1 {\n  color: blue\n  font-size: 32px;\n}", options: ["Nothing — it's valid", "Missing semicolon after color: blue", "color isn't a valid property", "h1 needs quotes"], correctAnswer: 1, explanation: "The first declaration is missing its semicolon. Without it, the browser tries to parse `color: blue font-size: 32px` and fails silently.", difficulty: 2 },
      { id: "css01-q5", type: "mcq", question: "How do you write a CSS comment?", options: ["// comment", "<!-- comment -->", "/* comment */", "# comment"], correctAnswer: 2, explanation: "CSS uses /* ... */ for comments. The // syntax (used in JS) doesn't work in CSS.", difficulty: 1 },
      { id: "css01-q6", type: "mcq", question: "What does this rule do? `h1, h2 { color: green; }`", options: ["Applies green to h1 inside h2", "Applies green to both h1 and h2", "Applies green to h1 only", "Causes a syntax error"], correctAnswer: 1, explanation: "The comma is a 'group selector' — applies the same rule to multiple element types.", difficulty: 2 },
      { id: "css01-q7", type: "true-false", question: "External CSS files end with the .css extension.", options: ["True", "False"], correctAnswer: 0, explanation: "True. By convention, all CSS files use the .css extension.", difficulty: 1 },
      { id: "css01-q8", type: "code-output", question: "What color will the heading be?", code: "<h1 style=\"color: red\">Hi</h1>\n<style>\n  h1 { color: blue; }\n</style>", options: ["red", "blue", "default black", "purple (mix)"], correctAnswer: 0, explanation: "Inline styles have higher specificity than rules in <style> blocks (assuming no !important), so red wins. We'll cover specificity in detail in chapter 5.", difficulty: 3 },
    ],
  },
  cheatSheet: [
    { label: "Inline", value: 'style="color: red"' },
    { label: "Internal", value: "<style>...</style> in <head>" },
    { label: "External", value: '<link rel="stylesheet" href="style.css">' },
    { label: "Rule shape", value: "selector { property: value; }" },
    { label: "Comment", value: "/* like this */" },
    { label: "Grouped selector", value: "h1, h2, h3 { ... }" },
  ],
};

// ============================================================================
// REMAINING CHAPTERS (structured stubs)
// ============================================================================
const part1: Chapter[] = [
  ch01,
  cssCh02,
  cssCh03,
  cssCh04,
  cssCh05,
  cssCh06,
  cssCh07,
  cssCh08,
];

const part2: Chapter[] = [
  cssCh09,
  cssCh10,
  cssCh11,
  cssCh12,
  cssCh13,
  cssCh14,
  cssCh15,
  cssCh16,
  cssCh17,
  cssCh18,
  cssCh19,
  cssCh20,
];

const part3: Chapter[] = [
  cssCh21,
  cssCh22,
  cssCh23,
  cssCh24,
  cssCh25,
  cssCh26,
  cssCh27,
  cssCh28,
  cssCh29,
  cssCh30,
];

const part4: Chapter[] = [
  cssCh31,
  cssCh32,
  cssCh33,
  cssCh34,
  cssCh35,
  cssCh36,
  cssCh37,
  cssCh38,
  cssCh39,
  cssCh40,
  cssCh41,
  cssCh42,
  cssCh43,
  cssCh44,
];

const part5: Chapter[] = [
  cssCh45,
  cssCh46,
  cssCh47,
  cssCh48,
  cssCh49,
  cssCh50,
  cssCh51,
  cssCh52,
  cssCh53,
  cssCh54,
  cssCh55,
];

export const cssChapters: Chapter[] = [...part1, ...part2, ...part3, ...part4, ...part5];
