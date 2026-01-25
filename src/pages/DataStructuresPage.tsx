import React, { useState, useMemo } from 'react';
import { GlobalSidebar } from '../components/common/GlobalSidebar';
import { LanguageSwitcher } from '../components/common/LanguageSwitcher';
import { syllabusData } from '../data/syllabus_data';
import { useLanguageStore } from '../stores/languageStore';
import { getLocalizedText } from '../data/mooc-exercises';

const DataStructuresPage: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const { currentLang } = useLanguageStore();

    // Filter for current week (simulation) or just show all
    const currentWeek = 1; 

    const labels = {
        weeklySchedule: { ENG: "Weekly Schedule", CAS: "Horario Semanal", EUS: "Asteko Ordutegia" },
        theory: { ENG: "Theory (Mon)", CAS: "Teoría (Lun)", EUS: "Teoria (Ast)" },
        lab: { ENG: "Lab (Thu)", CAS: "Práctica (Jue)", EUS: "Praktika (Ost)" },
        evaluation: { ENG: "Evaluation Criteria", CAS: "Criterios de Evaluación", EUS: "Ebaluazio Irizpideak" },
        retakable: { ENG: "Retakable", CAS: "Recuperable", EUS: "Berreskuragarria" },
        week: { ENG: "Week", CAS: "Semana", EUS: "Astea" },
        openMaterials: { ENG: "Open Materials", CAS: "Abrir Materiales", EUS: "Materialak Ireki" },
        date: { ENG: "Date", CAS: "Fecha", EUS: "Data" }
    };

    // Group calendar by weeks
    const weeks = useMemo(() => {
        const grouped: Record<number, { theory?: any, lab?: any, holidays: any[] }> = {};
        
        syllabusData.calendar.forEach(event => {
            if (!grouped[event.week]) {
                grouped[event.week] = { holidays: [] };
            }

            if (event.type === 'Theory') {
                grouped[event.week].theory = event;
            } else if (event.type === 'Lab') {
                grouped[event.week].lab = event;
            } else if (event.type === 'Theory/Lab') {
                // Special case for week 1
                grouped[event.week].theory = event;
            } else if (event.type === 'Holiday') {
                grouped[event.week].holidays.push(event);
            }
        });
        return grouped;
    }, []);

    // Helper to get max week number to iterate safely
    const maxWeek = Math.max(...syllabusData.calendar.map(e => e.week));

    return (
        <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
            {/* Mobile Toggle */}
            <button 
                className="md:hidden fixed bottom-4 right-4 z-50 bg-brand-dark text-white p-3 rounded-full shadow-lg"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? '✕' : '☰'}
            </button>

            <GlobalSidebar 
                isOpen={isSidebarOpen} 
                onToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
            />

            <main className="flex-1 overflow-y-auto relative">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    
                    {/* Header Toolbar */}
                    <div className="flex justify-between items-center mb-6">
                        <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                            {syllabusData.academicYear} • UPNA
                        </div>
                        <LanguageSwitcher />
                    </div>

                    {/* COMPACT HERO SECTION */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
                        <div className="bg-brand-dark px-6 py-6 text-white flex flex-col md:flex-row justify-between items-center gap-4">
                            <div>
                                <h1 className="text-2xl md:text-3xl font-black">
                                    {getLocalizedText(syllabusData.courseName as any, currentLang)}
                                </h1>
                                <div className="flex flex-wrap gap-4 text-xs font-medium opacity-80 mt-2">
                                    <div className="flex items-center gap-1">
                                        <span className="opacity-70">👤</span> {syllabusData.lecturer.name}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="opacity-70">📧</span> {syllabusData.lecturer.email}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="opacity-70">📍</span> {getLocalizedText(syllabusData.lecturer.office as any, currentLang)}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Compact Evaluation Pills */}
                            <div className="flex gap-2">
                                {syllabusData.evaluation.map((ev, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg text-center border border-white/20">
                                        <div className="text-lg font-bold leading-none">{ev.weight}%</div>
                                        <div className="text-[10px] uppercase opacity-70 mt-1 truncate max-w-[80px]">
                                            {getLocalizedText(ev.method as any, currentLang)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* COMPACT TABLE SCHEDULE */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-bold border-b border-gray-200">
                                    <tr>
                                        <th className="px-4 py-3 w-16 text-center">
                                            {getLocalizedText(labels.week, currentLang)}
                                        </th>
                                        <th className="px-4 py-3 border-l border-gray-100 w-1/2">
                                            {getLocalizedText(labels.theory, currentLang)}
                                        </th>
                                        <th className="px-4 py-3 border-l border-gray-100 w-1/2">
                                            {getLocalizedText(labels.lab, currentLang)}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {Array.from({ length: maxWeek }, (_, i) => i + 1).map(weekNum => {
                                        const data = weeks[weekNum];
                                        if (!data) return null;
                                        const isCurrent = weekNum === currentWeek;
                                        
                                        // Holiday Logic: Check if the whole week is effectively a holiday (no classes)
                                        // or if specific days are holidays. 
                                        // For simplicity, if both slots are empty and we have holidays, we merge.
                                        const isFullHoliday = data.holidays.length > 0 && !data.theory && !data.lab;

                                        return (
                                            <tr 
                                                key={weekNum} 
                                                className={`
                                                    hover:bg-gray-50 transition-colors
                                                    ${isCurrent ? 'bg-blue-50/50' : ''}
                                                `}
                                            >
                                                {/* Week Number */}
                                                <td className="px-4 py-3 text-center font-bold text-gray-400">
                                                    {weekNum}
                                                </td>

                                                {/* Theory Column */}
                                                <td className="px-4 py-3 border-l border-gray-100 align-top">
                                                    {isFullHoliday ? (
                                                        <div className="text-red-500 font-bold italic text-center py-2 bg-red-50 rounded-md">
                                                            {getLocalizedText(data.holidays[0].topic as any, currentLang)}
                                                        </div>
                                                    ) : data.theory ? (
                                                        <div>
                                                            <div className="text-xs font-bold text-blue-600 mb-0.5">
                                                                {data.theory.date}
                                                            </div>
                                                            <div className="font-semibold text-gray-800">
                                                                {getLocalizedText(data.theory.topic as any, currentLang)}
                                                            </div>
                                                            {isCurrent && (
                                                                <button className="mt-2 text-[10px] bg-blue-100 text-blue-700 px-2 py-1 rounded font-bold hover:bg-blue-200">
                                                                    {getLocalizedText(labels.openMaterials, currentLang)}
                                                                </button>
                                                            )}
                                                        </div>
                                                    ) : (
                                                       <span className="text-gray-300 italic text-xs">-</span>
                                                    )}
                                                </td>

                                                {/* Lab Column */}
                                                <td className="px-4 py-3 border-l border-gray-100 align-top">
                                                     {isFullHoliday ? (
                                                        <div className="text-red-500 font-bold italic text-center py-2 bg-red-50 rounded-md">
                                                            {getLocalizedText(data.holidays[0].topic as any, currentLang)}
                                                        </div>
                                                    ) : data.lab ? (
                                                        <div>
                                                            <div className="text-xs font-bold text-green-600 mb-0.5">
                                                                {data.lab.date}
                                                            </div>
                                                            <div className="font-semibold text-gray-800">
                                                                {getLocalizedText(data.lab.topic as any, currentLang)}
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <span className="text-gray-300 italic text-xs">-</span>
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default DataStructuresPage;
