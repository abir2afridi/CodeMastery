import type { Track, Chapter } from "./types";

// Bengali translations for PHP content
const phpContentBn: Record<string, string> = {
  "php-1-1": `ক্লায়েন্ট-সাইড বনাম সার্ভার-সাইড: মূল পার্থক্য। রেস্তোরাঁর মেনু (HTML/CSS) গ্রাহক যা দেখে। রান্নাঘর (PHP সার্ভার) যেখানে প্রকৃত খাবার (ডেটা, লজিক) তৈরি হয়। আপনি রান্নাঘর দেখতে পান না — শুধু তৈরি খাবার পান। PHP হলো সেই রান্নাঘর।

আপনি যখন কোনো ওয়েবসাইটে যান, আপনার ব্রাউজার সার্ভারে REQUEST পাঠায়। সার্ভারে PHP থাকলে, প্রথমে PHP কোড এক্সিকিউট করে, তারপর HTML জেনারেট করে, এবং শুধু HTML ব্রাউজারে পাঠায়। আপনার ব্রাউজার PHP কোড দেখে না — শুধু আউটপুট দেখে।`,

  "php-1-2": `PHP তৈরি করেছিল Rasmus Lerdorf 1994 সালে "Personal Home Page tools" নামে। এটি বিবর্তিত হয়েছে: PHP 3 (1997 — প্রথম প্রকৃত রিলিজ), PHP 4, PHP 5 (2004 — OOP), PHP 7 (2015 — 2x স্পিড বুস্ট), PHP 8.0 (2020 — JIT কম্পাইলার, নেমড আর্গুমেন্টস, match এক্সপ্রেশন), PHP 8.1 (2021 — enums, fibers, readonly প্রপার্টিস), PHP 8.2 (2022 — readonly ক্লাসes), PHP 8.3 (2023 — typed ক্লাস কনস্ট্যান্টস)।`,

  "php-1-3": `স্থানীয় ডেভেলপমেন্ট সেটআপ: XAMPP (Windows/Mac/Linux): apachefriends.org থেকে ইন্সটল করুন। Apache + PHP + MySQL অন্তর্ভুক্ত। Laragon (Windows): দ্রুত এবং পরিষ্কার। PHP বিল্ট-ইন সার্ভার: php -S localhost:8000। VS Code এক্সটেনশন: PHP Intelephense, PHP Debug।`,

  "php-1-4": `প্রথম PHP ফাইল তৈরি করুন:
<?php
echo "Hello, World!";
echo "<br>";
echo "PHP version: " . PHP_VERSION;
?>
প্রতিটি অক্ষরের ব্যাখ্যা:
- <?php — PHP ওপেনিং ট্যাগ। সার্ভারকে বলে "PHP কোড এখান থেকে শুরু"।
- echo — ব্রাউজারে টেক্সট/HTML আউটপুট দেয়।
- "Hello, World!" — স্ট্রিং লিটারাল।
- . — স্ট্রিং কনক্যাটেনেশন অপারেটর (JavaScript-এর + না)।
- ; — প্রতিটি PHP স্টেটমেন্ট অবশ্যই সেমিকোলন দিয়ে শেষ হবে।`,

  "php-1-5": `PHP এবং HTML মিশিয়ে ব্যবহার:
<?php
$name = "CodeMastery";
$year = date("Y");
echo "<h1>Welcome to $name</h1>";
echo "<p>Current year: $year</p>";
?>
PHP যেকোনো জায়গায় HTML-এ এম্বেড করা যায়। ডাবল-কোটেড স্ট্রিং-এ ভেরিয়েবল অটো-ইন্টারপোলেটেড হয়। date("Y") বর্তমান বছর রিটার্ন করে।`,
};

