import React, { useState } from 'react';
import { useLanguageStore } from '../../store/languageStore';

interface ListMethod {
    name: string;
    usage: string;
    description: { ENG: string; CAS: string; EUS: string };
    // Logic to apply to the base list [3, 1, 4, 1, 5]
    // Returns [newList, returnedValue, highlightedIndices, removedValue]
    apply: (list: number[]) => { 
        resultList: number[]; 
        returnedValue?: number | string;
        addedIndices?: number[];
        removedIndices?: number[];
        highlightedIndices?: number[];
    };
}

export const BASE_LIST = [3, 1, 4, 1, 5];

export const METHODS: ListMethod[] = [
    {
        name: 'append',
        usage: 'a_list.append(9)',
        description: { 
            ENG: "Adds a new element to the end of a list", 
            CAS: "Añade un nuevo elemento al final de una lista", 
            EUS: "Elementu berri bat gehitzen du zerrendaren amaieran" 
        },
        apply: (list) => ({ resultList: [...list, 9], addedIndices: [list.length] })
    },
    {
        name: 'insert',
        usage: 'a_list.insert(2, 9)',
        description: { 
            ENG: "Inserts an element at the i-th position", 
            CAS: "Inserta un elemento en la posición i-ésima", 
            EUS: "Elementu bat txertatzen du i-garren posizioan" 
        },
        apply: (list) => {
            const newList = [...list];
            newList.splice(2, 0, 9);
            return { resultList: newList, addedIndices: [2] };
        }
    },
    {
        name: 'pop',
        usage: 'a_list.pop()',
        description: { 
            ENG: "Removes and returns the last element", 
            CAS: "Elimina y devuelve el último elemento", 
            EUS: "Azken elementua kendu eta itzultzen du" 
        },
        apply: (list) => {
            const newList = [...list];
            const val = newList.pop();
            return { resultList: newList, returnedValue: val, removedIndices: [list.length - 1] }; // Visual trick: removed index relative to original
        }
    },
    {
        name: 'pop(i)',
        usage: 'a_list.pop(1)',
        description: { 
            ENG: "Removes and returns the i-th element", 
            CAS: "Elimina y devuelve el elemento i-ésimo", 
            EUS: "i-garren elementua kendu eta itzultzen du" 
        },
        apply: (list) => {
            const newList = [...list];
            const val = newList.splice(1, 1)[0];
            return { resultList: newList, returnedValue: val, removedIndices: [1] };
        }
    },
    {
        name: 'sort',
        usage: 'a_list.sort()',
        description: { 
            ENG: "Modifies the list to be sorted", 
            CAS: "Modifica una lista para que esté ordenada", 
            EUS: "Zerrenda ordenatuta egon dadin aldatzen du" 
        },
        apply: (list) => {
            return { resultList: [...list].sort((a, b) => a - b), highlightedIndices: [0, 1, 2, 3, 4] };
        }
    },
    {
        name: 'reverse',
        usage: 'a_list.reverse()',
        description: { 
            ENG: "Reverses the list in place", 
            CAS: "Modifica una lista para que esté en orden inverso", 
            EUS: "Zerrenda alderantzizko ordenan jartzen du" 
        },
        apply: (list) => {
            return { resultList: [...list].reverse(), highlightedIndices: [0, 1, 2, 3, 4] };
        }
    },
    {
        name: 'del',
        usage: 'del a_list[2]',
        description: { 
            ENG: "Deletes the element at position i", 
            CAS: "Elimina el elemento en la posición i-ésima", 
            EUS: "i-garren posizioko elementua ezabatzen du" 
        },
        apply: (list) => {
            const newList = [...list];
            newList.splice(2, 1);
            return { resultList: newList, removedIndices: [2] };
        }
    },
    {
        name: 'index',
        usage: 'a_list.index(1)',
        description: { 
            ENG: "Returns the index of the first occurrence", 
            CAS: "Devuelve el índice de la primera aparición", 
            EUS: "Lehen agerraldiaren indizea itzultzen du" 
        },
        apply: (list) => {
            const idx = list.indexOf(1);
            return { resultList: list, returnedValue: idx, highlightedIndices: [idx] };
        }
    },
    {
        name: 'count',
        usage: 'a_list.count(1)',
        description: { 
            ENG: "Returns the number of occurrences", 
            CAS: "Devuelve el número de apariciones", 
            EUS: "Elementuaren agerraldi kopurua itzultzen du" 
        },
        apply: (list) => {
            const count = list.filter(x => x === 1).length;
            const indices = list.map((x, i) => x === 1 ? i : -1).filter(i => i !== -1);
            return { resultList: list, returnedValue: count, highlightedIndices: indices };
        }
    },
    {
        name: 'remove',
        usage: 'a_list.remove(1)',
        description: { 
            ENG: "Removes the first occurrence", 
            CAS: "Elimina la primera aparición", 
            EUS: "Lehen agerraldia ezabatzen du" 
        },
        apply: (list) => {
            const newList = [...list];
            const idx = newList.indexOf(1);
            if (idx !== -1) newList.splice(idx, 1);
            return { resultList: newList, removedIndices: [idx] };
        }
    }
];

