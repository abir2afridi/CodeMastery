import type { Chapter } from "./types";

// ============================================================================
// HTML CHAPTER 16 — SEMANTIC HTML: WHY STRUCTURE MATTERS
// ============================================================================
export const htmlCh16: Chapter = {
  id: "html-ch-16",
  number: 16,
  title: "Semantic HTML — Why Structure Matters",
  subtitle: "Beyond div soup: writing HTML that machines and humans can understand.",
  difficulty: "Beginner",
  estimatedMinutes: 45,
  xpReward: 120,
  prerequisites: ["html-ch-15"],
  partLabel: "Part 2: Structure & Layout",
  learningObjectives: [
    "Explain what semantic HTML is and why it matters for accessibility, SEO, and maintainability.",
    "Choose the correct semantic element for common content patterns (articles, sections, nav, aside, header, footer).",
    "Distinguish between structural semantics and presentational semantics.",
    "Avoid the common mistake of using divs and spans when semantic elements would be more appropriate.",
    "Use HTML5 semantic elements to create a clear document outline.",
  ],
  sections: [
    {
      id: "ch16-s1",
      title: "What Semantic HTML Actually Means",
      whyItMatters: "Semantic HTML is the difference between a page that works and a page that works WELL for everyone — users, search engines, screen readers, and future developers. Without semantics, your HTML is just a pile of unlabeled boxes.",
      realWorldAnalogy: "Think of a library. If every book had a plain white cover with no title, author, or genre, you'd have to open every single book to find what you need. Semantic HTML is like proper book covers, spines, and Dewey decimal system — it tells everyone what each part is without opening it.",
      content: `Semantic HTML means using HTML elements for their intended purpose, not just for how they look. The word "semantic" comes from linguistics — it's about meaning. A semantic element clearly communicates its purpose to both humans reading the code and machines parsing the page.

When you use \`<div>\` and \`<span>\` for everything, you're creating what developers call "div soup" — a structure that's technically functional but conveys zero meaning. The browser knows it's a box, but it doesn't know if that box is a navigation menu, an article, a sidebar, or a footer. Screen readers can't announce it properly. Search engines can't understand the content hierarchy. Other developers have to read through every class name to guess what something is.

HTML5 introduced a rich set of semantic elements that solve this problem: \`<header>\`, \`<nav>\`, \`<main>\`, \`<article>\`, \`<section>\`, \`<aside>\`, \`<footer>\`, \`<figure>\`, \`<figcaption>\`, \`<time>\`, \`<mark>\`, and more. Each of these has a defined meaning in the HTML specification. When you use them correctly, you're building a page that's accessible by design, SEO-friendly by default, and maintainable by convention.

The key principle: **describe your content, not your design.** If something is a navigation menu, use \`<nav>\`. If it's the main content area, use \`<main>\`. If it's an article or blog post, use \`<article>\`. Use CSS to make it look however you want, but let HTML describe what it IS.`,
      codeExamples: [
        {
          id: "ch16-s1-ex1",
          title: "Div soup vs semantic HTML",
          description: "The same layout implemented with generic divs versus semantic elements.",
          code: {
            html: `<!-- BAD: Div soup -->
<div class="header">
  <div class="logo">MySite</div>
  <div class="nav">
    <a href="/">Home</a>
    <a href="/about">About</a>
  </div>
</div>
<div class="content">
  <div class="article">
    <h1>Article Title</h1>
    <p>Article content...</p>
  </div>
  <div class="sidebar">
    <h3>Related</h3>
    <ul><li><a href="#">Link 1</a></li></ul>
  </div>
</div>
<div class="footer">© 2024</div>

<!-- GOOD: Semantic HTML -->
<header>
  <div class="logo">MySite</div>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>
<main>
  <article>
    <h1>Article Title</h1>
    <p>Article content...</p>
  </article>
  <aside>
    <h3>Related</h3>
    <ul><li><a href="#">Link 1</a></li></ul>
  </aside>
</main>
<footer>© 2024</footer>`,
          },
          explanation: "The semantic version is immediately readable. A screen reader user can jump to the navigation, the main content, or the footer with a single keystroke. Search engines understand the content hierarchy. Future developers know what each section is without reading class names.",
          tryItPrompt: "Try adding a second article to the semantic version and wrapping both articles in a <section> element.",
        },
      ],
      callouts: [
        { type: "info", title: "Semantic vs presentational", content: "Semantic elements describe WHAT content is (article, nav, footer). Presentational elements describe HOW it should look (b, i, u). HTML5 deprecated most presentational elements — use CSS for presentation, HTML for semantics." },
        { type: "warning", title: "Don't over-semantify", content: "Not everything needs a semantic tag. If you're wrapping content purely for styling, <div> and <span> are still the right tools. Use semantics when there's meaning to convey." },
      ],
    },
    {
      id: "ch16-s2",
      title: "The Document Outline Algorithm",
      whyItMatters: "Search engines and assistive technologies use the document outline to understand content hierarchy. A proper outline makes your content more discoverable and navigable.",
      realWorldAnalogy: "A table of contents in a book tells you the structure at a glance. The document outline is the web's table of contents — it tells machines how your content is organized.",
      content: `HTML documents have an inherent structure based on headings (\`<h1>\` through \`<h6>\`). The document outline algorithm is the formal way browsers and tools derive the structure from these headings. A well-structured outline has a single \`<h1>\` (the page title), followed by \`<h2>\`s for major sections, \`<h3>\`s for subsections, and so on — never skipping levels.

Semantic sections (\`<section>\`, \`<article>\`, \`<aside>\`, \`<nav>\`) can each have their own \`<h1>\` through \`<h6>\` hierarchy. This is powerful: an article can have its own \`<h1>\` for its title, without conflicting with the page's main \`<h1>\`. The outline algorithm treats each section as a self-contained document.

However, there's a catch: the current HTML outline algorithm has a flaw. It only considers \`<section>\`, \`<article>\`, \`<aside>\`, \`<nav>\` — not \`<div>\`. And many developers don't use sectioning elements correctly. As a result, most tools (including screen readers) actually ignore the outline algorithm and just read headings in order. This means: **nest your headings logically regardless of sectioning elements.** If you have an \`<h2>\`, the next heading should be either another \`<h2>\` (sibling) or an \`<h3>\` (child), never an \`<h4>\` or \`<h1>\` (which would skip levels).

The practical rule: use \`<h1>\` once per page for the main title. Use \`<h2>\` for major sections. Use \`<h3>\` for subsections of those sections. Never skip heading levels. Sectioning elements help organize your code, but logical heading nesting is what actually matters for accessibility and SEO.`,
      codeExamples: [
        {
          id: "ch16-s2-ex1",
          title: "Proper heading hierarchy",
          description: "A page with a clear, logical heading structure.",
          code: {
            html: `<!DOCTYPE html>
<html>
  <head><title>Blog Post</title></head>
  <body>
    <header>
      <h1>My Awesome Blog</h1>
      <nav>...</nav>
    </header>
    
    <main>
      <article>
        <h2>Understanding Semantic HTML</h2>
        <p>Intro paragraph...</p>
        
        <h3>What Semantic HTML Means</h3>
        <p>Content...</p>
        
        <h3>Why It Matters</h3>
        <p>Content...</p>
        
        <h2>Common Semantic Elements</h3>
        <p>Content...</p>
        
        <h3>The header Element</h3>
        <p>Content...</p>
        
        <h3>The nav Element</h3>
        <p>Content...</p>
      </article>
      
      <aside>
        <h2>Related Posts</h2>
        <ul>...</ul>
      </aside>
    </main>
    
    <footer>
      <h2>Footer Navigation</h2>
      <nav>...</nav>
    </footer>
  </body>
</html>`,
          },
          explanation: "Notice the pattern: h1 → h2 → h3 → h3 → h2 → h3 → h3. No levels are skipped. The aside can have its own h2 because it's a separate section of content. This structure is immediately navigable with screen reader shortcuts.",
          tryItPrompt: "Try adding an h4 under one of the h3 sections to create a deeper level, then add another h3 to return to the previous level.",
        },
      ],
      callouts: [
        { type: "common-mistake", title: "Multiple h1s on a page", content: "Old SEO advice suggested multiple h1s for keyword stuffing. This is wrong. Use one h1 per page for the main title. It's better for accessibility and modern search engines understand single-h1 structure better." },
      ],
    },
  ],
  exercises: [
    {
      id: "ch16-ex1",
      title: "Convert div soup to semantic HTML",
      difficulty: 1,
      description: "Take a page built entirely with divs and convert it to use proper semantic elements.",
      requirements: ["Replace generic divs with semantic elements where appropriate", "Maintain the same visual layout (we'll add CSS later)", "Ensure heading hierarchy is logical", "Include at least: header, nav, main, article, aside, footer"],
      starterCode: {
        html: `<div class="page">
  <div class="top-bar">
    <div class="brand">TechBlog</div>
    <div class="menu">
      <a href="#">Home</a>
      <a href="#">Articles</a>
      <a href="#">About</a>
    </div>
  </div>
  
  <div class="main-area">
    <div class="post">
      <h1>10 Tips for Better Code</h1>
      <p>Writing clean code is an art...</p>
      <h2>Tip 1: Name Things Well</h2>
      <p>Good names make code self-documenting...</p>
      <h2>Tip 2: Keep Functions Small</h2>
      <p>Small functions are easier to test...</p>
    </div>
    
    <div class="side-panel">
      <h3>Popular Articles</h3>
      <ul>
        <li><a href="#">CSS Grid Guide</a></li>
        <li><a href="#">JavaScript Promises</a></li>
      </ul>
    </div>
  </div>
  
  <div class="bottom-bar">
    <p>© 2024 TechBlog</p>
    <div class="footer-links">
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
    </div>
  </div>
</div>`,
      },
      hints: [
        "The top-bar with brand and menu is clearly a header with navigation",
        "The post with its own heading and subsections is an article",
        "The side-panel with related content is an aside",
        "The bottom-bar with copyright is a footer",
        "Wrap the main content area in a main element",
      ],
      solution: {
        html: `<header>
  <div class="brand">TechBlog</div>
  <nav>
    <a href="#">Home</a>
    <a href="#">Articles</a>
    <a href="#">About</a>
  </nav>
</header>

<main>
  <article>
    <h1>10 Tips for Better Code</h1>
    <p>Writing clean code is an art...</p>
    <h2>Tip 1: Name Things Well</h2>
    <p>Good names make code self-documenting...</p>
    <h2>Tip 2: Keep Functions Small</h2>
    <p>Small functions are easier to test...</p>
  </article>
  
  <aside>
    <h3>Popular Articles</h3>
    <ul>
      <li><a href="#">CSS Grid Guide</a></li>
      <li><a href="#">JavaScript Promises</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>© 2024 TechBlog</p>
  <nav>
    <a href="#">Privacy</a>
    <a href="#">Terms</a>
  </nav>
</footer>`,
      },
      solutionExplanation: "The semantic version is immediately readable. The header contains branding and navigation. The main element wraps the primary content, with the article containing the blog post and aside containing related content. The footer contains copyright and footer navigation. Screen readers can now jump between these regions with standard shortcuts.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch16-q1",
        type: "mcq",
        question: "What is the primary purpose of semantic HTML?",
        options: [
          "To make pages look better",
          "To convey meaning about content structure and purpose",
          "To reduce file size",
          "To make JavaScript easier to write",
        ],
        correctAnswer: 1,
        explanation: "Semantic HTML is about meaning — describing WHAT content is, not HOW it looks. This benefits accessibility, SEO, and code maintainability. Visual styling is the job of CSS.",
        difficulty: 1,
      },
      {
        id: "ch16-q2",
        type: "mcq",
        question: "Which element should you use for the main navigation menu of a page?",
        options: ["<div class='nav'>", "<menu>", "<nav>", "<navigation>"],
        correctAnswer: 2,
        explanation: "<nav> is the semantic HTML5 element for navigation links. It tells browsers and assistive technologies that this section contains major navigation links for the page or site.",
        difficulty: 1,
      },
      {
        id: "ch16-q3",
        type: "mcq",
        question: "What is 'div soup' and why is it problematic?",
        options: [
          "A CSS framework for styling divs",
          "Using too many div elements instead of semantic elements",
          "A technique for creating soup-like animations",
          "Using divs for soup recipe websites",
        ],
        correctAnswer: 1,
        explanation: "Div soup refers to overusing generic div elements when semantic elements would be more appropriate. It makes code harder to read, harder for screen readers to navigate, and harder for search engines to understand content structure.",
        difficulty: 1,
      },
      {
        id: "ch16-q4",
        type: "true-false",
        question: "Each sectioning element (section, article, aside, nav) can have its own h1 heading.",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation: "True. According to the HTML outline algorithm, each sectioning element creates its own heading context. This means an article can have an h1 for its title without conflicting with the page's main h1. However, for screen reader compatibility, logical heading nesting is still important.",
        difficulty: 2,
      },
      {
        id: "ch16-q5",
        type: "mcq",
        question: "Which heading hierarchy is correct for a page with a main title and two major sections?",
        options: [
          "h1, h3, h3",
          "h1, h2, h2",
          "h2, h3, h3",
          "h1, h1, h1",
        ],
        correctAnswer: 1,
        explanation: "The correct hierarchy is h1 (main title), h2 (first major section), h2 (second major section). Never skip heading levels — going from h1 to h3 would skip h2, which confuses screen readers and breaks the document outline.",
        difficulty: 1,
      },
      {
        id: "ch16-q6",
        type: "mcq",
        question: "When should you use a <div> element?",
        options: [
          "Never, always use semantic elements",
          "When you need to wrap content purely for styling purposes",
          "Only for navigation menus",
          "For all text content",
        ],
        correctAnswer: 1,
        explanation: "<div> is still useful when you need to group content purely for styling or JavaScript manipulation, with no semantic meaning. Don't overuse it, but don't avoid it entirely when it's the right tool for the job.",
        difficulty: 2,
      },
      {
        id: "ch16-q7",
        type: "mcq",
        question: "Which semantic element is most appropriate for a blog post or news article?",
        options: ["<section>", "<div class='article'>", "<article>", "<post>"],
        correctAnswer: 2,
        explanation: "<article> is designed for self-contained content that could be distributed independently — like blog posts, news articles, or forum posts. It has semantic meaning that <section> (a thematic grouping) and <div> (generic container) lack.",
        difficulty: 1,
      },
      {
        id: "ch16-q8",
        type: "mcq",
        question: "Why is semantic HTML important for SEO?",
        options: [
          "It makes pages load faster",
          "It helps search engines understand content structure and relevance",
          "It automatically ranks pages #1 on Google",
          "It reduces server costs",
        ],
        correctAnswer: 1,
        explanation: "Search engines use semantic HTML to understand page structure, identify important content, and determine relevance. Proper use of elements like <article>, <h1>, <nav>, and <time> helps search engines better index and rank your content.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Page header", value: "<header>" },
    { label: "Navigation links", value: "<nav>" },
    { label: "Primary content", value: "<main>" },
    { label: "Self-contained content", value: "<article>" },
    { label: "Thematic grouping", value: "<section>" },
    { label: "Tangentially related", value: "<aside>" },
    { label: "Page footer", value: "<footer>" },
    { label: "One h1 per page", value: "Heading hierarchy rule" },
  ],
};

