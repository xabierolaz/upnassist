import React from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import type { TestResult } from '../types';

interface ResultsDisplayProps {
  results: TestResult[];
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold text-lg mb-3">Resultados de Tests</h3>
      
      <div className="space-y-2">
        {results.map((result) => (
          <div
            key={result.testId}
            className={`border rounded-lg p-3 ${
              result.passed
                ? 'border-green-300 bg-green-50'
                : 'border-red-300 bg-red-50'
            }`}
          >
            <div className="flex items-start gap-2">
              {result.passed ? (
                <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5" />
              ) : (
                <XCircleIcon className="h-5 w-5 text-red-600 mt-0.5" />
              )}
              
              <div className="flex-1">
                <p className={`font-medium ${
                  result.passed ? 'text-green-800' : 'text-red-800'
                }`}>
                  {result.testName}
                </p>
                
                {!result.passed && (
                  <div className="mt-2 text-sm space-y-1">
                    {result.error ? (
                      <div>
                        <p className="font-medium text-red-700">Error:</p>
                        <pre className="bg-red-100 p-2 rounded mt-1 text-red-600 overflow-x-auto">
                          {result.error}
                        </pre>
                      </div>
                    ) : (
                      <>
                        <div>
                          <p className="font-medium text-red-700">Esperado:</p>
                          <pre className="bg-gray-100 p-2 rounded mt-1 text-gray-700 overflow-x-auto">
                            {result.expectedOutput}
                          </pre>
                        </div>
                        <div>
                          <p className="font-medium text-red-700">Obtenido:</p>
                          <pre className="bg-gray-100 p-2 rounded mt-1 text-gray-700 overflow-x-auto">
                            {result.actualOutput || '(sin salida)'}
                          </pre>
                        </div>
                      </>
                    )}
                  </div>
                )}
                
                {result.executionTime && (
                  <p className="text-xs text-gray-500 mt-1">
                    Tiempo: {result.executionTime.toFixed(2)}ms
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};