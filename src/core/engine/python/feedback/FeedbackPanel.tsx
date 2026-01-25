import React from 'react';
import { TestSuiteResult, TestCaseResult } from '../core/TestRunner';

interface FeedbackPanelProps {
  results: TestSuiteResult | null;
  isRunning: boolean;
}

const FeedbackPanel: React.FC<FeedbackPanelProps> = ({ results, isRunning }) => {
  if (isRunning) {
    return (
      <div className="p-6 bg-gray-50 border-t border-gray-200 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
        <div className="space-y-3">
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!results) {
    return null;
  }

  const allPassed = results.passed === results.total && results.total > 0;
  const borderColor = allPassed ? 'border-green-500' : 'border-red-500';
  const bgColor = allPassed ? 'bg-green-50' : 'bg-red-50';
  const textColor = allPassed ? 'text-green-800' : 'text-red-800';

  return (
    <div className="flex flex-col h-full bg-white font-sans">
      {/* Header Resumen */}
      <div className={`p-4 border-b ${borderColor} ${bgColor}`}>
        <div className="flex items-center justify-between">
          <h3 className={`text-lg font-bold ${textColor}`}>
            {allPassed ? '¡Excelente! Todo correcto' : 'Revisión necesaria'}
          </h3>
          <span className={`px-3 py-1 rounded-full text-sm font-bold bg-white border ${borderColor} ${textColor}`}>
            {results.passed} / {results.total} Tests
          </span>
        </div>
        {!allPassed && (
          <p className="text-sm text-gray-600 mt-1">
            Algunas pruebas fallaron. Revisa los detalles abajo para corregir tu código.
          </p>
        )}
      </div>

      {/* Lista de Resultados */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {results.results.map((test, index) => (
          <TestResultCard key={index} result={test} />
        ))}
      </div>
    </div>
  );
};

const TestResultCard: React.FC<{ result: TestCaseResult }> = ({ result }) => {
  const isPass = result.status === 'pass';
  const icon = isPass ? '✅' : (result.status === 'error' ? '⚠️' : '❌');
  
  // Procesar mensaje de error para hacerlo amigable
  let displayMessage = result.message;
  let detailInfo = "";

  if (!isPass && result.message.includes('Traceback')) {
      const lines = result.message.split('\n');
      const lastLine = lines[lines.length - 1] || lines[lines.length - 2]; // A veces la última es vacía
      displayMessage = lastLine; // Mostrar solo "NameError: name 'x' is not defined"
      detailInfo = result.message; // Guardar el resto para un "Ver detalles"
  }
  
  return (
    <div className={`border rounded-lg p-3 transition-colors ${
      isPass ? 'border-green-200 bg-white' : 'border-red-200 bg-red-50'
    }`}>
      <div className="flex items-start gap-3">
        <span className="text-xl mt-0.5">{icon}</span>
        <div className="flex-1">
          <h4 className={`font-semibold text-sm ${isPass ? 'text-gray-800' : 'text-red-800'}`}>
            {result.description || result.name}
          </h4>
          
          {!isPass && (
            <div className="mt-2 text-sm">
              <div className="font-mono bg-white p-2 rounded border border-red-100 text-red-600 whitespace-pre-wrap break-words">
                <strong>{displayMessage}</strong>
                {detailInfo && (
                    <details className="mt-2 text-xs text-gray-500 cursor-pointer">
                        <summary>Ver Traceback completo</summary>
                        <div className="mt-1 p-2 bg-gray-100 rounded text-gray-700">
                            {detailInfo}
                        </div>
                    </details>
                )}
              </div>
              {result.feedback && (
                <div className="mt-2 text-gray-600 italic">
                  💡 Pista: {result.feedback}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackPanel;
