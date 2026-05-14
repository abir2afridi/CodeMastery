# CODEMASTERY — C LANGUAGE TRACK ADDITION

# Add C as a 6th track to the existing CodeMastery platform

# 85+ chapters · Zero to Systems Programming · Browser compiler via WebAssembly (Emscripten/JSCPP)

## OVERVIEW

Extend the existing CodeMastery platform (Next.js 14 + TypeScript + Tailwind) by adding a complete C programming language track. Follow ALL existing design patterns, data structures, component conventions, and curriculum depth standards already established for all previous tracks.

C is the mother of all modern languages. This track starts from absolute zero — a student who has never written code can begin here. The track covers everything from "what is a variable" all the way to systems programming, pointers, memory management, file I/O, and data structures implementation from scratch.

---

## C-SPECIFIC COMPILER SETUP

C code cannot run natively in the browser. Use JSCPP — a C++ interpreter written in JavaScript that supports standard C in the browser.

Implementation for /components/compiler/CCompiler.tsx:

Primary approach — JSCPP (recommended for beginner/intermediate chapters):

- Load JSCPP from CDN: <https://cdn.jsdelivr.net/npm/jscpp@latest/dist/JSCPP.es5.min.js>
- JSCPP supports: all C standard I/O, printf/scanf, all data types, pointers (basic), structs, arrays, strings, file I/O (simulated), dynamic memory (malloc/free simulated)
- Input handling: intercept scanf() calls with a custom input dialog/field
- Output: capture printf() output and display in output panel

Secondary approach — for advanced chapters (pointers, memory):

- Use Emscripten-compiled GCC via WebAssembly
- Alternative: use an API-based approach — send code to a compilation API (JDoodle or Piston API — free tier)
- Show a "Compiling..." spinner, then show output

Compiler UI layout (/components/compiler/CCompiler.tsx):

- Left panel (55%): C code editor (CodeMirror 6 with C language support via @codemirror/lang-cpp)
- Right panel (45%): split into Output (top) + stdin Input field (bottom)
- Top bar: "Run" button (Ctrl+Enter), "Clear Output", "Reset Code", "Copy Code"
- stdin input: text field for scanf() inputs — user types values, separated by Enter
- Output panel shows: printf output, compilation errors with line numbers, runtime errors
- Error display: highlight the error line in editor with red gutter marker
- "Compilation warnings" shown in amber — always explain what the warning means
- Memory view panel (toggle): for pointer/memory chapters, show a visual memory diagram

---

## CURRICULUM DATA STRUCTURE

Add to /lib/curriculum/c-curriculum.ts following existing TypeScript interfaces.
Add "c" to the Track type union in /lib/curriculum/types.ts.

Track metadata:

- id: "c"
- title: "C Programming"
- tagline: "The language that built the modern world"
- icon: "⚙️"
- color: "#A8B9CC"
- totalChapters: 85
- estimatedHours: 130

---

## FULL CURRICULUM — 85 CHAPTERS

=== PART 1: ABSOLUTE BEGINNING — UNDERSTANDING C (Chapters 1–8) ===

Chapter 1: What Is C and Why Is It Still Relevant?
Difficulty: Absolute Beginner | XP: 100 | Time: 30 min

Learning objectives:

- Understand what C is and where it came from
- Know why C is called the "mother of all languages"
- Understand compiled vs interpreted languages
- Set up the C development environment
- Run the first C program

Sections (each 400–600 words, full real content, zero placeholders):

1.1 — What Is C?
Real-world analogy: Most programming languages are like automatic cars — they handle gear shifts, fuel injection, and engine management for you. C is like a manual car with direct access to every mechanical system. It gives you complete control over the machine — which is powerful, but means you must understand what you are doing.

Content: C was created by Dennis Ritchie at Bell Labs between 1969 and 1973. It was designed to write the UNIX operating system — which itself was then used to write almost every major operating system including Linux, macOS, and Windows kernel components. C is not just old — it is foundational. Here is a partial list of what is written in C: the Linux kernel, the Python interpreter, the Ruby interpreter, Git, SQLite, the core of PostgreSQL and MySQL, Redis, Nginx, every microcontroller firmware on the planet, medical devices, aircraft systems, car ECUs, and NASA spacecraft software. When you learn C, you understand what actually happens inside your computer. Every other language — Python, JavaScript, Java, Go, Rust — was either written in C or deeply inspired by its syntax. C is the DNA of modern software.

