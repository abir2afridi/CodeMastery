# CODEMASTERY — R TRACK ADDITION
# Add R as a 21st track to the existing CodeMastery platform
# Statistics · Data Science · Visualization · Machine Learning · RStudio-style workflow

================================================================================
OVERVIEW
================================================================================

Extend the existing CodeMastery platform by adding a COMPLETE R programming learning track.

IMPORTANT:
This track focuses on:
- Data analysis
- Statistics
- Visualization
- Data science workflows
- Machine learning basics

This track must take students from:
- Zero R knowledge
→ Statistical programming
→ Professional data analysis
→ Visualization expert

The track must maintain:
- Same UI/UX standards
- Same curriculum depth
- Same exercise quality
- Same compiler experience
- Same project quality

================================================================================
TRACK METADATA
================================================================================

Create:
/lib/curriculum/r-curriculum.ts

Add "r" to Track type union.

Track metadata:
- id: "r"
- title: "R"
- tagline: "Statistical computing and data science made powerful"
- icon: "📊"
- color: "#276DC3"
- totalChapters: 55
- estimatedHours: 95

================================================================================
R COMPILER / EXECUTION SYSTEM
================================================================================

Implement:
- WebR integration (R compiled to WebAssembly)
- Browser-based R execution
- Console output panel
- Plot rendering system
- Dataframe viewer
- CSV upload support

Use:
https://webr.r-wasm.org/

Features:
- Execute R code in browser
- Plot rendering
- ggplot2 visualization support
- Dataframe table rendering
- Error output panel
- Package loading system

================================================================================
R CURRICULUM — 55 CHAPTERS
================================================================================

=== PART 1: R FOUNDATIONS (Chapters 1–10) ===

Chapter 1: What Is R and Why Use It?
- History of R
- Statistical computing
- R vs Python
- Data science workflow
- Real-world use cases
- Finance and research usage
- R ecosystem

Chapter 2: Installing R and RStudio
- Installing R
- RStudio setup
- Console basics
- Script files
- Running code
- Packages

Chapter 3: Variables and Data Types
- Numeric
- Character
- Logical
- Vectors
- Factors
- Lists
- Matrices
- Arrays
- Data frames

Chapter 4: Operators and Expressions
- Arithmetic
- Logical
- Comparison
- Assignment
- Vectorized operations

Chapter 5: Vectors in R
- Creating vectors
- Indexing
- Slicing
- Vector operations
- Recycling rules

Chapter 6: Matrices and Arrays
- Matrix creation
- Operations
- Dimensions
- Matrix algebra

Chapter 7: Data Frames
- Creating data frames
- Accessing columns
- Filtering
- Sorting
- Modifying data

Chapter 8: Functions in R
- Function creation
- Parameters
- Return values
- Scope

Chapter 9: Control Flow
- if statements
- for loops
- while loops
- apply family

Chapter 10: Working with Files
- CSV reading
- Excel basics
- Writing files
- Data import/export

=== PART 2: DATA ANALYSIS (Chapters 11–22) ===

Chapter 11: dplyr Basics
Chapter 12: Data Cleaning
Chapter 13: Data Transformation
Chapter 14: Grouping and Summaries
Chapter 15: Joins and Merging
Chapter 16: Missing Data Handling
Chapter 17: String Manipulation
Chapter 18: Dates and Times
Chapter 19: Exploratory Data Analysis
Chapter 20: Tidy Data Principles
Chapter 21: Data Pipelines
Chapter 22: Large Dataset Processing

=== PART 3: DATA VISUALIZATION (Chapters 23–32) ===

Chapter 23: Base R Plotting
Chapter 24: ggplot2 Introduction
Chapter 25: Scatter Plots
Chapter 26: Histograms and Distributions
Chapter 27: Boxplots and Violin Plots
Chapter 28: Bar Charts
Chapter 29: Line Charts
Chapter 30: Themes and Styling
Chapter 31: Interactive Charts
Chapter 32: Dashboard Basics

=== PART 4: STATISTICS (Chapters 33–42) ===

Chapter 33: Descriptive Statistics
Chapter 34: Probability
Chapter 35: Distributions
Chapter 36: Hypothesis Testing
Chapter 37: Correlation
Chapter 38: Regression Analysis
Chapter 39: ANOVA
Chapter 40: Time Series Basics
Chapter 41: Statistical Modeling
Chapter 42: Reporting Results

=== PART 5: MACHINE LEARNING & PROJECTS (Chapters 43–55) ===

Chapter 43: Introduction to Machine Learning
Chapter 44: Classification
Chapter 45: Regression Models
Chapter 46: Clustering
Chapter 47: Decision Trees
Chapter 48: Model Evaluation
Chapter 49: caret Package
Chapter 50: Real Dataset Analysis
Chapter 51: Sales Dashboard Project
Chapter 52: Data Visualization Project
Chapter 53: Statistical Analysis Project
Chapter 54: Machine Learning Mini Project
Chapter 55: R Mastery Recap + Certificate Prep

================================================================================
R TECHNICAL REQUIREMENTS
================================================================================

1. WebR browser runtime
2. Plot rendering engine
3. ggplot2 integration
4. Dataframe table viewer
5. CSV upload support
6. Package installer
7. Console output
8. Error visualization
9. Chart exporting
10. Dataset explorer

================================================================================
QUALITY REQUIREMENTS
================================================================================

- 400+ words per section
- Real statistical explanations
- Real datasets
- Real charts
- Real machine learning examples
- Fully working R code
- 8+ quizzes per chapter
- 3+ exercises per chapter
- Full project implementations
- No placeholders

================================================================================
IMPLEMENTATION REQUIREMENTS
================================================================================

1. Add R track to dashboard
2. Create R runtime
3. Create r-curriculum.ts
4. Add chart rendering
5. Add dataframe viewer
6. Add R certificates
7. Add package system
8. Add progress tracking
9. Add dataset explorer
10. Test all R examples

================================================================================
FINAL RULE
================================================================================

ALL CONTENT MUST BE REAL.
ALL CODE MUST RUN.
ALL CHARTS MUST RENDER.
ALL PROJECTS MUST WORK.
FOLLOW THE SAME DEPTH, STRUCTURE, AND QUALITY AS OTHER CODEMASTERY TRACKS.