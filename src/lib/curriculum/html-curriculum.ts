import type { Chapter, Quiz, Exercise } from "./types";
import { htmlCh04, htmlCh05, htmlCh06 } from "./html-deep-4-6";
import { htmlCh07, htmlCh08, htmlCh09 } from "./html-deep-7-9";
import { htmlCh10, htmlCh11, htmlCh12 } from "./html-deep-10-12";
import { htmlCh13, htmlCh14 } from "./html-deep-13-14";
import { htmlCh15 } from "./html-deep-15";

// ============================================================================
// HELPERS for stub chapters
// ============================================================================
const stubQuiz = (chapterId: string, topic: string): Quiz => ({
  passingScore: 80,
  questions: [
    {
      id: `${chapterId}-q1`,
      type: "mcq",
      question: `Which statement best describes ${topic}?`,
      options: [
        `${topic} is a core HTML concept used in modern web development.`,
        `${topic} is only used in CSS, never in HTML.`,
        `${topic} is a deprecated feature removed in HTML5.`,
        `${topic} is a JavaScript-only feature.`,
      ],
      correctAnswer: 0,
      explanation: `${topic} is part of the HTML specification and is widely used. The other options are incorrect.`,
      difficulty: 1,
    },
    {
      id: `${chapterId}-q2`,
      type: "true-false",
      question: `${topic} is a topic worth learning thoroughly.`,
      options: ["True", "False"],
      correctAnswer: 0,
      explanation: "Every topic in this curriculum was selected because it matters for real-world web development.",
      difficulty: 1,
    },
    {
      id: `${chapterId}-q3`,
      type: "mcq",
      question: `What is the best resource to deepen your knowledge on ${topic}?`,
      options: ["MDN Web Docs", "Random forums only", "Avoid documentation", "Only YouTube videos"],
      correctAnswer: 0,
      explanation: "MDN Web Docs is the gold standard reference for web technologies.",
      difficulty: 1,
    },
  ],
});

const stubExercises = (chapterId: string): Exercise[] => [
  {
    id: `${chapterId}-ex1`,
    title: "Practice the chapter concepts",
    difficulty: 1,
    description: "Apply what you learned in this chapter by building a small example.",
    requirements: ["Use the main concept introduced", "Make it valid HTML", "Test it in the compiler"],
    starterCode: { html: "<!DOCTYPE html>\n<html>\n  <body>\n    <!-- write your code here -->\n  </body>\n</html>" },
    hints: ["Re-read the chapter sections.", "Try a minimal example first.", "Inspect with DevTools."],
    solution: { html: "<!DOCTYPE html>\n<html>\n  <body>\n    <p>Your solution here</p>\n  </body>\n</html>" },
    solutionExplanation: "A minimal valid HTML document that demonstrates the chapter's concept.",
  },
];

const makeStub = (
  number: number,
  title: string,
  subtitle: string,
  difficulty: Chapter["difficulty"],
  partLabel: string,
  prevId?: string,
): Chapter => {
  const id = `html-ch-${String(number).padStart(2, "0")}`;
  return {
    id,
    number,
    title,
    subtitle,
    difficulty,
    estimatedMinutes: 25,
    xpReward: 100,
    prerequisites: prevId ? [prevId] : [],
    learningObjectives: [
      `Understand the core ideas behind ${title}.`,
      `Apply ${title} in practical examples.`,
      `Recognize common mistakes and how to fix them.`,
    ],
    partLabel,
    sections: [
      {
        id: `${id}-s1`,
        title: `Introduction to ${title}`,
        whyItMatters: `${title} is a foundational topic that you will encounter constantly when building websites. Mastering it now will save you hours of debugging later.`,
        content: `This chapter is part of the structured learning path. Detailed lesson content is being expanded chapter by chapter — the platform, compiler, and quiz system are fully functional. Use the in-page mini compiler below to experiment freely with ${title.toLowerCase()}.\n\nFor in-depth coverage right now, refer to MDN Web Docs while we expand this chapter's written content. The structure, exercises, and quiz are already in place so your learning path is unblocked.`,
        codeExamples: [
          {
            id: `${id}-ex1`,
            title: `${title} — quick example`,
            description: `A minimal example demonstrating ${title}.`,
            code: { html: `<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <title>${title}</title>\n  </head>\n  <body>\n    <h1>Learning ${title}</h1>\n    <p>Edit this code and click Run!</p>\n  </body>\n</html>` },
            explanation: `A standard HTML5 document. The <h1> creates a top-level heading; the <p> creates a paragraph.`,
            tryItPrompt: `Try changing the <h1> text and adding more paragraphs.`,
          },
        ],
      },
    ],
    exercises: stubExercises(id),
    quiz: stubQuiz(id, title),
    cheatSheet: [{ label: "Topic", value: title }],
  };
};

