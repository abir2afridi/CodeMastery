import type { Chapter, Quiz, Exercise } from "./types";

export const cssCh45: Chapter = {
  id: "css-ch-45",
  number: 45,
  title: "Project: Portfolio Site",
  subtitle: "Build a personal portfolio with responsive layout.",
  difficulty: "Intermediate",
  estimatedMinutes: 120,
  xpReward: 200,
  prerequisites: ["css-ch-21", "css-ch-17"],
  partLabel: "Part 5: Projects",
  learningObjectives: [
    "Create a responsive portfolio layout.",
    "Use CSS Grid for complex layouts.",
    "Implement smooth animations.",
    "Style a navigation bar.",
  ],
  sections: [
    {
      id: "css45-s1",
      title: "Portfolio Layout Structure",
      whyItMatters: "A portfolio showcases your work. A well-structured layout ensures your content looks professional.",
      content: `Portfolio structure:
- Header with navigation
- Hero section with introduction
- Projects grid
- About section
- Contact section
- Footer

CSS Grid for layout:
\`\`\`css
.portfolio {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
}

@media (min-width: 768px) {
  .portfolio {
    grid-template-columns: 1fr 1fr;
  }
}
\`\`\``,
    },
    {
      id: "css45-s2",
      title: "Hero Section Styling",
      whyItMatters: "The hero section makes the first impression. It should be visually striking.",
      content: `Hero with gradient background:
\`\`\`css
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
}

.hero h1 {
  font-size: clamp(2rem, 5vw, 4rem);
  margin-bottom: 1rem;
}

.hero p {
  font-size: clamp(1rem, 2vw, 1.5rem);
  opacity: 0.9;
}
\`\`\``,
    },
  ],
  exercises: [
    { id: "css45-ex1", title: "Build portfolio header", difficulty: 2, description: "Create a responsive header with navigation.", requirements: ["Flexbox for layout", "Responsive design", "Hover states"], starterCode: { html: "<header class=\"header\">\n  <div class=\"logo\">Portfolio</div>\n  <nav class=\"nav\">\n    <a href=\"#\" class=\"nav-link\">Home</a>\n    <a href=\"#\" class=\"nav-link\">Projects</a>\n    <a href=\"#\" class=\"nav-link\">Contact</a>\n  </nav>\n</header>", css: "/* Style the header */\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background: white;\n}" }, hints: ["Use flexbox for nav layout", "Add hover effects on links", "Make it responsive with media query"], solution: { html: "<header class=\"header\">\n  <div class=\"logo\">Portfolio</div>\n  <nav class=\"nav\">\n    <a href=\"#\" class=\"nav-link\">Home</a>\n    <a href=\"#\" class=\"nav-link\">Projects</a>\n    <a href=\"#\" class=\"nav-link\">Contact</a>\n  </nav>\n</header>", css: ".header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n  background: white;\n  box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n}\n.logo {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #667eea;\n}\n.nav {\n  display: flex;\n  gap: 2rem;\n}\n.nav-link {\n  text-decoration: none;\n  color: #333;\n  transition: color 0.3s ease;\n}\n.nav-link:hover {\n  color: #667eea;\n}" }, solutionExplanation: "Flexbox creates a clean header layout with hover effects." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "css45-q1", type: "mcq", question: "Which is best for portfolio layout?", options: ["float", "CSS Grid", "position: absolute", "table layout"], correctAnswer: 1, explanation: "CSS Grid is ideal for portfolio layouts with complex responsive requirements.", difficulty: 2 }] },
  cheatSheet: [{ label: "Hero gradient", value: "linear-gradient(135deg, color1, color2)" }, { label: "Responsive text", value: "clamp(min, preferred, max)" }],
};

