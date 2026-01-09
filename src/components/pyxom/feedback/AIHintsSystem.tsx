import React, { useState } from 'react';
import { LightBulbIcon, EyeIcon, EyeSlashIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { aiHintService } from '../../../services/AIHintService';
import type { TestResult } from '../types';

interface AIHintsSystemProps {
  exercise: {
    title: string;
    description: string;
    hints?: string[];
  };
  hintsUsed: number;
  showHints: boolean;
  onUseHint: () => void;
  onToggleHints: () => void;
  studentCode: string;
  testResults: TestResult[];
  language: 'python' | 'java';
}

export const AIHintsSystem: React.FC<AIHintsSystemProps> = ({
  exercise,
  hintsUsed,
  showHints,
  onUseHint,
  onToggleHints,
  studentCode,
  testResults,
  language
}) => {
  const [aiHints, setAiHints] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  
  const staticHints = exercise.hints || [];
  const totalHints = staticHints.length + 3; // 3 niveles de pistas IA
  const hasMoreHints = hintsUsed < totalHints;
  
  // Combinar pistas estáticas y de IA
  const allHints = [...staticHints, ...aiHints];
  const visibleHints = allHints.slice(0, hintsUsed);

  const handleUseHint = async () => {
    // Si ya usamos todas las pistas estáticas, generar con IA
    if (hintsUsed >= staticHints.length && aiHints.length < 3) {
      setIsGenerating(true);
      try {
        const aiLevel = hintsUsed - staticHints.length + 1;
        const hint = await aiHintService.generateHint(
          exercise.description,
          studentCode,
          testResults,
          language,
          aiLevel
        );
        
        setAiHints([...aiHints, hint.hint]);
      } catch (error) {
        console.error('Error generando pista con IA:', error);
        setAiHints([...aiHints, 'No se pudo generar una pista en este momento.']);
      } finally {
        setIsGenerating(false);
      }
    }
    
    onUseHint();
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <LightBulbIcon className="h-5 w-5 text-yellow-500" />
          Pistas
          {hintsUsed > staticHints.length && (
            <span className="flex items-center text-sm text-purple-600">
              <SparklesIcon className="h-4 w-4 mr-1" />
              con IA
            </span>
          )}
        </h3>
        {hintsUsed > 0 && (
          <button
            onClick={onToggleHints}
            className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            {showHints ? (
              <>
                <EyeSlashIcon className="h-4 w-4" />
                Ocultar
              </>
            ) : (
              <>
                <EyeIcon className="h-4 w-4" />
                Mostrar
              </>
            )}
          </button>
        )}
      </div>      {showHints && hintsUsed > 0 && (
        <div className="space-y-2 mb-3">
          {visibleHints.map((hint, index) => (
            <div key={index} className="p-3 bg-yellow-50 rounded border border-yellow-200">
              <p className="text-sm text-gray-700">
                <span className="font-medium">Pista {index + 1}:</span> {hint}
              </p>
            </div>
          ))}
        </div>
      )}
      
      {hasMoreHints && (
        <button
          onClick={handleUseHint}
          disabled={isGenerating}
          className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          {isGenerating ? 'Generando pista...' : `Usar pista (${hintsUsed}/${totalHints})`}
        </button>
      )}
    </div>
  );
};