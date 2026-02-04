import { useState, useRef, useEffect, useCallback } from 'react';
import PythonRunner from '../core/PythonRunner';
import { TestRunner, TestSuiteResult } from '../core/TestRunner';
import { getErrorCode } from '../analysis/ErrorTranslator';
import { ErrorCode } from '../../types/ErrorCodes';
import { useLanguageStore } from '../../../store/languageStore';

export interface LogEntry {
  type: 'stdout' | 'stdin' | 'error';
  text: string;
  errorCode?: ErrorCode;
  errorParams?: Record<string, string>;
}

export const usePythonExecution = (initialCode: string) => {
  const { t, currentLang } = useLanguageStore();
  const [code, setCode] = useState(initialCode);
  const [history, setHistory] = useState<LogEntry[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState<TestSuiteResult | null>(null);
  
  const [isWaitingInput, setIsWaitingInput] = useState(false);
  const [inputPrompt, setInputPrompt] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Expose setCode for E2E testing
  useEffect(() => {
      if (typeof window !== 'undefined') {
          // @ts-ignore
          window.__PYXOM_SET_CODE__ = setCode;
      }
  }, []);

  // Initialize Input Handler
  useEffect(() => {
      const runner = PythonRunner.getInstance();
      runner.setInputHandler((prompt) => {
          setIsWaitingInput(true);
          setInputPrompt(prompt);
          // Small delay to ensure render update
          setTimeout(() => inputRef.current?.focus(), 50);
      });
  }, []);

  const handleInputSubmit = useCallback((value: string) => {
      setHistory(prev => [...prev, { type: 'stdin', text: value + "\n" }]);
      PythonRunner.getInstance().sendInput(value);
      setIsWaitingInput(false);
      setInputPrompt("");
  }, []);

  const executeCode = useCallback(async (codeOverride?: string) => {
    const codeToRun = codeOverride ?? code;
    setIsRunning(true);
    setHistory([]);
    try {
      const result = await PythonRunner.execute(codeToRun, (text) => {
          setHistory(prev => [...prev, { type: 'stdout', text }]);
      });
      
      if (!result.success && result.error) {
        const analysis = getErrorCode(result.error);
        setHistory(prev => [...prev, { 
            type: 'error', 
            text: result.error!,
            errorCode: analysis.code || undefined,
            errorParams: analysis.params
        }]);
      }
    } catch (e) {
      setHistory(prev => [...prev, { type: 'stdout', text: `${t.criticalError}${(e as Error).message}` }]);
    } finally {
      setIsRunning(false);
      setIsWaitingInput(false);
    }
  }, [code, t.criticalError]);

  const runTests = useCallback(async (testCode: string) => {
    setIsRunning(true);
    setTestResults(null);
    try {
      const results = await TestRunner.runTests(code, testCode, currentLang);
      setTestResults(results);
      return results;
    } catch (e) {
      console.error(e);
      return null;
    } finally {
      setIsRunning(false);
    }
  }, [code, currentLang]);

  const interrupt = useCallback(() => {
      PythonRunner.interrupt();
      setIsRunning(false);
      setIsWaitingInput(false);
      setHistory(prev => [...prev, { type: 'stdout', text: t.interrupted }]);
  }, [t.interrupted]);

  const resetCode = useCallback(() => {
      setCode(initialCode);
      setHistory([]);
      setTestResults(null);
  }, [initialCode]);

  return {
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
  };
};
