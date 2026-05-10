import type { Chapter } from "./types";

export const htmlCh13: Chapter = {
  id: "html-ch-13",
  number: 13,
  title: "The Head Element",
  subtitle: "Everything users never see — but search engines and social networks live for.",
  difficulty: "Intermediate",
  estimatedMinutes: 35,
  xpReward: 120,
  prerequisites: ["html-ch-12"],
  partLabel: "Part 2: Structure & Layout",
  learningObjectives: [
    "Explain what the <head> element is for and how it differs from <body>.",
    "Set the correct character encoding and viewport for every modern site.",
    "Write a great <title> and meta description for SEO and shareability.",
    "Add favicons and theme colors that work across browsers and devices.",
    "Understand robots, canonical, and language metadata.",
  ],
  sections: [
    {
      id: "html13-s1",
      title: "What the <head> Actually Does",
      whyItMatters: "Beginners ignore the head because it doesn't render. Then their site looks broken on phones, has no Google preview, breaks on social shares, and shows the wrong icon in the browser tab. The head is where professional polish lives.",
      realWorldAnalogy: "If <body> is the inside of a building, <head> is the address sign, the building permit, the directory listing, and the welcome mat. Visitors don't read it — but the postman, inspector, and Google Maps all rely on it.",
      content: `The \`<head>\` is metadata about your page — information *about* the document that isn't part of the document itself. Browsers, search engines, social networks, and the operating system all read it.

A bare-minimum modern \`<head>\` looks like this:

\`\`\`
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  <meta name="description" content="Short summary under 160 characters.">
</head>
\`\`\`

Each line solves a real problem:

- **\`<meta charset="UTF-8">\`** — Tells the browser to interpret bytes as Unicode (UTF-8). Without this, accented characters and emoji can render as garbage like \`Ã©\` instead of \`é\`. Must be in the **first 1024 bytes** of the document, so put it first.
- **viewport meta** — Without this, mobile browsers render at 980px wide and zoom out, making text microscopic. With it, the page fits the device width.
- **\`<title>\`** — Shown in the browser tab, in bookmarks, and as the headline of Google search results. The single most important SEO tag.
- **meta description** — The text shown beneath the title in Google results. It doesn't affect ranking directly, but it dramatically affects click-through rate.

The order in \`<head>\` matters less than people think — except \`charset\` must be early, and \`<title>\` should come before any external CSS/JS so the tab title appears immediately.`,
      callouts: [
        { type: "common-mistake", title: "Forgetting the viewport tag", content: "If your site looks zoomed-out and tiny on mobile, you forgot the viewport meta. Every responsive site needs it." },
        { type: "pro-tip", title: "Lighthouse audits", content: "Open Chrome DevTools → Lighthouse → SEO. It will warn you about every missing or weak <head> tag." },
      ],
    },
    {
      id: "html13-s2",
      title: "The Title and Meta Description",
      whyItMatters: "These two tags determine what people see when your page shows up in Google. Get them wrong and nobody clicks. Get them right and you can outrank competitors with weaker content.",
      content: `**Title rules:**

- Keep it under 60 characters (Google truncates around 50–60).
- Front-load the most important keyword.
- Make it unique per page — never the same title twice.
- Pattern that works: \`Primary Keyword — Secondary Detail | Brand\`.

Examples:
- ❌ \`Welcome to our website\` — vague, no keywords, useless in search.
- ❌ \`Untitled Document\` — the dreaded default. You see it in real production sites way too often.
- ✅ \`Best Espresso Beans 2026 — Reviews & Buying Guide | Coffee.io\` — clear, keyword-rich, branded.

**Meta description rules:**

- Keep it under 155–160 characters.
- Write it like an ad: explain the value of the page in one sentence.
- Include the keyword naturally (Google bolds matches in the snippet).
- Each page should have its own description. Auto-generated descriptions are a huge missed opportunity.

Example:
\`\`\`
<meta name="description" content="Hand-picked reviews of the 12 best espresso beans for home machines in 2026. Tasted, scored, and ranked by certified baristas.">
\`\`\``,
      codeExamples: [
        {
          id: "html13-s2-ex1",
          title: "A complete production-quality <head>",
          description: "This is what every professional site's head looks like — copy this template and adjust.",
          code: {
            html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Best Espresso Beans 2026 — Reviews | Coffee.io</title>
  <meta name="description" content="Hand-picked reviews of the 12 best espresso beans for home machines in 2026. Scored by certified baristas.">

  <!-- Canonical: tell Google the official URL of this page -->
  <link rel="canonical" href="https://coffee.io/best-espresso-beans-2026">

  <!-- Favicons -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">

  <!-- Theme color for mobile browser chrome -->
  <meta name="theme-color" content="#7C3AED">

  <!-- Open Graph for Facebook, LinkedIn, Slack previews -->
  <meta property="og:title" content="Best Espresso Beans 2026 — Reviews">
  <meta property="og:description" content="The 12 best espresso beans for home machines, scored by certified baristas.">
  <meta property="og:image" content="https://coffee.io/og-image.jpg">
  <meta property="og:url" content="https://coffee.io/best-espresso-beans-2026">
  <meta property="og:type" content="article">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
</head>
<body>
  <h1>Best Espresso Beans 2026</h1>
  <p>Open Chrome DevTools → Elements → click <head> to see all this metadata in action.</p>
</body>
</html>`,
          },
          explanation: "Every line earns its place: charset and viewport for rendering, title and description for SEO, canonical to avoid duplicate-content penalties, favicons for browser tabs and home screens, theme-color for mobile browser chrome, OG tags for social previews.",
          tryItPrompt: "Replace the title, description, and OG tags with content for a fictional product page of your own.",
        },
      ],
      microExercise: {
        instruction: "Add a viewport meta tag and a <title> reading 'Profile — Sam Lee'.",
        starterCode: { html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <!-- add viewport and title -->\n</head>\n<body>\n  <h1>Hi</h1>\n</body>\n</html>` },
        hint: `<meta name="viewport" content="width=device-width, initial-scale=1.0"> and <title>Profile — Sam Lee</title>`,
        solution: { html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Profile — Sam Lee</title>\n</head>\n<body>\n  <h1>Hi</h1>\n</body>\n</html>` },
      },
    },
    {
      id: "html13-s3",
      title: "Robots, Canonical, and Language",
      whyItMatters: "Three small tags that prevent giant SEO disasters. Skip them and you can accidentally hide your whole site from Google or split your ranking power across duplicate URLs.",
      content: `**\`<html lang="en">\`** — Always set the language on the root \`<html>\` tag. Screen readers use it to choose the correct pronunciation engine, and Google uses it for language-targeted results. Without \`lang\`, an English page read by a Spanish screen reader is unintelligible.

**meta robots** — Controls whether search engines index a page and follow its links:

\`\`\`
<meta name="robots" content="index, follow">    <!-- default: do both -->
<meta name="robots" content="noindex, follow">  <!-- common for thank-you pages -->
<meta name="robots" content="noindex, nofollow"> <!-- staging environments -->
\`\`\`

A common disaster: developers leave \`<meta name="robots" content="noindex">\` on production after a migration. The site silently disappears from Google for weeks before anyone notices.

**\`<link rel="canonical">\`** — Tells Google "this is the official URL of this page." Critical when:

- The same content lives at multiple URLs (e.g., \`?utm_source=email\`).
- You have HTTP and HTTPS versions.
- A product appears in multiple categories.

Without canonical, Google sees three URLs as three competing pages and dilutes your ranking. With canonical, Google consolidates them.

\`\`\`
<link rel="canonical" href="https://example.com/products/widget">
\`\`\``,
      callouts: [
        { type: "warning", title: "noindex on production = traffic apocalypse", content: "After deploying, always check view-source for any leftover noindex tags. Some teams have lost months of SEO progress this way." },
      ],
    },
  ],
  exercises: [
    {
      id: "html13-ex1",
      title: "Build a complete <head>",
      difficulty: 2,
      description: "Create a head with charset, viewport, title, description, canonical, and theme-color for a fictional bakery page.",
      requirements: ["UTF-8 charset", "viewport meta", "title under 60 chars", "meta description under 160 chars", "canonical link", "theme-color"],
      starterCode: { html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <!-- build your head -->\n</head>\n<body>\n  <h1>Sourdough Sundays</h1>\n</body>\n</html>` },
      hints: [
        "charset must come first",
        "Title pattern: 'Keyword — Detail | Brand'",
        "canonical: <link rel=\"canonical\" href=\"https://...\">",
        "theme-color uses a hex color",
      ],
      solution: { html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Sourdough Sundays — Artisan Bakery in Brooklyn</title>\n  <meta name="description" content="Family-run bakery serving slow-fermented sourdough every Sunday in Williamsburg. Order ahead, walk-ins welcome.">\n  <link rel="canonical" href="https://sourdoughsundays.com/">\n  <meta name="theme-color" content="#B45309">\n</head>\n<body>\n  <h1>Sourdough Sundays</h1>\n</body>\n</html>` },
      solutionExplanation: "Charset first for safety, viewport for mobile, descriptive title with brand and locale keywords, ad-style description, canonical to consolidate URLs, warm bread-color theme.",
    },
    {
      id: "html13-ex2",
      title: "Open Graph for social sharing",
      difficulty: 3,
      description: "Add Open Graph tags so a link to this page renders a rich preview in Slack, Discord, LinkedIn, etc.",
      requirements: ["og:title", "og:description", "og:image (any URL)", "og:url", "og:type", "twitter:card"],
      starterCode: { html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Coffee Guide</title>\n  <!-- add OG and Twitter tags -->\n</head>\n<body><h1>Coffee Guide</h1></body>\n</html>` },
      hints: ["og:* uses the property attribute, not name", "twitter:card uses name", "Use summary_large_image for big previews"],
      solution: { html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Coffee Guide</title>\n  <meta property="og:title" content="The Ultimate Coffee Guide">\n  <meta property="og:description" content="Brewing methods, beans, and gear — everything in one place.">\n  <meta property="og:image" content="https://example.com/og-coffee.jpg">\n  <meta property="og:url" content="https://example.com/coffee-guide">\n  <meta property="og:type" content="article">\n  <meta name="twitter:card" content="summary_large_image">\n</head>\n<body><h1>Coffee Guide</h1></body>\n</html>` },
      solutionExplanation: "Open Graph (Facebook's protocol, now used universally) controls how links preview when shared. The image should be 1200x630 for best results across platforms.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "html13-q1", type: "mcq", question: "Why must <meta charset='UTF-8'> appear early in <head>?", options: ["For SEO ranking", "Because the browser must know the encoding before parsing characters — it must be in the first 1024 bytes", "Because charset is deprecated", "It doesn't matter where it goes"], correctAnswer: 1, explanation: "The browser starts parsing immediately. If it picks the wrong encoding for the first chunk, characters render as garbage.", difficulty: 2 },
      { id: "html13-q2", type: "mcq", question: "What does the viewport meta tag do?", options: ["Sets the page background color", "Tells mobile browsers to use the device width instead of zooming out from 980px", "Hides the URL bar", "Disables JavaScript"], correctAnswer: 1, explanation: "Without it, mobile renders at 980px and zooms out, making text tiny.", difficulty: 1 },
      { id: "html13-q3", type: "mcq", question: "What's the recommended max length for a <title>?", options: ["20 chars", "60 chars", "200 chars", "Unlimited — Google shows all of it"], correctAnswer: 1, explanation: "Google truncates around 50–60 characters depending on character widths.", difficulty: 2 },
      { id: "html13-q4", type: "true-false", question: "<link rel='canonical'> consolidates ranking signals across duplicate URLs.", options: ["True", "False"], correctAnswer: 0, explanation: "Canonical tells Google which version is the official one to index and rank.", difficulty: 2 },
      { id: "html13-q5", type: "mcq", question: "Which meta robots value hides a page from search engines?", options: ["index", "follow", "noindex", "show"], correctAnswer: 2, explanation: "noindex tells search engines not to add the page to their index.", difficulty: 1 },
      { id: "html13-q6", type: "spot-the-bug", question: "What's wrong here?", code: `<head>\n  <title>My Site</title>\n  <meta charset="UTF-8">\n</head>`, options: ["Nothing", "<title> should not be in <head>", "charset should come before <title> (must be in first 1024 bytes)", "Both tags need self-closing"], correctAnswer: 2, explanation: "charset must be early enough to apply to the title text itself.", difficulty: 3 },
      { id: "html13-q7", type: "mcq", question: "Why set <html lang='en'>?", options: ["For SEO and screen readers (correct pronunciation)", "It controls the page background", "It enables JavaScript", "It loads English fonts"], correctAnswer: 0, explanation: "Screen readers switch pronunciation engines based on lang; Google uses it for language-targeted results.", difficulty: 2 },
      { id: "html13-q8", type: "mcq", question: "Which prefix do Open Graph meta tags use?", options: ["name", "property", "og", "type"], correctAnswer: 1, explanation: "OG uses the property attribute (e.g., property='og:title'). Standard meta uses name.", difficulty: 2 },
    ],
  },
  cheatSheet: [
    { label: "Charset", value: '<meta charset="UTF-8"> — first' },
    { label: "Viewport", value: '<meta name="viewport" content="width=device-width, initial-scale=1.0">' },
    { label: "Title", value: "<title>Keyword — Detail | Brand</title>" },
    { label: "Description", value: '<meta name="description" content="...">' },
    { label: "Canonical", value: '<link rel="canonical" href="...">' },
    { label: "Theme color", value: '<meta name="theme-color" content="#hex">' },
    { label: "OG title", value: '<meta property="og:title" content="...">' },
    { label: "Robots", value: '<meta name="robots" content="index, follow">' },
  ],
};

export const htmlCh14: Chapter = {
  id: "html-ch-14",
  number: 14,
  title: "Linking Resources",
  subtitle: "Stylesheets, scripts, fonts, favicons — and how to load them fast.",
  difficulty: "Beginner",
  estimatedMinutes: 35,
  xpReward: 120,
  prerequisites: ["html-ch-13"],
  partLabel: "Part 2: Structure & Layout",
  learningObjectives: [
    "Link external CSS, JS, and font files correctly.",
    "Understand the difference between defer, async, and module scripts.",
    "Add multi-resolution favicons that work on every device.",
    "Use preload, preconnect, and prefetch for faster pages.",
    "Avoid the most common resource-loading mistakes.",
  ],
  sections: [
    {
      id: "html14-s1",
      title: "Linking CSS",
      whyItMatters: "How and where you link your stylesheet directly affects how fast your page renders. Get it wrong and users see a flash of unstyled content (FOUC) or a blocked render.",
      content: `Standard pattern — one external stylesheet in the head:

\`\`\`
<head>
  <link rel="stylesheet" href="/styles.css">
</head>
\`\`\`

Key facts:

- \`<link>\` is a self-closing void element with no content.
- \`rel="stylesheet"\` tells the browser this link is a CSS file.
- The browser **blocks rendering** until the CSS is downloaded and parsed. This is intentional — without it, users would see unstyled HTML for a moment (FOUC).
- For best performance, the CSS file should be small and served from the same origin (or with HTTP/2).

You can link multiple stylesheets — they cascade in the order they appear:

\`\`\`
<link rel="stylesheet" href="/reset.css">
<link rel="stylesheet" href="/base.css">
<link rel="stylesheet" href="/components.css">
\`\`\`

You can also load CSS conditionally for media queries:

\`\`\`
<link rel="stylesheet" href="/print.css" media="print">
<link rel="stylesheet" href="/dark.css" media="(prefers-color-scheme: dark)">
\`\`\`

Browsers download all linked CSS in parallel but only block rendering on the ones whose media query matches.`,
      callouts: [
        { type: "common-mistake", title: "Linking CSS in <body>", content: "Putting <link rel='stylesheet'> in <body> works, but causes FOUC and is non-standard. Always put stylesheets in <head>." },
      ],
    },
    {
      id: "html14-s2",
      title: "Linking JavaScript: defer vs async vs module",
      whyItMatters: "The single biggest perf win on most sites is fixing how scripts load. A bad <script> tag can block your entire page for seconds.",
      content: `Three script-loading modes — and one to avoid:

**1. Plain script (avoid)** — \`<script src="/app.js"></script>\` placed in \`<head>\`:

The browser stops parsing HTML, downloads the JS, executes it, then resumes. Render is blocked. This is the slow default — never do this in head.

**2. defer (recommended for most sites)** — \`<script src="/app.js" defer></script>\` in \`<head>\`:

Browser downloads in parallel with parsing, but **executes after** the HTML is fully parsed and in document order. Multiple deferred scripts run in the order written. Perfect for app code that needs the DOM to exist.

**3. async (analytics, third-party widgets)** — \`<script src="/analytics.js" async></script>\`:

Browser downloads in parallel with parsing, executes **as soon as it arrives** — possibly mid-parse. Order is *not* guaranteed. Use only when the script doesn't depend on other scripts or the DOM.

**4. module** — \`<script src="/app.js" type="module"></script>\`:

Treats the file as an ES module (allows \`import\`/\`export\`). Modules are deferred by default and run in strict mode. The modern way to ship JS.

**The old "scripts at end of body" trick** — putting \`<script>\` right before \`</body>\` — was a workaround before \`defer\` existed. Today, \`<script defer>\` in \`<head>\` is preferred: the browser starts downloading earlier.

Mental model:
- App code → \`defer\` (or \`type="module"\`)
- Analytics, ads → \`async\`
- Inline tiny scripts → no attribute, place at end of body if needed`,
      codeExamples: [
        {
          id: "html14-s2-ex1",
          title: "All four script modes side by side",
          description: "Open the console to see the execution order.",
          code: {
            html: `<!DOCTYPE html>
<html>
<head>
  <title>Script Loading</title>
</head>
<body>
  <h1>Watch the console for order</h1>
  <script>
    console.log("1. Inline at top of body — runs immediately");
  </script>
  <p>Lots of HTML in between...</p>
  <script>
    console.log("2. Inline at end of body — runs after parsing reaches it");
    console.log("In real apps, prefer <script defer> in <head>");
  </script>
</body>
</html>`,
            javascript: `// This appears as if it were a deferred script — it runs after the DOM is built\nconsole.log("3. External (compiler-injected, runs last)");`,
          },
          explanation: "In real HTML, you'd see logs in this order: inline-top, parser-discovered inline, then any deferred scripts. The compiler injects the JS panel as a script — observe the order in the console.",
          tryItPrompt: "Open the console panel. Reorder the inline scripts and re-run.",
        },
      ],
      callouts: [
        { type: "pro-tip", title: "The 99% rule", content: "For 99% of app code, the right answer is: <script src='/app.js' defer></script> in <head>." },
        { type: "warning", title: "async + DOM access = race condition", content: "An async script may run before the DOM is ready. If you do document.querySelector inside, it might find nothing. Use defer for any DOM-touching code." },
      ],
    },
    {
      id: "html14-s3",
      title: "Favicons, Fonts, and Resource Hints",
      whyItMatters: "Favicons are the tiny details that make a site feel professional. Custom fonts make a brand. Resource hints make pages feel instant. All three live in <head>.",
      content: `**Favicons** — the icon in the browser tab and on home screens.

The bare minimum:

\`\`\`
<link rel="icon" href="/favicon.ico">
\`\`\`

The modern, multi-device setup:

\`\`\`
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
\`\`\`

SVG favicons are the future — one file, infinite resolution, supports dark mode via CSS inside the SVG.

**Custom fonts via Google Fonts** — the most common pattern:

\`\`\`
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap">
\`\`\`

The two preconnects open early connections to Google's servers, saving 100–300ms. \`display=swap\` shows fallback text immediately while the font loads (avoids invisible-text-flash, FOIT).

**Resource hints** — performance superpowers:

- **\`<link rel="preconnect" href="...">\`** — open a TCP+TLS connection early to a domain you'll fetch from soon. Cheap, big win.
- **\`<link rel="dns-prefetch" href="...">\`** — even cheaper, just resolves the DNS. Use on links you might click.
- **\`<link rel="preload" href="..." as="font" crossorigin>\`** — download a critical resource ASAP, before the parser would normally find it. Use sparingly — overuse hurts perf.
- **\`<link rel="prefetch" href="...">\`** — low-priority background download of a resource you'll probably need on the next page.`,
      callouts: [
        { type: "pro-tip", title: "Preload your hero font", content: "<link rel='preload' as='font' type='font/woff2' href='/Inter.woff2' crossorigin> can shave 200ms off your largest contentful paint score." },
        { type: "common-mistake", title: "Forgetting crossorigin on font preconnect", content: "Fonts are CORS-restricted. Without crossorigin, the preconnect opens a connection your font request can't reuse." },
      ],
    },
  ],
  exercises: [
    {
      id: "html14-ex1",
      title: "Link CSS and JS the right way",
      difficulty: 1,
      description: "Set up a head that links one external stylesheet and one external app script using best practices.",
      requirements: ["Stylesheet in <head>", "Script with defer in <head>", "Valid HTML5"],
      starterCode: { html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Setup</title>\n  <!-- link CSS and JS here -->\n</head>\n<body>\n  <h1>Hi</h1>\n</body>\n</html>` },
      hints: [`<link rel="stylesheet" href="/styles.css">`, `<script src="/app.js" defer></script>`, "Both go in <head> — defer makes the script wait for parsing"],
      solution: { html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Setup</title>\n  <link rel="stylesheet" href="/styles.css">\n  <script src="/app.js" defer></script>\n</head>\n<body>\n  <h1>Hi</h1>\n</body>\n</html>` },
      solutionExplanation: "Stylesheet in head blocks render briefly to avoid FOUC. The deferred script downloads in parallel and runs after the DOM is ready.",
    },
    {
      id: "html14-ex2",
      title: "Add Google Fonts with preconnect",
      difficulty: 2,
      description: "Add Inter font from Google Fonts using the recommended three-link pattern.",
      requirements: ["preconnect to fonts.googleapis.com", "preconnect to fonts.gstatic.com with crossorigin", "stylesheet link with display=swap"],
      starterCode: { html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Fonts</title>\n  <!-- add font links -->\n</head>\n<body><h1 style="font-family: Inter, sans-serif">Hello</h1></body>\n</html>` },
      hints: ["Two preconnects then one stylesheet link", "gstatic needs crossorigin attribute", "Use display=swap on the URL"],
      solution: { html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Fonts</title>\n  <link rel="preconnect" href="https://fonts.googleapis.com">\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap">\n</head>\n<body><h1 style="font-family: Inter, sans-serif">Hello</h1></body>\n</html>` },
      solutionExplanation: "Preconnect opens connections early. crossorigin is required for the font CDN. display=swap shows fallback text while the font downloads.",
    },
    {
      id: "html14-ex3",
      title: "Multi-format favicon set",
      difficulty: 2,
      description: "Add SVG, PNG fallback, and Apple touch icon favicons.",
      requirements: ["SVG favicon", "32x32 PNG fallback", "apple-touch-icon"],
      starterCode: { html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Icons</title>\n  <!-- favicons here -->\n</head>\n<body><h1>Check the tab</h1></body>\n</html>` },
      hints: [`type="image/svg+xml" for the SVG`, "PNG needs sizes attribute", "apple-touch-icon is 180x180"],
      solution: { html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Icons</title>\n  <link rel="icon" type="image/svg+xml" href="/favicon.svg">\n  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">\n  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n</head>\n<body><h1>Check the tab</h1></body>\n</html>` },
      solutionExplanation: "Modern browsers prefer the SVG (smallest, scalable). PNG fallback for older browsers. Apple devices use the apple-touch-icon when users save to home screen.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "html14-q1", type: "mcq", question: "What does <link rel='stylesheet'> do that's special?", options: ["Loads JavaScript", "Blocks rendering until the CSS downloads (avoids FOUC)", "Loads images lazily", "Nothing — it's deprecated"], correctAnswer: 1, explanation: "Browsers intentionally block render on stylesheet to avoid showing unstyled content.", difficulty: 2 },
      { id: "html14-q2", type: "mcq", question: "Which script attribute downloads in parallel and runs after HTML is fully parsed, in order?", options: ["async", "defer", "module without defer", "preload"], correctAnswer: 1, explanation: "defer = parallel download, in-order execution after DOM is parsed.", difficulty: 2 },
      { id: "html14-q3", type: "mcq", question: "Which attribute is best for an analytics script that doesn't depend on the DOM?", options: ["defer", "async", "neither — put inline at end of body", "type='module'"], correctAnswer: 1, explanation: "async runs as soon as it arrives, perfect for fire-and-forget scripts.", difficulty: 2 },
      { id: "html14-q4", type: "true-false", question: "<script type='module'> is deferred by default.", options: ["True", "False"], correctAnswer: 0, explanation: "Modules are deferred and run in strict mode.", difficulty: 2 },
      { id: "html14-q5", type: "spot-the-bug", question: "Why might this be slow?", code: `<head>\n  <script src="/jquery.js"></script>\n  <script src="/app.js"></script>\n</head>`, options: ["Scripts can't go in head", "Both scripts block parsing — should use defer", "jQuery is deprecated", "Need https"], correctAnswer: 1, explanation: "Without defer/async, each script blocks the HTML parser until downloaded and executed.", difficulty: 3 },
      { id: "html14-q6", type: "mcq", question: "What does <link rel='preconnect'> do?", options: ["Downloads a file early", "Opens a TCP+TLS connection to a domain early", "Prefetches the next page", "Caches the page"], correctAnswer: 1, explanation: "Preconnect opens the connection so when you actually request a resource, the handshake is already done.", difficulty: 2 },
      { id: "html14-q7", type: "mcq", question: "Which font URL parameter prevents invisible text flash (FOIT)?", options: ["display=block", "display=swap", "weight=swap", "font-display: none"], correctAnswer: 1, explanation: "display=swap shows fallback font immediately, then swaps to the custom font when ready.", difficulty: 2 },
      { id: "html14-q8", type: "mcq", question: "Which favicon format scales infinitely and supports dark mode?", options: ["ICO", "PNG", "JPG", "SVG"], correctAnswer: 3, explanation: "SVG favicons are vector (any size) and can include CSS media queries for dark mode.", difficulty: 1 },
    ],
  },
  cheatSheet: [
    { label: "External CSS", value: '<link rel="stylesheet" href="/styles.css">' },
    { label: "Deferred script", value: '<script src="/app.js" defer></script>' },
    { label: "Async script", value: '<script src="/analytics.js" async></script>' },
    { label: "Module", value: '<script type="module" src="/app.js"></script>' },
    { label: "SVG favicon", value: '<link rel="icon" type="image/svg+xml" href="/fav.svg">' },
    { label: "Apple icon", value: '<link rel="apple-touch-icon" href="/touch.png">' },
    { label: "Preconnect", value: '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' },
    { label: "Preload font", value: '<link rel="preload" as="font" type="font/woff2" href="/x.woff2" crossorigin>' },
  ],
};
