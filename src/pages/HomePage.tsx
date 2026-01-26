import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguageStore } from '../core/store/languageStore';
import { useAuthStore } from '../stores/authStore';
import { AdminDashboard } from '../components/AdminDashboard';

export const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const { t, currentLang } = useLanguageStore();
    const { user, logout } = useAuthStore();

    const courses = [
        {
            id: 'mooc',
            title: {
                ENG: "Python Programming Course",
                CAS: "Curso de Programación Python",
                EUS: "Python Programazio Ikastaroa"
            },
            description: {
                ENG: "Master Python from scratch with 14 intensive parts covering basics to game development.",
                CAS: "Domina Python desde cero con 14 partes intensivas que cubren desde lo básico hasta desarrollo de juegos.",
                EUS: "Ikasi Python hutsetik 14 zati intentsiborekin, oinarrizko kontzeptuetatik jokoen garapeneraino."
            },
            color: "bg-blue-600",
            icon: "🐍",
            path: "/course/mooc/part1-1"
        },
        {
            id: 'ds',
            title: {
                ENG: "Data Structures",
                CAS: "Estructura de Datos",
                EUS: "Datu Egitureak"
            },
            description: {
                ENG: "Learn advanced concepts like Linked Lists, Trees, and Recursion using Python.",
                CAS: "Aprende conceptos avanzados como Listas Enlazadas, Árboles y Recursividad usando Python.",
                EUS: "Ikasi kontzeptu aurreratuak, hala nola Zerrenda Estekatuak, Zuhaitzak eta Errekurtsibitatea Python erabiliz."
            },
            color: "bg-green-600",
            icon: "🌲",
            path: "/course/ds/ds-w02-intro"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
            {/* Simple Header */}
            <header className="bg-white border-b border-gray-200 py-6 px-8 shadow-sm">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-black text-[#c0392b] tracking-tight italic">UpnAssist 2026</h1>
                        <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mt-1">{t.university}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="hidden sm:flex flex-col items-end mr-4 border-r border-gray-100 pr-4">
                            <span className="text-xs text-gray-400 font-bold uppercase">Sesión iniciada</span>
                            <span className="text-sm font-black text-gray-700">{user?.email}</span>
                        </div>
                        <button 
                            onClick={() => logout()}
                            className="text-xs font-bold text-red-600 hover:bg-red-50 px-4 py-2 rounded-xl border border-red-100 uppercase tracking-wider transition-all shadow-sm active:scale-95"
                        >
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            </header>

            {/* Admin Panel Section */}
            {user?.role === 'admin' && (
                <div className="max-w-6xl mx-auto w-full px-8 pt-12 animate-in fade-in slide-in-from-top-4 duration-700">
                    <div className="mb-8">
                        <div className="flex items-center space-x-2 text-red-600 mb-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs font-black uppercase tracking-widest">Modo Administrador</span>
                        </div>
                        <h2 className="text-3xl font-black text-gray-900 tracking-tight">Consola de Seguimiento</h2>
                    </div>
                    
                    <AdminDashboard />
                </div>
            )}

            {/* Hero Section */}
            <main className="flex-1 max-w-6xl mx-auto px-8 py-16 w-full">
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                        {t.courses}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        Bienvenido a UpnAssist. Selecciona un curso para comenzar tu aprendizaje interactivo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {courses.map((course) => (
                        <div 
                            key={course.id}
                            onClick={() => navigate(course.path)}
                            className="group relative bg-white rounded-3xl shadow-sm border border-gray-200 p-8 cursor-pointer hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className={`w-16 h-16 ${course.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner`}>
                                {course.icon}
                            </div>
                            
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {(course.title as any)[currentLang]}
                            </h3>
                            
                            <p className="text-gray-600 leading-relaxed">
                                {(course.description as any)[currentLang]}
                            </p>

                            <div className="mt-8 flex items-center text-sm font-bold text-blue-600 uppercase tracking-wider">
                                Comenzar curso
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="py-12 border-t border-gray-200 text-center text-gray-400 text-sm">
                {t.footer}
            </footer>
        </div>
    );
};
