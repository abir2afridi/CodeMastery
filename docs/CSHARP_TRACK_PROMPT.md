# CODEMASTERY — C# TRACK ADDITION

# Add C# as a 9th track to the existing CodeMastery platform

# 85+ chapters · Absolute Zero to .NET Pro · OOP, LINQ, async/await, ASP.NET Core, Unity intro

## OVERVIEW

Extend the existing CodeMastery platform (Next.js 14 + TypeScript + Tailwind) by adding a complete C# (.NET) learning track. Follow ALL existing design patterns, data structures, component conventions, and curriculum depth standards established across all previous tracks.

C# is Microsoft's flagship language — modern, elegant, and extremely powerful. This track covers everything from absolute basics to professional-level C# development including LINQ, async/await, ASP.NET Core REST APIs, Entity Framework Core, and an introduction to Unity game development. Every chapter is written to the same depth standard — 400+ words per section, real code, real explanations, nothing placeholder.

CROSS-LANGUAGE AWARENESS — "🔗 Language Bridge" callouts appear in every chapter where a concept exists in previously taught languages:

- "If you know Java: C# is very similar — same static typing, same OOP model, but with properties, LINQ, and async/await built-in from the start."
- "If you know Python: C# uses static typing, curly braces for blocks, and semicolons — opposite of Python's style."
- "If you know JavaScript/TypeScript: C# async/await syntax looks identical but runs on .NET, not Node."
- "If you know C++: C# has no manual memory management — .NET's GC handles it like Java."

---

## C# COMPILER SETUP

C# runs on the .NET runtime. Use Piston API for browser compilation.

Implementation for /components/compiler/CSharpCompiler.tsx:

Primary approach — Piston API:

- POST <https://emkc.org/api/v2/piston/execute>
- Payload: { language: "csharp", version: "6.12.0", files: [{ name: "Program.cs", content: userCode }], stdin: userInput }
- Response: { run: { stdout, stderr, code } }

Secondary — .NET Blazor WebAssembly approach for advanced chapters:

- Embed a Roslyn compiler (C# compiler) compiled to WebAssembly
- This allows true in-browser C# compilation without a server
- Package: @microsoft/dotnet-interactive or use Blazor WASM in iframe

Compiler UI layout (/components/compiler/CSharpCompiler.tsx):

- Left (55%): C# editor (CodeMirror 6 with @codemirror/lang-csharp or closest available)
- Right (45%): Output tab | Errors tab | stdin tab | IL Code tab (Intermediate Language viewer for advanced chapters)
- IL Code tab: shows the compiled Intermediate Language (like Java bytecode) — used in advanced chapters
- "Run" (Ctrl+Enter), "Clear", "Reset", "Copy"
- Top-level statements mode toggle (C# 9+ — no class/Main boilerplate needed)
- Error display: parse Roslyn error format (CS0001 style) — highlight in editor

---

## CURRICULUM DATA STRUCTURE

Add to /lib/curriculum/csharp-curriculum.ts.
Add "csharp" to Track type union in types.ts.

Track metadata:

- id: "csharp"
- title: "C#"
- tagline: "Elegant, powerful, and backed by .NET"
- icon: "💜"
- color: "#9B4993"
- totalChapters: 85
- estimatedHours: 135

---

## FULL CURRICULUM — 85 CHAPTERS

=== PART 1: C# FOUNDATIONS (Chapters 1–10) ===

Chapter 1: What Is C# and the .NET Ecosystem?
Difficulty: Absolute Beginner | XP: 100 | Time: 35 min

Learning objectives:

- Understand what C# is and its relationship to .NET
- Know where C# is used in the real world
- Set up .NET SDK and first project
- Write, compile, and run first C# program
- Understand CLR and IL (Intermediate Language)

Sections (400–600 words each, zero placeholders):

1.1 — What Is C#?
Real-world analogy: .NET is like a massive, well-equipped workshop. C# is the master tool in that workshop — the one most craftsmen reach for first. The workshop provides all the power tools (libraries, frameworks, runtime), and C# is how you use them.

Content: C# (pronounced "C Sharp") was created by Anders Hejlsberg at Microsoft in 2000 as part of the .NET initiative. Hejlsberg previously designed Turbo Pascal and Delphi — two highly influential languages — so C# had exceptional design from day one. C# is used for: Windows desktop apps (WPF, WinForms), web backends (ASP.NET Core — used by Stack Overflow, which handles millions of requests/day entirely on C# and SQL Server), cross-platform mobile apps (Xamarin / MAUI), game development (Unity — the game engine behind Pokémon GO, Cuphead, Hollow Knight, and thousands of mobile games), cloud services (Azure Functions, Azure Service Fabric), and machine learning (.NET ML). C# version history: C# 1.0 (2002) → 2.0 (generics) → 3.0 (LINQ, lambdas) → 4.0 (dynamic) → 5.0 (async/await) → 6-7 (expression bodies, tuples) → 8.0 (nullable reference types) → 9.0 (records, top-level statements) → 10.0 (global usings) → 11.0 (required members) → 12.0 (primary constructors) — always improving. Current: C# 12 / .NET 8 (LTS).

1.2 — .NET, CLR, and IL — The Execution Model
.NET (dotnet) is the platform/runtime/framework: it provides the CLR (Common Language Runtime), the BCL (Base Class Library — thousands of built-in classes), and the SDK (tools like dotnet CLI). CLR is to C# what JVM is to Java: it executes managed code, handles garbage collection, provides type safety. IL (Intermediate Language, also called MSIL or CIL): C# compiles to IL, not machine code. The CLR JIT-compiles IL to machine code at runtime. The same IL can run on Windows, Linux, and macOS. .NET 5+ unified all .NET variants (.NET Core, .NET Framework, Xamarin) into one cross-platform .NET.

1.3 — Installing .NET SDK
Download: <https://dot.net> → Download .NET 8 SDK (LTS)
Verify: dotnet --version → should print 8.x.x
Install VS Code + C# Dev Kit extension (free, official Microsoft extension)
Or: Visual Studio Community 2022 (free, Windows/Mac, most powerful C# IDE)
Create first project:

```bash
dotnet new console -n HelloWorld
cd HelloWorld
dotnet run
```

Explain the project structure: HelloWorld.csproj (project file, XML), Program.cs (main code file), bin/ (compiled output), obj/ (intermediate build files).

1.4 — First C# Program — Two Styles
Classic style (before C# 9):

```csharp
using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
}
```

Modern style — Top-level statements (C# 9+, .NET 6+):

```csharp
Console.WriteLine("Hello, World!");
```

That is the ENTIRE file. The compiler generates the class and Main method for you. This is now the default in new .NET projects. Both styles are valid. This curriculum teaches modern style first, then explains the classic style for reading legacy code.

EVERY character explained (classic style):

- using System;: imports the System namespace — contains Console, Math, String, and thousands of other types
- namespace HelloWorld: groups related types under a name to avoid conflicts
- class Program: a class named Program (must match filename convention, though not required for non-public classes)
- static void Main(string[] args): the entry point — same pattern as Java's public static void main(String[] args) but lowercase void, lowercase string
- Console.WriteLine: Console is a static class, WriteLine is a method that prints + newline
- string[] args: command-line arguments

1.5 — Running and Understanding the Output

```bash
dotnet run               # Compile + run in one command
dotnet build             # Compile only (produces .dll in bin/)
dotnet run -- arg1 arg2  # Pass command-line arguments
```

Difference from Java: in C#/dotnet, you do not manually run javac then java. dotnet run handles both steps. The output is a .dll file (Dynamic Link Library) which the CLR runs. On Windows you can also produce a self-contained .exe.

Quiz (8 questions with full explanations):
Q1 (MCQ): Who created C#? A) James Gosling B) Bjarne Stroustrup C) Anders Hejlsberg D) Guido van Rossum — Answer: C — Anders Hejlsberg, who previously designed Turbo Pascal and Delphi, created C# at Microsoft in 2000. He is one of the most influential programming language designers in history.
Q2 (True/False): C# can only run on Windows. — Answer: False — Since .NET Core (now unified as .NET), C# runs cross-platform on Windows, macOS, and Linux. Stack Overflow runs C# on Linux in production.
Q3 (MCQ): What does CLR stand for? A) Common Library Runtime B) C# Language Reference C) Common Language Runtime D) Compiled Language Repository — Answer: C — CLR (Common Language Runtime) is the virtual machine component of .NET. It executes IL (Intermediate Language), handles garbage collection, and provides type safety.
Q4 (Spot the bug): Console.writeline("Hello"); — Bug: writeline should be WriteLine (capital W and L) — C# is case-sensitive and all .NET method names follow PascalCase convention.
Q5 (Fill blank): In C# 9+ top-level statements, you can write ___ without a class or Main method. — Answer: Console.WriteLine() directly (any statement directly in the file)
Q6 (Code output): Console.WriteLine("C#" + " " + 12); — Answer: C# 12 — String concatenation with + operator. "C#" + " " = "C# ", then "C# " + 12 = "C# 12" (int 12 is implicitly converted to string).
Q7 (MCQ): What file extension do C# source files use? A) .cs B) .csharp C) .net D) .csx — Answer: A — C# source files use the .cs extension. The project file uses .csproj.
Q8 (True/False): C# compiles directly to machine code. — Answer: False — C# compiles to IL (Intermediate Language). The CLR's JIT compiler converts IL to machine code at runtime, similar to Java's JVM and bytecode model.

Practice exercises:
Exercise 1 (Easy): Write a C# program (top-level statements style) that prints your full name, your favorite programming language, and today's date using Console.WriteLine three times.
Exercise 2 (Easy): Write a program that uses Console.Write (without newline) to print "Hello " and then Console.WriteLine to print "World!" so they appear on the same line.
Exercise 3 (Medium): Write a classic-style C# program (with namespace, class, and Main) that asks the user for their name using Console.ReadLine(), then greets them with "Welcome to CodeMastery, {name}!".

---

Chapter 2: Variables, Data Types, and Type System
Difficulty: Absolute Beginner | XP: 100 | Time: 45 min

2.1 — C# Value Types vs Reference Types
C# has two fundamental categories: value types (stored on stack, copied by value) and reference types (stored on heap, accessed by reference). Value types: all numeric types, bool, char, struct, enum. Reference types: string, arrays, class instances, delegates, interfaces.

2.2 — Built-in Value Types

```csharp
// Integer types
byte b = 255;          // 0 to 255 (1 byte, unsigned)
sbyte sb = -128;       // -128 to 127 (1 byte, signed)
short s = -32000;      // 2 bytes
ushort us = 65535;     // 2 bytes, unsigned
int i = 2_147_483_647; // 4 bytes (most common — use _ for readability)
uint ui = 4_294_967_295U; // 4 bytes, unsigned
long l = 9_000_000_000L;  // 8 bytes
ulong ul = 18_446_744_073_709_551_615UL; // 8 bytes, unsigned

// Floating-point types
float f = 3.14f;       // 4 bytes, 7 sig digits (f suffix required)
double d = 3.14159265; // 8 bytes, 15-16 sig digits (default for decimals)
decimal m = 19.99m;    // 16 bytes, 28-29 sig digits (m suffix) — use for MONEY

// Other value types
bool active = true;    // true or false
char c = 'A';          // 2 bytes, Unicode UTF-16
```

Key C# advantage over Java: decimal type. For financial calculations, always use decimal — not float or double. Banks and e-commerce systems in C# use decimal to avoid floating-point rounding errors.

2.3 — var — Type Inference

```csharp
var name = "Alice";      // string (inferred)
var age = 25;            // int (inferred)
var price = 19.99m;      // decimal (inferred from m suffix)
var items = new List<string>(); // List<string> (inferred)
```

var vs auto (C++): same concept. var vs dynamic: var is resolved at COMPILE TIME (still type-safe). dynamic is resolved at RUNTIME (loses type safety — rarely use). Best practice: use var when the type is obvious from the right side. Use explicit type when it aids readability.

2.4 — string in C#
string is an alias for System.String. Strings are immutable reference types. String interpolation (C# 6+): $"Hello, {name}! You are {age} years old." — cleaner than Java's String.format. Verbatim strings: @"C:\Users\Alice\Documents" (no need to escape backslashes). Raw string literals (C# 11): """No escaping needed at all.""". All string methods: Length, ToUpper, ToLower, Trim, TrimStart, TrimEnd, Contains, StartsWith, EndsWith, IndexOf, LastIndexOf, Substring, Replace, Split, Join, IsNullOrEmpty, IsNullOrWhiteSpace, PadLeft, PadRight, Remove, Insert, Equals, Compare, Format, Concat, string.Join.

2.5 — Nullable Types
C# 8+ enables nullable reference types. int? nullableInt = null; — the ? makes a value type nullable. string? nullableString = null; — with nullable reference types enabled, string is non-nullable by default. Null-conditional operator: user?.Name (returns null if user is null). Null-coalescing operator: user?.Name ?? "Guest". Null-coalescing assignment: x ??= defaultValue (assign only if null). These features prevent NullReferenceException — C#'s equivalent of Java's NullPointerException.

[Continue this EXACT depth for all 85 chapters...]

---

Chapter 3: Operators, Expressions, and Math
Chapter 4: Reading Input — Console.ReadLine(), Convert, int.Parse, int.TryParse
Chapter 5: Conditionals — if/else, switch, switch expressions (C# 8+)
Chapter 6: Pattern Matching in switch (C# 9+ property patterns, positional patterns)
Chapter 7: Loops — for, while, do-while, foreach, break, continue
Chapter 8: Methods — Parameters, Return Types, Expression-bodied Members
Chapter 9: Arrays — 1D, 2D, jagged, Array class methods
Chapter 10: Strings Deep Dive — All Methods + StringBuilder + String Interning

=== PART 2: OBJECT-ORIENTED PROGRAMMING (Chapters 11–26) ===

Chapter 11: Classes and Objects — Part 1 (Fields, Methods, Constructors)
Chapter 12: Properties — The C# Way (get; set; init;, auto-properties, computed)
Chapter 13: Static Members and Utility Classes
Chapter 14: Inheritance (: BaseClass), base keyword, sealed
Chapter 15: Polymorphism — virtual, override, abstract
Chapter 16: Interfaces — Part 1 (Definition, Implementing, Explicit Implementation)
Chapter 17: Interfaces — Part 2 (Default Interface Methods, Multiple Interfaces)
Chapter 18: Abstract Classes vs Interfaces — The Definitive C# Guide
Chapter 19: Access Modifiers — public, private, protected, internal, protected internal, private protected
Chapter 20: Records (C# 9+) — Immutable Data, with expressions, positional records
Chapter 21: Structs — Value-type Objects
Chapter 22: Enums — Flags, ToString, Parse, switch with enums
Chapter 23: Indexers and Operator Overloading
Chapter 24: Design Patterns in C# — Singleton, Factory, Builder, Repository
Chapter 25: SOLID Principles with C# Examples
Chapter 26: Generics — Part 1 (Generic Classes, Methods, Constraints)

=== PART 3: EXCEPTIONS AND FILE I/O (Chapters 27–34) ===

Chapter 27: Exception Handling — try/catch/finally, Exception Hierarchy
Chapter 28: Custom Exceptions — Creating and Throwing
Chapter 29: using statement and IDisposable Pattern
Chapter 30: File I/O — System.IO (File, Directory, Path, FileInfo)
Chapter 31: File I/O — StreamReader, StreamWriter, BinaryReader
Chapter 32: Serialization — JSON with System.Text.Json (built-in .NET 5+)
Chapter 33: Working with XML — XDocument and LINQ to XML
Chapter 34: Environment Variables and Configuration

=== PART 4: FUNCTIONAL C# — LINQ AND DELEGATES (Chapters 35–46) ===

Chapter 35: Delegates — The Foundation of Events
Chapter 36: Events — Publisher/Subscriber Pattern
Chapter 37: Lambda Expressions in C#
Chapter 38: Func, Action, Predicate — Built-in Delegate Types
Chapter 39: LINQ — Part 1 (Where, Select, OrderBy, GroupBy)
Chapter 40: LINQ — Part 2 (Join, Aggregate, First, Single, Any, All, Count)
Chapter 41: LINQ — Part 3 (Query Syntax vs Method Syntax)
Chapter 42: LINQ to Objects — Working with Collections
Chapter 43: IEnumerable and Deferred Execution
Chapter 44: yield return and Custom Iterators
Chapter 45: Extension Methods — Adding Methods to Existing Types
Chapter 46: Anonymous Types and Tuples

=== PART 5: ASYNC PROGRAMMING (Chapters 47–54) ===

Chapter 47: Synchronous vs Asynchronous — The Big Picture
Chapter 48: async and await — The C# Way
Chapter 49: Task and Task<T> — The Promise of C#
Chapter 50: Task.WhenAll and Task.WhenAny
Chapter 51: CancellationToken — Cooperative Cancellation
Chapter 52: HttpClient — Making HTTP Requests
Chapter 53: IAsyncEnumerable — Async Streams
Chapter 54: ValueTask and Performance Async Patterns

=== PART 6: COLLECTIONS AND GENERICS DEEP DIVE (Chapters 55–64) ===

Chapter 55: List<T> vs Array vs IList<T>
Chapter 56: Dictionary<TKey, TValue> — Complete Guide
Chapter 57: HashSet<T> and SortedSet<T>
Chapter 58: Queue<T>, Stack<T>, LinkedList<T>
Chapter 59: ImmutableCollections (System.Collections.Immutable)
Chapter 60: Span<T> and Memory<T> — High-performance Slicing
Chapter 61: Generics — Part 2 (Covariance, Contravariance)
Chapter 62: Custom Generic Collections
Chapter 63: LINQ with Dictionaries and Complex Queries
Chapter 64: Collections Performance — Benchmarking with BenchmarkDotNet

=== PART 7: .NET ECOSYSTEM AND PRACTICAL C# (Chapters 65–78) ===

Chapter 65: .NET CLI — All Commands You Need
Chapter 66: NuGet — Package Manager for .NET
Chapter 67: Unit Testing with xUnit + FluentAssertions
Chapter 68: Mocking with Moq
Chapter 69: Dependency Injection — Built-in .NET DI Container
Chapter 70: ASP.NET Core — Part 1 (Minimal API, Routing, Endpoints)
Chapter 71: ASP.NET Core — Part 2 (Controllers, Model Binding, Validation)
Chapter 72: ASP.NET Core — Part 3 (Middleware Pipeline)
Chapter 73: Entity Framework Core — Part 1 (DbContext, Migrations)
Chapter 74: Entity Framework Core — Part 2 (LINQ Queries, Relationships)
Chapter 75: Authentication with JWT in ASP.NET Core
Chapter 76: Reflection and Attributes
Chapter 77: Unsafe Code and Interop (P/Invoke) — Introduction
Chapter 78: Unity Game Development Introduction (C# scripts, MonoBehaviour, Update, Coroutines)

=== PART 8: PROJECTS (Chapters 79–85) ===

Chapter 79: Project — Console-based Library Management System (OOP + Collections)
Chapter 80: Project — LINQ Data Processor (analyze a JSON dataset)
Chapter 81: Project — Async Weather App (HttpClient + System.Text.Json)
Chapter 82: Project — REST API with ASP.NET Core + EF Core + SQLite
Chapter 83: Project — Unit-tested Calculator Library (xUnit + coverage)
Chapter 84: Mini Challenge Sets — 30 challenges (10 each: LINQ, OOP, async)
Chapter 85: C# Mastery Recap + Certificate Prep

---

## C# SPECIFIC LESSON FEATURES

1. "Java vs C#" comparison callout:
   - Shown in chapters where Java and C# differ significantly
   - Examples: properties (Java uses getters/setters; C# has built-in property syntax), LINQ vs Streams, delegates vs functional interfaces
   - Both approaches shown side by side — helps Java developers transition

2. ".NET Version Badge" on code examples:
   - Every code example shows minimum .NET version required
   - Example: [.NET 6+] for top-level statements, [.NET 8+] for primary constructors
   - Helps students understand version compatibility

3. "Classic vs Modern" code blocks:
   - Classic style (pre-C# 9): shown grayed out with "Legacy" label
   - Modern style (C# 9+): shown with "Recommended" green label
   - Explanation of WHY modern is better

4. IL Code Viewer (in compiler for advanced chapters):
   - Toggle to see Intermediate Language generated by the C# code
   - Helps understand CLR, boxing/unboxing, and performance chapters

---

## IMPLEMENTATION ORDER (BOTH TRACKS)

1. Add "java" and "csharp" to Track type union in types.ts
2. Update dashboard and landing page to show all 9 tracks
3. Build JavaCompiler component (Piston API integration)
4. Build CSharpCompiler component (Piston API + IL viewer toggle)
5. Build JvmDiagram component for Java OOP/memory chapters
6. Write java-curriculum.ts — ALL 90 chapters with real content (no placeholders)
7. Write csharp-curriculum.ts — ALL 85 chapters with real content (no placeholders)
8. Add "Language Bridge" callout component (used across both new tracks)
9. Add "Java vs C#" comparison callout for C# track
10. Add ".NET Version Badge" component for C# code examples
11. Update certificate system to support Java and C# certificates
12. Update profile page to show all 9 track progress and certificates
13. Test all compiler integrations — Java 21 and C# .NET 8
14. Test all cross-language callouts render correctly

---

## QUALITY REQUIREMENTS

- Zero placeholder content in any chapter of either track
- All Java code: compilable with OpenJDK 21 (Java 21 LTS)
- All C# code: compilable with .NET 8 (LTS)
- Every quiz: 8+ questions — minimum 1 "spot the bug", 1 "code output", 1 "true/false"
- Every chapter: 3 practice exercises (easy/medium/hard) with progressive hints + full solutions
- Java certificate: issued after all 90 chapters + all quizzes >= 80%
- C# certificate: issued after all 85 chapters + all quizzes >= 80%
- Java track color: #ED8B00 | C# track color: #9B4993
- Java icon: ☕ coffee cup SVG | C# icon: 💜 or official C# logo SVG
- Both compilers must show real error messages with line numbers
- Language Bridge callouts must appear in all relevant chapters
