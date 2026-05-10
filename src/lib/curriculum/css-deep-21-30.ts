import type { Chapter } from "./types";

export const cssCh21: Chapter = {
  id: "css-ch-21",
  number: 21,
  title: "Borders, Shadows, Outlines",
  subtitle: "Visual depth and emphasis for your elements.",
  difficulty: "Beginner",
  estimatedMinutes: 40,
  xpReward: 120,
  prerequisites: ["css-ch-08"],
  partLabel: "Part 3: Visual Effects",
  learningObjectives: [
    "Use border properties to create styled borders.",
    "Apply box-shadow for depth and elevation effects.",
    "Understand outline vs border and when to use each.",
    "Create rounded corners with border-radius.",
    "Use text-shadow for text effects.",
  ],
  sections: [
    {
      id: "css21-s1",
      title: "Border Properties",
      whyItMatters: "Borders are the foundation of visual design. They define boundaries, create emphasis, and when combined with shadows, add the illusion of depth.",
      content: `The border property is actually a shorthand for three separate properties: border-width, border-style, and border-color.

Basic border syntax:
\`\`\`css
.box {
  border: 2px solid #00D4FF;
}
\`\`\`

This sets:
- width: 2px
- style: solid
- color: #00D4FF

Border styles include: solid, dashed, dotted, double, groove, ridge, inset, outset, and none.

You can also target individual sides:
\`\`\`css
.box {
  border-top: 3px solid red;
  border-right: 2px dashed blue;
  border-bottom: 3px solid red;
  border-left: 2px dashed blue;
}
\`\`\`

Or use the shorthand with four values (top, right, bottom, left):
\`\`\`css
.box {
  border-width: 3px 2px 3px 2px;
  border-style: solid dashed solid dashed;
  border-color: red blue red blue;
}
\`\`\``,
      codeExamples: [
        {
          id: "css21-s1-ex1",
          title: "Styled card with borders",
          description: "A card with a colored border and rounded corners.",
          code: {
            html: `<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>`,
            css: `.card {
  border: 3px solid #7C3AED;
  border-radius: 12px;
  padding: 2rem;
  max-width: 300px;
  background: #0F1629;
  color: white;
}
.card h3 {
  margin: 0 0 1rem 0;
  color: #00D4FF;
}`,
          },
          explanation: "The border property adds a solid purple border. border-radius rounds the corners. The combination creates a modern card appearance.",
          tryItPrompt: "Change the border to dashed and increase the width to 5px.",
        },
      ],
      callouts: [
        { type: "tip", title: "border-radius", content: "border-radius creates rounded corners. Use a single value for equal corners, or four values for top-left, top-right, bottom-right, bottom-left." },
      ],
    },
    {
      id: "css21-s2",
      title: "Box Shadow",
      whyItMatters: "Shadows create depth and hierarchy. They make elements appear to float above the background, which is essential for modern UI design.",
      content: `The box-shadow property adds one or more shadows to an element. It can create depth, elevation, and visual hierarchy.

Syntax: \`box-shadow: h-offset v-offset blur spread color\`;

- h-offset: horizontal offset (positive = right, negative = left)
- v-offset: vertical offset (positive = down, negative = up)
- blur: blur radius (optional, larger = more blurred)
- spread: spread radius (optional, positive = larger, negative = smaller)
- color: shadow color (optional, defaults to text color)

Simple shadow:
\`\`\`css
.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}
\`\`\`

Multiple shadows (comma-separated):
\`\`\`css
.card {
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.3),
    0 10px 20px rgba(0, 0, 0, 0.2);
}
\`\`\`

Inset shadow (inside the element):
\`\`\`css
.inset-shadow {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
}
\`\`\``,
      codeExamples: [
        {
          id: "css21-s2-ex1",
          title: "Elevated card with shadow",
          description: "A card with a subtle shadow that creates depth.",
          code: {
            html: `<div class="card">
  <h3>Elevated Card</h3>
  <p>This card appears to float above the background.</p>
</div>`,
            css: `.card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  max-width: 300px;
}
.card h3 {
  margin: 0 0 1rem 0;
  color: #1E2A45;
}`,
          },
          explanation: "The box-shadow creates a soft shadow that makes the card appear elevated. The blur radius (25px) makes the shadow soft and natural.",
          tryItPrompt: "Add a second shadow layer for more depth: box-shadow: 0 10px 25px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.1);",
        },
      ],
      callouts: [
        { type: "pro-tip", title: "Performance", content: "box-shadow can impact performance on large elements. Use it sparingly and test on mobile devices." },
      ],
    },
    {
      id: "css21-s3",
      title: "Outline vs Border",
      whyItMatters: "Outline doesn't affect layout flow, while border does. This is critical for accessibility (focus states) without breaking your design.",
      content: `Outline is similar to border but has key differences:

**Border:**
- Takes up space in the layout
- Affects element dimensions
- Can have different styles on each side
- Part of the box model

**Outline:**
- Does NOT take up space (drawn outside the border)
- Does NOT affect layout
- Must be the same on all sides
- Used primarily for focus states (accessibility)

Outline syntax:
\`\`\`css
button:focus {
  outline: 3px solid #00D4FF;
  outline-offset: 2px;
}
\`\`\`

outline-offset adds space between the outline and the element.

Never remove outline without replacement:
\`\`\`css
/* BAD - removes focus indicator */
button:focus {
  outline: none;
}

/* GOOD - replaces with custom focus style */
button:focus {
  outline: none;
  box-shadow: 0 0 0 3px #00D4FF;
}
\`\`\``,
      codeExamples: [
        {
          id: "css21-s3-ex1",
          title: "Focus states with outline",
          description: "Buttons with visible focus indicators for accessibility.",
          code: {
            html: `<button class="btn">Click Me</button>
<button class="btn custom-focus">Custom Focus</button>`,
            css: `.btn {
  padding: 12px 24px;
  border: 2px solid #7C3AED;
  background: white;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin: 10px;
}
.btn:focus {
  outline: 3px solid #00D4FF;
  outline-offset: 2px;
}
.custom-focus:focus {
  outline: none;
  box-shadow: 0 0 0 3px #00D4FF;
}`,
          },
          explanation: "The first button uses outline for the focus state. The second uses box-shadow as a custom focus indicator. Both maintain accessibility.",
          tryItPrompt: "Tab through the buttons to see the focus states. Try changing the outline-offset to see the spacing effect.",
        },
      ],
      callouts: [
        { type: "warning", title: "Never remove focus", content: "Always provide a visible focus indicator for keyboard navigation. Removing outline without replacement makes your site inaccessible to keyboard users." },
      ],
    },
  ],
  exercises: [
    {
      id: "css21-ex1",
      title: "Create a styled card",
      difficulty: 1,
      description: "Create a card with a border, rounded corners, and a shadow.",
      requirements: ["Add a colored border", "Add rounded corners", "Add a box-shadow for depth"],
      starterCode: { html: `<div class="card">\n  <h3>My Card</h3>\n  <p>Card content</p>\n</div>`, css: ".card {\n  padding: 2rem;\n  max-width: 300px;\n  /* your styles here */\n}" },
      hints: ["Use border: 2px solid color", "Use border-radius: 12px", "Use box-shadow: 0 4px 6px rgba(0,0,0,0.1)"],
      solution: { html: `<div class="card">\n  <h3>My Card</h3>\n  <p>Card content</p>\n</div>`, css: ".card {\n  padding: 2rem;\n  max-width: 300px;\n  border: 2px solid #7C3AED;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}" },
      solutionExplanation: "The border adds a colored edge, border-radius rounds corners, and box-shadow creates depth.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "css21-q1",
        type: "mcq",
        question: "What is the main difference between border and outline?",
        options: ["Outline is thicker", "Outline doesn't affect layout", "Border is only for text", "They are identical"],
        correctAnswer: 1,
        explanation: "Outline is drawn outside the element and doesn't take up space in the layout, while border affects the element's dimensions.",
        difficulty: 1,
      },
      {
        id: "css21-q2",
        type: "mcq",
        question: "What does box-shadow: 0 4px 6px rgba(0,0,0,0.3) do?",
        options: ["Creates a border", "Adds a shadow with horizontal offset 0, vertical 4px, blur 6px", "Changes text color", "Adds a gradient"],
        correctAnswer: 1,
        explanation: "The first value is horizontal offset (0), second is vertical offset (4px), third is blur radius (6px), and fourth is color.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Border shorthand", value: "border: 2px solid color" },
    { label: "Box shadow", value: "box-shadow: 0 4px 6px rgba(0,0,0,0.3)" },
    { label: "Border radius", value: "border-radius: 12px" },
    { label: "Outline focus", value: "outline: 3px solid color; outline-offset: 2px" },
  ],
};

