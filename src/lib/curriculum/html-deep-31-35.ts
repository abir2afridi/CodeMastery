import type { Chapter } from "./types";

// ============================================================================
// HTML CHAPTER 31 — HTML PERFORMANCE
// ============================================================================
export const htmlCh31: Chapter = {
  id: "html-ch-31",
  number: 31,
  title: "HTML Performance",
  subtitle: "Critical rendering path, defer/async.",
  difficulty: "Advanced",
  estimatedMinutes: 40,
  xpReward: 120,
  prerequisites: ["html-ch-30"],
  partLabel: "Part 5: SEO & Performance",
  learningObjectives: [
    "Understand the critical rendering path and how HTML affects it.",
    "Use defer and async attributes appropriately for scripts.",
    "Optimize resource loading with preload, prefetch, and preconnect.",
    "Minimize render-blocking resources.",
    "Implement performance best practices in HTML.",
  ],
  sections: [
    {
      id: "ch31-s1",
      title: "The Critical Rendering Path",
      whyItMatters: "The critical rendering path determines how quickly your page becomes visible. Understanding it helps you optimize HTML for faster load times, which improves user experience and SEO rankings.",
      realWorldAnalogy: "The critical rendering path is like preparing a meal. You can chop vegetables (download CSS) while the oven preheats (download HTML), but you need the main ingredients (HTML) before you can start cooking (rendering). Optimizing the order makes everything faster.",
      content: `**What is the critical rendering path?**
The critical rendering path is the sequence of steps the browser takes to convert HTML, CSS, and JavaScript into pixels on the screen. Faster critical rendering path = faster page load.

**The steps:**
1. **Parse HTML**: Browser reads HTML and builds the DOM tree
2. **Parse CSS**: Browser reads CSS and builds the CSSOM tree
3. **Combine**: DOM + CSSOM = Render tree
4. **Layout**: Calculate position and size of elements
5. **Paint**: Draw pixels to the screen

**Render-blocking resources:**
- **CSS is render-blocking**: Browser won't paint until CSS is parsed
- **Scripts are parser-blocking**: Scripts block HTML parsing unless specified otherwise

**Optimization strategies:**
- Minimize critical CSS (inline critical CSS, defer the rest)
- Load scripts with defer or async
- Use preload for critical resources
- Minimize DOM size (fewer elements = faster parsing)
- Avoid deep DOM nesting

**Time to First Byte (TTFB):**
The time from request to first byte of response. Affected by:
- Server performance
- Network latency
- CDN usage
- Caching strategies`,
      codeExamples: [
        {
          id: "ch31-s1-ex1",
          title: "Render-blocking vs optimized loading",
          description: "How script placement affects page rendering.",
          code: {
            html: `<!-- BAD: Script blocks rendering -->
<head>
  <script src="analytics.js"></script>
  <script src="tracking.js"></script>
  <link rel="stylesheet" href="styles.css">
</head>

<!-- GOOD: Optimized loading -->
<head>
  <link rel="stylesheet" href="styles.css">
  
  <!-- Critical script with async -->
  <script src="analytics.js" async></script>
  
  <!-- Non-critical script with defer -->
  <script src="app.js" defer></script>
  
  <!-- Preload critical font -->
  <link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
</head>`,
          },
          explanation: "The BAD version blocks rendering while scripts load. The GOOD version loads CSS first (critical for rendering), uses async for non-blocking analytics, defer for app scripts (runs after HTML parsed), and preloads fonts for faster display.",
          tryItPrompt: "Use Chrome DevTools Network panel to see how different loading strategies affect the waterfall and page load timeline.",
        },
      ],
      callouts: [
        { type: "tip", title: "Measure with Lighthouse", content: "Use Chrome Lighthouse to measure performance. It provides specific recommendations for optimizing the critical rendering path and identifies render-blocking resources.",
        },
        { type: "common-mistake", title: "Loading everything at once", content: "Don't load all scripts and styles synchronously in the head. Only load what's critical for initial render. Defer non-critical resources until after the page is interactive.",
        },
      ],
    },
    {
      id: "ch31-s2",
      title: "Script Loading: Defer vs Async",
      whyItMatters: "Scripts can significantly impact page load performance. Understanding defer and async helps you load JavaScript without blocking rendering.",
      content: `**Default script loading (blocking):**
\`\`\`
<script src="script.js"></script>
\`\`\`
- Blocks HTML parsing
- Blocks rendering
- Scripts execute in order
- Use only when script must run before page renders

**Async:**
\`\`\`
<script src="script.js" async></script>
\`\`\`
- Downloads in parallel with HTML parsing
- Executes as soon as downloaded
- Doesn't guarantee execution order
- Use for independent scripts (analytics, tracking)

**Defer:**
\`\`\`
<script src="script.js" defer></script>
\`\`\`
- Downloads in parallel with HTML parsing
- Executes after HTML is fully parsed
- Maintains execution order
- Use for scripts that depend on DOM being ready

**Comparison:**
- **No attribute**: Blocks parsing, executes immediately
- **async**: Downloads in parallel, executes as soon as ready (unordered)
- **defer**: Downloads in parallel, executes after parsing (ordered)

**Best practice:**
- Use defer for most scripts that need the DOM
- Use async for independent scripts
- Avoid blocking scripts in the head
- Place blocking scripts at end of body

**Module scripts:**
\`\`\`
<script type="module" src="app.js"></script>
\`\`\`
- Automatically deferred
- Supports ES6 imports
- Executes in order
- Modern approach for JavaScript modules`,
      codeExamples: [
        {
          id: "ch31-s2-ex1",
          title: "Optimized script loading",
          description: "Using defer and async appropriately.",
          code: {
            html: `<!DOCTYPE html>
<html>
<head>
  <!-- Critical CSS first -->
  <link rel="stylesheet" href="critical.css">
  
  <!-- Analytics - doesn't affect rendering -->
  <script src="analytics.js" async></script>
  
  <!-- Tracking - independent -->
  <script src="tracking.js" async></script>
</head>
<body>
  <h1>Page Content</h1>
  
  <!-- Main app - needs DOM -->
  <script src="app.js" defer></script>
  
  <!-- Feature that depends on app -->
  <script src="feature.js" defer></script>
  
  <!-- Modern module script -->
  <script type="module" src="modern-app.js"></script>
</body>
</html>`,
          },
          explanation: "Analytics and tracking use async (independent, order doesn't matter). App and feature use defer (need DOM, maintain order). Module script is automatically deferred. This allows HTML to parse and render without being blocked by JavaScript.",
          tryItPrompt: "Use Chrome DevTools to see how scripts load. Async scripts execute as soon as they download, while deferred scripts wait until HTML parsing completes.",
        },
      ],
      callouts: [
        { type: "info", title: "Defer is usually safer", content: "When in doubt, use defer. It maintains execution order and ensures DOM is ready. Use async only for scripts that truly don't depend on anything and don't affect page rendering.",
        },
        { type: "common-mistake", title: "Mixing async and defer", content: "Don't use both async and defer on the same script. If both are present, async takes precedence in most browsers. Choose one based on your needs.",
        },
      ],
    },
    {
      id: "ch31-s3",
      title: "Resource Hints",
      whyItMatters: "Resource hints give browsers hints about which resources to load early. This can significantly improve performance by preloading critical resources.",
      content: `**Preload:**
\`\`\`
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
\`\`\`
- Downloads resource as high priority
- Use for critical resources needed soon
- Must specify 'as' attribute

**Prefetch:**
\`\`\`
<link rel="prefetch" href="next-page.js">
\`\`\`
- Downloads resource as low priority during idle time
- Use for resources needed on next navigation
- Good for multi-page applications

**Preconnect:**
\`\`\`
<link rel="preconnect" href="https://api.example.com">
\`\`\`
- Early connection to origin (DNS, TCP, TLS)
- Use for third-party APIs or CDNs
- Doesn't download anything, just establishes connection

**DNS-prefetch:**
\`\`\`
<link rel="dns-prefetch" href="https://example.com">
\`\`\`
- Only resolves DNS
- Lighter than preconnect
- Use for origins you'll need later

**Prerender:**
\`\`\`
<link rel="prerender" href="next-page.html">
\`\`\`
- Renders entire page in background
- High resource usage
- Use only for very likely next pages

**Modulepreload:**
\`\`\`
<link rel="modulepreload" href="module.js">
\`\`\`
- Preloads JavaScript modules
- Use for module scripts needed soon`,
      codeExamples: [
        {
          id: "ch31-s3-ex1",
          title: "Complete resource hints setup",
          description: "Using all resource hints effectively.",
          code: {
            html: `<head>
  <!-- Preload critical CSS -->
  <link rel="preload" href="critical.css" as="style">
  
  <!-- Preload critical font -->
  <link rel="preload" href="main-font.woff2" as="font" type="font/woff2" crossorigin>
  
  <!-- Preconnect to CDN -->
  <link rel="preconnect" href="https://cdn.example.com">
  
  <!-- Preconnect to API -->
  <link rel="preconnect" href="https://api.example.com">
  
  <!-- Prefetch likely next page resources -->
  <link rel="prefetch" href="next-page.js">
  <link rel="prefetch" href="next-page.css">
  
  <!-- DNS prefetch for social media domains -->
  <link rel="dns-prefetch" href="https://connect.facebook.net">
  <link rel="dns-prefetch" href="https://www.google-analytics.com">
</head>`,
          },
          explanation: "Preloads critical CSS and font for immediate use. Preconnects to CDN and API for faster connections. Prefetches resources for likely next page. DNS-prefetches social domains for when social widgets load. This comprehensive setup optimizes loading.",
          tryItPrompt: "Use Chrome DevTools Network panel to see how resource hints affect the loading waterfall. Preloaded resources should appear earlier in the timeline.",
        },
      ],
      callouts: [
        { type: "tip", title: "Don't overuse preload", content: "Preload uses high priority. Only preload truly critical resources. Overusing preload can starve other important resources. Measure performance to ensure preloads help rather than hurt.",
        },
        { type: "warning", title: "Always include crossorigin", content: "When preloading fonts from different origins, always include crossorigin. Without it, the font downloads twice (once anonymous, once with credentials), wasting bandwidth.",
        },
      ],
    },
  ],
  exercises: [
    {
      id: "ch31-ex1",
      title: "Optimize script loading",
      difficulty: 1,
      description: "Optimize script loading using defer and async attributes.",
      requirements: ["Use async for independent scripts", "Use defer for scripts that need the DOM", "Maintain execution order where needed", "Move critical inline scripts to appropriate positions"],
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<head>
  <script src="jquery.js"></script>
  <script src="analytics.js"></script>
  <script src="app.js"></script>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Page</h1>
  <script>
    document.getElementById('header').style.display = 'block';
  </script>
</body>
</html>`,
      },
      hints: [
        "Move analytics to async (independent)",
        "Move jquery and app to defer (need DOM)",
        "Move CSS before scripts (critical for rendering)",
        "Inline script needs DOM, move after HTML or use defer",
      ],
      solution: {
        html: `<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
  <script src="analytics.js" async></script>
</head>
<body>
  <h1 id="header">Page</h1>
  <script src="jquery.js" defer></script>
  <script src="app.js" defer></script>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('header').style.display = 'block';
    });
  </script>
</body>
</html>`,
      },
      solutionExplanation: "Moved CSS before scripts (critical). Analytics uses async (independent). jQuery and app use defer (need DOM, maintain order). Inline script wrapped in DOMContentLoaded to ensure DOM is ready. This allows HTML to render without being blocked by scripts.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch31-q1",
        type: "mcq",
        question: "What does the defer attribute do on a script tag?",
        options: [
          "Blocks HTML parsing until script downloads",
          "Downloads in parallel and executes immediately",
          "Downloads in parallel and executes after HTML parsing",
          "Prevents the script from downloading",
        ],
        correctAnswer: 2,
        explanation: "defer downloads the script in parallel with HTML parsing but waits until HTML is fully parsed before executing. Scripts with defer maintain their execution order.",
        difficulty: 1,
      },
      {
        id: "ch31-q2",
        type: "mcq",
        question: "What is the difference between async and defer?",
        options: [
          "async blocks parsing, defer doesn't",
          "defer blocks parsing, async doesn't",
          "async executes as soon as downloaded, defer waits for HTML parsing",
          "There is no difference",
        ],
        correctAnswer: 2,
        explanation: "async scripts execute as soon as they're downloaded (order not guaranteed). defer scripts wait until HTML parsing is complete (order guaranteed). Use async for independent scripts, defer for DOM-dependent scripts.",
        difficulty: 1,
      },
      {
        id: "ch31-q3",
        type: "true-false",
        question: "CSS is render-blocking by default.",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation: "True. CSS is render-blocking by default. The browser won't paint the page until CSS is downloaded and parsed. This is why optimizing CSS (critical CSS inlining, deferring non-critical CSS) is important for performance.",
        difficulty: 1,
      },
      {
        id: "ch31-q4",
        type: "mcq",
        question: "Which resource hint should you use to preload a critical font?",
        options: ["prefetch", "preconnect", "preload", "dns-prefetch"],
        correctAnswer: 2,
        explanation: "Use preload to download critical resources with high priority. For fonts, specify as=\"font\" and include crossorigin. Prefetch is for low-priority future resources, preconnect only establishes connections.",
        difficulty: 1,
      },
      {
        id: "ch31-q5",
        type: "mcq",
        question: "When should you use preconnect instead of preload?",
        options: [
          "When you need the actual resource",
          "When you only need to establish a connection to an origin",
          "When the resource is on the same origin",
          "Never, always use preload",
        ],
        correctAnswer: 1,
        explanation: "Use preconnect when you need to establish a connection (DNS, TCP, TLS) to an origin but don't need the resource immediately. It's lighter than preload and useful for APIs and CDNs.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Critical path", value: "DOM → CSSOM → Render → Layout → Paint" },
    { label: "CSS blocking", value: "Blocks rendering" },
    { label: "async scripts", value: "Execute when ready, unordered" },
    { label: "defer scripts", value: "Execute after parsing, ordered" },
    { label: "preload", value: "High priority download" },
    { label: "prefetch", value: "Low priority future resource" },
  ],
};

// ============================================================================
// HTML CHAPTER 32 — HTML VALIDATION & BEST PRACTICES
// ============================================================================
export const htmlCh32: Chapter = {
  id: "html-ch-32",
  number: 32,
  title: "HTML Validation & Best Practices",
  subtitle: "Using the W3C validator.",
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  xpReward: 100,
  prerequisites: ["html-ch-31"],
  partLabel: "Part 5: SEO & Performance",
  learningObjectives: [
    "Understand why HTML validation matters.",
    "Use the W3C Markup Validation Service.",
    "Identify and fix common HTML validation errors.",
    "Follow HTML best practices for quality code.",
    "Implement a validation workflow in development.",
  ],
  sections: [
    {
      id: "ch32-s1",
      title: "Why Validate HTML?",
      whyItMatters: "Valid HTML is more likely to render consistently across browsers, is easier to maintain, and performs better. Validation catches errors early before they cause problems in production.",
      realWorldAnalogy: "HTML validation is like spell-checking a document. It catches typos, missing punctuation, and structural errors that could confuse readers. A validated document is professional and error-free.",
      content: `**What is HTML validation?**
HTML validation checks your HTML against the official HTML specification. It verifies that your markup follows the rules and standards defined by the W3C.

**Why validate?**
- **Cross-browser consistency**: Valid HTML renders more consistently
- **Accessibility**: Valid HTML is more accessible by default
- **SEO**: Search engines prefer valid, well-structured HTML
- **Maintenance**: Valid code is easier to debug and maintain
- **Future-proofing**: Valid HTML is more likely to work in future browsers
- **Error catching**: Catches typos, unclosed tags, and other mistakes

**Common validation errors:**
- Unclosed tags
- Missing required attributes
- Invalid attribute values
- Improper nesting
- Duplicate IDs
- Missing alt text on images
- Invalid character encoding

**The W3C Markup Validation Service:**
The official validator at validator.w3.org checks your HTML against specifications. You can validate by:
- URL: Enter a public URL
- File upload: Upload an HTML file
- Direct input: Paste HTML code

**HTML5 vs XHTML validation:**
- HTML5: More forgiving, designed for the real web
- XHTML: Stricter, requires well-formed XML
- HTML5 is recommended for modern development`,
      codeExamples: [
        {
          id: "ch32-s1-ex1",
          title: "Common validation errors",
          description: "Examples of invalid HTML and their fixes.",
          code: {
            html: `<!-- ERROR: Unclosed tag -->
<p>This paragraph is not closed

<!-- ERROR: Missing required attribute -->
<img src="photo.jpg">

<!-- ERROR: Invalid nesting -->
<p><strong>Bold text</p></strong>

<!-- ERROR: Duplicate ID -->
<div id="header">Header</div>
<div id="header">Another header</div>

<!-- FIXED: Valid HTML -->
<p>This paragraph is properly closed</p>

<img src="photo.jpg" alt="Description of photo">

<p><strong>Bold text</strong></p>

<div id="header">Header</div>
<div id="header-alt">Another header</div>`,
          },
          explanation: "The errors show common mistakes: unclosed p tag, missing alt on img, improper nesting of block and inline elements, duplicate IDs. The fixed versions address each issue with valid HTML.",
          tryItPrompt: "Copy the invalid examples to the W3C validator and see the specific error messages it provides.",
        },
      ],
      callouts: [
        { type: "info", title: "Validator extensions", content: "Browser extensions like 'HTML Validator' for Firefox or Chrome provide real-time validation as you develop. This catches errors immediately without needing to visit the W3C validator.",
        },
        { type: "common-mistake", title: "Ignoring warnings", content: "Don't ignore validation warnings. While some warnings are minor, they often indicate potential issues. Address warnings to ensure the highest code quality.",
        },
      ],
    },
    {
      id: "ch32-s2",
      title: "HTML Best Practices",
      whyItMatters: "Beyond validation, following best practices makes your HTML more maintainable, accessible, and performant. Good habits separate professional developers from amateurs.",
      content: `**Document structure:**
- Always include DOCTYPE declaration
- Specify lang attribute on html element
- Include meta charset and viewport
- Use semantic HTML elements
- Maintain proper heading hierarchy

**Naming conventions:**
- Use lowercase for element and attribute names
- Use hyphens for class names (not camelCase or underscores)
- Use descriptive IDs and classes
- Avoid presentational class names (red-box, big-text)

**Accessibility:**
- Always provide alt text for images
- Use labels for form inputs
- Ensure sufficient color contrast
- Make links descriptive (not 'click here')
- Use semantic elements

**Performance:**
- Minimize DOM depth
- Avoid inline styles and scripts
- Optimize images
- Use appropriate image formats
- Lazy load below-the-fold images

**SEO:**
- Include unique title and meta description
- Use proper heading structure
- Add canonical URLs
- Implement structured data
- Ensure mobile-friendly design

**Code organization:**
- Indent consistently
- Comment complex sections
- Separate concerns (HTML, CSS, JS)
- Use external files when appropriate
- Keep lines under 80-100 characters`,
      codeExamples: [
        {
          id: "ch32-s2-ex1",
          title: "Best practice HTML structure",
          description: "A well-structured HTML document following best practices.",
          code: {
            html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Page description">
  <title>Page Title | Site Name</title>
  <link rel="canonical" href="https://example.com/page">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="site-header">
    <nav class="main-navigation">
      <ul class="nav-list">
        <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
      </ul>
    </nav>
  </header>
  
  <main class="main-content">
    <h1>Page Heading</h1>
    <p class="intro-text">Introduction paragraph.</p>
    
    <article class="content-article">
      <h2>Article Heading</h2>
      <p>Article content...</p>
    </article>
  </main>
  
  <footer class="site-footer">
    <p>&copy; 2024 Site Name</p>
  </footer>
  
  <script src="app.js" defer></script>
</body>
</html>`,
          },
          explanation: "Includes DOCTYPE, lang attribute, meta charset and viewport. Uses semantic elements (header, nav, main, article, footer). Proper heading hierarchy (h1 → h2). Descriptive class names with hyphens. External CSS and JS with defer on script. This structure is valid, accessible, and maintainable.",
          tryItPrompt: "Validate this HTML with the W3C validator to confirm it passes validation.",
        },
      ],
      callouts: [
        { type: "tip", title: "Use linters in your editor", content: "Configure your editor with HTML linters and formatters (like ESLint for HTML, Prettier). These catch errors and enforce style automatically as you type.",
        },
        { type: "common-mistake", title: "Presentational class names", content: "Avoid class names like 'red-text', 'big-font', 'left-align'. These mix presentation with structure. Use semantic names like 'error-message', 'heading-primary', 'sidebar' instead.",
        },
      ],
    },
  ],
  exercises: [
    {
      id: "ch32-ex1",
      title: "Fix validation errors",
      difficulty: 1,
      description: "Identify and fix validation errors in an HTML document.",
      requirements: ["Fix unclosed tags", "Add missing required attributes", "Correct invalid nesting", "Remove duplicate IDs", "Add proper document structure"],
      starterCode: {
        html: `<div id="main">
  <h1>Page Title
  <img src="image.jpg">
  <p><strong>Bold text</p></strong>
  <div id="main">Content</div>
  <a href="">Click here</a>
</div>`,
      },
      hints: [
        "Close the h1 tag",
        "Add alt attribute to img",
        "Fix the p/strong nesting (inline inside block)",
        "Change duplicate ID to unique value",
        "Add href attribute to link",
      ],
      solution: {
        html: `<div id="main">
  <h1>Page Title</h1>
  <img src="image.jpg" alt="Description of image">
  <p><strong>Bold text</strong></p>
  <div id="content">Content</div>
  <a href="/page">Click here</a>
</div>`,
      },
      solutionExplanation: "Closed h1 tag. Added alt attribute to img. Fixed nesting by closing p before closing /strong. Changed duplicate 'main' ID to 'content'. Added href to anchor. All validation errors fixed.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch32-q1",
        type: "mcq",
        question: "What is the official HTML validation service?",
        options: ["Google Validator", "W3C Markup Validation Service", "HTML5 Validator", "CodePen Validator"],
        correctAnswer: 1,
        explanation: "The W3C Markup Validation Service at validator.w3.org is the official tool for validating HTML against W3C specifications.",
        difficulty: 1,
      },
      {
        id: "ch32-q2",
        type: "mcq",
        question: "Which attribute is required on img elements for accessibility?",
        options: ["title", "name", "alt", "src"],
        correctAnswer: 2,
        explanation: "The alt attribute is required on img elements for accessibility. It provides alternative text for screen readers and when the image can't be displayed.",
        difficulty: 1,
      },
      {
        id: "ch32-q3",
        type: "true-false",
        question: "Having duplicate IDs on different elements is valid HTML.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. IDs must be unique within a document. Duplicate IDs cause validation errors and can cause JavaScript and CSS issues since IDs should identify a single unique element.",
        difficulty: 1,
      },
      {
        id: "ch32-q4",
        type: "mcq",
        question: "What naming convention is recommended for CSS class names?",
        options: ["camelCase", "PascalCase", "kebab-case (hyphens)", "snake_case"],
        correctAnswer: 2,
        explanation: "kebab-case (using hyphens) is the recommended convention for CSS class names (e.g., 'main-content', 'nav-item'). This is consistent with HTML attribute naming and is widely adopted.",
        difficulty: 1,
      },
      {
        id: "ch32-q5",
        type: "mcq",
        question: "Why is including the lang attribute on the html element important?",
        options: [
          "It's required for validation",
          "It specifies the language for accessibility and search engines",
          "It makes the page load faster",
          "It's only needed for multi-language sites",
        ],
        correctAnswer: 1,
        explanation: "The lang attribute specifies the primary language of the page, which is important for screen readers (pronunciation), search engines (language detection), and browsers (hyphenation, translation).",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Validator", value: "validator.w3.org" },
    { label: "Required alt", value: "On all images" },
    { label: "Unique IDs", value: "No duplicates" },
    { label: "Proper nesting", value: "Block inside block" },
    { label: "Class names", value: "Use kebab-case" },
    { label: "DOCTYPE", value: "Always include" },
  ],
};

