/**
 * Quiz questions for Informática
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
    id: 'inf-q1',
    question: '¿Qué es una variable en programación?',
    options: [
      'Un valor constante',
      'Un espacio en memoria para almacenar datos',
      'Una función',
      'Un bucle'
    ],
    correctAnswer: 1,
    explanation: 'Una variable es un espacio en memoria que almacena datos que pueden cambiar durante la ejecución del programa.'
  },
  {
    id: 'inf-q2',
    question: '¿Cuál es el resultado de 5 % 2 en Python?',
    options: ['2.5', '2', '1', '0'],
    correctAnswer: 2,
    explanation: 'El operador % devuelve el resto de la división. 5 dividido entre 2 es 2 con resto 1.'
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