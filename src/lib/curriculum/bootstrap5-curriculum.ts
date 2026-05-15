import type { Track, Chapter } from "./types";

const bootstrap5ContentBn: Record<string, string> = {
  "bootstrap5-1-1": `Bootstrap 5 হলেে latest version। এতে jQuery নেই, pure JavaScript। CSS variables support করে। Offcanvas, Toast নতুন components।`,

  "bootstrap5-2-1": `Bootstrap 5 Grid ৫টি breakpoint: xs (<576px), sm (≥576px), md (≥768px), lg (≥992px), xl (≥1200px), xxl (≥1400px)। Flexbox-based।`,
};

const bootstrap5Chapters: Chapter[] = [
  {
    id: "bootstrap5-1",
    number: 1,
    partLabel: "Part 1: Getting Started",
    title: "Introduction to Bootstrap 5",
    subtitle: "Modern production-ready framework",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 50,
    prerequisites: [],
    learningObjectives: ["Understand Bootstrap 5 features", "Know key changes from BS4"],
    sections: [
      {
        id: "bootstrap5-1-1",
        title: "Bootstrap 5 Overview",
        whyItMatters: "Bootstrap 5 is the modern production version.",
        content: `Bootstrap 5 major changes:
- NO jQuery dependency - pure JavaScript
- CSS custom properties (variables) support
- New components: Offcanvas, Toasts, Accordion
- Improved grid with xxl breakpoint
- Removed: form-inline, input-group-lg/sm
- Custom icons: Bootstrap Icons (separate library)

Why Bootstrap 5:
- Faster (no jQuery overhead)
- Modern CSS features
- Better customization with CSS variables`,
        contentBn: bootstrap5ContentBn["bootstrap5-1-1"],
        codeExamples: [
          {
            id: "bs5-intro-1",
            title: "Bootstrap 5 Setup",
            description: "CDN links for Bootstrap 5",
            code: {
              html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap 5</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container mt-5">
    <h1>Hello, Bootstrap 5!</h1>
    <p>No jQuery needed!</p>
  </div>
</body>
</html>`,
            },
            explanation: "Bootstrap 5 - no JS dependencies needed for basic layout!"
          }
        ],
        callouts: [
          { type: "tip", title: "No jQuery", content: "Bootstrap 5 uses vanilla JavaScript, not jQuery!" }
        ],
        microExercise: {
          instruction: "Create basic Bootstrap 5 page",
          starterCode: { html: "<!-- Add Bootstrap 5 CDN and container -->" },
          solution: { html: `<!DOCTYPE html>\n<html>\n<head>\n  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">\n</head>\n<body>\n  <div class="container mt-5"><h1>Bootstrap 5!</h1></div>\n</body>\n</html>` }
        }
      }
    ]
  },
  {
    id: "bootstrap5-2",
    number: 2,
    partLabel: "Part 1: Core Fundamentals",
    title: "Grid System",
    subtitle: "Modern responsive grid",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 70,
    prerequisites: ["bootstrap5-1"],
    learningObjectives: ["Master Bootstrap 5 grid with xxl breakpoint"],
    sections: [
      {
        id: "bootstrap5-2-1",
        title: "Grid Breakpoints",
        whyItMatters: "Six breakpoints provide fine-grained control.",
        content: `Bootstrap 5 Grid Breakpoints:
- col- (≤575px)
- col-sm- (≥576px)
- col-md- (≥768px)
- col-lg- (≥992px)
- col-xl- (≥1200px)
- col-xxl- (≥1400px) - NEW in BS5

 gutters: g-0 to g-5`,
        contentBn: bootstrap5ContentBn["bootstrap5-2-1"],
        codeExamples: [
          {
            id: "bs5-grid-1",
            title: "Responsive Grid",
            description: "Six breakpoint grid",
            code: {
              html: `<div class="container">
  <div class="row g-4">
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1">
      <div class="p-3 bg-primary text-white">Responsive</div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1">
      <div class="p-3 bg-success text-white">Column</div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1">
      <div class="p-3 bg-warning text-dark">Grid</div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1">
      <div class="p-3 bg-danger text-white">System</div>
    </div>
  </div>
</div>`,
            },
            explanation: "Using all six breakpoints"
          }
        ],
        microExercise: {
          instruction: "Create equal columns",
          starterCode: { html: "<!-- Use col without number for auto-fit -->" },
          solution: { html: `<div class="row">\n  <div class="col"><div class="bg-primary p-3">1</div></div>\n  <div class="col"><div class="bg-primary p-3">2</div></div>\n  <div class="col"><div class="bg-primary p-3">3</div></div>\n</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap5-3",
    number: 3,
    partLabel: "Part 1: Core Fundamentals",
    title: "Containers",
    subtitle: "Layout containers",
    difficulty: "Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 50,
    prerequisites: ["bootstrap5-2"],
    learningObjectives: ["Use all container types"],
    sections: [
      {
        id: "bootstrap5-3-1",
        title: "Container Types",
        whyItMatters: "Choose right container for layout.",
        content: `Bootstrap 5 Containers:
- .container (responsive max-width)
- .container-fluid (100% always)
- .container-{breakpoint} (responsive)
- .container-xxl (100% until xxl)`,
        codeExamples: [
          {
            id: "bs5-cont-1",
            title: "Container Comparison",
            description: "All container types",
            code: {
              html: `<div class="container border mb-2">Container</div>
<div class="container-fluid border mb-2">Container Fluid</div>
<div class="container-sm border mb-2">Container SM</div>
<div class="container-xxl border">Container XXL</div>`,
            },
            explanation: "Compare container behaviors"
          }
        ],
        microExercise: {
          instruction: "Create responsive container",
          starterCode: { html: "<!-- Use container-lg -->" },
          solution: { html: `<div class="container-lg bg-light p-3">Responsive Container</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap5-4",
    number: 4,
    partLabel: "Part 1: Core Fundamentals",
    title: "Typography",
    subtitle: "Text styling",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 60,
    prerequisites: ["bootstrap5-3"],
    learningObjectives: ["Use typography classes"],
    sections: [
      {
        id: "bootstrap5-4-1",
        title: "Typography Utilities",
        whyItMatters: "Quick text styling.",
        content: `Typography classes:
- display-1 to display-6 (NEW: display-5,6)
- fs-1 to fs-6 (font-size)
- fw-bold, fw-bolder, fw-light
- fst-italic, fst-normal
- text-start, center, end
- lh-1, lh-sm, base, lg`,
        codeExamples: [
          {
            id: "bs5-type-1",
            title: "Typography Examples",
            description: "All typography utilities",
            code: {
              html: `<h1 class="display-1">Display 1</h1>
<h1 class="display-6">Display 6</h1>
<p class="fs-3">Custom size</p>
<p class="fw-bold">Bold text</p>
<p class="text-center">Centered</p>
<p class="lh-lg">Large line height</p>`,
            },
            explanation: "Modern typography utilities"
          }
        ],
        microExercise: {
          instruction: "Style heading with utilities",
          starterCode: { html: "<!-- Make h2 with fs-1 and text-muted -->" },
          solution: { html: `<h2 class="fs-1 text-muted">Styled Heading</h2>` }
        }
      }
    ]
  },
  {
    id: "bootstrap5-5",
    number: 5,
    partLabel: "Part 1: Core Fundamentals",
    title: "Colors System",
    subtitle: "Color utilities",
    difficulty: "Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 50,
    prerequisites: ["bootstrap5-4"],
    learningObjectives: ["Use color utilities"],
    sections: [
      {
        id: "bootstrap5-5-1",
        title: "Color System",
        whyItMatters: "Semantic color system with CSS variables.",
        content: `Text colors: text-primary, secondary, success, danger, warning, info, light, dark, body, muted, white

Background: bg-primary, bg-secondary, etc.
Opacity: text-opacity-75, bg-opacity-10`,
        codeExamples: [
          {
            id: "bs5-col-1",
            title: "Color Examples",
            description: "Color utilities",
            code: {
              html: `<p class="text-primary">Primary</p>
<p class="text-success">Success</p>
<p class="text-danger">Danger</p>
<p class="bg-primary text-white">Bg Primary</p>
<p class="bg-opacity-25 bg-success">25% Opacity</p>`,
            },
            explanation: "CSS variable-based colors"
          }
        ],
        microExercise: {
          instruction: "Create colored badges",
          starterCode: { html: "<!-- Add success and danger badges -->" },
          solution: { html: `<span class="badge bg-success">Success</span>\n<span class="badge bg-danger">Danger</span>` }
        }
      }
    ]
  },
  {
    id: "bootstrap5-6",
    number: 6,
    partLabel: "Part 1: Core Fundamentals",
    title: "Utilities API",
    subtitle: "Utility classes overview",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 60,
    prerequisites: ["bootstrap5-5"],
    learningObjectives: ["Use utility classes efficiently"],
    sections: [
      {
        id: "bootstrap5-6-1",
        title: "Spacing and More",
        whyItMatters: "Bootstrap 5 has extensive utilities.",
        content: `Key utilities:
- Spacing: m/p + t/b/s/e/x/y + 0-5
- Sizing: w-25/50/75/100, h-25/50/75/100
- Borders: border, border-0, border-2, border-primary
- Shadows: shadow-none, sm, lg
- Position: fixed-top, sticky-top
- Display: d-none, d-block, d-flex, d-inline-flex`,
        codeExamples: [
          {
            id: "bs5-util-1",
            title: "Utilities Demo",
            description: "Various utilities",
            code: {
              html: `<div class="d-flex justify-content-between align-items-center p-3 mb-3 border shadow-lg">
  <span>Flex Item</span>
  <span>Aligned</span>
</div>
<div class="w-75 p-3 bg-info">75% Width</div>`,
            },
            explanation: "Combined utilities"
          }
        ],
        microExercise: {
          instruction: "Create centered flex container",
          starterCode: { html: "<!-- Use d-flex with justify-content-center -->" },
          solution: { html: `<div class="d-flex justify-content-center"><p>Centered</p></div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap5-7",
    number: 7,
    partLabel: "Part 2: Components",
    title: "Buttons",
    subtitle: "Button variations",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 60,
    prerequisites: ["bootstrap5-6"],
    learningObjectives: ["Create button variations"],
    sections: [
      {
        id: "bootstrap5-7-1",
        title: "Button Classes",
        whyItMatters: "Essential interactive elements.",
        content: `Button styles:
- btn-primary, secondary, success, danger, warning, info, light, dark, link
Sizes: btn-lg, btn-sm
Outline: btn-outline-primary, etc.
Button groups: btn-group`,
        codeExamples: [
          {
            id: "bs5-btn-1",
            title: "Button Examples",
            description: "All button types",
            code: {
              html: `<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline-success">Outline</button>
<button class="btn btn-warning btn-lg">Large</button>
<div class="btn-group">
  <button class="btn btn-primary">One</button>
  <button class="btn btn-primary">Two</button>
</div>`,
            },
            explanation: "Button variations"
          }
        ],
        microExercise: {
          instruction: "Create button group",
          starterCode: { html: "<!-- Add 3 buttons in btn-group -->" },
          solution: { html: `<div class="btn-group">\n  <button class="btn btn-success">A</button>\n  <button class="btn btn-success">B</button>\n  <button class="btn btn-success">C</button>\n</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap5-8",
    number: 8,
    partLabel: "Part 2: Components",
    title: "Forms",
    subtitle: "Modern form controls",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 70,
    prerequisites: ["bootstrap5-7"],
    learningObjectives: ["Build Bootstrap 5 forms"],
    sections: [
      {
        id: "bootstrap5-8-1",
        title: "Form Controls",
        whyItMatters: "User input is essential.",
        content: `Bootstrap 5 Forms:
- form-floating for floating labels
- form-control with form-label
- form-select
- form-check (checkboxes/radios)
- input-group
- form-switch for toggles`,
        codeExamples: [
          {
            id: "bs5-form-1",
            title: "Modern Form",
            description: "With floating labels",
            code: {
              html: `<form>
  <div class="form-floating mb-3">
    <input type="email" class="form-control" id="email" placeholder="Email">
    <label>Email address</label>
  </div>
  <div class="form-floating mb-3">
    <input type="password" class="form-control" id="pass" placeholder="Password">
    <label>Password</label>
  </div>
  <div class="form-check form-switch mb-3">
    <input class="form-check-input" type="checkbox" id="switch">
    <label class="form-check-label" for="switch">Toggle switch</label>
  </div>
  <button class="btn btn-primary">Submit</button>
</form>`,
            },
            explanation: "Floating labels are new in BS5!"
          }
        ],
        microExercise: {
          instruction: "Create form with floating labels",
          starterCode: { html: "<!-- Add two form-floating inputs -->" },
          solution: { html: `<div class="form-floating mb-3">\n  <input class="form-control" placeholder="Name">\n  <label>Name</label>\n</div>\n<div class="form-floating mb-3">\n  <input class="form-control" placeholder="Email">\n  <label>Email</label>\n</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap5-9",
    number: 9,
    partLabel: "Part 2: Components",
    title: "Navbar",
    subtitle: "Navigation",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 70,
    prerequisites: ["bootstrap5-8"],
    learningObjectives: ["Create responsive navbar"],
    sections: [
      {
        id: "bootstrap5-9-1",
        title: "Navbar Structure",
        whyItMatters: "Main navigation component.",
        content: `Navbar classes:
- navbar (base)
- navbar-expand-*
- navbar-light/dark
- Fixed: fixed-top, sticky-top
- Toggler: data-bs-toggle`,
        codeExamples: [
          {
            id: "bs5-nav-1",
            title: "Responsive Navbar",
            description: "Modern navbar",
            code: {
              html: `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Brand</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="nav">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
      </ul>
    </div>
  </div>
</nav>`,
            },
            explanation: "Uses data-bs-toggle (no jQuery!)"
          }
        ],
        microExercise: {
          instruction: "Add dropdown to navbar",
          starterCode: { html: "<!-- Add nav-item dropdown -->" },
          solution: { html: `<li class="nav-item dropdown">\n  <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Menu</a>\n  <ul class="dropdown-menu">\n    <a class="dropdown-item" href="#">Item</a>\n  </ul>\n</li>` }
        }
      }
    ]
  },
  {
    id: "bootstrap5-10",
    number: 10,
    partLabel: "Part 2: Components",
    title: "Cards",
    subtitle: "Content containers",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 60,
    prerequisites: ["bootstrap5-9"],
    learningObjectives: ["Build card components"],
    sections: [
      {
        id: "bootstrap5-10-1",
        title: "Card Structure",
        whyItMatters: "Versatile content containers.",
        content: `Card components:
- card (wrapper)
- card-body
- card-title, card-subtitle, card-text, card-link
- card-img-top, card-img-bottom
- card-header, card-footer
- card-group, deck, columns`,
        codeExamples: [
          {
            id: "bs5-card-1",
            title: "Modern Card",
            description: "Card with image",
            code: {
              html: `<div class="card" style="width: 18rem;">
  <img src="https://picsum.photos/300/150" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Card content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`,
            },
            explanation: "Standard card layout"
          }
        ],
        microExercise: {
          instruction: "Create card columns",
          starterCode: { html: "<!-- Add 3 cards in card-columns -->" },
          solution: { html: `<div class="card-columns">\n  <div class="card"><div class="card-body">Card 1</div></div>\n  <div class="card"><div class="card-body">Card 2</div></div>\n  <div class="card"><div class="card-body">Card 3</div></div>\n</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap5-11",
    number: 11,
    partLabel: "Part 2: Components",
    title: "Alerts",
    subtitle: "Notifications",
    difficulty: "Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 50,
    prerequisites: ["bootstrap5-10"],
    learningObjectives: ["Create alerts"],
    sections: [
      {
        id: "bootstrap5-11-1",
        title: "Alert Classes",
        whyItMatters: "User feedback.",
        content: `Alerts: alert-primary, alert-success, alert-danger, alert-warning, alert-info, alert-light, alert-dark

Dismissible: alert-dismissible + .btn-close
Animation: fade show`,
        codeExamples: [
          {
            id: "bs5-alert-1",
            title: "Alert Examples",
            description: "Various alerts",
            code: {
              html: `<div class="alert alert-success">Success!</div>
<div class="alert alert-warning alert-dismissible fade show">
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  Warning - dismiss me!
</div>`,
            },
            explanation: "Uses btn-close class (BS5)"
          }
        ],
        microExercise: {
          instruction: "Create dismissible alert",
          starterCode: { html: "<!-- Add dismissible info alert -->" },
          solution: { html: `<div class="alert alert-info alert-dismissible fade show">\n  <button class="btn-close" data-bs-dismiss="alert"></button>\n  Info message\n</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap5-12",
    number: 12,
    partLabel: "Part 2: Components",
    title: "Badges",
    subtitle: "Labels",
    difficulty: "Beginner" as const,
    estimatedMinutes: 15,
    xpReward: 40,
    prerequisites: ["bootstrap5-11"],
    learningObjectives: ["Add badges"],
    sections: [
      {
        id: "bootstrap5-12-1",
        title: "Badge Classes",
        whyItMatters: "Show counts and labels.",
        content: `Badges: badge class
Colors: bg-primary, etc.
Pill: rounded-pill
Position: badge rounded-circle (for notifications)`,
        codeExamples: [
          {
            id: "bs5-badge-1",
            title: "Badge Examples",
            description: "Various badges",
            code: {
              html: `<h3>Example <span class="badge bg-primary">New</span></h3>
<button class="btn btn-primary">Inbox <span class="badge bg-white text-primary">5</span></button>
<span class="badge rounded-pill bg-success">Pill</span>`,
            },
            explanation: "Modern badge styling"
          }
        ],
        microExercise: {
          instruction: "Add badge to heading",
          starterCode: { html: "<!-- Add secondary badge to h2 -->" },
          solution: { html: `<h2>Title <span class="badge bg-secondary">Beta</span></h2>` }
        }
      }
    ]
  },
  {
    id: "bootstrap5-13",
    number: 13,
    partLabel: "Part 2: Components",
    title: "Spinners",
    subtitle: "Loading indicators",
    difficulty: "Beginner" as const,
    estimatedMinutes: 15,
    xpReward: 40,
    prerequisites: ["bootstrap5-12"],
    learningObjectives: ["Create spinners"],
    sections: [
      {
        id: "bootstrap5-13-1",
        title: "Spinner Classes",
        whyItMatters: "Loading feedback.",
        content: `Spinners:
- spinner-border (small)
- spinner-grow (growing animation)
- Colors: text-primary, etc.
- Size: spinner-border-sm`,
        codeExamples: [
          {
            id: "bs5-spin-1",
            title: "Spinners",
            description: "Loading indicators",
            code: {
              html: `<div class="spinner-border text-primary"></div>
<div class="spinner-grow text-success"></div>
<div class="spinner-border spinner-border-sm"></div>
<button class="btn btn-primary" disabled>
  <span class="spinner-border spinner-border-sm"></span> Loading
</button>`,
            },
            explanation: "Border and grow spinners"
          }
        ],
        microExercise: {
          instruction: "Add inline spinner",
          starterCode: { html: "<!-- Add small spinner -->" },
          solution: { html: `<div class="spinner-border spinner-border-sm"></div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap5-14",
    number: 14,
    partLabel: "Part 2: Components",
    title: "Progress",
    subtitle: "Progress bars",
    difficulty: "Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 50,
    prerequisites: ["bootstrap5-13"],
    learningObjectives: ["Create progress bars"],
    sections: [
      {
        id: "bootstrap5-14-1",
        title: "Progress Bars",
        whyItMatters: "Show completion.",
        content: `Progress:
- progress > progress-bar
- style="width: X%"
- Colors: bg-primary, etc.
- Striped: progress-bar-striped
- Animated: progress-bar-animated`,
        codeExamples: [
          {
            id: "bs5-prog-1",
            title: "Progress Examples",
            description: "Various progress bars",
            code: {
              html: `<div class="progress mb-3">
  <div class="progress-bar" style="width: 70%;">70%</div>
</div>
<div class="progress mb-3">
  <div class="progress-bar bg-success" style="width: 50%;">50%</div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 90%;"></div>
</div>`,
            },
            explanation: "Animated progress bars"
          }
        ],
        microExercise: {
          instruction: "Create striped progress",
          starterCode: { html: "<!-- Add progress-bar with stripes -->" },
          solution: { html: `<div class="progress">\n  <div class="progress-bar progress-bar-striped" style="width:75%">75%</div>\n</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap5-15",
    number: 15,
    partLabel: "Part 2: Components",
    title: "Tables",
    subtitle: "Table styling",
    difficulty: "Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 50,
    prerequisites: ["bootstrap5-14"],
    learningObjectives: ["Style tables"],
    sections: [
      {
        id: "bootstrap5-15-1",
        title: "Table Classes",
        whyItMatters: "Display structured data.",
        content: `Tables:
- table (basic)
- table-striped, table-bordered, table-hover
- table-dark (dark mode)
- table-sm (condensed)
- table-responsive (wrapper)`,
        codeExamples: [
          {
            id: "bs5-table-1",
            title: "Table Styles",
            description: "Styled table",
            code: {
              html: `<div class="table-responsive">
  <table class="table table-hover table-dark">
    <thead>
      <tr><th>Name</th><th>Email</th><th>Role</th></tr>
    </thead>
    <tbody>
      <tr><td>John</td><td>john@example.com</td><td>Admin</td></tr>
      <tr><td>Jane</td><td>jane@example.com</td><td>User</td></tr>
    </tbody>
  </table>
</div>`,
            },
            explanation: "Dark hover table"
          }
        ],
        microExercise: {
          instruction: "Create striped table",
          starterCode: { html: "<!-- Add striped table with headers -->" },
          solution: { html: `<table class="table table-striped">\n  <thead><tr><th>A</th><th>B</th></tr></thead>\n  <tbody><tr><td>1</td><td>2</td></tr></tbody>\n</table>` }
        }
      }
    ]
  },
  {
    id: "bootstrap5-16",
    number: 16,
    partLabel: "Part 3: JavaScript Components",
    title: "Modals",
    subtitle: "Dialog boxes",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 70,
    prerequisites: ["bootstrap5-15"],
    learningObjectives: ["Create modals"],
    sections: [
      {
        id: "bootstrap5-16-1",
        title: "Modal Structure",
        whyItMatters: "Overlay dialogs.",
        content: `Modal:
- modal > modal-dialog > modal-content
- modal-header, modal-body, modal-footer
- Trigger: data-bs-toggle="modal" data-bs-target="#id
- No jQuery needed!`,
        codeExamples: [
          {
            id: "bs5-modal-1",
            title: "Modal Example",
            description: "Working modal",
            code: {
              html: `<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Open Modal</button>

<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal Title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">Content here!</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>`,
            },
            explanation: "Pure JS - no jQuery needed!"
          }
        ],
        microExercise: {
          instruction: "Create centered modal",
          starterCode: { html: "<!-- Add modal-dialog-centered -->" },
          solution: { html: `<div class="modal-dialog modal-dialog-centered">...</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap5-17",
    number: 17,
    partLabel: "Part 3: JavaScript Components",
    title: "Offcanvas",
    subtitle: "NEW: Slide-out panel",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 60,
    prerequisites: ["bootstrap5-16"],
    learningObjectives: ["Create offcanvas panels"],
    sections: [
      {
        id: "bootstrap5-17-1",
        title: "Offcanvas Component",
        whyItMatters: "NEW in Bootstrap 5! Side panel pattern.",
        content: `Offcanvas:
- offcanvas (wrapper)
- offcanvas-title
- offcanvas-body
- Positions: start, end, top, bottom
- Trigger: data-bs-toggle="offcanvas"`,
        codeExamples: [
          {
            id: "bs5-off-1",
            title: "Offcanvas Panel",
            description: "Slide-out sidebar",
            code: {
              html: `<button class="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#myOffcanvas">Open Offcanvas</button>

<div class="offcanvas offcanvas-start" id="myOffcanvas" tabindex="-1">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Offcanvas Title</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    <p>Content goes here...</p>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>`,
            },
            explanation: "Offcanvas - new BS5 feature!"
          }
        ],
        microExercise: {
          instruction: "Create right-side offcanvas",
          starterCode: { html: "<!-- Add offcanvas-end -->" },
          solution: { html: `<div class="offcanvas offcanvas-end">...</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap5-18",
    number: 18,
    partLabel: "Part 3: JavaScript Components",
    title: "Toasts",
    subtitle: "NEW: Notification popups",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 50,
    prerequisites: ["bootstrap5-17"],
    learningObjectives: ["Create toasts"],
    sections: [
      {
        id: "bootstrap5-18-1",
        title: "Toast Component",
        whyItMatters: "NEW in Bootstrap 5! Quick notifications.",
        content: `Toasts:
- toast (wrapper)
- toast-header, toast-body
- show class for visible
- Auto-hide with data-bs-delay
- Trigger: data-bs-toggle="toast"`,
        codeExamples: [
          {
            id: "bs5-toast-1",
            title: "Toast Example",
            description: "Notification toast",
            code: {
              html: `<button class="btn btn-primary" data-bs-toggle="toast" data-bs-target="#myToast">Show Toast</button>

<div class="toast" id="myToast" data-bs-delay="3000">
  <div class="toast-header">
    <strong class="me-auto">Toast Title</strong>
    <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
  </div>
  <div class="toast-body">Toast message here!</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>`,
            },
            explanation: "Toast - new BS5 component!"
          }
        ],
        microExercise: {
          instruction: "Create auto-dismiss toast",
          starterCode: { html: "<!-- Add toast with 5 second delay -->" },
          solution: { html: `<div class="toast" data-bs-delay="5000">\n  <div class="toast-body">Auto-dismiss!</div>\n</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap5-19",
    number: 19,
    partLabel: "Part 3: JavaScript Components",
    title: "Accordion",
    subtitle: "NEW: Built-in accordion",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 60,
    prerequisites: ["bootstrap5-18"],
    learningObjectives: ["Create accordion"],
    sections: [
      {
        id: "bootstrap5-19-1",
        title: "Accordion Component",
        whyItMatters: "NEW built-in accordion in BS5!",
        content: `Accordion:
- accordion (wrapper)
- accordion-item > accordion-header + accordion-collapse
- accordion-button (trigger)
- data-bs-parent for exclusive open`,
        codeExamples: [
          {
            id: "bs5-accordion-1",
            title: "Accordion Example",
            description: "Built-in accordion",
            code: {
              html: `<div class="accordion" id="myAccordion">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#one">Section 1</button>
    </h2>
    <div id="one" class="accordion-collapse collapse show" data-bs-parent="#myAccordion">
      <div class="accordion-body">Content 1</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#two">Section 2</button>
    </h2>
    <div id="two" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
      <div class="accordion-body">Content 2</div>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>`,
            },
            explanation: "Accordion is new in BS5!"
          }
        ],
        microExercise: {
          instruction: "Create accordion with 3 items",
          starterCode: { html: "<!-- Add 3 accordion items -->" },
          solution: { html: `<div class="accordion" id="acc">\n  <div class="accordion-item"><h2><button data-bs-toggle="collapse" data-bs-target="#c1">One</button></h2><div id="c1" class="collapse" data-bs-parent="#acc"><div class="accordion-body">1</div></div></div>\n  <div class="accordion-item"><h2><button data-bs-toggle="collapse" data-bs-target="#c2">Two</button></h2><div id="c2" class="collapse" data-bs-parent="#acc"><div class="accordion-body">2</div></div></div>\n</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap5-20",
    number: 20,
    partLabel: "Part 3: JavaScript Components",
    title: "Tooltips",
    subtitle: "Hover hints",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 50,
    prerequisites: ["bootstrap5-19"],
    learningObjectives: ["Add tooltips"],
    sections: [
      {
        id: "bootstrap5-20-1",
        title: "Tooltip Setup",
        whyItMatters: "Contextual hints.",
        content: `Tooltip:
- data-bs-toggle="tooltip" title="text"
- data-bs-placement="top/bottom/left/right"
- Initialize: new bootstrap.Tooltip(el)`,
        codeExamples: [
          {
            id: "bs5-tip-1",
            title: "Tooltip Example",
            description: "Hover for tooltip",
            code: {
              html: `<button class="btn btn-info" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip text!">Hover Me</button>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script>
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
</script>`,
            },
            explanation: "Pure JS initialization needed"
          }
        ],
        microExercise: {
          instruction: "Add tooltip to element",
          starterCode: { html: "<!-- Add tooltip to span -->" },
          solution: { html: `<span data-bs-toggle="tooltip" title="Hint!">Hover me</span>\n<script>new bootstrap.Tooltip(document.querySelector('[data-bs-toggle="tooltip"]'))</script>` }
        }
      }
    ]
  },
  {
    id: "bootstrap5-21",
    number: 21,
    partLabel: "Part 3: JavaScript Components",
    title: "Carousel",
    subtitle: "Image slider",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 60,
    prerequisites: ["bootstrap5-20"],
    learningObjectives: ["Create carousels"],
    sections: [
      {
        id: "bootstrap5-21-1",
        title: "Carousel Structure",
        whyItMatters: "Showcase rotating content.",
        content: `Carousel:
- carousel > carousel-inner > carousel-item
- carousel-indicators
- carousel-control-prev/next
- data-bs-slide, data-bs-slide-to`,
        codeExamples: [
          {
            id: "bs5-car-1",
            title: "Carousel Example",
            description: "Full carousel",
            code: {
              html: `<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://picsum.photos/800/400?1" class="d-block w-100" alt="...">
      <div class="carousel-caption"><h3>Slide One</h3></div>
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/800/400?2" class="d-block w-100" alt="...">
      <div class="carousel-caption"><h3>Slide Two</h3></div>
    </div>
  </div>
  <button class="carousel-control-prev" data-bs-target="#myCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" data-bs-target="#myCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>`,
            },
            explanation: "Uses data-bs attributes"
          }
        ],
        microExercise: {
          instruction: "Add carousel with 2 slides",
          starterCode: { html: "<!-- Create carousel with 2 items -->" },
          solution: { html: `<div id="c" class="carousel slide" data-bs-ride="carousel">\n  <div class="carousel-inner">\n    <div class="carousel-item active"><img src="https://picsum.photos/600/300/1"></div>\n    <div class="carousel-item"><img src="https://picsum.photos/600/300/2"></div>\n  </div>\n</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap5-22",
    number: 22,
    partLabel: "Part 4: Advanced",
    title: "Utilities API Deep Dive",
    subtitle: "Advanced utility classes",
    difficulty: "Advanced" as const,
    estimatedMinutes: 35,
    xpReward: 80,
    prerequisites: ["bootstrap5-21"],
    learningObjectives: ["Master utility classes"],
    sections: [
      {
        id: "bootstrap5-22-1",
        title: "Advanced Utilities",
        whyItMatters: "Highly productive styling.",
        content: `Advanced utilities:
- Border: border, border-0, border-2, border-primary
- Shadow: shadow-sm, shadow, shadow-lg
- Text: text-wrap, text-nowrap, text-truncate
- Object fit: object-fit-cover, contain
- Z-index: z-index classes`,
        codeExamples: [
          {
            id: "bs5-adv-1",
            title: "Advanced Utilities",
            description: "Various utilities",
            code: {
              html: `<div class="border border-2 border-primary p-3 shadow-lg">Bordered + Shadow</div>
<div style="width:200px;height:200px;overflow:hidden;">
  <img src="https://picsum.photos/100/100" class="w-100 h-100" style="object-fit:cover;">
</div>
<p style="width:100px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">Long text that truncates</p>`,
            },
            explanation: "Advanced utility combinations"
          }
        ],
        microExercise: {
          instruction: "Create card with shadow",
          starterCode: { html: "<!-- Add shadow-lg to card -->" },
          solution: { html: `<div class="card shadow-lg p-3"><p>Shadow card</p></div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap5-23",
    number: 23,
    partLabel: "Part 4: Advanced",
    title: "Layout Patterns",
    subtitle: "Real-world layouts",
    difficulty: "Advanced" as const,
    estimatedMinutes: 40,
    xpReward: 90,
    prerequisites: ["bootstrap5-22"],
    learningObjectives: ["Build complete layouts"],
    sections: [
      {
        id: "bootstrap5-23-1",
        title: "Landing Page Layout",
        whyItMatters: "Production layout patterns.",
        content: `Complete landing page with:
- Hero with call-to-action
- Feature sections
- Pricing cards
- Testimonials
- Footer`,
        codeExamples: [
          {
            id: "bs5-lp-1",
            title: "SaaS Landing Page",
            description: "Complete modern landing",
            code: {
              html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SaaS Landing</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<!-- Hero -->
<section class="bg-dark text-white py-5">
  <div class="container py-5 text-center">
    <h1 class="display-1 fw-bold">Build Faster</h1>
    <p class="lead mb-4">The modern framework for modern websites</p>
    <div class="d-flex justify-content-center gap-3">
      <button class="btn btn-primary btn-lg">Get Started</button>
      <button class="btn btn-outline-light btn-lg">Learn More</button>
    </div>
  </div>
</section>

<!-- Features -->
<section class="py-5">
  <div class="container">
    <h2 class="text-center mb-5">Features</h2>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Fast</h5>
            <p class="card-text">Lightning fast performance.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Responsive</h5>
            <p class="card-text">Works on all devices.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Secure</h5>
            <p class="card-text">Enterprise-grade security.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Pricing -->
<section class="py-5 bg-light">
  <div class="container">
    <h2 class="text-center mb-5">Pricing</h2>
    <div class="row justify-content-center g-4">
      <div class="col-md-4">
        <div class="card text-center">
          <div class="card-header bg-primary text-white">Basic</div>
          <div class="card-body">
            <h1 class="card-title">$9<small class="text-muted fs-6">/mo</small></h1>
            <ul class="list-unstyled my-3">
              <li>Feature 1</li>
              <li>Feature 2</li>
            </ul>
            <button class="btn btn-outline-primary">Choose</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="bg-dark text-white py-4 text-center">
  <p class="mb-0">&copy; 2024 Company. All rights reserved.</p>
</footer>

</body>
</html>`,
            },
            explanation: "Complete landing page template"
          }
        ],
        microExercise: {
          instruction: "Add testimonials section",
          starterCode: { html: "<!-- Add row with 2 testimonial cards -->" },
          solution: { html: `<div class="row">\n  <div class="col-md-6"><div class="card"><div class="card-body">"Great product!" - John</div></div></div>\n  <div class="col-md-6"><div class="card"><div class="card-body">"Amazing!" - Jane</div></div></div>\n</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap5-24",
    number: 24,
    partLabel: "Part 4: Projects",
    title: "Dashboard Project",
    subtitle: "Admin dashboard",
    difficulty: "Advanced" as const,
    estimatedMinutes: 45,
    xpReward: 100,
    prerequisites: ["bootstrap5-23"],
    learningObjectives: ["Build admin dashboard"],
    sections: [
      {
        id: "bootstrap5-24-1",
        title: "Admin Dashboard",
        whyItMatters: "Common real-world project.",
        content: `Modern admin dashboard with:
- Fixed navbar
- Sidebar with offcanvas on mobile
- Stats cards
- Data tables
- Charts placeholder`,
        codeExamples: [
          {
            id: "bs5-dash-1",
            title: "Modern Dashboard",
            description: "Full admin panel",
            code: {
              html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<!-- Navbar -->
<nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <button class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#sidebar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Admin Panel</a>
    <div class="d-flex">
      <span class="navbar-text text-white">Admin</span>
    </div>
  </div>
</nav>

<!-- Sidebar Offcanvas -->
<div class="offcanvas offcanvas-start bg-dark text-white" id="sidebar" tabindex="-1">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Menu</h5>
    <button class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    <ul class="nav flex-column">
      <li class="nav-item"><a class="nav-link text-white" href="#">Dashboard</a></li>
      <li class="nav-item"><a class="nav-link text-white" href="#">Analytics</a></li>
      <li class="nav-item"><a class="nav-link text-white" href="#">Users</a></li>
      <li class="nav-item"><a class="nav-link text-white" href="#">Settings</a></li>
    </ul>
  </div>
</div>

<!-- Main Content -->
<main class="mt-5 p-4">
  <div class="row g-4 mb-4">
    <div class="col-md-3">
      <div class="card bg-primary text-white">
        <div class="card-body">
          <h6>Users</h6>
          <h2>1,234</h2>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card bg-success text-white">
        <div class="card-body">
          <h6>Revenue</h6>
          <h2>$8,500</h2>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card bg-warning text-dark">
        <div class="card-body">
          <h6>Orders</h6>
          <h2>56</h2>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card bg-danger text-white">
        <div class="card-body">
          <h6>Issues</h6>
          <h2>12</h2>
        </div>
      </div>
    </div>
  </div>

  <!-- Table -->
  <div class="card">
    <div class="card-header">Recent Orders</div>
    <div class="card-body">
      <table class="table table-hover">
        <thead>
          <tr><th>ID</th><th>Customer</th><th>Amount</th><th>Status</th></tr>
        </thead>
        <tbody>
          <tr><td>#1001</td><td>John Doe</td><td>$250</td><td><span class="badge bg-success">Shipped</span></td></tr>
          <tr><td>#1002</td><td>Jane Smith</td><td>$180</td><td><span class="badge bg-warning">Pending</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</main>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`,
            },
            explanation: "Modern admin with offcanvas sidebar"
          }
        ],
        microExercise: {
          instruction: "Add new stat card",
          starterCode: { html: "<!-- Add fifth column to stats row -->" },
          solution: { html: `<div class="col-md-3"><div class="card bg-info text-white"><div class="card-body"><h6>Views</h6><h2>5,000</h2></div></div></div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap5-25",
    number: 25,
    partLabel: "Part 4: Final Project",
    title: "Production Project",
    subtitle: "Complete SaaS application",
    difficulty: "Expert" as const,
    estimatedMinutes: 60,
    xpReward: 150,
    prerequisites: ["bootstrap5-24"],
    learningObjectives: ["Build production-ready website"],
    sections: [
      {
        id: "bootstrap5-25-1",
        title: "Complete Project",
        whyItMatters: "Demonstrate full mastery.",
        content: `Final project: Full production website
- Navigation with offcanvas
- Hero section
- Feature showcase
- Pricing tables
- Contact form with modal
- Footer
- Responsive at all breakpoints
- CSS variables customization`,
        codeExamples: [
          {
            id: "bs5-final-1",
            title: "Production Website",
            description: "Complete Bootstrap 5 site",
            code: {
              html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modern SaaS</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    :root { --bs-primary: #6366f1; }
    .hero { background: linear-gradient(135deg, var(--bs-primary), #8b5cf6); }
  </style>
</head>
<body>

<!-- Nav -->
<nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
  <div class="container">
    <a class="navbar-brand fw-bold" href="#">SaaS<span class="text-primary">Pro</span></a>
    <button class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#nav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" id="nav">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">Menu</h5>
        <button class="btn-close" data-bs-dismiss="offcanvas"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#features">Features</a></li>
          <li class="nav-item"><a class="nav-link" href="#pricing">Pricing</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
          <li class="nav-item">
            <button class="btn btn-primary ms-lg-3" data-bs-toggle="modal" data-bs-target="#demo">Get Demo</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>

<!-- Hero -->
<section class="hero text-white pt-5 mt-5">
  <div class="container py-5 text-center">
    <h1 class="display-1 fw-bold mb-4">Build Better Apps</h1>
    <p class="lead mb-4">The complete platform for modern development</p>
    <div class="d-flex justify-content-center gap-3">
      <button class="btn btn-light btn-lg">Start Free</button>
      <button class="btn btn-outline-light btn-lg">Watch Demo</button>
    </div>
  </div>
</section>

<!-- Features -->
<section id="features" class="py-5">
  <div class="container py-5">
    <h2 class="text-center mb-5 fw-bold">Everything You Need</h2>
    <div class="row g-4">
      <div class="col-md-6 col-lg-3">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body text-center">
            <div class="display-4 text-primary mb-3">&#9889;</div>
            <h5>Fast Performance</h5>
            <p class="text-muted">Lightning fast performance.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body text-center">
            <div class="display-4 text-primary mb-3">&#128274;</div>
            <h5>Secure by Default</h5>
            <p class="text-muted">Enterprise-grade security.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body text-center">
            <div class="display-4 text-primary mb-3">&#128200;</div>
            <h5>Scale Anywhere</h5>
            <p class="text-muted">Grow with your needs.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="card h-100 border-0 shadow-sm">
          <div class="card-body text-center">
            <div class="display-4 text-primary mb-3">&#128172;</div>
            <h5>24/7 Support</h5>
            <p class="text-muted">Help when you need it.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Pricing -->
<section id="pricing" class="py-5 bg-light">
  <div class="container py-5">
    <h2 class="text-center mb-5 fw-bold">Simple Pricing</h2>
    <div class="row justify-content-center g-4">
      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-header text-center py-3">
            <h4 class="mb-0">Starter</h4>
          </div>
          <div class="card-body text-center">
            <h1 class="mb-3">$9<small class="text-muted fs-6">/mo</small></h1>
            <ul class="list-unstyled mb-4">
              <li>1 User</li>
              <li>10GB Storage</li>
              <li>Basic Support</li>
            </ul>
            <button class="btn btn-outline-primary w-100">Choose</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 border-primary border-2">
          <div class="card-header bg-primary text-white text-center py-3">
            <h4 class="mb-0">Pro</h4>
          </div>
          <div class="card-body text-center">
            <h1 class="mb-3">$29<small class="text-muted fs-6">/mo</small></h1>
            <ul class="list-unstyled mb-4">
              <li>5 Users</li>
              <li>100GB Storage</li>
              <li>Priority Support</li>
            </ul>
            <button class="btn btn-primary w-100">Choose</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-header text-center py-3">
            <h4 class="mb-0">Enterprise</h4>
          </div>
          <div class="card-body text-center">
            <h1 class="mb-3">$99<small class="text-muted fs-6">/mo</small></h1>
            <ul class="list-unstyled mb-4">
              <li>Unlimited</li>
              <li>1TB Storage</li>
              <li>24/7 Support</li>
            </ul>
            <button class="btn btn-outline-primary w-100">Choose</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Contact Modal -->
<div class="modal fade" id="demo" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Get Demo</h5>
        <button class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3"><label class="form-label">Name</label><input class="form-control"></div>
          <div class="mb-3"><label class="form-label">Email</label><input type="email" class="form-control"></div>
          <button class="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  </div>
</div>

<!-- Footer -->
<footer class="bg-dark text-white py-4">
  <div class="container text-center">
    <p class="mb-0">&copy; 2024 SaaSPro. All rights reserved.</p>
  </div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`,
            },
            explanation: "Complete production-ready Bootstrap 5 website"
          }
        ],
        microExercise: {
          instruction: "Add testimonial section",
          starterCode: { html: "<!-- Add testimonial carousel before footer -->" },
          solution: { html: `<div class="carousel slide" data-bs-ride="carousel">\n  <div class="carousel-inner">\n    <div class="carousel-item active">\n      <blockquote class="blockquote text-center">\n        <p>"Amazing product!"</p>\n        <footer class="blockquote-footer">John Doe</footer>\n      </blockquote>\n    </div>\n  </div>\n</div>` }
        }
      }
    ]
  }
];

export const bootstrap5Track: Track = {
  id: "bootstrap5",
  title: "Bootstrap 5",
  titleBn: "Bootstrap 5",
  tagline: "Production-ready modern UI framework",
  taglineBn: "প্রোডাকশন-রেডি আধুনিক UI ফ্রেমওয়ার্ক",
  icon: "https://img.icons8.com/?size=96&id=zJ4D3Z5N2Q5K&format=png",
  colorVar: "bootstrap5",
  totalChapters: bootstrap5Chapters.length,
  estimatedHours: Math.round(bootstrap5Chapters.reduce((sum, c) => sum + c.estimatedMinutes, 0) / 60),
  chapters: bootstrap5Chapters,
  brandColor: "#0D6EFD",
  glowColor: "rgba(13, 110, 253, 0.4)",
};