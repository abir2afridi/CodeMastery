import type { Chapter } from "./types";

export const cssCh05: Chapter = {
  id: "css-ch-05",
  number: 5,
  title: "Inheritance & The Cascade Deep Dive",
  subtitle: "How values flow down the DOM tree, and why your styles sometimes magically appear (or don't).",
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  xpReward: 100,
  prerequisites: ["css-ch-04"],
  partLabel: "Part 1: CSS Fundamentals",
  learningObjectives: [
    "Identify which CSS properties inherit by default and which don't.",
    "Use inherit, initial, unset, and revert keywords correctly.",
    "Understand the full cascade order from origin to specificity to source order.",
    "Predict the computed value of any property on any element.",
  ],
  sections: [
    {
      id: "css05-s1",
      title: "What Inheritance Means",
      whyItMatters: "Inheritance is why setting font-family on <body> magically applies to every paragraph. Misunderstanding it leads to constant 'why is my style not working?' confusion.",
      realWorldAnalogy: "Inheritance is like family traits. Children inherit eye color from parents (font-family inherits). But children don't inherit your bank account (margin doesn't inherit) — that's an explicit transfer, not automatic.",
      content: `Some CSS properties **inherit** — meaning their value flows down to descendants automatically. Others don't.

**Properties that inherit by default** (mostly typography and text-related):
- color
- font-family, font-size, font-weight, font-style
- line-height
- text-align, text-indent, text-transform
- letter-spacing, word-spacing, white-space
- visibility
- cursor
- list-style

**Properties that do NOT inherit** (mostly box and layout):
- margin, padding
- border
- width, height
- background
- display, position, top/right/bottom/left
- float, clear
- z-index

So this works:

\`\`\`
body { color: navy; font-family: Georgia; }
\`\`\`

Every \`<p>\`, \`<h1>\`, \`<span>\`, etc. inside body will be navy Georgia — even though you never targeted them. That's inheritance.

But this does NOT cascade down to children:

\`\`\`
body { background: pink; }  /* only body has pink bg */
body { padding: 20px; }     /* only body has padding */
\`\`\`

If you want a child to inherit a non-inheriting property, force it:

\`\`\`
.child { background: inherit; }
\`\`\``,
      callouts: [
        { type: "info", title: "Why this split?", content: "Typography needs to cascade (you don't want every element to specify font). Layout doesn't (you don't want every child to repeat margin). The split is intentional and ergonomic." },
      ],
    },
    {
      id: "css05-s2",
      title: "The Four Magic Keywords",
      whyItMatters: "Knowing inherit/initial/unset/revert lets you reset or force values precisely — essential for component libraries and design systems.",
      content: `CSS provides four global keywords usable on any property:

**\`inherit\`** — explicitly take the parent's computed value.
\`\`\`
.icon { color: inherit; }  /* match parent text color */
\`\`\`

**\`initial\`** — reset to the property's CSS-spec default value.
\`\`\`
button { all: initial; }  /* strip every browser style */
\`\`\`
Note: \`initial\` for \`color\` is **black**, not whatever your design uses.

**\`unset\`** — behave like \`inherit\` if the property normally inherits, otherwise like \`initial\`. The "smart reset."

**\`revert\`** — roll back to the browser's default user-agent stylesheet value (closer to "what would happen if no author CSS existed").

Practical use:

\`\`\`
/* Reset a single element's styles */
.fresh-start {
  all: revert;  /* back to browser defaults */
}

/* Match parent color regardless of selector */
a {
  color: inherit;
  text-decoration: none;
}
\`\`\``,
      codeExamples: [
        {
          id: "css05-s2-ex1",
          title: "Inheritance vs explicit transfer",
          description: "Watch how color inherits but background doesn't.",
          code: {
            html: `<div class="parent">\n  Parent text\n  <p class="child">Child paragraph (inherits color, not bg)</p>\n  <p class="forced">Child with forced bg inheritance</p>\n</div>`,
            css: `.parent {\n  color: white;\n  background: navy;\n  padding: 16px;\n}\n.child {\n  /* color: white inherited automatically */\n  /* background: NOT inherited — transparent */\n  padding: 8px;\n}\n.forced {\n  background: inherit;  /* explicit */\n  padding: 8px;\n}`,
          },
          explanation: "The first child paragraph has white text (inherited) but transparent background (default). The second forces background: inherit to take navy from parent.",
          tryItPrompt: "Add a third <p> with `background: initial; color: initial;` and see how it differs.",
        },
      ],
    },
    {
      id: "css05-s3",
      title: "The Full Cascade Order",
      whyItMatters: "When two rules conflict, the cascade decides who wins. Knowing the exact order eliminates the urge to reach for !important.",
      content: `The browser resolves a property's value through this exact priority cascade (highest beats lowest):

1. **Origin + importance** — In order: transition values → !important user-agent → !important user → !important author → animations → normal author → normal user → normal user-agent.
2. **Specificity** — Higher specificity wins (covered in chapter 4).
3. **Source order** — If everything else is equal, the rule that appears later in the CSS wins.

Within "author" (your CSS), the simple version most of the time:

1. !important rules
2. Specificity (inline > ID > class > element)
3. Source order (later wins)

Example:

\`\`\`
/* Rule A */ .btn { color: blue; }
/* Rule B */ .btn { color: red; }
/* B wins — same specificity, later wins */

/* Rule C */ button.btn { color: green; }
/* C wins — higher specificity */

/* Rule D */ .btn { color: orange !important; }
/* D wins — !important beats normal */
\`\`\`

**Avoiding !important:** 99% of !important uses are because the developer didn't understand specificity. Increase specificity (\`button.btn\` instead of \`.btn\`) instead. Reserve !important for utility overrides like \`.hidden { display: none !important; }\`.`,
      callouts: [
        { type: "warning", title: "!important is contagious", content: "Once you use !important, the only way to override is another !important. Codebases that adopt it spiral into !important wars. Avoid." },
      ],
      microExercise: {
        instruction: "Make ALL paragraphs inside .article inherit purple color from .article, even though you'll set background separately on each.",
        starterCode: { html: '<div class="article"><p>One</p><p>Two</p></div>', css: ".article { color: /* set color here */; }\n.article p { /* set background here */ }" },
        hint: "color inherits automatically — just set it on .article. background must be set per element.",
        solution: { html: '<div class="article"><p>One</p><p>Two</p></div>', css: ".article { color: purple; }\n.article p { background: lightgray; padding: 8px; }" },
      },
    },
  ],
  exercises: [
    {
      id: "css05-ex1",
      title: "Style with inheritance",
      difficulty: 1,
      description: "Set font and color once on body so all child elements (h1, p, span) automatically inherit.",
      requirements: ["Only ONE rule on body", "All child text matches"],
      starterCode: { html: "<h1>Title</h1><p>Para <span>span</span></p>", css: "/* one rule */" },
      hints: ["body { color: ...; font-family: ...; }"],
      solution: { html: "<h1>Title</h1><p>Para <span>span</span></p>", css: "body {\n  color: #1a365d;\n  font-family: Georgia, serif;\n}" },
      solutionExplanation: "color and font-family inherit automatically — one rule covers every descendant.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "css05-q1", type: "mcq", question: "Which of these inherits by default?", options: ["margin", "background", "color", "border"], correctAnswer: 2, explanation: "Typography properties like color inherit; layout/box properties don't.", difficulty: 1 },
      { id: "css05-q2", type: "mcq", question: "What does the 'inherit' keyword do?", options: ["Resets to browser default", "Takes parent's computed value explicitly", "Removes the property", "Inherits from siblings"], correctAnswer: 1, explanation: "inherit forces the property to use the parent element's computed value.", difficulty: 2 },
      { id: "css05-q3", type: "mcq", question: "Which keyword is the smart reset (inherit if normally inherited, else initial)?", options: ["revert", "unset", "auto", "default"], correctAnswer: 1, explanation: "unset = inherit for inherited properties, initial for non-inherited properties.", difficulty: 3 },
      { id: "css05-q4", type: "mcq", question: "When two rules have equal specificity, who wins?", options: ["The first one written", "The last one written", "It's random", "Neither, both apply"], correctAnswer: 1, explanation: "Source order tiebreaker: later wins.", difficulty: 2 },
      { id: "css05-q5", type: "true-false", question: "background-color inherits from the parent by default.", options: ["True", "False"], correctAnswer: 1, explanation: "False — backgrounds are transparent by default, allowing the parent's color to show through visually but not be inherited.", difficulty: 2 },
      { id: "css05-q6", type: "mcq", question: "Best alternative to using !important?", options: ["Use it everywhere", "Increase selector specificity", "Use inline styles", "Use JavaScript"], correctAnswer: 1, explanation: "Higher-specificity selectors solve almost all 'why isn't my style applying' problems without the !important pitfalls.", difficulty: 2 },
    ],
  },
  cheatSheet: [
    { label: "Inherits", value: "color, font-*, line-height, visibility" },
    { label: "Doesn't inherit", value: "margin, padding, border, background" },
    { label: "Force inherit", value: "property: inherit;" },
    { label: "Reset to default", value: "property: initial;" },
    { label: "Smart reset", value: "property: unset;" },
    { label: "Cascade order", value: "!important > specificity > source order" },
  ],
};

