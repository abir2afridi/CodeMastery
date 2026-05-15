# CODEMASTERY — W3.CSS TRACK ADDITION

# Add W3.CSS as a new track to the existing CodeMastery platform

# 55+ chapters · Every class from the official W3.CSS reference covered

# Reference source: <https://www.w3schools.com/w3css/w3css_references.asp>

## OVERVIEW

Extend the existing CodeMastery platform (Next.js 14 + TypeScript + Tailwind) by adding a complete W3.CSS learning track. Follow ALL existing design patterns, data structures, component conventions, and curriculum depth standards already established across all previous tracks.

W3.CSS is a modern, free CSS framework with no JavaScript dependency, built purely on standard CSS. It is lightweight (~21KB), mobile-first, and responsive. This track covers EVERY class listed in the official W3.CSS reference at <https://www.w3schools.com/w3css/w3css_references.asp> — from basic containers to animations, modals, accordions, and color themes — with real examples, live previews, and practice exercises for every single class.

PREREQUISITE AWARENESS: W3.CSS is a CSS framework — it helps to know basic HTML and CSS first. Show a "📋 Prerequisites" notice at the top of the track overview page: "Basic HTML and CSS knowledge helps — but you can learn W3.CSS even without them. Every example is fully explained from scratch." Do NOT lock the track behind HTML/CSS completion.

---

## COMPILER SETUP FOR W3.CSS

W3.CSS is pure HTML+CSS (no JavaScript needed for most features). Use the EXISTING HTML/CSS/JS compiler already built in the platform, but pre-load the W3.CSS CDN link in the HTML panel for all W3.CSS lessons.

Implementation for W3.CSS lessons:

- In MiniCompiler and FullCompiler: detect if current track is "w3css"
- If yes: automatically inject into the HTML panel's <head>:
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
- This means every code example auto-loads W3.CSS — student doesn't need to add it manually
- Show a small pill badge "W3.CSS loaded ✓" in the compiler header
- The live preview immediately shows W3.CSS styled output

Add a "W3.CSS Class Inspector" panel (unique to this track):

- A sidebar in the compiler that lists all W3.CSS classes grouped by category
- Click any class → it gets inserted at cursor position in the HTML editor
- Search field to filter classes instantly
- This acts as an in-compiler reference — students never need to leave the page

---

## CURRICULUM DATA STRUCTURE

Add to /lib/curriculum/w3css-curriculum.ts following existing TypeScript interfaces.
Add "w3css" to Track type union in types.ts.

Track metadata:

- id: "w3css"
- title: "W3.CSS"
- tagline: "Style anything. No JavaScript needed."
- icon: "🎨"
- color: "#04AA6D"
- totalChapters: 55
- estimatedHours: 45

---

## SPECIAL LESSON COMPONENT — W3ClassDemo

Build /components/lesson/W3ClassDemo.tsx — unique to this track:

This component shows:

1. The class name in a styled pill: class="w3-container"
2. The CSS properties it applies (from the W3.CSS source — show actual CSS values)
3. A live HTML example using that class
4. The rendered output in a mini iframe (with W3.CSS pre-loaded)
5. A "Copy class name" button
6. A "Try in Compiler" button — opens full compiler with this example pre-filled

Every section in every W3.CSS chapter uses this component for each class covered.

---

## FULL CURRICULUM — 55 CHAPTERS

=== PART 1: INTRODUCTION TO W3.CSS (Chapters 1–4) ===

Chapter 1: What Is W3.CSS and Why Use It?
Difficulty: Absolute Beginner | XP: 80 | Time: 25 min

Learning objectives:

- Understand what W3.CSS is and how it compares to Bootstrap
- Know how to include W3.CSS in any HTML file
- Understand mobile-first and responsive design philosophy
- See a complete W3.CSS page built in under 10 lines

Sections (400+ words each, zero placeholders, full content):

1.1 — What Is W3.CSS?
Real-world analogy: Building a house from scratch takes months. But if you buy a prefabricated house kit — pre-cut walls, pre-made windows, pre-drilled holes — you can assemble a complete house in days. W3.CSS is a prefabricated kit for websites. Instead of writing all your CSS from scratch, you add class names to your HTML elements and W3.CSS applies beautiful, responsive styles instantly.

Content: W3.CSS was created by W3Schools, the world's largest web developer learning site. It was designed to be simpler and lighter than Bootstrap. Key facts: W3.CSS is only ~21KB minified (Bootstrap is ~150KB). It requires zero JavaScript — no jQuery, no dependencies, nothing. It uses only standard CSS3 features that work in all modern browsers. It follows Google Material Design principles — flat design, bold colors, paper-like card layouts. It is 100% free and open source. It is mobile-first — designed for phones first, then tablets and desktops. Why choose W3.CSS over Bootstrap: when you want a simpler, lighter framework for content sites, portfolios, and landing pages. Why choose Bootstrap over W3.CSS: when you need complex JavaScript components (carousels, tooltips, etc.) — though you can combine both.

1.2 — How to Include W3.CSS
Three ways to add W3.CSS to any HTML page:
Method 1 — CDN (recommended, always latest):

```html
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
```

Method 2 — Download and host locally:
Download from <https://www.w3schools.com/w3css/4/w3.css> → save as w3.css → link locally.
Method 3 — Color themes (colored variants):

```html
<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-blue.css">
```

Available themes: w3-theme-black, w3-theme-blue, w3-theme-red, w3-theme-green, w3-theme-orange, w3-theme-teal, w3-theme-indigo, w3-theme-deep-purple — all free.

1.3 — Your First W3.CSS Page

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <div class="w3-container w3-blue">
    <h1>My First W3.CSS Page</h1>
  </div>
  <div class="w3-container">
    <p>Welcome to W3.CSS learning!</p>
    <button class="w3-button w3-green">Click Me</button>
  </div>