export const cssCh46: Chapter = {
  id: "css-ch-46",
  number: 46,
  title: "Project: Blog Layout",
  subtitle: "Build a responsive blog with article cards.",
  difficulty: "Intermediate",
  estimatedMinutes: 120,
  xpReward: 200,
  prerequisites: ["css-ch-16", "css-ch-21"],
  partLabel: "Part 5: Projects",
  learningObjectives: [
    "Create a blog post grid layout.",
    "Style article cards with shadows.",
    "Implement responsive typography.",
    "Add hover animations to cards.",
  ],
  sections: [
    {
      id: "css46-s1",
      title: "Blog Grid Layout",
      whyItMatters: "A blog needs a clean grid layout that adapts to different screen sizes.",
      content: `Blog grid with CSS Grid:
\`\`\`css
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}
\`\`\`

Article card styling:
\`\`\`css
.article-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.15);
}
\`\`\``,
    },
  ],
  exercises: [
    { id: "css46-ex1", title: "Create article card", difficulty: 2, description: "Style a blog article card with hover effect.", requirements: ["Card styling with shadow", "Image area", "Content area", "Hover animation"], starterCode: { html: "<article class=\"article-card\">\n  <div class=\"card-image\">Image</div>\n  <div class=\"card-content\">\n    <h3 class=\"card-title\">Article Title</h3>\n    <p class=\"card-excerpt\">Excerpt text here...</p>\n  </div>\n</article>", css: ".article-card {\n  border-radius: 12px;\n  overflow: hidden;\n}" }, hints: ["Add box-shadow for depth", "Use transition for smooth hover", "Transform on hover"], solution: { html: "<article class=\"article-card\">\n  <div class=\"card-image\">Image</div>\n  <div class=\"card-content\">\n    <h3 class=\"card-title\">Article Title</h3>\n    <p class=\"card-excerpt\">Excerpt text here...</p>\n  </div>\n</article>", css: ".article-card {\n  background: white;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0,0,0,0.1);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.article-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 8px 30px rgba(0,0,0,0.15);\n}\n.card-image {\n  height: 200px;\n  background: #e0e0e0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card-content {\n  padding: 1.5rem;\n}" }, solutionExplanation: "Shadows and hover effects create depth and interactivity." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "css46-q1", type: "mcq", question: "Which creates auto-fitting columns?", options: ["repeat(3, 1fr)", "repeat(auto-fit, minmax(300px, 1fr))", "grid-template-columns: auto", "columns: 3"], correctAnswer: 1, explanation: "auto-fit with minmax creates responsive columns that fit the container.", difficulty: 2 }] },
  cheatSheet: [{ label: "Auto-fit grid", value: "repeat(auto-fit, minmax(300px, 1fr))" }, { label: "Card shadow", value: "box-shadow: 0 4px 20px rgba(0,0,0,0.1)" }],
};

export const cssCh47: Chapter = {
  id: "css-ch-47",
  number: 47,
  title: "Project: Landing Page",
  subtitle: "Build a modern landing page with animations.",
  difficulty: "Advanced",
  estimatedMinutes: 150,
  xpReward: 250,
  prerequisites: ["css-ch-24", "css-ch-26"],
  partLabel: "Part 5: Projects",
  learningObjectives: [
    "Create a full-screen hero section.",
    "Implement scroll-triggered animations.",
    "Style a features section with icons.",
    "Add a call-to-action with gradient.",
  ],
  sections: [
    {
      id: "css47-s1",
      title: "Hero with Animations",
      whyItMatters: "Landing pages need to capture attention immediately. Animations create engagement.",
      content: `Full-screen hero with animation:
\`\`\`css
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
}

.hero-content {
  animation: fadeInUp 1s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
\`\`\``,
    },
  ],
  exercises: [
    { id: "css47-ex1", title: "Create animated CTA button", difficulty: 2, description: "Build a call-to-action button with hover animation.", requirements: ["Gradient background", "Hover transform", "Box shadow", "Transition"], starterCode: { html: "<button class=\"cta-button\">Get Started</button>", css: "/* Style the CTA button */" }, hints: ["Use linear-gradient for background", "Add transform: scale on hover", "Include box-shadow"], solution: { html: "<button class=\"cta-button\">Get Started</button>", css: ".cta-button {\n  padding: 1rem 2.5rem;\n  font-size: 1.1rem;\n  font-weight: bold;\n  color: white;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border: none;\n  border-radius: 50px;\n  cursor: pointer;\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.cta-button:hover {\n  transform: scale(1.05);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);\n}" }, solutionExplanation: "Gradient and hover effects create an engaging CTA button." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "css47-q1", type: "mcq", question: "Which creates full-screen height?", options: ["height: 100%", "min-height: 100vh", "height: 100vh", "height: 1000px"], correctAnswer: 1, explanation: "min-height: 100vh ensures the section is at least full viewport height.", difficulty: 2 }] },
  cheatSheet: [{ label: "Full screen", value: "min-height: 100vh" }, { label: "Fade in up", value: "@keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } }" }],
};

