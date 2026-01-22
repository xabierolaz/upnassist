import React, { useState } from 'react';
import { GlobalSidebar } from '../components/common/GlobalSidebar';
import { LanguageSwitcher } from '../components/common/LanguageSwitcher';
import { syllabusData } from '../data/syllabus_data';

const DataStructuresPage: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // Filter for current week (simulation) or just show all
    const currentWeek = 1; 

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
                <div className="max-w-6xl mx-auto px-6 py-10">
                    
                    {/* Header Toolbar */}
                    <div className="flex justify-between items-center mb-8">
                        <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">
                            {syllabusData.academicYear} • UPNA
                        </div>
                        <LanguageSwitcher />
                    </div>

                    {/* HERO SECTION */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-10 border border-gray-100">
                        <div className="bg-brand-dark px-8 py-10 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 opacity-10 transform translate-x-10 -translate-y-10">
                                <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                </svg>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black mb-4 relative z-10">
                                {syllabusData.courseName}
                            </h1>
                            <div className="flex flex-col md:flex-row gap-6 text-sm font-medium opacity-90 relative z-10">
                                <div className="flex items-center gap-2">
                                    <span className="bg-blue-500 p-1 rounded">👤</span>
                                    {syllabusData.lecturer.name}
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="bg-purple-500 p-1 rounded">📧</span>
                                    {syllabusData.lecturer.email}
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="bg-orange-500 p-1 rounded">📍</span>
                                    {syllabusData.lecturer.office}
                                </div>
                            </div>
                        </div>

                        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Schedule */}
                            <div>
                                <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">Weekly Schedule</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                                        <div className="w-12 text-center font-bold text-gray-400 text-xs uppercase mr-4">Mon</div>
                                        <div>
                                            <div className="font-bold text-gray-800">Theory</div>
                                            <div className="text-xs text-gray-500">{syllabusData.schedule.theory.time} • {syllabusData.schedule.theory.room}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                                        <div className="w-12 text-center font-bold text-gray-400 text-xs uppercase mr-4">Thu</div>
                                        <div>
                                            <div className="font-bold text-gray-800">Lab Practice</div>
                                            <div className="text-xs text-gray-500">{syllabusData.schedule.lab.time} • {syllabusData.schedule.lab.room}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Evaluation */}
                            <div>
                                <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">Evaluation Criteria</h3>
                                <div className="flex gap-4 h-24">
                                    {syllabusData.evaluation.map((ev, idx) => (
                                        <div key={idx} className="flex-1 bg-white border-2 border-dashed border-gray-200 rounded-xl flex flex-col justify-center items-center p-4 hover:border-brand-blue transition-colors">
                                            <span className="text-3xl font-black text-gray-800">{ev.weight}%</span>
                                            <span className="text-xs text-gray-500 font-bold uppercase text-center mt-1">{ev.method}</span>
                                            {ev.retake && <span className="text-[10px] text-green-600 bg-green-50 px-2 py-0.5 rounded-full mt-2 font-bold">Retakable</span>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* TIMELINE */}
                    <div className="relative border-l-4 border-gray-200 ml-4 md:ml-10 space-y-12">
                        {syllabusData.calendar.map((event, index) => {
                            const isCurrent = event.week === currentWeek;
                            const isPast = event.week < currentWeek;
                            
                            return (
                                <div key={index} className={`relative pl-8 md:pl-12 transition-all ${isCurrent ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}>
                                    {/* Dot */}
                                    <div className={`
                                        absolute -left-[10px] md:-left-[11px] top-6 w-5 h-5 rounded-full border-4 border-white shadow-sm
                                        ${isCurrent ? 'bg-brand-blue scale-125' : (isPast ? 'bg-gray-400' : 'bg-gray-200')}
                                    `}></div>

                                    <div className={`
                                        rounded-xl p-6 border transition-all duration-300
                                        ${isCurrent 
                                            ? 'bg-white border-brand-blue shadow-lg transform scale-[1.02]' 
                                            : 'bg-white border-gray-100 hover:shadow-md'
                                        }
                                        ${event.type === 'Holiday' ? 'bg-red-50 border-red-100' : ''}
                                    `}>
                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                            <div className="flex items-baseline gap-3">
                                                <span className={`text-xs font-black px-2 py-1 rounded uppercase ${
                                                    event.type === 'Theory' ? 'bg-blue-100 text-blue-700' :
                                                    event.type === 'Lab' ? 'bg-green-100 text-green-700' :
                                                    'bg-red-100 text-red-700'
                                                }`}>
                                                    {event.type}
                                                </span>
                                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                                                    Week {event.week} • {event.date}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <h3 className={`text-xl font-bold ${event.type === 'Holiday' ? 'text-red-800' : 'text-gray-800'}`}>
                                            {event.topic}
                                        </h3>
                                        
                                        {/* Interaction Hint */}
                                        {isCurrent && (
                                            <div className="mt-4 flex gap-2">
                                                <button className="text-xs bg-brand-dark text-white px-3 py-2 rounded font-bold hover:bg-gray-800 transition">
                                                    Open Materials
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </main>
        </div>
    );
};

export default DataStructuresPage;
