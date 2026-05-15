import type { Track, Chapter } from "./types";

const bootstrap4ContentBn: Record<string, string> = {
  "bootstrap4-1-1": `Bootstrap 4 Bootstrap 3 থেকে Flexbox-এ migrate করা হয়েছে। এতে float-based grid নেই, সব flexbox। Card system প্যানেলের জায়গায় এসেছে।`,

  "bootstrap4-2-1": `Bootstrap 4 Grid Flexbox-based। col-*, col-sm-*, col-md-*, col-lg-*, col-xl-* ক্লাস আছে। সব কলাম flexbox container এ।`,

  "bootstrap4-3-1": `Bootstrap 4 এ ছোট থেকে বড়: xs (<576px), sm (≥576px), md (≥768px), lg (≥992px), xl (≥1200px)। .container-fluid always 100%।`,
};

const bootstrap4Chapters: Chapter[] = [
  {
    id: "bootstrap4-1",
    number: 1,
    partLabel: "Part 1: Getting Started",
    title: "What is Bootstrap 4?",
    subtitle: "Flexbox-powered modern UI system",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 50,
    prerequisites: [],
    learningObjectives: ["Understand Bootstrap 4 vs 3", "Know Flexbox changes"],
    sections: [
      {
        id: "bootstrap4-1-1",
        title: "Bootstrap 4 Overview",
        whyItMatters: "Bootstrap 4 brought Flexbox to the core framework.",
        content: `Bootstrap 4 is a complete rewrite with key changes:

**Major Changes from Bootstrap 3:**
- Grid system is now Flexbox-based (no more floats!)
- Panels replaced by Cards
- Less dependent on jQuery (still needed for JS components)
- Added utility classes for spacing
- Uses Sass instead of Less
- New typography scale

**Why learn Bootstrap 4?**
- Bridge between Bootstrap 3 and 5
- Many projects still use it
- Understanding migration path`,
        contentBn: bootstrap4ContentBn["bootstrap4-1-1"],
        codeExamples: [
          {
            id: "bs4-intro-1",
            title: "Basic Bootstrap 4 Setup",
            description: "CDN links for Bootstrap 4",
            code: {
              html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap 4</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.6.2/css/bootstrap.min.css">
</head>
<body>
  <div class="container">
    <h1>Hello, Bootstrap 4!</h1>
    <p>This is a flexbox-based grid system.</p>
  </div>
</body>
</html>`,
            },
            explanation: "Bootstrap 4 uses Flexbox grid by default"
          }
        ],
        callouts: [
          { type: "info", title: "Flexbox Grid", content: "All grid columns are now flex items!" }
        ],
        microExercise: {
          instruction: "Create a basic Bootstrap 4 page",
          starterCode: { html: "<!-- Add Bootstrap 4 CDN and container -->" },
          solution: { html: `<!DOCTYPE html>\n<html>\n<head>\n  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.6.2/css/bootstrap.min.css">\n</head>\n<body>\n  <div class="container mt-5">\n    <h1>Welcome to Bootstrap 4</h1>\n  </div>\n</body>\n</html>` }
        }
      }
    ]
  },
  {
    id: "bootstrap4-2",
    number: 2,
    partLabel: "Part 1: Core Fundamentals",
    title: "Flexbox Grid System",
    subtitle: "12-column flexbox layout",
    difficulty: "Beginner" as const,
    estimatedMinutes: 35,
    xpReward: 80,
    prerequisites: ["bootstrap4-1"],
    learningObjectives: ["Master flexbox grid", "Understand new breakpoints"],
    sections: [
      {
        id: "bootstrap4-2-1",
        title: "Flexbox Grid",
        whyItMatters: "Flexbox grid is more powerful than float grid.",
        content: `Bootstrap 4 Grid Breakpoints:
- col- (≤575px)
- col-sm- (≥576px)
- col-md- (≥768px)
- col-lg- (≥992px)
- col-xl- (≥1200px)

Key differences from BS3:
- No more col-xs-*, use col-
- Columns are flex items
- Can use flex utilities directly`,
        contentBn: bootstrap4ContentBn["bootstrap4-2-1"],
        codeExamples: [
          {
            id: "bs4-grid-1",
            title: "Flexbox Grid",
            description: "Equal columns with flexbox",
            code: {
              html: `<div class="container">
  <div class="row">
    <div class="col">
      <div class="p-3 bg-primary text-white">Column 1</div>
    </div>
    <div class="col">
      <div class="p-3 bg-success text-white">Column 2</div>
    </div>
    <div class="col">
      <div class="p-3 bg-warning text-white">Column 3</div>
    </div>
  </div>
</div>`,
            },
            explanation: "Using .col without number auto-sizes columns"
          },
          {
            id: "bs4-grid-2",
            title: "Responsive Grid",
            description: "Different sizes at breakpoints",
            code: {
              html: `<div class="container">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">
      <div class="p-3 bg-info">Responsive Column</div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <div class="p-3 bg-danger">Responsive Column</div>
    </div>
    <div class="col-12 col-md-12 col-lg-4">
      <div class="p-3 bg-dark text-white">Responsive Column</div>
    </div>
  </div>
</div>`,
            },
            explanation: "Stacked on mobile, 2-col on tablet, 3-col on desktop"
          },
        ],
        microExercise: {
          instruction: "Create 4 equal columns",
          starterCode: { html: "<!-- Use col without numbers for auto-width -->" },
          solution: { html: `<div class="row">\n  <div class="col"><div class="bg-primary p-3">1</div></div>\n  <div class="col"><div class="bg-primary p-3">2</div></div>\n  <div class="col"><div class="bg-primary p-3">3</div></div>\n  <div class="col"><div class="bg-primary p-3">4</div></div>\n</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap4-3",
    number: 3,
    partLabel: "Part 1: Core Fundamentals",
    title: "Containers and Breakpoints",
    subtitle: "Layout containers",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 60,
    prerequisites: ["bootstrap4-2"],
    learningObjectives: ["Understand container types and breakpoints"],
    sections: [
      {
        id: "bootstrap4-3-1",
        title: "Container Sizes",
        whyItMatters: "Containers define max-width for your layout.",
        content: `Bootstrap 4 container widths:
- .container (100% up to breakpoints)
- .container-fluid (always 100%)
- .container-sm (100% until sm)
- .container-md (100% until md)
- .container-lg (100% until lg)
- .container-xl (100% until xl)`,
        contentBn: bootstrap4ContentBn["bootstrap4-3-1"],
        codeExamples: [
          {
            id: "bs4-cont-1",
            title: "Container Comparison",
            description: "See the difference",
            code: {
              html: `<div class="container" style="background:#e3f2fd;padding:20px;margin-bottom:10px;">
  <h4>Container</h4>
  <p>Fixed max-width at breakpoints</p>
</div>
<div class="container-fluid" style="background:#ffebee;padding:20px;">
  <h4>Container Fluid</h4>
  <p>Always 100% width</p>
</div>`,
            },
            explanation: "Compare fixed vs full-width containers"
          }
        ],
        microExercise: {
          instruction: "Create responsive container",
          starterCode: { html: "<!-- Create container that's fluid on mobile -->" },
          solution: { html: `<div class="container-sm bg-light p-3">\n  <h3>Title</h3>\n</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap4-4",
    number: 4,
    partLabel: "Part 1: Core Fundamentals",
    title: "Typography",
    subtitle: "Text styling utilities",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 60,
    prerequisites: ["bootstrap4-3"],
    learningObjectives: ["Use typography utilities"],
    sections: [
      {
        id: "bootstrap4-4-1",
        title: "Typography Classes",
        whyItMatters: "Quick text styling with utility classes.",
        content: `Typography utilities:
- display-1 to display-4 (large headings)
- h1-h6 classes
- font-weight-bold, font-weight-light
- text-left, center, right, justify
- text-lowercase, uppercase, capitalize
- text-muted, text-primary, etc.
- font-italic`,
        codeExamples: [
          {
            id: "bs4-type-1",
            title: "Typography Examples",
            description: "Various typography classes",
            code: {
              html: `<div class="container">
  <h1 class="display-1">Display 1</h1>
  <h1 class="display-4">Display 4</h1>
  <p class="text-uppercase">uppercase text</p>
  <p class="font-weight-bold">Bold text</p>
  <p class="text-muted">Muted text</p>
  <p class="text-primary">Primary text</p>
</div>`,
            },
            explanation: "Various typography utilities"
          }
        ],
        microExercise: {
          instruction: "Style a heading",
          starterCode: { html: "<!-- Make heading display-2 with muted color -->" },
          solution: { html: `<h2 class="display-2 text-muted">Styled Heading</h2>` }
        }
      }
    ]
  },
  {
    id: "bootstrap4-5",
    number: 5,
    partLabel: "Part 1: Core Fundamentals",
    title: "Colors",
    subtitle: "Color utilities",
    difficulty: "Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 50,
    prerequisites: ["bootstrap4-4"],
    learningObjectives: ["Use color utilities"],
    sections: [
      {
        id: "bootstrap4-5-1",
        title: "Color System",
        whyItMatters: "Bootstrap 4 has semantic color system.",
        content: `Text colors: text-primary, secondary, success, danger, warning, info, light, dark, muted

Background colors: bg-primary, bg-secondary, bg-success, bg-danger, bg-warning, bg-info, bg-light, bg-dark`,
        codeExamples: [
          {
            id: "bs4-col-1",
            title: "Color Classes",
            description: "Text and background colors",
            code: {
              html: `<div class="container">
  <p class="text-primary">Primary</p>
  <p class="text-success">Success</p>
  <p class="text-danger">Danger</p>
  <p class="bg-primary text-white">Bg Primary</p>
  <p class="bg-success text-white">Bg Success</p>
</div>`,
            },
            explanation: "Semantic color utilities"
          }
        ],
        microExercise: {
          instruction: "Create colored badges",
          starterCode: { html: "<!-- Add success and danger badges -->" },
          solution: { html: `<span class="badge badge-success">Success</span>\n<span class="badge badge-danger">Danger</span>` }
        }
      }
    ]
  },
  {
    id: "bootstrap4-6",
    number: 6,
    partLabel: "Part 1: Core Fundamentals",
    title: "Spacing Utilities",
    subtitle: "Margin and padding",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 60,
    prerequisites: ["bootstrap4-5"],
    learningObjectives: ["Use spacing utilities"],
    sections: [
      {
        id: "bootstrap4-6-1",
        title: "Spacing Classes",
        whyItMatters: "Quick spacing with utility classes.",
        content: `Format: {property}{sides}-{size}

Properties: m (margin), p (padding)
Sides: t (top), b (bottom), l (left), r (right), x (left+right), y (top+bottom), blank (all)
Sizes: 0-5 (0 to 3rem)

Examples: mt-3, pb-5, px-4, my-2`,
        codeExamples: [
          {
            id: "bs4-spc-1",
            title: "Spacing Examples",
            description: "Margin and padding",
            code: {
              html: `<div class="container">
  <div class="p-3 bg-primary text-white">p-3 (all sides)</div>
  <div class="mt-3 p-3 bg-success text-white">mt-3 + p-3</div>
  <div class="mx-auto p-3 bg-warning" style="width:200px">mx-auto (center)</div>
  <div class="py-5 bg-info text-white">py-5 (vertical)</div>
</div>`,
            },
            explanation: "Various spacing utilities"
          }
        ],
        microExercise: {
          instruction: "Add spacing to element",
          starterCode: { html: "<!-- Add mt-4 and p-3 to a div -->" },
          solution: { html: `<div class="mt-4 p-3 bg-light">Spaced element</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap4-7",
    number: 7,
    partLabel: "Part 2: Components",
    title: "Buttons",
    subtitle: "Button styles and groups",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 60,
    prerequisites: ["bootstrap4-6"],
    learningObjectives: ["Create button styles and groups"],
    sections: [
      {
        id: "bootstrap4-7-1",
        title: "Button Classes",
        whyItMatters: "Buttons are primary interaction elements.",
        content: `Button colors: btn-primary, btn-secondary, btn-success, btn-danger, btn-warning, btn-info, btn-light, btn-dark, btn-link

Sizes: btn-lg, btn-sm, btn-block
States: active, disabled
Button groups: btn-group`,
        codeExamples: [
          {
            id: "bs4-btn-1",
            title: "Button Varieties",
            description: "All button options",
            code: {
              html: `<div class="container">
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
  <button class="btn btn-success btn-lg">Large</button>
  <button class="btn btn-danger btn-sm">Small</button>
  <button class="btn btn-outline-primary">Outline</button>

  <div class="btn-group mt-3">
    <button class="btn btn-primary">One</button>
    <button class="btn btn-primary">Two</button>
    <button class="btn btn-primary">Three</button>
  </div>
</div>`,
            },
            explanation: "Various button styles and groups"
          }
        ],
        microExercise: {
          instruction: "Create button toolbar",
          starterCode: { html: "<!-- Create btn-group with 3 buttons -->" },
          solution: { html: `<div class="btn-group">\n  <button class="btn btn-success">A</button>\n  <button class="btn btn-success">B</button>\n  <button class="btn btn-success">C</button>\n</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap4-8",
    number: 8,
    partLabel: "Part 2: Components",
    title: "Cards",
    subtitle: "Flexible content containers",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 70,
    prerequisites: ["bootstrap4-7"],
    learningObjectives: ["Build card components"],
    sections: [
      {
        id: "bootstrap4-8-1",
        title: "Card Structure",
        whyItMatters: "Cards replaced panels from Bootstrap 3.",
        content: `Card components:
- card (wrapper)
- card-body (content area)
- card-title, card-text, card-link
- card-header, card-footer
- card-img-top, card-img-bottom
- card-group for equal heights`,
        codeExamples: [
          {
            id: "bs4-card-1",
            title: "Basic Card",
            description: "Simple card structure",
            code: {
              html: `<div class="container">
  <div class="card" style="width: 18rem;">
    <img src="https://picsum.photos/300/150" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card Title</h5>
      <p class="card-text">Card content goes here.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>`,
            },
            explanation: "Card with image, title, text, and button"
          }
        ],
        microExercise: {
          instruction: "Create card deck",
          starterCode: { html: "<!-- Add 3 cards in a card-deck -->" },
          solution: { html: `<div class="card-deck">\n  <div class="card"><div class="card-body"><h5>Card 1</h5></div></div>\n  <div class="card"><div class="card-body"><h5>Card 2</h5></div></div>\n  <div class="card"><div class="card-body"><h5>Card 3</h5></div></div>\n</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap4-9",
    number: 9,
    partLabel: "Part 2: Components",
    title: "Forms",
    subtitle: "Modern form styling",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 70,
    prerequisites: ["bootstrap4-8"],
    learningObjectives: ["Build Bootstrap 4 forms"],
    sections: [
      {
        id: "bootstrap4-9-1",
        title: "Form Controls",
        whyItMatters: "Forms are essential for user input.",
        content: `Form elements:
- form-group > form-label + form-control
- form-control-lg, form-control-sm
- form-check (checkbox/radio)
- form-check-inline
- custom-controls (switch, select)`,
        codeExamples: [
          {
            id: "bs4-form-1",
            title: "Bootstrap 4 Form",
            description: "Modern form layout",
            code: {
              html: `<form>
  <div class="form-group">
    <label>Email address</label>
    <input type="email" class="form-control" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label>Password</label>
    <input type="password" class="form-control" placeholder="Password">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="check1">
    <label class="form-check-label" for="check1">Remember me</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`,
            },
            explanation: "Standard form with validation states"
          }
        ],
        microExercise: {
          instruction: "Create form with floating labels",
          starterCode: { html: "<!-- Add form-floating inputs -->" },
          solution: { html: `<div class="form-floating">\n  <input type="text" class="form-control" id="name" placeholder="Name">\n  <label>Name</label>\n</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap4-10",
    number: 10,
    partLabel: "Part 2: Components",
    title: "Navbar",
    subtitle: "Responsive navigation",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 35,
    xpReward: 80,
    prerequisites: ["bootstrap4-9"],
    learningObjectives: ["Create responsive navbars"],
    sections: [
      {
        id: "bootstrap4-10-1",
        title: "Navbar Structure",
        whyItMatters: "Navigation is critical for every site.",
        content: `Navbar classes:
- navbar (base)
- navbar-expand-lg/sm (responsive breakpoint)
- navbar-light / navbar-dark
- Fixed: fixed-top, fixed-bottom, sticky-top`,
        codeExamples: [
          {
            id: "bs4-nav-1",
            title: "Responsive Navbar",
            description: "Collapses on mobile",
            code: {
              html: `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Brand</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
  </div>
</nav>`,
            },
            explanation: "Responsive navbar with toggle on mobile"
          }
        ],
        microExercise: {
          instruction: "Add dropdown to navbar",
          starterCode: { html: "<!-- Add nav-item dropdown -->" },
          solution: { html: `<li class="nav-item dropdown">\n  <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Menu</a>\n  <div class="dropdown-menu">\n    <a class="dropdown-item" href="#">Item</a>\n  </div>\n</li>` }
        }
      }
    ]
  },
  {
    id: "bootstrap4-11",
    number: 11,
    partLabel: "Part 2: Components",
    title: "Alerts",
    subtitle: "Notification messages",
    difficulty: "Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 50,
    prerequisites: ["bootstrap4-10"],
    learningObjectives: ["Create alert messages"],
    sections: [
      {
        id: "bootstrap4-11-1",
        title: "Alert Classes",
        whyItMatters: "User feedback is essential.",
        content: `Alert colors: alert-primary, alert-success, alert-danger, alert-warning, alert-info, alert-light, alert-dark

Dismissible: alert-dismissible + close button
Fading: add .fade .show`,
        codeExamples: [
          {
            id: "bs4-alert-1",
            title: "Alert Messages",
            description: "Various alert types",
            code: {
              html: `<div class="container">
  <div class="alert alert-success">Success!</div>
  <div class="alert alert-warning">Warning message</div>
  <div class="alert alert-danger alert-dismissible">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    Error - dismiss me!
  </div>
</div>`,
            },
            explanation: "Dismissible alert with close button"
          }
        ],
        microExercise: {
          instruction: "Create dismissible alert",
          starterCode: { html: "<!-- Add dismissible info alert -->" },
          solution: { html: `<div class="alert alert-info alert-dismissible">\n  <button type="button" class="close" data-dismiss="alert">&times;</button>\n  Info message\n</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap4-12",
    number: 12,
    partLabel: "Part 2: Components",
    title: "Badges",
    subtitle: "Label indicators",
    difficulty: "Beginner" as const,
    estimatedMinutes: 15,
    xpReward: 40,
    prerequisites: ["bootstrap4-11"],
    learningObjectives: ["Add badges to elements"],
    sections: [
      {
        id: "bootstrap4-12-1",
        title: "Badge Classes",
        whyItMatters: "Badges show counts and labels.",
        content: `Badge: badge class
Colors: badge-primary, badge-secondary, etc.
Pill shape: badge-pill
Can be used inside buttons, navs, etc.`,
        codeExamples: [
          {
            id: "bs4-badge-1",
            title: "Badge Examples",
            description: "Various badge uses",
            code: {
              html: `<div class="container">
  <h1>Example <span class="badge badge-primary">New</span></h1>
  <button class="btn btn-primary">Notifications <span class="badge badge-light">5</span></button>
  <span class="badge badge-pill badge-success">Pill</span>
</div>`,
            },
            explanation: "Badges in various contexts"
          }
        ],
        microExercise: {
          instruction: "Add badge to heading",
          starterCode: { html: "<!-- Add secondary badge to h2 -->" },
          solution: { html: `<h2>Title <span class="badge badge-secondary">Beta</span></h2>` }
        }
      }
    ]
  },
  {
    id: "bootstrap4-13",
    number: 13,
    partLabel: "Part 2: Components",
    title: "Progress",
    subtitle: "Progress bars",
    difficulty: "Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 50,
    prerequisites: ["bootstrap4-12"],
    learningObjectives: ["Create progress bars"],
    sections: [
      {
        id: "bootstrap4-13-1",
        title: "Progress Bars",
        whyItMatters: "Show completion status.",
        content: `Progress: progress > progress-bar
Width: style="width: X%"
Colors: progress-bar-primary, etc.
Stripes: progress-bar-striped
Animation: progress-bar-animated`,
        codeExamples: [
          {
            id: "bs4-prog-1",
            title: "Progress Examples",
            description: "Various progress bars",
            code: {
              html: `<div class="container">
  <div class="progress mb-3">
    <div class="progress-bar" style="width: 70%;">70%</div>
  </div>
  <div class="progress mb-3">
    <div class="progress-bar bg-success" style="width: 50%;">50%</div>
  </div>
  <div class="progress">
    <div class="progress-bar progress-bar-striped" style="width: 90%;"></div>
  </div>
</div>`,
            },
            explanation: "Simple and striped progress bars"
          }
        ],
        microExercise: {
          instruction: "Create animated progress",
          starterCode: { html: "<!-- Add striped animated progress bar -->" },
          solution: { html: `<div class="progress">\n  <div class="progress-bar progress-bar-striped progress-bar-animated" style="width:75%">75%</div>\n</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap4-14",
    number: 14,
    partLabel: "Part 2: Components",
    title: "Tables",
    subtitle: "Table styling",
    difficulty: "Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 50,
    prerequisites: ["bootstrap4-13"],
    learningObjectives: ["Style tables"],
    sections: [
      {
        id: "bootstrap4-14-1",
        title: "Table Classes",
        whyItMatters: "Tables display structured data.",
        content: `Table classes:
- table (basic)
- table-striped, table-bordered
- table-hover, table-dark
- table-sm (condensed)
- table-responsive (wrapper)`,
        codeExamples: [
          {
            id: "bs4-table-1",
            title: "Styled Table",
            description: "Dark theme table",
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
            explanation: "Dark theme hover table"
          }
        ],
        microExercise: {
          instruction: "Create striped table",
          starterCode: { html: "<!-- Add striped bordered table -->" },
          solution: { html: `<table class="table table-striped table-bordered">\n  <tr><th>A</th><th>B</th></tr>\n  <tr><td>1</td><td>2</td></tr>\n</table>` }
        }
      }
    ]
  },
  {
    id: "bootstrap4-15",
    number: 15,
    partLabel: "Part 3: JavaScript Components",
    title: "Modals",
    subtitle: "Dialog windows",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 70,
    prerequisites: ["bootstrap4-14"],
    learningObjectives: ["Create modals"],
    sections: [
      {
        id: "bootstrap4-15-1",
        title: "Modal Structure",
        whyItMatters: "Modals show overlay content.",
        content: `Modal: modal > modal-dialog > modal-content
Parts: modal-header, modal-body, modal-footer
Trigger: data-toggle="modal" data-target="#id`,
        codeExamples: [
          {
            id: "bs4-modal-1",
            title: "Working Modal",
            description: "Button triggers modal",
            code: {
              html: `<button class="btn btn-primary" data-toggle="modal" data-target="#myModal">Open Modal</button>

<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal Title</h5>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">Modal content here!</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.6.2/js/bootstrap.min.js"></script>`,
            },
            explanation: "Modal with header, body, footer"
          },
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
    id: "bootstrap4-16",
    number: 16,
    partLabel: "Part 3: JavaScript Components",
    title: "Tooltips & Popovers",
    subtitle: "Hover interactions",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 60,
    prerequisites: ["bootstrap4-15"],
    learningObjectives: ["Add tooltips and popovers"],
    sections: [
      {
        id: "bootstrap4-16-1",
        title: "Tooltip Setup",
        whyItMatters: "Contextual hints improve UX.",
        content: `Tooltip: data-toggle="tooltip" data-placement="top/bottom/left/right"
Popover: data-toggle="popover" title="..." data-content="..."

Initialize: $('[data-toggle="tooltip"]').tooltip()`,
        codeExamples: [
          {
            id: "bs4-tip-1",
            title: "Tooltips",
            description: "Hover for tooltips",
            code: {
              html: `<div class="container" style="padding:50px;">
  <button class="btn btn-info" data-toggle="tooltip" title="Tooltip text!" data-placement="top">Tooltip</button>
  <button class="btn btn-success" data-toggle="popover" title="Popover Title" data-content="Popover content!" data-placement="right">Popover</button>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.6.2/js/bootstrap.min.js"></script>
<script>
$(function(){ $('[data-toggle="tooltip"]').tooltip(); $('[data-toggle="popover"]').popover(); })
</script>`,
            },
            explanation: "Both require jQuery initialization"
          }
        ],
        microExercise: {
          instruction: "Add tooltip to element",
          starterCode: { html: "<!-- Add tooltip with bottom placement -->" },
          solution: { html: `<span data-toggle="tooltip" data-placement="bottom" title="Hint!">Hover me</span>\n<script>$('[data-toggle=\"tooltip\"]').tooltip()</script>` }
        }
      }
    ]
  },
  {
    id: "bootstrap4-17",
    number: 17,
    partLabel: "Part 3: JavaScript Components",
    title: "Carousel",
    subtitle: "Image slider",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 70,
    prerequisites: ["bootstrap4-16"],
    learningObjectives: ["Build carousels"],
    sections: [
      {
        id: "bootstrap4-17-1",
        title: "Carousel Implementation",
        whyItMatters: "Showcase rotating content.",
        content: `Carousel: carousel > carousel-inner > item
Indicators: carousel-indicators
Controls: carousel-control left/right
Crossfade: add .carousel-fade`,
        codeExamples: [
          {
            id: "bs4-car-1",
            title: "Image Carousel",
            description: "Full carousel with all features",
            code: {
              html: `<div id="myCarousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
  </ol>
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
  <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.6.2/js/bootstrap.min.js"></script>`,
            },
            explanation: "Complete carousel with indicators"
          },
        ],
        microExercise: {
          instruction: "Add carousel with 3 slides",
          starterCode: { html: "<!-- Create carousel with 3 items -->" },
          solution: { html: `<div id="carousel" class="carousel slide" data-ride="carousel">\n  <div class="carousel-inner">\n    <div class="carousel-item active"><img src="https://picsum.photos/600/300/1"></div>\n    <div class="carousel-item"><img src="https://picsum.photos/600/300/2"></div>\n    <div class="carousel-item"><img src="https://picsum.photos/600/300/3"></div>\n  </div>\n</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap4-18",
    number: 18,
    partLabel: "Part 3: JavaScript Components",
    title: "Collapse",
    subtitle: "Accordion system",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 60,
    prerequisites: ["bootstrap4-17"],
    learningObjectives: ["Create collapse/accordion"],
    sections: [
      {
        id: "bootstrap4-18-1",
        title: "Collapse Component",
        whyItMatters: "Expandable content saves space.",
        content: `Collapse: data-toggle="collapse" data-target="#id"
Accordion: use data-parent in links within .accordion`,
        codeExamples: [
          {
            id: "bs4-coll-1",
            title: "Accordion",
            description: "Collapsible panels",
            code: {
              html: `<div id="accordion">
  <div class="card">
    <div class="card-header">
      <a data-toggle="collapse" href="#collapse1">Section 1</a>
    </div>
    <div id="collapse1" class="collapse show" data-parent="#accordion">
      <div class="card-body">Content 1</div>
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      <a data-toggle="collapse" href="#collapse2">Section 2</a>
    </div>
    <div id="collapse2" class="collapse" data-parent="#accordion">
      <div class="card-body">Content 2</div>
    </div>
  </div>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.6.2/js/bootstrap.min.js"></script>`,
            },
            explanation: "Accordion using data-parent"
          }
        ],
        microExercise: {
          instruction: "Create simple collapse",
          starterCode: { html: "<!-- Add button that toggles content -->" },
          solution: { html: `<button data-toggle="collapse" data-target="#content" class="btn btn-primary">Toggle</button>\n<div id="content" class="collapse">Hidden content!</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap4-19",
    number: 19,
    partLabel: "Part 4: Flexbox Mastery",
    title: "Flex Utilities",
    subtitle: "Flexbox deep dive",
    difficulty: "Advanced" as const,
    estimatedMinutes: 35,
    xpReward: 80,
    prerequisites: ["bootstrap4-18"],
    learningObjectives: ["Use flexbox utilities"],
    sections: [
      {
        id: "bootstrap4-19-1",
        title: "Flexbox Classes",
        whyItMatters: "Full flexbox control with utilities.",
        content: `Flex containers: d-flex, d-inline-flex
Direction: flex-row, flex-column, flex-row-reverse
Justify: justify-content-start/end/center/between/around
Align: align-items-start/end/center/baseline/stretch
Wrap: flex-wrap, flex-nowrap, flex-wrap-reverse`,
        codeExamples: [
          {
            id: "bs4-flex-1",
            title: "Flex Utilities",
            description: "Various flexbox layouts",
            code: {
              html: `<div class="container">
  <div class="d-flex flex-row bg-light mb-3">
    <div class="p-2 bg-primary text-white">Flex 1</div>
    <div class="p-2 bg-info text-white">Flex 2</div>
    <div class="p-2 bg-success text-white">Flex 3</div>
  </div>

  <div class="d-flex justify-content-between bg-light mb-3">
    <div class="p-2 bg-warning">Start</div>
    <div class="p-2 bg-warning">Between</div>
    <div class="p-2 bg-warning">End</div>
  </div>

  <div class="d-flex align-items-center bg-light" style="height:100px;">
    <div class="p-2 bg-danger text-white">Centered</div>
  </div>
</div>`,
            },
            explanation: "Flexbox utilities in action"
          }
        ],
        microExercise: {
          instruction: "Create flex row with center alignment",
          starterCode: { html: "<!-- Use d-flex and justify-content-center -->" },
          solution: { html: `<div class="d-flex justify-content-center">\n  <div class="p-2 bg-primary text-white">Centered</div>\n</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap4-20",
    number: 20,
    partLabel: "Part 4: Flexbox Mastery",
    title: "Layout Patterns",
    subtitle: "Real-world layouts",
    difficulty: "Advanced" as const,
    estimatedMinutes: 40,
    xpReward: 90,
    prerequisites: ["bootstrap4-19"],
    learningObjectives: ["Build complete layouts"],
    sections: [
      {
        id: "bootstrap4-20-1",
        title: "Dashboard Layout",
        whyItMatters: "Common production layout pattern.",
        content: `Flexbox-based dashboard:
- Fixed navbar
- Sidebar with flex-column
- Main area with d-flex column
- Cards grid`,
        codeExamples: [
          {
            id: "bs4-layout-1",
            title: "Flex Dashboard",
            description: "Full flexbox dashboard",
            code: {
              html: `<nav class="navbar navbar-dark bg-dark fixed-top">
  <a class="navbar-brand" href="#">Dashboard</a>
</nav>

<div class="container-fluid mt-5">
  <div class="row">
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
      <div class="sidebar-sticky">
        <ul class="nav flex-column">
          <li class="nav-item"><a class="nav-link" href="#">Dashboard</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Reports</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Settings</a></li>
        </ul>
      </div>
    </nav>

    <main class="col-md-10 ml-sm-auto px-4">
      <div class="row mt-4">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">Statistics</div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">Metrics</div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">Reports</div>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>

<style>.sidebar{position:fixed;top:56px;bottom:0;left:0;z-index:100;padding:48px 0 0;}</style>`,
            },
            explanation: "Flexbox-based responsive dashboard"
          }
        ],
        microExercise: {
          instruction: "Add card to dashboard",
          starterCode: { html: "<!-- Add new card to main area -->" },
          solution: { html: `<div class="col-md-4"><div class="card"><div class="card-body">New Card</div></div></div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap4-21",
    number: 21,
    partLabel: "Part 4: Flexbox Mastery",
    title: "Migration from Bootstrap 3",
    subtitle: "BS3 to BS4 guide",
    difficulty: "Advanced" as const,
    estimatedMinutes: 35,
    xpReward: 80,
    prerequisites: ["bootstrap4-20"],
    learningObjectives: ["Migrate from BS3 to BS4"],
    sections: [
      {
        id: "bootstrap4-21-1",
        title: "Migration Changes",
        whyItMatters: "Know what to update when migrating.",
        content: `Key migration points:
- Panels → Cards
- wells → No direct replacement (use card or custom)
- col-xs-* → col-*
- glyphicons → Not included (use FontAwesome)
- .hidden-* → d-none d-*-block
- input-lg/sm → form-control-lg/sm`,
        codeExamples: [
          {
            id: "bs4-mig-1",
            title: "BS3 to BS4 Comparison",
            description: "Before and after",
            code: {
              html: `<!-- Bootstrap 3 -->
<div class="panel panel-primary">
  <div class="panel-heading">Title</div>
  <div class="panel-body">Content</div>
</div>

<!-- Bootstrap 4 -->
<div class="card border-primary">
  <div class="card-header bg-primary text-white">Title</div>
  <div class="card-body">Content</div>
</div>`,
            },
            explanation: "Panel to Card migration"
          }
        ],
        microExercise: {
          instruction: "Convert BS3 grid to BS4",
          starterCode: { html: "<!-- Change col-xs-6 col-md-3 to BS4 syntax -->" },
          solution: { html: `<div class="col-6 col-md-3">...</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap4-22",
    number: 22,
    partLabel: "Part 4: Final Project",
    title: "Admin Dashboard Project",
    subtitle: "Complete Bootstrap 4 project",
    difficulty: "Expert" as const,
    estimatedMinutes: 60,
    xpReward: 150,
    prerequisites: ["bootstrap4-21"],
    learningObjectives: ["Build production-ready dashboard"],
    sections: [
      {
        id: "bootstrap4-22-1",
        title: "Complete Project",
        whyItMatters: "Demonstrate mastery with full project.",
        content: `Final project: Modern admin dashboard with:
- Responsive navbar with search
- Sidebar navigation
- Statistics cards with icons
- Data table
- Modal forms
- Flexbox layout throughout`,
        codeExamples: [
          {
            id: "bs4-final-1",
            title: "Modern Admin Dashboard",
            description: "Full Bootstrap 4 dashboard",
            code: {
              html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Dashboard</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.6.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css">
</head>
<body>

<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <a class="navbar-brand" href="#"><i class="fa fa-dashboard"></i> Admin</a>
  <button class="navbar-toggler" data-toggle="collapse" data-target="#navbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbar">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-bell"></i></a></li>
      <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-user"></i></a></li>
    </ul>
  </div>
</nav>

<div class="container-fluid">
  <div class="row">
    <!-- Sidebar -->
    <nav class="col-md-2 d-none d-md-block bg-dark sidebar pt-5">
      <ul class="nav flex-column">
        <li class="nav-item"><a class="nav-link active" href="#"><i class="fa fa-home"></i> Dashboard</a></li>
        <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-bar-chart"></i> Analytics</a></li>
        <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-users"></i> Users</a></li>
        <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-cog"></i> Settings</a></li>
      </ul>
    </nav>

    <!-- Main -->
    <main class="col-md-10 ml-auto px-4 mt-5">

      <!-- Stats -->
      <div class="row my-4">
        <div class="col-md-3">
          <div class="card bg-primary text-white">
            <div class="card-body">
              <h5 class="card-title"><i class="fa fa-users"></i> Users</h5>
              <h2>1,234</h2>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card bg-success text-white">
            <div class="card-body">
              <h5 class="card-title"><i class="fa fa-shopping-cart"></i> Sales</h5>
              <h2>$8,500</h2>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card bg-warning text-white">
            <div class="card-body">
              <h5 class="card-title"><i class="fa fa-eye"></i> Visits</h5>
              <h2>5,678</h2>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card bg-danger text-white">
            <div class="card-body">
              <h5 class="card-title"><i class="fa fa-exclamation-circle"></i> Issues</h5>
              <h2>12</h2>
            </div>
          </div>
        </div>
      </div>

      <!-- Table -->
      <div class="card mb-4">
        <div class="card-header">Recent Orders</div>
        <div class="card-body">
          <table class="table table-hover">
            <thead>
              <tr><th>ID</th><th>Customer</th><th>Amount</th><th>Status</th><th>Date</th></tr>
            </thead>
            <tbody>
              <tr><td>#1001</td><td>John Doe</td><td>$250</td><td><span class="badge badge-success">Shipped</span></td><td>2024-01-15</td></tr>
              <tr><td>#1002</td><td>Jane Smith</td><td>$180</td><td><span class="badge badge-warning">Pending</span></td><td>2024-01-16</td></tr>
              <tr><td>#1003</td><td>Bob Wilson</td><td>$320</td><td><span class="badge badge-primary">Processing</span></td><td>2024-01-17</td></tr>
            </tbody>
          </table>
        </div>
      </div>

    </main>
  </div>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.6.2/js/bootstrap.min.js"></script>
</body>
</html>`,
            },
            explanation: "Complete Bootstrap 4 admin dashboard"
          }
        ],
        microExercise: {
          instruction: "Add modal to dashboard",
          starterCode: { html: "<!-- Add modal for adding new user -->" },
          solution: { html: `<button data-toggle="modal" data-target="#userModal" class="btn btn-primary">Add User</button>\n<div class="modal" id="userModal"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"><input class="form-control mb-2" placeholder="Name"><input class="form-control mb-2" placeholder="Email"><button class="btn btn-success">Save</button></div></div></div></div>` }
        }
      }
    ]
  }
];

export const bootstrap4Track: Track = {
  id: "bootstrap4",
  title: "Bootstrap 4",
  titleBn: "Bootstrap 4",
  tagline: "Flexbox-powered modern UI system",
  taglineBn: "Flexbox-চালিত আধুনিক UI সিস্টেম",
  icon: "https://img.icons8.com/?size=96&id=S3S1Y5N3q2V6&format=png",
  colorVar: "bootstrap4",
  totalChapters: bootstrap4Chapters.length,
  estimatedHours: Math.round(bootstrap4Chapters.reduce((sum, c) => sum + c.estimatedMinutes, 0) / 60),
  chapters: bootstrap4Chapters,
  brandColor: "#7952B3",
  glowColor: "rgba(121, 82, 179, 0.4)",
};