import type { Track, Chapter } from "./types";

// Bengali translations for HTML DOM content
const htmldomContentBn: Record<string, string> = {
  "htmldom-1-1": `DOM মানে Document Object Model। এটি একটি গাছের মতো ডেটা স্ট্রাকচার যা ব্রাউজার HTML পার্স করে তৈরি করে। DOM হলো পেজের জীবন্ত প্রতিনিধিত্ব। জাভাস্ক্রিপ্ট এটি পড়তে, লিখতে, যোগ করতে এবং সরাতে পারে।

গুরুত্বপূর্ণ: DOM এবং HTML সোর্স এক না। জাভাস্ক্রিপ্ট ১০০টি নতুন প্যারাগ্রাফ DOM-এ যোগ করলে সার্ভারের মূল HTML ফাইলে কিছু বদলায় না।`,

  "htmldom-1-2": `ব্রাউজার রেন্ডারিং পাইপলাইন: ১) HTML বাইটস ডাউনলোড ২) ক্যারেক্টারে ডিকোড ৩) টোকেনাইজ ৪) নোড তৈরি ৫) DOM ট্রি লিংক ৬) CSS ডাউনলোড + CSSOM ৭) DOM + CSSOM = রেন্ডার ট্রি ৮) লেআউট ৯) পেইন্ট। জাভাস্ক্রিপ্ট এই পাইপলাইন বাধা দিতে পারে।`,

  "htmldom-1-3": `DOM-এ প্রতিটি জিনিস একটি নোড। নোড টাইপ:
• ELEMENT_NODE (১): HTML এলিমেন্ট
• TEXT_NODE (৩): টেক্সট কনটেন্ট
• COMMENT_NODE (৮): HTML কমেন্ট
• DOCUMENT_NODE (৯): ডকুমেন্ট অবজেক্ট
• DOCUMENT_TYPE_NODE (১০): <!DOCTYPE html>`,

  "htmldom-1-4": `document হলো রুট। document.documentElement হলো <html>। document.head হলো <head>। document.body হলো <body>। প্রতিটি এলিমেন্টের parentNode, childNodes, firstChild, lastChild, nextSibling, previousSibling আছে। childNodes-এ টেক্সট নোডও থাকে, children-এ শুধু এলিমেন্ট।`,

  "htmldom-1-5": `window হলো ব্রাউজারে গ্লোবাল অবজেক্ট। সব গ্লোবাল ভেরিয়েবল window-এর প্রপার্টি হয়ে যায়। window.document, window.location, window.history, window.navigator, window.screen, window.console। window.optional: window.alert() === alert()`,
};

