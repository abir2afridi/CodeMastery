import type { Track, Chapter } from "./types";

const vueChapters: Chapter[] = [
  {
    id: "vue-1",
    number: 1,
    partLabel: "Part 1: Vue Fundamentals",
    title: "What Is Vue and Why Developers Love It?",
    subtitle: "Introduction to Vue",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: [],
    learningObjectives: ["Understand what Vue is", "Know Vue vs React vs Angular", "Understand Vue ecosystem"],
    sections: [
      {
        id: "vue-1-1",
        title: "Vue Overview",
        whyItMatters: "Vue powers applications at Adobe, Alibaba, GitLab, and more.",
        content: `Vue is a progressive JavaScript framework for building user interfaces. Unlike monolithic frameworks, Vue can be adopted incrementally — start with just the view layer and add more as needed.

Why Vue matters:
- Created by Evan You (former Google Angular team member)
- Lightweight (~20KB gzipped)
- Reactive data binding out of the box
- Component-based architecture
- Great documentation and community
- Flexible — works with TypeScript, JSX alternatives, or HTML-like templates

Vue 3 highlights:
- Composition API for better code organization
- Teleport and Suspense components
- Improved TypeScript support
- Better performance (smaller bundle, faster runtime)`,
        codeExamples: [
          {
            id: "vue-1-ex1",
            title: "Vue Version Timeline",
            description: "Vue evolution",
            code: { javascript: "// Vue 2 - Legacy\nnew Vue({\n  el: '#app',\n  data: { message: 'Hello Vue 2' },\n  template: '<div>{{ message }}</div>'\n})\n\n// Vue 3 - Modern Composition API\nimport { createApp, ref } from 'vue'\n\ncreateApp({\n  setup() {\n    const message = ref('Hello Vue 3')\n    return { message }\n  }\n}).mount('#app')\n\n// Vue 3 <script setup> (recommended)\n// <script setup>\n// const message = ref('Hello Vue 3')\n// </script>\n// <template>\n//   <div>{{ message }}</div>\n// </template>" },
            explanation: "Modern Vue uses Composition API and <script setup> syntax."
          }
        ]
      },
      {
        id: "vue-1-2",
        title: "Vue Ecosystem",
        whyItMatters: "Know the tools in the Vue ecosystem.",
        content: `Vue ecosystem includes official tooling and community libraries.

Core tools:
- Vue CLI - scaffolding tool (being replaced by Vite)
- Vite - next-generation build tool (recommended)
- Vue Router - official routing
- Pinia - state management (recommended, replaces Vuex)
- Vue DevTools - browser extension for debugging

Related tools:
- Nuxt - Vue meta-framework for SSR/SSG
- VueUse - composition utilities
- Element Plus / Vuetify - UI component libraries
- Vitest - testing framework`,
        codeExamples: [
          {
            id: "vue-1-ex2",
            title: "Ecosystem Overview",
            description: "Vue tools stack",
            code: { javascript: "// Vite project setup\nnpm create vue@latest\n# Or with specific options:\nnpm create vue@latest my-app -- --typescript --router --pinia\n\n// Vue Router setup\nimport { createRouter, createWebHistory } from 'vue-router'\nconst router = createRouter({\n  history: createWebHistory(),\n  routes: [\n    { path: '/', component: Home },\n    { path: '/about', component: About }\n  ]\n})\n\n// Pinia store\nimport { defineStore } from 'pinia'\nexport const useCounterStore = defineStore('counter', {\n  state: () => ({ count: 0 }),\n  actions: {\n    increment() { this.count++ }\n  }\n})" },
            explanation: "Vite + Vue 3 + Pinia + Vue Router is the modern stack."
          }
        ]
      }
    ]
  },
  {
    id: "vue-2",
    number: 2,
    title: "Vue 3 Setup with Vite",
    subtitle: "Install and configure Vue",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["vue-1"],
    learningObjectives: ["Install Node.js and npm", "Create Vue project with Vite", "Understand project structure"],
    sections: [
      {
        id: "vue-2-1",
        title: "Installation",
        whyItMatters: "Vite provides fast dev server and optimized builds.",
        content: `Vite is the recommended build tool for Vue 3. It provides instant server start and lightning-fast HMR.`,
        codeExamples: [
          {
            id: "vue-2-ex1",
            title: "Setup Commands",
            description: "Install Vue with Vite",
            code: { javascript: "-- Check Node version (18+ recommended)\nnode --version\n\n-- Create Vue project\nnpm create vue@latest\n\n-- Or with all options\nnpm create vue@latest my-app \\\n  -- --typescript \\\n  -- --router \\\n  -- --pinia \\\n  -- --vitest \\\n  -- --eslint-with-prettier\n\n-- Navigate to project\ncd my-app\n\n-- Install dependencies\nnpm install\n\n-- Start dev server\nnpm run dev\n\n-- Build for production\nnpm run build" },
            explanation: "Vite dev server runs at http://localhost:5173 by default."
          }
        ]
      }
    ]
  },
  {
    id: "vue-3",
    number: 3,
    title: "Vue Project Structure",
    subtitle: "Understand the files",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 45,
    prerequisites: ["vue-2"],
    learningObjectives: ["Understand folder structure", "Know key configuration files", "Understand .vue files"],
    sections: [
      {
        id: "vue-3-1",
        title: "Project Files",
        whyItMatters: "Navigate Vue projects efficiently.",
        content: `Vue project structure with key directories and files.`,
        codeExamples: [
          {
            id: "vue-3-ex1",
            title: "Folder Structure",
            description: "Vue project layout",
            code: { javascript: "my-vue-app/\n├── node_modules/           # Dependencies\n├── public/                  # Static assets (copied as-is)\n├── src/\n│   ├── assets/              # CSS, images, fonts\n│   ├── components/          # Reusable Vue components\n│   ├── views/              # Page components (routes)\n│   ├── router/             # Vue Router configuration\n│   ├── stores/             # Pinia stores\n│   ├── composables/        # Composable functions\n│   ├── App.vue             # Root component\n│   └── main.ts             # App entry point\n├── index.html              # Entry HTML\n├── package.json            # Dependencies & scripts\n├── vite.config.ts          # Vite configuration\n├── tsconfig.json           # TypeScript config\n└── env.d.ts               # Vue type declarations" },
            explanation: "src/App.vue is the root component, mounted in main.ts"
          }
        ]
      }
    ]
  },
  {
    id: "vue-4",
    number: 4,
    title: "Reactivity System",
    subtitle: "Understanding Vue reactivity",
    difficulty: "Beginner" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["vue-3"],
    learningObjectives: ["Understand reactive()", "Understand ref()", "Know when to use each"],
    sections: [
      {
        id: "vue-4-1",
        title: "Reactivity Fundamentals",
        whyItMatters: "Vue's reactivity is what makes it powerful.",
        content: `Vue 3 uses Proxies for reactivity. When data changes, Vue automatically updates the DOM.`,
        codeExamples: [
          {
            id: "vue-4-ex1",
            title: "ref() and reactive()",
            description: "Two ways to make data reactive",
            code: { javascript: "import { ref, reactive } from 'vue'\n\n// ref() - for primitive values and any value\nconst count = ref(0)\nconst message = ref('Hello')\nconst items = ref([])\n\n// Access/modify with .value\ncount.value++\n\n// In template, .value is auto-unwrapped\n// {{ count }} renders as 1\n\n// reactive() - for objects only\nconst state = reactive({\n  count: 0,\n  user: { name: 'John' }\n})\n\n// No .value needed\nstate.count++\nstate.user.name = 'Jane'\n\n// reactive() is like ref() but:\n// - Only works with objects/arrays\n// - Cannot reassign the entire object\n// - Maintains reactivity when destructured (with toRefs)" },
            explanation: "Use ref() for primitives and when you might reassign. Use reactive() for complex state objects."
          }
        ]
      }
    ]
  },
  {
    id: "vue-5",
    number: 5,
    title: "Templates and Directives",
    subtitle: "Template syntax",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["vue-4"],
    learningObjectives: ["Use v-if, v-for, v-bind", "Understand directive syntax", "Use event handling"],
    sections: [
      {
        id: "vue-5-1",
        title: "Template Directives",
        whyItMatters: "Directives are the magic behind Vue templates.",
        content: `Vue directives are special attributes that add reactive behavior to templates.`,
        codeExamples: [
          {
            id: "vue-5-ex1",
            title: "Common Directives",
            description: "v-if, v-for, v-bind, v-on",
            code: { javascript: "<template>\n  <!-- v-if: Conditional rendering -->\n  <div v-if=\"isLoggedIn\">Welcome!</div>\n  <div v-else>Please login</div>\n\n  <!-- v-show: Toggle visibility (doesn't remove from DOM) -->\n  <div v-show=\"showModal\">Modal content</div>\n\n  <!-- v-for: List rendering -->\n  <ul>\n    <li v-for=\"item in items\" :key=\"item.id\">\n      {{ item.name }}\n    </li>\n  </ul>\n\n  <!-- v-bind: Dynamic attributes -->\n  <img v-bind:src=\"imageUrl\" :alt=\"altText\" />\n  <!-- Shorthand: :src -->\n\n  <!-- v-on: Event handling -->\n  <button v-on:click=\"handleClick\">Click</button>\n  <!-- Shorthand: @click -->\n\n  <!-- v-model: Two-way binding -->\n  <input v-model=\"inputValue\" />\n</template>" },
            explanation: "Directives start with v- prefix. Use : and @ shortcuts for v-bind and v-on."
          }
        ]
      }
    ]
  },
  {
    id: "vue-6",
    number: 6,
    title: "Data Binding",
    subtitle: "One-way and two-way binding",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["vue-5"],
    learningObjectives: ["Use text interpolation", "Use v-bind for attributes", "Use v-model for forms"],
    sections: [
      {
        id: "vue-6-1",
        title: "Binding Types",
        whyItMatters: "Control data flow in templates.",
        content: `Vue provides multiple ways to bind data to templates.`,
        codeExamples: [
          {
            id: "vue-6-ex1",
            title: "Binding Examples",
            description: "Text, attribute, and class binding",
            code: { javascript: "<template>\n  <!-- Text interpolation -->\n  <h1>{{ title }}</h1>\n  <p>{{ user.name }}</p>\n\n  <!-- Attribute binding -->\n  <div :id=\"'box-' + item.id\">Content</div>\n  <a :href=\"url\">Link</a>\n\n  <!-- Class binding -->\n  <div :class=\"{ active: isActive, 'text-red': hasError }\">\n  </div>\n  <div :class=\"[activeClass, errorClass]\"></div>\n\n  <!-- Style binding -->\n  <div :style=\"{ color: textColor, fontSize: fontSize + 'px' }\"></div>\n  <div :style=\"styleObject\"></div>\n\n  <!-- Two-way binding -->\n  <input v-model=\"name\" />\n  <textarea v-model=\"description\"></textarea>\n  <select v-model=\"selected\">\n    <option value=\"\">Select...</option>\n  </select>\n  <input type=\"checkbox\" v-model=\"agreed\" />\n</template>" },
            explanation: "Use {{ }} for text, : for attributes, v-model for two-way binding."
          }
        ]
      }
    ]
  },
  {
    id: "vue-7",
    number: 7,
    title: "Event Handling",
    subtitle: "Handling DOM events",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["vue-6"],
    learningObjectives: ["Handle click and form events", "Use event modifiers", "Use key modifiers"],
    sections: [
      {
        id: "vue-7-1",
        title: "Event Handling",
        whyItMatters: "Respond to user interactions.",
        content: `Vue provides convenient event handling with modifiers.`,
        codeExamples: [
          {
            id: "vue-7-ex1",
            title: "Event Examples",
            description: "Click, form, and custom events",
            code: { javascript: "<template>\n  <!-- Click handler -->\n  <button @click=\"handleClick\">Click me</button>\n\n  <!-- Event object -->\n  <button @click=\"logEvent($event)\">Log</button>\n\n  <!-- Method call with arguments -->\n  <button @click=\"greet('Hello')\">Greet</button>\n\n  <!-- Event modifiers -->\n  <a @click.prevent=\"handleLink\">Link</a>\n  <form @submit.prevent=\"handleSubmit\">...</form>\n  <div @click.stop=\"handleClick\">...</div>\n\n  <!-- Key modifiers -->\n  <input @keyup.enter=\"submit\" />\n  <input @keyup.enter.exact=\"submit\" />\n  <input @keyup.ctrl.enter=\"save\" />\n\n  <!-- Mouse modifiers -->\n  <div @click.right=\"showMenu\">Right click</div>\n  <div @click.middle=\"handleMiddle\">Middle click</div>\n</template>\n\n<script setup>\nconst handleClick = () => console.log('Clicked!')\nconst greet = (msg) => console.log(msg)\n</script>" },
            explanation: "Use @ for v-on. Modifiers: .prevent, .stop, .enter, .exact, .ctrl."
          }
        ]
      }
    ]
  },
  {
    id: "vue-8",
    number: 8,
    title: "Computed Properties",
    subtitle: "Caching derived values",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["vue-7"],
    learningObjectives: ["Create computed properties", "Understand caching behavior", "Use getters and setters"],
    sections: [
      {
        id: "vue-8-1",
        title: "Computed Properties",
        whyItMatters: "Computed properties cache values and update only when dependencies change.",
        codeExamples: [
          {
            id: "vue-8-ex1",
            title: "Computed Examples",
            description: "Basic and setter computed",
            code: { javascript: "<script setup>\nimport { ref, computed } from 'vue'\n\nconst firstName = ref('John')\nconst lastName = ref('Doe')\n\n// Computed - automatically cached\nconst fullName = computed(() => {\n  return firstName.value + ' ' + lastName.value\n})\n\n// Computed with setter\nconst username = computed({\n  get() {\n    return firstName.value.toLowerCase()\n  },\n  set(newValue) {\n    firstName.value = newValue.charAt(0).toUpperCase() + newValue.slice(1)\n  }\n})\n\n// Usage\nconsole.log(fullName.value) // 'John Doe'\nusername.value = 'jane'\nconsole.log(firstName.value) // 'Jane'\n</script>\n\n<template>\n  <p>{{ fullName }}</p>\n</template>" },
            explanation: "Computed properties are cached. Only re-evaluate when dependencies change."
          }
        ]
      }
    ]
  },
  {
    id: "vue-9",
    number: 9,
    title: "Watchers",
    subtitle: "Watching for changes",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["vue-8"],
    learningObjectives: ["Create watchers with watch()", "Use watchEffect()", "Handle deep watching"],
    sections: [
      {
        id: "vue-9-1",
        title: "Watcher API",
        whyItMatters: "Watchers respond to data changes for side effects.",
        codeExamples: [
          {
            id: "vue-9-ex1",
            title: "Watcher Examples",
            description: "watch and watchEffect",
            code: { javascript: "<script setup>\nimport { ref, watch, watchEffect } from 'vue'\n\nconst count = ref(0)\nconst user = ref({ name: 'John', age: 30 })\n\n// watch - explicit watch\nwatch(count, (newValue, oldValue) => {\n  console.log(\\`Count changed: \\${oldValue} -> \\${newValue}\\`)\n})\n\n// Watch multiple refs\nwatch([count, user], ([newCount], [oldUser]) => {\n  console.log('Changed!')\n})\n\n// Deep watch\nwatch(user, (newUser) => {\n  console.log('User changed:', newUser)\n}, { deep: true })\n\n// Immediate - runs on setup\nwatch(count, () => {\n  console.log('Count:', count.value)\n}, { immediate: true })\n\n// watchEffect - auto-dependencies\nwatchEffect(() => {\n  // Automatically tracks all refs used inside\n  console.log(\\`Count is: \\${count.value}\\`)\n  console.log(\\`User name: \\${user.value.name}\\`)\n})\n</script>" },
            explanation: "watch() requires explicit source. watchEffect() auto-tracks dependencies."
          }
        ]
      }
    ]
  },
  {
    id: "vue-10",
    number: 10,
    title: "Conditional Rendering",
    subtitle: "v-if, v-else, v-show",
    difficulty: "Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["vue-9"],
    learningObjectives: ["Use v-if and v-else", "Use v-show", "Choose between v-if and v-show"],
    sections: [
      {
        id: "vue-10-1",
        title: "Conditional Rendering",
        whyItMatters: "Control what renders based on state.",
        codeExamples: [
          {
            id: "vue-10-ex1",
            title: "v-if vs v-show",
            description: "When to use each",
            code: { javascript: "<template>\n  <!-- v-if - actually adds/removes from DOM -->\n  <div v-if=\"isLoggedIn\">\n    Welcome, {{ user.name }}\n  </div>\n  <div v-else>\n    <button @click=\"login\">Login</button>\n  </div>\n\n  <!-- v-else-if -->\n  <div v-if=\"role === 'admin'\">Admin panel</div>\n  <div v-else-if=\"role === 'user'\">User dashboard</div>\n  <div v-else>Guest view</div>\n\n  <!-- v-show - toggles display: none -->\n  <div v-show=\"showModal\">Modal</div>\n\n  <!-- v-if with template -->\n  <template v-if=\"showDetails\">\n    <div>Detail 1</div>\n    <div>Detail 2</div>\n  </template>\n</template>\n\n<script setup>\nconst isLoggedIn = ref(false)\nconst showModal = ref(true)\nconst role = ref('user')\n</script>" },
            explanation: "Use v-if for conditional that changes rarely. Use v-show for frequent toggles."
          }
        ]
      }
    ]
  },
  {
    id: "vue-11",
    number: 11,
    title: "List Rendering",
    subtitle: "v-for directive",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 45,
    prerequisites: ["vue-10"],
    learningObjects: ["Use v-for with arrays", "Use v-for with objects", "Use :key properly"],
    sections: [
      {
        id: "vue-11-1",
        title: "List Rendering",
        whyItMatters: "Render collections efficiently.",
        codeExamples: [
          {
            id: "vue-11-ex1",
            title: "v-for Examples",
            description: "Arrays, objects, and ranges",
            code: { javascript: "<template>\n  <!-- Array -->\n  <li v-for=\"item in items\" :key=\"item.id\">\n    {{ item.name }}\n  </li>\n\n  <!-- With index -->\n  <li v-for=\"(item, index) in items\" :key=\"item.id\">\n    {{ index + 1 }}. {{ item.name }}\n  </li>\n\n  <!-- Object -->\n  <div v-for=\"(value, key) in object\" :key=\"key\">\n    {{ key }}: {{ value }}\n  </div>\n\n  <!-- Range -->\n  <span v-for=\"n in 5\" :key=\"n\">{{ n }}</span>\n\n  <!-- v-for on template -->\n  <template v-for=\"item in items\" :key=\"item.id\">\n    <div>{{ item.name }}</div>\n    <hr />\n  </template>\n</template>\n\n<script setup>\nconst items = ref([\n  { id: 1, name: 'Apple' },\n  { id: 2, name: 'Banana' }\n])\nconst object = ref({ a: 1, b: 2 })\n</script>" },
            explanation: "Always use :key with v-for. Use unique identifiers, not array index."
          }
        ]
      }
    ]
  },
  {
    id: "vue-12",
    number: 12,
    title: "Component Basics",
    subtitle: "Creating and using components",
    difficulty: "Beginner" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["vue-11"],
    learningObjectives: ["Create Vue components", "Use components in templates", "Understand component registration"],
    sections: [
      {
        id: "vue-12-1",
        title: "Component Fundamentals",
        whyItMatters: "Components are the building blocks of Vue apps.",
        codeExamples: [
          {
            id: "vue-12-ex1",
            title: "Creating Components",
            description: "Single File Components",
            code: { javascript: "// src/components/Greeting.vue\n<script setup>\ndefineProps({\n  name: {\n    type: String,\n    required: true\n  }\n})\n\nconst emit = defineEmits(['greet'])\n\nconst sayHello = () => {\n  emit('greet', \\`Hello, \\${name}!\\`)\n}\n</script>\n\n<template>\n  <div class=\"greeting\">\n    <h1>Hello, {{ name }}!</h1>\n    <button @click=\"sayHello\">Say Hello</button>\n  </div>\n</template>\n\n<style scoped>\n.greeting {\n  padding: 20px;\n}\n</style>\n\n// Using in parent\n// <script setup>\n// import Greeting from './components/Greeting.vue'\n// </script>\n// \n// <template>\n//   <Greeting name=\"World\" @greet=\"handleGreet\" />\n// </template>" },
            explanation: "Components are self-contained. Use defineProps and defineEmits in <script setup>."
          }
        ]
      }
    ]
  },
  {
    id: "vue-13",
    number: 13,
    partLabel: "Part 2: Components & Composition API",
    title: "Props",
    subtitle: "Passing data to components",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["vue-12"],
    learningObjectives: ["Define props with defineProps", "Use type validation", "Pass props from parent"],
    sections: [
      {
        id: "vue-13-1",
        title: "Props Fundamentals",
        whyItMatters: "Props enable component reusability.",
        content: `Props are the primary way to pass data from parent to child components.`,
        codeExamples: [
          {
            id: "vue-13-ex1",
            title: "Defining Props",
            description: "With TypeScript types",
            code: { javascript: "// Child: UserCard.vue\n<script setup>\n// Type-only syntax (recommended)\ndefineProps<{\n  name: string\n  email: string\n  age?: number  // optional\n}>()\n\n// Or with options\ndefineProps({\n  name: {\n    type: String,\n    required: true\n  },\n  age: {\n    type: Number,\n    default: 0\n  }\n})\n</script>\n\n<template>\n  <div class=\"card\">\n    <h2>{{ name }}</h2>\n    <p>{{ email }}</p>\n    <p v-if=\"age\">Age: {{ age }}</p>\n  </div>\n</template>\n\n// Parent usage\n// <UserCard name=\"John\" email=\"john@test.com\" :age=\"25\" />" },
            explanation: "Use defineProps() to declare props. TypeScript syntax is preferred."
          }
        ]
      }
    ]
  },
  {
    id: "vue-14",
    number: 14,
    title: "Emits",
    subtitle: "Child-to-parent communication",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["vue-13"],
    learningObjectives: ["Emit events with defineEmits", "Handle emitted events in parent"],
    sections: [
      {
        id: "vue-14-1",
        title: "Emitting Events",
        whyItMatters: "Children communicate with parents via emits.",
        codeExamples: [
          {
            id: "vue-14-ex1",
            title: "Define and Emit",
            description: "Child-to-parent events",
            code: { javascript: "// Child: Button.vue\n<script setup>\nconst emit = defineEmits(['click', 'submit'])\n\nconst handleClick = () => {\n  emit('click', { time: Date.now() })\n}\n</script>\n\n<template>\n  <button @click=\"handleClick\">Click me</button>\n</template>\n\n// Parent\n// <Button @click=\"handleButtonClick\" />\n// \n// <script setup>\n// const handleButtonClick = (payload) => {\n//   console.log('Clicked at', payload.time)\n// }\n// </script>" },
            explanation: "defineEmits() declares available events. Use $emit in template."
          }
        ]
      }
    ]
  },
  {
    id: "vue-15",
    number: 15,
    title: "Slots",
    subtitle: "Content distribution",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["vue-14"],
    learningObjectives: ["Use default slots", "Use named slots", "Use scoped slots"],
    sections: [
      {
        id: "vue-15-1",
        title: "Slot System",
        whyItMatters: "Slots enable flexible component composition.",
        codeExamples: [
          {
            id: "vue-15-ex1",
            title: "Slots Example",
            description: "Default and named slots",
            code: { javascript: "// Card.vue (container)\n<template>\n  <div class=\"card\">\n    <header>\n      <slot name=\"header\">Default Title</slot>\n    </header>\n    <main>\n      <slot>Default content</slot>\n    </main>\n    <footer>\n      <slot name=\"footer\"></slot>\n    </footer>\n  </div>\n</template>\n\n// Usage\n// <Card>\n//   <template #header>My Card Title</template>\n//   <p>Main content here</p>\n//   <template #footer>\n//     <button>Action</button>\n//   </template>\n// </Card>" },
            explanation: "Use <slot> for content injection. # is shorthand for v-slot."
          }
        ]
      }
    ]
  },
  {
    id: "vue-16",
    number: 16,
    title: "Dynamic Components",
    subtitle: "Component switching",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["vue-15"],
    learningObjectives: ["Use <component :is>", "Use keep-alive"],
    sections: [
      {
        id: "vue-16-1",
        title: "Dynamic Rendering",
        whyItMatters: "Switch components at runtime.",
        codeExamples: [
          {
            id: "vue-16-ex1",
            title: "Component Switching",
            description: "Using :is",
            code: { javascript: "<script setup>\nimport TabA from './TabA.vue'\nimport TabB from './TabB.vue'\n\nconst currentTab = ref('TabA')\nconst tabs = { TabA, TabB }\n</script>\n\n<template>\n  <button @click=\"currentTab = 'TabA'\">Tab A</button>\n  <button @click=\"currentTab = 'TabB'\">Tab B</button>\n\n  <component :is=\"tabs[currentTab]\" />\n\n  <!-- With keep-alive (preserve state) -->\n  <keep-alive>\n    <component :is=\"tabs[currentTab]\" />\n  </keep-alive>\n</template>" },
            explanation: ":is accepts component object or string. keep-alive caches component state."
          }
        ]
      }
    ]
  },
  {
    id: "vue-17",
    number: 17,
    title: "Lifecycle Hooks",
    subtitle: "Component lifecycle",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["vue-16"],
    learningObjectives: ["Use onMounted, onUnmounted", "Use watchEffect", "Understand component lifecycle"],
    sections: [
      {
        id: "vue-17-1",
        title: "Lifecycle API",
        whyItMatters: "Execute code at specific times.",
        codeExamples: [
          {
            id: "vue-17-ex1",
            title: "Lifecycle Hooks",
            description: "Composition API hooks",
            code: { javascript: "<script setup>\nimport { onMounted, onUnmounted, onUpdated } from 'vue'\n\n// Called after component mounts\nonMounted(() => {\n  console.log('Component mounted!')\n  // Setup: fetch data, add event listeners\n})\n\n// Called after each update\nonUpdated(() => {\n  console.log('Component updated!')\n  // DOM has been patched\n})\n\n// Called before unmount\nonUnmounted(() => {\n  console.log('Cleanup time!')\n  // Remove event listeners, cancel timers\n})\n</script>" },
            explanation: "Lifecycle hooks: onMounted, onUpdated, onUnmounted, onBeforeMount, etc."
          }
        ]
      }
    ]
  },
  {
    id: "vue-18",
    number: 18,
    title: "Composition API Fundamentals",
    subtitle: "Reusability patterns",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["vue-17"],
    learningObjectives: ["Understand setup()", "Use composables", "Organize code by feature"],
    sections: [
      {
        id: "vue-18-1",
        title: "Composition API",
        whyItMatters: "Better code organization than Options API.",
        codeExamples: [
          {
            id: "vue-18-ex1",
            title: "Setup Function",
            description: "Using setup()",
            code: { javascript: "import { ref, computed, onMounted } from 'vue'\n\nexport default {\n  setup() {\n    // Reactive state\n    const count = ref(0)\n    \n    // Computed\n    const doubled = computed(() => count.value * 2)\n    \n    // Methods\n    const increment = () => count.value++\n    \n    // Lifecycle\n    onMounted(() => console.log('Ready'))\n    \n    // Expose to template\n    return { count, doubled, increment }\n  }\n}\n\n// <script setup> is syntactic sugar for this" },
            explanation: "setup() is the core of Composition API. <script setup> is preferred."
          }
        ]
      }
    ]
  },
  {
    id: "vue-19",
    number: 19,
    title: "setup() Function",
    subtitle: "Setup context",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["vue-18"],
    learningObjectives: ["Use setup context", "Access props and emit"],
    sections: [
      {
        id: "vue-19-1",
        title: "Setup Context",
        whyItMatters: "Access component context.",
        codeExamples: [
          {
            id: "vue-19-ex1",
            title: "Context Usage",
            description: "Props, emit, attrs",
            code: { javascript: "export default {\n  setup(props, { emit, attrs, slots, expose }) {\n    // props - reactive, don't destructure\n    console.log(props.title)\n    \n    // emit - trigger parent events\n    emit('update', newValue)\n    \n    // attrs - non-prop attributes\n    console.log(attrs.class)\n    \n    // slots - slot functions\n    console.log(slots.default?.())\n    \n    // expose - expose public API\n    expose({ publicMethod })\n    \n    return { }\n  }\n}" },
            explanation: "Second argument to setup() provides context utilities."
          }
        ]
      }
    ]
  },
  {
    id: "vue-20",
    number: 20,
    title: "Reactive vs Ref",
    subtitle: "Choosing the right tool",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["vue-19"],
    learningObjectives: ["Understand ref()", "Understand reactive()", "Know when to use each"],
    sections: [
      {
        id: "vue-20-1",
        title: "Reactive Choice",
        whyItMatters: "Correct reactivity choice prevents bugs.",
        codeExamples: [
          {
            id: "vue-20-ex1",
            title: "ref vs reactive",
            description: "Comparison",
            code: { javascript: "// ref() - for primitives and any value\nconst count = ref(0)\nconst message = ref('hello')\n// Access via .value in script, auto-unwrapped in template\n\n// reactive() - for objects only\nconst state = reactive({\n  count: 0,\n  user: { name: 'John' }\n})\n// No .value needed\n\n// Destructuring loses reactivity - use toRefs\nimport { toRefs } from 'vue'\nconst { count, name } = toRefs(state)\n\n// Best practice:\n// - ref for primitives, arrays\n// - reactive for complex state objects" },
            explanation: "ref() for anything, reactive() for objects only."
          }
        ]
      }
    ]
  },
  {
    id: "vue-21",
    number: 21,
    title: "Composables",
    subtitle: "Reusable logic",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 35,
    xpReward: 65,
    prerequisites: ["vue-20"],
    learningObjectives: ["Create composable functions", "Use useX pattern", "Share state between components"],
    sections: [
      {
        id: "vue-21-1",
        title: "Composables",
        whyItMatters: "Extract and reuse stateful logic.",
        codeExamples: [
          {
            id: "vue-21-ex1",
            title: "useMouse composable",
            description: "Track cursor position",
            code: { javascript: "// composables/useMouse.ts\nimport { ref, onMounted, onUnmounted } from 'vue'\n\nexport function useMouse() {\n  const x = ref(0)\n  const y = ref(0)\n  \n  const update = (e) => {\n    x.value = e.pageX\n    y.value = e.pageY\n  }\n  \n  onMounted(() => window.addEventListener('mousemove', update))\n  onUnmounted(() => window.removeEventListener('mousemove', update))\n  \n  return { x, y }\n}\n\n// Usage\n// const { x, y } = useMouse()\n// <p>Mouse: {{ x }}, {{ y }}</p>" },
            explanation: "Composables return reactive state. Name with 'use' prefix."
          }
        ]
      }
    ]
  },
  {
    id: "vue-22",
    number: 22,
    title: "Dependency Injection",
    subtitle: "Provide/inject",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["vue-21"],
    learningObjectives: ["Use provide/inject", "Share data without props"],
    sections: [
      {
        id: "vue-22-1",
        title: "Provide/Inject",
        whyItMatters: "Pass data through component tree without props.",
        codeExamples: [
          {
            id: "vue-22-ex1",
            title: "Provide/Inject Example",
            description: "Share theme",
            code: { javascript: "// Parent\nimport { provide, ref } from 'vue'\nconst theme = ref('dark')\nprovide('theme', theme)\n\n// Child (any depth)\nimport { inject } from 'vue'\nconst theme = inject('theme')\n\n// With default\nconst user = inject('user', { name: 'Guest' })\n\n// Symbol keys\nconst key = Symbol()\nprovide(key, value)\nconst val = inject(key)" },
            explanation: "provide() passes down, inject() receives. Works at any depth."
          }
        ]
      }
    ]
  },
  {
    id: "vue-23",
    number: 23,
    title: "Teleport",
    subtitle: "Render in different place",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["vue-22"],
    learningObjectives: ["Use <Teleport>", "Target DOM elements"],
    sections: [
      {
        id: "vue-23-1",
        title: "Teleport Usage",
        whyItMatters: "Modal portals, z-index management.",
        codeExamples: [
          {
            id: "vue-23-ex1",
            title: "Teleport Example",
            description: "Modal component",
            code: { javascript: "// Modal.vue\n<template>\n  <Teleport to=\"body\">\n    <div v-if=\"show\" class=\"modal-overlay\">\n      <div class=\"modal\">\n        <slot></slot>\n        <button @click=\"$emit('close')\">Close</button>\n      </div>\n    </div>\n  </Teleport>\n</template>\n\n// Also targets:\n// <Teleport to=\"#modal-root\">\n// <Teleport to=\".modal-container\">\n// <Teleport to=\"[data-modal]\">" },
            explanation: "Teleport moves content to different DOM location. to='body' is common."
          }
        ]
      }
    ]
  },
  {
    id: "vue-24",
    number: 24,
    title: "Suspense",
    subtitle: "Async component handling",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["vue-23"],
    learningObjectives: ["Use <Suspense>", "Handle async components"],
    sections: [
      {
        id: "vue-24-1",
        title: "Suspense Component",
        whyItMatters: "Handle async dependencies elegantly.",
        codeExamples: [
          {
            id: "vue-24-ex1",
            title: "Suspense Example",
            description: "Loading state",
            code: { javascript: "// Async component\n// Child.vue\n<script setup>\nconst data = await fetch('/api/data').then(r => r.json())\n</script>\n\n// Parent with Suspense\n<template>\n  <Suspense>\n    <template #default>\n      <Child />\n    </template>\n    <template #fallback>\n      <LoadingSpinner />\n    </template>\n  </Suspense>\n</template>" },
            explanation: "Suspense shows fallback while async components load."
          }
        ]
      }
    ]
  },
  {
    id: "vue-25",
    number: 25,
    partLabel: "Part 3: Routing & State Management",
    title: "Vue Router",
    subtitle: "Client-side routing",
    difficulty: "Beginner" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["vue-24"],
    learningObjectives: ["Install Vue Router", "Create routes", "Use router-link"],
    sections: [
      {
        id: "vue-25-1",
        title: "Router Setup",
        whyItMatters: "Single Page Application routing.",
        codeExamples: [
          {
            id: "vue-25-ex1",
            title: "Basic Router",
            description: "Setup and usage",
            code: { javascript: "// router/index.ts\nimport { createRouter, createWebHistory } from 'vue-router'\nimport Home from '../views/Home.vue'\nimport About from '../views/About.vue'\n\nconst routes = [\n  { path: '/', component: Home },\n  { path: '/about', component: About }\n]\n\nconst router = createRouter({\n  history: createWebHistory(),\n  routes\n})\n\nexport default router\n\n// main.ts\n// app.use(router)\n\n// Usage\n// <router-link to=\"/\">Home</router-link>\n// <router-view />" },
            explanation: "Vue Router enables SPA navigation without page reload."
          }
        ]
      }
    ]
  },
  {
    id: "vue-26",
    number: 26,
    title: "Nested Routes",
    subtitle: "Hierarchical routing",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["vue-25"],
    learningObjectives: ["Define child routes", "Use router-view"],
    sections: [
      {
        id: "vue-26-1",
        title: "Nested Routes",
        whyItMatters: "Layouts with sub-pages.",
        codeExamples: [
          {
            id: "vue-26-ex1",
            title: "Nested Example",
            description: "User dashboard",
            code: { javascript: "const routes = [\n  {\n    path: '/user',\n    component: UserLayout,\n    children: [\n      { path: '', redirect: '/user/profile' },\n      { path: 'profile', component: UserProfile },\n      { path: 'settings', component: UserSettings }\n    ]\n  }\n]\n\n// UserLayout.vue\n<template>\n  <div class=\"user-layout\">\n    <nav><router-link to=\"/user/profile\">Profile</router-link></nav>\n    <router-view />\n  </div>\n</template>" },
            explanation: "Children render in parent router-view."
          }
        ]
      }
    ]
  },
  {
    id: "vue-27",
    number: 27,
    title: "Dynamic Routes",
    subtitle: "Route parameters",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["vue-26"],
    learningObjectives: ["Use route params", "Access with useRoute"],
    sections: [
      {
        id: "vue-27-1",
        title: "Dynamic Routing",
        whyItMatters: "URL parameters for data fetching.",
        codeExamples: [
          {
            id: "vue-27-ex1",
            title: "Route Params",
            description: "User profile example",
            code: { javascript: "// Route definition\n{ path: '/user/:id', component: UserProfile }\n\n// Access in component\n<script setup>\nimport { useRoute } from 'vue-router'\n\nconst route = useRoute()\nconst userId = route.params.id  // '123'\n\n// Or with props\n{ path: '/user/:id', component: UserProfile, props: true }\n// const props = defineProps(['id'])\n</script>\n\n// Navigation\n// <router-link to=\"/user/123\">User 123</router-link>" },
            explanation: "Access params via route.params or props."
          }
        ]
      }
    ]
  },
  {
    id: "vue-28",
    number: 28,
    title: "Route Guards",
    subtitle: "Navigation guards",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["vue-27"],
    learningObjectives: ["Use beforeEach", "Auth protection"],
    sections: [
      {
        id: "vue-28-1",
        title: "Navigation Guards",
        whyItMatters: "Control navigation flow.",
        codeExamples: [
          {
            id: "vue-28-ex1",
            title: "Guard Examples",
            description: "Auth and analytics",
            code: { javascript: "// Global guard\nrouter.beforeEach((to, from) => {\n  if (to.meta.requiresAuth && !isAuthenticated) {\n    return '/login'\n  }\n  return true\n})\n\n// Route guard\n{\n  path: '/admin',\n  component: Admin,\n  beforeEnter: (to, from) => {\n    return false // cancel navigation\n  }\n}\n\n// Component guard\n<script setup>\nbeforeRouteEnter((to, from) => {\n  // Cannot access 'this'\n})\n</script>" },
            explanation: "Guards: beforeEach, beforeEnter, beforeRouteEnter."
          }
        ]
      }
    ]
  },
  {
    id: "vue-29",
    number: 29,
    title: "Lazy Loading",
    subtitle: "Code splitting",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["vue-28"],
    learningObjectives: ["Use dynamic imports", "Lazy load routes"],
    sections: [
      {
        id: "vue-29-1",
        title: "Lazy Loading Routes",
        whyItMatters: "Reduce initial bundle size.",
        codeExamples: [
          {
            id: "vue-29-ex1",
            title: "Dynamic Import",
            description: "Lazy route",
            code: { javascript: "// Instead of\nimport Home from './views/Home.vue'\n\n// Use\nconst Home = () => import('./views/Home.vue')\n\n// Route definition\nconst routes = [\n  {\n    path: '/',\n    component: () => import('./views/Home.vue')\n  },\n  {\n    path: '/about',\n    component: () => import('./views/About.vue'),\n    // Named chunk\n    chunkName: 'about'\n  }\n]\n\n// Navigate to /about triggers chunk download" },
            explanation: "Dynamic import() lazy loads component on navigation."
          }
        ]
      }
    ]
  },
  {
    id: "vue-30",
    number: 30,
    title: "Pinia Introduction",
    subtitle: "State management",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["vue-29"],
    learningObjectives: ["Install Pinia", "Create stores", "Use store in components"],
    sections: [
      {
        id: "vue-30-1",
        title: "Pinia Setup",
        whyItMatters: "Official state management solution.",
        codeExamples: [
          {
            id: "vue-30-ex1",
            title: "Basic Store",
            description: "Counter store",
            code: { javascript: "// stores/counter.ts\nimport { defineStore } from 'pinia'\n\nexport const useCounterStore = defineStore('counter', {\n  // State\n  state: () => ({\n    count: 0\n  }),\n  \n  // Actions\n  actions: {\n    increment() {\n      this.count++\n    }\n  },\n  \n  // Getters\n  getters: {\n    doubled: (state) => state.count * 2\n  }\n})\n\n// main.ts\n// import { createPinia } from 'pinia'\n// app.use(createPinia())" },
            explanation: "Pinia is Vue 3's recommended state management."
          }
        ]
      }
    ]
  },
  {
    id: "vue-31",
    number: 31,
    title: "State Management",
    subtitle: "Store patterns",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["vue-30"],
    learningObjectives: ["Use state and actions", "Access store in components"],
    sections: [
      {
        id: "vue-31-1",
        title: "Using Stores",
        whyItMatters: "Global reactive state.",
        codeExamples: [
          {
            id: "vue-31-ex1",
            title: "Store Usage",
            description: "In components",
            code: { javascript: "<script setup>\nimport { useCounterStore } from '@/stores/counter'\n\n// Option 1: store instance\nconst store = useCounterStore()\nconsole.log(store.count)\nstore.increment()\n\n// Option 2: destructuring (reactive)\nconst { count, doubled } = storeToRefs(store)\nconst { increment } = store\n\n// Option 3: auto-destructuring in <script setup>\n// count and increment are auto-reactive\n</script>\n\n<template>\n  <p>Count: {{ store.count }}</p>\n  <button @click=\"store.increment()\">+</button>\n</template>" },
            explanation: "Use storeToRefs() to destructure while keeping reactivity."
          }
        ]
      }
    ]
  },
  {
    id: "vue-32",
    number: 32,
    title: "Actions and Getters",
    subtitle: "Store logic",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["vue-31"],
    learningObjectives: ["Create actions", "Create getters", "Access other stores"],
    sections: [
      {
        id: "vue-32-1",
        title: "Advanced Store",
        whyItMatters: "Complex state logic.",
        codeExamples: [
          {
            id: "vue-32-ex1",
            title: "Actions and Getters",
            description: "With dependencies",
            code: { javascript: "import { defineStore } from 'pinia'\nimport { useUserStore } from './user'\n\nexport const useCartStore = defineStore('cart', {\n  state: () => ({\n    items: []\n  }),\n  \n  getters: {\n    totalItems: (state) => state.items.length,\n    \n    totalPrice() {\n      // Can use 'this' in getters\n      return this.items.reduce((sum, item) => sum + item.price, 0)\n    },\n    \n    // Access other store\n    userName() {\n      const userStore = useUserStore()\n      return userStore.name\n    }\n  },\n  \n  actions: {\n    addItem(item) {\n      this.items.push(item)\n    },\n    async checkout() {\n      // Async actions supported\n      await api.post('/order', { items: this.items })\n      this.items = []\n    }\n  }\n})" },
            explanation: "Actions are methods. Getters compute derived state."
          }
        ]
      }
    ]
  },
  {
    id: "vue-33",
    number: 33,
    title: "Store Architecture",
    subtitle: "Modular stores",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["vue-32"],
    learningObjectives: ["Create multiple stores", "Organize store files"],
    sections: [
      {
        id: "vue-33-1",
        title: "Store Modules",
        whyItMatters: "Scalable state architecture.",
        codeExamples: [
          {
            id: "vue-33-ex1",
            title: "File Organization",
            description: "Modular approach",
            code: { javascript: "// stores/index.ts\nimport { createPinia } from 'pinia'\nexport const pinia = createPinia()\n\n// stores/user.ts\nexport const useUserStore = defineStore('user', ...)\n\n// stores/products.ts\nexport const useProductStore = defineStore('product', ...)\n\n// stores/cart.ts\nexport const useCartStore = defineStore('cart', ...)\n\n// Usage in components\n// import { useUserStore } from '@/stores/user'\n// import { useProductStore } from '@/stores/product'" },
            explanation: "One store per file. Import specific stores as needed."
          }
        ]
      }
    ]
  },
  {
    id: "vue-34",
    number: 34,
    title: "Persisted State",
    subtitle: "LocalStorage sync",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["vue-33"],
    learningObjectives: ["Use pinia-plugin-persistedstate", "Persist store data"],
    sections: [
      {
        id: "vue-34-1",
        title: "Persistence",
        whyItMatters: "Keep state across sessions.",
        codeExamples: [
          {
            id: "vue-34-ex1",
            title: "Persist Plugin",
            description: "Setup and usage",
            code: { javascript: "// main.ts\nimport piniaPluginPersistedstate from 'pinia-plugin-persistedstate'\nconst pinia = createPinia()\npinia.use(piniaPluginPersistedstate)\n\n// Store\nexport const useSettingsStore = defineStore('settings', {\n  state: () => ({\n    theme: 'dark',\n    language: 'en'\n  }),\n  persist: true  // Auto-save to localStorage\n})\n\n// Options\npersist: {\n  key: 'my-app-settings',\n  storage: sessionStorage,\n  paths: ['theme']  // persist only theme\n}" },
            explanation: "pinia-plugin-persistedstate simplifies localStorage sync."
          }
        ]
      }
    ]
  },
  {
    id: "vue-35",
    number: 35,
    title: "API Data Stores",
    subtitle: "Async data in stores",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["vue-34"],
    learningObjectives: ["Fetch and store API data", "Handle loading states"],
    sections: [
      {
        id: "vue-35-1",
        title: "API Integration",
        whyItMatters: "Store-based data fetching.",
        codeExamples: [
          {
            id: "vue-35-ex1",
            title: "Async Store",
            description: "With loading state",
            code: { javascript: "export const useProductStore = defineStore('products', {\n  state: () => ({\n    products: [],\n    loading: false,\n    error: null\n  }),\n  \n  actions: {\n    async fetchProducts() {\n      this.loading = true\n      this.error = null\n      try {\n        const response = await fetch('/api/products')\n        this.products = await response.json()\n      } catch (e) {\n        this.error = e.message\n      } finally {\n        this.loading = false\n      }\n    }\n  },\n  \n  getters: {\n    productById: (state) => (id) => \n      state.products.find(p => p.id === id)\n  }\n})" },
            explanation: "Store actions can be async. Handle loading/error states."
          }
        ]
      }
    ]
  },
  {
    id: "vue-36",
    number: 36,
    title: "Authentication State",
    subtitle: "Auth store pattern",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["vue-35"],
    learningObjectives: ["Create auth store", "Handle login/logout"],
    sections: [
      {
        id: "vue-36-1",
        title: "Auth Store",
        whyItMatters: "Centralized authentication state.",
        codeExamples: [
          {
            id: "vue-36-ex1",
            title: "Auth Implementation",
            description: "Login flow",
            code: { javascript: "export const useAuthStore = defineStore('auth', {\n  state: () => ({\n    user: null,\n    token: null\n  }),\n  \n  getters: {\n    isAuthenticated: (state) => !!state.token\n  },\n  \n  actions: {\n    async login(credentials) {\n      const response = await api.post('/auth/login', credentials)\n      this.user = response.user\n      this.token = response.token\n      router.push('/dashboard')\n    },\n    \n    logout() {\n      this.user = null\n      this.token = null\n      router.push('/login')\n    }\n  },\n  persist: true\n})" },
            explanation: "Auth store manages user session. Persist token for session."
          }
        ]
      }
    ]
  },
  {
    id: "vue-37",
    number: 37,
    partLabel: "Part 4: Forms, APIs & Real Apps",
    title: "Forms in Vue",
    subtitle: "Form handling",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["vue-36"],
    learningObjectives: ["Use v-model with forms", "Handle form submission"],
    sections: [
      {
        id: "vue-37-1",
        title: "Form Handling",
        whyItMatters: "User input is core to web apps.",
        codeExamples: [
          {
            id: "vue-37-ex1",
            title: "Form with v-model",
            description: "Multiple input types",
            code: { javascript: "<script setup>\nconst form = ref({\n  name: '',\n  email: '',\n  country: '',\n  newsletter: false\n})\n\nconst countries = ['USA', 'Canada', 'UK']\n\nconst submit = () => {\n  console.log(form.value)\n}\n</script>\n\n<template>\n  <form @submit.prevent=\"submit\">\n    <input v-model=\"form.name\" placeholder=\"Name\" />\n    <input v-model=\"form.email\" type=\"email\" />\n    <select v-model=\"form.country\">\n      <option v-for=\"c in countries\" :key=\"c\" :value=\"c\">{{ c }}</option>\n    </select>\n    <input v-model=\"form.newsletter\" type=\"checkbox\" />\n    <button type=\"submit\">Submit</button>\n  </form>\n</template>" },
            explanation: "v-model works with all input types. Use .prevent on submit."
          }
        ]
      }
    ]
  },
  {
    id: "vue-38",
    number: 38,
    title: "Form Validation",
    subtitle: "Validate user input",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["vue-37"],
    learningObjectives: ["Implement custom validation", "Show error messages"],
    sections: [
      {
        id: "vue-38-1",
        title: "Validation",
        whyItMatters: "Data integrity.",
        codeExamples: [
          {
            id: "vue-38-ex1",
            title: "Validation Example",
            description: "Manual validation",
            code: { javascript: "<script setup>\nconst form = ref({ email: '', password: '' })\nconst errors = ref({})\n\nconst validate = () => {\n  errors.value = {}\n  \n  if (!form.value.email) {\n    errors.value.email = 'Email required'\n  } else if (!/.*@.*\\..*/.test(form.value.email)) {\n    errors.value.email = 'Invalid email'\n  }\n  \n  if (form.value.password.length < 8) {\n    errors.value.password = 'Min 8 characters'\n  }\n  \n  return Object.keys(errors.value).length === 0\n}\n\nconst submit = () => {\n  if (validate()) {\n    // send to API\n  }\n}\n</script>\n\n<template>\n  <input v-model=\"form.email\" />\n  <span v-if=\"errors.email\" class=\"error\">{{ errors.email }}</span>\n</template>" },
            explanation: "Validate before submit. Show errors inline."
          }
        ]
      }
    ]
  },
  {
    id: "vue-39",
    number: 39,
    title: "Async Operations",
    subtitle: "Promise handling",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["vue-38"],
    learningObjectives: ["Use async/await", "Handle loading and errors"],
    sections: [
      {
        id: "vue-39-1",
        title: "Async in Vue",
        whyItMatters: "API calls are async.",
        codeExamples: [
          {
            id: "vue-39-ex1",
            title: "Async/Await",
            description: "Clean async code",
            code: { javascript: "<script setup>\nconst data = ref(null)\nconst loading = ref(false)\nconst error = ref(null)\n\nconst fetchData = async () => {\n  loading.value = true\n  error.value = null\n  try {\n    const res = await fetch('/api/data')\n    if (!res.ok) throw new Error('Failed')\n    data.value = await res.json()\n  } catch (e) {\n    error.value = e.message\n  } finally {\n    loading.value = false\n  }\n}\n\nonMounted(fetchData)\n</script>\n\n<template>\n  <div v-if=\"loading\">Loading...</div>\n  <div v-else-if=\"error\" class=\"error\">{{ error }}</div>\n  <div v-else>{{ data }}</div>\n</template>" },
            explanation: "Handle all states: loading, success, error."
          }
        ]
      }
    ]
  },
  {
    id: "vue-40",
    number: 40,
    title: "Fetch API",
    subtitle: "HTTP requests",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["vue-39"],
    learningObjectives: ["Use fetch for GET/POST", "Handle responses"],
    sections: [
      {
        id: "vue-40-1",
        title: "Fetch API",
        whyItMatters: "Browser native HTTP client.",
        codeExamples: [
          {
            id: "vue-40-ex1",
            title: "Fetch Examples",
            description: "GET and POST",
            code: { javascript: "// GET\nconst getData = async () => {\n  const res = await fetch('https://api.example.com/users')\n  const data = await res.json()\n  return data\n}\n\n// POST\nconst createUser = async (user) => {\n  const res = await fetch('https://api.example.com/users', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(user)\n  })\n  return res.json()\n}\n\n// With error handling\nif (!res.ok) {\n  throw new Error(\\`HTTP \\${res.status}\\`)\n}" },
            explanation: "Fetch is native browser API. Don't forget JSON.stringify body."
          }
        ]
      }
    ]
  },
  {
    id: "vue-41",
    number: 41,
    title: "Axios with Vue",
    subtitle: "HTTP client library",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["vue-40"],
    learningObjectives: ["Install and use Axios", "Create API service"],
    sections: [
      {
        id: "vue-41-1",
        title: "Axios Setup",
        whyItMatters: "Axios provides interceptors and better error handling.",
        codeExamples: [
          {
            id: "vue-41-ex1",
            title: "Axios Service",
            description: "API wrapper",
            code: { javascript: "// api/index.js\nimport axios from 'axios'\n\nconst api = axios.create({\n  baseURL: 'https://api.example.com',\n  timeout: 10000\n})\n\n// Interceptors\napi.interceptors.request.use(config => {\n  const token = useAuthStore().token\n  if (token) config.headers.Authorization = \\`Bearer \\${token}\\`\n  return config\n})\n\nexport default api\n\n// Usage\n// const { data } = await api.get('/users')\n// await api.post('/users', { name: 'John' })" },
            explanation: "Axios is more feature-rich than fetch. Use for complex APIs."
          }
        ]
      }
    ]
  },
  {
    id: "vue-42",
    number: 42,
    title: "Error Handling",
    subtitle: "Graceful error management",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["vue-41"],
    learningObjectives: ["Handle API errors", "User-friendly messages"],
    sections: [
      {
        id: "vue-42-1",
        title: "Error Strategy",
        whyItMatters: "Users need clear feedback.",
        codeExamples: [
          {
            id: "vue-42-ex1",
            title: "Error Handling",
            description: "User feedback",
            code: { javascript: "const handleError = (error) => {\n  if (error.response) {\n    // Server responded with error\n    switch (error.response.status) {\n      case 401: return 'Please login'\n      case 404: return 'Resource not found'\n      case 500: return 'Server error'\n    }\n  } else if (error.request) {\n    // No response received\n    return 'Network error'\n  }\n  return 'Something went wrong'\n}\n\n// In component\ntry {\n  await api.get('/data')\n} catch (e) {\n  error.value = handleError(e)\n}" },
            explanation: "Differentiate error types. Show actionable messages."
          }
        ]
      }
    ]
  },
  {
    id: "vue-43",
    number: 43,
    title: "Authentication Systems",
    subtitle: "Login implementation",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["vue-42"],
    learningObjectives: ["Implement login flow", "Handle tokens"],
    sections: [
      {
        id: "vue-43-1",
        title: "Auth Flow",
        whyItMatters: "Secure user sessions.",
        codeExamples: [
          {
            id: "vue-43-ex1",
            title: "Login Implementation",
            description: "Token-based auth",
            code: { javascript: "// Login\nconst login = async (credentials) => {\n  const { data } = await api.post('/auth/login', credentials)\n  authStore.setToken(data.token)\n  authStore.setUser(data.user)\n  router.push('/dashboard')\n}\n\n// Protected route\nrouter.beforeEach(async (to) => {\n  if (to.meta.requiresAuth && !authStore.token) {\n    return '/login'\n  }\n})\n\n// Use in API calls\napi.defaults.headers.common['Authorization'] = \\`Bearer \\${token}\\`" },
            explanation: "Store token securely. Include in API requests."
          }
        ]
      }
    ]
  },
  {
    id: "vue-44",
    number: 44,
    title: "Protected Routes",
    subtitle: "Route guards for auth",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["vue-43"],
    learningObjectives: ["Guard routes", "Redirect unauthorized users"],
    sections: [
      {
        id: "vue-44-1",
        title: "Route Guards",
        whyItMatters: "Security boundary.",
        codeExamples: [
          {
            id: "vue-44-ex1",
            title: "Auth Guard",
            description: "Protect routes",
            code: { javascript: "router.beforeEach((to, from) => {\n  const auth = useAuthStore()\n  \n  if (to.meta.requiresAuth && !auth.isAuthenticated) {\n    return { \n      path: '/login',\n      query: { redirect: to.fullPath }\n    }\n  }\n  \n  if (to.meta.guestOnly && auth.isAuthenticated) {\n    return '/dashboard'\n  }\n})\n\n// In route definition\n{\n  path: '/admin',\n  component: Admin,\n  meta: { requiresAuth: true }\n}" },
            explanation: "Meta fields store auth requirements. Guard checks them."
          }
        ]
      }
    ]
  },
  {
    id: "vue-45",
    number: 45,
    title: "File Uploads",
    subtitle: "Upload handling",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["vue-44"],
    learningObjectives: ["Handle file input", "Upload to server"],
    sections: [
      {
        id: "vue-45-1",
        title: "File Upload",
        whyItMatters: "Media handling.",
        codeExamples: [
          {
            id: "vue-45-ex1",
            title: "Upload Component",
            description: "Drag and drop",
            code: { javascript: "<script setup>\nconst file = ref(null)\n\nconst handleFile = (e) => {\n  file.value = e.target.files[0]\n}\n\nconst upload = async () => {\n  const formData = new FormData()\n  formData.append('file', file.value)\n  \n  await api.post('/upload', formData, {\n    headers: { 'Content-Type': 'multipart/form-data' }\n  })\n}\n</script>\n\n<template>\n  <input type=\"file\" @change=\"handleFile\" accept=\"image/*\" />\n  <button @click=\"upload\" :disabled=\"!file\">Upload</button>\n</template>" },
            explanation: "Use FormData for file uploads. Set correct content-type."
          }
        ]
      }
    ]
  },
  {
    id: "vue-46",
    number: 46,
    title: "Realtime Features",
    subtitle: "WebSocket integration",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["vue-45"],
    learningObjectives: ["Use WebSocket", "Handle real-time updates"],
    sections: [
      {
        id: "vue-46-1",
        title: "WebSocket",
        whyItMatters: "Live updates.",
        codeExamples: [
          {
            id: "vue-46-ex1",
            title: "WebSocket Composable",
            description: "Reactive socket",
            code: { javascript: "export function useWebSocket(url) {\n  const data = ref(null)\n  const status = ref('disconnected')\n  let ws = null\n  \n  const connect = () => {\n    ws = new WebSocket(url)\n    ws.onopen = () => status.value = 'connected'\n    ws.onmessage = (e) => data.value = JSON.parse(e.data)\n    ws.onclose = () => status.value = 'disconnected'\n  }\n  \n  const send = (msg) => ws?.send(JSON.stringify(msg))\n  \n  onUnmounted(() => ws?.close())\n  \n  return { data, status, connect, send }\n}" },
            explanation: "WebSocket provides bidirectional real-time communication."
          }
        ]
      }
    ]
  },
  {
    id: "vue-47",
    number: 47,
    title: "Vue Transitions",
    subtitle: "Animated transitions",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["vue-46"],
    learningObjectives: ["Use <Transition>", "CSS animations"],
    sections: [
      {
        id: "vue-47-1",
        title: "Transitions",
        whyItMatters: "Smooth UI changes.",
        codeExamples: [
          {
            id: "vue-47-ex1",
            title: "Transition Component",
            description: "Fade in/out",
            code: { javascript: "<template>\n  <button @click=\"show = !show\">Toggle</button>\n  \n  <Transition name=\"fade\">\n    <div v-if=\"show\">Content</div>\n  </Transition>\n</template>\n\n<style>\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity 0.3s\n}\n.fade-enter-from,\n.fade-leave-to {\n  opacity: 0\n}\n</style>\n\n// Other: mode='out-in', nested transitions" },
            explanation: "Vue transitions animate enter/leave states."
          }
        ]
      }
    ]
  },
  {
    id: "vue-48",
    number: 48,
    title: "Animations",
    subtitle: "Advanced animations",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["vue-47"],
    learningObjectives: ["Use TransitionGroup", "Animate lists"],
    sections: [
      {
        id: "vue-48-1",
        title: "List Animations",
        whyItMatters: "Animate dynamic lists.",
        codeExamples: [
          {
            id: "vue-48-ex1",
            title: "TransitionGroup",
            description: "Animated list",
            code: { javascript: "<template>\n  <TransitionGroup name=\"list\" tag=\"ul\">\n    <li v-for=\"item in items\" :key=\"item.id\">\n      {{ item.name }}\n    </li>\n  </TransitionGroup>\n</template>\n\n<style>\n.list-enter-active,\n.list-leave-active {\n  transition: all 0.5s\n}\n.list-enter-from,\n.list-leave-to {\n  opacity: 0\n  transform: translateX(30px)\n}\n.list-move {\n  transition: transform 0.5s\n}\n</style>" },
            explanation: "TransitionGroup animates list reordering with move class."
          }
        ]
      }
    ]
  },
  {
    id: "vue-49",
    number: 49,
    partLabel: "Part 5: Advanced Vue",
    title: "Vue Performance Optimization",
    subtitle: "Optimization techniques",
    difficulty: "Advanced" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["vue-48"],
    learningObjectives: ["Use v-memo", "Optimize re-renders"],
    sections: [
      {
        id: "vue-49-1",
        title: "Optimization",
        whyItMatters: "Fast apps matter.",
        codeExamples: [
          {
            id: "vue-49-ex1",
            title: "Optimization Tips",
            description: "Reduce re-renders",
            code: { javascript: "// v-memo - cache templates\n<div v-for=\"item in items\" :key=\"item.id\" v-memo=\"[item.updated]\">\n  <ComplexComponent :data=\"item\" />\n</div>\n\n// shallowRef - prevent deep reactivity\nimport { shallowRef } from 'vue'\nconst largeObj = shallowRef({ big: 'data' })\n\n// computed with caching\nconst cached = computed(() => {\n  // Only recalculates when dependencies change\n})\n\n// v-once - render once\n<div v-once>This never changes</div>" },
            explanation: "v-memo caches subtrees. shallowRef for large objects."
          }
        ]
      }
    ]
  },
  {
    id: "vue-50",
    number: 50,
    title: "Code Splitting",
    subtitle: "Lazy loading",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["vue-49"],
    learningObjectives: ["Split code by route", "Component-level splitting"],
    sections: [
      {
        id: "vue-50-1",
        title: "Code Splitting",
        whyItMatters: "Reduce initial load.",
        codeExamples: [
          {
            id: "vue-50-ex1",
            title: "Split Strategies",
            description: "Route and component",
            code: { javascript: "// Route-level (already covered)\nconst Home = () => import('./Home.vue')\n\n// Component-level\nconst HeavyChart = defineAsyncComponent(() => \n  import('./HeavyChart.vue')\n)\n\n// With loading\nconst HeavyChart = defineAsyncComponent({\n  loader: () => import('./HeavyChart.vue'),\n  loadingComponent: LoadingSpinner,\n  delay: 200\n})\n\n// Suspense usage\n<Suspense>\n  <HeavyChart />\n</Suspense>" },
            explanation: "defineAsyncComponent for component-level lazy loading."
          }
        ]
      }
    ]
  },
  {
    id: "vue-51",
    number: 51,
    title: "Async Components",
    subtitle: "Lazy load components",
    difficulty: "Advanced" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["vue-50"],
    learningObjectives: ["Use defineAsyncComponent", "Handle loading states"],
    sections: [
      {
        id: "vue-51-1",
        title: "Async Components",
        whyItMatters: "On-demand loading.",
        codeExamples: [
          {
            id: "vue-51-ex1",
            title: "Async Component Options",
            description: "Full configuration",
            code: { javascript: "const AsyncModal = defineAsyncComponent({\n  loader: () => import('./Modal.vue'),\n  loadingComponent: ModalSkeleton,\n  errorComponent: ModalError,\n  delay: 200,\n  timeout: 3000\n})\n\n// In template\n<AsyncModal v-if=\"showModal\" />\n\n// Global registration\napp.component('AsyncModal', defineAsyncComponent(...))" },
            explanation: "Configure loading, error, delay, timeout for async components."
          }
        ]
      }
    ]
  },
  {
    id: "vue-52",
    number: 52,
    title: "Vue SSR",
    subtitle: "Server-side rendering",
    difficulty: "Advanced" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["vue-51"],
    learningObjectives: ["Understand SSR", "Use Vite SSR"],
    sections: [
      {
        id: "vue-52-1",
        title: "SSR Basics",
        whyItMatters: "SEO and initial load.",
        codeExamples: [
          {
            id: "vue-52-ex1",
            title: "SSR Example",
            description: "Vite SSR setup",
            code: { javascript: "// vite.config.js\nexport default defineConfig({\n  ssr: true\n})\n\n// Server entry\nimport { createApp } from './app.js'\nimport { renderToString } from 'vue/server-renderer'\n\nconst app = createApp()\nconst html = await renderToString(app)\n\n// Hydration\n// Client hydrates the static HTML\nimport { hydrate } from 'vue'\nhydrate(app, document.getElementById('app'))\n\n// For full SSR, use Nuxt (recommended)" },
            explanation: "SSR renders Vue on server. Use Nuxt for production SSR."
          }
        ]
      }
    ]
  },
  {
    id: "vue-53",
    number: 53,
    title: "Nuxt.js Introduction",
    subtitle: "Vue meta-framework",
    difficulty: "Advanced" as const,
    estimatedMinutes: 40,
    xpReward: 65,
    prerequisites: ["vue-52"],
    learningObjectives: ["Understand Nuxt features", "Create Nuxt project"],
    sections: [
      {
        id: "vue-53-1",
        title: "Nuxt Overview",
        whyItMatters: "Production-grade Vue framework.",
        codeExamples: [
          {
            id: "vue-53-ex1",
            title: "Nuxt Setup",
            description: "Create project",
            code: { javascript: "-- Install\nnpx nuxi@latest init my-app\ncd my-app\nnpm install\n\n-- Run\nnpm run dev\n\n-- File structure\npages/\n  index.vue\n  about.vue\ncomponents/\n  Header.vue\napp.vue\nnuxt.config.ts\n\n-- Auto-imports\n// components/Header.vue auto-imported as <Header />\n// composables/useAuth() auto-imported" },
            explanation: "Nuxt provides SSR, auto-imports, file-based routing, SSR."
          }
        ]
      }
    ]
  },
  {
    id: "vue-54",
    number: 54,
    title: "Vue with TypeScript",
    subtitle: "TypeScript integration",
    difficulty: "Advanced" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["vue-53"],
    learningObjectives: ["Type components", "Type props and events"],
    sections: [
      {
        id: "vue-54-1",
        title: "TypeScript in Vue",
        whyItMatters: "Type safety.",
        codeExamples: [
          {
            id: "vue-54-ex1",
            title: "Full TypeScript",
            description: "Typed component",
            code: { javascript: "interface Props {\n  title: string\n  count?: number\n}\n\ninterface Emits {\n  (e: 'update', value: string): void\n  (e: 'delete', id: number): void\n}\n\ndefineProps<Props>()\ndefineEmits<Emits>()\n\n// Or with component type\nimport type { ComponentProps } from 'vue'\ntype MyProps = ComponentProps<typeof MyComponent>\n\n// Provide/inject with types\nconst key = Symbol() as InjectionKey<AuthState>\nprovide(key, state)" },
            explanation: "Use interface for props and emits. InjectionKey for provide."
          }
        ]
      }
    ]
  },
  {
    id: "vue-55",
    number: 55,
    title: "Accessibility",
    subtitle: "A11y in Vue",
    difficulty: "Advanced" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["vue-54"],
    learningObjectives: ["Use semantic HTML", "ARIA in Vue"],
    sections: [
      {
        id: "vue-55-1",
        title: "Accessibility",
        whyItMatters: "Inclusive web.",
        codeExamples: [
          {
            id: "vue-55-ex1",
            title: "A11y Example",
            description: "Accessible component",
            code: { javascript: "<template>\n  <!-- Semantic HTML -->\n  <header>\n    <nav aria-label=\"Main navigation\">\n      <ul>\n        <li><a href=\"/\">Home</a></li>\n      </ul>\n    </nav>\n  </header>\n  \n  <!-- Button with aria -->\n  <button \n    @click=\"openMenu\"\n    aria-expanded=\"isOpen\"\n    aria-controls=\"menu\"\n  >\n    Menu\n  </button>\n  \n  <!-- Form labels -->\n  <label for=\"email\">Email</label>\n  <input id=\"email\" v-model=\"email\" aria-required=\"true\" />\n  \n  <!-- Live region for dynamic content -->\n  <div aria-live=\"polite\" aria-atomic=\"true\">\n    {{ statusMessage }}\n  </div>\n</template>" },
            explanation: "Use semantic HTML, proper labels, ARIA attributes."
          }
        ]
      }
    ]
  },
  {
    id: "vue-56",
    number: 56,
    title: "Vue Testing",
    subtitle: "Testing fundamentals",
    difficulty: "Advanced" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["vue-55"],
    learningObjectives: ["Test components", "Use testing library"],
    sections: [
      {
        id: "vue-56-1",
        title: "Testing Basics",
        whyItMatters: "Confidence in code.",
        codeExamples: [
          {
            id: "vue-56-ex1",
            title: "Component Test",
            description: "Vue Test Library",
            code: { javascript: "import { render, screen, fireEvent } from '@testing-library/vue'\nimport Counter from './Counter.vue'\n\ntest('increments counter', async () => {\n  render(Counter)\n  \n  const button = screen.getByRole('button', { name: /increment/i })\n  await fireEvent.click(button)\n  \n  expect(screen.getByText('Count: 1')).toBeInTheDocument()\n})\n\n// Snapshot testing\nimport { snapshot } from '@testing-library/vue'\nexpect(Counter).toMatchSnapshot()" },
            explanation: "@testing-library/vue provides component testing utilities."
          }
        ]
      }
    ]
  },
  {
    id: "vue-57",
    number: 57,
    title: "Vitest",
    subtitle: "Vite-native testing",
    difficulty: "Advanced" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["vue-56"],
    learningObjectives: ["Configure Vitest", "Write unit tests"],
    sections: [
      {
        id: "vue-57-1",
        title: "Vitest Setup",
        whyItMatters: "Fast test runner.",
        codeExamples: [
          {
            id: "vue-57-ex1",
            title: "Vitest Config",
            description: "Vite integration",
            code: { javascript: "// vite.config.ts\nimport { defineConfig } from 'vitest/config'\n\nexport default defineConfig({\n  test: {\n    environment: 'jsdom',\n    globals: true,\n    include: ['**/*.test.ts', '**/*.spec.ts']\n  }\n})\n\n// composables/useCounter.test.ts\nimport { useCounter } from './useCounter'\nimport { describe, it, expect } from 'vitest'\n\ndescribe('useCounter', () => {\n  it('increments', () => {\n    const { count, increment } = useCounter()\n    increment()\n    expect(count.value).toBe(1)\n  })\n})" },
            explanation: "Vitest shares config with Vite. Jest-compatible API."
          }
        ]
      }
    ]
  },
  {
    id: "vue-58",
    number: 58,
    title: "Component Testing",
    subtitle: "Testing Vue components",
    difficulty: "Advanced" as const,
    estimatedMinutes: 35,
    xpReward: 60,
    prerequisites: ["vue-57"],
    learningObjectives: ["Test props and events", "Test computed"],
    sections: [
      {
        id: "vue-58-1",
        title: "Component Tests",
        whyItMatters: "Verify component behavior.",
        codeExamples: [
          {
            id: "vue-58-ex1",
            title: "Test Examples",
            description: "Props and emits",
            code: { javascript: "import { mount } from '@vue/test-utils'\nimport UserCard from './UserCard.vue'\n\ntest('renders props', () => {\n  const wrapper = mount(UserCard, {\n    props: { name: 'John', email: 'john@test.com' }\n  })\n  \n  expect(wrapper.text()).toContain('John')\n  expect(wrapper.text()).toContain('john@test.com')\n})\n\ntest('emits event', async () => {\n  const wrapper = mount(UserCard, {\n    props: { name: 'John' }\n  })\n  \n  await wrapper.find('button').trigger('click')\n  \n  expect(wrapper.emitted('delete')).toBeTruthy()\n})" },
            explanation: "@vue/test-utils provides mount() for component testing."
          }
        ]
      }
    ]
  },
  {
    id: "vue-59",
    number: 59,
    title: "Security Best Practices",
    subtitle: "Secure Vue apps",
    difficulty: "Advanced" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["vue-58"],
    learningObjectives: ["Prevent XSS", "Secure inputs"],
    sections: [
      {
        id: "vue-59-1",
        title: "Security",
        whyItMatters: "Protect users.",
        codeExamples: [
          {
            id: "vue-59-ex1",
            title: "Security Tips",
            description: "Vue-specific",
            code: { javascript: "// XSS prevention\n// Vue escapes by default\n{{ userInput }}  // Safe\n\n// v-html is dangerous\n<div v-html=\"userContent\"></div>  // Only use with sanitized content\n\n// Use DOMPurify\nimport DOMPurify from 'dompurify'\nconst safe = DOMPurify.sanitize(dirty)\n\n// CSRF\n// Use SameSite cookies or CSRF tokens\n// Axios handles this with interceptors\n\n// Validate all inputs\n// Never trust user data" },
            explanation: "Vue escapes automatically. Avoid v-html with user content."
          }
        ]
      }
    ]
  },
  {
    id: "vue-60",
    number: 60,
    title: "Vue Architecture Patterns",
    subtitle: "Best practices",
    difficulty: "Advanced" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["vue-59"],
    learningObjectives: ["Structure Vue apps", "Follow best practices"],
    sections: [
      {
        id: "vue-60-1",
        title: "Architecture",
        whyItMatters: "Maintainable code.",
        codeExamples: [
          {
            id: "vue-60-ex1",
            title: "Best Practices",
            description: "Patterns",
            code: { javascript: "// 1. Feature-based organization\nfeatures/\n  auth/\n    components/\n    composables/\n    store/\n  dashboard/\n    components/\n\n// 2. Composable first\n// Extract logic into composables, keep components thin\n\n// 3. Pinia for global state, local state for component-only\n\n// 4. TypeScript everywhere\n\n// 5. Composition API over Options API\n\n// 6. One component per file\n\n// 7. Proper component naming\n// UserCard.vue, TheHeader.vue, BaseButton.vue" },
            explanation: "Feature folders, composables for logic, TypeScript everywhere."
          }
        ]
      }
    ]
  },
  {
    id: "vue-61",
    number: 61,
    partLabel: "Part 6: Deployment & Ecosystem",
    title: "Vite Build System",
    subtitle: "Build configuration",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["vue-60"],
    learningObjectives: ["Configure Vite", "Optimize build"],
    sections: [
      {
        id: "vue-61-1",
        title: "Vite Config",
        whyItMatters: "Production builds.",
        codeExamples: [
          {
            id: "vue-61-ex1",
            title: "Vite Configuration",
            description: "Build options",
            code: { javascript: "// vite.config.ts\nimport { defineConfig } from 'vite'\nimport vue from '@vitejs/plugin-vue'\n\nexport default defineConfig({\n  plugins: [vue()],\n  build: {\n    target: 'es2020',\n    minify: 'terser',\n    rollupOptions: {\n      output: {\n        manualChunks: {\n          'vendor': ['vue', 'vue-router', 'pinia']\n        }\n      }\n    }\n  },\n  resolve: {\n    alias: {\n      '@': '/src'\n    }\n  }\n})" },
            explanation: "Configure target, minification, and chunking in vite.config."
          }
        ]
      }
    ]
  },
  {
    id: "vue-62",
    number: 62,
    title: "Environment Variables",
    subtitle: "Configuration",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 20,
    xpReward: 45,
    prerequisites: ["vue-61"],
    learningObjectives: ["Use .env files", "Access env vars"],
    sections: [
      {
        id: "vue-62-1",
        title: "Env Variables",
        whyItMatters: "Configuration management.",
        codeExamples: [
          {
            id: "vue-62-ex1",
            title: "Environment Files",
            description: "Vite env",
            code: { javascript: "// .env - all environments\n// .env.development - dev only\n// .env.production - prod only\n// .env.local - local, gitignored\n\nVITE_API_URL=https://api.example.com\nVITE_APP_TITLE=My App\n\n// Usage in code\nconsole.log(import.meta.env.VITE_API_URL)\n\n// TypeScript support\n// env.d.ts\n/// <reference types=\"vite/client\" />\ninterface ImportMetaEnv {\n  readonly VITE_API_URL: string\n}\ninterface ImportMeta {\n  readonly env: ImportMetaEnv\n}" },
            explanation: "import.meta.env accesses Vite env vars. Prefix with VITE_."
          }
        ]
      }
    ]
  },
  {
    id: "vue-63",
    number: 63,
    title: "Production Builds",
    subtitle: "Build optimization",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["vue-62"],
    learningObjectives: ["Optimize bundle", "Analyze size"],
    sections: [
      {
        id: "vue-63-1",
        title: "Build Optimization",
        whyItMatters: "Performance.",
        codeExamples: [
          {
            id: "vue-63-ex1",
            title: "Optimize Build",
            description: "Size reduction",
            code: { javascript: "// npm run build\n// Output in dist/\n\n// Analysis\nnpm run build -- --report\n\n// Opens visualizer\n\n// Tips:\n// - Use dynamic imports for routes\n// - Tree-shake unused code\n// - Use shallow refs for large objects\n// - Remove console.log in prod\n// - Compress with gzip/brotli (server)\n\n// Server config for compression\n// nginx: gzip on; brotli on;" },
            explanation: "Build report shows chunk sizes. Optimize largest chunks first."
          }
        ]
      }
    ]
  },
  {
    id: "vue-64",
    number: 64,
    title: "Deploying Vue Apps",
    subtitle: "Deployment platforms",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["vue-63"],
    learningObjectives: ["Deploy to various platforms", "Configure for production"],
    sections: [
      {
        id: "vue-64-1",
        title: "Deployment Options",
        whyItMatters: "Get app to users.",
        codeExamples: [
          {
            id: "vue-64-ex1",
            title: "Deploy Examples",
            description: "Various platforms",
            code: { javascript: "// Static hosting (SPA mode)\n// Vercel, Netlify, Cloudflare Pages\n\n// vercel.json\n{\n  \"rewrites\": [\n    { \"source\": \"/(.*)\", \"destination\": \"/index.html\" }\n  ]\n}\n\n// Netlify _redirects\n/* /index.html 200\n\n// GitHub Pages\n// Add to package.json\n\"homepage\": \"https://username.github.io/repo\"\n\n// Docker\nFROM node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\nRUN npm run build\nEXPOSE 3000\nCMD [\"npx\", \"serve\", \"dist\", \"-l\", \"3000\"]" },
            explanation: "SPA mode required for client-side routing on static hosts."
          }
        ]
      }
    ]
  },
  {
    id: "vue-65",
    number: 65,
    title: "CI/CD Workflows",
    subtitle: "Automation",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["vue-64"],
    learningObjectives: ["Set up CI pipeline", "Automate testing and deployment"],
    sections: [
      {
        id: "vue-65-1",
        title: "CI/CD",
        whyItMatters: "Continuous delivery.",
        codeExamples: [
          {
            id: "vue-65-ex1",
            title: "GitHub Actions",
            description: "Example workflow",
            code: { javascript: "# .github/workflows/deploy.yml\nname: Deploy\n\non:\n  push:\n    branches: [main]\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v3\n        with:\n          node-version: '18'\n      - run: npm ci\n      - run: npm run lint\n      - run: npm run test\n      - run: npm run build\n      \n  deploy:\n    needs: build\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - run: npm run build\n      - uses: vercel/action@v1" },
            explanation: "CI runs on every push. Deploy on main branch."
          }
        ]
      }
    ]
  },
  {
    id: "vue-66",
    number: 66,
    title: "PWA with Vue",
    subtitle: "Progressive web app",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 30,
    xpReward: 55,
    prerequisites: ["vue-65"],
    learningObjectives: ["Add PWA support", "Configure service worker"],
    sections: [
      {
        id: "vue-66-1",
        title: "PWA Setup",
        whyItMatters: "Offline-capable apps.",
        codeExamples: [
          {
            id: "vue-66-ex1",
            title: "Vite PWA Plugin",
            description: "Configuration",
            code: { javascript: "// vite.config.ts\nimport { VitePWA } from 'vite-plugin-pwa'\n\nexport default defineConfig({\n  plugins: [\n    VitePWA({\n      registerType: 'autoUpdate',\n      manifest: {\n        name: 'My Vue App',\n        short_name: 'VueApp',\n        theme_color: '#42B883',\n        icons: [\n          { src: 'pwa-192x192.png', sizes: '192x192' },\n          { src: 'pwa-512x512.png', sizes: '512x512' }\n        ]\n      },\n      workbox: {\n        globPatterns: ['**/*.{js,css,html,ico,png,svg}']\n      }\n    })\n  ]\n})" },
            explanation: "vite-plugin-pwa adds service worker and manifest."
          }
        ]
      }
    ]
  },
  {
    id: "vue-67",
    number: 67,
    title: "Vue DevTools",
    subtitle: "Debugging Vue apps",
    difficulty: "Beginner" as const,
    estimatedMinutes: 20,
    xpReward: 40,
    prerequisites: ["vue-66"],
    learningObjectives: ["Use DevTools", "Debug components"],
    sections: [
      {
        id: "vue-67-1",
        title: "DevTools Usage",
        whyItMatters: "Effective debugging.",
        codeExamples: [
          {
            id: "vue-67-ex1",
            title: "DevTools Features",
            description: "Debug tools",
            code: { javascript: "// Vue DevTools (browser extension)\n// https://devtools.vuejs.org/\n\n// Features:\n// - Components tree view\n// - Props and state inspection\n// - Pinia store inspection\n// - Vuex (if used)\n// - Event timeline\n// - Performance profiling\n\n// Enable in development\n// Vue provides devtools by default\n\n// Custom component naming\ndefineOptions({\n  name: 'UserProfileCard'\n})" },
            explanation: "Vue DevTools shows component tree and state."
          }
        ]
      }
    ]
  },
  {
    id: "vue-68",
    number: 68,
    title: "Vue Ecosystem Overview",
    subtitle: "Tools and libraries",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 45,
    prerequisites: ["vue-67"],
    learningObjectives: ["Know ecosystem tools", "Make informed choices"],
    sections: [
      {
        id: "vue-68-1",
        title: "Ecosystem",
        whyItMatters: "Know your options.",
        codeExamples: [
          {
            id: "vue-68-ex1",
            title: "Key Libraries",
            description: "Recommended stack",
            code: { javascript: "// Build\n- Vite (recommended)\n- Vue CLI (legacy)\n\n// State\n- Pinia (recommended)\n- Vuex (legacy)\n\n// Router\n- Vue Router (official)\n\n// UI Libraries\n- Element Plus (desktop)\n- Vuetify (Material)\n- Naive UI\n- Tailwind with Headless UI\n\n// Utilities\n- VueUse (composables)\n- Pinia plugins\n\n// Testing\n- Vitest\n- @vue/test-utils\n\n// SSR\n- Nuxt (recommended)\n- Vike (vite-plugin-ssr)\n\n// Other\n- Vue-i18n (internationalization)\n- Vue Router (routing)" },
            explanation: "Official and recommended tools prioritized."
          }
        ]
      }
    ]
  },
  {
    id: "vue-69",
    number: 69,
    partLabel: "Part 7: Projects",
    title: "Project: Todo App",
    subtitle: "Build a Todo app",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 60,
    xpReward: 100,
    prerequisites: ["vue-68"],
    learningObjectives: ["Build complete Vue app", "Use Pinia for state"],
    sections: [
      {
        id: "vue-69-1",
        title: "Todo App Project",
        whyItMatters: "Apply all fundamentals.",
        codeExamples: [
          {
            id: "vue-69-ex1",
            title: "Todo Features",
            description: "Features to implement",
            code: { javascript: "// Features to build:\n// - Add todo\n// - Toggle complete\n// - Delete todo\n// - Filter: all/active/completed\n// - Persist to localStorage\n// - Computed counts\n\n// Use Pinia store\n// Use composition API\n// Style with scoped CSS\n\n// File structure:\n// stores/todos.ts\n// components/TodoInput.vue\n// components/TodoList.vue\n// components/TodoItem.vue\n// components/TodoFilter.vue" },
            explanation: "Build complete CRUD app with persistence."
          }
        ]
      }
    ]
  },
  {
    id: "vue-70",
    number: 70,
    title: "Project: Weather Dashboard",
    subtitle: "API integration project",
    difficulty: "Intermediate" as const,
    estimatedMinutes: 60,
    xpReward: 100,
    prerequisites: ["vue-69"],
    learningObjectives: ["Integrate weather API", "Handle async data"],
    sections: [
      {
        id: "vue-70-1",
        title: "Weather App",
        whyItMatters: "Real API integration.",
        codeExamples: [
          {
            id: "vue-70-ex1",
            title: "Weather Features",
            description: "Project requirements",
            code: { javascript: "// Features:\n// - Search city\n// - Current weather display\n// - 5-day forecast\n// - Weather icons\n// - Loading states\n// - Error handling\n\n// API: OpenWeatherMap, WeatherAPI, etc.\n// Use axios\n// Use composables\n// Use Pinia for cache\n\n// Optional: geolocation, units toggle" },
            explanation: "Build weather dashboard with external API."
          }
        ]
      }
    ]
  },
  {
    id: "vue-71",
    number: 71,
    title: "Project: Ecommerce Frontend",
    subtitle: "Full store frontend",
    difficulty: "Advanced" as const,
    estimatedMinutes: 90,
    xpReward: 150,
    prerequisites: ["vue-70"],
    learningObjectives: ["Build complete store", "Use all features"],
    sections: [
      {
        id: "vue-71-1",
        title: "Ecommerce Project",
        whyItMatters: "Full-stack frontend.",
        codeExamples: [
          {
            id: "vue-71-ex1",
            title: "Features",
            description: "Store features",
            code: { javascript: "// Features:\n// - Product listing\n// - Product details\n// - Shopping cart (Pinia)\n// - Checkout form\n// - User auth\n// - Order history\n// - Responsive design\n\n// Use Vue Router\n// Use Pinia stores\n// Use composables for logic\n// Use TypeScript\n\n// Optional: admin panel, reviews" },
            explanation: "Complete ecommerce with auth and cart."
          }
        ]
      }
    ]
  },
  {
    id: "vue-72",
    number: 72,
    title: "Project: Chat Application",
    subtitle: "Realtime chat",
    difficulty: "Advanced" as const,
    estimatedMinutes: 90,
    xpReward: 150,
    prerequisites: ["vue-71"],
    learningObjectives: ["Build realtime app", "WebSocket integration"],
    sections: [
      {
        id: "vue-72-1",
        title: "Chat Project",
        whyItMatters: "Real-time features.",
        codeExamples: [
          {
            id: "vue-72-ex1",
            title: "Chat Features",
            description: "Requirements",
            code: { javascript: "// Features:\n// - Real-time messaging (WebSocket)\n// - User authentication\n// - Chat rooms\n// - Message history\n// - Typing indicators\n// - Online users\n// - Emoji support\n\n// Use WebSocket or Socket.io\n// Use composables for socket\n// Use Pinia for messages\n\n// Backend: Node.js + Socket.io (or Firebase)" },
            explanation: "Real-time messaging with WebSocket."
          }
        ]
      }
    ]
  },
  {
    id: "vue-73",
    number: 73,
    title: "Project: Admin Dashboard",
    subtitle: "Complex admin interface",
    difficulty: "Advanced" as const,
    estimatedMinutes: 90,
    xpReward: 150,
    prerequisites: ["vue-72"],
    learningObjectives: ["Build admin panel", "Handle complex state"],
    sections: [
      {
        id: "vue-73-1",
        title: "Admin Dashboard",
        whyItMatters: "Enterprise patterns.",
        codeExamples: [
          {
            id: "vue-73-ex1",
            title: "Features",
            description: "Admin features",
            code: { javascript: "// Features:\n// - Dashboard with charts\n// - Data tables with pagination\n// - CRUD operations\n// - Role-based access\n// - File upload\n// - Settings page\n// - Sidebar navigation\n\n// Use Vue Router with guards\n// Use Pinia for auth and data\n// Use composables for API calls\n// Use a UI component library" },
            explanation: "Complete admin with data tables and charts."
          }
        ]
      }
    ]
  },
  {
    id: "vue-74",
    number: 74,
    title: "Vue Challenge Set",
    subtitle: "Practice exercises",
    difficulty: "Advanced" as const,
    estimatedMinutes: 60,
    xpReward: 100,
    prerequisites: ["vue-73"],
    learningObjectives: ["Practice Vue skills", "Solve challenges"],
    sections: [
      {
        id: "vue-74-1",
        title: "Challenges",
        whyItMatters: "Apply learning.",
        codeExamples: [
          {
            id: "vue-74-ex1",
            title: "Challenge Ideas",
            description: "Practice problems",
            code: { javascript: "// Challenge 1: Modal component\n// Build accessible modal with teleport\n\n// Challenge 2: Infinite scroll\n// Implement with intersection observer\n\n// Challenge 3: Form builder\n// Drag-drop form builder\n\n// Challenge 4: Tree view\n// Recursive component for file tree\n\n// Challenge 5: Custom directive\n// Build v-click-outside directive\n\n// Challenge 6: Custom router\n// Implement mini router\n\n// Challenge 7: Performance\n// Optimize a slow component" },
            explanation: "Strengthen skills with varied challenges."
          }
        ]
      }
    ]
  },
  {
    id: "vue-75",
    number: 75,
    title: "Vue Mastery Recap + Certificate Prep",
    subtitle: "Review and certification",
    difficulty: "Advanced" as const,
    estimatedMinutes: 45,
    xpReward: 80,
    prerequisites: ["vue-74"],
    learningObjectives: ["Review key concepts", "Prepare for certification"],
    sections: [
      {
        id: "vue-75-1",
        title: "Mastery Summary",
        whyItMatters: "Complete the journey.",
        codeExamples: [
          {
            id: "vue-75-ex1",
            title: "Key Takeaways",
            description: "Review points",
            code: { javascript: "// Key Concepts:\n// - Vue 3 Composition API\n// - <script setup> syntax\n// - Reactivity: ref, reactive, computed, watch\n// - Components: props, emits, slots, provide/inject\n// - Vue Router: routes, guards, lazy loading\n// - Pinia: stores, actions, getters, persistence\n// - Forms: v-model, validation\n// - API: axios, async/await, error handling\n// - Testing: Vitest, Vue Test Utils\n// - Deployment: Vite, PWA, CI/CD\n\n// What's next:\n// - Build more projects\n// - Contribute to open source\n// - Learn Nuxt for SSR\n// - Explore Vue ecosystem" },
            explanation: "Review core concepts and plan next steps."
          }
        ]
      }
    ]
  }
];

export const vueTrack: Track = {
  id: "vue",
  title: "Vue",
  titleBn: "ভিউ",
  tagline: "The progressive framework for modern web apps",
  taglineBn: "আধুনিক ওয়েব অ্যাপের জন্য প্রগ্রেসিভ ফ্রেমওয়ার্ক",
  icon: "https://img.icons8.com/?size=160&id=1S2R2b9l1C4T&format=png",
  colorVar: "vue",
  totalChapters: vueChapters.length,
  estimatedHours: Math.round(vueChapters.reduce((sum, c) => sum + c.estimatedMinutes, 0) / 60),
  chapters: vueChapters,
  brandColor: "#42B883",
  glowColor: "rgba(66, 184, 131, 0.4)",
};