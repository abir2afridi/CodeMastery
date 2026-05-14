# CODEMASTERY — C++ LANGUAGE TRACK ADDITION

# Add C++ as a 7th track to the existing CodeMastery platform

# 90+ chapters · C-aware · Zero to Modern C++23 · OOP, STL, Templates, Concurrency

## OVERVIEW

Extend the existing CodeMastery platform (Next.js 14 + TypeScript + Tailwind) by adding a complete C++ learning track. Follow ALL existing design patterns, data structures, component conventions, and curriculum depth standards already established.

IMPORTANT: C++ is a superset of C. This track is AWARE of the C track. At the beginning of every chapter that directly extends a C concept (like variables, loops, functions, pointers), show a "🔗 C Connection" callout: "If you completed the C track, you already know X. C++ extends this with Y." If the student hasn't done C, still teach from zero — the callout is informational only, not a prerequisite gate.

C++ is one of the most powerful and complex languages ever created. This curriculum goes from "what is C++" all the way to template metaprogramming, the full STL, modern C++20/23 features, concurrency, and game development introduction.

---

## C++ COMPILER SETUP

Use the same infrastructure as the C compiler but configured for C++:

/components/compiler/CppCompiler.tsx:

- Same JSCPP or Emscripten/WASM approach as C compiler
- For C++ specific features (STL containers, streams, templates): use a server-side compilation API (Piston API — free, open-source) OR Wandbox API
- Piston API: POST to <https://emkc.org/api/v2/piston/execute> with language: "c++" and version: "10.2.0"
- CodeMirror language: @codemirror/lang-cpp (same package supports both C and C++)
- Compiler flags: g++ -Wall -Wextra -std=c++20 -o output source.cpp
- Additional panel: "Assembly Output" (toggle) — shows generated assembly code for curious students
- Template instantiation view for template chapters

---

## CURRICULUM DATA STRUCTURE

Add to /lib/curriculum/cpp-curriculum.ts.
Add "cpp" to Track type union in types.ts.

Track metadata:

- id: "cpp"
- title: "C++ Programming"
- tagline: "Zero-cost abstractions. Maximum power."
- icon: "🔷"
- color: "#00599C"
- totalChapters: 90
- estimatedHours: 145

---

## FULL CURRICULUM — 90 CHAPTERS

=== PART 1: C++ FOUNDATIONS (Chapters 1–10) ===

Chapter 1: What Is C++ and How It Differs from C?
Difficulty: Absolute Beginner | XP: 100 | Time: 35 min

Learning objectives:

- Understand C++ history and philosophy
- Know the difference between C and C++
- Set up C++ development environment
- Write and compile first C++ program
- Understand what "zero-cost abstraction" means

Sections (400+ words each, full real content):

1.1 — What Is C++?
Real-world analogy: If C is a powerful race car engine — raw, fast, manual — then C++ is that same engine with a cockpit added: instrument panels, automated systems, safety features, and comfort — but the engine is still there, still just as powerful, and you can still access it directly if you need to.

Content: C++ was created by Bjarne Stroustrup at Bell Labs in 1979, initially called "C with Classes". The name C++ came from the ++ increment operator — suggesting C++ is an incremented, improved version of C. C++ was standardized in 1998 (C++98), then updated in C++03, C++11 (massive update), C++14, C++17, C++20 (another massive update), and C++23. The version you should target: C++17 for compatibility, C++20 for modern features.

C++ is used for: game engines (Unreal Engine — 100% C++), operating systems (Windows, macOS internals), browsers (Chrome, Firefox engines), databases (MySQL, MongoDB core), financial trading systems (microsecond latency), embedded systems, compilers, and virtually every high-performance application. C++ follows the philosophy of "zero-cost abstractions" — high-level abstractions (classes, templates, STL) should generate code as fast as if you wrote the low-level C equivalent by hand.

1.2 — C vs C++: The Key Differences
What C++ adds to C:

