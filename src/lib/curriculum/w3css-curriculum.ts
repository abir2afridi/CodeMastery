import type { Track, Chapter } from "./types";

// Bengali translations for W3.CSS content
const w3cssContentBn: Record<string, string> = {
  "w3css-1-1": `W3.CSS তৈরি করেছে W3Schools, বিশ্বের সবচেয়ে বড় ওয়েব ডেভেলপমেন্ট লার্নিং সাইট। এটি Bootstrap-এর চেয়ে সহজ এবং হালকা করে ডিজাইন করা হয়েছে।

গুরুত্বপূর্ণ তথ্য:
• W3.CSS মিনিফাইড করা মাত্র ~21KB (Bootstrap প্রায় 150KB)
• জিরো জাভাস্ক্রিপ্ট লাগে — কোনো jQuery নেই, কোনো ডিপেন্ডেন্সি নেই
• শুধুমাত্র স্ট্যান্ডার্ড CSS3 ফিচার ব্যবহার করে যা সব আধুনিক ব্রাউজারে কাজ করে
• গুগল ম্যাটেরিয়াল ডিজাইন প্রিন্সিপল অনুসরণ করে — ফ্ল্যাট ডিজাইন, বোল্ড রঙ, পেপার-লাইক কার্ড লেআউট
• 100% ফ্রি এবং ওপেন সোর্স
• মোবাইল-ফার্স্ট — প্রথমে ফোনের জন্য ডিজাইন, তারপর ট্যাবলেট ও ডেস্কটপের জন্য

বাস্তব উদাহরণ: একটি বাড়ি শূন্য থেকে তৈরি করতে মাসের পর মাস লাগে। কিন্তু প্রি-ফ্যাব্রিকেটেড হাউস কিট কিনলে — প্রি-কাট ওয়াল, প্রি-মেড উইন্ডো — দিনের মধ্যে সম্পূর্ণ বাড়ি বানানো যায়। W3.CSS হলো ওয়েবসাইটের জন্য সেই কিট।`,
  "w3css-1-2": `W3.CSS যোগ করার তিনটি উপায়:

পদ্ধতি 1 — CDN (প্রস্তাবিত):
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

পদ্ধতি 2 — ডাউনলোড এবং লোকাল হোস্ট:
w3schools.com/w3css/4/w3.css থেকে ডাউনলোড করুন → w3.css হিসেবে সেভ করুন → লোকালি লিংক করুন।

পদ্ধতি 3 — কালার থিম:
<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-blue.css">

উপলব্ধ থিম: w3-theme-black, w3-theme-blue, w3-theme-red, w3-theme-green, w3-theme-orange, w3-theme-teal, w3-theme-indigo, w3-theme-deep-purple।`,
  "w3css-1-3": `শুধু কয়েকটি ক্লাস নাম দিয়ে, আপনি তাৎক্ষণিক সুন্দর, রেসপন্সিভ স্টাইলিং পান।

তুলনা: W3.CSS ছাড়া একই পেজ সাধারণ ব্রাউজার ডিফল্টের মতো দেখায়। W3.CSS দিয়ে, আপনি সামঞ্জস্যপূর্ণ রঙ, স্পেসিং এবং টাইপোগ্রাফি পান।

প্রতিটি লাইনের ব্যাখ্যা:
• class="w3-container" — প্যাডিং যোগ করে এবং কন্টেন্ট সেন্টার করে
• class="w3-blue" — নীল ব্যাকগ্রাউন্ড কালার সেট করে
• class="w3-green" — সবুজ কালার বাটন
• class="w3-button" — স্টাইলড বাটনের চেহারা`,
  "w3css-1-4": `তুলনা টেবিল:
| ফিচার | W3.CSS | Bootstrap | কাস্টম CSS |
|--------|---------|-----------|------------|
| ফাইল সাইজ | 21KB | 150KB+ | 0KB |
| JS ডিপেন্ডেন্সি | কোনোটি না | প্রয়োজন | কোনোটি না |
| লার্নিং কার্ভ | সহজ | মধ্যম | কম্প্লেক্স |
| কম্পোনেন্ট | 50+ | 100+ | অসীম |

সিদ্ধান্ত ফ্রেমওয়ার্ক:
• পার্সোনাল পোর্টফোলিও → W3.CSS
• কমপ্লেক্স ওয়েব অ্যাপে JS কম্পোনেন্ট সহ → Bootstrap
• ইউনিক ব্র্যান্ড, কাস্টম ডিজাইন → কাস্টম CSS`,
  "w3css-2-1": `w3-container যেকোনো HTML এলিমেন্টে বাম এবং ডানে 16px প্যাডিং যোগ করে। এটি টপ/বটম প্যাডিং বা মার্জিন যোগ করে না।

w3-container ব্যবহার করুন:
• মূল কন্টেন্ট এরিয়া
• কার্ডের কন্টেন্ট
• ন্যাভিগেশন বার
• যেকোনো সেকশন যার হরিজন্টাল প্যাডিং দরকার

কন্টেইনার ট্রান্সপারেন্ট এবং যেকোনো কালার ক্লাসের সাথে কম্বিন করা যায়।`,
  "w3css-2-2": `w3-panel এ প্যাডিং এবং মার্জিন উভয়ই যোগ করে:
• বাম/ডানে 16px প্যাডিং (কন্টেইনারের মতো)
• টপ/বটমে 16px মার্জিন

w3panel ব্যবহার করুন:
• নোট এবং অ্যালার্ট
• স্ট্যান্ডঅলোন কন্টেন্ট কার্ড
• কলআউট বক্স
• ওয়ার্নিং/গুরুত্বপূর্ণ মেসেজ`,
  "w3css-2-3": `w3-content কন্টেন্টকে 980px max-width এ সেন্টার করে স্ক্রিনে।

w3content ব্যবহার করুন:
• মূল পেজ কন্টেন্ট
• যখন আপনি maximum width চান
• বড় স্ক্রিনে সেন্টার্ড লেআউট`,

  // Chapter 1 Section 2
  "w3css-1-2": `W3.CSS যোগ করার তিনটি উপায়:

পদ্ধতি 1 — CDN (প্রস্তাবিত):
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

পদ্ধতি 2 — ডাউনলোড এবং লোকাল হোস্ট:
w3schools.com/w3schools.com/w3css/4/w3.css থেকে ডাউনলোড করুন → w3.css হিসেবে সেভ করুন → লোকালি লিংক করুন।

পদ্ধতি 3 — কালার থিম:
<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-blue.css">

উপলব্ধ থিম: w3-theme-black, w3-theme-blue, w3-theme-red, w3-theme-green, w3-theme-orange, w3-theme-teal, w3-theme-indigo, w3-theme-deep-purple।`,

  // Chapter 1 Section 3
  "w3css-1-3": `শুধু কয়েকটি ক্লাস নাম দিয়ে, আপনি তাৎক্ষণিক সুন্দর, রেসপন্সিভ স্টাইলিং পান।

তুলনা: W3.CSS ছাড়া একই পেজ সাধারণ ব্রাউজার ডিফল্টের মতো দেখায়। W3.CSS দিয়ে, আপনি সামঞ্জস্যপূর্ণ রঙ, স্পেসিং এবং টাইপোগ্রাফি পান।

প্রতিটি লাইনের ব্যাখ্যা:
• class="w3-container" — প্যাডিং যোগ করে এবং কন্টেন্ট সেন্টার করে
• class="w3-blue" — নীল ব্যাকগ্রাউন্ড কালার সেট করে
• class="w3-green" — সবুজ কালার বাটন
• class="w3-button" — স্টাইলড বাটনের চেহারা`,

  // Chapter 1 Section 4
  "w3css-1-4": `তুলনা টেবিল:
| ফিচার | W3.CSS | Bootstrap | কাস্টম CSS |
|--------|---------|-----------|------------|
| ফাইল সাইজ | 21KB | 150KB+ | 0KB |
| JS ডিপেন্ডেন্সি | কোনোটি না | প্রয়োজন | কোনোটি না |
| লার্নিং কার্ভ | সহজ | মধ্যম | কম্প্লেক্স |
| কম্পোনেন্ট | 50+ | 100+ | অসীম |

সিদ্ধান্ত ফ্রেমওয়ার্ক:
• পার্সোনাল পোর্টফোলিও → W3.CSS
• কমপ্লেক্স ওয়েব অ্যাপে JS কম্পোনেন্ট সহ → Bootstrap
• ইউনিক ব্র্যান্ড, কাস্টম ডিজাইন → কাস্টম CSS`,
};

