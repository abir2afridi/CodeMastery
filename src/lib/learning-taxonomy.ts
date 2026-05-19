import type { TrackId } from "@/lib/curriculum/types";

export interface LearningCategory {
  id: string;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  icon: string;
  tracks: TrackId[];
  recommendedOrder: TrackId[];
}

export interface TrackRelationship {
  trackId: TrackId;
  prerequisites: TrackId[];
  relatedTracks: TrackId[];
  recommendedAfter: TrackId[];
  category: string;
  subcategory: string;
  difficulty: "beginner" | "intermediate" | "advanced";
}

export interface LearningPath {
  id: string;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  icon: string;
  tracks: TrackId[];
  estimatedHours: number;
}

// ============================================================
// MASTER CATEGORIES
// ============================================================

export const learningCategories: LearningCategory[] = [
  {
    id: "programming-foundations",
    title: "Programming Foundations",
    titleBn: "প্রোগ্রামিং ভিত্তি",
    description: "Absolute beginner computer science fundamentals.",
    descriptionBn: "সম্পূর্ণ শিক্ষার্থীদের জন্য কম্পিউটার বিজ্ঞানের মৌলিক বিষয়।",
    icon: "Code",
    tracks: ["typing-speed", "intro-programming", "codegame"],
    recommendedOrder: ["typing-speed", "intro-programming", "codegame"],
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    titleBn: "ফ্রন্টএন্ড ডেভেলপমেন্ট",
    description: "Building websites and browser interfaces.",
    descriptionBn: "ওয়েবসাইট এবং ব্রাউজার ইন্টারফেস তৈরি।",
    icon: "Layout",
    tracks: [
      "html", "css", "intro-html-css", "rwd", "javascript", "typescript",
      "htmldom", "ajax", "jquery", "react", "vue", "angular",
      "w3css", "bootstrap3", "bootstrap4", "bootstrap5",
      "svg", "canvas", "icons", "colors", "emojis", "unicode_utf8",
      "accessibility",
    ],
    recommendedOrder: [
      "html", "css", "intro-html-css", "rwd", "javascript",
      "htmldom", "ajax", "typescript", "react", "vue", "angular",
      "w3css", "bootstrap3", "bootstrap4", "bootstrap5",
      "svg", "canvas", "icons", "colors", "emojis", "unicode_utf8",
      "accessibility", "jquery",
    ],
  },
  {
    id: "backend-development",
    title: "Backend Development",
    titleBn: "ব্যাকএন্ড ডেভেলপমেন্ট",
    description: "Server-side development and APIs.",
    descriptionBn: "সার্ভার-সাইড ডেভেলপমেন্ট এবং API।",
    icon: "Server",
    tracks: ["php", "nodejs", "asp", "django", "go", "java", "csharp", "kotlin"],
    recommendedOrder: ["javascript", "nodejs", "php", "asp", "python", "django", "java", "csharp", "kotlin", "go"],
  },
  {
    id: "programming-languages",
    title: "Programming Languages",
    titleBn: "প্রোগ্রামিং ভাষা",
    description: "Core general-purpose programming languages.",
    descriptionBn: "মূল সর্বজনীন প্রোগ্রামিং ভাষা।",
    icon: "Terminal",
    tracks: ["python", "c", "cpp", "java", "csharp", "go", "rust", "swift", "kotlin", "r", "php"],
    recommendedOrder: ["python", "c", "cpp", "java", "csharp", "go", "rust", "swift", "kotlin", "r", "php"],
  },
  {
    id: "databases-storage",
    title: "Databases & Data Storage",
    titleBn: "ডাটাবেস এবং ডাটা স্টোরেজ",
    description: "Data management systems and storage formats.",
    descriptionBn: "ডাটা ম্যানেজমেন্ট সিস্টেম এবং স্টোরেজ ফরম্যাট।",
    icon: "Database",
    tracks: ["sql", "mysql", "postgresql", "mongodb", "json", "xml"],
    recommendedOrder: ["sql", "mysql", "postgresql", "mongodb", "json", "xml"],
  },
  {
    id: "data-science-analytics",
    title: "Data Science & Analytics",
    titleBn: "ডাটা সায়েন্স এবং অ্যানালিটিক্স",
    description: "Scientific computing and data analytics.",
    descriptionBn: "বৈজ্ঞানিক কম্পিউটিং এবং ডাটা অ্যানালিটিক্স।",
    icon: "BarChart3",
    tracks: ["statistic", "python", "numpy", "pandas", "matplotlib", "scipy", "excel", "google-sheets", "r", "machinelearning"],
    recommendedOrder: ["statistic", "python", "numpy", "pandas", "matplotlib", "scipy", "excel", "google-sheets", "r", "machinelearning"],
  },
  {
    id: "ai-generative-ai",
    title: "AI & Generative AI",
    titleBn: "এআই এবং জেনারেটিভ এআই",
    description: "Modern artificial intelligence systems.",
    descriptionBn: "আধুনিক কৃত্রিম বুদ্ধিমত্তা সিস্টেম।",
    icon: "Brain",
    tracks: ["machinelearning", "ai", "genai"],
    recommendedOrder: ["python", "statistic", "machinelearning", "ai", "genai"],
  },
  {
    id: "devops-cloud-tools",
    title: "DevOps, Cloud & Tools",
    titleBn: "ডেভঅপস, ক্লাউড এবং টুলস",
    description: "Infrastructure, automation, and deployment.",
    descriptionBn: "ইনফ্রাস্ট্রাকচার, অটোমেশন এবং ডিপ্লয়মেন্ট।",
    icon: "Cloud",
    tracks: ["bash", "aws"],
    recommendedOrder: ["bash", "aws"],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    titleBn: "সাইবার নিরাপত্তা",
    description: "Security engineering and ethical hacking.",
    descriptionBn: "নিরাপত্তা ইঞ্জিনিয়ারিং এবং এথিক্যাল হ্যাকিং।",
    icon: "Shield",
    tracks: ["cybersecurity"],
    recommendedOrder: ["cybersecurity"],
  },
  {
    id: "computer-science-dsa",
    title: "Computer Science & DSA",
    titleBn: "কম্পিউটার বিজ্ঞান এবং ডিএসএ",
    description: "Core problem-solving and algorithm theory.",
    descriptionBn: "মূল সমস্যা সমাধান এবং অ্যালগরিদম তত্ত্ব।",
    icon: "Cpu",
    tracks: ["dsa"],
    recommendedOrder: ["dsa"],
  },
  {
    id: "hardware-iot",
    title: "Hardware & IoT",
    titleBn: "হার্ডওয়্যার এবং আইওটি",
    description: "Physical computing and embedded systems.",
    descriptionBn: "ফিজিক্যাল কম্পিউটিং এবং এমবেডেড সিস্টেম।",
    icon: "CircuitBoard",
    tracks: ["raspberry_pi"],
    recommendedOrder: ["raspberry_pi"],
  },
];

