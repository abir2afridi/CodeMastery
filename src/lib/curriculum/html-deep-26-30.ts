import type { Chapter } from "./types";

// ============================================================================
// HTML CHAPTER 26 — IMAGES & ACCESSIBILITY
// ============================================================================
export const htmlCh26: Chapter = {
  id: "html-ch-26",
  number: 26,
  title: "Images & Accessibility",
  subtitle: "Writing great alt text.",
  difficulty: "Intermediate",
  estimatedMinutes: 35,
  xpReward: 110,
  prerequisites: ["html-ch-25"],
  partLabel: "Part 4: Accessibility",
  learningObjectives: [
    "Write effective alt text that conveys image meaning.",
    "Determine when to use descriptive alt text vs empty alt text.",
    "Handle complex images (charts, infographics) with extended descriptions.",
    "Avoid common alt text mistakes.",
    "Use appropriate image formats for accessibility.",
  ],
  sections: [
    {
      id: "ch26-s1",
      title: "The Alt Attribute",
      whyItMatters: "Without alt text, screen reader users don't know what an image shows. Alt text is the bridge between visual content and accessibility. Writing good alt text is one of the most impactful accessibility improvements you can make.",
      realWorldAnalogy: "Alt text is like a caption for a photo in a magazine. If you can't see the photo, the caption tells you what it shows. A good caption provides the essential information without unnecessary detail.",
      content: `The alt attribute provides alternative text for images. When an image can't be displayed (slow connection, broken link, screen reader), the alt text is shown or announced instead.

**Basic syntax:**
\`\`\`
<img src="sunset.jpg" alt="A colorful sunset over the ocean with orange and pink clouds">
\`\`\`

**When to use alt text:**
- **Informative images**: Always describe what the image conveys
- **Functional images**: Describe the function (e.g., 'Search' for a magnifying glass icon)
- **Decorative images**: Use empty alt text (alt=\"\") so screen readers skip them
- **Complex images**: Use alt text for a brief description, plus a long description elsewhere

**Writing effective alt text:**
- **Be concise**: Typically 1-2 sentences, under 125 characters
- **Be specific**: Describe what's visually important, not every detail
- **Be functional**: Focus on why the image is there, what information it provides
- **Avoid redundancy**: Don't repeat information already in adjacent text
- **Use present tense**: 'A dog runs' not 'A dog is running'
- **Don't include 'image of'**: Screen readers already say 'image'

**Examples:**
- GOOD: alt=\"A bar chart showing 50% increase in sales from 2020 to 2024\"
- BAD: alt=\"chart.png\" or alt=\"Image of a chart\"
- GOOD: alt=\"\" (for decorative icons)
- BAD: alt=\"decorative icon\" (screen readers will announce 'decorative icon')`,
      codeExamples: [
        {
          id: "ch26-s1-ex1",
          title: "Good vs bad alt text",
          description: "Comparing effective and ineffective alt text.",
          code: {
            html: `<!-- BAD: Filename as alt text -->
<img src="team-meeting.jpg" alt="team-meeting.jpg">

<!-- BAD: Redundant 'image of' -->
<img src="team-meeting.jpg" alt="Image of a team meeting">

<!-- BAD: Too vague -->
<img src="team-meeting.jpg" alt="People in a room">

<!-- GOOD: Descriptive and specific -->
<img src="team-meeting.jpg" alt="Five people sitting around a conference table with laptops and coffee">

<!-- DECORATIVE: Empty alt text -->
<img src="decorative-divider.png" alt="">`,
          },
          explanation: "The good alt text describes what's actually in the image and why it matters. The decorative image has empty alt text so screen readers skip it entirely.",
          tryItPrompt: "Try using a screen reader or browser accessibility tools to hear how each image is announced.",
        },
      ],
      callouts: [
        { type: "common-mistake", title: "Leaving alt empty by default", content: "Never leave the alt attribute completely off (not even alt=\"\") unless you've intentionally decided the image is decorative. Missing alt makes screen readers announce the filename, which is usually meaningless." },
        { type: "tip", title: "Test by closing your eyes", content: "A good test: close your eyes and have someone describe the image to you. If their description gives you the essential information, that's good alt text. If you're still confused, add more detail." },
      ],
    },
    {
      id: "ch26-s2",
      title: "Complex Images and Extended Descriptions",
      whyItMatters: "Some images (charts, graphs, infographics) contain too much information for brief alt text. You need strategies to make complex visual content accessible.",
      content: `**Charts and graphs:**
Alt text should provide the key takeaway:
- What type of chart is it?
- What data does it show?
- What's the main trend or conclusion?

For detailed data, provide:
- A data table as an alternative
- A link to a detailed description
- Use aria-describedby to link to a longer description

**Infographics:**
Infographics combine text and visuals. Provide:
- A text summary of the key points
- A structured alternative (list or table)
- Consider whether the infographic can be restructured as accessible HTML instead

**Maps:**
Provide:
- Alt text explaining what the map shows
- A text-based alternative listing locations or directions
- Ensure any interactive map features are keyboard accessible

**Mathematical equations:**
Images of equations should have:
- Alt text with the equation in readable form (e.g., \"E equals mc squared\")
- Consider MathML or MathJax for complex equations
- Provide a text explanation of what the equation means

**The longdesc attribute (deprecated but still understood):**
\`\`\`
<img src="complex-chart.png" alt="Sales growth chart 2020-2024" longdesc="chart-description.html">
\`\`\`

Modern alternative: aria-describedby linking to a detailed description on the page.`,
      codeExamples: [
        {
          id: "ch26-s2-ex1",
          title: "Accessible chart with data table alternative",
          description: "Providing both alt text and a structured alternative for complex images.",
          code: {
            html: `<figure>
  <img src="sales-chart.png" alt="Bar chart showing sales increased from $1M in 2020 to $1.5M in 2024" aria-describedby="chart-details">
  
  <figcaption id="chart-details">
    <h3>Sales Data 2020-2024</h3>
    <table>
      <tr>
        <th>Year</th>
        <th>Sales</th>
        <th>Growth</th>
      </tr>
      <tr>
        <td>2020</td>
        <td>$1.0M</td>
        <td>-</td>
      </tr>
      <tr>
        <td>2021</td>
        <td>$1.2M</td>
        <td>+20%</td>
      </tr>
      <tr>
        <td>2022</td>
        <td>$1.3M</td>
        <td>+8%</td>
      </tr>
      <tr>
        <td>2023</td>
        <td>$1.4M</td>
        <td>+8%</td>
      </tr>
      <tr>
        <td>2024</td>
        <td>$1.5M</td>
        <td>+7%</td>
      </tr>
    </table>
    <p>Overall growth: 50% over 4 years</p>
  </figcaption>
</figure>`,
          },
          explanation: "The alt text provides the key takeaway from the chart. The aria-describedby links to a detailed data table that screen reader users can navigate. The figure and figcaption elements semantically group the image with its description.",
          tryItPrompt: "Navigate this with a screen reader. The alt text gives the overview, and the linked table provides the detailed data in an accessible format.",
        },
      ],
      callouts: [
        { type: "info", title: "Consider SVG for simple graphics", content: "Simple charts and icons can be created as SVG with inline text. This makes them fully accessible without needing separate alt text or descriptions. The text inside SVG is readable by screen readers." },
        { type: "common-mistake", title: "Over-describing simple images", content: "Don't write a paragraph for a simple icon. A magnifying glass icon doesn't need 'A round glass circle with a handle used for searching' — just 'Search' is sufficient. Focus on function, not visual appearance." },
      ],
    },
  ],
  exercises: [
    {
      id: "ch26-ex1",
      title: "Write alt text for various images",
      difficulty: 1,
      description: "Provide appropriate alt text for different types of images.",
      requirements: ["Write descriptive alt text for informative images", "Use empty alt text for decorative images", "Write functional alt text for icon buttons", "Keep alt text concise but informative"],
      starterCode: {
        html: `<!-- An informative photo -->
<img src="product.jpg">

<!-- A decorative divider image -->
<img src="divider.png">

<!-- A search icon button -->
<button>
  <img src="search-icon.png">
</button>

<!-- A company logo -->
<img src="logo.png">`,
      },
      hints: [
        "Describe what's visually important and why it matters",
        "Use alt=\"\" for purely decorative images",
        "For icon buttons, describe the function not the appearance",
        "For logos, use the company name as alt text",
      ],
      solution: {
        html: `<!-- An informative photo -->
<img src="product.jpg" alt="Blue wireless headphones with black padding on a white background">

<!-- A decorative divider image -->
<img src="divider.png" alt="">

<!-- A search icon button -->
<button aria-label="Search">
  <img src="search-icon.png" alt="">
</button>

<!-- A company logo -->
<img src="logo.png" alt="TechCorp">`,
      },
      solutionExplanation: "The product image has descriptive alt text. The divider has empty alt text since it's decorative. The button uses aria-label instead of alt (the image has empty alt since the button provides the label). The logo uses the company name as alt text.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch26-q1",
        type: "mcq",
        question: "What happens when an image has no alt attribute at all?",
        options: [
          "The image is hidden from everyone",
          "Screen readers announce the image filename",
          "The browser shows an error",
          "Screen readers skip the image silently",
        ],
        correctAnswer: 1,
        explanation: "When alt is completely missing, screen readers typically announce the filename (which is often meaningless like 'IMG_1234.jpg' or 'image.png'). Always include alt, even if it's empty.",
        difficulty: 1,
      },
      {
        id: "ch26-q2",
        type: "mcq",
        question: "When should you use empty alt text (alt=\"\")?",
        options: [
          "Never, always provide alt text",
          "When the image is purely decorative and provides no information",
          "When the image is large",
          "When the image is a photograph",
        ],
        correctAnswer: 1,
        explanation: "Use empty alt text for decorative images that don't convey meaningful information — icons, dividers, background patterns. Screen readers will skip these images entirely.",
        difficulty: 1,
      },
      {
        id: "ch26-q3",
        type: "true-false",
        question: "It's good practice to include 'Image of' at the start of alt text.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. Screen readers already announce 'image' before the alt text. Including 'Image of' is redundant and wastes the user's time. Start directly with the description.",
        difficulty: 1,
      },
      {
        id: "ch26-q4",
        type: "mcq",
        question: "What is the recommended approach for complex charts and graphs?",
        options: [
          "Write a very long alt text describing every detail",
          "Provide key takeaway in alt text plus a data table as alternative",
          "Don't use alt text for complex images",
          "Only provide alt text if the chart is simple",
        ],
        correctAnswer: 1,
        explanation: "For complex visual content, provide brief alt text with the key message, then offer a structured alternative like a data table or detailed description. This gives users both the summary and the ability to explore details.",
        difficulty: 2,
      },
      {
        id: "ch26-q5",
        type: "mcq",
        question: "How should you handle a magnifying glass icon used as a search button?",
        options: [
          "alt=\"A magnifying glass icon\"",
          "alt=\"Image of magnifying glass\"",
          "alt=\"Search\" or use aria-label on the button",
          "alt=\"\" (empty)",
        ],
        correctAnswer: 2,
        explanation: "For functional images like icon buttons, describe what the button does, not what it looks like. 'Search' tells the user the function. Better yet, use aria-label on the button and empty alt on the image.",
        difficulty: 1,
      },
    ],
  },
  cheatSheet: [
    { label: "Informative images", value: "Describe meaning" },
    { label: "Decorative images", value: "alt empty string" },
    { label: "Functional images", value: "Describe function" },
    { label: "Keep it concise", value: "1-2 sentences" },
    { label: "No 'image of'", value: "Screen readers say it" },
    { label: "Complex images", value: "Alt + table/description" },
  ],
};

