import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useLanguageStore } from '../../store/languageStore';
import { useNavigate } from 'react-router-dom';
import { CourseModule, getLocalizedText } from '../../types';

interface GlobalSidebarProps {
    isOpen: boolean;
    onToggle: () => void;
    activePageId?: string;
    modules: CourseModule[];
    title: string;
    courseId: string;
    mode?: 'fixed' | 'overlay';
}

export const GlobalSidebar: React.FC<GlobalSidebarProps> = ({ 
    isOpen, 
    activePageId, 
    modules,
    title,
    courseId,
    mode = 'fixed'
}) => {
    const { t, currentLang } = useLanguageStore();
    const navigate = useNavigate();

    // Internal hover state for overlay mode
    const [isHovered, setIsHovered] = useState(false);

    // Effectively open if:
    // 1. Mode is fixed AND parent says isOpen
    // 2. Mode is overlay AND (user is hovering sidebar OR user is hovering trigger zone)
    const isVisible = mode === 'fixed' ? isOpen : isHovered;

    // State for collapsible modules
    const [openModules, setOpenModules] = useState<Record<string, boolean>>({});

    const toggleModule = (moduleId: string) => {
        setOpenModules(prev => ({ ...prev, [moduleId]: !prev[moduleId] }));
    };

    const handleNavigation = (unitId: string) => {
        navigate(`/course/${courseId}/${unitId}`);
        if (mode === 'overlay') setIsHovered(false);
    };

    return (
        <>
            {/* Trigger Zone for Overlay Mode */}
            {mode === 'overlay' && (
                <div 
                    className="fixed top-0 left-0 h-full w-4 z-40 flex items-center justify-center group cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                >
                    <div className="h-24 w-1 bg-gray-400/50 rounded-full group-hover:bg-brand-blue group-hover:w-1.5 transition-all duration-300" />
                </div>
            )}

            {/* Sidebar */}
            <aside 
                className={`
                    h-full w-72 bg-brand-dark text-white flex-shrink-0 flex flex-col transition-transform duration-300 shadow-xl z-50
                    ${mode === 'fixed' ? 'relative' : 'fixed top-0 left-0'}
                    ${isVisible ? 'translate-x-0' : '-translate-x-full'}
                    ${mode === 'fixed' ? (isVisible ? '' : 'hidden md:flex md:w-0 overflow-hidden') : ''}
                `}
                onMouseLeave={() => mode === 'overlay' && setIsHovered(false)}
                onMouseEnter={() => mode === 'overlay' && setIsHovered(true)}
            >
                <div className="p-6 border-b border-gray-700 bg-brand-dark cursor-pointer flex-shrink-0" onClick={() => navigate('/')}>
                    <h1 className="text-2xl font-black text-white tracking-tight">{title}</h1>
                    <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-bold">{t.university}</p>
                </div>
                
                <div className="flex-1 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-gray-600">
                    {modules.map((module) => {
                        const isOpen = openModules[module.id] ?? !module.isCollapsed;
                        const hasSingleUnit = module.units.length === 1;
                        const isActive = hasSingleUnit && activePageId === module.units[0].id;

                        return (
                            <div key={module.id} className="mb-1">
                                <button 
                                    onClick={() => hasSingleUnit ? handleNavigation(module.units[0].id) : toggleModule(module.id)} 
                                    className={`group-btn w-full flex items-center justify-between px-3 py-3 mt-2 text-xs font-black uppercase tracking-wider rounded-lg transition-colors ${
                                        isActive 
                                        ? 'bg-brand-blue text-white shadow-sm' 
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    <div className="flex items-center gap-2">
                                        <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-blue-500'}`}></span>
                                        {getLocalizedText(module.title, currentLang)}
                                    </div>
                                    {!hasSingleUnit && (
                                        <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                                    )}
                                </button>
                                
                                {isOpen && !hasSingleUnit && (
                                    <div className="pl-2 mt-1">
                                        <ul className="space-y-0.5 pl-2 border-l-2 border-gray-700 ml-4">
                                            {module.units.map((unit) => (
                                                <li key={unit.id}>
                                                    <button
                                                        onClick={() => handleNavigation(unit.id)}
                                                        className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${ 
                                                            activePageId === unit.id
                                                            ? 'bg-brand-blue text-white shadow-sm'
                                                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                                                        }`}
                                                    >
                                                        {getLocalizedText(unit.title, currentLang)}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </aside>
        </>
    );
};