- Classes and Objects (Object-Oriented Programming)
- Namespaces (avoid name collisions)
- References (safer alternative to pointers in many cases)
- Function and operator overloading
- Templates (generic programming)
- The Standard Template Library (STL) — containers, algorithms, iterators
- Exceptions (try/catch/throw)
- new/delete (instead of malloc/free)
- Type inference with auto
- Lambda expressions
- Range-based for loops
- Smart pointers (unique_ptr, shared_ptr, weak_ptr)
- Modules (C++20)
- Coroutines (C++20)
- Concepts (C++20)

C++ is NOT just "C with classes". It is a multi-paradigm language supporting: procedural (like C), object-oriented, generic (templates), functional (lambdas), and concurrent programming.

1.3 — C++ Hello World vs C Hello World

```cpp
// C version
#include <stdio.h>
int main() {
    printf("Hello, World!\n");
    return 0;
}

// C++ version — the C++ way
#include <iostream>
int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

Explaining every character of the C++ version:

- #include <iostream> — includes the C++ Input/Output Stream library
- std:: — the std namespace. All C++ standard library things live here.
- cout — "character output". Sends text to the console.
- << — the stream insertion operator. "Insert this into the stream."
- std::endl — end line. Flushes the buffer AND adds a newline. (\n is faster — no flush.)
- return 0 — same as C.

Also valid (and common): using namespace std; at the top, then just cout without std::.

1.4 — Setting Up the Environment
Same as C but use g++ instead of gcc for C++ files:
g++ --version (verify)
g++ -Wall -Wextra -std=c++20 hello.cpp -o hello
./hello

VS Code: same C/C++ extension works. Create tasks.json with g++ command.
Clang alternative: clang++ hello.cpp -o hello -std=c++20

1.5 — The C++ Compilation Model
Preprocessor → Compiler → Assembler → Linker → Executable. More complex than C because templates are instantiated at compile time, making C++ compilation slower but runtime just as fast as C.

Quiz (8 questions with full explanations):
Q1 (MCQ): Who created C++? A) Dennis Ritchie B) Linus Torvalds C) Bjarne Stroustrup D) Guido van Rossum — Answer: C
Q2 (MCQ): What does "zero-cost abstraction" mean? A) C++ is free to use B) High-level features generate no extra runtime overhead C) C++ compiles instantly D) No memory is used — Answer: B — Explanation: In C++, using high-level abstractions like STL containers or templates generates machine code that is just as efficient as hand-written low-level C code. You pay for what you use, not for what you don't use.
Q3 (True/False): C++ is completely different from C and shares no syntax. — Answer: False — C++ is a superset of C. Almost all valid C code is also valid C++.
Q4 (Code output): What does std::cout << "Score: " << 42 << std::endl; print? — Answer: Score: 42 — Explanation: The << operator chains insertions into cout. Each << adds the next value to the output stream.
Q5 (Fill blank): In C++, standard library functions and objects are in the ___ namespace. — Answer: std
Q6 (MCQ): Which C++ standard introduced lambda expressions and auto? A) C++98 B) C++03 C) C++11 D) C++20 — Answer: C
Q7 (Spot the bug): #include <iostream> int main { std::cout << "Hi"; return 0; } — Bug: main is missing parentheses — should be int main()
Q8 (MCQ): What compiler command correctly compiles a C++20 file? A) gcc main.cpp B) g++ main.cpp -std=c++20 C) cpp main.cpp D) c++ -compile main.cpp — Answer: B

---

Chapter 2: Variables, Types, and Type System in C++
Difficulty: Absolute Beginner | XP: 100 | Time: 40 min

2.1 — C++ Adds to C's Type System
All C types still work. C++ additions:

- bool: true/false (C has _Bool, C++ has proper bool)
- string: std::string (C++ string class — NOT the char array of C)
- auto: type inference (compiler deduces the type)
- nullptr: type-safe null pointer (replaces NULL macro)

```cpp
#include <iostream>
#include <string>