// ============================================================================
// HTML CHAPTER 17 — THE HEADER ELEMENT
// ============================================================================
export const htmlCh17: Chapter = {
  id: "html-ch-17",
  number: 17,
  title: "The Header Element",
  subtitle: "Page and section headers: more than just the top of the page.",
  difficulty: "Beginner",
  estimatedMinutes: 30,
  xpReward: 100,
  prerequisites: ["html-ch-16"],
  partLabel: "Part 2: Structure & Layout",
  learningObjectives: [
    "Understand when to use <header> versus when to use <head>.",
    "Use <header> for page headers, article headers, and section headers appropriately.",
    "Know which elements belong inside a header and which don't.",
    "Avoid common mistakes like nesting headers improperly or using them purely for styling.",
  ],
  sections: [
    {
      id: "ch17-s1",
      title: "Header vs Head: What's the Difference?",
      whyItMatters: "Confusing <header> with <head> is one of the most common beginner mistakes. They serve completely different purposes, and using the wrong one breaks your page.",
      realWorldAnalogy: "<head> is like the back of a book — it has the ISBN, publisher info, copyright date. <header> is like the book's cover page — it has the title, author name, and maybe a blurb. One is metadata about the document, the other is visible content at the start.",
      content: `<head> and <header> are easy to confuse because they sound similar, but they're fundamentally different:

**<head>** goes in the HTML document's head section (between \`<html>\` and \`<body>\`). It contains metadata about the page: title, meta tags, links to stylesheets, scripts that should run before the page renders. Nothing in \`<head>\` is visible to users (except the title which appears in the browser tab). You can only have one \`<head>\` per document, and it must be the first child of \`<html>\`.

**<header>** is a visible element that goes inside \`<body>\`. It represents introductory content or navigational aids for its nearest ancestor sectioning element. A header can contain headings, logos, navigation links, search forms, author information, publication dates, and more. You can have multiple \`<header>\` elements on a page — one for the page itself, and one for each article, section, or aside that needs a header.

The key distinction: \`<head>\` is for invisible metadata about the entire document. \`<header>\` is for visible introductory content for a specific section of the page. Never put \`<header>\` inside \`<head>\`, and never put page metadata inside \`<header>\`.`,
      codeExamples: [
        {
          id: "ch17-s1-ex1",
          title: "Head vs Header in context",
          description: "Showing both elements in their proper places.",
          code: {
            html: `<!DOCTYPE html>
<html>
  <head>
    <!-- This is HEAD: metadata about the page -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Blog Post</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <!-- This is HEADER: visible introductory content -->
    <header>
      <h1>My Awesome Blog</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
    
    <main>
      <article>
        <!-- This header belongs to the article -->
        <header>
          <h2>Understanding HTML Elements</h2>
          <p class="meta">By Jane Doe · January 15, 2024</p>
        </header>
        <p>Article content...</p>
      </article>
    </main>
  </body>
</html>`,
          },
          explanation: "The <head> contains meta information that browsers and search engines need. The <header> elements contain visible content: one for the page (with site title and navigation), one for the article (with article title and metadata). Each serves its purpose in the correct location.",
          tryItPrompt: "Try adding another article with its own header, and notice how multiple headers can coexist on one page.",
        },
      ],
      callouts: [
        { type: "common-mistake", title: "Putting header in head", content: "Never put <header> inside <head>. The <head> is for invisible metadata only. <header> is visible content and must go inside <body>." },
        { type: "tip", title: "Headers are optional", content: "Not every section needs a header. Use <header> when you actually have introductory content or navigation to group. If a section just starts with content, a header isn't necessary." },
      ],
    },
    {
      id: "ch17-s2",
      title: "What Goes Inside a Header?",
      whyItMatters: "A header is only as useful as its contents. Knowing what belongs in a header helps you structure pages effectively.",
      content: `Headers can contain a variety of content, but they should always be introductory or navigational in nature. Common contents include:

- **Headings**: Usually \`<h1>\` through \`<h6>\`. The heading should describe the section the header belongs to.
- **Logos or branding**: Often wrapped in a link to the homepage.
- **Navigation links**: The \`<nav>\` element is commonly nested inside headers.
- **Search forms**: Many sites have a search box in the header.
- **Metadata about the content**: For articles, this might include author name, publication date, category tags.
- **Introductory text**: A brief description or subtitle.
- **Social links**: Icons linking to social media profiles.

What should NOT go in a header:
- Main content paragraphs (those belong in the body of the section)
- Multiple unrelated content blocks (keep headers focused)
- Interactive elements unrelated to navigation (like a contact form)

A header doesn't have to contain all of these — use what makes sense for your content. A simple article might just have a heading and byline. A page header might have logo, navigation, and search. Keep it focused on introduction and navigation.`,
    },
  ],
  exercises: [
    {
      id: "ch17-ex1",
      title: "Create a page with multiple headers",
      difficulty: 1,
      description: "Build a page with a main header and an article that has its own header.",
      requirements: ["Include a page header with site title and navigation", "Include an article with its own header containing title and metadata", "Use proper heading hierarchy throughout", "Keep the <head> separate from all <header> elements"],
      starterCode: {
        html: `<!DOCTYPE html>
<html>
  <head>
    <!-- Add appropriate meta tags here -->
  </head>
  <body>
    <!-- Add page header here -->
    
    <main>
      <article>
        <!-- Add article header here -->
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </article>
    </main>
  </body>
</html>`,
      },
      hints: [
        "The <head> needs at minimum: meta charset, viewport meta tag, and title",
        "The page header should have an h1 for the site name",
        "The article header should have an h2 for the article title",
        "Include navigation links in the page header",
      ],
      solution: {
        html: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Tech Blog</title>
  </head>
  <body>
    <header>
      <h1>My Tech Blog</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/articles">Articles</a>
        <a href="/about">About</a>
      </nav>
    </header>
    
    <main>
      <article>
        <header>
          <h2>Getting Started with HTML</h2>
          <p class="meta">By Alex Developer · Published January 15, 2024</p>
        </header>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </article>
    </main>
  </body>
</html>`,
      },
      solutionExplanation: "The <head> contains essential metadata. The page header has an h1 for the site name and navigation. The article has its own header with an h2 for the article title and a paragraph with metadata. This creates a clear hierarchy: page header (h1) → article header (h2).",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch17-q1",
        type: "mcq",
        question: "Where does the <head> element belong in an HTML document?",
        options: [
          "Inside <body>",
          "As a child of <html>, before <body>",
          "Inside <header>",
          "At the end of the document",
        ],
        correctAnswer: 1,
        explanation: "<head> must be a direct child of <html> and must come before <body>. It contains metadata about the document and is never visible to users.",
        difficulty: 1,
      },
      {
        id: "ch17-q2",
        type: "mcq",
        question: "What type of content belongs in a <header> element?",
        options: [
          "Main content paragraphs",
          "Introductory content and navigation",
          "Only images",
          "Contact forms",
        ],
        correctAnswer: 1,
        explanation: "Headers contain introductory content (headings, logos, descriptions) and navigational aids (nav links, search forms). They should not contain the main body content of a section.",
        difficulty: 1,
      },
      {
        id: "ch17-q3",
        type: "true-false",
        question: "You can have multiple <header> elements on a single page.",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation: "True. You can have multiple headers — one for the page, and one for each article, section, or aside that needs introductory content. Each header belongs to its nearest sectioning ancestor.",
        difficulty: 1,
      },
      {
        id: "ch17-q4",
        type: "mcq",
        question: "Which of the following is NOT appropriate content for a header?",
        options: [
          "A heading describing the section",
          "Navigation links",
          "The main body paragraphs of an article",
          "A logo",
        ],
        correctAnswer: 2,
        explanation: "Main body paragraphs belong in the content area of a section, not in the header. Headers are for introductory and navigational content only.",
        difficulty: 1,
      },
      {
        id: "ch17-q5",
        type: "mcq",
        question: "What is the primary purpose of the <head> element?",
        options: [
          "To display the page title at the top",
          "To contain metadata about the document",
          "To create a header bar",
          "To style the page",
        ],
        correctAnswer: 1,
        explanation: "<head> contains metadata: the page title, character encoding, viewport settings, links to stylesheets, and more. This information is used by browsers and search engines, not displayed as page content.",
        difficulty: 1,
      },
    ],
  },
  cheatSheet: [
    { label: "Document metadata", value: "<head>" },
    { label: "Visible intro content", value: "<header>" },
    { label: "head goes in html", value: "Before body" },
    { label: "header goes in body", value: "Inside sections" },
    { label: "Multiple headers OK", value: "One per section" },
  ],
};

// ============================================================================
// HTML CHAPTER 18 — THE NAV ELEMENT
// ============================================================================
export const htmlCh18: Chapter = {
  id: "html-ch-18",
  number: 18,
  title: "The Nav Element",
  subtitle: "Navigation links: helping users find their way around your site.",
  difficulty: "Beginner",
  estimatedMinutes: 35,
  xpReward: 110,
  prerequisites: ["html-ch-17"],
  partLabel: "Part 2: Structure & Layout",
  learningObjectives: [
    "Use the <nav> element to mark up major navigation sections of a page.",
    "Distinguish between major navigation that belongs in <nav> and minor link groups that don't.",
    "Understand the accessibility benefits of proper nav markup.",
    "Create accessible navigation patterns with ARIA landmarks.",
  ],
  sections: [
    {
      id: "ch18-s1",
      title: "What Belongs in a Nav?",
      whyItMatters: "Proper navigation markup makes your site significantly more accessible. Screen reader users can jump directly to navigation sections, and proper structure helps everyone understand how to move through your site.",
      realWorldAnalogy: "Think of a nav like a restaurant menu. It's a organized list of options that tells you what's available and where to go. A good nav is like a well-organized menu — clear, grouped logically, and easy to scan.",
      content: `The \`<nav>\` element represents a section of a page with navigation links. Not every group of links should be wrapped in \`<nav>\` — use it for major navigation blocks only.

**What belongs in \`<nav>\`:**
- The main site navigation (home, about, contact, etc.)
- Breadcrumb navigation
- Pagination links
- Table of contents for long articles
- Sidebar navigation within a section

**What does NOT belong in \`<nav>\`:**
- A list of related articles in a footer (use \`<footer>\` instead)
- Social media icon links in a header (these are often considered secondary)
- A single "back to top" link
- Links within the main content that are part of the narrative

The key question to ask: **Is this a major navigational section that users would want to jump to directly?** If yes, use \`<nav>\`. If it's just a group of links that happens to be together, don't use it.

You can have multiple \`<nav>\` elements on a page — one for the main navigation, one for breadcrumbs, one for a sidebar menu, etc. Each \`<nav>\` should have an \`aria-label\` or \`aria-labelledby\` attribute to distinguish it from other navs for screen reader users.`,
      codeExamples: [
        {
          id: "ch18-s1-ex1",
          title: "Multiple nav elements with labels",
          description: "A page with main navigation, breadcrumbs, and sidebar nav.",
          code: {
            html: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Documentation Site</title>
  </head>
  <body>
    <header>
      <!-- Main site navigation -->
      <nav aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/docs">Documentation</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
    
    <main>
      <!-- Breadcrumb navigation -->
      <nav aria-label="Breadcrumb">
        <a href="/">Home</a> &gt;
        <a href="/docs">Documentation</a> &gt;
        <span>Getting Started</span>
      </nav>
      
      <div class="content-wrapper">
        <article>
          <h1>Getting Started Guide</h1>
          <p>Main content...</p>
        </article>
        
        <aside>
          <!-- Sidebar navigation for this section -->
          <nav aria-label="Documentation sections">
            <h3>On this page</h3>
            <ul>
              <li><a href="#intro">Introduction</a></li>
              <li><a href="#install">Installation</a></li>
              <li><a href="#config">Configuration</a></li>
            </ul>
          </nav>
        </aside>
      </div>
    </main>
  </body>
</html>`,
          },
          explanation: "This page has three nav elements, each with a unique aria-label. Screen reader users hear 'Main navigation', 'Breadcrumb', and 'Documentation sections' to distinguish between them. This makes navigation much more efficient than hearing 'Navigation' three times.",
          tryItPrompt: "Try adding a footer with a 'Quick links' section. Should that be wrapped in <nav>? Consider whether it's major navigation or just a convenience.",
        },
      ],
      callouts: [
        { type: "info", title: "ARIA labels are crucial", content: "Always include aria-label or aria-labelledby on <nav> elements when you have more than one on a page. This helps screen reader users distinguish between different navigation sections." },
        { type: "common-mistake", title: "Overusing nav", content: "Don't wrap every group of links in <nav>. Reserve it for major navigation blocks. A footer with 'Terms', 'Privacy', and 'Contact' links typically doesn't need <nav> — it's part of the footer's content." },
      ],
    },
    {
      id: "ch18-s2",
      title: "Navigation Patterns and Best Practices",
      whyItMatters: "Good navigation isn't just about using the right element — it's about creating patterns users understand.",
      content: `Effective navigation follows established patterns that users have learned to expect. Here are common patterns and how to implement them:

**Horizontal top navigation**: The most common pattern. Typically an unordered list of links, often with the logo on the left. Use \`<nav>\` in the header with aria-label="Main navigation".

**Vertical sidebar navigation**: Common in documentation and dashboard layouts. Use \`<nav>\` in an \`<aside>\` with aria-label describing the section (e.g., "Documentation navigation").

**Breadcrumbs**: Show the user's location in the site hierarchy. Use \`<nav>\` with aria-label="Breadcrumb". The last item in the breadcrumb shouldn't be a link since it represents the current page.

**Pagination**: Links to navigate through multi-page content. Use \`<nav>\` with aria-label="Pagination". Include 'previous', 'next', and page number links.

**Table of contents**: Links to sections within a long page. Use \`<nav>\` with aria-label="Table of contents". Each link should point to an ID on the page.

**Skip links**: A 'skip to main content' link at the very top of the page, visible only when focused. This lets keyboard users bypass repetitive navigation. It's a best practice for accessibility.`,
      codeExamples: [
        {
          id: "ch18-s2-ex1",
          title: "Skip link implementation",
          description: "Adding a skip link for keyboard accessibility.",
          code: {
            html: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Accessible Page</title>
    <style>
      .skip-link {
        position: absolute;
        top: -40px;
        left: 0;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 100;
      }
      .skip-link:focus {
        top: 0;
      }
    </style>
  </head>
  <body>
    <!-- Skip link - only visible when focused -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <header>
      <nav aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
    
    <main id="main-content">
      <h1>Main Content</h1>
      <p>Content here...</p>
    </main>
  </body>
</html>`,
          },
          explanation: "The skip link is positioned off-screen by default but moves into view when focused. Keyboard users can press Tab once and jump straight to main content, bypassing the navigation. This is a simple but powerful accessibility improvement.",
          tryItPrompt: "Try tabbing through the page to see how the skip link appears when focused.",
        },
      ],
      callouts: [
        { type: "info", title: "Skip links are essential", content: "Skip links are one of the highest-impact accessibility features you can add. They cost almost nothing to implement but make a huge difference for keyboard and screen reader users." },
      ],
    },
  ],
  exercises: [
    {
      id: "ch18-ex1",
      title: "Build a page with multiple navigation sections",
      difficulty: 1,
      description: "Create a documentation-style page with main navigation, breadcrumbs, and a table of contents.",
      requirements: ["Include a header with main navigation", "Add breadcrumb navigation below the header", "Create a table of contents in a sidebar", "Use aria-label for each nav element", "Include a skip link at the top"],
      starterCode: {
        html: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Documentation</title>
  </head>
  <body>
    <!-- Add skip link here -->
    
    <header>
      <!-- Add main navigation here -->
    </header>
    
    <main>
      <!-- Add breadcrumbs here -->
      
      <div class="layout">
        <aside>
          <!-- Add table of contents here -->
        </aside>
        
        <article>
          <h1>Installation Guide</h1>
          <h2 id="requirements">System Requirements</h2>
          <p>Requirements text...</p>
          <h2 id="download">Downloading</h2>
          <p>Download text...</p>
          <h2 id="setup">Setup</h2>
          <p>Setup text...</p>
        </article>
      </div>
    </main>
  </body>
</html>`,
      },
      hints: [
        "The skip link should point to an id on the main element",
        "Use aria-label to distinguish between navigation types",
        "Breadcrumbs should show the path: Home > Docs > Installation",
        "Table of contents links should point to the h2 ids",
      ],
      solution: {
        html: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Documentation</title>
    <style>
      .skip-link {
        position: absolute;
        top: -40px;
        left: 0;
        background: #000;
        color: #fff;
        padding: 8px;
        z-index: 100;
      }
      .skip-link:focus {
        top: 0;
      }
    </style>
  </head>
  <body>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <header>
      <nav aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/docs">Documentation</a>
        <a href="/support">Support</a>
      </nav>
    </header>
    
    <main id="main-content">
      <nav aria-label="Breadcrumb">
        <a href="/">Home</a> &gt;
        <a href="/docs">Documentation</a> &gt;
        <span>Installation Guide</span>
      </nav>
      
      <div class="layout">
        <aside>
          <nav aria-label="Table of contents">
            <h3>On this page</h3>
            <ul>
              <li><a href="#requirements">System Requirements</a></li>
              <li><a href="#download">Downloading</a></li>
              <li><a href="#setup">Setup</a></li>
            </ul>
          </nav>
        </aside>
        
        <article>
          <h1>Installation Guide</h1>
          <h2 id="requirements">System Requirements</h2>
          <p>Requirements text...</p>
          <h2 id="download">Downloading</h2>
          <p>Download text...</p>
          <h2 id="setup">Setup</h2>
          <p>Setup text...</p>
        </article>
      </div>
    </main>
  </body>
</html>`,
      },
      solutionExplanation: "The skip link allows keyboard users to bypass navigation. Three nav elements are distinguished by unique aria-labels. Breadcrumbs show the page hierarchy. The table of contents links to section IDs, making it easy to jump to specific content.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch18-q1",
        type: "mcq",
        question: "Which of the following should be wrapped in a <nav> element?",
        options: [
          "A single 'back to top' link",
          "The main site navigation menu",
          "Social media links in a footer",
          "Links within a paragraph of text",
        ],
        correctAnswer: 1,
        explanation: "The main site navigation is a major navigational section and belongs in <nav>. Single links, footer links, and inline content links typically don't need <nav> unless they're part of a major navigation block.",
        difficulty: 1,
      },
      {
        id: "ch18-q2",
        type: "mcq",
        question: "Why should you add aria-label to <nav> elements?",
        options: [
          "It makes them look better",
          "It helps screen reader users distinguish between multiple navs",
          "It's required for the element to work",
          "It makes the links clickable",
        ],
        correctAnswer: 1,
        explanation: "When you have multiple <nav> elements on a page, aria-label provides a descriptive name for each (e.g., 'Main navigation', 'Breadcrumb', 'Table of contents'). Screen reader users can then distinguish between them.",
        difficulty: 1,
      },
      {
        id: "ch18-q3",
        type: "true-false",
        question: "A skip link should be visible at all times.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. Skip links are typically hidden off-screen and only become visible when focused (when a keyboard user tabs to them). This keeps the design clean while still providing the accessibility benefit.",
        difficulty: 2,
      },
      {
        id: "ch18-q4",
        type: "mcq",
        question: "What is the purpose of a skip link?",
        options: [
          "To skip to the next page",
          "To skip advertisements",
          "To allow keyboard users to skip repetitive navigation and jump to main content",
          "To skip the quiz",
        ],
        correctAnswer: 2,
        explanation: "Skip links let keyboard and screen reader users bypass navigation menus and jump directly to the main content. Without them, users would have to tab through every navigation link on every page.",
        difficulty: 1,
      },
      {
        id: "ch18-q5",
        type: "mcq",
        question: "In a breadcrumb navigation, the last item should be:",
        options: [
          "A link to the homepage",
          "A link to the parent section",
          "Not a link (it represents the current page)",
          "A link to the next page",
        ],
        correctAnswer: 2,
        explanation: "The last item in a breadcrumb represents the current page, so it shouldn't be a link. All previous items in the breadcrumb should be links to parent pages in the hierarchy.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Navigation block", value: "<nav>" },
    { label: "Distinguish navs", value: "aria-label" },
    { label: "Skip to content", value: "Skip link" },
    { label: "Major navigation only", value: "Not for all links" },
    { label: "Multiple navs OK", value: "Each needs label" },
  ],
};

// ============================================================================
// HTML CHAPTER 19 — THE MAIN ELEMENT
// ============================================================================
export const htmlCh19: Chapter = {
  id: "html-ch-19",
  number: 19,
  title: "The Main Element",
  subtitle: "The primary content: what your page is actually about.",
  difficulty: "Beginner",
  estimatedMinutes: 30,
  xpReward: 100,
  prerequisites: ["html-ch-18"],
  partLabel: "Part 2: Structure & Layout",
  learningObjectives: [
    "Use the <main> element to mark up the dominant content of a page.",
    "Understand the rule: one <main> per page, visible or hidden.",
    "Distinguish what belongs in <main> versus what belongs in <header>, <footer>, or <aside>.",
    "Avoid common mistakes like multiple visible <main> elements or nesting <main> incorrectly.",
  ],
  sections: [
    {
      id: "ch19-s1",
      title: "What is Main?",
      whyItMatters: "The <main> element tells browsers and assistive technologies what the primary content of your page is. This is crucial for accessibility — screen reader users can jump directly to the main content, skipping navigation and other peripheral content.",
      realWorldAnalogy: "Think of a newspaper. The main article is the <main> — that's what you came to read. The masthead, navigation menu, advertisements, and footer are supporting content. You want to get to the main article quickly, not wade through everything else.",
      content: `The \`<main>\` element represents the dominant content of the \`<body>\` of a document or application. The main content area consists of content that is directly related to or expands upon the central topic of the document or the central functionality of the application.

**Key rules for \`<main>\`:**
- You should have **one visible \`<main>\` per page**. Multiple \`<main>\` elements confuse screen readers and violate the spec.
- \`<main>\` should not be a descendant of \`<article>\`, \`<aside>\`, \`<footer>\`, \`<header>\`, or \`<nav>\`. It should be a direct child of \`<body>\` or a wrapper \`<div>\`.
- The content inside \`<main>\` should be unique to the document. Site-wide content like navigation, copyright notices, or sidebars typically goes outside \`<main>\`.

**What belongs in \`<main>\`:**
- The primary article or content of the page
- The main functionality of an application
- Content that is specific to this page, not repeated across the site

**What does NOT belong in \`<main>\`:**
- Site navigation (that goes in \`<nav>\`, typically in \`<header>\`)
- Site-wide sidebars (those go in \`<aside>\`)
- Footer content (that goes in \`<footer>\`)
- Page headers with logos and site title (that goes in \`<header>\`)

The \`<main>\` element is a landmark, which means screen reader users can navigate to it directly with a single keystroke. This is why having exactly one \`<main>\` is so important — it gives users a reliable way to jump to the content they care about.`,
      codeExamples: [
        {
          id: "ch19-s1-ex1",
          title: "Proper main element placement",
          description: "A page with correctly placed main, header, and footer.",
          code: {
            html: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Blog Post</title>
  </head>
  <body>
    <!-- Header - site-wide navigation and branding -->
    <header>
      <h1>My Tech Blog</h1>
      <nav aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
    
    <!-- Main - the primary content of THIS page -->
    <main>
      <article>
        <h2>Understanding the Main Element</h2>
        <p>This is the main content that users came to read...</p>
        <p>More article content...</p>
      </article>
    </main>
    
    <!-- Aside - tangentially related content -->
    <aside>
      <h3>Related Posts</h3>
      <ul>
        <li><a href="#">Semantic HTML Basics</a></li>
        <li><a href="#">Accessibility Best Practices</a></li>
      </ul>
    </aside>
    
    <!-- Footer - site-wide information -->
    <footer>
      <p>&copy; 2024 My Tech Blog</p>
      <nav aria-label="Footer navigation">
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
      </nav>
    </footer>
  </body>
</html>`,
          },
          explanation: "The <main> element contains only the primary content of this specific page — the blog post. Navigation, branding, related posts, and footer information are all outside <main>. A screen reader user can jump directly to <main> and bypass everything else.",
          tryItPrompt: "Try adding a sidebar with author bio. Should that be inside <main> or in an <aside>? Consider whether it's primary content or tangentially related.",
        },
      ],
      callouts: [
        { type: "common-mistake", title: "Multiple main elements", content: "Never have more than one visible <main> element on a page. This violates the HTML spec and confuses screen readers. If you need multiple content sections, use <section> or <article> inside a single <main>." },
        { type: "tip", title: "Hidden main is OK", content: "You can have multiple <main> elements if only one is visible at a time (like in a single-page app with tabbed content). Use CSS to hide all but one, or use the hidden attribute." },
      ],
    },
    {
      id: "ch19-s2",
      title: "Main in Single-Page Applications",
      whyItMatters: "SPAs present unique challenges for the main element. You need to ensure that as content changes, there's still exactly one visible main element.",
      content: `In single-page applications (SPAs), the content of \`<main>\` might change dynamically without a page reload. This is fine — as long as there's always exactly one visible \`<main>\` element.

**Pattern 1: Single main, dynamic content**
Keep one \`<main>\` element and replace its inner HTML when navigating. This is the simplest approach and ensures you never have multiple visible mains.

**Pattern 2: Multiple mains, only one visible**
Create a \`<main>\` for each "page" or view, but use CSS or the \`hidden\` attribute to show only one at a time. This is common in tabbed interfaces or when using client-side routing.

**Pattern 3: Main per route**
Some frameworks generate a new \`<main>\` for each route. If you use this pattern, ensure the framework handles showing/hiding correctly so only one main is visible at a time.

**Accessibility consideration**: When content in \`<main>\` changes dynamically, announce the change to screen reader users. You can do this with an \`aria-live\` region or by moving focus to the new content.`,
      codeExamples: [
        {
          id: "ch19-s2-ex1",
          title: "SPA with hidden main elements",
          description: "A simple tabbed interface with multiple mains.",
          code: {
            html: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Tabbed App</title>
    <style>
      .tab-content { display: none; }
      .tab-content.active { display: block; }
    </style>
  </head>
  <body>
    <header>
      <h1>My App</h1>
      <nav>
        <button onclick="showTab('home')">Home</button>
        <button onclick="showTab('about')">About</button>
        <button onclick="showTab('contact')">Contact</button>
      </nav>
    </header>
    
    <!-- Only one main is visible at a time -->
    <main id="home" class="tab-content active">
      <h2>Home</h2>
      <p>Welcome to the home page.</p>
    </main>
    
    <main id="about" class="tab-content" hidden>
      <h2>About</h2>
      <p>Learn about our company.</p>
    </main>
    
    <main id="contact" class="tab-content" hidden>
      <h2>Contact</h2>
      <p>Get in touch with us.</p>
    </main>
    
    <script>
      function showTab(tabId) {
        // Hide all mains
        document.querySelectorAll('.tab-content').forEach(el => {
          el.classList.remove('active');
          el.hidden = true;
        });
        // Show selected main
        const selected = document.getElementById(tabId);
        selected.classList.add('active');
        selected.hidden = false;
      }
    </script>
  </body>
</html>`,
          },
          explanation: "This SPA has three <main> elements, but only one is visible at a time. The hidden attribute and CSS ensure screen readers only perceive one main. When switching tabs, only one main is active.",
          tryItPrompt: "Try adding aria-live to the main element to announce content changes when tabs are switched.",
        },
      ],
      callouts: [
        { type: "info", title: "Use hidden attribute", content: "The hidden attribute is the semantic way to hide content. It's better than display: none in CSS because it explicitly tells screen readers the content is not available. Use both hidden and CSS for maximum compatibility." },
      ],
    },
  ],
  exercises: [
    {
      id: "ch19-ex1",
      title: "Restructure a page to use main correctly",
      difficulty: 1,
      description: "Take a page without a main element and add one in the correct location.",
      requirements: ["Identify the primary content of the page", "Wrap it in a <main> element", "Ensure navigation, header, and footer content remain outside main", "Verify there's only one visible main element"],
      starterCode: {
        html: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Article Page</title>
  </head>
  <body>
    <div class="header">
      <h1>News Site</h1>
      <a href="/">Home</a>
      <a href="/sports">Sports</a>
    </div>
    
    <div class="content">
      <h2>Breaking News: Technology Advances</h2>
      <p>Lorem ipsum dolor sit amet...</p>
      <p>More article content here...</p>
    </div>
    
    <div class="sidebar">
      <h3>Trending</h3>
      <ul>
        <li><a href="#">Another story</a></li>
      </ul>
    </div>
    
    <div class="footer">
      <p>&copy; 2024 News Site</p>
    </div>
  </body>
</html>`,
      },
      hints: [
        "The article content in the 'content' div is the primary content",
        "Convert the generic divs to semantic elements where appropriate",
        "The main should be a direct child of body or a wrapper",
        "Keep navigation and footer outside main",
      ],
      solution: {
        html: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Article Page</title>
  </head>
  <body>
    <header>
      <h1>News Site</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/sports">Sports</a>
      </nav>
    </header>
    
    <main>
      <article>
        <h2>Breaking News: Technology Advances</h2>
        <p>Lorem ipsum dolor sit amet...</p>
        <p>More article content here...</p>
      </article>
    </main>
    
    <aside>
      <h3>Trending</h3>
      <ul>
        <li><a href="#">Another story</a></li>
      </ul>
    </aside>
    
    <footer>
      <p>&copy; 2024 News Site</p>
    </footer>
  </body>
</html>`,
      },
      solutionExplanation: "The primary article content is now wrapped in <main>. The header contains navigation and site title. The sidebar is in <aside> since it's tangentially related. The footer is separate. This structure is semantically clear and accessible.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch19-q1",
        type: "mcq",
        question: "How many visible <main> elements should a page have?",
        options: ["Zero", "One", "Two or more", "As many as needed"],
        correctAnswer: 1,
        explanation: "A page should have exactly one visible <main> element. This is required by the HTML specification and is crucial for accessibility — screen readers rely on a single main landmark to navigate to primary content.",
        difficulty: 1,
      },
      {
        id: "ch19-q2",
        type: "mcq",
        question: "Which of the following should NOT be inside <main>?",
        options: [
          "The primary article content",
          "A sidebar with related posts",
          "The main functionality of an application",
          "Content unique to this page",
        ],
        correctAnswer: 1,
        explanation: "Sidebars with related posts are tangentially related content and belong in <aside>, not <main>. <main> should contain only the primary, dominant content of the page.",
        difficulty: 1,
      },
      {
        id: "ch19-q3",
        type: "true-false",
        question: "The <main> element can be a child of <header>.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. <main> should not be a descendant of <header>, <footer>, <nav>, <article>, or <aside>. It should be a direct child of <body> or a wrapper div. This is to maintain clear document structure.",
        difficulty: 2,
      },
      {
        id: "ch19-q4",
        type: "mcq",
        question: "What is the primary purpose of the <main> element?",
        options: [
          "To style the main content area",
          "To mark up the dominant content of the page for accessibility",
          "To create a main navigation menu",
          "To contain all page content including header and footer",
        ],
        correctAnswer: 1,
        explanation: "<main> is a semantic element that marks the primary content of the page. It's a landmark that screen readers can navigate to directly, making pages more accessible by letting users skip peripheral content.",
        difficulty: 1,
      },
      {
        id: "ch19-q5",
        type: "mcq",
        question: "In a single-page application, how should you handle multiple views?",
        options: [
          "Use multiple visible <main> elements",
          "Use one <main> and replace its content dynamically",
          "Don't use <main> in SPAs",
          "Put everything in <header> instead",
        ],
        correctAnswer: 1,
        explanation: "In SPAs, you can either replace the content of a single <main> dynamically, or have multiple <main> elements but ensure only one is visible at a time using CSS or the hidden attribute.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Primary content", value: "<main>" },
    { label: "One visible main", value: "Per page rule" },
    { label: "Not in header/footer", value: "Direct child of body" },
    { label: "Unique content", value: "Page-specific only" },
    { label: "Landmark element", value: "Screen reader navigation" },
  ],
};

// ============================================================================
// HTML CHAPTER 20 — THE FOOTER ELEMENT
// ============================================================================
export const htmlCh20: Chapter = {
  id: "html-ch-20",
  number: 20,
  title: "The Footer Element",
  subtitle: "Page endings: copyright, contacts, and fine print.",
  difficulty: "Beginner",
  estimatedMinutes: 30,
  xpReward: 100,
  prerequisites: ["html-ch-19"],
  partLabel: "Part 2: Structure & Layout",
  learningObjectives: [
    "Use the <footer> element to mark up footer information for a page or section.",
    "Distinguish between page footers and section footers.",
    "Know what content belongs in a footer versus what doesn't.",
    "Avoid common mistakes like putting main content in footers or using footers for styling only.",
  ],
  sections: [
    {
      id: "ch20-s1",
      title: "What Goes in a Footer?",
      whyItMatters: "Footers provide important information that users expect to find at the bottom of pages: copyright notices, contact information, site maps, and legal links. Proper footer markup makes this information accessible and semantically clear.",
      realWorldAnalogy: "Think of a footer like the end credits of a movie or the back matter of a book — it's where you find the credits, legal notices, and additional information that supports but isn't part of the main content.",
      content: `The \`<footer>\` element represents a footer for its nearest ancestor sectioning content or sectioning root. A footer typically contains information about the section: author information, related links, copyright notices, and similar data.

**What belongs in a page footer:**
- Copyright notices and dates
- Contact information (email, phone, address)
- Links to legal pages (privacy policy, terms of service)
- Site map or navigation links
- Social media links
- Company information and branding

**What belongs in a section/article footer:**
- Author information for that specific article
- Publication date
- Tags or categories
- Related links specific to that content
- Per-article copyright or licensing information

**What does NOT belong in a footer:**
- Main content paragraphs (those go in \`<main>\` or \`<article>\`)
- Navigation that belongs in \`<nav>\` (unless it's footer-specific navigation)
- Interactive forms (unless it's a newsletter signup in the footer)
- Content that's part of the primary narrative

You can have multiple \`<footer>\` elements on a page — one for the page itself, and one for each \`<article>\` or \`<section>\` that needs footer information. Each footer applies to its nearest ancestor sectioning element.`,
      codeExamples: [
        {
          id: "ch20-s1-ex1",
          title: "Page footer with article footer",
          description: "A page with both a page-level footer and an article-specific footer.",
          code: {
            html: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Blog Post</title>
  </head>
  <body>
    <header>
      <h1>My Tech Blog</h1>
      <nav aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
    
    <main>
      <article>
        <header>
          <h2>Understanding Footer Elements</h2>
          <p class="meta">By Jane Doe · January 15, 2024</p>
        </header>
        
        <p>This article explains when and how to use footer elements...</p>
        
        <!-- Article-specific footer -->
        <footer>
          <p class="author">Written by Jane Doe</p>
          <p class="tags">Tags: <a href="#">HTML</a>, <a href="#">Semantic</a></p>
          <p class="license">CC BY-SA 4.0</p>
        </footer>
      </article>
      
      <article>
        <header>
          <h2>Another Article</h2>
          <p class="meta">By John Smith · January 10, 2024</p>
        </header>
        
        <p>Another article content...</p>
        
        <!-- Each article can have its own footer -->
        <footer>
          <p class="author">Written by John Smith</p>
          <p class="tags">Tags: <a href="#">CSS</a></p>
        </footer>
      </article>
    </main>
    
    <!-- Page-level footer -->
    <footer>
      <div class="copyright">
        <p>&copy; 2024 My Tech Blog. All rights reserved.</p>
      </div>
      <nav aria-label="Footer navigation">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/contact">Contact Us</a>
      </nav>
      <div class="social">
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
      </div>
    </footer>
  </body>
</html>`,
          },
          explanation: "Each article has its own footer with author and tag information. The page has a separate footer with copyright, legal links, and social media. This separation makes it clear which information applies to specific content versus the entire site.",
          tryItPrompt: "Try adding a newsletter signup form to the page footer. Consider whether this is appropriate footer content.",
        },
      ],
      callouts: [
        { type: "common-mistake", title: "Footer for styling only", content: "Don't use <footer> just to position content at the bottom of the page. Use it for actual footer information (copyright, contact, legal links). If you're just styling, use a div with appropriate classes." },
        { type: "tip", title: "Footer navigation needs labels", content: "If you include navigation in a footer, wrap it in <nav> with an aria-label like 'Footer navigation' to distinguish it from the main navigation." },
      ],
    },
    {
      id: "ch20-s2",
      title: "Footer Patterns and Best Practices",
      whyItMatters: "Good footer design follows patterns users recognize. Understanding these patterns helps you create footers that are both useful and accessible.",
      content: `Effective footers follow established patterns that users have learned to expect:

**Simple copyright footer**: Minimal footer with just copyright notice and maybe a couple legal links. Common on simple blogs and personal sites.

**Multi-column footer**: Organized into columns (About, Resources, Legal, Social) for larger sites. Each column groups related links or information.

**Sticky footer**: A footer that stays at the bottom of the viewport even when content is short. Requires CSS (typically flexbox or grid) but semantically still just a \`<footer>\`.

**Article footer**: Appears at the end of articles with author info, tags, related posts, and sharing buttons. This is separate from the page footer.

**Accessibility considerations**:
- Use proper heading hierarchy in footers (usually \`<h3>\` or \`<h4>\` for section headings)
- Ensure footer navigation has aria-label
- Make footer links descriptive (avoid 'click here')
- Consider a 'back to top' link for long pages

**SEO considerations**:
- Include important links in footers (helps with internal linking)
- Add address information for local SEO
- Include social media links for social proof`,
      codeExamples: [
        {
          id: "ch20-s2-ex1",
          title: "Multi-column footer pattern",
          description: "A footer organized into semantic sections.",
          code: {
            html: `<footer>
  <section class="footer-section">
    <h3>About Us</h3>
    <p>We're a company that does amazing things.</p>
    <address>
      123 Main Street<br>
      City, State 12345<br>
      <a href="mailto:info@example.com">info@example.com</a>
    </address>
  </section>
  
  <section class="footer-section">
    <h3>Resources</h3>
    <nav aria-label="Footer resources">
      <ul>
        <li><a href="/docs">Documentation</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/tutorials">Tutorials</a></li>
      </ul>
    </nav>
  </section>
  
  <section class="footer-section">
    <h3>Legal</h3>
    <nav aria-label="Footer legal">
      <ul>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms of Service</a></li>
        <li><a href="/cookies">Cookie Policy</a></li>
      </ul>
    </nav>
  </section>
  
  <div class="footer-bottom">
    <p>&copy; 2024 Company Name. All rights reserved.</p>
  </div>
</footer>`,
          },
          explanation: "This footer uses <section> elements to group related content, <h3> headings for each section, and <nav> with aria-label for navigation links. The <address> element semantically marks contact information. This structure is accessible and SEO-friendly.",
          tryItPrompt: "Try adding a social media section to this footer with appropriate semantic markup.",
        },
      ],
      callouts: [
        { type: "info", title: "Use address for contact info", content: "The <address> element is specifically for contact information. Use it for addresses, email links, and phone numbers in footers. It provides semantic meaning that helps search engines and assistive technologies.",
        },
      ],
    },
  ],
  exercises: [
    {
      id: "ch20-ex1",
      title: "Create a comprehensive page footer",
      difficulty: 1,
      description: "Build a footer with multiple sections including copyright, legal links, and contact information.",
      requirements: ["Include a copyright notice", "Add navigation links for legal pages", "Include contact information using the address element", "Use proper heading hierarchy", "Add aria-label to any navigation in the footer"],
      starterCode: {
        html: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Website</title>
  </head>
  <body>
    <header>
      <h1>My Company</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
    
    <main>
      <h2>Main Content</h2>
      <p>Page content here...</p>
    </main>
    
    <!-- Add footer here -->
    
  </body>
</html>`,
      },
      hints: [
        "Use <section> to group related footer content",
        "The address element is for contact information",
        "Legal navigation should have aria-label",
        "Copyright typically goes at the bottom of the footer",
      ],
      solution: {
        html: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Website</title>
  </head>
  <body>
    <header>
      <h1>My Company</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
    
    <main>
      <h2>Main Content</h2>
      <p>Page content here...</p>
    </main>
    
    <footer>
      <section class="footer-about">
        <h3>About</h3>
        <p>We build great products.</p>
      </section>
      
      <section class="footer-contact">
        <h3>Contact</h3>
        <address>
          456 Innovation Drive<br>
          Tech City, TC 90210<br>
          <a href="mailto:hello@mycompany.com">hello@mycompany.com</a>
        </address>
      </section>
      
      <section class="footer-legal">
        <h3>Legal</h3>
        <nav aria-label="Footer legal">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </nav>
      </section>
      
      <div class="footer-bottom">
        <p>&copy; 2024 My Company. All rights reserved.</p>
      </div>
    </footer>
    
  </body>
</html>`,
      },
      solutionExplanation: "The footer is organized into sections with proper headings. Contact information uses the semantic <address> element. Legal navigation has an aria-label for accessibility. Copyright is at the bottom. This creates a clear, accessible footer structure.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch20-q1",
        type: "mcq",
        question: "Which of the following is appropriate content for a footer?",
        options: [
          "The main article content",
          "Copyright notices and legal links",
          "The page's primary heading",
          "Interactive main forms",
        ],
        correctAnswer: 1,
        explanation: "Footers typically contain copyright notices, legal links, contact information, and similar metadata. Main content, primary headings, and interactive forms belong elsewhere in the page.",
        difficulty: 1,
      },
      {
        id: "ch20-q2",
        type: "true-false",
        question: "You can have multiple <footer> elements on a single page.",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation: "True. You can have multiple footers — one for the page, and one for each article or section that needs footer information. Each footer applies to its nearest ancestor sectioning element.",
        difficulty: 1,
      },
      {
        id: "ch20-q3",
        type: "mcq",
        question: "Which element should you use for contact information in a footer?",
        options: ["<div>", "<section>", "<address>", "<footer>"],
        correctAnswer: 2,
        explanation: "The <address> element is specifically designed for contact information including addresses, email links, and phone numbers. It provides semantic meaning that helps search engines and assistive technologies.",
        difficulty: 1,
      },
      {
        id: "ch20-q4",
        type: "mcq",
        question: "Why should you add aria-label to navigation in a footer?",
        options: [
          "It makes the links look better",
          "It helps screen reader users distinguish footer navigation from main navigation",
          "It's required for the links to work",
          "It improves SEO ranking",
        ],
        correctAnswer: 1,
        explanation: "When a page has multiple navigation areas (main nav, footer nav, sidebar nav), aria-label provides a descriptive name for each. Screen reader users can then distinguish between 'Main navigation' and 'Footer navigation'.",
        difficulty: 2,
      },
      {
        id: "ch20-q5",
        type: "mcq",
        question: "What is the purpose of an article-specific footer?",
        options: [
          "To replace the page footer",
          "To provide information specific to that article (author, tags, license)",
          "To contain the article's main content",
          "To display site-wide navigation",
        ],
        correctAnswer: 1,
        explanation: "Article-specific footers contain information relevant only to that article: author name, publication date, tags, categories, licensing, and related links. This is separate from the page-level footer which contains site-wide information.",
        difficulty: 1,
      },
    ],
  },
  cheatSheet: [
    { label: "Page/section footer", value: "<footer>" },
    { label: "Contact info", value: "<address>" },
    { label: "Multiple footers OK", value: "One per section" },
    { label: "Footer navigation", value: "Needs aria-label" },
    { label: "Copyright and legal", value: "Typical footer content" },
  ],
};
