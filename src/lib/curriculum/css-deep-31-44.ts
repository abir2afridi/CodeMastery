import type { Chapter } from "./types";

export const cssCh31: Chapter = {
  id: "css-ch-31",
  number: 31,
  title: "Pseudo-elements",
  subtitle: "::before, ::after, ::selection for advanced styling.",
  difficulty: "Intermediate",
  estimatedMinutes: 45,
  xpReward: 130,
  prerequisites: ["css-ch-05"],
  partLabel: "Part 4: Advanced",
  learningObjectives: [
    "Use ::before and ::after for decorative elements.",
    "Style text selection with ::selection.",
    "Use ::first-letter and ::first-line for typography.",
    "Understand content property and empty pseudo-elements.",
    "Create icons and decorative elements with pseudo-elements.",
  ],
  sections: [
    {
      id: "css31-s1",
      title: "::before and ::after",
      whyItMatters: "Pseudo-elements let you add content without changing your HTML. They're essential for icons, decorative elements, and complex designs.",
      content: "The ::before and ::after pseudo-elements insert content before or after an element's actual content. They don't exist in the HTML but are rendered by CSS.\n\nSyntax:\n\`\`\`css\n.element::before {\n  content: \"\";\n  /* styles */\n}\n\n.element::after {\n  content: \"\";\n  /* styles */\n}\n\`\`\`\n\nThe content property is required (can be empty string for decorative elements):\n\`\`\`css\n/* Text content */\n.quote::before {\n  content: \"\\201C\"; /* opening quote */\n}\n\n/* Image content */\n.icon::before {\n  content: url(icon.svg);\n}\n\n/* Empty for decorative */\n.decorative::before {\n  content: \"\";\n  width: 10px;\n  height: 10px;\n  background: blue;\n}\n\`\`\`\n\nExample - quote marks:\n\`\`\`css\nblockquote {\n  position: relative;\n  padding-left: 2rem;\n}\nblockquote::before {\n  content: \"\\201C\";\n  position: absolute;\n  left: 0;\n  font-size: 3rem;\n  color: #7C3AED;\n}\n\`\`\`",
      codeExamples: [
        {
          id: "css31-s1-ex1",
          title: "Decorative pseudo-elements",
          description: "A card with decorative pseudo-elements.",
          code: {
            html: `<div class="card">
  <h3>Featured Card</h3>
  <p>With decorative elements.</p>
</div>`,
            css: `.card {
  position: relative;
  background: linear-gradient(135deg, #00D4FF, #7C3AED);
  padding: 2rem;
  border-radius: 12px;
  color: white;
  max-width: 300px;
}
.card::before {
  content: \"★\";\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  font-size: 24px;\n}\n.card::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: rgba(255,255,255,0.3);\n  border-radius: 0 0 12px 12px;\n}`,
          },
          explanation: "::before adds a star icon, ::after adds a decorative bar at the bottom. Both are purely decorative and don't require HTML changes.",
          tryItPrompt: "Change the ::before content to a different emoji or symbol.",
        },
      ],
      callouts: [
        { type: "tip", title: "Content is required", content: "The content property is required for ::before and ::after. Use an empty string \"\" if you don't want text content." },
      ],
    },
    {
      id: "css31-s2",
      title: "Typography Pseudo-elements",
      whyItMatters: "::first-letter and ::first-line let you style specific parts of text, enabling creative typography without HTML markup.",
      content: "Typography pseudo-elements target specific parts of text content.\n\n::first-letter:\n\`\`\`css\np::first-letter {\n  font-size: 3rem;\n  font-weight: bold;\n  color: #7C3AED;\n  float: left;\n  margin-right: 0.5rem;\n}\n\`\`\`\n\n::first-line:\n\`\`\`css\np::first-line {\n  font-weight: bold;\n  color: #00D4FF;\n}\n\`\`\`\n\n::selection:\n\`\`\`css\n::selection {\n  background: #7C3AED;\n  color: white;\n}\n\`\`\`\n\nExample - drop cap:\n\`\`\`css\n.drop-cap::first-letter {\n  font-size: 4rem;\n  font-weight: bold;\n  float: left;\n  line-height: 1;\n  margin-right: 0.5rem;\n}\n\`\`\`",
      codeExamples: [
        {
          id: "css31-s2-ex1",
          title: "Styled text selection",
          description: "Custom text selection color.",
          code: {
            html: `<p class="styled-text">Select this text to see the custom selection color. Pseudo-elements can style the selection highlight.</p>`,
            css: `.styled-text::selection {
n  background: #7C3AED;\n  color: white;\n}
n.styled-text {
n  font-size: 18px;\n  line-height: 1.6;\n}`,
          },
          explanation: "::selection changes the highlight color when text is selected. Works in all modern browsers.",
          tryItPrompt: "Select the text to see the custom selection color.",
        },
      ],
      callouts: [
        { type: "tip", title: "Limited properties", content: "::first-letter and ::first-line only support a subset of CSS properties. Check MDN for the full list of supported properties." },
      ],
    },
  ],
  exercises: [
    {
      id: "css31-ex1",
      title: "Create a decorative pseudo-element",
      difficulty: 1,
      description: "Add a decorative pseudo-element to a card.",
      requirements: ["Use ::before or ::after", "Add content property", "Style the pseudo-element"],
      starterCode: { html: `<div class="card">\n  <h3>My Card</h3>\n</div>`, css: ".card {\n  background: #7C3AED;\n  padding: 2rem;\n  border-radius: 8px;\n  color: white;\n  max-width: 250px;\n  /* your pseudo-element here */\n}" },
      hints: ["Use .card::before", "Set content: '★'", "Position it absolutely"],
      solution: { html: `<div class="card">\n  <h3>My Card</h3>\n</div>`, css: ".card {\n  background: #7C3AED;\n  padding: 2rem;\n  border-radius: 8px;\n  color: white;\n  max-width: 250px;\n  position: relative;\n}\n.card::before {\n  content: '★';\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  font-size: 24px;\n}" },
      solutionExplanation: "The ::before pseudo-element adds a star icon positioned absolutely relative to the card.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "css31-q1",
        type: "mcq",
        question: "Which pseudo-element adds content before an element?",
        options: [":before", "::before", "$before", "%before"],
        correctAnswer: 1,
        explanation: "::before uses double colons for pseudo-elements in CSS3. Single colon is for pseudo-classes.",
        difficulty: 1,
      },
      {
        id: "css31-q2",
        type: "mcq",
        question: "Which property is required for ::before and ::after?",
        options: ["display", "position", "content", "width"],
        correctAnswer: 2,
        explanation: "content is required. Use an empty string \"\" if you don't want text content but want decorative styling.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Before pseudo", value: ".element::before { content: ''; }" },
    { label: "After pseudo", value: ".element::after { content: ''; }" },
    { label: "Selection", value: "::selection { background: color; }" },
    { label: "First letter", value: "::first-letter { font-size: 3rem; }" },
  ],
};

