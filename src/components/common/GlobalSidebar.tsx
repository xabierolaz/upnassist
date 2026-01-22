import React, { useState } from 'react';
import { useLanguageStore } from '../../stores/languageStore';
import { courseStructure, getLocalizedText } from '../../data/mooc-exercises';
import { useNavigate, useLocation } from 'react-router-dom';

interface GlobalSidebarProps {
    isOpen: boolean;
    onToggle: () => void;
    currentPart?: number;
    activePageId?: string;
    onPageSelect?: (id: string) => void;
}

export const GlobalSidebar: React.FC<GlobalSidebarProps> = ({ 
    isOpen, 
    activePageId, 
    onPageSelect 
}) => {
    const { t, currentLang } = useLanguageStore();
    const navigate = useNavigate();
    const location = useLocation();

    // State for collapsible groups
    const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
        intro: false,
        advanced: false,
        dataStruct: false 
    });

    // State for parts
    const [openParts, setOpenParts] = useState<Record<number, boolean>>({});

    // Group sections logic
    const sectionsByPart = courseStructure.reduce((acc, section) => {
        const part = section.part || 1;
        if (!acc[part]) acc[part] = [];
        acc[part].push(section);
        return acc;
    }, {} as Record<number, typeof courseStructure>);

    const toggleGroup = (group: string) => {
        setOpenGroups(prev => ({ ...prev, [group]: !prev[group] }));
    };

    const togglePart = (part: number) => {
        setOpenParts(prev => ({ ...prev, [part]: !prev[part] }));
    };

    const handleNavigation = (id: string) => {
        // If we are not on the home page (MOOC), navigate home first
        if (location.pathname !== '/') {
            navigate('/');
            // We need to wait for navigation, passing ID via state is robust but simple check:
            // For now, simpler: user goes to home, then selects.
            // Or better: navigate('/', { state: { targetId: id } });
            setTimeout(() => onPageSelect && onPageSelect(id), 100);
        } else {
            if (onPageSelect) onPageSelect(id);
        }
    };

    const renderPartList = (min: number, max: number) => {
        return Object.keys(sectionsByPart)
            .map(Number)
            .filter(part => part >= min && part <= max)
            .sort((a, b) => a - b)
            .map((part) => {
                const sections = sectionsByPart[part];
                const isOpen = openParts[part];
                // Label logic
                const label = part === 1 ? t.part1 : 
                              (currentLang === 'EUS' ? `${part}. Zatia` : 
                              `${currentLang === 'ENG' ? 'Part' : 'Parte'} ${part}`);

                return (
                    <div key={part} className="mb-2">
                        <button
                            onClick={() => togglePart(part)}
                            className="w-full flex justify-between items-center px-4 py-3 bg-gray-800/50 hover:bg-gray-700 rounded-lg text-xs font-bold text-gray-300 uppercase tracking-wider transition-colors"
                        >
                            <span>{label}</span>
                            <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                        </button>
                        
                        {isOpen && (
                            <ul className="mt-1 space-y-0.5 pl-2 border-l-2 border-gray-700 ml-4">
                                {sections.map((page) => (
                                    <li key={page.id}>
                                        <button
                                            onClick={() => handleNavigation(page.id)}
                                            className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${ 
                                                activePageId === page.id
                                                ? 'bg-brand-blue text-white shadow-sm'
                                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                            }`}
                                        >
                                            {getLocalizedText(page.title, currentLang)}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                );
            });
    };

    return (
        <aside className={`
            fixed md:relative z-20 h-full w-72 bg-brand-dark text-white flex-shrink-0 flex flex-col transition-transform duration-300 shadow-xl
            ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
            <div className="p-6 border-b border-gray-700 bg-brand-dark cursor-pointer" onClick={() => navigate('/')}>
                <h1 className="text-2xl font-black text-white tracking-tight">{t.title}</h1>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-bold">{t.university}</p>
            </div>
            
            <div className="flex-1 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-gray-600">
                
                {/* Intro Group */}
                <div className="mb-1">
                    <button onClick={() => toggleGroup('intro')} className="group-btn w-full flex items-center justify-between px-3 py-3 mt-2 text-xs font-black text-gray-400 uppercase tracking-wider hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span>{t.introProg}</div>
                        <span className={`transform transition-transform duration-200 ${openGroups.intro ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                    {openGroups.intro && <div className="pl-2 mt-1">{renderPartList(1, 7)}</div>}
                </div>

                {/* Advanced Group */}
                <div className="mb-1">
                    <button onClick={() => toggleGroup('advanced')} className="group-btn w-full flex items-center justify-between px-3 py-3 mt-2 text-xs font-black text-gray-400 uppercase tracking-wider hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-500"></span>{t.advProg}</div>
                        <span className={`transform transition-transform duration-200 ${openGroups.advanced ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                    {openGroups.advanced && <div className="pl-2 mt-1">{renderPartList(8, 14)}</div>}
                </div>

                {/* Data Structures Group */}
                <div className="mb-1">
                    <button onClick={() => toggleGroup('dataStruct')} className="group-btn w-full flex items-center justify-between px-3 py-3 mt-2 text-xs font-black text-gray-400 uppercase tracking-wider hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span>{t.dataStruct}</div>
                        <span className={`transform transition-transform duration-200 ${openGroups.dataStruct ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                    
                    {openGroups.dataStruct && (
                        <div className="pl-2 mt-1">
                            {/* Static Link to Syllabus */}
                            <button
                                onClick={() => navigate('/estructura-datos')}
                                className={`w-full text-left px-4 py-3 mb-2 rounded-md text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                                    location.pathname === '/estructura-datos'
                                    ? 'bg-green-600 text-white' 
                                    : 'text-gray-300 hover:bg-gray-700'
                                }`}
                            >
                                1-Presentación Asignatura 26/02
                            </button>
                            {/* Render regular parts if any (Part 15+) */}
                            {renderPartList(15, 99)}
                        </div>
                    )}
                </div>

            </div>
        </aside>
    );
};
