import { Track, Chapter, Section, Exercise, Quiz, QuizQuestion, CodeExample, MicroExercise, Callout, CheatSheetItem } from './types';

// Helper function to add Bn translations
function addBnTranslations(chapters: Chapter[]): Chapter[] {
  return chapters.map(ch => ({
    ...ch,
    titleBn: getBnTitle(ch.id),
    subtitleBn: getBnSubtitle(ch.id),
    partLabelBn: ch.partLabel?.replace("PART", "অংশ")
      .replace("ABSOLUTE BEGINNING", "মৌলিক শুরু")
      .replace("UNDERSTANDING C", "C বোঝা")
      .replace("ARRAYS AND STRINGS", "অ্যারে এবং স্ট্রিং")
      .replace("POINTERS", "পয়েন্টার")
      .replace("THE HEART OF C", "C-এর হৃদয়")
      .replace("MEMORY MANAGEMENT", "মেমরি ম্যানেজমেন্ট")
      .replace("STRUCTURES AND UNIONS", "স্ট্রাকচার এবং ইউনিয়ন")
      .replace("FILE I/O AND PREPROCESSOR", "ফাইল I/O এবং প্রিপ্রসেসর")
      .replace("DATA STRUCTURES", "ডেটা স্ট্রাকচার")
      .replace("FROM SCRATCH", "শূন্য থেকে")
      .replace("ADVANCED C AND PROJECTS", "উন্নত C এবং প্রজেক্ট"),
    learningObjectivesBn: ch.learningObjectives.map((o, i) => getBnObjective(ch.id, i)),
    sections: ch.sections.map((s, si) => ({
      ...s,
      titleBn: getBnSectionTitle(ch.id, si),
      whyItMattersBn: s.whyItMatters,
      contentBn: getBnSectionContent(ch.id, si),
    })),
  }));
}

function getBnTitle(id: string): string {
  const titles: Record<string, string> = {
    "c-ch-1": "C কী এবং কেন এটি এখনও প্রাসঙ্গিক?",
    "c-ch-2": "ভেরিয়েবল, ডেটা টাইপ এবং কনস্ট্যান্ট",
    "c-ch-3": "অপারেটর — গাণিতিক, রিলেশনাল, লজিক্যাল, বিটওয়াইজ",
    "c-ch-4": "ইনপুট এবং আউটপুট — scanf এবং printf",
    "c-ch-5": "কন্ডিশনাল স্টেটমেন্ট — if, else if, else, switch",
  };
  return titles[id] || "";
}

function getBnSubtitle(id: string): string {
  const subtitles: Record<string, string> = {
    "c-ch-1": "C প্রোগ্রামিং ভাষার ভিত্তি",
    "c-ch-2": "ডেটা সংরক্ষণ এবং টাইপ বোঝা",
    "c-ch-3": "অপারেশন করা শেখা",
    "c-ch-4": "ইনপুট/আউটপুট পড়া এবং লিখা",
    "c-ch-5": "সিদ্ধান্ত নেওয়া শেখা",
  };
  return subtitles[id] || "";
}

function getBnObjective(id: string, idx: number): string {
  const objectives: Record<string, string[]> = {
    "c-ch-1": [
      "C কী তা বুঝতে পারবেন",
      "কম্পাইলড বনাম ইন্টারপ্রেটেড ভাষা পার্থক্য করতে পারবেন",
      "প্রথম C প্রোগ্রাম চালাতে পারবেন"
    ],
  };
  return objectives[id]?.[idx] || "";
}

function getBnSectionTitle(id: string, si: number): string {
  return "";
}

function getBnSectionContent(id: string, si: number): string {
  return "";
}

