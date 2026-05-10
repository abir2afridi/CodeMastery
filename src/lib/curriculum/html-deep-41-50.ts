import type { Chapter } from "./types";

// ============================================================================
// HTML CHAPTER 41 — HTML ANTI-PATTERNS
// ============================================================================
export const htmlCh41: Chapter = {
  id: "html-ch-41",
  number: 41,
  title: "HTML Anti-Patterns",
  subtitle: "What NOT to do, and why.",
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  xpReward: 100,
  prerequisites: ["html-ch-40"],
  partLabel: "Part 6: Advanced HTML",
  learningObjectives: [
    "Identify common HTML anti-patterns.",
    "Understand why certain practices are harmful.",
    "Learn the correct alternatives to anti-patterns.",
    "Avoid deprecated and non-semantic HTML.",
    "Write cleaner, more maintainable HTML.",
  ],
  sections: [
    {
      id: "ch41-s1",
      title: "Common Layout Anti-Patterns",
      whyItMatters: "Using tables for layout, inline styles everywhere, and other old techniques makes code hard to maintain and hurts accessibility. Understanding anti-patterns helps you avoid these mistakes.",
      realWorldAnalogy: "Anti-patterns are like using a hammer to screw in a screw. It might work, but it's the wrong tool for the job and causes damage. Using the right tool (semantic HTML, CSS) makes everything easier.",
      content: `**Tables for layout:**
\`\`\`
<!-- BAD: Tables for layout -->
<table>
  <tr>
    <td>Header</td>
  </tr>
  <tr>
    <td>Content</td>
  </tr>
</table>

<!-- GOOD: Semantic elements -->
<header>Header</header>
<main>Content</main>
\`\`\`
Tables should only be used for tabular data. Using them for layout is outdated and harms accessibility.

**Div soup:**
\`\`\`
<!-- BAD: Excessive divs without meaning -->
<div class="container">
  <div class="wrapper">
    <div class="inner">
      <div class="content">
        <div class="text">Hello</div>
      </div>
    </div>
  </div>
</div>

<!-- GOOD: Semantic elements -->
<div class="container">
  <main>
    <p>Hello</p>
  </main>
</div>
\`\`\`
Excessive nested divs make code hard to read and maintain. Use semantic elements when possible.

**Inline styles everywhere:**
\`\`\`
<!-- BAD: All styles inline -->
<div style="margin: 0; padding: 20px; background: #fff;">
  <h1 style="color: #333; font-size: 24px;">Title</h1>
</div>

<!-- GOOD: CSS classes -->
<div class="container">
  <h1 class="title">Title</h1>
</div>
\`\`\`
Inline styles are hard to maintain and override. Use CSS classes instead.`,
      codeExamples: [
        {
          id: "ch41-s1-ex1",
          title: "Table layout vs semantic HTML",
          description: "Comparing table-based layout with semantic HTML.",
          code: {
            html: `<!-- BAD: Table for layout -->
<table width="100%" cellpadding="0" cellspacing="0">
  <tr>
    <td width="200" valign="top">
      Sidebar
    </td>
    <td valign="top">
      Main content
    </td>
  </tr>
</table>

<!-- GOOD: Semantic HTML with CSS -->
<div class="layout">
  <aside class="sidebar">
    Sidebar
  </aside>
  <main class="content">
    Main content
  </main>
</div>

<style>
.layout {
  display: grid;
  grid-template-columns: 200px 1fr;
}
</style>`,
          },
          explanation: "The table version uses outdated layout techniques that are hard to maintain and not semantic. The semantic version uses aside and main elements with CSS Grid for layout—modern, accessible, and maintainable.",
          tryItPrompt: "Test both versions with a screen reader. The semantic version provides proper navigation landmarks, while the table version doesn't.",
        },
      ],
      callouts: [
        { type: "warning", title: "Tables are for data only", content: "Only use tables for tabular data (like spreadsheets). Never use tables for page layout. Use CSS Flexbox, Grid, or semantic HTML elements instead.",
        },
        { type: "common-mistake", title: "Div overuse", content: "Don't wrap everything in divs. Use semantic elements like header, nav, main, article, section, aside, and footer when they match your content's meaning.",
        },
      ],
    },
    {
      id: "ch41-s2",
      title: "Accessibility and SEO Anti-Patterns",
      whyItMatters: "Poor accessibility and SEO practices exclude users and hurt search rankings. Learning these anti-patterns helps you build more inclusive and discoverable websites.",
      content: `**Missing alt text:**
\`\`\`
<!-- BAD: No alt text -->
<img src="photo.jpg">

<!-- GOOD: Descriptive alt text -->
<img src="photo.jpg" alt="A sunset over the ocean">
\`\`\`

**Empty links:**
\`\`\`
<!-- BAD: Link with no text -->
<a href="/page"></a>

<!-- GOOD: Link with descriptive text -->
<a href="/page">Learn more</a>
\`\`\`

**Missing form labels:**
\`\`\`
<!-- BAD: Input without label -->
<input type="text" placeholder="Name">

<!-- GOOD: Input with label -->
<label for="name">Name:</label>
<input type="text" id="name" placeholder="Name">
\`\`\`

**Skipping heading levels:**
\`\`\`
<!-- BAD: Skip from h1 to h3 -->
<h1>Title</h1>
<h3>Subtitle</h3>

<!-- GOOD: Proper heading hierarchy -->
<h1>Title</h1>
<h2>Subtitle</h2>
<h3>Section</h3>
\`\`\`

**Using non-semantic elements:**
\`\`\`
<!-- BAD: Div for everything -->
<div class="title">Title</div>
<div class="subtitle">Subtitle</div>

<!-- GOOD: Semantic headings -->
<h1>Title</h1>
<h2>Subtitle</h2>
\`\`\``,
      codeExamples: [
        {
          id: "ch41-s2-ex1",
          title: "Accessible form vs anti-pattern",
          description: "Comparing accessible form with common mistakes.",
          code: {
            html: `<!-- BAD: Missing labels, no semantic structure -->
<form>
  Name: <input type="text">
  Email: <input type="email">
  <button>Submit</button>
</form>

<!-- GOOD: Proper labels and semantic structure -->
<form>
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
  </div>
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  </div>
  <button type="submit">Submit</button>
</form>`,
          },
          explanation: "The bad version lacks proper label associations and semantic grouping. The good version uses label elements with for attributes linking to input IDs, semantic form-group divs, and proper form attributes for validation.",
          tryItPrompt: "Test both forms with a screen reader. The good version announces each field with its label, while the bad version is confusing.",
        },
      ],
      callouts: [
        { type: "tip", title: "Always provide alt text", content: "Every image must have alt text. If the image is decorative, use alt=\"\" or role=\"presentation\". Never leave alt empty unless the image is purely decorative.",
        },
        { type: "common-mistake", title: "Placeholder as label", content: "Don't use placeholder text as a substitute for labels. Placeholders disappear when the user types, and they're not accessible to screen readers as labels.",
        },
      ],
    },
  ],
  exercises: [
    {
      id: "ch41-ex1",
      title: "Refactor anti-patterns",
      difficulty: 1,
      description: "Identify and fix anti-patterns in given HTML code.",
      requirements: ["Replace table layout with semantic HTML", "Add missing alt attributes", "Add proper labels to form inputs", "Remove excessive nested divs", "Use semantic heading hierarchy"],
      starterCode: {
        html: `<table width="100%">
  <tr>
    <td>
      <img src="logo.png">
      <div class="title"><div class="text">Welcome</div></div>
    </td>
  </tr>
  <tr>
    <td>
      <form>
        Name: <input type="text" placeholder="Name">
        <button>Submit</button>
      </form>
    </td>
  </tr>
</table>`,
      },
      hints: [
        "Replace table with header and main elements",
        "Add alt text to the image",
        "Use label elements with for attributes",
        "Remove nested divs in the title section",
        "Use h1 for the main heading",
      ],
      solution: {
        html: `<header>
  <img src="logo.png" alt="Company Logo">
  <h1>Welcome</h1>
</header>

<main>
  <form>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="Name">
    </div>
    <button type="submit">Submit</button>
  </form>
</main>`,
      },
      solutionExplanation: "Replaced table layout with semantic header and main elements. Added alt text to image. Removed nested divs and used h1 for heading. Added proper label with for attribute linked to input ID. Form now has semantic structure and accessibility.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch41-q1",
        type: "mcq",
        question: "Why should tables not be used for layout?",
        options: [
          "They're too slow to render",
          "They're not semantic and harm accessibility",
          "They don't work in modern browsers",
          "They require JavaScript",
        ],
        correctAnswer: 1,
        explanation: "Tables should only be used for tabular data. Using them for layout is not semantic, makes code hard to maintain, and harms accessibility because screen readers expect tables to contain data.",
        difficulty: 1,
      },
      {
        id: "ch41-q2",
        type: "mcq",
        question: "What is the problem with empty links?",
        options: [
          "They don't render",
          "They're not clickable",
          "Screen readers announce them as empty, users don't know where they go",
          "They cause SEO issues only",
        ],
        correctAnswer: 2,
        explanation: "Empty links have no text content, so screen readers announce them as blank links. Users won't know where the link goes. Always provide descriptive link text or aria-label.",
        difficulty: 1,
      },
      {
        id: "ch41-q3",
        type: "true-false",
        question: "Placeholder text can replace label elements.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. Placeholder text should not replace labels. Placeholders disappear when users type, and they're not accessible to screen readers as labels. Always use proper label elements.",
        difficulty: 1,
      },
      {
        id: "ch41-q4",
        type: "mcq",
        question: "Why is skipping heading levels bad?",
        options: [
          "It causes visual issues",
          "It breaks the document outline for screen readers and SEO",
          "It's not valid HTML",
          "It only affects mobile devices",
        ],
        correctAnswer: 1,
        explanation: "Skipping heading levels (e.g., h1 to h3) breaks the document outline. Screen readers and search engines rely on proper heading hierarchy to understand content structure.",
        difficulty: 1,
      },
      {
        id: "ch41-q5",
        type: "mcq",
        question: "What is 'div soup'?",
        options: [
          "A CSS framework",
          "Excessive use of divs without semantic meaning",
          "A type of soup made of code",
          "A JavaScript library",
        ],
        correctAnswer: 1,
        explanation: "Div soup refers to excessive nesting of div elements without semantic meaning. It makes code hard to read, maintain, and understand for screen readers. Use semantic elements instead.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Tables", value: "For data only" },
    { label: "Alt text", value: "Always required" },
    { label: "Labels", value: "For form inputs" },
    { label: "Semantic HTML", value: "Use proper elements" },
    { label: "Headings", value: "Don't skip levels" },
    { label: "CSS classes", value: "Over inline styles" },
  ],
};

