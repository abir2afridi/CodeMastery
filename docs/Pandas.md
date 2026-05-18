# CODEMASTERY — PANDAS TRACK ADDITION
# Add Pandas as a 21st track to the existing CodeMastery platform
# 70+ chapters · Data Analysis · Cleaning · Visualization · Real Datasets · Analytics Engineering

## OVERVIEW

Extend the existing CodeMastery platform by adding a COMPLETE Pandas learning track.

IMPORTANT:
- This track assumes students already know:
  - Python fundamentals
  - NumPy basics
  - arrays
  - functions
  - loops
  - data structures

Every chapter that references Python or NumPy concepts MUST show:
- "📖 Python Prerequisite"
- "📖 NumPy Prerequisite"

with links back to related lessons.

DO NOT reteach Python or NumPy basics repeatedly.
Focus ONLY on:
- data analysis
- tabular data
- cleaning
- preprocessing
- transformation
- analytics
- visualization
- real-world data workflows
- data engineering foundations

The goal:
Beginner
→
Professional data analyst / analytics engineer

Follow ALL existing CodeMastery platform standards:
- lesson systems
- quizzes
- playgrounds
- XP systems
- project systems
- progress tracking
- achievements
- certificates

---

# PANDAS PLAYGROUND / DATA LAB

Create:
- /components/compiler/PandasCompiler.tsx
- /app/compiler/pandas/page.tsx

Use:
- Pyodide
OR
- JupyterLite
OR
- Python WASM runtime

Required packages:
- pandas
- numpy
- matplotlib
- seaborn
- plotly

Features:
- DataFrame viewer
- CSV upload support
- interactive charts
- notebook execution
- table filtering
- sorting tools
- profiling reports
- memory inspector
- export system

Panels:
1. Python Editor
2. DataFrame Viewer
3. Visualization Panel
4. Console Output
5. Dataset Explorer
6. Profiling Report Panel

Support:
- CSV loading
- Excel loading
- JSON loading
- DataFrame operations
- charts
- missing value handling
- aggregations
- merges
- groupby
- time series

Keyboard shortcuts:
- Shift + Enter → Run
- Ctrl + S → Save Notebook
- Ctrl + / → Toggle Comments

---

# TRACK METADATA

Create:
 /lib/curriculum/pandas-curriculum.ts

Track metadata:
- id: "pandas"
- title: "Pandas"
- tagline: "Powerful data analysis and manipulation for Python"
- icon: "🐼"
- color: "#150458"
- totalChapters: 70
- estimatedHours: 115

---

# FULL PANDAS CURRICULUM — 70 CHAPTERS

=== PART 1: PANDAS FUNDAMENTALS (Chapters 1–12) ===

Chapter 1: What Is Pandas and Why Use It?
Chapter 2: Installing Pandas
Chapter 3: Series Objects
Chapter 4: DataFrames
Chapter 5: Reading CSV Files
Chapter 6: Reading Excel Files
Chapter 7: Inspecting Data
Chapter 8: Selecting Columns and Rows
Chapter 9: Filtering Data
Chapter 10: Data Types in Pandas
Chapter 11: Indexes
Chapter 12: Sorting Data

Every chapter MUST include:
- 400+ words per section
- real-world analytics examples
- production-grade workflows
- visual explanations
- quizzes
- exercises
- debugging walkthroughs
- performance notes

---

=== PART 2: DATA CLEANING (Chapters 13–24) ===

Chapter 13: Missing Values
Chapter 14: Handling Null Data
Chapter 15: Duplicate Rows
Chapter 16: String Cleaning
Chapter 17: Type Conversion
Chapter 18: Outlier Detection
Chapter 19: Data Validation
Chapter 20: Data Transformation
Chapter 21: Applying Functions
Chapter 22: Lambda Functions
Chapter 23: Vectorized Operations
Chapter 24: Data Cleaning Pipelines

---

=== PART 3: DATA ANALYSIS (Chapters 25–38) ===

Chapter 25: GroupBy Basics
Chapter 26: Aggregations
Chapter 27: Pivot Tables
Chapter 28: Crosstabs
Chapter 29: Window Functions
Chapter 30: Merging DataFrames
Chapter 31: Joining DataFrames
Chapter 32: Concatenation
Chapter 33: Correlation Analysis
Chapter 34: Statistical Analysis
Chapter 35: Time Series Basics
Chapter 36: Resampling
Chapter 37: Rolling Windows
Chapter 38: Forecasting Foundations

