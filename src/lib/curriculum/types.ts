export type TrackId = "html" | "css" | "javascript" | "python" | "typescript" | "c" | "cpp" | "java" | "csharp" | "w3css" | "colors" | "php" | "htmldom" | "bootstrap3" | "bootstrap4" | "bootstrap5" | "sql" | "mysql" | "angular" | "vue" | "react" | "kotlin" | "postgresql" | "jquery" | "numpy";
export type Difficulty = "Absolute Beginner" | "Beginner" | "Intermediate" | "Advanced" | "Expert";

export interface CodeSnippet { html?: string; css?: string; javascript?: string; python?: string; c?: string; cpp?: string; java?: string; csharp?: string; php?: string; kotlin?: string; postgresql?: string; jquery?: string; numpy?: string; }

export interface Callout {
  type: "tip" | "warning" | "error" | "info" | "analogy" | "common-mistake" | "pro-tip" | "c-connection" | "modern-cpp" | "csharp-bridge" | "php-bridge" | "dom-bridge";
  title: string;
  titleBn?: string;
  content: string;
  contentBn?: string;
}

export interface CodeExample {
  id: string;
  title: string;
  titleBn?: string;
  description: string;
  descriptionBn?: string;
  code: CodeSnippet;
  explanation: string;
  explanationBn?: string;
  tryItPrompt?: string;
  tryItPromptBn?: string;
}

export interface MicroExercise {
  instruction: string;
  instructionBn?: string;
  starterCode: CodeSnippet;
  hint: string;
  hintBn?: string;
  solution: CodeSnippet;
}

export interface Section {
  id: string;
  title: string;
  titleBn?: string;
  whyItMatters: string;
  whyItMattersBn?: string;
  realWorldAnalogy?: string;
  realWorldAnalogyBn?: string;
  content: string; // markdown-ish: paragraphs separated by \n\n; supports `code` inline
  contentBn?: string;
  codeExamples?: CodeExample[];
  callouts?: Callout[];
  microExercise?: MicroExercise;
  deepDive?: string;
  deepDiveBn?: string;
}

export interface Exercise {
  id: string;
  title: string;
  titleBn?: string;
  difficulty: 1 | 2 | 3;
  description: string;
  descriptionBn?: string;
  requirements: string[];
  requirementsBn?: string[];
  starterCode: CodeSnippet;
  hints: string[];
  hintsBn?: string[];
  solution: CodeSnippet;
  solutionExplanation: string;
  solutionExplanationBn?: string;
}

export type QuizType = "mcq" | "true-false" | "fill-blank" | "code-output" | "spot-the-bug";

export interface QuizQuestion {
  id: string;
  type: QuizType;
  question: string;
  questionBn?: string;
  code?: string;
  options?: string[];
  optionsBn?: string[];
  correctAnswer: string | number | boolean;
  explanation: string;
  explanationBn?: string;
  difficulty: 1 | 2 | 3;
}

export interface Quiz {
  questions: QuizQuestion[];
  passingScore: number;
}

export interface CheatSheetItem { label: string; labelBn?: string; value: string; valueBn?: string; }

export interface Chapter {
  id: string;
  number: number;
  title: string;
  titleBn?: string;
  subtitle: string;
  subtitleBn?: string;
  difficulty: Difficulty;
  estimatedMinutes: number;
  xpReward: number;
  prerequisites: string[];
  learningObjectives: string[];
  learningObjectivesBn?: string[];
  sections: Section[];
  exercises?: Exercise[];
  quiz: Quiz;
  cheatSheet: CheatSheetItem[];
  partLabel?: string; // e.g. "Part 1: The Absolute Beginning"
  partLabelBn?: string;
}

export interface Track {
  id: TrackId;
  title: string;
  titleBn?: string;
  tagline: string;
  taglineBn?: string;
  icon: string;
  colorVar: string; // tailwind color name (html|css|js)
  totalChapters: number;
  estimatedHours: number;
  chapters: Chapter[];
  brandColor: string;
  glowColor: string;
}

// Progress
export interface ChapterProgress {
  status: "locked" | "not_started" | "in_progress" | "completed";
  completedAt?: string;
  quizScore?: number;
  quizAttempts: number;
  exercisesCompleted: number;
  xpEarned: number;
}

export interface TrackProgress {
  started: boolean;
  startedAt?: string;
  completedAt?: string;
  currentChapterId?: string;
  chapters: Record<string, ChapterProgress>;
  certificateId?: string;
  certificateIssuedAt?: string;
}

export interface UserProgress {
  name: string;
  createdAt: string;
  lastActiveAt: string;
  currentStreak: number;
  longestStreak: number;
  lastStreakDate?: string;
  totalXP: number;
  tracks: Record<TrackId, TrackProgress>;
}
