export type TrackId = "html" | "css" | "javascript";
export type Difficulty = "Absolute Beginner" | "Beginner" | "Intermediate" | "Advanced" | "Expert";

export interface CodeSnippet { html?: string; css?: string; javascript?: string; }

export interface Callout {
  type: "tip" | "warning" | "error" | "info" | "analogy" | "common-mistake" | "pro-tip";
  title: string;
  content: string;
}

export interface CodeExample {
  id: string;
  title: string;
  description: string;
  code: CodeSnippet;
  explanation: string;
  tryItPrompt: string;
}

export interface MicroExercise {
  instruction: string;
  starterCode: CodeSnippet;
  hint: string;
  solution: CodeSnippet;
}

export interface Section {
  id: string;
  title: string;
  whyItMatters: string;
  realWorldAnalogy?: string;
  content: string; // markdown-ish: paragraphs separated by \n\n; supports `code` inline
  codeExamples?: CodeExample[];
  callouts?: Callout[];
  microExercise?: MicroExercise;
  deepDive?: string;
}

export interface Exercise {
  id: string;
  title: string;
  difficulty: 1 | 2 | 3;
  description: string;
  requirements: string[];
  starterCode: CodeSnippet;
  hints: string[];
  solution: CodeSnippet;
  solutionExplanation: string;
}

export type QuizType = "mcq" | "true-false" | "fill-blank" | "code-output" | "spot-the-bug";

export interface QuizQuestion {
  id: string;
  type: QuizType;
  question: string;
  code?: string;
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
  difficulty: 1 | 2 | 3;
}

export interface Quiz {
  questions: QuizQuestion[];
  passingScore: number;
}

export interface CheatSheetItem { label: string; value: string; }

export interface Chapter {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  difficulty: Difficulty;
  estimatedMinutes: number;
  xpReward: number;
  prerequisites: string[];
  learningObjectives: string[];
  sections: Section[];
  exercises: Exercise[];
  quiz: Quiz;
  cheatSheet: CheatSheetItem[];
  partLabel?: string; // e.g. "Part 1: The Absolute Beginning"
}

export interface Track {
  id: TrackId;
  title: string;
  tagline: string;
  icon: string;
  colorVar: string; // tailwind color name (html|css|js)
  totalChapters: number;
  estimatedHours: number;
  chapters: Chapter[];
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
