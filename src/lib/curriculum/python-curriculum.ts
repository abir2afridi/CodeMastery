import { Track, Chapter, Section, Exercise, Quiz, QuizQuestion, CodeExample, MicroExercise, Callout, CheatSheetItem } from './types';

// Helper function to add Bn translations
function addBnTranslations(chapters: Chapter[]): Chapter[] {
  return chapters.map(ch => ({
    ...ch,
    titleBn: getBnTitle(ch.id),
    subtitleBn: getBnSubtitle(ch.id),
    partLabelBn: ch.partLabel?.replace("PART", "অংশ").replace("ABSOLUTE PYTHON BASICS", "মৌলিক পাইথন").replace("PYTHON FUNDAMENTALS", "পাইথন মূল বিষয়").replace("INTERMEDIATE PYTHON", "মধ্যবর্তী পাইথন").replace("ADVANCED PYTHON", "উন্নত পাইথন").replace("EXPERT PYTHON", "বিশেষজ্ঞ পাইথন"),
    learningObjectivesBn: ch.learningObjectives.map((o, i) => getBnObjective(ch.id, i)),
    sections: ch.sections.map(s => ({
      ...s,
      titleBn: getBnSectionTitle(ch.id, s.id),
      whyItMattersBn: getBnWhyMatters(ch.id, s.id),
      contentBn: getBnContent(ch.id),
    })),
  }));
}

function getBnTitle(id: string): string {
  const titles: Record<string, string> = {
    "python-ch-1": "পাইথন কী এবং কেন এটি শিখবেন?",
    "python-ch-2": "ভেরিয়েবল এবং ডেটা টাইপ",
    "python-ch-3": "স্ট্রিংস",
    "python-ch-4": "সংখ্যা এবং গাণিতিক অপারেশন",
    "python-ch-5": "লিস্ট এবং টাপলস",
  };
  return titles[id] || "";
}

function getBnSubtitle(id: string): string {
  const subtitles: Record<string, string> = {
    "python-ch-1": "পাইথন প্রোগ্রামিংয়ে পরিচিতি",
    "python-ch-2": "ডেটা সংরক্ষণ এবং টাইপ বুঝুন",
    "python-ch-3": "টেক্সট ডেটা নিয়ে কাজ করা",
    "python-ch-4": "গাণিতিক হিসাব-নিকাশ",
    "python-ch-5": "ডেটা সংগ্রহ",
  };
  return subtitles[id] || "";
}

function getBnObjective(id: string, idx: number): string {
  const objectives: Record<string, string[]> = {
    "python-ch-1": ["পাইথন কী তা বুঝতে পারবেন", "কেন পাইথন জনপ্রিয় তা জানবেন", "পাইথন সেটআপ করতে পারবেন", "প্রথম পাইথন প্রোগ্রাম লিখবেন"],
    "python-ch-2": ["ভেরিয়েবল তৈরি করতে পারবেন", "বিভিন্ন ডেটা টাইপ চিনতে পারবেন", "টাইপ পরিবর্তন করতে পারবেন"],
    "python-ch-3": ["স্ট্রিং তৈরি করতে পারবেন", "স্ট্রিং মেথড ব্যবহার করতে পারবেন", "স্ট্রিং ফরম্যাটিং করতে পারবেন"],
    "python-ch-4": ["সংখ্যা নিয়ে কাজ করতে পারবেন", "গাণিতিক অপারেশন করতে পারবেন", "মডিউলাস এবং ফ্লোর ডিভিশন বুঝবেন"],
    "python-ch-5": ["লিস্ট তৈরি এবং ব্যবহার করতে পারবেন", "লিস্ট মেথড ব্যবহার করতে পারবেন", "টাপল এবং লিস্টের পার্থক্য বুঝবেন"],
  };
  return objectives[id]?.[idx] || "";
}

function getBnSectionTitle(chId: string, sId: string): string {
  return "";
}

function getBnWhyMatters(chId: string, sId: string): string {
  return "";
}

function getBnContent(chId: string): string {
  const contents: Record<string, string> = {
    "python-ch-1": `পাইথন কী?

পাইথন হলো একটি high-level, interpreted প্রোগ্রামিং ল্যাঙ্গুয়েজ যা এর সহজ, পাঠযোগ্য সিনট্যাক্সের জন্য পরিচিত। এটি গুইডো ভ্যান রসাম তৈরি করেছিলেন এবং প্রথম 1991 সালে প্রকাশিত হয়েছিল।

কেন পাইথন?

- শেখা সহজ এবং পড়তে সুন্দর
- বহুমুখী - ওয়েব, ডেটা সায়েন্স, AI, অটোমেশনে ব্যবহৃত
- বড় কমিউনিটি এবং ইকোসিস্টেম
- ক্রস-প্ল্যাটফর্ম সামঞ্জস্যপূর্ণ

আপনার প্রথম প্রোগ্রাম

print("Hello, World!")`,

    "python-ch-2": `ভেরিয়েবল কী?

ভেরিয়েবল হলো ডেটা সংরক্ষণের জন্য নামকরণ করা কontainer। পাইথনে ভেরিয়েবল তৈরি করা very সহজ।

ভেরিয়েবল তৈরি করা

\`\`\`python
name = "Alice"
age = 25
is_student = True
\`\`\`

ডেটা টাইপ

- str: টেক্সট ("Hello")
- int: পূর্ণসংখ্যা (42)
- float: দশমিক সংখ্যা (3.14)
- bool: সত্য/মিথ্যা (True/False)

টাইপ পরিবর্তন

\`\`\`python
number = "42"      # str
number = int("42") # int
number = str(42)    # str আবার
\`\`\``,

    "python-ch-3": `স্ট্রিং কী?

স্ট্রিং হলো কোটেশনে আবদ্ধ অক্ষরের সিকোয়েন্স।

স্ট্রিং তৈরি

\`\`\`python
# সিঙ্গেল কোট
name = 'Alice'

# ডাবল কোট
greeting = "Hello, World!"

# ট্রিপল কোট (মাল্টি-লাইন)
message = '''এটি একাধিক
লাইনের স্ট্রিং'''
\`\`\`

স্ট্রিং ইনডেক্সিং

প্রতিটি অক্ষরের একটি ইনডেক্স থাকে (0 থেকে শুরু):

\`\`\`python
text = "Python"
text[0]  # 'P'
text[5]  # 'n'
text[-1] # 'n' (শেষ অক্ষর)
\`\`\`

নেগেটিভ ইনডেক্স শেষ থেকে গণনা করে:

\`\`\`python
text[-2] # 'o' (শেষ থেকে দ্বিতীয়)
\`\`\``,
  };
  return contents[chId] || "";
}