export const cssCh06: Chapter = {
  id: "css-ch-06",
  number: 6,
  title: "The Box Model",
  subtitle: "Every element on a webpage is a box. Master the box, master CSS.",
  difficulty: "Beginner",
  estimatedMinutes: 40,
  xpReward: 120,
  prerequisites: ["css-ch-05"],
  partLabel: "Part 1: CSS Fundamentals",
  learningObjectives: [
    "Identify content, padding, border, and margin in any element.",
    "Calculate the total rendered size of a box.",
    "Switch between content-box and border-box and explain why border-box is the default in modern projects.",
    "Use margin collapsing intentionally rather than fighting it.",
  ],
  sections: [
    {
      id: "css06-s1",
      title: "The Four Layers of Every Element",
      whyItMatters: "Every visible thing on a webpage is a rectangular box with these four layers. Most layout bugs are box model misunderstandings.",
      realWorldAnalogy: "Imagine a framed photo. The photo itself is the CONTENT. The matting around the photo is PADDING (inside the frame). The frame is the BORDER. The space between this frame and the next frame on the wall is the MARGIN.",
      content: `From innermost to outermost, every CSS box has four areas:

1. **Content** — the actual text, image, or child elements. Width and height refer to this by default.
2. **Padding** — transparent space INSIDE the border, around the content. Background color fills the padding.
3. **Border** — the visible edge. Has color, style (solid, dashed, dotted), and width.
4. **Margin** — transparent space OUTSIDE the border, between this box and others.

\`\`\`
.box {
  width: 200px;          /* content width */
  padding: 20px;         /* 20px on all 4 sides */
  border: 4px solid red; /* 4px on all 4 sides */
  margin: 16px;          /* 16px on all 4 sides */
}
\`\`\`

Total rendered width of this element (default box-sizing): \`200 + 20*2 + 4*2 = 248px\`. Plus 16px of margin space on each side.

This default — where width refers only to the content, and padding/border are added on top — is called **\`box-sizing: content-box\`**.

The (much more sane) alternative is **\`box-sizing: border-box\`**, where width INCLUDES padding and border:

\`\`\`
* { box-sizing: border-box; }

.box {
  width: 200px;
  padding: 20px;
  border: 4px solid red;
  /* total rendered width: 200px (padding/border eat into content) */
}
\`\`\`

**Every modern project applies \`box-sizing: border-box\` globally.** Put this at the top of every CSS file:

\`\`\`
*, *::before, *::after {
  box-sizing: border-box;
}
\`\`\``,
      callouts: [
        { type: "pro-tip", title: "Always use border-box", content: "border-box matches how human designers think: 'this card is 300px wide, period.' content-box requires constant arithmetic. Set border-box on every element via *, ::before, ::after." },
      ],
    },
    {
      id: "css06-s2",
      title: "Margin and Padding Shorthand",
      whyItMatters: "You'll write margin/padding thousands of times. Knowing the shorthand patterns saves keystrokes and avoids bugs.",
      content: `**One value** — all four sides:
\`\`\`
margin: 10px;  /* top right bottom left = 10px */
\`\`\`

**Two values** — vertical | horizontal:
\`\`\`
margin: 10px 20px;  /* top/bottom: 10, left/right: 20 */
\`\`\`

**Three values** — top | horizontal | bottom:
\`\`\`
margin: 10px 20px 30px;  /* top: 10, sides: 20, bottom: 30 */
\`\`\`

**Four values** — clockwise from top: top | right | bottom | left:
\`\`\`
margin: 10px 20px 30px 40px;
\`\`\`

**Individual sides:**
\`\`\`
margin-top: 10px;
margin-right: 20px;
margin-bottom: 30px;
margin-left: 40px;
\`\`\`

**Logical equivalents** (modern, language-direction aware):
\`\`\`
margin-block-start: 10px;  /* top in English */
margin-inline-end: 20px;   /* right in English */
\`\`\`

Same patterns work for padding.

**Centering with auto margin:**
\`\`\`
.centered {
  width: 600px;
  margin: 0 auto;  /* horizontal auto = center */
}
\`\`\`

\`margin: 0 auto;\` is THE classic horizontal centering trick for block elements with explicit width.`,
      codeExamples: [
        {
          id: "css06-s2-ex1",
          title: "Box model explorer",
          description: "Visualize all four layers with distinct colors.",
          code: {
            html: '<div class="container">\n  <div class="box">\n    Content\n  </div>\n</div>',
            css: `* { box-sizing: border-box; }\n\n.container {\n  background: #fef3c7;  /* yellow = parent */\n  padding: 30px;\n}\n\n.box {\n  width: 250px;\n  padding: 24px;        /* inner space */\n  border: 6px solid #7c3aed;  /* purple frame */\n  margin: 20px auto;    /* center horizontally */\n  background: #fff;\n  color: #111;\n  font-weight: bold;\n}`,
          },
          explanation: "The yellow area is the parent's padding. The purple ring is the box's border. Inside the border, white is content + padding. Around the box, the yellow shows through where margin is.",
          tryItPrompt: "Switch to box-sizing: content-box on .box and watch it grow. Then change padding to 40px and see how the total size changes.",
        },
      ],
      callouts: [
        { type: "common-mistake", title: "Width with content-box", content: "If you set width: 100% with default box-sizing AND any padding, the element overflows its container by 2× padding. This is the #1 reason projects adopt border-box globally." },
      ],
    },
    {
      id: "css06-s3",
      title: "Margin Collapsing",
      whyItMatters: "Vertical margins collapse — combining instead of adding. This baffles every beginner. Learn it once, save hours of debugging.",
      content: `When two **vertical** margins meet, they collapse to the larger of the two — they don't add up.

\`\`\`
<p style="margin-bottom: 30px;">First</p>
<p style="margin-top: 20px;">Second</p>
\`\`\`

You'd expect 30 + 20 = 50px between them. Wrong. The actual gap is **30px** (the larger). This is "margin collapsing."

**Collapsing only happens with vertical margins** (top/bottom), and only when:
- Two adjacent siblings (margin-bottom of A + margin-top of B)
- Parent has no padding/border/content separating it from first/last child's margin
- No flex/grid parent (margins don't collapse inside flex/grid)

**To prevent collapsing:**
- Add padding or border to the parent
- Use \`display: flex\` or \`display: grid\` on the parent
- Use \`gap\` (in flex/grid) instead of margins

**Modern recommendation:** use \`display: flex\` with \`gap\` for vertical spacing. Margins are getting less important in modern layout.`,
      microExercise: {
        instruction: "Make a card with 200px width, 20px padding, 2px solid border, and 16px outer margin. Use border-box.",
        starterCode: { html: '<div class="card">A card</div>', css: "/* your CSS */" },
        hint: "Set box-sizing: border-box; then width, padding, border, margin.",
        solution: { html: '<div class="card">A card</div>', css: ".card {\n  box-sizing: border-box;\n  width: 200px;\n  padding: 20px;\n  border: 2px solid #333;\n  margin: 16px;\n}" },
      },
    },
  ],
  exercises: [
    {
      id: "css06-ex1",
      title: "Build three cards",
      difficulty: 2,
      description: "Three cards with consistent sizing using border-box. Each 250px wide, 16px padding, 2px border, 12px between them.",
      requirements: ["Use border-box globally", "Cards have consistent total width", "Equal spacing"],
      starterCode: { html: '<div class="card">One</div>\n<div class="card">Two</div>\n<div class="card">Three</div>', css: "/* your CSS */" },
      hints: ["* { box-sizing: border-box; }", "margin-bottom for vertical spacing"],
      solution: { html: '<div class="card">One</div>\n<div class="card">Two</div>\n<div class="card">Three</div>', css: "* { box-sizing: border-box; }\n\n.card {\n  width: 250px;\n  padding: 16px;\n  border: 2px solid #7c3aed;\n  margin-bottom: 12px;\n  background: #f8fafc;\n}" },
      solutionExplanation: "border-box keeps the visual width at exactly 250px regardless of padding/border.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "css06-q1", type: "mcq", question: "What are the four areas of the box model, inside to outside?", options: ["margin, border, padding, content", "content, padding, border, margin", "padding, content, margin, border", "content, margin, padding, border"], correctAnswer: 1, explanation: "Content (innermost), padding, border, margin (outermost).", difficulty: 1 },
      { id: "css06-q2", type: "code-output", question: "With default box-sizing, what's the rendered width? `.x { width: 200px; padding: 20px; border: 5px solid; }`", options: ["200px", "225px", "250px", "245px"], correctAnswer: 2, explanation: "200 + 20×2 + 5×2 = 250. Default content-box adds padding and border to width.", difficulty: 2 },
      { id: "css06-q3", type: "mcq", question: "What does box-sizing: border-box do?", options: ["Adds a border", "Includes padding and border in width/height", "Removes the box model", "Centers the box"], correctAnswer: 1, explanation: "border-box makes width/height refer to the total visible size, including padding and border.", difficulty: 2 },
      { id: "css06-q4", type: "mcq", question: "What is margin collapsing?", options: ["Margins disappear when you scroll", "Adjacent vertical margins combine into the larger one", "Margins overlap with padding", "Margins get clipped"], correctAnswer: 1, explanation: "Two vertical margins meeting combine into the larger value, not the sum.", difficulty: 3 },
      { id: "css06-q5", type: "mcq", question: "Which centers a block element horizontally?", options: ["text-align: center", "margin: 0 auto", "padding: 0 auto", "align: center"], correctAnswer: 1, explanation: "margin: 0 auto with an explicit width centers a block element. text-align centers text, not the box.", difficulty: 2 },
      { id: "css06-q6", type: "fill-blank", question: "`margin: 10px 20px;` means top/bottom = ____ and left/right = 20px.", correctAnswer: "10px", explanation: "Two values = vertical | horizontal.", difficulty: 1 },
      { id: "css06-q7", type: "true-false", question: "Background color extends through the padding area.", options: ["True", "False"], correctAnswer: 0, explanation: "True. background-color fills both content and padding, but stops at the border.", difficulty: 2 },
    ],
  },
  cheatSheet: [
    { label: "Layers", value: "content → padding → border → margin" },
    { label: "Modern reset", value: "*,*::before,*::after { box-sizing: border-box; }" },
    { label: "All sides", value: "margin: 10px;" },
    { label: "Vert | horz", value: "margin: 10px 20px;" },
    { label: "Center block", value: "margin: 0 auto;" },
    { label: "Total size (border-box)", value: "= width" },
    { label: "Total size (content-box)", value: "width + padding + border" },
  ],
};