export const cssCh32: Chapter = {
  id: "css-ch-32",
  number: 32,
  title: "CSS Variables Advanced",
  subtitle: "Themes, runtime updates, and advanced patterns.",
  difficulty: "Advanced",
  estimatedMinutes: 50,
  xpReward: 140,
  prerequisites: ["css-ch-19"],
  partLabel: "Part 4: Advanced",
  learningObjectives: [
    "Create theme systems with CSS variables.",
    "Update variables at runtime with JavaScript.",
    "Use CSS variables in calc() and other functions.",
    "Understand variable scope and inheritance.",
    "Implement dark mode with variables.",
  ],
  sections: [
    {
      id: "css32-s1",
      title: "Theme Systems",
      whyItMatters: "CSS variables make theming trivial. You can switch entire color schemes by updating a few variables at the root level.",
      content: "CSS variables are perfect for building theme systems. Define your design tokens at the root and use them throughout.\n\nTheme system structure:\n\`\`\`css\n:root {\n  /* Colors */\n  --primary: #00D4FF;\n  --secondary: #7C3AED;\n  --background: #0F1629;\n  --text: #E2E8F0;\n  \n  /* Spacing */\n  --spacing-sm: 0.5rem;\n  --spacing-md: 1rem;\n  --spacing-lg: 2rem;\n  \n  /* Typography */\n  --font-body: system-ui;\n  --font-heading: Georgia, serif;\n}\n\n.dark-theme {\n  --primary: #00D4FF;\n  --secondary: #7C3AED;\n  --background: #0A0E1A;\n  --text: #CBD5E0;\n}\n\`\`\`\n\nUsing the theme:\n\`\`\`css\n.button {\n  background: var(--primary);\n  color: var(--text);\n  padding: var(--spacing-md);\n}\n\`\`\`\n\nSwitching themes:\n\`\`\`css\nbody.dark-mode {\n  color-scheme: dark;\n}\n\`\`\`",
      codeExamples: [
        {
          id: "css32-s1-ex1",
          title: "Themed component",
          description: "A button using CSS variables for theming.",
          code: {
            html: `<button class="btn">Themed Button</button>`,
            css: `:root {
n  --primary: #00D4FF;\n  --secondary: #7C3AED;\n  --text: #0F1629;\n}\n.btn {\n  background: linear-gradient(135deg, var(--primary), var(--secondary));\n  color: white;\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  cursor: pointer;\n}`,
          },
          explanation: "The button uses CSS variables for colors. You can change the entire theme by updating the root variables.",
          tryItPrompt: "Change the --primary variable in :root to see the button color change.",
        },
      ],
      callouts: [
        { type: "tip", title: "Design tokens", content: "Use CSS variables as your design tokens - single source of truth for colors, spacing, typography, and other design decisions." },
      ],
    },
    {
      id: "css32-s2",
      title: "Runtime Updates",
      whyItMatters: "JavaScript can update CSS variables at runtime, enabling dynamic theming, user preferences, and interactive designs.",
      content: "CSS variables can be updated via JavaScript, enabling dynamic theming without page reloads.\n\nUpdating a variable:\n\`\`\`javascript\n// Get the root element\nconst root = document.documentElement;\n\n// Update a variable\nroot.style.setProperty('--primary', '#FF5733');\n\n// Get a variable's value\nconst primaryColor = getComputedStyle(root)\n  .getPropertyValue('--primary');\n\`\`\`\n\nDark mode toggle:\n\`\`\`javascript\nconst toggle = document.querySelector('#theme-toggle');\ntoggle.addEventListener('click', () => {\n  document.body.classList.toggle('dark-mode');\n});\n\`\`\`\n\nCSS:\n\`\`\`css\nbody {\n  --bg: #ffffff;\n  --text: #1a1a1a;\n}\nbody.dark-mode {\n  --bg: #1a1a1a;\n  --text: #ffffff;\n}\n.content {\n  background: var(--bg);\n  color: var(--text);\n}\n\`\`\`",
      codeExamples: [
        {
          id: "css32-s2-ex1",
          title: "Variable updates",
          description: "Update CSS variables dynamically.",
          code: {
            html: `<div id="box">Click to change color</div>`,
            css: `:root {
n  --box-color: #00D4FF;\n}\n#box {\n  width: 100px;\n  height: 100px;\n  background: var(--box-color);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  cursor: pointer;\n  transition: background 0.3s ease;\n}`,
          },
          explanation: "Clicking the box cycles through colors by updating the CSS variable. The transition makes it smooth.",
          tryItPrompt: "Click the box to see the color change.",
        },
      ],
      callouts: [
        { type: "pro-tip", title: "Performance", content: "Updating CSS variables is performant because it triggers style recalculation only for elements that use those variables." },
      ],
    },
  ],
  exercises: [
    {
      id: "css32-ex1",
      title: "Create a theme system",
      difficulty: 2,
      description: "Define CSS variables for colors and use them in a component.",
      requirements: ["Define at least 3 color variables in :root", "Use var() to reference them", "Create a component using the variables"],
      starterCode: { html: `<div class="card">\n  <h3>Themed Card</h3>\n</div>`, css: "/* Define variables here */\n.card {\n  background: var(--card-bg);\n  color: var(--card-text);\n  padding: 2rem;\n  border-radius: 8px;\n  max-width: 250px;\n}" },
      hints: ["Use :root { --card-bg: #7C3AED; --card-text: white; }", "Reference with var(--variable-name)"],
      solution: { html: `<div class="card">\n  <h3>Themed Card</h3>\n</div>`, css: ":root {\n  --card-bg: #7C3AED;\n  --card-text: white;\n}\n.card {\n  background: var(--card-bg);\n  color: var(--card-text);\n  padding: 2rem;\n  border-radius: 8px;\n  max-width: 250px;\n}" },
      solutionExplanation: "CSS variables are defined at :root and referenced with var(). This makes theming easy - just update the variables.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "css32-q1",
        type: "mcq",
        question: "How do you update a CSS variable with JavaScript?",
        options: ["setVariable()", "setProperty()", "updateVariable()", "changeVariable()"],
        correctAnswer: 1,
        explanation: "Use element.style.setProperty('--variable-name', 'value') to update CSS variables via JavaScript.",
        difficulty: 2,
      },
      {
        id: "css32-q2",
        type: "mcq",
        question: "Where should you define global CSS variables?",
        options: ["In the body", "In :root", "In html", "In head"],
        correctAnswer: 1,
        explanation: ":root is the pseudo-class that selects the document root element, making variables globally available throughout the document.",
        difficulty: 1,
      },
    ],
  },
  cheatSheet: [
    { label: "Define variable", value: "--variable: value" },
    { label: "Use variable", value: "var(--variable)" },
    { label: "Update with JS", value: "element.style.setProperty('--var', 'value')" },
    { label: "Get value", value: "getComputedStyle(element).getPropertyValue('--var')" },
  ],
};