// ============================================================================
// DEEP CHAPTER 1
// ============================================================================
const ch01: Chapter = {
  id: "html-ch-01",
  number: 1,
  title: "What Even Is a Website?",
  subtitle: "Your zero-knowledge introduction to the web — no jargon, no assumptions.",
  difficulty: "Absolute Beginner",
  estimatedMinutes: 35,
  xpReward: 100,
  prerequisites: [],
  partLabel: "Part 1: The Absolute Beginning",
  learningObjectives: [
    "Explain what HTML is and why it exists, in your own words.",
    "Describe the relationship between HTML, CSS, and JavaScript using a real-world analogy.",
    "Understand what a browser actually does when you visit a website.",
    "Identify the rendering engines behind major browsers.",
    "Open your browser's Developer Tools and recognize what you see.",
  ],
  sections: [
    {
      id: "ch01-s1",
      title: "The House Analogy: HTML, CSS, and JavaScript",
      whyItMatters: "Before you write a single line of code, you need a mental model. Beginners who skip this step constantly mix up the three languages and get confused about which one to use for what. This single analogy will save you weeks of confusion.",
      realWorldAnalogy: "A website is exactly like a house. Three different teams build it: framers build the structure, decorators paint and furnish, and electricians install everything that moves or lights up.",
      content: `Imagine you walk into a brand new house. The first thing you notice is the structure — the walls, the doorways, the rooms, the staircase. Without that structure, there is no house at all, just an empty lot. **HTML is the structure of a website.** It defines what's on the page: a heading here, a paragraph there, an image, a list, a button. Strip away everything else and HTML is the bare skeleton — ugly, plain, but functional.

Now imagine the house gets painted. Curtains go up, the floors are stained, art hangs on the walls, the lights are warm instead of fluorescent. The house is suddenly *beautiful*. **CSS is the paint and decoration.** It controls how the HTML looks: colors, fonts, spacing, layout, animations, shadows. CSS doesn't add new content — every paragraph that CSS styles already existed in the HTML. CSS just makes it presentable.

Finally, the electrician arrives. Now the lights actually turn on when you flip a switch. The garage door opens when you press a button. The doorbell rings when someone's at the door. **JavaScript is the electricity and plumbing.** It makes things *happen*. When you click a button and a menu slides open, that's JavaScript. When you type into a search bar and suggestions appear, that's JavaScript. When a page updates without reloading, that's JavaScript.

Here's the rule that will guide you for your entire career: **HTML is structure, CSS is presentation, JavaScript is behavior.** When you're confused about where some piece of code should go, ask yourself: am I adding content (HTML), making it look different (CSS), or making it do something (JavaScript)?

You can have a website with only HTML — it will be plain and ugly but it will work. You can have HTML + CSS — it will be a beautiful, static brochure. Add JavaScript and now it's a real, interactive application like Gmail or Twitter or Figma.`,
      callouts: [
        { type: "analogy", title: "Pin this in your memory", content: "HTML = walls. CSS = paint. JavaScript = electricity. Every time you write code, ask yourself which one of these you're working with." },
        { type: "tip", title: "Order matters", content: "Always learn HTML first, then CSS, then JavaScript. Each one builds on the previous. Trying to learn JavaScript before HTML is like trying to wire a house before the walls are built." },
      ],
    },
    {
      id: "ch01-s2",
      title: "What Actually Happens When You Visit a Website",
      whyItMatters: "Every web developer needs to understand the request-response cycle. If you don't know what happens between typing a URL and seeing a page, you'll be helpless when something breaks.",
      realWorldAnalogy: "Visiting a website is like ordering takeout. You (the browser) call a restaurant (the server) and ask for a specific dish (a webpage). The kitchen prepares it and delivers it to your door, where you assemble and consume it.",
      content: `Let's trace what happens the instant you type \`google.com\` into your browser and press Enter. There are about seven steps, and they all happen in under a second.

**Step 1 — DNS lookup.** Your browser doesn't know where "google.com" lives. Computers communicate with numerical addresses called IP addresses (like 142.250.80.46). The browser asks a special directory service called DNS (Domain Name System) to translate the human-friendly name into a numerical address. Think of DNS as the internet's phonebook.

**Step 2 — TCP connection.** Once your browser has the IP address, it opens a connection to that server. This is like dialing a phone number — both sides have to agree they're talking to each other before any actual conversation happens. Modern connections are also encrypted using TLS, which is the "S" in HTTPS.

**Step 3 — HTTP request.** Your browser sends a request that essentially says "please send me the homepage." This message is written in a protocol called HTTP (HyperText Transfer Protocol). It's just text that follows specific rules.

**Step 4 — Server response.** Google's server reads your request, decides what to send back, and replies with an HTML document. The first thing the server sends is *just the HTML* — not the images, not the styles, not the scripts. Just the text skeleton.

**Step 5 — Parsing HTML.** Your browser reads the HTML top to bottom and builds an internal model of the page called the **DOM** (Document Object Model). The DOM is a tree structure where each HTML tag becomes a node. We will explore the DOM in detail in the JavaScript track — for now, just know that the DOM is the browser's understanding of your page.

**Step 6 — Loading additional resources.** As the browser reads the HTML, it discovers references to other files: CSS stylesheets, JavaScript files, images, fonts. For each one, it sends another request and waits for the response. Modern browsers do these in parallel — sometimes 6+ requests at once.

**Step 7 — Render.** Once the browser has the HTML and CSS, it calculates where every element goes (this is called *layout*) and paints pixels to the screen. Then it runs any JavaScript, which can change the page in response. You finally see Google's homepage.

This entire process — DNS, connection, request, response, parsing, loading, rendering — typically takes 500–2000 milliseconds. The slower the network or the larger the page, the longer it takes. As a developer, much of your job is keeping that number small.`,
      codeExamples: [
        {
          id: "ch01-s2-ex1",
          title: "A complete (very tiny) website",
          description: "Here is the smallest possible real website. Don't worry about understanding every line yet — just observe that there are three sections: structure (HTML), styling, and a tiny script.",
          code: {
            html: `<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <title>My First Site</title>\n  </head>\n  <body>\n    <h1 id="greeting">Hello, world!</h1>\n    <button onclick="document.getElementById('greeting').textContent='You clicked me!'">\n      Click me\n    </button>\n  </body>\n</html>`,
          },
          explanation: "The <h1> is HTML structure. Right now there's no separate CSS, but the browser applies its own default styling to make it look like a heading. The button has an onclick attribute — that small piece of JavaScript runs when the user clicks, and it changes the heading's text. All three languages working together in 12 lines.",
          tryItPrompt: "Click 'Run' to see the page. Then click the button. Then change the words 'Hello, world!' to your own greeting and run it again.",
        },
      ],
      callouts: [
        { type: "info", title: "What is a server?", content: "A server is just a computer that's always on, connected to the internet, and configured to respond to requests. There's nothing magical about it — your laptop could be a server too, if you wanted." },
        { type: "pro-tip", title: "Try it yourself", content: "Open Chrome → press F12 → click the Network tab → reload any page. You'll see every single file the browser downloaded, in order. This is one of the most useful debugging tools you'll ever learn." },
      ],
    },
    {
      id: "ch01-s3",
      title: "A Brief History of HTML (and Why It Matters to You)",
      whyItMatters: "Knowing where HTML came from helps you understand why it has its quirks. Many odd HTML behaviors make perfect sense when you know the historical context.",
      content: `In 1989, a British computer scientist named Tim Berners-Lee was working at CERN, the famous physics laboratory in Switzerland. Researchers there had a problem: they were drowning in scientific documents and had no easy way to share them across different computer systems. Tim proposed a solution — a system where any document could *link* to any other document, forming a "web" of information. He called it the World Wide Web.

To make it work, he invented three things in 1990–1991: HTML (a language for writing the documents), HTTP (a protocol for transferring them), and the very first web browser. The first version of HTML had only 18 tags. That's it. The whole language fit on a single page.

Over the next decade, HTML exploded in popularity, and Microsoft and Netscape fought a brutal "browser war" — each one inventing their own non-standard tags to lock in users. This is why early HTML was such a mess: the same code might render completely differently in different browsers.

In response, the W3C (World Wide Web Consortium) and later the WHATWG (Web Hypertext Application Technology Working Group) stepped in to standardize the language. HTML 4 came out in 1997. Then a strict variant called XHTML in 2000, which most developers eventually rejected because it was too rigid.

In 2014, after years of work, **HTML5** was released — and that's still the version we use today. HTML5 is what made the modern interactive web possible: built-in audio and video, semantic tags like \`<header>\` and \`<nav>\`, the \`<canvas>\` element for graphics, support for offline apps, and so much more. Almost every "old" tutorial you find online is talking about HTML5 — they just call it HTML now because there's no other modern version.

Why does this history matter? Because HTML carries decades of backwards compatibility. There are tags you'll see in old codebases (like \`<center>\` or \`<font>\`) that haven't been recommended for 20 years but still work because the browsers refuse to break old websites. When you see weird advice online, check the date — anything pre-2014 is probably outdated.`,
      callouts: [
        { type: "info", title: "Living standard", content: "HTML doesn't have version numbers anymore. The official spec is now a 'living standard' that's continuously updated. New features are added every year. We just call it 'HTML' — never 'HTML6'." },
      ],
    },
    {
      id: "ch01-s4",
      title: "Browsers and Rendering Engines",
      whyItMatters: "All browsers are not created equal. Knowing which engine powers which browser will help you understand cross-browser bugs later.",
      content: `A "browser" is the program you use to view websites: Chrome, Firefox, Safari, Edge, Brave, Opera, and many others. But under the hood, most browsers are built on one of three rendering engines:

**Blink** — Created by Google in 2013 (forked from Apple's WebKit). Powers Chrome, Edge, Opera, Brave, Vivaldi, and Samsung Internet. Because so many browsers use Blink, when developers say "it works in Chrome" they often mean "it works in Blink." Blink-based browsers control roughly 75% of the market.

**WebKit** — Created by Apple, powers Safari on macOS and iOS. On iPhones and iPads, *every* browser is forced to use WebKit by Apple's rules — even Chrome on iOS is secretly WebKit underneath. This is why iOS Safari sometimes behaves oddly compared to desktop Chrome.

**Gecko** — Created by Mozilla, powers Firefox. Gecko is the only major engine not derived from WebKit. Firefox is important even with smaller market share because it keeps the web from becoming a Chrome monoculture.

Each engine reads HTML, CSS, and JavaScript and turns them into pixels. They mostly behave the same, but small differences exist — a CSS feature might work in Chrome but not Safari, or behave slightly differently. Professional developers always test their websites in at least Chrome, Firefox, and Safari before launching.

Every browser also includes **Developer Tools** (DevTools), a built-in suite for inspecting and debugging websites. You open them by pressing **F12** on Windows/Linux or **Cmd + Option + I** on Mac. The most useful tabs:

- **Elements** — See the live HTML and CSS of the current page. You can edit it on the fly.
- **Console** — A JavaScript REPL. You can run any JavaScript here on the current page.
- **Network** — Every file the browser downloaded, with timing and size info.
- **Sources** — Browse and debug JavaScript files with breakpoints.
- **Application** — Inspect cookies, localStorage, and other browser storage.

You will live in DevTools for the rest of your career. Get comfortable with them now.`,
      callouts: [
        { type: "pro-tip", title: "DevTools right now", content: "Stop reading. Press F12 (or Cmd+Option+I on Mac). Click the Elements tab. Click any element on this page. See how the HTML lights up? That's the entire structure of this page laid bare." },
        { type: "warning", title: "iOS quirks", content: "If you ever build a site that 'works everywhere except iPhone,' the cause is almost always a WebKit-specific bug. Always test on a real iPhone if you can." },
      ],
    },
    {
      id: "ch01-s5",
      title: "Setting Up Your Tools",
      whyItMatters: "You can't build a house without tools. The right setup will make you 10x more productive — the wrong setup will make you quit before chapter 5.",
      content: `You need exactly **two pieces of software** to start writing websites: a code editor and a web browser. You almost certainly already have a browser, so let's focus on the editor.

**Why not just use Microsoft Word or Google Docs?** Word processors are designed for writing documents — they add invisible formatting characters that break code. Code needs to be plain text with absolutely nothing extra. A code editor is a text editor specifically built for programmers, with features like syntax highlighting (color-coding), auto-complete, and error detection.

**The recommended editor is Visual Studio Code (VS Code).** It's free, made by Microsoft, available on Windows/Mac/Linux, and used by the majority of professional developers. Download it from \`code.visualstudio.com\`. The installer is straightforward — accept all defaults.

Once installed, here are the **two extensions** every beginner should add immediately. Click the squares-icon in the left sidebar of VS Code (the Extensions panel) and search for each:

1. **Live Server** by Ritwick Dey — Adds a "Go Live" button to the bottom of VS Code. When you click it, your HTML file opens in your browser AND auto-refreshes every time you save the file. This is the single most magical productivity tool for beginners.

2. **Prettier - Code formatter** by Prettier — Automatically formats your code so it's properly indented and consistent. Hit save and your messy code becomes neat. After installing, go to Settings (Ctrl/Cmd + ,) and search "Format on Save" — turn it on.

**File and folder organization.** On your computer, create a folder called \`web-projects\` somewhere you'll find it (Desktop or Documents). Every project goes in its own subfolder. For example: \`web-projects/chapter-1-hello/\`. Inside each project folder, you'll have files like \`index.html\`, \`style.css\`, and \`script.js\`. Always name your main HTML file \`index.html\` — web servers automatically serve a file with that name when no specific page is requested.

**File extensions matter.** A file's extension (the part after the dot) tells your computer what kind of file it is. \`.html\` for HTML, \`.css\` for CSS, \`.js\` for JavaScript. Windows hides extensions by default — you should turn that off in File Explorer (View → Show → File name extensions) so you can see them. On Mac, open Finder Preferences → Advanced → Show all filename extensions.

**Naming files.** Use lowercase letters, hyphens instead of spaces, and never special characters. Good: \`about-us.html\`. Bad: \`About Us!.html\`. The reason: web URLs treat uppercase and special characters unpredictably across servers.`,
      callouts: [
        { type: "tip", title: "You don't need to install anything for this course", content: "This platform has a built-in compiler so you can practice without setting up VS Code. But for real projects, install VS Code and Live Server — your future self will thank you." },
        { type: "common-mistake", title: "Naming files", content: "If your file is named 'My Page.html' (with a capital M and a space), some servers will fail to find it. Always lowercase, always hyphens." },
      ],
      microExercise: {
        instruction: "Below is a tiny HTML page. Change the heading text to your own name and add a second paragraph that says something about you.",
        starterCode: {
          html: `<!DOCTYPE html>\n<html>\n  <body>\n    <h1>Hello, world!</h1>\n    <p>I am learning HTML.</p>\n  </body>\n</html>`,
        },
        hint: "Change the text between <h1> and </h1>. Then add another <p>...</p> below the first one.",
        solution: {
          html: `<!DOCTYPE html>\n<html>\n  <body>\n    <h1>Hello, I'm Alex!</h1>\n    <p>I am learning HTML.</p>\n    <p>I love coffee and cats.</p>\n  </body>\n</html>`,
        },
      },
    },
  ],
  exercises: [
    {
      id: "ch01-ex1",
      title: "Your very first webpage",
      difficulty: 1,
      description: "Create an HTML page that introduces yourself with a heading and two paragraphs.",
      requirements: [
        "Use a <!DOCTYPE html> declaration",
        "Have an <html>, <head>, and <body> tag",
        "Include one <h1> with your name",
        "Include at least two <p> paragraphs",
      ],
      starterCode: { html: `<!DOCTYPE html>\n<html>\n  <head>\n    <title>About Me</title>\n  </head>\n  <body>\n    <!-- Add your code here -->\n  </body>\n</html>` },
      hints: [
        "An <h1> looks like: <h1>Your text</h1>",
        "A paragraph looks like: <p>Some sentence.</p>",
        "Both go inside the <body> tag, one after the other.",
      ],
      solution: { html: `<!DOCTYPE html>\n<html>\n  <head>\n    <title>About Me</title>\n  </head>\n  <body>\n    <h1>I'm Sam</h1>\n    <p>I'm learning to build websites.</p>\n    <p>This is my very first HTML page!</p>\n  </body>\n</html>` },
      solutionExplanation: "A complete minimal HTML page with the four required elements. Notice every opening tag has a matching closing tag, and everything is properly nested.",
    },
    {
      id: "ch01-ex2",
      title: "Identify the languages",
      difficulty: 2,
      description: "Below is a snippet that mixes HTML, CSS, and JavaScript. Your job is to write a single HTML file that produces a green heading that turns red when clicked.",
      requirements: [
        "A heading that says 'Click me to change color'",
        "The heading is green initially (use inline style or <style>)",
        "When clicked, the heading turns red",
      ],
      starterCode: { html: `<!DOCTYPE html>\n<html>\n  <body>\n    <!-- your work here -->\n  </body>\n</html>` },
      hints: [
        "You can put CSS inside a <style> tag in <head>, or use a 'style' attribute on the element.",
        "JavaScript runs on click using onclick=\"...\"",
        "this.style.color = 'red' changes the color of the clicked element.",
      ],
      solution: { html: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>h1 { color: green; cursor: pointer; }</style>\n  </head>\n  <body>\n    <h1 onclick="this.style.color = 'red'">Click me to change color</h1>\n  </body>\n</html>` },
      solutionExplanation: "The <style> block is CSS — it makes all <h1> elements green. The onclick attribute is JavaScript — it runs when the user clicks. All three languages working together in one tiny file.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch01-q1",
        type: "mcq",
        question: "In the house analogy, what role does CSS play?",
        options: ["The walls and structure", "The paint and decoration", "The electricity and plumbing", "The foundation and roof"],
        correctAnswer: 1,
        explanation: "CSS controls how things look — like paint, furniture, and decoration. HTML is the structure (walls), and JavaScript is the behavior (electricity).",
        difficulty: 1,
      },
      {
        id: "ch01-q2",
        type: "mcq",
        question: "What does DNS do?",
        options: [
          "Encrypts your data",
          "Translates domain names like google.com into IP addresses",
          "Stores cookies for websites",
          "Compresses HTML files for faster loading",
        ],
        correctAnswer: 1,
        explanation: "DNS (Domain Name System) is the internet's phonebook. It converts human-friendly names (google.com) into numerical IP addresses that computers use to communicate.",
        difficulty: 1,
      },
      {
        id: "ch01-q3",
        type: "true-false",
        question: "On iPhones, every browser including Chrome and Firefox is forced to use the WebKit rendering engine.",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation: "True. Apple's App Store rules require all iOS browsers to use WebKit. Chrome and Firefox on iOS look like Chrome and Firefox but use WebKit under the hood.",
        difficulty: 2,
      },
      {
        id: "ch01-q4",
        type: "mcq",
        question: "Which keyboard shortcut opens DevTools on Windows?",
        options: ["F1", "F12", "Ctrl + D", "Alt + Tab"],
        correctAnswer: 1,
        explanation: "F12 opens DevTools on Windows and Linux. On Mac, it's Cmd + Option + I.",
        difficulty: 1,
      },
      {
        id: "ch01-q5",
        type: "mcq",
        question: "What was the year HTML5 was officially released?",
        options: ["1991", "2000", "2014", "2020"],
        correctAnswer: 2,
        explanation: "HTML5 became an official W3C recommendation in October 2014, though parts of it were used long before that. It's still the version we use today.",
        difficulty: 2,
      },
      {
        id: "ch01-q6",
        type: "mcq",
        question: "Why is `index.html` the conventional name for a homepage file?",
        options: [
          "It must be alphabetically first",
          "Web servers serve it by default when no specific file is requested",
          "Browsers refuse to open files with other names",
          "It's required by the HTML specification",
        ],
        correctAnswer: 1,
        explanation: "By convention, web servers look for `index.html` (or `index.htm`) when a URL points to a folder rather than a specific file. It's a server convention, not a strict rule.",
        difficulty: 2,
      },
      {
        id: "ch01-q7",
        type: "spot-the-bug",
        question: "What's the main problem with this filename for a webpage?",
        code: `My New Page!.HTML`,
        options: [
          "Nothing — it's perfectly fine",
          "It uses uppercase, spaces, and special characters that cause cross-server problems",
          "Filenames can never be longer than 8 characters",
          "Web pages must be .htm not .html",
        ],
        correctAnswer: 1,
        explanation: "Web file names should be lowercase, use hyphens instead of spaces, and avoid special characters. A safer name: `my-new-page.html`.",
        difficulty: 2,
      },
      {
        id: "ch01-q8",
        type: "mcq",
        question: "Which of these is a rendering engine, NOT a browser?",
        options: ["Chrome", "Safari", "Blink", "Edge"],
        correctAnswer: 2,
        explanation: "Blink is the rendering engine. Chrome, Edge, Brave, and Opera all use Blink. Safari uses WebKit; Firefox uses Gecko.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "HTML", value: "Structure & content (walls)" },
    { label: "CSS", value: "Presentation & style (paint)" },
    { label: "JavaScript", value: "Behavior & interactivity (electricity)" },
    { label: "DNS", value: "Translates domain names → IP addresses" },
    { label: "DOM", value: "Browser's tree-structure model of the page" },
    { label: "DevTools", value: "F12 (Win/Linux) or Cmd+Option+I (Mac)" },
    { label: "Conventional homepage", value: "index.html" },
  ],
};

// ============================================================================
// DEEP CHAPTER 2
// ============================================================================
const ch02: Chapter = {
  id: "html-ch-02",
  number: 2,
  title: "Your Very First HTML File",
  subtitle: "Build, save, and open a real HTML document — line by line.",
  difficulty: "Absolute Beginner",
  estimatedMinutes: 30,
  xpReward: 100,
  prerequisites: ["html-ch-01"],
  partLabel: "Part 1: The Absolute Beginning",
  learningObjectives: [
    "Create and save an HTML file with the correct extension.",
    "Understand the meaning of every line in a basic HTML5 boilerplate.",
    "Recognize opening tags, closing tags, and self-closing tags.",
    "Distinguish between the <head> (metadata) and <body> (visible content).",
    "Use the lang attribute correctly.",
  ],
  sections: [
    {
      id: "ch02-s1",
      title: "Creating Your First File",
      whyItMatters: "Every project starts with a single file. Doing this once builds your confidence — you'll never forget how to start a website again.",
      content: `Open VS Code (or use the in-browser compiler below — same idea). Go to **File → New File**. You now have an empty untitled document.

Immediately save it: **File → Save As**. A dialog opens asking where to save. Navigate to your \`web-projects\` folder, create a new folder inside it called \`first-page\`, open that folder, and name the file exactly \`index.html\`. Click Save.

The reason we save *before* writing any code is that VS Code needs to know what kind of file this is. The \`.html\` extension tells VS Code to enable HTML features: syntax highlighting, auto-complete, and tag matching. If you write code in an unsaved untitled file, VS Code won't help you because it doesn't know what language you're writing.

Now you have an empty \`index.html\` file. You're ready to write your first real HTML.`,
      callouts: [
        { type: "tip", title: "Why 'index'?", content: "When a web server receives a request for a folder (like example.com/blog/), it looks for a file named index.html inside that folder and serves it. This convention has been around since the 1990s." },
      ],
    },
    {
      id: "ch02-s2",
      title: "The Magic First Lines (the boilerplate)",
      whyItMatters: "Every single HTML file you ever write — every single one, for the rest of your career — starts with the same basic structure. Memorize it once, type it forever.",
      content: `Type or paste this exactly into your file:

\`\`\`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>I just made my first website.</p>
  </body>
</html>
\`\`\`

Save the file (Ctrl/Cmd + S). Then in VS Code, click **Go Live** at the bottom-right (this requires the Live Server extension installed in chapter 1). Your browser opens and you see your page!

Let's break down every single line. Don't skip any of these — each one is doing a job.

**Line 1: \`<!DOCTYPE html>\`** — This is the doctype declaration. It tells the browser "this document is HTML5." It must be the very first line of your file. Without it, browsers fall back to a buggy old mode called *quirks mode* that breaks modern CSS.

**Line 2: \`<html lang="en">\`** — The root element. *Everything* in your page must be inside this tag. The \`lang="en"\` attribute tells the browser, search engines, and screen readers that this page is in English. Use \`lang="bn"\` for Bengali, \`lang="es"\` for Spanish, \`lang="fr"\` for French. This single attribute dramatically improves accessibility.

**Line 3: \`<head>\`** — The head contains *information about the page* that's not directly visible. Think of it as the file's settings panel.

**Line 4: \`<meta charset="UTF-8">\`** — Tells the browser to interpret the bytes in this file as UTF-8 text encoding. UTF-8 supports every character in every language including emojis 🎉. Without this, special characters might display as garbled symbols.

**Line 5: \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`** — Critical for mobile devices. It tells phones and tablets to render the page at their actual width instead of pretending to be a desktop. Without this, your site looks zoomed-out and tiny on mobile.

**Line 6: \`<title>My First Page</title>\`** — The title appears in the browser tab and in Google search results. This is the most important text on your page for SEO.

**Line 8: \`<body>\`** — Everything visible on the page goes inside the body. Headings, paragraphs, images, buttons, forms — all of it.

**Lines 9–10: \`<h1>\` and \`<p>\`** — Your actual content. We'll cover these in detail in chapter 3.

**Lines 11–12: closing tags** — Every opening tag must be closed in reverse order. Open \`<html>\` then \`<head>\` then \`</head>\` then \`<body>\` then \`</body>\` then \`</html>\`.`,
      codeExamples: [
        {
          id: "ch02-s2-ex1",
          title: "The full boilerplate — runnable",
          description: "Run this and you'll see your first page. Try changing the title and the heading text.",
          code: {
            html: `<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>My First Page</title>\n  </head>\n  <body>\n    <h1>Hello, world!</h1>\n    <p>I just made my first website.</p>\n  </body>\n</html>`,
          },
          explanation: "Notice the indentation: the head and body are nested inside html, and the meta/title/h1/p are nested inside their parents. Indentation is for humans only — the browser doesn't care, but you'll care a lot when reading code months later.",
          tryItPrompt: "Change the <title> to your own page name. Notice it changes the browser tab text. Then add another <p> with a sentence.",
        },
      ],
      callouts: [
        { type: "common-mistake", title: "Forgetting DOCTYPE", content: "Forgetting <!DOCTYPE html> is the #1 reason beginners' CSS doesn't work right. Always put it on line 1." },
        { type: "pro-tip", title: "VS Code shortcut", content: "In VS Code, type `!` and hit Tab — it auto-generates the entire boilerplate for you. Try it!" },
      ],
    },
    {
      id: "ch02-s3",
      title: "Anatomy of an HTML Tag",
      whyItMatters: "Every line of HTML you ever write follows the same rules. Master the rules now and you'll never feel lost in HTML again.",
      realWorldAnalogy: "An HTML tag is like a labeled container. The opening tag is the lid going on, the content is what's inside, and the closing tag is the lid coming off.",
      content: `An HTML tag has three parts: the **opening tag**, the **content**, and the **closing tag**.

**Opening tag**: Starts with \`<\` (less-than), then the tag name, optionally some attributes, then \`>\` (greater-than). Example: \`<p>\`.

**Content**: Whatever goes between the opening and closing tags. Can be plain text, other tags, or both.

**Closing tag**: Starts with \`</\` (note the forward slash), then the same tag name, then \`>\`. Example: \`</p>\`.

So the full pattern is: \`<tagname>content</tagname>\`. For example, \`<p>This is a paragraph.</p>\`.

**Self-closing tags** (also called void elements) don't have content and don't need a closing tag. They represent things that are inherently empty, like an image (\`<img>\`) or a line break (\`<br>\`). In HTML5 you can write them as \`<img>\` or \`<img />\` — both are valid.

**Attributes** add information to a tag. They go inside the opening tag, after the tag name: \`<a href="https://google.com">Google</a>\`. Here \`href\` is the attribute name and \`"https://google.com"\` is the attribute value. Attributes always have the format \`name="value"\`.

**Nesting** — tags can contain other tags. \`<p>This is <strong>important</strong> text.</p>\` puts a \`<strong>\` tag inside a \`<p>\` tag. Nested tags must be closed in the reverse order they were opened — like stacking and unstacking boxes.

**Case sensitivity** — HTML tags are not case-sensitive (\`<P>\` and \`<p>\` work the same), but the universal convention is **always lowercase**. Mixing cases marks you as an amateur.

**Whitespace** — extra spaces, tabs, and newlines between tags are ignored by the browser. \`<p>Hi</p><p>Bye</p>\` looks identical to a version with line breaks between them. Indentation is purely for human readability.`,
      codeExamples: [
        {
          id: "ch02-s3-ex1",
          title: "Tag anatomy in action",
          description: "Multiple tag types working together: paired tags, self-closing tags, attributes, and nesting.",
          code: {
            html: `<!DOCTYPE html>\n<html lang="en">\n  <head><title>Tag demo</title></head>\n  <body>\n    <h1>Tag demo</h1>\n    <p>This is a <strong>nested</strong> tag inside a paragraph.</p>\n    <hr>\n    <p>The line above is a self-closing <code>&lt;hr&gt;</code> tag.</p>\n    <a href="https://developer.mozilla.org">A link with the href attribute</a>\n  </body>\n</html>`,
          },
          explanation: "<strong> nested inside <p>. <hr> is self-closing — no content, no closing tag. <a> uses the href attribute. Notice &lt; and &gt; — those are HTML entities for displaying < and > as literal text.",
          tryItPrompt: "Try removing the closing </p> tag and see if anything visually breaks. Then put it back and add a third paragraph.",
        },
      ],
      callouts: [
        { type: "warning", title: "Missing closing tags", content: "Browsers are lenient and will often render pages with missing closing tags — but the result is unpredictable. Always close every tag." },
        { type: "common-mistake", title: "Wrong slash direction", content: "It's </p>, not <\\p>. Closing tags use a forward slash, like the URL slash, not a backslash." },
      ],
      microExercise: {
        instruction: "Fix the broken HTML below. There's a missing closing tag and a wrongly nested tag.",
        starterCode: { html: `<!DOCTYPE html>\n<html>\n  <body>\n    <h1>My page\n    <p><strong>Hello</p></strong>\n  </body>\n</html>` },
        hint: "Look at <h1> — it's missing its closing tag. Then look at <strong> and </strong> — are they nested correctly inside <p>?",
        solution: { html: `<!DOCTYPE html>\n<html>\n  <body>\n    <h1>My page</h1>\n    <p><strong>Hello</strong></p>\n  </body>\n</html>` },
      },
    },
    {
      id: "ch02-s4",
      title: "Head vs Body — what goes where?",
      whyItMatters: "Putting visible content in the head, or metadata in the body, is one of the most common beginner errors. Understand the divide once and you'll never make this mistake.",
      content: `Think of an HTML file as a letter being mailed. The **head** is the envelope — it has the address, the postage, the sender info. None of this appears inside the letter; it's just info about the letter. The **body** is the letter itself — the actual message that the recipient reads.

**Goes in <head>** (invisible info for the browser):
- \`<title>\` — the browser tab text
- \`<meta>\` tags — character set, viewport, description, social sharing tags
- \`<link>\` tags — connect external CSS files and favicons
- \`<style>\` tags — CSS written directly in the page
- \`<script>\` tags — JavaScript (sometimes; can also go at end of body)

**Goes in <body>** (everything visible):
- Headings (\`<h1>\` through \`<h6>\`)
- Paragraphs (\`<p>\`)
- Images (\`<img>\`)
- Links (\`<a>\`)
- Lists, tables, forms, buttons, sections, divs — every visible element

If you accidentally put a paragraph in the head, the browser will *probably* still display it (browsers are forgiving), but it's invalid HTML and may cause CSS or JavaScript bugs later. Always keep the divide clean.`,
      callouts: [
        { type: "info", title: "The lang attribute matters", content: "Screen readers use the lang attribute to choose pronunciation. A French screen reader reading lang='en' will use an English voice. This single attribute is a huge accessibility win." },
      ],
      deepDive: `**Why charset='UTF-8' specifically?** Computers store all text as numbers (bytes). A character encoding is the mapping from numbers to characters. Old encodings like ASCII only supported English. UTF-8 is a modern encoding that can represent every character in every writing system on Earth — Chinese, Arabic, Hindi, emoji, mathematical symbols, ancient Egyptian hieroglyphs. It's also backwards compatible with ASCII for English text. There is essentially no reason to use any other encoding in 2025+. If you don't declare a charset, browsers guess based on heuristics — and they sometimes guess wrong, leaving you with garbled text like 'Ã©' instead of 'é'. So always include <meta charset='UTF-8'>.`,
    },
  ],
  exercises: [
    {
      id: "ch02-ex1",
      title: "Build a complete boilerplate from scratch",
      difficulty: 1,
      description: "Write a complete HTML5 page from scratch (don't copy from above) with proper boilerplate and a heading + paragraph.",
      requirements: ["DOCTYPE on line 1", "html with lang attribute", "head with charset, viewport, and title", "body with at least one h1 and one p"],
      starterCode: { html: `` },
      hints: ["Start with !DOCTYPE", "Remember the head goes before the body", "Don't forget closing tags"],
      solution: { html: `<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>My Page</title>\n  </head>\n  <body>\n    <h1>Welcome</h1>\n    <p>This is my page.</p>\n  </body>\n</html>` },
      solutionExplanation: "Standard HTML5 boilerplate with all the recommended meta tags.",
    },
    {
      id: "ch02-ex2",
      title: "Spot the bugs",
      difficulty: 2,
      description: "The HTML below has 4 separate bugs. Find and fix all of them.",
      requirements: ["Fix the missing DOCTYPE", "Fix the wrong nesting", "Fix the missing closing tag", "Fix the typo in a tag name"],
      starterCode: { html: `<html>\n  <head>\n    <titel>Bugs</titel>\n  </head>\n  <body>\n    <h1>Header\n    <p><strong>Hello</p></strong>\n  </body>\n</html>` },
      hints: ["DOCTYPE is missing", "<titel> isn't a real tag", "<h1> never closes", "<strong> and <p> are crossed over"],
      solution: { html: `<!DOCTYPE html>\n<html>\n  <head>\n    <title>Bugs</title>\n  </head>\n  <body>\n    <h1>Header</h1>\n    <p><strong>Hello</strong></p>\n  </body>\n</html>` },
      solutionExplanation: "Added the DOCTYPE, fixed <titel> to <title>, closed <h1>, and reordered </strong></p> so the inner tag closes before the outer tag.",
    },
    {
      id: "ch02-ex3",
      title: "Multilingual page",
      difficulty: 2,
      description: "Build an HTML page in a non-English language of your choice. Use the correct lang attribute.",
      requirements: ["Use a lang attribute that's NOT 'en'", "Include actual text in that language inside the body", "Include UTF-8 charset so special characters render"],
      starterCode: { html: `<!DOCTYPE html>\n<html lang="??">\n  <head>\n    <!-- ... -->\n  </head>\n  <body>\n    <!-- ... -->\n  </body>\n</html>` },
      hints: ["Try lang='es' for Spanish, 'fr' for French, 'bn' for Bengali, 'ja' for Japanese", "Make sure charset='UTF-8' is there", "Pick any phrase you know"],
      solution: { html: `<!DOCTYPE html>\n<html lang="fr">\n  <head>\n    <meta charset="UTF-8">\n    <title>Bonjour</title>\n  </head>\n  <body>\n    <h1>Bonjour le monde !</h1>\n    <p>Ceci est ma première page en français.</p>\n  </body>\n</html>` },
      solutionExplanation: "lang='fr' tells screen readers to use French pronunciation. UTF-8 ensures accents like é render correctly.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch02-q1",
        type: "mcq",
        question: "What MUST be the very first line of every HTML file?",
        options: ["<html>", "<!DOCTYPE html>", "<head>", "<meta charset='UTF-8'>"],
        correctAnswer: 1,
        explanation: "<!DOCTYPE html> must be the first line. Without it, browsers fall back to 'quirks mode' which breaks modern CSS.",
        difficulty: 1,
      },
      {
        id: "ch02-q2",
        type: "true-false",
        question: "HTML tags are case-sensitive — <P> and <p> are different.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. HTML tags are NOT case-sensitive. <P> and <p> work identically. However, the universal convention is always lowercase.",
        difficulty: 1,
      },
      {
        id: "ch02-q3",
        type: "mcq",
        question: "Where does the <title> tag belong?",
        options: ["Inside <body>", "Inside <head>", "Outside <html>", "Inside <h1>"],
        correctAnswer: 1,
        explanation: "<title> is metadata about the page (it appears in the browser tab and in search results), so it goes in <head>.",
        difficulty: 1,
      },
      {
        id: "ch02-q4",
        type: "spot-the-bug",
        question: "What's wrong with this HTML?",
        code: `<p><strong>Hello world</p></strong>`,
        options: [
          "Nothing — it's valid",
          "The closing tags are in the wrong order",
          "<strong> isn't a real tag",
          "Paragraphs can't contain <strong>",
        ],
        correctAnswer: 1,
        explanation: "Tags must be closed in the reverse order they were opened. The correct version is: <p><strong>Hello world</strong></p>.",
        difficulty: 2,
      },
      {
        id: "ch02-q5",
        type: "mcq",
        question: "What does the lang='en' attribute do?",
        options: [
          "Translates the page into English automatically",
          "Tells browsers and screen readers the document is in English",
          "Sets the keyboard layout for form inputs",
          "Restricts visitors to English speakers only",
        ],
        correctAnswer: 1,
        explanation: "It's metadata that informs assistive tech and search engines of the page's language. It does NOT translate anything.",
        difficulty: 2,
      },
      {
        id: "ch02-q6",
        type: "mcq",
        question: "Which is a self-closing (void) element?",
        options: ["<p>", "<div>", "<img>", "<h1>"],
        correctAnswer: 2,
        explanation: "<img> is a void element — it represents content (an image) but has no inner text content, so it doesn't need a closing tag.",
        difficulty: 1,
      },
      {
        id: "ch02-q7",
        type: "fill-blank",
        question: "Complete the meta tag for character encoding: <meta ____='UTF-8'>",
        correctAnswer: "charset",
        explanation: "<meta charset='UTF-8'> declares the document's character encoding as UTF-8, which supports virtually all written languages and emojis.",
        difficulty: 2,
      },
      {
        id: "ch02-q8",
        type: "mcq",
        question: "What is the viewport meta tag for?",
        options: [
          "Setting the page background color",
          "Telling mobile browsers how to scale the page",
          "Choosing which fonts to load",
          "Enabling JavaScript",
        ],
        correctAnswer: 1,
        explanation: "<meta name='viewport' content='width=device-width, initial-scale=1.0'> tells mobile browsers to render the page at the device's actual width instead of pretending to be a desktop.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Doctype", value: "<!DOCTYPE html>" },
    { label: "Root", value: "<html lang=\"en\">...</html>" },
    { label: "Head", value: "Invisible metadata: title, meta, link" },
    { label: "Body", value: "All visible content" },
    { label: "Tag pattern", value: "<tag>content</tag>" },
    { label: "Self-closing", value: "<img>, <br>, <hr>, <meta>, <link>" },
    { label: "Attribute", value: "name=\"value\" inside opening tag" },
    { label: "VS Code shortcut", value: "Type ! then Tab to generate boilerplate" },
  ],
};

// ============================================================================
// DEEP CHAPTER 3
// ============================================================================
const ch03: Chapter = {
  id: "html-ch-03",
  number: 3,
  title: "Text in HTML — Headings, Paragraphs, and Formatting",
  subtitle: "Master every way to display text in a web page.",
  difficulty: "Absolute Beginner",
  estimatedMinutes: 35,
  xpReward: 100,
  prerequisites: ["html-ch-02"],
  partLabel: "Part 1: The Absolute Beginning",
  learningObjectives: [
    "Use the six heading levels correctly and understand their semantic hierarchy.",
    "Write paragraphs with proper line breaks and spacing.",
    "Apply text emphasis with <strong>, <em>, <mark>, and friends.",
    "Use horizontal rules and line breaks appropriately.",
    "Display preformatted text and inline code.",
  ],
  sections: [
    {
      id: "ch03-s1",
      title: "Headings: <h1> Through <h6>",
      whyItMatters: "Headings structure your content for both readers and search engines. Used wrongly, they ruin your page's SEO and accessibility. Used correctly, they make your page easy to scan and rank well on Google.",
      realWorldAnalogy: "Think of headings like the chapters and sections of a book. <h1> is the book title, <h2> is a chapter title, <h3> is a section within that chapter. You wouldn't write a book with random heading sizes — neither should your web page.",
      content: `HTML provides six levels of headings: \`<h1>\` (largest, most important) down to \`<h6>\` (smallest, least important). They form a hierarchy.

**Use exactly one \`<h1>\` per page.** It should describe what the entire page is about — like the title of an article or product name. Search engines weight the \`<h1>\` heavily for understanding what your page is.

**Use \`<h2>\` for major sections.** A blog post might have an \`<h2>\` for "Introduction," another for "Background," another for "Conclusion."

**Use \`<h3>\` for subsections within those sections.** And so on down to \`<h6>\` (rarely needed).

The cardinal rule: **never skip levels.** Don't go from \`<h1>\` straight to \`<h4>\` — that confuses screen readers. The correct order is \`<h1>\` → \`<h2>\` → \`<h3>\` → \`<h4>\`. You can skip *back* (after an \`<h3>\`, you can start a new \`<h2>\`), but not forward.

The other cardinal rule: **don't pick a heading based on size.** If you want a small bold title, don't use \`<h6>\` because it looks small — use \`<h2>\` (or whatever level is correct) and style it smaller with CSS. The heading level is about *meaning*, not appearance.`,
      codeExamples: [
        {
          id: "ch03-s1-ex1",
          title: "All six heading levels",
          description: "See the default browser styling of each heading level.",
          code: {
            html: `<!DOCTYPE html>\n<html>\n<body>\n  <h1>Heading level 1 (page title)</h1>\n  <h2>Heading level 2 (major section)</h2>\n  <h3>Heading level 3 (subsection)</h3>\n  <h4>Heading level 4</h4>\n  <h5>Heading level 5</h5>\n  <h6>Heading level 6</h6>\n  <p>Regular paragraph for size comparison.</p>\n</body>\n</html>`,
          },
          explanation: "Browsers apply default sizes that visually match the hierarchy: h1 is huge, h6 is small. You can override these sizes with CSS — but the underlying meaning of the tag stays the same.",
          tryItPrompt: "Add an <h2> describing your favorite hobby. Then add two <h3> subsections under it.",
        },
        {
          id: "ch03-s1-ex2",
          title: "A properly structured article",
          description: "An article with a clear heading hierarchy that screen readers can navigate.",
          code: {
            html: `<!DOCTYPE html>\n<html lang="en">\n<body>\n  <h1>How to Make Pasta</h1>\n  \n  <h2>Ingredients</h2>\n  <p>Flour, eggs, salt, water.</p>\n  \n  <h2>Steps</h2>\n  \n  <h3>Step 1: Make the dough</h3>\n  <p>Combine flour and eggs.</p>\n  \n  <h3>Step 2: Roll it out</h3>\n  <p>Use a rolling pin until thin.</p>\n  \n  <h2>Serving suggestions</h2>\n  <p>Top with sauce of your choice.</p>\n</body>\n</html>`,
          },
          explanation: "One <h1> for the article title. Two <h2> sections (Ingredients, Steps, Serving). The Steps section has <h3> subsections inside it. A blind user navigating with a screen reader can jump between headings as easily as a sighted user can scroll.",
          tryItPrompt: "Add a third <h3> step (e.g. 'Step 3: Cook'). Then add an <h4> tip under it.",
        },
      ],
      callouts: [
        { type: "common-mistake", title: "The 'h1 looks too big' mistake", content: "Beginners often use <h2> as the page title because <h1> 'looks too big.' This is wrong — fix the size with CSS, don't change the semantics. Search engines and screen readers care about the level, not the size." },
        { type: "warning", title: "Multiple h1s", content: "Old advice said you can have multiple <h1>s in HTML5 if each is inside a different <section>. Modern accessibility guidance has reverted: just use one <h1> per page. Period." },
      ],
    },
    {
      id: "ch03-s2",
      title: "Paragraphs and Line Breaks",
      whyItMatters: "Paragraphs are the building block of all written content. Misusing <br> instead of proper paragraphs is one of the most common beginner errors and makes pages hard to style and read.",
      content: `**Paragraphs** are wrapped in \`<p>\`...\`</p>\`. Browsers add space above and below paragraphs automatically — that's the whitespace you see between blocks of text on every webpage.

\`\`\`
<p>This is the first paragraph.</p>
<p>This is the second paragraph.</p>
\`\`\`

**Whitespace inside text is collapsed.** This is a critical concept. If you write:

\`\`\`
<p>Hello       world.

Spaces and        line breaks
get collapsed.</p>
\`\`\`

The browser displays it all as a single line: "Hello world. Spaces and line breaks get collapsed." Multiple spaces become one space. Line breaks become a single space. Tabs become a single space. This is intentional — it lets you format your source code however you like for readability without affecting the output.

**To force a line break inside a paragraph**, use the self-closing \`<br>\` tag:

\`\`\`
<p>Line one.<br>Line two.<br>Line three.</p>
\`\`\`

Use \`<br>\` only when the line break is meaningful — like in a poem, address, or song lyrics. **Do NOT use \`<br><br>\` to create space between paragraphs** — use two separate \`<p>\` tags. Spacing is CSS's job, not HTML's.

**Horizontal rule** (\`<hr>\`) draws a horizontal line across the page, typically used to separate sections of content. It's also self-closing.`,
      codeExamples: [
        {
          id: "ch03-s2-ex1",
          title: "Paragraphs vs <br> vs <hr>",
          description: "Understand when to use each one.",
          code: {
            html: `<!DOCTYPE html>\n<html>\n<body>\n  <p>This is a regular paragraph. It will have automatic spacing before and after.</p>\n  <p>Here's an address using line breaks:<br>\n     123 Main St<br>\n     Springfield, USA<br>\n     90210</p>\n  <hr>\n  <p>The horizontal line above separates this paragraph from the address.</p>\n</body>\n</html>`,
          },
          explanation: "First <p> shows default paragraph behavior. The address uses <br> because each line is part of the same logical block (an address). <hr> creates a visual divider between sections.",
          tryItPrompt: "Try writing a short poem. Use <br> between lines and <p> between stanzas.",
        },
      ],
      callouts: [
        { type: "common-mistake", title: "<br><br> for spacing", content: "Beginners often write <br><br> to add space between blocks. Don't. Use two <p> tags and let CSS control spacing. <br> is for meaningful line breaks within a single block of text." },
      ],
    },
    {
      id: "ch03-s3",
      title: "Text Formatting Tags",
      whyItMatters: "Bold and italic aren't just visual styles — they carry meaning. Using the right tag tells screen readers and search engines which words are emphasized.",
      content: `HTML has many tags for marking up text with meaning. The two most important pairs:

**\`<strong>\` vs \`<b>\`** — Both make text bold by default, but they mean different things.
- \`<strong>\` = "this text has strong importance" (semantic — screen readers may emphasize it).
- \`<b>\` = "this text is bold for stylistic reasons" (presentational — no extra meaning).

In practice, **use \`<strong>\` 99% of the time.** Use \`<b>\` only when you want bold appearance without implying importance — like a product name in a list.

**\`<em>\` vs \`<i>\`** — Both make text italic by default.
- \`<em>\` = "stress emphasis" (semantic).
- \`<i>\` = "alternate voice or mood" (italic for stylistic reasons — like a foreign word, technical term, or thought).

Use \`<em>\` 99% of the time.

**Other useful text tags:**

- \`<mark>\` — Highlights text (yellow background by default), like a highlighter pen.
- \`<u>\` — Underline. Avoid — looks like a link. Use sparingly.
- \`<s>\` or \`<del>\` — Strikethrough. \`<del>\` means "deleted content" semantically.
- \`<small>\` — Smaller text, used for fine print.
- \`<sub>\` — Subscript (H₂O).
- \`<sup>\` — Superscript (E=mc²).
- \`<code>\` — Inline code (renders in monospace font).
- \`<pre>\` — Preformatted text (preserves whitespace and line breaks, monospace font). Useful for displaying code blocks.
- \`<kbd>\` — Keyboard input (renders like a keyboard key).
- \`<abbr title="..."\`> — Abbreviation with a tooltip.
- \`<blockquote>\` — A long quotation (block-level, indented).
- \`<q>\` — Inline quote (browsers may add quotation marks).
- \`<cite>\` — Title of a creative work (book, movie, song).`,
      codeExamples: [
        {
          id: "ch03-s3-ex1",
          title: "Text formatting showcase",
          description: "All the major text-level tags in action.",
          code: {
            html: `<!DOCTYPE html>\n<html>\n<body>\n  <p>This is <strong>important</strong> and this is <em>emphasized</em>.</p>\n  <p>Here is <mark>highlighted text</mark> and <s>struck-through text</s>.</p>\n  <p>Chemistry: H<sub>2</sub>O. Math: E = mc<sup>2</sup>.</p>\n  <p>Run <code>npm install</code> in the terminal.</p>\n  <p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>\n  <p><abbr title="HyperText Markup Language">HTML</abbr> is the language of the web.</p>\n  <blockquote>The best way to predict the future is to invent it. — Alan Kay</blockquote>\n  <pre>\nfunction hello() {\n    console.log("hi");\n}\n  </pre>\n</body>\n</html>`,
          },
          explanation: "<strong> and <em> add semantic meaning (importance/emphasis). <mark> highlights. <sub> and <sup> handle subscripts/superscripts. <code> and <pre> handle code (pre preserves whitespace). <kbd> renders as keyboard keys. <abbr> creates a tooltip when you hover.",
          tryItPrompt: "Hover over HTML in the rendered output — you'll see the abbreviation tooltip. Add another <abbr> with title='Cascading Style Sheets'>CSS</abbr>.",
        },
      ],
      callouts: [
        { type: "tip", title: "Default styles, custom looks", content: "These tags have default styling (bold, italic, etc.) but you can completely change how they look with CSS. The visual look isn't permanent — only the meaning is." },
        { type: "pro-tip", title: "Semantic over visual", content: "Always pick the tag based on meaning, not appearance. A <strong> tag styled with CSS to be red and underlined is still better than a <span> with custom styling, because screen readers know the text is important." },
      ],
      microExercise: {
        instruction: "Below is a paragraph with no markup. Add <strong> around the word 'never', <em> around the word 'always', and <mark> around the word 'remember'.",
        starterCode: { html: `<p>You should never skip semicolons, but you should always remember to close your tags.</p>` },
        hint: "Wrap each word like: <strong>never</strong>",
        solution: { html: `<p>You should <strong>never</strong> skip semicolons, but you should <em>always</em> <mark>remember</mark> to close your tags.</p>` },
      },
    },
  ],
  exercises: [
    {
      id: "ch03-ex1",
      title: "Article structure",
      difficulty: 1,
      description: "Build a short article about your favorite movie with proper heading hierarchy.",
      requirements: ["One <h1> with the movie title", "Three <h2> sections (e.g. Plot, Characters, Why I Love It)", "At least one <p> in each section", "Use <strong> at least twice and <em> at least once"],
      starterCode: { html: `<!DOCTYPE html>\n<html lang="en">\n  <head><meta charset="UTF-8"><title>My favorite movie</title></head>\n  <body>\n    <!-- your article -->\n  </body>\n</html>` },
      hints: ["Start with the h1 (movie title)", "Each h2 introduces a section, then put p tags below", "Wrap key phrases in <strong> for importance"],
      solution: { html: `<!DOCTYPE html>\n<html lang="en">\n<head><meta charset="UTF-8"><title>The Matrix</title></head>\n<body>\n  <h1>The Matrix</h1>\n  <h2>Plot</h2>\n  <p>A hacker named <strong>Neo</strong> discovers reality is a simulation.</p>\n  <h2>Characters</h2>\n  <p><strong>Morpheus</strong> mentors Neo, while <em>Trinity</em> fights alongside him.</p>\n  <h2>Why I love it</h2>\n  <p>The action and philosophy combine into something <em>unique</em>.</p>\n</body>\n</html>` },
      solutionExplanation: "Single h1, three h2 sections, paragraphs with semantic emphasis. A screen reader user could navigate this perfectly.",
    },
    {
      id: "ch03-ex2",
      title: "Recipe with formatting",
      difficulty: 2,
      description: "Build a recipe page using a heading, paragraphs, line breaks for the ingredient list, and code-like formatting for the temperature.",
      requirements: ["h1 with recipe name", "h2 for 'Ingredients' section", "Use <br> within a paragraph to list ingredients on separate lines", "Use <strong> for the recipe name when first mentioned in the description", "Use <kbd> or <code> for the oven temperature"],
      starterCode: { html: `<!DOCTYPE html>\n<html><body>\n  <!-- your recipe -->\n</body></html>` },
      hints: ["Use <br> between each ingredient line", "Wrap the temperature in <code>", "Strong tag for emphasis on key terms"],
      solution: { html: `<!DOCTYPE html>\n<html lang="en">\n<body>\n  <h1>Chocolate Chip Cookies</h1>\n  <p><strong>Chocolate Chip Cookies</strong> are a classic American treat.</p>\n  <h2>Ingredients</h2>\n  <p>2 cups flour<br>1 cup sugar<br>1 cup butter<br>1 cup chocolate chips</p>\n  <h2>Instructions</h2>\n  <p>Bake at <code>350°F</code> for 12 minutes.</p>\n</body>\n</html>` },
      solutionExplanation: "h1 names the recipe, h2 organizes sections, <br> stacks ingredients in a single paragraph, <code> distinguishes the temperature visually.",
    },
    {
      id: "ch03-ex3",
      title: "Quotation page",
      difficulty: 3,
      description: "Create a page with three famous quotes using <blockquote>, <cite>, and <q>.",
      requirements: ["At least 3 <blockquote> elements", "Each quote attributed using <cite>", "Use at least one inline <q> in surrounding paragraph text", "Proper heading structure"],
      starterCode: { html: `<!DOCTYPE html>\n<html><body>\n  <!-- your quotes -->\n</body></html>` },
      hints: ["<blockquote> wraps the entire quote", "<cite> goes inside or after for the source", "<q> is used inline within a paragraph"],
      solution: { html: `<!DOCTYPE html>\n<html lang="en">\n<body>\n  <h1>Famous Quotes</h1>\n  <p>Many great minds said <q>think different</q> in their own way. Here are three:</p>\n  <blockquote>The only way to do great work is to love what you do. — <cite>Steve Jobs</cite></blockquote>\n  <blockquote>Be the change you wish to see in the world. — <cite>Mahatma Gandhi</cite></blockquote>\n  <blockquote>The best way to predict the future is to invent it. — <cite>Alan Kay</cite></blockquote>\n</body>\n</html>` },
      solutionExplanation: "<blockquote> creates indented block-level quotes; <cite> marks the source author; <q> handles a short inline quote.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch03-q1",
        type: "mcq",
        question: "How many <h1> tags should a typical web page have?",
        options: ["Zero", "Exactly one", "At most three", "As many as you want"],
        correctAnswer: 1,
        explanation: "Modern best practice is exactly one <h1> per page that describes what the entire page is about. It's the most important signal for SEO and accessibility.",
        difficulty: 1,
      },
      {
        id: "ch03-q2",
        type: "mcq",
        question: "What is the difference between <strong> and <b>?",
        options: [
          "There is no difference — they're identical",
          "<strong> is semantic (means important); <b> is purely visual (just bold)",
          "<b> is deprecated and should never be used",
          "<strong> only works in HTML5",
        ],
        correctAnswer: 1,
        explanation: "Both render as bold by default, but <strong> conveys importance (screen readers may emphasize it). <b> is just stylistic. Always prefer <strong> when the text actually matters.",
        difficulty: 2,
      },
      {
        id: "ch03-q3",
        type: "code-output",
        question: "How does the browser display this HTML?",
        code: `<p>Hello       world.\n\nMultiple   spaces.</p>`,
        options: [
          "Exactly as written, preserving all whitespace",
          "Hello world. Multiple spaces. (whitespace collapsed to single spaces)",
          "An error — invalid HTML",
          "Hello       world.\\n\\nMultiple   spaces.",
        ],
        correctAnswer: 1,
        explanation: "Browsers collapse multiple whitespace characters (spaces, tabs, newlines) into a single space. To preserve whitespace, use <pre> or CSS white-space: pre.",
        difficulty: 2,
      },
      {
        id: "ch03-q4",
        type: "true-false",
        question: "It's good practice to use <br><br> to create space between blocks of text.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. Use separate <p> tags for separate paragraphs and let CSS control spacing. <br> should only be used when the line break is meaningful (poetry, addresses, etc.).",
        difficulty: 1,
      },
      {
        id: "ch03-q5",
        type: "mcq",
        question: "Which tag preserves whitespace and renders text in monospace font?",
        options: ["<code>", "<pre>", "<kbd>", "<samp>"],
        correctAnswer: 1,
        explanation: "<pre> (preformatted) preserves all whitespace and renders in monospace. <code> is for inline code (monospace but no whitespace preservation). They're often combined: <pre><code>...</code></pre>.",
        difficulty: 2,
      },
      {
        id: "ch03-q6",
        type: "mcq",
        question: "Which heading hierarchy is INCORRECT?",
        options: [
          "<h1> → <h2> → <h3>",
          "<h1> → <h2> → <h2> → <h3>",
          "<h1> → <h4> → <h2>",
          "<h1> → <h2> → <h3> → <h2>",
        ],
        correctAnswer: 2,
        explanation: "Skipping levels going forward (h1 → h4) breaks the document outline and confuses assistive tech. You may go backward (h3 back to h2 to start a new section), but never skip levels going down.",
        difficulty: 3,
      },
      {
        id: "ch03-q7",
        type: "mcq",
        question: "What does <abbr title='World Health Organization'>WHO</abbr> do?",
        options: [
          "Hides the word WHO",
          "Renders WHO with the full text 'World Health Organization' as a tooltip on hover",
          "Replaces WHO with the full title",
          "Strikes through the text",
        ],
        correctAnswer: 1,
        explanation: "<abbr> marks an abbreviation. The title attribute provides the full meaning, which most browsers show as a tooltip on hover and screen readers may announce.",
        difficulty: 2,
      },
      {
        id: "ch03-q8",
        type: "spot-the-bug",
        question: "What's the issue with the heading structure here?",
        code: `<h1>My Blog</h1>\n<h3>About me</h3>\n<h2>Posts</h2>`,
        options: [
          "Nothing — it's fine",
          "It skips from h1 to h3, then jumps back to h2, breaking the outline",
          "<h3> is deprecated",
          "You can't have multiple headings on one page",
        ],
        correctAnswer: 1,
        explanation: "After <h1>, the next level should be <h2>, not <h3>. The correct version is <h1> → <h2> About me → <h2> Posts.",
        difficulty: 3,
      },
    ],
  },
  cheatSheet: [
    { label: "Headings", value: "<h1>...<h6> — semantic hierarchy" },
    { label: "Paragraph", value: "<p>...</p>" },
    { label: "Line break", value: "<br> (self-closing, inline)" },
    { label: "Horizontal rule", value: "<hr> (self-closing, block)" },
    { label: "Important", value: "<strong>...</strong>" },
    { label: "Emphasis", value: "<em>...</em>" },
    { label: "Highlight", value: "<mark>...</mark>" },
    { label: "Inline code", value: "<code>...</code>" },
    { label: "Code block", value: "<pre><code>...</code></pre>" },
    { label: "Abbreviation", value: "<abbr title=\"...\">...</abbr>" },
    { label: "Block quote", value: "<blockquote>...</blockquote>" },
  ],
};

