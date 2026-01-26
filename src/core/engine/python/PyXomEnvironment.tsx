import React, { useState, useEffect, useRef } from 'react';
import { CodeEditor } from './core/CodeEditor';
import PythonRunner from './core/PythonRunner';
import { TestRunner, TestSuiteResult } from './core/TestRunner';
import FeedbackPanel from './feedback/FeedbackPanel';
import { useProgressStore } from '../../store/progressStore';
import { useLanguageStore } from '../../store/languageStore';
import { translatePythonError } from './analysis/ErrorTranslator';

interface LogEntry {
  type: 'stdout' | 'stdin';
  text: string;
}

export interface PyXomEnvironmentProps {
  exerciseId?: string; 
  initialCode?: string;
  testCode?: string;
  onSuccess?: () => void;
  className?: string;
}

import { PlayIcon, StopIcon, EyeIcon } from '@heroicons/react/24/solid';

export const PyXomEnvironment: React.FC<PyXomEnvironmentProps> = ({
  exerciseId,
  initialCode = '',
  testCode = '',
  onSuccess,
  className = ''
}) => {
  const markAsCompleted = useProgressStore(state => state.markAsCompleted);
  const { t, currentLang } = useLanguageStore(); 
  const [code, setCode] = useState(initialCode);
  const [history, setHistory] = useState<LogEntry[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState<'console' | 'feedback'>('console');
  const [testResults, setTestResults] = useState<TestSuiteResult | null>(null);
  
  const [isWaitingInput, setIsWaitingInput] = useState(false);
  const [inputPrompt, setInputPrompt] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalContainerRef.current) {
        terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  }, [history, isWaitingInput]);

  useEffect(() => {
      const runner = PythonRunner.getInstance();
      runner.setInputHandler((prompt) => {
          setIsWaitingInput(true);
          setInputPrompt(prompt);
          setTimeout(() => inputRef.current?.focus(), 50);
      });
  }, []);

  const handleInputSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!inputRef.current) return;
      const value = inputRef.current.value;
      setHistory(prev => [...prev, { type: 'stdin', text: value + "\n" }]);
      PythonRunner.getInstance().sendInput(value);
      setIsWaitingInput(false);
      setInputPrompt("");
      inputRef.current.value = "";
  };

  const handleRun = async () => {
    setIsRunning(true);
    setActiveTab('console');
    setHistory([]);
    try {
      const result = await PythonRunner.execute(code, (text) => {
          setHistory(prev => [...prev, { type: 'stdout', text }]);
      });
      if (!result.success && result.error) {
        const friendlyError = translatePythonError(result.error, currentLang);
        setHistory(prev => [...prev, { type: 'stdout', text: `\n⚠️ ${friendlyError}\n\n${result.error}` }]);
      }
    } catch (e) {
      setHistory(prev => [...prev, { type: 'stdout', text: `${t.criticalError}${(e as Error).message}` }]);
    } finally {
      setIsRunning(false);
      setIsWaitingInput(false);
    }
  };

  const handleSubmit = async () => {
    if (!testCode) {
      setHistory([{ type: 'stdout', text: t.noTests }]);
      setActiveTab('console');
      return;
    }
    setIsRunning(true);
    setActiveTab('feedback');
    setTestResults(null);
    try {
      const results = await TestRunner.runTests(code, testCode, currentLang);
      setTestResults(results);
      if (results.score === 100) {
          if (exerciseId) markAsCompleted(exerciseId);
          if (onSuccess) onSuccess();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className={`flex flex-col h-full border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm ${className}`}>
      {/* Header: Title only, no buttons */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200 flex-shrink-0">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-bold text-gray-700 tracking-tight font-heading uppercase">{t.editorTitle}</span>
        </div>
        {/* Spinner or Status could go here if needed */}
      </div>

      <div className="flex-1 min-h-0 flex flex-col">
        {/* Editor Area (60%) */}
        <div className="flex-[6] min-h-0 border-b border-gray-200 relative">
          <CodeEditor value={code} onChange={setCode} language="python" fontSize={15} />
        </div>
            
        {/* Output Area (40%) */}
        <div className="flex-[4] min-h-0 flex flex-col bg-white text-gray-900">
            <div className="flex border-b border-gray-200 bg-gray-50">
                <button 
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${activeTab === 'console' ? 'border-b-2 border-[#c0392b] text-[#c0392b]' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab('console')}
                >
                    {t.terminal}
                </button>
                <button 
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${activeTab === 'feedback' ? 'border-b-2 border-[#c0392b] text-[#c0392b]' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab('feedback')}
                >
                    {t.tests}
                </button>
            </div>
            
            <div ref={terminalContainerRef} className="flex-1 overflow-auto p-4 font-mono text-sm relative bg-gray-50/30">
                {activeTab === 'console' && (
                    <>
                        <div className="whitespace-pre-wrap break-words">
                            {history.map((entry, i) => (
                                <span key={i} className={entry.type === 'stdin' ? 'text-blue-700 font-bold' : 'text-gray-800'}>
                                    {entry.text}
                                </span>
                            ))}
                            {isRunning && !isWaitingInput && <span className="inline-block w-2 h-4 bg-gray-400 animate-pulse align-middle ml-1"></span>}
                        </div>
                        
                        {isWaitingInput && (
                            <div className="flex items-center mt-2 border-t border-gray-200 pt-2 bg-white sticky bottom-0">
                                <span className="text-blue-600 font-bold mr-2">{inputPrompt}</span>
                                <form onSubmit={handleInputSubmit} className="flex-1">
                                    <input 
                                        ref={inputRef}
                                        type="text" 
                                        className="w-full bg-transparent border-none outline-none text-blue-700 font-bold font-mono placeholder-gray-300"
                                        placeholder={t.writeCode}
                                        autoComplete="off"
                                    />
                                </form>
                            </div>
                        )}

                    </>
                )}
                
                {activeTab === 'feedback' && (
                    <div className="bg-white h-full rounded text-gray-900 overflow-y-auto">
                        <FeedbackPanel results={testResults} isRunning={isRunning} />
                    </div>
                )}
            </div>
        </div>
      </div>

      {/* Footer: Buttons Area (MOOC.fi Style) */}
      <div className="bg-gray-100 border-t border-gray-200 p-3 flex items-center space-x-3">
          
          {isRunning ? (
            <button 
                onClick={() => {
                    PythonRunner.interrupt();
                    setIsRunning(false);
                    setIsWaitingInput(false);
                    setHistory(prev => [...prev, { type: 'stdout', text: t.interrupted }]);
                }} 
                className="flex items-center px-4 py-2 text-sm font-bold text-white bg-red-600 rounded hover:bg-red-700 shadow-sm transition-colors animate-pulse"
            >
                <StopIcon className="w-4 h-4 mr-2" /> {t.stop}
            </button>
          ) : (
            <button onClick={handleRun} className="flex items-center px-4 py-2 text-sm font-bold text-white bg-blue-600 rounded hover:bg-blue-700 shadow-sm transition-transform active:scale-95">
                <PlayIcon className="w-4 h-4 mr-2" /> {t.run}
            </button>
          )}

          <button onClick={handleSubmit} disabled={isRunning} className="flex items-center px-4 py-2 text-sm font-bold text-orange-700 bg-white border border-gray-300 rounded hover:bg-orange-50 disabled:opacity-50 shadow-sm transition-colors">
            <EyeIcon className="w-4 h-4 mr-2" /> {t.submit}
          </button>

          <div className="flex-1"></div> {/* Spacer */}

          <button 
            onClick={() => {
                if (confirm(t.resetConfirm)) {
                    setCode(initialCode);
                    setHistory([]);
                }
            }}
            disabled={isRunning}
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors shadow-sm disabled:opacity-50"
          >
            {t.reset}
          </button>
      </div>
    </div>
  );
};

// Exportación Default para compatibilidad
export default PyXomEnvironment;