export const cssCh33: Chapter = {
  id: "css-ch-33",
  number: 33,
  title: "calc(), min(), max(), clamp()",
  subtitle: "Math functions in CSS for dynamic values.",
  difficulty: "Intermediate",
  estimatedMinutes: 45,
  xpReward: 130,
  prerequisites: ["css-ch-08"],
  partLabel: "Part 4: Advanced",
  learningObjectives: [
    "Use calc() for mathematical calculations.",
    "Use min() and max() for responsive values.",
    "Use clamp() for constrained values.",
    "Combine math functions for complex layouts.",
    "Understand browser support and fallbacks.",
  ],
  sections: [
    {
      id: "css33-s1",
      title: "calc()",
      whyItMatters: "calc() lets you perform mathematical operations in CSS, enabling dynamic layouts that respond to different conditions.",
      content: "The calc() function performs mathematical calculations to determine CSS property values.\n\nSyntax:\n\`\`\`css\nwidth: calc(100% - 2rem);\nmargin: calc(10px + 5%);\n\`\`\`\n\nSupported operations:\n- Addition: +\n- Subtraction: -\n- Multiplication: *\n- Division: /\n\nExamples:\n\`\`\`css\n/* Full width minus sidebar */\n.main {\n  width: calc(100% - 250px);\n}\n\n/* Center with calc */\n.center {\n  left: calc(50% - 100px);\n}\n\n/* Combine units */\n.box {\n  width: calc(50% + 20px);\n}\n\`\`\`\n\nImportant: Spaces are required around + and - operators:\n\`\`\`css\n/* Correct */\nwidth: calc(100% - 2rem);\n\n/* Incorrect */\nwidth: calc(100%-2rem);\n\`\`\`",
      codeExamples: [
        {
          id: "css33-s1-ex1",
          title: "Dynamic width with calc",
          description: "A container with calculated width.",
          code: {
            html: `<div class="container">\n  <div class="sidebar">Sidebar</div>\n  <div class="content">Content</div>\n</div>`,
            css: `.container {\n  display: flex;\n  max-width: 800px;\n}\n.sidebar {\n  width: 200px;\n  background: #7C3AED;\n  padding: 1rem;\n  color: white;\n}\n.content {\n  width: calc(100% - 200px - 1rem);\n  background: #00D4FF;\n  padding: 1rem;\n  color: white;\n  margin-left: 1rem;\n}`,
          },
          explanation: "The content width is calculated as 100% minus the sidebar width and margin, ensuring it fills the remaining space exactly.",
          tryItPrompt: "Change the sidebar width and see how the content adjusts automatically.",
        },
      ],
      callouts: [
        { type: "tip", title: "Spaces required", content: "Always include spaces around + and - operators in calc(): calc(100% - 2rem), not calc(100%-2rem)." },
      ],
    },
    {
      id: "css33-s2",
      title: "min(), max(), and clamp()",
      whyItMatters: "These functions create responsive values that adapt to viewport size without media queries.",
      content: "min(), max(), and clamp() create adaptive values that respond to different conditions.\n\nmin() - returns the smaller value:\n\`\`\`css\n.width {\n  width: min(500px, 100%);\n}\n\`\`\`\n\nmax() - returns the larger value:\n\`\`\`css\n.width {\n  width: max(300px, 100%);\n}\n\`\`\`\n\nclamp() - constrains between min and max:\n\`\`\`css\n.width {\n  width: clamp(300px, 50%, 500px);\n}\n\`\`\`\n\nFluid typography:\n\`\`\`css\nh1 {\n  font-size: clamp(2rem, 5vw + 1rem, 4rem);\n}\n\`\`\`\n\nThis means: minimum 2rem, ideally 5vw + 1rem, but never more than 4rem.\n\nResponsive container:\n\`\`\`css\n.container {\n  width: min(100%, 1200px);\n  margin: 0 auto;\n}\n\`\`\`",
      codeExamples: [
        {
          id: "css33-s2-ex1",
          title: "Responsive container",
          description: "A container that adapts to viewport size.",
          code: {
            html: `<div class="container">\n  <h3>Responsive Container</h3>\n  <p>Max width 1200px, but responsive on smaller screens.</p>\n</div>`,
            css: `.container {\n  width: min(100%, 1200px);\n  margin: 0 auto;\n  background: linear-gradient(135deg, #00D4FF, #7C3AED);\n  padding: 2rem;\n  border-radius: 12px;\n  color: white;\n}\n.container h3 {\n  margin: 0 0 1rem 0;\n}`,
          },
          explanation: "min(100%, 1200px) means use 100% on small screens, but never exceed 1200px. The container is always centered.",
          tryItPrompt: "Resize your browser to see how the container width adapts.",
        },
      ],
      callouts: [
        { type: "tip", title: "Browser support", content: "calc(), min(), max(), and clamp() are supported in all modern browsers. No fallback needed for most projects." },
      ],
    },
  ],
  exercises: [
    {
      id: "css33-ex1",
      title: "Use calc() for layout",
      difficulty: 1,
      description: "Create a layout where one element's width is calculated.",
      requirements: ["Use calc()", "Perform at least one mathematical operation", "Use different units (px, %, rem)"],
      starterCode: { html: `<div class="container">\n  <div class="fixed">Fixed</div>\n  <div class="flexible">Flexible</div>\n</div>`, css: ".container {\n  display: flex;\n  max-width: 600px;\n}\n.fixed {\n  width: 150px;\n  background: #7C3AED;\n  padding: 1rem;\n  color: white;\n}\n.flexible {\n  background: #00D4FF;\n  padding: 1rem;\n  color: white;\n  margin-left: 1rem;\n  /* your calc here */\n}" },
      hints: ["Try width: calc(100% - 150px - 1rem)", "This subtracts the fixed width and margin"],
      solution: { html: `<div class="container">\n  <div class="fixed">Fixed</div>\n  <div class="flexible">Flexible</div>\n</div>`, css: ".container {\n  display: flex;\n  max-width: 600px;\n}\n.fixed {\n  width: 150px;\n  background: #7C3AED;\n  padding: 1rem;\n  color: white;\n}\n.flexible {\n  background: #00D4FF;\n  padding: 1rem;\n  color: white;\n  margin-left: 1rem;\n  width: calc(100% - 150px - 1rem);\n}" },
      solutionExplanation: "calc() calculates the flexible width as total width minus the fixed element and margin.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "css33-q1",
        type: "mcq",
        question: "What does calc(100% - 2rem) do?",
        options: ["Subtracts 2rem from 100%", "Adds 2rem to 100%", "Multiplies by 2rem", "Divides by 2rem"],
        correctAnswer: 0,
        explanation: "calc() performs mathematical operations. This subtracts 2rem from 100% of the parent width.",
        difficulty: 1,
      },
      {
        id: "css33-q2",
        type: "mcq",
        question: "Which function constrains a value between minimum and maximum?",
        options: ["min()", "max()", "calc()", "clamp()"],
        correctAnswer: 3,
        explanation: "clamp(min, preferred, max) constrains the value to stay between the minimum and maximum, using the preferred value when possible.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Calc", value: "calc(100% - 2rem)" },
    { label: "Min", value: "min(500px, 100%)" },
    { label: "Max", value: "max(300px, 100%)" },
    { label: "Clamp", value: "clamp(2rem, 5vw, 4rem)" },
  ],
};

