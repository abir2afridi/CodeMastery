# CodeMastery
🚀 Zero-to-Pro HTML, CSS & JavaScript Learning Platform

## Overview
CodeMastery is a comprehensive web development learning platform designed to take absolute beginners from zero to professional-level mastery in HTML, CSS, and JavaScript. Built with the philosophy that quality and depth matter more than speed, every concept is explained thoroughly with real-world analogies, hands-on practice, and immediate feedback.

## 🌟 Key Features
- **Interactive 4-Panel Compiler**: Live code editing with HTML, CSS, JavaScript panels and real-time preview
- **Comprehensive Curriculum**: 175+ chapters covering everything from basics to advanced concepts
- **Progress Tracking**: XP system, streaks, achievements, and detailed progress analytics
- **Certificate Generation**: Beautiful certificates upon track completion
- **Project-Based Learning**: Real-world projects at every skill level
- **Comprehensive Quiz System**: 8+ questions per chapter with multiple question types
- **Dark Mode Interface**: Modern space/terminal aesthetic with smooth animations
- **Mobile Responsive**: Learn on any device with optimized layouts

## 📚 Curriculum Structure

### HTML Track (50 Chapters - ~75 hours)
**Part 1: The Absolute Beginning (Chapters 1-6)**
- Chapter 1: What Even Is a Website? - Understanding the web stack
- Chapter 2: Your Very First HTML File - Setting up and basic structure
- Chapter 3: Text in HTML - Headings, paragraphs, formatting
- Chapter 4: Links - Connecting the web
- Chapter 5: Images - Visual content and accessibility
- Chapter 6: Lists - Organizing content

**Part 2: Structure & Layout (Chapters 7-14)**
- HTML Structure Deep Dive, Tables, Forms (3 parts), Semantic HTML, Metadata, Resource Linking

**Part 3: Media & Embeds (Chapters 15-20)**
- Audio/Video, iFrames, SVG, Canvas, HTML5 APIs, Special Characters

**Part 4: Accessibility (Chapters 21-26)**
- Web Accessibility, ARIA, Keyboard Navigation, Screen Readers, Forms & Accessibility, Images & Accessibility

**Part 5: SEO & Performance (Chapters 27-32)**
- Search Engines, Meta Tags, Open Graph, Structured Data, Performance, Validation

**Part 6: Advanced HTML (Chapters 33-40)**
- Web Components, Template/Slot, Dialog Element, Details/Summary, PWAs, Microdata, HTML Email, Anti-Patterns

**Part 7: Projects (Chapters 41-50)**
- Personal Bio Page, Recipe Page, Photo Gallery, Multi-page Website, Accessible Forms, Challenge Sets, Code Review, Mastery Recap

### CSS Track (55 Chapters - ~85 hours)
**Part 1: CSS Fundamentals (Chapters 1-8)**
- What is CSS?, First CSS File, Selectors (2 parts), Specificity & Cascade, Box Model, Colors & Backgrounds, Typography

**Part 2: Layout (Chapters 9-20)**
- Display Property, CSS Units, Positioning, Z-index, Flexbox (2 parts), CSS Grid (2 parts), Responsive Design (2 parts), CSS Variables, Float & Clear

**Part 3: Visual Effects (Chapters 21-30)**
- Borders & Shadows, Gradients, Transforms, Transitions, Animations (2 parts), Filters, Blend Modes, Clip-path, Scroll Behavior

**Part 4: Advanced CSS (Chapters 31-44)**
- Pseudo-elements, Custom Properties, calc()/min()/max(), BEM Architecture, ITCSS & Layers, Dark Mode, Accessibility, Sass/SCSS, Tailwind CSS, Performance, Debugging, Print Styles, Modern CSS, Advanced Grid

**Part 5: Projects (Chapters 45-55)**
- Portfolio, Blog Layout, Landing Page, Dashboard UI, E-commerce Card, CSS Art, Challenge Sets, Code Review, Mastery Recap

### JavaScript Track (70 Chapters - ~120 hours)
**Part 1: JS Absolute Basics (Chapters 1-10)**
- What is JavaScript?, First JavaScript, Variables, Data Types, Operators, Type Coercion, Conditionals, Loops, Functions (2 parts)

**Part 2: Working with Data (Chapters 11-20)**
- Strings, Numbers, Arrays (3 parts), Objects (3 parts), Date & Time, Regular Expressions

**Part 3: Scope, Closures, OOP (Chapters 21-30)**
- Scope, Closures, Hoisting, Prototype Chain, Classes (2 parts), "this" Keyword, Map/Set, Iterators, Symbols

**Part 4: Async JavaScript (Chapters 31-40)**
- Event Loop, Callbacks, Promises (2 parts), Async/Await, Fetch API, REST APIs, Error Handling, JSON, Storage

