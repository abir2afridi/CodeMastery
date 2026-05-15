# CODEMASTERY — JAVA TRACK ADDITION

# Add Java as an 8th track to the existing CodeMastery platform

# 90+ chapters · Absolute Zero to Enterprise-level Java · JVM, OOP, Collections, Streams, Spring Boot intro

## OVERVIEW

Extend the existing CodeMastery platform (Next.js 14 + TypeScript + Tailwind) by adding a complete Java learning track. Follow ALL existing design patterns, data structures, component conventions, and curriculum depth standards already established for all previous tracks (HTML, CSS, JS, Python, TypeScript, C, C++).

Java is the world's most widely used enterprise programming language. This track starts from absolute zero — a student who has never written a single line of code can begin here. The track covers everything from "what is Java" and "how to install the JDK" all the way to generics, the Collections framework, Java Streams, multithreading, JDBC, and an introduction to Spring Boot for building REST APIs.

CROSS-LANGUAGE AWARENESS: At the top of chapters covering concepts that exist in previously taught languages (variables, loops, OOP, etc.), show a "🔗 Language Bridge" callout:

- "If you know Python: Python uses dynamic typing; Java uses static typing — you declare the type explicitly."
- "If you know C++: Java has no pointers, no manual memory management — the JVM handles it."
- "If you know JavaScript: Java is class-based from the ground up, not prototype-based."
These callouts are purely informational — not a prerequisite gate.

---

## JAVA COMPILER SETUP

Java requires the JVM to run. Use the Piston API for server-side execution.

Implementation for /components/compiler/JavaCompiler.tsx:

Primary approach — Piston API (free, open-source, self-hostable):

- Endpoint: POST <https://emkc.org/api/v2/piston/execute>
- Payload: { language: "java", version: "15.0.2", files: [{ name: "Main.java", content: userCode }], stdin: userInput }
- Response: { run: { stdout, stderr, code } }
- Show loading spinner during execution ("Running on JVM...")
- Execution timeout display: 10 seconds max

Fallback — JDoodle API (free tier 200 credits/day):

- POST <https://api.jdoodle.com/v1/execute> with language "java" and versionIndex "4"

Compiler UI layout (/components/compiler/JavaCompiler.tsx):

- Left panel (55%): Java code editor (CodeMirror 6 with @codemirror/lang-java)
- Right panel (45%): tabbed — Output tab | Errors tab | stdin tab
- stdin tab: text area for Scanner input — user pre-fills values separated by newlines
- Error display: parse Java compiler errors — highlight line number in editor with red gutter
- Execution time display: "Ran in 234ms" shown after each run
- "Run" button (Ctrl+Enter), "Clear", "Reset", "Copy Code"
- Class name auto-detection: scan code for "public class X" and warn if filename mismatch
- Template dropdown: "Hello World", "OOP Example", "Collections Demo", "Stream Example"

---

## CURRICULUM DATA STRUCTURE

Add to /lib/curriculum/java-curriculum.ts following existing TypeScript interfaces.
Add "java" to the Track type union in /lib/curriculum/types.ts.

Track metadata:

- id: "java"
- title: "Java"
- tagline: "Write once, run anywhere — the enterprise standard"
- icon: "☕"
- color: "#ED8B00"
- totalChapters: 90
- estimatedHours: 140

---

## FULL CURRICULUM — 90 CHAPTERS

=== PART 1: JAVA FOUNDATIONS (Chapters 1–10) ===

Chapter 1: What Is Java and Why Learn It?
Difficulty: Absolute Beginner | XP: 100 | Time: 30 min

Learning objectives:

- Understand what Java is and its place in the programming world
- Know the difference between JDK, JRE, and JVM
- Set up Java development environment
- Compile and run the first Java program
- Understand what "platform independence" means

Sections (400–600 words each, zero placeholders, full real content):

1.1 — What Is Java?
Real-world analogy: Most programs are like letters written in a specific language — a letter in Bengali only works for Bengali speakers. Java is like a universal translation machine: you write your letter once, and the machine translates it for ANY reader (Windows, Mac, Linux, Android, smart TV) automatically. This is Java's famous promise: "Write Once, Run Anywhere."

