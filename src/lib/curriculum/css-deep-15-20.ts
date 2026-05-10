import type { Chapter } from "./types";

export const cssCh15: Chapter = {
  id: "css-ch-15",
  number: 15,
  title: "CSS Grid — Part 1",
  subtitle: "Defining the grid and understanding the grid model.",
  difficulty: "Intermediate",
  estimatedMinutes: 45,
  xpReward: 120,
  prerequisites: ["css-ch-14"],
  partLabel: "Part 2: Layout",
  learningObjectives: [
    "Explain what CSS Grid is and when to use it versus Flexbox.",
    "Define grid containers and grid items.",
    "Use grid-template-columns and grid-template-rows to create explicit grids.",
    "Understand the fr unit and how it creates flexible tracks.",
    "Use grid-gap (or gap) to add spacing between grid tracks.",
  ],
  sections: [
    {
      id: "css15-s1",
      title: "What is CSS Grid and When to Use It",
      whyItMatters: "CSS Grid is the most powerful layout system in CSS. Understanding when to reach for Grid versus Flexbox will make your layouts cleaner and your code more maintainable.",
      realWorldAnalogy: "Flexbox is like arranging boxes in a single row — great for navigation bars or card lists. Grid is like a spreadsheet — you define rows and columns, and place items wherever you want in that 2D space.",
      content: `CSS Grid Layout (often just called Grid) is a two-dimensional layout system for the web. It lets you lay out items in rows and columns simultaneously. Before Grid, we had to use tables, floats, or nested Flexbox containers to achieve complex layouts — all of which were hacks.

Grid was designed specifically for page layout, while Flexbox was designed for one-dimensional layouts (either a row OR a column). The rule of thumb: use Grid for overall page structure (headers, sidebars, main content areas) and Flexbox for smaller components (navigation bars, card lists, button groups).

Grid works by turning a container into a grid context with \`display: grid\`. All direct children of that container automatically become grid items. You then define the grid structure using properties like \`grid-template-columns\` and \`grid-template-rows\`.

Every modern browser supports Grid, and it's been stable since 2017. If you're building a new layout today, Grid should be your first choice for any two-dimensional arrangement.`,
      codeExamples: [
        {
          id: "css15-s1-ex1",
          title: "Basic 3-column grid",
          description: "A simple grid with three equal columns.",
          code: {
            html: `<div class="grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>`,
            css: `.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}
.item {
  background: linear-gradient(135deg, #00D4FF, #7C3AED);
  color: white;
  padding: 2rem;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}`,
          },
          explanation: "The \`display: grid\` creates the grid context. \`grid-template-columns: 1fr 1fr 1fr\` creates three equal columns using the fr (fraction) unit. \`gap: 1rem\` adds spacing between items.",
          tryItPrompt: "Try changing to \`grid-template-columns: 2fr 1fr 1fr\` to make the first column twice as wide.",
        },
      ],
      callouts: [
        { type: "tip", title: "fr unit", content: "The fr unit represents a fraction of available space. \`1fr 2fr\` means the second column is twice as wide as the first. It's like saying 'divide the space into 3 parts, give 1 to column A and 2 to column B'." },
      ],
    },
    {
      id: "css15-s2",
      title: "Explicit Grids: Defining Rows and Columns",
      whyItMatters: "Explicit grids give you precise control. You define exactly how many rows and columns you want, and their sizes. This is the foundation of most Grid layouts.",
      content: `The most common way to define a grid is explicitly using \`grid-template-columns\` and \`grid-template-rows\`. These properties accept a space-separated list of track sizes.

Track sizes can be:
- Fixed lengths: \`200px\`, \`5rem\`, \`10em\`
- Percentages: \`50%\`, \`33.33%\`
- Fractions: \`1fr\`, \`2fr\` (most common)
- Auto: \`auto\` (sizes based on content)
- Minmax: \`minmax(100px, 1fr)\` (minimum and maximum)
- Repeat function: \`repeat(3, 1fr)\` creates 3 columns of 1fr each

Example: \`grid-template-columns: 200px 1fr 200px\` creates a three-column layout where the left and right columns are fixed at 200px, and the middle column takes all remaining space.

If you don't specify \`grid-template-rows\`, Grid creates implicit rows as needed based on content. Items fill the grid left-to-right, top-to-bottom by default.`,
      codeExamples: [
        {
          id: "css15-s2-ex1",
          title: "Fixed sidebar with flexible content",
          description: "A classic layout: fixed-width sidebar, flexible main content.",
          code: {
            html: `<div class="layout">
  <aside>Sidebar</aside>
  <main>Main content</main>
  <aside>Sidebar</aside>
</div>`,
            css: `.layout {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  gap: 1rem;
  min-height: 200px;
}
aside {
  background: #1E2A45;
  padding: 1rem;
  color: white;
}
main {
  background: #0F1629;
  padding: 2rem;
  color: white;
}`,
          },
          explanation: "The layout has three columns: two fixed at 200px (the sidebars) and one flexible (the main content). The 1fr takes all available space after the fixed columns.",
          tryItPrompt: "Change the first column to \`250px\` and see how the layout adjusts.",
        },
      ],
      callouts: [
        { type: "common-mistake", title: "Forgetting gap", content: "Without \`gap\`, grid items touch each other. Always add \`gap\` (or \`row-gap\` and \`column-gap\` separately) for readable layouts." },
      ],
    },
  ],
  exercises: [
    {
      id: "css15-ex1",
      title: "Create a 4-column grid",
      difficulty: 1,
      description: "Create a grid with 4 equal columns and add 8 items to it.",
      requirements: ["Use display: grid", "Use grid-template-columns with fr units", "Add gap spacing"],
      starterCode: { html: `<div class="grid">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n  <div class="item">4</div>\n  <div class="item">5</div>\n  <div class="item">6</div>\n  <div class="item">7</div>\n  <div class="item">8</div>\n</div>`, css: `.grid {\n  /* your code here */\n}\n.item {\n  background: #00D4FF;\n  padding: 1rem;\n  color: #0A0E1A;\n}` },
      hints: ["Use grid-template-columns: repeat(4, 1fr)", "Add gap: 1rem"],
      solution: { html: `<div class="grid">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n  <div class="item">4</div>\n  <div class="item">5</div>\n  <div class="item">6</div>\n  <div class="item">7</div>\n  <div class="item">8</div>\n</div>`, css: `.grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n}\n.item {\n  background: #00D4FF;\n  padding: 1rem;\n  color: #0A0E1A;\n}` },
      solutionExplanation: "The repeat() function creates 4 columns of 1fr each, making them equal width. gap adds spacing.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "css15-q1",
        type: "mcq",
        question: "What does the fr unit represent in CSS Grid?",
        options: ["A fixed pixel value", "A fraction of available space", "A minimum width", "A percentage of parent"],
        correctAnswer: 1,
        explanation: "fr stands for 'fraction'. It represents a fraction of available free space in the grid container.",
        difficulty: 1,
      },
      {
        id: "css15-q2",
        type: "true-false",
        question: "CSS Grid is designed for one-dimensional layouts only.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. CSS Grid is a two-dimensional layout system for both rows and columns. Flexbox is for one-dimensional layouts.",
        difficulty: 1,
      },
      {
        id: "css15-q3",
        type: "mcq",
        question: "Which property creates spacing between grid items?",
        options: ["margin", "padding", "gap", "spacing"],
        correctAnswer: 2,
        explanation: "The gap property (or row-gap/column-gap) adds space between grid tracks. It's cleaner than using margins on items.",
        difficulty: 1,
      },
    ],
  },
  cheatSheet: [
    { label: "Create grid", value: "display: grid" },
    { label: "Define columns", value: "grid-template-columns" },
    { label: "Fraction unit", value: "1fr" },
    { label: "Repeat function", value: "repeat(3, 1fr)" },
    { label: "Grid gap", value: "gap: 1rem" },
  ],
};

