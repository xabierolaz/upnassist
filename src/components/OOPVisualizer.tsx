import React, { useState } from 'react';
import { useLanguageStore } from '../stores/languageStore';

export const OOPVisualizer: React.FC = () => {
    const { currentLang } = useLanguageStore();
    const [activeTab, setActiveTab] = useState<'constructor' | 'self'>('constructor');

    // Tab 1: Constructor State
    const [step, setStep] = useState(0); // 0: Start, 1: Param passed, 2: Assigned
    
    // Tab 2: Self State
    const [activeInstance, setActiveInstance] = useState<'e1' | 'e2' | null>(null);

    const labels = {
        tabs: {
            constructor: { ENG: "1. The Constructor", CAS: "1. El Constructor", EUS: "1. Eraikitzailea" },
            self: { ENG: "2. The 'self' Pointer", CAS: "2. El Puntero 'self'", EUS: "2. 'self' Erakuslea" }
        },
        constructor: {
            stack: { ENG: "Function Scope (Temporary)", CAS: "Ámbito de Función (Temporal)", EUS: "Funtzio Eremua (Denborazkoa)" },
            heap: { ENG: "Object Memory (Permanent)", CAS: "Memoria del Objeto (Permanente)", EUS: "Objektuaren Memoria (Iraunkorra)" },
            btnCall: { ENG: "Call Estudiante('Alice')", CAS: "Llamar Estudiante('Alicia')", EUS: "Deitu Estudiante('Ane')" },
            btnAssign: { ENG: "Exec: self.name = name", CAS: "Ejec: self.nombre = nombre", EUS: "Exek: self.izena = izena" },
            btnReset: { ENG: "Reset", CAS: "Reiniciar", EUS: "Berrabiarazi" }
        },
        self: {
            instruction: { 
                ENG: "Click an object to call its 'greet()' method and see where 'self' points.", 
                CAS: "Haz clic en un objeto para llamar a 'saludar()' y ver a dónde apunta 'self'.", 
                EUS: "Egin klik objektu batean 'agurtu()' deitzeko eta ikusi 'self' nora doan." 
            },
            code: "def greet(self):",
            print: "print(self.name)"
        }
    };

    return (
        <div className="my-10 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden font-sans">
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
                <button 
                    onClick={() => setActiveTab('constructor')}
                    className={`flex-1 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${activeTab === 'constructor' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                    {labels.tabs.constructor[currentLang]}
                </button>
                <button 
                    onClick={() => setActiveTab('self')}
                    className={`flex-1 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${activeTab === 'self' ? 'bg-purple-50 text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                    {labels.tabs.self[currentLang]}
                </button>
            </div>

            <div className="p-6 min-h-[300px]">
                {activeTab === 'constructor' && (
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-center gap-4">
                            <button 
                                onClick={() => setStep(1)} 
                                disabled={step > 0}
                                className={`px-4 py-2 rounded-lg font-bold text-sm ${step === 0 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-400'}`}
                            >
                                {labels.constructor.btnCall[currentLang]}
                            </button>
                            <button 
                                onClick={() => setStep(2)} 
                                disabled={step !== 1}
                                className={`px-4 py-2 rounded-lg font-bold text-sm ${step === 1 ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-200 text-gray-400'}`}
                            >
                                {labels.constructor.btnAssign[currentLang]}
                            </button>
                            <button 
                                onClick={() => setStep(0)} 
                                className="px-4 py-2 rounded-lg font-bold text-sm bg-gray-100 text-gray-600 hover:bg-gray-200"
                            >
                                {labels.constructor.btnReset[currentLang]}
                            </button>
                        </div>

                        <div className="flex justify-around items-center">
                            {/* Stack / Param */}
                            <div className={`
                                w-40 h-40 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center p-2 relative transition-all duration-500
                                ${step >= 1 ? 'opacity-100' : 'opacity-30'}
                            `}>
                                <div className="text-xs text-gray-400 absolute top-2 uppercase font-bold">{labels.constructor.stack[currentLang]}</div>
                                <div className="text-sm font-mono text-gray-600 mb-1">nombre</div>
                                <div className={`
                                    bg-yellow-100 text-yellow-800 px-3 py-1 rounded font-mono font-bold shadow-sm border border-yellow-300
                                    transition-all duration-1000 z-10
                                    ${step === 2 ? 'translate-x-[200%] rotate-12 scale-110' : ''}
                                `}>
                                    "Alicia"
                                </div>
                            </div>

                            {/* Arrow */}
                            <div className="text-gray-300 text-4xl">➔</div>

                            {/* Heap / Object */}
                            <div className="w-40 h-40 bg-blue-50 border-2 border-blue-200 rounded-xl flex flex-col items-center justify-center p-2 relative shadow-md">
                                <div className="text-xs text-blue-400 absolute top-2 uppercase font-bold">self (Object)</div>
                                <div className="text-sm font-mono text-blue-600 mb-1">self.nombre</div>
                                <div className={`
                                    w-24 h-8 border border-blue-200 bg-white rounded flex items-center justify-center text-xs text-gray-400 font-mono
                                    ${step === 2 ? 'border-green-400 bg-green-50 text-green-700 font-bold' : ''}
                                `}>
                                    {step === 2 ? '"Alicia"' : 'Empty'}
                                </div>
                            </div>
                        </div>
                        
                        {/* Explanation Text */}
                        <div className="text-center text-sm text-gray-600 italic">
                            {step === 0 && "Waiting to start..."}
                            {step === 1 && "Parameter 'nombre' exists in temporary memory."}
                            {step === 2 && "Data copied to 'self'. Now it survives!"}
                        </div>
                    </div>
                )}

                {activeTab === 'self' && (
                    <div className="flex flex-col gap-8">
                        <p className="text-center text-sm text-gray-600">{labels.self.instruction[currentLang]}</p>
                        
                        <div className="flex justify-center gap-12 items-start relative">
                            {/* Instance 1 */}
                            <button 
                                onClick={() => setActiveInstance('e1')}
                                className={`
                                    w-24 h-24 rounded-full border-4 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105
                                    ${activeInstance === 'e1' ? 'border-red-500 bg-red-50 shadow-red-200 shadow-xl' : 'border-red-200 bg-white'}
                                `}
                            >
                                <span className="font-bold text-red-600">e1</span>
                                <span className="text-xs text-red-400">"Alicia"</span>
                            </button>

                            {/* Code Block */}
                            <div className="bg-gray-900 text-gray-300 p-4 rounded-lg font-mono text-sm relative z-10 w-48">
                                <div className={`${activeInstance ? 'text-white' : 'text-gray-500'}`}>
                                    <span className="text-purple-400">def</span> <span className="text-blue-400">greet</span>(<span className="bg-white/20 px-1 rounded text-white font-bold transition-colors duration-300">self</span>):
                                </div>
                                <div className={`pl-4 mt-1 ${activeInstance ? 'text-green-400' : 'text-gray-600'}`}>
                                    print(<span className="font-bold border-b border-white/30">self</span>.name)
                                </div>
                                
                                {/* Dynamic Arrow logic */}
                                {activeInstance === 'e1' && (
                                    <div className="absolute top-1/2 -left-8 w-8 h-0.5 bg-red-500 animate-pulse"></div>
                                )}
                                {activeInstance === 'e2' && (
                                    <div className="absolute top-1/2 -right-8 w-8 h-0.5 bg-blue-500 animate-pulse"></div>
                                )}
                            </div>

                            {/* Instance 2 */}
                            <button 
                                onClick={() => setActiveInstance('e2')}
                                className={`
                                    w-24 h-24 rounded-full border-4 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105
                                    ${activeInstance === 'e2' ? 'border-blue-500 bg-blue-50 shadow-blue-200 shadow-xl' : 'border-blue-200 bg-white'}
                                `}
                            >
                                <span className="font-bold text-blue-600">e2</span>
                                <span className="text-xs text-blue-400">"Bob"</span>
                            </button>
                        </div>

                        {/* Console Output */}
                        <div className="mx-auto w-64 bg-black text-green-400 font-mono p-3 rounded text-sm min-h-[3rem] flex items-center justify-center">
                            {activeInstance === 'e1' ? '> Hello Alicia!' : 
                             activeInstance === 'e2' ? '> Hello Bob!' : 
                             '> ... waiting call ...'}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
