import type { Chapter } from "./types";

// ============================================================================
// CSS CHAPTER 9 — The Display Property
// ============================================================================
export const cssCh09: Chapter = {
  id: "css-ch-09",
  number: 9,
  title: "The Display Property",
  subtitle: "block, inline, inline-block, none — the foundation of every layout decision.",
  difficulty: "Beginner",
  estimatedMinutes: 35,
  xpReward: 120,
  prerequisites: ["css-ch-08"],
  partLabel: "Part 2: Layout",
  learningObjectives: [
    "Distinguish block, inline, inline-block, and none.",
    "Predict how each value behaves with width, height, padding, and margin.",
    "Choose the right display value for a given UI need.",
    "Understand why <span> can't have width and how to fix it.",
    "Recognize when display: none harms accessibility.",
  ],
  sections: [
    {
      id: "css09-s1",
      title: "Block Elements — The Stacking Boxes",
      whyItMatters: "Block is the default for paragraphs, divs, headings, sections — most of what builds a page. Knowing how blocks behave is the foundation of every layout.",
      realWorldAnalogy: "Block elements are like stacked cardboard boxes on a shelf. Each one takes the full width of the shelf and the next box stacks on top, never beside.",
      content: `A **block** element has three defining behaviors:

1. **Takes the full available width** of its container by default — even if its content is just one word.
2. **Starts on a new line** — never sits next to the previous element.
3. **Respects width, height, padding, and margin** in all four directions.

Default block elements include: \`<div>\`, \`<p>\`, \`<h1>\`–\`<h6>\`, \`<section>\`, \`<article>\`, \`<header>\`, \`<footer>\`, \`<nav>\`, \`<main>\`, \`<ul>\`, \`<ol>\`, \`<li>\`, \`<form>\`, \`<table>\`.

\`\`\`
<div style="background: #00D4FF; padding: 20px;">First block</div>
<div style="background: #7C3AED; padding: 20px;">Second block</div>
\`\`\`

Both divs span the full width and stack vertically. You can change them with CSS:

\`\`\`
div {
  width: 200px;
  height: 100px;
  margin: 10px;
}
\`\`\`

The width and height take effect immediately because blocks honor sizing. Margins push the next block away in any direction. Padding adds space inside the box.

To force any element to behave like a block, use \`display: block\`:

\`\`\`
span { display: block; }   /* now spans stack like divs */
\`\`\``,
      callouts: [
        { type: "tip", title: "Default isn't always best", content: "If you want a div to wrap to its content (not full width), set display: inline-block or width: fit-content." },
      ],
      codeExamples: [
        {
          id: "css09-s1-ex1",
          title: "Block stacking demo",
          description: "Three blocks stack vertically and each takes full width.",
          code: {
            html: `<div class="box a">A</div>\n<div class="box b">B</div>\n<div class="box c">C</div>`,
            css: `.box { padding: 20px; color: white; font-weight: bold; }\n.a { background: #00D4FF; }\n.b { background: #7C3AED; }\n.c { background: #10b981; }`,
          },
          explanation: "No widths set. Each div fills its container's full width and stacks below the previous one. This is default block behavior.",
          tryItPrompt: "Add `width: 200px` to .box and watch them stay stacked but narrower.",
        },
      ],
    },
    {
      id: "css09-s2",
      title: "Inline Elements — Words in a Line",
      whyItMatters: "Inline is the default for text-level elements like spans, links, and emphasis tags. They flow horizontally inside text — and they have surprising restrictions.",
      realWorldAnalogy: "Inline elements are like words in a sentence. They sit next to each other, wrap to the next line when they run out of room, and you can't easily resize them like boxes.",
      content: `An **inline** element behaves like a word in a paragraph:

1. **Takes only the width its content needs** — no full-width default.
2. **Sits next to other inline elements** on the same line, flowing left to right.
3. **Ignores width and height** — those properties have no effect.
4. **Respects horizontal padding/margin** but **not vertical** in a meaningful way (vertical padding/margin doesn't push neighbors).
5. **Wraps to the next line** when the line runs out of space.

Default inline elements include: \`<span>\`, \`<a>\`, \`<strong>\`, \`<em>\`, \`<code>\`, \`<img>\` (technically inline but special — also acts like inline-block), \`<input>\`, \`<button>\`.

\`\`\`
<p>Hello <span>world</span> from <a href="#">a link</a>!</p>
\`\`\`

Everything stays on one line. Set \`width: 200px\` on the span and **nothing happens** — inline elements ignore width and height.

The "padding looks weird" trap:

\`\`\`
span { padding: 20px; background: yellow; }
\`\`\`

The horizontal padding works fine — the yellow background extends left and right of the text. But vertical padding extends the *background* up and down without pushing other lines away. The result: yellow overlap with the line above. **This is why inline elements are a bad choice for "boxes" with padding** — switch to inline-block.`,
      callouts: [
        { type: "common-mistake", title: "Width on a span does nothing", content: "<span style='width: 200px'> is silently ignored. To give a span dimensions, change its display to inline-block or block." },
        { type: "warning", title: "Vertical padding overlaps", content: "Padding-top/bottom on inline elements visually extends the background but doesn't push other content. Use inline-block to fix." },
      ],
      codeExamples: [
        {
          id: "css09-s2-ex1",
          title: "Inline behavior demo",
          description: "Three spans flow inline. Try resizing them — width is ignored.",
          code: {
            html: `<p>I am <span class="hl">highlighted</span> and so is <span class="hl">this part</span>, but the rest is normal.</p>`,
            css: `.hl {\n  background: #fef08a;\n  padding: 2px 6px;\n  border-radius: 3px;\n  /* width: 200px;  ← uncomment, nothing happens */\n}`,
          },
          explanation: "The spans flow inside the paragraph text. Background and horizontal padding work; setting width has no effect.",
          tryItPrompt: "Add `display: inline-block` to .hl, then re-add `width: 200px` and watch each span become a fixed-size pill.",
        },
      ],
    },
    {
      id: "css09-s3",
      title: "inline-block — The Best of Both Worlds",
      whyItMatters: "inline-block lets you sit elements next to each other (like inline) while giving them width, height, and proper padding (like block). It's the secret behind buttons, tags, and pill components.",
      content: `\`display: inline-block\` combines the two:

1. **Sits next to other elements** on the same line (inline behavior).
2. **Respects width, height, and padding in all directions** (block behavior).
3. **Doesn't force a line break** — the next element follows on the same line if there's room.

\`\`\`
.tag {
  display: inline-block;
  width: 80px;
  height: 30px;
  padding: 6px 10px;
  background: #7C3AED;
  color: white;
  border-radius: 999px;
  text-align: center;
}
\`\`\`

\`\`\`
<span class="tag">React</span>
<span class="tag">Vue</span>
<span class="tag">Svelte</span>
\`\`\`

Three pills sit horizontally and each has a defined width and height. This is the pattern behind almost every "tag" or "chip" component.

**The tiny whitespace gotcha:** inline-block elements treat the whitespace between tags as a real space character, just like inline. So:

\`\`\`
<div class="card"></div>
<div class="card"></div>     <!-- newline + spaces between = visible gap -->
\`\`\`

You'll see a small (~4px) gap between the cards from the line break. Fixes:

- Put the tags on one line: \`<div></div><div></div>\`
- Use HTML comment to absorb the space: \`<div></div><!-- --><div></div>\`
- **Use Flexbox or Grid** on the parent — modern preferred fix.

Today, **most layout that used to use inline-block now uses Flexbox or Grid.** inline-block is still useful for individual pill/tag components and small inline elements that need sizing. But for laying out grids of cards, reach for Flexbox first.`,
      callouts: [
        { type: "tip", title: "Modern layouts use Flexbox", content: "Flexbox eliminates the inline-block whitespace gotcha and gives you alignment superpowers. Save inline-block for individual pill-shaped components." },
        { type: "pro-tip", title: "vertical-align matters", content: "When mixing inline-block elements of different heights, set `vertical-align: top` to align them at the top instead of the default baseline alignment which causes weird offsets." },
      ],
      codeExamples: [
        {
          id: "css09-s3-ex1",
          title: "Tag pills in a row",
          description: "Three inline-block tags with width and padding.",
          code: {
            html: `<div>\n  <span class="tag">HTML</span>\n  <span class="tag">CSS</span>\n  <span class="tag">JavaScript</span>\n  <span class="tag">React</span>\n</div>`,
            css: `.tag {\n  display: inline-block;\n  padding: 6px 14px;\n  margin: 4px;\n  background: linear-gradient(135deg, #00D4FF, #7C3AED);\n  color: white;\n  font-size: 12px;\n  border-radius: 999px;\n  font-weight: 600;\n}`,
          },
          explanation: "Each tag respects its own padding, has a gradient background, and sits next to its siblings. Margins push them apart visually.",
          tryItPrompt: "Try removing display: inline-block. The padding will overlap the next line.",
        },
      ],
    },
    {
      id: "css09-s4",
      title: "display: none — Removing from Layout",
      whyItMatters: "There's a critical difference between hiding visually and removing from the layout. Confusing them produces real accessibility bugs.",
      content: `\`display: none\` makes an element **disappear completely** from the page:

- Not rendered visually.
- Takes up zero space (no gap, no margin).
- Not in the accessibility tree — screen readers ignore it.
- Children can't be focused with Tab.

\`\`\`
.hidden { display: none; }
\`\`\`

\`display: none\` is right when you want to truly remove an element — for example, hiding a modal that isn't open, or hiding a step in a wizard.

**Compare to other "hide" methods:**

- **\`visibility: hidden\`** — invisible but **takes up space**. Useful when you want to reserve layout room.
- **\`opacity: 0\`** — fully transparent but takes space and is still interactive (clickable, focusable). Often used with transitions to fade in.
- **\`hidden\` HTML attribute** — equivalent to \`display: none\` (browser default). Adding the attribute is identical to setting display none.
- **\`aria-hidden="true"\`** — visible but hidden from screen readers. Use only for purely decorative content.

**The accessibility trap:** if you use \`display: none\` on a tab panel that's "active" but currently hidden, screen reader users can't access its content even when it should be available. The fix depends on the use case — for tabs, manage \`aria-selected\` and \`hidden\` properly so each tab panel is properly exposed when active.

\`\`\`
/* Visually hide but keep available to screen readers (the "sr-only" pattern) */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
\`\`\`

This is the standard "screen-reader only" utility. Use it for labels that need to exist for assistive tech but shouldn't show visually (like "Skip to main content" links).`,
      callouts: [
        { type: "warning", title: "display: none kills accessibility", content: "Hidden elements are completely removed from the screen reader's view. If you need to keep something accessible, use the .sr-only pattern instead." },
        { type: "info", title: "hidden attribute", content: "<div hidden> is equivalent to display: none. Use the attribute for HTML-driven state; use the CSS for stylesheet-driven hiding." },
      ],
      microExercise: {
        instruction: "Hide the second paragraph completely (no space, no read by screen readers).",
        starterCode: { html: `<p class="a">First</p>\n<p class="b">Second</p>\n<p class="c">Third</p>`, css: `/* hide .b */` },
        hint: ".b { display: none; }",
        solution: { html: `<p class="a">First</p>\n<p class="b">Second</p>\n<p class="c">Third</p>`, css: `.b { display: none; }` },
      },
    },
    {
      id: "css09-s5",
      title: "Other display Values to Know",
      whyItMatters: "Beyond block/inline, there are a few specialized display values you'll meet in real codebases.",
      content: `**\`display: flex\`** — turns the element into a flex container, enabling flexbox layout for its children. We dedicate two full chapters to flexbox (13–14).

**\`display: grid\`** — turns the element into a grid container, enabling CSS Grid layout. Two full chapters coming up (15–16).

**\`display: inline-flex\` / \`inline-grid\`** — same as flex/grid, but the container itself behaves inline (sits next to other inline elements).

**\`display: table\`** and friends (\`table-row\`, \`table-cell\`) — make any element behave like an HTML table. Used in some legacy layouts and rare advanced cases. Modern code uses Flexbox/Grid instead.

**\`display: list-item\`** — makes an element behave like an \`<li>\`, complete with bullet marker. Useful when you want a non-li element to render as a bulleted list entry.

**\`display: contents\`** — makes the element itself disappear from the layout, but its children remain in the document flow as if the parent didn't exist. Powerful for unwrapping wrappers without changing the visual layout. Be careful — older accessibility tools sometimes lose tree info with display: contents.

**\`display: none\`** — already covered.

For 95% of code, you'll use \`block\`, \`inline\`, \`inline-block\`, \`flex\`, \`grid\`, and \`none\`. The rest are good to recognize when you see them in someone else's code.`,
      callouts: [
        { type: "info", title: "display has two values now", content: "Modern CSS supports two-value display like 'display: inline flex' (outer × inner). Browser support is universal in 2024+. The single-value form still works the same way." },
      ],
    },
  ],
  exercises: [
    {
      id: "css09-ex1",
      title: "Convert spans to clickable pills",
      difficulty: 1,
      description: "Style three spans into colorful pill-shaped tags using inline-block.",
      requirements: [
        "Use display: inline-block",
        "Apply padding, background color, and border-radius",
        "Tags should sit next to each other horizontally",
      ],
      starterCode: { html: `<span class="pill">HTML</span>\n<span class="pill">CSS</span>\n<span class="pill">JS</span>`, css: `/* style .pill */` },
      hints: [
        "display: inline-block enables width/padding while staying inline",
        "border-radius: 999px makes a pill shape",
        "Add some margin between pills",
      ],
      solution: { html: `<span class="pill">HTML</span>\n<span class="pill">CSS</span>\n<span class="pill">JS</span>`, css: `.pill {\n  display: inline-block;\n  padding: 6px 14px;\n  margin: 4px;\n  background: #7C3AED;\n  color: white;\n  border-radius: 999px;\n  font-weight: 600;\n}` },
      solutionExplanation: "inline-block keeps spans flowing horizontally while letting padding take effect in all directions.",
    },
    {
      id: "css09-ex2",
      title: "Hide-without-collapse",
      difficulty: 2,
      description: "Three boxes in a row. Hide the middle box but keep its space reserved (so the third box doesn't shift left).",
      requirements: [
        "Three divs visible initially",
        "Middle div invisible but still takes space",
        "Use the right hide technique",
      ],
      starterCode: { html: `<div class="box a">A</div>\n<div class="box b">B</div>\n<div class="box c">C</div>`, css: `.box { display: inline-block; width: 80px; height: 80px; background: #00D4FF; margin: 4px; color: white; text-align: center; line-height: 80px; }\n.b { /* hide but keep space */ }` },
      hints: [
        "display: none removes from layout — wrong here",
        "visibility: hidden keeps space reserved",
        "Confirm the third box stays in its position",
      ],
      solution: { html: `<div class="box a">A</div>\n<div class="box b">B</div>\n<div class="box c">C</div>`, css: `.box { display: inline-block; width: 80px; height: 80px; background: #00D4FF; margin: 4px; color: white; text-align: center; line-height: 80px; }\n.b { visibility: hidden; }` },
      solutionExplanation: "visibility: hidden makes the element invisible but reserves its space. display: none would have shifted box C left.",
    },
    {
      id: "css09-ex3",
      title: "Build an inline-block navigation bar",
      difficulty: 3,
      description: "Build a horizontal navigation bar from a <ul> using inline-block on the <li>s. Style the links and remove default list bullets.",
      requirements: [
        "Use a <ul> with 4 <li><a>...</a></li> items",
        "Remove default bullet markers",
        "<li> uses display: inline-block",
        "Links have padding, color, and a hover effect",
      ],
      starterCode: { html: `<ul class="nav">\n  <li><a href="#">Home</a></li>\n  <li><a href="#">Posts</a></li>\n  <li><a href="#">About</a></li>\n  <li><a href="#">Contact</a></li>\n</ul>`, css: `/* style nav */` },
      hints: [
        "list-style: none removes bullets",
        "padding: 0; margin: 0 on the ul to remove defaults",
        "li { display: inline-block; } puts items in a row",
        "Use :hover on the anchor for hover effect",
      ],
      solution: { html: `<ul class="nav">\n  <li><a href="#">Home</a></li>\n  <li><a href="#">Posts</a></li>\n  <li><a href="#">About</a></li>\n  <li><a href="#">Contact</a></li>\n</ul>`, css: `.nav {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  background: #1a1a2e;\n}\n.nav li {\n  display: inline-block;\n}\n.nav a {\n  display: inline-block;\n  padding: 12px 18px;\n  color: white;\n  text-decoration: none;\n  font-weight: 500;\n}\n.nav a:hover {\n  background: #7C3AED;\n}` },
      solutionExplanation: "Inline-block on the li lays them out horizontally. Padding on the <a> (also inline-block) makes the entire link area clickable, including the padding.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "css09-q1", type: "mcq", question: "Which display value makes an element take full width and start a new line?", options: ["inline", "inline-block", "block", "none"], correctAnswer: 2, explanation: "block is the default for divs, paragraphs, headings — full width, new line, respects all sizing.", difficulty: 1 },
      { id: "css09-q2", type: "true-false", question: "An inline element ignores width and height properties.", options: ["True", "False"], correctAnswer: 0, explanation: "True. Setting width or height on a <span> or other default-inline element has no effect. Switch to inline-block or block to size it.", difficulty: 2 },
      { id: "css09-q3", type: "mcq", question: "What's the difference between display: none and visibility: hidden?", options: ["No difference", "display: none removes from layout entirely; visibility: hidden keeps space reserved but invisible", "visibility: hidden also removes from screen readers", "display: none is faster"], correctAnswer: 1, explanation: "Critical distinction: display: none collapses the space, visibility: hidden preserves it. Both hide visually.", difficulty: 2 },
      { id: "css09-q4", type: "mcq", question: "When should you use inline-block?", options: ["Never — use Flexbox", "When you need elements to sit side by side AND have width/height/padding", "Only for images", "Only inside <p>"], correctAnswer: 1, explanation: "inline-block is perfect for pill-shaped tags, buttons, or any element that needs to flow inline but also needs sizing.", difficulty: 2 },
      { id: "css09-q5", type: "spot-the-bug", question: "Why doesn't this width work?", code: `<span style="width: 200px; background: yellow">Hi</span>`, options: ["Wrong unit", "Spans are inline by default and ignore width", "Background prevents width", "Need !important"], correctAnswer: 1, explanation: "Spans are inline; width is silently ignored. Add display: inline-block or display: block.", difficulty: 2 },
      { id: "css09-q6", type: "mcq", question: "Which value removes an element from the accessibility tree?", options: ["opacity: 0", "visibility: hidden", "display: none", "All of the above"], correctAnswer: 3, explanation: "Tricky! display: none and visibility: hidden both remove from a11y. opacity: 0 keeps it accessible (still focusable, still announced). Use carefully.", difficulty: 3 },
      { id: "css09-q7", type: "mcq", question: "What's the gap between two inline-block divs caused by?", options: ["Browser bug", "The whitespace (newline + spaces) between the tags in HTML", "Default margin", "border collapse"], correctAnswer: 1, explanation: "Inline-block treats inter-tag whitespace as a real space. Modern fix: use Flexbox on the parent.", difficulty: 3 },
      { id: "css09-q8", type: "mcq", question: "Which display value makes children flow as if the parent doesn't exist (a 'transparent' wrapper)?", options: ["display: contents", "display: ghost", "display: invisible", "display: pass-through"], correctAnswer: 0, explanation: "display: contents removes the box from layout but keeps the children in the parent's flow. Useful with Grid/Flex.", difficulty: 3 },
    ],
  },
  cheatSheet: [
    { label: "Block (default for divs)", value: "Full width, new line, all sizing works" },
    { label: "Inline (default for spans)", value: "Content width, no width/height, no v-margin" },
    { label: "inline-block", value: "Inline flow + block sizing" },
    { label: "none", value: "Removed from layout & a11y" },
    { label: "visibility: hidden", value: "Invisible, space reserved" },
    { label: "Modern layouts", value: "display: flex / display: grid" },
    { label: "Hide visually only", value: ".sr-only utility" },
  ],
};