// ============================================================================
// HTML CHAPTER 33 — WEB COMPONENTS INTRO
// ============================================================================
export const htmlCh33: Chapter = {
  id: "html-ch-33",
  number: 33,
  title: "Web Components Intro",
  subtitle: "Custom elements overview.",
  difficulty: "Advanced",
  estimatedMinutes: 35,
  xpReward: 110,
  prerequisites: ["html-ch-32"],
  partLabel: "Part 6: Advanced HTML",
  learningObjectives: [
    "Understand what Web Components are and why they matter.",
    "Learn about custom elements and their naming conventions.",
    "Understand the Shadow DOM and its benefits.",
    "Learn about HTML templates and their use cases.",
    "Recognize when to use Web Components vs frameworks.",
  ],
  sections: [
    {
      id: "ch33-s1",
      title: "What are Web Components?",
      whyItMatters: "Web Components enable creating reusable, encapsulated custom HTML elements. They work across frameworks and browsers, giving you a standard way to build component-based UI without framework lock-in.",
      realWorldAnalogy: "Web Components are like LEGO bricks. Each brick is a self-contained piece that can connect with others to build anything. You don't need to know how the brick is made internally, just how to connect and use it.",
      content: `**Web Components are a set of web standards:**
- **Custom Elements**: Define your own HTML tags
- **Shadow DOM**: Encapsulate styles and markup
- **HTML Templates**: Define reusable markup templates
- **ES Modules**: Import and export JavaScript components

**Why Web Components matter:**
- **Framework-agnostic**: Work with any framework or vanilla JS
- **Encapsulation**: Styles don't leak out, external styles don't leak in
- **Reusability**: Create truly reusable components
- **Standards-based**: Built into browsers, no build step required
- **Interoperability**: Use across different projects and teams

**Custom Elements:**
Custom elements let you define your own HTML tags with a hyphen (required by spec):
\`\`\`
<my-component></my-component>
\`\`\`

The hyphen ensures your custom elements won't conflict with future HTML standards.

**Shadow DOM:**
Shadow DOM creates an isolated DOM tree within an element. Styles inside shadow DOM don't affect the page, and page styles don't affect the shadow DOM. True encapsulation.

**HTML Templates:**
The \`<template>\` element contains markup that isn't rendered until activated. Perfect for component markup that's cloned when needed.

**Browser support:**
All modern browsers support Web Components. Polyfills available for older browsers.`,
      codeExamples: [
        {
          id: "ch33-s1-ex1",
          title: "Basic custom element",
          description: "Creating and using a simple custom element.",
          code: {
            html: `<!-- Define custom element -->
<my-card title="Hello" content="This is a card"></my-card>

<script>
class MyCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  
  connectedCallback() {
    this.shadowRoot.innerHTML = \`
      <style>
        :host {
          display: block;
          border: 1px solid #ccc;
          padding: 20px;
          border-radius: 8px;
        }
        h2 { margin: 0 0 10px 0; color: #333; }
        p { margin: 0; color: #666; }
      </style>
      <h2>\${this.getAttribute('title')}</h2>
      <p>\${this.getAttribute('content')}</p>
    \`;
  }
}

customElements.define('my-card', MyCard);
</script>`,
          },
          explanation: "This custom element 'my-card' uses Shadow DOM for style encapsulation. The styles only affect the card, not the rest of the page. Attributes (title, content) are read and displayed. Works anywhere HTML works.",
          tryItPrompt: "Try adding multiple my-card elements with different content. Notice they're independent and styles don't conflict.",
        },
      ],
      callouts: [
        { type: "info", title: "Naming convention required", content: "Custom element names must contain a hyphen (my-component, user-card). This is required by the spec to avoid conflicts with future HTML elements. Single-word names are invalid.",
        },
        { type: "tip", title: "Start with vanilla Web Components", content: "Learn Web Components with vanilla JavaScript first. Frameworks like React, Vue, and Angular have Web Component integrations, but understanding the fundamentals is crucial.",
        },
      ],
    },
    {
      id: "ch33-s2",
      title: "Shadow DOM and Templates",
      whyItMatters: "Shadow DOM provides true encapsulation, solving CSS conflicts. Templates provide a way to define component markup that's reusable. Together, they form the foundation of robust Web Components.",
      content: `**Shadow DOM:**
Shadow DOM attaches a hidden DOM tree to an element. Benefits:
- **Style encapsulation**: Component styles don't leak out
- **DOM isolation**: Component DOM is hidden from page queries
- **Composition**: Slots allow content projection

**Creating Shadow DOM:**
\`\`\`
this.attachShadow({ mode: 'open' });
\`\`\`
- 'open': Accessible via element.shadowRoot
- 'closed': Not accessible from outside (rarely used)

**HTML Templates:**
The \`<template>\` element holds inert markup:
\`\`\`
<template id="card-template">
  <div class="card">
    <h2><slot name="title">Default Title</slot></h2>
    <p><slot>Default content</slot></p>
  </div>
</template>
\`\`\`

**Slots:**
Slots are placeholders in Shadow DOM for projected content:
- Default slot: \`<slot></slot>\`
- Named slots: \`<slot name="title"></slot>\`

**Using templates:**
\`\`\`
const template = document.getElementById('card-template');
const clone = template.content.cloneNode(true);
this.shadowRoot.appendChild(clone);
\`\`\`

**Lifecycle callbacks:**
- connectedCallback: When element is added to DOM
- disconnectedCallback: When element is removed from DOM
- attributeChangedCallback: When observed attributes change
- adoptedCallback: When element is moved to new document`,
      codeExamples: [
        {
          id: "ch33-s2-ex1",
          title: "Web Component with template and slots",
          description: "Using templates and slots for content projection.",
          code: {
            html: `<!-- Template definition -->
<template id="card-template">
  <style>
    .card {
      border: 1px solid #ddd;
      padding: 20px;
      border-radius: 8px;
    }
    .card-title {
      color: #333;
      margin: 0 0 10px 0;
    }
  </style>
  <div class="card">
    <h2 class="card-title">
      <slot name="title">Default Title</slot>
    </h2>
    <div class="card-content">
      <slot>Default content goes here</slot>
    </div>
  </div>
</template>

<!-- Usage -->
<my-component>
  <span slot="title">Custom Title</span>
  <p>This is custom content projected into the slot.</p>
</my-component>

<script>
class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  
  connectedCallback() {
    const template = document.getElementById('card-template');
    const clone = template.content.cloneNode(true);
    this.shadowRoot.appendChild(clone);
  }
}

customElements.define('my-component', MyComponent);
</script>`,
          },
          explanation: "The template contains the component structure with styles and slots. When the custom element is instantiated, it clones the template into its Shadow DOM. Content from the light DOM (outside shadow) is projected into the named slots.",
          tryItPrompt: "Try using my-component with and without slotted content. Notice how the default slot content is used when nothing is provided.",
        },
      ],
      callouts: [
        { type: "warning", title: "Shadow DOM limitations", content: "Shadow DOM has some limitations: global styles don't apply, some CSS selectors behave differently, and certain APIs (like getComputedStyle on slotted content) work differently. Plan accordingly.",
        },
        { type: "common-mistake", title: "Forgetting to clone template", content: "Always use cloneNode(true) when getting content from a template. If you append template.content directly, you move the template content instead of cloning it, which breaks reuse.",
        },
      ],
    },
  ],
  exercises: [
    {
      id: "ch33-ex1",
      title: "Create a simple custom element",
      difficulty: 1,
      description: "Create a basic custom element with Shadow DOM.",
      requirements: ["Define a custom element class extending HTMLElement", "Use attachShadow for encapsulation", "Implement connectedCallback to render", "Use a hyphen in the element name", "Add styles within Shadow DOM"],
      starterCode: {
        html: `<button-highlight>Click me</button-highlight>

<script>
// Add your custom element code here
</script>`,
      },
      hints: [
        "Class name should be PascalCase (ButtonHighlight)",
        "Element name must have hyphen (button-highlight)",
        "Call this.attachShadow({ mode: 'open' }) in constructor",
        "Add innerHTML to shadowRoot in connectedCallback",
        "Include style tag in the shadow content",
      ],
      solution: {
        html: `<button-highlight>Click me</button-highlight>

<script>
class ButtonHighlight extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  
  connectedCallback() {
    this.shadowRoot.innerHTML = \`
      <style>
        button {
          background: #007bff;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }
        button:hover {
          background: #0056b3;
        }
      </style>
      <button><slot></slot></button>
    \`;
  }
}

customElements.define('button-highlight', ButtonHighlight);
</script>`,
      },
      solutionExplanation: "Created ButtonHighlight class extending HTMLElement. Used attachShadow for style isolation. Rendered button with styles in connectedCallback. Used slot to project content. Defined with hyphenated name 'button-highlight'. Styles are encapsulated within Shadow DOM.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch33-q1",
        type: "mcq",
        question: "What is required in a custom element name?",
        options: ["It must be all lowercase", "It must contain a hyphen", "It must start with 'custom-'", "It must be a single word"],
        correctAnswer: 1,
        explanation: "Custom element names must contain a hyphen (e.g., my-component, user-card). This is required by the spec to avoid conflicts with future standard HTML elements.",
        difficulty: 1,
      },
      {
        id: "ch33-q2",
        type: "mcq",
        question: "What does Shadow DOM provide?",
        options: [
          "Faster JavaScript execution",
          "Style and DOM encapsulation",
          "Automatic SEO optimization",
          "Database storage",
        ],
        correctAnswer: 1,
        explanation: "Shadow DOM provides encapsulation for styles and DOM. Styles inside Shadow DOM don't affect the page, and page styles don't affect the Shadow DOM. This prevents CSS conflicts.",
        difficulty: 1,
      },
      {
        id: "ch33-q3",
        type: "true-false",
        question: "Web Components require a framework like React or Vue to work.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. Web Components are native browser standards and work without any framework. They're framework-agnostic and can be used with vanilla JavaScript or any framework.",
        difficulty: 1,
      },
      {
        id: "ch33-q4",
        type: "mcq",
        question: "What lifecycle method is called when a custom element is added to the DOM?",
        options: ["init()", "mounted()", "connectedCallback()", "attached()"],
        correctAnswer: 2,
        explanation: "connectedCallback() is called when the custom element is added to the document's DOM. This is where you typically initialize the component, set up Shadow DOM, or add event listeners.",
        difficulty: 1,
      },
      {
        id: "ch33-q5",
        type: "mcq",
        question: "What is the purpose of the <template> element in Web Components?",
        options: [
          "To define the component's JavaScript logic",
          "To hold inert markup that can be cloned and reused",
          "To store component data",
          "To handle component events",
        ],
        correctAnswer: 1,
        explanation: "The <template> element holds markup that isn't rendered until activated. You can clone its content multiple times, making it perfect for defining reusable component markup structures.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Custom element", value: "Must have hyphen" },
    { label: "Shadow DOM", value: "Style encapsulation" },
    { label: "attachShadow", value: "Create shadow tree" },
    { label: "connectedCallback", value: "When added to DOM" },
    { label: "Template", value: "Reusable markup" },
    { label: "Slots", value: "Content projection" },
  ],
};

