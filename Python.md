# CODEMASTERY — PYTHON TRACK ADDITION
# Add Python as a 4th track to the existing CodeMastery platform
# 80+ chapters · Zero to Pro · Pyodide browser compiler

## OVERVIEW

Extend the existing CodeMastery platform (Next.js 14 + TypeScript + Tailwind) by adding a complete Python learning track. Follow ALL existing design patterns, data structures, component conventions, and curriculum depth standards already established for HTML, CSS, and JavaScript tracks.

This track must be self-contained — a student who has never touched Python (but may or may not know HTML/CSS/JS) can start from Chapter 1 and become a professional Python developer.

---

## PYTHON-SPECIFIC COMPILER SETUP

Python cannot run natively in the browser. Use Pyodide (Python compiled to WebAssembly).

Implementation for /components/compiler/PythonCompiler.tsx:
- Load Pyodide from CDN: https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js
- Show loading state while Pyodide initializes ("Loading Python runtime...")
- Single editor panel (Python only) + output panel
- Output panel captures: print() statements, errors, return values
- Show line numbers, syntax highlighting (CodeMirror with @codemirror/lang-python)
- "Run Code" button (Shift+Enter shortcut)
- "Clear Output" button
- "Reset Code" button
- Execution timeout: 10 seconds (prevent infinite loops from hanging browser)
- Error display: show full Python traceback, highlighted line number
- Support for: input() — show a prompt dialog for input() calls
- Pre-installed packages via Pyodide: numpy, pandas, matplotlib (for data chapters)
- matplotlib: render charts as images in the output panel using plt.savefig() to base64

For lesson pages, embed PythonMiniCompiler — same as MiniCompiler but Python-only.

---

## CURRICULUM DATA STRUCTURE

Add to /lib/curriculum/python-curriculum.ts following the EXACT same TypeScript interfaces already defined in /lib/curriculum/types.ts. Add track ID "python" to the Track type union.

Track metadata:
- id: "python"
- title: "Python"
- tagline: "From scripts to systems — the world's most versatile language"
- icon: "🐍"
- color: "#3776AB"
- totalChapters: 80
- estimatedHours: 120

---

## FULL CURRICULUM — 80 CHAPTERS

=== PART 1: ABSOLUTE PYTHON BASICS (Chapters 1–12) ===

Chapter 1: What Is Python and Why Learn It?
Difficulty: Absolute Beginner | XP: 100 | Time: 25 min

Learning objectives:
- Understand what Python is and what makes it special
- Know real-world applications of Python
- Set up Python and run the first program
- Understand how Python code is executed

Sections (each 400+ words, no placeholders):

1.1 — What Is Python?
Real-world analogy: Python is like a Swiss Army knife for computers. Just as one tool can cut, open bottles, and file nails — Python can build websites, analyze data, automate tasks, and create AI. It is the most versatile programming language ever created.
Content: Python was created by Guido van Rossum in 1991, named after Monty Python's Flying Circus (not the snake). It was designed with one philosophy: code should be readable by humans, not just computers. Python code reads almost like English. Python is currently the #1 most popular programming language in the world (TIOBE index, IEEE Spectrum). Why? Because it does EVERYTHING:
- Web backends (Instagram, Pinterest, Spotify use Python/Django)
- Data science and machine learning (90% of ML code is Python)
- Automation and scripting (rename 1000 files in 3 lines of code)
- Scientific computing (NASA uses Python)
- Game development (Civilization IV was written in Python)
- Cybersecurity and hacking tools
- Finance and trading algorithms
Python's superpower is its ecosystem — over 400,000 free packages on PyPI.

1.2 — Python vs Other Languages
Why Python is different from JavaScript (which you may know):
- No semicolons needed at end of lines
- No curly braces — indentation defines code blocks
- No var/let/const — just assign directly
- print() instead of console.log()
- Runs on the server, not the browser (by default)
- Much simpler syntax overall
Comparison table: Python vs JavaScript vs Java vs C++ on readability, speed, use cases.

1.3 — Installing Python
Step by step: Download from python.org → Install (check "Add to PATH") → Verify with python --version in terminal. Install VS Code if not already. Install the Python extension for VS Code. Set up a virtual environment (venv) — what it is and why every Python project needs one.

1.4 — Your First Python Program
Open VS Code → Create hello.py → Type: print("Hello, World!") → Run with python hello.py. The output appears in terminal. What print() does. How Python executes line by line. Comments with #. Using the Python REPL (interactive mode) in terminal.

