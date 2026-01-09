import { useState } from 'react';
import InteractiveQuiz from '../components/quiz/InteractiveQuiz';
// QuizQuestionBank was removed - using inline questions
const ingenieriaQuestions = [
  {
    id: '1',
    question: 'Pregunta de ejemplo',
    options: ['Opción A', 'Opción B', 'Opción C', 'Opción D'],
    correctAnswer: 0,
    explanation: 'Esta es una pregunta de ejemplo',
    type: 'multiple-choice' as const
  }
];

const QuizGenerator = {
  generateQuiz: (questions: any[], count: number) => {
    return questions.slice(0, count);
  },
  getAvailableTopics: () => ['Tema 1', 'Tema 2', 'Tema 3'],
  generateQuizByDifficulty: (questions: any[], difficulty: string, count: number) => {
    return questions.filter((q: any) => q.difficulty === difficulty).slice(0, count);
  },
  generateQuizByTopic: (questions: any[], topic: string, count: number) => {
    return questions.filter((q: any) => q.topic === topic).slice(0, count);
  },
  generateBalancedQuiz: (questions: any[], count: number) => {
    return questions.slice(0, count);
  },
  generateRandomQuiz: (questions: any[], count: number) => {
    return questions.sort(() => Math.random() - 0.5).slice(0, count);
  }
};
import { 
  AcademicCapIcon, 
  BeakerIcon, 
  ChartBarIcon,
  ClockIcon 
} from '@heroicons/react/24/outline';

export default function QuizPage() {
  const [selectedMode, setSelectedMode] = useState<'random' | 'difficulty' | 'topic' | 'balanced'>('random');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState(ingenieriaQuestions.slice(0, 5));

  const availableTopics = QuizGenerator.getAvailableTopics();

  const startQuiz = () => {
    let questions;
    switch (selectedMode) {
      case 'difficulty':
        questions = QuizGenerator.generateQuizByDifficulty(ingenieriaQuestions, selectedDifficulty, numberOfQuestions);
        break;
      case 'topic':
        questions = QuizGenerator.generateQuizByTopic(ingenieriaQuestions, selectedTopic || availableTopics[0], numberOfQuestions);
        break;
      case 'balanced':
        questions = QuizGenerator.generateBalancedQuiz(ingenieriaQuestions, numberOfQuestions);
        break;
      default:
        questions = QuizGenerator.generateRandomQuiz(ingenieriaQuestions, numberOfQuestions);
    }
    
    // Add missing properties to questions
    const enhancedQuestions = questions.map(q => ({
      ...q,
      topic: q.topic || 'Ingeniería del Software',
      difficulty: q.difficulty || selectedDifficulty,
      points: q.points || (selectedDifficulty === 'easy' ? 10 : selectedDifficulty === 'medium' ? 20 : 30)
    }));
    
    setCurrentQuestions(enhancedQuestions as any);
    setQuizStarted(true);
  };

  const handleQuizComplete = () => {
    // Aquí podrías guardar el progreso del estudiante
  };

  if (quizStarted) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <InteractiveQuiz 
          questions={currentQuestions.map((q: any) => ({
            ...q,
            topic: q.topic || 'General',
            difficulty: q.difficulty || 'medium',
            points: q.points || 10,
            correctAnswer: String(q.correctAnswer)
          }))}
          onComplete={handleQuizComplete}
          subject="Ingeniería del Software"
        />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <AcademicCapIcon className="h-10 w-10 text-blue-600 mr-4" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Quiz Interactivo - Ingeniería del Software
                </h1>
                <p className="text-gray-600 mt-1">
                  Pon a prueba tus conocimientos con preguntas interactivas
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Configuración del Quiz */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-6">Configurar Quiz</h2>

          {/* Modo de Quiz */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Modo de Quiz
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <button
                onClick={() => setSelectedMode('random')}
                className={`p-3 rounded-lg border-2 transition-colors ${
                  selectedMode === 'random'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <BeakerIcon className="h-6 w-6 mx-auto mb-1" />
                <span className="text-sm">Aleatorio</span>
              </button>              <button
                onClick={() => setSelectedMode('difficulty')}
                className={`p-3 rounded-lg border-2 transition-colors ${
                  selectedMode === 'difficulty'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <ChartBarIcon className="h-6 w-6 mx-auto mb-1" />
                <span className="text-sm">Por Dificultad</span>
              </button>
              <button
                onClick={() => setSelectedMode('topic')}
                className={`p-3 rounded-lg border-2 transition-colors ${
                  selectedMode === 'topic'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <AcademicCapIcon className="h-6 w-6 mx-auto mb-1" />
                <span className="text-sm">Por Tema</span>
              </button>
              <button
                onClick={() => setSelectedMode('balanced')}
                className={`p-3 rounded-lg border-2 transition-colors ${
                  selectedMode === 'balanced'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <ClockIcon className="h-6 w-6 mx-auto mb-1" />
                <span className="text-sm">Balanceado</span>
              </button>
            </div>
          </div>
          {/* Opciones específicas según el modo */}
          {selectedMode === 'difficulty' && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Seleccionar Dificultad
              </label>
              <div className="grid grid-cols-3 gap-3">
                {(['easy', 'medium', 'hard'] as const).map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`p-3 rounded-lg border-2 transition-colors ${
                      selectedDifficulty === diff
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full mb-1 ${
                      diff === 'easy' ? 'bg-green-100 text-green-800' :
                      diff === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {diff === 'easy' ? 'Fácil' : diff === 'medium' ? 'Medio' : 'Difícil'}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedMode === 'topic' && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Seleccionar Tema
              </label>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Selecciona un tema...</option>
                {availableTopics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
          )}
          {/* Número de preguntas */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Número de Preguntas
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="3"
                max="15"
                value={numberOfQuestions}
                onChange={(e) => setNumberOfQuestions(Number(e.target.value))}
                className="flex-1"
              />
              <span className="w-12 text-center font-medium text-gray-900">
                {numberOfQuestions}
              </span>
            </div>
          </div>

          {/* Información del Quiz */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-medium text-gray-900 mb-2">Información del Quiz</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Modo: {selectedMode === 'random' ? 'Aleatorio' : 
                          selectedMode === 'difficulty' ? `Por Dificultad (${selectedDifficulty === 'easy' ? 'Fácil' : selectedDifficulty === 'medium' ? 'Medio' : 'Difícil'})` :
                          selectedMode === 'topic' ? `Por Tema${selectedTopic ? `: ${selectedTopic}` : ''}` :
                          'Balanceado'}</li>
              <li>• Número de preguntas: {numberOfQuestions}</li>
              <li>• Tiempo estimado: {numberOfQuestions * 2} minutos</li>
              <li>• Puntos totales disponibles: {numberOfQuestions * 15} puntos (aprox.)</li>
            </ul>
          </div>

          {/* Botón de inicio */}
          <button
            onClick={startQuiz}
            disabled={selectedMode === 'topic' && !selectedTopic}
            className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            Comenzar Quiz
          </button>
        </div>

        {/* Estadísticas */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Banco de Preguntas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{ingenieriaQuestions.length}</div>
              <div className="text-sm text-gray-600">Preguntas Totales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{availableTopics.length}</div>
              <div className="text-sm text-gray-600">Temas Disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">4</div>
              <div className="text-sm text-gray-600">Tipos de Preguntas</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}