export const cssCh16: Chapter = {
  id: "css-ch-16",
  number: 16,
  title: "CSS Grid — Part 2",
  subtitle: "Placing items, spanning, and advanced techniques.",
  difficulty: "Advanced",
  estimatedMinutes: 50,
  xpReward: 130,
  prerequisites: ["css-ch-15"],
  partLabel: "Part 2: Layout",
  learningObjectives: [
    "Place items in specific grid cells using grid-column and grid-row.",
    "Span items across multiple columns or rows.",
    "Use grid-template-areas for named layout zones.",
    "Control alignment with justify-items and align-items.",
    "Understand auto-placement and how Grid fills empty cells.",
  ],
  sections: [
    {
      id: "css16-s1",
      title: "Placing Items: grid-column and grid-row",
      whyItMatters: "Sometimes you don't want items to flow automatically. You need precise control — like placing a header across the full width or a sidebar that spans multiple rows.",
      content: `By default, Grid places items automatically in the order they appear in HTML, filling cells left-to-right, top-to-bottom. But you can override this with \`grid-column\` and \`grid-row\`.

These properties accept a start and end line number: \`grid-column: 1 / 3\` means 'start at line 1 and end at line 3', which spans 2 columns. You can also use the span keyword: \`grid-column: span 2\` means 'span 2 columns'.

Grid lines are numbered starting from 1. A 3-column grid has 4 vertical lines (1 on the left, then lines after each column). Understanding line numbering is key to precise placement.

You can also use named lines if you define them in your grid template, but line numbers are simpler for most use cases.`,
      codeExamples: [
        {
          id: "css16-s1-ex1",
          title: "Spanning items across columns",
          description: "A header that spans all columns, and content that spans specific areas.",
          code: {
            html: `<div class="grid">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
  <div class="footer">Footer</div>
</div>`,
            css: `.grid {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 300px;
}
.header {
  grid-column: 1 / -1;
  background: #7C3AED;
  padding: 1rem;
  color: white;
}
.sidebar {
  grid-row: 2 / 3;
  background: #1E2A45;
  padding: 1rem;
  color: white;
}
.content {
  grid-row: 2 / 3;
  background: #0F1629;
  padding: 2rem;
  color: white;
}
.footer {
  grid-column: 1 / -1;
  background: #1E2A45;
  padding: 1rem;
  color: white;
}`,
          },
          explanation: "The header and footer use \`grid-column: 1 / -1\` to span all columns (-1 means the last line). The sidebar and content are placed in row 2.",
          tryItPrompt: "Try making the sidebar span from row 1 to row 3 by changing its grid-row property.",
        },
      ],
      callouts: [
        { type: "tip", title: "Negative line numbers", content: "-1 refers to the last line, -2 the second-to-last, etc. \`grid-column: 1 / -1\` is a common pattern for full-width items." },
      ],
    },
    {
      id: "css16-s2",
      title: "Grid Template Areas: Visual Layout Planning",
      whyItMatters: "Named areas make your CSS self-documenting. You can see the layout structure right in the CSS, which is incredibly valuable for maintenance.",
      content: `\`grid-template-areas\` lets you name grid areas and place items by name. It's like drawing your layout with ASCII art in CSS.

First, define areas in the container:
\`\`\`css
grid-template-areas:
  "header header header"
  "sidebar content content"
  "footer footer footer";
\`\`\`

Then assign items to areas:
\`\`\`css
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
\`\`\`

Each string represents a row, and each word represents a cell. Same word = same area. Period (.) represents an empty cell.

This approach is incredibly intuitive for complex layouts. You can rearrange the entire layout by just changing the grid-template-areas definition.`,
      codeExamples: [
        {
          id: "css16-s2-ex1",
          title: "Named grid layout",
          description: "A complete layout using grid-template-areas.",
          code: {
            html: `<div class="grid">
  <header class="header">Header</header>
  <aside class="sidebar">Sidebar</aside>
  <main class="content">Content</main>
  <footer class="footer">Footer</footer>
</div>`,
            css: `.grid {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  min-height: 300px;
  gap: 1rem;
}
.header { grid-area: header; background: #7C3AED; padding: 1rem; color: white; }
.sidebar { grid-area: sidebar; background: #1E2A45; padding: 1rem; color: white; }
.content { grid-area: content; background: #0F1629; padding: 2rem; color: white; }
.footer { grid-area: footer; background: #1E2A45; padding: 1rem; color: white; }`,
          },
          explanation: "The grid-template-areas property visually defines the layout. Each item is assigned to its area with grid-area.",
          tryItPrompt: "Rearrange the areas to put the sidebar on the right by swapping 'sidebar' and 'content' in the template.",
        },
      ],
      callouts: [
        { type: "pro-tip", title: "Responsive with areas", content: "You can redefine grid-template-areas in media queries to completely rearrange your layout without touching the HTML.",
        },
      ],
    },
  ],
  exercises: [
    {
      id: "css16-ex1",
      title: "Create a card that spans 2 columns",
      difficulty: 2,
      description: "Create a grid with 3 columns and 6 items. Make the first item span 2 columns.",
      requirements: ["Use grid-column with span", "The first item should be twice as wide as others"],
      starterCode: { html: `<div class="grid">\n  <div class="item feature">Featured</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n  <div class="item">4</div>\n  <div class="item">5</div>\n  <div class="item">6</div>\n</div>`, css: `.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n.item {\n  background: #00D4FF;\n  padding: 2rem;\n}\n.feature {\n  /* your code here */\n}` },
      hints: ["Use grid-column: span 2 on .feature"],
      solution: { html: `<div class="grid">\n  <div class="item feature">Featured</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n  <div class="item">4</div>\n  <div class="item">5</div>\n  <div class="item">6</div>\n</div>`, css: `.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n.item {\n  background: #00D4FF;\n  padding: 2rem;\n}\n.feature {\n  grid-column: span 2;\n  background: #7C3AED;\n}` },
      solutionExplanation: "grid-column: span 2 makes the featured item span across 2 column tracks.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "css16-q1",
        type: "mcq",
        question: "What does grid-column: 1 / -1 do?",
        options: ["Spans 1 column", "Spans from first to last column", "Places item in first column", "Hides the item"],
        correctAnswer: 1,
        explanation: "-1 refers to the last grid line, so 1 / -1 spans from the first line to the last, covering all columns.",
        difficulty: 2,
      },
      {
        id: "css16-q2",
        type: "mcq",
        question: "Which property assigns an item to a named grid area?",
        options: ["grid-area", "grid-template-areas", "grid-column", "grid-row"],
        correctAnswer: 0,
        explanation: "grid-area assigns an item to a named area defined in grid-template-areas.",
        difficulty: 1,
      },
    ],
  },
  cheatSheet: [
    { label: "Span columns", value: "grid-column: span 2" },
    { label: "Full width", value: "grid-column: 1 / -1" },
    { label: "Named area", value: "grid-area: header" },
    { label: "Define areas", value: "grid-template-areas" },
  ],
};