export const cssCh22: Chapter = {
  id: "css-ch-22",
  number: 22,
  title: "Gradients",
  subtitle: "Linear, radial, and conic gradients for rich backgrounds.",
  difficulty: "Intermediate",
  estimatedMinutes: 45,
  xpReward: 130,
  prerequisites: ["css-ch-08"],
  partLabel: "Part 3: Visual Effects",
  learningObjectives: [
    "Create linear gradients with multiple color stops.",
    "Create radial gradients for circular effects.",
    "Use conic gradients for pie-chart style effects.",
    "Understand gradient direction and angle syntax.",
    "Apply gradients to backgrounds, text, and borders.",
  ],
  sections: [
    {
      id: "css22-s1",
      title: "Linear Gradients",
      whyItMatters: "Linear gradients are the most common gradient type. They create smooth color transitions in a straight line, perfect for buttons, backgrounds, and modern UI elements.",
      content: `A linear gradient transitions colors along a straight line. It's created with the linear-gradient() function.

Basic syntax:
\`\`\`css
background: linear-gradient(direction, color1, color2, ...);
\`\`\`

Direction can be:
- Keywords: to top, to bottom, to right, to left, to top right, etc.
- Degrees: 45deg, 90deg, 180deg, etc.
- Default: to bottom (180deg)

Examples:
\`\`\`css
/* Simple two-color gradient */
.gradient-1 {
  background: linear-gradient(to right, #00D4FF, #7C3AED);
}

/* With angle */
.gradient-2 {
  background: linear-gradient(45deg, #00D4FF, #7C3AED);
}

/* Multiple color stops */
.gradient-3 {
  background: linear-gradient(to bottom, #00D4FF, #7C3AED, #FF5733);
}

/* With color stop positions */
.gradient-4 {
  background: linear-gradient(to right, #00D4FF 0%, #7C3AED 50%, #FF5733 100%);
}
\`\`\`

Color stops define where each color starts and ends. You can use percentages or pixel values.`,
      codeExamples: [
        {
          id: "css22-s1-ex1",
          title: "Gradient button",
          description: "A button with a linear gradient background.",
          code: {
            html: `<button class="gradient-btn">Gradient Button</button>`,
            css: `.gradient-btn {
  padding: 12px 32px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background: linear-gradient(135deg, #00D4FF, #7C3AED);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}
.gradient-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.4);
}`,
          },
          explanation: "The linear-gradient creates a smooth transition from cyan to purple at a 135-degree angle. The hover effect adds elevation.",
          tryItPrompt: "Change the angle to 45deg and see how the gradient direction changes.",
        },
      ],
      callouts: [
        { type: "tip", title: "Gradient direction", content: "0deg points up, 90deg points right, 180deg points down, 270deg points left. 45deg goes diagonally bottom-left to top-right." },
      ],
    },
    {
      id: "css22-s2",
      title: "Radial Gradients",
      whyItMatters: "Radial gradients create circular color transitions. They're perfect for spotlight effects, sun glows, and creating depth.",
      content: `A radial gradient transitions colors from a center point outward. It's created with the radial-gradient() function.

Basic syntax:
\`\`\`css
background: radial-gradient(shape size at position, color1, color2, ...);
\`\`\`

Examples:
\`\`\`css
/* Simple circle from center */
.radial-1 {
  background: radial-gradient(circle, #00D4FF, #7C3AED);
}

/* Ellipse shape */
.radial-2 {
  background: radial-gradient(ellipse, #00D4FF, #7C3AED);
}

/* Positioned gradient */
.radial-3 {
  background: radial-gradient(circle at top right, #00D4FF, #7C3AED);
}

/* With size keywords */
.radial-4 {
  background: radial-gradient(circle closest-side, #00D4FF, #7C3AED);
}
\`\`\`

Size keywords:
- closest-side: gradient ends at the closest side
- closest-corner: gradient ends at the closest corner
- farthest-side: gradient ends at the farthest side
- farthest-corner: gradient ends at the farthest corner (default)`,
      codeExamples: [
        {
          id: "css22-s2-ex1",
          title: "Radial gradient background",
          description: "A background with a radial gradient spotlight effect.",
          code: {
            html: `<div class="radial-bg">
  <h2>Spotlight Effect</h2>
  <p>Radial gradient creates depth and focus.</p>
</div>`,
            css: `.radial-bg {
  background: radial-gradient(circle at center, #1E2A45 0%, #0F1629 100%);
  padding: 3rem;
  border-radius: 16px;
  color: white;
  max-width: 400px;
}
.radial-bg h2 {
  margin: 0 0 1rem 0;
  color: #00D4FF;
}`,
          },
          explanation: "The radial-gradient creates a spotlight effect from the center, transitioning from dark blue to nearly black.",
          tryItPrompt: "Change the position to 'top left' to see how the gradient moves.",
        },
      ],
      callouts: [
        { type: "pro-tip", title: "Performance", content: "Complex gradients can impact rendering performance. Use them judiciously and test on mobile devices." },
      ],
    },
    {
      id: "css22-s3",
      title: "Conic Gradients",
      whyItMatters: "Conic gradients rotate around a center point, creating pie-chart style color transitions. They're newer but increasingly popular for creative effects.",
      content: `A conic gradient transitions colors around a center point, like a color wheel. It's created with the conic-gradient() function.

Basic syntax:
\`\`\`css
background: conic-gradient(from angle at position, color1, color2, ...);
\`\`\`

Examples:
\`\`\`css
/* Simple conic gradient */
.conic-1 {
  background: conic-gradient(#00D4FF, #7C3AED, #FF5733, #00D4FF);
}

/* With starting angle */
.conic-2 {
  background: conic-gradient(from 45deg, #00D4FF, #7C3AED, #FF5733, #00D4FF);
}

/* Positioned center */
.conic-3 {
  background: conic-gradient(at top left, #00D4FF, #7C3AED, #FF5733, #00D4FF);
}

/* Pie chart effect */
.conic-4 {
  background: conic-gradient(
    #00D4FF 0% 25%,
    #7C3AED 25% 50%,
    #FF5733 50% 75%,
    #10B981 75% 100%
  );
}
\`\`\`

Conic gradients are perfect for:
- Pie charts
- Loading spinners
- Creative background patterns
- Color wheel effects`,
      codeExamples: [
        {
          id: "css22-s3-ex1",
          title: "Conic gradient spinner",
          description: "A loading spinner using conic gradient.",
          code: {
            html: `<div class="spinner"></div>`,
            css: `.spinner {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #00D4FF, #7C3AED, transparent);
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}`,
          },
          explanation: "The conic-gradient creates a partial color wheel. The animation rotates it continuously to create a spinner effect.",
          tryItPrompt: "Change the from angle to 45deg to rotate the starting position of the gradient.",
        },
      ],
      callouts: [
        { type: "info", title: "Conic gradients", content: "Conic gradients are supported in all modern browsers (Chrome 69+, Firefox 83+, Safari 12.1+). No fallback needed for most projects." },
      ],
    },
  ],
  exercises: [
    {
      id: "css22-ex1",
      title: "Create a gradient button",
      difficulty: 1,
      description: "Create a button with a linear gradient background.",
      requirements: ["Use linear-gradient", "Include at least 2 colors", "Add hover effect"],
      starterCode: { html: `<button class="gradient-btn">Click Me</button>`, css: ".gradient-btn {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  color: white;\n  cursor: pointer;\n  /* your gradient here */\n}" },
      hints: ["Use background: linear-gradient(direction, color1, color2)", "Try linear-gradient(135deg, #00D4FF, #7C3AED)"],
      solution: { html: `<button class="gradient-btn">Click Me</button>`, css: ".gradient-btn {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  color: white;\n  cursor: pointer;\n  background: linear-gradient(135deg, #00D4FF, #7C3AED);\n}\n.gradient-btn:hover {\n  opacity: 0.9;\n}" },
      solutionExplanation: "The linear-gradient creates a smooth color transition. The hover effect provides visual feedback.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "css22-q1",
        type: "mcq",
        question: "What does linear-gradient(to right, red, blue) do?",
        options: ["Creates a vertical gradient", "Creates a horizontal gradient from left to right", "Creates a radial gradient", "Creates a solid color"],
        correctAnswer: 1,
        explanation: "to right specifies the direction, creating a horizontal gradient that transitions from red on the left to blue on the right.",
        difficulty: 1,
      },
      {
        id: "css22-q2",
        type: "mcq",
        question: "Which gradient type rotates around a center point?",
        options: ["Linear gradient", "Radial gradient", "Conic gradient", "Solid gradient"],
        correctAnswer: 2,
        explanation: "Conic gradients rotate around a center point like a color wheel, creating pie-chart style transitions.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Linear gradient", value: "linear-gradient(direction, color1, color2)" },
    { label: "Radial gradient", value: "radial-gradient(circle, color1, color2)" },
    { label: "Conic gradient", value: "conic-gradient(from angle, color1, color2)" },
    { label: "Color stops", value: "color 0%, color 50%, color 100%" },
  ],
};

