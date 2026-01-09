/**
 * Componente de Quiz Universal
 * Un único componente para manejar todos los quizzes de todas las asignaturas
 */

import React, { useState, useEffect } from 'react';
import { CheckCircleIcon, XCircleIcon, ClockIcon } from '@heroicons/react/24/outline';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  topic?: string;
  asignatura?: string;
  tema?: string;
}

interface UniversalQuizProps {
  questions: QuizQuestion[];
  onComplete?: (score: number, totalQuestions: number) => void;
  title?: string;
  timeLimit?: number; // en minutos
  shuffleQuestions?: boolean;
  showExplanations?: boolean;
}

export const UniversalQuiz: React.FC<UniversalQuizProps> = ({
  questions,
  onComplete,
  title = 'Quiz',
  timeLimit,
  shuffleQuestions = true,
  showExplanations = true
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(timeLimit ? timeLimit * 60 : null);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);

  // Inicializar y mezclar preguntas si es necesario
  useEffect(() => {
    const preparedQuestions = shuffleQuestions 
      ? [...questions].sort(() => Math.random() - 0.5)
      : questions;
    setQuizQuestions(preparedQuestions);
  }, [questions, shuffleQuestions]);

  // Timer
  useEffect(() => {
    if (timeRemaining === null || timeRemaining <= 0 || showResults) return;

    const timer = setTimeout(() => {
      setTimeRemaining(timeRemaining - 1);
      if (timeRemaining === 1) {
        handleSubmit();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeRemaining, showResults]);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    if (!currentQuestion || showResults) return;
    
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion.id]: answerIndex
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
    const score = calculateScore();
    onComplete?.(score, quizQuestions.length);
  };

  const calculateScore = (): number => {
    let correct = 0;
    quizQuestions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (quizQuestions.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No hay preguntas disponibles para este quiz.</p>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / quizQuestions.length) * 100);

    return (
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Resultados del Quiz</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="text-center mb-4">
            <div className="text-4xl font-bold mb-2">
              {score} / {quizQuestions.length}
            </div>
            <div className={`text-2xl ${percentage >= 70 ? 'text-green-600' : 'text-red-600'}`}>
              {percentage}%
            </div>
          </div>

          {percentage >= 70 ? (
            <div className="flex items-center justify-center text-green-600">
              <CheckCircleIcon className="w-8 h-8 mr-2" />
              <span className="text-lg">¡Aprobado!</span>
            </div>
          ) : (
            <div className="flex items-center justify-center text-red-600">
              <XCircleIcon className="w-8 h-8 mr-2" />
              <span className="text-lg">Necesitas más práctica</span>
            </div>
          )}
        </div>

        {showExplanations && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Revisión de respuestas</h3>
            {quizQuestions.map((question, index) => {
              const userAnswer = selectedAnswers[question.id];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div key={question.id} className="bg-white rounded-lg shadow-md p-4">
                  <div className="flex items-start">
                    <div className="mr-3">
                      {isCorrect ? (
                        <CheckCircleIcon className="w-6 h-6 text-green-600" />
                      ) : (
                        <XCircleIcon className="w-6 h-6 text-red-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium mb-2">
                        {index + 1}. {question.question}
                      </p>
                      <p className={`mb-1 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                        Tu respuesta: {question.options[userAnswer] || 'Sin responder'}
                      </p>
                      {!isCorrect && (
                        <p className="text-green-600 mb-1">
                          Respuesta correcta: {question.options[question.correctAnswer]}
                        </p>
                      )}
                      {question.explanation && (
                        <p className="text-gray-600 text-sm mt-2">
                          <strong>Explicación:</strong> {question.explanation}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          {timeRemaining !== null && (
            <div className="flex items-center text-gray-600">
              <ClockIcon className="w-5 h-5 mr-1" />
              <span className={timeRemaining < 60 ? 'text-red-600 font-bold' : ''}>
                {formatTime(timeRemaining)}
              </span>
            </div>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">
            Pregunta {currentQuestionIndex + 1} de {quizQuestions.length}
          </span>
          <div className="flex space-x-1">
            {quizQuestions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestionIndex(index)}
                className={`w-8 h-8 rounded ${
                  index === currentQuestionIndex
                    ? 'bg-blue-600 text-white'
                    : selectedAnswers[quizQuestions[index].id] !== undefined
                    ? 'bg-green-200 text-green-800'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {currentQuestion && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-lg font-medium mb-4">{currentQuestion.question}</h3>
          
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                  selectedAnswers[currentQuestion.id] === index
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <span className="flex items-center">
                  <span className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                    selectedAnswers[currentQuestion.id] === index
                      ? 'border-blue-600 bg-blue-600'
                      : 'border-gray-400'
                  }`}>
                    {selectedAnswers[currentQuestion.id] === index && (
                      <span className="w-3 h-3 bg-white rounded-full" />
                    )}
                  </span>
                  {option}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Anterior
        </button>
        
        {currentQuestionIndex === quizQuestions.length - 1 ? (
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Enviar Quiz
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
};

export default UniversalQuiz;