1.2 — Compiled vs Interpreted Languages
C is a compiled language. This means your source code (.c file) must be translated into machine code (binary .exe or ELF executable) before it can run. This translation is done by a compiler — most commonly GCC (GNU Compiler Collection) or Clang. Steps: you write code in hello.c → run gcc hello.c -o hello → the compiler produces a binary file called "hello" → you run ./hello and the CPU executes it directly. There is no interpreter in between. This is why C programs are extremely fast — the CPU runs your code directly, not through an interpreter layer. Comparison: Python code runs through an interpreter (slow, portable). C code runs as machine code (fast, platform-specific). A well-written C program runs 10–100× faster than equivalent Python code.

1.3 — Setting Up the Environment
On Windows: Install MinGW-w64 (GCC for Windows) or use VS Code with the C/C++ extension + MSYS2. Step-by-step installation guide. Alternative: use WSL (Windows Subsystem for Linux) — recommended for serious C development.
On macOS: Install Xcode Command Line Tools (xcode-select --install). Clang is included.
On Linux: GCC is usually pre-installed. If not: sudo apt install gcc (Ubuntu/Debian).
Verify: gcc --version should print the version.
VS Code setup: Install "C/C++" extension by Microsoft. Configure launch.json for debugging. Install "Code Runner" extension for quick compilation.
Creating your first project: mkdir c-learning && cd c-learning → create hello.c.

1.4 — First C Program — Line by Line

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

EVERY single character explained:

- #include <stdio.h> — preprocessor directive. Tells the compiler to include the Standard Input/Output header file. This file contains the declaration of printf(). Without it, the compiler does not know what printf is.
- int main() — the entry point of EVERY C program. Execution always starts here. "int" means this function returns an integer. "main" is the special name the OS looks for. "()" means no parameters (for now).
- { } — curly braces define the body (block) of the function.
- printf("Hello, World!\n") — print formatted text to the terminal. "\n" is the newline escape sequence (moves cursor to next line).
- return 0 — returns 0 to the operating system. By convention, 0 = program ran successfully. Any other value = error code.
- Semicolons — every statement in C MUST end with a semicolon. This is NOT optional. Forgetting a semicolon is the most common beginner error.

1.5 — Compiling and Running

```bash
gcc hello.c -o hello     # Compile
./hello                  # Run (Linux/macOS)
hello.exe                # Run (Windows)
```

What -o hello means: name the output file "hello" (instead of default a.out).
Common gcc flags every beginner needs: -Wall (enable all warnings), -Wextra (extra warnings), -g (include debug info for gdb), -std=c17 (use C17 standard).
Recommended compile command for beginners: gcc -Wall -Wextra -std=c17 hello.c -o hello

Quiz (8 questions with full explanations):
Q1 (MCQ): Who created the C programming language? A) Linus Torvalds B) Dennis Ritchie C) Brian Kernighan D) Ken Thompson — Answer: B — Dennis Ritchie created C at Bell Labs. Brian Kernighan co-authored the famous "The C Programming Language" book. Linus Torvalds created Linux.
Q2 (True/False): C code runs through an interpreter. — Answer: False — C is a compiled language. Source code is compiled to machine code by a compiler (like GCC), and the CPU executes that machine code directly with no interpreter involved.
Q3 (MCQ): What does #include <stdio.h> do? A) Creates a new file B) Includes the standard I/O library declarations C) Runs the program D) Defines the main function — Answer: B
Q4 (Code output): What does printf("Hello\n") print? Answer: Hello (followed by a newline) — Explanation: \n is the escape sequence for a newline character. printf does not add a newline automatically — you must add \n yourself.
Q5 (Spot the bug): int main() { printf("Hello"); } — Bug: missing return 0; — Explanation: In C, main() must return an int. While modern compilers may not error, omitting return 0 is undefined behavior in older C standards and bad practice always.
Q6 (Fill blank): Every C statement must end with a ___. Answer: semicolon (;)
Q7 (MCQ): What command compiles hello.c and outputs a file named hello? A) gcc hello.c B) gcc hello.c -o hello C) compile hello.c D) run hello.c — Answer: B
Q8 (True/False): C is a slow language because it is old. — Answer: False — C is one of the FASTEST languages because it compiles directly to machine code with no interpreter or virtual machine overhead. It is widely used in performance-critical systems like operating systems and embedded devices.

