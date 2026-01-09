/**
 * Quiz questions for Estructura de Datos
 */

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

const allQuestions: QuizQuestion[] = [
  {
    id: 'ed-q1',
    question: '¿Cuál es la complejidad temporal de acceso a un elemento en un array?',
    options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
    correctAnswer: 0,
    explanation: 'El acceso a elementos en un array es O(1) porque se accede directamente por índice.'
  },
  {
    id: 'ed-q2',
    question: '¿Qué estructura de datos usa LIFO?',
    options: ['Cola', 'Pila', 'Lista', 'Árbol'],
    correctAnswer: 1,
    explanation: 'La pila (Stack) usa Last In First Out (LIFO).'
  }
];

export function getRandomQuestions(count: number = 5): QuizQuestion[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export function getQuestionsByTopic(_topic: string): QuizQuestion[] {
  // Filter by topic if questions have topic property
  return allQuestions;
}

export default allQuestions;