export const cssCh17: Chapter = {
  id: "css-ch-17",
  number: 17,
  title: "Responsive Design — Part 1",
  subtitle: "Media queries and the mobile-first approach.",
  difficulty: "Intermediate",
  estimatedMinutes: 40,
  xpReward: 120,
  prerequisites: ["css-ch-14"],
  partLabel: "Part 2: Layout",
  learningObjectives: [
    "Understand what responsive design is and why it matters.",
    "Write media queries using @media.",
    "Apply the mobile-first approach to CSS.",
    "Use common breakpoints for different device sizes.",
    "Debug responsive layouts with browser DevTools.",
  ],
  sections: [
    {
      id: "css17-s1",
      title: "What is Responsive Design?",
      whyItMatters: "Users visit websites on phones, tablets, laptops, and 4K monitors. Your site must look good on all of them. Responsive design is how you achieve this without building separate sites.",
      realWorldAnalogy: "Responsive design is like a building with movable walls. The same structure can be a cozy apartment or a spacious hall depending on how you arrange the interior — but the foundation stays the same.",
      content: `Responsive design means building a single website that adapts its layout to different screen sizes. Before responsive design (before ~2010), companies built separate 'm.example.com' mobile sites. This was terrible for maintenance and often had different content.

Today, we use CSS media queries to apply different styles based on the viewport width, height, orientation, or other device characteristics. The same HTML, different CSS.

The key principle: **mobile-first**. Design for small screens first, then enhance for larger screens. This ensures your site works on the most constrained devices, and larger screens get the benefit of more space.

Media queries look like this:
\`\`\`css
@media (min-width: 768px) {
  /* styles for tablets and larger */
}
\`\`\`

The condition inside parentheses is the media feature. When it's true, the styles inside apply.`,
      codeExamples: [
        {
          id: "css17-s1-ex1",
          title: "Simple responsive grid",
          description: "A grid that's 1 column on mobile, 2 on tablet, 3 on desktop.",
          code: {
            html: `<div class="grid">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>`,
            css: `.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}
@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.item {
  background: linear-gradient(135deg, #00D4FF, #7C3AED);
  padding: 2rem;
  color: white;
  border-radius: 8px;
}`,
          },
          explanation: "Mobile: 1 column. Tablet (640px+): 2 columns. Desktop (1024px+): 3 columns. The layout progressively enhances as screen size increases.",
          tryItPrompt: "Resize your browser window to see the layout change at the breakpoints.",
        },
      ],
      callouts: [
        { type: "tip", title: "Common breakpoints", content: "640px (mobile), 768px (tablet), 1024px (laptop), 1280px (desktop). Tailwind CSS uses these exact breakpoints." },
      ],
    },
    {
      id: "css17-s2",
      title: "Mobile-First vs Desktop-First",
      whyItMatters: "The order you write your media queries affects performance and maintainability. Mobile-first is the industry standard for good reason.",
      content: `Mobile-first means writing your base styles for small screens, then using min-width media queries to add styles for larger screens. Desktop-first is the opposite: base styles for large screens, max-width queries for smaller screens.

Mobile-first is better because:
- Mobile devices often have slower connections. Serving minimal CSS first is faster.
- It forces you to prioritize content. If something doesn't fit on mobile, you have to decide if it's really needed.
- Progressive enhancement is more maintainable than graceful degradation.

Example mobile-first:
\`\`\`css
.container { padding: 1rem; } /* mobile */
@media (min-width: 768px) { .container { padding: 2rem; } } /* tablet+ */
\`\`\`

Desktop-first (avoid this):
\`\`\`css
.container { padding: 2rem; } /* desktop */
@media (max-width: 767px) { .container { padding: 1rem; } } /* mobile */
\`\`\``,
    },
  ],
  exercises: [
    {
      id: "css17-ex1",
      title: "Make a navigation responsive",
      difficulty: 1,
      description: "Create a nav that's stacked on mobile and horizontal on desktop.",
      requirements: ["Mobile: items stacked vertically", "Desktop (768px+): items in a row"],
      starterCode: { html: `<nav class="nav">\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Contact</a>\n</nav>`, css: `.nav {\n  background: #1E2A45;\n  padding: 1rem;\n}\n.nav a {\n  display: block;\n  color: white;\n  padding: 0.5rem;\n  text-decoration: none;\n}\n/* Add media query here */` },
      hints: ["Use @media (min-width: 768px)", "Change display from block to flex on larger screens"],
      solution: { html: `<nav class="nav">\n  <a href="#">Home</a>\n  <a href="#">About</a>\n  <a href="#">Contact</a>\n</nav>`, css: `.nav {\n  background: #1E2A45;\n  padding: 1rem;\n}\n.nav a {\n  display: block;\n  color: white;\n  padding: 0.5rem;\n  text-decoration: none;\n}\n@media (min-width: 768px) {\n  .nav {\n    display: flex;\n    gap: 1rem;\n  }\n  .nav a {\n    display: inline-block;\n  }\n}` },
      solutionExplanation: "On mobile, links are block (stacked). On desktop, the nav becomes flex with items in a row.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "css17-q1",
        type: "mcq",
        question: "What is the mobile-first approach?",
        options: ["Build for desktop, then adapt for mobile", "Build for mobile, then enhance for larger screens", "Build separate sites for each device", "Use JavaScript to detect devices"],
        correctAnswer: 1,
        explanation: "Mobile-first means writing base styles for small screens, then using min-width media queries to enhance for larger screens.",
        difficulty: 1,
      },
      {
        id: "css17-q2",
        type: "true-false",
        question: "@media (max-width: 768px) targets screens 768px and wider.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. max-width: 768px targets screens 768px and SMALLER. For 768px and wider, use min-width: 768px.",
        difficulty: 1,
      },
    ],
  },
  cheatSheet: [
    { label: "Media query", value: "@media (min-width: 768px)" },
    { label: "Mobile first", value: "Base styles for mobile, enhance up" },
    { label: "Tablet breakpoint", value: "768px" },
    { label: "Desktop breakpoint", value: "1024px" },
  ],
};

