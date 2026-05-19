# CODEMASTERY — SMART TRACK FILTERING + LEARNING PATH SYSTEM

# Intelligent Category Grouping + Connected Topic Detection

# Preserve Learning Order + Future-Proof Auto Classification

## OVERVIEW

The CodeMastery platform now contains many tracks across:

* Programming Languages
* Frontend
* Backend
* Databases
* AI/Data Science
* DevOps/Cloud
* Design/UI
* Computer Science
* Productivity Tools
* Hardware/IoT
* Accessibility
* Data Visualization
* Security
* etc.

Currently every track is displayed individually.

This creates a problem:

* Beginners do not know WHAT should be learned together
* Connected technologies are separated
* Learning order is unclear
* Some tracks depend on others
* Some tracks belong to the same ecosystem
* Some tracks are advanced specializations
* Some tracks are utility/supporting skills

The platform must now implement a SMART LEARNING ECOSYSTEM.

The AI must intelligently:

1. Detect related tracks
2. Group connected subjects together
3. Preserve learning progression
4. Maintain prerequisite order
5. Automatically classify future tracks
6. Generate category-based filtering
7. Recommend learning paths dynamically

IMPORTANT:
This is NOT just visual filtering.
This is a FULL intelligent curriculum relationship system.

---

# CORE RULES

## RULE 1 — CONNECTED TOPICS MUST STAY TOGETHER

If technologies directly work together in real-world development, they MUST remain in the same ecosystem group.

Example:

* HTML + CSS + JavaScript = Core Frontend
* React + TypeScript + NodeJS = Modern Fullstack
* SQL + MySQL + PostgreSQL = Database Systems
* Python + NumPy + Pandas + SciPy + ML = Data Science ecosystem

DO NOT separate strongly connected technologies.

---

## RULE 2 — LEARNING ORDER MATTERS

Tracks must be organized from:

1. Beginner Foundations
2. Core Skills
3. Intermediate Tools
4. Advanced Ecosystems
5. Specializations

Example:
Intro to Programming
→ HTML/CSS
→ JavaScript
→ TypeScript
→ React
→ NodeJS
→ Fullstack

NOT random ordering.

---

## RULE 3 — PREREQUISITES MUST BE DETECTED

Every track must support:

```ts
prerequisites: string[]
recommendedAfter: string[]
relatedTracks: string[]
category: string
subcategory: string
difficulty: "beginner" | "intermediate" | "advanced"
```

Example:

```ts
React:
prerequisites: ["javascript", "html", "css"]
recommendedAfter: ["typescript"]
relatedTracks: ["nextjs", "nodejs", "redux"]
category: "Frontend"
subcategory: "Frontend Frameworks"
```

---

# REQUIRED MASTER CATEGORIES

The AI MUST automatically classify ALL existing and future tracks into these categories.

---

# 1. PROGRAMMING FOUNDATIONS

Purpose:
Absolute beginner computer science fundamentals.

Tracks:

* Intro to Programming
* Typing Speed Test
* CodeGame

Learning Order:

1. Typing Speed Test
2. Intro to Programming
3. CodeGame

---

# 2. FRONTEND DEVELOPMENT

Purpose:
Building websites and browser interfaces.

Tracks:

* HTML
* CSS
* Intro to HTML & CSS
* Responsive Web Design
* JavaScript
* TypeScript
* AJAX
* HTML DOM
* jQuery
* React
* Vue
* Angular
* W3.CSS
* Bootstrap 3
* Bootstrap 4
* Bootstrap 5
* SVG
* Canvas
* Icons
* Web Colors
* Emojis
* UTF-8 & Character Encoding
* Accessibility

Subcategories:

* Core Web
* UI Frameworks
* Frontend Frameworks
* Graphics & Visuals
* Browser APIs
* Web Standards

Learning Flow:
HTML
→ CSS
→ Responsive Design
→ JavaScript
→ DOM
→ AJAX
→ TypeScript
→ React/Vue/Angular

---

# 3. BACKEND DEVELOPMENT

Purpose:
Server-side development and APIs.

Tracks:

* PHP
* NodeJS
* ASP
* Django
* Go
* Java
* C#
* Kotlin

Subcategories:

* Server Languages
* Backend Frameworks
* Enterprise Development
* API Development

Learning Flow Examples:
JavaScript → NodeJS
Python → Django
Java → Kotlin
C# → ASP.NET ecosystem

---

# 4. PROGRAMMING LANGUAGES

Purpose:
Core general-purpose languages.

Tracks:

* Python
* C
* C++
* Java
* C#
* Go
* Rust
* Swift
* Kotlin
* R
* PHP

Subcategories:

* Systems Programming
* Enterprise
* Mobile
* Scientific Computing
* Web Languages

Relationship Rules:

* C before C++
* Java before Kotlin
* Python before AI/ML
* Rust after systems fundamentals

---

# 5. DATABASES & DATA STORAGE

Purpose:
Data management systems.

Tracks:

* SQL
* MySQL
* PostgreSQL
* MongoDB
* JSON
* XML

Learning Flow:
SQL
→ MySQL/PostgreSQL
→ MongoDB
→ JSON/XML integration

---

# 6. DATA SCIENCE & ANALYTICS