export const cssCh48: Chapter = {
  id: "css-ch-48",
  number: 48,
  title: "Project: Dashboard UI",
  subtitle: "Build a dark-themed dashboard layout.",
  difficulty: "Advanced",
  estimatedMinutes: 150,
  xpReward: 250,
  prerequisites: ["css-ch-36", "css-ch-16"],
  partLabel: "Part 5: Projects",
  learningObjectives: [
    "Create a dark-themed UI.",
    "Build a sidebar navigation.",
    "Create card-based widgets.",
    "Implement responsive dashboard layout.",
  ],
  sections: [
    {
      id: "css48-s1",
      title: "Dark Theme Dashboard",
      whyItMatters: "Dashboards often use dark themes to reduce eye strain and highlight data.",
      content: `Dark theme variables:
\`\`\`css
:root {
  --bg-primary: #1a1a2e;
  --bg-secondary: #16213e;
  --bg-card: #0f3460;
  --text-primary: #eaeaea;
  --text-secondary: #a0a0a0;
  --accent: #e94560;
}

body {
  background: var(--bg-primary);
  color: var(--text-primary);
}
\`\`\`

Sidebar layout:
\`\`\`css
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  min-height: 100vh;
}

.sidebar {
  background: var(--bg-secondary);
  padding: 2rem;
}
\`\`\``,
    },
  ],
  exercises: [
    { id: "css48-ex1", title: "Create dashboard card", difficulty: 2, description: "Build a dark-themed dashboard card widget.", requirements: ["Dark background", "Card styling", "Accent color", "Responsive"], starterCode: { html: "<div class=\"dashboard-card\">\n  <div class=\"card-header\">Header</div>\n  <div class=\"card-body\">\n    <div class=\"card-value\">1,234</div>\n    <div class=\"card-label\">Users</div>\n  </div>\n</div>", css: "/* Style the dashboard card */" }, hints: ["Use CSS variables for colors", "Add subtle border or shadow", "Style the value prominently"], solution: { html: "<div class=\"dashboard-card\">\n  <div class=\"card-header\">Header</div>\n  <div class=\"card-body\">\n    <div class=\"card-value\">1,234</div>\n    <div class=\"card-label\">Users</div>\n  </div>\n</div>", css: ":root {\n  --bg-card: #0f3460;\n  --text-primary: #eaeaea;\n  --accent: #e94560;\n}\n.dashboard-card {\n  background: var(--bg-card);\n  border-radius: 12px;\n  padding: 1.5rem;\n  border: 1px solid rgba(255,255,255,0.1);\n}\n.card-header {\n  color: var(--text-primary);\n  font-size: 0.9rem;\n  margin-bottom: 1rem;\n}\n.card-value {\n  font-size: 2rem;\n  font-weight: bold;\n  color: var(--accent);\n}\n.card-label {\n  color: var(--text-primary);\n  opacity: 0.7;\n  font-size: 0.9rem;\n}" }, solutionExplanation: "CSS variables enable consistent theming across the dashboard." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "css48-q1", type: "mcq", question: "Which is best for dark theme?", options: ["Hardcoded colors", "CSS variables", "Inline styles", "Images"], correctAnswer: 1, explanation: "CSS variables make dark themes maintainable and easy to update.", difficulty: 2 }] },
  cheatSheet: [{ label: "Dark variables", value: "--bg-primary: #1a1a2e" }, { label: "Sidebar grid", value: "grid-template-columns: 250px 1fr" }],
};