export const cssCh18: Chapter = {
  id: "css-ch-18",
  number: 18,
  title: "Responsive Design — Part 2",
  subtitle: "Fluid typography, container queries, and modern techniques.",
  difficulty: "Advanced",
  estimatedMinutes: 45,
  xpReward: 130,
  prerequisites: ["css-ch-17"],
  partLabel: "Part 2: Layout",
  learningObjectives: [
    "Use clamp() for fluid typography that scales smoothly.",
    "Understand container queries and when they're useful.",
    "Use relative units (rem, em, %) for scalable layouts.",
    "Implement responsive images with srcset.",
    "Optimize performance for mobile devices.",
  ],
  sections: [
    {
      id: "css18-s1",
      title: "Fluid Typography with clamp()",
      whyItMatters: "Fixed font sizes break on small screens or look tiny on large screens. Fluid typography scales smoothly across all viewport sizes without dozens of media queries.",
      content: `The clamp() function takes three values: minimum, preferred, and maximum. \`clamp(1rem, 5vw, 3rem)\` means 'at least 1rem, ideally 5vw of viewport width, but never more than 3rem'.

This is perfect for typography because:
- It has a minimum size for readability on small screens
- It scales proportionally with viewport width
- It has a maximum size to prevent absurdly large text on 4K screens

Example fluid heading:
\`\`\`css
h1 {
  font-size: clamp(2rem, 5vw + 1rem, 4rem);
}
\`\`\`

The preferred value can be any valid CSS length or calculation. The formula \`5vw + 1rem\` means '5% of viewport width plus 1rem base'. This gives you fine control over the scaling rate.

Before clamp(), we needed media queries at every breakpoint:
\`\`\`css
h1 { font-size: 2rem; }
@media (min-width: 768px) { h1 { font-size: 2.5rem; } }
@media (min-width: 1024px) { h1 { font-size: 3rem; } }
\`\`\`

With clamp(), one line handles all cases.`,
    },
    {
      id: "css18-s2",
      title: "Container Queries: The Future of Responsive Design",
      whyItMatters: "Media queries respond to the viewport, but components should respond to their container. Container queries let components adapt based on their own size, not the page size.",
      content: `Container queries are a relatively new CSS feature (2022+) that let you style elements based on the size of their containing element, not the viewport.

To use container queries:
1. Declare a container on the parent: \`container-type: inline-size;\`
2. Query that container in child styles: \`@container (min-width: 400px)\`

Example - a card component that changes layout based on its container width:
\`\`\`css
.card-container {
  container-type: inline-size;
}
.card {
  /* single column by default */
  display: flex;
  flex-direction: column;
}
@container (min-width: 400px) {
  .card {
    flex-direction: row;
  }
}
\`\`\`

This is powerful because the same card component can adapt whether it's in a narrow sidebar or a wide main content area, without knowing anything about the page layout.

Browser support is good (Chrome 105+, Firefox 110+, Safari 16+), but you may need a fallback for older browsers.`,
    },
  ],
  exercises: [
    {
      id: "css18-ex1",
      title: "Create fluid typography",
      difficulty: 2,
      description: "Make a heading scale from 2rem minimum to 4rem maximum based on viewport width.",
      requirements: ["Use clamp()", "Set min: 2rem, max: 4rem", "Use a preferred value with vw"],
      starterCode: { html: `<h1 class="heading">Responsive Heading</h1>`, css: ".heading {\n  /* your clamp() here */\n  font-weight: bold;\n  color: #00D4FF;\n}" },
      hints: ["Try clamp(2rem, 4vw + 1rem, 4rem)"],
      solution: { html: `<h1 class="heading">Responsive Heading</h1>`, css: ".heading {\n  font-size: clamp(2rem, 4vw + 1rem, 4rem);\n  font-weight: bold;\n  color: #00D4FF;\n}" },
      solutionExplanation: "The heading scales from 2rem to 4rem based on viewport width, with 4vw + 1rem as the preferred value.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "css18-q1",
        type: "mcq",
        question: "What does clamp(1rem, 5vw, 3rem) mean?",
        options: ["Exactly 5vw", "Between 1rem and 3rem, ideally 5vw", "At least 5vw", "Maximum of 3vw"],
        correctAnswer: 1,
        explanation: "clamp() takes three values: minimum, preferred, maximum. It returns the preferred value clamped between min and max.",
        difficulty: 2,
      },
      {
        id: "css18-q2",
        type: "mcq",
        question: "Container queries respond to what?",
        options: ["Viewport width", "Container element size", "Screen resolution", "Device orientation"],
        correctAnswer: 1,
        explanation: "Container queries respond to the size of the containing element, not the viewport. This allows components to adapt based on their context.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Clamp function", value: "clamp(min, preferred, max)" },
    { label: "Container type", value: "container-type: inline-size" },
    { label: "Container query", value: "@container (min-width: 400px)" },
  ],
};