// ============================================================
// TRACK RELATIONSHIPS
// ============================================================

export const trackRelationships: Record<TrackId, TrackRelationship> = {
  "intro-programming": {
    trackId: "intro-programming",
    prerequisites: [],
    relatedTracks: ["typing-speed", "codegame"],
    recommendedAfter: [],
    category: "Programming Foundations",
    subcategory: "Fundamentals",
    difficulty: "beginner",
  },
  "typing-speed": {
    trackId: "typing-speed",
    prerequisites: [],
    relatedTracks: ["intro-programming", "codegame"],
    recommendedAfter: [],
    category: "Programming Foundations",
    subcategory: "Fundamentals",
    difficulty: "beginner",
  },
  codegame: {
    trackId: "codegame",
    prerequisites: ["intro-programming"],
    relatedTracks: ["intro-programming", "typing-speed"],
    recommendedAfter: ["intro-programming", "typing-speed"],
    category: "Programming Foundations",
    subcategory: "Fundamentals",
    difficulty: "beginner",
  },
  html: {
    trackId: "html",
    prerequisites: [],
    relatedTracks: ["css", "javascript", "intro-html-css", "htmldom", "accessibility"],
    recommendedAfter: [],
    category: "Frontend Development",
    subcategory: "Core Web",
    difficulty: "beginner",
  },
  css: {
    trackId: "css",
    prerequisites: ["html"],
    relatedTracks: ["html", "javascript", "rwd", "bootstrap3", "bootstrap4", "bootstrap5", "w3css"],
    recommendedAfter: ["html"],
    category: "Frontend Development",
    subcategory: "Core Web",
    difficulty: "beginner",
  },
  "intro-html-css": {
    trackId: "intro-html-css",
    prerequisites: [],
    relatedTracks: ["html", "css", "rwd"],
    recommendedAfter: [],
    category: "Frontend Development",
    subcategory: "Core Web",
    difficulty: "beginner",
  },
  rwd: {
    trackId: "rwd",
    prerequisites: ["html", "css"],
    relatedTracks: ["html", "css", "bootstrap3", "bootstrap4", "bootstrap5", "w3css"],
    recommendedAfter: ["html", "css"],
    category: "Frontend Development",
    subcategory: "Core Web",
    difficulty: "intermediate",
  },
  javascript: {
    trackId: "javascript",
    prerequisites: ["html", "css"],
    relatedTracks: ["typescript", "htmldom", "ajax", "jquery", "nodejs", "json"],
    recommendedAfter: ["html", "css"],
    category: "Frontend Development",
    subcategory: "Core Web",
    difficulty: "intermediate",
  },
  typescript: {
    trackId: "typescript",
    prerequisites: ["javascript"],
    relatedTracks: ["javascript", "react", "angular", "nodejs"],
    recommendedAfter: ["javascript"],
    category: "Frontend Development",
    subcategory: "Core Web",
    difficulty: "intermediate",
  },
  ajax: {
    trackId: "ajax",
    prerequisites: ["javascript", "html"],
    relatedTracks: ["javascript", "htmldom", "json", "nodejs"],
    recommendedAfter: ["javascript", "htmldom"],
    category: "Frontend Development",
    subcategory: "Browser APIs",
    difficulty: "intermediate",
  },
  htmldom: {
    trackId: "htmldom",
    prerequisites: ["html", "javascript"],
    relatedTracks: ["html", "javascript", "ajax", "jquery"],
    recommendedAfter: ["html", "javascript"],
    category: "Frontend Development",
    subcategory: "Browser APIs",
    difficulty: "intermediate",
  },
  jquery: {
    trackId: "jquery",
    prerequisites: ["html", "css", "javascript"],
    relatedTracks: ["javascript", "htmldom", "ajax"],
    recommendedAfter: ["javascript", "htmldom"],
    category: "Frontend Development",
    subcategory: "Frontend Frameworks",
    difficulty: "intermediate",
  },
  react: {
    trackId: "react",
    prerequisites: ["html", "css", "javascript"],
    relatedTracks: ["typescript", "javascript", "nodejs", "angular", "vue"],
    recommendedAfter: ["javascript", "typescript"],
    category: "Frontend Development",
    subcategory: "Frontend Frameworks",
    difficulty: "intermediate",
  },
  vue: {
    trackId: "vue",
    prerequisites: ["html", "css", "javascript"],
    relatedTracks: ["typescript", "javascript", "react", "angular"],
    recommendedAfter: ["javascript"],
    category: "Frontend Development",
    subcategory: "Frontend Frameworks",
    difficulty: "intermediate",
  },
  angular: {
    trackId: "angular",
    prerequisites: ["html", "css", "javascript", "typescript"],
    relatedTracks: ["typescript", "javascript", "react", "vue"],
    recommendedAfter: ["typescript", "javascript"],
    category: "Frontend Development",
    subcategory: "Frontend Frameworks",
    difficulty: "advanced",
  },
  w3css: {
    trackId: "w3css",
    prerequisites: ["html", "css"],
    relatedTracks: ["css", "bootstrap3", "bootstrap4", "bootstrap5", "rwd"],
    recommendedAfter: ["css"],
    category: "Frontend Development",
    subcategory: "UI Frameworks",
    difficulty: "beginner",
  },
  bootstrap3: {
    trackId: "bootstrap3",
    prerequisites: ["html", "css"],
    relatedTracks: ["css", "bootstrap4", "bootstrap5", "w3css", "rwd"],
    recommendedAfter: ["css"],
    category: "Frontend Development",
    subcategory: "UI Frameworks",
    difficulty: "beginner",
  },
  bootstrap4: {
    trackId: "bootstrap4",
    prerequisites: ["html", "css"],
    relatedTracks: ["css", "bootstrap3", "bootstrap5", "w3css", "rwd"],
    recommendedAfter: ["css", "bootstrap3"],
    category: "Frontend Development",
    subcategory: "UI Frameworks",
    difficulty: "beginner",
  },
  bootstrap5: {
    trackId: "bootstrap5",
    prerequisites: ["html", "css"],
    relatedTracks: ["css", "bootstrap3", "bootstrap4", "w3css", "rwd"],
    recommendedAfter: ["css", "bootstrap4"],
    category: "Frontend Development",
    subcategory: "UI Frameworks",
    difficulty: "beginner",
  },
  svg: {
    trackId: "svg",
    prerequisites: ["html", "css"],
    relatedTracks: ["canvas", "icons", "html", "css"],
    recommendedAfter: ["html", "css"],
    category: "Frontend Development",
    subcategory: "Graphics & Visuals",
    difficulty: "intermediate",
  },
  canvas: {
    trackId: "canvas",
    prerequisites: ["html", "javascript"],
    relatedTracks: ["svg", "icons", "javascript", "html"],
    recommendedAfter: ["html", "javascript"],
    category: "Frontend Development",
    subcategory: "Graphics & Visuals",
    difficulty: "intermediate",
  },
  icons: {
    trackId: "icons",
    prerequisites: ["html", "css"],
    relatedTracks: ["svg", "canvas", "html", "css"],
    recommendedAfter: ["html", "css"],
    category: "Frontend Development",
    subcategory: "Graphics & Visuals",
    difficulty: "beginner",
  },
  colors: {
    trackId: "colors",
    prerequisites: ["html", "css"],
    relatedTracks: ["css", "html", "emojis", "unicode_utf8"],
    recommendedAfter: ["css"],
    category: "Frontend Development",
    subcategory: "Web Standards",
    difficulty: "beginner",
  },
  emojis: {
    trackId: "emojis",
    prerequisites: ["html", "css", "javascript"],
    relatedTracks: ["colors", "unicode_utf8", "html", "css"],
    recommendedAfter: ["html", "css", "javascript"],
    category: "Frontend Development",
    subcategory: "Web Standards",
    difficulty: "beginner",
  },
  unicode_utf8: {
    trackId: "unicode_utf8",
    prerequisites: ["html", "css", "javascript"],
    relatedTracks: ["emojis", "colors", "html", "css"],
    recommendedAfter: ["html", "css", "javascript"],
    category: "Frontend Development",
    subcategory: "Web Standards",
    difficulty: "intermediate",
  },
  accessibility: {
    trackId: "accessibility",
    prerequisites: ["html", "css", "javascript"],
    relatedTracks: ["html", "css", "javascript", "rwd"],
    recommendedAfter: ["html", "css", "javascript"],
    category: "Frontend Development",
    subcategory: "Web Standards",
    difficulty: "intermediate",
  },
  php: {
    trackId: "php",
    prerequisites: ["html", "css"],
    relatedTracks: ["mysql", "sql", "html", "css"],
    recommendedAfter: ["html", "css"],
    category: "Backend Development",
    subcategory: "Server Languages",
    difficulty: "intermediate",
  },
  nodejs: {
    trackId: "nodejs",
    prerequisites: ["javascript"],
    relatedTracks: ["javascript", "typescript", "json", "ajax", "mongodb", "aws"],
    recommendedAfter: ["javascript"],
    category: "Backend Development",
    subcategory: "Server Languages",
    difficulty: "intermediate",
  },
  asp: {
    trackId: "asp",
    prerequisites: ["csharp", "html"],
    relatedTracks: ["csharp", "html", "sql", "javascript"],
    recommendedAfter: ["csharp", "html"],
    category: "Backend Development",
    subcategory: "Enterprise Development",
    difficulty: "advanced",
  },
  django: {
    trackId: "django",
    prerequisites: ["python"],
    relatedTracks: ["python", "sql", "postgresql", "mysql"],
    recommendedAfter: ["python"],
    category: "Backend Development",
    subcategory: "Backend Frameworks",
    difficulty: "intermediate",
  },
  go: {
    trackId: "go",
    prerequisites: [],
    relatedTracks: ["c", "cpp", "aws"],
    recommendedAfter: [],
    category: "Backend Development",
    subcategory: "Server Languages",
    difficulty: "intermediate",
  },
  java: {
    trackId: "java",
    prerequisites: [],
    relatedTracks: ["c", "cpp", "kotlin", "sql"],
    recommendedAfter: [],
    category: "Backend Development",
    subcategory: "Enterprise Development",
    difficulty: "intermediate",
  },
  csharp: {
    trackId: "csharp",
    prerequisites: [],
    relatedTracks: ["java", "asp", "sql"],
    recommendedAfter: [],
    category: "Backend Development",
    subcategory: "Enterprise Development",
    difficulty: "intermediate",
  },
  kotlin: {
    trackId: "kotlin",
    prerequisites: ["java"],
    relatedTracks: ["java", "swift"],
    recommendedAfter: ["java"],
    category: "Backend Development",
    subcategory: "Enterprise Development",
    difficulty: "intermediate",
  },
  python: {
    trackId: "python",
    prerequisites: [],
    relatedTracks: ["numpy", "pandas", "matplotlib", "scipy", "django", "machinelearning", "ai", "genai", "raspberry_pi"],
    recommendedAfter: [],
    category: "Programming Languages",
    subcategory: "Scientific Computing",
    difficulty: "beginner",
  },
  c: {
    trackId: "c",
    prerequisites: [],
    relatedTracks: ["cpp", "rust", "go", "dsa", "raspberry_pi"],
    recommendedAfter: [],
    category: "Programming Languages",
    subcategory: "Systems Programming",
    difficulty: "beginner",
  },
  cpp: {
    trackId: "cpp",
    prerequisites: ["c"],
    relatedTracks: ["c", "java", "rust", "dsa"],
    recommendedAfter: ["c"],
    category: "Programming Languages",
    subcategory: "Systems Programming",
    difficulty: "intermediate",
  },
  swift: {
    trackId: "swift",
    prerequisites: [],
    relatedTracks: ["kotlin", "c", "cpp"],
    recommendedAfter: [],
    category: "Programming Languages",
    subcategory: "Mobile",
    difficulty: "beginner",
  },
  rust: {
    trackId: "rust",
    prerequisites: ["c"],
    relatedTracks: ["c", "cpp", "go", "dsa"],
    recommendedAfter: ["c", "cpp"],
    category: "Programming Languages",
    subcategory: "Systems Programming",
    difficulty: "advanced",
  },
  r: {
    trackId: "r",
    prerequisites: [],
    relatedTracks: ["python", "numpy", "pandas", "statistic", "matplotlib"],
    recommendedAfter: [],
    category: "Programming Languages",
    subcategory: "Scientific Computing",
    difficulty: "intermediate",
  },
  sql: {
    trackId: "sql",
    prerequisites: [],
    relatedTracks: ["mysql", "postgresql", "mongodb", "json", "xml"],
    recommendedAfter: [],
    category: "Databases & Data Storage",
    subcategory: "Query Languages",
    difficulty: "beginner",
  },
  mysql: {
    trackId: "mysql",
    prerequisites: ["sql"],
    relatedTracks: ["sql", "postgresql", "php", "nodejs"],
    recommendedAfter: ["sql"],
    category: "Databases & Data Storage",
    subcategory: "Relational Databases",
    difficulty: "intermediate",
  },
  postgresql: {
    trackId: "postgresql",
    prerequisites: ["sql"],
    relatedTracks: ["sql", "mysql", "django", "nodejs"],
    recommendedAfter: ["sql"],
    category: "Databases & Data Storage",
    subcategory: "Relational Databases",
    difficulty: "intermediate",
  },
  mongodb: {
    trackId: "mongodb",
    prerequisites: ["sql", "json"],
    relatedTracks: ["sql", "json", "nodejs"],
    recommendedAfter: ["sql", "json"],
    category: "Databases & Data Storage",
    subcategory: "NoSQL Databases",
    difficulty: "intermediate",
  },
  json: {
    trackId: "json",
    prerequisites: ["javascript"],
    relatedTracks: ["javascript", "xml", "sql", "mongodb", "ajax", "nodejs"],
    recommendedAfter: ["javascript"],
    category: "Databases & Data Storage",
    subcategory: "Data Formats",
    difficulty: "beginner",
  },
  xml: {
    trackId: "xml",
    prerequisites: ["html"],
    relatedTracks: ["html", "json", "sql"],
    recommendedAfter: ["html"],
    category: "Databases & Data Storage",
    subcategory: "Data Formats",
    difficulty: "beginner",
  },
  numpy: {
    trackId: "numpy",
    prerequisites: ["python"],
    relatedTracks: ["python", "pandas", "matplotlib", "scipy", "machinelearning"],
    recommendedAfter: ["python"],
    category: "Data Science & Analytics",
    subcategory: "Scientific Computing",
    difficulty: "intermediate",
  },
  pandas: {
    trackId: "pandas",
    prerequisites: ["python", "numpy"],
    relatedTracks: ["python", "numpy", "matplotlib", "scipy", "machinelearning", "excel", "google-sheets"],
    recommendedAfter: ["python", "numpy"],
    category: "Data Science & Analytics",
    subcategory: "Data Analysis",
    difficulty: "intermediate",
  },
  scipy: {
    trackId: "scipy",
    prerequisites: ["python", "numpy"],
    relatedTracks: ["python", "numpy", "pandas", "matplotlib", "machinelearning"],
    recommendedAfter: ["python", "numpy"],
    category: "Data Science & Analytics",
    subcategory: "Scientific Computing",
    difficulty: "advanced",
  },
  matplotlib: {
    trackId: "matplotlib",
    prerequisites: ["python", "numpy"],
    relatedTracks: ["python", "numpy", "pandas", "scipy", "machinelearning"],
    recommendedAfter: ["python", "numpy"],
    category: "Data Science & Analytics",
    subcategory: "Data Visualization",
    difficulty: "intermediate",
  },
  statistic: {
    trackId: "statistic",
    prerequisites: [],
    relatedTracks: ["python", "numpy", "pandas", "machinelearning", "r", "excel", "google-sheets"],
    recommendedAfter: [],
    category: "Data Science & Analytics",
    subcategory: "Fundamentals",
    difficulty: "beginner",
  },
  excel: {
    trackId: "excel",
    prerequisites: [],
    relatedTracks: ["google-sheets", "statistic", "pandas", "sql"],
    recommendedAfter: [],
    category: "Data Science & Analytics",
    subcategory: "Spreadsheets",
    difficulty: "beginner",
  },
  "google-sheets": {
    trackId: "google-sheets",
    prerequisites: [],
    relatedTracks: ["excel", "statistic", "pandas", "sql"],
    recommendedAfter: [],
    category: "Data Science & Analytics",
    subcategory: "Spreadsheets",
    difficulty: "beginner",
  },
  machinelearning: {
    trackId: "machinelearning",
    prerequisites: ["python", "numpy", "pandas", "statistic"],
    relatedTracks: ["python", "numpy", "pandas", "matplotlib", "scipy", "ai", "genai", "r"],
    recommendedAfter: ["python", "numpy", "pandas", "statistic"],
    category: "AI & Generative AI",
    subcategory: "Machine Learning",
    difficulty: "advanced",
  },
  ai: {
    trackId: "ai",
    prerequisites: ["python", "machinelearning"],
    relatedTracks: ["python", "machinelearning", "genai", "numpy", "pandas"],
    recommendedAfter: ["python", "machinelearning"],
    category: "AI & Generative AI",
    subcategory: "Artificial Intelligence",
    difficulty: "advanced",
  },
  genai: {
    trackId: "genai",
    prerequisites: ["python", "machinelearning", "ai"],
    relatedTracks: ["python", "machinelearning", "ai"],
    recommendedAfter: ["python", "machinelearning", "ai"],
    category: "AI & Generative AI",
    subcategory: "Generative AI",
    difficulty: "advanced",
  },
  bash: {
    trackId: "bash",
    prerequisites: [],
    relatedTracks: ["aws", "cybersecurity", "raspberry_pi", "python"],
    recommendedAfter: [],
    category: "DevOps, Cloud & Tools",
    subcategory: "Shell & Automation",
    difficulty: "beginner",
  },
  aws: {
    trackId: "aws",
    prerequisites: ["bash"],
    relatedTracks: ["bash", "nodejs", "cybersecurity"],
    recommendedAfter: ["bash"],
    category: "DevOps, Cloud & Tools",
    subcategory: "Cloud Infrastructure",
    difficulty: "intermediate",
  },
  cybersecurity: {
    trackId: "cybersecurity",
    prerequisites: ["bash", "html", "css", "javascript"],
    relatedTracks: ["bash", "aws", "nodejs", "python", "linux"],
    recommendedAfter: ["bash", "html", "css", "javascript"],
    category: "Cybersecurity",
    subcategory: "Security Engineering",
    difficulty: "advanced",
  },
  dsa: {
    trackId: "dsa",
    prerequisites: ["python"],
    relatedTracks: ["python", "c", "cpp", "java", "go", "rust"],
    recommendedAfter: ["python", "c"],
    category: "Computer Science & DSA",
    subcategory: "Algorithms & Data Structures",
    difficulty: "intermediate",
  },
  raspberry_pi: {
    trackId: "raspberry_pi",
    prerequisites: ["python", "bash"],
    relatedTracks: ["python", "bash", "c", "linux"],
    recommendedAfter: ["python", "bash"],
    category: "Hardware & IoT",
    subcategory: "Embedded Systems",
    difficulty: "intermediate",
  },
};