export const cssCh49: Chapter = {
  id: "css-ch-49",
  number: 49,
  title: "Project: Product Card",
  subtitle: "Build an e-commerce product card.",
  difficulty: "Intermediate",
  estimatedMinutes: 90,
  xpReward: 180,
  prerequisites: ["css-ch-21", "css-ch-25"],
  partLabel: "Part 5: Projects",
  learningObjectives: [
    "Create a product card with image.",
    "Add price and rating display.",
    "Implement hover effects.",
    "Style a buy button.",
  ],
  sections: [
    {
      id: "css49-s1",
      title: "Product Card Design",
      whyItMatters: "Product cards need to be visually appealing and informative to drive conversions.",
      content: `Product card structure:
\`\`\`css
.product-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.product-card:hover {
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  transform: translateY(-5px);
}

.product-image {
  height: 250px;
  background: #f5f5f5;
  position: relative;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.1);
}
\`\`\``,
    },
  ],
  exercises: [
    { id: "css49-ex1", title: "Create product card", difficulty: 2, description: "Build a complete product card with all elements.", requirements: ["Product image", "Title and description", "Price display", "Buy button"], starterCode: { html: "<div class=\"product-card\">\n  <div class=\"product-image\">Image</div>\n  <div class=\"product-info\">\n    <h3 class=\"product-title\">Product Name</h3>\n    <p class=\"product-description\">Description</p>\n    <div class=\"product-price\">$99.99</div>\n    <button class=\"buy-button\">Add to Cart</button>\n  </div>\n</div>", css: "/* Style the product card */" }, hints: ["Use card shadow for depth", "Style price prominently", "Make button stand out"], solution: { html: "<div class=\"product-card\">\n  <div class=\"product-image\">Image</div>\n  <div class=\"product-info\">\n    <h3 class=\"product-title\">Product Name</h3>\n    <p class=\"product-description\">Description</p>\n    <div class=\"product-price\">$99.99</div>\n    <button class=\"buy-button\">Add to Cart</button>\n  </div>\n</div>", css: ".product-card {\n  background: white;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 4px 15px rgba(0,0,0,0.1);\n  transition: all 0.3s ease;\n  max-width: 300px;\n}\n.product-image {\n  height: 200px;\n  background: #f5f5f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.product-info {\n  padding: 1.5rem;\n}\n.product-title {\n  font-size: 1.2rem;\n  margin-bottom: 0.5rem;\n}\n.product-description {\n  color: #666;\n  font-size: 0.9rem;\n  margin-bottom: 1rem;\n}\n.product-price {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #e94560;\n  margin-bottom: 1rem;\n}\n.buy-button {\n  width: 100%;\n  padding: 0.75rem;\n  background: #667eea;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.3s ease;\n}\n.buy-button:hover {\n  background: #5568d3;\n}" }, solutionExplanation: "A well-styled product card has clear hierarchy and prominent CTA." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "css49-q1", type: "mcq", question: "What effect improves product card interactivity?", options: ["Fixed positioning", "Hover transform", "Z-index only", "Display: none"], correctAnswer: 1, explanation: "Hover transform provides visual feedback when users interact with cards.", difficulty: 1 }] },
  cheatSheet: [{ label: "Card shadow", value: "box-shadow: 0 4px 15px rgba(0,0,0,0.1)" }, { label: "Image zoom", value: "transform: scale(1.1) on hover" }],
};

export const cssCh50: Chapter = {
  id: "css-ch-50",
  number: 50,
  title: "Mini Challenges Set 1",
  subtitle: "10 beginner CSS challenges.",
  difficulty: "Beginner",
  estimatedMinutes: 60,
  xpReward: 150,
  prerequisites: ["css-ch-05"],
  partLabel: "Part 5: Projects",
  learningObjectives: [
    "Practice basic CSS concepts.",
    "Apply colors and spacing.",
    "Use text styling.",
    "Create simple layouts.",
  ],
  sections: [
    {
      id: "css50-s1",
      title: "Challenge 1-5",
      whyItMatters: "Small challenges build confidence and reinforce fundamentals.",
      content: "Challenges:\n1. Create a button with hover effect\n2. Style a heading with custom font\n3. Create a card with border\n4. Style a list with custom markers\n5. Create a centered container",
    },
    {
      id: "css50-s2",
      title: "Challenge 6-10",
      whyItMatters: "Practice makes perfect. These challenges solidify core concepts.",
      content: "Challenges:\n6. Create a gradient background\n7. Style a form input\n8. Create a flexbox row\n9. Add box-shadow to an element\n10. Create a responsive text size",
    },
  ],
  exercises: [
    { id: "css50-ex1", title: "Complete Challenge 1", difficulty: 1, description: "Create a button with hover effect.", requirements: ["Button styling", "Hover state", "Transition"], starterCode: { html: "<button class=\"btn\">Click Me</button>", css: ".btn {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 6px;\n  background: #667eea;\n  color: white;\n  cursor: pointer;\n}" }, hints: ["Add :hover pseudo-class", "Change background on hover", "Add transition"], solution: { html: "<button class=\"btn\">Click Me</button>", css: ".btn {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 6px;\n  background: #667eea;\n  color: white;\n  cursor: pointer;\n  transition: background 0.3s ease;\n}\n.btn:hover {\n  background: #5568d3;\n}" }, solutionExplanation: "Hover effects provide visual feedback for interactive elements." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "css50-q1", type: "mcq", question: "Which pseudo-class adds hover effect?", options: [":active", ":hover", ":focus", ":visited"], correctAnswer: 1, explanation: ":hover styles elements when the mouse pointer is over them.", difficulty: 1 }] },
  cheatSheet: [{ label: "Hover", value: "element:hover" }, { label: "Transition", value: "transition: property duration ease" }],
};

