import type { Track, Chapter } from "./types";

const angularChapters: Chapter[] = [
  {
    id: "angular-1",
    number: 1,
    partLabel: "Part 1: Angular Fundamentals",
    title: "What Is Angular and Why Use It?",
    subtitle: "Introduction to Angular",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: [],
    learningObjectives: ["Understand what Angular is", "Know Angular vs AngularJS", "Understand SPA architecture"],
    sections: [
      {
        id: "angular-1-1",
        title: "Angular Overview",
        whyItMatters: "Angular powers enterprise applications worldwide.",
        content: `Angular is a TypeScript-based framework developed by Google for building web applications. Unlike AngularJS (1.x), modern Angular (2+) is a complete rewrite using TypeScript and component-based architecture.

Why Angular matters:
- Used by Google, Microsoft, IBM, and thousands of enterprises
- Strong typing with TypeScript built-in
- Opinionated structure ensures consistency
- Rich ecosystem: CLI, Angular Material, testing tools
- Regular updates with new features (Signals in v16, standalone in v14+)

Angular 17+ features:
- Standalone components (no NgModules required)
- Signals for reactive state management
- Server-side rendering (SSR) improvements
- Improved performance with faster change detection`,
        codeExamples: [
          {
            id: "angular-1-ex1",
            title: "Angular Version Timeline",
            description: "Angular evolution",
            code: { javascript: "// AngularJS (1.x) - Legacy\nangular.module('app', []);\n\n// Angular 2+ - Modern (TypeScript)\nimport { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-root',\n  template: '<h1>Hello {{name}}</h1>'\n})\nexport class AppComponent {\n  name = 'Angular';\n}\n\n// Angular 17+ Standalone\n@Component({\n  selector: 'app-root',\n  standalone: true,\n  template: '<h1>Hello {{name}}</h1>'\n})\nexport class AppComponent {\n  name = 'Angular 17';\n}" },
            explanation: "Modern Angular uses TypeScript and standalone components by default."
          }
        ]
      },
      {
        id: "angular-1-2",
        title: "SPA Architecture",
        whyItMatters: "Understanding SPA fundamentals.",
        content: `Single Page Application (SPA) loads once and updates content dynamically without page refreshes. Angular excels at SPA development.

How SPA works:
- Initial HTML/CSS/JS loads
- Navigation updates view without server round-trip
- Routing handled client-side
- API calls fetch data asynchronously`,
        codeExamples: [
          {
            id: "angular-1-ex2",
            title: "SPA vs Traditional",
            description: "Compare approaches",
            code: { javascript: "// Traditional Web (MPA)\n// 1. User clicks link\n// 2. Browser requests new page\n// 3. Server generates HTML\n// 4. Browser refreshes\n\n// Single Page Application\n// 1. Initial load (HTML, JS, CSS)\n// 2. User clicks link\n// 3. Angular router changes view\n// 4. Only view updates - no refresh" },
            explanation: "SPA provides smoother user experience - no page flicker."
          }
        ]
      }
    ]
  },
  {
    id: "angular-2",
    number: 2,
    title: "Angular CLI Setup",
    subtitle: "Install and configure Angular",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["angular-1"],
    learningObjectives: ["Install Node.js and npm", "Install Angular CLI", "Create new Angular project"],
    sections: [
      {
        id: "angular-2-1",
        title: "Installation",
        whyItMatters: "Setup required before development.",
        content: `Install Node.js (LTS), npm, then Angular CLI.`,
        codeExamples: [
          {
            id: "angular-2-ex1",
            title: "Setup Commands",
            description: "Install Angular CLI",
            code: { javascript: "-- Check Node version (16.14+ or 18.10+ required)\nnode --version\n\n-- Check npm version\nnpm --version\n\n-- Install Angular CLI globally\nnpm install -g @angular/cli\n\n-- Verify CLI installation\nng version\n\n-- Create new Angular project\nng new my-app\n\n-- Start development server\ncd my-app\nng serve" },
            explanation: "Angular CLI provides scaffolding and build tools."
          }
        ]
      }
    ]
  },
  {
    id: "angular-3",
    number: 3,
    title: "Angular Project Structure",
    subtitle: "Understand the files",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 45,
    prerequisites: ["angular-2"],
    learningObjectives: ["Understand folder structure", "Know key configuration files", "Understand build process"],
    sections: [
      {
        id: "angular-3-1",
        title: "Project Files",
        whyItMatters: "Navigate Angular projects efficiently.",
        content: `Angular project structure with key directories and files.`,
        codeExamples: [
          {
            id: "angular-3-ex1",
            title: "Folder Structure",
            description: "Angular project layout",
            code: { javascript: "my-app/\n├── src/\n│   ├── app/\n│   │   ├── components/\n│   │   ├── services/\n│   │   ├── models/\n│   │   ├── app.component.ts    # Root component\n│   │   ├── app.config.ts       # App configuration\n│   │   ├── app.routes.ts       # Routing config\n│   │   └── main.ts             # Bootstrap\n│   ├── assets/                 # Static files\n│   ├── styles.css             # Global styles\n│   ├── index.html             # Entry HTML\n│   └── main.ts               # Bootstrap\n├── angular.json              # Angular CLI config\n├── package.json              # npm dependencies\n└── tsconfig.json             # TypeScript config" },
            explanation: "Standalone architecture uses app.config.ts instead of app.module.ts"
          }
        ]
      }
    ]
  },
  {
    id: "angular-4",
    number: 4,
    title: "TypeScript Refresher for Angular",
    subtitle: "TS fundamentals for Angular",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["angular-3"],
    learningObjectives: ["Use TypeScript types", "Understand interfaces", "Use decorators"],
    sections: [
      {
        id: "angular-4-1",
        title: "TypeScript in Angular",
        whyItMatters: "Angular uses TypeScript heavily.",
        content: `TypeScript fundamentals needed for Angular development.`,
        codeExamples: [
          {
            id: "angular-4-ex1",
            title: "TypeScript Examples",
            description: "TypeScript for Angular",
            code: { javascript: "// Type annotations\nlet name: string = 'Angular';\nlet version: number = 17;\nlet isActive: boolean = true;\n\n// Interfaces\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\n// Class with type\nclass UserService {\n  private users: User[] = [];\n\n  getUsers(): User[] {\n    return this.users;\n  }\n}\n\n// Type inference\nconst app = { name: 'Angular' };  // type: { name: string }\n\n// Generics\nfunction getItems<T>(items: T[]): T {\n  return items[0];\n}" },
            explanation: "TypeScript provides type safety and better IDE support."
          }
        ]
      }
    ]
  },
  {
    id: "angular-5",
    number: 5,
    title: "Components Basics",
    subtitle: "Building blocks of Angular",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["angular-4"],
    learningObjectives: ["Create components", "Understand @Component decorator", "Use standalone components"],
    sections: [
      {
        id: "angular-5-1",
        title: "Component Structure",
        whyItMatters: "Components are the core of Angular applications.",
        content: `Components combine logic (TypeScript), template (HTML), and styles (CSS).`,
        codeExamples: [
          {
            id: "angular-5-ex1",
            title: "Component Example",
            description: "Basic Angular component",
            code: { javascript: "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-greeting',\n  standalone: true,\n  template: `\n    <div class=\"greeting\">\n      <h1>Hello, {{ name }}!</h1>\n      <p>Welcome to Angular.</p>\n    </div>\n  `,\n  styles: [`\n    .greeting {\n      padding: 20px;\n      border: 1px solid #ccc;\n    }\n  `]\n})\nexport class GreetingComponent {\n  name = 'Developer';\n}" },
            explanation: "Standalone components don't require NgModule declaration."
          }
        ]
      }
    ]
  },
  {
    id: "angular-6",
    number: 6,
    title: "Templates and Interpolation",
    subtitle: "Display data in templates",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-5"],
    learningObjectives: ["Use interpolation {{}}", "Call methods in templates", "Use template expressions"],
    sections: [
      {
        id: "angular-6-1",
        title: "Template Basics",
        whyItMatters: "Templates define what users see.",
        content: `Interpolation embeds component data into templates using {{ }} syntax.`,
        codeExamples: [
          {
            id: "angular-6-ex1",
            title: "Interpolation Examples",
            description: "Template data binding",
            code: { javascript: "// Component\n@Component({\n  selector: 'app-demo',\n  template: `\n    <h1>{{ title }}</h1>\n    <p>Version: {{ version }}</p>\n    <p>2 + 2 = {{ 2 + 2 }}</p>\n    <p>{{ getMessage() }}</p>\n    <p>User: {{ user?.name }}</p>\n  `\n})\nexport class DemoComponent {\n  title = 'Angular App';\n  version = 17;\n  user = { name: 'Alice' };\n\n  getMessage() {\n    return 'Welcome to Angular!';\n  }\n}" },
            explanation: "Use optional chaining (?.) to safely access possibly null properties."
          }
        ]
      }
    ]
  },
  {
    id: "angular-7",
    number: 7,
    title: "Property Binding",
    subtitle: "Bind component to template",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-6"],
    learningObjectives: ["Use property binding [property]", "Bind to element properties", "One-way data flow"],
    sections: [
      {
        id: "angular-7-1",
        title: "Property Binding Basics",
        whyItMatters: "Property binding passes data to DOM elements.",
        codeExamples: [
          {
            id: "angular-7-ex1",
            title: "Property Binding",
            description: "Bind properties",
            code: { javascript: "@Component({\n  template: `\n    <img [src]=\"imageUrl\" [alt]=\"description\">\n    <button [disabled]=\"isDisabled\">Click me</button>\n    <div [class.active]=\"isActive\">Content</div>\n    <div [style.color]=\"textColor\">Styled text</div>\n  `\n})\nexport class AppComponent {\n  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';\n  description = 'Angular Logo';\n  isDisabled = false;\n  isActive = true;\n  textColor = 'blue';\n}" },
            explanation: "Property binding uses [property] syntax - one-way from component to template."
          }
        ]
      }
    ]
  },
  {
    id: "angular-8",
    number: 8,
    title: "Event Binding",
    subtitle: "Handle user interactions",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-7"],
    learningObjectives: ["Use event binding (event)", "Handle DOM events", "Use $event object"],
    sections: [
      {
        id: "angular-8-1",
        title: "Event Binding Basics",
        whyItMatters: "Handle user interactions with event binding.",
        codeExamples: [
          {
            id: "angular-8-ex1",
            title: "Event Binding",
            description: "Handle events",
            code: { javascript: "@Component({\n  template: `\n    <button (click)=\"onClick()\">Click me</button>\n    <input (input)=\"onInput($event)\">\n    <div (mouseenter)=\"onHover()\">Hover me</div>\n    <form (submit)=\"onSubmit($event)\">\n      <button type=\"submit\">Submit</button>\n    </form>\n  `\n})\nexport class AppComponent {\n  onClick() {\n    console.log('Button clicked!');\n  }\n\n  onInput(event: Event) {\n    const value = (event.target as HTMLInputElement).value;\n    console.log('Input:', value);\n  }\n\n  onHover() {\n    console.log('Mouse entered!');\n  }\n\n  onSubmit(event: Event) {\n    event.preventDefault();\n    console.log('Form submitted');\n  }\n}" },
            explanation: "Use (event) syntax for event binding, $event provides event data."
          }
        ]
      }
    ]
  },
  {
    id: "angular-9",
    number: 9,
    title: "Two-way Binding",
    subtitle: "Bidirectional data flow",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-8"],
    learningObjectives: ["Use [(ngModel)]", "Implement two-way binding", "Import FormsModule"],
    sections: [
      {
        id: "angular-9-1",
        title: "Two-way Binding Basics",
        whyItMatters: "Two-way binding syncs component and template automatically.",
        codeExamples: [
          {
            id: "angular-9-ex1",
            title: "Two-way Binding",
            description: "Sync data both ways",
            code: { javascript: "import { Component } from '@angular/core';\nimport { FormsModule } from '@angular/forms';\n\n@Component({\n  selector: 'app-user',\n  standalone: true,\n  imports: [FormsModule],\n  template: `\n    <input [(ngModel)]=\"name\" placeholder=\"Enter name\">\n    <p>Hello, {{ name }}!</p>\n    <button (click)=\"clearName()\">Clear</button>\n  `\n})\nexport class UserComponent {\n  name = '';\n\n  clearName() {\n    this.name = '';\n  }\n}\n\n// In app.config.ts:\n// No module needed - just import FormsModule in component imports" },
            explanation: "[(ngModel)] combines property and event binding for two-way sync."
          }
        ]
      }
    ]
  },
  {
    id: "angular-10",
    number: 10,
    title: "Directives (*ngIf, *ngFor)",
    subtitle: "Control template flow",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["angular-9"],
    learningObjectives: ["Use *ngIf for conditional", "Use *ngFor for lists", "Use @if and @for (new syntax)"],
    sections: [
      {
        id: "angular-10-1",
        title: "Structural Directives",
        whyItMatters: "Control DOM structure with directives.",
        codeExamples: [
          {
            id: "angular-10-ex1",
            title: "Directives Examples",
            description: "Control template",
            code: { javascript: "@Component({\n  template: `\n    <!-- *ngIf - conditional -->\n    <div *ngIf=\"isLoggedIn\">Welcome back!</div>\n    <div *ngIf=\"users.length > 0\">Users found</div>\n\n    <!-- *ngFor - loops -->\n    <ul>\n      <li *ngFor=\"let user of users\">{{ user.name }}</li>\n    </ul>\n\n    <!-- @if and @for (Angular 17+) -->\n    @if (isLoggedIn) {\n      <p>Welcome!</p>\n    } @else {\n      <p>Please login</p>\n    }\n\n    @for (user of users; track user.id) {\n      <li>{{ user.name }}</li>\n    }\n  `\n})\nexport class AppComponent {\n  isLoggedIn = true;\n  users = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];\n}" },
            explanation: "Use track by with @for for efficient list rendering."
          }
        ]
      }
    ]
  },
  {
    id: "angular-11",
    number: 11,
    title: "Pipes",
    subtitle: "Transform data in templates",
    difficulty: "Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["angular-10"],
    learningObjectives: ["Use built-in pipes", "Create custom pipes", "Pipe chaining"],
    sections: [
      {
        id: "angular-11-1",
        title: "Pipe Basics",
        whyItMatters: "Pipes transform data display without changing source.",
        codeExamples: [
          {
            id: "angular-11-ex1",
            title: "Pipe Examples",
            description: "Transform data",
            code: { javascript: "@Component({\n  template: `\n    <!-- Date pipe -->\n    <p>{{ today | date:'medium' }}</p>\n    <p>{{ today | date:'yyyy-MM-dd' }}</p>\n\n    <!-- Currency pipe -->\n    <p>{{ price | currency:'USD' }}</p>\n\n    <!-- Uppercase/Lowercase -->\n    <p>{{ name | uppercase }}</p>\n\n    <!-- Chain pipes -->\n    <p>{{ name | uppercase | slice:0:5 }}</p>\n\n    <!-- Custom pipe -->\n    <p>{{ 'hello' | greeting }}</p>\n  `\n})\nexport class AppComponent {\n  today = new Date();\n  price = 99.99;\n  name = 'angular';\n}\n\n// Custom pipe\n@Pipe({ name: 'greeting', standalone: true })\nexport class GreetingPipe implements PipeTransform {\n  transform(value: string): string {\n    return `Hello, ${value}!`;\n  }\n}" },
            explanation: "Pipes are reusable transformations - chain them for combined effects."
          }
        ]
      }
    ]
  },
  {
    id: "angular-12",
    number: 12,
    title: "Component Communication",
    subtitle: "Pass data between components",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["angular-11"],
    learningObjectives: ["Use @Input for parent-to-child", "Use @Output for child-to-parent", "Use signal inputs"],
    sections: [
      {
        id: "angular-12-1",
        title: "Component Data Flow",
        whyItMatters: "Components must communicate to build apps.",
        codeExamples: [
          {
            id: "angular-12-ex1",
            title: "Component Communication",
            description: "Share data",
            code: { javascript: "// Child component - receive data\n@Component({\n  selector: 'app-child',\n  standalone: true,\n  imports: [CommonModule],\n  template: `<p>Message: {{ message }}</p>`\n})\nexport class ChildComponent {\n  @Input() message = '';\n  @Output() event = new EventEmitter<string>();\n\n  sendToParent() {\n    this.event.emit('Hello from child!');\n  }\n}\n\n// Parent component - send data\n@Component({\n  selector: 'app-parent',\n  standalone: true,\n  imports: [ChildComponent],\n  template: `\n    <app-child \n      [message]=\"parentMessage\"\n      (event)=\"handleEvent($event)\">\n    </app-child>\n  `\n})\nexport class ParentComponent {\n  parentMessage = 'Hello from parent!';\n\n  handleEvent(data: string) {\n    console.log('Received:', data);\n  }\n}" },
            explanation: "@Input passes data down, @Output sends events up."
          }
        ]
      }
    ]
  },
  {
    id: "angular-13",
    number: 13,
    partLabel: "Part 2: Services & Dependency Injection",
    title: "Services in Angular",
    subtitle: "Business logic layer",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-12"],
    learningObjectives: ["Create services", "Inject services into components", "Use @Injectable"],
    sections: [
      {
        id: "angular-13-1",
        title: "Service Basics",
        whyItMatters: "Services share logic across components.",
        codeExamples: [
          {
            id: "angular-13-ex1",
            title: "Service Example",
            description: "Create service",
            code: { javascript: "import { Injectable } from '@angular/core';\n\n@Injectable({\n  providedIn: 'root'  // Singleton app-wide\n})\nexport class UserService {\n  private users = [\n    { id: 1, name: 'Alice' },\n    { id: 2, name: 'Bob' }\n  ];\n\n  getUsers() {\n    return this.users;\n  }\n\n  getUserById(id: number) {\n    return this.users.find(u => u.id === id);\n  }\n}\n\n// Use in component\n@Component({\n  selector: 'app-user-list',\n  standalone: true,\n  imports: [CommonModule],\n  template: `\n    <li *ngFor=\"let user of userService.getUsers()\">\n      {{ user.name }}\n    </li>\n  `\n})\nexport class UserListComponent {\n  constructor(public userService: UserService) {}\n}" },
            explanation: "providedIn: 'root' makes service available everywhere automatically."
          }
        ]
      }
    ]
  },
  {
    id: "angular-14",
    number: 14,
    title: "Dependency Injection Fundamentals",
    subtitle: "Angular's DI system",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-13"],
    learningObjectives: ["Understand DI", "Use constructor injection", "Provide services at different levels"],
    sections: [
      {
        id: "angular-14-1",
        title: "DI Basics",
        whyItMatters: "Dependency Injection is Angular's core feature.",
        codeExamples: [
          {
            id: "angular-14-ex1",
            title: "Dependency Injection",
            description: "Inject dependencies",
            code: { javascript: "// Three ways to provide services:\n\n// 1. Root (singleton)\n@Injectable({ providedIn: 'root' })\nexport class ApiService {}\n\n// 2. Component (instance per component)\n@Component({\n  providers: [LocalService]\n})\nexport class MyComponent {\n  constructor(private local: LocalService) {}\n}\n\n// 3. Module (instance per module)\n@NgModule({\n  providers: [ModuleService]\n})\nexport class MyModule {}\n\n// Constructor injection\n@Component({})\nexport class AppComponent {\n  // TypeScript shortcut - private creates class property\n  constructor(\n    private apiService: ApiService,\n    private logger: LoggerService\n  ) {}\n}" },
            explanation: "Angular's DI creates and manages service instances automatically."
          }
        ]
      }
    ]
  },
  {
    id: "angular-15",
    number: 15,
    title: "Singleton Services",
    subtitle: "App-wide state",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["angular-14"],
    learningObjectives: ["Create singleton services", "Share state across components", "Use providedIn: 'root'"],
    sections: [
      {
        id: "angular-15-1",
        title: "Singleton Services",
        whyItMatters: "Share data across the application.",
        codeExamples: [
          {
            id: "angular-15-ex1",
            title: "Singleton Example",
            description: "App-wide service",
            code: { javascript: "@Injectable({ providedIn: 'root' })\nexport class AuthService {\n  private isLoggedIn = false;\n  private currentUser: User | null = null;\n\n  login(user: User) {\n    this.isLoggedIn = true;\n    this.currentUser = user;\n  }\n\n  logout() {\n    this.isLoggedIn = false;\n    this.currentUser = null;\n  }\n\n  get isAuthenticated() {\n    return this.isLoggedIn;\n  }\n\n  get user() {\n    return this.currentUser;\n  }\n}\n\n// Any component can inject this\n@Component({})\nexport class NavComponent {\n  constructor(private auth: AuthService) {}\n\n  get isLoggedIn() {\n    return this.auth.isAuthenticated;\n  }\n}" },
            explanation: "providedIn: 'root' creates singleton - one instance for entire app."
          }
        ]
      }
    ]
  },
  {
    id: "angular-16",
    number: 16,
    title: "HttpClient",
    subtitle: "Make HTTP requests",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["angular-15"],
    learningObjectives: ["Setup HttpClient", "Make GET/POST requests", "Handle responses"],
    sections: [
      {
        id: "angular-16-1",
        title: "HttpClient Basics",
        whyItMatters: "Most apps need to communicate with APIs.",
        codeExamples: [
          {
            id: "angular-16-ex1",
            title: "HTTP Example",
            description: "API calls",
            code: { javascript: "import { HttpClient, provideHttpClient } from '@angular/common/http';\nimport { Component, inject } from '@angular/core';\n\n@Component({\n  selector: 'app-data',\n  standalone: true,\n  template: `<div>{{ data | json }}</div>`\n})\nexport class DataComponent {\n  private http = inject(HttpClient);\n\n  ngOnInit() {\n    // GET request\n    this.http.get<User[]>('/api/users').subscribe({\n      next: (data) => console.log(data),\n      error: (err) => console.error(err)\n    });\n\n    // POST request\n    this.http.post('/api/users', { name: 'New User' }).subscribe();\n  }\n}\n\n// In app.config.ts:\nexport const appConfig: ApplicationConfig = {\n  providers: [provideHttpClient()]\n};" },
            explanation: "HttpClient returns Observables - use .subscribe() to execute."
          }
        ]
      }
    ]
  },
  {
    id: "angular-17",
    number: 17,
    title: "API Calls",
    subtitle: "Real API integration",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-16"],
    learningObjectives: ["Handle API responses", "Use async/await with toSignal", "Error handling"],
    sections: [
      {
        id: "angular-17-1",
        title: "API Integration",
        whyItMatters: "Connect to REST APIs.",
        codeExamples: [
          {
            id: "angular-17-ex1",
            title: "API Example",
            description: "Full API workflow",
            code: { javascript: "import { HttpClient, provideHttpClient } from '@angular/common/http';\nimport { toSignal } from '@angular/core/rxjs-interop';\nimport { catchError, of } from 'rxjs';\n\n@Component({\n  selector: 'app-users',\n  standalone: true,\n  template: `\n    @if (users(); as list) {\n      <ul>\n        @for (user of list; track user.id) {\n          <li>{{ user.name }}</li>\n        }\n      </ul>\n    } @else if (error()) {\n      <p>Error: {{ error() }}</p>\n    } @else {\n      <p>Loading...</p>\n    }\n  `\n})\nexport class UsersComponent {\n  private http = inject(HttpClient);\n\n  // Convert Observable to Signal\n  users = toSignal(\n    this.http.get<User[]>('/api/users').pipe(\n      catchError(err => {\n        this.error.set(err.message);\n        return of([]);\n      })\n    )\n  );\n\n  error = signal<string>('');\n}" },
            explanation: "toSignal converts Observable to reactive Signal for template use."
          }
        ]
      }
    ]
  },
  {
    id: "angular-18",
    number: 18,
    title: "Interceptors",
    subtitle: "Modify HTTP requests",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-17"],
    learningObjectives: ["Create HTTP interceptors", "Add headers to requests", "Handle auth tokens"],
    sections: [
      {
        id: "angular-18-1",
        title: "Interceptor Basics",
        whyItMatters: "Interceptors modify all HTTP requests/responses centrally.",
        codeExamples: [
          {
            id: "angular-18-ex1",
            title: "Interceptor Example",
            description: "Create interceptor",
            code: { javascript: "import { HttpInterceptorFn } from '@angular/common/http';\n\nexport const authInterceptor: HttpInterceptorFn = (req, next) => {\n  // Add auth header\n  const authToken = localStorage.getItem('token');\n  \n  const authReq = req.clone({\n    setHeaders: {\n      Authorization: `Bearer ${authToken}`\n    }\n  });\n\n  return next(authReq);\n};\n\n// Logging interceptor\nexport const loggingInterceptor: HttpInterceptorFn = (req, next) => {\n  console.log(`HTTP: ${req.method} ${req.url}`);\n  return next(req);\n};\n\n// In app.config.ts:\nexport const appConfig: ApplicationConfig = {\n  providers: [\n    provideHttpClient({\n      withInterceptors: [authInterceptor, loggingInterceptor]\n    })\n  ]\n};" },
            explanation: "Functional interceptors (Angular 15+) are simpler than class-based."
          }
        ]
      }
    ]
  },
  {
    id: "angular-19",
    number: 19,
    title: "Environment Variables",
    subtitle: "Configure environments",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 15,
    xpReward: 30,
    prerequisites: ["angular-18"],
    learningObjectives: ["Create environment files", "Use different configs", "Build for production"],
    sections: [
      {
        id: "angular-19-1",
        title: "Environment Setup",
        whyItMatters: "Different configs for dev/prod.",
        codeExamples: [
          {
            id: "angular-19-ex1",
            title: "Environment Example",
            description: "Configure environments",
            code: { javascript: "// src/environments/environment.ts (development)\nexport const environment = {\n  production: false,\n  apiUrl: 'http://localhost:3000/api'\n};\n\n// src/environments/environment.prod.ts (production)\nexport const environment = {\n  production: true,\n  apiUrl: 'https://api.production.com'\n};\n\n// Use in service\nimport { environment } from '../environments/environment';\n\n@Injectable({ providedIn: 'root' })\nexport class ApiService {\n  private baseUrl = environment.apiUrl;\n\n  getUsers() {\n    return this.http.get(`${this.baseUrl}/users`);\n  }\n}\n\n// Build for production\n// ng build --configuration production" },
            explanation: "Angular replaces environment file during build based on --configuration."
          }
        ]
      }
    ]
  },
  {
    id: "angular-20",
    number: 20,
    title: "Error Handling",
    subtitle: "Handle API errors",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["angular-19"],
    learningObjectives: ["Catch HTTP errors", "Display error messages", "Retry failed requests"],
    sections: [
      {
        id: "angular-20-1",
        title: "Error Handling",
        whyItMatters: "Graceful error handling improves UX.",
        codeExamples: [
          {
            id: "angular-20-ex1",
            title: "Error Handling",
            description: "Handle API errors",
            code: { javascript: "import { catchError, retry, retryDelay } from 'rxjs/operators';\n\n@Injectable({ providedIn: 'root' })\nexport class ApiService {\n  constructor(private http: HttpClient) {}\n\n  getData() {\n    return this.http.get('/api/data').pipe(\n      retry({ count: 3, delay: 1000 }),  // Retry 3 times\n      catchError(error => {\n        console.error('Error:', error);\n        return throwError(() => new Error('Failed to fetch data'));\n      })\n    );\n  }\n}\n\n// In component\nthis.apiService.getData().subscribe({\n  next: (data) => this.handleData(data),\n  error: (err) => this.showError(err.message)\n});" },
            explanation: "Use retry() for transient errors, catchError for handling."
          }
        ]
      }
    ]
  },
  {
    id: "angular-21",
    number: 21,
    title: "Caching Strategies",
    subtitle: "Cache API responses",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["angular-20"],
    learningObjectives: ["Implement caching", "Use shareReplay", "Invalidate cache"],
    sections: [
      {
        id: "angular-21-1",
        title: "Caching Basics",
        whyItMatters: "Caching reduces API calls and improves performance.",
        codeExamples: [
          {
            id: "angular-21-ex1",
            title: "Caching Example",
            description: "Cache responses",
            code: { javascript: "import { shareReplay } from 'rxjs/operators';\n\n@Injectable({ providedIn: 'root' })\nexport class DataService {\n  private cache = new Map<string, Observable<any>>();\n\n  getData(key: string): Observable<any> {\n    if (this.cache.has(key)) {\n      return this.cache.get(key)!;\n    }\n\n    const request = this.http.get(`/api/${key}`).pipe(\n      shareReplay(1)  // Cache last emitted value\n    );\n\n    this.cache.set(key, request);\n    return request;\n  }\n\n  clearCache() {\n    this.cache.clear();\n  }\n}\n\n// Cache-first approach\ngetWithCache(key: string): Observable<any> {\n  return this.getData(key).pipe(\n    catchError(() => of(null))  // Return cached on error\n  );\n}" },
            explanation: "shareReplay(1) caches last value for new subscribers."
          }
        ]
      }
    ]
  },
  {
    id: "angular-22",
    number: 22,
    title: "Services Project - Weather App",
    subtitle: "Build real service",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 45,
    xpReward: 80,
    prerequisites: ["angular-21"],
    learningObjectives: ["Build complete service", "Use environment config", "Handle async data"],
    sections: [
      {
        id: "angular-22-1",
        title: "Weather Service Project",
        whyItMatters: "Apply all service concepts.",
        codeExamples: [
          {
            id: "angular-22-ex1",
            title: "Weather App",
            description: "Complete service",
            code: { javascript: "@Injectable({ providedIn: 'root' })\nexport class WeatherService {\n  private apiKey = environment.weatherApiKey;\n  private baseUrl = 'https://api.openweathermap.org/data/2.5';\n\n  getWeather(city: string): Observable<WeatherData> {\n    return this.http.get<WeatherData>(\n      `${this.baseUrl}/weather?q=${city}&appid=${this.apiKey}&units=metric`\n    ).pipe(\n      catchError(err => {\n        console.error('Weather API error:', err);\n        return throwError(() => err);\n      })\n    );\n  }\n\n  getForecast(city: string): Observable<ForecastData> {\n    return this.http.get<ForecastData>(\n      `${this.baseUrl}/forecast?q=${city}&appid=${this.apiKey}&units=metric`\n    );\n  }\n}\n\n@Component({\n  selector: 'app-weather',\n  standalone: true,\n  template: `\n    <input [(ngModel)]=\"city\" (keyup.enter)=\"search()\">\n    @if (weather()) {\n      <div class=\"weather\">\n        <h2>{{ weather()?.name }}</h2>\n        <p>{{ weather()?.main?.temp }}°C</p>\n      </div>\n    }\n  `\n})\nexport class WeatherComponent {\n  city = '';\n  weather = toSignal(this.weatherService.getWeather('London'));\n\n  constructor(private weatherService: WeatherService) {}\n\n  search() {\n    this.weather = toSignal(\n      this.weatherService.getWeather(this.city)\n    );\n  }\n}" },
            explanation: "This combines services, HTTP, error handling, signals, and forms."
          }
        ]
      }
    ]
  },
  {
    id: "angular-23",
    number: 23,
    partLabel: "Part 3: Routing & Navigation",
    title: "Angular Router",
    subtitle: "Navigation between views",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["angular-22"],
    learningObjectives: ["Set up Angular Router", "Configure routes", "Navigate between pages"],
    sections: [
      {
        id: "angular-23-1",
        title: "Router Basics",
        whyItMatters: "Single Page Apps need client-side routing.",
        codeExamples: [
          {
            id: "angular-23-ex1",
            title: "Basic Router Setup",
            description: "Configure routes",
            code: { javascript: "import { Routes } from '@angular/router';\n\nexport const routes: Routes = [\n  { path: '', component: HomeComponent },\n  { path: 'about', component: AboutComponent },\n  { path: 'users', component: UsersComponent },\n  { path: '**', component: NotFoundComponent }  // Wildcard\n];\n\n// app.routes.ts\nimport { provideRouter } from '@angular/router';\nexport const appConfig: ApplicationConfig = {\n  providers: [provideRouter(routes)]\n};" },
            explanation: "Routes array defines URL-to-component mapping."
          }
        ]
      }
    ]
  },
  {
    id: "angular-24",
    number: 24,
    title: "Route Parameters",
    subtitle: "Dynamic URLs",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-23"],
    learningObjectives: ["Use route parameters", "Read params in component", "Navigate with params"],
    sections: [
      {
        id: "angular-24-1",
        title: "Route Parameters",
        whyItMatters: "Access dynamic data from URL.",
        codeExamples: [
          {
            id: "angular-24-ex1",
            title: "Parameter Routes",
            description: "Dynamic URLs",
            code: { javascript: "// Route with parameter\n{ path: 'user/:id', component: UserDetailComponent }\n\n// Navigate with parameter\n@Component({})\nexport class UserListComponent {\n  constructor(private router: Router) {}\n\n  goToUser(id: number) {\n    this.router.navigate(['/user', id]);\n  }\n}\n\n// Read parameter in component\n@Component({})\nexport class UserDetailComponent {\n  private route = inject(ActivatedRoute);\n\n  ngOnInit() {\n    const id = this.route.snapshot.paramMap.get('id');\n    // OR with observable\n    this.route.paramMap.subscribe(params => {\n      const id = params.get('id');\n    });\n  }\n}" },
            explanation: "Use ActivatedRoute to read URL parameters."
          }
        ]
      }
    ]
  },
  {
    id: "angular-25",
    number: 25,
    title: "Lazy Loading",
    subtitle: "Load code on demand",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 55,
    prerequisites: ["angular-24"],
    learningObjectives: ["Implement lazy loading", "Use loadComponent", "Optimize bundle size"],
    sections: [
      {
        id: "angular-25-1",
        title: "Lazy Loading Basics",
        whyItMatters: "Reduce initial bundle size.",
        codeExamples: [
          {
            id: "angular-25-ex1",
            title: "Lazy Loading",
            description: "Load on demand",
            code: { javascript: "// Lazy load component\n{\n  path: 'admin',\n  loadComponent: () => import('./admin/admin.component')\n    .then(m => m.AdminComponent)\n}\n\n// Lazy load feature module\n{\n  path: 'products',\n  loadChildren: () => import('./products/products.routes')\n    .then(m => m.PRODUCTS_ROUTES)\n}\n\n// In products.routes.ts\nexport const PRODUCTS_ROUTES: Routes = [\n  { path: '', component: ProductListComponent },\n  { path: ':id', component: ProductDetailComponent }\n];" },
            explanation: "Lazy loading splits code into separate chunks loaded on demand."
          }
        ]
      }
    ]
  },
  {
    id: "angular-26",
    number: 26,
    title: "Nested Routes",
    subtitle: "Hierarchical navigation",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-25"],
    learningObjectives: ["Create child routes", "Use router-outlet", "Build nested layouts"],
    sections: [
      {
        id: "angular-26-1",
        title: "Nested Routes",
        whyItMatters: "Complex apps need hierarchical views.",
        codeExamples: [
          {
            id: "angular-26-ex1",
            title: "Nested Route Example",
            description: "Parent-child routes",
            code: { javascript: "// Parent route with children\n{\n  path: 'dashboard',\n  component: DashboardLayoutComponent,\n  children: [\n    { path: '', redirectTo: 'overview' },\n    { path: 'overview', component: OverviewComponent },\n    { path: 'analytics', component: AnalyticsComponent },\n    { path: 'settings', component: SettingsComponent }\n  ]\n}\n\n// Dashboard template\n@Component({\n  template: `\n    <nav>\n      <a routerLink=\"overview\">Overview</a>\n      <a routerLink=\"analytics\">Analytics</a>\n      <a routerLink=\"settings\">Settings</a>\n    </nav>\n    <router-outlet></router-outlet>  <!-- Child views render here -->\n  `\n})\nexport class DashboardLayoutComponent {}" },
            explanation: "router-outlet displays child route components."
          }
        ]
      }
    ]
  },
  {
    id: "angular-27",
    number: 27,
    title: "Route Guards",
    subtitle: "Protect routes",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["angular-26"],
    learningObjectives: ["Use CanActivate", "Implement auth guard", "Control navigation"],
    sections: [
      {
        id: "angular-27-1",
        title: "Route Guards",
        whyItMatters: "Protect routes from unauthorized access.",
        codeExamples: [
          {
            id: "angular-27-ex1",
            title: "Auth Guard",
            description: "Protect routes",
            code: { javascript: "import { inject } from '@angular/core';\nimport { CanActivateFn, Router } from '@angular/router';\nimport { AuthService } from './auth.service';\n\nexport const authGuard: CanActivateFn = (route, state) => {\n  const authService = inject(AuthService);\n  const router = inject(Router);\n\n  if (authService.isLoggedIn) {\n    return true;\n  }\n\n  return router.createUrlTree(['/login']);\n};\n\n// Use in routes\nexport const routes: Routes = [\n  {\n    path: 'dashboard',\n    component: DashboardComponent,\n    canActivate: [authGuard]\n  }\n];" },
            explanation: "Guards return true/false or UrlTree to redirect."
          }
        ]
      }
    ]
  },
  {
    id: "angular-28",
    number: 28,
    title: "Authentication Routing",
    subtitle: "Auth flow with routes",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-27"],
    learningObjectives: ["Handle login/logout", "Persist auth state", "Protect user routes"],
    sections: [
      {
        id: "angular-28-1",
        title: "Auth Routing",
        whyItMatters: "Secure user-specific areas.",
        codeExamples: [
          {
            id: "angular-28-ex1",
            title: "Auth Flow",
            description: "Login/logout routes",
            code: { javascript: "@Injectable({ providedIn: 'root' })\nexport class AuthService {\n  private isLoggedIn = signal(false);\n\n  login(credentials: Credentials): Observable<boolean> {\n    return this.http.post<{token: string}>('/api/login', credentials).pipe(\n      tap(response => {\n        localStorage.setItem('token', response.token);\n        this.isLoggedIn.set(true);\n      }),\n      map(() => true)\n    );\n  }\n\n  logout() {\n    localStorage.removeItem('token');\n    this.isLoggedIn.set(false);\n  }\n\n  get isAuthenticated() {\n    return this.isLoggedIn();\n  }\n}\n\n// Guard for protected routes\nexport const requireAuth: CanActivateFn = () => {\n  const auth = inject(AuthService);\n  return auth.isAuthenticated || inject(Router).createUrlTree(['/login']);\n};" },
            explanation: "Signal-based auth state with guard protection."
          }
        ]
      }
    ]
  },
  {
    id: "angular-29",
    number: 29,
    title: "Preloading Strategies",
    subtitle: "Optimize lazy routes",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["angular-28"],
    learningObjectives: ["Configure preloading", "Use PreloadAll", "Custom strategies"],
    sections: [
      {
        id: "angular-29-1",
        title: "Preloading",
        whyItMatters: "Balance initial load vs future navigation.",
        codeExamples: [
          {
            id: "angular-29-ex1",
            title: "Preload Example",
            description: "Configure preload",
            code: { javascript: "import { PreloadAllModules } from '@angular/router';\n\nexport const appConfig: ApplicationConfig = {\n  providers: [\n    provideRouter(\n      routes,\n      {\n        preloadingStrategy: PreloadAllModules  // Preload all lazy chunks\n      }\n    )\n  ]\n};\n\n// Custom preloading - only preload important routes\nclass CustomPreload implements PreloadingStrategy {\n  preload(route: Route, load: () => Observable<any>): Observable<any> {\n    if (route.data?.['preload']) {\n      return load();\n    }\n    return of(null);\n  }\n}\n\n// Route with preload flag\n{ path: 'admin', loadComponent: () => ..., data: { preload: true } }" },
            explanation: "PreloadAll loads lazy chunks after initial render."
          }
        ]
      }
    ]
  },
  {
    id: "angular-30",
    number: 30,
    title: "Dynamic Navigation",
    subtitle: "Programmatic routing",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["angular-29"],
    learningObjectives: ["Navigate programmatically", "Pass query params", "Handle navigation events"],
    sections: [
      {
        id: "angular-30-1",
        title: "Dynamic Navigation",
        whyItMatters: "Programmatic control over navigation.",
        codeExamples: [
          {
            id: "angular-30-ex1",
            title: "Programmatic Nav",
            description: "Router navigation",
            code: { javascript: "@Component({})\nexport class SearchComponent {\n  private router = inject(Router);\n\n  search(term: string) {\n    // Navigate with query params\n    this.router.navigate(['/search'], {\n      queryParams: { q: term, page: 1 }\n    });\n  }\n\n  // Read query params\n  private route = inject(ActivatedRoute);\n\n  ngOnInit() {\n    this.route.queryParamMap.subscribe(params => {\n      const term = params.get('q');\n      const page = params.get('page');\n    });\n  }\n\n  // Navigation with state\n  goWithState() {\n    this.router.navigate(['/result'], {\n      state: { from: 'search', timestamp: Date.now() }\n    });\n  }\n}" },
            explanation: "Router.navigate for programmatic navigation with params."
          }
        ]
      }
    ]
  },
  {
    id: "angular-31",
    number: 31,
    partLabel: "Part 4: Forms & State Management",
    title: "Template-driven Forms",
    subtitle: "Forms with ngModel",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-30"],
    learningObjects: ["Use ngModel", "Handle form submission", "Set up form validation"],
    sections: [
      {
        id: "angular-31-1",
        title: "Template-driven Basics",
        whyItMatters: "Quick forms with minimal code.",
        codeExamples: [
          {
            id: "angular-31-ex1",
            title: "Template Form",
            description: "ngModel forms",
            code: { javascript: "import { FormsModule } from '@angular/forms';\n\n@Component({\n  selector: 'app-login',\n  standalone: true,\n  imports: [FormsModule],\n  template: `\n    <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit(loginForm)\">\n      <input \n        name=\"email\" \n        [(ngModel)]=\"email\" \n        required \n        email\n        #emailInput=\"ngModel\">\n      <div *ngIf=\"emailInput.invalid && emailInput.touched\">\n        Valid email required\n      </div>\n\n      <input \n        type=\"password\"\n        name=\"password\" \n        [(ngModel)]=\"password\" \n        required\n        minlength=\"8\">\n\n      <button type=\"submit\" [disabled]=\"loginForm.invalid\">\n        Login\n      </button>\n    </form>\n  `\n})\nexport class LoginComponent {\n  email = '';\n  password = '';\n\n  onSubmit(form: NgForm) {\n    console.log('Form values:', form.value);\n  }\n}" },
            explanation: "Template forms use ngModel with name attribute for each input."
          }
        ]
      }
    ]
  },
  {
    id: "angular-32",
    number: 32,
    title: "Reactive Forms",
    subtitle: "Programmatic forms",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["angular-31"],
    learningObjectives: ["Create FormControl", "Use FormGroup", "Handle changes"],
    sections: [
      {
        id: "angular-32-1",
        title: "Reactive Forms",
        whyItMatters: "Complex forms with full control.",
        codeExamples: [
          {
            id: "angular-32-ex1",
            title: "Reactive Form",
            description: "Programmatic forms",
            code: { javascript: "import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';\n\n@Component({\n  selector: 'app-register',\n  standalone: true,\n  imports: [ReactiveFormsModule],\n  template: `\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n      <input formControlName=\"email\">\n      <div *ngIf=\"form.get('email')?.touched && form.get('email')?.errors?.['required']\">\n        Email required\n      </div>\n\n      <input formControlName=\"password\" type=\"password\">\n      <div *ngIf=\"form.get('password')?.errors?.['minlength']\">\n        Min 8 characters\n      </div>\n\n      <button type=\"submit\" [disabled]=\"form.invalid\">Register</button>\n    </form>\n  `\n})\nexport class RegisterComponent {\n  form: FormGroup;\n\n  constructor(private fb: FormBuilder) {\n    this.form = this.fb.group({\n      email: ['', [Validators.required, Validators.email]],\n      password: ['', [Validators.required, Validators.minLength(8)]],\n      confirmPassword: ['', Validators.required]\n    });\n  }\n\n  onSubmit() {\n    if (this.form.valid) {\n      console.log(this.form.value);\n    }\n  }\n}" },
            explanation: "Reactive forms provide synchronous control over validation."
          }
        ]
      }
    ]
  },
  {
    id: "angular-33",
    number: 33,
    title: "Form Validation",
    subtitle: "Validate user input",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-32"],
    learningObjectives: ["Built-in validators", "Custom validators", "Display errors"],
    sections: [
      {
        id: "angular-33-1",
        title: "Form Validation",
        whyItMatters: "Ensure data quality.",
        codeExamples: [
          {
            id: "angular-33-ex1",
            title: "Validation Example",
            description: "Validators",
            code: { javascript: "import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';\n\n// Custom validator\nexport function passwordStrengthValidator(): ValidatorFn {\n  return (control: AbstractControl): ValidationErrors | null => {\n    const value = control.value || '';\n    const hasUpper = /[A-Z]/.test(value);\n    const hasLower = /[a-z]/.test(value);\n    const hasNumber = /[0-9]/.test(value);\n    const hasSpecial = /[!@#$%^&*]/.test(value);\n\n    const valid = hasUpper && hasLower && hasNumber && hasSpecial;\n    return valid ? null : { passwordStrength: true };\n  };\n}\n\n// Use in form\nthis.form = this.fb.group({\n  password: ['', [Validators.required, passwordStrengthValidator()]]\n});\n\n// Template display\n<div *ngIf=\"form.get('password')?.errors?.['passwordStrength']\">\n  Password needs upper, lower, number, special char\n</div>" },
            explanation: "Validators can be sync or async, built-in or custom."
          }
        ]
      }
    ]
  },
  {
    id: "angular-34",
    number: 34,
    title: "Async Validators",
    subtitle: "Server-side validation",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-33"],
    learningObjectives: ["Async validation", "Debounce input", "Check uniqueness"],
    sections: [
      {
        id: "angular-34-1",
        title: "Async Validators",
        whyItMatters: "Validate against server.",
        codeExamples: [
          {
            id: "angular-34-ex1",
            title: "Async Validation",
            description: "Server checks",
            code: { javascript: "import { of, delay, map } from 'rxjs';\n\n@Injectable({ providedIn: 'root' })\nexport class UsernameValidator {\n  constructor(private http: HttpClient) {}\n\n  validate(control: AbstractControl): Observable<ValidationErrors | null> {\n    if (!control.value) {\n      return of(null);\n    }\n\n    return this.http.get<boolean>(`/api/users/exists/${control.value}`).pipe(\n      delay(300),  // Simulate network delay\n      map(exists => exists ? { usernameTaken: true } : null)\n    );\n  }\n}\n\n// Use in form\nthis.form = this.fb.group({\n  username: ['', \n    [Validators.required], \n    [this.usernameValidator.validate]  // Async validator 3rd arg\n  ]\n});\n\n// Template shows pending\n<div *ngIf=\"usernameControl.pending\">Checking...</div>" },
            explanation: "Async validators run after sync validators pass."
          }
        ]
      }
    ]
  },
  {
    id: "angular-35",
    number: 35,
    title: "Dynamic Forms",
    subtitle: "Form arrays and dynamic fields",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["angular-34"],
    learningObjectives: ["Use FormArray", "Add/remove fields", "Build forms dynamically"],
    sections: [
      {
        id: "angular-35-1",
        title: "Dynamic Forms",
        whyItMatters: "Forms that change based on user input.",
        codeExamples: [
          {
            id: "angular-35-ex1",
            title: "FormArray",
            description: "Dynamic fields",
            code: { javascript: "@Component({\n  template: `\n    <form [formGroup]=\"form\">\n      <div formArrayName=\"contacts\">\n        @for (contact of contacts.controls; track $index; let i = $index) {\n          <div [formGroupName]=\"i\">\n            <input formControlName=\"name\" placeholder=\"Name\">\n            <input formControlName=\"phone\" placeholder=\"Phone\">\n            <button (click)=\"removeContact(i)\">Remove</button>\n          </div>\n        }\n      </div>\n      <button (click)=\"addContact()\">Add Contact</button>\n    </form>\n  `\n})\nexport class DynamicFormComponent {\n  form: FormGroup;\n\n  constructor(private fb: FormBuilder) {\n    this.form = this.fb.group({\n      contacts: this.fb.array([])\n    });\n  }\n\n  get contacts() {\n    return this.form.get('contacts') as FormArray;\n  }\n\n  addContact() {\n    this.contacts.push(this.fb.group({\n      name: ['', Validators.required],\n      phone: ['', Validators.required]\n    }));\n  }\n\n  removeContact(index: number) {\n    this.contacts.removeAt(index);\n  }\n}" },
            explanation: "FormArray manages dynamic list of form controls."
          }
        ]
      }
    ]
  },
  {
    id: "angular-36",
    number: 36,
    title: "RxJS Basics",
    subtitle: "Reactive programming",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["angular-35"],
    learningObjectives: ["Understand Observables", "Subscribe to streams", "Use operators"],
    sections: [
      {
        id: "angular-36-1",
        title: "RxJS Fundamentals",
        whyItMatters: "RxJS powers Angular's async handling.",
        codeExamples: [
          {
            id: "angular-36-ex1",
            title: "RxJS Basics",
            description: "Observables",
            code: { javascript: "import { Observable, of, from, interval } from 'rxjs';\n\n// Create observables\nconst data$ = of(1, 2, 3);  // Emit values synchronously\nconst stream$ = interval(1000);  // Emit every second\nconst promise$ = from(fetch('/api/data'));  // From promise\n\n// Subscribe\ndata$.subscribe(value => console.log(value));\n\n// Operators\nimport { map, filter, take, debounceTime } from 'rxjs/operators';\n\n// Transform\nof(1, 2, 3).pipe(\n  map(x => x * 2)\n).subscribe(x => console.log(x));  // 2, 4, 6\n\n// Filter\nof(1, 2, 3, 4).pipe(\n  filter(x => x > 2)\n).subscribe(x => console.log(x));  // 3, 4\n\n// Take limited values\ninterval(1000).pipe(\n  take(5)\n).subscribe(x => console.log(x));  // 0,1,2,3,4 then completes" },
            explanation: "Observables emit values over time, operators transform them."
          }
        ]
      }
    ]
  },
  {
    id: "angular-37",
    number: 37,
    title: "Observables",
    subtitle: "Angular's async foundation",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-36"],
    learningObjectives: ["Create observables", "Handle emissions", "Manage subscriptions"],
    sections: [
      {
        id: "angular-37-1",
        title: "Observables in Angular",
        whyItMatters: "HTTP, events, async pipe all use Observables.",
        codeExamples: [
          {
            id: "angular-37-ex1",
            title: "Observable Patterns",
            description: "Angular patterns",
            code: { javascript: "import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';\n\n// Subject - values emitted to subscribers\nconst subject = new Subject<number>();\nsubject.next(1);  // Missed if not subscribed\nsubject.subscribe(v => console.log(v));\n\n// BehaviorSubject - has current value\nconst authState = new BehaviorSubject<User | null>(null);\nauthState.subscribe(user => console.log(user));\nauthState.next({id: 1, name: 'Alice'});  // Immediately emits\n\n// ReplaySubject - replay past values\nconst replay = new ReplaySubject(2);  // Buffer last 2\nreplay.next(1); replay.next(2); replay.next(3);\nreplay.subscribe(v => console.log(v));  // 2, 3\n\n// Unsubscribe to prevent memory leaks\nimport { takeUntil } from 'rxjs/operators';\n\n@Component({})\nexport class MyComponent implements OnDestroy {\n  private destroy$ = new Subject<void>();\n\n  ngOnInit() {\n    this.data$.pipe(\n      takeUntil(this.destroy$)\n    ).subscribe();\n  }\n\n  ngOnDestroy() {\n    this.destroy$.next();\n    this.destroy$.complete();\n  }\n}" },
            explanation: "Subjects are special Observables with multicast capability."
          }
        ]
      }
    ]
  },
  {
    id: "angular-38",
    number: 38,
    title: "Subjects & BehaviorSubjects",
    subtitle: "State with Observables",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["angular-37"],
    learningObjectives: ["Use Subjects for state", "Implement BehaviorSubject", "Share data with subjects"],
    sections: [
      {
        id: "angular-38-1",
        title: "Subjects in Practice",
        whyItMatters: "State management foundation.",
        codeExamples: [
          {
            id: "angular-38-ex1",
            title: "Subject State",
            description: "State management",
            code: { javascript: "// Service with BehaviorSubject for state\n@Injectable({ providedIn: 'root' })\nexport class CartService {\n  private cartItems = new BehaviorSubject<CartItem[]>([]);\n\n  // Expose as observable\n  cartItems$ = this.cartItems.asObservable();\n\n  addItem(item: CartItem) {\n    const current = this.cartItems.getValue();\n    this.cartItems.next([...current, item]);\n  }\n\n  removeItem(id: number) {\n    const current = this.cartItems.getValue();\n    this.cartItems.next(current.filter(i => i.id !== id));\n  }\n\n  // In component - use async pipe\n  // <div *ngFor=\"let item of cartService.cartItems$ | async\">\n  // </div>\n}" },
            explanation: "BehaviorSubject holds current state and emits to new subscribers."
          }
        ]
      }
    ]
  },
  {
    id: "angular-39",
    number: 39,
    title: "RxJS Operators",
    subtitle: "Transform and combine",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["angular-38"],
    learningObjectives: ["Map and filter", "Combine streams", "Error handling"],
    sections: [
      {
        id: "angular-39-1",
        title: "Common RxJS Operators",
        whyItMatters: "Transform data streams.",
        codeExamples: [
          {
            id: "angular-39-ex1",
            title: "Operators",
            description: "RxJS transform",
            code: { javascript: "import { map, filter, tap, catchError, switchMap, mergeMap, concatMap } from 'rxjs/operators';\n\n// tap - side effects without altering stream\nthis.http.get('/api/data').pipe(\n  tap(data => console.log('Fetched:', data)),\n  map(data => data.items)  // Transform\n).subscribe();\n\n// switchMap - cancel previous (search)\nsearchTerm$.pipe(\n  debounceTime(300),\n  distinctUntilChanged(),\n  switchMap(term => this.http.get(`/api/search?q=${term}`))\n).subscribe();\n\n// mergeMap - concurrent (parallel)\nthis.http.get('/api/users').pipe(\n  mergeMap(users => from(users)),\n  mergeMap(user => this.http.get(`/api/users/${user.id}/posts`))\n).subscribe();\n\n// catchError - handle errors\nthis.http.get('/api/data').pipe(\n  catchError(err => {\n    console.error(err);\n    return of(defaultValue);  // Return fallback\n  })\n).subscribe();" },
            explanation: "switchMap for search (cancels stale), mergeMap for parallel ops."
          }
        ]
      }
    ]
  },
  {
    id: "angular-40",
    number: 40,
    title: "Angular Signals",
    subtitle: "Reactive state (Angular 16+)",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["angular-39"],
    learningObjectives: ["Create signals", "Compute derived state", "Use effects"],
    sections: [
      {
        id: "angular-40-1",
        title: "Signals Basics",
        whyItMatters: "New reactive primitive in Angular 16+.",
        codeExamples: [
          {
            id: "angular-40-ex1",
            title: "Signals",
            description: "Reactive state",
            code: { javascript: "import { signal, computed, effect } from '@angular/core';\n\n@Component({})\nexport class CounterComponent {\n  // Basic signal\n  count = signal(0);\n\n  // Computed - derived value\n  doubleCount = computed(() => this.count() * 2);\n  isEven = computed(() => this.count() % 2 === 0);\n\n  // Effect - side effect when signal changes\n  constructor() {\n    effect(() => {\n      console.log('Count changed:', this.count());\n    });\n  }\n\n  increment() {\n    this.count.update(c => c + 1);  // Or: this.count.set(c + 1)\n  }\n\n  // In template, use as function: {{ count() }}\n}" },
            explanation: "Signals are synchronous, fine-grained reactivity."
          }
        ]
      }
    ]
  },
  {
    id: "angular-41",
    number: 41,
    title: "NgRx Introduction",
    subtitle: "State management library",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["angular-40"],
    learningObjectives: ["Understand store pattern", "Create actions", "Implement reducers"],
    sections: [
      {
        id: "angular-41-1",
        title: "NgRx Basics",
        whyItMatters: "Predictable state management for large apps.",
        codeExamples: [
          {
            id: "angular-41-ex1",
            title: "NgRx Setup",
            description: "Store pattern",
            code: { javascript: "import { createAction, props, createReducer, on } from '@ngrx/store';\n\n// Actions\nexport const loadUsers = createAction('[Users] Load Users');\nexport const loadUsersSuccess = createAction(\n  '[Users] Load Users Success',\n  props<{ users: User[] }>()\n);\nexport const loadUsersFailure = createAction(\n  '[Users] Load Users Failure',\n  props<{ error: string }>()\n);\n\n// Reducer\nexport interface UserState {\n  users: User[];\n  loading: boolean;\n  error: string | null;\n}\n\nconst initialState: UserState = {\n  users: [],\n  loading: false,\n  error: null\n};\n\nexport const userReducer = createReducer(\n  initialState,\n  on(loadUsers, state => ({ ...state, loading: true })),\n  on(loadUsersSuccess, (state, { users }) => ({\n    ...state,\n    users,\n    loading: false\n  }))\n);" },
            explanation: "NgRx implements Redux pattern: actions -> reducer -> state."
          }
        ]
      }
    ]
  },
  {
    id: "angular-42",
    number: 42,
    title: "Global State Management",
    subtitle: "App-wide state",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-41"],
    learningObjectives: ["Set up NgRx store", "Dispatch actions", "Select state"],
    sections: [
      {
        id: "angular-42-1",
        title: "NgRx in Components",
        whyItMatters: "Connect components to store.",
        codeExamples: [
          {
            id: "angular-42-ex1",
            title: "Store Integration",
            description: "Use store",
            code: { javascript: "import { Store } from '@ngrx/store';\nimport { selectAllUsers } from './user.selectors';\n\n@Component({\n  template: `\n    <div *ngIf=\"loading$ | async\">Loading...</div>\n    <div *ngFor=\"let user of users$ | async\">{{ user.name }}</div>\n  `\n})\nexport class UserListComponent {\n  users$ = this.store.select(selectAllUsers);\n  loading$ = this.store.select(selectLoading);\n\n  constructor(private store: Store) {}\n\n  loadUsers() {\n    this.store.dispatch(loadUsers());\n  }\n}\n\n// Provide store in app.config.ts\nimport { provideStore } from '@ngrx/store';\nexport const appConfig: ApplicationConfig = {\n  providers: [\n    provideStore({ users: userReducer })\n  ]\n};" },
            explanation: "Components select state via selectors, dispatch actions to update."
          }
        ]
      }
    ]
  },
  {
    id: "angular-43",
    number: 43,
    partLabel: "Part 5: Advanced Angular",
    title: "Change Detection",
    subtitle: "How Angular updates UI",
    difficulty: "Advanced" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["angular-42"],
    learningObjectives: ["Understand change detection", "OnPush strategy", "Zone.js"],
    sections: [
      {
        id: "angular-43-1",
        title: "Change Detection Basics",
        whyItMatters: "Performance optimization starts here.",
        codeExamples: [
          {
            id: "angular-43-ex1",
            title: "Change Detection",
            description: "OnPush strategy",
            code: { javascript: "@Component({\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  template: `{{ data.name }}`\n})\nexport class OptimizedComponent {\n  // OnPush only checks when:\n  // - Input reference changes\n  // - Event handler fires\n  // - Async pipe emits\n  // - Manual cd.markForCheck()\n}\n\n// Manual change detection\nimport { ChangeDetectorRef } from '@angular/core';\n\n@Component({})\nexport class ManualCdComponent {\n  constructor(private cdr: ChangeDetectorRef) {}\n\n  updateData() {\n    this.data = fetchData();\n    this.cdr.markForCheck();  // For OnPush\n  }\n}" },
            explanation: "OnPush drastically reduces change detection cycles."
          }
        ]
      }
    ]
  },
  {
    id: "angular-44",
    number: 44,
    title: "Angular Lifecycle Hooks",
    subtitle: "Component lifecycle",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-43"],
    learningObjectives: ["Use ngOnInit", "Implement ngOnDestroy", "Handle changes"],
    sections: [
      {
        id: "angular-44-1",
        title: "Lifecycle Hooks",
        whyItMatters: "Execute code at right times.",
        codeExamples: [
          {
            id: "angular-44-ex1",
            title: "Lifecycle",
            description: "Component hooks",
            code: { javascript: "@Component({ standalone: true })\nexport class LifecycleComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {\n  @Input() data: any;\n\n  ngOnInit() {\n    // Called once after first ngOnChanges\n    console.log('Component initialized');\n  }\n\n  ngOnChanges(changes: SimpleChanges) {\n    // Called when @Input changes\n    console.log('Input changed:', changes);\n  }\n\n  ngAfterViewInit() {\n    // Called after view initializes\n    console.log('View ready');\n  }\n\n  ngOnDestroy() {\n    // Called before component destroyed\n    // Clean up subscriptions, intervals\n    console.log('Component destroyed');\n  }\n}\n\n// Don't forget to implement interfaces" },
            explanation: "Hooks run in predictable order: constructor -> ngOnChanges -> ngOnInit -> etc."
          }
        ]
      }
    ]
  },
  {
    id: "angular-45",
    number: 45,
    title: "Content Projection",
    subtitle: "ng-content and slots",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-44"],
    learningObjectives: ["Use ng-content", "Multi-slot projection", "Conditional projection"],
    sections: [
      {
        id: "angular-45-1",
        title: "Content Projection",
        whyItMatters: "Build reusable flexible components.",
        codeExamples: [
          {
            id: "angular-45-ex1",
            title: "Projection",
            description: "ng-content",
            code: { javascript: "// Card component with projection\n@Component({\n  selector: 'app-card',\n  standalone: true,\n  template: `\n    <div class=\"card\">\n      <header>\n        <ng-content select=\"[header]\"></ng-content>\n      </header>\n      <body>\n        <ng-content></ng-content>  <!-- Default slot -->\n      </body>\n      <footer>\n        <ng-content select=\"[footer]\"></ng-content>\n      </footer>\n    </div>\n  `\n})\nexport class CardComponent {}\n\n// Usage\n@Component({\n  template: `\n    <app-card>\n      <h2 header>My Card</h2>\n      <p>Card body content</p>\n      <button footer>Action</button>\n    </app-card>\n  `\n})\nexport class ParentComponent {}" },
            explanation: "Select attributes filter which content goes where."
          }
        ]
      }
    ]
  },
  {
    id: "angular-46",
    number: 46,
    title: "ViewChild and ContentChild",
    subtitle: "Access child elements",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-45"],
    learningObjectives: ["Use ViewChild", "Use ContentChild", "Access DOM elements"],
    sections: [
      {
        id: "angular-46-1",
        title: "Child References",
        whyItMatters: "Access child components and elements.",
        codeExamples: [
          {
            id: "angular-46-ex1",
            title: "ViewChild/ContentChild",
            description: "Child access",
            code: { javascript: "import { ViewChild, ContentChild, ElementRef, AfterViewInit } from '@angular/core';\n\n@Component({\n  selector: 'app-parent',\n  standalone: true,\n  imports: [ChildComponent],\n  template: `\n    <app-child #childRef></app-child>\n    <div #divRef>Content div</div>\n    <ng-content></ng-content>  <!-- ContentChild -->\n  `\n})\nexport class ParentComponent implements AfterViewInit {\n  @ViewChild('childRef') child!: ChildComponent;\n  @ViewChild('divRef') divEl!: ElementRef;\n  @ContentChild(ChildComponent) contentChild!: ChildComponent;\n\n  ngAfterViewInit() {\n    // ViewChild available here\n    this.child.doSomething();\n    this.divEl.nativeElement.style.color = 'blue';\n  }\n}\n\n// Or use static: true for access in ngOnInit\n@ViewChild('childRef', { static: true }) child!: ChildComponent;" },
            explanation: "ViewChild queries template, ContentChild queries projected content."
          }
        ]
      }
    ]
  },
  {
    id: "angular-47",
    number: 47,
    title: "Standalone APIs",
    subtitle: "Modern Angular architecture",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-46"],
    learningObjectives: ["Use standalone components", "Migrate from NgModule", "Bootstrapping"],
    sections: [
      {
        id: "angular-47-1",
        title: "Standalone Components",
        whyItMatters: "Angular 14+ default - no NgModule required.",
        codeExamples: [
          {
            id: "angular-47-ex1",
            title: "Standalone",
            description: "No NgModule",
            code: { javascript: "// Standalone component\n@Component({\n  selector: 'app-standalone',\n  standalone: true,\n  imports: [CommonModule, RouterModule],\n  template: `<h1>{{ title }}</h1>`\n})\nexport class StandaloneComponent {\n  title = 'I am standalone!';\n}\n\n// Bootstrap standalone\nimport { bootstrapApplication } from '@angular/platform-browser';\nimport { provideRouter } from '@angular/router';\n\nbootstrapApplication(StandaloneComponent, {\n  providers: [\n    provideRouter(routes),\n    provideHttpClient()\n  ]\n}).catch(err => console.error(err));\n\n// Lazy load standalone\n{\n  path: 'feature',\n  loadComponent: () => import('./feature/feature.component')\n    .then(m => m.FeatureComponent)\n}" },
            explanation: "Standalone components import what they need - no module boilerplate."
          }
        ]
      }
    ]
  },
  {
    id: "angular-48",
    number: 48,
    title: "Server-side Rendering (SSR)",
    subtitle: "Angular Universal",
    difficulty: "Advanced" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["angular-47"],
    learningObjectives: ["Enable SSR", "Handle hydration", "SEO benefits"],
    sections: [
      {
        id: "angular-48-1",
        title: "SSR Basics",
        whyItMatters: "SEO and performance for initial load.",
        codeExamples: [
          {
            id: "angular-48-ex1",
            title: "SSR Setup",
            description: "Server rendering",
            code: { javascript: "// Enable SSR with Angular 17+\n// ng add @angular/ssr\n\n// app.config.ts\nimport { provideClientHydration } from '@angular/platform-browser';\n\nexport const appConfig: ApplicationConfig = {\n  providers: [\n    provideClientHydration()  // Enables hydration\n  ]\n};\n\n// In component - check if server/browser\nimport { isPlatformBrowser, isPlatformServer } from '@angular/common';\nimport { Inject, PLATFORM_ID } from '@angular/core';\n\n@Component({})\nexport class PlatformComponent {\n  constructor(@Inject(PLATFORM_ID) private platformId: Object) {\n    if (isPlatformBrowser(this.platformId)) {\n      // Client-only code\n      this.initClient();\n    }\n    if (isPlatformServer(this.platformId)) {\n      // Server-only code\n    }\n  }\n}" },
            explanation: "SSR renders HTML on server, hydration makes it interactive on client."
          }
        ]
      }
    ]
  },
  {
    id: "angular-49",
    number: 49,
    title: "Angular Universal",
    subtitle: "SSR implementation",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-48"],
    learningObjectives: ["Use TransferState", "Handle server requests", "Prerendering"],
    sections: [
      {
        id: "angular-49-1",
        title: "Universal Features",
        whyItMatters: "Optimize SSR performance.",
        codeExamples: [
          {
            id: "angular-49-ex1",
            title: "TransferState",
            description: "Avoid double fetch",
            code: { javascript: "import { TransferState, makeStateKey } from '@angular/platform-browser';\n\nconst USER_KEY = makeStateKey<User[]>('USER_DATA');\n\n@Component({})\nexport class UserComponent {\n  constructor(\n    private http: HttpClient,\n    private transferState: TransferState\n  ) {}\n\n  ngOnInit() {\n    // Check if data already transferred from server\n    if (this.transferState.hasKey(USER_KEY)) {\n      this.users = this.transferState.get(USER_KEY, []);\n    } else {\n      this.http.get<User[]>('/api/users').subscribe(data => {\n        this.users = data;\n        // Store for transfer to client\n        this.transferState.set(USER_KEY, data);\n      });\n    }\n  }\n}\n\n// server.ts - custom server for Express/Node\nimport { APP_BASE_HREF } from '@angular/common';\nimport { renderApplication } from '@angular/platform-server';" },
            explanation: "TransferState prevents fetching same data twice (server + client)."
          }
        ]
      }
    ]
  },
  {
    id: "angular-50",
    number: 50,
    title: "Performance Optimization",
    subtitle: "Speed up Angular apps",
    difficulty: "Advanced" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["angular-49"],
    learningObjectives: ["Profile apps", "Optimize change detection", "Lazy load"],
    sections: [
      {
        id: "angular-50-1",
        title: "Performance",
        whyItMatters: "User experience depends on speed.",
        codeExamples: [
          {
            id: "angular-50-ex1",
            title: "Optimization",
            description: "Speed techniques",
            code: { javascript: "// 1. OnPush everywhere\n@Component({ changeDetection: ChangeDetectionStrategy.OnPush })\n\nexport class FastComponent {}\n\n// 2. Track functions in @for\n@for (item of items; track item.id) { }\n\n// 3. Destroy$ pattern\nprivate destroy$ = new Subject<void>();\ndata$.pipe(takeUntil(this.destroy$)).subscribe();\n\n// 4. Pure pipes - no side effects\n@Pipe({ name: 'myPipe', pure: true })\n\n// 5. Run outside Angular zone for heavy work\nimport { NgZone } from '@angular/core';\n\nthis.ngZone.runOutsideAngular(() => {\n  // Heavy computation - no change detection\n  this.processHeavyData();\n});\n\n// 6. Virtual scrolling for long lists\n// <cdk-virtual-scroll-viewport itemSize=\"50\">" },
            explanation: "Multiple small optimizations compound into fast apps."
          }
        ]
      }
    ]
  },
  {
    id: "angular-51",
    number: 51,
    title: "Code Splitting",
    subtitle: "Reduce bundle size",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-50"],
    learningObjectives: ["Analyze bundles", "Split routes", "Dynamic imports"],
    sections: [
      {
        id: "angular-51-1",
        title: "Code Splitting",
        whyItMatters: "Faster initial load through smaller bundles.",
        codeExamples: [
          {
            id: "angular-51-ex1",
            title: "Bundle Optimization",
            description: "Split code",
            code: { javascript: "// Route-based splitting (already covered)\n// Dynamic imports for libraries\n\n// Only import heavy lib when needed\nasync function loadChartLib() {\n  const { Chart } = await import('chart.js');\n  return Chart;\n}\n\n// In component\n@Component({})\nexport class ChartComponent implements OnInit {\n  async ngOnInit() {\n    const Chart = await loadChartLib();\n    new Chart(this.canvas, { type: 'bar', data: this.data });\n  }\n}\n\n// angular.json - budgets\n\"configurations\": {\n  \"production\": {\n    \"budgets\": [\n      { \"type\": \"initial\", \"maximumWarning\": \"500kb\", \"maximumError\": \"1mb\" },\n      { \"type\": \"anyComponentStyle\", \"maximumWarning\": \"2kb\", \"maximumError\": \"4kb\" }\n    ]\n  }\n}" },
            explanation: "Analyze bundles: webpack-bundle-analyzer or Angular CLI budgets."
          }
        ]
      }
    ]
  },
  {
    id: "angular-52",
    number: 52,
    title: "Angular Animations",
    subtitle: "UI animations",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-51"],
    learningObjectives: ["Use @angular/animations", "Create triggers", "Complex sequences"],
    sections: [
      {
        id: "angular-52-1",
        title: "Animations",
        whyItMatters: "Polish user experience.",
        codeExamples: [
          {
            id: "angular-52-ex1",
            title: "Animation Example",
            description: "Angular animations",
            code: { javascript: "import { trigger, state, style, transition, animate } from '@angular/animations';\n\n@Component({\n  selector: 'app-animated',\n  standalone: true,\n  animations: [\n    trigger('fadeSlide', [\n      state('in', style({ opacity: 1, transform: 'translateX(0)' })),\n      state('out', style({ opacity: 0, transform: 'translateX(-20px)' })),\n      transition('out => in', animate('300ms ease-out')),\n      transition('in => out', animate('200ms ease-in'))\n    ]),\n    trigger('expand', [\n      transition(':enter', [\n        style({ height: 0, opacity: 0 }),\n        animate('300ms', style({ height: '*', opacity: 1 }))\n      ]),\n      transition(':leave', [\n        animate('200ms', style({ height: 0, opacity: 0 }))\n      ])\n    ])\n  ],\n  template: `\n    <div [@fadeSlide]=\"state\">Content</div>\n    <div [@expand]=\"expanded\">Expanding</div>\n  `\n})\nexport class AnimatedComponent {\n  state = 'in';\n  expanded = true;\n}" },
            explanation: "Animations module provides performant CSS-based animations."
          }
        ]
      }
    ]
  },
  {
    id: "angular-53",
    number: 53,
    title: "Internationalization (i18n)",
    subtitle: "Multi-language support",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-52"],
    learningObjectives: ["Set up i18n", "Mark translations", "Build locales"],
    sections: [
      {
        id: "angular-53-1",
        title: "i18n",
        whyItMatters: "Global applications need multiple languages.",
        codeExamples: [
          {
            id: "angular-53-ex1",
            title: "i18n Setup",
            description: "Translations",
            code: { javascript: "// Mark text for translation\n@Component({\n  template: `\n    <h1 i18n=\"Welcome greeting\">Welcome to our App</h1>\n    <p i18n=\"@@welcomeMessage\">Hello, {{ name }}</p>\n  `\n})\nexport class I18nComponent {\n  name = 'World';\n}\n\n// In index.html - load locale\n<script src=\"https://angular.io/generated/locales/fr.js\"></script>\n\n// angular.json\n\"i18n\": {\n  \"locales\": {\n    \"fr\": \"src/locale/messages.fr.xlf\",\n    \"es\": { \"translation\": \"src/locale/messages.es.xlf\" }\n  }\n},\n\"buildOptions\": {\n  \"localize\": true\n}\n\n// Build: ng build --localize" },
            explanation: "i18n uses XLIFF format - separate builds per locale."
          }
        ]
      }
    ]
  },
  {
    id: "angular-54",
    number: 54,
    title: "Accessibility",
    subtitle: "A11y in Angular",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-53"],
    learningObjectives: ["ARIA attributes", "Keyboard navigation", "Screen readers"],
    sections: [
      {
        id: "angular-54-1",
        title: "Accessibility",
        whyItMatters: "Inclusive design - everyone can use your app.",
        codeExamples: [
          {
            id: "angular-54-ex1",
            title: "A11y",
            description: "Accessible components",
            code: { javascript: "@Component({\n  template: `\n    <!-- Button with aria-label -->\n    <button \n      (click)=\"edit()\" \n      aria-label=\"Edit user {{ user.name }}\">\n      <span class=\"visually-hidden\">Edit</span>\n      <svg aria-hidden=\"true\">...</svg>\n    </button>\n\n    <!-- Form with error announced -->\n    <input \n      [attr.aria-invalid]=\"invalid\" \n      [attr.aria-describedby]=\"'emailError'\">\n    <div id=\"emailError\" role=\"alert\">Invalid email</div>\n\n    <!-- Skip link for keyboard -->\n    <a class=\"skip-link\" href=\"#main\">Skip to content</a>\n\n    <!-- Focus management -->\n    <button (click)=\"openModal()\" #openBtn></button>\n    <div \n      role=\"dialog\" \n      aria-modal=\"true\"\n      (keydown.escape)=\"close()\">\n    </div>\n  `\n})\nexport class A11yComponent {\n  openModal() {\n    // Focus first element in modal\n    this.modalRef.focusFirst();\n  }\n}" },
            explanation: "Use Angular CDK a11y module for accessible patterns."
          }
        ]
      }
    ]
  },
  {
    id: "angular-55",
    number: 55,
    title: "Web Workers",
    subtitle: "Background processing",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-54"],
    learningObjectives: ["Offload computation", "Communicate with worker", "Parallel processing"],
    sections: [
      {
        id: "angular-55-1",
        title: "Web Workers",
        whyItMatters: "Keep UI responsive with heavy computation.",
        codeExamples: [
          {
            id: "angular-55-ex1",
            title: "Worker",
            description: "Background tasks",
            code: { javascript: "// src/app/workers/data.worker.ts\naddEventListener('message', ({ data }) => {\n  // Heavy computation\n  const result = processLargeData(data);\n  postMessage(result);\n});\n\n// Component using worker\n@Component({})\nexport class DataProcessorComponent {\n  private worker: Worker | null = null;\n\n  ngOnInit() {\n    this.worker = new Worker(\n      new URL('../workers/data.worker.ts', import.meta.url)\n    );\n\n    this.worker.onmessage = ({ data }) => {\n      console.log('Result:', data);\n    };\n\n    this.worker.postMessage(this.largeDataset);\n  }\n\n  ngOnDestroy() {\n    this.worker?.terminate();\n  }\n}\n\n// Angular CLI: ng generate web-worker app/workers/data" },
            explanation: "Web Workers run in separate thread - no UI blocking."
          }
        ]
      }
    ]
  },
  {
    id: "angular-56",
    number: 56,
    title: "PWA with Angular",
    subtitle: "Progressive Web App",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-55"],
    learningObjectives: ["Add service worker", "Offline support", "Installable"],
    sections: [
      {
        id: "angular-56-1",
        title: "PWA",
        whyItMatters: "App-like experience, offline capable.",
        codeExamples: [
          {
            id: "angular-56-ex1",
            title: "PWA Setup",
            description: "Service worker",
            code: { javascript: "// Add PWA: ng add @angular/pwa\n\n// ngsw-config.json\n{\n  \"$schema\": \"./node_modules/@angular/service-worker/config/schema.json\",\n  \"index\": \"/index.html\",\n  \"assetGroups\": [\n    {\n      \"name\": \"app\",\n      \"installMode\": \"prefetch\",\n      \"resources\": {\n        \"files\": [\n          \"/favicon.ico\",\n          \"/index.html\",\n          \"/*.css\",\n          \"/*.js\"\n        ]\n      }\n    },\n    {\n      \"name\": \"assets\",\n      \"installMode\": \"lazy\",\n      \"updateMode\": \"prefetch\",\n      \"resources\": {\n        \"files\": [\n          \"/assets/**\",\n          \"/*.(svg|cur|jpg|jpeg|png|apng|webp|avif|gif|otf|ttf|woff|woff2)\"\n        ]\n      }\n    }\n  ],\n  \"dataGroups\": [\n    {\n      \"name\": \"api-freshness\",\n      \"urls\": [\"/api/**\"],\n      \"cacheConfig\": {\n        \"strategy\": \"freshness\",\n        \"maxSize\": 100,\n        \"maxAge\": \"1d\",\n        \"timeout\": \"5s\"\n      }\n    }\n  ]\n}" },
            explanation: "PWA provides offline caching, push notifications, install prompt."
          }
        ]
      }
    ]
  },
  {
    id: "angular-57",
    number: 57,
    title: "Security Best Practices",
    subtitle: "Secure Angular apps",
    difficulty: "Advanced" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["angular-56"],
    learningObjectives: ["Prevent XSS", "CSRF protection", "Safe APIs"],
    sections: [
      {
        id: "angular-57-1",
        title: "Security",
        whyItMatters: "Protect users from attacks.",
        codeExamples: [
          {
            id: "angular-57-ex1",
            title: "Security",
            description: "Angular security",
            code: { javascript: "// 1. Prevent XSS - Angular sanitizes by default\n@Component({\n  template: `<div>{{ userInput }}</div>`  // Safe\n})\nexport class SafeComponent {\n  userInput = '<script>alert(1)</script>';  // Sanitized\n}\n\n// For trusted HTML, use DomSanitizer\nimport { DomSanitizer } from '@angular/platform-browser';\nconstructor(private sanitizer: DomSanitizer) {}\nget sanitizedHtml() {\n  return this.sanitizer.bypassSecurityTrustHtml(this.trustedHtml);\n}\n\n// 2. Use HTTP interceptors for CSRF\nexport const csrfInterceptor: HttpInterceptorFn = (req, next) => {\n  const token = this.cookieService.get('CSRF_TOKEN');\n  if (token) {\n    req = req.clone({ setHeaders: { 'X-XSRF-TOKEN': token } });\n  }\n  return next(req);\n};\n\n// 3. Use Content Security Policy meta tag" },
            explanation: "Angular blocks most XSS by default - don't bypass unless certain."
          }
        ]
      }
    ]
  },
  {
    id: "angular-58",
    number: 58,
    title: "Angular Architecture Patterns",
    subtitle: "Enterprise patterns",
    difficulty: "Advanced" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["angular-57"],
    learningObjectives: ["Smart/dumb components", "Facade pattern", "Event-driven architecture"],
    sections: [
      {
        id: "angular-58-1",
        title: "Architecture",
        whyItMatters: "Scalable enterprise structure.",
        codeExamples: [
          {
            id: "angular-58-ex1",
            title: "Patterns",
            description: "Architecture",
            code: { javascript: "// Smart (container) vs Dumb (presentational)\n\n// Dumb - only inputs/outputs, no service injection\n@Component({\n  selector: 'app-user-list',\n  standalone: true,\n  inputs: ['users'],\n  outputs: ['userSelected'],\n  template: `\n    <app-user-card \n      *ngFor=\"let user of users\"\n      [user]=\"user\"\n      (select)=\"userSelected.emit($event)\">\n    </app-user-card>\n  `\n})\nexport class UserListComponent {}  // Pure UI\n\n// Smart - handles logic, services\n@Component({\n  standalone: true,\n  imports: [UserListComponent],\n  template: `<app-user-list [users]=\"users$ | async\"></app-user-list>`\n})\nexport class UserPageComponent {\n  users$ = this.userService.getUsers();\n  constructor(private userService: UserService) {}\n}\n\n// Facade - simplify complex state\n@Injectable({ providedIn: 'root' })\nexport class UserFacade {\n  users$ = this.store.select(selectUsers);\n  loading$ = this.store.select(selectLoading);\n\n  loadUsers() { this.store.dispatch(loadUsers()); }\n}" },
            explanation: "Clean separation: containers manage state, presentational just render."
          }
        ]
      }
    ]
  },
  {
    id: "angular-59",
    number: 59,
    partLabel: "Part 6: Testing & Deployment",
    title: "Unit Testing Components",
    subtitle: "Test components",
    difficulty: "Advanced" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["angular-58"],
    learningObjectives: ["Setup Jest/Jasmine", "Test component logic", "Test templates"],
    sections: [
      {
        id: "angular-59-1",
        title: "Component Testing",
        whyItMatters: "Verify component behavior.",
        codeExamples: [
          {
            id: "angular-59-ex1",
            title: "Component Test",
            description: "TestBed",
            code: { javascript: "import { ComponentFixture, TestBed } from '@angular/core/testing';\nimport { GreetingComponent } from './greeting.component';\n\ndescribe('GreetingComponent', () => {\n  let component: GreetingComponent;\n  let fixture: ComponentFixture<GreetingComponent>;\n\n  beforeEach(async () => {\n    await TestBed.configureTestingModule({\n      imports: [GreetingComponent]\n    }).compileComponents();\n\n    fixture = TestBed.createComponent(GreetingComponent);\n    component = fixture.componentInstance;\n    fixture.detectChanges();\n  });\n\n  it('should create', () => {\n    expect(component).toBeTruthy();\n  });\n\n  it('should render name in template', () => {\n    component.name = 'Test';\n    fixture.detectChanges();\n    const compiled = fixture.nativeElement as HTMLElement;\n    expect(compiled.querySelector('h1')?.textContent).toContain('Test');\n  });\n\n  it('should call onClick when button clicked', () => {\n    spyOn(component, 'onClick');\n    const button = fixture.nativeElement.querySelector('button');\n    button.click();\n    expect(component.onClick).toHaveBeenCalled();\n  });\n});" },
            explanation: "TestBed creates test module, fixture provides component access."
          }
        ]
      }
    ]
  },
  {
    id: "angular-60",
    number: 60,
    title: "Testing Services",
    subtitle: "Test services",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-59"],
    learningObjectives: ["Test HTTP services", "Mock dependencies", "Test Observables"],
    sections: [
      {
        id: "angular-60-1",
        title: "Service Testing",
        whyItMatters: "Services contain core logic.",
        codeExamples: [
          {
            id: "angular-60-ex1",
            title: "Service Test",
            description: "Test services",
            code: { javascript: "import { TestBed } from '@angular/core/testing';\nimport { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';\nimport { UserService } from './user.service';\n\ndescribe('UserService', () => {\n  let service: UserService;\n  let httpMock: HttpTestingController;\n\n  beforeEach(() => {\n    TestBed.configureTestingModule({\n      imports: [HttpClientTestingModule],\n      providers: [UserService]\n    });\n    service = TestBed.inject(UserService);\n    httpMock = TestBed.inject(HttpTestingController);\n  });\n\n  afterEach(() => {\n    httpMock.verify();\n  });\n\n  it('should return users', () => {\n    const mockUsers = [{ id: 1, name: 'Alice' }];\n\n    service.getUsers().subscribe(users => {\n      expect(users).toEqual(mockUsers);\n    });\n\n    const req = httpMock.expectOne('/api/users');\n    req.flush(mockUsers);\n  });\n});" },
            explanation: "HttpTestingModule mocks HTTP, verify no pending requests after."
          }
        ]
      }
    ]
  },
  {
    id: "angular-61",
    number: 61,
    title: "TestBed",
    subtitle: "Testing module config",
    difficulty: "Advanced" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["angular-60"],
    learningObjectives: ["Configure TestBed", "Import modules", "Override providers"],
    sections: [
      {
        id: "angular-61-1",
        title: "TestBed Deep Dive",
        whyItMatters: "Complex test configuration.",
        codeExamples: [
          {
            id: "angular-61-ex1",
            title: "TestBed",
            description: "Advanced config",
            code: { javascript: "beforeEach(async () => {\n  await TestBed.configureTestingModule({\n    declarations: [MyComponent, ChildComponent],\n    imports: [ReactiveFormsModule, HttpClientTestingModule],\n    providers: [\n      { provide: AuthService, useValue: mockAuthService },\n      { provide: ApiService, useFactory: () => mockApiService }\n    ]\n  }).compileComponents();\n});\n\n// Override component's template\nTestBed.overrideComponent(MyComponent, {\n  set: { template: '<div>Mock Template</div>' }\n});\n\n// Spy on methods\nconst spy = jasmine.createSpyObj('ApiService', ['getData', 'saveData']);\nspy.getData.and.returnValue(of(mockData));\n\n// Test with Router\nimport { RouterTestingModule } from '@angular/router/testing';\nimports: [RouterTestingModule.withRoutes([])]" },
            explanation: "TestBed supports overrides for testing edge cases."
          }
        ]
      }
    ]
  },
  {
    id: "angular-62",
    number: 62,
    title: "Mocking APIs",
    subtitle: "Mock HTTP and services",
    difficulty: "Advanced" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["angular-61"],
    learningObjectives: ["Mock HTTP responses", "Create test doubles", "Simulate errors"],
    sections: [
      {
        id: "angular-62-1",
        title: "Mocking",
        whyItMatters: "Isolate units under test.",
        codeExamples: [
          {
            id: "angular-62-ex1",
            title: "Mocking",
            description: "Test doubles",
            code: { javascript: "// Spy on service method\nconst userServiceSpy = jasmine.createSpyObj('UserService', ['getUsers', 'saveUser']);\nuserServiceSpy.getUsers.and.returnValue(of(mockUsers));\n\n// Mock class\nclass MockAuthService {\n  isLoggedIn = false;\n  currentUser = null;\n  login = jasmine.createSpy('login').and.returnValue(of(true));\n  logout = jasmine.createSpy('logout');\n}\n\n// Provide in TestBed\nproviders: [\n  { provide: AuthService, useClass: MockAuthService }\n]\n\n// Http testing - simulate various scenarios\ntest('should handle error', () => {\n  service.getData().subscribe({\n    error: err => expect(err.status).toBe(500)\n  });\n\n  const req = httpMock.expectOne('/api/data');\n  req.flush('Error', { status: 500, statusText: 'Server Error' });\n});\n\n// Mock Router\nconst routerSpy = jasmine.createSpyObj('Router', ['navigate', 'createUrlTree']);" },
            explanation: "Jasmine spies replace real dependencies with controlled behavior."
          }
        ]
      }
    ]
  },
  {
    id: "angular-63",
    number: 63,
    title: "E2E Testing",
    subtitle: "Protractor/Playwright",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-62"],
    learningObjectives: ["Write E2E tests", "Test user flows", "Setup Playwright"],
    sections: [
      {
        id: "angular-63-1",
        title: "E2E Testing",
        whyItMatters: "Test full user journeys.",
        codeExamples: [
          {
            id: "angular-63-ex1",
            title: "E2E",
            description: "Playwright test",
            code: { javascript: "import { test, expect } from '@playwright/test';\n\ntest('user can login', async ({ page }) => {\n  await page.goto('/login');\n\n  await page.fill('[name=\"email\"]', 'user@test.com');\n  await page.fill('[name=\"password\"]', 'password123');\n  await page.click('button[type=\"submit\"]');\n\n  // Wait for redirect\n  await expect(page).toHaveURL('/dashboard');\n  await expect(page.locator('.user-name')).toContainText('User');\n});\n\ntest('shows error on invalid login', async ({ page }) => {\n  await page.goto('/login');\n\n  await page.fill('[name=\"email\"]', 'invalid');\n  await page.fill('[name=\"password\"]', 'wrong');\n  await page.click('button[type=\"submit\"]');\n\n  await expect(page.locator('.error')).toContainText('Invalid credentials');\n});\n\n// Run: npx playwright test" },
            explanation: "E2E tests run against real browser - test complete flows."
          }
        ]
      }
    ]
  },
  {
    id: "angular-64",
    number: 64,
    title: "Angular Build System",
    subtitle: "Build and optimization",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-63"],
    learningObjectives: ["Understand build process", "Configure budgets", "Build targets"],
    sections: [
      {
        id: "angular-64-1",
        title: "Build System",
        whyItMatters: "Production-ready builds.",
        codeExamples: [
          {
            id: "angular-64-ex1",
            title: "Build",
            description: "Angular build",
            code: { javascript: "// angular.json\n{\n  \"projects\": {\n    \"app\": {\n      \"architect\": {\n        \"build\": {\n          \"builder\": \"@angular-devkit/build-angular:application\",\n          \"options\": {\n            \"outputPath\": \"dist/app\",\n            \"index\": \"src/index.html\",\n            \"browser\": \"src/main.ts\",\n            \"polyfills\": [\"zone.js\"],\n            \"tsConfig\": \"tsconfig.app.json\"\n          },\n          \"configurations\": {\n            \"production\": {\n              \"optimization\": true,\n              \"outputHashing\": \"all\",\n              \"sourceMap\": false,\n              \"namedChunks\": false,\n              \"extractLicenses\": true\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\n// Build commands\nng build                    // Dev build\nng build --configuration production  // Production\nng build --watch           // Watch mode" },
            explanation: "Angular CLI uses webpack/esbuild under the hood."
          }
        ]
      }
    ]
  },
  {
    id: "angular-65",
    number: 65,
    title: "Environment Builds",
    subtitle: "Multi-environment config",
    difficulty: "Advanced" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["angular-64"],
    learningObjectives: ["Configure environments", "Use environment files", "Build for target"],
    sections: [
      {
        id: "angular-65-1",
        title: "Environments",
        whyItMatters: "Different configs for dev/staging/prod.",
        codeExamples: [
          {
            id: "angular-65-ex1",
            title: "Environments",
            description: "Multi-env",
            code: { javascript: "// src/environments/environment.ts\nexport const environment = {\n  production: false,\n  apiUrl: 'http://localhost:3000',\n  features: { enableDebug: true }\n};\n\n// src/environments/environment.prod.ts\nexport const environment = {\n  production: true,\n  apiUrl: 'https://api.production.com',\n  features: { enableDebug: false }\n};\n\n// Use\nimport { environment } from './environments/environment';\n\n@Injectable({ providedIn: 'root' })\nexport class ApiService {\n  private baseUrl = environment.apiUrl;\n}\n\n// angular.json config\n\"configurations\": {\n  \"production\": {\n    \"fileReplacements\": [\n      { \"replace\": \"src/environments/environment.ts\", \"with\": \"src/environments/environment.prod.ts\" }\n    ]\n  }\n}" },
            explanation: "Angular swaps environment file at build time based on config."
          }
        ]
      }
    ]
  },
  {
    id: "angular-66",
    number: 66,
    title: "CI/CD Pipelines",
    subtitle: "Automated deployments",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["angular-65"],
    learningObjectives: ["Setup GitHub Actions", "Configure pipeline", "Run tests in CI"],
    sections: [
      {
        id: "angular-66-1",
        title: "CI/CD",
        whyItMatters: "Automated testing and deployment.",
        codeExamples: [
          {
            id: "angular-66-ex1",
            title: "GitHub Actions",
            description: "CI pipeline",
            code: { javascript: "# .github/workflows/ci.yml\nname: CI\n\non: [push, pull_request]\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v3\n        with:\n          node-version: '20'\n          cache: 'npm'\n      - run: npm ci\n      - run: npm run lint\n      - run: npm run test\n      - run: npm run build\n\n  deploy:\n    needs: build\n    if: github.ref == 'refs/heads/main'\n    runs-on: ubuntu-latest\n    steps:\n      - run: npm run build -- --configuration production\n      - run: npm run deploy -- --prod" },
            explanation: "CI runs on every push - catches issues early."
          }
        ]
      }
    ]
  },
  {
    id: "angular-67",
    number: 67,
    title: "Deploying Angular Apps",
    subtitle: "Production deployment",
    difficulty: "Advanced" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["angular-66"],
    learningObjectives: ["Deploy to CDN", "Configure server", "SPA fallback"],
    sections: [
      {
        id: "angular-67-1",
        title: "Deployment",
        whyItMatters: "Get app to users.",
        codeExamples: [
          {
            id: "angular-67-ex1",
            title: "Deploy",
            description: "Various targets",
            code: { javascript: "// Static hosting - Vercel, Netlify, AWS S3/CloudFront\n// Just upload dist/ folder contents\n\n// Express server with Angular\nconst express = require('express');\nconst path = require('path');\n\nconst app = express();\napp.use(express.static(path.join(__dirname, 'dist/browser')));\n\n// SPA fallback - all routes to index.html\napp.get('*', (req, res) => {\n  res.sendFile(path.join(__dirname, 'dist/browser/index.html'));\n});\n\napp.listen(3000);\n\n// Nginx config\nserver {\n  location / {\n    root /var/www/app;\n    index index.html;\n    try_files $uri $uri/ /index.html;\n  }\n}" },
            explanation: "SPA needs server to redirect all routes to index.html."
          }
        ]
      }
    ]
  },
  {
    id: "angular-68",
    number: 68,
    title: "Production Monitoring",
    subtitle: "Track app health",
    difficulty: "Advanced" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["angular-67"],
    learningObjectives: ["Setup error tracking", "Performance monitoring", "Analytics"],
    sections: [
      {
        id: "angular-68-1",
        title: "Monitoring",
        whyItMatters: "Know when production breaks.",
        codeExamples: [
          {
            id: "angular-68-ex1",
            title: "Monitoring",
            description: "Production tools",
            code: { javascript: "// Sentry - error tracking\nimport * as Sentry from '@sentry/angular';\n\nSentry.init({\n  dsn: 'YOUR_SENTRY_DSN',\n  integrations: [new Sentry.BrowserTracing()]\n});\n\n// Error handler service\n@Injectable({ providedIn: 'root' })\nexport class ErrorHandler implements ErrorHandler {\n  handleError(error: Error) {\n    Sentry.captureException(error);\n    console.error('Error occurred:', error);\n  }\n}\n\n// Google Analytics\nimport { environment } from './environments/environment';\n\nexport class AnalyticsService {\n  trackEvent(category: string, action: string) {\n    gtag('event', action, { event_category: category });\n  }\n}" },
            explanation: "Monitor errors, performance (Core Web Vitals), and user behavior."
          }
        ]
      }
    ]
  },
  {
    id: "angular-69",
    number: 69,
    partLabel: "Part 7: Projects",
    title: "Project: Todo Application",
    subtitle: "Build complete Todo app",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 60,
    xpReward: 100,
    prerequisites: ["angular-68"],
    learningObjectives: ["Build CRUD app", "Component communication", "Local storage"],
    sections: [
      {
        id: "angular-69-1",
        title: "Todo App",
        whyItMatters: "Complete CRUD application.",
        codeExamples: [
          {
            id: "angular-69-ex1",
            title: "Todo Application",
            description: "Full CRUD",
            code: { javascript: "@Component({\n  selector: 'app-todo',\n  standalone: true,\n  imports: [FormsModule, CommonModule],\n  template: `\n    <input [(ngModel)]=\"newTodo\" (keyup.enter)=\"add()\" placeholder=\"Add todo\">\n    <ul>\n      @for (todo of todos; track todo.id) {\n        <li [class.completed]=\"todo.completed\">\n          <input type=\"checkbox\" [(ngModel)]=\"todo.completed\">\n          {{ todo.title }}\n          <button (click)=\"remove(todo.id)\">Delete</button>\n        </li>\n      }\n    </ul>\n  `\n})\nexport class TodoComponent {\n  todos: Todo[] = [];\n  newTodo = '';\n\n  add() {\n    if (!this.newTodo.trim()) return;\n    this.todos.push({\n      id: Date.now(),\n      title: this.newTodo,\n      completed: false\n    });\n    this.newTodo = '';\n    this.save();\n  }\n\n  remove(id: number) {\n    this.todos = this.todos.filter(t => t.id !== id);\n    this.save();\n  }\n\n  save() {\n    localStorage.setItem('todos', JSON.stringify(this.todos));\n  }\n}" },
            explanation: "Build full CRUD with persistence - classic beginner project."
          }
        ]
      }
    ]
  },
  {
    id: "angular-70",
    number: 70,
    title: "Project: Weather Dashboard",
    subtitle: "API integration project",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 60,
    xpReward: 100,
    prerequisites: ["angular-69"],
    learningObjectives: ["HTTP integration", "Signals", "Error handling"],
    sections: [
      {
        id: "angular-70-1",
        title: "Weather Dashboard",
        whyItMatters: "Real API integration.",
        codeExamples: [
          {
            id: "angular-70-ex1",
            title: "Weather Project",
            description: "API app",
            code: { javascript: "@Injectable({ providedIn: 'root' })\nexport class WeatherService {\n  private http = inject(HttpClient);\n  private apiKey = environment.weatherKey;\n\n  getWeather(city: string) {\n    return this.http.get<WeatherResponse>(\n      \\`https://api.openweathermap.org/data/2.5/weather?q=\\${city}&appid=\\${this.apiKey}\\`\n    ).pipe(\n      catchError(err => {\n        console.error('Weather API error:', err);\n        return of(null);\n      })\n    );\n  }\n}\n\n@Component({\n  selector: 'app-weather',\n  standalone: true,\n  imports: [FormsModule, CommonModule],\n  template: `\n    <input [(ngModel)]=\"city\" (keyup.enter)=\"search()\">\n    @if (weather(); as w) {\n      <div class=\"weather-card\">\n        <h2>{{ w.name }}</h2>\n        <p>{{ w.main.temp }}°C</p>\n        <img [src]=\"'https://openweathermap.org/img/w/' + w.weather[0].icon + '.png'\">\n      </div>\n    }\n  `\n})\nexport class WeatherComponent {\n  weatherService = inject(WeatherService);\n  city = signal('London');\n  weather = signal<WeatherResponse | null>(null);\n\n  search() {\n    this.weatherService.getWeather(this.city()).subscribe(w => this.weather.set(w));\n  }\n}" },
            explanation: "Real API with search, display, error handling - complete app."
          }
        ]
      }
    ]
  },
  {
    id: "angular-71",
    number: 71,
    title: "Project: Ecommerce Frontend",
    subtitle: "Full store experience",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 90,
    xpReward: 120,
    prerequisites: ["angular-70"],
    learningObjectives: ["Shopping cart", "Product listing", "Checkout flow"],
    sections: [
      {
        id: "angular-71-1",
        title: "Ecommerce Project",
        whyItMatters: "Complex state management.",
        codeExamples: [
          {
            id: "angular-71-ex1",
            title: "Ecommerce",
            description: "Full store",
            code: { javascript: "@Injectable({ providedIn: 'root' })\nexport class CartService {\n  items = signal<CartItem[]>([]);\n  total = computed(() => this.items().reduce((sum, i) => sum + i.price * i.qty, 0));\n\n  addItem(product: Product) {\n    this.items.update(items => {\n      const existing = items.find(i => i.id === product.id);\n      if (existing) {\n        return items.map(i => i.id === product.id ? {...i, qty: i.qty + 1} : i);\n      }\n      return [...items, { ...product, qty: 1 }];\n    });\n  }\n\n  removeItem(id: number) {\n    this.items.update(items => items.filter(i => i.id !== id));\n  }\n}\n\n@Component({\n  template: `\n    <app-product-list></app-product-list>\n    <app-cart-summary [total]=\"cart.total()\"></app-cart-summary>\n  `\n})\nexport class ShopComponent {\n  cart = inject(CartService);\n}" },
            explanation: "Ecommerce combines routing, state management, forms, services."
          }
        ]
      }
    ]
  },
  {
    id: "angular-72",
    number: 72,
    title: "Project: Admin Dashboard",
    subtitle: "Enterprise dashboard",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 90,
    xpReward: 120,
    prerequisites: ["angular-71"],
    learningObjectives: ["Layout system", "Data tables", "Charts integration"],
    sections: [
      {
        id: "angular-72-1",
        title: "Admin Dashboard",
        whyItMatters: "Enterprise-style app.",
        codeExamples: [
          {
            id: "angular-72-ex1",
            title: "Admin Panel",
            description: "Dashboard",
            code: { javascript: "@Component({\n  selector: 'app-admin-layout',\n  standalone: true,\n  imports: [RouterModule, CommonModule],\n  template: `\n    <div class=\"layout\">\n      <aside class=\"sidebar\">\n        <nav>\n          <a routerLink=\"/admin/users\" routerLinkActive=\"active\">Users</a>\n          <a routerLink=\"/admin/orders\" routerLinkActive=\"active\">Orders</a>\n          <a routerLink=\"/admin/products\" routerLinkActive=\"active\">Products</a>\n        </nav>\n      </aside>\n      <main class=\"content\">\n        <router-outlet></router-outlet>\n      </main>\n    </div>\n  `\n})\nexport class AdminLayoutComponent {}\n\n// Data table component\n@Component({\n  template: `\n    <table>\n      <thead><tr><th>Name</th><th>Email</th><th>Actions</th></tr></thead>\n      <tbody>\n        @for (user of data; track user.id) {\n          <tr>\n            <td>{{ user.name }}</td>\n            <td>{{ user.email }}</td>\n            <td><button (click)=\"edit(user)\">Edit</button></td>\n          </tr>\n        }\n      </tbody>\n    </table>\n  `\n})\nexport class DataTableComponent {\n  @Input() data: any[] = [];\n  @Output() editItem = new EventEmitter();\n}" },
            explanation: "Admin dashboards require tables, navigation, CRUD - enterprise standard."
          }
        ]
      }
    ]
  },
  {
    id: "angular-73",
    number: 73,
    title: "Project: Chat Application",
    subtitle: "Real-time messaging",
    difficulty: "Advanced" as const,
    estimatedMinutes: 90,
    xpReward: 130,
    prerequisites: ["angular-72"],
    learningObjectives: ["WebSocket integration", "Real-time updates", "UI state"],
    sections: [
      {
        id: "angular-73-1",
        title: "Chat App",
        whyItMatters: "Real-time communication.",
        codeExamples: [
          {
            id: "angular-73-ex1",
            title: "Chat Project",
            description: "Messaging",
            code: { javascript: "@Injectable({ providedIn: 'root' })\nexport class ChatService {\n  private socket = new WebSocket('ws://localhost:8080');\n\n  messages = signal<Message[]>([]);\n\n  constructor() {\n    this.socket.onmessage = (event) => {\n      const msg = JSON.parse(event.data);\n      this.messages.update(m => [...m, msg]);\n    };\n  }\n\n  send(message: string) {\n    this.socket.send(JSON.stringify({\n      text: message,\n      timestamp: Date.now(),\n      sender: this.currentUser\n    }));\n  }\n}\n\n@Component({\n  selector: 'app-chat',\n  standalone: true,\n  imports: [FormsModule, CommonModule],\n  template: `\n    <div class=\"messages\">\n      @for (msg of chat.messages(); track msg.timestamp) {\n        <div [class.mine]=\"msg.sender === currentUser\">\n          {{ msg.text }}\n          <span class=\"time\">{{ msg.timestamp | date:'shortTime' }}</span>\n        </div>\n      }\n    </div>\n    <input [(ngModel)]=\"newMessage\" (keyup.enter)=\"send()\">\n  `\n})\nexport class ChatComponent {\n  chat = inject(ChatService);\n  newMessage = '';\n  currentUser = 'me';\n  send() {\n    if (this.newMessage.trim()) {\n      this.chat.send(this.newMessage);\n      this.newMessage = '';\n    }\n  }\n}" },
            explanation: "Real-time with WebSocket - advanced but achievable."
          }
        ]
      }
    ]
  },
  {
    id: "angular-74",
    number: 74,
    title: "Project: Authentication System",
    subtitle: "Complete auth flow",
    difficulty: "Advanced" as const,
    estimatedMinutes: 90,
    xpReward: 130,
    prerequisites: ["angular-73"],
    learningObjectives: ["JWT handling", "Guards", "Token refresh"],
    sections: [
      {
        id: "angular-74-1",
        title: "Auth System",
        whyItMatters: "Security is critical.",
        codeExamples: [
          {
            id: "angular-74-ex1",
            title: "Auth Project",
            description: "Full auth",
            code: { javascript: "@Injectable({ providedIn: 'root' })\nexport class AuthService {\n  private tokenKey = 'auth_token';\n\n  get token() {\n    return localStorage.getItem(this.tokenKey);\n  }\n\n  get isAuthenticated() {\n    return !!this.token && !this.isTokenExpired();\n  }\n\n  private isTokenExpired(): boolean {\n    const token = this.token;\n    if (!token) return true;\n    const payload = JSON.parse(atob(token.split('.')[1]));\n    return payload.exp * 1000 < Date.now();\n  }\n\n  login(credentials: Credentials): Observable<AuthResponse> {\n    return this.http.post<AuthResponse>('/api/login', credentials).pipe(\n      tap(res => localStorage.setItem(this.tokenKey, res.token))\n    );\n  }\n\n  logout() {\n    localStorage.removeItem(this.tokenKey);\n  }\n}\n\nexport const authGuard: CanActivateFn = (route, state) => {\n  const auth = inject(AuthService);\n  return auth.isAuthenticated || inject(Router).createUrlTree(['/login']);\n};" },
            explanation: "Real auth with JWT, guards, token management - production quality."
          }
        ]
      }
    ]
  },
  {
    id: "angular-75",
    number: 75,
    title: "Project: Angular Blog CMS",
    subtitle: "Content management system",
    difficulty: "Advanced" as const,
    estimatedMinutes: 90,
    xpReward: 130,
    prerequisites: ["angular-74"],
    learningObjectives: ["Rich text editor", "Categories", "Publishing workflow"],
    sections: [
      {
        id: "angular-75-1",
        title: "Blog CMS",
        whyItMatters: "Full content platform.",
        codeExamples: [
          {
            id: "angular-75-ex1",
            title: "Blog Project",
            description: "CMS",
            code: { javascript: "@Injectable({ providedIn: 'root' })\nexport class BlogService {\n  private http = inject(HttpClient);\n\n  getPosts(): Observable<BlogPost[]> {\n    return this.http.get<BlogPost[]>('/api/posts');\n  }\n\n  getPost(id: string): Observable<BlogPost> {\n    return this.http.get<BlogPost>(\\`/api/posts/\\${id}\\`);\n  }\n\n  createPost(post: BlogPost): Observable<BlogPost> {\n    return this.http.post<BlogPost>('/api/posts', post);\n  }\n\n  updatePost(id: string, post: Partial<BlogPost>): Observable<BlogPost> {\n    return this.http.put<BlogPost>(\\`/api/posts/\\${id}\\`, post);\n  }\n}\n\n@Component({\n  selector: 'app-blog-editor',\n  standalone: true,\n  imports: [ReactiveFormsModule, FormsModule],\n  template: `\n    <form [formGroup]=\"form\" (ngSubmit)=\"save()\">\n      <input formControlName=\"title\" placeholder=\"Post title\">\n      <textarea formControlName=\"content\" placeholder=\"Write your post...\"></textarea>\n      <select formControlName=\"category\">\n        <option value=\"tech\">Tech</option>\n        <option value=\"lifestyle\">Lifestyle</option>\n      </select>\n      <button type=\"submit\">Publish</button>\n    </form>\n  `\n})\nexport class BlogEditorComponent {\n  form = this.fb.group({\n    title: ['', Validators.required],\n    content: ['', Validators.required],\n    category: ['tech']\n  });\n  constructor(private fb: FormBuilder) {}\n}" },
            explanation: "CMS needs forms, routing, CRUD, rich content - comprehensive project."
          }
        ]
      }
    ]
  },
  {
    id: "angular-76",
    number: 76,
    title: "Angular Challenge Set 1",
    subtitle: "Practice challenges",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 60,
    xpReward: 80,
    prerequisites: ["angular-75"],
    learningObjectives: ["Apply concepts", "Solve problems independently"],
    sections: [
      {
        id: "angular-76-1",
        title: "Challenges 1-10",
        whyItMatters: "Practice makes perfect.",
        codeExamples: [
          {
            id: "angular-76-ex1",
            title: "Challenge Set 1",
            description: "Practice problems",
            code: { javascript: "// Challenge 1: Counter with increment/decrement/reset\n// Challenge 2: Toggle button with state\n// Challenge 3: Display array with *ngFor\n// Challenge 4: Form with validation\n// Challenge 5: Service to fetch and display data\n// Challenge 6: Component with @Input/@Output\n// Challenge 7: Route with parameter\n// Challenge 8: Lazy load a feature\n// Challenge 9: Custom pipe\n// Challenge 10: Use Signal for state\n\n// Each challenge:\n// 1. Create working solution\n// 2. Test in playground\n// 3. Refactor for best practices" },
            explanation: "10 hands-on challenges covering fundamentals."
          }
        ]
      }
    ]
  },
  {
    id: "angular-77",
    number: 77,
    title: "Angular Challenge Set 2",
    subtitle: "Intermediate challenges",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 60,
    xpReward: 80,
    prerequisites: ["angular-76"],
    learningObjectives: ["Build more complex features", "Combine multiple concepts"],
    sections: [
      {
        id: "angular-77-1",
        title: "Challenges 11-20",
        whyItMatters: "Push your skills.",
        codeExamples: [
          {
            id: "angular-77-ex1",
            title: "Challenge Set 2",
            description: "More practice",
            code: { javascript: "// Challenge 11: Infinite scroll list\n// Challenge 12: Modal component\n// Challenge 13: Tab navigation\n// Challenge 14: Search with debounce\n// Challenge 15: HTTP error handling\n// Challenge 16: Route guards\n// Challenge 17: Reactive form with custom validator\n// Challenge 18: Dynamic form generation\n// Challenge 19: RxJS operators practice\n// Challenge 20: State management with signals" },
            explanation: "More complex combinations of Angular features."
          }
        ]
      }
    ]
  },
  {
    id: "angular-78",
    number: 78,
    title: "Angular Challenge Set 3",
    subtitle: "Advanced challenges",
    difficulty: "Advanced" as const,
    estimatedMinutes: 60,
    xpReward: 80,
    prerequisites: ["angular-77"],
    learningObjectives: ["Master advanced patterns", "Build production-ready code"],
    sections: [
      {
        id: "angular-78-1",
        title: "Challenges 21-30",
        whyItMatters: "Expert level practice.",
        codeExamples: [
          {
            id: "angular-78-ex1",
            title: "Challenge Set 3",
            description: "Advanced problems",
            code: { javascript: "// Challenge 21: Implement auth from scratch\n// Challenge 22: State management with NgRx\n// Challenge 23: SSR setup\n// Challenge 24: Unit testing complete component\n// Challenge 25: E2E test user flow\n// Challenge 26: Performance optimization\n// Challenge 27: PWA implementation\n// Challenge 28: Custom animation\n// Challenge 29: Web Worker for heavy computation\n// Challenge 30: Deploy to production" },
            explanation: "End-to-end production challenges."
          }
        ]
      }
    ]
  },
  {
    id: "angular-79",
    number: 79,
    title: "Enterprise Architecture Simulation",
    subtitle: "Large-scale app structure",
    difficulty: "Advanced" as const,
    estimatedMinutes: 90,
    xpReward: 120,
    prerequisites: ["angular-78"],
    learningObjectives: ["Design enterprise structure", "Apply patterns", "Scale applications"],
    sections: [
      {
        id: "angular-79-1",
        title: "Enterprise App",
        whyItMatters: "Real-world scale.",
        codeExamples: [
          {
            id: "angular-79-ex1",
            title: "Enterprise Structure",
            description: "Large app",
            code: { javascript: "// Feature-based folder structure\nsrc/\n├── app/\n│   ├── core/              # Singleton services, guards, interceptors\n│   │   ├── auth/\n│   │   ├── http/\n│   │   └── guards/\n│   ├── shared/            # Reusable components, pipes, directives\n│   │   ├── components/\n│   │   ├── pipes/\n│   │   └── directives/\n│   ├── features/          # Lazy-loaded features\n│   │   ├── dashboard/\n│   │   ├── products/\n│   │   ├── orders/\n│   │   └── users/\n│   ├── store/             # NgRx state\n│   └── app.routes.ts\n\n// Each feature has:\n// - components/\n// - services/\n// - models/\n// - routes.ts" },
            explanation: "Enterprise apps use feature-based architecture and shared code."
          }
        ]
      }
    ]
  },
  {
    id: "angular-80",
    number: 80,
    title: "Angular Mastery Recap + Certificate Prep",
    subtitle: "Final review and certification",
    difficulty: "Advanced" as const,
    estimatedMinutes: 90,
    xpReward: 150,
    prerequisites: ["angular-79"],
    learningObjectives: ["Review all concepts", "Prepare for certification", "Career readiness"],
    sections: [
      {
        id: "angular-80-1",
        title: "Mastery Review",
        whyItMatters: "Complete your Angular journey.",
        codeExamples: [
          {
            id: "angular-80-ex1",
            title: "Final Recap",
            description: "Review everything",
            code: { javascript: "// Topics covered:\n// ✓ Angular fundamentals\n// ✓ Components & templates\n// ✓ Services & DI\n// ✓ Routing\n// ✓ Forms (template + reactive)\n// ✓ RxJS\n// ✓ Signals\n// ✓ State (NgRx)\n// ✓ SSR/Hydration\n// ✓ Testing\n// ✓ PWA\n// ✓ Security\n// ✓ Deployment\n// ✓ Performance\n\n// Certificate requirements:\n// - Complete all 80 chapters\n// - Score 80%+ on all quizzes\n// - Complete all projects\n// - Pass final assessment\n\n// Next steps:\n// - Build portfolio projects\n// - Contribute to Angular open source\n// - Apply for Angular developer jobs" },
            explanation: "You have learned Angular from fundamentals to enterprise. Congratulations!"
          }
        ]
      }
    ]
  }
];

export const angularTrack: Track = {
  id: "angular",
  title: "Angular",
  titleBn: "Angular",
  tagline: "Build scalable enterprise-grade web applications",
  taglineBn: "স্কেলযোগ্য এন্টারপ্রাইজ-গ্রেড ওয়েব অ্যাপ্লিকেশন তৈরি করুন",
  icon: "🅰️",
  colorVar: "angular",
  totalChapters: angularChapters.length,
  estimatedHours: Math.round(angularChapters.reduce((sum, c) => sum + c.estimatedMinutes, 0) / 60),
  chapters: angularChapters,
  brandColor: "#DD0031",
  glowColor: "rgba(221, 0, 49, 0.4)",
};