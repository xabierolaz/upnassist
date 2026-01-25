import React, { useState } from 'react';
import { useLanguageStore } from '../../store/languageStore';

export const MainGuardVisualizer: React.FC = () => {
    const { currentLang } = useLanguageStore();
    const [mode, setMode] = useState<'execute' | 'import'>('execute');

    // Labels
    const labels = {
        title: { ENG: "Module Context Simulator", CAS: "Simulador de Contexto de Módulo", EUS: "Modulu Testuinguru Simuladorea" },
        executeBtn: { ENG: "Run directly (python script.py)", CAS: "Ejecutar directo (python script.py)", EUS: "Zuzenean exekutatu (python script.py)" },
        importBtn: { ENG: "Import (import script)", CAS: "Importar (import script)", EUS: "Inportatu (import script)" },
        variableName: "__name__",
        descExecute: { 
            ENG: "When you run a file directly, Python sets its name to '__main__'. This triggers the protected code.", 
            CAS: "Al ejecutar el archivo directamente, Python le pone el nombre '__main__'. Esto activa el código protegido.", 
            EUS: "Fitxategia zuzenean exekutatzen duzunean, Python-ek '__main__' izena jartzen dio. Honek babestutako kodea aktibatzen du."
        },
        descImport: { 
            ENG: "When imported, the file keeps its original filename. The protected code is SKIPPED.", 
            CAS: "Al importarse, el archivo mantiene su nombre original. El código protegido se SALTA.", 
            EUS: "Inportatzean, fitxategiak bere jatorrizko izena mantentzen du. Babestutako kodea SALTATU egiten da."
        }
    };

    const isMain = mode === 'execute';
    const varValue = isMain ? "'__main__'" : "'script'";
    const statusColor = isMain ? "bg-green-100 border-green-500 text-green-800" : "bg-yellow-100 border-yellow-500 text-yellow-800";
    const codeOpacity = isMain ? "opacity-100" : "opacity-40 grayscale";

    return (
        <div className="my-10 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden font-sans">
             <div className="bg-gray-50 p-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-bold text-gray-700 text-lg flex items-center gap-2">
                    <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-mono">M</span>
                    {labels.title[currentLang]}
                </h3>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Controls */}
                <div className="flex flex-col gap-4">
                    <div className="text-sm text-gray-500 font-medium uppercase tracking-wide mb-2">
                        {currentLang === 'ENG' ? "Action" : "Acción"}
                    </div>
                    
                    <button 
                        onClick={() => setMode('execute')}
                        className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${mode === 'execute' ? 'border-green-500 bg-green-50 shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
                    >
                        <div className="font-mono font-bold text-gray-800">python script.py</div>
                        <div className="text-xs text-gray-500 mt-1">{labels.executeBtn[currentLang]}</div>
                    </button>

                    <button 
                        onClick={() => setMode('import')}
                        className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${mode === 'import' ? 'border-yellow-500 bg-yellow-50 shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
                    >
                        <div className="font-mono font-bold text-gray-800">import script</div>
                        <div className="text-xs text-gray-500 mt-1">{labels.importBtn[currentLang]}</div>
                    </button>

                    <div className={`mt-4 p-4 rounded-lg border text-sm ${statusColor}`}>
                        <strong>Info:</strong> {isMain ? labels.descExecute[currentLang] : labels.descImport[currentLang]}
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
        </div>
    );
};