1.5 — How Python Code Runs
Python is interpreted, not compiled. Explain: source code (.py) → Python interpreter → bytecode (.pyc) → Python Virtual Machine → CPU. CPython vs PyPy. Why Python is slower than C but fast enough for most tasks. The Global Interpreter Lock (GIL) — brief mention, full chapter later.

Quiz (8 questions):
Q1 (MCQ): Who created Python? A) Linus Torvalds B) Guido van Rossum C) Brendan Eich D) James Gosling — Answer: B — Explanation: Guido van Rossum created Python in 1991 while working at CWI in the Netherlands. He wanted a language that was easy to read and write.
Q2 (True/False): Python uses curly braces {} to define code blocks. — Answer: False — Explanation: Python uses INDENTATION (spaces or tabs) to define code blocks, which is unique among major languages and forces readable code.
Q3 (MCQ): Which of these is NOT a real-world use of Python? A) Machine learning B) Web development C) System BIOS firmware D) Data analysis — Answer: C
Q4 (Code output): What does print("Hello" + " " + "World") output? Answer: Hello World
Q5 (Fill blank): Python programs are saved with the ___ file extension. Answer: .py
Q6 (MCQ): What does the Python REPL allow you to do? A) Create websites B) Run Python code interactively line by line C) Compile Python to machine code D) Install packages — Answer: B
Q7 (True/False): Python was named after a type of snake. Answer: False — Explanation: Python was named after "Monty Python's Flying Circus", Guido van Rossum's favourite TV comedy show.
Q8 (Spot the bug): print("Hello World' — Bug: mismatched quotes (double quote opening, single quote closing)

Practice exercises:
Exercise 1 (Easy): Write a program that prints your name, age, and city on three separate lines.
Exercise 2 (Easy): Write a program that prints a simple ASCII art face using print().
Exercise 3 (Medium): Write a program that prints a multiplication table for the number 5 (5×1 through 5×10) — use only what you know so far (ten separate print statements).

---

Chapter 2: Variables and Data Types
Difficulty: Absolute Beginner | XP: 100 | Time: 35 min

2.1 — Variables: Labeled Boxes in Memory
Analogy: RAM is like a giant warehouse with millions of storage boxes. A variable is a label you stick on a box so you can find it later. When you write name = "Alice", Python finds an empty box, puts "Alice" inside, and sticks a label "name" on it.
Content: Variables in Python need NO keyword (no var/let/const). Just write the name, equals sign, and value. Python figures out the type automatically (dynamic typing). Variable naming rules: must start with letter or underscore, no spaces (use_underscores — snake_case is Python convention), case sensitive, cannot be a reserved keyword.

2.2 — Python's Built-in Data Types (All 8)
TYPE 1: int — integers (whole numbers): age = 25, score = -10, count = 0
TYPE 2: float — decimals: price = 19.99, temperature = -3.5, pi = 3.14159
TYPE 3: str — strings (text): name = "Alice", city = 'Dhaka', msg = """multi-line"""
TYPE 4: bool — True or False (capital T/F unlike JavaScript)
TYPE 5: list — ordered, mutable collection: fruits = ["apple", "banana", "mango"]
TYPE 6: tuple — ordered, IMMUTABLE collection: coords = (23.7, 90.4)
TYPE 7: dict — key-value pairs: person = {"name": "Alice", "age": 25}
TYPE 8: set — unordered unique values: unique = {1, 2, 3, 3, 2} → {1, 2, 3}
Plus: None — Python's equivalent of null/undefined

2.3 — The type() Function and isinstance()
type(42) → int. type("hello") → str. type(True) → bool. isinstance(42, int) → True.
Why this matters: Python is dynamically typed but strongly typed. 1 + "2" throws a TypeError (unlike JavaScript which would give "12").

2.4 — Type Conversion (Casting)
int("42") → 42. str(42) → "42". float("3.14") → 3.14. bool(0) → False. bool("") → False.
Full truthy/falsy rules for Python: 0, 0.0, "", [], {}, (), set(), None are all falsy. Everything else is truthy.

2.5 — Multiple Assignment and Swap
a = b = c = 0 (all three get 0). a, b = 1, 2 (tuple unpacking). a, b = b, a (swap without temp variable — Python magic). Augmented assignment: x += 1, x -= 1, x *= 2, x //= 3, x **= 2.

[Continue this same depth for ALL remaining chapters...]

---

Chapter 3: Strings — Complete Guide (50+ methods)
Chapter 4: Numbers and Math
Chapter 5: User Input and Output Formatting
Chapter 6: Booleans and Comparisons
Chapter 7: Conditional Statements (if/elif/else)
Chapter 8: Match Statement (Python 3.10+)
Chapter 9: Loops — for and while
Chapter 10: Loop Control (break, continue, pass, else on loops)
Chapter 11: Functions — Part 1 (Basics, Parameters, Return)
Chapter 12: Functions — Part 2 (Default args, *args, **kwargs, Scope)

[Each chapter: same depth as chapters 1-2. Full sections 400+ words, all code examples, all quiz questions 8+, all exercises 3 levels]

=== PART 2: DATA STRUCTURES (Chapters 13–22) ===

Chapter 13: Lists — Complete Guide
Sections: Creating lists (all methods), indexing (positive and negative), slicing (full syntax [start:stop:step]), modifying (append, insert, extend, remove, pop, clear, del), list methods (all 11), sorting (sort vs sorted, key parameter, reverse), list comprehensions (basic to advanced), nested lists, list as stack, list as queue, copying (shallow vs deep copy problem), unpacking.

Chapter 14: Tuples — Complete Guide
Sections: Creating tuples (including single-element tuple gotcha — needs trailing comma), tuple vs list (when to use which), tuple unpacking, named tuples (collections.namedtuple), tuple as dictionary key, converting between tuple and list.

Chapter 15: Dictionaries — Complete Guide
Sections: Creating dicts (all methods including dict()), accessing values ([] vs .get()), adding/updating/deleting keys, all dict methods (keys, values, items, get, pop, popitem, update, setdefault, clear, copy), iterating over dicts, dict comprehensions, nested dicts, merging dicts (| operator Python 3.9+), OrderedDict, defaultdict.

Chapter 16: Sets — Complete Guide
Sections: Creating sets, set operations (union |, intersection &, difference -, symmetric difference ^), set methods (add, remove, discard, pop, clear, update, intersection_update, difference_update), frozenset, when to use sets (deduplication, membership testing O(1) vs list O(n)).

Chapter 17: String Formatting — Complete Guide
Sections: % formatting (old), .format() method, f-strings (Python 3.6+, the modern way), f-string expressions, format specifiers (:d, :f, :,.2f, :>10, :<10, :^10, :05d, :b, :x, :e), Template strings, multi-line strings and indentation, string methods (all 47 methods).

Chapter 18: Collections Module
Sections: Counter, deque, OrderedDict, defaultdict, ChainMap, namedtuple — full coverage with real-world use cases for each.

Chapter 19: List, Dict, Set Comprehensions + Generator Expressions
Sections: Basic comprehensions, conditions in comprehensions, nested comprehensions, generator expressions (lazy evaluation), when to use each, performance comparison.

Chapter 20: Sorting and Algorithms
Sections: sorted() and sort(), key parameter, lambda as key, operator.itemgetter, multi-key sorting, custom comparison with functools.cmp_to_key, understanding time complexity (Big O notation for all list operations).

Chapter 21: Working with Dates and Times
Sections: datetime module, date, time, datetime, timedelta, timezone-aware vs naive datetimes, strftime/strptime (all format codes), zoneinfo (Python 3.9+), dateutil library intro.

Chapter 22: Regular Expressions in Python
Sections: re module, pattern syntax, raw strings (r"pattern"), re.match vs re.search vs re.findall vs re.finditer, groups (capturing, non-capturing, named), re.sub, re.split, flags (re.IGNORECASE, re.MULTILINE, re.DOTALL), compiled patterns.

=== PART 3: FUNCTIONS AND OOP (Chapters 23–36) ===

Chapter 23: Functions Deep Dive
Chapter 24: Lambdas and Functional Programming
Chapter 25: Decorators — Part 1 (Basics)
Chapter 26: Decorators — Part 2 (Parametrized, class decorators)
Chapter 27: Closures and Higher-Order Functions
Chapter 28: Generators and yield
Chapter 29: Context Managers (with statement, __enter__, __exit__)
Chapter 30: OOP — Classes and Objects
Chapter 31: OOP — Inheritance and Polymorphism
Chapter 32: OOP — Special Methods (Dunder methods __str__, __repr__, __len__, __eq__, __lt__, __add__, __iter__, __getitem__ etc.)
Chapter 33: OOP — Class Methods, Static Methods, Properties
Chapter 34: Abstract Classes and Interfaces
Chapter 35: Dataclasses (Python 3.7+)
Chapter 36: Multiple Inheritance and MRO

[Full sections, examples, quizzes, exercises for ALL]

=== PART 4: ERROR HANDLING AND FILES (Chapters 37–44) ===

Chapter 37: Exceptions — try/except/else/finally
Chapter 38: Custom Exceptions
Chapter 39: File I/O — Reading and Writing Files
Chapter 40: Working with JSON Files
Chapter 41: Working with CSV Files
Chapter 42: Working with the os and pathlib Modules
Chapter 43: Working with Environment Variables
Chapter 44: Logging Module

=== PART 5: ADVANCED PYTHON (Chapters 45–58) ===

Chapter 45: Iterators and the Iteration Protocol
Chapter 46: Type Hints and Annotations (Python 3.5+)
Chapter 47: Async Python — asyncio Basics
Chapter 48: Async Python — async/await, gather, tasks
Chapter 49: Multithreading vs Multiprocessing
Chapter 50: The GIL — Global Interpreter Lock
Chapter 51: Memory Management and Garbage Collection
Chapter 52: Python Performance and Profiling
Chapter 53: Modules and Packages (creating your own)
Chapter 54: Virtual Environments and pip
Chapter 55: Unit Testing with pytest
Chapter 56: Mocking and Test Fixtures
Chapter 57: Debugging with pdb and VS Code Debugger
Chapter 58: Python Best Practices and PEP 8

=== PART 6: PYTHON ECOSYSTEM (Chapters 59–70) ===

Chapter 59: pip and PyPI — Installing Packages
Chapter 60: NumPy — Arrays and Numerical Computing
Chapter 61: Pandas — Data Analysis
Chapter 62: Matplotlib and Seaborn — Data Visualization
Chapter 63: Requests — HTTP in Python
Chapter 64: Web Scraping with BeautifulSoup
Chapter 65: FastAPI — Build a REST API (Part 1)
Chapter 66: FastAPI — Build a REST API (Part 2)
Chapter 67: SQLite and SQLAlchemy Basics
Chapter 68: Python and JSON APIs
Chapter 69: Automation with Python (file operations, email, scheduling)
Chapter 70: Introduction to Machine Learning (scikit-learn basics)

=== PART 7: PROJECTS (Chapters 71–80) ===

Chapter 71: Project — Calculator CLI App
Chapter 72: Project — Password Generator and Manager
Chapter 73: Project — Web Scraper (real website)
Chapter 74: Project — Data Analysis (analyze a real CSV dataset)
Chapter 75: Project — REST API with FastAPI + SQLite
Chapter 76: Project — Automation Script (file organizer)
Chapter 77: Mini Challenge Set 1 (10 small challenges)
Chapter 78: Mini Challenge Set 2 (10 medium challenges)
Chapter 79: Mini Challenge Set 3 (10 hard challenges — algorithms)
Chapter 80: Python Mastery Recap + Certificate Prep

---

## PYTHON COMPILER TECHNICAL REQUIREMENTS

1. Pyodide integration in /components/compiler/PythonCompiler.tsx
   - Load: https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js
   - Initialize on component mount (show progress bar during load)
   - Intercept stdout/stderr with pyodide.runPythonAsync() in try/catch
   - Capture print output: override sys.stdout using StringIO

2. Python code to capture output:
   import sys
   from io import StringIO
   sys.stdout = StringIO()
   sys.stderr = StringIO()
   try:
     exec(user_code)
     output = sys.stdout.getvalue()
   except Exception as e:
     output = str(e)
   finally:
     sys.stdout = sys.__stdout__

3. Matplotlib charts: detect plt.show() calls, redirect to plt.savefig(buf, format='png') and display as <img> in output panel

4. Package loading: micropip.install("package-name") for extra packages

5. The Python compiler page (/compiler/python) has:
   - Single editor panel (full width left)
   - Output panel (right) with tabs: Output | Errors | Matplotlib Charts
   - Run button + keyboard shortcut (Shift+Enter)
   - "Clear" button
   - File download (save .py file)

---

## QUALITY REQUIREMENTS (same as other tracks)

- Zero placeholder content in ANY chapter
- All 80 chapters: full section content (400+ words per section)
- Every code example: syntactically correct Python 3.12 code
- Every quiz: 8+ questions with full explanations
- Every chapter: 3 practice exercises (easy/medium/hard) with hints + solutions
- Pyodide compiler must work for all chapters up to Part 5
- For ecosystem chapters (60-70): show code + explain output since some packages need server
- Certificate issues after all 80 chapters completed + all quizzes ≥80%
- Track color: #3776AB (Python blue)
- Track icon: the Python logo SVG (or snake emoji)