// ============================================================================
// HTML CHAPTER 34 — TEMPLATE & SLOT
// ============================================================================
export const htmlCh34: Chapter = {
  id: "html-ch-34",
  number: 34,
  title: "Template & Slot",
  subtitle: "<template> and <slot> elements.",
  difficulty: "Advanced",
  estimatedMinutes: 30,
  xpReward: 100,
  prerequisites: ["html-ch-33"],
  partLabel: "Part 6: Advanced HTML",
  learningObjectives: [
    "Understand the <template> element and its purpose.",
    "Use the <slot> element for content projection.",
    "Create named and default slots.",
    "Clone template content for reuse.",
    "Apply templates outside Web Components.",
  ],
  sections: [
    {
      id: "ch34-s1",
      title: "The Template Element",
      whyItMatters: "The <template> element allows you to define HTML fragments that can be cloned and reused. This is essential for efficient component rendering and avoiding repetitive markup.",
      realWorldAnalogy: "A template is like a cookie cutter. You define the shape once (the template), then you can create as many cookies as you want (clones) without having to reshape the dough each time.",
      content: `**What is <template>?**
The \`<template>\` element contains HTML that isn't rendered when the page loads. It's inert until activated by JavaScript. Think of it as a blueprint for HTML fragments.

**Key characteristics:**
- Content is not rendered in the page
- Scripts inside don't execute
- Images and media don't load
- Styles inside don't apply to the page
- Content is hidden from selectors like querySelector

**Why use templates?**
- **Performance**: Avoid parsing the same markup repeatedly
- **Reusability**: Define once, use many times
- **Clean markup**: Keep HTML in HTML, not JavaScript strings
- **Web Components**: Essential for component architecture

**Accessing template content:**
\`\`\`
const template = document.getElementById('my-template');
const content = template.content; // DocumentFragment
\`\`\`

**Cloning templates:**
\`\`\`
const clone = template.content.cloneNode(true);
document.body.appendChild(clone);
\`\`\`
Use cloneNode(true) to create a deep copy including all descendants.

**Template for repeated content:**
Perfect for:
- List items that need to be generated dynamically
- Card layouts that appear multiple times
- Modal dialogs
- Form rows

**Browser support:**
<template> is supported in all modern browsers. Polyfills available for older browsers.`,
      codeExamples: [
        {
          id: "ch34-s1-ex1",
          title: "Basic template usage",
          description: "Defining and cloning a template.",
          code: {
            html: `<!-- Template definition -->
<template id="user-card-template">
  <div class="user-card">
    <div class="avatar">
      <img src="" alt="User avatar">
    </div>
    <div class="info">
      <h3 class="name">User Name</h3>
      <p class="email">user@example.com</p>
    </div>
  </div>
</template>

<!-- Container for cloned content -->
<div id="user-list"></div>

<script>
const users = [
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'bob@example.com' },
  { name: 'Charlie', email: 'charlie@example.com' }
];

const template = document.getElementById('user-card-template');
const container = document.getElementById('user-list');

users.forEach(user => {
  const clone = template.content.cloneNode(true);
  clone.querySelector('.name').textContent = user.name;
  clone.querySelector('.email').textContent = user.email;
  clone.querySelector('img').src = \`/avatars/\${user.name.toLowerCase()}.jpg\`;
  container.appendChild(clone);
});
</script>`,
          },
          explanation: "The template defines the card structure once. JavaScript clones it for each user, populating the data. This is more efficient than creating HTML strings in JavaScript and cleaner than hiding elements with CSS.",
          tryItPrompt: "Try adding more users to the array and see how the template is reused efficiently.",
        },
      ],
      callouts: [
        { type: "tip", title: "Use templates for dynamic lists", content: "Templates are perfect for rendering lists from data. Instead of building HTML strings in JavaScript, define a template and clone it for each item. This is cleaner and more maintainable.",
        },
        { type: "common-mistake", title: "Forgetting cloneNode(true)", content: "Always use cloneNode(true) (deep clone) when getting template content. Using template.content directly moves the content instead of copying it, so the template can only be used once.",
        },
      ],
    },
    {
      id: "ch34-s2",
      title: "The Slot Element",
      whyItMatters: "Slots enable content projection, allowing users to customize components by passing in their own content. This makes components flexible and reusable.",
      content: `**What is <slot>?**
The \`<slot>\` element is a placeholder inside a component (often in Shadow DOM) that can be filled with content from outside. It enables composition and customization.

**Default slot:**
\`\`\`
<template id="card-template">
  <div class="card">
    <slot>Default content if nothing provided</slot>
  </div>
</template>

<my-card>
  <p>Custom content that replaces the slot</p>
</my-card>
\`\`\`

**Named slots:**
\`\`\`
<template id="card-template">
  <div class="card">
    <header>
      <slot name="header">Default header</slot>
    </header>
    <main>
      <slot>Default body content</slot>
    </main>
    <footer>
      <slot name="footer">Default footer</slot>
    </footer>
  </div>
</template>

<my-card>
  <span slot="header">Custom Header</span>
  <p>Body content</p>
  <span slot="footer">Custom Footer</span>
</my-card>
\`\`\`

**Slot fallback content:**
The content between <slot> tags is fallback content shown when nothing is projected into the slot.

**Multiple slots with same name:**
If multiple elements have the same slot name, all of them are projected. This is useful for collecting content.

**Slot API (JavaScript):**
\`\`\`
const slot = this.shadowRoot.querySelector('slot');
const nodes = slot.assignedNodes(); // Get projected content
\`\`\``,
      codeExamples: [
        {
          id: "ch34-s2-ex1",
          title: "Component with named slots",
          description: "Using named slots for flexible component composition.",
          code: {
            html: `<template id="article-template">
  <style>
    .article { border: 1px solid #ddd; padding: 20px; }
    .article-header { border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 10px; }
    .article-footer { border-top: 1px solid #eee; padding-top: 10px; margin-top: 10px; color: #666; }
  </style>
  <article class="article">
    <header class="article-header">
      <slot name="header">Default Title</slot>
    </header>
    <div class="article-body">
      <slot>Default article content goes here</slot>
    </div>
    <footer class="article-footer">
      <slot name="footer">Article footer</slot>
    </footer>
  </article>
</template>

<!-- Usage with custom content -->
<custom-article>
  <h2 slot="header">My Custom Title</h2>
  <p>This is the main article content.</p>
  <p>It can contain multiple paragraphs.</p>
  <small slot="footer">Published Jan 15, 2024</small>
</custom-article>

<script>
class CustomArticle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  
  connectedCallback() {
    const template = document.getElementById('article-template');
    const clone = template.content.cloneNode(true);
    this.shadowRoot.appendChild(clone);
  }
}

customElements.define('custom-article', CustomArticle);
</script>`,
          },
          explanation: "The template has named slots for header, default content, and footer. When using the component, content with matching slot attributes is projected into the appropriate slots. Default content is used when nothing is provided.",
          tryItPrompt: "Try using the component without providing slotted content to see the fallback content in action.",
        },
      ],
      callouts: [
        { type: "info", title: "Light DOM vs Shadow DOM", content: "Slots work in both Shadow DOM and Light DOM. In Shadow DOM, they're essential for composition. In Light DOM, they're less common but still useful for component patterns.",
        },
        { type: "common-mistake", title: "Slot attribute vs element", content: "The slot attribute goes on the content being projected (light DOM), not on the slot element itself. Use <span slot=\"header\">Title</span> to project into <slot name=\"header\">.",
        },
      ],
    },
  ],
  exercises: [
    {
      id: "ch34-ex1",
      title: "Create a template with slots",
      difficulty: 1,
      description: "Create a template element with default and named slots.",
      requirements: ["Define a <template> element", "Include a default slot", "Include at least one named slot", "Provide fallback content for slots", "Show usage example with slotted content"],
      starterCode: {
        html: `<!-- Add your template here -->

<!-- Show usage example here -->`,
      },
      hints: [
        "Use <template id=\"...\"> to define the template",
        "Use <slot> for default content area",
        "Use <slot name=\"...\"> for named slots",
        "Add content between slot tags as fallback",
        "Use slot=\"...\" attribute on content to project",
      ],
      solution: {
        html: `<template id="card-template">
  <div class="card">
    <div class="card-header">
      <slot name="header">Default Header</slot>
    </div>
    <div class="card-body">
      <slot>Default card content</slot>
    </div>
    <div class="card-footer">
      <slot name="footer">Default Footer</slot>
    </div>
  </div>
</template>

<!-- Usage -->
<div id="container"></div>

<script>
const template = document.getElementById('card-template');
const clone = template.content.cloneNode(true);
document.getElementById('container').appendChild(clone);
</script>

<!-- With slotted content -->
<template id="card-template"></template>
<div id="container-with-content">
  <div class="card">
    <div class="card-header">
      <slot name="header">Default Header</slot>
    </div>
    <div class="card-body">
      <slot>Default card content</slot>
    </div>
    <div class="card-footer">
      <slot name="footer">Default Footer</slot>
    </div>
  </div>
</div>

<my-card>
  <h2 slot="header">Custom Header</h2>
  <p>Custom body content</p>
  <small slot="footer">Custom footer</small>
</my-card>`,
      },
      solutionExplanation: "Created template with named slots (header, footer) and default slot. Each slot has fallback content. Usage shows both default (no projection) and with slotted content using slot attributes to project into named slots.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch34-q1",
        type: "mcq",
        question: "What happens to content inside a <template> element by default?",
        options: [
          "It's rendered immediately",
          "It's hidden and not rendered until activated",
          "It's deleted from the DOM",
          "It's only visible in certain browsers",
        ],
        correctAnswer: 1,
        explanation: "Content inside a <template> is inert and not rendered when the page loads. It's hidden until activated by JavaScript, typically by cloning the template content.",
        difficulty: 1,
      },
      {
        id: "ch34-q2",
        type: "mcq",
        question: "How do you create a copy of template content?",
        options: [
          "template.content.clone()",
          "template.content.cloneNode(true)",
          "template.clone()",
          "template.copy()",
        ],
        correctAnswer: 1,
        explanation: "Use template.content.cloneNode(true) to create a deep copy of the template content. The true parameter ensures all descendants are also cloned. Without it, you get a shallow copy.",
        difficulty: 1,
      },
      {
        id: "ch34-q3",
        type: "true-false",
        question: "Scripts inside a <template> execute when the page loads.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. Scripts inside a <template> don't execute until the template is activated (cloned). This is part of what makes templates inert and efficient.",
        difficulty: 1,
      },
      {
        id: "ch34-q4",
        type: "mcq",
        question: "What attribute do you use to project content into a named slot?",
        options: ["slot-name", "slot", "for", "target"],
        correctAnswer: 1,
        explanation: "Use the slot attribute to project content into a named slot. For example, <span slot=\"header\">Title</span> projects into <slot name=\"header\">.",
        difficulty: 1,
      },
      {
        id: "ch34-q5",
        type: "mcq",
        question: "What is fallback content in a slot?",
        options: [
          "Content shown when the component fails to load",
          "Content shown when nothing is projected into the slot",
          "Content shown only in older browsers",
          "Content shown when JavaScript is disabled",
        ],
        correctAnswer: 1,
        explanation: "Fallback content is the content between <slot> tags that's displayed when no content is projected into that slot. It provides a default when the user doesn't provide custom content.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Template", value: "Inert HTML fragment" },
    { label: "cloneNode(true)", value: "Deep copy template" },
    { label: "Default slot", value: "<slot></slot>" },
    { label: "Named slot", value: "<slot name=\"...\">" },
    { label: "slot attribute", value: "Projects content" },
    { label: "Fallback", value: "Default slot content" },
  ],
};