export const cssCh23: Chapter = {
  id: "css-ch-23",
  number: 23,
  title: "Transforms",
  subtitle: "translate, rotate, scale, skew for 2D transformations.",
  difficulty: "Intermediate",
  estimatedMinutes: 45,
  xpReward: 130,
  prerequisites: ["css-ch-08"],
  partLabel: "Part 3: Visual Effects",
  learningObjectives: [
    "Use translate to move elements in 2D space.",
    "Use rotate to spin elements.",
    "Use scale to resize elements.",
    "Use skew to distort elements.",
    "Combine multiple transforms.",
    "Understand transform origin.",
  ],
  sections: [
    {
      id: "css23-s1",
      title: "Translate",
      whyItMatters: "Translate moves elements without affecting document flow. This is the foundation of smooth animations and performance-optimized layouts.",
      content: `The translate() function moves an element from its current position. It accepts x and y values.

Syntax:
\`\`\`css
transform: translate(x, y);
transform: translateX(x);
transform: translateY(y);
\`\`\`

Examples:
\`\`\`css
/* Move 50px right, 20px down */
.move-1 {
  transform: translate(50px, 20px);
}

/* Move 100px left */
.move-2 {
  transform: translateX(-100px);
}

/* Move using percentages */
.move-3 {
  transform: translate(50%, 50%);
}
\`\`\`

Percentages are relative to the element's own size, not the parent. This makes translate perfect for centering:
\`\`\`css
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
\`\`\`

Translate doesn't affect other elements — it's purely visual. This makes it performant for animations.`,
      codeExamples: [
        {
          id: "css23-s1-ex1",
          title: "Hover translation",
          description: "A card that moves on hover.",
          code: {
            html: `<div class="card">
  <h3>Hover Me</h3>
  <p>I'll move when you hover.</p>
</div>`,
            css: `.card {
  background: linear-gradient(135deg, #00D4FF, #7C3AED);
  padding: 2rem;
  border-radius: 12px;
  color: white;
  max-width: 250px;
  transition: transform 0.3s ease;
  cursor: pointer;
}
.card:hover {
  transform: translate(10px, -10px);
}`,
          },
          explanation: "On hover, the card moves 10px right and 10px up. The transition makes it smooth.",
          tryItPrompt: "Change the translate values to make the card move in a different direction.",
        },
      ],
      callouts: [
        { type: "tip", title: "GPU acceleration", content: "Translate uses GPU acceleration, making it performant for animations. Always prefer translate over top/left for animations." },
      ],
    },
    {
      id: "css23-s2",
      title: "Rotate and Scale",
      whyItMatters: "Rotate and scale are essential for interactive elements, icons, and creating engaging micro-interactions.",
      content: `Rotate spins an element around its transform origin. Scale resizes it.

Rotate syntax:
\`\`\`css
transform: rotate(angle);
\`\`\`

Scale syntax:
\`\`\`css
transform: scale(x, y);
transform: scaleX(x);
transform: scaleY(y);
\`\`\`

Examples:
\`\`\`css
/* Rotate 45 degrees clockwise */
.rotate-1 {
  transform: rotate(45deg);
}

/* Rotate 90 degrees counter-clockwise */
.rotate-2 {
  transform: rotate(-90deg);
}

/* Scale to 1.5x size */
.scale-1 {
  transform: scale(1.5);
}

/* Scale width only */
.scale-2 {
  transform: scaleX(2);
}

/* Scale down to 0.8 */
.scale-3 {
  transform: scale(0.8);
}
\`\`\`

You can combine transforms:
\`\`\`css
.combo {
  transform: rotate(45deg) scale(1.2) translate(10px);
}
\`\`\`

The order matters! Transforms are applied from right to left in the written order.`,
      codeExamples: [
        {
          id: "css23-s2-ex1",
          title: "Interactive icon",
          description: "An icon that rotates and scales on hover.",
          code: {
            html: `<div class="icon">★</div>`,
            css: `.icon {
  font-size: 48px;
  color: #FFD700;
  cursor: pointer;
  transition: transform 0.3s ease;
  display: inline-block;
}
.icon:hover {
  transform: rotate(45deg) scale(1.2);
}`,
          },
          explanation: "On hover, the icon rotates 45 degrees and scales to 1.2x its size. The transition makes it smooth.",
          tryItPrompt: "Try changing the rotation to -45deg to rotate in the opposite direction.",
        },
      ],
      callouts: [
        { type: "tip", title: "Transform origin", content: "By default, transforms happen from the center. Change it with transform-origin: top left; or transform-origin: 50% 50%;" },
      ],
    },
    {
      id: "css23-s3",
      title: "Skew and Transform Origin",
      whyItMatters: "Skew creates perspective distortion effects. Transform origin controls where transformations happen from.",
      content: `Skew distorts an element along the x or y axis.

Syntax:
\`\`\`css
transform: skew(x-angle, y-angle);
transform: skewX(angle);
transform: skewY(angle);
\`\`\`

Examples:
\`\`\`css
/* Skew 20 degrees on x-axis */
.skew-1 {
  transform: skewX(20deg);
}

/* Skew both axes */
.skew-2 {
  transform: skew(10deg, 5deg);
}
\`\`\`

Transform origin controls the pivot point:
\`\`\`css
/* Rotate from top-left corner */
.origin-1 {
  transform-origin: top left;
  transform: rotate(45deg);
}

/* Rotate from specific coordinates */
.origin-2 {
  transform-origin: 20px 30px;
  transform: rotate(45deg);
}

/* Rotate from bottom-right */
.origin-3 {
  transform-origin: bottom right;
  transform: rotate(45deg);
}
\`\`\`

Transform origin accepts:
- Keywords: top, bottom, left, right, center
- Percentages: 50% 50% (default center)
- Lengths: 20px 30px`,
      codeExamples: [
        {
          id: "css23-s3-ex1",
          title: "3D card effect with skew",
          description: "A card with a 3D perspective effect using skew.",
          code: {
            html: `<div class="card">
  <h3>3D Card</h3>
  <p>Hover to see the effect.</p>
</div>`,
            css: `.card {
  background: linear-gradient(135deg, #7C3AED, #00D4FF);
  padding: 2rem;
  border-radius: 12px;
  color: white;
  max-width: 250px;
  transition: transform 0.3s ease;
  cursor: pointer;
}
.card:hover {
  transform: perspective(500px) rotateX(10deg) rotateY(-10deg);
}`,
          },
          explanation: "The perspective property creates 3D depth. rotateX and rotateY create the 3D tilt effect.",
          tryItPrompt: "Change the rotation values to adjust the tilt angle.",
        },
      ],
      callouts: [
        { type: "pro-tip", title: "3D transforms", content: "Add perspective: 500px; to the parent to create 3D space. Then use rotateX, rotateY, and translateZ for true 3D effects." },
      ],
    },
  ],
  exercises: [
    {
      id: "css23-ex1",
      title: "Create a hover effect",
      difficulty: 1,
      description: "Create a button that scales up on hover.",
      requirements: ["Use transform: scale", "Add transition", "Scale to at least 1.1x"],
      starterCode: { html: `<button class="btn">Hover Me</button>`, css: ".btn {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  background: #7C3AED;\n  color: white;\n  cursor: pointer;\n  /* your transform here */\n}" },
      hints: ["Use transform: scale(1.1) on :hover", "Add transition: transform 0.2s ease"],
      solution: { html: `<button class="btn">Hover Me</button>`, css: ".btn {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  background: #7C3AED;\n  color: white;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.btn:hover {\n  transform: scale(1.1);\n}" },
      solutionExplanation: "The scale transform increases the button size on hover. The transition makes it smooth.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "css23-q1",
        type: "mcq",
        question: "What does transform: translate(50px, 20px) do?",
        options: ["Rotates the element", "Moves element 50px right and 20px down", "Scales the element", "Changes the color"],
        correctAnswer: 1,
        explanation: "translate(x, y) moves the element x pixels horizontally and y pixels vertically from its current position.",
        difficulty: 1,
      },
      {
        id: "css23-q2",
        type: "mcq",
        question: "Which property controls where a transform originates from?",
        options: ["transform-position", "transform-origin", "transform-pivot", "transform-center"],
        correctAnswer: 1,
        explanation: "transform-origin specifies the point around which a transform is applied. Default is center (50% 50%).",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Translate", value: "transform: translate(x, y)" },
    { label: "Rotate", value: "transform: rotate(deg)" },
    { label: "Scale", value: "transform: scale(x, y)" },
    { label: "Skew", value: "transform: skew(x, y)" },
    { label: "Transform origin", value: "transform-origin: center" },
  ],
};

export const cssCh24: Chapter = {
  id: "css-ch-24",
  number: 24,
  title: "Transitions",
  subtitle: "Smooth state changes for polished interactions.",
  difficulty: "Intermediate",
  estimatedMinutes: 40,
  xpReward: 120,
  prerequisites: ["css-ch-23"],
  partLabel: "Part 3: Visual Effects",
  learningObjectives: [
    "Use transition-property to specify which properties animate.",
    "Use transition-duration to control animation length.",
    "Use transition-timing-function for easing curves.",
    "Use transition-delay to add delays.",
    "Use the shorthand transition property.",
    "Understand which properties are transitionable.",
  ],
  sections: [
    {
      id: "css24-s1",
      title: "Transition Basics",
      whyItMatters: "Transitions make your UI feel polished and responsive. Instead of abrupt changes, elements smoothly animate from one state to another.",
      content: `The transition property creates smooth animations when a CSS property changes. It's perfect for hover states, focus states, and any state change.

Basic syntax:
\`\`\`css
transition: property duration timing-function delay;
\`\`\`

Or use individual properties:
\`\`\`css
transition-property: background-color;
transition-duration: 0.3s;
transition-timing-function: ease;
transition-delay: 0s;
\`\`\`

Simple example:
\`\`\`css
.button {
  background: #00D4FF;
  transition: background 0.3s ease;
}
.button:hover {
  background: #7C3AED;
}
\`\`\`

When you hover, the background smoothly transitions from cyan to purple over 0.3 seconds.

Multiple properties:
\`\`\`css
.button {
  background: #00D4FF;
  transform: scale(1);
  transition: background 0.3s ease, transform 0.3s ease;
}
.button:hover {
  background: #7C3AED;
  transform: scale(1.1);
}
\`\`\``,
      codeExamples: [
        {
          id: "css24-s1-ex1",
          title: "Button with transitions",
          description: "A button with smooth color and scale transitions.",
          code: {
            html: `<button class="btn">Hover Me</button>`,
            css: `.btn {
  padding: 12px 32px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  background: #00D4FF;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}
.btn:hover {
  background: #7C3AED;
  transform: scale(1.05);
}`,
          },
          explanation: "The background transitions over 0.3s, and the scale transitions over 0.2s. Both use ease timing.",
          tryItPrompt: "Change the transition duration to 0.5s to make it slower.",
        },
      ],
      callouts: [
        { type: "tip", title: "Transition all", content: "Use transition: all 0.3s ease to transition all properties. But be careful — this can impact performance." },
      ],
    },
    {
      id: "css24-s2",
      title: "Timing Functions",
      whyItMatters: "Timing functions control the feel of your animation. The right easing curve makes animations feel natural and responsive.",
      content: `The timing function controls the acceleration curve of the transition.

Common timing functions:
\`\`\`css
/* Linear — constant speed */
transition-timing-function: linear;

/* Ease — starts slow, speeds up, slows down (default) */
transition-timing-function: ease;

/* Ease-in — starts slow, speeds up */
transition-timing-function: ease-in;

/* Ease-out — starts fast, slows down */
transition-timing-function: ease-out;

/* Ease-in-out — starts slow, speeds up, slows down */
transition-timing-function: ease-in-out;

/* Cubic bezier — custom curve */
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
\`\`\`

The default \`ease\` is good for most cases. \`ease-out\` is great for entering elements (they start fast and settle). \`ease-in\` is good for exiting elements.

Cubic bezier gives you full control. The values represent control points on a bezier curve:
- First two: control point 1 (x, y)
- Last two: control point 2 (x, y)

Common custom curves:
\`\`\`css
/* Material design standard */
cubic-bezier(0.4, 0, 0.2, 1);

/* Bouncy effect */
cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* Overshoot effect */
cubic-bezier(0.175, 0.885, 0.32, 1.275);
\`\`\``,
      codeExamples: [
        {
          id: "css24-s2-ex1",
          title: "Comparing timing functions",
          description: "Buttons with different timing functions.",
          code: {
            html: `<button class="btn linear">Linear</button>
<button class="btn ease">Ease</button>
<button class="btn ease-out">Ease-out</button>
<button class="btn bounce">Bounce</button>`,
            css: `.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  background: #00D4FF;
  color: white;
  cursor: pointer;
  margin: 10px;
  transition: transform 0.5s;
}
.linear { transition-timing-function: linear; }
.ease { transition-timing-function: ease; }
.ease-out { transition-timing-function: ease-out; }
.bounce { transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }
.btn:hover { transform: scale(1.2); }`,
          },
          explanation: "Each button uses a different timing function. Hover over them to feel the difference in animation curves.",
          tryItPrompt: "Try changing the bounce curve to cubic-bezier(0.175, 0.885, 0.32, 1.275) for an overshoot effect.",
        },
      ],
      callouts: [
        { type: "pro-tip", title: "Online tools", content: "Use cubic-bezier.com to visualize and create custom timing functions interactively." },
      ],
    },
    {
      id: "css24-s3",
      title: "Transitionable Properties",
      whyItMatters: "Not all CSS properties can be transitioned. Understanding which properties work ensures your animations actually work.",
      content: `Only certain CSS properties can be animated smoothly. These are properties that have intermediate values.

**Commonly transitionable properties:**
- Colors: color, background-color, border-color
- Dimensions: width, height, padding, margin
- Position: top, left, right, bottom
- Transform: translate, rotate, scale, skew
- Opacity: opacity
- Box shadow: box-shadow
- Border radius: border-radius

**NOT transitionable:**
- display: none/block (use opacity + visibility instead)
- height: auto (use max-height or grid-template-rows instead)
- background-image (can't transition between images)

**Best practices:**
1. Prefer transform and opacity for performance (GPU accelerated)
2. Avoid animating layout properties (width, height, margin, padding)
3. Use will-change property sparingly for complex animations
4. Test on mobile for performance

Example of animating display-like behavior:
\`\`\`css
/* Instead of display: none */
.hidden {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s;
}
.visible {
  opacity: 1;
  visibility: visible;
}
\`\`\``,
      codeExamples: [
        {
          id: "css24-s3-ex1",
          title: "Fade in/out animation",
          description: "An element that fades in and out smoothly.",
          code: {
            html: `<button id="toggle">Toggle</button>
<div id="box" class="box">I fade in and out</div>`,
            css: `.box {
  padding: 2rem;
  background: #7C3AED;
  color: white;
  border-radius: 8px;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s ease, visibility 0.3s;
}
.box.hidden {
  opacity: 0;
  visibility: hidden;
}
#toggle {
  margin-bottom: 1rem;
}`,
          },
          explanation: "We use opacity and visibility instead of display. This allows smooth transitions. JavaScript toggles the class.",
          tryItPrompt: "Click the toggle button to see the fade effect.",
        },
      ],
      callouts: [
        { type: "tip", title: "GPU acceleration", content: "Transform and opacity are GPU accelerated, making them the most performant properties to animate. Always prefer them over layout properties." },
      ],
    },
  ],
  exercises: [
    {
      id: "css24-ex1",
      title: "Create a hover transition",
      difficulty: 1,
      description: "Create a card with smooth transitions on hover.",
      requirements: ["Add transition property", "Change at least 2 properties on hover", "Use appropriate timing function"],
      starterCode: { html: `<div class="card">\n  <h3>Hover Card</h3>\n  <p>Content here</p>\n</div>`, css: ".card {\n  background: #00D4FF;\n  padding: 2rem;\n  border-radius: 8px;\n  color: white;\n  max-width: 250px;\n  /* your transition here */\n}\n.card:hover {\n  background: #7C3AED;\n  transform: scale(1.05);\n}" },
      hints: ["Use transition: all 0.3s ease", "Or specify individual properties"],
      solution: { html: `<div class="card">\n  <h3>Hover Card</h3>\n  <p>Content here</p>\n</div>`, css: ".card {\n  background: #00D4FF;\n  padding: 2rem;\n  border-radius: 8px;\n  color: white;\n  max-width: 250px;\n  transition: background 0.3s ease, transform 0.3s ease;\n}\n.card:hover {\n  background: #7C3AED;\n  transform: scale(1.05);\n}" },
      solutionExplanation: "The transition property smoothly animates both background color and transform on hover.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "css24-q1",
        type: "mcq",
        question: "Which property cannot be transitioned?",
        options: ["opacity", "transform", "display", "background-color"],
        correctAnswer: 2,
        explanation: "display cannot be transitioned because it has no intermediate values. Use opacity + visibility instead for fade effects.",
        difficulty: 2,
      },
      {
        id: "css24-q2",
        type: "mcq",
        question: "What is the default transition-timing-function?",
        options: ["linear", "ease", "ease-in", "ease-out"],
        correctAnswer: 1,
        explanation: "The default timing function is 'ease', which starts slow, speeds up, then slows down at the end.",
        difficulty: 1,
      },
    ],
  },
  cheatSheet: [
    { label: "Transition shorthand", value: "transition: property duration timing-function delay" },
    { label: "Timing functions", value: "ease, ease-in, ease-out, ease-in-out, linear" },
    { label: "Custom timing", value: "cubic-bezier(x1, y1, x2, y2)" },
    { label: "Best for performance", value: "transform and opacity" },
  ],
};