export const cssCh51: Chapter = {
  id: "css-ch-51",
  number: 51,
  title: "Mini Challenges Set 2",
  subtitle: "10 intermediate CSS challenges.",
  difficulty: "Intermediate",
  estimatedMinutes: 90,
  xpReward: 200,
  prerequisites: ["css-ch-16"],
  partLabel: "Part 5: Projects",
  learningObjectives: [
    "Practice CSS Grid layouts.",
    "Use flexbox for alignment.",
    "Implement responsive design.",
    "Create complex selectors.",
  ],
  sections: [
    {
      id: "css51-s1",
      title: "Challenge 1-5",
      whyItMatters: "Intermediate challenges bridge the gap between basics and advanced concepts.",
      content: "Challenges:\n1. Create a 3-column grid\n2. Center content both vertically and horizontally\n3. Create a sticky header\n4. Style a navigation bar\n5. Create a responsive card grid",
    },
    {
      id: "css51-s2",
      title: "Challenge 6-10",
      whyItMatters: "These challenges require combining multiple CSS concepts.",
      content: "Challenges:\n6. Create a modal overlay\n7. Style a form with focus states\n8. Create a dropdown menu\n9. Implement a dark mode toggle\n10. Create a masonry layout",
    },
  ],
  exercises: [
    { id: "css51-ex1", title: "Complete Challenge 1", difficulty: 2, description: "Create a 3-column responsive grid.", requirements: ["CSS Grid", "3 columns", "Responsive design"], starterCode: { html: "<div class=\"grid\">\n  <div class=\"item\">1</div>\n  <div class=\"item\">2</div>\n  <div class=\"item\">3</div>\n</div>", css: ".grid {\n  display: grid;\n  gap: 1rem;\n}\n.item {\n  padding: 2rem;\n  background: #667eea;\n  color: white;\n}" }, hints: ["Use grid-template-columns", "Use repeat with auto-fit", "Add minmax for responsiveness"], solution: { html: "<div class=\"grid\">\n  <div class=\"item\">1</div>\n  <div class=\"item\">2</div>\n  <div class=\"item\">3</div>\n</div>", css: ".grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n}\n.item {\n  padding: 2rem;\n  background: #667eea;\n  color: white;\n}" }, solutionExplanation: "auto-fit with minmax creates a responsive grid that adapts to screen size." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "css51-q1", type: "mcq", question: "Which creates responsive grid columns?", options: ["repeat(3, 1fr)", "repeat(auto-fit, minmax(200px, 1fr))", "grid-template-columns: auto", "columns: 3"], correctAnswer: 1, explanation: "auto-fit with minmax automatically adjusts columns based on available space.", difficulty: 2 }] },
  cheatSheet: [{ label: "Responsive grid", value: "repeat(auto-fit, minmax(200px, 1fr))" }, { label: "Sticky", value: "position: sticky; top: 0" }],
};