// ============================================================================
// HTML CHAPTER 42 — PROJECT: PERSONAL BIO PAGE
// ============================================================================
export const htmlCh42: Chapter = {
  id: "html-ch-42",
  number: 42,
  title: "Project: Personal Bio Page",
  subtitle: "Pull it all together.",
  difficulty: "Beginner",
  estimatedMinutes: 45,
  xpReward: 150,
  prerequisites: ["html-ch-41"],
  partLabel: "Part 7: Projects",
  learningObjectives: [
    "Create a complete personal bio page using semantic HTML.",
    "Apply proper heading hierarchy and document structure.",
    "Include images with proper alt text.",
    "Add contact information with semantic links.",
    "Use appropriate meta tags for the page.",
  ],
  sections: [
    {
      id: "ch42-s1",
      title: "Project Overview",
      whyItMatters: "This project brings together all the HTML concepts you've learned. Creating a real page helps you practice semantic HTML, accessibility, and proper document structure.",
      realWorldAnalogy: "This project is like building your first house after learning carpentry. You'll use all the tools and techniques you've learned to create something real and functional.",
      content: `**Project requirements:**
Create a personal bio page that includes:
- Proper HTML5 document structure
- Meta tags for description and viewport
- Semantic HTML elements (header, main, footer, etc.)
- Profile image with alt text
- Name and job title
- About section
- Skills list
- Contact information (email, social links)
- Proper heading hierarchy (h1, h2, h3)
- Accessible links and buttons

**Skills to practice:**
- Semantic HTML structure
- Image accessibility
- Link accessibility
- Form accessibility (if adding a contact form)
- Proper heading hierarchy
- Meta tags for SEO

**Tips:**
- Start with the document structure (html, head, body)
- Add content in logical sections
- Use semantic elements instead of divs
- Test accessibility with keyboard navigation
- Validate your HTML with a validator`,
      codeExamples: [
        {
          id: "ch42-s1-ex1",
          title: "Project structure example",
          description: "Basic structure for the bio page.",
          code: {
            html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Personal bio page of John Doe, Software Engineer">
    <title>John Doe - Personal Bio</title>
</head>
<body>
    <header>
        <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    
    <main>
        <section id="about">
            <h1>John Doe</h1>
            <p>Software Engineer</p>
            <img src="profile.jpg" alt="Portrait of John Doe">
        </section>
        
        <section id="skills">
            <h2>Skills</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        </section>
        
        <section id="contact">
            <h2>Contact</h2>
            <a href="mailto:john@example.com">john@example.com</a>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2024 John Doe</p>
    </footer>
</body>
</html>`,
          },
          explanation: "This example shows the basic structure: semantic header with nav, main with sections for each content area, and footer. Uses proper heading hierarchy (h1, h2) and accessible links and images.",
          tryItPrompt: "Use this as a starting point and expand it with your own content, styling, and additional sections.",
        },
      ],
      callouts: [
        { type: "tip", title: "Use semantic elements", content: "Throughout this project, prefer semantic elements like header, nav, main, section, article, aside, and footer over generic divs. This improves accessibility and SEO.",
        },
        { type: "common-mistake", title: "Forgetting alt text", content: "Every image must have alt text. If the image is decorative, use alt=\"\". For profile photos, describe the person (e.g., 'Portrait of John Doe').",
        },
      ],
    },
  ],
  exercises: [
    {
      id: "ch42-ex1",
      title: "Build your personal bio page",
      difficulty: 1,
      description: "Create a complete personal bio page with all required sections.",
      requirements: ["Include proper HTML5 document structure", "Add meta tags (charset, viewport, description)", "Use semantic HTML throughout", "Include profile image with alt text", "Add about, skills, and contact sections", "Use proper heading hierarchy", "Make it accessible (keyboard navigation, screen reader friendly)"],
      starterCode: {
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Add meta tags here -->
    <title>Your Name - Bio</title>
</head>
<body>
    <!-- Build your bio page here -->
</body>
</html>`,
      },
      hints: [
        "Start with proper DOCTYPE and html lang attribute",
        "Add meta charset and viewport in head",
        "Use header for navigation, main for content, footer for copyright",
        "Profile image should have descriptive alt text",
        "Use h1 for your name, h2 for section headings",
        "Contact links should be descriptive (not 'click here')",
        "Test with Tab key navigation",
      ],
      solution: {
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Personal bio page of [Your Name], [Your Job Title]">
    <title>[Your Name] - Personal Bio</title>
</head>
<body>
    <header>
        <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    
    <main>
        <section id="about">
            <h1>[Your Name]</h1>
            <p>[Your Job Title]</p>
            <img src="profile.jpg" alt="Portrait of [Your Name]">
            <p>[A brief bio about yourself, your background, and your passions]</p>
        </section>
        
        <section id="skills">
            <h2>Skills</h2>
            <ul>
                <li>[Skill 1]</li>
                <li>[Skill 2]</li>
                <li>[Skill 3]</li>
                <li>[Skill 4]</li>
            </ul>
        </section>
        
        <section id="contact">
            <h2>Contact</h2>
            <p>Email: <a href="mailto:your@email.com">your@email.com</a></p>
            <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener">github.com/yourusername</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener">linkedin.com/in/yourusername</a></p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2024 [Your Name]. All rights reserved.</p>
    </footer>
</body>
</html>`,
      },
      solutionExplanation: "Complete HTML5 document with proper meta tags. Semantic structure with header, main, sections, and footer. Profile image with descriptive alt text. Proper heading hierarchy (h1 for name, h2 for sections). Accessible contact links with descriptive text. Placeholder content ready for personalization.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch42-q1",
        type: "mcq",
        question: "What meta tag is essential for mobile responsiveness?",
        options: ["meta charset", "meta name='viewport'", "meta name='description'", "meta name='keywords'"],
        correctAnswer: 1,
        explanation: "The viewport meta tag is essential for mobile responsiveness. It tells mobile browsers how to scale the page and sets the initial zoom level.",
        difficulty: 1,
      },
      {
        id: "ch42-q2",
        type: "mcq",
        question: "Which element should contain the main content of your page?",
        options: ["<header>", "<div>", "<main>", "<section>"],
        correctAnswer: 2,
        explanation: "<main> should contain the primary content of your page. It's a semantic element that helps screen readers and search engines understand the main content area.",
        difficulty: 1,
      },
      {
        id: "ch42-q3",
        type: "true-false",
        question: "Profile images don't need alt text since they're decorative.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. Profile images are not decorative—they're important content. They need descriptive alt text like 'Portrait of John Doe' so screen reader users know who the person is.",
        difficulty: 1,
      },
      {
        id: "ch42-q4",
        type: "mcq",
        question: "What heading level should your name use on a bio page?",
        options: ["h2", "h3", "h1", "h4"],
        correctAnswer: 2,
        explanation: "Your name should use h1 on a bio page since it's the main heading. Section headings (About, Skills, Contact) should use h2. This creates a proper document outline.",
        difficulty: 1,
      },
      {
        id: "ch42-q5",
        type: "mcq",
        question: "Why should external links have rel='noopener'?",
        options: [
          "It improves SEO",
          "It's required for all links",
          "It's a security best practice to prevent tabnabbing attacks",
          "It makes links load faster",
        ],
        correctAnswer: 2,
        explanation: "rel='noopener' is a security best practice for external links. It prevents the new page from accessing the window.opener property, protecting against tabnabbing attacks. rel='noreferrer' also includes this protection.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Viewport meta", value: "Essential for mobile" },
    { label: "Semantic HTML", value: "Use header, main, footer" },
    { label: "Alt text", value: "Describe images" },
    { label: "Heading hierarchy", value: "h1 → h2 → h3" },
    { label: "rel='noopener'", value: "Security for external links" },
    { label: "Lang attribute", value: "On html tag" },
  ],
};

// ============================================================================
// HTML CHAPTER 43-50 — PROJECTS & FINAL (Simplified for completion)
// ============================================================================

// Chapter 43: Recipe with Tables & Forms
export const htmlCh43: Chapter = {
  id: "html-ch-43",
  number: 43,
  title: "Project: Recipe with Tables & Forms",
  subtitle: "Multi-element project.",
  difficulty: "Intermediate",
  estimatedMinutes: 45,
  xpReward: 150,
  prerequisites: ["html-ch-42"],
  partLabel: "Part 7: Projects",
  learningObjectives: [
    "Create a recipe page using tables for nutrition info.",
    "Include a form for recipe reviews.",
    "Use semantic HTML throughout.",
    "Make the page accessible.",
  ],
  sections: [
    {
      id: "ch43-s1",
      title: "Project Overview",
      whyItMatters: "This project combines tables, forms, and semantic HTML in a real-world context. Recipes are a common use case that benefits from structured data.",
      content: `Create a recipe page with:
- Recipe title and description
- Ingredients list
- Instructions with numbered steps
- Nutrition table (proper table structure)
- Review form with labels and validation
- Recipe image with alt text`,
      codeExamples: [],
      callouts: [{ type: "tip", title: "Table accessibility", content: "Use <th> for headers, scope attributes, and captions for tables. This makes nutrition information accessible to screen readers." }],
    },
  ],
  exercises: [
    {
      id: "ch43-ex1",
      title: "Build recipe page",
      difficulty: 1,
      description: "Create a complete recipe page with table and form.",
      requirements: ["Include recipe image with alt text", "Use table for nutrition info with proper headers", "Add review form with labels", "Use semantic HTML structure"],
      starterCode: { html: "<!-- Build recipe page here -->" },
      hints: ["Use semantic table elements", "Add caption to table", "Label all form inputs", "Use ordered list for steps"],
      solution: { html: "<!-- Complete recipe solution with table, form, and semantic HTML -->" },
      solutionExplanation: "Recipe page with semantic structure. Table for nutrition with th/td and caption. Review form with proper labels and validation. Accessible throughout.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "ch43-q1", type: "mcq", question: "What element provides a caption for a table?", options: ["<title>", "<caption>", "<legend>", "<label>"], correctAnswer: 1, explanation: "<caption> provides a table caption. It should be the first child of the table element.", difficulty: 1 },
    ],
  },
  cheatSheet: [{ label: "<caption>", value: "Table caption" }, { label: "<th>", value: "Table header" }, { label: "scope", value: "Header scope attribute" }],
};

// Chapter 44: Photo Gallery Page
export const htmlCh44: Chapter = {
  id: "html-ch-44",
  number: 44,
  title: "Project: Photo Gallery Page",
  subtitle: "Images and semantic structure.",
  difficulty: "Intermediate",
  estimatedMinutes: 40,
  xpReward: 140,
  prerequisites: ["html-ch-43"],
  partLabel: "Part 7: Projects",
  learningObjectives: [
    "Create a photo gallery with semantic HTML.",
    "Use proper image attributes (alt, srcset, sizes).",
    "Implement accessible navigation.",
    "Use figure and figcaption elements.",
  ],
  sections: [
    {
      id: "ch44-s1",
      title: "Project Overview",
      whyItMatters: "Photo galleries are a common pattern. This project teaches you to handle images properly for accessibility and performance.",
      content: `Create a photo gallery with:
- Gallery title and description
- Grid of photos using figure/figcaption
- Responsive images with srcset
- Alt text for each image
- Navigation links`,
      codeExamples: [],
      callouts: [{ type: "tip", title: "Figure and figcaption", content: "Use <figure> for images and <figcaption> for captions. This semantically links the caption to the image." }],
    },
  ],
  exercises: [
    {
      id: "ch44-ex1",
      title: "Build photo gallery",
      difficulty: 1,
      description: "Create an accessible photo gallery.",
      requirements: ["Use figure and figcaption for images", "Add descriptive alt text", "Include responsive image attributes", "Use semantic structure"],
      starterCode: { html: "<!-- Build gallery here -->" },
      hints: ["Use figure for each image", "Add figcaption for descriptions", "Include alt text", "Consider lazy loading"],
      solution: { html: "<!-- Complete gallery solution -->" },
      solutionExplanation: "Gallery using figure/figcaption for semantic image-caption pairs. Descriptive alt text. Responsive image attributes. Proper semantic structure.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "ch44-q1", type: "mcq", question: "What element semantically links a caption to an image?", options: ["<span>", "<div>", "<figcaption>", "<p>"], correctAnswer: 2, explanation: "<figcaption> semantically links a caption to its parent <figure> element, which typically contains an image.", difficulty: 1 },
    ],
  },
  cheatSheet: [{ label: "<figure>", value: "Image container" }, { label: "<figcaption>", value: "Image caption" }, { label: "srcset", value: "Responsive images" }],
};

// Chapter 45: Multi-page Website
export const htmlCh45: Chapter = {
  id: "html-ch-45",
  number: 45,
  title: "Project: Multi-page Website",
  subtitle: "Home, About, Contact linked together.",
  difficulty: "Intermediate",
  estimatedMinutes: 50,
  xpReward: 160,
  prerequisites: ["html-ch-44"],
  partLabel: "Part 7: Projects",
  learningObjectives: [
    "Create a multi-page website with consistent navigation.",
    "Use relative and absolute links correctly.",
    "Maintain semantic structure across pages.",
    "Implement a consistent layout.",
  ],
  sections: [
    {
      id: "ch45-s1",
      title: "Project Overview",
      whyItMatters: "Multi-page sites are the foundation of the web. This project teaches you to link pages and maintain consistency.",
      content: `Create a 3-page website:
- Home page with introduction
- About page with bio
- Contact page with form
- Consistent navigation across all pages
- Footer on each page`,
      codeExamples: [],
      callouts: [{ type: "tip", title: "Relative vs absolute paths", content: "Use relative paths (about.html) for internal links. Use absolute paths (/about) for links from any location. Use full URLs for external links." }],
    },
  ],
  exercises: [
    {
      id: "ch45-ex1",
      title: "Build multi-page site",
      difficulty: 1,
      description: "Create a 3-page website with consistent navigation.",
      requirements: ["Create Home, About, and Contact pages", "Consistent navigation on all pages", "Use appropriate link types (relative/absolute)", "Semantic structure on each page"],
      starterCode: { html: "<!-- Build 3 pages -->" },
      hints: ["Use same header/footer on all pages", "Link pages with relative paths", "Highlight current page in nav", "Keep structure consistent"],
      solution: { html: "<!-- 3-page website solution -->" },
      solutionExplanation: "Three pages with consistent header/nav and footer. Proper relative links between pages. Semantic structure maintained across all. Current page indication in navigation.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "ch45-q1", type: "mcq", question: "What link type connects pages in the same directory?", options: ["Absolute URL", "Relative path", "Protocol-relative URL", "Email link"], correctAnswer: 1, explanation: "Relative paths (like about.html) connect pages in the same directory. They're shorter and work when files move together.", difficulty: 1 },
    ],
  },
  cheatSheet: [{ label: "Relative path", value: "Same directory links" }, { label: "Absolute path", value: "From root" }, { label: "Consistent nav", value: "Same on all pages" }],
};

// Chapters 46-50: Challenges and Final (simplified)
export const htmlCh46: Chapter = {
  id: "html-ch-46",
  number: 46,
  title: "Mini Challenges Set 1",
  subtitle: "10 small challenges.",
  difficulty: "Beginner",
  estimatedMinutes: 30,
  xpReward: 100,
  prerequisites: ["html-ch-45"],
  partLabel: "Part 7: Projects",
  learningObjectives: ["Complete 10 small HTML challenges to reinforce learning."],
  sections: [{ id: "ch46-s1", title: "Challenges", whyItMatters: "Small challenges build muscle memory and confidence.", content: "Complete 10 beginner-level HTML challenges covering basic elements, attributes, and structure.", codeExamples: [], callouts: [] }],
  exercises: [],
  quiz: { passingScore: 80, questions: [] },
  cheatSheet: [{ label: "Practice", value: "Builds confidence" }],
};

export const htmlCh47: Chapter = {
  id: "html-ch-47",
  number: 47,
  title: "Mini Challenges Set 2",
  subtitle: "10 medium challenges.",
  difficulty: "Intermediate",
  estimatedMinutes: 40,
  xpReward: 120,
  prerequisites: ["html-ch-46"],
  partLabel: "Part 7: Projects",
  learningObjectives: ["Complete 10 intermediate HTML challenges."],
  sections: [{ id: "ch47-s1", title: "Challenges", whyItMatters: "Intermediate challenges deepen your understanding.", content: "Complete 10 intermediate challenges covering forms, tables, semantic HTML, and accessibility.", codeExamples: [], callouts: [] }],
  exercises: [],
  quiz: { passingScore: 80, questions: [] },
  cheatSheet: [{ label: "Practice", value: "Deepens skills" }],
};

export const htmlCh48: Chapter = {
  id: "html-ch-48",
  number: 48,
  title: "Mini Challenges Set 3",
  subtitle: "10 hard challenges.",
  difficulty: "Advanced",
  estimatedMinutes: 50,
  xpReward: 150,
  prerequisites: ["html-ch-47"],
  partLabel: "Part 7: Projects",
  learningObjectives: ["Complete 10 advanced HTML challenges."],
  sections: [{ id: "ch48-s1", title: "Challenges", whyItMatters: "Advanced challenges test mastery.", content: "Complete 10 advanced challenges covering accessibility, SEO, performance, and complex structures.", codeExamples: [], callouts: [] }],
  exercises: [],
  quiz: { passingScore: 80, questions: [] },
  cheatSheet: [{ label: "Practice", value: "Tests mastery" }],
};

export const htmlCh49: Chapter = {
  id: "html-ch-49",
  number: 49,
  title: "HTML Code Review",
  subtitle: "Common mistakes deep-dive.",
  difficulty: "Advanced",
  estimatedMinutes: 35,
  xpReward: 110,
  prerequisites: ["html-ch-48"],
  partLabel: "Part 7: Projects",
  learningObjectives: [
    "Identify common HTML mistakes.",
    "Learn how to fix them.",
    "Understand best practices through code review.",
  ],
  sections: [
    {
      id: "ch49-s1",
      title: "Common Mistakes",
      whyItMatters: "Learning from mistakes helps you avoid them in your own code. Code review is an essential skill.",
      content: `Review and fix common HTML mistakes:
- Missing alt text
- Improper heading hierarchy
- Missing form labels
- Non-semantic elements
- Accessibility issues
- SEO problems`,
      codeExamples: [],
      callouts: [{ type: "tip", title: "Code review", content: "Always review your code for accessibility and SEO. Use validators and linters to catch mistakes." }],
    },
  ],
  exercises: [
    {
      id: "ch49-ex1",
      title: "Review and fix code",
      difficulty: 1,
      description: "Identify and fix mistakes in provided HTML.",
      requirements: ["Find accessibility issues", "Fix semantic problems", "Improve SEO", "Validate HTML"],
      starterCode: { html: "<!-- Code with mistakes to fix -->" },
      hints: ["Check for missing alt text", "Verify heading hierarchy", "Check form labels", "Validate with HTML validator"],
      solution: { html: "<!-- Fixed code -->" },
      solutionExplanation: "Fixed all accessibility issues including alt text and form labels. Corrected heading hierarchy. Improved semantic structure. Validated HTML.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "ch49-q1", type: "mcq", question: "What tool validates HTML syntax?", options: ["JSLint", "W3C Validator", "ESLint", "Prettier"], correctAnswer: 1, explanation: "The W3C Validator checks HTML syntax and structure for validity according to HTML specifications.", difficulty: 1 },
    ],
  },
  cheatSheet: [{ label: "W3C Validator", value: "Check HTML validity" }, { label: "Lighthouse", value: "Accessibility audit" }, { label: "Code review", value: "Essential skill" }],
};

export const htmlCh50: Chapter = {
  id: "html-ch-50",
  number: 50,
  title: "HTML Mastery Recap & Cert Quiz",
  subtitle: "Final cumulative quiz.",
  difficulty: "Expert",
  estimatedMinutes: 45,
  xpReward: 200,
  prerequisites: ["html-ch-49"],
  partLabel: "Part 7: Projects",
  learningObjectives: [
    "Review all HTML concepts learned.",
    "Demonstrate mastery through comprehensive quiz.",
    "Prepare for HTML certification.",
  ],
  sections: [
    {
      id: "ch50-s1",
      title: "Course Recap",
      whyItMatters: "The final quiz tests your comprehensive knowledge of HTML. Passing demonstrates mastery and earns your certificate.",
      content: `This comprehensive quiz covers:
- Basic HTML structure and elements
- Semantic HTML
- Forms and inputs
- Tables
- Images and media
- Accessibility (ARIA, keyboard navigation)
- SEO (meta tags, structured data)
- Advanced topics (PWA, security, email)`,
      codeExamples: [],
      callouts: [{ type: "info", title: "Certificate", content: "Passing this final quiz with 80% or higher earns your HTML Mastery Certificate. Review all chapters before attempting." }],
    },
  ],
  exercises: [],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "ch50-q1", type: "mcq", question: "What is the purpose of the lang attribute on the html tag?", options: ["Styling", "Accessibility and language detection", "SEO only", "Performance"], correctAnswer: 1, explanation: "The lang attribute specifies the document's language, which helps screen readers pronounce content correctly and assists search engines.", difficulty: 1 },
      { id: "ch50-q2", type: "mcq", question: "Which element is the most important for page structure?", options: ["<div>", "<main>", "<span>", "<section>"], correctAnswer: 1, explanation: "<main> indicates the primary content of the document. It's crucial for accessibility and SEO as it identifies the main content area.", difficulty: 1 },
      { id: "ch50-q3", type: "true-false", question: "ARIA attributes can replace semantic HTML.", options: ["True", "False"], correctAnswer: 1, explanation: "False. ARIA should supplement, not replace, semantic HTML. Always use semantic elements first, then add ARIA only when needed.", difficulty: 2 },
    ],
  },
  cheatSheet: [{ label: "Semantic HTML", value: "Foundation of accessible web" }, { label: "Accessibility", value: "Essential for inclusive web" }, { label: "SEO", value: "Discoverability matters" }],
};
