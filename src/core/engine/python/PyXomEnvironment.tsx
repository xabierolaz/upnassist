import React, { useState } from 'react';
import { CodeEditor } from './core/CodeEditor';
import { usePythonExecution } from './hooks/usePythonExecution';
import { Terminal } from './Terminal';
import { DebuggerPanel } from '../../../components/debugger/DebuggerPanel';
import { useDebuggerStore } from '../../../core/store/debuggerStore';
import { useProgressStore } from '../../store/progressStore';
import { useLanguageStore } from '../../store/languageStore';
import { PlayIcon, StopIcon, EyeIcon, BugAntIcon, ChartBarIcon } from '@heroicons/react/24/solid';
import { CodeAnalyzer } from './analysis/CodeAnalyzer';

export interface PyXomEnvironmentProps {
  exerciseId?: string; 
  initialCode?: string;
  testCode?: string;
  onSuccess?: () => void;
  className?: string;
}

export const PyXomEnvironment: React.FC<PyXomEnvironmentProps> = ({
  exerciseId,
  initialCode = '',
  testCode = '',
  onSuccess,
  className = ''
}) => {
  const markAsCompleted = useProgressStore(state => state.markAsCompleted);
  const { t } = useLanguageStore(); 
  const [activeTab, setActiveTab] = useState<'console' | 'feedback' | 'analysis'>('console');
  const [analysisResults, setAnalysisResults] = useState<any[]>([]);
  const [lintErrors, setLintErrors] = useState<any[]>([]);
  
  // Debugger state
  const isDebugActive = useDebuggerStore(state => state.isActive);
  const activeLine = useDebuggerStore(state => state.currentLine);
  const startDebug = useDebuggerStore(state => state.startSession);

  const {
      code,
      setCode,
      history,
      isRunning,
      isWaitingInput,
      inputPrompt,
      inputRef,
      testResults,
      executeCode,
      runTests,
      handleInputSubmit,
      interrupt,
      resetCode
  } = usePythonExecution(initialCode);

  const handleSubmit = async () => {
    if (!testCode) {
      setActiveTab('console');
      return;
    }
    
    setActiveTab('feedback');
    const results = await runTests(testCode);
    
    // Capture analysis results from the test run
    if (results && results.analysis) {
        if (results.analysis.warnings) {
            const warnings = results.analysis.warnings.map((w: any) => ({
                ...w,
                type: 'warning',
                category: 'style',
                severity: 'medium',
                line: w.line || 1
            }));
            setAnalysisResults(warnings);
            
            // Map to Monaco markers
            setLintErrors(warnings.map((w: any) => ({
                line: w.line || 1,
                column: 1,
                message: w.message || w.code || "Style warning", // Should be translated but acceptable for now
                type: 'warning'
            })));
        } else {
            setAnalysisResults([]);
            setLintErrors([]);
        }
    }

    if (results && results.score === 100) {
        if (exerciseId) markAsCompleted(exerciseId);
        if (onSuccess) onSuccess();
    }
  };

  const handleReset = () => {
      if (confirm(t.resetConfirm)) {
          resetCode();
          setAnalysisResults([]);
          setLintErrors([]);
      }
  };

  return (
    <div className={`flex flex-col h-full border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200 flex-shrink-0">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-bold text-gray-700 tracking-tight font-heading uppercase">{t.editorTitle}</span>
        </div>
      </div>

      <div className="flex-1 min-h-0 flex flex-col md:flex-row">
        {/* Editor Area */}
        <div className="flex-[6] min-h-0 border-b md:border-b-0 md:border-r border-gray-200 relative">
          <CodeEditor 
            value={code} 
            onChange={(val) => {
                setCode(val);
                // Clear lints on edit to avoid stale markers
                if (lintErrors.length > 0) setLintErrors([]);
            }} 
            language="python" 
            fontSize={15} 
            activeLine={activeLine}
            lintErrors={lintErrors}
          />
        </div>
            
        {/* Terminal Area */}
        {isDebugActive && !isWaitingInput ? (
            <div className="flex-[4] min-h-0 bg-white p-4 overflow-y-auto">
                <DebuggerPanel />
            </div>
        ) : (
            <Terminal 
                history={history}
                isRunning={isRunning}
                isWaitingInput={isWaitingInput}
                inputPrompt={inputPrompt}
                inputRef={inputRef}
                testResults={testResults}
                analysisResults={analysisResults}
                onInputSubmit={handleInputSubmit}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                code={code}
            />
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-100 border-t border-gray-200 p-3 flex items-center space-x-3">
          {isRunning ? (
            <button 
                onClick={interrupt} 
                className="flex items-center px-4 py-2 text-sm font-bold text-white bg-red-600 rounded hover:bg-red-700 shadow-sm transition-colors animate-pulse"
            >
                <StopIcon className="w-4 h-4 mr-2" /> {t.stop}
            </button>
          ) : (
            <button onClick={() => executeCode(code)} className="flex items-center px-4 py-2 text-sm font-bold text-white bg-blue-600 rounded hover:bg-blue-700 shadow-sm transition-transform active:scale-95">
                <PlayIcon className="w-4 h-4 mr-2" /> {t.run}
            </button>
          )}

          <button 
            onClick={() => startDebug(code)} 
            disabled={isRunning || isDebugActive}
            className="flex items-center px-4 py-2 text-sm font-bold text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50 shadow-sm transition-colors"
          >
            <BugAntIcon className="w-4 h-4 mr-2 text-amber-500" /> {t.debug}
          </button>

          <button onClick={handleSubmit} disabled={isRunning} className="flex items-center px-4 py-2 text-sm font-bold text-orange-700 bg-white border border-gray-300 rounded hover:bg-orange-50 disabled:opacity-50 shadow-sm transition-colors">
            <EyeIcon className="w-4 h-4 mr-2" /> {t.submit}
          </button>

          <div className="flex-1"></div>

          <button 
            onClick={handleReset}
            disabled={isRunning}
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors shadow-sm disabled:opacity-50"
          >
            {t.reset}
          </button>
      </div>
    </div>
  );
};

export default PyXomEnvironment;