// ============================================================================
// EXPORT THE FULL CHAPTER LIST (deep + structured stubs)
// ============================================================================
const part1: Chapter[] = [
  ch01, ch02, ch03,
  htmlCh04,
  htmlCh05,
  htmlCh06,
];

const part2: Chapter[] = [
  htmlCh07,
  htmlCh08,
  htmlCh09,
  htmlCh10,
  htmlCh11,
  htmlCh12,
  htmlCh13,
  htmlCh14,
];

const part3: Chapter[] = [
  htmlCh15,
  makeStub(16, "iFrames and Embeds", "Embedding YouTube, Maps, security implications.", "Intermediate", "Part 3: Media & Embeds", "html-ch-15"),
  makeStub(17, "SVG in HTML", "Inline SVG basics, why it matters.", "Intermediate", "Part 3: Media & Embeds", "html-ch-16"),
  makeStub(18, "Canvas Basics", "Drawing shapes via the <canvas> element.", "Advanced", "Part 3: Media & Embeds", "html-ch-17"),
  makeStub(19, "HTML5 APIs Preview", "Geolocation, localStorage at a glance.", "Intermediate", "Part 3: Media & Embeds", "html-ch-18"),
  makeStub(20, "Special Characters & Entities", "&amp;, &lt;, &copy;, and friends.", "Beginner", "Part 3: Media & Embeds", "html-ch-19"),
];