// ============================================================
// LEARNING PATHS
// ============================================================

export const learningPaths: LearningPath[] = [
  {
    id: "frontend-developer",
    title: "Frontend Developer Path",
    titleBn: "ফ্রন্টএন্ড ডেভেলপার পথ",
    description: "Master web interfaces from HTML to modern frameworks.",
    descriptionBn: "এইচটিএমএল থেকে আধুনিক ফ্রেমওয়ার্ক পর্যন্ত ওয়েব ইন্টারফেস আয়ত্ত করুন।",
    icon: "Layout",
    tracks: ["html", "css", "javascript", "typescript", "react"],
    estimatedHours: 120,
  },
  {
    id: "ai-engineer",
    title: "AI Engineer Path",
    titleBn: "এআই ইঞ্জিনিয়ার পথ",
    description: "From Python basics to cutting-edge Generative AI.",
    descriptionBn: "পাইথন বেসিক থেকে অত্যাধুনিক জেনারেটিভ এআই পর্যন্ত।",
    icon: "Brain",
    tracks: ["python", "statistic", "numpy", "pandas", "machinelearning", "ai", "genai"],
    estimatedHours: 150,
  },
  {
    id: "backend-developer",
    title: "Backend Developer Path",
    titleBn: "ব্যাকএন্ড ডেভেলপার পথ",
    description: "Build robust server-side applications and APIs.",
    descriptionBn: "শক্তিশালী সার্ভার-সাইড অ্যাপ্লিকেশন এবং API তৈরি করুন।",
    icon: "Server",
    tracks: ["javascript", "nodejs", "sql", "mongodb", "aws"],
    estimatedHours: 100,
  },
  {
    id: "fullstack-developer",
    title: "Fullstack Developer Path",
    titleBn: "ফুলস্ট্যাক ডেভেলপার পথ",
    description: "Complete web development from frontend to backend.",
    descriptionBn: "ফ্রন্টএন্ড থেকে ব্যাকএন্ড পর্যন্ত সম্পূর্ণ ওয়েব ডেভেলপমেন্ট।",
    icon: "Globe",
    tracks: ["html", "css", "javascript", "typescript", "react", "nodejs", "sql", "mongodb"],
    estimatedHours: 200,
  },
  {
    id: "data-scientist",
    title: "Data Scientist Path",
    titleBn: "ডাটা সায়েন্টিস্ট পথ",
    description: "Analyze data and build predictive models.",
    descriptionBn: "ডাটা বিশ্লেষণ এবং প্রেডিক্টিভ মডেল তৈরি করুন।",
    icon: "BarChart3",
    tracks: ["statistic", "python", "numpy", "pandas", "matplotlib", "scipy", "excel"],
    estimatedHours: 120,
  },
  {
    id: "systems-programmer",
    title: "Systems Programmer Path",
    titleBn: "সিস্টেমস প্রোগ্রামার পথ",
    description: "Master low-level programming and performance.",
    descriptionBn: "লো-লেভেল প্রোগ্রামিং এবং পারফরম্যান্স আয়ত্ত করুন।",
    icon: "Cpu",
    tracks: ["c", "cpp", "rust", "dsa"],
    estimatedHours: 140,
  },
  {
    id: "database-specialist",
    title: "Database Specialist Path",
    titleBn: "ডাটাবেস স্পেশালিস্ট পথ",
    description: "Master relational and NoSQL database systems.",
    descriptionBn: "রিলেশনাল এবং NoSQL ডাটাবেস সিস্টেম আয়ত্ত করুন।",
    icon: "Database",
    tracks: ["sql", "mysql", "postgresql", "mongodb", "json"],
    estimatedHours: 80,
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer Path",
    titleBn: "ডেভঅপস ইঞ্জিনিয়ার পথ",
    description: "Infrastructure, automation, and cloud deployment.",
    descriptionBn: "ইনফ্রাস্ট্রাকচার, অটোমেশন এবং ক্লাউড ডিপ্লয়মেন্ট।",
    icon: "Cloud",
    tracks: ["bash", "aws", "cybersecurity"],
    estimatedHours: 90,
  },
  {
    id: "mobile-developer",
    title: "Mobile Developer Path",
    titleBn: "মোবাইল ডেভেলপার পথ",
    description: "Build native mobile applications.",
    descriptionBn: "নেটিভ মোবাইল অ্যাপ্লিকেশন তৈরি করুন।",
    icon: "Smartphone",
    tracks: ["java", "kotlin", "swift"],
    estimatedHours: 110,
  },
  {
    id: "web-designer",
    title: "Web Designer Path",
    titleBn: "ওয়েব ডিজাইনার পথ",
    description: "Create beautiful and accessible web interfaces.",
    descriptionBn: "সুন্দর এবং অ্যাক্সেসিবল ওয়েব ইন্টারফেস তৈরি করুন।",
    icon: "Palette",
    tracks: ["html", "css", "rwd", "svg", "canvas", "icons", "colors", "accessibility"],
    estimatedHours: 70,
  },
];

