import type { Track, Chapter } from "./types";

const jqueryChapters: Chapter[] = [
  {
    id: "jquery-1",
    number: 1,
    partLabel: "Part 1: jQuery Fundamentals",
    title: "What Is jQuery and Why Was It Created?",
    subtitle: "Introduction to jQuery",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: [],
    learningObjectives: ["Understand what jQuery is", "Know jQuery's history and purpose", "Understand why jQuery was created"],
    sections: [
      {
        id: "jquery-1-1",
        title: "What Is jQuery?",
        whyItMatters: "jQuery is a fast, small, and feature-rich JavaScript library that simplifies DOM manipulation, event handling, and AJAX.",
        content: `jQuery is a JavaScript library created in 2006 by John Resig. It was designed to make it easier to write JavaScript code that works across different browsers.

At its core, jQuery is a wrapper around JavaScript that provides a simpler, more consistent API for common web development tasks.

Why jQuery was created:
- **Browser inconsistencies**: In the mid-2000s, different browsers had different APIs for the same functionality. jQuery provided a unified interface.
- **Verbose DOM code**: JavaScript's DOM API required many lines of code to accomplish simple tasks. jQuery simplified this.
- **Cross-browser support**: jQuery handled all the compatibility issues so developers didn't have to.

**The jQuery Philosophy**: "Write less, do more"

Instead of writing:
\`\`\`javascript
document.getElementById('myElement').style.display = 'none';
\`\`\`

jQuery allows:
\`\`\`javascript
$('#myElement').hide();
\`\`\`

This simplicity made jQuery incredibly popular and it became the most widely used JavaScript library for many years.`,
        codeExamples: [
          {
            id: "jquery-1-ex1",
            title: "jQuery Hello World",
            description: "Basic jQuery example",
            code: { jquery: "$(document).ready(function() {\n  console.log('jQuery is loaded and ready!');\n  $('#message').text('Hello from jQuery!');\n});" },
            explanation: "The $(document).ready() function ensures the DOM is fully loaded before executing code."
          },
          {
            id: "jquery-1-ex2",
            title: "Vanilla JS vs jQuery",
            description: "Comparison of approaches",
            code: { 
              javascript: "// Vanilla JavaScript\ndocument.getElementById('btn').addEventListener('click', function() {\n  var elements = document.querySelectorAll('.item');\n  for (var i = 0; i < elements.length; i++) {\n    elements[i].style.color = 'red';\n  }\n});",
              jquery: "// jQuery\n$('#btn').click(function() {\n  $('.item').css('color', 'red');\n});"
            },
            explanation: "jQuery significantly reduces the amount of code needed to accomplish the same tasks."
          }
        ],
        callouts: [
          {
            type: "info",
            title: "JavaScript Prerequisite",
            content: "This track assumes you already know HTML, CSS, and JavaScript. If you need to learn JavaScript first, visit the JavaScript track on CodeMastery."
          },
          {
            type: "tip",
            title: "Modern Context",
            content: "While jQuery is still widely used, modern frameworks like React, Vue, and Angular have reduced its relevance for new projects. However, many legacy applications still use jQuery."
          }
        ]
      },
      {
        id: "jquery-1-2",
        title: "The jQuery Ecosystem",
        whyItMatters: "Understanding the broader jQuery ecosystem helps you leverage its full potential.",
        content: `The jQuery ecosystem includes several components:

**Core jQuery**: The main library providing DOM manipulation, event handling, and AJAX.

**jQuery UI**: A curated set of user interactions, widgets, and effects. Includes things like:
- Draggable and droppable elements
- Datepickers
- Sliders
- Accordions
- Dialogs

**jQuery Mobile**: A touch-optimized framework for mobile devices (now deprecated in favor of other solutions).

**Thousands of Plugins**: The jQuery plugin ecosystem is massive. There are plugins for:
- Carousels and sliders
- Data tables
- Form validation
- Charts and graphs
- Image galleries
- And much more

**jQuery Migrate**: A plugin that helps migrate older jQuery code to newer versions by restoring deprecated features.

The community around jQuery has been instrumental in its success, with thousands of plugins available.`,
        codeExamples: [
          {
            id: "jquery-1-ex3",
            title: "Loading jQuery UI",
            description: "Adding jQuery UI to a page",
            code: { html: "<!-- jQuery Core -->\n<script src=\"https://code.jquery.com/jquery-3.7.1.min.js\"></script>\n\n<!-- jQuery UI -->\n<link rel=\"stylesheet\" href=\"https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css\">\n<script src=\"https://code.jquery.com/ui/1.13.2/jquery-ui.min.js\"></script>\n\n<!-- Initialize a datepicker -->\n<input type=\"text\" id=\"datepicker\">\n\n<script>\n$(function() {\n  $('#datepicker').datepicker();\n});\n</script>" },
            explanation: "jQuery UI extends jQuery with interactive widgets and effects."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What is jQuery?", options: ["A programming language", "A JavaScript library", "A CSS framework", "A database"], correctAnswer: 1, explanation: "jQuery is a JavaScript library that simplifies DOM manipulation and cross-browser compatibility." },
        { id: "q2", type: "true-false", question: "jQuery can only be used with vanilla JavaScript.", correctAnswer: false, explanation: "jQuery IS JavaScript - it's a library built on top of JavaScript." },
        { id: "q3", type: "mcq", question: "What does the jQuery slogan 'Write less, do more' mean?", options: ["Write fewer files", "Use less server resources", "Achieve more functionality with less code", "Minify your code"], correctAnswer: 2, explanation: "The slogan refers to achieving more functionality with significantly less code than vanilla JavaScript." },
        { id: "q4", type: "fill-blank", question: "The $ symbol in jQuery is an alias for the _____ object.", correctAnswer: "jQuery", explanation: "$ is simply an alias for the jQuery object. You can use either $ or jQuery." },
        { id: "q5", type: "mcq", question: "Which company originally created jQuery?", options: ["Google", "Microsoft", "jQuery Foundation", "Mozilla"], correctAnswer: 2, explanation: "jQuery was created by John Resig and is now maintained by the jQuery Foundation." },
        { id: "q6", type: "true-false", question: "jQuery is still relevant for modern web development.", correctAnswer: true, explanation: "While less common in new projects, jQuery remains relevant for maintaining legacy applications and understanding older codebases." },
        { id: "q7", type: "mcq", question: "What is jQuery UI?", options: ["A JavaScript framework", "A user interface library built on jQuery", "A CSS framework", "A database"], correctAnswer: 1, explanation: "jQuery UI is a collection of interactive widgets, effects, and utilities built on top of jQuery." },
        { id: "q8", type: "spot-the-bug", question: "Find the error in: $('button').click(function() { alert('Clicked!'); });", code: "$('button').click(function() { alert('Clicked!'); });", options: ["Missing semicolon", "Wrong selector syntax", "click method doesn't exist", "No error"], correctAnswer: 3, explanation: "This code is correct. The click() method is a shorthand for bind('click')." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "jQuery", value: "JavaScript library for DOM manipulation" },
      { label: "$", value: "jQuery object alias" },
      { label: "DOM", value: "Document Object Model" },
      { label: "Plugin", value: "Extension to jQuery functionality" }
    ]
  },
  {
    id: "jquery-2",
    number: 2,
    partLabel: "Part 1: jQuery Fundamentals",
    title: "Setting Up jQuery",
    subtitle: "Installation and Configuration",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["jquery-1"],
    learningObjectives: ["Install jQuery via CDN", "Install jQuery via npm", "Set up jQuery with a local file", "Understand jQuery versions"],
    sections: [
      {
        id: "jquery-2-1",
        title: "Including jQuery via CDN",
        whyItMatters: "CDN (Content Delivery Network) is the most common way to include jQuery in web projects.",
        content: `A CDN is a network of servers that delivers content to users based on their geographic location. Using a CDN for jQuery has several advantages:

**Benefits of CDN:**
- No need to download and host jQuery files
- Often faster loading (servers closer to users)
- Many websites use the same CDN, so users may already have jQuery cached
- Automatic version updates

**Popular CDNs for jQuery:**
- code.jquery.com (official jQuery CDN)
- cdnjs.cloudflare.com
- ajax.googleapis.com

**Important**: Always use the minified version in production (jquery-3.7.1.min.js) for smaller file size. Use the uncompressed version (jquery-3.7.1.js) only during development for debugging.`,
        codeExamples: [
          {
            id: "jquery-2-ex1",
            title: "Including jQuery from CDN",
            description: "Basic CDN setup",
            code: { html: "<!-- Minified version (recommended for production) -->\n<script src=\"https://code.jquery.com/jquery-3.7.1.min.js\"></script>\n\n<!-- Uncompressed version (for development/debugging) -->\n<!-- <script src=\"https://code.jquery.com/jquery-3.7.1.js\"></script> -->\n\n<!-- Your custom script -->\n<script>\n  $(document).ready(function() {\n    console.log('jQuery is ready!');\n  });\n</script>" },
            explanation: "Place the jQuery script tag in the head or before the closing body tag."
          }
        ],
        callouts: [
          {
            type: "warning",
            title: "jQuery Version Matters",
            content: "Different versions may have different APIs. Always check plugin compatibility with your jQuery version."
          }
        ]
      },
      {
        id: "jquery-2-2",
        title: "Local Installation",
        whyItMatters: "Sometimes you need jQuery offline or want full control over the library.",
        content: `For local installation, you can either download jQuery or install it via package managers.

**Download from jQuery.com:**
1. Go to jquery.com/download
2. Download the latest version
3. Place the file in your project (e.g., /js/jquery.min.js)
4. Link to it in your HTML

**Using npm:**
\`\`\`bash
npm install jquery
\`\`\`

Then import in your JavaScript:
\`\`\`javascript
import $ from 'jquery';
\`\`\`

**Using yarn:**
\`\`\`bash
yarn add jquery
\`\`\`

**CDN vs Local:**

| Aspect | CDN | Local |
|--------|-----|-------|
| Setup time | Fast | Requires download |
| Offline support | No | Yes |
| Control | Less | Full |
| Updates | Automatic | Manual |`,
        codeExamples: [
          {
            id: "jquery-2-ex2",
            title: "Local jQuery Setup",
            description: "Using local jQuery file",
            code: { html: "<!-- Assume jquery.min.js is in js folder -->\n<script src=\"js/jquery.min.js\"></script>\n\n<script>\n  $(document).ready(function() {\n    $('.content').append('<p>jQuery loaded locally!</p>');\n  });\n</script>" },
            explanation: "Local files work without internet connection but require manual updates."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What is a CDN?", options: ["Content Delivery Network", "Computer Development Network", "Code Documentation Node", "Central Data Network"], correctAnswer: 0, explanation: "CDN stands for Content Delivery Network, a system of distributed servers that deliver content based on user location." },
        { id: "q2", type: "fill-blank", question: "The file jquery-3.7.1.min.js is the _____ version.", correctAnswer: "minified", explanation: "Minified files have whitespace and comments removed to reduce file size." },
        { id: "q3", type: "mcq", question: "Which npm command installs jQuery?", options: ["npm get jquery", "npm install jquery", "npm add jquery", "npm fetch jquery"], correctAnswer: 1, explanation: "npm install jquery is the correct command to install jQuery as a dependency." },
        { id: "q4", type: "true-false", question: "You should use the uncompressed jQuery version in production.", correctAnswer: false, explanation: "Use the minified version in production for smaller file size and faster loading." },
        { id: "q5", type: "mcq", question: "Where should you place the jQuery script tag?", options: ["Only in head", "Only at the end of body", "Either in head or before closing body", "After the body tag"], correctAnswer: 2, explanation: "jQuery can be placed in the head or before the closing body tag. Placing it at the end ensures DOM is ready." },
        { id: "q6", type: "spot-the-bug", question: "What could cause jQuery not to work?", code: "<script src=\"jquery.min.js\"></script>", options: ["File not found", "Wrong syntax", "File not loaded before custom script", "All of the above"], correctAnswer: 3, explanation: "Any of these issues could prevent jQuery from working properly." },
        { id: "q7", type: "mcq", question: "Which CDN is the official jQuery CDN?", options: ["cdnjs.com", "code.jquery.com", "ajax.googleapis.com", "unpkg.com"], correctAnswer: 1, explanation: "code.jquery.com is the official jQuery CDN hosted by the jQuery Foundation." },
        { id: "q8", type: "fill-blank", question: "The $ symbol in jQuery is an alias for the _____ object.", correctAnswer: "jQuery", explanation: "$ is just a shorthand for the jQuery object." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "CDN", value: "Content Delivery Network" },
      { label: "min.js", value: "Minified version (production)" },
      { label: ".js", value: "Uncompressed (development)" },
      { label: "npm install", value: "Install via npm" }
    ]
  },
  {
    id: "jquery-3",
    number: 3,
    partLabel: "Part 1: jQuery Fundamentals",
    title: "jQuery Syntax",
    subtitle: "Understanding jQuery Selectors and Methods",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 60,
    prerequisites: ["jquery-2"],
    learningObjectives: ["Understand the $() function", "Learn jQuery selector syntax", "Chain jQuery methods", "Understand jQuery return values"],
    sections: [
      {
        id: "jquery-3-1",
        title: "The jQuery Function: $()",
        whyItMatters: "The $() function is the entry point to all jQuery functionality.",
        content: `The $() function (also written as jQuery()) is the core of jQuery. It accepts different types of arguments and returns a jQuery object containing matched elements.

**What $() accepts:**

1. **CSS Selector**: $('div'), $('#myId'), $('.myClass')
2. **HTML String**: $('<div>Hello</div>')
3. **DOM Element**: $(document), $(myElement)
4. **Function**: $(function() { ... }) - shorthand for $(document).ready()
5. **jQuery Object**: $($('#myElement'))

**The jQuery Object:**
When you call $(), it returns a jQuery object. This is NOT the same as a DOM element, but a collection of zero or more DOM elements with jQuery methods added to it.

\`\`\`javascript
// Returns jQuery object
var $elements = $('.my-class');

// This is a jQuery object, not a DOM element
console.log($elements); // jQuery object with length property
\`\`\`

The jQuery object has many methods like .hide(), .show(), .css(), .addClass(), etc.`,
        codeExamples: [
          {
            id: "jquery-3-ex1",
            title: "Different $() Usages",
            description: "Various ways to use jQuery function",
            code: { jquery: "// CSS Selector - select elements by class\n$('.btn').addClass('active');\n\n// ID Selector - select element by ID\n$('#header').css('background', 'blue');\n\n// Tag Selector - select elements by tag\n$('p').hide();\n\n// Create new element\n$('<div>').addClass('new-element').appendTo('body');\n\n// Wrap existing DOM element\n$(myDomElement).addClass('wrapped');\n\n// Document ready shorthand\n$(function() {\n  // This runs when DOM is ready\n});" },
            explanation: "The $() function is incredibly versatile and accepts multiple input types."
          }
        ],
        callouts: [
          {
            type: "tip",
            title: "jQuery vs DOM",
            content: "Remember: $(selector) returns a jQuery object, not a DOM element. Use [0] or .get(0) to get the underlying DOM element."
          }
        ]
      },
      {
        id: "jquery-3-2",
        title: "Chaining Methods",
        whyItMatters: "Method chaining is a powerful feature that makes jQuery code concise and readable.",
        content: `jQuery methods return the jQuery object, allowing you to chain multiple methods together.

**Basic Chaining:**
\`\`\`javascript
$('#myElement')
  .addClass('highlight')
  .css('color', 'red')
  .slideDown();
\`\`\`

This is equivalent to:
\`\`\`javascript
$('#myElement').addClass('highlight');
$('#myElement').css('color', 'red');
$('#myElement').slideDown();
\`\`\`

**Benefits of Chaining:**
- Less code to write
- More readable (when properly formatted)
- Better performance (avoids repeated selector lookups)

**Breaking the Chain:**
Some methods return a different value (like .val() or .text() without arguments). These break the chain. You can restore the chain by storing the result or using .end().

\`\`\`javascript
$('#myElement')
  .addClass('highlight')
  .text('New text')  // Returns string, chain broken
  .addClass('error') // This won't work as expected
\`\`\``,
        codeExamples: [
          {
            id: "jquery-3-ex2",
            title: "Method Chaining Examples",
            description: "Demonstrating chainable methods",
            code: { jquery: "// Proper chaining\n$('#card')\n  .addClass('featured')\n  .css('border', '2px solid gold')\n  .slideDown(300)\n  .animate({ opacity: 1 }, 500);\n\n// Breaking and restoring chain\n$('#form')\n  .find('input')\n  .addClass('required')\n  .end()  // Returns to $('#form')\n  .addClass('validated');" },
            explanation: "The .end() method restores the previous jQuery object in the chain."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What does $('div') return?", options: ["A DOM element", "A jQuery object", "A string", "An array"], correctAnswer: 1, explanation: "$('div') returns a jQuery object containing all matching div elements." },
        { id: "q2", type: "fill-blank", question: "The $() function is an alias for the _____ object.", correctAnswer: "jQuery", explanation: "$ is just a shorter alias for jQuery." },
        { id: "q3", type: "mcq", question: "What allows method chaining in jQuery?", options: ["Each method returns a new jQuery object", "Methods are synchronous", "jQuery uses promises", "Methods modify the original element"], correctAnswer: 0, explanation: "Methods return the jQuery object, allowing you to call more methods on the result." },
        { id: "q4", type: "true-false", question: "$('#myId') and document.getElementById('myId') return the same thing.", correctAnswer: false, explanation: "$('#myId') returns a jQuery object, while getElementById returns a DOM element." },
        { id: "q5", type: "mcq", question: "Which method restores the previous jQuery object in a chain?", options: [".back()", ".prev()", ".end()", ".reset()"], correctAnswer: 2, explanation: ".end() pops the jQuery object back to its previous state in the chain." },
        { id: "q6", type: "spot-the-bug", question: "What's wrong with this chain?", code: "$('button').click(fn).text('New').addClass('active');", options: ["Nothing", "click() breaks chain", "text() breaks chain", "addClass() not valid"], correctAnswer: 2, explanation: "text() without arguments returns the element's text content, breaking the chain." },
        { id: "q7", type: "mcq", question: "How do you get the underlying DOM element from a jQuery object?", options: [".dom()", ".get(0)", ".element()", ".toDOM()"], correctAnswer: 1, explanation: ".get(0) or [0] returns the underlying DOM element from a jQuery object." },
        { id: "q8", type: "fill-blblank", question: "The $(function() { }) is shorthand for $(document)._____().", correctAnswer: "ready", explanation: "$(function()) is a shorthand for $(document).ready(function())." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "$()", value: "jQuery selector function" },
      { label: ".end()", value: "Restore previous jQuery object" },
      { label: ".get(0)", value: "Get DOM element from jQuery object" },
      { label: "Chaining", value: "Multiple methods in sequence" }
    ]
  },
  {
    id: "jquery-4",
    number: 4,
    partLabel: "Part 1: jQuery Fundamentals",
    title: "Selectors",
    subtitle: "Selecting DOM Elements",
    difficulty: "Beginner" as const,
    estimatedMinutes: 35,
    xpReward: 70,
    prerequisites: ["jquery-3"],
    learningObjectives: ["Use CSS selectors with jQuery", "Use jQuery-specific selectors", "Combine selectors", "Filter selected elements"],
    sections: [
      {
        id: "jquery-4-1",
        title: "Basic CSS Selectors",
        whyItMatters: "jQuery supports all CSS selectors plus additional custom selectors.",
        content: `jQuery supports all CSS 1-3 selectors, making it easy to select elements exactly how you'd select them in CSS.

**Element Selector:**
\`\`\`javascript
$('div')        // All <div> elements
$('p')          // All <p> elements
$('a')          // All <a> elements
\`\`\`

**Class Selector:**
\`\`\`javascript
$('.btn')        // All elements with class="btn"
$('.active')    // All elements with class="active"
\`\`\`

**ID Selector:**
\`\`\`javascript
$('#header')     // Element with id="header"
$('#nav-menu')   // Element with id="nav-menu"
\`\`\`

**Universal Selector:**
\`\`\`javascript
$('*')          // All elements
\`\`\`

**Attribute Selectors:**
\`\`\`javascript
$('[href]')             // Elements with href attribute
$('[type="text"]')      // Elements with type="text"
$('[data-value!="0"]') // Elements where data-value is not 0
$('[href^="https"]')   // href starts with https
$('[href$=".pdf"]')     // href ends with .pdf
$('[href*="example"]') // href contains example
\`\`\``,
        codeExamples: [
          {
            id: "jquery-4-ex1",
            title: "Basic Selector Examples",
            description: "Using CSS selectors in jQuery",
            code: { jquery: "// Select all buttons\n$('button');\n\n// Select element with ID\n$('#submit-btn');\n\n// Select all elements with class\n$('.nav-link');\n\n// Select all <a> tags with class 'external'\n$('a.external');\n\n// Select all inputs with type 'text'\n$('input[type=\"text\"]');\n\n// Select all list items in unordered lists\n$('ul li');\n\n// Select direct children\n$('ul > li');" },
            explanation: "All standard CSS selectors work in jQuery exactly as they do in CSS."
          }
        ]
      },
      {
        id: "jquery-4-2",
        title: "jQuery Custom Selectors",
        whyItMatters: "jQuery provides additional selectors that don't exist in CSS but are very useful.",
        content: `jQuery adds several powerful custom selectors:

**:eq(n)** - Select element at index n (0-based):
\`\`\`javascript
$('li:eq(2)')  // Third li element (0,1,2)
\`\`\`

**:gt(n)** / **:lt(n)** - Greater than / less than:
\`\`\`javascript
$('li:gt(2)')   // All li after index 2
$('li:lt(2)')   // First two li elements
\`\`\`

**:first** / **:last** - First/last element:
\`\`\`javascript
$('li:first')    // First li element
$('tr:last')    // Last tr element
\`\`\`

**:odd** / **:even** - Odd/even indexed elements:
\`\`\`javascript
$('tr:odd')     // Odd rows (1,3,5...)
$('tr:even')    // Even rows (0,2,4...)
\`\`\`

**:header** - All header elements (h1-h6):
\`\`\`javascript
$(':header')    // All h1, h2, h3, etc.
\`\`\`

**:animated** - Currently animated elements:
\`\`\`javascript
$(':animated')   // Elements being animated
\`\`\`

**:contains(text)** - Elements containing text:
\`\`\`javascript
$('p:contains(\"Hello\")')  // <p> elements containing Hello
\`\`\`

**:has(selector)** - Elements containing matching descendants:
\`\`\`javascript
$('div:has(p)')    // divs that contain <p> elements
\`\`\``,
        codeExamples: [
          {
            id: "jquery-4-ex2",
            title: "jQuery Custom Selectors",
            description: "Using jQuery's extended selectors",
            code: { jquery: "// Get the first paragraph\n$('p:first');\n\n// Get the third item in a list\n$('li:eq(2)');\n\n// Get all even rows for striping\n$('tr:even').addClass('even-row');\n\n// Get elements containing specific text\n$('div:contains(\"Welcome\")').css('color', 'blue');\n\n// Get forms with password inputs\n$('form:has(input[type=\"password\"])');\n\n// Get all headers\n$(':header').addClass('heading');" },
            explanation: "These custom selectors make complex selections much easier."
          }
        ],
        callouts: [
          {
            type: "common-mistake",
            title: "Zero-Based Index",
            content: "Remember: :eq(), :gt(), :lt() use zero-based indexing. :eq(0) is the first element!"
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "Which selector selects all elements with class 'active'?", options: ["$('#active')", "$('.active')", "$('[active]')", "$(*active)"], correctAnswer: 1, explanation: "Class selectors use a dot (.) prefix in jQuery, just like in CSS." },
        { id: "q2", type: "fill-blank", question: "The selector $('li:eq(2)') selects the _____ li element.", correctAnswer: "third", explanation: "Zero-based indexing means eq(0) is first, eq(1) is second, eq(2) is third." },
        { id: "q3", type: "mcq", question: "Which selector finds elements containing specific text?", options: [":text", ":contains()", ":has()", ":find()"], correctAnswer: 1, explanation: ":contains(text) selects elements that contain the specified text." },
        { id: "q4", type: "true-false", question: "jQuery supports all CSS selectors.", correctAnswer: true, explanation: "jQuery supports CSS selectors from CSS 1 through CSS 3." },
        { id: "q5", type: "mcq", question: "What does $('[href$=\".pdf\"]') select?", options: ["href containing .pdf", "href starting with .pdf", "href ending with .pdf", "href equal to .pdf"], correctAnswer: 2, explanation: "The $= attribute selector means 'ends with'." },
        { id: "q6", type: "spot-the-bug", question: "Why might $('li:eq(5)') not work on a list with 5 items?", options: ["Index out of range", "Missing quotes", "Wrong selector syntax", "li not defined"], correctAnswer: 0, explanation: "With 5 items, valid indices are 0-4. Index 5 is out of range." },
        { id: "q7", type: "mcq", question: "Which selects all header elements (h1, h2, h3...)?", options: [":heading", ":header", ":h1", ":head"], correctAnswer: 1, explanation: ":header is a jQuery selector that matches h1 through h6 elements." },
        { id: "q8", type: "fill-blank", question: "The selector $('div:has(p)') selects _____ that contain _____ elements.", correctAnswer: "divs, p", explanation: ":has() selects elements that contain matching descendants." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: ".class", value: "Select by class" },
      { label: "#id", value: "Select by ID" },
      { label: ":eq(n)", value: "Select by index" },
      { label: ":contains()", value: "Select by text content" }
    ]
  },
  {
    id: "jquery-5",
    number: 5,
    partLabel: "Part 1: jQuery Fundamentals",
    title: "Events",
    subtitle: "Handling User Interactions",
    difficulty: "Beginner" as const,
    estimatedMinutes: 40,
    xpReward: 80,
    prerequisites: ["jquery-4"],
    learningObjectives: ["Bind event handlers with on()", "Use event shorthand methods", "Handle event data", "Understand event object"],
    sections: [
      {
        id: "jquery-5-1",
        title: "Event Binding Basics",
        whyItMatters: "Events are the foundation of interactive web pages.",
        content: `jQuery makes event handling simple and consistent across browsers.

**The on() Method:**
The primary way to attach event handlers in jQuery:

\`\`\`javascript
$('#myButton').on('click', function(event) {
  console.log('Button clicked!');
});
\`\`\`

**Event Shorthands:**
jQuery provides shortcuts for common events:

\`\`\`javascript
$('#myButton').click(function() { ... });      // click
$('#myButton').hover(function() { ... });     // mouseenter + mouseleave
$('#myButton').focus(function() { ... });     // focus
$('#myButton').blur(function() { ... });      // blur
$('#myButton').submit(function() { ... });   // form submit
$('#myButton').keyup(function() { ... });     // keyboard
$('#myButton').change(function() { ... });   // input change
\`\`\`

**One-time Events:**
Use .one() for events that should only fire once:

\`\`\`javascript
$('#myButton').one('click', function() {
  console.log('This will only fire once!');
});
\`\`\``,
        codeExamples: [
          {
            id: "jquery-5-ex1",
            title: "Event Binding Methods",
            description: "Different ways to handle events",
            code: { jquery: "// Using on() method\n$('#btn').on('click', function(e) {\n  console.log('Clicked!');\n});\n\n// Using shorthand\n$('#btn').click(function() {\n  console.log('Clicked!');\n});\n\n// Multiple events\n$('#btn').on('click mouseenter', function(e) {\n  console.log('Event:', e.type);\n});\n\n// Event with data\n$('#btn').on('click', {name: 'John'}, function(e) {\n  console.log('Hello, ' + e.data.name);\n});\n\n// One-time event\n$('#btn').one('click', function() {\n  alert('This alert shows only once!');\n});" },
            explanation: "All these methods attach event listeners, just with different convenience levels."
          }
        ]
      },
      {
        id: "jquery-5-2",
        title: "The Event Object",
        whyItMatters: "The event object provides valuable information and control over event behavior.",
        content: `When an event handler is called, jQuery passes an event object with useful properties and methods.

**Common Event Properties:**

\`\`\`javascript
$('#element').click(function(e) {
  e.type        // 'click'
  e.target      // The element that triggered the event
  e.currentTarget // The element the handler is bound to
  e.preventDefault() // Prevent default behavior
  e.stopPropagation() // Stop event bubbling
  e.stopImmediatePropagation() // Stop other handlers
  e.pageX       // Mouse X position relative to document
  e.pageY       // Mouse Y position relative to document
  e.which       // Key or button pressed (1=left, 2=middle, 3=right)
  e.key         // Key pressed (for keyboard events)
});
\`\`\`

**preventDefault() vs stopPropagation():**
- preventDefault(): Stops the default action (like following a link)
- stopPropagation(): Stops the event from bubbling up to parent elements

\`\`\`javascript
$('a').click(function(e) {
  e.preventDefault(); // Don't follow the link
  console.log('Link clicked but not followed');
});
\`\`\``,
        codeExamples: [
          {
            id: "jquery-5-ex2",
            title: "Event Object Properties",
            description: "Using the event object",
            code: { jquery: "$('.btn').click(function(e) {\n  // Log event type\n  console.log('Event type:', e.type);\n  \n  // Get clicked element\n  console.log('Target:', e.target.className);\n  \n  // Prevent default behavior\n  e.preventDefault();\n  \n  // Stop propagation\n  e.stopPropagation();\n});\n\n// Keyboard event example\n$(document).keydown(function(e) {\n  console.log('Key pressed:', e.key);\n  console.log('Key code:', e.which);\n  \n  // Ctrl+S to save\n  if (e.ctrlKey && e.key === 's') {\n    e.preventDefault();\n    saveData();\n  }\n});" },
            explanation: "The event object is crucial for building interactive features."
          }
        ],
        callouts: [
          {
            type: "pro-tip",
            title: "Event Delegation",
            content: "For dynamically added elements, use event delegation with .on() - more on this in Chapter 21!"
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What is the main method for attaching event handlers in jQuery?", options: [".bind()", ".on()", ".attach()", ".addEvent()"], correctAnswer: 1, explanation: ".on() is the primary method for attaching event handlers in jQuery." },
        { id: "q2", type: "fill-blank", question: "The _____ method prevents the default browser behavior.", correctAnswer: "preventDefault", explanation: "e.preventDefault() stops the default action of an element." },
        { id: "q3", type: "mcq", question: "What does e.stopPropagation() do?", options: ["Prevents page reload", "Stops event bubbling to parent elements", "Prevents default form submission", "Stops all animations"], correctAnswer: 1, explanation: "stopPropagation() prevents the event from bubbling up to parent elements." },
        { id: "q4", type: "true-false", question: "$('#btn').click(fn) is the same as $('#btn').on('click', fn).", correctAnswer: true, explanation: "Event shorthand methods like .click() are aliases for .on('click', fn)." },
        { id: "q5", type: "mcq", question: "How do you pass data to an event handler?", options: ["$('#btn').click('data', fn)", "$('#btn').on('click', data, fn)", "$('#btn').click({data: value}, fn)", "$('#btn').bind('click', {data: value})"], correctAnswer: 1, explanation: "The second argument to .on() can be data object accessible via event.data." },
        { id: "q6", type: "spot-the-bug", question: "Why won't this work for dynamically added elements?", code: "$('.dynamic-btn').click(function() {...});", options: ["Syntax error", "Event not supported", "Elements don't exist when binding", "Missing quotes"], correctAnswer: 2, explanation: "The elements don't exist when the binding runs. Use event delegation with .on()." },
        { id: "q7", type: "mcq", question: "Which property gives the key pressed in a keyboard event?", options: ["e.keyCode", "e.key", "e.which", "e.keyCode or e.key"], correctAnswer: 3, explanation: "e.key gives the actual key, e.which gives the keycode. Both are available." },
        { id: "q8", type: "fill-blank", question: "The _____ method attaches an event that only fires once.", correctAnswer: "one", explanation: ".one('event', fn) attaches a handler that executes at most once." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: ".on()", value: "Primary event binding method" },
      { label: ".click()", value: "Click event shorthand" },
      { label: "preventDefault", value: "Stop default behavior" },
      { label: "stopPropagation", value: "Stop event bubbling" }
    ]
  },
  {
    id: "jquery-6",
    number: 6,
    partLabel: "Part 1: jQuery Fundamentals",
    title: "DOM Manipulation",
    subtitle: "Changing Document Content",
    difficulty: "Beginner" as const,
    estimatedMinutes: 45,
    xpReward: 90,
    prerequisites: ["jquery-5"],
    learningObjectives: ["Get and set element content", "Manipulate HTML attributes", "Add and remove elements", "Work with form values"],
    sections: [
      {
        id: "jquery-6-1",
        title: "Getting and Setting Content",
        whyItMatters: "The ability to read and modify page content is fundamental to jQuery.",
        content: `jQuery provides simple methods for manipulating element content.

**text() - Text Content:**
\`\`\`javascript
// Get text content
$('#myElement').text();  // Returns text content

// Set text content
$('#myElement').text('New text');  // Sets text, escapes HTML
\`\`\`

**html() - HTML Content:**
\`\`\`javascript
// Get inner HTML
$('#myElement').html();  // Returns HTML content

// Set inner HTML
$('#myElement').html('<strong>Bold text</strong>');  // Parses HTML
\`\`\`

**Key Difference:**
- text(): Treats content as plain text (escapes HTML)
- html(): Treats content as HTML (renders HTML)

\`\`\`javascript
$('#div').text('<b>Bold</b>');  // Shows: <b>Bold</b>
// $('#div').html('<b>Bold</b>');  // Shows: Bold (rendered)
\`\`\``,
        codeExamples: [
          {
            id: "jquery-6-ex1",
            title: "Content Manipulation",
            description: "Getting and setting content",
            code: { jquery: "// Get text content\nvar heading = $('h1').text();\nconsole.log(heading);\n\n// Set text content\n$('.notice').text('Message sent!');\n\n// Get HTML content\nvar divHtml = $('#content').html();\n\n// Set HTML content\n$('#content').html('<p>New <em>content</em></p>');\n\n// Chain methods\n$('#header')\n  .text('Welcome')\n  .addClass('highlight');" },
            explanation: "text() and html() are the foundation of content manipulation."
          }
        ]
      },
      {
        id: "jquery-6-2",
        title: "Attributes and Values",
        whyItMatters: "Working with element attributes and form values is essential.",
        content: `**attr() - Get/Set Attributes:**
\`\`\`javascript
// Get attribute
$('#link').attr('href');  // Returns href value

// Set attribute
$('#link').attr('href', 'https://google.com');

// Set multiple attributes
$('#link').attr({
  href: 'https://google.com',
  title: 'Search Engine'
});
\`\`\`

**prop() - Get/Set Properties:**
Use for boolean properties like checked, disabled, selected:
\`\`\`javascript
// Check if checkbox is checked
$('#checkbox').prop('checked');  // true/false

// Check a checkbox
$('#checkbox').prop('checked', true);

// Disable an input
$('#input').prop('disabled', true);
\`\`\`

**val() - Form Values:**
\`\`\`javascript
// Get value from input/select
$('#username').val();

// Set value
$('#username').val('newvalue');

// Get value from multiple select
$('#countries').val();  // Returns array
\`\`\`

**When to use attr() vs prop():**
- attr(): For HTML attributes (href, src, title, class)
- prop(): For DOM properties (checked, disabled, selected, readonly)`,
        codeExamples: [
          {
            id: "jquery-6-ex2",
            title: "Attribute and Value Manipulation",
            description: "Working with attributes and form values",
            code: { jquery: "// Get and set attributes\nvar src = $('img').attr('src');\n$('img').attr('alt', 'A beautiful image');\n\n// Boolean properties (use prop)\n$('#agree').prop('checked', true);\n$('#submit').prop('disabled', true);\n\n// Form values\n$('#name').val('John Doe');\n$('#bio').val('Developer from NYC');\n\n// Get multiple values\n$('#form').on('submit', function() {\n  var data = {\n    name: $('#name').val(),\n    email: $('#email').val(),\n    country: $('#country').val()\n  };\n  console.log(data);\n});" },
            explanation: "attr(), prop(), and val() handle different types of element properties."
          }
        ]
      },
      {
        id: "jquery-6-3",
        title: "Adding and Removing Elements",
        whyItMatters: "Dynamic content creation is key to interactive applications.",
        content: `**Creating Elements:**
\`\`\`javascript
// Create new element
var $newDiv = $('<div>Hello</div>');

// Create with attributes
var $newLink = $('<a>', {
  href: '#',
  text: 'Click me',
  class: 'btn'
});
\`\`\`

**Inserting Elements:**

Inside:
\`\`\`javascript
$('#container').append('<p>End</p>');    // At end
$('#container').prepend('<p>Start</p>'); // At start
\`\`\`

Outside:
\`\`\`javascript
$('#element').after('<p>After</p>');   // After
$('#element').before('<p>Before</p>'); // Before
\`\`\`

Wrapping:
\`\`\`javascript
$('.item').wrap('<div class="wrapper"></div>');
\`\`\`

**Removing Elements:**
\`\`\`javascript
$('#element').remove();     // Remove and all children
$('#element').detach();    // Remove but keep data/events
$('#element').empty();     // Remove children only
\`\`\``,
        codeExamples: [
          {
            id: "jquery-6-ex3",
            title: "Element Creation and Insertion",
            description: "Adding elements to the DOM",
            code: { jquery: "// Create element\nvar $item = $('<li class=\"new\">New Item</li>');\n\n// Append to list\n$('#myList').append($item);\n\n// Create and insert in one step\n$('#myList').append('<li>Another Item</li>');\n\n// Insert at specific positions\n$('#container').prepend('<h2>Title</h2>');\n$('.divider').after('<hr>');\n\n// Remove element\n$('.old-item').remove();\n\n// Empty container\n$('#results').empty();" },
            explanation: "jQuery makes element creation and insertion intuitive."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What method gets the text content of an element?", options: [".html()", ".text()", ".content()", ".val()"], correctAnswer: 1, explanation: ".text() gets or sets the text content of elements." },
        { id: "q2", type: "fill-blank", question: "Use _____ for HTML that should be rendered, use _____ for plain text.", correctAnswer: "html(), text()", explanation: "html() parses HTML, text() treats content as plain text." },
        { id: "q3", type: "mcq", question: "Which method should you use to check if a checkbox is checked?", options: [".attr('checked')", ".prop('checked')", ".is(':checked')", "Both b and c"], correctAnswer: 3, explanation: "Both .prop('checked') and .is(':checked') work for checking checked state." },
        { id: "q4", type: "true-false", question: "$('<div>') creates a new DOM element.", correctAnswer: true, explanation: "Passing an HTML string to $() creates a new DOM element." },
        { id: "q5", type: "mcq", question: "What does .empty() do?", options: ["Removes the element", "Removes element's children", "Removes element from DOM and events", "Hides the element"], correctAnswer: 1, explanation: ".empty() removes all child nodes but keeps the parent element." },
        { id: "q6", type: "spot-the-bug", question: "What happens with $('#div').text('<b>bold</b>')?", options: ["Shows bold text", "Shows <b>bold</b>", "Error", "Nothing"], correctAnswer: 1, explanation: ".text() escapes HTML, so it shows the literal <b> tags." },
        { id: "q7", type: "mcq", question: "How do you add an element at the START of a container?", options: [".append()", ".prepend()", ".after()", ".before()"], correctAnswer: 1, explanation: ".prepend() adds content at the beginning of the element." },
        { id: "q8", type: "fill-blank", question: "The _____ method removes an element while preserving its data and events.", correctAnswer: "detach", explanation: ".detach() removes the element but keeps data and event handlers." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: ".text()", value: "Get/set text content" },
      { label: ".html()", value: "Get/set HTML content" },
      { label: ".val()", value: "Get/set form values" },
      { label: ".attr()", value: "Get/set attributes" },
      { label: ".prop()", value: "Get/set properties" }
    ]
  },
  {
    id: "jquery-7",
    number: 7,
    partLabel: "Part 1: jQuery Fundamentals",
    title: "CSS Manipulation",
    subtitle: "Styling Elements with jQuery",
    difficulty: "Beginner" as const,
    estimatedMinutes: 35,
    xpReward: 70,
    prerequisites: ["jquery-6"],
    learningObjectives: ["Get and set CSS properties", "Add and remove classes", "Work with dimensions", "Understand CSS manipulation methods"],
    sections: [
      {
        id: "jquery-7-1",
        title: "css() Method",
        whyItMatters: "jQuery makes dynamic styling simple and consistent.",
        content: `The css() method allows you to get and set CSS properties.

**Getting CSS Values:**
\`\`\`javascript
// Get single property
$('#myElement').css('color');

// Get multiple properties
$('#myElement').css(['color', 'font-size', 'background']);
// Returns: {color: 'rgb(0,0,0)', fontSize: '16px', ...}
\`\`\`

**Setting CSS Values:**
\`\`\`javascript
// Set single property
$('#myElement').css('color', 'red');

// Set multiple properties
$('#myElement').css({
  color: 'red',
  fontSize: '18px',
  backgroundColor: '#f0f0f0'
});

// Use unitless values (jQuery adds 'px')
$('#myElement').css('width', 200);  // Becomes 200px
\`\`\`

**Important Notes:**
- Property names can be camelCase (fontSize) or kebab-case ('font-size')
- jQuery automatically adds 'px' to numeric values
- Getting computed style returns the actual rendered value`,
        codeExamples: [
          {
            id: "jquery-7-ex1",
            title: "CSS Manipulation Basics",
            description: "Getting and setting styles",
            code: { jquery: "// Get computed color\nvar color = $('.highlight').css('color');\n\n// Set single style\n$('.warning').css('border', '2px solid orange');\n\n// Set multiple styles\n$('.card').css({\n  backgroundColor: '#fff',\n  borderRadius: '8px',\n  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',\n  padding: '20px'\n});\n\n// Animate with css\n$('.btn').hover(\n  function() { $(this).css('background', '#0056b3'); },\n  function() { $(this).css('background', '#007bff'); }\n);" },
            explanation: "css() is powerful for dynamic styling but prefer classes for maintainability."
          }
        ]
      },
      {
        id: "jquery-7-2",
        title: "Class Manipulation",
        whyItMatters: "Using CSS classes is better than direct CSS manipulation for maintainability.",
        content: `jQuery provides methods specifically for working with CSS classes:

**addClass() / removeClass():**
\`\`\`javascript
$('#myElement').addClass('active highlight');
$('#myElement').removeClass('active');
$('#myElement').removeClass('active highlight');
\`\`\`

**toggleClass():**
\`\`\`javascript
$('#myElement').toggleClass('active');
// Adds if not present, removes if present
\`\`\`

**hasClass():**
\`\`\`javascript
if ($('#myElement').hasClass('active')) {
  // Do something
}
\`\`\`

**Benefits of Class-based Styling:**
- Better separation of concerns
- Easier to maintain (change in CSS, not JS)
- Better performance for complex styling
- Easier to add/remove multiple styles at once

\`\`\`javascript
// Instead of this:
$('#element').css({color: 'red', fontSize: '16px', fontWeight: 'bold'});

// Do this:
$('#element').addClass('error-message');
\`\`\``,
        codeExamples: [
          {
            id: "jquery-7-ex2",
            title: "Working with CSS Classes",
            description: "Class manipulation methods",
            code: { jquery: "// Add class on hover\n$('.card').hover(\n  function() { $(this).addClass('hovered'); },\n  function() { $(this).removeClass('hovered'); }\n);\n\n// Toggle class\n$('#menu-toggle').click(function() {\n  $('#nav').toggleClass('open');\n});\n\n// Conditional class\n$('.item').each(function() {\n  if ($(this).data('status') === 'active') {\n    $(this).addClass('active');\n  }\n});\n\n// Check and act\nif ($('#btn').hasClass('loading')) {\n  $('#btn').text('Loading...');\n}" },
            explanation: "Class manipulation is cleaner and more maintainable than direct CSS."
          }
        ]
      },
      {
        id: "jquery-7-3",
        title: "Dimensions",
        whyItMatters: "Getting and setting element dimensions is essential for responsive designs.",
        content: `jQuery provides methods for working with element dimensions:

**Getting Dimensions:**
\`\`\`javascript
$('#myElement').width();    // Content width
$('#myElement').height();   // Content height

$('#myElement').innerWidth();  // Width + padding
$('#myElement').innerHeight(); // Height + padding

$('#myElement').outerWidth();  // Width + padding + border
$('#myElement').outerHeight(); // Height + padding + border

$('#myElement').outerWidth(true); // + margin
$('#myElement').outerHeight(true); // + margin
\`\`\`

**Setting Dimensions:**
\`\`\`javascript
$('#myElement').width(300);
$('#myElement').height('200px');
\`\`\`

**Position:**
\`\`\`javascript
$('#myElement').offset();   // {top: y, left: x} relative to document
$('#myElement').position(); // {top: y, left: x} relative to parent
\`\`\`

**Scroll:**
\`\`\`javascript
$(window).scrollTop();    // Get scroll position
$(window).scrollTop(100); // Set scroll position
\`\`\``,
        codeExamples: [
          {
            id: "jquery-7-ex3",
            title: "Working with Dimensions",
            description: "Getting and setting element sizes",
            code: { jquery: "// Get element dimensions\nvar box = {\n  width: $('#box').width(),\n  height: $('#box').height(),\n  outer: $('#box').outerWidth(true)\n};\n\n// Center element in window\n$(window).resize(function() {\n  var winW = $(window).width();\n  var winH = $(window).height();\n  var boxW = $('#box').outerWidth();\n  var boxH = $('#box').outerHeight();\n  \n  $('#box').css({\n    left: (winW - boxW) / 2,\n    top: (winH - boxH) / 2\n  });\n});\n\n// Get position relative to document\nvar pos = $('#myElement').offset();\nconsole.log('Top:', pos.top, 'Left:', pos.left);" },
            explanation: "Dimension methods are useful for responsive layouts and positioning."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What does $('#element').width() return?", options: ["Inner width", "Content width", "Outer width", "Total width with margin"], correctAnswer: 1, explanation: ".width() returns content width only, excluding padding, border, and margin." },
        { id: "q2", type: "fill-blank", question: "Use _____ to get width including padding but not border.", correctAnswer: "innerWidth", explanation: "innerWidth() returns width + padding but excludes border." },
        { id: "q3", type: "mcq", question: "Which method adds a class to an element?", options: [".addClass()", ".classAdd()", ".addStyle()", ".setClass()"], correctAnswer: 0, explanation: ".addClass() is the correct method to add CSS classes." },
        { id: "q4", type: "true-false", question: "toggleClass() adds a class if not present and removes if present.", correctAnswer: true, explanation: "toggleClass() switches the presence of a class on each call." },
        { id: "q5", type: "mcq", question: "What does $('#element').offset() return?", options: ["Position relative to parent", "Position relative to document", "Position relative to viewport", "Element coordinates"], correctAnswer: 1, explanation: ".offset() returns position relative to the document." },
        { id: "q6", type: "spot-the-bug", question: "$('#el').css('width', 100) sets width to what?", options: ["10px", "100px", "100em", "100%"], correctAnswer: 1, explanation: "jQuery automatically adds 'px' to numeric CSS values." },
        { id: "q7", type: "mcq", question: "Which is better for maintainability: css() or addClass()?", options: ["css()", "addClass()", "They are the same", "Depends on the case"], correctAnswer: 1, explanation: "addClass() with CSS classes is better for maintainability as styles stay in CSS." },
        { id: "q8", type: "fill-blank", question: "The _____ method checks if an element has a specific class.", correctAnswer: "hasClass", explanation: ".hasClass('className') returns true if element has that class." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: ".css()", value: "Get/set CSS properties" },
      { label: ".addClass()", value: "Add CSS class" },
      { label: ".removeClass()", value: "Remove CSS class" },
      { label: ".toggleClass()", value: "Toggle class on/off" },
      { label: ".width()/.height()", value: "Content dimensions" }
    ]
  },
  {
    id: "jquery-8",
    number: 8,
    partLabel: "Part 1: jQuery Fundamentals",
    title: "Traversing Elements",
    subtitle: "Moving Through the DOM",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 40,
    xpReward: 80,
    prerequisites: ["jquery-7"],
    learningObjectives: ["Navigate up and down the DOM tree", "Find siblings and parents", "Filter and find elements", "Use traversal methods efficiently"],
    sections: [
      {
        id: "jquery-8-1",
        title: "Tree Traversal",
        whyItMatters: "DOM traversal allows you to find related elements without complex selectors.",
        content: `jQuery provides methods to navigate through the DOM tree:

**Going Down (Children):**
\`\`\`javascript
$('#parent').children()       // All direct children
$('#parent').children('.item') // Filtered children
$('#parent').find('*')        // All descendants
$('#parent').find('.item')    // Filtered descendants
\`\`\`

**Going Up (Parents):**
\`\`\`javascript
$('#child').parent()          // Direct parent
$('#child').parents()         // All ancestors
$('#child').parents('.container') // Filtered ancestors
$('#child').closest('.container') // First ancestor matching selector
\`\`\`

**Key Difference:**
- parents() returns ALL ancestors
- closest() starts from element and goes UP until it finds a match
- parent() only returns immediate parent`,
        codeExamples: [
          {
            id: "jquery-8-ex1",
            title: "DOM Tree Navigation",
            description: "Moving through the DOM",
            code: { jquery: "// Get all children of a list\n$('#menu').children();\n\n// Find all descendants matching\n$('#container').find('.item');\n\n// Get parent element\n$('.child-item').parent();\n\n// Get all ancestors up to body\n$('.nested').parents();\n\n// Get closest matching ancestor\n$('.card').closest('.section');\n\n// Practical: Find input in clicked form\n$('.edit-btn').click(function() {\n  var form = $(this).closest('form');\n  var input = form.find('input[name=\"title\"]');\n  input.focus();\n});" },
            explanation: "Traversal methods are powerful for finding related elements."
          }
        ]
      },
      {
        id: "jquery-8-2",
        title: "Siblings",
        whyItMatters: "Working with sibling elements is common in UI components.",
        content: `**Sibling Methods:**
\`\`\`javascript
$('#item').siblings()          // All siblings
$('#item').siblings('.active') // Filtered siblings

$('#item').next()             // Next sibling
$('#item').nextAll()          // All following siblings
$('#item').nextUntil('.stop') // Following until match

$('#item').prev()             // Previous sibling
$('#item').prevAll()          // All previous siblings
$('#item').prevUntil('.stop') // Previous until match
\`\`\`

**Filtering:**
\`\`\`javascript
$('.items').first()           // First element
$('.items').last()            // Last element
$('.items').eq(n)             // Element at index n
$('.items').filter('.active') // Elements matching selector
$('.items').not('.disabled') // Elements NOT matching
$('.items').slice(start, end) // Range of elements
\`\`\``,
        codeExamples: [
          {
            id: "jquery-8-ex2",
            title: "Working with Siblings",
            description: "Finding and filtering siblings",
            code: { jquery: "// Highlight next element\n$('.step').click(function() {\n  $(this).next().addClass('highlight');\n});\n\n// Get all following siblings\n$('#current').nextAll().addClass('future');\n\n// Filter list items\n$('li').filter(':odd').addClass('odd');\n$('li').not('.disabled').addClass('clickable');\n\n// Tab navigation example\n$('.tab').click(function() {\n  $('.tab').removeClass('active');\n  $(this).addClass('active');\n  \n  var index = $(this).index();\n  $('.panel').hide().eq(index).show();\n});" },
            explanation: "Sibling and filtering methods are essential for interactive UI."
          }
        ]
      },
      {
        id: "jquery-8-3",
        title: "is(), has(), and andSelf()",
        whyItMatters: "These methods help you check and manipulate element sets.",
        content: `**is() - Check Elements:**
\`\`\`javascript
$('#element').is('.active');    // true/false
$('#element').is('div');         // Check tag
$('#element').is(':visible');   // Check visibility
$('#element').is(':first');     // Check position

// Often used in conditional logic
if ($('#btn').is(':disabled')) {
  return;
}
\`\`\`

**has() - Filter by Contents:**
\`\`\`javascript
$('div').has('ul')       // divs containing a ul
$('li').has('a')         // lis containing an anchor
$('div').has('.child')   // divs with elements matching .child
\`\`\`

**andSelf() - Add Previous Set:**
\`\`\`javascript
$('#container').find('.item').andSelf();
// Equivalent to: $('#container, #container .item')
\`\`\``,
        codeExamples: [
          {
            id: "jquery-8-ex3",
            title: "Element Checking and Filtering",
            description: "Using is(), has(), andSelf()",
            code: { jquery: "// Check if element meets condition\n$('.btn').click(function() {\n  if ($(this).is('.primary')) {\n    console.log('Primary button clicked');\n  } else {\n    console.log('Secondary button clicked');\n  }\n});\n\n// Filter by having specific children\n$('div').has('.required-field').addClass('has-error');\n\n// Find and include parent\n$('.highlight').parent().andSelf().addClass('important');" },
            explanation: "These methods provide additional filtering and checking capabilities."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What does .children() return?", options: ["All descendants", "Direct children only", "Parent element", "Siblings"], correctAnswer: 1, explanation: ".children() returns only direct child elements, not all descendants." },
        { id: "q2", type: "fill-blank", question: "Use _____ to get all ancestor elements, use _____ for the immediate parent.", correctAnswer: "parents(), parent()", explanation: "parents() returns all ancestors, parent() returns only the immediate parent." },
        { id: "q3", type: "mcq", question: "What does .closest() do?", options: ["Find all matches going up", "Find first match going up", "Find matching descendants", "Find matching siblings"], correctAnswer: 1, explanation: "closest() traverses up the ancestor chain and returns the first matching element." },
        { id: "q4", type: "true-false", question: ".siblings() includes the element itself.", correctAnswer: false, explanation: ".siblings() returns all siblings, not including the element itself." },
        { id: "q5", type: "mcq", question: "Which method checks if an element has a class?", options: [".is('.class')", ".hasClass('.class')", "Both a and b", ".checkClass('.class')"], correctAnswer: 2, explanation: "Both .is('.class') and .hasClass('.class') can check for a class." },
        { id: "q6", type: "spot-the-bug", question: "What's wrong with $('#item').find('.child')?", options: ["Syntax error", "Wrong method order", "find() searches descendants not siblings", "No issue"], correctAnswer: 2, explanation: "find() searches descendants. To search siblings, use siblings() or next()." },
        { id: "q7", type: "mcq", question: "Which filters elements that contain specific children?", options: [".filter()", ".has()", ".is()", ".find()"], correctAnswer: 1, explanation: ".has() filters elements that contain matching descendants." },
        { id: "q8", type: "fill-blank", question: "The _____ method returns the previous jQuery object in a chain.", correctAnswer: "end", explanation: ".end() pops the chain back to the previous jQuery object." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: ".children()", value: "Direct children" },
      { label: ".find()", value: "All descendants" },
      { label: ".parent()", value: "Immediate parent" },
      { label: ".parents()", value: "All ancestors" },
      { label: ".siblings()", value: "All siblings" },
      { label: ".closest()", value: "First ancestor match" }
    ]
  },
  {
    id: "jquery-9",
    number: 9,
    partLabel: "Part 1: jQuery Fundamentals",
    title: "Chaining Methods",
    subtitle: "Writing Efficient jQuery Code",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 60,
    prerequisites: ["jquery-8"],
    learningObjectives: ["Master method chaining", "Use end() effectively", "Optimize selector performance", "Write readable chains"],
    sections: [
      {
        id: "jquery-9-1",
        title: "Understanding Method Chaining",
        whyItMatters: "Chaining is what makes jQuery code concise and readable.",
        content: `Every jQuery method returns a jQuery object (except those that return values like .val() or .text()).

**Basic Chain:**
\`\`\`javascript
$('#element')
  .addClass('active')
  .css('color', 'red')
  .show();
\`\`\`

This is more efficient and readable than:
\`\`\`javascript
$('#element').addClass('active');
$('#element').css('color', 'red');
$('#element').show();
\`\`\`

**Methods that Break Chain:**
Return values (not jQuery objects):
- .val() - returns value
- .text() - returns text (without args)
- .html() - returns HTML (without args)
- .width() - returns width (without args)
- .is() - returns boolean
- .index() - returns index

**Restoring the Chain:**
\`\`\`javascript
$('#element')
  .addClass('first')
  .text('Hello')           // Chain broken - returns string
  .addClass('second')      // Won't work on original element
  .end()                   // Go back
  .addClass('second');     // Now works
\`\`\``,
        codeExamples: [
          {
            id: "jquery-9-ex1",
            title: "Effective Chaining",
            description: "Writing clean chains",
            code: { jquery: "// Long chain example\n$('#nav')\n  .find('li')\n  .eq(0)\n  .addClass('first')\n  .siblings()\n  .removeClass('active')\n  .end()\n  .addClass('active');\n\n// With helper comments\n$('.card')\n  .addClass('featured')    // Highlight featured cards\n  .find('.price')          // Find price elements\n  .css('color', 'green')  // Style the price\n  .end()                   // Back to card\n  .find('.btn')           // Find button\n  .text('Buy Now');        // Update button text" },
            explanation: "Proper chaining creates readable, maintainable code."
          }
        ]
      },
      {
        id: "jquery-9-2",
        title: "Optimization Tips",
        whyItMatters: "Efficient jQuery code performs better and is easier to maintain.",
        content: `**Cache Your Selectors:**
\`\`\`javascript
// Bad - multiple lookups
$('#btn').click(...);
$('#btn').addClass('active');
$('#btn').text('Loading...');

// Good - cached reference
var $btn = $('#btn');
$btn.click(...);
$btn.addClass('active');
$btn.text('Loading...');
\`\`\`

**Use Context:**
\`\`\`javascript
// Searches entire document
$('.item');

// Searches within element
$('.item', '#container');
// Or
$('#container').find('.item');
\`\`\`

**Chain Instead of Iterate:**
\`\`\`javascript
// Don't use .each() if not needed
$('.item').addClass('highlight');  // Applies to all

// Only use .each() when you need individual handling
$('.item').each(function(i, el) {
  $(this).text('Item ' + (i + 1));
});
\`\`\`

**Prefer Native Selectors:**
\`\`\`javascript
// Slower - jQuery selector
$('[data-id=\"123\"]');

// Faster - native selector
$('#element-123');
\`\`\``,
        codeExamples: [
          {
            id: "jquery-9-ex2",
            title: "Performance Optimization",
            description: "Making jQuery faster",
            code: { jquery: "// Cache elements\nvar $header = $('#header');\nvar $menuItems = $('.menu-item');\n\n// Use closest/parent instead of repeated selection\n$('.btn').click(function() {\n  var $card = $(this).closest('.card');\n  $card.find('.title').text('Updated');\n});\n\n// Use specific selectors\n$('#user-list .user-item.active');\n\n// Prefer find() over context\n$('#container').find('.item'); // Better than $('.item', '#container')" },
            explanation: "These optimizations make a significant difference in performance."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "Which method breaks method chaining in jQuery?", options: [".addClass()", ".css()", ".val()", ".hide()"], correctAnswer: 2, explanation: ".val() returns a value (string), not a jQuery object, breaking the chain." },
        { id: "q2", type: "fill-blank", question: "Use _____ to restore the previous jQuery object in a chain.", correctAnswer: "end()", explanation: ".end() pops back to the previous jQuery object in the chain." },
        { id: "q3", type: "mcq", question: "What is the benefit of caching selectors?", options: ["Less code", "Better performance", "More readable", "Better error handling"], correctAnswer: 1, explanation: "Caching selectors avoids repeated DOM lookups, improving performance." },
        { id: "q4", type: "true-false", question: "It's always better to use jQuery selectors over native DOM selectors.", correctAnswer: false, explanation: "Native selectors (like getElementById) are faster than jQuery when you can use them." },
        { id: "q5", type: "mcq", question: "Which is more efficient: $('.item', '#container') or $('#container').find('.item')?", options: ["First", "Second", "Same", "Depends on browser"], correctAnswer: 1, explanation: "Using .find() is generally more efficient as it's more explicit." },
        { id: "q6", type: "spot-the-bug", question: "Why won't this work?", code: "$('.item').text('New').addClass('active');", options: ["text() breaks chain", "Missing semicolon", "Wrong selector", "Class doesn't exist"], correctAnswer: 0, explanation: ".text() without arguments returns the text content, breaking the chain." },
        { id: "q7", type: "mcq", question: "When should you use .each()?", options: ["Always", "When you need to iterate with index", "Never", "Only with large lists"], correctAnswer: 1, explanation: "Use .each() when you need to perform different operations on each element." },
        { id: "q8", type: "fill-blank", question: "Prefer using _____ over class selectors when possible for better performance.", correctAnswer: "ID selectors", explanation: "ID selectors are faster than class selectors as they map to getElementById." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: ".end()", value: "Restore previous object" },
      { label: "Cache", value: "Store selector in variable" },
      { label: ".find()", value: "Search within element" },
      { label: ".each()", value: "Iterate with callback" }
    ]
  },
  {
    id: "jquery-10",
    number: 10,
    partLabel: "Part 1: jQuery Fundamentals",
    title: "Debugging jQuery",
    subtitle: "Finding and Fixing Issues",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 35,
    xpReward: 70,
    prerequisites: ["jquery-9"],
    learningObjectives: ["Use browser dev tools", "Debug jQuery selectors", "Handle common errors", "Log and inspect jQuery objects"],
    sections: [
      {
        id: "jquery-10-1",
        title: "Console Debugging",
        whyItMatters: "Knowing how to debug is essential for solving jQuery problems.",
        content: `**Inspecting jQuery Objects:**
\`\`\`javascript
// Log the jQuery object
var $elements = $('.my-class');
console.log($elements);  // Shows jQuery object with length, etc.

// Get underlying DOM elements
console.log($elements[0]);    // First element
console.log($elements.get()); // All elements as array
\`\`\`

**Checking if Elements Exist:**
\`\`\`javascript
// Wrong - always truthy
if ($('#myElement')) { ... }

// Correct - check length
if ($('#myElement').length > 0) { ... }

// Or use .length as boolean (truthy when > 0)
if ($('#myElement').length) { ... }
\`\`\`

**Common Console Methods:**
\`\`\`javascript
console.log()      // General output
console.info()     // Informational
console.warn()    // Warnings
console.error()   // Errors
console.dir()     // Object properties
console.table()   // Array of objects
\`\`\``,
        codeExamples: [
          {
            id: "jquery-10-ex1",
            title: "Debugging with Console",
            description: "Using browser console for debugging",
            code: { jquery: "// Check what jQuery returns\nvar $items = $('.item');\nconsole.log('Found:', $items.length, 'items');\nconsole.log($items);\n\n// Debug a specific element\n$('#submit').click(function(e) {\n  console.log('Click handler fired');\n  console.log('this:', this);\n  console.log('$(this):', $(this));\n  console.log('Form values:', $(this).closest('form').serialize());\n});\n\n// Test selectors in console\n// $('selector') - see what it finds\n// $.fn.jquery - see jQuery version" },
            explanation: "Console debugging is the first step in solving jQuery issues."
          }
        ]
      },
      {
        id: "jquery-10-2",
        title: "Common jQuery Errors",
        whyItMatters: "Understanding common mistakes helps avoid them.",
        content: `**Element Not Found:**
\`\`\`javascript
// Error: Using methods on non-existent elements
$('#nonexistent').hide(); // No error, just does nothing

// Fix: Check if element exists first
if ($('#nonexistent').length) {
  $('#nonexistent').hide();
}
\`\`\`

**Event Binding Too Early:**
\`\`\`javascript
// Error: Binding to elements that don't exist yet
$('.dynamic-element').click(handleClick);

// Fix: Use event delegation
$(document).on('click', '.dynamic-element', handleClick);
// Or ensure code runs after elements are created
\`\`\`

**Incorrect this Context:**
\`\`\`javascript
// Error: Using this incorrectly in callbacks
$('.btn').click(function() {
  doSomething(this); // 'this' is DOM element, not jQuery object
});

// Fix: Wrap in $()
$('.btn').click(function() {
  doSomething($(this));
});
\`\`\`

**Chaining Broken:**
\`\`\`javascript
// Error: Text/val break chain
$('#el').text('hello').addClass('error'); // addClass won't work

// Fix: Use end() or wrap the value
$('#el').text('hello').end().addClass('error');
\`\`\``,
        codeExamples: [
          {
            id: "jquery-10-ex2",
            title: "Debugging Common Issues",
            description: "Solving typical jQuery problems",
            code: { jquery: "// Always check if element exists\nvar $modal = $('#modal');\nif ($modal.length) {\n  $modal.modal('show');\n}\n\n// Use event delegation for dynamic elements\n$('#parent-container').on('click', '.dynamic-btn', function(e) {\n  e.preventDefault();\n  var $btn = $(this);  // Always wrap this!\n  $btn.addClass('loading');\n  loadData($btn.data('id'));\n});\n\n// Debug event binding\n$('.btn').on('click', function(e) {\n  console.log('Button clicked!');\n  console.log('Event:', e);\n  console.log('Target:', e.target);\n});" },
            explanation: "These patterns help avoid the most common jQuery mistakes."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "How do you check if a jQuery selector found elements?", options: ["if ($('#el'))", "if ($('#el').length)", "if ($('#el').exists())", "if ($('#el').size())"], correctAnswer: 1, explanation: "Check the .length property - 0 means no elements found." },
        { id: "q2", type: "fill-blank", question: "Inside a jQuery event handler, _____ refers to the DOM element that triggered the event.", correctAnswer: "this", explanation: "Inside event handlers, 'this' is the DOM element that triggered the event." },
        { id: "q3", type: "mcq", question: "Why doesn't this work: $('#btn').text('Click me').addClass('active')?", options: ["Syntax error", "text() breaks chain", "addClass is wrong method", "jQuery not loaded"], correctAnswer: 1, explanation: "text() without arguments returns the text content, not a jQuery object." },
        { id: "q4", type: "true-false", question: "You can debug jQuery in the browser console.", correctAnswer: true, explanation: "You can type jQuery code directly in the browser console to test." },
        { id: "q5", type: "mcq", question: "What do you use for elements added dynamically after page load?", options: ["Regular binding", "Event delegation", "Lazy loading", "AJAX binding"], correctAnswer: 1, explanation: "Event delegation with .on() handles dynamically added elements." },
        { id: "q6", type: "spot-the-bug", question: "Why does $(this) sometimes not work in an event handler?", options: ["this is undefined", "this needs to be wrapped", "this is already jQuery", "No issue"], correctAnswer: 1, explanation: "this is the raw DOM element - you need $(this) to use jQuery methods." },
        { id: "q7", type: "mcq", question: "What returns the underlying DOM element from a jQuery object?", options: [".dom()", ".get(0)", "[0]", "Both b and c"], correctAnswer: 3, explanation: "Both .get(0) and [0] return the raw DOM element." },
        { id: "q8", type: "fill-blank", question: "To see what version of jQuery is loaded, type _____ in the console.", correctAnswer: "$.fn.jquery", explanation: "$.fn.jquery returns the jQuery version string." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: ".length", value: "Number of elements found" },
      { label: "$(this)", value: "Wrap this as jQuery object" },
      { label: ".on()", value: "Event delegation for dynamic elements" },
      { label: "$.fn.jquery", value: "Get jQuery version" }
    ]
  }
];

export const jqueryTrack: Track = {
  id: "jquery",
  title: "jQuery",
  titleBn: "জেকুয়ারি",
  tagline: "Write less, do more",
  taglineBn: "কম লিখে বেশি করুন",
  icon: "https://img.icons8.com/?size=160&id=4R3j0NpX1c2G&format=png",
  colorVar: "jquery",
  totalChapters: jqueryChapters.length,
  estimatedHours: Math.round(jqueryChapters.reduce((sum, c) => sum + c.estimatedMinutes, 0) / 60),
  chapters: jqueryChapters,
  brandColor: "#0769AD",
  glowColor: "rgba(7, 106, 173, 0.4)",
};