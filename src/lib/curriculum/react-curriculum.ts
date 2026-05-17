import type { Track, Chapter } from "./types";

const reactChapters: Chapter[] = [
  {
    id: "react-1",
    number: 1,
    partLabel: "Part 1: React Fundamentals",
    title: "What Is React and Why Use It?",
    subtitle: "Introduction to React",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: [],
    learningObjectives: ["Understand what React is", "Know React's virtual DOM", "Understand component-based architecture"],
    sections: [
      {
        id: "react-1-1",
        title: "React Overview",
        whyItMatters: "React powers the modern web.",
        content: `React is a JavaScript library developed by Facebook (Meta) for building user interfaces. It revolutionized how we think about building web applications by introducing component-based architecture and a virtual DOM.

Why React matters:
- Used by Facebook, Netflix, Airbnb, and thousands of companies
- Massive ecosystem: React Router, Redux, Next.js, and more
- Strong community and documentation
- High demand in the job market

React 18+ features:
- Concurrent rendering for better performance
- Automatic batching for fewer re-renders
- New hooks: useId, useTransition, useDeferredValue
- Suspense improvements for data fetching`,

        codeExamples: [
          {
            id: "react-1-ex1",
            title: "React Example",
            description: "Simple React component",
            code: { javascript: "import React from 'react';\n\nfunction App() {\n  return (\n    <div>\n      <h1>Hello, React!</h1>\n      <p>Welcome to the world of components.</p>\n    </div>\n  );\n}\n\nexport default App;" },
            explanation: "React uses JSX to write HTML-like syntax in JavaScript."
          }
        ],
        callouts: [
          {
            type: "info",
            title: "JavaScript Prerequisite",
            content: "This track assumes you know JavaScript. If you need a refresher, check out our JavaScript course for fundamentals like functions, arrays, and objects."
          }
        ]
      },
      {
        id: "react-1-2",
        title: "Virtual DOM",
        whyItMatters: "Understanding how React updates efficiently.",
        content: `The Virtual DOM is a lightweight copy of the actual DOM. When state changes, React compares the new virtual DOM with the previous one (reconciliation) and only updates what actually changed in the real DOM.

How it works:
1. State changes trigger re-render
2. React creates new virtual DOM
3. React compares with previous version
4. React calculates minimal changes
5. React updates only what changed in real DOM`,
        codeExamples: [
          {
            id: "react-1-ex2",
            title: "Virtual DOM Flow",
            description: "How React updates efficiently",
            code: { javascript: "// Traditional DOM - updates everything\ndocument.getElementById('app').innerHTML = '<div>New Content</div>';\n\n// React Virtual DOM - updates only what changed\n// 1. Render: Creates virtual DOM\n// 2. Diff: Compares new vs old\n// 3. Update: Changes only modified elements" },
            explanation: "Virtual DOM makes React fast and efficient."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What is React?", options: ["A programming language", "A JavaScript library", "A database", "A server"], correctAnswer: 1, explanation: "React is a JavaScript library for building UIs.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What is the Virtual DOM?", options: ["A copy of the browser's DOM", "A lightweight JavaScript object", "A CSS framework", "A database"], correctAnswer: 1, explanation: "Virtual DOM is a lightweight representation of the real DOM.", difficulty: 1 },
        { id: "q3", type: "true-false" as const, question: "React was created by Google.", correctAnswer: false, explanation: "React was created by Facebook (Meta).", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "Which company uses React?", options: ["Microsoft only", "Facebook only", "Many companies including Facebook, Netflix, Airbnb", "No major companies"], correctAnswer: 2, explanation: "React is used by many top companies.", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "What powers React's efficient updates?", options: ["jQuery", "Virtual DOM", "Angular", "Vue"], correctAnswer: 1, explanation: "Virtual DOM allows React to update efficiently.", difficulty: 2 },
        { id: "q6", type: "mcq" as const, question: "What is JSX?", options: ["A database", "A programming language", "Syntax extension for JavaScript", "A CSS framework"], correctAnswer: 2, explanation: "JSX lets you write HTML-like code in JavaScript.", difficulty: 1 },
        { id: "q7", type: "true-false" as const, question: "React can only be used for web apps.", correctAnswer: false, explanation: "React can also be used for mobile (React Native).", difficulty: 2 },
        { id: "q8", type: "mcq" as const, question: "What is React's main concept?", options: ["Templates", "Components", "SQL", "HTML only"], correctAnswer: 1, explanation: "Components are the building blocks of React apps.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "React", value: "JavaScript library for UI" },
      { label: "Virtual DOM", value: "Lightweight DOM copy" },
      { label: "JSX", value: "HTML in JavaScript" },
      { label: "Component", value: "Reusable UI piece" }
    ]
  },
  {
    id: "react-2",
    number: 2,
    title: "Setting Up React Environment",
    subtitle: "Install and configure React",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["react-1"],
    learningObjectives: ["Install Node.js and npm", "Create React app with Vite", "Understand project structure"],
    sections: [
      {
        id: "react-2-1",
        title: "Installation",
        whyItMatters: "Setup required before development.",
        content: `There are two main ways to create a React app: Create React App (CRA) and Vite. Vite is faster and more modern, so we'll use that.

Prerequisites:
- Node.js 18+ (LTS)
- npm or yarn`,

        codeExamples: [
          {
            id: "react-2-ex1",
            title: "Setup Commands",
            description: "Create React app with Vite",
            code: { javascript: "// Check Node version\nnode --version\n\n// Check npm version\nnpm --version\n\n// Create React app with Vite\nnpm create vite@latest my-react-app -- --template react\n\n// Navigate to project\ncd my-react-app\n\n// Install dependencies\nnpm install\n\n// Start development server\nnpm run dev" },
            explanation: "Vite provides fast hot module replacement."
          }
        ]
      },
      {
        id: "react-2-2",
        title: "Project Structure",
        whyItMatters: "Navigate React projects efficiently.",
        content: `Understanding the folder structure helps you work efficiently.`,
        codeExamples: [
          {
            id: "react-2-ex2",
            title: "Folder Structure",
            description: "Vite React project layout",
            code: { javascript: "my-react-app/\n├── node_modules/        # Dependencies\n├── public/              # Static files\n├── src/\n│   ├── App.jsx          # Main component\n│   ├── main.jsx         # Entry point\n│   ├── index.css        # Global styles\n│   └── assets/          # Images, fonts\n├── index.html           # Entry HTML\n├── package.json         # Dependencies\n├── vite.config.js       # Vite config\n└── README.md            # Documentation" },
            explanation: "src/ folder contains your React code."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What tool creates React apps?", options: ["npm create vite", "npm install react", "git clone", "python"], correctAnswer: 0, explanation: "npm create vite@latest creates a new React app.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "Which is the main entry file in Vite React?", options: ["index.html", "main.jsx", "App.js", "package.json"], correctAnswer: 1, explanation: "main.jsx is the entry point.", difficulty: 1 },
        { id: "q3", type: "true-false" as const, question: "Node.js is required for React development.", correctAnswer: true, explanation: "Node.js is required to run the development server.", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "What is Vite?", options: ["A database", "A build tool", "A CSS framework", "An OS"], correctAnswer: 1, explanation: "Vite is a fast build tool for web projects.", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "Which command starts the dev server?", options: ["npm start", "npm run dev", "npm build", "npm test"], correctAnswer: 1, explanation: "npm run dev starts the Vite dev server.", difficulty: 1 },
        { id: "q6", type: "mcq" as const, question: "Where do you write React components?", options: ["public folder", "src folder", "node_modules", "config folder"], correctAnswer: 1, explanation: "Components go in the src folder.", difficulty: 1 },
        { id: "q7", type: "true-false" as const, question: "Vite is faster than Create React App.", correctAnswer: true, explanation: "Vite uses native ES modules and is faster.", difficulty: 1 },
        { id: "q8", type: "mcq" as const, question: "What does package.json contain?", options: ["HTML code", "Project dependencies and scripts", "CSS styles", "Database config"], correctAnswer: 1, explanation: "package.json lists dependencies and scripts.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "npm create vite", value: "Create new React app" },
      { label: "npm run dev", value: "Start dev server" },
      { label: "npm run build", value: "Build for production" },
      { label: "src/", value: "React source code" }
    ]
  },
  {
    id: "react-3",
    number: 3,
    title: "JSX — JavaScript XML",
    subtitle: "Writing HTML in JavaScript",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["react-2"],
    learningObjectives: ["Understand JSX syntax", "Use expressions in JSX", "Write conditional rendering"],
    sections: [
      {
        id: "react-3-1",
        title: "JSX Basics",
        whyItMatters: "JSX lets you write UI in JavaScript.",
        content: `JSX is a syntax extension for JavaScript that looks like HTML. It allows you to write UI elements in a familiar HTML-like syntax while having the full power of JavaScript.

Key points:
- JSX is NOT HTML - it's closer to JavaScript
- Must return a single root element
- Use className instead of class
- Close all tags properly`,
        codeExamples: [
          {
            id: "react-3-ex1",
            title: "JSX Examples",
            description: "Basic JSX syntax",
            code: { javascript: "// Valid JSX\nfunction App() {\n  return (\n    <div>\n      <h1>Hello World</h1>\n      <p>This is JSX</p>\n    </div>\n  );\n}\n\n// Using JavaScript expressions\nfunction Greeting() {\n  const name = 'React';\n  return <h1>Hello, {name}!</h1>;\n}\n\n// JSX with multiple elements\nfunction Header() {\n  return (\n    <header>\n      <nav>\n        <a href=\"/\">Home</a>\n        <a href=\"/about\">About</a>\n      </nav>\n    </header>\n  );\n}" },
            explanation: "JSX lets you embed JavaScript expressions with {}."
          }
        ]
      },
      {
        id: "react-3-2",
        title: "JavaScript in JSX",
        whyItMatters: "Make UI dynamic with JS expressions.",
        content: `Use curly braces {} to embed JavaScript expressions in JSX.`,
        codeExamples: [
          {
            id: "react-3-ex2",
            title: "Expressions in JSX",
            description: "Using JS in JSX",
            code: { javascript: "function DynamicUI() {\n  const count = 5;\n  const items = ['Apple', 'Banana', 'Orange'];\n  const isLoggedIn = true;\n\n  return (\n    <div>\n      <p>Count: {count * 2}</p>\n      <p>Sum: {1 + 2 + 3}</p>\n      <p>User: {isLoggedIn ? 'Logged In' : 'Guest'}</p>\n      <ul>\n        {items.map(item => (\n          <li key={item}>{item}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}" },
            explanation: "Use {} to embed any JavaScript expression."
          }
        ],
        callouts: [
          {
            type: "common-mistake",
            title: "Common Mistake",
            content: "Don't use class instead of className. JSX uses className because class is a reserved JavaScript keyword."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does JSX stand for?", options: ["JavaScript XML", "Java Syntax Extension", "JSON XML", "JavaScript Extra"], correctAnswer: 0, explanation: "JSX stands for JavaScript XML.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "How do you embed a variable in JSX?", options: ["{{name}}", "${name}", "{name}", "[name]"], correctAnswer: 2, explanation: "Use {} to embed variables in JSX.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What do you use instead of 'class' in JSX?", options: ["className", "class", "cls", "styleClass"], correctAnswer: 0, explanation: "Use className because class is reserved.", difficulty: 1 },
        { id: "q4", type: "true-false" as const, question: "JSX is required for React.", correctAnswer: false, explanation: "JSX is optional but recommended.", difficulty: 2 },
        { id: "q5", type: "mcq" as const, question: "Can you use JavaScript logic in JSX?", options: ["No", "Yes, with {}", "Yes, with ()", "Only with template literals"], correctAnswer: 1, explanation: "Use {} for JavaScript expressions.", difficulty: 1 },
        { id: "q6", type: "mcq" as const, question: "What does this render: {2 + 2}?", options: ["{2 + 2}", "4", "2 + 2", "Error"], correctAnswer: 1, explanation: "JSX evaluates the expression and renders 4.", difficulty: 1 },
        { id: "q7", type: "mcq" as const, question: "How do you render a list in JSX?", options: ["for loop", "map function", "while loop", "forEach"], correctAnswer: 1, explanation: "Use map to render lists in JSX.", difficulty: 2 },
        { id: "q8", type: "true-false" as const, question: "JSX is valid JavaScript.", correctAnswer: false, explanation: "JSX is compiled to JavaScript before running.", difficulty: 2 }
      ]
    },
    cheatSheet: [
      { label: "{expression}", value: "Embed JS in JSX" },
      { label: "className", value: "CSS class attribute" },
      { label: "key prop", value: "Unique identifier for lists" },
      { label: "map()", value: "Render array items" }
    ]
  },
  {
    id: "react-4",
    number: 4,
    title: "Components — The Building Blocks",
    subtitle: "Understanding React components",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["react-3"],
    learningObjectives: ["Create functional components", "Understand component composition", "Export and import components"],
    sections: [
      {
        id: "react-4-1",
        title: "What Are Components?",
        whyItMatters: "Components are the building blocks of React.",
        content: `Components are independent, reusable pieces of UI. Think of them like LEGO blocks - you combine small components to build bigger applications.

Two types of components:
1. Function Components - modern approach
2. Class Components - older approach (mostly deprecated)

We use function components in modern React (18+).`,
        codeExamples: [
          {
            id: "react-4-ex1",
            title: "Function Component",
            description: "Create a basic component",
            code: { javascript: "// Function component (modern)\nfunction Welcome() {\n  return <h1>Welcome to React!</h1>;\n}\n\n// Arrow function component\nconst Header = () => {\n  return (\n    <header>\n      <h1>My Website</h1>\n    </header>\n  );\n};\n\n// Component with props\nfunction Greeting({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}\n\n// Usage\n<Welcome />\n<Greeting name=\"John\" />" },
            explanation: "Components are JavaScript functions that return JSX."
          }
        ]
      },
      {
        id: "react-4-2",
        title: "Component Composition",
        whyItMatters: "Build complex UIs from simple pieces.",
        content: `Components can contain other components. This is called composition.`,
        codeExamples: [
          {
            id: "react-4-ex2",
            title: "Component Composition",
            description: "Building with components",
            code: { javascript: "function Button({ children, onClick }) {\n  return (\n    <button className=\"btn\" onClick={onClick}>\n      {children}\n    </button>\n  );\n}\n\nfunction Card({ title, content }) {\n  return (\n    <div className=\"card\">\n      <h2>{title}</h2>\n      <p>{content}</p>\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <div>\n      <Card \n        title=\"Welcome\" \n        content=\"Learn React today!\"\n      />\n      <Button onClick={() => alert('Clicked!')}>\n        Click Me\n      </Button>\n    </div>\n  );\n}" },
            explanation: "Compose small components into bigger applications."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What is a React component?", options: ["A CSS file", "A reusable UI piece", "A database", "A server"], correctAnswer: 1, explanation: "Components are reusable pieces of UI.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "How do you name a component file?", options: ["component.js", "Component.jsx", "Both are fine", "component.xml"], correctAnswer: 2, explanation: "Files can be .js or .jsx, commonly Component.jsx.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What do components return?", options: ["JSON", "JSX", "HTML string", "XML"], correctAnswer: 1, explanation: "Components return JSX.", difficulty: 1 },
        { id: "q4", type: "true-false" as const, question: "Components can contain other components.", correctAnswer: true, explanation: "This is called component composition.", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "What's the modern way to write components?", options: ["Class components", "Function components", "Object components", "None"], correctAnswer: 1, explanation: "Function components are the modern standard.", difficulty: 1 },
        { id: "q6", type: "mcq" as const, question: "How do you export a component?", options: ["export default MyComponent", "export MyComponent", "module.exports", "public"], correctAnswer: 0, explanation: "Use export default for components.", difficulty: 1 },
        { id: "q7", type: "true-false" as const, question: "Components must return a single element.", correctAnswer: true, explanation: "Components must return one root element.", difficulty: 1 },
        { id: "q8", type: "mcq" as const, question: "What is component composition?", options: ["Writing complex code", "Combining smaller components", "CSS styling", "Database queries"], correctAnswer: 1, explanation: "Composition means building with smaller components.", difficulty: 2 }
      ]
    },
    cheatSheet: [
      { label: "function Component()", value: "Create function component" },
      { label: "export default", value: "Export component" },
      { label: "import Component", value: "Import component" },
      { label: "<Component />", value: "Use component" }
    ]
  },
  {
    id: "react-5",
    number: 5,
    title: "Functional Components",
    subtitle: "Modern React components",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["react-4"],
    learningObjectives: ["Write arrow function components", "Understand component lifecycle", "Use props with components"],
    sections: [
      {
        id: "react-5-1",
        title: "Arrow Function Components",
        whyItMatters: "Common modern syntax for React components.",
        content: `Arrow functions provide a concise way to write functional components.`,
        codeExamples: [
          {
            id: "react-5-ex1",
            title: "Arrow Components",
            description: "Arrow function syntax",
            code: { javascript: "// Regular function component\nfunction Greeting(props) {\n  return <h1>Hello, {props.name}!</h1>;\n}\n\n// Arrow function component\nconst Greeting = (props) => {\n  return <h1>Hello, {props.name}!</h1>;\n};\n\n// Concise arrow component (implicit return)\nconst Greeting = (props) => (\n  <h1>Hello, {props.name}!</h1>\n);\n\n// With destructuring\nconst Greeting = ({ name, age }) => (\n  <div>\n    <h1>Hello, {name}!</h1>\n    <p>Age: {age}</p>\n  </div>\n);" },
            explanation: "Arrow functions are shorter and more modern."
          }
        ]
      },
      {
        id: "react-5-2",
        title: "When to Use Each Form",
        whyItMatters: "Choose the right syntax for your needs.",
        content: `Use concise arrow functions for simple components that just return JSX. Use block syntax when you need multiple statements.`,
        codeExamples: [
          {
            id: "react-5-ex2",
            title: "Component Forms Comparison",
            description: "Different component styles",
            code: { javascript: "// Simple - use concise arrow\nconst Badge = ({ label }) => <span className=\"badge\">{label}</span>;\n\n// Complex - use block syntax\nconst UserCard = ({ user }) => {\n  const fullName = user.firstName + ' ' + user.lastName;\n  const initials = fullName.split(' ').map(n => n[0]).join('');\n  \n  return (\n    <div className=\"user-card\">\n      <div className=\"avatar\">{initials}</div>\n      <h3>{fullName}</h3>\n      <p>{user.email}</p>\n    </div>\n  );\n};" },
            explanation: "Choose syntax based on component complexity."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What is the main benefit of arrow function components?", options: ["They are faster", "They are more concise", "They use less memory", "They don't need JSX"], correctAnswer: 1, explanation: "Arrow functions provide more concise syntax.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What does (props) => JSX mean?", options: ["Function component", "Class component", "Object", "Array"], correctAnswer: 0, explanation: "This is the arrow function component syntax.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What is destructuring in components?", options: ["Breaking CSS", "Extracting props values", "Creating variables", "Deleting properties"], correctAnswer: 1, explanation: "Destructuring extracts values from props.", difficulty: 2 },
        { id: "q4", type: "true-false" as const, question: "Arrow components can have implicit return.", correctAnswer: true, explanation: "Without braces, the value is returned directly.", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "When should you use block syntax?", options: ["Always", "When returning JSX directly", "When you need multiple statements", "Never"], correctAnswer: 2, explanation: "Use block syntax for complex logic.", difficulty: 2 },
        { id: "q6", type: "mcq" as const, question: "What is 'props' in a component?", options: ["A library", "Data passed to component", "A hook", "CSS styles"], correctAnswer: 1, explanation: "Props are data passed to components.", difficulty: 1 },
        { id: "q7", type: "mcq" as const, question: "Which is a valid arrow component?", options: ["const C = () => <div />", "const C = => <div />", "const C = () => {div}", "const C = <div />"], correctAnswer: 0, explanation: "Arrow function returning JSX.", difficulty: 1 },
        { id: "q8", type: "true-false" as const, question: "Function components can only be arrow functions.", correctAnswer: false, explanation: "You can use both regular and arrow functions.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "const C = () => JSX", value: "Arrow component" },
      { label: "const C = props => JSX", value: "Arrow with props" },
      { label: "const C = ({ prop }) => JSX", value: "Destructured props" },
      { label: "() => (JSX)", value: "Implicit return" }
    ]
  },
  {
    id: "react-6",
    number: 6,
    title: "Props — Passing Data",
    subtitle: "Data between components",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["react-5"],
    learningObjectives: ["Pass props to components", "Access props in components", "Use default props"],
    sections: [
      {
        id: "react-6-1",
        title: "Understanding Props",
        whyItMatters: "Props let components communicate.",
        content: `Props (short for properties) are how you pass data from parent components to child components. Props are read-only - child components cannot modify them.

Think of props like function arguments - you pass data in, and the component uses it.`,
        codeExamples: [
          {
            id: "react-6-ex1",
            title: "Props Basics",
            description: "Passing and using props",
            code: { javascript: "// Child component - receives props\nfunction UserCard({ name, email, age }) {\n  return (\n    <div className=\"user-card\">\n      <h2>{name}</h2>\n      <p>Email: {email}</p>\n      <p>Age: {age}</p>\n    </div>\n  );\n}\n\n// Parent component - passes props\nfunction App() {\n  const user = {\n    name: 'John Doe',\n    email: 'john@example.com',\n    age: 25\n  };\n\n  return (\n    <div>\n      <UserCard \n        name={user.name}\n        email={user.email}\n        age={user.age}\n      />\n    </div>\n  );\n}" },
            explanation: "Props flow from parent to child."
          }
        ]
      },
      {
        id: "react-6-2",
        title: "Default Props and Validation",
        whyItMatters: "Make components more robust.",
        content: `Set default values for props to handle cases when data isn't provided.`,
        codeExamples: [
          {
            id: "react-6-ex2",
            title: "Default Props",
            description: "Setting default values",
            code: { javascript: "function Button({ text = 'Click me', onClick, variant = 'primary' }) {\n  return (\n    <button \n      className={`btn btn-${variant}`}\n      onClick={onClick}\n    >\n      {text}\n    </button>\n  );\n}\n\n// Usage\n<Button />  // Uses defaults: 'Click me', 'primary'\n<Button text=\"Submit\" variant=\"success\" />\n<Button onClick={() => console.log('clicked')} />" },
            explanation: "Default props provide fallback values."
          }
        ],
        callouts: [
          {
            type: "tip",
            title: "Pro Tip",
            content: "Use TypeScript for prop types - it provides better developer experience and catches errors early."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What are props in React?", options: ["CSS styles", "Data passed to components", "State management", "Database"], correctAnswer: 1, explanation: "Props are data passed to components.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "How do you pass a prop?", options: ["<Component prop=\"value\" />", "<Component prop:value />", "<Component {prop: value}>", "<Component :prop>"], correctAnswer: 0, explanation: "Pass props like HTML attributes.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "How do you access a prop in a function component?", options: ["this.props", "props.name", "props['name']", "Both B and C"], correctAnswer: 3, explanation: "You can access props as props.name or props['name'].", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "Can child components modify props?", options: ["Yes", "No", "Only with special method", "Only with hooks"], correctAnswer: 1, explanation: "Props are read-only in React.", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "How do you set default prop values?", options: ["DefaultProps", "= value in function params", "props.default", "component.defaultProps"], correctAnswer: 1, explanation: "Set defaults in function parameters.", difficulty: 1 },
        { id: "q6", type: "true-false" as const, question: "Props can be any JavaScript value.", correctAnswer: true, explanation: "Props can be strings, numbers, objects, functions, etc.", difficulty: 1 },
        { id: "q7", type: "mcq" as const, question: "What flows in the props flow?", options: ["Upwards", "Downwards", "Both directions", "None"], correctAnswer: 1, explanation: "Props flow from parent to child.", difficulty: 1 },
        { id: "q8", type: "mcq" as const, question: "How do you pass an object as a prop?", options: ["<C prop={obj} />", "<C prop={JSON.stringify(obj)} />", "<C prop=\"obj\" />", "<C obj prop />"], correctAnswer: 0, explanation: "Pass objects with {} for evaluation.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "<C prop={value} />", value: "Pass prop" },
      { label: "function C({ prop })", value: "Access prop" },
      { label: "prop = default", value: "Default value" },
      { label: "Props flow", value: "Parent to child" }
    ]
  },
  {
    id: "react-7",
    number: 7,
    title: "Events in React",
    subtitle: "Handling user interactions",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["react-6"],
    learningObjectives: ["Handle click events", "Use event handlers", "Pass arguments to handlers"],
    sections: [
      {
        id: "react-7-1",
        title: "Handling Events",
        whyItMatters: "Make apps interactive.",
        content: `React has its own event system that mimics the browser's events but works consistently across browsers. Event handlers are functions you call when something happens.`,
        codeExamples: [
          {
            id: "react-7-ex1",
            title: "Click Events",
            description: "Handle button clicks",
            code: { javascript: "function Counter() {\n  let count = 0;\n\n  function handleClick() {\n    count++;\n    console.log('Clicked! Count is now:', count);\n  }\n\n  return (\n    <button onClick={handleClick}>\n      Click me ({count})\n    </button>\n  );\n}\n\n// With arrow function\nfunction Button() {\n  const handleClick = () => {\n    alert('Button clicked!');\n  };\n\n  return <button onClick={handleClick}>Click Me</button>;\n}" },
            explanation: "Use onClick and pass a function."
          }
        ]
      },
      {
        id: "react-7-2",
        title: "Common Events",
        whyItMatters: "React supports many event types.",
        content: `React supports all the common DOM events.`,
        codeExamples: [
          {
            id: "react-7-ex2",
            title: "Various Event Types",
            description: "Different event handlers",
            code: { javascript: "function FormExample() {\n  function handleSubmit(e) {\n    e.preventDefault();\n    console.log('Form submitted');\n  }\n\n  function handleInputChange(e) {\n    console.log('Input changed:', e.target.value);\n  }\n\n  function handleFocus() {\n    console.log('Input focused');\n  }\n\n  function handleBlur() {\n    console.log('Input blurred');\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input \n        type=\"text\"\n        onChange={handleInputChange}\n        onFocus={handleFocus}\n        onBlur={handleBlur}\n      />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}" },
            explanation: "React supports form, input, mouse, and keyboard events."
          }
        ],
        callouts: [
          {
            type: "common-mistake",
            title: "Common Mistake",
            content: "Don't call the function directly: onClick={handleClick()} - this executes on every render. Use onClick={handleClick} instead."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "How do you handle a click in React?", options: ["click=", "onClick=", "on-click=", "click:"], correctAnswer: 1, explanation: "Use onClick with camelCase.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What should you pass to onClick?", options: ["A function call", "A function reference", "A string", "An object"], correctAnswer: 1, explanation: "Pass the function itself, not its result.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What does e.preventDefault() do?", options: ["Stops event bubbling", "Prevents default form submission/page navigation", "Deletes the element", "Nothing"], correctAnswer: 1, explanation: "preventDefault stops the default browser action.", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "What is the event object in React?", options: ["Native browser event", "Synthetic event wrapper", "Null", "String"], correctAnswer: 1, explanation: "React wraps events in a synthetic event.", difficulty: 2 },
        { id: "q5", type: "mcq" as const, question: "How do you pass arguments to event handler?", options: ["onClick={handleClick(arg)}", "onClick={() => handleClick(arg)}", "onClick={handleClick:arg}", "Can't pass arguments"], correctAnswer: 1, explanation: "Use arrow function to pass arguments.", difficulty: 1 },
        { id: "q6", type: "mcq" as const, question: "Which is NOT a React event?", options: ["onClick", "onChange", "onSubmit", "onclick"], correctAnswer: 3, explanation: "React uses camelCase: onClick.", difficulty: 1 },
        { id: "q7", type: "true-false" as const, question: "React events work the same in all browsers.", correctAnswer: true, explanation: "React normalizes events across browsers.", difficulty: 1 },
        { id: "q8", type: "mcq" as const, question: "What event fires when input changes?", options: ["onClick", "onChange", "onUpdate", "onInput"], correctAnswer: 1, explanation: "onChange fires on input changes.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "onClick", value: "Click event" },
      { label: "onChange", value: "Input change" },
      { label: "onSubmit", value: "Form submit" },
      { label: "e.preventDefault()", value: "Stop default action" }
    ]
  },
  {
    id: "react-8",
    number: 8,
    title: "useState Hook",
    subtitle: "Managing component state",
    difficulty: "Beginner" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["react-7"],
    learningObjectives: ["Use useState hook", "Update state correctly", "Handle different data types"],
    sections: [
      {
        id: "react-8-1",
        title: "Introduction to useState",
        whyItMatters: "State makes components interactive.",
        content: `useState is a Hook that lets you add state to functional components. State is data that changes over time - like a counter, form input, or fetched data.

useState returns an array with two elements:
1. The current state value
2. A function to update the state`,
        codeExamples: [
          {
            id: "react-8-ex1",
            title: "Basic useState",
            description: "Using useState for counter",
            code: { javascript: "import { useState } from 'react';\n\nfunction Counter() {\n  // count = state value\n  // setCount = function to update state\n  const [count, setCount] = useState(0);\n\n  function increment() {\n    setCount(count + 1);\n  }\n\n  function decrement() {\n    setCount(count - 1);\n  }\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={decrement}>-</button>\n      <button onClick={increment}>+</button>\n    </div>\n  );\n}" },
            explanation: "useState initializes state and provides update function."
          }
        ]
      },
      {
        id: "react-8-2",
        title: "State with Different Types",
        whyItMatters: "Handle various data in state.",
        content: `useState can store any JavaScript value: strings, numbers, arrays, objects, etc.`,
        codeExamples: [
          {
            id: "react-8-ex2",
            title: "Different State Types",
            description: "State with various data types",
            code: { javascript: "import { useState } from 'react';\n\nfunction FormExample() {\n  // String state\n  const [name, setName] = useState('');\n  \n  // Boolean state\n  const [isActive, setIsActive] = useState(false);\n  \n  // Array state\n  const [items, setItems] = useState([]);\n  \n  // Object state\n  const [user, setUser] = useState({\n    name: '',\n    email: ''\n  });\n\n  function addItem() {\n    setItems([...items, `Item ${items.length + 1}`]);\n  }\n\n  function updateUser(field, value) {\n    setUser({ ...user, [field]: value });\n  }\n\n  return (\n    <div>\n      <input \n        value={name}\n        onChange={(e) => setName(e.target.value)}\n      />\n      <button onClick={() => setIsActive(!isActive)}>\n        {isActive ? 'Active' : 'Inactive'}\n      </button>\n      <button onClick={addItem}>Add Item</button>\n    </div>\n  );\n}" },
            explanation: "State can hold any JavaScript value."
          }
        ],
        callouts: [
          {
            type: "tip",
            title: "Remember",
            content: "Never modify state directly: DON'T do count++. Instead use setCount(count + 1)."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does useState return?", options: ["Just the value", "Array with value and setter", "Object", "String"], correctAnswer: 1, explanation: "useState returns [value, setter].", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "How do you update state?", options: ["state = newValue", "setState(newValue)", "state.update(newValue)", "useState(newValue)"], correctAnswer: 1, explanation: "Use the setter function from useState.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What is the initial value in useState(0)?", options: ["undefined", "0", "null", "false"], correctAnswer: 1, explanation: "0 is the starting state value.", difficulty: 1 },
        { id: "q4", type: "true-false" as const, question: "State updates trigger re-render.", correctAnswer: true, explanation: "When state changes, React re-renders the component.", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "How to update object state?", options: ["obj.key = value", "setObj({ ...obj, key: value })", "setObj(obj.key = value)", "updateObj(key, value)"], correctAnswer: 1, explanation: "Spread old object and add new property.", difficulty: 2 },
        { id: "q6", type: "mcq" as const, question: "What happens with multiple setState calls?", options: ["All apply immediately", "React batches them", "Only last applies", "Error"], correctAnswer: 1, explanation: "React batches multiple state updates.", difficulty: 2 },
        { id: "q7", type: "mcq" as const, question: "Can useState hold an array?", options: ["No", "Yes", "Only empty array", "Only with numbers"], correctAnswer: 1, explanation: "useState can hold any JavaScript value.", difficulty: 1 },
        { id: "q8", type: "true-false" as const, question: "const [state, setState] = useState() works.", correctAnswer: false, explanation: "You need to provide initial value: useState(initialValue).", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "useState(initial)", value: "Create state" },
      { label: "[value, setValue]", value: "Destructure state" },
      { label: "setValue(newValue)", value: "Update state" },
      { label: "...prev", value: "Spread for objects/arrays" }
    ]
  },
  {
    id: "react-9",
    number: 9,
    title: "Rendering Lists",
    subtitle: "Display arrays in JSX",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["react-8"],
    learningObjectives: ["Map over arrays", "Use keys properly", "Filter and transform data"],
    sections: [
      {
        id: "react-9-1",
        title: "Using map()",
        whyItMatters: "Display collections of items.",
        content: `Use the map() method to transform arrays into lists of elements. Every map() needs a unique key prop.`,
        codeExamples: [
          {
            id: "react-9-ex1",
            title: "Basic List Rendering",
            description: "Map array to elements",
            code: { javascript: "function UserList() {\n  const users = [\n    { id: 1, name: 'Alice', age: 25 },\n    { id: 2, name: 'Bob', age: 30 },\n    { id: 3, name: 'Charlie', age: 35 }\n  ];\n\n  return (\n    <ul>\n      {users.map(user => (\n        <li key={user.id}>\n          {user.name} - {user.age} years old\n        </li>\n      ))}\n    </ul>\n  );\n}\n\n// With component\nfunction UserCard({ user }) {\n  return (\n    <div className=\"card\">\n      <h3>{user.name}</h3>\n      <p>{user.age} years old</p>\n    </div>\n  );\n}\n\nfunction App() {\n  const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];\n  \n  return (\n    <div>\n      {users.map(user => (\n        <UserCard key={user.id} user={user} />\n      ))}\n    </div>\n  );\n}" },
            explanation: "map() transforms array to JSX elements."
          }
        ]
      },
      {
        id: "react-9-2",
        title: "Keys and Performance",
        whyItMatters: "Keys help React identify changes.",
        content: `Keys are essential for React's reconciliation algorithm. They help React efficiently update lists. Always use unique, stable identifiers - never use array index for keys if the list can reorder.`,
        codeExamples: [
          {
            id: "react-9-ex2",
            title: "Proper Key Usage",
            description: "Keys for efficient updates",
            code: { javascript: "// GOOD - using stable IDs\nfunction GoodList() {\n  const items = [\n    { id: 'abc-123', name: 'Apple' },\n    { id: 'def-456', name: 'Banana' },\n    { id: 'ghi-789', name: 'Orange' }\n  ];\n\n  return (\n    <ul>\n      {items.map(item => (\n        <li key={item.id}>{item.name}</li>\n      ))}\n    </ul>\n  );\n}\n\n// BAD - using index (can cause bugs)\nfunction BadList() {\n  const items = ['Apple', 'Banana', 'Orange'];\n  \n  return (\n    <ul>\n      {items.map((item, index) => (\n        <li key={index}>{item}</li>  // Don't do this!\n      ))}\n    </ul>\n  );\n}" },
            explanation: "Use unique, stable IDs as keys."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "How do you render a list in React?", options: ["for loop", "forEach", "map", "while"], correctAnswer: 2, explanation: "Use map() to transform array to elements.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What is required for list items?", options: ["index", "key", "id", "name"], correctAnswer: 1, explanation: "Every list item needs a unique key.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What is the best key value?", options: ["Index", "Random number", "Unique stable ID", "Any string"], correctAnswer: 2, explanation: "Use unique, stable identifiers.", difficulty: 1 },
        { id: "q4", type: "true-false" as const, question: "Keys are visible in the DOM.", correctAnswer: false, explanation: "Keys are used internally by React.", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "What does key help React with?", options: ["Styling", "Performance updates", "Data fetching", "State"], correctAnswer: 1, explanation: "Keys help React efficiently update lists.", difficulty: 2 },
        { id: "q6", type: "mcq" as const, question: "When is index OK as key?", options: ["Always", "Static lists that never change", "When list is small", "Never"], correctAnswer: 1, explanation: "Index is OK only for static lists.", difficulty: 2 },
        { id: "q7", type: "mcq" as const, question: "What does map return?", options: ["Object", "Array of JSX", "String", "Number"], correctAnswer: 1, explanation: "map() returns an array of elements.", difficulty: 1 },
        { id: "q8", type: "true-false" as const, question: "You can filter inside the map.", correctAnswer: true, explanation: "You can chain filter, sort, etc. with map.", difficulty: 2 }
      ]
    },
    cheatSheet: [
      { label: "arr.map(item => JSX)", value: "Render list" },
      { label: "key={uniqueId}", value: "Unique key" },
      { label: "filter()", value: "Remove items" },
      { label: "index", value: "Use only when stable" }
    ]
  },
  {
    id: "react-10",
    number: 10,
    title: "Conditional Rendering",
    subtitle: "Show/hide content conditionally",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["react-9"],
    learningObjectives: ["Use ternary operators", "Use logical AND", "Use if/else in components"],
    sections: [
      {
        id: "react-10-1",
        title: "Conditional Rendering Techniques",
        whyItMatters: "Show different UI based on state.",
        content: `React provides several ways to conditionally render content. Choose based on complexity and readability.`,
        codeExamples: [
          {
            id: "react-10-ex1",
            title: "Conditional Rendering",
            description: "Different ways to conditionally render",
            code: { javascript: "function LoginButton({ isLoggedIn }) {\n  // 1. Ternary operator (most common)\n  return (\n    <div>\n      {isLoggedIn ? (\n        <button>Logout</button>\n      ) : (\n        <button>Login</button>\n      )}\n    </div>\n  );\n}\n\nfunction UserGreeting({ user }) {\n  // 2. Logical AND (show/hide)\n  return (\n    <div>\n      {user && <h1>Welcome, {user.name}!</h1>}\n    </div>\n  );\n}\n\nfunction LoadingSpinner({ isLoading }) {\n  // 3. Early return (cleaner for complex conditions)\n  if (isLoading) {\n    return <div className=\"spinner\">Loading...</div>;\n  }\n\n  return <div>Content loaded!</div>;\n}\n\nfunction PermissionCheck({ user }) {\n  // 4. Variable approach\n  let button;\n  if (user?.role === 'admin') {\n    button = <button>Admin Panel</button>;\n  } else if (user?.role === 'user') {\n    button = <button>My Account</button>;\n  } else {\n    button = <button>Sign Up</button>;\n  }\n\n  return <div>{button}</div>;\n}" },
            explanation: "Use ternary for if-else, AND for show/hide."
          }
        ]
      },
      {
        id: "react-10-2",
        title: "Common Patterns",
        whyItMatters: "Solve real-world conditional problems.",
        content: `These patterns cover most conditional rendering needs in React apps.`,
        codeExamples: [
          {
            id: "react-10-ex2",
            title: "Real-world Patterns",
            description: "Common conditional patterns",
            code: { javascript: "function ErrorMessage({ error }) {\n  // Show error only when it exists\n  return (\n    <div>\n      {error && (\n        <div className=\"error\">\n          Error: {error.message}\n        </div>\n      )}\n    </div>\n  );\n}\n\nfunction EmptyState({ items }) {\n  // Show different content for empty vs populated\n  return (\n    <div>\n      {items.length === 0 ? (\n        <p>No items found</p>\n      ) : (\n        <ul>\n          {items.map(item => <li key={item.id}>{item.name}</li>)}\n        </ul>\n      )}\n    </div>\n  );\n}\n\nfunction ToggleContent({ isOpen }) {\n  // Switch between components\n  return (\n    <div>\n      {isOpen ? <ExpandedView /> : <CollapsedView />}\n    </div>\n  );\n}" },
            explanation: "These patterns solve common UI scenarios."
          }
        ],
        callouts: [
          {
            type: "warning",
            title: "Warning",
            content: "Be careful with && - don't use numbers as the left side. {count && <Component />} will render 0 if count is 0!"
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "Which shows/hides content based on truthiness?", options: ["ternary", "&& operator", "if statement", "switch"], correctAnswer: 1, explanation: "&& renders nothing if false.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What does condition ? trueVal : falseVal do?", options: ["Shows trueVal when false", "Shows trueVal when true", "Always shows falseVal", "Shows nothing"], correctAnswer: 1, explanation: "Ternary shows first value when true.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "When is early return useful?", options: ["Simple conditions", "Complex conditions with multiple checks", "Never", "Only for errors"], correctAnswer: 1, explanation: "Early return cleans up complex logic.", difficulty: 2 },
        { id: "q4", type: "mcq" as const, question: "What happens with {0 && <Comp/>}?", options: ["Renders component", "Renders nothing", "Renders 0", "Error"], correctAnswer: 2, explanation: "0 is rendered because it's falsy but not falsy enough.", difficulty: 2 },
        { id: "q5", type: "mcq" as const, question: "Can you use if inside JSX?", options: ["Yes", "No", "Only in arrow functions", "Only with hooks"], correctAnswer: 1, explanation: "Use ternary/AND instead of if in JSX.", difficulty: 1 },
        { id: "q6", type: "mcq" as const, question: "How to show one of two components?", options: ["if (cond) return A else return B", "cond ? A : B", "A || B", "Both A and B"], correctAnswer: 1, explanation: "Ternary selects between two options.", difficulty: 1 },
        { id: "q7", type: "true-false" as const, question: "You can return early from a component.", correctAnswer: true, explanation: "Early return is a common pattern.", difficulty: 1 },
        { id: "q8", type: "mcq" as const, question: "What renders from {null && <Comp/>}?", options: ["Component", "null", "0", "Error"], correctAnswer: 1, explanation: "null renders nothing.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "cond ? A : B", value: "Ternary - choose A or B" },
      { label: "cond && A", value: "Show A if true" },
      { label: "if (cond) return A", value: "Early return" },
      { label: "null", value: "Render nothing" }
    ]
  },
  {
    id: "react-11",
    number: 11,
    title: "Forms and Controlled Components",
    subtitle: "Managing form state",
    difficulty: "Beginner" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["react-10"],
    learningObjectives: ["Create controlled components", "Handle form inputs", "Validate form data"],
    sections: [
      {
        id: "react-11-1",
        title: "Controlled Components",
        whyItMatters: "Forms need state management.",
        content: `A controlled component is one where form data is handled by React state. The input value is controlled by React, not the DOM.`,
        codeExamples: [
          {
            id: "react-11-ex1",
            title: "Controlled Input",
            description: "Input controlled by state",
            code: { javascript: "import { useState } from 'react';\n\nfunction LoginForm() {\n  const [email, setEmail] = useState('');\n  const [password, setPassword] = useState('');\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    console.log('Form submitted:', { email, password });\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        type=\"email\"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        placeholder=\"Email\"\n      />\n      <input\n        type=\"password\"\n        value={password}\n        onChange={(e) => setPassword(e.target.value)}\n        placeholder=\"Password\"\n      />\n      <button type=\"submit\">Login</button>\n    </form>\n  );\n}" },
            explanation: "Input value is tied to state."
          }
        ]
      },
      {
        id: "react-11-2",
        title: "Form Handling Patterns",
        whyItMatters: "Handle complex forms efficiently.",
        content: `Use these patterns for better form management.`,
        codeExamples: [
          {
            id: "react-11-ex2",
            title: "Multi-input Form",
            description: "Object-based state",
            code: { javascript: "import { useState } from 'react';\n\nfunction RegistrationForm() {\n  const [formData, setFormData] = useState({\n    username: '',\n    email: '',\n    password: ''\n  });\n\n  function handleChange(e) {\n    const { name, value } = e.target;\n    setFormData(prev => ({\n      ...prev,\n      [name]: value\n    }));\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    console.log('Submitted:', formData);\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        name=\"username\"\n        value={formData.username}\n        onChange={handleChange}\n        placeholder=\"Username\"\n      />\n      <input\n        name=\"email\"\n        type=\"email\"\n        value={formData.email}\n        onChange={handleChange}\n        placeholder=\"Email\"\n      />\n      <input\n        name=\"password\"\n        type=\"password\"\n        value={formData.password}\n        onChange={handleChange}\n        placeholder=\"Password\"\n      />\n      <button type=\"submit\">Register</button>\n    </form>\n  );\n}" },
            explanation: "Single state object for multiple inputs."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What is a controlled component?", options: ["Component with onClick", "Component with form data in state", "Component without props", "Class component"], correctAnswer: 1, explanation: "Controlled components have form data in state.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What ties input value to state?", options: ["value={state}", "bind={state}", "state={state}", "input value={state}"], correctAnswer: 0, explanation: "value prop binds input to state.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What does e.preventDefault() do in forms?", options: ["Validates input", "Stops page refresh on submit", "Clears form", "Shows error"], correctAnswer: 1, explanation: "preventDefault stops form's default submission.", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "How do you handle multiple inputs with one handler?", options: ["Separate handlers", "Use name attribute and e.target.name", "Use id attribute", "Can't do that"], correctAnswer: 1, explanation: "Use name to identify which input changed.", difficulty: 2 },
        { id: "q5", type: "mcq" as const, question: "What is e.target.value?", options: ["Element ID", "Input's current value", "Form name", "Event type"], correctAnswer: 1, explanation: "target.value is the input's current value.", difficulty: 1 },
        { id: "q6", type: "true-false" as const, question: "Controlled components need onChange.", correctAnswer: true, explanation: "onChange updates the state.", difficulty: 1 },
        { id: "q7", type: "mcq" as const, question: "What updates input value?", options: ["User typing", "setState", "Both", "Neither"], correctAnswer: 2, explanation: "User typing triggers onChange, which calls setState.", difficulty: 2 },
        { id: "q8", type: "mcq" as const, question: "Select element value is controlled by?", options: ["selected prop", "value prop", "defaultValue", "Both B and C"], correctAnswer: 1, explanation: "Use value prop for controlled select.", difficulty: 2 }
      ]
    },
    cheatSheet: [
      { label: "value={state}", value: "Control input" },
      { label: "onChange", value: "Update state" },
      { label: "e.preventDefault()", value: "Stop submit refresh" },
      { label: "name={field}", value: "Identify input" }
    ]
  },
  {
    id: "react-12",
    number: 12,
    title: "React Developer Tools",
    subtitle: "Debug your React apps",
    difficulty: "Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["react-11"],
    learningObjectives: ["Install React DevTools", "Use Components tab", "Use Profiler tab"],
    sections: [
      {
        id: "react-12-1",
        title: "React DevTools Overview",
        whyItMatters: "Debug efficiently with the right tools.",
        content: `React Developer Tools is a browser extension that lets you inspect React component hierarchy, props, state, and performance.`,
        codeExamples: [
          {
            id: "react-12-ex1",
            title: "DevTools Features",
            description: "What you can do with DevTools",
            code: { javascript: "// React DevTools allows you to:\n// 1. Inspect component tree\n// 2. View props and state\n// 3. See component hierarchy\n// 4. Find components by name\n// 5. Profile performance\n// 6. See actual vs rendered values\n// 7. Debug hooks\n// 8. Track re-renders\n\n// Installation:\n// Chrome: React Developer Tools extension\n// Firefox: React Developer Tools extension\n// Or: npm install -D @react-devtools/core" },
            explanation: "DevTools makes debugging much easier."
          }
        ]
      },
      {
        id: "react-12-2",
        title: "Using DevTools",
        whyItMatters: "Practical debugging skills.",
        content: `Learn the key features to debug effectively.`,
        codeExamples: [
          {
            id: "react-12-ex2",
            title: "Debugging Workflow",
            description: "Step-by-step debugging",
            code: { javascript: "// 1. Find your component in the tree\n// Components tab shows the React tree\n\n// 2. Inspect props\n// Click any component\n// Right panel shows props\n\n// 3. Inspect state\n// State appears in right panel\n// Click to expand nested objects\n\n// 4. Find by name\n// Type component name in search\n\n// 5. Profile performance\n// Click Profile tab\n// Start recording\n// Perform actions\n// Stop recording\n// See flame graph\n\n// 6. Debug hooks\n// Hooks appear in right panel\n// Expand useState, useEffect, etc." },
            explanation: "Use these steps to debug any issue."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does React DevTools show?", options: ["Only component tree", "Props, state, performance", "Only CSS", "Only network requests"], correctAnswer: 1, explanation: "DevTools shows comprehensive debugging info.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "Where do you find React DevTools?", options: ["npm", "Browser extension", "VS Code", "Node_modules"], correctAnswer: 1, explanation: "It's a browser extension.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What tab shows component tree?", options: ["Profiler", "Components", "Console", "Network"], correctAnswer: 1, explanation: "Components tab shows tree.", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "What can you see in Components tab?", options: ["Only JSX", "Props, state, hooks", "Only CSS", "Network requests"], correctAnswer: 1, explanation: "You see props, state, hooks, etc.", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "What does Profiler tab do?", options: ["Shows network", "Records performance", "Edits code", "Manages state"], correctAnswer: 1, explanation: "Profiler records render performance.", difficulty: 1 },
        { id: "q6", type: "true-false" as const, question: "You can edit props in DevTools.", correctAnswer: true, explanation: "You can modify props temporarily.", difficulty: 1 },
        { id: "q7", type: "mcq" as const, question: "How do you search for a component?", options: ["Ctrl+F", "Type in search box", "Click filter icon", "All of above"], correctAnswer: 3, explanation: "Multiple ways to find components.", difficulty: 1 },
        { id: "q8", type: "mcq" as const, question: "What shows when a component re-renders?", options: ["Nothing visual", "Highlight in tree", "Error message", "Console log"], correctAnswer: 1, explanation: "DevTools highlights re-renders.", difficulty: 2 }
      ]
    },
    cheatSheet: [
      { label: "Components tab", value: "View component tree" },
      { label: "Profiler", value: "Record performance" },
      { label: "Props panel", value: "View/edit props" },
      { label: "State panel", value: "View/edit state" }
    ]
  },
  {
    id: "react-13",
    number: 13,
    partLabel: "Part 2: React Hooks",
    title: "useEffect Hook",
    subtitle: "Side effects in components",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["react-12"],
    learningObjectives: ["Understand side effects", "Use useEffect properly", "Handle component lifecycle"],
    sections: [
      {
        id: "react-13-1",
        title: "What is useEffect",
        whyItMatters: "Handle side effects like data fetching and subscriptions.",
        content: `useEffect lets you perform side effects in function components. Side effects include data fetching, subscriptions, DOM manipulation, and timers.`,
        codeExamples: [
          {
            id: "react-13-ex1",
            title: "Basic useEffect",
            description: "Run effect after render",
            code: { javascript: "import { useState, useEffect } from 'react';\n\nfunction DataFetcher() {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    // This runs after every render\n    console.log('Effect ran!');\n    \n    fetch('https://api.example.com/data')\n      .then(res => res.json())\n      .then(result => {\n        setData(result);\n        setLoading(false);\n      });\n  }, []); // Empty array = run once on mount\n\n  if (loading) return <div>Loading...</div>;\n  return <div>{data?.message}</div>;\n}" },
            explanation: "useEffect runs after render. Empty deps = mount only."
          }
        ],
        callouts: [
          {
            type: "info",
            title: "JavaScript Prerequisite",
            content: "This chapter involves fetch API for data fetching. Check our JavaScript course for HTTP requests and promises if needed."
          }
        ]
      },
      {
        id: "react-13-2",
        title: "Effect Cleanup",
        whyItMatters: "Prevent memory leaks and race conditions.",
        content: `Return a cleanup function to clean up when component unmounts or before effect runs again.`,
        codeExamples: [
          {
            id: "react-13-ex2",
            title: "Cleanup Function",
            description: "Clean up subscriptions",
            code: { javascript: "import { useState, useEffect } from 'react';\n\nfunction Timer() {\n  const [seconds, setSeconds] = useState(0);\n\n  useEffect(() => {\n    const interval = setInterval(() => {\n      setSeconds(s => s + 1);\n    }, 1000);\n\n    // Cleanup function\n    return () => {\n      clearInterval(interval);\n      console.log('Timer cleaned up');\n    };\n  }, []); // Empty deps = run once\n\n  return <div>Seconds: {seconds}</div>;\n}\n\n// With subscriptions\nfunction Subscription() {\n  useEffect(() => {\n    const subscription = someAPI.subscribe();\n    \n    return () => {\n      subscription.unsubscribe();\n    };\n  }, []);\n\n  return <div>Subscribed</div>;\n}" },
            explanation: "Cleanup prevents memory leaks."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "When does useEffect run?", options: ["Before render", "After render", "During render", "Never"], correctAnswer: 1, explanation: "useEffect runs after render.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What does [] mean in useEffect?", options: ["Never runs", "Runs every render", "Runs once on mount", "Error"], correctAnswer: 2, explanation: "Empty deps = run once on mount.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What should you return from useEffect?", options: ["Nothing", "Cleanup function", "Value", "Promise"], correctAnswer: 1, explanation: "Return cleanup function.", difficulty: 1 },
        { id: "q4", type: "true-false" as const, question: "useEffect is for side effects only.", correctAnswer: true, explanation: "useEffect handles side effects.", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "When does cleanup run?", options: ["Before mount", "On unmount and before effect re-runs", "Never", "After render"], correctAnswer: 1, explanation: "Cleanup runs on unmount and before re-run.", difficulty: 2 },
        { id: "q6", type: "mcq" as const, question: "What happens without cleanup for subscriptions?", options: ["Nothing", "Memory leak", "Better performance", "Error"], correctAnswer: 1, explanation: "No cleanup = memory leak.", difficulty: 2 },
        { id: "q7", type: "mcq" as const, question: "useEffect replaces which class methods?", options: ["componentDidMount only", "componentDidUpdate and componentWillUnmount", "render only", "constructor"], correctAnswer: 1, explanation: "useEffect replaces mount, update, and unmount.", difficulty: 2 },
        { id: "q8", type: "true-false" as const, question: "Multiple useEffects are allowed.", correctAnswer: true, explanation: "You can use multiple useEffects.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "useEffect(fn, [])", value: "Run once on mount" },
      { label: "useEffect(fn)", value: "Run every render" },
      { label: "useEffect(fn, [deps])", value: "Run when deps change" },
      { label: "return () => {}", value: "Cleanup function" }
    ]
  },
  {
    id: "react-14",
    number: 14,
    title: "Dependency Arrays",
    titleBn: "নির্ভরণ অ্যারে",
    subtitle: "Controlling when effects run",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["react-13"],
    learningObjectives: ["Understand dependency array", "Avoid infinite loops", "Optimize effect runs"],
    sections: [
      {
        id: "react-14-1",
        title: "Dependency Array Deep Dive",
        whyItMatters: "Control effect timing precisely.",
        content: `The dependency array tells React when to re-run the effect. Understanding this is key to avoiding bugs.`,
        codeExamples: [
          {
            id: "react-14-ex1",
            title: "Dependency Array Options",
            description: "Different ways to use deps",
            code: { javascript: "import { useState, useEffect } from 'react';\n\n// No deps - runs every render (rarely used)\nuseEffect(() => {\n  console.log('Every render');\n});\n\n// Empty deps - runs once on mount\nuseEffect(() => {\n  console.log('Once on mount');\n}, []);\n\n// With deps - runs when any dep changes\nfunction Search({ query }) {\n  const [results, setResults] = useState([]);\n  \n  useEffect(() => {\n    // Runs when query changes\n    searchAPI(query).then(setResults);\n  }, [query]); // Only re-run when query changes\n  \n  return <div>{results.length} results</div>;\n}" },
            explanation: "Deps control when effect re-runs."
          }
        ]
      },
      {
        id: "react-14-2",
        title: "Common Mistakes",
        whyItMatters: "Avoid common effect bugs.",
        content: `Understanding dependency array pitfalls prevents bugs.`,
        codeExamples: [
          {
            id: "react-14-ex2",
            title: "Dependency Pitfalls",
            description: "What to avoid",
            code: { javascript: "// BAD - missing dependencies\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  useEffect(() => {\n    document.title = `Count: ${count}`;\n    // Missing count in deps - stale closure!\n  }, []); // WRONG!\n}\n\n// GOOD - include all used values\nfunction CounterFixed() {\n  const [count, setCount] = useState(0);\n  \n  useEffect(() => {\n    document.title = `Count: ${count}`;\n  }, [count]); // CORRECT!\n}\n\n// BAD - using object as dep (causes infinite loop)\nfunction Search() {\n  const [query, setQuery] = useState('');\n  const options = { timeout: 5000 }; // New object each render!\n  \n  useEffect(() => {\n    // Runs every render because options is new!\n  }, [options]); // PROBLEM!\n}\n\n// FIX - use primitive or useMemo\nconst options = useMemo(() => ({ timeout: 5000 }), []);" },
            explanation: "Include all values used in effect."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does [count] mean in deps?", options: ["Run once", "Run every render", "Run when count changes", "Never run"], correctAnswer: 2, explanation: "Effect runs when count changes.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What causes infinite loop with useEffect?", options: ["Empty deps array", "Object in deps", "Function in deps", "null in deps"], correctAnswer: 1, explanation: "New object each render = infinite loop.", difficulty: 2 },
        { id: "q3", type: "true-false" as const, question: "You must include all variables used in effect.", correctAnswer: true, explanation: "Missing deps = stale closures.", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "What happens with no deps array?", options: ["Never runs", "Runs once", "Runs every render", "Error"], correctAnswer: 2, explanation: "No deps = run every render.", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "How to avoid object deps causing re-runs?", options: ["Use array", "Use useMemo", "Use null", "Don't use objects"], correctAnswer: 1, explanation: "useMemo stabilizes the object.", difficulty: 2 },
        { id: "q6", type: "mcq" as const, question: "Effect runs on mount with which deps?", options: ["[]", "[null]", "undefined", "Both A and B"], correctAnswer: 0, explanation: "Empty deps = mount only.", difficulty: 1 },
        { id: "q7", type: "mcq" as const, question: "Stale closure means?", options: ["Old function", "Old variable value", "New component", "Error"], correctAnswer: 1, explanation: "Stale closure captures old values.", difficulty: 2 },
        { id: "q8", type: "true-false" as const, question: "ESLint warns about missing deps.", correctAnswer: true, explanation: "eslint-plugin-react-hooks warns.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "[dep]", value: "Run when dep changes" },
      { label: "[]", value: "Run once on mount" },
      { label: "no deps", value: "Run every render" },
      { label: "useMemo", value: "Stable object value" }
    ]
  },
  {
    id: "react-15",
    number: 15,
    title: "Cleanup Functions",
    titleBn: "ক্লিনআপ ফাংশন",
    subtitle: "Proper resource cleanup",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["react-14"],
    learningObjectives: ["Write proper cleanup", "Cancel subscriptions", "Clear timers"],
    sections: [
      {
        id: "react-15-1",
        title: "When to Clean Up",
        whyItMatters: "Prevent memory leaks and bugs.",
        content: `Cleanup functions run before the effect runs again (except first time) and when component unmounts. Use them to cancel subscriptions, clear timers, and abort requests.`,
        codeExamples: [
          {
            id: "react-15-ex1",
            title: "Cleanup Patterns",
            description: "Common cleanup scenarios",
            code: { javascript: "import { useState, useEffect } from 'react';\n\n// 1. Clear timers\nfunction Timer() {\n  useEffect(() => {\n    const id = setInterval(() => {\n      console.log('tick');\n    }, 1000);\n    return () => clearInterval(id); // Cleanup\n  }, []);\n}\n\n// 2. Cancel subscriptions\nfunction Subscription() {\n  useEffect(() => {\n    const sub = events.on('message', handler);\n    return () => sub.unsubscribe(); // Cleanup\n  }, []);\n}\n\n// 3. Abort fetch requests\nfunction DataFetcher() {\n  useEffect(() => {\n    const controller = new AbortController();\n    fetch(url, { signal: controller.signal })\n      .then(...);\n    return () => controller.abort(); // Cleanup\n  }, [url]);\n}\n\n// 4. Close connections\nfunction WebSocket() {\n  useEffect(() => {\n    const ws = new WebSocket(url);\n    return () => ws.close(); // Cleanup\n  }, []);\n}" },
            explanation: "Clean up resources to prevent leaks."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "When does cleanup run?", options: ["Before mount", "On unmount only", "Before re-run and unmount", "Never"], correctAnswer: 2, explanation: "Cleanup runs before re-run and unmount.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What's cleanup for setInterval?", options: ["clearInterval", "clearTimeout", "removeListener", "unsubscribe"], correctAnswer: 0, explanation: "Use clearInterval for intervals.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "Why abort fetch in cleanup?", options: ["Performance", "Cancel outdated requests", "Memory only", "Error handling"], correctAnswer: 1, explanation: "Abort prevents state updates on unmounted components.", difficulty: 2 },
        { id: "q4", type: "true-false" as const, question: "Cleanup is optional.", correctAnswer: false, explanation: "Cleanup is required for subscriptions and timers.", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "Cleanup for WebSocket?", options: ["ws.close()", "ws.disconnect()", "ws.stop()", "ws.end()"], correctAnswer: 0, explanation: "Call close() to clean up WebSocket.", difficulty: 1 },
        { id: "q6", type: "mcq" as const, question: "Missing cleanup causes?", options: ["Nothing", "Memory leak", "Better performance", "Warning only"], correctAnswer: 1, explanation: "Missing cleanup causes memory leaks.", difficulty: 1 },
        { id: "q7", type: "true-false" as const, question: "Cleanup runs before every effect re-run.", correctAnswer: true, explanation: "Cleanup runs first, then effect.", difficulty: 1 },
        { id: "q8", type: "mcq" as const, question: "How to cancel event listener?", options: ["removeEventListener", "off()", "unsubscribe", "All of above"], correctAnswer: 3, explanation: "Depends on the API used.", difficulty: 2 }
      ]
    },
    cheatSheet: [
      { label: "clearInterval(id)", value: "Clear interval" },
      { label: "clearTimeout(id)", value: "Clear timeout" },
      { label: "controller.abort()", value: "Abort fetch" },
      { label: "ws.close()", value: "Close WebSocket" }
    ]
  },
  {
    id: "react-16",
    number: 16,
    title: "useRef Hook",
    titleBn: "ইউজ রেফ হুক",
    subtitle: "Mutable references",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["react-15"],
    learningObjectives: ["Use useRef for mutable values", "Access DOM elements", "Store previous values"],
    sections: [
      {
        id: "react-16-1",
        title: "useRef Basics",
        whyItMatters: "Store values without re-renders.",
        content: `useRef returns a mutable ref object that persists across renders. Unlike state, changing .current doesn't trigger re-render. Perfect for storing values you don't want to show in UI.`,
        codeExamples: [
          {
            id: "react-16-ex1",
            title: "useRef for Values",
            description: "Store mutable data",
            code: { javascript: "import { useState, useRef } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  const renderCount = useRef(0); // Doesn't cause re-render\n\n  function handleClick() {\n    setCount(count + 1);\n    renderCount.current++;\n    console.log('Render count:', renderCount.current);\n  }\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <p>Component rendered: {renderCount.current} times</p>\n      <button onClick={handleClick}>Increment</button>\n    </div>\n  );\n}\n\n// Store previous value\nfunction PreviousValue() {\n  const [value, setValue] = useState('');\n  const prevValue = useRef('');\n\n  const handleChange = (e) => {\n    prevValue.current = value; // Store previous before update\n    setValue(e.target.value);\n  };\n\n  return (\n    <div>\n      <input value={value} onChange={handleChange} />\n      <p>Previous: {prevValue.current}</p>\n    </div>\n  );\n}" },
            explanation: "useRef persists without re-rendering."
          }
        ]
      },
      {
        id: "react-16-2",
        title: "DOM References",
        whyItMatters: "Access DOM elements directly.",
        content: `Use ref to access DOM elements directly for focus, measurements, etc.`,
        codeExamples: [
          {
            id: "react-16-ex2",
            title: "DOM Ref",
            description: "Access DOM elements",
            code: { javascript: "import { useRef } from 'react';\n\nfunction FocusInput() {\n  const inputRef = useRef(null);\n\n  function handleFocus() {\n    inputRef.current.focus(); // Direct DOM access\n  }\n\n  return (\n    <div>\n      <input ref={inputRef} type=\"text\" />\n      <button onClick={handleFocus}>Focus Input</button>\n    </div>\n  );\n}\n\n// Multiple refs\nfunction MultiRefs() {\n  const firstRef = useRef(null);\n  const lastRef = useRef(null);\n\n  function handleKeyDown(e) {\n    if (e.key === 'Enter') {\n      if (e.target === firstRef.current) {\n        lastRef.current.focus();\n      } else {\n        firstRef.current.focus();\n      }\n    }\n  }\n\n  return (\n    <div>\n      <input ref={firstRef} onKeyDown={handleKeyDown} />\n      <input ref={lastRef} onKeyDown={handleKeyDown} />\n    </div>\n  );\n}" },
            explanation: "Use ref to access DOM elements."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does useRef return?", options: ["State value", "Mutable ref object", "DOM element", "Function"], correctAnswer: 1, explanation: "useRef returns a mutable ref object.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "Does changing ref.current cause re-render?", options: ["Yes", "No", "Sometimes", "Only with strict mode"], correctAnswer: 1, explanation: "Ref changes don't trigger re-render.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "How to access DOM with ref?", options: ["ref.current", "ref.element", "ref.node", "ref.dom"], correctAnswer: 0, explanation: "Access DOM via ref.current.", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "What is useRef commonly used for?", options: ["UI rendering", "Storing mutable values that don't affect UI", "Styling", "Routing"], correctAnswer: 1, explanation: "Store values without showing in UI.", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "How to focus input element?", options: ["inputRef.current.focus()", "inputRef.focus()", "focus(inputRef)", "document.focus(inputRef)"], correctAnswer: 0, explanation: "Call focus() on ref.current.", difficulty: 1 },
        { id: "q6", type: "mcq" as const, question: "useRef persists across?", options: ["Renders", "Mounts only", "Component destruction", "Never"], correctAnswer: 0, explanation: "Ref persists across renders.", difficulty: 1 },
        { id: "q7", type: "true-false" as const, question: "Can store previous state in ref.", correctAnswer: true, explanation: "Use ref to store previous value.", difficulty: 1 },
        { id: "q8", type: "mcq" as const, question: "Why use ref for timers instead of variable?", options: ["Faster", "Persists across renders", "Less memory", "Easier syntax"], correctAnswer: 1, explanation: "Ref persists, variable resets on render.", difficulty: 2 }
      ]
    },
    cheatSheet: [
      { label: "useRef(initial)", value: "Create ref" },
      { label: "ref.current", value: "Access value" },
      { label: "ref={ref}", value: "Attach to DOM" },
      { label: "Persists across renders", value: "Ref property" }
    ]
  },
  {
    id: "react-17",
    number: 17,
    title: "useMemo Hook",
    titleBn: "ইউজ মেমো হুক",
    subtitle: "Performance optimization",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["react-16"],
    learningObjectives: ["Memoize expensive calculations", "Avoid unnecessary re-computations", "Use with arrays and objects"],
    sections: [
      {
        id: "react-17-1",
        title: "When to Use useMemo",
        whyItMatters: "Avoid expensive recalculations.",
        content: `useMemo memoizes a computed value. It only recalculates when dependencies change. Use for expensive calculations like sorting large arrays.`,
        codeExamples: [
          {
            id: "react-17-ex1",
            title: "useMemo Basics",
            description: "Memoize calculations",
            code: { javascript: "import { useMemo } from 'react';\n\nfunction ExpensiveList({ items, filter }) {\n  // Only recalculates when items or filter changes\n  const filteredItems = useMemo(() => {\n    console.log('Filtering...');\n    return items.filter(item => \n      item.name.toLowerCase().includes(filter.toLowerCase())\n    );\n  }, [items, filter]);\n\n  // Only recalculates when items changes\n  const sortedItems = useMemo(() => {\n    return [...filteredItems].sort((a, b) => a.price - b.price);\n  }, [filteredItems]);\n\n  return (\n    <ul>\n      {sortedItems.map(item => (\n        <li key={item.id}>{item.name} - ${item.price}</li>\n      ))}\n    </ul>\n  );\n}\n\n// Object memoization\nfunction UserCard({ user }) {\n  const userData = useMemo(() => ({\n    fullName: `${user.firstName} ${user.lastName}`,\n    initials: user.firstName[0] + user.lastName[0]\n  }), [user.firstName, user.lastName]);\n\n  return <div>{userData.fullName}</div>;\n}" },
            explanation: "useMemo prevents unnecessary recalculations."
          }
        ]
      },
      {
        id: "react-17-2",
        title: "When NOT to Use useMemo",
        whyItMatters: "Avoid unnecessary optimization.",
        content: `Don't over-optimize. Simple calculations don't need memoization.`,
        codeExamples: [
          {
            id: "react-17-ex2",
            title: "Don't Over-Use",
            description: "When to skip useMemo",
            code: { javascript: "import { useMemo } from 'react';\n\n// UNNECESSARY - simple calculations\nfunction BadExample({ a, b }) {\n  const sum = useMemo(() => a + b, [a, b]); // Waste!\n  return <div>{sum}</div>;\n}\n\n// NECESSARY - expensive computation\nfunction GoodExample({ items }) {\n  const sorted = useMemo(() => {\n    return items.sort((a, b) => b.views - a.views); // Expensive\n  }, [items]);\n  return <div>{sorted[0]?.name}</div>;\n}\n\n// UNNECESSARY - objects recreated every render\nfunction Unnecessary({ name, age }) {\n  const person = useMemo(() => ({ name, age }), [name, age]);\n  // If passing to child, child re-renders anyway\n}\n\n// NECESSARY - prevent child re-renders\nfunction Parent({ items }) {\n  const expensive = useMemo(() => compute(items), [items]);\n  return <Child data={expensive} />; // Child only re-renders when expensive changes" },
            explanation: "Use only for expensive calculations."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does useMemo return?", options: ["Void", "Cached value", "Function", "Component"], correctAnswer: 1, explanation: "useMemo returns cached value.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "When does useMemo recalculate?", options: ["Every render", "When deps change", "Never", "On mount only"], correctAnswer: 1, explanation: "Recalculates when deps change.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "Best use case for useMemo?", options: ["Simple addition", "Expensive sorting/filtering", "Rendering UI", "Event handlers"], correctAnswer: 1, explanation: "Use for expensive calculations.", difficulty: 1 },
        { id: "q4", type: "true-false" as const, question: "useMemo always improves performance.", correctAnswer: false, explanation: "Over-use can hurt performance.", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "What happens with empty deps []?", options: ["Never recalculates", "Recalculates every render", "Calculates once", "Error"], correctAnswer: 2, explanation: "Calculates once and caches.", difficulty: 1 },
        { id: "q6", type: "mcq" as const, question: "Why use objects with useMemo?", options: ["Always needed", "Prevent unnecessary re-renders of child", "Faster", "Required by React"], correctAnswer: 1, explanation: "Prevent child re-renders.", difficulty: 2 },
        { id: "q7", type: "mcq" as const, question: "What is memoization?", options: ["Caching results", "Deleting cache", "Making code faster", "Simplifying logic"], correctAnswer: 0, explanation: "Memoization caches computed results.", difficulty: 1 },
        { id: "q8", type: "true-false" as const, question: "Array.sort() is expensive for large arrays.", correctAnswer: true, explanation: "Sorting is O(n log n), expensive for large arrays.", difficulty: 2 }
      ]
    },
    cheatSheet: [
      { label: "useMemo(fn, [deps])", value: "Memoize value" },
      { label: "Empty deps", value: "Calculate once" },
      { label: "Expensive calculation", value: "When to use" },
      { label: "Simple math", value: "Don't use" }
    ]
  },
  {
    id: "react-18",
    number: 18,
    title: "useCallback Hook",
    titleBn: "ইউজ কলব্যাক হুক",
    subtitle: "Memoize functions",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["react-17"],
    learningObjectives: ["Memoize callback functions", "Pass stable callbacks to children", "Optimize with useEffect"],
    sections: [
      {
        id: "react-18-1",
        title: "useCallback Basics",
        whyItMatters: "Prevent unnecessary child re-renders.",
        content: `useCallback memoizes a function. The function reference stays the same until dependencies change. Use when passing callbacks to optimized child components.`,
        codeExamples: [
          {
            id: "react-18-ex1",
            title: "useCallback Usage",
            description: "Memoize functions",
            code: { javascript: "import { useState, useCallback } from 'react';\nimport { Child } from './Child';\n\nfunction Parent() {\n  const [count, setCount] = useState(0);\n  const [text, setText] = useState('');\n\n  // Memoized - only changes when count changes\n  const handleIncrement = useCallback(() => {\n    setCount(c => c + 1);\n  }, []); // Empty deps - stable reference\n\n  // Memoized with deps\n  const handleSubmit = useCallback((value) => {\n    console.log('Submit:', value);\n    setText('');\n  }, []);\n\n  // Unmemoized - new function every render\n  const handleChange = (e) => {\n    setText(e.target.value);\n  };\n\n  return (\n    <div>\n      <button onClick={handleIncrement}>Count: {count}</button>\n      <input value={text} onChange={handleChange} />\n      <Child onSubmit={handleSubmit} />\n    </div>\n  );\n}" },
            explanation: "useCallback keeps function reference stable."
          }
        ]
      },
      {
        id: "react-18-2",
        title: "useCallback vs useMemo",
        whyItMatters: "Choose the right tool.",
        content: `useCallback(fn) = useMemo(() => fn). They do similar things but useCallback is more readable for functions.`,
        codeExamples: [
          {
            id: "react-18-ex2",
            title: "Comparison",
            description: "When to use each",
            code: { javascript: "import { useCallback, useMemo } from 'react';\n\n// These are equivalent:\nconst callback = useCallback(fn, deps);\nconst memo = useMemo(() => fn, deps);\n\n// useCallback is cleaner for functions\nconst handleClick = useCallback(() => {\n  console.log('clicked');\n}, []);\n\n// useMemo is better for values\nconst expensiveValue = useMemo(() => {\n  return heavyComputation(a, b);\n}, [a, b]);\n\n// When to use each:\n// useCallback: passing to child components\n// useMemo: computed values, objects\n// Neither: simple functions, inline handlers" },
            explanation: "useCallback for functions, useMemo for values."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does useCallback return?", options: ["Value", "Function", "Component", "Object"], correctAnswer: 1, explanation: "useCallback returns a function.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "When does useCallback return new function?", options: ["Every render", "When deps change", "Never", "On mount"], correctAnswer: 1, explanation: "New function when deps change.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "Main use case for useCallback?", options: ["Cache values", "Prevent child re-renders", "Store data", "Styling"], correctAnswer: 1, explanation: "Prevent unnecessary child re-renders.", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "useCallback(fn, []) means?", options: ["New function every render", "Same function always", "New function on mount", "Error"], correctAnswer: 1, explanation: "Empty deps = same function always.", difficulty: 1 },
        { id: "q5", type: "true-false" as const, question: "useCallback(fn) === useMemo(() => fn).", correctAnswer: true, explanation: "They are equivalent.", difficulty: 1 },
        { id: "q6", type: "mcq" as const, question: "When to use useCallback?", options: ["Always", "When passing to optimized child", "Never", "For all event handlers"], correctAnswer: 1, explanation: "Use for optimized child components.", difficulty: 2 },
        { id: "q7", type: "mcq" as const, question: "Inline arrow function vs useCallback?", options: ["Same", "Inline creates new each render", "useCallback is slower", "Inline is better"], correctAnswer: 1, explanation: "Inline functions are new each render.", difficulty: 1 },
        { id: "q8", type: "true-false" as const, question: "useCallback helps with React.memo children.", correctAnswer: true, explanation: "Stable callbacks prevent re-renders.", difficulty: 2 }
      ]
    },
    cheatSheet: [
      { label: "useCallback(fn, [deps])", value: "Memoize function" },
      { label: "Empty deps", value: "Stable reference" },
      { label: "Pass to memoized child", value: "Main use case" },
      { label: "fn === useMemo(() => fn)", value: "Equivalence" }
    ]
  },
  {
    id: "react-19",
    number: 19,
    title: "Custom Hooks",
    titleBn: "কাস্টম হুকস",
    subtitle: "Reusable logic",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["react-18"],
    learningObjectives: ["Create custom hooks", "Extract logic into reusable functions", "Share stateful logic"],
    sections: [
      {
        id: "react-19-1",
        title: "Building Custom Hooks",
        whyItMatters: "Extract and reuse component logic.",
        content: `Custom hooks are functions that use other hooks and start with "use". They let you extract component logic into reusable functions.`,
        codeExamples: [
          {
            id: "react-19-ex1",
            title: "Custom Hook Examples",
            description: "Create reusable hooks",
            code: { javascript: "import { useState, useEffect } from 'react';\n\n// Custom hook for localStorage\nfunction useLocalStorage(key, initialValue) {\n  const [value, setValue] = useState(() => {\n    const saved = localStorage.getItem(key);\n    return saved ? JSON.parse(saved) : initialValue;\n  });\n\n  useEffect(() => {\n    localStorage.setItem(key, JSON.stringify(value));\n  }, [key, value]);\n\n  return [value, setValue];\n}\n\n// Custom hook for window size\nfunction useWindowSize() {\n  const [size, setSize] = useState({\n    width: window.innerWidth,\n    height: window.innerHeight\n  });\n\n  useEffect(() => {\n    function handleResize() {\n      setSize({\n        width: window.innerWidth,\n        height: window.innerHeight\n      });\n    }\n    window.addEventListener('resize', handleResize);\n    return () => window.removeEventListener('resize', handleResize);\n  }, []);\n\n  return size;\n}\n\n// Using the hooks\nfunction App() {\n  const [name, setName] = useLocalStorage('name', '');\n  const { width, height } = useWindowSize();\n\n  return (\n    <div>\n      <input value={name} onChange={e => setName(e.target.value)} />\n      <p>Window: {width} x {height}</p>\n    </div>\n  );\n}" },
            explanation: "Custom hooks reuse stateful logic."
          }
        ]
      },
      {
        id: "react-19-2",
        title: "Hook Naming Convention",
        whyItMatters: "Follow React rules.",
        content: `Custom hooks must start with "use" to work with React's rules of hooks.`,
        codeExamples: [
          {
            id: "react-19-ex2",
            title: "Naming Rules",
            description: "Follow conventions",
            code: { javascript: "// GOOD - starts with \"use\"\nfunction useAuth() { ... }\nfunction useFetch() { ... }\nfunction useDebounce() { ... }\nfunction useFormValidation() { ... }\n\n// BAD - doesn't start with \"use\"\nfunction getUserData() { ... } // Won't work with hooks!\nfunction calculateTotal() { ... } // Wrong!\n\n// The \"use\" tells React to check hook rules\n// Without it, React can't apply hooks properly\n\n// Hook can call other hooks\nfunction useUser() {\n  const [user, setUser] = useState(null);\n  const [loading, setLoading] = useState(true);\n  \n  useEffect(() => {\n    fetchUser().then(setUser).finally(() => setLoading(false));\n  }, []);\n\n  return { user, loading }; // Return anything\n}" },
            explanation: "Custom hooks MUST start with 'use'."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What must custom hooks start with?", options: ["hook", "use", "custom", "Any name"], correctAnswer: 1, explanation: "Must start with 'use'.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "Can custom hooks call other hooks?", options: ["No", "Yes", "Only useState", "Only useEffect"], correctAnswer: 1, explanation: "Custom hooks can use any hooks.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What is the benefit of custom hooks?", options: ["Faster code", "Reusable logic", "Less code", "Better styling"], correctAnswer: 1, explanation: "Extract and reuse logic.", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "Why is 'use' prefix required?", options: ["Styling", "React detects hooks by name", "Convention only", "TypeScript requires it"], correctAnswer: 1, explanation: "React checks for 'use' prefix.", difficulty: 2 },
        { id: "q5", type: "mcq" as const, question: "Custom hooks can return?", options: ["Only state", "Only functions", "Any value", "Nothing"], correctAnswer: 2, explanation: "Return whatever you need.", difficulty: 1 },
        { id: "q6", type: "true-false" as const, question: "Custom hooks share state between components.", correctAnswer: false, explanation: "Each component has its own hook instance.", difficulty: 2 },
        { id: "q7", type: "mcq" as const, question: "useLocalStorage is a custom hook because?", options: ["It's a function", "It uses useState", "It starts with use and uses hooks", "It's built-in"], correctAnswer: 2, explanation: "Uses hooks and starts with use.", difficulty: 1 },
        { id: "q8", type: "mcq" as const, question: "Multiple components using same hook share what?", options: ["State", "Nothing", "Props", "Styles"], correctAnswer: 1, explanation: "Each component has independent state.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "function useXxx()", value: "Create custom hook" },
      { label: "Use hooks inside", value: "Add functionality" },
      { label: "return value", value: "Expose to consumer" },
      { label: "use prefix required", value: "React rule" }
    ]
  },
  {
    id: "react-20",
    number: 20,
    title: "useReducer Hook",
    titleBn: "ইউজ রিডিউসার হুক",
    subtitle: "Complex state management",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["react-19"],
    learningObjectives: ["Use useReducer for complex state", "Write reducer functions", "Combine with useContext"],
    sections: [
      {
        id: "react-20-1",
        title: "useReducer Basics",
        whyItMatters: "Manage complex state logic.",
        content: `useReducer is like useState but for complex state transitions. You provide a reducer function that takes current state and action, returning new state.`,
        codeExamples: [
          {
            id: "react-20-ex1",
            title: "useReducer Example",
            description: "Complex state transitions",
            code: { javascript: "import { useReducer } from 'react';\n\n// Reducer function\nfunction counterReducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + 1 };\n    case 'decrement':\n      return { count: state.count - 1 };\n    case 'reset':\n      return { count: 0 };\n    case 'incrementBy':\n      return { count: state.count + action.payload };\n    default:\n      return state;\n  }\n}\n\nfunction Counter() {\n  const [state, dispatch] = useReducer(counterReducer, { count: 0 });\n\n  return (\n    <div>\n      <p>Count: {state.count}</p>\n      <button onClick={() => dispatch({ type: 'increment' })}>+</button>\n      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>\n      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>\n      <button onClick={() => dispatch({ type: 'incrementBy', payload: 5 })}>+5</button>\n    </div>\n  );\n}" },
            explanation: "useReducer handles complex transitions."
          }
        ]
      },
      {
        id: "react-20-2",
        title: "When to Use useReducer",
        whyItMatters: "Choose the right tool.",
        content: `useReducer is better when you have complex state logic, multiple sub-values, or when the next state depends on the previous one.`,
        codeExamples: [
          {
            id: "react-20-ex2",
            title: "Form with useReducer",
            description: "Complex form handling",
            code: { javascript: "import { useReducer } from 'react';\n\nconst initialState = {\n  username: '',\n  email: '',\n  password: '',\n  errors: {},\n  isSubmitting: false\n};\n\nfunction formReducer(state, action) {\n  switch (action.type) {\n    case 'setField':\n      return {\n        ...state,\n        [action.field]: action.value,\n        errors: { ...state.errors, [action.field]: '' }\n      };\n    case 'setError':\n      return { ...state, errors: action.errors };\n    case 'submit':\n      return { ...state, isSubmitting: true };\n    case 'success':\n      return { ...initialState };\n    default:\n      return state;\n  }\n}\n\nfunction Form() {\n  const [state, dispatch] = useReducer(formReducer, initialState);\n\n  function handleChange(e) {\n    dispatch({\n      type: 'setField',\n      field: e.target.name,\n      value: e.target.value\n    });\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    dispatch({ type: 'submit' });\n    // validation logic...\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input name=\"username\" value={state.username} onChange={handleChange} />\n      <input name=\"email\" value={state.email} onChange={handleChange} />\n      <button disabled={state.isSubmitting}>Submit</button>\n    </form>\n  );\n}" },
            explanation: "useReducer is great for forms."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does useReducer return?", options: ["[state, setState]", "[state, dispatch]", "[value, setter]", "None"], correctAnswer: 1, explanation: "Returns state and dispatch function.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "Reducer function parameters are?", options: ["(action, state)", "(state, action)", "(prev, next)", "(initial, current)"], correctAnswer: 1, explanation: "reducer(state, action).", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "dispatch does what?", options: ["Updates state directly", "Calls reducer with action", "Triggers re-render", "Returns new state"], correctAnswer: 1, explanation: "dispatch sends action to reducer.", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "When is useReducer better than useState?", options: ["Simple state", "Complex transitions", "Single value", "No state"], correctAnswer: 1, explanation: "Better for complex transitions.", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "What is action.payload?", options: ["Required field", "Optional data", "Type identifier", "Error"], correctAnswer: 1, explanation: "payload carries additional data.", difficulty: 1 },
        { id: "q6", type: "mcq" as const, question: "How to update state in reducer?", options: ["state = newValue", "return newState", "setState()", "update()"], correctAnswer: 1, explanation: "Return new state from reducer.", difficulty: 1 },
        { id: "q7", type: "true-false" as const, question: "useReducer is similar to Redux.", correctAnswer: true, explanation: "Redux uses same pattern.", difficulty: 1 },
        { id: "q8", type: "mcq" as const, question: "What does default case do?", options: ["Throws error", "Returns state unchanged", "Resets state", "Logs warning"], correctAnswer: 1, explanation: "Return state for unknown actions.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "useReducer(reducer, initial)", value: "Create reducer" },
      { label: "dispatch({type, payload})", value: "Send action" },
      { label: "return newState", value: "Update state" },
      { label: "switch(action.type)", value: "Handle actions" }
    ]
  },
  {
    id: "react-21",
    number: 21,
    title: "useContext Hook",
    titleBn: "গ্লোবাল স্টেট",
    subtitle: "Data flow without props",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["react-20"],
    learningObjectives: ["Create context", "Provide context", "Consume context with useContext"],
    sections: [
      {
        id: "react-21-1",
        title: "Context Basics",
        whyItMatters: "Avoid prop drilling.",
        content: `Context provides a way to pass data through the component tree without passing props manually at every level. Use for theme, auth, or other global data.`,
        codeExamples: [
          {
            id: "react-21-ex1",
            title: "Creating Context",
            description: "Set up context",
            code: { javascript: "import { createContext, useContext, useState } from 'react';\n\n// 1. Create context\nconst ThemeContext = createContext();\n\n// 2. Create provider component\nfunction ThemeProvider({ children }) {\n  const [theme, setTheme] = useState('light');\n  \n  const toggleTheme = () => {\n    setTheme(t => t === 'light' ? 'dark' : 'light');\n  };\n\n  return (\n    <ThemeContext.Provider value={{ theme, toggleTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n\n// 3. Consume in any component\nfunction ThemeButton() {\n  const { theme, toggleTheme } = useContext(ThemeContext);\n  \n  return (\n    <button onClick={toggleTheme} className={theme}>\n      Current: {theme}\n    </button>\n  );\n}\n\n// 4. Use in app\nfunction App() {\n  return (\n    <ThemeProvider>\n      <ThemeButton />\n      <OtherComponent />\n    </ThemeProvider>\n  );\n}" },
            explanation: "Context passes data without props."
          }
        ]
      },
      {
        id: "react-21-2",
        title: "Context Patterns",
        whyItMatters: "Common context usage patterns.",
        content: `Create custom hook for cleaner context consumption.`,
        codeExamples: [
          {
            id: "react-21-ex2",
            title: "Custom Context Hook",
            description: "Clean context usage",
            code: { javascript: "import { createContext, useContext, useState } from 'react';\n\n// Auth Context\nconst AuthContext = createContext(null);\n\nexport function AuthProvider({ children }) {\n  const [user, setUser] = useState(null);\n\n  const login = (userData) => setUser(userData);\n  const logout = () => setUser(null);\n\n  return (\n    <AuthContext.Provider value={{ user, login, logout }}>\n      {children}\n    </AuthContext.Provider>\n  );\n}\n\n// Custom hook - cleaner usage\nexport function useAuth() {\n  const context = useContext(AuthContext);\n  if (!context) {\n    throw new Error('useAuth must be used within AuthProvider');\n  }\n  return context;\n}\n\n// Usage in component\nfunction Profile() {\n  const { user, logout } = useAuth();\n  \n  if (!user) return <p>Please login</p>;\n  \n  return (\n    <div>\n      <p>Welcome, {user.name}</p>\n      <button onClick={logout}>Logout</button>\n    </div>\n  );\n}" },
            explanation: "Custom hooks wrap context nicely."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does createContext() return?", options: ["Component", "Provider and consumer", "Context object", "Function"], correctAnswer: 2, explanation: "Returns context object.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What does Provider do?", options: ["Consumes context", "Makes context available", "Creates context", "Destroys context"], correctAnswer: 1, explanation: "Provider makes context available.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "useContext receives what?", options: ["Provider", "Context object", "Value", "Component"], correctAnswer: 1, explanation: "Pass context object to useContext.", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "What's prop drilling?", options: ["Drilling through props", "Passing props through many levels", "Context usage", "State management"], correctAnswer: 1, explanation: "Passing props through many levels.", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "Context is good for?", options: ["Local state", "Global state like theme/auth", "One component", "CSS only"], correctAnswer: 1, explanation: "Context is for global state.", difficulty: 1 },
        { id: "q6", type: "mcq" as const, question: "What happens when value changes in Provider?", options: ["Nothing", "All consumers re-render", "Only one consumer re-renders", "Error"], correctAnswer: 1, explanation: "All consuming components re-render.", difficulty: 1 },
        { id: "q7", type: "true-false" as const, question: "You can have multiple Providers.", correctAnswer: true, explanation: "Wrap with multiple providers.", difficulty: 1 },
        { id: "q8", type: "mcq" as const, question: "Custom hook for context gives?", options: ["Better performance", "Cleaner API and error handling", "More features", "Less code"], correctAnswer: 1, explanation: "Cleaner usage and null checks.", difficulty: 2 }
      ]
    },
    cheatSheet: [
      { label: "createContext()", value: "Create context" },
      { label: "<Provider value={}>", value: "Provide value" },
      { label: "useContext(Context)", value: "Consume value" },
      { label: "Avoid prop drilling", value: "Context benefit" }
    ]
  },
  {
    id: "react-22",
    number: 22,
    title: "Hook Rules",
    titleBn: "হুকস রুলস",
    subtitle: "Follow the rules",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["react-21"],
    learningObjectives: ["Follow hook rules", "Understand eslint-plugin-react-hooks", "Avoid common mistakes"],
    sections: [
      {
        id: "react-22-1",
        title: "Hook Rules Explained",
        whyItMatters: "Hooks must follow specific rules to work.",
        content: `React hooks have two main rules:
1. Only call hooks at the top level - not in loops, conditions, or nested functions
2. Only call hooks from React functions - not regular JavaScript functions`,
        codeExamples: [
          {
            id: "react-22-ex1",
            title: "Correct Usage",
            description: "Follow the rules",
            code: { javascript: "import { useState, useEffect } from 'react';\n\n// GOOD - top level, not in conditions\nfunction GoodComponent() {\n  const [count, setCount] = useState(0); // Top level\n  const [loading, setLoading] = useState(true);\n\n  // Good - in loop with consistent order\n  const [items, setItems] = useState([]);\n  // Always call same hooks in same order!\n\n  useEffect(() => {\n    // ...\n  }, []); // Top level\n\n  if (loading) return <div>Loading...</div>;\n\n  return <div>{count}</div>;\n}\n\n// BAD - conditional hook call\nfunction BadComponent() {\n  const [state, setState] = useState(null);\n\n  if (someCondition) {\n    const [count, setCount] = useState(0); // WRONG!\n  }\n\n  // BAD - hook in regular function\nfunction regularFunction() {\n  const [value, setValue] = useState(0); // WRONG!\n}" },
            explanation: "Hooks must follow specific rules."
          }
        ]
      },
      {
        id: "react-22-2",
        title: "ESLint Plugin",
        whyItMatters: "Automatically catch rule violations.",
        content: `The eslint-plugin-react-hooks package catches these mistakes automatically.`,
        codeExamples: [
          {
            id: "react-22-ex2",
            title: "ESLint Configuration",
            description: "Enable hook rules",
            code: { javascript: "// .eslintrc.js\nmodule.exports = {\n  plugins: ['react-hooks'],\n  rules: {\n    // Enforce hook rules\n    'react-hooks/rules-of-hooks': 'error',\n    // Enforce exhaustive deps\n    'react-hooks/exhaustive-deps': 'warn'\n  }\n};\n\n// Common errors it catches:\n// 1. 'Hooks can only be called inside the body of a function component'\n// 2. 'React Hook useEffect has a missing dependency'\n// 3. 'React Hook useState is called conditionally'\n\n// How to fix:\n// - Move hooks to top level\n// - Extract conditional logic outside hook calls\n// - Add or remove dependencies as needed" },
            explanation: "ESLint catches hook violations."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "Where can you call hooks?", options: ["Any function", "Top level of function component", "Inside if statement", "Inside regular function"], correctAnswer: 1, explanation: "Call hooks at top level of function component.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "Can you call hooks inside if?", options: ["Yes", "No", "Only with useState", "Only with useEffect"], correctAnswer: 1, explanation: "Never call hooks in conditions.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What does 'exhaustive-deps' warn about?", options: ["Unused code", "Missing dependencies in hooks", "Syntax errors", "Type errors"], correctAnswer: 1, explanation: "Warns about missing deps in hooks.", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "Can hooks be called in loops?", options: ["Yes if consistent", "No", "Only for useState", "Only for useEffect"], correctAnswer: 0, explanation: "Can use in loops if order is consistent.", difficulty: 2 },
        { id: "q5", type: "mcq" as const, question: "What error shows 'Hooks can only be called inside the body of a function component'?", options: ["In regular function", "In class component", "Both A and B", "In typescript"], correctAnswer: 2, explanation: "Called outside React function.", difficulty: 1 },
        { id: "q6", type: "mcq" as const, question: "How to fix conditional hook?", options: ["Move inside condition", "Move outside condition", "Use useMemo", "Use useCallback"], correctAnswer: 1, explanation: "Move hook outside condition.", difficulty: 2 },
        { id: "q7", type: "true-false" as const, question: "Order of hooks matters.", correctAnswer: true, explanation: "Hooks must be called in same order every render.", difficulty: 1 },
        { id: "q8", type: "mcq" as const, question: "What package enforces hook rules?", options: ["eslint-plugin-react", "eslint-plugin-react-hooks", "eslint-plugin-jsx", "eslint-plugin-hooks"], correctAnswer: 1, explanation: "eslint-plugin-react-hooks enforces rules.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "Top level", value: "Call hooks at top" },
      { label: "Same order", value: "Consistent hook order" },
      { label: "React functions only", value: "Only in components/custom hooks" },
      { label: "eslint-plugin-react-hooks", value: "Linter for hooks" }
    ]
  },
  {
    id: "react-23",
    number: 23,
    title: "Hook Performance Optimization",
    titleBn: "হুক পারফরম্যান্স",
    subtitle: "Optimize hook usage",
    difficulty: "Advanced" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["react-22"],
    learningObjectives: ["Optimize re-renders", "Use useTransition", "Use useDeferredValue"],
    sections: [
      {
        id: "react-23-1",
        title: "Optimization Techniques",
        whyItMatters: "Make apps faster.",
        content: `React 18+ has new features for better performance: useTransition for urgent/non-urgent updates, and useDeferredValue for deferred rendering.`,
        codeExamples: [
          {
            id: "react-23-ex1",
            title: "useTransition",
            description: "Mark non-urgent updates",
            code: { javascript: "import { useState, useTransition } from 'react';\n\nfunction SearchResults() {\n  const [query, setQuery] = useState('');\n  const [results, setResults] = useState([]);\n  \n  // isPending indicates transition is happening\n  const [isPending, startTransition] = useTransition();\n\n  function handleChange(e) {\n    const value = e.target.value;\n    \n    // Urgent update - input should respond immediately\n    setQuery(value);\n    \n    // Non-urgent - search results can wait\n    startTransition(() => {\n      setResults(searchItems(value));\n    });\n  }\n\n  return (\n    <div>\n      <input value={query} onChange={handleChange} />\n      {isPending && <p>Searching...</p>}\n      <ul>\n        {results.map(item => <li key={item}>{item}</li>)}\n      </ul>\n    </div>\n  );\n}" },
            explanation: "useTransition marks non-urgent updates."
          }
        ]
      },
      {
        id: "react-23-2",
        title: "useDeferredValue",
        whyItMatters: "Defer expensive renders.",
        content: `useDeferredValue lets you defer rendering of non-critical parts while keeping the UI responsive.`,
        codeExamples: [
          {
            id: "react-23-ex2",
            title: "useDeferredValue",
            description: "Defer rendering",
            code: { javascript: "import { useState, useDeferredValue } from 'react';\n\nfunction ExpensiveList({ items }) {\n  const deferredItems = useDeferredValue(items);\n  \n  // This list can be delayed while user types\n  return (\n    <ul>\n      {deferredItems.map(item => (\n        <ExpensiveItem key={item.id} item={item} />\n      ))}\n    </ul>\n  );\n}\n\nfunction App() {\n  const [query, setQuery] = useState('');\n  const items = useMemo(() => searchItems(query), [query]);\n  \n  return (\n    <div>\n      <input value={query} onChange={e => setQuery(e.target.value)} />\n      <ExpensiveList items={items} />\n    </div>\n  );\n}" },
            explanation: "Defer non-critical rendering."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does useTransition return?", options: ["Value and setter", "IsPending and startTransition", "State and dispatch", "Nothing"], correctAnswer: 1, explanation: "Returns isPending and startTransition.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "startTransition marks updates as?", options: ["Urgent", "Non-urgent", "Critical", "Background"], correctAnswer: 1, explanation: "Marks as non-urgent.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "When is isPending true?", options: ["Always", "During transition", "On error", "Never"], correctAnswer: 1, explanation: "True during transition.", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "What does useDeferredValue do?", options: ["Delays a value", "Creates delay", "Caches value", "Ignores value"], correctAnswer: 0, explanation: "Defers the value for rendering.", difficulty: 1 },
        { id: "q5", type: "mcq" as const, question: "useDeferredValue is useful for?", options: ["Simple inputs", "Expensive to render lists", "Network requests", "State only"], correctAnswer: 1, explanation: "Good for expensive lists.", difficulty: 2 },
        { id: "q6", type: "true-false" as const, question: "useTransition blocks the UI.", correctAnswer: false, explanation: "Keeps UI responsive.", difficulty: 1 },
        { id: "q7", type: "mcq" as const, question: "Which is for values?", options: ["useTransition", "useDeferredValue", "useState", "useMemo"], correctAnswer: 1, explanation: "useDeferredValue for values.", difficulty: 1 },
        { id: "q8", type: "mcq" as const, question: "Which is for functions?", options: ["useTransition", "useDeferredValue", "useEffect", "useId"], correctAnswer: 0, explanation: "useTransition for functions.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "useTransition", value: "Mark non-urgent updates" },
      { label: "isPending", value: "Transition status" },
      { label: "useDeferredValue", value: "Defer value rendering" },
      { label: "Responsive UI", value: "Main benefit" }
    ]
  },
  {
    id: "react-24",
    number: 24,
    title: "Advanced Hook Patterns",
    titleBn: "অ্যাডভান্সড হুক প্যাটার্নস",
    subtitle: "Complex hook patterns",
    difficulty: "Advanced" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["react-23"],
    learningObjectives: ["Create compound hooks", "Use hook composition", "Build hook abstractions"],
    sections: [
      {
        id: "react-24-1",
        title: "Hook Composition",
        whyItMatters: "Build complex logic from simple pieces.",
        content: `Compose multiple hooks together to create complex functionality.`,
        codeExamples: [
          {
            id: "react-24-ex1",
            title: "Composing Hooks",
            description: "Combine multiple hooks",
            code: { javascript: "import { useState, useEffect } from 'react';\n\n// Simple hooks\nfunction useToggle(initial = false) {\n  const [value, setValue] = useState(initial);\n  const toggle = () => setValue(v => !v);\n  return [value, toggle];\n}\n\nfunction useDebounce(value, delay) {\n  const [debounced, setDebounced] = useState(value);\n  \n  useEffect(() => {\n    const timer = setTimeout(() => setDebounced(value), delay);\n    return () => clearTimeout(timer);\n  }, [value, delay]);\n  \n  return debounced;\n}\n\n// Composed hook\nfunction useSearch(query) {\n  const [results, setResults] = useState([]);\n  const [loading, setLoading] = useState(false);\n  \n  useEffect(() => {\n    if (!query) {\n      setResults([]);\n      return;\n    }\n    \n    setLoading(true);\n    searchApi(query)\n      .then(setResults)\n      .finally(() => setLoading(false));\n  }, [query]);\n  \n  return { results, loading };\n}\n\n// Usage\nfunction Search() {\n  const [query, setQuery] = useState('');\n  const [isOpen, toggleOpen] = useToggle(false);\n  const debouncedQuery = useDebounce(query, 300);\n  const { results, loading } = useSearch(debouncedQuery);\n  \n  return (\n    <div>\n      <input value={query} onChange={e => setQuery(e.target.value)} />\n      <button onClick={toggleOpen}>{isOpen ? 'Close' : 'Open'}</button>\n      {loading ? <p>Loading...</p> : results.map(r => <p key={r}>{r}</p>)}\n    </div>\n  );\n}" },
            explanation: "Compose hooks for complex logic."
          }
        ]
      },
      {
        id: "react-24-2",
        title: "Reducer with Context",
        whyItMatters: "Global state with complex logic.",
        content: `Combine useReducer with useContext for Redux-like global state.`,
        codeExamples: [
          {
            id: "react-24-ex2",
            title: "Redux-like Pattern",
            description: "Global state with reducer",
            code: { javascript: "import { createContext, useContext, useReducer } from 'react';\n\n// 1. Define initial state and reducer\nconst initialState = { user: null, theme: 'light' };\n\nfunction appReducer(state, action) {\n  switch (action.type) {\n    case 'SET_USER':\n      return { ...state, user: action.payload };\n    case 'SET_THEME':\n      return { ...state, theme: action.payload };\n    case 'LOGOUT':\n      return { ...state, user: null };\n    default:\n      return state;\n  }\n}\n\n// 2. Create context\nconst AppContext = createContext();\n\n// 3. Provider with reducer\nfunction AppProvider({ children }) {\n  const [state, dispatch] = useReducer(appReducer, initialState);\n  \n  return (\n    <AppContext.Provider value={{ state, dispatch }}>\n      {children}\n    </AppContext.Provider>\n  );\n}\n\n// 4. Custom hooks for cleaner usage\nexport function useAppState() {\n  return useContext(AppContext);\n}\n\nexport function useUser() {\n  const { state, dispatch } = useAppState();\n  return {\n    user: state.user,\n    setUser: (user) => dispatch({ type: 'SET_USER', payload: user }),\n    logout: () => dispatch({ type: 'LOGOUT' })\n  };\n}\n\n// Usage\nfunction Profile() {\n  const { user, logout } = useUser();\n  return user ? (\n    <div>\n      <p>Welcome {user.name}</p>\n      <button onClick={logout}>Logout</button>\n    </div>\n  ) : <p>Please login</p>;\n}" },
            explanation: "Reducer + Context = Redux pattern."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What is hook composition?", options: ["Combining hooks into new hooks", "Using multiple useState", "Using useEffect only", "Creating classes"], correctAnswer: 0, explanation: "Building complex hooks from simple ones.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "Reducer + Context is similar to?", options: ["Redux", "Local state", "CSS", "HTTP"], correctAnswer: 0, explanation: "Similar to Redux pattern.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "Can one custom hook call another?", options: ["No", "Yes", "Only useState", "Only useEffect"], correctAnswer: 1, explanation: "Custom hooks can use other hooks.", difficulty: 1 },
        { id: "q4", type: "mcq" as const, question: "Why use custom hooks over context directly?", options: ["Better performance", "Cleaner API", "More features", "Less code"], correctAnswer: 1, explanation: "Custom hooks provide cleaner API.", difficulty: 2 },
        { id: "q5", type: "mcq" as const, question: "Can useReducer handle async actions?", options: ["No", "Yes with middleware", "Only sync", "Only with Redux"], correctAnswer: 1, explanation: "Needs middleware for async (like redux-thunk).", difficulty: 2 },
        { id: "q6", type: "mcq" as const, question: "Multiple reducers can be combined with?", options: ["combineReducers", "useReducer with split state", "All of above", "None"], correctAnswer: 2, explanation: "Both patterns work in React.", difficulty: 2 },
        { id: "q7", type: "true-false" as const, question: "Custom hooks share state between components.", correctAnswer: false, explanation: "Each component has own instance.", difficulty: 1 },
        { id: "q8", type: "mcq" as const, question: "What's the benefit of useToggle?", options: ["Search", "Toggle boolean values", "Debounce", "Fetch data"], correctAnswer: 1, explanation: "Manages boolean toggle state.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "Compose hooks", value: "Call hooks in custom hook" },
      { label: "Reducer + Context", value: "Global state pattern" },
      { label: "Clean API", value: "Custom hooks benefit" },
      { label: "Reusable logic", value: "Custom hook purpose" }
    ]
  },
  {
    id: "react-25",
    number: 25,
    partLabel: "Part 3: Component Architecture",
    title: "Component Composition",
    titleBn: "কম্পোনেন্ট কম্পোজিশন",
    subtitle: "Building complex UIs",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["react-24"],
    learningObjectives: ["Compose components effectively", "Use children prop", "Create flexible APIs"],
    sections: [
      {
        id: "react-25-1",
        title: "Composition Patterns",
        whyItMatters: "Build complex UIs from simple pieces.",
        content: `Component composition is the pattern of building complex UIs by combining smaller components. Use children prop, render props, or slots for flexible composition.`,
        codeExamples: [
          {
            id: "react-25-ex1",
            title: "Children Prop",
            description: "Using children for composition",
            code: { javascript: "function Card({ children, title }) {\n  return (\n    <div className=\"card\">\n      {title && <h2>{title}</h2>}\n      <div className=\"card-content\">\n        {children}\n      </div>\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <Card title=\"Welcome\">\n      <p>This is the card content.</p>\n      <button>Click me</button>\n    </Card>\n  );\n}\n\n// Layout composition\nfunction Layout({ header, main, footer }) {\n  return (\n    <div>\n      <header>{header}</header>\n      <main>{main}</main>\n      <footer>{footer}</footer>\n    </div>\n  );\n}\n\nfunction App2() {\n  return (\n    <Layout \n      header={<h1>My App</h1>}\n      main={<p>Main content</p>}\n      footer={<small>2024</small>}\n    />\n  );\n}" },
            explanation: "Use children for flexible composition."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What is component composition?", options: ["CSS composition", "Building complex UI from simple components", "Single component", "Database"], correctAnswer: 1, explanation: "Building UIs from smaller components.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What does children prop contain?", options: ["CSS", "Nested JSX elements", "State", "Functions"], correctAnswer: 1, explanation: "children contains nested elements.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "How to pass JSX as prop?", options: ["As string", "As expression with {}", "Can't pass JSX", "Only as children"], correctAnswer: 1, explanation: "Pass JSX as expression.", difficulty: 1 },
        { id: "q4", type: "true-false" as const, question: "Composition is better than inheritance.", correctAnswer: true, explanation: "React favors composition.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "children prop", value: "Nested content" },
      { label: "Composition", value: "Combine components" },
      { label: "Pass JSX as prop", value: "Use {}" }
    ]
  },
  {
    id: "react-26",
    number: 26,
    title: "Lifting State Up",
    titleBn: "স্টেট উপরে তোলা",
    subtitle: "Share state between components",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["react-25"],
    learningObjectives: ["Lift state to common ancestor", "Share state between siblings", "Avoid duplicate state"],
    sections: [
      {
        id: "react-26-1",
        title: "When to Lift State",
        whyItMatters: "Share state between components.",
        content: `Lift state up when multiple components need to share the same data. Move state to the closest common ancestor.`,
        codeExamples: [
          {
            id: "react-26-ex1",
            title: "Lifting State",
            description: "Share state between siblings",
            code: { javascript: "function TemperatureInput({ value, onChange }) {\n  return (\n    <input \n      value={value}\n      onChange={e => onChange(e.target.value)}\n      placeholder=\"Enter temperature\"\n    />\n  );\n}\n\nfunction Calculator() {\n  const [celsius, setCelsius] = useState('');\n  const [fahrenheit, setFahrenheit] = useState('');\n\n  const handleCelsiusChange = (value) => {\n    setCelsius(value);\n    setFahrenheit(value ? (value * 9/5 + 32).toFixed(2) : '');\n  };\n\n  const handleFahrenheitChange = (value) => {\n    setFahrenheit(value);\n    setCelsius(value ? ((value - 32) * 5/9).toFixed(2) : '');\n  };\n\n  return (\n    <div>\n      <TemperatureInput value={celsius} onChange={handleCelsiusChange} />\n      <TemperatureInput value={fahrenheit} onChange={handleFahrenheitChange} />\n    </div>\n  );\n}" },
            explanation: "Lift state to parent component."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "When should you lift state?", options: ["Never", "When siblings need same data", "Always", "For styling"], correctAnswer: 1, explanation: "Lift when siblings share data.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "Where should shared state live?", options: ["Any component", "Closest common ancestor", "Child component", "Outside components"], correctAnswer: 1, explanation: "State goes to common ancestor.", difficulty: 1 },
        { id: "q3", type: "true-false" as const, question: "Lift state creates single source of truth.", correctAnswer: true, explanation: "One state location is source of truth.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "Common ancestor", value: "Where to lift state" },
      { label: "Single source", value: "One state location" }
    ]
  },
  {
    id: "react-27",
    number: 27,
    title: "Prop Drilling",
    titleBn: "প্রপ ড্রিলিং",
    subtitle: "Problem and solutions",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["react-26"],
    learningObjectives: ["Identify prop drilling", "Use context to avoid it", "Know when it's okay"],
    sections: [
      {
        id: "react-27-1",
        title: "Understanding Prop Drilling",
        whyItMatters: "Know when to use alternatives.",
        content: `Prop drilling is passing props through multiple levels of components that don't need them. It's okay for 1-2 levels but gets messy deeper.`,
        codeExamples: [
          {
            id: "react-27-ex1",
            title: "Prop Drilling Example",
            description: "The problem",
            code: { javascript: "// Problem - passing through many levels\nfunction App() {\n  const user = { name: 'John', email: 'john@email.com' };\n  return <A user={user} />;\n}\n\nfunction A({ user }) {\n  return <B user={user} />;\n}\n\nfunction B({ user }) {\n  return <C user={user} />;\n}\n\nfunction C({ user }) {\n  // Finally use the user!\n  return <p>{user.name}</p>;\n}\n\n// Solution - use Context\n// Create context at top level\n// Use useContext in C to get user directly" },
            explanation: "Use context to avoid deep prop chains."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What is prop drilling?", options: ["Drilling holes", "Passing props through many levels", "State management", "CSS"], correctAnswer: 1, explanation: "Passing props through many components.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What's the solution for deep prop drilling?", options: ["More props", "Context API", "Classes", "Less code"], correctAnswer: 1, explanation: "Use Context API.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "Is prop drilling always bad?", options: ["Yes always", "No, okay for 1-2 levels", "Never use it", "Only with objects"], correctAnswer: 1, explanation: "Okay for shallow trees.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "Prop drilling", value: "Pass through many levels" },
      { label: "Solution", value: "Context API" }
    ]
  },
  {
    id: "react-28",
    number: 28,
    title: "Context API Deep Dive",
    titleBn: "কনটেক্সট এপিআই",
    subtitle: "Global state management",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["react-27"],
    learningObjectives: ["Create multiple contexts", "Use context with reducers", "Optimize context performance"],
    sections: [
      {
        id: "react-28-1",
        title: "Advanced Context Patterns",
        whyItMatters: "Scale your state management.",
        content: `For larger apps, use multiple contexts and optimize with memoization to prevent unnecessary re-renders.`,
        codeExamples: [
          {
            id: "react-28-ex1",
            title: "Multiple Contexts",
            description: "Separate concerns",
            code: { javascript: "import { createContext, useContext, useMemo } from 'react';\n\n// Separate contexts for different concerns\nconst AuthContext = createContext(null);\nconst ThemeContext = createContext(null);\nconst CartContext = createContext(null);\n\n// Separate providers\nfunction AuthProvider({ children }) {\n  const [user, setUser] = useState(null);\n  const value = useMemo(() => ({ user, setUser }), [user]);\n  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;\n}\n\nfunction ThemeProvider({ children }) {\n  const [theme, setTheme] = useState('light');\n  const value = useMemo(() => ({ theme, setTheme }), [theme]);\n  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;\n}\n\n// Custom hooks\nexport function useAuth() { return useContext(AuthContext); }\nexport function useTheme() { return useContext(ThemeContext); }\nexport function useCart() { return useContext(CartContext); }" },
            explanation: "Multiple contexts separate concerns."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "Why use multiple contexts?", options: ["Performance", "Separate concerns", "Required by React", "Better UX"], correctAnswer: 1, explanation: "Separate different concerns.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "How to optimize context?", options: ["Use more contexts", "Use useMemo for value", "Use classes", "Don't use context"], correctAnswer: 1, explanation: "Memoize context value.", difficulty: 2 },
        { id: "q3", type: "true-false" as const, question: "Context causes re-render when value changes.", correctAnswer: true, explanation: "All consumers re-render on change.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "Multiple contexts", value: "Separate concerns" },
      { label: "useMemo value", value: "Optimize" }
    ]
  },
  {
    id: "react-29",
    number: 29,
    title: "Error Boundaries",
    titleBn: "এরর বাউন্ডারি",
    subtitle: "Handle component errors",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["react-28"],
    learningObjectives: ["Create error boundary", "Use componentDidCatch", "Handle render errors"],
    sections: [
      {
        id: "react-29-1",
        title: "Error Boundaries",
        whyItMatters: "Prevent full app crashes.",
        content: `Error boundaries are class components that catch JavaScript errors anywhere in their child component tree and display a fallback UI.`,
        codeExamples: [
          {
            id: "react-29-ex1",
            title: "Error Boundary Component",
            description: "Catch render errors",
            code: { javascript: "import { Component } from 'react';\n\nclass ErrorBoundary extends Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false, error: null };\n  }\n\n  static getDerivedStateFromError(error) {\n    return { hasError: true, error };\n  }\n\n  componentDidCatch(error, errorInfo) {\n    console.error('Error caught:', error, errorInfo);\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return (\n        <div>\n          <h2>Something went wrong</h2>\n          <p>{this.state.error?.message}</p>\n          <button onClick={() => this.setState({ hasError: false })}>\n            Try Again\n          </button>\n        </div>\n      );\n    }\n\n    return this.props.children;\n  }\n}\n\n// Usage\nfunction App() {\n  return (\n    <ErrorBoundary>\n      <MyComponent />\n    </ErrorBoundary>\n  );\n}" },
            explanation: "Error boundaries catch render errors."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "Error boundaries can catch?", options: ["All errors", "Render errors only", "Event handlers only", "None"], correctAnswer: 1, explanation: "Only catch render errors.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "Error boundaries must be?", options: ["Function components", "Class components", "Any component", "Hooks"], correctAnswer: 1, explanation: "Must be class components.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What method catches errors?", options: ["catch", "componentDidCatch", "onError", "handleError"], correctAnswer: 1, explanation: "Use componentDidCatch.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "Class component", value: "Must be class" },
      { label: "componentDidCatch", value: "Catch errors" }
    ]
  },
  {
    id: "react-30",
    number: 30,
    title: "Portals",
    titleBn: "পোর্টালস",
    subtitle: "Render outside component tree",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["react-29"],
    learningObjectives: ["Use ReactDOM.createPortal", "Render to different DOM node", "Handle events from portals"],
    sections: [
      {
        id: "react-30-1",
        title: "Portals Basics",
        whyItMatters: "Render outside parent container.",
        content: `Portals let you render children into a different DOM node. Useful for modals, tooltips, and overlays that escape parent overflow/styling.`,
        codeExamples: [
          {
            id: "react-30-ex1",
            title: "Portal Example",
            description: "Render to different root",
            code: { javascript: "import ReactDOM from 'react-dom';\n\nfunction Modal({ children, onClose }) {\n  return ReactDOM.createPortal(\n    <div className=\"modal-overlay\">\n      <div className=\"modal-content\">\n        <button onClick={onClose}>Close</button>\n        {children}\n      </div>\n    </div>,\n    document.getElementById('modal-root') // Different DOM node!\n  );\n}\n\nfunction App() {\n  const [showModal, setShowModal] = useState(false);\n\n  return (\n    <div>\n      <h1>My App</h1>\n      <button onClick={() => setShowModal(true)}>Open Modal</button>\n      \n      {showModal && (\n        <Modal onClose={() => setShowModal(false)}>\n          <p>This renders in a different DOM node!</p>\n        </Modal>\n      )}\n    </div>\n  );\n}\n\n// index.html needs: <div id=\"modal-root\"></div>" },
            explanation: "Portals render outside parent."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does createPortal do?", options: ["Creates component", "Renders to different DOM node", "Creates router", "Creates state"], correctAnswer: 1, explanation: "Renders to different DOM location.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What is portal good for?", options: ["Forms", "Modals and overlays", "Lists", "State"], correctAnswer: 1, explanation: "Perfect for modals/tooltips.", difficulty: 1 },
        { id: "q3", type: "true-false" as const, question: "Events from portal bubble up normally.", correctAnswer: true, explanation: "Events bubble through React tree.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "createPortal", value: "Render outside" },
      { label: "Modals", value: "Common use case" }
    ]
  },
  {
    id: "react-31",
    number: 31,
    title: "Lazy Loading",
    titleBn: "লেজি লোডিং",
    subtitle: "Code splitting",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["react-30"],
    learningObjectives: ["Use React.lazy", "Use Suspense", "Implement code splitting"],
    sections: [
      {
        id: "react-31-1",
        title: "Code Splitting",
        whyItMatters: "Load code on demand.",
        content: `React.lazy lets you render a dynamic import as a regular component. Suspense lets you show fallback while loading.`,
        codeExamples: [
          {
            id: "react-31-ex1",
            title: "Lazy Loading",
            description: "Load components on demand",
            code: { javascript: "import { lazy, Suspense } from 'react';\n\n// Lazy load component\nconst HeavyComponent = lazy(() => import('./HeavyComponent'));\n\nfunction App() {\n  return (\n    <div>\n      <h1>My App</h1>\n      <Suspense fallback={<div>Loading...</div>}>\n        <HeavyComponent />\n      </Suspense>\n    </div>\n  );\n}\n\n// HeavyComponent.js\n// export default function HeavyComponent() { ... }\n\n// Also works with routes\nconst Home = lazy(() => import('./Home'));\nconst About = lazy(() => import('./About'));\n\nfunction Routes() {\n  return (\n    <Suspense fallback={<Loading />}>\n      <Routes>\n        <Route path=\"/\" element={<Home />} />\n        <Route path=\"/about\" element={<About />} />\n      </Routes>\n    </Suspense>\n  );\n}" },
            explanation: "Lazy load heavy components."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does React.lazy do?", options: ["Makes component slow", "Dynamic import as component", "Deletes code", "Caches component"], correctAnswer: 1, explanation: "Dynamic import loads on demand.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What does Suspense do?", options: ["Catches errors", "Shows fallback while loading", "Renders faster", "None"], correctAnswer: 1, explanation: "Shows fallback during load.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "Why code split?", options: ["Smaller initial bundle", "Better performance", "Both A and B", "Security"], correctAnswer: 2, explanation: "Faster initial load.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "React.lazy(fn)", value: "Dynamic import" },
      { label: "Suspense fallback", value: "Loading UI" }
    ]
  },
  {
    id: "react-32",
    number: 32,
    title: "Suspense",
    titleBn: "সাস্পেন্স",
    subtitle: "Handle async loading",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["react-31"],
    learningObjectives: ["Use Suspense with data fetching", "Handle loading states", "Use use hook for data"],
    sections: [
      {
        id: "react-32-1",
        title: "Suspense for Data Fetching",
        whyItMatters: "Modern async handling.",
        content: `Suspense lets you declare that something is loading and show fallback until it's ready. Works with data fetching libraries.`,
        codeExamples: [
          {
            id: "react-32-ex1",
            title: "Suspense Example",
            description: "Handle async loading",
            code: { javascript: "import { Suspense } from 'react';\nimport { useRouteLoaderData } from 'react-router';\n\n// Component using Suspense\nfunction PostList() {\n  const posts = use posts(); // Suspends if not ready!\n  return posts.map(post => <Post key={post.id} post={post} />);\n}\n\nfunction App() {\n  return (\n    <Suspense fallback={<SkeletonLoader />}>\n      <PostList />\n    </Suspense>\n  );\n}\n\nfunction SkeletonLoader() {\n  return (\n    <div className=\"skeleton\">\n      <div className=\"skeleton-header\"></div>\n      <div className=\"skeleton-body\"></div>\n    </div>\n  );\n}\n\n// Multiple Suspense boundaries\nfunction App2() {\n  return (\n    <div>\n      <Suspense fallback={<HeaderSkeleton />}>\n        <Header />\n      </Suspense>\n      <Suspense fallback={<FeedSkeleton />}>\n        <Feed />\n      </Suspense>\n    </div>\n  );\n}" },
            explanation: "Suspense handles async states."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "Suspense shows fallback when?", options: ["Always", "Child suspends", "Error occurs", "Never"], correctAnswer: 1, explanation: "When child throws promise.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "Can have multiple Suspense boundaries?", options: ["No", "Yes", "One only", "Three max"], correctAnswer: 1, explanation: "Multiple boundaries supported.", difficulty: 1 },
        { id: "q3", type: "true-false" as const, question: "Suspense works with data fetching.", correctAnswer: true, explanation: "Libraries integrate with Suspense.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "Suspends", value: "Child throws promise" },
      { label: "Multiple boundaries", value: "Fine-grained loading" }
    ]
  },
  {
    id: "react-33",
    number: 33,
    title: "Higher Order Components",
    titleBn: "এইচওসি",
    subtitle: "Component patterns",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["react-32"],
    learningObjectives: ["Understand HOC pattern", "Create HOCs", "Know when to avoid"],
    sections: [
      {
        id: "react-33-1",
        title: "HOC Pattern",
        whyItMatters: "Reuse component logic.",
        content: `A Higher Order Component is a function that takes a component and returns a new component with additional functionality.`,
        codeExamples: [
          {
            id: "react-33-ex1",
            title: "HOC Example",
            description: "Create reusable wrapper",
            code: { javascript: "function withLogger(WrappedComponent) {\n  return function(props) {\n    console.log('Rendering:', WrappedComponent.name);\n    return <WrappedComponent {...props} />;\n  };\n}\n\nfunction withLoading(WrappedComponent) {\n  return function({ isLoading, ...props }) {\n    if (isLoading) return <div>Loading...</div>;\n    return <WrappedComponent {...props} />;\n  };\n}\n\n// Usage\nconst UserCardWithLogger = withLogger(UserCard);\nconst UserCardWithLoading = withLoading(UserCard);\n\n// Combine HOCs - compose\nfunction compose(...hocs) {\n  return function(Component) {\n    return hocs.reduceRight((acc, hoc) => hoc(acc), Component);\n  };\n}\n\nconst EnhancedUserCard = compose(\n  withLogger,\n  withLoading,\n  withAuth\n)(UserCard);" },
            explanation: "HOCs add functionality to components."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "HOC is a function that?", options: ["Creates components", "Takes component, returns new component", "Renders faster", "Stores state"], correctAnswer: 1, explanation: "Takes component, enhances it.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "Why avoid HOCs?", options: ["Too simple", "Cause wrapper hell", "Performance issues", "All of above"], correctAnswer: 1, explanation: "Multiple HOCs cause wrapper hell.", difficulty: 2 },
        { id: "q3", type: "mcq" as const, question: "Better alternative to HOCs?", options: ["Custom hooks", "Classes", "Less components", "None"], correctAnswer: 0, explanation: "Custom hooks are preferred now.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "Function returning component", value: "HOC pattern" },
      { label: "Custom hooks", value: "Modern alternative" }
    ]
  },
  {
    id: "react-34",
    number: 34,
    title: "Render Props",
    titleBn: "রেন্ডার প্রপস",
    subtitle: "Share code via props",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["react-33"],
    learningObjectives: ["Use render props pattern", "Create render prop components", "Compare with HOCs and hooks"],
    sections: [
      {
        id: "react-34-1",
        title: "Render Props Pattern",
        whyItMatters: "Flexible component logic sharing.",
        content: `A component with a render prop takes a function that returns React element and calls it instead of implementing its own render logic.`,
        codeExamples: [
          {
            id: "react-34-ex1",
            title: "Render Prop Example",
            description: "Flexible logic sharing",
            code: { javascript: "function MouseTracker({ render }) {\n  const [position, setPosition] = useState({ x: 0, y: 0 });\n\n  useEffect(() => {\n    function handleMove(e) {\n      setPosition({ x: e.clientX, y: e.clientY });\n    }\n    window.addEventListener('mousemove', handleMove);\n    return () => window.removeEventListener('mousemove', handleMove);\n  }, []);\n\n  return render(position);\n}\n\n// Usage\nfunction App() {\n  return (\n    <MouseTracker render={({ x, y }) => (\n      <p>Mouse position: {x}, {y}</p>\n    )} />\n  );\n}\n\n// Also works with children\nfunction MouseTracker2({ children }) {\n  const [pos, setPos] = useState({ x: 0, y: 0 });\n  // ... tracking logic\n  return children(pos);\n}\n\n<MouseTracker2>\n  {({ x, y }) => <Cat x={x} y={y} />}\n</MouseTracker2>" },
            explanation: "Pass function to control rendering."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "Render prop is a?", options: ["Component", "Function prop that returns JSX", "State", "Hook"], correctAnswer: 1, explanation: "Function that returns JSX.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "How does component use render prop?", options: ["Calls it", "Ignores it", "Stores it", "Deletes it"], correctAnswer: 0, explanation: "Component calls the function.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "Better than HOCs for?", options: ["Performance", "Less wrapper nesting", "Typescript support", "All of above"], correctAnswer: 1, explanation: "Avoids wrapper hell.", difficulty: 2 }
      ]
    },
    cheatSheet: [
      { label: "Function returning JSX", value: "Render prop" },
      { label: "Control rendering", value: "From parent" }
    ]
  },
  {
    id: "react-35",
    number: 35,
    title: "Compound Components",
    titleBn: "কম্পাউন্ড কম্পোনেন্টস",
    subtitle: "Implicit state sharing",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["react-34"],
    learningObjectives: ["Create compound components", "Use React.Children and cloneElement", "Share implicit state"],
    sections: [
      {
        id: "react-35-1",
        title: "Compound Component Pattern",
        whyItMatters: "Flexible, expressive APIs.",
        content: `Compound components are a pattern where a parent component manages state and child components communicate via implicit props. Like <select> and <option>.`,
        codeExamples: [
          {
            id: "react-35-ex1",
            title: "Compound Components",
            description: "Implicit state sharing",
            code: { javascript: "const TabsContext = createContext();\n\nfunction Tabs({ children, defaultIndex = 0 }) {\n  const [activeIndex, setActiveIndex] = useState(defaultIndex);\n  \n  return (\n    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>\n      {children}\n    </TabsContext.Provider>\n  );\n}\n\nTabs.TabList = function TabList({ children }) {\n  const { activeIndex, setActiveIndex } = useContext(TabsContext);\n  \n  return React.Children.map(children, (child, index) => \n    cloneElement(child, { \n      isActive: index === activeIndex,\n      onClick: () => setActiveIndex(index)\n    })\n  );\n};\n\nTabs.Tab = function Tab({ isActive, onClick, children }) {\n  return (\n    <button \n      className={isActive ? 'active' : ''} \n      onClick={onClick}\n    >\n      {children}\n    </button>\n  );\n};\n\nTabs.Panel = function TabPanel({ children }) {\n  return <div>{children}</div>;\n};\n\n// Usage\nfunction App() {\n  return (\n    <Tabs defaultIndex={1}>\n      <Tabs.TabList>\n        <Tabs.Tab>Tab 1</Tabs.Tab>\n        <Tabs.Tab>Tab 2</Tabs.Tab>\n      </Tabs.TabList>\n      <Tabs.Panel>Content 1</Tabs.Panel>\n      <Tabs.Panel>Content 2</Tabs.Panel>\n    </Tabs>\n  );\n}" },
            explanation: "Share state via context."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "Compound components share state via?", options: ["Props only", "Context or props", "Global state", "None"], correctAnswer: 1, explanation: "Use context for implicit sharing.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "cloneElement is used for?", options: ["Cloning components", "Modifying child props", "Both", "Neither"], correctAnswer: 2, explanation: "Pass extra props to children.", difficulty: 2 },
        { id: "q3", type: "mcq" as const, question: "Like native <select>/<option>?", options: ["Yes", "No", "Maybe", "Similar pattern"], correctAnswer: 3, explanation: "Same implicit state pattern.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "Context sharing", value: "Implicit state" },
      { label: "cloneElement", value: "Add props to children" }
    ]
  },
  {
    id: "react-36",
    number: 36,
    title: "Dynamic Components",
    titleBn: "ডাইনামিক কম্পোনেন্টস",
    subtitle: "Runtime component selection",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["react-35"],
    learningObjectives: ["Render components dynamically", "Use component maps", "Handle component loading"],
    sections: [
      {
        id: "react-36-1",
        title: "Dynamic Rendering",
        whyItMatters: "Build flexible UIs.",
        content: `Render different components based on configuration or user input using a component map or dynamic imports.`,
        codeExamples: [
          {
            id: "react-36-ex1",
            title: "Dynamic Components",
            description: "Render based on config",
            code: { javascript: "import { lazy, Suspense } from 'react';\n\n// Component map\nconst COMPONENTS = {\n  hero: HeroSection,\n  features: FeaturesSection,\n  pricing: PricingSection,\n  testimonials: TestimonialsSection\n};\n\n// Render based on type\nfunction DynamicSection({ type, ...props }) {\n  const Component = COMPONENTS[type];\n  if (!Component) {\n    console.warn(`Unknown component type: ${type}`);\n    return null;\n  }\n  return <Component {...props} />;\n}\n\n// Usage with config\nfunction PageBuilder({ sections }) {\n  return (\n    <div>\n      {sections.map((section, i) => (\n        <DynamicSection key={i} {...section} />\n      ))}\n    </div>\n  );\n}\n\nconst config = [\n  { type: 'hero', title: 'Welcome' },\n  { type: 'features', items: [...] },\n  { type: 'pricing', plans: [...] }\n];\n\n// Lazy loading by type\nconst LazyComponents = {\n  chart: lazy(() => import('./Chart'))\n};" },
            explanation: "Render components dynamically."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "Dynamic components use?", options: ["Object map", "switch statement", "if/else", "All work"], correctAnswer: 3, explanation: "All are valid approaches.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "Why use component maps?", options: ["Performance", "Clean code, easy to extend", "Typescript only", "Required"], correctAnswer: 1, explanation: "Clean and extensible.", difficulty: 1 },
        { id: "q3", type: "true-false" as const, question: "Dynamic + lazy loading works together.", correctAnswer: true, explanation: "Can lazy load by type.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "Component map", value: "Object lookup" },
      { label: "Clean + extensible", value: "Map benefit" }
    ]
  },
  {
    id: "react-37",
    number: 37,
    partLabel: "Part 4: React Ecosystem",
    title: "React Router Basics",
    titleBn: "রিঅ্যাক্ট রাউটার",
    subtitle: "Navigation in React",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["react-36"],
    learningObjectives: ["Set up React Router", "Use Routes and Route", "Navigate with Link and useNavigate"],
    sections: [
      {
        id: "react-37-1",
        title: "Routing Setup",
        whyItMatters: "Single Page Application navigation.",
        content: `React Router enables navigation in Single Page Applications without page refreshes. Use BrowserRouter, Routes, and Route.`,
        codeExamples: [
          {
            id: "react-37-ex1",
            title: "Basic Routing",
            description: "Set up routes",
            code: { javascript: "import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';\nimport Home from './Home';\nimport About from './About';\nimport User from './User';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <nav>\n        <Link to=\"/\">Home</Link>\n        <Link to=\"/about\">About</Link>\n        <Link to=\"/user/123\">User</Link>\n      </nav>\n      \n      <Routes>\n        <Route path=\"/\" element={<Home />} />\n        <Route path=\"/about\" element={<About />} />\n        <Route path=\"/user/:id\" element={<User />} />\n        <Route path=\"*\" element={<NotFound />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}" },
            explanation: "Set up client-side routing."
          }
        ],
        callouts: [
          {
            type: "info",
            title: "Note",
            content: "This chapter covers React Router v6 (latest). If you're coming from v5, the API has changed significantly."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What component wraps the app for routing?", options: ["Router", "BrowserRouter", "Routes", "Route"], correctAnswer: 1, explanation: "BrowserRouter wraps the app.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "How do you navigate without refresh?", options: ["<a>", "<Link>", "<Nav>", "<Navigate>"], correctAnswer: 1, explanation: "Link does client-side navigation.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What does :id mean in path?", options: ["Optional param", "Dynamic param", "Wildcard", "Query"], correctAnswer: 1, explanation: "Colon marks dynamic segment.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "BrowserRouter", value: "Wrap app" },
      { label: "Routes", value: "Container for routes" },
      { label: "Route", value: "Define path and component" },
      { label: "Link", value: "Navigate without refresh" }
    ]
  },
  {
    id: "react-38",
    number: 38,
    title: "Dynamic Routing",
    titleBn: "ডাইনামিক রাউটিং",
    subtitle: "Route parameters",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["react-37"],
    learningObjectives: ["Use URL parameters", "Access params with useParams", "Programmatic navigation"],
    sections: [
      {
        id: "react-38-1",
        title: "Route Parameters",
        whyItMatters: "Access URL data in components.",
        content: `Use dynamic segments in paths (e.g., /user/:id) and access them with useParams hook.`,
        codeExamples: [
          {
            id: "react-38-ex1",
            title: "Dynamic Routes",
            description: "Access URL parameters",
            code: { javascript: "import { useParams, useNavigate } from 'react-router-dom';\n\nfunction UserProfile() {\n  const { userId } = useParams();\n  const navigate = useNavigate();\n\n  return (\n    <div>\n      <h1>User {userId}</h1>\n      <button onClick={() => navigate('/')}>Back Home</button>\n      <button onClick={() => navigate(-1)}>Go Back</button>\n    </div>\n  );\n}\n\n// Routes\n<Route path=\"/user/:userId\" element={<UserProfile />} />\n\n// Multiple params\n<Route path=\"/posts/:postId/comments/:commentId\" element={<Comment />} />\n\nfunction Comment() {\n  const { postId, commentId } = useParams();\n  return <div>Post {postId}, Comment {commentId}</div>;\n}" },
            explanation: "Dynamic routing captures URL data."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What hook gets URL params?", options: ["useLocation", "useParams", "useNavigate", "useRoute"], correctAnswer: 1, explanation: "useParams gets dynamic segments.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "How to programmatically navigate?", options: ["history.push", "useNavigate", "window.location", "router.push"], correctAnswer: 1, explanation: "useNavigate for programmatic nav.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "navigate(-1) does what?", options: ["Go to home", "Go back one page", "Refresh", "Nothing"], correctAnswer: 1, explanation: "Negative number goes back.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "useParams", value: "Get URL params" },
      { label: "useNavigate", value: "Programmatic nav" },
      { label: ":param", value: "Dynamic segment" }
    ]
  },
  {
    id: "react-39",
    number: 39,
    title: "Fetch API in React",
    titleBn: "ফেচ এপিআই",
    subtitle: "Data fetching",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["react-38"],
    learningObjectives: ["Fetch data with useEffect", "Handle loading and error states", "Implement proper cleanup"],
    sections: [
      {
        id: "react-39-1",
        title: "Data Fetching Pattern",
        whyItMatters: "Most apps need external data.",
        content: `Use useEffect to fetch data on mount, handle loading/error states, and cleanup with AbortController to prevent memory leaks.`,
        codeExamples: [
          {
            id: "react-39-ex1",
            title: "Fetch Data",
            description: "Complete fetching pattern",
            code: { javascript: "import { useState, useEffect } from 'react';\n\nfunction UserList() {\n  const [users, setUsers] = useState([]);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    const controller = new AbortController();\n    \n    async function fetchUsers() {\n      try {\n        setLoading(true);\n        const res = await fetch('https://api.example.com/users', {\n          signal: controller.signal\n        });\n        if (!res.ok) throw new Error('Failed to fetch');\n        const data = await res.json();\n        setUsers(data);\n      } catch (err) {\n        if (err.name !== 'AbortError') {\n          setError(err.message);\n        }\n      } finally {\n        setLoading(false);\n      }\n    }\n    \n    fetchUsers();\n    return () => controller.abort(); // Cleanup\n  }, []);\n\n  if (loading) return <p>Loading...</p>;\n  if (error) return <p>Error: {error}</p>;\n  \n  return (\n    <ul>\n      {users.map(user => <li key={user.id}>{user.name}</li>)}\n    </ul>\n  );\n}" },
            explanation: "Complete fetching with cleanup."
          }
        ],
        callouts: [
          {
            type: "dom-bridge",
            title: "JavaScript Connection",
            content: "This uses Fetch API which you learned in JavaScript. Check our JS course for more on async/await and promises."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "When does useEffect fetch run?", options: ["Before render", "After render", "During render", "Never"], correctAnswer: 1, explanation: "Runs after render by default.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "Why AbortController?", options: ["Performance", "Cancel request on unmount", "Error handling", "TypeScript"], correctAnswer: 1, explanation: "Prevents state update on unmount.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What states to track?", options: ["Only data", "Loading and error", "Only error", "None required"], correctAnswer: 1, explanation: "Track loading and error states.", difficulty: 1 },
        { id: "q4", type: "true-false" as const, question: "fetch returns promise.", correctAnswer: true, explanation: "fetch returns a promise.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "fetch(url)", value: "Make request" },
      { label: "AbortController", value: "Cancel request" },
      { label: "try/catch", value: "Handle errors" },
      { label: "loading/error/data", value: "Three states" }
    ]
  },
  {
    id: "react-40",
    number: 40,
    title: "Redux Toolkit Basics",
    titleBn: "রিডাক্স টুলকিট",
    subtitle: "State management",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 40,
    xpReward: 65,
    prerequisites: ["react-39"],
    learningObjectives: ["Set up Redux store", "Create slices", "Use useSelector and useDispatch"],
    sections: [
      {
        id: "react-40-1",
        title: "Redux Setup",
        whyItMatters: "Predictable state management.",
        content: `Redux Toolkit is the modern way to use Redux. It simplifies store setup, create slices, and reduces boilerplate.`,
        codeExamples: [
          {
            id: "react-40-ex1",
            title: "Redux Toolkit",
            description: "Set up Redux",
            code: { javascript: "import { configureStore, createSlice } from '@reduxjs/toolkit';\n\n// Create slice\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState: { value: 0 },\n  reducers: {\n    increment: (state) => { state.value += 1 },\n    decrement: (state) => { state.value -= 1 },\n    incrementBy: (state, action) => { state.value += action.payload }\n  }\n});\n\nexport const { increment, decrement, incrementBy } = counterSlice.actions;\n\n// Create store\nconst store = configureStore({\n  reducer: {\n    counter: counterSlice.reducer\n  }\n});\n\n// Use in component\nimport { useSelector, useDispatch } from 'react-redux';\n\nfunction Counter() {\n  const count = useSelector(state => state.counter.value);\n  const dispatch = useDispatch();\n  \n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => dispatch(increment())}>+</button>\n      <button onClick={() => dispatch(decrement())}>-</button>\n    </div>\n  );\n}" },
            explanation: "Redux Toolkit simplifies state."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does createSlice return?", options: ["Store", "Reducer and actions", "State", "Component"], correctAnswer: 1, explanation: "Returns reducer and actions.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "How to read state?", options: ["useState", "useSelector", "useDispatch", "useStore"], correctAnswer: 1, explanation: "useSelector reads state.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "How to update state?", options: ["useState", "useSelector", "useDispatch", "useStore"], correctAnswer: 2, explanation: "useDispatch dispatches actions.", difficulty: 1 },
        { id: "q4", type: "true-false" as const, question: "Redux Toolkit is the recommended way.", correctAnswer: true, explanation: "RTK is the modern standard.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "createSlice", value: "Create reducer + actions" },
      { label: "configureStore", value: "Create store" },
      { label: "useSelector", value: "Read state" },
      { label: "useDispatch", value: "Update state" }
    ]
  },
  {
    id: "react-41",
    number: 41,
    title: "React Hook Form",
    titleBn: "রিঅ্যাক্ট হুক ফর্ম",
    subtitle: "Form handling",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["react-40"],
    learningObjectives: ["Use useForm hook", "Handle validation", "Optimize re-renders"],
    sections: [
      {
        id: "react-41-1",
        title: "React Hook Form",
        whyItMatters: "Better form handling than controlled components.",
        content: `React Hook Form is a performant, flexible form library that integrates with uncontrolled components. It has smaller bundle size and better performance.`,
        codeExamples: [
          {
            id: "react-41-ex1",
            title: "React Hook Form",
            description: "Form with validation",
            code: { javascript: "import { useForm } from 'react-hook-form';\n\nfunction LoginForm() {\n  const { register, handleSubmit, formState: { errors } } = useForm();\n\n  const onSubmit = (data) => {\n    console.log('Form data:', data);\n  };\n\n  return (\n    <form onSubmit={handleSubmit(onSubmit)}>\n      <div>\n        <label>Email</label>\n        <input\n          {...register('email', { \n            required: 'Email is required',\n            pattern: {\n              value: /^\\S+@\\S+$/i,\n              message: 'Invalid email'\n            }\n          })}\n        />\n        {errors.email && <span>{errors.email.message}</span>}\n      </div>\n      \n      <div>\n        <label>Password</label>\n        <input\n          {...register('password', { \n            required: 'Password required',\n            minLength: { value: 6, message: 'Min 6 chars' }\n          })}\n        />\n        {errors.password && <span>{errors.password.message}</span>}\n      </div>\n      \n      <button type=\"submit\">Login</button>\n    </form>\n  );\n}" },
            explanation: "React Hook Form handles forms well."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does useForm return?", options: ["State only", "register, handleSubmit, errors", "Form element", "Nothing"], correctAnswer: 1, explanation: "Returns register and handlers.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What does handleSubmit do?", options: ["Validates form", "Calls onSubmit with data", "Resets form", "Submits to server"], correctAnswer: 1, explanation: "Validates then calls onSubmit.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "Why better than controlled?", options: ["Less code", "Less re-renders", "Better validation", "All of above"], correctAnswer: 3, explanation: "Better performance overall.", difficulty: 2 }
      ]
    },
    cheatSheet: [
      { label: "register", value: "Connect input" },
      { label: "handleSubmit", value: "Submit handler" },
      { label: "errors", value: "Validation errors" }
    ]
  },
  {
    id: "react-42",
    number: 42,
    title: "Environment Variables",
    titleBn: "এনভায়রনমেন্ট ভেরিয়েবলস",
    subtitle: "Configuration",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["react-41"],
    learningObjectives: ["Use environment variables", "Understand VITE_/REACT_APP_ prefix", "Keep secrets safe"],
    sections: [
      {
        id: "react-42-1",
        title: "Using Environment Variables",
        whyItMatters: "Configure app for different environments.",
        content: `Environment variables let you configure your app without changing code. Use VITE_ prefix for Vite (or REACT_APP_ for CRA).`,
        codeExamples: [
          {
            id: "react-42-ex1",
            title: "Environment Variables",
            description: "Configure app",
            code: { javascript: "// .env file (in project root)\nVITE_API_URL=https://api.example.com\nVITE_APP_TITLE=My App\n\n// In code\nconsole.log(import.meta.env.VITE_API_URL);\n\n// TypeScript - env.d.ts\ninterface ImportMetaEnv {\n  readonly VITE_API_URL: string\n  readonly VITE_APP_TITLE: string\n}\n\ninterface ImportMeta {\n  readonly env: ImportMetaEnv\n}\n\n// Usage\nfunction ApiClient() {\n  const apiUrl = import.meta.env.VITE_API_URL;\n  return fetch(`${apiUrl}/users`);\n}\n\n// DON'T commit .env to git!\n// Add .env to .gitignore\n// Use .env.example for documentation" },
            explanation: "Use env vars for configuration."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What prefix for Vite env vars?", options: ["REACT_APP_", "VITE_", "NEXT_", "NODE_"], correctAnswer: 1, explanation: "Vite uses VITE_ prefix.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "How to access in code?", options: ["process.env", "import.meta.env", "window.env", "config"], correctAnswer: 1, explanation: "Vite uses import.meta.env.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What to NOT commit?", options: [".gitignore", ".env", ".env.example", ".js files"], correctAnswer: 1, explanation: "Don't commit actual .env files.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "VITE_ prefix", value: "Vite environment" },
      { label: "import.meta.env", value: "Access in code" },
      { label: "Don't commit .env", value: "Security" }
    ]
  },
  {
    id: "react-43",
    number: 43,
    title: "Styling in React",
    titleBn: "স্টাইলিং",
    subtitle: "CSS and CSS-in-JS",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["react-42"],
    learningObjectives: ["Use CSS modules", "Use styled-components or Tailwind", "Understand CSS-in-JS patterns"],
    sections: [
      {
        id: "react-43-1",
        title: "CSS Approaches",
        whyItMatters: "Style your components properly.",
        content: `There are many ways to style React: CSS Modules, styled-components, Tailwind CSS, or inline styles. Choose based on team preference and project needs.`,
        codeExamples: [
          {
            id: "react-43-ex1",
            title: "Styling Options",
            description: "Different styling approaches",
            code: { javascript: "// 1. CSS Modules (component.module.css)\nimport styles from './Button.module.css';\n<button className={styles.primary}>Click</button>\n\n// 2. styled-components\nimport styled from 'styled-components';\nconst Button = styled.button`\n  background: blue;\n  color: white;\n  padding: 10px 20px;\n`;\n<Button>Click</Button>\n\n// 3. Tailwind CSS\n<button className=\"bg-blue-500 text-white px-4 py-2 rounded\">\n  Click\n</button>\n\n// 4. CSS-in-JS object\nconst style = { background: 'blue', color: 'white' };\n<button style={style}>Click</button>" },
            explanation: "Multiple styling options available."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "CSS Modules use what file?", options: ["component.css", "component.module.css", "styles.css", "module.css"], correctAnswer: 1, explanation: "Use .module.css extension.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "styled-components is?", options: ["CSS framework", "CSS-in-JS library", "Preprocessor", "PostCSS plugin"], correctAnswer: 1, explanation: "It's CSS-in-JS.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "Tailwind is?", options: ["CSS-in-JS", "Utility-first CSS", "Component library", "Preprocessor"], correctAnswer: 1, explanation: "Tailwind is utility-first CSS.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "CSS Modules", value: "Scoped CSS" },
      { label: "styled-components", value: "CSS-in-JS" },
      { label: "Tailwind", value: "Utility classes" }
    ]
  },
  {
    id: "react-44",
    number: 44,
    title: "Testing React Apps",
    titleBn: "টেস্টিং",
    subtitle: "Unit and integration tests",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 40,
    xpReward: 65,
    prerequisites: ["react-43"],
    learningObjectives: ["Use React Testing Library", "Write component tests", "Test user interactions"],
    sections: [
      {
        id: "react-44-1",
        title: "Testing Basics",
        whyItMatters: "Ensure your code works.",
        content: `React Testing Library tests components as users would, focusing on what renders and how users interact.`,
        codeExamples: [
          {
            id: "react-44-ex1",
            title: "Testing Library",
            description: "Test components",
            code: { javascript: "import { render, screen, fireEvent } from '@testing-library/react';\nimport '@testing-library/jest-dom';\nimport Counter from './Counter';\n\ntest('renders counter with initial value', () => {\n  render(<Counter />);\n  expect(screen.getByText('Count: 0')).toBeInTheDocument();\n});\n\ntest('increments counter on click', () => {\n  render(<Counter />);\n  \n  const button = screen.getByText('Increment');\n  fireEvent.click(button);\n  \n  expect(screen.getByText('Count: 1')).toBeInTheDocument();\n});\n\n// Test form\ntest('validates email input', () => {\n  render(<LoginForm />);\n  \n  fireEvent.change(screen.getByLabelText(/email/i), {\n    target: { value: 'invalid' }\n  });\n  fireEvent.click(screen.getByRole('button', { name: /submit/i }));\n  \n  expect(screen.getByText(/invalid email/i)).toBeInTheDocument();\n});" },
            explanation: "Test as users interact."
          }
        ],
        callouts: [
          {
            type: "tip",
            title: "Testing Best Practice",
            content: "Test what users see and do, not implementation details. Avoid testing internal state or methods."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does render() do?", options: ["Renders to DOM", "Creates snapshot", "Runs tests", "Mocks components"], correctAnswer: 0, explanation: "render puts component in DOM.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What does fireEvent do?", options: ["Mocks events", "Simulates user interaction", "Listens for events", "Catches errors"], correctAnswer: 1, explanation: "Simulates user interactions.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What should you test?", options: ["Internal state", "User interactions", "Implementation", "Methods"], correctAnswer: 1, explanation: "Test user-facing behavior.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "render()", value: "Mount component" },
      { label: "screen", value: "Query elements" },
      { label: "fireEvent", value: "Simulate interaction" },
      { label: "expect()", value: "Make assertions" }
    ]
  },
  {
    id: "react-45",
    number: 45,
    title: "Production Deployment",
    titleBn: "প্রোডাকশন ডিপ্লয়মেন্ট",
    subtitle: "Deploy your app",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["react-44"],
    learningObjectives: ["Build for production", "Deploy to Vercel/Netlify", "Optimize bundle"],
    sections: [
      {
        id: "react-45-1",
        title: "Building and Deploying",
        whyItMatters: "Get your app to users.",
        content: `Build your React app for production and deploy to platforms like Vercel or Netlify. Production builds are optimized for performance.`,
        codeExamples: [
          {
            id: "react-45-ex1",
            title: "Production Build",
            description: "Build and deploy",
            code: { javascript: "// 1. Build for production\nnpm run build\n\n// This creates optimized files in dist/\n// - Minified and bundled\n// - Compressed (gzip/brotli)\n// - Content hashed filenames\n\n// 2. Deploy to Vercel (easiest)\n// - Connect git repo\n// - Auto-detects Vite/React\n// - Deploys on push\n\n// 3. Deploy to Netlify\n// - Drag and drop dist folder\n// - Or connect git\n\n// 4. Custom server (Node.js)\nconst express = require('express');\nconst path = require('path');\nconst app = express();\napp.use(express.static(path.join(__dirname, 'dist')));\napp.get('*', (req, res) => {\n  res.sendFile(path.join(__dirname, 'dist', 'index.html'));\n});\napp.listen(3000);" },
            explanation: "Build and deploy to production."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does npm run build do?", options: ["Runs dev server", "Creates optimized production files", "Runs tests", "Deploys app"], correctAnswer: 1, explanation: "Builds optimized production code.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "Where does build output go?", options: ["src/", "public/", "dist/", "build/"], correctAnswer: 2, explanation: "Vite outputs to dist/ folder.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "Best deployment for React?", options: ["FTP", "Vercel/Netlify", "AWS S3 only", "Email"], correctAnswer: 1, explanation: "Vercel/Netlify are optimized.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "npm run build", value: "Create production build" },
      { label: "dist/", value: "Build output folder" },
      { label: "Vercel/Netlify", value: "Easy deployment" }
    ]
  },
  {
    id: "react-46",
    number: 46,
    partLabel: "Part 5: Advanced React",
    title: "React Performance Optimization",
    titleBn: "পারফরম্যান্স অপ্টিমাইজেশন",
    subtitle: "Make React fast",
    difficulty: "Advanced" as const,
    estimatedMinutes: 40,
    xpReward: 65,
    prerequisites: ["react-45"],
    learningObjectives: ["Use React.memo", "Use useMemo and useCallback", "Profile with DevTools"],
    sections: [
      {
        id: "react-46-1",
        title: "Memoization",
        whyItMatters: "Prevent unnecessary re-renders.",
        content: `React.memo, useMemo, and useCallback help prevent unnecessary re-renders and expensive recalculations.`,
        codeExamples: [
          {
            id: "react-46-ex1",
            title: "Performance Tools",
            description: "Optimize components",
            code: { javascript: "import { memo, useMemo, useCallback } from 'react';\n\n// React.memo - skip re-render if props same\nconst ExpensiveChild = memo(function ExpensiveChild({ data, onClick }) {\n  console.log('Rendering child');\n  return <div onClick={onClick}>{data.label}</div>;\n});\n\n// useMemo - memoize computed values\nfunction List({ items, filter }) {\n  const filtered = useMemo(() => \n    items.filter(i => i.name.includes(filter)),\n    [items, filter]\n  );\n  return filtered.map(i => <div key={i.id}>{i.name}</div>);\n}\n\n// useCallback - memoize callbacks\nfunction Parent() {\n  const [count, setCount] = useState(0);\n  \n  const handleClick = useCallback(() => {\n    console.log('Clicked');\n  }, []); // Only recreated when deps change\n  \n  return (\n    <div>\n      <button onClick={() => setCount(c => c + 1)}>{count}</button>\n      <ExpensiveChild onClick={handleClick} />\n    </div>\n  );\n}" },
            explanation: "Memoization prevents waste."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "React.memo does what?", options: ["Caches component", "Skips re-render if props same", "Memoizes state", "All of above"], correctAnswer: 1, explanation: "memo skips unnecessary renders.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "When does useMemo recalculate?", options: ["Every render", "When deps change", "Never", "On mount only"], correctAnswer: 1, explanation: "Recalculates on dep change.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "What causes re-render?", options: ["Parent renders", "Props change", "State change", "All of above"], correctAnswer: 3, explanation: "Multiple triggers for re-render.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "memo", value: "Skip prop-same renders" },
      { label: "useMemo", value: "Memoize values" },
      { label: "useCallback", value: "Memoize functions" }
    ]
  },
  {
    id: "react-47",
    number: 47,
    title: "Virtual DOM Deep Dive",
    titleBn: "ভারচুয়াল ডিওএম",
    subtitle: "How React works internally",
    difficulty: "Advanced" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["react-46"],
    learningObjectives: ["Understand reconciliation", "Know fiber architecture", "Optimize using keys"],
    sections: [
      {
        id: "react-47-1",
        title: "How React Updates",
        whyItMatters: "Understand why React is fast.",
        content: `React's reconciliation algorithm compares new virtual DOM with previous one and calculates minimum changes. React Fiber enables async rendering and prioritization.`,
        codeExamples: [
          {
            id: "react-47-ex1",
            title: "Reconciliation",
            description: "How React updates DOM",
            code: { javascript: "// How React updates work:\n\n// 1. State changes\nsetCount(5);\n\n// 2. React creates new virtual DOM\n// { type: 'div', props: { children: 5 } }\n\n// 3. Compare with previous (diffing)\n// - Same type? Update attributes\n// - Different? Replace\n// - Added? Mount\n// - Removed? Unmount\n\n// 4. Calculate minimum operations\n// - Update text content: 0 -> 5\n\n// 5. Apply to real DOM\n// document.querySelector('div').textContent = '5'\n\n// Key insight: React batches updates!\n// Multiple setState calls = one render\n// This is why React is fast\n\n// Fiber enables:\n// - Pause/resume work\n// - Assign priority\n// - Reuse completed work" },
            explanation: "React's reconciliation is efficient."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What is reconciliation?", options: ["Updating state", "Comparing virtual DOMs", "Rendering components", "Creating elements"], correctAnswer: 1, explanation: "Comparing old vs new virtual DOM.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What does diffing algorithm do?", options: ["Finds differences", "Calculates minimum changes", "Both", "Neither"], correctAnswer: 2, explanation: "Finds and calculates changes.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "Why use keys?", options: ["Performance", "Help React identify elements", "Styling", "Required by React"], correctAnswer: 1, explanation: "Keys help diff algorithm.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "Reconciliation", value: "Compare virtual DOMs" },
      { label: "Diffing", value: "Calculate changes" },
      { label: "Keys", value: "Element identity" }
    ]
  },
  {
    id: "react-48",
    number: 48,
    title: "Accessibility in React",
    titleBn: "অ্যাক্সেসিবিলিটি",
    subtitle: "Build inclusive apps",
    difficulty: "Advanced" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["react-47"],
    learningObjectives: ["Use semantic HTML", "Add ARIA labels", "Manage focus correctly"],
    sections: [
      {
        id: "react-48-1",
        title: "Building Accessible UIs",
        whyItMatters: "Make apps usable by everyone.",
        content: `Accessibility (a11y) ensures your app works for users with disabilities. Use semantic HTML, proper ARIA attributes, and manage focus.`,
        codeExamples: [
          {
            id: "react-48-ex1",
            title: "Accessibility",
            description: "Build accessible components",
            code: { javascript: "import { useRef, useEffect } from 'react';\n\n// 1. Semantic HTML\nfunction Nav() {\n  return (\n    <nav>\n      <ul>\n        <li><a href=\"/\">Home</a></li>\n        <li><a href=\"/about\">About</a></li>\n      </ul>\n    </nav>\n  );\n}\n\n// 2. ARIA labels\nfunction Modal({ isOpen, onClose, title, children }) {\n  const closeButtonRef = useRef(null);\n  \n  useEffect(() => {\n    if (isOpen) closeButtonRef.current?.focus();\n  }, [isOpen]);\n  \n  if (!isOpen) return null;\n  \n  return (\n    <div role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"modal-title\">\n      <h2 id=\"modal-title\">{title}</h2>\n      <button ref={closeButtonRef} onClick={onClose}>Close</button>\n      {children}\n    </div>\n  );\n}\n\n// 3. Form accessibility\nfunction AccessibleForm() {\n  return (\n    <form>\n      <label htmlFor=\"email\">Email</label>\n      <input \n        id=\"email\" \n        type=\"email\" \n        aria-describedby=\"email-error\"\n      />\n      <span id=\"email-error\" role=\"alert\">Invalid email</span>\n    </form>\n  );\n}" },
            explanation: "Build for all users."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does aria-label do?", options: ["CSS", "Screen reader label", "Title", "Placeholder"], correctAnswer: 1, explanation: "Provides accessible label.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "Why use semantic HTML?", options: ["SEO", "Accessibility and SEO", "Performance", "Styling"], correctAnswer: 1, explanation: "Semantics help a11y and SEO.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "htmlFor connects what?", options: ["CSS to element", "Label to input", "Form to input", "All"], correctAnswer: 1, explanation: "Labels to inputs.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "Semantic HTML", value: "nav, main, article" },
      { label: "aria-label", value: "Accessible label" },
      { label: "htmlFor", value: "Label connects to input" }
    ]
  },
  {
    id: "react-49",
    number: 49,
    title: "TypeScript with React",
    titleBn: "টাইপস্ক্রিপ্ট",
    subtitle: "Type-safe React",
    difficulty: "Advanced" as const,
    estimatedMinutes: 40,
    xpReward: 65,
    prerequisites: ["react-48"],
    learningObjectives: ["Type props and state", "Use generic components", "Add type safety"],
    sections: [
      {
        id: "react-49-1",
        title: "TypeScript for React",
        whyItMatters: "Catch errors early.",
        content: `TypeScript adds type safety to React. Type your props, state, and events for better developer experience and fewer bugs.`,
        codeExamples: [
          {
            id: "react-49-ex1",
            title: "TypeScript React",
            description: "Typing React code",
            code: { javascript: "import { useState } from 'react';\n\n// Type props\ninterface UserCardProps {\n  name: string;\n  email: string;\n  age?: number; // Optional\n  onEdit: (user: User) => void;\n}\n\nfunction UserCard({ name, email, age, onEdit }: UserCardProps) {\n  return (\n    <div>\n      <h2>{name}</h2>\n      <p>{email}</p>\n      {age && <p>Age: {age}</p>}\n      <button onClick={() => onEdit({ name, email, age })}>Edit</button>\n    </div>\n  );\n}\n\n// Type state with generics\ninterface CounterState {\n  count: number;\n  lastUpdated: Date;\n}\n\nfunction Counter() {\n  const [state, setState] = useState<CounterState>({\n    count: 0,\n    lastUpdated: new Date()\n  });\n  \n  const increment = () => setState(prev => ({\n    count: prev.count + 1,\n    lastUpdated: new Date()\n  }));\n  \n  return <button onClick={increment}>{state.count}</button>;\n}\n\n// Event types\nfunction InputField() {\n  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    console.log(e.target.value);\n  };\n  \n  return <input onChange={handleChange} />;\n}" },
            explanation: "TypeScript improves React dev."
          }
        ],
        callouts: [
          {
            type: "info",
            title: "Note",
            content: "This track assumes you know TypeScript. Check our TypeScript course if you need a refresher on types, interfaces, and generics."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "How to type props?", options: ["propTypes", "interface/type", "class", "any"], correctAnswer: 1, explanation: "Use interface or type.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What is React.ChangeEvent?", options: ["Form event", "Input change event", "Both", "None"], correctAnswer: 2, explanation: "Typing input events.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "Use with useState?", options: ["useState<T>(initial)", "useState<Type>(initial)", "Both work", "Neither"], correctAnswer: 2, explanation: "Both syntaxes work.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "interface Props", value: "Type props" },
      { label: "useState<T>", value: "Type state" },
      { label: "React.EventType", value: "Type events" }
    ]
  },
  {
    id: "react-50",
    number: 50,
    title: "Next.js Basics",
    titleBn: "নেক্সট.জেএস",
    subtitle: "React framework",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 40,
    xpReward: 65,
    prerequisites: ["react-49"],
    learningObjectives: ["Understand Next.js", "Use App Router", "Create pages and layouts"],
    sections: [
      {
        id: "react-50-1",
        title: "Next.js Introduction",
        whyItMatters: "Production-grade React requires more.",
        content: `Next.js adds SSR, routing, and optimization to React. It's the most popular React framework for production apps.`,
        codeExamples: [
          {
            id: "react-50-ex1",
            title: "Next.js Setup",
            description: "Create Next.js app",
            code: { javascript: "// Create Next.js app\nnpx create-next-app@latest my-app\n\n// App Router structure\n// app/\n//   layout.tsx    # Root layout\n//   page.tsx      # Home page\n//   about/page.tsx # /about\n//   globals.css   # Global styles\n\n// app/layout.tsx - Root layout\nimport './globals.css'\n\nexport default function RootLayout({ children }) {\n  return (\n    <html>\n      <body>\n        <nav>Navigation</nav>\n        {children}\n        <footer>Footer</footer>\n      </body>\n    </html>\n  );\n}\n\n// app/page.tsx - Home page\nexport default function HomePage() {\n  return <h1>Welcome to Next.js!</h1>;\n}\n\n// Server Components (default in App Router)\nasync function getData() {\n  const res = await fetch('https://api.example.com/data');\n  return res.json();\n}\n\nexport default async function Page() {\n  const data = await getData();\n  return <div>{data.title}</div>;\n}" },
            explanation: "Next.js is React + features."
          }
        ],
        callouts: [
          {
            type: "info",
            title: "Next.js Note",
            content: "We've covered React fundamentals here. Our full Next.js course goes deeper into SSR, data fetching, and optimization."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "What does Next.js add to React?", options: ["CSS", "SSR and routing", "Database", "All of above"], correctAnswer: 1, explanation: "SSR, routing, optimization.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "What is App Router?", options: ["New routing system", "Database", "CSS solution", "State management"], correctAnswer: 0, explanation: "Next.js 13+ routing system.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "Components in App Router are?", options: ["Client by default", "Server by default", "Always client", "None"], correctAnswer: 1, explanation: "Server Components are default.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "npx create-next-app", value: "Create Next.js app" },
      { label: "app/page.tsx", value: "Route component" },
      { label: "Server Components", value: "Default in App Router" }
    ]
  },
  {
    id: "react-51",
    number: 51,
    title: "State Management Comparison",
    titleBn: "স্টেট ম্যানেজমেন্ট",
    subtitle: "Choose the right tool",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["react-50"],
    learningObjectives: ["Compare state options", "Choose right solution", "Know when to scale"],
    sections: [
      {
        id: "react-51-1",
        title: "State Management Options",
        whyItMatters: "Pick the right tool.",
        content: `React has many state options: useState for local, useContext for global, Redux/Zustand for complex, and React Query for server state. Choose based on complexity.`,
        codeExamples: [
          {
            id: "react-51-ex1",
            title: "State Options",
            description: "Choose wisely",
            code: { javascript: "// Local state - useState\n// Best for: Component-specific state\nfunction Counter() {\n  const [count, setCount] = useState(0);\n}\n\n// Shared state - useContext\n// Best for: Theme, auth, simple global\nfunction ThemeProvider({ children }) {\n  const [theme, setTheme] = useState('dark');\n  return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>;\n}\n\n// Complex state - Zustand\n// Best for: Moderate complexity, simpler than Redux\nimport { create } from 'zustand';\nconst useStore = create(set => ({\n  user: null,\n  setUser: (user) => set({ user })\n}));\n\n// Server state - React Query\n// Best for: API data, caching, sync\nimport { useQuery } from '@tanstack/react-query';\nfunction UserList() {\n  const { data, isLoading } = useQuery({ queryKey: ['users'], queryFn: fetchUsers });\n}" },
            explanation: "Choose based on state type."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "When use useState?", options: ["Global", "Component local only", "Server data", "Never"], correctAnswer: 1, explanation: "Local component state.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "When use React Query?", options: ["Local state", "API data/caching", "Theme state", "Form state"], correctAnswer: 1, explanation: "For server state.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "Zustand is?", options: ["Context replacement", "Lightweight state lib", "Both", "Neither"], correctAnswer: 2, explanation: "Lightweight Redux alternative.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "useState", value: "Local state" },
      { label: "useContext", value: "Global simple state" },
      { label: "Zustand", value: "Global complex state" },
      { label: "React Query", value: "Server state" }
    ]
  },
  {
    id: "react-52",
    number: 52,
    title: "React Patterns Summary",
    titleBn: "প্যাটার্ন সামারি",
    subtitle: "Key takeaways",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["react-51"],
    learningObjectives: ["Review key patterns", "Know best practices", "Ready for projects"],
    sections: [
      {
        id: "react-52-1",
        title: "Essential Patterns",
        whyItMatters: "Solidify your knowledge.",
        content: `Review the essential patterns you've learned in this React course.`,
        codeExamples: [
          {
            id: "react-52-ex1",
            title: "Pattern Review",
            description: "Key learnings",
            code: { javascript: "// 1. Components - build blocks\nfunction Component(props) { return <div>{props.children}</div>; }\n\n// 2. Hooks - state & effects\nconst [state, setState] = useState(initial);\nuseEffect(() => { /* effect */ }, [deps]);\n\n// 3. Context - avoid prop drilling\nconst Context = createContext();\nconst value = useContext(Context);\n\n// 4. Composition over inheritance\nfunction Parent({ children }) { return <div>{children}</div>; }\n\n// 5. Lift state up when needed\n// Move to common ancestor\n\n// 6. Custom hooks for reuse\nfunction useCustom() { /* hook logic */ return value; }\n\n// 7. Memoization for performance\nconst memoized = useMemo(() => compute(a,b), [a,b]);\n\n// 8. Error boundaries\nclass ErrorBoundary extends Component {\n  componentDidCatch(e) { /* handle */ }\n}" },
            explanation: "Review key patterns."
          }
        ]
      }
    ],
    quiz: {
      passingScore: 80,
      questions: [
        { id: "q1", type: "mcq" as const, question: "Composition over?", options: ["Inheritance", "Inheritance", "State", "Props"], correctAnswer: 0, explanation: "Prefer composition.", difficulty: 1 },
        { id: "q2", type: "mcq" as const, question: "Custom hooks must start with?", options: ["use", "hook", "custom", "any"], correctAnswer: 0, explanation: "Must start with use.", difficulty: 1 },
        { id: "q3", type: "mcq" as const, question: "Error boundaries must be?", options: ["Function", "Class", "Any", "None"], correctAnswer: 1, explanation: "Must be class components.", difficulty: 1 }
      ]
    },
    cheatSheet: [
      { label: "Components", value: "Building blocks" },
      { label: "Hooks", value: "State/effects" },
      { label: "Composition", value: "Prefer over inheritance" }
    ]
  }
];

export const reactTrack: Track = {
  id: "react",
  title: "React",
  titleBn: "রিঅ্যাক্ট",
  tagline: "Build modern interactive user interfaces",
  taglineBn: "আধুনিক ইন্টারঅ্যাক্টিভ ইউজার ইন্টারফেস তৈরি করুন",
  icon: "https://img.icons8.com/?size=160&id=Qd0zZjYl88qF&format=png",
  colorVar: "react",
  totalChapters: reactChapters.length,
  estimatedHours: Math.round(reactChapters.reduce((sum, c) => sum + c.estimatedMinutes, 0) / 60),
  chapters: reactChapters,
  brandColor: "#61DAFB",
  glowColor: "rgba(97, 218, 251, 0.4)",
};