export const InteractiveListVisualizer: React.FC = () => {
    const { currentLang } = useLanguageStore();
    const [activeMethod, setActiveMethod] = useState<ListMethod | null>(null);

    const baseState: ReturnType<ListMethod['apply']> = { resultList: BASE_LIST };
    const currentState = activeMethod ? activeMethod.apply(BASE_LIST) : baseState;

    // Determine what to show in the visualization area
    // If hovering 'pop' or 'remove', we might want to show the list BEFORE it disappears, but with visual cues?
    // Actually, showing the RESULT is more instructive, perhaps with a "phantom" effect for removed items if complex.
    // For simplicity, we just show the RESULT list.
    
    // However, for pedagogical reasons, seeing the connection is good.
    // Let's keep it simple: Show the Result List.
    // If something was removed, maybe we can't see it in the result list. 
    // BUT we can use the 'returnedValue' to show what came out.
    
    return (
        <div className="my-10 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-50 p-4 border-b border-gray-200">
                <h3 className="font-bold text-gray-700 text-lg flex items-center gap-2">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-mono">i</span>
                    {currentLang === 'EUS' ? 'Zerrenda Metodoen Simulatzailea' : 
                     currentLang === 'CAS' ? 'Simulador de Métodos de Lista' : 
                     'List Methods Simulator'}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                    {currentLang === 'EUS' ? 'Pasatu sagua metodoen gainetik zerrenda nola aldatzen den ikusteko.' :
                     currentLang === 'CAS' ? 'Pasa el ratón sobre los métodos para ver cómo cambia la lista.' :
                     'Hover over methods to see how the list changes.'}
                </p>
            </div>

            {/* Visualization Area */}
            <div className="p-8 bg-slate-100 flex flex-col items-center justify-center min-h-[240px] transition-all duration-300">
                
                {/* Variable Name */}
                <div className="self-start ml-4 mb-2 font-mono text-sm text-gray-500 font-bold">
                    a_list = 
                </div>

                {/* The List Container */}
                <div className="flex items-center gap-2">
                    <span className="text-4xl text-gray-400 font-light">[</span>
                    
                    {currentState.resultList.map((val, idx) => {
                        // Check if this index was just added or highlighted
                        const isAdded = currentState.addedIndices?.includes(idx);
                        const isHighlighted = currentState.highlightedIndices?.includes(idx);
                        
                        return (
                            <div key={idx} className="relative group">
                                <div className={`
                                    w-14 h-14 flex items-center justify-center 
                                    text-2xl font-mono font-bold rounded-lg shadow-sm border-2
                                    transition-all duration-300 transform
                                    ${isAdded ? 'bg-green-100 border-green-500 scale-110' : 
                                      isHighlighted ? 'bg-yellow-100 border-yellow-500 scale-110' : 
                                      'bg-white border-gray-300'}
                                `}>
                                    {val}
                                </div>
                                {/* Index label */}
                                <div className="absolute -bottom-6 left-0 right-0 text-center text-xs text-gray-400 font-mono">
                                    {idx}
                                </div>
                            </div>
                        );
                    })}
                    
                    <span className="text-4xl text-gray-400 font-light">]</span>
                </div>

                {/* Return Value Bubble */}
                {currentState.returnedValue !== undefined && (
                    <div className="mt-8 bg-purple-100 border border-purple-300 text-purple-800 px-4 py-2 rounded-full font-mono text-sm font-bold shadow-sm animate-bounce">
                        Return: {currentState.returnedValue}
                    </div>
                )}
            </div>

            {/* Methods Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 w-24">
                                {currentLang === 'EUS' ? 'Metodoa' : currentLang === 'CAS' ? 'Método' : 'Method'}
                            </th>
                            <th className="px-6 py-3 w-48">
                                {currentLang === 'EUS' ? 'Erabilera' : currentLang === 'CAS' ? 'Uso' : 'Usage'}
                            </th>
                            <th className="px-6 py-3">
                                {currentLang === 'EUS' ? 'Azalpena' : currentLang === 'CAS' ? 'Explicación' : 'Description'}
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {METHODS.map((m) => (
                            <tr 
                                key={m.name}
                                onMouseEnter={() => setActiveMethod(m)}
                                onMouseLeave={() => setActiveMethod(null)}
                                className={`
                                    cursor-pointer transition-colors duration-200
                                    ${activeMethod?.name === m.name ? 'bg-blue-50' : 'hover:bg-gray-50'}
                                `}
                            >
                                <td className="px-6 py-3 font-mono text-blue-600 font-bold">
                                    {m.name}
                                </td>
                                <td className="px-6 py-3 font-mono text-gray-600">
                                    {m.usage}
                                </td>
                                <td className="px-6 py-3 text-gray-600">
                                    {m.description[currentLang] || m.description['ENG']}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
