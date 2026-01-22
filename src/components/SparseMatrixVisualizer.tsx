import React, { useState, useEffect } from 'react';
import { useLanguageStore } from '../stores/languageStore';

export const SparseMatrixVisualizer: React.FC = () => {
    const { currentLang } = useLanguageStore();
    
    // Matrix state: 5x5 grid filled with zeros, except some initial values
    const [matrix, setMatrix] = useState<number[][]>([
        [0, 0, 0, 0, 0],
        [0, 5, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0],
        [0, 0, 0, 0, 9]
    ]);

    const [coo, setCoo] = useState<{ vals: number[], rows: number[], cols: number[] }>({ vals: [], rows: [], cols: [] });

    // Update COO whenever matrix changes
    useEffect(() => {
        const vals: number[] = [];
        const rows: number[] = [];
        const cols: number[] = [];

        matrix.forEach((row, r) => {
            row.forEach((val, c) => {
                if (val !== 0) {
                    vals.push(val);
                    rows.push(r);
                    cols.push(c);
                }
            });
        });

        setCoo({ vals, rows, cols });
    }, [matrix]);

    const toggleCell = (r: number, c: number) => {
        const newVal = matrix[r][c] === 0 ? Math.floor(Math.random() * 9) + 1 : 0;
        const newMatrix = matrix.map((row, rowIndex) => 
            row.map((col, colIndex) => rowIndex === r && colIndex === c ? newVal : col)
        );
        setMatrix(newMatrix);
    };

    const labels = {
        title: { ENG: "Dense Matrix vs COO Format", CAS: "Matriz Densa vs Formato COO", EUS: "Matrize Trinkoa vs COO Formatua" },
        dense: { ENG: "Dense Matrix (5x5)", CAS: "Matriz Densa (5x5)", EUS: "Matrize Trinkoa (5x5)" },
        coo: { ENG: "COO Representation (3 Lists)", CAS: "Representación COO (3 Listas)", EUS: "COO Adierazpena (3 Zerrenda)" },
        instruction: { 
            ENG: "Click on the grid to add/remove non-zero numbers.", 
            CAS: "Haz clic en la cuadrícula para poner/quitar números.", 
            EUS: "Egin klik saretan zenbakiak gehitzeko/kentzeko." 
        },
        memory: { ENG: "Memory Usage:", CAS: "Memoria Usada:", EUS: "Memoria Erabilera:" },
        denseMem: { ENG: "25 units (Fixed)", CAS: "25 unidades (Fijo)", EUS: "25 unitate (Finkoa)" },
        cooMem: (n: number) => ({ 
            ENG: `${n*3} units (3 x ${n} items)`, 
            CAS: `${n*3} unidades (3 x ${n} ítems)`, 
            EUS: `${n*3} unitate (3 x ${n} elementu)` 
        })
    };

    return (
        <div className="my-10 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden font-sans">
            <div className="bg-gray-50 p-4 border-b border-gray-200">
                <h3 className="font-bold text-gray-700 text-lg flex items-center gap-2">
                    <span className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-mono">#</span>
                    {labels.title[currentLang]}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{labels.instruction[currentLang]}</p>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                
                {/* Left: Dense Matrix */}
                <div>
                    <h4 className="font-bold text-gray-600 mb-4 text-center">{labels.dense[currentLang]}</h4>
                    <div className="grid grid-cols-5 gap-1 bg-gray-200 p-1 rounded-lg w-fit mx-auto shadow-inner">
                        {matrix.map((row, r) => (
                            row.map((val, c) => (
                                <button 
                                    key={`${r}-${c}`}
                                    onClick={() => toggleCell(r, c)}
                                    className={`
                                        w-10 h-10 flex items-center justify-center font-mono text-sm font-bold rounded transition-all duration-200
                                        ${val !== 0 
                                            ? 'bg-indigo-500 text-white shadow-sm transform scale-105' 
                                            : 'bg-white text-gray-300 hover:bg-gray-100'}
                                    `}
                                >
                                    {val}
                                </button>
                            ))
                        ))}
                    </div>
                    <div className="mt-4 text-center text-sm text-gray-500 bg-gray-100 py-2 rounded">
                        {labels.memory[currentLang]} <span className="font-bold text-gray-700">{labels.denseMem[currentLang]}</span>
                    </div>
                </div>

                {/* Right: COO Lists */}
                <div>
                    <h4 className="font-bold text-gray-600 mb-4 text-center">{labels.coo[currentLang]}</h4>
                    <div className="flex justify-center gap-4 font-mono text-sm">
                        {/* Values */}
                        <div className="flex flex-col items-center">
                            <span className="text-indigo-600 font-bold mb-2">Values</span>
                            <div className="bg-indigo-50 border border-indigo-200 rounded p-2 min-h-[100px] w-12 flex flex-col items-center gap-1 shadow-sm">
                                {coo.vals.map((v, i) => <div key={i} className="animate-in fade-in slide-in-from-bottom-2">{v}</div>)}
                            </div>
                        </div>
                        {/* Rows */}
                        <div className="flex flex-col items-center">
                            <span className="text-gray-500 font-bold mb-2">Rows</span>
                            <div className="bg-gray-50 border border-gray-200 rounded p-2 min-h-[100px] w-12 flex flex-col items-center gap-1 shadow-sm">
                                {coo.rows.map((v, i) => <div key={i} className="text-gray-600 animate-in fade-in slide-in-from-bottom-2">{v}</div>)}
                            </div>
                        </div>
                        {/* Cols */}
                        <div className="flex flex-col items-center">
                            <span className="text-gray-500 font-bold mb-2">Cols</span>
                            <div className="bg-gray-50 border border-gray-200 rounded p-2 min-h-[100px] w-12 flex flex-col items-center gap-1 shadow-sm">
                                {coo.cols.map((v, i) => <div key={i} className="text-gray-600 animate-in fade-in slide-in-from-bottom-2">{v}</div>)}
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-4 text-center text-sm text-gray-500 bg-gray-100 py-2 rounded">
                        {labels.memory[currentLang]} <span className={`font-bold ${coo.vals.length * 3 < 25 ? 'text-green-600' : 'text-red-500'}`}>
                            {labels.cooMem(coo.vals.length)[currentLang]}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
};
