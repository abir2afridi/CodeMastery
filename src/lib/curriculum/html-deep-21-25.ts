import type { Chapter } from "./types";

// ============================================================================
// HTML CHAPTER 21 — WEB ACCESSIBILITY BASICS
// ============================================================================
export const htmlCh21: Chapter = {
  id: "html-ch-21",
  number: 21,
  title: "Web Accessibility Basics",
  subtitle: "Why accessibility matters and who it helps.",
  difficulty: "Intermediate",
  estimatedMinutes: 40,
  xpReward: 120,
  prerequisites: ["html-ch-20"],
  partLabel: "Part 4: Accessibility",
  learningObjectives: [
    "Explain what web accessibility (a11y) means and why it matters.",
    "Identify the different groups of people who benefit from accessible design.",
    "Understand the legal and business case for accessibility.",
    "Recognize that accessibility is part of quality, not an add-on.",
    "Avoid common misconceptions about accessibility.",
  ],
  sections: [
    {
      id: "ch21-s1",
      title: "What is Web Accessibility?",
      whyItMatters: "Accessibility isn't a niche concern — it's fundamental to good web development. An inaccessible site excludes millions of potential users and creates legal risk. Understanding a11y basics changes how you approach every project.",
      realWorldAnalogy: "Think of accessibility like wheelchair ramps in buildings. A ramp doesn't just help wheelchair users — it also helps parents with strollers, delivery workers with carts, and anyone with temporary injuries. Good accessibility helps everyone, not just the target group.",
      content: `Web accessibility (often abbreviated as a11y, where '11' represents the eleven letters between 'a' and 'y') means designing and developing websites so that people with disabilities can use them. This includes people with visual, auditory, motor, cognitive, and neurological disabilities.

**The four principles of accessibility (from WCAG):**
- **Perceivable**: Users must be able to perceive the information being presented. Text alternatives for images, captions for videos, proper color contrast.
- **Operable**: Users must be able to operate the interface. Keyboard navigation, enough time to read and use content, no flashing content that causes seizures.
- **Understandable**: Users must be able to understand the information and the interface. Clear language, consistent navigation, error identification and suggestions.
- **Robust**: Content must be robust enough to be interpreted by a wide variety of user agents, including assistive technologies. Valid HTML, proper ARIA use.

**Who benefits from accessibility?**
- **Visual impairments**: Blind users use screen readers; low-vision users use screen magnification; colorblind users need sufficient contrast.
- **Hearing impairments**: Deaf users need captions for video and visual indicators for audio.
- **Motor impairments**: Users with limited mobility may use keyboard-only navigation, voice control, or adaptive switches.
- **Cognitive disabilities**: Users with ADHD, dyslexia, or autism benefit from clear language, consistent layout, and reduced distractions.

**But accessibility helps everyone:**
- Mobile users benefit from keyboard navigation and clear touch targets
- Older users benefit from larger text and clear contrast
- Non-native speakers benefit from clear language and visual cues
- Users with slow connections benefit from alt text (they can choose not to load images)
- Temporary injuries (broken arm, concussion) can affect anyone

The key insight: **accessibility is not about 'special needs' — it's about human needs.** We all have different abilities at different times in our lives.`,
      codeExamples: [
        {
          id: "ch21-s1-ex1",
          title: "Accessible vs inaccessible image",
          description: "The difference an alt attribute makes.",
          code: {
            html: `<!-- BAD: No alternative text -->
<img src="chart.png">

<!-- GOOD: Descriptive alt text -->
<img src="chart.png" alt="Bar chart showing 50% increase in sales from January to June 2024">`,
          },
          explanation: "Without alt text, a screen reader user just hears 'image' or the filename. With descriptive alt text, they understand what the image conveys. This is perceivability in action.",
          tryItPrompt: "Try adding a decorative image with an empty alt attribute (alt=\"\") to indicate it should be ignored by screen readers.",
        },
      ],
      callouts: [
        { type: "info", title: "WCAG is the standard", content: "The Web Content Accessibility Guidelines (WCAG) are the international standard for web accessibility. WCAG 2.1 is the current version, with levels A, AA, and AAA. Most organizations aim for AA compliance." },
        { type: "common-mistake", title: "Accessibility is hard", content: "Many developers think accessibility is too difficult. In reality, most accessibility issues are simple: use semantic HTML, add alt text, ensure keyboard navigation works, provide sufficient contrast. The basics are straightforward." },
      ],
    },
    {
      id: "ch21-s2",
      title: "The Legal and Business Case",
      whyItMatters: "Accessibility isn't just the right thing to do — it's legally required in many jurisdictions and makes good business sense.",
      content: `**Legal requirements:**
- **United States**: The Americans with Disabilities Act (ADA) has been interpreted to apply to websites. Many lawsuits have been filed against inaccessible sites.
- **European Union**: The European Accessibility Act requires many websites and apps to be accessible.
- **Canada**: The Accessible Canada Act and provincial laws like AODA (Ontario) require accessibility.
- **United Kingdom**: The Equality Act 2010 requires accessible services.
- **Australia**: The Disability Discrimination Act applies to websites.

Even without specific laws, discrimination against people with disabilities is illegal in many countries. An inaccessible website can be considered discrimination.

**The business case:**
- **Market size**: Over 1 billion people worldwide have some form of disability. That's 15% of the global population.
- **Purchasing power**: In the US alone, the disposable income of people with disabilities is estimated at $490 billion.
- **SEO benefits**: Many accessibility practices (semantic HTML, alt text, clear headings) also improve search engine rankings.
- **Better UX for everyone**: Accessible sites are typically cleaner, faster, and easier to use for everyone.
- **Reduced maintenance**: Semantic, accessible code is easier to maintain and debug.
- **Future-proofing**: Accessible sites work better across devices and assistive technologies.

**The cost of inaccessibility:**
- Lost customers and revenue
- Legal costs and settlements
- Damage to brand reputation
- Cost of retrofitting (fixing accessibility later is more expensive than building it in)

The bottom line: **accessibility is not a charity project or a nice-to-have. It's a fundamental aspect of quality that affects your bottom line.**`,
      callouts: [
        { type: "info", title: "Start early", content: "Building accessibility in from the start is much cheaper than retrofitting later. The cost of fixing accessibility issues grows exponentially as a project progresses." },
        { type: "warning", title: "Overlay solutions", content: "Beware of third-party accessibility overlays that claim to 'fix' your site automatically. These are widely criticized by the accessibility community and often create more problems than they solve. Real accessibility requires human testing and thoughtful design." },
      ],
    },
  ],
  exercises: [
    {
      id: "ch21-ex1",
      title: "Audit a page for basic accessibility",
      difficulty: 1,
      description: "Review a simple HTML page and identify accessibility issues.",
      requirements: ["Check for missing alt text on images", "Verify heading hierarchy is logical", "Check color contrast (visually)", "Ensure form inputs have labels", "Test keyboard navigation"],
      starterCode: {
        html: `<!DOCTYPE html>
<html>
  <head>
    <title>Contact Us</title>
  </head>
  <body>
    <h1>Contact Us</h1>
    <h3>Email</h3>
    <p>info@example.com</p>
    <h4>Phone</h4>
    <p>555-1234</p>
    
    <img src="office.jpg">
    
    <form>
      Name: <input type="text">
      Email: <input type="email">
      <button>Submit</button>
    </form>
  </body>
</html>`,
      },
      hints: [
        "The image has no alt text",
        "Heading hierarchy skips from h1 to h3 to h4",
        "Form inputs lack associated labels",
        "There's no lang attribute on the html tag",
      ],
      solution: {
        html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Contact Us</title>
  </head>
  <body>
    <h1>Contact Us</h1>
    <h2>Email</h2>
    <p><a href="mailto:info@example.com">info@example.com</a></p>
    <h2>Phone</h2>
    <p><a href="tel:555-1234">555-1234</a></p>
    
    <img src="office.jpg" alt="Our office building on Main Street">
    
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name">
      
      <label for="email">Email:</label>
      <input type="email" id="email">
      
      <button type="submit">Submit</button>
    </form>
  </body>
</html>`,
      },
      solutionExplanation: "Added lang attribute, fixed heading hierarchy (h1→h2→h2), added descriptive alt text, added labels with for/id attributes to form inputs, made email and phone clickable links. These changes make the page significantly more accessible.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch21-q1",
        type: "mcq",
        question: "What does 'a11y' stand for?",
        options: [
          "Accessibility (11 letters between a and y)",
          "Accessibility Level 1",
          "Advanced Accessibility",
          "All Access for Everyone",
        ],
        correctAnswer: 0,
        explanation: "A11y is a numeronym for accessibility — 'a' followed by 11 letters followed by 'y'. This shorthand is commonly used in the web development community.",
        difficulty: 1,
      },
      {
        id: "ch21-q2",
        type: "mcq",
        question: "Which of the four WCAG principles means users must be able to perceive the information?",
        options: ["Operable", "Understandable", "Perceivable", "Robust"],
        correctAnswer: 2,
        explanation: "Perceivable means users must be able to perceive the information being presented (text alternatives for images, captions for video, sufficient contrast, etc.).",
        difficulty: 1,
      },
      {
        id: "ch21-q3",
        type: "true-false",
        question: "Accessibility only helps people with permanent disabilities.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. Accessibility benefits everyone: mobile users, older users, non-native speakers, users with slow connections, and anyone with temporary injuries. Good accessibility is good UX for everyone.",
        difficulty: 1,
      },
      {
        id: "ch21-q4",
        type: "mcq",
        question: "What is the primary purpose of the alt attribute on images?",
        options: [
          "To improve SEO ranking",
          "To provide a tooltip on hover",
          "To provide alternative text for screen reader users",
          "To make the image load faster",
        ],
        correctAnswer: 2,
        explanation: "The alt attribute provides alternative text that screen readers can announce to users who cannot see the image. While it does help SEO, that's a secondary benefit.",
        difficulty: 1,
      },
      {
        id: "ch21-q5",
        type: "mcq",
        question: "Why should accessibility be considered from the start of a project?",
        options: [
          "It's legally required to start early",
          "It's cheaper and easier than retrofitting later",
          "It's only possible during initial development",
          "It makes the code compile faster",
        ],
        correctAnswer: 1,
        explanation: "Building accessibility in from the start is significantly cheaper than retrofitting later. The cost of fixing accessibility issues grows as a project progresses.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Accessibility shorthand", value: "a11y" },
    { label: "WCAG principles", value: "Perceivable, Operable, Understandable, Robust" },
    { label: "Images need alt", value: "alt attribute" },
    { label: "Forms need labels", value: "label with for/id" },
    { label: "Start early", value: "Build in from day one" },
  ],
};

// ============================================================================
// HTML CHAPTER 22 — ARIA ROLES & ATTRIBUTES
// ============================================================================
export const htmlCh22: Chapter = {
  id: "html-ch-22",
  number: 22,
  title: "ARIA Roles & Attributes",
  subtitle: "When to use ARIA (and when not to).",
  difficulty: "Advanced",
  estimatedMinutes: 45,
  xpReward: 130,
  prerequisites: ["html-ch-21"],
  partLabel: "Part 4: Accessibility",
  learningObjectives: [
    "Understand what ARIA is and when it's necessary.",
    "Apply the first rule of ARIA: use semantic HTML instead when possible.",
    "Use common ARIA roles (role, aria-label, aria-describedby, aria-hidden).",
    "Avoid common ARIA anti-patterns.",
    "Know when ARIA does more harm than good.",
  ],
  sections: [
    {
      id: "ch22-s1",
      title: "What is ARIA?",
      whyItMatters: "ARIA bridges the gap between HTML and assistive technologies, but it's often misused. Understanding when to use ARIA — and when not to — is crucial for building truly accessible interfaces.",
      realWorldAnalogy: "ARIA is like adding closed captions to a movie. The movie (HTML) already has visuals and audio, but captions make it accessible to deaf viewers. However, you wouldn't add captions to a silent film that already has intertitles — that would be redundant and confusing.",
      content: `ARIA (Accessible Rich Internet Applications) is a set of attributes that define ways to make web content and web applications more accessible to people with disabilities. It supplements HTML so that browsers and assistive technologies can better understand your interface.

**The first rule of ARIA:**
If you can use a native HTML element with built-in accessibility, **do that instead of ARIA.**

Native HTML elements like \`<button>\`, \`<input>\`, \`<nav>\`, \`<header>\` already have accessibility semantics built in. A \`<div role=\"button\">\` is worse than a real \`<button>\` because:
- It doesn't get keyboard focus by default
- It doesn't trigger on Enter/Space automatically
- Screen readers may not announce it correctly
- It requires JavaScript to work
- It's more code to maintain

**When to use ARIA:**
- When HTML doesn't have an element for what you're building (e.g., a custom tab interface, a progress bar, a tree view)
- When you need to provide additional context (e.g., aria-label for navigation, aria-describedby for form help)
- When you're hiding content that shouldn't be announced (aria-hidden)
- When updating dynamic content (aria-live regions)

**Common ARIA attributes:**
- \`role\`: Defines what an element is (role=\"button\", role=\"navigation\", role=\"alert\")
- \`aria-label\`: Provides a label for an element that has no visible text
- \`aria-labelledby\`: References another element by ID to use as the label
- \`aria-describedby\`: References another element by ID that provides additional description
- \`aria-hidden=\"true\"\`: Hides content from assistive technologies (but keeps it visible)
- \`aria-live\`: Announces dynamic content changes (polite, assertive, off)
- \`aria-expanded\`: Indicates whether an expandable element is open or closed
- \`aria-current\`: Indicates the current item in a list or navigation

**The key principle: ARIA is a supplement, not a replacement.** Use semantic HTML first, add ARIA only when necessary.`,
      codeExamples: [
        {
          id: "ch22-s1-ex1",
          title: "Native HTML vs ARIA",
          description: "Why you should prefer native elements.",
          code: {
            html: `<!-- BAD: Using ARIA when native HTML works -->
<div role="button" onclick="doSomething()">Click me</div>

<!-- GOOD: Using native button -->
<button onclick="doSomething()">Click me</button>

<!-- SOMETIMES NECESSARY: ARIA for custom component -->
<div role="tab" aria-selected="true" tabindex="0">Tab 1</div>`,
          },
          explanation: "The native <button> has built-in keyboard support, screen reader announcements, and semantic meaning. The div with role=\"button\" requires extra JavaScript and still won't be as accessible. Only use ARIA when HTML doesn't have what you need.",
          tryItPrompt: "Try navigating each element with Tab. The native button is focusable and activatable with Enter/Space. The div requires custom JavaScript for basic functionality.",
        },
      ],
      callouts: [
        { type: "warning", title: "No div soup with ARIA", content: "Don't use ARIA to make div soup accessible. If you find yourself adding role=\"heading\" to a div, use <h1>-<h6> instead. ARIA should be the exception, not the rule." },
        { type: "tip", title: "Test with screen readers", content: "The only way to know if your ARIA is working is to test with actual screen readers (NVDA, JAWS, VoiceOver, Narrator). Browser DevTools can't tell you if screen readers will announce something correctly." },
      ],
    },
    {
      id: "ch22-s2",
      title: "Common ARIA Patterns",
      whyItMatters: "Certain UI patterns require ARIA because HTML doesn't have native elements for them. Knowing these patterns helps you build complex accessible interfaces.",
      content: `**Tabbed interfaces:**
Tabs need role="tablist" on the container, role="tab" on each tab button, role="tabpanel" on each panel, and aria-selected, aria-controls, and aria-labelledby to connect them.

**Modals/dialogs:**
Use the native dialog element when possible. For custom modals, you need role="dialog", aria-modal="true", and focus management (trap focus within the modal).

**Progress indicators:**
Use role="progressbar" with aria-valuenow, aria-valuemin, aria-valuemax, and aria-label.

**Alerts and notifications:**
Use role="alert" for important messages that must be announced immediately. For less urgent updates, use aria-live="polite".

**Menus:**
Menu buttons need role="menu", role="menuitem", aria-expanded, and keyboard navigation handling.

**Breadcrumbs:**
Use aria-label="Breadcrumb" on the nav, and ensure the last item (current page) is not a link.

**Carousels/sliders:**
Need role="region", aria-label, aria-live="polite" for auto-advancing content, and proper focus management.

Each of these patterns is complex. The best approach is to use well-tested accessible component libraries (like Radix UI, Headless UI, or Reach UI) rather than building from scratch unless absolutely necessary.`,
      codeExamples: [
        {
          id: "ch22-s2-ex1",
          title: "Accessible tab interface",
          description: "Basic ARIA pattern for tabs.",
          code: {
            html: `<div role="tablist" aria-label="Settings tabs">
  <button role="tab" aria-selected="true" aria-controls="panel1" id="tab1">
    General
  </button>
  <button role="tab" aria-selected="false" aria-controls="panel2" id="tab2">
    Privacy
  </button>
</div>

<div role="tabpanel" id="panel1" aria-labelledby="tab1">
  General settings content...
</div>

<div role="tabpanel" id="panel2" aria-labelledby="tab2" hidden>
  Privacy settings content...
</div>`,
          },
          explanation: "The tablist contains tabs with role=\"tab\". aria-selected indicates which is active. aria-controls links each tab to its panel. Each panel has role=\"tabpanel\" and aria-labelledby referencing its tab. JavaScript would handle showing/hiding panels and updating aria-selected.",
          tryItPrompt: "Note that this is just the HTML structure. Real tabs need JavaScript to handle keyboard navigation (arrow keys), activation, and aria-selected updates.",
        },
      ],
      callouts: [
        { type: "info", title: "Use native dialog when possible", content: "The <dialog> element has built-in accessibility features including focus trapping and backdrop handling. Prefer it over custom modal implementations with ARIA." },
        { type: "common-mistake", title: "Forgetting keyboard support", content: "ARIA provides semantics but doesn't add behavior. If you add role=\"tab\", you must also implement keyboard navigation (arrow keys, Enter/Space to activate). ARIA without JavaScript is just noise." },
      ],
    },
  ],
  exercises: [
    {
      id: "ch22-ex1",
      title: "Replace ARIA with native HTML where possible",
      difficulty: 1,
      description: "Review code that overuses ARIA and replace it with native HTML elements.",
      requirements: ["Replace ARIA roles with native HTML elements where possible", "Keep ARIA only where native HTML doesn't provide the needed semantics", "Ensure the functionality remains the same"],
      starterCode: {
        html: `<div role="navigation" aria-label="Main">
  <a href="/" role="link">Home</a>
  <a href="/about" role="link">About</a>
</div>

<div role="heading" aria-level="1">Page Title</div>

<div role="button" onclick="submitForm()">Submit</div>

<input type="text" aria-required="true" aria-label="Name">
<input type="checkbox" role="checkbox" aria-checked="false">`,
      },
      hints: [
        "There's a native <nav> element for navigation",
        "Native headings <h1>-<h6> exist",
        "Use <button> instead of div with role button",
        "The required attribute is better than aria-required",
        "Checkbox input has built-in role",
      ],
      solution: {
        html: `<nav aria-label="Main">
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>

<h1>Page Title</h1>

<button onclick="submitForm()">Submit</button>

<input type="text" required aria-label="Name">
<input type="checkbox">`,
      },
      solutionExplanation: "Replaced role=\"navigation\" with <nav>, role=\"heading\" with <h1>, role=\"button\" with <button>. Used the native required attribute instead of aria-required. Removed redundant role=\"checkbox\" from checkbox input. The native elements have built-in accessibility that ARIA can't fully replicate.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch22-q1",
        type: "mcq",
        question: "What is the first rule of ARIA?",
        options: [
          "Always use ARIA for better accessibility",
          "Use native HTML instead of ARIA when possible",
          "ARIA must be used on every element",
          "ARIA is deprecated and should not be used",
        ],
        correctAnswer: 1,
        explanation: "The first rule of ARIA is: if you can use a native HTML element with built-in accessibility, use that instead of ARIA. Native elements have better support and require less code.",
        difficulty: 1,
      },
      {
        id: "ch22-q2",
        type: "mcq",
        question: "Which ARIA attribute provides a label for an element with no visible text?",
        options: ["aria-labelledby", "aria-label", "aria-describedby", "aria-hidden"],
        correctAnswer: 1,
        explanation: "aria-label provides a label directly on the element. Use aria-labelledby when you want to reference another element by ID to use as the label.",
        difficulty: 1,
      },
      {
        id: "ch22-q3",
        type: "true-false",
        question: "A <div role=\"button\"> is equivalent to a native <button> element.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. A div with role=\"button\" lacks built-in keyboard focus, Enter/Space activation, and proper screen reader announcements. It requires extra JavaScript and is still less accessible than a native button.",
        difficulty: 1,
      },
      {
        id: "ch22-q4",
        type: "mcq",
        question: "When should you use aria-hidden=\"true\"?",
        options: [
          "To hide elements from everyone",
          "To hide decorative content from assistive technologies only",
          "To hide elements from search engines",
          "To make elements invisible on screen",
        ],
        correctAnswer: 1,
        explanation: "aria-hidden=\"true\" hides content from assistive technologies (screen readers) but keeps it visible visually. Use it for decorative icons, repeated content, or elements that provide no semantic value.",
        difficulty: 2,
      },
      {
        id: "ch22-q5",
        type: "mcq",
        question: "What does aria-live do?",
        options: [
          "Makes content animate",
          "Announces dynamic content changes to screen readers",
          "Keeps content always visible",
          "Enables live video streaming",
        ],
        correctAnswer: 1,
        explanation: "aria-live regions announce dynamic content changes to screen reader users. Use aria-live=\"polite\" for most updates and aria-live=\"assertive\" for critical alerts that must interrupt immediately.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "First rule", value: "Use native HTML first" },
    { label: "Provide labels", value: "aria-label, aria-labelledby" },
    { label: "Additional info", value: "aria-describedby" },
    { label: "Hide from AT", value: "aria-hidden" },
    { label: "Dynamic updates", value: "aria-live" },
    { label: "ARIA is supplement", value: "Not replacement for HTML" },
  ],
};

// ============================================================================
// HTML CHAPTER 23 — KEYBOARD NAVIGATION
// ============================================================================
export const htmlCh23: Chapter = {
  id: "html-ch-23",
  number: 23,
  title: "Keyboard Navigation",
  subtitle: "tabindex, focus management.",
  difficulty: "Advanced",
  estimatedMinutes: 40,
  xpReward: 120,
  prerequisites: ["html-ch-22"],
  partLabel: "Part 4: Accessibility",
  learningObjectives: [
    "Understand the default keyboard navigation order in HTML.",
    "Use tabindex to modify focus behavior appropriately.",
    "Manage focus in custom components (modals, tabs, dropdowns).",
    "Implement focus trapping for modals.",
    "Avoid common keyboard navigation anti-patterns.",
  ],
  sections: [
    {
      id: "ch23-s1",
      title: "How Keyboard Navigation Works",
      whyItMatters: "Many users cannot or choose not to use a mouse. If your site doesn't work with a keyboard, it's completely inaccessible to these users. Keyboard navigation is also a power user feature that everyone appreciates.",
      realWorldAnalogy: "Keyboard navigation is like using arrow keys to navigate a spreadsheet instead of clicking each cell. Once you learn the shortcuts, it's often faster and more efficient than using a mouse.",
      content: `By default, browsers provide keyboard navigation for certain elements:
- **Tab/Shift+Tab**: Moves focus between focusable elements (links, buttons, form inputs, etc.)
- **Enter/Space**: Activates the focused element (buttons, links, checkboxes)
- **Arrow keys**: Navigate within certain elements (radio buttons, select dropdowns)
- **Escape**: Closes modals, menus, or cancels operations

**Default focusable elements:**
- \`<a>\` with href
- \`<button>\`
- \`<input>\` and \`<textarea>\`
- \`<select>\`
- Elements with \`tabindex=\"0\"\` or positive tabindex

**The focus order:**
Browsers navigate focus in DOM order (the order elements appear in HTML). This is usually the right order, but sometimes you need to adjust it.

**tabindex values:**
- \`tabindex=\"-1\"\`: Element can be focused programmatically (with JavaScript) but not with Tab
- \`tabindex=\"0\"\`: Element is focusable in natural DOM order (use this to make non-interactive elements focusable)
- Positive tabindex (1, 2, 3...): Element is focusable in explicit order (AVOID THIS - it breaks natural navigation)

**Best practice:** Never use positive tabindex values. If the DOM order doesn't match visual order, fix the HTML order instead. Use tabindex=\"0\" to make custom interactive elements focusable, and tabindex=\"-1\" for elements that should only receive focus programmatically.`,
      codeExamples: [
        {
          id: "ch23-s1-ex1",
          title: "Making a custom element focusable",
          description: "Using tabindex to enable keyboard focus on a custom component.",
          code: {
            html: `<!-- Before: custom div not keyboard accessible -->
<div class="card" onclick="showDetails()">View Details</div>

<!-- After: focusable with tabindex -->
<div class="card" tabindex="0" onclick="showDetails()" onkeydown="handleKeydown(event)">
  View Details
</div>

<script>
function handleKeydown(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    showDetails();
  }
}
</script>`,
          },
          explanation: "Adding tabindex=\"0\" makes the div focusable with Tab. The onkeydown handler ensures Enter and Space activate it just like a real button. For this use case, a real <button> would be better, but this pattern is useful for custom components.",
          tryItPrompt: "Try tabbing to each element. The first div is not focusable. The second div receives focus and can be activated with Enter/Space.",
        },
      ],
      callouts: [
        { type: "warning", title: "Avoid positive tabindex", content: "Never use tabindex=\"1\", tabindex=\"2\", etc. This creates an explicit focus order that breaks natural navigation and confuses users. If focus order is wrong, fix the HTML order instead." },
        { type: "tip", title: "Focus outline is important", content: "Never remove the focus outline (the blue ring around focused elements) with CSS unless you provide an alternative visible focus indicator. Users need to know which element has focus." },
      ],
    },
    {
      id: "ch23-s2",
      title: "Focus Management in Custom Components",
      whyItMatters: "Custom components like modals, tabs, and dropdowns need special focus handling to be accessible. You must manage where focus goes when these components open and close.",
      content: `**Focus trapping (modals):**
When a modal opens, focus should move into it and be trapped there — Tab should cycle within the modal, not escape to the page behind it. When the modal closes, focus should return to the element that opened it.

**Focus restoration:**
Always return focus to where it was before opening a focus-trapping component. This prevents keyboard users from losing their place.

**Managing focus in tabs:**
- When tabs are activated, focus should move to the active tab's panel
- Use aria-selected to indicate which tab is active
- Ensure arrow keys navigate between tabs

**Managing focus in dropdowns:**
- When dropdown opens, focus first item
- Arrow keys navigate items
- Enter/Space selects item
- Escape closes dropdown and returns focus to trigger button

**The focus() method:**
JavaScript's element.focus() programmatically sets focus. Use this to:
- Move focus into a modal when it opens
- Return focus to the trigger when a modal closes
- Move focus to the first error in a form after validation

**Focus visible vs focus:**
The :focus pseudo-class applies whenever an element has focus. The :focus-visible pseudo-class only applies when focus should be visibly indicated (keyboard navigation, not mouse clicks). This lets you hide the focus ring for mouse users while keeping it for keyboard users.`,
      codeExamples: [
        {
          id: "ch23-s2-ex1",
          title: "Focus trap for modal",
          description: "Basic pattern for trapping focus in a modal.",
          code: {
            html: `<div id="modal" role="dialog" aria-modal="true" hidden>
  <h2>Modal Title</h2>
  <button id="close-btn">Close</button>
  <button id="save-btn">Save</button>
</div>

<button id="open-btn">Open Modal</button>

<script>
const modal = document.getElementById('modal');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const saveBtn = document.getElementById('save-btn');
const focusableElements = modal.querySelectorAll('button');

let previousFocus;

openBtn.addEventListener('click', () => {
  previousFocus = document.activeElement;
  modal.hidden = false;
  focusableElements[0].focus();
});

function closeModal() {
  modal.hidden = true;
  previousFocus.focus();
}

closeBtn.addEventListener('click', closeModal);
saveBtn.addEventListener('click', closeModal);
</script>`,
          },
          explanation: "When the modal opens, we save the previously focused element, show the modal, and focus the first focusable element inside. When closing, we return focus to where it was. This is a simplified example — real focus traps also handle Tab cycling within the modal.",
          tryItPrompt: "Click Open Modal, then try tabbing. In this simple version, Tab might escape the modal. A full implementation would trap focus within the modal.",
        },
      ],
      callouts: [
        { type: "info", title: "Use native dialog", content: "The <dialog> element has built-in focus trapping. If you use <dialog>, the browser handles focus management automatically. Only implement custom focus trapping for components that can't use <dialog>." },
        { type: "common-mistake", title: "Forgetting focus restoration", content: "Always return focus to the element that opened a modal/dropdown when it closes. If you don't, keyboard users lose their place and have to Tab through the entire page again." },
      ],
    },
  ],
  exercises: [
    {
      id: "ch23-ex1",
      title: "Make a custom component keyboard accessible",
      difficulty: 1,
      description: "Add keyboard navigation to a custom card component that acts like a button.",
      requirements: ["Add tabindex=\"0\" to make it focusable", "Add keyboard event handler for Enter and Space", "Ensure the same action triggers on click and keyboard", "Add visual focus indicator with CSS"],
      starterCode: {
        html: `<style>
  .card {
    padding: 20px;
    border: 1px solid #ccc;
    cursor: pointer;
  }
</style>

<div class="card" onclick="alert('Card clicked!')">
  <h3>Card Title</h3>
  <p>Card content...</p>
</div>`,
      },
      hints: [
        "Add tabindex=\"0\" to the div",
        "Add onkeydown to handle keyboard events",
        "Check for event.key === 'Enter' or event.key === ' '",
        "Call event.preventDefault() to prevent scrolling with Space",
      ],
      solution: {
        html: `<style>
  .card {
    padding: 20px;
    border: 1px solid #ccc;
    cursor: pointer;
  }
  .card:focus {
    outline: 3px solid #0066cc;
    outline-offset: 2px;
  }
</style>

<div class="card" tabindex="0" onclick="alert('Card clicked!')" onkeydown="handleCardKeydown(event)">
  <h3>Card Title</h3>
  <p>Card content...</p>
</div>

<script>
function handleCardKeydown(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    alert('Card clicked!');
  }
}
</script>`,
      },
      solutionExplanation: "tabindex=\"0\" makes the card focusable. The onkeydown handler checks for Enter or Space, prevents default (to stop Space from scrolling), and triggers the same action as click. CSS :focus provides a visible focus indicator. Now the card works with keyboard like a real button.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch23-q1",
        type: "mcq",
        question: "What does tabindex=\"-1\" do?",
        options: [
          "Removes the element from the document",
          "Makes element unfocusable even with JavaScript",
          "Allows element to be focused programmatically but not with Tab",
          "Makes element focus before all other elements",
        ],
        correctAnswer: 2,
        explanation: "tabindex=\"-1\" means the element can receive focus via JavaScript (element.focus()), but it's skipped in the normal Tab navigation order. This is useful for elements that should only receive focus when you explicitly set it.",
        difficulty: 1,
      },
      {
        id: "ch23-q2",
        type: "mcq",
        question: "Why should you avoid positive tabindex values (1, 2, 3...)?",
        options: [
          "They don't work in all browsers",
          "They break the natural DOM navigation order and confuse users",
          "They make elements unfocusable",
          "They are deprecated in HTML5",
        ],
        correctAnswer: 1,
        explanation: "Positive tabindex values create an explicit focus order that overrides the natural DOM order. This breaks accessibility and confuses users who expect logical navigation order. Fix the HTML order instead.",
        difficulty: 1,
      },
      {
        id: "ch23-q3",
        type: "true-false",
        question: "When a modal closes, you should return focus to the element that opened it.",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation: "True. Focus restoration is critical for accessibility. When a modal closes, return focus to the trigger element so keyboard users don't lose their place and don't have to Tab through the entire page again.",
        difficulty: 1,
      },
      {
        id: "ch23-q4",
        type: "mcq",
        question: "Which keyboard keys typically activate a focused button?",
        options: ["Only Enter", "Only Space", "Enter and Space", "Only Tab"],
        correctAnswer: 2,
        explanation: "Both Enter and Space activate buttons. Enter is the standard for buttons, and Space is also supported for consistency with other interactive elements. Custom button-like components should handle both.",
        difficulty: 1,
      },
      {
        id: "ch23-q5",
        type: "mcq",
        question: "What is focus trapping in the context of modals?",
        options: [
          "Preventing users from opening modals",
          "Keeping keyboard focus within the modal while it's open",
          "Disabling keyboard navigation entirely",
          "Making modal content unfocusable",
        ],
        correctAnswer: 1,
        explanation: "Focus trapping means that while a modal is open, Tab cycles through focusable elements within the modal and never escapes to the page behind it. This keeps keyboard users contextually within the modal interaction.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Natural focus order", value: "Follow DOM order" },
    { label: "Make focusable", value: "tabindex=0" },
    { label: "Programmatic focus only", value: "tabindex=-1" },
    { label: "Avoid positive tabindex", value: "Never use 1, 2, 3..." },
    { label: "Focus restoration", value: "Return focus on close" },
    { label: "Activation keys", value: "Enter and Space" },
  ],
};

// ============================================================================
// HTML CHAPTER 24 — SCREEN READERS
// ============================================================================
export const htmlCh24: Chapter = {
  id: "html-ch-24",
  number: 24,
  title: "Screen Readers",
  subtitle: "How blind users browse the web.",
  difficulty: "Intermediate",
  estimatedMinutes: 35,
  xpReward: 110,
  prerequisites: ["html-ch-23"],
  partLabel: "Part 4: Accessibility",
  learningObjectives: [
    "Understand what screen readers are and how they work.",
    "Learn common screen reader commands and navigation patterns.",
    "Write HTML that works well with screen readers.",
    "Test your sites with screen reader simulation tools.",
    "Avoid common screen reader pitfalls.",
  ],
  sections: [
    {
      id: "ch24-s1",
      title: "What is a Screen Reader?",
      whyItMatters: "Screen readers are the primary tool blind and visually impaired users use to access the web. If your site doesn't work with screen readers, it's completely inaccessible to these users.",
      realWorldAnalogy: "A screen reader is like having someone read a book aloud to you, but you can ask them to skip to the next heading, find all links, or read only the navigation. It converts visual information into audio or braille output.",
      content: `A screen reader is software that reads aloud the content displayed on a computer screen. It's used by people who are blind, have low vision, or have reading disabilities. Screen readers can also output to braille displays for deaf-blind users.

**Popular screen readers:**
- **NVDA (NonVisual Desktop Access)**: Free, open-source, Windows. Widely used for testing.
- **JAWS (Job Access With Speech)**: Commercial, Windows. Very popular in enterprise environments.
- **VoiceOver**: Built into macOS and iOS. The screen reader most mobile developers need to understand.
- **Narrator**: Built into Windows 10/11. Improved significantly in recent years.
- **TalkBack**: Screen reader for Android.

**How screen readers work:**
Screen readers don't just read everything from top to bottom. They use the accessibility tree — a representation of your page that browsers build from your HTML. The accessibility tree includes:
- Element roles (button, heading, link, etc.)
- Names (from text content, alt, aria-label)
- States (disabled, checked, expanded, etc.)
- Relationships (parent/child, labelled by, described by)

Screen reader users navigate by:
- **H**: Jump to next heading
- **Shift+H**: Previous heading
- **Tab**: Next focusable element
- **Shift+Tab**: Previous focusable element
- **K**: Next link
- **R**: Next list item
- **B**: Next button
- **C**: Next combo box
- **1-6**: Jump to heading level 1-6
- **I**: List items
- **T**: Tables

**The key insight:** Screen readers don't see your page visually — they see the accessibility tree. Good semantic HTML creates a clear, logical accessibility tree. Bad HTML creates a confusing tree.`,
      codeExamples: [
        {
          id: "ch24-s1-ex1",
          title: "Screen reader friendly vs unfriendly structure",
          description: "How HTML structure affects screen reader navigation.",
          code: {
            html: `<!-- BAD: Everything is a div -->
<div onclick="goHome()">Home</div>
<div onclick="goAbout()">About</div>
<div class="heading">Page Title</div>
<div class="text">Content here</div>

<!-- GOOD: Semantic elements -->
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>

<h1>Page Title</h1>
<p>Content here</p>`,
          },
          explanation: "With the BAD version, a screen reader user hears nothing meaningful — just 'clickable' for each div. With the GOOD version, they can jump to navigation with a shortcut, hear 'Page Title, heading level 1', and understand the content structure.",
          tryItPrompt: "Try using a screen reader simulator or browser extension to hear the difference in how these would be announced.",
        },
      ],
      callouts: [
        { type: "info", title: "Test with real screen readers", content: "Browser extensions and simulators are helpful, but they can't replace testing with actual screen readers. NVDA (Windows) and VoiceOver (Mac) are free and essential for thorough accessibility testing." },
        { type: "common-mistake", title: "Screen readers read everything", content: "Screen readers don't read linearly from top to bottom. Users navigate by jumping between elements. Don't assume the order screen reader users encounter content is the same as visual order." },
      ],
    },
    {
      id: "ch24-s2",
      title: "Writing Screen Reader Friendly Content",
      whyItMatters: "Even with perfect HTML, your content can still be confusing for screen reader users. Writing with screen readers in mind makes your content more accessible for everyone.",
      content: `**Descriptive link text:**
Instead of 'click here' or 'read more', use descriptive link text that makes sense out of context. 'Download the accessibility guide' is better than 'click here to download'.

**Heading hierarchy:**
Screen reader users often navigate by headings. Use a logical heading hierarchy (h1 → h2 → h3) and don't skip levels. This creates a table of contents that users can navigate.

**Alt text for images:**
Provide meaningful alt text for informative images. Use empty alt text (alt=\"\") for decorative images. Don't repeat information that's already in adjacent text.

**Form labels:**
Every form input needs a label. Use the label element with the for attribute, or wrap the input in a label. Placeholder text is not a substitute for labels.

**Error messages:**
Associate error messages with form inputs using aria-describedby. When validation fails, move focus to the first invalid field and announce the error.

**Dynamic content updates:**
Use aria-live regions to announce dynamic changes (form submission success, new messages, etc.). Screen reader users won't know content changed otherwise.

**Skip links:**
Include a 'skip to main content' link at the top of the page. This lets keyboard users bypass repetitive navigation on every page.

**Landmarks:**
Use semantic elements (header, nav, main, footer, aside) to create landmarks. Screen reader users can jump between these regions with single keystrokes.`,
      codeExamples: [
        {
          id: "ch24-s2-ex1",
          title: "Accessible form with labels and error messages",
          description: "Proper form markup for screen readers.",
          code: {
            html: `<form>
  <label for="email">Email address:</label>
  <input type="email" id="email" name="email" required aria-describedby="email-error">
  <span id="email-error" role="alert" style="color: red; display: none;">
    Please enter a valid email address
  </span>
  
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required minlength="8">
  
  <button type="submit">Sign up</button>
</form>`,
          },
          explanation: "Each input has an associated label using for/id. The email input has aria-describedby linking to the error message. The error message has role='alert' so it's announced when shown. Required and minlength provide built-in validation.",
          tryItPrompt: "Try navigating this form with Tab. Notice how each input is announced with its label. The error message would be announced when displayed.",
        },
      ],
      callouts: [
        { type: "tip", title: "Test with keyboard first", content: "Before testing with a screen reader, test with just a keyboard. If you can't use your site with Tab/Enter/Escape, a screen reader user definitely can't. Keyboard accessibility is foundational." },
        { type: "common-mistake", title: "Hidden text for screen readers", content: "Don't hide meaningful content with CSS that screen readers can't access. If content is visually hidden but should be available to screen readers, use specific techniques like the sr-only CSS class pattern." },
      ],
    },
  ],
  exercises: [
    {
      id: "ch24-ex1",
      title: "Improve link text for screen readers",
      difficulty: 1,
      description: "Rewrite generic link text to be more descriptive and accessible.",
      requirements: ["Replace 'click here' and 'read more' with descriptive text", "Ensure links make sense out of context", "Keep links concise but informative"],
      starterCode: {
        html: `<p>Learn more about our products by clicking <a href="#">here</a>.</p>
<p>To download the guide, <a href="#">click here</a>.</p>
<p><a href="#">Read more</a> about accessibility best practices.</p>
<p>For pricing information, <a href="#">go to this page</a>.</p>`,
      },
      hints: [
        "Describe what the link leads to, not the action",
        "Include the destination or topic in the link text",
        "Make the link text self-contained",
        "Avoid generic words like 'here', 'this', 'that'",
      ],
      solution: {
        html: `<p>Learn more about our <a href="#">products</a>.</p>
<p><a href="#">Download the accessibility guide</a>.</p>
<p><a href="#">Read more about accessibility best practices</a>.</p>
<p>Visit our <a href="#">pricing page</a> for more information.</p>`,
      },
      solutionExplanation: "Each link now describes its destination clearly. Screen reader users can navigate through links and understand what each one leads to without needing the surrounding context. The links are also more descriptive for sighted users.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch24-q1",
        type: "mcq",
        question: "Which screen reader is built into macOS and iOS?",
        options: ["NVDA", "JAWS", "VoiceOver", "Narrator"],
        correctAnswer: 2,
        explanation: "VoiceOver is Apple's built-in screen reader for macOS and iOS. It's the screen reader mobile developers most need to understand for iOS accessibility testing.",
        difficulty: 1,
      },
      {
        id: "ch24-q2",
        type: "mcq",
        question: "What keyboard shortcut typically jumps to the next heading in most screen readers?",
        options: ["Tab", "Enter", "H", "K"],
        correctAnswer: 2,
        explanation: "The H key (for Heading) is the standard shortcut to jump to the next heading in most screen readers. Shift+H goes to the previous heading.",
        difficulty: 1,
      },
      {
        id: "ch24-q3",
        type: "true-false",
        question: "Screen readers read web pages linearly from top to bottom, just like a human reading aloud.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "False. Screen readers allow users to navigate non-linearly by jumping between elements (headings, links, landmarks, etc.). They don't read everything sequentially unless the user chooses that mode.",
        difficulty: 1,
      },
      {
        id: "ch24-q4",
        type: "mcq",
        question: "Why is 'click here' bad link text for accessibility?",
        options: [
          "It's too short",
          "It doesn't describe the destination, making it confusing out of context",
          "Screen readers can't read it",
          "It violates HTML standards",
        ],
        correctAnswer: 1,
        explanation: "'Click here' provides no information about where the link leads. Screen reader users navigating by links would hear multiple 'click here' links with no way to distinguish them. Descriptive link text is essential.",
        difficulty: 1,
      },
      {
        id: "ch24-q5",
        type: "mcq",
        question: "What is the purpose of a skip link?",
        options: [
          "To skip loading images",
          "To let keyboard users bypass repetitive navigation and jump to main content",
          "To skip validation on forms",
          "To skip to the next page",
        ],
        correctAnswer: 1,
        explanation: "Skip links (typically 'skip to main content') appear at the top of a page and let keyboard users bypass navigation menus, banners, and other repetitive content. They press Tab once and jump directly to the main content.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Screen readers", value: "Convert visual to audio/braille" },
    { label: "NVDA", value: "Free, Windows" },
    { label: "VoiceOver", value: "Built into macOS/iOS" },
    { label: "Jump to heading", value: "H key" },
    { label: "Descriptive links", value: "Avoid 'click here'" },
    { label: "Skip links", value: "Bypass repetitive nav" },
  ],
};

// ============================================================================
// HTML CHAPTER 25 — FORMS & ACCESSIBILITY
// ============================================================================
export const htmlCh25: Chapter = {
  id: "html-ch-25",
  number: 25,
  title: "Forms & Accessibility",
  subtitle: "Labels, fieldsets, error messages.",
  difficulty: "Advanced",
  estimatedMinutes: 45,
  xpReward: 130,
  prerequisites: ["html-ch-24"],
  partLabel: "Part 4: Accessibility",
  learningObjectives: [
    "Properly label all form inputs using the label element.",
    "Use fieldset and legend to group related form controls.",
    "Associate error messages with form inputs using ARIA.",
    "Provide clear instructions and validation feedback.",
    "Make forms keyboard accessible and screen reader friendly.",
  ],
  sections: [
    {
      id: "ch25-s1",
      title: "Labeling Form Controls",
      whyItMatters: "Without proper labels, screen reader users can't tell what a form field is for. Labels are the foundation of accessible forms — without them, forms are unusable for many people.",
      realWorldAnalogy: "Form labels are like the labels on medicine bottles. Without them, you wouldn't know which pill is which or what dosage to take. Labels provide essential identification that users rely on.",
      content: `Every form input needs a label. There are two ways to associate a label with an input:

**Method 1: Using the for attribute (explicit association)**
\`\`\`
<label for="email">Email address:</label>
<input type="email" id="email" name="email">
\`\`\`

The label's for attribute matches the input's id attribute. When a screen reader focuses the input, it announces the label text. When a user clicks the label, focus moves to the input.

**Method 2: Wrapping the input (implicit association)**
\`\`\`
<label>
  Email address:
  <input type="email" name="email">
</label>
\`\`\`

The input is nested inside the label. This works but has limitations:
- Can't separate label and input visually
- Some older assistive technologies don't support it well
- Explicit association (Method 1) is more robust

**Common mistakes:**
- Using placeholder as a label: Placeholder text disappears when the user starts typing and is not announced by all screen readers. Always use a real label.
- Using aria-label instead of a visible label: If you can show a label visually, do it. aria-label should be reserved for cases where a visible label isn't possible.
- Forgetting the for/id connection: The for and id values must match exactly, or the association won't work.

**Hidden labels:**
Sometimes you want a label for screen readers but not visually. Use the sr-only CSS pattern (visually hidden but still available to assistive technologies).`,
      codeExamples: [
        {
          id: "ch25-s1-ex1",
          title: "Properly labeled form",
          description: "Using labels correctly for accessibility.",
          code: {
            html: `<form>
  <label for="fullname">Full name:</label>
  <input type="text" id="fullname" name="fullname" required>
  
  <label for="email">Email address:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required minlength="8">
  <small>Must be at least 8 characters</small>
  
  <label for="country">Country:</label>
  <select id="country" name="country">
    <option value="">Select a country</option>
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="uk">United Kingdom</option>
  </select>
  
  <label for="newsletter">
    <input type="checkbox" id="newsletter" name="newsletter">
    Subscribe to newsletter
  </label>
  
  <button type="submit">Sign up</button>
</form>`,
          },
          explanation: "Each input has a properly associated label using for/id. The checkbox uses implicit association (input inside label) which is acceptable for checkboxes and radio buttons. The select has a default option indicating what to select. All required fields are marked.",
          tryItPrompt: "Try tabbing through the form. Notice how each input is announced with its label when focused. Click the label text and notice focus moves to the associated input.",
        },
      ],
      callouts: [
        { type: "warning", title: "Placeholder is not a label", content: "Never use placeholder text as a substitute for a label. Placeholder disappears when typing, isn't always announced by screen readers, and has poor contrast. Always use a real label element." },
        { type: "tip", title: "Label positioning", content: "Place labels above their inputs for better usability on mobile. This prevents labels from being cut off on small screens and is easier for everyone to scan." },
      ],
    },
    {
      id: "ch25-s2",
      title: "Grouping Related Controls",
      whyItMatters: "Complex forms can be confusing. Grouping related controls helps users understand the form structure and makes it easier for screen reader users to navigate.",
      content: `Use \`<fieldset>\` and \`<legend>\` to group related form controls:

\`\`\`
<fieldset>
  <legend>Shipping Address</legend>
  
  <label for="street">Street address:</label>
  <input type="text" id="street" name="street">
  
  <label for="city">City:</label>
  <input type="text" id="city" name="city">
  
  <label for="zip">ZIP code:</label>
  <input type="text" id="zip" name="zip">
</fieldset>
\`\`\`

The fieldset groups the related fields, and the legend provides a label for the entire group. Screen readers announce the legend when entering the fieldset.

**When to use fieldsets:**
- Related address fields (street, city, state, zip)
- Radio button groups (all options for one question)
- Checkbox groups (all options for one category)
- Sections of a long form (personal info, payment, preferences)

**Radio buttons and checkboxes:**
Always group radio buttons and checkboxes with fieldset:

\`\`\`
<fieldset>
  <legend>Preferred contact method:</legend>
  
  <label>
    <input type="radio" name="contact" value="email">
    Email
  </label>
  
  <label>
    <input type="radio" name="contact" value="phone">
    Phone
  </label>
  
  <label>
    <input type="radio" name="contact" value="mail">
    Mail
  </label>
</fieldset>
\`\`\`

This groups the options and provides context that screen readers announce.`,
      codeExamples: [
        {
          id: "ch25-s2-ex1",
          title: "Grouped form with fieldsets",
          description: "Using fieldset and legend to organize forms.",
          code: {
            html: `<form>
  <fieldset>
    <legend>Personal Information</legend>
    
    <label for="name">Full name:</label>
    <input type="text" id="name" name="name">
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
  </fieldset>
  
  <fieldset>
    <legend>Preferences</legend>
    
    <label>
      <input type="checkbox" name="pref" value="newsletter">
      Subscribe to newsletter
    </label>
    
    <label>
      <input type="checkbox" name="pref" value="updates">
      Receive product updates
    </label>
    
    <label>
      <input type="checkbox" name="pref" value="offers">
      Receive special offers
    </label>
  </fieldset>
  
  <button type="submit">Save</button>
</form>`,
          },
          explanation: "The fieldsets group related fields. Screen reader users hear 'Personal Information, group' when entering the first fieldset, and 'Preferences, group' for the second. This provides context that helps users understand the form structure.",
          tryItPrompt: "Navigate with a screen reader or use the browser's accessibility inspector to see how the fieldsets create groups in the accessibility tree.",
        },
      ],
      callouts: [
        { type: "info", title: "Legend styling", content: "The legend element can be styled with CSS, but its positioning is limited. For complex styling needs, you might need to use aria-label or aria-labelledby on the fieldset instead, though legend is preferred for accessibility." },
        { type: "common-mistake", title: "Missing fieldset for radios", content: "Radio buttons without a fieldset have no context. A screen reader user might hear 'radio button, not checked, yes' with no idea what question it's answering. Always group radio buttons with fieldset and legend." },
      ],
    },
    {
      id: "ch25-s3",
      title: "Error Messages and Validation",
      whyItMatters: "When form validation fails, users need clear, accessible error messages. Screen reader users must know which fields are invalid and what the errors are.",
      content: `**Associating error messages with inputs:**
Use \`aria-describedby\` to link an error message to its input:

\`\`\`
<label for="email">Email:</label>
<input type="email" id="email" aria-describedby="email-error">
<span id="email-error" role="alert">Please enter a valid email address</span>
\`\`\`

When the error is shown, screen readers announce it because it's linked via aria-describedby and has role=\"alert\".

**Required fields:**
Use the \`required\` attribute to mark required fields. Screen readers announce 'required' when focusing these inputs. Don't rely on asterisks alone — they're not announced by screen readers.

**Validation timing:**
- Don't show errors while the user is still typing (frustrating)
- Show errors on blur (when leaving the field) or on submit
- Clear errors when the user starts correcting them

**Focus management:**
When validation fails on form submission:
1. Show all error messages
2. Move focus to the first invalid field
3. Announce the error message

**Multiple errors:**
List all errors at the top of the form with links to each invalid field. This gives users an overview of all issues and lets them jump directly to each one.`,
      codeExamples: [
        {
          id: "ch25-s3-ex1",
          title: "Accessible form validation",
          description: "Error messages associated with inputs.",
          code: {
            html: `<form id="signup-form" novalidate>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" id="email" name="email" required aria-describedby="email-error">
    <span id="email-error" class="error" role="alert" style="display: none; color: red;">
      Please enter a valid email address
    </span>
  </div>
  
  <div class="form-group">
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required minlength="8" aria-describedby="password-error">
    <span id="password-error" class="error" role="alert" style="display: none; color: red;">
      Password must be at least 8 characters
    </span>
  </div>
  
  <button type="submit">Sign up</button>
</form>

<script>
document.getElementById('signup-form').addEventListener('submit', function(e) {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  let hasErrors = false;
  
  if (!email.validity.valid) {
    document.getElementById('email-error').style.display = 'block';
    hasErrors = true;
  }
  
  if (!password.validity.valid) {
    document.getElementById('password-error').style.display = 'block';
    if (!hasErrors) {
      password.focus();
      hasErrors = true;
    }
  }
  
  if (hasErrors) {
    e.preventDefault();
  }
});
</script>`,
          },
          explanation: "Each input has aria-describedby linking to its error message. Error messages have role='alert' so they're announced when shown. On submit, if there are errors, the first invalid field receives focus. The novalidate attribute allows custom validation instead of browser default.",
          tryItPrompt: "Try submitting the empty form. The error messages should appear and focus should move to the first invalid field. Screen readers would announce the error message.",
        },
      ],
      callouts: [
        { type: "tip", title: "Use built-in validation first", content: "HTML5 validation attributes (required, pattern, minlength, maxlength, min, max, type) are accessible and work with screen readers. Only add custom validation when HTML5 validation isn't sufficient." },
        { type: "common-mistake", title: "Color-only error indicators", content: "Never rely on color alone to indicate errors (red border, red text). Use text, icons, or other indicators in addition to color. Screen reader users won't see color changes." },
      ],
    },
  ],
  exercises: [
    {
      id: "ch25-ex1",
      title: "Make a form accessible",
      difficulty: 1,
      description: "Add proper labels, fieldsets, and error associations to an inaccessible form.",
      requirements: ["Add labels for all inputs using for/id", "Group related fields with fieldset/legend", "Associate error messages with aria-describedby", "Mark required fields with the required attribute"],
      starterCode: {
        html: `<form>
  Name: <input type="text" name="name">
  
  Email: <input type="email" name="email">
  
  <span style="color: red;">Please enter a valid email</span>
  
  Preferred contact:
  <input type="radio" name="contact" value="email"> Email
  <input type="radio" name="contact" value="phone"> Phone
  
  <button>Submit</button>
</form>`,
      },
      hints: [
        "Wrap radio buttons in fieldset with legend",
        "Add label elements with for attributes matching input ids",
        "Add id attributes to inputs",
        "Use aria-describedby to link the error message to the email input",
        "Add required attribute to required fields",
      ],
      solution: {
        html: `<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required aria-describedby="email-error">
  <span id="email-error" style="color: red;" role="alert">Please enter a valid email</span>
  
  <fieldset>
    <legend>Preferred contact:</legend>
    
    <label>
      <input type="radio" name="contact" value="email"> Email
    </label>
    
    <label>
      <input type="radio" name="contact" value="phone"> Phone
    </label>
  </fieldset>
  
  <button type="submit">Submit</button>
</form>`,
      },
      solutionExplanation: "Added label elements with for/id associations. Grouped radio buttons in fieldset with legend for context. Added aria-describedby to email input linking to error message. Added required attribute to required fields. Added role='alert' to error message for screen reader announcement.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      {
        id: "ch25-q1",
        type: "mcq",
        question: "Which attribute associates a label with an input?",
        options: ["name", "class", "for", "id"],
        correctAnswer: 2,
        explanation: "The for attribute on a label element should match the id attribute of the input it labels. This creates an explicit association that screen readers and browsers understand.",
        difficulty: 1,
      },
      {
        id: "ch25-q2",
        type: "mcq",
        question: "Why is placeholder text not a good substitute for a label?",
        options: [
          "It's not supported in modern browsers",
          "It disappears when typing and isn't always announced by screen readers",
          "It requires JavaScript",
          "It makes the form look ugly",
        ],
        correctAnswer: 1,
        explanation: "Placeholder text disappears when the user starts typing, so the label is lost. It also isn't consistently announced by screen readers and often has poor contrast. Always use a real label element.",
        difficulty: 1,
      },
      {
        id: "ch25-q3",
        type: "true-false",
        question: "Radio buttons should always be grouped with a fieldset and legend.",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation: "True. Radio buttons represent a single question with multiple options. Without a fieldset and legend, screen reader users hear each option in isolation with no context about what question they're answering.",
        difficulty: 1,
      },
      {
        id: "ch25-q4",
        type: "mcq",
        question: "Which ARIA attribute associates an error message with a form input?",
        options: ["aria-label", "aria-labelledby", "aria-describedby", "aria-invalid"],
        correctAnswer: 2,
        explanation: "aria-describedby links an element (like an error message) to another element (like an input) to provide additional description. Screen readers announce the described content when the input is focused.",
        difficulty: 1,
      },
      {
        id: "ch25-q5",
        type: "mcq",
        question: "What is the purpose of role='alert' on error messages?",
        options: [
          "To make the error message red",
          "To prevent the error from showing",
          "To announce the error message immediately to screen readers when it appears",
          "To validate the form",
        ],
        correctAnswer: 2,
        explanation: "role='alert' creates an ARIA live region with assertive priority. When the content appears or changes, screen readers interrupt whatever they're announcing to immediately announce the alert. This ensures users don't miss error messages.",
        difficulty: 2,
      },
    ],
  },
  cheatSheet: [
    { label: "Label inputs", value: "label with for=id" },
    { label: "Group related fields", value: "fieldset and legend" },
    { label: "Error messages", value: "aria-describedby" },
    { label: "Announce errors", value: "role=alert" },
    { label: "Required fields", value: "required attribute" },
    { label: "No placeholder as label", value: "Use real labels" },
  ],
};