export const cssCh34: Chapter = {
  id: "css-ch-34",
  number: 34,
  title: "CSS Architecture: BEM",
  subtitle: "Naming convention for maintainable CSS.",
  difficulty: "Intermediate",
  estimatedMinutes: 45,
  xpReward: 130,
  prerequisites: ["css-ch-05"],
  partLabel: "Part 4: Advanced",
  learningObjectives: [
    "Understand BEM naming methodology.",
    "Write BEM-compliant class names.",
    "Use modifiers for variations.",
    "Use elements for components.",
    "Organize CSS with BEM structure.",
  ],
  sections: [
    {
      id: "css34-s1",
      title: "BEM Basics",
      whyItMatters: "BEM (Block Element Modifier) is a naming convention that makes CSS maintainable, predictable, and scalable for large projects.",
      content: "BEM is a naming convention that makes CSS more maintainable by creating clear relationships between HTML and CSS.\n\n**BEM Components:**\n\n**Block** - The standalone entity (component):\n\`\`\`css\n.card { }\n.button { }\n\`\`\`\n\n**Element** - A part of the block (child element):\n\`\`\`css\n.card__title { }\n.card__body { }\n.card__image { }\n\`\`\`\n\n**Modifier** - A variation of the block or element:\n\`\`\`css\n.card--featured { }\n.button--primary { }\n.card__title--large { }\n\`\`\`\n\n**Naming rules:**\n- Block: lowercase with hyphens: \`.my-block\`\n- Element: double underscore: \`.block__element\`\n- Modifier: double hyphen: \`.block--modifier\`\n\nHTML structure:\n\`\`\`html\n<div class=\"card card--featured\">\n  <img class=\"card__image\" src=\"...\" alt=\"...\">\n  <h2 class=\"card__title\">Title</h2>\n  <p class=\"card__body\">Content</p>\n</div>\n\`\`\`",
      codeExamples: [
        {
          id: "css34-s1-ex1",
          title: "BEM component",
          description: "A card component using BEM naming.",
          code: {
            html: `<div class="card card--featured">
  <img class="card__image" src="https://via.placeholder.com/300" alt="Card image">
  <h2 class="card__title">Featured Card</h2>
  <p class="card__body">This is a featured card using BEM naming.</p>
  <button class="card__button card__button--primary">Action</button>
</div>`,
            css: `.card {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n}\n.card--featured {\n  border: 2px solid #7C3AED;\n}\n.card__image {\n  width: 100%;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n}\n.card__title {\n  margin: 0 0 0.5rem 0;\n  color: #1E2A45;\n}\n.card__body {\n  color: #64748B;\n  line-height: 1.6;\n}\n.card__button {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.card__button--primary {\n  background: #7C3AED;\n  color: white;\n}`,
          },
          explanation: "BEM naming makes the relationship between HTML elements clear. card is the block, __title is an element, and --featured is a modifier.",
          tryItPrompt: "Add a new modifier like --large to make the card bigger.",
        },
      ],
      callouts: [
        { type: "tip", title: "Nesting", content: "BEM encourages flat CSS structure. Avoid deep nesting - prefer .card__title over .card .title to keep specificity low." },
      ],
    },
    {
      id: "css34-s2",
      title: "BEM Best Practices",
      whyItMatters: "Following BEM best practices ensures your CSS remains maintainable as your project grows.",
      content: "**BEM Best Practices:**\n\n1. **Keep it flat** - Avoid deep nesting:\n\`\`\`css\n/* Good */\n.card__title { }\n\n/* Avoid */\n.card .title { }\n\`\`\`\n\n2. **Modifiers are boolean** - Don't combine multiple modifiers:\n\`\`\`css\n/* Good */\n.card--featured { }\n\n/* Avoid */\n.card--featured--large { }\n\`\`\`\n\n3. **Elements only belong to blocks** - Don't use elements standalone:\n\`\`\`css\n/* Good */\n.card__title { }\n\n/* Bad */\n__title { }\n\`\`\`\n\n4. **Use modifiers for state**:\n\`\`\`css\n.button--disabled { }\n.button--active { }\n\`\`\`\n\n5. **Keep names meaningful**:\n\`\`\`css\n/* Good */\n.user-card__avatar\n\n/* Bad */\n.uc__a\n\`\`\`",
      codeExamples: [
        {
          id: "css34-s2-ex1",
          title: "BEM button component",
          description: "A button with multiple modifiers.",
          code: {
            html: `<button class="button button--primary button--large">Primary Large</button>\n<button class="button button--secondary">Secondary</button>`,
            css: `.button {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  cursor: pointer;\n  background: #E2E8F0;\n  color: #1E2A45;\n}\n.button--primary {\n  background: #7C3AED;\n  color: white;\n}\n.button--secondary {\n  background: #00D4FF;\n  color: white;\n}\n.button--large {\n  padding: 0.75rem 1.5rem;\n  font-size: 16px;\n}`,
          },
          explanation: "Modifiers add variations to the base button. Each modifier is independent and can be combined.",
          tryItPrompt: "Add a --disabled modifier that sets opacity to 0.5 and cursor to not-allowed.",
        },
      ],
      callouts: [
        { type: "pro-tip", title: "Tooling", content: "Many CSS-in-JS solutions and preprocessors support BEM naming automatically. Use tools to enforce BEM in large teams." },
      ],
    },
  ],
  exercises: [
    {
      id: "css34-ex1",
      title: "Create a BEM component",
      difficulty: 1,
      description: "Create a component using BEM naming convention.",
      requirements: ["Use Block naming", "Include at least one Element", "Include at least one Modifier"],
      starterCode: { html: `<div class=\"your-block\">\n  <div class=\"your-block__element\">Content</div>\n</div>`, css: "/* Your BEM styles here */" },
      hints: ["Block: .product-card", "Element: .product-card__image", "Modifier: .product-card--sale"],
      solution: { html: `<div class=\"product-card\">\n  <div class=\"product-card__image\">Image</div>\n</div>`, css: ".product-card {\n  background: white;\n  padding: 1rem;\n  border-radius: 8px;\n}\n.product-card__image {\n  height: 150px;\n  background: #E2E8F0;\n  border-radius: 4px;\n}" },
      solutionExplanation: "BEM naming uses block for the component, __element for children, and --modifier for variations.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "css34-q1",
        type: "mcq",
        question: "What does BEM stand for?",
        options: ["Block Element Modifier", "Basic Element Model", "Base Element Method", "Block Entity Model"],
        correctAnswer: 0,
        explanation: "BEM stands for Block Element Modifier, a naming methodology for creating reusable components.",
        difficulty: 1,
      },
      {
        id: "css34-q2",
        type: "mcq",
        question: "What separator is used for elements in BEM?",
        options: ["Single hyphen (-)", "Double hyphen (--)", "Double underscore (__)", "Single underscore (_)"],
        correctAnswer: 2,
        explanation: "Elements use double underscore (.block__element). Modifiers use double hyphen (.block--modifier).",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Block", value: ".card" },
    { label: "Element", value: ".card__title" },
    { label: "Modifier", value: ".card--featured" },
    { label: "HTML", value: "class=\"card card--featured\"" },
  ],
};

export const cssCh35: Chapter = {
  id: "css-ch-35",
  number: 35,
  title: "ITCSS & @layer",
  subtitle: "Cascade layers for organized CSS.",
  difficulty: "Advanced",
  estimatedMinutes: 50,
  xpReward: 140,
  prerequisites: ["css-ch-34"],
  partLabel: "Part 4: Advanced",
  learningObjectives: [
    "Understand ITCSS methodology.",
    "Use @layer for cascade layers.",
    "Organize CSS with layers.",
    "Control specificity with layers.",
  ],
  sections: [
    {
      id: "css35-s1",
      title: "Cascade Layers",
      whyItMatters: "@layer lets you organize CSS into layers, controlling the cascade order without specificity wars.",
      content: `The @layer at-rule creates cascade layers with explicit precedence.

Syntax:
\`\`\`css
@layer base, components, utilities;

@layer base {
  /* Reset, typography */
}

@layer components {
  /* Component styles */
}

@layer utilities {
  /* Utility classes */
}
\`\`\`

Layers cascade in declaration order. Later layers override earlier ones regardless of specificity.

Example:
\`\`\`css
@layer base { .button { background: blue; } }
@layer components { .button { background: red; } }

/* components overrides base regardless of specificity */
\`\`\``,
    },
  ],
  exercises: [
    { id: "css35-ex1", title: "Create cascade layers", difficulty: 2, description: "Define @layer for base and components.", requirements: ["Create @layer base", "Create @layer components", "Add styles to each"], starterCode: { html: `<div class="box">Box</div>`, css: "/* Define your layers here */\n.box {\n  padding: 1rem;\n  background: #7C3AED;\n  color: white;\n}" }, hints: ["Use @layer base and @layer components"], solution: { html: `<div class="box">Box</div>`, css: "@layer base { * { box-sizing: border-box; } }\n@layer components { .box { padding: 1rem; background: #7C3AED; color: white; } }" }, solutionExplanation: "Layers organize CSS by purpose." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "css35-q1", type: "mcq", question: "What does @layer create?", options: ["Animations", "Cascade layers", "Media queries", "Variables"], correctAnswer: 1, explanation: "@layer creates cascade layers for organizing CSS.", difficulty: 2 }] },
  cheatSheet: [{ label: "Layer syntax", value: "@layer name { }" }, { label: "Multiple layers", value: "@layer base, components, utilities" }],
};

