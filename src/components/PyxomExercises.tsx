import React from 'react';
import PyXomEnvironment from './pyxom/PyXomEnvironment';
import { mapDifficultyToEnglish } from '../utils/difficultyMapping';

interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: string; // Puede venir en español o inglés
  topic: string;
  initialCode: string;
  solution: string;
  testCases: Array<{
    description: string;
    code: string;
  }>;
  hints?: string[];
}

interface PyxomExercisesProps {
  exercises: Exercise[];
}

export const PyxomExercises: React.FC<PyxomExercisesProps> = ({ 
  exercises
}) => {
  const [currentExercise, setCurrentExercise] = React.useState(0);
  
  if (exercises.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No hay ejercicios disponibles en este momento.</p>
      </div>
    );
  }

  const exercise = exercises[currentExercise];

  return (
    <div className="space-y-6">
      {/* Selector de ejercicios */}
      {exercises.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {exercises.map((ex, index) => (
            <button
              key={ex.id}
              onClick={() => setCurrentExercise(index)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                index === currentExercise
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {ex.title}
            </button>
          ))}
        </div>
      )}

      {/* Información del ejercicio */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{exercise.title}</h2>
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
            mapDifficultyToEnglish(exercise.difficulty) === 'easy' ? 'bg-green-100 text-green-800' :
            mapDifficultyToEnglish(exercise.difficulty) === 'medium' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {exercise.difficulty.charAt(0).toUpperCase() + exercise.difficulty.slice(1)}
          </span>
        </div>
        
        <p className="text-gray-600 mb-2">{exercise.description}</p>
        <p className="text-sm text-gray-500">Tema: {exercise.topic}</p>
      </div>

      {/* Entorno PyXom */}
      <PyXomEnvironment
        exerciseId={exercise.id}
        exercise={{
          ...exercise,
          difficulty: mapDifficultyToEnglish(exercise.difficulty),
          topics: [exercise.topic],
          tests: exercise.testCases.map((tc, index) => ({
            id: `test-${index}`,
            name: tc.description,
            input: tc.code,
            expectedOutput: '',
            isHidden: false
          }))
        }}
      />
    </div>
  );
};

export default PyxomExercises;