Practice exercises:
Exercise 1 (Easy): Modify the hello world program to print your name, the current year, and "I am learning C!" on three separate lines using three printf() calls.
Exercise 2 (Easy): Write a C program that prints a simple box made of asterisks using multiple printf() calls.
Exercise 3 (Medium): Without using any variables, write a program that prints the result of 25 * 4 + 17 - 3 by putting the expression directly inside printf() using the %d format specifier.

---

Chapter 2: Variables, Data Types, and Constants
Difficulty: Absolute Beginner | XP: 100 | Time: 45 min

2.1 — What Is a Variable?
Analogy: Computer memory (RAM) is like a massive hotel with billions of rooms. A variable is like booking one of those rooms under a name. When you write int age = 25, you are booking a room called "age", putting the number 25 inside it, and telling the hotel what kind of guest will stay there (an integer).

2.2 — C's Basic Data Types (with exact memory sizes)
int — integer, typically 4 bytes, range: -2,147,483,648 to 2,147,483,647
char — single character, 1 byte, stores ASCII values 0-127
float — decimal number, 4 bytes, ~6-7 significant digits
double — larger decimal, 8 bytes, ~15-16 significant digits (prefer over float)
long — larger integer, 4 or 8 bytes depending on platform
long long — guaranteed 8 bytes, range: -9.2 quintillion to +9.2 quintillion
short — 2 bytes, range: -32,768 to 32,767
unsigned variants: unsigned int, unsigned char, unsigned long — only positive values, doubles the positive range
void — no type (used for functions that return nothing or generic pointers)

Why sizes matter in C: unlike Python/JavaScript, C gives you EXACT control over memory. Choosing the right type saves memory in embedded systems. Using int when you need long can cause overflow bugs.

```c
#include <stdio.h>

int main() {
    int age = 25;
    char grade = 'A';
    float price = 9.99f;      // f suffix for float literals
    double pi = 3.14159265358979;
    long long population = 8000000000LL;  // LL suffix for long long

    printf("Age: %d\n", age);
    printf("Grade: %c\n", grade);
    printf("Price: %.2f\n", price);
    printf("Pi: %.10lf\n", pi);
    printf("Population: %lld\n", population);

    return 0;
}
```

2.3 — Format Specifiers (Complete Reference)
%d — int, %i — int (alternative), %u — unsigned int, %ld — long, %lld — long long,
%f — float/double, %lf — double (scanf), %e — scientific notation,
%c — char, %s — string, %p — pointer address, %x — hexadecimal, %o — octal,
%% — literal percent sign.
Width and precision: %5d (minimum 5 chars wide), %.2f (2 decimal places), %10.3f (both).

2.4 — Constants: #define and const

```c
#define PI 3.14159      // Preprocessor constant (no type, no memory)
#define MAX_SIZE 100

const int DAYS_IN_WEEK = 7;  // Type-safe constant (has type, has memory)
const double GRAVITY = 9.81;
```

Difference: #define is replaced by the preprocessor before compilation (no type checking). const creates an actual typed variable that cannot be modified. Modern C prefers const. Use UPPERCASE names for constants by convention.

2.5 — sizeof Operator
sizeof(int) → 4. sizeof(double) → 8. sizeof(char) → 1. sizeof variable (not just types).
Why it matters: portable code. Never hardcode 4 for sizeof(int) — it can vary.

```c
printf("Size of int: %zu bytes\n", sizeof(int));
printf("Size of double: %zu bytes\n", sizeof(double));
```

[Continue this exact depth for ALL 85 chapters below...]

---

Chapter 3: Operators — Arithmetic, Relational, Logical, Bitwise
Chapter 4: Input and Output — scanf and printf Deep Dive
Chapter 5: Conditional Statements — if, else if, else, switch
Chapter 6: Loops — for, while, do-while, break, continue
Chapter 7: Functions — Basics, Parameters, Return Values, Prototypes
Chapter 8: Scope, Storage Classes — auto, static, extern, register

=== PART 2: ARRAYS AND STRINGS (Chapters 9–16) ===

Chapter 9: Arrays — 1D Arrays Complete Guide
Sections: Declaring and initializing arrays, accessing elements (0-indexed), array bounds (no automatic bounds checking in C — very important!), iterating with loops, passing arrays to functions (arrays decay to pointers — explain this early), array size with sizeof, multi-dimensional arrays preview.