export const cssCh25: Chapter = {
  id: "css-ch-25",
  number: 25,
  title: "Animations — Part 1",
  subtitle: "@keyframes basics for complex animations.",
  difficulty: "Intermediate",
  estimatedMinutes: 50,
  xpReward: 140,
  prerequisites: ["css-ch-24"],
  partLabel: "Part 3: Visual Effects",
  learningObjectives: [
    "Define @keyframes for custom animations.",
    "Use animation-name, animation-duration, and other animation properties.",
    "Create keyframe percentages for multi-step animations.",
    "Control animation iteration and direction.",
    "Use animation shorthand.",
  ],
  sections: [
    {
      id: "css25-s1",
      title: "@keyframes Basics",
      whyItMatters: "While transitions handle simple state changes, @keyframes let you create complex, multi-step animations with full control over every stage.",
      content: `The @keyframes rule defines a multi-stage animation. You specify styles at different percentages (0% to 100%).

Basic syntax:
\`\`\`css
@keyframes animation-name {
  0% {
    /* starting styles */
  }
  50% {
    /* halfway styles */
  }
  100% {
    /* ending styles */
  }
}
\`\`\`

You can also use \`from\` and \`to\` keywords:
\`\`\`css
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
\`\`\`

Apply the animation:
\`\`\`css
.element {
  animation-name: fade-in;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
}
\`\`\``,
      codeExamples: [
        {
          id: "css25-s1-ex1",
          title: "Fade in animation",
          description: "An element that fades in when the page loads.",
          code: {
            html: `<div class="fade-in">I fade in!</div>`,
            css: `@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.fade-in {
  animation: fade-in 1s ease forwards;
  padding: 2rem;
  background: #7C3AED;
  color: white;
  border-radius: 8px;
  max-width: 250px;
}`,
          },
          explanation: "The animation fades the element in while moving it up 20px. forwards keeps the final state.",
          tryItPrompt: "Change the animation duration to 2s to make it slower.",
        },
      ],
      callouts: [
        { type: "tip", title: "Animation shorthand", content: "animation: name duration timing-function delay iteration-count direction fill-mode" },
      ],
    },
    {
      id: "css25-s2",
      title: "Keyframe Percentages",
      whyItMatters: "Multiple keyframe stages let you create complex animations with distinct phases.",
      content: `You can define as many keyframe stages as you want using percentages:

\`\`\`css
@keyframes complex-animation {
  0% {
    transform: scale(1);
    background: #00D4FF;
  }
  25% {
    transform: scale(1.1);
    background: #7C3AED;
  }
  50% {
    transform: scale(1.2);
    background: #FF5733;
  }
  75% {
    transform: scale(1.1);
    background: #10B981;
  }
  100% {
    transform: scale(1);
    background: #00D4FF;
  }
}
\`\`\`

This creates a pulsing effect with color changes.

You don't need to define every percentage. The browser interpolates between the ones you specify:

\`\`\`css
@keyframes slide-in {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
\`\`\`

This automatically creates a smooth slide from left to right.`,
      codeExamples: [
        {
          id: "css25-s2-ex1",
          title: "Pulsing animation",
          description: "An element that pulses through multiple stages.",
          code: {
            html: `<div class="pulse">Pulse!</div>`,
            css: `@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
}
.pulse {
  animation: pulse 2s ease-in-out infinite;
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #00D4FF, #7C3AED);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}`,
          },
          explanation: "The animation scales the element up and down while changing opacity. infinite makes it repeat forever.",
          tryItPrompt: "Change the duration to 0.5s to make it pulse faster.",
        },
      ],
      callouts: [
        { type: "tip", title: "Combining percentages", content: "You can combine 0% and 100% with the same styles: \`0%, 100% { transform: scale(1); }\` This creates a return-to-start effect." },
      ],
    },
    {
      id: "css25-s3",
      title: "Animation Properties",
      whyItMatters: "Understanding all animation properties gives you full control over how animations behave.",
      content: `**Animation properties:**

\`\`\`css
animation-name: my-animation;
/* The @keyframes name to use */

animation-duration: 2s;
/* How long the animation takes */

animation-timing-function: ease;
/* The easing curve (same as transition) */

animation-delay: 1s;
/* Delay before animation starts */

animation-iteration-count: 3;
/* How many times to repeat (or infinite) */

animation-direction: alternate;
/* normal, reverse, alternate, alternate-reverse */

animation-fill-mode: forwards;
/* forwards, backwards, both, or none */

animation-play-state: paused;
/* running or paused */
\`\`\`

**Shorthand:**
\`\`\`css
animation: name duration timing-function delay iteration-count direction fill-mode;
\`\`\`

**Animation direction:**
- normal: 0% → 100% (default)
- reverse: 100% → 0%
- alternate: 0% → 100% → 0% (for even iterations)
- alternate-reverse: 100% → 0% → 100% (for even iterations)

**Animation fill-mode:**
- none: Reverts to starting style after animation
- forwards: Keeps the final keyframe state
- backwards: Applies starting keyframe during delay
- both: Applies both forwards and backwards`,
      codeExamples: [
        {
          id: "css25-s3-ex1",
          title: "Bouncing ball",
          description: "A ball that bounces using animation-direction.",
          code: {
            html: `<div class="ball"></div>`,
            css: `@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-100px);
  }
}
.ball {
  width: 50px;
  height: 50px;
  background: #FF5733;
  border-radius: 50%;
  animation: bounce 1s ease-in-out infinite alternate;
}`,
          },
          explanation: "alternate makes the animation go down then up continuously, creating a bouncing effect.",
          tryItPrompt: "Remove alternate to see it only bounce once per iteration.",
        },
      ],
      callouts: [
        { type: "pro-tip", title: "Performance", content: "Prefer animating transform and opacity for best performance. Avoid animating layout properties like width, height, margin, padding." },
      ],
    },
  ],
  exercises: [
    {
      id: "css25-ex1",
      title: "Create a keyframe animation",
      difficulty: 2,
      description: "Create an animation that rotates and scales an element.",
      requirements: ["Define @keyframes", "Use at least 3 keyframe stages", "Apply animation to an element"],
      starterCode: { html: `<div class="box">Animate Me</div>`, css: ".box {\n  width: 100px;\n  height: 100px;\n  background: #7C3AED;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  /* your animation here */\n}\n/* define your @keyframes here */" },
      hints: ["Create @keyframes with 0%, 50%, 100%", "Use transform: rotate and scale", "Apply with animation property"],
      solution: { html: `<div class="box">Animate Me</div>`, css: ".box {\n  width: 100px;\n  height: 100px;\n  background: #7C3AED;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  animation: rotate-scale 2s ease-in-out infinite;\n}\n@keyframes rotate-scale {\n  0% {\n    transform: rotate(0deg) scale(1);\n  }\n  50% {\n    transform: rotate(180deg) scale(1.2);\n  }\n  100% {\n    transform: rotate(360deg) scale(1);\n  }\n}" },
      solutionExplanation: "The animation rotates 360 degrees while scaling up and down. infinite makes it repeat forever.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "css25-q1",
        type: "mcq",
        question: "What does animation-fill-mode: forwards do?",
        options: ["Restarts the animation", "Keeps the final keyframe state", "Pauses the animation", "Reverses the animation"],
        correctAnswer: 1,
        explanation: "forwards keeps the element in the final keyframe state after the animation completes, instead of reverting to the original style.",
        difficulty: 2,
      },
      {
        id: "css25-q2",
        type: "mcq",
        question: "How do you make an animation repeat infinitely?",
        options: ["animation-iteration-count: forever", "animation-iteration-count: infinite", "animation-repeat: true", "animation-loop: infinite"],
        correctAnswer: 1,
        explanation: "animation-iteration-count: infinite makes the animation repeat forever without stopping.",
        difficulty: 1,
      },
    ],
  },
  cheatSheet: [
    { label: "@keyframes syntax", value: "@keyframes name { 0% {} 100% {} }" },
    { label: "Animation shorthand", value: "animation: name duration timing-function delay iteration-count direction fill-mode" },
    { label: "Infinite loop", value: "animation-iteration-count: infinite" },
    { label: "Keep final state", value: "animation-fill-mode: forwards" },
  ],
};