// ============================================================================
// HTML CHAPTER 27 — HOW SEARCH ENGINES READ HTML
// ============================================================================
export const htmlCh27: Chapter = {
  id: "html-ch-27",
  number: 27,
  title: "How Search Engines Read HTML",
  subtitle: "Crawlers, indexing, ranking signals.",
  difficulty: "Intermediate",
  estimatedMinutes: 40,
  xpReward: 120,
  prerequisites: ["html-ch-26"],
  partLabel: "Part 5: SEO & Performance",
  learningObjectives: [
    "Understand how search engines crawl and index web pages.",
    "Identify the HTML elements that matter most for SEO.",
    "Optimize page structure for search engine understanding.",
    "Avoid common SEO mistakes in HTML.",
    "Recognize the difference between technical SEO and content SEO.",
  ],
  sections: [
    {
      id: "ch27-s1",
      title: "The Search Engine Process",
      whyItMatters: "Understanding how search engines work helps you write HTML that they can easily understand and rank. Good HTML structure is the foundation of technical SEO.",
      realWorldAnalogy: "Search engines are like librarians. They crawl (read) books (websites), index (catalog) them by topic, and when you ask a question (search), they retrieve the most relevant books. Your HTML is the book's table of contents — if it's clear, the librarian can understand and recommend it.",
      content: `Search engines work in three main phases:

**1. Crawling (Discovery)**
Search engine bots (crawlers/spiders) discover pages by:
- Following links from known pages
- Reading sitemaps (XML sitemaps list your URLs)
- Processing backlinks from other sites

Crawlers read your HTML and follow links to discover more pages. They have a 'crawl budget' — limited time/resources for your site. Make important pages easy to discover.

**2. Indexing (Understanding)**
After crawling, search engines analyze and store your page:
- Extract content from HTML (text, images, videos)
- Understand page structure (headings, sections, lists)
- Identify entities (people, places, things mentioned)
- Store in a massive database (the index)

If a page isn't indexed, it can't appear in search results.

**3. Ranking (Retrieval)**
When someone searches, the engine:
- Retrieves relevant pages from the index
- Ranks them by relevance and quality
- Displays results (typically 10 per page)

Ranking factors include:
- Content relevance to the query
- Page quality and authority
- User experience signals
- Technical performance
- Backlinks from other sites

**Your HTML's role:**
Good HTML helps all three phases:
- **Crawling**: Clear link structure, sitemaps, no blocking
- **Indexing**: Semantic structure, meta tags, schema markup
- **Ranking**: Fast loading, mobile-friendly, accessible content`,
      codeExamples: [
        {
          id: "ch27-s1-ex1",
          title: "SEO-friendly vs unfriendly structure",
          description: "How HTML structure affects search engine understanding.",
          code: {
            html: `<!-- BAD: Everything is divs, no semantic structure -->
<div class="title">My Article</div>
<div class="content">Article content...</div>
<div class="sidebar">Related links</div>

<!-- GOOD: Semantic HTML that search engines understand -->
<article>
  <h1>My Article</h1>
  <p>Article content...</p>
  
  <aside>
    <h2>Related Links</h2>
    <ul>
      <li><a href="/article2">Related Article 2</a></li>
    </ul>
  </aside>
</article>`,
          },
          explanation: "The BAD version gives search engines no semantic context — they see generic divs. The GOOD version uses article, h1, aside, h2, and ul, which clearly communicate the content structure. Search engines understand this hierarchy and can better index and rank the content.",
          tryItPrompt: "Use a tool like Google's Rich Results Test to see how search engines interpret each structure. The semantic version will be much better understood.",
        },
      ],
      callouts: [
        { type: "info", title: "Google Search Console", content: "Submit your sitemap to Google Search Console to help Google discover your pages. It also shows crawling errors, indexing issues, and performance data. Essential for monitoring SEO health." },
        { type: "common-mistake", title: "Blocking crawlers", content: "Never block search engine crawlers with robots.txt or meta robots unless you have a specific reason. If crawlers can't access your pages, they can't index or rank them." },
      ],
    },
    {
      id: "ch27-s2",
      title: "HTML Elements That Matter for SEO",
      whyItMatters: "Certain HTML elements have direct impact on how search engines understand and rank your pages. Using them correctly is essential for SEO.",
      content: `**Title tag (<title>):**
- Most important on-page SEO element
- Appears in search results and browser tabs
- Keep under 60 characters to avoid truncation
- Include primary keyword near the beginning
- Make it compelling for clicks (CTR affects rankings)

**Meta description:**
- Brief summary of page content (150-160 characters)
- Appears in search results below the title
- Not a direct ranking factor, but affects CTR
- Include relevant keywords naturally

**Headings (h1-h6):**
- h1 is the main heading (one per page)
- Use hierarchical structure (h1 → h2 → h3)
- Include keywords naturally in headings
- Headings help search engines understand content organization

**Links and anchor text:**
- Internal links help crawlers discover pages
- External links to authoritative sources can help
- Descriptive anchor text helps context (not 'click here')
- Link structure affects page authority distribution

**Images:**
- Alt text helps search engines understand image content
- Image SEO: descriptive filenames, alt text, captions
- Images can appear in image search results

**URL structure:**
- Short, descriptive URLs are better
- Use hyphens to separate words (not underscores)
- Include relevant keywords when natural
- Avoid long, cryptic URLs with parameters

**Canonical URLs:**
- Prevent duplicate content issues
- Tell search engines which version is preferred
- Use rel=\"canonical\" link tag`,
      codeExamples: [
        {
          id: "ch27-s2-ex1",
          title: "SEO-optimized head section",
          description: "Proper meta tags and structure for search engines.",
          code: {
            html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>Best Coffee Makers 2024 - Complete Buying Guide | CoffeeReviews</title>
  
  <meta name="description" content="Discover the top-rated coffee makers of 2024. Our experts tested 50+ models to bring you honest reviews, comparisons, and buying tips for every budget.">
  
  <meta name="keywords" content="coffee maker, coffee machine, best coffee maker 2024">
  
  <link rel="canonical" href="https://coffeereviews.com/best-coffee-makers-2024">
  
  <meta property="og:title" content="Best Coffee Makers 2024 - Complete Buying Guide">
  <meta property="og:description" content="Expert reviews of the top coffee makers.">
  <meta property="og:image" content="https://coffeereviews.com/images/coffee-maker-review.jpg">
  <meta property="og:url" content="https://coffeereviews.com/best-coffee-makers-2024">
  <meta property="og:type" content="article">
</head>`,
          },
          explanation: "Title includes primary keyword and brand. Meta description is compelling and under 160 characters. Canonical URL prevents duplicate content. Open Graph tags optimize social sharing. Keywords meta tag is included but has minimal impact on modern SEO.",
          tryItPrompt: "Use a snippet preview tool to see how this would appear in Google search results. Notice the title and description are optimized for both search engines and human clicks.",
        },
      ],
      callouts: [
        { type: "tip", title: "Write for humans first", content: "Optimize for search engines, but never sacrifice readability for keyword stuffing. Search engines increasingly prioritize content that actually helps users. Good content is the best SEO." },
        { type: "warning", title: "Keyword stuffing", content: "Don't overuse keywords unnaturally. 'Best coffee maker coffee coffee maker best' hurts readability and can trigger spam penalties. Use keywords naturally and focus on quality content." },
      ],
    },
  ],
  exercises: [
    {
      id: "ch27-ex1",
      title: "Optimize a page for search engines",
      difficulty: 1,
      description: "Improve the HTML structure and meta tags of a page for better SEO.",
      requirements: ["Add a descriptive title tag under 60 characters", "Add a compelling meta description under 160 characters", "Use proper heading hierarchy", "Add a canonical URL", "Include descriptive alt text on images"],
      starterCode: {
        html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page</title>
</head>
<body>
  <div class="main-title">My Blog Post</div>
  <div class="content">
    <p>Content here...</p>
    <img src="image.jpg">
  </div>
</body>
</html>`,
      },
      hints: [
        "Title should include the main topic and be compelling",
        "Meta description should summarize the content and encourage clicks",
        "Use h1 for the main title, h2 for section headings",
        "Add rel=canonical pointing to the page URL",
        "Add descriptive alt text to the image",
      ],
      solution: {
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>10 Tips for Better Sleep - Complete Guide | SleepWell</title>
  <meta name="description" content="Discover 10 science-backed tips to improve your sleep quality. Learn about sleep cycles, bedtime routines, and creating the perfect sleep environment.">
  <link rel="canonical" href="https://sleepwell.com/tips-for-better-sleep">
</head>
<body>
  <h1>10 Tips for Better Sleep</h1>
  <article>
    <p>Content here...</p>
    <img src="sleeping-person.jpg" alt="Person sleeping peacefully in a comfortable bed with soft lighting">
  </article>
</body>
</html>`,
      },
      solutionExplanation: "Title is descriptive, includes keyword, under 60 chars. Meta description is compelling and under 160 chars. Used h1 instead of div for main title. Wrapped content in article for semantics. Added canonical URL. Added descriptive alt text to image.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch27-q1",
        type: "mcq",
        question: "What is the most important on-page HTML element for SEO?",
        options: ["Meta description", "Title tag", "Keywords meta tag", "Alt text"],
        correctAnswer: 1,
        explanation: "The title tag is the most important on-page SEO element. It appears in search results, browser tabs, and is a major ranking factor. Keep it under 60 characters and include your primary keyword.",
        difficulty: 1,
      },
      {
        id: "ch27-q2",
        type: "mcq",
        question: "What is the recommended maximum length for a meta description?",
        options: ["50 characters", "100 characters", "160 characters", "300 characters"],
        correctAnswer: 2,
        explanation: "Meta descriptions should be under 160 characters to avoid being truncated in search results. While not a direct ranking factor, compelling descriptions improve click-through rates which indirectly affects rankings.",
        difficulty: 1,
      },
      {
        id: "ch27-q3",
        type: "true-false",
        question: "Search engines can index and understand pages that use only div elements instead of semantic HTML.",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation: "True, search engines can index div-based pages, but they understand semantic HTML much better. Semantic elements provide clear structure and meaning that helps search engines understand, index, and rank your content more effectively.",
        difficulty: 1,
      },
      {
        id: "ch27-q4",
        type: "mcq",
        question: "What is the purpose of a canonical URL?",
        options: [
          "To make a page load faster",
          "To tell search engines which version of a page is the preferred one",
          "To hide pages from search engines",
          "To create a mobile version of a page",
        ],
        correctAnswer: 1,
        explanation: "Canonical URLs prevent duplicate content issues by telling search engines which version of a page is the original/preferred one. This consolidates ranking signals and prevents penalties for duplicate content.",
        difficulty: 2,
      },
      {
        id: "ch27-q5",
        type: "mcq",
        question: "Which heading element should be used for the main page title?",
        options: ["There should be no headings", "h2", "h3", "h1"],
        correctAnswer: 3,
        explanation: "Each page should have exactly one h1 element for the main title. This helps search engines understand the primary topic of the page. Use h2, h3, etc. for subheadings in hierarchical order.",
        difficulty: 1,
      },
    ],
  },
  cheatSheet: [
    { label: "Title tag", value: "Most important, under 60 chars" },
    { label: "Meta description", value: "Under 160 chars, compelling" },
    { label: "One h1 per page", value: "Main heading" },
    { label: "Heading hierarchy", value: "h1 → h2 → h3" },
    { label: "Canonical URL", value: "Prevent duplicates" },
    { label: "Alt text", value: "Helps image SEO" },
  ],
};

// ============================================================================
// HTML CHAPTER 28 — META TAGS FOR SEO
// ============================================================================
export const htmlCh28: Chapter = {
  id: "html-ch-28",
  number: 28,
  title: "Meta Tags for SEO",
  subtitle: "title, description, robots, canonical.",
  difficulty: "Intermediate",
  estimatedMinutes: 35,
  xpReward: 110,
  prerequisites: ["html-ch-27"],
  partLabel: "Part 5: SEO & Performance",
  learningObjectives: [
    "Understand the purpose and usage of essential meta tags.",
    "Implement title and meta description tags effectively.",
    "Use robots meta tags to control crawler behavior.",
    "Set canonical URLs to prevent duplicate content issues.",
    "Distinguish between meta tags that matter and those that don't.",
  ],
  sections: [
    {
      id: "ch28-s1",
      title: "Essential Meta Tags",
      whyItMatters: "Meta tags communicate directly with search engines and browsers. Using them correctly gives you control over how your pages are indexed, displayed, and understood.",
      realWorldAnalogy: "Meta tags are like the notes on a book's cover and inside flap — they tell readers (search engines) what the book is about without having to read it first. Good notes help people decide if they want to read it.",
      content: `**Title tag (not a meta tag, but essential):**
\`\`\`
<title>Your Page Title | Site Name</title>
\`\`\`
- Most important SEO element
- Appears in search results and browser tabs
- Keep under 60 characters
- Include primary keyword naturally

**Meta description:**
\`\`\`
<meta name="description" content="A compelling summary of your page content.">
\`\`\`
- Under 160 characters
- Appears in search results
- Include keywords naturally
- Write to encourage clicks

**Charset and viewport:**
\`\`\`
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`
- UTF-8: Ensures proper character encoding
- Viewport: Critical for mobile-friendly design (SEO ranking factor)

**Robots meta tag:**
\`\`\`
<meta name="robots" content="index, follow">
\`\`\`
Controls crawler behavior:
- index/noindex: Allow or block indexing
- follow/nofollow: Allow or block following links
- noarchive: Prevent cached copies
- nosnippet: Prevent snippets in results

**Canonical URL:**
\`\`\`
<link rel="canonical" href="https://example.com/page">
\`\`\`
- Specifies the preferred version of a page
- Prevents duplicate content penalties
- Consolidates ranking signals`,
      codeExamples: [
        {
          id: "ch28-s1-ex1",
          title: "Complete meta tag setup",
          description: "All essential meta tags for a new page.",
          code: {
            html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>Product Name - Features & Pricing | CompanyName</title>
  
  <meta name="description" content="Learn about Product Name's features, pricing, and benefits. Read customer reviews and compare with alternatives.">
  
  <meta name="robots" content="index, follow">
  
  <link rel="canonical" href="https://example.com/product-name">
  
  <meta name="author" content="Author Name">
  <meta name="keywords" content="product, features, pricing">
</head>`,
          },
          explanation: "Includes charset and viewport for proper rendering. Title is optimized with keyword and brand. Meta description is compelling. Robots tag allows indexing and following. Canonical URL prevents duplicates. Author and keywords are included but have minimal SEO impact.",
          tryItPrompt: "Use a snippet preview tool to see how the title and description would appear in Google search results.",
        },
      ],
      callouts: [
        { type: "info", title: "Keywords meta tag is mostly ignored", content: "The keywords meta tag (meta name=\"keywords\") has little to no impact on modern SEO. Major search engines ignore it. Focus on quality content and other meta tags instead.",
        },
        { type: "common-mistake", title: "Multiple canonical URLs", content: "Never specify multiple canonical URLs on one page. This confuses search engines. Each page should have exactly one canonical URL pointing to itself or its preferred version.",
        },
      ],
    },
    {
      id: "ch28-s2",
      title: "Advanced Meta Tags",
      whyItMatters: "Beyond the basics, there are specialized meta tags for specific use cases. Knowing when to use them gives you fine-grained control over how your content appears.",
      content: `**Open Graph (social sharing):**
\`\`\`
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Page description">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:url" content="https://example.com/page">
<meta property="og:type" content="article">
\`\`\`
- Controls how pages appear when shared on Facebook, LinkedIn, etc.
- og:type can be 'website', 'article', 'product', etc.

**Twitter Cards:**
\`\`\`
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Page Title">
<meta name="twitter:description" content="Page description">
<meta name="twitter:image" content="https://example.com/image.jpg">
\`\`\`
- Controls appearance on Twitter
- Types: summary, summary_large_image, app, player

**Noindex for specific pages:**
\`\`\`
<meta name="robots" content="noindex, follow">
\`\`\`
Use for:
- Thank you pages
- Internal search results
- Thin content pages
- Test/staging pages

**Refresh redirect:**
\`\`\`
<meta http-equiv="refresh" content="5;url=https://example.com/new-page">
\`\`\`
- Redirects after 5 seconds
- Not recommended for SEO (use server-side 301 redirects instead)

**Theme color:**
\`\`\`
<meta name="theme-color" content="#0066cc">
\`\`\`
- Sets browser UI color on mobile
- Improves branding consistency`,
      codeExamples: [
        {
          id: "ch28-s2-ex1",
          title: "Social media optimized meta tags",
          description: "Complete Open Graph and Twitter Card setup.",
          code: {
            html: `<head>
  <!-- Open Graph for Facebook/LinkedIn -->
  <meta property="og:title" content="10 Tips for Better Sleep">
  <meta property="og:description" content="Science-backed strategies to improve your sleep quality starting tonight.">
  <meta property="og:image" content="https://example.com/images/sleep-tips-social.jpg">
  <meta property="og:url" content="https://example.com/sleep-tips">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="SleepWell">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="10 Tips for Better Sleep">
  <meta name="twitter:description" content="Science-backed strategies to improve your sleep quality starting tonight.">
  <meta name="twitter:image" content="https://example.com/images/sleep-tips-twitter.jpg">
</head>`,
          },
          explanation: "Open Graph tags optimize for Facebook and LinkedIn. Twitter Card tags optimize for Twitter. Both specify title, description, and image. The image should be 1200x630px for best results.",
          tryItPrompt: "Use Facebook's Sharing Debugger or Twitter Card Validator to test how your page would appear when shared.",
        },
      ],
      callouts: [
        { type: "tip", title: "Test social sharing", content: "Always test how your pages appear when shared. Use Facebook Sharing Debugger, Twitter Card Validator, and LinkedIn Post Inspector. Fix any errors before publishing.",
        },
        { type: "warning", title: "Meta refresh vs 301", content: "Never use meta refresh for permanent redirects. It's bad for SEO and user experience. Use server-side 301 redirects instead, which pass ranking signals to the new URL.",
        },
      ],
    },
  ],
  exercises: [
    {
      id: "ch28-ex1",
      title: "Add meta tags to a page",
      difficulty: 1,
      description: "Add essential and social media meta tags to a basic HTML page.",
      requirements: ["Add title tag with keyword and brand", "Add meta description under 160 characters", "Add robots meta tag", "Add canonical URL", "Add Open Graph tags for social sharing"],
      starterCode: {
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>My Article</h1>
  <p>Article content...</p>
</body>
</html>`,
      },
      hints: [
        "Title should include main topic and site name",
        "Meta description should summarize and encourage clicks",
        "Use 'index, follow' for robots tag unless you need to block",
        "Canonical should point to the page's full URL",
        "Include og:title, og:description, og:image, og:url for Open Graph",
      ],
      solution: {
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>Healthy Meal Prep Guide - Save Time & Eat Better | EatWell</title>
  
  <meta name="description" content="Learn how to meal prep like a pro. Our guide covers planning, shopping, cooking, and storing healthy meals for the entire week.">
  
  <meta name="robots" content="index, follow">
  
  <link rel="canonical" href="https://eatwell.com/meal-prep-guide">
  
  <meta property="og:title" content="Healthy Meal Prep Guide - Save Time & Eat Better">
  <meta property="og:description" content="Learn how to meal prep like a pro. Our guide covers planning, shopping, cooking, and storing healthy meals.">
  <meta property="og:image" content="https://eatwell.com/images/meal-prep-social.jpg">
  <meta property="og:url" content="https://eatwell.com/meal-prep-guide">
  <meta property="og:type" content="article">
</head>
<body>
  <h1>My Article</h1>
  <p>Article content...</p>
</body>
</html>`,
      },
      solutionExplanation: "Title includes keyword and brand under 60 chars. Meta description is compelling under 160 chars. Robots allows indexing. Canonical prevents duplicates. Open Graph tags optimize social sharing with title, description, image, URL, and type.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch28-q1",
        type: "mcq",
        question: "What is the recommended maximum length for a title tag?",
        options: ["50 characters", "60 characters", "100 characters", "160 characters"],
        correctAnswer: 1,
        explanation: "Title tags should be under 60 characters to avoid being truncated in search results. Longer titles get cut off with an ellipsis, which can hurt click-through rates.",
        difficulty: 1,
      },
      {
        id: "ch28-q2",
        type: "mcq",
        question: "What does content=\"noindex, follow\" do in a robots meta tag?",
        options: [
          "Blocks indexing but allows following links",
          "Allows indexing but blocks following links",
          "Blocks both indexing and following links",
          "Allows both indexing and following links",
        ],
        correctAnswer: 0,
        explanation: "noindex prevents the page from being indexed, while follow allows crawlers to follow links from the page. Use this for pages you don't want in search results but want to pass link equity through.",
        difficulty: 1,
      },
      {
        id: "ch28-q3",
        type: "true-false",
        question: "The keywords meta tag is important for modern SEO.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. The keywords meta tag is largely ignored by modern search engines due to historical abuse. Focus on quality content, proper headings, and other meta tags instead.",
        difficulty: 1,
      },
      {
        id: "ch28-q4",
        type: "mcq",
        question: "What is the purpose of Open Graph meta tags?",
        options: [
          "To improve search engine rankings",
          "To control how pages appear when shared on social media",
          "To block search engine crawlers",
          "To redirect to another page",
        ],
        correctAnswer: 1,
        explanation: "Open Graph meta tags (og:title, og:description, og:image, etc.) control how your pages appear when shared on Facebook, LinkedIn, and other social platforms. They don't directly affect search rankings.",
        difficulty: 1,
      },
      {
        id: "ch28-q5",
        type: "mcq",
        question: "Why should you use a canonical URL?",
        options: [
          "To make pages load faster",
          "To tell search engines which version of a page is preferred and prevent duplicate content issues",
          "To block search engine crawlers",
          "To improve social media sharing",
        ],
        correctAnswer: 1,
        explanation: "Canonical URLs tell search engines which version of a page is the original/preferred one. This prevents duplicate content penalties and consolidates ranking signals to the canonical URL.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Title tag", value: "Under 60 chars, include keyword" },
    { label: "Meta description", value: "Under 160 chars, compelling" },
    { label: "Robots tag", value: "Control crawler behavior" },
    { label: "Canonical URL", value: "Preferred page version" },
    { label: "Open Graph", value: "Social sharing appearance" },
    { label: "Twitter Cards", value: "Twitter appearance" },
  ],
};

// ============================================================================
// HTML CHAPTER 29 — OPEN GRAPH & SOCIAL
// ============================================================================
export const htmlCh29: Chapter = {
  id: "html-ch-29",
  number: 29,
  title: "Open Graph & Social",
  subtitle: "og:title, og:image, Twitter cards.",
  difficulty: "Intermediate",
  estimatedMinutes: 30,
  xpReward: 100,
  prerequisites: ["html-ch-28"],
  partLabel: "Part 5: SEO & Performance",
  learningObjectives: [
    "Understand what Open Graph is and why it matters.",
    "Implement Open Graph meta tags for social sharing.",
    "Set up Twitter Cards for Twitter-specific optimization.",
    "Choose the right image sizes and formats for social media.",
    "Test and debug social media previews.",
  ],
  sections: [
    {
      id: "ch29-s1",
      title: "Open Graph Protocol",
      whyItMatters: "When people share your content on social media, you want it to look good. Without Open Graph tags, social platforms show ugly, unformatted previews. With proper tags, your shares look professional and get more clicks.",
      realWorldAnalogy: "Open Graph is like sending a gift with a gift box and card instead of just handing someone the item wrapped in newspaper. The presentation matters — it shows you care and makes the recipient more likely to appreciate what you're sharing.",
      content: `**What is Open Graph?**
Open Graph is a protocol developed by Facebook that allows any web page to become a rich object in a social graph. When someone shares your link, social platforms use Open Graph tags to determine what to display.

**Basic Open Graph tags:**
\`\`\`
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Page description">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:url" content="https://example.com/page">
<meta property="og:type" content="website">
\`\`\`

**Required tags:**
- og:title: The title of your content
- og:description: A brief description
- og:image: The image to display
- og:url: The canonical URL of the page
- og:type: The type of content (website, article, product, etc.)

**Additional tags:**
- og:site_name: The name of your site
- og:locale: The language (en_US, etc.)
- og:locale:alternate: Other language versions
- og:audio: For audio content
- og:video: For video content

**Image requirements:**
- Recommended size: 1200x630 pixels
- Maximum size: 5MB
- Format: JPG or PNG
- Use high-quality images that represent your content well

**og:type values:**
- website: General website pages
- article: Blog posts, news articles
- product: Product pages
- profile: User profile pages
- book: Book pages
- video.movie: Movies
- music.song: Songs`,
      codeExamples: [
        {
          id: "ch29-s1-ex1",
          title: "Complete Open Graph implementation",
          description: "All Open Graph tags for an article.",
          code: {
            html: `<head>
  <meta property="og:title" content="10 Tips for Better Sleep - Science-Backed Strategies">
  <meta property="og:description" content="Discover proven techniques to improve your sleep quality starting tonight. From bedtime routines to sleep environment optimization.">
  <meta property="og:image" content="https://example.com/images/sleep-tips-og.jpg">
  <meta property="og:url" content="https://example.com/sleep-tips">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="SleepWell">
  <meta property="og:locale" content="en_US">
  <meta property="article:published_time" content="2024-01-15T00:00:00Z">
  <meta property="article:author" content="Dr. Jane Smith">
</head>`,
          },
          explanation: "Includes all required Open Graph tags plus site_name, locale, and article-specific tags (published_time, author). The image should be 1200x630px for best display on Facebook and LinkedIn.",
          tryItPrompt: "Use Facebook's Sharing Debugger to see how this would appear when shared on Facebook.",
        },
      ],
      callouts: [
        { type: "tip", title: "Test with sharing debuggers", content: "Use Facebook Sharing Debugger, LinkedIn Post Inspector, and other platform-specific tools to test your Open Graph implementation before publishing. Fix any errors to ensure proper display.",
        },
        { type: "common-mistake", title: "Using small images", content: "Open Graph images should be at least 1200x630px. Small images get cropped or displayed poorly. Always use high-resolution, properly sized images for social sharing.",
        },
      ],
    },
    {
      id: "ch29-s2",
      title: "Twitter Cards",
      whyItMatters: "Twitter has its own card format separate from Open Graph. Implementing Twitter Cards ensures your content looks great when shared on Twitter/X.",
      content: `**What are Twitter Cards?**
Twitter Cards are a specification that allows you to attach rich media to tweets that link to your content. When someone tweets your URL, Twitter displays a card with an image, title, and description.

**Twitter Card types:**
- **summary**: Small card with thumbnail (120x120px)
- **summary_large_image**: Large card with big image (1200x600px)
- **app**: App download card
- **player**: Video/audio player card

**Basic Twitter Card tags:**
\`\`\`
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Page Title">
<meta name="twitter:description" content="Page description">
<meta name="twitter:image" content="https://example.com/image.jpg">
\`\`\`

**Additional tags:**
- twitter:site: Your Twitter username (@username)
- twitter:creator: Content creator's username
- twitter:domain: Your site's domain

**Image sizes for Twitter:**
- summary: 120x120px minimum
- summary_large_image: 1200x600px minimum
- Maximum file size: 5MB
- Aspect ratio should be close to 2:1

**Combining Open Graph and Twitter Cards:**
You can use both Open Graph and Twitter Cards on the same page. Twitter will use Twitter-specific tags if present, falling back to Open Graph if needed. This ensures your content looks good everywhere.`,
      codeExamples: [
        {
          id: "ch29-s2-ex1",
          title: "Complete social media setup",
          description: "Both Open Graph and Twitter Cards implemented.",
          code: {
            html: `<head>
  <!-- Open Graph -->
  <meta property="og:title" content="Healthy Meal Prep Guide">
  <meta property="og:description" content="Save time and eat better with our complete meal prep guide.">
  <meta property="og:image" content="https://example.com/images/meal-prep-og.jpg">
  <meta property="og:url" content="https://example.com/meal-prep">
  <meta property="og:type" content="article">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Healthy Meal Prep Guide">
  <meta name="twitter:description" content="Save time and eat better with our complete meal prep guide.">
  <meta name="twitter:image" content="https://example.com/images/meal-prep-twitter.jpg">
  <meta name="twitter:site" content="@eatwell">
  <meta name="twitter:creator" content="@chefjohn">
</head>`,
          },
          explanation: "Open Graph tags optimize for Facebook/LinkedIn. Twitter Card tags optimize for Twitter. Both platforms get optimized previews. The Twitter-specific image can be different if needed (Twitter has slightly different ideal dimensions).",
          tryItPrompt: "Use Twitter Card Validator to test how this would appear on Twitter. Use Facebook Sharing Debugger to test the Open Graph implementation.",
        },
      ],
      callouts: [
        { type: "info", title: "Twitter Card Validator", content: "Use the Twitter Card Validator (cards-dev.twitter.com/validator) to test your Twitter Card implementation. It will show you exactly how your card will appear and highlight any errors.",
        },
        { type: "common-mistake", title: "Forgetting twitter:card", content: "The twitter:card tag is required for Twitter Cards to work. Without it, Twitter won't use any of your other Twitter-specific tags and will fall back to basic link preview.",
        },
      ],
    },
  ],
  exercises: [
    {
      id: "ch29-ex1",
      title: "Add social media meta tags",
      difficulty: 1,
      description: "Add Open Graph and Twitter Card tags to a blog post.",
      requirements: ["Add all required Open Graph tags", "Add Twitter Card tags", "Use appropriate og:type for an article", "Specify image URLs that meet size requirements"],
      starterCode: {
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Blog Post</title>
</head>
<body>
  <h1>My Blog Post</h1>
  <p>Content here...</p>
</body>
</html>`,
      },
      hints: [
        "Include og:title, og:description, og:image, og:url, og:type",
        "Include twitter:card, twitter:title, twitter:description, twitter:image",
        "Use article as the og:type for blog posts",
        "Image URLs should be absolute (full URL)",
      ],
      solution: {
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Blog Post</title>
  
  <meta property="og:title" content="My Blog Post - Interesting Topic">
  <meta property="og:description" content="This blog post covers an interesting topic that you should read about.">
  <meta property="og:image" content="https://example.com/images/blog-post-social.jpg">
  <meta property="og:url" content="https://example.com/blog-post">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="MyBlog">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="My Blog Post - Interesting Topic">
  <meta name="twitter:description" content="This blog post covers an interesting topic that you should read about.">
  <meta name="twitter:image" content="https://example.com/images/blog-post-twitter.jpg">
</head>
<body>
  <h1>My Blog Post</h1>
  <p>Content here...</p>
</body>
</html>`,
      },
      solutionExplanation: "Added all required Open Graph tags (title, description, image, url, type, site_name). Added Twitter Card tags (card, title, description, image). Used article as og:type. Image URLs are absolute paths. This ensures proper display on Facebook, LinkedIn, Twitter, and other platforms.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch29-q1",
        type: "mcq",
        question: "What is the recommended size for Open Graph images?",
        options: ["600x315", "1200x630", "1920x1080", "500x500"],
        correctAnswer: 1,
        explanation: "The recommended size for Open Graph images is 1200x630 pixels. This ensures proper display on Facebook, LinkedIn, and other platforms that use Open Graph.",
        difficulty: 1,
      },
      {
        id: "ch29-q2",
        type: "mcq",
        question: "Which tag is required for Twitter Cards to work?",
        options: ["twitter:title", "twitter:description", "twitter:card", "twitter:image"],
        correctAnswer: 2,
        explanation: "The twitter:card tag is required for Twitter Cards to work. Without it, Twitter won't use your other Twitter-specific tags. Common values are 'summary' and 'summary_large_image'.",
        difficulty: 1,
      },
      {
        id: "ch29-q3",
        type: "true-false",
        question: "Open Graph and Twitter Cards use the same tags.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. Open Graph and Twitter Cards use different tag formats. Open Graph uses property=\"og:...\" while Twitter Cards use name=\"twitter:...\". You can and should implement both for maximum coverage.",
        difficulty: 1,
      },
      {
        id: "ch29-q4",
        type: "mcq",
        question: "What og:type should you use for a blog post?",
        options: ["website", "article", "product", "profile"],
        correctAnswer: 1,
        explanation: "Use og:type=\"article\" for blog posts, news articles, and other time-based content. Use \"website\" for general site pages, \"product\" for product pages, and \"profile\" for user profile pages.",
        difficulty: 1,
      },
      {
        id: "ch29-q5",
        type: "mcq",
        question: "Which tool can you use to test Open Graph implementation?",
        options: ["Google Analytics", "Facebook Sharing Debugger", "Twitter Card Validator", "Google Search Console"],
        correctAnswer: 1,
        explanation: "Facebook Sharing Debugger is the tool to test Open Graph implementation. Twitter Card Validator is for Twitter Cards specifically. Both are essential for debugging social media previews.",
        difficulty: 1,
      },
    ],
  },
  cheatSheet: [
    { label: "OG image size", value: "1200x630px" },
    { label: "Required OG tags", value: "title, description, image, url, type" },
    { label: "Twitter card types", value: "summary, summary_large_image" },
    { label: "Test with debuggers", value: "Facebook Debugger, Twitter Validator" },
    { label: "Use absolute URLs", value: "For social images" },
    { label: "Implement both", value: "OG + Twitter Cards" },
  ],
};

// ============================================================================
// HTML CHAPTER 30 — STRUCTURED DATA
// ============================================================================
export const htmlCh30: Chapter = {
  id: "html-ch-30",
  number: 30,
  title: "Structured Data",
  subtitle: "Schema.org JSON-LD for rich results.",
  difficulty: "Advanced",
  estimatedMinutes: 40,
  xpReward: 120,
  prerequisites: ["html-ch-29"],
  partLabel: "Part 5: SEO & Performance",
  learningObjectives: [
    "Understand what structured data is and why it matters for SEO.",
    "Implement Schema.org markup using JSON-LD.",
    "Add structured data for common content types (articles, products, reviews).",
    "Test structured data with Google's Rich Results Test.",
    "Avoid common structured data mistakes.",
  ],
  sections: [
    {
      id: "ch30-s1",
      title: "What is Structured Data?",
      whyItMatters: "Structured data helps search engines understand your content better. This can lead to rich results in search (stars, prices, images) which significantly increases click-through rates.",
      realWorldAnalogy: "Structured data is like labeling ingredients on a food package. Instead of just seeing 'a mixture of stuff', you see 'wheat flour, sugar, eggs'. The labels tell you exactly what's there, making it easier to understand and compare.",
      content: `**What is structured data?**
Structured data is a standardized format for providing information about a page and classifying the page content. It's written using a vocabulary like Schema.org and formatted as JSON-LD, Microdata, or RDFa.

**Why it matters:**
- **Rich results**: Star ratings, prices, images in search results
- **Better understanding**: Search engines understand your content more precisely
- **Voice search**: Voice assistants use structured data to answer questions
- **Knowledge panels**: Can help trigger Google knowledge panels

**Schema.org:**
Schema.org is a collaborative vocabulary that search engines (Google, Bing, Yahoo, Yandex) agreed to use. It defines types (Article, Product, Person, etc.) and properties (name, description, price, etc.).

**JSON-LD format:**
JSON-LD (JavaScript Object Notation for Linked Data) is Google's preferred format. It's a script block in the head:
\`\`\`
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  }
}
</script>
\`\`\`

**Common Schema.org types:**
- Article: Blog posts, news articles
- Product: Products with prices and reviews
- Review: Reviews and ratings
- Organization: Company information
- Person: Individual profiles
- LocalBusiness: Local business info
- Recipe: Recipes with ingredients and cooking time
- FAQPage: Frequently asked questions`,
      codeExamples: [
        {
          id: "ch30-s1-ex1",
          title: "Basic article structured data",
          description: "Schema.org markup for a blog article.",
          code: {
            html: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "10 Tips for Better Sleep",
  "image": "https://example.com/images/sleep-tips.jpg",
  "author": {
    "@type": "Person",
    "name": "Dr. Jane Smith"
  },
  "publisher": {
    "@type": "Organization",
    "name": "SleepWell",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.png"
    }
  },
  "datePublished": "2024-01-15",
  "dateModified": "2024-01-15",
  "description": "Discover proven techniques to improve your sleep quality starting tonight."
}
</script>`,
          },
          explanation: "This structured data tells search engines this is an Article with a headline, author, publisher, dates, image, and description. Google can use this to show rich article results with author info and publication date.",
          tryItPrompt: "Use Google's Rich Results Test to validate this structured data and see what rich results might appear.",
        },
      ],
      callouts: [
        { type: "tip", title: "Test with Rich Results Test", content: "Always test your structured data with Google's Rich Results Test (search.google.com/test/rich-results). It validates your markup and shows which rich results your page is eligible for.",
        },
        { type: "warning", title: "Don't fake structured data", content: "Never add structured data for content that doesn't actually exist on the page. Misleading structured data can result in manual penalties from Google. Only markup what's actually visible to users.",
        },
      ],
    },
    {
      id: "ch30-s2",
      title: "Common Structured Data Patterns",
      whyItMatters: "Different types of content require different structured data patterns. Knowing the common patterns helps you implement markup for your specific content.",
      content: `**Product markup:**
\`\`\`
{
  "@type": "Product",
  "name": "Product Name",
  "image": "https://example.com/product.jpg",
  "description": "Product description",
  "brand": {
    "@type": "Brand",
    "name": "Brand Name"
  },
  "offers": {
    "@type": "Offer",
    "price": "99.99",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}
\`\`\`

**Review markup:**
\`\`\`
{
  "@type": "Review",
  "itemReviewed": {
    "@type": "Product",
    "name": "Product Name"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "Reviewer Name"
  }
}
\`\`\`

**FAQPage markup:**
\`\`\`
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer text"
      }
    }
  ]
}
\`\`\`

**BreadcrumbList markup:**
\`\`\`
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://example.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Category",
      "item": "https://example.com/category"
    }
  ]
}
\`\`\``,
      codeExamples: [
        {
          id: "ch30-s2-ex1",
          title: "Product with reviews",
          description: "Combined product and review markup.",
          code: {
            html: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Wireless Bluetooth Headphones",
  "image": "https://example.com/headphones.jpg",
  "description": "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
  "brand": {
    "@type": "Brand",
    "name": "SoundTech"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "342",
    "bestRating": "5"
  },
  "offers": {
    "@type": "Offer",
    "price": "149.99",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://example.com/headphones"
  }
}
</script>`,
          },
          explanation: "This markup includes product details, aggregate rating (star rating from multiple reviews), and pricing/availability. Google can show rich product results with stars, price, and stock status in search results.",
          tryItPrompt: "Test with Google's Rich Results Test to see product rich result eligibility.",
        },
      ],
      callouts: [
        { type: "info", title: "Nested structured data", content: "You can nest structured data types. For example, a Product can contain an AggregateRating, which contains individual Ratings. This creates rich, detailed markup that search engines can use effectively.",
        },
        { type: "common-mistake", title: "Missing required properties", content: "Each Schema.org type has required properties. For example, Product requires 'name'. Missing required properties can prevent rich results from appearing. Always check the Schema.org documentation for required properties.",
        },
      ],
    },
  ],
  exercises: [
    {
      id: "ch30-ex1",
      title: "Add structured data to a product page",
      difficulty: 1,
      description: "Add Schema.org structured data for a product with pricing and reviews.",
      requirements: ["Add Product structured data using JSON-LD", "Include name, description, image, brand", "Add pricing with Offer type", "Add aggregate rating with review count"],
      starterCode: {
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Product Page</title>
</head>
<body>
  <h1>Running Shoes - SpeedPro X1</h1>
  <p>Lightweight running shoes with advanced cushioning technology.</p>
  <p>Price: $129.99</p>
  <p>Rating: 4.5/5 (128 reviews)</p>
</body>
</html>`,
      },
      hints: [
        "Use script type=application/ld+json for JSON-LD",
        "Include @context and @type at the top level",
        "Use Offer type for pricing with price and priceCurrency",
        "Use AggregateRating for overall rating with ratingValue and reviewCount",
      ],
      solution: {
        html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Product Page</title>
  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Running Shoes - SpeedPro X1",
  "description": "Lightweight running shoes with advanced cushioning technology.",
  "image": "https://example.com/running-shoes.jpg",
  "brand": {
    "@type": "Brand",
    "name": "SpeedPro"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "128",
    "bestRating": "5"
  },
  "offers": {
    "@type": "Offer",
    "price": "129.99",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}
</script>
</head>
<body>
  <h1>Running Shoes - SpeedPro X1</h1>
  <p>Lightweight running shoes with advanced cushioning technology.</p>
  <p>Price: $129.99</p>
  <p>Rating: 4.5/5 (128 reviews)</p>
</body>
</html>`,
      },
      solutionExplanation: "Added JSON-LD structured data with Product type including name, description, image, and brand. Added AggregateRating with ratingValue (4.5) and reviewCount (128). Added Offer with price (129.99), priceCurrency (USD), and availability. This enables rich product results in search.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch30-q1",
        type: "mcq",
        question: "What is Google's preferred format for structured data?",
        options: ["Microdata", "RDFa", "JSON-LD", "XML"],
        correctAnswer: 2,
        explanation: "Google prefers JSON-LD for structured data. It's easier to implement and maintain than Microdata or RDFa. JSON-LD is placed in a script tag in the head of your page.",
        difficulty: 1,
      },
      {
        id: "ch30-q2",
        type: "mcq",
        question: "What vocabulary is used for structured data?",
        options: ["W3C", "Schema.org", "Open Graph", "Dublin Core"],
        correctAnswer: 1,
        explanation: "Schema.org is the vocabulary used for structured data. It's a collaborative effort by major search engines to create a standard vocabulary for describing web content.",
        difficulty: 1,
      },
      {
        id: "ch30-q3",
        type: "true-false",
        question: "Structured data guarantees rich results in Google search.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. Structured data makes you eligible for rich results, but doesn't guarantee them. Google still decides whether to show rich results based on relevance, quality, and other factors.",
        difficulty: 1,
      },
      {
        id: "ch30-q4",
        type: "mcq",
        question: "Which Schema.org type should you use for a blog post?",
        options: ["WebPage", "Article", "BlogPosting", "Post"],
        correctAnswer: 1,
        explanation: "Use the Article type (or BlogPosting, which is a subtype of Article) for blog posts. Article is the general type for news articles, blog posts, and similar content.",
        difficulty: 1,
      },
      {
        id: "ch30-q5",
        type: "mcq",
        question: "What tool can you use to test structured data?",
        options: ["Google Analytics", "Google Rich Results Test", "Facebook Sharing Debugger", "W3C Validator"],
        correctAnswer: 1,
        explanation: "Google's Rich Results Test is the tool to test structured data. It validates your markup and shows which rich results your page is eligible for. Google Search Console also shows structured data errors.",
        difficulty: 1,
      },
    ],
  },
  cheatSheet: [
    { label: "Preferred format", value: "JSON-LD" },
    { label: "Vocabulary", value: "Schema.org" },
    { label: "Test tool", value: "Rich Results Test" },
    { label: "Article type", value: "Blog posts, news" },
    { label: "Product type", value: "Products with prices" },
    { label: "Don't fake data", value: "Only markup visible content" },
  ],
};