export const cssCh36: Chapter = {
  id: "css-ch-36",
  number: 36,
  title: "Dark Mode Implementation",
  subtitle: "prefers-color-scheme + variables.",
  difficulty: "Intermediate",
  estimatedMinutes: 45,
  xpReward: 130,
  prerequisites: ["css-ch-32"],
  partLabel: "Part 4: Advanced",
  learningObjectives: [
    "Use prefers-color-scheme media query.",
    "Implement dark mode with CSS variables.",
    "Support system preferences.",
    "Create manual theme toggles.",
  ],
  sections: [
    {
      id: "css36-s1",
      title: "System Dark Mode",
      whyItMatters: "Respecting system dark mode preference is essential for accessibility and user comfort.",
      content: `Use prefers-color-scheme to detect system dark mode preference.

\`\`\`css
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #1a1a1a;
    --text: #ffffff;
  }
}
\`\`\`

Combine with CSS variables:
\`\`\`css
:root {
  --bg: #ffffff;
  --text: #1a1a1a;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #1a1a1a;
    --text: #ffffff;
  }
}

body {
  background: var(--bg);
  color: var(--text);
}
\`\`\``,
    },
  ],
  exercises: [
    { id: "css36-ex1", title: "Implement dark mode", difficulty: 1, description: "Add dark mode support using variables.", requirements: ["Define variables for light and dark", "Use prefers-color-scheme", "Apply variables"], starterCode: { html: `<div class="card">Card</div>`, css: "/* Your dark mode here */\n.card {\n  padding: 2rem;\n  border-radius: 8px;\n}" }, hints: ["Define --bg and --text variables", "Use @media (prefers-color-scheme: dark)"], solution: { html: `<div class="card">Card</div>`, css: ":root { --bg: white; --text: #1a1a1a; }\n@media (prefers-color-scheme: dark) { :root { --bg: #1a1a1a; --text: white; } }\n.card { background: var(--bg); color: var(--text); padding: 2rem; border-radius: 8px; }" }, solutionExplanation: "Variables change based on system preference." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "css36-q1", type: "mcq", question: "Which media query detects dark mode?", options: ["@media dark", "@media (prefers-color-scheme: dark)", "@media (theme: dark)", "@media (mode: dark)"], correctAnswer: 1, explanation: "prefers-color-scheme detects the user's color scheme preference.", difficulty: 1 }] },
  cheatSheet: [{ label: "Dark mode query", value: "@media (prefers-color-scheme: dark)" }, { label: "Color scheme meta", value: '<meta name="color-scheme" content="dark light">' }],
};

export const cssCh37: Chapter = {
  id: "css-ch-37",
  number: 37,
  title: "CSS Accessibility",
  subtitle: "focus styles, reduced motion, and ARIA.",
  difficulty: "Intermediate",
  estimatedMinutes: 45,
  xpReward: 130,
  prerequisites: ["css-ch-21"],
  partLabel: "Part 4: Advanced",
  learningObjectives: [
    "Style focus indicators for keyboard navigation.",
    "Respect prefers-reduced-motion.",
    "Use accessible color contrast.",
    "Support screen readers with ARIA.",
  ],
  sections: [
    {
      id: "css37-s1",
      title: "Focus Styles",
      whyItMatters: "Visible focus indicators are essential for keyboard users. Never remove them without replacement.",
      content: `Always provide visible focus indicators:

\`\`\`css
button:focus {
  outline: 3px solid #00D4FF;
  outline-offset: 2px;
}
\`\`\`

Custom focus styles:
\`\`\`css
button:focus {
  outline: none;
  box-shadow: 0 0 0 3px #00D4FF;
}
\`\`\`

Skip links for accessibility:
\`\`\`css
.skip-link {
  position: absolute;
  top: -40px;
}
.skip-link:focus {
  top: 0;
}
\`\`\``,
    },
    {
      id: "css37-s2",
      title: "Reduced Motion",
      whyItMatters: "Some users experience motion sickness. Respecting their preferences is crucial.",
      content: `Use prefers-reduced-motion to disable animations:

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
\`\`\`

Or disable specific animations:
\`\`\`css
.animated {
  animation: bounce 1s ease;
}

@media (prefers-reduced-motion: reduce) {
  .animated {
    animation: none;
  }
}
\`\`\``,
    },
  ],
  exercises: [
    { id: "css37-ex1", title: "Add accessible focus", difficulty: 1, description: "Add visible focus styles.", requirements: ["Style :focus state", "Use outline or box-shadow", "Ensure visibility"], starterCode: { html: `<button class="btn">Button</button>`, css: ".btn {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  background: #7C3AED;\n  color: white;\n  cursor: pointer;\n}" }, hints: ["Add .btn:focus { outline: 3px solid #00D4FF; }"], solution: { html: `<button class="btn">Button</button>`, css: ".btn {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  background: #7C3AED;\n  color: white;\n  cursor: pointer;\n}\n.btn:focus {\n  outline: 3px solid #00D4FF;\n  outline-offset: 2px;\n}" }, solutionExplanation: "Visible focus indicators help keyboard users navigate." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "css37-q1", type: "mcq", question: "Which media query detects reduced motion preference?", options: ["@media (no-motion)", "@media (prefers-reduced-motion: reduce)", "@media (motion: off)", "@media (animation: none)"], correctAnswer: 1, explanation: "prefers-reduced-motion detects users who prefer reduced motion.", difficulty: 2 }] },
  cheatSheet: [{ label: "Focus style", value: "outline: 3px solid color" }, { label: "Reduced motion", value: "@media (prefers-reduced-motion: reduce)" }],
};

