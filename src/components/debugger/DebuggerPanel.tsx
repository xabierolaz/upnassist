import React from 'react';
import { useDebuggerStore } from '../../core/store/debuggerStore';
import { DebuggerControls } from './DebuggerControls';
import { VariableExplorer } from './VariableExplorer';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export const DebuggerPanel: React.FC = () => {
    const { isActive, frames, currentStep, error, isLoading } = useDebuggerStore();
    
    // Safety check
    if (!isActive) return null;

    if (isLoading) {
        return (
            <div className="h-full flex items-center justify-center flex-col gap-3 p-8 text-gray-500">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-sm font-medium animate-pulse">Iniciando depurador...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800 flex items-start gap-3 text-red-700 dark:text-red-300">
                <ExclamationTriangleIcon className="w-6 h-6 shrink-0" />
                <div className="text-sm">
                    <p className="font-bold">Error en depuración</p>
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    const currentFrame = frames[currentStep];

    return (
        <div className="flex flex-col gap-4 h-full">
            {/* Header info */}
            <div className="flex justify-between items-end px-1">
                 <div className="text-xs text-gray-500 font-mono">
                    Step {currentStep + 1} / {frames.length}
                 </div>
                 {currentFrame && (
                    <div className="text-xs font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-600 dark:text-gray-400">
                        Line: {currentFrame.line} | Func: {currentFrame.func}
                    </div>
                 )}
            </div>

            {/* Controls */}
            <DebuggerControls />

            {/* Variables */}
            <div className="flex-1 min-h-0">
                <VariableExplorer />
            </div>
            
            {/* Event Log (Optional mini view) */}
             {currentFrame?.event === 'exception' && (
                <div className="bg-red-100 text-red-800 text-xs p-2 rounded border border-red-200 font-mono">
                    Exception: {currentFrame.error}
                </div>
            )}
             {currentFrame?.event === 'return' && (
                <div className="bg-green-50 text-green-700 text-xs p-2 rounded border border-green-200 font-mono text-center">
                    Returning from {currentFrame.func}
                </div>
            )}
        </div>
    );
};
