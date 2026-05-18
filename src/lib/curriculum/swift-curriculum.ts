import { Track } from "./types";

export const swiftTrack: Track = {
  id: "swift",
  title: "Swift",
  tagline: "Modern programming for the Apple ecosystem",
  icon: "🕊️",
  colorVar: "swift",
  brandColor: "#FA7343",
  glowColor: "rgba(250, 115, 67, 0.3)",
  totalChapters: 60,
  estimatedHours: 110,
  chapters: [
    {
      id: "swift-1",
      number: 1,
      title: "What Is Swift and Why Did Apple Create It?",
      subtitle: "Understanding Swift's history and the Apple ecosystem",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 45,
      xpReward: 50,
      prerequisites: [],
      learningObjectives: ["Understand why Apple created Swift", "Compare Swift to Objective-C", "Identify the Apple ecosystem"],
      partLabel: "Part 1: Swift Foundations",
      sections: [
        {
          id: "swift-1-1",
          title: "The Birth of Swift",
          whyItMatters: "Understanding Swift's origins helps you appreciate its modern design.",
          realWorldAnalogy: "Swift is like a modern electric car - smoother, safer, and more efficient than the gas-powered alternatives.",
          content: `Swift was announced by Apple at WWDC 2014, created by Chris Lattner and a team of Apple engineers. It was designed as a replacement for Objective-C, which had been Apple's primary language for over 20 years.

The problems Swift solved:
- **Safety**: Objective-C's dynamic nature led to runtime crashes
- **Performance**: Swift is faster than Objective-C for many operations
- **Modern syntax**: Objective-C's syntax was verbose and confusing
- **Memory safety**: Automatic Reference Counting (ARC) built-in
- **Interoperability**: Can work alongside Objective-C in the same project

Swift is now the primary language for all Apple platforms: iOS, macOS, watchOS, tvOS, and visionOS. It's also available on Linux and Windows.`,
          codeExamples: [
            {
              id: "swift-1-ex1",
              title: "Hello World in Swift",
              description: "Your first Swift program",
              code: { swift: 'import Foundation\n\nprint("Hello, Swift!")\n\n// Variables and constants\nlet appName = "CodeMastery"\nvar version = 1.0\n\nprint("Welcome to \\(appName)")' },
              explanation: "Swift programs start with imports and use print() for output."
            }
          ],
          callouts: [{ type: "info", title: "Open Source", content: "Swift was open-sourced in 2015 and is now available on GitHub at apple/swift." }]
        },
        {
          id: "swift-1-2",
          title: "Swift vs Objective-C",
          whyItMatters: "Understanding the differences helps when working with legacy iOS codebases.",
          content: `**Swift vs Objective-C Comparison:**

\`\`\`swift\n// Swift - Modern and clean\nlet name = "Alice"\nvar age = 25\nfunc greet(person: String) -> String {\n    return "Hello, \\(person)"\n}\n\`\`\`

\`\`\`objectivec\n// Objective-C - Verbose and complex\nNSString *name = @"Alice";\nint age = 25;\n- (NSString *)greet:(NSString *)person {\n    return [NSString stringWithFormat:@"Hello, %@", person];\n}\n\`\`\`

**Key Differences:**
- Swift uses type inference; Objective-C requires explicit types
- Swift has optionals for null safety; Objective-C sends messages to nil
- Swift has closures; Objective-C has blocks
- Swift has switch with pattern matching; Objective-C has simple switch
- Swift is 2-3x faster in many benchmarks`,
          callouts: [{ type: "tip", title: "Swift Is the Future", content: "New iOS/macOS development should be done in Swift. Objective-C is only for maintaining legacy code." }]
        },
        {
          id: "swift-1-3",
          title: "The Apple Ecosystem",
          whyItMatters: "Swift's role across Apple's platforms determines what you can build.",
          content: `**Apple Platforms Using Swift:**

- **iOS**: iPhone and iPod Touch apps
- **macOS**: Desktop applications for Mac
- **watchOS**: Apple Watch apps
- **tvOS**: Apple TV apps
- **visionOS**: Apple Vision Pro apps

**Development Tools:**
- **Xcode** - The official IDE (macOS only)
- **Swift Playgrounds** - iPad/mac app for learning Swift
- **Command Line Tools** - For server-side Swift on Linux
- **Vapor** - Popular server-side Swift framework`
        }
      ],
      quiz: { questions: [
        { id: "swift-1-q1", type: "mcq", question: "When was Swift first announced?", options: ["2010", "2012", "2014", "2016"], correctAnswer: "2014", explanation: "Swift was announced at WWDC 2014.", difficulty: 1 },
        { id: "swift-1-q2", type: "true-false", question: "Swift can only be used for iOS development.", correctAnswer: false, explanation: "Swift works on iOS, macOS, watchOS, tvOS, visionOS, Linux, and Windows.", difficulty: 1 },
        { id: "swift-1-q3", type: "mcq", question: "Who created Swift?", options: ["Steve Jobs", "Chris Lattner", "Tim Cook", "John Gruber"], correctAnswer: "Chris Lattner", explanation: "Chris Lattner started Swift development at Apple.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Released", value: "2014" }, { label: "Creator", value: "Chris Lattner" }, { label: "IDE", value: "Xcode" }, { label: "Platforms", value: "iOS, macOS, watchOS, tvOS" }]
    },
    {
      id: "swift-2", number: 2, title: "Installing Xcode and Swift Setup", subtitle: "Setting up your Swift development environment", difficulty: "Absolute Beginner", estimatedMinutes: 40, xpReward: 50, prerequisites: [], learningObjectives: ["Install Xcode", "Create Swift playgrounds", "Run Swift code"], partLabel: "Part 1: Swift Foundations",
      sections: [
        { id: "swift-2-1", title: "Installing Xcode", whyItMatters: "Xcode is the official IDE for all Apple development.", content: `**Installing Xcode:**
- Download from the Mac App Store (free)
- Requires macOS Ventura or later
- ~15GB download size
- Includes Swift compiler, iOS simulator, and all SDKs

**Swift on Other Platforms:**
\`\`\`bash\n# Linux (Ubuntu)\napt-get install swift\n\n# Windows\n# Download from swift.org/download/\n\`\`\`` },
        { id: "swift-2-2", title: "Swift Playgrounds", whyItMatters: "Playgrounds are the fastest way to experiment with Swift code.", content: `**Creating a Playground:**
1. Open Xcode → File → New → Playground
2. Choose "Blank" for iOS or macOS
3. Name your playground and save it

\`\`\`swift\nimport UIKit\n\nvar greeting = "Hello, playground"\nprint(greeting)\n\n// Results sidebar shows values instantly\nlet result = 42 + 8  // Shows 50 in sidebar\n\`\`\`

**REPL (Read-Eval-Print Loop):**
\`\`\`bash\nswift repl\n// Type Swift code directly:\n1> let x = 42\n2> print(x * 2)\n84\n\`\`\``, codeExamples: [{ id: "swift-2-ex1", title: "Playground Basics", description: "Using Swift playgrounds", code: { swift: 'import UIKit\n\nvar greeting = "Hello, Swift!"\nprint(greeting)\n\n// Live preview in playground\nlet colors = ["red", "green", "blue"]\nfor color in colors {\n    print(color)\n}' }, explanation: "Playgrounds provide instant feedback with a results sidebar." }] }
      ],
      quiz: { questions: [
        { id: "swift-2-q1", type: "mcq", question: "What is the official IDE for Swift development?", options: ["Visual Studio", "Xcode", "Android Studio", "IntelliJ"], correctAnswer: "Xcode", explanation: "Xcode is Apple's official IDE for Swift development.", difficulty: 1 },
        { id: "swift-2-q2", type: "true-false", question: "Swift can run on Linux.", correctAnswer: true, explanation: "Swift is available on Linux for server-side development.", difficulty: 1 },
        { id: "swift-2-q3", type: "mcq", question: "What tool provides instant Swift code execution without creating a project?", options: ["Terminal", "Swift Playgrounds", "TextEdit", "Finder"], correctAnswer: "Swift Playgrounds", explanation: "Swift Playgrounds allows instant code experimentation.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "IDE", value: "Xcode (Mac App Store)" }, { label: "Playground", value: "File → New → Playground" }, { label: "REPL", value: "swift repl" }, { label: "Compile", value: "swiftc main.swift" }]
    },
    {
      id: "swift-3", number: 3, title: "Variables and Constants", subtitle: "Mastering var, let, and Swift's type system", difficulty: "Absolute Beginner", estimatedMinutes: 50, xpReward: 60, prerequisites: [], learningObjectives: ["Use var and let correctly", "Understand type inference", "Work with strings and numbers"], partLabel: "Part 1: Swift Foundations",
      sections: [
        { id: "swift-3-1", title: "var vs let", whyItMatters: "Using let by default is a Swift best practice that improves code safety.", content: `**Variables and Constants:**
\`\`\`swift\nvar score = 0       // Variable (can change)\nscore = 100         // OK\n\nlet maxScore = 100  // Constant (cannot change)\n// maxScore = 200   // ERROR: Cannot assign to let\n\`\`\`

**Type Inference:**
\`\`\`swift\nvar name = "Alice"     // String\nvar age = 25          // Int\nvar price = 19.99     // Double\nvar isActive = true   // Bool\n\`\`\`

**Explicit Types:**
\`\`\`swift\nvar name: String = "Alice"\nvar age: Int = 25\nvar price: Double = 19.99\nvar isActive: Bool = true\n\`\`\``, codeExamples: [{ id: "swift-3-ex1", title: "Variables", description: "Declaring variables and constants", code: { swift: 'import Foundation\n\n// Use let by default\nlet appVersion = "1.0"\nlet appName = "CodeMastery"\n\n// Use var only when value changes\nvar userScore = 0\nuserScore += 10\n\n// Type annotation\nvar userName: String = "Alice"\nvar userAge: Int = 25\n\nprint("\\(appName) v\\(appVersion)")\nprint("User: \\(userName), Score: \\(userScore)")' }, explanation: "Prefer let over var. Use type annotations when Swift can't infer the type." }] },
        { id: "swift-3-2", title: "Strings and Numbers", whyItMatters: "Strings and numbers are foundational data types in every Swift program.", content: `**Strings:**
\`\`\`swift\nlet greeting = "Hello, Swift!"\nlet multiLine = """\nThis is a\nmulti-line string\n"""\n\n// String interpolation\nlet name = "Alice"\nlet message = "Hello, \\(name)!"  // "Hello, Alice!"\n\`\`\`

**Numbers:**
\`\`\`swift\nlet integer = 42          // Int\nlet float = 3.14          // Double (preferred)\nlet pi: Float = 3.14159   // Float (32-bit)\n\n// Numeric literals\nlet binary = 0b1010       // 10 in binary\nlet hex = 0xFF            // 255 in hex\nlet scientific = 1.5e2    // 150.0\n\`\`\`

**Type Conversion:**
\`\`\`swift\nlet x = 3\nlet y = 0.14\n// let pi = x + y           // ERROR: cannot add Int and Double\nlet pi = Double(x) + y    // 3.14 (explicit conversion)\n\`\`\`` },
        { id: "swift-3-3", title: "Naming Conventions", whyItMatters: "Consistent naming makes code readable and maintainable.", content: `**Swift Naming Rules:**
- camelCase for variables and functions
- UpperCamelCase for types (structs, classes, enums)
- Descriptive names preferred over abbreviations
- Avoid starting with numbers or using reserved keywords

\`\`\`swift\n// Good naming\nlet maxLoginAttempts = 3\nvar currentUserName = "Alice"\nfunc calculateTotalPrice() { }\n\n// Avoid\nlet mla = 3\nvar cun = "Alice"\nfunc calc() { }\n\`\`\``, callouts: [{ type: "pro-tip", title: "Swift API Guidelines", content: "Readability is paramount. Methods that cause side effects should be verbs (print()), those that return values should be nouns (count)." }] }
      ],
      quiz: { questions: [
        { id: "swift-3-q1", type: "mcq", question: "Which keyword declares a constant in Swift?", options: ["const", "let", "var", "static"], correctAnswer: "let", explanation: "let declares a constant that cannot change after initialization.", difficulty: 1 },
        { id: "swift-3-q2", type: "true-false", question: "Swift automatically converts Int to Double when needed.", correctAnswer: false, explanation: "Swift requires explicit type conversion using Double(intValue).", difficulty: 1 },
        { id: "swift-3-q3", type: "mcq", question: "What is the default floating-point type in Swift?", options: ["Float", "Double", "CGFloat", "Decimal"], correctAnswer: "Double", explanation: "Swift defaults to Double (64-bit) for floating-point numbers.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Constant", value: "let name = value" }, { label: "Variable", value: "var name = value" }, { label: "Interpolation", value: '"\\(variable)"' }, { label: "Conversion", value: "Type(value)" }]
    },
    {
      id: "swift-4", number: 4, title: "Operators and Expressions", subtitle: "Arithmetic, logical, and nil-coalescing operators", difficulty: "Absolute Beginner", estimatedMinutes: 45, xpReward: 50, prerequisites: ["Variables and Constants"], learningObjectives: ["Use arithmetic and logical operators", "Apply the nil-coalescing operator", "Work with ranges"], partLabel: "Part 1: Swift Foundations",
      sections: [
        { id: "swift-4-1", title: "Arithmetic Operators", whyItMatters: "Operators are fundamental to all computational logic.", content: `**Basic Arithmetic:**
\`\`\`swift\nlet a = 10\nlet b = 3\n\nlet sum = a + b          // 13\nlet diff = a - b         // 7\nlet product = a * b      // 30\nlet quotient = a / b     // 3 (integer division)\nlet remainder = a % b    // 1\n\`\`\`

**Compound Assignment:**
\`\`\`swift\nvar score = 10\nscore += 5    // 15\nscore -= 3    // 12\nscore *= 2    // 24\nscore /= 4    // 6\n\`\`\`` },
        { id: "swift-4-2", title: "Comparison and Logical Operators", whyItMatters: "Logical operators control program flow and decision-making.", content: `**Comparison:**
\`\`\`swift\nlet a = 10\nlet b = 20\n\na == b   // false (equal)\na != b   // true  (not equal)\na > b    // false (greater)\na < b    // true  (less)\na >= b   // false (greater or equal)\na <= b   // true  (less or equal)\n\`\`\`

**Logical:**
\`\`\`swift\nlet isAdult = true\nlet hasTicket = false\n\nisAdult && hasTicket   // false (AND)\nisAdult || hasTicket   // true  (OR)\n!isAdult               // false (NOT)\n\`\`\`

**Ternary Operator:**
\`\`\`swift\nlet age = 20\nlet status = age >= 18 ? "Adult" : "Minor"\n// status = "Adult"\n\`\`\`

**Nil-Coalescing (??):**
\`\`\`swift\nlet optionalName: String? = nil\nlet name = optionalName ?? "Default Name"\n// name = "Default Name"\n\`\`\``, callouts: [{ type: "tip", title: "Nil-Coalescing", content: "The ?? operator provides a default value when an optional is nil, making code cleaner than if-let." }] },
        { id: "swift-4-3", title: "Ranges", whyItMatters: "Ranges are used extensively in Swift for loops, array slicing, and pattern matching.", content: `**Range Types:**
\`\`\`swift\nlet closedRange = 1...5      // 1, 2, 3, 4, 5 (includes both ends)\nlet halfOpenRange = 1..<5    // 1, 2, 3, 4 (excludes 5)\nlet oneSidedRange = ...3     // ...3 (to the end)` }
      ],
      quiz: { questions: [
        { id: "swift-4-q1", type: "mcq", question: "What does the ?? operator do in Swift?", options: ["Nil coalescing", "Logical OR", "Ternary", "Bitwise OR"], correctAnswer: "Nil coalescing", explanation: "?? provides a default value when an optional is nil.", difficulty: 1 },
        { id: "swift-4-q2", type: "true-false", question: "The range 1..<5 includes the number 5.", correctAnswer: false, explanation: "1..<5 is a half-open range that excludes 5.", difficulty: 1 },
        { id: "swift-4-q3", type: "mcq", question: "What is the result of 10 / 3 in Swift?", options: ["3.333", "3", "3.0", "Error"], correctAnswer: "3", explanation: "Integer division truncates the decimal part in Swift.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Nil Coalescing", value: "optional ?? default" }, { label: "Ternary", value: "condition ? trueVal : falseVal" }, { label: "Range", value: "1...5 (closed)" }, { label: "Half Range", value: "1..<5 (open)" }]
    },
    {
      id: "swift-5", number: 5, title: "Control Flow", subtitle: "Mastering if, switch, for loops, and guard", difficulty: "Absolute Beginner", estimatedMinutes: 55, xpReward: 60, prerequisites: ["Operators and Expressions"], learningObjectives: ["Use if/else and switch statements", "Write for-in and while loops", "Use guard for early exit"], partLabel: "Part 1: Swift Foundations",
      sections: [
        { id: "swift-5-1", title: "If and Switch", whyItMatters: "Control flow is how programs make decisions.", content: `**If Statements:**
\`\`\`swift\nlet score = 85\n\nif score >= 90 {\n    print("A grade")\n} else if score >= 80 {\n    print("B grade")\n} else {\n    print("Keep trying")\n}\n\`\`\`

**Switch Statements:**
\`\`\`swift\nlet day = 3\n\nswitch day {\ncase 1:\n    print("Monday")\ncase 2:\n    print("Tuesday")\ncase 3:\n    print("Wednesday")\ndefault:\n    print("Other day")\n}\n\`\`\`

**Advanced Switch:**
\`\`\`swift\nlet score = 85\n\nswitch score {\ncase 90...100:\n    print("A")\ncase 80..<90:\n    print("B")\ncase 70..<80:\n    print("C")\ndefault:\n    print("F")\n}\n\`\`\``, codeExamples: [{ id: "swift-5-ex1", title: "Control Flow", description: "Using switch with ranges", code: { swift: 'import Foundation\n\nlet temperature = 25\n\nswitch temperature {\ncase ..<0:\n    print("Freezing")\ncase 0..<20:\n    print("Cold")\ncase 20..<30:\n    print("Warm")\ncase 30...:\n    print("Hot")\ndefault:\n    print("Unknown")\n}' }, explanation: "Swift switch supports pattern matching with ranges." }] },
        { id: "swift-5-2", title: "Loops", whyItMatters: "Loops are essential for processing collections and repeated operations.", content: `**For-In Loops:**
\`\`\`swift\n// Array\nlet names = ["Alice", "Bob", "Charlie"]\nfor name in names {\n    print(name)\n}\n\n// Range\nfor i in 1...5 {\n    print(i)  // 1, 2, 3, 4, 5\n}\n\n// With index\nfor (index, name) in names.enumerated() {\n    print("\\(index): \\(name)")\n}\n\`\`\`

**While Loops:**
\`\`\`swift\nvar count = 0\nwhile count < 5 {\n    print(count)\n    count += 1\n}\n\nvar x = 10\nrepeat {\n    print(x)\n    x -= 1\n} while x > 0\n\`\`\`` },
        { id: "swift-5-3", title: "Guard Statements", whyItMatters: "Guard provides early exit for invalid conditions, reducing nested code.", content: `**Guard Statement:**
\`\`\`swift\nfunc processUser(age: Int?) {\n    guard let age = age else {\n        print("No age provided")\n        return\n    }\n    guard age >= 18 else {\n        print("Must be adult")\n        return\n    }\n    print("Processing adult user aged \\(age)")\n}\n\`\`\`

**Guard vs If:**
- Guard requires early exit (return, break, continue)
- Guard keeps happy path un-indented
- Guard variables are available in the main scope`, callouts: [{ type: "pro-tip", title: "Use Guard for Validation", content: "Use guard at the start of functions to validate inputs and unwrap optionals, keeping the main logic clean." }] }
      ],
      quiz: { questions: [
        { id: "swift-5-q1", type: "mcq", question: "Does Swift switch require break statements?", options: ["Yes", "No", "Only for default", "Sometimes"], correctAnswer: "No", explanation: "Swift switch cases do not fall through by default, so break is not needed.", difficulty: 1 },
        { id: "swift-5-q2", type: "true-false", question: "Guard statements can only be used inside functions.", correctAnswer: true, explanation: "Guard requires early exit (return/break/continue), which is only available inside functions and loops.", difficulty: 1 },
        { id: "swift-5-q3", type: "mcq", question: "What keyword iterates over a range in Swift?", options: ["foreach", "for-in", "for each", "loop"], correctAnswer: "for-in", explanation: "Swift uses for-in loops for iterating over sequences.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "For-In", value: "for item in collection" }, { label: "Switch", value: "switch value { case 1: }" }, { label: "Guard", value: "guard cond else { return }" }, { label: "Range Match", value: "case 0..<10:" }]
    },
    {
      id: "swift-6", number: 6, title: "Functions", subtitle: "Parameters, return values, and closures", difficulty: "Absolute Beginner", estimatedMinutes: 55, xpReward: 60, prerequisites: ["Control Flow"], learningObjectives: ["Define functions with parameters", "Use external and internal parameter names", "Write closures"], partLabel: "Part 1: Swift Foundations",
      sections: [
        { id: "swift-6-1", title: "Function Basics", whyItMatters: "Functions are the building blocks of organized Swift code.", content: `**Function Definition:**
\`\`\`swift\nfunc greet(name: String) -> String {\n    return "Hello, \\(name)!"\n}\n\nlet message = greet(name: "Alice")  // "Hello, Alice!"\n\`\`\`

**Multiple Parameters:**
\`\`\`swift\nfunc add(a: Int, b: Int) -> Int {\n    return a + b\n}\n\nlet result = add(a: 3, b: 4)  // 7\n\`\`\`

**External and Internal Names:**
\`\`\`swift\nfunc greet(person name: String) -> String {\n    return "Hello, \\(name)!"\n}\n\n// person is external (used when calling)\n// name is internal (used in function body)\ngreet(person: "Alice")\n\`\`\`

**Omitting Argument Labels:**
\`\`\`swift\nfunc sum(_ a: Int, _ b: Int) -> Int {\n    return a + b\n}\n\nsum(3, 4)  // Call without labels\n\`\`\``, codeExamples: [{ id: "swift-6-ex1", title: "Functions", description: "Defining and calling functions", code: { swift: 'import Foundation\n\nfunc calculateTotal(price: Double, quantity: Int, taxRate: Double = 0.1) -> Double {\n    let subtotal = price * Double(quantity)\n    let tax = subtotal * taxRate\n    return subtotal + tax\n}\n\nlet total = calculateTotal(price: 19.99, quantity: 3)\nprint("Total: $\\(total)")\n\n// Without labels\nfunc multiply(_ a: Int, _ b: Int) -> Int {\n    return a * b\n}\nprint("Product: \\(multiply(6, 7))")' }, explanation: "Swift functions support external/internal names and default parameters." }] },
        { id: "swift-6-2", title: "Default and Variadic Parameters", whyItMatters: "These features make functions more flexible and reusable.", content: `**Default Parameters:**
\`\`\`swift\nfunc greet(name: String, greeting: String = "Hello") -> String {\n    return "\\(greeting), \\(name)!"\n}\n\ngreet(name: "Alice")              // "Hello, Alice!"\ngreet(name: "Bob", greeting: "Hi") // "Hi, Bob!"\n\`\`\`

**Variadic Parameters:**
\`\`\`swift\nfunc sum(_ numbers: Int...) -> Int {\n    return numbers.reduce(0, +)\n}\n\nsum(1, 2, 3)       // 6\nsum(1, 2, 3, 4, 5) // 15\n\`\`\`

**In-Out Parameters:**
\`\`\`swift\nfunc swap(_ a: inout Int, _ b: inout Int) {\n    let temp = a\n    a = b\n    b = temp\n}\n\nvar x = 10, y = 20\nswap(&x, &y)\n// x = 20, y = 10\n\`\`\`` },
        { id: "swift-6-3", title: "Closures", whyItMatters: "Closures are self-contained blocks of functionality, like lambdas in other languages.", content: `**Closure Syntax:**
\`\`\`swift\nlet greet = { (name: String) -> String in\n    return "Hello, \\(name)!"\n}\n\ngreet("Alice")  // "Hello, Alice!"\n\`\`\`

**Shorthand Syntax:**
\`\`\`swift\nlet numbers = [1, 2, 3, 4, 5]\n\n// Full closure\nlet doubled = numbers.map({ (n: Int) -> Int in return n * 2 })\n\n// Shorthand\nlet doubled = numbers.map { $0 * 2 }\n\`\`\`

**Trailing Closure:**
\`\`\`swift\nfunc performAsync(task: () -> Void) {\n    task()\n}\n\nperformAsync {\n    print("Task running...")\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-6-q1", type: "mcq", question: "What does _ as an argument label mean?", options: ["Wildcard", "Omits the label", "Required", "Optional"], correctAnswer: "Omits the label", explanation: "The underscore _ omits the external argument label, so you call the function without it.", difficulty: 1 },
        { id: "swift-6-q2", type: "true-false", question: "Swift closures can capture values from their surrounding scope.", correctAnswer: true, explanation: "Closures capture and store references to variables from the surrounding context.", difficulty: 1 },
        { id: "swift-6-q3", type: "mcq", question: "Which keyword marks a parameter as modifiable inside a function?", options: ["var", "inout", "mutating", "ref"], correctAnswer: "inout", explanation: "inout parameters allow functions to modify external variables.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Function", value: "func name(param: Type) -> Return" }, { label: "Default Param", value: "param: Type = value" }, { label: "Variadic", value: "param: Type..." }, { label: "Closure", value: "{ (param) in return }" }]
    },
    {
      id: "swift-7", number: 7, title: "Collections", subtitle: "Arrays, Dictionaries, and Sets", difficulty: "Beginner", estimatedMinutes: 55, xpReward: 60, prerequisites: ["Variables and Constants"], learningObjectives: ["Create and manipulate arrays", "Use dictionaries for key-value storage", "Work with sets"], partLabel: "Part 1: Swift Foundations",
      sections: [
        { id: "swift-7-1", title: "Arrays", whyItMatters: "Arrays are the most commonly used collection in Swift.", content: `**Creating Arrays:**
\`\`\`swift\nvar numbers = [1, 2, 3, 4, 5]\nvar names: [String] = ["Alice", "Bob"]\nvar empty: [Int] = []\nvar empty2 = [Int]()\n\`\`\`

**Array Operations:**
\`\`\`swift\nvar fruits = ["Apple", "Banana"]\nfruits.append("Cherry")      // Add at end\nfruits.insert("Orange", at: 1) // Insert at index\nfruits.remove(at: 0)         // Remove at index\nfruits[0] = "Kiwi"           // Modify by index\nfruits.count                 // Number of items\nfruits.isEmpty               // Check if empty\n\`\`\`

**Iteration:**
\`\`\`swift\nfor fruit in fruits { print(fruit) }\nfor (index, fruit) in fruits.enumerated() { }\n\`\`\`` },
        { id: "swift-7-2", title: "Dictionaries", whyItMatters: "Dictionaries provide efficient key-value lookups.", content: `**Creating Dictionaries:**
\`\`\`swift\nvar ages = ["Alice": 25, "Bob": 30]\nvar scores: [String: Int] = [:]\nvar empty = [String: Int]()\n\`\`\`

**Dictionary Operations:**
\`\`\`swift\nages["Charlie"] = 35       // Add or update\nlet age = ages["Alice"]    // Optional(25)\nages["Bob"] = nil          // Remove\nages.removeValue(forKey: "Alice")\n\`\`\`

**Safe Access:**
\`\`\`swift\nif let age = ages["Alice"] {\n    print("Age: \\(age)")\n}\n\`\`\`` },
        { id: "swift-7-3", title: "Sets", whyItMatters: "Sets store unique, unordered elements with fast membership testing.", content: `**Creating Sets:**
\`\`\`swift\nvar numbers: Set = [1, 2, 3, 4, 5]\nvar letters = Set<Character>()\n\`\`\`

**Set Operations:**
\`\`\`swift\nnumbers.insert(6)\nnumbers.remove(3)\nnumbers.contains(3)  // false\n\`\`\`

**Set Algebra:**
\`\`\`swift\nlet a: Set = [1, 2, 3, 4]\nlet b: Set = [3, 4, 5, 6]\n\na.union(b)           // [1,2,3,4,5,6]\na.intersection(b)    // [3,4]\na.subtracting(b)     // [1,2]\na.symmetricDifference(b) // [1,2,5,6]\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-7-q1", type: "mcq", question: "How do you add an element to an array?", options: ["push()", "append()", "add()", "insert()"], correctAnswer: "append()", explanation: "Swift arrays use append() to add elements at the end.", difficulty: 1 },
        { id: "swift-7-q2", type: "true-false", question: "Dictionaries maintain their insertion order in Swift.", correctAnswer: false, explanation: "Swift dictionaries are unordered. For ordered key-value pairs, use arrays of tuples.", difficulty: 1 },
        { id: "swift-7-q3", type: "mcq", question: "Which collection ensures all elements are unique?", options: ["Array", "Dictionary", "Set", "Tuple"], correctAnswer: "Set", explanation: "Sets store unique elements and provide O(1) membership testing.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Array", value: "[1, 2, 3]" }, { label: "Dictionary", value: '["key": "value"]' }, { label: "Set", value: 'Set([1, 2, 3])' }, { label: "Append", value: "array.append(item)" }]
    },
    {
      id: "swift-8", number: 8, title: "Structs and Classes", subtitle: "Value vs reference types in Swift", difficulty: "Beginner", estimatedMinutes: 60, xpReward: 70, prerequisites: ["Functions", "Collections"], learningObjectives: ["Define structs and classes", "Understand value vs reference semantics", "Use initializers and properties"], partLabel: "Part 1: Swift Foundations",
      sections: [
        { id: "swift-8-1", title: "Structs", whyItMatters: "Structs are Swift's preferred way to model data.", content: `**Defining Structs:**
\`\`\`swift\nstruct Person {\n    var name: String\n    var age: Int\n}\n\nlet alice = Person(name: "Alice", age: 25)\n// Memberwise initializer is automatic\n\`\`\`

**Mutating Methods:**
\`\`\`swift\nstruct Counter {\n    var count = 0\n    \n    mutating func increment() {\n        count += 1  // Must mark as mutating\n    }\n}\n\`\`\`

**Value Semantics:**
\`\`\`swift\nvar person1 = Person(name: "Alice", age: 25)\nvar person2 = person1  // Creates a COPY\nperson2.name = "Bob"\n// person1.name is still "Alice"\n\`\`\``, codeExamples: [{ id: "swift-8-ex1", title: "Structs", description: "Creating and using structs", code: { swift: 'import Foundation\n\nstruct Book {\n    var title: String\n    var author: String\n    var pages: Int\n    \n    func description() -> String {\n        return "\\(title) by \\(author), \\(pages) pages"\n    }\n}\n\nlet book = Book(title: "1984", author: "George Orwell", pages: 328)\nprint(book.description())\n\n// Value semantics\nvar book2 = book\nbook2.title = "Animal Farm"\nprint(book.title)  // Still "1984"\nprint(book2.title) // "Animal Farm"' }, explanation: "Structs are value types - they are copied when assigned." }] },
        { id: "swift-8-2", title: "Classes", whyItMatters: "Classes provide reference types with inheritance and identity.", content: `**Defining Classes:**
\`\`\`swift\nclass Animal {\n    var name: String\n    \n    init(name: String) {\n        self.name = name\n    }\n    \n    func sound() -> String {\n        return "..."\n    }\n}\n\nclass Dog: Animal {\n    override func sound() -> String {\n        return "Woof!"\n    }\n}\n\nlet dog = Dog(name: "Buddy")\nprint(dog.sound())  // "Woof!"\n\`\`\`

**Reference Semantics:**
\`\`\`swift\nlet animal1 = Dog(name: "Buddy")\nlet animal2 = animal1  // Points to SAME object\nanimal2.name = "Max"\n// animal1.name is now "Max" too\n\`\`\`

**Class vs Struct:**
| Feature | Struct | Class |
|---------|--------|-------|
| Value/Reference | Value | Reference |
| Inheritance | No | Yes |
| Mutability | let = immutable | Always mutable via reference |
| Init | Automatic memberwise | Required explicit` },
        { id: "swift-8-3", title: "Choosing Struct vs Class", whyItMatters: "Choosing the right type affects performance and behavior.", content: `**Prefer Struct When:**
- Modeling data (models, DTOs)
- No need for inheritance
- Values should be independent
- Thread safety is important
- Types are small and copied often

**Use Class When:**
- Need inheritance
- Need reference identity
- Need deinitializers
- Shared mutable state required`, callouts: [{ type: "pro-tip", title: "Apple's Recommendation", content: "Use structs by default. The standard library uses structs extensively (String, Array, Dictionary)." }] }
      ],
      quiz: { questions: [
        { id: "swift-8-q1", type: "mcq", question: "Do structs support inheritance?", options: ["Yes", "No", "Only single", "Only multiple"], correctAnswer: "No", explanation: "Structs cannot inherit from other types. Use classes or protocols for inheritance.", difficulty: 1 },
        { id: "swift-8-q2", type: "true-false", question: "Assigning a struct to a new variable creates a copy.", correctAnswer: true, explanation: "Structs are value types, so they are copied on assignment.", difficulty: 1 },
        { id: "swift-8-q3", type: "mcq", question: "Which keyword allows a struct method to modify properties?", options: ["modifying", "mutating", "changing", "dynamic"], correctAnswer: "mutating", explanation: "Struct methods that modify properties must be marked mutating.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Struct", value: "struct T { var prop }" }, { label: "Class", value: "class T { var prop }" }, { label: "Mutating", value: "mutating func modify()" }, { label: "Init", value: "init(params) { self.prop = prop }" }]
    },
    {
      id: "swift-9", number: 9, title: "Optionals", subtitle: "Swift's powerful nil handling system", difficulty: "Beginner", estimatedMinutes: 55, xpReward: 60, prerequisites: ["Variables and Constants"], learningObjectives: ["Understand optional types", "Use optional binding", "Implement optional chaining"], partLabel: "Part 1: Swift Foundations",
      sections: [
        { id: "swift-9-1", title: "Optional Basics", whyItMatters: "Optionals are Swift's solution to nil safety, preventing crashes at compile time.", content: `**What Are Optionals?**
An optional represents either a value or nil (absence of value).

\`\`\`swift\nvar name: String? = "Alice"   // Optional String\nvar age: Int? = nil           // Optional Int (no value)\n\`\`\`

**Why Optionals?**
In Objective-C, sending a message to nil crashes. Swift prevents this at compile time - you must handle the nil case explicitly.

**Optional Types:**
\`\`\`swift\nvar string: String? = "hello"   // Optional<String>\nvar number: Int? = 42           // Optional<Int>\nvar value: Optional<String> = "hi"  // Full type name\n\`\`\``, codeExamples: [{ id: "swift-9-ex1", title: "Optionals", description: "Working with optional values", code: { swift: 'import Foundation\n\nvar username: String? = "Alice"\nvar password: String? = nil\n\n// Optional binding\nif let user = username {\n    print("User: \\(user)")\n}\n\n// Guard let\nfunc login() {\n    guard let user = username else {\n        print("No username")\n        return\n    }\n    print("Logging in \\(user)")\n}\n\nlogin()\n\n// Nil coalescing\nlet displayName = username ?? "Guest"\nprint("Display: \\(displayName)")' }, explanation: "Optionals force you to handle nil cases explicitly." }] },
        { id: "swift-9-2", title: "Unwrapping Optionals", whyItMatters: "Swift provides multiple ways to safely access optional values.", content: `**Optional Binding (if let):**
\`\`\`swift\nlet name: String? = "Alice"\nif let name = name {\n    print("Name is \\(name)")\n} else {\n    print("Name is nil")\n}\n\`\`\`

**Guard Let:**
\`\`\`swift\nfunc process(name: String?) {\n    guard let name = name else {\n        print("No name")\n        return\n    }\n    print("Processing \\(name)")\n}\n\`\`\`

**Force Unwrapping (!):**
\`\`\`swift\nlet name: String? = "Alice"\nprint(name!)  // "Alice" - crashes if nil\n\`\`\`

**Optional Chaining:**
\`\`\`swift\nstruct Address {\n    var city: String?\n}\n\nstruct Person {\n    var address: Address?\n}\n\nlet person: Person? = Person(address: Address(city: "NYC"))\nlet city = person?.address?.city  // Optional("NYC")\n\`\`\``, callouts: [{ type: "warning", title: "Force Unwrapping", content: "Only use force unwrapping when you are 100% certain the optional has a value. Prefer optional binding for safety." }] },
        { id: "swift-9-3", title: "Implicitly Unwrapped Optionals", whyItMatters: "These are useful for properties that are nil during initialization but set before use.", content: `**Implicitly Unwrapped Optionals (!):**
\`\`\`swift\nvar name: String! = "Alice"  // Optional, but auto-unwrapped\nprint(name.count)  // No need to unwrap\n\`\`\`

**When to Use:**
- IBOutlets in UIKit: @IBOutlet var label: UILabel!
- Properties set during viewDidLoad
- When you guarantee the value exists after initialization

**Caution:** Accessing an implicitly unwrapped optional when it's nil will crash with the same error as force unwrapping.`
        }
      ],
      quiz: { questions: [
        { id: "swift-9-q1", type: "mcq", question: "What operator unwraps an optional or provides a default?", options: ["??", "?!", "?:", "||"], correctAnswer: "??", explanation: "The nil-coalescing operator ?? provides a default value when the optional is nil.", difficulty: 1 },
        { id: "swift-9-q2", type: "true-false", question: "Force unwrapping a nil optional causes a runtime crash.", correctAnswer: true, explanation: "Force unwrapping a nil optional will crash with a fatal error.", difficulty: 1 },
        { id: "swift-9-q3", type: "mcq", question: "What is the type of String? in Swift?", options: ["String", "Optional<String>", "String or nil", "Nil<String>"], correctAnswer: "Optional<String>", explanation: "String? is syntactic sugar for Optional<String>.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Optional", value: "var name: Type?" }, { label: "If Let", value: "if let v = opt { }" }, { label: "Guard Let", value: "guard let v = opt else { }" }, { label: "Coalescing", value: "opt ?? default" }]
    },
    {
      id: "swift-10", number: 10, title: "Enumerations", subtitle: "Powerful enums with associated values", difficulty: "Beginner", estimatedMinutes: 50, xpReward: 60, prerequisites: ["Control Flow"], learningObjectives: ["Define and use enums", "Work with associated values", "Use pattern matching with enums"], partLabel: "Part 1: Swift Foundations",
      sections: [
        { id: "swift-10-1", title: "Enum Basics", whyItMatters: "Enums in Swift are much more powerful than in most languages.", content: `**Basic Enums:**
\`\`\`swift\nenum Direction {\n    case north\n    case south\n    case east\n    case west\n}\n\nvar dir = Direction.north\ndir = .west  // Shorthand when type is known\n\`\`\`

**Raw Values:**
\`\`\`swift\nenum Planet: Int {\n    case mercury = 1\n    case venus = 2\n    case earth = 3\n    case mars = 4\n}\n\nlet planet = Planet(rawValue: 3)  // Optional(.earth)\n\`\`\`

**String Raw Values:**
\`\`\`swift\nenum ColorName: String {\n    case red = "FF0000"\n    case green = "00FF00"\n    case blue = "0000FF"\n}\n\nlet hex = ColorName.red.rawValue  // "FF0000"\n\`\`\``, codeExamples: [{ id: "swift-10-ex1", title: "Enums", description: "Using enumerations with raw values", code: { swift: 'import Foundation\n\nenum Compass: String {\n    case north = "N"\n    case south = "S"\n    case east = "E"\n    case west = "W"\n}\n\nlet direction = Compass.north\nprint("Heading: \\(direction.rawValue)")\n\n// Switch with enum\nswitch direction {\ncase .north:\n    print("Going up!")\ncase .south:\n    print("Going down!")\ncase .east, .west:\n    print("Going sideways")\n}' }, explanation: "Enums with switch provide exhaustive pattern matching." }] },
        { id: "swift-10-2", title: "Associated Values", whyItMatters: "Associated values make enums incredibly versatile for modeling state.", content: `**Associated Values:**
\`\`\`swift\nenum Result {\n    case success(data: String)\n    case failure(error: Error, code: Int)\n}\n\nlet result = Result.success(data: "User data")\n\nswitch result {\ncase .success(let data):\n    print("Got: \\(data)")\ncase .failure(let error, let code):\n    print("Error \\(code): \\(error)")\n}\n\`\`\`

**Real-World Example:**
\`\`\`swift\nenum NetworkResponse {\n    case success(data: Data)\n    case notFound\n    case unauthorized(message: String)\n    case serverError(code: Int)\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-10-q1", type: "mcq", question: "Can Swift enums have raw values?", options: ["No", "Yes, integers only", "Yes, integers or strings", "Yes, any type"], correctAnswer: "Yes, integers or strings", explanation: "Swift enums can have raw values of type Int, String, Character, etc.", difficulty: 1 },
        { id: "swift-10-q2", type: "true-false", question: "Swift enum cases can store associated values.", correctAnswer: true, explanation: "Associated values make Swift enums incredibly powerful for storing data per case.", difficulty: 1 },
        { id: "swift-10-q3", type: "mcq", question: "What is the initializer to create an enum from a raw value?", options: ["Enum(value:)", "Enum(rawValue:)", "Enum(init:)", "Enum.from()"], correctAnswer: "Enum(rawValue:)", explanation: "Use Enum(rawValue:) to create an enum instance from a raw value.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Enum", value: "enum T { case a, b }" }, { label: "Raw Value", value: "enum T: Int { case a = 1 }" }, { label: "Associated", value: "case a(value: Type)" }]
    },
    {
      id: "swift-11", number: 11, title: "Protocols", subtitle: "Defining blueprints for behavior", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: ["Structs and Classes", "Functions"], learningObjectives: ["Define and adopt protocols", "Understand protocol inheritance", "Use protocol-oriented programming"], partLabel: "Part 2: Intermediate Swift",
      sections: [
        { id: "swift-11-1", title: "Protocol Basics", whyItMatters: "Protocols are the foundation of Swift's protocol-oriented programming paradigm.", content: `**Defining Protocols:**
\`\`\`swift\nprotocol Vehicle {\n    var name: String { get }\n    var speed: Double { get set }\n    func move() -> String\n}\n\nstruct Car: Vehicle {\n    let name: String\n    var speed: Double\n    \n    func move() -> String {\n        return "\\(name) drives at \\(speed) mph"\n    }\n}\n\nlet car = Car(name: "Tesla", speed: 100)\nprint(car.move())\n\`\`\`

**Protocol Requirements:**
- Properties: { get } or { get set }
- Methods: instance or static
- Initializers` },
        { id: "swift-11-2", title: "Protocol Inheritance", whyItMatters: "Protocols can inherit from other protocols for hierarchical behavior.", content: `**Protocol Inheritance:**
\`\`\`swift\nprotocol Drawable {\n    func draw()\n}\n\nprotocol Animatable: Drawable {\n    func animate()\n}\n\nstruct Circle: Animatable {\n    func draw() { print("Drawing circle") }\n    func animate() { print("Animating circle") }\n}\n\`\`\``, callouts: [{ type: "pro-tip", title: "Prefer Protocols Over Classes", content: "Swift favors protocol-oriented programming over class inheritance. Protocols provide flexible, reusable abstractions without coupling." }] }
      ],
      quiz: { questions: [
        { id: "swift-11-q1", type: "mcq", question: "What keyword defines a protocol?", options: ["interface", "protocol", "contract", "trait"], correctAnswer: "protocol", explanation: "Swift uses the protocol keyword to define interfaces.", difficulty: 1 },
        { id: "swift-11-q2", type: "true-false", question: "A type can conform to multiple protocols.", correctAnswer: true, explanation: "Types in Swift can conform to multiple protocols, separated by commas.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Protocol", value: "protocol P { var prop: Type { get } }" }, { label: "Conform", value: "struct T: P1, P2 { }" }]
    },
    {
      id: "swift-12", number: 12, title: "Extensions", subtitle: "Adding functionality to existing types", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 60, prerequisites: ["Protocols"], learningObjectives: ["Add methods via extensions", "Conform to protocols in extensions", "Organize code with extensions"], partLabel: "Part 2: Intermediate Swift",
      sections: [
        { id: "swift-12-1", title: "Extension Basics", whyItMatters: "Extensions let you add functionality to types you don't own.", content: `**Adding Methods:**
\`\`\`swift\nextension String {\n    func reverse() -> String {\n        return String(self.reversed())\n    }\n}\n\nlet text = "hello".reverse()  // "olleh"\n\`\`\`

**Adding Computed Properties:**
\`\`\`swift\nextension Int {\n    var squared: Int { return self * self }\n    var isEven: Bool { return self % 2 == 0 }\n}\n\n3.squared  // 9\n4.isEven   // true\n\`\`\`

**Protocol Conformance:**
\`\`\`swift\nextension String: CustomStringConvertible {\n    var description: String {\n        return "String: \\(self)"\n    }\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-12-q1", type: "mcq", question: "Can extensions add stored properties?", options: ["Yes", "No", "Only computed", "Only static"], correctAnswer: "No", explanation: "Extensions can only add computed properties, not stored properties.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Extension", value: "extension Type { }" }, { label: "Computed", value: "extension T { var p: T { return } }" }]
    },
    {
      id: "swift-13", number: 13, title: "Error Handling", subtitle: "Throwing, catching, and managing errors", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: ["Functions", "Optionals"], learningObjectives: ["Define custom error types", "Use throw, try, catch", "Handle errors gracefully"], partLabel: "Part 2: Intermediate Swift",
      sections: [
        { id: "swift-13-1", title: "Error Handling Basics", whyItMatters: "Swift's error handling system ensures errors are properly handled.", content: `**Defining Errors:**
\`\`\`swift\nenum NetworkError: Error {\n    case badURL\n    case timeout\n    case serverError(code: Int)\n    case noData\n}\n\nfunc fetchData(from url: String) throws -> String {\n    guard url.hasPrefix("https://") else {\n        throw NetworkError.badURL\n    }\n    return "Data loaded"\n}\n\`\`\`

**Do-Catch:**
\`\`\`swift\ndo {\n    let data = try fetchData(from: "https://example.com")\n    print(data)\n} catch NetworkError.badURL {\n    print("Invalid URL")\n} catch {\n    print("Other error: \\(error)")\n}\n\`\`\`

**Try? and Try!:**
\`\`\`swift\nlet result = try? fetchData(from: "invalid")  // Optional(nil)\nlet result = try! fetchData(from: "https://valid.com")  // Force - crashes on error\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-13-q1", type: "mcq", question: "What keyword marks a function that can throw errors?", options: ["throws", "throws ->", "throw", "raising"], correctAnswer: "throws", explanation: "Functions that can throw use the throws keyword in their signature.", difficulty: 1 },
        { id: "swift-13-q2", type: "true-false", question: "try? converts errors to optionals.", correctAnswer: true, explanation: "try? returns nil on error instead of throwing.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Throw", value: "func f() throws" }, { label: "Do-Catch", value: "do { try f() } catch { }" }, { label: "Try?", value: "let x = try? f()" }]
    },
    {
      id: "swift-14", number: 14, title: "Closures Deep Dive", subtitle: "Capturing values and escaping closures", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: ["Functions"], learningObjectives: ["Understand closure capture lists", "Use escaping closures", "Write higher-order functions"], partLabel: "Part 2: Intermediate Swift",
      sections: [
        { id: "swift-14-1", title: "Capturing Values", whyItMatters: "Closures capture and store references to variables from their context.", content: `**Capture Semantics:**
\`\`\`swift\nfunc makeCounter() -> () -> Int {\n    var count = 0\n    let increment = {\n        count += 1  // Captures count by reference\n        return count\n    }\n    return increment\n}\n\nlet counter = makeCounter()\ncounter()  // 1\ncounter()  // 2\ncounter()  // 3\n\`\`\`

**Capture Lists:**
\`\`\`swift\nvar x = 10\nlet closure = { [x] in\n    print(x)  // Captures value of x at creation time\n}\nx = 20\nclosure()  // Prints 10, not 20\n\`\`\`

**Escaping Closures:**
\`\`\`swift\nvar handlers: [() -> Void] = []\n\nfunc addHandler(_ handler: @escaping () -> Void) {\n    handlers.append(handler)\n}\n\`\`\``, callouts: [{ type: "warning", title: "Strong Reference Cycles", content: "Be careful with closures capturing self strongly. Use [weak self] to avoid retain cycles." }] }
      ],
      quiz: { questions: [
        { id: "swift-14-q1", type: "mcq", question: "What does @escaping mean?", options: ["Closure runs immediately", "Closure is stored for later", "Closure is optional", "Closure is async"], correctAnswer: "Closure is stored for later", explanation: "@escaping indicates the closure outlives the function scope.", difficulty: 1 },
        { id: "swift-14-q2", type: "true-false", question: "Closures capture variables by reference.", correctAnswer: true, explanation: "Closures capture variables by reference unless using capture lists.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Escaping", value: "@escaping" }, { label: "Capture List", value: "[weak self, unowned self]" }, { label: "Trailing", value: "func { closure }" }]
    },
    {
      id: "swift-15", number: 15, title: "Generics", subtitle: "Writing type-safe, reusable code", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: ["Protocols"], learningObjectives: ["Write generic functions", "Use type constraints", "Create generic types"], partLabel: "Part 2: Intermediate Swift",
      sections: [
        { id: "swift-15-1", title: "Generic Functions", whyItMatters: "Generics eliminate code duplication while maintaining type safety.", content: `**Generic Function:**
\`\`\`swift\nfunc swapValues<T>(_ a: inout T, _ b: inout T) {\n    let temp = a\n    a = b\n    b = temp\n}\n\nvar x = 10, y = 20\nswapValues(&x, &y)\n\nvar a = "Hello", b = "World"\nswapValues(&a, &b)\n\`\`\`

**Type Constraints:**
\`\`\`swift\nfunc findIndex<T: Equatable>(of value: T, in array: [T]) -> Int? {\n    for (index, item) in array.enumerated() {\n        if item == value {\n            return index\n        }\n    }\n    return nil\n}\n\`\`\`

**Generic Types:**
\`\`\`swift\nstruct Stack<Element> {\n    var items: [Element] = []\n    \n    mutating func push(_ item: Element) {\n        items.append(item)\n    }\n    \n    mutating func pop() -> Element? {\n        return items.popLast()\n    }\n}\n\nvar intStack = Stack<Int>()\nintStack.push(1)\nintStack.push(2)\nintStack.pop()  // 2\n\`\`\`` }
      ],
      quiz: { questions: [
         { id: "swift-15-q1", type: "mcq", question: "What syntax declares a type parameter?", options: ["<[T]>", "(T)", "<T>", "[T]"], correctAnswer: "<T>", explanation: "Type parameters use angle brackets: <T>.", difficulty: 1 },
        { id: "swift-15-q2", type: "true-false", question: "Generics allow the same function to work with multiple types.", correctAnswer: true, explanation: "Generics enable type-safe code that works with any type.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Generic Func", value: "func f<T>(_ p: T)" }, { label: "Constraint", value: "<T: Equatable>" }, { label: "Generic Type", value: "struct S<T> { }" }]
    },
    {
      id: "swift-16", number: 16, title: "Access Control", subtitle: "Managing code visibility and encapsulation", difficulty: "Intermediate", estimatedMinutes: 45, xpReward: 60, prerequisites: [], learningObjectives: ["Understand access levels", "Use public, internal, private", "Apply encapsulation patterns"], partLabel: "Part 2: Intermediate Swift",
      sections: [
        { id: "swift-16-1", title: "Access Levels", whyItMatters: "Access control enforces encapsulation and prevents misuse.", content: `**Access Levels (most to least restrictive):**
- **private**: Accessible only in the same declaration
- **fileprivate**: Accessible within the same file
- **internal** (default): Accessible within the same module
- **public**: Accessible from other modules (but not subclassable)
- **open**: Most permissive (subclassable outside module)

\`\`\`swift\npublic struct User {\n    public let id: Int\n    private var password: String  // Hidden from outside\n    internal var lastLogin: Date  // Within module only\n    \n    public init(id: Int, password: String) {\n        self.id = id\n        self.password = password\n    }\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-16-q1", type: "mcq", question: "What is the default access level in Swift?", options: ["private", "fileprivate", "internal", "public"], correctAnswer: "internal", explanation: "Swift defaults to internal access level if none is specified.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Private", value: "private func/property" }, { label: "Internal", value: "Default level" }, { label: "Public", value: "Accessible from outside module" }, { label: "Open", value: "Subclassable outside module" }]
    },
    {
      id: "swift-17", number: 17, title: "ARC and Memory Management", subtitle: "Automatic Reference Counting explained", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: ["Structs and Classes"], learningObjectives: ["Understand ARC", "Identify retain cycles", "Use weak and unowned"], partLabel: "Part 2: Intermediate Swift",
      sections: [
        { id: "swift-17-1", title: "ARC Basics", whyItMatters: "Understanding ARC prevents memory leaks in your apps.", content: `**How ARC Works:**
ARC automatically tracks and manages memory usage by counting references to class instances.

\`\`\`swift\nclass Person {\n    let name: String\n    init(name: String) { self.name = name; print("\\(name) initialized") }\n    deinit { print("\\(name) deinitialized") }\n}\n\nvar person: Person? = Person(name: "Alice")  // RC: 1\nvar ref = person                              // RC: 2\nperson = nil                                  // RC: 1\nref = nil                                     // RC: 0 → deinitialized\n\`\`\`

**Strong Reference Cycles:**
\`\`\`swift\nclass Apartment {\n    let unit: String\n    var tenant: Person?\n    init(unit: String) { self.unit = unit }\n    deinit { print("Apartment \\(unit) deinitialized") }\n}\n\n// Strong cycle:\nvar alice: Person? = Person(name: "Alice")\nvar apt: Apartment? = Apartment(unit: "4A")\nalice?.apartment = apt\napt?.tenant = alice  // Never get deinitialized!\n\`\`\`

**Weak References:**
\`\`\`swift\nclass Apartment {\n    let unit: String\n    weak var tenant: Person?  // Doesn't increase RC\n    // ...\n}\n\`\`\``, callouts: [{ type: "warning", title: "Retain Cycles", content: "Retain cycles cause memory leaks. Use weak for delegate patterns and parent-child relationships where the parent owns the child." }] }
      ],
      quiz: { questions: [
        { id: "swift-17-q1", type: "mcq", question: "What keyword prevents a strong reference cycle?", options: ["weak", "unowned", "both", "neither"], correctAnswer: "both", explanation: "Both weak and unowned prevent strong reference cycles.", difficulty: 1 },
        { id: "swift-17-q2", type: "true-false", question: "ARC manages memory for all Swift types.", correctAnswer: false, explanation: "ARC only manages class instances. Structs and enums are value types managed on the stack.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Weak", value: "weak var prop: Type?" }, { label: "Unowned", value: "unowned var prop: Type" }, { label: "RC", value: "Automatic Reference Counting" }]
    },
    {
      id: "swift-18", number: 18, title: "Property Wrappers", subtitle: "Reusable property behavior", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 80, prerequisites: ["Structs and Classes"], learningObjectives: ["Create property wrappers", "Use built-in wrappers", "Apply wrapper projections"], partLabel: "Part 2: Intermediate Swift",
      sections: [
        { id: "swift-18-1", title: "Property Wrapper Basics", whyItMatters: "Property wrappers encapsulate validation and transformation logic.", content: `**Custom Property Wrapper:**
\`\`\`swift\n@propertyWrapper\nstruct Clamped<T: Comparable> {\n    private var value: T\n    private let min: T\n    private let max: T\n    \n    init(wrappedValue: T, min: T, max: T) {\n        self.min = min\n        self.max = max\n        self.value = min(max(wrappedValue, min), max)\n    }\n    \n    var wrappedValue: T {\n        get { value }\n        set { value = min(max(newValue, min), max) }\n    }\n}\n\nstruct Settings {\n    @Clamped(min: 0, max: 100) var volume: Int = 50\n}\n\nvar s = Settings()\ns.volume = 150  // Clamped to 100\nprint(s.volume)  // 100\n\`\`\`

**Built-in Wrappers:**
\`\`\`swift\n@State var name: String       // SwiftUI state\n@Binding var value: Bool      // SwiftUI binding\n@Published var data: [String] // ObservableObject\n@Environment(\\.colorScheme) var colorScheme\n@AppStorage("setting") var setting = false\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-18-q1", type: "mcq", question: "What keyword declares a property wrapper?", options: ["@propertyWrapper", "@wrapper", "@attribute", "@property"], correctAnswer: "@propertyWrapper", explanation: "The @propertyWrapper annotation marks a type as a property wrapper.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Define", value: "@propertyWrapper struct W { }" }, { label: "Wrapped", value: "var wrappedValue: T" }, { label: "Projected", value: "var projectedValue: T { }" }]
    },
    {
      id: "swift-19", number: 19, title: "Result Type", subtitle: "Modeling success and failure in a single type", difficulty: "Intermediate", estimatedMinutes: 45, xpReward: 60, prerequisites: ["Error Handling"], learningObjectives: ["Use Result type", "Handle success and failure", "Transform results"], partLabel: "Part 2: Intermediate Swift",
      sections: [
        { id: "swift-19-1", title: "Result Basics", whyItMatters: "Result type provides a clean way to handle operations that can succeed or fail.", content: `**Using Result:**
\`\`\`swift\nfunc fetchUser(id: Int) -> Result<User, Error> {\n    if id > 0 {\n        return .success(User(name: "Alice"))\n    } else {\n        return .failure(NetworkError.badURL)\n    }\n}\n\nlet result = fetchUser(id: 1)\n\nswitch result {\ncase .success(let user):\n    print("Got user: \\(user.name)")\ncase .failure(let error):\n    print("Error: \\(error)")\n}\n\`\`\`

**Mapping Results:**
\`\`\`swift\nlet nameResult = result.map { $0.name }\nlet upperResult = result.map { $0.name.uppercased() }\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-19-q1", type: "mcq", question: "What are the two cases of the Result type?", options: ["success/failure", "ok/error", "pass/fail", "good/bad"], correctAnswer: "success/failure", explanation: "Result has success and failure cases.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Success", value: "Result.success(value)" }, { label: "Failure", value: "Result.failure(error)" }, { label: "Map", value: "result.map { }" }]
    },
    {
      id: "swift-20", number: 20, title: "Async/Await", subtitle: "Modern asynchronous programming", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 80, prerequisites: ["Functions", "Error Handling"], learningObjectives: ["Write async functions", "Use await for async calls", "Call async from sync code"], partLabel: "Part 2: Intermediate Swift",
      sections: [
        { id: "swift-20-1", title: "Async/Await Basics", whyItMatters: "Async/await makes asynchronous code read like synchronous code.", content: `**Async Function:**
\`\`\`swift\nfunc fetchUserData() async throws -> User {\n    let url = URL(string: "https://api.example.com/user")!\n    let (data, _) = try await URLSession.shared.data(from: url)\n    return try JSONDecoder().decode(User.self, from: data)\n}\n\`\`\`

**Calling Async Functions:**
\`\`\`swift\nTask {\n    do {\n        let user = try await fetchUserData()\n        print("User: \\(user.name)")\n    } catch {\n        print("Error: \\(error)")\n    }\n}\n\`\`\`

**Async Let:**
\`\`\`swift\nasync let user1 = fetchUser(id: 1)\nasync let user2 = fetchUser(id: 2)\nlet users = try await [user1, user2]  // Both run in parallel\n\`\`\``, codeExamples: [{ id: "swift-20-ex1", title: "Async/Await", description: "Modern async Swift", code: { swift: 'import Foundation\n\nenum NetworkError: Error {\n    case invalidURL\n}\n\nfunc fetchData(from urlString: String) async throws -> String {\n    guard let url = URL(string: urlString) else {\n        throw NetworkError.invalidURL\n    }\n    let (data, _) = try await URLSession.shared.data(from: url)\n    return String(data: data, encoding: .utf8) ?? "No data"\n}\n\nTask {\n    do {\n        let result = try await fetchData(from: "https://example.com")\n        print("Fetched: \\(result)")\n    } catch {\n        print("Failed: \\(error)")\n    }\n}' }, explanation: "Async/await makes asynchronous code linear and readable." }] }
      ],
      quiz: { questions: [
        { id: "swift-20-q1", type: "mcq", question: "What keyword calls an async function?", options: ["async", "await", "wait", "call"], correctAnswer: "await", explanation: "await is used to call async functions and suspend execution.", difficulty: 1 },
        { id: "swift-20-q2", type: "true-false", question: "Async let runs multiple operations in parallel.", correctAnswer: true, explanation: "async let starts operations in parallel and you await the results.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Async Func", value: "func f() async throws -> T" }, { label: "Call", value: "try await f()" }, { label: "Task", value: "Task { await f() }" }, { label: "Async Let", value: "async let x = f()" }]
    },
    {
      id: "swift-21", number: 21, title: "Actors and Concurrency", subtitle: "Safe concurrent code with actors", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 80, prerequisites: ["Async/Await", "Structs and Classes"], learningObjectives: ["Define actors", "Understand actor isolation", "Prevent data races"], partLabel: "Part 2: Intermediate Swift",
      sections: [
        { id: "swift-21-1", title: "Actor Basics", whyItMatters: "Actors protect shared state from data races in concurrent code.", content: `**Actor Definition:**
\`\`\`swift\nactor BankAccount {\n    private var balance: Double = 0\n    \n    func deposit(amount: Double) {\n        balance += amount\n    }\n    \n    func withdraw(amount: Double) -> Bool {\n        guard balance >= amount else { return false }\n        balance -= amount\n        return true\n    }\n    \n    func getBalance() -> Double {\n        return balance\n    }\n}\n\nlet account = BankAccount()\nTask {\n    await account.deposit(amount: 100)\n    let balance = await account.getBalance()\n    print("Balance: \\(balance)")\n}\n\`\`\`

**Actor Isolation:**
- All properties are isolated to the actor
- Must use await to access from outside
- Only one task can access the actor at a time` }
      ],
      quiz: { questions: [
        { id: "swift-21-q1", type: "mcq", question: "What keyword defines an actor?", options: ["actor", "act", "mutex", "lock"], correctAnswer: "actor", explanation: "The actor keyword creates a concurrent safe type.", difficulty: 1 },
        { id: "swift-21-q2", type: "true-false", question: "Actor properties can be accessed directly from outside.", correctAnswer: false, explanation: "Actor properties are isolated and require await to access from outside.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Actor", value: "actor A { }" }, { label: "Access", value: "await actor.method()" }, { label: "Nonisolated", value: "nonisolated func" }]
    },
    {
      id: "swift-22", number: 22, title: "Codable and JSON", subtitle: "Encoding and decoding data", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: ["Structs and Classes", "Error Handling"], learningObjectives: ["Use Codable protocol", "Customize encoding/decoding", "Handle JSON data"], partLabel: "Part 2: Intermediate Swift",
      sections: [
        { id: "swift-22-1", title: "Codable Basics", whyItMatters: "Codable provides automatic JSON serialization/deserialization.", content: `**Codable Conformance:**
\`\`\`swift\nstruct User: Codable {\n    let id: Int\n    let name: String\n    let email: String\n    let isActive: Bool\n}\n\n// Encode\nlet user = User(id: 1, name: "Alice", email: "alice@example.com", isActive: true)\nlet encoder = JSONEncoder()\nencoder.outputFormatting = .prettyPrinted\nlet data = try encoder.encode(user)\nlet jsonString = String(data: data, encoding: .utf8)!\n\`\`\`

**Decoding:**
\`\`\`swift\nlet json = """\n{\n    "id": 1,\n    "name": "Alice",\n    "email": "alice@example.com",\n    "isActive": true\n}\n""".data(using: .utf8)!\n\nlet decoder = JSONDecoder()\nlet user = try decoder.decode(User.self, from: json)\n\`\`\`

**Custom Coding Keys:**
\`\`\`swift\nstruct User: Codable {\n    let userId: Int\n    let userName: String\n    \n    enum CodingKeys: String, CodingKey {\n        case userId = "user_id"\n        case userName = "user_name"\n    }\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-22-q1", type: "mcq", question: "What protocol provides JSON encoding/decoding?", options: ["JSONSerializable", "Codable", "Encodable", "Serializable"], correctAnswer: "Codable", explanation: "Codable (Encodable & Decodable) provides automatic serialization.", difficulty: 1 },
        { id: "swift-22-q2", type: "true-false", question: "Property names must match JSON keys exactly.", correctAnswer: false, explanation: "CodingKeys enum allows mapping between property names and JSON keys.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Codable", value: "struct T: Codable { }" }, { label: "Encode", value: "JSONEncoder().encode(value)" }, { label: "Decode", value: "JSONDecoder().decode(T.self, from: data)" }, { label: "Keys", value: "enum CodingKeys: String, CodingKey { }" }]
    },
    {
      id: "swift-23", number: 23, title: "Introduction to SwiftUI", subtitle: "Apple's declarative UI framework", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: ["Structs and Classes"], learningObjectives: ["Understand SwiftUI philosophy", "Create basic views", "Use previews"], partLabel: "Part 3: SwiftUI",
      sections: [
        { id: "swift-23-1", title: "SwiftUI Basics", whyItMatters: "SwiftUI is the modern way to build Apple platform UIs.", content: `**SwiftUI View:**
\`\`\`swift\nimport SwiftUI\n\nstruct ContentView: View {\n    var body: some View {\n        VStack {\n            Text("Hello, SwiftUI!")\n                .font(.title)\n                .foregroundColor(.blue)\n            \n            Button("Tap Me") {\n                print("Button tapped")\n            }\n            .padding()\n            .background(Color.blue)\n            .foregroundColor(.white)\n            .cornerRadius(10)\n        }\n    }\n}\n\`\`\`

**Declarative vs Imperative:**
- **UIKit (Imperative)**: Create label, set text, set color, add to view
- **SwiftUI (Declarative)**: Text is a view with properties - what you see is the UI

**Previews:**
\`\`\`swift\n#Preview {\n    ContentView()\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-23-q1", type: "mcq", question: "What protocol must a SwiftUI view conform to?", options: ["UIView", "View", "SwiftUIView", "CustomView"], correctAnswer: "View", explanation: "All SwiftUI views conform to the View protocol.", difficulty: 1 },
        { id: "swift-23-q2", type: "true-false", question: "SwiftUI uses a declarative programming paradigm.", correctAnswer: true, explanation: "SwiftUI declares what the UI should look like, not how to build it step by step.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "View", value: "struct V: View { var body: some View { } }" }, { label: "Preview", value: "#Preview { V() }" }, { label: "Modifier", value: "view.modifier()" }]
    },
    {
      id: "swift-24", number: 24, title: "Views and Layouts", subtitle: "Building UI with stacks and spacers", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: ["SwiftUI Introduction"], learningObjectives: ["Use VStack, HStack, ZStack", "Apply padding and spacing", "Create responsive layouts"], partLabel: "Part 3: SwiftUI",
      sections: [
        { id: "swift-24-1", title: "Layout Stacks", whyItMatters: "Stacks are the foundation of all SwiftUI layouts.", content: `**Layout Stacks:**
\`\`\`swift\nVStack {          // Vertical stack\n    Text("Top")\n    Text("Middle")\n    Text("Bottom")\n}\n\nHStack {          // Horizontal stack\n    Text("Left")\n    Text("Right")\n}\n\nZStack {          // Depth stack (overlapping)\n    Color.blue\n    Text("Overlay")\n        .foregroundColor(.white)\n}\n\`\`\`

**Spacing and Alignment:**
\`\`\`swift\nVStack(alignment: .leading, spacing: 10) {\n    Text("Item 1")\n    Text("Item 2")\n}\n\nHStack(spacing: 20) {\n    Text("Left")\n    Spacer()  // Pushes items apart\n    Text("Right")\n}\n\`\`\`

**Padding:**
\`\`\`swift\nText("Hello")\n    .padding()           // Default padding\n    .padding(.horizontal) // Horizontal only\n    .padding(20)          // Custom size\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-24-q1", type: "mcq", question: "Which stack lays out views on top of each other?", options: ["VStack", "HStack", "ZStack", "LStack"], correctAnswer: "ZStack", explanation: "ZStack overlays views on the Z-axis (depth).", difficulty: 1 },
        { id: "swift-24-q2", type: "true-false", question: "Spacer() fills available space in a stack.", correctAnswer: true, explanation: "Spacer() expands to fill available space in a stack layout.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "VStack", value: "Vertical stack" }, { label: "HStack", value: "Horizontal stack" }, { label: "ZStack", value: "Overlapping stack" }, { label: "Spacer", value: "Fills empty space" }]
    },
    {
      id: "swift-25", number: 25, title: "Text and Images", subtitle: "Displaying content in SwiftUI", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 60, prerequisites: ["SwiftUI Introduction"], learningObjectives: ["Style text views", "Display images", "Use SF Symbols"], partLabel: "Part 3: SwiftUI",
      sections: [
        { id: "swift-25-1", title: "Text Modifiers", whyItMatters: "Text is the most common UI element in any app.", content: `**Text Styling:**
\`\`\`swift\nText("Hello, SwiftUI!")\n    .font(.largeTitle)      // System font sizes\n    .fontWeight(.bold)       // Bold, semibold, light\n    .font(.system(size: 20, weight: .medium))\n    .foregroundColor(.blue)  // Text color\n    .multilineTextAlignment(.center)\n    .lineLimit(2)            // Max 2 lines\n    .lineSpacing(8)          // Line height spacing\n\`\`\`

**Images:**
\`\`\`swift\n// System images (SF Symbols)\nImage(systemName: "star.fill")\n    .font(.largeTitle)\n    .foregroundColor(.yellow)\n\n// App assets\nImage("profile-picture")\n    .resizable()\n    .frame(width: 100, height: 100)\n    .clipShape(Circle())\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-25-q1", type: "mcq", question: "What are Apple's system icons called?", options: ["Font Awesome", "SF Symbols", "Material Icons", "Feather Icons"], correctAnswer: "SF Symbols", explanation: "SF Symbols is Apple's icon library integrated with SwiftUI.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Text", value: 'Text("content")' }, { label: "Image", value: 'Image(systemName: "name")' }, { label: "Resizable", value: ".resizable().aspectRatio(contentMode: .fit)" }]
    },
    {
      id: "swift-26", number: 26, title: "Stacks and Grids", subtitle: "Advanced layout with LazyVGrid and LazyHGrid", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: ["Views and Layouts"], learningObjectives: ["Create grid layouts", "Use LazyVGrid and LazyHGrid", "Build photo gallery layouts"], partLabel: "Part 3: SwiftUI",
      sections: [
        { id: "swift-26-1", title: "Lazy Grids", whyItMatters: "Lazy grids efficiently display collections of items.", content: `**LazyVGrid:**
\`\`\`swift\nlet columns = [\n    GridItem(.flexible()),\n    GridItem(.flexible()),\n    GridItem(.flexible()),\n]\n\nScrollView {\n    LazyVGrid(columns: columns, spacing: 10) {\n        ForEach(1...50, id: \\.self) { index in\n            RoundedRectangle(cornerRadius: 8)\n                .fill(Color.blue)\n                .frame(height: 100)\n                .overlay(Text("\\(index)"))\n        }\n    }\n    .padding()\n}\n\`\`\`

**GridItem Options:**
- .flexible(): Takes available space
- .fixed(100): Fixed width
- .adaptive(minimum: 80): Auto-fits items` }
      ],
      quiz: { questions: [
        { id: "swift-26-q1", type: "mcq", question: "What does Lazy in LazyVGrid mean?", options: ["Slow rendering", "Lazy loading - views created on demand", "Not optimized", "Deprecated"], correctAnswer: "Lazy loading - views created on demand", explanation: "LazyVGrid creates views only when they become visible, improving performance.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "LazyVGrid", value: "LazyVGrid(columns: [GridItem])" }, { label: "LazyHGrid", value: "LazyHGrid(rows: [GridItem])" }, { label: "GridItem", value: ".flexible(), .fixed(), .adaptive()" }]
    },
    {
      id: "swift-27", number: 27, title: "Navigation", subtitle: "Moving between screens in SwiftUI", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: ["Views and Layouts"], learningObjectives: ["Use NavigationStack", "Implement navigation links", "Pass data between screens"], partLabel: "Part 3: SwiftUI",
      sections: [
        { id: "swift-27-1", title: "Navigation Basics", whyItMatters: "Navigation is essential for multi-screen apps.", content: `**NavigationStack:**
\`\`\`swift\nstruct ContentView: View {\n    var body: some View {\n        NavigationStack {\n            List {\n                NavigationLink("Go to Detail") {\n                    DetailView()\n                }\n            }\n            .navigationTitle("Home")\n            .navigationBarTitleDisplayMode(.large)\n        }\n    }\n}\n\nstruct DetailView: View {\n    var body: some View {\n        Text("This is the detail screen")\n            .navigationTitle("Detail")\n    }\n}\n\`\`\`

**Navigation with Data:**
\`\`\`swift\nNavigationLink(value: user) {\n    Text(user.name)\n}\n.navigationDestination(for: User.self) { user in\n    UserDetailView(user: user)\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-27-q1", type: "mcq", question: "What container enables navigation in SwiftUI?", options: ["NavigationView", "NavigationStack", "Navigator", "NavController"], correctAnswer: "NavigationStack", explanation: "NavigationStack (iOS 16+) is the modern navigation container.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Nav Stack", value: "NavigationStack { }" }, { label: "Nav Link", value: "NavigationLink(destination:)" }, { label: "Title", value: ".navigationTitle(\"Title\")" }]
    },
    {
      id: "swift-28", number: 28, title: "State Management", subtitle: "Managing data flow in SwiftUI", difficulty: "Intermediate", estimatedMinutes: 60, xpReward: 80, prerequisites: ["SwiftUI Introduction"], learningObjectives: ["Use @State and @StateObject", "Understand data ownership", "Implement ObservableObject"], partLabel: "Part 3: SwiftUI",
      sections: [
        { id: "swift-28-1", title: "State Basics", whyItMatters: "State management determines how your UI updates when data changes.", content: `**@State (Local State):**
\`\`\`swift\nstruct CounterView: View {\n    @State private var count = 0\n    \n    var body: some View {\n        VStack {\n            Text("Count: \\(count)")\n                .font(.largeTitle)\n            \n            Button("Increment") {\n                count += 1\n            }\n        }\n    }\n}\n\`\`\`

**@StateObject (Owned Observable Object):**
\`\`\`swift\nclass UserSettings: ObservableObject {\n    @Published var username = "Guest"\n    @Published var isLoggedIn = false\n}\n\nstruct SettingsView: View {\n    @StateObject private var settings = UserSettings()\n    \n    var body: some View {\n        Text("User: \\(settings.username)")\n    }\n}\n\`\`\`

**@ObservedObject (Shared Observable Object):**
\`\`\`swift\nstruct ProfileView: View {\n    @ObservedObject var settings: UserSettings\n    // Parent owns the object, this view observes\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-28-q1", type: "mcq", question: "What property wrapper declares local view state?", options: ["@State", "@StateObject", "@ObservedObject", "@Published"], correctAnswer: "@State", explanation: "@State manages local value type state within a single view.", difficulty: 1 },
        { id: "swift-28-q2", type: "true-false", question: "@Published publishes changes to observers.", correctAnswer: true, explanation: "@Published automatically notifies observers when the value changes.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "@State", value: "@State private var prop" }, { label: "@StateObject", value: "Owns ObservableObject" }, { label: "@ObservedObject", value: "Shares ObservableObject" }, { label: "@Published", value: "Property publisher" }]
    },
    {
      id: "swift-29", number: 29, title: "Bindings", subtitle: "Two-way data connections in SwiftUI", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 60, prerequisites: ["State Management"], learningObjectives: ["Create bindings", "Use @Binding", "Pass state down the view hierarchy"], partLabel: "Part 3: SwiftUI",
      sections: [
        { id: "swift-29-1", title: "Binding Basics", whyItMatters: "Bindings create two-way connections between views and their data.", content: `**@Binding:**
\`\`\`swift\nstruct ParentView: View {\n    @State private var isOn = false\n    \n    var body: some View {\n        ToggleView(isOn: $isOn)  // $ creates binding\n        Text("Toggle: \\(isOn ? "ON" : "OFF")")\n    }\n}\n\nstruct ToggleView: View {\n    @Binding var isOn: Bool\n    \n    var body: some View {\n        Toggle("Switch", isOn: $isOn)\n    }\n}\n\`\`\`

**$ Prefix:**
The $ prefix creates a Binding from a State property, allowing child views to read and write the value.`
        }
      ],
      quiz: { questions: [
        { id: "swift-29-q1", type: "mcq", question: "What symbol creates a binding from @State?", options: ["&", "$", "@", "#"], correctAnswer: "$", explanation: "The $ prefix creates a Binding from a State property wrapper.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "@Binding", value: "@Binding var prop: Type" }, { label: "Binding", value: "$stateProperty" }, { label: "Pass Down", value: "ChildView(binding: $parentState)" }]
    },
    {
      id: "swift-30", number: 30, title: "Lists and Forms", subtitle: "Building data-driven UI", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: ["State Management"], learningObjectives: ["Create dynamic lists", "Build forms", "Handle user input"], partLabel: "Part 3: SwiftUI",
      sections: [
        { id: "swift-30-1", title: "Lists", whyItMatters: "Lists display scrollable collections of data.", content: `**List Basics:**
\`\`\`swift\nstruct ContentView: View {\n    let items = ["Apple", "Banana", "Cherry", "Date"]\n    \n    var body: some View {\n        List(items, id: \\.self) { item in\n            Text(item)\n        }\n    }\n}\n\`\`\`

**Forms:**
\`\`\`swift\nForm {\n    Section("Account") {\n        TextField("Name", text: $name)\n        TextField("Email", text: $email)\n    }\n    \n    Section("Preferences") {\n        Toggle("Notifications", isOn: $notifications)\n        Stepper("Volume: \\(volume)", value: $volume, in: 0...100)\n        Picker("Theme", selection: $theme) {\n            Text("Light").tag(0)\n            Text("Dark").tag(1)\n        }\n    }\n}\n.navigationTitle("Settings")\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-30-q1", type: "mcq", question: "What view creates grouped form interfaces?", options: ["List", "Form", "Group", "Section"], correctAnswer: "Form", explanation: "Form creates a grouped, styled form interface ideal for settings.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "List", value: "List(data, id: \\.self) { }" }, { label: "Form", value: "Form { Section { } }" }, { label: "TextField", value: 'TextField("label", text: $binding)' }]
    },
    {
      id: "swift-31", number: 31, title: "Animations", subtitle: "Bringing SwiftUI views to life", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 70, prerequisites: ["State Management"], learningObjectives: ["Add implicit animations", "Use explicit animations", "Create spring animations"], partLabel: "Part 3: SwiftUI",
      sections: [
        { id: "swift-31-1", title: "Animation Basics", whyItMatters: "Animations make apps feel polished and responsive.", content: `**Implicit Animation:**
\`\`\`swift\nstruct AnimatedView: View {\n    @State private var scale = 1.0\n    \n    var body: some View {\n        Circle()\n            .fill(Color.blue)\n            .frame(width: 100, height: 100)\n            .scaleEffect(scale)\n            .animation(.spring(), value: scale)\n            .onTapGesture {\n                scale += 0.5\n            }\n    }\n}\n\`\`\`

**Explicit Animation:**
\`\`\`swift\nwithAnimation(.easeInOut(duration: 0.5)) {\n    scale += 0.5\n}\n\`\`\`

**Animation Types:**
- .easeIn, .easeOut, .easeInOut
- .spring(response: 0.5, dampingFraction: 0.6)
- .interpolatingSpring(stiffness: 100, damping: 10)` }
      ],
      quiz: { questions: [
        { id: "swift-31-q1", type: "mcq", question: "What function wraps state changes for explicit animation?", options: ["animate", "withAnimation", "animation", "transition"], correctAnswer: "withAnimation", explanation: "withAnimation { } explicitly animates state changes.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Implicit", value: ".animation(.default, value: prop)" }, { label: "Explicit", value: "withAnimation { state = new }" }, { label: "Spring", value: ".spring()" }]
    },
    {
      id: "swift-32", number: 32, title: "Gestures", subtitle: "Interacting with SwiftUI views", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 70, prerequisites: ["Animations"], learningObjectives: ["Add tap and long press", "Implement drag gestures", "Compose multiple gestures"], partLabel: "Part 3: SwiftUI",
      sections: [
        { id: "swift-32-1", title: "Gesture Basics", whyItMatters: "Gestures enable rich touch interactions.", content: `**Tap and Long Press:**
\`\`\`swift\nText("Tap me")\n    .onTapGesture {\n        print("Tapped!")\n    }\n\nCircle()\n    .fill(Color.blue)\n    .frame(width: 100, height: 100)\n    .onLongPressGesture(minimumDuration: 1) {\n        print("Long pressed!")\n    }\n\`\`\`

**Drag Gesture:**
\`\`\`swift\n@State private var offset = CGSize.zero\n\nCircle()\n    .fill(Color.blue)\n    .frame(width: 100, height: 100)\n    .offset(offset)\n    .gesture(\n        DragGesture()\n            .onChanged { gesture in\n                offset = gesture.translation\n            }\n            .onEnded { _ in\n                withAnimation {\n                    offset = .zero\n                }\n            }\n    )\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-32-q1", type: "mcq", question: "What gesture detects finger movement?", options: ["TapGesture", "DragGesture", "LongPressGesture", "MagnificationGesture"], correctAnswer: "DragGesture", explanation: "DragGesture detects continuous finger movement.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Tap", value: ".onTapGesture { }" }, { label: "Long Press", value: ".onLongPressGesture { }" }, { label: "Drag", value: "DragGesture()" }]
    },
    {
      id: "swift-33", number: 33, title: "MVVM Architecture", subtitle: "Model-View-ViewModel pattern", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 80, prerequisites: ["State Management"], learningObjectives: ["Implement MVVM pattern", "Separate concerns", "Build testable views"], partLabel: "Part 3: SwiftUI",
      sections: [
        { id: "swift-33-1", title: "MVVM Basics", whyItMatters: "MVVM is the standard architecture pattern for SwiftUI apps.", content: `**MVVM Components:**
\`\`\`swift\n// Model - Data structures\nstruct User: Codable {\n    let id: Int\n    let name: String\n}\n\n// ViewModel - Business logic + state\nclass UserViewModel: ObservableObject {\n    @Published var users: [User] = []\n    @Published var isLoading = false\n    @Published var errorMessage: String?\n    \n    func loadUsers() async {\n        isLoading = true\n        do {\n            // Fetch from API\n            users = try await api.fetchUsers()\n        } catch {\n            errorMessage = error.localizedDescription\n        }\n        isLoading = false\n    }\n}\n\n// View - UI only\nstruct UserListView: View {\n    @StateObject private var viewModel = UserViewModel()\n    \n    var body: some View {\n        List(viewModel.users, id: \\.id) { user in\n            Text(user.name)\n        }\n        .task {\n            await viewModel.loadUsers()\n        }\n    }\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-33-q1", type: "mcq", question: "What is the ViewModel's role in MVVM?", options: ["UI layout", "Business logic and state", "Data persistence", "Navigation"], correctAnswer: "Business logic and state", explanation: "ViewModel manages business logic, state, and data operations.", difficulty: 1 },
        { id: "swift-33-q2", type: "true-false", question: "Views in MVVM directly access the Model.", correctAnswer: false, explanation: "Views communicate with ViewModels, not directly with Models.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Model", value: "Data structures" }, { label: "ViewModel", value: "ObservableObject with @Published" }, { label: "View", value: "SwiftUI View using @StateObject" }]
    },
    {
      id: "swift-34", number: 34, title: "Networking in SwiftUI", subtitle: "Fetching and displaying data from APIs", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 80, prerequisites: ["MVVM Architecture", "Async/Await"], learningObjectives: ["Make network requests", "Handle loading states", "Display remote data"], partLabel: "Part 3: SwiftUI",
      sections: [
        { id: "swift-34-1", title: "Networking Basics", whyItMatters: "Most modern apps fetch data from remote APIs.", content: `**Network Service:**
\`\`\`swift\nstruct APIService {\n    static let shared = APIService()\n    \n    func fetchUsers() async throws -> [User] {\n        let url = URL(string: "https://api.example.com/users")!\n        let (data, _) = try await URLSession.shared.data(from: url)\n        return try JSONDecoder().decode([User].self, from: data)\n    }\n    \n    func createUser(_ user: User) async throws -> User {\n        let url = URL(string: "https://api.example.com/users")!\n        var request = URLRequest(url: url)\n        request.httpMethod = "POST"\n        request.setValue("application/json", forHTTPHeaderField: "Content-Type")\n        request.httpBody = try JSONEncoder().encode(user)\n        \n        let (data, _) = try await URLSession.shared.data(for: request)\n        return try JSONDecoder().decode(User.self, from: data)\n    }\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-34-q1", type: "mcq", question: "What framework provides network requests in Swift?", options: ["Alamofire", "URLSession", "NetworkKit", "AFNetworking"], correctAnswer: "URLSession", explanation: "URLSession is Apple's built-in networking framework.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Get", value: "URLSession.shared.data(from: url)" }, { label: "Post", value: "URLRequest with httpBody" }, { label: "Async", value: "try await" }]
    },
    {
      id: "swift-35", number: 35, title: "Persistence and Storage", subtitle: "Saving data locally with UserDefaults and Core Data", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 80, prerequisites: ["SwiftUI Introduction"], learningObjectives: ["Use UserDefaults for preferences", "Learn Core Data basics", "Implement data persistence"], partLabel: "Part 3: SwiftUI",
      sections: [
        { id: "swift-35-1", title: "Persistence Basics", whyItMatters: "Data persistence is essential for user preferences and offline access.", content: `**UserDefaults:**
\`\`\`swift\n// Save\nUserDefaults.standard.set("Alice", forKey: "username")\nUserDefaults.standard.set(true, forKey: "isLoggedIn")\nUserDefaults.standard.synchronize()\n\n// Read\nlet username = UserDefaults.standard.string(forKey: "username")\nlet isLoggedIn = UserDefaults.standard.bool(forKey: "isLoggedIn")\n\`\`\`

**AppStorage (SwiftUI):**
\`\`\`swift\nstruct SettingsView: View {\n    @AppStorage("username") var username = "Guest"\n    @AppStorage("notifications") var notifications = true\n    \n    var body: some View {\n        Form {\n            TextField("Username", text: $username)\n            Toggle("Notifications", isOn: $notifications)\n        }\n    }\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-35-q1", type: "mcq", question: "What's the best way to store simple user preferences?", options: ["Core Data", "UserDefaults", "File Manager", "Keychain"], correctAnswer: "UserDefaults", explanation: "UserDefaults is designed for simple key-value preferences.", difficulty: 1 },
        { id: "swift-35-q2", type: "true-false", question: "AppStorage automatically syncs with UserDefaults.", correctAnswer: true, explanation: "@AppStorage wraps UserDefaults and auto-syncs values.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "UserDefaults", value: "UserDefaults.standard.set(val, forKey:)" }, { label: "AppStorage", value: '@AppStorage("key") var prop' }]
    },
    {
      id: "swift-36", number: 36, title: "App Lifecycle", subtitle: "Understanding app states and scenes", difficulty: "Advanced", estimatedMinutes: 50, xpReward: 60, prerequisites: ["SwiftUI Introduction"], learningObjectives: ["Manage app lifecycle", "Handle scene phases", "Respond to background/foreground"], partLabel: "Part 3: SwiftUI",
      sections: [
        { id: "swift-36-1", title: "Lifecycle Basics", whyItMatters: "Managing app lifecycle is critical for resource management.", content: `**SwiftUI Lifecycle:**
\`\`\`swift\nimport SwiftUI\n\n@main\nstruct MyApp: App {\n    @Environment(\\.scenePhase) var scenePhase\n    \n    var body: some Scene {\n        WindowGroup {\n            ContentView()\n        }\n        .onChange(of: scenePhase) { oldPhase, newPhase in\n            switch newPhase {\n            case .active:\n                print("App became active")\n            case .inactive:\n                print("App became inactive")\n            case .background:\n                print("App went to background")\n                // Save state, free resources\n            @unknown default:\n                break\n            }\n        }\n    }\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-36-q1", type: "mcq", question: "When should you save critical app data?", options: ["Active", "Background", "Inactive", "Foreground"], correctAnswer: "Background", explanation: "Save data when the app enters background to prevent data loss.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "ScenePhase", value: ".active, .inactive, .background" }, { label: "Monitor", value: ".onChange(of: scenePhase) { }" }]
    },
    {
      id: "swift-37", number: 37, title: "UIKit Basics", subtitle: "When to use UIKit over SwiftUI", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Understand UIKit", "Create views programmatically", "Use Auto Layout"], partLabel: "Part 4: iOS Development",
      sections: [
        { id: "swift-37-1", title: "UIKit Overview", whyItMatters: "UIKit is essential for maintaining legacy apps and complex custom UI.", content: `**UIKit ViewController:**
\`\`\`swift\nimport UIKit\n\nclass ViewController: UIViewController {\n    \n    override func viewDidLoad() {\n        super.viewDidLoad()\n        view.backgroundColor = .white\n        \n        let label = UILabel()\n        label.text = "Hello from UIKit!"\n        label.textAlignment = .center\n        label.translatesAutoresizingMaskIntoConstraints = false\n        view.addSubview(label)\n        \n        NSLayoutConstraint.activate([\n            label.centerXAnchor.constraint(equalTo: view.centerXAnchor),\n            label.centerYAnchor.constraint(equalTo: view.centerYAnchor)\n        ])\n    }\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-37-q1", type: "mcq", question: "What is the base view controller class?", options: ["UIView", "UIViewController", "UIScene", "UIApp"], correctAnswer: "UIViewController", explanation: "UIViewController is the base class for managing view hierarchies in UIKit.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "VC", value: "UIViewController" }, { label: "View", value: "UIView" }, { label: "Label", value: "UILabel" }, { label: "Button", value: "UIButton" }]
    },
    {
      id: "swift-38", number: 38, title: "Table Views and Collection Views", subtitle: "Displaying scrollable lists and grids", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 80, prerequisites: ["UIKit Basics"], learningObjectives: ["Use UITableView", "Implement UICollectionView", "Handle cell reuse"], partLabel: "Part 4: iOS Development",
      sections: [
        { id: "swift-38-1", title: "Table View Basics", whyItMatters: "TableView is the foundation of many iOS list interfaces.", content: `**UITableView:**
\`\`\`swift\nclass MyTableViewController: UITableViewController {\n    let items = ["Apple", "Banana", "Cherry"]\n    \n    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {\n        return items.count\n    }\n    \n    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {\n        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath)\n        cell.textLabel?.text = items[indexPath.row]\n        return cell\n    }\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-38-q1", type: "mcq", question: "What method provides cells for a table view?", options: ["cellForRowAt", "viewForRow", "configureCell", "rowCell"], correctAnswer: "cellForRowAt", explanation: "tableView(_:cellForRowAt:) provides the cell for each row.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "DataSource", value: "UITableViewDataSource" }, { label: "Delegate", value: "UITableViewDelegate" }, { label: "Reuse", value: "dequeueReusableCell" }]
    },
    {
      id: "swift-39", number: 39, title: "Notifications and Permissions", subtitle: "Local and push notifications", difficulty: "Advanced", estimatedMinutes: 50, xpReward: 70, prerequisites: [], learningObjectives: ["Request notification permissions", "Schedule local notifications", "Handle push notifications"], partLabel: "Part 4: iOS Development",
      sections: [
        { id: "swift-39-1", title: "Notifications Basics", whyItMatters: "Notifications engage users and deliver timely information.", content: `**Requesting Permission:**
\`\`\`swift\nimport UserNotifications\n\nUNUserNotificationCenter.current().requestAuthorization(options: [.alert, .badge, .sound]) { granted, error in\n    if granted {\n        print("Permission granted")\n    }\n}\n\`\`\`

**Local Notification:**
\`\`\`swift\nlet content = UNMutableNotificationContent()\ncontent.title = "Reminder"\ncontent.body = "Time to study Swift!"\ncontent.sound = .default\n\nlet trigger = UNTimeIntervalNotificationTrigger(timeInterval: 60, repeats: false)\nlet request = UNNotificationRequest(identifier: UUID().uuidString, content: content, trigger: trigger)\n\nUNUserNotificationCenter.current().add(request)\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-39-q1", type: "mcq", question: "What framework handles local notifications?", options: ["UserNotifications", "NotificationCenter", "PushKit", "CoreNotifications"], correctAnswer: "UserNotifications", explanation: "UserNotifications framework manages both local and remote notifications.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Permission", value: "requestAuthorization" }, { label: "Content", value: "UNMutableNotificationContent" }, { label: "Trigger", value: "UNTimeIntervalNotificationTrigger" }]
    },
    {
      id: "swift-40", number: 40, title: "Camera and Photos", subtitle: "Working with device media", difficulty: "Advanced", estimatedMinutes: 50, xpReward: 70, prerequisites: [], learningObjectives: ["Access camera", "Pick from photo library", "Handle media permissions"], partLabel: "Part 4: iOS Development",
      sections: [
        { id: "swift-40-1", title: "Camera Basics", whyItMatters: "Camera access enables photo and video features.", content: `**UIImagePickerController:**
\`\`\`swift\nimport UIKit\n\nclass CameraViewController: UIViewController, UIImagePickerControllerDelegate, UINavigationControllerDelegate {\n    \n    func openCamera() {\n        guard UIImagePickerController.isSourceTypeAvailable(.camera) else { return }\n        \n        let picker = UIImagePickerController()\n        picker.sourceType = .camera\n        picker.delegate = self\n        present(picker, animated: true)\n    }\n    \n    func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey : Any]) {\n        if let image = info[.originalImage] as? UIImage {\n            // Use the captured image\n        }\n        dismiss(animated: true)\n    }\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-40-q1", type: "mcq", question: "What delegate manages image picker callbacks?", options: ["UITextFieldDelegate", "UIImagePickerControllerDelegate", "UICollectionViewDelegate", "UITableViewDelegate"], correctAnswer: "UIImagePickerControllerDelegate", explanation: "UIImagePickerControllerDelegate handles image selection events.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Camera", value: "UIImagePickerController(sourceType: .camera)" }, { label: "Library", value: "UIImagePickerController(sourceType: .photoLibrary)" }]
    },
    {
      id: "swift-41", number: 41, title: "Core Data", subtitle: "Persistent object graph management", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 80, prerequisites: ["Persistence and Storage"], learningObjectives: ["Set up Core Data stack", "Create managed objects", "Perform CRUD operations"], partLabel: "Part 4: iOS Development",
      sections: [
        { id: "swift-41-1", title: "Core Data Basics", whyItMatters: "Core Data provides robust object persistence for complex data models.", content: `**Core Data Setup:**
\`\`\`swift\nimport CoreData\n\nclass PersistenceController {\n    static let shared = PersistenceController()\n    \n    let container: NSPersistentContainer\n    \n    init() {\n        container = NSPersistentContainer(name: "MyModel")\n        container.loadPersistentStores { _, error in\n            if let error = error {\n                fatalError("Error: \\(error)")\n            }\n        }\n    }\n    \n    var context: NSManagedObjectContext {\n        return container.viewContext\n    }\n    \n    func save() {\n        if context.hasChanges {\n            try? context.save()\n        }\n    }\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-41-q1", type: "mcq", question: "What is the main context for Core Data operations?", options: ["mainContext", "viewContext", "primaryContext", "defaultContext"], correctAnswer: "viewContext", explanation: "The viewContext is the main context for UI operations.", difficulty: 1 },
        { id: "swift-41-q2", type: "true-false", question: "Core Data is a database.", correctAnswer: false, explanation: "Core Data is an object graph manager that can use SQLite as a store.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Container", value: "NSPersistentContainer" }, { label: "Context", value: "viewContext" }, { label: "Save", value: "try context.save()" }]
    },
    {
      id: "swift-42", number: 42, title: "UserDefaults", subtitle: "Managing app preferences", difficulty: "Intermediate", estimatedMinutes: 40, xpReward: 50, prerequisites: [], learningObjectives: ["Store and retrieve preferences", "Use property list types", "Handle default values"], partLabel: "Part 4: iOS Development",
      sections: [
        { id: "swift-42-1", title: "UserDefaults Deep Dive", whyItMatters: "UserDefaults provides simple, persistent key-value storage.", content: `**UserDefaults Types:**
\`\`\`swift\n// Supported types: String, Int, Bool, Float, Double, Date, Data, URL, [Any], [String: Any]\n\nlet defaults = UserDefaults.standard\n\ndefaults.set("Alice", forKey: "username")\ndefaults.set(25, forKey: "age")\ndefaults.set(true, forKey: "premium")\ndefaults.set(Date(), forKey: "lastLogin")\n\ndefaults.integer(forKey: "launchCount")\ndefaults.double(forKey: "volume")\ndefaults.array(forKey: "recentSearches")\ndefaults.dictionary(forKey: "settings")\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-42-q1", type: "mcq", question: "Can UserDefaults store custom objects?", options: ["Yes", "No, only property list types", "Only via Core Data", "Only strings"], correctAnswer: "No, only property list types", explanation: "UserDefaults only supports property list types: String, Number, Data, Date, Array, Dictionary.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Set", value: "set(value, forKey:)" }, { label: "Get", value: "string(forKey:), integer(forKey:)" }, { label: "Remove", value: "removeObject(forKey:)" }]
    },
    {
      id: "swift-43", number: 43, title: "Location Services", subtitle: "Working with Core Location", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Request location permissions", "Get user location", "Handle location updates"], partLabel: "Part 4: iOS Development",
      sections: [
        { id: "swift-43-1", title: "Location Basics", whyItMatters: "Location services enable map, tracking, and location-based features.", content: `**Core Location:**
\`\`\`swift\nimport CoreLocation\n\nclass LocationManager: NSObject, CLLocationManagerDelegate {\n    let manager = CLLocationManager()\n    \n    override init() {\n        super.init()\n        manager.delegate = self\n        manager.desiredAccuracy = kCLLocationAccuracyBest\n    }\n    \n    func requestPermission() {\n        manager.requestWhenInUseAuthorization()\n    }\n    \n    func startUpdating() {\n        manager.startUpdatingLocation()\n    }\n    \n    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {\n        guard let location = locations.last else { return }\n        print("Lat: \\(location.coordinate.latitude)")\n        print("Lon: \\(location.coordinate.longitude)")\n    }\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-43-q1", type: "mcq", question: "What permission request shows a location popup?", options: ["requestAlwaysAuthorization", "requestWhenInUseAuthorization", "requestLocation", "startUpdatingLocation"], correctAnswer: "requestWhenInUseAuthorization", explanation: "requestWhenInUseAuthorization asks for foreground location access.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Manager", value: "CLLocationManager" }, { label: "Permission", value: "requestWhenInUseAuthorization()" }, { label: "Start", value: "startUpdatingLocation()" }]
    },
    {
      id: "swift-44", number: 44, title: "Push Notifications", subtitle: "Remote notifications from servers", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 70, prerequisites: ["Notifications and Permissions"], learningObjectives: ["Register for remote notifications", "Handle push payloads", "Implement silent notifications"], partLabel: "Part 4: iOS Development",
      sections: [
        { id: "swift-44-1", title: "Push Notification Setup", whyItMatters: "Push notifications deliver real-time updates from servers.", content: `**Registration:**
\`\`\`swift\n// In AppDelegate\nfunc application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n    UNUserNotificationCenter.current().delegate = self\n    \n    application.registerForRemoteNotifications()\n    return true\n}\n\nfunc application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {\n    let token = deviceToken.map { String(format: "%02.2hhx", $0) }.joined()\n    print("Device Token: \\(token)")\n    // Send token to your server\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-44-q1", type: "mcq", question: "What is a device token used for?", options: ["Device identification", "Push notification delivery", "App tracking", "Analytics"], correctAnswer: "Push notification delivery", explanation: "The device token identifies where to deliver push notifications.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Register", value: "registerForRemoteNotifications()" }, { label: "Token", value: "didRegisterForRemoteNotificationsWithDeviceToken" }]
    },
    {
      id: "swift-45", number: 45, title: "API Integration", subtitle: "Connecting to remote services", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 80, prerequisites: ["Networking in SwiftUI", "Codable and JSON"], learningObjectives: ["Build API client", "Handle errors", "Implement caching"], partLabel: "Part 4: iOS Development",
      sections: [
        { id: "swift-45-1", title: "API Client", whyItMatters: "A well-structured API client is the foundation of data-driven apps.", content: `**API Client:**
\`\`\`swift\nenum APIError: Error {\n    case invalidURL\n    case noData\n    case decodingError\n    case serverError(Int)\n}\n\nclass APIClient {\n    static let shared = APIClient()\n    private let baseURL = "https://api.example.com"\n    private let session = URLSession.shared\n    \n    func request<T: Decodable>(_ path: String, method: String = "GET") async throws -> T {\n        guard let url = URL(string: baseURL + path) else {\n            throw APIError.invalidURL\n        }\n        \n        var request = URLRequest(url: url)\n        request.httpMethod = method\n        request.setValue("application/json", forHTTPHeaderField: "Accept")\n        \n        let (data, response) = try await session.data(for: request)\n        \n        guard let httpResponse = response as? HTTPURLResponse else {\n            throw APIError.serverError(0)\n        }\n        \n        guard (200...299).contains(httpResponse.statusCode) else {\n            throw APIError.serverError(httpResponse.statusCode)\n        }\n        \n        guard let decoded = try? JSONDecoder().decode(T.self, from: data) else {\n            throw APIError.decodingError\n        }\n        \n        return decoded\n    }\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-45-q1", type: "mcq", question: "What status codes indicate a successful HTTP request?", options: ["100-199", "200-299", "300-399", "400-499"], correctAnswer: "200-299", explanation: "HTTP status codes 200-299 indicate success.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Request", value: "URLSession.shared.data(for: request)" }, { label: "Decode", value: "JSONDecoder().decode(T.self, from: data)" }]
    },
    {
      id: "swift-46", number: 46, title: "Authentication", subtitle: "User login and session management", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 80, prerequisites: ["API Integration"], learningObjectives: ["Implement OAuth 2.0", "Store tokens securely", "Handle session expiry"], partLabel: "Part 4: iOS Development",
      sections: [
        { id: "swift-46-1", title: "Auth Basics", whyItMatters: "Authentication protects user data and enables personalized experiences.", content: `**Keychain Storage:**
\`\`\`swift\nimport Security\n\nclass KeychainManager {\n    static func save(key: String, value: String) {\n        let data = value.data(using: .utf8)!\n        \n        let query: [String: Any] = [\n            kSecClass as String: kSecClassGenericPassword,\n            kSecAttrAccount as String: key,\n            kSecValueData as String: data,\n        ]\n        \n        SecItemDelete(query as CFDictionary)\n        SecItemAdd(query as CFDictionary, nil)\n    }\n    \n    static func read(key: String) -> String? {\n        let query: [String: Any] = [\n            kSecClass as String: kSecClassGenericPassword,\n            kSecAttrAccount as String: key,\n            kSecReturnData as String: true,\n        ]\n        \n        var result: AnyObject?\n        SecItemCopyMatching(query as CFDictionary, &result)\n        \n        return (result as? Data).flatMap { String(data: $0, encoding: .utf8) }\n    }\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-46-q1", type: "mcq", question: "Where should you store auth tokens?", options: ["UserDefaults", "Keychain", "Core Data", "Files"], correctAnswer: "Keychain", explanation: "Keychain provides secure, encrypted storage for sensitive data like tokens.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Keychain", value: "Security framework" }, { label: "Save", value: "SecItemAdd" }, { label: "Read", value: "SecItemCopyMatching" }]
    },
    {
      id: "swift-47", number: 47, title: "Testing iOS Apps", subtitle: "Unit tests and UI tests", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 70, prerequisites: [], learningObjectives: ["Write unit tests", "Add UI tests", "Run test suites"], partLabel: "Part 4: iOS Development",
      sections: [
        { id: "swift-47-1", title: "Testing Basics", whyItMatters: "Testing ensures code quality and prevents regressions.", content: `**Unit Test:**
\`\`\`swift\nimport XCTest\n@testable import MyApp\n\nfinal class UserViewModelTests: XCTestCase {\n    var viewModel: UserViewModel!\n    \n    override func setUp() {\n        super.setUp()\n        viewModel = UserViewModel()\n    }\n    \n    override func tearDown() {\n        viewModel = nil\n        super.tearDown()\n    }\n    \n    func testInitialState() {\n        XCTAssertTrue(viewModel.users.isEmpty)\n        XCTAssertFalse(viewModel.isLoading)\n        XCTAssertNil(viewModel.errorMessage)\n    }\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-47-q1", type: "mcq", question: "What assertion verifies a boolean is true?", options: ["assertTrue", "XCTAssertTrue", "Assert.True", "verifyTrue"], correctAnswer: "XCTAssertTrue", explanation: "XCTAssertTrue validates that a boolean expression is true.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Import", value: "XCTest" }, { label: "Setup", value: "override func setUp()" }, { label: "Teardown", value: "override func tearDown()" }, { label: "Assert", value: "XCTAssertEqual, XCTAssertTrue" }]
    },
    {
      id: "swift-48", number: 48, title: "App Store Deployment", subtitle: "Submitting your app to the App Store", difficulty: "Advanced", estimatedMinutes: 50, xpReward: 70, prerequisites: [], learningObjectives: ["Prepare app for submission", "Create App Store listing", "Submit for review"], partLabel: "Part 4: iOS Development",
      sections: [
        { id: "swift-48-1", title: "Deployment Steps", whyItMatters: "Getting your app on the App Store is the final step of development.", content: `**Pre-Submission Checklist:**
- Test on real devices
- Check for memory leaks
- Verify all links work
- Test on multiple iOS versions
- Add app icons and launch screen
- Set version and build numbers
- Configure signing certificates

**App Store Connect:**
1. Create app record
2. Upload build via Xcode or Transporter
3. Fill in metadata (description, keywords, screenshots)
4. Set pricing and availability
5. Submit for review

**Xcode Archiving:**
\`\`\`bash\n# In Xcode:\nProduct → Archive\n# Then distribute via App Store Connect\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-48-q1", type: "mcq", question: "What tool uploads builds to App Store?", options: ["Xcode Organizer", "App Store Connect API", "Transporter", "All of the above"], correctAnswer: "All of the above", explanation: "You can upload via Xcode, Transporter app, or App Store Connect API.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Archive", value: "Product → Archive" }, { label: "Upload", value: "Distribute App" }, { label: "Review", value: "App Store Connect" }]
    },
    {
      id: "swift-49", number: 49, title: "Advanced Concurrency", subtitle: "Task groups, continuations, and structured concurrency", difficulty: "Expert", estimatedMinutes: 60, xpReward: 90, prerequisites: ["Actors and Concurrency"], learningObjectives: ["Use task groups", "Bridge callbacks to async", "Understand structured concurrency"], partLabel: "Part 5: Advanced Swift",
      sections: [
        { id: "swift-49-1", title: "Structured Concurrency", whyItMatters: "Structured concurrency makes async code predictable and safe.", content: `**Task Groups:**
\`\`\`swift\nfunc fetchAllUsers() async throws -> [User] {\n    try await withThrowingTaskGroup(of: User.self) { group in\n        let ids = [1, 2, 3, 4, 5]\n        \n        for id in ids {\n            group.addTask {\n                return try await fetchUser(id: id)\n            }\n        }\n        \n        var users: [User] = []\n        for try await user in group {\n            users.append(user)\n        }\n        return users\n    }\n}\n\`\`\`

**Continuations:**
\`\`\`swift\nfunc getData() async -> Data {\n    await withCheckedContinuation { continuation in\n        legacyCallback { data in\n            continuation.resume(returning: data)\n        }\n    }\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-49-q1", type: "mcq", question: "What creates a group of concurrent tasks?", options: ["TaskGroup", "withTaskGroup", "withThrowingTaskGroup", "GroupTask"], correctAnswer: "withThrowingTaskGroup", explanation: "withThrowingTaskGroup creates a group of throwing concurrent tasks.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Task Group", value: "withThrowingTaskGroup(of:) { }" }, { label: "Continuation", value: "withCheckedContinuation { }" }]
    },
    {
      id: "swift-50", number: 50, title: "Performance Optimization", subtitle: "Making Swift apps fast and efficient", difficulty: "Expert", estimatedMinutes: 55, xpReward: 80, prerequisites: ["ARC and Memory Management"], learningObjectives: ["Profile app performance", "Optimize view rendering", "Reduce memory usage"], partLabel: "Part 5: Advanced Swift",
      sections: [
        { id: "swift-50-1", title: "Performance Tips", whyItMatters: "Performance optimization is critical for a smooth user experience.", content: `**Optimization Techniques:**
\`\`\`swift\n// 1. Lazy loading\nlazy var expensiveObject = ExpensiveObject()\n\n// 2. Weak self in closures\napi.fetchData { [weak self] data in\n    self?.updateUI(data)\n}\n\n// 3. Use value types\nstruct UserConfig {  // Struct (value type) is faster than class\n    var theme: String\n    var fontSize: CGFloat\n}\n\n// 4. Profile with Instruments\n// Product → Profile → Time Profiler\n\`\`\`

**Xcode Instruments:**
- Time Profiler: CPU usage
- Allocations: Memory usage
- Leaks: Retain cycles
- Energy Log: Battery impact` }
      ],
      quiz: { questions: [
        { id: "swift-50-q1", type: "mcq", question: "What Xcode tool profiles CPU usage?", options: ["Debugger", "Time Profiler", "Memory Graph", "View Debugger"], correctAnswer: "Time Profiler", explanation: "Time Profiler measures CPU usage and identifies slow code.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Instruments", value: "Product → Profile" }, { label: "Lazy", value: "lazy var prop = Expensive()" }, { label: "Weak", value: "[weak self] in closures" }]
    },
    {
      id: "swift-51", number: 51, title: "Combine Framework", subtitle: "Reactive programming with publishers and subscribers", difficulty: "Expert", estimatedMinutes: 60, xpReward: 90, prerequisites: ["Async/Await"], learningObjectives: ["Understand publishers and subscribers", "Use Combine operators", "Combine with SwiftUI"], partLabel: "Part 5: Advanced Swift",
      sections: [
        { id: "swift-51-1", title: "Combine Basics", whyItMatters: "Combine provides declarative Swift APIs for processing asynchronous events.", content: `**Publisher and Subscriber:**
\`\`\`swift\nimport Combine\n\nvar cancellables = Set<AnyCancellable>()\n\nlet publisher = Just("Hello, Combine!")\n\npublisher\n    .sink { value in\n        print(value)\n    }\n    .store(in: &cancellables)\n\`\`\`

**Published Properties:**
\`\`\`swift\nclass SettingsViewModel: ObservableObject {\n    @Published var searchText = "" {\n        didSet { performSearch() }\n    }\n    \n    private var cancellables = Set<AnyCancellable>()\n    \n    func performSearch() {\n        $searchText\n            .debounce(for: .milliseconds(300), scheduler: RunLoop.main)\n            .removeDuplicates()\n            .sink { [weak self] text in\n                // Search API with debounced text\n            }\n            .store(in: &cancellables)\n    }\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-51-q1", type: "mcq", question: "What protocol represents an async data stream in Combine?", options: ["Observable", "Publisher", "Stream", "Emitter"], correctAnswer: "Publisher", explanation: "The Publisher protocol represents an async data stream in Combine.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Publisher", value: "Publishers, @Published" }, { label: "Subscriber", value: "sink, assign" }, { label: "Pipe", value: ".map, .filter, .debounce" }]
    },
    {
      id: "swift-52", number: 52, title: "Modular App Architecture", subtitle: "Building scalable iOS applications", difficulty: "Expert", estimatedMinutes: 55, xpReward: 80, prerequisites: ["MVVM Architecture"], learningObjectives: ["Structure large apps", "Use modular architecture", "Implement dependency injection"], partLabel: "Part 5: Advanced Swift",
      sections: [
        { id: "swift-52-1", title: "Modular Architecture", whyItMatters: "Modular architecture scales apps for large teams and features.", content: `**Module Structure:**
\`\`\`\nMyApp/\n├── Modules/\n│   ├── Core/\n│   │   ├── Network/\n│   │   ├── Storage/\n│   │   └── DI/\n│   ├── Features/\n│   │   ├── Login/\n│   │   ├── Feed/\n│   │   └── Profile/\n│   └── Shared/\n│       └── UIComponents/\n├── Resources/\n└── App/\n\`\`\`

**Dependency Injection:**
\`\`\`swift\nprotocol UserServiceProtocol {\n    func fetchUsers() async throws -> [User]\n}\n\nclass UserViewModel: ObservableObject {\n    private let userService: UserServiceProtocol\n    \n    init(userService: UserServiceProtocol = UserService()) {\n        self.userService = userService\n    }\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-52-q1", type: "mcq", question: "What pattern provides dependencies to classes?", options: ["Singleton", "Dependency Injection", "Factory", "Observer"], correctAnswer: "Dependency Injection", explanation: "DI provides dependencies externally, making code testable and modular.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Modules", value: "Separate by feature" }, { label: "DI", value: "Protocol-based injection" }, { label: "Core", value: "Shared infrastructure" }]
    },
    {
      id: "swift-53", number: 53, title: "Security Best Practices", subtitle: "Protecting user data and app integrity", difficulty: "Expert", estimatedMinutes: 50, xpReward: 80, prerequisites: ["Authentication"], learningObjectives: ["Implement secure data storage", "Prevent common vulnerabilities", "Use App Transport Security"], partLabel: "Part 5: Advanced Swift",
      sections: [
        { id: "swift-53-1", title: "Security Basics", whyItMatters: "Security protects your users and your app's reputation.", content: `**Security Practices:**
\`\`\`swift\n// 1. App Transport Security (ATS)\n// Info.plist: NSAppTransportSecurity with minimum TLS 1.2\n\n// 2. Secure storage with Keychain\nKeychainManager.save(key: "token", value: "secret_jwt_token")\n\n// 3. Certificate pinning\nlet session = URLSession(configuration: .ephemeral, delegate: self, delegateQueue: nil)\n\nfunc urlSession(_ session: URLSession, didReceive challenge: URLAuthenticationChallenge, completionHandler: @escaping (URLSession.AuthChallengeDisposition, URLCredential?) -> Void) {\n    // Verify server certificate\n}\n\`\`\`

**Data Protection:**
- Encrypt sensitive data at rest
- Use biometric authentication for sensitive areas
- Implement secure network communication
- Sanitize user input` }
      ],
      quiz: { questions: [
        { id: "swift-53-q1", type: "mcq", question: "What Apple technology enforces HTTPS connections?", options: ["VPN", "ATS (App Transport Security)", "Firewall", "Proxy"], correctAnswer: "ATS (App Transport Security)", explanation: "ATS enforces secure network connections with TLS 1.2+.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "ATS", value: "Enforces HTTPS" }, { label: "Keychain", value: "Secure token storage" }, { label: "Pinning", value: "Certificate validation" }]
    },
    {
      id: "swift-54", number: 54, title: "Cross-Platform Swift", subtitle: "Swift beyond Apple platforms", difficulty: "Expert", estimatedMinutes: 45, xpReward: 70, prerequisites: [], learningObjectives: ["Use Swift on Linux", "Explore server-side Swift", "Understand Swift's future"], partLabel: "Part 5: Advanced Swift",
      sections: [
        { id: "swift-54-1", title: "Swift Everywhere", whyItMatters: "Swift is expanding beyond Apple platforms for server-side and cross-platform development.", content: `**Server Side Swift:**
\`\`\`swift\n// Using Vapor framework\nimport Vapor\n\nfunc routes(_ app: Application) throws {\n    app.get("hello") { req -> String in\n        return "Hello from server-side Swift!"\n    }\n    \n    app.get("api/users") { req -> [User] in\n        return try await User.query(on: req.db).all()\n    }\n}\n\`\`\`

**Swift on Linux:**
\`\`\`bash\n# Install Swift on Ubuntu\napt-get install swift\n\n# Build server app\nswift build\nswift run\n\`\`\`

**Cross-Platform Frameworks:**
- SwiftUI + Catalyst (iPad to Mac)
- Swift on AWS Lambda
- Vapor for web backends` }
      ],
      quiz: { questions: [
        { id: "swift-54-q1", type: "mcq", question: "What framework enables server-side Swift?", options: ["Django", "Express", "Vapor", "Flask"], correctAnswer: "Vapor", explanation: "Vapor is the most popular server-side Swift framework.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Vapor", value: "Server-side Swift" }, { label: "Linux", value: "apt-get install swift" }, { label: "Catalyst", value: "iPad apps on Mac" }]
    },
    {
      id: "swift-55", number: 55, title: "Notes App Project", subtitle: "Building a complete notes application", difficulty: "Expert", estimatedMinutes: 120, xpReward: 120, prerequisites: ["Core Data", "Lists and Forms", "Navigation"], learningObjectives: ["Build a full CRUD app", "Implement search", "Add app icon"], partLabel: "Part 6: Projects",
      sections: [
        { id: "swift-55-1", title: "Project Setup", whyItMatters: "Building complete projects solidifies all your Swift skills.", content: `**Notes App Structure:**
\`\`\`swift\nstruct Note: Identifiable, Codable {\n    let id: UUID\n    var title: String\n    var content: String\n    var createdAt: Date\n    var updatedAt: Date\n    \n    init(title: String, content: String) {\n        self.id = UUID()\n        self.title = title\n        self.content = content\n        self.createdAt = Date()\n        self.updatedAt = Date()\n    }\n}\n\nclass NotesViewModel: ObservableObject {\n    @Published var notes: [Note] = []\n    @Published var searchText = ""\n    \n    var filteredNotes: [Note] {\n        if searchText.isEmpty { return notes }\n        return notes.filter { $0.title.localizedCaseInsensitiveContains(searchText) }\n    }\n    \n    func addNote(title: String, content: String) {\n        let note = Note(title: title, content: content)\n        notes.append(note)\n        saveToFile()\n    }\n    \n    func deleteNote(at offsets: IndexSet) {\n        notes.remove(atOffsets: offsets)\n        saveToFile()\n    }\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-55-q1", type: "mcq", question: "What pattern is used for the Notes app?", options: ["MVC", "MVVM", "VIPER", "MVP"], correctAnswer: "MVVM", explanation: "The Notes app follows MVVM with NotesViewModel as the ViewModel.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Model", value: "Note struct" }, { label: "ViewModel", value: "NotesViewModel" }, { label: "Persistence", value: "FileManager JSON" }]
    },
    {
      id: "swift-56", number: 56, title: "Weather App Project", subtitle: "Building a weather app with API integration", difficulty: "Expert", estimatedMinutes: 120, xpReward: 120, prerequisites: ["API Integration", "SwiftUI Views"], learningObjectives: ["Integrate weather API", "Display dynamic data", "Handle loading states"], partLabel: "Part 6: Projects",
      sections: [
        { id: "swift-56-1", title: "Weather App", whyItMatters: "A weather app demonstrates real-world API integration.", content: `**Weather Model:**
\`\`\`swift\nstruct WeatherResponse: Codable {\n    let main: Main\n    let weather: [Weather]\n    let name: String\n}\n\nstruct Main: Codable {\n    let temp: Double\n    let humidity: Int\n}\n\nstruct Weather: Codable {\n    let description: String\n    let icon: String\n}\n\nclass WeatherViewModel: ObservableObject {\n    @Published var weather: WeatherResponse?\n    @Published var isLoading = false\n    @Published var errorMessage: String?\n    \n    func fetchWeather(for city: String) async {\n        isLoading = true\n        defer { isLoading = false }\n        \n        let apiKey = "YOUR_API_KEY"\n        let url = "https://api.openweathermap.org/data/2.5/weather?q=\\(city)&appid=\\(apiKey)"\n        \n        guard let url = URL(string: url.addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed) ?? "") else {\n            errorMessage = "Invalid URL"\n            return\n        }\n        \n        do {\n            let (data, _) = try await URLSession.shared.data(from: url)\n            weather = try JSONDecoder().decode(WeatherResponse.self, from: data)\n        } catch {\n            errorMessage = "Failed to load weather"\n        }\n    }\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-56-q1", type: "mcq", question: "What format do most weather APIs return?", options: ["XML", "JSON", "CSV", "YAML"], correctAnswer: "JSON", explanation: "Most modern APIs return data in JSON format.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "API", value: "OpenWeatherMap" }, { label: "Decode", value: "JSONDecoder" }, { label: "State", value: "loading, success, error" }]
    },
    {
      id: "swift-57", number: 57, title: "Chat App Project", subtitle: "Real-time messaging application", difficulty: "Expert", estimatedMinutes: 120, xpReward: 130, prerequisites: ["Authentication", "WebSockets", "Combine"], learningObjectives: ["Implement real-time chat", "Use WebSockets", "Handle message persistence"], partLabel: "Part 6: Projects",
      sections: [
        { id: "swift-57-1", title: "Chat App", whyItMatters: "Real-time chat demonstrates complex state management and networking.", content: `**Message Model:**
\`\`\`swift\nstruct Message: Identifiable, Codable {\n    let id: UUID\n    let text: String\n    let sender: String\n    let timestamp: Date\n    \n    init(text: String, sender: String) {\n        self.id = UUID()\n        self.text = text\n        self.sender = sender\n        self.timestamp = Date()\n    }\n}\n\nclass ChatViewModel: ObservableObject {\n    @Published var messages: [Message] = []\n    @Published var messageText = ""\n    private let sender: String\n    \n    init(sender: String) {\n        self.sender = sender\n    }\n    \n    func sendMessage() {\n        guard !messageText.trimmingCharacters(in: .whitespaces).isEmpty else { return }\n        let message = Message(text: messageText, sender: sender)\n        messages.append(message)\n        messageText = ""\n        // WebSocket send would go here\n    }\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-57-q1", type: "mcq", question: "What protocol enables real-time chat?", options: ["HTTP", "WebSockets", "TCP", "UDP"], correctAnswer: "WebSockets", explanation: "WebSockets enable persistent bidirectional real-time communication.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Message", value: "Identifiable model" }, { label: "Subscribe", value: "URLSessionWebSocketTask" }, { label: "Send", value: "webSocket.send(.string(msg))" }]
    },
    {
      id: "swift-58", number: 58, title: "E-Commerce App Project", subtitle: "Building a full-featured store", difficulty: "Expert", estimatedMinutes: 120, xpReward: 130, prerequisites: ["API Integration", "Navigation", "State Management"], learningObjectives: ["Build product catalog", "Implement cart", "Handle checkout flow"], partLabel: "Part 6: Projects",
      sections: [
        { id: "swift-58-1", title: "E-Commerce App", whyItMatters: "An e-commerce app exercises the full range of iOS development skills.", content: `**Cart Manager:**
\`\`\`swift\nclass CartManager: ObservableObject {\n    @Published var items: [CartItem] = []\n    \n    var total: Double {\n        items.reduce(0) { $0 + $1.product.price * Double($1.quantity) }\n    }\n    \n    var itemCount: Int {\n        items.reduce(0) { $0 + $1.quantity }\n    }\n    \n    func addToCart(_ product: Product) {\n        if let index = items.firstIndex(where: { $0.product.id == product.id }) {\n            items[index].quantity += 1\n        } else {\n            items.append(CartItem(product: product, quantity: 1))\n        }\n    }\n    \n    func removeFromCart(_ product: Product) {\n        items.removeAll { $0.product.id == product.id }\n    }\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-58-q1", type: "mcq", question: "What pattern manages shared state across views?", options: ["ObservableObject", "StateObject", "Singleton", "Environment"], correctAnswer: "ObservableObject", explanation: "ObservableObject with @Published handles shared state in SwiftUI.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Cart", value: "ObservableObject" }, { label: "Product", value: "Codable model" }, { label: "Checkout", value: "Async API call" }]
    },
    {
      id: "swift-59", number: 59, title: "Full SwiftUI Dashboard App", subtitle: "Building a comprehensive analytics dashboard", difficulty: "Expert", estimatedMinutes: 120, xpReward: 130, prerequisites: ["SwiftUI Advanced", "Charts", "Combine"], learningObjectives: ["Create charts and graphs", "Implement dashboard layout", "Manage complex state"], partLabel: "Part 6: Projects",
      sections: [
        { id: "swift-59-1", title: "Dashboard App", whyItMatters: "A dashboard app demonstrates complex data visualization and state management.", content: `**Dashboard Analytics:**
\`\`\`swift\nimport Charts\n\nstruct SalesData: Identifiable {\n    let id = UUID()\n    let month: String\n    let revenue: Double\n}\n\nstruct DashboardView: View {\n    let data: [SalesData] = [\n        SalesData(month: "Jan", revenue: 1000),\n        SalesData(month: "Feb", revenue: 1500),\n        SalesData(month: "Mar", revenue: 1200),\n        SalesData(month: "Apr", revenue: 1800),\n    ]\n    \n    var body: some View {\n        NavigationStack {\n            ScrollView {\n                VStack(spacing: 20) {\n                    // Revenue chart\n                    Chart(data) { item in\n                        BarMark(\n                            x: .value("Month", item.month),\n                            y: .value("Revenue", item.revenue)\n                        )\n                        .foregroundStyle(.blue.gradient)\n                    }\n                    .frame(height: 200)\n                    .padding()\n                    \n                    // Summary cards\n                    HStack {\n                        StatCard(title: "Users", value: "1,234")\n                        StatCard(title: "Orders", value: "567")\n                        StatCard(title: "Revenue", value: "$12K")\n                    }\n                    .padding(.horizontal)\n                }\n            }\n            .navigationTitle("Dashboard")\n        }\n    }\n}\n\`\`\`` }
      ],
      quiz: { questions: [
        { id: "swift-59-q1", type: "mcq", question: "What SwiftUI framework creates charts?", options: ["Charts", "GraphKit", "PlotView", "ChartUI"], correctAnswer: "Charts", explanation: "Apple's Charts framework provides native SwiftUI chart views.", difficulty: 1 }
      ], passingScore: 70 },
      cheatSheet: [{ label: "Chart", value: "Charts framework" }, { label: "BarMark", value: "Bar charts" }, { label: "LineMark", value: "Line charts" }]
    },
    {
      id: "swift-60", number: 60, title: "Swift Mastery Recap + Certificate Prep", subtitle: "Review and prepare for certification", difficulty: "Expert", estimatedMinutes: 60, xpReward: 150, prerequisites: ["All previous chapters"], learningObjectives: ["Review key Swift concepts", "Complete final assessment", "Prepare for certification"], partLabel: "Part 6: Projects",
      sections: [
        { id: "swift-60-1", title: "Course Review", whyItMatters: "Reviewing consolidates your learning and prepares you for real-world development.", content: `**What You've Learned:**

**Part 1: Swift Foundations**
- Variables, constants, optionals
- Control flow (if, switch, guard)
- Functions, closures
- Collections (arrays, dictionaries, sets)
- Structs, classes, enums

**Part 2: Intermediate Swift**
- Protocols and extensions
- Error handling with throws
- Generics and access control
- ARC and memory management
- Property wrappers
- Codable and JSON

**Part 3: SwiftUI**
- Views, stacks, layouts
- State management (@State, @StateObject)
- Navigation and lists
- Animations and gestures
- MVVM architecture
- Networking and persistence

**Part 4: iOS Development**
- UIKit basics
- Core Data and UserDefaults
- Location services
- Push notifications
- API integration
- Testing and deployment

**Part 5: Advanced Swift**
- Async/await and actors
- Combine framework
- Performance optimization
- Security best practices
- Cross-platform Swift

**Part 6: Projects**
- Notes, Weather, Chat
- E-Commerce, Dashboard

**Next Steps:**
- Build your own iOS app
- Contribute to open source Swift projects
- Study for Apple's Swift certification
- Explore server-side Swift with Vapor`, callouts: [{ type: "tip", title: "Keep Building", content: "The best way to master Swift is to build real apps. Start with a simple idea and iterate." }] }
      ],
      quiz: { questions: [
        { id: "swift-60-q1", type: "mcq", question: "What makes Swift unique for Apple development?", options: ["Objective-C compatibility", "Safety, speed, and modern syntax", "Cross-platform GUI", "Built-in database"], correctAnswer: "Safety, speed, and modern syntax", explanation: "Swift combines safety (optionals, type safety), speed (compiled), and modern syntax.", difficulty: 1 },
        { id: "swift-60-q2", type: "true-false", question: "SwiftUI uses a declarative programming model.", correctAnswer: true, explanation: "SwiftUI declares what the UI should look like, and the framework handles the rest.", difficulty: 1 },
        { id: "swift-60-q3", type: "mcq", question: "What is the recommended architecture for SwiftUI apps?", options: ["MVC", "MVVM", "VIPER", "Clean Swift"], correctAnswer: "MVVM", explanation: "MVVM (Model-View-ViewModel) is the recommended architecture for SwiftUI.", difficulty: 1 }
      ], passingScore: 80 },
      cheatSheet: [
        { label: "var vs let", value: "Mutable vs Constant" },
        { label: "Optional", value: "Type? with nil handling" },
        { label: "Struct", value: "Value type" },
        { label: "Class", value: "Reference type" },
        { label: "Protocol", value: "Interface definition" },
        { label: "SwiftUI", value: "Declarative UI" },
        { label: "Async/Await", value: "Modern concurrency" },
        { label: "@State", value: "Local view state" }
      ]
    }
  ]
};