Purpose:
Scientific computing and analytics.

Tracks:

* NumPy
* Pandas
* SciPy
* Matplotlib
* Statistics
* Excel
* Google Sheets
* R
* Machine Learning

Learning Flow:
Statistics
→ Python
→ NumPy
→ Pandas
→ Matplotlib
→ SciPy
→ Machine Learning

IMPORTANT:
Machine Learning MUST NOT appear disconnected from Python ecosystem.

---

# 7. AI & GENERATIVE AI

Purpose:
Modern artificial intelligence systems.

Tracks:

* Artificial Intelligence
* Generative AI
* Machine Learning

Learning Flow:
Python
→ Statistics
→ Machine Learning
→ Artificial Intelligence
→ Generative AI

---

# 8. DEVOPS, CLOUD & TOOLS

Purpose:
Infrastructure, automation, deployment.

Tracks:

* Git
* Bash
* AWS

Learning Flow:
Git
→ Bash
→ Cloud/Deployment

---

# 9. CYBERSECURITY

Purpose:
Security engineering and ethical hacking.

Tracks:

* CyberSecurity

Related Tracks:

* Linux/Bash
* Networking
* Cloud
* Backend systems

---

# 10. COMPUTER SCIENCE & DSA

Purpose:
Core problem-solving and theory.

Tracks:

* Data Structures & Algorithms

Related To:

* C++
* Java
* Python
* Go
* Rust

IMPORTANT:
DSA should appear as a HIGH PRIORITY foundational advanced track.

---

# 11. HARDWARE & IOT

Purpose:
Physical computing and embedded systems.

Tracks:

* Raspberry Pi & IoT

Related To:

* Python
* C
* Bash
* Linux

---

# SMART AUTO-DETECTION SYSTEM

For ALL future tracks added later, AI must automatically detect:

1. Is this:

   * Frontend?
   * Backend?
   * Database?
   * AI?
   * DevOps?
   * Design?
   * Programming Language?
   * Visualization?
   * Productivity?
   * Hardware?

2. What technologies does it directly integrate with?

3. What should be learned BEFORE it?

4. What should be learned AFTER it?

5. Beginner/intermediate/advanced?

6. Ecosystem placement?

---

# IMPLEMENTATION REQUIREMENTS

## Create Central Taxonomy System

File:

```bash
/lib/learning-taxonomy.ts
```

Structure:

```ts
export interface LearningCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  tracks: string[];
  recommendedOrder: string[];
}

export interface TrackRelationship {
  trackId: string;
  prerequisites: string[];
  relatedTracks: string[];
  recommendedNext: string[];
  category: string;
  subcategory: string;
  difficulty: string;
}
```

---

# REQUIRED UI FEATURES

## 1. CATEGORY FILTERS

Users can filter by:

* Frontend
* Backend
* AI
* Data Science
* Databases
* Programming Languages
* DevOps
* Security
* Hardware
* Beginner Friendly
* Advanced

---

## 2. LEARNING PATH VIEW

Example cards:

```txt
Frontend Developer Path
HTML → CSS → JavaScript → React → TypeScript
```

```txt
AI Engineer Path
Python → Statistics → NumPy → Pandas → ML → AI → GenAI
```

```txt
Backend Developer Path
JavaScript → NodeJS → SQL → MongoDB → AWS
```

---

## 3. RELATED TRACKS SECTION

Every course page should show:

```txt
Related Tracks
Prerequisites
Recommended Next Courses
Part of Learning Path
```

---

# SMART SORTING RULES

When displaying tracks:

1. Foundations first
2. Core technologies second
3. Frameworks after core languages
4. Advanced ecosystems later
5. Specializations last

Example:
Correct:
HTML → CSS → JavaScript → TypeScript → React

Wrong:
React → HTML → CSS

---

# IMPORTANT RELATIONSHIP EXAMPLES

## STRONGLY CONNECTED

Keep together:

* HTML/CSS/JS
* React/TypeScript
* Python/ML/Pandas
* SQL/MySQL/PostgreSQL
* NodeJS/AJAX/JSON
* SVG/Canvas/Icons
* Git/Bash/AWS

## WEAKLY CONNECTED

Do NOT force together:

* HTML + Machine Learning
* PHP + Raspberry Pi
* SVG + PostgreSQL

---

# FUTURE-PROOF REQUIREMENTS

When future tracks are added:

* AI must classify automatically
* AI must determine prerequisites
* AI must place in correct ecosystem
* AI must generate relationships dynamically
* AI must update learning paths automatically

Example future additions:

* Next.js
* Docker
* Kubernetes
* Flutter
* TensorFlow
* GraphQL

These must automatically integrate into correct paths.

---

# FINAL GOAL

Transform CodeMastery from:
“a list of random courses”

into:

“A fully connected intelligent learning ecosystem with proper progression, relationships, prerequisites, ecosystems, and career-focused learning paths.”

The platform should feel like:

* roadmap.sh
* freeCodeCamp paths
* professional university curriculum
* modern AI-assisted learning graph

NOT just a course catalog.

Implement EVERYTHING fully with:

* zero placeholders
* scalable architecture
* smart auto-grouping
* maintainable taxonomy system
* future-proof relationship engine
* clean UX
* connected learning journeys