Content: Java was created by James Gosling at Sun Microsystems in 1995. It was originally designed for interactive television (set-top boxes), but pivoted to the internet — and became the dominant language of the web era. Today Java is used by: Android (all Android apps were historically Java), enterprise backends (Netflix, LinkedIn, Uber, Amazon backend services), banking systems (most bank transaction processing runs Java), scientific applications (CERN uses Java), big data (Apache Hadoop and Spark are Java), and embedded devices. Java is consistently in the top 2-3 most used languages worldwide (TIOBE index). The Android ecosystem alone has made Java one of the most important languages ever created — there are billions of Android devices running Java code.

1.2 — JDK vs JRE vs JVM — The Holy Trinity
JVM (Java Virtual Machine): A program that runs Java bytecode. It is platform-specific — there is a different JVM for Windows, Mac, and Linux. The JVM is what makes "run anywhere" possible. JRE (Java Runtime Environment): JVM + standard libraries. What end users install to RUN Java programs. JDK (Java Development Kit): JRE + compiler (javac) + debugging tools + other developer tools. What DEVELOPERS install to WRITE and compile Java programs. Rule: always install the JDK, not just the JRE.

How Java runs: You write Hello.java → javac Hello.java compiles it to Hello.class (bytecode, NOT machine code) → java Hello runs Hello.class on the JVM → JVM translates bytecode to machine code for your specific CPU at runtime (JIT compilation).

1.3 — Installing the JDK
Install OpenJDK 21 (LTS — Long Term Support):

- Windows: Download from <https://adoptium.net> → installer → check "Set JAVA_HOME"
- macOS: brew install openjdk@21
- Linux: sudo apt install openjdk-21-jdk (Ubuntu/Debian)
Verify: java --version and javac --version both should print 21.x.x
Set up VS Code: Install "Extension Pack for Java" by Microsoft (includes Language Support for Java, Debugger, Maven, and more). Or use IntelliJ IDEA Community Edition (free) — the industry standard Java IDE.
Create project: mkdir java-learning && cd java-learning → create Hello.java.

1.4 — First Java Program — Every Character Explained