export const cssCh52: Chapter = {
  id: "css-ch-52",
  number: 52,
  title: "Mini Challenges Set 3",
  subtitle: "10 advanced CSS challenges.",
  difficulty: "Advanced",
  estimatedMinutes: 120,
  xpReward: 250,
  prerequisites: ["css-ch-26", "css-ch-43"],
  partLabel: "Part 5: Projects",
  learningObjectives: [
    "Practice advanced animations.",
    "Use modern CSS features.",
    "Create complex layouts.",
    "Optimize CSS performance.",
  ],
  sections: [
    {
      id: "css52-s1",
      title: "Challenge 1-5",
      whyItMatters: "Advanced challenges push your skills to the next level.",
      content: "Challenges:\n1. Create a parallax effect\n2. Implement smooth scroll behavior\n3. Create a loading animation\n4. Use CSS nesting\n5. Implement :has() selector",
    },
    {
      id: "css52-s2",
      title: "Challenge 6-10",
      whyItMatters: "These challenges require mastery of CSS.",
      content: "Challenges:\n6. Create a pure CSS tooltip\n7. Implement container queries\n8. Create a glassmorphism effect\n9. Build a complex animation sequence\n10. Optimize selector performance",
    },
  ],
  exercises: [
    { id: "css52-ex1", title: "Complete Challenge 1", difficulty: 3, description: "Create a parallax scrolling effect.", requirements: ["Parallax background", "Smooth scroll", "Fixed positioning"], starterCode: { html: "<div class=\"parallax\">\n  <div class=\"parallax-content\">\n    <h1>Parallax Effect</h1>\n  </div>\n</div>\n<div class=\"content\">\n  <p>Scroll down to see the effect.</p>\n</div>", css: "/* Create parallax effect */" }, hints: ["Use background-attachment: fixed", "Add background-image", "Set background-size: cover"], solution: { html: "<div class=\"parallax\">\n  <div class=\"parallax-content\">\n    <h1>Parallax Effect</h1>\n  </div>\n</div>\n<div class=\"content\">\n  <p>Scroll down to see the effect.</p>\n</div>", css: ".parallax {\n  background-image: linear-gradient(135deg, #667eea, #764ba2);\n  background-attachment: fixed;\n  background-size: cover;\n  min-height: 400px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.parallax-content {\n  color: white;\n  text-align: center;\n}\n.content {\n  padding: 4rem 2rem;\n  min-height: 500px;\n}" }, solutionExplanation: "background-attachment: fixed creates the parallax effect by keeping the background fixed while content scrolls." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "css52-q1", type: "mcq", question: "Which property creates parallax?", options: ["position: fixed", "background-attachment: fixed", "z-index", "transform"], correctAnswer: 1, explanation: "background-attachment: fixed keeps the background fixed during scrolling, creating parallax.", difficulty: 3 }] },
  cheatSheet: [{ label: "Parallax", value: "background-attachment: fixed" }, { label: "Smooth scroll", value: "scroll-behavior: smooth" }],
};

export const cssCh53: Chapter = {
  id: "css-ch-53",
  number: 53,
  title: "Pure CSS Art",
  subtitle: "Create illustrations with CSS only.",
  difficulty: "Advanced",
  estimatedMinutes: 120,
  xpReward: 250,
  prerequisites: ["css-ch-22", "css-ch-23"],
  partLabel: "Part 5: Projects",
  learningObjectives: [
    "Use CSS shapes and gradients.",
    "Create art without images.",
    "Practice positioning and transforms.",
    "Understand CSS creative possibilities.",
  ],
  sections: [
    {
      id: "css53-s1",
      title: "CSS Shapes",
      whyItMatters: "CSS can create shapes using borders, gradients, and transforms.",
      content: `Creating shapes with CSS:

Circle:
\`\`\`css
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #667eea;
}
\`\`\`

Triangle:
\`\`\`css
.triangle {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 86px solid #667eea;
}
\`\`\`

Gradient art:
\`\`\`css
.sunset {
  background: linear-gradient(
    to bottom,
    #ff7e5f,
    #feb47b,
    #ffcda5
  );
}
\`\`\``,
    },
  ],
  exercises: [
    { id: "css53-ex1", title: "Create CSS face", difficulty: 3, description: "Draw a simple face using CSS shapes.", requirements: ["Circle for face", "Eyes", "Mouth", "Positioning"], starterCode: { html: "<div class=\"face\">\n  <div class=\"eye left\"></div>\n  <div class=\"eye right\"></div>\n  <div class=\"mouth\"></div>\n</div>", css: "/* Draw the face */" }, hints: ["Use border-radius for circle", "Position eyes absolutely", "Create mouth with border"], solution: { html: "<div class=\"face\">\n  <div class=\"eye left\"></div>\n  <div class=\"eye right\"></div>\n  <div class=\"mouth\"></div>\n</div>", css: ".face {\n  width: 200px;\n  height: 200px;\n  background: #ffdbac;\n  border-radius: 50%;\n  position: relative;\n  margin: 2rem auto;\n}\n.eye {\n  width: 30px;\n  height: 30px;\n  background: #333;\n  border-radius: 50%;\n  position: absolute;\n  top: 60px;\n}\n.eye.left { left: 40px; }\n.eye.right { right: 40px; }\n.mouth {\n  width: 60px;\n  height: 30px;\n  border-bottom: 4px solid #333;\n  border-radius: 0 0 50% 50%;\n  position: absolute;\n  bottom: 40px;\n  left: 50%;\n  transform: translateX(-50%);\n}" }, solutionExplanation: "CSS shapes and positioning create illustrations without images." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "css53-q1", type: "mcq", question: "Which creates a circle?", options: ["border-radius: 0", "border-radius: 50%", "border-radius: 10px", "border: 1px solid"], correctAnswer: 1, explanation: "border-radius: 50% transforms a square into a perfect circle.", difficulty: 2 }] },
  cheatSheet: [{ label: "Circle", value: "border-radius: 50%" }, { label: "Triangle", value: "border-left/right: transparent; border-bottom: color" }],
};