export const cssCh19: Chapter = {
  id: "css-ch-19",
  number: 19,
  title: "CSS Variables",
  subtitle: "Custom properties for dynamic theming and maintainable code.",
  difficulty: "Intermediate",
  estimatedMinutes: 35,
  xpReward: 120,
  prerequisites: ["css-ch-08"],
  partLabel: "Part 2: Layout",
  learningObjectives: [
    "Define CSS custom properties (variables) with --syntax.",
    "Use var() to reference custom properties.",
    "Set fallback values for variables.",
    "Update variables with JavaScript for dynamic theming.",
    "Understand the cascade and inheritance of custom properties.",
  ],
  sections: [
    {
      id: "css19-s1",
      title: "What are CSS Variables?",
      whyItMatters: "CSS variables (custom properties) let you define values once and reuse them throughout your stylesheet. This makes themes easier to maintain and enables dynamic updates via JavaScript.",
      content: `CSS custom properties, commonly called variables, are entities defined by CSS authors that contain specific values to be reused throughout the document. They're set using custom property notation (e.g., --main-color) and accessed using the var() function.

Defining a variable:
\`\`\`css
:root {
  --primary-color: #00D4FF;
  --spacing-unit: 1rem;
}
\`\`\`

Using a variable:
\`\`\`css
.button {
  background: var(--primary-color);
  padding: var(--spacing-unit);
}
\`\`\`

The :root pseudo-class selects the document root element, making variables globally available. Variables inherit, so you can also define them on specific components.

Variables are powerful because:
- They can be updated at runtime with JavaScript
- They cascade and inherit like normal CSS properties
- They can be used in calc() and other functions
- They make theming trivial (just change variable values)`,
    },
    {
      id: "css19-s2",
      title: "Fallback Values and Dynamic Updates",
      whyItMatters: "Not all browsers support custom properties equally, and sometimes you need a default if a variable isn't defined. JavaScript integration is what makes variables truly dynamic.",
      content: `The var() function accepts an optional fallback value: \`var(--color, blue)\`. If --color isn't defined, blue is used instead.

Example with fallback:
\`\`\`css
.text {
  color: var(--text-color, #333);
}
\`\`\`

Updating variables with JavaScript:
\`\`\`javascript
// Get the root element
const root = document.documentElement;

// Update a variable
root.style.setProperty('--primary-color', '#FF5733');
\`\`\`

This is how dark mode toggles work: you have variables for light and dark colors, and JavaScript updates them when the user toggles the theme. All elements using those variables update instantly.

Variables in calc():
\`\`\`css
.container {
  width: calc(100% - var(--sidebar-width));
}
\`\`\`

This makes layouts that respond to variable changes possible.`,
    },
  ],
  exercises: [
    {
      id: "css19-ex1",
      title: "Create a theme with variables",
      difficulty: 1,
      description: "Define variables for colors and spacing, then use them in a component.",
      requirements: ["Define at least 3 color variables", "Define a spacing variable", "Use var() to reference them"],
      starterCode: { html: `<div class="card">\n  <h2 class="title">Card Title</h2>\n  <p class="text">Card content</p>\n</div>`, css: `:root {\n  /* Define variables here */\n}\n.card {\n  background: var(--card-bg);\n  padding: var(--spacing);\n  border-radius: 8px;\n}\n.title {\n  color: var(--title-color);\n}\n.text {\n  color: var(--text-color);\n}` },
      hints: ["Define --card-bg, --title-color, --text-color, --spacing"],
      solution: { html: `<div class="card">\n  <h2 class="title">Card Title</h2>\n  <p class="text">Card content</p>\n</div>`, css: `:root {\n  --card-bg: #0F1629;\n  --title-color: #00D4FF;\n  --text-color: #E2E8F0;\n  --spacing: 1.5rem;\n}\n.card {\n  background: var(--card-bg);\n  padding: var(--spacing);\n  border-radius: 8px;\n}\n.title {\n  color: var(--title-color);\n}\n.text {\n  color: var(--text-color);\n}` },
      solutionExplanation: "Variables are defined on :root and referenced with var(). Changing :root variables updates all uses.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "css19-q1",
        type: "mcq",
        question: "How do you define a CSS variable?",
        options: ["$variable: value", "--variable: value", "@variable: value", "var(--variable): value"],
        correctAnswer: 1,
        explanation: "CSS variables are defined with -- prefix: --variable-name: value. They're called custom properties in the spec.",
        difficulty: 1,
      },
      {
        id: "css19-q2",
        type: "mcq",
        question: "What does var(--color, blue) do?",
        options: ["Sets --color to blue", "Uses --color, or blue if not defined", "Creates a blue variable", "Calculates color with blue"],
        correctAnswer: 1,
        explanation: "The second argument to var() is a fallback value. If --color isn't defined, blue is used instead.",
        difficulty: 1,
      },
    ],
  },
  cheatSheet: [
    { label: "Define variable", value: "--name: value" },
    { label: "Use variable", value: "var(--name)" },
    { label: "With fallback", value: "var(--name, fallback)" },
    { label: "Update in JS", value: "setProperty('--name', 'value')" },
  ],
};