export const cssCh26: Chapter = {
  id: "css-ch-26",
  number: 26,
  title: "Animations — Part 2",
  subtitle: "Performance and complex sequences.",
  difficulty: "Advanced",
  estimatedMinutes: 50,
  xpReward: 140,
  prerequisites: ["css-ch-25"],
  partLabel: "Part 3: Visual Effects",
  learningObjectives: [
    "Optimize animations for performance using GPU acceleration.",
    "Create complex animation sequences with delays.",
    "Use will-change property strategically.",
    "Understand animation composition and layer promotion.",
    "Create staggered animations for lists.",
  ],
  sections: [
    {
      id: "css26-s1",
      title: "Animation Performance",
      whyItMatters: "Poorly optimized animations can cause jank and lag. Understanding performance ensures your animations run at 60fps on all devices.",
      content: `Animation performance depends on what properties you animate. The browser has to repaint or re-layout elements based on which properties change.

**Performance hierarchy (best to worst):**
1. **Transform and opacity** - GPU accelerated, no layout or paint
2. **Filters** - Can be GPU accelerated but may be expensive
3. **Colors** - Requires repaint
4. **Box model** (width, height, margin, padding) - Requires layout + paint

**Best practices:**
- Always animate transform and opacity when possible
- Avoid animating layout properties
- Use will-change sparingly for complex animations
- Test on mobile devices

Example of performant animation:
\`\`\`css
.performant {
  transform: translateX(0);
  transition: transform 0.3s ease;
}
.performant:hover {
  transform: translateX(100px);
}
\`\`\`

Example of expensive animation (avoid):
\`\`\`css
.expensive {
  width: 100px;
  transition: width 0.3s ease;
}
.expensive:hover {
  width: 200px;
}
\`\`\``,
      codeExamples: [
        {
          id: "css26-s1-ex1",
          title: "Performant card animation",
          description: "A card that animates using transform instead of layout properties.",
          code: {
            html: `<div class="card">
  <h3>Performant Card</h3>
  <p>I animate smoothly at 60fps.</p>
</div>`,
            css: `.card {
  background: linear-gradient(135deg, #00D4FF, #7C3AED);
  padding: 2rem;
  border-radius: 12px;
  color: white;
  max-width: 250px;
  transform: translateY(0);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}
.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}`,
          },
          explanation: "Using transform instead of top/margin avoids layout recalculations, ensuring smooth 60fps animation.",
          tryItPrompt: "Open DevTools and check the Performance tab while hovering to see the smooth rendering.",
        },
      ],
      callouts: [
        { type: "tip", title: "will-change", content: "Use will-change: transform, opacity sparingly for elements that will animate frequently. Don't use it on everything as it consumes memory." },
      ],
    },
    {
      id: "css26-s2",
      title: "Staggered Animations",
      whyItMatters: "Staggered animations create professional, polished UIs where elements animate in sequence rather than all at once.",
      content: `Staggered animations animate elements with delays, creating a sequential effect. This is common in lists, menus, and cards.

You can use CSS variables to create staggered delays:
\`\`\`css
.list-item {
  opacity: 0;
  transform: translateY(20px);
  animation: fade-in 0.5s ease forwards;
  animation-delay: var(--delay, 0s);
}

.list-item:nth-child(1) { --delay: 0s; }
.list-item:nth-child(2) { --delay: 0.1s; }
.list-item:nth-child(3) { --delay: 0.2s; }
.list-item:nth-child(4) { --delay: 0.3s; }

@keyframes fade-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
\`\`\`

This creates a cascading entrance effect where each item appears 100ms after the previous one.

For dynamic lists, you can use Sass or JavaScript to calculate delays automatically.`,
      codeExamples: [
        {
          id: "css26-s2-ex1",
          title: "Staggered list animation",
          description: "A list where items animate in sequence.",
          code: {
            html: `<div class="list">
  <div class="list-item">Item 1</div>
  <div class="list-item">Item 2</div>
  <div class="list-item">Item 3</div>
  <div class="list-item">Item 4</div>
</div>`,
            css: `.list {
  max-width: 300px;
}
.list-item {
  background: #0F1629;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  color: white;
  opacity: 0;
  transform: translateX(-20px);
  animation: slide-in 0.5s ease forwards;
  animation-delay: var(--delay, 0s);
}
.list-item:nth-child(1) { --delay: 0s; }
.list-item:nth-child(2) { --delay: 0.1s; }
.list-item:nth-child(3) { --delay: 0.2s; }
.list-item:nth-child(4) { --delay: 0.3s; }
@keyframes slide-in {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}`,
          },
          explanation: "Each list item has a different animation delay using CSS variables, creating a sequential entrance effect.",
          tryItPrompt: "Change the delay values to make the animation faster or slower.",
        },
      ],
      callouts: [
        { type: "pro-tip", title: "Dynamic delays", content: "For dynamic lists with unknown length, use JavaScript to calculate and assign delays, or use a CSS preprocessor like Sass with loops." },
      ],
    },
  ],
  exercises: [
    {
      id: "css26-ex1",
      title: "Create a staggered animation",
      difficulty: 2,
      description: "Create a set of 3 elements that animate in sequence.",
      requirements: ["Use animation-delay", "Create different delays for each element", "Use transform or opacity for performance"],
      starterCode: { html: `<div class="container">\n  <div class="item">Item 1</div>\n  <div class="item">Item 2</div>\n  <div class="item">Item 3</div>\n</div>`, css: ".container {\n  max-width: 300px;\n}\n.item {\n  background: #7C3AED;\n  padding: 1rem;\n  margin-bottom: 0.5rem;\n  border-radius: 8px;\n  color: white;\n  opacity: 0;\n  /* your animation here */\n}\n@keyframes fade-in {\n  to { opacity: 1; }\n}" },
      hints: ["Use animation-delay with different values", "Try 0s, 0.1s, 0.2s"],
      solution: { html: `<div class="container">\n  <div class="item">Item 1</div>\n  <div class="item">Item 2</div>\n  <div class="item">Item 3</div>\n</div>`, css: ".container {\n  max-width: 300px;\n}\n.item {\n  background: #7C3AED;\n  padding: 1rem;\n  margin-bottom: 0.5rem;\n  border-radius: 8px;\n  color: white;\n  opacity: 0;\n  animation: fade-in 0.5s ease forwards;\n}\n.item:nth-child(1) { animation-delay: 0s; }\n.item:nth-child(2) { animation-delay: 0.1s; }\n.item:nth-child(3) { animation-delay: 0.2s; }\n@keyframes fade-in {\n  to { opacity: 1; }\n}" },
      solutionExplanation: "Each item has a different animation delay, creating a sequential fade-in effect.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "css26-q1",
        type: "mcq",
        question: "Which properties are most performant to animate?",
        options: ["width and height", "margin and padding", "transform and opacity", "color and background"],
        correctAnswer: 2,
        explanation: "Transform and opacity are GPU accelerated and don't trigger layout recalculations, making them the most performant properties to animate.",
        difficulty: 2,
      },
      {
        id: "css26-q2",
        type: "true-false",
        question: "Animating width is as performant as animating transform.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. Animating width triggers layout recalculations and repaints, which is much more expensive than GPU-accelerated transform animations.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Best for performance", value: "transform and opacity" },
    { label: "Staggered delays", value: "animation-delay: var(--delay)" },
    { label: "will-change", value: "will-change: transform, opacity" },
    { label: "Avoid animating", value: "width, height, margin, padding" },
  ],
};

