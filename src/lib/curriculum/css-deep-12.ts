import type { Chapter } from "./types";

export const cssCh12: Chapter = {
  id: "css-ch-12",
  number: 12,
  title: "Z-index & Stacking Contexts",
  subtitle: "Why z-index: 9999 sometimes does nothing — and how to actually control layering.",
  difficulty: "Intermediate",
  estimatedMinutes: 40,
  xpReward: 130,
  prerequisites: ["css-ch-11"],
  partLabel: "Part 2: Layout",
  learningObjectives: [
    "Explain what a stacking context is and how one is created.",
    "Predict which element appears on top when z-index conflicts arise.",
    "Use z-index correctly with positioned elements.",
    "Diagnose the 'z-index: 9999 still hidden' bug.",
    "Avoid creating accidental stacking contexts that trap your modals.",
  ],
  sections: [
    {
      id: "css12-s1",
      title: "The Painter's Algorithm: How Browsers Paint Layers",
      whyItMatters: "Z-index is the most misunderstood CSS property. People sprinkle z-index: 999999 everywhere and pray. Understanding the actual model takes 15 minutes and saves you years of confusion.",
      realWorldAnalogy: "Painting a picture: you put down the background first, then the middle ground, then the foreground. Later strokes cover earlier ones. Browsers paint elements the same way — z-index just lets you reorder which strokes go down later.",
      content: `Browsers paint elements in a specific order. Without any z-index, elements paint in **document order** — later elements paint on top of earlier ones (assuming they overlap).

\`\`\`
<div class="a">A</div>  <!-- painted first -->
<div class="b">B</div>  <!-- painted on top of A -->
\`\`\`

If \`.a\` and \`.b\` overlap, B covers A. This is intuitive.

Things get interesting when you introduce **positioning**. \`z-index\` only works on elements with a \`position\` value of \`relative\`, \`absolute\`, \`fixed\`, or \`sticky\`. On a \`position: static\` element (the default), z-index is ignored. This is the #1 source of "my z-index does nothing!" bugs.

\`\`\`
.box {
  z-index: 100;       /* ignored! position is static */
}

.box {
  position: relative; /* now z-index works */
  z-index: 100;
}
\`\`\`

The default value of z-index is \`auto\`, which means "treat me as if I have z-index 0 within my parent stacking context." Higher z-index = closer to the viewer. Negative z-index = behind.`,
      callouts: [
        { type: "common-mistake", title: "z-index without position", content: "If z-index seems to do nothing, check that the element has position: relative (or absolute/fixed/sticky). On static elements, z-index is silently ignored." },
      ],
    },
    {
      id: "css12-s2",
      title: "Stacking Contexts: The Real Mental Model",
      whyItMatters: "Every senior dev has been bitten by this: you set z-index: 9999 on a modal and it's STILL behind some other element. The reason is stacking contexts — and almost no junior developer knows they exist.",
      content: `A **stacking context** is an isolated layering universe. Inside one stacking context, z-indexes compete with each other normally. But two elements in *different* stacking contexts can never be reordered relative to each other based on inner z-index — only the contexts themselves are stacked.

Think of it like Russian dolls. Each stacking context is a doll. You can rearrange dolls inside doll A. You can rearrange dolls inside doll B. But a doll inside A can NEVER come out and stack against a doll inside B.

**The killer:** many CSS properties create a new stacking context, often unintentionally:

- \`position: relative/absolute\` + \`z-index\` other than \`auto\`
- \`position: fixed\` or \`sticky\` (always)
- \`opacity\` less than 1
- \`transform\` other than \`none\` (translate, scale, rotate, even \`translateZ(0)\`)
- \`filter\` other than \`none\`
- \`will-change\` with certain values
- \`isolation: isolate\`
- \`mix-blend-mode\` other than \`normal\`
- A flex/grid item with z-index other than auto

The classic trap: you have a card with \`opacity: 0.95\` for a glass effect. Inside, there's a dropdown with \`z-index: 9999\`. The dropdown won't escape the card — because \`opacity\` created a stacking context that traps everything inside.

\`\`\`
.card {
  opacity: 0.95;       /* creates stacking context */
}
.dropdown-inside-card {
  z-index: 9999;        /* trapped! */
}
.sidebar-elsewhere {
  z-index: 10;          /* still on top, because the entire card is one layer */
}
\`\`\`

The fix: move the dropdown out of the card (e.g., portal it to \`<body>\`), or remove the property creating the unwanted stacking context.`,
      codeExamples: [
        {
          id: "css12-s2-ex1",
          title: "The opacity trap, demonstrated",
          description: "Two cards. The yellow box has z-index: 9999 inside the first card with opacity: 0.95. The green sibling card has z-index: 1. Watch which one wins.",
          code: {
            html: `<div class="card with-opacity">
  Card A (opacity 0.95)
  <div class="popup">z-index: 9999<br>but trapped!</div>
</div>
<div class="card sibling">Card B (z-index: 1) — covers the popup!</div>`,
            css: `body { padding: 2rem; background: #0F172A; color: white; font-family: sans-serif; }

.card {
  position: relative;
  width: 200px;
  height: 100px;
  margin: 1rem;
  padding: 1rem;
  border-radius: 8px;
}

.with-opacity {
  opacity: 0.95;       /* creates stacking context — trap! */
  background: #1E293B;
}

.popup {
  position: absolute;
  top: 60px; left: 60px;
  width: 180px; height: 80px;
  background: gold; color: black;
  z-index: 9999;       /* trapped inside the card's context */
  padding: 8px;
  border-radius: 4px;
}

.sibling {
  background: #15803D;
  margin-top: -60px;     /* overlap intentionally */
  margin-left: 80px;
  z-index: 1;
}`,
          },
          explanation: "The popup with z-index: 9999 is trapped inside Card A's stacking context (created by opacity: 0.95). Card B with z-index: 1 still covers it because the entire Card A is just ONE layer — and Card B's layer is above it. Remove `opacity: 0.95` from .with-opacity to see the popup escape and cover Card B.",
          tryItPrompt: "Remove `opacity: 0.95;` and re-run. Now the popup correctly appears on top. This single line is responsible for thousands of dev-hours of confusion every year.",
        },
      ],
      callouts: [
        { type: "warning", title: "transform: translateZ(0) trap", content: "Many devs add transform: translateZ(0) to force GPU acceleration. This creates a stacking context — which can break z-index in subtle ways. Use will-change: transform instead, but only when actually needed." },
        { type: "pro-tip", title: "DevTools: 3D Layers panel", content: "Chrome DevTools → ⋮ → More Tools → Layers. You can see every stacking context as a 3D card and rotate the view. Best way to learn the model visually." },
      ],
    },
    {
      id: "css12-s3",
      title: "A Sane Z-index System",
      whyItMatters: "On real projects, z-index chaos is one of the top 3 sources of CSS bugs. A simple convention prevents the entire problem.",
      content: `**The 9999 problem:** developers escalate. Modal needs z-index 100. Tooltip on the modal needs 101. New designer adds 999 to their feature. You add 9999 to win. Next week someone needs 99999. Eventually nobody knows what's on top.

**Solution: a documented z-index scale.** Pick 5–7 layers and stick to them:

\`\`\`
:root {
  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-overlay: 300;
  --z-modal: 400;
  --z-popover: 500;
  --z-toast: 600;
  --z-tooltip: 700;
}

.modal { z-index: var(--z-modal); }
.toast { z-index: var(--z-toast); }
\`\`\`

When a new component is added, you assign it to one of these layers. No one ever writes \`z-index: 9999\` again. If you need finer control within a layer, use small offsets (z-index: var(--z-modal) + 1).

**The other rule: avoid z-index entirely when you can.** Document order works for free. Reorder DOM elements before reaching for z-index. Use \`isolation: isolate\` on a parent if you want to prevent inner z-indexes from leaking out — it creates a clean stacking context without side effects of opacity/transform.

\`\`\`
.section { isolation: isolate; }  /* contained — z-indexes inside don't leak */
\`\`\``,
      callouts: [
        { type: "pro-tip", title: "isolation: isolate is underrated", content: "Use it on cards, sections, and any container where you want to encapsulate z-index. It's the cleanest way to create a stacking context with zero visual side effects." },
      ],
      microExercise: {
        instruction: "Make `.popup` actually appear on top of `.other` by giving `.popup` `position: relative` and `z-index: 10`.",
        starterCode: {
          html: `<div class="popup">Should be on top</div>\n<div class="other">Currently on top</div>`,
          css: `.popup { width:100px; height:60px; background:gold; }\n.other { width:100px; height:60px; background:tomato; margin-top:-30px; margin-left:30px; }\n/* fix .popup */`,
        },
        hint: "z-index needs position: relative (or absolute/fixed/sticky) to work.",
        solution: {
          html: `<div class="popup">Should be on top</div>\n<div class="other">Currently on top</div>`,
          css: `.popup { width:100px; height:60px; background:gold; position: relative; z-index: 10; }\n.other { width:100px; height:60px; background:tomato; margin-top:-30px; margin-left:30px; }`,
        },
      },
    },
  ],
  exercises: [
    {
      id: "css12-ex1",
      title: "Make the modal appear on top",
      difficulty: 1,
      description: "The .backdrop should cover the page; the .modal should appear above the backdrop.",
      requirements: ["Backdrop covers viewport", "Modal centered and above backdrop", "Use position + z-index correctly"],
      starterCode: {
        html: `<div class="page">Page content</div>\n<div class="backdrop"></div>\n<div class="modal">I am the modal</div>`,
        css: `body { margin: 0; }\n.page { padding: 2rem; }\n.backdrop { /* fix */ background: rgba(0,0,0,0.5); }\n.modal { /* fix */ background: white; padding: 2rem; border-radius: 8px; width: 200px; }`,
      },
      hints: ["Backdrop: position: fixed; inset: 0;", "Modal needs higher z-index than backdrop", "Both must have position to allow z-index"],
      solution: {
        html: `<div class="page">Page content</div>\n<div class="backdrop"></div>\n<div class="modal">I am the modal</div>`,
        css: `body { margin: 0; }\n.page { padding: 2rem; }\n.backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 100; }\n.modal { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 200; background: white; padding: 2rem; border-radius: 8px; width: 200px; }`,
      },
      solutionExplanation: "Both elements get position: fixed (so z-index works). Modal has z-index 200, backdrop 100, so the modal paints on top.",
    },
    {
      id: "css12-ex2",
      title: "Diagnose the stacking context trap",
      difficulty: 3,
      description: "The .tooltip with z-index: 9999 is hidden behind .nav. Find and fix the property creating an unwanted stacking context on .card.",
      requirements: ["Tooltip should appear above the nav", "Don't change z-index values", "Identify the problematic property on .card"],
      starterCode: {
        html: `<nav class="nav">Nav with z-index 50</nav>\n<div class="card">\n  Card\n  <div class="tooltip">Tooltip z-index 9999 — currently trapped!</div>\n</div>`,
        css: `body { margin: 0; padding: 0; background: #0F172A; color: white; font-family: sans-serif; }\n.nav { position: fixed; top: 40px; left: 0; right: 0; height: 50px; background: #1E293B; z-index: 50; padding: 1rem; }\n.card {\n  position: relative;\n  margin: 100px;\n  padding: 1rem;\n  background: #334155;\n  transform: translateY(0);  /* this is the trap! */\n}\n.tooltip { position: absolute; top: 50px; background: gold; color: black; padding: 8px; z-index: 9999; }`,
      },
      hints: [
        "Look at .card properties — which one creates a stacking context?",
        "transform: translateY(0) creates a stacking context even though it does nothing visual",
        "Remove that line and the tooltip escapes",
      ],
      solution: {
        html: `<nav class="nav">Nav with z-index 50</nav>\n<div class="card">\n  Card\n  <div class="tooltip">Tooltip z-index 9999 — now free!</div>\n</div>`,
        css: `body { margin: 0; padding: 0; background: #0F172A; color: white; font-family: sans-serif; }\n.nav { position: fixed; top: 40px; left: 0; right: 0; height: 50px; background: #1E293B; z-index: 50; padding: 1rem; }\n.card {\n  position: relative;\n  margin: 100px;\n  padding: 1rem;\n  background: #334155;\n  /* removed transform — no more stacking context */\n}\n.tooltip { position: absolute; top: 50px; background: gold; color: black; padding: 8px; z-index: 9999; }`,
      },
      solutionExplanation: "transform: translateY(0) — even though it visually does nothing — creates a new stacking context that traps the tooltip's z-index 9999. Remove it and the tooltip is free to stack against the global root.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "css12-q1", type: "mcq", question: "Which position values allow z-index to work?", options: ["only relative", "relative, absolute, fixed, sticky", "static and relative", "all values"], correctAnswer: 1, explanation: "z-index requires positioned elements (anything except static).", difficulty: 1 },
      { id: "css12-q2", type: "true-false", question: "z-index works on a position: static element.", options: ["True", "False"], correctAnswer: 1, explanation: "z-index is ignored on static elements (the default).", difficulty: 1 },
      { id: "css12-q3", type: "mcq", question: "Which CSS property does NOT create a new stacking context?", options: ["opacity: 0.5", "transform: translateX(10px)", "color: red", "filter: blur(5px)"], correctAnswer: 2, explanation: "color does not create a stacking context. opacity, transform, and filter all do.", difficulty: 2 },
      { id: "css12-q4", type: "mcq", question: "Why doesn't z-index: 9999 always win?", options: ["The browser caps z-index at 100", "Stacking contexts are isolated — a 9999 inside one context can't beat any element in a higher context", "z-index is deprecated", "Random browser bug"], correctAnswer: 1, explanation: "Stacking contexts isolate z-index. A child can never escape its parent's context.", difficulty: 3 },
      { id: "css12-q5", type: "mcq", question: "What's the cleanest way to create a stacking context with no visual side effects?", options: ["opacity: 0.99", "transform: translateZ(0)", "isolation: isolate", "position: relative"], correctAnswer: 2, explanation: "isolation: isolate creates a stacking context purely for layering, with no other side effects.", difficulty: 2 },
      { id: "css12-q6", type: "spot-the-bug", question: "Why is .popup hidden?", code: `.card { opacity: 0.9; position: relative; }\n.card .popup { position: absolute; z-index: 9999; }\n.elsewhere { position: fixed; z-index: 10; }`, options: ["popup needs position: fixed", "opacity: 0.9 on .card creates a stacking context, trapping the popup; .elsewhere stacks above the entire card", "z-index: 9999 is too high", ".card needs higher z-index"], correctAnswer: 1, explanation: "Opacity less than 1 creates a stacking context. The popup is trapped inside, so .elsewhere (in a sibling context) covers it.", difficulty: 3 },
      { id: "css12-q7", type: "mcq", question: "What does negative z-index do?", options: ["Nothing — invalid", "Places the element behind its non-positioned siblings (still inside its stacking context)", "Removes the element", "Inverts the colors"], correctAnswer: 1, explanation: "Negative z-index places the element below z-index: auto siblings within the same stacking context.", difficulty: 2 },
      { id: "css12-q8", type: "mcq", question: "Best practice for z-index in a project?", options: ["Always use 9999 to be safe", "Define a small set of CSS variables (--z-modal, --z-toast, etc.) and reference them", "Random numbers per component", "Never use z-index"], correctAnswer: 1, explanation: "A documented z-index scale prevents escalation chaos and makes layering predictable.", difficulty: 2 },
    ],
  },
  cheatSheet: [
    { label: "When z-index works", value: "position: relative | absolute | fixed | sticky" },
    { label: "Default z-index", value: "auto (acts like 0 in current context)" },
    { label: "Higher value", value: "Closer to viewer" },
    { label: "Creates context", value: "opacity<1, transform, filter, position+z-index, fixed/sticky" },
    { label: "Clean isolation", value: "isolation: isolate" },
    { label: "Sane scale", value: "--z-modal: 400; --z-toast: 600; etc." },
    { label: "Inspect layers", value: "DevTools → Layers panel" },
  ],
};