int main() {
    // C-style types (still work in C++)
    int age = 25;
    double price = 19.99;
    char grade = 'A';

    // C++ additions
    bool isActive = true;
    std::string name = "Alice";  // Real string class!
    auto count = 42;             // auto: compiler sees 42 is int
    auto pi = 3.14159;           // auto: compiler sees double
    nullptr;                     // type-safe null

    std::cout << "Name: " << name << "\n";
    std::cout << "Active: " << std::boolalpha << isActive << "\n";
    std::cout << "Count: " << count << "\n";
    return 0;
}
```

2.2 — std::string: A Real String Type
Unlike C's char arrays, std::string is a class. It manages its own memory.

```cpp
std::string first = "Hello";
std::string second = "World";
std::string combined = first + " " + second;  // Concatenation with +
int len = combined.length();                   // .length() method
std::string sub = combined.substr(0, 5);       // "Hello"
bool found = combined.find("World") != std::string::npos;
```

All string methods: length/size, empty, at, front, back, substr, find, rfind, replace, insert, erase, append, compare, c_str (convert to C string), push_back, pop_back, clear.

2.3 — References: The Safe Alternative to Pointers (for most cases)

```cpp
int age = 25;
int& ref = age;   // ref IS age — same memory, different name
ref = 30;         // age is now 30!
std::cout << age; // prints 30
```

Reference rules: must be initialized at declaration, cannot be null, cannot be reseated (always refers to same variable). References vs pointers: references are safer and simpler. Use references when you know you always have a valid object. Use pointers when you need null, reseating, or pointer arithmetic.

2.4 — Type Inference with auto

```cpp
auto x = 42;           // int
auto y = 3.14;         // double
auto z = 'A';          // char
auto s = std::string("hello");  // std::string
auto v = {1,2,3};      // std::initializer_list<int>
```

When to use auto: always when the type is obvious from the right side. When NOT to use auto: when the type is not obvious (readability matters).

2.5 — Uniform Initialization (Brace Initialization)
C++11 introduced {} initialization for everything:

```cpp
int a{42};
double b{3.14};
std::string s{"hello"};
int arr[]{1, 2, 3, 4, 5};
```

Advantage: prevents narrowing conversions. int x{3.14} is a compile ERROR (3.14 doesn't fit in int without truncation). int x = 3.14 silently truncates to 3. Brace init is safer.

[Continue this EXACT depth for all 90 chapters below...]

---

Chapter 3: Operators, I/O Streams, and cin
Chapter 4: Conditionals and Loops (C++ enhancements)
Chapter 5: Functions — References, Overloading, Default Args
Chapter 6: Namespaces — Organizing Code
Chapter 7: Arrays, Vectors, and Range-based For Loops
Chapter 8: Pointers in C++ (and Why Smart Pointers Replace Them)
Chapter 9: References vs Pointers — The Definitive Guide
Chapter 10: Scope, Lifetime, and RAII

=== PART 2: OBJECT-ORIENTED PROGRAMMING (Chapters 11–24) ===

Chapter 11: Classes — Part 1 (Definition, Members, Access Specifiers)
Sections: What is a class (blueprint vs object), class definition syntax, public/private/protected, data members, member functions, inline functions, class vs struct in C++ (only default access differs), why encapsulation matters.

Chapter 12: Classes — Part 2 (Constructors and Destructors)
Sections: Default constructor, parameterized constructor, constructor overloading, constructor initializer list (: member(value) — why it's more efficient), copy constructor, move constructor (C++11), destructor (~ClassName()), RAII — Resource Acquisition Is Initialization pattern.

Chapter 13: Classes — Part 3 (this Pointer, const Methods, static Members)
Chapter 14: Operator Overloading — Part 1 (Arithmetic, Comparison)
Chapter 15: Operator Overloading — Part 2 (Stream, Subscript, Increment)
Chapter 16: Inheritance — Part 1 (Single Inheritance, Access Control)
Chapter 17: Inheritance — Part 2 (Multiple Inheritance, virtual Inheritance)
Chapter 18: Virtual Functions and Polymorphism
Chapter 19: Abstract Classes and Pure Virtual Functions
Chapter 20: Virtual Destructor — Why It Is Critical
Chapter 21: vtable and How Runtime Polymorphism Works Internally
Chapter 22: Friend Functions and Friend Classes
Chapter 23: Copy and Move Semantics (Rule of Three/Five/Zero)
Chapter 24: OOP Design Patterns in C++ (Factory, Observer, Strategy, CRTP)

=== PART 3: TEMPLATES AND GENERIC PROGRAMMING (Chapters 25–34) ===

Chapter 25: Function Templates
Chapter 26: Class Templates
Chapter 27: Template Specialization (Full and Partial)
Chapter 28: Variadic Templates
Chapter 29: Template Metaprogramming Basics
Chapter 30: Concepts (C++20) — Constraining Templates
Chapter 31: SFINAE and enable_if
Chapter 32: Type Traits (std::is_integral, std::is_same, etc.)
Chapter 33: constexpr and Compile-time Computation
Chapter 34: if constexpr and consteval (C++17/20)

=== PART 4: THE STANDARD TEMPLATE LIBRARY (Chapters 35–50) ===

Chapter 35: STL Overview — Containers, Iterators, Algorithms
Chapter 36: std::vector — The Most Used Container
Chapter 37: std::array — Fixed-size Compile-time Array
Chapter 38: std::list and std::forward_list
Chapter 39: std::deque — Double-ended Queue
Chapter 40: std::stack and std::queue (Container Adapters)
Chapter 41: std::priority_queue
Chapter 42: std::set and std::multiset
Chapter 43: std::map and std::multimap
Chapter 44: std::unordered_set and std::unordered_map (Hash Tables)
Chapter 45: Iterators — All 5 Categories (input, output, forward, bidirectional, random access)
Chapter 46: STL Algorithms — Part 1 (sort, find, count, for_each, transform)
Chapter 47: STL Algorithms — Part 2 (binary_search, accumulate, reduce, merge)
Chapter 48: STL Algorithms — Part 3 (set_union, set_intersection, rotate, partition)
Chapter 49: std::string Algorithms and string_view
Chapter 50: Ranges Library (C++20) — ranges::sort, ranges::filter, ranges::transform

=== PART 5: MEMORY AND RESOURCE MANAGEMENT (Chapters 51–58) ===

Chapter 51: Dynamic Memory — new and delete (vs malloc/free)
Chapter 52: Smart Pointers — std::unique_ptr
Chapter 53: Smart Pointers — std::shared_ptr and std::weak_ptr
Chapter 54: Memory Leaks and Valgrind for C++
Chapter 55: RAII in Depth — Every Resource Is an Object
Chapter 56: Custom Allocators (Advanced)
Chapter 57: Stack vs Heap — C++ Perspective
Chapter 58: Move Semantics and Perfect Forwarding Deep Dive

=== PART 6: MODERN C++ FEATURES (Chapters 59–70) ===

Chapter 59: Lambda Expressions — Part 1 (Basics and Capture)
Chapter 60: Lambda Expressions — Part 2 (Generic Lambdas, std::function)
Chapter 61: std::optional, std::variant, std::any (C++17)
Chapter 62: Structured Bindings (C++17)
Chapter 63: std::tuple and std::pair
Chapter 64: Exceptions — try/catch/throw, Exception Safety
Chapter 65: File I/O — fstream, ifstream, ofstream
Chapter 66: Regular Expressions — std::regex
Chapter 67: Multithreading — std::thread, std::mutex, std::lock_guard
Chapter 68: Async Programming — std::async, std::future, std::promise
Chapter 69: Atomic Operations — std::atomic
Chapter 70: Coroutines Introduction (C++20)

=== PART 7: C++ IN PRACTICE (Chapters 71–80) ===

Chapter 71: Build Systems — CMake Complete Guide
Chapter 72: Package Managers — vcpkg and Conan
Chapter 73: Unit Testing — Google Test (gtest)
Chapter 74: Debugging with GDB and VS Code Debugger
Chapter 75: Profiling — gprof and perf
Chapter 76: C++ Code Organization — Header Files, Source Files, Modules (C++20)
Chapter 77: Writing Portable C++ Code
Chapter 78: C++ in Game Development — Introduction to SDL2
Chapter 79: C++ and Embedded Systems — Introduction
Chapter 80: Common C++ Interview Patterns

=== PART 8: PROJECTS (Chapters 81–90) ===

Chapter 81: Project — Bank Account System (OOP + file persistence)
Chapter 82: Project — Generic Data Structures Library (templates)
Chapter 83: Project — STL-based Inventory Manager
Chapter 84: Project — Multi-threaded File Processor
Chapter 85: Project — Mini Game with SDL2 (moving rectangle)
Chapter 86: Project — Expression Calculator (stack + operator precedence)
Chapter 87: Mini Challenge Set 1 — OOP Challenges (10)
Chapter 88: Mini Challenge Set 2 — Template Challenges (10)
Chapter 89: Mini Challenge Set 3 — STL Algorithm Challenges (10)
Chapter 90: C++ Mastery Recap + Certificate Prep

---

## C++ SPECIFIC LESSON FEATURES

1. "C Connection" callout (unique to C++ track):
   - Shows in chapters that extend C concepts
   - Header: "🔗 If you know C..."
   - Body: "In C you used X. C++ keeps this but adds Y. The C way still works."

2. "Modern C++ way" vs "Old C++ way" code blocks:
   - Every chapter that has a modern C++11/14/17/20 feature shows both
   - Old way (pre-C++11): labeled in red/amber
   - Modern way: labeled in green
   - Explains WHY the modern way is better

3. "Compile and Run" shows:
   - Compilation time (C++ can be slow — show it)
   - Binary size (C++ programs can be large — show it)
   - Runtime output

4. Assembly view toggle:
   - For performance-focused chapters (inlining, templates, RAII)
   - Shows the x86 assembly generated by -O2
   - Helps students understand "zero-cost abstractions" concretely

---

## IMPLEMENTATION ORDER (BOTH TRACKS)

1. Add "c" and "cpp" to Track type union in types.ts
2. Update dashboard and landing page to show 7 tracks
3. Build shared CCompiler component (used by both C and C++ tracks, different mode)
4. Build MemoryDiagram component (used in C pointer chapters + C++ memory chapters)
5. Write c-curriculum.ts — ALL 85 chapters with real content (no placeholders)
6. Write cpp-curriculum.ts — ALL 90 chapters with real content (no placeholders)
7. Add "C Connection" callout type to the Callout interface in types.ts
8. Add "Modern vs Old" code block variant to CodeExample component
9. Update certificate system for 2 new tracks (C and C++)
10. Update profile page to show all 7 track progress
11. Test compiler for both C and C++ with all chapter examples
12. Ensure memory diagram renders correctly on lesson pages for pointer chapters

---

## QUALITY REQUIREMENTS

- Zero placeholder content — every chapter full real educational text
- All code: compilable with g++ -Wall -Wextra -std=c++20
- Pointer/memory chapters: MemoryDiagram component used in EVERY section
- "Modern C++ way" vs "old way" shown for all pre-C++11 patterns
- Every quiz: 8+ questions — minimum 1 spot-the-bug, 1 code-output, 1 true/false
- Every chapter: 3 exercises (easy/medium/hard) with 3-level progressive hints
- Certificate issues after all 90 chapters + all quizzes ≥80%
- Track color: #00599C (C++ official blue)
- Track icon: C++ logo SVG (blue hexagon with C++ text)
