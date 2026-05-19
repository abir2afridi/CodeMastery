# CODEMASTERY — INTRO TO HTML & CSS TRACK ADDITION
# Add Intro to HTML & CSS as a 39th track to the existing CodeMastery platform
# 75+ chapters · Absolute Beginner Friendly · Modern Web Design Foundations

## OVERVIEW

Extend the existing CodeMastery platform (Next.js 14 + TypeScript + Tailwind) by adding a complete “Intro to HTML & CSS” learning track.

Reference curriculum inspiration:
https://www.w3schools.com/htmlcss/default.asp

This track is designed for COMPLETE beginners who have never built a webpage before.

The track must:
- Teach HTML and CSS from absolute zero
- Focus heavily on visual learning
- Teach how the web works internally
- Explain layout systems visually
- Include live preview editing
- Include responsive design from the start
- Build real-world websites gradually

This track should prepare students for:
- Full HTML track
- Full CSS track
- JavaScript track
- Frontend development
- UI/UX design fundamentals

---

# CURRICULUM DATA STRUCTURE

Create:
- /lib/curriculum/htmlcss-intro-curriculum.ts

Update:
- /lib/curriculum/types.ts

Add Track:
- id: "intro-html-css"

Track metadata:
- id: "intro-html-css"
- title: "Intro to HTML & CSS"
- tagline: "Build beautiful websites from scratch"
- icon: "🎨"
- color: "#F97316"
- totalChapters: 75
- estimatedHours: 110

---

# LIVE HTML & CSS PLAYGROUND

Create:
- /components/compiler/HTMLCSSPlayground.tsx
- /app/compiler/htmlcss/page.tsx

Features:
- Live browser preview
- Split-screen editor
- HTML panel
- CSS panel
- Responsive preview modes
- Mobile/tablet/desktop toggles
- DOM visualization
- CSS box model visualizer
- Flexbox visualizer
- Grid visualizer
- Color picker
- Typography controls
- Drag-and-drop layout demos

---

# FULL CURRICULUM — 75 CHAPTERS

=== PART 1: WEB FUNDAMENTALS (Chapters 1–10) ===

Chapter 1: What Is the Web?
Chapter 2: How Websites Work
Chapter 3: What Is HTML?
Chapter 4: What Is CSS?
Chapter 5: Frontend vs Backend
Chapter 6: How Browsers Render Pages
Chapter 7: Setting Up VS Code
Chapter 8: Your First Webpage
Chapter 9: Understanding Files and Folders
Chapter 10: HTML + CSS Workflow

---

=== PART 2: HTML BASICS (Chapters 11–25) ===

Chapter 11: HTML Structure
Chapter 12: Headings and Paragraphs
Chapter 13: Links and Navigation
Chapter 14: Images
Chapter 15: Lists
Chapter 16: Tables
Chapter 17: Forms
Chapter 18: Inputs and Buttons
Chapter 19: Semantic HTML
Chapter 20: Audio and Video
Chapter 21: iFrames
Chapter 22: Meta Tags
Chapter 23: Accessibility Basics
Chapter 24: SEO Basics
Chapter 25: HTML Best Practices

---

=== PART 3: CSS BASICS (Chapters 26–40) ===

Chapter 26: CSS Syntax
Chapter 27: Selectors
Chapter 28: Colors
Chapter 29: Backgrounds
Chapter 30: Borders
Chapter 31: Margins and Padding
Chapter 32: The Box Model
Chapter 33: Width and Height
Chapter 34: Typography
Chapter 35: Display Properties
Chapter 36: Positioning
Chapter 37: Overflow
Chapter 38: Units and Measurements
Chapter 39: CSS Variables
Chapter 40: CSS Best Practices

---

=== PART 4: MODERN LAYOUTS (Chapters 41–52) ===

Chapter 41: Flexbox Basics
Chapter 42: Advanced Flexbox
Chapter 43: CSS Grid Basics
Chapter 44: Advanced CSS Grid
Chapter 45: Responsive Design
Chapter 46: Media Queries
Chapter 47: Mobile-First Design
Chapter 48: Responsive Images
Chapter 49: Responsive Typography
Chapter 50: Modern Layout Patterns
Chapter 51: Sticky Layouts
Chapter 52: Multi-Column Layouts

---

=== PART 5: MODERN UI DESIGN (Chapters 53–63) ===

Chapter 53: Shadows and Effects
Chapter 54: Gradients
Chapter 55: Transitions
Chapter 56: Animations
Chapter 57: Transformations
Chapter 58: Glassmorphism
Chapter 59: Neumorphism
Chapter 60: Dark Mode Design
Chapter 61: UI Components
Chapter 62: Landing Page Design
Chapter 63: Accessibility in UI Design

---

=== PART 6: REAL PROJECTS (Chapters 64–75) ===

Chapter 64: Project — Personal Portfolio
Chapter 65: Project — Responsive Landing Page
Chapter 66: Project — Blog Layout
Chapter 67: Project — Restaurant Website
Chapter 68: Project — Product Showcase
Chapter 69: Project — Dashboard UI
Chapter 70: Project — Responsive Navbar
Chapter 71: Project — Pricing Page
Chapter 72: Project — Photo Gallery
Chapter 73: Project — Multi-Page Website
Chapter 74: Deployment Basics
Chapter 75: HTML & CSS Foundations Mastery + Certificate Prep

---

# CONTENT REQUIREMENTS

EVERY chapter must include:
- 400+ words per section
- Visual explanations
- Real-world examples
- Interactive demos
- Responsive examples
- Accessibility guidance
- SEO best practices
- Exercises
- Quizzes
- Detailed quiz explanations
- Mini projects
- Design tips

---

# VISUAL LEARNING FEATURES

Add:
- DOM tree visualizer
- CSS specificity visualizer
- Flexbox playground
- Grid playground
- Box model simulator
- Responsive preview system
- Live design editor

---

# UI/UX REQUIREMENTS

- Modern beginner-friendly UI
- Beautiful animations
- Real-time preview
- Interactive learning flow
- Gamified progress
- Achievement badges
- Smooth transitions

---

# CERTIFICATE SYSTEM

Add:
- HTML & CSS Foundations Certificate
- Responsive Design Badge
- UI Design Badge

Unlock conditions:
- Complete all chapters
- Quiz score ≥80%
- Complete projects

---

# PERFORMANCE REQUIREMENTS

- Fast live preview rendering
- Debounced editor updates
- Responsive optimization
- Accessibility support
- Mobile-first design

---

# IMPLEMENTATION ORDER

1. Add Intro HTML & CSS track metadata
2. Build live HTML/CSS playground
3. Add responsive preview system
4. Add visual layout tools
5. Create curriculum
6. Add projects and quizzes
7. Add certificates
8. Optimize performance
9. Test all interactive systems

---

# FINAL REQUIREMENTS

- ZERO placeholder content
- Fully beginner-friendly
- Production-ready quality
- Beautiful interactive learning experience
- Fully integrated into CodeMastery ecosystem