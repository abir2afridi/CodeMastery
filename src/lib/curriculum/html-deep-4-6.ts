import type { Chapter } from "./types";

// ============================================================================
// HTML CHAPTER 4 — LINKS: CONNECTING THE WEB
// ============================================================================
export const htmlCh04: Chapter = {
  id: "html-ch-04",
  number: 4,
  title: "Links — Connecting the Web",
  subtitle: "The single feature that turned a pile of documents into the World Wide Web.",
  difficulty: "Absolute Beginner",
  estimatedMinutes: 40,
  xpReward: 120,
  prerequisites: ["html-ch-03"],
  partLabel: "Part 1: The Absolute Beginning",
  learningObjectives: [
    "Write anchor tags that link to other pages, sections, emails, and phone numbers.",
    "Distinguish between absolute, relative, and root-relative URLs and pick the right one for the job.",
    "Use `target`, `rel`, and `download` attributes correctly and securely.",
    "Link to a specific section of a page using IDs and fragment identifiers.",
    "Avoid the most common link-related mistakes that break sites and harm SEO.",
  ],
  sections: [
    {
      id: "ch04-s1",
      title: "What a Link Actually Is",
      whyItMatters: "Without links, the web is just a pile of disconnected documents. The link is the single most important invention in HTML — it's literally the 'HT' in 'HTML' (HyperText). Master links and you understand why the web is shaped the way it is.",
      realWorldAnalogy: "A link is like a doorway between rooms. The text you click is the doorknob, the destination is what's behind the door, and the browser is the person walking through.",
      content: `In HTML, a link is created with the **anchor element**, written as \`<a>\`. The "a" stands for "anchor" because the original idea was to anchor a piece of text to a destination. Every link has two essential parts: the visible text the user clicks on, and the destination they go to when they click. The destination lives in an attribute called \`href\` — short for "hypertext reference."

Here's the simplest possible link: \`<a href="https://wikipedia.org">Visit Wikipedia</a>\`. The user sees the words "Visit Wikipedia," underlined and (by default) blue. When they click, the browser navigates to the URL inside the \`href\`.

That single tag is the heart of the web. Every menu, every "Read more" button, every footer link, every breadcrumb — it's all just \`<a>\` tags with different content and destinations. By the end of this chapter, you'll be writing them in your sleep.

A link can wrap almost anything: text, images, even entire blocks of content like cards. It does **not** wrap interactive elements like buttons or other links — that's invalid HTML and will confuse browsers and screen readers. We'll cover the rules in detail.`,
      codeExamples: [
        {
          id: "ch04-s1-ex1",
          title: "Your first three links",
          description: "Three links: one to an external site, one to a different page on the same site, and one wrapped around an image.",
          code: {
            html: `<a href="https://developer.mozilla.org">Read the MDN docs</a>\n\n<a href="/about.html">About this site</a>\n\n<a href="https://example.com">\n  <img src="https://placehold.co/200x100" alt="Click me">\n</a>`,
          },
          explanation: "Notice that the third link wraps an entire image. The whole image becomes clickable, and the alt text becomes the accessible name of the link.",
          tryItPrompt: "Change the destination of the first link to a website you actually use, then click it.",
        },
      ],
      callouts: [
        { type: "info", title: "Why links are blue", content: "Tim Berners-Lee chose blue and underline as the default link style in 1993 because blue was the most visible color that wasn't already used for normal text. Almost every browser still respects that choice today." },
      ],
    },
    {
      id: "ch04-s2",
      title: "Absolute, Relative, and Root-Relative URLs",
      whyItMatters: "Choosing the wrong type of URL is the #1 reason links break when you deploy a site or move pages. Get this right once and you'll avoid hundreds of bugs over your career.",
      realWorldAnalogy: "An absolute URL is a full street address with the country and city. A relative URL is 'two doors down on the left.' A root-relative URL is 'starting from the front door of this building, go to apartment 3B.' All three can describe the same place — but only one is correct depending on where you're standing.",
      content: `There are three ways to write the destination of a link, and each is correct in different situations.

**Absolute URLs** start with a protocol like \`https://\` and include the full domain. Example: \`https://example.com/blog/post-1.html\`. This works from anywhere — paste it into any website on the internet and it goes to the same place. Use absolute URLs whenever you link to a different website.

**Relative URLs** describe the destination *relative to the current page*. If you're on \`/blog/index.html\` and you write \`<a href="post-1.html">\`, the browser looks for \`/blog/post-1.html\`. If you write \`<a href="../about.html">\`, the \`..\` means "go up one folder," so it looks for \`/about.html\`. Relative URLs are short and convenient, but they break if you move the page.

**Root-relative URLs** start with a single slash. \`<a href="/about.html">\` always means "start from the website's root and look for about.html," no matter what page you're on. This is usually the best choice for links within your own site because the URL never changes if you reorganize folders.

When in doubt: use absolute for external links, root-relative for internal links, and reserve plain relative URLs for files that always live next to each other.`,
      codeExamples: [
        {
          id: "ch04-s2-ex1",
          title: "All three URL types in one example",
          description: "Imagine this code lives in a page at /blog/2024/post-1.html",
          code: {
            html: `<!-- Absolute (works from anywhere) -->\n<a href="https://github.com">GitHub</a>\n\n<!-- Root-relative (always starts at site root) -->\n<a href="/about.html">About</a>\n<a href="/blog/index.html">Blog index</a>\n\n<!-- Relative (depends on current page) -->\n<a href="post-2.html">Next post (same folder)</a>\n<a href="../2023/recap.html">2023 recap (sibling folder)</a>\n<a href="../../index.html">Home (two levels up)</a>`,
          },
          explanation: "All five of those internal links could point to perfectly valid pages — it depends entirely on where the current file lives in the folder structure.",
          tryItPrompt: "Try sketching out a folder tree for a small site and write a link from each page to every other page using only relative URLs. It's harder than it looks!",
        },
      ],
      callouts: [
        { type: "common-mistake", title: "Forgetting the protocol", content: "Writing `<a href=\"google.com\">` (without `https://`) does NOT link to Google. The browser treats it as a relative path and looks for a folder named `google.com` on your own site. Always include `https://` for external links." },
        { type: "pro-tip", title: "Hover to verify", content: "In any browser, hover over a link without clicking. The real destination appears in the bottom-left corner. This is your fastest debugging tool — and a critical security habit when checking suspicious emails." },
      ],
      microExercise: {
        instruction: "Fix the broken link below. The page is at /products/index.html and you want to link to /about.html.",
        starterCode: { html: `<a href="about.html">About us</a>` },
        hint: "From /products/index.html, plain `about.html` would look for /products/about.html. Use a root-relative or relative path that escapes the products folder.",
        solution: { html: `<a href="/about.html">About us</a>\n<!-- or relative: <a href="../about.html">About us</a> -->` },
      },
    },
    {
      id: "ch04-s3",
      title: "Special Link Types: Email, Phone, Downloads, Anchors",
      whyItMatters: "Links can do far more than open web pages. Knowing the special protocols turns a static page into something that triggers actions on the user's device.",
      content: `Beyond linking to web pages, the \`href\` attribute supports several special prefixes that trigger device actions.

**Email links** use \`mailto:\`. \`<a href="mailto:hello@example.com">Email us</a>\` opens the user's default email app with a new message addressed to that address. You can pre-fill the subject and body too: \`mailto:hello@example.com?subject=Hello&body=Hi%20there\`.

**Phone links** use \`tel:\`. On a smartphone, \`<a href="tel:+15551234567">Call us</a>\` triggers the phone dialer. On a desktop, it usually opens FaceTime or a VoIP app. Always include the country code (\`+1\` for US/Canada, \`+44\` for UK, etc.) so it works internationally.

**Download links** use the \`download\` attribute. Normally clicking a link to a PDF opens it in the browser. Adding \`download\` forces the browser to save it instead: \`<a href="/files/manual.pdf" download>Download manual</a>\`. You can also rename the file: \`<a href="/files/abc123.pdf" download="UserGuide.pdf">\`.

**Anchor links** (also called fragment links) jump to a specific section of the current page. They use a \`#\` followed by the ID of an element. Inside one page, write \`<h2 id="pricing">Pricing</h2>\` and link to it from anywhere with \`<a href="#pricing">Jump to pricing</a>\`. The browser scrolls smoothly to that section. You can also link to a section on a different page: \`<a href="/about.html#team">Meet the team</a>\`.`,
      codeExamples: [
        {
          id: "ch04-s3-ex1",
          title: "Special links in action",
          description: "All four special link types in one tiny page. Try each one in the preview.",
          code: {
            html: `<!DOCTYPE html>\n<html>\n  <body>\n    <nav>\n      <a href="#contact">Jump to contact</a> |\n      <a href="#downloads">Downloads</a>\n    </nav>\n\n    <h1>My Tiny Site</h1>\n    <p style="height:200vh">Lots of content here so you can scroll...</p>\n\n    <h2 id="downloads">Downloads</h2>\n    <a href="/files/sample.pdf" download="MySample.pdf">Download the sample PDF</a>\n\n    <h2 id="contact">Contact</h2>\n    <a href="mailto:hello@example.com?subject=Hello">Email me</a><br>\n    <a href="tel:+15551234567">Call me</a>\n  </body>\n</html>`,
          },
          explanation: "Click the navigation links at the top — the page jumps to those sections. The mailto and tel links will try to open your email/phone apps.",
          tryItPrompt: "Add a third anchor link at the top that jumps to a new section about your hobbies, then add the corresponding section with an id.",
        },
      ],
      callouts: [
        { type: "warning", title: "Don't expose your email in plain text", content: "Spam bots scrape `mailto:` links. For high-traffic public sites, consider a contact form instead, or obfuscate the address with JavaScript." },
        { type: "tip", title: "Smooth scrolling for free", content: "Add `html { scroll-behavior: smooth; }` in CSS and all anchor links scroll with a smooth animation instead of jumping instantly." },
      ],
    },
    {
      id: "ch04-s4",
      title: "target, rel, and Link Security",
      whyItMatters: "Adding `target=\"_blank\"` to a link without `rel=\"noopener\"` is a real security vulnerability that has cost real companies real money. This section is short but critical.",
      content: `By default, clicking a link replaces the current page with the new one. The \`target\` attribute changes that behavior.

\`target="_blank"\` opens the link in a new tab. This is useful for external links so users don't lose their place on your site. But there's a security catch: until 2021, opening a link in a new tab gave the new page partial access to the original page through a JavaScript property called \`window.opener\`. A malicious site could use this to redirect your original tab to a phishing page — a real attack called *tabnabbing*.

The fix is the \`rel\` attribute. \`rel="noopener"\` cuts the connection so the new tab cannot touch the original. \`rel="noreferrer"\` does the same and also hides which page the user came from. Modern browsers apply \`noopener\` automatically for \`target="_blank"\`, but it's still best practice to write it explicitly because older browsers and embedded webviews may not.

For external links, the safest pattern is: \`<a href="..." target="_blank" rel="noopener noreferrer">\`.

The \`rel\` attribute also has SEO meanings. \`rel="nofollow"\` tells search engines not to pass ranking authority to the linked site (use for paid links and untrusted user content). \`rel="sponsored"\` marks paid placements. \`rel="ugc"\` marks user-generated content like comments. Mis-tagging links can hurt your SEO, so use these intentionally.`,
      codeExamples: [
        {
          id: "ch04-s4-ex1",
          title: "Safe external link",
          description: "The pattern to use for every external link on a serious project.",
          code: {
            html: `<a href="https://example.com" target="_blank" rel="noopener noreferrer">\n  External site (opens in new tab)\n</a>`,
          },
          explanation: "Three attributes work together: target opens it in a new tab, noopener prevents tabnabbing, noreferrer hides the source URL.",
          tryItPrompt: "Add this pattern to two of the links from the previous example.",
        },
      ],
      callouts: [
        { type: "error", title: "Common security failure", content: "`<a href=\"https://untrusted.com\" target=\"_blank\">click</a>` without rel=noopener was a real vulnerability used in phishing attacks against Twitter, GitHub, and others." },
        { type: "common-mistake", title: "Don't open internal links in new tabs", content: "Opening links to your OWN site in new tabs annoys users. They have a Back button — let them use it. Reserve `target=\"_blank\"` for truly external destinations." },
      ],
      microExercise: {
        instruction: "Make this external link safe and open in a new tab.",
        starterCode: { html: `<a href="https://wikipedia.org">Wikipedia</a>` },
        hint: "You need both `target` and `rel` attributes.",
        solution: { html: `<a href="https://wikipedia.org" target="_blank" rel="noopener noreferrer">Wikipedia</a>` },
      },
    },
    {
      id: "ch04-s5",
      title: "Writing Links That Don't Suck",
      whyItMatters: "Bad link text is bad UX, bad accessibility, and bad SEO all at once. The good news: writing great link text takes the same effort as writing terrible link text.",
      content: `The text inside a link should describe its destination. Screen readers can read all the links on a page in isolation — when they do, "click here" tells the user nothing. Compare:

❌ \`To download our 2024 report, <a href="/report.pdf">click here</a>.\`
✅ \`<a href="/report.pdf">Download our 2024 report</a>.\`

The good version is shorter, clearer, more accessible, and ranks better in search engines because the link text matches the destination.

Other rules of thumb:

**Be specific.** "Learn more about pricing" beats "Learn more." A page often has many "Learn more" links, all going to different places.

**Don't repeat the URL.** \`<a href="https://example.com">https://example.com</a>\` is fine in casual contexts but unprofessional in body text. Use descriptive text.

**Mark destinations that surprise users.** If a link downloads a file or opens an external site, say so or use an icon. Never make users wonder what's about to happen.

**Use buttons for actions, links for navigation.** A "link" that triggers a JavaScript action (like opening a modal or submitting a form) should be a \`<button>\`, not an \`<a>\`. Links go places; buttons do things. We'll cover buttons properly in the forms chapter.`,
      callouts: [
        { type: "pro-tip", title: "Test with a screen reader", content: "On Mac, press Cmd+F5 to turn on VoiceOver. On Windows, NVDA is free. Listen to your page once — you'll instantly hear which links are confusing." },
      ],
      deepDive: `**Why links can't contain other links.** The HTML spec forbids nesting interactive content inside an anchor. The reason is partly UX (which link does the user click?) and partly historical: early browsers couldn't render nested links predictably. If you need a "card" with multiple clickable areas, use one main link and position smaller links absolutely on top, with proper z-index management.

**Link prefetching.** Modern browsers support \`<link rel="prefetch" href="/likely-next-page.html">\` in the page head, which tells the browser to download a page in the background so it loads instantly when the user clicks. Use sparingly — prefetching everything wastes the user's data.

**The history of HTTP status codes for links.** When a link points to a removed page, servers should return a 410 Gone status, not just 404 Not Found. 404 means "we don't know what this is," 410 means "this used to exist but is permanently gone." Search engines treat 410 more aggressively for de-indexing.`,
    },
  ],
  exercises: [
    {
      id: "html-ch-04-ex1",
      title: "Build a navigation menu",
      difficulty: 1,
      description: "Create a horizontal navigation menu with five links: Home, About, Services, Blog, Contact. The contact link should be an email link.",
      requirements: ["Use a single <nav> element", "Five links total", "Contact link uses mailto:", "All other links use root-relative URLs"],
      starterCode: { html: `<nav>\n  <!-- your links here -->\n</nav>` },
      hints: ["Wrap all links in a <ul> for proper structure", "Don't forget the Contact link uses mailto: not a path"],
      solution: {
        html: `<nav>\n  <ul>\n    <li><a href="/">Home</a></li>\n    <li><a href="/about">About</a></li>\n    <li><a href="/services">Services</a></li>\n    <li><a href="/blog">Blog</a></li>\n    <li><a href="mailto:hello@example.com">Contact</a></li>\n  </ul>\n</nav>`,
      },
      solutionExplanation: "Wrapping the links in a <ul> gives screen readers a count ('5 items') and keyboard users predictable navigation. The mailto link triggers the user's email client.",
    },
    {
      id: "html-ch-04-ex2",
      title: "Table of contents with anchor links",
      difficulty: 2,
      description: "Build a one-page article with three sections (Introduction, Methods, Results) and a table of contents at the top that jumps to each section.",
      requirements: ["TOC at the top with three links", "Each section has an id and an h2", "Each section has a 'Back to top' link"],
      starterCode: { html: `<h1 id="top">My Article</h1>\n<!-- TOC and sections here -->` },
      hints: ["Use # followed by the id to link to a section", "The 'Back to top' links should all point to #top"],
      solution: {
        html: `<h1 id="top">My Article</h1>\n\n<nav>\n  <h2>Contents</h2>\n  <ul>\n    <li><a href="#intro">Introduction</a></li>\n    <li><a href="#methods">Methods</a></li>\n    <li><a href="#results">Results</a></li>\n  </ul>\n</nav>\n\n<section id="intro">\n  <h2>Introduction</h2>\n  <p>Body text...</p>\n  <a href="#top">Back to top</a>\n</section>\n\n<section id="methods">\n  <h2>Methods</h2>\n  <p>Body text...</p>\n  <a href="#top">Back to top</a>\n</section>\n\n<section id="results">\n  <h2>Results</h2>\n  <p>Body text...</p>\n  <a href="#top">Back to top</a>\n</section>`,
      },
      solutionExplanation: "Each section's id matches a fragment in the TOC. The 'Back to top' pattern is a classic for long articles — pair it with `scroll-behavior: smooth` in CSS for a polished feel.",
    },
    {
      id: "html-ch-04-ex3",
      title: "Resource page with safe external links",
      difficulty: 3,
      description: "Build a resource page with three external links (your favorite docs sites), one downloadable PDF, and one phone number. Apply security best practices.",
      requirements: [
        "Three external links open in new tabs with proper rel attributes",
        "PDF download forces save with a custom filename",
        "Phone link includes country code",
        "Each link has descriptive text (no 'click here')",
      ],
      starterCode: { html: `<h1>My Resources</h1>\n<!-- your links here -->` },
      hints: ["External link pattern: target=\"_blank\" rel=\"noopener noreferrer\"", "Download pattern: download=\"NewName.pdf\""],
      solution: {
        html: `<h1>My Resources</h1>\n\n<h2>Documentation</h2>\n<ul>\n  <li><a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">MDN Web Docs</a></li>\n  <li><a href="https://web.dev" target="_blank" rel="noopener noreferrer">web.dev by Google</a></li>\n  <li><a href="https://caniuse.com" target="_blank" rel="noopener noreferrer">Can I Use — browser support tables</a></li>\n</ul>\n\n<h2>Files</h2>\n<a href="/cheatsheet.pdf" download="HTML-Cheatsheet.pdf">Download the HTML cheat sheet (PDF)</a>\n\n<h2>Get in touch</h2>\n<a href="tel:+15551234567">Call our support line: +1 555 123 4567</a>`,
      },
      solutionExplanation: "Notice that every link describes its destination, external links are isolated from the parent page, and the download attribute renames the file to something user-friendly.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "html-ch-04-q1",
        type: "mcq",
        question: "Which attribute on the <a> element holds the destination URL?",
        options: ["src", "href", "link", "url"],
        correctAnswer: 1,
        explanation: "href stands for 'hypertext reference' and has been the link destination attribute since HTML's first version.",
        difficulty: 1,
      },
      {
        id: "html-ch-04-q2",
        type: "mcq",
        question: "You're on a page at /blog/index.html and you write <a href=\"about.html\">. Where does this link try to go?",
        options: ["/about.html", "/blog/about.html", "https://about.html", "It's a syntax error"],
        correctAnswer: 1,
        explanation: "Plain relative URLs resolve against the current folder. Since the page is in /blog/, the link looks for /blog/about.html.",
        difficulty: 2,
      },
      {
        id: "html-ch-04-q3",
        type: "mcq",
        question: "Why should you add rel=\"noopener\" to links with target=\"_blank\"?",
        options: [
          "It makes the link open faster",
          "It prevents the new tab from accessing the original page (security)",
          "It tells search engines not to follow the link",
          "It is required by HTML5 validators",
        ],
        correctAnswer: 1,
        explanation: "Without noopener, the destination page can use window.opener to redirect or read the original page — a real attack called tabnabbing.",
        difficulty: 2,
      },
      {
        id: "html-ch-04-q4",
        type: "true-false",
        question: "Wrapping a <button> inside an <a> is valid HTML.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "It's invalid. You cannot nest interactive elements inside each other. Use either a link OR a button — not both.",
        difficulty: 2,
      },
      {
        id: "html-ch-04-q5",
        type: "mcq",
        question: "What does <a href=\"#pricing\"> do?",
        options: [
          "Searches the page for the word 'pricing'",
          "Jumps to the element with id='pricing' on the current page",
          "Opens a JavaScript prompt",
          "It's a broken link",
        ],
        correctAnswer: 1,
        explanation: "A href starting with # is a fragment link — it scrolls to the element whose id matches the part after the #.",
        difficulty: 1,
      },
      {
        id: "html-ch-04-q6",
        type: "spot-the-bug",
        question: "What's wrong with this 'download our brochure' link?",
        code: `<a href="brochure.pdf" target="_blank">click here</a>`,
        options: [
          "Nothing — it's perfect",
          "Link text is non-descriptive AND missing rel=noopener",
          "PDFs cannot be linked",
          "target=\"_blank\" is deprecated",
        ],
        correctAnswer: 1,
        explanation: "'click here' is bad for a11y/SEO, and target=\"_blank\" without rel=\"noopener\" is a security risk. Better: <a href=\"brochure.pdf\" download>Download our brochure (PDF)</a>",
        difficulty: 3,
      },
    ],
  },
  cheatSheet: [
    { label: "Basic link", value: '<a href="https://example.com">Text</a>' },
    { label: "Internal link", value: '<a href="/about">About</a>' },
    { label: "New tab (safe)", value: '<a href="..." target="_blank" rel="noopener noreferrer">' },
    { label: "Email", value: '<a href="mailto:hi@example.com">' },
    { label: "Phone", value: '<a href="tel:+15551234567">' },
    { label: "Download", value: '<a href="/file.pdf" download="Name.pdf">' },
    { label: "Anchor", value: '<a href="#section-id">Jump</a>' },
  ],
};