// ============================================================
// HELPER FUNCTIONS
// ============================================================

export function getCategoryForTrack(trackId: TrackId): string {
  return trackRelationships[trackId]?.category ?? "Uncategorized";
}

export function getSubcategoryForTrack(trackId: TrackId): string {
  return trackRelationships[trackId]?.subcategory ?? "General";
}

export function getDifficultyForTrack(trackId: TrackId): "beginner" | "intermediate" | "advanced" {
  return trackRelationships[trackId]?.difficulty ?? "intermediate";
}

export function getPrerequisitesForTrack(trackId: TrackId): TrackId[] {
  return trackRelationships[trackId]?.prerequisites ?? [];
}

export function getRelatedTracksForTrack(trackId: TrackId): TrackId[] {
  return trackRelationships[trackId]?.relatedTracks ?? [];
}

export function getRecommendedAfterForTrack(trackId: TrackId): TrackId[] {
  return trackRelationships[trackId]?.recommendedAfter ?? [];
}

export function getTracksByCategory(category: string): TrackId[] {
  return Object.entries(trackRelationships)
    .filter(([, rel]) => rel.category === category)
    .map(([id]) => id as TrackId);
}

export function getTracksByDifficulty(difficulty: "beginner" | "intermediate" | "advanced"): TrackId[] {
  return Object.entries(trackRelationships)
    .filter(([, rel]) => rel.difficulty === difficulty)
    .map(([id]) => id as TrackId);
}