export const cssCh27: Chapter = {
  id: "css-ch-27",
  number: 27,
  title: "Filters & Backdrop Filter",
  subtitle: "blur, brightness, and glassmorphism effects.",
  difficulty: "Intermediate",
  estimatedMinutes: 45,
  xpReward: 130,
  prerequisites: ["css-ch-21"],
  partLabel: "Part 3: Visual Effects",
  learningObjectives: [
    "Use filter for visual effects on elements.",
    "Use backdrop-filter for glassmorphism on backgrounds.",
    "Combine filters for complex effects.",
    "Understand browser support and fallbacks.",
    "Create modern glassmorphism UI designs.",
  ],
  sections: [
    {
      id: "css27-s1",
      title: "Filter Property",
      whyItMatters: "Filters let you apply Photoshop-like effects directly in CSS. They're perfect for creative designs and visual polish.",
      content: `The filter property applies graphical effects like blur, brightness, contrast, and more to an element.

Common filter functions:
\`\`\`css
/* Blur */
blur(5px)

/* Brightness (100% is normal) */
brightness(150%)

/* Contrast (100% is normal) */
contrast(150%)

/* Grayscale (0% is normal, 100% is grayscale) */
grayscale(100%)

/* Sepia (0% is normal, 100% is full sepia) */
sepia(100%)

/* Saturate (100% is normal) */
saturate(200%)

/* Hue rotate */
hue-rotate(90deg)

/* Invert */
invert(100%)

/* Drop shadow (different from box-shadow) */
drop-shadow(5px 5px 5px rgba(0,0,0,0.5))
\`\`\`

Multiple filters:
\`\`\`css
.filtered {
  filter: blur(2px) brightness(110%) contrast(120%);
}
\`\`\``,
      codeExamples: [
        {
          id: "css27-s1-ex1",
          title: "Image filters",
          description: "An image with multiple filter effects.",
          code: {
            html: `<div class="image-container">
  <img src="https://via.placeholder.com/300x200" class="filtered-image" alt="Sample">
</div>`,
            css: `.image-container {
  max-width: 300px;
}
.filtered-image {
  width: 100%;
  filter: brightness(110%) contrast(120%) saturate(150%);
  border-radius: 12px;
}`,
          },
          explanation: "The filter combination makes the image brighter, higher contrast, and more saturated.",
          tryItPrompt: "Add grayscale(50%) to see a black and white effect.",
        },
      ],
      callouts: [
        { type: "tip", title: "Performance", content: "Filters can impact performance, especially blur. Test on mobile devices and use sparingly." },
      ],
    },
    {
      id: "css27-s2",
      title: "Backdrop Filter",
      whyItMatters: "Backdrop filter creates glassmorphism effects where the background behind an element is blurred. This is a key trend in modern UI design.",
      content: `The backdrop-filter property applies filters to the area behind an element, creating a frosted glass effect.

Syntax:
\`\`\`css
.glass {
  backdrop-filter: blur(10px);
}
\`\`\`

Common backdrop-filter values:
\`\`\`css
/* Blur */
backdrop-filter: blur(10px);

/* Brightness */
backdrop-filter: brightness(110%);

/* Combined */
backdrop-filter: blur(10px) brightness(110%);
\`\`\`

Glassmorphism card:
\`\`\`css
.glass-card {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
}
\`\`\`

Browser support: backdrop-filter is supported in all modern browsers (Chrome 76+, Firefox 103+, Safari 9+). For older browsers, provide a fallback background color.`,
      codeExamples: [
        {
          id: "css27-s2-ex1",
          title: "Glassmorphism card",
          description: "A card with a frosted glass effect.",
          code: {
            html: `<div class="glass-card">
  <h3>Glass Card</h3>
  <p>Frosted glass effect using backdrop-filter.</p>
</div>`,
            css: `.glass-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 2rem;
  max-width: 300px;
  color: white;
}`,
          },
          explanation: "The semi-transparent background combined with backdrop-filter blur creates the glass effect. -webkit-backdrop-filter ensures Safari support.",
          tryItPrompt: "Change the blur value to 20px for a stronger glass effect.",
        },
      ],
      callouts: [
        { type: "tip", title: "Safari prefix", content: "Always include -webkit-backdrop-filter for Safari support alongside the standard property." },
      ],
    },
  ],
  exercises: [
    {
      id: "css27-ex1",
      title: "Create a glassmorphism card",
      difficulty: 1,
      description: "Create a card with a frosted glass effect.",
      requirements: ["Use backdrop-filter: blur", "Add semi-transparent background", "Include border for depth"],
      starterCode: { html: `<div class="glass-card">\n  <h3>Glass Card</h3>\n  <p>Content here</p>\n</div>`, css: ".glass-card {\n  padding: 2rem;\n  border-radius: 16px;\n  color: white;\n  max-width: 250px;\n  /* your styles here */\n}" },
      hints: ["Use background: rgba(255, 255, 255, 0.2)", "Use backdrop-filter: blur(10px)", "Add border: 1px solid rgba(255, 255, 255, 0.3)"],
      solution: { html: `<div class="glass-card">\n  <h3>Glass Card</h3>\n  <p>Content here</p>\n</div>`, css: ".glass-card {\n  background: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  padding: 2rem;\n  border-radius: 16px;\n  color: white;\n  max-width: 250px;\n}" },
      solutionExplanation: "The combination of semi-transparent background and backdrop-filter blur creates the glassmorphism effect.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "css27-q1",
        type: "mcq",
        question: "What does backdrop-filter do?",
        options: ["Filters the element itself", "Filters the area behind the element", "Changes element opacity", "Adds a shadow"],
        correctAnswer: 1,
        explanation: "backdrop-filter applies effects to the area behind an element, creating effects like frosted glass.",
        difficulty: 1,
      },
      {
        id: "css27-q2",
        type: "mcq",
        question: "Which filter makes an image grayscale?",
        options: ["blur(100%)", "grayscale(100%)", "brightness(0%)", "contrast(0%)"],
        correctAnswer: 1,
        explanation: "grayscale(100%) converts an image to black and white. grayscale(0%) is the original color.",
        difficulty: 1,
      },
    ],
  },
  cheatSheet: [
    { label: "Filter blur", value: "filter: blur(5px)" },
    { label: "Backdrop blur", value: "backdrop-filter: blur(10px)" },
    { label: "Brightness", value: "filter: brightness(150%)" },
    { label: "Glassmorphism", value: "background: rgba(255,255,255,0.2); backdrop-filter: blur(10px)" },
  ],
};