export const cssCh38: Chapter = {
  id: "css-ch-38",
  number: 38,
  title: "Sass/SCSS Intro",
  subtitle: "Preprocessors overview for enhanced CSS.",
  difficulty: "Intermediate",
  estimatedMinutes: 45,
  xpReward: 130,
  prerequisites: ["css-ch-34"],
  partLabel: "Part 4: Advanced",
  learningObjectives: [
    "Understand Sass preprocessing.",
    "Use Sass variables and nesting.",
    "Use mixins for reusable styles.",
    "Use partials and imports.",
  ],
  sections: [
    {
      id: "css38-s1",
      title: "Sass Basics",
      whyItMatters: "Sass extends CSS with variables, nesting, mixins, and more, making large stylesheets more maintainable.",
      content: `Sass is a CSS preprocessor that adds features like variables, nesting, and mixins.

Variables:
\`\`\`scss
$primary: #00D4FF;
$spacing: 1rem;

.button {
  background: $primary;
  padding: $spacing;
}
\`\`\`

Nesting:
\`\`\`scss
.card {
  background: white;
  &__title {
    font-size: 1.5rem;
  }
  &--featured {
    border: 2px solid $primary;
  }
}
\`\`\`

Mixins:
\`\`\`scss
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.centered {
  @include flex-center;
}
\`\`\``,
    },
  ],
  exercises: [
    { id: "css38-ex1", title: "Use Sass features", difficulty: 2, description: "Convert CSS to use Sass variables and nesting.", requirements: ["Use Sass variables", "Use nesting", "Create a mixin"], starterCode: { html: `<div class=\"card\">\n  <h2 class=\"card__title\">Title</h2>\n</div>`, css: "/* Convert to Sass */\n.card {\n  background: #7C3AED;\n  padding: 1rem;\n}\n.card__title {\n  font-size: 1.5rem;\n}" }, hints: ["Use $primary variable", "Nest .card__title inside .card"], solution: { html: `<div class=\"card\">\n  <h2 class=\"card__title\">Title</h2>\n</div>`, css: "$primary: #7C3AED;\n.card {\n  background: $primary;\n  padding: 1rem;\n  &__title {\n    font-size: 1.5rem;\n  }\n}" }, solutionExplanation: "Sass adds variables and nesting for better organization." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "css38-q1", type: "mcq", question: "What does Sass extend CSS with?", options: ["JavaScript logic", "Variables, nesting, mixins", "HTML elements", "Database connections"], correctAnswer: 1, explanation: "Sass adds variables, nesting, mixins, and other features to CSS.", difficulty: 1 }] },
  cheatSheet: [{ label: "Sass variable", value: "$name: value" }, { label: "Nesting", value: ".parent { &__child {} }" }, { label: "Mixin", value: "@mixin name {} @include name" }],
};

export const cssCh39: Chapter = {
  id: "css-ch-39",
  number: 39,
  title: "Tailwind CSS Intro",
  subtitle: "Utility-first framework overview.",
  difficulty: "Intermediate",
  estimatedMinutes: 45,
  xpReward: 130,
  prerequisites: ["css-ch-21"],
  partLabel: "Part 4: Advanced",
  learningObjectives: [
    "Understand utility-first CSS.",
    "Use Tailwind utility classes.",
    "Configure Tailwind theme.",
    "Customize Tailwind for projects.",
  ],
  sections: [
    {
      id: "css39-s1",
      title: "Utility-First Approach",
      whyItMatters: "Tailwind CSS provides pre-built utility classes for rapid development without writing custom CSS.",
      content: `Tailwind uses utility classes for styling:

\`\`\`html
<div class="bg-blue-500 text-white p-4 rounded-lg">
  Styled with Tailwind
</div>
\`\`\`

Common utilities:
- Spacing: p-4, m-2, px-4, py-2
- Colors: bg-blue-500, text-white
- Typography: text-xl, font-bold
- Layout: flex, grid, items-center
- Borders: rounded-lg, border-2

Responsive prefixes:
\`\`\`html
<div class="w-full md:w-1/2 lg:w-1/3">
  Responsive width
</div>
\`\`\``,
    },
  ],
  exercises: [
    { id: "css39-ex1", title: "Use Tailwind utilities", difficulty: 1, description: "Style an element with Tailwind classes.", requirements: ["Use at least 5 utility classes", "Include spacing and colors", "Make it responsive"], starterCode: { html: `<div class=\"\">\n  Styled with Tailwind\n</div>`, css: "/* No CSS needed - use Tailwind classes */" }, hints: ["Try bg-blue-500 text-white p-4 rounded-lg"], solution: { html: `<div class=\"bg-blue-500 text-white p-4 rounded-lg\">\n  Styled with Tailwind\n</div>`, css: "/* No CSS needed - use Tailwind classes */" }, solutionExplanation: "Tailwind utilities provide pre-built styles for common patterns." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "css39-q1", type: "mcq", question: "What is Tailwind CSS?", options: ["A CSS preprocessor", "A utility-first framework", "A JavaScript library", "A database tool"], correctAnswer: 1, explanation: "Tailwind is a utility-first CSS framework with pre-built utility classes.", difficulty: 1 }] },
  cheatSheet: [{ label: "Spacing", value: "p-4, m-2" }, { label: "Colors", value: "bg-blue-500, text-white" }, { label: "Responsive", value: "md:, lg:" }],
};