// ============================================================================
// HTML CHAPTER 5 — IMAGES
// ============================================================================
export const htmlCh05: Chapter = {
  id: "html-ch-05",
  number: 5,
  title: "Images",
  subtitle: "Make your pages visual without breaking accessibility, performance, or layout.",
  difficulty: "Absolute Beginner",
  estimatedMinutes: 40,
  xpReward: 120,
  prerequisites: ["html-ch-04"],
  partLabel: "Part 1: The Absolute Beginning",
  learningObjectives: [
    "Embed images using the <img> tag with proper src and alt attributes.",
    "Choose between JPG, PNG, WebP, AVIF, SVG, and GIF based on the image's content and purpose.",
    "Write alt text that helps users with screen readers and improves SEO.",
    "Prevent layout shift by setting width and height attributes.",
    "Implement lazy loading and responsive images using srcset and the <picture> element.",
  ],
  sections: [
    {
      id: "ch05-s1",
      title: "The <img> Tag and Why It's Different",
      whyItMatters: "Images are the heaviest thing on most web pages. A page with five well-handled images can load in 0.5 seconds; the same page with five badly-handled images can take 10 seconds. The skill of using `<img>` correctly is one of the highest-leverage things you'll learn.",
      realWorldAnalogy: "An <img> tag is like a picture frame on a wall. The frame itself is empty — the src attribute tells it which photo to display, and the alt attribute is the caption for someone who can't see the picture.",
      content: `Unlike most HTML elements, \`<img>\` does not have a closing tag. It's a **void element** — it stands alone and represents a single thing rather than wrapping content. You write it like this: \`<img src="cat.jpg" alt="A grey cat sitting on a windowsill">\`.

The two attributes you see there are not optional in spirit, even if browsers will tolerate missing them. \`src\` (source) tells the browser what image file to load. \`alt\` (alternative text) is the text shown if the image fails to load *and* the text read aloud by screen readers. We will spend an entire section on alt text because writing it well is harder than it looks.

When the browser sees an \`<img>\` tag, it does several things in parallel: it creates a placeholder where the image will go, it sends a network request to download the image file, and it continues parsing the rest of the HTML. When the image arrives, the browser slots it into the placeholder. This is why slow images can shift your whole layout — we'll fix that in section 4.

Images are referenced with the same URL types as links: absolute (\`https://...\`), root-relative (\`/images/cat.jpg\`), and relative (\`cat.jpg\`). The same advice applies: use root-relative paths for images on your own site so they keep working when you move pages.`,
      codeExamples: [
        {
          id: "ch05-s1-ex1",
          title: "An image with everything you need",
          description: "Four attributes that should appear on virtually every image you ever write.",
          code: {
            html: `<img\n  src="https://placehold.co/600x400"\n  alt="A geometric pattern with the dimensions 600 by 400"\n  width="600"\n  height="400"\n>`,
          },
          explanation: "src loads the image. alt describes it for screen readers and search engines. width and height reserve space so the page doesn't jump when the image loads.",
          tryItPrompt: "Try removing the width and height. Reload the preview a few times — you'll see the layout shift.",
        },
      ],
      callouts: [
        { type: "info", title: "<img> is self-closing", content: "You may see `<img ... />` (with a slash) in some codebases. Both forms are valid in HTML5; the slash is a leftover from XHTML. Modern style is to omit it." },
      ],
    },
    {
      id: "ch05-s2",
      title: "Image Formats: JPG, PNG, WebP, AVIF, SVG, GIF",
      whyItMatters: "Picking the wrong format can make your image 10x larger than it needs to be. The right format is usually obvious once you know the rules.",
      content: `**JPG (or JPEG)** uses lossy compression — it throws away small details that human eyes barely notice. JPG is great for photographs and any image with smooth color gradients. It does NOT support transparency. File sizes are small. Use JPG for photos.

**PNG** uses lossless compression — every pixel is preserved exactly. PNG supports transparency, which makes it perfect for logos, icons, screenshots, and any image with sharp edges or text. File sizes are larger than JPG. Use PNG when you need transparency or pixel-perfect quality.

**WebP** is Google's modern format, supported in every browser since 2020. WebP files are typically 25–35% smaller than equivalent JPG or PNG files at the same quality, and it supports both transparency and animation. Use WebP whenever you can — it's strictly better than JPG/PNG in almost every case.

**AVIF** is even newer and even better. AVIF files are often half the size of JPG at the same quality. Browser support is now excellent (95%+). Use AVIF when you want the absolute smallest files. Pair it with a WebP or JPG fallback using the \`<picture>\` element (covered later).

**SVG** (Scalable Vector Graphics) is fundamentally different from the others — it's not a grid of pixels, it's a text file describing shapes. SVG scales to any size without losing quality, and the file size is tiny. Use SVG for logos, icons, illustrations, and charts. Never use SVG for photos.

**GIF** is ancient, supports animation but only 256 colors and bloated file sizes. For animated content, use a video file (\`<video>\` tag with autoplay, muted, loop) — it's 10x smaller and plays better. Reserve GIF for nostalgia.`,
      callouts: [
        { type: "tip", title: "Quick decision tree", content: "Photo? → WebP/AVIF (or JPG fallback). Logo or icon? → SVG. Screenshot with text? → PNG (or WebP). Animation? → muted, looping <video>, NOT a GIF." },
        { type: "common-mistake", title: "Don't save photos as PNG", content: "A photo saved as PNG can be 10x larger than the same photo as JPG, with no quality benefit. PNG is for graphics with sharp edges, not photographs." },
      ],
      codeExamples: [
        {
          id: "ch05-s2-ex1",
          title: "Inline SVG vs <img>",
          description: "An SVG can be embedded directly in HTML, which lets you style and animate it with CSS.",
          code: {
            html: `<!-- Method 1: as an image file -->\n<img src="/icons/heart.svg" alt="Favorite" width="24" height="24">\n\n<!-- Method 2: inline SVG (more powerful) -->\n<svg width="24" height="24" viewBox="0 0 24 24" fill="red" aria-label="Favorite">\n  <path d="M12 21s-7-4.5-9.5-9C.5 7 4 3 8 4.5 10 5.3 12 7 12 7s2-1.7 4-2.5C20 3 23.5 7 21.5 12 19 16.5 12 21 12 21z"/>\n</svg>`,
          },
          explanation: "The <img> version is simpler but you can't change its color from CSS. The inline version takes more code but you can style and animate it like any other HTML element.",
          tryItPrompt: "Change the inline SVG's fill from 'red' to 'blue'.",
        },
      ],
    },
    {
      id: "ch05-s3",
      title: "Writing Alt Text That Actually Works",
      whyItMatters: "About 1 in 200 web users uses a screen reader. Writing good alt text makes your site usable for them. It also helps SEO — search engines read alt text to understand image content.",
      content: `Alt text is read aloud to users who can't see the image. The challenge is that the same image can need totally different alt text depending on its role on the page.

There are four cases:

**1. The image is content.** A blog post about a sunset includes a sunset photo. Write alt text that describes what the photo shows: \`alt="A vivid orange and purple sunset over a mountain range, with low clouds catching the last sunlight"\`. Be specific. Don't just say "sunset photo."

**2. The image illustrates the surrounding text.** An article paragraph already describes the image in detail. Don't repeat the description — write a short alt that adds context: \`alt="Diagram showing the data flow described above"\`.

**3. The image is decorative.** A subtle background pattern, a separator line, an image that adds no information. Use empty alt: \`alt=""\` (the attribute is still required, just empty). Screen readers will skip it entirely. **Do NOT omit the alt attribute** — that makes screen readers read out the filename, which is worse.

**4. The image is part of a link or button.** The alt text becomes the link's accessible name. \`<a href="/profile"><img src="avatar.jpg" alt="Your profile"></a>\`. Describe the destination, not the image.

Two rules to follow always:

- **Don't start with "Image of..." or "Picture of..."** Screen readers already announce that it's an image. Saying "Image of a dog" becomes "Image, image of a dog" — annoying and redundant.
- **Keep it under ~125 characters.** Some screen readers cut off longer alt text. If you need more detail, put it in the surrounding paragraph or use \`<figcaption>\`.`,
      codeExamples: [
        {
          id: "ch05-s3-ex1",
          title: "Same image, four different alt texts",
          description: "How context changes alt text.",
          code: {
            html: `<!-- 1. Standalone content -->\n<img src="dog.jpg" alt="A golden retriever puppy carrying a tennis ball across a green lawn">\n\n<!-- 2. Already described in nearby text -->\n<p>The puppy stage of a golden retriever is shown below.</p>\n<img src="dog.jpg" alt="">\n\n<!-- 3. Decorative -->\n<img src="dog.jpg" alt="" role="presentation">\n\n<!-- 4. Inside a link -->\n<a href="/dogs"><img src="dog.jpg" alt="See all our dogs"></a>`,
          },
          explanation: "Same file, four totally different alt strategies. The 'right' answer depends entirely on how the image is used.",
          tryItPrompt: "Imagine a hero image at the top of a homepage. Write three different alt-text strategies and discuss which works best.",
        },
      ],
      callouts: [
        { type: "warning", title: "Empty alt is NOT missing alt", content: '`alt=""` says "this image is decorative, skip it." Missing alt entirely says "I forgot to handle this image" and makes screen readers read the filename. Always include the attribute.' },
        { type: "pro-tip", title: "The 'phone test'", content: "Imagine reading your page over the phone to a friend. Would they understand what's happening? If you'd describe an image, write that description as alt. If you'd skip it, use empty alt." },
      ],
      microExercise: {
        instruction: "Add proper alt text to both images. The first is the company logo (linked to homepage), the second is a decorative gradient.",
        starterCode: {
          html: `<a href="/"><img src="/logo.png"></a>\n<img src="/gradient.jpg">`,
        },
        hint: "Logo inside a link → describe the destination. Decorative image → empty alt.",
        solution: {
          html: `<a href="/"><img src="/logo.png" alt="Acme Inc — home"></a>\n<img src="/gradient.jpg" alt="">`,
        },
      },
    },
    {
      id: "ch05-s4",
      title: "Performance: Lazy Loading, Width/Height, and Responsive Images",
      whyItMatters: "These four small techniques can cut your page load time in half. They are the single fastest performance win in HTML, and they take 30 seconds to add.",
      content: `**Always set width and height.** When the browser parses \`<img>\` without dimensions, it doesn't know how much space to reserve. So it leaves zero space, then jumps the page when the image arrives. This causes **Cumulative Layout Shift** (CLS), one of Google's Core Web Vitals — bad CLS hurts your search ranking. Setting \`width="600" height="400"\` reserves the right aspect ratio immediately. Use the image's natural pixel dimensions; CSS can still resize it visually.

**Use loading="lazy".** \`<img src="..." loading="lazy">\` tells the browser not to download the image until the user scrolls near it. For a long page with many images, this can reduce initial page weight by 80%. The exception: don't use lazy loading on the hero image at the very top of the page — that one should load eagerly.

**Use srcset for different screen sizes.** A single image at 2000px wide is wasteful on a phone screen 400px wide. With \`srcset\`, you provide multiple versions and let the browser pick:

\`\`\`html
<img
  src="photo-800.jpg"
  srcset="photo-400.jpg 400w, photo-800.jpg 800w, photo-1600.jpg 1600w"
  sizes="(max-width: 600px) 100vw, 800px"
  alt="..."
>
\`\`\`

The browser checks the screen size and pixel density and downloads only the smallest version that still looks sharp.

**Use \`<picture>\` for format variants and art direction.** When you want to serve AVIF to browsers that support it, with WebP and JPG fallbacks, use the \`<picture>\` element:

\`\`\`html
<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="..." width="1200" height="600">
</picture>
\`\`\`

The browser tries the sources top to bottom and uses the first one it understands. Older browsers fall back to the \`<img>\`.`,
      codeExamples: [
        {
          id: "ch05-s4-ex1",
          title: "Production-ready image",
          description: "All best practices in one tag.",
          code: {
            html: `<img\n  src="https://placehold.co/800x500"\n  alt="A sample placeholder image used in this example"\n  width="800"\n  height="500"\n  loading="lazy"\n  decoding="async"\n>`,
          },
          explanation: "Width/height prevent layout shift. loading='lazy' delays download until needed. decoding='async' lets the browser process the image without blocking other rendering.",
          tryItPrompt: "Add this image five times with different src URLs to simulate a long page. Open DevTools Network tab to see lazy loading in action.",
        },
      ],
      callouts: [
        { type: "pro-tip", title: "Skip lazy loading for hero images", content: "The image at the very top of the page (above the fold) should load eagerly — lazy loading delays it and hurts your Largest Contentful Paint score." },
      ],
      deepDive: `**The intrinsic aspect ratio trick.** When you set width="800" height="500" but CSS overrides the actual size, modern browsers still preserve the 8:5 aspect ratio when reserving space. This means you can write \`<img width="800" height="500" style="width:100%; height:auto">\` and the placeholder space will scale fluidly with no layout shift.

**Why decoding="async".** Image decoding (turning the file into pixels) happens on the main thread by default and can briefly freeze your page. \`decoding="async"\` lets the browser do it on a background thread.

**Image CDNs** like Cloudinary, imgix, and Cloudflare Images automate everything in this section: they generate WebP/AVIF on the fly, resize to the requested dimensions, and serve from edge servers near the user. For any serious project, an image CDN is worth the small monthly cost.`,
    },
  ],
  exercises: [
    {
      id: "html-ch-05-ex1",
      title: "Image gallery row",
      difficulty: 1,
      description: "Display three placeholder images in a row, each with proper alt text and dimensions.",
      requirements: ["Three <img> tags", "All have alt, width, height", "Use loading='lazy' on at least two of them"],
      starterCode: { html: `<div>\n  <!-- your images here -->\n</div>` },
      hints: ["You can use https://placehold.co/300x200 to get placeholder images of any size", "Don't lazy-load the very first image"],
      solution: {
        html: `<div style="display:flex; gap:8px;">\n  <img src="https://placehold.co/300x200/red/white" alt="Red placeholder" width="300" height="200">\n  <img src="https://placehold.co/300x200/green/white" alt="Green placeholder" width="300" height="200" loading="lazy">\n  <img src="https://placehold.co/300x200/blue/white" alt="Blue placeholder" width="300" height="200" loading="lazy">\n</div>`,
      },
      solutionExplanation: "All three images reserve their layout space. The first loads immediately because it's likely above the fold; the others wait until needed.",
    },
    {
      id: "html-ch-05-ex2",
      title: "Responsive hero image",
      difficulty: 2,
      description: "Build a hero image that serves AVIF to modern browsers, WebP as fallback, and JPG as last resort.",
      requirements: ["Use the <picture> element", "Three <source> formats", "<img> fallback with alt and dimensions"],
      starterCode: { html: `<picture>\n  <!-- sources here -->\n  <img src="/hero.jpg" alt="">\n</picture>` },
      hints: ["The order matters: AVIF first, then WebP, then the JPG fallback", "Each <source> needs a type attribute"],
      solution: {
        html: `<picture>\n  <source srcset="/hero.avif" type="image/avif">\n  <source srcset="/hero.webp" type="image/webp">\n  <img src="/hero.jpg" alt="A sweeping view of mountains at sunrise" width="1600" height="900" loading="eager">\n</picture>`,
      },
      solutionExplanation: "The browser walks the sources top-to-bottom and picks the first format it supports. Older browsers ignore <source> entirely and use the <img>.",
    },
    {
      id: "html-ch-05-ex3",
      title: "Linked logo with proper a11y",
      difficulty: 1,
      description: "Place your site logo at the top of the page, linked to home, with alt text that describes the link destination (not the image).",
      requirements: ["<a> wraps <img>", "Alt text describes destination, not the image", "Width and height set"],
      starterCode: { html: `<header>\n  <!-- logo here -->\n</header>` },
      hints: ["The alt text becomes the link's accessible name. Think 'where does this go?' not 'what is this picture?'"],
      solution: {
        html: `<header>\n  <a href="/">\n    <img src="/logo.svg" alt="Acme — home" width="120" height="40">\n  </a>\n</header>`,
      },
      solutionExplanation: "Screen reader users hear 'link, Acme home' — they know what the link does. If alt said 'Acme logo,' they'd hear 'link, Acme logo' which doesn't tell them where it goes.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "html-ch-05-q1",
        type: "mcq",
        question: "Which two attributes should appear on virtually every <img> tag?",
        options: ["src and href", "src and alt", "src and id", "alt and width"],
        correctAnswer: 1,
        explanation: "src tells the browser what to load; alt is the accessible alternative. Width/height are also strongly recommended but secondary.",
        difficulty: 1,
      },
      {
        id: "html-ch-05-q2",
        type: "mcq",
        question: "You have a logo and a photograph. Which formats are best?",
        options: [
          "PNG for both",
          "JPG for both",
          "SVG for the logo, JPG/WebP for the photograph",
          "GIF for both",
        ],
        correctAnswer: 2,
        explanation: "Logos are graphics with sharp edges → SVG. Photographs have smooth gradients → JPG (or modern WebP/AVIF).",
        difficulty: 2,
      },
      {
        id: "html-ch-05-q3",
        type: "true-false",
        question: "If an image is purely decorative, you can omit the alt attribute entirely.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "Decorative images need alt=\"\" (empty). Omitting alt entirely makes screen readers read out the filename — worse than nothing.",
        difficulty: 2,
      },
      {
        id: "html-ch-05-q4",
        type: "mcq",
        question: "Why set width and height attributes on an image?",
        options: [
          "To make the image bigger",
          "To prevent layout shift while the image loads",
          "It's required for the image to display",
          "To override CSS sizing",
        ],
        correctAnswer: 1,
        explanation: "Without dimensions, the browser doesn't reserve space. When the image loads, it pushes content around — bad UX and bad for Core Web Vitals.",
        difficulty: 2,
      },
      {
        id: "html-ch-05-q5",
        type: "mcq",
        question: "What does loading=\"lazy\" do?",
        options: [
          "Reduces image quality",
          "Defers loading until the image is near the viewport",
          "Makes images load slower on purpose",
          "Disables the image",
        ],
        correctAnswer: 1,
        explanation: "Lazy loading delays the network request until the user scrolls close to the image, saving bandwidth and speeding up initial page load.",
        difficulty: 1,
      },
      {
        id: "html-ch-05-q6",
        type: "spot-the-bug",
        question: "What's wrong with this image?",
        code: `<img src="dog.jpg" alt="Image of a dog">`,
        options: [
          "Nothing — it's perfect",
          "Alt text starts with 'Image of' which is redundant for screen readers",
          "Missing closing tag",
          "src should be href",
        ],
        correctAnswer: 1,
        explanation: 'Screen readers already announce the element type. "Image of a dog" becomes "Image, image of a dog." Just say "A dog" — better, write something specific like "A golden retriever lying in the grass."',
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Basic image", value: '<img src="..." alt="...">' },
    { label: "With dimensions (recommended)", value: '<img src="..." alt="..." width="600" height="400">' },
    { label: "Lazy load", value: '<img src="..." alt="..." loading="lazy">' },
    { label: "Decorative", value: '<img src="..." alt="">' },
    { label: "Responsive", value: '<img srcset="s.jpg 400w, l.jpg 1200w" sizes="100vw" src="l.jpg" alt="...">' },
    { label: "Modern formats", value: '<picture><source type="image/avif" srcset="..."><img src="..." alt="..."></picture>' },
    { label: "Format guide", value: "Photo → WebP/AVIF/JPG. Logo/icon → SVG. Screenshot → PNG/WebP." },
  ],
};

// ============================================================================
// HTML CHAPTER 6 — LISTS
// ============================================================================
export const htmlCh06: Chapter = {
  id: "html-ch-06",
  number: 6,
  title: "Lists",
  subtitle: "Three list types, one universal pattern, and the structural backbone of menus, breadcrumbs, and articles.",
  difficulty: "Absolute Beginner",
  estimatedMinutes: 35,
  xpReward: 100,
  prerequisites: ["html-ch-05"],
  partLabel: "Part 1: The Absolute Beginning",
  learningObjectives: [
    "Build unordered, ordered, and description lists with correct semantics.",
    "Nest lists to create hierarchies and outlines.",
    "Use list attributes like start, reversed, and type effectively.",
    "Recognize when content should be a list — even if it doesn't look like one.",
    "Use lists for navigation menus the way professional developers do.",
  ],
  sections: [
    {
      id: "ch06-s1",
      title: "Three Kinds of Lists",
      whyItMatters: "Lists appear everywhere on real websites — navigation menus, search results, breadcrumbs, FAQ pages, recipe ingredients, footer links, social media feeds. If you don't use lists, you're writing worse HTML than you need to.",
      realWorldAnalogy: "Lists are like a shopping list, a recipe, or a glossary at the back of a book. The shopping list has no order (unordered). The recipe steps must be in order (ordered). The glossary defines terms (description). HTML has one element for each.",
      content: `HTML offers three list elements, each for a different purpose:

**Unordered lists** (\`<ul>\`) are for items where the order doesn't matter. Default rendering: bullet points. Use for shopping lists, feature lists, navigation menus.

**Ordered lists** (\`<ol>\`) are for items where order matters. Default rendering: numbers. Use for steps in a recipe, rankings, instructions, search result rankings.

**Description lists** (\`<dl>\`) pair terms with definitions. Use for glossaries, FAQs, metadata key/value pairs, dialog transcripts (speaker → quote).

Both \`<ul>\` and \`<ol>\` contain \`<li>\` (list item) elements. The list item is the universal container — it can hold text, links, images, even other lists. \`<dl>\` is different: it contains alternating \`<dt>\` (definition term) and \`<dd>\` (definition description) elements.

The browser applies default styling: bullets or numbers, indentation, vertical spacing. CSS can change all of it — you can remove bullets entirely, replace numbers with custom counters, lay items out horizontally, and so on. Don't fear the default styling: that's what CSS is for.`,
      codeExamples: [
        {
          id: "ch06-s1-ex1",
          title: "All three list types",
          description: "A side-by-side example of every list HTML offers.",
          code: {
            html: `<h2>Shopping list (unordered)</h2>\n<ul>\n  <li>Milk</li>\n  <li>Eggs</li>\n  <li>Bread</li>\n</ul>\n\n<h2>Steps to make tea (ordered)</h2>\n<ol>\n  <li>Boil water</li>\n  <li>Add tea bag</li>\n  <li>Wait 3 minutes</li>\n  <li>Remove tea bag</li>\n</ol>\n\n<h2>Glossary (description)</h2>\n<dl>\n  <dt>HTML</dt>\n  <dd>The structure language of the web</dd>\n  <dt>CSS</dt>\n  <dd>The presentation language of the web</dd>\n</dl>`,
          },
          explanation: "Notice how the browser uses bullets for ul, numbers for ol, and indented definitions for dl — all without any CSS.",
          tryItPrompt: "Try swapping <ul> with <ol> on the shopping list. The bullets become numbers — but is the order really meaningful? That's why we picked ul originally.",
        },
      ],
      callouts: [
        { type: "common-mistake", title: "Don't put a <p> inside an <li>", content: "Wrap text directly in the list item: `<li>Milk</li>`. Wrapping it in a <p> creates extra spacing and isn't necessary." },
      ],
    },
    {
      id: "ch06-s2",
      title: "Nesting Lists",
      whyItMatters: "Real-world content is hierarchical — a chapter has sections has subsections; a menu has dropdowns; a project has tasks has subtasks. Nested lists model this structure naturally.",
      content: `You can put a list inside a list item. The nested list becomes a sub-list with its own bullets/numbers. There's no limit to nesting depth (other than common sense).

\`\`\`html
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </li>
  <li>Backend
    <ul>
      <li>Node.js</li>
      <li>Databases</li>
    </ul>
  </li>
</ul>
\`\`\`

Browsers automatically use different bullet styles at each nesting level: solid disc → open circle → solid square. Ordered lists keep using numbers, but you can change them with the \`type\` attribute (covered next).

You can mix list types when nesting. An ordered list of steps can contain unordered sub-lists of materials, for example.`,
      codeExamples: [
        {
          id: "ch06-s2-ex1",
          title: "A nested mixed-type list",
          description: "Steps to build a project, where each step has unordered sub-tasks.",
          code: {
            html: `<ol>\n  <li>Plan the project\n    <ul>\n      <li>Define goals</li>\n      <li>List features</li>\n    </ul>\n  </li>\n  <li>Build it\n    <ul>\n      <li>Write HTML</li>\n      <li>Add CSS</li>\n      <li>Add JavaScript</li>\n    </ul>\n  </li>\n  <li>Ship it</li>\n</ol>`,
          },
          explanation: "The outer <ol> numbers the steps (order matters). Each step has an inner <ul> because the sub-tasks within a step can be done in any order.",
          tryItPrompt: "Add a fourth top-level step ('Maintain it') with two sub-tasks of your own.",
        },
      ],
      callouts: [
        { type: "warning", title: "Nest INSIDE the <li>, not between them", content: "A nested list must live inside its parent <li>, not as a sibling. `<ul><li>Item</li><ul>...</ul></ul>` is invalid HTML and renders unpredictably." },
      ],
    },
    {
      id: "ch06-s3",
      title: "List Attributes: start, reversed, type, value",
      whyItMatters: "These attributes are rarely needed but invaluable when they are — for legal documents, sports rankings, multi-page lists, and outlines.",
      content: `Ordered lists support four useful attributes:

**type** changes the numbering style. Values:
- \`type="1"\` (default): 1, 2, 3, ...
- \`type="A"\`: A, B, C, ... (uppercase letters)
- \`type="a"\`: a, b, c, ... (lowercase letters)
- \`type="I"\`: I, II, III, ... (uppercase Roman)
- \`type="i"\`: i, ii, iii, ... (lowercase Roman)

Common in legal documents and outlines: section I.A.2.b kind of structure.

**start** sets the first number. \`<ol start="5">\` starts at 5 instead of 1. Useful when a list continues across pages or after a code example.

**reversed** counts down instead of up. Combined with \`start\`, you can make "Top 10 ___" countdown lists.

**value** on an individual \`<li>\` overrides the number for just that item: \`<li value="100">\` jumps to 100, then the next item is 101.

Unordered lists don't have these attributes — but you can change the bullet style with the CSS property \`list-style-type\`. We'll cover that in the CSS track.`,
      codeExamples: [
        {
          id: "ch06-s3-ex1",
          title: "A countdown of the top 5",
          description: "Reversed ordered list, starting at 5.",
          code: {
            html: `<h2>Top 5 web technologies (countdown)</h2>\n<ol reversed start="5">\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n  <li>HTTP</li>\n  <li>The DOM</li>\n</ol>`,
          },
          explanation: "Numbers count down from 5 to 1 — perfect for 'Top 5' style content.",
          tryItPrompt: "Try changing it to a Top 10 by adding more items and updating start.",
        },
        {
          id: "ch06-s3-ex2",
          title: "An outline with mixed types",
          description: "Legal-document style outline.",
          code: {
            html: `<ol type="I">\n  <li>Introduction\n    <ol type="A">\n      <li>Background</li>\n      <li>Scope</li>\n    </ol>\n  </li>\n  <li>Findings\n    <ol type="A">\n      <li>Result one\n        <ol type="1">\n          <li>Detail</li>\n          <li>Detail</li>\n        </ol>\n      </li>\n    </ol>\n  </li>\n</ol>`,
          },
          explanation: "Top-level Roman numerals, second-level uppercase letters, third-level numbers — exactly like a legal outline.",
          tryItPrompt: "Add a third top-level item ('Conclusion') with two sub-items using the same style.",
        },
      ],
      microExercise: {
        instruction: "Make this 'Top 3 movies' list count down from 3 to 1 instead of up.",
        starterCode: { html: `<ol>\n  <li>The Godfather</li>\n  <li>Pulp Fiction</li>\n  <li>Inception</li>\n</ol>` },
        hint: "There's a single attribute that does this on the <ol>.",
        solution: { html: `<ol reversed>\n  <li>The Godfather</li>\n  <li>Pulp Fiction</li>\n  <li>Inception</li>\n</ol>` },
      },
    },
    {
      id: "ch06-s4",
      title: "Lists Are Navigation Menus",
      whyItMatters: "Every navigation menu on every professional website is built from a `<ul>`. Beginners often make menus from `<div>` tags and miss out on accessibility, structure, and search engine benefits.",
      content: `A navigation menu is a list of places you can go. It's literally a list — and that's how the pros mark it up:

\`\`\`html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
\`\`\`

This pattern is everywhere because it works:

1. **Screen readers announce the count** — "list, four items" — so users know what to expect.
2. **Keyboard users can skip** the list with a single keyboard shortcut.
3. **Search engines understand structure** — they recognize the navigation pattern and use it for sitelinks.
4. **CSS removes the bullets effortlessly** with \`list-style: none\` and lays items horizontally with \`display: flex\`.

The same pattern works for breadcrumbs (use \`<ol>\` because order matters), pagination, footer link columns, social media icon rows, and tag clouds. Whenever you have a *collection of related links*, that's a list.

\`\`\`html
<!-- Breadcrumbs use OL because the path order matters -->
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/blog">Blog</a></li>
    <li>Article title</li>
  </ol>
</nav>
\`\`\`

This is one of the most-used HTML patterns in the entire industry. Burn it into your memory.`,
      codeExamples: [
        {
          id: "ch06-s4-ex1",
          title: "A real-world horizontal nav",
          description: "List + a tiny bit of CSS = a professional navigation bar.",
          code: {
            html: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      nav ul {\n        list-style: none;\n        padding: 0;\n        display: flex;\n        gap: 24px;\n        background: #1a1a1a;\n        padding: 12px 24px;\n        border-radius: 8px;\n      }\n      nav a {\n        color: white;\n        text-decoration: none;\n        font-family: sans-serif;\n      }\n      nav a:hover { color: #6366f1; }\n    </style>\n  </head>\n  <body>\n    <nav>\n      <ul>\n        <li><a href="/">Home</a></li>\n        <li><a href="/about">About</a></li>\n        <li><a href="/services">Services</a></li>\n        <li><a href="/contact">Contact</a></li>\n      </ul>\n    </nav>\n  </body>\n</html>`,
          },
          explanation: "The HTML is a perfectly semantic list. The CSS removes the bullets, lays the items horizontally, and makes them look like a nav bar. Same structure, very different presentation.",
          tryItPrompt: "Add two more nav items and change the gap from 24px to 48px to see the spacing change.",
        },
      ],
      callouts: [
        { type: "pro-tip", title: "Wrap nav in <nav>", content: "The <nav> element tells assistive tech and search engines that this is the site's primary navigation. Always wrap your main menu in it." },
      ],
      deepDive: `**Why semantic markup beats <div> markup.** Imagine two implementations of the same nav:

\`\`\`html
<!-- Bad -->
<div class="nav">
  <div class="nav-item"><a href="/">Home</a></div>
  <div class="nav-item"><a href="/about">About</a></div>
</div>

<!-- Good -->
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
\`\`\`

Both might LOOK identical. But the second:
- Tells screen readers "navigation, list of 2 items"
- Lets keyboard users jump to navigation with a single shortcut
- Gives search engines a strong structural hint
- Has zero extra cost in CSS (you'd add the same styles either way)

The semantic version is strictly better. There is no reason to ever choose the div version. The same logic applies everywhere in HTML: when a semantic element exists for what you're building, use it.`,
    },
  ],
  exercises: [
    {
      id: "html-ch-06-ex1",
      title: "Recipe page",
      difficulty: 1,
      description: "Mark up a recipe with two lists: the ingredients (order doesn't matter) and the instructions (order matters).",
      requirements: ["One <ul> for ingredients", "One <ol> for steps", "At least 4 ingredients and 4 steps", "Each list has a heading"],
      starterCode: { html: `<h1>My Recipe</h1>\n<!-- ingredients and steps -->` },
      hints: ["The ingredients list uses <ul>; the steps use <ol>"],
      solution: {
        html: `<h1>Pancakes</h1>\n\n<h2>Ingredients</h2>\n<ul>\n  <li>200g flour</li>\n  <li>2 eggs</li>\n  <li>300ml milk</li>\n  <li>1 tsp salt</li>\n</ul>\n\n<h2>Instructions</h2>\n<ol>\n  <li>Whisk the eggs and milk together</li>\n  <li>Add flour and salt, whisk until smooth</li>\n  <li>Heat a pan and add butter</li>\n  <li>Pour batter and cook 2 minutes per side</li>\n</ol>`,
      },
      solutionExplanation: "Ingredients have no required order — <ul>. Instructions are sequential — <ol>. Picking the right element is a meaningful semantic choice.",
    },
    {
      id: "html-ch-06-ex2",
      title: "FAQ section with description list",
      difficulty: 2,
      description: "Build a frequently-asked-questions section with three Q&A pairs using a description list.",
      requirements: ["Use <dl> with <dt> for questions and <dd> for answers", "At least 3 question/answer pairs", "Add an <h2> heading 'FAQ'"],
      starterCode: { html: `<h2>FAQ</h2>\n<!-- description list -->` },
      hints: ["<dt> goes around the question, <dd> goes around the answer"],
      solution: {
        html: `<h2>FAQ</h2>\n<dl>\n  <dt>How long does shipping take?</dt>\n  <dd>Most orders arrive in 3-5 business days.</dd>\n\n  <dt>What is your return policy?</dt>\n  <dd>You may return any item within 30 days for a full refund.</dd>\n\n  <dt>Do you ship internationally?</dt>\n  <dd>Yes, we ship to over 60 countries worldwide.</dd>\n</dl>`,
      },
      solutionExplanation: "<dl> is genuinely the right element for FAQs because each entry is a term (the question) paired with a description (the answer). Most websites get this wrong and use <h3>+<p>.",
    },
    {
      id: "html-ch-06-ex3",
      title: "Multi-level navigation menu",
      difficulty: 3,
      description: "Build a navigation menu with two top-level items, where each has a sub-menu of three items.",
      requirements: ["Wrapped in <nav>", "Outer <ul> for top-level items", "Each top-level <li> contains a nested <ul>", "All items are real <a> links"],
      starterCode: { html: `<nav>\n  <!-- nested lists here -->\n</nav>` },
      hints: ["Put the nested <ul> INSIDE the parent <li>, not between siblings"],
      solution: {
        html: `<nav>\n  <ul>\n    <li>\n      <a href="/products">Products</a>\n      <ul>\n        <li><a href="/products/laptops">Laptops</a></li>\n        <li><a href="/products/phones">Phones</a></li>\n        <li><a href="/products/tablets">Tablets</a></li>\n      </ul>\n    </li>\n    <li>\n      <a href="/services">Services</a>\n      <ul>\n        <li><a href="/services/repair">Repair</a></li>\n        <li><a href="/services/setup">Setup</a></li>\n        <li><a href="/services/training">Training</a></li>\n      </ul>\n    </li>\n  </ul>\n</nav>`,
      },
      solutionExplanation: "This is the exact pattern used by virtually every dropdown menu on the web. CSS turns the nested <ul> into a hover dropdown — but the underlying HTML is just a properly-nested list.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "html-ch-06-q1",
        type: "mcq",
        question: "Which list type should you use for the steps in a recipe?",
        options: ["<ul>", "<ol>", "<dl>", "<list>"],
        correctAnswer: 1,
        explanation: "Steps must be done in a specific order, so <ol> (ordered list) is correct. <ul> would work technically but loses the meaning that order matters.",
        difficulty: 1,
      },
      {
        id: "html-ch-06-q2",
        type: "mcq",
        question: "Which element pairs go inside a <dl>?",
        options: ["<li> only", "<dt> and <dd>", "<dt> and <li>", "<term> and <def>"],
        correctAnswer: 1,
        explanation: "<dt> (definition term) and <dd> (definition description) come in alternating pairs inside <dl>.",
        difficulty: 1,
      },
      {
        id: "html-ch-06-q3",
        type: "spot-the-bug",
        question: "What's wrong with this nested list?",
        code: `<ul>\n  <li>Frontend</li>\n  <ul>\n    <li>HTML</li>\n    <li>CSS</li>\n  </ul>\n  <li>Backend</li>\n</ul>`,
        options: [
          "Nothing — it works fine",
          "The nested <ul> must be INSIDE the parent <li>, not between sibling <li>s",
          "You can't nest <ul> elements",
          "Missing closing tag",
        ],
        correctAnswer: 1,
        explanation: "Nested lists must live inside their parent <li>. The valid structure is `<li>Frontend <ul>...</ul></li>`. Browsers will render the broken version unpredictably.",
        difficulty: 3,
      },
      {
        id: "html-ch-06-q4",
        type: "mcq",
        question: "How do you make an ordered list count down (3, 2, 1)?",
        options: [
          "<ol countdown>",
          "<ol reversed>",
          "<ol direction=\"down\">",
          "Use CSS",
        ],
        correctAnswer: 1,
        explanation: "The reversed attribute on <ol> makes it count down. Combine with start to control the first number.",
        difficulty: 2,
      },
      {
        id: "html-ch-06-q5",
        type: "true-false",
        question: "Professional websites usually build navigation menus from <ul> + <li>.",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation: "True. A nav is a list of links — and using <ul> gives you semantics, accessibility, and SEO benefits at zero extra cost.",
        difficulty: 1,
      },
    ],
  },
  cheatSheet: [
    { label: "Unordered list", value: "<ul><li>...</li></ul>" },
    { label: "Ordered list", value: "<ol><li>...</li></ol>" },
    { label: "Description list", value: "<dl><dt>Term</dt><dd>Definition</dd></dl>" },
    { label: "Reversed countdown", value: '<ol reversed start="10">' },
    { label: "Roman numerals", value: '<ol type="I">' },
    { label: "Letters", value: '<ol type="A">' },
    { label: "Nav menu pattern", value: "<nav><ul><li><a href=\"...\">...</a></li></ul></nav>" },
  ],
};
