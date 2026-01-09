// Tipos para PyXom
export interface PyXomExercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  topics: string[];
  initialCode: string;
  solutionCode: string;
  tests: PyTest[];
}

export interface PyTest {
  id: string;
  name: string;
  input: string;
  expectedOutput: string;
}

export interface PyTestResult {
  passed: boolean;
  output: string;
  expected: string;
  error?: string;
}