export const cTrack: Track = {
  id: "c",
  title: "C Programming",
  titleBn: "C প্রোগ্রামিং",
  tagline: "The language that built the modern world",
  taglineBn: "আধুনিক বিশ্ব যে ভাষায় তৈরি",
  icon: "https://img.icons8.com/color/144/c-programming.png",
  colorVar: "c",
  brandColor: "#A8B9CC",
  glowColor: "#A8B9CC",
  totalChapters: 85,
  estimatedHours: 130,
  chapters: addBnTranslations([
    {
      id: "c-ch-1",
      number: 1,
      partLabel: "PART 1: ABSOLUTE BEGINNING — UNDERSTANDING C",
      title: "What Is C and Why Is It Still Relevant?",
      subtitle: "Understanding the foundation of modern programming",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 30,
      xpReward: 100,
      prerequisites: [],
      learningObjectives: [
        "Understand what C is and where it came from",
        "Know why C is called the 'mother of all languages'",
        "Understand compiled vs interpreted languages",
        "Set up the C development environment",
        "Run the first C program"
      ],
      sections: [
        {
          id: "ch1-what-is-c",
          title: "What Is C?",
          whyItMatters: "C is the foundation upon which modern computing is built. Understanding C means understanding what actually happens inside your computer.",
          realWorldAnalogy: "Most programming languages are like automatic cars — they handle gear shifts, fuel injection, and engine management for you. C is like a manual car with direct access to every mechanical system. It gives you complete control over the machine — which is powerful, but means you must understand what you are doing.",
          content: `C was created by Dennis Ritchie at Bell Labs between 1969 and 1973. It was designed to write the UNIX operating system — which itself was then used to write almost every major operating system including Linux, macOS, and Windows kernel components.

C is not just old — it is foundational. Here is a partial list of what is written in C:
- The Linux kernel
- The Python and Ruby interpreters
- Git version control
- SQLite database
- PostgreSQL and MySQL core
- Redis, Nginx, and countless other server software
- Every microcontroller firmware on the planet
- Medical devices, aircraft systems, car ECUs
- NASA spacecraft software

When you learn C, you understand what actually happens inside your computer. Every other language — Python, JavaScript, Java, Go, Rust — was either written in C or deeply inspired by its syntax.

C is the DNA of modern software.`,
          codeExamples: [
            {
              id: "ch1-history",
              title: "Languages Influenced by C",
              description: "Most modern programming languages have C syntax at their core",
              code: { javascript: `// This JavaScript code looks like C because JavaScript was inspired by C
// function greet(name) {
//     return "Hello, " + name;
// }

// This Python code also looks like C because Python's interpreter is written in C
// def greet(name):
//     return f"Hello, {name}"

console.log("All modern languages share C's basic syntax structure");` },
              explanation: "Notice how the syntax (braces, semicolons, keywords) resembles C. This is no coincidence — C established the dominant syntax style for programming languages."
            }
          ]
        },
        {
          id: "ch1-compiled",
          title: "Compiled vs Interpreted Languages",
          whyItMatters: "Understanding the difference between compilation and interpretation is crucial for writing efficient code and debugging performance issues.",
          content: `C is a compiled language. This means your source code (.c file) must be translated into machine code (binary) before it can run. This translation is done by a compiler — most commonly GCC (GNU Compiler Collection).

The compilation process:
1. You write code in hello.c
2. Run: gcc hello.c -o hello
3. The compiler produces a binary file called "hello"
4. You run ./hello and the CPU executes it directly

There is no interpreter in between. This is why C programs are extremely fast — the CPU runs your code directly, not through an interpreter layer.

Comparison with interpreted languages:
- Python: Code runs through an interpreter (slower, but portable)
- C: Code compiles to machine code (faster, but platform-specific)

A well-written C program runs 10-100x faster than equivalent Python code. This is why C is used for:
- Operating systems (speed is critical)
- Embedded systems (limited resources)
- Game engines (real-time performance)
- Scientific computing (heavy calculations)`,
          codeExamples: [
            {
              id: "ch1-compare",
              title: "Compilation vs Interpretation",
              description: "Visual comparison of how compiled and interpreted languages work",
              code: { javascript: `// COMPILED LANGUAGES (C, C++, Rust, Go):
// Source Code (.c) → COMPILER → Machine Code (.exe) → CPU
//                 ↑ Only happens once, then run many times

// INTERPRETED LANGUAGES (Python, JavaScript, Ruby):
// Source Code (.py) → INTERPRETER → CPU
//                 ↑ Happens every time you run the program

console.log("Compiled: Faster execution, slower compilation");
console.log("Interpreted: Slower execution, faster development");` },
              explanation: "The compiler translates your entire program at once. When you run the program, it's already in machine code — the CPU doesn't need to translate it on the fly."
            }
          ]
        },
        {
          id: "ch1-setup",
          title: "Setting Up the Environment",
          whyItMatters: "You need a working C development environment before you can write your first program. This section guides you through the setup process.",
          content: `Setting up C development environment:

**Windows:**
1. Install MinGW-w64 (GCC for Windows) OR use VS Code with C/C++ extension + MSYS2
2. Alternative: Use WSL (Windows Subsystem for Linux) — recommended for serious C development
3. Verify installation: open cmd, type gcc --version

**macOS:**
1. Install Xcode Command Line Tools: xcode-select --install
2. Clang (LLVM C compiler) is included by default

**Linux (Ubuntu/Debian):**
1. Install GCC: sudo apt install gcc
2. Verify: gcc --version

**VS Code Setup:**
1. Install "C/C++" extension by Microsoft
2. Install "Code Runner" extension for quick compilation

**Your First Project:**
\`\`\`bash
mkdir c-learning && cd c-learning
touch hello.c
\`\`\``,
          callouts: [
            {
              type: "tip",
              title: "Recommended Compile Command",
              content: "Always use: gcc -Wall -Wextra -std=c17 yourfile.c -o output\n\n-Wall enables all warnings\n-Wextra enables extra warnings\n-std=c17 uses the C17 standard"
            }
          ]
        },
        {
          id: "ch1-first-program",
          title: "Your First C Program — Line by Line",
          whyItMatters: "Every C program starts with main(). Understanding every part of this simple program is essential before moving forward.",
          content: `Here is your first C program, line by line:

\`\`\`c
#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}
\`\`\`

**Every character explained:**

#include <stdio.h>
- This is a preprocessor directive
- Tells the compiler to include the Standard Input/Output header file
- This file contains the declaration of printf()
- Without it, the compiler doesn't know what printf is

int main()
- int = this function returns an integer
- main = the special name the OS looks for (entry point)
- () = no parameters (for now)
- Execution ALWAYS starts here

{ } — Curly braces
- Define the body (block) of the function
- Everything between these braces is part of main()

printf("Hello, World!\\n")
- print FORMATTED text to the terminal
- \\n is the newline escape sequence

return 0
- Returns 0 to the operating system
- 0 = program ran successfully
- Any other value = error code

Semicolons — Every statement MUST end with a semicolon. This is NOT optional. Forgetting a semicolon is the most common beginner error!`,
          codeExamples: [
            {
              id: "ch1-hello",
              title: "Hello World Program",
              description: "The classic first program in C",
              code: { c: `#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}` },
              explanation: "Type this exactly as shown, save as hello.c, compile with 'gcc hello.c -o hello', and run with './hello'."
            }
          ]
        },
        {
          id: "ch1-compiling",
          title: "Compiling and Running",
          whyItMatters: "You need to know how to compile and run C programs. These commands will be used throughout your entire C programming career.",
          content: `Basic compilation commands:

\`\`\`bash
gcc hello.c -o hello          # Compile hello.c, output to file 'hello'
./hello                       # Run (Linux/macOS)
hello.exe                     # Run (Windows)

# With recommended flags:
gcc -Wall -Wextra -std=c17 hello.c -o hello
\`\`\`

Understanding the -o flag:
- If you don't specify -o, GCC names the output "a.out" (arbitrary output)
- -o hello means: name the output file "hello"

Common GCC flags every C programmer needs:
- -Wall (enable ALL warnings)
- -Wextra (extra warnings)
- -g (include debug info for gdb debugger)
- -std=c17 (use C17 standard, the latest stable C standard)
- -O2 (optimize for speed)
- -lm (link math library)`,
          callouts: [
            {
              type: "warning",
              title: "Always Enable Warnings",
              content: "gcc -Wall -Wextra might seem overwhelming at first, but it catches real bugs before they become problems. Treat every warning as an error."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch1-ex1",
          title: "Modify Hello World",
          difficulty: 1,
          description: "Modify the hello world program to print your name, the current year, and 'I am learning C!' on three separate lines using three printf() calls.",
          requirements: ["Use three printf() calls", "Print on separate lines", "Include your name and the message"],
          starterCode: { c: `#include <stdio.h>\n\nint main() {\n    // Print your name, year, and message\n    \n    return 0;\n}` },
          hints: ["Remember to use \\n at the end of each line", "printf() prints exactly what you put inside quotes"],
          solution: { c: `#include <stdio.h>\n\nint main() {\n    printf("Abir Hasan\\n");\n    printf("2024\\n");\n    printf("I am learning C!\\n");\n    return 0;\n}` },
          solutionExplanation: "Each printf() call prints one line. The \\n creates a new line after each message."
        },
        {
          id: "ch1-ex2",
          title: "ASCII Art Box",
          difficulty: 1,
          description: "Write a C program that prints a simple box made of asterisks using multiple printf() calls.",
          requirements: ["Print a rectangular box shape", "Use only asterisks and spaces", "At least 5 characters wide"],
          starterCode: { c: `#include <stdio.h>\n\nint main() {\n    // Print a box made of asterisks\n    \n    return 0;\n}` },
          hints: ["Print top and bottom borders with asterisks", "Print sides with asterisks and spaces inside"],
          solution: { c: `#include <stdio.h>\n\n\nint main() {\n    printf("*********\\n");\n    printf("*       *\\n");\n    printf("*  BOX  *\\n");\n    printf("*       *\\n");\n    printf("*********\\n");\n    return 0;\n}` },
          solutionExplanation: "Each line is a separate printf() call. The \\n moves to the next line after each print."
        },
        {
          id: "ch1-ex3",
          title: "Direct Calculation",
          difficulty: 2,
          description: "Without using any variables, write a program that prints the result of 25 * 4 + 17 - 3 by putting the expression directly inside printf() using the %d format specifier.",
          requirements: ["No variables allowed", "Calculate inside printf()", "Use %d format specifier"],
          starterCode: { c: `#include <stdio.h>\n\nint main() {\n    // Calculate and print: 25 * 4 + 17 - 3\n    // Hint: use %d to print the result\n    \n    return 0;\n}` },
          hints: ["%d prints an integer value", "You can put expressions inside printf() like printf(\"%d\", 25 * 4 + 17 - 3)"],
          solution: { c: `#include <stdio.h>\n\nint main() {\n    printf("Result: %d\\n", 25 * 4 + 17 - 3);\n    return 0;\n}` },
          solutionExplanation: "C can evaluate arithmetic expressions directly. The %d tells printf() to expect an integer, which can be a literal calculation."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch1-q1",
            type: "mcq",
            question: "Who created the C programming language?",
            options: ["Linus Torvalds", "Dennis Ritchie", "Brian Kernighan", "Ken Thompson"],
            correctAnswer: 1,
            explanation: "Dennis Ritchie created C at Bell Labs between 1969-1973. Brian Kernighan co-authored 'The C Programming Language' book.",
            difficulty: 1
          },
          {
            id: "ch1-q2",
            type: "true-false",
            question: "C code runs through an interpreter when executed.",
            correctAnswer: false,
            explanation: "C is a compiled language. Source code is compiled to machine code by a compiler like GCC, and the CPU executes that machine code directly with no interpreter.",
            difficulty: 1
          },
          {
            id: "ch1-q3",
            type: "mcq",
            question: "What does #include <stdio.h> do?",
            options: ["Creates a new file", "Includes the standard I/O library declarations", "Runs the program", "Defines the main function"],
            correctAnswer: 1,
            explanation: "#include <stdio.h> tells the preprocessor to include the Standard Input/Output header file, which contains declarations for printf(), scanf(), etc.",
            difficulty: 1
          },
          {
            id: "ch1-q4",
            type: "mcq",
            question: "What command compiles hello.c and outputs a file named 'hello'?",
            options: ["gcc hello.c", "gcc hello.c -o hello", "compile hello.c", "run hello.c"],
            correctAnswer: 1,
            explanation: "gcc hello.c -o hello compiles the source file and names the output 'hello'. The -o flag specifies the output filename.",
            difficulty: 1
          },
          {
            id: "ch1-q5",
            type: "fill-blank",
            question: "Every C statement must end with a ___.",
            options: ["semicolon (;)"],
            correctAnswer: 0,
            explanation: "Every C statement MUST end with a semicolon. This is NOT optional. Forgetting a semicolon is the most common beginner error.",
            difficulty: 1
          },
          {
            id: "ch1-q6",
            type: "mcq",
            question: "What does int main() mean?",
            options: ["Main function takes an integer", "Main function returns an integer", "Main function needs integer input", "Main is an integer variable"],
            correctAnswer: 1,
            explanation: "int main() means the main function returns an integer to the operating system. By convention, 0 means success, non-zero means error.",
            difficulty: 2
          },
          {
            id: "ch1-q7",
            type: "true-false",
            question: "C is a slow language because it is old.",
            correctAnswer: false,
            explanation: "C is one of the FASTEST languages because it compiles directly to machine code with no interpreter or virtual machine overhead.",
            difficulty: 1
          },
          {
            id: "ch1-q8",
            type: "spot-the-bug",
            question: "What is wrong with this code?\\n\\nint main() { printf(\"Hello\"); }",
            code: "int main() { printf(\"Hello\"); }",
            options: ["Missing return statement", "Missing semicolon", "Missing include", "Nothing is wrong"],
            correctAnswer: 0,
            explanation: "In C, main() must return an int. The function should end with 'return 0;' or the compiler may warn/error depending on the standard used.",
            difficulty: 2
          }
        ],
        passingScore: 6
      },
      cheatSheet: [
        { label: "Compile", value: "gcc -Wall -Wextra -std=c17 file.c -o output" },
        { label: "Run (Linux)", value: "./output" },
        { label: "Run (Windows)", value: "output.exe" },
        { label: "Print text", value: 'printf("text\\n")' },
        { label: "Include I/O", value: "#include <stdio.h>" },
        { label: "Main function", value: "int main() { return 0; }" },
        { label: "Newline", value: "\\n in printf" },
        { label: "Comment", value: "// single line /* multi */" }
      ]
    },
    // Chapter 2: Variables, Data Types, and Constants
    {
      id: "c-ch-2",
      number: 2,
      partLabel: "PART 1: ABSOLUTE BEGINNING — UNDERSTANDING C",
      title: "Variables, Data Types, and Constants",
      subtitle: "Storing and managing data in C",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 45,
      xpReward: 100,
      prerequisites: ["c-ch-1"],
      learningObjectives: [
        "Understand what a variable is in C",
        "Know all basic data types and their memory sizes",
        "Use format specifiers correctly",
        "Create and use constants"
      ],
      sections: [
        {
          id: "ch2-what-is-variable",
          title: "What Is a Variable?",
          whyItMatters: "Variables are the fundamental building blocks of any program. Without variables, you couldn't store user input, intermediate results, or any data.",
          realWorldAnalogy: "Computer memory (RAM) is like a massive hotel with billions of rooms. A variable is like booking one of those rooms under a name. When you write 'int age = 25', you are booking a room called 'age', putting the number 25 inside it, and telling the hotel what kind of guest will stay there (an integer).",
          content: `A variable in C is a named storage location in memory. You can store a value in it, retrieve the value later, and modify it during program execution.

In C, every variable has:
1. A name (identifier) — how you refer to it
2. A type — what kind of data it stores
3. A value — what is currently stored
4. A memory address — where it lives in RAM

When you write:
\`\`\`c
int age = 25;
\`\`\`

You are telling the computer: "Reserve 4 bytes of memory, call it 'age', and put the number 25 in it."

The 'int' tells the compiler: "This variable will store an integer, so reserve 4 bytes and use integer arithmetic with it."

Unlike Python or JavaScript, C requires you to specify the type. This is called static typing and it enables:
- Faster code (no runtime type checking)
- More memory efficiency
- Catch bugs at compile time`,
          codeExamples: [
            {
              id: "ch2-variables",
              title: "Variables in Action",
              description: "Declaring and using variables in C",
              code: { c: `#include <stdio.h>\n\nint main() {\n    int age = 25;\n    float gpa = 3.75;\n    char grade = 'A';\n    \n    printf("Age: %d\\n", age);\n    printf("GPA: %.2f\\n", gpa);\n    printf("Grade: %c\\n", grade);\n    \n    return 0;\n}` },
              explanation: "Each variable has a type (int, float, char) that determines how much memory it uses and how it can be used."
            }
          ]
        },
        {
          id: "ch2-data-types",
          title: "C's Basic Data Types",
          whyItMatters: "C gives you precise control over memory. Choosing the right data type can save memory in embedded systems or prevent overflow bugs.",
          content: `C provides several basic data types:

**Integer Types:**
- char: 1 byte, range: -128 to 127 (or 0 to 255 unsigned)
- short: 2 bytes, range: -32,768 to 32,767
- int: 4 bytes, range: -2,147,483,648 to 2,147,483,647
- long: 4 or 8 bytes depending on platform
- long long: 8 bytes, range: -9.2 quintillion to +9.2 quintillion

**Floating-Point Types:**
- float: 4 bytes, ~6-7 significant digits (32-bit IEEE 754)
- double: 8 bytes, ~15-16 significant digits (64-bit IEEE 754)

**Why sizes matter:**
Unlike Python/JavaScript, C gives you exact control over memory. Using int when you need long can cause overflow bugs:

\`\`\`c
short population = 32768;  // Overflow! Max short is 32767
int bigNumber = 2147483648;  // Overflow! Max int is 2147483647
\`\`\``,
          callouts: [
            {
              type: "info",
              title: "Memory Sizes Are Platform-Dependent",
              content: "Use sizeof(type) to check actual sizes: printf(\"int: %zu bytes\\n\", sizeof(int)); This ensures portable code."
            }
          ]
        },
        {
          id: "ch2-format-specifiers",
          title: "Format Specifiers",
          whyItMatters: "printf() and scanf() are useless without format specifiers. Master these to print and read data correctly.",
          content: `Format specifiers tell printf() and scanf() what type of data to expect:

**Print Format Specifiers:**
- %d — int (decimal integer)
- %i — int (alternative)
- %u — unsigned int
- %ld — long
- %lld — long long
- %f — float/double (default 6 decimal places)
- %.2f — float with 2 decimal places
- %5d — minimum 5 characters wide
- %c — char (single character)
- %s — string (character array)
- %p — pointer address (in hex)
- %x — hexadecimal
- %o — octal
- %% — literal percent sign

**Width and Precision:**
- %8d — right-align in 8 chars
- %-8d — left-align in 8 chars
- %08d — pad with zeros
- %.2f — 2 decimal places`,
          codeExamples: [
            {
              id: "ch2-format-demo",
              title: "Format Specifiers Demo",
              description: "Using different format specifiers",
              code: { c: `#include <stdio.h>\n\nint main() {\n    int num = 42;\n    float pi = 3.14159;\n    char letter = 'C';\n    \n    printf("Integer: %d\\n", num);\n    printf("With width: %5d\\n", num);\n    printf("Float: %.2f\\n", pi);\n    printf("Character: %c\\n", letter);\n    printf("Hex: 0x%x\\n", num);\n    printf("Octal: 0%o\\n", num);\n    \n    return 0;\n}` },
              explanation: "Different specifiers format the output differently. Use %d for integers, %f for floats, %c for characters."
            }
          ]
        },
        {
          id: "ch2-constants",
          title: "Constants: #define and const",
          whyItMatters: "Constants prevent accidental modification of values that should never change, like mathematical constants or configuration values.",
          content: `Constants are values that cannot be modified after initialization:

**Using #define (Preprocessor Macro):**
\`\`\`c
#define PI 3.14159
#define MAX_SIZE 100
#define NAME "CodeMastery"
\`\`\`
- Replaced by preprocessor before compilation
- No type, no memory allocated
- Uppercase by convention

**Using const (Type-Safe Constant):**
\`\`\`c
const int DAYS_IN_WEEK = 7;
const double GRAVITY = 9.81;
\`\`\`
- Creates an actual typed variable
- Compiler enforces read-only
- Modern C prefers const

**Difference:**
\`\`\`c
#define PI 3.14159       // No type, no memory
const double PI = 3.14159;  // Has type, has memory
\`\`\`

Modern C prefers const over #define for constants because const has type checking.`,
          codeExamples: [
            {
              id: "ch2-constants-demo",
              title: "Constants Example",
              description: "Using #define and const",
              code: { c: `#include <stdio.h>\n\n#define PI 3.14159\n#define MAX_ITEMS 100\n\nint main() {\n    const int DAYS_IN_WEEK = 7;\n    const double GRAVITY = 9.81;\n    \n    printf("PI is approximately %.5f\\n", PI);\n    printf("Days in week: %d\\n", DAYS_IN_WEEK);\n    printf("Gravity: %.2f m/s²\\n", GRAVITY);\n    printf("Max items: %d\\n", MAX_ITEMS);\n    \n    return 0;\n}` },
              explanation: "#define constants are simple text replacement. const creates actual variables that the compiler protects from modification."
            }
          ]
        },
        {
          id: "ch2-sizeof",
          title: "The sizeof Operator",
          whyItMatters: "Memory sizes vary between platforms. Using sizeof ensures your code works correctly on any system.",
          content: `sizeof returns the size of a type or variable in bytes:

\`\`\`c
printf("Size of int: %zu bytes\\n", sizeof(int));
printf("Size of double: %zu bytes\\n", sizeof(double));
printf("Size of char: %zu bytes\\n", sizeof(char));
printf("Size of long long: %zu bytes\\n", sizeof(long long));
\`\`\`

Why it matters:
- int is typically 4 bytes, but on some systems it's 2 bytes
- long could be 4 or 8 bytes depending on platform
- Never hardcode size assumptions

\`\`\`c
int arr[10];
printf("Array size: %zu bytes\\n", sizeof(arr));  // 40 bytes (10 * 4)
printf("Element count: %zu\\n", sizeof(arr) / sizeof(arr[0]));
\`\`\``,
          codeExamples: [
            {
              id: "ch2-sizeof-demo",
              title: "sizeof Demonstration",
              description: "Checking memory sizes on your system",
              code: { c: `#include <stdio.h>\n\nint main() {\n    printf("Data type sizes on this system:\\n\\n");\n    printf("char:      %zu byte(s)\\n", sizeof(char));\n    printf("short:     %zu byte(s)\\n", sizeof(short));\n    printf("int:       %zu byte(s)\\n", sizeof(int));\n    printf("long:      %zu byte(s)\\n", sizeof(long));\n    printf("long long: %zu byte(s)\\n", sizeof(long long));\n    printf("float:     %zu byte(s)\\n", sizeof(float));\n    printf("double:    %zu byte(s)\\n", sizeof(double));\n    \n    return 0;\n}` },
              explanation: "Running this program tells you exactly how much memory each type uses on YOUR system. This is crucial for writing portable code."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch2-ex1",
          title: "All Basic Types",
          difficulty: 1,
          description: "Create variables of all basic types (int, float, double, char) and print their values and sizes.",
          requirements: ["Declare one of each: int, float, double, char", "Print their values", "Print their sizes using sizeof"],
          starterCode: { c: `#include <stdio.h>\n\n\nint main() {\n    // Declare variables of each basic type\n    \n    // Print their values\n    \n    // Print their sizes\n    \n    return 0;\n}` },
          hints: ["char uses %c for printing", "float values often need 'f' suffix: 3.14f"],
          solution: { c: `#include <stdio.h>\n\nint main() {\n    int number = 42;\n    float decimal = 3.14f;\n    double bigDecimal = 3.14159265358979;\n    char letter = 'X';\n    \n    printf("Values:\\n");\n    printf("  int:    %d\\n", number);\n    printf("  float:  %.2f\\n", decimal);\n    printf("  double: %.5lf\\n", bigDecimal);\n    printf("  char:   %c\\n", letter);\n    \n    printf("\\nSizes:\\n");\n    printf("  int:    %zu bytes\\n", sizeof(int));\n    printf("  float:  %zu bytes\\n", sizeof(float));\n    printf("  double: %zu bytes\\n", sizeof(double));\n    printf("  char:   %zu bytes\\n", sizeof(char));\n    \n    return 0;\n}` },
          solutionExplanation: "Each type is declared and initialized, then printed using the appropriate format specifier. sizeof() shows memory usage."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch2-q1",
            type: "mcq",
            question: "What is the size of an int on most modern systems?",
            options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
            correctAnswer: 2,
            explanation: "On most modern systems (32-bit and 64-bit), int is 4 bytes. But always use sizeof() to check!",
            difficulty: 1
          },
          {
            id: "ch2-q2",
            type: "mcq",
            question: "What format specifier prints a floating-point number?",
            options: ["%d", "%c", "%f", "%s"],
            correctAnswer: 2,
            explanation: "%f is used for float and double. %d is for integers, %c for characters, %s for strings.",
            difficulty: 1
          },
          {
            id: "ch2-q3",
            type: "fill-blank",
            question: "A constant defined with #define has no ___.",
            options: ["type"],
            correctAnswer: 0,
            explanation: "#define is a simple text replacement by the preprocessor. It has no type information.",
            difficulty: 2
          },
          {
            id: "ch2-q4",
            type: "mcq",
            question: "What does sizeof() return?",
            options: ["Number of elements", "Size in bytes", "Memory address", "Number of bits"],
            correctAnswer: 1,
            explanation: "sizeof() returns the size of a type or variable in bytes. 1 byte = 8 bits.",
            difficulty: 1
          },
          {
            id: "ch2-q5",
            type: "mcq",
            question: "Which is the correct way to declare a constant?",
            options: ["constant int PI = 3.14", "const int PI = 3.14", "int const PI = 3.14", "Both B and C"],
            correctAnswer: 3,
            explanation: "Both 'const int PI' and 'int const PI' are valid. The const keyword applies to what's immediately to its left (or right if nothing is there).",
            difficulty: 2
          }
        ],
        passingScore: 4
      },
      cheatSheet: [
        { label: "Integer", value: "int x = 42; // %d" },
        { label: "Float", value: "float x = 3.14f; // %f" },
        { label: "Double", value: "double x = 3.14; // %lf" },
        { label: "Character", value: "char c = 'A'; // %c" },
        { label: "String", value: 'char s[] = "Hi"; // %s' },
        { label: "Constant", value: "const int X = 100;" },
        { label: "Sizeof", value: "sizeof(int) // %zu" },
        { label: "Newline", value: "\\n" }
      ]
    },

    // Chapter 3: Operators
    {
      id: "c-ch-3",
      number: 3,
      partLabel: "PART 1: ABSOLUTE BEGINNING — UNDERSTANDING C",
      title: "Operators — Arithmetic, Relational, Logical, Bitwise",
      subtitle: "Performing operations on data",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 40,
      xpReward: 100,
      prerequisites: ["c-ch-2"],
      learningObjectives: [
        "Use arithmetic operators (+, -, *, /, %)",
        "Understand relational operators (==, !=, <, >, <=, >=)",
        "Use logical operators (&&, ||, !)",
        "Apply operator precedence"
      ],
      sections: [
        {
          id: "ch3-arithmetic",
          title: "Arithmetic Operators",
          whyItMatters: "Arithmetic operators are the foundation of all mathematical operations in C. Every calculator, game, and financial application uses them.",
          content: `C provides five basic arithmetic operators:

Addition: +
Subtraction: -
Multiplication: *
Division: /
Modulo (remainder): %

\`\`\`c
int a = 10, b = 3;
printf("%d + %d = %d\\n", a, b, a + b);  // 13
printf("%d - %d = %d\\n", a, b, a - b);  // 7
printf("%d * %d = %d\\n", a, b, a * b);  // 30
printf("%d / %d = %d\\n", a, b, a / b);  // 3 (integer division)
printf("%d %% %d = %d\\n", a, b, a % b);  // 1 (remainder)
\`\`\`

**Important: Integer Division**
When dividing two integers in C, the result is always an integer (fractional part discarded):
13 / 5 = 2 (not 2.6)

To get decimal division, use float/double:
13.0 / 5.0 = 2.6`,
          codeExamples: [
            {
              id: "ch3-arith-demo",
              title: "Arithmetic Operators Demo",
              description: "All arithmetic operations in C",
              code: { c: `#include <stdio.h>\n\nint main() {\n    int a = 15, b = 4;\n    \n    printf("a = %d, b = %d\\n\\n", a, b);\n    printf("a + b = %d\\n", a + b);\n    printf("a - b = %d\\n", a - b);\n    printf("a * b = %d\\n", a * b);\n    printf("a / b = %d (integer division)\\n", a / b);\n    printf("a %% b = %d (remainder)\\n", a % b);\n    \n    // Floating point division\n    printf("\\nFloating: %.2f / %d = %.2f\\n", 15.0, b, 15.0 / b);\n    \n    return 0;\n}` },
              explanation: "Integer division truncates (rounds down). Use %.2f for decimal output."
            }
          ]
        },
        {
          id: "ch3-relational",
          title: "Relational Operators",
          whyItMatters: "Relational operators are the foundation of all decision-making in code. They compare values to determine if conditions are true or false.",
          content: `Relational operators compare two values and return 1 (true) or 0 (false):

==  Equal to
!=  Not equal to
<   Less than
>   Greater than
<=  Less than or equal
>=  Greater than or equal

\`\`\`c
int x = 5, y = 10;
printf("%d == %d is %d\\n", x, y, x == y);  // 0 (false)
printf("%d != %d is %d\\n", x, y, x != y);  // 1 (true)
printf("%d < %d is %d\\n", x, y, x < y);   // 1 (true)
printf("%d > %d is %d\\n", x, y, x > y);    // 0 (false)
\`\`\`

**Common Mistake: = vs ==**
if (x = 5)   // WRONG! Assigns 5 to x
if (x == 5)  // CORRECT! Compares x to 5`,
          callouts: [
            {
              type: "common-mistake",
              title: "Assignment vs Comparison",
              content: "Always use == for comparison in if statements. Using = assigns instead of comparing."
            }
          ]
        },
        {
          id: "ch3-logical",
          title: "Logical Operators",
          whyItMatters: "Logical operators combine multiple conditions, essential for complex decision-making in programs.",
          content: `Logical operators combine boolean expressions:

&&  Logical AND (both must be true)
||  Logical OR (at least one must be true)
!   Logical NOT (inverts truth value)

\`\`\`c
int age = 25;
int income = 50000;

// AND: both conditions must be true
if (age >= 18 && income > 30000) {
    printf("Eligible for loan\\n");
}

// OR: at least one condition must be true
if (age < 18 || income < 10000) {
    printf("Not eligible\\n");
}

// NOT: inverts the condition
if (!(age < 18)) {
    printf("Adult\\n");
}
\`\`\``,
          codeExamples: [
            {
              id: "ch3-logic-demo",
              title: "Logical Operators Demo",
              description: "Using &&, || and ! operators",
              code: { c: `#include <stdio.h>\n\nint main() {\n    int x = 5, y = 10;\n    \n    printf("x = %d, y = %d\\n\\n", x, y);\n    \n    printf("x > 0 && y > 0: %d\\n", x > 0 && y > 0);\n    printf("x > 0 && y < 0: %d\\n", x > 0 && y < 0);\n    printf("x > 0 || y < 0: %d\\n", x > 0 || y < 0);\n    printf("!(x > 0): %d\\n", !(x > 0));\n    \n    return 0;\n}` },
              explanation: "&& returns true only if both operands are true. || returns true if at least one is true. ! flips the result."
            }
          ]
        },
        {
          id: "ch3-precedence",
          title: "Operator Precedence",
          whyItMatters: "Understanding operator precedence helps you write correct expressions without excessive parentheses.",
          content: `Operator precedence determines which operators are evaluated first:

Highest to lowest:
1. ()     Parentheses
2. !, ++, --  Unary operators
3. *, /, %    Multiplicative
4. +, -       Additive
5. <, <=, >, >=  Relational
6. ==, !=     Equality
7. &&         Logical AND
8. ||         Logical OR
9. =          Assignment

\`\`\`c
int result = 2 + 3 * 4;      // 14 (not 20)
int result2 = (2 + 3) * 4;  // 20

// Recommended: use parentheses for clarity
int a = 10, b = 5, c = 2;
int x = (a + b) * c;  // 30 - clear!
\`\`\`

**Rule of thumb:** When in doubt, use parentheses to make your intent clear.`,
          callouts: [
            {
              type: "tip",
              title: "Be Explicit",
              content: "Use parentheses even when not strictly needed. Clear code is better than clever code."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          { id: "ch3-q1", type: "mcq", question: "What is 10 / 3 in C (integers)?", options: ["3.33", "3", "4", "3.0"], correctAnswer: 1, explanation: "Integer division truncates the decimal part.", difficulty: 1 },
          { id: "ch3-q2", type: "mcq", question: "What is 10 % 3?", options: ["3", "3.33", "1", "0"], correctAnswer: 2, explanation: "% returns the remainder of division: 10 = 3*3 + 1.", difficulty: 1 },
          { id: "ch3-q3", type: "mcq", question: "What does && mean?", options: ["OR", "AND", "NOT", "XOR"], correctAnswer: 1, explanation: "&& is logical AND - both conditions must be true.", difficulty: 1 },
          { id: "ch3-q4", type: "true-false", question: "if (x = 5) compares x to 5.", correctAnswer: false, explanation: "= is assignment, == is comparison. if (x = 5) assigns 5 to x.", difficulty: 2 }
        ],
        passingScore: 3
      },
      cheatSheet: [
        { label: "Add", value: "a + b" },
        { label: "Subtract", value: "a - b" },
        { label: "Multiply", value: "a * b" },
        { label: "Divide", value: "a / b (integer)" },
        { label: "Modulo", value: "a % b (remainder)" },
        { label: "AND", value: "a && b" },
        { label: "OR", value: "a || b" },
        { label: "NOT", value: "!a" }
      ]
    },

    // Chapter 4: Input and Output
    {
      id: "c-ch-4",
      number: 4,
      partLabel: "PART 1: ABSOLUTE BEGINNING — UNDERSTANDING C",
      title: "Input and Output — scanf and printf Deep Dive",
      subtitle: "Reading from keyboard and printing to screen",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 45,
      xpReward: 100,
      prerequisites: ["c-ch-3"],
      learningObjectives: [
        "Use printf() with format specifiers",
        "Use scanf() to read user input",
        "Handle different data types with scanf",
        "Avoid common input errors"
      ],
      sections: [
        {
          id: "ch4-printf-deep",
          title: "printf — Beyond Basic Usage",
          whyItMatters: "printf is your primary tool for outputting information. Mastering it makes debugging and displaying results much easier.",
          content: `printf advanced features:

**Width Specifier:**
\`\`\`c
printf("%5d", 42);    // "   42" (right-aligned, 5 chars)
printf("%-5d", 42);   // "42   " (left-aligned, 5 chars)
printf("%05d", 42);   // "00042" (zero-padded)
\`\`\`

**Precision Specifier:**
\`\`\`c
printf("%.2f", 3.14159);   // "3.14"
printf("%.10s", "Hello");  // "Hell00000" (10 chars)
\`\`\`

**Escapes Sequences:**
- \\n — newline
- \\t — tab
- \\" — double quote
- \\\\ — backslash
- %% — percent sign`,
          codeExamples: [
            {
              id: "ch4-printf-demo",
              title: "printf Formatting Demo",
              description: "Advanced printf formatting options",
              code: { c: `#include <stdio.h>\n\nint main() {\n    // Integer formatting\n    printf("Integers:\\n");\n    printf("Normal: %d\\n", 42);\n    printf("Width:  [%5d]\\n", 42);\n    printf("Zero pad: [%05d]\\n", 42);\n    printf("Left:    [%-5d]\\n\\n", 42);\n    \n    // Float formatting\n    printf("Floats:\\n");\n    printf("Normal:   %.3f\\n", 3.14159);\n    printf("Width:    [%10.2f]\\n", 3.14);\n    printf("Zero pad: [%010.2f]\\n", 3.14);\n    \n    return 0;\n}` },
              explanation: "Width adds padding. Precision limits decimal places. Negative width left-aligns."
            }
          ]
        },
        {
          id: "ch4-scanf",
          title: "scanf — Reading Input",
          whyItMatters: "scanf is the primary way to get user input. Understanding it prevents common bugs that crash programs.",
          content: `scanf reads input from the standard input (keyboard):

\`\`\`c
int age;
float gpa;
char name[50];

printf("Enter your age: ");
scanf("%d", &age);           // & is REQUIRED for variables

printf("Enter your GPA: ");
scanf("%f", &gpa);

printf("Enter your name: ");
scanf("%s", name);          // No & for arrays!
\`\`\`

**Important Rules:**
1. Always use & before variable names (except arrays)
2. & gets the memory ADDRESS of the variable
3. For strings (char arrays), the array name IS the address

**Multiple inputs:**
\`\`\`c
scanf("%d %f %s", &age, &gpa, name);
\`\`\`

**Common Bug:**
\`\`\`c
scanf("%s", name);  // CORRECT - name is already address
scanf("%s", &name); // WRONG - &name is address of array (same value!)
\`\`\``,
          callouts: [
            {
              type: "warning",
              title: "Always Use & with scanf",
              content: "Forgetting & is the most common scanf bug. Without &, scanf writes to a random memory location."
            }
          ]
        },
        {
          id: "ch4-scanf-issues",
          title: "scanf Limitations and Solutions",
          whyItMatters: "scanf has quirks that can cause unexpected behavior. Knowing these makes you a better programmer.",
          content: `scanf problems and solutions:

**Problem: scanf stops at whitespace**
\`\`\`c
char name[50];
scanf("%s", name);  // "John Doe" only reads "John"
\`\`\`

**Solution: Use scanset or fgets**
\`\`\`c
// Read up to newline
scanf("%[^\n]", name);

// Or use fgets (better for strings)
fgets(name, sizeof(name), stdin);
\`\`\`

**Problem: Leftover newline from previous scanf**
\`\`\`c
int choice;
scanf("%d", &choice);
// Next scanf for char/string fails!
\`\`\`

**Solution: Add space before %c**
\`\`\`c
char grade;
scanf(" %c", &grade);  // Space skips whitespace
\`\`\``,
          codeExamples: [
            {
              id: "ch4-input-fix",
              title: "Safe Input Handling",
              description: "Proper techniques for reading input",
              code: { c: `#include <stdio.h>\n\nint main() {\n    char name[100];\n    int age;\n    float gpa;\n    \n    printf("Enter name: ");\n    if (fgets(name, sizeof(name), stdin) != NULL) {\n        // Remove newline\n        name[strcspn(name, "\\n")] = 0;\n    }\n    \n    printf("Enter age: ");\n    scanf("%d", &age);\n    \n    printf("Enter GPA: ");\n    scanf("%f", &gpa);\n    \n    printf("\\nName: %s\\n", name);\n    printf("Age: %d\\n", age);\n    printf("GPA: %.2f\\n", gpa);\n    \n    return 0;\n}` },
              explanation: "fgets is safer than scanf for strings because it reads the entire line including spaces."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          { id: "ch4-q1", type: "mcq", question: "Why do we use & with scanf?", options: ["To add numbers", "To pass the address of the variable", "To multiply", "It's optional"], correctAnswer: 1, explanation: "& gets the memory address of the variable so scanf knows where to store the input.", difficulty: 1 },
          { id: "ch4-q2", type: "mcq", question: "What does scanf(\"%s\", name) NOT need &?", options: ["It's a bug", "name is already a pointer (address)", "Strings are special", "Compiler ignores it"], correctAnswer: 1, explanation: "Arrays decay to pointers in most contexts. name already represents the address of the first element.", difficulty: 2 },
          { id: "ch4-q3", type: "mcq", question: "What does \\n in printf do?", options: ["Prints n", "Adds a newline", "Adds a tab", "Adds a backslash"], correctAnswer: 1, explanation: "\\n is the newline escape sequence.", difficulty: 1 }
        ],
        passingScore: 2
      },
      cheatSheet: [
        { label: "Print int", value: 'printf("%d", x)' },
        { label: "Print float", value: 'printf("%.2f", x)' },
        { label: "Print string", value: 'printf("%s", str)' },
        { label: "Read int", value: 'scanf("%d", &x)' },
        { label: "Read float", value: 'scanf("%f", &x)' },
        { label: "Read string", value: 'scanf("%s", str)' },
        { label: "Safe string", value: 'fgets(str, size, stdin)' },
        { label: "Newline", value: "\\n" }
      ]
    },

    // Chapter 5: Conditional Statements
    {
      id: "c-ch-5",
      number: 5,
      partLabel: "PART 1: ABSOLUTE BEGINNING — UNDERSTANDING C",
      title: "Conditional Statements — if, else if, else, switch",
      subtitle: "Making decisions in your code",
      difficulty: "Beginner",
      estimatedMinutes: 45,
      xpReward: 110,
      prerequisites: ["c-ch-4"],
      learningObjectives: [
        "Write if statements for single conditions",
        "Chain multiple conditions with else if",
        "Use switch for multiple equal comparisons",
        "Avoid common conditional bugs"
      ],
      sections: [
        {
          id: "ch5-if",
          title: "if and if-else Statements",
          whyItMatters: "Conditional statements are the foundation of program logic. Every decision in code uses if.",
          content: `Basic if statement:

\`\`\`c
int age = 18;

if (age >= 18) {
    printf("You are an adult\\n");
}
\`\`\`

if-else:
\`\`\`c
int number = 5;

if (number % 2 == 0) {
    printf("Even number\\n");
} else {
    printf("Odd number\\n");
}
\`\`\`

if-else if-else chain:
\`\`\`c
int score = 85;

if (score >= 90) {
    printf("Grade: A\\n");
} else if (score >= 80) {
    printf("Grade: B\\n");
} else if (score >= 70) {
    printf("Grade: C\\n");
} else {
    printf("Grade: F\\n");
}
\`\`\``,
          codeExamples: [
            {
              id: "ch5-if-demo",
              title: "if-else-if Chain",
              description: "Grade calculator using if-else chain",
              code: { c: `#include <stdio.h>\n\nint main() {\n    int score;\n    \n    printf("Enter your score (0-100): ");\n    scanf("%d", &score);\n    \n    if (score < 0 || score > 100) {\n        printf("Invalid score!\\n");\n    } else if (score >= 90) {\n        printf("Grade: A (Excellent!)\\n");\n    } else if (score >= 80) {\n        printf("Grade: B (Good!)\\n");\n    } else if (score >= 70) {\n        printf("Grade: C (Average)\\n");\n    } else if (score >= 60) {\n        printf("Grade: D (Below Average)\\n");\n    } else {\n        printf("Grade: F (Failed)\\n");\n    }\n    \n    return 0;\n}` },
              explanation: "The conditions are checked in order. Once one is true, the rest are skipped."
            }
          ]
        },
        {
          id: "ch5-switch",
          title: "switch Statement",
          whyItMatters: "switch is cleaner than multiple if-else when comparing one variable against multiple constant values.",
          content: `switch compares one value against multiple cases:

\`\`\`c
int day = 3;

switch (day) {
    case 1:
        printf("Monday\\n");
        break;
    case 2:
        printf("Tuesday\\n");
        break;
    case 3:
        printf("Wednesday\\n");
        break;
    case 4:
        printf("Thursday\\n");
        break;
    case 5:
        printf("Friday\\n");
        break;
    case 6:
        printf("Saturday\\n");
        break;
    case 7:
        printf("Sunday\\n");
        break;
    default:
        printf("Invalid day\\n");
}
\`\`\`

**Important Rules:**
1. Use break to prevent fall-through
2. default runs when no case matches
3. Cases must be constants (not variables)
4. Without break, execution falls through to next case`,
          callouts: [
            {
              type: "warning",
              title: "Don't Forget break!",
              content: "Without break, execution continues into the next case. This is called fall-through and is usually a bug."
            }
          ]
        },
        {
          id: "ch5-ternary",
          title: "Ternary Operator",
          whyItMatters: "The ternary operator provides a compact way to write simple if-else expressions.",
          content: `Ternary operator: condition ? value_if_true : value_if_false

\`\`\`c
int x = 10, y = 5;
int max = (x > y) ? x : y;    // max = 10

// Equivalent if-else:
if (x > y) {
    max = x;
} else {
    max = y;
}
\`\`\`

**Nested ternary (avoid this!):**
\`\`\`c
// DON'T DO THIS - hard to read
int result = (x > 0) ? ((y > 0) ? 1 : 2) : 0;

// DO THIS - readable
if (x > 0) {
    result = (y > 0) ? 1 : 2;
} else {
    result = 0;
}
\`\`\``,
          codeExamples: [
            {
              id: "ch5-ternary-demo",
              title: "Ternary Operator Demo",
              description: "Compact conditional expressions",
              code: { c: `#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20;\n    \n    // Basic ternary\n    int max = (a > b) ? a : b;\n    printf("Max: %d\\n", max);\n    \n    // Even/Odd in one line\n    int num = 7;\n    printf("%d is %s\\n", num, (num % 2 == 0) ? "even" : "odd");\n    \n    // Absolute value\n    int x = -15;\n    int abs_x = (x < 0) ? -x : x;\n    printf("|%d| = %d\\n", x, abs_x);\n    \n    return 0;\n}` },
              explanation: "Ternary is great for simple assignments but avoid nesting it."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          { id: "ch5-q1", type: "mcq", question: "What happens without break in a switch?", options: ["Error", "Fall-through to next case", "Loop restarts", "Nothing special"], correctAnswer: 1, explanation: "Without break, execution continues into the next case.", difficulty: 1 },
          { id: "ch5-q2", type: "mcq", question: "What does '?:' mean?", options: ["Arithmetic", "Ternary operator", "Comparison", "Assignment"], correctAnswer: 1, explanation: "?: is the ternary operator: condition ? true : false", difficulty: 1 },
          { id: "ch5-q3", type: "true-false", question: "switch can compare variables in cases.", correctAnswer: false, explanation: "switch cases must be constant expressions, not variables.", difficulty: 2 }
        ],
        passingScore: 2
      },
      cheatSheet: [
        { label: "if", value: "if (condition) { }" },
        { label: "if-else", value: "if (cond) {} else {}" },
        { label: "else if", value: "else if (cond) {}" },
        { label: "switch", value: "switch(x) { case 1: }" },
        { label: "break", value: "break; (in switch)" },
        { label: "default", value: "default: (runs if no match)" },
        { label: "ternary", value: "(cond) ? a : b" }
      ]
    },

    // Chapter 6: Loops
    {
      id: "c-ch-6",
      number: 6,
      partLabel: "PART 1: ABSOLUTE BEGINNING — UNDERSTANDING C",
      title: "Loops — for, while, do-while, break, continue",
      subtitle: "Repeating code efficiently",
      difficulty: "Beginner",
      estimatedMinutes: 50,
      xpReward: 110,
      prerequisites: ["c-ch-5"],
      learningObjectives: [
        "Use for loops for counted iterations",
        "Use while loops for condition-based iterations",
        "Use do-while for at-least-once loops",
        "Control loop flow with break and continue"
      ],
      sections: [
        {
          id: "ch6-for",
          title: "for Loop",
          whyItMatters: "for loops are the most common loop type. Perfect when you know how many times to repeat something.",
          content: `for loop syntax:
for (initialization; condition; increment)

\`\`\`c
// Print 1 to 10
for (int i = 1; i <= 10; i++) {
    printf("%d ", i);
}
printf("\\n");

// Countdown
for (int i = 5; i > 0; i--) {
    printf("%d... ", i);
}
printf("Liftoff!\\n");

// Sum 1 to 100
int sum = 0;
for (int i = 1; i <= 100; i++) {
    sum += i;
}
printf("Sum: %d\\n", sum);
\`\`\`

Loop parts:
1. Initialization: int i = 1 (runs once)
2. Condition: i <= 10 (checked before each iteration)
3. Increment: i++ (runs after each iteration)`,
          codeExamples: [
            {
              id: "ch6-for-demo",
              title: "for Loop Examples",
              description: "Various for loop patterns",
              code: { c: `#include <stdio.h>\n\nint main() {\n    // Print even numbers 2 to 10\n    printf("Even numbers: ");\n    for (int i = 2; i <= 10; i += 2) {\n        printf("%d ", i);\n    }\n    printf("\\n");\n    \n    // Factorial of 5\n    int factorial = 1;\n    for (int i = 1; i <= 5; i++) {\n        factorial *= i;\n    }\n    printf("5! = %d\\n", factorial);\n    \n    // Nested loop - multiplication table\n    printf("\\nMultiplication table:\\n");\n    for (int i = 1; i <= 5; i++) {\n        for (int j = 1; j <= 5; j++) {\n            printf("%3d ", i * j);\n        }\n        printf("\\n");\n    }\n    \n    return 0;\n}` },
              explanation: "Nested loops are useful for 2D patterns and tables. Each iteration of the outer loop runs through all inner iterations."
            }
          ]
        },
        {
          id: "ch6-while",
          title: "while and do-while Loops",
          whyItMatters: "while loops are essential when you don't know in advance how many iterations you need.",
          content: `while loop:
\`\`\`c
int i = 1;
while (i <= 10) {  // Check FIRST, then execute
    printf("%d ", i);
    i++;
}
\`\`\`

do-while loop:
\`\`\`c
int i = 1;
do {
    printf("%d ", i);  // Execute FIRST
    i++;
} while (i <= 10);    // Check after
\`\`\`

**Key Difference:**
- while: condition checked first (might never execute)
- do-while: always executes at least once

\`\`\`c
// while example: read until user enters 0
int input;
printf("Enter 0 to quit: ");
scanf("%d", &input);
while (input != 0) {
    printf("You entered: %d\\n", input);
    scanf("%d", &input);
}
\`\`\``,
          callouts: [
            {
              type: "warning",
              title: "Infinite Loops",
              content: "Always ensure the loop condition eventually becomes false. An infinite loop freezes your program."
            }
          ]
        },
        {
          id: "ch6-break-continue",
          title: "break and continue",
          whyItMatters: "break and continue give you fine-grained control over loop execution.",
          content: `break — exits the loop immediately:
\`\`\`c
for (int i = 1; i <= 100; i++) {
    if (i == 10) {
        break;  // Exit when i reaches 10
    }
    printf("%d ", i);
}
// Output: 1 2 3 4 5 6 7 8 9
\`\`\`

continue — skips to next iteration:
\`\`\`c
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;  // Skip even numbers
    }
    printf("%d ", i);
}
// Output: 1 3 5 7 9
\`\`\``,
          codeExamples: [
            {
              id: "ch6-break-continue-demo",
              title: "break and continue Demo",
              description: "Loop control in action",
              code: { c: `#include <stdio.h>\n\nint main() {\n    // Find first number divisible by 7 and 5\n    printf("First number divisible by 7 and 5: ");\n    for (int i = 1; i <= 100; i++) {\n        if (i % 7 == 0 && i % 5 == 0) {\n            printf("%d\\n", i);\n            break;  // Found it, stop searching\n        }\n    }\n    \n    // Print odds only, skip multiples of 3\n    printf("\\nOdd numbers (not multiple of 3): ");\n    for (int i = 1; i <= 30; i++) {\n        if (i % 2 == 0) continue;   // Skip evens\n        if (i % 3 == 0) continue;   // Skip multiples of 3\n        printf("%d ", i);\n    }\n    printf("\\n");\n    \n    return 0;\n}` },
              explanation: "break exits the entire loop. continue skips to the next iteration without exiting the loop."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          { id: "ch6-q1", type: "mcq", question: "When does do-while execute its body?", options: ["Never", "Once", "Twice", "Depends on condition"], correctAnswer: 1, explanation: "do-while always executes at least once because the condition is checked after.", difficulty: 1 },
          { id: "ch6-q2", type: "mcq", question: "What does break do in a loop?", options: ["Skips one iteration", "Exits the loop", "Restarts the loop", "Does nothing"], correctAnswer: 1, explanation: "break immediately exits the loop.", difficulty: 1 },
          { id: "ch6-q3", type: "mcq", question: "What does continue do?", options: ["Exits loop", "Skips to next iteration", "Restarts loop", "Pauses loop"], correctAnswer: 1, explanation: "continue skips the rest of the current iteration and continues with the next.", difficulty: 1 }
        ],
        passingScore: 2
      },
      cheatSheet: [
        { label: "for loop", value: "for (i=0; i<n; i++) { }" },
        { label: "while", value: "while (condition) { }" },
        { label: "do-while", value: "do { } while (cond);" },
        { label: "break", value: "exit loop immediately" },
        { label: "continue", value: "skip to next iteration" },
        { label: "increment", value: "i++ or i += 2" }
      ]
    },

    // Chapter 7: Functions
    {
      id: "c-ch-7",
      number: 7,
      partLabel: "PART 1: ABSOLUTE BEGINNING — UNDERSTANDING C",
      title: "Functions — Basics, Parameters, Return Values, Prototypes",
      subtitle: "Organizing code into reusable blocks",
      difficulty: "Beginner",
      estimatedMinutes: 55,
      xpReward: 120,
      prerequisites: ["c-ch-6"],
      learningObjectives: [
        "Create and call functions",
        "Pass parameters to functions",
        "Return values from functions",
        "Use function prototypes"
      ],
      sections: [
        {
          id: "ch7-function-basics",
          title: "Function Fundamentals",
          whyItMatters: "Functions are the building blocks of C programs. They let you reuse code and organize programs logically.",
          content: `A function is a named block of code that performs a specific task:

\`\`\`c
// Function definition
int add(int a, int b) {
    int result = a + b;
    return result;
}

// Function call
int main() {
    int sum = add(5, 3);  // sum = 8
    printf("%d\\n", sum);
    return 0;
}
\`\`\`

Function anatomy:
1. Return type: int (what the function gives back)
2. Name: add (how you call it)
3. Parameters: int a, int b (inputs it receives)
4. Body: the code inside {}
5. return: sends value back

Why use functions?
- Reuse: Write once, use many times
- Organization: Break complex programs into manageable pieces
- Testing: Test each function independently`,
          codeExamples: [
            {
              id: "ch7-basic-func",
              title: "Simple Functions",
              description: "Creating and using functions",
              code: { c: `#include <stdio.h>\n\n// Function to greet\nvoid greet() {\n    printf("Hello, World!\\n");\n}\n\n// Function with parameters\nvoid greetPerson(char name[]) {\n    printf("Hello, %s!\\n", name);\n}\n\n// Function with return value\nint add(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    greet();\n    greetPerson("Alice");\n    greetPerson("Bob");\n    \n    int result = add(10, 20);\n    printf("10 + 20 = %d\\n", result);\n    \n    return 0;\n}` },
              explanation: "void means the function doesn't return a value. Functions can take inputs and produce outputs."
            }
          ]
        },
        {
          id: "ch7-prototypes",
          title: "Function Prototypes",
          whyItMatters: "Function prototypes allow you to use functions before they're defined. Essential for organizing code.",
          content: `Function prototype (declaration):
\`\`\`c
// Prototype - tells compiler the function exists
int multiply(int a, int b);

int main() {
    int result = multiply(5, 4);  // Works!
    return 0;
}

// Definition - the actual function
int multiply(int a, int b) {
    return a * b;
}
\`\`\`

Without prototype, multiply() would need to be defined BEFORE main().

**Best practice:**
\`\`\`c
// Put prototypes at top
int add(int a, int b);
int subtract(int a, int b);
void printResult(int result);

// Then main()
int main() { ... }

// Then definitions
int add(int a, int b) { ... }
\`\`\`

This is the standard way to organize C programs.`,
          callouts: [
            {
              type: "tip",
              title: "Always Use Prototypes",
              content: "Put function prototypes in a header file (.h) and definitions in a .c file. This is standard C practice."
            }
          ]
        },
        {
          id: "ch7-pass-by-value",
          title: "Pass by Value",
          whyItMatters: "In C, function parameters are copies. Understanding this prevents common bugs.",
          content: `C passes arguments by value — the function gets a COPY:

\`\`\`c
void increment(int x) {
    x++;  // Only changes the COPY
    printf("Inside function: x = %d\\n", x);
}

int main() {
    int num = 5;
    increment(num);  // num is NOT changed
    printf("After function: num = %d\\n", num);
    // Output: Inside function: x = 6
    //         After function: num = 5
    return 0;
}
\`\`\`

To modify the original value, pass a pointer:
\`\`\`c
void increment(int *x) {   // Pointer parameter
    (*x)++;  // Modify the original
}

int main() {
    int num = 5;
    increment(&num);  // Pass address
    printf("num = %d\\n", num);  // num = 6
    return 0;
}
\`\`\``,
          codeExamples: [
            {
              id: "ch7-pass-demo",
              title: "Pass by Value vs Pointer",
              description: "Understanding C's pass-by-value semantics",
              code: { c: `#include <stdio.h>\n\n// Pass by value (copy)\nvoid doubleValue(int x) {\n    x *= 2;\n    printf("Inside: x = %d\\n", x);\n}\n\n// Pass by pointer (original)\nvoid doublePointer(int *x) {\n    *x *= 2;\n    printf("Inside: *x = %d\\n", *x);\n}\n\nint main() {\n    int num = 10;\n    \n    printf("Original: %d\\n", num);\n    doubleValue(num);\n    printf("After doubleValue: %d\\n\\n", num);  // Unchanged!\n    \n    doublePointer(&num);\n    printf("After doublePointer: %d\\n", num);  // Changed!\n    \n    return 0;\n}` },
              explanation: "C copies parameters. To modify the original, pass a pointer with &."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          { id: "ch7-q1", type: "mcq", question: "What does 'void' mean in a function?", options: ["No parameters", "No return value", "No function body", "Error"], correctAnswer: 1, explanation: "void means the function doesn't return a value.", difficulty: 1 },
          { id: "ch7-q2", type: "mcq", question: "How do you modify a variable in a function?", options: ["Use global variables", "Pass a pointer", "Use return", "C can't modify variables"], correctAnswer: 1, explanation: "C passes by value, so you must pass a pointer to modify the original.", difficulty: 2 },
          { id: "ch7-q3", type: "true-false", question: "Functions must be defined before they are called.", correctAnswer: false, explanation: "With function prototypes, you can declare functions first and define them later.", difficulty: 2 }
        ],
        passingScore: 2
      },
      cheatSheet: [
        { label: "Function", value: "int add(int a, int b) { }" },
        { label: "Prototype", value: "int add(int a, int b);" },
        { label: "Void return", value: "void print() { }" },
        { label: "No params", value: "void init(void) { }" },
        { label: "Pass address", value: "&variable" },
        { label: "Receive pointer", value: "int *ptr" },
        { label: "Dereference", value: "*ptr" }
      ]
    },

    // Chapter 8: Scope and Storage Classes
    {
      id: "c-ch-8",
      number: 8,
      partLabel: "PART 1: ABSOLUTE BEGINNING — UNDERSTANDING C",
      title: "Scope, Storage Classes — auto, static, extern, register",
      subtitle: "Understanding variable lifetime and visibility",
      difficulty: "Beginner",
      estimatedMinutes: 45,
      xpReward: 120,
      prerequisites: ["c-ch-7"],
      learningObjectives: [
        "Understand variable scope (local vs global)",
        "Use static to preserve variable values",
        "Understand extern for sharing variables",
        "Use register for optimization hints"
      ],
      sections: [
        {
          id: "ch8-scope",
          title: "Variable Scope",
          whyItMatters: "Understanding scope prevents naming conflicts and helps you write maintainable code.",
          content: `Scope determines where a variable can be accessed:

\`\`\`c
int global = 10;  // Global scope - visible everywhere

void function1() {
    printf("%d\\n", global);  // Can access global
}

void function2() {
    int local = 20;  // Local scope - only in function2
    printf("%d\\n", local);  // OK
}

int main() {
    printf("%d\\n", global);  // OK
    // printf("%d\\n", local);  // ERROR! local not visible here
    return 0;
}
\`\`\`

**Scope rules:**
- Global: Declared outside all functions, visible everywhere
- Local: Declared inside a function, only visible there
- Block: Declared inside {}, only visible in that block`,
          codeExamples: [
            {
              id: "ch8-scope-demo",
              title: "Scope Demonstration",
              description: "Local vs Global vs Block scope",
              code: { c: `#include <stdio.h>\n\nint global = 100;\n\nint main() {\n    int main_var = 1;\n    \n    printf("Global: %d\\n", global);\n    printf("Local to main: %d\\n", main_var);\n    \n    {  // Start block\n        int block_var = 50;\n        int global = 999;  // Hides global!\n        printf("Block variable: %d\\n", block_var);\n        printf("Global hidden: %d\\n", global);\n    }  // End block\n    \n    printf("Global restored: %d\\n", global);\n    // printf("%d\\n", block_var);  // ERROR!\n    \n    return 0;\n}` },
              explanation: "Variables inside a block hide variables with the same name outside."
            }
          ]
        },
        {
          id: "ch8-static",
          title: "static Storage Class",
          whyItMatters: "static preserves variable values between function calls — essential for state management.",
          content: `static has two effects:

1. **Inside a function:** Value persists between calls:
\`\`\`c
void counter() {
    static int count = 0;  // Initialized once!
    count++;
    printf("Count: %d\\n", count);
}

int main() {
    counter();  // Count: 1
    counter();  // Count: 2
    counter();  // Count: 3
    // Without static, count would be 1 every time
}
\`\`\`

2. **Global variable:** Makes variable only visible in current file:
\`\`\`c
static int privateGlobal = 50;  // Only this file can see it
\`\`\``,
          codeExamples: [
            {
              id: "ch8-static-demo",
              title: "static Variable Demo",
              description: "Persistent variables across function calls",
              code: { c: `#include <stdio.h>\n\nvoid callCount() {\n    static int calls = 0;\n    calls++;\n    printf("Function called %d time(s)\\n", calls);\n}\n\nvoid runningTotal(int value) {\n    static int total = 0;\n    total += value;\n    printf("Added %d, total = %d\\n", value, total);\n}\n\nint main() {\n    callCount();  // 1\n    callCount();  // 2\n    \n    runningTotal(10);  // 10\n    runningTotal(25);  // 35\n    runningTotal(15);  // 50\n    \n    callCount();  // 3\n    \n    return 0;\n}` },
              explanation: "static variables are initialized only once and retain their value between function calls."
            }
          ]
        },
        {
          id: "ch8-extern",
          title: "extern and register",
          whyItMatters: "extern and register are specialized storage classes for sharing variables and optimization.",
          content: `extern — declares a global variable defined elsewhere:
\`\`\`c
// file1.c
int shared = 42;

// file2.c
extern int shared;  // Declares shared exists
printf("%d\\n", shared);  // Prints 42
\`\`\`

register — hints to store in CPU register (faster):
\`\`\`c
register int i;  // Request register storage
for (i = 0; i < 1000; i++) {
    // Faster because i is in CPU register
}
\`\`\`

Modern compilers optimize automatically, so register is rarely needed.`,
          cheatSheet: [
            { label: "auto (default)", value: "Automatic local variable" },
            { label: "static", value: "Preserves value between calls" },
            { label: "extern", value: "Reference global from another file" },
            { label: "register", value: "Hint to store in register" }
          ]
        }
      ],
      quiz: {
        questions: [
          { id: "ch8-q1", type: "mcq", question: "What does static do inside a function?", options: ["Makes it global", "Preserves value between calls", "Makes it faster", "Nothing"], correctAnswer: 1, explanation: "static variables keep their value between function calls.", difficulty: 1 },
          { id: "ch8-q2", type: "mcq", question: "Where is a local variable visible?", options: ["Everywhere", "Only in its function/block", "Only in main", "Nowhere"], correctAnswer: 1, explanation: "Local variables are only visible within their function or block.", difficulty: 1 },
          { id: "ch8-q3", type: "mcq", question: "What does extern do?", options: ["Creates a global", "References a global from another file", "Deletes a variable", "Makes a variable local"], correctAnswer: 1, explanation: "extern declares that a global variable exists elsewhere.", difficulty: 2 }
        ],
        passingScore: 2
      }
    },

    // Chapter 9: 1D Arrays
    {
      id: "c-ch-9",
      number: 9,
      partLabel: "PART 2: ARRAYS AND STRINGS",
      title: "One-Dimensional Arrays",
      subtitle: "Storing collections of data",
      difficulty: "Beginner",
      estimatedMinutes: 45,
      xpReward: 110,
      prerequisites: ["c-ch-8"],
      learningObjectives: [
        "Declare and initialize 1D arrays",
        "Access and modify array elements",
        "Use loops to process arrays",
        "Understand array index bounds"
      ],
      sections: [
        {
          id: "ch9-array-basics",
          title: "Array Fundamentals",
          whyItMatters: "Arrays are the most basic way to store multiple related values. Every serious program uses arrays.",
          realWorldAnalogy: "An array is like an apartment building with numbered rooms. Room 0, Room 1, Room 2, etc. Each room can hold one value, and you can access any room instantly using its number (index).",
          content: `An array is a contiguous block of memory containing multiple elements of the same type:

\`\`\`c
int scores[5];  // Array of 5 integers
scores[0] = 95;
scores[1] = 87;
scores[2] = 92;
scores[3] = 78;
scores[4] = 88;
\`\`\`

**Key facts about arrays:**
1. Array indices start at 0 (not 1!)
2. Last valid index is (size - 1)
3. Arrays don't know their own size
4. All elements are the same type

**Declaration vs Initialization:**
\`\`\`c
int nums[5];           // Declares, contents are garbage
int nums[5] = {1, 2, 3, 4, 5};  // Declares and initializes
int nums[] = {1, 2, 3, 4, 5};  // Size calculated automatically
\`\`\``,
          codeExamples: [
            {
              id: "ch9-basics",
              title: "Array Basics",
              description: "Declaring and accessing arrays",
              code: { c: `#include <stdio.h>\n\nint main() {\n    // Declaration\n    int scores[5] = {95, 87, 92, 78, 88};\n    \n    // Accessing elements (index starts at 0)\n    printf("First score: %d\\n", scores[0]);\n    printf("Last score: %d\\n", scores[4]);\n    \n    // Modifying elements\n    scores[0] = 100;\n    printf("Updated first: %d\\n", scores[0]);\n    \n    // Looping through array\n    printf("\\nAll scores:\\n");\n    for (int i = 0; i < 5; i++) {\n        printf("scores[%d] = %d\\n", i, scores[i]);\n    }\n    \n    return 0;\n}` },
              explanation: "Array indices start at 0. Always use < size (not <=) to avoid going out of bounds."
            }
          ]
        },
        {
          id: "ch9-initialization",
          title: "Array Initialization Patterns",
          whyItMatters: "Different initialization methods suit different situations. Knowing all of them makes your code cleaner.",
          content: `Initialization patterns:

**Partial initialization (rest are zero):**
\`\`\`c
int nums[5] = {1, 2};  // nums = {1, 2, 0, 0, 0}
\`\`\`

**Designated initialization (C99):**
\`\`\`c
int nums[5] = {[0] = 10, [4] = 50};  // nums = {10, 0, 0, 0, 50}
\`\`\`

**Initialize with zero:**
\`\`\`c
int nums[100] = {0};  // All elements = 0
\`\`\`

**Character array for string:**
\`\`\`c
char name[] = "Hello";  // Creates: H, e, l, l, o, \\0
\`\`\``,
          callouts: [
            {
              type: "warning",
              title: "Array Size Must Be Constant",
              content: "In C89/C90, array size must be a constant expression. In C99+, you can use variable-length arrays (VLAs), but avoid them for portability."
            }
          ]
        },
        {
          id: "ch9-summing",
          title: "Common Array Operations",
          whyItMatters: "Summing, finding max/min, and searching are fundamental array algorithms.",
          content: `Summing array elements:
\`\`\`c
int sum = 0;
for (int i = 0; i < n; i++) {
    sum += arr[i];
}
\`\`\`

Finding maximum:
\`\`\`c
int max = arr[0];
for (int i = 1; i < n; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
\`\`\`

Linear search:
\`\`\`c
int search(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            return i;  // Found at index i
        }
    }
    return -1;  // Not found
}
\`\`\``,
          codeExamples: [
            {
              id: "ch9-operations",
              title: "Array Operations",
              description: "Sum, max, and search",
              code: { c: `#include <stdio.h>\n\nint main() {\n    int arr[] = {64, 25, 12, 22, 11, 90, 45};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    \n    // Sum\n    int sum = 0;\n    for (int i = 0; i < n; i++) sum += arr[i];\n    printf("Sum: %d\\n", sum);\n    \n    // Average\n    printf("Average: %.2f\\n", (float)sum / n);\n    \n    // Max\n    int max = arr[0], min = arr[0];\n    for (int i = 1; i < n; i++) {\n        if (arr[i] > max) max = arr[i];\n        if (arr[i] < min) min = arr[i];\n    }\n    printf("Max: %d, Min: %d\\n", max, min);\n    \n    // Search for 22\n    int target = 22;\n    for (int i = 0; i < n; i++) {\n        if (arr[i] == target) {\n            printf("Found %d at index %d\\n", target, i);\n            break;\n        }\n    }\n    \n    return 0;\n}` },
              explanation: "sizeof(arr)/sizeof(arr[0]) calculates the number of elements. Cast to float for decimal division."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          { id: "ch9-q1", type: "mcq", question: "What is the first index of an array?", options: ["1", "0", "-1", "Depends"], correctAnswer: 1, explanation: "Array indices always start at 0 in C.", difficulty: 1 },
          { id: "ch9-q2", type: "mcq", question: "What does 'int arr[5] = {0};' do?", options: ["Error", "Initializes all to 0", "Initializes first to 0", "Initializes first to 5"], correctAnswer: 1, explanation: "{0} initializes all elements to 0.", difficulty: 1 },
          { id: "ch9-q3", type: "mcq", question: "What is sizeof(arr)/sizeof(arr[0])?", options: ["Byte size", "Element count", "Last index", "Memory address"], correctAnswer: 1, explanation: "This expression calculates the number of elements in the array.", difficulty: 2 }
        ],
        passingScore: 2
      },
      cheatSheet: [
        { label: "Declare", value: "int arr[10];" },
        { label: "Initialize", value: "int arr[5] = {1,2,3,4,5};" },
        { label: "Access", value: "arr[0] // first element" },
        { label: "Size", value: "sizeof(arr)/sizeof(arr[0])" },
        { label: "Loop", value: "for(int i=0; i<n; i++)" }
      ]
    },

    // Chapter 10: 2D Arrays
    {
      id: "c-ch-10",
      number: 10,
      partLabel: "PART 2: ARRAYS AND STRINGS",
      title: "Two-Dimensional Arrays and Matrices",
      subtitle: "Tables, grids, and multi-dimensional data",
      difficulty: "Beginner",
      estimatedMinutes: 45,
      xpReward: 110,
      prerequisites: ["c-ch-9"],
      learningObjectives: [
        "Declare and initialize 2D arrays",
        "Access elements using row and column indices",
        "Pass 2D arrays to functions",
        "Implement matrix operations"
      ],
      sections: [
        {
          id: "ch10-basics",
          title: "2D Array Fundamentals",
          whyItMatters: "2D arrays are perfect for representing tables, grids, and matrices. Essential for game boards, spreadsheets, and image processing.",
          realWorldAnalogy: "A 2D array is like a seating chart in a theater. Rows and seats — you need both numbers to find a specific seat.",
          content: `A 2D array is an array of arrays:

\`\`\`c
int matrix[3][4];  // 3 rows, 4 columns
\`\`\`

Memory layout (contiguous):
\`\`\`
matrix[0] -> [col0, col1, col2, col3]
matrix[1] -> [col0, col1, col2, col3]
matrix[2] -> [col0, col1, col2, col3]
\`\`\`

**Initialization:**
\`\`\`c
int matrix[2][3] = {
    {1, 2, 3},   // Row 0
    {4, 5, 6}    // Row 1
};
\`\`\``,
          codeExamples: [
            {
              id: "ch10-basics",
              title: "2D Array Basics",
              description: "Declaring and accessing 2D arrays",
              code: { c: `#include <stdio.h>\n\nint main() {\n    int matrix[2][3] = {\n        {1, 2, 3},\n        {4, 5, 6}\n    };\n    \n    // Accessing elements\n    printf("matrix[0][0] = %d\\n", matrix[0][0]);\n    printf("matrix[1][2] = %d\\n", matrix[1][2]);\n    \n    // Print all elements\n    printf("\\nMatrix:\\n");\n    for (int i = 0; i < 2; i++) {\n        for (int j = 0; j < 3; j++) {\n            printf("%3d ", matrix[i][j]);\n        }\n        printf("\\n");\n    }\n    \n    return 0;\n}` },
              explanation: "Use nested loops: outer for rows, inner for columns."
            }
          ]
        },
        {
          id: "ch10-matrix",
          title: "Matrix Operations",
          whyItMatters: "Matrix operations are fundamental for scientific computing, graphics, and machine learning.",
          content: `Matrix addition:
\`\`\`c
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        result[i][j] = a[i][j] + b[i][j];
    }
}
\`\`\`

Matrix multiplication (A[m×n] × B[n×p] = C[m×p]):
\`\`\`c
for (int i = 0; i < m; i++) {
    for (int j = 0; j < p; j++) {
        C[i][j] = 0;
        for (int k = 0; k < n; k++) {
            C[i][j] += A[i][k] * B[k][j];
        }
    }
}
\`\`\`

Transpose:
\`\`\`c
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        transpose[j][i] = matrix[i][j];
    }
}
\`\`\``,
          codeExamples: [
            {
              id: "ch10-transpose",
              title: "Matrix Transpose",
              description: "Swapping rows and columns",
              code: { c: `#include <stdio.h>\n\nvoid printMatrix(int m, int n, int matrix[m][n]) {\n    for (int i = 0; i < m; i++) {\n        for (int j = 0; j < n; j++) {\n            printf("%3d ", matrix[i][j]);\n        }\n        printf("\\n");\n    }\n}\n\nint main() {\n    int matrix[3][4] = {\n        {1, 2, 3, 4},\n        {5, 6, 7, 8},\n        {9, 10, 11, 12}\n    };\n    int transpose[4][3];\n    \n    // Transpose: swap rows and columns\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 4; j++) {\n            transpose[j][i] = matrix[i][j];\n        }\n    }\n    \n    printf("Original (3x4):\\n");\n    printMatrix(3, 4, matrix);\n    \n    printf("\\nTranspose (4x3):\\n");\n    printMatrix(4, 3, transpose);\n    \n    return 0;\n}` },
              explanation: "Transpose swaps element[i][j] with element[j][i]. The resulting matrix has swapped dimensions."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          { id: "ch10-q1", type: "mcq", question: "How do you access row 2, column 3 in a 2D array?", options: ["arr[2,3]", "arr[2][3]", "arr[3][2]", "arr(2,3)"], correctAnswer: 1, explanation: "2D arrays use double brackets: array[row][column].", difficulty: 1 },
          { id: "ch10-q2", type: "mcq", question: "How many elements does int arr[3][4] have?", options: ["7", "12", "34", "43"], correctAnswer: 1, explanation: "3 rows × 4 columns = 12 elements.", difficulty: 1 }
        ],
        passingScore: 2
      },
      cheatSheet: [
        { label: "Declare", value: "int matrix[3][4];" },
        { label: "Init", value: "int m[2][3] = {{1,2,3},{4,5,6}};" },
        { label: "Access", value: "matrix[0][2]" },
        { label: "Loop rows", value: "for(int i=0; i<rows; i++)" },
        { label: "Loop cols", value: "for(int j=0; j<cols; j++)" }
      ]
    },

    // Chapter 11: Strings Part 1
    {
      id: "c-ch-11",
      number: 11,
      partLabel: "PART 2: ARRAYS AND STRINGS",
      title: "Strings — The Basics",
      subtitle: "Working with text in C",
      difficulty: "Beginner",
      estimatedMinutes: 50,
      xpReward: 120,
      prerequisites: ["c-ch-9"],
      learningObjectives: [
        "Understand C strings as character arrays",
        "Use string handling functions",
        "Read and write strings",
        "Understand null terminator"
      ],
      sections: [
        {
          id: "ch11-string-basics",
          title: "Strings as Character Arrays",
          whyItMatters: "C has no native string type. Strings are arrays of characters ending with '\\0'. Understanding this is crucial.",
          realWorldAnalogy: "A string is like a train. Each car holds one character, and the last car is always empty (\\0) to mark the end. You can't just look at the train to know its length — you have to count cars until you hit the empty one.",
          content: `In C, a string is a char array ending with '\\0' (null terminator):

\`\`\`c
char name[] = "Alice";  // Creates: A, l, i, c, e, \\0
// Length: 5 characters, array size: 6 bytes
\`\`\`

**Why the null terminator?**
C doesn't store string length. Functions like strlen() scan until they find '\\0'.

**Declaration options:**
\`\`\`c
char s1[] = "Hello";           // Auto-sized: 6 bytes
char s2[6] = "Hello";          // Explicit size
char s3[10] = "Hello";         // Larger, padded with zeros
char s4[] = {'H','e','l','l','o','\\0'};  // Manual
\`\`\``,
          codeExamples: [
            {
              id: "ch11-basics",
              title: "String Basics",
              description: "Declaring and printing strings",
              code: { c: `#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char name[] = "Alice";\n    \n    // Each character\n    printf("Characters: ");\n    for (int i = 0; name[i] != '\\0'; i++) {\n        printf("%c ", name[i]);\n    }\n    printf("\\n");\n    \n    // String functions\n    printf("Length: %zu\\n", strlen(name));\n    printf("Size in memory: %zu bytes\\n", sizeof(name));\n    \n    // Each char has ASCII value\n    printf("First char: '%c' = %d\\n", name[0], name[0]);\n    \n    return 0;\n}` },
              explanation: "strlen() counts characters. sizeof() includes the null terminator."
            }
          ]
        },
        {
          id: "ch11-io",
          title: "Reading and Writing Strings",
          whyItMatters: "Getting strings from users and displaying them is a common task. Use the right function for safety.",
          content: `**printf for output:**
\`\`\`c
char name[] = "Alice";
printf("Hello, %s!\\n", name);
\`\`\`

**scanf for input (limited):**
\`\`\`c
char name[50];
scanf("%49s", name);  // Reads up to whitespace
// Stops at first space!
\`\`\`

**fgets for safe input:**
\`\`\`c
char name[50];
fgets(name, sizeof(name), stdin);  // Reads full line
name[strcspn(name, "\\n")] = 0;     // Remove newline
\`\`\``,
          callouts: [
            {
              type: "warning",
              title: "Never Use gets()",
              content: "gets() is dangerous and removed from C11. It has no bounds checking. Use fgets() instead."
            }
          ]
        },
        {
          id: "ch11-functions",
          title: "Essential String Functions",
          whyItMatters: "string.h provides all the functions you need for string manipulation.",
          content: `Must-know functions from string.h:

\`\`\`c
strlen(s)    // Length (without \\0)
strcpy(dest, src)    // Copy string
strncpy(dest, src, n) // Copy n chars
strcat(dest, src)    // Append
strncat(dest, src, n) // Append n chars
strcmp(s1, s2)       // Compare (0 = equal)
strchr(s, c)         // Find char
strstr(s1, s2)       // Find substring
\`\`\`

strcmp returns:
- 0 if equal
- <0 if s1 < s2
- >0 if s1 > s2`,
          codeExamples: [
            {
              id: "ch11-functions",
              title: "String Functions Demo",
              description: "Common string operations",
              code: { c: `#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char s1[50] = "Hello";\n    char s2[] = "World";\n    \n    // String length\n    printf("strlen: %zu\\n", strlen(s1));\n    \n    // String copy\n    char copy[50];\n    strcpy(copy, s1);\n    printf("strcpy: %s\\n", copy);\n    \n    // String concatenation\n    strcat(s1, " ");\n    strcat(s1, s2);\n    printf("strcat: %s\\n", s1);\n    \n    // String comparison\n    char a[] = "apple", b[] = "banana";\n    printf("strcmp: %d\\n", strcmp(a, b));  // Negative\n    printf("strcmp: %d\\n", strcmp(a, a));  // 0\n    \n    // Find character\n    char *pos = strchr(s2, 'o');\n    if (pos) printf("Found 'o' at position: %ld\\n", pos - s2);\n    \n    return 0;\n}` },
              explanation: "strcmp compares lexicographically (like dictionary order). strcat appends to the destination string."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          { id: "ch11-q1", type: "mcq", question: "What marks the end of a C string?", options: ["EOF", "'\\0'", "null", "Both B and C"], correctAnswer: 3, explanation: "The null terminator '\\0' marks the end of a string.", difficulty: 1 },
          { id: "ch11-q2", type: "mcq", question: "What does strlen() return?", options: ["Bytes including \\0", "Characters only", "Memory size", "Last index"], correctAnswer: 1, explanation: "strlen() counts characters excluding the null terminator.", difficulty: 1 },
          { id: "ch11-q3", type: "mcq", question: "Why is gets() dangerous?", options: ["Too slow", "No bounds checking", "Unicode issues", "Memory leak"], correctAnswer: 1, explanation: "gets() doesn't check buffer size, leading to buffer overflow vulnerabilities.", difficulty: 2 }
        ],
        passingScore: 2
      },
      cheatSheet: [
        { label: "Declare", value: 'char s[] = "Hello";' },
        { label: "Length", value: 'strlen(s)' },
        { label: "Copy", value: 'strcpy(dest, src)' },
        { label: "Concat", value: 'strcat(dest, src)' },
        { label: "Compare", value: 'strcmp(s1, s2)' },
        { label: "Read line", value: 'fgets(s, size, stdin)' }
      ]
    },

    // Chapter 12: Strings Part 2
    {
      id: "c-ch-12",
      number: 12,
      partLabel: "PART 2: ARRAYS AND STRINGS",
      title: "Advanced String Operations",
      subtitle: "Tokenizing, searching, and manipulation",
      difficulty: "Intermediate",
      estimatedMinutes: 50,
      xpReward: 130,
      prerequisites: ["c-ch-11"],
      learningObjectives: [
        "Use strtok for tokenizing strings",
        "Search within strings",
        "Convert between strings and numbers",
        "Handle string errors safely"
      ],
      sections: [
        {
          id: "ch12-tokenize",
          title: "Tokenizing with strtok",
          whyItMatters: "strtok splits strings into tokens — essential for parsing CSV files, command lines, and user input.",
          content: `strtok splits a string by delimiters:

\`\`\`c
char csv[] = "John,25,New York";
char *token = strtok(csv, ",");

while (token != NULL) {
    printf("%s\\n", token);
    token = strtok(NULL, ",");  // NULL continues with same string
}
\`\`\`

**Important: strtok modifies the original string!**
\`\`\`c
char line[100] = "apple,banana,cherry";  // Must be writable!
\`\`\``,
          codeExamples: [
            {
              id: "ch12-strtok",
              title: "Tokenizing Strings",
              description: "Splitting strings with strtok",
              code: { c: `#include <stdio.h>\n#include <string.h>\n\nint main() {\n    // Parse a CSV line\n    char csv[] = "John,25,New York,USA";\n    char temp[100];\n    strcpy(temp, csv);  // strtok modifies, so copy first\n    \n    printf("CSV fields:\\n");\n    char *token = strtok(temp, ",");\n    int field = 1;\n    \n    while (token != NULL) {\n        printf("  Field %d: %s\\n", field++, token);\n        token = strtok(NULL, ",");\n    }\n    \n    // Parse space-separated words\n    char sentence[] = "The quick brown fox";\n    printf("\\nWords:\\n");\n    token = strtok(sentence, " ");\n    while (token != NULL) {\n        printf("  %s\\n", token);\n        token = strtok(NULL, " ");\n    }\n    \n    return 0;\n}` },
              explanation: "First call gets first token. Subsequent calls with NULL continue splitting the same string."
            }
          ]
        },
        {
          id: "ch12-convert",
          title: "String Conversions",
          whyItMatters: "Convert between strings and numbers to read user input and format output.",
          content: `atoi/atof (simple but no error checking):
\`\`\`c
int num = atoi("42");      // String to int
double d = atof("3.14");   // String to double
\`\`\`

strtol/strtod (with error handling):
\`\`\`c
char *end;
long num = strtol("42", &end, 10);  // Base 10
if (*end != 0) { /* conversion failed */ }
\`\`\`

sprintf (number to string):
\`\`\`c
char buffer[50];
sprintf(buffer, "%d", 42);     // Int to string
sprintf(buffer, "%.2f", 3.14); // Float to string
\`\`\``,
          codeExamples: [
            {
              id: "ch12-convert",
              title: "String Conversions",
              description: "Convert between strings and numbers",
              code: { c: `#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main() {\n    // String to number\n    printf("atoi(\"123\") = %d\\n", atoi("123"));\n    printf("atof(\"3.14159\") = %.5f\\n", atof("3.14159"));\n    \n    // Safe conversion with strtol\n    char *input = "42 degrees";\n    char *end;\n    long temp = strtol(input, &end, 10);\n    if (*end == 0 || (*end != 0 && *end == ' ')) {\n        printf("Temperature: %ld\\n", temp);\n    }\n    \n    // Number to string\n    char buffer[50];\n    int num = 42;\n    float pi = 3.14159;\n    \n    sprintf(buffer, "Number: %d", num);\n    printf("%s\\n", buffer);\n    \n    sprintf(buffer, "Pi: %.2f", pi);\n    printf("%s\\n", buffer);\n    \n    return 0;\n}` },
              explanation: "atoi/atof are simple but don't detect errors. strtol/strtod are safer."
            }
          ]
        },
        {
          id: "ch12-search",
          title: "String Searching",
          whyItMatters: "Finding characters and substrings is fundamental for text processing.",
          content: `Find character with strchr:
\`\`\`c
char *pos = strchr("Hello", 'l');  // Returns pointer to first 'l'
if (pos) {
    printf("Found at index: %ld\\n", pos - str);
}
\`\`\`

Find substring with strstr:
\`\`\`c
char *pos = strstr("Hello World", "World");  // Returns pointer to "World"
if (pos) {
    printf("Found at index: %ld\\n", pos - str);
}
\`\`\`

Reverse search (last occurrence):
\`\`\`c
char *pos = strrchr("Hello", 'l');  // Returns pointer to last 'l'
\`\`\``,
          codeExamples: [
            {
              id: "ch12-search",
              title: "String Search Demo",
              description: "Finding characters and substrings",
              code: { c: `#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char text[] = "The cat in the hat";\n    \n    // Find character\n    char *p = strchr(text, 'c');\n    if (p) printf("Found 'c' at: %s\\n", p);\n    \n    // Find substring\n    p = strstr(text, "cat");\n    if (p) {\n        printf("Found 'cat' at index: %ld\\n", p - text);\n        printf("Context: %.10s...\\n", p);\n    }\n    \n    // Count occurrences\n    char search = 't';\n    int count = 0;\n    for (char *cp = text; (cp = strchr(cp, search)) != NULL; cp++) {\n        count++;\n    }\n    printf("'%c' appears %d times\\n", search, count);\n    \n    return 0;\n}` },
              explanation: "strchr returns pointer or NULL. Use pointer arithmetic (pos - str) to get index."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          { id: "ch12-q1", type: "mcq", question: "What does strtok do?", options: ["Joins strings", "Splits strings", "Reverses strings", "Copies strings"], correctAnswer: 1, explanation: "strtok splits a string into tokens using delimiters.", difficulty: 1 },
          { id: "ch12-q2", type: "mcq", question: "What should you use instead of atoi for safe conversion?", options: ["printf", "strtol", "strcmp", "strcpy"], correctAnswer: 1, explanation: "strtol provides error checking unlike atoi.", difficulty: 2 }
        ],
        passingScore: 2
      },
      cheatSheet: [
        { label: "Tokenize", value: 'strtok(str, delim)' },
        { label: "Find char", value: 'strchr(str, c)' },
        { label: "Find string", value: 'strstr(s1, s2)' },
        { label: "To int", value: 'atoi(str)' },
        { label: "To double", value: 'atof(str)' },
        { label: "Safe to long", value: 'strtol(str, &end, base)' }
      ]
    },

    // Chapter 13: String Processing
    {
      id: "c-ch-13",
      number: 13,
      partLabel: "PART 2: ARRAYS AND STRINGS",
      title: "String Processing and Manipulation",
      subtitle: "Reversing, sorting, and transforming strings",
      difficulty: "Intermediate",
      estimatedMinutes: 55,
      xpReward: 130,
      prerequisites: ["c-ch-12"],
      learningObjectives: [
        "Reverse strings",
        "Implement string sorting",
        "Transform string case",
        "Build custom string functions"
      ],
      sections: [
        {
          id: "ch13-reverse",
          title: "Reversing Strings",
          whyItMatters: "String reversal is a common algorithm interview question and useful for palindrome checking.",
          content: `Reverse in place:
\`\`\`c
void reverse(char str[]) {
    int len = strlen(str);
    for (int i = 0; i < len / 2; i++) {
        char temp = str[i];
        str[i] = str[len - 1 - i];
        str[len - 1 - i] = temp;
    }
}
\`\`\`

Palindrome check:
\`\`\`c
int isPalindrome(char str[]) {
    int len = strlen(str);
    for (int i = 0; i < len / 2; i++) {
        if (str[i] != str[len - 1 - i]) {
            return 0;  // Not a palindrome
        }
    }
    return 1;  // Is a palindrome
}
\`\`\``,
          codeExamples: [
            {
              id: "ch13-reverse",
              title: "String Reversal",
              description: "Reversing and palindrome checking",
              code: { c: `#include <stdio.h>\n#include <string.h>\n\nvoid reverseInPlace(char str[]) {\n    int len = strlen(str);\n    for (int i = 0; i < len / 2; i++) {\n        char temp = str[i];\n        str[i] = str[len - 1 - i];\n        str[len - 1 - i] = temp;\n    }\n}\n\nint isPalindrome(char str[]) {\n    int len = strlen(str);\n    for (int i = 0; i < len / 2; i++) {\n        if (str[i] != str[len - 1 - i]) return 0;\n    }\n    return 1;\n}\n\nint main() {\n    char s1[] = "Hello";\n    reverseInPlace(s1);\n    printf("Reversed: %s\\n", s1);\n    \n    char s2[] = "racecar";\n    printf("'%s' is palindrome: %s\\n", s2, \n           isPalindrome(s2) ? "Yes" : "No");\n    \n    char s3[] = "hello";\n    printf("'%s' is palindrome: %s\\n", s3,\n           isPalindrome(s3) ? "Yes" : "No");\n    \n    return 0;\n}` },
              explanation: "Swap characters from both ends moving toward the center."
            }
          ]
        },
        {
          id: "ch13-case",
          title: "Case Conversion",
          whyItMatters: "Case conversion is essential for case-insensitive comparisons and text normalization.",
          content: `ASCII-based case conversion:
\`\`\`c
char toUpper(char c) {
    if (c >= 'a' && c <= 'z') {
        return c - 'a' + 'A';  // 'a' - 'a' = 0, + 'A' = 'A'
    }
    return c;
}
\`\`\`

Using ctype.h functions (recommended):
\`\`\`c
#include <ctype.h>
char upper = toupper('a');    // 'A'
char lower = tolower('Z');   // 'z'
if (isalpha(c)) { ... }      // Check if letter
if (isdigit(c)) { ... }      // Check if digit
if (isspace(c)) { ... }      // Check if whitespace
\`\`\``,
          codeExamples: [
            {
              id: "ch13-case",
              title: "Case Conversion",
              description: "Converting between upper and lower case",
              code: { c: `#include <stdio.h>\n#include <string.h>\n#include <ctype.h>\n\nvoid toUpperCase(char str[]) {\n    for (int i = 0; str[i]; i++) {\n        str[i] = toupper((unsigned char)str[i]);\n    }\n}\n\nvoid toLowerCase(char str[]) {\n    for (int i = 0; str[i]; i++) {\n        str[i] = tolower((unsigned char)str[i]);\n    }\n}\n\nint main() {\n    char s1[] = "Hello World";\n    char s2[] = "Hello World";\n    \n    toUpperCase(s1);\n    printf("Uppercase: %s\\n", s1);\n    \n    toLowerCase(s2);\n    printf("Lowercase: %s\\n", s2);\n    \n    // Case-insensitive comparison\n    char a[] = "Hello";\n    char b[] = "hello";\n    toLowerCase(a);\n    toLowerCase(b);\n    printf("'%s' == '%s': %s\\n", a, b,\n           strcmp(a, b) == 0 ? "Yes" : "No");\n    \n    return 0;\n}` },
              explanation: "Cast to unsigned char before toupper/tolower to handle extended ASCII safely."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          { id: "ch13-q1", type: "mcq", question: "What is a palindrome?", options: ["Two words", "Same forwards and backwards", "Reverse string", "Uppercase string"], correctAnswer: 1, explanation: "A palindrome reads the same forwards and backwards.", difficulty: 1 },
          { id: "ch13-q2", type: "mcq", question: "What is 'A' - 'a' in ASCII?", options: ["0", "32", "-32", "65"], correctAnswer: 1, explanation: "In ASCII, uppercase letters are 32 positions before lowercase.", difficulty: 2 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "To upper", value: 'toupper(c)' },
        { label: "To lower", value: 'tolower(c)' },
        { label: "Is alpha", value: 'isalpha(c)' },
        { label: "Is digit", value: 'isdigit(c)' },
        { label: "Reverse", value: 'swap chars from ends' }
      ]
    },

    // Chapter 14: Arrays of Strings
    {
      id: "c-ch-14",
      number: 14,
      partLabel: "PART 2: ARRAYS AND STRINGS",
      title: "Arrays of Strings",
      subtitle: "Handling multiple strings",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 120,
      prerequisites: ["c-ch-13"],
      learningObjectives: [
        "Create arrays of strings",
        "Sort string arrays",
        "Search in string arrays",
        "Pass string arrays to functions"
      ],
      sections: [
        {
          id: "ch14-basics",
          title: "String Arrays",
          whyItMatters: "Arrays of strings are essential for menus, dictionaries, lookup tables, and processing multiple lines of text.",
          content: `2D char array for strings:
\`\`\`c
char fruits[5][20] = {
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry"
};
\`\`\`

Each row has 20 chars. Shorter strings are padded.

Array of pointers (more efficient):
\`\`\`c
char *fruits[] = {
    "Apple",
    "Banana",
    "Cherry",
    "Date"
};
int count = sizeof(fruits) / sizeof(fruits[0]);
\`\`\``,
          codeExamples: [
            {
              id: "ch14-basics",
              title: "String Array Basics",
              description: "Working with multiple strings",
              code: { c: `#include <stdio.h>\n#include <string.h>\n\nint main() {\n    // 2D array approach\n    char fruits[][15] = {\n        "Apple", "Banana", "Cherry"\n    };\n    \n    printf("Fruits (2D array):\\n");\n    for (int i = 0; i < 3; i++) {\n        printf("  %d: %s\\n", i, fruits[i]);\n    }\n    \n    // Pointer array (more flexible)\n    char *colors[] = {\n        "Red", "Green", "Blue", "Yellow"\n    };\n    int n = sizeof(colors) / sizeof(colors[0]);\n    \n    printf("\\nColors (pointer array):\\n");\n    for (int i = 0; i < n; i++) {\n        printf("  %d: %s (len=%zu)\\n", i, colors[i], strlen(colors[i]));\n    }\n    \n    return 0;\n}` },
              explanation: "Pointer arrays are more memory efficient — each string can be a different length."
            }
          ]
        },
        {
          id: "ch14-sort",
          title: "Sorting String Arrays",
          whyItMatters: "Sorting is one of the most common operations in programming. qsort works with any data type.",
          content: `Using qsort with string arrays:
\`\`\`c
int compareStrings(const void *a, const void *b) {
    char * const *sa = (char * const *)a;
    char * const *sb = (char * const *)b;
    return strcmp(*sa, *sb);
}

qsort(strings, count, sizeof(char*), compareStrings);
\`\`\``,
          codeExamples: [
            {
              id: "ch14-sort",
              title: "Sorting Strings",
              description: "Using qsort with string arrays",
              code: { c: `#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nint compareStr(const void *a, const void *b) {\n    char * const *sa = (char * const *)a;\n    char * const *sb = (char * const *)b;\n    return strcmp(*sa, *sb);\n}\n\nint main() {\n    char *fruits[] = {"Cherry", "Apple", "Banana", "Date"};\n    int n = sizeof(fruits) / sizeof(fruits[0]);\n    \n    printf("Before sort:\\n");\n    for (int i = 0; i < n; i++)\n        printf("  %s\\n", fruits[i]);\n    \n    qsort(fruits, n, sizeof(char*), compareStr);\n    \n    printf("\\nAfter sort:\\n");\n    for (int i = 0; i < n; i++)\n        printf("  %s\\n", fruits[i]);\n    \n    return 0;\n}` },
              explanation: "qsort needs a comparison function. Cast void pointers to the correct type."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          { id: "ch14-q1", type: "mcq", question: "What is more memory efficient for strings?", options: ["2D array", "Pointer array", "Same", "Depends on length"], correctAnswer: 1, explanation: "Pointer arrays allow different lengths without wasting space.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "2D strings", value: 'char s[10][50]' },
        { label: "Pointer array", value: 'char *s[] = {"a","b"}' },
        { label: "Sort", value: 'qsort(arr, n, size, cmp)' },
        { label: "Compare", value: 'strcmp(*a, *b)' }
      ]
    },

    // Chapter 15: Command Line Arguments
    {
      id: "c-ch-15",
      number: 15,
      partLabel: "PART 2: ARRAYS AND STRINGS",
      title: "Command Line Arguments",
      subtitle: "Making programs interactive",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 110,
      prerequisites: ["c-ch-14"],
      learningObjectives: [
        "Understand argc and argv",
        "Parse command line arguments",
        "Build useful CLI programs",
        "Handle argument errors"
      ],
      sections: [
        {
          id: "ch15-basics",
          title: "argc and argv",
          whyItMatters: "Command line arguments make programs reusable and scriptable. Essential for every serious C program.",
          content: `The main function can receive command line arguments:

\`\`\`c
int main(int argc, char *argv[]) {
    // argc = argument count (including program name)
    // argv = array of argument strings
}
\`\`\`

Example: ./program hello world
- argc = 3
- argv[0] = "./program"
- argv[1] = "hello"
- argv[2] = "world"

\`\`\`c
int main(int argc, char *argv[]) {
    printf("Program: %s\\n", argv[0]);
    for (int i = 1; i < argc; i++) {
        printf("Arg %d: %s\\n", i, argv[i]);
    }
    return 0;
}
\`\`\``,
          codeExamples: [
            {
              id: "ch15-basics",
              title: "Command Line Basics",
              description: "Accessing program arguments",
              code: { c: `#include <stdio.h>\n\nint main(int argc, char *argv[]) {\n    printf("Number of arguments: %d\\n", argc);\n    \n    printf("\\nAll arguments:\\n");\n    for (int i = 0; i < argc; i++) {\n        printf("  argv[%d]: \\"%s\\"\\n", i, argv[i]);\n    }\n    \n    return 0;\n}` },
              explanation: "argv[0] is always the program name. User arguments start at argv[1]."
            }
          ]
        },
        {
          id: "ch15-parsing",
          title: "Parsing Arguments",
          whyItMatters: "Real programs parse flags (-v, --help) and values (--name=value).",
          content: `Parse options with flags:
\`\`\`c
int main(int argc, char *argv[]) {
    int verbose = 0;
    char *filename = NULL;

    for (int i = 1; i < argc; i++) {
        if (strcmp(argv[i], "-v") == 0) {\n            verbose = 1;\n        } else if (strcmp(argv[i], "-f") == 0 && i + 1 < argc) {\n            filename = argv[++i];  // Get next arg as value\n        } else {\n            // Handle positional arguments\n        }
    }
}
\`\`\`

For complex parsing, use getopt() (POSIX).`,
          codeExamples: [
            {
              id: "ch15-parse",
              title: "Argument Parser",
              description: "Handling flags and values",
              code: { c: `#include <stdio.h>\n#include <string.h>\n\nint main(int argc, char *argv[]) {\n    int verbose = 0;\n    int count = 1;\n    char *name = "World";\n    \n    for (int i = 1; i < argc; i++) {\n        if (strcmp(argv[i], "-v") == 0 || strcmp(argv[i], "--verbose") == 0) {\n            verbose = 1;\n        } else if (strcmp(argv[i], "-n") == 0 && i + 1 < argc) {\n            count = atoi(argv[++i]);\n        } else if (strcmp(argv[i], "--name") == 0 && i + 1 < argc) {\n            name = argv[++i];\n        } else if (strcmp(argv[i], "-h") == 0 || strcmp(argv[i], "--help") == 0) {\n            printf("Usage: %s [-v] [-n N] [--name NAME]\\n", argv[0]);\n            return 0;\n        }\n    }\n    \n    if (verbose) {\n        printf("Running with count=%d, name=%s\\n", count, name);\n    }\n    \n    for (int i = 0; i < count; i++) {\n        printf("Hello, %s!\\n", name);\n    }\n    \n    return 0;\n}` },
              explanation: "Use ++i after checking the flag to advance past the value argument."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          { id: "ch15-q1", type: "mcq", question: "What is argc?", options: ["Argument character", "Argument count", "Argument code", "Array count"], correctAnswer: 1, explanation: "argc is the argument count including the program name.", difficulty: 1 },
          { id: "ch15-q2", type: "mcq", question: "What is argv[0]?", options: ["First argument", "Program name", "Last argument", "Count"], correctAnswer: 1, explanation: "argv[0] is always the program name/path.", difficulty: 1 }
        ],
        passingScore: 2
      },
      cheatSheet: [
        { label: "Signature", value: 'int main(int argc, char *argv[])' },
        { label: "Count", value: 'argc' },
        { label: "Arguments", value: 'argv[1], argv[2], ...' },
        { label: "Program", value: 'argv[0]' }
      ]
    },

    // Chapter 16: Array Algorithms
    {
      id: "c-ch-16",
      number: 16,
      partLabel: "PART 2: ARRAYS AND STRINGS",
      title: "Array Algorithms — Sorting and Searching",
      subtitle: "Selection sort, bubble sort, binary search",
      difficulty: "Intermediate",
      estimatedMinutes: 60,
      xpReward: 140,
      prerequisites: ["c-ch-15"],
      learningObjectives: [
        "Implement selection sort and bubble sort",
        "Use binary search on sorted arrays",
        "Understand algorithm complexity",
        "Choose the right algorithm"
      ],
      sections: [
        {
          id: "ch16-selection",
          title: "Selection Sort",
          whyItMatters: "Selection sort is simple and educational. Understanding it builds foundation for all sorting.",
          content: `Selection sort: Find minimum, swap with first, repeat:

\`\`\`c
void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
n                minIdx = j;
            }
        }
        // Swap
        int temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
}
\`\`\`

Time complexity: O(n²)
Space: O(1)`,
          codeExamples: [
            {
              id: "ch16-selection",
              title: "Selection Sort Implementation",
              description: "Step-by-step sorting",
              code: { c: `#include <stdio.h>\n\nvoid selectionSort(int arr[], int n) {\n    for (int i = 0; i < n - 1; i++) {\n        int minIdx = i;\n        for (int j = i + 1; j < n; j++) {\n            if (arr[j] < arr[minIdx]) {\n                minIdx = j;\n            }\n        }\n        // Swap\n        int temp = arr[i];\n        arr[i] = arr[minIdx];\n        arr[minIdx] = temp;\n        \n        printf("After pass %d: \", i+1);\n        for (int k = 0; k < n; k++) printf("%d \", arr[k]);\n        printf("\\n");\n    }\n}\n\nvoid printArray(int arr[], int n) {\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n}\n\nint main() {\n    int arr[] = {64, 25, 12, 22, 11};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    \n    printf("Before: \"); printArray(arr, n);\n    selectionSort(arr, n);\n    printf("After:  \"); printArray(arr, n);\n    \n    return 0;\n}` },
              explanation: "Each pass finds the minimum from the unsorted portion and moves it to the sorted portion."
            }
          ]
        },
        {
          id: "ch16-binary",
          title: "Binary Search",
          whyItMatters: "Binary search is O(log n) — 1 billion elements in just 30 comparisons. Essential for any search-heavy application.",
          content: `Binary search requires SORTED array:

\`\`\`c
int binarySearch(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    \n    while (left <= right) {\n        int mid = left + (right - left) / 2;  // Avoid overflow\n        \n        if (arr[mid] == target) {\n            return mid;  // Found!\n        } else if (arr[mid] < target) {\n            left = mid + 1;  // Search right half\n        } else {\n            right = mid - 1;  // Search left half\n        }\n    }\n    return -1;  // Not found
}
\`\`\`

Time complexity: O(log n)
Space: O(1)`,
          codeExamples: [
            {
              id: "ch16-binary",
              title: "Binary Search Implementation",
              description: "Efficient searching in sorted arrays",
              code: { c: `#include <stdio.h>\n\nint binarySearch(int arr[], int n, int target) {\n    int left = 0, right = n - 1;\n    \n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        printf("Searching: left=%d, mid=%d, right=%d\\n\", left, mid, right);\n        \n        if (arr[mid] == target) {\n            return mid;\n        } else if (arr[mid] < target) {\n            left = mid + 1;\n        } else {\n            right = mid - 1;\n        }\n    }\n    return -1;\n}\n\nint main() {\n    int arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    \n    int target = 23;\n    int idx = binarySearch(arr, n, target);\n    \n    if (idx != -1) {\n        printf("\\nFound %d at index %d\\n\", target, idx);\n    } else {\n        printf("\\n%d not found\\n\", target);\n    }\n    \n    return 0;\n}` },
              explanation: "Divide the search space in half each time. Array MUST be sorted."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          { id: "ch16-q1", type: "mcq", question: "What is the time complexity of selection sort?", options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"], correctAnswer: 2, explanation: "Selection sort is O(n²) — nested loops over the array.", difficulty: 1 },
          { id: "ch16-q2", type: "mcq", question: "What does binary search require?", options: ["Unsorted array", "Sorted array", "Linked list", "Tree"], correctAnswer: 1, explanation: "Binary search requires a sorted array to work correctly.", difficulty: 1 },
          { id: "ch16-q3", type: "mcq", question: "How many steps to find any item in 1000 elements with binary search?", options: ["1000", "500", "10", "100"], correctAnswer: 2, explanation: "log₂(1000) ≈ 10 steps.", difficulty: 2 }
        ],
        passingScore: 2
      },
      cheatSheet: [
        { label: "Selection sort", value: "Find min, swap, repeat" },
        { label: "Binary search", value: "Divide sorted array in half" },
        { label: "Selection time", value: "O(n²)" },
        { label: "Binary time", value: "O(log n)" },
        { label: "Overflow fix", value: "mid = left + (right-left)/2" }
      ]
    },

    // Chapter 17: What Is a Pointer?
    {
      id: "c-ch-17",
      number: 17,
      partLabel: "PART 3: POINTERS — THE HEART OF C",
      title: "What Is a Pointer?",
      subtitle: "Understanding memory addresses",
      difficulty: "Intermediate",
      estimatedMinutes: 50,
      xpReward: 140,
      prerequisites: ["c-ch-16"],
      learningObjectives: [
        "Understand what a pointer is",
        "Use the address-of operator (&)",
        "Declare and initialize pointers",
        "Understand pointer types"
      ],
      sections: [
        {
          id: "ch17-concept",
          title: "Pointers: Addresses, Not Values",
          whyItMatters: "Pointers are the most powerful and most misunderstood concept in C. They enable dynamic memory, efficient data structures, and direct memory access.",
          realWorldAnalogy: "A pointer is like a phone number written on a piece of paper. The paper itself isn't the person — it's just information about where to find them. A pointer doesn't hold data — it holds the address where data is stored.",
          content: `A pointer is a variable that stores a memory address:

\`\`\`c
int age = 25;
int *ptr = &age;  // ptr now holds address of age

printf("age value: %d\\n", age);
printf("age address: %p\\n", &age);
printf("ptr value: %p\\n", ptr);
printf("ptr points to: %d\\n", *ptr);  // * dereferences
\`\`\`

**Key concepts:**
- & (address-of): Gets the memory address of a variable
- * (dereference): Accesses the value at an address
- pointer stores address, *pointer retrieves value

**Why pointers?**
1. Return multiple values from functions
2. Pass large data efficiently (just address, not copy)
3. Dynamic memory allocation
4. Build data structures (linked lists, trees)
5. Interface with hardware`,
          codeExamples: [
            {
              id: "ch17-basics",
              title: "Pointer Basics",
              description: "Declaring and using pointers",
              code: { c: `#include <stdio.h>\n\nint main() {\n    int number = 42;\n    int *ptr;\n    \n    // & gets address\n    ptr = &number;\n    \n    printf("number = %d\\n", number);\n    printf("&number = %p\\n", &number);\n    printf("ptr = %p\\n", ptr);\n    printf("*ptr = %d\\n", *ptr);  // Dereference\n    \n    // Modify through pointer\n    *ptr = 100;\n    printf("\\nAfter *ptr = 100:\\n");\n    printf("number = %d\\n", number);\n    printf("*ptr = %d\\n", *ptr);\n    \n    return 0;\n}` },
              explanation: "ptr stores the address of number. *ptr reads/writes the value at that address."
            }
          ]
        },
        {
          id: "ch17-declare",
          title: "Pointer Declaration and Initialization",
          whyItMatters: "Understanding pointer syntax prevents common errors that cause crashes.",
          content: `Declaring pointers:
\`\`\`c
int *ptr1;     // Pointer to int
float *ptr2;   // Pointer to float
char *ptr3;    // Pointer to char
void *ptr4;    // Generic pointer (no type)
\`\`\`

**Initialization options:**
\`\`\`c
int var = 10;
int *p = &var;      // Initialize with address
int *p2 = NULL;     // Good practice: initialize to NULL
int *p3 = 0;        // Same as NULL
\`\`\`

**Common mistakes:**
\`\`\`c
int *p = &var;  // OK: p holds address
int *p = var;    // WRONG: trying to assign int to pointer
*p = 10;         // OK: write 10 to address p points to
p = 10;          // WRONG: trying to assign int to pointer
\`\`\``,
          callouts: [
            {
              type: "warning",
              title: "Always Initialize Pointers",
              content: "Uninitialized pointers contain garbage addresses. Dereferencing them crashes your program. Always initialize: int *p = NULL; or int *p = &var;"
            }
          ]
        },
        {
          id: "ch17-sizes",
          title: "Pointer Sizes",
          whyItMatters: "All pointers are the same size on a system — they're just addresses, not the data they point to.",
          content: `Pointer sizes depend on architecture:
- 32-bit system: 4 bytes (can address 4GB RAM)
- 64-bit system: 8 bytes (can address way more)

\`\`\`c
printf("int*: %zu bytes\\n", sizeof(int*));
printf("char*: %zu bytes\\n", sizeof(char*));
printf("void*: %zu bytes\\n", sizeof(void*));
// All pointers are same size on same system!
\`\`\`

**The data size is different:**
\`\`\`c
printf("int: %zu bytes\\n", sizeof(int));   // 4
printf("char: %zu bytes\\n", sizeof(char));  // 1
printf("double: %zu bytes\\n", sizeof(double));  // 8
\`\`\`

Pointer holds address (8 bytes on 64-bit), data size varies.`,
          codeExamples: [
            {
              id: "ch17-sizes",
              title: "Pointer and Data Sizes",
              description: "Understanding pointer sizes",
              code: { c: `#include <stdio.h>\n\nint main() {\n    printf("=== Pointer Sizes ===\\n");\n    printf("int*:     %zu bytes\\n", sizeof(int*));\n    printf("char*:    %zu bytes\\n", sizeof(char*));\n    printf("double*:  %zu bytes\\n", sizeof(double*));\n    printf("void*:    %zu bytes\\n", sizeof(void*));\n    \n    printf("\\n=== Data Sizes ===\\n");\n    printf("int:      %zu bytes\\n", sizeof(int));\n    printf("char:     %zu bytes\\n", sizeof(char));\n    printf("double:   %zu bytes\\n", sizeof(double));\n    \n    // All pointers same size\n    int x = 10;\n    char c = 'A';\n    int *pi = &x;\n    char *pc = &c;\n    printf("\\n&x = %p, &c = %p\\n", (void*)pi, (void*)pc);\n    printf("Same size: %s\\n", sizeof(pi) == sizeof(pc) ? "Yes" : "No");\n    \n    return 0;\n}` },
              explanation: "All pointers are the same size — they're addresses. The type determines how many bytes are read/written when dereferencing."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          { id: "ch17-q1", type: "mcq", question: "What does & do?", options: ["Dereferences", "Gets address", "Creates pointer", "Deletes pointer"], correctAnswer: 1, explanation: "& gets the memory address of a variable.", difficulty: 1 },
          { id: "ch17-q2", type: "mcq", question: "What does * do when used on a pointer?", options: ["Creates pointer", "Gets address", "Dereferences", "Counts bytes"], correctAnswer: 2, explanation: "* dereferences a pointer, accessing the value at the address.", difficulty: 1 },
          { id: "ch17-q3", type: "mcq", question: "What is NULL?", options: ["Address of 0", "Value of 0", "Empty string", "Error code"], correctAnswer: 0, explanation: "NULL is a special pointer value representing 'points to nothing'.", difficulty: 1 }
        ],
        passingScore: 2
      },
      cheatSheet: [
        { label: "Declare", value: "int *ptr;" },
        { label: "Get address", value: "&variable" },
        { label: "Dereference", value: "*ptr" },
        { label: "Initialize", value: "int *p = &var" },
        { label: "NULL", value: "int *p = NULL" }
      ]
    },

    // Chapter 18: Pointer Arithmetic
    {
      id: "c-ch-18",
      number: 18,
      partLabel: "PART 3: POINTERS — THE HEART OF C",
      title: "Pointer Arithmetic",
      subtitle: "Moving through memory",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 140,
      prerequisites: ["c-ch-17"],
      learningObjectives: [
        "Perform arithmetic on pointers",
        "Understand pointer arithmetic scales by type size",
        "Use pointers with arrays",
        "Navigate memory with pointers"
      ],
      sections: [
        {
          id: "ch18-basics",
          title: "Pointer Arithmetic Basics",
          whyItMatters: "Pointer arithmetic is how you navigate arrays and memory. It automatically scales by the data type size.",
          content: `Pointer arithmetic operations:
\`\`\`c
int arr[5] = {10, 20, 30, 40, 50};
int *p = arr;    // p points to arr[0]

p + 1    // Points to arr[1] (not next byte!)
p + 2    // Points to arr[2]
p++      // Move to next element
p--      // Move to previous element
\`\`\`

**Key insight: Pointers scale by type size!**
\`\`\`c
int *p1;    // p1+1 moves by sizeof(int) = 4 bytes
char *p2;   // p2+1 moves by sizeof(char) = 1 byte
double *p3; // p3+1 moves by sizeof(double) = 8 bytes
\`\`\`

**Pointer difference:**
\`\`\`c
int arr[5];
int *p1 = &arr[0];
int *p2 = &arr[3];
ptrdiff_t diff = p2 - p1;  // diff = 3
\`\`\``,
          codeExamples: [
            {
              id: "ch18-arithmetic",
              title: "Pointer Arithmetic Demo",
              description: "Navigating arrays with pointers",
              code: { c: `#include <stdio.h>\n\nint main() {\n    int arr[] = {100, 200, 300, 400, 500};\n    int *p = arr;  // Points to first element\n    \n    printf("Array address: %p\\n", (void*)arr);\n    printf("Pointer: %p\\n", (void*)p);\n    \n    // Show pointer arithmetic\n    printf("\\nPointer + 1: %p (value: %d)\\n\", \n           (void*)(p + 1), *(p + 1));\n    printf("Pointer + 2: %p (value: %d)\\n\", \n           (void*)(p + 2), *(p + 2));\n    \n    // Loop with pointer arithmetic\n    printf("\\nLoop through array:\\n");\n    for (int i = 0; i < 5; i++) {\n        printf("  *(p + %d) = %d\\n", i, *(p + i));\n    }\n    \n    // Show actual byte differences\n    printf("\\nByte offsets:\\n");\n    printf("  p     = byte %ld\\n", (char*)p - (char*)p);\n    printf("  p + 1 = byte %ld\\n", (char*)(p+1) - (char*)p);\n    \n    return 0;\n}` },
              explanation: "Pointer+1 moves by sizeof(type) bytes, not 1. int is 4 bytes on most systems."
            }
          ]
        },
        {
          id: "ch18-vs-array",
          title: "Pointers vs Array Names",
          whyItMatters: "Array name decays to pointer, but they aren't identical. Understanding the difference prevents bugs.",
          content: `Array name is a constant pointer (in most contexts):
\`\`\`c
int arr[5] = {1, 2, 3, 4, 5};

arr     // Equivalent to &arr[0] (pointer to first)
arr + 1 // Equivalent to &arr[1]
*(arr + 2) // Same as arr[2]
\`\`\`

**Difference: arr is constant, ptr is variable**
\`\`\`c
int arr[5];
int *p = arr;

p = p + 1;  // OK - can move pointer
arr = arr + 1;  // ERROR - arr is constant!
\`\`\`

**When array name is NOT a pointer:**
\`\`\`c
sizeof(arr)    // Gives full array size, not pointer size
&arr           // Gives pointer to entire array (int(*)[5])
\`\`\``,
          callouts: [
            {
              type: "tip",
              title: "Array Name vs Pointer",
              content: "int arr[5]; int *p = arr; After this, arr[i] and p[i] are identical, and *(arr+i) and *(p+i) are identical."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          { id: "ch18-q1", type: "mcq", question: "If int*p points to element 0, what does p+1 point to?", options: ["Next byte", "Element 1", "Previous element", "Error"], correctAnswer: 1, explanation: "p+1 moves forward by sizeof(int) bytes, pointing to element 1.", difficulty: 1 },
          { id: "ch18-q2", type: "mcq", question: "Can you modify what arr points to?", options: ["Yes", "No - it's constant", "Only in functions", "Depends on compiler"], correctAnswer: 1, explanation: "Array name decays to a constant pointer — it cannot be reassigned.", difficulty: 2 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Next element", value: "ptr + 1" },
        { label: "Prev element", value: "ptr - 1" },
        { label: "Dereference", value: "*(ptr + i)" },
        { label: "Array name", value: "&arr[0] (constant)" },
        { label: "Size per step", value: "sizeof(type)" }
      ]
    },

    // Chapter 19: Pointers and Arrays
    {
      id: "c-ch-19",
      number: 19,
      partLabel: "PART 3: POINTERS — THE HEART OF C",
      title: "Pointers and Arrays",
      subtitle: "Deep relationship between pointers and arrays",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 130,
      prerequisites: ["c-ch-18"],
      learningObjectives: [
        "Use pointer notation with arrays",
        "Pass arrays to functions via pointers",
        "Understand array decay",
        "Choose between array and pointer notation"
      ],
      sections: [
        {
          id: "ch19-equivalence",
          title: "Array-Pointer Equivalence",
          whyItMatters: "In C, arrays and pointers are deeply intertwined. Mastering this relationship makes array manipulation intuitive.",
          content: `Array notation and pointer notation are interchangeable:
\`\`\`c
int arr[5] = {10, 20, 30, 40, 50};
int *p = arr;

// All these are equivalent:
arr[2] == *(arr + 2)
p[2] == *(p + 2)
*(arr + 2) == *(p + 2)
\*(p + 2) == p[2]
\`\`\`

**Key insight:** arr[i] is syntactic sugar for *(arr + i)

**Why this matters:**
\`\`\`c
// These all print the same thing:
for (int i = 0; i < 5; i++) {
    printf("%d ", arr[i]);      // Array notation
    printf("%d ", *(arr + i));  // Pointer notation
    printf("%d ", *(p + i));    // Pointer with offset
    printf("%d ", p[i]);        // Pointer as array
}
\`\`\``,
          codeExamples: [
            {
              id: "ch19-demo",
              title: "Array-Pointer Equivalence",
              description: "Demonstrating equivalence",
              code: { c: `#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *p = arr;\n    \n    printf("All these get arr[2] = %d:\\n");\n    printf("  arr[2] = %d\\n", arr[2]);\n    printf("  *(arr + 2) = %d\\n", *(arr + 2));\n    printf("  p[2] = %d\\n", p[2]);\n    printf("  *(p + 2) = %d\\n", *(p + 2));\n    \n    // Modify through pointer\n    printf("\\nModify through pointer:\\n");\n    p[2] = 99;\n    printf("  arr[2] = %d\\n", arr[2]);  // Changed!\n    \n    // Even modify through arr name\n    printf("\\nModify through array:\\n");\n    *(arr + 3) = 88;\n    printf("  p[3] = %d\\n", p[3]);  // Changed!\n    \n    return 0;\n}` },
              explanation: "Both arr and p point to the same memory. Changes through one affect the other."
            }
          ]
        },
        {
          id: "ch19-pass-to-func",
          title: "Passing Arrays to Functions",
          whyItMatters: "When you pass an array to a function, it decays to a pointer. You must pass the size separately.",
          content: `Passing arrays (they decay to pointers):
\`\`\`c
void printArray(int arr[], int size) {
    // Same as: void printArray(int *arr, int size)
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);  // or *(arr + i)
    }
}

int main() {
    int nums[] = {1, 2, 3, 4, 5};
    printArray(nums, 5);  // nums decays to &nums[0]
    return 0;
}
\`\`\`

**Important: array parameter is a pointer:**
\`\`\`c
void foo(int arr[5]) {
    sizeof(arr);  // Returns pointer size, not 20!
}
\`\`\``,
          codeExamples: [
            {
              id: "ch19-pass",
              title: "Array to Function",
              description: "Passing arrays correctly",
              code: { c: `#include <stdio.h>\n\nvoid doubleArray(int arr[], int n) {\n    // arr is actually a pointer\n    printf("  Inside: sizeof(arr) = %zu\\n\", sizeof(arr));\n    for (int i = 0; i < n; i++) {\n        arr[i] *= 2;\n    }\n}\n\nint main() {\n    int nums[] = {1, 2, 3, 4, 5};\n    int n = sizeof(nums) / sizeof(nums[0]);\n    \n    printf("Before: \");\n    for (int i = 0; i < n; i++) printf("%d ", nums[i]);\n    printf("\\n\");\n    \n    doubleArray(nums, n);\n    \n    printf("After:  \");\n    for (int i = 0; i < n; i++) printf("%d ", nums[i]);\n    printf("\\n\");\n    \n    return 0;\n}` },
              explanation: "Array passes as pointer — changes affect original. Pass size separately since sizeof doesn't work."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          { id: "ch19-q1", type: "mcq", question: "When passing array to function, what is actually passed?", options: ["Copy of array", "Pointer to first element", "Reference", "Nothing"], correctAnswer: 1, explanation: "Arrays decay to pointers when passed — no copy is made.", difficulty: 1 },
          { id: "ch19-q2", type: "mcq", question: "What must you pass alongside an array?", options: ["Type", "Address", "Size", "Pointer"], correctAnswer: 2, explanation: "Size must be passed separately because pointer loses array size information.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Array notation", value: "arr[i]" },
        { label: "Pointer notation", value: "*(arr + i)" },
        { label: "Decay", value: "arr → &arr[0]" },
        { label: "Parameter", value: "int arr[] == int *arr" },
        { label: "Must pass", value: "size separately" }
      ]
    },

    // Chapter 20: Double Pointers
    {
      id: "c-ch-20",
      number: 20,
      partLabel: "PART 3: POINTERS — THE HEART OF C",
      title: "Double Pointers (Pointer to Pointer)",
      subtitle: "Pointers to pointers and their uses",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 130,
      prerequisites: ["c-ch-19"],
      learningObjectives: [
        "Declare and use double pointers",
        "Pass pointers to functions",
        "Create pointer arrays",
        "Navigate complex data structures"
      ],
      sections: [
        {
          id: "ch20-basics",
          title: "Double Pointer Fundamentals",
          whyItMatters: "Double pointers are essential for dynamically allocated arrays of strings, 2D arrays, and modifying pointers in functions.",
          content: `A double pointer stores the address of a pointer:
\`\`\`c
int value = 42;
int *ptr = &value;      // ptr points to value
int **dptr = &ptr;     // dptr points to ptr

// Access chain:
**dptr == 42  // dereference twice
*dptr == ptr  // first dereference = ptr
**dptr == *ptr == value
\`\`\`

Declaration:
\`\`\`c
int **pp;      // Pointer to int pointer
char **args;    // Array of strings (char pointers)
int ***ppp;     // Pointer to pointer to int pointer
\`\`\``,
          codeExamples: [
            {
              id: "ch20-basics",
              title: "Double Pointer Demo",
              description: "Understanding double pointers",
              code: { c: `#include <stdio.h>\n\nint main() {\n    int value = 42;\n    int *ptr = &value;\n    int **dptr = &ptr;\n    \n    printf("value = %d\\n", value);\n    printf("ptr = %p (points to value)\\n\", (void*)ptr);\n    printf("dptr = %p (points to ptr)\\n\", (void*)dptr);\n    \n    printf("\\nAccessing through chains:\\n");\n    printf("*ptr = %d\\n", *ptr);\n    printf("**dptr = %d\\n", **dptr);\n    \n    // Modify value through double pointer
    **dptr = 100;\n    printf("\\nAfter **dptr = 100:\\n");\n    printf("value = %d\\n", value);\n    \n    return 0;\n}` },
              explanation: "**dptr follows the chain: dptr → ptr → value. Dereference twice to get the value."
            }
          ]
        },
        {
          id: "ch20-strings",
          title: "Array of Strings with Double Pointer",
          whyItMatters: "Command line arguments (argv) use double pointers. So does dynamically allocated string arrays.",
          content: `Char ** is used for arrays of strings:
\`\`\`c
char *names[] = {"Alice", "Bob", "Charlie"};
char **p = names;  // Points to first string

// Access patterns:
p[0]        // First string (char*)
p[0][0]     // First char of first string ('A')
*(p + 1)    // Second string
\**(p + 1)  // First char of second string ('B')
\`\`\`

This is exactly how argv works:
\`\`\`c
int main(int argc, char *argv[]) {
    // argv is char**, argv[i] is char*
    // argv[i][j] is individual chars
}
\`\`\``,
          codeExamples: [
            {
              id: "ch20-strings",
              title: "String Array with Double Pointer",
              description: "Working with char**",
              code: { c: `#include <stdio.h>\n#include <string.h>\n\nint main() {\n    // Array of strings\n    char *fruits[] = {"Apple", "Banana", "Cherry"};\n    char **p = fruits;\n    int count = sizeof(fruits) / sizeof(fruits[0]);\n    \n    printf("Using array notation:\\n");\n    for (int i = 0; i < count; i++) {\n        printf("  %s\\n", fruits[i]);\n    }\n    \n    printf("\\nUsing pointer notation:\\n");\n    for (int i = 0; i < count; i++) {\n        printf("  %s\\n", *(p + i));\n    }\n    \n    // Navigate individual characters
    printf("\\nFirst letters: \");\n    for (int i = 0; i < count; i++) {\n        printf("%c ", p[i][0]);  // or (*(p+i))[0]\n    }\n    printf("\\n");\n    \n    return 0;\n}` },
              explanation: "char** is pointer to char pointer. p[i] gives a string, p[i][j] gives a character."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          { id: "ch20-q1", type: "mcq", question: "What is int**?", options: ["Pointer to int", "Pointer to pointer to int", "Two integers", "Double pointer to int"], correctAnswer: 3, explanation: "int** is a pointer to a pointer to an int.", difficulty: 1 },
          { id: "ch20-q2", type: "mcq", question: "In char** argv, what is argv[0]?", options: ["char", "char*", "char**", "int"], correctAnswer: 1, explanation: "argv[i] is char* (a string). argv is char**.", difficulty: 2 }
        ],
        passingScore: 2
      },
      cheatSheet: [
        { label: "Declare", value: "int **ptr" },
        { label: "Access value", value: "**ptr" },
        { label: "Access ptr", value: "*ptr" },
        { label: "Strings", value: "char** = array of strings" },
        { label: "argv type", value: "char* argv[] = char**" }
      ]
    },

    // Chapter 21: Pointers and Functions
    {
      id: "c-ch-21",
      number: 21,
      partLabel: "PART 3: POINTERS — THE HEART OF C",
      title: "Pointers and Functions",
      subtitle: "Returning pointers, modifying pointers",
      difficulty: "Intermediate",
      estimatedMinutes: 50,
      xpReward: 140,
      prerequisites: ["c-ch-20"],
      learningObjectives: [
        "Return pointers from functions",
        "Pass pointers to modify them",
        "Avoid dangling pointers",
        "Use pointer parameters effectively"
      ],
      sections: [
        {
          id: "ch21-return",
          title: "Returning Pointers",
          whyItMatters: "Functions can return pointers, enabling dynamic data structures and efficient data sharing.",
          content: `Functions can return pointers:
\`\`\`c
int* createArray(int size) {
    int *arr = malloc(size * sizeof(int));
    if (arr) {
        for (int i = 0; i < size; i++) arr[i] = i;
    }
    return arr;  // Caller must free()
}
\`\`\`

**Rules for returning pointers:**
1. Never return address of local variable (stack memory)
2. Return dynamically allocated memory or static/global memory
3. Caller takes ownership and must free() dynamic memory

**Safe return:**
\`\`\`c
char* greet(char *name) {
    static char buffer[100];  // Static persists
    sprintf(buffer, "Hello, %s!", name);
    return buffer;
}
\`\`\``,
          codeExamples: [
            {
              id: "ch21-return",
              title: "Returning Pointers",
              description: "Safe pointer returns",
              code: { c: `#include <stdio.h>\n#include <stdlib.h>\n\n// Return dynamically allocated array\nint* createRange(int start, int end) {\n    int *arr = malloc((end - start) * sizeof(int));\n    if (!arr) return NULL;\n    \n    for (int i = 0; i < end - start; i++) {\n        arr[i] = start + i;\n    }\n    return arr;\n}\n\nint main() {\n    int *range = createRange(10, 15);\n    \n    if (range) {\n        printf("Range 10-15: \");\n        for (int i = 0; i < 5; i++) {\n            printf("%d ", range[i]);\n        }\n        printf("\\n");\n        free(range);  // Don't forget!\n    }\n    \n    return 0;\n}` },
              explanation: "Dynamic allocation (malloc) persists after function returns. Static/local memory is freed on return."
            }
          ]
        },
        {
          id: "ch21-pass-ptr",
          title: "Passing Pointers to Functions",
          whyItMatters: "To modify a pointer itself (not just what it points to), pass a pointer to the pointer.",
          content: `To modify a pointer, pass pointer-to-pointer:
\`\`\`c
void allocate(int **ptr, int size) {
    *ptr = malloc(size * sizeof(int));
    // *ptr is the original pointer variable
}

// Usage:
int *arr = NULL;
allocate(&arr, 10);  // Pass address of pointer
// arr is now allocated
free(arr);
\`\`\`

**Why this works:**
- &arr gives address of the pointer variable
- *ptr inside function = arr outside
- Writing to *ptr modifies arr`,
          codeExamples: [
            {
              id: "ch21-pass-ptr",
              title: "Modifying Pointers in Functions",
              description: "Passing pointers by reference",
              code: { c: `#include <stdio.h>\n#include <stdlib.h>\n\nvoid allocateIntArray(int **ptr, int size) {\n    *ptr = malloc(size * sizeof(int));\n    if (*ptr) {\n        for (int i = 0; i < size; i++) {\n            (*ptr)[i] = i * 10;\n        }\n    }\n}\n\nvoid freeArray(int **ptr) {\n    if (*ptr) {\n        free(*ptr);\n        *ptr = NULL;  // Prevent dangling pointer\n    }\n}\n\nint main() {\n    int *arr = NULL;\n    \n    printf("Before: %p\\n", (void*)arr);\n    allocateIntArray(&arr, 5);\n    printf("After allocation: %p\\n\", (void*)arr);\n    \n    printf("Array: \");\n    for (int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    printf("\\n");\n    \n    freeArray(&arr);\n    printf("After free: %p\\n\", (void*)arr);\n    \n    return 0;\n}` },
              explanation: "Pass &ptr to modify the pointer itself. Set to NULL after freeing to prevent crashes."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          { id: "ch21-q1", type: "mcq", question: "What do you pass to modify a pointer in a function?", options: ["Pointer", "Double pointer", "Value", "Nothing"], correctAnswer: 1, explanation: "Pass &ptr (pointer to pointer) to modify the original pointer variable.", difficulty: 1 },
          { id: "ch21-q2", type: "mcq", question: "Why set pointer to NULL after free?", options: ["Memory savings", "Prevent dangling pointer bugs", "Faster", "Required by C"], correctAnswer: 1, explanation: "NULL prevents accidental use of freed memory (dangling pointer).", difficulty: 2 }
        ],
        passingScore: 2
      },
      cheatSheet: [
        { label: "Modify pointer", value: "void func(int **ptr)" },
        { label: "Pass", value: "func(&ptr)" },
        { label: "Write to *ptr", value: "*ptr = malloc(...)" },
        { label: "After free", value: "*ptr = NULL" },
        { label: "Never return", value: "local stack address" }
      ]
    },

    // Chapter 22: Function Pointers
    {
      id: "c-ch-22",
      number: 22,
      partLabel: "PART 3: POINTERS — THE HEART OF C",
      title: "Function Pointers",
      subtitle: "Functions as first-class citizens",
      difficulty: "Advanced",
      estimatedMinutes: 55,
      xpReward: 150,
      prerequisites: ["c-ch-21"],
      learningObjectives: [
        "Understand function pointers",
        "Declare and use function pointers",
        "Pass functions as arguments",
        "Create callback systems"
      ],
      sections: [
        {
          id: "ch22-basics",
          title: "Function Pointer Basics",
          whyItMatters: "Function pointers enable callbacks, strategy pattern, virtual functions, and dynamic dispatch. Essential for event systems and plugins.",
          content: `A function pointer holds the address of a function:
\`\`\`c
int add(int a, int b) { return a + b; }

// Function pointer declaration:
int (*funcPtr)(int, int);

// Initialize:
funcPtr = add;  // Or: &add

// Call through pointer:
int result = funcPtr(5, 3);  // result = 8
\`\`\`

**Declaration breakdown:**
\`\`\`c
int (*ptr)(int, int);
 //   ^     ^  ^
 //   |     |  └── Parameter types
 //   |     └────── Parameter count
 //   └──────────── Function pointer
\`\`\``,
          codeExamples: [
            {
              id: "ch22-basics",
              title: "Function Pointer Demo",
              description: "Using function pointers",
              code: { c: `#include <stdio.h>\n\nint add(int a, int b) { return a + b; }\nint multiply(int a, int b) { return a * b; }\nint subtract(int a, int b) { return a - b; }\n\nint main() {\n    // Function pointer type\n    int (*operation)(int, int);\n    \n    // Point to different functions\n    operation = add;\n    printf("5 + 3 = %d\\n", operation(5, 3));\n    \n    operation = multiply;\n    printf("5 * 3 = %d\\n", operation(5, 3));\n    \n    operation = subtract;\n    printf("5 - 3 = %d\\n", operation(5, 3));\n    \n    // Array of function pointers\n    int (*ops[])(int, int) = {add, multiply, subtract};\n    printf("\\nUsing array:\\n");\n    for (int i = 0; i < 3; i++) {\n        printf("  ops[%d](5,3) = %d\\n", i, ops[i](5, 3));\n    }\n    \n    return 0;\n}` },
              explanation: "Function pointers work like variable pointers — assign different functions, call through pointer."
            }
          ]
        },
        {
          id: "ch22-callbacks",
          title: "Callbacks with Function Pointers",
          whyItMatters: "Callbacks are the foundation of event-driven programming, sorting with custom comparators, and plugin systems.",
          content: `Pass functions to other functions (callbacks):
\`\`\`c
void processArray(int arr[], int n, int (*callback)(int)) {
    for (int i = 0; i < n; i++) {
n        arr[i] = callback(arr[i]);  // Apply callback
    }
}

int double(int x) { return x * 2; }
int square(int x) { return x * x; }

int main() {
    int nums[] = {1, 2, 3, 4, 5};
    processArray(nums, 5, double);   // Pass function
    // nums is now {2, 4, 6, 8, 10}
}
\`\`\`

Common use: qsort comparison function:
\`\`\`c
int compare(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}
qsort(arr, n, sizeof(int), compare);
\`\`\``,
          codeExamples: [
            {
              id: "ch22-callback",
              title: "Callback System",
              description: "Transform array with callbacks",
              code: { c: `#include <stdio.h>\n\nvoid transform(int arr[], int n, int (*fn)(int)) {\n    for (int i = 0; i < n; i++) {\n        arr[i] = fn(arr[i]);\n    }\n}\n\nint double(int x) { return x * 2; }\nint square(int x) { return x * x; }\nint cube(int x) { return x * x * x; }\n\nvoid printArray(int arr[], int n) {\n    for (int i = 0; i < n; i++) {\n        printf("%d ", arr[i]);\n    }\n    printf("\\n");\n}\n\nint main() {\n    int nums[] = {1, 2, 3, 4, 5};\n    int n = 5;\n    \n    printf("Original: \"); printArray(nums, n);\n    \n    transform(nums, n, double);\n    printf("Doubled:  \"); printArray(nums, n);\n    \n    transform(nums, n, square);\n    printf("Squared:  \"); printArray(nums, n);\n    \n    transform(nums, n, cube);\n    printf("Cubed:    \"); printArray(nums, n);\n    \n    return 0;\n}` },
              explanation: "Pass different functions to same transform() for different behaviors — no code duplication."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          { id: "ch22-q1", type: "mcq", question: "What is a callback?", options: ["Loop type", "Function passed as argument", "Return value", "Data type"], correctAnswer: 1, explanation: "A callback is a function passed to another function to be called later.", difficulty: 1 },
          { id: "ch22-q2", type: "mcq", question: "How do you get a function's address?", options: ["&funcname", "funcname", "Both work", "Impossible"], correctAnswer: 2, explanation: "Both funcname and &funcname give the function's address.", difficulty: 2 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Declare", value: "int (*fp)(int, int)" },
        { label: "Assign", value: "fp = func" },
        { label: "Call", value: "fp(5, 3)" },
        { label: "Callback", value: "void foo(int (*cb)(int))" },
        { label: "qsort cmp", value: "int cmp(const void*, const void*)" }
      ]
    },

    // Chapter 23: Void Pointers
    {
      id: "c-ch-23",
      number: 23,
      partLabel: "PART 3: POINTERS — THE HEART OF C",
      title: "Void Pointers and Generic Programming",
      subtitle: "Type-agnostic pointers",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 130,
      prerequisites: ["c-ch-22"],
      learningObjectives: [
        "Understand void* (generic pointer)",
        "Cast void pointers safely",
        "Use memcpy and memset",
        "Implement generic data structures"
      ],
      sections: [
        {
          id: "ch23-basics",
          title: "Void Pointer Fundamentals",
          whyItMatters: "void* is C's generic pointer type. It can point to any data type but cannot be dereferenced directly.",
          content: `void* can point to any data type:
\`\`\`c
int num = 42;
float f = 3.14;
char c = 'A';

void *ptr;
ptr = &num;   // OK
ptr = &f;     // OK
ptr = &c;     // OK
\`\`\`

**void* cannot be dereferenced:**
\`\`\`c
void *ptr = &num;
// printf("%d", *ptr);  // ERROR! Can't dereference void*
printf("%d", *(int*)ptr);  // OK: cast first
\`\`\`

**Common uses:**
- memcpy, memset (generic copy functions)
- malloc returns void*
- Generic data structures`,
          codeExamples: [
            {
              id: "ch23-basics",
              title: "Void Pointer Demo",
              description: "Working with void pointers",
              code: { c: `#include <stdio.h>\n\nvoid printAsInt(void *ptr, char type) {\n    if (type == 'i') {\n        printf("As int: %d\\n", *(int*)ptr);\n    } else if (type == 'f') {\n        printf("As float: %.2f\\n", *(float*)ptr);\n    } else if (type == 'c') {\n        printf("As char: %c\\n", *(char*)ptr);\n    }\n}\n\nint main() {\n    int num = 42;\n    float f = 3.14;\n    char c = 'X';\n    \n    void *ptr;\n    \n    ptr = &num;\n    printAsInt(ptr, 'i');\n    \n    ptr = &f;\n    printAsInt(ptr, 'f');\n    \n    ptr = &c;\n    printAsInt(ptr, 'c');\n    \n    return 0;\n}` },
              explanation: "void* must be cast before dereferencing. The type determines how many bytes to read."
            }
          ]
        },
        {
          id: "ch23-mem",
          title: "Memory Functions: memcpy, memset",
          whyItMatters: "memcpy and memset work with void* to copy/set memory regardless of type.",
          content: `memcpy — copy memory bytes:
\`\`\`c
void *memcpy(void *dest, const void *src, size_t n);
// Copies n bytes from src to dest
\`\`\`

\`\`\`c
int arr1[] = {1, 2, 3};
int arr2[3];
memcpy(arr2, arr1, sizeof(arr1));  // Copy whole array
\`\`\`

memset — set memory bytes:
\`\`\`c
void *memset(void *s, int c, size_t n);
// Sets n bytes of s to value c (byte value!)
\`\`\`

\`\`\`c
int arr[5];
memset(arr, 0, sizeof(arr));       // Zero array
memset(arr, -1, sizeof(arr));      // Set to -1 (all bits 1)
memset(arr, 1, sizeof(arr));       // Sets bytes to 1, NOT int 1!
\`\`\``,
          codeExamples: [
            {
              id: "ch23-mem",
              title: "memcpy and memset",
              description: "Generic memory operations",
              code: { c: `#include <stdio.h>\n#include <string.h>\n\nint main() {\n    // memcpy demo\n    int source[] = {10, 20, 30, 40, 50};\n    int dest[5];\n    \n    memcpy(dest, source, sizeof(source));\n    printf("Copied array: \");\n    for (int i = 0; i < 5; i++) printf("%d ", dest[i]);\n    printf("\\n");\n    \n    // memcpy for structs\n    struct { char name[20]; int age; } person1 = {"Alice", 25};\n    struct { char name[20]; int age; } person2;\n    \n    memcpy(&person2, &person1, sizeof(person1));\n    printf("Copied struct: %s, %d\\n\", person2.name, person2.age);\n    \n    // memset demo\n    int arr[5];\n    memset(arr, 0, sizeof(arr));\n    printf("\\nZeroed array: \");\n    for (int i = 0; i < 5; i++) printf("%d ", arr[i]);\n    printf("\\n");\n    \n    return 0;\n}` },
              explanation: "memcpy copies raw bytes — works with any type. memset sets bytes, not values."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          { id: "ch23-q1", type: "mcq", question: "Can you dereference void*?", options: ["Yes", "No - must cast first", "Depends", "Never"], correctAnswer: 1, explanation: "void* cannot be directly dereferenced. Must cast to appropriate type first.", difficulty: 1 },
          { id: "ch23-q2", type: "mcq", question: "What does memset(arr, 1, n) do to int arr[5]?", options: ["Sets to 1", "Sets to 0101...", "Error", "Sets to 1.0"], correctAnswer: 1, explanation: "memset sets individual bytes. int 1 becomes bytes 01, not integer 1.", difficulty: 2 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Void declare", value: "void *ptr" },
        { label: "Cast before use", value: "*(int*)ptr" },
        { label: "Copy bytes", value: "memcpy(dest, src, n)" },
        { label: "Set bytes", value: "memset(s, byte, n)" },
        { label: "malloc", value: "returns void*" }
      ]
    },

    // Chapter 24: NULL Pointers
    {
      id: "c-ch-24",
      number: 24,
      partLabel: "PART 3: POINTERS — THE HEART OF C",
      title: "NULL Pointers and Safety",
      subtitle: "Proper pointer initialization and checks",
      difficulty: "Intermediate",
      estimatedMinutes: 35,
      xpReward: 110,
      prerequisites: ["c-ch-23"],
      learningObjectives: [
        "Initialize pointers to NULL",
        "Check for NULL before use",
        "Handle NULL returns",
        "Prevent crashes from NULL"
      ],
      sections: [
        {
          id: "ch24-null",
          title: "What Is NULL?",
          whyItMatters: "NULL represents 'points to nothing'. Checking for NULL prevents crashes from dereferencing invalid pointers.",
          content: `NULL is a special pointer value meaning 'no valid address':
\`\`\`c
int *ptr = NULL;  // Good: explicitly no address
int *ptr2 = 0;    // Equivalent: 0 is NULL
\`\`\`

**NULL vs uninitialized:**
\`\`\`c
int *p1;          // Uninitialized - garbage address, CRASH if used
int *p2 = NULL;   // NULL - safe to check before use
\`\`\`

**Check before dereferencing:**
\`\`\`c
int *ptr = malloc(sizeof(int) * count);
if (ptr == NULL) {
    // Handle allocation failure
    return ERROR;
}
\// Safe to use ptr
free(ptr);
ptr = NULL;  // Prevent dangling pointer
\`\`\``,
          codeExamples: [
            {
              id: "ch24-null",
              title: "NULL Checking",
              description: "Safe NULL handling",
              code: { c: `#include <stdio.h>\n#include <stdlib.h>\n\nvoid process(int *data, int size) {\n    if (data == NULL) {\n        printf("Error: NULL pointer!\\n\");\n        return;\n    }\n    \n    printf("Processing %d elements:\\n\", size);\n    for (int i = 0; i < size; i++) {\n        printf("  %d \", data[i]);\n    }\n    printf("\\n");\n}\n\nint main() {\n    // Simulate allocation failure\n    int *valid = malloc(5 * sizeof(int));\n    int *invalid = NULL;\n    \n    if (valid) {\n        for (int i = 0; i < 5; i++) valid[i] = i * 10;\n    }\n    \n    process(valid, 5);\n    process(invalid, 0);  // Will show error\n    \n    free(valid);  // OK to free NULL? Yes!\n    // free(NULL);  // Does nothing - safe!\n    \n    return 0;\n}` },
              explanation: "Always check for NULL before dereferencing. free(NULL) is safe — it does nothing."
            }
          ]
        },
        {
          id: "ch24-dangling",
          title: "Dangling Pointers",
          whyItMatters: "A dangling pointer points to freed memory. Using it causes undefined behavior — crashes or silent data corruption.",
          content: `Dangling pointer = points to freed/deleted memory:
\`\`\`c
int *ptr = malloc(sizeof(int));
*ptr = 42;
free(ptr);      // ptr now points to freed memory
ptr = NULL;     // MUST set to NULL after free!
// ptr is now a dangling pointer without the NULL fix
\`\`\`

**How to avoid dangling pointers:**
1. Set to NULL after free: ptr = NULL;
2. Check before use: if (ptr != NULL)
3. Use智能 pointers (in C++, not C)
4. Clear reference when freeing

**Double free:**
\`\`\`c
int *p = malloc(10);
free(p);
free(p);  // CRASH! Double free
\`\`\``,
          callouts: [
            {
              type: "warning",
              title: "Set to NULL After Free",
              content: "After free(ptr), always add ptr = NULL;. This prevents use-after-free bugs and double-free crashes."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          { id: "ch24-q1", type: "mcq", question: "What is NULL?", options: ["Zero", "No address", "Empty string", "Error"], correctAnswer: 1, explanation: "NULL means 'points to nothing' — no valid memory address.", difficulty: 1 },
          { id: "ch24-q2", type: "mcq", question: "What happens if you dereference NULL?", options: ["Returns 0", "Crashes", "Returns NULL", "Works fine"], correctAnswer: 1, explanation: "Dereferencing NULL is undefined behavior, usually a crash (segmentation fault).", difficulty: 1 },
          { id: "ch24-q3", type: "mcq", question: "What should you do after free(ptr)?", options: ["Nothing", "Set to NULL", "Set to 0", "Reassign"], correctAnswer: 1, explanation: "Always set ptr = NULL after free to prevent dangling pointer bugs.", difficulty: 1 }
        ],
        passingScore: 2
      },
      cheatSheet: [
        { label: "Initialize", value: "int *p = NULL" },
        { label: "Check", value: "if (p != NULL)" },
        { label: "After free", value: "p = NULL" },
        { label: "free(NULL)", value: "safe - does nothing" },
        { label: "Uninitialized", value: "garbage - crash!" }
      ]
    },

    // Chapter 25: Common Pointer Bugs
    {
      id: "c-ch-25",
      number: 25,
      partLabel: "PART 3: POINTERS — THE HEART OF C",
      title: "Common Pointer Bugs and Debugging",
      subtitle: "Mistakes to avoid and how to find them",
      difficulty: "Intermediate",
      estimatedMinutes: 50,
      xpReward: 140,
      prerequisites: ["c-ch-24"],
      learningObjectives: [
        "Identify common pointer errors",
        "Use Valgrind to find memory bugs",
        "Avoid buffer overflows",
        "Debug pointer issues effectively"
      ],
      sections: [
        {
          id: "ch25-bugs",
          title: "Top Pointer Bugs",
          whyItMatters: "Pointer bugs cause crashes, security vulnerabilities, and subtle data corruption. Knowing them prevents bugs.",
          content: `**1. Uninitialized pointer:**
\`\`\`c
int *ptr;    // Garbage address!
*ptr = 10;   // CRASH
\`\`\`

**2. Dereferencing NULL:**
\`\`\`c
int *ptr = NULL;
*ptr = 10;   // CRASH
\`\`\`

**3. Use after free:**
\`\`\`c
int *p = malloc(4);
free(p);
*p = 10;     // CRASH
\`\`\`

**4. Off-by-one in arrays:**
\`\`\`c
int arr[5];
for (int i = 0; i <= 5; i++) {  // Off by one!
    arr[i] = i;  // arr[5] is out of bounds
}
\`\`\`

**5. Wrong pointer type:**
\`\`\`c
double d = 3.14;
int *p = (int*)&d;
printf("%d", *p);  // Reads wrong amount of bytes
\`\`\``,
          codeExamples: [
            {
              id: "ch25-demo",
              title: "Common Bugs Demo",
              description: "Demonstrating what NOT to do",
              code: { c: `#include <stdio.h>\n#include <stdlib.h>\n\nvoid safeArrayAccess() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    printf("Correct (i < 5): \");\n    for (int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    printf("\\n\");\n}\n\nvoid safePointer() {\n    int *p = NULL;\n    \n    if (p != NULL) {\n        printf("Value: %d\\n", *p);\n    } else {\n        printf("Pointer is NULL, skipping\\n\");\n    }\n    \n    p = malloc(sizeof(int));\n    if (p != NULL) {\n        *p = 42;\n        printf("Value after malloc: %d\\n", *p);\n        free(p);\n        p = NULL;  // Prevent dangling pointer\n    }\n}\n\nint main() {\n    printf("Safe array access:\\n\");\n    safeArrayAccess();\n    \n    printf("\\nSafe pointer handling:\\n\");\n    safePointer();\n    \n    printf("\\nNever do this (commented to prevent crash):\\n\");\n    printf("  - Uninitialized pointer dereference\\n\");\n    printf("  - NULL pointer dereference\\n\");\n    printf("  - Use after free\\n\");\n    \n    return 0;\n}` },
              explanation: "Always initialize pointers to NULL, check before use, set to NULL after free."
            }
          ]
        },
        {
          id: "ch25-valgrind",
          title: "Debugging with Valgrind",
          whyItMatters: "Valgrind detects memory leaks, use-after-free, and invalid memory access. Essential C debugging tool.",
          content: `Valgrind is a memory debugging tool:

\`\`\`bash
# Run with valgrind
valgrind --leak-check=full ./program

# Check for leaks:
valgrind --show-leak-kinds=all ./program

# Track all allocations:
valgrind --track-origins=yes ./program
\`\`\`

**Common Valgrind messages:**
- Invalid read/write — buffer overflow or use-after-free
- Memory leaks — allocated but never freed
- Invalid free — double free or bad pointer
- Use of uninitialized values — reading before write

\`\`\`c
// Check in code:
#include <assert.h>
ptr = malloc(size);
assert(ptr != NULL);  // Abort if allocation failed
\`\`\``,
          codeExamples: [
            {
              id: "ch25-valgrind",
              title: "Valgrind Usage",
              description: "How to use Valgrind",
              code: { c: `/* Example C file to run with valgrind */\n#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint main() {\n    // This has a memory leak - intentional for demo\n    char *leaked = malloc(100);\n    strcpy(leaked, \"This is leaked memory\");\n    printf(\"Leaked: %s\\n\", leaked);\n    // Missing: free(leaked);\n    \n    // Proper allocation\n    int *arr = malloc(5 * sizeof(int));\n    for (int i = 0; i < 5; i++) arr[i] = i;\n    free(arr);  // Properly freed\n    \n    // Run: valgrind --leak-check=full ./program\n    // See: definitely lost: 100 bytes\n    \n    return 0;\n}` },
              explanation: "Run valgrind to find leaks. It shows which lines allocated memory that was never freed."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          { id: "ch25-q1", type: "mcq", question: "What causes use-after-free?", options: ["NULL check", "Free without NULL", "Free then use", "Malloc failure"], correctAnswer: 2, explanation: "Use-after-free happens when you access memory after free() without setting pointer to NULL.", difficulty: 1 },
          { id: "ch25-q2", type: "mcq", question: "What tool finds memory leaks?", options: ["gcc", "valgrind", "make", "git"], correctAnswer: 1, explanation: "Valgrind is the standard tool for detecting memory leaks and memory errors in C.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Init all", value: "int *p = NULL" },
        { label: "Check NULL", value: "if (p != NULL)" },
        { label: "After free", value: "p = NULL" },
        { label: "Bounds", value: "i < size, not <=" },
        { label: "Tool", value: "valgrind --leak-check=full" }
      ]
    },

    // Chapter 26: Const Pointers
    {
      id: "c-ch-26",
      number: 26,
      partLabel: "PART 3: POINTERS — THE HEART OF C",
      title: "Const with Pointers",
      subtitle: "Read-only pointers and data",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 130,
      prerequisites: ["c-ch-25"],
      learningObjectives: [
        "Use const with pointers correctly",
        "Understand pointer-to-const vs const pointer",
        "Write functions that protect data",
        "Use const for API contracts"
      ],
      sections: [
        {
          id: "ch26-types",
          title: "Four Types of Const Pointers",
          whyItMatters: "const communicates intent and prevents accidental modification. It's a contract that makes code safer.",
          content: `Four combinations of const and pointers:

1. **const data, variable pointer:**
   \`\`\`c
   const int *p = &num;  // Can't modify *p
   \`\`\`

2. **Variable data, const pointer:**
   \`\`\`c
   int * const p = &num;  // Can't change p
   \`\`\`

3. **const data, const pointer:**
   \`\`\`c
   const int * const p = &num;  // Can't change either
   \`\`\`

4. **Normal (neither const):**
   \`\`\`c
   int *p = &num;  // Can change both
   \`\`\`

**Tip: read right-to-left**
\`const int *p\` → "p is a pointer to int that is const"
\`int * const p\` → "p is a const pointer to int"`,
          codeExamples: [
            {
              id: "ch26-demo",
              title: "Const Pointer Types",
              description: "All four combinations",
              code: { c: `#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20;\n    \n    // 1. Pointer to const (can't modify data)\n    const int *p1 = &a;\n    // *p1 = 30;  // ERROR! Can't modify\n    printf("p1 points to: %d\\n", *p1);\n    p1 = &b;  // OK, can change pointer\n    \n    // 2. Const pointer (can't change pointer)\n    int * const p2 = &a;\n    *p2 = 30;  // OK, can modify data\n    printf("a is now: %d\\n", a);\n    // p2 = &b;  // ERROR! Can't change pointer\n    \n    // 3. Const pointer to const\n    const int * const p3 = &a;\n    // *p3 = 40;  // ERROR!\n    // p3 = &b;   // ERROR!\n    printf("p3 points to: %d\\n", *p3);\n    \n    // 4. Normal pointer\n    int *p4 = &a;\n    *p4 = 50;  // OK\n    p4 = &b;   // OK\n    \n    printf("\\nFinal values: a=%d, b=%d\\n", a, b);\n    \n    return 0;\n}` },
              explanation: "const protects either data (*p = const) or pointer (p = const) or both."
            }
          ]
        },
        {
          id: "ch26-functions",
          title: "const in Function Parameters",
          whyItMatters: "Function parameters with const document what won't change. They help compilers optimize and prevent bugs.",
          content: `Use const in function parameters for safety:
\`\`\`c
// Won't modify array
void printArray(const int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);  // Can read
        // arr[i] = 0;          // Can't modify
    }
}

// Won't modify pointer
void processString(const char *str) {
    while (*str) {
        putchar(*str);  // Can read
        str++;          // Can move pointer
        // *str = 'X';   // Can't modify
    }
}
\`\`\`

**Benefits:**
1. Compiler catches accidental modifications
2. Documents intent to caller
3. Enables compiler optimizations
4. Shows which data is read-only`,
          codeExamples: [
            {
              id: "ch26-func",
              title: "const in Functions",
              description: "Protecting function parameters",
              code: { c: `#include <stdio.h>\n#include <string.h>\n\n// Can't modify input data\nint sumArray(const int arr[], int n) {\n    int sum = 0;\n    for (int i = 0; i < n; i++) {\n        sum += arr[i];\n        // arr[i] = 0;  // ERROR! Can't modify\n    }\n    return sum;\n}\n\n// Can't modify string\nint stringLength(const char *str) {\n    int len = 0;\n    while (*str != '\\0') {\n        len++;\n        str++;\n        // *str = 'X';  // ERROR! Can't modify\n    }\n    return len;\n}\n\n// Can't modify pointer or data\nvoid printUpper(const char * const str) {\n    while (*str) {\n        char c = *str;\n        if (c >= 'a' && c <= 'z') {\n            putchar(c - 'a' + 'A');\n        } else {\n            putchar(c);\n        }\n        str++;\n    }\n}\n\nint main() {\n    int nums[] = {1, 2, 3, 4, 5};\n    printf("Sum: %d\\n", sumArray(nums, 5));\n    \n    const char *text = "Hello World";\n    printf("Length: %d\\n", stringLength(text));\n    \n    printf("Upper: "); printUpper(text);\n    printf("\\n");\n    \n    return 0;\n}` },
              explanation: "const on parameters protects callers — they know their data won't be modified."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          { id: "ch26-q1", type: "mcq", question: "What does const int *p mean?", options: ["Can't change p", "Can't change *p", "Can't change either", "Can change both"], correctAnswer: 1, explanation: "const int* means pointer to const int — can change pointer, not the data.", difficulty: 2 },
          { id: "ch26-q2", type: "mcq", question: "Why use const in parameters?", options: ["Speed", "Document intent + compiler optimization", "Memory", "Required"], correctAnswer: 1, explanation: "const documents what won't change and enables compiler optimizations.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Read only", value: "const int *p" },
        { label: "Fixed pointer", value: "int * const p" },
        { label: "Both", value: "const int * const p" },
        { label: "In function", value: "void foo(const int *arr)" },
        { label: "Read string", value: "void foo(const char *str)" }
      ]
    },

    // Chapter 27: Pointer Review
    {
      id: "c-ch-27",
      number: 27,
      partLabel: "PART 3: POINTERS — THE HEART OF C",
      title: "Pointers — Complete Review",
      subtitle: "Bringing it all together",
      difficulty: "Intermediate",
      estimatedMinutes: 60,
      xpReward: 150,
      prerequisites: ["c-ch-26"],
      learningObjectives: [
        "Master pointer fundamentals",
        "Use pointers with arrays and functions",
        "Avoid common pointer mistakes",
        "Apply pointers in real programs"
      ],
      sections: [
        {
          id: "ch27-summary",
          title: "Pointer Concepts Summary",
          whyItMatters: "Pointers are the heart of C. Mastering them makes you a C programmer.",
          content: `**Core concepts:**
- Pointer: variable storing address
- &: address-of operator
- *: dereference operator
- NULL: no valid address

**Pointer arithmetic:**
- ptr + n moves by n × sizeof(type) bytes
- ptr++ moves to next element
- &arr[0] equals arr (array decay)

**Pointer types:**
\`\`\`c
int *p;           // Variable pointer to int
const int *p;     // Pointer to const int
int * const p;    // Const pointer to int
const int * const p;  // Const pointer to const int
void *p;          // Generic pointer
\`\`\`

**Function pointers:**
\`\`\`c
int (*fp)(int, int);  // Function pointer
fp = func;           // Assign
fp(5, 3);            // Call
\`\`\`

**Best practices:**
1. Initialize to NULL
2. Check before dereference
3. Set to NULL after free
4. Use valgrind to find bugs`,
          codeExamples: [
            {
              id: "ch27-demo",
              title: "Complete Pointer Demo",
              description: "All concepts together",
              code: { c: `#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n// Function pointer example\nint add(int a, int b) { return a + b; }\nint sub(int a, int b) { return a - b; }\n\n// Pointer to function\ntypedef int (*Operation)(int, int);\n\n// Generic swap\nvoid swap(void *a, void *b, size_t size) {\n    void *temp = malloc(size);\n    memcpy(temp, a, size);\n    memcpy(a, b, size);\n    memcpy(b, temp, size);\n    free(temp);\n}\n\nint main() {\n    // Function pointers\n    Operation ops[] = {add, sub};\n    printf("5 + 3 = %d\\n\", ops[0](5, 3));\n    printf("5 - 3 = %d\\n\", ops[1](5, 3));\n    \n    // Generic swap\n    int x = 10, y = 20;\n    printf("\\nBefore swap: x=%d, y=%d\\n", x, y);\n    swap(&x, &y, sizeof(int));\n    printf("After swap:  x=%d, y=%d\\n", x, y);\n    \n    // String pointer array\n    const char *names[] = {"Alice", "Bob", "Charlie"};\n    printf("\\nNames:\\n");\n    for (int i = 0; i < 3; i++) {\n        printf("  %s\\n", names[i]);\n    }\n    \n    // Const pointer\n    const int *p = &x;  // Can't modify *p\n    printf("\\nValue through const pointer: %d\\n", *p);\n    \n    return 0;\n}` },
              explanation: "This demo shows function pointers, void*, generic programming, and const — all pointer concepts."
            }
          ]
        },
        {
          id: "ch27-exercises",
          title: "Practice Exercises",
          whyItMatters: "Practice reinforces learning. Try these exercises to solidify pointer concepts.",
          content: `**Exercise 1:** Write a function that reverses an array using pointers (not indices).

**Exercise 2:** Implement a function that finds a string in an array of strings using double pointers.

**Exercise 3:** Create a function pointer array that implements a simple calculator (+, -, *, /).

**Exercise 4:** Write a generic function that finds the maximum element in any array using void* and a comparison callback.

**Exercise 5:** Implement a simple callback system where you pass a function to transform each element of an array.

**Answers (conceptual approach):**
1. Use two pointers, start and end, swap and move toward center
2. Use char** (pointer to string), loop through array
3. int (*calc[])(int,int) = {add, sub, mul, div}
4. void* max = arr[0]; loop with callback comparison
5. Pass function pointer, apply to each element`,
          codeExamples: [
            {
              id: "ch27-ex1",
              title: "Reverse Array with Pointers",
              description: "Exercise 1 solution",
              code: { c: `#include <stdio.h>\n\nvoid reverse(int *start, int *end) {\n    while (start < end) {\n        int temp = *start;\n        *start = *end;\n        *end = temp;\n        start++;\n        end--;\n    }\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    \n    printf("Before: \");\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n    \n    // Pass start and end pointers\n    reverse(arr, arr + n - 1);\n    \n    printf("After:  \");\n    for (int i = 0; i < n; i++) printf("%d ", arr[i]);\n    printf("\\n");\n    \n    return 0;\n}` },
              explanation: "Uses two pointers that move toward each other, swapping elements until they meet."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          { id: "ch27-q1", type: "mcq", question: "What is the key to pointers?", options: ["Math", "Addresses and dereferencing", "Loops", "Memory allocation"], correctAnswer: 1, explanation: "Pointers are about storing addresses and dereferencing to access values.", difficulty: 1 },
          { id: "ch27-q2", type: "mcq", question: "What should you ALWAYS do with pointers?", options: ["Malloc", "Initialize, check, NULL after free", "Print", "Compare"], correctAnswer: 1, explanation: "Best practice: initialize to NULL, check before use, set to NULL after free.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Pointer", value: "stores address" },
        { label: "&", value: "get address" },
        { label: "*", value: "dereference" },
        { label: "Arithmetic", value: "scales by type" },
        { label: "NULL", value: "no address" },
        { label: "After free", value: "ptr = NULL" },
        { label: "Debug", value: "valgrind" }
      ]
    },

    // Chapter 28: Pointers Practice Project
    {
      id: "c-ch-28",
      number: 28,
      partLabel: "PART 3: POINTERS — THE HEART OF C",
      title: "Pointers Practice Project — String Library",
      subtitle: "Build a mini string library with pointers",
      difficulty: "Intermediate",
      estimatedMinutes: 75,
      xpReward: 180,
      prerequisites: ["c-ch-27"],
      learningObjectives: [
        "Build a practical string library",
        "Use pointers throughout",
        "Implement common string functions",
        "Apply all pointer concepts"
      ],
      sections: [
        {
          id: "ch28-intro",
          title: "Project Overview",
          whyItMatters: "Building a string library from scratch teaches you exactly how C's string functions work under the hood.",
          content: `**Goal:** Implement common string functions using only pointers (no array notation).

**Functions to implement:**
1. my_strlen — string length
2. my_strcpy — string copy
3. my_strcat — string concatenation
4. my_strcmp — string comparison
5. my_strchr — find character
6. my_strstr — find substring

**Rules:**
- Use pointer arithmetic only (no arr[i])
- No standard string.h functions for your versions
- Must handle edge cases

**Bonus challenges:**
- my_atoi — string to int
- my_reverse — reverse string
- my_trim — trim whitespace`,
          content: `**Goal:** Implement common string functions using only pointers (no array notation).

**Functions to implement:**
1. my_strlen — string length
2. my_strcpy — string copy
3. my_strcat — string concatenation
4. my_strcmp — string comparison
5. my_strchr — find character
6. my_strstr — find substring

**Rules:**
- Use pointer arithmetic only (no arr[i])
- No standard string.h functions for your versions
- Must handle edge cases

**Bonus challenges:**
- my_atoi — string to int
- my_reverse — reverse string
- my_trim — trim whitespace`
        },
        {
          id: "ch28-solution",
          title: "Solution Code",
          whyItMatters: "Study this solution to understand how pointer-only string manipulation works.",
          content: `Complete string library implementation:
\`\`\`c
// String length
size_t my_strlen(const char *s) {
    const char *p = s;
    while (*p) p++;
    return p - s;
}

// String copy
char *my_strcpy(char *dest, const char *src) {
    char *d = dest;
    while (*src) *d++ = *src++;
    *d = '\\0';
    return dest;
}

// String compare
int my_strcmp(const char *s1, const char *s2) {
    while (*s1 && *s2) {
        if (*s1 != *s2) return *s1 - *s2;
        s1++; s2++;
    }
    return *s1 - *s2;
}
\`\`\``,
          codeExamples: [
            {
              id: "ch28-complete",
              title: "Complete String Library",
              description: "Pointer-based string functions",
              code: { c: `#include <stdio.h>\n#include <assert.h>\n\n// === MY STRING LIBRARY ===\n\nsize_t my_strlen(const char *s) {\n    size_t len = 0;\n    while (*s) { len++; s++; }\n    return len;\n}\n\nchar *my_strcpy(char *dest, const char *src) {\n    char *d = dest;\n    while (*src) *d++ = *src++;\n    *d = '\\0';\n    return dest;\n}\n\nchar *my_strcat(char *dest, const char *src) {\n    char *d = dest;\n    while (*d) d++;\n    while (*src) *d++ = *src++;\n    *d = '\\0';\n    return dest;\n}\n\nint my_strcmp(const char *s1, const char *s2) {\n    while (*s1 && *s2) {\n        if (*s1 != *s2) return *s1 - *s2;\n        s1++; s2++;\n    }\n    return *s1 - *s2;\n}\n\nchar *my_strchr(const char *s, char c) {\n    while (*s) {\n        if (*s == c) return (char*)s;\n        s++;\n    }\n    return NULL;\n}\n\nint my_atoi(const char *s) {\n    int result = 0, sign = 1;\n    if (*s == '-') { sign = -1; s++; }\n    while (*s >= '0' && *s <= '9') {\n        result = result * 10 + (*s - '0');\n        s++;\n    }\n    return sign * result;\n}\n\n// === TESTS ===\n\nint main() {\n    // Test my_strlen\n    assert(my_strlen("Hello") == 5);\n    assert(my_strlen("") == 0);\n    printf("my_strlen: PASS\\n");\n    \n    // Test my_strcpy\n    char buf[20];\n    my_strcpy(buf, "Hello");\n    assert(my_strcmp(buf, "Hello") == 0);\n    printf("my_strcpy: PASS\\n");\n    \n    // Test my_strcat\n    my_strcpy(buf, "Hello");\n    my_strcat(buf, " World");\n    assert(my_strcmp(buf, "Hello World") == 0);\n    printf("my_strcat: PASS\\n");\n    \n    // Test my_strcmp\n    assert(my_strcmp("abc", "abc") == 0);\n    assert(my_strcmp("abc", "abd") < 0);\n    assert(my_strcmp("abd", "abc") > 0);\n    printf("my_strcmp: PASS\\n");\n    \n    // Test my_strchr\n    assert(my_strchr("Hello", 'l') == buf + 2);\n    assert(my_strchr("Hello", 'z') == NULL);\n    printf("my_strchr: PASS\\n");\n    \n    // Test my_atoi\n    assert(my_atoi("123") == 123);\n    assert(my_atoi("-45") == -45);\n    printf("my_atoi: PASS\\n");\n    \n    printf("\\n✓ All tests passed!\\n");\n    return 0;\n}` },
              explanation: "This library demonstrates pointer-only string manipulation. Every function walks through memory byte by byte using pointer arithmetic."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          { id: "ch28-q1", type: "mcq", question: "Why implement our own string functions?", options: ["Speed", "Learn pointers deeply", "Replace string.h", "Better features"], correctAnswer: 1, explanation: "Implementing string functions teaches pointer manipulation and reveals how standard functions work.", difficulty: 1 },
          { id: "ch28-q2", type: "mcq", question: "What character ends a C string?", options: ["'0'", "'\\\\0'", "' '", "Length"], correctAnswer: 1, explanation: "The null terminator '\\0' marks the end of a C string.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "strlen pattern", value: "while(*s) s++" },
        { label: "strcpy pattern", value: "*d++ = *s++" },
        { label: "strcmp pattern", value: "while(*s1 && *s2)" },
        { label: "strchr pattern", value: "while(*s) if(*s==c)" },
        { label: "Key", value: "*s for current, s++ to advance" }
      ]
    },

    // Chapter 29: Stack vs Heap
    {
      id: "c-ch-29",
      number: 29,
      partLabel: "PART 4: MEMORY MANAGEMENT",
      title: "Stack vs Heap — Understanding Memory",
      subtitle: "Two ways to allocate memory",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 140,
      prerequisites: ["c-ch-28"],
      learningObjectives: [
        "Understand stack vs heap memory",
        "Know when to use each",
        "Understand memory lifetime",
        "Avoid stack overflow"
      ],
      sections: [
        {
          id: "ch29-stack",
          title: "Stack Memory",
          whyItMatters: "Stack is fast and automatic but limited. Understanding it prevents overflow and helps debug crashes.",
          content: `Stack: Automatic memory managed by compiler
- Fast allocation/deallocation
- Limited size (usually 1-8 MB)
- LIFO (Last In, First Out)
- Variables are automatic

\`\`\`c
void function() {
    int local = 10;      // Stack: automatic
    int arr[1000];       // Stack: 4KB
    // Automatically freed when function returns
}
\`\`\`

**Stack characteristics:**
- Grows downward (addresses decrease)
- Each function call adds a frame
- Local variables live in frame
- Stack overflow happens when too deep or too large`,
          codeExamples: [
            {
              id: "ch29-stack-demo",
              title: "Stack Memory Demo",
              description: "Understanding stack behavior",
              code: { c: `#include <stdio.h>\n\nvoid functionA() {\n    int a = 10;\n    printf("A: &a = %p, value = %d\\n", (void*)&a, a);\n}\n\nvoid functionB() {\n    int b = 20;\n    printf("B: &b = %p, value = %d\\n", (void*)&b, b);\n    functionA();\n}\n\nvoid functionC() {\n    int c = 30;\n    printf("C: &c = %p, value = %d\\n", (void*)&c, c);\n    functionB();\n}\n\nint main() {\n    printf("Stack grows DOWN (addresses decrease):\\n\\n");\n    functionC();\n    return 0;\n}` },
              explanation: "Stack addresses decrease as we go deeper. Each function adds its own frame."
            }
          ]
        },
        {
          id: "ch29-heap",
          title: "Heap Memory",
          whyItMatters: "Heap is for dynamic, large, or persistent data. But you must manage it yourself (malloc/free).",
          content: `Heap: Dynamic memory you control
- Larger (limited by RAM, not stack)
- Slower allocation/deallocation
- Manual management (malloc/free)
- Persists until explicitly freed

\`\`\`c
void function() {
    int *p = malloc(sizeof(int));
    *p = 42;
    free(p);
    p = NULL;
}
\`\`\``,
          codeExamples: [
            {
              id: "ch29-heap-demo",
              title: "Heap Memory Demo",
              description: "Dynamic allocation",
              code: { c: `#include <stdio.h>\n#include <stdlib.h>\n\nvoid heapDemo() {\n    printf("Heap allocation:\\n");\n    int *p1 = malloc(sizeof(int));\n    printf("  int*: %p\\n", (void*)p1);\n    double *p2 = malloc(sizeof(double));\n    printf("  double*: %p\\n", (void*)p2);\n    free(p1);\n    free(p2);\n}\n\nint main() {\n    heapDemo();\n    printf("Heap addresses increase over time\\n");\n    return 0;\n}` },
              explanation: "Heap addresses increase as you allocate."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          { id: "ch29-q1", type: "mcq", question: "Stack memory is freed when?", options: ["malloc", "Function returns", "free called", "Program ends"], correctAnswer: 1, explanation: "Stack variables are automatically freed when the function returns.", difficulty: 1 },
          { id: "ch29-q2", type: "mcq", question: "Heap memory is freed when?", options: ["Function returns", "malloc", "free() called", "Automatically"], correctAnswer: 2, explanation: "Heap memory must be explicitly freed with free().", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Stack", value: "Automatic, fast, limited" },
        { label: "Heap", value: "Manual, larger, persistent" },
        { label: "Stack alloc", value: "int x;" },
        { label: "Heap alloc", value: "int *p = malloc(size)" },
        { label: "Free heap", value: "free(p)" }
      ]
    },

    // Chapter 30: malloc, calloc, realloc
    {
      id: "c-ch-30",
      number: 30,
      partLabel: "PART 4: MEMORY MANAGEMENT",
      title: "malloc, calloc, realloc — Dynamic Allocation",
      subtitle: "Allocating memory on the heap",
      difficulty: "Intermediate",
      estimatedMinutes: 50,
      xpReward: 150,
      prerequisites: ["c-ch-29"],
      learningObjectives: [
        "Use malloc for allocation",
        "Use calloc for zeroed allocation",
        "Use realloc to resize memory",
        "Handle allocation failures"
      ],
      sections: [
        {
          id: "ch30-malloc",
          title: "malloc — Basic Allocation",
          whyItMatters: "malloc is the primary way to allocate dynamic memory. Understanding it is essential for any real C program.",
          content: `malloc allocates memory on the heap:
\`\`\`c
void *malloc(size_t size);
\`\`\`

**Basic usage:**
\`\`\`c
int *arr = malloc(5 * sizeof(int));
if (arr == NULL) return ERROR;
free(arr);
\`\`\``,
          codeExamples: [
            {
              id: "ch30-malloc-demo",
              title: "malloc Usage",
              description: "Dynamic array allocation",
              code: { c: `#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *arr = malloc(5 * sizeof(int));\n    if (arr == NULL) return 1;\n    \n    for (int i = 0; i < 5; i++) arr[i] = (i + 1) * 10;\n    for (int i = 0; i < 5; i++) printf("%d ", arr[i]);\n    printf("\\n");\n    \n    free(arr);\n    return 0;\n}` },
              explanation: "malloc returns uninitialized memory. Always check for NULL."
            }
          ]
        },
        {
          id: "ch30-calloc",
          title: "calloc — Zeroed Allocation",
          whyItMatters: "calloc allocates and zeroes memory. Better for arrays since you don't need manual initialization.",
          content: `calloc allocates zeroed memory:
\`\`\`c
void *calloc(size_t nmemb, size_t size);
\`\`\`

\`\`\`c
int *a = malloc(5 * sizeof(int));  // Garbage
int *b = calloc(5, sizeof(int));   // All zeros
\`\`\``
        },
        {
          id: "ch30-realloc",
          title: "realloc — Resize Memory",
          whyItMatters: "realloc lets you grow or shrink memory. Essential for dynamic arrays.",
          content: `realloc changes the size of allocated memory:
\`\`\`c
void *realloc(void *ptr, size_t size);
\`\`\`

Common pattern - grow array:
\`\`\`c
arr = realloc(arr, new_size * sizeof(int));
if (arr == NULL) return ERROR;
\`\`\``
        }
      ],
      quiz: {
        questions: [
          { id: "ch30-q1", type: "mcq", question: "What does malloc return on failure?", options: ["0", "NULL", "Garbage", "Error code"], correctAnswer: 1, explanation: "malloc returns NULL when allocation fails.", difficulty: 1 },
          { id: "ch30-q2", type: "mcq", question: "What does calloc do that malloc doesn't?", options: ["Allocates", "Returns pointer", "Zeros memory", "Handles errors"], correctAnswer: 2, explanation: "calloc zeros the allocated memory, malloc leaves it uninitialized.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "malloc", value: "void *malloc(size)" },
        { label: "calloc", value: "void *calloc(n, size)" },
        { label: "realloc", value: "void *realloc(ptr, size)" },
        { label: "free", value: "free(ptr)" },
        { label: "Always check", value: "if (ptr == NULL)" }
      ]
    },

    // Chapter 31: Memory Leaks
    {
      id: "c-ch-31",
      number: 31,
      partLabel: "PART 4: MEMORY MANAGEMENT",
      title: "Memory Leaks — Prevention and Detection",
      subtitle: "Finding lost memory",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 140,
      prerequisites: ["c-ch-30"],
      learningObjectives: [
        "Understand what memory leaks are",
        "Identify leak causes",
        "Use valgrind to detect leaks",
        "Apply leak prevention patterns"
      ],
      sections: [
        {
          id: "ch31-what",
          title: "What Is a Memory Leak?",
          whyItMatters: "Memory leaks cause programs to consume more and more RAM until they crash.",
          content: `Memory leak: Allocated memory that is no longer accessible but not freed.
\`\`\`c
void leak() {
    int *p = malloc(100);
    if (error) return;  // LEAK!
    free(p);
}
\`\`\``
        }
      ],
      quiz: {
        questions: [
          { id: "ch31-q1", type: "mcq", question: "What is a memory leak?", options: ["Wrong memory access", "Allocated memory not freed", "Buffer overflow", "Stack overflow"], correctAnswer: 1, explanation: "A memory leak is when allocated memory is no longer accessible and not freed.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Rule", value: "Every malloc needs free" },
        { label: "Before reassign", value: "free(old); p = malloc(...)" },
        { label: "Detect", value: "valgrind --leak-check=full" }
      ]
    },

    // Chapter 32: Buffer Overflows
    {
      id: "c-ch-32",
      number: 32,
      partLabel: "PART 4: MEMORY MANAGEMENT",
      title: "Buffer Overflows — Causes and Prevention",
      subtitle: "Writing outside allocated memory",
      difficulty: "Intermediate",
      estimatedMinutes: 50,
      xpReward: 150,
      prerequisites: ["c-ch-31"],
      learningObjectives: [
        "Understand buffer overflows",
        "Recognize overflow vulnerabilities",
        "Use safe string functions",
        "Implement bounds checking"
      ],
      sections: [
        {
          id: "ch32-what",
          title: "What Is a Buffer Overflow?",
          whyItMatters: "Buffer overflows are the #1 cause of security vulnerabilities.",
          content: `Buffer overflow: Writing beyond allocated memory bounds.
\`\`\`c
char buf[5];
strcpy(buf, "Hello!");  // OVERFLOW!
\`\`\``
        }
      ],
      quiz: {
        questions: [
          { id: "ch32-q1", type: "mcq", question: "What causes buffer overflow?", options: ["NULL pointer", "Writing beyond bounds", "Stack overflow", "Memory leak"], correctAnswer: 1, explanation: "Buffer overflow is writing past the end of allocated memory.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Unsafe", value: "strcpy, gets, sprintf" },
        { label: "Safe", value: "strncpy, fgets, snprintf" }
      ]
    },

    // Chapter 33: Dynamic Arrays
    {
      id: "c-ch-33",
      number: 33,
      partLabel: "PART 4: MEMORY MANAGEMENT",
      title: "Dynamic Arrays — Implementation",
      subtitle: "Building resizable arrays",
      difficulty: "Intermediate",
      estimatedMinutes: 55,
      xpReward: 160,
      prerequisites: ["c-ch-32"],
      learningObjectives: [
        "Implement a dynamic array struct",
        "Add growth strategy",
        "Handle push/pop operations",
        "Manage memory properly"
      ],
      sections: [
        {
          id: "ch33-struct",
          title: "Dynamic Array Structure",
          whyItMatters: "Dynamic arrays are the foundation of many data structures.",
          content: `**Dynamic array struct:**
\`\`\`c
typedef struct {
    int *data;
    size_t size;
    size_t capacity;
} DynamicArray;
\`\`\``
        }
      ],
      quiz: {
        questions: [
          { id: "ch33-q1", type: "mcq", question: "When should dynamic array grow?", options: ["Every push", "When full", "Never", "At start"], correctAnswer: 1, explanation: "Grow when capacity is reached. Double capacity gives amortized O(1) push.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Struct", value: "data, size, capacity" },
        { label: "Grow", value: "capacity *= 2" },
        { label: "Push", value: "realloc if full, copy element" }
      ]
    },

    // Chapter 34: Valgrind
    {
      id: "c-ch-34",
      number: 34,
      partLabel: "PART 4: MEMORY MANAGEMENT",
      title: "Valgrind — Memory Debugging",
      subtitle: "Finding memory bugs automatically",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 140,
      prerequisites: ["c-ch-33"],
      learningObjectives: [
        "Install and use valgrind",
        "Interpret valgrind output",
        "Find leaks and invalid access",
        "Fix memory errors"
      ],
      sections: [
        {
          id: "ch34-install",
          title: "Installing and Running Valgrind",
          whyItMatters: "Valgrind catches memory bugs that would otherwise cause crashes or security issues.",
          content: `**Run:**
\`\`\`bash
valgrind --leak-check=full ./program
valgrind --track-origins=yes ./program
\`\`\``
        }
      ],
      quiz: {
        questions: [
          { id: "ch34-q1", type: "mcq", question: "What command finds memory leaks?", options: ["gcc", "valgrind --leak-check=full", "make", "gdb"], correctAnswer: 1, explanation: "valgrind --leak-check=full detects memory leaks.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Run", value: "valgrind --leak-check=full ./prog" },
        { label: "Track origins", value: "--track-origins=yes" },
        { label: "Definitely lost", value: "Memory leak" }
      ]
    },

    // Chapter 35: Safe Memory Patterns
    {
      id: "c-ch-35",
      number: 35,
      partLabel: "PART 4: MEMORY MANAGEMENT",
      title: "Safe Memory Management Patterns",
      subtitle: "Best practices for memory safety",
      difficulty: "Intermediate",
      estimatedMinutes: 50,
      xpReward: 150,
      prerequisites: ["c-ch-34"],
      learningObjectives: [
        "Apply ownership patterns",
        "Use wrapper functions",
        "Implement cleanup guards",
        "Write leak-free code"
      ],
      sections: [
        {
          id: "ch35-ownership",
          title: "Ownership Pattern",
          whyItMatters: "Clear ownership prevents double-free and leak bugs.",
          content: `**Ownership rules:**
1. Every allocation has exactly one owner
2. Owner is responsible for freeing
3. Transfer ownership explicitly
4. Don't free what you don't own`
        }
      ],
      quiz: {
        questions: [
          { id: "ch35-q1", type: "mcq", question: "What is the ownership pattern?", options: ["Everyone frees", "One owner per resource", "No free", "Auto free"], correctAnswer: 1, explanation: "Each resource has exactly one owner responsible for freeing it.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Rule", value: "One owner, clear transfer" },
        { label: "Factory", value: "malloc + return" },
        { label: "Cleanup", value: "free all owned resources" }
      ]
    },

    // Chapter 36: Memory Practice Project
    {
      id: "c-ch-36",
      number: 36,
      partLabel: "PART 4: MEMORY MANAGEMENT",
      title: "Memory Practice — Allocator Simulation",
      subtitle: "Build a simple memory allocator",
      difficulty: "Advanced",
      estimatedMinutes: 90,
      xpReward: 200,
      prerequisites: ["c-ch-35"],
      learningObjectives: [
        "Understand memory allocation internals",
        "Implement basic allocator",
        "Handle fragmentation",
        "Apply all memory concepts"
      ],
      sections: [
        {
          id: "ch36-concept",
          title: "Simple Allocator Design",
          whyItMatters: "Building an allocator teaches exactly how malloc works under the hood.",
          content: `**Allocator design:**
- Preallocate a large block
- Track free/used blocks
- Find free block of suitable size
- Split block on allocation
- Coalesce on free`
        }
      ],
      quiz: {
        questions: [
          { id: "ch36-q1", type: "mcq", question: "What does allocator track?", options: ["CPU", "Free/used blocks", "Files", "Network"], correctAnswer: 1, explanation: "Memory allocators track which blocks are free and which are used.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Block", value: "size + free flag" },
        { label: "Free list", value: "linked list of blocks" },
        { label: "Allocate", value: "find fit, mark used" }
      ]
    },

    // Chapter 37: Structures Part 1
    {
      id: "c-ch-37",
      number: 37,
      partLabel: "PART 5: STRUCTURES AND UNIONS",
      title: "Structures — Basic Concepts",
      subtitle: "Creating custom data types",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 130,
      prerequisites: ["c-ch-36"],
      learningObjectives: [
        "Define and use structures",
        "Access structure members",
        "Initialize structures",
        "Understand memory layout"
      ],
      sections: [
        {
          id: "ch37-basics",
          title: "Structure Fundamentals",
          whyItMatters: "Structures group related data together. Essential for representing real-world entities.",
          content: `**Define a structure:**
\`\`\`c
struct Person {
    char name[50];
    int age;
    float height;
};
\`\`\`

**Declare and use:**
\`\`\`c
struct Person p1 = {"Alice", 25, 5.6f};
p1.age = 30;
\`\`\``
        }
      ],
      quiz: {
        questions: [
          { id: "ch37-q1", type: "mcq", question: "How do you access struct member?", options: [".member", "->member", "*member", "Both for different cases"], correctAnswer: 3, explanation: "Use . for variables, -> for pointers to structs.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Define", value: "struct Name { ... };" },
        { label: "Declare", value: "struct Name var;" },
        { label: "Access", value: "var.member" }
      ]
    },

    // Chapter 38: Structures Part 2
    {
      id: "c-ch-38",
      number: 38,
      partLabel: "PART 5: STRUCTURES AND UNIONS",
      title: "Pointers and Structures",
      subtitle: "Structures with functions",
      difficulty: "Intermediate",
      estimatedMinutes: 50,
      xpReward: 140,
      prerequisites: ["c-ch-37"],
      learningObjectives: [
        "Use pointers to structures",
        "Pass structures to functions",
        "Return structures from functions",
        "Allocate structures dynamically"
      ],
      sections: [
        {
          id: "ch38-pointer",
          title: "Structure Pointers and Arrow Operator",
          whyItMatters: "Arrow operator (->) is essential for working with structure pointers.",
          content: `**Arrow operator (->):**
\`\`\`c
struct Person *p = &person1;
p->age = 30;  // Same as (*p).age
\`\`\``
        }
      ],
      quiz: {
        questions: [
          { id: "ch38-q1", type: "mcq", question: "What does p->age mean?", options: ["p age", "(*p).age", "p.age", "Both A and B"], correctAnswer: 3, explanation: "p->age is shorthand for (*p).age.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Arrow", value: "ptr->member" },
        { label: "Dot", value: "var.member" },
        { label: "Allocate", value: "malloc(sizeof(struct))" }
      ]
    },

    // Chapter 39: Linked Lists
    {
      id: "c-ch-39",
      number: 39,
      partLabel: "PART 5: STRUCTURES AND UNIONS",
      title: "Structures with Pointers — Linked Lists",
      subtitle: "Building dynamic data structures",
      difficulty: "Advanced",
      estimatedMinutes: 60,
      xpReward: 160,
      prerequisites: ["c-ch-38"],
      learningObjectives: [
        "Understand linked list concept",
        "Implement singly linked list",
        "Perform insertion and deletion",
        "Traverse linked structures"
      ],
      sections: [
        {
          id: "ch39-concept",
          title: "Linked List Concept",
          whyItMatters: "Linked lists are fundamental data structures. They teach pointer manipulation.",
          content: `**Node structure:**
\`\`\`c
struct Node {
    int data;
    struct Node *next;
};

struct Node *head = NULL;  // Empty list
\`\`\``
        }
      ],
      quiz: {
        questions: [
          { id: "ch39-q1", type: "mcq", question: "What is the time complexity of head insertion?", options: ["O(n)", "O(1)", "O(log n)", "O(n²)"], correctAnswer: 1, explanation: "Insert at head is O(1) — just point new node to old head.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Node", value: "{data, *next}" },
        { label: "Head insert", value: "new->next = head" },
        { label: "Traverse", value: "while(curr) curr = curr->next" }
      ]
    },

    // Chapter 40: typedef
    {
      id: "c-ch-40",
      number: 40,
      partLabel: "PART 5: STRUCTURES AND UNIONS",
      title: "typedef — Simplifying Types",
      subtitle: "Creating type aliases",
      difficulty: "Intermediate",
      estimatedMinutes: 35,
      xpReward: 120,
      prerequisites: ["c-ch-39"],
      learningObjectives: [
        "Create type aliases with typedef",
        "Use typedef with structures",
        "Simplify complex types",
        "Create portable code"
      ],
      sections: [
        {
          id: "ch40-basics",
          title: "typedef Basics",
          whyItMatters: "typedef creates aliases for complex types, making code cleaner.",
          content: `**Basic typedef:**
\`\`\`c
typedef unsigned int uint;
typedef struct { ... } Person;
typedef int (*CompareFunc)(int, int);
\`\`\``
        }
      ],
      quiz: {
        questions: [
          { id: "ch40-q1", type: "mcq", question: "What does typedef do?", options: ["Creates variable", "Creates type alias", "Allocates memory", "Defines function"], correctAnswer: 1, explanation: "typedef creates an alias for an existing type.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Basic", value: "typedef old new;" },
        { label: "Struct", value: "typedef struct {...} Name;" },
        { label: "Function ptr", value: "typedef int (*Fn)(int, int);" }
      ]
    },

    // Chapter 41: Unions
    {
      id: "c-ch-41",
      number: 41,
      partLabel: "PART 5: STRUCTURES AND UNIONS",
      title: "Unions — Memory Overlay",
      subtitle: "Same memory, different interpretations",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 130,
      prerequisites: ["c-ch-40"],
      learningObjectives: [
        "Understand union concept",
        "Define and use unions",
        "Know when to use unions",
        "Understand memory overlay"
      ],
      sections: [
        {
          id: "ch41-concept",
          title: "Union Fundamentals",
          whyItMatters: "Unions store different types in the same memory.",
          content: `**Union:**
\`\`\`c
union Data {
    int i;
    float f;
    char c;
};
// All members share SAME memory!
// sizeof(union) = size of largest member
\`\`\``
        }
      ],
      quiz: {
        questions: [
          { id: "ch41-q1", type: "mcq", question: "What is union size?", options: ["Sum of all members", "Largest member", "Smallest member", "Average"], correctAnswer: 1, explanation: "Union size equals its largest member.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Union", value: "All members share memory" },
        { label: "Size", value: "Size of largest member" },
        { label: "Write", value: "Overwrites all other members" }
      ]
    },

    // Chapter 42: Bit Fields
    {
      id: "c-ch-42",
      number: 42,
      partLabel: "PART 5: STRUCTURES AND UNIONS",
      title: "Bit Fields — Packed Structures",
      subtitle: "Fine-grained memory control",
      difficulty: "Advanced",
      estimatedMinutes: 40,
      xpReward: 140,
      prerequisites: ["c-ch-41"],
      learningObjectives: [
        "Understand bit fields",
        "Define bit field structures",
        "Use bit fields for flags",
        "Understand memory savings"
      ],
      sections: [
        {
          id: "ch42-concept",
          title: "Bit Field Basics",
          whyItMatters: "Bit fields pack multiple boolean or small integer values into single bytes.",
          content: `**Bit field syntax:**
\`\`\`c
struct Flags {
    unsigned int isActive : 1;
    unsigned int isVisible : 1;
    unsigned int mode : 3;
};
\`\`\``
        }
      ],
      quiz: {
        questions: [
          { id: "ch42-q1", type: "mcq", question: "What are bit fields used for?", options: ["Faster code", "Packing multiple values into bytes", "Encryption", "Sorting"], correctAnswer: 1, explanation: "Bit fields pack multiple values into bytes, saving memory.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Syntax", value: "int field : n;" },
        { label: "Size", value: "Packs into bytes" },
        { label: "Use", value: "Booleans and small ints" }
      ]
    },

    // Chapter 43: Struct Alignment
    {
      id: "c-ch-43",
      number: 43,
      partLabel: "PART 5: STRUCTURES AND UNIONS",
      title: "Structure Alignment and Padding",
      subtitle: "Understanding memory layout",
      difficulty: "Advanced",
      estimatedMinutes: 45,
      xpReward: 140,
      prerequisites: ["c-ch-42"],
      learningObjectives: [
        "Understand alignment requirements",
        "Calculate struct sizes",
        "Minimize padding",
        "Use pragma pack"
      ],
      sections: [
        {
          id: "ch43-rules",
          title: "Alignment Rules",
          whyItMatters: "Understanding alignment helps write efficient structures.",
          content: `**Alignment rules:**
1. Each member's offset must be divisible by its size
2. Structure size must be divisible by largest member

**Optimize:** Order members largest to smallest`
        }
      ],
      quiz: {
        questions: [
          { id: "ch43-q1", type: "mcq", question: "What is padding?", options: ["Extra memory", "Bytes added for alignment", "Error", "Union"], correctAnswer: 1, explanation: "Padding bytes are inserted between members for alignment.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Rule", value: "Offset % size == 0" },
        { label: "Optimize", value: "Order: largest to smallest" },
        { label: "Packed", value: "#pragma pack(1)" }
      ]
    },

    // Chapter 44: Struct Review and Project
    {
      id: "c-ch-44",
      number: 44,
      partLabel: "PART 5: STRUCTURES AND UNIONS",
      title: "Structures Review — Student Database",
      subtitle: "Complete project using all concepts",
      difficulty: "Advanced",
      estimatedMinutes: 90,
      xpReward: 200,
      prerequisites: ["c-ch-43"],
      learningObjectives: [
        "Build a complete student database",
        "Use structures for data",
        "Implement CRUD operations",
        "Apply all learning"
      ],
      sections: [
        {
          id: "ch44-project",
          title: "Student Database Project",
          whyItMatters: "This project combines structures, pointers, and dynamic memory.",
          content: `**Project requirements:**
1. Student structure with name, ID, grades
2. Dynamic array of students
3. Add, find, remove students
4. Calculate average grade
5. Save/load from file`
        }
      ],
      quiz: {
        questions: [
          { id: "ch44-q1", type: "mcq", question: "What combines all struct concepts?", options: ["Array", "Database project", "Union", "typedef"], correctAnswer: 1, explanation: "The database project uses structures together.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Struct", value: "Group related data" },
        { label: "typedef", value: "Simplify declarations" },
        { label: "Dynamic", value: "malloc/realloc for growth" }
      ]
    },

    // Chapter 45: File I/O Part 1
    {
      id: "c-ch-45",
      number: 45,
      partLabel: "PART 6: FILE I/O AND PREPROCESSOR",
      title: "File I/O — Opening, Reading, Writing",
      subtitle: "Working with files in C",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 140,
      prerequisites: ["c-ch-44"],
      learningObjectives: [
        "Open and close files",
        "Read from files with fopen/fclose",
        "Write to files with fprintf/fputs",
        "Handle file errors"
      ],
      sections: [
        {
          id: "ch45-basics",
          title: "File Opening and Closing",
          whyItMatters: "File I/O allows programs to persist data beyond runtime.",
          content: `**Opening files:**
\`\`\`c
FILE *f = fopen("data.txt", "r");  // "r" = read
FILE *f = fopen("data.txt", "w");  // "w" = write (truncates)
FILE *f = fopen("data.txt", "a");  // "a" = append
fclose(f);
\`\`\`

**Mode meanings:**
- "r" — Read (file must exist)
- "w" — Write (creates/truncates)
- "a" — Append (creates/appends)
- "rb", "wb" — Binary modes`
        }
      ],
      quiz: {
        questions: [
          { id: "ch45-q1", type: "mcq", question: "What does fopen return?", options: ["int", "FILE*", "char*", "void"], correctAnswer: 1, explanation: "fopen returns FILE* or NULL on error.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Open", value: 'FILE *f = fopen("file", "r");' },
        { label: "Close", value: "fclose(f)" },
        { label: "Modes", value: '"r", "w", "a", "rb", "wb"' }
      ]
    },

    // Chapter 46: File I/O Part 2
    {
      id: "c-ch-46",
      number: 46,
      partLabel: "PART 6: FILE I/O AND PREPROCESSOR",
      title: "Reading and Writing Files",
      subtitle: "Text and binary file operations",
      difficulty: "Intermediate",
      estimatedMinutes: 50,
      xpReward: 150,
      prerequisites: ["c-ch-45"],
      learningObjectives: [
        "Read with fscanf and fgets",
        "Write with fprintf and fputs",
        "Use fread and fwrite for binary",
        "Handle end of file"
      ],
      sections: [
        {
          id: "ch46-reading",
          title: "Reading from Files",
          whyItMatters: "Reading files lets you load saved data and process external information.",
          content: `**fscanf — formatted read:**
\`\`\`c
int num;
fscanf(f, "%d", &num);
\`\`\`

**fgets — line read:**
\`\`\`c
char line[100];
fgets(line, sizeof(line), f);
\`\`\`

**Check EOF:**
\`\`\`c
while (fgets(line, sizeof(line), f) != NULL) {
    // process line
}
\`\`\``
        }
      ],
      quiz: {
        questions: [
          { id: "ch46-q1", type: "mcq", question: "What returns NULL at end of file?", options: ["fopen", "fgets", "fclose", "fprintf"], correctAnswer: 1, explanation: "fgets returns NULL at EOF or error.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Formatted read", value: 'fscanf(f, "%d", &x)' },
        { label: "Line read", value: 'fgets(buf, size, f)' },
        { label: "Check EOF", value: "while (fgets(...) != NULL)" }
      ]
    },

    // Chapter 47: File I/O Part 3
    {
      id: "c-ch-47",
      number: 47,
      partLabel: "PART 6: FILE I/O AND PREPROCESSOR",
      title: "Binary File I/O",
      subtitle: "Reading and writing binary data",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 140,
      prerequisites: ["c-ch-46"],
      learningObjectives: [
        "Understand binary vs text files",
        "Use fread and fwrite",
        "Write portable binary code",
        "Handle binary file errors"
      ],
      sections: [
        {
          id: "ch47-binary",
          title: "Binary File Operations",
          whyItMatters: "Binary files store data efficiently. Essential for file formats, databases, images.",
          content: `**fread and fwrite:**
\`\`\`c
size_t fread(void *ptr, size_t size, size_t nmemb, FILE *stream);
size_t fwrite(const void *ptr, size_t size, size_t nmemb, FILE *stream);
\`\`\`

**Example — write integers:**
\`\`\`c
int arr[5] = {1, 2, 3, 4, 5};
fwrite(arr, sizeof(int), 5, f);  // Write 5 ints
\`\`\``
        }
      ],
      quiz: {
        questions: [
          { id: "ch47-q1", type: "mcq", question: "What is binary file I/O used for?", options: ["Text files", "Databases, images", "Configuration", "Logs"], correctAnswer: 1, explanation: "Binary I/O is for databases, images, and any structured data.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Write binary", value: 'fwrite(ptr, size, n, f)' },
        { label: "Read binary", value: 'fread(ptr, size, n, f)' },
        { label: "Size return", value: "check return value for errors" }
      ]
    },

    // Chapter 48: Error Handling
    {
      id: "c-ch-48",
      number: 48,
      partLabel: "PART 6: FILE I/O AND PREPROCESSOR",
      title: "File I/O Error Handling",
      subtitle: "Handling file operation failures",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 130,
      prerequisites: ["c-ch-47"],
      learningObjectives: [
        "Check for file errors",
        "Use feof and ferror",
        "Handle partial reads",
        "Implement robust file operations"
      ],
      sections: [
        {
          id: "ch48-errors",
          title: "File Error Checking",
          whyItMatters: "File operations can fail. Proper error handling prevents crashes and data loss.",
          content: `**Check fopen:**
\`\`\`c
FILE *f = fopen("data.txt", "r");
if (f == NULL) {
    perror("Failed to open file");
    return ERROR;
}
\`\`\`

**feof and ferror:**
\`\`\`c
if (feof(f)) printf("End of file\\n");
if (ferror(f)) printf("Error occurred\\n");
\`\`\``
        }
      ],
      quiz: {
        questions: [
          { id: "ch48-q1", type: "mcq", question: "What does perror do?", options: ["Opens file", "Prints error message", "Creates file", "Closes file"], correctAnswer: 1, explanation: "perror prints error message to stderr with errno.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Check fopen", value: "if (f == NULL)" },
        { label: "Error message", value: 'perror("message")' },
        { label: "End of file", value: "feof(f)" },
        { label: "Error flag", value: "ferror(f)" }
      ]
    },

    // Chapter 49: Preprocessor
    {
      id: "c-ch-49",
      number: 49,
      partLabel: "PART 6: FILE I/O AND PREPROCESSOR",
      title: "The Preprocessor — Basics",
      subtitle: "Text substitution before compilation",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 130,
      prerequisites: ["c-ch-48"],
      learningObjectives: [
        "Understand what the preprocessor does",
        "Use #include directives",
        "Use #define for constants",
        "Understand macro expansion"
      ],
      sections: [
        {
          id: "ch49-basics",
          title: "Preprocessor Fundamentals",
          whyItMatters: "The preprocessor transforms code before compilation. Understanding it gives you powerful tools.",
          content: `**Preprocessor runs before compilation:**
\`\`\`c
#define PI 3.14159    // Text substitution
#define MAX 100       // Replace MAX with 100

#include <stdio.h>    // Insert file contents
#include "myheader.h" // Insert local file
\`\`\`

**Phases:**
1. Tokenization
2. Macro expansion
3. File inclusion
4. Conditional compilation
5. Output to compiler`
        }
      ],
      quiz: {
        questions: [
          { id: "ch49-q1", type: "mcq", question: "When does preprocessor run?", options: ["At runtime", "Before compilation", "After compilation", "Never"], correctAnswer: 1, explanation: "Preprocessor runs before compilation, transforming source code.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Define", value: "#define NAME value" },
        { label: "Include", value: "#include <file>" },
        { label: "Undefine", value: "#undef NAME" }
      ]
    },

    // Chapter 50: Macros
    {
      id: "c-ch-50",
      number: 50,
      partLabel: "PART 6: FILE I/O AND PREPROCESSOR",
      title: "Macros — Advanced Usage",
      subtitle: "Function-like macros and best practices",
      difficulty: "Advanced",
      estimatedMinutes: 50,
      xpReward: 140,
      prerequisites: ["c-ch-49"],
      learningObjectives: [
        "Write function-like macros",
        "Use macro operators (# and ##)",
        "Avoid macro pitfalls",
        "Know when to prefer inline functions"
      ],
      sections: [
        {
          id: "ch50-macros",
          title: "Function-like Macros",
          whyItMatters: "Macros can be more efficient than functions but require careful writing.",
          content: `**Function-like macros:**
\`\`\`c
#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define SQUARE(x) ((x) * (x))

int m = MAX(5, 3);     // Expands to: ((5) > (3) ? (5) : (3))
int s = SQUARE(4 + 1); // Expands to: ((4 + 1) * (4 + 1)) = 25!
\`\`\`

**Warning:** Macros evaluate arguments multiple times!
\`\`\`c
#define MAX(a, b) ((a) > (b) ? (a) : (b))
// MAX(i++, j++) evaluates i++ and j++ twice!
\`\`\``
        }
      ],
      quiz: {
        questions: [
          { id: "ch50-q1", type: "mcq", question: "Why use parentheses in macros?", options: ["Style", "Correct evaluation order", "Speed", "Required"], correctAnswer: 1, explanation: "Parentheses ensure correct operator precedence in macro expansion.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Simple macro", value: "#define PI 3.14" },
        { label: "Function macro", value: "#define MAX(a,b) ((a)>(b)?(a):(b))" },
        { label: "Parentheses", value: "Always wrap arguments and result" },
        { label: "inline", value: "Prefer inline functions over macros" }
      ]
    },

    // Chapter 51: Conditional Compilation
    {
      id: "c-ch-51",
      number: 51,
      partLabel: "PART 6: FILE I/O AND PREPROCESSOR",
      title: "Conditional Compilation",
      subtitle: "#ifdef, #ifndef, #if and more",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 140,
      prerequisites: ["c-ch-50"],
      learningObjectives: [
        "Use #ifdef and #ifndef",
        "Create include guards",
        "Debug with conditional compilation",
        "Write portable code"
      ],
      sections: [
        {
          id: "ch51-conditional",
          title: "Conditional Compilation",
          whyItMatters: "Conditional compilation enables debug code, platform-specific code, and library features.",
          content: `**ifdef and ifndef:**
\`\`\`c
#ifdef DEBUG
    printf("Debug mode\\n");
#endif

#ifndef HEADER_H
#define HEADER_H
    // ... header content
#endif
\`\`\`

**if with expressions:**
\`\`\`c
#if __STDC_VERSION__ >= 201112L
    // C11 or later
#endif
\`\`\``
        }
      ],
      quiz: {
        questions: [
          { id: "ch51-q1", type: "mcq", question: "What is an include guard?", options: ["Comment", "Prevents double inclusion", "Includes file", "Defines macro"], correctAnswer: 1, explanation: "Include guards prevent a header from being included multiple times.", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "If defined", value: "#ifdef SYMBOL" },
        { label: "If not defined", value: "#ifndef SYMBOL" },
        { label: "Guard", value: "#ifndef H\n#define H\n#endif" }
      ]
    },

    // Chapter 52: Header Files
    {
      id: "c-ch-52",
      number: 52,
      partLabel: "PART 6: FILE I/O AND PREPROCESSOR",
      title: "Header Files and Organization",
      subtitle: "Structuring C projects",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 130,
      prerequisites: ["c-ch-51"],
      learningObjectives: [
        "Create proper header files",
        "Use extern for declarations",
        "Organize code into modules",
        "Avoid common header mistakes"
      ],
      sections: [
        {
          id: "ch52-headers",
          title: "Header File Best Practices",
          whyItMatters: "Proper header organization makes code modular and maintainable.",
          content: `**header.h:**
\`\`\`c
#ifndef HEADER_H
#define HEADER_H

// Declarations only
extern int globalVar;
void function(int x);
struct Point { int x, y; };

#endif
\`\`\`

**header.c:**
\`\`\`c
#include "header.h"

// Definitions
int globalVar = 0;
void function(int x) { ... }
\`\`\``
        }
      ],
      quiz: {
        questions: [
          { id: "ch52-q1", type: "mcq", question: "What goes in header files?", options: ["Definitions", "Declarations", "Executables", "Both A and B"], correctAnswer: 1, explanation: "Headers should contain declarations, not definitions (except inline).", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Include guard", value: "#ifndef HEADER_H" },
        { label: "Declarations", value: "extern, function prototypes" },
        { label: "Definitions", value: "In .c files, not headers" }
      ]
    },

    // Part 7: Data Structures
    {
      id: "ch53",
      number: 53,
      partLabel: "Part 7: Data Structures",
      title: "Linked List Basics",
      subtitle: "Your first dynamic data structure",
      difficulty: 2,
      xpReward: 83,
      prerequisites: ["ch52"],
      learningObjectives: ["Understand nodes and pointers", "Create linked list", "Traverse list"],
      sections: [
        {
          id: "ch53-what-is",
          title: "What is a Linked List?",
          whyItMatters: "Arrays have fixed size. Linked lists grow dynamically.",
          content: `Think of a scavenger hunt: each clue points to next location. That's a linked list — nodes connected by pointers.

**Node structure:**
\`\`\`c
struct Node {
    int data;
    struct Node* next;
};
\`\`\`

Unlike arrays, nodes don't need consecutive memory locations.`
        },
        {
          id: "ch53-create",
          title: "Creating Your First Node",
          whyItMatters: "Every list starts with one node.",
          content: `\`\`\`c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

int main() {
    struct Node* head = NULL;
    head = (struct Node*)malloc(sizeof(struct Node));
    head->data = 10;
    head->next = NULL;

    printf("First node data: %d\\n", head->data);
    free(head);
    return 0;
}
\`\`\`

malloc() allocates node on heap. Always pair with free().`
        }
      ],
      codeExamples: [
        { title: "Basic node creation", code: "struct Node* newNode = malloc(sizeof(struct Node));" }
      ],
      exercises: [
        { id: "ex53-1", title: "Create node with value 42", description: "Allocate a node, set data to 42, print it", type: "code", starterCode: "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node* next;\n};\n\nint main() {\n    // Your code here\n    return 0;\n}", testCases: ["compiles"], hint: "Use malloc and printf" }
      ],
      quiz: {
        questions: [
          { id: "ch53-q1", type: "mcq", question: "What does a node contain?", options: ["Only data", "Data and pointer", "Only pointer", "Nothing"], correctAnswer: 1, explanation: "Node stores data and pointer to next node", difficulty: 1 },
          { id: "ch53-q2", type: "mcq", question: "Where are linked list nodes stored?", options: ["Stack", "Heap", "Static region", "Code section"], correctAnswer: 1, explanation: "malloc allocates from heap", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Node struct", value: "struct Node { int data; struct Node* next; }" },
        { label: "Create node", value: "malloc(sizeof(struct Node))" },
        { label: "Access data", value: "node->data" }
      ]
    },
    {
      id: "ch54",
      number: 54,
      partLabel: "Part 7: Data Structures",
      title: "Singly Linked List Operations",
      subtitle: "Insert, delete, and traverse",
      difficulty: 2,
      xpReward: 84,
      prerequisites: ["ch53"],
      learningObjectives: ["Insert at beginning/end", "Delete nodes", "Traverse entire list"],
      sections: [
        {
          id: "ch54-traverse",
          title: "Traversing the List",
          whyItMatters: "Visit every node to process data.",
          content: `\`\`\`c
void printList(struct Node* head) {
    while (head != NULL) {
        printf("%d -> ", head->data);
        head = head->next;
    }
    printf("NULL\\n");
}
\`\`\`

Walk from head, following next pointers, until NULL.`
        },
        {
          id: "ch54-insert",
          title: "Insert at Beginning",
          whyItMatters: "O(1) insertion — constant time regardless of list size.",
          content: `\`\`\`c
struct Node* insertAtBeginning(struct Node* head, int value) {
    struct Node* newNode = malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = head;
    return newNode;  // New head
}
\`\`\`

Make new node point to old head, return new node as head.`
        },
        {
          id: "ch54-delete",
          title: "Delete a Node",
          whyItMatters: "Remove nodes you no longer need.",
          content: `\`\`\`c
struct Node* deleteNode(struct Node* head, int value) {
    struct Node* temp = head;
    struct Node* prev = NULL;

    while (temp != NULL && temp->data != value) {
        prev = temp;
        temp = temp->next;
    }

    if (temp != NULL) {
        if (prev == NULL) head = temp->next;
        else prev->next = temp->next;
        free(temp);
    }
    return head;
}
\`\`\`

Track previous node to update its next pointer.`
        }
      ],
      exercises: [
        { id: "ex54-1", title: "Insert at end", description: "Add function to insert node at end of list", type: "code", starterCode: "#include <stdio.h>\n#include <stdlib.h>\n\nstruct Node {\n    int data;\n    struct Node* next;\n};\n\nstruct Node* insertAtEnd(struct Node* head, int value) {\n    // Your code here\n}\n\nint main() { return 0; }", testCases: ["compiles"], hint: "Traverse to last node, then append" }
      ],
      quiz: {
        questions: [
          { id: "ch54-q1", type: "mcq", question: "Time complexity of inserting at beginning?", options: ["O(n)", "O(1)", "O(log n)", "O(n²)"], correctAnswer: 1, explanation: "Constant time — just update pointer", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Traverse", value: "while(head) { ... head = head->next; }" },
        { label: "Insert at begin", value: "new->next = head; return new;" },
        { label: "Delete", value: "prev->next = temp->next; free(temp);" }
      ]
    },
    {
      id: "ch55",
      number: 55,
      partLabel: "Part 7: Data Structures",
      title: "Doubly Linked Lists",
      subtitle: "Bidirectional traversal made easy",
      difficulty: 3,
      xpReward: 85,
      prerequisites: ["ch54"],
      learningObjectives: ["Understand doubly linked structure", "Navigate both directions", "Insert/delete efficiently"],
      sections: [
        {
          id: "ch55-structure",
          title: "Node Structure",
          whyItMatters: "Two pointers enable forward and backward navigation.",
          content: `\`\`\`c
struct Node {
    int data;
    struct Node* next;
    struct Node* prev;  // Points to previous node
};
\`\`\`

prev pointer lets you go backwards. Like a train with cars connected at both ends.`
        },
        {
          id: "ch55-traverse-both",
          title: "Traverse Both Directions",
          whyItMatters: "Navigate without starting from head.",
          content: `\`\`\`c
// Forward
void printForward(struct Node* head) {
    for (struct Node* p = head; p; p = p->next)
        printf("%d ", p->data);
}

// Backward
void printBackward(struct Node* tail) {
    for (struct Node* p = tail; p; p = p->prev)
        printf("%d ", p->data);
}
\`\`\`

Maintain tail pointer for backward traversal.`
        },
        {
          id: "ch55-insert",
          title: "Insert in Middle",
          whyItMatters: "Update four pointers correctly.",
          content: `\`\`\`c
void insertAfter(struct Node* prevNode, int value) {
    if (prevNode == NULL) return;

    struct Node* newNode = malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = prevNode->next;
    newNode->prev = prevNode;

    if (prevNode->next)
        prevNode->next->prev = newNode;
    prevNode->next = newNode;
}
\`\`\`

Update prev->next AND next->prev to maintain both links.`
        }
      ],
      exercises: [
        { id: "ex55-1", title: "Delete from doubly list", description: "Implement deletion in doubly linked list", type: "code", starterCode: "// Implement delete function", testCases: ["compiles"], hint: "Update both next and prev pointers" }
      ],
      quiz: {
        questions: [
          { id: "ch55-q1", type: "mcq", question: "Extra pointer in doubly vs singly?", options: ["next", "prev", "data", "head"], correctAnswer: 1, explanation: "Doubly has prev pointer for backward traversal", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Node", value: "struct Node { int data; Node* next; Node* prev; }" },
        { label: "Insert", value: "Update prev and next of both neighbors" },
        { label: "Delete", value: "prev->next = next; next->prev = prev;" }
      ]
    },
    {
      id: "ch56",
      number: 56,
      partLabel: "Part 7: Data Structures",
      title: "Circular Linked Lists",
      subtitle: "Looping forever and ever",
      difficulty: 3,
      xpReward: 86,
      prerequisites: ["ch55"],
      learningObjectives: ["Create circular structure", "Handle infinite loops", "Implement round-robin"],
      sections: [
        {
          id: "ch56-basics",
          title: "Circular Structure",
          whyItMatters: "Last node points back to first — no NULL endpoint.",
          content: `Singly circular: last->next = head
Doubly circular: last->next = head AND head->prev = last

**Use cases:** Round-robin scheduling, playlist looping, circular buffer.`
        },
        {
          id: "ch56-traverse",
          title: "Traversing Circular Lists",
          whyItMatters: "Stop condition changes — check for head instead of NULL.",
          content: `\`\`\`c
void printCircular(struct Node* head) {
    if (!head) return;
    struct Node* p = head;
    do {
        printf("%d ", p->data);
        p = p->next;
    } while (p != head);
}
\`\`\`

do-while ensures at least one iteration. Compare to head to stop.`
        },
        {
          id: "ch56-insert",
          title: "Insert at End",
          whyItMatters: "Need to find last node to update its next pointer.",
          content: `\`\`\`c
struct Node* insertAtEnd(struct Node* head, int value) {
    struct Node* newNode = malloc(sizeof(struct Node));
    newNode->data = value;

    if (!head) {
        newNode->next = newNode;
        return newNode;
    }

    struct Node* last = head;
    while (last->next != head) last = last->next;
    newNode->next = head;
    last->next = newNode;
    return head;
}
\`\`\`

Empty list: new node points to itself. Otherwise, find last and link.`
        }
      ],
      exercises: [
        { id: "ex56-1", title: "Check if circular", description: "Detect if list is circular", type: "code", starterCode: "int isCircular(struct Node* head) {\n    // Your code\n}", testCases: ["compiles"], hint: "Use slow/fast pointer technique" }
      ],
      quiz: {
        questions: [
          { id: "ch56-q1", type: "mcq", question: "How does circular list differ?", options: ["More nodes", "No NULL at end", "Faster", "Uses more memory"], correctAnswer: 1, explanation: "Last node points to first, no NULL termination", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Singular circular", value: "last->next = head" },
        { label: "Traverse", value: "do {...} while(p != head)" },
        { label: "Use cases", value: "Round-robin, playlists, buffers" }
      ]
    },
    {
      id: "ch57",
      number: 57,
      partLabel: "Part 7: Data Structures",
      title: "Stack Implementation",
      subtitle: "LIFO - Last In, First Out",
      difficulty: 2,
      xpReward: 87,
      prerequisites: ["ch56"],
      learningObjectives: ["Understand stack operations", "Implement push/pop", "Use array and linked list"],
      sections: [
        {
          id: "ch57-concept",
          title: "Stack Concept",
          whyItMatters: "Like a stack of plates — take top one first.",
          content: `**LIFO:** Last item added is first item removed.

Operations:
- push: Add item to top
- pop: Remove top item
- peek: View top without removing

**Real examples:** Function call stack, undo in editors, expression evaluation.`
        },
        {
          id: "ch57-array",
          title: "Array-Based Stack",
          whyItMatters: "Fast O(1) operations with fixed capacity.",
          content: `\`\`\`c
#define MAX 100

struct Stack {
    int arr[MAX];
    int top;
};

void init(struct Stack* s) { s->top = -1; }

void push(struct Stack* s, int value) {
    if (s->top >= MAX - 1) return;
    s->arr[++s->top] = value;
}

int pop(struct Stack* s) {
    if (s->top < 0) return -1;
    return s->arr[s->top--];
}
\`\`\`

top = -1 means empty. Increment before pushing.`
        },
        {
          id: "ch57-linked-list",
          title: "Linked List Stack",
          whyItMatters: "Dynamic size — grows as needed.",
          content: `\`\`\`c
struct StackNode {
    int data;
    struct StackNode* next;
};

void push(struct StackNode** top, int value) {
    struct StackNode* newNode = malloc(sizeof(struct StackNode));
    newNode->data = value;
    newNode->next = *top;
    *top = newNode;
}

int pop(struct StackNode** top) {
    if (!*top) return -1;
    int value = (*top)->data;
    struct StackNode* temp = *top;
    *top = (*top)->next;
    free(temp);
    return value;
}
\`\`\`

Push at head, pop from head — O(1) operations.`
        }
      ],
      exercises: [
        { id: "ex57-1", title: "Implement peek", description: "Add peek function to view top element", type: "code", starterCode: "int peek(struct Stack* s) {\n    // Return top without removing\n}", testCases: ["compiles"], hint: "Return arr[top] if not empty" }
      ],
      quiz: {
        questions: [
          { id: "ch57-q1", type: "mcq", question: "What does LIFO mean?", options: ["Last In First Out", "Last Item For Operations", "List In File Order", "Long Input Fast Output"], correctAnswer: 0, explanation: "Last element added is first element removed", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "push", value: "Add to top" },
        { label: "pop", value: "Remove from top" },
        { label: "peek", value: "View top without removing" }
      ]
    },
    {
      id: "ch58",
      number: 58,
      partLabel: "Part 7: Data Structures",
      title: "Queue Implementation",
      subtitle: "FIFO - First In, First Out",
      difficulty: 2,
      xpReward: 88,
      prerequisites: ["ch57"],
      learningObjectives: ["Understand queue operations", "Implement enqueue/dequeue", "Handle front and rear"],
      sections: [
        {
          id: "ch58-concept",
          title: "Queue Concept",
          whyItMatters: "Like a ticket line — first person in line gets served first.",
          content: `**FIFO:** First item added is first item removed.

Operations:
- enqueue: Add to rear
- dequeue: Remove from front
- front: View front item

**Use cases:** Task scheduling, breadth-first search, printer queue.`
        },
        {
          id: "ch58-array",
          title: "Array-Based Queue",
          whyItMatters: "Simple implementation with fixed size.",
          content: `\`\`\`c
#define MAX 100

struct Queue {
    int arr[MAX];
    int front, rear;
};

void init(struct Queue* q) {
    q->front = q->rear = -1;
}

void enqueue(struct Queue* q, int value) {
    if (q->rear >= MAX - 1) return;
    q->arr[++q->rear] = value;
    if (q->front == -1) q->front = 0;
}

int dequeue(struct Queue* q) {
    if (q->front == -1 || q->front > q->rear) return -1;
    return q->arr[q->front++];
}
\`\`\`

front tracks removal position, rear tracks insertion.`
        },
        {
          id: "ch58-linked-list",
          title: "Linked List Queue",
          whyItMatters: "Dynamic size, no capacity limit.",
          content: `\`\`\`c
struct QNode {
    int data;
    struct QNode* next;
};

struct Queue {
    struct QNode *front, *rear;
};

void enqueue(struct Queue* q, int value) {
    struct QNode* newNode = malloc(sizeof(struct QNode));
    newNode->data = value;
    newNode->next = NULL;

    if (!q->rear) q->front = q->rear = newNode;
    else { q->rear->next = newNode; q->rear = newNode; }
}

int dequeue(struct Queue* q) {
    if (!q->front) return -1;
    int value = q->front->data;
    struct QNode* temp = q->front;
    q->front = q->front->next;
    if (!q->front) q->rear = NULL;
    free(temp);
    return value;
}
\`\`\`

Add at rear, remove from front.`
        }
      ],
      exercises: [
        { id: "ex58-1", title: "Queue using two stacks", description: "Implement queue with two stacks", type: "code", starterCode: "// Use two stacks to implement queue", testCases: ["compiles"], hint: "Transfer elements between stacks" }
      ],
      quiz: {
        questions: [
          { id: "ch58-q1", type: "mcq", question: "Queue operation to add element?", options: ["push", "pop", "enqueue", "dequeue"], correctAnswer: 2, explanation: "enqueue adds to rear of queue", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "enqueue", value: "Add to rear" },
        { label: "dequeue", value: "Remove from front" },
        { label: "front", value: "View first element" }
      ]
    },
    {
      id: "ch59",
      number: 59,
      partLabel: "Part 7: Data Structures",
      title: "Circular Queue",
      subtitle: "Efficient queue using array",
      difficulty: 3,
      xpReward: 89,
      prerequisites: ["ch58"],
      learningObjectives: ["Understand circular buffer", "Handle wrap-around", "Maximize space efficiency"],
      sections: [
        {
          id: "ch59-problem",
          title: "Problem with Linear Queue",
          whyItMatters: "Array queue wastes space after dequeue operations.",
          content: `Linear queue: front keeps increasing, never reuses freed spaces.

After many enqueue/dequeue, rear reaches array end even with empty slots.

**Solution:** Circular queue — wrap around to beginning when rear reaches end.`
        },
        {
          id: "ch59-implementation",
          title: "Circular Queue Implementation",
          whyItMatters: "Efficient use of fixed-size array.",
          content: `\`\`\`c
#define MAX 5

struct CircularQueue {
    int arr[MAX];
    int front, rear;
};

void init(struct CircularQueue* q) {
    q->front = q->rear = -1;
}

int isFull(struct CircularQueue* q) {
    return (q->rear + 1) % MAX == q->front;
}

int isEmpty(struct CircularQueue* q) {
    return q->front == -1;
}

void enqueue(struct CircularQueue* q, int value) {
    if (isFull(q)) return;
    if (q->front == -1) q->front = 0;
    q->rear = (q->rear + 1) % MAX;
    q->arr[q->rear] = value;
}

int dequeue(struct CircularQueue* q) {
    if (isEmpty(q)) return -1;
    int value = q->arr[q->front];
    if (q->front == q->rear) q->front = q->rear = -1;
    else q->front = (q->front + 1) % MAX;
    return value;
}
\`\`\`

Modulo operator handles wrap-around.`
        }
      ],
      exercises: [
        { id: "ex59-1", title: "Display queue contents", description: "Print all elements in circular queue", type: "code", starterCode: "void display(struct CircularQueue* q) {\n    // Your code\n}", testCases: ["compiles"], hint: "Use front to rear with modulo" }
      ],
      quiz: {
        questions: [
          { id: "ch59-q1", type: "mcq", question: "Why use circular queue?", options: ["Slower", "Reuses empty slots", "More memory", "Simpler code"], correctAnswer: 1, explanation: "Circular wraps around, reusing freed spaces", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Wrap-around", value: "(index + 1) % MAX" },
        { label: "Full", value: "(rear + 1) % MAX == front" },
        { label: "Empty", value: "front == -1" }
      ]
    },
    {
      id: "ch60",
      number: 60,
      partLabel: "Part 7: Data Structures",
      title: "Binary Trees",
      subtitle: "Branching out with nodes",
      difficulty: 3,
      xpReward: 90,
      prerequisites: ["ch59"],
      learningObjectives: ["Understand tree terminology", "Create binary tree nodes", "Calculate tree properties"],
      sections: [
        {
          id: "ch60-terminology",
          title: "Tree Terminology",
          whyItMatters: "Precise vocabulary for describing tree structures.",
          content: `**Root:** Top node, no parent
**Child:** Node below another
**Parent:** Node above child
**Leaf:** No children
**Sibling:** Same parent
**Depth:** Distance from root
**Height:** Longest path from node to leaf

Binary tree: each node has at most 2 children (left, right)`
        },
        {
          id: "ch60-node",
          title: "Binary Tree Node",
          whyItMatters: "Building block for all tree operations.",
          content: `\`\`\`c
struct TreeNode {
    int data;
    struct TreeNode* left;
    struct TreeNode* right;
};

struct TreeNode* createNode(int value) {
    struct TreeNode* node = malloc(sizeof(struct TreeNode));
    node->data = value;
    node->left = node->right = NULL;
    return node;
}
\`\`\`

Each node holds value and pointers to two children. NULL means no child.`
        },
        {
          id: "ch60-properties",
          title: "Tree Properties",
          whyItMatters: "Calculate memory and performance characteristics.",
          content: `**Maximum nodes at level d:** 2^d
**Maximum nodes in tree of height h:** 2^(h+1) - 1
**Minimum height for n nodes:** ⌈log₂(n+1)⌉ - 1

\`\`\`c
int countNodes(struct TreeNode* root) {
    if (!root) return 0;
    return 1 + countNodes(root->left) + countNodes(root->right);
}

int height(struct TreeNode* root) {
    if (!root) return -1;
    int lh = height(root->left);
    int rh = height(root->right);
    return (lh > rh ? lh : rh) + 1;
}
\`\`\``
        }
      ],
      exercises: [
        { id: "ex60-1", title: "Count leaf nodes", description: "Count nodes with no children", type: "code", starterCode: "int countLeaves(struct TreeNode* root) {\n    // Your code\n}", testCases: ["compiles"], hint: "Leaf: left==NULL && right==NULL" }
      ],
      quiz: {
        questions: [
          { id: "ch60-q1", type: "mcq", question: "In binary tree, max children per node?", options: ["1", "2", "3", "Unlimited"], correctAnswer: 1, explanation: "Binary = 2 max children", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Node", value: "struct TreeNode { int data; Node* left; Node* right; }" },
        { label: "Max nodes at level d", value: "2^d" },
        { label: "Leaf", value: "left==NULL && right==NULL" }
      ]
    },
    {
      id: "ch61",
      number: 61,
      partLabel: "Part 7: Data Structures",
      title: "Binary Search Tree",
      subtitle: "Ordered tree for fast search",
      difficulty: 3,
      xpReward: 91,
      prerequisites: ["ch60"],
      learningObjectives: ["Understand BST property", "Implement search/insert", "Handle duplicates"],
      sections: [
        {
          id: "ch61-property",
          title: "BST Property",
          whyItMatters: "Enables O(log n) search, insert, delete on average.",
          content: `**BST Property:** Left subtree values < node value < right subtree values

This ordering means:
- Search: Compare, go left or right
- Insert: Find correct leaf position
- Inorder traversal: Sorted sequence`
        },
        {
          id: "ch61-search",
          title: "Search in BST",
          whyItMatters: "Efficient searching with logarithmic time.",
          content: `\`\`\`c
struct TreeNode* search(struct TreeNode* root, int key) {
    if (!root || root->data == key) return root;
    if (key < root->data) return search(root->left, key);
    return search(root->right, key);
}

// Iterative version
struct TreeNode* searchIter(struct TreeNode* root, int key) {
    while (root && root->data != key) {
        root = (key < root->data) ? root->left : root->right;
    }
    return root;
}
\`\`\`

Compare key with current node, recurse left or right.`
        },
        {
          id: "ch61-insert",
          title: "Insert in BST",
          whyItMatters: "Build BST structure, maintain property.",
          content: `\`\`\`c
struct TreeNode* insert(struct TreeNode* root, int value) {
    if (!root) {
        root = malloc(sizeof(struct TreeNode));
        root->data = value;
        root->left = root->right = NULL;
        return root;
    }
    if (value < root->data)
        root->left = insert(root->left, value);
    else if (value > root->data)
        root->right = insert(root->right, value);
    return root;
}
\`\`\`

Find empty spot, create new node. Ignore duplicates.`
        },
        {
          id: "ch61-delete",
          title: "Delete from BST",
          whyItMatters: "Three cases to handle: leaf, one child, two children.",
          content: `\`\`\`c
struct TreeNode* deleteNode(struct TreeNode* root, int key) {
    if (!root) return NULL;

    if (key < root->data) root->left = deleteNode(root->left, key);
    else if (key > root->data) root->right = deleteNode(root->right, key);
    else {
        // Node found - three cases
        if (!root->left) {
            struct TreeNode* temp = root->right;
            free(root); return temp;
        }
        if (!root->right) {
            struct TreeNode* temp = root->left;
            free(root); return temp;
        }
        // Two children: find inorder successor
        struct TreeNode* temp = root->right;
        while (temp->left) temp = temp->left;
        root->data = temp->data;
        root->right = deleteNode(root->right, temp->data);
    }
    return root;
}
\`\`\`

Two children: replace with smallest in right subtree (successor).`
        }
      ],
      exercises: [
        { id: "ex61-1", title: "Find minimum value", description: "Get smallest value in BST", type: "code", starterCode: "int findMin(struct TreeNode* root) {\n    // Your code\n}", testCases: ["compiles"], hint: "Go left until NULL" }
      ],
      quiz: {
        questions: [
          { id: "ch61-q1", type: "mcq", question: "Average search time in BST?", options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"], correctAnswer: 1, explanation: "O(log n) when balanced — halves search space each step", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Left < root < right", value: "BST property" },
        { label: "Search", value: "Compare, go left/right" },
        { label: "Delete 2 children", value: "Replace with successor" }
      ]
    },
    {
      id: "ch62",
      number: 62,
      partLabel: "Part 7: Data Structures",
      title: "Tree Traversal Algorithms",
      subtitle: "Inorder, preorder, postorder",
      difficulty: 3,
      xpReward: 92,
      prerequisites: ["ch61"],
      learningObjectives: ["Understand all traversal types", "Implement recursively and iteratively", "Apply to problems"],
      sections: [
        {
          id: "ch62-inorder",
          title: "Inorder Traversal",
          whyItMatters: "In BST, gives sorted ascending order.",
          content: `**Order:** Left → Root → Right

\`\`\`c
void inorder(struct TreeNode* root) {
    if (!root) return;
    inorder(root->left);
    printf("%d ", root->data);
    inorder(root->right);
}
\`\`\`

BST inorder: 2, 3, 5, 7, 8, 9`
        },
        {
          id: "ch62-preorder",
          title: "Preorder Traversal",
          whyItMatters: "Useful for copying trees, prefix expression.",
          content: `**Order:** Root → Left → Right

\`\`\`c
void preorder(struct TreeNode* root) {
    if (!root) return;
    printf("%d ", root->data);
    preorder(root->left);
    preorder(root->right);
}
\`\`\`

Useful for: serialization, expression trees, copying tree structure.`
        },
        {
          id: "ch62-postorder",
          title: "Postorder Traversal",
          whyItMatters: "Useful for deleting trees, evaluating expressions.",
          content: `**Order:** Left → Right → Root

\`\`\`c
void postorder(struct TreeNode* root) {
    if (!root) return;
    postorder(root->left);
    postorder(root->right);
    printf("%d ", root->data);
}
\`\`\`

Useful for: free tree memory (children before parent), postfix evaluation.`
        },
        {
          id: "ch62-level",
          title: "Level Order (BFS)",
          whyItMatters: "Visit nodes level by level, uses queue.",
          content: `\`\`\`c
void levelOrder(struct TreeNode* root) {
    if (!root) return;
    struct Queue q;
    init(&q);
    enqueue(&q, root);

    while (!isEmpty(&q)) {
        struct TreeNode* node = dequeue(&q);
        printf("%d ", node->data);
        if (node->left) enqueue(&q, node->left);
        if (node->right) enqueue(&q, node->right);
    }
}
\`\`\`

Breadth-first: uses queue to process level by level.`
        }
      ],
      exercises: [
        { id: "ex62-1", title: "Postorder delete tree", description: "Free all nodes using postorder", type: "code", starterCode: "void freeTree(struct TreeNode* root) {\n    // Your code\n}", testCases: ["compiles"], hint: "Free children before node" }
      ],
      quiz: {
        questions: [
          { id: "ch62-q1", type: "mcq", question: "Which traversal gives sorted BST?", options: ["Preorder", "Inorder", "Postorder", "Level order"], correctAnswer: 1, explanation: "Inorder visits left-root-right, BST is already sorted", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Inorder", value: "Left → Root → Right (sorted)" },
        { label: "Preorder", value: "Root → Left → Right" },
        { label: "Postorder", value: "Left → Right → Root" }
      ]
    },
    {
      id: "ch63",
      number: 63,
      partLabel: "Part 7: Data Structures",
      title: "Hash Tables",
      subtitle: "Fast lookup with key-value pairs",
      difficulty: 3,
      xpReward: 93,
      prerequisites: ["ch62"],
      learningObjectives: ["Understand hashing concept", "Implement hash function", "Handle collisions"],
      sections: [
        {
          id: "ch63-concept",
          title: "Hash Table Concept",
          whyItMatters: "Average O(1) lookup vs O(n) in arrays.",
          content: `**Hash function:** Converts key to array index.

\`\`\`c
// Simple hash for strings
int hash(char* key, int size) {
    int sum = 0;
    while (*key) sum += *key++;
    return sum % size;
}
\`\`\`

Key "apple" → hash → index 3 → O(1) access!

Also called: associative array, dictionary, map.`
        },
        {
          id: "ch63-implementation",
          title: "Basic Hash Table Implementation",
          whyItMatters: "Structure for storing key-value pairs.",
          content: `\`\`\`c
#define SIZE 100

struct Entry {
    char* key;
    int value;
    int occupied;
};

struct HashTable {
    struct Entry entries[SIZE];
};

int hash(char* key) {
    int sum = 0;
    while (*key) sum += *key++;
    return sum % SIZE;
}

void insert(struct HashTable* ht, char* key, int value) {
    int idx = hash(key);
    ht->entries[idx].key = key;
    ht->entries[idx].value = value;
    ht->entries[idx].occupied = 1;
}

int search(struct HashTable* ht, char* key) {
    int idx = hash(key);
    if (ht->entries[idx].occupied &&
        strcmp(ht->entries[idx].key, key) == 0)
        return ht->entries[idx].value;
    return -1;
}
\`\`\`
        }
      ],
      exercises: [
        { id: "ex63-1", title: "Hash for integers", description: "Implement hash function for int keys", type: "code", starterCode: "int intHash(int key, int size) {\n    // Your code\n}", testCases: ["compiles"], hint: "Use key % size" }
      ],
      quiz: {
        questions: [
          { id: "ch63-q1", type: "mcq", question: "Average time complexity of hash lookup?", options: ["O(n)", "O(log n)", "O(1)", "O(n²)"], correctAnswer: 2, explanation: "Constant time average with good hash function", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Hash function", value: "key → index" },
        { label: "Insert", value: "ht[index] = value" },
        { label: "Search", value: "O(1) average" }
      ]
    },
    {
      id: "ch64",
      number: 64,
      partLabel: "Part 7: Data Structures",
      title: "Collision Handling",
      subtitle: "Chaining and open addressing",
      difficulty: 4,
      xpReward: 94,
      prerequisites: ["ch63"],
      learningObjectives: ["Understand collisions", "Implement chaining", "Implement open addressing"],
      sections: [
        {
          id: "ch64-problem",
          title: "Collision Problem",
          whyItMatters: "Multiple keys map to same index — inevitable with finite array.",
          content: "**Pigeonhole principle:** With n slots and m > n items, at least one slot has multiple items."

Example: hash("cat") == hash("act") == 3

Two main solutions:
1. Chaining: Linked list at each bucket
2. Open addressing: Find another empty slot`
        },
        {
          id: "ch64-chaining",
          title: "Chaining",
          whyItMatters: "Simple, handles unlimited collisions.",
          content: `\`\`\`c
struct Node {
    char* key;
    int value;
    struct Node* next;
};

struct HashTable {
    struct Node* buckets[SIZE];
};

void insert(struct HashTable* ht, char* key, int value) {
    int idx = hash(key);
    struct Node* newNode = malloc(sizeof(struct Node));
    newNode->key = key;
    newNode->value = value;
    newNode->next = ht->buckets[idx];
    ht->buckets[idx] = newNode;
}
\`\`\`

Insert at head of linked list. Search traverses list.`
        },
        {
          id: "ch64-linear-probing",
          title: "Linear Probing",
          whyItMatters: "Open addressing stores all in main array.",
          content: `\`\`\`c
void insertProbing(int arr[], int size, int key) {
    int idx = key % size;
    int i = 0;
    while (arr[(idx + i) % size] != -1) i++;
    arr[(idx + i) % size] = key;
}

int searchProbing(int arr[], int size, int key) {
    int idx = key % size;
    int i = 0;
    while (arr[(idx + i) % size] != key &&
           arr[(idx + i) % size] != -1 && i < size) i++;
    if (arr[(idx + i) % size] == key) return idx + i;
    return -1;
}
\`\`\`

Linear probing: check next slot, wrap around.`
        },
        {
          id: "ch64-quadratic",
          title: "Quadratic Probing",
          whyItMatters: "Reduce primary clustering.",
          content: `Quadratic probing: index = (hash(key) + i²) % size

\`\`\`c
int probe(int hash, int i, int size) {
    return (hash + i * i) % size;
}
\`\`\`

Clustering: nearby keys tend to probe same slots.
Quadratic spreads probes further apart than linear.`
        }
      ],
      exercises: [
        { id: "ex64-1", title: "Implement double hashing", description: "Use secondary hash to reduce clustering", type: "code", starterCode: "// Implement double hashing", testCases: ["compiles"], hint: "hash2 = prime - (key % prime)" }
      ],
      quiz: {
        questions: [
          { id: "ch64-q1", type: "mcq", question: "Chaining uses what for collisions?", options: ["New array", "Linked list", "Heap", "Stack"], correctAnswer: 1, explanation: "Chain stores multiple values in linked list at bucket", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Chaining", value: "Linked list per bucket" },
        { label: "Linear probing", value: "Check i+1, i+2..." },
        { label: "Quadratic", value: "Check i² steps" }
      ]
    },
    {
      id: "ch65",
      number: 65,
      partLabel: "Part 7: Data Structures",
      title: "Bubble Sort and Selection Sort",
      subtitle: "Simple sorting algorithms",
      difficulty: 2,
      xpReward: 95,
      prerequisites: ["ch64"],
      learningObjectives: ["Understand bubble sort", "Understand selection sort", "Analyze time complexity"],
      sections: [
        {
          id: "ch65-bubble",
          title: "Bubble Sort",
          whyItMatters: "Simple to understand, O(n²) but easy to optimize.",
          content: `**Algorithm:** Repeatedly swap adjacent elements if wrong order.

\`\`\`c
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int swapped = 0;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = 1;
            }
        }
        if (!swapped) break;  // Already sorted
    }
}
\`\`\`

Small elements "bubble" to top. Best: O(n) when sorted, Worst: O(n²).`
        },
        {
          id: "ch65-selection",
          title: "Selection Sort",
          whyItMatters: "Simple, fewer swaps than bubble.",
          content: `**Algorithm:** Find minimum, place at start, repeat.

\`\`\`c
void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        int temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
}
\`\`\`

Always O(n²) comparisons, O(n) swaps.
In-place, not stable.`
        }
      ],
      exercises: [
        { id: "ex65-1", title: "Optimize bubble sort", description: "Add early exit when sorted", type: "code", starterCode: "// Optimize bubble sort with flag", testCases: ["compiles"], hint: "Track if any swaps occurred" }
      ],
      quiz: {
        questions: [
          { id: "ch65-q1", type: "mcq", question: "Bubble sort best case?", options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"], correctAnswer: 0, explanation: "O(n) with optimization flag when already sorted", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Bubble", value: "Swap adjacent, bubble up" },
        { label: "Selection", value: "Find min, place at start" },
        { label: "Both", value: "O(n²) time, O(1) space" }
      ]
    },
    {
      id: "ch66",
      number: 66,
      partLabel: "Part 7: Data Structures",
      title: "Insertion Sort and Merge Sort",
      subtitle: "Efficient sorting techniques",
      difficulty: 3,
      xpReward: 96,
      prerequisites: ["ch65"],
      learningObjectives: ["Implement insertion sort", "Implement merge sort", "Compare divide-and-conquer"],
      sections: [
        {
          id: "ch66-insertion",
          title: "Insertion Sort",
          whyItMatters: "Simple, efficient for small/nearly sorted data.",
          content: `**Algorithm:** Build sorted portion one element at a time.

\`\`\`c
void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}
\`\`\`

Like sorting playing cards. Best: O(n), Worst: O(n²), Avg: O(n²).
Adaptive: fast when nearly sorted.`
        },
        {
          id: "ch66-merge",
          title: "Merge Sort",
          whyItMatters: "Guaranteed O(n log n), stable sort.",
          content: `**Divide and conquer:** Split, sort, merge.

\`\`\`c
void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1, n2 = r - m;
    int L[n1], R[n2];
    for (int i = 0; i < n1; i++) L[i] = arr[l + i];
    for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        arr[k++] = (L[i] <= R[j]) ? L[i++] : R[j++];
    }
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}

void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}
\`\`\`

O(n log n) always, O(n) space, stable.`
        }
      ],
      exercises: [
        { id: "ex66-1", title: "Merge sort descending", description: "Modify to sort in descending order", type: "code", starterCode: "// Change merge to descending", testCases: ["compiles"], hint: "Change comparison operator" }
      ],
      quiz: {
        questions: [
          { id: "ch66-q1", type: "mcq", question: "Merge sort complexity?", options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"], correctAnswer: 1, explanation: "Always O(n log n) regardless of input", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Insertion", value: "Build sorted portion incrementally" },
        { label: "Merge", value: "Divide, sort, merge" },
        { label: "Merge space", value: "O(n) auxiliary" }
      ]
    },
    {
      id: "ch67",
      number: 67,
      partLabel: "Part 7: Data Structures",
      title: "Quick Sort",
      subtitle: "Divide and conquer sorting",
      difficulty: 4,
      xpReward: 97,
      prerequisites: ["ch66"],
      learningObjectives: ["Understand partition scheme", "Implement quicksort", "Handle pivot selection"],
      sections: [
        {
          id: "ch67-partition",
          title: "Partition Algorithm",
          whyItMatters: "Core of quicksort — determines performance.",
          content: `**Partition:** Place pivot in correct position.

\`\`\`c
int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}
\`\`\`

All elements ≤ pivot on left, > pivot on right.`
        },
        {
          id: "ch67-quick",
          title: "Quick Sort Implementation",
          whyItMatters: "In-place, O(log n) stack space, often fastest in practice.",
          content: `\`\`\`c
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
\`\`\`

Worst: O(n²) when pivot always extremes
Average: O(n log n)
Best/Average: Fastest for random data due to cache efficiency`
        },
        {
          id: "ch67-optimizations",
          title: "Pivot Selection and Optimization",
          whyItMatters: "Avoid worst case with smart pivot selection.",
          content: `**Random pivot:** Randomize to avoid worst case
**Median-of-three:** Pick first, middle, last median
**Tail-call optimization:** Use iterative with explicit stack

\`\`\`c
// Random pivot
int partitionRandom(int arr[], int low, int high) {
    srand(time(NULL));
    int randIdx = low + rand() % (high - low + 1);
    int temp = arr[randIdx];
    arr[randIdx] = arr[high];
    arr[high] = temp;
    return partition(arr, low, high);
}
\`\`\``
        }
      ],
      exercises: [
        { id: "ex67-1", title: "Three-way partition", description: "Handle duplicates efficiently", type: "code", starterCode: "// Partition into <, =, > pivot", testCases: ["compiles"], hint: "Maintain three regions" }
      ],
      quiz: {
        questions: [
          { id: "ch67-q1", type: "mcq", question: "Quick sort worst case?", options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"], correctAnswer: 2, explanation: "O(n²) when pivot is always smallest/largest", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Partition", value: "Place pivot in correct spot" },
        { label: "Time avg", value: "O(n log n)" },
        { label: "Space", value: "O(log n) stack" }
      ]
    },
    {
      id: "ch68",
      number: 68,
      partLabel: "Part 7: Data Structures",
      title: "Heap Sort",
      subtitle: "Binary heap sorting",
      difficulty: 4,
      xpReward: 98,
      prerequisites: ["ch67"],
      learningObjectives: ["Understand heap property", "Implement heapify", "Apply to sorting"],
      sections: [
        {
          id: "ch68-heap",
          title: "Binary Heap",
          whyItMatters: "Complete binary tree with heap property.",
          content: `**Max-heap:** Parent ≥ children
**Min-heap:** Parent ≤ children
**Complete tree:** All levels filled except last (left-aligned)

Stored in array: parent at i, children at 2i+1, 2i+2

\`\`\`c
// Parent of node at i
int parent(int i) { return (i - 1) / 2; }
// Left child
int left(int i) { return 2 * i + 1; }
// Right child
int right(int i) { return 2 * i + 2; }
\`\`\``
        },
        {
          id: "ch68-heapify",
          title: "Heapify Operation",
          whyItMatters: "Fix heap property from a node downward.",
          content: `\`\`\`c
void heapify(int arr[], int n, int i) {
    int largest = i;
    int l = 2 * i + 1;
    int r = 2 * i + 2;

    if (l < n && arr[l] > arr[largest]) largest = l;
    if (r < n && arr[r] > arr[largest]) largest = r;

    if (largest != i) {
        int swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;
        heapify(arr, n, largest);
    }
}
\`\`\`

O(log n) — compare node with children, swap if needed, recurse.`
        },
        {
          id: "ch68-sort",
          title: "Heap Sort Algorithm",
          whyItMatters: "In-place, O(n log n), not stable.",
          content: `\`\`\`c
void heapSort(int arr[], int n) {
    // Build max heap
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);

    // Extract elements
    for (int i = n - 1; i > 0; i--) {
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }
}
\`\`\`

Build heap: O(n)
Extract n times: n × O(log n) = O(n log n)
Total: O(n log n), O(1) space (in-place)`
        }
      ],
      exercises: [
        { id: "ex68-1", title: "Min heap sort", description: "Sort ascending using min heap", type: "code", starterCode: "// Use min heap for ascending sort", testCases: ["compiles"], hint: "Extract min each time" }
      ],
      quiz: {
        questions: [
          { id: "ch68-q1", type: "mcq", question: "Heap sort space complexity?", options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"], correctAnswer: 3, explanation: "In-place sorting, O(1) extra space", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Heap property", value: "Parent ≥ (max) or ≤ (min) children" },
        { label: "Heapify", value: "O(log n) fix from node down" },
        { label: "Time", value: "O(n log n) always" }
      ]
    },
    {
      id: "ch69",
      number: 69,
      partLabel: "Part 7: Data Structures",
      title: "Binary Search",
      subtitle: "Fast search in sorted arrays",
      difficulty: 2,
      xpReward: 99,
      prerequisites: ["ch68"],
      learningObjectives: ["Understand binary search", "Implement iteratively and recursively", "Apply to variations"],
      sections: [
        {
          id: "ch69-concept",
          title: "Binary Search Concept",
          whyItMatters: "O(log n) vs O(n) linear search — huge difference for large data.",
          content: `**Prerequisite:** Sorted array
**Strategy:** Divide search space in half each step

\`\`\`
Sorted: [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
Search: 23

Step 1: mid=38 → 23 < 38 → search left half
Step 2: mid=8 → 23 > 8 → search right half
Step 3: mid=16 → 23 > 16 → search right half
Step 4: mid=23 → Found!
4 steps instead of 6
\`\`\``
        },
        {
          id: "ch69-iterative",
          title: "Iterative Implementation",
          whyItMatters: "Avoid recursion overhead, easy to understand.",
          content: `\`\`\`c
int binarySearch(int arr[], int n, int target) {
    int left = 0, right = n - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;  // Prevent overflow

        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;  // Not found
}
\`\`\`

left + (right - left) / 2 prevents integer overflow with large indices.
Use ≤ in condition to check final element.`
        },
        {
          id: "ch69-variations",
          title: "Binary Search Variations",
          whyItMatters: "Adapt pattern to find first/last occurrence, floor, ceiling.",
          content: `\`\`\`c
// Find first occurrence of target
int firstOccurrence(int arr[], int n, int target) {
    int left = 0, right = n - 1, result = -1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) {
            result = mid;
            right = mid - 1;  // Continue searching left
        } else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return result;
}

// Find insertion point
int searchInsert(int arr[], int n, int target) {
    int left = 0, right = n;
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] < target) left = mid + 1;
        else right = mid;
    }
    return left;
}
\`\`\``
        }
      ],
      exercises: [
        { id: "ex69-1", title: "Find last occurrence", description: "Find last position of target", type: "code", starterCode: "int lastOccurrence(int arr[], int n, int target) {\n    // Your code\n}", testCases: ["compiles"], hint: "When found, continue searching right" }
      ],
      quiz: {
        questions: [
          { id: "ch69-q1", type: "mcq", question: "Binary search on 1M elements?", options: ["1M", "20", "1K", "500"], correctAnswer: 1, explanation: "log₂(1,000,000) ≈ 20 comparisons max", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Condition", value: "while(left <= right)" },
        { label: "Mid formula", value: "left + (right - left) / 2" },
        { label: "Update", value: "left = mid + 1 or right = mid - 1" }
      ]
    },
    {
      id: "ch70",
      number: 70,
      partLabel: "Part 7: Data Structures",
      title: "Graph Representation",
      subtitle: "Adjacency matrix and list",
      difficulty: 3,
      xpReward: 100,
      prerequisites: ["ch69"],
      learningObjectives: ["Understand graph terminology", "Implement adjacency matrix", "Implement adjacency list"],
      sections: [
        {
          id: "ch70-terminology",
          title: "Graph Terminology",
          whyItMatters: "Precise vocabulary for graph problems.",
          content: `**Vertex (V):** Node, point
**Edge (E):** Connection between vertices
**Degree:** Number of edges incident to vertex
**Directed:** Edges have direction (u → v)
**Undirected:** Edges bidirectional
**Weighted:** Edges have cost/value
**Cycle:** Path that returns to start

**Graph:** G = (V, E)`
        },
        {
          id: "ch70-matrix",
          title: "Adjacency Matrix",
          whyItMatters: "O(1) edge lookup, simple to implement.",
          content: `**2D array:** matrix[i][j] = 1 if edge exists

\`\`\`c
#define MAX 100

int graph[MAX][MAX] = {0};

void addEdge(int matrix[][MAX], int u, int v) {
    matrix[u][v] = 1;
    matrix[v][u] = 1;  // Undirected
}

int hasEdge(int matrix[][MAX], int u, int v) {
    return matrix[u][v];
}
\`\`\`

Space: O(V²)
Add edge: O(1)
Check edge: O(1)
Dense graphs efficient.`
        },
        {
          id: "ch70-list",
          title: "Adjacency List",
          whyItMatters: "Space efficient for sparse graphs.",
          content: `**Linked list per vertex:** Store all neighbors

\`\`\`c
struct Node {
    int vertex;
    struct Node* next;
};

struct Graph {
    int V;
    struct Node** adj;
};

void addEdge(struct Graph* g, int u, int v) {
    struct Node* newNode = malloc(sizeof(struct Node));
    newNode->vertex = v;
    newNode->next = g->adj[u];
    g->adj[u] = newNode;

    // For undirected
    newNode = malloc(sizeof(struct Node));
    newNode->vertex = u;
    newNode->next = g->adj[v];
    g->adj[v] = newNode;
}
\`\`\`

Space: O(V + E)
List neighbors: O(degree)
Sparse graphs efficient.`
        }
      ],
      exercises: [
        { id: "ex70-1", title: "Weighted adjacency list", description: "Add weight field to edge", type: "code", starterCode: "// Add weight to adjacency list", testCases: ["compiles"], hint: "Add weight to node struct" }
      ],
      quiz: {
        questions: [
          { id: "ch70-q1", type: "mcq", question: "Sparse graph best representation?", options: ["Matrix", "List", "Both same", "Tree"], correctAnswer: 1, explanation: "Adjacency list uses O(V+E) vs O(V²) for matrix", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Matrix space", value: "O(V²)" },
        { label: "List space", value: "O(V + E)" },
        { label: "Dense", value: "Many edges → matrix" }
      ]
    },
    {
      id: "ch71",
      number: 71,
      partLabel: "Part 7: Data Structures",
      title: "Graph Traversal",
      subtitle: "BFS and DFS",
      difficulty: 3,
      xpReward: 101,
      prerequisites: ["ch70"],
      learningObjectives: ["Implement BFS with queue", "Implement DFS with stack/recursion", "Solve graph problems"],
      sections: [
        {
          id: "ch71-bfs",
          title: "Breadth-First Search",
          whyItMatters: "Level-by-level exploration, shortest path on unweighted.",
          content: `**Uses queue:** Explore all neighbors before going deeper.

\`\`\`c
void BFS(int graph[][MAX], int start, int V) {
    int visited[MAX] = {0};
    struct Queue q;
    init(&q);

    visited[start] = 1;
    enqueue(&q, start);

    while (!isEmpty(&q)) {
        int v = dequeue(&q);
        printf("%d ", v);

        for (int i = 0; i < V; i++) {
            if (graph[v][i] && !visited[i]) {
                visited[i] = 1;
                enqueue(&q, i);
            }
        }
    }
}
\`\`\`

Time: O(V + E), Space: O(V)`
        },
        {
          id: "ch71-dfs",
          title: "Depth-First Search",
          whyItMatters: "Go deep before wide, used for cycle detection, topological sort.",
          content: `**Uses stack (or recursion):** Explore as far as possible before backtracking.

\`\`\`c
void DFS(int graph[][MAX], int v, int visited[]) {
    visited[v] = 1;
    printf("%d ", v);

    for (int i = 0; i < MAX; i++) {
        if (graph[v][i] && !visited[i]) {
            DFS(graph, i, visited);
        }
    }
}

// With explicit stack
void DFSIterative(int graph[][MAX], int start, int V) {
    int visited[MAX] = {0};
    struct Stack s;
    init(&s);
    push(&s, start);

    while (s.top >= 0) {
        int v = pop(&s);
        if (!visited[v]) {
            visited[v] = 1;
            printf("%d ", v);
            for (int i = V - 1; i >= 0; i--) {
                if (graph[v][i] && !visited[i]) push(&s, i);
            }
        }
    }
}
\`\`\`

Time: O(V + E), Space: O(V)`
        },
        {
          id: "ch71-applications",
          title: "BFS/DFS Applications",
          whyItMatters: "Foundation for many graph algorithms.",
          content: `**BFS applications:**
- Shortest path (unweighted)
- Level order traversal
- Connected components
- Social network "degrees of separation"

**DFS applications:**
- Cycle detection
- Topological sort
- Path finding
- Maze solving
- Strongly connected components`
        }
      ],
      exercises: [
        { id: "ex71-1", title: "Count connected components", description: "Use DFS to count components", type: "code", starterCode: "int countComponents(int graph[][MAX], int V) {\n    // Your code\n}", testCases: ["compiles"], hint: "Run DFS from unvisited nodes" }
      ],
      quiz: {
        questions: [
          { id: "ch71-q1", type: "mcq", question: "BFS uses what data structure?", options: ["Stack", "Queue", "Heap", "Tree"], correctAnswer: 1, explanation: "Queue ensures level-by-level exploration", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "BFS", value: "Queue, level by level" },
        { label: "DFS", value: "Stack/recursion, deep first" },
        { label: "Time", value: "O(V + E) both" }
      ]
    },
    {
      id: "ch72",
      number: 72,
      partLabel: "Part 7: Data Structures",
      title: "Recursion Fundamentals",
      subtitle: "Functions that call themselves",
      difficulty: 3,
      xpReward: 102,
      prerequisites: ["ch71"],
      learningObjectives: ["Understand recursive thinking", "Identify base case and recursive case", "Trace recursion"],
      sections: [
        {
          id: "ch72-concept",
          title: "Recursion Concept",
          whyItMatters: "Elegant solution for problems with self-similar structure.",
          content: `**Function that calls itself** until reaching base case.

\`\`\`c
// Factorial: n! = n * (n-1)!
int factorial(int n) {
    if (n <= 1) return 1;  // Base case
    return n * factorial(n - 1);  // Recursive case
}
\`\`\`

factorial(4) = 4 * factorial(3) = 4 * 3 * factorial(2) = 4 * 3 * 2 * 1 = 24

**Base case:** Stop condition (no further recursion)
**Recursive case:** Break problem into smaller similar problem`
        },
        {
          id: "ch72-trace",
          title: "Tracing Recursion",
          whyItMatters: "Understand call stack and execution order.",
          content: `\`\`\`
factorial(4):
  factorial(4) = 4 * factorial(3)
    factorial(3) = 3 * factorial(2)
      factorial(2) = 2 * factorial(1)
        factorial(1) = 1  ← base case
      return 2 * 1 = 2
    return 3 * 2 = 6
  return 4 * 6 = 24

Call stack grows, then shrinks as returns happen.
\`\`\`

**Stack overflow risk:** Deep recursion can exceed stack limit.`
        },
        {
          id: "ch72-examples",
          title: "Common Recursive Problems",
          whyItMatters: "Practice recognizing recursion patterns.",
          content: `\`\`\`c
// Sum of array
int sumArray(int arr[], int n) {
    if (n == 0) return 0;
    return arr[0] + sumArray(arr + 1, n - 1);
}

// Count digits
int countDigits(int n) {
    if (n == 0) return 0;
    return 1 + countDigits(n / 10);
}

// Reverse string
void reverseStr(char* str, int start, int end) {
    if (start >= end) return;
    char temp = str[start];
    str[start] = str[end];
    str[end] = temp;
    reverseStr(str, start + 1, end - 1);
}
\`\`\``
        }
      ],
      exercises: [
        { id: "ex72-1", title: "Fibonacci without memoization", description: "Implement naive recursive Fibonacci", type: "code", starterCode: "int fib(int n) {\n    // Your code\n}", testCases: ["compiles"], hint: "fib(n) = fib(n-1) + fib(n-2)" }
      ],
      quiz: {
        questions: [
          { id: "ch72-q1", type: "mcq", question: "What is base case?", options: ["First call", "Stop condition", "Last call", "Return value"], correctAnswer: 1, explanation: "Base case stops recursion, prevents infinite loop", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Base case", value: "Stop condition" },
        { label: "Recursive case", value: "Self-call with smaller problem" },
        { label: "Stack", value: "Grows then shrinks" }
      ]
    },
    {
      id: "ch73",
      number: 73,
      partLabel: "Part 7: Data Structures",
      title: "Recursive Algorithms",
      subtitle: "Backtracking and divide-conquer",
      difficulty: 4,
      xpReward: 103,
      prerequisites: ["ch72"],
      learningObjectives: ["Understand backtracking", "Apply divide-and-conquer", "Solve classic problems"],
      sections: [
        {
          id: "ch73-backtracking",
          title: "Backtracking Concept",
          whyItMatters: "Explore all possibilities, undo choices.",
          content: `**Try, undo, try next.** Explore all valid paths.

\`\`\`c
// N-Queens: Place N queens on N×N board
int isSafe(int board[][N], int row, int col) {
    // Check column and diagonals
    for (int i = 0; i < row; i++)
        if (board[i][col]) return 0;
    for (int i = row, j = col; i >= 0 && j >= 0; i--, j--)
        if (board[i][j]) return 0;
    for (int i = row, j = col; i >= 0 && j < N; i--, j++)
        if (board[i][j]) return 0;
    return 1;
}

int solveNQueens(int board[][N], int row) {
    if (row == N) return 1;  // All placed

    for (int col = 0; col < N; col++) {
        if (isSafe(board, row, col)) {
            board[row][col] = 1;
            if (solveNQueens(board, row + 1)) return 1;
            board[row][col] = 0;  // Backtrack
        }
    }
    return 0;
}
\`\`\``
        },
        {
          id: "ch73-divide",
          title: "Divide and Conquer",
          whyItMatters: "Break large problem into smaller, solve, combine.",
          content: `**Pattern:** Divide → Conquer → Combine

\`\`\`c
// Maximum subarray (Kadane's recursive view)
struct Result { int maxSum, int maxLeft, int maxRight };

struct Result maxSubarray(int arr[], int l, int r) {
    if (l == r) return {arr[l], l, r};

    int m = (l + r) / 2;
    struct Result left = maxSubarray(arr, l, m);
    struct Result right = maxSubarray(arr, m + 1, r);
    struct Result cross = maxCrossing(arr, l, m, r);

    if (left.maxSum >= right.maxSum && left.maxSum >= cross.maxSum)
        return left;
    else if (right.maxSum >= left.maxSum && right.maxSum >= cross.maxSum)
        return right;
    return cross;
}
\`\`\`

Merge sort, quicksort, binary search all follow this pattern.`
        },
        {
          id: "ch73-examples",
          title: "More Backtracking Examples",
          whyItMatters: "Apply to combinatorial problems.",
          content: `\`\`\`c
// Generate all subsets
void subsets(int nums[], int n, int idx, int current[], int size) {
    if (idx == n) {
        printArray(current, size);
        return;
    }
    // Include nums[idx]
    current[size] = nums[idx];
    subsets(nums, n, idx + 1, current, size + 1);
    // Exclude nums[idx]
    subsets(nums, n, idx + 1, current, size);
}

// Permutations
void permute(int arr[], int l, int r) {
    if (l == r) printArray(arr, r + 1);
    for (int i = l; i <= r; i++) {
        swap(&arr[l], &arr[i]);
        permute(arr, l + 1, r);
        swap(&arr[l], &arr[i]);  // Backtrack
    }
}
\`\`\``
        }
      ],
      exercises: [
        { id: "ex73-1", title: "Sum of subset problem", description: "Find subset that sums to target", type: "code", starterCode: "int subsetSum(int arr[], int n, int target) {\n    // Backtrack\n}", testCases: ["compiles"], hint: "Include/exclude each element" }
      ],
      quiz: {
        questions: [
          { id: "ch73-q1", type: "mcq", question: "Backtracking essential step?", options: ["Recurse", "Try and undo", "Loop", "Return"], correctAnswer: 1, explanation: "Try choice, explore, undo before trying next", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Backtrack", value: "Try → explore → undo" },
        { label: "Divide-conquer", value: "Divide → solve → combine" },
        { label: "Applications", value: "N-Queens, subsets, permutations" }
      ]
    },
    {
      id: "ch74",
      number: 74,
      partLabel: "Part 7: Data Structures",
      title: "Dynamic Programming Basics",
      subtitle: "Memoization and bottom-up",
      difficulty: 4,
      xpReward: 104,
      prerequisites: ["ch73"],
      learningObjectives: ["Understand DP concept", "Implement top-down with memoization", "Implement bottom-up tabulation"],
      sections: [
        {
          id: "ch74-concept",
          title: "Dynamic Programming Concept",
          whyItMatters: "Optimize exponential to polynomial for overlapping subproblems.",
          content: `**DP = Recursion + Memoization**

Two key properties:
1. **Optimal substructure:** Solution from smaller subproblems
2. **Overlapping subproblems:** Same subproblems computed multiple times

**Fibonacci without DP:** O(2^n) — exponential
**Fibonacci with DP:** O(n) — linear

\`\`\`
fib(5) calls fib(4), fib(3)
fib(4) calls fib(3), fib(2)
fib(3) computed twice!
\`\`\``
        },
        {
          id: "ch74-topdown",
          title: "Top-Down (Memoization)",
          whyItMatters: "Add caching to recursive solution.",
          content: `\`\`\`c
int memo[100] = {0};

int fibMemo(int n) {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];  // Return cached

    memo[n] = fibMemo(n - 1) + fibMemo(n - 2);
    return memo[n];
}
\`\`\`

Time: O(n), Space: O(n) call stack + O(n) memo
"Cache miss" → compute and store. "Cache hit" → return instantly.`
        },
        {
          id: "ch74-bottomup",
          title: "Bottom-Up (Tabulation)",
          whyItMatters: "Iterative, build solution from base cases.",
          content: `\`\`\`c
int fibTab(int n) {
    if (n <= 1) return n;
    int dp[n + 1];
    dp[0] = 0;
    dp[1] = 1;

    for (int i = 2; i <= n; i++)
        dp[i] = dp[i - 1] + dp[i - 2];
    return dp[n];
}

// Space optimized
int fibOptimized(int n) {
    if (n <= 1) return n;
    int prev2 = 0, prev1 = 1;
    for (int i = 2; i <= n; i++) {
        int curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}
\`\`\`

Bottom-up usually faster (no recursion overhead). Optimize space when possible.`
        },
        {
          id: "ch74-examples",
          title: "Classic DP Problems",
          whyItMatters: "Recognize DP patterns.",
          content: `\`\`\`c
// Climbing stairs (same as fib)
int climbStairs(int n) {
    if (n <= 2) return n;
    int a = 1, b = 2;
    for (int i = 3; i <= n; i++) {
        int c = a + b;
        a = b;
        b = c;
    }
    return b;
}

// Coin change (min coins)
int coinChange(int coins[], int n, int amount) {
    int dp[amount + 1];
    dp[0] = 0;
    for (int i = 1; i <= amount; i++) dp[i] = INF;

    for (int i = 1; i <= amount; i++)
        for (int c : coins)
            if (i - c >= 0 && dp[i - c] + 1 < dp[i])
                dp[i] = dp[i - c] + 1;

    return dp[amount] == INF ? -1 : dp[amount];
}
\`\`\``
        }
      ],
      exercises: [
        { id: "ex74-1", title: "Longest common subsequence", description: "Implement LCS DP solution", type: "code", starterCode: "int lcs(char* s1, char* s2) {\n    // Your code\n}", testCases: ["compiles"], hint: "dp[i][j] = max(dp[i-1][j], dp[i][j-1])" }
      ],
      quiz: {
        questions: [
          { id: "ch74-q1", type: "mcq", question: "DP requires what two properties?", options: ["Sorted input, unique solution", "Optimal substructure, overlapping subproblems", "Binary search, iteration", "Queue, stack"], correctAnswer: 1, explanation: "Both needed for DP to work", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Memoization", value: "Recursion + cache" },
        { label: "Tabulation", value: "Iterative build from base" },
        { label: "Optimize space", value: "Keep only needed states" }
      ]
    },
    {
      id: "ch75",
      number: 75,
      partLabel: "Part 7: Data Structures",
      title: "Big O Notation",
      subtitle: "Analyzing algorithm efficiency",
      difficulty: 3,
      xpReward: 105,
      prerequisites: ["ch74"],
      learningObjectives: ["Understand time complexity", "Analyze space complexity", "Compare algorithms"],
      sections: [
        {
          id: "ch75-intro",
          title: "Big O Fundamentals",
          whyItMatters: "Express algorithm growth independent of hardware.",
          content: `**Big O:** Upper bound on worst-case growth

**Common complexities (slowest to fastest):**
- O(n!) — Factorial (terrible)
- O(2^n) — Exponential (very bad)
- O(n³) — Cubic (bad)
- O(n²) — Quadratic (bubble sort)
- O(n log n) — Linearithmic (merge sort)
- O(n) — Linear (array scan)
- O(log n) — Logarithmic (binary search)
- O(1) — Constant (array access)

Drop constants: O(2n) → O(n), O(n² + n) → O(n²)`
        },
        {
          id: "ch75-analyze",
          title: "Analyzing Code",
          whyItMatters: "Calculate complexity for any code.",
          content: `\`\`\`c
// O(n) - single loop
for (int i = 0; i < n; i++) sum += arr[i];

// O(n²) - nested loops
for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
        sum += arr[i][j];

// O(log n) - halving
while (n > 0) { n /= 2; }

// O(n log n) - divide + process
for (int i = 0; i < n; i++)  // n times
    for (int j = 1; j < n; j *= 2)  // log n times
        process();

// O(2^n) - subsets
void subsets(int arr[], int n) {
    for (int i = 0; i < 1 << n; i++)  // 2^n
        process(i);
}
\`\`\``
        },
        {
          id: "ch75-master",
          title: "Master Theorem",
          whyItMatters: "Analyze divide-and-conquer recurrences.",
          content: `**For T(n) = aT(n/b) + f(n):**

If f(n) = O(n^log_b(a) - ε), then T(n) = Θ(n^log_b(a))
If f(n) = Θ(n^log_b(a)), then T(n) = Θ(n^log_b(a) log n)
If f(n) = Ω(n^log_b(a) + ε), then T(n) = Θ(f(n))

**Examples:**
- Binary search: T(n) = T(n/2) + O(1) → a=1, b=2 → Θ(log n)
- Merge sort: T(n) = 2T(n/2) + O(n) → a=2, b=2 → Θ(n log n)`
        }
      ],
      exercises: [
        { id: "ex75-1", title: "Analyze this function", description: "Find complexity", type: "code", starterCode: "void analyze(int n) {\n    for (int i = n; i > 0; i /= 2)\n        for (int j = 0; j < i; j++)\n            printf(\"*\");\n}", testCases: ["compiles"], hint: "n + n/2 + n/4 + ... = 2n" }
      ],
      quiz: {
        questions: [
          { id: "ch75-q1", type: "mcq", question: "Which is fastest?", options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"], correctAnswer: 2, explanation: "Constant time beats all", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "O(1)", value: "Constant" },
        { label: "O(log n)", value: "Halving (binary search)" },
        { label: "O(n)", value: "Linear scan" },
        { label: "O(n log n)", value: "Divide + linear (merge sort)" },
        { label: "O(n²)", value: "Nested loops" }
      ]
    },
    {
      id: "ch76",
      number: 76,
      partLabel: "Part 7: Data Structures",
      title: "Space and Time Tradeoffs",
      subtitle: "Optimizing memory vs speed",
      difficulty: 3,
      xpReward: 106,
      prerequisites: ["ch75"],
      learningObjectives: ["Understand space-time tradeoff", "Apply caching", "Precompute for speed"],
      sections: [
        {
          id: "ch76-tradeoff",
          title: "Space-Time Tradeoff",
          whyItMatters: "Often can trade memory for speed.",
          content: `**Common tradeoffs:**
- Lookup tables: Precompute values to avoid recalculation
- Memoization: Cache results to avoid recomputation
- Sorting: Pre-sort for faster search
- Indexing: Build index for faster queries

**Example: Fibonacci**
- Time-only: O(2^n) exponential
- Time + space: O(n) linear with memoization
- Optimized space: O(1) with iterative`
        },
        {
          id: "ch76-examples",
          title: "Practical Tradeoffs",
          whyItMatters: "Real-world optimization strategies.",
          content: `\`\`\`c
// Precompute sine table (space for speed)
float fastSin(float x) {
    static float sinTable[360];
    static int init = 0;
    if (!init) {
        for (int i = 0; i < 360; i++)
            sinTable[i] = sin(i * PI / 180);
        init = 1;
    }
    int idx = (int)x % 360;
    return sinTable[idx < 0 ? idx + 360 : idx];
}

// Index for fast search (like database index)
struct Index {
    int key;
    int position;
};

// Hash table lookup (space for O(1) search)
int table[1000];  // Pre-allocated, O(1) access vs O(n) search
\`\`\``
        },
        {
          id: "ch76-decisions",
          title: "When to Trade",
          whyItMatters: "Choose right optimization for context.",
          content: `**Trade memory for speed when:**
- Frequent access patterns
- Known finite input space
- Time critical applications

**Keep optimized space when:**
- Memory constrained (embedded systems)
- One-time computations
- Large datasets

**Questions to ask:**
- How big is input? (affects memory usage)
- How often called? (affects time savings)
- Memory available? (hardware constraint)
- Real-time requirements? (latency budget)`
        }
      ],
      exercises: [
        { id: "ex76-1", title: "Design trade-off", description: "Time vs space decision", type: "code", starterCode: "// Choose: precompute or on-demand?", testCases: ["compiles"], hint: "Consider frequency and input size" }
      ],
      quiz: {
        questions: [
          { id: "ch76-q1", type: "mcq", question: "Memoization trades?", options: ["Time for space", "Space for time", "Nothing", "Speed for accuracy"], correctAnswer: 1, explanation: "Use memory to avoid recomputation = faster", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Trade space", value: "Cache/memoization" },
        { label: "Trade time", value: "Precompute tables" },
        { label: "Balance", value: "Consider input size and access frequency" }
      ]
    },

    // Part 8: Advanced C and Projects
    {
      id: "ch77",
      number: 77,
      partLabel: "Part 8: Advanced C and Projects",
      title: "Standard Library Deep Dive",
      subtitle: "stdio.h, stdlib.h, string.h",
      difficulty: 3,
      xpReward: 127,
      prerequisites: ["ch76"],
      learningObjectives: ["Master common functions", "Use string utilities", "Handle memory operations"],
      sections: [
        {
          id: "ch77-stdio",
          title: "stdio.h Advanced Functions",
          whyItMatters: "Beyond printf and scanf — efficient formatted I/O.",
          content: `\`\`\`c
// sprintf - format to string (safer than strcpy)
char buffer[100];
int age = 25;
sprintf(buffer, "Name: %s, Age: %d", "Alice", age);

// sscanf - parse from string
sscanf(buffer, "Name: %s, Age: %d", name, &age);

// fgets - safe line input (includes newline, stops at size)
fgets(line, sizeof(line), file);

// snprintf - bounded sprintf (prevents overflow)
snprintf(buf, sizeof(buf), "Very long %s", longStr);
\`\`\`

sprintf vs snprintf: bounded version prevents buffer overflow.`
        },
        {
          id: "ch77-stdlib",
          title: "stdlib.h Utilities",
          whyItMatters: "Memory, conversion, sorting, environment.",
          content: `\`\`\`c
// Sorting
int arr[] = {5, 2, 8, 1};
qsort(arr, 4, sizeof(int), compareInt);
int compareInt(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

// Conversion
int num = atoi("123");      // ASCII to int
long lng = atol("12345");   // ASCII to long
double d = atof("3.14");    // ASCII to float

// Environment
char* path = getenv("PATH");
int system(const char* cmd);  // Execute shell command

// Binary search
int* found = bsearch(&key, arr, n, sizeof(int), compareInt);
\`\`\`

qsort — generic sort for any type. bsearch — O(log n) search on sorted data.`
        },
        {
          id: "ch77-string",
          title: "string.h Functions",
          whyItMatters: "Safe string manipulation beyond strcpy/strcat.",
          content: `\`\`\`c
// Safe versions (always use these)
char dest[20];
strncpy(dest, src, sizeof(dest) - 1);
dest[sizeof(dest) - 1] = '\0';  // Ensure null terminator

// Concatenation
strncat(dest, src, sizeof(dest) - strlen(dest) - 1);

// Comparison (for strings, use strcmp not ==)
if (strncmp(str1, str2, 3) == 0) { /* first 3 chars equal */ }

// Search
char* found = strstr(haystack, needle);  // Find substring
char* token = strtok(str, delimiters);   // Split string

// Memory functions
memset(arr, 0, sizeof(arr));    // Set memory
memcpy(dest, src, n);           // Copy n bytes (no overlap)
memmove(dest, src, n);          // Copy (handles overlap)
\`\`\`

strncpy may not null-terminate. Always check!`
        }
      ],
      exercises: [
        { id: "ex77-1", title: "Implement string trim", description: "Remove leading/trailing whitespace", type: "code", starterCode: "char* trim(char* str) {\n    // Your code\n}", testCases: ["compiles"], hint: "Find first/last non-space, null-terminate" }
      ],
      quiz: {
        questions: [
          { id: "ch77-q1", type: "mcq", question: "Use qsort for what?", options: ["Searching", "Sorting any type", "Memory allocation", "String ops"], correctAnswer: 1, explanation: "qsort sorts any array using comparison function", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "snprintf", value: "Safe sprintf with size limit" },
        { label: "strncpy", value: "Bounded copy, may not null-terminate" },
        { label: "qsort", value: "Generic sort: qsort(arr, n, size, cmp)" }
      ]
    },
    {
      id: "ch78",
      number: 78,
      partLabel: "Part 8: Advanced C and Projects",
      title: "Math Functions",
      subtitle: "math.h functions and usage",
      difficulty: 2,
      xpReward: 128,
      prerequisites: ["ch77"],
      learningObjectives: ["Use common math functions", "Handle floating-point edge cases", "Apply to problems"],
      sections: [
        {
          id: "ch78-basics",
          title: "Basic Math Functions",
          whyItMatters: "Essential for scientific computing and graphics.",
          content: `\`\`\`c
#include <math.h>
#include <stdio.h>

int main() {
    printf("%.2f\\n", sqrt(16));       // 4.00 - square root
    printf("%.2f\\n", pow(2, 3));       // 8.00 - power
    printf("%.2f\\n", exp(1));          // 2.72 - e^x
    printf("%.2f\\n", log(2.718));      // 1.00 - natural log
    printf("%.2f\\n", log10(100));     // 2.00 - log base 10

    printf("%.2f\\n", fabs(-5));       // 5.00 - absolute
    printf("%.2f\\n", ceil(3.2));      // 4.00 - round up
    printf("%.2f\\n", floor(3.8));    // 3.00 - round down
    printf("%.2f\\n", round(3.5));     // 4.00 - round nearest

    return 0;
}
\`\`\`

Compile with -lm flag: gcc file.c -lm`
        },
        {
          id: "ch78-trig",
          title: "Trigonometric Functions",
          whyItMatters: "Graphics, physics, engineering applications.",
          content: `\`\`\`c
// All use radians, not degrees
printf("%.2f\\n", sin(M_PI / 2));  // 1.00 - sine
printf("%.2f\\n", cos(0));         // 1.00 - cosine
printf("%.2f\\n", tan(M_PI / 4)); // 1.00 - tangent

// Inverse functions
printf("%.2f\\n", asin(1));        // π/2 - arcsine
printf("%.2f\\n", acos(1));        // 0 - arccosine
printf("%.2f\\n", atan(1));        // π/4 - arctangent

// Atan2: angle from x,y (full quadrant)
double angle = atan2(y, x);  // Returns -π to π

// Convert degrees to radians
#define DEG_TO_RAD(deg) ((deg) * M_PI / 180.0)
\`\`\`

M_PI defined in math.h. Use DEG_TO_RAD for degree conversion.`
        },
        {
          id: "ch78-errors",
          title: "Math Error Handling",
          whyItMatters: "Handle special values and errors gracefully.",
          content: `\`\`\`c
#include <math.h>
#include <stdio.h>

int main() {
    double result;

    // Domain error: sqrt(-1)
    result = sqrt(-1);
    printf("sqrt(-1) = %f\\n", result);  // nan

    // Overflow
    result = exp(1000);
    printf("exp(1000) = %f\\n", result);  // inf

    // Check for special values
    printf("isnan: %d\\n", isnan(result));    // 1 if NaN
    printf("isinf: %d\\n", isinf(result));    // 1 if ±inf
    printf("isfinite: %d\\n", isfinite(result)); // 1 if normal

    return 0;
}
\`\`\`

nan, inf, -inf are special floating-point values. Always check!`
        }
      ],
      exercises: [
        { id: "ex78-1", title: "Distance between points", description: "Calculate Euclidean distance", type: "code", starterCode: "double distance(double x1, double y1, double x2, double y2) {\n    // Your code\n}", testCases: ["compiles"], hint: "sqrt((x2-x1)² + (y2-y1)²)" }
      ],
      quiz: {
        questions: [
          { id: "ch78-q1", type: "mcq", question: "Trig functions expect?", options: ["Degrees", "Radians", "Either", "None"], correctAnswer: 1, explanation: "All trig functions in math.h use radians", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Compile", value: "gcc file.c -lm" },
        { label: "sqrt", value: "Square root" },
        { label: "pow", value: "x to power y" },
        { label: "M_PI", value: "π constant" }
      ]
    },
    {
      id: "ch79",
      number: 79,
      partLabel: "Part 8: Advanced C and Projects",
      title: "Time and Date",
      subtitle: "time.h and chronometer",
      difficulty: 2,
      xpReward: 129,
      prerequisites: ["ch78"],
      learningObjectives: ["Get current time", "Measure execution time", "Format time output"],
      sections: [
        {
          id: "ch79-basics",
          title: "Time Functions",
          whyItMatters: "Benchmark code, schedule tasks, log events.",
          content: `\`\`\`c
#include <time.h>
#include <stdio.h>

int main() {
    // Current time as time_t (seconds since epoch)
    time_t now = time(NULL);
    printf("Seconds since epoch: %ld\\n", now);

    // Convert to calendar time
    struct tm* cal = localtime(&now);
    printf("Year: %d, Month: %d, Day: %d\\n",
           cal->tm_year + 1900,
           cal->tm_mon + 1,
           cal->tm_mday);

    // Format as string
    char buf[100];
    strftime(buf, sizeof(buf), "%Y-%m-%d %H:%M:%S", cal);
    printf("Formatted: %s\\n", buf);

    return 0;
}
\`\`\`

Epoch: January 1, 1970 (Unix). tm_year is years since 1900.`
        },
        {
          id: "ch79-benchmark",
          title: "Measuring Execution Time",
          whyItMatters: "Profile and optimize code.",
          content: `\`\`\`c
#include <time.h>
#include <stdio.h>

void slowFunction() {
    long sum = 0;
    for (int i = 0; i < 1000000; i++) sum += i;
}

int main() {
    clock_t start = clock();
    slowFunction();
    clock_t end = clock();

    double seconds = (double)(end - start) / CLOCKS_PER_SEC;
    printf("Time: %.6f seconds\\n", seconds);

    // For more precise timing
    struct timespec start, end;
    clock_gettime(CLOCK_MONOTONIC, &start);
    // ... code to measure ...
    clock_gettime(CLOCK_MONOTONIC, &end);
    double elapsed = (end.tv_sec - start.tv_sec) +
                     (end.tv_nsec - start.tv_nsec) / 1e9;

    return 0;
}
\`\`\`

clock() measures CPU time. clock_gettime(CLOCK_MONOTONIC) for wall-clock.`
        },
        {
          id: "ch79-arithmetic",
          title: "Time Arithmetic",
          whyItMatters: "Calculate durations, future/past times.",
          content: `\`\`\`c
#include <time.h>

// Add days to current time
time_t addDays(time_t now, int days) {
    return now + (days * 24 * 60 * 60);
}

// Subtract times to get duration
double diffInSeconds(time_t start, time_t end) {
    return difftime(end, start);
}

// Custom time structure
struct Date {
    int year, month, day;
};

int daysBetween(struct Date d1, struct Date d2) {
    struct tm t1 = {0}, t2 = {0};
    t1.tm_year = d1.year - 1900; t1.tm_mon = d1.month - 1; t1.tm_mday = d1.day;
    t2.tm_year = d2.year - 1900; t2.tm_mon = d2.month - 1; t2.tm_mday = d2.day;
    return (int)difftime(mktime(&t2), mktime(&t1)) / 86400;
}
\`\`\`

86400 seconds per day. mktime normalizes struct tm.`
        }
      ],
      exercises: [
        { id: "ex79-1", title: "Age calculator", description: "Calculate age from birth date", type: "code", starterCode: "int calculateAge(struct Date birth) {\n    // Your code\n}", testCases: ["compiles"], hint: "Compare current time to birth time" }
      ],
      quiz: {
        questions: [
          { id: "ch79-q1", type: "mcq", question: "time() returns what?", options: ["Year", "Days since epoch", "Current struct", "Formatted string"], correctAnswer: 1, explanation: "time() returns time_t = seconds since Jan 1, 1970", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "time(NULL)", value: "Current time in seconds" },
        { label: "localtime", value: "Convert to struct tm" },
        { label: "strftime", value: "Format as string" },
        { label: "clock()", value: "CPU time used" }
      ]
    },
    {
      id: "ch80",
      number: 80,
      partLabel: "Part 8: Advanced C and Projects",
      title: "Signal Handling",
      subtitle: "Handling interrupts gracefully",
      difficulty: 3,
      xpReward: 130,
      prerequisites: ["ch79"],
      learningObjectives: ["Register signal handlers", "Handle common signals", "Implement graceful shutdown"],
      sections: [
        {
          id: "ch80-basics",
          title: "Signal Basics",
          whyItMatters: "Respond to interrupts, errors, user events.",
          content: `\`\`\`c
#include <stdio.h>
#include <signal.h>
#include <stdlib.h>

volatile sig_atomic_t keepRunning = 1;

void signalHandler(int sig) {
    printf("\\nReceived signal %d, cleaning up...\\n", sig);
    keepRunning = 0;
}

int main() {
    signal(SIGINT, signalHandler);   // Ctrl+C
    signal(SIGTERM, signalHandler);  // Termination request

    while (keepRunning) {
        // Main loop
    }

    printf("Graceful shutdown complete\\n");
    return 0;
}
\`\`\`

SIGINT (Ctrl+C), SIGTERM (kill), SIGSEGV (segmentation fault).`
        },
        {
          id: "ch80-portable",
          title: "POSIX Signal Handling",
          whyItMatters: "More portable and powerful than signal().",
          content: `\`\`\`c
#include <signal.h>
#include <stdio.h>

void handler(int sig, siginfo_t* info, void* context) {
    printf("Signal %d received from process %d\\n",
           sig, info->si_pid);
    // info->si_addr shows fault address for SIGSEGV
    // info->si_code shows signal cause
}

int main() {
    struct sigaction sa;
    sa.sa_sigaction = handler;
    sa.sa_flags = SA_SIGINFO;  // Use extended handler
    sigemptyset(&sa.sa_mask);

    sigaction(SIGINT, &sa, NULL);
    sigaction(SIGSEGV, &sa, NULL);

    // Continue execution
    pause();  // Wait for signals
    return 0;
}
\`\`\`

sa_sigaction provides more info than basic handler. SA_SIGINFO flag required.`
        },
        {
          id: "ch80-timers",
          title: "Timer Signals",
          whyItMatters: "Periodic tasks without threads.",
          content: `\`\`\`c
#include <signal.h>
#include <stdio.h>
#include <time.h>

void timerHandler(int sig) {
    printf("Timer triggered!\\n");
}

int main() {
    struct sigevent sev;
    sev.sigev_notify = SIGEV_SIGNAL;
    sev.sigev_signo = SIGUSR1;

    timer_t timerid;
    struct itimerspec its;
    its.it_value.tv_sec = 1;   // First trigger after 1 sec
    its.it_value.tv_nsec = 0;
    its.it_interval.tv_sec = 1; // Repeat every 1 sec
    its.it_interval.tv_nsec = 0;

    timer_create(CLOCK_REALTIME, &sev, &timerid);
    timer_settime(timerid, 0, &its, NULL);

    pause();  // Wait for signals
    return 0;
}
\`\`\`

Create virtual (process) or real-time timers. Useful for periodic tasks.`
        }
      ],
      exercises: [
        { id: "ex80-1", title: "Create alarm clock", description: "Use setitimer for countdown", type: "code", starterCode: "void setAlarm(int seconds) {\n    // Use setitimer\n}", testCases: ["compiles"], hint: "ITIMER_REAL sends SIGALRM" }
      ],
      quiz: {
        questions: [
          { id: "ch80-q1", type: "mcq", question: "SIGINT triggered by?", options: ["kill command", "Ctrl+C", "Timeout", "Error"], correctAnswer: 1, explanation: "SIGINT = interrupt from keyboard (Ctrl+C)", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "signal()", value: "Simple signal registration" },
        { label: "sigaction()", value: "POSIX, more control" },
        { label: "volatile sig_atomic_t", value: "Safe in signal handler" }
      ]
    },
    {
      id: "ch81",
      number: 81,
      partLabel: "Part 8: Advanced C and Projects",
      title: "Multithreading Basics",
      subtitle: "POSIX threads (pthreads)",
      difficulty: 4,
      xpReward: 131,
      prerequisites: ["ch80"],
      learningObjectives: ["Create threads", "Handle shared data", "Use synchronization primitives"],
      sections: [
        {
          id: "ch81-create",
          title: "Creating Threads",
          whyItMatters: "Achieve parallelism on multi-core systems.",
          content: `\`\`\`c
#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>

void* threadFunction(void* arg) {
    int id = *(int*)arg;
    printf("Thread %d running\\n", id);
    return NULL;
}

int main() {
    pthread_t threads[3];
    int ids[3] = {1, 2, 3};

    // Create threads
    for (int i = 0; i < 3; i++) {
        pthread_create(&threads[i], NULL, threadFunction, &ids[i]);
    }

    // Wait for completion
    for (int i = 0; i < 3; i++) {
        pthread_join(threads[i], NULL);
    }

    printf("All threads complete\\n");
    return 0;
}
\`\`\`

Compile: gcc file.c -lpthread
pthread_create: thread, attributes, function, argument.`
        },
        {
          id: "ch81-shared",
          title: "Shared Data and Race Conditions",
          whyItMatters: "Multiple threads accessing same data causes bugs.",
          content: `\`\`\`c
#include <pthread.h>
#include <stdio.h>

int counter = 0;  // Shared variable

void* increment(void* arg) {
    for (int i = 0; i < 1000000; i++) {
        counter++;  // NOT thread-safe!
    }
    return NULL;
}

int main() {
    pthread_t t1, t2;
    pthread_create(&t1, NULL, increment, NULL);
    pthread_create(&t2, NULL, increment, NULL);
    pthread_join(t1, NULL);
    pthread_join(t2, NULL);

    printf("Counter: %d (expected 2000000)\\n", counter);
    return 0;
}
\`\`\`

Race condition: two threads read/write simultaneously. Result: data loss.`
        },
        {
          id: "ch81-mutex",
          title: "Mutex for Synchronization",
          whyItMatters: "Protect shared data from concurrent access.",
          content: `\`\`\`c
#include <pthread.h>

int counter = 0;
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;

void* safeIncrement(void* arg) {
    for (int i = 0; i < 1000000; i++) {
        pthread_mutex_lock(&mutex);
        counter++;
        pthread_mutex_unlock(&mutex);
    }
    return NULL;
}
\`\`\`

Lock before accessing shared data, unlock after. Always pair!`
        },
        {
          id: "ch81-cond",
          title: "Condition Variables",
          whyItMatters: "Thread communication and waiting for events.",
          content: `\`\`\`c
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
pthread_cond_t cond = PTHREAD_COND_INITIALIZER;
int dataReady = 0;

// Producer
void* producer(void* arg) {
    pthread_mutex_lock(&mutex);
    dataReady = 1;
    pthread_cond_signal(&cond);
    pthread_mutex_unlock(&mutex);
    return NULL;
}

// Consumer
void* consumer(void* arg) {
    pthread_mutex_lock(&mutex);
    while (!dataReady) {
        pthread_cond_wait(&cond, &mutex);
    }
    printf("Data received!\\n");
    pthread_mutex_unlock(&mutex);
    return NULL;
}
\`\`\`

Always wait in loop (while condition), not if. Unlock mutex while waiting.`
        }
      ],
      exercises: [
        { id: "ex81-1", title: "Thread-safe queue", description: "Implement queue with mutex", type: "code", starterCode: "// Add mutex to queue operations", testCases: ["compiles"], hint: "Lock before any operation" }
      ],
      quiz: {
        questions: [
          { id: "ch81-q1", type: "mcq", question: "What prevents race condition?", options: ["More threads", "Mutex", "Lock file", "Sleep"], correctAnswer: 1, explanation: "Mutex ensures only one thread accesses data at a time", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "pthread_create", value: "Create new thread" },
        { label: "pthread_join", value: "Wait for thread" },
        { label: "pthread_mutex_lock", value: "Acquire mutex" },
        { label: "Compile", value: "gcc file.c -lpthread" }
      ]
    },
    {
      id: "ch82",
      number: 82,
      partLabel: "Part 8: Advanced C and Projects",
      title: "Socket Programming",
      subtitle: "Network communication basics",
      difficulty: 4,
      xpReward: 132,
      prerequisites: ["ch81"],
      learningObjectives: ["Create TCP sockets", "Implement server/client", "Handle connections"],
      sections: [
        {
          id: "ch82-concept",
          title: "Socket Basics",
          whyItMatters: "Communicate between machines over network.",
          content: `**Socket:** Endpoint for communication

**Types:**
- Stream (SOCK_STREAM): TCP, reliable, ordered
- Datagram (SOCK_DGRAM): UDP, fast, no guarantee

\`\`\`
Server: socket() → bind() → listen() → accept() → read/write → close()
Client: socket() → connect() → read/write → close()
\`\`\`

Port: 16-bit identifier (0-65535). Well-known: 80=http, 443=https, 22=ssh`
        },
        {
          id: "ch82-server",
          title: "TCP Server",
          whyItMatters: "Accept connections from clients.",
          content: `\`\`\`c
#include <sys/socket.h>
#include <netinet/in.h>
#include <unistd.h>
#include <stdio.h>

int main() {
    int server_fd = socket(AF_INET, SOCK_STREAM, 0);

    struct sockaddr_in address;
    address.sin_family = AF_INET;
    address.sin_addr.s_addr = INADDR_ANY;
    address.sin_port = htons(8080);

    bind(server_fd, (struct sockaddr*)&address, sizeof(address));
    listen(server_fd, 5);

    printf("Server listening on port 8080\\n");

    int client_fd = accept(server_fd, NULL, NULL);
    char buffer[1024] = {0};
    read(client_fd, buffer, 1024);
    printf("Received: %s\\n", buffer);

    close(client_fd);
    close(server_fd);
    return 0;
}
\`\`\`

htons: host to network short (byte order). INADDR_ANY: any local IP.`
        },
        {
          id: "ch82-client",
          title: "TCP Client",
          whyItMatters: "Connect to server and send data.",
          content: `\`\`\`c
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <unistd.h>
#include <stdio.h>

int main() {
    int sock = socket(AF_INET, SOCK_STREAM, 0);

    struct sockaddr_in server;
    server.sin_family = AF_INET;
    server.sin_port = htons(8080);
    inet_pton(AF_INET, "127.0.0.1", &server.sin_addr);

    connect(sock, (struct sockaddr*)&server, sizeof(server));

    char* msg = "Hello from client";
    send(sock, msg, strlen(msg), 0);

    close(sock);
    return 0;
}
\`\`\`

inet_pton: presentation to network (string to binary IP).`
        }
      ],
      exercises: [
        { id: "ex82-1", title: "Echo server", description: "Server that echoes back client message", type: "code", starterCode: "// Modify server to echo", testCases: ["compiles"], hint: "Read then write same data" }
      ],
      quiz: {
        questions: [
          { id: "ch82-q1", type: "mcq", question: "SOCK_STREAM is?", options: ["UDP", "TCP", "Raw IP", "ICMP"], correctAnswer: 1, explanation: "SOCK_STREAM = TCP (connection-oriented)", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "socket()", value: "Create socket" },
        { label: "bind()", value: "Assign address to socket" },
        { label: "listen()", value: "Enable connections" },
        { label: "accept()", value: "Get client connection" },
        { label: "connect()", value: "Connect to server" }
      ]
    },
    {
      id: "ch83",
      number: 83,
      partLabel: "Part 8: Advanced C and Projects",
      title: "Portable Code",
      subtitle: "Writing cross-platform C",
      difficulty: 3,
      xpReward: 133,
      prerequisites: ["ch82"],
      learningObjectives: ["Handle platform differences", "Use standard types", "Write portable code"],
      sections: [
        {
          id: "ch83-types",
          title: "Standard Types",
          whyItMatters: "Avoid assumptions about type sizes.",
          content: `\`\`\`c
#include <stdint.h>
#include <stdio.h>

int main() {
    // Fixed-width integers
    int8_t   i8;    // Exactly 8 bits
    int16_t  i16;   // Exactly 16 bits
    int32_t  i32;   // Exactly 32 bits
    int64_t  i64;   // Exactly 64 bits

    // Unsigned versions
    uint8_t  u8;
    uint32_t u32;

    // Limits
    printf("int max: %d\\n", INT32_MAX);
    printf("unsigned max: %u\\n", UINT32_MAX);

    // Common: size_t, ptrdiff_t, intmax_t
    size_t size = sizeof(int);  // Unsigned, pointer-sized

    return 0;
}
\`\`\`

Use <stdint.h> for guaranteed sizes. Never assume int = 32 bits.`
        },
        {
          id: "ch83-endian",
          title: "Byte Order (Endianness)",
          whyItMatters: "Different architectures store multi-byte values differently.",
          content: `\`\`\`c
#include <stdint.h>
#include <stdio.h>

int main() {
    uint32_t x = 0x12345678;
    unsigned char* p = (unsigned char*)&x;

    printf("Bytes: %02x %02x %02x %02x\\n",
           p[0], p[1], p[2], p[3]);

    // Little endian: 78 56 34 12
    // Big endian:    12 34 56 78

    return 0;
}
\`\`\`

x86: Little endian (least significant byte first). Network: big endian. Use ntohl/htonl for conversion.`
        },
        {
          id: "ch83-preprocessor",
          title: "Conditional Compilation",
          whyItMatters: "Different code for different platforms.",
          content: `\`\`\`c
#include <stdio.h>

#ifdef _WIN32
    #include <windows.h>
    #define SLEEP(ms) Sleep(ms)
#elif defined(__linux__)
    #include <unistd.h>
    #define SLEEP(ms) usleep(ms * 1000)
#elif defined(__APPLE__)
    #include <unistd.h>
    #define SLEEP(ms) usleep(ms * 1000)
#endif

int main() {
    printf("Platform detected\\n");
    SLEEP(1000);
    return 0;
}
\`\`\`

#ifdef checks if symbol defined. #if defined() for multiple.`
        },
        {
          id: "ch83-practices",
          title: "Portable Practices",
          whyItMatters: "Write code that works everywhere.",
          content: `**Do:**
- Use standard library functions
- Use fixed-width types from stdint.h
- Check for NULL after malloc
- Use size_t for sizes
- Use stdint.h/stdio.h not windows.h

**Don't:**
- Assume sizeof(int) or sizeof(void*)
- Use platform-specific functions
- Assume byte order
- Hard-code paths (/ vs \\)
- Assume file line endings`
        }
      ],
      exercises: [
        { id: "ex83-1", title: "Cross-platform delay", description: "Platform-specific sleep wrapper", type: "code", starterCode: "// Use #ifdef for Windows/Linux/Mac", testCases: ["compiles"], hint: "#ifdef _WIN32 for Windows" }
      ],
      quiz: {
        questions: [
          { id: "ch83-q1", type: "mcq", question: "int8_t guaranteed size?", options: ["8 bits", "16 bits", "32 bits", "Platform dependent"], correctAnswer: 0, explanation: "Fixed-width types guarantee exact bit count", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "stdint.h", value: "Fixed-width integer types" },
        { label: "size_t", value: "Unsigned, pointer-sized" },
        { label: "#ifdef", value: "Conditional compilation" }
      ]
    },
    {
      id: "ch84",
      number: 84,
      partLabel: "Part 8: Advanced C and Projects",
      title: "Interview Preparation",
      subtitle: "Common questions and answers",
      difficulty: 3,
      xpReward: 134,
      prerequisites: ["ch83"],
      learningObjectives: ["Practice common questions", "Understand explanations", "Prepare for interviews"],
      sections: [
        {
          id: "ch84-pointers",
          title: "Pointer Questions",
          whyItMatters: "Pointer mastery separates C programmers.",
          content: `**Q: What is the difference between array and pointer?**
A: Array allocates space, pointer just stores address. Arrays decay to pointers but carry size info (sizeof).

**Q: What does \\*&ptr do?**
A: & gets address, * dereferences — cancels out, gives original value.

**Q: What is const int \\*p vs int \\* const p?**
A: First: pointer to constant (can't modify *p). Second: constant pointer (can't modify p).

**Q: What is void \\*?**
A: Generic pointer, can point to any type. Cast to needed type before use.`
        },
        {
          id: "ch84-memory",
          title: "Memory Questions",
          whyItMatters: "Memory management is core to C.",
          content: `**Q: What is stack vs heap?**
A: Stack: automatic allocation, fast, limited size. Heap: manual allocation (malloc), larger, slower.

**Q: What causes memory leak?**
A: Forgetting to free() allocated memory. Track all malloc with free.

**Q: What is dangling pointer?**
A: Pointer to freed memory. Set pointer to NULL after free.

**Q: What is buffer overflow?**
A: Writing past array bounds. Always check array size before writing.`
        },
        {
          id: "ch84-algo",
          title: "Algorithm Questions",
          whyItMatters: "Demonstrate problem-solving ability.",
          content: `**Q: Reverse linked list in place?**
\`\`\`c
struct Node* reverse(struct Node* head) {
    struct Node *prev = NULL, *next;
    while (head) {
        next = head->next;
        head->next = prev;
        prev = head;
        head = next;
    }
    return prev;
}
\`\`\`

**Q: Find cycle in linked list?**
Use slow/fast pointers — if they meet, cycle exists.

**Q: Binary search complexity?**
O(log n) — halves search space each step.`
        }
      ],
      exercises: [
        { id: "ex84-1", title: "Self-check", description: "Review and rate your C knowledge", type: "code", starterCode: "// Rate yourself on: pointers( ), memory( ), data structures( ), algorithms( )", testCases: ["compiles"], hint: "Be honest about strengths and gaps" }
      ],
      quiz: {
        questions: [
          { id: "ch84-q1", type: "mcq", question: "How detect cycle in list?", options: ["Two passes", "Slow/fast pointers", "Count nodes", "Use hash"], correctAnswer: 1, explanation: "Floyd's cycle detection: fast moves 2x, if catches slow, cycle exists", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Array vs pointer", value: "Array allocates, pointer references" },
        { label: "Memory leak", value: "malloc without free" },
        { label: "Buffer overflow", value: "Write past array end" }
      ]
    },
    {
      id: "ch85",
      number: 85,
      partLabel: "Part 8: Advanced C and Projects",
      title: "Final Project",
      subtitle: "Build a complete application",
      difficulty: 5,
      xpReward: 135,
      prerequisites: ["ch84"],
      learningObjectives: ["Combine all skills", "Build real application", "Prepare for production"],
      sections: [
        {
          id: "ch85-project",
          title: "Command-Line Todo Application",
          whyItMatters: "Demonstrates complete C application development.",
          content: `**Project: Task Tracker CLI**

Features:
- Add task with priority
- List tasks (sorted by priority)
- Mark complete
- Delete task
- Persist to file
- Color output

\`\`\`c
// Structure
struct Task {
    int id;
    char title[100];
    int priority;  // 1=high, 2=medium, 3=low
    int completed;
    time_t created;
};

// Commands
// todo add "Buy milk" 2
// todo list
// todo done 1
// todo delete 3
// todo save
// todo load
\`\`\`

Persistence: save to JSON or binary file. Use linked list or array.`
        },
        {
          id: "ch85-requirements",
          title: "Implementation Requirements",
          whyItMatters: "Follow professional practices.",
          content: `**Core Requirements:**
1. Dynamic task list (linked list or resizable array)
2. File I/O for persistence (fopen, fwrite)
3. Command parsing (strtok, sscanf)
4. Proper memory management (malloc, free)
5. Error handling (check all return values)
6. Makefile for building
7. Comments and documentation

**Bonus Features:**
- Priority sorting (bubble/insertion sort)
- Search/filter tasks
- Due dates with time.h
- Colored output (ANSI escape codes)
- Unit tests`
        },
        {
          id: "ch85-structure",
          title: "Suggested File Structure",
          whyItMatters: "Professional code organization.",
          content: `\`\`\`
project/
├── Makefile           # Build configuration
├── src/
│   ├── main.c         # Entry point
│   ├── task.c         # Task operations
│   ├── task.h         # Task header
│   ├── storage.c      # File I/O
│   ├── storage.h      # Storage header
│   ├── ui.c           # Display functions
│   └── ui.h           # UI header
├── include/
│   └── todo.h         # Public types
├── tests/
│   └── test_task.c    # Unit tests
└── README.md          # Documentation
\`\`\`

Header files in include/, source in src/. Separate interface from implementation.`
        }
      ],
      exercises: [
        { id: "ex85-1", title: "Build the todo app", description: "Implement complete task tracker", type: "code", starterCode: "// Start with Makefile and structure", testCases: ["compiles"], hint: "Start simple, add features incrementally" }
      ],
      quiz: {
        questions: [
          { id: "ch85-q1", type: "mcq", question: "What demonstrates C mastery?", options: ["One big file", "Separate header/source", "No comments", "Single function"], correctAnswer: 1, explanation: "Professional code separates interface from implementation", difficulty: 1 }
        ],
        passingScore: 1
      },
      cheatSheet: [
        { label: "Structure", value: "Separate .c and .h files" },
        { label: "Memory", value: "Always free what you malloc" },
        { label: "Persistence", value: "Save state to file" },
        { label: "Build", value: "Use Makefile" }
      ]
    }
  ])
};

export default cTrack;