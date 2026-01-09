// PyXom Type Definitions

export interface PyXomExercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category?: string;
  topics: string[];
  initialCode?: string;
  solution?: string;
  solutionCode?: string; // alias for solution
  tests: TestCase[];
  hints?: string[];
  examples?: string;
  constraints?: string[];
  timeLimit?: number; // in seconds
  memoryLimit?: number; // in MB
}

export interface TestCase {
  id: string;
  name: string;
  input: string;
  expectedOutput: string;
  isHidden?: boolean;
  points?: number;
}

export interface TestResult {
  testId: string;
  testName: string;
  passed: boolean;
  actualOutput?: string;
  expectedOutput: string;
  error?: string;
  executionTime?: number;
  memoryUsed?: number;
  explanation?: string;
  suggestions?: string[];
}

export interface ExecutionResult {
  success: boolean;
  output: string;
  error?: string;
  executionTime?: number;
  memoryUsed?: number;
}

export interface StudentProgress {
  exerciseId: string;
  studentId: string;
  attempts: number;
  hintsUsed: number;
  completed: boolean;
  bestScore: number;
  lastAttemptDate: Date;
  totalTime: number; // in seconds
}

export interface FeedbackConfig {
  showHints: boolean;
  showTestCases: boolean;
  showExecutionTime: boolean;
  showMemoryUsage: boolean;
  encouragingMessages: boolean;
}

export interface PyXomConfig {
  maxExecutionTime: number; // in seconds
  maxMemoryUsage: number; // in MB
  allowedModules: string[];
  feedbackConfig: FeedbackConfig;
}