export function getCategories(): string[] {
  return [...new Set(Object.values(trackRelationships).map(r => r.category))];
}

export function getSubcategories(category: string): string[] {
  return [...new Set(
    Object.values(trackRelationships)
      .filter(r => r.category === category)
      .map(r => r.subcategory)
  )];
}

export function getLearningPathForTrack(trackId: TrackId): LearningPath | null {
  return learningPaths.find(path => path.tracks.includes(trackId)) ?? null;
}

export function getTracksInRecommendedOrder(categoryId: string): TrackId[] {
  const category = learningCategories.find(c => c.id === categoryId);
  return category?.recommendedOrder ?? category?.tracks ?? [];
}

export function filterTracksByCategory(tracks: TrackId[], categoryId: string): TrackId[] {
  const category = learningCategories.find(c => c.id === categoryId);
  if (!category) return tracks;
  return tracks.filter(id => category.tracks.includes(id));
}

export function filterTracksByDifficulty(tracks: TrackId[], difficulty: "beginner" | "intermediate" | "advanced"): TrackId[] {
  return tracks.filter(id => getDifficultyForTrack(id) === difficulty);
}

export function getTrackLearningOrder(trackId: TrackId): number {
  for (const category of learningCategories) {
    const index = category.recommendedOrder.indexOf(trackId);
    if (index !== -1) return index;
  }
  return 999;
}

export function sortTracksByLearningOrder(trackIds: TrackId[]): TrackId[] {
  return [...trackIds].sort((a, b) => getTrackLearningOrder(a) - getTrackLearningOrder(b));
}

export function getBeginnerTracks(): TrackId[] {
  return getTracksByDifficulty("beginner");
}

export function getAdvancedTracks(): TrackId[] {
  return getTracksByDifficulty("advanced");
}

export function getTrackRelationshipSummary(trackId: TrackId) {
  const rel = trackRelationships[trackId];
  if (!rel) return null;
  return {
    category: rel.category,
    subcategory: rel.subcategory,
    difficulty: rel.difficulty,
    prerequisites: rel.prerequisites,
    relatedTracks: rel.relatedTracks,
    recommendedAfter: rel.recommendedAfter,
    learningPath: getLearningPathForTrack(trackId),
  };
}