export const cssCh07: Chapter = {
  id: "css-ch-07",
  number: 7,
  title: "Colors and Backgrounds",
  subtitle: "Hex, rgb, hsl, gradients, and background images.",
  difficulty: "Beginner",
  estimatedMinutes: 35,
  xpReward: 100,
  prerequisites: ["css-ch-06"],
  partLabel: "Part 1: CSS Fundamentals",
  learningObjectives: [
    "Use hex, rgb, rgba, hsl, hsla color formats and pick the right one.",
    "Build linear and radial gradients.",
    "Set background images with size, position, and repeat.",
    "Layer multiple backgrounds.",
  ],
  sections: [
    {
      id: "css07-s1",
      title: "Color Formats",
      whyItMatters: "You'll write colors thousands of times. Knowing all formats lets you choose the right one for the job — and HSL specifically makes designing themes 10× easier.",
      content: `**Named colors** — 140 keywords like \`red\`, \`navy\`, \`coral\`, \`rebeccapurple\`. Fine for prototyping, never for production.

**Hex** — \`#RRGGBB\` where each pair is 00-FF (0-255). Example: \`#FF5733\` is red-orange. Short form \`#F53\` = \`#FF5533\`.

**RGB** — \`rgb(255, 87, 51)\` — same color as above. Modern syntax: \`rgb(255 87 51)\` (spaces, no commas).

**RGBA** — RGB with alpha (transparency 0-1): \`rgba(255, 87, 51, 0.5)\` is 50% transparent.

**HSL** — \`hsl(hue, saturation%, lightness%)\` where hue is 0-360 degrees on a color wheel:
- 0/360 = red
- 60 = yellow
- 120 = green
- 180 = cyan
- 240 = blue
- 300 = magenta

\`hsl(220, 80%, 50%)\` = vibrant blue. To make a darker variant of any color, just decrease lightness: \`hsl(220, 80%, 35%)\`. To make it muted, decrease saturation. **HSL makes building consistent palettes trivial.**

**HSLA** — HSL with alpha: \`hsla(220, 80%, 50%, 0.7)\`.

**Modern formats:**
- \`color-mix(in srgb, red, blue)\` — blend two colors
- \`oklch(70% 0.15 220)\` — perceptually uniform color space (cutting edge)`,
      callouts: [
        { type: "pro-tip", title: "Why HSL beats hex for design systems", content: "If you have brand color hsl(220 80% 50%), making 5 shades is just 5 lightness values: 30%, 40%, 50%, 60%, 70%. With hex you'd need a color picker for each. Every modern design system uses HSL." },
      ],
    },
    {
      id: "css07-s2",
      title: "Backgrounds",
      whyItMatters: "Backgrounds are how you add color blocks, hero images, gradients, and visual texture. The background shorthand is one of CSS's most-used tools.",
      content: `**Background color:**
\`\`\`
.box { background-color: #1a365d; }
\`\`\`

**Background image:**
\`\`\`
.hero {
  background-image: url('/hero.jpg');
  background-size: cover;       /* fill the container */
  background-position: center;  /* center the image */
  background-repeat: no-repeat;
}
\`\`\`

\`background-size\` values:
- \`cover\` — fill the container (may crop)
- \`contain\` — fit entirely (may letterbox)
- \`100% 50%\` — explicit width/height
- \`auto\` — natural size

\`background-position\` values:
- \`center\`, \`top\`, \`bottom\`, \`left\`, \`right\` (or combos like \`top left\`)
- \`50% 50%\` — exact

**Gradients (no image needed):**
\`\`\`
.btn {
  background: linear-gradient(90deg, #00D4FF, #7C3AED);
  /* angle, color1, color2 */
}

.bubble {
  background: radial-gradient(circle, #ff5733 0%, transparent 70%);
}
\`\`\`

**Multiple backgrounds** stack first-on-top:
\`\`\`
.layered {
  background:
    linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), /* dark overlay */
    url('/photo.jpg') center/cover;
}
\`\`\`

The dark overlay sits on top of the photo — common pattern for hero sections with text overlay.`,
      codeExamples: [
        {
          id: "css07-s2-ex1",
          title: "Hero section with overlay",
          description: "Image background + dark overlay + readable text.",
          code: {
            html: '<section class="hero">\n  <h1>Welcome</h1>\n</section>',
            css: `.hero {\n  height: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(hsla(220, 50%, 10%, 0.7), hsla(220, 50%, 10%, 0.7)),\n    linear-gradient(135deg, hsl(220 80% 30%), hsl(280 80% 30%));\n  background-size: cover;\n  color: white;\n  font-size: 3rem;\n  font-family: sans-serif;\n}`,
          },
          explanation: "Two stacked backgrounds: a dark translucent overlay on top, a colorful gradient underneath. The white text is now readable.",
          tryItPrompt: "Replace the bottom gradient with url('https://picsum.photos/800/300') center/cover and watch a real photo appear under the overlay.",
        },
      ],
      microExercise: {
        instruction: "Create a button with a left-to-right cyan-to-purple gradient background, white text, 12px padding, no border, rounded corners.",
        starterCode: { html: '<button class="grad">Click me</button>', css: "/* your CSS */" },
        hint: "background: linear-gradient(90deg, cyan, purple);",
        solution: { html: '<button class="grad">Click me</button>', css: ".grad {\n  background: linear-gradient(90deg, #00D4FF, #7C3AED);\n  color: white;\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  font-weight: bold;\n  cursor: pointer;\n}" },
      },
    },
  ],
  exercises: [
    {
      id: "css07-ex1",
      title: "Three buttons, three colors",
      difficulty: 1,
      description: "Build three buttons (Primary, Secondary, Danger) using HSL with the same hue family but different lightness.",
      requirements: ["All use HSL", "Primary at 50% lightness, Secondary at 70%, Danger at 40%", "White text on all"],
      starterCode: { html: '<button class="primary">Primary</button>\n<button class="secondary">Secondary</button>\n<button class="danger">Danger</button>', css: "/* your CSS */" },
      hints: ["hsl(220, 80%, 50%) for primary", "Same hue, different lightness"],
      solution: { html: '<button class="primary">Primary</button>\n<button class="secondary">Secondary</button>\n<button class="danger">Danger</button>', css: "button { color: white; padding: 8px 16px; border: none; border-radius: 6px; margin: 4px; }\n.primary { background: hsl(220, 80%, 50%); }\n.secondary { background: hsl(220, 30%, 70%); }\n.danger { background: hsl(0, 80%, 40%); }" },
      solutionExplanation: "Variant via HSL adjustments — easy to maintain and visually consistent.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "css07-q1", type: "mcq", question: "Which color format is best for design systems?", options: ["Named colors", "Hex", "HSL", "RGB"], correctAnswer: 2, explanation: "HSL makes generating tints/shades trivial — just adjust lightness while keeping hue constant.", difficulty: 2 },
      { id: "css07-q2", type: "fill-blank", question: "In `rgba(255, 0, 0, 0.5)`, the 0.5 is the ____.", correctAnswer: "alpha", explanation: "Alpha channel — 0 transparent, 1 opaque.", difficulty: 1 },
      { id: "css07-q3", type: "mcq", question: "What does background-size: cover do?", options: ["Fits image entirely (may letterbox)", "Fills container (may crop)", "Repeats the image", "Hides the image"], correctAnswer: 1, explanation: "cover scales the image to fill — cropping if needed. contain fits entirely.", difficulty: 2 },
      { id: "css07-q4", type: "mcq", question: "When stacking multiple backgrounds, which appears on top?", options: ["The first listed", "The last listed", "The largest", "The opaque one"], correctAnswer: 0, explanation: "First-listed background sits on top, subsequent layers underneath.", difficulty: 3 },
      { id: "css07-q5", type: "mcq", question: "Which creates a vertical (top to bottom) gradient?", options: ["linear-gradient(90deg, ...)", "linear-gradient(180deg, ...)", "linear-gradient(0deg, ...)", "linear-gradient(45deg, ...)"], correctAnswer: 1, explanation: "180deg goes top-to-bottom. 0deg is bottom-to-top.", difficulty: 2 },
      { id: "css07-q6", type: "true-false", question: "hsl(0, 100%, 50%) is pure red.", options: ["True", "False"], correctAnswer: 0, explanation: "True. Hue 0 = red, full saturation, mid lightness.", difficulty: 2 },
    ],
  },
  cheatSheet: [
    { label: "Hex", value: "#RRGGBB or #RGB" },
    { label: "RGB", value: "rgb(255 87 51)" },
    { label: "RGBA", value: "rgba(255 87 51 / 0.5)" },
    { label: "HSL", value: "hsl(220 80% 50%)" },
    { label: "Gradient", value: "linear-gradient(90deg, c1, c2)" },
    { label: "BG image", value: "url('x.jpg') center/cover no-repeat" },
    { label: "Layered", value: "background: gradient, url(...);" },
  ],
};