export const cssCh40: Chapter = {
  id: "css-ch-40",
  number: 40,
  title: "CSS Performance",
  subtitle: "Selector cost, paint, and layout optimization.",
  difficulty: "Advanced",
  estimatedMinutes: 50,
  xpReward: 140,
  prerequisites: ["css-ch-26"],
  partLabel: "Part 4: Advanced",
  learningObjectives: [
    "Understand CSS selector performance.",
    "Optimize paint and layout operations.",
    "Use will-change strategically.",
    "Profile CSS performance.",
  ],
  sections: [
    {
      id: "css40-s1",
      title: "Selector Performance",
      whyItMatters: "Inefficient selectors slow down rendering. Understanding selector cost helps write faster CSS.",
      content: `Selector performance (fastest to slowest):
1. ID: #header
2. Class: .button
3. Attribute: [type="text"]
4. Pseudo-class: :hover
5. Universal: *

Bad selectors (avoid):
\`\`\`css
/* Expensive */
body div ul li a {}

/* Deep nesting */
.parent .child .grandchild .great-grandchild {}

/* Universal selector */
* {}
\`\`\`

Good selectors:
\`\`\`css
/* Efficient */
.button {}

/* Flat specificity */
.card__title {}

/* Direct child */
.parent > .child {}
\`\`\`

will-change:
\`\`\`css
.animated {
  will-change: transform, opacity;
}
\`\`\``,
    },
  ],
  exercises: [
    { id: "css40-ex1", title: "Optimize selectors", difficulty: 2, description: "Rewrite inefficient selectors.", requirements: ["Simplify nested selectors", "Use class selectors", "Avoid universal selectors"], starterCode: { html: `<div class=\"wrapper\">\n  <div class=\"inner\">\n    <div class=\"content\">\n      <span class=\"text\">Text</span>\n    </div>\n  </div>\n</div>`, css: ".wrapper .inner .content .text { color: #7C3AED; }" }, hints: ["Use a single class instead", "Add class directly to the element"], solution: { html: `<div class=\"wrapper\">\n  <div class=\"inner\">\n    <div class=\"content\">\n      <span class=\"text\">Text</span>\n    </div>\n  </div>\n</div>`, css: ".text { color: #7C3AED; }" }, solutionExplanation: "Simpler selectors are faster and more maintainable." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "css40-q1", type: "mcq", question: "Which selector is fastest?", options: ["[type='text']", ".class", "#id", "*"], correctAnswer: 2, explanation: "ID selectors are the fastest because they match a single unique element.", difficulty: 2 }] },
  cheatSheet: [{ label: "Fastest", value: "#id" }, { label: "Good", value: ".class" }, { label: "Avoid", value: ".parent .child .grandchild" }],
};

export const cssCh41: Chapter = {
  id: "css-ch-41",
  number: 41,
  title: "CSS Debugging",
  subtitle: "DevTools deep dive for CSS issues.",
  difficulty: "Intermediate",
  estimatedMinutes: 45,
  xpReward: 130,
  prerequisites: ["css-ch-05"],
  partLabel: "Part 4: Advanced",
  learningObjectives: [
    "Use Chrome DevTools for CSS debugging.",
    "Inspect computed styles.",
    "Debug specificity conflicts.",
    "Use the Elements panel effectively.",
  ],
  sections: [
    {
      id: "css41-s1",
      title: "DevTools CSS Panel",
      whyItMatters: "DevTools is essential for debugging CSS. Mastering it saves hours of troubleshooting time.",
      content: `Chrome DevTools CSS features:

Elements Panel:
- Inspect element: Right-click > Inspect
- Computed styles: See final calculated values
- Styles panel: See applied rules and specificity
- Box model: Visualize margin, border, padding

Debugging steps:
1. Inspect the element
2. Check computed styles for unexpected values
3. Review styles panel for overriden rules
4. Use color picker for color debugging
5. Toggle properties to see effects

Common issues:
- Specificity conflicts: Check which rule wins
- Inherited styles: Trace back to parent
- Box model issues: Check margin/padding collapse
- Positioning: Check z-index and stacking context`,
    },
  ],
  exercises: [
    { id: "css41-ex1", title: "Debug CSS issue", difficulty: 2, description: "Use DevTools to find why styles aren't applying.", requirements: ["Inspect element", "Check computed styles", "Identify specificity issue"], starterCode: { html: `<div class=\"box box--override\">Box</div>`, css: ".box { background: blue; padding: 1rem; }\n.box--override { background: red; }\n.box { background: green !important; }" }, hints: ["Check which background applies", "Look at specificity", "Find the !important"], solution: { html: `<div class=\"box box--override\">Box</div>`, css: ".box { background: blue; padding: 1rem; }\n.box--override { background: red; }" }, solutionExplanation: "!important overrides specificity. Remove it for maintainable CSS." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "css41-q1", type: "mcq", question: "Which DevTools panel shows final calculated values?", options: ["Sources", "Console", "Computed", "Network"], correctAnswer: 2, explanation: "The Computed panel shows the final calculated values after all CSS rules are applied.", difficulty: 1 }] },
  cheatSheet: [{ label: "Inspect", value: "Right-click > Inspect" }, { label: "Computed", value: "Shows final values" }, { label: "Styles", value: "Shows applied rules" }],
};

export const cssCh42: Chapter = {
  id: "css-ch-42",
  number: 42,
  title: "Print Styles",
  subtitle: "@media print for printable pages.",
  difficulty: "Intermediate",
  estimatedMinutes: 40,
  xpReward: 120,
  prerequisites: ["css-ch-17"],
  partLabel: "Part 4: Advanced",
  learningObjectives: [
    "Use @media print for print styles.",
    "Hide non-essential elements for printing.",
    "Optimize typography for print.",
    "Add print-specific layouts.",
  ],
  sections: [
    {
      id: "css42-s1",
      title: "Print Media Queries",
      whyItMatters: "Print styles ensure your content looks good when users print pages from your site.",
      content: "Use @media print to define print-specific styles:\n\n\`\`\`css\n@media print {\n  /* Hide navigation */\n  nav, .sidebar, .no-print {\n    display: none;\n  }\n  \n  /* Optimize typography */\n  body {\n    font-size: 12pt;\n    line-height: 1.4;\n    color: black;\n  }\n  \n  /* Remove backgrounds */\n  * {\n    background: white !important;\n    color: black !important;\n  }\n  \n  /* Add page breaks */\n  .page-break {\n    page-break-after: always;\n  }\n}\n\`\`\`\n\nPrint-specific tips:\n- Use pt instead of px for typography\n- Remove unnecessary backgrounds and colors\n- Add page breaks between sections\n- Ensure links are readable (add URLs after text)",
    },
  ],
  exercises: [
    { id: "css42-ex1", title: "Create print styles", difficulty: 1, description: "Add print styles that hide navigation.", requirements: ["Use @media print", "Hide non-essential elements", "Optimize for print"], starterCode: { html: `<nav class=\"nav\">Navigation</nav>\n<main class=\"content\">Content</main>`, css: ".nav { background: #7C3AED; padding: 1rem; }\n.content { padding: 2rem; }" }, hints: ["Add @media print { .nav { display: none; } }"], solution: { html: `<nav class=\"nav\">Navigation</nav>\n<main class=\"content\">Content</main>`, css: ".nav { background: #7C3AED; padding: 1rem; }\n.content { padding: 2rem; }\n@media print {\n  .nav { display: none; }\n  body { font-size: 12pt; color: black; }\n}" }, solutionExplanation: "Print styles hide navigation and optimize typography for printing." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "css42-q1", type: "mcq", question: "Which media query is for print styles?", options: ["@media print", "@media paper", "@media hardcopy", "@media document"], correctAnswer: 0, explanation: "@media print defines styles specifically for printed output.", difficulty: 1 }] },
  cheatSheet: [{ label: "Print query", value: "@media print" }, { label: "Hide elements", value: "display: none" }, { label: "Page break", value: "page-break-after: always" }],
};