export const cssCh28: Chapter = {
  id: "css-ch-28",
  number: 28,
  title: "Blend Modes",
  subtitle: "mix-blend-mode and background-blend-mode.",
  difficulty: "Advanced",
  estimatedMinutes: 45,
  xpReward: 140,
  prerequisites: ["css-ch-21"],
  partLabel: "Part 3: Visual Effects",
  learningObjectives: [
    "Use mix-blend-mode for element blending.",
    "Use background-blend-mode for background layer blending.",
    "Understand different blend modes (multiply, screen, overlay, etc.).",
    "Create creative color effects with blend modes.",
    "Use blend modes for text effects and overlays.",
  ],
  sections: [
    {
      id: "css28-s1",
      title: "Mix Blend Mode",
      whyItMatters: "Blend modes let you control how elements blend with what's behind them, enabling creative effects like color overlays and text masks.",
      content: "The mix-blend-mode property defines how an element blends with its parent. It's similar to blend modes in Photoshop.\n\nCommon blend modes:\n\`\`\`css\n/* Normal - no blending (default) */\nmix-blend-mode: normal;\n\n/* Multiply - darkens */\nmix-blend-mode: multiply;\n\n/* Screen - lightens */\nmix-blend-mode: screen;\n\n/* Overlay - combines multiply and screen */\nmix-blend-mode: overlay;\n\n/* Color dodge - lightens dramatically */\nmix-blend-mode: color-dodge;\n\n/* Color burn - darkens dramatically */\nmix-blend-mode: color-burn;\n\n/* Difference - subtracts colors */\nmix-blend-mode: difference;\n\n/* Exclusion - softer difference */\nmix-blend-mode: exclusion;\n\`\`\`\n\nExample - text over image:\n\`\`\`css\n.text-overlay {\n  mix-blend-mode: overlay;\n  color: white;\n}\n\`\`\`\n\nThis makes the text blend with the background image, creating an integrated effect.",
      codeExamples: [
        {
          id: "css28-s1-ex1",
          title: "Blend mode text",
          description: "Text that blends with its background.",
          code: {
            html: `<div class="container">
  <div class="text">Blended Text</div>
</div>`,
            css: `.container {
  background: linear-gradient(135deg, #00D4FF, #7C3AED);
  padding: 3rem;
  border-radius: 12px;
}
.text {
  font-size: 48px;
  font-weight: bold;
  color: white;
  mix-blend-mode: overlay;
}`,
          },
          explanation: "The text uses overlay blend mode to blend with the gradient background, creating an integrated effect.",
          tryItPrompt: "Try different blend modes like multiply or screen to see different effects.",
        },
      ],
      callouts: [
        { type: "tip", title: "Background matters", content: "Blend modes only work when there's something behind the element to blend with. The effect depends on the background colors." },
      ],
    },
    {
      id: "css28-s2",
      title: "Background Blend Mode",
      whyItMatters: "Background blend mode blends multiple background layers together, enabling creative gradient combinations.",
      content: `The background-blend-mode property blends multiple background images or colors within the same element.

Syntax:
\`\`\`css
.element {
  background: url(image1.png), url(image2.png);
  background-blend-mode: multiply;
}
\`\`\`

Example with gradients:
\`\`\`css
.gradient-blend {
  background:
    linear-gradient(135deg, #00D4FF, #7C3AED),
    linear-gradient(45deg, #FF5733, #10B981);
  background-blend-mode: overlay;
}
\`\`\`

This blends the two gradients together, creating a unique color combination.

Background blend mode is perfect for:
- Creating complex gradient effects
- Blending patterns with solid colors
- Creating texture overlays
- Color grading effects`,
      codeExamples: [
        {
          id: "css28-s2-ex1",
          title: "Blended gradients",
          description: "Two gradients blended together.",
          code: {
            html: `<div class="gradient-box">
  <h2>Blended Gradients</h2>
</div>`,
            css: `.gradient-box {
  width: 300px;
  height: 200px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(135deg, #00D4FF, #7C3AED),
    linear-gradient(45deg, #FF5733, #10B981);
  background-blend-mode: multiply;
  color: white;
  font-size: 24px;
  font-weight: bold;
}`,
          },
          explanation: "The two gradients are blended using multiply mode, creating a rich, complex color effect.",
          tryItPrompt: "Change the blend mode to screen or overlay to see different blending effects.",
        },
      ],
      callouts: [
        { type: "tip", title: "Layer order", content: "The first background is on top. Blend mode applies from top to bottom layers. Order matters for the final result." },
      ],
    },
  ],
  exercises: [
    {
      id: "css28-ex1",
      title: "Create a blended text effect",
      difficulty: 1,
      description: "Create text that blends with its background.",
      requirements: ["Use mix-blend-mode", "Add a colorful background", "Use white or contrasting text color"],
      starterCode: { html: `<div class="container">\n  <h1 class="text">Blended Text</h1>\n</div>`, css: ".container {\n  background: linear-gradient(135deg, #00D4FF, #7C3AED);\n  padding: 3rem;\n  border-radius: 12px;\n}\n.text {\n  font-size: 48px;\n  font-weight: bold;\n  /* your blend mode here */\n}" },
      hints: ["Use mix-blend-mode: overlay", "Set color to white"],
      solution: { html: `<div class="container">\n  <h1 class="text">Blended Text</h1>\n</div>`, css: ".container {\n  background: linear-gradient(135deg, #00D4FF, #7C3AED);\n  padding: 3rem;\n  border-radius: 12px;\n}\n.text {\n  font-size: 48px;\n  font-weight: bold;\n  color: white;\n  mix-blend-mode: overlay;\n}" },
      solutionExplanation: "The overlay blend mode makes the white text blend with the colorful gradient background.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "css28-q1",
        type: "mcq",
        question: "What does mix-blend-mode control?",
        options: ["Animation speed", "How element blends with parent", "Element opacity", "Element position"],
        correctAnswer: 1,
        explanation: "mix-blend-mode controls how an element's colors blend with the content behind it.",
        difficulty: 1,
      },
      {
        id: "css28-q2",
        type: "mcq",
        question: "Which blend mode lightens the result?",
        options: ["multiply", "screen", "difference", "exclusion"],
        correctAnswer: 1,
        explanation: "Screen mode lightens by multiplying the inverse of the colors, similar to projecting light onto a screen.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Mix blend", value: "mix-blend-mode: overlay" },
    { label: "Background blend", value: "background-blend-mode: multiply" },
    { label: "Screen", value: "lightens colors" },
    { label: "Multiply", value: "darkens colors" },
  ],
};

export const cssCh29: Chapter = {
  id: "css-ch-29",
  number: 29,
  title: "Clip-path & Shapes",
  subtitle: "Custom element shapes with clip-path.",
  difficulty: "Advanced",
  estimatedMinutes: 45,
  xpReward: 140,
  prerequisites: ["css-ch-21"],
  partLabel: "Part 3: Visual Effects",
  learningObjectives: [
    "Use clip-path to create custom shapes.",
    "Create polygons, circles, and ellipses with clip-path.",
    "Use inset for custom rectangles.",
    "Create complex shapes for creative designs.",
    "Understand browser support and fallbacks.",
  ],
  sections: [
    {
      id: "css29-s1",
      title: "Clip-path Basics",
      whyItMatters: "Clip-path lets you create any shape imaginable for your elements, far beyond what border-radius can do. It's essential for creative designs.",
      content: "The clip-path property clips an element to a basic shape or polygon, hiding parts outside the clipping region.\n\nBasic shapes:\n\`\`\`css\n/* Circle */\nclip-path: circle(50%);\n\n/* Ellipse */\nclip-path: ellipse(50% 50% at 50% 50%);\n\n/* Inset rectangle */\nclip-path: inset(10px);\n\n/* Polygon */\nclip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);\n\`\`\`\n\nPolygon syntax:\n- Each pair is a coordinate (x y)\n- x and y can be percentages or lengths\n- The shape connects points in order\n- The shape automatically closes back to the first point\n\nExample triangle:\n\`\`\`css\n.triangle {\n  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);\n}\n\`\`\`\n\nThis creates a triangle pointing up.",
      codeExamples: [
        {
          id: "css29-s1-ex1",
          title: "Custom polygon shape",
          description: "A card with a hexagonal shape using clip-path.",
          code: {
            html: `<div class="hexagon">
  <h3>Hexagon</h3>
</div>`,
            css: `.hexagon {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #00D4FF, #7C3AED);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
}`,
          },
          explanation: "The polygon creates a hexagonal shape. The coordinates define each corner of the hexagon.",
          tryItPrompt: "Change the coordinates to create a different polygon shape.",
        },
      ],
      callouts: [
        { type: "tip", title: "Interactive tools", content: "Use online clip-path generators like clippy.css or bennettfeely.com/clippy to visually create shapes and get the CSS code." },
      ],
    },
    {
      id: "css29-s2",
      title: "Advanced Shapes",
      whyItMatters: "Complex clip-path shapes enable creative designs that would otherwise require images or SVG.",
      content: "You can create intricate shapes with enough polygon points:\n\`\`\`css\n/* Star shape */\n.star {\n  clip-path: polygon(\n    50% 0%,\n    61% 35%,\n    98% 35%,\n    68% 57%,\n    79% 91%,\n    50% 70%,\n    21% 91%,\n    32% 57%,\n    2% 35%,\n    39% 35%\n  );\n}\n\`\`\`\n\nClip-path with hover effects:\n\`\`\`css\n.shape {\n  clip-path: circle(50%);\n  transition: clip-path 0.5s ease;\n}\n.shape:hover {\n  clip-path: polygon(\n    50% 0%,\n    100% 50%,\n    50% 100%,\n    0% 50%\n  );\n}\n\`\`\`\n\nThis morphs from a circle to a diamond on hover.\n\nNote: clip-path transitions are not supported in all browsers. Check browser support before using.",
      codeExamples: [
        {
          id: "css29-s2-ex1",
          title: "Morphing shape",
          description: "A shape that changes on hover.",
          code: {
            html: `<div class="morphing-shape">
  <h3>Hover Me</h3>
</div>`,
            css: `.morphing-shape {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #7C3AED, #00D4FF);
  clip-path: circle(50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  transition: clip-path 0.5s ease;
}
.morphing-shape:hover {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}`,
          },
          explanation: "On hover, the shape morphs from a circle to a diamond using clip-path transition.",
          tryItPrompt: "Change the hover shape to a triangle: polygon(50% 0%, 0% 100%, 100% 100%)",
        },
      ],
      callouts: [
        { type: "info", title: "Browser support", content: "Clip-path transitions are supported in Chrome 55+, Firefox 49+, and Safari 15.4+. Provide a fallback for older browsers if needed." },
      ],
    },
  ],
  exercises: [
    {
      id: "css29-ex1",
      title: "Create a custom shape",
      difficulty: 1,
      description: "Create an element with a custom polygon shape.",
      requirements: ["Use clip-path: polygon", "Create at least a 4-sided shape", "Add a gradient background"],
      starterCode: { html: `<div class="shape">\n  <h3>Custom Shape</h3>\n</div>`, css: ".shape {\n  width: 200px;\n  height: 200px;\n  background: linear-gradient(135deg, #7C3AED, #00D4FF);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 18px;\n  font-weight: bold;\n  /* your clip-path here */\n}" },
      hints: ["Try clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%) for a diamond"],
      solution: { html: `<div class="shape">\n  <h3>Custom Shape</h3>\n</div>`, css: ".shape {\n  width: 200px;\n  height: 200px;\n  background: linear-gradient(135deg, #7C3AED, #00D4FF);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 18px;\n  font-weight: bold;\n  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);\n}" },
      solutionExplanation: "The polygon creates a diamond shape with four points defining the corners.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "css29-q1",
        type: "mcq",
        question: "What does clip-path do?",
        options: ["Adds a border", "Clips element to a shape", "Changes element color", "Adds a shadow"],
        correctAnswer: 1,
        explanation: "clip-path clips the element to a defined shape region, hiding parts outside that region.",
        difficulty: 1,
      },
      {
        id: "css29-q2",
        type: "mcq",
        question: "Which clip-path function creates a circle?",
        options: ["polygon()", "circle()", "ellipse()", "inset()"],
        correctAnswer: 1,
        explanation: "circle() creates a circular clip. The argument can be a radius or percentage.",
        difficulty: 1,
      },
    ],
  },
  cheatSheet: [
    { label: "Circle clip", value: "clip-path: circle(50%)" },
    { label: "Polygon clip", value: "clip-path: polygon(x y, x y, ...)" },
    { label: "Inset clip", value: "clip-path: inset(10px)" },
    { label: "Star shape", value: "polygon with 10 points" },
  ],
};

