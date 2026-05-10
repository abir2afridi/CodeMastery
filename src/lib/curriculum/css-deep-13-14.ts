import type { Chapter } from "./types";

export const cssCh13: Chapter = {
  id: "css-ch-13",
  number: 13,
  title: "Flexbox — Part 1",
  subtitle: "The container properties that solved a decade of layout pain.",
  difficulty: "Intermediate",
  estimatedMinutes: 40,
  xpReward: 130,
  prerequisites: ["css-ch-12"],
  partLabel: "Part 2: Layout",
  learningObjectives: [
    "Explain the flex container vs flex item mental model.",
    "Use flex-direction to switch between row and column layouts.",
    "Control alignment with justify-content and align-items.",
    "Wrap items intelligently with flex-wrap and gap.",
    "Recognize when Flexbox is the right tool (and when Grid wins instead).",
  ],
  sections: [
    {
      id: "css13-s1",
      title: "What Flexbox Solved",
      whyItMatters: "Before Flexbox (2015 onward), centering a div vertically was a meme. Developers used floats, tables, absolute positioning hacks, and JavaScript. Flexbox replaced all of that with one line: display:flex.",
      realWorldAnalogy: "Flexbox is like a smart shelf that resizes, spaces, and aligns whatever you put on it — instead of you measuring every book.",
      content: `Flexbox is a **one-dimensional** layout system. You pick an axis (row or column) and it manages everything along that axis: spacing, alignment, sizing, wrapping.

You activate it on a parent:

\`\`\`
.container { display: flex; }
\`\`\`

Now every direct child is a **flex item**. The container controls how items are laid out; items control how they grow and shrink within those rules.

That two-level mental model — container vs item — is the entire game.`,
      callouts: [
        { type: "info", title: "One dimension at a time", content: "Flexbox does rows OR columns. For both at once (true 2D grids), use CSS Grid. They complement each other." },
      ],
    },
    {
      id: "css13-s2",
      title: "The Two Axes",
      whyItMatters: "Every Flexbox property targets either the main axis or the cross axis. Get the axes wrong in your head and nothing works the way you expect.",
      content: `When \`flex-direction\` is \`row\` (the default):
- **Main axis** runs left → right
- **Cross axis** runs top → bottom

When \`flex-direction\` is \`column\`:
- **Main axis** runs top → bottom
- **Cross axis** runs left → right

Two properties align along these axes:
- \`justify-content\` → aligns along the **main** axis
- \`align-items\` → aligns along the **cross** axis

That's why \`justify-content: center\` centers horizontally in a row but vertically in a column. The property hasn't changed — the axis has.`,
      codeExamples: [{
        id: "css13-ex1",
        title: "Centering anything, finally",
        description: "The 2010s holy grail in two lines.",
        code: {
          html: `<div class="box"><span>Centered!</span></div>`,
          css: `.box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n  background: #1f2937;\n  color: white;\n  border-radius: 8px;\n}`,
        },
        explanation: "justify-content centers along the main (horizontal) axis; align-items centers along the cross (vertical) axis.",
        tryItPrompt: "Change flex-direction to column. Does the centering still work? Why?",
      }],
    },
    {
      id: "css13-s3",
      title: "justify-content Values",
      whyItMatters: "These values are how you build navbars, button groups, and toolbars without margin hacks.",
      content: `The full set:

- \`flex-start\` — pack at the start (default)
- \`flex-end\` — pack at the end
- \`center\` — pack in the middle
- \`space-between\` — first/last touch the edges, equal gaps between
- \`space-around\` — equal space around each item (edges get half-gaps)
- \`space-evenly\` — equal space everywhere, including edges

\`space-between\` is the secret to nav bars: \`<logo on left><links on right>\` becomes one declaration.`,
      callouts: [
        { type: "pro-tip", title: "Use gap, not margins", content: "gap: 1rem on the container handles spacing between flex items uniformly. No more :last-child:margin-right:0 hacks." },
      ],
    },
    {
      id: "css13-s4",
      title: "Wrapping",
      whyItMatters: "By default flex items refuse to wrap — they squish instead. For responsive layouts you almost always want wrapping enabled.",
      content: `Three values:

- \`nowrap\` — single line, items shrink (default)
- \`wrap\` — overflow items move to a new line
- \`wrap-reverse\` — wrap, but new lines stack upward

The shorthand \`flex-flow\` combines direction + wrap:

\`\`\`
.container {
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
}
\`\`\`

When items wrap, \`align-content\` controls spacing **between rows** (different from align-items, which is per-row).`,
      microExercise: {
        instruction: "Make a responsive card grid: cards in a row, wrap when the screen narrows, with 1rem gaps.",
        starterCode: { html: `<div class="grid">\n  <div class="card">A</div>\n  <div class="card">B</div>\n  <div class="card">C</div>\n  <div class="card">D</div>\n</div>`, css: `.grid { /* your code */ }\n.card { flex: 0 0 200px; padding: 2rem; background: #4f46e5; color: white; }` },
        hint: "display:flex enables flex; flex-wrap:wrap allows multi-line; gap controls spacing.",
        solution: { html: `<div class="grid">\n  <div class="card">A</div>\n  <div class="card">B</div>\n  <div class="card">C</div>\n  <div class="card">D</div>\n</div>`, css: `.grid { display: flex; flex-wrap: wrap; gap: 1rem; }\n.card { flex: 0 0 200px; padding: 2rem; background: #4f46e5; color: white; }` },
      },
      deepDive: "flex-wrap reverses the cross-axis when set to wrap-reverse — even align-items: flex-start now starts from the bottom. This is rarely useful, but explains why it sometimes 'breaks'.",
    },
  ],
  exercises: [
    {
      id: "css13-ex1",
      title: "Navbar with logo + links",
      difficulty: 1,
      description: "Build a horizontal navbar with the logo on the left and links pushed to the right.",
      requirements: ["Use display:flex on the nav", "Logo on left, links on right", "Vertically center everything", "1rem gap between links"],
      starterCode: { html: `<nav class="bar">\n  <div class="logo">CodeMastery</div>\n  <div class="links"><a>Home</a><a>About</a><a>Contact</a></div>\n</nav>`, css: `.bar { padding: 1rem; background: #111827; color: white; }\n.links { display: flex; }\na { color: white; cursor: pointer; }` },
      hints: ["justify-content:space-between separates two children to opposite ends", "align-items:center aligns vertically", "Add gap to .links for spacing"],
      solution: { html: `<nav class="bar">\n  <div class="logo">CodeMastery</div>\n  <div class="links"><a>Home</a><a>About</a><a>Contact</a></div>\n</nav>`, css: `.bar { display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: #111827; color: white; }\n.links { display: flex; gap: 1rem; }\na { color: white; cursor: pointer; }` },
      solutionExplanation: "space-between pushes the logo and link group to the edges. align-items vertically centers them on the cross axis.",
    },
    {
      id: "css13-ex2",
      title: "Card grid that wraps",
      difficulty: 2,
      description: "Build a row of cards that wrap to new lines when the viewport narrows.",
      requirements: ["Cards have fixed width (~200px) but can grow", "Wrap to new lines as needed", "Even gaps between cards horizontally and vertically"],
      starterCode: { html: `<div class="grid">\n  <div class="card">1</div>\n  <div class="card">2</div>\n  <div class="card">3</div>\n  <div class="card">4</div>\n  <div class="card">5</div>\n</div>`, css: `.card { padding: 2rem; background: #6366f1; color: white; text-align: center; border-radius: 8px; }` },
      hints: ["display:flex + flex-wrap:wrap", "gap handles both axes for free", "flex: 1 1 200px for grow with min width"],
      solution: { html: `<div class="grid">\n  <div class="card">1</div>\n  <div class="card">2</div>\n  <div class="card">3</div>\n  <div class="card">4</div>\n  <div class="card">5</div>\n</div>`, css: `.grid { display: flex; flex-wrap: wrap; gap: 1rem; }\n.card { flex: 1 1 200px; padding: 2rem; background: #6366f1; color: white; text-align: center; border-radius: 8px; }` },
      solutionExplanation: "flex: 1 1 200px means grow, shrink, with a 200px ideal width. Combined with wrap, the cards fill rows then break.",
    },
    {
      id: "css13-ex3",
      title: "Sticky footer layout",
      difficulty: 3,
      description: "Make the footer stick to the bottom even when content is short — using only Flexbox on body.",
      requirements: ["body uses flex column, min-height:100vh", "main content grows to fill available space", "Footer naturally sits at bottom"],
      starterCode: { html: `<body>\n  <header>Header</header>\n  <main>Short content</main>\n  <footer>Footer</footer>\n</body>`, css: `header, footer { padding: 1rem; background: #1f2937; color: white; }\nmain { padding: 1rem; }` },
      hints: ["Set body display:flex with flex-direction:column", "min-height: 100vh on body", "main { flex: 1 } makes it absorb extra space"],
      solution: { html: `<body>\n  <header>Header</header>\n  <main>Short content</main>\n  <footer>Footer</footer>\n</body>`, css: `body { display: flex; flex-direction: column; min-height: 100vh; margin: 0; }\nmain { flex: 1; padding: 1rem; }\nheader, footer { padding: 1rem; background: #1f2937; color: white; }` },
      solutionExplanation: "Column flex on body makes main grow vertically with flex:1, pushing footer to the bottom. No JavaScript, no absolute positioning.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "css13-q1", type: "mcq", question: "Which property aligns items along the main axis?", options: ["align-items", "justify-content", "place-items", "align-content"], correctAnswer: 1, explanation: "justify-content is for the main axis; align-items is for the cross axis.", difficulty: 1 },
      { id: "css13-q2", type: "mcq", question: "If flex-direction is column, which axis is vertical?", options: ["Main", "Cross", "Both", "Neither"], correctAnswer: 0, explanation: "Main axis follows flex-direction. Column = main axis is vertical.", difficulty: 2 },
      { id: "css13-q3", type: "mcq", question: "Which value puts equal space between items but none at the edges?", options: ["space-around", "space-evenly", "space-between", "center"], correctAnswer: 2, explanation: "space-between: edges flush, equal gaps inside. space-around adds half-gaps at the edges.", difficulty: 2 },
      { id: "css13-q4", type: "true-false", question: "By default, flex items wrap to new lines when the row overflows.", options: ["True", "False"], correctAnswer: 1, explanation: "Default is nowrap — items shrink instead. Add flex-wrap:wrap to enable wrapping.", difficulty: 1 },
      { id: "css13-q5", type: "mcq", question: "Best modern way to space flex items evenly?", options: ["margin-right on each", "padding on the parent", "gap on the parent", ":not(:last-child) margin"], correctAnswer: 2, explanation: "gap is supported everywhere now and applies to both axes when items wrap.", difficulty: 2 },
    ],
  },
  cheatSheet: [
    { label: "Activate", value: "display: flex" },
    { label: "Direction", value: "row | row-reverse | column | column-reverse" },
    { label: "Main axis align", value: "justify-content: flex-start|center|space-between|space-around|space-evenly" },
    { label: "Cross axis align", value: "align-items: stretch|flex-start|center|flex-end|baseline" },
    { label: "Wrap", value: "flex-wrap: nowrap|wrap|wrap-reverse" },
    { label: "Spacing", value: "gap: 1rem" },
    { label: "Shorthand", value: "flex-flow: row wrap" },
  ],
};

