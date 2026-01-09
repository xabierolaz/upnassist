// Tipos para Quiz
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface InteractiveQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  type?: 'multiple-choice' | 'true-false' | 'fill-blank';
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  answers: QuizAnswer[];
}

export interface QuizAnswer {
  questionId: string;
  selectedAnswer: number;
  isCorrect: boolean;
}
