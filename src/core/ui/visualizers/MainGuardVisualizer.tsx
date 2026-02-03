import React, { useState } from 'react';
import { useLanguageStore } from '../../store/languageStore';
import VisualizerCard from './VisualizerCard';

export const MainGuardVisualizer: React.FC = () => {
    const { t } = useLanguageStore();
    const [mode, setMode] = useState<'execute' | 'import'>('execute');

    const isMain = mode === 'execute';
    const varValue = isMain ? "'__main__'" : "'script'";
    const statusColor = isMain ? "bg-green-100 border-green-500 text-green-800" : "bg-yellow-100 border-yellow-500 text-yellow-800";
    const codeOpacity = isMain ? "opacity-100" : "opacity-40 grayscale";

    return (
        <VisualizerCard
            title={t.visualizers.mainGuard.title}
            icon="M"
            iconColor="bg-purple-600"
        >
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Controls */}
                <div className="flex flex-col gap-4">
                    <div className="text-sm text-gray-500 font-medium uppercase tracking-wide mb-2">
                        {t.action}
                    </div>
                    
                    <button 
                        onClick={() => setMode('execute')}
                        className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${mode === 'execute' ? 'border-green-500 bg-green-50 shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
                    >
                        <div className="font-mono font-bold text-gray-800">python script.py</div>
                        <div className="text-xs text-gray-500 mt-1">{t.visualizers.mainGuard.runDirect}</div>
                    </button>

                    <button 
                        onClick={() => setMode('import')}
                        className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${mode === 'import' ? 'border-yellow-500 bg-yellow-50 shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
                    >
                        <div className="font-mono font-bold text-gray-800">import script</div>
                        <div className="text-xs text-gray-500 mt-1">{t.visualizers.mainGuard.importModule}</div>
                    </button>

                    <div className={`mt-4 p-4 rounded-lg border text-sm ${statusColor}`}>
                        <strong>{t.info}:</strong> {isMain ? t.visualizers.mainGuard.descExecute : t.visualizers.mainGuard.descImport}
                    </div>
                </div>

                {/* Visualization */}
                <div className="relative bg-gray-900 rounded-lg p-6 shadow-inner font-mono text-sm text-gray-300">
                    <div className="absolute top-2 right-2 text-xs text-gray-600">script.py</div>
                    
                    {/* The Variable State */}
                    <div className="mb-6 flex items-center gap-3 pb-4 border-b border-gray-800">
                        <span className="text-purple-400">__name__</span> 
                        <span className="text-gray-500">==</span> 
                        <span className={`px-2 py-1 rounded font-bold transition-all duration-300 ${isMain ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'}`}>
                            {varValue}
                        </span>
                    </div>

                    {/* The Code Block */}
                    <div className="space-y-1">
                        <div><span className="text-blue-400">def</span> <span className="text-yellow-300">main</span>():</div>
                        <div className="pl-4 text-gray-400"># ... logic ...</div>
                        <br/>
                        
                        {/* The IF check */}
                        <div className="flex items-center gap-2">
                            <span className="text-purple-400">if</span> 
                            <span>__name__ == </span> 
                            <span className="text-green-300">"__main__"</span>:
                            
                            {/* Result Indicator */}
                            {isMain ? (
                                <span className="ml-auto text-xs bg-green-900 text-green-300 px-2 py-0.5 rounded uppercase font-bold tracking-wider">True</span>
                            ) : (
                                <span className="ml-auto text-xs bg-red-900 text-red-300 px-2 py-0.5 rounded uppercase font-bold tracking-wider">False</span>
                            )}
                        </div>

                        {/* The Protected Call */}
                        <div className={`pl-4 transition-all duration-500 ${codeOpacity}`}>
                            <span className="text-yellow-300">main</span>() 
                            {isMain && <span className="ml-2 text-gray-500">← Runs!</span>}
                        </div>
                    </div>
                </div>
            </div>
        </VisualizerCard>
    );
};