---

=== PART 4: VISUALIZATION + REPORTING (Chapters 39–48) ===

Chapter 39: Plotting with Pandas
Chapter 40: Matplotlib Integration
Chapter 41: Seaborn Integration
Chapter 42: Plotly Interactive Charts
Chapter 43: Dashboards
Chapter 44: KPI Reporting
Chapter 45: Exploratory Data Analysis
Chapter 46: Automated Reports
Chapter 47: Data Storytelling
Chapter 48: Exporting Reports

---

=== PART 5: ADVANCED PANDAS (Chapters 49–60) ===

Chapter 49: MultiIndex
Chapter 50: Advanced Indexing
Chapter 51: Performance Optimization
Chapter 52: Memory Optimization
Chapter 53: Chunk Processing
Chapter 54: Large Dataset Strategies
Chapter 55: Pandas Internals
Chapter 56: Method Chaining
Chapter 57: Custom Accessors
Chapter 58: Pandas with SQL
Chapter 59: Pandas with APIs
Chapter 60: Production Data Pipelines

---

=== PART 6: PROJECTS (Chapters 61–70) ===

Chapter 61: Project — Sales Analytics Dashboard
Chapter 62: Project — COVID Data Analysis
Chapter 63: Project — Financial Market Analyzer
Chapter 64: Project — Customer Segmentation
Chapter 65: Project — Data Cleaning Automation Tool
Chapter 66: Project — Business KPI Dashboard
Chapter 67: Mini Challenge Set 1
Chapter 68: Mini Challenge Set 2
Chapter 69: Mini Challenge Set 3
Chapter 70: Pandas Mastery Recap + Certificate

---

# PANDAS DATA LAB REQUIREMENTS

The data lab MUST support:
- CSV uploads
- Excel uploads
- JSON uploads
- interactive DataFrame tables
- chart exports
- profiling reports
- filtering
- sorting
- pivot table generation
- notebook saving
- downloadable analysis reports

---

# LESSON REQUIREMENTS

EVERY chapter MUST include:
- minimum 8 quizzes
- detailed explanations
- easy/medium/hard exercises
- hints + solutions
- debugging examples
- optimization discussions
- real datasets
- business analytics examples
- interview questions
- best practices

---

# VISUAL LEARNING FEATURES

Add:
- DataFrame visualization engine
- groupby flow animation
- merge/join visualization
- missing value heatmaps
- correlation matrix visualizer
- time series animation
- pipeline flow diagrams
- KPI dashboard builder

---

# PROJECT REQUIREMENTS

Projects MUST include:
- real-world datasets
- business analytics
- visual dashboards
- reporting systems
- data cleaning pipelines
- performance optimization
- export functionality
- documentation

---

# CERTIFICATE REQUIREMENTS

Unlock certificate after:
- all 70 chapters completed
- quizzes ≥80%
- projects completed

---

# IMPLEMENTATION REQUIREMENTS

1. Add "pandas" to Track union
2. Add Pandas track to dashboard
3. Build Pandas data lab
4. Add Pandas curriculum
5. Add DataFrame visualization system
6. Add dataset upload system
7. Add charting support
8. Add Pandas certificate system
9. Add notebook saving support
10. Add reporting engine

---

# QUALITY REQUIREMENTS

- ZERO placeholder content
- ALL Pandas examples tested
- ALL datasets valid
- ALL projects production-grade
- FULL beginner-friendly explanations
- NO incomplete sections
- ALL notebooks executable
- NO lorem ipsum

---

# EXTRA ADVANCED FEATURES

Implement:
- AI data analysis assistant
- automatic profiling reports
- chart recommendation engine
- anomaly detection visualizer
- notebook collaboration simulation
- smart data cleaning suggestions
- dashboard builder
- export-to-PDF reports
- dataset versioning simulation

---

# FINAL GOAL

After completing this track, students should be able to:
- analyze real-world datasets
- clean messy data professionally
- build analytics dashboards
- create reporting systems
- optimize Pandas workflows
- work as data analysts
- understand analytics engineering deeply
- handle production data pipelines