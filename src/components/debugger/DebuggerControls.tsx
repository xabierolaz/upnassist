import React, { useEffect } from 'react';
import { useDebuggerStore } from '../../core/store/debuggerStore';
import { useLanguageStore } from '../../core/store/languageStore';
import { 
    PlayIcon, 
    PauseIcon, 
    ForwardIcon, 
    BackwardIcon, 
    StopIcon,
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon 
} from '@heroicons/react/24/solid';

export const DebuggerControls: React.FC = () => {
    const { 
        currentStep, 
        frames, 
        stepForward, 
        stepBack, 
        seekTo, 
        isPlaying, 
        togglePlay, 
        stopSession,
        speed 
    } = useDebuggerStore();
    const { t } = useLanguageStore();
    const totalSteps = frames.length;

    // Auto-play logic
    useEffect(() => {
        let interval: any;
        if (isPlaying) {
            interval = setInterval(() => {
                stepForward();
            }, speed);
        }
        return () => clearInterval(interval);
    }, [isPlaying, speed, stepForward]);

    const progress = totalSteps > 1 ? (currentStep / (totalSteps - 1)) * 100 : 0;

    return (
        <div className="flex flex-col gap-3 bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            {/* Scrubber */}
            <div className="w-full flex items-center gap-2">
                <span className="text-xs font-mono text-gray-500 w-8 text-right">{currentStep}</span>
                <input 
                    type="range" 
                    min="0" 
                    max={Math.max(0, totalSteps - 1)} 
                    value={currentStep} 
                    onChange={(e) => seekTo(parseInt(e.target.value))}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-blue-600"
                    disabled={totalSteps === 0}
                />
                <span className="text-xs font-mono text-gray-500 w-8">{totalSteps}</span>
            </div>

            {/* Buttons */}
            <div className="flex justify-center items-center gap-2">
                 <button 
                    onClick={() => seekTo(0)} 
                    disabled={currentStep === 0}
                    className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 text-gray-600 dark:text-gray-300 transition-colors"
                    title="Start"
                >
                    <ChevronDoubleLeftIcon className="w-5 h-5" />
                </button>

                <button 
                    onClick={stepBack} 
                    disabled={currentStep === 0}
                    className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 text-gray-600 dark:text-gray-300 transition-colors"
                    title="Previous Step"
                >
                    <BackwardIcon className="w-5 h-5" />
                </button>

                <button 
                    onClick={togglePlay} 
                    className={`p-3 rounded-full ${isPlaying ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'} hover:opacity-80 transition-all shadow-sm`}
                    title={isPlaying ? "Pause" : "Play"}
                >
                    {isPlaying ? <PauseIcon className="w-6 h-6" /> : <PlayIcon className="w-6 h-6" />}
                </button>

                <button 
                    onClick={stepForward} 
                    disabled={currentStep >= totalSteps - 1}
                    className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 text-gray-600 dark:text-gray-300 transition-colors"
                    title="Next Step"
                >
                    <ForwardIcon className="w-5 h-5" />
                </button>
                
                 <button 
                    onClick={() => seekTo(totalSteps - 1)} 
                    disabled={currentStep >= totalSteps - 1}
                    className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30 text-gray-600 dark:text-gray-300 transition-colors"
                    title="End"
                >
                    <ChevronDoubleRightIcon className="w-5 h-5" />
                </button>

                <div className="w-px h-6 bg-gray-300 mx-2"></div>

                <button 
                    onClick={stopSession} 
                    className="p-2 rounded hover:bg-red-50 text-red-500 hover:text-red-700 transition-colors"
                    title={t.stop}
                >
                    <StopIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};