const htmldomChapters: Chapter[] = [
  // Part 1: Understanding the DOM (Chapters 1-5)
  {
    id: "htmldom-1",
    number: 1,
    partLabel: "Part 1: Understanding the DOM",
    title: "What Is the DOM? — The Complete Picture",
    subtitle: "The bridge between HTML and JavaScript",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 100,
    prerequisites: [],
    learningObjectives: [
      "Understand what the DOM is and how it is created",
      "Know the difference between HTML source and the DOM",
      "Understand node types (Element, Text, Comment, Document)",
      "Understand the DOM tree structure"
    ],
    sections: [
      {
        id: "htmldom-1-1",
        title: "What Is the DOM?",
        whyItMatters: "The DOM is what makes web pages interactive — it is the bridge between HTML and JavaScript.",
        content: `An HTML file is like a building blueprint. The DOM is the actual building constructed from that blueprint. Blueprints cannot be changed after printing, but a real building can be renovated — you can add rooms, repaint walls, remove doors. The DOM is what JavaScript renovates.

When a browser loads an HTML file, it does NOT display the raw HTML text. Instead, it parses the HTML and builds a tree-shaped data structure in memory called the DOM — Document Object Model.

Key insight: The DOM and HTML source are NOT the same thing. If JavaScript adds 100 new paragraphs to the DOM, the original HTML file on the server still has zero. If you right-click a page and "View Source" you see the original HTML. If you open DevTools Elements panel, you see the LIVE DOM.

🔗 Prerequisites: You need basic JavaScript knowledge for this track. Complete our JavaScript track or have equivalent experience.`,
        codeExamples: [
          {
            id: "dom-intro-1",
            title: "HTML vs DOM",
            description: "The difference between source and live DOM",
            code: {
              javascript: `// This is the HTML SOURCE (what you see in View Source)
<!-- <div id="app"></div> -->

// But JavaScript can modify the DOM:
document.getElementById('app').innerHTML = '<p>Hello!</p>';
document.body.appendChild(document.createElement('p'));

// Now the DOM has 2 paragraphs, but source file unchanged!`
            },
            explanation: "JavaScript modifies the in-memory DOM, not the original HTML file."
          }
        ],
        callouts: [
          {
            type: "info",
            title: "Why DOM Exists",
            content: "The DOM provides a standardized way for programs to access and modify the structure of a document."
          },
          {
            type: "dom-bridge",
            title: "🔗 Prerequisites",
            content: "You need basic JavaScript knowledge. Complete JavaScript track first."
          }
        ],
        contentBn: htmldomContentBn["htmldom-1-1"]
      },
      {
        id: "htmldom-1-2",
        title: "How the Browser Creates the DOM",
        whyItMatters: "Understanding the rendering pipeline helps you write better, faster web apps.",
        content: `Step-by-step browser rendering pipeline:

1. Download HTML bytes from server
2. Decode bytes to characters (UTF-8)
3. Tokenize characters to tokens (<div>, </p>, "text" etc.)
4. Build nodes from tokens
5. Link nodes into the DOM tree
6. Download CSS, build CSSOM
7. Combine DOM + CSSOM = Render Tree
8. Layout (calculate positions)
9. Paint (draw pixels)

JavaScript can interrupt this pipeline at step 4-5 if a synchronous <script> tag is encountered — that's why scripts should be deferred or placed at end of body.`,
        codeExamples: [
          {
            id: "dom-pipeline-1",
            title: "Pipeline Visualization",
            description: "How HTML becomes the DOM",
            code: {
              javascript: `// Browser does this internally:
const html = '<div>Hello</div>';
// 1. Tokenize → ['<div>', 'Hello', '</div>']
// 2. Build nodes → Element node 'div', Text node 'Hello'
// 3. Link → div.parent = document.body
console.log(document.body.innerHTML);`
            },
            explanation: "The browser handles all these steps automatically."
          }
        ],
        contentBn: htmldomContentBn["htmldom-1-2"]
      },
      {
        id: "htmldom-1-3",
        title: "Node Types — Everything Is a Node",
        whyItMatters: "Every piece of content in a document is a node with a specific type.",
        content: `In the DOM, EVERYTHING is a node:

Node Types:
• ELEMENT_NODE (1): HTML elements (<div>, <p>, <a>)
• TEXT_NODE (3): Text content inside elements
• COMMENT_NODE (8): <!-- HTML comments -->
• DOCUMENT_NODE (9): The document object itself
• DOCUMENT_TYPE_NODE (10): <!DOCTYPE html>
• ATTRIBUTE_NODE (2): Attributes (mostly accessed via element)

Full reference: 1=Element, 2=Attr, 3=Text, 4=CDATASection, 7=ProcessingInstruction, 8=Comment, 9=Document, 10=DocumentType, 11=DocumentFragment`,
        codeExamples: [
          {
            id: "dom-nodetypes-1",
            title: "Checking Node Types",
            description: "Use nodeType to identify nodes",
            code: {
              javascript: `const div = document.createElement('div');
const text = document.createTextNode('Hello');
const comment = document.createComment('comment');

console.log(div.nodeType);   // 1 (ELEMENT_NODE)
console.log(text.nodeType);   // 3 (TEXT_NODE)
console.log(comment.nodeType); // 8 (COMMENT_NODE)
console.log(document.nodeType); // 9 (DOCUMENT_NODE)

console.log(div.nodeName);   // "DIV"
console.log(text.nodeName);   // "#text"`
            },
            explanation: "Use nodeType to distinguish between different node types."
          }
        ],
        contentBn: htmldomContentBn["htmldom-1-3"]
      },
      {
        id: "htmldom-1-4",
        title: "The DOM Tree Structure",
        whyItMatters: "Understanding tree relationships is key to DOM manipulation.",
        content: `document is the root of the DOM tree.

Key properties:
• document.documentElement → <html>
• document.head → <head>
• document.body → <body>

Every element has:
• parentNode, parentElement
• childNodes (NodeList - includes text/comment nodes)
• children (HTMLCollection - only element children!)
• firstChild, lastChild (may be text nodes!)
• nextSibling, previousSibling
• firstElementChild, lastElementChild (always elements)
• nextElementSibling, previousElementSibling

CRITICAL: childNodes includes TEXT nodes (including whitespace!). children only includes ELEMENT nodes.`,
        codeExamples: [
          {
            id: "dom-tree-1",
            title: "Tree Navigation",
            description: "Navigate the DOM tree",
            code: {
              html: `<div id="container">
  <p>First</p>
  <p>Second</p>
</div>`,
              javascript: `const container = document.getElementById('container');

console.log(container.children.length);     // 2 (only <p> elements)
console.log(container.childNodes.length);   // 5 (2 elements + 3 text nodes!)

console.log(container.firstChild.nodeType);  // 3 (text node - whitespace!)
console.log(container.firstElementChild.tagName); // "P"

container.children[0].parentElement;  // Returns the <div>
container.children[0].nextElementSibling;  // Second <p>`
            },
            explanation: "Always use Element variants when you want actual elements."
          }
        ],
        contentBn: htmldomContentBn["htmldom-1-4"]
      },
      {
        id: "htmldom-1-5",
        title: "The Window Object — The Global Context",
        whyItMatters: "window is the global object in the browser — everything lives here.",
        content: `window is the global object in the browser. All global variables become properties of window.

Key window properties:
• window.document → The DOM document
• window.location → Location object (URL info)
• window.history → History object (navigation)
• window.navigator → Navigator object (browser info)
• window.screen → Screen object (display info)
• window.console → Console object
• window.localStorage, window.sessionStorage

window is optional: window.alert() === alert() — both work!

The global scope in a browser script is the window object.`,
        codeExamples: [
          {
            id: "dom-window-1",
            title: "Window Properties",
            description: "Access window properties",
            code: {
              javascript: `// All these are equivalent:
console.log(window.document.URL);
console.log(document.URL);

console.log(window.location.href);
console.log(location.href);

// Global variables become properties
var myVar = 'hello';
console.log(window.myVar);  // "hello"

console.log(window.navigator.userAgent);
console.log(navigator.userAgent);`
            },
            explanation: "window provides access to everything in the browser environment."
          }
        ],
        contentBn: htmldomContentBn["htmldom-1-5"]
      }
    ],
    exercises: [
      {
        id: "ex-1-1",
        title: "Explore Document Properties",
        difficulty: 1,
        description: "Open browser console and explore document properties.",
        requirements: ["Log document.title", "Log document.URL", "Log document.body.childNodes.length"],
        starterCode: { javascript: `// Explore the document object\nconsole.log(document.title);\n// Add more...\n` },
        hints: ["Type these in browser console directly"],
        solution: { javascript: `console.log(document.title);\nconsole.log(document.URL);\nconsole.log(document.body.childNodes.length);\nconsole.log(document.documentElement.nodeName);` },
        solutionExplanation: "Explored key document properties."
      },
      {
        id: "ex-1-2",
        title: "Read Node Properties",
        difficulty: 1,
        description: "Read nodeName and nodeType from documentElement.",
        requirements: ["Log nodeName", "Log nodeType"],
        starterCode: { javascript: `const root = document.documentElement;\nconsole.log(root.nodeName);\n// add nodeType...\n` },
        hints: ["nodeType for element is 1"],
        solution: { javascript: `const root = document.documentElement;\nconsole.log(root.nodeName);  // HTML\nconsole.log(root.nodeType);  // 1` },
        solutionExplanation: "documentElement is the <html> element."
      },
      {
        id: "ex-1-3",
        title: "DOM Tree Traversal",
        difficulty: 2,
        description: "Write a recursive function to traverse the DOM tree.",
        requirements: ["Function takes node and depth", "Logs node info with indentation", "Recursively visits children"],
        starterCode: { javascript: `function traverseDOM(node, depth) {\n  // Your code here\n}\ntraverseDOM(document.body, 0);\n` },
        hints: ["Use childNodes for all children", "Use repeat() for indentation"],
        solution: { javascript: `function traverseDOM(node, depth) {\n  const indent = '  '.repeat(depth);\n  console.log(indent + node.nodeName + ' (' + node.nodeType + ')');\n  if (node.childNodes) {\n    node.childNodes.forEach(child => traverseDOM(child, depth + 1));\n  }\n}\ntraverseDOM(document.body, 0);` },
        solutionExplanation: "Recursively traversed the entire DOM tree."
      }
    ],
    quiz: {
      passingScore: 70,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does DOM stand for?", options: ["Document Object Manager", "Document Object Model", "Dynamic Object Model", "Document Oriented Module"], correctAnswer: 1, explanation: "DOM = Document Object Model.", difficulty: 1 },
        { id: "q2", type: "true-false" as const, question: "The DOM and the HTML source file are always identical.", correctAnswer: false, explanation: "JavaScript can modify the DOM after page loads.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What is nodeType value for an Element?", options: ["0", "1", "3", "9"], correctAnswer: 1, explanation: "Element nodes have nodeType === 1.", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "What does document.body.childNodes return?", options: ["Only elements", "All nodes including text", "Only first child", "String of HTML"], correctAnswer: 1, explanation: "childNodes includes all node types.", difficulty: 1 },
        { id: "q5", type: "true-false" as const, question: "If JavaScript adds 50 elements to DOM, original HTML file changes.", correctAnswer: false, explanation: "JavaScript only modifies in-memory DOM.", difficulty: 1 },
        { id: "q6", type: "fill-blank" as const, question: "The root of the DOM tree is the ___ object.", correctAnswer: "document", explanation: "document is the entry point to the DOM.", difficulty: 1 },
        { id: "q7", type: "spot-the-bug" as const, question: "document.body.firstChild.textContent — bug?", options: ["firstChild might be text node", "textContent doesn't exist", "Need to use getElementById", "No bug"], correctAnswer: 0, explanation: "Use firstElementChild for first element.", difficulty: 1 },
        { id: "q8", type: "mcq" as const, question: "Which DevTools panel shows live DOM?", options: ["Sources", "Network", "Elements", "Console"], correctAnswer: 2, explanation: "Elements panel shows live DOM.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "document", value: "Root of DOM tree" },
      { label: "nodeType", value: "1=Element, 3=Text" },
      { label: "children", value: "Only element children" },
      { label: "childNodes", value: "All nodes (includes text)" }
    ]
  }
];

// Generate remaining chapters 2-60
for (let ch = 2; ch <= 60; ch++) {
  const prevNum = ch - 1;
  const partLabel = ch <= 5 ? "Part 1: Understanding the DOM" :
                    ch <= 14 ? "Part 2: Element Object Reference" :
                    ch <= 28 ? "Part 3: Events Complete" :
                    ch <= 38 ? "Part 4: Window Object" :
                    ch <= 50 ? "Part 5: Advanced DOM" :
                    "Part 6: Projects";

  const chapterTitles: Record<number, string> = {
    2: "The Document Object — Complete Reference",
    3: "Selecting Elements — All Methods Deep Dive",
    4: "Creating and Modifying DOM Elements",
    5: "Attributes, Classes, and Styles",
    6: "Element Properties — Complete Reference",
    7: "Element Methods — Complete Reference",
    8: "getBoundingClientRect and Element Geometry",
    9: "Node Object — Complete Reference",
    10: "HTMLElement — Extended Properties",
    11: "Form Elements — DOM Reference",
    12: "Table Elements — DOM Reference",
    13: "Media Elements — Audio/Video DOM",
    14: "Style Object — CSSStyleDeclaration",
    15: "The Event System — How Events Work",
    16: "MouseEvent — Complete Reference",
    17: "KeyboardEvent — Complete Reference",
    18: "InputEvent and Change Events",
    19: "FormEvent — submit, reset, formdata",
    20: "FocusEvent — focus, blur, focusin",
    21: "ScrollEvent and WheelEvent",
    22: "TouchEvent — Mobile Events",
    23: "PointerEvent — Unified Input",
    24: "DragEvent — Drag and Drop API",
    25: "ClipboardEvent — Copy, Cut, Paste",
    26: "CustomEvent — Creating Events",
    27: "Event Object — Complete Reference",
    28: "MutationObserver — Watching Changes",
    29: "Window Properties — Complete Reference",
    30: "Window Methods — Complete Reference",
    31: "Location Object — Complete Reference",
    32: "History Object — Complete Reference",
    33: "Navigator Object — Complete Reference",
    34: "Screen Object — Complete Reference",
    35: "Console Object — Complete Reference",
    36: "Storage — localStorage and sessionStorage",
    37: "Performance API",
    38: "Clipboard, Geolocation APIs",
    39: "Range and Selection",
    40: "Shadow DOM — Web Component Isolation",
    41: "Intersection Observer — Complete Guide",
    42: "ResizeObserver and MutationObserver",
    43: "DOM Manipulation Performance",
    44: "requestAnimationFrame — Smooth Animations",
    45: "Templates and DocumentFragment",
    46: "XML and Namespace Methods",
    47: "NodeIterator and TreeWalker",
    48: "XPath in the DOM",
    49: "Fullscreen and Pointer Lock APIs",
    50: "Web Animations API",
    51: "Project: DOM Task Manager",
    52: "Project: Virtual Keyboard",
    53: "Project: Rich Text Editor",
    54: "Project: Custom Dropdown",
    55: "Project: Image Gallery with Lightbox",
    56: "Project: Real-time DOM Inspector",
    57: "Challenge Set: Selection and Traversal",
    58: "Challenge Set: Events and Delegation",
    59: "Challenge Set: Advanced DOM Observers",
    60: "Mastery Recap + Certificate Prep"
  };

  htmldomChapters.push({
    id: `htmldom-${ch}`,
    number: ch,
    partLabel,
    title: chapterTitles[ch] || `DOM Chapter ${ch}`,
    subtitle: `DOM ${chapterTitles[ch] || "topic"}`,
    difficulty: ch <= 5 ? "Beginner" :
                ch <= 15 ? "Intermediate" :
                ch <= 28 ? "Advanced" :
                ch <= 38 ? "Intermediate" :
                "Expert",
    estimatedMinutes: 25 + (ch * 0.2),
    xpReward: Math.min(150, 50 + ch),
    prerequisites: [`htmldom-${prevNum}`],
    learningObjectives: [`Master DOM ${chapterTitles[ch] || "concept"}`],
    sections: [
      {
        id: `htmldom-${ch}-1`,
        title: chapterTitles[ch] || `Topic ${ch}`,
        whyItMatters: "Understanding this DOM concept is essential for building interactive web applications.",
        content: `This chapter covers DOM ${chapterTitles[ch] || "concepts"}. The DOM provides the programming interface for web documents.

Key points:
• Every DOM property and method has specific use cases
• Performance considerations vary by method
• Modern APIs simplify common tasks
• Understanding the DOM tree is fundamental`,
        codeExamples: [
          {
            id: `htmldom-${ch}-ex1`,
            title: "Example",
            description: "DOM demo",
            code: {
              html: `<div id="app"></div>`,
              javascript: `// DOM Chapter ${ch}: ${chapterTitles[ch] || "topic"}
const el = document.getElementById('app');
console.log(el);
// More code examples in full chapter...`
            },
            explanation: "DOM manipulation is the foundation of web interactivity."
          }
        ],
        contentBn: htmldomContentBn[`htmldom-${ch}-1`]
      }
    ],
    quiz: {
      passingScore: 70,
      questions: [
        { id: `q1-${ch}`, type: "mcq" as const, question: `DOM ${chapterTitles[ch] || "feature"} is important because?`, options: ["It's required", "It enables interactivity", "It's optional", "It doesn't matter"], correctAnswer: 1, explanation: "DOM enables dynamic web pages.", difficulty: 1 },
        { id: `q2-${ch}`, type: "true-false" as const, question: "The DOM is a tree structure.", correctAnswer: true, explanation: "DOM represents document as a tree of nodes.", difficulty: 1 },
        { id: `q3-${ch}`, type: "spot-the-bug" as const, question: "Common issue in this topic?", options: ["Wrong method usage", "Performance issue", "Both are common", "No common issues"], correctAnswer: 2, explanation: "DOM operations can have performance implications.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "document", value: "Entry point" },
      { label: "getElementById", value: "Fastest selector" },
      { label: "querySelector", value: "CSS selector" },
      { label: "addEventListener", value: "Event handling" }
    ]
  });
}

export const htmldomTrack: Track = {
  id: "htmldom",
  title: "HTML DOM",
  titleBn: "HTML DOM",
  tagline: "Master the bridge between HTML and JavaScript",
  taglineBn: "HTML এবং JavaScript-এর মধ্যকার সেতু মাস্টার করুন",
  icon: "🌳",
  colorVar: "htmldom",
  totalChapters: 60,
  estimatedHours: 55,
  chapters: htmldomChapters,
  brandColor: "#F0DB4F",
  glowColor: "rgba(240, 219, 79, 0.4)"
};