```java
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

EVERY character explained in detail:

- public: access modifier — this class/method is accessible from anywhere
- class: the keyword that declares a class. In Java, EVERYTHING lives inside a class. There is no code outside of classes.
- Hello: the class name. MUST exactly match the filename (Hello.java). Case-sensitive.
- { }: opening and closing curly braces define the body of the class.
- public static void main(String[] args): the entry point. Java always starts here.
  - public: accessible from anywhere (the JVM needs to call it)
  - static: belongs to the class, not an instance. JVM calls it without creating an object.
  - void: this method returns nothing
  - main: the special name JVM looks for
  - String[] args: command-line arguments passed to the program (array of Strings)
- System.out.println("Hello, World!"): print to console with a newline at the end.
  - System: a class in java.lang package (auto-imported)
  - out: a static field of System — it is a PrintStream object
  - println: a method of PrintStream that prints and adds a newline
  - "Hello, World!": a String literal

1.5 — Compiling and Running Java

```bash
javac Hello.java       # Compile — produces Hello.class (bytecode)
java Hello             # Run — JVM executes the bytecode
```

Important: java Hello (no .class extension). Common beginner mistake: typing java Hello.class gives an error. Explain why.
Using IntelliJ: green Run button. Using VS Code: Run Java button or F5. The IDE handles compilation automatically.
What is Hello.class: open it in a hex editor — you will see bytecode, not readable text. This is what the JVM executes. It is platform-independent binary.

Quiz (8 questions with full detailed explanations):
Q1 (MCQ): Who created Java? A) Linus Torvalds B) James Gosling C) Bjarne Stroustrup D) Dennis Ritchie — Answer: B — James Gosling created Java at Sun Microsystems. Sun Microsystems was later acquired by Oracle, which now maintains Java.
Q2 (True/False): You should install the JRE (not JDK) to write Java programs. — Answer: False — Developers need the JDK which includes the compiler (javac). The JRE only allows running Java programs, not creating them.
Q3 (MCQ): What does javac Hello.java produce? A) An executable .exe file B) A Hello.class bytecode file C) Machine code D) A .jar file — Answer: B — javac is the Java compiler. It produces .class files containing Java bytecode, which is platform-independent binary code for the JVM.
Q4 (Spot the bug): public class hello { public static void main(String[] args) { System.out.println("Hi"); } } — Bug: class name "hello" must match filename. Java class names must start with uppercase by convention, and the filename must be "hello.java" — but convention requires "Hello.java" with capital H.
Q5 (Fill blank): In Java, every line of code must live inside a ___. — Answer: class
Q6 (MCQ): What does JVM stand for? A) Java Virtual Memory B) Java Variable Manager C) Java Virtual Machine D) Java Version Manager — Answer: C
Q7 (Code output): System.out.println("Java " + 8 + 8); — Answer: Java 88 — Explanation: String + number = String concatenation in Java. "Java " + 8 gives "Java 8", then "Java 8" + 8 gives "Java 88". NOT "Java 16". This is a classic Java gotcha.
Q8 (True/False): Java bytecode (.class files) can run on any operating system without modification. — Answer: True — This is Java's "Write Once, Run Anywhere" promise. The JVM on each platform translates the same bytecode to that platform's machine code.

Practice exercises:
Exercise 1 (Easy): Create a Java program that prints your name, your country, and "I am learning Java!" each on a separate line using three System.out.println() calls.
Exercise 2 (Easy): Write a program with two classes in the same file (only one can be public). The public class has main, it calls a method from the second class that prints a greeting.
Exercise 3 (Medium): Write a Java program that prints all even numbers from 2 to 20 and their squares, formatted as a table using System out printf with column alignment.

---

Chapter 2: Variables, Data Types, and Type System
Difficulty: Absolute Beginner | XP: 100 | Time: 45 min

2.1 — Java Is Statically Typed
In Python: x = 42 (type inferred at runtime, can change)
In Java: int x = 42; (type declared at compile time, CANNOT change)
Java knows the type of every variable at compile time. This means type errors are caught before the program runs — not while it is running in production.

2.2 — Primitive Data Types (8 types — memorize these)
byte: 1 byte, -128 to 127
short: 2 bytes, -32768 to 32767
int: 4 bytes, -2,147,483,648 to 2,147,483,647 (most common integer type)
long: 8 bytes, -9.2 quintillion to +9.2 quintillion (use L suffix: 8000000000L)
float: 4 bytes, ~7 decimal digits (use f suffix: 3.14f) — avoid, prefer double
double: 8 bytes, ~15 decimal digits (default for decimals)
boolean: true or false (not 0/1 like C — only true/false)
char: 2 bytes, single Unicode character in single quotes: 'A', '😊' (Unicode!)

```java
int age = 25;
long population = 8_000_000_000L;  // Underscore separators for readability (Java 7+)
double price = 19.99;
boolean isActive = true;
char initial = 'J';
byte smallNum = 127;
```

2.3 — Reference Types vs Primitive Types
Java has two categories: primitives (above 8 types — stored by VALUE in stack) and reference types (objects — stored by REFERENCE in heap). String is a reference type. Arrays are reference types. All objects (instances of classes) are reference types. Key difference: int a = 5; int b = a; b = 10; — a is still 5 (value copy). With objects, assignment copies the reference, not the object.

2.4 — String in Java
String is a class, not a primitive. String greeting = "Hello"; String name = new String("Alice"); (both valid, first preferred). Strings are IMMUTABLE in Java — once created, cannot be changed. "Changing" a String creates a NEW String object. String methods: length(), charAt(), substring(), indexOf(), contains(), startsWith(), endsWith(), toUpperCase(), toLowerCase(), trim(), strip(), replace(), split(), join(), equals(), equalsIgnoreCase(), compareTo(), isEmpty(), isBlank(), formatted() (Java 15+). String comparison: NEVER use == for Strings (compares references). ALWAYS use .equals().

2.5 — Type Casting and Widening/Narrowing
Widening (automatic, safe): byte → short → int → long → float → double
Narrowing (manual, may lose data): double → float → long → int → short → byte

```java
int i = 100;
long l = i;        // Widening: automatic
double d = i;      // Widening: automatic
int back = (int) d; // Narrowing: explicit cast required
```

Integer.parseInt("42") — String to int. String.valueOf(42) — int to String. Double.parseDouble("3.14"). Integer.MAX_VALUE, Integer.MIN_VALUE constants.

[Continue this EXACT depth for all 90 chapters...]

---

Chapter 3: Operators and Expressions
Chapter 4: Input with Scanner — Reading from Console
Chapter 5: Conditionals — if/else if/else, switch, switch expressions (Java 14+)
Chapter 6: Loops — for, while, do-while, for-each, break, continue, labeled
Chapter 7: Methods — Declaration, Parameters, Return, Overloading
Chapter 8: Scope and Variable Lifetime
Chapter 9: Arrays — 1D, 2D, jagged, Arrays utility class
Chapter 10: Varargs and Command Line Arguments

=== PART 2: OBJECT-ORIENTED PROGRAMMING (Chapters 11–26) ===

Chapter 11: Classes and Objects — Part 1
Sections: Class definition, fields (instance variables), methods, constructor, creating objects with new, the new keyword and heap allocation, this keyword, multiple constructors (overloading), constructor chaining (this()), default constructor rules.

Chapter 12: Classes and Objects — Part 2
Sections: Getters and setters (JavaBeans convention), encapsulation — why private fields matter, toString() override (how System.out.println uses it), equals() and hashCode() contract (critical — explain deeply with examples), the Object class — all methods.

Chapter 13: Static Members — Class-level vs Instance-level
Chapter 14: Inheritance — extends, method overriding, super keyword
Chapter 15: Polymorphism — Compile-time vs Runtime
Chapter 16: Abstract Classes vs Interfaces — Part 1
Chapter 17: Abstract Classes vs Interfaces — Part 2 (default methods, Java 8+)
Chapter 18: The final Keyword — Classes, Methods, Variables
Chapter 19: Access Modifiers — public, private, protected, package-private
Chapter 20: Inner Classes — Static nested, Non-static inner, Local, Anonymous
Chapter 21: Enums in Java — Advanced Usage
Chapter 22: Records (Java 16+) — Immutable Data Classes
Chapter 23: Sealed Classes (Java 17+)
Chapter 24: Design Patterns — Part 1 (Singleton, Factory, Builder)
Chapter 25: Design Patterns — Part 2 (Observer, Strategy, Decorator)
Chapter 26: SOLID Principles with Java Examples

=== PART 3: EXCEPTION HANDLING AND DEBUGGING (Chapters 27–32) ===

Chapter 27: Exceptions — try/catch/finally, Exception Hierarchy
Chapter 28: Checked vs Unchecked Exceptions
Chapter 29: Custom Exceptions and Best Practices
Chapter 30: try-with-resources (AutoCloseable)
Chapter 31: Multi-catch and Exception Chaining
Chapter 32: Debugging in IntelliJ/VS Code — Breakpoints, Watch, Step

=== PART 4: COLLECTIONS FRAMEWORK (Chapters 33–46) ===

Chapter 33: Collections Overview — The Big Picture
Chapter 34: ArrayList — The Dynamic Array
Chapter 35: LinkedList — Doubly Linked, Deque Implementation
Chapter 36: Stack and Queue in Java
Chapter 37: HashSet, LinkedHashSet, TreeSet
Chapter 38: HashMap — Part 1 (Basics, Internal Hashing)
Chapter 39: HashMap — Part 2 (LinkedHashMap, TreeMap, computeIfAbsent)
Chapter 40: PriorityQueue — Heap-based Queue
Chapter 41: Collections Utility Class (sort, shuffle, frequency, min, max)
Chapter 42: Comparable vs Comparator — Sorting Custom Objects
Chapter 43: Iterators and Iterable
Chapter 44: Generics — Part 1 (Generic Classes and Methods)
Chapter 45: Generics — Part 2 (Wildcards, bounded types)
Chapter 46: Collections Best Practices and Common Mistakes

=== PART 5: FUNCTIONAL JAVA — LAMBDAS AND STREAMS (Chapters 47–56) ===

Chapter 47: Functional Interfaces — Predicate, Function, Consumer, Supplier
Chapter 48: Lambda Expressions — Full Guide
Chapter 49: Method References (:: operator)
Chapter 50: Optional — Avoiding NullPointerException
Chapter 51: Stream API — Part 1 (filter, map, collect)
Chapter 52: Stream API — Part 2 (reduce, flatMap, distinct, sorted)
Chapter 53: Stream API — Part 3 (groupingBy, partitioningBy, joining)
Chapter 54: Collectors in Depth
Chapter 55: Parallel Streams
Chapter 56: Stream vs Loop — When to Use Each

=== PART 6: FILE I/O AND MODERN JAVA (Chapters 57–66) ===

Chapter 57: File I/O — java.io (FileReader, FileWriter, BufferedReader)
Chapter 58: File I/O — java.nio.file (Path, Files, Paths — modern approach)
Chapter 59: Serialization and Deserialization
Chapter 60: Working with JSON (Jackson or Gson library)
Chapter 61: Date and Time — java.time API (LocalDate, LocalDateTime, ZonedDateTime)
Chapter 62: Regular Expressions in Java (java.util.regex)
Chapter 63: String Formatting — printf, format, formatted, MessageFormat
Chapter 64: StringBuilder and StringBuffer
Chapter 65: Java Modules System (JPMS — Java 9+)
Chapter 66: Records, Pattern Matching, Text Blocks — Modern Java Features

=== PART 7: CONCURRENCY AND JVM (Chapters 67–78) ===

Chapter 67: Threads — Creating, Starting, Joining
Chapter 68: Runnable and Callable
Chapter 69: Synchronization — synchronized, volatile, atomic
Chapter 70: ExecutorService and Thread Pools
Chapter 71: CompletableFuture — Async Programming
Chapter 72: Virtual Threads (Java 21 — Project Loom)
Chapter 73: The JVM Internals — Heap, Stack, Method Area, GC
Chapter 74: Garbage Collection — Types and Tuning Basics
Chapter 75: Java Memory Model
Chapter 76: Performance Profiling (JVisualVM, Java Flight Recorder)
Chapter 77: JVM Languages Overview (Kotlin, Scala, Groovy)
Chapter 78: Reflection API

=== PART 8: PROJECTS (Chapters 79–90) ===

Chapter 79: Project — Student Management System (OOP + Collections)
Chapter 80: Project — Bank Account Application (Inheritance + Exceptions)
Chapter 81: Project — CSV File Processor (File I/O + Streams)
Chapter 82: Project — TODO App with JSON Persistence (Jackson)
Chapter 83: Project — Multi-threaded Download Simulator
Chapter 84: Project — REST API Client (HttpClient Java 11+)
Chapter 85: Project — Mini Spring Boot REST API (intro only)
Chapter 86: Mini Challenge Set 1 — OOP Challenges (10)
Chapter 87: Mini Challenge Set 2 — Collections + Streams (10)
Chapter 88: Mini Challenge Set 3 — Algorithm Challenges (10)
Chapter 89: Java Interview Questions and Patterns
Chapter 90: Java Mastery Recap + Certificate Prep

---

## JAVA-SPECIFIC LESSON FEATURES

1. JVM Visualization Component (/components/lesson/JvmDiagram.tsx):
   - Visual diagram showing Stack (method calls, local variables) vs Heap (objects)
   - Used in chapters 11 (objects), 73 (JVM internals), 74 (GC)
   - Animate object creation (new keyword) → appears on heap
   - Animate GC collecting unreferenced objects
   - Reference arrows from stack variables → heap objects

2. "Language Bridge" callout (unique to Java track):
   - Shown at the top of chapters with cross-language equivalents
   - Tabs: "If you know Python" | "If you know JavaScript" | "If you know C++"
   - Each tab shows the equivalent concept in that language vs Java

3. Common Java Gotchas callout box (shown proactively):
   - String comparison with == vs .equals() — Chapter 2
   - Integer caching (-128 to 127) — Chapter 2
   - 0.1 + 0.2 floating point issue — Chapter 3
   - Array index out of bounds — Chapter 9
   - NullPointerException patterns — Chapter 50

---

## QUALITY REQUIREMENTS

- Zero placeholder content in any of the 90 chapters
- All code: compilable with Java 21 (OpenJDK 21 LTS)
- Every modern Java feature (records, switch expressions, text blocks, pattern matching, virtual threads) gets its own dedicated section
- Every quiz: 8+ questions — minimum 1 "spot the bug", 1 "code output", 1 true/false
- Every chapter: 3 practice exercises with 3-level progressive hints + full solutions
- Compiler must display actual Java error messages with line numbers
- Certificate issues after all 90 chapters + all quizzes >= 80%
- Track color: #ED8B00 (Java orange)
- Track icon: Java coffee cup SVG