// ============================================================================
// HTML CHAPTER 35 — DETAILS & SUMMARY
// ============================================================================
export const htmlCh35: Chapter = {
  id: "html-ch-35",
  number: 35,
  title: "Details & Summary",
  subtitle: "Native disclosure widgets.",
  difficulty: "Beginner",
  estimatedMinutes: 25,
  xpReward: 90,
  prerequisites: ["html-ch-34"],
  partLabel: "Part 6: Advanced HTML",
  learningObjectives: [
    "Understand the <details> and <summary> elements.",
    "Create native disclosure widgets without JavaScript.",
    "Style details and summary elements.",
    "Use the open attribute to control default state.",
    "Implement accessible accordions and expanders.",
  ],
  sections: [
    {
      id: "ch35-s1",
      title: "The Details Element",
      whyItMatters: "The <details> element provides a native, accessible way to create disclosure widgets (accordions, expanders) without JavaScript. It's semantic, keyboard-accessible, and works out of the box.",
      realWorldAnalogy: "The details element is like a file folder. It shows the label (summary) on the outside, and you can open it to see what's inside (content). No special tools or knowledge needed—it just works.",
      content: `**What is <details>?**
The \`<details>\` element creates a disclosure widget that users can open to reveal additional content. It's a native HTML element that works without JavaScript.

**Basic structure:**
\`\`\`
<details>
  <summary>Click to expand</summary>
  <p>This content is hidden until clicked.</p>
</details>
\`\`\`

**The <summary> element:**
The \`<summary>\` element defines the visible label for the details. It's clickable and shows a disclosure marker (triangle) by default.

**Key features:**
- **No JavaScript required**: Works with just HTML
- **Accessible**: Keyboard navigable, screen reader friendly
- **Semantic**: Clear meaning to browsers and assistive technology
- **Stylable**: Can be styled with CSS
- **open attribute**: Control default state

**The open attribute:**
\`\`\`
<details open>
  <summary>This is open by default</summary>
  <p>Content visible on page load</p>
</details>
\`\`\`

**Why use details/summary?**
- **Simplicity**: No need for custom JavaScript
- **Accessibility**: Built-in keyboard support (Enter/Space to toggle)
- **Performance**: Native browser implementation
- **SEO**: Content is indexed (even when closed)
- **Progressive enhancement**: Works without JavaScript

**Common use cases:**
- FAQs (frequently asked questions)
- Product specifications
- Expandable sections in documentation
- Nested content organization
- Form help text`,
      codeExamples: [
        {
          id: "ch35-s1-ex1",
          title: "Basic FAQ with details",
          description: "Creating an FAQ section using details/summary.",
          code: {
            html: `<h2>Frequently Asked Questions</h2>

<details>
  <summary>What is your return policy?</summary>
  <p>We accept returns within 30 days of purchase. Items must be in original condition with tags attached. Contact our support team to initiate a return.</p>
</details>

<details>
  <summary>Do you ship internationally?</summary>
  <p>Yes, we ship to over 100 countries worldwide. Shipping costs and delivery times vary by location. International orders may be subject to customs fees.</p>
</details>

<details open>
  <summary>How do I track my order?</summary>
  <p>You'll receive a tracking number via email once your order ships. Use this number on our website or the carrier's site to track your package in real-time.</p>
</details>`,
          },
          explanation: "Three FAQ items using details/summary. The third has the open attribute, so it's expanded by default. All are accessible via keyboard and screen readers without any JavaScript.",
          tryItPrompt: "Test keyboard navigation: Tab to each summary, press Enter or Space to toggle. Notice the native focus indicator and behavior.",
        },
      ],
      callouts: [
        { type: "tip", title: "Remove default marker", content: "You can remove the default disclosure marker (triangle) with CSS: summary { list-style: none; } summary::-webkit-details-marker { display: none; }. Then add your own indicator with ::after pseudo-element.",
        },
        { type: "common-mistake", title: "Forgetting summary", content: "Always include a <summary> element as the first child of <details>. Without it, the details still works but has no visible label, making it confusing for users.",
        },
      ],
    },
    {
      id: "ch35-s2",
      title: "Styling and Advanced Usage",
      whyItMatters: "While details/summary works out of the box, proper styling makes it match your design. Advanced techniques enable smooth animations and nested structures.",
      content: `**Styling the summary:**
\`\`\`
summary {
  cursor: pointer;
  font-weight: bold;
  padding: 10px;
  background: #f5f5f5;
}

summary:hover {
  background: #e0e0e0;
}
\`\`\`

**Styling the content:**
\`\`\`
details[open] summary {
  border-bottom: 1px solid #ddd;
}

details > *:not(summary) {
  padding: 15px;
  border-top: 1px solid #ddd;
}
\`\`\`

**Custom disclosure marker:**
\`\`\`
summary {
  list-style: none;
}
summary::-webkit-details-marker {
  display: none;
}
summary::before {
  content: '+ ';
  margin-right: 5px;
}
details[open] summary::before {
  content: '- ';
}
\`\`\`

**Nested details:**
\`\`\`
<details>
  <summary>Category 1</summary>
  <details>
    <summary>Subcategory 1.1</summary>
    <p>Nested content</p>
  </details>
  <details>
    <summary>Subcategory 1.2</summary>
    <p>More nested content</p>
  </details>
</details>
\`\`\`

**CSS transitions (limited):**
Direct CSS transitions on details open/close aren't possible. Workarounds use JavaScript or CSS animations on the content height.

**Controlling with JavaScript:**
\`\`\`
const details = document.querySelector('details');
details.open = true; // Open programmatically
details.open = false; // Close programmatically

// Listen for toggle
details.addEventListener('toggle', (e) => {
  console.log('Details toggled:', details.open);
});
\`\`\``,
      codeExamples: [
        {
          id: "ch35-s2-ex1",
          title: "Styled accordion",
          description: "A fully styled accordion with custom markers.",
          code: {
            html: `<style>
  .accordion-item {
    border: 1px solid #ddd;
    margin-bottom: 5px;
    border-radius: 4px;
    overflow: hidden;
  }
  
  .accordion-summary {
    cursor: pointer;
    padding: 15px;
    background: #f8f9fa;
    font-weight: 600;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .accordion-summary::-webkit-details-marker {
    display: none;
  }
  
  .accordion-summary::after {
    content: '+';
    font-size: 20px;
    transition: transform 0.2s;
  }
  
  details[open] .accordion-summary::after {
    transform: rotate(45deg);
  }
  
  details[open] .accordion-summary {
    background: #e9ecef;
  }
  
  .accordion-content {
    padding: 15px;
    background: white;
    border-top: 1px solid #ddd;
  }
</style>

<div class="accordion">
  <details class="accordion-item">
    <summary class="accordion-summary">Shipping Information</summary>
    <div class="accordion-content">
      <p>We offer free shipping on orders over $50. Standard delivery takes 3-5 business days. Express shipping is available for an additional fee.</p>
    </div>
  </details>
  
  <details class="accordion-item">
    <summary class="accordion-summary">Payment Methods</summary>
    <div class="accordion-content">
      <p>We accept all major credit cards, PayPal, and Apple Pay. Payment is processed securely at checkout.</p>
    </div>
  </details>
  
  <details class="accordion-item">
    <summary class="accordion-summary">Contact Support</summary>
    <div class="accordion-content">
      <p>Email us at support@example.com or call 1-800-123-4567. Our team is available Monday-Friday, 9am-5pm EST.</p>
    </div>
  </details>
</div>`,
          },
          explanation: "Fully styled accordion with custom plus/minus markers that rotate on open. Each item has consistent styling with borders, padding, and hover effects. The marker rotates 45 degrees when opened (plus becomes X).",
          tryItPrompt: "Try clicking each accordion item. Notice the smooth rotation of the marker and the background color change when opened.",
        },
      ],
      callouts: [
        { type: "info", title: "Toggle event", content: "The details element fires a 'toggle' event when opened or closed. Listen for this event with JavaScript to trigger animations or other side effects when the state changes.",
        },
        { type: "common-mistake", title: "Animating height directly", content: "You can't use CSS transition directly on the details element for smooth height animation. The content goes from display: none to display: block, which can't be transitioned. Use JavaScript height animation or CSS grid tricks for smooth animations.",
        },
      ],
    },
  ],
  exercises: [
    {
      id: "ch35-ex1",
      title: "Create a product specifications accordion",
      difficulty: 1,
      description: "Create an accordion for product specifications using details/summary.",
      requirements: ["Use <details> and <summary> elements", "Include at least 3 expandable sections", "Add appropriate content for each section", "Style the accordion with CSS", "Make one section open by default"],
      starterCode: {
        html: `<h2>Product Specifications</h2>

<!-- Add your accordion here -->`,
      },
      hints: [
        "Use details for each section",
        "Use summary for the visible label",
        "Add open attribute to one details element",
        "Style summary and content with CSS",
        "Consider adding a custom disclosure marker",
      ],
      solution: {
        html: `<h2>Product Specifications</h2>

<style>
  .spec-item {
    border: 1px solid #e0e0e0;
    margin-bottom: 8px;
    border-radius: 4px;
  }
  
  .spec-summary {
    cursor: pointer;
    padding: 12px 15px;
    background: #f5f5f5;
    font-weight: 500;
    list-style: none;
  }
  
  .spec-summary::-webkit-details-marker {
    display: none;
  }
  
  .spec-summary::before {
    content: '▶ ';
    font-size: 12px;
    margin-right: 8px;
  }
  
  details[open] .spec-summary::before {
    content: '▼ ';
  }
  
  .spec-content {
    padding: 15px;
    background: white;
    line-height: 1.6;
  }
</style>

<details class="spec-item">
  <summary class="spec-summary">Dimensions</summary>
  <div class="spec-content">
    <p><strong>Height:</strong> 10 inches</p>
    <p><strong>Width:</strong> 8 inches</p>
    <p><strong>Depth:</strong> 5 inches</p>
    <p><strong>Weight:</strong> 2.5 lbs</p>
  </div>
</details>

<details class="spec-item">
  <summary class="spec-summary">Materials</summary>
  <div class="spec-content">
    <p>Constructed from premium-grade aluminum with a powder-coated finish. Features tempered glass panels and stainless steel hardware for durability.</p>
  </div>
</details>

<details open class="spec-item">
  <summary class="spec-summary">Technical Specifications</summary>
  <div class="spec-content">
    <p><strong>Power:</strong> 100-240V, 50/60Hz</p>
    <p><strong>Warranty:</strong> 2 years limited</p>
    <p><strong>Certification:</strong> CE, FCC, RoHS compliant</p>
    <p><strong>Operating Temperature:</strong> 0°C to 40°C</p>
  </div>
</details>`,
      },
      solutionExplanation: "Created accordion with 3 specification sections. Each uses details/summary structure. Added CSS styling with custom arrow markers (▶/▼) that change on open. Technical Specifications has open attribute to show by default. Clean, accessible implementation without JavaScript.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch35-q1",
        type: "mcq",
        question: "What element should be the first child of <details>?",
        options: ["<div>", "<header>", "<summary>", "<p>"],
        correctAnswer: 2,
        explanation: "<summary> should be the first child of <details>. It defines the visible label that users click to toggle the details. While not strictly required, it's essential for usability.",
        difficulty: 1,
      },
      {
        id: "ch35-q2",
        type: "mcq",
        question: "What attribute makes a details element open by default?",
        options: ["expanded", "visible", "open", "active"],
        correctAnswer: 2,
        explanation: "The open attribute on a details element makes it expanded by default when the page loads. Without it, the details starts closed. The attribute is a boolean (present or absent).",
        difficulty: 1,
      },
      {
        id: "ch35-q3",
        type: "true-false",
        question: "The details/summary elements require JavaScript to function.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. details/summary are native HTML elements that work without JavaScript. They provide built-in toggle functionality, keyboard accessibility, and screen reader support out of the box.",
        difficulty: 1,
      },
      {
        id: "ch35-q4",
        type: "mcq",
        question: "What CSS pseudo-element targets the default disclosure marker?",
        options: ["::marker", "::disclosure-marker", "::-webkit-details-marker", "::arrow"],
        correctAnswer: 2,
        explanation: "::-webkit-details-marker targets the default triangle disclosure marker in WebKit/Blink browsers. Use it to hide or style the default marker, then add your own with ::before or ::after.",
        difficulty: 1,
      },
      {
        id: "ch35-q5",
        type: "mcq",
        question: "What event does the details element fire when toggled?",
        options: ["click", "change", "toggle", "open"],
        correctAnswer: 2,
        explanation: "The details element fires a 'toggle' event when it's opened or closed. You can listen for this event in JavaScript to trigger animations or other actions when the state changes.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Details", value: "Native disclosure widget" },
    { label: "Summary", value: "Visible label" },
    { label: "open attribute", value: "Default expanded state" },
    { label: "No JS required", value: "Works with HTML only" },
    { label: "Accessible", value: "Keyboard and screen reader" },
    { label: "toggle event", value: "Fires on open/close" },
  ],
};