// ============================================================================
// CSS CHAPTER 10 — CSS Units
// ============================================================================
export const cssCh10: Chapter = {
  id: "css-ch-10",
  number: 10,
  title: "CSS Units — px, em, rem, %, vw, vh, fr",
  subtitle: "Pick the right unit for the job. The wrong one breaks responsiveness; the right one is bulletproof.",
  difficulty: "Beginner",
  estimatedMinutes: 35,
  xpReward: 130,
  prerequisites: ["css-ch-09"],
  partLabel: "Part 2: Layout",
  learningObjectives: [
    "Distinguish absolute units (px, pt) from relative units (em, rem, %, vw).",
    "Choose px, em, or rem appropriately for fonts, spacing, and borders.",
    "Use viewport units (vw, vh, dvh) and understand the mobile gotchas.",
    "Combine units with calc() and clamp() for responsive design.",
    "Understand why px is fine sometimes — and toxic other times.",
  ],
  sections: [
    {
      id: "css10-s1",
      title: "Absolute Units — px and Friends",
      whyItMatters: "Pixels are the simplest unit but also the most overused. Knowing when px is right and when it's wrong separates juniors from seniors.",
      content: `**Absolute units** have a fixed size that doesn't change based on context.

- \`px\` — pixels. The most common unit by far. 1px is one CSS pixel (which on most modern screens is roughly 1/96 of an inch — but the browser handles this).
- \`pt\` — points, used in print. 1pt = 1/72 inch. Don't use for screens.
- \`cm\`, \`mm\`, \`in\` — physical units. Only useful for print stylesheets.

\`\`\`
.button {
  padding: 10px 20px;
  border: 1px solid black;
  font-size: 16px;
}
\`\`\`

**When px is right:**

- Borders (1px, 2px). They look weird at non-integer values.
- Subtle shadows and outlines (1–4 px range).
- Fixed-pixel design specs (icons, small UI elements).

**When px is WRONG:**

- **Font sizes.** Using px for fonts breaks browser zoom for some users and ignores the user's preferred root font size. Use \`rem\` instead.
- **Spacing that scales with text.** If a user zooms text 200%, padding in px stays the same — looks broken. Use \`em\` or \`rem\`.
- **Major layout dimensions.** Hard-coding \`width: 800px\` will overflow on phones. Use \`%\`, \`max-width\`, or viewport units.

The rule of thumb: **px for fine details, relative units for everything that should scale with text or screen size.**`,
      callouts: [
        { type: "warning", title: "Don't use px for fonts", content: "Modern best practice is rem for font sizes. It respects user font-size preferences (some people enlarge their root font for readability)." },
        { type: "info", title: "1px is not 1 device pixel", content: "On retina/high-DPI screens, 1 CSS px = 2 or more device pixels. The browser handles the math." },
      ],
    },
    {
      id: "css10-s2",
      title: "em and rem — Relative to Font Size",
      whyItMatters: "These two units enable scalable, accessible designs. Confusing them is one of the most common CSS bugs.",
      content: `Both \`em\` and \`rem\` are relative to a font size. The difference is *which* font size.

**\`em\`** — relative to the **current element's** font size. Compounds with nesting.

\`\`\`
body { font-size: 16px; }
.parent { font-size: 1.5em; }    /* 1.5 × 16 = 24px */
.parent .child { font-size: 1.5em; }  /* 1.5 × 24 = 36px (compounds!) */
\`\`\`

The compounding is em's biggest pitfall. If you nest deep, font sizes balloon unexpectedly.

**\`rem\`** — relative to the **root** element's (\`<html>\`) font size. Doesn't compound.

\`\`\`
html { font-size: 16px; }
.parent { font-size: 1.5rem; }   /* 1.5 × 16 = 24px */
.parent .child { font-size: 1.5rem; } /* still 1.5 × 16 = 24px */
\`\`\`

Because rem is anchored to the root, it's predictable everywhere in your stylesheet. **rem is the modern default for font sizes and most spacing.**

**The big trick: 1rem = browser's default font size = usually 16px**, but users can override it. If a user sets their browser to 20px (for accessibility), every rem in your CSS scales proportionally. Your design becomes naturally responsive to user preferences. Pixel values don't get this benefit.

**Recommended pattern:**

\`\`\`
html { font-size: 100%; }   /* don't override unless intentional */

body { font-size: 1rem; }   /* 16px by default, scales to user pref */

h1 { font-size: 2.5rem; }   /* 40px → scales */
h2 { font-size: 2rem; }     /* 32px → scales */

.card {
  padding: 1.5rem;          /* 24px → scales with text */
  border-radius: 0.5rem;    /* 8px → scales */
  border: 1px solid #ccc;   /* px is fine for borders */
}
\`\`\`

**When to use em over rem:**

- Padding/margin inside a component that should scale with that component's font size. E.g. a button's padding should grow with its font size:

\`\`\`
.btn {
  padding: 0.5em 1em;        /* scales with the button's own font-size */
  font-size: 1rem;
}
.btn-large {
  font-size: 1.5rem;         /* now padding also grows */
}
\`\`\`

This is the classic em use case: component-relative spacing.`,
      callouts: [
        { type: "tip", title: "rem for global, em for component-local", content: "Default to rem everywhere. Use em only when you specifically want padding/margin to scale with the local font-size." },
        { type: "common-mistake", title: "Setting html font-size to 10px", content: "An old trick was `html { font-size: 62.5%; }` to make 1rem = 10px. This breaks user font-size preferences. Don't do it." },
      ],
      codeExamples: [
        {
          id: "css10-s2-ex1",
          title: "rem vs em demo",
          description: "Watch how em compounds and rem doesn't.",
          code: {
            html: `<div class="outer">\n  Outer (1.5em)\n  <div class="inner">Inner em (1.5em → compounds)</div>\n  <div class="inner-rem">Inner rem (1.5rem → from root)</div>\n</div>`,
            css: `html { font-size: 16px; }\n.outer { font-size: 1.5em; }            /* 24px */\n.inner { font-size: 1.5em; }            /* 1.5 × 24 = 36px */\n.inner-rem { font-size: 1.5rem; }       /* 1.5 × 16 = 24px */`,
          },
          explanation: ".inner inherits 24px from .outer, then multiplies by 1.5 again = 36px. .inner-rem ignores the parent and uses the root's 16px × 1.5 = 24px.",
          tryItPrompt: "Add a third level of nested .inner divs to see em explode further.",
        },
      ],
    },
    {
      id: "css10-s3",
      title: "Percentages — Relative to the Parent",
      whyItMatters: "Percentages let elements size themselves relative to their container. Essential for fluid layouts before Flexbox/Grid took over.",
      content: `\`%\` is relative to the **parent element's same property**. The "same property" part is critical.

- \`width: 50%\` — half the parent's width.
- \`height: 50%\` — half the parent's height (only works if parent has a defined height!).
- \`padding: 10%\` — 10% of the parent's WIDTH (yes, even for top/bottom padding — surprising but true).
- \`font-size: 80%\` — 80% of the parent's font-size (similar to em).

\`\`\`
.container {
  width: 800px;
  height: 600px;
}
.child {
  width: 50%;        /* 400px */
  height: 50%;       /* 300px */
  padding: 5%;       /* 40px on all sides — 5% of width even for top/bottom */
}
\`\`\`

**The height: % gotcha.** Setting height: 100% only works if every ancestor up to body and html has an explicit height. This is why "100% height layouts" used to be a nightmare. Modern fix: use \`height: 100vh\` (viewport units) or use Flexbox/Grid which handle percentage heights gracefully.

\`\`\`
html, body { height: 100%; }    /* required for child height: 100% to work */
\`\`\`

**Percentages are great for:**
- Image widths inside responsive containers (\`img { max-width: 100%; }\`).
- Multi-column layouts before Flexbox (less common now).
- Setting max-width to a percentage of the parent.

**Percentages are awkward for:**
- Heights (because of the parent-height requirement).
- Anything where you really mean "viewport size" — use vw/vh instead.`,
      callouts: [
        { type: "warning", title: "padding % is based on width", content: "Even padding-top: 10% is 10% of the parent's WIDTH. This is occasionally useful for aspect-ratio tricks but mostly confusing." },
      ],
    },
    {
      id: "css10-s4",
      title: "Viewport Units — vw, vh, vmin, vmax, dvh",
      whyItMatters: "Viewport units let elements size themselves to the screen, perfect for hero sections and full-screen modals.",
      content: `These units are based on the browser viewport (the visible area).

- \`vw\` = 1% of the viewport **width**. \`100vw\` = full viewport width.
- \`vh\` = 1% of the viewport **height**. \`100vh\` = full viewport height.
- \`vmin\` = 1% of the smaller of width/height. Useful for scaling something based on the limiting dimension.
- \`vmax\` = 1% of the larger.

\`\`\`
.hero {
  width: 100vw;
  height: 100vh;            /* full screen */
  font-size: 5vw;           /* big text, scales with screen */
}
\`\`\`

**The mobile 100vh problem.** On mobile browsers (especially iOS Safari), the URL bar appears and disappears as you scroll. \`100vh\` traditionally meant "the size when the URL bar is hidden" — which is BIGGER than the visible area when the bar is showing. Result: a "100vh hero" had its bottom hidden behind the URL bar.

The fix: **dynamic viewport units** (\`dvh\`, \`dvw\`):

\`\`\`
.hero { height: 100dvh; }   /* dynamic — adjusts as URL bar appears/hides */
\`\`\`

There are also:
- \`svh\` / \`svw\` — small viewport (URL bar visible)
- \`lvh\` / \`lvw\` — large viewport (URL bar hidden)
- \`dvh\` / \`dvw\` — dynamic, adjusts in real time

For modern code, use \`dvh\` for fullscreen mobile sections. Browser support is excellent (2023+).

**Common patterns:**

\`\`\`
/* Full-screen hero that works on mobile */
.hero { min-height: 100dvh; }

/* Side-by-side responsive columns */
.col { width: 50vw; }

/* Fluid headline that scales with screen */
h1 { font-size: 8vw; }      /* but cap with clamp() — see next section */
\`\`\``,
      callouts: [
        { type: "pro-tip", title: "Use dvh on mobile", content: "Replace 100vh with 100dvh for any full-screen mobile element. Solves the URL-bar bottom-clip problem." },
        { type: "warning", title: "Pure vw fonts get huge", content: "h1 { font-size: 8vw } looks fine on a phone (~30px) and ridiculous on a 32-inch monitor (~150px). Always clamp() it." },
      ],
    },
    {
      id: "css10-s5",
      title: "calc(), min(), max(), clamp() — Math With Units",
      whyItMatters: "These functions let you mix units and create truly fluid, responsive sizes that adapt to any screen.",
      content: `**\`calc()\`** lets you do arithmetic with mixed units:

\`\`\`
width: calc(100% - 20px);        /* full width minus 20px */
height: calc(100vh - 80px);      /* full height minus header */
font-size: calc(1rem + 0.5vw);   /* responsive font that grows slowly */
\`\`\`

You must put spaces around \`+\` and \`-\` (but not \`*\` and \`/\`).

**\`min(a, b, ...)\`** picks the smallest:

\`\`\`
width: min(800px, 100%);    /* 800px on big screens, 100% on small */
\`\`\`

**\`max(a, b, ...)\`** picks the largest:

\`\`\`
font-size: max(1rem, 14px);  /* never below 14px even if rem shrinks */
\`\`\`

**\`clamp(min, preferred, max)\`** picks a value within a range. This is the magic responsive font-size formula:

\`\`\`
h1 {
  font-size: clamp(1.5rem, 4vw + 1rem, 4rem);
  /*           min     ↑ scales       ↑ max
                        with viewport
  */
}
\`\`\`

On a tiny phone, 4vw + 1rem might be 1.4rem → clamped UP to 1.5rem.
On a 1920px monitor, 4vw + 1rem might be 5rem → clamped DOWN to 4rem.
Anywhere in between, it scales smoothly.

This is **fluid typography in one line**, replacing dozens of media queries. Same for fluid spacing, fluid padding, etc.

\`\`\`
.section {
  padding: clamp(2rem, 5vw, 6rem);   /* fluid padding */
}
.container {
  width: min(1200px, 100% - 2rem);   /* fluid container with margin */
}
\`\`\`

These four functions are some of the most powerful additions to modern CSS. Memorize \`clamp()\` — you'll use it constantly.`,
      callouts: [
        { type: "pro-tip", title: "clamp() is fluid magic", content: "clamp(min, fluid, max) replaces 90% of the media queries you used to write. Master it now." },
      ],
      microExercise: {
        instruction: "Make an h1 that's 1.5rem on small screens, scales fluidly with viewport (use 4vw), and caps at 3rem on large screens.",
        starterCode: { html: `<h1>Fluid title</h1>`, css: `h1 { /* clamp() here */ }` },
        hint: "h1 { font-size: clamp(1.5rem, 4vw, 3rem); }",
        solution: { html: `<h1>Fluid title</h1>`, css: `h1 { font-size: clamp(1.5rem, 4vw, 3rem); }` },
      },
    },
    {
      id: "css10-s6",
      title: "fr — The Grid Fraction Unit",
      whyItMatters: "fr is a unit that only exists inside CSS Grid. Knowing it now gives you a head start on the Grid chapters.",
      content: `\`fr\` stands for "fraction" and is used to distribute available space inside a grid.

\`\`\`
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  /*                    25% 50% 25% of available space */
}
\`\`\`

\`fr\` doesn't exist outside grid contexts. Inside grids, it's incredibly powerful: \`1fr 1fr 1fr\` gives three equal columns; \`200px 1fr\` gives a fixed sidebar plus flexible main content.

We dive into fr fully in chapters 15–16 (CSS Grid).`,
      callouts: [
        { type: "info", title: "fr only works in grids", content: "Outside display: grid, fr is invalid. Use it for grid-template-rows and grid-template-columns." },
      ],
    },
  ],
  exercises: [
    {
      id: "css10-ex1",
      title: "Convert px to rem",
      difficulty: 1,
      description: "Take this px-heavy CSS and convert font-sizes and spacing to rem.",
      requirements: [
        "Replace all font-size px values with rem (assume 1rem = 16px)",
        "Replace padding/margin px values with rem",
        "Keep border widths in px",
      ],
      starterCode: { html: `<h1 class="title">Title</h1>\n<p class="text">Some text content here.</p>`, css: `.title {\n  font-size: 32px;\n  margin-bottom: 16px;\n}\n.text {\n  font-size: 16px;\n  padding: 24px;\n  border: 1px solid #ccc;\n}` },
      hints: [
        "16px = 1rem, 24px = 1.5rem, 32px = 2rem",
        "Borders stay in px (they look weird in rem)",
      ],
      solution: { html: `<h1 class="title">Title</h1>\n<p class="text">Some text content here.</p>`, css: `.title {\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n.text {\n  font-size: 1rem;\n  padding: 1.5rem;\n  border: 1px solid #ccc;\n}` },
      solutionExplanation: "Fonts and major spacing in rem; borders stay in px. Now if a user changes their root font size, the design scales gracefully.",
    },
    {
      id: "css10-ex2",
      title: "Full-screen hero with viewport units",
      difficulty: 2,
      description: "Build a hero section that fills the viewport using dvh (mobile-friendly), with centered text using vw-based font.",
      requirements: [
        "Hero takes 100dvh height",
        "Centered content using flexbox",
        "Headline uses clamp() for fluid sizing",
      ],
      starterCode: { html: `<section class="hero">\n  <h1>Welcome to the future</h1>\n</section>`, css: `/* style hero */` },
      hints: [
        "min-height: 100dvh",
        "display: flex; align-items: center; justify-content: center",
        "font-size: clamp(2rem, 6vw, 5rem)",
      ],
      solution: { html: `<section class="hero">\n  <h1>Welcome to the future</h1>\n</section>`, css: `.hero {\n  min-height: 100dvh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #00D4FF, #7C3AED);\n  color: white;\n  padding: 2rem;\n}\n.hero h1 {\n  font-size: clamp(2rem, 6vw, 5rem);\n  text-align: center;\n  margin: 0;\n}` },
      solutionExplanation: "100dvh handles the mobile URL bar. Flexbox centers content. clamp() gives fluid responsive font scaling without media queries.",
    },
    {
      id: "css10-ex3",
      title: "Container with max-width and fluid padding",
      difficulty: 3,
      description: "Build a centered content container that's: fluid on small screens (with side padding), capped at 1200px on big screens, and uses clamp() for fluid vertical padding.",
      requirements: [
        "max-width capped at 1200px",
        "Centered horizontally (margin: auto)",
        "Side padding using min() to prevent edge-touch on mobile",
        "Vertical padding uses clamp(2rem, 5vw, 6rem)",
      ],
      starterCode: { html: `<div class="container">\n  <h2>Article title</h2>\n  <p>Body text body text body text body text body text body text body text body text body text body text.</p>\n</div>`, css: `/* responsive container */` },
      hints: [
        "width: min(1200px, 100% - 2rem) caps width and adds side margin in one line",
        "margin-inline: auto centers horizontally",
        "padding-block: clamp(2rem, 5vw, 6rem) for fluid vertical padding",
      ],
      solution: { html: `<div class="container">\n  <h2>Article title</h2>\n  <p>Body text body text body text body text body text body text body text body text body text body text.</p>\n</div>`, css: `.container {\n  width: min(1200px, 100% - 2rem);\n  margin-inline: auto;\n  padding-block: clamp(2rem, 5vw, 6rem);\n  background: #f8fafc;\n  border-radius: 1rem;\n}\n.container h2 {\n  font-size: clamp(1.5rem, 4vw, 2.5rem);\n}` },
      solutionExplanation: "min() handles both the max-width and the breathing room from screen edges in a single line. clamp() gives fluid responsive padding. No media queries needed.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "css10-q1", type: "mcq", question: "What's 1rem equal to?", options: ["16px always", "The current element's font size", "The root element's font size (default 16px, but can be user-overridden)", "100px"], correctAnswer: 2, explanation: "1rem = the <html> element's font-size, which defaults to 16px but respects user preferences.", difficulty: 1 },
      { id: "css10-q2", type: "true-false", question: "em compounds when nested; rem does not.", options: ["True", "False"], correctAnswer: 0, explanation: "True. Each level of em multiplies again. rem always references the root, so it's predictable.", difficulty: 2 },
      { id: "css10-q3", type: "mcq", question: "What does padding: 5% reference when set on a child element?", options: ["5% of the child's height", "5% of the child's width", "5% of the parent's height", "5% of the parent's width (even for top/bottom!)"], correctAnswer: 3, explanation: "All percentage padding (top, right, bottom, left) is based on the parent's WIDTH. Surprising but true.", difficulty: 3 },
      { id: "css10-q4", type: "mcq", question: "Why use 100dvh instead of 100vh?", options: ["dvh is faster", "100dvh adjusts dynamically as the mobile URL bar shows/hides; 100vh assumes URL bar hidden and overflows", "100vh is deprecated", "No difference"], correctAnswer: 1, explanation: "100vh on mobile means the BIG viewport (URL bar hidden), causing bottom content to clip when bar appears. dvh adjusts dynamically.", difficulty: 2 },
      { id: "css10-q5", type: "mcq", question: "What does clamp(1rem, 4vw, 3rem) return on a 1000px-wide screen?", options: ["1rem", "4vw = 40px", "3rem", "It depends on root font-size"], correctAnswer: 1, explanation: "4vw on 1000px = 40px = 2.5rem (assuming 16px root). That's between 1rem and 3rem, so it returns 40px (the preferred fluid value).", difficulty: 3 },
      { id: "css10-q6", type: "spot-the-bug", question: "Why doesn't this work?", code: `width: calc(100% -20px);`, options: ["Need %0 instead of 100%", "Missing space around the minus sign", "calc() needs px in both", "Need !important"], correctAnswer: 1, explanation: "calc() requires spaces around + and - operators. Should be `calc(100% - 20px)`.", difficulty: 2 },
      { id: "css10-q7", type: "mcq", question: "Which unit is best for borders?", options: ["em", "rem", "px", "%"], correctAnswer: 2, explanation: "Borders look best in px (1px, 2px) — fractional rem values often render fuzzy.", difficulty: 1 },
      { id: "css10-q8", type: "mcq", question: "Why is `html { font-size: 62.5% }` (the 1rem=10px hack) considered bad?", options: ["It's slower", "It overrides the user's font-size preference, hurting accessibility", "It causes layout bugs in Safari", "Nothing — it's recommended"], correctAnswer: 1, explanation: "Users who set a larger root font for readability lose that benefit. Stick with default and use rem for natural scaling.", difficulty: 3 },
    ],
  },
  cheatSheet: [
    { label: "px", value: "Fixed; great for borders, bad for fonts" },
    { label: "rem", value: "× root font-size (modern default)" },
    { label: "em", value: "× current font-size (compounds)" },
    { label: "%", value: "× parent's same property (height needs ancestor h)" },
    { label: "vw / vh", value: "% of viewport width/height" },
    { label: "dvh", value: "Dynamic viewport (mobile-friendly 100vh)" },
    { label: "fr", value: "Fraction of grid space (only inside grid)" },
    { label: "clamp(min, fluid, max)", value: "Fluid responsive value" },
    { label: "calc()", value: "Math with mixed units (mind the spaces!)" },
  ],
};

