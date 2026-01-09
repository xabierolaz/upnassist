import { useState, useEffect } from 'react';
import { 
  QuestionMarkCircleIcon, 
  CheckCircleIcon, 
  XCircleIcon,
  LightBulbIcon,
  ArrowRightIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

// Tipos de preguntas
export interface InteractiveQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'fill-blank' | 'code-output';
  question: string;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  hint?: string;
  explanation?: string;
  codeSnippet?: string;
  // Para multiple choice
  options?: string[];
  correctAnswer?: string | string[];
  // Para fill-blank
  blanks?: string[];
  // Para code-output
  expectedOutput?: string;
}

interface InteractiveQuizProps {
  questions?: InteractiveQuestion[];
  quizData?: any;
  onComplete?: (score: number, totalPoints: number) => void;
  onClose?: () => void;
  subject?: string;
  isProfesor?: boolean;
}

export default function InteractiveQuiz({ questions, quizData, onComplete, subject }: InteractiveQuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Map<string, any>>(new Map());
  const [showHint, setShowHint] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Use quizData if available, otherwise use questions prop
  const actualQuestions = quizData?.questions || questions || [];
  const currentQuestion = actualQuestions[currentQuestionIndex];

  // Reset cuando cambian las preguntas
  useEffect(() => {
    setCurrentQuestionIndex(0);
    setUserAnswers(new Map());
    setScore(0);
    setQuizCompleted(false);
  }, [questions]);
  // Verificar respuesta
  const checkAnswer = () => {
    if (!currentQuestion) return;

    let isCorrect = false;
    const userAnswer = userAnswers.get(currentQuestion.id);

    switch (currentQuestion.type) {
      case 'multiple-choice':
      case 'true-false':
        isCorrect = userAnswer === currentQuestion.correctAnswer;
        break;
      case 'fill-blank':
        if (Array.isArray(userAnswer) && Array.isArray(currentQuestion.blanks)) {
          isCorrect = userAnswer.every((ans, idx) => 
            ans?.toLowerCase().trim() === currentQuestion.blanks![idx].toLowerCase().trim()
          );
        }
        break;
      case 'code-output':
        isCorrect = userAnswer?.trim() === currentQuestion.expectedOutput?.trim();
        break;
    }

    if (isCorrect) {
      setScore(score + currentQuestion.points);
    }

    setIsAnswered(true);
    setShowExplanation(true);
  };

  // Siguiente pregunta
  const nextQuestion = () => {
    const qs = actualQuestions;
    if (!qs || qs.length === 0) return;
    
    if (currentQuestionIndex < qs.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowHint(false);
      setShowExplanation(false);
      setIsAnswered(false);
    } else {
      // Quiz completado
      setQuizCompleted(true);
      const totalPoints = qs.reduce((sum: number, q: any) => sum + (q.points || 10), 0);
      if (onComplete) {
        onComplete(score, totalPoints);
      }
    }
  };
  // Manejar cambio de respuesta
  const handleAnswerChange = (value: any) => {
    const newAnswers = new Map(userAnswers);
    newAnswers.set(currentQuestion.id, value);
    setUserAnswers(newAnswers);
  };

  // Renderizar input según tipo de pregunta
  const renderQuestionInput = () => {
    if (!currentQuestion) return null;

    switch (currentQuestion.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-2">
            {currentQuestion.options?.map((option: any, idx: any) => (
              <label
                key={idx}
                className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                  isAnswered
                    ? option === currentQuestion.correctAnswer
                      ? 'bg-green-50 border-green-500'
                      : userAnswers.get(currentQuestion.id) === option
                      ? 'bg-red-50 border-red-500'
                      : 'bg-gray-50 border-gray-300'
                    : userAnswers.get(currentQuestion.id) === option
                    ? 'bg-blue-50 border-blue-500'
                    : 'hover:bg-gray-50 border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={userAnswers.get(currentQuestion.id) === option}
                  onChange={(e) => handleAnswerChange(e.target.value)}
                  disabled={isAnswered}
                  className="mr-3"
                />
                <span className="text-sm">{option}</span>
                {isAnswered && option === currentQuestion.correctAnswer && (
                  <CheckCircleIcon className="h-5 w-5 text-green-500 ml-auto" />
                )}
                {isAnswered && userAnswers.get(currentQuestion.id) === option && option !== currentQuestion.correctAnswer && (
                  <XCircleIcon className="h-5 w-5 text-red-500 ml-auto" />
                )}
              </label>
            ))}
          </div>
        );
      case 'true-false':
        return (
          <div className="space-y-2">
            {['Verdadero', 'Falso'].map((option) => (
              <label
                key={option}
                className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                  isAnswered
                    ? option === currentQuestion.correctAnswer
                      ? 'bg-green-50 border-green-500'
                      : userAnswers.get(currentQuestion.id) === option
                      ? 'bg-red-50 border-red-500'
                      : 'bg-gray-50 border-gray-300'
                    : userAnswers.get(currentQuestion.id) === option
                    ? 'bg-blue-50 border-blue-500'
                    : 'hover:bg-gray-50 border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="tf-answer"
                  value={option}
                  checked={userAnswers.get(currentQuestion.id) === option}
                  onChange={(e) => handleAnswerChange(e.target.value)}
                  disabled={isAnswered}
                  className="mr-3"
                />
                <span className="text-sm font-medium">{option}</span>
                {isAnswered && option === currentQuestion.correctAnswer && (
                  <CheckCircleIcon className="h-5 w-5 text-green-500 ml-auto" />
                )}
              </label>
            ))}
          </div>
        );
      case 'fill-blank':
        const blanksCount = currentQuestion.blanks?.length || 1;
        const currentAnswers = userAnswers.get(currentQuestion.id) || new Array(blanksCount).fill('');
        
        return (
          <div className="space-y-3">
            {Array.from({ length: blanksCount }, (_, idx) => (
              <div key={idx}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Espacio {idx + 1}:
                </label>
                <input
                  type="text"
                  value={currentAnswers[idx] || ''}
                  onChange={(e) => {
                    const newAnswers = [...currentAnswers];
                    newAnswers[idx] = e.target.value;
                    handleAnswerChange(newAnswers);
                  }}
                  disabled={isAnswered}
                  className={`w-full px-3 py-2 border rounded-md ${
                    isAnswered
                      ? currentAnswers[idx]?.toLowerCase().trim() === currentQuestion.blanks![idx].toLowerCase().trim()
                        ? 'bg-green-50 border-green-500'
                        : 'bg-red-50 border-red-500'
                      : 'border-gray-300'
                  }`}
                  placeholder="Tu respuesta..."
                />
                {isAnswered && (
                  <p className="text-sm mt-1 text-green-600">
                    Respuesta correcta: {currentQuestion.blanks![idx]}
                  </p>
                )}
              </div>
            ))}
          </div>
        );
      case 'code-output':
        return (
          <div>
            {currentQuestion.codeSnippet && (
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mb-4 font-mono text-sm overflow-x-auto">
                {currentQuestion.codeSnippet}
              </pre>
            )}
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ¿Cuál es la salida del código?
            </label>
            <textarea
              value={userAnswers.get(currentQuestion.id) || ''}
              onChange={(e) => handleAnswerChange(e.target.value)}
              disabled={isAnswered}
              className={`w-full px-3 py-2 border rounded-md font-mono text-sm ${
                isAnswered
                  ? userAnswers.get(currentQuestion.id)?.trim() === currentQuestion.expectedOutput?.trim()
                    ? 'bg-green-50 border-green-500'
                    : 'bg-red-50 border-red-500'
                  : 'border-gray-300'
              }`}
              rows={3}
              placeholder="Escribe la salida esperada..."
            />
            {isAnswered && (
              <p className="text-sm mt-2 text-green-600 font-mono">
                Salida correcta: {currentQuestion.expectedOutput}
              </p>
            )}
          </div>
        );

      default:
        return null;
    }
  };
  // Pantalla de resultados finales
  if (quizCompleted) {
    const totalPoints = actualQuestions.reduce((sum: number, q: any) => sum + (q.points || 10), 0);
    const percentage = Math.round((score / totalPoints) * 100);
    
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <AcademicCapIcon className="h-16 w-16 mx-auto mb-4 text-blue-600" />
          <h2 className="text-2xl font-bold mb-4">¡Quiz Completado!</h2>
          
          <div className="mb-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {score} / {totalPoints} puntos
            </div>
            <div className="text-lg text-gray-600">
              {percentage}% de respuestas correctas
            </div>
          </div>

          <div className={`p-4 rounded-lg ${
            percentage >= 80 ? 'bg-green-100 text-green-800' :
            percentage >= 60 ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            <p className="font-medium">
              {percentage >= 80 ? '¡Excelente trabajo!' :
               percentage >= 60 ? 'Buen trabajo, pero hay espacio para mejorar.' :
               'Necesitas repasar el material.'}
            </p>
          </div>

          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Intentar de nuevo
          </button>
        </div>
      </div>
    );
  }
  // Render principal del quiz
  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              {subject || 'Quiz Interactivo'}
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Pregunta {currentQuestionIndex + 1} de {actualQuestions.length}
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">
              {score} pts
            </div>
            <div className="text-xs text-gray-500">Puntuación</div>
          </div>
        </div>

        {/* Barra de progreso */}
        <div className="mt-4 bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / actualQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Pregunta actual */}
      {currentQuestion && (
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Metadatos de la pregunta */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                currentQuestion.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                currentQuestion.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {currentQuestion.difficulty === 'easy' ? 'Fácil' :
                 currentQuestion.difficulty === 'medium' ? 'Medio' : 'Difícil'}
              </span>
              <span className="text-sm text-gray-500">
                {currentQuestion.topic}
              </span>
            </div>
            <span className="text-sm font-medium text-gray-700">
              {currentQuestion.points} puntos
            </span>
          </div>
          {/* Pregunta */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              {currentQuestion.question}
            </h2>
            
            {/* Input de respuesta */}
            {renderQuestionInput()}
          </div>

          {/* Pista */}
          {currentQuestion.hint && !isAnswered && (
            <div className="mb-4">
              {showHint ? (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <div className="flex items-start">
                    <LightBulbIcon className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
                    <p className="text-sm text-yellow-800">{currentQuestion.hint}</p>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setShowHint(true)}
                  className="text-sm text-blue-600 hover:text-blue-700 flex items-center"
                >
                  <LightBulbIcon className="h-4 w-4 mr-1" />
                  Mostrar pista
                </button>
              )}
            </div>
          )}
          {/* Explicación */}
          {showExplanation && currentQuestion.explanation && (
            <div className="mb-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
              <div className="flex items-start">
                <QuestionMarkCircleIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-blue-900 mb-1">Explicación:</p>
                  <p className="text-sm text-blue-800">{currentQuestion.explanation}</p>
                </div>
              </div>
            </div>
          )}

          {/* Botones de acción */}
          <div className="flex justify-between items-center">
            {!isAnswered ? (
              <button
                onClick={checkAnswer}
                disabled={!userAnswers.has(currentQuestion.id)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Verificar Respuesta
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
              >
                {currentQuestionIndex < actualQuestions.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'}
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </button>
            )}

            <div className="text-sm text-gray-500">
              {isAnswered && (
                userAnswers.get(currentQuestion.id) === currentQuestion.correctAnswer ||
                (currentQuestion.type === 'fill-blank' && 
                 userAnswers.get(currentQuestion.id)?.every((ans: string, idx: number) => 
                   ans?.toLowerCase().trim() === currentQuestion.blanks![idx].toLowerCase().trim()
                 )) ||
                (currentQuestion.type === 'code-output' &&
                 userAnswers.get(currentQuestion.id)?.trim() === currentQuestion.expectedOutput?.trim())
                ? <span className="text-green-600 font-medium">¡Correcto! +{currentQuestion.points} puntos</span>
                : <span className="text-red-600 font-medium">Incorrecto</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}