const part4: Chapter[] = [
  makeStub(21, "Web Accessibility Basics", "Why a11y matters and who it helps.", "Intermediate", "Part 4: Accessibility", "html-ch-20"),
  makeStub(22, "ARIA Roles & Attributes", "When to use ARIA (and when not to).", "Advanced", "Part 4: Accessibility", "html-ch-21"),
  makeStub(23, "Keyboard Navigation", "tabindex, focus management.", "Advanced", "Part 4: Accessibility", "html-ch-22"),
  makeStub(24, "Screen Readers", "How blind users browse the web.", "Intermediate", "Part 4: Accessibility", "html-ch-23"),
  makeStub(25, "Forms & Accessibility", "Labels, fieldsets, error messages.", "Advanced", "Part 4: Accessibility", "html-ch-24"),
  makeStub(26, "Images & Accessibility", "Writing great alt text.", "Intermediate", "Part 4: Accessibility", "html-ch-25"),
];

const part5: Chapter[] = [
  makeStub(27, "How Search Engines Read HTML", "Crawlers, indexing, ranking signals.", "Intermediate", "Part 5: SEO & Performance", "html-ch-26"),
  makeStub(28, "Meta Tags for SEO", "title, description, robots, canonical.", "Intermediate", "Part 5: SEO & Performance", "html-ch-27"),
  makeStub(29, "Open Graph & Social", "og:title, og:image, Twitter cards.", "Intermediate", "Part 5: SEO & Performance", "html-ch-28"),
  makeStub(30, "Structured Data", "Schema.org JSON-LD for rich results.", "Advanced", "Part 5: SEO & Performance", "html-ch-29"),
  makeStub(31, "HTML Performance", "Critical rendering path, defer/async.", "Advanced", "Part 5: SEO & Performance", "html-ch-30"),
  makeStub(32, "HTML Validation & Best Practices", "Using the W3C validator.", "Intermediate", "Part 5: SEO & Performance", "html-ch-31"),
];

