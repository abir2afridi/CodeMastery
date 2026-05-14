import type { Track } from "./types";

const csharpChapters = [
  // Part 1: C# Foundations (Chapters 1-10)
  {
    id: "csharp-1",
    number: 1,
    partLabel: "Part 1: C# Foundations",
    title: "What Is C# and the .NET Ecosystem?",
    subtitle: "Understanding the language, the platform, and the powerful tools at your disposal",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 35,
    xpReward: 100,
    prerequisites: [],
    learningObjectives: [
      "Understand what C# is and its relationship to .NET",
      "Know where C# is used in the real world",
      "Set up .NET SDK and first project",
      "Write, compile, and run first C# program",
      "Understand CLR and IL (Intermediate Language)"
    ],
    sections: [
      {
        id: "csharp-1-1",
        title: "What Is C#?",
        whyItMatters: "C# is one of the most versatile and professionally demanded languages today. Understanding its ecosystem helps you see the bigger picture.",
        content: `C# (pronounced "C Sharp") was created by Anders Hejlsberg at Microsoft in 2000 as part of the .NET initiative. Hejlsberg previously designed Turbo Pascal and Delphi — two highly influential languages — so C# had exceptional design from day one.

C# is used for:
• Windows desktop apps (WPF, WinForms)
• Web backends (ASP.NET Core — used by Stack Overflow)
• Cross-platform mobile apps (Xamarin / MAUI)
• Game development (Unity — behind Pokémon GO, Hollow Knight)
• Cloud services (Azure Functions, Azure Service Fabric)
• Machine learning (.NET ML)

C# version history: C# 1.0 (2002) → 2.0 (generics) → 3.0 (LINQ) → 4.0 (dynamic) → 5.0 (async/await) → 6-7 → 8.0 (nullable ref types) → 9.0 (records, top-level statements) → 10.0 (global usings) → 11.0 → 12.0 (primary constructors). Current: C# 12 / .NET 8 (LTS).`,
        codeExamples: [
          {
            id: "csharp-hello-1",
            title: "Hello World - Modern Style (.NET 6+)",
            description: "Top-level statements - the simplest way to write C#",
            code: { csharp: `Console.WriteLine("Hello, World!");` },
            explanation: "One line. That's it. The compiler generates the class and Main method for you."
          }
        ],
        callouts: [
          {
            type: "tip",
            title: "Why C#?",
            content: "C# combines the power of C++ with the simplicity of Java, wrapped in a modern, constantly evolving language that prioritizes developer productivity."
          }
        ]
      },
      {
        id: "csharp-1-2",
        title: ".NET, CLR, and IL — The Execution Model",
        whyItMatters: "Understanding how C# compiles to IL (Intermediate Language) and runs on the CLR helps you debug, optimize, and appreciate the platform.",
        content: `.NET (dotnet) provides: the CLR (Common Language Runtime), the BCL (Base Class Library — thousands of built-in classes), and the SDK (dotnet CLI tools).

CLR is to C# what JVM is to Java: it executes managed code, handles garbage collection, and provides type safety.

IL (Intermediate Language): C# compiles to IL, not machine code. The CLR JIT-compiles IL to machine code at runtime. The same IL can run on Windows, Linux, and macOS.

.NET 5+ unified all .NET variants (.NET Core, .NET Framework, Xamarin) into one cross-platform .NET.`,
        codeExamples: [
          {
            id: "csharp-compilation-1",
            title: "Compilation Pipeline",
            description: "How C# code becomes running program",
            code: { csharp: `// C# Source Code (.cs file)
Console.WriteLine("Hello");

// ↓ Compiler (csc / dotnet build)
// ↓
// Intermediate Language (IL) in .dll
// ↓ CLR's JIT Compiler at runtime
// ↓
// Native Machine Code` },
            explanation: "C# compiles to IL, not native code. The JIT (Just-In-Time) compiler converts IL to machine code when the program runs."
          }
        ]
      },
      {
        id: "csharp-1-3",
        title: "Installing .NET SDK and VS Code",
        whyItMatters: "You need the right tools to start coding. Setting up properly prevents countless hours of frustration later.",
        content: `Download .NET 8 SDK from https://dot.net
Verify installation: dotnet --version

For development:
• VS Code + C# Dev Kit extension (free, official Microsoft)
• OR Visual Studio Community 2022 (free, full IDE)

Create your first project:
dotnet new console -n HelloWorld
cd HelloWorld
dotnet run`,
        codeExamples: [
          {
            id: "csharp-setup-1",
            title: "Creating Your First Project",
            description: "Step-by-step project creation",
            code: { csharp: `# Terminal commands
dotnet new console -n HelloWorld
cd HelloWorld
dotnet run

# Project structure created:
# HelloWorld/
# ├── HelloWorld.csproj  (project file)
# └── Program.cs         (your code)` },
            explanation: "The csproj file contains project settings and dependencies. Program.cs is where your code goes."
          }
        ]
      },
      {
        id: "csharp-1-4",
        title: "First C# Program — Two Styles",
        whyItMatters: "You need to understand both modern and classic C# to read existing codebases and write new ones.",
        content: `Modern style — Top-level statements (C# 9+, .NET 6+):

This is the ENTIRE file:
Console.WriteLine("Hello, World!");

Classic style (before C# 9):

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

Both styles are valid. This curriculum teaches modern style first, then explains classic for reading legacy code.

Every character explained (classic):
• using System: imports the System namespace
• namespace: groups related types
• class Program: a class named Program
• static void Main: the entry point
• Console.WriteLine: prints + newline`,
        codeExamples: [
          {
            id: "csharp-styles-1",
            title: "Modern Top-Level Statements",
            description: "C# 9+ style - no boilerplate",
            code: { csharp: `// This is a COMPLETE C# program (C# 9+)
Console.WriteLine("Hello, World!");
Console.WriteLine("Welcome to C#!");

// Variables
var message = "Learning C#";
Console.WriteLine(message);` },
            explanation: "Top-level statements are the default in new .NET 6+ projects. The compiler generates class/Main for you."
          },
          {
            id: "csharp-styles-2",
            title: "Classic Style (Pre-C# 9)",
            description: "Traditional structure - important to know",
            code: { csharp: `using System;

namespace MyApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
}` },
            explanation: "Classic style shows the full structure. You'll see this in older codebases."
          }
        ]
      },
      {
        id: "csharp-1-5",
        title: "Running and Understanding the Output",
        whyItMatters: "Knowing how to run, build, and pass arguments to your programs is essential.",
        content: `dotnet run - Compile and run in one command
dotnet build - Compile only (produces .dll in bin/)
dotnet run -- arg1 arg2 - Pass command-line arguments

Difference from Java: In C#, you do not manually run csc then execute. dotnet run handles both steps. The output is a .dll file which the CLR runs.

On Windows, you can also produce a self-contained .exe that includes the runtime.`,
        codeExamples: [
          {
            id: "csharp-run-1",
            title: "Running with Arguments",
            description: "Pass command-line arguments",
            code: { csharp: `// Program.cs
if (args.Length > 0)
{
    Console.WriteLine($"Hello, {args[0]}!");
}
else
{
    Console.WriteLine("Hello!");
}

// Run: dotnet run -- Alice
// Output: Hello, Alice!` },
            explanation: "args is an array of command-line arguments. -- separates dotnet arguments from program arguments."
          }
        ]
      }
    ],
    exercises: [
      {
        id: "ex-1-1",
        title: "Hello, CodeMastery!",
        difficulty: 1,
        description: "Write a C# program that prints your name and favorite programming language.",
        requirements: ["Use top-level statements", "Print at least 3 lines", "Include your name"],
        starterCode: { csharp: `// Write your program here\n` },
        hints: ["Use Console.WriteLine() for each line", "You can write multiple Console.WriteLine statements"],
        solution: { csharp: `Console.WriteLine("Hello from CodeMastery!");
Console.WriteLine("My name is [Your Name]");
Console.WriteLine("My favorite language is C#!");` },
        solutionExplanation: "Simple top-level statements with multiple WriteLine calls."
      }
    ],
    quiz: {
      passingScore: 70,
      questions: [
        { id: "q1", type: "mcq", question: "Who created C#?", options: ["James Gosling", "Bjarne Stroustrup", "Anders Hejlsberg", "Guido van Rossum"], correctAnswer: 2, explanation: "Anders Hejlsberg, who previously designed Turbo Pascal and Delphi, created C# at Microsoft in 2000.", difficulty: 1 },
        { id: "q2", type: "true-false", question: "C# can only run on Windows.", correctAnswer: false, explanation: "Since .NET Core (now unified as .NET 5+), C# runs cross-platform on Windows, macOS, and Linux.", difficulty: 1 },
        { id: "q3", type: "mcq", question: "What does CLR stand for?", options: ["Common Library Runtime", "C# Language Reference", "Common Language Runtime", "Compiled Language Repository"], correctAnswer: 2, explanation: "CLR (Common Language Runtime) executes IL, handles garbage collection, provides type safety.", difficulty: 1 },
        { id: "q4", type: "spot-the-bug", question: "Find the bug:", code: "Console.writeline(\"Hello\");", correctAnswer: "writeline should be WriteLine", explanation: "C# is case-sensitive. All .NET method names follow PascalCase.", difficulty: 1 },
        { id: "q5", type: "fill-blank", question: "In C# 9+ top-level statements, you can write ___ directly without a class.", correctAnswer: "Console.WriteLine()", explanation: "Top-level statements allow any statement directly in the file.", difficulty: 1 },
        { id: "q6", type: "code-output", question: "What will this print?", code: "Console.WriteLine(\"C#\" + \" \" + 12);", correctAnswer: "C# 12", explanation: "String concatenation with +. \"C#\" + \" \" = \"C# \", then + 12 = \"C# 12\"", difficulty: 1 },
        { id: "q7", type: "mcq", question: "What file extension do C# source files use?", options: [".cs", ".csharp", ".net", ".csx"], correctAnswer: 0, explanation: "C# source files use .cs extension. Project files use .csproj.", difficulty: 1 },
        { id: "q8", type: "true-false", question: "C# compiles directly to machine code.", correctAnswer: false, explanation: "C# compiles to IL (Intermediate Language). The CLR's JIT compiler converts IL to machine code at runtime.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "Hello World", value: "Console.WriteLine(\"Hello!\");" },
      { label: "Compile & Run", value: "dotnet run" },
      { label: "Comment", value: "// single line" },
      { label: "Multi-line comment", value: "/* ... */" },
      { label: "Create project", value: "dotnet new console -n Name" }
    ]
  },
  // Chapter 2
  {
    id: "csharp-2",
    number: 2,
    title: "Variables, Data Types, and Type System",
    subtitle: "Understanding value types, reference types, and C#'s powerful type system",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 45,
    xpReward: 100,
    prerequisites: ["csharp-1"],
    learningObjectives: [
      "Understand value types vs reference types",
      "Use all built-in numeric types",
      "Master string manipulation and interpolation",
      "Use nullable types safely"
    ],
    sections: [
      {
        id: "csharp-2-1",
        title: "C# Value Types vs Reference Types",
        whyItMatters: "Understanding this distinction prevents subtle bugs and helps you write performant code.",
        content: `C# has two fundamental categories:

VALUE TYPES (stored on stack, copied by value):
• All numeric types (int, double, bool, char)
• struct, enum
• DateTime, TimeSpan

REFERENCE TYPES (stored on heap, accessed by reference):
• string, arrays, class instances
• delegates, interfaces
• Objects (class instances)

Stack = fast, small, automatically managed
Heap = larger, managed by garbage collector`,
        codeExamples: [
          {
            id: "csharp-types-1",
            title: "Value vs Reference Types",
            description: "Understanding the difference",
            code: { csharp: `// Value type - copied
int a = 5;
int b = a;  // Copy
b = 10;
Console.WriteLine(a);  // 5 (unchanged)

// Reference type - shared
int[] arr1 = { 1, 2, 3 };
int[] arr2 = arr1;  // Both point to same array
arr2[0] = 99;
Console.WriteLine(arr1[0]);  // 99 (changed!)` },
            explanation: "Value types are copied. Reference types share the same memory."
          }
        ]
      },
      {
        id: "csharp-2-2",
        title: "Built-in Value Types",
        whyItMatters: "Choosing the right numeric type affects memory usage and precision.",
        content: `Integer types:
byte b = 255;         // 0-255 (1 byte, unsigned)
sbyte sb = -128;      // -128 to 127 (1 byte, signed)
short s = -32000;     // 2 bytes
ushort us = 65535;    // 2 bytes, unsigned
int i = 2_147_483_647; // 4 bytes (most common)
uint ui = 4_294_967_295U; // 4 bytes, unsigned
long l = 9_000_000_000L; // 8 bytes
ulong ul = 18_446_744_073_709_551_615UL; // 8 bytes

Floating-point types:
float f = 3.14f;      // 4 bytes, 7 sig digits (f suffix required)
double d = 3.14159;   // 8 bytes, 15-16 sig digits
decimal m = 19.99m;   // 16 bytes, 28-29 sig digits (MONEY!)

Other:
bool active = true;   // true or false
char c = 'A';         // 2 bytes, Unicode UTF-16

Use decimal for financial calculations - never float or double!`,
        codeExamples: [
          {
            id: "csharp-numeric-1",
            title: "Numeric Types Demo",
            description: "All numeric types in action",
            code: { csharp: `int age = 25;
double price = 19.99;
decimal salary = 75000.50m;
bool isActive = true;
char grade = 'A';

Console.WriteLine($"Age: {age}, Price: {price:C}, Salary: {salary:C}");
Console.WriteLine($"Active: {isActive}, Grade: {grade}");

// Underscores for readability (C# 7+)
long bigNumber = 1_000_000_000_000L;` },
            explanation: "Use underscores in large numbers for readability. Always use 'm' suffix for decimal."
          }
        ]
      },
      {
        id: "csharp-2-3",
        title: "var — Type Inference",
        whyItMatters: "var reduces verbosity while maintaining type safety.",
        content: `var name = "Alice";      // string (inferred)
var age = 25;            // int (inferred)
var price = 19.99m;      // decimal (inferred from m suffix)
var items = new List<string>(); // List<string>

Best practice: Use var when type is obvious from right side:
var names = new List<string>(); // Clear
var name = GetName(); // Less clear - what does it return?

var vs dynamic:
• var: resolved at COMPILE TIME (type-safe)
• dynamic: resolved at RUNTIME (no type safety)`,
        codeExamples: [
          {
            id: "csharp-var-1",
            title: "var Keyword",
            description: "Type inference in action",
            code: { csharp: `// var infers the type from the right side
var message = "Hello, C#!";      // string
var count = 42;                   // int
var temperature = 98.6;          // double
var isValid = true;              // bool

// Cannot do this:
// var x;  // Error - must initialize

// Can reassign to same type:
count = 100;  // OK

// But not to different type:
// count = "text";  // Error!` },
            explanation: "var is not dynamic - the type is fixed at compile time."
          }
        ]
      },
      {
        id: "csharp-2-4",
        title: "string in C# — String Interpolation and Methods",
        whyItMatters: "Strings are everywhere. Mastering them makes you productive fast.",
        content: `string is an alias for System.String. Strings are immutable reference types.

String interpolation (C# 6+):
$\"Hello, {name}! You are {age} years old.\"

Verbatim strings (no escape needed):
@\"C:\\Users\\Alice\\Documents\"

Raw string literals (C# 11):
\"\"\"No escaping needed at all.\"\"\"

Common methods: Length, ToUpper, ToLower, Trim, Contains, StartsWith, EndsWith, IndexOf, Replace, Split, Substring, IsNullOrEmpty`,
        codeExamples: [
          {
            id: "csharp-string-1",
            title: "String Interpolation",
            description: "Modern string formatting",
            code: { csharp: `var name = "Alice";
var age = 25;

// String interpolation
Console.WriteLine($"Hello, {name}!");
Console.WriteLine($"You are {age} years old.");

// Format options
double price = 19.99;
Console.WriteLine($\"Price: {price:C}\");  // Currency
Console.WriteLine($\"Price: {price:P}\");  // Percentage
Console.WriteLine($\"Price: {price:N2}\"); // Number with 2 decimals

// Raw string (C# 11)
var path = \"\"\"C:\\Users\\Alice\\Documents\\file.txt\"\"\";` },
            explanation: "String interpolation with $ prefix. Use :C for currency, :P for percentage."
          }
        ]
      },
      {
        id: "csharp-2-5",
        title: "Nullable Types",
        whyItMatters: "Nullable types help prevent NullReferenceException - C#'s most common error.",
        content: `C# 8+ enables nullable reference types.

int? nullableInt = null;  // Nullable value type
string? nullableString = null;  // Nullable reference

Null-conditional operator:
user?.Name  // Returns null if user is null

Null-coalescing operator:
user?.Name ?? \"Guest\"  // Default if null

Null-coalescing assignment:
x ??= defaultValue;  // Assign only if x is null`,
        codeExamples: [
          {
            id: "csharp-nullable-1",
            title: "Safe Null Handling",
            description: "Using nullable operators",
            code: { csharp: `string? name = null;

// Null-conditional
Console.WriteLine(name?.Length);  // null (no exception!)

// Null-coalescing
Console.WriteLine(name ?? \"Unknown\");  // Unknown

// Null-coalescing assignment
name ??= \"Default\";
Console.WriteLine(name);  // Default

// With nullable int
int? count = null;
int safeCount = count ?? 0;
Console.WriteLine(safeCount);  // 0` },
            explanation: "?. returns null instead of throwing. ?? provides a default value."
          }
        ]
      }
    ],
    exercises: [
      {
        id: "ex-2-1",
        title: "Type Explorer",
        difficulty: 1,
        description: "Create variables of different types and print them with descriptions.",
        requirements: ["Use at least 5 different types", "Include int, double, decimal, string, bool", "Print each with description"],
        starterCode: { csharp: `// Create variables here\n\n// Print them\n` },
        hints: ["Use var or explicit types", "Mix interpolation with Console.WriteLine"],
        solution: { csharp: `var name = "C# Developer";
int age = 30;
double height = 5.9;
decimal salary = 75000.50m;
bool isEmployed = true;

Console.WriteLine($"Name: {name}");
Console.WriteLine($"Age: {age}");
Console.WriteLine($"Height: {height}");
Console.WriteLine($"Salary: {salary:C}");
Console.WriteLine($"Employed: {isEmployed}");` },
        solutionExplanation: "Declared variables of different types and printed using string interpolation."
      }
    ],
    quiz: {
      passingScore: 70,
      questions: [
        { id: "q1", type: "mcq", question: "Which is a value type?", options: ["string", "array", "int", "class"], correctAnswer: 2, explanation: "int is a value type stored on the stack.", difficulty: 1 },
        { id: "q2", type: "true-false", question: "string is a value type in C#.", correctAnswer: false, explanation: "string is a reference type, though it behaves like a value type.", difficulty: 1 },
        { id: "q3", type: "mcq", question: "Which suffix is required for decimal literals?", options: ["f", "d", "m", "M"], correctAnswer: 3, explanation: "Use 'm' or 'M' suffix for decimal literals.", difficulty: 1 },
        { id: "q4", type: "spot-the-bug", question: "Find the bug:", code: "var x;\nx = 5;", correctAnswer: "var requires initialization", explanation: "var requires initialization on the same line.", difficulty: 1 },
        { id: "q5", type: "fill-blank", question: "The null-conditional operator is ___", correctAnswer: "?.", explanation: "?. safely accesses properties on potentially null objects.", difficulty: 1 },
        { id: "q6", type: "code-output", question: "What does this print?", code: "string name = null;\nConsole.WriteLine(name ?? \"Guest\");", correctAnswer: "Guest", explanation: "?? provides default when null.", difficulty: 1 },
        { id: "q7", type: "mcq", question: "Which is NOT a nullable operator?", options: ["?.", "??", "??=", "??"], correctAnswer: 3, explanation: "? is used in nullable types, but ?? is the null-coalescing operator.", difficulty: 2 },
        { id: "q8", type: "true-false", question: "var is resolved at runtime.", correctAnswer: false, explanation: "var is resolved at compile time - it's still statically typed.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "Integer", value: "int x = 42;" },
      { label: "Double", value: "double d = 3.14;" },
      { label: "Decimal (money)", value: "decimal m = 19.99m;" },
      { label: "String", value: "string s = \"Hi\";" },
      { label: "Interpolation", value: "$\"Hello, {name}\"" },
      { label: "Nullable", value: "int? n = null;" },
      { label: "Null-coalescing", value: "x ?? default" }
    ]
  }
];

// Generate remaining chapters 3-85
for (let ch = 3; ch <= 85; ch++) {
  const prevNum = ch - 1;
  csharpChapters.push({
    id: `csharp-${ch}`,
    number: ch,
    title: `Chapter ${ch}`,
    subtitle: `C# programming concept chapter ${ch}`,
    difficulty: ch <= 10 ? "Absolute Beginner" as const :
                ch <= 26 ? "Beginner" as const :
                ch <= 46 ? "Intermediate" as const :
                ch <= 64 ? "Advanced" as const : "Expert" as const,
    estimatedMinutes: 40,
    xpReward: Math.min(150, 50 + ch * 2),
    prerequisites: [`csharp-${prevNum}`],
    learningObjectives: [`Learn C# concept ${ch}`],
    sections: [
      {
        id: `csharp-${ch}-1`,
        title: `Concept ${ch}`,
        whyItMatters: "Understanding this concept is fundamental to C# mastery.",
        content: `This chapter covers C# concept ${ch}. In C# programming, mastering these fundamentals is essential for building robust applications.

Key concepts include proper usage patterns, best practices, and common patterns used by professional C# developers.`,
        codeExamples: [
          {
            id: `csharp-${ch}-ex1`,
            title: "Example",
            description: "Demonstrating the concept",
            code: { csharp: `// C# example for chapter ${ch}
Console.WriteLine("Learning C# Chapter ${ch}");` },
            explanation: "Simple demonstration of the concept."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 70,
      questions: [
        { id: `q1`, type: "mcq", question: `C# concept ${ch} is important because?`, options: ["It's required", "It improves code quality", "It's optional", "It doesn't matter"], correctAnswer: 1, explanation: "Understanding this concept helps write better C# code.", difficulty: 1 },
        { id: `q2`, type: "true-false", question: `${ch} is a valid chapter number.`, correctAnswer: true, explanation: "Chapter numbers are sequential.", difficulty: 1 },
        { id: `q3`, type: "code-output", question: "What prints?", code: `Console.WriteLine("${ch}");`, correctAnswer: `${ch}`, explanation: "Prints the chapter number.", difficulty: 1 },
        { id: `q4`, type: "mcq", question: "Which is correct syntax?", options: [`csharp`, "c#", "Csharp", "CSHARP"], correctAnswer: 0, explanation: "C# uses lowercase .cs extension.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "Syntax", value: `// C# code` },
      { label: "Compile", value: "dotnet run" }
    ]
  });
}

export const csharpTrack: Track = {
  id: "csharp",
  title: "C# Programming",
  titleBn: "C# প্রোগ্রামিং",
  tagline: "Elegant, powerful, and backed by .NET",
  taglineBn: "সুন্দর, শক্তিশালী, .NET দ্বারা সমর্থিত",
  icon: "https://img.icons8.com/color/144/c-sharp-logo.png",
  colorVar: "csharp",
  totalChapters: 85,
  estimatedHours: 135,
  chapters: csharpChapters,
  brandColor: "#9B4993",
  glowColor: "rgba(155, 73, 147, 0.4)"
};