export const cssCh54: Chapter = {
  id: "css-ch-54",
  number: 54,
  title: "CSS Capstone: Personal Brand",
  subtitle: "Create a complete personal brand identity.",
  difficulty: "Advanced",
  estimatedMinutes: 180,
  xpReward: 300,
  prerequisites: ["css-ch-45", "css-ch-48"],
  partLabel: "Part 5: Projects",
  learningObjectives: [
    "Create a cohesive color palette.",
    "Design typography system.",
    "Build multiple components.",
    "Implement consistent spacing.",
  ],
  sections: [
    {
      id: "css54-s1",
      title: "Design System Basics",
      whyItMatters: "A design system ensures consistency across all components and pages.",
      content: `Design system variables:
\`\`\`css
:root {
  /* Colors */
  --primary: #667eea;
  --secondary: #764ba2;
  --accent: #e94560;
  --neutral: #f5f5f5;
  --text: #1a1a2e;
  
  /* Typography */
  --font-heading: 'Inter', sans-serif;
  --font-body: 'Inter', sans-serif;
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  
  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 4rem;
  
  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 20px;
}
\`\`\``,
    },
  ],
  exercises: [
    { id: "css54-ex1", title: "Create design system", difficulty: 3, description: "Define CSS variables for a design system.", requirements: ["Color palette", "Typography scale", "Spacing scale", "Border radius"], starterCode: { html: "<div class=\"card\">\n  <h2 class=\"heading\">Heading</h2>\n  <p class=\"text\">Body text</p>\n  <button class=\"button\">Button</button>\n</div>", css: "/* Define your design system */" }, hints: ["Define CSS variables in :root", "Use var() to apply variables", "Create a cohesive theme"], solution: { html: "<div class=\"card\">\n  <h2 class=\"heading\">Heading</h2>\n  <p class=\"text\">Body text</p>\n  <button class=\"button\">Button</button>\n</div>", css: ":root {\n  --primary: #667eea;\n  --text: #1a1a2e;\n  --bg: #ffffff;\n  --radius: 8px;\n  --space: 1rem;\n}\n.card {\n  background: var(--bg);\n  border-radius: var(--radius);\n  padding: var(--space);\n  box-shadow: 0 4px 15px rgba(0,0,0,0.1);\n}\n.heading {\n  color: var(--text);\n  margin-bottom: 0.5rem;\n}\n.text {\n  color: var(--text);\n  opacity: 0.8;\n  margin-bottom: 1rem;\n}\n.button {\n  background: var(--primary);\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border: none;\n  border-radius: var(--radius);\n  cursor: pointer;\n}" }, solutionExplanation: "CSS variables create a maintainable design system with consistent theming." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "css54-q1", type: "mcq", question: "Where are design system variables defined?", options: ["In each component", "In :root", "In media queries", "In JavaScript"], correctAnswer: 1, explanation: "CSS variables in :root are globally accessible and perfect for design systems.", difficulty: 2 }] },
  cheatSheet: [{ label: "Variables", value: "--name: value" }, { label: "Use variable", value: "var(--name)" }],
};