export const cssCh43: Chapter = {
  id: "css-ch-43",
  number: 43,
  title: "Modern CSS",
  subtitle: "nesting, :has(), container queries.",
  difficulty: "Advanced",
  estimatedMinutes: 50,
  xpReward: 140,
  prerequisites: ["css-ch-18"],
  partLabel: "Part 4: Advanced",
  learningObjectives: [
    "Use CSS nesting for nested selectors.",
    "Use :has() for parent selectors.",
    "Use container queries.",
    "Understand modern CSS features.",
  ],
  sections: [
    {
      id: "css43-s1",
      title: "CSS Nesting",
      whyItMatters: "CSS nesting allows writing nested selectors similar to Sass, reducing repetition and improving organization.",
      content: "CSS nesting (supported in modern browsers):\n\n\`\`\`css\n.card {\n  background: white;\n  \n  &__title {\n    font-size: 1.5rem;\n  }\n  \n  &:hover {\n    transform: translateY(-5px);\n  }\n  \n  @media (min-width: 768px) {\n    padding: 2rem;\n  }\n}\n\`\`\`\n\nNesting with :has():\n\`\`\`css\n.card:has(.badge) {\n  border: 2px solid #7C3AED;\n}\n\`\`\`\n\nThis selects .card when it contains a .badge element.",
    },
  ],
  exercises: [
    { id: "css43-ex1", title: "Use CSS nesting", difficulty: 2, description: "Rewrite nested CSS using nesting syntax.", requirements: ["Use & for nesting", "Nest pseudo-classes", "Nest media queries"], starterCode: { html: `<div class=\"card\">\n  <h2 class=\"card__title\">Title</h2>\n</div>`, css: ".card { background: white; }\n.card__title { font-size: 1.5rem; }\n.card:hover { transform: translateY(-5px); }" }, hints: ["Use & inside .card", "Nest .card__title and :hover"], solution: { html: `<div class=\"card\">\n  <h2 class=\"card__title\">Title</h2>\n</div>`, css: ".card {\n  background: white;\n  &__title {\n    font-size: 1.5rem;\n  }\n  &:hover {\n    transform: translateY(-5px);\n  }\n}" }, solutionExplanation: "Nesting reduces repetition and groups related styles." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "css43-q1", type: "mcq", question: "What does & represent in CSS nesting?", options: ["Parent selector", "Child selector", "Sibling selector", "Attribute selector"], correctAnswer: 0, explanation: "The & symbol represents the parent selector in CSS nesting.", difficulty: 2 }] },
  cheatSheet: [{ label: "Nesting", value: ".parent { &__child {} }" }, { label: ":has()", value: ".parent:has(.child)" }, { label: "Container query", value: "@container (min-width: 400px)" }],
};

export const cssCh44: Chapter = {
  id: "css-ch-44",
  number: 44,
  title: "Grid Advanced",
  subtitle: "Masonry and magazine layouts.",
  difficulty: "Advanced",
  estimatedMinutes: 50,
  xpReward: 140,
  prerequisites: ["css-ch-16"],
  partLabel: "Part 4: Advanced",
  learningObjectives: [
    "Create masonry layouts with CSS Grid.",
    "Build magazine-style layouts.",
    "Use grid-template-areas for complex designs.",
    "Create responsive grid layouts.",
  ],
  sections: [
    {
      id: "css44-s1",
      title: "Masonry Layouts",
      whyItMatters: "Masonry layouts create Pinterest-style grids where items fit together based on content height.",
      content: "CSS Grid masonry (experimental):\n\n\`\`\`css\n.masonry {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: masonry;\n  gap: 1rem;\n}\n\`\`\`\n\nAlternative using column-count:\n\`\`\`css\n.masonry {\n  column-count: 3;\n  column-gap: 1rem;\n}\n\n.masonry-item {\n  break-inside: avoid;\n  margin-bottom: 1rem;\n}\n\`\`\`\n\nMagazine layout with grid-template-areas:\n\`\`\`css\n.magazine {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-template-areas:\n    \"hero sidebar\"\n    \"article1 sidebar\"\n    \"article2 article2\";\n  gap: 1rem;\n}\n\`\`\`",
    },
  ],
  exercises: [
    { id: "css44-ex1", title: "Create magazine layout", difficulty: 2, description: "Build a magazine layout with grid-template-areas.", requirements: ["Use grid-template-areas", "Define at least 3 areas", "Make it responsive"], starterCode: { html: `<div class=\"magazine\">\n  <div class=\"hero\">Hero</div>\n  <div class=\"sidebar\">Sidebar</div>\n  <div class=\"article\">Article</div>\n</div>`, css: ".magazine { display: grid; gap: 1rem; }\n.hero { background: #7C3AED; padding: 2rem; }\n.sidebar { background: #00D4FF; padding: 1rem; }\n.article { background: #10B981; padding: 1rem; }" }, hints: ["Define grid-template-areas with named areas", "Assign areas with grid-area"], solution: { html: `<div class=\"magazine\">\n  <div class=\"hero\">Hero</div>\n  <div class=\"sidebar\">Sidebar</div>\n  <div class=\"article\">Article</div>\n</div>`, css: ".magazine {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-template-areas:\n    \"hero sidebar\"\n    \"article article\";\n  gap: 1rem;\n}\n.hero { grid-area: hero; background: #7C3AED; padding: 2rem; }\n.sidebar { grid-area: sidebar; background: #00D4FF; padding: 1rem; }\n.article { grid-area: article; background: #10B981; padding: 1rem; }" }, solutionExplanation: "grid-template-areas creates named layout regions for complex designs." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "css44-q1", type: "mcq", question: "Which property creates named grid areas?", options: ["grid-template-columns", "grid-template-rows", "grid-template-areas", "grid-gap"], correctAnswer: 2, explanation: "grid-template-areas defines named regions in a CSS Grid layout.", difficulty: 2 }] },
  cheatSheet: [{ label: "Grid areas", value: "grid-template-areas" }, { label: "Assign area", value: "grid-area: name" }, { label: "Columns", value: "column-count" }],
};
