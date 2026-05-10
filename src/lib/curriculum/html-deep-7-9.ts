import type { Chapter } from "./types";

export const htmlCh07: Chapter = {
  id: "html-ch-07",
  number: 7,
  title: "HTML Document Structure Deep Dive",
  subtitle: "DOCTYPE, html, head, body, meta — every line of the boilerplate explained.",
  difficulty: "Beginner",
  estimatedMinutes: 35,
  xpReward: 100,
  prerequisites: ["html-ch-06"],
  partLabel: "Part 1: HTML Fundamentals",
  learningObjectives: [
    "Explain the purpose of every line in the HTML5 boilerplate.",
    "Write correct meta tags for charset, viewport, and SEO.",
    "Understand how the browser parses an HTML document top-to-bottom.",
    "Add favicons, canonical URLs, and Open Graph tags correctly.",
  ],
  sections: [
    {
      id: "html07-s1",
      title: "The Anatomy of Every HTML File",
      whyItMatters: "You will type this boilerplate thousands of times. If you don't understand it, you'll copy bugs from Stack Overflow forever.",
      realWorldAnalogy: "Think of an HTML document like a formal letter. The DOCTYPE is the envelope marking, <html> is the page itself, <head> is the letterhead with sender info, and <body> is the actual message you read.",
      content: `Here is the canonical modern HTML5 boilerplate. Memorize it.

\`\`\`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
</head>
<body>
  <!-- content goes here -->
</body>
</html>
\`\`\`

Let's break down every single line:

**\`<!DOCTYPE html>\`** — Tells the browser "use modern HTML5 standards mode." Without it, browsers fall back to "quirks mode," which mimics 1990s rendering bugs. It is NOT an HTML tag — it's a document type declaration. Always first, always present, never optional.

**\`<html lang="en">\`** — The root element. Everything lives inside it. The \`lang\` attribute tells screen readers and search engines what language the content is in. Use \`"en"\`, \`"es"\`, \`"fr"\`, \`"de"\`, \`"zh-CN"\`, etc. Skipping this hurts accessibility and SEO.

**\`<head>\`** — Metadata about the page. Nothing inside \`<head>\` is visible on the page itself. Browsers, search engines, and social platforms read this section to understand the page.

**\`<meta charset="UTF-8">\`** — Tells the browser to interpret bytes as UTF-8 (the universal text encoding that supports every language and emoji). Without it, characters like é, ñ, 中, 🚀 will render as garbage. Must appear within the first 1024 bytes of the document — so put it FIRST inside \`<head>\`.

**\`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`** — The mobile rendering instruction. Tells phones "use the actual screen width, don't pretend to be a 980px desktop." Without this, your site will look microscopic on a phone. Mandatory for any site built after 2010.

**\`<title>\`** — The text shown in the browser tab, in bookmarks, and in Google search results. Should be unique per page, descriptive, under 60 characters.

**\`<body>\`** — Everything visible on the page lives here.`,
      callouts: [
        { type: "common-mistake", title: "Putting visible content in <head>", content: "Beginners sometimes write <h1> or <p> inside <head>. Browsers will silently move it into <body> and your styles may break. Visible content goes only in <body>." },
        { type: "pro-tip", title: "Charset must be first", content: "If your <title> contains accented characters and the charset meta comes after it, those characters may render incorrectly. Always: charset → viewport → title → other meta." },
      ],
    },
    {
      id: "html07-s2",
      title: "Essential Meta Tags",
      whyItMatters: "Meta tags control how your page appears in Google, on Twitter, on Facebook, and on iMessage previews. They directly affect click-through rates.",
      content: `Beyond the two mandatory meta tags, here are the meta tags every professional includes:

**SEO description:**
\`\`\`
<meta name="description" content="A 150-character summary of this page that appears in Google search results.">
\`\`\`

This is the snippet under your link in search results. Write it like a mini ad — under 160 chars, with the user's intent in mind.

**Author and keywords (largely obsolete but harmless):**
\`\`\`
<meta name="author" content="Jane Doe">
\`\`\`

(\`keywords\` is ignored by Google since 2009 — skip it.)

**Open Graph (Facebook, LinkedIn, iMessage, Slack previews):**
\`\`\`
<meta property="og:title" content="My Article Title">
<meta property="og:description" content="A compelling description.">
<meta property="og:image" content="https://example.com/preview.jpg">
<meta property="og:url" content="https://example.com/article">
<meta property="og:type" content="website">
\`\`\`

When someone pastes your link into Slack or iMessage, these tags determine the preview card.

**Twitter Card:**
\`\`\`
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="My Article Title">
<meta name="twitter:image" content="https://example.com/preview.jpg">
\`\`\`

**Canonical URL** — tells Google "this is the official URL for this content," preventing duplicate-content penalties:
\`\`\`
<link rel="canonical" href="https://example.com/article">
\`\`\`

**Favicon** — the little icon in browser tabs:
\`\`\`
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
\`\`\``,
      codeExamples: [
        {
          id: "html07-s2-ex1",
          title: "A production-grade <head>",
          description: "What the head of a real shipped website looks like.",
          code: {
            html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>How to Bake Sourdough — Real Bread</title>\n  <meta name="description" content="A simple, foolproof guide to baking sourdough at home with no special equipment. Step-by-step photos.">\n\n  <link rel="canonical" href="https://realbread.com/sourdough">\n  <link rel="icon" type="image/svg+xml" href="/favicon.svg">\n\n  <meta property="og:title" content="How to Bake Sourdough">\n  <meta property="og:description" content="Simple, foolproof guide with photos.">\n  <meta property="og:image" content="https://realbread.com/og.jpg">\n  <meta property="og:type" content="article">\n\n  <meta name="twitter:card" content="summary_large_image">\n</head>\n<body>\n  <h1>How to Bake Sourdough</h1>\n  <p>Welcome to the recipe.</p>\n</body>\n</html>`,
          },
          explanation: "This is roughly what the <head> of a published article looks like. Notice: charset and viewport first, then title, then SEO meta, then OG/Twitter cards.",
          tryItPrompt: "Change the title and description to describe your own page idea. Notice how the browser tab updates instantly.",
        },
      ],
      callouts: [
        { type: "info", title: "Meta tags don't appear on the page", content: "Don't be confused when nothing visually changes after adding meta tags. Their effect appears in the browser tab title, search results, and social previews — not in the page body." },
      ],
    },
    {
      id: "html07-s3",
      title: "How the Browser Parses Your HTML",
      whyItMatters: "Understanding parsing order explains 80% of mysterious 'why is this slow?' or 'why doesn't this work?' bugs.",
      content: `When the browser receives your HTML, it parses it top-to-bottom in a single pass:

1. Encounters \`<!DOCTYPE>\` — switches to standards mode.
2. Encounters \`<html>\` — creates the document root.
3. Encounters \`<head>\` — starts collecting metadata.
4. **Encounters \`<link rel="stylesheet">\`** — pauses parsing, downloads the CSS, blocks rendering until done. (This is "render-blocking CSS.")
5. **Encounters \`<script src="...">\`** without async/defer — pauses parsing, downloads, executes the script, then continues. (This is "parser-blocking JavaScript" — terrible for performance.)
6. Encounters \`</head>\` and \`<body>\` — starts building visible content.
7. Encounters \`<img src="...">\` — fires off the image download in parallel, doesn't wait.
8. Reaches \`</html>\` — fires \`DOMContentLoaded\` event.
9. All images and resources finish — fires \`load\` event.

**Why this matters in practice:**

- Put \`<link rel="stylesheet">\` in \`<head>\` so styles arrive before content (avoids "flash of unstyled content").
- Put \`<script>\` tags at the bottom of \`<body>\` OR use the \`defer\` attribute so they don't block parsing.
- Modern best practice: \`<script defer src="app.js"></script>\` in \`<head>\` — downloads in parallel, executes after parsing finishes.`,
      callouts: [
        { type: "pro-tip", title: "defer vs async", content: "defer = download in parallel, execute in document order after parsing. async = download in parallel, execute as soon as ready (out of order). Use defer for app code, async for analytics/ads." },
      ],
      microExercise: {
        instruction: "Write a complete HTML5 boilerplate with title 'My First Real Page' and a description meta tag.",
        starterCode: { html: "<!-- write the full boilerplate -->" },
        hint: "DOCTYPE, html with lang, head with charset+viewport+title+description, then body.",
        solution: { html: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My First Real Page</title>\n  <meta name="description" content="My first real HTML page.">\n</head>\n<body>\n  <h1>Hello!</h1>\n</body>\n</html>' },
      },
    },
  ],
  exercises: [
    {
      id: "html07-ex1",
      title: "Build a complete page header",
      difficulty: 1,
      description: "Write a full <head> with title, description, charset, viewport, and a favicon link.",
      requirements: ["DOCTYPE present", "lang attribute on <html>", "charset and viewport meta", "title and description"],
      starterCode: { html: "<!-- your code -->" },
      hints: ["DOCTYPE first", "charset before title"],
      solution: { html: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Sample</title>\n  <meta name="description" content="A sample page.">\n  <link rel="icon" href="/favicon.svg">\n</head>\n<body>\n  <h1>Hello</h1>\n</body>\n</html>' },
      solutionExplanation: "Standard production-ready boilerplate.",
    },
    {
      id: "html07-ex2",
      title: "Add Open Graph tags",
      difficulty: 2,
      description: "Add og:title, og:description, og:image, og:url to the existing page.",
      requirements: ["All four og tags present", "Use property attribute (not name)"],
      starterCode: { html: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My Page</title>\n  <!-- add OG tags here -->\n</head>\n<body><h1>Hi</h1></body>\n</html>' },
      hints: ["og:title", "og:image must be a full URL"],
      solution: { html: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My Page</title>\n  <meta property="og:title" content="My Page">\n  <meta property="og:description" content="A page description.">\n  <meta property="og:image" content="https://example.com/og.jpg">\n  <meta property="og:url" content="https://example.com/">\n</head>\n<body><h1>Hi</h1></body>\n</html>' },
      solutionExplanation: "Open Graph tags use property attribute, not name. Image must be absolute URL.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "html07-q1", type: "mcq", question: "What does <!DOCTYPE html> do?", options: ["Creates the HTML element", "Tells the browser to use modern standards mode", "Sets the page title", "Imports CSS"], correctAnswer: 1, explanation: "It declares the document type so browsers use HTML5 standards mode instead of quirks mode.", difficulty: 1 },
      { id: "html07-q2", type: "mcq", question: "Where MUST the <meta charset> tag appear?", options: ["Anywhere in the document", "Inside <body>", "Within the first 1024 bytes of <head>", "After </html>"], correctAnswer: 2, explanation: "Browsers commit to an encoding within the first 1024 bytes — charset must be declared before that.", difficulty: 2 },
      { id: "html07-q3", type: "true-false", question: "The <title> tag is shown on the page.", options: ["True", "False"], correctAnswer: 1, explanation: "False. <title> appears in the browser tab, bookmarks, and search results — not on the page itself.", difficulty: 1 },
      { id: "html07-q4", type: "mcq", question: "Which attribute on <html> declares the page language?", options: ["language", "lang", "locale", "i18n"], correctAnswer: 1, explanation: "The lang attribute (e.g., lang=\"en\") is the standard.", difficulty: 1 },
      { id: "html07-q5", type: "mcq", question: "What does the viewport meta tag do?", options: ["Sets the page width", "Tells mobile browsers to use the actual screen width", "Loads images responsively", "Configures CSS media queries"], correctAnswer: 1, explanation: "It instructs mobile browsers not to scale a desktop layout to fit — they should use the device's real width.", difficulty: 2 },
      { id: "html07-q6", type: "mcq", question: "Which script attribute downloads in parallel and executes after parsing?", options: ["async", "defer", "lazy", "noblock"], correctAnswer: 1, explanation: "defer downloads in parallel and runs after parsing in document order. async runs as soon as ready.", difficulty: 3 },
      { id: "html07-q7", type: "mcq", question: "Open Graph meta tags use which attribute?", options: ["name", "property", "key", "rel"], correctAnswer: 1, explanation: "OG uses property=\"og:title\" etc. Twitter Cards use name.", difficulty: 2 },
      { id: "html07-q8", type: "spot-the-bug", question: "What's wrong here?", code: '<head>\n  <title>Café</title>\n  <meta charset="UTF-8">\n</head>', options: ["Nothing", "charset must come before title for accented characters", "title is misspelled", "Need a closing tag for meta"], correctAnswer: 1, explanation: "If charset comes after content with non-ASCII characters, those characters may render as mojibake. Always charset first.", difficulty: 3 },
    ],
  },
  cheatSheet: [
    { label: "DOCTYPE", value: "<!DOCTYPE html>" },
    { label: "Lang", value: '<html lang="en">' },
    { label: "Charset", value: '<meta charset="UTF-8">' },
    { label: "Viewport", value: '<meta name="viewport" content="width=device-width, initial-scale=1.0">' },
    { label: "Description", value: '<meta name="description" content="...">' },
    { label: "Canonical", value: '<link rel="canonical" href="...">' },
    { label: "OG image", value: '<meta property="og:image" content="...">' },
  ],
};

export const htmlCh08: Chapter = {
  id: "html-ch-08",
  number: 8,
  title: "Tables in HTML",
  subtitle: "Real tabular data — and why tables are NOT for layout.",
  difficulty: "Beginner",
  estimatedMinutes: 30,
  xpReward: 100,
  prerequisites: ["html-ch-07"],
  partLabel: "Part 1: HTML Fundamentals",
  learningObjectives: [
    "Build a semantic HTML table with thead, tbody, tfoot.",
    "Use th, scope, and caption for accessibility.",
    "Span rows and columns with rowspan and colspan.",
    "Recognize when (and when not) to use a table.",
  ],
  sections: [
    {
      id: "html08-s1",
      title: "When to Use a Table",
      whyItMatters: "In the 1990s, before CSS, developers used tables for page layout. This was a disaster — bad for screen readers, bad for mobile, bad for everything. Today: tables are ONLY for tabular data.",
      realWorldAnalogy: "A table is for data that has a natural row-and-column structure: a spreadsheet. Anything you'd open in Excel — schedules, prices, statistics, comparisons — that's a table. Anything else is NOT a table.",
      content: `**Use a table for:**
- Pricing comparison ("Free / Pro / Enterprise" with feature checkmarks)
- Schedules (weekday × time slot)
- Statistical data (rows of records with columns of values)
- Financial reports
- Periodic table of elements (literally a table)

**Do NOT use a table for:**
- Page layout (use Flexbox or Grid)
- Lists of items (use \`<ul>\` or \`<ol>\`)
- Forms (use \`<form>\` with appropriate elements)
- Multi-column text (use CSS columns)

The basic table structure:

\`\`\`
<table>
  <caption>Quarterly Revenue 2024</caption>
  <thead>
    <tr>
      <th scope="col">Quarter</th>
      <th scope="col">Revenue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Q1</th>
      <td>$120,000</td>
    </tr>
    <tr>
      <th scope="row">Q2</th>
      <td>$145,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Total</th>
      <td>$265,000</td>
    </tr>
  </tfoot>
</table>
\`\`\`

Element breakdown:
- \`<table>\` — the table itself
- \`<caption>\` — accessible title (always first child)
- \`<thead>\`, \`<tbody>\`, \`<tfoot>\` — semantic groups
- \`<tr>\` — table row
- \`<th>\` — header cell (bold + center by default)
- \`<td>\` — data cell
- \`scope="col"\` — this header labels its column (for screen readers)
- \`scope="row"\` — this header labels its row`,
      callouts: [
        { type: "warning", title: "Never use tables for layout", content: "Sites built with table layouts in 2024 are a red flag — they break on mobile, fail accessibility audits, and are nearly impossible to maintain. Use CSS Grid or Flexbox instead." },
      ],
    },
    {
      id: "html08-s2",
      title: "Spanning Rows and Columns",
      whyItMatters: "Real data tables often have merged cells — like a header that spans two columns or a category that covers three rows.",
      content: `**colspan** — make a cell span N columns:

\`\`\`
<tr>
  <th colspan="2">Personal Info</th>
  <th>Email</th>
</tr>
<tr>
  <td>First</td>
  <td>Last</td>
  <td>email@example.com</td>
</tr>
\`\`\`

The first \`<th>\` covers two columns. The second row has three cells in three columns.

**rowspan** — make a cell span N rows:

\`\`\`
<tr>
  <th rowspan="2">2024</th>
  <td>Q1</td>
  <td>$120k</td>
</tr>
<tr>
  <td>Q2</td>
  <td>$145k</td>
</tr>
\`\`\`

The "2024" cell covers both rows. The second row only needs two cells.

**The rule:** when you span, omit the cells that would be replaced. Each row should still have the right total cell count when you account for spanning cells from previous rows.`,
      codeExamples: [
        {
          id: "html08-s2-ex1",
          title: "A real comparison table",
          description: "Pricing table with three plans and merged headers.",
          code: {
            html: `<table border="1" cellpadding="8">\n  <caption>Plan Comparison</caption>\n  <thead>\n    <tr>\n      <th scope="col">Feature</th>\n      <th scope="col">Free</th>\n      <th scope="col">Pro</th>\n      <th scope="col">Enterprise</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope="row">Users</th>\n      <td>1</td>\n      <td>10</td>\n      <td>Unlimited</td>\n    </tr>\n    <tr>\n      <th scope="row">Storage</th>\n      <td>1 GB</td>\n      <td>100 GB</td>\n      <td>1 TB</td>\n    </tr>\n    <tr>\n      <th scope="row">Support</th>\n      <td>Community</td>\n      <td>Email</td>\n      <td>Phone + SLA</td>\n    </tr>\n  </tbody>\n</table>`,
          },
          explanation: "Caption, thead with column headers, tbody with row headers (scope=row) and data cells. Border attribute is for demo only — use CSS borders in real projects.",
          tryItPrompt: "Add a fourth row showing 'Price' with $0, $9, and 'Custom'. Then add a tfoot with a 'Total cost / month' summary.",
        },
      ],
      microExercise: {
        instruction: "Build a 2-column table showing three programming languages and their year of creation. Use thead and a caption.",
        starterCode: { html: "<!-- your table -->" },
        hint: "table > caption + thead > tr > th + tbody > tr > td",
        solution: { html: '<table border="1">\n  <caption>Programming Languages</caption>\n  <thead>\n    <tr><th scope="col">Language</th><th scope="col">Year</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>JavaScript</td><td>1995</td></tr>\n    <tr><td>Python</td><td>1991</td></tr>\n    <tr><td>Rust</td><td>2010</td></tr>\n  </tbody>\n</table>' },
      },
    },
  ],
  exercises: [
    {
      id: "html08-ex1",
      title: "Build a schedule table",
      difficulty: 2,
      description: "Create a weekly schedule with days as columns, time slots as rows.",
      requirements: ["thead with day names", "tbody with at least 3 time slot rows", "Use scope on headers"],
      starterCode: { html: "<!-- your table -->" },
      hints: ["Mon-Fri across the top", "9am, 10am, 11am as rows"],
      solution: { html: '<table border="1">\n  <caption>Weekly Schedule</caption>\n  <thead><tr><th></th><th scope="col">Mon</th><th scope="col">Tue</th><th scope="col">Wed</th></tr></thead>\n  <tbody>\n    <tr><th scope="row">9am</th><td>Math</td><td>Free</td><td>Math</td></tr>\n    <tr><th scope="row">10am</th><td>English</td><td>Math</td><td>Free</td></tr>\n    <tr><th scope="row">11am</th><td>Free</td><td>English</td><td>English</td></tr>\n  </tbody>\n</table>' },
      solutionExplanation: "Standard schedule pattern with row headers (time) and column headers (day).",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "html08-q1", type: "mcq", question: "When should you use a <table>?", options: ["For page layout", "For tabular data only", "For lists", "For forms"], correctAnswer: 1, explanation: "Tables are for data with natural row/column structure — never for layout.", difficulty: 1 },
      { id: "html08-q2", type: "mcq", question: "Which element provides an accessible title for a table?", options: ["<title>", "<caption>", "<header>", "<th>"], correctAnswer: 1, explanation: "<caption> appears as the first child of <table> and announces the table's purpose to screen readers.", difficulty: 2 },
      { id: "html08-q3", type: "fill-blank", question: "To make a cell span 3 columns, use the attribute ____=\"3\".", correctAnswer: "colspan", explanation: "colspan merges columns; rowspan merges rows.", difficulty: 2 },
      { id: "html08-q4", type: "mcq", question: "What does scope=\"row\" mean on a <th>?", options: ["The header is in a row", "The header labels its row", "The header spans the row", "The header is row-shaped"], correctAnswer: 1, explanation: "scope=row tells assistive tech that this header is the label for the rest of cells in its row.", difficulty: 3 },
      { id: "html08-q5", type: "true-false", question: "<thead>, <tbody>, and <tfoot> are required.", options: ["True", "False"], correctAnswer: 1, explanation: "False — they are optional but recommended for semantics and styling.", difficulty: 1 },
      { id: "html08-q6", type: "mcq", question: "Difference between <th> and <td>?", options: ["No difference", "<th> is a header cell, <td> is a data cell", "<th> is for text, <td> is for numbers", "<th> is deprecated"], correctAnswer: 1, explanation: "<th> = header cell (bold + center, announced as header to screen readers). <td> = regular data cell.", difficulty: 1 },
    ],
  },
  cheatSheet: [
    { label: "Table", value: "<table>...</table>" },
    { label: "Caption", value: "<caption>Title</caption>" },
    { label: "Header group", value: "<thead><tr>...</tr></thead>" },
    { label: "Body", value: "<tbody>...</tbody>" },
    { label: "Header cell", value: '<th scope="col">' },
    { label: "Data cell", value: "<td>" },
    { label: "Span", value: 'colspan="2" rowspan="3"' },
  ],
};

export const htmlCh09: Chapter = {
  id: "html-ch-09",
  number: 9,
  title: "Forms — Part 1: The Fundamentals",
  subtitle: "How users send data to your website.",
  difficulty: "Intermediate",
  estimatedMinutes: 40,
  xpReward: 120,
  prerequisites: ["html-ch-08"],
  partLabel: "Part 1: HTML Fundamentals",
  learningObjectives: [
    "Build a complete <form> with text, email, password, and submit inputs.",
    "Use <label> correctly for accessibility.",
    "Understand the difference between GET and POST methods.",
    "Apply native HTML5 validation (required, pattern, type).",
  ],
  sections: [
    {
      id: "html09-s1",
      title: "Why Forms Matter",
      whyItMatters: "Every login, signup, search, comment, checkout, and contact page is a form. Forms are the primary way users send data into the internet.",
      realWorldAnalogy: "A form is like a paper questionnaire. The labels are the questions, the inputs are the blank lines, and the submit button is the box you drop the completed paper into.",
      content: `A minimal form:

\`\`\`
<form action="/submit" method="POST">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <label for="pw">Password:</label>
  <input type="password" id="pw" name="password" required>

  <button type="submit">Sign In</button>
</form>
\`\`\`

Key concepts:

**\`<form>\` element** — wraps the entire form. Two important attributes:
- \`action\` — the URL to send the data to. If omitted, sends to the current page.
- \`method\` — \`GET\` (data appended to URL as ?key=value, used for searches) or \`POST\` (data sent in request body, used for everything else).

**\`<label>\`** — the human-readable question text. Use \`for="inputId"\` matching the input's \`id\`. Without proper labels, screen readers can't tell users what to type.

**\`<input>\`** — the blank to fill. Critical attributes:
- \`type\` — controls keyboard, validation, and appearance (text, email, password, number, date, tel, url, etc.)
- \`name\` — the key the value is sent under. Without \`name\`, the input is NOT submitted.
- \`id\` — links to the label
- \`required\` — must be filled before submit
- \`placeholder\` — gray hint text inside the input (NOT a replacement for label)

**\`<button type="submit">\`** — submits the form. Inside a \`<form>\`, the default button type IS submit, but always be explicit.`,
      callouts: [
        { type: "common-mistake", title: "Placeholder is not a label", content: "<input placeholder='Email'> with no <label> is an accessibility failure. Placeholders disappear when the user starts typing — they cannot replace labels. Always use both." },
        { type: "warning", title: "Forgetting name", content: "If <input> has no name attribute, its value is NOT included when the form submits. This is the #1 reason 'why isn't my form data arriving on the server?'" },
      ],
    },
    {
      id: "html09-s2",
      title: "Input Types — The Right Type for the Job",
      whyItMatters: "Choosing type='email' instead of type='text' gives you free validation, the right mobile keyboard, and better UX for zero effort.",
      content: `Modern HTML5 input types:

\`\`\`
<input type="text">       <!-- generic text -->
<input type="email">      <!-- validates email format, mobile @ keyboard -->
<input type="password">   <!-- masks input -->
<input type="number">     <!-- numeric only, can have min/max/step -->
<input type="tel">        <!-- mobile numeric keyboard -->
<input type="url">        <!-- validates URL format -->
<input type="date">       <!-- date picker -->
<input type="time">       <!-- time picker -->
<input type="datetime-local"> <!-- date + time -->
<input type="color">      <!-- color picker -->
<input type="range">      <!-- slider -->
<input type="file">       <!-- file upload -->
<input type="search">     <!-- search box with X to clear -->
<input type="checkbox">   <!-- multi-select -->
<input type="radio">      <!-- single-select group -->
<input type="hidden">     <!-- not visible, sent with form -->
\`\`\`

**Other form elements:**

\`\`\`
<textarea name="bio" rows="5"></textarea>
<select name="country">
  <option value="us">United States</option>
  <option value="ca">Canada</option>
</select>
\`\`\`

**Native validation attributes:**

- \`required\` — must have value
- \`minlength="8"\` / \`maxlength="50"\` — length bounds
- \`min="0"\` / \`max="100"\` / \`step="5"\` — for number/range/date
- \`pattern="[A-Z]{3}-[0-9]{4}"\` — regex pattern
- \`type="email"\` automatically validates email format

When the user submits and validation fails, the browser shows a native error tooltip and prevents submission. No JavaScript needed.`,
      codeExamples: [
        {
          id: "html09-s2-ex1",
          title: "A real signup form",
          description: "All the right input types and labels.",
          code: {
            html: `<form action="/signup" method="POST">\n  <p>\n    <label for="name">Full name</label><br>\n    <input type="text" id="name" name="name" required minlength="2">\n  </p>\n\n  <p>\n    <label for="email">Email</label><br>\n    <input type="email" id="email" name="email" required>\n  </p>\n\n  <p>\n    <label for="age">Age</label><br>\n    <input type="number" id="age" name="age" min="13" max="120">\n  </p>\n\n  <p>\n    <label for="pw">Password (min 8 chars)</label><br>\n    <input type="password" id="pw" name="password" required minlength="8">\n  </p>\n\n  <p>\n    <label for="country">Country</label><br>\n    <select id="country" name="country">\n      <option value="">Select...</option>\n      <option value="us">United States</option>\n      <option value="ca">Canada</option>\n      <option value="uk">United Kingdom</option>\n    </select>\n  </p>\n\n  <p>\n    <label><input type="checkbox" name="terms" required> I agree to the terms</label>\n  </p>\n\n  <button type="submit">Create account</button>\n</form>`,
          },
          explanation: "Every input has a label. Email type validates format. Number has min/max. Password requires 8+ chars. Submit triggers all validation automatically.",
          tryItPrompt: "Try submitting with empty fields. Then try with an invalid email. Notice the native browser tooltips.",
        },
      ],
      callouts: [
        { type: "pro-tip", title: "Wrap checkbox in label", content: "<label><input type='checkbox'> Text</label> makes the entire 'Text' clickable to toggle the checkbox. Better UX for free." },
        { type: "tip", title: "GET vs POST", content: "Use GET for searches and filters (data is in the URL, can be bookmarked). Use POST for anything that creates, modifies, or deletes data — and always for passwords." },
      ],
      microExercise: {
        instruction: "Build a contact form with name (text, required), email (email, required), and message (textarea, required) inputs, plus a submit button.",
        starterCode: { html: "<!-- your form -->" },
        hint: "form > 3x (label + input/textarea) + button. Don't forget for/id pairs.",
        solution: { html: '<form>\n  <label for="n">Name</label><br>\n  <input type="text" id="n" name="name" required><br>\n  <label for="e">Email</label><br>\n  <input type="email" id="e" name="email" required><br>\n  <label for="m">Message</label><br>\n  <textarea id="m" name="message" required></textarea><br>\n  <button type="submit">Send</button>\n</form>' },
      },
    },
  ],
  exercises: [
    {
      id: "html09-ex1",
      title: "Login form",
      difficulty: 1,
      description: "Build a login form with email, password, 'remember me' checkbox, and submit.",
      requirements: ["Both inputs have labels with for/id", "Password has type=password", "Email has type=email", "Both required"],
      starterCode: { html: "<form><!-- your code --></form>" },
      hints: ["Use type='email' for email", "Wrap checkbox in label"],
      solution: { html: '<form action="/login" method="POST">\n  <label for="e">Email</label>\n  <input type="email" id="e" name="email" required>\n\n  <label for="p">Password</label>\n  <input type="password" id="p" name="password" required>\n\n  <label><input type="checkbox" name="remember"> Remember me</label>\n\n  <button type="submit">Log in</button>\n</form>' },
      solutionExplanation: "Standard login form with proper types and labels.",
    },
    {
      id: "html09-ex2",
      title: "Registration with validation",
      difficulty: 3,
      description: "Build a signup form. Username must be 3-20 chars, password at least 8 chars and contain a digit (use pattern).",
      requirements: ["minlength/maxlength on username", "minlength + pattern on password", "Email field with type=email"],
      starterCode: { html: "<form><!-- your code --></form>" },
      hints: ["pattern uses regex: (?=.*\\\\d).{8,}", "minlength='8'"],
      solution: { html: '<form>\n  <label for="u">Username</label>\n  <input type="text" id="u" name="username" required minlength="3" maxlength="20">\n\n  <label for="e">Email</label>\n  <input type="email" id="e" name="email" required>\n\n  <label for="p">Password (8+ chars, must contain a digit)</label>\n  <input type="password" id="p" name="password" required minlength="8" pattern="(?=.*\\d).{8,}" title="At least 8 characters with one number">\n\n  <button type="submit">Sign up</button>\n</form>' },
      solutionExplanation: "Native HTML5 validation handles all the rules with no JavaScript. The title attribute provides the error message.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "html09-q1", type: "mcq", question: "Which attribute on <input> is REQUIRED for the value to be submitted?", options: ["id", "name", "type", "value"], correctAnswer: 1, explanation: "Without name, the input's value is excluded from form submission.", difficulty: 2 },
      { id: "html09-q2", type: "mcq", question: "What links a <label> to its <input>?", options: ["The label is inside the input", "for attribute on label matches id on input", "name attribute matches", "They must be siblings"], correctAnswer: 1, explanation: "<label for='emailField'> matches <input id='emailField'>.", difficulty: 2 },
      { id: "html09-q3", type: "true-false", question: "Placeholder text can replace a <label>.", options: ["True", "False"], correctAnswer: 1, explanation: "False. Placeholders disappear when typing and are inaccessible. Always use a real label.", difficulty: 1 },
      { id: "html09-q4", type: "mcq", question: "When should you use method='GET'?", options: ["Logins", "Searches and filters", "File uploads", "Deleting data"], correctAnswer: 1, explanation: "GET puts data in the URL — perfect for searches that should be shareable/bookmarkable.", difficulty: 2 },
      { id: "html09-q5", type: "mcq", question: "Which type provides a native date picker?", options: ["type='datepicker'", "type='date'", "type='calendar'", "type='dt'"], correctAnswer: 1, explanation: "type='date' triggers the browser's native date picker UI.", difficulty: 1 },
      { id: "html09-q6", type: "mcq", question: "What does the 'required' attribute do?", options: ["Makes the input bold", "Prevents form submission until filled", "Saves the value", "Highlights the input"], correctAnswer: 1, explanation: "Browsers block submission and show a native tooltip when a required field is empty.", difficulty: 1 },
      { id: "html09-q7", type: "spot-the-bug", question: "Why doesn't this form submit the email?", code: '<form>\n  <input type="email" id="email" required>\n  <button type="submit">Go</button>\n</form>', options: ["Wrong type", "Missing name attribute", "No label", "No method on form"], correctAnswer: 1, explanation: "Without name='email', the value is not included in the submission. This is the most common form bug.", difficulty: 3 },
    ],
  },
  cheatSheet: [
    { label: "Form", value: '<form action="/x" method="POST">' },
    { label: "Label", value: '<label for="id">' },
    { label: "Text input", value: '<input type="text" name="x" id="id">' },
    { label: "Email", value: '<input type="email" required>' },
    { label: "Password", value: '<input type="password" minlength="8">' },
    { label: "Select", value: "<select><option>...</option></select>" },
    { label: "Submit", value: '<button type="submit">' },
  ],
};