**Part 5: DOM and Browser (Chapters 41-55)**
- DOM, Selecting Elements, Content Manipulation, Element Operations, Attributes/Styles, Events (2 parts), Forms, Timers, Scroll Events, Drag & Drop, IndexedDB, Web APIs, Canvas, Web Workers

**Part 6: Modern JS and Ecosystem (Chapters 56-65)**
- ES Modules, Functional Programming, Design Patterns, TypeScript, Build Tools, Testing, Security, Performance, Debugging, Memory Management

**Part 7: Projects (Chapters 66-70)**
- Todo App, Weather App, Quiz Game, Kanban Board, Mastery Recap

## 🎯 Learning Philosophy
- **Zero Prior Knowledge Assumed**: Every chapter starts from scratch
- **Real-World Analogies First**: Technical concepts explained through relatable examples
- **Micro-Exercises Throughout**: Practice embedded in lessons, not just at the end
- **Immediate Feedback**: Live compiler for every code example
- **Depth Over Speed**: 500 sub-levels built if that's what a topic needs

## 🏗️ Technical Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite for lightning-fast development
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion for smooth transitions
- **Code Editor**: CodeMirror 6 with syntax highlighting
- **Icons**: Lucide React
- **Themes**: Dark mode with space/terminal aesthetic
- **State Management**: React hooks + localStorage
- **Certificates**: html2canvas + jsPDF

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Modern web browser** (Chrome, Firefox, Safari, Edge)

### Quick Start
```bash
# Clone the repository
git clone https://github.com/yourusername/CodeMastery.git
cd CodeMastery

# Install dependencies
npm install

# Start the development server
npm run dev

# Open your browser to http://localhost:5173
```

### Your Learning Journey
1. **First Visit**: Enter your name and choose your learning track
2. **Start Learning**: Begin with Chapter 1 or take a placement test
3. **Interactive Learning**: Complete lessons with live code examples
4. **Practice**: Solve exercises and quizzes after each chapter
5. **Build Projects**: Apply your knowledge in hands-on projects
6. **Earn Certificates**: Get certified upon track completion

## 📁 Project Structure
```
src/
├── components/
│   ├── certificate/     # Certificate generation components
│   ├── compiler/        # 4-panel live code editor
│   ├── layout/          # Navigation and layout components
│   ├── lesson/          # Lesson content and interactions
│   └── quiz/            # Quiz system components
├── lib/
│   ├── curriculum/      # All course content (175+ chapters)
│   │   ├── html-curriculum.ts
│   │   ├── css-curriculum.ts
│   │   ├── js-curriculum.ts
│   │   └── index.ts
│   ├── progress.ts      # User progress tracking
│   ├── certificate.ts   # Certificate generation
│   ├── xp.ts           # XP calculation system
│   └── utils.ts        # Utility functions
├── pages/              # Page components
│   ├── Dashboard.tsx   # Main learning dashboard
│   ├── CompilerPage.tsx # Standalone compiler
│   ├── CertificatePage.tsx # Certificate view
│   └── [track]/        # Dynamic track pages
└── hooks/              # Custom React hooks
    ├── useProgress.ts
    ├── useToast.ts
    └── use-mobile.tsx
```

## 🎨 Design System
- **Theme**: Dark mode with space/terminal aesthetic
- **Colors**: Electric blue (#00D4FF), Violet (#7C3AED), Dark backgrounds
- **Fonts**: Space Grotesk (headings), Inter (body), JetBrains Mono (code)
- **UI Patterns**: Glassmorphism cards, neon glows, smooth transitions
- **Animations**: Framer Motion for all page changes and interactions

## 🔧 Development Commands
```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
npm run test         # Run tests with Vitest

# Utilities
npm run format       # Format code with Prettier
```

## 🤝 Contributing
We welcome contributions! Here's how you can help:

### For Content Contributors
- Add new lessons or improve existing ones
- Create additional exercises and quizzes
- Suggest curriculum improvements

### For Technical Contributors
- Bug fixes and performance improvements
- New features and UI enhancements
- Documentation and code quality improvements

### Contribution Guidelines
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments & Technologies
- **React 18** - Modern UI framework with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible component library
- **Framer Motion** - Production-ready motion library for React
- **CodeMirror 6** - Powerful code editor with syntax highlighting
- **Lucide React** - Beautiful & consistent icon toolkit
- **html2canvas & jsPDF** - Certificate generation
- **Canvas Confetti** - Celebration animations

## 📞 Support & Community
- 🐛 **Bug Reports**: Open an issue on GitHub
- 💡 **Feature Requests**: Start a discussion or open an issue
- 📖 **Questions**: Check our documentation or community forums
- ⭐ **Show Support**: Give this project a star on GitHub!

---

**Ready to start your web development journey?** 🚀

*Every professional developer was once a beginner. Let's build something amazing together!* 