const w3cssChapters: Chapter[] = [
  // Part 1: Introduction (Chapters 1-4)
  {
    id: "w3css-1",
    number: 1,
    partLabel: "Part 1: Introduction to W3.CSS",
    title: "What Is W3.CSS and Why Use It?",
    subtitle: "The lightweight, JavaScript-free CSS framework that makes styling effortless",
    difficulty: "Absolute Beginner",
    estimatedMinutes: 25,
    xpReward: 80,
    prerequisites: [],
    learningObjectives: [
      "Understand what W3.CSS is and how it compares to Bootstrap",
      "Know how to include W3.CSS in any HTML file",
      "Understand mobile-first and responsive design philosophy",
      "See a complete W3.CSS page built in under 10 lines"
    ],
    sections: [
      {
        id: "w3css-1-1",
        title: "What Is W3.CSS?",
        whyItMatters: "Understanding W3.CSS helps you choose the right CSS framework for your projects.",
        content: `W3.CSS was created by W3Schools, the world's largest web developer learning site. It was designed to be simpler and lighter than Bootstrap.

Key facts:
• W3.CSS is only ~21KB minified (Bootstrap is ~150KB)
• Requires zero JavaScript — no jQuery, no dependencies
• Uses only standard CSS3 features that work in all modern browsers
• Follows Google Material Design principles — flat design, bold colors, paper-like card layouts
• 100% free and open source
• Mobile-first — designed for phones first, then tablets and desktops

Real-world analogy: Building a house from scratch takes months. But if you buy a prefabricated house kit — pre-cut walls, pre-made windows — you can assemble a complete house in days. W3.CSS is that kit for websites.`,
        codeExamples: [
          {
            id: "w3css-intro-1",
            title: "W3.CSS vs Bootstrap",
            description: "Comparing frameworks",
            code: {
              html: `<!-- W3.CSS: Simple, lightweight -->
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

<!-- Bootstrap: Larger, requires jQuery -->
<link rel="stylesheet" href="bootstrap.min.css">
<script src="jquery.min.js"></script>
<script src="bootstrap.min.js"></script>`
            },
            explanation: "W3.CSS needs just one CDN link. Bootstrap needs 3 files including JavaScript."
          }
        ],
        callouts: [
          {
            type: "info",
            title: "Why W3.CSS?",
            content: "Choose W3.CSS for content sites, portfolios, and landing pages. Choose Bootstrap for complex JavaScript components like carousels and tooltips."
          }
        ],
        contentBn: w3cssContentBn["w3css-1-1"]
      },
      {
        id: "w3css-1-2",
        title: "How to Include W3.CSS",
        whyItMatters: "You need to know how to add W3.CSS to your projects.",
        content: `Three ways to add W3.CSS to any HTML page:

Method 1 — CDN (recommended):
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

Method 2 — Download and host locally:
Download from w3schools.com/w3css/4/w3.css, save as w3.css, link locally.

Method 3 — Color themes:
<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-blue.css">

Available themes: w3-theme-black, w3-theme-blue, w3-theme-red, w3-theme-green, w3-theme-orange, w3-theme-teal, w3-theme-indigo, w3-theme-deep-purple.`,
        codeExamples: [
          {
            id: "w3css-include-1",
            title: "Including W3.CSS via CDN",
            description: "Add to your HTML head",
            code: {
              html: `<!DOCTYPE html>
<html>
<head>
  <title>My W3.CSS Page</title>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>
<body>
  <!-- Your content here -->
</body>
</html>`
            },
            explanation: "Always include W3.CSS in the <head> section before your custom CSS."
          }
        ],
        contentBn: w3cssContentBn["w3css-1-2"]
      },
      {
        id: "w3css-1-3",
        title: "Your First W3.CSS Page",
        whyItMatters: "See the power of W3.CSS in action with a complete example.",
        content: `With just a few class names, you get beautiful, responsive styling instantly.

Compare: the same page without W3.CSS looks like plain browser defaults. With W3.CSS, you get consistent colors, spacing, and typography.

Line-by-line explanation:
• class="w3-container" — adds padding and centers content
• class="w3-blue" — sets blue background color
• class="w3-green" — green colored button
• class="w3-button" — styled button appearance`,
        codeExamples: [
          {
            id: "w3css-first-1",
            title: "First W3.CSS Page",
            description: "A complete page with header and button",
            code: {
              html: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>
<body>
  <div class="w3-container w3-blue">
    <h1>My First W3.CSS Page</h1>
  </div>
  <div class="w3-container">
    <p>Welcome to W3.CSS learning!</p>
    <button class="w3-button w3-green">Click Me</button>
  </div>
</body>
</html>`
            },
            explanation: "This is all you need for a styled page with W3.CSS!"
          }
        ],
        contentBn: w3cssContentBn["w3css-1-3"]
      },
      {
        id: "w3css-1-4",
        title: "W3.CSS vs Bootstrap vs Custom CSS",
        whyItMatters: "Know when to use W3.CSS versus other approaches.",
        content: `Comparison table:
| Feature | W3.CSS | Bootstrap | Custom CSS |
|---------|--------|-----------|------------|
| File Size | 21KB | 150KB+ | 0KB |
| JS Dependency | None | Required | None |
| Learning Curve | Easy | Medium | Hard |
| Components | 50+ | 100+ | Unlimited |
| Customization | Limited | Good | Full |

Decision framework:
• Personal portfolio → W3.CSS
• Complex web app with JS components → Bootstrap
• Unique brand, custom design → Custom CSS`,
        codeExamples: [
          {
            id: "w3css-compare-1",
            title: "When to Use W3.CSS",
            description: "Best use cases",
            code: {
              html: `<!-- Perfect for W3.CSS: -->
<!-- • Landing pages -->
<!-- • Simple portfolios -->
<!-- • Content-focused sites -->
<!-- • Rapid prototyping -->

<div class="w3-container w3-card-4">
  <h2>Portfolio</h2>
  <p>My work</p>
</div>`
            },
            explanation: "W3.CSS shines for content-focused, static pages."
          }
        ],
        contentBn: w3cssContentBn["w3css-1-4"]
      }
    ],
    exercises: [
      {
        id: "ex-1-1",
        title: "Blue Header Page",
        difficulty: 1,
        description: "Create an HTML page with a blue header containing your name.",
        requirements: ["Include W3.CSS CDN", "Blue header with h1", "Content area below"],
        starterCode: { html: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>
<body>
  <!-- Your code here -->

</body>
</html>` },
        hints: ["Use w3-container for containers", "Use w3-blue for blue background"],
        solution: { html: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>
<body>
  <div class="w3-container w3-blue">
    <h1>Your Name</h1>
  </div>
  <div class="w3-container">
    <p>Welcome to my page!</p>
  </div>
</body>
</html>` },
        solutionExplanation: "Used w3-container for padding and w3-blue for blue background."
      }
    ],
    quiz: {
      passingScore: 70,
      questions: [
        { id: "q1", type: "mcq", question: "What is the file size of W3.CSS minified?", options: ["150KB", "21KB", "5KB", "500KB"], correctAnswer: 1, explanation: "W3.CSS is only ~21KB, much smaller than Bootstrap's ~150KB.", difficulty: 1 },
        { id: "q2", type: "true-false", question: "W3.CSS requires jQuery to work.", correctAnswer: false, explanation: "W3.CSS is pure CSS with zero JavaScript dependencies.", difficulty: 1 },
        { id: "q3", type: "fill-blank", question: "To include W3.CSS via CDN, use the <___> HTML tag.", correctAnswer: "link", explanation: "Use the <link> tag with rel='stylesheet' to include W3.CSS.", difficulty: 1 },
        { id: "q4", type: "mcq", question: "W3.CSS is based on which design philosophy?", options: ["Skeuomorphic", "Google Material Design", "Windows Metro", "Apple Human Interface"], correctAnswer: 1, explanation: "W3.CSS follows Google Material Design principles.", difficulty: 1 },
        { id: "q5", type: "code-output", question: "What color will <div class='w3-blue'> display?", correctAnswer: "Blue background", explanation: "w3-blue applies a blue background color.", difficulty: 1 },
        { id: "q6", type: "true-false", question: "W3.CSS is mobile-first.", correctAnswer: true, explanation: "W3.CSS is designed for mobile first, then scales up for tablets and desktop.", difficulty: 1 },
        { id: "q7", type: "mcq", question: "Which is NOT a valid way to add W3.CSS?", options: ["CDN link", "npm install", "Download and host", "Color theme CDN"], correctAnswer: 1, explanation: "W3.CSS does not have an official npm package. Use CDN or download.", difficulty: 1 },
        { id: "q8", type: "spot-the-bug", question: "Find the bug:", code: "<link href='w3.css'>", correctAnswer: "Missing rel='stylesheet' attribute", explanation: "The <link> tag needs rel='stylesheet' to import CSS.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "Include W3.CSS", value: '<link rel="stylesheet" href="w3css/4/w3.css">' },
      { label: "Container", value: 'class="w3-container"' },
      { label: "Blue bg", value: 'class="w3-blue"' },
      { label: "Button", value: 'class="w3-button w3-green"' }
    ]
  },
  // Chapter 2
  {
    id: "w3css-2",
    number: 2,
    title: "Containers and Panels",
    subtitle: "Understanding w3-container, w3-panel, and w3-content",
    difficulty: "Absolute Beginner",
    estimatedMinutes: 20,
    xpReward: 80,
    prerequisites: ["w3css-1"],
    learningObjectives: ["Master container classes", "Know when to use panel vs container"],
    sections: [
      {
        id: "w3css-2-1",
        title: "w3-container",
        whyItMatters: "Container is the most basic building block in W3.CSS.",
        content: `w3-container adds 16px left and right padding to any HTML element. It does NOT add top/bottom padding or margins.

Use w3-container for:
• Main content areas
• Card contents
• Navigation bars
• Any section that needs horizontal padding

The container is transparent and can be combined with any color class.`,
        codeExamples: [
          {
            id: "w3css-container-1",
            title: "Container Examples",
            description: "Basic container usage",
            code: {
              html: `<div class="w3-container w3-blue">
  <h2>Blue Container</h2>
</div>

<div class="w3-container w3-green">
  <h2>Green Container</h2>
</div>

<div class="w3-container w3-border">
  <h2>Bordered Container</h2>
</div>`
            },
            explanation: "Container adds padding. Combine with color classes for backgrounds."
          }
        ],
        contentBn: w3cssContentBn["w3css-2-1"]
      },
      {
        id: "w3css-2-2",
        title: "w3-panel",
        whyItMatters: "Panels are better for standalone content blocks.",
        content: `w3-panel adds both padding AND margins:
• 16px left/right padding (like container)
• 16px top/bottom margin

Use w3-panel for:
• Notes and alerts
• Standalone content cards
• Callout boxes
• Warning/important messages`,
        codeExamples: [
          {
            id: "w3css-panel-1",
            title: "Panel vs Container",
            description: "Comparing the two",
            code: {
              html: `<div class="w3-container w3-pale-blue">
  <p>Container: padding only</p>
</div>

<div class="w3-panel w3-pale-blue">
  <p>Panel: padding + margin</p>
</div>`
            },
            explanation: "Panel has extra margin for separation from surrounding content."
          }
        ],
        contentBn: w3cssContentBn["w3css-2-2"]
      },
      {
        id: "w3css-2-3",
        title: "w3-content",
        whyItMatters: "Content class creates a centered, fixed-width container.",
        content: `w3-content fixes content to a max-width of 980px and centers it on screen.

Use w3-content for:
• Main page content
• When you want a maximum width
• Centered layouts on large screens`,
        codeExamples: [
          {
            id: "w3css-content-1",
            title: "Content Container",
            description: "Fixed width centered content",
            code: {
              html: `<div class="w3-content" style="max-width:980px">
  <h2>Centered Content</h2>
  <p>This content is centered and has max-width of 980px.</p>
</div>`
            },
            explanation: "Content auto-centers and respects the max-width."
          }
        ],
        contentBn: w3cssContentBn["w3css-2-3"]
      }
    ],
    exercises: [
      {
        id: "ex-2-1",
        title: "Container Comparison",
        difficulty: 1,
        description: "Create three boxes using container, panel, and content.",
        requirements: ["Use w3-container", "Use w3-panel", "Use w3-content", "Different colors"],
        starterCode: { html: `<!-- Create three styled boxes -->` },
        hints: ["Add w3-blue or w3-green colors", "Panel has automatic margins"],
        solution: { html: `<div class="w3-container w3-blue">
  <p>Container: just padding</p>
</div>
<div class="w3-panel w3-green">
  <p>Panel: padding + margin</p>
</div>
<div class="w3-content">
  <div class="w3-red" style="padding:16px">
    <p>Content: centered, max 980px</p>
  </div>
</div>` },
        solutionExplanation: "Demonstrated all three container types with different colors."
      }
    ],
    quiz: {
      passingScore: 70,
      questions: [
        { id: "q1", type: "mcq", question: "How much padding does w3-container add?", options: ["8px", "16px", "24px", "32px"], correctAnswer: 1, explanation: "w3-container adds 16px left and right padding.", difficulty: 1 },
        { id: "q2", type: "mcq", question: "Which adds both padding AND margin?", options: ["w3-container", "w3-panel", "w3-content", "w3-section"], correctAnswer: 1, explanation: "w3-panel adds 16px padding AND 16px margin on all sides.", difficulty: 1 },
        { id: "q3", type: "true-false", question: "w3-content has a fixed width of 980px.", correctAnswer: false, explanation: "w3-content has a max-width of 980px, not fixed.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "Container", value: "class=\"w3-container\"" },
      { label: "Panel", value: "class=\"w3-panel\"" },
      { label: "Content", value: "class=\"w3-content\"" }
    ]
  }
];

// Generate remaining chapters 3-55
for (let ch = 3; ch <= 55; ch++) {
  const prevNum = ch - 1;
  const partLabel = ch <= 9 ? "Part 2: Colors" :
                    ch <= 16 ? "Part 3: Layout System" :
                    ch <= 20 ? "Part 4: Typography" :
                    ch <= 36 ? "Part 5: UI Components" :
                    ch <= 40 ? "Part 6: Animations" :
                    ch <= 48 ? "Part 7: Responsive & Advanced" :
                    "Part 8: Projects";

  const chapterTitles: Record<number, string> = {
    3: "Badges and Tags",
    4: "Color System Overview",
    5: "Background Color Classes",
    6: "Text Color Classes",
    7: "Border Color Classes",
    8: "Hover Color Classes",
    9: "Color Themes",
    10: "The W3.CSS Grid System",
    11: "w3-content — Fixed Width",
    12: "Container vs Panel",
    13: "Display Classes",
    14: "Padding Classes",
    15: "Margin Classes",
    16: "Border Classes",
    17: "Text Size Classes",
    18: "Text Alignment",
    19: "Code Formatting",
    20: "Typography Combinations",
    21: "Buttons",
    22: "Cards",
    23: "Tables",
    24: "Lists",
    25: "Images",
    26: "Forms",
    27: "Navigation Bar",
    28: "Sidebar",
    29: "Dropdown",
    30: "Modal",
    31: "Accordion",
    32: "Tabs",
    33: "Progress Bars",
    34: "Tooltip",
    35: "Sections",
    36: "Pagination",
    37: "Entry Animations",
    38: "Opacity and Fade",
    39: "Zoom Effects",
    40: "Spin Animation",
    41: "Responsive Design",
    42: "Responsive Containers",
    43: "Overlay Classes",
    44: "JavaScript Integration",
    45: "Dark Mode",
    46: "Color Themes Deep Dive",
    47: "Customizing W3.CSS",
    48: "Performance",
    49: "Portfolio Project",
    50: "Restaurant Website",
    51: "Admin Dashboard",
    52: "Blog Layout",
    53: "Landing Page",
    54: "Challenge Set",
    55: "Mastery Recap"
  };

  w3cssChapters.push({
    id: `w3css-${ch}`,
    number: ch,
    partLabel,
    title: chapterTitles[ch] || `W3.CSS Chapter ${ch}`,
    subtitle: `W3.CSS ${chapterTitles[ch] || "topic"}`,
    difficulty: ch <= 4 ? "Absolute Beginner" :
                ch <= 16 ? "Beginner" :
                ch <= 40 ? "Intermediate" :
                "Advanced",
    estimatedMinutes: 30,
    xpReward: Math.min(120, 60 + ch),
    prerequisites: [`w3css-${prevNum}`],
    learningObjectives: [`Learn W3.CSS ${chapterTitles[ch] || "concept"}`],
    sections: [
      {
        id: `w3css-${ch}-1`,
        title: chapterTitles[ch] || `Topic ${ch}`,
        whyItMatters: "Understanding this W3.CSS feature is essential.",
        content: `This chapter covers W3.CSS ${chapterTitles[ch] || "concept"}. W3.CSS provides classes for every styling need.

Key points:
• Each W3.CSS class serves a specific purpose
• Classes can be combined for complex designs
• Mobile-first responsive design built-in
• No JavaScript required for styling`,
        codeExamples: [
          {
            id: `w3css-${ch}-ex1`,
            title: "Example",
            description: "W3.CSS demo",
            code: {
              html: `<div class="w3-container w3-green">
  <p>Learning W3.CSS Chapter ${ch}</p>
  <button class="w3-button w3-blue">Click</button>
</div>`
            },
            explanation: "W3.CSS makes styling effortless."
          }
        ],
        contentBn: w3cssContentBn[`w3css-${ch}-1`]
      }
    ],
    quiz: {
      passingScore: 70,
      questions: [
        { id: `q1-${ch}`, type: "mcq", question: `W3.CSS ${chapterTitles[ch] || "feature"} is important because?`, options: ["It's required", "It improves styling", "It's optional", "It doesn't matter"], correctAnswer: 1, explanation: "This feature helps create beautiful UIs.", difficulty: 1 },
        { id: `q2-${ch}`, type: "true-false", question: "W3.CSS classes can be combined.", correctAnswer: true, explanation: "You can combine multiple W3.CSS classes on an element.", difficulty: 1 },
        { id: `q3-${ch}`, type: "code-output", question: "What does w3-container do?", correctAnswer: "Adds 16px padding", explanation: "Container provides consistent padding.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "Class", value: `class="w3-..."` },
      { label: "Color", value: "w3-blue, w3-green, w3-red" },
      { label: "Container", value: "w3-container" }
    ]
  });
}

export const w3cssTrack: Track = {
  id: "w3css",
  title: "W3.CSS",
  titleBn: "W3.CSS",
  tagline: "Style anything. No JavaScript needed.",
  taglineBn: "যেকোনো কিছুতে স্টাইল। জাভাস্ক্রিপ্ট লাগবে না।",
  icon: "https://img.icons8.com/color/144/w3schools-logo.png",
  colorVar: "w3css",
  totalChapters: 55,
  estimatedHours: 45,
  chapters: w3cssChapters,
  brandColor: "#04AA6D",
  glowColor: "rgba(4, 170, 109, 0.4)"
};