Chapter 10: 2D Arrays and Multi-dimensional Arrays
Sections: Declaring 2D arrays, row-major storage in memory, accessing elements [row][col], iterating with nested loops, passing 2D arrays to functions (syntax variations), practical use: matrices, grids, game boards.

Chapter 11: Strings in C — Part 1 (Character Arrays)
Sections: C has no built-in string type. Strings are char arrays ending with null terminator '\0'. Declaring: char name[50] = "Alice". String literals. The null terminator — why every string ends with '\0' and why the array needs +1 size. scanf with %s (stops at whitespace). fgets() for reading full lines.

Chapter 12: Strings in C — Part 2 (string.h Functions)
Sections: All string.h functions: strlen, strcpy, strncpy, strcat, strncat, strcmp, strncmp, strchr, strrchr, strstr, strtok, memset, memcpy, memmove. Why strncpy is safer than strcpy. Buffer overflow as security vulnerability — real examples.

Chapter 13: String Processing and Algorithms
Chapter 14: Arrays of Strings (2D char arrays)
Chapter 15: Command Line Arguments (argc, argv)
Chapter 16: Array Algorithms — Search and Sort from Scratch

=== PART 3: POINTERS — THE HEART OF C (Chapters 17–28) ===

Chapter 17: What Is a Pointer? (Most Important Chapter in C)
Sections:
17.1 — Memory addresses: every variable has an address in RAM. The & operator gives you the address. Analogy: if a variable is a house, its address is the street address.
17.2 — Pointer declaration: int *p — p is a variable that STORES an address (not a value). The* in declaration means "pointer to". p = &age — now p holds the address of age.
17.3 — Dereferencing: *p — the* operator when used on a pointer means "go to the address and get the value". *p = 30 — changes the value AT the address p points to.
17.4 — Full visual diagram: draw RAM as boxes with addresses. Show age at address 0x1000 containing value 25. Show p at address 0x2000 containing value 0x1000. Show*p accessing the value 25.
17.5 — Why pointers exist: passing large data without copying, dynamic memory allocation, building data structures (linked lists, trees), direct hardware access.

Chapter 18: Pointer Arithmetic
Chapter 19: Pointers and Arrays (The Deep Connection)
Chapter 20: Pointers to Pointers (Double Pointers)
Chapter 21: Pointers and Functions (Pass by Reference)
Chapter 22: Function Pointers
Chapter 23: Void Pointers and Generic Programming
Chapter 24: NULL Pointer — What It Is and Why It Matters
Chapter 25: Common Pointer Bugs (Dangling, Wild, Memory Leaks)
Chapter 26: Const Pointers vs Pointers to Const
Chapter 27: Pointer to Array vs Array of Pointers
Chapter 28: Pointer Review + Visual Memory Exercises

=== PART 4: MEMORY MANAGEMENT (Chapters 29–36) ===

Chapter 29: The Stack vs The Heap — Complete Guide
Sections: Stack memory: automatic, managed by compiler, limited size (~1-8MB), stores local variables and function call frames. Heap memory: manual, managed by programmer, much larger, stores dynamically allocated data. Visual diagram of a program's memory layout: text segment → data segment → BSS → heap (grows up) → stack (grows down).

Chapter 30: Dynamic Memory — malloc, calloc, realloc, free
Sections: malloc(n) allocates n bytes, returns void* or NULL on failure. ALWAYS check if malloc returned NULL. calloc(count, size) allocates and zeroes memory. realloc(ptr, new_size) resizes allocation. free(ptr) releases memory — MUST be called for every malloc/calloc. What happens if you don't free: memory leak. What happens if you free twice: undefined behavior (crash). What happens if you use after free: undefined behavior (security vulnerability).

Chapter 31: Memory Leaks — Detection and Prevention
Chapter 32: Buffer Overflows — The Most Dangerous C Bug
Chapter 33: Dynamic Arrays Using malloc
Chapter 34: Valgrind — Finding Memory Errors
Chapter 35: Safe Memory Patterns in C
Chapter 36: Memory Management Practice Project

=== PART 5: STRUCTURES AND UNIONS (Chapters 37–44) ===

Chapter 37: Structures — Part 1 (Declaration, Access, Initialization)
Chapter 38: Structures — Part 2 (Nested Structs, Arrays of Structs)
Chapter 39: Structures and Pointers (Arrow Operator ->)
Chapter 40: Passing Structs to Functions (by value vs pointer)
Chapter 41: typedef — Simplifying Type Names
Chapter 42: Unions — Shared Memory Space
Chapter 43: Bit Fields in Structures
Chapter 44: Struct Alignment and Padding