</body>
</html>
```

Line-by-line explanation of every class used. Show the rendered output. Compare: same page without W3.CSS (plain browser defaults) vs with W3.CSS. The difference is dramatic.

1.4 — W3.CSS vs Bootstrap vs Custom CSS — When to Use What
Full comparison table: File size, JavaScript dependency, learning curve, customization difficulty, component count, community size. Real decision framework: personal portfolio → W3.CSS, complex web app → Bootstrap, unique brand → Custom CSS.

Quiz (8 questions with full explanations):
Q1 (MCQ): What is the file size of W3.CSS minified? A) 150KB B) 21KB C) 5KB D) 500KB — Answer: B
Q2 (True/False): W3.CSS requires jQuery to work. — Answer: False — W3.CSS is pure CSS, no JavaScript dependency whatsoever.
Q3 (Fill blank): To include W3.CSS via CDN, use the <___> HTML tag with the W3.CSS stylesheet link. — Answer: link
Q4 (MCQ): W3.CSS is based on which design philosophy? A) Skeuomorphic B) Google Material Design C) Windows Metro D) Apple Human Interface — Answer: B
Q5 (Code output): What color will <div class="w3-blue"> have? Answer: Blue background
Q6 (True/False): W3.CSS is mobile-first. Answer: True
Q7 (MCQ): Which is NOT a valid way to add W3.CSS? A) CDN link B) npm install C) Download and host D) Color theme CDN — Answer: B — W3.CSS does not have an official npm package. Use CDN or download.
Q8 (Spot the bug): <link href="w3.css"> — Bug: missing rel="stylesheet" attribute

Exercises:
Exercise 1 (Easy): Create an HTML page with W3.CSS that has a blue header with your name, a white content area with a paragraph, and a green button.
Exercise 2 (Easy): Create a page using the w3-theme-red theme instead of default W3.CSS.
Exercise 3 (Medium): Create a page that looks like a basic mobile app — colored top bar, scrollable content area, fixed bottom navigation bar — all using only W3.CSS classes.

---

Chapter 2: Containers and Panels — w3-container, w3-panel, w3-content
Chapter 3: Badges and Tags — w3-badge, w3-tag
Chapter 4: W3.CSS Color System Overview

=== PART 2: COLORS — EVERY W3.CSS COLOR CLASS (Chapters 5–9) ===

Chapter 5: Background Color Classes — All 38 Colors
Teach every single background color class with live preview:
w3-amber, w3-aqua, w3-blue, w3-blue-grey, w3-brown, w3-cyan,
w3-dark-grey, w3-deep-orange, w3-deep-purple, w3-green, w3-grey,
w3-indigo, w3-khaki, w3-light-blue, w3-light-green, w3-light-grey,
w3-lime, w3-orange, w3-pale-blue, w3-pale-green, w3-pale-red,
w3-pale-yellow, w3-pink, w3-purple, w3-red, w3-sand, w3-teal,
w3-white, w3-yellow, w3-black.

For EACH color class — use the W3ClassDemo component:

- Show the class name
- Show the hex value and RGB value of that color
- Show a demo div with that background
- Show it combined with white text and dark text (contrast comparison)
- Show the pale variant if it exists
- Show the border variant: w3-border-[color]
- Show the text variant: w3-text-[color]
- Show the hover variant: w3-hover-[color]

Chapter 6: Text Color Classes — w3-text-[color]
Every w3-text-* class: w3-text-red, w3-text-blue, w3-text-green etc.
When to use text colors vs background colors. Contrast rules.
Combining background + text colors for readable combinations.

Chapter 7: Border Color Classes — w3-border-[color]
Every w3-border-[color] class combined with w3-border.
Border-only elements (transparent background with colored border).
Creating outlined buttons, outlined cards.

Chapter 8: Hover Color Classes — w3-hover-[color]
Every w3-hover-* class: w3-hover-red, w3-hover-blue etc.
Also: w3-hover-opacity, w3-hover-shadow, w3-hover-none, w3-hover-text-[color], w3-hover-border-[color].
Building interactive menus and buttons with hover effects.

Chapter 9: W3.CSS Color Themes and Libraries
w3-theme system: w3-theme, w3-theme-l1 through w3-theme-l5 (light variants), w3-theme-d1 through w3-theme-d5 (dark variants), w3-theme-action, w3-theme-light, w3-theme-dark.
Available color theme files. How to apply a theme globally. Building a fully themed site.

=== PART 3: LAYOUT SYSTEM (Chapters 10–16) ===

Chapter 10: The W3.CSS Grid — w3-row, w3-col, Responsive Columns
Full coverage:

- w3-row: creates a row container (clears floats)
- w3-row-padding: row with padding on columns
- w3-col: base column class
- Size classes: s1–s12 (small), m1–m12 (medium), l1–l12 (large)
- Example: class="w3-col s12 m6 l4" — full on mobile, half on tablet, third on desktop
- w3-half, w3-third, w3-twothird, w3-quarter, w3-threequarter — shorthand responsive fractions
- w3-rest — takes remaining width
- Building real layouts: 2-column, 3-column, mixed layouts
- Nested rows

Chapter 11: w3-content — Fixed Width Centered Content
Chapter 12: w3-container and w3-panel — Differences and Use Cases
Chapter 13: Display Classes — w3-show, w3-hide, w3-display-*
All display positioning classes:
w3-display-topleft, w3-display-topright, w3-display-bottomleft, w3-display-bottomright,
w3-display-middle, w3-display-topmiddle, w3-display-bottommiddle,
w3-display-left, w3-display-right, w3-display-position.
Responsive hide/show: w3-hide-small, w3-hide-medium, w3-hide-large, w3-show-block, w3-show-inline-block.

Chapter 14: Padding Classes — Every w3-padding-* Class
w3-padding-small (4px), w3-padding (8px), w3-padding-large (12px 24px),
w3-padding-16, w3-padding-24, w3-padding-32, w3-padding-48, w3-padding-64, w3-padding-128.
Top/bottom specific: w3-padding-top-*, w3-padding-bottom-*.

Chapter 15: Margin Classes — Every w3-margin-* Class
w3-margin (16px all sides), w3-margin-top, w3-margin-bottom, w3-margin-left, w3-margin-right.
w3-margin-8, w3-margin-16, w3-margin-32, w3-margin-64.

Chapter 16: Border Classes — w3-border, w3-border-*, Rounded Corners
w3-border (1px solid #ccc), w3-border-0 (remove border), w3-border-top, w3-border-bottom, w3-border-left, w3-border-right.
w3-round, w3-round-small, w3-round-medium, w3-round-large, w3-round-xlarge, w3-round-xxlarge, w3-circle.
w3-opacity, w3-opacity-min, w3-opacity-max.

=== PART 4: TYPOGRAPHY AND TEXT (Chapters 17–20) ===

Chapter 17: Text Size Classes — w3-tiny through w3-jumbo
Every size class with exact font-size values:
w3-tiny (10px), w3-small (12px), w3-medium (15px — default), w3-large (18px),
w3-xlarge (24px), w3-xxlarge (36px), w3-xxxlarge (48px), w3-jumbo (64px).
w3-wide: letter-spacing 4px.
w3-serif: changes font to serif.

Chapter 18: Text Alignment and Formatting — w3-center, w3-left, w3-right, w3-justify
Chapter 19: w3-code — Code Formatting in W3.CSS
Chapter 20: Typography Combinations — Building Beautiful Text Layouts

=== PART 5: UI COMPONENTS (Chapters 21–36) ===

Chapter 21: Buttons — w3-button, w3-btn
Deep dive:

- w3-button: basic inline button (no drop shadow, no border radius)
- w3-btn: button with border-radius and drop shadow
- Combining with colors: class="w3-button w3-blue"
- Combining with sizes: class="w3-button w3-blue w3-large"
- Disabled: class="w3-button w3-disabled"
- Block buttons: class="w3-button w3-block w3-blue"
- Round buttons: class="w3-button w3-circle w3-blue"
- Button groups (inside w3-bar)
- Ripple effect: w3-ripple
- All hover effects on buttons
- Building real button sets: toolbar, action bar, split buttons

Chapter 22: Cards — w3-card, w3-card-2, w3-card-4, w3-card-8, w3-card-16
Each card class with its box-shadow depth.
Building: product card, profile card, blog post card, pricing card.
Combining cards with images, buttons, color headers.

Chapter 23: Tables — w3-table, w3-table-all, w3-striped, w3-hoverable, w3-centered, w3-bordered
Every table class. Responsive tables with w3-responsive wrapper.
Combining table classes. Colored table headers and rows.

Chapter 24: Lists — w3-ul, List Styling
w3-ul: styled unordered list. Combining with w3-card, w3-border.
Colored list items. Hoverable list items.

Chapter 25: Images — w3-image, w3-circle, w3-round
Responsive images. Circular images (avatar). Rounded images.
Combining images with overlay effects.

Chapter 26: Inputs and Forms — w3-input, w3-select, w3-check, w3-radio
Every form class. Styled input groups. Full styled form layout.
w3-input (full-width border-bottom style), w3-select, w3-check, w3-radio.
Form validation styling.

Chapter 27: Navigation Bar — w3-bar, w3-bar-item, w3-bar-block
w3-bar: horizontal navigation bar.
w3-bar-item: items inside the bar (links, buttons).
w3-bar-block: vertical navigation (sidebar menu).
w3-mobile: makes bar items full-width on small screens.
Building: top navbar, sidebar, bottom navigation, breadcrumb.

Chapter 28: Sidebar — w3-sidebar, w3-overlay
Full sidebar implementation — toggle open/close with minimal JavaScript.
Left sidebar, right sidebar. Overlay background.

Chapter 29: Dropdown — w3-dropdown-click, w3-dropdown-hover, w3-dropdown-content
Hover dropdown (pure CSS). Click dropdown (tiny JS required).
Mega menu pattern. Nested dropdowns.

Chapter 30: Modal / Dialog — w3-modal, w3-modal-content, w3-animate-*
Creating popups and dialogs. Opening/closing with JavaScript.
Alert modals, confirmation modals, full-screen modals.
Animate modal entry with w3-animate-top, w3-animate-zoom.

Chapter 31: Accordion — w3-hide, JavaScript toggle pattern
Building an accordion with W3.CSS + minimal JavaScript.
FAQ section. Nested accordion.

Chapter 32: Tabs — Tab navigation with w3-bar + JavaScript
Tab component built with W3.CSS bar + content show/hide.
Pill tabs, underline tabs.

Chapter 33: Progress Bars — w3-progressbar, w3-container
Animated progress bars. Striped progress bars. Skill bars.

Chapter 34: Tooltip — w3-tooltip
Simple tooltip. Positioned tooltips.

Chapter 35: w3-section — Page Sections
Dividing a page into fullscreen or fixed-height sections.

Chapter 36: Pagination — Building with w3-bar
Numbered pagination. Previous/Next. Current page highlight.

=== PART 6: ANIMATIONS (Chapters 37–40) ===

Chapter 37: CSS Animations — w3-animate-top, w3-animate-bottom, w3-animate-left, w3-animate-right
Each animation class with exact keyframe values. Entrance animations for page elements.

Chapter 38: Opacity and Fade — w3-animate-opacity, w3-animate-fading
Fade-in on load. Fading elements on scroll.

Chapter 39: Zoom — w3-animate-zoom, w3-animate-input
Zoom effect for modals. Input field focus animation.

Chapter 40: Spin — w3-spin
Spinning loading icon. Custom spinner. Combining with icons.

=== PART 7: RESPONSIVE AND ADVANCED (Chapters 41–48) ===

Chapter 41: Responsive Design with W3.CSS
Full responsive breakpoints: small (<601px), medium (601–992px), large (>992px).
Every responsive class. Mobile-first vs desktop-first approach.

Chapter 42: w3-responsive — Responsive Tables and Containers
Chapter 43: Overlay Classes — w3-overlay, w3-display-* Combined
Chapter 44: W3.CSS and JavaScript — Minimal JS for Interactive Components
Chapter 45: Dark Mode Pattern with W3.CSS
Chapter 46: W3.CSS Color Themes — All Available Themes Deep Dive
Chapter 47: Customizing W3.CSS — Overriding Classes
Chapter 48: W3.CSS Performance — Why It's So Fast

=== PART 8: PROJECTS (Chapters 49–55) ===

Chapter 49: Project — Personal Portfolio Page (W3.CSS only)
Full one-page portfolio: hero section, about, skills, projects, contact form. 100% W3.CSS, zero custom CSS.

Chapter 50: Project — Responsive Restaurant Website
Header with image, menu table, reservation form, map embed, footer. W3.CSS grid layout.

Chapter 51: Project — Admin Dashboard UI
Sidebar navigation, stat cards, data table, progress bars, modals.

Chapter 52: Project — Blog Layout
Header, featured image card, article grid, pagination, sidebar.

Chapter 53: Project — Landing Page with Animations
Hero with animate-top, features with cards, pricing table, CTA modal.

Chapter 54: Mini Challenge Set (20 challenges — progressively harder)
Each challenge: "Build this UI using ONLY W3.CSS classes — no custom CSS allowed"

Chapter 55: W3.CSS Mastery Recap + Reference Sheet + Certificate Prep

---

## W3.CSS CLASS REFERENCE DATA

Build /lib/w3css-classes.ts — a complete TypeScript data file with EVERY W3.CSS class:

```typescript
export interface W3Class {
  name: string;           // "w3-container"
  category: string;       // "Layout"
  description: string;    // "Adds 16px left and right padding"
  cssProperties: string;  // "padding: 0 16px"
  example: string;        // HTML example code
  relatedClasses: string[];
}

