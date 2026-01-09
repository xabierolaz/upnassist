import React, { useState } from 'react';
import {
  CheckCircleIcon,
  XCircleIcon,
  InformationCircleIcon,
  LightBulbIcon,
  ClockIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

interface TestResult {
  testId: string;
  testName: string;
  passed: boolean;
  actualOutput?: string;
  expectedOutput: string;
  error?: string;
  executionTime?: number;
  explanation?: string;
  suggestions?: string[];
  difficulty?: 'easy' | 'medium' | 'hard';
}

interface EnhancedTestFeedbackProps {
  results: TestResult[];
  totalTests: number;
  onRequestHint?: (testId: string) => void;
  showSuggestions?: boolean;
}

export const EnhancedTestFeedback: React.FC<EnhancedTestFeedbackProps> = ({
  results,
  totalTests,
  onRequestHint,
  showSuggestions = true
}) => {
  const [expandedTests, setExpandedTests] = useState<Set<string>>(new Set());
  const [showingDiff, setShowingDiff] = useState<Set<string>>(new Set());

  const passedTests = results.filter(r => r.passed).length;
  const successRate = totalTests > 0 ? Math.round((passedTests / totalTests) * 100) : 0;

  const toggleTestExpansion = (testId: string) => {
    const newExpanded = new Set(expandedTests);
    if (newExpanded.has(testId)) {
      newExpanded.delete(testId);
    } else {
      newExpanded.add(testId);
    }
    setExpandedTests(newExpanded);
  };

  const toggleDiff = (testId: string) => {
    const newShowingDiff = new Set(showingDiff);
    if (newShowingDiff.has(testId)) {
      newShowingDiff.delete(testId);
    } else {
      newShowingDiff.add(testId);
    }
    setShowingDiff(newShowingDiff);
  };

  const getSuccessMessage = () => {
    if (successRate === 100) {
      return "🎉 ¡Perfecto! Todos los tests han pasado.";
    } else if (successRate >= 80) {
      return "👍 ¡Muy bien! La mayoría de tests han pasado.";
    } else if (successRate >= 50) {
      return "👌 Progreso decente, pero puedes mejorarlo.";
    } else {
      return "🔧 Necesitas revisar tu código. No te rindas!";
    }
  };

  const getPerformanceFeedback = (executionTime?: number) => {
    if (!executionTime) return null;
    
    if (executionTime < 100) {
      return { message: "Excelente rendimiento", color: "text-green-600" };
    } else if (executionTime < 500) {
      return { message: "Buen rendimiento", color: "text-yellow-600" };
    } else {
      return { message: "Rendimiento lento", color: "text-red-600" };
    }
  };

  const generateSmartSuggestions = (result: TestResult): string[] => {
    const suggestions: string[] = [];
    
    if (!result.passed) {
      // Output comparison suggestions
      if (result.actualOutput && result.expectedOutput) {
        const actual = result.actualOutput.trim();
        const expected = result.expectedOutput.trim();
        
        if (actual.length !== expected.length) {
          suggestions.push("Revisa si tu salida tiene la longitud correcta");
        }
        
        if (actual.toLowerCase() === expected.toLowerCase()) {
          suggestions.push("Tu salida es correcta pero revisa mayúsculas/minúsculas");
        }
        
        if (actual.replace(/\s/g, '') === expected.replace(/\s/g, '')) {
          suggestions.push("Tu salida es correcta pero revisa los espacios y saltos de línea");
        }
        
        if (actual.includes('\n') !== expected.includes('\n')) {
          suggestions.push("Revisa si necesitas usar print() en líneas separadas");
        }
      }
      
      // Error-based suggestions
      if (result.error) {
        if (result.error.includes('NameError')) {
          suggestions.push("Variable no definida - revisa los nombres de tus variables");
        } else if (result.error.includes('SyntaxError')) {
          suggestions.push("Error de sintaxis - revisa paréntesis, dos puntos y comillas");
        } else if (result.error.includes('IndentationError')) {
          suggestions.push("Error de indentación - revisa los espacios al inicio de las líneas");
        } else if (result.error.includes('TypeError')) {
          suggestions.push("Error de tipo - revisa que estés usando los tipos de datos correctos");
        }
      }
      
      // Test-specific suggestions
      if (result.testName.toLowerCase().includes('loop') || result.testName.toLowerCase().includes('bucle')) {
        suggestions.push("Si usas bucles, asegúrate de que la condición sea correcta");
      }
      
      if (result.testName.toLowerCase().includes('function') || result.testName.toLowerCase().includes('función')) {
        suggestions.push("Revisa que tu función devuelva el valor correcto con 'return'");
      }
    }
    
    return suggestions.length > 0 ? suggestions : ["Revisa tu lógica y compara con el resultado esperado"];
  };

  const getDiffDisplay = (actual: string, expected: string) => {
    const actualLines = actual.split('\n');
    const expectedLines = expected.split('\n');
    const maxLines = Math.max(actualLines.length, expectedLines.length);
    
    return Array.from({ length: maxLines }, (_, i) => {
      const actualLine = actualLines[i] || '';
      const expectedLine = expectedLines[i] || '';
      const isDifferent = actualLine !== expectedLine;
      
      return {
        lineNum: i + 1,
        actual: actualLine,
        expected: expectedLine,
        isDifferent
      };
    });
  };

  return (
    <div className="bg-white rounded-lg shadow border">
      <div className="bg-gray-50 px-4 py-3 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-2 ${
              successRate === 100 ? 'text-green-600' : 
              successRate >= 50 ? 'text-yellow-600' : 'text-red-600'
            }`}>
              {successRate === 100 ? (
                <CheckCircleIcon className="h-5 w-5" />
              ) : (
                <InformationCircleIcon className="h-5 w-5" />
              )}
              <span className="font-medium">Test Results</span>
            </div>
            <div className="text-sm text-gray-600">
              {passedTests}/{totalTests} tests passed ({successRate}%)
            </div>
          </div>
          <div className="flex items-center gap-2">
            {results.some(r => r.executionTime) && (
              <div className="text-xs text-gray-500 flex items-center gap-1">
                <ClockIcon className="h-3 w-3" />
                Avg: {Math.round(results.reduce((sum, r) => sum + (r.executionTime || 0), 0) / results.length)}ms
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-2">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${
                successRate === 100 ? 'bg-green-500' :
                successRate >= 50 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${successRate}%` }}
            />
          </div>
          <p className="text-sm mt-1 text-gray-600">{getSuccessMessage()}</p>
        </div>
      </div>

      <div className="divide-y">
        {results.map((result) => {
          const isExpanded = expandedTests.has(result.testId);
          const showDiff = showingDiff.has(result.testId);
          const performance = getPerformanceFeedback(result.executionTime);
          const smartSuggestions = showSuggestions ? generateSmartSuggestions(result) : [];
          
          return (
            <div key={result.testId} className="p-4">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleTestExpansion(result.testId)}
              >
                <div className="flex items-center gap-3">
                  {result.passed ? (
                    <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                  ) : (
                    <XCircleIcon className="h-5 w-5 text-red-500 flex-shrink-0" />
                  )}
                  
                  <div>
                    <h3 className="font-medium text-sm">{result.testName}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs px-2 py-1 rounded ${
                        result.passed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {result.passed ? 'PASSED' : 'FAILED'}
                      </span>
                      
                      {result.difficulty && (
                        <span className={`text-xs px-2 py-1 rounded ${
                          result.difficulty === 'easy' ? 'bg-blue-100 text-blue-700' :
                          result.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {result.difficulty}
                        </span>
                      )}
                      
                      {performance && (
                        <span className={`text-xs ${performance.color}`}>
                          {result.executionTime}ms - {performance.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {onRequestHint && !result.passed && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRequestHint(result.testId);
                      }}
                      className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                    >
                      💡 Pista
                    </button>
                  )}
                  
                  {isExpanded ? (
                    <ChevronDownIcon className="h-4 w-4 text-gray-400" />
                  ) : (
                    <ChevronRightIcon className="h-4 w-4 text-gray-400" />
                  )}
                </div>
              </div>

              {isExpanded && (
                <div className="mt-4 pl-8 space-y-3">
                  {result.explanation && (
                    <div className="bg-blue-50 border border-blue-200 rounded p-3">
                      <div className="flex items-start gap-2">
                        <InformationCircleIcon className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-blue-800">{result.explanation}</p>
                      </div>
                    </div>
                  )}

                  {!result.passed && result.actualOutput && result.expectedOutput && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleDiff(result.testId)}
                          className="text-xs text-blue-600 hover:text-blue-800"
                        >
                          {showDiff ? 'Ocultar' : 'Mostrar'} comparación detallada
                        </button>
                      </div>
                      
                      {showDiff ? (
                        <div className="bg-gray-50 rounded border">
                          <div className="p-2 border-b bg-gray-100 text-xs font-medium">
                            Comparación línea por línea
                          </div>
                          <div className="p-2 space-y-1 max-h-40 overflow-y-auto">
                            {getDiffDisplay(result.actualOutput, result.expectedOutput).map((line, i) => (
                              <div key={i} className={`text-xs font-mono p-1 rounded ${
                                line.isDifferent ? 'bg-red-50' : 'bg-white'
                              }`}>
                                <div className="text-gray-500">Línea {line.lineNum}:</div>
                                <div className="text-red-600">- Tu salida: "{line.actual}"</div>
                                <div className="text-green-600">+ Esperado: "{line.expected}"</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="bg-red-50 border border-red-200 rounded p-2">
                            <div className="font-medium text-red-700 mb-1">Tu salida:</div>
                            <div className="font-mono text-red-800">"{result.actualOutput}"</div>
                          </div>
                          <div className="bg-green-50 border border-green-200 rounded p-2">
                            <div className="font-medium text-green-700 mb-1">Esperado:</div>
                            <div className="font-mono text-green-800">"{result.expectedOutput}"</div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {result.error && (
                    <div className="bg-red-50 border border-red-200 rounded p-3">
                      <div className="flex items-start gap-2">
                        <XCircleIcon className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-red-700 text-sm">Error:</div>
                          <pre className="text-xs text-red-800 mt-1 whitespace-pre-wrap">{result.error}</pre>
                        </div>
                      </div>
                    </div>
                  )}

                  {smartSuggestions.length > 0 && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                      <div className="flex items-start gap-2">
                        <LightBulbIcon className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="font-medium text-yellow-700 text-sm mb-2">Sugerencias:</div>
                          <ul className="text-sm text-yellow-800 space-y-1">
                            {smartSuggestions.map((suggestion, i) => (
                              <li key={i} className="flex items-start gap-1">
                                <span className="text-yellow-600">•</span>
                                {suggestion}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {successRate < 100 && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-t px-4 py-3">
          <div className="flex items-center gap-2">
            <SparklesIcon className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Consejos para mejorar:</span>
          </div>
          <ul className="text-sm text-purple-600 mt-1 space-y-1">
            <li>• Lee cuidadosamente lo que se espera en cada test</li>
            <li>• Usa las pistas cuando te quedes atascado</li>
            <li>• Revisa la salida esperada vs tu salida</li>
            <li>• Ejecuta tu código paso a paso mentalmente</li>
          </ul>
        </div>
      )}
    </div>
  );
};