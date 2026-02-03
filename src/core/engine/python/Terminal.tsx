import React, { useRef, useEffect, useState } from 'react';
import { useLanguageStore } from '../../store/languageStore';
import FeedbackPanel from './feedback/FeedbackPanel';
import { TestSuiteResult } from './core/TestRunner';
import { LogEntry } from './hooks/usePythonExecution';
import { CodeAnalyzer } from './analysis/CodeAnalyzer';

interface TerminalProps {
    history: LogEntry[];
    isRunning: boolean;
    isWaitingInput: boolean;
    inputPrompt: string;
    inputRef: React.RefObject<HTMLInputElement | null>;
    testResults: TestSuiteResult | null;
    analysisResults?: any[];
    onInputSubmit: (value: string) => void;
    activeTab: 'console' | 'feedback' | 'analysis';
    onTabChange: (tab: 'console' | 'feedback' | 'analysis') => void;
    code: string;
}

export const Terminal: React.FC<TerminalProps> = ({
    history,
    isRunning,
    isWaitingInput,
    inputPrompt,
    inputRef,
    testResults,
    analysisResults = [],
    onInputSubmit,
    activeTab,
    onTabChange,
    code
}) => {
    const { t } = useLanguageStore();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [history, isWaitingInput, activeTab]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputRef.current) {
            onInputSubmit(inputRef.current.value);
            inputRef.current.value = "";
        }
    };

    const renderLogEntry = (entry: LogEntry, index: number) => {
        if (entry.type === 'stdin') {
            return <span key={index} className="text-blue-700 font-bold">{entry.text}</span>;
        }
        
        if (entry.type === 'error') {
            let message = entry.text;
            
            if (entry.errorCode) {
                const template = (t.errors as any)[entry.errorCode];
                if (template) {
                    message = template;
                    if (entry.errorParams) {
                        Object.entries(entry.errorParams).forEach(([key, val]) => {
                            message = message.replace(`{${key}}`, String(val));
                        });
                    }
                    message = `\n⚠️ ${message}\n\n${entry.text}`;
                }
            }
            return <span key={index} className="text-red-600 font-bold">{message}</span>;
        }
  
        return <span key={index} className="text-gray-800">{entry.text}</span>;
    };

    return (
        <div className="flex-[4] min-h-0 flex flex-col bg-white text-gray-900 border-l border-gray-200">
            <div className="flex border-b border-gray-200 bg-gray-50">
                <button 
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${activeTab === 'console' ? 'border-b-2 border-brand-blue text-brand-blue' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => onTabChange('console')}
                >
                    {t.terminal}
                </button>
                <button 
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${activeTab === 'feedback' ? 'border-b-2 border-brand-blue text-brand-blue' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => onTabChange('feedback')}
                >
                    {t.tests}
                </button>
                <button 
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${activeTab === 'analysis' ? 'border-b-2 border-brand-blue text-brand-blue' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => onTabChange('analysis')}
                >
                    {t.codeAnalysisTitle}
                </button>
            </div>
            
            <div ref={containerRef} className="flex-1 overflow-auto p-4 font-mono text-sm relative bg-gray-50/30">
                {activeTab === 'console' && (
                    <>
                        <div className="whitespace-pre-wrap break-words">
                            {history.map((entry, i) => renderLogEntry(entry, i))}
                            {isRunning && !isWaitingInput && <span className="inline-block w-2 h-4 bg-gray-400 animate-pulse align-middle ml-1"></span>}
                        </div>
                        
                        {isWaitingInput && (
                            <div className="flex items-center mt-2 border-t border-gray-200 pt-2 bg-white sticky bottom-0">
                                <span className="text-blue-600 font-bold mr-2">{inputPrompt}</span>
                                <form onSubmit={handleSubmit} className="flex-1">
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

                {activeTab === 'analysis' && (
                    <div className="h-full">
                        <CodeAnalyzer 
                            code={code} 
                            language="python" 
                            results={analysisResults.length > 0 ? analysisResults : undefined} 
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