export const pythonTrack: Track = {
  id: "python",
  title: "Python",
  titleBn: "পাইথন",
  tagline: "From scripts to systems — the world's most versatile language",
  taglineBn: "স্ক্রিপ্ট থেকে সিস্টেম — বিশ্বের সবচেয়ে বহুমুখী ভাষা",
  icon: "https://img.icons8.com/color/144/python--v1.png",
  colorVar: "python",
  brandColor: "#3776AB",
  glowColor: "#3776AB",
  totalChapters: 80,
  estimatedHours: 120,
  chapters: addBnTranslations([
    {
      id: "python-ch-1",
      number: 1,
      partLabel: "PART 1: ABSOLUTE PYTHON BASICS",
      title: "What Is Python and Why Learn It?",
      subtitle: "Introduction to Python programming",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 45,
      xpReward: 100,
      prerequisites: [],
      learningObjectives: [
        "Understand what Python is and its history",
        "Know why Python is popular and widely used",
        "Set up a Python development environment",
        "Write your first Python program"
      ],
      sections: [
        {
          id: "ch1-introduction",
          title: "Introduction to Python",
          whyItMatters: "Python is one of the most popular programming languages in the world, used by beginners and experts alike.",
          realWorldAnalogy: "Learning Python is like learning a universal language that computers understand - it opens doors to web development, data science, automation, and more.",
          content: `What is Python?

Python is a high-level, interpreted programming language known for its simple, readable syntax. It was created by Guido van Rossum and first released in 1991.

Why Python?

- Easy to learn and read
- Versatile - used for web, data science, AI, automation
- Large community and ecosystem
- Cross-platform compatibility

Your First Program

print("Hello, World!")`,
          codeExamples: [
            {
              id: "ch1-hello",
              title: "Your First Python Program",
              description: "Print a message to the console",
              code: { python: "print('Hello, World!')" },
              explanation: "The print() function outputs text to the console."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch1-ex1",
          title: "Hello Python",
          difficulty: 1,
          description: "Write your first Python program.",
          requirements: [
            "Print a greeting message",
            "Print your name"
          ],
          starterCode: { python: "# Print a greeting\n\n# Print your name" },
          hints: [
            "Use the print() function",
            "Use quotes for strings"
          ],
          solution: { python: "print('Hello, Python!')\nprint('My name is Alice')" },
          solutionExplanation: "print() outputs text to the console. Strings are enclosed in quotes."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch1-q1",
            type: "mcq",
            question: "Who created Python?",
            options: [
              "Bill Gates",
              "Guido van Rossum",
              "Mark Zuckerberg",
              "Elon Musk"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Python was created by Guido van Rossum in 1991."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        {
          label: "Print",
          value: "print('text')"
        }
      ]
    },
    {
      id: "python-ch-2",
      number: 2,
      partLabel: "PART 1: ABSOLUTE PYTHON BASICS",
      title: "Variables and Data Types",
      subtitle: "Storing and manipulating data",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 50,
      xpReward: 100,
      prerequisites: ["python-ch-1"],
      learningObjectives: [
        "Create and use variables",
        "Understand basic data types",
        "Perform type conversion"
      ],
      sections: [
        {
          id: "ch2-variables",
          title: "Variables",
          whyItMatters: "Variables are fundamental to programming - they store data that your program can use and manipulate.",
          realWorldAnalogy: "Variables are like labeled boxes where you can store information and retrieve it later.",
          content: `Creating Variables

name = "Alice"
age = 25
height = 5.6
is_student = True

Basic Data Types

- str: strings (text)
- int: integers (whole numbers)
- float: floating-point numbers (decimals)
- bool: boolean (True/False)`,
          codeExamples: [
            {
              id: "ch2-variables",
              title: "Creating Variables",
              description: "Declare variables with different types",
              code: { python: "name = 'Alice'\nage = 25\nheight = 5.6\nis_student = True\nprint(name, age, height, is_student)" },
              explanation: "Python automatically determines the type based on the value."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch2-ex1",
          title: "Variable Practice",
          difficulty: 1,
          description: "Create variables with different types.",
          requirements: [
            "Create a string variable",
            "Create a number variable",
            "Print both variables"
          ],
          starterCode: { python: "# Create variables\n\n# Print them" },
          hints: [
            "Use = to assign values",
            "Use print() to display"
          ],
          solution: { python: "name = 'Python'\nversion = 3.11\nprint(name, version)" },
          solutionExplanation: "Variables store data that can be used throughout your program."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch2-q1",
            type: "mcq",
            question: "What data type is 'hello'?",
            options: [
              "int",
              "float",
              "str",
              "bool"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "Strings (str) are enclosed in quotes."
          }
        ],
        passingScore: 1
      },
      cheatSheet: [
        {
          label: "String",
          value: "text = 'hello'"
        },
        {
          label: "Integer",
          value: "num = 42"
        }
      ]
    },
    {
      id: "python-ch-3",
      number: 3,
      partLabel: "PART 1: ABSOLUTE PYTHON BASICS",
      title: "Strings — Complete Guide",
      subtitle: "Master text manipulation in Python",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 50,
      xpReward: 100,
      prerequisites: ["python-ch-2"],
      learningObjectives: [
        "Create and manipulate strings",
        "Use string methods for common operations",
        "Format strings with f-strings",
        "Handle string concatenation and repetition"
      ],
      sections: [
        {
          id: "ch3-string-basics",
          title: "String Fundamentals",
          whyItMatters: "Strings are the most common data type in programming — they represent all text data you'll work with.",
          realWorldAnalogy: "Strings are like sentences in a book — they're made of individual characters (letters) arranged in a specific order to convey meaning.",
          content: `Creating Strings in Python

Strings are sequences of characters enclosed in quotes:

# Single quotes
name = 'Alice'

# Double quotes
greeting = "Hello, World!"

# Triple quotes for multi-line
message = '''This is a
multi-line string'''

String Indexing

Each character has an index (starting at 0):
text = "Python"
text[0]  # 'P'
text[5]  # 'n'
text[-1] # 'n' (last character)

Negative indices count from the end:
text[-2] # 'o' (second to last)`,
          codeExamples: [
            {
              id: "ch3-string-basics",
              title: "Creating and Accessing Strings",
              description: "Basic string operations",
              code: { python: "# Creating strings\nname = 'Alice'\ngreeting = \"Hello\"\nmulti = '''Line 1\nLine 2'''\n\n# Indexing\nword = \"Python\"\nprint(word[0])   # P\nprint(word[-1])  # n" },
              explanation: "Strings can be created with single, double, or triple quotes. Indexing accesses individual characters."
            }
          ]
        },
        {
          id: "ch3-string-methods",
          title: "String Methods",
          whyItMatters: "String methods provide powerful tools for text manipulation without writing complex code.",
          realWorldAnalogy: "String methods are like having a Swiss Army knife for text — each method does a specific task perfectly.",
          content: `Common String Methods

# Case conversion
text = "Hello World"
text.upper()    # "HELLO WORLD"
text.lower()    # "hello world"
text.title()    # "Hello World"

# Searching
text.find("World")  # 6
text.replace("World", "Python")  # "Hello Python"

# Checking
"hello".isalpha()   # True
"123".isdigit()     # True
"hello123".isalnum() # True

# Whitespace
"  hello  ".strip()  # "hello"
"hello world".split()  # ["hello", "world"]`,
          codeExamples: [
            {
              id: "ch3-methods-example",
              title: "String Methods in Action",
              description: "Using common string methods",
              code: { python: "text = \"  Hello World  \"\n\n# Clean and format\ncleaned = text.strip().title()\nprint(cleaned)  # Hello World\n\n# Replace\nnew_text = cleaned.replace(\"World\", \"Python\")\nprint(new_text)  # Hello Python\n\n# Check\nprint(cleaned.isalpha())  # False (has space)" },
              explanation: "String methods return new strings, they don't modify the original."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch3-ex1",
          title: "String Basics",
          difficulty: 1,
          description: "Create and manipulate strings.",
          requirements: [
            "Create a string with your name",
            "Convert it to uppercase",
            "Find its length"
          ],
          starterCode: { python: "name = \"Your Name\"\n\n# Convert to uppercase\n\n# Find length" },
          hints: [
            "Use .upper() method",
            "Use len() function"
          ],
          solution: { python: "name = \"Your Name\"\nprint(name.upper())\nprint(len(name))" },
          solutionExplanation: "String methods like upper() transform the string, len() returns character count."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch3-q1",
            type: "mcq",
            question: "How do you create a multi-line string?",
            options: [
              "Single quotes",
              "Double quotes",
              "Triple quotes",
              "Backticks"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "Triple quotes (''' or \"\"\") create multi-line strings."
          },
          {
            id: "ch3-q2",
            type: "true-false",
            question: "String indices start at 1.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "String indices start at 0 in Python."
          },
          {
            id: "ch3-q3",
            type: "mcq",
            question: "What does .strip() do?",
            options: [
              "Removes characters",
              "Removes whitespace",
              "Reverses the string",
              "Splits the string"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: ".strip() removes leading and trailing whitespace."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Create",
          value: "text = 'Hello' or \"Hello\""
        },
        {
          label: "Upper",
          value: "text.upper()"
        },
        {
          label: "Lower",
          value: "text.lower()"
        },
        {
          label: "Length",
          value: "len(text)"
        },
        {
          label: "F-string",
          value: "f\"Hello {name}\""
        }
      ]
    },
    {
      id: "python-ch-4",
      number: 4,
      partLabel: "PART 1: ABSOLUTE PYTHON BASICS",
      title: "Numbers and Math",
      subtitle: "Master arithmetic and numeric operations",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 40,
      xpReward: 100,
      prerequisites: ["python-ch-3"],
      learningObjectives: [
        "Work with integers and floats",
        "Perform basic arithmetic operations",
        "Use the math module for advanced calculations",
        "Understand operator precedence"
      ],
      sections: [
        {
          id: "ch4-number-types",
          title: "Integer and Float Types",
          whyItMatters: "Numbers are essential for calculations, data processing, and almost every program you write.",
          realWorldAnalogy: "Integers are like whole items you can count (3 apples), while floats are like measurements (3.5 inches).",
          content: `Integer (int): Whole numbers
age = 25
count = -10
billion = 1_000_000_000  # underscores for readability

Float (float): Decimal numbers
price = 19.99
temperature = -3.5
pi = 3.14159
scientific = 1.5e-10  # scientific notation

Python automatically handles the type. You can check with type().`,
          codeExamples: [
            {
              id: "ch4-number-types",
              title: "Number Types",
              description: "Working with integers and floats",
              code: { python: "# Integers\nage = 25\nprint(f\"Age: {age}, type: {type(age).__name__}\")\n\n# Floats\nprice = 19.99\nprint(f\"Price: {price}, type: {type(price).__name__}\")\n\n# Operations\nresult = 10 / 3\nprint(f\"10 / 3 = {result}\")  # Always returns float" },
              explanation: "Division always returns a float in Python 3. Use // for floor division."
            }
          ]
        },
        {
          id: "ch4-arithmetic",
          title: "Arithmetic Operations",
          whyItMatters: "Arithmetic is the foundation of all computation in programming.",
          realWorldAnalogy: "Arithmetic operations are like basic math you learned in school, but now the computer does the calculations instantly.",
          content: `Basic Operators:
+ Addition
- Subtraction
* Multiplication
/ Division (always returns float)
// Floor division (integer result)
% Modulo (remainder)
** Exponentiation

Operator Precedence (PEMDAS):
1. Parentheses
2. Exponents
3. Multiplication/Division/Modulo (left to right)
4. Addition/Subtraction (left to right)`,
          codeExamples: [
            {
              id: "ch4-arithmetic",
              title: "Arithmetic Operations",
              description: "All arithmetic operators",
              code: { python: "a = 10\nb = 3\n\nprint(f\"Addition: {a} + {b} = {a + b}\")\nprint(f\"Subtraction: {a} - {b} = {a - b}\")\nprint(f\"Multiplication: {a} * {b} = {a * b}\")\nprint(f\"Division: {a} / {b} = {a / b}\")\nprint(f\"Floor division: {a} // {b} = {a // b}\")\nprint(f\"Modulo: {a} % {b} = {a % b}\")\nprint(f\"Exponent: {a} ** {b} = {a ** b}\")" },
              explanation: "Python follows standard mathematical precedence. Use parentheses to control order."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch4-ex1",
          title: "Basic Calculator",
          difficulty: 1,
          description: "Perform arithmetic operations.",
          requirements: [
            "Calculate 15 + 27",
            "Calculate 100 / 4",
            "Calculate 2 ** 8"
          ],
          starterCode: { python: "# Perform calculations\n\n" },
          hints: [
            "Use + for addition",
            "Use / for division",
            "Use ** for exponentiation"
          ],
          solution: { python: "print(15 + 27)\nprint(100 / 4)\nprint(2 ** 8)" },
          solutionExplanation: "Basic arithmetic operators work as expected. Division returns a float."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch4-q1",
            type: "mcq",
            question: "What does 10 // 3 return?",
            options: [
              "3.33",
              "3",
              "1",
              "Error"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "// is floor division, which returns the integer part of the division."
          },
          {
            id: "ch4-q2",
            type: "mcq",
            question: "What does 2 ** 3 equal?",
            options: [
              "6",
              "8",
              "9",
              "5"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "** is the exponentiation operator, so 2 ** 3 = 2 × 2 × 2 = 8."
          },
          {
            id: "ch4-q3",
            type: "mcq",
            question: "What does 10 % 3 return?",
            options: [
              "3.33",
              "3",
              "1",
              "0"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "% is the modulo operator, returning the remainder of division."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Division",
          value: "10 / 3 = 3.33"
        },
        {
          label: "Floor division",
          value: "10 // 3 = 3"
        },
        {
          label: "Power",
          value: "2 ** 3 = 8"
        },
        {
          label: "Modulo",
          value: "10 % 3 = 1"
        }
      ]
    },
    {
      id: "python-ch-5",
      number: 5,
      partLabel: "PART 1: ABSOLUTE PYTHON BASICS",
      title: "User Input and Output",
      subtitle: "Interact with users and format output",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 35,
      xpReward: 100,
      prerequisites: ["python-ch-4"],
      learningObjectives: [
        "Get user input with input()",
        "Format output with f-strings",
        "Use print() effectively",
        "Handle type conversion from input"
      ],
      sections: [
        {
          id: "ch5-input",
          title: "Getting User Input",
          whyItMatters: "Interactive programs need to get input from users to be useful.",
          realWorldAnalogy: "Input() is like asking someone a question and waiting for their answer before continuing.",
          content: `The input() function:
name = input("Enter your name: ")
# Program pauses and waits for user input
# Input is always returned as a string

Converting input:
age = int(input("Enter your age: "))
price = float(input("Enter price: "))

Always convert input to the type you need, since input() always returns strings.`,
          codeExamples: [
            {
              id: "ch5-input",
              title: "User Input",
              description: "Getting and converting input",
              code: { python: "# String input (default)\nname = input(\"Enter your name: \")\nprint(f\"Hello, {name}!\")\n\n# Integer input\nage = int(input(\"Enter your age: \"))\nprint(f\"In 10 years you will be {age + 10}\")\n\n# Float input\nprice = float(input(\"Enter price: \"))\ntax = price * 0.1\nprint(f\"Tax: ${tax:.2f}\")" },
              explanation: "input() always returns strings. Use int() or float() to convert to numbers."
            }
          ]
        },
        {
          id: "ch5-fstrings",
          title: "F-String Formatting",
          whyItMatters: "F-strings are the modern, readable way to format strings in Python.",
          realWorldAnalogy: "F-strings are like mad-libs where you fill in blanks with actual values.",
          content: `F-strings (Python 3.6+):
name = "Alice"
age = 25
print(f"Name: {name}, Age: {age}")

Format specifiers:
:f - float
:d - integer
:.2f - 2 decimal places
:>10 - right align in 10 spaces
:<10 - left align in 10 spaces
:^10 - center in 10 spaces`,
          codeExamples: [
            {
              id: "ch5-fstrings",
              title: "F-String Formatting",
              description: "Various formatting options",
              code: { python: "name = \"Alice\"\nage = 25\nprice = 19.99\n\nprint(f\"Name: {name}\")\nprint(f\"Age: {age}\")\nprint(f\"Price: ${price:.2f}\")\nprint(f\"Age in 5 years: {age + 5}\")\nprint(f\"Centered: {name:^20}\")" },
              explanation: "F-strings allow embedding expressions directly in strings with {} braces."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch5-ex1",
          title: "Interactive Greeting",
          difficulty: 1,
          description: "Create an interactive program that greets the user.",
          requirements: [
            "Ask for the user's name",
            "Ask for the user's age",
            "Print a personalized greeting with their age in 5 years"
          ],
          starterCode: { python: "# Get user input\n\n# Print greeting\n" },
          hints: [
            "Use input() to get user input",
            "Convert age to int() before doing math",
            "Use f-string for formatting"
          ],
          solution: { python: "name = input(\"Enter your name: \")\nage = int(input(\"Enter your age: \"))\nprint(f\"Hello {name}! In 5 years you will be {age + 5}.\")" },
          solutionExplanation: "input() gets string input, int() converts to integer, f-string formats the output."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch5-q1",
            type: "mcq",
            question: "What data type does input() return?",
            options: [
              "int",
              "float",
              "str",
              "bool"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "input() always returns a string, regardless of what the user types."
          },
          {
            id: "ch5-q2",
            type: "mcq",
            question: "How do you format a float to 2 decimal places?",
            options: [
              "{:.2d}",
              "{:.2f}",
              "{:2f}",
              "{:2.0f}"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "The format specifier :.2f formats a float to 2 decimal places."
          },
          {
            id: "ch5-q3",
            type: "true-false",
            question: "F-strings were introduced in Python 3.6.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "F-strings (formatted string literals) were introduced in Python 3.6 and are now the preferred way to format strings."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Get input",
          value: "name = input('Prompt: ')"
        },
        {
          label: "Convert to int",
          value: "age = int(input())"
        },
        {
          label: "F-string",
          value: "f\"Hello {name}\""
        },
        {
          label: "Format float",
          value: "f\"{price:.2f}\""
        }
      ]
    },
    {
      id: "python-ch-6",
      number: 6,
      partLabel: "PART 1: ABSOLUTE PYTHON BASICS",
      title: "Booleans and Comparisons",
      subtitle: "True, False, and making decisions",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 30,
      xpReward: 100,
      prerequisites: ["python-ch-5"],
      learningObjectives: [
        "Understand boolean values True and False",
        "Use comparison operators",
        "Understand logical operators (and, or, not)",
        "Use booleans in conditional logic"
      ],
      sections: [
        {
          id: "ch6-boolean-basics",
          title: "Boolean Values",
          whyItMatters: "Booleans are the foundation of decision-making in programs.",
          realWorldAnalogy: "Booleans are like light switches — they're either on (True) or off (False).",
          content: `Boolean Values:
is_active = True  # Capital T
is_complete = False  # Capital F

Comparison Operators:
== Equal to
!= Not equal to
> Greater than
< Less than
>= Greater than or equal to
<= Less than or equal to

Comparisons always return booleans:
5 > 3      # True
5 == 5     # True
5 != 3     # True
"hello" == "hello"  # True`,
          codeExamples: [
            {
              id: "ch6-boolean",
              title: "Boolean and Comparisons",
              description: "Using comparison operators",
              code: { python: "x = 5\ny = 10\n\nprint(f\"x > y: {x > y}\")\nprint(f\"x == y: {x == y}\")\nprint(f\"x != y: {x != y}\")\nprint(f\"x >= 5: {x >= 5}\")\n\n# String comparison\nprint(f\"'a' < 'b': {'a' < 'b'}\")" },
              explanation: "Comparison operators return boolean values. Strings are compared lexicographically."
            }
          ]
        },
        {
          id: "ch6-logical-operators",
          title: "Logical Operators",
          whyItMatters: "Logical operators let you combine multiple conditions.",
          realWorldAnalogy: "Logical operators are like combining rules: 'You must be 18 AND have an ID' vs 'You can pay with cash OR card'.",
          content: `Logical Operators:
and - Both must be True
or - At least one must be True
not - Reverses the value

Examples:
age = 25
has_id = True
age >= 18 and has_id  # True

is_weekend = True
is_holiday = False
is_weekend or is_holiday  # True

not True  # False
not False  # True

Short-circuit evaluation:
Python stops evaluating as soon as the result is determined.`,
          codeExamples: [
            {
              id: "ch6-logical",
              title: "Logical Operators",
              description: "Using and, or, not",
              code: { python: "age = 25\nhas_license = True\nis_sober = True\n\ncan_drive = age >= 18 and has_license and is_sober\nprint(f\"Can drive: {can_drive}\")\n\n# or example\nis_weekend = True\nhas_ticket = False\ncan_enter = is_weekend or has_ticket\nprint(f\"Can enter: {can_enter}\")\n\n# not example\nis_raining = True\nprint(f\"Not raining: {not is_raining}\")" },
              explanation: "and requires all conditions to be True. or requires at least one to be True. not reverses the boolean."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch6-ex1",
          title: "Age Check",
          difficulty: 1,
          description: "Check if a person can vote (age >= 18).",
          requirements: [
            "Get age as input",
            "Check if age >= 18",
            "Print whether they can vote"
          ],
          starterCode: { python: "age = int(input(\"Enter your age: \"))\n\n# Check and print\n" },
          hints: [
            "Use comparison operator >=",
            "Use if statement (you'll learn this in detail later)"
          ],
          solution: { python: "age = int(input(\"Enter your age: \"))\nif age >= 18:\n    print(\"You can vote!\")\nelse:\n    print(\"You cannot vote yet.\")" },
          solutionExplanation: "Comparison operators return booleans. if/else statements use booleans to make decisions."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch6-q1",
            type: "mcq",
            question: "What does True and False evaluate to?",
            options: [
              "True",
              "False",
              "Error",
              "None"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "and requires both operands to be True. Since one is False, the result is False."
          },
          {
            id: "ch6-q2",
            type: "mcq",
            question: "What does not True evaluate to?",
            options: [
              "True",
              "False",
              "Error",
              "None"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "not reverses the boolean value, so not True is False."
          },
          {
            id: "ch6-q3",
            type: "mcq",
            question: "Which operator checks for equality?",
            options: [
              "=",
              "==",
              "===",
              "!="
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "== is the equality operator. = is for assignment."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Equal",
          value: "x == y"
        },
        {
          label: "Not equal",
          value: "x != y"
        },
        {
          label: "Greater than",
          value: "x > y"
        },
        {
          label: "And",
          value: "x and y"
        },
        {
          label: "Or",
          value: "x or y"
        },
        {
          label: "Not",
          value: "not x"
        }
      ]
    },
    {
      id: "python-ch-7",
      number: 7,
      partLabel: "PART 1: ABSOLUTE PYTHON BASICS",
      title: "Conditional Statements",
      subtitle: "Making decisions with if/elif/else",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 40,
      xpReward: 100,
      prerequisites: ["python-ch-6"],
      learningObjectives: [
        "Use if statements for conditional execution",
        "Use elif for multiple conditions",
        "Use else for default behavior",
        "Understand indentation in Python"
      ],
      sections: [
        {
          id: "ch7-if-else",
          title: "if/else Statements",
          whyItMatters: "Conditionals let your program make decisions based on data.",
          realWorldAnalogy: "Conditionals are like traffic lights — if it's green, go; otherwise, stop.",
          content: `Basic if statement:
if condition:
    # code to run if condition is True

if/else:
if condition:
    # code if True
else:
    # code if False

if/elif/else:
if condition1:
    # code if condition1 is True
elif condition2:
    # code if condition2 is True
else:
    # code if all conditions are False

Indentation is crucial! Python uses indentation (4 spaces) to define code blocks.`,
          codeExamples: [
            {
              id: "ch7-if-else",
              title: "Conditional Statements",
              description: "if/elif/else examples",
              code: { python: "age = 25\n\nif age < 18:\n    print(\"Minor\")\nelif age < 65:\n    print(\"Adult\")\nelse:\n    print(\"Senior\")\n\n# Nested conditions\nscore = 85\nif score >= 90:\n    grade = \"A\"\nelif score >= 80:\n    grade = \"B\"\nelif score >= 70:\n    grade = \"C\"\nelse:\n    grade = \"F\"\nprint(f\"Grade: {grade}\")" },
              explanation: "if checks conditions in order. Only the first True condition executes. else is optional and runs if no conditions match."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch7-ex1",
          title: "Grade Calculator",
          difficulty: 1,
          description: "Calculate letter grade from numeric score.",
          requirements: [
            "Get score as input",
            "90-100: A, 80-89: B, 70-79: C, 60-69: D, below 60: F",
            "Print the letter grade"
          ],
          starterCode: { python: "score = int(input(\"Enter score (0-100): \"))\n\n# Determine grade\n" },
          hints: [
            "Use if/elif/else chain",
            "Check conditions in descending order (90+, then 80+, etc.)"
          ],
          solution: { python: "score = int(input(\"Enter score (0-100): \"))\n\nif score >= 90:\n    grade = \"A\"\nelif score >= 80:\n    grade = \"B\"\nelif score >= 70:\n    grade = \"C\"\nelif score >= 60:\n    grade = \"D\"\nelse:\n    grade = \"F\"\n\nprint(f\"Grade: {grade}\")" },
          solutionExplanation: "Check conditions in order. Once a condition is True, that block executes and the rest are skipped."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch7-q1",
            type: "mcq",
            question: "What happens if no if/elif condition is True and there's no else?",
            options: [
              "Error",
              "Nothing executes",
              "First condition runs",
              "Last condition runs"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "If no condition matches and there's no else, nothing executes and the program continues."
          },
          {
            id: "ch7-q2",
            type: "true-false",
            question: "Python uses curly braces {} for code blocks.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "Python uses indentation (spaces or tabs) to define code blocks, not curly braces."
          },
          {
            id: "ch7-q3",
            type: "mcq",
            question: "How many elif blocks can you have?",
            options: [
              "Only one",
              "Only two",
              "As many as you want",
              "None"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "You can have as many elif blocks as needed to check multiple conditions."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "if statement",
          value: "if condition:\n    code"
        },
        {
          label: "if/else",
          value: "if condition:\n    code\nelse:\n    code"
        },
        {
          label: "if/elif/else",
          value: "if c1:\n    code\nelif c2:\n    code\nelse:\n    code"
        }
      ]
    },
    {
      id: "python-ch-8",
      number: 8,
      partLabel: "PART 1: ABSOLUTE PYTHON BASICS",
      title: "Match Statement",
      subtitle: "Pattern matching in Python 3.10+",
      difficulty: "Beginner",
      estimatedMinutes: 30,
      xpReward: 100,
      prerequisites: ["python-ch-7"],
      learningObjectives: [
        "Use match for pattern matching",
        "Match against specific values",
        "Use wildcards in match",
        "Understand when to use match vs if/elif"
      ],
      sections: [
        {
          id: "ch8-match-basics",
          title: "Match Statement",
          whyItMatters: "Match provides a cleaner way to handle multiple conditions than long if/elif chains.",
          realWorldAnalogy: "Match is like a switchboard operator connecting calls to the right line based on the number dialed.",
          content: `Match statement (Python 3.10+):

status = "active"

match status:
    case "active":
        print("User is active")
    case "inactive":
        print("User is inactive")
    case _:
        print("Unknown status")

The underscore _ is a wildcard that matches anything.

Match vs if/elif:
- Match is cleaner for matching specific values
- if/elif is better for complex conditions
- Match can do pattern matching (advanced feature)`,
          codeExamples: [
            {
              id: "ch8-match",
              title: "Match Statement",
              description: "Using match for value matching",
              code: { python: "day = \"Monday\"\n\nmatch day:\n    case \"Monday\":\n        print(\"Start of work week\")\n    case \"Friday\":\n        print(\"End of work week\")\n    case \"Saturday\" | \"Sunday\":\n        print(\"Weekend!\")\n    case _:\n        print(\"Regular day\")" },
              explanation: "Match checks the value against each case. Use | to match multiple values, _ as wildcard."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch8-ex1",
          title: "Day Classifier",
          difficulty: 1,
          description: "Classify day as weekday or weekend using match.",
          requirements: [
            "Get day name as input",
            "Use match to classify",
            "Saturday/Sunday = weekend, others = weekday"
          ],
          starterCode: { python: "day = input(\"Enter day name: \")\n\nmatch day:\n    # Add cases\n" },
          hints: [
            "Use case for Saturday and Sunday",
            "Use _ as wildcard for other days"
          ],
          solution: { python: "day = input(\"Enter day name: \")\n\nmatch day:\n    case \"Saturday\" | \"Sunday\":\n        print(\"Weekend\")\n    case _:\n        print(\"Weekday\")" },
          solutionExplanation: "Match with | can match multiple values. _ is the wildcard that matches anything else."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch8-q1",
            type: "mcq",
            question: "What Python version introduced match?",
            options: [
              "3.8",
              "3.9",
              "3.10",
              "3.11"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "The match statement was introduced in Python 3.10 as part of structural pattern matching."
          },
          {
            id: "ch8-q2",
            type: "mcq",
            question: "What does the underscore _ match in a match statement?",
            options: [
              "Only numbers",
              "Only strings",
              "Anything (wildcard)",
              "Nothing"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "The underscore _ is a wildcard that matches any value, similar to else in if/elif/else."
          },
          {
            id: "ch8-q3",
            type: "true-false",
            question: "Match can replace all if/elif statements.",
            correctAnswer: false,
            difficulty: 2,
            explanation: "Match is great for value matching but if/elif is better for complex conditions with comparisons."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Match syntax",
          value: "match value:\n    case pattern:\n        code"
        },
        {
          label: "Multiple cases",
          value: "case \"A\" | \"B\":"
        },
        {
          label: "Wildcard",
          value: "case _:"
        }
      ]
    },
    {
      id: "python-ch-9",
      number: 9,
      partLabel: "PART 1: ABSOLUTE PYTHON BASICS",
      title: "Loops — for and while",
      subtitle: "Repeat code efficiently",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 45,
      xpReward: 100,
      prerequisites: ["python-ch-8"],
      learningObjectives: [
        "Use for loops to iterate over sequences",
        "Use while loops for conditional repetition",
        "Use range() with for loops",
        "Understand loop control (break, continue)"
      ],
      sections: [
        {
          id: "ch9-for-loops",
          title: "For Loops",
          whyItMatters: "Loops let you repeat code without writing it multiple times.",
          realWorldAnalogy: "A for loop is like processing items on a conveyor belt — each item gets the same treatment.",
          content: `For loop with range():
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

range(start, stop, step):
range(5)       # 0, 1, 2, 3, 4
range(1, 6)    # 1, 2, 3, 4, 5
range(0, 10, 2) # 0, 2, 4, 6, 8

For loop over list:
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

For loop with enumerate:
for index, value in enumerate(fruits):
    print(f"{index}: {value}")`,
          codeExamples: [
            {
              id: "ch9-for",
              title: "For Loops",
              description: "Various for loop patterns",
              code: { python: "# Range\nfor i in range(5):\n    print(f\"Number: {i}\")\n\n# Range with step\nfor i in range(0, 10, 2):\n    print(f\"Even: {i}\")\n\n# Over list\nfruits = [\"apple\", \"banana\"]\nfor fruit in fruits:\n    print(f\"Fruit: {fruit}\")\n\n# With enumerate\nfor i, fruit in enumerate(fruits):\n    print(f\"{i}: {fruit}\")" },
              explanation: "for loops iterate over sequences. range() generates numbers, enumerate() gives index and value."
            }
          ]
        },
        {
          id: "ch9-while-loops",
          title: "While Loops",
          whyItMatters: "While loops repeat code as long as a condition is True.",
          realWorldAnalogy: "A while loop is like waiting for a bus — you keep waiting until the bus (condition) arrives.",
          content: `While loop:
count = 0
while count < 5:
    print(count)
    count += 1

Infinite loops:
Be careful! If the condition never becomes False, the loop runs forever.
Always ensure the loop has an exit condition.

When to use while vs for:
- for: When you know how many iterations
- while: When you don't know (waiting for condition)`,
          codeExamples: [
            {
              id: "ch9-while",
              title: "While Loops",
              description: "While loop patterns",
              code: { python: "# Basic while loop\ncount = 0\nwhile count < 5:\n    print(f\"Count: {count}\")\n    count += 1\n\n# While with user input\nwhile True:\n    response = input(\"Type 'quit' to exit: \")\n    if response == 'quit':\n        break\n    print(f\"You said: {response}\")" },
              explanation: "While loops continue as long as the condition is True. Use break to exit the loop."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch9-ex1",
          title: "Sum Numbers",
          difficulty: 1,
          description: "Calculate sum of numbers from 1 to 100.",
          requirements: [
            "Use a for loop with range()",
            "Calculate sum",
            "Print the result"
          ],
          starterCode: { python: "total = 0\n\nfor i in range(1, 101):\n    # Add to total\n\nprint(total)" },
          hints: [
            "Use += to add to total",
            "range(1, 101) gives 1 to 100"
          ],
          solution: { python: "total = 0\n\nfor i in range(1, 101):\n    total += i\n\nprint(f\"Sum: {total}\")" },
          solutionExplanation: "Accumulate values by adding each number to total in the loop."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch9-q1",
            type: "mcq",
            question: "What does range(5) produce?",
            options: [
              "1, 2, 3, 4, 5",
              "0, 1, 2, 3, 4",
              "0, 1, 2, 3, 4, 5",
              "5, 4, 3, 2, 1"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "range(5) produces 0 to 4 (5 numbers, starting at 0, excluding the stop value)."
          },
          {
            id: "ch9-q2",
            type: "mcq",
            question: "What keyword exits a loop immediately?",
            options: [
              "stop",
              "exit",
              "break",
              "return"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "break exits the loop immediately. continue skips to the next iteration."
          },
          {
            id: "ch9-q3",
            type: "true-false",
            question: "While loops are better when you know the exact number of iterations.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "for loops are better when you know the iteration count. while loops are for unknown/unbounded iterations."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "For loop",
          value: "for i in range(5):"
        },
        {
          label: "While loop",
          value: "while condition:"
        },
        {
          label: "Break",
          value: "break"
        },
        {
          label: "Continue",
          value: "continue"
        },
        {
          label: "Enumerate",
          value: "for i, v in enumerate(lst):"
        }
      ]
    },
    {
      id: "python-ch-10",
      number: 10,
      partLabel: "PART 1: ABSOLUTE PYTHON BASICS",
      title: "Loop Control",
      subtitle: "break, continue, pass, and else",
      difficulty: "Beginner",
      estimatedMinutes: 30,
      xpReward: 100,
      prerequisites: ["python-ch-9"],
      learningObjectives: [
        "Use break to exit loops",
        "Use continue to skip iterations",
        "Use pass as a placeholder",
        "Use else clause with loops"
      ],
      sections: [
        {
          id: "ch10-loop-control",
          title: "Break and Continue",
          whyItMatters: "Loop control gives you fine-grained control over loop execution.",
          realWorldAnalogy: "Break is like an emergency exit, continue is like skipping a song in a playlist.",
          content: `break - Exit the loop immediately:
for i in range(10):
    if i == 5:
        break
    print(i)  # Only prints 0-4

continue - Skip to next iteration:
for i in range(5):
    if i == 2:
        continue
    print(i)  # Prints 0, 1, 3, 4

pass - Do nothing (placeholder):
for i in range(5):
    pass  # Valid but does nothing

else clause with loops:
for i in range(5):
    print(i)
else:
    print("Loop completed normally")
else doesn't run if loop was broken out of.`,
          codeExamples: [
            {
              id: "ch10-control",
              title: "Loop Control",
              description: "break, continue, pass, else",
              code: { python: "# Break example\nprint(\"Break example:\")\nfor i in range(10):\n    if i == 5:\n        break\n    print(i)\n\n# Continue example\nprint(\"\\nContinue example:\")\nfor i in range(5):\n    if i == 2:\n        continue\n    print(i)\n\n# Else clause\nprint(\"\\nElse clause:\")\nfor i in range(3):\n    print(i)\nelse:\n    print(\"Loop finished normally\")" },
              explanation: "break exits immediately, continue skips to next iteration, else runs if loop completes normally."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch10-ex1",
          title: "Find First Even",
          difficulty: 1,
          description: "Find and print the first even number in a loop.",
          requirements: [
            "Loop from 1 to 20",
            "Break when you find the first even number",
            "Print the number"
          ],
          starterCode: { python: "for i in range(1, 21):\n    # Check if even and break\n" },
          hints: [
            "Use i % 2 == 0 to check if even",
            "Use break to exit the loop when found"
          ],
          solution: { python: "for i in range(1, 21):\n    if i % 2 == 0:\n        print(f\"First even: {i}\")\n        break" },
          solutionExplanation: "Check each number with modulo operator. Break exits immediately when condition is met."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch10-q1",
            type: "mcq",
            question: "What does continue do in a loop?",
            options: [
              "Exits the loop",
              "Skips to next iteration",
              "Does nothing",
              "Restarts the loop"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "continue skips the rest of the current iteration and moves to the next iteration."
          },
          {
            id: "ch10-q2",
            type: "mcq",
            question: "When does a loop's else clause NOT execute?",
            options: [
              "When loop runs 0 times",
              "When loop is broken out of",
              "When loop completes normally",
              "Always executes"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "The else clause doesn't execute if the loop was broken out of with break."
          },
          {
            id: "ch10-q3",
            type: "mcq",
            question: "What does pass do?",
            options: [
              "Exits the loop",
              "Skips iteration",
              "Does nothing (placeholder)",
              "Raises an error"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "pass is a null operation - it does nothing. It's used as a placeholder when code is required syntactically."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Break",
          value: "break"
        },
        {
          label: "Continue",
          value: "continue"
        },
        {
          label: "Pass",
          value: "pass"
        },
        {
          label: "Loop else",
          value: "for/else:"
        }
      ]
    },
    {
      id: "python-ch-11",
      number: 11,
      partLabel: "PART 1: ABSOLUTE PYTHON BASICS",
      title: "Functions — Part 1",
      subtitle: "Basics, parameters, and return",
      difficulty: "Absolute Beginner",
      estimatedMinutes: 45,
      xpReward: 100,
      prerequisites: ["python-ch-10"],
      learningObjectives: [
        "Define functions with def",
        "Pass parameters to functions",
        "Return values from functions",
        "Understand function scope"
      ],
      sections: [
        {
          id: "ch11-function-basics",
          title: "Defining Functions",
          whyItMatters: "Functions let you reuse code and organize your programs logically.",
          realWorldAnalogy: "Functions are like recipes — you define the steps once, then use (call) the recipe whenever you need it.",
          content: `Defining a function:
def greet(name):
    return f"Hello, {name}!"

Calling a function:
message = greet("Alice")
print(message)  # "Hello, Alice!"

Function parameters:
def add(a, b):
    return a + b

result = add(5, 3)  # 8

Default parameters:
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))  # "Hello, Alice!"
print(greet("Alice", "Hi"))  # "Hi, Alice!"

Return statement:
- Returns a value from the function
- Exits the function
- If no return, returns None`,
          codeExamples: [
            {
              id: "ch11-functions",
              title: "Function Basics",
              description: "Defining and calling functions",
              code: { python: "# Simple function\ndef greet(name):\n    return f\"Hello, {name}!\"\n\nprint(greet(\"Alice\"))\n\n# Function with default parameter\ndef power(base, exponent=2):\n    return base ** exponent\n\nprint(power(3))      # 9\nprint(power(3, 3))  # 27" },
              explanation: "def defines functions. Parameters are inputs. return sends values back. Default parameters provide fallbacks."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch11-ex1",
          title: "Area Calculator",
          difficulty: 1,
          description: "Create a function to calculate rectangle area.",
          requirements: [
            "Define function area(length, width)",
            "Return length * width",
            "Call function with test values"
          ],
          starterCode: { python: "def area(length, width):\n    # Return area\n\n# Test\nprint(area(5, 3))" },
          hints: [
            "Multiply length by width",
            "Use return to send result back"
          ],
          solution: { python: "def area(length, width):\n    return length * width\n\nprint(area(5, 3))  # 15" },
          solutionExplanation: "Functions encapsulate reusable logic. return sends the calculated value back to the caller."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch11-q1",
            type: "mcq",
            question: "What keyword defines a function?",
            options: [
              "function",
              "def",
              "fn",
              "define"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "def is the keyword to define a function in Python."
          },
          {
            id: "ch11-q2",
            type: "mcq",
            question: "What does a function return if no return statement?",
            options: [
              "0",
              "True",
              "None",
              "Error"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "Functions without an explicit return statement return None by default."
          },
          {
            id: "ch11-q3",
            type: "true-false",
            question: "Functions can have multiple return statements.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "Functions can have multiple return statements, but only one will execute (the first one reached)."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Define function",
          value: "def name(params):"
        },
        {
          label: "Return",
          value: "return value"
        },
        {
          label: "Default param",
          value: "def func(param=default):"
        },
        {
          label: "Call function",
          value: "func(arg)"
        }
      ]
    },
    {
      id: "python-ch-12",
      number: 12,
      partLabel: "PART 1: ABSOLUTE PYTHON BASICS",
      title: "Functions — Part 2",
      subtitle: "Default args, *args, **kwargs, scope",
      difficulty: "Beginner",
      estimatedMinutes: 50,
      xpReward: 100,
      prerequisites: ["python-ch-11"],
      learningObjectives: [
        "Use *args for variable positional arguments",
        "Use **kwargs for variable keyword arguments",
        "Understand variable scope",
        "Use lambda for anonymous functions"
      ],
      sections: [
        {
          id: "ch12-advanced-params",
          title: "Advanced Function Parameters",
          whyItMatters: "Advanced parameters make functions flexible and reusable.",
          realWorldAnalogy: "*args is like accepting any number of items in a box, **kwargs is like accepting labeled items.",
          content: `*args - Variable positional arguments:
def add_all(*numbers):
    return sum(numbers)

print(add_all(1, 2, 3))        # 6
print(add_all(1, 2, 3, 4, 5))  # 15

**kwargs - Variable keyword arguments:
def print_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25, city="NYC")

Combining parameters:
def func(a, b, *args, **kwargs):
    print(f"a: {a}, b: {b}")
    print(f"args: {args}")
    print(f"kwargs: {kwargs}")

Lambda functions:
square = lambda x: x ** 2
print(square(5))  # 25`,
          codeExamples: [
            {
              id: "ch12-advanced",
              title: "Advanced Parameters",
              description: "*args, **kwargs, lambda",
              code: { python: "# *args\ndef add_all(*numbers):\n    return sum(numbers)\n\nprint(add_all(1, 2, 3, 4))\n\n# **kwargs\ndef print_info(**info):\n    for key, value in info.items():\n        print(f\"{key}: {value}\")\n\nprint_info(name=\"Alice\", age=25)\n\n# lambda\nsquare = lambda x: x ** 2\nprint(square(5))" },
              explanation: "*args collects extra positional args into a tuple. **kwargs collects extra keyword args into a dict. lambda creates anonymous functions."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch12-ex1",
          title: "Flexible Sum",
          difficulty: 1,
          description: "Create a function that sums any number of arguments.",
          requirements: [
            "Use *args to accept any number of arguments",
            "Return the sum",
            "Test with different numbers of arguments"
          ],
          starterCode: { python: "def sum_all(*numbers):\n    # Return sum\n\nprint(sum_all(1, 2, 3))\nprint(sum_all(10, 20, 30, 40))" },
          hints: [
            "Use sum() function on the args tuple",
            "*numbers collects all arguments into a tuple"
          ],
          solution: { python: "def sum_all(*numbers):\n    return sum(numbers)\n\nprint(sum_all(1, 2, 3))\nprint(sum_all(10, 20, 30, 40))" },
          solutionExplanation: "*args collects all positional arguments into a tuple, which you can then iterate or pass to functions like sum()."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch12-q1",
            type: "mcq",
            question: "What does *args collect?",
            options: [
              "Keyword arguments",
              "Positional arguments",
              "Functions",
              "Classes"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "*args collects extra positional arguments into a tuple."
          },
          {
            id: "ch12-q2",
            type: "mcq",
            question: "What does **kwargs collect?",
            options: [
              "Positional arguments",
              "Keyword arguments",
              "Lists",
              "Tuples"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "**kwargs collects extra keyword arguments into a dictionary."
          },
          {
            id: "ch12-q3",
            type: "mcq",
            question: "What keyword creates an anonymous function?",
            options: [
              "def",
              "function",
              "lambda",
              "anon"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "lambda creates anonymous (unnamed) functions in Python."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "*args",
          value: "def func(*args):"
        },
        {
          label: "**kwargs",
          value: "def func(**kwargs):"
        },
        {
          label: "Lambda",
          value: "lambda x: x * 2"
        },
        {
          label: "Scope",
          value: "Local vs global variables"
        }
      ]
    },
    {
      id: "python-ch-13",
      number: 13,
      partLabel: "PART 2: DATA STRUCTURES",
      title: "Lists — Complete Guide",
      subtitle: "Master Python's most versatile data structure",
      difficulty: "Beginner",
      estimatedMinutes: 60,
      xpReward: 120,
      prerequisites: ["python-ch-12"],
      learningObjectives: [
        "Create and modify lists",
        "Use list methods effectively",
        "Slice lists",
        "Use list comprehensions"
      ],
      sections: [
        {
          id: "ch13-list-basics",
          title: "Creating and Accessing Lists",
          whyItMatters: "Lists are Python's most used data structure for storing ordered collections of items.",
          realWorldAnalogy: "A list is like a backpack where you can store multiple items and access them in the order you packed them.",
          content: `Creating lists:
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]

Accessing elements (0-indexed):
fruits[0]  # "apple"
fruits[-1] # "cherry" (last element)

Slicing:
fruits[0:2]   # ["apple", "banana"]
fruits[1:]    # ["banana", "cherry"]
fruits[:2]    # ["apple", "banana"]
fruits[::-1]  # Reverse list`,
          codeExamples: [
            {
              id: "ch13-list-basics",
              title: "List Basics",
              description: "Creating and accessing lists",
              code: { python: "fruits = [\"apple\", \"banana\", \"cherry\"]\n\n# Accessing\nprint(f\"First: {fruits[0]}\")\nprint(f\"Last: {fruits[-1]}\")\n\n# Slicing\nprint(f\"First two: {fruits[:2]}\")\nprint(f\"Last two: {fruits[-2:]}\")\nprint(f\"Reverse: {fruits[::-1]}\")" },
              explanation: "Lists are ordered, mutable sequences. Slicing uses [start:stop:step] syntax."
            }
          ]
        },
        {
          id: "ch13-list-methods",
          title: "List Methods",
          whyItMatters: "List methods provide powerful operations for manipulating list contents.",
          realWorldAnalogy: "List methods are like tools for organizing your backpack — add items, remove items, find things, etc.",
          content: `Common list methods:
append(x)     - Add to end
insert(i, x)   - Insert at index
remove(x)      - Remove first occurrence
pop()          - Remove and return last
pop(i)         - Remove and return at index
clear()        - Remove all items
index(x)       - Find index of value
count(x)       - Count occurrences
sort()         - Sort in place
reverse()      - Reverse in place`,
          codeExamples: [
            {
              id: "ch13-methods",
              title: "List Methods",
              description: "Using common list methods",
              code: { python: "numbers = [3, 1, 4, 1, 5]\n\n# Modifying\nnumbers.append(9)\nprint(f\"After append: {numbers}\")\n\nnumbers.insert(0, 0)\nprint(f\"After insert: {numbers}\")\n\nnumbers.remove(1)\nprint(f\"After remove: {numbers}\")\n\n# Information\nprint(f\"Index of 4: {numbers.index(4)}\")\nprint(f\"Count of 1: {numbers.count(1)}\")\n\n# Sorting\nnumbers.sort()\nprint(f\"Sorted: {numbers}\")" },
              explanation: "List methods modify the list in place (except index() and count() which just return values)."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch13-ex1",
          title: "List Operations",
          difficulty: 1,
          description: "Practice list manipulation.",
          requirements: [
            "Create a list with 5 numbers",
            "Add a number to the end",
            "Remove the first element",
            "Sort the list"
          ],
          starterCode: { python: "numbers = [5, 2, 8, 1, 9]\n\n# Add number\n\n# Remove first\n\n# Sort\nprint(numbers)" },
          hints: [
            "Use append() to add",
            "Use pop(0) to remove first",
            "Use sort() to sort"
          ],
          solution: { python: "numbers = [5, 2, 8, 1, 9]\nnumbers.append(3)\nnumbers.pop(0)\nnumbers.sort()\nprint(numbers)" },
          solutionExplanation: "append() adds to end, pop(0) removes first element, sort() sorts in ascending order."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch13-q1",
            type: "mcq",
            question: "What does list[-1] return?",
            options: [
              "First element",
              "Last element",
              "Error",
              "Empty string"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Negative indices count from the end. -1 is the last element."
          },
          {
            id: "ch13-q2",
            type: "mcq",
            question: "What does list.append(x) do?",
            options: [
              "Adds x to beginning",
              "Adds x to end",
              "Removes x",
              "Returns x"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "append() adds an element to the end of the list."
          },
          {
            id: "ch13-q3",
            type: "mcq",
            question: "What does list.pop() return?",
            options: [
              "First element",
              "Last element",
              "None",
              "Index"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "pop() without arguments removes and returns the last element."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Create",
          value: "lst = [1, 2, 3]"
        },
        {
          label: "Append",
          value: "lst.append(x)"
        },
        {
          label: "Remove",
          value: "lst.remove(x)"
        },
        {
          label: "Pop",
          value: "lst.pop()"
        },
        {
          label: "Slice",
          value: "lst[0:2]"
        },
        {
          label: "Sort",
          value: "lst.sort()"
        }
      ]
    },
    {
      id: "python-ch-14",
      number: 14,
      partLabel: "PART 2: DATA STRUCTURES",
      title: "Tuples — Complete Guide",
      subtitle: "Immutable sequences for fixed data",
      difficulty: "Beginner",
      estimatedMinutes: 35,
      xpReward: 100,
      prerequisites: ["python-ch-13"],
      learningObjectives: [
        "Create and use tuples",
        "Understand tuple immutability",
        "Use tuple unpacking",
        "Know when to use tuples vs lists"
      ],
      sections: [
        {
          id: "ch14-tuple-basics",
          title: "Creating Tuples",
          whyItMatters: "Tuples are immutable sequences, perfect for data that shouldn't change.",
          realWorldAnalogy: "A tuple is like a sealed package — once packed, you can't change what's inside.",
          content: `Creating tuples:
coords = (23.7, 90.4)
rgb = (255, 128, 0)
single = (42,)  # Note trailing comma for single element

Accessing tuples (same as lists):
coords[0]  # 23.7
coords[-1] # 90.4

Tuple immutability:
t = (1, 2, 3)
t[0] = 5  # ERROR! Tuples cannot be modified

Why use tuples:
- Faster than lists
- Hashable (can be dictionary keys)
- Data integrity (can't accidentally change)`,
          codeExamples: [
            {
              id: "ch14-tuple-basics",
              title: "Tuple Basics",
              description: "Creating and using tuples",
              code: { python: "coords = (23.7, 90.4)\nrgb = (255, 128, 0)\nsingle = (42,)  # Single element needs comma\n\nprint(f\"Coords: {coords}\")\nprint(f\"RGB: {rgb}\")\nprint(f\"Single: {single}\")\n\n# Accessing\nprint(f\"First coord: {coords[0]}\")" },
              explanation: "Tuples use parentheses. Single-element tuples need a trailing comma to distinguish from parentheses."
            }
          ]
        },
        {
          id: "ch14-tuple-unpacking",
          title: "Tuple Unpacking",
          whyItMatters: "Unpacking lets you assign tuple elements to variables in one line.",
          realWorldAnalogy: "Unpacking is like opening a package and putting each item in its designated place.",
          content: `Basic unpacking:
name, age = ("Alice", 25)
# name = "Alice", age = 25

Extended unpacking:
first, *rest = [1, 2, 3, 4, 5]
# first = 1, rest = [2, 3, 4, 5]

Swapping with tuples:
a, b = 5, 10
a, b = b, a  # Swap without temp variable

Tuple to list conversion:
t = (1, 2, 3)
lst = list(t)  # [1, 2, 3]`,
          codeExamples: [
            {
              id: "ch14-unpacking",
              title: "Tuple Unpacking",
              description: "Various unpacking patterns",
              code: { python: "# Basic unpacking\nname, age = (\"Alice\", 25)\nprint(f\"Name: {name}, Age: {age}\")\n\n# Extended unpacking\nfirst, *middle, last = [1, 2, 3, 4, 5]\nprint(f\"First: {first}, Middle: {middle}, Last: {last}\")\n\n# Swap trick\nx, y = 5, 10\nx, y = y, x\nprint(f\"Swapped: x={x}, y={y}\")" },
              explanation: "Unpacking assigns tuple elements to variables. Extended unpacking with * captures remaining elements."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch14-ex1",
          title: "Tuple Practice",
          difficulty: 1,
          description: "Create and unpack tuples.",
          requirements: [
            "Create a tuple with name, age, city",
            "Unpack into three variables",
            "Print each variable"
          ],
          starterCode: { python: "person = (\"Alice\", 25, \"NYC\")\n\n# Unpack\n\n# Print" },
          hints: [
            "Use name, age, city = person",
            "Print each variable"
          ],
          solution: { python: "person = (\"Alice\", 25, \"NYC\")\nname, age, city = person\nprint(f\"Name: {name}\")\nprint(f\"Age: {age}\")\nprint(f\"City: {city}\")" },
          solutionExplanation: "Tuple unpacking assigns each element to a variable in order."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch14-q1",
            type: "mcq",
            question: "How do you create a single-element tuple?",
            options: [
              "(42)",
              "(42,)",
              "[42]",
              "tuple(42)"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Single-element tuples need a trailing comma to distinguish from parentheses."
          },
          {
            id: "ch14-q2",
            type: "true-false",
            question: "Tuples are mutable.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "Tuples are immutable - they cannot be modified after creation."
          },
          {
            id: "ch14-q3",
            type: "mcq",
            question: "Can tuples be dictionary keys?",
            options: [
              "Yes",
              "No",
              "Only if they contain numbers",
              "Only if they're empty"
            ],
            correctAnswer: 0,
            difficulty: 1,
            explanation: "Tuples are hashable and can be used as dictionary keys. Lists cannot."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Create",
          value: "t = (1, 2, 3)"
        },
        {
          label: "Single element",
          value: "t = (42,)"
        },
        {
          label: "Unpack",
          value: "a, b = t"
        },
        {
          label: "To list",
          value: "list(t)"
        }
      ]
    },
    {
      id: "python-ch-15",
      number: 15,
      partLabel: "PART 2: DATA STRUCTURES",
      title: "Dictionaries — Complete Guide",
      subtitle: "Key-value pairs for structured data",
      difficulty: "Beginner",
      estimatedMinutes: 50,
      xpReward: 110,
      prerequisites: ["python-ch-14"],
      learningObjectives: [
        "Create and use dictionaries",
        "Access and modify dictionary values",
        "Use dictionary methods",
        "Iterate over dictionaries"
      ],
      sections: [
        {
          id: "ch15-dict-basics",
          title: "Creating Dictionaries",
          whyItMatters: "Dictionaries are essential for storing structured data as key-value pairs.",
          realWorldAnalogy: "A dictionary is like a real dictionary — you look up a word (key) to find its definition (value).",
          content: `Creating dictionaries:
person = {"name": "Alice", "age": 25}
empty = {}
nested = {"person": {"name": "Alice"}, "scores": [90, 85]}

Accessing values:
person["name"]      # "Alice"
person.get("name") # "Alice"
person.get("job", "Unknown")  # "Unknown" (default)

Adding/updating:
person["city"] = "NYC"  # Add
person["age"] = 26     # Update

Deleting:
del person["age"]  # Remove key
person.pop("city")  # Remove and return`,
          codeExamples: [
            {
              id: "ch15-dict-basics",
              title: "Dictionary Basics",
              description: "Creating and using dictionaries",
              code: { python: "person = {\"name\": \"Alice\", \"age\": 25}\n\n# Accessing\nprint(f\"Name: {person['name']}\")\nprint(f\"Age: {person.get('age')}\")\nprint(f\"Job: {person.get('job', 'Unknown')}\")\n\n# Modifying\nperson[\"city\"] = \"NYC\"\nperson[\"age\"] = 26\nprint(f\"Updated: {person}\")\n\n# Deleting\ndel person[\"age\"]\nprint(f\"After delete: {person}\")" },
              explanation: "Dictionaries use {} with key:value pairs. Use [] for access, .get() with default for safe access."
            }
          ]
        },
        {
          id: "ch15-dict-methods",
          title: "Dictionary Methods",
          whyItMatters: "Dictionary methods provide efficient ways to manipulate and query dictionaries.",
          realWorldAnalogy: "Dictionary methods are like having tools to quickly find, count, or organize information in your dictionary.",
          content: `Common dictionary methods:
keys()    - Return all keys
values()  - Return all values
items()   - Return all key-value pairs
get(key, default) - Safe access with default
pop(key, default) - Remove and return
update(dict) - Merge another dict
clear()   - Remove all items

Checking existence:
"key" in my_dict  # True if key exists

Iterating:
for key in dict:
for key, value in dict.items():`,
          codeExamples: [
            {
              id: "ch15-methods",
              title: "Dictionary Methods",
              description: "Using dictionary methods",
              code: { python: "person = {\"name\": \"Alice\", \"age\": 25, \"city\": \"NYC\"}\n\n# Views\nprint(f\"Keys: {list(person.keys())}\")\nprint(f\"Values: {list(person.values())}\")\nprint(f\"Items: {list(person.items())}\")\n\n# Checking\nprint(f\"Has 'name': {'name' in person}\")\n\n# Iterating\nfor key, value in person.items():\n    print(f\"{key}: {value}\")" },
              explanation: "keys(), values(), items() return view objects. Convert to list() to see all values at once."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch15-ex1",
          title: "Dictionary Operations",
          difficulty: 1,
          description: "Practice dictionary manipulation.",
          requirements: [
            "Create a dictionary with name, age, city",
            "Add a new key-value pair",
            "Update an existing value",
            "Print all keys"
          ],
          starterCode: { python: "person = {\"name\": \"Alice\", \"age\": 25}\n\n# Add city\n\n# Update age\n\n# Print keys" },
          hints: [
            "Use person['key'] = value to add/update",
            "Use person.keys() to get keys"
          ],
          solution: { python: "person = {\"name\": \"Alice\", \"age\": 25}\nperson[\"city\"] = \"NYC\"\nperson[\"age\"] = 26\nprint(list(person.keys()))" },
          solutionExplanation: "Use bracket notation to add or update. keys() returns all keys in the dictionary."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch15-q1",
            type: "mcq",
            question: "How do you safely access a dictionary key with a default?",
            options: [
              "dict[key]",
              "dict.get(key, default)",
              "dict.key",
              "dict.find(key)"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: ".get() returns the value if key exists, or the default if not."
          },
          {
            id: "ch15-q2",
            type: "mcq",
            question: "What does dict.items() return?",
            options: [
              "Only keys",
              "Only values",
              "Key-value pairs",
              "Dictionary length"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "items() returns a view of key-value pairs as tuples."
          },
          {
            id: "ch15-q3",
            type: "true-false",
            question: "Dictionary keys must be unique.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "Dictionary keys must be unique. Duplicate keys will overwrite previous values."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Create",
          value: "d = {'key': 'value'}"
        },
        {
          label: "Access",
          value: "d['key'] or d.get('key')"
        },
        {
          label: "Add/Update",
          value: "d['key'] = value"
        },
        {
          label: "Keys",
          value: "d.keys()"
        },
        {
          label: "Items",
          value: "d.items()"
        }
      ]
    },
    {
      id: "python-ch-16",
      number: 16,
      partLabel: "PART 2: DATA STRUCTURES",
      title: "Sets — Complete Guide",
      subtitle: "Unordered collections of unique values",
      difficulty: "Beginner",
      estimatedMinutes: 35,
      xpReward: 100,
      prerequisites: ["python-ch-15"],
      learningObjectives: [
        "Create and use sets",
        "Perform set operations",
        "Use set methods",
        "Understand when to use sets"
      ],
      sections: [
        {
          id: "ch16-set-basics",
          title: "Creating Sets",
          whyItMatters: "Sets are perfect for storing unique values and performing mathematical set operations.",
          realWorldAnalogy: "A set is like a bag of unique items — duplicates automatically removed, and you can quickly find what's in common or different between bags.",
          content: `Creating sets:
unique = {1, 2, 3, 3, 2}  # Becomes {1, 2, 3}
letters = {'a', 'b', 'c'}
from_list = set([1, 2, 2, 3])  # {1, 2, 3}

Set properties:
- Unordered (no index access)
- No duplicates
- Mutable (can add/remove)
- Elements must be hashable

Adding/removing:
s.add(4)       # Add element
s.remove(3)    # Remove (error if not exists)
s.discard(3)   # Remove (no error if not exists)
s.pop()        # Remove and return arbitrary`,
          codeExamples: [
            {
              id: "ch16-set-basics",
              title: "Set Basics",
              description: "Creating and using sets",
              code: { python: "# Creating sets\nnumbers = {1, 2, 3, 3, 2}\nprint(f\"Unique: {numbers}\")\n\n# From list\nunique = set([1, 2, 2, 3, 3])\nprint(f\"From list: {unique}\")\n\n# Adding/removing\nnumbers.add(4)\nprint(f\"After add: {numbers}\")\n\nnumbers.remove(2)\nprint(f\"After remove: {numbers}\")" },
              explanation: "Sets automatically remove duplicates. add() adds elements, remove() removes them."
            }
          ]
        },
        {
          id: "ch16-set-operations",
          title: "Set Operations",
          whyItMatters: "Set operations let you find intersections, unions, and differences between collections.",
          realWorldAnalogy: "Set operations are like comparing groups — what's common, what's different, what's combined.",
          content: `Set operations:
union (|)      - All elements from both sets
intersection (&) - Common elements
difference (-)  - Elements in first but not second
symmetric (^) - Elements in either but not both

Examples:
a = {1, 2, 3}
b = {3, 4, 5}

a | b  # {1, 2, 3, 4, 5} union
a & b  # {3} intersection
a - b  # {1, 2} difference
a ^ b  # {1, 2, 4, 5} symmetric

Membership testing:
x in set  # O(1) average case (fast!)
x in list # O(n) average case (slower)`,
          codeExamples: [
            {
              id: "ch16-operations",
              title: "Set Operations",
              description: "Union, intersection, difference",
              code: { python: "a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\n\nprint(f\"Union: {a | b}\")\nprint(f\"Intersection: {a & b}\")\nprint(f\"Difference (a-b): {a - b}\")\nprint(f\"Symmetric: {a ^ b}\")\n\n# Membership testing\nprint(f\"3 in a: {3 in a}\")\nprint(f\"7 in a: {7 in a}\")" },
              explanation: "Set operations use |, &, -, ^ operators. Membership testing is O(1) for sets."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch16-ex1",
          title: "Set Operations",
          difficulty: 1,
          description: "Practice set operations.",
          requirements: [
            "Create two sets with some overlap",
            "Find their intersection",
            "Find their union",
            "Print results"
          ],
          starterCode: { python: "set1 = {1, 2, 3, 4, 5}\nset2 = {4, 5, 6, 7, 8}\n\n# Find intersection\n\n# Find union\nprint(intersection)\nprint(union)" },
          hints: [
            "Use & for intersection",
            "Use | for union"
          ],
          solution: { python: "set1 = {1, 2, 3, 4, 5}\nset2 = {4, 5, 6, 7, 8}\n\nintersection = set1 & set2\nunion = set1 | set2\n\nprint(f\"Intersection: {intersection}\")\nprint(f\"Union: {union}\")" },
          solutionExplanation: "& finds common elements, | combines all unique elements from both sets."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch16-q1",
            type: "mcq",
            question: "What happens if you add a duplicate to a set?",
            options: [
              "Error",
              "It's added again",
              "Nothing (ignored)",
              "Set becomes list"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "Sets only store unique values. Duplicates are silently ignored."
          },
          {
            id: "ch16-q2",
            type: "mcq",
            question: "Which operator finds common elements?",
            options: [
              "|",
              "&",
              "-",
              "^"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "& is the intersection operator, finding elements common to both sets."
          },
          {
            id: "ch16-q3",
            type: "true-false",
            question: "Sets are ordered.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "Sets are unordered collections. You cannot access elements by index."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Create",
          value: "s = {1, 2, 3}"
        },
        {
          label: "Add",
          value: "s.add(x)"
        },
        {
          label: "Union",
          value: "s1 | s2"
        },
        {
          label: "Intersection",
          value: "s1 & s2"
        },
        {
          label: "Difference",
          value: "s1 - s2"
        }
      ]
    },
    {
      id: "python-ch-17",
      number: 17,
      partLabel: "PART 2: DATA STRUCTURES",
      title: "String Formatting — Complete Guide",
      subtitle: "Advanced string formatting techniques",
      difficulty: "Beginner",
      estimatedMinutes: 40,
      xpReward: 100,
      prerequisites: ["python-ch-16"],
      learningObjectives: [
        "Use f-strings for formatting",
        "Use format specifiers",
        "Format numbers and text",
        "Align and pad strings"
      ],
      sections: [
        {
          id: "ch17-fstrings",
          title: "F-Strings Deep Dive",
          whyItMatters: "F-strings are the modern, preferred way to format strings in Python.",
          realWorldAnalogy: "F-strings are like fill-in-the-blank forms where you can insert any expression.",
          content: `F-string basics:
name = "Alice"
age = 25
print(f"Name: {name}, Age: {age}")

Expressions in f-strings:
print(f"Age in 5 years: {age + 5}")
print(f"Double age: {age * 2}")
print(f"Name upper: {name.upper()}")

Format specifiers:
:.2f  - 2 decimal places
:d    - integer
:>10  - right align in 10 chars
:<10  - left align in 10 chars
:^10  - center in 10 chars`,
          codeExamples: [
            {
              id: "ch17-fstrings",
              title: "F-String Formatting",
              description: "Advanced f-string usage",
              code: { python: "name = \"Alice\"\nage = 25\nprice = 19.99\n\n# Expressions\nprint(f\"In 5 years: {age + 5}\")\nprint(f\"Name length: {len(name)}\")\n\n# Formatting\nprint(f\"Price: ${price:.2f}\")\nprint(f\"Age: {age:03d}\")\nprint(f\"Centered: {name:^20}\")" },
              explanation: "F-strings support any Python expression inside {}. Format specifiers control output appearance."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch17-ex1",
          title: "String Formatting",
          difficulty: 1,
          description: "Practice f-string formatting.",
          requirements: [
            "Format a float to 2 decimal places",
            "Right-align text in 15 characters",
            "Center text in 20 characters"
          ],
          starterCode: { python: "price = 19.99\nname = \"Python\"\n\nprint(f\"Price: {price}\")\nprint(f\"Right: {name}\")\nprint(f\"Center: {name}\")" },
          hints: [
            "Use :.2f for 2 decimals",
            "Use :>15 for right align",
            "Use :^20 for center"
          ],
          solution: { python: "price = 19.99\nname = \"Python\"\n\nprint(f\"Price: ${price:.2f}\")\nprint(f\"Right: {name:>15}\")\nprint(f\"Center: {name:^20}\")" },
          solutionExplanation: "Format specifiers go after the variable in f-strings: {var:specifier}."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch17-q1",
            type: "mcq",
            question: "How do you format a float to 2 decimal places?",
            options: [
              "{:.2d}",
              "{:.2f}",
              "{:2f}",
              "{:2.0f}"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: ":.2f formats a float to 2 decimal places."
          },
          {
            id: "ch17-q2",
            type: "mcq",
            question: "What does :>10 do?",
            options: [
              "Left align in 10 chars",
              "Right align in 10 chars",
              "Center in 10 chars",
              "Pad with zeros"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: ":>10 right-aligns text in a field of 10 characters."
          },
          {
            id: "ch17-q3",
            type: "true-false",
            question: "F-strings require Python 3.6+.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "F-strings were introduced in Python 3.6 and are now the preferred string formatting method."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "2 decimal places",
          value: "f\"{value:.2f}\""
        },
        {
          label: "Integer",
          value: "f\"{value:d}\""
        },
        {
          label: "Right align",
          value: "f\"{value:>10}\""
        },
        {
          label: "Center",
          value: "f\"{value:^10}\""
        }
      ]
    },
    {
      id: "python-ch-18",
      number: 18,
      partLabel: "PART 2: DATA STRUCTURES",
      title: "Collections Module",
      subtitle: "Advanced data structures from collections",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 110,
      prerequisites: ["python-ch-17"],
      learningObjectives: [
        "Use Counter for counting",
        "Use defaultdict for default values",
        "Use deque for efficient operations",
        "Use namedtuple for readable tuples"
      ],
      sections: [
        {
          id: "ch18-collections",
          title: "Collections Module Overview",
          whyItMatters: "The collections module provides specialized data structures that solve common problems elegantly.",
          realWorldAnalogy: "The collections module is like having specialized tools for specific jobs — each designed for a particular task.",
          content: `from collections import Counter, defaultdict, deque, namedtuple

Counter - Count elements:
counts = Counter([1, 2, 2, 3, 3, 3])
# Counter({3: 3, 2: 2, 1: 1})

defaultdict - Default values:
d = defaultdict(int)
d['key'] += 1  # Works even if key doesn't exist

deque - Double-ended queue:
d = deque([1, 2, 3])
d.appendleft(0)  # Add to left
d.pop()        # Remove from right

namedtuple - Named tuples:
Point = namedtuple('Point', ['x', 'y'])
p = Point(1, 2)
p.x  # 1`,
          codeExamples: [
            {
              id: "ch18-collections",
              title: "Collections Module",
              description: "Using Counter, defaultdict, deque",
              code: { python: "from collections import Counter, defaultdict, deque\n\n# Counter\ncounts = Counter(['a', 'b', 'b', 'c', 'c', 'c'])\nprint(f\"Counts: {counts}\")\n\n# defaultdict\nd = defaultdict(int)\nd['a'] += 1\nprint(f\"Defaultdict: {dict(d)}\")\n\n# deque\nd = deque([1, 2, 3])\nd.appendleft(0)\nprint(f\"Deque: {list(d)}\")" },
              explanation: "Counter counts elements, defaultdict provides default values, deque is efficient for append/pop at both ends."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch18-ex1",
          title: "Counter Practice",
          difficulty: 1,
          description: "Use Counter to count elements.",
          requirements: [
            "Import Counter",
            "Count occurrences in a list",
            "Print the most common element"
          ],
          starterCode: { python: "from collections import Counter\n\nwords = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple']\n\n# Count\nprint(counts)" },
          hints: [
            "Use Counter(words)",
            "Use .most_common(1) for most common"
          ],
          solution: { python: "from collections import Counter\n\nwords = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple']\ncounts = Counter(words)\nprint(counts)\nprint(f\"Most common: {counts.most_common(1)}\")" },
          solutionExplanation: "Counter creates a dictionary of element counts. most_common() returns the most frequent elements."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch18-q1",
            type: "mcq",
            question: "What does Counter do?",
            options: [
              "Sorts elements",
              "Counts occurrences",
              "Removes duplicates",
              "Finds minimum"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Counter counts the occurrences of elements in an iterable."
          },
          {
            id: "ch18-q2",
            type: "mcq",
            question: "What is deque good for?",
            options: [
              "Sorting",
              "Efficient append/pop at both ends",
              "Counting",
              "Default values"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "deque (double-ended queue) is optimized for adding/removing from both ends."
          },
          {
            id: "ch18-q3",
            type: "true-false",
            question: "defaultdict requires a default value factory.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "defaultdict takes a factory function (like int, list, str) that provides default values for missing keys."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Import",
          value: "from collections import Counter"
        },
        {
          label: "Counter",
          value: "Counter(iterable)"
        },
        {
          label: "defaultdict",
          value: "defaultdict(int)"
        },
        {
          label: "deque",
          value: "deque(iterable)"
        }
      ]
    },
    {
      id: "python-ch-19",
      number: 19,
      partLabel: "PART 2: DATA STRUCTURES",
      title: "List, Dict, Set Comprehensions",
      subtitle: "Elegant ways to create collections",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 110,
      prerequisites: ["python-ch-18"],
      learningObjectives: [
        "Use list comprehensions",
        "Use dict comprehensions",
        "Use set comprehensions",
        "Use generator expressions"
      ],
      sections: [
        {
          id: "ch19-comprehensions",
          title: "Comprehensions",
          whyItMatters: "Comprehensions provide a concise, readable way to create collections.",
          realWorldAnalogy: "Comprehensions are like assembly lines — efficiently transforming and filtering items in one step.",
          content: `List comprehension:
squares = [x**2 for x in range(10)]
evens = [x for x in range(10) if x % 2 == 0]

Dict comprehension:
squares = {x: x**2 for x in range(5)}

Set comprehension:
evens = {x for x in range(10) if x % 2 == 0}

Generator expression:
squares_gen = (x**2 for x in range(10))
# Lazy evaluation, memory efficient

Syntax:
[expression for item in iterable if condition]`,
          codeExamples: [
            {
              id: "ch19-comprehensions",
              title: "Comprehensions",
              description: "List, dict, set comprehensions",
              code: { python: "# List comprehension\nsquares = [x**2 for x in range(10)]\nprint(f\"Squares: {squares}\")\n\n# With condition\nevens = [x for x in range(10) if x % 2 == 0]\nprint(f\"Evens: {evens}\")\n\n# Dict comprehension\nsquare_dict = {x: x**2 for x in range(5)}\nprint(f\"Dict: {square_dict}\")\n\n# Set comprehension\nunique_squares = {x**2 for x in range(5)}\nprint(f\"Set: {unique_squares}\")" },
              explanation: "Comprehensions have the form [expr for item in iterable if condition]. Dict comprehensions use key:value."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch19-ex1",
          title: "List Comprehension",
          difficulty: 1,
          description: "Create a list with comprehension.",
          requirements: [
            "Create list of squares from 1-10",
            "Create list of even numbers from 1-20",
            "Print both lists"
          ],
          starterCode: { python: "# Squares 1-10\nsquares = \n\n# Evens 1-20\nevens = \n\nprint(squares)\nprint(evens)" },
          hints: [
            "Use [x**2 for x in range(1, 11)]",
            "Use [x for x in range(1, 21) if x % 2 == 0]"
          ],
          solution: { python: "squares = [x**2 for x in range(1, 11)]\nevens = [x for x in range(1, 21) if x % 2 == 0]\nprint(squares)\nprint(evens)" },
          solutionExplanation: "Comprehensions combine iteration and transformation/filtering in one concise expression."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch19-q1",
            type: "mcq",
            question: "What does this create? [x*2 for x in range(3)]",
            options: [
              "[0, 2, 4]",
              "[1, 2, 3]",
              "[2, 4, 6]",
              "[0, 1, 2]"
            ],
            correctAnswer: 0,
            difficulty: 1,
            explanation: "range(3) gives 0, 1, 2. Multiplying each by 2 gives 0, 2, 4."
          },
          {
            id: "ch19-q2",
            type: "mcq",
            question: "How do you add a condition to a comprehension?",
            options: [
              "[x if condition]",
              "[x for x in iterable if condition]",
              "[x where condition]",
              "[x when condition]"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Add if condition after the iterable: [expr for item in iterable if condition]."
          },
          {
            id: "ch19-q3",
            type: "true-false",
            question: "Generator expressions use lazy evaluation.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "Generator expressions (with parentheses) evaluate lazily, producing items one at a time instead of all at once."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "List comp",
          value: "[x*2 for x in range(5)]"
        },
        {
          label: "With condition",
          value: "[x for x in range(10) if x % 2 == 0]"
        },
        {
          label: "Dict comp",
          value: "{x: x**2 for x in range(5)}"
        },
        {
          label: "Set comp",
          value: "{x for x in range(5)}"
        }
      ]
    },
    {
      id: "python-ch-20",
      number: 20,
      partLabel: "PART 2: DATA STRUCTURES",
      title: "Sorting and Algorithms",
      subtitle: "Sort data efficiently",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 110,
      prerequisites: ["python-ch-19"],
      learningObjectives: [
        "Use sorted() and sort()",
        "Sort with custom keys",
        "Understand sorting stability",
        "Know basic algorithm complexity"
      ],
      sections: [
        {
          id: "ch20-sorting",
          title: "Sorting in Python",
          whyItMatters: "Sorting is a fundamental operation for organizing and analyzing data.",
          realWorldAnalogy: "Sorting is like organizing books on a shelf — you can arrange them by title, author, or any other criteria.",
          content: `sorted() - Returns new sorted list:
numbers = [3, 1, 4, 1, 5]
sorted_nums = sorted(numbers)  # [1, 1, 3, 4, 5]

sort() - Sorts in place:
numbers.sort()  # Modifies original list

Reverse sorting:
sorted(numbers, reverse=True)
numbers.sort(reverse=True)

Custom key:
words = ["apple", "Banana", "cherry"]
sorted(words, key=str.lower)  # Case-insensitive
sorted(words, key=len)       # By length`,
          codeExamples: [
            {
              id: "ch20-sorting",
              title: "Sorting Examples",
              description: "Various sorting techniques",
              code: { python: "numbers = [3, 1, 4, 1, 5]\n\n# sorted() - new list\nprint(f\"Sorted: {sorted(numbers)}\")\nprint(f\"Original: {numbers}\")\n\n# sort() - in place\nnumbers.sort()\nprint(f\"After sort: {numbers}\")\n\n# Custom key\nwords = [\"apple\", \"Banana\", \"cherry\"]\nprint(f\"By length: {sorted(words, key=len)}\")\nprint(f\"Reverse: {sorted(words, reverse=True)}\")" },
              explanation: "sorted() returns a new list, sort() modifies in place. key parameter specifies sorting criteria."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch20-ex1",
          title: "Sorting Practice",
          difficulty: 1,
          description: "Practice sorting with custom keys.",
          requirements: [
            "Sort a list of words by length",
            "Sort a list of numbers in descending order",
            "Print both results"
          ],
          starterCode: { python: "words = [\"apple\", \"banana\", \"kiwi\", \"strawberry\"]\nnumbers = [3, 1, 4, 1, 5, 2]\n\n# Sort words by length\n\n# Sort numbers descending\nprint(by_length)\nprint(descending)" },
          hints: [
            "Use sorted(words, key=len)",
            "Use sorted(numbers, reverse=True)"
          ],
          solution: { python: "words = [\"apple\", \"banana\", \"kiwi\", \"strawberry\"]\nnumbers = [3, 1, 4, 1, 5, 2]\n\nby_length = sorted(words, key=len)\ndescending = sorted(numbers, reverse=True)\n\nprint(by_length)\nprint(descending)" },
          solutionExplanation: "key parameter specifies the sorting criteria. reverse=True sorts in descending order."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch20-q1",
            type: "mcq",
            question: "What's the difference between sorted() and sort()?",
            options: [
              "No difference",
              "sorted() returns new list, sort() modifies in place",
              "sorted() is faster",
              "sort() only works on numbers"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "sorted() returns a new sorted list. sort() modifies the original list in place."
          },
          {
            id: "ch20-q2",
            type: "mcq",
            question: "How do you sort in descending order?",
            options: [
              "sorted(lst, desc=True)",
              "sorted(lst, reverse=True)",
              "sorted(lst, down=True)",
              "lst.sort(descending=True)"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Use reverse=True parameter to sort in descending order."
          },
          {
            id: "ch20-q3",
            type: "true-false",
            question: "Python's sort is stable.",
            correctAnswer: true,
            difficulty: 2,
            explanation: "Python's sort is stable, meaning equal elements maintain their original relative order."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Sorted",
          value: "sorted(lst)"
        },
        {
          label: "Sort in place",
          value: "lst.sort()"
        },
        {
          label: "Reverse",
          value: "sorted(lst, reverse=True)"
        },
        {
          label: "Custom key",
          value: "sorted(lst, key=len)"
        }
      ]
    },
    {
      id: "python-ch-21",
      number: 21,
      partLabel: "PART 2: DATA STRUCTURES",
      title: "Dates and Times",
      subtitle: "Work with temporal data",
      difficulty: "Beginner",
      estimatedMinutes: 40,
      xpReward: 100,
      prerequisites: ["python-ch-20"],
      learningObjectives: [
        "Use the datetime module",
        "Create date, time, and datetime objects",
        "Format and parse dates",
        "Work with timedeltas"
      ],
      sections: [
        {
          id: "ch21-datetime",
          title: "DateTime Module",
          whyItMatters: "Working with dates and times is essential for scheduling, logging, and time-based calculations.",
          realWorldAnalogy: "DateTime is like a digital calendar and clock combined — you can calculate dates, format them, and do time math.",
          content: `from datetime import date, time, datetime, timedelta

Creating dates:
today = date.today()
specific = date(2024, 12, 25)

Creating times:
now = time(14, 30, 0)  # 2:30 PM

Creating datetimes:
now = datetime.now()
specific = datetime(2024, 12, 25, 14, 30)

Timedeltas (time differences):
delta = timedelta(days=7)
future = today + delta`,
          codeExamples: [
            {
              id: "ch21-datetime",
              title: "DateTime Basics",
              description: "Working with dates and times",
              code: { python: "from datetime import date, datetime, timedelta\n\n# Current date\ntoday = date.today()\nprint(f\"Today: {today}\")\n\n# Current datetime\nnow = datetime.now()\nprint(f\"Now: {now}\")\n\n# Timedelta\nfuture = today + timedelta(days=7)\nprint(f\"Next week: {future}\")\n\n# Formatting\nprint(f\"Formatted: {now.strftime('%Y-%m-%d %H:%M')}\")" },
              explanation: "datetime module provides date, time, datetime, and timedelta classes for working with temporal data."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch21-ex1",
          title: "Date Calculations",
          difficulty: 1,
          description: "Calculate future dates.",
          requirements: [
            "Get today's date",
            "Calculate date 30 days from now",
            "Calculate date 1 year from now",
            "Print all dates"
          ],
          starterCode: { python: "from datetime import date, timedelta\n\ntoday = date.today()\n\n# Calculate dates\nprint(f\"Today: {today}\")" },
          hints: [
            "Use timedelta(days=30)",
            "Use timedelta(days=365)"
          ],
          solution: { python: "from datetime import date, timedelta\n\ntoday = date.today()\n\nmonth_later = today + timedelta(days=30)\nyear_later = today + timedelta(days=365)\n\nprint(f\"Today: {today}\")\nprint(f\"30 days: {month_later}\")\nprint(f\"1 year: {year_later}\")" },
          solutionExplanation: "timedelta represents a duration. Adding timedelta to a date gives a future date."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch21-q1",
            type: "mcq",
            question: "What does date.today() return?",
            options: [
              "Current time",
              "Current date",
              "Current datetime",
              "Unix timestamp"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "date.today() returns the current date (without time)."
          },
          {
            id: "ch21-q2",
            type: "mcq",
            question: "What class represents time differences?",
            options: [
              "datetime",
              "time",
              "timedelta",
              "date"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "timedelta represents a duration or difference between two dates/times."
          },
          {
            id: "ch21-q3",
            type: "true-false",
            question: "datetime.now() returns only the date.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "datetime.now() returns both date and time. date.today() returns only the date."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Import",
          value: "from datetime import date, datetime"
        },
        {
          label: "Today",
          value: "date.today()"
        },
        {
          label: "Now",
          value: "datetime.now()"
        },
        {
          label: "Timedelta",
          value: "timedelta(days=7)"
        }
      ]
    },
    {
      id: "python-ch-22",
      number: 22,
      partLabel: "PART 2: DATA STRUCTURES",
      title: "Regular Expressions",
      subtitle: "Pattern matching in strings",
      difficulty: "Intermediate",
      estimatedMinutes: 50,
      xpReward: 120,
      prerequisites: ["python-ch-21"],
      learningObjectives: [
        "Use the re module",
        "Match patterns with regex",
        "Search and replace with regex",
        "Extract data with groups"
      ],
      sections: [
        {
          id: "ch22-regex",
          title: "Regular Expressions",
          whyItMatters: "Regular expressions (regex) are powerful tools for pattern matching and text processing.",
          realWorldAnalogy: "Regex is like a super-powered find-and-replace — you can search for patterns, not just exact text.",
          content: `import re

Basic patterns:
re.search(pattern, string)  - Find first match
re.findall(pattern, string) - Find all matches
re.match(pattern, string)   - Match at start only
re.sub(pattern, replacement, string) - Replace

Common patterns:
\\d  - Digit (0-9)
\\w  - Word character (a-z, A-Z, 0-9, _)
\\s  - Whitespace
.   - Any character
*   - Zero or more
+   - One or more
?   - Zero or one`,
          codeExamples: [
            {
              id: "ch22-regex",
              title: "Regex Basics",
              description: "Common regex operations",
              code: { python: "import re\n\ntext = \"My phone is 123-456-7890\"\n\n# Find digits\nnumbers = re.findall(r'\\d+', text)\nprint(f\"Numbers: {numbers}\")\n\n# Find phone pattern\nphone = re.search(r'\\d{3}-\\d{3}-\\d{4}', text)\nprint(f\"Phone: {phone.group()}\")\n\n# Replace\nnew_text = re.sub(r'\\d+', 'X', text)\nprint(f\"Replaced: {new_text}\")" },
              explanation: "re.findall() returns all matches. re.search() returns first match. re.sub() replaces matches."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch22-ex1",
          title: "Regex Practice",
          difficulty: 1,
          description: "Extract data with regex.",
          requirements: [
            "Extract all email addresses from a text",
            "Extract all numbers from a text",
            "Print results"
          ],
          starterCode: { python: "import re\n\ntext = \"Contact alice@example.com or bob@test.com. Call 123-456-7890 or 987-654-3210.\"\n\n# Extract emails\n\n# Extract numbers\nprint(emails)\nprint(numbers)" },
          hints: [
            "Email pattern: r'\\w+@\\w+\\.\\w+'",
            "Number pattern: r'\\d+'"
          ],
          solution: { python: "import re\n\ntext = \"Contact alice@example.com or bob@test.com. Call 123-456-7890 or 987-654-3210.\"\n\nemails = re.findall(r'\\w+@\\w+\\.\\w+', text)\nnumbers = re.findall(r'\\d+', text)\n\nprint(f\"Emails: {emails}\")\nprint(f\"Numbers: {numbers}\")" },
          solutionExplanation: "Regex patterns use \\d for digits, \\w for word characters. findall() returns all matches."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch22-q1",
            type: "mcq",
            question: "What does \\d match in regex?",
            options: [
              "Any character",
              "Digit (0-9)",
              "Whitespace",
              "Letter"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "\\d matches any digit (0-9)."
          },
          {
            id: "ch22-q2",
            type: "mcq",
            question: "What does re.findall() return?",
            options: [
              "First match",
              "All matches as list",
              "Match object",
              "Boolean"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "re.findall() returns a list of all non-overlapping matches."
          },
          {
            id: "ch22-q3",
            type: "true-false",
            question: "re.match() matches anywhere in the string.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "re.match() only matches at the beginning of the string. re.search() matches anywhere."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Import",
          value: "import re"
        },
        {
          label: "Find all",
          value: "re.findall(pattern, text)"
        },
        {
          label: "Search",
          value: "re.search(pattern, text)"
        },
        {
          label: "Replace",
          value: "re.sub(pattern, repl, text)"
        }
      ]
    },
    {
      id: "python-ch-23",
      number: 23,
      partLabel: "PART 3: ADVANCED CONTROL FLOW",
      title: "Advanced Functions",
      subtitle: "Closures, decorators, and recursion",
      difficulty: "Intermediate",
      estimatedMinutes: 50,
      xpReward: 120,
      prerequisites: ["python-ch-22"],
      learningObjectives: [
        "Understand function closures",
        "Create and use decorators",
        "Write recursive functions",
        "Use function as first-class objects"
      ],
      sections: [
        {
          id: "ch23-closures",
          title: "Closures",
          whyItMatters: "Closures allow functions to remember and access variables from their enclosing scope.",
          realWorldAnalogy: "A closure is like a backpack that a function carries — it remembers the environment where it was created.",
          content: `Closure - Function with access to enclosing scope:
def outer(x):
    def inner(y):
        return x + y
    return inner

add_five = outer(5)
result = add_five(3)  # 8

The inner function 'closes over' x from outer.

Use cases:
- Data hiding
- Function factories
- Callbacks
- Decorators`,
          codeExamples: [
            {
              id: "ch23-closures",
              title: "Closures",
              description: "Function closures in action",
              code: { python: "def make_multiplier(factor):\n    def multiply(x):\n        return x * factor\n    return multiply\n\ndouble = make_multiplier(2)\ntriple = make_multiplier(3)\n\nprint(double(5))  # 10\nprint(triple(5))  # 15" },
              explanation: "The inner function 'closes over' the factor variable from the outer function's scope."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch23-ex1",
          title: "Closure Practice",
          difficulty: 1,
          description: "Create a function factory with closures.",
          requirements: [
            "Create make_adder(n) that returns a function",
            "The returned function adds n to its argument",
            "Test with different adders"
          ],
          starterCode: { python: "def make_adder(n):\n    # Return inner function\n\nadd_five = make_adder(5)\nprint(add_five(10))" },
          hints: [
            "Define inner(x) that returns x + n",
            "Return the inner function"
          ],
          solution: { python: "def make_adder(n):\n    def add(x):\n        return x + n\n    return add\n\nadd_five = make_adder(5)\nprint(add_five(10))  # 15" },
          solutionExplanation: "The inner function closes over n, creating a closure that remembers the value."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch23-q1",
            type: "mcq",
            question: "What is a closure?",
            options: [
              "A closed function",
              "Function with access to enclosing scope",
              "A private function",
              "A deleted function"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "A closure is a function that remembers and accesses variables from its enclosing scope."
          },
          {
            id: "ch23-q2",
            type: "mcq",
            question: "What does a closure remember?",
            options: [
              "Only global variables",
              "Only local variables",
              "Variables from enclosing scope",
              "Nothing"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "Closures remember variables from the enclosing (outer) scope where they were defined."
          },
          {
            id: "ch23-q3",
            type: "true-false",
            question: "Decorators use closures.",
            correctAnswer: true,
            difficulty: 2,
            explanation: "Decorators are implemented using closures - they wrap functions and extend their behavior."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Closure",
          value: "Function with enclosing scope access"
        },
        {
          label: "Pattern",
          value: "def outer(x): return lambda y: x + y"
        }
      ]
    },
    {
      id: "python-ch-24",
      number: 24,
      partLabel: "PART 3: ADVANCED CONTROL FLOW",
      title: "Decorators",
      subtitle: "Modify function behavior",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 120,
      prerequisites: ["python-ch-23"],
      learningObjectives: [
        "Create simple decorators",
        "Use @ syntax for decorators",
        "Pass arguments to decorated functions",
        "Use functools.wraps"
      ],
      sections: [
        {
          id: "ch24-decorators",
          title: "Creating Decorators",
          whyItMatters: "Decorators let you modify or extend function behavior without changing the function code.",
          realWorldAnalogy: "Decorators are like gift wrapping — you add extra functionality around a function without changing what's inside.",
          content: `Basic decorator:
def my_decorator(func):
    def wrapper():
        print("Before function call")
        func()
        print("After function call")
    return wrapper

@my_decorator
def greet():
    print("Hello!")

greet()  # Prints Before, Hello, After

Decorators with arguments:
def decorator_with_args(func):
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper

Preserving function info:
from functools import wraps
@wraps(func)`,
          codeExamples: [
            {
              id: "ch24-decorators",
              title: "Decorators",
              description: "Creating and using decorators",
              code: { python: "def uppercase_decorator(func):\n    def wrapper():\n        result = func()\n        return result.upper()\n    return wrapper\n\n@uppercase_decorator\ndef greet():\n    return \"hello\"\n\nprint(greet())  # HELLO" },
              explanation: "Decorators wrap functions. The @ syntax applies the decorator automatically."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch24-ex1",
          title: "Decorator Practice",
          difficulty: 1,
          description: "Create a timing decorator.",
          requirements: [
            "Create a decorator that times function execution",
            "Print execution time",
            "Apply to a test function"
          ],
          starterCode: { python: "import time\n\ndef timer(func):\n    # Decorator implementation\n\n@timer\ndef slow_function():\n    time.sleep(1)\n    return \"Done\"\n\nprint(slow_function())" },
          hints: [
            "Use time.time() before and after",
            "Return the function result"
          ],
          solution: { python: "import time\n\ndef timer(func):\n    def wrapper():\n        start = time.time()\n        result = func()\n        end = time.time()\n        print(f\"Execution time: {end - start:.2f}s\")\n        return result\n    return wrapper\n\n@timer\ndef slow_function():\n    time.sleep(1)\n    return \"Done\"\n\nprint(slow_function())" },
          solutionExplanation: "The decorator measures time before and after calling the function, then returns the original result."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch24-q1",
            type: "mcq",
            question: "What does @decorator do?",
            options: [
              "Deletes the function",
              "Applies decorator to function",
              "Imports the function",
              "Comments out the function"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "The @ syntax applies a decorator to the function defined below it."
          },
          {
            id: "ch24-q2",
            type: "mcq",
            question: "What do decorators return?",
            options: [
              "The original function",
              "A wrapper function",
              "None",
              "The function result"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Decorators return a wrapper function that replaces or extends the original function."
          },
          {
            id: "ch24-q3",
            type: "true-false",
            question: "Decorators can be stacked.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "Multiple decorators can be stacked, applied from bottom to top."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Basic decorator",
          value: "@decorator"
        },
        {
          label: "Wrapper",
          value: "def wrapper(*args, **kwargs)"
        },
        {
          label: "Preserve metadata",
          value: "@wraps(func)"
        }
      ]
    },
    {
      id: "python-ch-25",
      number: 25,
      partLabel: "PART 3: ADVANCED CONTROL FLOW",
      title: "Recursion",
      subtitle: "Functions that call themselves",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 120,
      prerequisites: ["python-ch-24"],
      learningObjectives: [
        "Write recursive functions",
        "Understand base cases",
        "Identify when to use recursion",
        "Know recursion limits"
      ],
      sections: [
        {
          id: "ch25-recursion",
          title: "Recursive Functions",
          whyItMatters: "Recursion solves problems by breaking them into smaller, similar sub-problems.",
          realWorldAnalogy: "Recursion is like Russian nesting dolls — each doll contains a smaller version of itself until you reach the smallest one.",
          content: `Recursive function structure:
def recursive_function(n):
    # Base case - stops recursion
    if n <= 1:
        return 1
    # Recursive case - calls itself
    return n * recursive_function(n - 1)

Factorial example:
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

Recursion depth:
Python has a recursion limit (default ~1000).
Use iteration for very deep recursion to avoid stack overflow.`,
          codeExamples: [
            {
              id: "ch25-recursion",
              title: "Recursion Examples",
              description: "Factorial and Fibonacci",
              code: { python: "# Factorial\ndef factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(f\"5! = {factorial(5)}\")\n\n# Fibonacci\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n - 1) + fibonacci(n - 2)\n\nprint(f\"Fib(7) = {fibonacci(7)}\")" },
              explanation: "Recursion needs a base case to stop. Each call should move closer to the base case."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch25-ex1",
          title: "Recursive Sum",
          difficulty: 1,
          description: "Write a recursive sum function.",
          requirements: [
            "Create recursive_sum(list) that sums all elements",
            "Handle empty list (base case)",
            "Test with sample list"
          ],
          starterCode: { python: "def recursive_sum(lst):\n    # Base case and recursive case\n\nprint(recursive_sum([1, 2, 3, 4, 5]))" },
          hints: [
            "Base case: if not lst, return 0",
            "Recursive: return lst[0] + recursive_sum(lst[1:])"
          ],
          solution: { python: "def recursive_sum(lst):\n    if not lst:\n        return 0\n    return lst[0] + recursive_sum(lst[1:])\n\nprint(recursive_sum([1, 2, 3, 4, 5]))" },
          solutionExplanation: "Base case returns 0 for empty list. Recursive case adds first element to sum of rest."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch25-q1",
            type: "mcq",
            question: "What is a base case in recursion?",
            options: [
              "The recursive call",
              "The condition that stops recursion",
              "The function name",
              "The return type"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "The base case is the condition that stops the recursion from continuing indefinitely."
          },
          {
            id: "ch25-q2",
            type: "mcq",
            question: "What happens without a base case?",
            options: [
              "Returns None",
              "Infinite recursion / stack overflow",
              "Syntax error",
              "Returns 0"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Without a base case, recursion continues until it hits Python's recursion limit, causing a stack overflow."
          },
          {
            id: "ch25-q3",
            type: "true-false",
            question: "Recursion is always better than iteration.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "Recursion is not always better. Iteration is often more efficient and avoids stack overflow for deep problems."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Base case",
          value: "if n <= 1: return 1"
        },
        {
          label: "Recursive case",
          value: "return n * func(n-1)"
        },
        {
          label: "Recursion limit",
          value: "sys.getrecursionlimit()"
        }
      ]
    },
    {
      id: "python-ch-26",
      number: 26,
      partLabel: "PART 3: ADVANCED CONTROL FLOW",
      title: "Generators and Iterators",
      subtitle: "Lazy evaluation and memory efficiency",
      difficulty: "Intermediate",
      estimatedMinutes: 50,
      xpReward: 120,
      prerequisites: ["python-ch-25"],
      learningObjectives: [
        "Create generator functions",
        "Use yield keyword",
        "Understand lazy evaluation",
        "Use generator expressions"
      ],
      sections: [
        {
          id: "ch26-generators",
          title: "Generator Functions",
          whyItMatters: "Generators provide memory-efficient lazy evaluation for large datasets.",
          realWorldAnalogy: "Generators are like on-demand streaming — they produce values one at a time instead of all at once.",
          content: `Generator function (uses yield):
def count_up_to(n):
    count = 1
    while count <= n:
        yield count
        count += 1

for num in count_up_to(5):
    print(num)  # 1, 2, 3, 4, 5

Benefits:
- Memory efficient (one item at a time)
- Infinite sequences possible
- Lazy evaluation

Generator expression:
squares = (x**2 for x in range(10))
# Note parentheses, not brackets`,
          codeExamples: [
            {
              id: "ch26-generators",
              title: "Generators",
              description: "Generator functions and expressions",
              code: { python: "# Generator function\ndef fibonacci_gen(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b\n\nfor num in fibonacci_gen(10):\n    print(num)\n\n# Generator expression\neven_squares = (x**2 for x in range(10) if x % 2 == 0)\nprint(list(even_squares))" },
              explanation: "yield produces values one at a time. Generator expressions use () instead of []."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch26-ex1",
          title: "Generator Practice",
          difficulty: 1,
          description: "Create a generator for even numbers.",
          requirements: [
            "Create even_numbers(limit) generator",
            "Yield even numbers up to limit",
            "Test the generator"
          ],
          starterCode: { python: "def even_numbers(limit):\n    # Yield even numbers\n\nfor num in even_numbers(10):\n    print(num)" },
          hints: [
            "Use for loop with range(2, limit+1, 2)",
            "Yield each number"
          ],
          solution: { python: "def even_numbers(limit):\n    for num in range(2, limit + 1, 2):\n        yield num\n\nfor num in even_numbers(10):\n    print(num)" },
          solutionExplanation: "The generator yields even numbers one at a time using range with step 2."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch26-q1",
            type: "mcq",
            question: "What keyword creates a generator?",
            options: [
              "return",
              "yield",
              "send",
              "next"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "yield turns a function into a generator that produces values lazily."
          },
          {
            id: "ch26-q2",
            type: "mcq",
            question: "What is the main benefit of generators?",
            options: [
              "Faster execution",
              "Memory efficiency",
              "Easier syntax",
              "More features"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Generators are memory efficient because they produce one value at a time instead of storing all values."
          },
          {
            id: "ch26-q3",
            type: "true-false",
            question: "Generator expressions use square brackets.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "Generator expressions use parentheses (). Square brackets are for list comprehensions."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Yield",
          value: "yield value"
        },
        {
          label: "Generator expr",
          value: "(x for x in iterable)"
        },
        {
          label: "Next",
          value: "next(gen)"
        }
      ]
    },
    {
      id: "python-ch-27",
      number: 27,
      partLabel: "PART 3: ADVANCED CONTROL FLOW",
      title: "Context Managers",
      subtitle: "Managing resources with with statements",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 110,
      prerequisites: ["python-ch-26"],
      learningObjectives: [
        "Use with statements",
        "Create custom context managers",
        "Understand __enter__ and __exit__",
        "Use contextlib for simple managers"
      ],
      sections: [
        {
          id: "ch27-context-managers",
          title: "Context Managers",
          whyItMatters: "Context managers ensure resources are properly acquired and released.",
          realWorldAnalogy: "Context managers are like automatic door closers — they ensure resources are cleaned up when you're done.",
          content: `Built-in context managers:
with open('file.txt') as f:
    content = f.read()
# File automatically closed

Custom context manager:
class MyContext:
    def __enter__(self):
        print("Entering")
        return self
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Exiting")

Using contextlib:
from contextlib import contextmanager

@contextmanager
def my_context():
    print("Setup")
    yield
    print("Cleanup")`,
          codeExamples: [
            {
              id: "ch27-context",
              title: "Context Managers",
              description: "Using and creating context managers",
              code: { python: "from contextlib import contextmanager\n\n@contextmanager\ndef timer():\n    import time\n    start = time.time()\n    yield\n    end = time.time()\n    print(f\"Time: {end - start:.2f}s\")\n\nwith timer():\n    sum(range(1000000))" },
              explanation: "Context managers use __enter__ and __exit__, or @contextmanager decorator for simple cases."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch27-ex1",
          title: "Context Manager",
          difficulty: 1,
          description: "Create a simple context manager.",
          requirements: [
            "Create a context manager that prints enter/exit messages",
            "Use @contextmanager decorator",
            "Test with with statement"
          ],
          starterCode: { python: "from contextlib import contextmanager\n\n@contextmanager\ndef my_context():\n    # Setup and yield\n\nwith my_context():\n    print(\"Doing work\")" },
          hints: [
            "Print 'Entering', then yield",
            "After yield, print 'Exiting'"
          ],
          solution: { python: "from contextlib import contextmanager\n\n@contextmanager\ndef my_context():\n    print(\"Entering context\")\n    yield\n    print(\"Exiting context\")\n\nwith my_context():\n    print(\"Doing work\")" },
          solutionExplanation: "The @contextmanager decorator turns a generator into a context manager. Code before yield is setup, after is cleanup."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch27-q1",
            type: "mcq",
            question: "What does with automatically do?",
            options: [
              "Nothing",
              "Closes resources",
              "Creates variables",
              "Imports modules"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "with statements automatically handle resource cleanup (like closing files) even if errors occur."
          },
          {
            id: "ch27-q2",
            type: "mcq",
            question: "Which methods define a context manager?",
            options: [
              "open/close",
              "start/stop",
              "__enter__/__exit__",
              "begin/end"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "Context managers implement __enter__ for setup and __exit__ for cleanup."
          },
          {
            id: "ch27-q3",
            type: "true-false",
            question: "contextlib simplifies creating context managers.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "@contextmanager decorator lets you create context managers using generators instead of classes."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "With statement",
          value: "with open('file') as f:"
        },
        {
          label: "contextlib",
          value: "from contextlib import contextmanager"
        },
        {
          label: "Methods",
          value: "__enter__, __exit__"
        }
      ]
    },
    {
      id: "python-ch-28",
      number: 28,
      partLabel: "PART 3: ADVANCED CONTROL FLOW",
      title: "Exception Handling",
      subtitle: "Graceful error handling",
      difficulty: "Beginner",
      estimatedMinutes: 45,
      xpReward: 110,
      prerequisites: ["python-ch-27"],
      learningObjectives: [
        "Use try/except blocks",
        "Catch specific exceptions",
        "Use else and finally",
        "Raise custom exceptions"
      ],
      sections: [
        {
          id: "ch28-exceptions",
          title: "Try/Except Blocks",
          whyItMatters: "Exception handling prevents programs from crashing on errors.",
          realWorldAnalogy: "Exception handling is like having a safety net — it catches errors before they cause the program to fall.",
          content: `Basic try/except:
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")

Multiple exceptions:
try:
    risky_operation()
except ValueError as e:
    print(f"Value error: {e}")
except TypeError as e:
    print(f"Type error: {e}")

else and finally:
try:
    # Code that might raise
except:
    # Handle error
else:
    # If no error
finally:
    # Always runs`,
          codeExamples: [
            {
              id: "ch28-exceptions",
              title: "Exception Handling",
              description: "Try/except patterns",
              code: { python: "try:\n    num = int(\"abc\")\nexcept ValueError:\n    print(\"Not a valid number\")\nelse:\n    print(f\"Number: {num}\")\nfinally:\n    print(\"Execution complete\")\n\n# Multiple exceptions\ntry:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print(\"Division by zero\")" },
              explanation: "try contains risky code, except handles errors, else runs if no error, finally always runs."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch28-ex1",
          title: "Exception Handling",
          difficulty: 1,
          description: "Handle division errors gracefully.",
          requirements: [
            "Get two numbers from user",
            "Divide them with error handling",
            "Print result or error message"
          ],
          starterCode: { python: "try:\n    a = int(input(\"First number: \"))\n    b = int(input(\"Second number: \"))\n    # Add division with error handling\n" },
          hints: [
            "Use try/except for ZeroDivisionError",
            "Catch ValueError for invalid input"
          ],
          solution: { python: "try:\n    a = int(input(\"First number: \"))\n    b = int(input(\"Second number: \"))\n    result = a / b\n    print(f\"Result: {result}\")\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero\")\nexcept ValueError:\n    print(\"Please enter valid numbers\")" },
          solutionExplanation: "try/except catches specific errors. You can have multiple except blocks for different error types."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch28-q1",
            type: "mcq",
            question: "What block always runs in try/except?",
            options: [
              "else",
              "except",
              "finally",
              "try"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "finally always runs regardless of whether an exception occurred or not."
          },
          {
            id: "ch28-q2",
            type: "mcq",
            question: "When does else block run?",
            options: [
              "Always",
              "Only on error",
              "Only if no error",
              "Never"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "else runs only if no exception was raised in the try block."
          },
          {
            id: "ch28-q3",
            type: "true-false",
            question: "You should catch all exceptions with except:.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "Catching all exceptions with bare except is bad practice. Catch specific exceptions you expect."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Try/except",
          value: "try: except Error:"
        },
        {
          label: "Finally",
          value: "finally: # always runs"
        },
        {
          label: "Raise",
          value: "raise ValueError('msg')"
        }
      ]
    },
    {
      id: "python-ch-29",
      number: 29,
      partLabel: "PART 3: ADVANCED CONTROL FLOW",
      title: "Custom Exceptions",
      subtitle: "Create your own exception classes",
      difficulty: "Intermediate",
      estimatedMinutes: 35,
      xpReward: 110,
      prerequisites: ["python-ch-28"],
      learningObjectives: [
        "Create custom exception classes",
        "Inherit from Exception",
        "Raise custom exceptions",
        "Handle custom exceptions"
      ],
      sections: [
        {
          id: "ch29-custom-exceptions",
          title: "Custom Exception Classes",
          whyItMatters: "Custom exceptions make error handling more specific and meaningful.",
          realWorldAnalogy: "Custom exceptions are like having specific error codes — each tells you exactly what went wrong.",
          content: `Creating custom exceptions:
class MyError(Exception):
    pass

class InvalidAgeError(Exception):
    def __init__(self, age):
        self.age = age
        super().__init__(f"Invalid age: {age}")

Raising custom exceptions:
def set_age(age):
    if age < 0 or age > 150:
        raise InvalidAgeError(age)
    return age

Handling custom exceptions:
try:
    set_age(200)
except InvalidAgeError as e:
    print(e)`,
          codeExamples: [
            {
              id: "ch29-custom",
              title: "Custom Exceptions",
              description: "Creating and using custom exceptions",
              code: { python: "class InsufficientFundsError(Exception):\n    def __init__(self, balance, amount):\n        self.balance = balance\n        self.amount = amount\n        super().__init__(f\"Insufficient: need {amount}, have {balance}\")\n\ndef withdraw(balance, amount):\n    if amount > balance:\n        raise InsufficientFundsError(balance, amount)\n    return balance - amount\n\ntry:\n    withdraw(100, 150)\nexcept InsufficientFundsError as e:\n    print(e)" },
              explanation: "Custom exceptions inherit from Exception. You can add custom attributes and error messages."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch29-ex1",
          title: "Custom Exception",
          difficulty: 1,
          description: "Create a custom exception for validation.",
          requirements: [
            "Create InvalidEmailError exception",
            "Raise it if email doesn't contain '@'",
            "Handle the exception"
          ],
          starterCode: { python: "class InvalidEmailError(Exception):\n    pass\n\ndef validate_email(email):\n    # Raise exception if invalid\n\ntry:\n    validate_email(\"invalid\")\nexcept InvalidEmailError:\n    print(\"Invalid email\")" },
          hints: [
            "Check if '@' in email",
            "Raise InvalidEmailError if not"
          ],
          solution: { python: "class InvalidEmailError(Exception):\n    pass\n\ndef validate_email(email):\n    if '@' not in email:\n        raise InvalidEmailError(f\"Invalid email: {email}\")\n\ntry:\n    validate_email(\"invalid\")\nexcept InvalidEmailError as e:\n    print(e)" },
          solutionExplanation: "Custom exceptions make error handling specific to your domain's validation rules."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch29-q1",
            type: "mcq",
            question: "What should custom exceptions inherit from?",
            options: [
              "Error",
              "Exception",
              "BaseException",
              "object"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Custom exceptions should inherit from Exception (not Error which doesn't exist as a base class)."
          },
          {
            id: "ch29-q2",
            type: "mcq",
            question: "Why create custom exceptions?",
            options: [
              "For fun",
              "More specific error handling",
              "Faster execution",
              "Required by Python"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Custom exceptions provide more specific, meaningful error handling for your application's domain."
          },
          {
            id: "ch29-q3",
            type: "true-false",
            question: "Custom exceptions can have custom attributes.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "You can add custom attributes to exception classes to carry additional error information."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Define",
          value: "class MyError(Exception):"
        },
        {
          label: "Raise",
          value: "raise MyError('message')"
        },
        {
          label: "Inherit",
          value: "class Error(Exception):"
        }
      ]
    },
    {
      id: "python-ch-30",
      number: 30,
      partLabel: "PART 3: ADVANCED CONTROL FLOW",
      title: "File I/O — Complete Guide",
      subtitle: "Read and write files",
      difficulty: "Beginner",
      estimatedMinutes: 50,
      xpReward: 110,
      prerequisites: ["python-ch-29"],
      learningObjectives: [
        "Open and read files",
        "Write to files",
        "Use context managers for files",
        "Handle file paths with pathlib"
      ],
      sections: [
        {
          id: "ch30-file-io",
          title: "File Operations",
          whyItMatters: "File I/O is essential for reading configuration, processing data, and saving results.",
          realWorldAnalogy: "File I/O is like reading and writing documents — you open them, read or modify content, then close them.",
          content: `Reading files:
with open('file.txt', 'r') as f:
    content = f.read()  # All content
    lines = f.readlines()  # List of lines

Writing files:
with open('file.txt', 'w') as f:
    f.write('Hello')
    f.writelines(lines)

Appending:
with open('file.txt', 'a') as f:
    f.write('New content')

Modes:
'r' - read
'w' - write (overwrites)
'a' - append
'r+' - read and write`,
          codeExamples: [
            {
              id: "ch30-files",
              title: "File I/O",
              description: "Reading and writing files",
              code: { python: "# Writing\nwith open('test.txt', 'w') as f:\n    f.write('Hello\\nWorld')\n\n# Reading\nwith open('test.txt', 'r') as f:\n    content = f.read()\n    print(content)\n\n# Reading lines\nwith open('test.txt', 'r') as f:\n    lines = f.readlines()\n    print(lines)" },
              explanation: "Use with statements for automatic file closing. Modes: r=read, w=write, a=append."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch30-ex1",
          title: "File Operations",
          difficulty: 1,
          description: "Write and read a file.",
          requirements: [
            "Write multiple lines to a file",
            "Read the file back",
            "Print the content"
          ],
          starterCode: { python: "# Write to file\nwith open('notes.txt', 'w') as f:\n    f.write('Line 1\\nLine 2\\nLine 3')\n\n# Read from file\nwith open('notes.txt', 'r') as f:\n    # Read and print" },
          hints: [
            "Use f.read() to read all content",
            "Use print() to display"
          ],
          solution: { python: "# Write to file\nwith open('notes.txt', 'w') as f:\n    f.write('Line 1\\nLine 2\\nLine 3')\n\n# Read from file\nwith open('notes.txt', 'r') as f:\n    content = f.read()\n    print(content)" },
          solutionExplanation: "with ensures the file is closed automatically. read() returns all content as a string."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch30-q1",
            type: "mcq",
            question: "What does 'w' mode do?",
            options: [
              "Read only",
              "Write (overwrites)",
              "Append",
              "Read and write"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "'w' mode opens for writing and overwrites existing file contents."
          },
          {
            id: "ch30-q2",
            type: "mcq",
            question: "Why use with statement for files?",
            options: [
              "Faster",
              "Automatic closing",
              "Required",
              "More features"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "with automatically closes the file even if an exception occurs."
          },
          {
            id: "ch30-q3",
            type: "true-false",
            question: "'a' mode overwrites existing content.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "'a' (append) mode adds to the end without overwriting. 'w' overwrites."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Read",
          value: "with open('file', 'r') as f:"
        },
        {
          label: "Write",
          value: "with open('file', 'w') as f:"
        },
        {
          label: "Append",
          value: "with open('file', 'a') as f:"
        },
        {
          label: "Read lines",
          value: "f.readlines()"
        }
      ]
    },
    {
      id: "python-ch-31",
      number: 31,
      partLabel: "PART 3: ADVANCED CONTROL FLOW",
      title: "Pathlib",
      subtitle: "Modern file path handling",
      difficulty: "Beginner",
      estimatedMinutes: 40,
      xpReward: 100,
      prerequisites: ["python-ch-30"],
      learningObjectives: [
        "Use pathlib for paths",
        "Navigate directories",
        "Create and delete files",
        "Check file properties"
      ],
      sections: [
        {
          id: "ch31-pathlib",
          title: "Pathlib Module",
          whyItMatters: "Pathlib provides an object-oriented approach to file paths that works across platforms.",
          realWorldAnalogy: "Pathlib is like a GPS for your filesystem — it helps you navigate and manipulate paths reliably.",
          content: `from pathlib import Path

Creating paths:
path = Path('folder/file.txt')
home = Path.home()

Path operations:
path.exists()      # Check if exists
path.is_file()     # Is a file
path.is_dir()      # Is a directory
path.name          # Filename
path.parent        # Parent directory
path.stem          # Filename without extension

Creating/Deleting:
path.mkdir()       # Create directory
path.touch()       # Create file
path.unlink()      # Delete file`,
          codeExamples: [
            {
              id: "ch31-pathlib",
              title: "Pathlib",
              description: "Modern path operations",
              code: { python: "from pathlib import Path\n\n# Create path\npath = Path('test.txt')\n\n# Check existence\nprint(f\"Exists: {path.exists()}\")\n\n# Create file\npath.touch()\nprint(f\"Now exists: {path.exists()}\")\n\n# Path parts\nprint(f\"Name: {path.name}\")\nprint(f\"Parent: {path.parent}\")\nprint(f\"Stem: {path.stem}\")" },
              explanation: "Pathlib provides object-oriented path manipulation that works cross-platform."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch31-ex1",
          title: "Pathlib Practice",
          difficulty: 1,
          description: "Use pathlib to check file properties.",
          requirements: [
            "Create a Path object for a file",
            "Check if it exists",
            "Print file properties"
          ],
          starterCode: { python: "from pathlib import Path\n\npath = Path('example.txt')\n\n# Check and print properties" },
          hints: [
            "Use path.exists() to check",
            "Use path.name, path.stem for properties"
          ],
          solution: { python: "from pathlib import Path\n\npath = Path('example.txt')\n\nprint(f\"Exists: {path.exists()}\")\nprint(f\"Name: {path.name}\")\nprint(f\"Stem: {path.stem}\")\nprint(f\"Parent: {path.parent}\")" },
          solutionExplanation: "Pathlib provides methods to check existence and get path parts in a cross-platform way."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch31-q1",
            type: "mcq",
            question: "What does pathlib provide?",
            options: [
              "Database operations",
              "Object-oriented path handling",
              "Network operations",
              "GUI tools"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Pathlib provides object-oriented, cross-platform path manipulation."
          },
          {
            id: "ch31-q2",
            type: "mcq",
            question: "What does Path.home() return?",
            options: [
              "Current directory",
              "User home directory",
              "Root directory",
              "Temp directory"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Path.home() returns the current user's home directory."
          },
          {
            id: "ch31-q3",
            type: "true-false",
            question: "Pathlib works cross-platform.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "Pathlib automatically handles path separators (/ vs \\) for different operating systems."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Import",
          value: "from pathlib import Path"
        },
        {
          label: "Create path",
          value: "Path('folder/file.txt')"
        },
        {
          label: "Exists",
          value: "path.exists()"
        },
        {
          label: "Home",
          value: "Path.home()"
        }
      ]
    },
    {
      id: "python-ch-32",
      number: 32,
      partLabel: "PART 3: ADVANCED CONTROL FLOW",
      title: "JSON and CSV Handling",
      subtitle: "Work with common data formats",
      difficulty: "Beginner",
      estimatedMinutes: 45,
      xpReward: 110,
      prerequisites: ["python-ch-31"],
      learningObjectives: [
        "Read and write JSON files",
        "Read and write CSV files",
        "Parse JSON from strings",
        "Handle CSV with headers"
      ],
      sections: [
        {
          id: "ch32-json-csv",
          title: "JSON and CSV",
          whyItMatters: "JSON and CSV are the most common formats for data exchange and storage.",
          realWorldAnalogy: "JSON is like a universal language for data, CSV is like spreadsheets — both are everywhere.",
          content: `JSON:
import json

# Read JSON
with open('data.json', 'r') as f:
    data = json.load(f)

# Write JSON
with open('data.json', 'w') as f:
    json.dump(data, f, indent=2)

CSV:
import csv

# Read CSV
with open('data.csv', 'r') as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row)

# Write CSV
with open('data.csv', 'w', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=['name', 'age'])
    writer.writeheader()
    writer.writerows(data)`,
          codeExamples: [
            {
              id: "ch32-json-csv",
              title: "JSON and CSV",
              description: "Reading and writing JSON and CSV",
              code: { python: "import json\n\n# JSON\njson_data = {\"name\": \"Alice\", \"age\": 25}\njson_str = json.dumps(json_data)\nprint(f\"JSON string: {json_str}\")\n\nparsed = json.loads(json_str)\nprint(f\"Parsed: {parsed}\")\n\n# CSV\nimport csv\nimport io\n\ncsv_data = io.StringIO('name,age\\nAlice,25\\nBob,30')\nreader = csv.DictReader(csv_data)\nfor row in reader:\n    print(row)" },
              explanation: "json handles JSON data (dictionaries/lists). csv handles CSV files with headers."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch32-ex1",
          title: "JSON Practice",
          difficulty: 1,
          description: "Work with JSON data.",
          requirements: [
            "Create a dictionary with user data",
            "Convert to JSON string",
            "Parse JSON back to dictionary",
            "Print both"
          ],
          starterCode: { python: "import json\n\nuser = {\"name\": \"Alice\", \"age\": 25, \"city\": \"NYC\"}\n\n# Convert to JSON\n\n# Parse back\nprint(json_str)\nprint(parsed)" },
          hints: [
            "Use json.dumps() to convert",
            "Use json.loads() to parse"
          ],
          solution: { python: "import json\n\nuser = {\"name\": \"Alice\", \"age\": 25, \"city\": \"NYC\"}\n\njson_str = json.dumps(user)\nparsed = json.loads(json_str)\n\nprint(f\"JSON: {json_str}\")\nprint(f\"Parsed: {parsed}\")" },
          solutionExplanation: "json.dumps() converts Python objects to JSON strings. json.loads() parses JSON back to Python objects."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch32-q1",
            type: "mcq",
            question: "What does json.dumps() do?",
            options: [
              "Parses JSON string",
              "Converts to JSON string",
              "Writes to file",
              "Reads from file"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "json.dumps() converts Python objects to JSON strings."
          },
          {
            id: "ch32-q2",
            type: "mcq",
            question: "What does csv.DictReader do?",
            options: [
              "Reads as dictionary",
              "Reads as list",
              "Writes CSV",
              "Validates CSV"
            ],
            correctAnswer: 0,
            difficulty: 1,
            explanation: "DictReader reads CSV rows as dictionaries using headers as keys."
          },
          {
            id: "ch32-q3",
            type: "true-false",
            question: "JSON can store Python objects directly.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "JSON only supports basic types (dict, list, str, int, float, bool, None). Custom objects need serialization."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "JSON dumps",
          value: "json.dumps(data)"
        },
        {
          label: "JSON loads",
          value: "json.loads(string)"
        },
        {
          label: "JSON dump",
          value: "json.dump(data, file)"
        },
        {
          label: "CSV DictReader",
          value: "csv.DictReader(file)"
        }
      ]
    },
    {
      id: "python-ch-33",
      number: 33,
      partLabel: "PART 3: ADVANCED CONTROL FLOW",
      title: "Type Hints",
      subtitle: "Add type annotations to your code",
      difficulty: "Intermediate",
      estimatedMinutes: 35,
      xpReward: 100,
      prerequisites: ["python-ch-32"],
      learningObjectives: [
        "Use type hints for variables",
        "Add type hints to functions",
        "Use typing module types",
        "Understand type checking"
      ],
      sections: [
        {
          id: "ch33-type-hints",
          title: "Type Annotations",
          whyItMatters: "Type hints improve code documentation and enable static type checking.",
          realWorldAnalogy: "Type hints are like labels on boxes — they tell you what should be inside.",
          content: `Basic type hints:
name: str = "Alice"
age: int = 25
scores: list[int] = [90, 85, 95]

Function type hints:
def greet(name: str) -> str:
    return f"Hello, {name}"

def add(a: int, b: int) -> int:
    return a + b

Optional types:
from typing import Optional
def find_user(id: int) -> Optional[str]:
    return user_name if found else None

Union types:
from typing import Union
def process(value: Union[int, str]) -> str:
    return str(value)`,
          codeExamples: [
            {
              id: "ch33-type-hints",
              title: "Type Hints",
              description: "Adding type annotations",
              code: { python: "from typing import List, Dict, Optional\n\n# Variable hints\nname: str = \"Alice\"\nage: int = 25\nscores: List[int] = [90, 85, 95]\n\n# Function hints\ndef calculate_average(scores: List[int]) -> float:\n    return sum(scores) / len(scores)\n\n# Optional\ndef get_name(user_id: int) -> Optional[str]:\n    return None\n\nprint(f\"Average: {calculate_average(scores)}\")" },
              explanation: "Type hints use : for variables and -> for return types. typing module provides complex types."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch33-ex1",
          title: "Type Hints",
          difficulty: 1,
          description: "Add type hints to a function.",
          requirements: [
            "Create a function with type hints",
            "Use List and Optional from typing",
            "Return appropriate type"
          ],
          starterCode: { python: "from typing import List, Optional\n\ndef find_item(items: List[int], target: int) -> Optional[int]:\n    # Return target if found, else None\n\nresult = find_item([1, 2, 3], 2)\nprint(result)" },
          hints: [
            "Use for loop to search",
            "Return item if found, None otherwise"
          ],
          solution: { python: "from typing import List, Optional\n\ndef find_item(items: List[int], target: int) -> Optional[int]:\n    for item in items:\n        if item == target:\n            return item\n    return None\n\nresult = find_item([1, 2, 3], 2)\nprint(result)" },
          solutionExplanation: "Type hints document expected types. Optional means the value can be the type or None."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch33-q1",
            type: "mcq",
            question: "What does -> indicate?",
            options: [
              "Input type",
              "Return type",
              "Arrow function",
              "Pointer"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "-> indicates the return type of a function."
          },
          {
            id: "ch33-q2",
            type: "mcq",
            question: "What module provides complex types?",
            options: [
              "types",
              "typing",
              "hints",
              "annotations"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "The typing module provides complex types like List, Dict, Optional, Union."
          },
          {
            id: "ch33-q3",
            type: "true-false",
            question: "Type hints are enforced at runtime.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "Type hints are not enforced at runtime. They're for documentation and static type checkers like mypy."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Variable hint",
          value: "name: str = 'Alice'"
        },
        {
          label: "Function hint",
          value: "def func(x: int) -> str:"
        },
        {
          label: "Optional",
          value: "Optional[str]"
        },
        {
          label: "List",
          value: "List[int]"
        }
      ]
    },
    {
      id: "python-ch-34",
      number: 34,
      partLabel: "PART 3: ADVANCED CONTROL FLOW",
      title: "Modules and Packages",
      subtitle: "Organize code into modules",
      difficulty: "Beginner",
      estimatedMinutes: 40,
      xpReward: 100,
      prerequisites: ["python-ch-33"],
      learningObjectives: [
        "Create and import modules",
        "Understand __name__ == '__main__'",
        "Create packages",
        "Use __init__.py"
      ],
      sections: [
        {
          id: "ch34-modules",
          title: "Modules and Packages",
          whyItMatters: "Modules and packages let you organize code into reusable, maintainable units.",
          realWorldAnalogy: "Modules are like chapters in a book, packages are like the whole book — organized, logical groupings.",
          content: `Creating modules:
# mymodule.py
def greet():
    return "Hello"

# main.py
import mymodule
print(mymodule.greet())

Importing variations:
import module
from module import function
import module as alias

__name__ == '__main__':
if __name__ == '__main__':
    # Only runs when script is executed directly
    main()

Packages:
Directory with __init__.py
mypackage/
    __init__.py
    module1.py
    module2.py`,
          codeExamples: [
            {
              id: "ch34-modules",
              title: "Modules",
              description: "Importing and using modules",
              code: { python: "# Math module\nimport math\nprint(f\"Pi: {math.pi}\")\nprint(f\"Sqrt(16): {math.sqrt(16)}\")\n\n# Random module\nimport random\nprint(f\"Random: {random.randint(1, 10)}\")\n\n# Datetime module\nfrom datetime import datetime\nprint(f\"Now: {datetime.now()}\")" },
              explanation: "Modules organize related functions. import module brings in all names. from module import name brings specific names."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch34-ex1",
          title: "Module Practice",
          difficulty: 1,
          description: "Practice importing modules.",
          requirements: [
            "Import math module",
            "Calculate square root of 16",
            "Calculate pi * 2",
            "Print results"
          ],
          starterCode: { python: "import math\n\n# Calculate sqrt(16)\n\n# Calculate pi * 2\nprint(sqrt_result)\nprint(pi_result)" },
          hints: [
            "Use math.sqrt() for square root",
            "Use math.pi for pi"
          ],
          solution: { python: "import math\n\nsqrt_result = math.sqrt(16)\npi_result = math.pi * 2\n\nprint(f\"Sqrt(16): {sqrt_result}\")\nprint(f\"Pi * 2: {pi_result}\")" },
          solutionExplanation: "Modules provide organized functions. Import them to access their functionality."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch34-q1",
            type: "mcq",
            question: "What makes a directory a package?",
            options: [
              "README.md",
              "__init__.py",
              "setup.py",
              "package.json"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "A directory becomes a package when it contains an __init__.py file."
          },
          {
            id: "ch34-q2",
            type: "mcq",
            question: "When is __name__ == '__main__' true?",
            options: [
              "When importing",
              "When running directly",
              "Always",
              "Never"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "__name__ == '__main__' is true only when the script is run directly, not when imported."
          },
          {
            id: "ch34-q3",
            type: "true-false",
            question: "from module import * is recommended.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "Wildcard imports are discouraged because they pollute the namespace and make code unclear."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Import",
          value: "import module"
        },
        {
          label: "From import",
          value: "from module import name"
        },
        {
          label: "Main guard",
          value: "if __name__ == '__main__':"
        }
      ]
    },
    {
      id: "python-ch-35",
      number: 35,
      partLabel: "PART 3: ADVANCED CONTROL FLOW",
      title: "Virtual Environments",
      subtitle: "Isolate project dependencies",
      difficulty: "Beginner",
      estimatedMinutes: 30,
      xpReward: 100,
      prerequisites: ["python-ch-34"],
      learningObjectives: [
        "Create virtual environments",
        "Activate and deactivate venvs",
        "Install packages in venvs",
        "Use requirements.txt"
      ],
      sections: [
        {
          id: "ch35-venv",
          title: "Virtual Environments",
          whyItMatters: "Virtual environments isolate project dependencies to prevent conflicts.",
          realWorldAnalogy: "Virtual environments are like separate workspaces — each project has its own tools without interfering with others.",
          content: `Creating venv:
python -m venv myenv
# or
python3 -m venv myenv

Activating:
Windows:
myenv\\Scripts\\activate
Mac/Linux:
source myenv/bin/activate

Deactivating:
deactivate

requirements.txt:
pip freeze > requirements.txt
pip install -r requirements.txt

Installing packages:
pip install package_name`,
          codeExamples: [
            {
              id: "ch35-venv",
              title: "Virtual Environments",
              description: "Creating and using venvs",
              code: { python: "# This is a demonstration\n# Actual venv commands are run in terminal\n\n# Check if venv is active\nimport sys\nprint(f\"Python: {sys.executable}\")\nprint(f\"Virtual env: hasattr(sys, 'real_prefix') or (hasattr(sys, 'base_prefix') and sys.base_prefix != sys.prefix)}\")" },
              explanation: "Virtual environments isolate dependencies. Create with python -m venv, activate with Scripts/activate or source bin/activate."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch35-ex1",
          title: "Virtual Environment",
          difficulty: 1,
          description: "Understand venv commands (terminal exercise).",
          requirements: [
            "Know how to create a venv",
            "Know how to activate a venv",
            "Know how to install packages"
          ],
          starterCode: { python: "# This is a reference exercise\n# Commands run in terminal, not Python\n\n# Create: python -m venv myenv\n# Activate (Windows): myenv\\\\Scripts\\\\activate\n# Activate (Mac/Linux): source myenv/bin/activate\n# Install: pip install requests" },
          hints: [
            "Use python -m venv to create",
            "Use activate script to activate",
            "Use pip to install packages"
          ],
          solution: { python: "# Reference - commands run in terminal:\n# python -m venv myenv\n# myenv\\\\Scripts\\\\activate  (Windows)\n# source myenv/bin/activate  (Mac/Linux)\n# pip install requests\n# deactivate" },
          solutionExplanation: "Virtual environments are created and managed via terminal commands, not Python code."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch35-q1",
            type: "mcq",
            question: "What command creates a venv?",
            options: [
              "venv create",
              "python -m venv",
              "pip venv",
              "virtualenv create"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "python -m venv creates a virtual environment."
          },
          {
            id: "ch35-q2",
            type: "mcq",
            question: "What does requirements.txt contain?",
            options: [
              "Python code",
              "Package list with versions",
              "Configuration",
              "Documentation"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "requirements.txt lists all packages and their versions for reproducible installs."
          },
          {
            id: "ch35-q3",
            type: "true-false",
            question: "Virtual environments are required for all projects.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "Virtual environments are recommended but not required. They prevent dependency conflicts between projects."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Create",
          value: "python -m venv name"
        },
        {
          label: "Activate Windows",
          value: "name\\Scripts\\activate"
        },
        {
          label: "Activate Mac/Linux",
          value: "source name/bin/activate"
        },
        {
          label: "Deactivate",
          value: "deactivate"
        }
      ]
    },
    {
      id: "python-ch-36",
      number: 36,
      partLabel: "PART 3: ADVANCED CONTROL FLOW",
      title: "Pip and Package Management",
      subtitle: "Install and manage Python packages",
      difficulty: "Beginner",
      estimatedMinutes: 35,
      xpReward: 100,
      prerequisites: ["python-ch-35"],
      learningObjectives: [
        "Use pip to install packages",
        "List installed packages",
        "Uninstall packages",
        "Search for packages"
      ],
      sections: [
        {
          id: "ch36-pip",
          title: "Package Management with Pip",
          whyItMatters: "Pip is Python's package manager for installing and managing third-party libraries.",
          realWorldAnalogy: "Pip is like an app store for Python — you can browse, install, and manage packages.",
          content: `Installing packages:
pip install package_name
pip install package_name==version

Listing packages:
pip list
pip show package_name

Uninstalling:
pip uninstall package_name

Searching:
pip search search_term

Upgrading:
pip install --upgrade package_name

Requirements files:
pip freeze > requirements.txt
pip install -r requirements.txt`,
          codeExamples: [
            {
              id: "ch36-pip",
              title: "Pip Commands",
              description: "Common pip operations",
              code: { python: "# This is a reference\n# Actual pip commands run in terminal\n\n# Install\n# pip install requests\n\n# List installed\n# pip list\n\n# Show package info\n# pip show requests\n\n# Upgrade\n# pip install --upgrade requests\n\n# Uninstall\n# pip uninstall requests" },
              explanation: "Pip commands are run in the terminal. They manage Python packages from PyPI."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch36-ex1",
          title: "Pip Practice",
          difficulty: 1,
          description: "Understand pip commands (terminal exercise).",
          requirements: [
            "Know how to install a package",
            "Know how to list packages",
            "Know how to create requirements.txt"
          ],
          starterCode: { python: "# Reference - commands run in terminal\n\n# Install: pip install requests\n# List: pip list\n# Freeze: pip freeze > requirements.txt\n# Install from file: pip install -r requirements.txt" },
          hints: [
            "pip install to add packages",
            "pip list to see installed",
            "pip freeze to save list"
          ],
          solution: { python: "# Terminal commands:\n# pip install requests\n# pip list\n# pip freeze > requirements.txt\n# pip install -r requirements.txt\n# pip uninstall requests" },
          solutionExplanation: "Pip manages packages through terminal commands. It's the standard Python package manager."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch36-q1",
            type: "mcq",
            question: "What does pip install do?",
            options: [
              "Creates packages",
              "Installs packages",
              "Searches packages",
              "Lists packages"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "pip install downloads and installs packages from PyPI."
          },
          {
            id: "ch36-q2",
            type: "mcq",
            question: "What does pip freeze do?",
            options: [
              "Freezes Python",
              "Lists installed packages",
              "Creates requirements.txt",
              "Uninstalls packages"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "pip freeze outputs installed packages in requirements.txt format for reproducibility."
          },
          {
            id: "ch36-q3",
            type: "true-false",
            question: "Pip is built into Python.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "Pip is bundled with Python but is a separate tool. It's not part of the Python language itself."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Install",
          value: "pip install package"
        },
        {
          label: "List",
          value: "pip list"
        },
        {
          label: "Freeze",
          value: "pip freeze > requirements.txt"
        },
        {
          label: "Uninstall",
          value: "pip uninstall package"
        }
      ]
    },
    {
      id: "python-ch-37",
      number: 37,
      partLabel: "PART 4: MORE ADVANCED TOPICS",
      title: "Regular Expressions — Introduction",
      subtitle: "Pattern matching with regex",
      difficulty: "Intermediate",
      estimatedMinutes: 50,
      xpReward: 120,
      prerequisites: ["python-ch-36"],
      learningObjectives: [
        "Understand regex patterns",
        "Use re module",
        "Match and search patterns",
        "Use character classes"
      ],
      sections: [
        {
          id: "ch37-regex-intro",
          title: "Regex Basics",
          whyItMatters: "Regular expressions are powerful for pattern matching in text.",
          realWorldAnalogy: "Regex is like a super-powered search and replace — find patterns, not just exact matches.",
          content: `Import re module:
import re

Basic patterns:
re.match(r'hello', 'hello world')  # Match at start
re.search(r'world', 'hello world')  # Search anywhere
re.findall(r'l', 'hello')           # Find all matches

Character classes:
. - Any character
\\d - Digit
\\w - Word character
\\s - Whitespace
[a-z] - Range`,
          codeExamples: [
            {
              id: "ch37-regex",
              title: "Regex Basics",
              description: "Introduction to regex patterns",
              code: { python: "import re\n\ntext = \"Hello 123 World 456\"\n\n# Find all digits\nnumbers = re.findall(r'\\d+', text)\nprint(f\"Numbers: {numbers}\")\n\n# Find all words\nwords = re.findall(r'\\w+', text)\nprint(f\"Words: {words}\")\n\n# Match pattern\nmatch = re.match(r'Hello', text)\nprint(f\"Match: {match.group() if match else 'None'}\")" },
              explanation: "re module provides regex functions. \\d matches digits, \\w matches word characters."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch37-ex1",
          title: "Regex Practice",
          difficulty: 1,
          description: "Use regex to find patterns.",
          requirements: [
            "Find all email addresses in a text",
            "Use re.findall with email pattern",
            "Print the results"
          ],
          starterCode: { python: "import re\n\ntext = \"Contact alice@example.com or bob@test.com\"\n\n# Find emails using regex\n\nprint(emails)" },
          hints: [
            "Pattern: r'\\w+@\\w+\\.\\w+'",
            "Use re.findall()"
          ],
          solution: { python: "import re\n\ntext = \"Contact alice@example.com or bob@test.com\"\nemails = re.findall(r'\\w+@\\w+\\.\\w+', text)\nprint(f\"Emails: {emails}\")" },
          solutionExplanation: "Regex pattern \\w+@\\w+\\.\\w+ matches email format. re.findall returns all matches."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch37-q1",
            type: "mcq",
            question: "What module provides regex?",
            options: [
              "regex",
              "re",
              "pattern",
              "string"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "The re module provides regular expression operations in Python."
          },
          {
            id: "ch37-q2",
            type: "mcq",
            question: "What does \\d match?",
            options: [
              "Any character",
              "Digit",
              "Word character",
              "Whitespace"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "\\d matches any digit (0-9)."
          },
          {
            id: "ch37-q3",
            type: "true-false",
            question: "re.match searches the entire string.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "re.match only checks for a match at the beginning of the string. re.search searches anywhere."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Import",
          value: "import re"
        },
        {
          label: "Match",
          value: "re.match(pattern, text)"
        },
        {
          label: "Find all",
          value: "re.findall(pattern, text)"
        },
        {
          label: "\\d",
          value: "Digit"
        }
      ]
    },
    {
      id: "python-ch-38",
      number: 38,
      partLabel: "PART 4: MORE ADVANCED TOPICS",
      title: "Regular Expressions — Advanced",
      subtitle: "Complex pattern matching",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 120,
      prerequisites: ["python-ch-37"],
      learningObjectives: [
        "Use quantifiers",
        "Capture groups",
        "Use anchors",
        "Replace with regex"
      ],
      sections: [
        {
          id: "ch38-regex-advanced",
          title: "Advanced Regex",
          whyItMatters: "Advanced regex patterns enable complex text processing.",
          realWorldAnalogy: "Advanced regex is like having a Swiss Army knife for text — one tool for many patterns.",
          content: `Quantifiers:
* - Zero or more
+ - One or more
? - Zero or one
{n} - Exactly n
{n,m} - n to m

Anchors:
^ - Start of string
$ - End of string
\\b - Word boundary

Groups:
() - Capturing group
(?:) - Non-capturing group

Replacement:
re.sub(pattern, replacement, text)`,
          codeExamples: [
            {
              id: "ch38-regex-advanced",
              title: "Advanced Regex",
              description: "Quantifiers and groups",
              code: { python: "import re\n\ntext = \"abc123def456\"\n\n# Quantifiers\nprint(re.findall(r'\\d+', text))  # ['123', '456']\n\n# Anchors\nprint(re.findall(r'^\\w+', text))  # ['abc']\n\n# Groups\nemail = \"user@example.com\"\nmatch = re.match(r'(\\w+)@(\\w+)', email)\nif match:\n    print(f\"User: {match.group(1)}, Domain: {match.group(2)}\")" },
              explanation: "Quantifiers control repetition. Anchors match positions. Groups capture parts of the match."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch38-ex1",
          title: "Advanced Regex",
          difficulty: 1,
          description: "Use regex with groups.",
          requirements: [
            "Extract username and domain from email",
            "Use capturing groups",
            "Print both parts"
          ],
          starterCode: { python: "import re\n\nemail = \"alice@example.com\"\n\n# Extract using groups\n\nprint(username, domain)" },
          hints: [
            "Pattern: r'(\\w+)@(\\w+\\.\\w+)'",
            "Use match.group(1) and match.group(2)"
          ],
          solution: { python: "import re\n\nemail = \"alice@example.com\"\nmatch = re.match(r'(\\w+)@(\\w+\\.\\w+)', email)\nif match:\n    username = match.group(1)\n    domain = match.group(2)\n    print(f\"Username: {username}, Domain: {domain}\")" },
          solutionExplanation: "Parentheses create capturing groups. group(1) is first group, group(2) is second."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch38-q1",
            type: "mcq",
            question: "What does + mean in regex?",
            options: [
              "Zero or more",
              "One or more",
              "Zero or one",
              "Exactly one"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "+ means one or more occurrences."
          },
          {
            id: "ch38-q2",
            type: "mcq",
            question: "What does ^ anchor to?",
            options: [
              "End of string",
              "Start of string",
              "Word boundary",
              "Any position"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "^ anchors the pattern to the start of the string."
          },
          {
            id: "ch38-q3",
            type: "true-false",
            question: "Capturing groups use ().",
            correctAnswer: true,
            difficulty: 1,
            explanation: "Parentheses create capturing groups that can be accessed with group() method."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "+",
          value: "One or more"
        },
        {
          label: "*",
          value: "Zero or more"
        },
        {
          label: "^",
          value: "Start anchor"
        },
        {
          label: "$",
          value: "End anchor"
        }
      ]
    },
    {
      id: "python-ch-39",
      number: 39,
      partLabel: "PART 4: MORE ADVANCED TOPICS",
      title: "Lambda Functions",
      subtitle: "Anonymous functions",
      difficulty: "Intermediate",
      estimatedMinutes: 35,
      xpReward: 100,
      prerequisites: ["python-ch-38"],
      learningObjectives: [
        "Create lambda functions",
        "Use lambda with map/filter",
        "Understand lambda limitations",
        "Know when to use lambda"
      ],
      sections: [
        {
          id: "ch39-lambda",
          title: "Lambda Functions",
          whyItMatters: "Lambda functions provide concise syntax for simple functions.",
          realWorldAnalogy: "Lambda is like a disposable tool — quick, simple, and meant for one-time use.",
          content: `Basic lambda:
lambda x: x * 2
# Equivalent to:
def double(x):
    return x * 2

With map:
numbers = [1, 2, 3]
doubled = list(map(lambda x: x * 2, numbers))

With filter:
evens = list(filter(lambda x: x % 2 == 0, numbers))

Limitations:
- Only one expression
- No statements
- No type hints
- Should be simple`,
          codeExamples: [
            {
              id: "ch39-lambda",
              title: "Lambda Functions",
              description: "Using lambda for simple operations",
              code: { python: "# Basic lambda\nadd = lambda x, y: x + y\nprint(add(3, 5))  # 8\n\n# With map\nnumbers = [1, 2, 3, 4, 5]\nsquared = list(map(lambda x: x**2, numbers))\nprint(f\"Squared: {squared}\")\n\n# With filter\nevens = list(filter(lambda x: x % 2 == 0, numbers))\nprint(f\"Evens: {evens}\")" },
              explanation: "lambda creates anonymous functions. Best for simple one-liners with map/filter."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch39-ex1",
          title: "Lambda Practice",
          difficulty: 1,
          description: "Use lambda with map.",
          requirements: [
            "Create a list of numbers",
            "Use lambda with map to square them",
            "Print the result"
          ],
          starterCode: { python: "numbers = [1, 2, 3, 4, 5]\n\n# Use lambda with map to square\n\nprint(squared)" },
          hints: [
            "Use map(lambda x: x**2, numbers)",
            "Convert to list"
          ],
          solution: { python: "numbers = [1, 2, 3, 4, 5]\nsquared = list(map(lambda x: x**2, numbers))\nprint(f\"Squared: {squared}\")" },
          solutionExplanation: "lambda x: x**2 is an anonymous function that squares x. map applies it to each element."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch39-q1",
            type: "mcq",
            question: "What keyword creates lambda?",
            options: [
              "lambda",
              "anon",
              "func",
              "def"
            ],
            correctAnswer: 0,
            difficulty: 1,
            explanation: "lambda keyword creates anonymous functions."
          },
          {
            id: "ch39-q2",
            type: "mcq",
            question: "Can lambda have multiple statements?",
            options: [
              "Yes",
              "No",
              "Only if simple",
              "With semicolons"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Lambda can only contain a single expression, not statements."
          },
          {
            id: "ch39-q3",
            type: "true-false",
            question: "Lambda functions have names.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "Lambda functions are anonymous - they don't have names unless assigned to a variable."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Syntax",
          value: "lambda x: x * 2"
        },
        {
          label: "Map",
          value: "map(lambda x: f(x), list)"
        },
        {
          label: "Filter",
          value: "filter(lambda x: condition, list)"
        }
      ]
    },
    {
      id: "python-ch-40",
      number: 40,
      partLabel: "PART 4: MORE ADVANCED TOPICS",
      title: "Map, Filter, Reduce",
      subtitle: "Functional programming tools",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 110,
      prerequisites: ["python-ch-39"],
      learningObjectives: [
        "Use map for transformations",
        "Use filter for filtering",
        "Use reduce for accumulation",
        "Understand functional paradigm"
      ],
      sections: [
        {
          id: "ch40-map-filter-reduce",
          title: "Functional Programming",
          whyItMatters: "Map, filter, and reduce provide powerful functional programming patterns.",
          realWorldAnalogy: "These are like assembly line tools — transform, filter, and combine data efficiently.",
          content: `Map - transform each element:
numbers = [1, 2, 3]
doubled = map(lambda x: x * 2, numbers)

Filter - keep matching elements:
evens = filter(lambda x: x % 2 == 0, numbers)

Reduce - combine elements:
from functools import reduce
total = reduce(lambda x, y: x + y, numbers)

List comprehensions often preferred:
[x * 2 for x in numbers]
[x for x in numbers if x % 2 == 0]`,
          codeExamples: [
            {
              id: "ch40-map-filter-reduce",
              title: "Functional Programming",
              description: "Map, filter, and reduce",
              code: { python: "from functools import reduce\n\nnumbers = [1, 2, 3, 4, 5]\n\n# Map\nmapped = list(map(lambda x: x * 2, numbers))\nprint(f\"Mapped: {mapped}\")\n\n# Filter\nfiltered = list(filter(lambda x: x % 2 == 0, numbers))\nprint(f\"Filtered: {filtered}\")\n\n# Reduce\nsummed = reduce(lambda x, y: x + y, numbers)\nprint(f\"Sum: {summed}\")" },
              explanation: "map transforms, filter selects, reduce combines. List comprehensions are often more readable."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch40-ex1",
          title: "Map Filter Reduce",
          difficulty: 1,
          description: "Use functional programming tools.",
          requirements: [
            "Use map to square numbers",
            "Use filter to keep even numbers",
            "Use reduce to sum the result"
          ],
          starterCode: { python: "from functools import reduce\n\nnumbers = [1, 2, 3, 4, 5, 6]\n\n# Map, filter, reduce chain\n\nprint(result)" },
          hints: [
            "Chain: map -> filter -> reduce",
            "Convert map/filter to list"
          ],
          solution: { python: "from functools import reduce\n\nnumbers = [1, 2, 3, 4, 5, 6]\n\nresult = reduce(\n    lambda x, y: x + y,\n    filter(lambda x: x % 2 == 0, map(lambda x: x**2, numbers))\n)\nprint(f\"Result: {result}\")" },
          solutionExplanation: "Chain operations: map squares, filter keeps evens, reduce sums them all."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch40-q1",
            type: "mcq",
            question: "What does map do?",
            options: [
              "Filters elements",
              "Transforms each element",
              "Reduces elements",
              "Sorts elements"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "map applies a function to each element, transforming them."
          },
          {
            id: "ch40-q2",
            type: "mcq",
            question: "Where is reduce located?",
            options: [
              "builtins",
              "functools",
              "itertools",
              "operator"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "reduce is in the functools module."
          },
          {
            id: "ch40-q3",
            type: "true-false",
            question: "List comprehensions replace map/filter.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "List comprehensions are often more readable than map/filter for simple operations."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Map",
          value: "map(func, iterable)"
        },
        {
          label: "Filter",
          value: "filter(func, iterable)"
        },
        {
          label: "Reduce",
          value: "from functools import reduce"
        }
      ]
    },
    {
      id: "python-ch-41",
      number: 41,
      partLabel: "PART 4: MORE ADVANCED TOPICS",
      title: "Itertools",
      subtitle: "Iterator building blocks",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 110,
      prerequisites: ["python-ch-40"],
      learningObjectives: [
        "Use itertools functions",
        "Create efficient iterators",
        "Chain iterators",
        "Use combinations"
      ],
      sections: [
        {
          id: "ch41-itertools",
          title: "Itertools Module",
          whyItMatters: "Itertools provides efficient iterator tools for looping.",
          realWorldAnalogy: "Itertools is like LEGO for loops — build complex iterations from simple blocks.",
          content: `Common itertools:
from itertools import count, cycle, repeat

count(5) -> 5, 6, 7, ...
cycle([1,2]) -> 1, 2, 1, 2, ...
repeat(3, 4) -> 3, 3, 3, 3

Combinations:
from itertools import combinations, permutations

combinations([1,2,3], 2) -> (1,2), (1,3), (2,3)
permutations([1,2], 2) -> (1,2), (2,1)

Chain:
from itertools import chain
chain([1,2], [3,4]) -> 1, 2, 3, 4`,
          codeExamples: [
            {
              id: "ch41-itertools",
              title: "Itertools",
              description: "Iterator building blocks",
              code: { python: "from itertools import count, cycle, repeat, combinations, chain\n\n# Count\nfor i in count(5):\n    if i > 8:\n        break\n    print(i, end=' ')\n\nprint()\n\n# Repeat\nfor x in repeat(2, 3):\n    print(x, end=' ')\n\nprint()\n\n# Combinations\nprint(list(combinations([1, 2, 3], 2)))\n\n# Chain\nprint(list(chain([1, 2], [3, 4])))" },
              explanation: "itertools provides efficient, memory-saving iterator tools."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch41-ex1",
          title: "Itertools Practice",
          difficulty: 1,
          description: "Use itertools combinations.",
          requirements: [
            "Use itertools.combinations",
            "Find all pairs from a list",
            "Print the combinations"
          ],
          starterCode: { python: "from itertools import combinations\n\nitems = ['a', 'b', 'c']\n\n# Get all pairs\n\nprint(pairs)" },
          hints: [
            "Use combinations(items, 2)",
            "Convert to list"
          ],
          solution: { python: "from itertools import combinations\n\nitems = ['a', 'b', 'c']\npairs = list(combinations(items, 2))\nprint(f\"Pairs: {pairs}\")" },
          solutionExplanation: "combinations(items, 2) generates all unique pairs of length 2."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch41-q1",
            type: "mcq",
            question: "What does itertools provide?",
            options: [
              "GUI tools",
              "Iterator building blocks",
              "Database tools",
              "Network tools"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "itertools provides efficient iterator tools for looping and combining."
          },
          {
            id: "ch41-q2",
            type: "mcq",
            question: "What does combinations() do?",
            options: [
              "All permutations",
              "All unique combinations",
              "Repeated elements",
              "Sorted output"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "combinations() returns all unique combinations of a given length."
          },
          {
            id: "ch41-q3",
            type: "true-false",
            question: "itertools is memory efficient.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "itertools creates lazy iterators, making them memory efficient for large datasets."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Import",
          value: "from itertools import *"
        },
        {
          label: "Count",
          value: "count(start)"
        },
        {
          label: "Combinations",
          value: "combinations(iter, r)"
        },
        {
          label: "Chain",
          value: "chain(*iterables)"
        }
      ]
    },
    {
      id: "python-ch-42",
      number: 42,
      partLabel: "PART 4: MORE ADVANCED TOPICS",
      title: "Datetime",
      subtitle: "Work with dates and times",
      difficulty: "Beginner",
      estimatedMinutes: 40,
      xpReward: 100,
      prerequisites: ["python-ch-41"],
      learningObjectives: [
        "Parse and format dates",
        "Work with timezones",
        "Calculate time differences",
        "Use timedelta"
      ],
      sections: [
        {
          id: "ch42-datetime",
          title: "Datetime Module",
          whyItMatters: "Datetime handling is essential for scheduling, logging, and time-based calculations.",
          realWorldAnalogy: "Datetime is like a calendar and stopwatch combined — track dates and times precisely.",
          content: `Current time:
from datetime import datetime
now = datetime.now()

Creating dates:
date = datetime(2024, 1, 1)
date = datetime.strptime('2024-01-01', '%Y-%m-%d')

Formatting:
formatted = now.strftime('%Y-%m-%d %H:%M:%S')

Time differences:
from datetime import timedelta
tomorrow = now + timedelta(days=1)
diff = date2 - date1`,
          codeExamples: [
            {
              id: "ch42-datetime",
              title: "Datetime",
              description: "Working with dates and times",
              code: { python: "from datetime import datetime, timedelta\n\nnow = datetime.now()\nprint(f\"Now: {now}\")\nprint(f\"Formatted: {now.strftime('%Y-%m-%d %H:%M')}\")\n\n# Create specific date\nbirthday = datetime(1990, 5, 15)\nprint(f\"Birthday: {birthday}\")\n\n# Time difference\nfuture = now + timedelta(days=30)\nprint(f\"30 days from now: {future}\")" },
              explanation: "datetime handles dates and times. timedelta represents time differences."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch42-ex1",
          title: "Datetime Practice",
          difficulty: 1,
          description: "Work with datetime.",
          requirements: [
            "Get current datetime",
            "Calculate date 7 days from now",
            "Format and print both"
          ],
          starterCode: { python: "from datetime import datetime, timedelta\n\nnow = datetime.now()\n\n# Calculate 7 days from now\n\nprint(f\"Now: {now}\")\nprint(f\"Week later: {week_later}\")" },
          hints: [
            "Use timedelta(days=7)",
            "Add to now"
          ],
          solution: { python: "from datetime import datetime, timedelta\n\nnow = datetime.now()\nweek_later = now + timedelta(days=7)\n\nprint(f\"Now: {now.strftime('%Y-%m-%d')}\")\nprint(f\"Week later: {week_later.strftime('%Y-%m-%d')}\")" },
          solutionExplanation: "timedelta represents time differences. Add it to datetime to calculate future/past dates."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch42-q1",
            type: "mcq",
            question: "What gets current time?",
            options: [
              "datetime.current()",
              "datetime.now()",
              "datetime.today()",
              "datetime.time()"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "datetime.now() returns the current local date and time."
          },
          {
            id: "ch42-q2",
            type: "mcq",
            question: "What represents time difference?",
            options: [
              "datetime",
              "timedelta",
              "timespan",
              "duration"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "timedelta represents the difference between two datetime objects."
          },
          {
            id: "ch42-q3",
            type: "true-false",
            question: "strftime formats datetime.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "strftime converts datetime to string format. strptime does the opposite."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Now",
          value: "datetime.now()"
        },
        {
          label: "Format",
          value: "strftime('%Y-%m-%d')"
        },
        {
          label: "Parse",
          value: "strptime(string, format)"
        },
        {
          label: "Difference",
          value: "timedelta(days=1)"
        }
      ]
    },
    {
      id: "python-ch-43",
      number: 43,
      partLabel: "PART 4: MORE ADVANCED TOPICS",
      title: "OS Module",
      subtitle: "Interact with the operating system",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 100,
      prerequisites: ["python-ch-42"],
      learningObjectives: [
        "Navigate file system",
        "List directory contents",
        "Execute system commands",
        "Get environment variables"
      ],
      sections: [
        {
          id: "ch43-os-module",
          title: "OS Module",
          whyItMatters: "The os module lets you interact with the operating system.",
          realWorldAnalogy: "OS module is like a remote control for your computer — control files, paths, and environment.",
          content: `Import os:
import os

Current directory:
os.getcwd()
os.chdir('/path')

List files:
os.listdir('.')
os.listdir('/path')

File operations:
os.path.exists('file.txt')
os.path.isfile('file.txt')
os.path.isdir('folder')

Environment:
os.environ['PATH']
os.getenv('HOME')`,
          codeExamples: [
            {
              id: "ch43-os",
              title: "OS Module",
              description: "Operating system interaction",
              code: { python: "import os\n\n# Current directory\nprint(f\"Current: {os.getcwd()}\")\n\n# List files\nfiles = os.listdir('.')\nprint(f\"Files: {files[:5]}...\")\n\n# Path operations\nprint(f\"Exists: {os.path.exists('python-curriculum.ts')}\")\n\n# Environment\nprint(f\"Home: {os.getenv('USERPROFILE')}\")" },
              explanation: "os module provides portable operating system interface. pathlib is often preferred for paths."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch43-ex1",
          title: "OS Module",
          difficulty: 1,
          description: "Use os module functions.",
          requirements: [
            "Get current working directory",
            "List files in current directory",
            "Print both"
          ],
          starterCode: { python: "import os\n\n# Get current directory\n\n# List files\n\nprint(f\"Directory: {cwd}\")\nprint(f\"Files: {files}\")" },
          hints: [
            "Use os.getcwd()",
            "Use os.listdir('.')"
          ],
          solution: { python: "import os\n\ncwd = os.getcwd()\nfiles = os.listdir('.')\n\nprint(f\"Directory: {cwd}\")\nprint(f\"Files: {files}\")" },
          solutionExplanation: "os.getcwd() returns current directory. os.listdir('.') returns files in current directory."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch43-q1",
            type: "mcq",
            question: "What gets current directory?",
            options: [
              "os.pwd()",
              "os.getcwd()",
              "os.dir()",
              "os.path()"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "os.getcwd() returns the current working directory."
          },
          {
            id: "ch43-q2",
            type: "mcq",
            question: "What does os.listdir() do?",
            options: [
              "List all directories",
              "List files in directory",
              "List environment variables",
              "List processes"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "os.listdir() returns a list of files and directories in a path."
          },
          {
            id: "ch43-q3",
            type: "true-false",
            question: "os.environ contains environment variables.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "os.environ is a dictionary containing environment variables."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Get cwd",
          value: "os.getcwd()"
        },
        {
          label: "List dir",
          value: "os.listdir(path)"
        },
        {
          label: "Exists",
          value: "os.path.exists(path)"
        },
        {
          label: "Env var",
          value: "os.getenv('VAR')"
        }
      ]
    },
    {
      id: "python-ch-44",
      number: 44,
      partLabel: "PART 4: MORE ADVANCED TOPICS",
      title: "Logging",
      subtitle: "Log messages for debugging",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 100,
      prerequisites: ["python-ch-43"],
      learningObjectives: [
        "Configure logging",
        "Use log levels",
        "Log to files",
        "Format log messages"
      ],
      sections: [
        {
          id: "ch44-logging",
          title: "Logging Module",
          whyItMatters: "Logging is essential for debugging and monitoring applications.",
          realWorldAnalogy: "Logging is like a black box recorder — it records what happens for later analysis.",
          content: `Basic logging:
import logging
logging.basicConfig(level=logging.INFO)
logging.info('Info message')

Log levels:
DEBUG - Detailed info
INFO - General info
WARNING - Warning messages
ERROR - Error messages
CRITICAL - Critical errors

Log to file:
logging.basicConfig(
    filename='app.log',
    level=logging.INFO
)

Formatting:
logging.basicConfig(
    format='%(asctime)s - %(levelname)s - %(message)s'
)`,
          codeExamples: [
            {
              id: "ch44-logging",
              title: "Logging",
              description: "Python logging module",
              code: { python: "import logging\n\nlogging.basicConfig(\n    level=logging.INFO,\n    format='%(asctime)s - %(levelname)s - %(message)s'\n)\n\nlogging.debug('Debug message')  # Won't show\nlogging.info('Info message')\nlogging.warning('Warning message')\nlogging.error('Error message')\nlogging.critical('Critical message')" },
              explanation: "Logging provides different severity levels. Configure format and output destination."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch44-ex1",
          title: "Logging",
          difficulty: 1,
          description: "Configure and use logging.",
          requirements: [
            "Configure logging with INFO level",
            "Log info, warning, and error messages",
            "Run the code to see output"
          ],
          starterCode: { python: "import logging\n\n# Configure logging\n\nlogging.info('Application started')\nlogging.warning('Low disk space')\nlogging.error('Connection failed')" },
          hints: [
            "Use logging.basicConfig(level=logging.INFO)",
            "Add format parameter"
          ],
          solution: { python: "import logging\n\nlogging.basicConfig(\n    level=logging.INFO,\n    format='%(asctime)s - %(levelname)s - %(message)s'\n)\n\nlogging.info('Application started')\nlogging.warning('Low disk space')\nlogging.error('Connection failed')" },
          solutionExplanation: "basicConfig sets up logging. level controls what messages are shown. format controls output."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch44-q1",
            type: "mcq",
            question: "What is the highest log level?",
            options: [
              "ERROR",
              "CRITICAL",
              "FATAL",
              "EMERGENCY"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "CRITICAL is the highest log level in Python's logging module."
          },
          {
            id: "ch44-q2",
            type: "mcq",
            question: "What function configures logging?",
            options: [
              "logging.setup()",
              "logging.config()",
              "logging.basicConfig()",
              "logging.configure()"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "logging.basicConfig() configures the root logger."
          },
          {
            id: "ch44-q3",
            type: "true-false",
            question: "print() is better than logging for production.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "Logging is better for production because it provides levels, formatting, and output control."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Import",
          value: "import logging"
        },
        {
          label: "Configure",
          value: "logging.basicConfig()"
        },
        {
          label: "Levels",
          value: "DEBUG, INFO, WARNING, ERROR, CRITICAL"
        }
      ]
    },
    {
      id: "python-ch-45",
      number: 45,
      partLabel: "PART 5: ADVANCED PYTHON",
      title: "Classes and Objects — Deep Dive",
      subtitle: "Object-oriented programming fundamentals",
      difficulty: "Intermediate",
      estimatedMinutes: 55,
      xpReward: 130,
      prerequisites: ["python-ch-44"],
      learningObjectives: [
        "Understand class structure",
        "Create and use objects",
        "Use __init__ for initialization",
        "Understand self keyword"
      ],
      sections: [
        {
          id: "ch45-classes-intro",
          title: "Class Basics",
          whyItMatters: "Classes are the foundation of object-oriented programming in Python.",
          realWorldAnalogy: "A class is like a blueprint — it defines the structure, and objects are the buildings made from that blueprint.",
          content: `Defining a class:
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Hello, I'm {self.name}"

Creating objects:
person = Person("Alice", 30)
print(person.greet())

self refers to the instance:
self.name = name  # Instance attribute
self is automatically passed to methods.`,
          codeExamples: [
            {
              id: "ch45-classes",
              title: "Classes and Objects",
              description: "Creating and using classes",
              code: { python: "class Car:\n    def __init__(self, make, model, year):\n        self.make = make\n        self.model = model\n        self.year = year\n    \n    def describe(self):\n        return f\"{self.year} {self.make} {self.model}\"\n\ncar = Car(\"Toyota\", \"Camry\", 2022)\nprint(car.describe())" },
              explanation: "__init__ initializes new instances. self refers to the current object being created."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch45-ex1",
          title: "Class Definition",
          difficulty: 1,
          description: "Create a simple class.",
          requirements: [
            "Create a Book class with title and author",
            "Add a method to return a description",
            "Create an instance and use the method"
          ],
          starterCode: { python: "class Book:\n    def __init__(self, title, author):\n        # Initialize attributes\n    \n    def describe(self):\n        # Return description\n\nbook = Book(\"Python 101\", \"John Doe\")\nprint(book.describe())" },
          hints: [
            "Use self.title and self.author in __init__",
            "Return formatted string in describe"
          ],
          solution: { python: "class Book:\n    def __init__(self, title, author):\n        self.title = title\n        self.author = author\n    \n    def describe(self):\n        return f\"'{self.title}' by {self.author}\"\n\nbook = Book(\"Python 101\", \"John Doe\")\nprint(book.describe())" },
          solutionExplanation: "Classes bundle data and behavior. __init__ sets up initial state. self is the instance."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch45-q1",
            type: "mcq",
            question: "What does __init__ do?",
            options: [
              "Deletes object",
              "Initializes object",
              "Returns object",
              "Validates object"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "__init__ is called when creating a new instance to initialize its attributes."
          },
          {
            id: "ch45-q2",
            type: "mcq",
            question: "What does self represent?",
            options: [
              "The class",
              "The instance",
              "The module",
              "The method"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "self refers to the current instance of the class being operated on."
          },
          {
            id: "ch45-q3",
            type: "true-false",
            question: "Classes can have multiple methods.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "Classes can have any number of methods to define their behavior."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Define class",
          value: "class MyClass:"
        },
        {
          label: "__init__",
          value: "def __init__(self, params):"
        },
        {
          label: "self",
          value: "Instance reference"
        }
      ]
    },
    {
      id: "python-ch-46",
      number: 46,
      partLabel: "PART 5: ADVANCED PYTHON",
      title: "Inheritance",
      subtitle: "Create class hierarchies",
      difficulty: "Intermediate",
      estimatedMinutes: 50,
      xpReward: 130,
      prerequisites: ["python-ch-45"],
      learningObjectives: [
        "Create subclasses",
        "Use super() to call parent methods",
        "Override methods",
        "Understand method resolution order"
      ],
      sections: [
        {
          id: "ch46-inheritance",
          title: "Class Inheritance",
          whyItMatters: "Inheritance allows code reuse and hierarchical relationships between classes.",
          realWorldAnalogy: "Inheritance is like genetics — children inherit traits from parents but can have their own unique characteristics.",
          content: `Basic inheritance:
class Animal:
    def speak(self):
        return "Some sound"

class Dog(Animal):
    def speak(self):
        return "Woof!"

Using super():
class Dog(Animal):
    def __init__(self, name):
        super().__init__()
        self.name = name

Method overriding:
Child class can override parent methods.
Use super() to call parent implementation.`,
          codeExamples: [
            {
              id: "ch46-inheritance",
              title: "Inheritance",
              description: "Creating class hierarchies",
              code: { python: "class Animal:\n    def __init__(self, name):\n        self.name = name\n    \n    def speak(self):\n        return f\"{self.name} makes a sound\"\n\nclass Dog(Animal):\n    def speak(self):\n        return f\"{self.name} barks\"\n\nclass Cat(Animal):\n    def speak(self):\n        return f\"{self.name} meows\"\n\ndog = Dog(\"Buddy\")\ncat = Cat(\"Whiskers\")\nprint(dog.speak())\nprint(cat.speak())" },
              explanation: "Child classes inherit from parent with (Parent). They can override parent methods."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch46-ex1",
          title: "Inheritance",
          difficulty: 1,
          description: "Create a subclass.",
          requirements: [
            "Create Vehicle class with brand",
            "Create Car subclass that inherits Vehicle",
            "Add method to Car to describe the car"
          ],
          starterCode: { python: "class Vehicle:\n    def __init__(self, brand):\n        self.brand = brand\n\nclass Car(Vehicle):\n    def __init__(self, brand, model):\n        super().__init__(brand)\n        self.model = model\n    \n    def describe(self):\n        # Return description\n\ncar = Car(\"Toyota\", \"Camry\")\nprint(car.describe())" },
          hints: [
            "Use super().__init__() to call parent",
            "Include both brand and model in description"
          ],
          solution: { python: "class Vehicle:\n    def __init__(self, brand):\n        self.brand = brand\n\nclass Car(Vehicle):\n    def __init__(self, brand, model):\n        super().__init__(brand)\n        self.model = model\n    \n    def describe(self):\n        return f\"{self.brand} {self.model}\"\n\ncar = Car(\"Toyota\", \"Camry\")\nprint(car.describe())" },
          solutionExplanation: "super().__init__() calls the parent's __init__. This ensures parent attributes are initialized."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch46-q1",
            type: "mcq",
            question: "What keyword enables inheritance?",
            options: [
              "inherits",
              "extends",
              "(Parent)",
              "parent:"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "Parentheses with parent class name (Parent) enable inheritance."
          },
          {
            id: "ch46-q2",
            type: "mcq",
            question: "What does super() do?",
            options: [
              "Returns parent class",
              "Calls parent method",
              "Creates super object",
              "Skips method"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "super() returns a proxy object to access parent class methods."
          },
          {
            id: "ch46-q3",
            type: "true-false",
            question: "Multiple inheritance is supported in Python.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "Python supports multiple inheritance: class Child(Parent1, Parent2)."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Inherit",
          value: "class Child(Parent):"
        },
        {
          label: "super()",
          value: "super().__init__()"
        },
        {
          label: "Override",
          value: "Redefine parent method"
        }
      ]
    },
    {
      id: "python-ch-47",
      number: 47,
      partLabel: "PART 5: ADVANCED PYTHON",
      title: "Encapsulation",
      subtitle: "Protect class data",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 120,
      prerequisites: ["python-ch-46"],
      learningObjectives: [
        "Use private attributes",
        "Use property decorators",
        "Implement getters and setters",
        "Understand naming conventions"
      ],
      sections: [
        {
          id: "ch47-encapsulation",
          title: "Data Encapsulation",
          whyItMatters: "Encapsulation protects internal state and provides controlled access.",
          realWorldAnalogy: "Encapsulation is like a safe with a controlled access panel — data is protected but accessible through defined methods.",
          content: `Private attributes (convention):
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Private
    
    def get_balance(self):
        return self.__balance

Property decorator:
class Circle:
    def __init__(self, radius):
        self.__radius = radius
    
    @property
    def radius(self):
        return self.__radius
    
    @radius.setter
    def radius(self, value):
        if value > 0:
            self.__radius = value`,
          codeExamples: [
            {
              id: "ch47-encapsulation",
              title: "Encapsulation",
              description: "Private attributes and properties",
              code: { python: "class Temperature:\n    def __init__(self, celsius):\n        self.__celsius = celsius\n    \n    @property\n    def celsius(self):\n        return self.__celsius\n    \n    @celsius.setter\n    def celsius(self, value):\n        if -273 <= value <= 1000:\n            self.__celsius = value\n    \n    @property\n    def fahrenheit(self):\n        return self.__celsius * 9/5 + 32\n\ntemp = Temperature(25)\nprint(f\"C: {temp.celsius}, F: {temp.fahrenheit:.1f}\")" },
              explanation: "Double underscore __ makes attributes 'private'. @property creates getters/setters."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch47-ex1",
          title: "Encapsulation",
          difficulty: 1,
          description: "Use property decorators.",
          requirements: [
            "Create a class with private attribute",
            "Use @property for getter",
            "Use @setter for validation"
          ],
          starterCode: { python: "class BankAccount:\n    def __init__(self, balance):\n        self.__balance = balance\n    \n    @property\n    def balance(self):\n        return self.__balance\n    \n    @balance.setter\n    def balance(self, value):\n        # Add validation\n\naccount = BankAccount(100)\naccount.balance = 200\nprint(account.balance)" },
          hints: [
            "Check if value >= 0 in setter",
            "Raise ValueError if invalid"
          ],
          solution: { python: "class BankAccount:\n    def __init__(self, balance):\n        self.__balance = balance\n    \n    @property\n    def balance(self):\n        return self.__balance\n    \n    @balance.setter\n    def balance(self, value):\n        if value >= 0:\n            self.__balance = value\n        else:\n            raise ValueError(\"Balance cannot be negative\")\n\naccount = BankAccount(100)\naccount.balance = 200\nprint(account.balance)" },
          solutionExplanation: "Double underscore creates private attributes. @property provides controlled access with validation."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch47-q1",
            type: "mcq",
            question: "What prefix makes attributes private?",
            options: [
              "_",
              "__",
              "private_",
              "#"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Double underscore __ makes attributes name-mangled for privacy (convention)."
          },
          {
            id: "ch47-q2",
            type: "mcq",
            question: "What does @property do?",
            options: [
              "Deletes property",
              "Creates getter",
              "Creates setter",
              "Makes private"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "@property decorator turns a method into a read-only attribute (getter)."
          },
          {
            id: "ch47-q3",
            type: "true-false",
            question: "Python has true private attributes.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "Python's __ attributes are name-mangled but still accessible. It's a convention, not enforcement."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Private",
          value: "self.__attribute"
        },
        {
          label: "@property",
          value: "Getter decorator"
        },
        {
          label: "@x.setter",
          value: "Setter decorator"
        }
      ]
    },
    {
      id: "python-ch-48",
      number: 48,
      partLabel: "PART 5: ADVANCED PYTHON",
      title: "Polymorphism",
      subtitle: "Same interface, different implementations",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 120,
      prerequisites: ["python-ch-47"],
      learningObjectives: [
        "Understand polymorphism",
        "Use duck typing",
        "Override methods polymorphically",
        "Implement abstract base classes"
      ],
      sections: [
        {
          id: "ch48-polymorphism",
          title: "Polymorphism",
          whyItMatters: "Polymorphism allows different classes to be treated uniformly.",
          realWorldAnalogy: "Polymorphism is like different payment methods — you can pay with card, cash, or phone, but the interface is the same.",
          content: `Method overriding:
class Shape:
    def area(self):
        pass

class Circle(Shape):
    def area(self):
        return 3.14 * self.radius ** 2

class Rectangle(Shape):
    def area(self):
        return self.width * self.height

Duck typing:
def draw(shape):
    shape.draw()  # Works if object has draw()

Abstract base classes:
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass`,
          codeExamples: [
            {
              id: "ch48-polymorphism",
              title: "Polymorphism",
              description: "Same interface, different implementations",
              code: { python: "from abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    def area(self):\n        return 3.14 * self.radius ** 2\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        self.width, self.height = width, height\n    def area(self):\n        return self.width * self.height\n\nshapes = [Circle(5), Rectangle(3, 4)]\nfor shape in shapes:\n    print(f\"Area: {shape.area():.2f}\")" },
              explanation: "Polymorphism lets different classes implement the same interface differently."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch48-ex1",
          title: "Polymorphism",
          difficulty: 1,
          description: "Implement polymorphic methods.",
          requirements: [
            "Create Shape base class with area method",
            "Create Circle and Rectangle subclasses",
            "Calculate areas polymorphically"
          ],
          starterCode: { python: "class Shape:\n    def area(self):\n        pass\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    # Implement area\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        self.width, self.height = width, height\n    # Implement area\n\nshapes = [Circle(5), Rectangle(3, 4)]\nfor shape in shapes:\n    print(shape.area())" },
          hints: [
            "Circle: 3.14 * r^2",
            "Rectangle: w * h"
          ],
          solution: { python: "class Shape:\n    def area(self):\n        pass\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    def area(self):\n        return 3.14 * self.radius ** 2\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        self.width, self.height = width, height\n    def area(self):\n        return self.width * self.height\n\nshapes = [Circle(5), Rectangle(3, 4)]\nfor shape in shapes:\n    print(f\"Area: {shape.area():.2f}\")" },
          solutionExplanation: "Each subclass implements area() differently. You can call area() on any Shape object."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch48-q1",
            type: "mcq",
            question: "What is polymorphism?",
            options: [
              "Multiple classes",
              "Same interface, different behavior",
              "Private methods",
              "Static typing"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Polymorphism means different classes implement the same interface with different behaviors."
          },
          {
            id: "ch48-q2",
            type: "mcq",
            question: "What is duck typing?",
            options: [
              "Type checking",
              "If it walks like a duck",
              "Static typing",
              "Class checking"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Duck typing means if an object has the needed methods, it can be used regardless of type."
          },
          {
            id: "ch48-q3",
            type: "true-false",
            question: "Abstract classes can be instantiated.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "Abstract classes with abstract methods cannot be instantiated directly."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Override",
          value: "Redefine parent method"
        },
        {
          label: "ABC",
          value: "from abc import ABC"
        },
        {
          label: "@abstractmethod",
          value: "Must implement in subclass"
        }
      ]
    },
    {
      id: "python-ch-49",
      number: 49,
      partLabel: "PART 5: ADVANCED PYTHON",
      title: "Magic Methods",
      subtitle: "Special methods for classes",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 120,
      prerequisites: ["python-ch-48"],
      learningObjectives: [
        "Use __str__ and __repr__",
        "Implement __eq__ for comparison",
        "Use __len__ and __getitem__",
        "Understand dunder methods"
      ],
      sections: [
        {
          id: "ch49-magic-methods",
          title: "Dunder Methods",
          whyItMatters: "Magic methods (dunder) define how objects behave with Python operators.",
          realWorldAnalogy: "Magic methods are like hidden controls — they define how your objects respond to Python's built-in operations.",
          content: `String representation:
__str__ - User-friendly string
__repr__ - Developer-friendly string

Comparison:
__eq__ - Equality (==)
__lt__ - Less than (<)
__gt__ - Greater than (>)

Container methods:
__len__ - len(obj)
__getitem__ - obj[key]
__setitem__ - obj[key] = value
__contains__ - in operator

Arithmetic:
__add__ - +
__sub__ -
__mul__ *`,
          codeExamples: [
            {
              id: "ch49-magic-methods",
              title: "Magic Methods",
              description: "Implementing special methods",
              code: { python: "class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __str__(self):\n        return f\"Vector({self.x}, {self.y})\"\n    \n    def __repr__(self):\n        return f\"Vector({self.x}, {self.y})\"\n    \n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n    \n    def __eq__(self, other):\n        return self.x == other.x and self.y == other.y\n\nv1 = Vector(1, 2)\nv2 = Vector(3, 4)\nprint(v1 + v2)\nprint(v1 == Vector(1, 2))" },
              explanation: "Magic methods start and end with __. They enable operator overloading and built-in behavior."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch49-ex1",
          title: "Magic Methods",
          difficulty: 1,
          description: "Implement __str__ and __add__.",
          requirements: [
            "Create a Point class with x, y",
            "Implement __str__ for string representation",
            "Implement __add__ to add points"
          ],
          starterCode: { python: "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __str__(self):\n        # Return string representation\n    \n    def __add__(self, other):\n        # Return new Point with sum\n\np1 = Point(1, 2)\np2 = Point(3, 4)\nprint(p1 + p2)" },
          hints: [
            "__str__: return f\"Point({self.x}, {self.y})\"",
            "__add__: return Point(self.x + other.x, self.y + other.y)"
          ],
          solution: { python: "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __str__(self):\n        return f\"Point({self.x}, {self.y})\"\n    \n    def __add__(self, other):\n        return Point(self.x + other.x, self.y + other.y)\n\np1 = Point(1, 2)\np2 = Point(3, 4)\nprint(p1 + p2)" },
          solutionExplanation: "__str__ controls str(obj). __add__ enables + operator. Magic methods enable operator overloading."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch49-q1",
            type: "mcq",
            question: "What does __str__ do?",
            options: [
              "Returns length",
              "Returns string representation",
              "Returns type",
              "Returns dict"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "__str__ returns a user-friendly string representation of the object."
          },
          {
            id: "ch49-q2",
            type: "mcq",
            question: "What enables + operator?",
            options: [
              "__plus__",
              "__add__",
              "__sum__",
              "__operator__"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "__add__ enables the + operator for objects."
          },
          {
            id: "ch49-q3",
            type: "true-false",
            question: "Magic methods start with __.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "Magic methods (dunder) start and end with double underscores."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "__str__",
          value: "String representation"
        },
        {
          label: "__repr__",
          value: "Developer representation"
        },
        {
          label: "__eq__",
          value: "Equality check"
        }
      ]
    },
    {
      id: "python-ch-50",
      number: 50,
      partLabel: "PART 5: ADVANCED PYTHON",
      title: "Static and Class Methods",
      subtitle: "Method types in classes",
      difficulty: "Intermediate",
      estimatedMinutes: 35,
      xpReward: 110,
      prerequisites: ["python-ch-49"],
      learningObjectives: [
        "Use @staticmethod",
        "Use @classmethod",
        "Understand when to use each",
        "Access class-level data"
      ],
      sections: [
        {
          id: "ch50-static-class-methods",
          title: "Static and Class Methods",
          whyItMatters: "Static and class methods provide different ways to define class behavior.",
          realWorldAnalogy: "Static methods are like utility tools — they don't need object state. Class methods are like factory methods — they create objects.",
          content: `Static method:
@staticmethod
def utility_function():
    return "No self needed"

Class method:
@classmethod
def from_string(cls, string):
    return cls(*parse(string))

When to use:
@staticmethod - No access to self or cls
@classmethod - Access to cls, not self
Regular - Access to self (instance)`,
          codeExamples: [
            {
              id: "ch50-static-class",
              title: "Static and Class Methods",
              description: "Different method types",
              code: { python: "class Math:\n    PI = 3.14159\n    \n    @staticmethod\n    def circle_area(radius):\n        return Math.PI * radius ** 2\n    \n    @classmethod\n    def get_pi(cls):\n        return cls.PI\n\nprint(f\"Area: {Math.circle_area(5):.2f}\")\nprint(f\"PI: {Math.get_pi()}\")" },
              explanation: "@staticmethod doesn't receive self or cls. @classmethod receives cls as first argument."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch50-ex1",
          title: "Static and Class Methods",
          difficulty: 1,
          description: "Use @staticmethod and @classmethod.",
          requirements: [
            "Create a class with class variable",
            "Add @staticmethod for utility",
            "Add @classmethod to access class variable"
          ],
          starterCode: { python: "class Config:\n    DEBUG = False\n    \n    @staticmethod\n    def get_version():\n        return \"1.0.0\"\n    \n    @classmethod\n    def set_debug(cls, value):\n        cls.DEBUG = value\n    \n    @classmethod\n    def is_debug(cls):\n        return cls.DEBUG\n\nprint(Config.get_version())\nConfig.set_debug(True)\nprint(Config.is_debug())" },
          hints: [
            "Static method: no self/cls parameter",
            "Class method: first parameter is cls"
          ],
          solution: { python: "class Config:\n    DEBUG = False\n    \n    @staticmethod\n    def get_version():\n        return \"1.0.0\"\n    \n    @classmethod\n    def set_debug(cls, value):\n        cls.DEBUG = value\n    \n    @classmethod\n    def is_debug(cls):\n        return cls.DEBUG\n\nprint(Config.get_version())\nConfig.set_debug(True)\nprint(Config.is_debug())" },
          solutionExplanation: "@staticmethod has no self/cls. @classmethod receives cls for class-level operations."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch50-q1",
            type: "mcq",
            question: "What does @staticmethod do?",
            options: [
              "Creates static variable",
              "No self/cls parameter",
              "Creates class variable",
              "Makes method private"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "@staticmethod creates methods that don't receive self or cls parameters."
          },
          {
            id: "ch50-q2",
            type: "mcq",
            question: "What does @classmethod receive?",
            options: [
              "self",
              "cls",
              "instance",
              "object"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "@classmethod receives cls (the class itself) as the first parameter."
          },
          {
            id: "ch50-q3",
            type: "true-false",
            question: "Static methods can access instance attributes.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "Static methods don't receive self, so they cannot access instance attributes."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "@staticmethod",
          value: "No self/cls"
        },
        {
          label: "@classmethod",
          value: "First param is cls"
        },
        {
          label: "Class variables",
          value: "Defined in class body"
        }
      ]
    },
    {
      id: "python-ch-51",
      number: 51,
      partLabel: "PART 5: ADVANCED PYTHON",
      title: "Property Getters Setters",
      subtitle: "Controlled attribute access",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 110,
      prerequisites: ["python-ch-50"],
      learningObjectives: [
        "Use @property for getters",
        "Use @x.setter for setters",
        "Use @x.deleter for deleters",
        "Validate data in setters"
      ],
      sections: [
        {
          id: "ch51-properties",
          title: "Property Decorators",
          whyItMatters: "Properties provide controlled access to attributes with validation.",
          realWorldAnalogy: "Properties are like smart thermostats — they control access and can validate before making changes.",
          content: `Basic property:
class Person:
    def __init__(self, age):
        self.__age = age
    
    @property
    def age(self):
        return self.__age
    
    @age.setter
    def age(self, value):
        if 0 <= value <= 150:
            self.__age = value

Deleter:
@age.deleter
def age(self):
    del self.__age

Read-only property:
@property
def read_only(self):
    return self._value`,
          codeExamples: [
            {
              id: "ch51-properties",
              title: "Property Getters Setters",
              description: "Controlled attribute access",
              code: { python: "class Temperature:\n    def __init__(self, celsius):\n        self.__celsius = celsius\n    \n    @property\n    def celsius(self):\n        return self.__celsius\n    \n    @celsius.setter\n    def celsius(self, value):\n        if -273 <= value <= 1000:\n            self.__celsius = value\n        else:\n            raise ValueError(\"Invalid temperature\")\n    \n    @property\n    def fahrenheit(self):\n        return self.__celsius * 9/5 + 32\n\ntemp = Temperature(25)\nprint(f\"C: {temp.celsius}, F: {temp.fahrenheit:.1f}\")" },
              explanation: "@property creates getters. @x.setter creates setters with validation logic."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch51-ex1",
          title: "Properties",
          difficulty: 1,
          description: "Use property decorators.",
          requirements: [
            "Create class with private attribute",
            "Add @property getter",
            "Add @x.setter with validation"
          ],
          starterCode: { python: "class Score:\n    def __init__(self, value):\n        self.__value = value\n    \n    @property\n    def value(self):\n        return self.__value\n    \n    @value.setter\n    def value(self, new_value):\n        # Validate: 0-100\n\nscore = Score(50)\nscore.value = 75\nprint(score.value)" },
          hints: [
            "Check if 0 <= new_value <= 100",
            "Raise ValueError if invalid"
          ],
          solution: { python: "class Score:\n    def __init__(self, value):\n        self.__value = value\n    \n    @property\n    def value(self):\n        return self.__value\n    \n    @value.setter\n    def value(self, new_value):\n        if 0 <= new_value <= 100:\n            self.__value = new_value\n        else:\n            raise ValueError(\"Score must be 0-100\")\n\nscore = Score(50)\nscore.value = 75\nprint(score.value)" },
          solutionExplanation: "Properties let you add validation and controlled access while maintaining clean syntax."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch51-q1",
            type: "mcq",
            question: "What does @property do?",
            options: [
              "Makes attribute private",
              "Creates getter method",
              "Deletes attribute",
              "Creates static method"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "@property decorator turns a method into a read-only attribute (getter)."
          },
          {
            id: "ch51-q2",
            type: "mcq",
            question: "What does @x.setter do?",
            options: [
              "Creates getter",
              "Creates setter",
              "Creates deleter",
              "Makes private"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "@x.setter creates a setter method for the property."
          },
          {
            id: "ch51-q3",
            type: "true-false",
            question: "Properties can be read-only.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "Properties without a setter are read-only."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "@property",
          value: "Getter"
        },
        {
          label: "@x.setter",
          value: "Setter"
        },
        {
          label: "@x.deleter",
          value: "Deleter"
        }
      ]
    },
    {
      id: "python-ch-52",
      number: 52,
      partLabel: "PART 5: ADVANCED PYTHON",
      title: "Class Attributes",
      subtitle: "Shared data across instances",
      difficulty: "Intermediate",
      estimatedMinutes: 35,
      xpReward: 110,
      prerequisites: ["python-ch-51"],
      learningObjectives: [
        "Use class attributes",
        "Distinguish class vs instance attributes",
        "Use __slots__ for optimization",
        "Understand attribute lookup"
      ],
      sections: [
        {
          id: "ch52-class-attributes",
          title: "Class vs Instance Attributes",
          whyItMatters: "Class attributes are shared across all instances, instance attributes are per-object.",
          realWorldAnalogy: "Class attributes are like shared resources — everyone has access. Instance attributes are personal belongings — each person has their own.",
          content: `Class attribute:
class Dog:
    species = "Canis familiaris"  # Shared

Instance attribute:
class Dog:
    def __init__(self, name):
        self.name = name  # Per instance

__slots__ optimization:
class Dog:
    __slots__ = ['name', 'age']  # Restrict attributes

Attribute lookup:
Checks instance -> class -> parent classes
Instance shadows class if same name.`,
          codeExamples: [
            {
              id: "ch52-class-attributes",
              title: "Class Attributes",
              description: "Shared vs instance data",
              code: { python: "class Dog:\n    species = \"Canis familiaris\"  # Class attribute\n    count = 0  # Class attribute\n    \n    def __init__(self, name):\n        self.name = name  # Instance attribute\n        Dog.count += 1\n\ndog1 = Dog(\"Buddy\")\ndog2 = Dog(\"Max\")\nprint(f\"Species: {dog1.species}\")  # Shared\nprint(f\"Count: {Dog.count}\")  # Shared counter" },
              explanation: "Class attributes are shared by all instances. Instance attributes are unique to each object."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch52-ex1",
          title: "Class Attributes",
          difficulty: 1,
          description: "Use class attributes.",
          requirements: [
            "Create class with class attribute",
            "Create instances and modify class attribute",
            "Verify it's shared"
          ],
          starterCode: { python: "class Player:\n    game = \"Chess\"  # Class attribute\n    \n    def __init__(self, name):\n        self.name = name\n\np1 = Player(\"Alice\")\np2 = Player(\"Bob\")\nprint(f\"P1 game: {p1.game}\")\nprint(f\"P2 game: {p2.game}\")\nPlayer.game = \"Checkers\"\nprint(f\"After change: {p1.game}\")" },
          hints: [
            "Class attributes defined outside __init__",
            "Changes affect all instances"
          ],
          solution: { python: "class Player:\n    game = \"Chess\"  # Class attribute\n    \n    def __init__(self, name):\n        self.name = name\n\np1 = Player(\"Alice\")\np2 = Player(\"Bob\")\nprint(f\"P1 game: {p1.game}\")\nprint(f\"P2 game: {p2.game}\")\nPlayer.game = \"Checkers\"\nprint(f\"After change: {p1.game}\")" },
          solutionExplanation: "Class attributes are shared across all instances. Changes affect all objects."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch52-q1",
            type: "mcq",
            question: "Where are class attributes defined?",
            options: [
              "In __init__",
              "In class body",
              "In methods",
              "In main"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Class attributes are defined in the class body, outside any methods."
          },
          {
            id: "ch52-q2",
            type: "mcq",
            question: "What does __slots__ do?",
            options: [
              "Creates methods",
              "Restricts attributes",
              "Makes private",
              "Adds methods"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "__slots__ restricts the attributes an object can have for memory optimization."
          },
          {
            id: "ch52-q3",
            type: "true-false",
            question: "Instance attributes shadow class attributes.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "If an instance has an attribute with the same name, it shadows the class attribute."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Class attribute",
          value: "Defined in class body"
        },
        {
          label: "Instance attribute",
          value: "self.attr = value"
        },
        {
          label: "__slots__",
          value: "Restrict attributes"
        }
      ]
    },
    {
      id: "python-ch-53",
      number: 53,
      partLabel: "PART 5: ADVANCED PYTHON",
      title: "Data Classes",
      subtitle: "Simplified class creation",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 110,
      prerequisites: ["python-ch-52"],
      learningObjectives: [
        "Use dataclass decorator",
        "Define type hints",
        "Use default values",
        "Understand auto-generated methods"
      ],
      sections: [
        {
          id: "ch53-dataclasses",
          title: "Data Classes",
          whyItMatters: "Data classes reduce boilerplate when creating classes for data storage.",
          realWorldAnalogy: "Data classes are like form templates — they automatically create the structure you need.",
          content: `Basic dataclass:
from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int
    email: str

With defaults:
@dataclass
class Person:
    name: str
    age: int = 0
    email: str = ""

Auto-generated:
__init__, __repr__, __eq__
Frozen dataclass:
@dataclass(frozen=True)
class Point:
    x: int
    y: int`,
          codeExamples: [
            {
              id: "ch53-dataclasses",
              title: "Data Classes",
              description: "Simplified class definition",
              code: { python: "from dataclasses import dataclass\n\n@dataclass\nclass Book:\n    title: str\n    author: str\n    year: int = 2024\n    pages: int = 0\n\nbook = Book(\"Python Guide\", \"John Doe\")\nprint(book)\nprint(f\"Repr: {repr(book)}\")\n\nbook2 = Book(\"Python Guide\", \"John Doe\", 2023, 300)\nprint(book2)" },
              explanation: "@dataclass automatically generates __init__, __repr__, __eq__, and other methods."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch53-ex1",
          title: "Data Classes",
          difficulty: 1,
          description: "Create a dataclass.",
          requirements: [
            "Import dataclass",
            "Create a dataclass for Product",
            "Add fields with type hints and defaults"
          ],
          starterCode: { python: "from dataclasses import dataclass\n\n@dataclass\nclass Product:\n    name: str\n    price: float\n    in_stock: bool = True\n\nproduct = Product(\"Widget\", 9.99)\nprint(product)" },
          hints: [
            "Use type hints: str, float, bool",
            "Set default values with ="
          ],
          solution: { python: "from dataclasses import dataclass\n\n@dataclass\nclass Product:\n    name: str\n    price: float\n    in_stock: bool = True\n\nproduct = Product(\"Widget\", 9.99)\nprint(product)" },
          solutionExplanation: "Dataclasses automatically generate __init__, __repr__, and other methods from field definitions."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch53-q1",
            type: "mcq",
            question: "What does @dataclass do?",
            options: [
              "Makes class private",
              "Auto-generates methods",
              "Creates database",
              "Validates data"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "@dataclass automatically generates __init__, __repr__, __eq__, and other methods."
          },
          {
            id: "ch53-q2",
            type: "mcq",
            question: "What module provides dataclass?",
            options: [
              "classes",
              "dataclasses",
              "typing",
              "models"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "The dataclasses module provides the @dataclass decorator."
          },
          {
            id: "ch53-q3",
            type: "true-false",
            question: "Dataclasses require type hints.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "Dataclasses require type hints for fields to generate proper __init__ methods."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Import",
          value: "from dataclasses import dataclass"
        },
        {
          label: "Decorator",
          value: "@dataclass"
        },
        {
          label: "Frozen",
          value: "@dataclass(frozen=True)"
        }
      ]
    },
    {
      id: "python-ch-54",
      number: 54,
      partLabel: "PART 5: ADVANCED PYTHON",
      title: "Composition",
      subtitle: "Has-a relationships",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 110,
      prerequisites: ["python-ch-53"],
      learningObjectives: [
        "Understand composition vs inheritance",
        "Use objects as attributes",
        "Build complex objects from simple ones",
        "Choose right design pattern"
      ],
      sections: [
        {
          id: "ch54-composition",
          title: "Composition",
          whyItMatters: "Composition lets you build complex objects from simpler, reusable components.",
          realWorldAnalogy: "Composition is like building with LEGO blocks — you combine simple pieces to create complex structures.",
          content: `Composition example:
class Engine:
    def start(self):
        return "Engine started"

class Car:
    def __init__(self):
        self.engine = Engine()  # Has-a relationship

Composition vs Inheritance:
- Composition: has-a relationship
- Inheritance: is-a relationship
- Favor composition over inheritance

Benefits:
- Flexibility
- Reusability
- Loose coupling`,
          codeExamples: [
            {
              id: "ch54-composition",
              title: "Composition",
              description: "Building objects from components",
              code: { python: "class Engine:\n    def __init__(self, horsepower):\n        self.horsepower = horsepower\n    \n    def start(self):\n        return f\"{self.horsepower}HP engine starting\"\n\nclass Car:\n    def __init__(self, make, model, horsepower):\n        self.make = make\n        self.model = model\n        self.engine = Engine(horsepower)  # Composition\n    \n    def start(self):\n        return f\"{self.make} {self.model}: {self.engine.start()}\"\n\ncar = Car(\"Toyota\", \"Camry\", 200)\nprint(car.start())" },
              explanation: "Composition means using objects as attributes. Car has-a Engine."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch54-ex1",
          title: "Composition",
          difficulty: 1,
          description: "Use composition to build classes.",
          requirements: [
            "Create Engine class with start method",
            "Create Car class that has an Engine",
            "Car delegates to Engine for starting"
          ],
          starterCode: { python: "class Engine:\n    def __init__(self, power):\n        self.power = power\n    \n    def start(self):\n        return f\"{self.power}HP engine running\"\n\nclass Car:\n    def __init__(self, model, power):\n        self.model = model\n        self.engine = Engine(power)\n    \n    def start(self):\n        # Delegate to engine\n\ncar = Car(\"Sedan\", 200)\nprint(car.start())" },
          hints: [
            "Car stores Engine as attribute",
            "Car.start() calls engine.start()"
          ],
          solution: { python: "class Engine:\n    def __init__(self, power):\n        self.power = power\n    \n    def start(self):\n        return f\"{self.power}HP engine running\"\n\nclass Car:\n    def __init__(self, model, power):\n        self.model = model\n        self.engine = Engine(power)\n    \n    def start(self):\n        return f\"{self.model}: {self.engine.start()}\"\n\ncar = Car(\"Sedan\", 200)\nprint(car.start())" },
          solutionExplanation: "Composition means using objects as attributes. Car has-a Engine and delegates to it."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch54-q1",
            type: "mcq",
            question: "Composition is what relationship?",
            options: [
              "is-a",
              "has-a",
              "uses-a",
              "creates-a"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Composition represents a has-a relationship between classes."
          },
          {
            id: "ch54-q2",
            type: "mcq",
            question: "What should you favor over inheritance?",
            options: [
              "Static methods",
              "Composition",
              "Class methods",
              "Magic methods"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Favor composition over inheritance for more flexible and maintainable code."
          },
          {
            id: "ch54-q3",
            type: "true-false",
            question: "Composition is more flexible than inheritance.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "Composition allows changing components at runtime, inheritance creates tight coupling."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Has-a",
          value: "Object as attribute"
        },
        {
          label: "Delegation",
          value: "Call component methods"
        },
        {
          label: "Flexible",
          value: "Change components at runtime"
        }
      ]
    },
    {
      id: "python-ch-55",
      number: 55,
      partLabel: "PART 5: ADVANCED PYTHON",
      title: "Multiple Inheritance",
      subtitle: "Inherit from multiple classes",
      difficulty: "Advanced",
      estimatedMinutes: 45,
      xpReward: 130,
      prerequisites: ["python-ch-54"],
      learningObjectives: [
        "Use multiple inheritance",
        "Understand MRO (Method Resolution Order)",
        "Use super() with multiple parents",
        "Avoid diamond problem"
      ],
      sections: [
        {
          id: "ch55-multiple-inheritance",
          title: "Multiple Inheritance",
          whyItMatters: "Multiple inheritance lets classes inherit from multiple parents.",
          realWorldAnalogy: "Multiple inheritance is like inheriting traits from both parents — you get features from each.",
          content: `Multiple inheritance:
class A:
    def method_a(self):
        return "A"

class B:
    def method_b(self):
        return "B"

class C(A, B):
    pass

MRO (Method Resolution Order):
C.mro() shows inheritance order
Python uses C3 linearization

Diamond problem:
   A
  / \\
 B   C
  \\ /
   D

super() calls next in MRO`,
          codeExamples: [
            {
              id: "ch55-multiple-inheritance",
              title: "Multiple Inheritance",
              description: "Inheriting from multiple classes",
              code: { python: "class Flyer:\n    def fly(self):\n        return \"Flying\"\n\nclass Swimmer:\n    def swim(self):\n        return \"Swimming\"\n\nclass Duck(Flyer, Swimmer):\n    def quack(self):\n        return \"Quack\"\n\nduck = Duck()\nprint(duck.fly())\nprint(duck.swim())\nprint(duck.quack())\nprint(f\"MRO: {[c.__name__ for c in Duck.__mro__]}\")" },
              explanation: "Multiple inheritance: class Child(Parent1, Parent2). MRO determines method lookup order."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch55-ex1",
          title: "Multiple Inheritance",
          difficulty: 1,
          description: "Use multiple inheritance.",
          requirements: [
            "Create two parent classes",
            "Create child class inheriting both",
            "Use methods from both parents"
          ],
          starterCode: { python: "class Reader:\n    def read(self):\n        return \"Reading\"\n\nclass Writer:\n    def write(self):\n        return \"Writing\"\n\nclass ReadWriter(Reader, Writer):\n    pass\n\nrw = ReadWriter()\nprint(rw.read())\nprint(rw.write())" },
          hints: [
            "class Child(Parent1, Parent2)",
            "Child has all parent methods"
          ],
          solution: { python: "class Reader:\n    def read(self):\n        return \"Reading\"\n\nclass Writer:\n    def write(self):\n        return \"Writing\"\n\nclass ReadWriter(Reader, Writer):\n    pass\n\nrw = ReadWriter()\nprint(rw.read())\nprint(rw.write())" },
          solutionExplanation: "Multiple inheritance: class Child(Parent1, Parent2). Child gets methods from both parents."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch55-q1",
            type: "mcq",
            question: "What does MRO stand for?",
            options: [
              "Method Resolution Order",
              "Multiple Return Object",
              "Method Reference Order",
              "Module Resolution Order"
            ],
            correctAnswer: 0,
            difficulty: 1,
            explanation: "MRO stands for Method Resolution Order, determining the order Python searches for methods."
          },
          {
            id: "ch55-q2",
            type: "mcq",
            question: "How do you inherit from multiple classes?",
            options: [
              "class Child(Parent1, Parent2)",
              "class Child(Parent1)(Parent2)",
              "class Child(Parent1, Parent2):",
              "class Child extends Parent1, Parent2"
            ],
            correctAnswer: 0,
            difficulty: 1,
            explanation: "Multiple inheritance: class Child(Parent1, Parent2) with comma-separated parents."
          },
          {
            id: "ch55-q3",
            type: "true-false",
            question: "Python supports multiple inheritance.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "Python supports multiple inheritance, unlike Java or C#."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Multiple inheritance",
          value: "class Child(P1, P2):"
        },
        {
          label: "MRO",
          value: "Class.__mro__"
        },
        {
          label: "super()",
          value: "Calls next in MRO"
        }
      ]
    },
    {
      id: "python-ch-56",
      number: 56,
      partLabel: "PART 5: ADVANCED PYTHON",
      title: "Abstract Base Classes",
      subtitle: "Define interfaces",
      difficulty: "Advanced",
      estimatedMinutes: 40,
      xpReward: 120,
      prerequisites: ["python-ch-55"],
      learningObjectives: [
        "Create abstract base classes",
        "Use @abstractmethod",
        "Implement abstract methods in subclasses",
        "Understand when to use ABCs"
      ],
      sections: [
        {
          id: "ch56-abc",
          title: "Abstract Base Classes",
          whyItMatters: "Abstract base classes define interfaces that subclasses must implement.",
          realWorldAnalogy: "ABCs are like contracts — subclasses must fulfill the requirements defined by the parent.",
          content: `Creating ABC:
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass
    
    @abstractmethod
    def perimeter(self):
        pass

Implementing ABC:
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    def area(self):
        return 3.14 * self.radius ** 2
    def perimeter(self):
        return 2 * 3.14 * self.radius

Cannot instantiate ABCs directly.`,
          codeExamples: [
            {
              id: "ch56-abc",
              title: "Abstract Base Classes",
              description: "Defining interfaces",
              code: { python: "from abc import ABC, abstractmethod\n\nclass Animal(ABC):\n    @abstractmethod\n    def speak(self):\n        pass\n    \n    @abstractmethod\n    def move(self):\n        pass\n\nclass Dog(Animal):\n    def speak(self):\n        return \"Woof!\"\n    \n    def move(self):\n        return \"Running\"\n\ndog = Dog()\nprint(dog.speak())\nprint(dog.move())" },
              explanation: "Abstract classes with @abstractmethod define required methods. Subclasses must implement them."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch56-ex1",
          title: "Abstract Base Classes",
          difficulty: 1,
          description: "Create and use ABCs.",
          requirements: [
            "Create abstract base class with abstract methods",
            "Create concrete subclass",
            "Implement all abstract methods"
          ],
          starterCode: { python: "from abc import ABC, abstractmethod\n\nclass Vehicle(ABC):\n    @abstractmethod\n    def start(self):\n        pass\n    \n    @abstractmethod\n    def stop(self):\n        pass\n\nclass Car(Vehicle):\n    # Implement abstract methods\n\ncar = Car()\ncar.start()\ncar.stop()" },
          hints: [
            "Implement start() and stop() methods",
            "Return descriptive strings"
          ],
          solution: { python: "from abc import ABC, abstractmethod\n\nclass Vehicle(ABC):\n    @abstractmethod\n    def start(self):\n        pass\n    \n    @abstractmethod\n    def stop(self):\n        pass\n\nclass Car(Vehicle):\n    def start(self):\n        return \"Engine starting\"\n    \n    def stop(self):\n        return \"Engine stopping\"\n\ncar = Car()\nprint(car.start())\nprint(car.stop())" },
          solutionExplanation: "Abstract classes define required methods. Subclasses must implement all @abstractmethod methods."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch56-q1",
            type: "mcq",
            question: "What does @abstractmethod do?",
            options: [
              "Makes method private",
              "Requires implementation in subclass",
              "Makes method static",
              "Creates default implementation"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "@abstractmethod requires subclasses to implement the method."
          },
          {
            id: "ch56-q2",
            type: "mcq",
            question: "Can you instantiate abstract classes?",
            options: [
              "Yes",
              "No",
              "Only if static",
              "Only with default values"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Abstract classes with abstract methods cannot be instantiated directly."
          },
          {
            id: "ch56-q3",
            type: "true-false",
            question: "ABC module provides abstract base classes.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "The abc module provides ABC and @abstractmethod for creating abstract base classes."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Import",
          value: "from abc import ABC"
        },
        {
          label: "@abstractmethod",
          value: "Must implement"
        },
        {
          label: "Inherit",
          value: "class Concrete(ABC):"
        }
      ]
    },
    {
      id: "python-ch-57",
      number: 57,
      partLabel: "PART 5: ADVANCED PYTHON",
      title: "Operator Overloading",
      subtitle: "Custom operators for classes",
      difficulty: "Advanced",
      estimatedMinutes: 45,
      xpReward: 130,
      prerequisites: ["python-ch-56"],
      learningObjectives: [
        "Implement arithmetic operators",
        "Implement comparison operators",
        "Implement container operators",
        "Use functools.total_ordering"
      ],
      sections: [
        {
          id: "ch57-operator-overloading",
          title: "Operator Overloading",
          whyItMatters: "Operator overloading lets your objects work with Python's built-in operators.",
          realWorldAnalogy: "Operator overloading is like teaching your objects new tricks — they learn to respond to +, -, *, etc.",
          content: `Arithmetic operators:
__add__ - +
__sub__ -
__mul__ *
__truediv__ /

Comparison operators:
__eq__ ==
__lt__ <
__gt__ >
__le__ <=
__ge__ >=

Container operators:
__len__ len()
__getitem__ obj[key]
__setitem__ obj[key] = value`,
          codeExamples: [
            {
              id: "ch57-operator-overloading",
              title: "Operator Overloading",
              description: "Custom operators for classes",
              code: { python: "class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n    \n    def __eq__(self, other):\n        return self.x == other.x and self.y == other.y\n    \n    def __repr__(self):\n        return f\"Vector({self.x}, {self.y})\"\n\nv1 = Vector(1, 2)\nv2 = Vector(3, 4)\nprint(v1 + v2)\nprint(v1 == Vector(1, 2))" },
              explanation: "Magic methods enable operator overloading. __add__ enables +, __eq__ enables =="
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch57-ex1",
          title: "Operator Overloading",
          difficulty: 1,
          description: "Implement __add__ and __eq__.",
          requirements: [
            "Create Complex number class",
            "Implement __add__ for addition",
            "Implement __eq__ for equality"
          ],
          starterCode: { python: "class Complex:\n    def __init__(self, real, imag):\n        self.real = real\n        self.imag = imag\n    \n    def __add__(self, other):\n        # Return new Complex\n    \n    def __eq__(self, other):\n        # Check equality\n\nc1 = Complex(1, 2)\nc2 = Complex(3, 4)\nprint(c1 + c2)\nprint(c1 == Complex(1, 2))" },
          hints: [
            "__add__: return Complex(self.real + other.real, self.imag + other.imag)",
            "__eq__: return self.real == other.real and self.imag == other.imag"
          ],
          solution: { python: "class Complex:\n    def __init__(self, real, imag):\n        self.real = real\n        self.imag = imag\n    \n    def __add__(self, other):\n        return Complex(self.real + other.real, self.imag + other.imag)\n    \n    def __eq__(self, other):\n        return self.real == other.real and self.imag == other.imag\n    \n    def __repr__(self):\n        return f\"{self.real} + {self.imag}i\"\n\nc1 = Complex(1, 2)\nc2 = Complex(3, 4)\nprint(c1 + c2)\nprint(c1 == Complex(1, 2))" },
          solutionExplanation: "Magic methods enable operator overloading. __add__ for +, __eq__ for =="
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch57-q1",
            type: "mcq",
            question: "What enables + operator?",
            options: [
              "__plus__",
              "__add__",
              "__sum__",
              "__operator__"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "__add__ enables the + operator for custom classes."
          },
          {
            id: "ch57-q2",
            type: "mcq",
            question: "What enables == operator?",
            options: [
              "__equal__",
              "__eq__",
              "__compare__",
              "__same__"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "__eq__ enables the == equality operator."
          },
          {
            id: "ch57-q3",
            type: "true-false",
            question: "Operator overloading uses magic methods.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "Operator overloading is implemented through magic methods like __add__, __eq__."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "__add__",
          value: "+ operator"
        },
        {
          label: "__eq__",
          value: "== operator"
        },
        {
          label: "__len__",
          value: "len() function"
        }
      ]
    },
    {
      id: "python-ch-58",
      number: 58,
      partLabel: "PART 5: ADVANCED PYTHON",
      title: "Design Patterns",
      subtitle: "Common patterns in Python",
      difficulty: "Advanced",
      estimatedMinutes: 50,
      xpReward: 130,
      prerequisites: ["python-ch-57"],
      learningObjectives: [
        "Understand common design patterns",
        "Implement Singleton pattern",
        "Implement Factory pattern",
        "Implement Observer pattern"
      ],
      sections: [
        {
          id: "ch58-design-patterns",
          title: "Design Patterns",
          whyItMatters: "Design patterns provide reusable solutions to common problems.",
          realWorldAnalogy: "Design patterns are like architectural blueprints — proven solutions for common problems.",
          content: `Singleton pattern:
class Singleton:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

Factory pattern:
class AnimalFactory:
    @staticmethod
    def create(animal_type):
        # Create and return animal

Observer pattern:
class Subject:
    def __init__(self):
        self._observers = []`,
          codeExamples: [
            {
              id: "ch58-design-patterns",
              title: "Design Patterns",
              description: "Singleton pattern example",
              code: { python: "class Singleton:\n    _instance = None\n    \n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n        return cls._instance\n    \n    def __init__(self):\n        pass\n\ns1 = Singleton()\ns2 = Singleton()\nprint(f\"Same instance: {s1 is s2}\")" },
              explanation: "Singleton pattern ensures only one instance exists. __new__ controls instance creation."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch58-ex1",
          title: "Design Patterns",
          difficulty: 1,
          description: "Implement Singleton pattern.",
          requirements: [
            "Create Singleton class",
            "Override __new__ to control instantiation",
            "Verify only one instance exists"
          ],
          starterCode: { python: "class Singleton:\n    _instance = None\n    \n    def __new__(cls):\n        # Implement singleton logic\n    \n    def __init__(self):\n        pass\n\ns1 = Singleton()\ns2 = Singleton()\nprint(f\"Same instance: {s1 is s2}\")" },
          hints: [
            "Check if cls._instance exists",
            "Create or return existing instance"
          ],
          solution: { python: "class Singleton:\n    _instance = None\n    \n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n        return cls._instance\n    \n    def __init__(self):\n        pass\n\ns1 = Singleton()\ns2 = Singleton()\nprint(f\"Same instance: {s1 is s2}\")" },
          solutionExplanation: "Singleton pattern ensures only one instance exists by overriding __new__ to return the existing instance."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch58-q1",
            type: "mcq",
            question: "What does Singleton pattern ensure?",
            options: [
              "Multiple instances",
              "One instance",
              "No instances",
              "Factory creation"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Singleton pattern ensures only one instance of a class can exist."
          },
          {
            id: "ch58-q2",
            type: "mcq",
            question: "What method controls instantiation?",
            options: [
              "__init__",
              "__new__",
              "__create__",
              "__instance__"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "__new__ controls instance creation before __init__ is called."
          },
          {
            id: "ch58-q3",
            type: "true-false",
            question: "Design patterns are language-specific.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "Design patterns are language-agnostic concepts, though implementations vary."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Singleton",
          value: "Override __new__"
        },
        {
          label: "Factory",
          value: "Create objects dynamically"
        },
        {
          label: "Observer",
          value: "Subscribe to changes"
        }
      ]
    },
    {
      id: "python-ch-59",
      number: 59,
      partLabel: "PART 6: PYTHON ECOSYSTEM",
      title: "Virtual Environments",
      subtitle: "Isolate project dependencies",
      difficulty: "Beginner",
      estimatedMinutes: 40,
      xpReward: 110,
      prerequisites: ["python-ch-58"],
      learningObjectives: [
        "Create virtual environments",
        "Activate and deactivate venv",
        "Install packages in venv",
        "Understand why venv is needed"
      ],
      sections: [
        {
          id: "ch59-venv",
          title: "Virtual Environments",
          whyItMatters: "Virtual environments isolate project dependencies to prevent conflicts.",
          realWorldAnalogy: "Virtual environments are like separate workspaces — each project has its own tools without interfering with others.",
          content: `Create venv:
python -m venv myenv

Activate (Windows):
myenv\\Scripts\\activate

Activate (Mac/Linux):
source myenv/bin/activate

Deactivate:
deactivate

Install packages:
pip install package_name

Why use venv:
- Isolate dependencies
- Different Python versions
- Avoid conflicts between projects`,
          codeExamples: [
            {
              id: "ch59-venv",
              title: "Virtual Environments",
              description: "Creating and using venv",
              code: { python: "# Commands to run in terminal:\n# Create venv\n# python -m venv myproject\n\n# Activate (Windows)\n# myproject\\Scripts\\activate\n\n# Activate (Mac/Linux)\n# source myproject/bin/activate\n\n# Install packages\n# pip install requests\n\n# Check installed packages\n# pip list" },
              explanation: "Virtual environments isolate project dependencies. Each project gets its own package space."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch59-ex1",
          title: "Virtual Environment",
          difficulty: 1,
          description: "Practice venv commands.",
          requirements: [
            "Create a virtual environment",
            "Activate it",
            "Install a package"
          ],
          starterCode: { python: "# Terminal commands:\n# 1. Create venv: python -m venv myenv\n# 2. Activate it\n# 3. Install requests: pip install requests" },
          hints: [
            "Use python -m venv name",
            "Activate with Scripts/activate or bin/activate"
          ],
          solution: { python: "# Terminal commands:\npython -m venv myenv\n# Windows: myenv\\Scripts\\activate\n# Mac/Linux: source myenv/bin/activate\npip install requests" },
          solutionExplanation: "Virtual environments isolate dependencies. Activate before installing packages."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch59-q1",
            type: "mcq",
            question: "What does venv provide?",
            options: [
              "Faster Python",
              "Isolated environment",
              "Better syntax",
              "Automatic testing"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "venv provides an isolated environment for project dependencies."
          },
          {
            id: "ch59-q2",
            type: "mcq",
            question: "How do you create a venv?",
            options: [
              "venv create myenv",
              "python -m venv myenv",
              "pip install venv",
              "virtualenv myenv"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "python -m venv myenv creates a virtual environment."
          },
          {
            id: "ch59-q3",
            type: "true-false",
            question: "Virtual environments prevent dependency conflicts.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "Virtual environments isolate dependencies, preventing conflicts between projects."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Create",
          value: "python -m venv name"
        },
        {
          label: "Activate Win",
          value: "Scripts\\activate"
        },
        {
          label: "Activate Mac",
          value: "source bin/activate"
        }
      ]
    },
    {
      id: "python-ch-60",
      number: 60,
      partLabel: "PART 6: PYTHON ECOSYSTEM",
      title: "pip and Packages",
      subtitle: "Package management",
      difficulty: "Beginner",
      estimatedMinutes: 40,
      xpReward: 110,
      prerequisites: ["python-ch-59"],
      learningObjectives: [
        "Use pip to install packages",
        "List installed packages",
        "Uninstall packages",
        "Create requirements.txt"
      ],
      sections: [
        {
          id: "ch60-pip",
          title: "pip Package Manager",
          whyItMatters: "pip is Python's package manager for installing and managing libraries.",
          realWorldAnalogy: "pip is like an app store for Python — you can browse, install, and manage packages.",
          content: `Install package:
pip install package_name

Install specific version:
pip install package==1.2.3

List installed:
pip list
pip freeze

Uninstall:
pip uninstall package_name

Create requirements:
pip freeze > requirements.txt

Install from requirements:
pip install -r requirements.txt`,
          codeExamples: [
            {
              id: "ch60-pip",
              title: "pip and Packages",
              description: "Package management with pip",
              code: { python: "# Terminal commands:\n# Install package\n# pip install requests\n\n# Install specific version\n# pip install numpy==1.24.0\n\n# List packages\n# pip list\n\n# Create requirements\n# pip freeze > requirements.txt\n\n# Install from file\n# pip install -r requirements.txt" },
              explanation: "pip is Python's package manager. Use it to install, list, and manage packages."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch60-ex1",
          title: "pip Commands",
          difficulty: 1,
          description: "Practice pip commands.",
          requirements: [
            "Install a package",
            "List installed packages",
            "Create requirements.txt"
          ],
          starterCode: { python: "# Terminal commands:\n# 1. Install requests: pip install requests\n# 2. List packages: pip list\n# 3. Save requirements: pip freeze > requirements.txt" },
          hints: [
            "Use pip install package",
            "Use pip freeze > requirements.txt"
          ],
          solution: { python: "pip install requests\npip list\npip freeze > requirements.txt" },
          solutionExplanation: "pip manages Python packages. requirements.txt tracks dependencies for reproducibility."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch60-q1",
            type: "mcq",
            question: "What is pip?",
            options: [
              "Python interpreter",
              "Package manager",
              "Code editor",
              "Test framework"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "pip is Python's package manager for installing and managing libraries."
          },
          {
            id: "ch60-q2",
            type: "mcq",
            question: "What lists installed packages?",
            options: [
              "pip show",
              "pip list",
              "pip packages",
              "pip installed"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "pip list shows all installed packages and their versions."
          },
          {
            id: "ch60-q3",
            type: "true-false",
            question: "requirements.txt tracks dependencies.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "requirements.txt lists all project dependencies for reproducible installations."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Install",
          value: "pip install package"
        },
        {
          label: "List",
          value: "pip list"
        },
        {
          label: "Freeze",
          value: "pip freeze > requirements.txt"
        }
      ]
    },
    {
      id: "python-ch-61",
      number: 61,
      partLabel: "PART 6: PYTHON ECOSYSTEM",
      title: "Testing with unittest",
      subtitle: "Write unit tests",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 120,
      prerequisites: ["python-ch-60"],
      learningObjectives: [
        "Write unit tests",
        "Use unittest framework",
        "Run tests",
        "Understand test fixtures"
      ],
      sections: [
        {
          id: "ch61-unittest",
          title: "Unit Testing",
          whyItMatters: "Testing ensures your code works correctly and prevents regressions.",
          realWorldAnalogy: "Testing is like quality control — you verify products meet standards before shipping.",
          content: `Basic test:
import unittest

class TestMath(unittest.TestCase):
    def test_add(self):
        self.assertEqual(1 + 1, 2)

Run tests:
python -m unittest test_file.py

Test fixtures:
def setUp(self):
    # Setup before each test

def tearDown(self):
    # Cleanup after each test

Assertions:
assertEqual(a, b)
assertTrue(x)
assertFalse(x)
assertRaises(Exception)`,
          codeExamples: [
            {
              id: "ch61-unittest",
              title: "Unit Testing",
              description: "Writing tests with unittest",
              code: { python: "import unittest\n\ndef add(a, b):\n    return a + b\n\nclass TestMath(unittest.TestCase):\n    def test_add(self):\n        self.assertEqual(add(2, 3), 5)\n        self.assertEqual(add(-1, 1), 0)\n    \n    def test_add_negative(self):\n        self.assertEqual(add(-2, -3), -5)\n\nif __name__ == '__main__':\n    unittest.main()" },
              explanation: "unittest provides a testing framework. Test cases inherit from unittest.TestCase."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch61-ex1",
          title: "Unit Tests",
          difficulty: 1,
          description: "Write a unit test.",
          requirements: [
            "Create a function to test",
            "Write test case with unittest",
            "Run the test"
          ],
          starterCode: { python: "import unittest\n\ndef multiply(a, b):\n    return a * b\n\nclass TestMultiply(unittest.TestCase):\n    def test_multiply(self):\n        # Write test\n\nif __name__ == '__main__':\n    unittest.main()" },
          hints: [
            "Use assertEqual to check results",
            "Test multiple cases"
          ],
          solution: { python: "import unittest\n\ndef multiply(a, b):\n    return a * b\n\nclass TestMultiply(unittest.TestCase):\n    def test_multiply(self):\n        self.assertEqual(multiply(2, 3), 6)\n        self.assertEqual(multiply(0, 5), 0)\n        self.assertEqual(multiply(-2, 3), -6)\n\nif __name__ == '__main__':\n    unittest.main()" },
          solutionExplanation: "unittest provides testing framework. Test methods start with 'test'. Use assertions to verify results."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch61-q1",
            type: "mcq",
            question: "What module provides unit testing?",
            options: [
              "test",
              "unittest",
              "pytest",
              "testing"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "The unittest module provides Python's built-in testing framework."
          },
          {
            id: "ch61-q2",
            type: "mcq",
            question: "How do you run unittest tests?",
            options: [
              "python test.py",
              "python -m unittest test.py",
              "pytest test.py",
              "run test.py"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "python -m unittest test.py runs unittest test files."
          },
          {
            id: "ch61-q3",
            type: "true-false",
            question: "Test methods must start with 'test'.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "unittest discovers test methods by looking for methods starting with 'test'."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Import",
          value: "import unittest"
        },
        {
          label: "TestCase",
          value: "class Test(unittest.TestCase):"
        },
        {
          label: "Run",
          value: "python -m unittest"
        }
      ]
    },
    {
      id: "python-ch-62",
      number: 62,
      partLabel: "PART 6: PYTHON ECOSYSTEM",
      title: "Testing with pytest",
      subtitle: "Modern testing framework",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 120,
      prerequisites: ["python-ch-61"],
      learningObjectives: [
        "Use pytest framework",
        "Write simple tests",
        "Use fixtures",
        "Run pytest"
      ],
      sections: [
        {
          id: "ch62-pytest",
          title: "pytest Testing",
          whyItMatters: "pytest is a modern, simpler testing framework for Python.",
          realWorldAnalogy: "pytest is like a streamlined testing assistant — less boilerplate, more focus on testing.",
          content: `Install pytest:
pip install pytest

Simple test:
def test_add():
    assert 1 + 1 == 2

Run pytest:
pytest
pytest test_file.py

Fixtures:
@pytest.fixture
def data():
    return [1, 2, 3]

def test_with_data(data):
    assert len(data) == 3

Assertions:
assert value == expected
assert exception in context`,
          codeExamples: [
            {
              id: "ch62-pytest",
              title: "pytest Testing",
              description: "Modern testing with pytest",
              code: { python: "def add(a, b):\n    return a + b\n\ndef test_add_positive():\n    assert add(2, 3) == 5\n\ndef test_add_negative():\n    assert add(-2, -3) == -5\n\ndef test_add_zero():\n    assert add(0, 5) == 5" },
              explanation: "pytest uses simple assert statements. No need to inherit from TestCase class."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch62-ex1",
          title: "pytest",
          difficulty: 1,
          description: "Write pytest tests.",
          requirements: [
            "Install pytest",
            "Write simple test functions",
            "Run pytest to verify"
          ],
          starterCode: { python: "def divide(a, b):\n    return a / b\n\ndef test_divide():\n    # Write test\n\ndef test_divide_by_zero():\n    # Write test with exception" },
          hints: [
            "Use assert for normal cases",
            "Use pytest.raises for exceptions"
          ],
          solution: { python: "import pytest\n\ndef divide(a, b):\n    return a / b\n\ndef test_divide():\n    assert divide(10, 2) == 5\n    assert divide(6, 3) == 2\n\ndef test_divide_by_zero():\n    with pytest.raises(ZeroDivisionError):\n        divide(10, 0)" },
          solutionExplanation: "pytest uses simple assert statements. pytest.raises() tests exception handling."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch62-q1",
            type: "mcq",
            question: "How do you install pytest?",
            options: [
              "pip install unittest",
              "pip install pytest",
              "python -m pytest",
              "apt install pytest"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "pip install pytest installs the pytest testing framework."
          },
          {
            id: "ch62-q2",
            type: "mcq",
            question: "What does pytest use for assertions?",
            options: [
              "self.assertEqual",
              "assert",
              "verify",
              "check"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "pytest uses standard Python assert statements for testing."
          },
          {
            id: "ch62-q3",
            type: "true-false",
            question: "pytest requires test class inheritance.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "pytest doesn't require class inheritance. Simple functions work as tests."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Install",
          value: "pip install pytest"
        },
        {
          label: "Run",
          value: "pytest"
        },
        {
          label: "Assert",
          value: "assert condition"
        }
      ]
    },
    {
      id: "python-ch-63",
      number: 63,
      partLabel: "PART 6: PYTHON ECOSYSTEM",
      title: "Debugging",
      subtitle: "Find and fix bugs",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 120,
      prerequisites: ["python-ch-62"],
      learningObjectives: [
        "Use print debugging",
        "Use pdb debugger",
        "Use IDE breakpoints",
        "Read error messages"
      ],
      sections: [
        {
          id: "ch63-debugging",
          title: "Debugging Techniques",
          whyItMatters: "Debugging skills are essential for finding and fixing bugs efficiently.",
          realWorldAnalogy: "Debugging is like detective work — you gather clues to solve the mystery of what went wrong.",
          content: `Print debugging:
print(f"Variable: {variable}")
print(f"Line number: {line}")

pdb debugger:
import pdb
pdb.set_trace()
# Commands: n (next), s (step), c (continue), p (print)

pdb commands:
n - next line
s - step into function
c - continue
p variable - print variable
l - list code

IDE debugging:
Set breakpoints
Step through code
Inspect variables`,
          codeExamples: [
            {
              id: "ch63-debugging",
              title: "Debugging",
              description: "Debugging techniques",
              code: { python: "def calculate_sum(numbers):\n    total = 0\n    for num in numbers:\n        print(f\"Processing: {num}\")  # Debug print\n        total += num\n    return total\n\nresult = calculate_sum([1, 2, 3])\nprint(f\"Result: {result}\")" },
              explanation: "Print debugging is simple but effective. For complex issues, use pdb or IDE debugger."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch63-ex1",
          title: "Debugging",
          difficulty: 1,
          description: "Debug a function.",
          requirements: [
            "Add print statements",
            "Run and observe output",
            "Identify the bug"
          ],
          starterCode: { python: "def find_max(numbers):\n    max_num = numbers[0]\n    for num in numbers:\n        if num > max_num:\n            max_num = num\n    return max_num\n\n# Debug this - what happens with empty list?\nprint(find_max([1, 2, 3]))" },
          hints: [
            "Add print before loop",
            "Test with empty list",
            "Add check for empty input"
          ],
          solution: { python: "def find_max(numbers):\n    if not numbers:\n        return None\n    max_num = numbers[0]\n    for num in numbers:\n        print(f\"Comparing {max_num} with {num}\")\n        if num > max_num:\n            max_num = num\n    return max_num\n\nprint(find_max([1, 2, 3]))\nprint(find_max([]))" },
          solutionExplanation: "Debugging with print statements helps trace execution. Always handle edge cases like empty lists."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch63-q1",
            type: "mcq",
            question: "What does pdb stand for?",
            options: [
              "Python debugger",
              "Program debugger",
              "Process debugger",
              "Print debugger"
            ],
            correctAnswer: 0,
            difficulty: 1,
            explanation: "pdb stands for Python debugger."
          },
          {
            id: "ch63-q2",
            type: "mcq",
            question: "What pdb command continues execution?",
            options: [
              "n",
              "s",
              "c",
              "p"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "c (continue) resumes program execution in pdb."
          },
          {
            id: "ch63-q3",
            type: "true-false",
            question: "Print debugging is effective for simple issues.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "Print debugging is simple and effective for basic debugging tasks."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "pdb",
          value: "import pdb; pdb.set_trace()"
        },
        {
          label: "Continue",
          value: "c"
        },
        {
          label: "Next",
          value: "n"
        }
      ]
    },
    {
      id: "python-ch-64",
      number: 64,
      partLabel: "PART 6: PYTHON ECOSYSTEM",
      title: "Error Handling Best Practices",
      subtitle: "Handle errors gracefully",
      difficulty: "Intermediate",
      estimatedMinutes: 40,
      xpReward: 110,
      prerequisites: ["python-ch-63"],
      learningObjectives: [
        "Use specific exceptions",
        "Catch exceptions appropriately",
        "Provide useful error messages",
        "Use finally for cleanup"
      ],
      sections: [
        {
          id: "ch64-error-handling",
          title: "Error Handling Best Practices",
          whyItMatters: "Proper error handling makes code robust and user-friendly.",
          realWorldAnalogy: "Good error handling is like helpful customer service — it tells users what went wrong and how to fix it.",
          content: `Specific exceptions:
except ValueError:
except FileNotFoundError:
except KeyError:

Catch multiple:
except (ValueError, TypeError) as e:

Logging errors:
import logging
logging.error(f"Error: {e}")

Finally for cleanup:
try:
    # operation
except:
    # handle error
finally:
    # always runs

Raise with context:
raise ValueError("Invalid input") from None`,
          codeExamples: [
            {
              id: "ch64-error-handling",
              title: "Error Handling Best Practices",
              description: "Proper error handling",
              code: { python: "def divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        raise ValueError(\"Cannot divide by zero\") from None\n    except TypeError:\n        raise TypeError(\"Both arguments must be numbers\") from None\n\ntry:\n    result = divide(10, 0)\nexcept ValueError as e:\n    print(f\"Error: {e}\")" },
              explanation: "Use specific exceptions. Provide clear error messages. Use from None for clean tracebacks."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch64-ex1",
          title: "Error Handling",
          difficulty: 1,
          description: "Implement proper error handling.",
          requirements: [
            "Use specific exceptions",
            "Add helpful error messages",
            "Handle multiple exception types"
          ],
          starterCode: { python: "def get_item(dictionary, key):\n    try:\n        return dictionary[key]\n    except KeyError:\n        # Handle missing key\n\nmy_dict = {'a': 1, 'b': 2}\nprint(get_item(my_dict, 'a'))\nprint(get_item(my_dict, 'c'))" },
          hints: [
            "Catch KeyError specifically",
            "Return None or raise ValueError with message"
          ],
          solution: { python: "def get_item(dictionary, key):\n    try:\n        return dictionary[key]\n    except KeyError:\n        raise ValueError(f\"Key '{key}' not found in dictionary\") from None\n\nmy_dict = {'a': 1, 'b': 2}\nprint(get_item(my_dict, 'a'))\nprint(get_item(my_dict, 'c'))" },
          solutionExplanation: "Use specific exceptions. Provide clear error messages. from None cleans exception chains."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch64-q1",
            type: "mcq",
            question: "What does 'from None' do?",
            options: [
              "Creates new exception",
              "Cleans exception chain",
              "Ignores exception",
              "Logs exception"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "from None removes the exception context for cleaner tracebacks."
          },
          {
            id: "ch64-q2",
            type: "mcq",
            question: "When does finally run?",
            options: [
              "Only on error",
              "Only on success",
              "Always",
              "Never"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "finally block always runs, regardless of whether an exception occurred."
          },
          {
            id: "ch64-q3",
            type: "true-false",
            question: "Catch specific exceptions when possible.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "Catching specific exceptions is better than broad Exception for precise error handling."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Specific",
          value: "except ValueError:"
        },
        {
          label: "Multiple",
          value: "except (A, B):"
        },
        {
          label: "Finally",
          value: "Always runs"
        }
      ]
    },
    {
      id: "python-ch-65",
      number: 65,
      partLabel: "PART 6: PYTHON ECOSYSTEM",
      title: "Documentation",
      subtitle: "Document your code",
      difficulty: "Beginner",
      estimatedMinutes: 35,
      xpReward: 100,
      prerequisites: ["python-ch-64"],
      learningObjectives: [
        "Write docstrings",
        "Use docstring conventions",
        "Document functions and classes",
        "Use type hints"
      ],
      sections: [
        {
          id: "ch65-documentation",
          title: "Code Documentation",
          whyItMatters: "Good documentation makes code understandable and maintainable.",
          realWorldAnalogy: "Documentation is like instruction manuals — they explain how things work.",
          content: `Function docstring:
def greet(name):
    """Greet the person.

    Args:
        name (str): The person's name.

    Returns:
        str: A greeting message.
    """
    return f"Hello, {name}"

Class docstring:
class Person:
    """Represents a person.

    Attributes:
        name (str): The person's name.
        age (int): The person's age.
    """
    pass

Type hints:
def add(a: int, b: int) -> int:
    return a + b`,
          codeExamples: [
            {
              id: "ch65-documentation",
              title: "Documentation",
              description: "Writing docstrings",
              code: { python: "def calculate_area(length: float, width: float) -> float:\n    \"\"\"Calculate rectangle area.\n    \n    Args:\n        length: The length of the rectangle.\n        width: The width of the rectangle.\n    \n    Returns:\n        The area of the rectangle.\n    \n    Raises:\n        ValueError: If dimensions are negative.\n    \"\"\"\n    if length < 0 or width < 0:\n        raise ValueError(\"Dimensions must be positive\")\n    return length * width" },
              explanation: "Docstrings describe what code does. Use Google or NumPy style conventions."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch65-ex1",
          title: "Documentation",
          difficulty: 1,
          description: "Write docstrings.",
          requirements: [
            "Add docstring to function",
            "Document parameters and return value",
            "Include type hints"
          ],
          starterCode: { python: "def process_data(data: list) -> list:\n    # Add docstring here\n    return [x * 2 for x in data]" },
          hints: [
            "Use triple quotes",
            "Document Args and Returns"
          ],
          solution: { python: "def process_data(data: list) -> list:\n    \"\"\"Process data by doubling each element.\n    \n    Args:\n        data: A list of numbers.\n    \n    Returns:\n        A new list with each element doubled.\n    \"\"\"\n    return [x * 2 for x in data]" },
          solutionExplanation: "Docstrings describe function purpose, parameters, and return values. Use type hints for clarity."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch65-q1",
            type: "mcq",
            question: "What are docstrings?",
            options: [
              "Comments in code",
              "String literals for documentation",
              "Type hints",
              "Variable names"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Docstrings are string literals used to document code."
          },
          {
            id: "ch65-q2",
            type: "mcq",
            question: "What does -> indicate?",
            options: [
              "Function call",
              "Return type hint",
              "Import statement",
              "Exception"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "-> indicates the return type hint in a function definition."
          },
          {
            id: "ch65-q3",
            type: "true-false",
            question: "Docstrings use triple quotes.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "Docstrings use triple quotes (\"\"\"\" or ''') to span multiple lines."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Docstring",
          value: "\"\"\"Description\"\"\""
        },
        {
          label: "Args",
          value: "Args: param (type): description"
        },
        {
          label: "Returns",
          value: "Returns: type: description"
        }
      ]
    },
    {
      id: "python-ch-66",
      number: 66,
      partLabel: "PART 6: PYTHON ECOSYSTEM",
      title: "Code Style and PEP 8",
      subtitle: "Write clean Python code",
      difficulty: "Beginner",
      estimatedMinutes: 35,
      xpReward: 100,
      prerequisites: ["python-ch-65"],
      learningObjectives: [
        "Follow PEP 8 guidelines",
        "Use proper naming conventions",
        "Format code consistently",
        "Use linters"
      ],
      sections: [
        {
          id: "ch66-pep8",
          title: "PEP 8 Style Guide",
          whyItMatters: "Consistent code style makes code readable and maintainable.",
          realWorldAnalogy: "Code style is like grammar rules — consistent style makes text easier to read.",
          content: "Naming conventions:\n- Variables: snake_case\n- Constants: UPPER_CASE\n- Classes: PascalCase\n- Functions: snake_case\n\nIndentation:\n- 4 spaces per level\n- No tabs\n\nLine length:\n- Max 79 characters\n- Use backslash to break lines\n\nWhitespace:\n- Spaces around operators\n- No spaces inside brackets\n\nImports:\n- Standard library first\n- Third-party second\n- Local last",
          codeExamples: [
            {
              id: "ch66-pep8",
              title: "PEP 8 Style",
              description: "Python code style",
              code: { python: "# Good PEP 8 style\nclass UserAccount:\n    \"\"\"Represents a user account.\"\"\"\n    \n    MAX_LOGIN_ATTEMPTS = 5\n    \n    def __init__(self, username: str):\n        self.username = username\n    \n    def validate_password(self, password: str) -> bool:\n        if len(password) < 8:\n            return False\n        return True" },
              explanation: "PEP 8 is Python's style guide. Follow naming conventions, use 4-space indentation."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch66-ex1",
          title: "PEP 8",
          difficulty: 1,
          description: "Apply PEP 8 conventions.",
          requirements: [
            "Rename variables to snake_case",
            "Use proper class naming",
            "Add proper spacing"
          ],
          starterCode: { python: "class userInfo:  # Fix naming\n    def __init__(self,userName):  # Fix spacing\n        self.UserName=userName  # Fix naming\n    \n    def GetData(self):  # Fix naming\n        return self.UserName" },
          hints: [
            "Classes: PascalCase",
            "Variables/functions: snake_case",
            "Spaces around ="
          ],
          solution: { python: "class UserInfo:\n    \"\"\"Represents a user.\"\"\"\n    \n    def __init__(self, user_name: str):\n        self.user_name = user_name\n    \n    def get_data(self) -> str:\n        return self.user_name" },
          solutionExplanation: "PEP 8: snake_case for variables/functions, PascalCase for classes, spaces around operators."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch66-q1",
            type: "mcq",
            question: "What naming for functions?",
            options: [
              "camelCase",
              "PascalCase",
              "snake_case",
              "UPPER_CASE"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "Functions and variables use snake_case naming convention in PEP 8."
          },
          {
            id: "ch66-q2",
            type: "mcq",
            question: "What naming for classes?",
            options: [
              "camelCase",
              "PascalCase",
              "snake_case",
              "UPPER_CASE"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Classes use PascalCase naming convention in PEP 8."
          },
          {
            id: "ch66-q3",
            type: "true-false",
            question: "PEP 8 recommends 2-space indentation.",
            correctAnswer: false,
            difficulty: 1,
            explanation: "PEP 8 recommends 4-space indentation, not 2 spaces."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Variables",
          value: "snake_case"
        },
        {
          label: "Classes",
          value: "PascalCase"
        },
        {
          label: "Indentation",
          value: "4 spaces"
        }
      ]
    },
    {
      id: "python-ch-67",
      number: 67,
      partLabel: "PART 6: PYTHON ECOSYSTEM",
      title: "Performance Basics",
      subtitle: "Write efficient code",
      difficulty: "Intermediate",
      estimatedMinutes: 45,
      xpReward: 120,
      prerequisites: ["python-ch-66"],
      learningObjectives: [
        "Understand time complexity",
        "Use appropriate data structures",
        "Avoid premature optimization",
        "Profile code"
      ],
      sections: [
        {
          id: "ch67-performance",
          title: "Performance Optimization",
          whyItMatters: "Efficient code runs faster and uses fewer resources.",
          realWorldAnalogy: "Performance is like fuel efficiency — better code does more with less.",
          content: "Time complexity:\n- O(1): Constant time\n- O(n): Linear time\n- O(n²): Quadratic\n\nChoose right structure:\n- List: O(n) lookup, O(1) append\n- Set: O(1) lookup\n- Dict: O(1) lookup\n\nOptimization tips:\n- Use set for membership testing\n- Use list comprehension instead of loop\n- Avoid nested loops\n\nProfiling:\nimport time\nstart = time.time()\n# code\nprint(time.time() - start)",
          codeExamples: [
            {
              id: "ch67-performance",
              title: "Performance",
              description: "Writing efficient code",
              code: { python: "import time\n\n# Slow: O(n) lookup\nnames_list = ['alice', 'bob', 'charlie']\nif 'david' in names_list:\n    print(\"Found\")\n\n# Fast: O(1) lookup\nnames_set = set(names_list)\nif 'david' in names_set:\n    print(\"Found\")\n\n# List comprehension is faster\nsquares = [x**2 for x in range(1000)]" },
              explanation: "Choose appropriate data structures. Sets have O(1) lookup, lists have O(n). List comprehensions are faster than loops."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch67-ex1",
          title: "Performance",
          difficulty: 1,
          description: "Optimize code.",
          requirements: [
            "Use set for membership testing",
            "Use list comprehension",
            "Compare performance"
          ],
          starterCode: { python: "import time\n\n# Slow version\ndef has_duplicates_slow(items):\n    for i in range(len(items)):\n        if items[i] in items[i+1:]:\n            return True\n    return False\n\n# Fast version using set\ndef has_duplicates_fast(items):\n    # Implement\n\ndata = list(range(1000)) + [500]\nprint(has_duplicates_slow(data))" },
          hints: [
            "Use set to track seen items",
            "Check if item already in set"
          ],
          solution: { python: "def has_duplicates_fast(items):\n    seen = set()\n    for item in items:\n        if item in seen:\n            return True\n        seen.add(item)\n    return False\n\ndata = list(range(1000)) + [500]\nprint(has_duplicates_fast(data))" },
          solutionExplanation: "Sets have O(1) lookup, making them ideal for membership testing and duplicate detection."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch67-q1",
            type: "mcq",
            question: "What is set lookup complexity?",
            options: [
              "O(n)",
              "O(1)",
              "O(n²)",
              "O(log n)"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Set lookup is O(1) constant time."
          },
          {
            id: "ch67-q2",
            type: "mcq",
            question: "What is list append complexity?",
            options: [
              "O(n)",
              "O(1)",
              "O(n²)",
              "O(log n)"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "List append is O(1) amortized constant time."
          },
          {
            id: "ch67-q3",
            type: "true-false",
            question: "List comprehensions are faster than loops.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "List comprehensions are generally faster than equivalent for loops."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Set lookup",
          value: "O(1)"
        },
        {
          label: "List append",
          value: "O(1)"
        },
        {
          label: "List lookup",
          value: "O(n)"
        }
      ]
    },
    {
      id: "python-ch-68",
      number: 68,
      partLabel: "PART 6: PYTHON ECOSYSTEM",
      title: "Working with APIs",
      subtitle: "Consume web APIs",
      difficulty: "Intermediate",
      estimatedMinutes: 50,
      xpReward: 120,
      prerequisites: ["python-ch-67"],
      learningObjectives: [
        "Use requests library",
        "Make HTTP requests",
        "Handle JSON responses",
        "Work with headers and auth"
      ],
      sections: [
        {
          id: "ch68-apis",
          title: "Working with APIs",
          whyItMatters: "APIs let your code communicate with web services.",
          realWorldAnalogy: "APIs are like waiters — they take your order and bring back what you requested.",
          content: "Install requests:\npip install requests\n\nGET request:\nimport requests\nresponse = requests.get(url)\n\nPOST request:\nresponse = requests.post(url, json=data)\n\nHandle response:\nif response.status_code == 200:\n    data = response.json()\n\nHeaders and auth:\nheaders = {'Authorization': 'Bearer token'}\nresponse = requests.get(url, headers=headers)",
          codeExamples: [
            {
              id: "ch68-apis",
              title: "Working with APIs",
              description: "HTTP requests with requests",
              code: { python: "import requests\n\n# GET request\nresponse = requests.get('https://api.github.com')\nprint(f\"Status: {response.status_code}\")\nprint(f\"JSON: {response.json()}\")" },
              explanation: "requests library simplifies HTTP requests. Use .json() to parse JSON responses."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch68-ex1",
          title: "APIs",
          difficulty: 1,
          description: "Make API requests.",
          requirements: [
            "Install requests",
            "Make GET request",
            "Parse JSON response"
          ],
          starterCode: { python: "import requests\n\n# Make GET request to JSONPlaceholder API\nresponse = requests.get('https://jsonplaceholder.typicode.com/posts/1')\n\n# Parse and print response\n" },
          hints: [
            "Use response.status_code",
            "Use response.json()"
          ],
          solution: { python: "import requests\n\nresponse = requests.get('https://jsonplaceholder.typicode.com/posts/1')\n\nif response.status_code == 200:\n    data = response.json()\n    print(f\"Title: {data['title']}\")\n    print(f\"Body: {data['body'][:50]}...\")" },
          solutionExplanation: "requests makes HTTP requests. Check status_code, use .json() to parse responses."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch68-q1",
            type: "mcq",
            question: "What library makes HTTP requests?",
            options: [
              "http",
              "requests",
              "urllib",
              "api"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "The requests library is the most popular for making HTTP requests in Python."
          },
          {
            id: "ch68-q2",
            type: "mcq",
            question: "What does response.json() do?",
            options: [
              "Returns URL",
              "Parses JSON response",
              "Returns status",
              "Returns headers"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "response.json() parses the JSON response body into a Python dictionary."
          },
          {
            id: "ch68-q3",
            type: "true-false",
            question: "Status code 200 means success.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "HTTP status code 200 OK indicates successful request."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Install",
          value: "pip install requests"
        },
        {
          label: "GET",
          value: "requests.get(url)"
        },
        {
          label: "JSON",
          value: "response.json()"
        }
      ]
    },
    {
      id: "python-ch-69",
      number: 69,
      partLabel: "PART 6: PYTHON ECOSYSTEM",
      title: "Web Scraping Basics",
      subtitle: "Extract data from web",
      difficulty: "Intermediate",
      estimatedMinutes: 50,
      xpReward: 120,
      prerequisites: ["python-ch-68"],
      learningObjectives: [
        "Use BeautifulSoup",
        "Parse HTML",
        "Extract data",
        "Respect robots.txt"
      ],
      sections: [
        {
          id: "ch69-web-scraping",
          title: "Web Scraping",
          whyItMatters: "Web scraping lets you extract data from websites programmatically.",
          realWorldAnalogy: "Web scraping is like automated note-taking — it extracts information from web pages.",
          content: "Install libraries:\npip install requests beautifulsoup4\n\nParse HTML:\nfrom bs4 import BeautifulSoup\nsoup = BeautifulSoup(html, 'html.parser')\n\nFind elements:\nsoup.find('tag', class_='class')\nsoup.find_all('tag')\n\nExtract data:\nelement.text\nelement['attribute']\n\nRespect robots.txt:\nAlways check if scraping is allowed",
          codeExamples: [
            {
              id: "ch69-web-scraping",
              title: "Web Scraping",
              description: "Extracting web data",
              code: { python: "from bs4 import BeautifulSoup\nimport requests\n\nhtml = '''\n<html>\n  <body>\n    <h1>Welcome</h1>\n    <p class=\"text\">Hello World</p>\n  </body>\n</html>\n'''\n\nsoup = BeautifulSoup(html, 'html.parser')\nprint(soup.find('h1').text)\nprint(soup.find('p', class_='text').text)" },
              explanation: "BeautifulSoup parses HTML. Use find() to locate elements, .text to extract content."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch69-ex1",
          title: "Web Scraping",
          difficulty: 1,
          description: "Parse HTML with BeautifulSoup.",
          requirements: [
            "Parse sample HTML",
            "Extract heading text",
            "Extract paragraph text"
          ],
          starterCode: { python: "from bs4 import BeautifulSoup\n\nhtml = '''<html><body><h1>Title</h1><p>Content</p></body></html>'''\n\nsoup = BeautifulSoup(html, 'html.parser')\n# Extract heading and paragraph" },
          hints: [
            "Use soup.find('h1')",
            "Use .text to get content"
          ],
          solution: { python: "from bs4 import BeautifulSoup\n\nhtml = '''<html><body><h1>Title</h1><p>Content</p></body></html>'''\n\nsoup = BeautifulSoup(html, 'html.parser')\nheading = soup.find('h1').text\nparagraph = soup.find('p').text\nprint(f\"Heading: {heading}\")\nprint(f\"Paragraph: {paragraph}\")" },
          solutionExplanation: "BeautifulSoup parses HTML. Use find() to locate elements, .text to extract text content."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch69-q1",
            type: "mcq",
            question: "What does BeautifulSoup do?",
            options: [
              "Makes HTTP requests",
              "Parses HTML/XML",
              "Executes JavaScript",
              "Stores data"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "BeautifulSoup parses HTML and XML documents for web scraping."
          },
          {
            id: "ch69-q2",
            type: "mcq",
            question: "What extracts text from element?",
            options: [
              "element.content",
              "element.text",
              "element.value",
              "element.data"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "element.text extracts the text content from a BeautifulSoup element."
          },
          {
            id: "ch69-q3",
            type: "true-false",
            question: "Always check robots.txt before scraping.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "robots.txt specifies which parts of a site can be scraped. Always respect it."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Install",
          value: "pip install beautifulsoup4"
        },
        {
          label: "Parse",
          value: "BeautifulSoup(html, 'parser')"
        },
        {
          label: "Find",
          value: "soup.find('tag')"
        }
      ]
    },
    {
      id: "python-ch-70",
      number: 70,
      partLabel: "PART 6: PYTHON ECOSYSTEM",
      title: "Environment Variables",
      subtitle: "Configure with environment",
      difficulty: "Beginner",
      estimatedMinutes: 35,
      xpReward: 100,
      prerequisites: ["python-ch-69"],
      learningObjectives: [
        "Access environment variables",
        "Set environment variables",
        "Use .env files",
        "Handle sensitive data"
      ],
      sections: [
        {
          id: "ch70-env-vars",
          title: "Environment Variables",
          whyItMatters: "Environment variables keep configuration separate from code.",
          realWorldAnalogy: "Environment variables are like settings menus — configure behavior without changing code.",
          content: "Access env vars:\nimport os\napi_key = os.getenv('API_KEY')\n\nGet all env vars:\nos.environ\n\nSet env vars:\nos.environ['VAR'] = 'value'\n\nUse .env files:\npip install python-dotenv\nfrom dotenv import load_dotenv\nload_dotenv()\n\nBest practices:\n- Never commit secrets\n- Use .env for local config\n- Document required variables",
          codeExamples: [
            {
              id: "ch70-env-vars",
              title: "Environment Variables",
              description: "Using environment variables",
              code: { python: "import os\n\n# Get environment variable\napi_key = os.getenv('API_KEY', 'default_key')\nprint(f\"API Key: {api_key[:10]}...\")\n\n# Set environment variable\nos.environ['DEBUG'] = 'true'\nprint(f\"Debug: {os.getenv('DEBUG')}\")" },
              explanation: "Environment variables store configuration. Use os.getenv() to access them safely."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch70-ex1",
          title: "Environment Variables",
          difficulty: 1,
          description: "Use environment variables.",
          requirements: [
            "Access environment variable",
            "Provide default value",
            "Set environment variable"
          ],
          starterCode: { python: "import os\n\n# Get DB_HOST with default\ndb_host = os.getenv('DB_HOST', 'localhost')\nprint(f\"DB Host: {db_host}\")\n\n# Set a variable\nos.environ['APP_ENV'] = 'development'\nprint(f\"App Env: {os.getenv('APP_ENV')}\")" },
          hints: [
            "Use os.getenv('KEY', 'default')",
            "Use os.environ['KEY'] = 'value'"
          ],
          solution: { python: "import os\n\ndb_host = os.getenv('DB_HOST', 'localhost')\nprint(f\"DB Host: {db_host}\")\n\nos.environ['APP_ENV'] = 'development'\nprint(f\"App Env: {os.getenv('APP_ENV')}\")" },
          solutionExplanation: "os.getenv() accesses env vars with optional default. os.environ sets them."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch70-q1",
            type: "mcq",
            question: "What module accesses env vars?",
            options: [
              "env",
              "os",
              "config",
              "settings"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "The os module provides access to environment variables."
          },
          {
            id: "ch70-q2",
            type: "mcq",
            question: "What provides default value?",
            options: [
              "os.environ.get('KEY', 'default')",
              "os.getenv('KEY', 'default')",
              "os.env.get('KEY', 'default')",
              "os.get('KEY', 'default')"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "os.getenv('KEY', 'default') provides a default if the variable doesn't exist."
          },
          {
            id: "ch70-q3",
            type: "true-false",
            question: "Never commit .env files to git.",
            correctAnswer: true,
            difficulty: 1,
            explanation: ".env files contain sensitive data and should never be committed to version control."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Get",
          value: "os.getenv('KEY')"
        },
        {
          label: "Default",
          value: "os.getenv('KEY', 'default')"
        },
        {
          label: "Set",
          value: "os.environ['KEY'] = 'value'"
        }
      ]
    },
    {
      id: "python-ch-71",
      number: 71,
      partLabel: "PART 7: PROJECTS",
      title: "Project 1: Number Guessing Game",
      subtitle: "Build an interactive game",
      difficulty: "Beginner",
      estimatedMinutes: 60,
      xpReward: 150,
      prerequisites: ["python-ch-70"],
      learningObjectives: [
        "Use random module",
        "Implement game loop",
        "Handle user input",
        "Add game logic"
      ],
      sections: [
        {
          id: "ch71-project1",
          title: "Number Guessing Game",
          whyItMatters: "Building a game teaches program flow, input handling, and random number generation.",
          realWorldAnalogy: "A guessing game is like a simple puzzle — you use clues to find the answer through trial and error.",
          content: "Generate random number:\nimport random\nsecret = random.randint(1, 100)\n\nGame loop:\nwhile True:\n    guess = input(\"Guess (1-100): \")\n    if guess == secret:\n        print(\"You win!\")\n        break\n\nProvide feedback:\nif guess < secret:\n    print(\"Too low\")\nelse:\n    print(\"Too high\")",
          codeExamples: [
            {
              id: "ch71-project1",
              title: "Number Guessing Game",
              description: "Interactive guessing game",
              code: { python: "import random\n\ndef guessing_game():\n    secret = random.randint(1, 100)\n    attempts = 0\n    \n    print(\"Guess a number between 1 and 100!\")\n    \n    while True:\n        attempts += 1\n        try:\n            guess = int(input(\"Enter your guess: \"))\n            \n            if guess == secret:\n                print(f\"Correct! You got it in {attempts} attempts!\")\n                break\n            elif guess < secret:\n                print(\"Too low!\")\n            else:\n                print(\"Too high!\")\n        except ValueError:\n            print(\"Please enter a valid number.\")\n\nguessing_game()" },
              explanation: "Use random.randint() to generate numbers. Use while loop for game. Handle input errors with try/except."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch71-ex1",
          title: "Guessing Game",
          difficulty: 1,
          description: "Complete the number guessing game.",
          requirements: [
            "Generate random number 1-100",
            "Get user input and validate",
            "Provide high/low feedback",
            "Count attempts"
          ],
          starterCode: { python: "import random\n\ndef guessing_game():\n    secret = random.randint(1, 100)\n    attempts = 0\n    \n    while True:\n        attempts += 1\n        guess = int(input(\"Guess a number (1-100): \"))\n        \n        # Add game logic here\n\nguessing_game()" },
          hints: [
            "Compare guess to secret",
            "Print feedback messages",
            "Break loop on correct guess"
          ],
          solution: { python: "import random\n\ndef guessing_game():\n    secret = random.randint(1, 100)\n    attempts = 0\n    \n    print(\"Guess a number between 1 and 100!\")\n    \n    while True:\n        attempts += 1\n        try:\n            guess = int(input(\"Enter your guess: \"))\n            \n            if guess == secret:\n                print(f\"Correct! You got it in {attempts} attempts!\")\n                break\n            elif guess < secret:\n                print(\"Too low!\")\n            else:\n                print(\"Too high!\")\n        except ValueError:\n            print(\"Please enter a valid number.\")\n\nguessing_game()" },
          solutionExplanation: "Random numbers, input handling, and game loops work together to create interactive programs."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch71-q1",
            type: "mcq",
            question: "What does random.randint do?",
            options: [
              "Generates float",
              "Generates random integer",
              "Shuffles list",
              "Picks random element"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "random.randint(a, b) returns a random integer between a and b inclusive."
          },
          {
            id: "ch71-q2",
            type: "mcq",
            question: "What loop type for games?",
            options: [
              "for loop",
              "while loop",
              "do-while",
              "foreach"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "while loops are ideal for games since they continue until a condition is met."
          },
          {
            id: "ch71-q3",
            type: "true-false",
            question: "Input returns strings by default.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "input() always returns a string, so convert to int/float for numbers."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "random.randint",
          value: "Random integer"
        },
        {
          label: "input",
          value: "Get user input"
        },
        {
          label: "while loop",
          value: "Game loop"
        }
      ]
    },
    {
      id: "python-ch-72",
      number: 72,
      partLabel: "PART 7: PROJECTS",
      title: "Project 2: To-Do List Manager",
      subtitle: "Build a task manager",
      difficulty: "Beginner",
      estimatedMinutes: 60,
      xpReward: 150,
      prerequisites: ["python-ch-71"],
      learningObjectives: [
        "Use lists for data storage",
        "Implement CRUD operations",
        "Handle user menus",
        "Persist data to file"
      ],
      sections: [
        {
          id: "ch72-project2",
          title: "To-Do List Manager",
          whyItMatters: "A to-do list teaches data management, CRUD operations, and file I/O.",
          realWorldAnalogy: "A to-do list is like a task notebook — you add, view, and complete items.",
          content: "Data structure:\ntasks = []\n\nCRUD operations:\n- Create: tasks.append()\n- Read: print tasks\n- Update: tasks[index] = new\n- Delete: tasks.pop(index)\n\nMenu system:\nwhile True:\n    print(\"1. Add, 2. View, 3. Delete, 4. Exit\")\n\nSave to file:\nwith open('tasks.txt', 'w') as f:\n    f.write(str(tasks))",
          codeExamples: [
            {
              id: "ch72-project2",
              title: "To-Do List Manager",
              description: "Task management application",
              code: { python: "def todo_app():\n    tasks = []\n    \n    while True:\n        print(\"\\n1. Add task\")\n        print(\"2. View tasks\")\n        print(\"3. Delete task\")\n        print(\"4. Exit\")\n        \n        choice = input(\"Choose: \")\n        \n        if choice == '1':\n            task = input(\"Enter task: \")\n            tasks.append(task)\n            print(\"Task added!\")\n        elif choice == '2':\n            for i, t in enumerate(tasks):\n                print(f\"{i+1}. {t}\")\n        elif choice == '4':\n            break\n\ntodo_app()" },
              explanation: "Lists store tasks. Menu provides options. Use enumerate for numbered display."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch72-ex1",
          title: "To-Do List",
          difficulty: 1,
          description: "Build a to-do list manager.",
          requirements: [
            "Add tasks to list",
            "View all tasks",
            "Delete tasks",
            "Exit option"
          ],
          starterCode: { python: "def todo_app():\n    tasks = []\n    \n    while True:\n        print(\"\\n1. Add task\")\n        print(\"2. View tasks\")\n        print(\"3. Delete task\")\n        print(\"4. Exit\")\n        \n        choice = input(\"Choose: \")\n        \n        # Implement menu logic\n\ntodo_app()" },
          hints: [
            "Use if/elif for menu",
            "tasks.append() to add",
            "tasks.pop() to delete"
          ],
          solution: { python: "def todo_app():\n    tasks = []\n    \n    while True:\n        print(\"\\n1. Add task\")\n        print(\"2. View tasks\")\n        print(\"3. Delete task\")\n        print(\"4. Exit\")\n        \n        choice = input(\"Choose: \")\n        \n        if choice == '1':\n            task = input(\"Enter task: \")\n            tasks.append(task)\n            print(\"Task added!\")\n        elif choice == '2':\n            for i, t in enumerate(tasks, 1):\n                print(f\"{i}. {t}\")\n        elif choice == '3':\n            if tasks:\n                tasks.pop()\n                print(\"Task deleted!\")\n        elif choice == '4':\n            print(\"Goodbye!\")\n            break\n\ntodo_app()" },
          solutionExplanation: "Lists manage data. Menu systems use while loops and if/elif for user interaction."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch72-q1",
            type: "mcq",
            question: "What adds to a list?",
            options: [
              "list.add()",
              "list.push()",
              "list.append()",
              "list.insert()"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "list.append() adds an item to the end of a list."
          },
          {
            id: "ch72-q2",
            type: "mcq",
            question: "What removes from list?",
            options: [
              "list.remove()",
              "list.delete()",
              "list.pop()",
              "list.erase()"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "list.pop() removes and returns the last item from a list."
          },
          {
            id: "ch72-q3",
            type: "true-false",
            question: "Enumerate provides index and value.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "enumerate() returns pairs of (index, value) when iterating."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "append",
          value: "Add to list"
        },
        {
          label: "pop",
          value: "Remove from list"
        },
        {
          label: "enumerate",
          value: "Index and value"
        }
      ]
    },
    {
      id: "python-ch-73",
      number: 73,
      partLabel: "PART 7: PROJECTS",
      title: "Project 3: Password Generator",
      subtitle: "Generate secure passwords",
      difficulty: "Intermediate",
      estimatedMinutes: 50,
      xpReward: 140,
      prerequisites: ["python-ch-72"],
      learningObjectives: [
        "Use string module",
        "Use random module",
        "Combine data types",
        "Validate user input"
      ],
      sections: [
        {
          id: "ch73-project3",
          title: "Password Generator",
          whyItMatters: "Password generators teach character sets, random selection, and security concepts.",
          realWorldAnalogy: "A password generator is like a lock picker — it creates secure combinations.",
          content: "Character sets:\nimport string\nletters = string.ascii_letters\ndigits = string.digits\nsymbols = string.punctuation\n\nRandom selection:\nimport random\nchar = random.choice(characters)\n\nBuild password:\npassword = ''.join(random.choices(characters, k=length))\n\nUser input:\nlength = int(input(\"Password length: \"))",
          codeExamples: [
            {
              id: "ch73-project3",
              title: "Password Generator",
              description: "Secure password generator",
              code: { python: "import random\nimport string\n\ndef generate_password(length=12):\n    characters = string.ascii_letters + string.digits + string.punctuation\n    password = ''.join(random.choices(characters, k=length))\n    return password\n\ndef main():\n    try:\n        length = int(input(\"Enter password length (8-32): \"))\n        if 8 <= length <= 32:\n            print(f\"Generated password: {generate_password(length)}\")\n        else:\n            print(\"Length must be between 8 and 32.\")\n    except ValueError:\n        print(\"Please enter a valid number.\")\n\nmain()" },
              explanation: "string module provides character sets. random.choices() selects multiple items. join() builds the password."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch73-ex1",
          title: "Password Generator",
          difficulty: 1,
          description: "Build a password generator.",
          requirements: [
            "Combine letters, digits, symbols",
            "Generate random password",
            "Validate length input",
            "Display result"
          ],
          starterCode: { python: "import random\nimport string\n\ndef generate_password(length):\n    # Combine character sets\n    # Generate random password\n    return password\n\nlength = int(input(\"Password length: \"))\nprint(generate_password(length))" },
          hints: [
            "string.ascii_letters + string.digits + string.punctuation",
            "random.choices(characters, k=length)",
            "''.join() to combine"
          ],
          solution: { python: "import random\nimport string\n\ndef generate_password(length):\n    characters = string.ascii_letters + string.digits + string.punctuation\n    password = ''.join(random.choices(characters, k=length))\n    return password\n\ntry:\n    length = int(input(\"Password length (8-32): \"))\n    if 8 <= length <= 32:\n        print(f\"Password: {generate_password(length)}\")\n    else:\n        print(\"Length must be 8-32.\")\nexcept ValueError:\n    print(\"Invalid input.\")" },
          solutionExplanation: "String modules provide character sets. random.choices() selects with replacement. join() combines characters."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch73-q1",
            type: "mcq",
            question: "What does string.ascii_letters contain?",
            options: [
              "All characters",
              "A-Z and a-z",
              "0-9",
              "Special chars"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "string.ascii_letters contains all uppercase and lowercase letters."
          },
          {
            id: "ch73-q2",
            type: "mcq",
            question: "What does random.choices do?",
            options: [
              "One random choice",
              "Multiple with replacement",
              "Shuffle list",
              "Unique choices"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "random.choices() selects k items with possible duplicates."
          },
          {
            id: "ch73-q3",
            type: "true-false",
            question: "string.punctuation has special characters.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "string.punctuation contains all punctuation characters like !@#$%."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "ascii_letters",
          value: "A-Z and a-z"
        },
        {
          label: "digits",
          value: "0-9"
        },
        {
          label: "punctuation",
          value: "Special chars"
        }
      ]
    },
    {
      id: "python-ch-74",
      number: 74,
      partLabel: "PART 7: PROJECTS",
      title: "Project 4: Simple Calculator",
      subtitle: "Build a calculator",
      difficulty: "Beginner",
      estimatedMinutes: 50,
      xpReward: 140,
      prerequisites: ["python-ch-73"],
      learningObjectives: [
        "Handle user input",
        "Implement arithmetic operations",
        "Use functions",
        "Handle errors"
      ],
      sections: [
        {
          id: "ch74-project4",
          title: "Simple Calculator",
          whyItMatters: "A calculator teaches input handling, functions, and error handling.",
          realWorldAnalogy: "A calculator is like a math assistant — it performs computations on your command.",
          content: "Arithmetic functions:\ndef add(a, b): return a + b\ndef subtract(a, b): return a - b\n\nOperations mapping:\noperations = {\n    '+': add,\n    '-': subtract,\n    '*': multiply,\n    '/': divide\n}\n\nError handling:\ntry:\n    result = a / b\nexcept ZeroDivisionError:\n    return \"Cannot divide by zero\"",
          codeExamples: [
            {
              id: "ch74-project4",
              title: "Simple Calculator",
              description: "Basic calculator",
              code: { python: "def calculator():\n    print(\"Simple Calculator\")\n    print(\"Enter 'q' to quit\")\n    \n    while True:\n        try:\n            expr = input(\"\\nEnter expression (e.g., 5 + 3): \")\n            if expr.lower() == 'q':\n                break\n            result = eval(expr)\n            print(f\"Result: {result}\")\n        except Exception as e:\n            print(f\"Error: {e}\")\n\ncalculator()" },
              explanation: "eval() evaluates expressions. Use carefully with user input. For production, parse expressions manually."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch74-ex1",
          title: "Calculator",
          difficulty: 1,
          description: "Build a simple calculator.",
          requirements: [
            "Get expression from user",
            "Parse and calculate",
            "Handle division by zero",
            "Loop until quit"
          ],
          starterCode: { python: "def calculator():\n    while True:\n        expr = input(\"Enter expression (or 'q' to quit): \")\n        if expr == 'q':\n            break\n        # Parse and calculate\n\ncalculator()" },
          hints: [
            "Use split() to parse",
            "Convert to float/int",
            "Handle ZeroDivisionError"
          ],
          solution: { python: "def calculator():\n    print(\"Simple Calculator\")\n    \n    while True:\n        expr = input(\"\\nEnter expression (e.g., 5 + 3) or 'q' to quit: \")\n        if expr.lower() == 'q':\n            break\n        \n        try:\n            result = eval(expr)\n            print(f\"Result: {result}\")\n        except ZeroDivisionError:\n            print(\"Error: Cannot divide by zero\")\n        except Exception as e:\n            print(f\"Error: Invalid expression\")\n\ncalculator()" },
          solutionExplanation: "eval() evaluates string as Python code. Handle errors with try/except for robustness."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch74-q1",
            type: "mcq",
            question: "What does eval() do?",
            options: [
              "Evaluate string as code",
              "Evaluate string length",
              "Evaluate type",
              "Evaluate value"
            ],
            correctAnswer: 0,
            difficulty: 1,
            explanation: "eval() evaluates a string as Python code and returns the result."
          },
          {
            id: "ch74-q2",
            type: "mcq",
            question: "What error for division by zero?",
            options: [
              "ValueError",
              "TypeError",
              "ZeroDivisionError",
              "RuntimeError"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "ZeroDivisionError is raised when dividing by zero."
          },
          {
            id: "ch74-q3",
            type: "true-false",
            question: "eval() can be dangerous with user input.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "eval() executes arbitrary code, which is dangerous with untrusted input."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "eval",
          value: "Evaluate string as code"
        },
        {
          label: "split",
          value: "Parse string"
        },
        {
          label: "ZeroDivisionError",
          value: "Division by zero"
        }
      ]
    },
    {
      id: "python-ch-75",
      number: 75,
      partLabel: "PART 7: PROJECTS",
      title: "Project 5: Text File Analyzer",
      subtitle: "Analyze text files",
      difficulty: "Intermediate",
      estimatedMinutes: 60,
      xpReward: 150,
      prerequisites: ["python-ch-74"],
      learningObjectives: [
        "Read files",
        "Process text data",
        "Count words and lines",
        "Write output files"
      ],
      sections: [
        {
          id: "ch75-project5",
          title: "Text File Analyzer",
          whyItMatters: "File I/O is essential for data processing applications.",
          realWorldAnalogy: "A text analyzer is like a document scanner — it reads and summarizes content.",
          content: "Read file:\nwith open('file.txt', 'r') as f:\n    content = f.read()\n\nCount words:\nwords = content.split()\nword_count = len(words)\n\nCount lines:\nlines = content.split('\\n')\nline_count = len(lines)\n\nWrite results:\nwith open('results.txt', 'w') as f:\n    f.write(f\"Words: {word_count}\")",
          codeExamples: [
            {
              id: "ch75-project5",
              title: "Text File Analyzer",
              description: "File text analysis",
              code: { python: "def analyze_file(filename):\n    try:\n        with open(filename, 'r') as f:\n            content = f.read()\n        \n        lines = content.split('\\n')\n        words = content.split()\n        chars = len(content)\n        \n        print(f\"Lines: {len(lines)}\")\n        print(f\"Words: {len(words)}\")\n        print(f\"Characters: {chars}\")\n        \n        return {'lines': len(lines), 'words': len(words), 'chars': chars}\n    except FileNotFoundError:\n        print(\"File not found.\")\n\nanalyze_file('sample.txt')" },
              explanation: "Use with open() for file I/O. split() breaks text into lines/words. Handle FileNotFoundError."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch75-ex1",
          title: "File Analyzer",
          difficulty: 1,
          description: "Analyze a text file.",
          requirements: [
            "Read file content",
            "Count lines, words, characters",
            "Display statistics",
            "Handle missing file"
          ],
          starterCode: { python: "def analyze_file(filename):\n    try:\n        with open(filename, 'r') as f:\n            content = f.read()\n        \n        # Calculate statistics\n        print(f\"Lines: {len(content.split())}\")\n        print(f\"Words: {len(content.split())}\")\n        print(f\"Characters: {len(content)}\")\n    except FileNotFoundError:\n        print(\"File not found\")\n\nanalyze_file('sample.txt')" },
          hints: [
            "split('\\n') for lines",
            "split() for words",
            "len() for count"
          ],
          solution: { python: "def analyze_file(filename):\n    try:\n        with open(filename, 'r') as f:\n            content = f.read()\n        \n        lines = content.split('\\n')\n        words = content.split()\n        chars = len(content)\n        \n        print(f\"Lines: {len(lines)}\")\n        print(f\"Words: {len(words)}\")\n        print(f\"Characters: {chars}\")\n        \n        return {'lines': len(lines), 'words': len(words), 'chars': chars}\n    except FileNotFoundError:\n        print(\"File not found.\")\n\nanalyze_file('sample.txt')" },
          solutionExplanation: "with open() handles file I/O safely. split() breaks text into components. Handle file errors."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch75-q1",
            type: "mcq",
            question: "What does 'r' mode do?",
            options: [
              "Write",
              "Read",
              "Append",
              "Read/write"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "'r' mode opens a file for reading."
          },
          {
            id: "ch75-q2",
            type: "mcq",
            question: "What splits text by newline?",
            options: [
              "split()",
              "split('\\n')",
              "splitlines()",
              "partition()"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "split('\\n') splits text into lines based on newline characters."
          },
          {
            id: "ch75-q3",
            type: "true-false",
            question: "with open() closes files automatically.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "with statement ensures files are closed automatically, even on errors."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "with open",
          value: "Automatic file handling"
        },
        {
          label: "split('\\n')",
          value: "Split into lines"
        },
        {
          label: "FileNotFoundError",
          value: "Missing file error"
        }
      ]
    },
    {
      id: "python-ch-76",
      number: 76,
      partLabel: "PART 7: PROJECTS",
      title: "Project 6: Weather App",
      subtitle: "Fetch weather data",
      difficulty: "Intermediate",
      estimatedMinutes: 60,
      xpReward: 150,
      prerequisites: ["python-ch-75"],
      learningObjectives: [
        "Use requests library",
        "Make API calls",
        "Parse JSON data",
        "Display formatted output"
      ],
      sections: [
        {
          id: "ch76-project6",
          title: "Weather App",
          whyItMatters: "API integration is crucial for modern applications.",
          realWorldAnalogy: "A weather app is like a weather reporter — it fetches and displays current conditions.",
          content: "Install requests:\npip install requests\n\nMake API call:\nimport requests\nresponse = requests.get(url)\n\nParse JSON:\ndata = response.json()\ntemp = data['main']['temp']\n\nDisplay results:\nprint(f\"Temperature: {temp}°C\")",
          codeExamples: [
            {
              id: "ch76-project6",
              title: "Weather App",
              description: "Weather data from API",
              code: { python: "import requests\n\ndef get_weather(city):\n    # Using a free weather API\n    url = f\"https://api.openweathermap.org/data/2.5/weather?q={city}&appid=YOUR_KEY\"\n    \n    response = requests.get(url)\n    \n    if response.status_code == 200:\n        data = response.json()\n        temp = data['main']['temp']\n        desc = data['weather'][0]['description']\n        print(f\"{city}: {desc}, {temp}K\")\n    else:\n        print(\"Failed to fetch weather\")\n\nget_weather(\"London\")" },
              explanation: "requests makes HTTP calls. response.json() parses JSON data. Check status_code for success."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch76-ex1",
          title: "Weather App",
          difficulty: 1,
          description: "Fetch weather data.",
          requirements: [
            "Install requests",
            "Make API call",
            "Parse JSON response",
            "Display weather info"
          ],
          starterCode: { python: "import requests\n\ndef get_weather(city):\n    url = f\"https://api.openweathermap.org/data/2.5/weather?q={city}&appid=YOUR_KEY\"\n    \n    response = requests.get(url)\n    # Parse and display data\n\nget_weather(\"London\")" },
          hints: [
            "Check response.status_code",
            "Use response.json()",
            "Access nested data"
          ],
          solution: { python: "import requests\n\ndef get_weather(city):\n    url = f\"https://api.openweathermap.org/data/2.5/weather?q={city}&appid=YOUR_KEY\"\n    \n    response = requests.get(url)\n    \n    if response.status_code == 200:\n        data = response.json()\n        temp = data['main']['temp']\n        desc = data['weather'][0]['description']\n        print(f\"{city}: {desc}, {temp}K\")\n    else:\n        print(f\"Error: {response.status_code}\")\n\nget_weather(\"London\")" },
          solutionExplanation: "APIs provide data over HTTP. requests handles the call. JSON contains structured data."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch76-q1",
            type: "mcq",
            question: "What makes HTTP requests?",
            options: [
              "http",
              "urllib",
              "requests",
              "api"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "The requests library is the most popular for making HTTP requests."
          },
          {
            id: "ch76-q2",
            type: "mcq",
            question: "What parses JSON?",
            options: [
              "json.loads()",
              "json.parse()",
              "response.json()",
              "response.load()"
            ],
            correctAnswer: 2,
            difficulty: 1,
            explanation: "response.json() parses the JSON response body into a Python dictionary."
          },
          {
            id: "ch76-q3",
            type: "true-false",
            question: "Status code 200 means success.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "HTTP 200 OK indicates a successful request."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "requests.get",
          value: "Make GET request"
        },
        {
          label: "response.json",
          value: "Parse JSON"
        },
        {
          label: "status_code",
          value: "HTTP status"
        }
      ]
    },
    {
      id: "python-ch-77",
      number: 77,
      partLabel: "PART 7: PROJECTS",
      title: "Project 7: Contact Book",
      subtitle: "Manage contacts",
      difficulty: "Intermediate",
      estimatedMinutes: 70,
      xpReward: 160,
      prerequisites: ["python-ch-76"],
      learningObjectives: [
        "Use dictionaries",
        "Implement CRUD",
        "Search functionality",
        "Persist to JSON file"
      ],
      sections: [
        {
          id: "ch77-project7",
          title: "Contact Book",
          whyItMatters: "Contact management teaches dictionaries, JSON, and persistent storage.",
          realWorldAnalogy: "A contact book is like an address book — you store and retrieve contact information.",
          content: "Data structure:\ncontacts = {}\n\nAdd contact:\ncontacts[email] = {'name': name, 'phone': phone}\n\nSearch contact:\nif email in contacts:\n    return contacts[email]\n\nSave to JSON:\nimport json\nwith open('contacts.json', 'w') as f:\n    json.dump(contacts, f)\n\nLoad from JSON:\nwith open('contacts.json', 'r') as f:\n    contacts = json.load(f)",
          codeExamples: [
            {
              id: "ch77-project7",
              title: "Contact Book",
              description: "Contact management",
              code: { python: "import json\n\ndef load_contacts():\n    try:\n        with open('contacts.json', 'r') as f:\n            return json.load(f)\n    except FileNotFoundError:\n        return {}\n\ndef save_contacts(contacts):\n    with open('contacts.json', 'w') as f:\n        json.dump(contacts, f, indent=2)\n\ndef add_contact(contacts, email, name, phone):\n    contacts[email] = {'name': name, 'phone': phone}\n    save_contacts(contacts)" },
              explanation: "Dictionaries map emails to contact data. JSON provides persistent storage between runs."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch77-ex1",
          title: "Contact Book",
          difficulty: 1,
          description: "Build a contact manager.",
          requirements: [
            "Use dictionary for storage",
            "Add, search, delete contacts",
            "Save/load from JSON",
            "Menu interface"
          ],
          starterCode: { python: "import json\n\ndef contact_book():\n    contacts = {}\n    \n    while True:\n        print(\"\\n1. Add Contact\")\n        print(\"2. Search Contact\")\n        print(\"3. Delete Contact\")\n        print(\"4. Exit\")\n        \n        choice = input(\"Choose: \")\n        # Implement menu\n\ncontact_book()" },
          hints: [
            "contacts[email] = data",
            "json.dump() to save",
            "json.load() to load"
          ],
          solution: { python: "import json\n\ndef contact_book():\n    try:\n        with open('contacts.json', 'r') as f:\n            contacts = json.load(f)\n    except FileNotFoundError:\n        contacts = {}\n    \n    while True:\n        print(\"\\n1. Add Contact\")\n        print(\"2. Search Contact\")\n        print(\"3. List Contacts\")\n        print(\"4. Exit\")\n        \n        choice = input(\"Choose: \")\n        \n        if choice == '1':\n            email = input(\"Email: \")\n            name = input(\"Name: \")\n            phone = input(\"Phone: \")\n            contacts[email] = {'name': name, 'phone': phone}\n            print(\"Contact added!\")\n        elif choice == '2':\n            email = input(\"Search email: \")\n            if email in contacts:\n                print(f\"Name: {contacts[email]['name']}\")\n            else:\n                print(\"Not found\")\n        elif choice == '3':\n            for email, data in contacts.items():\n                print(f\"{email}: {data['name']}\")\n        elif choice == '4':\n            with open('contacts.json', 'w') as f:\n                json.dump(contacts, f)\n            print(\"Saved. Goodbye!\")\n            break\n\ncontact_book()" },
          solutionExplanation: "Dictionaries map keys to values. JSON handles persistence. Menu systems organize functionality."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch77-q1",
            type: "mcq",
            question: "What serializes to JSON?",
            options: [
              "json.serialize()",
              "json.dump()",
              "json.save()",
              "json.write()"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "json.dump() serializes Python objects to JSON format."
          },
          {
            id: "ch77-q2",
            type: "mcq",
            question: "What deserializes JSON?",
            options: [
              "json.deserialize()",
              "json.load()",
              "json.read()",
              "json.parse()"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "json.load() deserializes JSON data into Python objects."
          },
          {
            id: "ch77-q3",
            type: "true-false",
            question: "Dictionaries map keys to values.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "Dictionaries store key-value pairs for fast lookup by key."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "json.dump",
          value: "Serialize to JSON"
        },
        {
          label: "json.load",
          value: "Deserialize JSON"
        },
        {
          label: "dict[key]",
          value: "Access by key"
        }
      ]
    },
    {
      id: "python-ch-78",
      number: 78,
      partLabel: "PART 7: PROJECTS",
      title: "Project 8: Quiz Application",
      subtitle: "Create interactive quizzes",
      difficulty: "Intermediate",
      estimatedMinutes: 70,
      xpReward: 160,
      prerequisites: ["python-ch-77"],
      learningObjectives: [
        "Store quiz data",
        "Present questions",
        "Score answers",
        "Display results"
      ],
      sections: [
        {
          id: "ch78-project8",
          title: "Quiz Application",
          whyItMatters: "Quiz apps teach data structures, user interaction, and scoring logic.",
          realWorldAnalogy: "A quiz app is like an exam — it presents questions and scores your answers.",
          content: "Quiz data structure:\nquiz = {\n    'question': 'What is 2+2?',\n    'options': ['3', '4', '5'],\n    'answer': 1\n}\n\nMultiple questions:\nquestions = [quiz1, quiz2, quiz3]\n\nScoring:\nscore = 0\nfor q in questions:\n    if user_answer == q['answer']:\n        score += 1\n\nDisplay results:\nprint(f\"Score: {score}/{len(questions)}\")",
          codeExamples: [
            {
              id: "ch78-project8",
              title: "Quiz Application",
              description: "Interactive quiz",
              code: { python: "def run_quiz(questions):\n    score = 0\n    \n    for i, q in enumerate(questions, 1):\n        print(f\"\\nQ{i}: {q['question']}\")\n        for j, option in enumerate(q['options']):\n            print(f\"{j+1}. {option}\")\n        \n        try:\n            answer = int(input(\"Your answer: \")) - 1\n            if answer == q['answer']:\n                print(\"Correct!\")\n                score += 1\n            else:\n                print(f\"Wrong! Answer was {q['answer'] + 1}\")\n        except ValueError:\n            print(\"Invalid input\")\n    \n    print(f\"\\nFinal Score: {score}/{len(questions)}\")\n    return score\n\nquestions = [\n    {'question': '2+2?', 'options': ['3', '4', '5'], 'answer': 1},\n    {'question': '3+3?', 'options': ['5', '6', '7'], 'answer': 1}\n]\nrun_quiz(questions)" },
              explanation: "Lists store quiz data. enumerate() tracks question numbers. Indexing maps answers to options."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch78-ex1",
          title: "Quiz App",
          difficulty: 1,
          description: "Build a quiz application.",
          requirements: [
            "Store questions and answers",
            "Display questions with options",
            "Get and validate input",
            "Calculate and show score"
          ],
          starterCode: { python: "def run_quiz(questions):\n    score = 0\n    \n    for i, q in enumerate(questions, 1):\n        print(f\"Q{i}: {q['question']}\")\n        for j, opt in enumerate(q['options']):\n            print(f\"{j+1}. {opt}\")\n        \n        # Get and check answer\n    \n    print(f\"Score: {score}/{len(questions)}\")\n\nquestions = [\n    {'question': '2+2?', 'options': ['3', '4', '5'], 'answer': 1},\n    {'question': '3+3?', 'options': ['5', '6', '7'], 'answer': 1}\n]\nrun_quiz(questions)" },
          hints: [
            "enumerate() for numbering",
            "Convert input to int",
            "Compare with answer index"
          ],
          solution: { python: "def run_quiz(questions):\n    score = 0\n    \n    for i, q in enumerate(questions, 1):\n        print(f\"Q{i}: {q['question']}\")\n        for j, opt in enumerate(q['options']):\n            print(f\"{j+1}. {opt}\")\n        \n        try:\n            answer = int(input(\"Your answer: \")) - 1\n            if answer == q['answer']:\n                print(\"Correct!\")\n                score += 1\n            else:\n                print(f\"Wrong! Answer was {q['answer'] + 1}\")\n        except ValueError:\n            print(\"Invalid input\")\n    \n    print(f\"\\nFinal Score: {score}/{len(questions)}\")\n    return score\n\nquestions = [\n    {'question': '2+2?', 'options': ['3', '4', '5'], 'answer': 1},\n    {'question': '3+3?', 'options': ['5', '6', '7'], 'answer': 1}\n]\nrun_quiz(questions)" },
          solutionExplanation: "Lists store structured data. enumerate() provides indices. Input validation prevents crashes."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch78-q1",
            type: "mcq",
            question: "What tracks iteration index?",
            options: [
              "range()",
              "enumerate()",
              "index()",
              "count()"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "enumerate() returns both index and value when iterating."
          },
          {
            id: "ch78-q2",
            type: "mcq",
            question: "What does int() do?",
            options: [
              "Converts to integer",
              "Converts to string",
              "Converts to float",
              "Converts to boolean"
            ],
            correctAnswer: 0,
            difficulty: 1,
            explanation: "int() converts a value to an integer."
          },
          {
            id: "ch78-q3",
            type: "true-false",
            question: "Lists can store dictionaries.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "Lists can store any data type, including dictionaries."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "enumerate",
          value: "Index and value"
        },
        {
          label: "int()",
          value: "Convert to int"
        },
        {
          label: "List of dicts",
          value: "Structured data"
        }
      ]
    },
    {
      id: "python-ch-79",
      number: 79,
      partLabel: "PART 7: PROJECTS",
      title: "Project 9: Expense Tracker",
      subtitle: "Track expenses",
      difficulty: "Intermediate",
      estimatedMinutes: 70,
      xpReward: 160,
      prerequisites: ["python-ch-78"],
      learningObjectives: [
        "Track financial data",
        "Calculate totals",
        "Categorize expenses",
        "Generate reports"
      ],
      sections: [
        {
          id: "ch79-project9",
          title: "Expense Tracker",
          whyItMatters: "Expense tracking teaches data aggregation, calculations, and reporting.",
          realWorldAnalogy: "An expense tracker is like a financial ledger — it records and summarizes spending.",
          content: "Expense data:\nexpense = {\n    'date': '2024-01-01',\n    'category': 'Food',\n    'amount': 25.50\n}\n\nAdd expense:\nexpenses.append(expense)\n\nCalculate totals:\ntotal = sum(e['amount'] for e in expenses)\n\nGroup by category:\nfrom collections import defaultdict\ncategory_totals = defaultdict(float)\nfor e in expenses:\n    category_totals[e['category']] += e['amount']",
          codeExamples: [
            {
              id: "ch79-project9",
              title: "Expense Tracker",
              description: "Financial tracking",
              code: { python: "from collections import defaultdict\n\ndef expense_tracker():\n    expenses = []\n    \n    while True:\n        print(\"\\n1. Add Expense\")\n        print(\"2. View Expenses\")\n        print(\"3. View Summary\")\n        print(\"4. Exit\")\n        \n        choice = input(\"Choose: \")\n        \n        if choice == '1':\n            date = input(\"Date (YYYY-MM-DD): \")\n            category = input(\"Category: \")\n            amount = float(input(\"Amount: $\"))\n            expenses.append({'date': date, 'category': category, 'amount': amount})\n        elif choice == '3':\n            totals = defaultdict(float)\n            for e in expenses:\n                totals[e['category']] += e['amount']\n            for cat, total in totals.items():\n                print(f\"{cat}: ${total:.2f}\")\n        elif choice == '4':\n            break\n\nexpense_tracker()" },
              explanation: "defaultdict groups data by category. Sum calculates totals. Float handles currency."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch79-ex1",
          title: "Expense Tracker",
          difficulty: 1,
          description: "Build an expense tracker.",
          requirements: [
            "Add expenses with date/category/amount",
            "View all expenses",
            "Show category totals",
            "Calculate grand total"
          ],
          starterCode: { python: "from collections import defaultdict\n\ndef expense_tracker():\n    expenses = []\n    \n    while True:\n        print(\"\\n1. Add Expense\")\n        print(\"2. View Expenses\")\n        \"\"\"print(\"3. Summary\")\n        print(\"4. Exit\")\n        \"\"\" \n        \n        choice = input(\"Choose: \")\n        # Implement features\n\nexpense_tracker()" },
          hints: [
            "Use defaultdict for categories",
            "sum() for totals",
            "float() for amounts"
          ],
          solution: { python: "from collections import defaultdict\n\ndef expense_tracker():\n    expenses = []\n    \n    while True:\n        print(\"\\n1. Add Expense\")\n        print(\"2. View Expenses\")\n        print(\"3. Summary\")\n        print(\"4. Exit\")\n        \n        choice = input(\"Choose: \")\n        \n        if choice == '1':\n            date = input(\"Date: \")\n            category = input(\"Category: \")\n            amount = float(input(\"Amount: $\"))\n            expenses.append({'date': date, 'category': category, 'amount': amount})\n        elif choice == '2':\n            for e in expenses:\n                print(f\"{e['date']} - {e['category']}: ${e['amount']:.2f}\")\n        elif choice == '3':\n            totals = defaultdict(float)\n            for e in expenses:\n                totals[e['category']] += e['amount']\n            grand_total = sum(e['amount'] for e in expenses)\n            for cat, total in totals.items():\n                print(f\"{cat}: ${total:.2f}\")\n            print(f\"Total: ${grand_total:.2f}\")\n        elif choice == '4':\n            break\n\nexpense_tracker()" },
          solutionExplanation: "defaultdict aggregates by category. sum() calculates totals. Float handles currency precision."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch79-q1",
            type: "mcq",
            question: "What does defaultdict do?",
            options: [
              "Removes keys",
              "Default values for missing keys",
              "Sorts dictionary",
              "Filters dictionary"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "defaultdict provides default values for keys that don't exist."
          },
          {
            id: "ch79-q2",
            type: "mcq",
            question: "What sums a list?",
            options: [
              "sum()",
              "total()",
              "add()",
              "aggregate()"
            ],
            correctAnswer: 0,
            difficulty: 1,
            explanation: "sum() adds all elements in an iterable."
          },
          {
            id: "ch79-q3",
            type: "true-false",
            question: "Float handles decimal numbers.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "float() handles decimal numbers for calculations like currency."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "defaultdict",
          value: "Default values"
        },
        {
          label: "sum()",
          value: "Calculate total"
        },
        {
          label: "float()",
          value: "Decimal numbers"
        }
      ]
    },
    {
      id: "python-ch-80",
      number: 80,
      partLabel: "PART 7: PROJECTS",
      title: "Project 10: Final Capstone",
      subtitle: "Combine your skills",
      difficulty: "Advanced",
      estimatedMinutes: 90,
      xpReward: 200,
      prerequisites: ["python-ch-79"],
      learningObjectives: [
        "Combine multiple concepts",
        "Build a complete application",
        "Use classes and functions",
        "Implement user interface"
      ],
      sections: [
        {
          id: "ch80-capstone",
          title: "Capstone Project",
          whyItMatters: "The capstone project integrates all learned concepts into a cohesive application.",
          realWorldAnalogy: "The capstone is like a final exam project — it demonstrates mastery of all skills.",
          content: "Project choice:\n- Choose a project idea\n- Plan features\n- Implement step by step\n\nCombine concepts:\n- Classes for organization\n- Functions for logic\n- File I/O for data\n- Error handling\n- User interface\n\nBest practices:\n- Plan before coding\n- Test incrementally\n- Refactor and improve\n- Document code",
          codeExamples: [
            {
              id: "ch80-capstone",
              title: "Capstone Example",
              description: "Banking system example",
              code: { python: "class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n        self.transactions = []\n    \n    def deposit(self, amount):\n        if amount > 0:\n            self.balance += amount\n            self.transactions.append(f\"Deposit: ${amount}\")\n            return True\n        return False\n    \n    def withdraw(self, amount):\n        if 0 < amount <= self.balance:\n            self.balance -= amount\n            self.transactions.append(f\"Withdraw: ${amount}\")\n            return True\n        return False\n    \n    def get_statement(self):\n        return f\"Owner: {self.owner}\\nBalance: ${self.balance}\\nTransactions:\\n\" + \"\\n\".join(self.transactions)\n\naccount = BankAccount(\"Alice\", 1000)\naccount.deposit(500)\naccount.withdraw(200)\nprint(account.get_statement())" },
              explanation: "Classes organize data and behavior. Methods implement operations. Lists track history."
            }
          ]
        }
      ],
      exercises: [
        {
          id: "ch80-ex1",
          title: "Capstone Project",
          difficulty: 1,
          description: "Build your own project.",
          requirements: [
            "Choose project idea",
            "Plan features",
            "Implement with classes/functions",
            "Add error handling"
          ],
          starterCode: { python: "# Your capstone project\n# Combine all learned concepts\n\n# Example: Library System\nclass Book:\n    def __init__(self, title, author):\n        self.title = title\n        self.author = author\n        self.borrowed = False\n\nclass Library:\n    def __ninit__(self):\n        self.books = []\n    \n    def add_book(self, book):\n        self.books.append(book)\n    \n    def borrow_book(self, title):\n        # Implement\n\n# Build your project here!" },
          hints: [
            "Use classes for organization",
            "Implement CRUD operations",
            "Add user interface",
            "Handle errors"
          ],
          solution: { python: "class Book:\n    def __init__(self, title, author):\n        self.title = title\n        self.author = author\n        self.borrowed = False\n\nclass Library:\n    def __init__(self):\n        self.books = []\n    \n    def add_book(self, book):\n        self.books.append(book)\n    \n    def borrow_book(self, title):\n        for book in self.books:\n            if book.title == title and not book.borrowed:\n                book.borrowed = True\n                return f\"Borrowed: {title}\"\n        return \"Book not available\"\n    \n    def return_book(self, title):\n        for book in self.books:\n            if book.title == title and book.borrowed:\n                book.borrowed = False\n                return f\"Returned: {title}\"\n        return \"Book not found\"\n    \n    def list_books(self):\n        for book in self.books:\n            status = \"(borrowed)\" if book.borrowed else \"(available)\"\n            print(f\"{book.title} by {book.author} {status}\")\n\nlib = Library()\nlib.add_book(Book(\"Python 101\", \"John Doe\"))\nlib.list_books()\nprint(lib.borrow_book(\"Python 101\"))" },
          solutionExplanation: "Classes organize related data and methods. Lists manage collections. Methods implement business logic."
        }
      ],
      quiz: {
        questions: [
          {
            id: "ch80-q1",
            type: "mcq",
            question: "What organizes related code?",
            options: [
              "Functions",
              "Classes",
              "Lists",
              "Dictionaries"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Classes organize related data and behavior into cohesive units."
          },
          {
            id: "ch80-q2",
            type: "mcq",
            question: "What does planning help with?",
            options: [
              "Write faster",
              "Organize thoughts",
              "Skip testing",
              "Remove errors"
            ],
            correctAnswer: 1,
            difficulty: 1,
            explanation: "Planning helps organize thoughts and structure the implementation."
          },
          {
            id: "ch80-q3",
            type: "true-false",
            question: "Capstone combines all learned concepts.",
            correctAnswer: true,
            difficulty: 1,
            explanation: "The capstone project integrates all Python concepts learned throughout the course."
          }
        ],
        passingScore: 2
      },
      cheatSheet: [
        {
          label: "Classes",
          value: "Organize code"
        },
        {
          label: "Methods",
          value: "Class functions"
        },
        {
          label: "Planning",
          value: "Before coding"
        }
      ]
    }
  ])
};
