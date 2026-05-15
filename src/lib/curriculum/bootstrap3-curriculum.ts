import type { Track, Chapter } from "./types";

const bootstrap3ContentBn: Record<string, string> = {
  "bootstrap3-1-1": `Bootstrap 3 হলো একটি CSS ফ্রেমওয়ার্ক যা ২০১৩ সালে Twitter দ্বারা তৈরি। এটি mobile-first, responsive design এর জন্য পরিচিত। Flexbox এর আগের যুগে এটি float-based grid ব্যবহার করত।`,

  "bootstrap3-1-2": `Bootstrap 3 CDN ব্যবহার করতে তিনটি ফাইল লাগে: bootstrap.min.css, jquery.min.js, bootstrap.min.js। jQuery Bootstrap 3 এর interactive components এর জন্য আবশ্যক।`,

  "bootstrap3-1-3": `Bootstrap 3 এর Grid System ১২-কলামের। col-xs-, col-sm-, col-md-, col-lg- ক্লাস আছে। xs = extra small (<576px), sm = small (≥576px), md = medium (≥768px), lg = large (≥992px)।`,

  "bootstrap3-1-4": `.container width fixed করে, .container-fluid full width দেয়। Grid breakpoints এ এদের আচরণ বদলায়।`,
};

const bootstrap3Chapters: Chapter[] = [
  {
    id: "bootstrap3-1",
    number: 1,
    partLabel: "Part 1: Getting Started",
    title: "What is Bootstrap 3?",
    subtitle: "Legacy responsive framework introduction",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 50,
    prerequisites: [],
    learningObjectives: ["Understand Bootstrap 3 purpose", "Know its role in web history"],
    sections: [
      {
        id: "bootstrap3-1-1",
        title: "Bootstrap 3 Overview",
        whyItMatters: "Bootstrap 3 revolutionized responsive web design before Flexbox era.",
        content: `Bootstrap 3 is a CSS framework developed by Twitter in 2013. It revolutionized responsive web design by providing a mobile-first, grid-based system.

Key characteristics:
- 12-column float-based grid system
- jQuery-dependent interactive components
- Glyphicons icon font built-in
- Mobile-first approach to responsive design

Why learn Bootstrap 3?
- Many legacy enterprise systems still use it
- Understanding it helps in migration projects
- It's the foundation for Bootstrap 4 & 5 evolution`,
        contentBn: bootstrap3ContentBn["bootstrap3-1-1"],
        codeExamples: [
          {
            id: "bs3-intro-1",
            title: "Basic Bootstrap 3 Setup",
            description: "CDN links for Bootstrap 3",
            code: {
              html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap 3 Example</title>
  <!-- Bootstrap 3 CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
</head>
<body>
  <div class="container">
    <h1>Hello, Bootstrap 3!</h1>
    <p>This is a basic Bootstrap 3 page.</p>
  </div>
</body>
</html>`,
            },
            explanation: "Basic HTML page with Bootstrap 3 CDN included."
          }
        ],
        callouts: [
          { type: "info", title: "Legacy Technology", content: "Bootstrap 3 is deprecated but still used in legacy systems." }
        ],
        microExercise: {
          instruction: "Create a basic page with Bootstrap 3 CDN",
          instructionBn: "Bootstrap 3 CDN সহ একটি বেসিক পেজ তৈরি করুন",
          starterCode: { html: "<!-- Add Bootstrap 3 CDN and create a container -->\n<div class=\"container\">\n  \n</div>" },
          hint: "Include the Bootstrap 3 CSS CDN link in head section",
          solution: { html: `<!DOCTYPE html>\n<html>\n<head>\n  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">\n</head>\n<body>\n  <div class="container">\n    <h1>My First Bootstrap 3 Page</h1>\n  </div>\n</body>\n</html>` }
        }
      }
    ]
  },
  {
    id: "bootstrap3-2",
    number: 2,
    partLabel: "Part 1: Getting Started",
    title: "Installation via CDN",
    subtitle: "Setting up Bootstrap 3 with jQuery",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 60,
    prerequisites: ["bootstrap3-1"],
    learningObjectives: ["Set up Bootstrap 3 with all dependencies", "Understand jQuery requirement"],
    sections: [
      {
        id: "bootstrap3-2-1",
        title: "CDN Installation",
        whyItMatters: "Proper setup is required for Bootstrap 3 JavaScript components to work.",
        content: `Bootstrap 3 requires jQuery for its JavaScript components. The order matters: jQuery must be loaded before Bootstrap's JS.

Required dependencies:
1. Bootstrap CSS (in <head>)
2. jQuery (before Bootstrap JS)
3. Bootstrap JS (before </body>)`,
        contentBn: bootstrap3ContentBn["bootstrap3-1-2"],
        codeExamples: [
          {
            id: "bs3-setup-1",
            title: "Complete Setup with JS Components",
            description: "Full CDN setup with jQuery",
            code: {
              html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap 3 Complete Setup</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
</head>
<body>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Brand</a>
      </div>
    </div>
  </nav>

  <div class="container">
    <button class="btn btn-primary" data-toggle="modal" data-target="#myModal">
      Open Modal
    </button>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="myModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Title</h4>
        </div>
        <div class="modal-body">Modal content here...</div>
      </div>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</body>
</html>`,
            },
            explanation: "Complete setup with navbar, button, and modal - all interactive components."
          }
        ],
        callouts: [
          { type: "warning", title: "jQuery Required", content: "Bootstrap 3 JavaScript components WILL NOT WORK without jQuery." }
        ],
        microExercise: {
          instruction: "Create a page with working modal",
          starterCode: { html: "<!-- Create a button that opens a modal -->\n<button data-toggle=\"modal\" data-target=\"#demoModal\" class=\"btn btn-success\">Open</button>\n\n<!-- Add modal structure here -->" },
          hint: "Add jQuery and Bootstrap JS before </body>",
          solution: { html: `<button data-toggle="modal" data-target="#demoModal" class="btn btn-success">Open Modal</button>\n\n<div class="modal fade" id="demoModal">\n  <div class="modal-dialog"><div class="modal-content">\n    <div class="modal-body"><p>Hello from Modal!</p></div>\n  </div></div>\n</div>\n\n<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>\n<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>` }
        }
      }
    ]
  },
  {
    id: "bootstrap3-3",
    number: 3,
    partLabel: "Part 1: Core Fundamentals",
    title: "Grid System",
    subtitle: "12-column responsive layout",
    difficulty: "Beginner" as const,
    estimatedMinutes: 35,
    xpReward: 80,
    prerequisites: ["bootstrap3-2"],
    learningObjectives: ["Master 12-column grid", "Understand col-xs, col-sm, col-md, col-lg"],
    sections: [
      {
        id: "bootstrap3-3-1",
        title: "Understanding the Grid",
        whyItMatters: "Grid system is the foundation of all Bootstrap layouts.",
        content: `Bootstrap 3 uses a 12-column float-based grid system. Classes:
- col-xs-* : Extra small (<576px)
- col-sm-* : Small (≥576px)
- col-md-* : Medium (≥768px)
- col-lg-* : Large (≥992px)

The columns must be wrapped in a .row, and the row must be in a .container or .container-fluid.`,
        contentBn: bootstrap3ContentBn["bootstrap3-1-3"],
        codeExamples: [
          {
            id: "bs3-grid-1",
            title: "Basic Grid Layout",
            description: "Three equal columns",
            code: {
              html: `<div class="container">
  <div class="row">
    <div class="col-md-4">
      <div class="well">Column 1</div>
    </div>
    <div class="col-md-4">
      <div class="well">Column 2</div>
    </div>
    <div class="col-md-4">
      <div class="well">Column 3</div>
    </div>
  </div>
</div>`,
            },
            explanation: "Three columns of equal width using col-md-4 (4+4+4=12)"
          },
          {
            id: "bs3-grid-2",
            title: "Responsive Breakpoints",
            description: "Different layouts at different sizes",
            code: {
              html: `<div class="container">
  <div class="row">
    <!-- Mobile: stack (col-xs-12), Desktop: half (col-md-6) -->
    <div class="col-xs-12 col-md-6">
      <div class="well">Column A</div>
    </div>
    <div class="col-xs-12 col-md-6">
      <div class="well">Column B</div>
    </div>
  </div>
</div>`,
            },
            explanation: "Stack on mobile, side-by-side on desktop"
          },
        ],
        callouts: [
          { type: "tip", title: "Offset Classes", content: "Use col-md-offset-4 to add spacing without extra columns." }
        ],
        microExercise: {
          instruction: "Create a 4-column layout on desktop",
          starterCode: { html: "<div class=\"container\">\n  <div class=\"row\">\n    <!-- Add 4 equal columns here -->\n  </div>\n</div>" },
          hint: "Each column should be col-md-3 (3*4=12)",
          solution: { html: `<div class="container">\n  <div class="row">\n    <div class="col-md-3"><div class="well">Col 1</div></div>\n    <div class="col-md-3"><div class="well">Col 2</div></div>\n    <div class="col-md-3"><div class="well">Col 3</div></div>\n    <div class="col-md-3"><div class="well">Col 4</div></div>\n  </div>\n</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap3-4",
    number: 4,
    partLabel: "Part 1: Core Fundamentals",
    title: "Containers",
    subtitle: "Fixed vs fluid containers",
    difficulty: "Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 50,
    prerequisites: ["bootstrap3-3"],
    learningObjectives: ["Understand container vs container-fluid"],
    sections: [
      {
        id: "bootstrap3-4-1",
        title: "Container Types",
        whyItMatters: "Choosing the right container affects layout behavior.",
        content: `.container has fixed width at each breakpoint:
- <576px: 100%
- ≥576px: 540px
- ≥768px: 720px
- ≥992px: 960px
- ≥1200px: 1140px

.container-fluid is always 100% width.`,
        contentBn: bootstrap3ContentBn["bootstrap3-1-4"],
        codeExamples: [
          {
            id: "bs3-cont-1",
            title: "Fixed Container",
            description: "Centered content with max-width",
            code: {
              html: `<div class="container" style="background:#e3f2fd;padding:20px;">
  <h3>Fixed Container</h3>
  <p>Width changes at each breakpoint.</p>
</div>`,
            },
            explanation: "Container adapts its width based on viewport"
          },
          {
            id: "bs3-cont-2",
            title: "Fluid Container",
            description: "Full width always",
            code: {
              html: `<div class="container-fluid" style="background:#ffebee;padding:20px;">
  <h3>Fluid Container</h3>
  <p>Always 100% width.</p>
</div>`,
            },
            explanation: "Takes up the entire viewport width"
          },
        ],
        microExercise: {
          instruction: "Create both container types side by side",
          starterCode: { html: "<!-- Add a row with two columns:\n- left: container \n- right: container-fluid -->" },
          hint: "Use row and columns to show difference",
          solution: { html: `<div class="row">\n  <div class="col-md-6"><div class="container" style="background:#e8f5e9;padding:15px;">Fixed Container</div></div>\n  <div class="col-md-6"><div class="container-fluid" style="background:#fff3e0;padding:15px;">Fluid Container</div></div>\n</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap3-5",
    number: 5,
    partLabel: "Part 1: Core Fundamentals",
    title: "Typography & Utilities",
    subtitle: "Text styles and helper classes",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 60,
    prerequisites: ["bootstrap3-4"],
    learningObjectives: ["Use Bootstrap 3 typography classes", "Apply utility classes"],
    sections: [
      {
        id: "bootstrap3-5-1",
        title: "Typography Classes",
        whyItMatters: "Bootstrap provides ready-to-use text styling.",
        content: `Bootstrap 3 typography:
- h1-h6 classes (use .h1-.h6 for inline)
- .lead for leading paragraph
- .small for smaller text
- text-left/center/right/justify
- text-muted, text-primary, text-success, etc.
- bg-primary, bg-success, etc.`,
        codeExamples: [
          {
            id: "bs3-type-1",
            title: "Typography Examples",
            description: "Text styling classes",
            code: {
              html: `<div class="container">
  <h1>Heading 1 <small>small text</small></h1>
  <p class="lead">This is a leading paragraph.</p>
  <p class="text-center">Center aligned</p>
  <p class="text-primary">Primary text color</p>
  <span class="label label-success">Success Label</span>
</div>`,
            },
            explanation: "Various typography and label classes"
          }
        ],
        microExercise: {
          instruction: "Style text using utility classes",
          starterCode: { html: "<!-- Create: \n- heading with small text\n- leading paragraph\n- right-aligned text\n- warning label -->" },
          solution: { html: `<h2>Title <small>subtitle</small></h2>\n<p class="lead">Leading paragraph here.</p>\n<p class="text-right">Right aligned</p>\n<span class="label label-warning">Warning</span>` }
        }
      }
    ]
  },
  {
    id: "bootstrap3-6",
    number: 6,
    partLabel: "Part 2: UI Components",
    title: "Buttons",
    subtitle: "Button styles and sizes",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 60,
    prerequisites: ["bootstrap3-5"],
    learningObjectives: ["Create various button styles", "Apply button sizes"],
    sections: [
      {
        id: "bootstrap3-6-1",
        title: "Button Classes",
        whyItMatters: "Buttons are essential for user interaction.",
        content: `Button classes: btn-primary, btn-default, btn-success, btn-info, btn-warning, btn-danger, btn-link

Sizes: btn-lg, btn-md (default), btn-sm, btn-xs

States: active, disabled`,
        codeExamples: [
          {
            id: "bs3-btn-1",
            title: "Button Variations",
            description: "All button styles and sizes",
            code: {
              html: `<div class="container">
  <h4>Colors</h4>
  <button class="btn btn-default">Default</button>
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-success">Success</button>
  <button class="btn btn-danger">Danger</button>

  <h4>Sizes</h4>
  <button class="btn btn-primary btn-lg">Large</button>
  <button class="btn btn-primary">Default</button>
  <button class="btn btn-primary btn-sm">Small</button>
  <button class="btn btn-primary btn-xs">Extra Small</button>
</div>`,
            },
            explanation: "All available button styles"
          }
        ],
        microExercise: {
          instruction: "Create a button group",
          starterCode: { html: "<!-- Create a button group with 3 buttons -->" },
          solution: { html: `<div class="btn-group">\n  <button class="btn btn-primary">One</button>\n  <button class="btn btn-primary">Two</button>\n  <button class="btn btn-primary">Three</button>\n</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap3-7",
    number: 7,
    partLabel: "Part 2: UI Components",
    title: "Forms",
    subtitle: "Classic Bootstrap 3 form styling",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 70,
    prerequisites: ["bootstrap3-6"],
    learningObjectives: ["Build forms with Bootstrap 3", "Apply form validation styles"],
    sections: [
      {
        id: "bootstrap3-7-1",
        title: "Form Layouts",
        whyItMatters: "Forms are critical for user input.",
        content: `Form classes:
- form-group wraps label + input
- form-control for inputs
- checkbox and radio use .checkbox/.radio
- input sizes: input-lg, input-sm
- has-success, has-error, has-warning for validation`,
        codeExamples: [
          {
            id: "bs3-form-1",
            title: "Basic Form",
            description: "Vertical form layout",
            code: {
              html: `<form>
  <div class="form-group">
    <label>Email</label>
    <input type="email" class="form-control" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label>Password</label>
    <input type="password" class="form-control" placeholder="Password">
  </div>
  <div class="checkbox">
    <label><input type="checkbox"> Remember me</label>
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
</form>`,
            },
            explanation: "Standard vertical form layout"
          }
        ],
        microExercise: {
          instruction: "Create a registration form",
          starterCode: { html: "<!-- Add: name, email, password inputs, checkbox, submit button -->" },
          solution: { html: `<form>\n  <div class="form-group">\n    <label>Name</label>\n    <input type="text" class="form-control">\n  </div>\n  <div class="form-group">\n    <label>Email</label>\n    <input type="email" class="form-control">\n  </div>\n  <div class="checkbox"><label><input type="checkbox"> I agree</label></div>\n  <button class="btn btn-success">Register</button>\n</form>` }
        }
      }
    ]
  },
  {
    id: "bootstrap3-8",
    number: 8,
    partLabel: "Part 2: UI Components",
    title: "Navbars",
    subtitle: "Responsive navigation",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 35,
    xpReward: 80,
    prerequisites: ["bootstrap3-7"],
    learningObjectives: ["Create responsive navbars", "Add dropdowns to navbar"],
    sections: [
      {
        id: "bootstrap3-8-1",
        title: "Navbar Basics",
        whyItMatters: "Navigation is key to any website.",
        content: `Navbar classes:
- navbar-default or navbar-inverse
- navbar-fixed-top or navbar-fixed-bottom
- .container or .container-fluid inside
- navbar-brand for logo
- navbar-toggle for collapse button`,
        codeExamples: [
          {
            id: "bs3-nav-1",
            title: "Basic Navbar",
            description: "Navigation bar with brand",
            code: {
              html: `<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Brand</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</nav>`,
            },
            explanation: "Simple navbar with navigation links"
          }
        ],
        microExercise: {
          instruction: "Add a dropdown to navbar",
          starterCode: { html: "<!-- Add a dropdown menu to navbar -->" },
          solution: { html: `<li class="dropdown">\n  <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>\n  <ul class="dropdown-menu">\n    <li><a href="#">Action</a></li>\n    <li><a href="#">Another</a></li>\n  </ul>\n</li>` }
        }
      }
    ]
  },
  {
    id: "bootstrap3-9",
    number: 9,
    partLabel: "Part 2: UI Components",
    title: "Tables",
    subtitle: "Table styles and responsive tables",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 60,
    prerequisites: ["bootstrap3-8"],
    learningObjectives: ["Style tables with Bootstrap classes", "Make tables responsive"],
    sections: [
      {
        id: "bootstrap3-9-1",
        title: "Table Classes",
        whyItMatters: "Tables display structured data.",
        content: `Table classes:
- table (basic)
- table-striped
- table-bordered
- table-hover
- table-condensed
- table-responsive (wrapper)`,
        codeExamples: [
          {
            id: "bs3-table-1",
            title: "Styled Table",
            description: "Striped bordered hover table",
            code: {
              html: `<div class="table-responsive">
  <table class="table table-striped table-bordered table-hover">
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
            explanation: "Responsive wrapper makes table scrollable on mobile"
          }
        ],
        microExercise: {
          instruction: "Create a compact striped table",
          starterCode: { html: "<!-- Add a table with 3 rows -->" },
          solution: { html: `<table class="table table-striped table-condensed">\n  <tr><th>ID</th><th>Name</th></tr>\n  <tr><td>1</td><td>One</td></tr>\n  <tr><td>2</td><td>Two</td></tr>\n</table>` }
        }
      }
    ]
  },
  {
    id: "bootstrap3-10",
    number: 10,
    partLabel: "Part 2: UI Components",
    title: "Panels & Wells",
    subtitle: "Content containers",
    difficulty: "Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 50,
    prerequisites: ["bootstrap3-9"],
    learningObjectives: ["Use panel and well components"],
    sections: [
      {
        id: "bootstrap3-10-1",
        title: "Panels and Wells",
        whyItMatters: "Group related content visually.",
        content: `Well classes: well, well-lg, well-sm
Panel classes: panel, panel-default, panel-primary, panel-success, panel-warning, panel-danger
Panel parts: panel-heading, panel-body, panel-footer`,
        codeExamples: [
          {
            id: "bs3-pan-1",
            title: "Panels and Wells",
            description: "Content containers",
            code: {
              html: `<div class="well well-lg">Large well content</div>
<div class="panel panel-primary">
  <div class="panel-heading">Panel Title</div>
  <div class="panel-body">Panel body content</div>
  <div class="panel-footer">Footer</div>
</div>`,
            },
            explanation: "Wells and panels for content grouping"
          }
        ],
        microExercise: {
          instruction: "Create a colored panel",
          starterCode: { html: "<!-- Add a success panel with heading and body -->" },
          solution: { html: `<div class="panel panel-success">\n  <div class="panel-heading">Success</div>\n  <div class="panel-body">Content here</div>\n</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap3-11",
    number: 11,
    partLabel: "Part 2: UI Components",
    title: "Glyphicons",
    subtitle: "Built-in icon system",
    difficulty: "Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 50,
    prerequisites: ["bootstrap3-10"],
    learningObjectives: ["Use Glyphicons icons"],
    sections: [
      {
        id: "bootstrap3-11-1",
        title: "Glyphicon Icons",
        whyItMatters: "Icons enhance UI without external libraries.",
        content: `Glyphicons are built into Bootstrap 3. Use: <span class="glyphicon glyphicon-name"></span>

Common icons: star, heart, trash, edit, search, plus, minus, cog, envelope, phone`,
        codeExamples: [
          {
            id: "bs3-gly-1",
            title: "Glyphicon Examples",
            description: "Various Glyphicons",
            code: {
              html: `<div class="container">
  <span class="glyphicon glyphicon-star"></span> Star
  <span class="glyphicon glyphicon-heart"></span> Heart
  <span class="glyphicon glyphicon-search"></span> Search
  <span class="glyphicon glyphicon-envelope"></span> Email

  <button class="btn btn-primary">
    <span class="glyphicon glyphicon-cog"></span> Settings
  </button>
</div>`,
            },
            explanation: "Glyphicons used standalone and in buttons"
          },
        ],
        microExercise: {
          instruction: "Add icon to a button",
          starterCode: { html: "<!-- Create a search button with icon -->" },
          solution: { html: `<button class="btn btn-default"><span class="glyphicon glyphicon-search"></span> Search</button>` }
        }
      }
    ]
  },
  {
    id: "bootstrap3-12",
    number: 12,
    partLabel: "Part 2: UI Components",
    title: "Alerts & Badges",
    subtitle: "Status messaging components",
    difficulty: "Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 50,
    prerequisites: ["bootstrap3-11"],
    learningObjectives: ["Create alerts and badges"],
    sections: [
      {
        id: "bootstrap3-12-1",
        title: "Alerts and Badges",
        whyItMatters: "Provide feedback to users.",
        content: `Alert classes: alert-success, alert-info, alert-warning, alert-danger
Dismiss with: alert-dismissible + <button class="close">

Badge: badge class (often in navbar)`,
        codeExamples: [
          {
            id: "bs3-alert-1",
            title: "Alerts and Badges",
            description: "Feedback components",
            code: {
              html: `<div class="container">
  <div class="alert alert-success">Success!</div>
  <div class="alert alert-warning">Warning message</div>
  <div class="alert alert-danger">Error occurred!</div>

  <span class="badge">5</span> Notifications
</div>`,
            },
            explanation: "Various alert types and badge"
          }
        ],
        microExercise: {
          instruction: "Create a dismissible alert",
          starterCode: { html: "<!-- Add a dismissible info alert -->" },
          solution: { html: `<div class="alert alert-info alert-dismissible">\n  <button type="button" class="close" data-dismiss="alert">&times;</button>\n  Dismissable alert!\n</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap3-13",
    number: 13,
    partLabel: "Part 3: Interactive Components",
    title: "Modals",
    subtitle: "jQuery-driven dialog boxes",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 70,
    prerequisites: ["bootstrap3-12"],
    learningObjectives: ["Create and trigger modals"],
    sections: [
      {
        id: "bootstrap3-13-1",
        title: "Modal Implementation",
        whyItMatters: "Modals show content in an overlay.",
        content: `Modal structure:
- modal (wrapper)
- modal-dialog > modal-content
- modal-header, modal-body, modal-footer

Trigger with: data-toggle="modal" data-target="#myModal"`,
        codeExamples: [
          {
            id: "bs3-modal-1",
            title: "Working Modal",
            description: "Button triggers modal",
            code: {
              html: `<button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

<div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Modal Title</h4>
      </div>
      <div class="modal-body">Modal content here!</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>`,
            },
            explanation: "Click button to open modal - requires jQuery!"
          },
        ],
        microExercise: {
          instruction: "Create a login modal",
          starterCode: { html: "<!-- Add trigger button and modal with form -->" },
          hint: "Don't forget jQuery and Bootstrap JS",
          solution: { html: `<button data-toggle="modal" data-target="#loginModal" class="btn btn-primary">Login</button>\n\n<div class="modal" id="loginModal">\n  <div class="modal-dialog"><div class="modal-content">\n    <div class="modal-body">\n      <input class="form-control" placeholder="Username">\n      <input class="form-control" type="password" placeholder="Password">\n    </div>\n  </div></div>\n</div>\n\n<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>\n<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>` }
        }
      }
    ]
  },
  {
    id: "bootstrap3-14",
    number: 14,
    partLabel: "Part 3: Interactive Components",
    title: "Dropdowns",
    subtitle: "Click-triggered menus",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 60,
    prerequisites: ["bootstrap3-13"],
    learningObjectives: ["Create dropdown menus"],
    sections: [
      {
        id: "bootstrap3-14-1",
        title: "Dropdown Implementation",
        whyItMatters: "Dropdowns provide compact navigation.",
        content: `Dropdown structure:
- dropdown (wrapper)
- dropdown-toggle with data-toggle="dropdown"
- dropdown-menu

Add divider: <li class="divider"></li>
Add header: <li class="dropdown-header">`,
        codeExamples: [
          {
            id: "bs3-drop-1",
            title: "Dropdown Menu",
            description: "Click to open menu",
            code: {
              html: `<div class="dropdown">
  <button class="btn btn-default dropdown-toggle" data-toggle="dropdown">
    Menu <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another</a></li>
    <li class="divider"></li>
    <li><a href="#">Separated</a></li>
  </ul>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>\n<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>`,
            },
            explanation: "Dropdown requires jQuery for toggle behavior"
          },
        ],
        microExercise: {
          instruction: "Create dropdown with headers",
          starterCode: { html: "<!-- Add dropdown with header and divider -->" },
          solution: { html: `<div class="dropdown">\n  <button class="btn btn-primary" data-toggle="dropdown">Dropdown</button>\n  <ul class="dropdown-menu">\n    <li class="dropdown-header">Group 1</li>\n    <li><a href="#">Item 1</a></li>\n    <li><a href="#">Item 2</a></li>\n    <li class="divider"></li>\n    <li><a href="#">Item 3</a></li>\n  </ul>\n</div>\n<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>\n<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>` }
        }
      }
    ]
  },
  {
    id: "bootstrap3-15",
    number: 15,
    partLabel: "Part 3: Interactive Components",
    title: "Carousel",
    subtitle: "Image/content slider",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 70,
    prerequisites: ["bootstrap3-14"],
    learningObjectives: ["Build image carousel"],
    sections: [
      {
        id: "bootstrap3-15-1",
        title: "Carousel Implementation",
        whyItMatters: "Carousels showcase rotating content.",
        content: `Carousel structure:
- carousel (add slide class)
- carousel-inner > item
- carousel-indicators
- carousel-control left/right

Add .slide for animation`,
        codeExamples: [
          {
            id: "bs3-car-1",
            title: "Image Carousel",
            description: "Sliding image gallery",
            code: {
              html: `<div id="myCarousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
  </ol>

  <div class="carousel-inner">
    <div class="item active">
      <img src="https://picsum.photos/800/400?random=1" alt="Slide 1">
      <div class="carousel-caption"><h3>Slide One</h3></div>
    </div>
    <div class="item">
      <img src="https://picsum.photos/800/400?random=2" alt="Slide 2">
      <div class="carousel-caption"><h3>Slide Two</h3></div>
    </div>
  </div>

  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
  </a>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>\n<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>`,
            },
            explanation: "Working carousel with indicators and controls"
          },
        ],
        microExercise: {
          instruction: "Add carousel with 3 slides",
          starterCode: { html: "<!-- Create carousel with 3 items -->" },
          hint: "Remember carousel-indicators and controls",
          solution: { html: `<div id="myCarousel" class="carousel slide" data-ride="carousel">\n  <div class="carousel-inner">\n    <div class="item active"><img src="https://picsum.photos/600/300?1"><h3>One</h3></div>\n    <div class="item"><img src="https://picsum.photos/600/300?2"><h3>Two</h3></div>\n    <div class="item"><img src="https://picsum.photos/600/300?3"><h3>Three</h3></div>\n  </div>\n</div>\n<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>\n<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>` }
        }
      }
    ]
  },
  {
    id: "bootstrap3-16",
    number: 16,
    partLabel: "Part 3: Interactive Components",
    title: "Collapse",
    subtitle: "Accordion and toggle",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 60,
    prerequisites: ["bootstrap3-15"],
    learningObjectives: ["Create collapse/accordion"],
    sections: [
      {
        id: "bootstrap3-16-1",
        title: "Collapse Component",
        whyItMatters: "Collapse saves space with expandable content.",
        content: `Collapse: data-toggle="collapse" data-target="#id"

Accordion: panel-group wrapper + data-parent="#accordion"`,
        codeExamples: [
          {
            id: "bs3-coll-1",
            title: "Accordion",
            description: "Collapsible panels",
            code: {
              html: `<div class="panel-group" id="accordion">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Section 1</a>
      </h4>
    </div>
    <div id="collapse1" class="panel-collapse collapse in">
      <div class="panel-body">Content 1</div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Section 2</a>
      </h4>
    </div>
    <div id="collapse2" class="panel-collapse collapse">
      <div class="panel-body">Content 2</div>
    </div>
  </div>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>\n<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>`,
            },
            explanation: "Accordion using panel-group with data-parent"
          }
        ],
        microExercise: {
          instruction: "Create simple toggle button",
          starterCode: { html: "<!-- Add button that toggles content visibility -->" },
          solution: { html: `<button class="btn btn-info" data-toggle="collapse" data-target="#content">Toggle</button>\n<div id="content" class="collapse">Hidden content revealed!</div>\n<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>\n<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>` }
        }
      }
    ]
  },
  {
    id: "bootstrap3-17",
    number: 17,
    partLabel: "Part 3: Interactive Components",
    title: "Tooltips & Popovers",
    subtitle: "Hover-triggered hints",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 60,
    prerequisites: ["bootstrap3-16"],
    learningObjectives: ["Add tooltips and popovers"],
    sections: [
      {
        id: "bootstrap3-17-1",
        title: "Tooltips",
        whyItMatters: "Tooltips provide contextual help.",
        content: `Tooltip: data-toggle="tooltip" title="text"
Initialize: $('[data-toggle="tooltip"]').tooltip()

Popover: data-toggle="popover" title="text" data-content="content"
Initialize: $('[data-toggle="popover"]').popover()`,
        codeExamples: [
          {
            id: "bs3-tip-1",
            title: "Tooltips and Popovers",
            description: "Hover for tooltip, click for popover",
            code: {
              html: `<div class="container" style="padding:50px">
  <button class="btn btn-default" data-toggle="tooltip" title="Tooltip text!">Hover Me</button>
  <button class="btn btn-primary" data-toggle="popover" title="Popover Title" data-content="Popover content here!">Click Me</button>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<script>
$(function(){
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
});
</script>`,
            },
            explanation: "Tooltips require jQuery initialization"
          }
        ],
        microExercise: {
          instruction: "Add tooltip to icon",
          starterCode: { html: "<!-- Add tooltip to a glyphicon star -->" },
          solution: { html: `<span class="glyphicon glyphicon-star" data-toggle="tooltip" title="Favorite!" style="font-size:30px;cursor:pointer;"></span>\n<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>\n<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>\n<script>$('[data-toggle="tooltip"]').tooltip();</script>` }
        }
      }
    ]
  },
  {
    id: "bootstrap3-18",
    number: 18,
    partLabel: "Part 4: Real Projects",
    title: "Admin Dashboard",
    subtitle: "Legacy dashboard layout",
    difficulty: "Advanced" as const,
    estimatedMinutes: 40,
    xpReward: 100,
    prerequisites: ["bootstrap3-17"],
    learningObjectives: ["Build complete admin dashboard"],
    sections: [
      {
        id: "bootstrap3-18-1",
        title: "Dashboard Layout",
        whyItMatters: "Admin dashboards are common legacy projects.",
        content: `Classic admin dashboard structure:
- Fixed navbar at top
- Sidebar with menu
- Main content area with cards/panels
- Footer`,
        codeExamples: [
          {
            id: "bs3-dash-1",
            title: "Admin Dashboard",
            description: "Complete dashboard layout",
            code: {
              html: `<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Admin Panel</a>
    </div>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span> Admin</a></li>
    </ul>
  </div>
</nav>

<div class="container-fluid">
  <div class="row">
    <div class="col-sm-3 col-md-2 sidebar">
      <ul class="nav nav-sidebar">
        <li class="active"><a href="#">Dashboard</a></li>
        <li><a href="#">Analytics</a></li>
        <li><a href="#">Users</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </div>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
      <h1>Dashboard</h1>
      <div class="row">
        <div class="col-md-3">
          <div class="panel panel-primary">
            <div class="panel-heading"><h3>1,234</h3></div>
            <div class="panel-body">Users</div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="panel panel-success">
            <div class="panel-heading"><h3>$8,500</h3></div>
            <div class="panel-body">Revenue</div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="panel panel-warning">
            <div class="panel-heading"><h3>56</h3></div>
            <div class="panel-body">Orders</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.sidebar { position:fixed;top:50px;bottom:0;left:0;z-index:1000;display:block;padding:20px;overflow-x:hidden;background:#2d2d2d;}
.main { padding:20px;margin-top:50px; }
.nav-sidebar > li > a { color:#fff; }
</style>`,
            },
            explanation: "Complete admin dashboard with sidebar"
          }
        ],
        microExercise: {
          instruction: "Add a table to the dashboard",
          starterCode: { html: "<!-- Add a striped table with user data -->" },
          solution: { html: `<table class="table table-striped">\n  <thead><tr><th>ID</th><th>Name</th><th>Status</th></tr></thead>\n  <tbody><tr><td>1</td><td>John</td><td><span class="label label-success">Active</span></td></tr></tbody>\n</table>` }
        }
      }
    ]
  },
  {
    id: "bootstrap3-19",
    number: 19,
    partLabel: "Part 4: Real Projects",
    title: "Landing Page Clone",
    subtitle: "Responsive landing page",
    difficulty: "Advanced" as const,
    estimatedMinutes: 40,
    xpReward: 100,
    prerequisites: ["bootstrap3-18"],
    learningObjectives: ["Build responsive landing page"],
    sections: [
      {
        id: "bootstrap3-19-1",
        title: "Landing Page Structure",
        whyItMatters: "Landing pages demonstrate Bootstrap layout skills.",
        content: `Components:
- Hero section with jumbotron
- Feature columns
- Call-to-action sections
- Footer`,
        codeExamples: [
          {
            id: "bs3-lp-1",
            title: "Landing Page",
            description: "Complete landing page",
            code: {
              html: `<nav class="navbar navbar-default">
  <div class="container">
    <div class="navbar-header"><a class="navbar-brand" href="#">Brand</a></div>
    <ul class="nav navbar-nav">
      <li><a href="#">Features</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</nav>

<div class="jumbotron">
  <div class="container">
    <h1>Welcome to Our Product</h1>
    <p>The best solution for your needs</p>
    <p><a class="btn btn-primary btn-lg" href="#">Get Started</a></p>
  </div>
</div>

<div class="container">
  <div class="row">
    <div class="col-md-4">
      <h3>Feature One</h3>
      <p>Description of feature one.</p>
    </div>
    <div class="col-md-4">
      <h3>Feature Two</h3>
      <p>Description of feature two.</p>
    </div>
    <div class="col-md-4">
      <h3>Feature Three</h3>
      <p>Description of feature three.</p>
    </div>
  </div>
</div>

<hr>
<footer class="container">
  <p>&copy; 2024 Company</p>
</footer>`,
            },
            explanation: "Complete landing page with all sections"
          }
        ],
        microExercise: {
          instruction: "Add pricing section",
          starterCode: { html: "<!-- Add 3 pricing cards -->" },
          solution: { html: `<div class="row">\n  <div class="col-md-4"><div class="panel panel-default"><div class="panel-heading"><h3>Basic</h3></div><div class="panel-body"><h2>$9</h2></div></div></div>\n  <div class="col-md-4"><div class="panel panel-primary"><div class="panel-heading"><h3>Pro</h3></div><div class="panel-body"><h2>$29</h2></div></div></div>\n  <div class="col-md-4"><div class="panel panel-default"><div class="panel-heading"><h3>Enterprise</h3></div><div class="panel-body"><h2>$99</h2></div></div></div>\n</div>` }
        }
      }
    ]
  },
  {
    id: "bootstrap3-20",
    number: 20,
    partLabel: "Part 4: Real Projects",
    title: "Final Project: Full Website",
    subtitle: "Complete Bootstrap 3 website",
    difficulty: "Expert" as const,
    estimatedMinutes: 60,
    xpReward: 150,
    prerequisites: ["bootstrap3-19"],
    learningObjectives: ["Build complete production-ready website"],
    sections: [
      {
        id: "bootstrap3-20-1",
        title: "Complete Website",
        whyItMatters: "Demonstrate mastery by building full site.",
        content: `Final project: Build a complete website combining:
- Full navbar with dropdowns
- Hero section
- Features grid
- Carousel
- Forms
- Footer
- Responsive at all breakpoints`,
        codeExamples: [
          {
            id: "bs3-final-1",
            title: "Complete Website",
            description: "Full Bootstrap 3 website",
            code: {
              html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Complete Bootstrap 3 Site</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <style>.hero{background:#337ab7;color:#fff;padding:100px 0;text-align:center;}</style>
</head>
<body>
  <!-- Navbar -->
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Company</a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">Services <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Development</a></li>
            </ul>
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Hero -->
  <div class="hero">
    <div class="container">
      <h1>Build Amazing Websites</h1>
      <p>Professional web solutions for your business</p>
      <button class="btn btn-lg btn-warning" data-toggle="modal" data-target="#contactModal">Contact Us</button>
    </div>
  </div>

  <!-- Features -->
  <div class="container" style="padding:60px 0">
    <div class="row">
      <div class="col-md-4 text-center">
        <span class="glyphicon glyphicon-cloud" style="font-size:50px;color:#337ab7;"></span>
        <h3>Cloud Hosting</h3>
        <p>Reliable cloud solutions</p>
      </div>
      <div class="col-md-4 text-center">
        <span class="glyphicon glyphicon-phone" style="font-size:50px;color:#337ab7;"></span>
        <h3>Mobile Ready</h3>
        <p>Fully responsive design</p>
      </div>
      <div class="col-md-4 text-center">
        <span class="glyphicon glyphicon-lock" style="font-size:50px;color:#337ab7;"></span>
        <h3>Secure</h3>
        <p>Enterprise security</p>
      </div>
    </div>
  </div>

  <!-- Contact Modal -->
  <div class="modal fade" id="contactModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Contact Us</h4>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label>Name</label>
              <input type="text" class="form-control" placeholder="Your name">
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control" placeholder="Your email">
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer style="background:#222;color:#fff;padding:30px 0;text-align:center;">
    <div class="container">
      <p>&copy; 2024 Company. All rights reserved.</p>
    </div>
  </footer>

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</body>
</html>`,
            },
            explanation: "Complete production-ready Bootstrap 3 website"
          }
        ],
        microExercise: {
          instruction: "Add carousel to the site",
          starterCode: { html: "<!-- Add carousel with 2 slides before features -->" },
          hint: "Use carousel structure from earlier chapter",
          solution: { html: `<div id="heroCarousel" class="carousel slide" data-ride="carousel">\n  <div class="carousel-inner">\n    <div class="item active"><img src="https://picsum.photos/1200/400?1"><div class="carousel-caption"><h3>Welcome</h3></div></div>\n    <div class="item"><img src="https://picsum.photos/1200/400?2"><div class="carousel-caption"><h3>Services</h3></div></div>\n  </div>\n</div>` }
        }
      }
    ]
  }
];

export const bootstrap3Track: Track = {
  id: "bootstrap3",
  title: "Bootstrap 3",
  titleBn: "Bootstrap 3",
  tagline: "Legacy responsive web design mastery",
  taglineBn: "লিগ্যি রেসপন্সিভ ওয়েব ডিজাইন মাস্টারি",
  icon: "https://img.icons8.com/?size=96&id=KVZ9J5nHs7q0&format=png",
  colorVar: "bootstrap3",
  totalChapters: bootstrap3Chapters.length,
  estimatedHours: Math.round(bootstrap3Chapters.reduce((sum, c) => sum + c.estimatedMinutes, 0) / 60),
  chapters: bootstrap3Chapters,
  brandColor: "#563D7C",
  glowColor: "rgba(86, 61, 124, 0.4)",
};