=== PART 6: FILE I/O AND PREPROCESSOR (Chapters 45–52) ===

Chapter 45: File I/O — Part 1 (fopen, fclose, fread, fwrite)
Chapter 46: File I/O — Part 2 (fprintf, fscanf, fgets, fputs)
Chapter 47: File I/O — Part 3 (Binary Files, fseek, ftell, rewind)
Chapter 48: Error Handling in C (errno, perror, strerror)
Chapter 49: The C Preprocessor — #define, #include, #ifdef
Chapter 50: Macros — Simple to Complex (with and without parameters)
Chapter 51: Header Files — Creating Your Own .h Files
Chapter 52: Conditional Compilation and Feature Flags

=== PART 7: DATA STRUCTURES FROM SCRATCH (Chapters 53–68) ===

Chapter 53: Introduction to Data Structures — Why They Matter
Chapter 54: Linked List — Part 1 (Singly Linked List — Build from Scratch)
Chapter 55: Linked List — Part 2 (Doubly Linked List)
Chapter 56: Linked List — Part 3 (Circular Linked List)
Chapter 57: Stack — Build with Array and with Linked List
Chapter 58: Queue — Build with Array and with Linked List
Chapter 59: Binary Tree — Part 1 (Build, Insert, Traverse)
Chapter 60: Binary Tree — Part 2 (BST Search, Delete, Height)
Chapter 61: Hash Table — Build from Scratch (with chaining)
Chapter 62: Sorting Algorithms — Bubble, Selection, Insertion
Chapter 63: Sorting Algorithms — Merge Sort and Quick Sort
Chapter 64: Searching Algorithms — Linear and Binary Search
Chapter 65: Graph Basics — Adjacency Matrix and List
Chapter 66: Recursion Deep Dive — Stack frames and examples
Chapter 67: Dynamic Programming Introduction
Chapter 68: Algorithm Complexity — Big O Notation

=== PART 8: ADVANCED C AND PROJECTS (Chapters 69–85) ===

Chapter 69: C Standard Library — Complete Overview
Chapter 70: Math Functions (math.h) and Complex Numbers
Chapter 71: Time and Date in C (time.h)
Chapter 72: Signal Handling
Chapter 73: Multithreading with pthreads (Introduction)
Chapter 74: Socket Programming Basics (Introduction)
Chapter 75: Interprocess Communication (Pipes, shared memory — intro)
Chapter 76: Writing Portable C Code
Chapter 77: C89 vs C99 vs C11 vs C17 vs C23 — What Changed
Chapter 78: Common C Interview Questions and Patterns

Projects:
Chapter 79: Project — Student Grade Manager (structs + file I/O)
Chapter 80: Project — Dynamic Array Implementation
Chapter 81: Project — Mini Shell (command parser)
Chapter 82: Project — Simple Calculator with Linked List (expression eval)
Chapter 83: Project — File Encryption Tool (XOR cipher)
Chapter 84: Mini Challenge Sets (30 challenges total — 10 per difficulty)
Chapter 85: C Mastery Recap + Certificate Prep

---

## VISUAL MEMORY DIAGRAM COMPONENT

Build /components/lesson/MemoryDiagram.tsx — a React component that visually shows:

- Stack frames (function calls, local variables with addresses)
- Heap allocations (malloc'd blocks, free'd blocks shown differently)
- Pointer arrows (from pointer variable → to pointed-to address)
- Color coding: stack=blue, heap=green, freed=red, null=gray
- Updates live as the lesson explains each step
- Used in all pointer and memory chapters (chapters 17–36)
- This is UNIQUE to the C/C++ tracks — no other track has this

---

## QUALITY REQUIREMENTS

- Zero placeholder content in any of the 85 chapters
- Pointer chapters (17–28) must include visual memory diagrams in every section
- All code examples: compilable with gcc -Wall -Wextra -std=c17
- ALWAYS show what happens when you make the common mistake (with output/error)
- Every quiz: 8+ questions including at least one "spot the bug" and one "code output" type
- Every chapter: 3 practice exercises with progressive hints and full solutions
- Compiler must capture and display GCC-style error messages
- Certificate issues after all 85 chapters + all quizzes ≥80%
- Track color: #A8B9CC (C language blue-gray)