export const cssCh55: Chapter = {
  id: "css-ch-55",
  number: 55,
  title: "CSS Mastery Assessment",
  subtitle: "Final comprehensive CSS assessment.",
  difficulty: "Advanced",
  estimatedMinutes: 90,
  xpReward: 500,
  prerequisites: ["css-ch-54"],
  partLabel: "Part 5: Projects",
  learningObjectives: [
    "Demonstrate comprehensive CSS knowledge.",
    "Apply all learned concepts.",
    "Solve complex CSS problems.",
    "Show mastery of modern CSS.",
  ],
  sections: [
    {
      id: "css55-s1",
      title: "Assessment Overview",
      whyItMatters: "This assessment tests your ability to apply all CSS concepts learned throughout the curriculum.",
      content: "Assessment covers:\n- Box model and layout\n- Flexbox and Grid\n- Responsive design\n- Colors and gradients\n- Typography\n- Animations and transitions\n- CSS architecture\n- Modern CSS features\n- Performance optimization\n- Accessibility\n\nThis is your opportunity to demonstrate CSS mastery.",
    },
  ],
  exercises: [
    { id: "css55-ex1", title: "Build complete component", difficulty: 3, description: "Create a complex component using multiple CSS concepts.", requirements: ["Responsive layout", "Animations", "Modern features", "Accessible"], starterCode: { html: "<div class=\"component\">\n  <!-- Build your component -->\n</div>", css: "/* Build a complex component */" }, hints: ["Use Grid for layout", "Add CSS variables", "Include animations", "Ensure accessibility"], solution: { html: "<div class=\"component\">\n  <div class=\"component-header\">\n    <h3 class=\"title\">Component Title</h3>\n    <button class=\"icon-btn\" aria-label=\"More options\">⋮</button>\n  </div>\n  <div class=\"component-body\">\n    <p class=\"text\">Component content with smooth animations.</p>\n  </div>\n  <div class=\"component-footer\">\n    <button class=\"action-btn\">Action</button>\n  </div>\n</div>", css: ":root {\n  --primary: #667eea;\n  --text: #1a1a2e;\n  --bg: #ffffff;\n}\n.component {\n  background: var(--bg);\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0,0,0,0.1);\n  overflow: hidden;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.component:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 30px rgba(0,0,0,0.15);\n}\n.component-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  border-bottom: 1px solid #eee;\n}\n.title {\n  color: var(--text);\n  margin: 0;\n}\n.icon-btn {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: var(--text);\n}\n.icon-btn:focus {\n  outline: 2px solid var(--primary);\n  outline-offset: 2px;\n}\n.component-body {\n  padding: 1rem;\n}\n.component-footer {\n  padding: 1rem;\n  border-top: 1px solid #eee;\n}\n.action-btn {\n  background: var(--primary);\n  color: white;\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background 0.3s ease;\n}\n.action-btn:hover {\n  background: #5568d3;\n}" }, solutionExplanation: "This component demonstrates responsive design, animations, accessibility, and modern CSS." },
  ],
  quiz: { passingScore: 80, questions: [{ id: "css55-q1", type: "mcq", question: "Which ensures accessibility for keyboard users?", options: ["Color only", "Visible focus indicators", "Animations", "Large fonts"], correctAnswer: 1, explanation: "Visible focus indicators are essential for keyboard navigation accessibility.", difficulty: 2 }, { id: "css55-q2", type: "mcq", question: "Which creates performant animations?", options: ["top/left", "margin", "transform", "width/height"], correctAnswer: 2, explanation: "transform is GPU-accelerated and the most performant property for animations.", difficulty: 2 }, { id: "css55-q3", type: "mcq", question: "Which creates responsive typography?", options: ["font-size: 16px", "font-size: 1rem", "clamp(1rem, 2vw, 2rem)", "font-size: 100%"], correctAnswer: 2, explanation: "clamp() creates fluid typography that scales within min and max bounds.", difficulty: 3 }] },
  cheatSheet: [{ label: "Accessibility", value: "Always provide focus indicators" }, { label: "Performance", value: "Animate transform and opacity" }],
};