export const cssCh08: Chapter = {
  id: "css-ch-08",
  number: 8,
  title: "Typography",
  subtitle: "Fonts, sizes, weights, line-height, and reading comfort.",
  difficulty: "Beginner",
  estimatedMinutes: 35,
  xpReward: 100,
  prerequisites: ["css-ch-07"],
  partLabel: "Part 1: CSS Fundamentals",
  learningObjectives: [
    "Choose appropriate font stacks and load custom fonts.",
    "Apply font-size, font-weight, line-height effectively.",
    "Use letter-spacing, text-transform, and text-decoration.",
    "Understand vertical rhythm and reading comfort.",
  ],
  sections: [
    {
      id: "css08-s1",
      title: "Font Families and System Stacks",
      whyItMatters: "Typography is 90% of web design. Bad type = unreadable site. Great type = professional polish.",
      content: `**font-family** accepts a comma-separated list — the browser uses the first available:

\`\`\`
body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}
\`\`\`

The order is "preference → fallback → fallback → generic." Generic families:
- \`serif\` — fonts with little feet (Times)
- \`sans-serif\` — clean, no feet (Arial, Helvetica)
- \`monospace\` — fixed-width (Courier, code)
- \`cursive\` — script
- \`fantasy\` — decorative

**System UI fonts** — match the user's OS:
\`\`\`
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
\`\`\`
On Mac → SF Pro. On Windows → Segoe UI. On Android → Roboto. **Fastest possible font (no download)**, native feel.

**Custom web fonts via Google Fonts:**
\`\`\`
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
\`\`\`

Then in CSS: \`font-family: 'Inter', sans-serif;\`

**Self-hosted via @font-face:**
\`\`\`
@font-face {
  font-family: 'MyFont';
  src: url('/fonts/myfont.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;  /* show fallback while loading */
}
\`\`\``,
      callouts: [
        { type: "pro-tip", title: "Always include font-display: swap", content: "Without it, text is invisible while the font downloads (FOIT — Flash Of Invisible Text). With swap, the fallback shows immediately and updates when the font loads." },
      ],
    },
    {
      id: "css08-s2",
      title: "Size, Weight, Line Height",
      whyItMatters: "These three properties decide whether text is comfortable to read or eye-stabbing.",
      content: `**font-size** — use \`rem\` (relative to root font-size, default 16px) for scalable, accessible sizing:

\`\`\`
html { font-size: 16px; }  /* baseline */

body { font-size: 1rem; }     /* 16px */
h1   { font-size: 2.5rem; }   /* 40px */
h2   { font-size: 2rem; }     /* 32px */
small { font-size: 0.875rem; } /* 14px */
\`\`\`

Avoid \`px\` for body text — users who zoom or change browser font-size are forced into a fixed scale.

**font-weight** — numeric is most precise:
\`\`\`
font-weight: 400;  /* normal */
font-weight: 700;  /* bold */
font-weight: 300;  /* light */
font-weight: 900;  /* black */
\`\`\`
Many fonts only ship 400 and 700. Trying to use 600 will silently fall back.

**line-height** — vertical space between lines. **The single most underused readability property.**

\`\`\`
body {
  font-size: 16px;
  line-height: 1.6;  /* 25.6px between line baselines */
}
\`\`\`

Rules of thumb:
- Body text: \`1.5\` to \`1.7\`
- Headings: \`1.1\` to \`1.3\` (tighter, since they're large)
- Use unitless numbers (1.6 not 1.6em) so it scales with font-size in children.

**Reading width** — for body text, limit line width to about **65 characters** for comfort:
\`\`\`
.prose { max-width: 65ch; }
\`\`\`
The \`ch\` unit = width of "0" character. Magic for typography.`,
      codeExamples: [
        {
          id: "css08-s2-ex1",
          title: "Readable article styling",
          description: "Apply 5 properties and watch text become 10× more readable.",
          code: {
            html: `<article>\n  <h1>The Art of Reading</h1>\n  <p>The best designers know that typography is invisible when it works. The reader doesn't notice the font, the spacing, or the line length — they only notice the words. This is the highest praise typography can receive.</p>\n  <p>Bad typography, by contrast, is loud. The reader struggles, eyes jumping back to find the start of the next line. Headers crash into paragraphs. Everything feels heavy.</p>\n</article>`,
            css: `body {\n  font-family: Georgia, 'Times New Roman', serif;\n  background: #fafafa;\n  color: #222;\n  padding: 2rem;\n}\n\narticle {\n  max-width: 65ch;\n  margin: 0 auto;\n  font-size: 1.125rem;\n  line-height: 1.7;\n}\n\nh1 {\n  font-size: 2.5rem;\n  line-height: 1.2;\n  font-weight: 700;\n  margin-bottom: 1rem;\n}\n\np {\n  margin-bottom: 1.25rem;\n}`,
          },
          explanation: "Five typography properties (font-family, max-width, font-size, line-height, margin) transform unreadable default text into magazine-quality prose.",
          tryItPrompt: "Change line-height to 1.2 and notice how cramped it gets. Then to 2.5 and see how spaced-out it feels. The sweet spot is 1.5-1.7.",
        },
      ],
      callouts: [
        { type: "common-mistake", title: "Tiny line-height on body text", content: "Default browser line-height is roughly 1.2 — too tight for body text. Always set 1.5-1.7 on body or article elements." },
        { type: "tip", title: "letter-spacing for ALL CAPS", content: "All-caps text needs slightly more letter-spacing for legibility: `text-transform: uppercase; letter-spacing: 0.05em;`" },
      ],
      microExercise: {
        instruction: "Style an <article> for comfortable reading: max-width 65ch, line-height 1.6, font-size 1.125rem, sans-serif font.",
        starterCode: { html: '<article><p>Some text to style.</p></article>', css: "/* your CSS */" },
        hint: "All four properties on article {}.",
        solution: { html: '<article><p>Some text to style.</p></article>', css: "article {\n  max-width: 65ch;\n  line-height: 1.6;\n  font-size: 1.125rem;\n  font-family: system-ui, sans-serif;\n}" },
      },
    },
  ],
  exercises: [
    {
      id: "css08-ex1",
      title: "Magazine-style article",
      difficulty: 2,
      description: "Style an article with serif body, bold sans-serif headings, comfortable line-height, and 65ch max-width.",
      requirements: ["Body uses serif", "Headings use sans-serif and 700 weight", "line-height 1.6+ on body", "max-width 65ch"],
      starterCode: { html: '<article>\n  <h1>Title</h1>\n  <p>Para 1.</p>\n  <h2>Subhead</h2>\n  <p>Para 2.</p>\n</article>', css: "/* your CSS */" },
      hints: ["Two font stacks", "Different selectors for h1/h2 vs p"],
      solution: { html: '<article>\n  <h1>Title</h1>\n  <p>Para 1.</p>\n  <h2>Subhead</h2>\n  <p>Para 2.</p>\n</article>', css: "article { max-width: 65ch; margin: 0 auto; font-family: Georgia, serif; line-height: 1.7; font-size: 1.125rem; }\nh1, h2 { font-family: 'Helvetica Neue', sans-serif; font-weight: 700; line-height: 1.2; }\nh1 { font-size: 2.5rem; }\nh2 { font-size: 1.75rem; }" },
      solutionExplanation: "Classic magazine pattern: serif body + sans-serif display headings + comfortable measure.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "css08-q1", type: "mcq", question: "Best line-height for body text?", options: ["1.0", "1.2", "1.5-1.7", "3.0"], correctAnswer: 2, explanation: "1.5-1.7 is the comfortable reading range. Tighter feels cramped, looser feels disconnected.", difficulty: 1 },
      { id: "css08-q2", type: "mcq", question: "Why use rem instead of px for font-size?", options: ["It's newer", "Respects user's browser font-size preference", "It's smaller", "Works in older browsers"], correctAnswer: 1, explanation: "rem scales with the user's root font-size — critical for accessibility (zoom, low vision).", difficulty: 2 },
      { id: "css08-q3", type: "mcq", question: "What does font-display: swap do?", options: ["Swaps two fonts on hover", "Shows fallback during font load, swaps in custom font when ready", "Toggles bold", "Disables the font"], correctAnswer: 1, explanation: "swap prevents invisible text — the fallback displays immediately, then swaps to the custom font.", difficulty: 3 },
      { id: "css08-q4", type: "mcq", question: "What is the recommended max line length for body text?", options: ["20 characters", "65 characters", "120 characters", "200 characters"], correctAnswer: 1, explanation: "Around 65 characters per line maximizes reading comfort. Use max-width: 65ch.", difficulty: 2 },
      { id: "css08-q5", type: "fill-blank", question: "The ____ unit equals the width of the '0' character.", correctAnswer: "ch", explanation: "ch is the character unit, perfect for typographic max-widths.", difficulty: 2 },
      { id: "css08-q6", type: "true-false", question: "Unitless line-height (1.6) scales with the element's font-size in children.", options: ["True", "False"], correctAnswer: 0, explanation: "True. Unitless line-height inherits the multiplier, not the computed pixel value.", difficulty: 3 },
    ],
  },
  cheatSheet: [
    { label: "System font", value: "system-ui, -apple-system, sans-serif" },
    { label: "Body size", value: "1rem (16px)" },
    { label: "Body line-height", value: "1.5 - 1.7" },
    { label: "Heading line-height", value: "1.1 - 1.3" },
    { label: "Reading width", value: "max-width: 65ch" },
    { label: "Font load", value: "font-display: swap" },
    { label: "Weight", value: "400 normal, 700 bold" },
  ],
};