export const cssCh14: Chapter = {
  id: "css-ch-14",
  number: 14,
  title: "Flexbox — Part 2",
  subtitle: "Item properties: how individual children grow, shrink, and reorder.",
  difficulty: "Intermediate",
  estimatedMinutes: 40,
  xpReward: 130,
  prerequisites: ["css-ch-13"],
  partLabel: "Part 2: Layout",
  learningObjectives: [
    "Use flex-grow, flex-shrink, and flex-basis to control item sizing.",
    "Understand the flex shorthand and its sane defaults.",
    "Override container alignment per-item with align-self.",
    "Reorder items visually without changing the HTML.",
    "Build real layouts: holy grail, sidebar, equal-height cards.",
  ],
  sections: [
    {
      id: "css14-s1",
      title: "The Flex Shorthand",
      whyItMatters: "Almost every flex item you'll write uses the flex shorthand. Knowing what its values mean saves you from staring at flex: 1 1 0 wondering what's happening.",
      content: `\`flex\` is shorthand for three properties:

\`\`\`
flex: <flex-grow> <flex-shrink> <flex-basis>;
\`\`\`

- **flex-grow** — how much extra space this item claims (default 0)
- **flex-shrink** — how willingly it shrinks when there's not enough room (default 1)
- **flex-basis** — the ideal starting size before grow/shrink kick in (default auto)

The three most useful values:

\`\`\`
flex: 0 0 auto;   /* don't grow, don't shrink — rigid */
flex: 1;          /* grow to fill space — same as 1 1 0 */
flex: 1 1 200px;  /* ideal 200px, but flex if needed */
\`\`\``,
      callouts: [
        { type: "common-mistake", title: "flex: 1 vs flex: auto", content: "flex: 1 sets basis to 0, so all flex:1 items get equal width regardless of content. flex: auto starts from content size — items with more text get more space." },
      ],
    },
    {
      id: "css14-s2",
      title: "Overriding Per Item",
      whyItMatters: "The container sets the rule; align-self lets one item break it. Useful for tooltip arrows, badges, sticky CTAs in a row of buttons.",
      content: `\`align-self\` accepts the same values as \`align-items\` and overrides it for one item:

\`\`\`
.container { align-items: center; }
.special { align-self: flex-end; }
\`\`\`

The special item drops to the bottom of the row even though everything else is centered.

There's no \`justify-self\` in Flexbox (Grid has it). The Flexbox equivalent is \`margin-left: auto\` — an auto margin absorbs all available space and pushes the item:

\`\`\`
.spacer-pusher { margin-left: auto; }
\`\`\`

This is THE classic trick for "logo on left, login button on right" navbars when you can't use space-between.`,
    },
    {
      id: "css14-s3",
      title: "Visual Reordering",
      whyItMatters: "The order property moves items visually without touching the HTML. Critical for accessibility (screen reader order matches DOM) and for swapping layouts at different breakpoints.",
      content: `Every flex item has \`order: 0\` by default. Lower numbers come first. Negative values are allowed.

\`\`\`
.first  { order: -1; }
.last   { order: 99; }
\`\`\`

Use case: on mobile you want navigation BELOW the headline; on desktop ABOVE. Same HTML, different orders at different breakpoints.

\`\`\`
@media (min-width: 768px) {
  nav { order: 0; }
  h1  { order: 1; }
}
\`\`\``,
      callouts: [
        { type: "warning", title: "Order is visual only", content: "Screen readers and keyboard tab navigation follow DOM order, not visual order. Heavy use of `order` creates accessibility bugs — keyboard users tab in a different sequence than they see." },
      ],
      microExercise: {
        instruction: "A row of three boxes A B C — visually display them as C A B without changing the HTML.",
        starterCode: { html: `<div class="row">\n  <div>A</div><div>B</div><div>C</div>\n</div>`, css: `.row { display: flex; gap: 1rem; }\n.row > div { padding: 1rem; background: #6366f1; color: white; }` },
        hint: "Use order. The item you want first needs the lowest order number.",
        solution: { html: `<div class="row">\n  <div>A</div><div>B</div><div>C</div>\n</div>`, css: `.row { display: flex; gap: 1rem; }\n.row > div { padding: 1rem; background: #6366f1; color: white; }\n.row > div:nth-child(3) { order: -1; }` },
      },
    },
    {
      id: "css14-s4",
      title: "Real Layouts",
      whyItMatters: "Theory is forgettable; patterns stick. These three patterns cover 80% of UI work.",
      content: `**Sidebar + main**:

\`\`\`
.layout { display: flex; gap: 1rem; }
.sidebar { flex: 0 0 240px; }
.main    { flex: 1; }
\`\`\`

**Equal-height cards** (free with flex):

\`\`\`
.cards { display: flex; gap: 1rem; }
.card  { flex: 1; padding: 1rem; }
\`\`\`

All cards stretch to the height of the tallest — no min-height hacks.

**Push-to-end** (margin-auto trick):

\`\`\`
.toolbar { display: flex; gap: 0.5rem; }
.toolbar .logout { margin-left: auto; }
\`\`\``,
      deepDive: "When flex-basis is auto, the item is sized by its content first; when it's 0, it's sized purely by grow ratios. This is why mixing flex:1 and flex:auto in the same container produces uneven results — they're measuring different things.",
    },
  ],
  exercises: [
    {
      id: "css14-ex1",
      title: "Sidebar layout",
      difficulty: 1,
      description: "240px sidebar on the left, main content fills the rest.",
      requirements: ["Container uses display:flex", "Sidebar fixed at 240px wide", "Main content takes all remaining space", "1rem gap between"],
      starterCode: { html: `<div class="layout">\n  <aside>Sidebar</aside>\n  <main>Main content</main>\n</div>`, css: `aside { background: #1f2937; color: white; padding: 1rem; }\nmain { background: #f3f4f6; padding: 1rem; }` },
      hints: ["aside: flex 0 0 240px", "main: flex 1", "gap on parent"],
      solution: { html: `<div class="layout">\n  <aside>Sidebar</aside>\n  <main>Main content</main>\n</div>`, css: `.layout { display: flex; gap: 1rem; }\naside { flex: 0 0 240px; background: #1f2937; color: white; padding: 1rem; }\nmain { flex: 1; background: #f3f4f6; padding: 1rem; }` },
      solutionExplanation: "0 0 240px = no grow, no shrink, fixed 240px. flex:1 on main = grow to fill remaining space.",
    },
    {
      id: "css14-ex2",
      title: "Toolbar with right-aligned action",
      difficulty: 2,
      description: "Three buttons on the left and a Logout button pushed to the far right — using only margin trickery.",
      requirements: ["No space-between on container", "Use margin-left:auto on the logout button", "Container is display:flex with 0.5rem gap"],
      starterCode: { html: `<div class="bar">\n  <button>File</button>\n  <button>Edit</button>\n  <button>View</button>\n  <button class="logout">Logout</button>\n</div>`, css: `.bar { background: #111827; padding: 0.5rem; }\nbutton { padding: 0.5rem 1rem; }` },
      hints: ["Auto margins absorb leftover space", "Apply margin-left:auto to .logout", "display:flex on .bar"],
      solution: { html: `<div class="bar">\n  <button>File</button>\n  <button>Edit</button>\n  <button>View</button>\n  <button class="logout">Logout</button>\n</div>`, css: `.bar { display: flex; gap: 0.5rem; background: #111827; padding: 0.5rem; }\nbutton { padding: 0.5rem 1rem; }\n.logout { margin-left: auto; }` },
      solutionExplanation: "An auto left margin on a flex item eats every pixel of free space, pushing the item to the far edge — without affecting the others.",
    },
    {
      id: "css14-ex3",
      title: "Reorder for mobile",
      difficulty: 3,
      description: "On desktop: image left, text right. On mobile: text on top, image below — same HTML.",
      requirements: ["Container uses display:flex", "Default (mobile): flex-direction column, image after text", "Above 768px: row, image first then text", "Use order, not flex-direction:row-reverse"],
      starterCode: { html: `<div class="hero">\n  <div class="text">Headline and copy</div>\n  <img src="https://placehold.co/200" alt="">\n</div>`, css: `/* your code */` },
      hints: ["display:flex with flex-direction:column for mobile default", "Inside @media (min-width:768px), set row + use order on the image", "order:-1 puts image before text"],
      solution: { html: `<div class="hero">\n  <div class="text">Headline and copy</div>\n  <img src="https://placehold.co/200" alt="">\n</div>`, css: `.hero { display: flex; flex-direction: column; gap: 1rem; }\n@media (min-width: 768px) {\n  .hero { flex-direction: row; align-items: center; }\n  .hero img { order: -1; }\n}` },
      solutionExplanation: "DOM order keeps text first (good for SEO and screen readers), but at desktop sizes the image visually moves to the left via order:-1.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "css14-q1", type: "mcq", question: "What does flex: 1 expand to?", options: ["1 1 auto", "1 1 0", "1 0 auto", "0 1 1"], correctAnswer: 1, explanation: "flex:1 sets grow=1, shrink=1, basis=0. All flex:1 items get equal slices regardless of content.", difficulty: 2 },
      { id: "css14-q2", type: "mcq", question: "Best way to push one flex item to the far right?", options: ["float: right", "position: absolute", "margin-left: auto", "text-align: right"], correctAnswer: 2, explanation: "Auto margins absorb all leftover space on a flex item.", difficulty: 2 },
      { id: "css14-q3", type: "true-false", question: "The order property changes the tab order for keyboard users.", options: ["True", "False"], correctAnswer: 1, explanation: "Order is visual-only. Tab order follows DOM order — which can create accessibility bugs.", difficulty: 2 },
      { id: "css14-q4", type: "mcq", question: "Which makes a flex item rigid (no grow, no shrink)?", options: ["flex: 0", "flex: none", "flex: 1 0 auto", "flex: auto"], correctAnswer: 1, explanation: "flex: none = 0 0 auto. Item refuses to grow or shrink.", difficulty: 2 },
      { id: "css14-q5", type: "mcq", question: "How do you make one item bottom-aligned in a row where everything else is centered?", options: ["align-content: end on parent", "align-self: flex-end on the item", "margin-bottom: 0 on the item", "vertical-align: bottom"], correctAnswer: 1, explanation: "align-self overrides the container's align-items for a single item.", difficulty: 2 },
    ],
  },
  cheatSheet: [
    { label: "Grow to fill", value: "flex: 1" },
    { label: "Fixed size", value: "flex: 0 0 240px" },
    { label: "Rigid", value: "flex: none" },
    { label: "Override align", value: "align-self: flex-end" },
    { label: "Push right", value: "margin-left: auto" },
    { label: "Reorder", value: "order: -1" },
    { label: "Equal columns", value: "all children: flex: 1" },
  ],
};