const part6: Chapter[] = [
  makeStub(33, "Web Components Intro", "Custom elements overview.", "Advanced", "Part 6: Advanced HTML", "html-ch-32"),
  makeStub(34, "Template & Slot", "<template> and <slot> elements.", "Advanced", "Part 6: Advanced HTML", "html-ch-33"),
  makeStub(35, "HTML Dialog Element", "Native modals with <dialog>.", "Intermediate", "Part 6: Advanced HTML", "html-ch-34"),
  makeStub(36, "Details & Summary", "Native disclosure widgets.", "Beginner", "Part 6: Advanced HTML", "html-ch-35"),
  makeStub(37, "PWAs and Manifest", "manifest.json basics.", "Advanced", "Part 6: Advanced HTML", "html-ch-36"),
  makeStub(38, "Microdata", "Itemprop, itemscope, itemtype.", "Advanced", "Part 6: Advanced HTML", "html-ch-37"),
  makeStub(39, "HTML Email Basics", "Why HTML email is its own world.", "Advanced", "Part 6: Advanced HTML", "html-ch-38"),
  makeStub(40, "HTML Anti-Patterns", "What NOT to do, and why.", "Intermediate", "Part 6: Advanced HTML", "html-ch-39"),
];

const part7: Chapter[] = [
  makeStub(41, "Project: Personal Bio Page", "Pull it all together.", "Beginner", "Part 7: Projects", "html-ch-40"),
  makeStub(42, "Project: Recipe with Tables & Forms", "Multi-element project.", "Intermediate", "Part 7: Projects", "html-ch-41"),
  makeStub(43, "Project: Photo Gallery Page", "Images and semantic structure.", "Intermediate", "Part 7: Projects", "html-ch-42"),
  makeStub(44, "Project: Multi-page Website", "Home, About, Contact linked together.", "Intermediate", "Part 7: Projects", "html-ch-43"),
  makeStub(45, "Project: Accessible Form", "Real-world a11y form.", "Advanced", "Part 7: Projects", "html-ch-44"),
  makeStub(46, "Mini Challenges Set 1", "10 small challenges.", "Beginner", "Part 7: Projects", "html-ch-45"),
  makeStub(47, "Mini Challenges Set 2", "10 medium challenges.", "Intermediate", "Part 7: Projects", "html-ch-46"),
  makeStub(48, "Mini Challenges Set 3", "10 hard challenges.", "Advanced", "Part 7: Projects", "html-ch-47"),
  makeStub(49, "HTML Code Review", "Common mistakes deep-dive.", "Advanced", "Part 7: Projects", "html-ch-48"),
  makeStub(50, "HTML Mastery Recap & Cert Quiz", "Final cumulative quiz.", "Expert", "Part 7: Projects", "html-ch-49"),
];

export const htmlChapters: Chapter[] = [
  ...part1, ...part2, ...part3, ...part4, ...part5, ...part6, ...part7,
];