// ============================================================================
// CSS CHAPTER 11 — Positioning
// ============================================================================
export const cssCh11: Chapter = {
  id: "css-ch-11",
  number: 11,
  title: "Positioning — static, relative, absolute, fixed, sticky",
  subtitle: "Take elements out of the normal flow and put them anywhere on the page.",
  difficulty: "Intermediate",
  estimatedMinutes: 40,
  xpReward: 140,
  prerequisites: ["css-ch-10"],
  partLabel: "Part 2: Layout",
  learningObjectives: [
    "Distinguish all five position values and when each applies.",
    "Use top/right/bottom/left correctly with each position type.",
    "Position absolute elements relative to a chosen ancestor.",
    "Build sticky headers and overlays with fixed positioning.",
    "Avoid common positioning bugs (z-index, containing block).",
  ],
  sections: [
    {
      id: "css11-s1",
      title: "static (default) and relative — The Starting Point",
      whyItMatters: "Every element starts as `static`. Knowing the default and how `relative` modifies it without changing layout is the foundation.",
      content: `**\`position: static\`** is the default for every element. It means:

- The element follows the normal document flow (block stacks, inline flows).
- \`top\`, \`right\`, \`bottom\`, \`left\`, and \`z-index\` are **ignored**.
- It's the "I'm just a normal element" position.

You almost never write \`position: static\` explicitly — it's only useful to override a previous \`position\` value.

**\`position: relative\`** is the gateway. It means:

- The element stays in normal flow (its space is preserved).
- BUT \`top/right/bottom/left\` now offset the element from where it would normally be.
- It becomes a **positioning context** for absolutely-positioned children.

\`\`\`
.box {
  position: relative;
  top: 20px;       /* moves 20px DOWN from normal position */
  left: 30px;      /* moves 30px RIGHT from normal position */
}
\`\`\`

The space the element would have occupied stays empty — surrounding elements don't reflow. The element appears shifted from where it should have been.

**The most important hidden use of relative:** even without using top/left, setting \`position: relative\` on a parent makes it the **containing block** for any \`position: absolute\` children. This is the single most common reason to use relative.

\`\`\`
.card {
  position: relative;  /* doesn't visually move .card */
}
.card .badge {
  position: absolute;  /* now positioned relative to .card, not the page */
  top: 0;
  right: 0;
}
\`\`\`

This pattern — relative parent, absolute child — is everywhere. Tooltips on buttons, badges on cards, dropdowns from triggers.`,
      callouts: [
        { type: "pro-tip", title: "Relative without offsets", content: "The most common use of position: relative is on parents — to anchor absolutely-positioned children. The parent itself doesn't move." },
      ],
      codeExamples: [
        {
          id: "css11-s1-ex1",
          title: "Relative offset demo",
          description: "Box B is shifted but still takes up its original space.",
          code: {
            html: `<div class="box">A</div>\n<div class="box shifted">B (relative)</div>\n<div class="box">C</div>`,
            css: `.box { width: 100px; height: 60px; background: #00D4FF; margin: 8px; padding: 10px; color: white; }\n.shifted { position: relative; top: 20px; left: 50px; background: #7C3AED; }`,
          },
          explanation: "B moves 20px down and 50px right from its normal position. Notice C didn't move up — B's original space is still reserved.",
          tryItPrompt: "Add `position: absolute` to .shifted instead. Watch C immediately rise up to fill B's empty space.",
        },
      ],
    },
    {
      id: "css11-s2",
      title: "absolute — Out of Flow, Anchored to an Ancestor",
      whyItMatters: "Absolute positioning is the most powerful and most-misunderstood. Master it and you can build any UI overlay you can imagine.",
      content: `**\`position: absolute\`** does two things:

1. **Removes the element from normal flow** entirely. Other elements act as if it doesn't exist (no reserved space, no pushing siblings).
2. **Positions it via top/right/bottom/left relative to its nearest positioned ancestor.**

A "positioned ancestor" is any ancestor with \`position: relative\`, \`absolute\`, \`fixed\`, or \`sticky\` (i.e., not static). If no ancestor is positioned, the element is positioned relative to the **initial containing block**, which is essentially the \`<html>\` element / viewport.

\`\`\`
.parent {
  position: relative;   /* establishes positioning context */
  width: 300px;
  height: 200px;
  background: lightgray;
}
.child {
  position: absolute;
  top: 10px;
  right: 10px;          /* 10px from parent's top-right corner */
  width: 80px;
  height: 30px;
  background: red;
}
\`\`\`

The child sits in the top-right of the parent, no matter how the parent moves around the page.

**The two most common bugs:**

1. **"My absolute element is positioned relative to the page, not my container!"** — You forgot \`position: relative\` on the container.
2. **"My element won't show up!"** — Absolute elements need width/height (or top+bottom and left+right specified) to have size. They don't get parent width by default.

**Useful tricks:**

\`\`\`
/* Fill the entire parent */
.overlay {
  position: absolute;
  inset: 0;             /* shorthand for top/right/bottom/left = 0 */
}

/* Center an element absolutely */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);  /* shifts back by half its own size */
}
\`\`\`

The \`inset: 0\` trick is a one-line full-parent overlay — perfect for modal backdrops or image gradients.`,
      callouts: [
        { type: "warning", title: "Need a positioned ancestor", content: "Without position: relative on a parent, your absolute element will jump to the page's top-left corner. The #1 absolute bug." },
        { type: "pro-tip", title: "inset shorthand", content: "inset: 0 = top: 0; right: 0; bottom: 0; left: 0. Fills the parent. Modern shorthand, widely supported." },
      ],
      codeExamples: [
        {
          id: "css11-s2-ex1",
          title: "Card with badge in the corner",
          description: "Classic relative parent + absolute badge pattern.",
          code: {
            html: `<div class="card">\n  <span class="badge">NEW</span>\n  <h3>Product</h3>\n  <p>Lorem ipsum dolor sit.</p>\n</div>`,
            css: `.card {\n  position: relative;\n  width: 200px;\n  padding: 16px;\n  background: #1a1a2e;\n  color: white;\n  border-radius: 12px;\n}\n.badge {\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  background: #ef4444;\n  padding: 4px 8px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 700;\n}`,
          },
          explanation: "The badge is anchored to the card's top-right corner using negative offsets to overlap the corner. Without `position: relative` on .card, the badge would fly to the page's top-right.",
          tryItPrompt: "Remove `position: relative` from .card and watch the badge jump to the page's top-right corner.",
        },
      ],
    },
    {
      id: "css11-s3",
      title: "fixed — Anchored to the Viewport",
      whyItMatters: "Fixed creates UI that stays put when you scroll: persistent headers, floating action buttons, modal overlays.",
      content: `**\`position: fixed\`** is like \`absolute\` but:

- Always positioned relative to the **viewport**, ignoring all ancestors' positions.
- Stays in place when the user scrolls — doesn't move with the page.
- Removed from normal flow (like absolute).

\`\`\`
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: white;
  z-index: 100;       /* on top of other content */
}
\`\`\`

This is the classic "always-visible nav bar" pattern. Couple it with \`padding-top: 60px\` on the body so content doesn't hide behind the header.

**Use cases:**

- Persistent navigation bars.
- Floating action buttons (chat widgets, "back to top").
- Full-screen modal overlays.
- Cookie banners / notifications.

**The mobile transform trap.** Inside an element with a CSS \`transform\`, \`filter\`, or \`perspective\`, \`position: fixed\` becomes positioned relative to that element instead of the viewport. This breaks fixed headers when you wrap them inside a transformed parent. Surprising and rare — but worth knowing if a fixed element behaves wrong.`,
      callouts: [
        { type: "warning", title: "Fixed needs z-index", content: "Without z-index, your fixed header may sit BEHIND scrolling content. Add z-index: 100 (or higher) to keep it on top." },
        { type: "pro-tip", title: "Reserve space", content: "Fixed elements are out of flow. Add equivalent padding/margin to the body or a wrapper so content doesn't hide behind them." },
      ],
    },
    {
      id: "css11-s4",
      title: "sticky — The Best of Relative and Fixed",
      whyItMatters: "Sticky elements behave normally until you scroll past them, then stick in place. Game-changer for table headers and sidebar navigation.",
      content: `**\`position: sticky\`** behaves as **relative** until the element would scroll out of view, at which point it becomes **fixed** at the threshold you specify.

\`\`\`
.section-header {
  position: sticky;
  top: 0;            /* stick to the top of the viewport */
  background: white;
  z-index: 1;
}
\`\`\`

As you scroll, the header acts normally. When it reaches the top, it sticks there until its parent section scrolls completely past — then it un-sticks and the next section's header takes over.

**Critical rules for sticky:**

1. **You MUST specify at least one of top/right/bottom/left** to define the threshold. \`top: 0\` is by far the most common.
2. **The parent must NOT have \`overflow: hidden\` or \`overflow: auto\`** (with rare exceptions). One of the top sticky bugs is "my sticky doesn't stick" — usually because an ancestor has overflow restricting it.
3. **The parent's height must be greater than the sticky element's height.** Otherwise it sticks for zero pixels.

**Real-world uses:**

- Section headers in a long page (alphabetical contacts list).
- Table headers that stay visible while scrolling rows.
- "Add to cart" sidebars on product pages.
- A persistent on-scroll-up header (more JS needed for hide-on-scroll-down).

\`\`\`
/* A sticky table header that stays visible while scrolling rows */
table { border-collapse: collapse; }
thead th {
  position: sticky;
  top: 0;
  background: white;
  z-index: 1;
}
\`\`\`

Sticky is one of the highest-leverage CSS features added in the last decade. Use it freely.`,
      callouts: [
        { type: "common-mistake", title: "overflow: hidden kills sticky", content: "If any ancestor has overflow: hidden/auto/scroll, sticky behaves like relative inside it. Track up the tree if your sticky doesn't stick." },
        { type: "tip", title: "Multiple stickies", content: "You can have multiple sticky elements at different scroll points. Each sticks when its threshold is reached. Useful for stacked section headers." },
      ],
      codeExamples: [
        {
          id: "css11-s4-ex1",
          title: "Sticky section header",
          description: "Scroll the demo and watch the header stick to the top.",
          code: {
            html: `<div class="page">\n  <section>\n    <h2 class="sticky-h">Section A</h2>\n    <p>Lorem ipsum dolor sit amet.</p>\n    <p>Lorem ipsum dolor sit amet.</p>\n    <p>Lorem ipsum dolor sit amet.</p>\n    <p>Lorem ipsum dolor sit amet.</p>\n  </section>\n  <section>\n    <h2 class="sticky-h">Section B</h2>\n    <p>Different content here.</p>\n    <p>Different content here.</p>\n    <p>Different content here.</p>\n  </section>\n</div>`,
            css: `.page { max-height: 200px; overflow-y: scroll; padding: 0 1rem; border: 1px solid #ccc; }\n.sticky-h {\n  position: sticky;\n  top: 0;\n  background: #7C3AED;\n  color: white;\n  margin: 0;\n  padding: 8px;\n}\np { margin: 8px 0; }`,
          },
          explanation: "Each section's <h2> sticks to the top of the scrollable container. When section B's header arrives, it pushes section A's header out.",
          tryItPrompt: "Scroll up and down inside the box. Notice how each header takes over at the top.",
        },
      ],
    },
    {
      id: "css11-s5",
      title: "z-index and Stacking",
      whyItMatters: "When elements overlap, z-index decides who's on top. Misunderstanding z-index is one of the biggest sources of CSS frustration.",
      content: `\`z-index\` controls the stacking order of overlapping elements. Higher numbers appear above lower numbers.

\`\`\`
.modal { position: fixed; z-index: 1000; }
.dropdown { position: absolute; z-index: 50; }
.tooltip { position: absolute; z-index: 100; }
\`\`\`

**The two non-obvious rules:**

1. **z-index only works on positioned elements.** Setting z-index on a static element does nothing. The element must be relative, absolute, fixed, or sticky.

2. **z-index is scoped to "stacking contexts".** When an element creates a new stacking context, all its z-indexes are local to it — no matter how high a child's z-index, it can never appear above siblings of the parent. This is why "z-index: 9999 still doesn't work" is a recurring bug.

**Things that create a new stacking context:**
- Position + z-index (other than auto).
- opacity less than 1.
- transform, filter, perspective.
- will-change.
- isolation: isolate (deliberate creation).

\`\`\`
.parent {
  opacity: 0.99;        /* creates stacking context */
}
.parent .child {
  z-index: 9999;        /* still trapped inside .parent's context */
}
\`\`\`

**Best practices:**

- Avoid arbitrary high numbers (z-index: 999999). Use a small ladder: 10, 20, 100, 1000.
- Document your z-index scale in a CSS variable file.
- Use \`isolation: isolate\` on parents to deliberately scope z-index without side effects.

\`\`\`
:root {
  --z-dropdown: 50;
  --z-sticky: 100;
  --z-modal-backdrop: 900;
  --z-modal: 1000;
  --z-toast: 1100;
}
\`\`\`

A consistent scale prevents the "ever-escalating z-index war" that plagues older codebases.`,
      callouts: [
        { type: "warning", title: "z-index needs position", content: "z-index does nothing on position: static elements. Always set position first." },
        { type: "pro-tip", title: "isolation: isolate", content: "Adding isolation: isolate to a parent creates a new stacking context without any other side effects. Useful for scoping z-index inside components." },
      ],
    },
  ],
  exercises: [
    {
      id: "css11-ex1",
      title: "Card with corner badge",
      difficulty: 1,
      description: "Build a card with a 'NEW' badge anchored to its top-right corner.",
      requirements: [
        "Card has position: relative",
        "Badge has position: absolute, top: 0, right: 0",
        "Badge has distinctive styling (red bg, white text, small padding)",
      ],
      starterCode: { html: `<div class="card">\n  <span class="badge">NEW</span>\n  <h3>Product Title</h3>\n  <p>Description text.</p>\n</div>`, css: `/* style card and badge */` },
      hints: [
        "position: relative on .card",
        "position: absolute + top/right on .badge",
        "Padding and border-radius on the card for visual polish",
      ],
      solution: { html: `<div class="card">\n  <span class="badge">NEW</span>\n  <h3>Product Title</h3>\n  <p>Description text.</p>\n</div>`, css: `.card {\n  position: relative;\n  width: 240px;\n  padding: 1rem;\n  background: #1a1a2e;\n  color: white;\n  border-radius: 12px;\n}\n.badge {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  background: #ef4444;\n  color: white;\n  padding: 4px 10px;\n  font-size: 11px;\n  font-weight: 700;\n  border-radius: 999px;\n}` },
      solutionExplanation: "Position relative on the card establishes the positioning context; position absolute on the badge anchors to that context.",
    },
    {
      id: "css11-ex2",
      title: "Fixed header with scrollable content",
      difficulty: 2,
      description: "Build a page with a fixed header at the top and scrollable content below. Content must not hide under the header.",
      requirements: [
        "Header is fixed at top, full-width, height 60px",
        "Header has high z-index",
        "Body has padding-top to make room",
        "At least 5 content blocks to enable scrolling",
      ],
      starterCode: { html: `<header class="hdr">My Site</header>\n<main>\n  <p>Block 1</p>\n  <p>Block 2</p>\n  <p>Block 3</p>\n  <p>Block 4</p>\n  <p>Block 5</p>\n</main>`, css: `body { margin: 0; }` },
      hints: [
        "position: fixed; top: 0; left: 0; right: 0",
        "z-index: 100",
        "padding-top: 60px on body or main",
      ],
      solution: { html: `<header class="hdr">My Site</header>\n<main>\n  <p>Block 1</p>\n  <p>Block 2</p>\n  <p>Block 3</p>\n  <p>Block 4</p>\n  <p>Block 5</p>\n</main>`, css: `body { margin: 0; }\n.hdr {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  background: #1a1a2e;\n  color: white;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  z-index: 100;\n  font-weight: 700;\n}\nmain {\n  padding-top: 80px;\n  padding-inline: 1rem;\n}\nmain p {\n  height: 200px;\n  background: #e5e7eb;\n  margin-bottom: 1rem;\n  padding: 1rem;\n}` },
      solutionExplanation: "Fixed header stays at top while scrolling. Top padding on main reserves space so content starts below the header.",
    },
    {
      id: "css11-ex3",
      title: "Sticky alphabetical headers",
      difficulty: 3,
      description: "Build a contact list where each section letter (A, B, C) sticks to the top as you scroll past.",
      requirements: [
        "Scrollable container with fixed height",
        "Each <h2> letter is position: sticky; top: 0",
        "Headers stack and replace each other when scrolling",
        "At least 3 sections with multiple items each",
      ],
      starterCode: { html: `<div class="contacts">\n  <section>\n    <h2>A</h2>\n    <p>Alice</p><p>Aaron</p><p>Anna</p><p>Andrew</p>\n  </section>\n  <section>\n    <h2>B</h2>\n    <p>Brad</p><p>Bella</p><p>Ben</p><p>Brooke</p>\n  </section>\n  <section>\n    <h2>C</h2>\n    <p>Charlie</p><p>Chloe</p><p>Carl</p><p>Cara</p>\n  </section>\n</div>`, css: `/* style contacts and sticky headers */` },
      hints: [
        "Container needs max-height + overflow-y: scroll",
        "h2 { position: sticky; top: 0; background: ...; }",
        "Make sure NO ancestor has overflow: hidden",
      ],
      solution: { html: `<div class="contacts">\n  <section>\n    <h2>A</h2>\n    <p>Alice</p><p>Aaron</p><p>Anna</p><p>Andrew</p>\n  </section>\n  <section>\n    <h2>B</h2>\n    <p>Brad</p><p>Bella</p><p>Ben</p><p>Brooke</p>\n  </section>\n  <section>\n    <h2>C</h2>\n    <p>Charlie</p><p>Chloe</p><p>Carl</p><p>Cara</p>\n  </section>\n</div>`, css: `.contacts {\n  max-height: 250px;\n  overflow-y: scroll;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n}\n.contacts h2 {\n  position: sticky;\n  top: 0;\n  margin: 0;\n  padding: 8px 12px;\n  background: #7C3AED;\n  color: white;\n  font-size: 14px;\n}\n.contacts p {\n  margin: 0;\n  padding: 8px 12px;\n  border-bottom: 1px solid #eee;\n}` },
      solutionExplanation: "Sticky headers behave normally inside their section, then stick to top when section scrolls. Each new section's header pushes the previous one off.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "css11-q1", type: "mcq", question: "What's the default value of `position`?", options: ["relative", "static", "absolute", "auto"], correctAnswer: 1, explanation: "Every element starts with position: static, which means normal flow and ignores top/right/bottom/left.", difficulty: 1 },
      { id: "css11-q2", type: "true-false", question: "An absolutely positioned element is positioned relative to its parent by default.", options: ["True", "False"], correctAnswer: 1, explanation: "False — it's positioned relative to its nearest POSITIONED ancestor (one with relative/absolute/fixed/sticky). Without one, it goes relative to the viewport.", difficulty: 2 },
      { id: "css11-q3", type: "mcq", question: "What does `inset: 0` mean?", options: ["Padding 0", "top: 0; right: 0; bottom: 0; left: 0", "z-index: 0", "Reset all positioning"], correctAnswer: 1, explanation: "`inset: 0` is shorthand for setting all four offsets — fills the parent when combined with position: absolute.", difficulty: 2 },
      { id: "css11-q4", type: "mcq", question: "Why might `position: sticky` not work?", options: ["Browser bug", "An ancestor has overflow: hidden/auto/scroll", "Sticky requires JavaScript", "Need to set z-index"], correctAnswer: 1, explanation: "If any ancestor has overflow: hidden, auto, or scroll, sticky becomes scoped to that scrollable area — usually breaks the intended behavior.", difficulty: 3 },
      { id: "css11-q5", type: "spot-the-bug", question: "Why doesn't this badge appear in the corner of .card?", code: `.card { padding: 16px; }\n.card .badge { position: absolute; top: 0; right: 0; }`, options: ["Missing width/height", "Missing position: relative on .card — badge goes to viewport corner instead", "Badge needs z-index", "Need display: block"], correctAnswer: 1, explanation: "Without position: relative on .card, the absolute badge is positioned relative to the viewport (or next positioned ancestor).", difficulty: 2 },
      { id: "css11-q6", type: "mcq", question: "What's the difference between `fixed` and `absolute`?", options: ["No difference", "fixed is positioned relative to viewport (stays during scroll); absolute is positioned relative to nearest positioned ancestor", "fixed has higher z-index", "absolute is older"], correctAnswer: 1, explanation: "fixed always anchors to the viewport. absolute anchors to the nearest positioned ancestor.", difficulty: 2 },
      { id: "css11-q7", type: "mcq", question: "Which of these does NOT create a new stacking context?", options: ["opacity: 0.5", "transform: translate(0)", "position: relative without z-index", "isolation: isolate"], correctAnswer: 2, explanation: "position: relative WITHOUT z-index doesn't create a new stacking context. Adding z-index (other than auto) does. The other three always do.", difficulty: 3 },
      { id: "css11-q8", type: "mcq", question: "z-index does nothing on:", options: ["position: relative elements", "position: static elements (the default)", "position: fixed elements", "All elements with display: block"], correctAnswer: 1, explanation: "z-index requires the element to be positioned (relative, absolute, fixed, or sticky). On static, it's silently ignored.", difficulty: 2 },
    ],
  },
  cheatSheet: [
    { label: "static (default)", value: "Normal flow, ignores top/left etc." },
    { label: "relative", value: "Stays in flow, offset by top/left, anchors abs children" },
    { label: "absolute", value: "Out of flow, positioned to nearest positioned ancestor" },
    { label: "fixed", value: "Out of flow, positioned to viewport, stays on scroll" },
    { label: "sticky", value: "Relative until scroll threshold, then fixed" },
    { label: "Fill parent", value: "position: absolute; inset: 0;" },
    { label: "Center abs", value: "top:50%; left:50%; transform: translate(-50%,-50%)" },
    { label: "z-index needs", value: "position other than static" },
    { label: "Sticky breaker", value: "ancestor overflow: hidden/auto" },
  ],
};
