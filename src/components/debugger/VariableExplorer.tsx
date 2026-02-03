import React from 'react';
import { useDebuggerStore, TraceValue } from '../../core/store/debuggerStore';
import { useLanguageStore } from '../../core/store/languageStore';

const VariableCard: React.FC<{ name: string; value: TraceValue }> = ({ name, value }) => {
    let displayValue = String(value.value);
    let typeColor = 'text-gray-600';
    let valueColor = 'text-gray-900 dark:text-gray-100';

    switch (value.type) {
        case 'int':
        case 'float':
            typeColor = 'text-blue-500';
            valueColor = 'text-blue-600 dark:text-blue-400 font-mono';
            break;
        case 'str':
            typeColor = 'text-green-600';
            valueColor = 'text-green-700 dark:text-green-400 font-mono';
            displayValue = `"${displayValue}"`;
            break;
        case 'bool':
            typeColor = 'text-purple-500';
            valueColor = 'text-purple-600 dark:text-purple-400 font-bold';
            break;
        case 'list':
        case 'tuple':
        case 'set':
             typeColor = 'text-orange-600';
             valueColor = 'text-gray-800 dark:text-gray-200 font-mono text-xs';
             // Render simple preview of container
             if (Array.isArray(value.value)) {
                 const items = (value.value as TraceValue[]).map(v => 
                     v.type === 'str' ? `'${v.value}'` : String(v.value)
                 );
                 const brackets = value.type === 'list' ? ['[', ']'] : value.type === 'tuple' ? ['(', ')'] : ['{', '}'];
                 displayValue = `${brackets[0]}${items.join(', ')}${brackets[1]}`;
             }
             break;
        case 'dict':
             typeColor = 'text-orange-600';
             valueColor = 'text-gray-800 dark:text-gray-200 font-mono text-xs';
             if (value.value && typeof value.value === 'object') {
                 const entries = Object.entries(value.value as Record<string, TraceValue>).map(([k, v]) => 
                     `'${k}': ${v.type === 'str' ? `'${v.value}'` : String(v.value)}`
                 );
                 displayValue = `{${entries.join(', ')}}`;
             }
             break;
        case 'object':
        case 'ref':
            typeColor = 'text-orange-500';
            valueColor = 'text-orange-600 dark:text-orange-400 italic';
            break;
        case 'None':
             typeColor = 'text-gray-400';
             valueColor = 'text-gray-500 italic';
             break;
    }

    return (
        <div className="flex justify-between items-center p-2 border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <div className="flex flex-col">
                <span className="font-medium text-sm text-gray-700 dark:text-gray-200">{name}</span>
                <span className="text-xs opacity-70">{value.type}</span>
            </div>
            <div className={`text-sm ${valueColor} truncate max-w-[120px] text-right`} title={displayValue}>
                {displayValue}
            </div>
        </div>
    );
};

export const VariableExplorer: React.FC = () => {
    const locals = useDebuggerStore((state) => state.currentLocals);
    const { t } = useLanguageStore();

    // Convertir a array y ordenar
    const vars = Object.entries(locals).sort((a, b) => a[0].localeCompare(b[0]));

    if (vars.length === 0) {
        return (
            <div className="p-4 text-center text-gray-400 text-sm italic">
                {t.noVariables}
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-800 px-3 py-2 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{t.variables}</h3>
            </div>
            <div className="max-h-60 overflow-y-auto custom-scrollbar">
                {vars.map(([name, val]) => (
                    <VariableCard key={name} name={name} value={val} />
                ))}
            </div>
        </div>
    );
};