const phpChapters: Chapter[] = [
  // Part 1: PHP Basics (Chapters 1-10)
  {
    id: "php-1",
    number: 1,
    partLabel: "Part 1: PHP Basics",
    title: "What Is PHP and How Does the Web Work?",
    subtitle: "From zero to understanding server-side programming",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 100,
    prerequisites: [],
    learningObjectives: [
      "Understand server-side vs client-side programming",
      "Know what PHP is and where it runs",
      "Set up a local PHP development environment",
      "Write and run the first PHP file",
      "Understand how PHP generates HTML"
    ],
    sections: [
      {
        id: "php-1-1",
        title: "Client-Side vs Server-Side: The Core Difference",
        whyItMatters: "Understanding where code runs is fundamental to web development.",
        content: `When you visit a website, your browser sends a REQUEST to a server. If the server has PHP, it executes the PHP code FIRST, generates HTML from it, then sends ONLY the HTML back to your browser.

Your browser never sees the PHP code — only its output. This is fundamentally different from JavaScript (which runs in YOUR browser, client-side).

PHP is used for:
• Generating dynamic HTML pages
• Handling form submissions
• Talking to databases (MySQL)
• Authenticating users
• Sending emails
• Processing payments
• Building REST APIs
• Running WordPress (which powers 43% of ALL websites)

🔗 Language Bridge — If you know JavaScript: PHP runs on the SERVER — the user never sees PHP code, only its HTML output.

🔗 Language Bridge — If you know Python: PHP uses $ for variables, similar dynamic typing, but with semicolons and curly braces.

🔗 Language Bridge — If you know C/C++/Java: PHP borrows its syntax heavily — curly braces, semicolons, similar operators.`,
        codeExamples: [
          {
            id: "php-server-1",
            title: "How a PHP Request Works",
            description: "The journey from browser to server and back",
            code: {
              php: `// Browser sends: GET /index.php
// Server (Apache/Nginx + PHP) processes:
// 1. Executes PHP code
// 2. Generates HTML output
// 3. Sends HTML to browser

<?php
echo "<h1>Hello from Server!</h1>";
// Browser receives ONLY this HTML:
?>`
            },
            explanation: "PHP runs on the server. The browser never sees the PHP code."
          }
        ],
        callouts: [
          {
            type: "info",
            title: "PHP Powers the Web",
            content: "PHP powers over 77% of all websites with known server-side languages."
          },
          {
            type: "php-bridge",
            title: "🔗 Language Bridge",
            content: "If you know JavaScript: PHP runs on the SERVER — the user never sees PHP code."
          }
        ],
        contentBn: phpContentBn["php-1-1"]
      },
      {
        id: "php-1-2",
        title: "PHP History and Versions",
        whyItMatters: "Knowing version history helps you use modern features and avoid deprecated patterns.",
        content: `PHP was created by Rasmus Lerdorf in 1994 as "Personal Home Page tools" — originally a set of Perl scripts to track visits to his online resume.

Evolution timeline:
• 1994 — Created as "Personal Home Page tools"
• 1997 — PHP 3.0 — first real release, rewritten from scratch
• 2000 — PHP 4.0 — added sessions
• 2004 — PHP 5.0 — major OOP improvements, references
• 2015 — PHP 7.0 — 2x speed boost, scalar type hints
• 2020 — PHP 8.0 — JIT compiler, named arguments, match expression, nullsafe operator
• 2021 — PHP 8.1 — enums, fibers, readonly properties
• 2022 — PHP 8.2 — readonly classes, Disjunctive Normal Form types
• 2023 — PHP 8.3 — typed class constants, json_validate()

Always use PHP 8.x in new projects.`,
        codeExamples: [
          {
            id: "php-version-1",
            title: "Checking PHP Version",
            description: "Use PHP_VERSION constant",
            code: {
              php: `<?php
echo "Running PHP " . PHP_VERSION . "\\n";
// Output: Running PHP 8.2.3

// Version-specific features
echo PHP_MAJOR_VERSION . "." . PHP_MINOR_VERSION; // 8.2
?>`
            },
            explanation: "PHP_VERSION is a predefined constant with current version string."
          }
        ],
        contentBn: phpContentBn["php-1-2"]
      },
      {
        id: "php-1-3",
        title: "Setting Up Local Development",
        whyItMatters: "You need a local environment to develop and test PHP applications.",
        content: `Option A — XAMPP (Windows/Mac/Linux):
Install from apachefriends.org. Includes Apache (web server) + PHP + MySQL. Start Apache in XAMPP Control Panel. Files go in C:/xampp/htdocs/ (Windows). Access via http://localhost/yourfile.php

Option B — Laragon (Windows, recommended):
Faster and cleaner than XAMPP. Download from laragon.org. Auto-creates virtual hosts.

Option C — PHP Built-in Server (any OS):
php -S localhost:8000 in any directory. Best for quick testing. No setup needed!

Option D — Docker:
docker run -p 8080:80 -v $(pwd):/var/www/html php:8.2-apache

VS Code Extensions:
• PHP Intelephense — code intelligence, autocomplete
• PHP Debug — Xdebug integration for debugging
• PHP Namespace Resolver — organize use statements`,
        codeExamples: [
          {
            id: "php-local-1",
            title: "Quick Start with Built-in Server",
            description: "No installation needed",
            code: {
              php: `// Terminal commands:
// 1. Install PHP (if not installed)
// 2. Navigate to your project folder
// 3. Run:

php -S localhost:8000

// 4. Open browser to http://localhost:8000

// To stop: Ctrl+C`
            },
            explanation: "PHP built-in server requires no setup — just one command."
          }
        ],
        contentBn: phpContentBn["php-1-3"]
      },
      {
        id: "php-1-4",
        title: "First PHP File",
        whyItMatters: "Writing your first PHP script teaches the basic syntax rules.",
        content: `Create index.php in your htdocs folder:

<?php
echo "Hello, World!";
echo "<br>";
echo "PHP version: " . PHP_VERSION;
?>

Every character explained:
• <?php — PHP opening tag. Tells the server "PHP code starts here". Required!
• echo — outputs text/HTML to the browser. Like print in Python or console.log in JS (but outputs to browser, not console).
• "Hello, World!" — string literal in double quotes. Single quotes also work (slight difference — later).
• . — the string concatenation operator in PHP (NOT + like JavaScript). "Hello" . " World" = "Hello World"
• PHP_VERSION — a PHP predefined constant. No $ sign (constants don't have $).
• ; — every PHP statement MUST end with semicolon. This is REQUIRED. Unlike Python where newlines matter.
• ?> — PHP closing tag. Optional if file is pure PHP (recommended to omit at end of pure PHP files to prevent accidental whitespace).`,
        codeExamples: [
          {
            id: "php-hello-1",
            title: "Hello World",
            description: "Your first PHP program",
            code: {
              php: `<?php
echo "Hello, World!";
?>`
            },
            explanation: "The simplest possible PHP program."
          }
        ],
        callouts: [
          {
            type: "common-mistake",
            title: "Missing Semicolon",
            content: "Every PHP statement must end with a semicolon. Missing semicolon is the #1 beginner error!"
          },
          {
            type: "pro-tip",
            title: "Omit Closing Tag",
            content: "For pure PHP files, omit the ?> closing tag to prevent accidental whitespace causing 'headers already sent' errors."
          }
        ],
        contentBn: phpContentBn["php-1-4"]
      },
      {
        id: "php-1-5",
        title: "PHP and HTML: Mixing Them",
        whyItMatters: "The ability to embed PHP in HTML is what makes PHP powerful for dynamic web pages.",
        content: `PHP can be embedded ANYWHERE in HTML:

<?php
$name = "CodeMastery";
$year = date("Y");
echo "<h1>Welcome to $name</h1>";
echo "<p>Current year: $year</p>";
?>

The server processes PHP tags, replaces them with output, and sends pure HTML to the browser.

Key features:
• Variables inside double-quoted strings are auto-interpolated ($name becomes its value)
• Use {$name} for explicit interpolation in complex strings
• date("Y") returns current year — first taste of PHP's built-in functions
• date() can format any date in countless ways`,
        codeExamples: [
          {
            id: "php-html-1",
            title: "Dynamic HTML Page",
            description: "PHP generating HTML dynamically",
            code: {
              php: `<!DOCTYPE html>
<html>
<body>
<?php
$name = "CodeMastery";
$year = date("Y");
echo "<h1>Welcome to $name</h1>";
echo "<p>Current year: $year</p>";
?>
</body>
</html>`
            },
            explanation: "PHP runs on server, browser only sees the generated HTML."
          }
        ],
        contentBn: phpContentBn["php-1-5"]
      }
    ],
    exercises: [
      {
        id: "ex-1-1",
        title: "Complete HTML Page",
        difficulty: 1,
        description: "Create a PHP file that outputs a complete HTML page with your name as the title, an h1 heading, and today's date using date() function.",
        requirements: ["Complete HTML structure", "Your name in title", "h1 heading with greeting", "Display current date"],
        starterCode: { php: `<?php\n// Create your HTML page here\n?>` },
        hints: ["Use date('Y-m-d') for date", "Remember to close HTML tags"],
        solution: { php: `<!DOCTYPE html>\n<html>\n<head>\n<title>My PHP Page</title>\n</head>\n<body>\n<?php\n$name = "Student";\necho "<h1>Welcome, $name!</h1>";\necho "<p>Today is " . date("Y-m-d") . "</p>";\n?>\n</body>\n</html>` },
        solutionExplanation: "Created complete HTML page with dynamic PHP content."
      },
      {
        id: "ex-1-2",
        title: "Programming Languages List",
        difficulty: 1,
        description: "Write PHP that outputs an HTML unordered list of 5 programming languages using echo with HTML tags.",
        requirements: ["Use echo statement", "Create <ul> with <li> items", "5 programming languages"],
        starterCode: { php: `<?php\n// Output list of languages\n?>` },
        hints: ["Use <ul> and <li> tags", "Each echo adds to output"],
        solution: { php: `<?php\necho "<ul>";\necho "<li>JavaScript</li>";\necho "<li>Python</li>";\necho "<li>PHP</li>";\necho "<li>Java</li>";\necho "<li>C++</li>";\necho "</ul>";\n?>` },
        solutionExplanation: "Used echo to output HTML list elements."
      },
      {
        id: "ex-1-3",
        title: "System Information Page",
        difficulty: 2,
        description: "Create a PHP file that uses PHP_OS, PHP_VERSION, PHP_INT_MAX, PHP_EOL, and PHP_MAJOR_VERSION constants to display a system information page.",
        requirements: ["Display at least 5 PHP constants", "Use inline CSS for styling"],
        starterCode: { php: `<?php\n// Show system info\n?>` },
        hints: ["PHP has many predefined constants", "Use . for concatenation"],
        solution: { php: `<?php\necho "<div style='font-family: monospace; padding: 20px;'>";\necho "<h2>PHP System Information</h2>";\necho "PHP Version: " . PHP_VERSION . "<br>";\necho "Major Version: " . PHP_MAJOR_VERSION . "<br>";\necho "Operating System: " . PHP_OS . "<br>";\necho "Max Integer: " . PHP_INT_MAX . "<br>";\necho "Line Ending: " . PHP_EOL . "<br>";\necho "</div>";\n?>` },
        solutionExplanation: "Displayed multiple PHP predefined constants."
      }
    ],
    quiz: {
      passingScore: 70,
      questions: [
        { id: "q1", type: "mcq" as const, question: "Where does PHP code execute?", options: ["In the browser", "On the user's computer", "On the web server", "In a database"], correctAnswer: 2, explanation: "PHP is a server-side language. The web server processes PHP code and sends only the resulting HTML to the browser.", difficulty: 1 },
        { id: "q2", type: "true-false" as const, question: "PHP is a client-side language like JavaScript.", correctAnswer: false, explanation: "PHP runs on the server. JavaScript runs in the browser.", difficulty: 1 },
        { id: "q3", type: "fill-blank" as const, question: "In PHP, the string concatenation operator is ___.", correctAnswer: ".", explanation: "Unlike JavaScript which uses + for concatenation, PHP uses a dot.", difficulty: 1 },
        { id: "q4", type: "code-output" as const, question: "What does echo PHP_VERSION; print?", correctAnswer: "Current PHP version (e.g., 8.2.3)", explanation: "PHP_VERSION is a predefined constant containing the current version string.", difficulty: 1 },
        { id: "q5", type: "spot-the-bug" as const, question: "Find the bug: <?php echo \"Hello World\" ?>", correctAnswer: "Missing semicolon after 'Hello World'", explanation: "PHP requires a semicolon at the end of every statement.", difficulty: 1 },
        { id: "q6", type: "mcq" as const, question: "What percentage of websites use PHP?", options: ["10%", "30%", "55%", "77%"], correctAnswer: 3, explanation: "PHP powers over 77% of websites with known server-side languages.", difficulty: 1 },
        { id: "q7", type: "mcq" as const, question: "Which is NOT a valid way to run PHP locally?", options: ["XAMPP", "PHP built-in server", "Open .php file directly in browser", "Docker"], correctAnswer: 2, explanation: "You cannot open a .php file directly in a browser. PHP must be executed by a server.", difficulty: 1 },
        { id: "q8", type: "true-false" as const, question: "The PHP closing tag ?> is required at the end of a pure PHP file.", correctAnswer: false, explanation: "For files containing only PHP code, it is recommended to omit the closing tag.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "Opening tag", value: "<?php" },
      { label: "Output", value: "echo" },
      { label: "Concatenation", value: "." },
      { label: "Statement end", value: ";" },
      { label: "Version", value: "PHP_VERSION" }
    ]
  }
];

// Generate remaining chapters 2-90
for (let ch = 2; ch <= 90; ch++) {
  const prevNum = ch - 1;
  const partLabel = ch <= 10 ? "Part 1: PHP Basics" :
                    ch <= 16 ? "Part 2: String Functions" :
                    ch <= 22 ? "Part 3: Array Functions" :
                    ch <= 23 ? "Part 4: Math Functions" :
                    ch <= 25 ? "Part 5: Date and Time" :
                    ch <= 28 ? "Part 6: Filesystem" :
                    ch <= 32 ? "Part 7: Forms and HTTP" :
                    ch <= 42 ? "Part 8: OOP in PHP" :
                    ch <= 50 ? "Part 9: Database (MySQLi)" :
                    ch <= 60 ? "Part 10: JSON, API, Advanced" :
                    ch <= 75 ? "Part 11: PHP Projects" :
                    "Part 12: Reference";

  const chapterTitles: Record<number, string> = {
    2: "Variables, Data Types, and Constants",
    3: "Operators — All Types",
    4: "Control Flow — if/else/switch/match",
    5: "Loops — while, for, foreach",
    6: "Functions — Declaration and Parameters",
    7: "Variable Scope and Superglobals",
    8: "Include and Require — Code Organization",
    9: "Error Handling — try/catch",
    10: "Form Handling — GET and POST",
    11: "String Functions — Part 1",
    12: "String Functions — Part 2 (Search/Replace)",
    13: "String Functions — Part 3 (Transformation)",
    14: "String Functions — Part 4 (Comparison)",
    15: "String Functions — Part 5 (Multibyte/Encoding)",
    16: "Regular Expressions in PHP",
    17: "Array Basics and Creation",
    18: "Array Manipulation Functions",
    19: "Array Sorting Functions",
    20: "Array Search and Filter Functions",
    21: "Array Math and Misc Functions",
    22: "Multidimensional Arrays",
    23: "Math Functions — Complete Reference",
    24: "Date Functions — Core Reference",
    25: "DateTime Class — OOP Date Handling",
    26: "File Reading and Writing",
    27: "Directory and Path Functions",
    28: "File Upload Handling",
    29: "Handling HTML Forms",
    30: "Form Validation — Complete Guide",
    31: "Sessions and Cookies",
    32: "Headers and Redirects",
    33: "Classes and Objects — Part 1",
    34: "Classes and Objects — Part 2",
    35: "Magic Methods",
    36: "PHP 8 OOP Features",
    37: "Interfaces and Abstract Classes",
    38: "Traits — Code Reuse",
    39: "Anonymous Classes and Closures",
    40: "Generators and yield",
    41: "SPL Data Structures",
    42: "Design Patterns in PHP",
    43: "Introduction to Databases",
    44: "MySQLi Connection",
    45: "MySQLi CRUD Operations",
    46: "Prepared Statements",
    47: "MySQLi Transactions",
    48: "PDO — Database Abstraction",
    49: "Database Design Patterns",
    50: "MySQL Functions Reference",
    51: "JSON in PHP",
    52: "cURL — HTTP Requests",
    53: "XML Parsing",
    54: "Output Control Functions",
    55: "Network Functions",
    56: "Misc Functions Reference",
    57: "Calendar Functions",
    58: "Var Handling Functions",
    59: "PHP Security — Complete Guide",
    60: "Composer and Namespaces",
    61: "Project: Dynamic Blog",
    62: "Project: User Registration/Login",
    63: "Project: File Manager",
    64: "Project: REST API",
    65: "Project: Shopping Cart",
    66: "Project: Admin Dashboard",
    67: "Project: CSV Import/Export",
    68: "Project: Email Contact Form",
    69: "Challenge Set: Strings",
    70: "Challenge Set: Arrays",
    71: "Challenge Set: Math",
    72: "Challenge Set: File I/O",
    73: "Challenge Set: OOP",
    74: "Challenge Set: SQL",
    75: "Mastery Recap",
    76: "Filter Functions Reference",
    77: "Hash Functions Reference",
    78: "bcmath and GMP Functions",
    79: "Stream Functions",
    80: "Zip Functions",
    81: "PHP Error Constants",
    82: "Exception Classes",
    83: "Reflection API",
    84: "SPL Data Structures Deep Dive",
    85: "PHP CLI — Command Line",
    86: "HTTP Headers Complete",
    87: "PHP Type System (PHP 8)",
    88: "PHP 8 New Features Summary",
    89: "PHP Interview Questions",
    90: "Certificate Prep — Mock Exam"
  };

  phpChapters.push({
    id: `php-${ch}`,
    number: ch,
    partLabel,
    title: chapterTitles[ch] || `PHP Chapter ${ch}`,
    subtitle: `PHP ${chapterTitles[ch] || "topic"}`,
    difficulty: ch <= 5 ? "Absolute Beginner" :
                ch <= 15 ? "Beginner" :
                ch <= 30 ? "Intermediate" :
                ch <= 50 ? "Advanced" :
                "Expert",
    estimatedMinutes: 25 + (ch * 0.5),
    xpReward: Math.min(150, 50 + ch),
    prerequisites: [`php-${prevNum}`],
    learningObjectives: [`Master PHP ${chapterTitles[ch] || "concept"}`],
    sections: [
      {
        id: `php-${ch}-1`,
        title: chapterTitles[ch] || `Topic ${ch}`,
        whyItMatters: "Understanding this PHP concept is essential for modern web development.",
        content: `This chapter covers PHP ${chapterTitles[ch] || "concepts"}. PHP provides powerful built-in functions and features for every web development need.

Key points:
• PHP has built-in functions for everything (strings, arrays, files, databases)
• Object-oriented programming is fully supported since PHP 5
• PHP 8 brought major improvements (JIT, named arguments, enums)
• Composer + PSR standards make modern PHP development professional`,
        codeExamples: [
          {
            id: `php-${ch}-ex1`,
            title: "Example",
            description: "PHP demo",
            code: {
              php: `<?php
// PHP Chapter ${ch}: ${chapterTitles[ch] || "topic"}
echo "Learning PHP " . PHP_VERSION . "\\n";
echo "Current chapter: ${ch}\\n";
// More code examples in full chapter...
?>`
            },
            explanation: "PHP makes web development powerful and accessible."
          }
        ],
        contentBn: phpContentBn[`php-${ch}-1`]
      }
    ],
    quiz: {
      passingScore: 70,
      questions: [
        { id: `q1-${ch}`, type: "mcq" as const, question: `PHP ${chapterTitles[ch] || "feature"} is important because?`, options: ["It's required", "It improves web development", "It's optional", "It doesn't matter"], correctAnswer: 1, explanation: "This feature helps create robust PHP applications.", difficulty: 1 },
        { id: `q2-${ch}`, type: "true-false" as const, question: "PHP can be mixed with HTML.", correctAnswer: true, explanation: "PHP can be embedded anywhere in HTML.", difficulty: 1 },
        { id: `q3-${ch}`, type: "spot-the-bug" as const, question: "Common bug in this topic?", options: ["Missing semicolon", "Wrong operator", "Case sensitivity", "All of above"], correctAnswer: 3, explanation: "PHP has common pitfalls to watch for.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "Opening tag", value: "<?php" },
      { label: "Variables", value: "$name" },
      { label: "Output", value: "echo" },
      { label: "Arrays", value: "array()" }
    ]
  });
}

export const phpTrack: Track = {
  id: "php",
  title: "PHP",
  titleBn: "PHP",
  tagline: "The web's most popular server-side language",
  taglineBn: "ওয়েবের সবচেয়ে জনপ্রিয় সার্ভার-সাইড ভাষা",
  icon: "🐘",
  colorVar: "php",
  totalChapters: 90,
  estimatedHours: 130,
  chapters: phpChapters,
  brandColor: "#8892BF",
  glowColor: "rgba(136, 146, 191, 0.4)"
};