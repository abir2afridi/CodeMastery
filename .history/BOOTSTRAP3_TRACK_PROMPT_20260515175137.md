# CODEMASTERY — BOOTSTRAP 3 TRACK ADDITION
# Legacy UI Framework Track (Bootstrap 3)
# Add as a 9th track in CodeMastery platform

## OVERVIEW

Extend CodeMastery by adding a complete Bootstrap 3 learning track.

This track teaches:
- Legacy responsive design (pre-Flexbox era)
- jQuery-based UI components
- 12-column grid system (float-based)
- Enterprise legacy UI systems still used in old codebases

Students must be able to:
- Build full responsive websites using Bootstrap 3
- Understand legacy frontend architecture
- Maintain old enterprise systems

---

## TRACK METADATA

- id: "bootstrap3"
- title: "Bootstrap 3"
- tagline: "Legacy responsive web design mastery"
- icon: "🏗️"
- color: "#563D7C"
- totalChapters: 20
- estimatedHours: 25

---

## COMPILER REQUIREMENTS (CRITICAL)

### Rendering System
- Use iframe-based HTML renderer
- Inject Bootstrap 3 CDN automatically:
  https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css
- Inject jQuery (required for components):
  https://code.jquery.com/jquery-3.6.0.min.js
- Allow full DOM manipulation inside iframe

### Execution Rules
- Live preview mode
- Auto-refresh on code change
- Capture console logs from iframe
- No build system required
- Pure HTML + Bootstrap 3 + jQuery

### Supported Features
- Modal (jQuery driven)
- Carousel
- Dropdowns
- Collapse
- Tooltips (legacy JS)
- Grid system rendering
- Form validation UI only (no backend)

---

## CURRICULUM STRUCTURE

=== PART 1: CORE FUNDAMENTALS (1–5) ===

Chapter 1: What is Bootstrap 3
- CSS framework for rapid UI development
- Before Flexbox era
- Mobile-first responsive design

Chapter 2: Installation via CDN
- Bootstrap CSS + JS + jQuery setup
- Basic HTML boilerplate

Chapter 3: Grid System (CORE CONCEPT)
- 12-column float system
- col-xs, col-sm, col-md, col-lg
- offset, push, pull system

Chapter 4: Containers
- .container vs .container-fluid
- responsive breakpoints behavior

Chapter 5: Typography & Basic Styles
- headings, text alignment
- utility classes

---

=== PART 2: UI COMPONENTS (6–12) ===

Chapter 6: Buttons
Chapter 7: Forms (classic style)
Chapter 8: Navbars (responsive collapse)
Chapter 9: Tables (striped, bordered, hover)
Chapter 10: Panels (deprecated in BS4+)
Chapter 11: Wells
Chapter 12: Glyphicons (icon system)

---

=== PART 3: INTERACTIVE COMPONENTS (13–17) ===

Chapter 13: Modals (jQuery behavior)
Chapter 14: Dropdowns
Chapter 15: Carousel
Chapter 16: Collapse component
Chapter 17: Tooltips & Popovers

---

=== PART 4: REAL PROJECTS (18–20) ===

Chapter 18: Admin Dashboard (legacy style)
Chapter 19: Landing Page Clone
Chapter 20: Final Project — Full Legacy Website

---

## QUALITY REQUIREMENTS

- No placeholder chapters
- All examples must be real Bootstrap 3 working code
- Must include jQuery interactions where required
- Every chapter includes:
  - explanation
  - full working HTML example
  - mini UI task
- Must work fully in iframe sandbox