export const cssCh30: Chapter = {
  id: "css-ch-30",
  number: 30,
  title: "Scroll Behavior & Snap",
  subtitle: "Smooth scroll and snap points for better UX.",
  difficulty: "Intermediate",
  estimatedMinutes: 40,
  xpReward: 120,
  prerequisites: ["css-ch-17"],
  partLabel: "Part 3: Visual Effects",
  learningObjectives: [
    "Use scroll-behavior for smooth scrolling.",
    "Implement scroll-snap-type for snap scrolling.",
    "Create horizontal carousels with snap points.",
    "Use scroll-padding for better UX.",
    "Understand scroll-driven animations.",
  ],
  sections: [
    {
      id: "css30-s1",
      title: "Scroll Behavior",
      whyItMatters: "Smooth scrolling creates a polished user experience. Instead of jumpy page jumps, users see smooth animated scrolling.",
      content: "The scroll-behavior property controls how scrolling happens when users click anchor links or use JavaScript to scroll.\n\nSyntax:\n\`\`\`css\nhtml {\n  scroll-behavior: smooth;\n}\n\`\`\`\n\nValues:\n- \`auto\` - instant jump (default)\n- \`smooth\` - animated smooth scroll\n\nThis applies to:\n- Anchor links (\`<a href=\"#section\">\`)\n- JavaScript scroll methods (\`element.scrollIntoView()\`)\n- Navigation browser buttons\n\nExample:\n\`\`\`css\nhtml {\n  scroll-behavior: smooth;\n}\n\n/* Smooth scroll for specific element */\n.container {\n  scroll-behavior: smooth;\n  overflow-y: auto;\n  max-height: 400px;\n}\n\`\`\`",
      codeExamples: [
        {
          id: "css30-s1-ex1",
          title: "Smooth scroll navigation",
          description: "Navigation with smooth scrolling to sections.",
          code: {
            html: `<nav class="nav">
  <a href="#section1">Section 1</a>
  <a href="#section2">Section 2</a>
  <a href="#section3">Section 3</a>
</nav>
<section id="section1" class="section">Section 1</section>
<section id="section2" class="section">Section 2</section>
<section id="section3" class="section">Section 3</section>`,
            css: `html {
  scroll-behavior: smooth;
}
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #1E2A45;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  z-index: 100;
}
.nav a {
  color: white;
  text-decoration: none;
}
.section {
  min-height: 100vh;
  padding: 4rem 2rem;
  border-bottom: 1px solid #ddd;
}`,
          },
          explanation: "When you click navigation links, the page smoothly scrolls to the section instead of jumping instantly.",
          tryItPrompt: "Click the navigation links to experience smooth scrolling.",
        },
      ],
      callouts: [
        { type: "tip", title: "Browser support", content: "scroll-behavior: smooth is supported in all modern browsers. No fallback needed for most projects." },
      ],
    },
    {
      id: "css30-s2",
      title: "Scroll Snap",
      whyItMatters: "Scroll snap creates carousel-like behavior where content snaps into position. This is essential for galleries, carousels, and step-by-step experiences.",
      content: "Scroll snap lets you create snap points where scrolling stops. It's perfect for carousels, galleries, and paginated content.\n\nContainer properties:\n\`\`\`css\n.container {\n  scroll-snap-type: x mandatory;\n  overflow-x: auto;\n}\n\`\`\`\n\nValues:\n- \`x\` or \`y\` - snap direction\n- \`mandatory\` - always snap to a point\n- \`proximity\` - snap if close to a point\n\nChild properties:\n\`\`\`css\n.item {\n  scroll-snap-align: start;\n  scroll-snap-stop: always;\n}\n\`\`\`\n\nHorizontal carousel:\n\`\`\`css\n.carousel {\n  display: flex;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  gap: 1rem;\n  padding: 1rem;\n}\n.carousel-item {\n  flex: 0 0 300px;\n  scroll-snap-align: start;\n  scroll-snap-stop: always;\n}\n\`\`\`",
      codeExamples: [
        {
          id: "css30-s2-ex1",
          title: "Horizontal carousel",
          description: "A horizontal scrolling carousel with snap points.",
          code: {
            html: `<div class="carousel">
  <div class="carousel-item">Item 1</div>
  <div class="carousel-item">Item 2</div>
  <div class="carousel-item">Item 3</div>
  <div class="carousel-item">Item 4</div>
  <div class="carousel-item">Item 5</div>
</div>`,
            css: `.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 1rem;
  padding: 1rem;
  max-width: 600px;
}
.carousel-item {
  flex: 0 0 250px;
  height: 150px;
  background: linear-gradient(135deg, #00D4FF, #7C3AED);
  border-radius: 12px;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
}`,
          },
          explanation: "The carousel snaps each item to the start of the viewport when scrolling stops. mandatory ensures it always snaps.",
          tryItPrompt: "Scroll horizontally and notice how items snap into position.",
        },
      ],
      callouts: [
        { type: "tip", title: "scroll-padding", content: "Use scroll-padding on the container to add padding around snap points, preventing content from being flush against the edge." },
      ],
    },
  ],
  exercises: [
    {
      id: "css30-ex1",
      title: "Create a snap carousel",
      difficulty: 1,
      description: "Create a horizontal carousel with snap points.",
      requirements: ["Use scroll-snap-type: x mandatory", "Add scroll-snap-align to children", "Set fixed width for items"],
      starterCode: { html: `<div class="carousel">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n  <div class="item">4</div>\n</div>`, css: ".carousel {\n  display: flex;\n  overflow-x: auto;\n  gap: 1rem;\n  padding: 1rem;\n  max-width: 500px;\n  /* your scroll-snap here */\n}\n.item {\n  height: 150px;\n  background: #7C3AED;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 24px;\n  font-weight: bold;\n  /* your snap-align here */\n}" },
      hints: ["Add scroll-snap-type: x mandatory to .carousel", "Add scroll-snap-align: start to .item", "Set flex: 0 0 200px for .item"],
      solution: { html: `<div class="carousel">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n  <div class="item">4</div>\n</div>`, css: ".carousel {\n  display: flex;\n  overflow-x: auto;\n  gap: 1rem;\n  padding: 1rem;\n  max-width: 500px;\n  scroll-snap-type: x mandatory;\n}\n.item {\n  height: 150px;\n  background: #7C3AED;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 24px;\n  font-weight: bold;\n  flex: 0 0 200px;\n  scroll-snap-align: start;\n}" },
      solutionExplanation: "The scroll-snap-type on the container and scroll-snap-align on items creates the snapping behavior.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "css30-q1",
        type: "mcq",
        question: "What does scroll-behavior: smooth do?",
        options: ["Disables scrolling", "Makes scrolling instant", "Animates scroll smoothly", "Adds scrollbars"],
        correctAnswer: 2,
        explanation: "smooth creates an animated scrolling effect instead of instant jumps, providing a better user experience.",
        difficulty: 1,
      },
      {
        id: "css30-q2",
        type: "mcq",
        question: "Which scroll-snap-type value always snaps?",
        options: ["proximity", "mandatory", "optional", "none"],
        correctAnswer: 1,
        explanation: "mandatory always snaps to a snap point, while proximity only snaps if close to a point.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Smooth scroll", value: "scroll-behavior: smooth" },
    { label: "Snap container", value: "scroll-snap-type: x mandatory" },
    { label: "Snap align", value: "scroll-snap-align: start" },
    { label: "Snap stop", value: "scroll-snap-stop: always" },
  ],
};
