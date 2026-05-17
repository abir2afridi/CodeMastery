import type { Track, Chapter } from "./types";

const kotlinChapters: Chapter[] = [
  {
    id: "kotlin-1",
    number: 1,
    partLabel: "Part 1: Kotlin Fundamentals",
    title: "What Is Kotlin and Why It Matters?",
    subtitle: "Introduction to Modern Kotlin",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: [],
    learningObjectives: ["Understand what Kotlin is", "Know Kotlin's history", "Understand Kotlin's advantages over Java"],
    sections: [
      {
        id: "kotlin-1-1",
        title: "Kotlin Overview",
        whyItMatters: "Kotlin is Google's preferred language for Android development.",
        content: `Kotlin is a modern programming language developed by JetBrains that runs on the Java Virtual Machine (JVM). It officially became Google's preferred language for Android development in 2017, replacing Java as the default choice.

Why Kotlin matters:
- 100% interoperable with Java - use existing Java libraries
- More concise than Java - less boilerplate code
- Null safety built-in - prevents NullPointerException
- Modern features - coroutines, extension functions, smart casts
- Used by Google, Netflix, Airbnb, Uber, and many major companies

Kotlin can be used for:
- Android app development
- Backend development with Ktor and Spring
- Desktop applications
- Web development (JavaScript compilation)
- Data science (with Kotlin Notebook)
- Multiplatform development (iOS, web, desktop)`,

        codeExamples: [
          {
            id: "kotlin-1-ex1",
            title: "Hello World in Kotlin",
            description: "Simple Kotlin program",
            code: { kotlin: "fun main() {\n    println(\"Hello, Kotlin!\")\n}\n\n// Output: Hello, Kotlin!" },
            explanation: "Kotlin's main function is the entry point. println prints to console."
          }
        ]
      },
      {
        id: "kotlin-1-2",
        title: "Why Kotlin Over Java?",
        whyItMatters: "Understand Kotlin's advantages.",
        content: `Kotlin addresses many pain points in Java while maintaining full compatibility.`,

        codeExamples: [
          {
            id: "kotlin-1-ex2",
            title: "Kotlin vs Java Comparison",
            description: "Code comparison",
            code: { kotlin: "// Kotlin - concise and safe\nval name: String = \"Kotlin\"\nprintln(\"Hello, \\$name!\")\n\n// Java verbose equivalent:\n// String name = \"Kotlin\";\n// System.out.println(\"Hello, \" + name + \"!\");" },
            explanation: "Kotlin uses string templates and type inference for cleaner code."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What company developed Kotlin?", options: ["Google", "Microsoft", "JetBrains", "Oracle"], correctAnswer: 2, explanation: "JetBrains developed Kotlin, known for IntelliJ IDEA.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What year did Kotlin become Android's preferred language?", options: ["2015", "2017", "2019", "2021"], correctAnswer: 1, explanation: "Google announced Kotlin as the preferred language in 2017.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What does Kotlin run on?", options: ["Native machine code", "Java Virtual Machine", "Python interpreter", "Node.js"], correctAnswer: 1, explanation: "Kotlin runs on the JVM and can also compile to JavaScript.", difficulty: 1 },
        { id: "q4", type: "true-false" as const, question: "Kotlin is 100% interoperable with Java.", correctAnswer: true, explanation: "Kotlin can use all Java libraries and vice versa.", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "What is Kotlin's main safety feature?", options: ["Type inference", "Null safety", "Pattern matching", "Extension functions"], correctAnswer: 1, explanation: "Kotlin has built-in null safety to prevent NullPointerException.", difficulty: 1 },
        { id: "q6", type: "mcq" as const, question: "What can Kotlin NOT be used for?", options: ["Android development", "Backend development", "iOS development", "COBOL programming"], correctAnswer: 3, explanation: "Kotlin targets JVM, JS, and native - not COBOL.", difficulty: 1 },
        { id: "q7", type: "true-false" as const, question: "Kotlin replaces Java entirely in Android.", correctAnswer: false, explanation: "Kotlin works alongside Java, not replacing it entirely.", difficulty: 1 },
        { id: "q8", type: "mcq" as const, question: "Which company uses Kotlin for backend?", options: ["Only small startups", "Netflix, Amazon, Google", "No major companies", "Only Google"], correctAnswer: 1, explanation: "Major companies like Netflix use Kotlin for backend.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "Kotlin", value: "Modern JVM language" },
      { label: "Interoperable", value: "Works with Java" },
      { label: "Null safety", value: "Prevents NPE" },
      { label: "Google preferred", value: "For Android development" }
    ]
  },
  {
    id: "kotlin-2",
    number: 2,
    title: "Installing Kotlin and IntelliJ IDEA",
    subtitle: "Setting Up Development Environment",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["kotlin-1"],
    learningObjectives: ["Install IntelliJ IDEA", "Configure Kotlin plugin", "Create first Kotlin project"],
    sections: [
      {
        id: "kotlin-2-1",
        title: "Installing IntelliJ IDEA",
        whyItMatters: "The official IDE for Kotlin development.",
        content: `IntelliJ IDEA is the best IDE for Kotlin development. The Community Edition is free and includes excellent Kotlin support.`,

        codeExamples: [
          {
            id: "kotlin-2-ex1",
            title: "Creating Kotlin Project",
            description: "Step-by-step project creation",
            code: { kotlin: "// Steps:\n// 1. Download IntelliJ IDEA from jetbrains.com\n// 2. Install the Community Edition\n// 3. Open IntelliJ IDEA\n// 4. File -> New Project\n// 5. Select \"Kotlin\" and \"Kotlin JVM\"\n// 6. Name your project \"HelloKotlin\"\n// 7. Create src folder and add Kotlin file\n\n// Your first Kotlin file:\nfun main() {\n    println(\"Hello from IntelliJ!\")\n}" },
            explanation: "Follow these steps to set up your Kotlin development environment."
          }
        ]
      },
      {
        id: "kotlin-2-2",
        title: "Alternative: Online Playground",
        whyItMatters: "Quick Kotlin testing without installation.",
        content: `You can also try Kotlin online using the Kotlin Playground or JDoodle.`,

        codeExamples: [
          {
            id: "kotlin-2-ex2",
            title: "Online Options",
            description: "No-install alternatives",
            code: { kotlin: "// Online Kotlin Playground\n// URL: playground.kotlinlang.org\n\n// Or use Kotlin Kernel for Jupyter\n// %use kotlin\n\n// Or use Replit, CodeSandbox, etc.\n// All support Kotlin!" },
            explanation: "Online options are great for quick experiments."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "Which IDE is best for Kotlin?", options: ["Eclipse", "NetBeans", "IntelliJ IDEA", "VS Code"], correctAnswer: 2, explanation: "IntelliJ IDEA is the official and best Kotlin IDE.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "Is IntelliJ Community Edition free?", options: ["No", "Yes", "Only for students", "Only for non-commercial"], correctAnswer: 1, explanation: "Community Edition is free and open source.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What is Kotlin Playground?", options: ["Mobile app", "Online Kotlin editor", "Book", "Game"], correctAnswer: 1, explanation: "playground.kotlinlang.org is an online Kotlin editor.", difficulty: 1 },
        { id: "q4", type: "true-false" as const, question: "You need to install Java before Kotlin.", correctAnswer: true, explanation: "Kotlin runs on JVM, so Java must be installed first.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "IntelliJ IDEA", value: "Best Kotlin IDE" },
      { label: "Community Edition", value: "Free version" },
      { label: "Kotlin Playground", value: "Online alternative" }
    ]
  },
  {
    id: "kotlin-3",
    number: 3,
    title: "Variables and Data Types",
    subtitle: "Storing and Using Data",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["kotlin-2"],
    learningObjectives: ["Understand val and var", "Use basic data types", "Type inference"],
    sections: [
      {
        id: "kotlin-3-1",
        title: "Variables: val and var",
        whyItMatters: "Understanding mutability in Kotlin.",
        content: `Kotlin has two types of variables:
- val (immutable) - cannot be reassigned (like final in Java)
- var (mutable) - can be reassigned

Use val by default unless you need to change the value.`,

        codeExamples: [
          {
            id: "kotlin-3-ex1",
            title: "Variables in Kotlin",
            description: "Using val and var",
            code: { kotlin: "// Immutable - use whenever possible\nval name: String = \"Kotlin\"\n// name = \"Java\"  // ERROR: Cannot reassign\n\n// Mutable - use when needed\nvar count = 0\ncount = 1        // OK\ncount = 2        // OK\n\n// Type inference - Kotlin infers the type\nval inferred = \"Hello\"   // String\nvar number = 42           // Int\nvar decimal = 3.14        // Double\n\n// Explicit type declaration\nval explicit: Int = 100" },
            explanation: "Prefer val for immutability - it leads to safer code."
          }
        ]
      },
      {
        id: "kotlin-3-2",
        title: "Basic Data Types",
        whyItMatters: "Know the primitive types in Kotlin.",
        content: `Kotlin has these basic types: Int, Long, Float, Double, Boolean, Char, String, Byte, Short.`,

        codeExamples: [
          {
            id: "kotlin-3-ex2",
            title: "Data Types",
            description: "Basic Kotlin types",
            code: { kotlin: "// Numbers\nval intNum: Int = 42\nval longNum: Long = 1_000_000L\nval doubleNum: Double = 3.14159\nval floatNum: Float = 3.14f\n\n// Text\nval text: String = \"Hello\"\nval char: Char = 'A'\n\n// Boolean\nval isKotlin: Boolean = true\nval isJava: Boolean = false\n\n// Size info\nprintln(Int.MIN_VALUE)  // -2147483648\nprintln(Int.MAX_VALUE)  // 2147483647" },
            explanation: "Kotlin types are similar to Java but with improvements."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "Which variable cannot be reassigned?", options: ["val", "var", "let", "const"], correctAnswer: 0, explanation: "val declares an immutable variable.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What is type inference?", options: ["Explicit typing", "Automatic type detection", "Type conversion", "Type erasure"], correctAnswer: 1, explanation: "Kotlin automatically determines the type from the value.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What type is 3.14?", options: ["Int", "Float", "Double", "Decimal"], correctAnswer: 2, explanation: "Decimal literals default to Double in Kotlin.", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "How do you declare Int explicitly?", options: ["val x: integer = 5", "val x: Int = 5", "val Int x = 5", "val x = Int(5)"], correctAnswer: 1, explanation: "Use colon and type name after variable name.", difficulty: 1 },
        { id: "q5", type: "true-false" as const, question: "You should always prefer var over val.", correctAnswer: false, explanation: "Prefer val for immutability and safer code.", difficulty: 1 },
        { id: "q6", type: "mcq" as const, question: "What is the size of Int?", options: ["16-bit", "32-bit", "64-bit", "8-bit"], correctAnswer: 1, explanation: "Int in Kotlin is a 32-bit signed integer.", difficulty: 1 },
        { id: "q7", type: "true-false" as const, question: "Boolean can only be true or false.", correctAnswer: true, explanation: "Boolean has exactly two values: true and false.", difficulty: 1 },
        { id: "q8", type: "mcq" as const, question: "What does _ mean in 1_000_000?", options: ["Nothing", "Digit separator for readability", "Variable placeholder", "Error"], correctAnswer: 1, explanation: "Underscores make large numbers more readable.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "val", value: "Immutable variable" },
      { label: "var", value: "Mutable variable" },
      { label: "Int", value: "32-bit integer" },
      { label: "String", value: "Text" }
    ]
  },
  {
    id: "kotlin-4",
    number: 4,
    title: "Operators and Expressions",
    subtitle: "Performing Operations",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["kotlin-3"],
    learningObjectives: ["Use arithmetic operators", "Understand comparison operators", "Use logical operators"],
    sections: [
      {
        id: "kotlin-4-1",
        title: "Arithmetic Operators",
        whyItMatters: "Basic math operations in code.",
        content: `Kotlin supports standard arithmetic operators: +, -, *, /, %`,

        codeExamples: [
          {
            id: "kotlin-4-ex1",
            title: "Arithmetic Operations",
            description: "Math in Kotlin",
            code: { kotlin: "val a = 10\nval b = 3\n\nprintln(a + b)    // 13\nprintln(a - b)    // 7\nprintln(a * b)    // 30\nprintln(a / b)    // 3 (integer division)\nprintln(a % b)    // 1 (remainder)\n\n// Division returns different types\nprintln(10 / 3)   // 3  (Int)\nprintln(10.0 / 3) // 3.333... (Double)\n\n// Augmented assignment\nvar x = 5\nx += 3            // x = 8\nx -= 2            // x = 6\nx *= 2            // x = 12" },
            explanation: "Integer division truncates decimal part."
          }
        ]
      },
      {
        id: "kotlin-4-2",
        title: "Comparison and Logical",
        whyItMatters: "Making decisions in code.",
        content: `Comparison operators return Boolean values. Logical operators combine Boolean values.`,

        codeExamples: [
          {
            id: "kotlin-4-ex2",
            title: "Comparison and Logical",
            description: "Boolean operations",
            code: { kotlin: "val x = 10\nval y = 20\n\n// Comparison operators\nprintln(x == y)   // false\nprintln(x != y)   // true\nprintln(x < y)    // true\nprintln(x > y)    // false\nprintln(x <= y)   // true\n\n// Logical operators\nval isTrue = true\nval isFalse = false\n\nprintln(isTrue && isFalse)  // false (AND)\nprintln(isTrue || isFalse)  // true  (OR)\nprintln(!isTrue)            // false (NOT)\n\n// In ranges\nval num = 15\nprintln(num in 1..20)      // true\nprintln(num in 1 until 20) // true" },
            explanation: "Use in operator for range checking."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What is 10 / 3 in Kotlin?", options: ["3.333", "3", "Error", "3.0"], correctAnswer: 1, explanation: "Integer division returns Int, truncating the decimal.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What does % operator return?", options: ["Quotient", "Remainder", "Product", "Difference"], correctAnswer: 1, explanation: "% returns the remainder of division.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What does && mean?", options: ["OR", "AND", "NOT", "XOR"], correctAnswer: 1, explanation: "&& is the logical AND operator.", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "What is 5 in 1..10?", options: ["5..1", "True", "False", "Error"], correctAnswer: 1, explanation: "in checks if value is in the range.", difficulty: 1 },
        { id: "q5", type: "true-false" as const, question: "x += 1 is the same as x = x + 1", correctAnswer: true, explanation: "Augmented assignment is shorthand for x = x + 1.", difficulty: 1 },
        { id: "q6", type: "mcq" as const, question: "What does == compare?", options: ["Reference", "Value", "Type", "Memory"], correctAnswer: 1, explanation: "== compares values, === compares references.", difficulty: 1 },
        { id: "q7", type: "mcq" as const, question: "What is 1..5?", options: ["List of 1,2,3,4,5", "Range object", "Array", "Error"], correctAnswer: 1, explanation: "1..5 creates a range from 1 to 5 (inclusive).", difficulty: 1 },
        { id: "q8", type: "mcq" as const, question: "What does ! mean in !true?", options: ["NOT", "Factorial", "In", "Error"], correctAnswer: 0, explanation: "! negates a Boolean value.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "+ - * / %", value: "Arithmetic operators" },
      { label: "== != < > <= >=", value: "Comparison operators" },
      { label: "&& || !", value: "Logical operators" },
      { label: "in", value: "Range check" }
    ]
  },
  {
    id: "kotlin-5",
    number: 5,
    title: "Strings and String Templates",
    subtitle: "Working with Text",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["kotlin-4"],
    learningObjectives: ["Create strings", "Use string templates", "Work with string methods"],
    sections: [
      {
        id: "kotlin-5-1",
        title: "String Basics and Templates",
        whyItMatters: "Essential for displaying and formatting text.",
        content: `Strings in Kotlin are immutable. Use string templates (\$) for embedding variables in strings.`,

        codeExamples: [
          {
            id: "kotlin-5-ex1",
            title: "String Templates",
            description: "Embedding variables in strings",
            code: { kotlin: "val name = \"Kotlin\"\nval version = 1.9\n\n// Simple variable\nprintln(\"Hello, \\$name!\")\n\n// Expression in template\nprintln(\"Sum: \\${1 + 2}\")\nprintln(\"Upper: \\${name.uppercase()}\")\n\n// Multi-line strings\nval message = \"\"\"\n    Welcome to Kotlin!\n    Version: \\$version\n    Let's code!\n\"\"\".trimIndent()\n\nprintln(message)" },
            explanation: "Use \$ for variables, \${} for expressions."
          }
        ]
      },
      {
        id: "kotlin-5-2",
        title: "String Methods",
        whyItMatters: "Manipulating text data.",
        content: `Kotlin provides rich string methods for common operations.`,

        codeExamples: [
          {
            id: "kotlin-5-ex2",
            title: "String Methods",
            description: "Common string operations",
            code: { kotlin: "val text = \"Kotlin Programming\"\n\n// Length and case\nprintln(text.length)           // 18\nprintln(text.uppercase())      // KOTLIN PROGRAMMING\nprintln(text.lowercase())      // kotlin programming\nprintln(text.capitalize())     // Kotlin programming\n\n// Substring and search\nprintln(text.substring(0, 6))  // Kotlin\nprintln(text.indexOf(\"Pro\"))   // 7\nprintln(text.startsWith(\"Kot\")) // true\nprintln(text.endsWith(\"ing\"))   // true\n\n// Replace and split\nval replaced = text.replace(\"Kotlin\", \"Java\")\nprintln(replaced)               // Java Programming\n\nval parts = \"apple,banana,cherry\".split(\",\")\nprintln(parts)                  // [apple, banana, cherry]" },
            explanation: "String methods make text manipulation easy."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does \$name do in a string?", options: ["Prints $", "Inserts variable", "Creates array", "Nothing"], correctAnswer: 1, explanation: "\$ inserts the variable value into the string.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What is \${1+2}?", options: ["$\\{1+2\\}", "3", "1+2", "Error"], correctAnswer: 1, explanation: "\${} evaluates the expression inside.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "How do you create multi-line strings?", options: ["\\\\n", "\"\"\" ... \"\"\"", "multiline", "Here strings"], correctAnswer: 1, explanation: "Triple quotes create multi-line strings.", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "What does length return?", options: ["Last index", "Character count", "Bytes", "None"], correctAnswer: 1, explanation: "length returns the number of characters.", difficulty: 1 },
        { id: "q5", type: "true-false" as const, question: "Strings in Kotlin are mutable.", correctAnswer: false, explanation: "Kotlin strings are immutable - they cannot be changed after creation.", difficulty: 1 },
        { id: "q6", type: "mcq" as const, question: "What does split return?", options: ["String", "Array/List", "Map", "Set"], correctAnswer: 1, explanation: "split returns a List of substrings.", difficulty: 1 },
        { id: "q7", type: "mcq" as const, question: "Which method finds position of substring?", options: ["find", "indexOf", "search", "position"], correctAnswer: 1, explanation: "indexOf returns the position or -1 if not found.", difficulty: 1 },
        { id: "q8", type: "true-false" as const, question: "trimIndent() removes leading spaces.", correctAnswer: true, explanation: "trimIndent cleans up multi-line string indentation.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "$var", value: "Insert variable" },
      { label: "${expr}", value: "Insert expression" },
      { label: "\"\"\"", value: "Multi-line string" },
      { label: "split()", value: "Split into list" }
    ]
  },
  {
    id: "kotlin-6",
    number: 6,
    title: "User Input and Output",
    subtitle: "Interacting with Users",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["kotlin-5"],
    learningObjectives: ["Read user input", "Format output", "Use readLine"],
    sections: [
      {
        id: "kotlin-6-1",
        title: "Reading Input",
        whyItMatters: "Making programs interactive.",
        content: `Use readLine() to read user input from the console.`,

        codeExamples: [
          {
            id: "kotlin-6-ex1",
            title: "Reading Input",
            description: "User input in Kotlin",
            code: { kotlin: "// Basic input\nprint(\"Enter your name: \")\nval name = readLine()\nprintln(\"Hello, \\$name!\")\n\n// Input with type conversion\nprint(\"Enter your age: \")\nval ageString = readLine()\nval age = ageString?.toIntOrNull() ?: 0\nprintln(\"You are \\$age years old\")\n\n// Reading multiple values\nprint(\"Enter two numbers (comma separated): \")\nval input = readLine()\nval parts = input?.split(\",\")\nval num1 = parts?.get(0)?.toIntOrNull() ?: 0\nval num2 = parts?.get(1)?.toIntOrNull() ?: 0\nprintln(\"Sum: \\${num1 + num2}\")" },
            explanation: "readLine returns nullable String, handle null properly."
          }
        ]
      },
      {
        id: "kotlin-6-2",
        title: "Formatted Output",
        whyItMatters: "Pretty printing data.",
        content: `Use println, print, and String format for output.`,

        codeExamples: [
          {
            id: "kotlin-6-ex2",
            title: "Output Formatting",
            description: "Different output methods",
            code: { kotlin: "// Basic output\nprintln(\"Hello!\")   // with newline\nprint(\"No newline\")  // without newline\n\n// String format\nval name = \"Kotlin\"\nval version = 1.9\nprintln(String.format(\"Name: %s, Version: %.1f\", name, version))\n\n// Using string templates\nprintln(\"Name: \\$name, Version: \\$version\")\n\n// Printf-style\nprintln(\"Integer: %d, Boolean: %b, Char: %c\".format(42, true, 'A'))\n\n// Table-like output\nprintln(\"%-10s %5d\".format(\"Kotlin\", 100))\nprintln(\"%-10s %5d\".format(\"Java\", 200))" },
            explanation: "Use format for aligned table-like output."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does readLine() return?", options: ["String", "String?", "Int", "Any"], correctAnswer: 1, explanation: "readLine returns nullable String - handle null!", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What is the difference between print and println?", options: ["No difference", "println adds newline", "print is faster", "println is slower"], correctAnswer: 1, explanation: "println adds a newline after printing.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "How to convert input to Int?", options: ["toInt()", "toIntOrNull()", "Int()", "parseInt()"], correctAnswer: 1, explanation: "toIntOrNull returns null if conversion fails.", difficulty: 1 },
        { id: "q4", type: "true-false" as const, question: "readLine() can return null in some environments.", correctAnswer: true, explanation: "Always handle null from readLine().", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "What does %s represent in format?", options: ["Number", "String", "Boolean", "Char"], correctAnswer: 1, explanation: "%s is for strings, %d for integers, %f for floats.", difficulty: 1 },
        { id: "q6", type: "mcq" as const, question: "What does ?: 0 do in input handling?", options: ["Assigns 0 on null", "Compares to 0", "Checks type", "Nothing"], correctAnswer: 0, explanation: "Elvis operator returns default if null.", difficulty: 2 }
      ]
    },
    cheatSheet: [
      { label: "readLine()", value: "Read console input" },
      { label: "toIntOrNull()", value: "Safe int conversion" },
      { label: "println()", value: "Print with newline" },
      { label: "print()", value: "Print without newline" }
    ]
  },
  {
    id: "kotlin-7",
    number: 7,
    title: "Conditions and if Expressions",
    subtitle: "Making Decisions",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["kotlin-6"],
    learningObjectives: ["Use if/else statements", "Understand if as expression", "Use when vs if"],
    sections: [
      {
        id: "kotlin-7-1",
        title: "If-Else Statements",
        whyItMatters: "Basic conditional logic.",
        content: `Kotlin's if-else works like most languages but can be used as an expression.`,

        codeExamples: [
          {
            id: "kotlin-7-ex1",
            title: "If-Else Statements",
            description: "Basic conditions",
            code: { kotlin: "val score = 85\n\n// Basic if-else\nif (score >= 90) {\n    println(\"A grade\")\n} else if (score >= 80) {\n    println(\"B grade\")\n} else if (score >= 70) {\n    println(\"C grade\")\n} else {\n    println(\"Needs improvement\")\n}\n\n// If as expression (returns value)\nval grade = if (score >= 90) \"A\" else if (score >= 80) \"B\" else \"C\"\nprintln(\"Grade: \\$grade\")\n\n// Multi-line expression\nval result = if (score > 50) {\n    println(\"Passing\")\n    \"PASS\"\n} else {\n    println(\"Failing\")\n    \"FAIL\"\n}" },
            explanation: "If can return a value - useful for assigning variables."
          }
        ]
      },
      {
        id: "kotlin-7-2",
        title: "Comparison and Boolean",
        whyItMatters: "Building complex conditions.",
        content: `Use &&, ||, and ! to combine conditions.`,

        codeExamples: [
          {
            id: "kotlin-7-ex2",
            title: "Complex Conditions",
            description: "Combining conditions",
            code: { kotlin: "val age = 25\nval hasLicense = true\nval hasCar = false\n\n// Combining conditions\nif (age >= 18 && hasLicense) {\n    println(\"Can drive\")\n}\n\nif (age >= 18 && (hasLicense || hasCar)) {\n    println(\"Can access vehicle\")\n}\n\n// Negation\nif (!hasCar) {\n    println(\"No car available\")\n}\n\n// When to use parentheses\nval result = (age >= 18 && hasLicense) || (age >= 21 && hasCar)\n\n// Early return pattern\nfun checkAccess(userAge: Int): String {\n    if (userAge < 0) return \"Invalid age\"\n    if (userAge < 18) return \"Too young\"\n    return \"Access granted\"\n}" },
            explanation: "Use parentheses to group complex conditions."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "Can if return a value in Kotlin?", options: ["No", "Yes", "Only in functions", "Only with else"], correctAnswer: 1, explanation: "In Kotlin, if is an expression that can return a value.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What is the correct syntax for if as expression?", options: ["val x = if(condition, trueVal, falseVal)", "val x = if (condition) trueVal else falseVal", "val x = if condition then trueVal else falseVal", "val x = if (condition) {trueVal} else {falseVal}"], correctAnswer: 1, explanation: "Use ternary-like syntax for if expression.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What does && mean?", options: ["OR", "AND", "NOT", "XOR"], correctAnswer: 1, explanation: "&& is logical AND - both must be true.", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "What does ! do?", options: ["NOT", "Factorial", "Not equal", "In"], correctAnswer: 0, explanation: " ! inverts a Boolean value.", difficulty: 1 },
        { id: "q5", type: "true-false" as const, question: "if-else can replace all when expressions.", correctAnswer: false, explanation: "when is better for multiple conditions - more readable.", difficulty: 1 },
        { id: "q6", type: "mcq" as const, question: "What does the Elvis operator ?: do?", options: ["Creates range", "Returns default on null", "Checks type", "Nothing"], correctAnswer: 1, explanation: "x ?: default returns default if x is null.", difficulty: 1 },
        { id: "q7", type: "mcq" as const, question: "What is the correct comparison for not equal?", options: ["<>", "!=", "!==", "=/="], correctAnswer: 1, explanation: "Kotlin uses != for not equal.", difficulty: 1 },
        { id: "q8", type: "true-false" as const, question: "if blocks can have multiple statements.", correctAnswer: true, explanation: "Multi-statement if blocks return last expression value.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "if (cond) {}", value: "Basic if" },
      { label: "if (cond) a else b", value: "If as expression" },
      { label: "&&", value: "AND" },
      { label: "||", value: "OR" }
    ]
  },
  {
    id: "kotlin-8",
    number: 8,
    title: "when Expressions",
    subtitle: "Kotlin's Switch Replacement",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["kotlin-7"],
    learningObjectives: ["Use when as expression", "Match multiple conditions", "Use when with ranges"],
    sections: [
      {
        id: "kotlin-8-1",
        title: "when Basics",
        whyItMatters: "Kotlin's powerful replacement for switch statements.",
        content: `when is Kotlin's expression for multi-way branching. It's more powerful than switch in Java.`,

        codeExamples: [
          {
            id: "kotlin-8-ex1",
            title: "when Expression",
            description: "Basic when usage",
            code: { kotlin: "val day = 3\n\n// Basic when\nval dayName = when (day) {\n    1 -> \"Monday\"\n    2 -> \"Tuesday\"\n    3 -> \"Wednesday\"\n    4 -> \"Thursday\"\n    5 -> \"Friday\"\n    6 -> \"Saturday\"\n    7 -> \"Sunday\"\n    else -> \"Invalid\"\n}\nprintln(dayName)  // Wednesday\n\n// Multiple conditions\nval type = when (day) {\n    1, 2, 3, 4, 5 -> \"Weekday\"\n    6, 7 -> \"Weekend\"\n    else -> \"Invalid\"\n}\nprintln(type)  // Weekday" },
            explanation: "when matches a value against conditions."
          }
        ]
      },
      {
        id: "kotlin-8-2",
        title: "Advanced when",
        whyItMatters: "Complex matching with when.",
        content: `when supports ranges, type checks, and conditions.`,

        codeExamples: [
          {
            id: "kotlin-8-ex2",
            title: "Advanced when",
            description: "Complex matching",
            code: { kotlin: "val score = 85\n\n// Using ranges\nval grade = when (score) {\n    in 90..100 -> \"A\"\n    in 80..89 -> \"B\"\n    in 70..79 -> \"C\"\n    in 60..69 -> \"D\"\n    else -> \"F\"\n}\nprintln(grade)  // B\n\n// With conditions\nfun describe(obj: Any): String = when (obj) {\n    is Int -> \"Integer: \\$obj\"\n    is String -> \"String of length \\${obj.length}\"\n    is Double -> \"Double: \\$obj\"\n    else -> \"Unknown type\"\n}\n\nprintln(describe(10))        // Integer: 10\nprintln(describe(\"Hello\"))   // String of length 5\n\n// when without argument\nval x = 10\nwhen {\n    x > 0 -> println(\"Positive\")\n    x < 0 -> println(\"Negative\")\n    else -> println(\"Zero\")\n}" },
            explanation: "when is very flexible - use ranges and type checks."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What is when used for?", options: ["Loops", "Multi-way branching", "Variables", "Functions"], correctAnswer: 1, explanation: "when is Kotlin's switch replacement for multi-way branches.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What does else do in when?", options: ["Required always", "Default case", "Error", "Loop"], correctAnswer: 1, explanation: "else is the default case when no conditions match.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "How do you check if value is in a range?", options: ["x >= 1 && x <= 10", "x in 1..10", "x between 1 and 10", "x.contains(1, 10)"], correctAnswer: 1, explanation: "Use in operator with range for membership check.", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "Can when return a value?", options: ["No", "Yes", "Only with else", "Only in functions"], correctAnswer: 1, explanation: "when can be used as an expression like if.", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "What does is check in when?", options: ["Equality", "Type", "Range", "Null"], correctAnswer: 1, explanation: "is checks the type of an object.", difficulty: 1 },
        { id: "q6", type: "mcq" as const, question: "Can when work without an argument?", options: ["No", "Yes, with conditions", "Only in classes", "Only with ranges"], correctAnswer: 1, explanation: "when without argument uses Boolean conditions.", difficulty: 1 },
        { id: "q7", type: "mcq" as const, question: "How to combine multiple values in one branch?", options: ["Using commas", "Using &&", "Using ||", "Using +"], correctAnswer: 0, explanation: "Separate values with commas: 1, 2, 3 -> \"case\"", difficulty: 1 },
        { id: "q8", type: "true-false" as const, question: "when must always have an argument.", correctAnswer: false, explanation: "when can be used with or without an argument.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "when(x)", value: "Match against x" },
      { label: "in range", value: "Check range membership" },
      { label: "is Type", value: "Type check" },
      { label: "else", value: "Default branch" }
    ]
  },
  {
    id: "kotlin-9",
    number: 9,
    title: "Loops in Kotlin",
    subtitle: "Repeating Code",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["kotlin-8"],
    learningObjectives: ["Use for loops", "Use while loops", "Control loop flow"],
    sections: [
      {
        id: "kotlin-9-1",
        title: "For Loops",
        whyItMatters: "Iterate over collections and ranges.",
        content: `Kotlin's for loop is powerful and works with ranges, arrays, and collections.`,

        codeExamples: [
          {
            id: "kotlin-9-ex1",
            title: "For Loop Basics",
            description: "Different for loop uses",
            code: { kotlin: "// Loop through range\nfor (i in 1..5) {\n    println(i)  // 1, 2, 3, 4, 5\n}\n\n// Excluding end (until)\nfor (i in 1 until 5) {\n    println(i)  // 1, 2, 3, 4\n}\n\n// With step\nfor (i in 0..10 step 2) {\n    println(i)  // 0, 2, 4, 6, 8, 10\n}\n\n// Reverse range\nfor (i in 5 downTo 1) {\n    println(i)  // 5, 4, 3, 2, 1\n}\n\n// Loop through array\nval fruits = listOf(\"Apple\", \"Banana\", \"Cherry\")\nfor (fruit in fruits) {\n    println(fruit)\n}\n\n// With index\nfor ((index, fruit) in fruits.withIndex()) {\n    println(\"\\$index: \\$fruit\")\n}" },
            explanation: "for loops in Kotlin are versatile with ranges and collections."
          }
        ]
      },
      {
        id: "kotlin-9-2",
        title: "While and Control Flow",
        whyItMatters: "Different loop patterns and controls.",
        content: `Use while for condition-based loops and control statements for flow.`,

        codeExamples: [
          {
            id: "kotlin-9-ex2",
            title: "While and Control",
            description: "While loops and controls",
            code: { kotlin: "// While loop\nvar count = 0\nwhile (count < 5) {\n    println(count)\n    count++\n}\n\n// Do-while (executes at least once)\nvar input: String?\ndo {\n    print(\"Enter 'quit' to exit: \")\n    input = readLine()\n    println(\"You entered: \\$input\")\n} while (input != \"quit\")\n\n// Break and Continue\nfor (i in 1..10) {\n    if (i == 3) continue  // Skip 3\n    if (i == 7) break     // Stop at 7\n    println(i)\n}\n\n// Labeled break/continue\nouter@ for (i in 1..3) {\n    for (j in 1..3) {\n        if (j == 2) break@outer\n        println(\"i=\\$i, j=\\$j\")\n    }\n}" },
            explanation: "Use labels for breaking out of nested loops."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does 1..5 mean?", options: ["1 to 5 including 5", "1 to 4 only", "1 through 5", "Range object"], correctAnswer: 0, explanation: ".. creates an inclusive range.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "How do you iterate 0,2,4,6,8?", options: ["0..8", "0..8 step 2", "0 to 8 by 2", "0-8 by 2"], correctAnswer: 1, explanation: "Use step to change iteration increment.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What does until do in for loop?", options: ["Includes end", "Excludes end", "Reverses", "Steps"], correctAnswer: 1, explanation: "until excludes the end value.", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "When does do-while execute?", options: ["Never", "At least once", "Only if condition true", "Twice"], correctAnswer: 1, explanation: "do-while always executes at least once.", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "What does break do?", options: ["Ends iteration", "Skips iteration", "Continues", "Returns"], correctAnswer: 0, explanation: "break terminates the loop entirely.", difficulty: 1 },
        { id: "q6", type: "mcq" as const, question: "What does continue do?", options: ["Ends loop", "Skips to next", "Restarts loop", "Returns"], correctAnswer: 1, explanation: "continue skips to the next iteration.", difficulty: 1 },
        { id: "q7", type: "mcq" as const, question: "What is downTo for?", options: ["Sort descending", "Reverse iteration", "Skip values", "Step negative"], correctAnswer: 1, explanation: "downTo creates a reverse range.", difficulty: 1 },
        { id: "q8", type: "mcq" as const, question: "What is a labeled break?", options: ["Named break", "Break from nested loop", "Conditional break", "Break after"], correctAnswer: 1, explanation: "Labeled break breaks from specific outer loop.", difficulty: 2 }
      ]
    },
    cheatSheet: [
      { label: "for (i in range)", value: "Iterate range" },
      { label: "until", value: "Exclusive end" },
      { label: "step", value: "Increment value" },
      { label: "break/continue", value: "Control flow" }
    ]
  },
  {
    id: "kotlin-10",
    number: 10,
    title: "Functions",
    subtitle: "Reusable Code Blocks",
    difficulty: "Beginner" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["kotlin-9"],
    learningObjectives: ["Define functions", "Use parameters", "Return values"],
    sections: [
      {
        id: "kotlin-10-1",
        title: "Function Basics",
        whyItMatters: "Building reusable code components.",
        content: `Functions are declared with the fun keyword. They can have parameters and return values.`,

        codeExamples: [
          {
            id: "kotlin-10-ex1",
            title: "Basic Functions",
            description: "Different function types",
            code: { kotlin: "// Simple function - no return\nfun greet() {\n    println(\"Hello, World!\")\n}\n\n// Function with parameters\nfun greet(name: String) {\n    println(\"Hello, \\$name!\")\n}\n\n// Function with return value\nfun add(a: Int, b: Int): Int {\n    return a + b\n}\n\n// Single expression function\nfun multiply(a: Int, b: Int) = a * b\n\n// Function with default parameters\nfun greet(name: String = \"World\") {\n    println(\"Hello, \\$name!\")\n}\n\n// Usage\ngreet()              // Hello, World!\ngreet(\"Kotlin\")     // Hello, Kotlin!\nprintln(add(3, 5))    // 8\nprintln(multiply(4, 5)) // 20" },
            explanation: "Use default parameters to make functions more flexible."
          }
        ]
      },
      {
        id: "kotlin-10-2",
        title: "Advanced Function Features",
        whyItMatters: "Named arguments, varargs, and Unit.",
        content: `Kotlin functions support named arguments, varargs, and more.`,

        codeExamples: [
          {
            id: "kotlin-10-ex2",
            title: "Advanced Functions",
            description: "Named args, varargs, Unit",
            code: { kotlin: "// Named arguments\nfun createUser(name: String, age: Int, email: String) {\n    println(\"Name: \\$name, Age: \\$age, Email: \\$email\")\n}\n\ncreateUser(\"John\", 25, \"john@email.com\")\ncreateUser(name = \"Jane\", email = \"jane@email.com\", age = 30)\n\n// Varargs - variable number of arguments\nfun sum(vararg numbers: Int): Int {\n    return numbers.sum()\n}\n\nprintln(sum(1, 2, 3, 4, 5))  // 15\nprintln(sum())                // 0\n\n// Unit - no return value (like void)\nfun printMessage(message: String): Unit {\n    println(message)\n}\n\n// Return nullable\nfun findUser(id: Int): String? {\n    return if (id > 0) \"User \\$id\" else null\n}\n\nval user = findUser(0)\nif (user != null) {\n    println(user)\n}" },
            explanation: "Named arguments make calls more readable."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What keyword declares a function?", options: ["function", "func", "fun", "def"], correctAnswer: 2, explanation: "fun is the keyword for Kotlin functions.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What is the return type for functions that don't return anything?", options: ["Void", "None", "Unit", "Null"], correctAnswer: 2, explanation: "Unit is like void - represents no meaningful value.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What do default parameters allow?", options: ["Optional arguments", "Multiple returns", "No return", "Error handling"], correctAnswer: 0, explanation: "Default parameters let callers omit arguments.", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "What does vararg mean?", options: ["Variable argument", "Variable return", "Variable type", "Variable name"], correctAnswer: 0, explanation: "vararg allows passing variable number of arguments.", difficulty: 1 },
        { id: "q5", type: "true-false" as const, question: "Single expression functions use = syntax.", correctAnswer: true, explanation: "fun add(a, b) = a + b is the expression syntax.", difficulty: 1 },
        { id: "q6", type: "mcq" as const, question: "What are named arguments?", options: ["Must use parameter names", "Can use names when calling", "Required in Kotlin", "For loops only"], correctAnswer: 1, explanation: "Named arguments let you specify which parameter when calling.", difficulty: 1 },
        { id: "q7", type: "mcq" as const, question: "What does Unit return type mean?", options: ["Returns 0", "Returns nothing meaningful", "Returns null", "Returns empty string"], correctAnswer: 1, explanation: "Unit means function executes but has no meaningful return value.", difficulty: 1 },
        { id: "q8", type: "true-false" as const, question: "You can return null from a function.", correctAnswer: true, explanation: "Functions can return nullable types using ?.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "fun name()", value: "Declare function" },
      { label: ": Type", value: "Return type" },
      { label: "param = default", value: "Default parameter" },
      { label: "vararg", value: "Variable arguments" }
    ]
  },
  {
    id: "kotlin-11",
    number: 11,
    title: "Nullable Types",
    subtitle: "Handling Null Safely",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["kotlin-10"],
    learningObjectives: ["Understand nullable types", "Use safe operators", "Handle null properly"],
    sections: [
      {
        id: "kotlin-11-1",
        title: "Null Safety in Kotlin",
        whyItMatters: "Prevent NullPointerException at compile time.",
        content: `Kotlin's type system distinguishes between nullable and non-nullable types. This prevents NPE at compile time.`,

        codeExamples: [
          {
            id: "kotlin-11-ex1",
            title: "Nullable Types",
            description: "Declaring nullable types",
            code: { kotlin: "// Non-nullable - cannot hold null\nvar name: String = \"Kotlin\"\n// name = null  // ERROR!\n\n// Nullable - can hold null\nvar nullableName: String? = \"Kotlin\"\nnullableName = null  // OK\n\n// Safe call operator - ?.\nval length = nullableName?.length  // Returns null if name is null\n\n// Elvis operator - ?: \nval len = nullableName?.length ?: 0  // Default 0 if null\n\n// Not-null assertion - !! (use carefully!)\nval len2 = nullableName!!.length  // Throws NPE if null\n\n// Safe cast - as?\nval str: String? = \"hello\"\nval result: Int? = str as? Int  // Returns null if cast fails" },
            explanation: "Kotlin makes null handling explicit and safe."
          }
        ]
      },
      {
        id: "kotlin-11-2",
        title: "Let and Lateinit",
        whyItMatters: "Advanced null handling patterns.",
        content: `Use let for safe execution and lateinit for delayed initialization.`,

        codeExamples: [
          {
            id: "kotlin-11-ex2",
            title: "Let and Lateinit",
            description: "Advanced null handling",
            code: { kotlin: "// let - execute code only if not null\nvar name: String? = \"Kotlin\"\n\nname?.let {\n    println(\"Name is not null: \\$it\")\n}\n\nname = null\nname?.let {\n    println(\"This won't print\")  // Not executed\n}\n\n// let with elvis for non-null execution\nval input: String? = getUserInput()\nval trimmed = input?.let { it.trim() } ?: \"default\"\n\n// lateinit - delay initialization\nclass Person {\n    lateinit var name: String\n    \n    fun initialize() {\n        name = \"John\"  // Initialize later\n    }\n    \n    fun printName() {\n        // name must be initialized before use\n        if (::name.isInitialized) {\n            println(name)\n        }\n    }\n}\n\n// nullable receiver\nfun String?.isEmptyOrNull(): Boolean = this == null || this.isEmpty()\n\nprintln(\"\".isEmptyOrNull())  // true\nprintln(null.isEmptyOrNull()) // true\nprintln(\"hello\".isEmptyOrNull()) // false" },
            explanation: "let executes the block only when value is not null."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What makes a type nullable?", options: ["Adding ?", "Using null", "Using var", "Using Any"], correctAnswer: 0, explanation: "Add ? to make type nullable: String?.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What does ?. do?", options: ["Returns null", "Safe call", "Throws exception", "Assigns null"], correctAnswer: 1, explanation: "?. calls method only if not null, otherwise returns null.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What does ?: do?", options: ["Checks null", "Returns default", "Compares", "Both A and B"], correctAnswer: 3, explanation: "Elvis returns left side if not null, otherwise right side.", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "What does !! do?", options: ["Checks null", "Returns null", "Throws NPE if null", "Safe call"], correctAnswer: 2, explanation: "!! throws NullPointerException if value is null.", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "When does let execute its block?", options: ["Always", "When value is null", "When value is not null", "Never"], correctAnswer: 2, explanation: "let executes only when value is not null.", difficulty: 1 },
        { id: "q6", type: "mcq" as const, question: "What is lateinit for?", options: ["Nullable types", "Delaying initialization", "Late binding", "Dynamic types"], correctAnswer: 1, explanation: "lateinit allows non-null property to be initialized later.", difficulty: 1 },
        { id: "q7", type: "true-false" as const, question: "Kotlin eliminates NullPointerException.", correctAnswer: false, explanation: "Kotlin prevents NPE at compile time but !! can still cause it.", difficulty: 1 },
        { id: "q8", type: "mcq" as const, question: "What does as? do?", options: ["Throws on failure", "Safe cast to nullable", "Checks type", "Returns null on failure"], correctAnswer: 1, explanation: "as? returns null if cast fails instead of throwing.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "String?", value: "Nullable String" },
      { label: "?.", value: "Safe call" },
      { label: "?:", value: "Elvis operator" },
      { label: "!!", value: "Not-null assertion" }
    ]
  },
  {
    id: "kotlin-12",
    number: 12,
    title: "Type Casting",
    subtitle: "Converting Between Types",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["kotlin-11"],
    learningObjectives: ["Use smart casts", "Understand is and as", "Convert between types"],
    sections: [
      {
        id: "kotlin-12-1",
        title: "Smart Casts",
        whyItMatters: "Automatic type conversion after checking.",
        content: `Kotlin automatically casts types after type checks, making code cleaner.`,

        codeExamples: [
          {
            id: "kotlin-12-ex1",
            title: "Smart Casts",
            description: "Automatic type conversion",
            code: { kotlin: "// Basic type checking\nfun printLength(obj: Any) {\n    if (obj is String) {\n        // obj is automatically cast to String here!\n        println(\"String length: \\${obj.length}\")\n    } else {\n        println(\"Not a string\")\n    }\n}\n\n// Using when with smart cast\nfun describe(obj: Any): String = when (obj) {\n    is Int -> \"Integer: \\$obj\"\n    is Double -> \"Double: \\$obj\"\n    is String -> \"String of length \\${obj.length}\"\n    is List<*> -> \"List with \\${obj.size} items\"\n    else -> \"Unknown type\"\n}\n\n// After is check, compiler knows the type\nfun process(value: Any?) {\n    if (value != null && value is Number) {\n        // Smart cast works after null check\n        println(value.toDouble())  // No explicit cast needed\n    }\n}" },
            explanation: "Smart casts automatically convert types after type checks."
          }
        ]
      },
      {
        id: "kotlin-12-2",
        title: "Explicit Casting",
        whyItMatters: "Manual type conversion when needed.",
        content: `Use as for explicit casting and as? for safe casting.`,

        codeExamples: [
          {
            id: "kotlin-12-ex2",
            title: "Explicit Casting",
            description: "Manual type conversion",
            code: { kotlin: "// Explicit cast with as\nval str: String = \"Hello\" as String\n// val fail: String = 123 as String  // ClassCastException!\n\n// Safe cast with as?\nval num: Any = 42\nval strResult: String? = num as? String  // null (no exception)\n\n// Numeric type conversion\nval intNum: Int = 100\nval doubleNum: Double = intNum.toDouble()  // 100.0\nval stringNum: String = intNum.toString()  // \"100\"\n\n// Parsing\nval stringValue = \"123\"\nval parsed: Int = stringValue.toIntOrNull() ?: 0  // 123\n\n// toChecked functions\nval doubleVal = \"3.14\".toDoubleOrNull()  // 3.14\nval intVal = \"abc\".toIntOrNull()          // null\n\n// Type checking without smart cast\nfun checkType(obj: Any) {\n    if (obj !is String) {\n        println(\"Not a String\")\n        return\n    }\n    // Still can use obj as String here\n    println(\"Length: \\${obj.length}\")\n}" },
            explanation: "Use as? for safe casting to avoid exceptions."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does is do?", options: ["Casts type", "Checks type", "Creates type", "Compares type"], correctAnswer: 1, explanation: "is checks if object is of a certain type.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What is smart cast?", options: ["Manual conversion", "Automatic after check", "Explicit cast", "Type inference"], correctAnswer: 1, explanation: "Compiler automatically casts after type check.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What does as? return on failed cast?", options: ["Exception", "null", "0", "Empty string"], correctAnswer: 1, explanation: "as? returns null instead of throwing exception.", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "What does as do on failure?", options: ["Returns null", "Throws exception", "Returns 0", "Returns false"], correctAnswer: 1, explanation: "as throws ClassCastException if cast fails.", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "How to convert Int to String?", options: ["toString()", "String()", "as String", "convert()"], correctAnswer: 0, explanation: "Use toString() method to convert to String.", difficulty: 1 },
        { id: "q6", type: "mcq" as const, question: "What is !is?", options: ["Is not", "Negation of is", "Not equal", "Both A and B"], correctAnswer: 3, explanation: "!is checks if object is NOT of a type.", difficulty: 1 },
        { id: "q7", type: "true-false" as const, question: "Smart casts work in when branches.", correctAnswer: true, explanation: "when expression also provides smart casts.", difficulty: 1 },
        { id: "q8", type: "mcq" as const, question: "What does toIntOrNull return?", options: ["Int or 0", "Int or null", "Int or exception", "Nullable Int"], correctAnswer: 1, explanation: "toIntOrNull returns null if parsing fails.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "is", value: "Type check" },
      { label: "!is", value: "Not type check" },
      { label: "as", value: "Explicit cast" },
      { label: "as?", value: "Safe cast" }
    ]
  },
  {
    id: "kotlin-13",
    number: 13,
    partLabel: "Part 2: Object-Oriented Programming",
    title: "Classes and Objects",
    subtitle: "Building with Objects",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["kotlin-12"],
    learningObjectives: ["Create classes", "Instantiate objects", "Use class members"],
    sections: [
      {
        id: "kotlin-13-1",
        title: "Class Basics",
        whyItMatters: "Objects are the foundation of OOP.",
        content: `Classes are blueprints for objects. They define properties (data) and functions (behavior).`,

        codeExamples: [
          {
            id: "kotlin-13-ex1",
            title: "Defining Classes",
            description: "Creating classes in Kotlin",
            code: { kotlin: "// Simple class\nclass Person {\n    var name: String = \"\"\n    var age: Int = 0\n    \n    fun speak(message: String) {\n        println(\"\\$name says: \\$message\")\n    }\n}\n\n// Create object (instance)\nval person = Person()\nperson.name = \"John\"\nperson.age = 25\nperson.speak(\"Hello!\")\n\n// Class with initialization\nclass Student(val name: String, val grade: Int) {\n    fun introduce() {\n        println(\"I'm \\$name, in grade \\$grade\")\n    }\n}\n\nval student = Student(\"Alice\", 10)\nstudent.introduce()" },
            explanation: "Use val for read-only properties, var for mutable."
          }
        ]
      },
      {
        id: "kotlin-13-2",
        title: "Class Members",
        whyItMatters: "Properties and methods form class interface.",
        content: `Classes can have properties (fields), functions (methods), and constructors.`,

        codeExamples: [
          {
            id: "kotlin-13-ex2",
            title: "Class Members",
            description: "Properties and methods",
            code: { kotlin: "class Car(val brand: String, var year: Int) {\n    // Property\n    var speed: Int = 0\n    \n    // Method\n    fun accelerate(amount: Int) {\n        speed += amount\n        println(\"Speed: \\$speed km/h\")\n    }\n    \n    fun brake() {\n        speed = 0\n        println(\"Car stopped\")\n    }\n    \n    // Getter (computed property)\n    val description: String\n        get() = \"\\$brand (\\$year) - \\$speed km/h\"\n    \n    // Member function (can be called on object)\n    fun drive() {\n        println(\"Driving \\$brand\")\n    }\n}\n\nval car = Car(\"Tesla\", 2023)\ncar.accelerate(50)\ncar.accelerate(30)\nprintln(car.description)\ncar.brake()" },
            explanation: "Properties store data, methods define behavior."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What is a class?", options: ["An object", "A blueprint", "A function", "A variable"], correctAnswer: 1, explanation: "A class is a blueprint for creating objects.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What is an object?", options: ["Blueprint", "Instance of class", "Method", "Property"], correctAnswer: 1, explanation: "An object is an instance of a class.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What keyword creates a class?", options: ["class", "object", "new", "create"], correctAnswer: 0, explanation: "class keyword defines a class.", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "What is a property?", options: ["Function", "Class variable", "Object", "Package"], correctAnswer: 1, explanation: "Properties are class-level variables.", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "What is a method?", options: ["Property", "Class variable", "Function inside class", "Constructor"], correctAnswer: 2, explanation: "Methods are functions inside a class.", difficulty: 1 },
        { id: "q6", type: "mcq" as const, question: "What does val in class property mean?", options: ["Can change", "Read-only", "Private", "Static"], correctAnswer: 1, explanation: "val makes property read-only (immutable).", difficulty: 1 },
        { id: "q7", type: "true-false" as const, question: "Classes can have multiple methods.", correctAnswer: true, explanation: "Classes can have any number of methods.", difficulty: 1 },
        { id: "q8", type: "mcq" as const, question: "How do you call a method on object?", options: ["Object.method()", "Class.method()", "method(Object)", "call method"], correctAnswer: 0, explanation: "Use object.method() syntax to call methods.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "class Name", value: "Define class" },
      { label: "val var", value: "Properties" },
      { label: "fun method()", value: "Define method" },
      { label: "object.method()", value: "Call method" }
    ]
  },
  {
    id: "kotlin-14",
    number: 14,
    title: "Constructors",
    subtitle: "Initializing Objects",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["kotlin-13"],
    learningObjectives: ["Use primary constructor", "Create secondary constructors", "Initialize properties properly"],
    sections: [
      {
        id: "kotlin-14-1",
        title: "Primary Constructor",
        whyItMatters: "The main way to initialize objects.",
        content: `Kotlin has a concise primary constructor in the class header.`,

        codeExamples: [
          {
            id: "kotlin-14-ex1",
            title: "Primary Constructor",
            description: "Class header initialization",
            code: { kotlin: "// Primary constructor in class header\nclass Person(val name: String, val age: Int) {\n    fun introduce() {\n        println(\"I'm \\$name, \\$age years old\")\n    }\n}\n\nval person = Person(\"John\", 30)\nperson.introduce()\n\n// With default values\nclass User(val name: String, val role: String = \"user\") {\n    fun showRole() {\n        println(\"Role: \\$role\")\n    }\n}\n\nval user1 = User(\"Alice\")  // role = \"user\"\nval user2 = User(\"Bob\", \"admin\")  // role = \"admin\"\n\n// With visibility modifiers\nclass Manager(val name: String, private val salary: Int) {\n    fun details() = println(\"Manager: \\$name\")\n}" },
            explanation: "Primary constructor is part of class declaration."
          }
        ]
      },
      {
        id: "kotlin-14-2",
        title: "Secondary Constructors",
        whyItMatters: "Additional initialization paths.",
        content: `Use init blocks and secondary constructors for complex initialization.`,

        codeExamples: [
          {
            id: "kotlin-14-ex2",
            title: "Secondary Constructors",
            description: "Additional init paths",
            code: { kotlin: "class Person(val name: String, val age: Int) {\n    var email: String = \"\"\n    \n    // Init block - runs after primary constructor\n    init {\n        if (age < 0) {\n            throw IllegalArgumentException(\"Age cannot be negative\")\n        }\n    }\n    \n    // Secondary constructor\n    constructor(name: String, email: String) : this(name, 0) {\n        this.email = email\n    }\n    \n    // Another secondary constructor\n    constructor() : this(\"Unknown\", 0)\n}\n\nval p1 = Person(\"John\", 25)\nval p2 = Person(\"Jane\", \"jane@email.com\")\nval p3 = Person()\n\n// Factory-like pattern\nclass Rectangle(val width: Double, val height: Double) {\n    val area: Double\n    \n    init {\n        area = width * height\n    }\n    \n    // Secondary constructor for square\n    constructor(side: Double) : this(side, side)\n}\n\nval rect = Rectangle(5.0, 3.0)\nval square = Rectangle(4.0)" },
            explanation: "Secondary constructors use constructor keyword."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "Where is primary constructor defined?", options: ["Inside class body", "In class header", "As separate function", "Cannot have"], correctAnswer: 1, explanation: "Primary constructor is in the class declaration header.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What does init block do?", options: ["Runs before constructor", "Runs after primary constructor", "Replaces constructor", "Optional"], correctAnswer: 1, explanation: "init blocks run after primary constructor.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "How do you call secondary constructor?", options: ["new keyword", "constructor()", "directly", "class()"], correctAnswer: 1, explanation: "Secondary constructors use constructor keyword.", difficulty: 1 },
        { id: "q4", type: "true-false" as const, question: "Secondary constructors must call primary constructor.", correctAnswer: true, explanation: "Secondary constructors must delegate to primary.", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "What keyword creates secondary constructor?", options: ["fun", "constructor", "init", "this"], correctAnswer: 1, explanation: "constructor keyword defines secondary constructor.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "class(a: T, b: T)", value: "Primary constructor" },
      { label: "init {}", value: "Initialization block" },
      { label: "constructor()", value: "Secondary constructor" },
      { label: ": this()", value: "Delegate to primary" }
    ]
  },
  {
    id: "kotlin-15",
    number: 15,
    title: "Properties and Getters/Setters",
    subtitle: "Managing Class Data",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["kotlin-14"],
    learningObjectives: ["Define properties", "Create custom getters/setters", "Use backing fields"],
    sections: [
      {
        id: "kotlin-15-1",
        title: "Property Customization",
        whyItMatters: "Control how properties are accessed and modified.",
        content: `Kotlin properties can have custom getters and setters.`,

        codeExamples: [
          {
            id: "kotlin-15-ex1",
            title: "Custom Properties",
            description: "Getter and setter logic",
            code: { kotlin: "class Person(name: String) {\n    var name: String = name\n        // Custom getter\n        get() = field.uppercase()\n        \n        // Custom setter\n        set(value) {\n            field = value.trim()\n        }\n    \n    var age: Int = 0\n        get() = field  // Default getter\n        set(value) {\n            if (value >= 0) field = value\n        }\n}\n\nval person = Person(\"  john  \")\nprintln(person.name)  // JOHN (getter uppercases)\nperson.name = \"  jane  \"\nprintln(person.name)  // JANE (setter trims)\n\n// Read-only with custom getter\nclass Circle(val radius: Double) {\n    val diameter: Double\n        get() = radius * 2\n    \n    val area: Double\n        get() = Math.PI * radius * radius\n}\n\nval circle = Circle(5.0)\nprintln(circle.diameter)  // 10.0\nprintln(circle.area)      // 78.54..." },
            explanation: "field keyword accesses backing property."
          }
        ]
      },
      {
        id: "kotlin-15-2",
        title: "Lateinit and Lazy",
        whyItMatters: "Defer property initialization.",
        content: `Use lateinit and lazy for properties initialized later.`,

        codeExamples: [
          {
            id: "kotlin-15-ex2",
            title: "Lateinit and Lazy",
            description: "Deferred initialization",
            code: { kotlin: "// lateinit - non-null, initialized later\nclass Database {\n    lateinit var connection: String\n    \n    fun connect() {\n        connection = \"Connected to DB\"\n        println(connection)\n    }\n}\n\nval db = Database()\ndb.connect()  // Must initialize before use\n\n// lazy - computed on first access\nclass Config {\n    val databaseUrl: String by lazy {\n        println(\"Loading database URL...\")\n        \"jdbc:mysql://localhost:3306/mydb\"\n    }\n    \n    val maxRetries: Int by lazy { 3 }\n}\n\nval config = Config()\nprintln(config.databaseUrl)  // Loads and caches\nprintln(config.databaseUrl)  // Uses cached value\n\n// Lazy is thread-safe by default\n// Use lazy(LazyThreadSafetyMode.NONE) for single-threaded" },
            explanation: "lazy computes value on first access, then caches."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What is 'field' in getter/setter?", options: ["Parameter", "Backing property", "This reference", "New variable"], correctAnswer: 1, explanation: "field accesses the backing property directly.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "When does lazy property compute?", options: ["At creation", "On first access", "Never", "Manually"], correctAnswer: 1, explanation: "lazy computes value on first access.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "When must lateinit be initialized?", options: ["At declaration", "Before first use", "Never", "At compile time"], correctAnswer: 1, explanation: "Must initialize before first access or throws exception.", difficulty: 1 },
        { id: "q4", type: "true-false" as const, question: "Lazy properties are thread-safe by default.", correctAnswer: true, explanation: "lazy uses synchronization by default.", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "What is val property with custom getter?", options: ["Cannot", "Read-only externally", "Mutable", "Error"], correctAnswer: 1, explanation: "val with custom getter is read-only externally.", difficulty: 2 }
      ]
    },
    cheatSheet: [
      { label: "get()", value: "Custom getter" },
      { label: "set(v)", value: "Custom setter" },
      { label: "field", value: "Backing property" },
      { label: "by lazy", value: "Deferred computation" }
    ]
  },
  {
    id: "kotlin-16",
    number: 16,
    title: "Inheritance",
    subtitle: "Reusing and Extending Code",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["kotlin-15"],
    learningObjectives: ["Create parent classes", "Extend classes", "Override members"],
    sections: [
      {
        id: "kotlin-16-1",
        title: "Inheritance Basics",
        whyItMatters: "Code reuse through class hierarchy.",
        content: `All classes in Kotlin inherit from Any. Use : for inheritance.`,

        codeExamples: [
          {
            id: "kotlin-16-ex1",
            title: "Inheritance",
            description: "Extending classes",
            code: { kotlin: "// Base class - open for inheritance\nopen class Animal(val name: String) {\n    open fun makeSound() {\n        println(\"Some sound\")\n    }\n    \n    fun eat() {\n        println(\"\\$name is eating\")\n    }\n}\n\n// Derived class\nclass Dog(val breed: String) : Animal(\"Dog\") {\n    override fun makeSound() {\n        println(\"Woof!\")\n    }\n    \n    fun fetch() {\n        println(\"Fetching ball!\")\n    }\n}\n\nclass Cat(val color: String) : Animal(\"Cat\") {\n    override fun makeSound() {\n        println(\"Meow!\")\n    }\n}\n\nval dog = Dog(\"Labrador\")\ndog.name  // Inherited property\ndog.eat()  // Inherited method\ndog.makeSound()  // Overridden method\ndog.fetch()  // Own method\n\n// Using polymorphism\nfun playSound(animal: Animal) {\n    animal.makeSound()\n}\n\nplaySound(dog)  // Woof!\nplaySound(Cat(\"Orange\"))  // Meow!" },
            explanation: "Use open keyword to allow inheritance."
          }
        ]
      },
      {
        id: "kotlin-16-2",
        title: "Override and Super",
        whyItMatters: "Access parent class members.",
        content: `Use super to access parent class members and override methods.`,

        codeExamples: [
          {
            id: "kotlin-16-ex2",
            title: "Override and Super",
            description: "Accessing parent members",
            code: { kotlin: "open class Vehicle(val brand: String) {\n    open fun start() = println(\"Starting \\$brand\")\n    \n    fun describe() = \"Vehicle: \\$brand\"\n}\n\nclass Car(brand: String, val model: String) : Vehicle(brand) {\n    override fun start() {\n        println(\"Starting \\$brand \\$model car\")\n    }\n    \n    fun fullDetails(): String {\n        // Using super to access parent method\n        return \"\\${super.describe()} - \\$model\"\n    }\n}\n\n// Abstract class\nabstract class Shape {\n    abstract fun area(): Double\n    \n    fun printArea() {\n        println(\"Area: \\${area()}\")\n    }\n}\n\nclass Rectangle(val width: Double, val height: Double) : Shape() {\n    override fun area() = width * height\n}\n\nval rect = Rectangle(5.0, 3.0)\nrect.printArea()  // Area: 15.0" },
            explanation: "super accesses parent class members."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does : mean in class definition?", options: ["Inherits", "Implements", "Creates", "Extends"], correctAnswer: 0, explanation: ": means the class inherits from parent.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What keyword allows class to be inherited?", options: ["public", "open", "extend", "inherit"], correctAnswer: 1, explanation: "open marks class as inheritable.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What does override do?", options: ["Copies method", "Replaces parent method", "Creates new", "Deletes method"], correctAnswer: 1, explanation: "override replaces parent method implementation.", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "What is Any in Kotlin?", options: ["Nothing", "Root class for all", "Interface", "Package"], correctAnswer: 1, explanation: "Any is the root class (like Object in Java).", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "How to call parent method in override?", options: ["parent.method()", "super.method()", "this.method()", "Base.method()"], correctAnswer: 1, explanation: "super accesses parent class methods.", difficulty: 1 },
        { id: "q6", type: "mcq" as const, question: "What is abstract class?", options: ["Cannot instantiate", "Must inherit", "Has abstract methods", "All of above"], correctAnswer: 3, explanation: "Abstract classes cannot be instantiated and may have abstract methods.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "open class", value: "Inheritable class" },
      { label: ": Parent()", value: "Inherit from parent" },
      { label: "override", value: "Replace parent method" },
      { label: "super", value: "Access parent member" }
    ]
  },
  {
    id: "kotlin-17",
    number: 17,
    title: "Abstract Classes",
    subtitle: "Base Class Templates",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["kotlin-16"],
    learningObjectives: ["Create abstract classes", "Define abstract members", "Implement abstract classes"],
    sections: [
      {
        id: "kotlin-17-1",
        title: "Abstract Classes",
        whyItMatters: "Define common structure for related classes.",
        content: `Abstract classes cannot be instantiated and may have abstract members that must be implemented.`,

        codeExamples: [
          {
            id: "kotlin-17-ex1",
            title: "Abstract Classes",
            description: "Defining and using abstracts",
            code: { kotlin: "// Abstract class - cannot be instantiated\nabstract class Animal(val name: String) {\n    // Abstract property - must be overridden\n    abstract val sound: String\n    \n    // Abstract method - must be overridden\n    abstract fun move()\n    \n    // Regular method with implementation\n    fun introduce() {\n        println(\"I am \\$name, I say \\$sound\")\n    }\n}\n\n// Concrete implementation\nclass Dog(name: String) : Animal(name) {\n    override val sound = \"Woof\"\n    \n    override fun move() {\n        println(\"\\$name runs on legs\")\n    }\n}\n\nclass Bird(name: String) : Animal(name) {\n    override val sound = \"Tweet\"\n    \n    override fun move() {\n        println(\"\\$name flies in the sky\")\n    }\n}\n\nval dog = Dog(\"Buddy\")\ndog.introduce()  // Uses inherited method\ndog.move()       // Uses overridden method" },
            explanation: "Abstract members don't have implementation in abstract class."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "Can you create instance of abstract class?", options: ["Yes", "No", "Only with abstract", "Depends"], correctAnswer: 1, explanation: "Abstract classes cannot be instantiated.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What is abstract property?", options: ["With default", "Must override", "Private", "Static"], correctAnswer: 1, explanation: "Abstract properties must be implemented by subclasses.", difficulty: 1 },
        { id: "q3", type: "true-false" as const, question: "Abstract classes can have regular methods.", correctAnswer: true, explanation: "Abstract classes can have both abstract and concrete members.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "abstract class", value: "Cannot instantiate" },
      { label: "abstract", value: "Must override" },
      { label: "override", value: "Implement abstract" }
    ]
  },
  {
    id: "kotlin-18",
    number: 18,
    title: "Interfaces",
    subtitle: "Contract Definitions",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["kotlin-17"],
    learningObjectives: ["Define interfaces", "Implement interfaces", "Multiple interface implementation"],
    sections: [
      {
        id: "kotlin-18-1",
        title: "Interface Basics",
        whyItMatters: "Define contracts that classes can implement.",
        content: `Interfaces define a contract that implementing classes must fulfill.`,

        codeExamples: [
          {
            id: "kotlin-18-ex1",
            title: "Interfaces",
            description: "Defining and implementing",
            code: { kotlin: "// Interface definition\ninterface Drawable {\n    // Abstract property\n    val name: String\n    \n    // Abstract method\n    fun draw()\n    \n    // Default implementation\n    fun describe() {\n        println(\"This is a drawable object\")\n    }\n}\n\n// Implement interface\nclass Circle(val radius: Double) : Drawable {\n    override val name = \"Circle\"\n    \n    override fun draw() {\n        println(\"Drawing circle with radius \\$radius\")\n    }\n}\n\nclass Square(val side: Double) : Drawable {\n    override val name = \"Square\"\n    \n    override fun draw() {\n        println(\"Drawing square with side \\$side\")\n    }\n}\n\n// Using interface\nfun render(drawable: Drawable) {\n    drawable.draw()\n}\n\nrender(Circle(5.0))\nrender(Square(10.0))" },
            explanation: "Classes implement interfaces with : syntax."
          }
        ]
      },
      {
        id: "kotlin-18-2",
        title: "Multiple Interfaces",
        whyItMatters: "Classes can implement multiple interfaces.",
        content: `Kotlin supports implementing multiple interfaces.`,

        codeExamples: [
          {
            id: "kotlin-18-ex2",
            title: "Multiple Interfaces",
            description: "Implementing multiple",
            code: { kotlin: "interface Printable {\n    fun print()\n}\n\ninterface Serializable {\n    fun serialize(): String\n}\n\n// Class implementing multiple interfaces\nclass Document(val title: String) : Printable, Serializable {\n    override fun print() {\n        println(\"Printing: \\$title\")\n    }\n    \n    override fun serialize(): String {\n        return \"\\\"title\\\": \\\"\\$title\\\"\"\n    }\n}\n\n// Interface inheritance\ninterface AdvancedPrintable : Printable {\n    fun printWithBorder()\n    \n    // Can have default\n    fun fancyPrint() = printWithBorder()\n}\n\nclass Report(val content: String) : AdvancedPrintable {\n    override fun print() = println(content)\n    override fun printWithBorder() = println(\"=== \\$content ===\")\n}" },
            explanation: "Separate multiple interfaces with commas."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What is an interface?", options: ["Class type", "Contract definition", "Implementation", "Object"], correctAnswer: 1, explanation: "Interface defines a contract that classes implement.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "Can class implement multiple interfaces?", options: ["No", "Yes", "Only one", "Max two"], correctAnswer: 1, explanation: "Kotlin classes can implement multiple interfaces.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "How do you implement interface?", options: ["implements", "extends", ": interface", "by interface"], correctAnswer: 2, explanation: "Use : interfaceName syntax.", difficulty: 1 },
        { id: "q4", type: "true-false" as const, question: "Interfaces can have default implementations.", correctAnswer: true, explanation: "Interfaces can provide default implementations for methods.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "interface", value: "Define interface" },
      { label: ": Interface", value: "Implement interface" },
      { label: "override", value: "Implement member" },
      { label: "Multiple", value: "Separate with commas" }
    ]
  },
  {
    id: "kotlin-19",
    number: 19,
    title: "Data Classes",
    subtitle: "Automatic Code Generation",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["kotlin-18"],
    learningObjectives: ["Create data classes", "Use auto-generated methods", "Understand equals/hashCode/toString"],
    sections: [
      {
        id: "kotlin-19-1",
        title: "Data Classes",
        whyItMatters: "Perfect for holding data like DTOs and models.",
        content: `Data classes automatically generate equals(), hashCode(), toString(), and copy() methods.`,

        codeExamples: [
          {
            id: "kotlin-19-ex1",
            title: "Data Classes",
            description: "Auto-generated functionality",
            code: { kotlin: "// Data class - automatically generates:\n// equals(), hashCode(), toString(), copy(), componentN()\ndata class User(val name: String, val email: String, val age: Int)\n\nval user1 = User(\"John\", \"john@email.com\", 25)\nval user2 = User(\"John\", \"john@email.com\", 25)\n\n// Auto-generated equals() - compares properties\nprintln(user1 == user2)  // true (same data)\n\n// Auto-generated toString()\nprintln(user1)\n// User(name=John, email=john@email.com, age=25)\n\n// Auto-generated copy() - create modified copy\nval user3 = user1.copy(name = \"Jane\")\nprintln(user3)\n// User(name=Jane, email=john@email.com, age=25)\n\n// Destructuring - componentN() functions\nval (name, email, age) = user1\nprintln(\"\\$name, \\$email, \\$age\")\n\n// Copy with modification\nval user4 = user1.copy(age = 26)" },
            explanation: "Data classes are ideal for data objects."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does data class auto-generate?", options: ["Only toString", "equals, hashCode, toString, copy", "Only copy", "Nothing"], correctAnswer: 1, explanation: "Data class auto-generates major utility methods.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "How does copy work?", options: ["Creates new instance", "Modifies existing", "Returns null", "Throws error"], correctAnswer: 0, explanation: "copy creates a new instance with optional modifications.", difficulty: 1 },
        { id: "q3", type: "true-false" as const, question: "Data classes compare properties with equals.", correctAnswer: true, explanation: "equals() compares all properties, not references.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "data class", value: "Auto-generates utilities" },
      { label: "copy()", value: "Create modified copy" },
      { label: "componentN()", value: "Destructuring" }
    ]
  },
  {
    id: "kotlin-20",
    number: 20,
    title: "Object Keyword and Singletons",
    subtitle: "Single Instance Classes",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["kotlin-19"],
    learningObjectives: ["Create singleton with object", "Use object expressions", "Understand object declarations"],
    sections: [
      {
        id: "kotlin-20-1",
        title: "Object Declarations",
        whyItMatters: "Create singletons without boilerplate.",
        content: `Use object for singleton pattern - one instance only.`,

        codeExamples: [
          {
            id: "kotlin-20-ex1",
            title: "Object Declaration",
            description: "Singleton pattern",
            code: { kotlin: "// Singleton - single instance\nobject DatabaseConfig {\n    val url = \"jdbc:mysql://localhost:3306\"\n    val maxConnections = 10\n    \n    fun connect() {\n        println(\"Connecting to \\$url\")\n    }\n}\n\n// Access like static - no instantiation needed\nDatabaseConfig.connect()\nprintln(DatabaseConfig.url)\n\n// Factory-like object\nobject DateFormatter {\n    fun format(date: java.util.Date): String {\n        return date.toString()\n    }\n    \n    fun parse(str: String): java.util.Date {\n        return java.util.Date(str)\n    }\n}\n\n// Using object\nval formatted = DateFormatter.format(java.util.Date())\n\n// Object can implement interfaces\ninterface OnClickListener {\n    fun onClick()\n}\n\nobject MyButton : OnClickListener {\n    override fun onClick() {\n        println(\"Button clicked!\")\n    }\n}\n\nMyButton.onClick()" },
            explanation: "Object declarations create singletons automatically."
          }
        ]
      },
      {
        id: "kotlin-20-2",
        title: "Object Expressions",
        whyItMatters: "Create anonymous objects for callbacks and listeners.",
        content: `Object expressions create anonymous objects for one-time use.`,

        codeExamples: [
          {
            id: "kotlin-20-ex2",
            title: "Object Expressions",
            description: "Anonymous objects",
            code: { kotlin: "// Anonymous object for interface\ninterface OnClickListener {\n    fun onClick()\n    fun onLongClick()\n}\n\nclass Button {\n    var clickListener: OnClickListener? = null\n    \n    fun click() {\n        clickListener?.onClick()\n    }\n}\n\nval button = Button()\n\n// Object expression - create and assign\nbutton.clickListener = object : OnClickListener {\n    override fun onClick() {\n        println(\"Clicked!\")\n    }\n    \n    override fun onLongClick() {\n        println(\"Long clicked!\")\n    }\n}\n\nbutton.click()\n\n// Passing object expression\nfun setHandler(handler: OnClickListener) {\n    handler.onClick()\n}\n\nsetHandler(object : OnClickListener {\n    override fun onClick() = println(\"Handler works!\")\n    override fun onLongClick() = Unit\n})" },
            explanation: "Object expressions create one-time anonymous objects."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does object create?", options: ["Interface", "Singleton", "Class", "Abstract"], correctAnswer: 1, explanation: "object creates a singleton instance.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "How to access object member?", options: ["new Object.member()", "Object.member", "class.member()", "object.member()"], correctAnswer: 1, explanation: "Access directly like static: Object.member.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "Object expression creates?", options: ["Singleton", "Anonymous object", "Class", "Interface"], correctAnswer: 1, explanation: "Object expressions create anonymous objects.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "object Name", value: "Singleton declaration" },
      { label: "Object.member", value: "Access member" },
      { label: "object : Interface", value: "Anonymous implementation" }
    ]
  },
  {
    id: "kotlin-21",
    number: 21,
    title: "Visibility Modifiers",
    subtitle: "Controlling Access",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["kotlin-20"],
    learningObjectives: ["Use public, private, protected, internal", "Understand module-level access"],
    sections: [
      {
        id: "kotlin-21-1",
        title: "Visibility Modifiers",
        whyItMatters: "Control class member accessibility.",
        content: `Kotlin has four visibility modifiers: public, private, protected, internal.`,

        codeExamples: [
          {
            id: "kotlin-21-ex1",
            title: "Visibility Modifiers",
            description: "Access control",
            code: { kotlin: "// public - visible everywhere (default)\npublic class PublicClass {\n    public var publicProp = \"visible\"\n    \n    // private - only in this file/class\n    private var privateProp = \"hidden\"\n    \n    // protected - visible to subclasses\n    protected var protectedProp = \"subclass only\"\n    \n    // internal - visible within module\n    internal var internalProp = \"module only\"\n}\n\n// Usage outside class\nval obj = PublicClass()\nprintln(obj.publicProp)     // OK\n// obj.privateProp          // ERROR\n// obj.protectedProp        // ERROR\n// obj.internalProp        // OK (in same module)\n\n// Top-level (file-level) visibility\nprivate val moduleSecret = \"hidden from outside\"\n\n// Function visibility\ninternal fun moduleFunction() = \"module-only\"" },
            explanation: "Use minimal visibility needed."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What is default visibility in Kotlin?", options: ["private", "public", "protected", "internal"], correctAnswer: 1, explanation: "public is default in Kotlin.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What does internal mean?", options: ["Public", "Module-wide", "Class-only", "Private"], correctAnswer: 1, explanation: "internal is visible within same module.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What is visible with protected?", options: ["Everyone", "Class only", "Class + subclasses", "Module only"], correctAnswer: 2, explanation: "protected = class + subclasses.", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "What does private do?", options: ["Module only", "File only", "Class only", "Subclass only"], correctAnswer: 2, explanation: "private limits to declaring class (or file for top-level).", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "public", value: "Everywhere" },
      { label: "private", value: "Class/file only" },
      { label: "protected", value: "Class + subclasses" },
      { label: "internal", value: "Module only" }
    ]
  },
  {
    id: "kotlin-22",
    number: 22,
    title: "Collections Overview",
    subtitle: "Lists, Sets, and Maps",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["kotlin-21"],
    learningObjectives: ["Create lists, sets, maps", "Use collection operations", "Understand mutability"],
    sections: [
      {
        id: "kotlin-22-1",
        title: "Lists",
        whyItMatters: "Ordered collections with duplicates allowed.",
        content: `Lists store ordered elements and allow duplicates.`,

        codeExamples: [
          {
            id: "kotlin-22-ex1",
            title: "Lists",
            description: "Working with lists",
            code: { kotlin: "// Immutable list - cannot modify after creation\nval names: List<String> = listOf(\"Alice\", \"Bob\", \"Charlie\")\n\n// Access elements\nprintln(names[0])     // Alice\nprintln(names.first())  // Alice\nprintln(names.last())    // Charlie\n\n// Mutable list - can modify\nval numbers = mutableListOf(1, 2, 3)\nnumbers.add(4)\nnumbers.addAll(listOf(5, 6))\nnumbers.remove(2)\nprintln(numbers)  // [1, 3, 4, 5, 6]\n\n// List operations\nval fruits = listOf(\"apple\", \"banana\", \"cherry\", \"apple\")\nprintln(fruits.distinct())   // [apple, banana, cherry]\nprintln(fruits.indexOf(\"banana\"))  // 1\nprintln(fruits.contains(\"cherry\")) // true\n\n// List iteration\nfor (fruit in fruits) {\n    println(fruit)\n}\n\nfruits.forEach { println(it) }" },
            explanation: "List maintains insertion order and allows duplicates."
          }
        ]
      },
      {
        id: "kotlin-22-2",
        title: "Sets and Maps",
        whyItMatters: "Unique elements and key-value pairs.",
        content: `Sets have unique elements, Maps store key-value pairs.`,

        codeExamples: [
          {
            id: "kotlin-22-ex2",
            title: "Sets and Maps",
            description: "Unique collections and pairs",
            code: { kotlin: "// Sets - unique elements only\nval colors = setOf(\"red\", \"green\", \"blue\", \"red\")\nprintln(colors)  // [red, green, blue]\n\n// Mutable set\nval mutableColors = mutableSetOf(\"red\", \"green\")\nmutableColors.add(\"blue\")\nmutableColors.add(\"red\")  // No effect - already exists\n\n// Maps - key-value pairs\nval ages = mapOf(\"Alice\" to 25, \"Bob\" to 30, \"Charlie\" to 35)\n\n// Access values\nprintln(ages[\"Bob\"])        // 30\nprintln(ages.get(\"David\"))  // null\nprintln(ages.getOrDefault(\"David\", 0))  // 0\n\n// Mutable map\nval scores = mutableMapOf(\"Math\" to 90, \"Science\" to 85)\nscores[\"English\"] = 88\nscores.put(\"History\", 92)\nscores.remove(\"Math\")\n\n// Iterating maps\nfor ((key, value) in ages) {\n    println(\"\\$key: \\$value\")\n}\n\nages.forEach { (k, v) -> println(\"\\$k -> \\$v\") }" },
            explanation: "Sets ensure uniqueness, maps provide key-based access."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "Can list contain duplicates?", options: ["No", "Yes", "Only strings", "Only numbers"], correctAnswer: 1, explanation: "Lists allow duplicate elements.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What is set property?", options: ["Ordered", "Unique elements", "Key-value", "Sorted"], correctAnswer: 1, explanation: "Sets contain unique elements only.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "How to access map value?", options: ["map.key", "map[key]", "map.get(key)", "B or C"], correctAnswer: 3, explanation: "Use map[key] or map.get(key).", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "What is mutableList vs listOf?", options: ["Same", "Mutable can modify", "Immutable faster", "No difference"], correctAnswer: 1, explanation: "mutableList can be modified, listOf is read-only.", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "What does distinct() return?", options: ["List", "Set", "Map", "Count"], correctAnswer: 1, explanation: "distinct() returns unique elements as List.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "listOf", value: "Immutable list" },
      { label: "mutableListOf", value: "Mutable list" },
      { label: "setOf", value: "Unique elements" },
      { label: "mapOf()", value: "Key-value pairs" }
    ]
  }
];

export const kotlinTrack: Track = {
  id: "kotlin",
  title: "Kotlin",
  titleBn: "কোটলিন",
  tagline: "Modern programming for Android and beyond",
  taglineBn: "অ্যান্ড্রয়েড এবং তার বাইরে আধুনিক প্রোগ্রামিং",
  icon: "https://img.icons8.com/?size=160&id=4R3j0NpX1c2G&format=png",
  colorVar: "kotlin",
  totalChapters: kotlinChapters.length,
  estimatedHours: Math.round(kotlinChapters.reduce((sum, c) => sum + c.estimatedMinutes, 0) / 60),
  chapters: kotlinChapters,
  brandColor: "#7F52FF",
  glowColor: "rgba(127, 82, 255, 0.4)",
};