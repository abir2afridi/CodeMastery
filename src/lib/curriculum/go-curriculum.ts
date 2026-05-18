import { Track } from "./types";

export const goTrack: Track = {
  id: "go",
  title: "Go",
  tagline: "Simple syntax, massive scalability",
  icon: "🐹",
  colorVar: "go",
  brandColor: "#00ADD8",
  glowColor: "rgba(0, 173, 216, 0.3)",
  totalChapters: 60,
  estimatedHours: 105,
  chapters: [
    {
      id: "go-1",
      number: 1,
      title: "What Is Go and Why Was It Created?",
      subtitle: "Understanding Go's history and philosophy",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 45,
      xpReward: 50,
      prerequisites: [],
      learningObjectives: ["Understand Go's origins at Google", "Compare Go to other languages", "Identify problems Go solves"],
      partLabel: "Part 1: Go Foundations",
      sections: [
        {
          id: "go-1-1",
          title: "The Birth of Go",
          whyItMatters: "Understanding why Go was created helps you appreciate its design decisions.",
          realWorldAnalogy: "Go is like a sports car - stripped of unnecessary features for maximum speed and efficiency.",
          content: `Go (also known as Golang) was born at Google in 2007, designed by Robert Griesemer, Rob Pike, and Ken Thompson. These were not just any programmers - Ken Thompson co-created Unix, and Rob Pike worked on UTF-8.

The problem they faced was real: Google's massive C++ codebase took hours to compile. Developers spent more time waiting for builds than writing code. They wanted a language that combined:
- The performance of C/C++
- The readability of Python
- Fast compilation times
- Built-in concurrency support

Go was officially released in 2009 and has since become one of the most popular languages for cloud infrastructure, microservices, and backend systems. Docker, Kubernetes, Terraform, and Prometheus are all written in Go.`,
          codeExamples: [
            {
              id: "go-1-ex1",
              title: "Hello World in Go",
              description: "Your first Go program",
              code: { go: 'package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello, Go!")\n}' },
              explanation: "Every Go program starts with a package declaration and a main function."
            }
          ],
          callouts: [
            {
              type: "info",
              title: "Why the Name 'Golang'?",
              content: "The official name is 'Go', but 'Golang' became popular because the website is golang.org and searches needed a unique term."
            }
          ]
        },
        {
          id: "go-1-2",
          title: "Go vs Other Languages",
          whyItMatters: "Knowing when to use Go helps you make better technology choices.",
          content: `**Go vs Python:**
- Go is compiled, Python is interpreted
- Go is statically typed, Python is dynamically typed
- Go has built-in concurrency (goroutines), Python has the GIL limitation
- Go compiles to a single binary, Python needs an interpreter

**Go vs Java:**
- Go has no JVM - compiles to native machine code
- Go uses goroutines (2KB stack) vs Java threads (1MB stack)
- Go has no inheritance - uses composition
- Go compiles in seconds, Java takes longer

**Go vs Rust:**
- Go prioritizes simplicity, Rust prioritizes safety
- Go has garbage collection, Rust has ownership/borrowing
- Go is easier to learn, Rust has a steeper learning curve
- Both are excellent for systems programming`,
          callouts: [
            {
              type: "tip",
              title: "When to Choose Go",
              content: "Choose Go for: microservices, cloud infrastructure, CLI tools, network servers, and concurrent systems. Avoid Go for: GUI applications, mobile apps, or when you need extensive library ecosystems."
            }
          ]
        },
        {
          id: "go-1-3",
          title: "Go's Design Philosophy",
          whyItMatters: "Understanding Go's philosophy helps you write idiomatic Go code.",
          content: `Go follows a few key principles:

**Simplicity Over Features:**
Go deliberately omits features like generics (until 1.18), exceptions, and inheritance. This forces developers to write clear, simple code.

**One Obvious Way:**
Python has "one obvious way to do it." Go takes this further - there's often literally one way. The gofmt tool enforces a single code style.

**Composition Over Inheritance:**
Go doesn't have class inheritance. Instead, it uses interfaces and embedding to compose behavior.

**Fast Compilation:**
Go was designed to compile in seconds, not minutes. This changes how you develop - you can run tests immediately after every change.

**Batteries Included:**
The standard library is extensive. You can build production web servers, handle JSON, work with cryptography, and more without external dependencies.`
        }
      ],
      quiz: {
        questions: [
          {
            id: "go-1-q1",
            type: "mcq",
            question: "Where was Go created?",
            options: ["Microsoft", "Google", "Facebook", "Apple"],
            correctAnswer: "Google",
            explanation: "Go was created at Google in 2007 by Robert Griesemer, Rob Pike, and Ken Thompson.",
            difficulty: 1
          },
          {
            id: "go-1-q2",
            type: "true-false",
            question: "Go is an interpreted language like Python.",
            correctAnswer: false,
            explanation: "Go is a compiled language. It compiles to native machine code, not bytecode.",
            difficulty: 1
          },
          {
            id: "go-1-q3",
            type: "mcq",
            question: "Which of these is NOT written in Go?",
            options: ["Docker", "Kubernetes", "React", "Terraform"],
            correctAnswer: "React",
            explanation: "React is written in JavaScript. Docker, Kubernetes, and Terraform are all written in Go.",
            difficulty: 1
          }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Created", value: "2007 at Google" },
        { label: "Released", value: "2009" },
        { label: "Type", value: "Compiled, statically typed" },
        { label: "Key Feature", value: "Built-in concurrency (goroutines)" },
        { label: "Notable Users", value: "Docker, Kubernetes, Terraform" }
      ]
    },
    {
      id: "go-2",
      number: 2,
      title: "Installing Go and First Program",
      subtitle: "Setting up your Go development environment",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 40,
      xpReward: 50,
      prerequisites: [],
      learningObjectives: ["Install Go on your system", "Understand GOPATH and GOROOT", "Write and run your first Go program"],
      partLabel: "Part 1: Go Foundations",
      sections: [
        {
          id: "go-2-1",
          title: "Installing Go",
          whyItMatters: "A proper installation is the foundation of your Go development journey.",
          content: `**Installing Go on Windows:**
1. Download the MSI installer from https://go.dev/dl/
2. Run the installer - it defaults to C:\\Go
3. The installer adds Go to your PATH automatically
4. Open a new Command Prompt and verify: \`go version\`

**Installing Go on macOS:**
\`\`\`bash
brew install go
\`\`\`

**Installing Go on Linux:**
\`\`\`bash
wget https://go.dev/dl/go1.21.0.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.21.0.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin
\`\`\`

**Verify Installation:**
\`\`\`bash
go version
# Output: go version go1.21.0 windows/amd64
\`\`\``,
          callouts: [
            {
              type: "warning",
              title: "Always Use Latest Stable",
              content: "Always install the latest stable version of Go. Older versions may lack security patches and new features."
            }
          ]
        },
        {
          id: "go-2-2",
          title: "Understanding GOPATH and GOROOT",
          whyItMatters: "Understanding Go's directory structure prevents common setup errors.",
          content: `**GOROOT:**
This is where Go is installed (e.g., C:\\Go on Windows). You rarely need to set this manually.

**GOPATH:**
This is your workspace directory. Before Go modules (1.11+), this was critical. Now it's less important but still used for:
- \`bin/\` - compiled binaries
- \`pkg/\` - compiled packages
- \`src/\` - source code (legacy)

**Modern Go (1.11+):**
Go modules removed the need for GOPATH. You can now create Go projects anywhere:
\`\`\`bash
mkdir myproject
cd myproject
go mod init myproject
\`\`\`

**GOENV:**
Stores environment settings. Located at \`%APPDATA%/go/env\` on Windows.`,
          codeExamples: [
            {
              id: "go-2-ex1",
              title: "Check Go Environment",
              description: "View your Go configuration",
              code: { go: '// Run in terminal:\n// go env\n\n// Key variables:\n// GOROOT - where Go is installed\n// GOPATH - your workspace (legacy)\n// GOOS - operating system\n// GOARCH - architecture' },
              explanation: "The go env command shows all Go environment variables."
            }
          ]
        },
        {
          id: "go-2-3",
          title: "Your First Go Program",
          whyItMatters: "Writing your first program confirms your setup works correctly.",
          content: `**Creating Your First Program:**

1. Create a directory:
\`\`\`bash
mkdir hello
cd hello
go mod init hello
\`\`\`

2. Create main.go:
\`\`\`go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
\`\`\`

3. Run it:
\`\`\`bash
go run main.go
# Output: Hello, World!
\`\`\`

4. Build it:
\`\`\`bash
go build -o hello.exe
./hello.exe
# Output: Hello, World!
\`\`\`

**Understanding the Structure:**
- \`package main\` - Every Go file belongs to a package. \`main\` is special - it's executable.
- \`import "fmt"\` - Imports the format package for I/O
- \`func main()\` - Entry point of the program
- \`fmt.Println()\` - Prints to console with newline`
        }
      ],
      quiz: {
        questions: [
          {
            id: "go-2-q1",
            type: "mcq",
            question: "What command checks your Go version?",
            options: ["go check", "go version", "go --version", "go info"],
            correctAnswer: "go version",
            explanation: "The 'go version' command displays the installed Go version.",
            difficulty: 1
          },
          {
            id: "go-2-q2",
            type: "mcq",
            question: "What does 'go mod init' do?",
            options: ["Installs a module", "Initializes a new Go module", "Imports a module", "Lists modules"],
            correctAnswer: "Initializes a new Go module",
            explanation: "'go mod init' creates a go.mod file for dependency management.",
            difficulty: 1
          },
          {
            id: "go-2-q3",
            type: "true-false",
            question: "Every executable Go program must have a main package and main function.",
            correctAnswer: true,
            explanation: "The Go runtime looks for package main and func main() as the entry point.",
            difficulty: 1
          }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Install Command", value: "Download from go.dev/dl/" },
        { label: "Verify Install", value: "go version" },
        { label: "Run Program", value: "go run main.go" },
        { label: "Build Binary", value: "go build -o output" },
        { label: "Init Module", value: "go mod init name" }
      ]
    },
    {
      id: "go-3",
      number: 3,
      title: "Variables and Data Types",
      subtitle: "Mastering Go's type system and variable declarations",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 50,
      xpReward: 60,
      prerequisites: [],
      learningObjectives: ["Declare variables using var and :=", "Understand Go's basic data types", "Work with constants and zero values"],
      partLabel: "Part 1: Go Foundations",
      sections: [
        {
          id: "go-3-1",
          title: "Variable Declaration",
          whyItMatters: "Variables are the building blocks of every program. Go offers unique declaration styles.",
          content: `**The var Keyword:**
\`\`\`go
var age int = 25
var name string = "Alice"
var isStudent bool = true
\`\`\`

**Type Inference:**
Go can infer the type from the value:
\`\`\`go
var age = 25        // int
var name = "Alice"  // string
var score = 95.5    // float64
\`\`\`

**Short Declaration (:=):**
Inside functions, use := for brevity:
\`\`\`go
age := 25
name := "Alice"
score := 95.5
\`\`\`

**Multiple Variables:**
\`\`\`go
var x, y, z int = 1, 2, 3
a, b := "hello", 42
\`\`\`

**Important Rules:**
- := can ONLY be used inside functions
- Unused variables cause compile errors
- Go is statically typed - types cannot change after declaration`,
          codeExamples: [
            {
              id: "go-3-ex1",
              title: "Variable Declarations",
              description: "Different ways to declare variables in Go",
              code: { go: 'package main\n\nimport "fmt"\n\nfunc main() {\n\t// var keyword\n\tvar name string = "Alice"\n\tvar age int = 25\n\n\t// Type inference\n\tvar score = 95.5\n\n\t// Short declaration\n\tgrade := "A"\n\n\t// Multiple variables\n\tvar x, y = 10, 20\n\n\tfmt.Println(name, age, score, grade, x, y)\n}' },
              explanation: "Go provides multiple ways to declare variables, each suited to different contexts."
            }
          ],
          callouts: [
            {
              type: "warning",
              title: "Unused Variables",
              content: "Go will NOT compile if you declare a variable and never use it. This is intentional - it prevents dead code."
            }
          ]
        },
        {
          id: "go-3-2",
          title: "Basic Data Types",
          whyItMatters: "Understanding data types prevents bugs and helps you write efficient code.",
          content: `**Integers:**
\`\`\`go
var a int = 42        // Platform-dependent (32 or 64 bit)
var b int8 = 127      // -128 to 127
var c int16 = 32767   // -32768 to 32767
var d int32 = 2147483647
var e int64 = 9223372036854775807

var f uint = 42       // Unsigned (only positive)
var g uint8 = 255     // 0 to 255 (also called byte)
\`\`\`

**Floating Point:**
\`\`\`go
var pi float32 = 3.14159
var precisePi float64 = 3.141592653589793
\`\`\`

**Strings:**
\`\`\`go
var name string = "Alice"
greeting := "Hello, " + name  // Concatenation
length := len(name)           // String length
\`\`\`

**Booleans:**
\`\`\`go
var isActive bool = true
var isDeleted bool = false
\`\`\`

**Zero Values:**
When you declare a variable without a value, Go assigns a zero value:
- int: 0
- float64: 0.0
- string: ""
- bool: false`,
          codeExamples: [
            {
              id: "go-3-ex2",
              title: "Data Types Demo",
              description: "Working with Go's basic data types",
              code: { go: 'package main\n\nimport "fmt"\n\nfunc main() {\n\t// Integers\n\tvar age int = 25\n\tvar count int8 = 100\n\n\t// Floats\n\tvar price float64 = 19.99\n\tvar tax float64 = 1.5\n\n\t// Strings\n\tvar name string = "Go Programming"\n\n\t// Booleans\n\tvar available bool = true\n\n\t// Zero values\n\tvar zeroInt int\n\tvar zeroString string\n\tvar zeroBool bool\n\n\tfmt.Println("Age:", age)\n\tfmt.Println("Price:", price)\n\tfmt.Println("Name length:", len(name))\n\tfmt.Println("Available:", available)\n\tfmt.Println("Zero int:", zeroInt)\n\tfmt.Println("Zero string:", zeroString)\n\tfmt.Println("Zero bool:", zeroBool)\n}' },
              explanation: "Go's type system is strict and explicit, preventing many common programming errors."
            }
          ]
        },
        {
          id: "go-3-3",
          title: "Constants and Type Conversion",
          whyItMatters: "Constants and proper type conversion are essential for writing robust Go code.",
          content: `**Constants:**
\`\`\`go
const Pi = 3.14159
const AppName = "MyApp"
const MaxRetries = 3
\`\`\`

**Typed Constants:**
\`\`\`go
const Pi float64 = 3.14159
const MaxConnections int = 100
\`\`\`

**iota for Enumerations:**
\`\`\`go
const (\n    Sunday = iota    // 0\n    Monday           // 1\n    Tuesday          // 2\n    Wednesday        // 3\n)\n\`\`\`

**Type Conversion:**
Go does NOT do implicit type conversion. You must convert explicitly:
\`\`\`go
var i int = 42\nvar f float64 = float64(i)  // int to float64\nvar u uint = uint(i)      // int to uint\n\n// This will NOT compile:\n// var f float64 = i  // Error: cannot use i (type int) as type float64\n\`\`\``,
          callouts: [
            {
              type: "pro-tip",
              title: "Use const for Magic Numbers",
              content: "Always use constants instead of hardcoded numbers. This makes code more readable and maintainable."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "go-3-q1",
            type: "mcq",
            question: "Which symbol is used for short variable declaration in Go?",
            options: ["=", ":=", "->", "::"],
            correctAnswer: ":=",
            explanation: "The := operator declares and initializes a variable in one step.",
            difficulty: 1
          },
          {
            id: "go-3-q2",
            type: "true-false",
            question: "Go automatically converts int to float64 when needed.",
            correctAnswer: false,
            explanation: "Go requires explicit type conversion. You must use float64(i) to convert int to float64.",
            difficulty: 1
          },
          {
            id: "go-3-q3",
            type: "mcq",
            question: "What is the zero value of a string in Go?",
            options: ["null", "nil", "\"\" (empty string)", "undefined"],
            correctAnswer: "\"\" (empty string)",
            explanation: "Go assigns zero values: 0 for numbers, \"\" for strings, false for bools.",
            difficulty: 1
          }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Short Declaration", value: "name := \"value\"" },
        { label: "Var Declaration", value: "var name string = \"value\"" },
        { label: "Constant", value: "const Pi = 3.14" },
        { label: "Type Conversion", value: "float64(intValue)" },
        { label: "Zero Values", value: "int=0, string=\"\", bool=false" }
      ]
    },
    {
      id: "go-4",
      number: 4,
      title: "Operators and Expressions",
      subtitle: "Working with arithmetic, logical, and bitwise operators",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 40,
      xpReward: 50,
      prerequisites: ["Variables and Data Types"],
      learningObjectives: ["Use arithmetic operators", "Apply logical and comparison operators", "Understand bitwise operations"],
      partLabel: "Part 1: Go Foundations",
      sections: [
        {
          id: "go-4-1",
          title: "Arithmetic Operators",
          whyItMatters: "Arithmetic operators are fundamental to all computational tasks.",
          content: `**Basic Arithmetic:**
\`\`\`go
a := 10\nb := 3\n\nsum := a + b        // 13\ndiff := a - b       // 7\nproduct := a * b    // 30\nquotient := a / b   // 3 (integer division)\nremainder := a % b  // 1\n\`\`\`

**Integer Division:**
Go performs integer division when both operands are integers:
\`\`\`go
result := 10 / 3  // = 3, NOT 3.333\n\n// For floating point division:\nfloatResult := float64(10) / float64(3)  // = 3.333...\n\`\`\`

**Increment/Decrement:**
Go ONLY has postfix ++ and -- (no prefix):
\`\`\`go
count := 0\ncount++  // count is now 1\ncount--  // count is now 0\n\n// This will NOT compile:\n// ++count  // Error\n\`\`\``,
          codeExamples: [
            {
              id: "go-4-ex1",
              title: "Arithmetic Operations",
              description: "Basic math in Go",
              code: { go: 'package main\n\nimport "fmt"\n\nfunc main() {\n\ta := 15\n\tb := 4\n\n\tfmt.Println("Sum:", a+b)\n\tfmt.Println("Difference:", a-b)\n\tfmt.Println("Product:", a*b)\n\tfmt.Println("Quotient:", a/b)\n\tfmt.Println("Remainder:", a%b)\n\n\t// Floating point\n\tx := 15.0\n\ty := 4.0\n\tfmt.Println("Float division:", x/y)\n}' },
              explanation: "Go's arithmetic operators work similarly to other C-family languages."
            }
          ]
        },
        {
          id: "go-4-2",
          title: "Comparison and Logical Operators",
          whyItMatters: "Comparison and logical operators control program flow and decision-making.",
          content: `**Comparison Operators:**
\`\`\`go
a := 10\nb := 20\n\na == b   // false (equal)\na != b   // true  (not equal)\na > b    // false (greater than)\na < b    // true  (less than)\na >= b   // false (greater or equal)\na <= b   // true  (less or equal)\n\`\`\`

**Logical Operators:**
\`\`\`go
isAdult := true\nhasTicket := false\n\n// AND\nisAdult && hasTicket   // false\n\n// OR\nisAdult || hasTicket   // true\n\n// NOT\n!isAdult               // false\n\`\`\`

**Short-Circuit Evaluation:**
Go uses short-circuit evaluation:
\`\`\`go
// If first condition is false, second is NOT evaluated\nif false && expensiveFunction() {\n    // This won't run\n}\n\n// If first condition is true, second is NOT evaluated\nif true || expensiveFunction() {\n    // This will run\n}\n\`\`\``,
          callouts: [
            {
              type: "tip",
              title: "Short-Circuit Safety",
              content: "Use short-circuit evaluation to prevent nil pointer errors: if obj != nil && obj.Field > 0"
            }
          ]
        },
        {
          id: "go-4-3",
          title: "Bitwise Operators",
          whyItMatters: "Bitwise operators are essential for low-level programming and performance optimization.",
          content: `**Bitwise Operators:**
\`\`\`go
a := 60  // 0011 1100\nb := 13  // 0000 1101\n\na & b   // 0000 1100 = 12 (AND)\na | b   // 0011 1101 = 61 (OR)\na ^ b   // 0011 0001 = 49 (XOR)\na &^ b  // 0011 0000 = 48 (AND NOT)\n\n// Bit shifting\nx := 1\nx << 3  // 0000 1000 = 8 (left shift)\nx >> 1  // 0000 0000 = 0 (right shift)\n\`\`\`

**Practical Use - Flags:**
\`\`\`go
const (\n    Read  = 1 << 0  // 001\n    Write = 1 << 1  // 010\n    Exec  = 1 << 2  // 100\n)\n\npermissions := Read | Write  // 011\n\nif permissions&Read != 0 {\n    fmt.Println("Read access granted")\n}\n\`\`\``,
          codeExamples: [
            {
              id: "go-4-ex2",
              title: "Bitwise Flags",
              description: "Using bitwise operators for permission flags",
              code: { go: 'package main\n\nimport "fmt"\n\nconst (\n\tRead   = 1 << 0\n\tWrite  = 1 << 1\n\tDelete = 1 << 2\n)\n\nfunc main() {\n\tadmin := Read | Write | Delete\n\tviewer := Read\n\n\tfmt.Println("Admin permissions:", admin)\n\tfmt.Println("Viewer permissions:", viewer)\n\n\t// Check permissions\n\tif admin&Write != 0 {\n\t\tfmt.Println("Admin can write")\n\t}\n\tif viewer&Delete == 0 {\n\t\tfmt.Println("Viewer cannot delete")\n\t}\n}' },
              explanation: "Bitwise flags are efficient for storing multiple boolean states in a single integer."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "go-4-q1",
            type: "mcq",
            question: "What is the result of 10 / 3 in Go?",
            options: ["3.333", "3", "3.0", "Error"],
            correctAnswer: "3",
            explanation: "Integer division in Go truncates the decimal part. 10 / 3 = 3.",
            difficulty: 1
          },
          {
            id: "go-4-q2",
            type: "true-false",
            question: "Go supports prefix increment (++i).",
            correctAnswer: false,
            explanation: "Go only supports postfix increment (i++). Prefix increment (++i) will not compile.",
            difficulty: 1
          },
          {
            id: "go-4-q3",
            type: "mcq",
            question: "What does the ^ operator do in Go?",
            options: ["Exponentiation", "XOR (bitwise exclusive OR)", "NOT", "Power"],
            correctAnswer: "XOR (bitwise exclusive OR)",
            explanation: "In Go, ^ is the bitwise XOR operator, not exponentiation.",
            difficulty: 2
          }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Integer Division", value: "10 / 3 = 3" },
        { label: "Modulo", value: "10 % 3 = 1" },
        { label: "Short Declaration", value: "x := 10" },
        { label: "Bitwise AND", value: "a & b" },
        { label: "Bitwise OR", value: "a | b" }
      ]
    },
    {
      id: "go-5",
      number: 5,
      title: "Control Flow",
      subtitle: "Mastering if, switch, and for loops in Go",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 55,
      xpReward: 60,
      prerequisites: ["Variables and Data Types", "Operators and Expressions"],
      learningObjectives: ["Write if/else statements", "Use switch statements effectively", "Master for loops and control statements"],
      partLabel: "Part 1: Go Foundations",
      sections: [
        {
          id: "go-5-1",
          title: "If Statements",
          whyItMatters: "Conditional logic is the foundation of all program decision-making.",
          content: `**Basic If:**
\`\`\`go
age := 18\n\nif age >= 18 {\n    fmt.Println("Adult")\n} else {\n    fmt.Println("Minor")\n}\n\`\`\`

**If with Initialization:**
Go allows a short statement before the condition:
\`\`\`go
if score := getScore(); score >= 90 {\n    fmt.Println("A grade")\n} else if score >= 80 {\n    fmt.Println("B grade")\n} else {\n    fmt.Println("Keep trying")\n}\n// score is NOT accessible here\n\`\`\`

**Key Difference from Other Languages:**
- No parentheses around condition
- Braces are REQUIRED
- The short statement scope is limited to the if/else block`,
          codeExamples: [
            {
              id: "go-5-ex1",
              title: "If with Initialization",
              description: "Go's unique if statement syntax",
              code: { go: 'package main\n\nimport "fmt"\n\nfunc main() {\n\tif num := 42; num > 0 {\n\t\tfmt.Println(num, "is positive")\n\t} else if num < 0 {\n\t\tfmt.Println(num, "is negative")\n\t} else {\n\t\tfmt.Println(num, "is zero")\n\t}\n\t// num is not accessible here\n}' },
              explanation: "The variable declared in the if initialization statement is scoped to the if/else block."
            }
          ]
        },
        {
          id: "go-5-2",
          title: "Switch Statements",
          whyItMatters: "Switch statements provide clean multi-way branching in Go.",
          content: `**Basic Switch:**
\`\`\`go
day := 3\n\nswitch day {\ncase 1:\n    fmt.Println("Monday")\ncase 2:\n    fmt.Println("Tuesday")\ncase 3:\n    fmt.Println("Wednesday")\ndefault:\n    fmt.Println("Other day")\n}\n\`\`\`

**No Fallthrough by Default:**
Unlike C/Java, Go switch cases do NOT fall through:
\`\`\`go
switch n {\ncase 1, 2, 3:\n    fmt.Println("Small number")  // Matches 1, 2, or 3\ncase 4, 5:\n    fmt.Println("Medium number")\n}\n\`\`\`

**Expression-less Switch:**
\`\`\`go
score := 85\n\nswitch {\ncase score >= 90:\n    fmt.Println("A")\ncase score >= 80:\n    fmt.Println("B")\ncase score >= 70:\n    fmt.Println("C")\ndefault:\n    fmt.Println("F")\n}\n\`\`\`

**Fallthrough (when needed):**
\`\`\`go
switch n {\ncase 1:\n    fmt.Println("One")\n    fallthrough  // Explicitly fall through\ncase 2:\n    fmt.Println("Two")\n}\n\`\`\``,
          codeExamples: [
            {
              id: "go-5-ex2",
              title: "Switch Examples",
              description: "Different switch patterns in Go",
              code: { go: 'package main\n\nimport "fmt"\n\nfunc main() {\n\t// Multiple values in case\n\tswitch month := 6; month {\n\tcase 12, 1, 2:\n\t\tfmt.Println("Winter")\n\tcase 3, 4, 5:\n\t\tfmt.Println("Spring")\n\tcase 6, 7, 8:\n\t\tfmt.Println("Summer")\n\tcase 9, 10, 11:\n\t\tfmt.Println("Fall")\n\t}\n\n\t// Expression-less switch\n\ttemperature := 25\n\tswitch {\n\tcase temperature < 0:\n\t\tfmt.Println("Freezing")\n\tcase temperature < 20:\n\t\tfmt.Println("Cool")\n\tdefault:\n\t\tfmt.Println("Warm")\n\t}\n}' },
              explanation: "Go's switch is more powerful and safer than C-style switches."
            }
          ]
        },
        {
          id: "go-5-3",
          title: "For Loops",
          whyItMatters: "Go has only one looping construct - for - but it's incredibly versatile.",
          content: `**Classic For Loop:**
\`\`\`go
for i := 0; i < 5; i++ {\n    fmt.Println(i)  // 0, 1, 2, 3, 4\n}\n\`\`\`

**For as While Loop:**
\`\`\`go
count := 0\nfor count < 5 {\n    fmt.Println(count)\n    count++\n}\n\`\`\`

**Infinite Loop:**
\`\`\`go
for {\n    // Runs forever\n    // Use break to exit\n}\n\`\`\`

**Range (iterating over collections):**
\`\`\`go\nnumbers := []int{1, 2, 3, 4, 5}\n\nfor index, value := range numbers {\n    fmt.Printf("Index: %d, Value: %d\\n", index, value)\n}\n\n// Ignore index\nfor _, value := range numbers {\n    fmt.Println(value)\n}\n\n// Ignore value\nfor index := range numbers {\n    fmt.Println(index)\n}\n\`\`\`

**Break and Continue:**
\`\`\`go\nfor i := 0; i < 10; i++ {\n    if i == 3 {\n        continue  // Skip this iteration\n    }\n    if i == 7 {\n        break     // Exit the loop\n    }\n    fmt.Println(i)\n}\n\`\`\``,
          callouts: [
            {
              type: "pro-tip",
              title: "Use _ to Ignore Values",
              content: "In Go, you must use every declared variable. Use _ to ignore values you don't need, like the index in a range loop."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "go-5-q1",
            type: "mcq",
            question: "How many looping constructs does Go have?",
            options: ["Three (for, while, do-while)", "Two (for, while)", "One (for)", "Four (for, while, do-while, foreach)"],
            correctAnswer: "One (for)",
            explanation: "Go only has the 'for' keyword for all looping. It can act as a while loop or infinite loop.",
            difficulty: 1
          },
          {
            id: "go-5-q2",
            type: "true-false",
            question: "Go switch statements fall through by default like C/Java.",
            correctAnswer: false,
            explanation: "Go switch cases do NOT fall through by default. You must use 'fallthrough' explicitly.",
            difficulty: 1
          },
          {
            id: "go-5-q3",
            type: "mcq",
            question: "What symbol ignores unused variables in Go?",
            options: ["*", "_", "#", "~"],
            correctAnswer: "_",
            explanation: "The blank identifier _ discards values you don't need.",
            difficulty: 1
          }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "If with Init", value: "if x := 10; x > 5 { }" },
        { label: "Switch", value: "switch x { case 1: ... }" },
        { label: "For Loop", value: "for i := 0; i < 10; i++" },
        { label: "Range", value: "for i, v := range slice" },
        { label: "Infinite Loop", value: "for { }" }
      ]
    },
    {
      id: "go-6",
      number: 6,
      title: "Functions in Go",
      subtitle: "Understanding function syntax, multiple returns, and closures",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 55,
      xpReward: 60,
      prerequisites: ["Variables and Data Types", "Control Flow"],
      learningObjectives: ["Define and call functions", "Use multiple return values", "Work with closures and variadic functions"],
      partLabel: "Part 1: Go Foundations",
      sections: [
        {
          id: "go-6-1",
          title: "Function Basics",
          whyItMatters: "Functions are the primary building blocks of Go programs.",
          content: `**Function Definition:**
\`\`\`go
func greet(name string) string {\n    return "Hello, " + name\n}\n\`\`\`

**Multiple Parameters:**
\`\`\`go
func add(a int, b int) int {\n    return a + b\n}\n\n// Shorthand for same types:\nfunc add(a, b int) int {\n    return a + b\n}\n\`\`\`

**Multiple Return Values:**
Go functions can return multiple values:
\`\`\`go
func divide(a, b float64) (float64, error) {\n    if b == 0 {\n        return 0, fmt.Errorf("division by zero")\n    }\n    return a / b, nil\n}\n\nresult, err := divide(10, 2)\nif err != nil {\n    fmt.Println("Error:", err)\n}\n\`\`\`

**Named Return Values:**
\`\`\`go
func split(sum int) (x, y int) {\n    x = sum * 4 / 9\n    y = sum - x\n    return  // naked return\n}\n\`\`\``,
          codeExamples: [
            {
              id: "go-6-ex1",
              title: "Multiple Returns",
              description: "Go's unique multiple return feature",
              code: { go: 'package main\n\nimport (\n\t"fmt"\n\t"errors"\n)\n\nfunc divide(a, b float64) (float64, error) {\n\tif b == 0 {\n\t\treturn 0, errors.New("division by zero")\n\t}\n\treturn a / b, nil\n}\n\nfunc main() {\n\tresult, err := divide(10, 2)\n\tif err != nil {\n\t\tfmt.Println("Error:", err)\n\t\treturn\n\t}\n\tfmt.Println("Result:", result)\n\n\t_, err = divide(10, 0)\n\tif err != nil {\n\t\tfmt.Println("Caught:", err)\n\t}\n}' },
              explanation: "Multiple returns are idiomatic in Go, especially for error handling."
            }
          ]
        },
        {
          id: "go-6-2",
          title: "Variadic Functions and Closures",
          whyItMatters: "Variadic functions and closures enable flexible and powerful patterns.",
          content: `**Variadic Functions:**
Functions that accept any number of arguments:
\`\`\`go
func sum(numbers ...int) int {\n    total := 0\n    for _, n := range numbers {\n        total += n\n    }\n    return total\n}\n\nsum(1, 2, 3)        // = 6\nsum(1, 2, 3, 4, 5)  // = 15\n\n// Pass a slice:\nnums := []int{1, 2, 3}\nsum(nums...)\n\`\`\`

**Closures:**
Functions that capture variables from their outer scope:
\`\`\`go
func counter() func() int {\n    count := 0\n    return func() int {\n        count++\n        return count\n    }\n}\n\nc := counter()\nfmt.Println(c())  // 1\nfmt.Println(c())  // 2\nfmt.Println(c())  // 3\n\`\`\`

**Functions as Values:**
\`\`\`go
func apply(fn func(int, int) int, a, b int) int {\n    return fn(a, b)\n}\n\nresult := apply(func(x, y int) int { return x + y }, 3, 4)\n\`\`\``,
          callouts: [
            {
              type: "tip",
              title: "Closures Maintain State",
              content: "Closures capture variables by reference, not value. This allows them to maintain state between calls."
            }
          ]
        },
        {
          id: "go-6-3",
          title: "Defer Statement",
          whyItMatters: "Defer ensures cleanup code runs regardless of how a function exits.",
          content: `**Defer Basics:**
\`\`\`go
func readFile() {\n    file := openFile()\n    defer file.close()  // Runs when function returns\n    \n    // Do work with file\n    // file.close() is called automatically\n}\n\`\`\`

**Multiple Defers (LIFO Order):**
\`\`\`go
func main() {\n    defer fmt.Println("First")\n    defer fmt.Println("Second")\n    defer fmt.Println("Third")\n    \n    fmt.Println("Main execution")\n}\n// Output:\n// Main execution\n// Third\n// Second\n// First\n\`\`\`

**Defer with Arguments:**
Arguments are evaluated when defer is declared:
\`\`\`go\nfunc printValue() {\n    i := 0\n    defer fmt.Println(i)  // Prints 0, not 1\n    i++\n    return\n}\n\`\`\``,
          codeExamples: [
            {
              id: "go-6-ex2",
              title: "Defer in Action",
              description: "Using defer for cleanup",
              code: { go: 'package main\n\nimport "fmt"\n\nfunc main() {\n\tdefer fmt.Println("Cleanup 1")\n\tdefer fmt.Println("Cleanup 2")\n\n\tfmt.Println("Doing work...")\n\n\t// Defers run in LIFO order after this\n}' },
              explanation: "Defer is essential for resource cleanup and is used extensively in Go."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "go-6-q1",
            type: "mcq",
            question: "How many values can a Go function return?",
            options: ["One", "Two", "Multiple", "None"],
            correctAnswer: "Multiple",
            explanation: "Go functions can return multiple values, commonly used for (result, error) patterns.",
            difficulty: 1
          },
          {
            id: "go-6-q2",
            type: "true-false",
            question: "Deferred functions execute in FIFO order.",
            correctAnswer: false,
            explanation: "Deferred functions execute in LIFO (Last In, First Out) order.",
            difficulty: 1
          },
          {
            id: "go-6-q3",
            type: "mcq",
            question: "What does ... mean in a function parameter?",
            options: ["Pointer", "Variadic parameter", "Optional parameter", "Array"],
            correctAnswer: "Variadic parameter",
            explanation: "The ... syntax indicates a variadic parameter that accepts zero or more values.",
            difficulty: 1
          }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Function", value: "func name(params) returnType" },
        { label: "Multiple Returns", value: "func f() (int, error)" },
        { label: "Variadic", value: "func f(nums ...int)" },
        { label: "Defer", value: "defer cleanup()" },
        { label: "Closure", value: "func() { capture vars }" }
      ]
    },
    {
      id: "go-7",
      number: 7,
      title: "Arrays, Slices, and Maps",
      subtitle: "Working with Go's collection types",
      difficulty: "Beginner",
      estimatedMinutes: 60,
      xpReward: 70,
      prerequisites: ["Variables and Data Types", "Functions in Go"],
      learningObjectives: ["Create and use arrays", "Master slices (Go's primary collection)", "Work with maps for key-value storage"],
      partLabel: "Part 1: Go Foundations",
      sections: [
        {
          id: "go-7-1",
          title: "Arrays",
          whyItMatters: "Arrays are the foundation of Go's collection types, though slices are used more often.",
          content: `**Array Declaration:**
\`\`\`go\nvar numbers [5]int\nnumbers[0] = 1\nnumbers[1] = 2\n\n// With initialization:\nfruits := [3]string{"Apple", "Banana", "Cherry"}\n\n// Let compiler count:\ncolors := [...]string{"Red", "Green", "Blue"}  // [3]string\n\`\`\`

**Array Properties:**
- Fixed size - cannot grow or shrink
- Size is part of the type: [3]int != [5]int
- Passed by value (copied when passed to functions)
- Rarely used directly in Go - slices are preferred`,
          codeExamples: [
            {
              id: "go-7-ex1",
              title: "Array Basics",
              description: "Working with fixed-size arrays",
              code: { go: 'package main\n\nimport "fmt"\n\nfunc main() {\n\tvar arr [5]int\n\tarr[0] = 10\n\tarr[1] = 20\n\n\t// Initialize\n\tfruits := [3]string{"Apple", "Banana", "Cherry"}\n\n\t// Iterate\n\tfor i, fruit := range fruits {\n\t\tfmt.Printf("%d: %s\\n", i, fruit)\n\t}\n\n\t// Length\n\tfmt.Println("Length:", len(fruits))\n}' },
              explanation: "Arrays have fixed size and are rarely used directly - prefer slices."
            }
          ]
        },
        {
          id: "go-7-2",
          title: "Slices",
          whyItMatters: "Slices are Go's primary collection type - flexible, dynamic, and powerful.",
          content: `**Creating Slices:**
\`\`\`go\n// From array:\narr := [5]int{1, 2, 3, 4, 5}\nslice := arr[1:4]  // [2, 3, 4]\n\n// Literal:\nnumbers := []int{1, 2, 3, 4, 5}\n\n// Using make:\nnums := make([]int, 5)       // length 5, capacity 5\nnums2 := make([]int, 3, 10)  // length 3, capacity 10\n\n// Empty slice:\nvar empty []int  // nil slice\nempty2 := []int{}  // non-nil empty slice\n\`\`\`

**Length vs Capacity:**
\`\`\`go\ns := make([]int, 3, 10)\nfmt.Println(len(s))  // 3\nfmt.Println(cap(s))  // 10\n\`\`\`

**Append:**
\`\`\`go\ns := []int{1, 2, 3}\ns = append(s, 4)      // [1, 2, 3, 4]\ns = append(s, 5, 6)   // [1, 2, 3, 4, 5, 6]\ns = append(s, []int{7, 8}...)  // Spread operator\n\`\`\`

**Slice Operations:**
\`\`\`go\ns := []int{0, 1, 2, 3, 4, 5}\n\ns[1:4]   // [1, 2, 3]\ns[:3]    // [0, 1, 2]\ns[3:]    // [3, 4, 5]\ns[:]     // [0, 1, 2, 3, 4, 5]\n\`\`\``,
          callouts: [
            {
              type: "warning",
              title: "Slice References Underlying Array",
              content: "Slices share the underlying array. Modifying a slice affects the original array and other slices referencing it."
            }
          ]
        },
        {
          id: "go-7-3",
          title: "Maps",
          whyItMatters: "Maps provide efficient key-value lookups, essential for data processing.",
          content: `**Creating Maps:**
\`\`\`go\n// Literal:\nages := map[string]int{\n    "Alice": 25,\n    "Bob": 30,\n}\n\n// Using make:\nscores := make(map[string]int)\nscores["Alice"] = 95\nscores["Bob"] = 87\n\n// Empty map:\nvar empty map[string]int  // nil - cannot add to this\nempty2 := map[string]int{}  // usable empty map\n\`\`\`

**Accessing and Checking:**
\`\`\`go\nages := map[string]int{"Alice": 25, "Bob": 30}\n\n// Access\nage := ages["Alice"]  // 25\n\n// Check if key exists:\nage, exists := ages["Charlie"]\nif !exists {\n    fmt.Println("Charlie not found")\n}\n\n// Delete\ndelete(ages, "Bob")\n\`\`\`

**Iterating:**
\`\`\`go\nfor name, age := range ages {\n    fmt.Printf("%s is %d years old\\n", name, age)\n}\n\n// Order is NOT guaranteed\n\`\`\``,
          codeExamples: [
            {
              id: "go-7-ex2",
              title: "Map Operations",
              description: "Common map operations in Go",
              code: { go: 'package main\n\nimport "fmt"\n\nfunc main() {\n\t// Create map\n\tstudents := map[string]int{\n\t\t"Alice": 95,\n\t\t"Bob":   87,\n\t\t"Carol": 92,\n\t}\n\n\t// Add\n\tstudents["Dave"] = 88\n\n\t// Access with check\n\tif score, ok := students["Eve"]; ok {\n\t\tfmt.Println("Eve:", score)\n\t} else {\n\t\tfmt.Println("Eve not found")\n\t}\n\n\t// Delete\n\tdelete(students, "Bob")\n\n\t// Iterate\n\tfor name, score := range students {\n\t\tfmt.Printf("%s: %d\\n", name, score)\n\t}\n}' },
              explanation: "Maps are unordered and provide O(1) average lookup time."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "go-7-q1",
            type: "mcq",
            question: "What is the difference between arrays and slices in Go?",
            options: ["No difference", "Arrays are fixed-size, slices are dynamic", "Slices are fixed-size, arrays are dynamic", "Arrays are faster"],
            correctAnswer: "Arrays are fixed-size, slices are dynamic",
            explanation: "Arrays have a fixed size that's part of their type. Slices are dynamic views over arrays.",
            difficulty: 1
          },
          {
            id: "go-7-q2",
            type: "true-false",
            question: "Map iteration order in Go is guaranteed to be consistent.",
            correctAnswer: false,
            explanation: "Map iteration order is randomized in Go. Never rely on a specific order.",
            difficulty: 1
          },
          {
            id: "go-7-q3",
            type: "mcq",
            question: "How do you check if a key exists in a map?",
            options: ["map.has(key)", "value, ok := map[key]", "key in map", "map.contains(key)"],
            correctAnswer: "value, ok := map[key]",
            explanation: "The comma ok idiom returns the value and a boolean indicating if the key exists.",
            difficulty: 1
          }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Slice", value: "[]int{1, 2, 3}" },
        { label: "Append", value: "s = append(s, val)" },
        { label: "Map", value: "map[string]int{}" },
        { label: "Map Check", value: "val, ok := m[key]" },
        { label: "Delete", value: "delete(m, key)" }
      ]
    },
    {
      id: "go-8",
      number: 8,
      title: "Structs and Methods",
      subtitle: "Building custom types and attaching behavior",
      difficulty: "Beginner",
      estimatedMinutes: 60,
      xpReward: 70,
      prerequisites: ["Arrays, Slices, and Maps", "Functions in Go"],
      learningObjectives: ["Define and use structs", "Create methods with value and pointer receivers", "Understand composition over inheritance"],
      partLabel: "Part 1: Go Foundations",
      sections: [
        {
          id: "go-8-1",
          title: "Struct Basics",
          whyItMatters: "Structs are Go's primary way to model data and replace classes from OOP languages.",
          content: `**Defining Structs:**
\`\`\`go\ntype Person struct {\n    Name string\n    Age  int\n    Email string\n}\n\n// Creating instances:\np1 := Person{Name: "Alice", Age: 25, Email: "alice@example.com"}\np2 := Person{"Bob", 30, "bob@example.com"}  // Order matters\np3 := new(Person)  // Pointer to zero-valued struct\np4 := &Person{}    // Pointer literal\n\`\`\`

**Accessing Fields:**
\`\`\`go\np := Person{Name: "Alice", Age: 25}\nfmt.Println(p.Name)  // Alice\np.Age = 26           // Modify field\n\`\`\`

**Anonymous Structs:**
\`\`\`go\nconfig := struct {\n    Host string\n    Port int\n}{\n    Host: "localhost",\n    Port: 8080,\n}\n\`\`\`

**Struct Tags:**
\`\`\`go\ntype User struct {\n    ID    int    \`json:"id"\`\n    Name  string \`json:"name"\`\n    Email string \`json:"email"\`\n}\n\`\`\``,
          codeExamples: [
            {
              id: "go-8-ex1",
              title: "Struct Definition",
              description: "Creating and using structs",
              code: { go: 'package main\n\nimport "fmt"\n\ntype Rectangle struct {\n\tWidth  float64\n\tHeight float64\n}\n\nfunc main() {\n\trect := Rectangle{Width: 10, Height: 5}\n\tfmt.Printf("Area: %.2f\\n", rect.Width*rect.Height)\n\n\t// Anonymous struct\n\tpoint := struct {\n\t\tX, Y int\n\t}{X: 3, Y: 4}\n\tfmt.Printf("Point: (%d, %d)\\n", point.X, point.Y)\n}' },
              explanation: "Structs group related data together and are the foundation of Go's type system."
            }
          ]
        },
        {
          id: "go-8-2",
          title: "Methods",
          whyItMatters: "Methods attach behavior to structs, enabling object-oriented patterns without classes.",
          content: `**Method Definition:**
\`\`\`go\ntype Rectangle struct {\n    Width, Height float64\n}\n\n// Value receiver\nfunc (r Rectangle) Area() float64 {\n    return r.Width * r.Height\n}\n\n// Pointer receiver (can modify)\nfunc (r *Rectangle) Scale(factor float64) {\n    r.Width *= factor\n    r.Height *= factor\n}\n\`\`\`

**Value vs Pointer Receivers:**
- Value receiver: works on a copy, cannot modify original
- Pointer receiver: works on original, can modify
- Use pointer receiver when you need to modify or for large structs

\`\`\`go\nrect := Rectangle{Width: 10, Height: 5}\nfmt.Println(rect.Area())  // 50\n\nrect.Scale(2)\nfmt.Println(rect.Area())  // 200\n\`\`\`

**Methods on Any Type:**
You can add methods to any type you define:
\`\`\`go\ntype MyInt int\n\nfunc (m MyInt) Double() int {\n    return int(m) * 2\n}\n\nn := MyInt(5)\nfmt.Println(n.Double())  // 10\n\`\`\``,
          callouts: [
            {
              type: "pro-tip",
              title: "Consistent Receiver Type",
              content: "Don't mix value and pointer receivers for the same type. Pick one and use it consistently."
            }
          ]
        },
        {
          id: "go-8-3",
          title: "Composition and Embedding",
          whyItMatters: "Go uses composition instead of inheritance, leading to more flexible designs.",
          content: `**Struct Embedding:**
\`\`\`go\ntype Address struct {\n    Street string\n    City   string\n}\n\ntype Person struct {\n    Name    string\n    Age     int\n    Address  // Embedded (anonymous field)\n}\n\np := Person{\n    Name: "Alice",\n    Age:  25,\n    Address: Address{\n        Street: "123 Main St",\n        City:   "NYC",\n    },\n}\n\n// Promoted fields:\nfmt.Println(p.City)  // Same as p.Address.City\n\`\`\`

**Composition Over Inheritance:**
Go doesn't have inheritance. Instead, compose behavior:
\`\`\`go\ntype Logger struct {\n    Prefix string\n}\n\nfunc (l Logger) Log(msg string) {\n    fmt.Printf("[%s] %s\\n", l.Prefix, msg)\n}\n\ntype Server struct {\n    Logger  // Embedded\n    Port    int\n}\n\ns := Server{Logger: Logger{Prefix: "SERVER"}, Port: 8080}\ns.Log("Starting...")  // [SERVER] Starting...\n\`\`\``,
          codeExamples: [
            {
              id: "go-8-ex2",
              title: "Composition Example",
              description: "Building complex types through composition",
              code: { go: 'package main\n\nimport "fmt"\n\ntype Engine struct {\n\tHorsepower int\n}\n\nfunc (e Engine) Start() string {\n\treturn "Engine started"\n}\n\ntype Car struct {\n\tModel string\n\tEngine  // Embedded\n}\n\nfunc main() {\n\tcar := Car{\n\t\tModel:  "Tesla",\n\t\tEngine: Engine{Horsepower: 400},\n\t}\n\n\tfmt.Println(car.Model)\n\tfmt.Println(car.Start())\n\tfmt.Println("HP:", car.Horsepower)\n}' },
              explanation: "Composition allows flexible code reuse without the complexity of inheritance."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "go-8-q1",
            type: "mcq",
            question: "Does Go support class inheritance?",
            options: ["Yes", "No", "Only single inheritance", "Only multiple inheritance"],
            correctAnswer: "No",
            explanation: "Go does not have inheritance. It uses composition and embedding instead.",
            difficulty: 1
          },
          {
            id: "go-8-q2",
            type: "true-false",
            question: "A pointer receiver can modify the original struct.",
            correctAnswer: true,
            explanation: "Pointer receivers work on the original struct, allowing modifications.",
            difficulty: 1
          },
          {
            id: "go-8-q3",
            type: "mcq",
            question: "What are struct tags used for?",
            options: ["Comments", "Metadata for serialization/deserialization", "Method definitions", "Inheritance"],
            correctAnswer: "Metadata for serialization/deserialization",
            explanation: "Struct tags provide metadata used by packages like encoding/json.",
            difficulty: 1
          }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Struct", value: "type T struct { Field Type }" },
        { label: "Method", value: "func (t T) Method()" },
        { label: "Pointer Receiver", value: "func (t *T) Modify()" },
        { label: "Embedding", value: "type T struct { Other }" },
        { label: "Struct Tag", value: '\`json:"name"\`' }
      ]
    },
    {
      id: "go-9",
      number: 9,
      title: "Pointers in Go",
      subtitle: "Understanding memory addresses and pointer operations",
      difficulty: "Beginner",
      estimatedMinutes: 50,
      xpReward: 60,
      prerequisites: ["Structs and Methods"],
      learningObjectives: ["Understand pointer syntax and usage", "Use pointers for efficient data passing", "Know when to use pointers vs values"],
      partLabel: "Part 1: Go Foundations",
      sections: [
        {
          id: "go-9-1",
          title: "Pointer Basics",
          whyItMatters: "Pointers are essential for understanding how Go manages memory and passes data.",
          content: `**What is a Pointer?**
A pointer holds the memory address of a value.

\`\`\`go\nx := 42\np := &x      // & gets the address of x\nfmt.Println(p)   // 0xc000016080 (memory address)\nfmt.Println(*p)  // 42 (* dereferences - gets the value)\n\n*p = 100         // Changes x through the pointer\nfmt.Println(x)   // 100\n\`\`\`

**Pointer Types:**
\`\`\`go\nvar p *int        // Pointer to int\nvar name *string  // Pointer to string\n\n// Creating pointers:\na := 42\np1 := &a          // Address of existing variable\np2 := new(int)    // new() allocates and returns pointer\n*p2 = 100\n\`\`\`

**Zero Value:**
The zero value of a pointer is nil:
\`\`\`go\nvar p *int  // nil\nif p == nil {\n    fmt.Println("Pointer is nil")\n}\n\`\`\``,
          codeExamples: [
            {
              id: "go-9-ex1",
              title: "Pointer Operations",
              description: "Basic pointer usage",
              code: { go: 'package main\n\nimport "fmt"\n\nfunc main() {\n\tvalue := 42\n\tfmt.Println("Value:", value)\n\n\t// Get address\n\tptr := &value\n\tfmt.Println("Address:", ptr)\n\tfmt.Println("Dereferenced:", *ptr)\n\n\t// Modify through pointer\n\t*ptr = 100\n\tfmt.Println("New value:", value)\n\n\t// New pointer\n\tp := new(int)\n\t*p = 200\n\tfmt.Println("New pointer value:", *p)\n}' },
              explanation: "Pointers allow you to pass references to data rather than copying it."
            }
          ]
        },
        {
          id: "go-9-2",
          title: "Pointers with Functions",
          whyItMatters: "Pointers enable functions to modify caller's variables and avoid expensive copies.",
          content: `**Pass by Value (Default):**
\`\`\`go\nfunc double(x int) {\n    x *= 2  // Only modifies the copy\n}\n\nn := 5\ndouble(n)\nfmt.Println(n)  // Still 5\n\`\`\`

**Pass by Pointer:**
\`\`\`go\nfunc double(x *int) {\n    *x *= 2  // Modifies the original\n}\n\nn := 5\ndouble(&n)\nfmt.Println(n)  // Now 10\n\`\`\`

**Returning Pointers:**
\`\`\`go\nfunc createPerson(name string) *Person {\n    return &Person{Name: name}\n}\n\n// Go allows returning pointer to local variable\n// (unlike C, this is safe - Go's garbage collector handles it)\n\`\`\`

**When to Use Pointers:**
- When you need to modify the original value
- For large structs (avoid copying)
- When nil is a meaningful value
- For method receivers that modify state`,
          callouts: [
            {
              type: "warning",
              title: "Nil Pointer Dereference",
              content: "Dereferencing a nil pointer causes a runtime panic. Always check for nil before dereferencing."
            }
          ]
        },
        {
          id: "go-9-3",
          title: "Pointers with Structs",
          whyItMatters: "Understanding pointer vs value semantics with structs is crucial for Go programming.",
          content: `**Struct Pointers:**
\`\`\`go\ntype Person struct {\n    Name string\n    Age  int\n}\n\np := &Person{Name: "Alice", Age: 25}\n\n// Go automatically dereferences:\nfmt.Println(p.Name)  // Same as (*p).Name\np.Age = 26           // Same as (*p).Age = 26\n\`\`\`

**Pointer Receivers:**
\`\`\`go\nfunc (p *Person) Birthday() {\n    p.Age++  // Modifies original\n}\n\nfunc (p Person) Greeting() string {\n    return "Hi, I'm " + p.Name  // Works on copy\n}\n\`\`\`

**New vs &:**
\`\`\`go\np1 := &Person{}      // Pointer to zero-valued struct\np2 := new(Person)    // Same as above\n\np3 := &Person{\n    Name: "Bob",\n    Age: 30,\n}\n\`\`\``,
          codeExamples: [
            {
              id: "go-9-ex2",
              title: "Pointer Receivers",
              description: "Using pointer receivers to modify structs",
              code: { go: 'package main\n\nimport "fmt"\n\ntype Counter struct {\n\tCount int\n}\n\nfunc (c *Counter) Increment() {\n\tc.Count++\n}\n\nfunc (c Counter) Value() int {\n\treturn c.Count\n}\n\nfunc main() {\n\tcounter := Counter{}\n\tcounter.Increment()\n\tcounter.Increment()\n\tcounter.Increment()\n\tfmt.Println("Count:", counter.Value())\n}' },
              explanation: "Pointer receivers are essential for methods that need to modify the struct's state."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "go-9-q1",
            type: "mcq",
            question: "What does the & operator do in Go?",
            options: ["Bitwise AND", "Gets the address of a variable", "Logical AND", "Creates a pointer"],
            correctAnswer: "Gets the address of a variable",
            explanation: "The & operator returns the memory address of a variable.",
            difficulty: 1
          },
          {
            id: "go-9-q2",
            type: "true-false",
            question: "Go's garbage collector handles pointers to local variables returned from functions.",
            correctAnswer: true,
            explanation: "Unlike C, Go's garbage collector ensures returned pointers remain valid.",
            difficulty: 1
          },
          {
            id: "go-9-q3",
            type: "mcq",
            question: "What is the zero value of a pointer?",
            options: ["0", "empty", "nil", "undefined"],
            correctAnswer: "nil",
            explanation: "The zero value of any pointer type in Go is nil.",
            difficulty: 1
          }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Address Of", value: "&variable" },
        { label: "Dereference", value: "*pointer" },
        { label: "New Pointer", value: "new(Type)" },
        { label: "Nil Check", value: "if p == nil" },
        { label: "Auto Dereference", value: "p.Field (not (*p).Field)" }
      ]
    },
    {
      id: "go-10",
      number: 10,
      title: "Packages and Modules",
      subtitle: "Organizing code and managing dependencies",
      difficulty: "Beginner",
      estimatedMinutes: 55,
      xpReward: 70,
      prerequisites: ["Functions in Go", "Structs and Methods"],
      learningObjectives: ["Create and import packages", "Understand exported vs unexported identifiers", "Manage dependencies with Go modules"],
      partLabel: "Part 1: Go Foundations",
      sections: [
        {
          id: "go-10-1",
          title: "Creating Packages",
          whyItMatters: "Packages are Go's unit of code organization and reuse.",
          content: `**Package Structure:**
\`\`\`
myproject/
├── go.mod
├── main.go
└── pkg/
    ├── math/
    │   └── math.go
    └── utils/
        └── utils.go
\`\`\`

**Creating a Package:**
\`\`\`go\n// pkg/math/math.go\npackage math\n\n// Add is exported (uppercase)\nfunc Add(a, b int) int {\n    return a + b\n}\n\n// subtract is NOT exported (lowercase)\nfunc subtract(a, b int) int {\n    return a - b\n}\n\`\`\`

**Importing Packages:**
\`\`\`go\n// main.go\npackage main\n\nimport (\n    "fmt"\n    "myproject/pkg/math"\n)\n\nfunc main() {\n    result := math.Add(3, 4)  // Exported - accessible\n    // math.subtract(3, 4)    // Not exported - compile error\n    fmt.Println(result)\n}\n\`\`\`

**Export Rules:**
- Uppercase first letter = exported (public)
- Lowercase first letter = unexported (private)
- Applies to: functions, types, variables, constants, struct fields`,
          codeExamples: [
            {
              id: "go-10-ex1",
              title: "Package Creation",
              description: "Creating and using a custom package",
              code: { go: 'package main\n\nimport "fmt"\n\n// In a real project, this would be in a separate file\n// package helpers\n\nfunc Greet(name string) string {\n\treturn "Hello, " + name\n}\n\nfunc main() {\n\tfmt.Println(Greet("World"))\n}' },
              explanation: "Packages organize code and control visibility through naming conventions."
            }
          ]
        },
        {
          id: "go-10-2",
          title: "Go Modules",
          whyItMatters: "Go modules are the standard for dependency management in modern Go.",
          content: `**Initializing a Module:**
\`\`\`bash\ngo mod init github.com/username/projectname\n\`\`\`

**go.mod File:**
\`\`\`go\nmodule github.com/username/myproject\n\ngo 1.21\n\nrequire (\n    github.com/gin-gonic/gin v1.9.1\n    github.com/lib/pq v1.10.9\n)\n\`\`\`

**Managing Dependencies:**
\`\`\`bash\ngo get github.com/gin-gonic/gin      # Add dependency\ngo get github.com/gin-gonic/gin@v1.9.1  # Specific version\ngo mod tidy                              # Clean up dependencies\ngo mod verify                            # Verify checksums\n\`\`\`

**go.sum File:**
Contains cryptographic hashes of dependencies for security verification.

**Vendor Directory:**
\`\`\`bash\ngo mod vendor    # Copy dependencies to vendor/\ngo build -mod=vendor  # Build using vendored deps\n\`\`\``,
          callouts: [
            {
              type: "tip",
              title: "Always Run go mod tidy",
              content: "After adding or removing imports, run 'go mod tidy' to update go.mod and go.sum automatically."
            }
          ]
        },
        {
          id: "go-10-3",
          title: "Standard Library Overview",
          whyItMatters: "Go's standard library is extensive and covers most common programming needs.",
          content: `**Essential Packages:**
\`\`\`go\nimport (\n    "fmt"          // Format I/O\n    "os"           // OS functions\n    "strings"      // String manipulation\n    "strconv"      // String conversion\n    "time"         // Time and date\n    "math"         // Math functions\n    "sort"         // Sorting\n    "encoding/json" // JSON handling\n    "net/http"     // HTTP client/server\n    "io"           // I/O primitives\n    "log"          // Logging\n    "errors"       // Error handling\n    "sync"         // Synchronization\n    "context"      // Context management\n)\n\`\`\`

**Useful Functions:**
\`\`\`go\n// String manipulation\nstrings.ToUpper("hello")     // "HELLO"\nstrings.Contains("hello", "ll")  // true\nstrings.Split("a,b,c", ",")  // ["a", "b", "c"]\n\n// Conversion\nstrconv.Itoa(42)             // "42"\nstrconv.Atoi("42")           // 42, nil\n\n// Time\nnow := time.Now()\nfmt.Println(now.Format("2006-01-02"))\n\`\`\``,
          codeExamples: [
            {
              id: "go-10-ex2",
              title: "Standard Library Usage",
              description: "Common standard library operations",
              code: { go: 'package main\n\nimport (\n\t"fmt"\n\t"strings"\n\t"strconv"\n\t"time"\n)\n\nfunc main() {\n\t// Strings\n\tmsg := "hello, world"\n\tfmt.Println(strings.ToUpper(msg))\n\tfmt.Println(strings.Contains(msg, "world"))\n\n\t// Conversion\n\tnum, _ := strconv.Atoi("123")\n\tfmt.Println(num * 2)\n\n\t// Time\n\tnow := time.Now()\n\tfmt.Println(now.Format("2006-01-02 15:04:05"))\n}' },
              explanation: "The standard library covers most common needs without external dependencies."
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            id: "go-10-q1",
            type: "mcq",
            question: "How does Go determine if an identifier is exported?",
            options: ["Using the 'public' keyword", "Uppercase first letter", "Using the 'export' keyword", "Adding _ prefix"],
            correctAnswer: "Uppercase first letter",
            explanation: "In Go, identifiers starting with an uppercase letter are exported (public).",
            difficulty: 1
          },
          {
            id: "go-10-q2",
            type: "true-false",
            question: "The go.sum file contains dependency source code.",
            correctAnswer: false,
            explanation: "go.sum contains cryptographic hashes for verifying dependency integrity, not source code.",
            difficulty: 1
          },
          {
            id: "go-10-q3",
            type: "mcq",
            question: "Which command cleans up unused dependencies?",
            options: ["go clean", "go mod tidy", "go mod clean", "go remove"],
            correctAnswer: "go mod tidy",
            explanation: "'go mod tidy' adds missing and removes unused modules.",
            difficulty: 1
          }
        ],
        passingScore: 70
      },
      cheatSheet: [
        { label: "Init Module", value: "go mod init name" },
        { label: "Add Dependency", value: "go get package" },
        { label: "Clean Up", value: "go mod tidy" },
        { label: "Exported", value: "Starts with uppercase" },
        { label: "Unexported", value: "Starts with lowercase" }
      ]
    },
    {
      id: "go-11", number: 11, title: "Interfaces in Go", subtitle: "Defining behavior through contracts", difficulty: "Beginner", estimatedMinutes: 55, xpReward: 70, prerequisites: ["Structs and Methods"], learningObjectives: ["Define and implement interfaces", "Understand implicit interface satisfaction", "Use interface composition"], partLabel: "Part 2: Intermediate Go",
      sections: [
        { id: "go-11-1", title: "Interface Basics", whyItMatters: "Interfaces enable polymorphism and decoupled code in Go.", content: `**Defining Interfaces:**
\`\`\`go\ntype Speaker interface {\n    Speak() string\n}\n\ntype Dog struct{ Name string }\ntype Cat struct{ Name string }\n\nfunc (d Dog) Speak() string { return d.Name + " says Woof!" }\nfunc (c Cat) Speak() string { return c.Name + " says Meow!" }\n\nfunc MakeItSpeak(s Speaker) {\n    fmt.Println(s.Speak())\n}\n\nfunc main() {\n    dog := Dog{Name: "Buddy"}\n    cat := Cat{Name: "Whiskers"}\n    MakeItSpeak(dog)\n    MakeItSpeak(cat)\n}\n\`\`\`

**Implicit Implementation:**
Go interfaces are satisfied implicitly. No \`implements\` keyword needed.

**Empty Interface (interface{}):**
Accepts any type. In Go 1.18+, use \`any\` instead.`, codeExamples: [{ id: "go-11-ex1", title: "Interface Example", description: "Creating and using interfaces", code: { go: 'package main\n\nimport "fmt"\n\ntype Shape interface {\n\tArea() float64\n}\n\ntype Circle struct{ Radius float64 }\ntype Rectangle struct{ Width, Height float64 }\n\nfunc (c Circle) Area() float64 { return 3.14 * c.Radius * c.Radius }\nfunc (r Rectangle) Area() float64 { return r.Width * r.Height }\n\nfunc printArea(s Shape) {\n\tfmt.Printf("Area: %.2f\\n", s.Area())\n}\n\nfunc main() {\n\tprintArea(Circle{Radius: 5})\n\tprintArea(Rectangle{Width: 4, Height: 6})\n}' }, explanation: "Interfaces enable polymorphic behavior in Go." }], callouts: [{ type: "tip", title: "Accept Interfaces, Return Structs", content: "A common Go idiom: functions should accept interfaces but return concrete types." }] },
        { id: "go-11-2", title: "Interface Composition", whyItMatters: "Composing interfaces creates more specific contracts.", content: `**Embedding Interfaces:**
\`\`\`go\ntype Reader interface { Read(p []byte) (n int, err error) }\ntype Writer interface { Write(p []byte) (n int, err error) }\n\n// Composed interface\ntype ReadWriter interface {\n    Reader\n    Writer\n}\n\`\`\`` }
      ],
      quiz: { questions: [{ id: "go-11-q1", type: "mcq", question: "How does a type implement an interface in Go?", options: ["Using implements keyword", "Implicitly by having required methods", "Using extends keyword", "By inheriting"], correctAnswer: "Implicitly by having required methods", explanation: "Go uses duck typing - if it has the methods, it implements the interface.", difficulty: 1 }, { id: "go-11-q2", type: "true-false", question: "The empty interface (interface{}) can hold any type.", correctAnswer: true, explanation: "interface{} (or 'any') accepts values of any type.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Interface", value: "type I interface { Method() }" }, { label: "Empty Interface", value: "interface{} or any" }, { label: "Type Assertion", value: "v, ok := i.(Type)" }]
    },
    {
      id: "go-12", number: 12, title: "Error Handling", subtitle: "Go's unique approach to errors", difficulty: "Beginner", estimatedMinutes: 50, xpReward: 60, prerequisites: ["Interfaces in Go"], learningObjectives: ["Create and return errors", "Handle errors idiomatically", "Use custom error types"], partLabel: "Part 2: Intermediate Go",
      sections: [
        { id: "go-12-1", title: "Error Basics", whyItMatters: "Error handling is fundamental to writing robust Go programs.", content: `**The error Type:**
\`\`\`go\nfunc divide(a, b float64) (float64, error) {\n    if b == 0 {\n        return 0, errors.New("division by zero")\n    }\n    return a / b, nil\n}\n\nresult, err := divide(10, 0)\nif err != nil {\n    log.Fatal(err)\n}\nfmt.Println(result)\n\`\`\`

**Custom Errors:**
\`\`\`go\ntype ValidationError struct {\n    Field   string\n    Message string\n}\n\nfunc (e *ValidationError) Error() string {\n    return fmt.Sprintf("%s: %s", e.Field, e.Message)\n}\n\nfunc validateAge(age int) error {\n    if age < 0 {\n        return &ValidationError{Field: "age", Message: "cannot be negative"}\n    }\n    return nil\n}\n\`\`\`

**errors.Is and errors.As:**
\`\`\`go\nif errors.Is(err, ErrNotFound) { ... }\n\nvar valErr *ValidationError\nif errors.As(err, &valErr) {\n    fmt.Println(valErr.Field)\n}\n\`\`\``, codeExamples: [{ id: "go-12-ex1", title: "Error Handling", description: "Idiomatic Go error handling", code: { go: 'package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nvar ErrNotFound = errors.New("not found")\n\nfunc findUser(id int) (string, error) {\n\tif id <= 0 {\n\t\treturn "", ErrNotFound\n\t}\n\treturn "Alice", nil\n}\n\nfunc main() {\n\tuser, err := findUser(1)\n\tif err != nil {\n\t\tfmt.Println("Error:", err)\n\t\treturn\n\t}\n\tfmt.Println("User:", user)\n}' }, explanation: "Errors are values in Go, returned as the last return value." }] }
      ],
      quiz: { questions: [{ id: "go-12-q1", type: "mcq", question: "Where should errors be returned in Go functions?", options: ["First return value", "Last return value", "As a panic", "In a global variable"], correctAnswer: "Last return value", explanation: "Go convention: errors are always the last return value.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Create Error", value: 'errors.New("message")' }, { label: "Custom Error", value: "Implement Error() string" }, { label: "Check Error", value: "errors.Is(err, target)" }]
    },
    {
      id: "go-13", number: 13, title: "Defer, Panic, Recover", subtitle: "Managing exceptional conditions", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 60, prerequisites: ["Error Handling"], learningObjectives: ["Use defer for cleanup", "Understand when to use panic", "Recover from panics"], partLabel: "Part 2: Intermediate Go",
      sections: [
        { id: "go-13-1", title: "Defer Deep Dive", whyItMatters: "Defer ensures cleanup code always runs.", content: `**Defer Rules:**
- Arguments evaluated at defer time
- Executes in LIFO order
- Runs even after panic
- Common uses: close files, unlock mutex, cleanup

\`\`\`go\nfunc process() {\n    defer fmt.Println("Cleanup")\n    // Work here\n}\n\`\`\`` },
        { id: "go-13-2", title: "Panic and Recover", whyItMatters: "Panic/recover handle truly exceptional situations.", content: `**Panic:**
\`\`\`go\nfunc mustDivide(a, b float64) float64 {\n    if b == 0 {\n        panic("division by zero")\n    }\n    return a / b\n}\n\`\`\`

**Recover:**
\`\`\`go\nfunc safeDivide(a, b float64) (result float64) {\n    defer func() {\n        if r := recover(); r != nil {\n            result = 0\n            fmt.Println("Recovered from:", r)\n        }\n    }()\n    return mustDivide(a, b)\n}\n\`\`\``, callouts: [{ type: "warning", title: "Don't Use Panic for Errors", content: "Use error returns for normal error conditions. Panic only for truly unrecoverable situations." }] }
      ],
      quiz: { questions: [{ id: "go-13-q1", type: "mcq", question: "In what order do deferred functions execute?", options: ["FIFO", "LIFO", "Random", "Alphabetical"], correctAnswer: "LIFO", explanation: "Deferred functions execute Last In, First Out.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Defer", value: "defer cleanup()" }, { label: "Panic", value: "panic(\"error\")" }, { label: "Recover", value: "recover() in defer" }]
    },
    {
      id: "go-14", number: 14, title: "File Handling", subtitle: "Reading and writing files", difficulty: "Beginner", estimatedMinutes: 50, xpReward: 60, prerequisites: ["Error Handling"], learningObjectives: ["Read and write files", "Use bufio for efficient I/O", "Handle file paths cross-platform"], partLabel: "Part 2: Intermediate Go",
      sections: [
        { id: "go-14-1", title: "File Operations", whyItMatters: "File I/O is essential for data persistence and processing.", content: `**Reading Files:**
\`\`\`go\ndata, err := os.ReadFile("file.txt")\nif err != nil {\n    log.Fatal(err)\n}\nfmt.Println(string(data))\n\`\`\`

**Writing Files:**
\`\`\`go\nerr := os.WriteFile("output.txt", []byte("Hello"), 0644)\nif err != nil {\n    log.Fatal(err)\n}\n\`\`\`

**Using os.File:**
\`\`\`go\nfile, err := os.Open("file.txt")\nif err != nil {\n    log.Fatal(err)\n}\ndefer file.Close()\n\nscanner := bufio.NewScanner(file)\nfor scanner.Scan() {\n    fmt.Println(scanner.Text())\n}\n\`\`\``, codeExamples: [{ id: "go-14-ex1", title: "File Reading", description: "Reading file line by line", code: { go: 'package main\n\nimport (\n\t"bufio"\n\t"fmt"\n\t"os"\n\t"strings"\n)\n\nfunc main() {\n\tcontent := "Line 1\\nLine 2\\nLine 3"\n\tscanner := bufio.NewScanner(strings.NewReader(content))\n\tfor scanner.Scan() {\n\t\tfmt.Println(scanner.Text())\n\t}\n}' }, explanation: "bufio.Scanner provides efficient line-by-line reading." }] }
      ],
      quiz: { questions: [{ id: "go-14-q1", type: "mcq", question: "What function reads an entire file into memory?", options: ["os.Read", "os.ReadFile", "ioutil.ReadAll", "os.ReadFile"], correctAnswer: "os.ReadFile", explanation: "os.ReadFile reads the entire file and returns []byte.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Read File", value: "os.ReadFile(path)" }, { label: "Write File", value: "os.WriteFile(path, data, perm)" }, { label: "Open File", value: "os.Open(path)" }]
    },
    {
      id: "go-15", number: 15, title: "JSON Encoding/Decoding", subtitle: "Working with JSON data", difficulty: "Beginner", estimatedMinutes: 50, xpReward: 60, prerequisites: ["Structs and Methods"], learningObjectives: ["Marshal Go structs to JSON", "Unmarshal JSON to Go structs", "Handle custom JSON formats"], partLabel: "Part 2: Intermediate Go",
      sections: [
        { id: "go-15-1", title: "JSON Basics", whyItMatters: "JSON is the standard data format for APIs and configuration.", content: `**Marshaling (Go → JSON):**
\`\`\`go\ntype User struct {\n    Name  string \`json:"name"\`\n    Age   int    \`json:"age"\`\n    Email string \`json:"email,omitempty"\`\n}\n\nuser := User{Name: "Alice", Age: 25}\njsonData, err := json.Marshal(user)\n// {"name":"Alice","age":25}\n\`\`\`

**Unmarshaling (JSON → Go):**
\`\`\`go\nvar user User\nerr := json.Unmarshal([]byte(jsonStr), &user)\n\`\`\``, codeExamples: [{ id: "go-15-ex1", title: "JSON Operations", description: "Encoding and decoding JSON", code: { go: 'package main\n\nimport (\n\t"encoding/json"\n\t"fmt"\n)\n\ntype Person struct {\n\tName string \`json:"name"\`\n\tAge  int    \`json:"age"\`\n}\n\nfunc main() {\n\tp := Person{Name: "Bob", Age: 30}\n\tdata, _ := json.Marshal(p)\n\tfmt.Println(string(data))\n\n\tvar p2 Person\n\tjson.Unmarshal(data, &p2)\n\tfmt.Println(p2.Name)\n}' }, explanation: "encoding/json handles serialization between Go and JSON." }] }
      ],
      quiz: { questions: [{ id: "go-15-q1", type: "mcq", question: "What function converts a Go struct to JSON?", options: ["json.Encode", "json.Marshal", "json.Convert", "json.ToString"], correctAnswer: "json.Marshal", explanation: "json.Marshal converts Go values to JSON bytes.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Marshal", value: "json.Marshal(v)" }, { label: "Unmarshal", value: "json.Unmarshal(data, &v)" }, { label: "Pretty Print", value: "json.MarshalIndent(v, \"\", \"  \")" }]
    },
    {
      id: "go-16", number: 16, title: "Time Package", subtitle: "Working with dates, times, and durations", difficulty: "Beginner", estimatedMinutes: 45, xpReward: 60, prerequisites: [], learningObjectives: ["Parse and format times", "Calculate durations", "Use timers and tickers"], partLabel: "Part 2: Intermediate Go",
      sections: [
        { id: "go-16-1", title: "Time Operations", whyItMatters: "Time handling is crucial for scheduling, logging, and data processing.", content: `**Current Time:**
\`\`\`go\nnow := time.Now()\nfmt.Println(now)\nfmt.Println(now.Format("2006-01-02 15:04:05"))\n\`\`\`

**Parsing:**
\`\`\`go\nt, _ := time.Parse("2006-01-02", "2024-01-15")\n\`\`\`

**Duration:**
\`\`\`go\nduration := 2 * time.Hour + 30 * time.Minute\nfmt.Println(duration.Minutes())\n\`\`\`

**Timers:**
\`\`\`go\ntimer := time.NewTimer(5 * time.Second)\n<-timer.C  // Blocks for 5 seconds\n\`\`\`` }
      ],
      quiz: { questions: [{ id: "go-16-q1", type: "mcq", question: "What is Go's reference date for formatting?", options: ["01/01/2000", "01/02 03:04:05PM '06 -0700", "1970-01-01", "2006-01-02"], correctAnswer: "01/02 03:04:05PM '06 -0700", explanation: "Go uses Mon Jan 2 15:04:05 MST 2006 as the reference date.", difficulty: 2 }], passingScore: 70 },
      cheatSheet: [{ label: "Now", value: "time.Now()" }, { label: "Format", value: 't.Format("2006-01-02")' }, { label: "Parse", value: 'time.Parse(layout, value)' }, { label: "Sleep", value: "time.Sleep(duration)" }]
    },
    {
      id: "go-17", number: 17, title: "Strings Package", subtitle: "Advanced string manipulation", difficulty: "Beginner", estimatedMinutes: 40, xpReward: 50, prerequisites: [], learningObjectives: ["Use strings package functions", "Build strings efficiently", "Work with string builders"], partLabel: "Part 2: Intermediate Go",
      sections: [
        { id: "go-17-1", title: "String Functions", whyItMatters: "Efficient string handling is critical for performance.", content: `**Common Functions:**
\`\`\`go\nstrings.Contains("hello", "ll")     // true\nstrings.HasPrefix("hello", "he")    // true\nstrings.ToLower("HELLO")            // "hello"\nstrings.Replace("hello", "l", "L", -1)  // "heLLo"\nstrings.Split("a,b,c", ",")         // ["a","b","c"]\nstrings.Join([]string{"a","b"}, "-") // "a-b"\nstrings.TrimSpace("  hello  ")      // "hello"\n\`\`\`

**StringBuilder:**
\`\`\`go\nvar sb strings.Builder\nsb.WriteString("Hello")\nsb.WriteString(", ")\nsb.WriteString("World!")\nresult := sb.String()\n\`\`\`` }
      ],
      quiz: { questions: [{ id: "go-17-q1", type: "mcq", question: "Which is most efficient for building large strings?", options: ["+ operator", "fmt.Sprintf", "strings.Builder", "concat()"], correctAnswer: "strings.Builder", explanation: "strings.Builder avoids creating intermediate string copies.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Contains", value: "strings.Contains(s, substr)" }, { label: "Split", value: "strings.Split(s, sep)" }, { label: "Builder", value: "var sb strings.Builder" }]
    },
    {
      id: "go-18", number: 18, title: "Generics in Go", subtitle: "Type parameters for reusable code", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: ["Interfaces in Go"], learningObjectives: ["Define generic functions", "Use type constraints", "Create generic data structures"], partLabel: "Part 2: Intermediate Go",
      sections: [
        { id: "go-18-1", title: "Generic Functions", whyItMatters: "Generics eliminate code duplication while maintaining type safety.", content: `**Generic Function:**
\`\`\`go\nfunc Min[T comparable](a, b T) T {\n    if a < b {\n        return a\n    }\n    return b\n}\n\nMin(3, 5)        // int\nMin(3.14, 2.71)  // float64\n\`\`\`

**Type Constraints:**
\`\`\`go\nimport "cmp"\n\nfunc Sort[T cmp.Ordered](s []T) {\n    // Sort any ordered type\n}\n\`\`\`

**Generic Types:**
\`\`\`go\ntype Stack[T any] struct {\n    items []T\n}\n\nfunc (s *Stack[T]) Push(item T) {\n    s.items = append(s.items, item)\n}\n\nfunc (s *Stack[T]) Pop() (T, bool) {\n    if len(s.items) == 0 {\n        var zero T\n        return zero, false\n    }\n    item := s.items[len(s.items)-1]\n    s.items = s.items[:len(s.items)-1]\n    return item, true\n}\n\`\`\``, codeExamples: [{ id: "go-18-ex1", title: "Generic Stack", description: "A type-safe generic stack", code: { go: 'package main\n\nimport "fmt"\n\ntype Stack[T any] struct {\n\titems []T\n}\n\nfunc (s *Stack[T]) Push(item T) {\n\ts.items = append(s.items, item)\n}\n\nfunc (s *Stack[T]) Pop() (T, bool) {\n\tif len(s.items) == 0 {\n\t\tvar zero T\n\t\treturn zero, false\n\t}\n\titem := s.items[len(s.items)-1]\n\ts.items = s.items[:len(s.items)-1]\n\treturn item, true\n}\n\nfunc main() {\n\tvar s Stack[int]\n\ts.Push(1)\n\ts.Push(2)\n\tval, _ := s.Pop()\n\tfmt.Println(val)\n}' }, explanation: "Generics enable type-safe reusable data structures." }] }
      ],
      quiz: { questions: [{ id: "go-18-q1", type: "mcq", question: "When were generics added to Go?", options: ["1.0", "1.10", "1.18", "1.21"], correctAnswer: "1.18", explanation: "Generics were introduced in Go 1.18 (2022).", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Type Parameter", value: "[T any]" }, { label: "Constraint", value: "[T cmp.Ordered]" }, { label: "Generic Type", value: "type Stack[T any] struct" }]
    },
    {
      id: "go-19", number: 19, title: "Reflection", subtitle: "Inspecting types at runtime", difficulty: "Advanced", estimatedMinutes: 50, xpReward: 80, prerequisites: ["Interfaces in Go"], learningObjectives: ["Use reflect package", "Inspect types and values", "Understand reflection limitations"], partLabel: "Part 2: Intermediate Go",
      sections: [
        { id: "go-19-1", title: "Reflection Basics", whyItMatters: "Reflection powers frameworks like JSON encoding and ORM libraries.", content: `**Basic Reflection:**
\`\`\`go\nimport "reflect"\n\nx := 42\nt := reflect.TypeOf(x)\nv := reflect.ValueOf(x)\n\nfmt.Println(t.Kind())  // int\nfmt.Println(v.Int())   // 42\n\`\`\`

**Inspecting Structs:**
\`\`\`go\ntype User struct {\n    Name string \`json:"name"\`\n}\n\nt := reflect.TypeOf(User{})\nfor i := 0; i < t.NumField(); i++ {\n    field := t.Field(i)\n    fmt.Println(field.Name, field.Tag.Get("json"))\n}\n\`\`\``, callouts: [{ type: "warning", title: "Use Reflection Sparingly", content: "Reflection is slow and bypasses compile-time checks. Use only when necessary." }] }
      ],
      quiz: { questions: [{ id: "go-19-q1", type: "mcq", question: "What package provides reflection in Go?", options: ["inspect", "reflect", "runtime", "meta"], correctAnswer: "reflect", explanation: "The reflect package provides runtime reflection capabilities.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Type Of", value: "reflect.TypeOf(v)" }, { label: "Value Of", value: "reflect.ValueOf(v)" }, { label: "Kind", value: "t.Kind()" }]
    },
    {
      id: "go-20", number: 20, title: "Testing in Go", subtitle: "Writing unit tests and benchmarks", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: ["Functions in Go"], learningObjectives: ["Write table-driven tests", "Use test helpers", "Run and analyze test coverage"], partLabel: "Part 2: Intermediate Go",
      sections: [
        { id: "go-20-1", title: "Writing Tests", whyItMatters: "Testing ensures code correctness and prevents regressions.", content: `**Test File:**
\`\`\`go\n// main_test.go\npackage main\n\nimport "testing"\n\nfunc TestAdd(t *testing.T) {\n    result := add(2, 3)\n    if result != 5 {\n        t.Errorf("add(2,3) = %d; want 5", result)\n    }\n}\n\`\`\`

**Table-Driven Tests:**
\`\`\`go\nfunc TestAdd(t *testing.T) {\n    tests := []struct{\n        a, b, want int\n    }{\n        {1, 2, 3},\n        {0, 0, 0},\n        {-1, 1, 0},\n    }\n    for _, tt := range tests {\n        t.Run(fmt.Sprintf("%d+%d", tt.a, tt.b), func(t *testing.T) {\n            if got := add(tt.a, tt.b); got != tt.want {\n                t.Errorf("got %d, want %d", got, tt.want)\n            }\n        })\n    }\n}\n\`\`\`

**Running Tests:**
\`\`\`bash\ngo test              # Run tests\ngo test -v           # Verbose\ngo test -cover       # Coverage\ngo test ./...        # All packages\n\`\`\``, codeExamples: [{ id: "go-20-ex1", title: "Table-Driven Test", description: "Idiomatic Go testing pattern", code: { go: 'package main\n\nimport "testing"\n\nfunc add(a, b int) int { return a + b }\n\nfunc TestAdd(t *testing.T) {\n\ttests := []struct{ a, b, want int }{\n\t\t{1, 2, 3},\n\t\t{0, 0, 0},\n\t\t{-1, 1, 0},\n\t}\n\tfor _, tt := range tests {\n\t\tif got := add(tt.a, tt.b); got != tt.want {\n\t\t\tt.Errorf("add(%d,%d) = %d, want %d", tt.a, tt.b, got, tt.want)\n\t\t}\n\t}\n}' }, explanation: "Table-driven tests are the idiomatic Go testing pattern." }] }
      ],
      quiz: { questions: [{ id: "go-20-q1", type: "mcq", question: "What naming convention do test files follow?", options: ["*_test.go", "test_*.go", "*_spec.go", "test.go"], correctAnswer: "*_test.go", explanation: "Test files must end with _test.go.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Test File", value: "*_test.go" }, { label: "Test Function", value: "func TestXxx(t *testing.T)" }, { label: "Run Tests", value: "go test" }, { label: "Coverage", value: "go test -cover" }]
    },
    {
      id: "go-21", number: 21, title: "Benchmarking", subtitle: "Measuring code performance", difficulty: "Intermediate", estimatedMinutes: 45, xpReward: 60, prerequisites: ["Testing in Go"], learningObjectives: ["Write benchmarks", "Compare implementations", "Use profiling tools"], partLabel: "Part 2: Intermediate Go",
      sections: [
        { id: "go-21-1", title: "Writing Benchmarks", whyItMatters: "Benchmarks help identify performance bottlenecks.", content: `**Benchmark Function:**
\`\`\`go\nfunc BenchmarkFib(b *testing.B) {\n    for n := 0; n < b.N; n++ {\n        fib(10)\n    }\n}\n\`\`\`

**Running:**
\`\`\`bash\ngo test -bench=. -benchmem\n\`\`\`

**Comparing:**
Use sub-benchmarks to compare implementations:
\`\`\`go\nfunc BenchmarkSort(b *testing.B) {\n    b.Run("BubbleSort", func(b *testing.B) {\n        for i := 0; i < b.N; i++ {\n            bubbleSort(data)\n        }\n    })\n    b.Run("QuickSort", func(b *testing.B) {\n        for i := 0; i < b.N; i++ {\n            quickSort(data)\n        }\n    })\n}\n\`\`\`` }
      ],
      quiz: { questions: [{ id: "go-21-q1", type: "mcq", question: "What does b.N represent in benchmarks?", options: ["Fixed number", "Auto-calculated iterations", "Time limit", "Memory limit"], correctAnswer: "Auto-calculated iterations", explanation: "b.N is adjusted by the testing framework to get stable results.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Benchmark", value: "func BenchmarkXxx(b *testing.B)" }, { label: "Run", value: "go test -bench=." }, { label: "Memory", value: "go test -benchmem" }]
    },
    {
      id: "go-22", number: 22, title: "Logging", subtitle: "Structured logging for production", difficulty: "Intermediate", estimatedMinutes: 40, xpReward: 50, prerequisites: [], learningObjectives: ["Use log package", "Implement structured logging", "Configure log levels"], partLabel: "Part 2: Intermediate Go",
      sections: [
        { id: "go-22-1", title: "Logging Basics", whyItMatters: "Proper logging is essential for debugging production issues.", content: `**Standard Log:**
\`\`\`go\nimport "log"\n\nlog.Println("Starting server")\nlog.Printf("Port: %d", 8080)\nlog.Fatal("Critical error")  // Prints and exits\nlog.Panic("Panic error")   // Prints and panics\n\`\`\`

**Custom Logger:**
\`\`\`go\nlogger := log.New(os.Stderr, "[APP] ", log.Ldate|log.Ltime|log.Lshortfile)\nlogger.Println("Custom log message")\n\`\`\`` }
      ],
      quiz: { questions: [{ id: "go-22-q1", type: "mcq", question: "What does log.Fatal() do?", options: ["Logs and continues", "Logs and exits program", "Logs and panics", "Only logs"], correctAnswer: "Logs and exits program", explanation: "log.Fatal() prints the message and calls os.Exit(1).", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Print", value: "log.Println(msg)" }, { label: "Printf", value: "log.Printf(fmt, args)" }, { label: "Fatal", value: "log.Fatal(msg)" }, { label: "Custom", value: "log.New(writer, prefix, flags)" }]
    },
    {
      id: "go-23", number: 23, title: "Goroutines", subtitle: "Lightweight concurrent execution", difficulty: "Intermediate", estimatedMinutes: 60, xpReward: 80, prerequisites: ["Functions in Go"], learningObjectives: ["Launch goroutines", "Understand goroutine scheduling", "Avoid common goroutine pitfalls"], partLabel: "Part 3: Concurrency",
      sections: [
        { id: "go-23-1", title: "Goroutine Basics", whyItMatters: "Goroutines are Go's superpower - lightweight concurrent execution.", content: `**Launching Goroutines:**
\`\`\`go\nfunc say(msg string) {\n    for i := 0; i < 3; i++ {\n        fmt.Println(msg)\n        time.Sleep(100 * time.Millisecond)\n    }\n}\n\nfunc main() {\n    go say("Hello")  // Runs concurrently\n    go say("World")\n    time.Sleep(1 * time.Second)  // Wait for goroutines\n}\n\`\`\`

**Key Properties:**
- Start with ~2KB stack (vs 1MB for OS threads)
- Managed by Go runtime, not OS
- Thousands can run simultaneously
- Scheduled by Go's M:N scheduler`, codeExamples: [{ id: "go-23-ex1", title: "Concurrent Execution", description: "Running functions concurrently", code: { go: 'package main\n\nimport (\n\t"fmt"\n\t"time"\n)\n\nfunc worker(id int) {\n\tfor i := 0; i < 3; i++ {\n\t\tfmt.Printf("Worker %d: task %d\\n", id, i)\n\t\ttime.Sleep(50 * time.Millisecond)\n\t}\n}\n\nfunc main() {\n\tfor i := 1; i <= 3; i++ {\n\t\tgo worker(i)\n\t}\n\ttime.Sleep(500 * time.Millisecond)\n\tfmt.Println("All workers done")\n}' }, explanation: "Goroutines make concurrent programming simple and efficient." }] }
      ],
      quiz: { questions: [{ id: "go-23-q1", type: "mcq", question: "How much memory does a new goroutine use?", options: ["1MB", "~2KB", "100KB", "8KB"], correctAnswer: "~2KB", explanation: "Goroutines start with approximately 2KB of stack space.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Launch", value: "go function()" }, { label: "Anonymous", value: "go func() { }()" }, { label: "Wait", value: "time.Sleep() or sync.WaitGroup" }, { label: "Stack Size", value: "~2KB initial" }]
    },
    {
      id: "go-24", number: 24, title: "Channels", subtitle: "Communication between goroutines", difficulty: "Intermediate", estimatedMinutes: 60, xpReward: 80, prerequisites: ["Goroutines"], learningObjectives: ["Create and use channels", "Understand blocking behavior", "Use buffered and unbuffered channels"], partLabel: "Part 3: Concurrency",
      sections: [
        { id: "go-24-1", title: "Channel Basics", whyItMatters: "Channels are the primary way goroutines communicate safely.", content: `**Creating Channels:**
\`\`\`go\nch := make(chan int)        // Unbuffered\nch := make(chan int, 10)    // Buffered (capacity 10)\n\`\`\`

**Sending and Receiving:**
\`\`\`go\nch <- value      // Send\nvalue := <-ch    // Receive\n<-ch             // Receive and discard\n\`\`\`

**Unbuffered Channels:**
Block until both sender and receiver are ready.
\`\`\`go\nfunc main() {\n    ch := make(chan string)\n    \n    go func() {\n        ch <- "Hello from goroutine"\n    }()\n    \n    msg := <-ch\n    fmt.Println(msg)\n}\n\`\`\`

**Closing Channels:**
\`\`\`go\nclose(ch)\n\nvalue, ok := <-ch  // ok is false if closed\nfor v := range ch {  // Range until closed\n    fmt.Println(v)\n}\n\`\`\``, codeExamples: [{ id: "go-24-ex1", title: "Channel Communication", description: "Sending data between goroutines", code: { go: 'package main\n\nimport "fmt"\n\nfunc main() {\n\tch := make(chan int)\n\n\tgo func() {\n\t\tfor i := 0; i < 5; i++ {\n\t\t\tch <- i\n\t\t}\n\t\tclose(ch)\n\t}()\n\n\tfor val := range ch {\n\t\tfmt.Println("Received:", val)\n\t}\n}' }, explanation: "Channels provide safe communication between goroutines." }] }
      ],
      quiz: { questions: [{ id: "go-24-q1", type: "mcq", question: "What happens when sending to an unbuffered channel with no receiver?", options: ["Value is lost", "Sender blocks", "Error occurs", "Value is queued"], correctAnswer: "Sender blocks", explanation: "Unbuffered channels block the sender until a receiver is ready.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Create", value: "make(chan Type)" }, { label: "Send", value: "ch <- value" }, { label: "Receive", value: "value := <-ch" }, { label: "Close", value: "close(ch)" }, { label: "Range", value: "for v := range ch" }]
    },
    {
      id: "go-25", number: 25, title: "Buffered Channels", subtitle: "Asynchronous communication patterns", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 70, prerequisites: ["Channels"], learningObjectives: ["Use buffered channels", "Understand capacity and blocking", "Implement producer-consumer patterns"], partLabel: "Part 3: Concurrency",
      sections: [
        { id: "go-25-1", title: "Buffered Channels", whyItMatters: "Buffered channels decouple senders and receivers for better throughput.", content: `**Buffered Channel:**
\`\`\`go\nch := make(chan int, 3)\n\nch <- 1  // Doesn't block (buffer has room)\nch <- 2\nch <- 3\n// ch <- 4  // Would block - buffer full\n\nfmt.Println(<-ch)  // 1\nfmt.Println(<-ch)  // 2\n\`\`\`

**Producer-Consumer:**
\`\`\`go\nfunc producer(ch chan<- int, n int) {\n    for i := 0; i < n; i++ {\n        ch <- i\n    }\n    close(ch)\n}\n\nfunc consumer(ch <-chan int) {\n    for v := range ch {\n        fmt.Println(v)\n    }\n}\n\nfunc main() {\n    ch := make(chan int, 10)\n    go producer(ch, 5)\n    consumer(ch)\n}\n\`\`\`` }
      ],
      quiz: { questions: [{ id: "go-25-q1", type: "mcq", question: "When does a buffered channel block the sender?", options: ["Never", "When buffer is full", "When buffer is empty", "Always"], correctAnswer: "When buffer is full", explanation: "Buffered channels block senders only when the buffer is at capacity.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Buffered", value: "make(chan T, capacity)" }, { label: "Send-only", value: "chan<- T" }, { label: "Receive-only", value: "<-chan T" }]
    },
    {
      id: "go-26", number: 26, title: "Select Statement", subtitle: "Multiplexing channel operations", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: ["Channels"], learningObjectives: ["Use select for multiple channels", "Implement timeouts", "Handle default cases"], partLabel: "Part 3: Concurrency",
      sections: [
        { id: "go-26-1", title: "Select Basics", whyItMatters: "Select enables handling multiple channel operations simultaneously.", content: `**Select Statement:**
\`\`\`go\nselect {\ncase msg1 := <-ch1:\n    fmt.Println("Received:", msg1)\ncase msg2 := <-ch2:\n    fmt.Println("Received:", msg2)\ncase ch3 <- "hello":\n    fmt.Println("Sent")\n}\n\`\`\`

**Timeout:**
\`\`\`go\nselect {\ncase result := <-ch:\n    fmt.Println(result)\ncase <-time.After(3 * time.Second):\n    fmt.Println("Timeout!")\n}\n\`\`\`

**Default (Non-blocking):**
\`\`\`go\nselect {\ncase msg := <-ch:\n    fmt.Println(msg)\ndefault:\n    fmt.Println("No message")\n}\n\`\`\``, codeExamples: [{ id: "go-26-ex1", title: "Select with Timeout", description: "Handling timeouts with select", code: { go: 'package main\n\nimport (\n\t"fmt"\n\t"time"\n)\n\nfunc main() {\n\tch := make(chan string)\n\n\tgo func() {\n\t\ttime.Sleep(2 * time.Second)\n\t\tch <- "Result"\n\t}()\n\n\tselect {\n\tcase result := <-ch:\n\t\tfmt.Println(result)\n\tcase <-time.After(1 * time.Second):\n\t\tfmt.Println("Timeout!")\n\t}\n}' }, explanation: "Select with timeout prevents indefinite blocking." }] }
      ],
      quiz: { questions: [{ id: "go-26-q1", type: "mcq", question: "What happens if multiple cases in select are ready?", options: ["First case wins", "Random case chosen", "All execute", "Error"], correctAnswer: "Random case chosen", explanation: "Select picks a ready case at random to prevent starvation.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Select", value: "select { case ... }" }, { label: "Timeout", value: "time.After(duration)" }, { label: "Non-blocking", value: "default: case" }]
    },
    {
      id: "go-27", number: 27, title: "Worker Pools", subtitle: "Managing concurrent task processing", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: ["Goroutines", "Channels"], learningObjectives: ["Implement worker pools", "Control concurrency levels", "Handle task distribution"], partLabel: "Part 3: Concurrency",
      sections: [
        { id: "go-27-1", title: "Worker Pool Pattern", whyItMatters: "Worker pools limit concurrency and manage resource usage.", content: `**Worker Pool:**
\`\`\`go\nfunc worker(id int, jobs <-chan int, results chan<- int) {\n    for j := range jobs {\n        results <- j * 2\n    }\n}\n\nfunc main() {\n    jobs := make(chan int, 100)\n    results := make(chan int, 100)\n\n    // Start 3 workers\n    for w := 1; w <= 3; w++ {\n        go worker(w, jobs, results)\n    }\n\n    // Send jobs\n    for j := 1; j <= 5; j++ {\n        jobs <- j\n    }\n    close(jobs)\n\n    // Collect results\n    for a := 1; a <= 5; a++ {\n        <-results\n    }\n}\n\`\`\``, codeExamples: [{ id: "go-27-ex1", title: "Worker Pool", description: "Processing jobs with multiple workers", code: { go: 'package main\n\nimport "fmt"\n\nfunc worker(id int, jobs <-chan int, results chan<- int) {\n\tfor j := range jobs {\n\t\tfmt.Printf("Worker %d processing job %d\\n", id, j)\n\t\tresults <- j * 2\n\t}\n}\n\nfunc main() {\n\tjobs := make(chan int, 5)\n\tresults := make(chan int, 5)\n\n\tfor w := 1; w <= 3; w++ {\n\t\tgo worker(w, jobs, results)\n\t}\n\n\tfor j := 1; j <= 5; j++ {\n\t\tjobs <- j\n\t}\n\tclose(jobs)\n\n\tfor a := 1; a <= 5; a++ {\n\t\tfmt.Println("Result:", <-results)\n\t}\n}' }, explanation: "Worker pools control how many goroutines process tasks simultaneously." }] }
      ],
      quiz: { questions: [{ id: "go-27-q1", type: "mcq", question: "Why use worker pools instead of one goroutine per task?", options: ["Simpler code", "Resource control and efficiency", "Required by Go", "Faster execution"], correctAnswer: "Resource control and efficiency", explanation: "Worker pools limit resource usage and prevent overwhelming the system.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Jobs Channel", value: "make(chan Task, buffer)" }, { label: "Workers", value: "for w := 0; w < N; w++ { go worker() }" }, { label: "Close", value: "close(jobs) when done sending" }]
    },
    {
      id: "go-28", number: 28, title: "Mutexes and Synchronization", subtitle: "Protecting shared data", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: ["Goroutines"], learningObjectives: ["Use sync.Mutex", "Prevent race conditions", "Use RWMutex for read-heavy workloads"], partLabel: "Part 3: Concurrency",
      sections: [
        { id: "go-28-1", title: "Mutex Basics", whyItMatters: "Mutexes prevent data races when goroutines share state.", content: `**sync.Mutex:**
\`\`\`go\nvar mu sync.Mutex\nvar counter int\n\nfunc increment() {\n    mu.Lock()\n    defer mu.Unlock()\n    counter++\n}\n\`\`\`

**RWMutex:**
\`\`\`go\nvar mu sync.RWMutex\nvar data map[string]string\n\nfunc read(key string) string {\n    mu.RLock()\n    defer mu.RUnlock()\n    return data[key]\n}\n\nfunc write(key, value string) {\n    mu.Lock()\n    defer mu.Unlock()\n    data[key] = value\n}\n\`\`\``, callouts: [{ type: "warning", title: "Always Unlock", content: "Use defer mu.Unlock() immediately after Lock() to ensure unlocking even on panic." }] }
      ],
      quiz: { questions: [{ id: "go-28-q1", type: "mcq", question: "What does RWMutex allow that Mutex doesn't?", options: ["Faster locking", "Multiple concurrent readers", "No locking needed", "Automatic unlocking"], correctAnswer: "Multiple concurrent readers", explanation: "RWMutex allows multiple readers simultaneously but only one writer.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Mutex", value: "sync.Mutex" }, { label: "Lock", value: "mu.Lock()" }, { label: "Unlock", value: "defer mu.Unlock()" }, { label: "RWMutex", value: "sync.RWMutex" }]
    },
    {
      id: "go-29", number: 29, title: "WaitGroups", subtitle: "Waiting for goroutines to complete", difficulty: "Intermediate", estimatedMinutes: 45, xpReward: 60, prerequisites: ["Goroutines"], learningObjectives: ["Use sync.WaitGroup", "Coordinate goroutine completion", "Avoid common WaitGroup pitfalls"], partLabel: "Part 3: Concurrency",
      sections: [
        { id: "go-29-1", title: "WaitGroup Usage", whyItMatters: "WaitGroups provide a clean way to wait for multiple goroutines.", content: `**WaitGroup:**
\`\`\`go\nvar wg sync.WaitGroup\n\nfor i := 0; i < 5; i++ {\n    wg.Add(1)\n    go func(id int) {\n        defer wg.Done()\n        fmt.Println("Worker", id)\n    }(i)\n}\n\nwg.Wait()  // Blocks until all Done() calls\nfmt.Println("All workers complete")\n\`\`\``, codeExamples: [{ id: "go-29-ex1", title: "WaitGroup Example", description: "Waiting for multiple goroutines", code: { go: 'package main\n\nimport (\n\t"fmt"\n\t"sync"\n)\n\nfunc main() {\n\tvar wg sync.WaitGroup\n\n\tfor i := 1; i <= 3; i++ {\n\t\twg.Add(1)\n\t\tgo func(id int) {\n\t\t\tdefer wg.Done()\n\t\t\tfmt.Printf("Worker %d done\\n", id)\n\t\t}(i)\n\t}\n\n\twg.Wait()\n\tfmt.Println("All complete")\n}' }, explanation: "WaitGroups eliminate the need for arbitrary sleep times." }] }
      ],
      quiz: { questions: [{ id: "go-29-q1", type: "mcq", question: "What method signals a goroutine is done?", options: ["wg.Finish()", "wg.Done()", "wg.Complete()", "wg.End()"], correctAnswer: "wg.Done()", explanation: "wg.Done() decrements the WaitGroup counter.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Add", value: "wg.Add(n)" }, { label: "Done", value: "defer wg.Done()" }, { label: "Wait", value: "wg.Wait()" }]
    },
    {
      id: "go-30", number: 30, title: "Context Package", subtitle: "Managing request-scoped values and cancellation", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: ["Goroutines", "Channels"], learningObjectives: ["Use context for cancellation", "Pass request-scoped values", "Set timeouts with context"], partLabel: "Part 3: Concurrency",
      sections: [
        { id: "go-30-1", title: "Context Basics", whyItMatters: "Context is essential for managing goroutine lifecycles in production systems.", content: `**Creating Context:**
\`\`\`go\nctx := context.Background()  // Root context\nctx := context.TODO()        // When unsure which context\n\`\`\`

**Cancellation:**
\`\`\`go\nctx, cancel := context.WithCancel(context.Background())\ndefer cancel()  // Always call cancel\n\ngo func() {\n    select {\n    case <-ctx.Done():\n        fmt.Println("Cancelled")\n        return\n    case <-time.After(5 * time.Second):\n        fmt.Println("Work done")\n    }\n}()\n\n// Later:\ncancel()\n\`\`\`

**Timeout:**
\`\`\`go\nctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)\ndefer cancel()\n\nresp, err := http.GetWithContext(ctx, url)\n\`\`\``, codeExamples: [{ id: "go-30-ex1", title: "Context Timeout", description: "Cancelling work after timeout", code: { go: 'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n)\n\nfunc main() {\n\tctx, cancel := context.WithTimeout(context.Background(), 1*time.Second)\n\tdefer cancel()\n\n\tdone := make(chan bool)\n\tgo func() {\n\t\ttime.Sleep(2 * time.Second)\n\t\tdone <- true\n\t}()\n\n\tselect {\n\tcase <-done:\n\t\tfmt.Println("Completed")\n\tcase <-ctx.Done():\n\t\tfmt.Println("Timeout:", ctx.Err())\n\t}\n}' }, explanation: "Context timeouts prevent goroutines from running indefinitely." }] }
      ],
      quiz: { questions: [{ id: "go-30-q1", type: "mcq", question: "What should you always call after WithCancel or WithTimeout?", options: ["ctx.Close()", "cancel()", "ctx.Done()", "ctx.Release()"], correctAnswer: "cancel()", explanation: "Always call cancel() to release resources, typically with defer.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Background", value: "context.Background()" }, { label: "Cancel", value: "context.WithCancel(ctx)" }, { label: "Timeout", value: "context.WithTimeout(ctx, d)" }, { label: "Deadline", value: "context.WithDeadline(ctx, time)" }]
    },
    {
      id: "go-31", number: 31, title: "Race Conditions", subtitle: "Detecting and preventing data races", difficulty: "Advanced", estimatedMinutes: 50, xpReward: 80, prerequisites: ["Mutexes and Synchronization"], learningObjectives: ["Identify race conditions", "Use the race detector", "Write race-free code"], partLabel: "Part 3: Concurrency",
      sections: [
        { id: "go-31-1", title: "Race Detection", whyItMatters: "Race conditions cause intermittent bugs that are hard to reproduce.", content: `**Race Detector:**
\`\`\`bash\ngo run -race main.go\ngo test -race ./...\n\`\`\`

**Example Race:**
\`\`\`go\nvar counter int\n\n// RACE CONDITION:\ngo func() { counter++ }()\ngo func() { counter++ }()\n\n// FIXED:\nvar mu sync.Mutex\ngo func() {\n    mu.Lock()\n    counter++\n    mu.Unlock()\n}()\n\`\`\``, callouts: [{ type: "warning", title: "Always Test with -race", content: "Run your tests with -race flag in CI to catch data races early." }] }
      ],
      quiz: { questions: [{ id: "go-31-q1", type: "mcq", question: "What flag enables the race detector?", options: ["-detect", "-race", "-safe", "-check"], correctAnswer: "-race", explanation: "The -race flag enables Go's built-in race detector.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Detect", value: "go run -race" }, { label: "Test", value: "go test -race" }, { label: "Fix", value: "Use mutex or channels" }]
    },
    {
      id: "go-32", number: 32, title: "Concurrent Patterns", subtitle: "Common patterns for concurrent programming", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 80, prerequisites: ["Goroutines", "Channels", "Context Package"], learningObjectives: ["Implement fan-out/fan-in", "Use pipeline patterns", "Handle concurrent errors"], partLabel: "Part 3: Concurrency",
      sections: [
        { id: "go-32-1", title: "Fan-Out/Fan-In", whyItMatters: "These patterns enable efficient parallel processing.", content: `**Fan-Out:**
Multiple goroutines reading from same channel.
\`\`\`go\nfunc fanOut(in <-chan int, workers int) <-chan int {\n    out := make(chan int)\n    for i := 0; i < workers; i++ {\n        go func() {\n            for n := range in {\n                out <- process(n)\n            }\n        }()\n    }\n    return out\n}\n\`\`\`

**Pipeline:**
\`\`\`go\nfunc generator(nums ...int) <-chan int {\n    out := make(chan int)\n    go func() {\n        for _, n := range nums {\n            out <- n\n        }\n        close(out)\n    }()\n    return out\n}\n\nfunc square(in <-chan int) <-chan int {\n    out := make(chan int)\n    go func() {\n        for n := range in {\n            out <- n * n\n        }\n        close(out)\n    }()\n    return out\n}\n\`\`\`` }
      ],
      quiz: { questions: [{ id: "go-32-q1", type: "mcq", question: "What does fan-out mean in concurrent programming?", options: ["One worker, many tasks", "Many workers processing in parallel", "Sequential processing", "Error handling"], correctAnswer: "Many workers processing in parallel", explanation: "Fan-out distributes work across multiple goroutines.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Fan-Out", value: "Multiple readers from channel" }, { label: "Fan-In", value: "Multiple writers to channel" }, { label: "Pipeline", value: "Chain of stages via channels" }]
    },
    {
      id: "go-33", number: 33, title: "High Performance Concurrency", subtitle: "Optimizing concurrent code", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 80, prerequisites: ["Concurrent Patterns"], learningObjectives: ["Minimize lock contention", "Use atomic operations", "Profile concurrent code"], partLabel: "Part 3: Concurrency",
      sections: [
        { id: "go-33-1", title: "Atomic Operations", whyItMatters: "Atomic operations provide lock-free synchronization for simple values.", content: `**sync/atomic:**
\`\`\`go\nimport "sync/atomic"\n\nvar counter int64\n\n// Lock-free increment\natomic.AddInt64(&counter, 1)\n\n// Load value\nval := atomic.LoadInt64(&counter)\n\n// Store value\natomic.StoreInt64(&counter, 100)\n\n// Compare and swap\nif atomic.CompareAndSwapInt64(&counter, old, new) {\n    // Successfully swapped\n}\n\`\`\``, callouts: [{ type: "pro-tip", title: "Prefer Channels Over Atomics", content: "Use channels for complex synchronization. Use atomics only for simple counters and flags." }] }
      ],
      quiz: { questions: [{ id: "go-33-q1", type: "mcq", question: "When should you use atomic operations?", options: ["Always", "For simple value synchronization", "Instead of channels", "For complex data structures"], correctAnswer: "For simple value synchronization", explanation: "Atomics are best for simple counters and flags, not complex state.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Add", value: "atomic.AddInt64(&v, n)" }, { label: "Load", value: "atomic.LoadInt64(&v)" }, { label: "Store", value: "atomic.StoreInt64(&v, n)" }, { label: "CAS", value: "atomic.CompareAndSwapInt64" }]
    },
    {
      id: "go-34", number: 34, title: "Building Concurrent Systems", subtitle: "Designing production-ready concurrent applications", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 90, prerequisites: ["Concurrent Patterns", "High Performance Concurrency"], learningObjectives: ["Design concurrent architectures", "Handle graceful shutdown", "Implement circuit breakers"], partLabel: "Part 3: Concurrency",
      sections: [
        { id: "go-34-1", title: "Graceful Shutdown", whyItMatters: "Production systems must shut down cleanly without losing data.", content: `**Graceful Shutdown:**
\`\`\`go\nctx, cancel := signal.NotifyContext(context.Background(), os.Interrupt)\ndefer cancel()\n\n// Start workers\nfor i := 0; i < 10; i++ {\n    go worker(ctx)\n}\n\n// Wait for signal\n<-ctx.Done()\nfmt.Println("Shutting down...")\n\n// Give workers time to finish\ntime.Sleep(5 * time.Second)\n\`\`\``, codeExamples: [{ id: "go-34-ex1", title: "Graceful Shutdown", description: "Handling OS signals for clean shutdown", code: { go: 'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"os"\n\t"os/signal"\n\t"time"\n)\n\nfunc main() {\n\tctx, cancel := signal.NotifyContext(context.Background(), os.Interrupt)\n\tdefer cancel()\n\n\tgo func() {\n\t\tfor {\n\t\t\tselect {\n\t\t\tcase <-ctx.Done():\n\t\t\t\tfmt.Println("Stopping...")\n\t\t\t\treturn\n\t\t\tdefault:\n\t\t\t\tfmt.Println("Working...")\n\t\t\t\ttime.Sleep(1 * time.Second)\n\t\t\t}\n\t\t}\n\t}()\n\n\t<-ctx.Done()\n\tfmt.Println("Shutdown complete")\n}' }, explanation: "Graceful shutdown ensures cleanup before the program exits." }] }
      ],
      quiz: { questions: [{ id: "go-34-q1", type: "mcq", question: "What function listens for OS interrupt signals?", options: ["signal.Listen", "signal.NotifyContext", "os.Signal", "context.Interrupt"], correctAnswer: "signal.NotifyContext", explanation: "signal.NotifyContext creates a context that cancels on OS signals.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Signal", value: "signal.NotifyContext(ctx, os.Interrupt)" }, { label: "Wait", value: "<-ctx.Done()" }, { label: "Cleanup", value: "defer cancel()" }]
    },
    {
      id: "go-35", number: 35, title: "HTTP Servers in Go", subtitle: "Building web servers with net/http", difficulty: "Intermediate", estimatedMinutes: 60, xpReward: 80, prerequisites: ["Functions in Go", "Structs and Methods"], learningObjectives: ["Create HTTP servers", "Handle requests and responses", "Serve static files"], partLabel: "Part 4: Web Development",
      sections: [
        { id: "go-35-1", title: "HTTP Server Basics", whyItMatters: "Go's net/http package provides everything needed for production web servers.", content: `**Basic Server:**
\`\`\`go\npackage main\n\nimport (\n    "fmt"\n    "net/http"\n)\n\nfunc handler(w http.ResponseWriter, r *http.Request) {\n    fmt.Fprintf(w, "Hello, %s!", r.URL.Path[1:])\n}\n\nfunc main() {\n    http.HandleFunc("/", handler)\n    http.ListenAndServe(":8080", nil)\n}\n\`\`\`

**Response Writing:**
\`\`\`go\nfunc handler(w http.ResponseWriter, r *http.Request) {\n    w.Header().Set("Content-Type", "application/json")\n    w.WriteHeader(http.StatusOK)\n    json.NewEncoder(w).Encode(map[string]string{"status": "ok"})\n}\n\`\`\``, codeExamples: [{ id: "go-35-ex1", title: "HTTP Server", description: "Basic Go HTTP server", code: { go: 'package main\n\nimport (\n\t"fmt"\n\t"net/http"\n)\n\nfunc helloHandler(w http.ResponseWriter, r *http.Request) {\n\tfmt.Fprintf(w, "Hello, World!")\n}\n\nfunc main() {\n\thttp.HandleFunc("/", helloHandler)\n\tfmt.Println("Server starting on :8080")\n\thttp.ListenAndServe(":8080", nil)\n}' }, explanation: "Go's standard library includes a production-ready HTTP server." }] }
      ],
      quiz: { questions: [{ id: "go-35-q1", type: "mcq", question: "What interface handles HTTP responses?", options: ["http.Response", "http.ResponseWriter", "http.Writer", "http.Output"], correctAnswer: "http.ResponseWriter", explanation: "http.ResponseWriter is used to write HTTP responses.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Handler", value: "func(w http.ResponseWriter, r *http.Request)" }, { label: "Route", value: "http.HandleFunc(path, handler)" }, { label: "Start", value: "http.ListenAndServe(addr, nil)" }]
    },
    {
      id: "go-36", number: 36, title: "Routing", subtitle: "URL patterns and request routing", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 70, prerequisites: ["HTTP Servers in Go"], learningObjectives: ["Create route patterns", "Extract URL parameters", "Use third-party routers"], partLabel: "Part 4: Web Development",
      sections: [
        { id: "go-36-1", title: "Routing Patterns", whyItMatters: "Proper routing organizes your API endpoints cleanly.", content: `**Default Router (Go 1.22+):**
\`\`\`go\n// Method-based routing\nhttp.HandleFunc("GET /users", getUsers)\nhttp.HandleFunc("POST /users", createUser)\nhttp.HandleFunc("GET /users/{id}", getUser)\n\n// Extract path parameter\nfunc getUser(w http.ResponseWriter, r *http.Request) {\n    id := r.PathValue("id")\n    fmt.Fprintf(w, "User: %s", id)\n}\n\`\`\`

**Third-Party Routers:**
\`\`\`go\nimport "github.com/gorilla/mux"\n\nr := mux.NewRouter()\nr.HandleFunc("/users/{id}", getUser).Methods("GET")\n\`\`\`` }
      ],
      quiz: { questions: [{ id: "go-36-q1", type: "mcq", question: "How do you extract path parameters in Go 1.22+?", options: ["r.Param(id)", "r.PathValue(id)", "r.Query(id)", "r.GetParam(id)"], correctAnswer: "r.PathValue(id)", explanation: "Go 1.22+ added r.PathValue() for extracting path parameters.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Method Route", value: 'http.HandleFunc("GET /path", h)' }, { label: "Path Value", value: "r.PathValue(name)" }, { label: "Query", value: "r.URL.Query().Get(key)" }]
    },
    {
      id: "go-37", number: 37, title: "Middleware", subtitle: "Cross-cutting concerns for HTTP handlers", difficulty: "Intermediate", estimatedMinutes: 55, xpReward: 70, prerequisites: ["HTTP Servers in Go"], learningObjectives: ["Create middleware functions", "Chain middleware", "Implement logging and auth middleware"], partLabel: "Part 4: Web Development",
      sections: [
        { id: "go-37-1", title: "Middleware Pattern", whyItMatters: "Middleware enables reusable cross-cutting concerns like logging and authentication.", content: `**Middleware Function:**
\`\`\`go\nfunc loggingMiddleware(next http.Handler) http.Handler {\n    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n        start := time.Now()\n        next.ServeHTTP(w, r)\n        log.Printf("%s %s %v", r.Method, r.URL.Path, time.Since(start))\n    })\n}\n\n// Usage:\nmux := http.NewServeMux()\nmux.Handle("/", loggingMiddleware(myHandler))\n\`\`\`

**Chaining:**
\`\`\`go\nhandler = loggingMiddleware(authMiddleware(myHandler))\n\`\`\``, codeExamples: [{ id: "go-37-ex1", title: "Logging Middleware", description: "Adding request logging", code: { go: 'package main\n\nimport (\n\t"fmt"\n\t"log"\n\t"net/http"\n\t"time"\n)\n\nfunc loggingMiddleware(next http.Handler) http.Handler {\n\treturn http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n\t\tstart := time.Now()\n\t\tnext.ServeHTTP(w, r)\n\t\tlog.Printf("%s %s %v", r.Method, r.URL.Path, time.Since(start))\n\t})\n}\n\nfunc main() {\n\tmux := http.NewServeMux()\n\tmux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {\n\t\tfmt.Fprint(w, "Hello!")\n\t})\n\thttp.ListenAndServe(":8080", loggingMiddleware(mux))\n}' }, explanation: "Middleware wraps handlers to add functionality like logging." }] }
      ],
      quiz: { questions: [{ id: "go-37-q1", type: "mcq", question: "What does middleware wrap?", options: ["Database connections", "HTTP handlers", "Config files", "Routes"], correctAnswer: "HTTP handlers", explanation: "Middleware wraps HTTP handlers to add cross-cutting functionality.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Middleware", value: "func(http.Handler) http.Handler" }, { label: "Chain", value: "mw1(mw2(handler))" }, { label: "ServeHTTP", value: "next.ServeHTTP(w, r)" }]
    },
    {
      id: "go-38", number: 38, title: "REST APIs", subtitle: "Building RESTful services", difficulty: "Intermediate", estimatedMinutes: 60, xpReward: 80, prerequisites: ["HTTP Servers in Go", "JSON Encoding/Decoding"], learningObjectives: ["Design RESTful endpoints", "Implement CRUD operations", "Handle HTTP methods properly"], partLabel: "Part 4: Web Development",
      sections: [
        { id: "go-38-1", title: "REST Principles", whyItMatters: "REST is the standard architecture for web APIs.", content: `**REST Endpoints:**
\`\`\`
GET    /users          - List users\nPOST   /users          - Create user\nGET    /users/{id}     - Get user\nPUT    /users/{id}     - Update user\nDELETE /users/{id}     - Delete user\n\`\`\`

**Handler Implementation:**
\`\`\`go\nfunc userHandler(w http.ResponseWriter, r *http.Request) {\n    switch r.Method {\n    case "GET":\n        listUsers(w, r)\n    case "POST":\n        createUser(w, r)\n    case "PUT":\n        updateUser(w, r)\n    case "DELETE":\n        deleteUser(w, r)\n    default:\n        http.Error(w, "Method not allowed", 405)\n    }\n}\n\`\`\``, codeExamples: [{ id: "go-38-ex1", title: "REST API", description: "Simple REST API with CRUD", code: { go: 'package main\n\nimport (\n\t"encoding/json"\n\t"net/http"\n\t"sync"\n)\n\ntype User struct {\n\tID   int    `+"`"+`json:"id"`+"`"+`\n\tName string `+"`"+`json:"name"`+"`"+`\n}\n\nvar (\n\tusers []User\n\tmu    sync.Mutex\n\tnextID = 1\n)\n\nfunc getUsers(w http.ResponseWriter, r *http.Request) {\n\tmu.Lock()\n\tdefer mu.Unlock()\n\tjson.NewEncoder(w).Encode(users)\n}\n\nfunc createUser(w http.ResponseWriter, r *http.Request) {\n\tvar u User\n\tjson.NewDecoder(r.Body).Decode(&u)\n\tmu.Lock()\n\tu.ID = nextID\n\tnextID++\n\tusers = append(users, u)\n\tmu.Unlock()\n\tw.WriteHeader(http.StatusCreated)\n\tjson.NewEncoder(w).Encode(u)\n}\n\nfunc main() {\n\tmux := http.NewServeMux()\n\tmux.HandleFunc("GET /users", getUsers)\n\tmux.HandleFunc("POST /users", createUser)\n\thttp.ListenAndServe(":8080", mux)\n}' }, explanation: "REST APIs use HTTP methods to perform CRUD operations." }] }
      ],
      quiz: { questions: [{ id: "go-38-q1", type: "mcq", question: "Which HTTP method creates a resource?", options: ["GET", "POST", "PUT", "DELETE"], correctAnswer: "POST", explanation: "POST is used to create new resources in REST.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "GET", value: "Read resource" }, { label: "POST", value: "Create resource" }, { label: "PUT", value: "Update resource" }, { label: "DELETE", value: "Delete resource" }]
    },
    {
      id: "go-39", number: 39, title: "JSON APIs", subtitle: "Advanced JSON handling for APIs", difficulty: "Intermediate", estimatedMinutes: 50, xpReward: 70, prerequisites: ["REST APIs"], learningObjectives: ["Handle JSON requests", "Format JSON responses", "Validate JSON input"], partLabel: "Part 4: Web Development",
      sections: [
        { id: "go-39-1", title: "JSON API Patterns", whyItMatters: "Proper JSON handling is essential for API reliability.", content: `**JSON Request:**
\`\`\`go\nfunc handler(w http.ResponseWriter, r *http.Request) {\n    var input struct {\n        Name  string \`json:"name" validate:"required"\`\n        Email string \`json:"email" validate:"required,email"\`\n    }\n    \n    if err := json.NewDecoder(r.Body).Decode(&input); err != nil {\n        http.Error(w, "Invalid JSON", 400)\n        return\n    }\n    \n    // Process input...\n    w.Header().Set("Content-Type", "application/json")\n    json.NewEncoder(w).Encode(map[string]string{"status": "success"})\n}\n\`\`\`` }
      ],
      quiz: { questions: [{ id: "go-39-q1", type: "mcq", question: "What function decodes JSON from request body?", options: ["json.Decode", "json.NewDecoder(r.Body).Decode", "json.Parse", "json.Unmarshal"], correctAnswer: "json.NewDecoder(r.Body).Decode", explanation: "json.NewDecoder reads directly from the request body stream.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Decode", value: "json.NewDecoder(r.Body).Decode(&v)" }, { label: "Encode", value: "json.NewEncoder(w).Encode(v)" }, { label: "Content-Type", value: 'w.Header().Set("Content-Type", "application/json")' }]
    },
    {
      id: "go-40", number: 40, title: "Authentication", subtitle: "Securing your API endpoints", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 80, prerequisites: ["REST APIs", "Middleware"], learningObjectives: ["Implement basic auth", "Create token-based auth", "Protect endpoints"], partLabel: "Part 4: Web Development",
      sections: [
        { id: "go-40-1", title: "Auth Middleware", whyItMatters: "Authentication protects your API from unauthorized access.", content: `**Basic Auth:**
\`\`\`go\nfunc basicAuth(next http.Handler) http.Handler {\n    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n        user, pass, ok := r.BasicAuth()\n        if !ok || user != "admin" || pass != "secret" {\n            w.Header().Set("WWW-Authenticate", \`Basic realm="restricted"\`)\n            http.Error(w, "Unauthorized", 401)\n            return\n        }\n        next.ServeHTTP(w, r)\n    })\n}\n\`\`\`

**Token Auth:**
\`\`\`go\nfunc tokenAuth(next http.Handler) http.Handler {\n    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n        token := r.Header.Get("Authorization")\n        if !validateToken(token) {\n            http.Error(w, "Unauthorized", 401)\n            return\n        }\n        next.ServeHTTP(w, r)\n    })\n}\n\`\`\`` }
      ],
      quiz: { questions: [{ id: "go-40-q1", type: "mcq", question: "What HTTP status code indicates unauthorized?", options: ["400", "401", "403", "500"], correctAnswer: "401", explanation: "401 Unauthorized indicates authentication is required.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Basic Auth", value: "r.BasicAuth()" }, { label: "Token", value: 'r.Header.Get("Authorization")' }, { label: "401", value: "Unauthorized" }]
    },
    {
      id: "go-41", number: 41, title: "JWT Tokens", subtitle: "JSON Web Token authentication", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 80, prerequisites: ["Authentication"], learningObjectives: ["Generate JWT tokens", "Validate tokens", "Implement token refresh"], partLabel: "Part 4: Web Development",
      sections: [
        { id: "go-41-1", title: "JWT Implementation", whyItMatters: "JWT is the standard for stateless authentication.", content: `**Using golang-jwt:**
\`\`\`go\nimport "github.com/golang-jwt/jwt/v5"\n\n// Generate token\nfunc generateToken(userID int) (string, error) {\n    claims := jwt.MapClaims{\n        "user_id": userID,\n        "exp":     time.Now().Add(24 * time.Hour).Unix(),\n    }\n    token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)\n    return token.SignedString([]byte("secret-key"))\n}\n\n// Validate token\nfunc validateToken(tokenString string) (*jwt.MapClaims, error) {\n    token, err := jwt.Parse(tokenString, func(t *jwt.Token) (interface{}, error) {\n        return []byte("secret-key"), nil\n    })\n    if err != nil {\n        return nil, err\n    }\n    claims, _ := token.Claims.(jwt.MapClaims)\n    return &claims, nil\n}\n\`\`\`` }
      ],
      quiz: { questions: [{ id: "go-41-q1", type: "mcq", question: "What does JWT stand for?", options: ["Java Web Token", "JSON Web Token", "JavaScript Web Token", "Joint Web Token"], correctAnswer: "JSON Web Token", explanation: "JWT stands for JSON Web Token.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Create", value: "jwt.NewWithClaims(method, claims)" }, { label: "Sign", value: "token.SignedString(key)" }, { label: "Parse", value: "jwt.Parse(token, keyFunc)" }]
    },
    {
      id: "go-42", number: 42, title: "PostgreSQL Integration", subtitle: "Database operations with PostgreSQL", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 80, prerequisites: ["REST APIs"], learningObjectives: ["Connect to PostgreSQL", "Execute queries", "Use connection pooling"], partLabel: "Part 4: Web Development",
      sections: [
        { id: "go-42-1", title: "Database Connection", whyItMatters: "PostgreSQL is the most popular database for Go applications.", content: `**Using database/sql:**
\`\`\`go\nimport (\n    "database/sql"\n    _ "github.com/lib/pq"\n)\n\ndb, err := sql.Open("postgres", "postgresql://user:pass@localhost/dbname?sslmode=disable")\nif err != nil {\n    log.Fatal(err)\n}\ndefer db.Close()\n\n// Test connection\nerr = db.Ping()\n\`\`\`

**Queries:**
\`\`\`go\n// Query single row\nvar name string\nerr := db.QueryRow("SELECT name FROM users WHERE id = $1", id).Scan(&name)\n\n// Query multiple rows\nrows, err := db.Query("SELECT id, name FROM users")\ndefer rows.Close()\nfor rows.Next() {\n    var id int\n    var name string\n    rows.Scan(&id, &name)\n}\n\n// Insert\nresult, err := db.Exec("INSERT INTO users (name) VALUES ($1)", name)\n\`\`\`` }
      ],
      quiz: { questions: [{ id: "go-42-q1", type: "mcq", question: "What placeholder does PostgreSQL use in Go?", options: ["?", "$1", ":name", "%s"], correctAnswer: "$1", explanation: "PostgreSQL uses $1, $2, etc. for positional parameters.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Open", value: 'sql.Open("postgres", connStr)' }, { label: "Ping", value: "db.Ping()" }, { label: "Query Row", value: "db.QueryRow(query, args).Scan(&vars)" }]
    },
    {
      id: "go-43", number: 43, title: "ORM Basics", subtitle: "Object-Relational Mapping with GORM", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 70, prerequisites: ["PostgreSQL Integration"], learningObjectives: ["Use GORM for database operations", "Define models", "Perform CRUD with ORM"], partLabel: "Part 4: Web Development",
      sections: [
        { id: "go-43-1", title: "GORM Introduction", whyItMatters: "ORMs simplify database operations and reduce boilerplate.", content: `**GORM Setup:**
\`\`\`go\nimport (\n    "gorm.io/driver/postgres"\n    "gorm.io/gorm"\n)\n\ndb, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})\n\n// Auto migrate\ndb.AutoMigrate(&User{})\n\n// Create\ndb.Create(&User{Name: "Alice", Age: 25})\n\n// Read\nvar user User\ndb.First(&user, 1)\n\n// Update\ndb.Model(&user).Update("Age", 26)\n\n// Delete\ndb.Delete(&user)\n\`\`\`` }
      ],
      quiz: { questions: [{ id: "go-43-q1", type: "mcq", question: "What does GORM stand for?", options: ["Go ORM", "Generic ORM", "Go Object-Relational Mapper", "Global ORM"], correctAnswer: "Go Object-Relational Mapper", explanation: "GORM is the most popular ORM for Go.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Connect", value: "gorm.Open(dialect, config)" }, { label: "Create", value: "db.Create(&model)" }, { label: "Find", value: "db.First(&model, id)" }, { label: "Update", value: "db.Model(&m).Update(field, value)" }]
    },
    {
      id: "go-44", number: 44, title: "WebSockets", subtitle: "Real-time bidirectional communication", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 80, prerequisites: ["HTTP Servers in Go"], learningObjectives: ["Implement WebSocket connections", "Handle real-time messaging", "Build a chat server"], partLabel: "Part 4: Web Development",
      sections: [
        { id: "go-44-1", title: "WebSocket Basics", whyItMatters: "WebSockets enable real-time features like chat and live updates.", content: `**Using gorilla/websocket:**
\`\`\`go\nimport "github.com/gorilla/websocket"\n\nvar upgrader = websocket.Upgrader{\n    CheckOrigin: func(r *http.Request) bool { return true },\n}\n\nfunc wsHandler(w http.ResponseWriter, r *http.Request) {\n    conn, err := upgrader.Upgrade(w, r, nil)\n    if err != nil {\n        log.Println(err)\n        return\n    }\n    defer conn.Close()\n\n    for {\n        _, message, err := conn.ReadMessage()\n        if err != nil {\n            break\n        }\n        conn.WriteMessage(websocket.TextMessage, message)\n    }\n}\n\`\`\`` }
      ],
      quiz: { questions: [{ id: "go-44-q1", type: "mcq", question: "What protocol do WebSockets use?", options: ["HTTP only", "Upgrade from HTTP to ws://", "FTP", "TCP only"], correctAnswer: "Upgrade from HTTP to ws://", explanation: "WebSockets start as HTTP and upgrade to the ws:// protocol.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Upgrade", value: "upgrader.Upgrade(w, r, nil)" }, { label: "Read", value: "conn.ReadMessage()" }, { label: "Write", value: "conn.WriteMessage(type, data)" }]
    },
    {
      id: "go-45", number: 45, title: "File Upload APIs", subtitle: "Handling multipart form data", difficulty: "Advanced", estimatedMinutes: 50, xpReward: 70, prerequisites: ["REST APIs"], learningObjectives: ["Handle file uploads", "Validate uploaded files", "Store files securely"], partLabel: "Part 4: Web Development",
      sections: [
        { id: "go-45-1", title: "File Upload Handling", whyItMatters: "File uploads are a common requirement for web applications.", content: `**Upload Handler:**
\`\`\`go\nfunc uploadHandler(w http.ResponseWriter, r *http.Request) {\n    r.ParseMultipartForm(10 << 20)  // 10MB max\n    \n    file, header, err := r.FormFile("file")\n    if err != nil {\n        http.Error(w, "Invalid file", 400)\n        return\n    }\n    defer file.Close()\n    \n    // Save file\n    dst, _ := os.Create("uploads/" + header.Filename)\n    defer dst.Close()\n    io.Copy(dst, file)\n    \n    fmt.Fprintf(w, "Uploaded: %s", header.Filename)\n}\n\`\`\`` }
      ],
      quiz: { questions: [{ id: "go-45-q1", type: "mcq", question: "What method parses multipart form data?", options: ["r.ParseForm", "r.ParseMultipartForm", "r.FormFile", "r.ReadFile"], correctAnswer: "r.ParseMultipartForm", explanation: "ParseMultipartForm parses multipart/form-data from file uploads.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Parse", value: "r.ParseMultipartForm(maxMemory)" }, { label: "Get File", value: "r.FormFile(field)" }, { label: "Save", value: "io.Copy(dst, src)" }]
    },
    {
      id: "go-46", number: 46, title: "API Security", subtitle: "Protecting your API from attacks", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 80, prerequisites: ["Authentication", "REST APIs"], learningObjectives: ["Implement rate limiting", "Prevent common attacks", "Add CORS support"], partLabel: "Part 4: Web Development",
      sections: [
        { id: "go-46-1", title: "Security Best Practices", whyItMatters: "API security protects your data and users.", content: `**CORS:**
\`\`\`go\nfunc corsMiddleware(next http.Handler) http.Handler {\n    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n        w.Header().Set("Access-Control-Allow-Origin", "*")\n        w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")\n        w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")\n        \n        if r.Method == "OPTIONS" {\n            w.WriteHeader(200)\n            return\n        }\n        next.ServeHTTP(w, r)\n    })\n}\n\`\`\`

**Rate Limiting:**
\`\`\`go\nimport "golang.org/x/time/rate"\n\nvar limiter = rate.NewLimiter(1, 5)  // 1 req/sec, burst 5\n\nfunc rateLimit(next http.Handler) http.Handler {\n    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n        if !limiter.Allow() {\n            http.Error(w, "Too many requests", 429)\n            return\n        }\n        next.ServeHTTP(w, r)\n    })\n}\n\`\`\`` }
      ],
      quiz: { questions: [{ id: "go-46-q1", type: "mcq", question: "What HTTP status code indicates rate limiting?", options: ["400", "401", "429", "503"], correctAnswer: "429", explanation: "429 Too Many Requests indicates rate limiting.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "CORS", value: "Access-Control-Allow-Origin header" }, { label: "Rate Limit", value: "rate.NewLimiter(r, b)" }, { label: "429", value: "Too Many Requests" }]
    },
    {
      id: "go-47", number: 47, title: "Memory Management", subtitle: "Understanding Go's memory model", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 80, prerequisites: ["Pointers in Go"], learningObjectives: ["Understand stack vs heap", "Analyze memory allocations", "Optimize memory usage"], partLabel: "Part 5: Advanced Go",
      sections: [
        { id: "go-47-1", title: "Stack and Heap", whyItMatters: "Understanding memory allocation helps write performant Go code.", content: `**Escape Analysis:**
\`\`\`bash\ngo build -gcflags="-m" main.go\n\`\`\`

Go's compiler decides whether variables live on stack or heap:
- Stack: fast, automatically freed when function returns
- Heap: slower, managed by garbage collector

\`\`\`go\n// Stays on stack (returned value escapes to heap)\nfunc getValue() int {\n    x := 42\n    return x\n}\n\n// Escapes to heap (pointer returned)\nfunc getPointer() *int {\n    x := 42\n    return &x  // x escapes to heap\n}\n\`\`\``, callouts: [{ type: "pro-tip", title: "Minimize Heap Allocations", content: "Use escape analysis to find heap allocations. Prefer stack allocation when possible." }] }
      ],
      quiz: { questions: [{ id: "go-47-q1", type: "mcq", question: "What determines if a variable goes on stack or heap?", options: ["Programmer decides", "Go compiler's escape analysis", "Runtime decides", "OS decides"], correctAnswer: "Go compiler's escape analysis", explanation: "Go's compiler performs escape analysis to determine allocation location.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Escape Analysis", value: 'go build -gcflags="-m"' }, { label: "Stack", value: "Fast, auto-freed" }, { label: "Heap", value: "GC managed" }]
    },
    {
      id: "go-48", number: 48, title: "Garbage Collection", subtitle: "How Go manages memory automatically", difficulty: "Advanced", estimatedMinutes: 50, xpReward: 80, prerequisites: ["Memory Management"], learningObjectives: ["Understand Go's GC algorithm", "Tune GC behavior", "Monitor GC performance"], partLabel: "Part 5: Advanced Go",
      sections: [
        { id: "go-48-1", title: "GC Fundamentals", whyItMatters: "Understanding GC helps optimize application performance.", content: `**Go's GC:**
- Concurrent, tri-color mark-and-sweep
- Sub-millisecond pause times
- Tunable via GOGC environment variable

\`\`\`bash\n# Set GC target (default 100)\nexport GOGC=100  # Run GC when heap doubles\nexport GOGC=50   # More frequent, less memory\nexport GOGC=200  # Less frequent, more memory\n\`\`\`

**Monitoring:**
\`\`\`go\nimport "runtime"\n\nvar stats runtime.MemStats\nruntime.ReadMemStats(&stats)\nfmt.Printf("GC runs: %d\\n", stats.NumGC)\nfmt.Printf("Pause total: %v\\n", time.Duration(stats.PauseTotalNs))\n\`\`\`` }
      ],
      quiz: { questions: [{ id: "go-48-q1", type: "mcq", question: "What is the default GOGC value?", options: ["50", "100", "200", "500"], correctAnswer: "100", explanation: "GOGC=100 means GC runs when heap size doubles.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "GOGC", value: "Controls GC frequency" }, { label: "Default", value: "GOGC=100" }, { label: "Stats", value: "runtime.ReadMemStats(&stats)" }]
    },
    {
      id: "go-49", number: 49, title: "Performance Optimization", subtitle: "Making Go code faster", difficulty: "Advanced", estimatedMinutes: 60, xpReward: 90, prerequisites: ["Benchmarking"], learningObjectives: ["Identify bottlenecks", "Optimize critical paths", "Use sync.Pool effectively"], partLabel: "Part 5: Advanced Go",
      sections: [
        { id: "go-49-1", title: "Optimization Techniques", whyItMatters: "Performance optimization is crucial for high-throughput systems.", content: `**sync.Pool:**
\`\`\`go\nvar bufferPool = sync.Pool{\n    New: func() interface{} {\n        return make([]byte, 1024)\n    },\n}\n\nfunc process() {\n    buf := bufferPool.Get().([]byte)\n    defer bufferPool.Put(buf)\n    // Use buf...\n}\n\`\`\`

**Pre-allocate Slices:**
\`\`\`go\n// Bad - grows slice multiple times\nvar result []int\nfor i := 0; i < 1000; i++ {\n    result = append(result, i)\n}\n\n// Good - pre-allocated\nresult := make([]int, 0, 1000)\nfor i := 0; i < 1000; i++ {\n    result = append(result, i)\n}\n\`\`\`` }
      ],
      quiz: { questions: [{ id: "go-49-q1", type: "mcq", question: "What does sync.Pool help with?", options: ["Memory pooling", "Connection pooling", "Thread pooling", "Cache pooling"], correctAnswer: "Memory pooling", explanation: "sync.Pool reuses objects to reduce GC pressure.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Pool", value: "sync.Pool{New: func}" }, { label: "Get", value: "pool.Get()" }, { label: "Put", value: "pool.Put(obj)" }, { label: "Pre-allocate", value: "make([]T, 0, capacity)" }]
    },
    {
      id: "go-50", number: 50, title: "Profiling in Go", subtitle: "Finding performance bottlenecks", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 80, prerequisites: ["Performance Optimization"], learningObjectives: ["Use pprof for profiling", "Analyze CPU and memory profiles", "Interpret profiling data"], partLabel: "Part 5: Advanced Go",
      sections: [
        { id: "go-50-1", title: "pprof Profiling", whyItMatters: "Profiling reveals where your program actually spends time.", content: `**HTTP Profiling:**
\`\`\`go\nimport _ "net/http/pprof"\n\n// Access profiles at:\n// http://localhost:8080/debug/pprof/\n// http://localhost:8080/debug/pprof/profile?seconds=30\n\`\`\`

**Command Line:**
\`\`\`bash\ngo tool pprof http://localhost:8080/debug/pprof/profile\ngo tool pprof -http=:8081 profile.pb.gz\n\`\`\`

**Profile Types:**
- cpu: CPU usage
- heap: Memory allocations
- goroutine: Goroutine count
- mutex: Lock contention`, codeExamples: [{ id: "go-50-ex1", title: "Enable Profiling", description: "Adding pprof to your server", code: { go: 'package main\n\nimport (\n\t"net/http"\n\t_ "net/http/pprof"\n)\n\nfunc main() {\n\t// pprof endpoints available at /debug/pprof/\n\thttp.ListenAndServe(":8080", nil)\n}' }, explanation: "pprof provides detailed performance profiling with minimal setup." }] }
      ],
      quiz: { questions: [{ id: "go-50-q1", type: "mcq", question: "What URL path does pprof use by default?", options: ["/profile", "/debug/pprof/", "/metrics", "/stats"], correctAnswer: "/debug/pprof/", explanation: "pprof exposes profiles at /debug/pprof/.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Import", value: '_ "net/http/pprof"' }, { label: "CPU", value: "/debug/pprof/profile" }, { label: "Heap", value: "/debug/pprof/heap" }, { label: "Tool", value: "go tool pprof" }]
    },
    {
      id: "go-51", number: 51, title: "WebAssembly with Go", subtitle: "Running Go in the browser", difficulty: "Advanced", estimatedMinutes: 55, xpReward: 80, prerequisites: [], learningObjectives: ["Compile Go to WASM", "Call Go from JavaScript", "Build browser-based tools"], partLabel: "Part 5: Advanced Go",
      sections: [
        { id: "go-51-1", title: "WASM Compilation", whyItMatters: "WASM enables Go code to run in web browsers at near-native speed.", content: `**Compile to WASM:**
\`\`\`bash\ngo build -o main.wasm -trimpath -ldflags="-s -w" main.go\n\`\`\`

**Go WASM Exec:**
\`\`\`html\n<script src="wasm_exec.js"></script>\n<script>\n    const go = new Go();\n    WebAssembly.instantiateStreaming(fetch("main.wasm"), go.importObject)\n        .then(result => go.run(result.instance));\n</script>\n\`\`\`

**JS Interop:**
\`\`\`go\nimport "syscall/js"\n\nfunc main() {\n    js.Global().Set("myFunc", js.FuncOf(func(this js.Value, args []js.Value) interface{} {\n        return "Hello from Go!"\n    }))\n    select {}  // Keep running\n}\n\`\`\`` }
      ],
      quiz: { questions: [{ id: "go-51-q1", type: "mcq", question: "What GOOS/GOARCH values compile to WASM?", options: ["linux/amd64", "js/wasm", "browser/wasm", "web/wasm"], correctAnswer: "js/wasm", explanation: "GOOS=js GOARCH=wasm compiles Go to WebAssembly.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Build", value: "GOOS=js GOARCH=wasm go build" }, { label: "JS Interop", value: "syscall/js package" }, { label: "Exec", value: "wasm_exec.js" }]
    },
    {
      id: "go-52", number: 52, title: "Microservices", subtitle: "Building distributed systems", difficulty: "Expert", estimatedMinutes: 60, xpReward: 90, prerequisites: ["REST APIs", "Context Package"], learningObjectives: ["Design microservice architecture", "Implement service communication", "Handle distributed tracing"], partLabel: "Part 5: Advanced Go",
      sections: [
        { id: "go-52-1", title: "Microservice Patterns", whyItMatters: "Microservices enable scalable, maintainable systems.", content: `**Service Structure:**
\`\`\`
user-service/\n├── cmd/server/main.go\n├── internal/\n│   ├── handler/\n│   ├── service/\n│   └── repository/\n├── pkg/\n│   └── models/\n├── go.mod\n└── Dockerfile\n\`\`\`

**gRPC Communication:**
\`\`\`go\n// proto/user.proto\nsyntax = "proto3";\npackage user;\n\nservice UserService {\n    rpc GetUser(GetUserRequest) returns (User);\n}\n\nmessage User {\n    int32 id = 1;\n    string name = 2;\n}\n\`\`\``, callouts: [{ type: "pro-tip", title: "Start Monolithic", content: "Start with a monolith and split into microservices only when you have clear boundaries and scaling needs." }] }
      ],
      quiz: { questions: [{ id: "go-52-q1", type: "mcq", question: "What protocol is commonly used for microservice communication?", options: ["FTP", "gRPC", "SMTP", "SNMP"], correctAnswer: "gRPC", explanation: "gRPC provides efficient, typed RPC communication between services.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "gRPC", value: "google.golang.org/grpc" }, { label: "Proto", value: "Protocol Buffers" }, { label: "Structure", value: "cmd/, internal/, pkg/" }]
    },
    {
      id: "go-53", number: 53, title: "Dockerizing Go Apps", subtitle: "Containerizing Go applications", difficulty: "Expert", estimatedMinutes: 50, xpReward: 80, prerequisites: [], learningObjectives: ["Create Dockerfiles for Go", "Use multi-stage builds", "Optimize container size"], partLabel: "Part 5: Advanced Go",
      sections: [
        { id: "go-53-1", title: "Dockerfile for Go", whyItMatters: "Docker enables consistent deployment across environments.", content: `**Multi-Stage Build:**
\`\`\`dockerfile\n# Build stage\nFROM golang:1.21-alpine AS builder\nWORKDIR /app\nCOPY go.* ./\nRUN go mod download\nCOPY . .\nRUN CGO_ENABLED=0 GOOS=linux go build -o /server\n\n# Runtime stage\nFROM alpine:latest\nRUN apk --no-cache add ca-certificates\nWORKDIR /root/\nCOPY --from=builder /server .\nEXPOSE 8080\nCMD ["./server"]\n\`\`\`

**Build and Run:**
\`\`\`bash\ndocker build -t myapp .\ndocker run -p 8080:8080 myapp\n\`\`\``, codeExamples: [{ id: "go-53-ex1", title: "Dockerfile", description: "Optimized Dockerfile for Go", code: { go: '# Build stage\nFROM golang:1.21-alpine AS builder\nWORKDIR /app\nCOPY go.* ./\nRUN go mod download\nCOPY . .\nRUN CGO_ENABLED=0 GOOS=linux go build -o /server\n\n# Runtime stage\nFROM alpine:latest\nCOPY --from=builder /server .\nEXPOSE 8080\nCMD ["./server"]' }, explanation: "Multi-stage builds produce tiny containers (~10MB)." }] }
      ],
      quiz: { questions: [{ id: "go-53-q1", type: "mcq", question: "Why use multi-stage Docker builds?", options: ["Faster builds", "Smaller final image", "Better security", "All of the above"], correctAnswer: "All of the above", explanation: "Multi-stage builds provide smaller images, better security, and can be faster.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Build Stage", value: "FROM golang AS builder" }, { label: "Runtime", value: "FROM alpine" }, { label: "Copy", value: "COPY --from=builder" }, { label: "Static", value: "CGO_ENABLED=0" }]
    },
    {
      id: "go-54", number: 54, title: "Deploying Go Applications", subtitle: "Production deployment strategies", difficulty: "Expert", estimatedMinutes: 55, xpReward: 90, prerequisites: ["Dockerizing Go Apps"], learningObjectives: ["Deploy to cloud platforms", "Configure production settings", "Implement health checks"], partLabel: "Part 5: Advanced Go",
      sections: [
        { id: "go-54-1", title: "Production Deployment", whyItMatters: "Proper deployment ensures reliability and scalability.", content: `**Health Check:**
\`\`\`go\nfunc healthHandler(w http.ResponseWriter, r *http.Request) {\n    w.Header().Set("Content-Type", "application/json")\n    json.NewEncoder(w).Encode(map[string]string{\n        "status": "healthy",\n        "version": "1.0.0",\n    })\n}\n\`\`\`

**Graceful Shutdown:**
\`\`\`go\nserver := &http.Server{Addr: ":8080", Handler: mux}\n\ngo func() {\n    sig := make(chan os.Signal, 1)\n    signal.Notify(sig, os.Interrupt)\n    <-sig\n    \n    ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)\n    defer cancel()\n    server.Shutdown(ctx)\n}()\n\nserver.ListenAndServe()\n\`\`\`` }
      ],
      quiz: { questions: [{ id: "go-54-q1", type: "mcq", question: "What HTTP status should health checks return?", options: ["200 OK", "201 Created", "204 No Content", "301 Moved"], correctAnswer: "200 OK", explanation: "Health checks return 200 OK when the service is healthy.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Health", value: "/health endpoint" }, { label: "Shutdown", value: "server.Shutdown(ctx)" }, { label: "Signal", value: "signal.Notify(sig, os.Interrupt)" }]
    },
    {
      id: "go-55", number: 55, title: "CLI Tool Project", subtitle: "Building a command-line application", difficulty: "Expert", estimatedMinutes: 90, xpReward: 100, prerequisites: ["File Handling", "JSON Encoding/Decoding"], learningObjectives: ["Create a CLI tool", "Parse command-line arguments", "Build a practical application"], partLabel: "Part 6: Projects",
      sections: [
        { id: "go-55-1", title: "CLI Project", whyItMatters: "CLI tools are a common use case for Go.", content: `**Using cobra:**
\`\`\`go\nimport (\n    "github.com/spf13/cobra"\n    "fmt"\n)\n\nvar rootCmd = &cobra.Command{\n    Use:   "mycli",\n    Short: "A CLI tool built with Go",\n    Run: func(cmd *cobra.Command, args []string) {\n        fmt.Println("Hello from CLI!")\n    },\n}\n\nfunc Execute() {\n    rootCmd.Execute()\n}\n\`\`\`

**Project Structure:**
\`\`\`
mycli/\n├── cmd/\n│   └── root.go\n├── main.go\n└── go.mod\n\`\`\``, codeExamples: [{ id: "go-55-ex1", title: "Simple CLI", description: "Basic CLI tool", code: { go: 'package main\n\nimport (\n\t"flag"\n\t"fmt"\n)\n\nfunc main() {\n\tname := flag.String("name", "World", "Name to greet")\n\tflag.Parse()\n\tfmt.Printf("Hello, %s!\\n", *name)\n}' }, explanation: "Go's flag package provides simple CLI argument parsing." }] }
      ],
      quiz: { questions: [{ id: "go-55-q1", type: "mcq", question: "What popular library is used for Go CLI tools?", options: ["cobra", "cli-go", "commander", "flags"], correctAnswer: "cobra", explanation: "Cobra is the most popular CLI framework for Go.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Flag", value: "flag.String(name, default, usage)" }, { label: "Parse", value: "flag.Parse()" }, { label: "Cobra", value: "github.com/spf13/cobra" }]
    },
    {
      id: "go-56", number: 56, title: "REST API Project", subtitle: "Building a complete REST API", difficulty: "Expert", estimatedMinutes: 120, xpReward: 120, prerequisites: ["REST APIs", "PostgreSQL Integration"], learningObjectives: ["Build a production-ready API", "Implement CRUD operations", "Add authentication"], partLabel: "Part 6: Projects",
      sections: [
        { id: "go-56-1", title: "API Project", whyItMatters: "REST APIs are the backbone of modern web applications.", content: `**Complete API Structure:**
\`\`\`
api/\n├── cmd/server/\n├── internal/\n│   ├── handler/\n│   ├── service/\n│   ├── repository/\n│   └── middleware/\n├── pkg/models/\n└── go.mod\n\`\`\`

**Features:**
- CRUD operations for resources
- JWT authentication
- Input validation
- Error handling
- Logging middleware
- Database integration`, codeExamples: [{ id: "go-56-ex1", title: "API Server", description: "Complete API server setup", code: { go: 'package main\n\nimport (\n\t"log"\n\t"net/http"\n)\n\nfunc main() {\n\tmux := http.NewServeMux()\n\tmux.HandleFunc("GET /api/health", healthHandler)\n\tmux.HandleFunc("GET /api/users", getUsersHandler)\n\tmux.HandleFunc("POST /api/users", createUserHandler)\n\n\tlog.Println("Server starting on :8080")\n\tlog.Fatal(http.ListenAndServe(":8080", mux))\n}\n\nfunc healthHandler(w http.ResponseWriter, r *http.Request) {\n\tw.Write([]byte(`+"`"+`{"status":"ok"}`+"`"+`))\n}' }, explanation: "A well-structured API separates concerns into handlers, services, and repositories." }] }
      ],
      quiz: { questions: [{ id: "go-56-q1", type: "mcq", question: "What pattern separates API concerns?", options: ["MVC", "Handler-Service-Repository", "Singleton", "Observer"], correctAnswer: "Handler-Service-Repository", explanation: "This pattern cleanly separates HTTP handling, business logic, and data access.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Structure", value: "cmd/, internal/, pkg/" }, { label: "Handler", value: "HTTP layer" }, { label: "Service", value: "Business logic" }, { label: "Repository", value: "Data access" }]
    },
    {
      id: "go-57", number: 57, title: "Real-Time Chat Server", subtitle: "Building a WebSocket-based chat application", difficulty: "Expert", estimatedMinutes: 120, xpReward: 120, prerequisites: ["WebSockets", "Goroutines", "Channels"], learningObjectives: ["Implement WebSocket chat", "Manage connected clients", "Broadcast messages"], partLabel: "Part 6: Projects",
      sections: [
        { id: "go-57-1", title: "Chat Server", whyItMatters: "Real-time applications demonstrate Go's concurrency strengths.", content: `**Hub Pattern:**
\`\`\`go\ntype Hub struct {\n    clients    map[*Client]bool\n    broadcast  chan []byte\n    register   chan *Client\n    unregister chan *Client\n}\n\nfunc (h *Hub) Run() {\n    for {\n        select {\n        case client := <-h.register:\n            h.clients[client] = true\n        case client := <-h.unregister:\n            delete(h.clients, client)\n        case message := <-h.broadcast:\n            for client := range h.clients {\n                select {\n                case client.send <- message:\n                default:\n                    close(client.send)\n                    delete(h.clients, client)\n                }\n            }\n        }\n    }\n}\n\`\`\``, codeExamples: [{ id: "go-57-ex1", title: "Chat Hub", description: "Managing WebSocket connections", code: { go: 'package main\n\nimport "sync"\n\ntype Hub struct {\n\tclients   map[string]bool\n\tmu        sync.RWMutex\n\tbroadcast chan string\n}\n\nfunc NewHub() *Hub {\n\treturn &Hub{\n\t\tclients:   make(map[string]bool),\n\t\tbroadcast: make(chan string),\n\t}\n}\n\nfunc (h *Hub) AddClient(id string) {\n\th.mu.Lock()\n\th.clients[id] = true\n\th.mu.Unlock()\n}\n\nfunc (h *Hub) Broadcast(msg string) {\n\th.broadcast <- msg\n}' }, explanation: "The hub pattern centralizes client management and message broadcasting." }] }
      ],
      quiz: { questions: [{ id: "go-57-q1", type: "mcq", question: "What pattern manages multiple WebSocket clients?", options: ["Singleton", "Hub", "Factory", "Observer"], correctAnswer: "Hub", explanation: "The Hub pattern centralizes client connections and message routing.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Hub", value: "Central client manager" }, { label: "Broadcast", value: "Send to all clients" }, { label: "Register", value: "Add new client" }, { label: "Unregister", value: "Remove disconnected client" }]
    },
    {
      id: "go-58", number: 58, title: "Concurrent File Processor", subtitle: "Processing files with worker pools", difficulty: "Expert", estimatedMinutes: 100, xpReward: 100, prerequisites: ["Worker Pools", "File Handling"], learningObjectives: ["Build a file processor", "Use worker pools for parallel processing", "Handle errors gracefully"], partLabel: "Part 6: Projects",
      sections: [
        { id: "go-58-1", title: "File Processor", whyItMatters: "Concurrent file processing demonstrates practical use of Go's concurrency.", content: `**Processor Architecture:**
\`\`\`go\ntype FileProcessor struct {\n    workerCount int\n    jobs        chan string\n    results     chan Result\n}\n\nfunc (fp *FileProcessor) Start() {\n    var wg sync.WaitGroup\n    for i := 0; i < fp.workerCount; i++ {\n        wg.Add(1)\n        go func() {\n            defer wg.Done()\n            for path := range fp.jobs {\n                result := processFile(path)\n                fp.results <- result\n            }\n        }()\n    }\n    wg.Wait()\n    close(fp.results)\n}\n\`\`\``, codeExamples: [{ id: "go-58-ex1", title: "File Processor", description: "Concurrent file processing", code: { go: 'package main\n\nimport (\n\t"fmt"\n\t"os"\n\t"sync"\n)\n\nfunc processFile(path string) (int, error) {\n\tdata, err := os.ReadFile(path)\n\tif err != nil {\n\t\treturn 0, err\n\t}\n\treturn len(data), nil\n}\n\nfunc main() {\n\tfiles := []string{"a.txt", "b.txt", "c.txt"}\n\tresults := make(chan int, len(files))\n\tvar wg sync.WaitGroup\n\n\tfor _, f := range files {\n\t\twg.Add(1)\n\t\tgo func(path string) {\n\t\t\tdefer wg.Done()\n\t\t\tsize, _ := processFile(path)\n\t\t\tresults <- size\n\t\t}(f)\n\t}\n\n\twg.Wait()\n\tclose(results)\n\n\ttotal := 0\n\tfor size := range results {\n\t\ttotal += size\n\t}\n\tfmt.Println("Total bytes:", total)\n}' }, explanation: "Worker pools process files in parallel for maximum throughput." }] }
      ],
      quiz: { questions: [{ id: "go-58-q1", type: "mcq", question: "What ensures all workers finish before collecting results?", options: ["time.Sleep", "sync.WaitGroup", "context", "select"], correctAnswer: "sync.WaitGroup", explanation: "WaitGroup waits for all goroutines to complete.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Jobs", value: "Buffered channel of file paths" }, { label: "Workers", value: "Goroutines processing jobs" }, { label: "Results", value: "Buffered channel of results" }, { label: "Wait", value: "wg.Wait()" }]
    },
    {
      id: "go-59", number: 59, title: "Microservice Project", subtitle: "Building a complete microservice", difficulty: "Expert", estimatedMinutes: 120, xpReward: 120, prerequisites: ["Microservices", "REST APIs", "PostgreSQL Integration"], learningObjectives: ["Build a production microservice", "Implement gRPC communication", "Add observability"], partLabel: "Part 6: Projects",
      sections: [
        { id: "go-59-1", title: "Microservice Architecture", whyItMatters: "Microservices are the standard for large-scale systems.", content: `**Service Components:**
- HTTP/gRPC endpoints
- Database integration
- Health checks
- Metrics (Prometheus)
- Tracing (OpenTelemetry)
- Configuration management
- Logging

**Project Structure:**
\`\`\`
user-service/\n├── cmd/server/main.go\n├── internal/\n│   ├── api/\n│   ├── domain/\n│   ├── infrastructure/\n│   └── config/\n├── proto/\n├── docker-compose.yml\n├── Dockerfile\n└── go.mod\n\`\`\``, codeExamples: [{ id: "go-59-ex1", title: "Service Entry Point", description: "Microservice main function", code: { go: 'package main\n\nimport (\n\t"log"\n\t"net/http"\n\t"os"\n\t"os/signal"\n\t"syscall"\n)\n\nfunc main() {\n\tmux := http.NewServeMux()\n\tmux.HandleFunc("/health", healthHandler)\n\tmux.HandleFunc("/api/users", usersHandler)\n\n\tserver := &http.Server{Addr: ":8080", Handler: mux}\n\n\tgo func() {\n\t\tif err := server.ListenAndServe(); err != nil {\n\t\t\tlog.Fatal(err)\n\t\t}\n\t}()\n\n\tquit := make(chan os.Signal, 1)\n\tsignal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)\n\t<-quit\n\tlog.Println("Shutting down...")\n}' }, explanation: "A production microservice includes health checks, graceful shutdown, and clean architecture." }] }
      ],
      quiz: { questions: [{ id: "go-59-q1", type: "mcq", question: "What signal triggers graceful shutdown?", options: ["SIGKILL", "SIGTERM", "SIGHUP", "SIGSTOP"], correctAnswer: "SIGTERM", explanation: "SIGTERM requests graceful termination, allowing cleanup.", difficulty: 1 }], passingScore: 70 },
      cheatSheet: [{ label: "Health", value: "/health endpoint" }, { label: "Graceful", value: "server.Shutdown(ctx)" }, { label: "Signal", value: "SIGTERM, SIGINT" }]
    },
    {
      id: "go-60", number: 60, title: "Go Mastery Recap + Certificate Prep", subtitle: "Review and prepare for certification", difficulty: "Expert", estimatedMinutes: 60, xpReward: 150, prerequisites: ["All previous chapters"], learningObjectives: ["Review key Go concepts", "Complete final assessment", "Prepare for certification"], partLabel: "Part 6: Projects",
      sections: [
        { id: "go-60-1", title: "Course Review", whyItMatters: "Reviewing consolidates your learning and prepares you for real-world development.", content: `**What You've Learned:**

**Part 1: Go Foundations**
- Variables, types, operators
- Control flow (if, switch, for)
- Functions, multiple returns, defer
- Arrays, slices, maps
- Structs, methods, composition
- Pointers
- Packages and modules

**Part 2: Intermediate Go**
- Interfaces and polymorphism
- Error handling patterns
- Defer, panic, recover
- File I/O and JSON
- Generics
- Testing and benchmarking

**Part 3: Concurrency**
- Goroutines and channels
- Select and worker pools
- Mutexes and sync primitives
- Context and cancellation
- Race detection
- Concurrent patterns

**Part 4: Web Development**
- HTTP servers and routing
- Middleware and REST APIs
- Authentication and JWT
- Database integration
- WebSockets
- API security

**Part 5: Advanced Go**
- Memory management
- Garbage collection
- Performance optimization
- Profiling with pprof
- WebAssembly
- Microservices and Docker

**Part 6: Projects**
- CLI tools
- REST API
- Real-time chat
- Concurrent file processor
- Production microservice

**Next Steps:**
- Build real projects
- Contribute to open source
- Study popular Go codebases
- Prepare for Go certification`, callouts: [{ type: "tip", title: "Keep Practicing", content: "The best way to master Go is to build real projects. Start small and iterate." }] }
      ],
      quiz: { questions: [
        { id: "go-60-q1", type: "mcq", question: "Which feature makes Go unique for concurrent programming?", options: ["Threads", "Goroutines and channels", "Callbacks", "Promises"], correctAnswer: "Goroutines and channels", explanation: "Goroutines and channels are Go's signature concurrency features.", difficulty: 1 },
        { id: "go-60-q2", type: "true-false", question: "Go supports inheritance like Java.", correctAnswer: false, explanation: "Go uses composition and embedding instead of inheritance.", difficulty: 1 },
        { id: "go-60-q3", type: "mcq", question: "What is the idiomatic way to handle errors in Go?", options: ["Try-catch", "Return errors as values", "Panic on error", "Ignore errors"], correctAnswer: "Return errors as values", explanation: "Go returns errors as the last return value for explicit handling.", difficulty: 1 }
      ], passingScore: 80 },
      cheatSheet: [
        { label: "Goroutine", value: "go func()" },
        { label: "Channel", value: "make(chan T)" },
        { label: "Interface", value: "Implicit implementation" },
        { label: "Error", value: "return value, error" },
        { label: "Defer", value: "defer cleanup()" },
        { label: "Mutex", value: "sync.Mutex" },
        { label: "Context", value: "context.WithCancel/Timeout" },
        { label: "Test", value: "go test -race -cover" }
      ]
    }
  ]
};

