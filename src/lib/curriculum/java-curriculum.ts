import { Track, Chapter, Difficulty } from './types';

function addBnTranslations(chapters: Chapter[]): Chapter[] {
  return chapters.map(ch => ({
    ...ch,
    titleBn: ch.title + " (Bn)",
    subtitleBn: ch.subtitle + " (Bn)",
    partLabelBn: ch.partLabel?.replace("PART", "অংশ"),
  }));
}

export const javaTrack: Track = {
  id: "java",
  title: "Java",
  titleBn: "জাভা",
  tagline: "Write once, run anywhere — the enterprise standard",
  taglineBn: "একবার লিখুন, সব জায়গায় চালান — এন্টারপ্রাইজ মান",
  icon: "☕",
  colorVar: "java",
  brandColor: "#ED8B00",
  glowColor: "#ED8B00",
  totalChapters: 90,
  estimatedHours: 140,
  chapters: addBnTranslations([
    {
      id: "java-ch-1",
      number: 1,
      partLabel: "PART 1: JAVA FOUNDATIONS",
      title: "What Is Java and Why Learn It?",
      subtitle: "Understanding platform independence",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 30,
      xpReward: 100,
      prerequisites: [],
      learningObjectives: [
        "Understand Java's place in programming",
        "Know JDK vs JRE vs JVM",
        "Compile and run first Java program",
        "Understand platform independence"
      ],
      sections: [
        {
          id: "ch1-what",
          title: "What Is Java?",
          whyItMatters: "Java runs on billions of devices worldwide.",
          content: "Java was created by James Gosling at Sun Microsystems in 1995. It is used by Android apps, enterprise backends (Netflix, LinkedIn, Amazon), banking systems, and big data (Hadoop, Spark). Java promises: \"Write Once, Run Anywhere\" — the same bytecode runs on Windows, Mac, Linux, Android, and more."
        },
        {
          id: "ch1-jdk",
          title: "JDK vs JRE vs JVM",
          whyItMatters: "Know which you need.",
          content: "JVM (Java Virtual Machine): Runs bytecode. Platform-specific.\nJRE (Java Runtime Environment): JVM + libraries. For running programs.\nJDK (Java Development Kit): JRE + compiler (javac) + tools. For writing programs.\nRule: Install JDK, not just JRE."
        },
        {
          id: "ch1-hello",
          title: "Hello World Explained",
          whyItMatters: "Every character matters in Java.",
          content: "public class Hello {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}\n\npublic: accessible everywhere\nclass: defines a class (everything in Java is a class)\nstatic: belongs to class, not instance\nvoid: returns nothing\nmain: JVM entry point"
        },
        {
          id: "ch1-compile",
          title: "Compile and Run",
          whyItMatters: "Basic workflow.",
          content: "javac Hello.java  // compiles to Hello.class\njava Hello         // runs on JVM\n\nNote: No .class extension when running. Common mistake: java Hello.class gives error."
        }
      ],
      exercises: [
        { id: "ex1-1", title: "First Program", description: "Print your name", starterCode: { java: "public class Main {\n    public static void main(String[] args) {\n        // Your code here\n    }\n}" }, difficulty: 1, requirements: [], hints: ["Use System.out.println()"], solution: { java: "" }, solutionExplanation: "Basic output" }
      ],
      quiz: {
        questions: [
          { id: "ch1-q1", type: "mcq", question: "Who created Java?", options: ["James Gosling", "Dennis Ritchie", "Bjarne Stroustrup", "Guido van Rossum"], correctAnswer: 0, explanation: "James Gosling at Sun Microsystems in 1995", difficulty: 1 },
          { id: "ch1-q2", type: "mcq", question: "What does JDK contain?", options: ["JVM only", "JRE + compiler", "JRE only", "Nothing"], correctAnswer: 1, explanation: "JDK = JRE + compiler + tools", difficulty: 1 },
          { id: "ch1-q3", type: "true-false", question: "Java bytecode runs on any OS", answer: true, explanation: "JVM translates bytecode to machine code", difficulty: 1 },
          { id: "ch1-q4", type: "mcq", question: "What does javac produce?", options: [".exe file", ".class bytecode", "Source code", ".jar file"], correctAnswer: 1, explanation: "javac compiles to .class bytecode files", difficulty: 1 },
          { id: "ch1-q5", type: "mcq", question: "What is Java's slogan?", options: ["Hello World", "Write Once Run Anywhere", "Java is Life", "None"], correctAnswer: 1, explanation: "Write Once, Run Anywhere", difficulty: 1 }
        ],
        passingScore: 3
      },
      cheatSheet: [
        { label: "Compile", value: "javac File.java" },
        { label: "Run", value: "java ClassName" },
        { label: "Output", value: "System.out.println()" }
      ]
    },
    {
      id: "java-ch-2",
      number: 2,
      partLabel: "PART 1: JAVA FOUNDATIONS",
      title: "Variables, Data Types, and Type System",
      subtitle: "Static typing in Java",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 45,
      xpReward: 100,
      prerequisites: ["java-ch-1"],
      learningObjectives: ["Understand static typing", "Know 8 primitive types", "Use String properly"],
      sections: [
        {
          id: "ch2-static",
          title: "Static Typing",
          whyItMatters: "Type errors caught at compile time.",
          content: "Java is statically typed: you declare the type explicitly.\n\nint age = 25;\ndouble price = 19.99;\nboolean active = true;\n\nOnce declared, type cannot change. Python uses dynamic typing."
        },
        {
          id: "ch2-primitives",
          title: "8 Primitive Types",
          whyItMatters: "Foundation of Java data types.",
          content: "byte (1): -128 to 127\nshort (2): -32768 to 32767\nint (4): -2.1B to 2.1B (most common)\nlong (8): huge numbers (use L suffix)\nfloat (4): decimals (use f suffix)\ndouble (8): decimals (default)\nboolean: true/false only\nchar (2): single Unicode character"
        },
        {
          id: "ch2-string",
          title: "String in Java",
          whyItMatters: "Most used reference type.",
          content: "String is a class (reference type), not primitive.\n\nString name = \"Alice\";\nString greeting = new String(\"Hello\");\n\nStrings are IMMUTABLE. Use .equals() for comparison, not ==.\n\nString methods: length(), charAt(), substring(), indexOf(), contains(), toUpperCase(), equals(), trim(), split(), replace(), formatted()"
        },
        {
          id: "ch2-casting",
          title: "Type Casting",
          whyItMatters: "Convert between types.",
          content: "Widening (automatic): byte → short → int → long → float → double\n\nNarrowing (manual, may lose data): double → float → long → int → short → byte\n\nint i = 100;\nlong l = i;          // widening - automatic\nint back = (int) l;   // narrowing - explicit cast required"
        }
      ],
      exercises: [
        { id: "ex2-1", title: "Variables", description: "Declare different types", starterCode: { java: "public class Main {\n    public static void main(String[] args) {\n        // Declare int, double, boolean, String\n    }\n}" }, difficulty: 1, requirements: [], hints: ["Use appropriate type names"], solution: { java: "" }, solutionExplanation: "Variable declaration" }
      ],
      quiz: {
        questions: [
          { id: "ch2-q1", type: "mcq", question: "Default for decimals?", options: ["float", "double", "int", "long"], correctAnswer: 1, explanation: "double is default for decimal numbers", difficulty: 1 },
          { id: "ch2-q2", type: "mcq", question: "Compare Strings use?", options: ["==", ".equals()", "Both OK", "compare()"], correctAnswer: 1, explanation: "Use .equals() for String comparison", difficulty: 1 },
          { id: "ch2-q3", type: "mcq", question: "Which is reference type?", options: ["int", "boolean", "String", "char"], correctAnswer: 2, explanation: "String is a class, hence reference type", difficulty: 1 }
        ],
        passingScore: 2
      },
      cheatSheet: [
        { label: "int", value: "Integer type" },
        { label: "double", value: "Decimal type" },
        { label: "String compare", value: "str1.equals(str2)" }
      ]
    },
    // Add chapters 3-90 using Array pattern
    ...Array.from({ length: 88 }, (_, i) => {
      const chNum = i + 3;
      const chapterData: Record<number, { title: string; subtitle: string; part: string }> = {
        3: { title: "Operators and Expressions", subtitle: "Arithmetic, comparison, logical", part: "PART 1: JAVA FOUNDATIONS" },
        4: { title: "Input with Scanner", subtitle: "Reading from console", part: "PART 1: JAVA FOUNDATIONS" },
        5: { title: "Conditionals", subtitle: "if/else, switch, switch expressions", part: "PART 1: JAVA FOUNDATIONS" },
        6: { title: "Loops", subtitle: "for, while, do-while, for-each", part: "PART 1: JAVA FOUNDATIONS" },
        7: { title: "Methods", subtitle: "Declaration, parameters, overloading", part: "PART 1: JAVA FOUNDATIONS" },
        8: { title: "Scope and Variable Lifetime", subtitle: "Block scope, garbage collection basics", part: "PART 1: JAVA FOUNDATIONS" },
        9: { title: "Arrays", subtitle: "1D, 2D, Arrays utility", part: "PART 1: JAVA FOUNDATIONS" },
        10: { title: "Varargs and Command Line", subtitle: "Variable arguments, args array", part: "PART 1: JAVA FOUNDATIONS" },
        11: { title: "Classes and Objects — Part 1", subtitle: "Class definition, constructors", part: "PART 2: OBJECT-ORIENTED PROGRAMMING" },
        12: { title: "Classes and Objects — Part 2", subtitle: "toString, equals, hashCode", part: "PART 2: OBJECT-ORIENTED PROGRAMMING" },
        13: { title: "Static Members", subtitle: "Class-level vs instance-level", part: "PART 2: OBJECT-ORIENTED PROGRAMMING" },
        14: { title: "Inheritance", subtitle: "extends, method overriding, super", part: "PART 2: OBJECT-ORIENTED PROGRAMMING" },
        15: { title: "Polymorphism", subtitle: "Compile-time vs runtime", part: "PART 2: OBJECT-ORIENTED PROGRAMMING" },
        16: { title: "Abstract Classes vs Interfaces — Part 1", subtitle: "Basics and differences", part: "PART 2: OBJECT-ORIENTED PROGRAMMING" },
        17: { title: "Abstract Classes vs Interfaces — Part 2", subtitle: "Default methods (Java 8+)", part: "PART 2: OBJECT-ORIENTED PROGRAMMING" },
        18: { title: "The final Keyword", subtitle: "Classes, methods, variables", part: "PART 2: OBJECT-ORIENTED PROGRAMMING" },
        19: { title: "Access Modifiers", subtitle: "public, private, protected, package-private", part: "PART 2: OBJECT-ORIENTED PROGRAMMING" },
        20: { title: "Inner Classes", subtitle: "Static nested, non-static, local, anonymous", part: "PART 2: OBJECT-ORIENTED PROGRAMMING" },
        21: { title: "Enums in Java", subtitle: "Advanced enum usage", part: "PART 2: OBJECT-ORIENTED PROGRAMMING" },
        22: { title: "Records (Java 16+)", subtitle: "Immutable data classes", part: "PART 2: OBJECT-ORIENTED PROGRAMMING" },
        23: { title: "Sealed Classes (Java 17+)", subtitle: "Controlled inheritance", part: "PART 2: OBJECT-ORIENTED PROGRAMMING" },
        24: { title: "Design Patterns — Part 1", subtitle: "Singleton, Factory, Builder", part: "PART 2: OBJECT-ORIENTED PROGRAMMING" },
        25: { title: "Design Patterns — Part 2", subtitle: "Observer, Strategy, Decorator", part: "PART 2: OBJECT-ORIENTED PROGRAMMING" },
        26: { title: "SOLID Principles", subtitle: "Java examples", part: "PART 2: OBJECT-ORIENTED PROGRAMMING" },
        27: { title: "Exceptions — try/catch/finally", subtitle: "Exception hierarchy", part: "PART 3: EXCEPTION HANDLING" },
        28: { title: "Checked vs Unchecked Exceptions", subtitle: "When to use which", part: "PART 3: EXCEPTION HANDLING" },
        29: { title: "Custom Exceptions", subtitle: "Best practices", part: "PART 3: EXCEPTION HANDLING" },
        30: { title: "try-with-resources", subtitle: "AutoCloseable", part: "PART 3: EXCEPTION HANDLING" },
        31: { title: "Multi-catch and Exception Chaining", subtitle: "Handling multiple types", part: "PART 3: EXCEPTION HANDLING" },
        32: { title: "Debugging in IntelliJ/VS Code", subtitle: "Breakpoints, watch, step", part: "PART 3: EXCEPTION HANDLING" },
        33: { title: "Collections Overview", subtitle: "The big picture", part: "PART 4: COLLECTIONS FRAMEWORK" },
        34: { title: "ArrayList", subtitle: "Dynamic array", part: "PART 4: COLLECTIONS FRAMEWORK" },
        35: { title: "LinkedList", subtitle: "Doubly linked, Deque", part: "PART 4: COLLECTIONS FRAMEWORK" },
        36: { title: "Stack and Queue", subtitle: "LIFO and FIFO", part: "PART 4: COLLECTIONS FRAMEWORK" },
        37: { title: "HashSet, LinkedHashSet, TreeSet", subtitle: "Set implementations", part: "PART 4: COLLECTIONS FRAMEWORK" },
        38: { title: "HashMap — Part 1", subtitle: "Basics, internal hashing", part: "PART 4: COLLECTIONS FRAMEWORK" },
        39: { title: "HashMap — Part 2", subtitle: "LinkedHashMap, TreeMap", part: "PART 4: COLLECTIONS FRAMEWORK" },
        40: { title: "PriorityQueue", subtitle: "Heap-based queue", part: "PART 4: COLLECTIONS FRAMEWORK" },
        41: { title: "Collections Utility Class", subtitle: "sort, shuffle, frequency", part: "PART 4: COLLECTIONS FRAMEWORK" },
        42: { title: "Comparable vs Comparator", subtitle: "Sorting custom objects", part: "PART 4: COLLECTIONS FRAMEWORK" },
        43: { title: "Iterators and Iterable", subtitle: "Iterating collections", part: "PART 4: COLLECTIONS FRAMEWORK" },
        44: { title: "Generics — Part 1", subtitle: "Generic classes and methods", part: "PART 4: COLLECTIONS FRAMEWORK" },
        45: { title: "Generics — Part 2", subtitle: "Wildcards, bounded types", part: "PART 4: COLLECTIONS FRAMEWORK" },
        46: { title: "Collections Best Practices", subtitle: "Common mistakes", part: "PART 4: COLLECTIONS FRAMEWORK" },
        47: { title: "Functional Interfaces", subtitle: "Predicate, Function, Consumer", part: "PART 5: FUNCTIONAL JAVA" },
        48: { title: "Lambda Expressions", subtitle: "Full guide", part: "PART 5: FUNCTIONAL JAVA" },
        49: { title: "Method References", subtitle: ":: operator", part: "PART 5: FUNCTIONAL JAVA" },
        50: { title: "Optional", subtitle: "Avoiding NullPointerException", part: "PART 5: FUNCTIONAL JAVA" },
        51: { title: "Stream API — Part 1", subtitle: "filter, map, collect", part: "PART 5: FUNCTIONAL JAVA" },
        52: { title: "Stream API — Part 2", subtitle: "reduce, flatMap, distinct", part: "PART 5: FUNCTIONAL JAVA" },
        53: { title: "Stream API — Part 3", subtitle: "groupingBy, partitioningBy", part: "PART 5: FUNCTIONAL JAVA" },
        54: { title: "Collectors in Depth", subtitle: "Advanced collection", part: "PART 5: FUNCTIONAL JAVA" },
        55: { title: "Parallel Streams", subtitle: "Concurrent processing", part: "PART 5: FUNCTIONAL JAVA" },
        56: { title: "Stream vs Loop", subtitle: "When to use each", part: "PART 5: FUNCTIONAL JAVA" },
        57: { title: "File I/O — java.io", subtitle: "FileReader, FileWriter, BufferedReader", part: "PART 6: FILE I/O AND MODERN JAVA" },
        58: { title: "File I/O — java.nio.file", subtitle: "Path, Files, Paths", part: "PART 6: FILE I/O AND MODERN JAVA" },
        59: { title: "Serialization", subtitle: "Object persistence", part: "PART 6: FILE I/O AND MODERN JAVA" },
        60: { title: "Working with JSON", subtitle: "Jackson or Gson", part: "PART 6: FILE I/O AND MODERN JAVA" },
        61: { title: "Date and Time — java.time", subtitle: "LocalDate, LocalDateTime", part: "PART 6: FILE I/O AND MODERN JAVA" },
        62: { title: "Regular Expressions", subtitle: "java.util.regex", part: "PART 6: FILE I/O AND MODERN JAVA" },
        63: { title: "String Formatting", subtitle: "printf, format, formatted", part: "PART 6: FILE I/O AND MODERN JAVA" },
        64: { title: "StringBuilder and StringBuffer", subtitle: "Mutable strings", part: "PART 6: FILE I/O AND MODERN JAVA" },
        65: { title: "Java Modules System (JPMS)", subtitle: "Java 9+", part: "PART 6: FILE I/O AND MODERN JAVA" },
        66: { title: "Modern Java Features", subtitle: "Records, pattern matching", part: "PART 6: FILE I/O AND MODERN JAVA" },
        67: { title: "Threads — Creating, Starting", subtitle: "Thread basics", part: "PART 7: CONCURRENCY AND JVM" },
        68: { title: "Runnable and Callable", subtitle: "Task execution", part: "PART 7: CONCURRENCY AND JVM" },
        69: { title: "Synchronization", subtitle: "synchronized, volatile", part: "PART 7: CONCURRENCY AND JVM" },
        70: { title: "ExecutorService", subtitle: "Thread pools", part: "PART 7: CONCURRENCY AND JVM" },
        71: { title: "CompletableFuture", subtitle: "Async programming", part: "PART 7: CONCURRENCY AND JVM" },
        72: { title: "Virtual Threads (Java 21)", subtitle: "Project Loom", part: "PART 7: CONCURRENCY AND JVM" },
        73: { title: "JVM Internals", subtitle: "Heap, Stack, Method Area", part: "PART 7: CONCURRENCY AND JVM" },
        74: { title: "Garbage Collection", subtitle: "Types and tuning", part: "PART 7: CONCURRENCY AND JVM" },
        75: { title: "Java Memory Model", subtitle: "Memory visibility", part: "PART 7: CONCURRENCY AND JVM" },
        76: { title: "Performance Profiling", subtitle: "JVisualVM, Flight Recorder", part: "PART 7: CONCURRENCY AND JVM" },
        77: { title: "JVM Languages", subtitle: "Kotlin, Scala, Groovy", part: "PART 7: CONCURRENCY AND JVM" },
        78: { title: "Reflection API", subtitle: "Runtime introspection", part: "PART 7: CONCURRENCY AND JVM" },
        79: { title: "Project — Student Management System", subtitle: "OOP + Collections", part: "PART 8: PROJECTS" },
        80: { title: "Project — Bank Account Application", subtitle: "Inheritance + Exceptions", part: "PART 8: PROJECTS" },
        81: { title: "Project — CSV File Processor", subtitle: "File I/O + Streams", part: "PART 8: PROJECTS" },
        82: { title: "Project — TODO App with JSON", subtitle: "JSON persistence", part: "PART 8: PROJECTS" },
        83: { title: "Project — Multi-threaded Download Simulator", subtitle: "Concurrency", part: "PART 8: PROJECTS" },
        84: { title: "Project — REST API Client", subtitle: "HttpClient Java 11+", part: "PART 8: PROJECTS" },
        85: { title: "Project — Mini Spring Boot REST API", subtitle: "Introduction", part: "PART 8: PROJECTS" },
        86: { title: "Mini Challenge Set 1", subtitle: "OOP Challenges", part: "PART 8: PROJECTS" },
        87: { title: "Mini Challenge Set 2", subtitle: "Collections + Streams", part: "PART 8: PROJECTS" },
        88: { title: "Mini Challenge Set 3", subtitle: "Algorithm Challenges", part: "PART 8: PROJECTS" },
        89: { title: "Java Interview Questions", subtitle: "Common patterns", part: "PART 8: PROJECTS" },
        90: { title: "Java Mastery Recap", subtitle: "Certificate prep", part: "PART 8: PROJECTS" }
      };
      const info = chapterData[chNum];
      return {
        id: `java-ch-${chNum}`,
        number: chNum,
        partLabel: info.part,
        title: info.title,
        subtitle: info.subtitle,
        estimatedMinutes: 35,
        difficulty: (chNum <= 10 ? "Absolute Beginner" : chNum <= 26 ? "Beginner" : chNum <= 46 ? "Intermediate" : chNum <= 66 ? "Advanced" : "Expert") as Difficulty,
        xpReward: 100 + chNum,
        prerequisites: chNum > 3 ? [`java-ch-${chNum - 1}`] : [],
        learningObjectives: ["Understand key concepts", "Apply to real problems", "Write idiomatic Java"],
        sections: [
          {
            id: `ch${chNum}-main`,
            title: "Core Concepts",
            whyItMatters: "Essential Java skill.",
            content: "This chapter covers " + info.title.toLowerCase() + ". Java is a powerful object-oriented language with strong typing and extensive standard library."
          },
          {
            id: `ch${chNum}-practice`,
            title: "Hands-On Practice",
            whyItMatters: "Apply concepts to solidify understanding.",
            content: "Practice exercises reinforce the concepts covered in this chapter."
          }
        ],
        exercises: [
          { id: `ex${chNum}-1`, title: "Practice Exercise", description: "Apply chapter concepts", starterCode: { java: "public class Main {\n    public static void main(String[] args) {\n        // Your code here\n    }\n}" }, difficulty: 2, requirements: [], hints: ["Review chapter material"], solution: { java: "" }, solutionExplanation: "Depends on chapter" }
        ],
        quiz: {
          questions: [
            { id: `ch${chNum}-q1`, type: "mcq" as const, question: `What is key concept of chapter ${chNum}?`, options: ["Concept A", "Concept B", "Concept C", "Concept D"], correctAnswer: 0, explanation: "Explanation here", difficulty: 2 }
          ],
          passingScore: 1
        },
        cheatSheet: [
          { label: "Key point 1", value: "Value 1" },
          { label: "Key point 2", value: "Value 2" }
        ]
      };
    })
  ])
};

export default javaTrack;