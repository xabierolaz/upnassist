// Minimal stub for quizStore - to be migrated to Firebase
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface QuizStore {
  currentQuiz: any;
  setCurrentQuiz: (quiz: any) => void;
  answers: any;
  setAnswers: (answers: any) => void;
  score: number;
  setScore: (score: number) => void;
}

const mockStore: QuizStore = {
  currentQuiz: null,
  setCurrentQuiz: () => {},
  answers: {},
  setAnswers: () => {},
  score: 0,
  setScore: () => {}
};

export const useQuizStore = () => mockStore;
export default useQuizStore;