export const cssCh20: Chapter = {
  id: "css-ch-20",
  number: 20,
  title: "Float and Clear",
  subtitle: "Legacy layout technique with valid modern use cases.",
  difficulty: "Beginner",
  estimatedMinutes: 30,
  xpReward: 100,
  prerequisites: ["css-ch-06"],
  partLabel: "Part 2: Layout",
  learningObjectives: [
    "Understand what float does and why it was used for layout.",
    "Use clear to fix float-related layout issues.",
    "Recognize when float is still appropriate today.",
    "Know when to use modern alternatives (Flexbox, Grid) instead.",
    "Clearfix techniques for containing floats.",
  ],
  sections: [
    {
      id: "css20-s1",
      title: "What is Float and Its History",
      whyItMatters: "You'll still see float in older codebases. Understanding it helps you maintain legacy code. Plus, float still has valid uses for wrapping text around images.",
      content: `The float property was originally designed for one purpose: to wrap text around images, like in newspapers. Designers discovered it could also be used for entire page layouts, and from ~2005-2015, float-based layouts were the standard.

Float takes an element out of normal flow and pushes it to the left or right of its container:
\`\`\`css
.image {
  float: left;
  margin-right: 1rem;
}
\`\`\`

Text and inline elements will flow around the floated element. Block elements ignore floats by default, which caused endless layout bugs.

The float property accepts: left, right, none (default), or inherit.

Today, you should use Flexbox or Grid for layout. Reserve float for its original purpose: wrapping text around images or figures.`,
    },
    {
      id: "css20-s2",
      title: "The Clear Property and Containing Floats",
      whyItMatters: "A common bug with floats: when all children of a container are floated, the container collapses to zero height. The clear property and clearfix techniques fix this.",
      content: `The clear property specifies which sides of an element's box other floating elements are not allowed:
- clear: left - no floats on the left
- clear: right - no floats on the right
- clear: both - no floats on either side

The clearfix problem:
\`\`\`html
<div class="container">
  <div class="float-left">Floated</div>
  <div class="float-left">Also floated</div>
</div>
\`\`\`
The container has zero height because floated elements are removed from normal flow.

Modern clearfix:
\`\`\`css
.container::after {
  content: "";
  display: table;
  clear: both;
}
\`\`\`

Or simpler with modern CSS:
\`\`\`css
.container {
  display: flow-root;
}
\`\`\`

The flow-root display value creates a new block formatting context that contains floats, solving the clearfix problem without hacky pseudo-elements.`,
    },
  ],
  exercises: [
    {
      id: "css20-ex1",
      title: "Wrap text around an image",
      difficulty: 1,
      description: "Create an image that floats left with text wrapping around it.",
      requirements: ["Use float: left on the image", "Add margin for spacing", "Text should wrap around"],
      starterCode: { html: `<div class="content">\n  <img src="https://via.placeholder.com/150" class="image" alt="Placeholder">\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n</div>`, css: ".content {\n  max-width: 500px;\n}\n.image {\n  /* your code here */\n}" },
      hints: ["Use float: left and margin-right"],
      solution: { html: `<div class="content">\n  <img src="https://via.placeholder.com/150" class="image" alt="Placeholder">\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n</div>`, css: ".content {\n  max-width: 500px;\n}\n.image {\n  float: left;\n  margin-right: 1rem;\n  margin-bottom: 0.5rem;\n}" },
      solutionExplanation: "float: left pushes the image to the left, and text flows around it. Margin adds spacing between image and text.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "css20-q1",
        type: "mcq",
        question: "What was the original purpose of the float property?",
        options: ["Creating multi-column layouts", "Wrapping text around images", "Centering elements", "Creating grids"],
        correctAnswer: 1,
        explanation: "Float was designed for newspaper-style text wrapping around images. It was later co-opted for layouts before Flexbox and Grid existed.",
        difficulty: 1,
      },
      {
        id: "css20-q2",
        type: "mcq",
        question: "What does display: flow-root do?",
        options: ["Makes an element float", "Contains child floats", "Clears all floats", "Creates a grid"],
        correctAnswer: 1,
        explanation: "flow-root creates a new block formatting context that contains floats, solving the clearfix problem without pseudo-elements.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Float left", value: "float: left" },
    { label: "Clear floats", value: "clear: both" },
    { label: "Modern clearfix", value: "display: flow-root" },
    { label: "Use float for", value: "Text wrapping around images" },
  ],
};
