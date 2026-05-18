import type { Track, Chapter } from "./types";

const rChapters: Chapter[] = [
  {
    id: "r-1",
    number: 1,
    partLabel: "Part 1: R Fundamentals",
    title: "What Is R and Why Use It?",
    subtitle: "Introduction to R Programming",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: [],
    learningObjectives: ["Understand what R is", "Know R's history in data science", "Understand R's role in statistics"],
    sections: [
      {
        id: "r-1-1",
        title: "What Is R?",
        whyItMatters: "R is the most popular statistical programming language, used by data scientists worldwide.",
        content: `R is a programming language and environment specifically designed for statistical computing and graphics. Created in 1993 by Ross Ihaka and Robert Gentleman at the University of Auckland, R has become the go-to tool for data analysis, statistical modeling, and data visualization.

**Why R Matters:**

- **Statistical Excellence**: Built by statisticians, for statistics
- **Data Science Standard**: Used at Google, Facebook, Airbnb, and more
- **Visualization Power**: ggplot2 is the gold standard for data visualization
- **Open Source**: Free with massive community support
- **Academic Standard**: Most research uses R for statistical analysis

**R vs Python:**

| Aspect | R | Python |
|--------|---|--------|
| Primary Use | Statistics | General programming |
| Visualization | ggplot2 (excellent) | Matplotlib/Seaborn |
| Statistics | Built-in | Via libraries |
| Learning Curve | Moderate | Easier for beginners |
| Best For | Data analysis | ML, web, automation |

R is particularly strong in:
- Statistical analysis
- Academic research
- Data visualization
- Biostatistics
- Finance analytics`,
        codeExamples: [
          {
            id: "r-1-ex1",
            title: "Hello R",
            description: "Simple R example",
            code: { r: "# Hello World in R\nprint(\"Hello, R!\")\n\n# Simple calculation\nresult <- 5 + 3\nprint(result)\n\n# Statistical summary\ndata <- c(1, 2, 3, 4, 5)\nmean(data)\nsum(data)" },
            explanation: "R uses <- for assignment and has built-in statistical functions."
          },
          {
            id: "r-1-ex2",
            title: "Why R for Data Science",
            description: "R's data science capabilities",
            code: { r: "# R excels at statistical analysis\n# Built-in statistical functions\nsummary(c(1, 2, 3, 4, 5))\n\n# Data frames - like spreadsheets\ndf <- data.frame(\n  name = c(\"Alice\", \"Bob\", \"Charlie\"),\n  age = c(25, 30, 35),\n  score = c(85, 90, 78)\n)\nprint(df)\n\n# Summary statistics\nmean(df$score)\nsd(df$score)" },
            explanation: "R's data structures are designed for statistical analysis."
          }
        ],
        callouts: [
          {
            type: "tip",
            title: "R in Industry",
            content: "R is used by Google, Facebook, Twitter, and many pharmaceutical companies for data analysis."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What was R created for?", options: ["Web development", "Statistical computing", "Game development", "System programming"], correctAnswer: 1, explanation: "R was created specifically for statistical computing and graphics." },
        { id: "q2", type: "fill-blank", question: "In R, assignment uses _____.", correctAnswer: "<-", explanation: "<- is the standard assignment operator in R." },
        { id: "q3", type: "mcq", question: "What is ggplot2?", options: ["Database", "Visualization library", "Statistical test", "Package manager"], correctAnswer: 1, explanation: "ggplot2 is R's powerful data visualization library." },
        { id: "q4", type: "true-false", question: "R is open source.", correctAnswer: true, explanation: "R is free and open source under GPL license." },
        { id: "q5", type: "mcq", question: "Who created R?", options: ["Microsoft", "Ross Ihaka and Robert Gentleman", "Google", "Statisticians only"], correctAnswer: 1, explanation: "R was created by Ross Ihaka and Robert Gentleman at University of Auckland." },
        { id: "q6", type: "fill_blank", question: "R is particularly strong in _____.", correctAnswer: "statistical analysis", explanation: "R excels at statistical analysis and visualization." },
        { id: "q7", type: "mcq", question: "Which company uses R extensively?", options: ["Only startups", "Google, Facebook, Twitter", "No tech companies", "Only academia"], correctAnswer: 1, explanation: "Major tech companies use R for data analysis." },
        { id: "q8", type: "true-false", question: "R and Python serve the same primary purpose.", correctAnswer: false, explanation: "R focuses on statistics, Python is general-purpose." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "R", value: "Statistical programming language" },
      { label: "<-", value: "Assignment operator" },
      { label: "ggplot2", value: "Visualization library" },
      { label: "data.frame", value: "Tabular data structure" }
    ]
  },
  {
    id: "r-2",
    number: 2,
    partLabel: "Part 1: R Fundamentals",
    title: "Installing R and RStudio",
    subtitle: "Setup and Configuration",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["r-1"],
    learningObjectives: ["Install R", "Install RStudio", "Navigate RStudio interface"],
    sections: [
      {
        id: "r-2-1",
        title: "Installing R",
        whyItMatters: "Proper setup is essential for R programming.",
        content: `**Installing R:**

1. Download from: https://cran.r-project.org/
2. Choose your OS (Windows/Mac/Linux)
3. Run the installer
4. Verify: Open R and it should show version

**Installing RStudio:**

1. Download from: https://posit.co/download/rstudio-desktop/
2. Choose the free Desktop version
3. Run installer

**RStudio Interface:**

- **Console**: Where code executes
- **Script Editor**: Write and save code
- **Environment**: Shows variables/data
- **Files/Plots/Packages/Help**: Navigation panels`,
        codeExamples: [
          {
            id: "r-2-ex1",
            title: "RStudio Basics",
            description: "Using RStudio",
            code: { r: "# In RStudio Console:\n\n# Check R version\nversion$version.string\n\n# Get working directory\ngetwd()\n\n# Set working directory\nsetwd(\"C:/mydirectory\")\n\n# Install a package\ninstall.packages(\"tidyverse\")\n\n# Load a library\nlibrary(tidyverse)" },
            explanation: "RStudio provides a friendly interface for R programming."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "Where do you download R from?", options: ["rstudio.com", "cran.r-project.org", "github.com", "python.org"], correctAnswer: 1, explanation: "CRAN is the official R distribution site." },
        { id: "q2", type: "fill_blank", question: "The IDE for R is called _____.", correctAnswer: "RStudio", explanation: "RStudio is the most popular R IDE." },
        { id: "q3", type: "mcq", question: "What panel shows variables in RStudio?", options: ["Console", "Files", "Environment", "Plots"], correctAnswer: 2, explanation: "Environment panel shows all defined variables." },
        { id: "q4", type: "true-false", question: "RStudio requires R to be installed separately.", correctAnswer: true, explanation: "RStudio needs R as the backend engine." },
        { id: "q5", type: "mcq", question: "How do you install packages in R?", options: ["npm install", "pip install", "install.packages()", "get.package()"], correctAnswer: 2, explanation: "install.packages() installs R packages from CRAN." },
        { id: "q6", type: "fill_blank", question: "Use _____ to load an installed package.", correctAnswer: "library()", explanation: "library() loads an installed package." },
        { id: "q7", type: "mcq", question: "What does getwd() return?", options: ["Package list", "Working directory", "R version", "Installed files"], correctAnswer: 1, explanation: "getwd() shows the current working directory." },
        { id: "q8", type: "true-false", question: "You need internet to install packages.", correctAnswer: true, explanation: "Packages are downloaded from CRAN repository." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "install.packages()", value: "Install package" },
      { label: "library()", value: "Load package" },
      { label: "getwd()", value: "Show working directory" },
      { label: "RStudio", value: "R IDE" }
    ]
  },
  {
    id: "r-3",
    number: 3,
    partLabel: "Part 1: R Fundamentals",
    title: "Basic Data Types and Variables",
    subtitle: "R Data Structures",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 60,
    prerequisites: ["r-2"],
    learningObjects: ["Create variables", "Understand data types", "Work with vectors"],
    sections: [
      {
        id: "r-3-1",
        title: "Variables and Data Types",
        whyItMatters: "Understanding data types is fundamental to R programming.",
        content: `**Variables:**

\`\`\`r
# Assignment using <- or =\nx <- 10\ny = 20\n\n# Print variable\nprint(x)\nx  # Auto-print\n\`\`\`

**Basic Data Types:**

\`\`\`r
# Numeric\nx <- 10.5\n\n# Integer\ny <- 100L  # Note the L\n\n# Character (string)\nname <- \"Alice\"\n\n# Logical (TRUE/FALSE)\nis_active <- TRUE\n\`\`\`

**Vectors:**

\`\`\`r
# Create vector using c()\nnumbers <- c(1, 2, 3, 4, 5)\nwords <- c(\"apple\", \"banana\", \"cherry\")\n\n# Vector operations\nnumbers + 1  # Add 1 to each\nnumbers * 2  # Multiply each\n\`\`\``,
        codeExamples: [
          {
            id: "r-3-ex1",
            title: "Data Types in R",
            description: "Working with R's data types",
            code: { r: "# Numeric\nx <- 42.5\nclass(x)\n\n# Integer\ny <- 100L\nclass(y)\n\n# Character\nname <- \"Data Science\"\nclass(name)\n\n# Logical\nis_valid <- TRUE\nclass(is_valid)\n\n# Check types\nis.numeric(x)\nis.character(name)\nis.logical(is_valid)" },
            explanation: "R automatically detects data types when you create variables."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What is the assignment operator in R?", options: ["=", "==", "<-", "->"], correctAnswer: 2, explanation: "<- is the standard assignment operator in R." },
        { id: "q2", type: "fill_blank", question: "Use c() to create _____.", correctAnswer: "vectors", explanation: "c() combines values into a vector." },
        { id: "q3", type: "mcq", question: "How do you create an integer in R?", options: ["100", "100L", "int(100)", "integer 100"], correctAnswer: 1, explanation: "Adding L suffix creates an integer." },
        { id: "q4", type: "true-false", question: "Vectors can only hold one type of data.", correctAnswer: true, explanation: "R vectors are homogeneous - all elements must be same type." },
        { id: "q5", type: "mcq", question: "What does class() return?", options: ["Value", "Data type", "Variable name", "Length"], correctAnswer: 1, explanation: "class() shows the data type of an object." },
        { id: "q6", type: "fill_blank", question: "Logical values are _____.", correctAnswer: "TRUE or FALSE", explanation: "TRUE/FALSE (or T/F) are logical values." },
        { id: "q7", type: "mcq", question: "What is is.numeric()?", options: ["Function", "Variable", "Package", "Operator"], correctAnswer: 0, explanation: "is.numeric() is a function to check data type." },
        { id: "q8", type: "true-false", question: "R vectors support vectorized operations.", correctAnswer: true, explanation: "Operations apply to each element automatically." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "<-", value: "Assignment" },
      { label: "c()", value: "Combine to vector" },
      { label: "class()", value: "Show data type" },
      { label: "is.numeric()", value: "Check type" }
    ]
  },
  {
    id: "r-4",
    number: 4,
    partLabel: "Part 1: R Fundamentals",
    title: "Vectors and Vector Operations",
    subtitle: "Working with Vectors",
    difficulty: "Beginner" as const,
    estimatedMinutes: 35,
    xpReward: 70,
    prerequisites: ["r-3"],
    learningObjectives: ["Create vectors", "Vector operations", "Vector subsetting"],
    sections: [
      {
        id: "r-4-1",
        title: "Creating Vectors",
        whyItMatters: "Vectors are the fundamental data structure in R.",
        content: `**Creating Vectors:**

\`\`\`r
# Numeric vectors\nnums <- c(1, 2, 3, 4, 5)\n\n# Sequence\n1:10  # 1 to 10\nseq(1, 10, by = 2)  # 1, 3, 5, 7, 9\nseq(0, 1, length.out = 5)  # 5 equal steps\n\n# Repetition\nrep(1, times = 3)  # 1, 1, 1\nrep(c(1, 2), each = 2)  # 1, 1, 2, 2\n\`\`\`

**Vector Operations:**

\`\`\`r
x <- c(1, 2, 3)\ny <- c(10, 20, 30)\n\nx + y    # Element-wise\nx - y    # Subtraction\nx * y    # Multiplication\nx / y    # Division\n\n# Scalar to vector\nx + 10   # Adds 10 to each element\n\`\`\`

**Vector Subsetting:**

\`\`\`r
vec <- c("a", "b", "c", "d", "e")
vec[1]       # First element
vec[c(1, 3)] # Multiple elements
vec[-1]      # All except first
vec[vec > "b"]  # Condition-based
\`\`\``,
        codeExamples: [
          {
            id: "r-4-ex1",
            title: "Vector Operations",
            description: "Working with R vectors",
            code: { r: "# Create vector\nages <- c(25, 30, 35, 40, 45)\n\n# Vector operations\nages + 1        # Add 1 to each\nages * 2        # Double each\n\n# Statistical functions\nsum(ages)\nmean(ages)\nmedian(ages)\nsd(ages)\n\n# Subsetting\nages[1]          # First age\nages[1:3]        # First three\nages[ages > 35]  # Ages over 35" },
            explanation: "Vectors support powerful vectorized operations in R."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "How do you create a sequence 1 to 10?", options: ["c(1:10)", "seq(1, 10)", "Both a and b", "range(1, 10)"], correctAnswer: 2, explanation: "Both 1:10 and seq(1,10) create sequences." },
        { id: "q2", type: "fill_blank", question: "Use _____ to repeat values.", correctAnswer: "rep()", explanation: "rep() repeats values in a vector." },
        { id: "q3", type: "mcq", question: "What does vec[1] return?", options: ["All except first", "First element", "Last element", "Vector length"], correctAnswer: 1, explanation: "R uses 1-based indexing." },
        { id: "q4", type: "true-false", question: "Vector operations are element-wise.", correctAnswer: true, explanation: "Each operation applies to each element." },
        { id: "q5", type: "mcq", question: "What does vec[-1] return?", options: ["First element", "All except first", "Last element", "Error"], correctAnswer: 1, explanation: "Negative index excludes that element." },
        { id: "q6", type: "fill_blank", question: "R uses _____ indexing.", correctAnswer: "1-based", explanation: "R indexes start at 1, not 0." },
        { id: "q7", type: "mcq", question: "What does sum() return?", options: ["Mean", "Sum of elements", "Maximum", "Length"], correctAnswer: 1, explanation: "sum() adds all vector elements." },
        { id: "q8", type: "true-false", question: "vec[vec > 5] filters by condition.", correctAnswer: true, explanation: "Logical subsetting selects matching elements." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "c()", value: "Create vector" },
      { label: "1:10", value: "Sequence" },
      { label: "seq()", value: "Sequence with step" },
      { label: "rep()", value: "Repeat values" },
      { label: "[ ]", value: "Subset by index" }
    ]
  },
  {
    id: "r-5",
    number: 5,
    partLabel: "Part 1: R Fundamentals",
    title: "Data Frames",
    subtitle: "Tabular Data in R",
    difficulty: "Beginner" as const,
    estimatedMinutes: 35,
    xpReward: 70,
    prerequisites: ["r-4"],
    learningObjectives: ["Create data frames", "Access columns", "Modify data frames"],
    sections: [
      {
        id: "r-5-1",
        title: "Data Frames",
        whyItMatters: "Data frames are like spreadsheets - the most common data structure for data analysis.",
        content: `**Creating Data Frames:**

\`\`\`r
# Create data frame\ndf <- data.frame(\n  name = c(\"Alice\", \"Bob\", \"Charlie\"),\n  age = c(25, 30, 35),\n  score = c(85, 90, 78)\n)\n\n# Print data frame\nprint(df)\nView(df)  # Opens in spreadsheet view\n\`\`\`

**Accessing Data:**

\`\`\`r
# Access column by name
df$name
df[["age"]]
df[, "score"]

# Access row
df[1, ]

# Access cell
df[1, "score"]

# Multiple columns
df[, c("name", "score")]
\`\`\`

**Modifying Data Frames:**

\`\`\`r
# Add column
df$grade <- c("A", "B", "C")

# Add row
new_row <- data.frame(name = "Diana", age = 28, score = 92, grade = "A")
df <- rbind(df, new_row)

# Remove column
df$grade <- NULL
\`\`\``,
        codeExamples: [
          {
            id: "r-5-ex1",
            title: "Data Frame Operations",
            description: "Working with data frames",
            code: { r: "# Create data frame\nstudents <- data.frame(\n  name = c(\"Alice\", \"Bob\", \"Charlie\", \"Diana\"),\n  age = c(25, 30, 35, 28),\n  math = c(85, 90, 78, 92),\n  science = c(88, 85, 80, 95)\n)\n\n# View structure\nstr(students)\n\n# Access columns\nstudents$name\nstudents$math\n\n# Calculate new column\nstudents$avg <- (students$math + students$science) / 2\n\n# Filter rows\nstudents[students$avg > 85, ]" },
            explanation: "Data frames are the primary data structure for data analysis in R."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What creates a data frame?", options: ["c()", "data.frame()", "matrix()", "list()"], correctAnswer: 1, explanation: "data.frame() creates tabular data." },
        { id: "q2", type: "fill_blank", question: "Use _____ to access column by name.", correctAnswer: "$", explanation: "$ accesses columns by name." },
        { id: "q3", type: "mcq", question: "df[1, ] returns what?", options: ["First column", "First row", "Cell [1,1]", "All except first"], correctAnswer: 1, explanation: "Comma before index means row." },
        { id: "q4", type: "true-false", question: "Data frames can have different column types.", correctAnswer: true, explanation: "Each column can have different data type." },
        { id: "q5", type: "mcq", question: "How do you add a new column?", options: ["append()", "rbind()", "$ or cbind", "add()"], correctAnswer: 2, explanation: "$ adds new column or cbind() appends." },
        { id: "q6", type: "fill_blank", question: "Use _____ to add a row.", correctAnswer: "rbind()", explanation: "rbind() adds rows to data frame." },
        { id: "q7", type: "mcq", question: "What does str() show?", options: ["Data", "Structure", "Summary", "All of above"], correctAnswer: 1, explanation: "str() shows structure of data frame." },
        { id: "q8", type: "true-false", question: "df[, \"col\"] returns a vector.", correctAnswer: true, explanation: "Single column selection returns vector." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "data.frame()", value: "Create data frame" },
      { label: "$", value: "Access column" },
      { label: "[row, col]", value: "Cell access" },
      { label: "rbind()", value: "Add row" },
      { label: "cbind()", value: "Add column" }
    ]
  },
  {
    id: "r-6",
    number: 6,
    partLabel: "Part 1: R Fundamentals",
    title: "Functions in R",
    subtitle: "Writing R Functions",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 60,
    prerequisites: ["r-5"],
    learningObjectives: ["Create functions", "Use arguments", "Return values"],
    sections: [
      {
        id: "r-6-1",
        title: "Creating Functions",
        whyItMatters: "Functions allow you to write reusable code in R.",
        content: `**Basic Function:**

\`\`\`r\n# Create function\nmy_function <- function() {\n  print(\"Hello!\")\n}\n\n# Call function\nmy_function()\n\n# Function with parameters\n greet <- function(name) {\n   paste(\"Hello,\", name, \"!\")\n }\n \n greet(\"Alice\")\n\`\`\`

**Function with Default Arguments:**

\`\`\`r\ncalculate_area <- function(length = 1, width = 1) {\n  return(length * width)\n}\n\ncalculate_area()      # Returns 1\ncalculate_area(5)    # Returns 5\ncalculate_area(5, 3) # Returns 15\n\`\`\`

**Return Values:**

\`\`\`r\n# Use return() explicitly\nget_stats <- function(x) {\n  result <- list(\n    mean = mean(x),\n    sum = sum(x),\n    n = length(x)\n  )\n  return(result)\n}\n\nstats <- get_stats(c(1, 2, 3, 4, 5))\nstats$mean\n\`\`\``,
        codeExamples: [
          {
            id: "r-6-ex1",
            title: "Writing Functions",
            description: "Creating reusable R functions",
            code: { r: "# Function to calculate circle area\ncircle_area <- function(radius) {\n  pi * radius^2\n}\n\ncircle_area(5)\ncircle_area(10)\n\n# Function with multiple parameters\ngrade_average <- function(math, science, english) {\n  avg <- (math + science + english) / 3\n  \n  # Return grade\n  if (avg >= 90) return(\"A\")\n  else if (avg >= 80) return(\"B\")\n  else if (avg >= 70) return(\"C\")\n  else return(\"F\")\n}\n\ngrade_average(85, 90, 88)\ngrade_average(70, 75, 72)" },
            explanation: "Functions make code reusable and organized."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "How do you define a function?", options: ["function = ()", "function() {}", "my_func <- function() {}", "define function()"], correctAnswer: 2, explanation: "Assignment with function() creates a function." },
        { id: "q2", type: "fill_blank", question: "Use _____ to return a value.", correctAnswer: "return()", explanation: "return() explicitly returns from function." },
        { id: "q3", type: "mcq", question: "What are default arguments?", options: ["Required", "Optional values", "Cannot change", "Global"], correctAnswer: 1, explanation: "Default arguments have preset values." },
        { id: "q4", type: "true-false", question: "R functions can return multiple values.", correctAnswer: true, explanation: "Functions can return lists with multiple values." },
        { id: "q5", type: "mcq", question: "What does paste() do?", options: ["Adds numbers", "Combines strings", "Removes spaces", "Creates files"], correctAnswer: 1, explanation: "paste() concatenates strings." },
        { id: "q6", type: "fill_blank", question: "A function's last expression is _____.", correctAnswer: "returned", explanation: "If no return(), last value is returned." },
        { id: "q7", type: "mcq", question: "What is the scope of variables inside function?", options: ["Global", "Local", "Session", "Permanent"], correctAnswer: 1, explanation: "Variables inside function are local." },
        { id: "q8", type: "true-false", question: "Functions can be stored in variables.", correctAnswer: true, explanation: "Functions are objects in R." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "function()", value: "Create function" },
      { label: "return()", value: "Return value" },
      { label: "paste()", value: "Combine strings" },
      { label: "local", value: "Variable scope in function" }
    ]
  },
  {
    id: "r-7",
    number: 7,
    partLabel: "Part 1: R Fundamentals",
    title: "Control Flow",
    subtitle: "Conditionals and Loops",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 60,
    prerequisites: ["r-6"],
    learningObjectives: ["Use if-else", "Write loops", "Control execution"],
    sections: [
      {
        id: "r-7-1",
        title: "Conditionals",
        whyItMatters: "Control flow enables decision-making in programs.",
        content: `**If-Else Statements:**

\`\`\`r\nx <- 10\n\nif (x > 0) {\n  print(\"Positive\")\n} else if (x < 0) {\n  print(\"Negative\")\n} else {\n  print(\"Zero\")\n}\n\n# Shorthand ifelse\nifelse(x > 0, \"Positive\", \"Not positive\")\n\`\`\`

**Multiple Conditions:**

\`\`\`r\ngrade <- 85\n\nif (grade >= 90) {\n  print(\"A\")\n} else if (grade >= 80) {\n  print(\"B\")\n} else if (grade >= 70) {\n  print(\"C\")\n} else {\n  print(\"F\")\n}\n\`\`\`

**Loops:**

\`\`\`r\n# For loop\nfor (i in 1:5) {\n  print(i)\n}\n\n# While loop\nx <- 1\nwhile (x <= 5) {\n  print(x)\n  x <- x + 1\n}\n\n# Apply over vector\nsquares <- sapply(1:5, function(x) x^2)\n\`\`\``,
        codeExamples: [
          {
            id: "r-7-ex1",
            title: "Control Flow",
            description: "Conditionals and loops in R",
            code: { r: "# If-else example\nscore <- 85\n\nif (score >= 90) {\n  grade <- \"A\"\n} else if (score >= 80) {\n  grade <- \"B\"\n} else if (score >= 70) {\n  grade <- \"C\"\n} else {\n  grade <- \"F\"\n}\nprint(paste(\"Grade:\", grade))\n\n# For loop\nfor (i in 1:3) {\n  print(paste(\"Iteration\", i))\n}\n\n# Vectorized with sapply\ndoubled <- sapply(c(1, 2, 3, 4, 5), function(x) x * 2)\nprint(doubled)" },
            explanation: "Control flow structures guide program execution."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What is the correct if syntax?", options: ["if x > 0", "if (x > 0)", "if {x > 0}", "if: x > 0"], correctAnswer: 1, explanation: "R requires parentheses around condition." },
        { id: "q2", type: "fill_blank", question: "Use _____ for vectorized conditional.", correctAnswer: "ifelse()", explanation: "ifelse() works element-wise on vectors." },
        { id: "q3", type: "mcq", question: "What does for (i in 1:5) do?", options: ["Runs once", "Runs 5 times", "Runs 4 times", "Error"], correctAnswer: 1, explanation: "Loop iterates 5 times with i = 1 to 5." },
        { id: "q4", type: "true-false", question: "R supports vectorized operations.", correctAnswer: true, explanation: "Vectorization avoids loops in R." },
        { id: "q5", type: "mcq", question: "What does sapply return?", options: ["List", "Vector", "Matrix", "Depends on function"], correctAnswer: 3, explanation: "sapply simplifies to vector if possible." },
        { id: "q6", type: "fill_blank", question: "The else branch runs when condition is _____.", correctAnswer: "FALSE", explanation: "else executes when if condition is false." },
        { id: "q7", type: "mcq", question: "while loop continues until condition is?", options: ["TRUE", "FALSE", "NULL", "Empty"], correctAnswer: 1, explanation: "while runs until condition is false." },
        { id: "q8", type: "true-false", question: "Vectorized code is faster in R.", correctAnswer: true, explanation: "Vectorized operations are much faster." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "if (condition)", value: "Conditional" },
      { label: "else", value: "Alternative branch" },
      { label: "for (i in x)", value: "For loop" },
      { label: "while (cond)", value: "While loop" }
    ]
  },
  {
    id: "r-8",
    number: 8,
    partLabel: "Part 1: R Fundamentals",
    title: "Data Visualization with Base R",
    subtitle: "Basic Plots",
    difficulty: "Beginner" as const,
    estimatedMinutes: 35,
    xpReward: 70,
    prerequisites: ["r-7"],
    learningObjectives: ["Create plots", "Customize graphics", "Save plots"],
    sections: [
      {
        id: "r-8-1",
        title: "Basic Plots",
        whyItMatters: "Visualization is key for data analysis.",
        content: `**Plot Function:**

\`\`\`r\n# Basic scatter plot\nx <- c(1, 2, 3, 4, 5)\ny <- c(2, 4, 3, 5, 4)\nplot(x, y)\n\n# With options\nplot(x, y, \n     main = \"My Plot\",\n     xlab = \"X Axis\",\n     ylab = \"Y Axis\",\n     col = \"blue\",\n     pch = 19)\n\`\`\`

**Plot Types:**

\`\`\`r\n# Line plot\nplot(x, y, type = \"l\")\n\n# Bar chart\nbarplot(c(10, 20, 30), names.arg = c(\"A\", \"B\", \"C\"))\n\n# Histogram\nhist(data, breaks = 10)\n\n# Box plot\nboxplot(data)\n\`\`\`

**Adding to Plots:**

\`\`\`r\nplot(x, y)\npoints(x, y + 1, col = \"red\")  # Add points\nlines(x, y, col = \"blue\")       # Add line\nabline(h = 3, col = \"green\")    # Add horizontal line`,
        codeExamples: [
          {
            id: "r-8-ex1",
            title: "Creating Plots",
            description: "Data visualization in R",
            code: { r: "# Create sample data\nx <- 1:10\ny <- x^2\n\n# Basic plot\nplot(x, y, main = \"Square Function\",\n     xlab = \"Input\",\n     ylab = \"Output\",\n     col = \"blue\",\n     pch = 19)\n\n# Add grid\ngrid()\n\n# Add labels\ntext(5, 50, \"y = x^2\", col = \"red\")\n\n# Histogram example\ndata <- rnorm(1000, mean = 50, sd = 10)\nhist(data, col = \"steelblue\",\n     main = \"Normal Distribution\",\n     xlab = \"Value\")" },
            explanation: "R has powerful built-in plotting capabilities."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What function creates scatter plots?", options: ["scatter()", "plot()", "points()", "draw()"], correctAnswer: 1, explanation: "plot() is the main plotting function." },
        { id: "q2", type: "fill_blank", question: "Use _____ for bar charts.", correctAnswer: "barplot()", explanation: "barplot() creates bar charts." },
        { id: "q3", type: "mcq", question: "What creates histogram?", options: ["histogram()", "hist()", "bars()", "plot(type='h')"], correctAnswer: 1, explanation: "hist() creates histograms." },
        { id: "q4", type: "true-false", question: "points() adds to existing plot.", correctAnswer: true, explanation: "points() adds additional points to plot." },
        { id: "q5", type: "mcq", question: "What parameter sets plot title?", options: ["title", "main", "heading", "label"], correctAnswer: 1, explanation: "main parameter sets the plot title." },
        { id: "q6", type: "fill_blank", question: "Use _____ to add a reference line.", correctAnswer: "abline()", explanation: "abline() adds straight lines to plots." },
        { id: "q7", type: "mcq", question: "pch controls what?", options: ["Color", "Point type", "Line style", "Size"], correctAnswer: 1, explanation: "pch sets point character/shape." },
        { id: "q8", type: "true-false", question: "plot(type='l') creates line plot.", correctAnswer: true, explanation: "type='l' creates line plot." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "plot()", value: "Main plotting function" },
      { label: "hist()", value: "Histogram" },
      { label: "barplot()", value: "Bar chart" },
      { label: "abline()", value: "Add lines" },
      { label: "points()/lines()", value: "Add to plot" }
    ]
  },
  {
    id: "r-9",
    number: 9,
    partLabel: "Part 1: R Fundamentals",
    title: "Introduction to dplyr",
    subtitle: "Data Manipulation",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 40,
    xpReward: 80,
    prerequisites: ["r-8"],
    learningObjectives: ["Use dplyr verbs", "Filter and select", "Group and summarize"],
    sections: [
      {
        id: "r-9-1",
        title: "dplyr Basics",
        whyItMatters: "dplyr is the most popular R package for data manipulation.",
        content: `**The dplyr Verbs:**

\`\`\`r\nlibrary(dplyr)\n\n# select() - choose columns\nselect(df, col1, col2)\nselect(df, -col3)  # Exclude\n\n# filter() - choose rows\nfilter(df, condition)\nfilter(df, col1 > 5 & col2 == \"A\")\n\n# mutate() - create new columns\nmutate(df, new_col = col1 * 2)\n\n# group_by() + summarize() - aggregations\ndf %>% \n  group_by(category) %>%\n  summarize(mean = mean(value))\n\n# arrange() - sort\narrange(df, desc(column))\n\`\`\`

**Using Pipes:**

\`\`\`r\ndf %>%\n  filter(condition) %>%\n  select(col1, col2) %>%\n  mutate(new_col = col1 * 2) %>%\n  arrange(desc(new_col))\n\`\`\``,
        codeExamples: [
          {
            id: "r-9-ex1",
            title: "dplyr Operations",
            description: "Data manipulation with dplyr",
            code: { r: "# Load library\nlibrary(dplyr)\n\n# Sample data\nstudents <- data.frame(\n  name = c(\"Alice\", \"Bob\", \"Charlie\", \"Diana\"),\n  age = c(25, 30, 35, 28),\n  grade = c(\"A\", \"B\", \"A\", \"C\"),\n  score = c(95, 82, 91, 76)\n)\n\n# Select columns\nselect(students, name, score)\n\n# Filter rows\nfilter(students, score > 85)\n\n# Add new column\nmutate(students, passed = score >= 60)\n\n# Chain operations\nstudents %>%\n  filter(grade != \"C\") %>%\n  select(name, score) %>%\n  arrange(desc(score))" },
            explanation: "dplyr provides a grammar of data manipulation."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What does select() do?", options: ["Filter rows", "Choose columns", "Create columns", "Sort data"], correctAnswer: 1, explanation: "select() chooses which columns to keep." },
        { id: "q2", type: "fill_blank", question: "Use _____ to keep specific rows.", correctAnswer: "filter()", explanation: "filter() selects rows matching condition." },
        { id: "q3", type: "mcq", question: "What does mutate() do?", options: ["Filter", "Select", "Create columns", "Group"], correctAnswer: 2, explanation: "mutate() creates new columns." },
        { id: "q4", type: "true-false", question: "%>% is the pipe operator.", correctAnswer: true, explanation: "%>% chains operations together." },
        { id: "q5", type: "mcq", question: "What does group_by() do?", options: ["Sorts data", "Creates groups", "Filters", "Joins"], correctAnswer: 1, explanation: "group_by() groups data for aggregation." },
        { id: "q6", type: "fill_blank", question: "Use _____ with group_by for aggregation.", correctAnswer: "summarize()", explanation: "summarize() calculates group statistics." },
        { id: "q7", type: "mcq", question: "What does arrange() do?", options: ["Filters", "Selects", "Sorts", "Groups"], correctAnswer: 2, explanation: "arrange() sorts the data." },
        { id: "q8", type: "true-false", question: "dplyr is part of tidyverse.", correctAnswer: true, explanation: "dplyr is a core tidyverse package." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "select()", value: "Choose columns" },
      { label: "filter()", value: "Filter rows" },
      { label: "mutate()", value: "New columns" },
      { label: "summarize()", value: "Aggregations" },
      { label: "arrange()", value: "Sort" },
      { label: "%>%", value: "Pipe operator" }
    ]
  },
  {
    id: "r-10",
    number: 10,
    partLabel: "Part 1: R Fundamentals",
    title: "Statistical Analysis Basics",
    subtitle: "Descriptive Statistics",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 35,
    xpReward: 70,
    prerequisites: ["r-9"],
    learningObjectives: ["Calculate statistics", "Correlation and regression", "Hypothesis testing basics"],
    sections: [
      {
        id: "r-10-1",
        title: "Descriptive Statistics",
        whyItMatters: "Statistics are the foundation of data analysis.",
        content: `**Summary Statistics:**

\`\`\`r\n# Central tendency\nmean(x)\nmedian(x)\n\n# Dispersion\nvar(x)      # Variance\nsd(x)       # Standard deviation\nrange(x)    # Min and max\nIQR(x)      # Interquartile range\n\n# Summary\nsummary(x)\nsummary(df)  # For data frame\n\`\`\`

**Correlation and Regression:**

\`\`\`r\n# Correlation\ncor(x, y)\n\n# Linear regression\nmodel <- lm(y ~ x, data = df)\nsummary(model)\n\n# Predictions\npredict(model, newdata)\n\`\`\`

**Basic Tests:**

\`\`\`r\n# T-test\nt.test(x, y)\n\n# Chi-square\nchisq.test(table)\n\n# ANOVA\nanova(model1, model2)`,
        codeExamples: [
          {
            id: "r-10-ex1",
            title: "Statistical Analysis",
            description: "Basic statistical functions in R",
            code: { r: "# Sample data\nscores <- c(85, 90, 78, 92, 88, 76, 95, 89)\n\n# Descriptive statistics\nmean(scores)\nmedian(scores)\nvar(scores)\nsd(scores)\nsummary(scores)\n\n# Correlation example\nheight <- c(150, 160, 170, 180, 190)\nweight <- c(50, 60, 70, 80, 90)\n\ncor(height, weight)\n\n# Simple linear regression\nmodel <- lm(weight ~ height)\nsummary(model)\n\n# Predict new value\npredict(model, data.frame(height = 175))" },
            explanation: "R has comprehensive statistical analysis capabilities."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What does mean() calculate?", options: ["Middle value", "Average", "Most common", "Total"], correctAnswer: 1, explanation: "mean() calculates the arithmetic average." },
        { id: "q2", type: "fill_blank", question: "Use _____ for spread measurement.", correctAnswer: "sd()", explanation: "sd() calculates standard deviation." },
        { id: "q3", type: "mcq", question: "What does lm() do?", options: ["Linear model", "Log model", "Loop matrix", "List mean"], correctAnswer: 0, explanation: "lm() fits linear regression models." },
        { id: "q4", type: "true-false", question: "cor() measures linear relationship.", correctAnswer: true, explanation: "Correlation measures linear association." },
        { id: "q5", type: "mcq", question: "What test compares two means?", options: ["t-test", "Chi-square", "ANOVA", "Correlation"], correctAnswer: 0, explanation: "t-test compares two group means." },
        { id: "q6", type: "fill_blank", question: "Use _____ to predict from model.", correctAnswer: "predict()", explanation: "predict() generates predictions." },
        { id: "q7", type: "mcq", question: "What does summary() return for model?", options: ["Just coefficients", "Full statistics", "Plot", "Data"], correctAnswer: 1, explanation: "summary() gives complete model statistics." },
        { id: "q8", type: "true-false", question: "R has built-in statistical tests.", correctAnswer: true, explanation: "R includes comprehensive statistical tests." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "mean()", value: "Average" },
      { label: "sd()", value: "Standard deviation" },
      { label: "lm()", value: "Linear model" },
      { label: "t.test()", value: "T-test" },
      { label: "cor()", value: "Correlation" }
    ]
  }
];

export const rTrack: Track = {
  id: "r",
  title: "R",
  titleBn: "আর",
  tagline: "Statistical computing and data science made powerful",
  taglineBn: "শক্তিশালী পরিসংখ্যানগত কম্পিউটিং ও ডেটা সায়েন্স",
  icon: "https://img.icons8.com/?size=160&id=4R3j0NpX1c2G&format=png",
  colorVar: "r",
  totalChapters: rChapters.length,
  estimatedHours: Math.round(rChapters.reduce((sum, c) => sum + c.estimatedMinutes, 0) / 60),
  chapters: rChapters,
  brandColor: "#276DC3",
  glowColor: "rgba(39, 109, 195, 0.4)",
};