export const W3_CLASSES: W3Class[] = [
  // CONTAINERS
  { name: "w3-container", category: "Layout", description: "Adds a 16px left and right padding to any HTML element", cssProperties: "padding: 0 16px", example: '<div class="w3-container w3-blue"><p>Content</p></div>', relatedClasses: ["w3-panel", "w3-content"] },
  { name: "w3-panel", category: "Layout", description: "Adds 16px padding and 16px top and bottom margin — for grouping content visually", cssProperties: "padding: 0.01em 16px; margin: 16px 0", example: '<div class="w3-panel w3-pale-blue"><p>Important note</p></div>', relatedClasses: ["w3-container", "w3-card"] },
  { name: "w3-content", category: "Layout", description: "Fixes content to a max-width of 980px and centers it on screen", cssProperties: "max-width: 980px; margin: auto", example: '<div class="w3-content"><p>Centered content</p></div>', relatedClasses: ["w3-container"] },

  // COLORS (all 30+ background colors)
  { name: "w3-amber", category: "Color", description: "Amber background color (#ffc107)", cssProperties: "background-color: #ffc107 !important; color: #000", example: '<div class="w3-amber w3-container"><p>Amber</p></div>', relatedClasses: ["w3-text-amber", "w3-border-amber", "w3-hover-amber"] },
  { name: "w3-aqua", category: "Color", description: "Aqua background color (#00ffff)", cssProperties: "background-color: #00ffff !important; color: #000", example: '<div class="w3-aqua w3-container"><p>Aqua</p></div>', relatedClasses: ["w3-text-aqua", "w3-border-aqua"] },
  { name: "w3-blue", category: "Color", description: "Blue background (#2196F3)", cssProperties: "background-color: #2196F3 !important; color: #fff", example: '<div class="w3-blue w3-container"><p>Blue</p></div>', relatedClasses: ["w3-text-blue", "w3-border-blue", "w3-hover-blue", "w3-pale-blue"] },
  { name: "w3-blue-grey", category: "Color", description: "Blue-grey background (#607d8b)", cssProperties: "background-color: #607d8b !important; color: #fff", example: '<div class="w3-blue-grey w3-container"><p>Blue Grey</p></div>', relatedClasses: ["w3-text-blue-grey"] },
  { name: "w3-brown", category: "Color", description: "Brown background (#795548)", cssProperties: "background-color: #795548 !important; color: #fff", example: '<div class="w3-brown w3-container"><p>Brown</p></div>', relatedClasses: [] },
  { name: "w3-cyan", category: "Color", description: "Cyan background (#00bcd4)", cssProperties: "background-color: #00bcd4 !important; color: #000", example: '<div class="w3-cyan w3-container"><p>Cyan</p></div>', relatedClasses: [] },
  { name: "w3-dark-grey", category: "Color", description: "Dark grey background (#616161)", cssProperties: "background-color: #616161 !important; color: #fff", example: '<div class="w3-dark-grey w3-container"><p>Dark Grey</p></div>', relatedClasses: ["w3-grey", "w3-light-grey"] },
  { name: "w3-deep-orange", category: "Color", description: "Deep orange background (#ff5722)", cssProperties: "background-color: #ff5722 !important; color: #fff", example: '<div class="w3-deep-orange w3-container"><p>Deep Orange</p></div>', relatedClasses: [] },
  { name: "w3-deep-purple", category: "Color", description: "Deep purple background (#673ab7)", cssProperties: "background-color: #673ab7 !important; color: #fff", example: '<div class="w3-deep-purple w3-container"><p>Deep Purple</p></div>', relatedClasses: [] },
  { name: "w3-green", category: "Color", description: "Green background (#4CAF50)", cssProperties: "background-color: #4CAF50 !important; color: #fff", example: '<div class="w3-green w3-container"><p>Green</p></div>', relatedClasses: ["w3-text-green", "w3-border-green", "w3-hover-green", "w3-pale-green", "w3-light-green"] },
  { name: "w3-grey", category: "Color", description: "Grey background (#9e9e9e)", cssProperties: "background-color: #9e9e9e !important; color: #000", example: '<div class="w3-grey w3-container"><p>Grey</p></div>', relatedClasses: ["w3-light-grey", "w3-dark-grey"] },
  { name: "w3-indigo", category: "Color", description: "Indigo background (#3f51b5)", cssProperties: "background-color: #3f51b5 !important; color: #fff", example: '<div class="w3-indigo w3-container"><p>Indigo</p></div>', relatedClasses: [] },
  { name: "w3-khaki", category: "Color", description: "Khaki background (#f0e68c)", cssProperties: "background-color: #f0e68c !important; color: #000", example: '<div class="w3-khaki w3-container"><p>Khaki</p></div>', relatedClasses: [] },
  { name: "w3-light-blue", category: "Color", description: "Light blue background (#87CEEB)", cssProperties: "background-color: #87CEEB !important; color: #000", example: '<div class="w3-light-blue w3-container"><p>Light Blue</p></div>', relatedClasses: ["w3-blue"] },
  { name: "w3-light-green", category: "Color", description: "Light green background (#90EE90)", cssProperties: "background-color: #90EE90 !important; color: #000", example: '<div class="w3-light-green w3-container"><p>Light Green</p></div>', relatedClasses: ["w3-green"] },
  { name: "w3-light-grey", category: "Color", description: "Light grey background (#f1f1f1)", cssProperties: "background-color: #f1f1f1 !important; color: #000", example: '<div class="w3-light-grey w3-container"><p>Light Grey</p></div>', relatedClasses: ["w3-grey"] },
  { name: "w3-lime", category: "Color", description: "Lime background (#cddc39)", cssProperties: "background-color: #cddc39 !important; color: #000", example: '<div class="w3-lime w3-container"><p>Lime</p></div>', relatedClasses: [] },
  { name: "w3-orange", category: "Color", description: "Orange background (#FF9800)", cssProperties: "background-color: #FF9800 !important; color: #000", example: '<div class="w3-orange w3-container"><p>Orange</p></div>', relatedClasses: ["w3-deep-orange"] },
  { name: "w3-pink", category: "Color", description: "Pink background (#e91e63)", cssProperties: "background-color: #e91e63 !important; color: #fff", example: '<div class="w3-pink w3-container"><p>Pink</p></div>', relatedClasses: [] },
  { name: "w3-purple", category: "Color", description: "Purple background (#9C27B0)", cssProperties: "background-color: #9C27B0 !important; color: #fff", example: '<div class="w3-purple w3-container"><p>Purple</p></div>', relatedClasses: ["w3-deep-purple"] },
  { name: "w3-red", category: "Color", description: "Red background (#f44336)", cssProperties: "background-color: #f44336 !important; color: #fff", example: '<div class="w3-red w3-container"><p>Red</p></div>', relatedClasses: ["w3-text-red", "w3-border-red", "w3-hover-red", "w3-pale-red"] },
  { name: "w3-sand", category: "Color", description: "Sand background (#fdf5e6)", cssProperties: "background-color: #fdf5e6 !important; color: #000", example: '<div class="w3-sand w3-container"><p>Sand</p></div>', relatedClasses: [] },
  { name: "w3-teal", category: "Color", description: "Teal background (#009688)", cssProperties: "background-color: #009688 !important; color: #fff", example: '<div class="w3-teal w3-container"><p>Teal</p></div>', relatedClasses: [] },
  { name: "w3-yellow", category: "Color", description: "Yellow background (#ffeb3b)", cssProperties: "background-color: #ffeb3b !important; color: #000", example: '<div class="w3-yellow w3-container"><p>Yellow</p></div>', relatedClasses: ["w3-pale-yellow"] },
  { name: "w3-white", category: "Color", description: "White background (#fff)", cssProperties: "background-color: #fff !important; color: #000", example: '<div class="w3-white w3-container w3-border"><p>White</p></div>', relatedClasses: [] },
  { name: "w3-black", category: "Color", description: "Black background (#000)", cssProperties: "background-color: #000 !important; color: #fff", example: '<div class="w3-black w3-container"><p>Black</p></div>', relatedClasses: ["w3-dark-grey"] },

  // PALE COLORS
  { name: "w3-pale-red", category: "Color", description: "Pale red background (#ffdddd)", cssProperties: "background-color: #ffdddd !important; color: #000", example: '<div class="w3-pale-red w3-container"><p>Pale Red</p></div>', relatedClasses: ["w3-red"] },
  { name: "w3-pale-blue", category: "Color", description: "Pale blue background (#ddffff)", cssProperties: "background-color: #ddffff !important; color: #000", example: '<div class="w3-pale-blue w3-container"><p>Pale Blue</p></div>', relatedClasses: ["w3-blue"] },
  { name: "w3-pale-green", category: "Color", description: "Pale green background (#ddffdd)", cssProperties: "background-color: #ddffdd !important; color: #000", example: '<div class="w3-pale-green w3-container"><p>Pale Green</p></div>', relatedClasses: ["w3-green"] },
  { name: "w3-pale-yellow", category: "Color", description: "Pale yellow background (#ffffcc)", cssProperties: "background-color: #ffffcc !important; color: #000", example: '<div class="w3-pale-yellow w3-container"><p>Pale Yellow</p></div>', relatedClasses: ["w3-yellow"] },

  // TYPOGRAPHY
  { name: "w3-tiny", category: "Typography", description: "10px font size", cssProperties: "font-size: 10px !important", example: '<p class="w3-tiny">Tiny text</p>', relatedClasses: ["w3-small"] },
  { name: "w3-small", category: "Typography", description: "12px font size", cssProperties: "font-size: 12px !important", example: '<p class="w3-small">Small text</p>', relatedClasses: ["w3-medium"] },
  { name: "w3-medium", category: "Typography", description: "15px font size (default)", cssProperties: "font-size: 15px !important", example: '<p class="w3-medium">Medium text</p>', relatedClasses: [] },
  { name: "w3-large", category: "Typography", description: "18px font size", cssProperties: "font-size: 18px !important", example: '<p class="w3-large">Large text</p>', relatedClasses: ["w3-xlarge"] },
  { name: "w3-xlarge", category: "Typography", description: "24px font size", cssProperties: "font-size: 24px !important", example: '<p class="w3-xlarge">XLarge text</p>', relatedClasses: ["w3-xxlarge"] },
  { name: "w3-xxlarge", category: "Typography", description: "36px font size", cssProperties: "font-size: 36px !important", example: '<p class="w3-xxlarge">XXLarge</p>', relatedClasses: ["w3-xxxlarge"] },
  { name: "w3-xxxlarge", category: "Typography", description: "48px font size", cssProperties: "font-size: 48px !important", example: '<p class="w3-xxxlarge">XXXLarge</p>', relatedClasses: ["w3-jumbo"] },
  { name: "w3-jumbo", category: "Typography", description: "64px font size", cssProperties: "font-size: 64px !important", example: '<p class="w3-jumbo">JUMBO</p>', relatedClasses: [] },
  { name: "w3-wide", category: "Typography", description: "Adds 4px letter spacing", cssProperties: "letter-spacing: 4px", example: '<p class="w3-wide">W I D E</p>', relatedClasses: [] },
  { name: "w3-serif", category: "Typography", description: "Changes font family to serif", cssProperties: "font-family: serif !important", example: '<p class="w3-serif">Serif font text</p>', relatedClasses: [] },

  // LAYOUT
  { name: "w3-row", category: "Layout", description: "Fluid row container with clearfix — use to wrap w3-col columns", cssProperties: "width: 100%; display: table", example: '<div class="w3-row"><div class="w3-col s6">Left</div><div class="w3-col s6">Right</div></div>', relatedClasses: ["w3-row-padding", "w3-col"] },
  { name: "w3-row-padding", category: "Layout", description: "Row with 8px padding on all columns inside it", cssProperties: "width: 100%", example: '<div class="w3-row-padding"><div class="w3-col m6">Col 1</div><div class="w3-col m6">Col 2</div></div>', relatedClasses: ["w3-row"] },
  { name: "w3-half", category: "Layout", description: "Column taking 50% width (responsive: 100% on small screens)", cssProperties: "width: 50%; float: left", example: '<div class="w3-row"><div class="w3-half w3-blue">Left</div><div class="w3-half w3-green">Right</div></div>', relatedClasses: ["w3-third", "w3-quarter"] },
  { name: "w3-third", category: "Layout", description: "Column taking 33.33% width", cssProperties: "width: 33.33%; float: left", example: '<div class="w3-row"><div class="w3-third w3-red">1/3</div><div class="w3-third w3-blue">1/3</div><div class="w3-third w3-green">1/3</div></div>', relatedClasses: [] },
  { name: "w3-quarter", category: "Layout", description: "Column taking 25% width", cssProperties: "width: 25%; float: left", example: '<div class="w3-row"><div class="w3-quarter w3-amber">Q1</div><div class="w3-quarter w3-teal">Q2</div><div class="w3-quarter w3-purple">Q3</div><div class="w3-quarter w3-red">Q4</div></div>', relatedClasses: [] },
  { name: "w3-twothird", category: "Layout", description: "Column taking 66.66% width", cssProperties: "width: 66.66%; float: left", example: '<div class="w3-row"><div class="w3-twothird w3-blue">2/3</div><div class="w3-third w3-green">1/3</div></div>', relatedClasses: [] },
  { name: "w3-threequarter", category: "Layout", description: "Column taking 75% width", cssProperties: "width: 75%; float: left", example: '<div class="w3-row"><div class="w3-threequarter w3-indigo">3/4</div><div class="w3-quarter w3-teal">1/4</div></div>', relatedClasses: [] },
  { name: "w3-rest", category: "Layout", description: "Column taking remaining width (overflow: hidden)", cssProperties: "overflow: hidden", example: '<div class="w3-row"><div class="w3-quarter w3-blue">Fixed</div><div class="w3-rest w3-green">Rest</div></div>', relatedClasses: [] },

  // BUTTONS
  { name: "w3-button", category: "Buttons", description: "Basic inline button — no rounded corners, no shadow", cssProperties: "display: inline-block; padding: 8px 16px; background: #e0e0e0; cursor: pointer; border: none", example: '<button class="w3-button w3-blue">Click me</button>', relatedClasses: ["w3-btn", "w3-block"] },
  { name: "w3-btn", category: "Buttons", description: "Button with border-radius and drop shadow — more prominent than w3-button", cssProperties: "display: inline-block; padding: 8px 16px; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.3)", example: '<button class="w3-btn w3-green">Submit</button>', relatedClasses: ["w3-button"] },
  { name: "w3-block", category: "Buttons", description: "Makes a button full-width (block level)", cssProperties: "width: 100% !important", example: '<button class="w3-button w3-blue w3-block">Full Width Button</button>', relatedClasses: ["w3-button"] },
  { name: "w3-disabled", category: "Buttons", description: "Makes element appear disabled — cursor not-allowed, opacity 0.3", cssProperties: "cursor: not-allowed !important; opacity: 0.3", example: '<button class="w3-button w3-blue w3-disabled">Disabled</button>', relatedClasses: [] },
  { name: "w3-ripple", category: "Buttons", description: "Adds Material Design ripple click effect", cssProperties: "position: relative; overflow: hidden", example: '<button class="w3-button w3-blue w3-ripple">Ripple</button>', relatedClasses: ["w3-button"] },

  // CARDS
  { name: "w3-card", category: "Cards", description: "Adds a card-like shadow (box-shadow equivalent to 2dp)", cssProperties: "box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.13)", example: '<div class="w3-card w3-white w3-container"><p>Card content</p></div>', relatedClasses: ["w3-card-2", "w3-card-4"] },
  { name: "w3-card-2", category: "Cards", description: "Card with 2dp elevation shadow", cssProperties: "box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.13)", example: '<div class="w3-card-2 w3-white w3-container"><p>Card 2</p></div>', relatedClasses: ["w3-card", "w3-card-4"] },
  { name: "w3-card-4", category: "Cards", description: "Card with 4dp elevation shadow — more prominent", cssProperties: "box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19)", example: '<div class="w3-card-4 w3-white w3-container"><p>Card 4</p></div>', relatedClasses: ["w3-card-8"] },
  { name: "w3-card-8", category: "Cards", description: "Card with 8dp elevation shadow", cssProperties: "box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)", example: '<div class="w3-card-8 w3-white w3-container"><p>Card 8</p></div>', relatedClasses: ["w3-card-4"] },

  // BADGES AND TAGS
  { name: "w3-badge", category: "UI", description: "Circular badge — for notifications counts, status indicators", cssProperties: "background-color: #000; color: #fff; display: inline-block; border-radius: 50%; width: 1.6em; height: 1.6em; text-align: center", example: '<span class="w3-badge w3-red">5</span>', relatedClasses: ["w3-tag"] },
  { name: "w3-tag", category: "UI", description: "Rectangular tag — for labels, keywords", cssProperties: "background-color: #000; color: #fff; display: inline-block; padding-left: 8px; padding-right: 8px; text-align: center", example: '<span class="w3-tag w3-blue">New</span>', relatedClasses: ["w3-badge", "w3-round"] },

  // TABLES
  { name: "w3-table", category: "Tables", description: "Basic styled table — borderless with alternating white rows", cssProperties: "border-collapse: collapse; border-spacing: 0; width: 100%; display: table", example: '<table class="w3-table"><tr><th>Name</th><th>Age</th></tr><tr><td>Alice</td><td>25</td></tr></table>', relatedClasses: ["w3-table-all", "w3-striped", "w3-hoverable"] },
  { name: "w3-table-all", category: "Tables", description: "Table with borders on all cells", cssProperties: "border-collapse: collapse; border: 1px solid #ccc; width: 100%", example: '<table class="w3-table-all"><tr><th>Name</th></tr><tr><td>Alice</td></tr></table>', relatedClasses: ["w3-table"] },
  { name: "w3-striped", category: "Tables", description: "Adds zebra striping to table rows", cssProperties: "tr:nth-child(even) { background-color: #f1f1f1 }", example: '<table class="w3-table-all w3-striped"><tr><td>Row 1</td></tr><tr><td>Row 2</td></tr></table>', relatedClasses: ["w3-hoverable"] },
  { name: "w3-hoverable", category: "Tables", description: "Highlights table row on hover", cssProperties: "tr:hover { background-color: #ffa }", example: '<table class="w3-table w3-hoverable"><tr><td>Hover me</td></tr></table>', relatedClasses: ["w3-striped"] },

  // IMAGES
  { name: "w3-image", category: "Images", description: "Responsive image — max-width 100%, height auto", cssProperties: "max-width: 100%; height: auto", example: '<img class="w3-image" src="photo.jpg" alt="Photo">', relatedClasses: ["w3-circle", "w3-round"] },
  { name: "w3-circle", category: "Images", description: "Makes element perfectly circular — use for avatar images", cssProperties: "border-radius: 50% !important", example: '<img class="w3-image w3-circle" src="avatar.jpg" style="width:100px">', relatedClasses: ["w3-image", "w3-round-xxlarge"] },

  // BARS
  { name: "w3-bar", category: "Navigation", description: "Horizontal navigation bar container", cssProperties: "width: 100%; overflow: hidden", example: '<div class="w3-bar w3-blue"><a href="#" class="w3-bar-item w3-button">Home</a><a href="#" class="w3-bar-item w3-button">About</a></div>', relatedClasses: ["w3-bar-item", "w3-bar-block"] },
  { name: "w3-bar-item", category: "Navigation", description: "Individual item inside a w3-bar", cssProperties: "float: left; display: inline-block; padding: 8px 16px", example: '<div class="w3-bar"><span class="w3-bar-item">Logo</span></div>', relatedClasses: ["w3-bar", "w3-button"] },
  { name: "w3-bar-block", category: "Navigation", description: "Vertical navigation bar — items stack vertically", cssProperties: "display: block !important; width: 100%", example: '<div class="w3-bar-block w3-blue" style="width:200px"><a href="#" class="w3-bar-item w3-button">Menu 1</a><a href="#" class="w3-bar-item w3-button">Menu 2</a></div>', relatedClasses: ["w3-bar", "w3-sidebar"] },

  // ANIMATIONS
  { name: "w3-animate-top", category: "Animation", description: "Slide in from top animation on load", cssProperties: "@keyframes animatetop { from: { top:-300px; opacity:0 } to: { top:0; opacity:1 } }", example: '<div class="w3-animate-top w3-blue w3-container"><p>Slides from top</p></div>', relatedClasses: ["w3-animate-bottom", "w3-animate-left"] },
  { name: "w3-animate-bottom", category: "Animation", description: "Slide in from bottom animation", cssProperties: "@keyframes animatebottom", example: '<div class="w3-animate-bottom w3-green w3-container"><p>Slides from bottom</p></div>', relatedClasses: ["w3-animate-top"] },
  { name: "w3-animate-left", category: "Animation", description: "Slide in from left animation", cssProperties: "@keyframes animateleft", example: '<div class="w3-animate-left w3-red w3-container"><p>Slides from left</p></div>', relatedClasses: ["w3-animate-right"] },
  { name: "w3-animate-right", category: "Animation", description: "Slide in from right animation", cssProperties: "@keyframes animateright", example: '<div class="w3-animate-right w3-orange w3-container"><p>Slides from right</p></div>', relatedClasses: ["w3-animate-left"] },
  { name: "w3-animate-opacity", category: "Animation", description: "Fade in from transparent to opaque", cssProperties: "@keyframes opac { from: { opacity:0 } to: { opacity:1 } }", example: '<div class="w3-animate-opacity w3-purple w3-container"><p>Fades in</p></div>', relatedClasses: ["w3-animate-fading"] },
  { name: "w3-animate-zoom", category: "Animation", description: "Zoom in from small to full size", cssProperties: "@keyframes animatezoom { from: { transform: scale(0) } to: { transform: scale(1) } }", example: '<div class="w3-animate-zoom w3-teal w3-container"><p>Zooms in</p></div>', relatedClasses: [] },
  { name: "w3-animate-fading", category: "Animation", description: "Continuously fades in and out (infinite)", cssProperties: "@keyframes fading { 0% { opacity:0 } 50% { opacity:1 } 100% { opacity:0 } }", example: '<div class="w3-animate-fading w3-yellow w3-container"><p>Fading...</p></div>', relatedClasses: ["w3-animate-opacity"] },
  { name: "w3-animate-input", category: "Animation", description: "Expands input field width on focus", cssProperties: "@keyframes animateinput { from: { width: 0 } to: { width: 100% } }", example: '<input class="w3-animate-input w3-input" type="text" placeholder="Click me">', relatedClasses: [] },
  { name: "w3-spin", category: "Animation", description: "Continuously spins the element 360 degrees", cssProperties: "@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }", example: '<i class="w3-spin" style="font-size:48px">⚙</i>', relatedClasses: [] },

  // MODALS
  { name: "w3-modal", category: "Modal", description: "Full-screen modal overlay (hidden by default with display:none)", cssProperties: "z-index: 3; display: none; padding-top: 100px; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.4)", example: '<div id="myModal" class="w3-modal"><div class="w3-modal-content"><p>Modal content</p></div></div>', relatedClasses: ["w3-modal-content"] },
  { name: "w3-modal-content", category: "Modal", description: "The inner container of a modal — centered white box", cssProperties: "margin: auto; background-color: #fff; position: relative; padding: 0; outline: 0; width: 600px", example: '<div class="w3-modal"><div class="w3-modal-content w3-card-4"><p>Hello modal!</p></div></div>', relatedClasses: ["w3-modal"] },

  // PROGRESS BARS
  { name: "w3-progressbar", category: "UI", description: "Progress bar inner fill element", cssProperties: "height: 24px; background-color: #2196F3", example: '<div class="w3-light-grey"><div class="w3-container w3-blue w3-progressbar" style="width:70%"><p>70%</p></div></div>', relatedClasses: [] },

  // INPUTS
  { name: "w3-input", category: "Forms", description: "Full-width input with bottom-border style (Material Design)", cssProperties: "width: 100%; padding: 12px 20px; border: none; border-bottom: 1px solid #ccc", example: '<input class="w3-input" type="text" placeholder="Enter name">', relatedClasses: ["w3-select"] },
  { name: "w3-select", category: "Forms", description: "Styled select/dropdown input", cssProperties: "width: 100%; padding: 9px 0; border: none; border-bottom: 1px solid #ccc", example: '<select class="w3-select"><option>Option 1</option></select>', relatedClasses: ["w3-input"] },
  { name: "w3-check", category: "Forms", description: "Styled checkbox input", cssProperties: "width: 24px; height: 24px", example: '<input class="w3-check" type="checkbox">', relatedClasses: ["w3-radio"] },
  { name: "w3-radio", category: "Forms", description: "Styled radio button input", cssProperties: "width: 24px; height: 24px", example: '<input class="w3-radio" type="radio">', relatedClasses: ["w3-check"] },

  // LISTS
  { name: "w3-ul", category: "Lists", description: "Styled unordered list with border between items", cssProperties: "list-style-type: none; padding: 0; margin: 0", example: '<ul class="w3-ul w3-border"><li class="w3-padding">Alice</li><li class="w3-padding">Bob</li></ul>', relatedClasses: [] },

  // DISPLAY
  { name: "w3-show", category: "Display", description: "Makes element visible (display: block)", cssProperties: "display: block !important", example: '<div class="w3-show">Visible</div>', relatedClasses: ["w3-hide"] },
  { name: "w3-hide", category: "Display", description: "Hides element (display: none)", cssProperties: "display: none !important", example: '<div class="w3-hide">Hidden</div>', relatedClasses: ["w3-show"] },
  { name: "w3-display-middle", category: "Display", description: "Positions element at exact center of its parent", cssProperties: "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)", example: '<div style="position:relative;height:200px;background:#ddd"><div class="w3-display-middle">CENTERED</div></div>', relatedClasses: [] },
  { name: "w3-display-topleft", category: "Display", description: "Positions element at top-left of parent", cssProperties: "position: absolute; top: 0; left: 0", example: '<div style="position:relative;height:100px;background:#ddd"><div class="w3-display-topleft">TL</div></div>', relatedClasses: ["w3-display-topright"] },
  { name: "w3-display-topright", category: "Display", description: "Positions element at top-right of parent", cssProperties: "position: absolute; top: 0; right: 0", example: '<div style="position:relative;height:100px;background:#ddd"><div class="w3-display-topright">TR</div></div>', relatedClasses: ["w3-display-topleft"] },
  { name: "w3-display-bottomleft", category: "Display", description: "Positions element at bottom-left of parent", cssProperties: "position: absolute; bottom: 0; left: 0", example: '<div style="position:relative;height:100px;background:#ddd"><div class="w3-display-bottomleft">BL</div></div>', relatedClasses: [] },
  { name: "w3-display-bottomright", category: "Display", description: "Positions element at bottom-right of parent", cssProperties: "position: absolute; bottom: 0; right: 0", example: '<div style="position:relative;height:100px;background:#ddd"><div class="w3-display-bottomright">BR</div></div>', relatedClasses: [] },
  { name: "w3-display-topmiddle", category: "Display", description: "Positions element at top-center of parent", cssProperties: "position: absolute; top: 0; left: 50%; transform: translateX(-50%)", example: '<div style="position:relative;height:100px;background:#ddd"><div class="w3-display-topmiddle">TM</div></div>', relatedClasses: [] },
  { name: "w3-display-bottommiddle", category: "Display", description: "Positions element at bottom-center of parent", cssProperties: "position: absolute; bottom: 0; left: 50%; transform: translateX(-50%)", example: '<div style="position:relative;height:100px;background:#ddd"><div class="w3-display-bottommiddle">BM</div></div>', relatedClasses: [] },
  { name: "w3-display-left", category: "Display", description: "Positions element at middle-left of parent", cssProperties: "position: absolute; top: 50%; left: 0; transform: translateY(-50%)", example: '<div style="position:relative;height:100px;background:#ddd"><div class="w3-display-left">ML</div></div>', relatedClasses: [] },
  { name: "w3-display-right", category: "Display", description: "Positions element at middle-right of parent", cssProperties: "position: absolute; top: 50%; right: 0; transform: translateY(-50%)", example: '<div style="position:relative;height:100px;background:#ddd"><div class="w3-display-right">MR</div></div>', relatedClasses: [] },

  // RESPONSIVE
  { name: "w3-hide-small", category: "Responsive", description: "Hides element on small screens (<601px)", cssProperties: "@media (max-width:600px) { display: none }", example: '<p class="w3-hide-small">Hidden on mobile</p>', relatedClasses: ["w3-hide-medium", "w3-hide-large"] },
  { name: "w3-hide-medium", category: "Responsive", description: "Hides element on medium screens (601–992px)", cssProperties: "@media (min-width:601px) and (max-width:992px) { display: none }", example: '<p class="w3-hide-medium">Hidden on tablet</p>', relatedClasses: [] },
  { name: "w3-hide-large", category: "Responsive", description: "Hides element on large screens (>992px)", cssProperties: "@media (min-width:993px) { display: none }", example: '<p class="w3-hide-large">Hidden on desktop</p>', relatedClasses: [] },
  { name: "w3-mobile", category: "Responsive", description: "Makes element full-width on mobile screens", cssProperties: "@media (max-width:600px) { display: block; width: 100% }", example: '<a class="w3-bar-item w3-button w3-mobile" href="#">Mobile Full Width</a>', relatedClasses: [] },
  { name: "w3-responsive", category: "Responsive", description: "Creates a horizontally scrollable container — used to wrap tables on mobile", cssProperties: "overflow-x: auto", example: '<div class="w3-responsive"><table class="w3-table-all">...</table></div>', relatedClasses: [] },
  // ... (all remaining classes follow same pattern)
];
```

This data file powers:

1. The W3ClassDemo component in lessons
2. The Class Inspector sidebar in the compiler
3. A searchable reference page at /reference/w3css

---

## QUALITY REQUIREMENTS

- Zero placeholder content in any chapter
- Every W3.CSS class from the official reference covered in a lesson
- The W3ClassDemo component used for EVERY class in EVERY section
- Live preview auto-loads W3.CSS — no manual CDN link needed in exercises
- Every quiz: 8+ questions with detailed explanations
- Every chapter: 3 exercises (Easy: use a single class; Medium: combine classes; Hard: build a real UI component)
- Certificate issues after all 55 chapters + all quizzes ≥80%
- Track color: #04AA6D (W3Schools green)
- Track icon: W3.CSS logo or "W3" styled badge
