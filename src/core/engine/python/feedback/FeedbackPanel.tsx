import React from 'react';
import { CheckCircleIcon, ExclamationTriangleIcon, XCircleIcon, LightBulbIcon } from '@heroicons/react/24/solid';
import { TestSuiteResult, TestCaseResult } from '../core/TestRunner';
import { useLanguageStore } from '../../../store/languageStore';

interface FeedbackPanelProps {
  results: TestSuiteResult | null;
  isRunning: boolean;
}

const FeedbackPanel: React.FC<FeedbackPanelProps> = ({ results, isRunning }) => {
  const { t } = useLanguageStore();

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
            {allPassed ? t.feedbackSuccess : t.feedbackReview}
          </h3>
          <span className={`px-3 py-1 rounded-full text-sm font-bold bg-white border ${borderColor} ${textColor}`}>
            {results.passed} / {results.total} {t.testCount}
          </span>
        </div>
        {!allPassed && (
          <p className="text-sm text-gray-600 mt-1">
            {t.feedbackFail}
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
  const { t } = useLanguageStore();
  const isPass = result.status === 'pass';
  
  const icon = isPass ? (
    <CheckCircleIcon className="w-5 h-5 text-green-500" />
  ) : result.status === 'error' ? (
    <ExclamationTriangleIcon className="w-5 h-5 text-amber-500" />
  ) : (
    <XCircleIcon className="w-5 h-5 text-red-500" />
  );
  
  // Procesar mensaje de error usando códigos
  let displayMessage = result.message;
  let adviceMessage: string | null = null;

  // 1. Error Principal
  if (result.code) {
      displayMessage = (t.errors as any)[result.code] || result.code;
      if (result.params) {
          Object.entries(result.params).forEach(([key, value]) => {
              displayMessage = displayMessage.replace(`{${key}}`, String(value));
          });
      }
  }

  // 2. Consejos (Advice Code)
  if (result.advice_code) {
      adviceMessage = (t.errors as any)[result.advice_code] || result.advice_code;
      // Params for advice could be passed here if extended, assuming same params for now
      if (result.params) {
          Object.entries(result.params).forEach(([key, value]) => {
              adviceMessage = adviceMessage?.replace(`{${key}}`, String(value)) || null;
          });
      }
  }
  
  return (
    <div className={`border rounded-lg p-3 transition-colors ${
      isPass ? 'border-green-200 bg-white' : 'border-red-200 bg-red-50'
    }`}>
      <div className="flex items-start gap-3">
        <span className="mt-0.5">{icon}</span>
        <div className="flex-1">
          <h4 className={`font-semibold text-sm ${isPass ? 'text-gray-800' : 'text-red-800'}`}>
            {result.name}
          </h4>
          
          {!isPass && (
            <div className="mt-2 text-sm">
              <div className="font-mono bg-white p-2 rounded border border-red-100 text-red-600 whitespace-pre-wrap break-words">
                <strong>{displayMessage}</strong>
              </div>
              {adviceMessage && (
                <div className="mt-2 text-gray-600 italic flex items-center gap-1">
                  <LightBulbIcon className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>{t.hintLabel}: {adviceMessage}</span>
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
