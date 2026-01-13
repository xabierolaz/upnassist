import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { coursePages, getExercise, ContentBlock, getLocalizedText } from '../data/mooc-exercises';
import { PyXomEnvironment } from '../components/pyxom/PyXomEnvironment';
import { useProgressStore } from '../stores/progressStore';
import { QuizPlaceholder } from '../components/mooc/QuizPlaceholder';
import { useLanguageStore } from '../stores/languageStore';
import { LanguageSwitcher } from '../components/common/LanguageSwitcher';

const MoocCoursePage: React.FC = () => {
  const [activePageId, setActivePageId] = useState<string>(coursePages[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const completedExercises = useProgressStore(state => state.completedExercises);
  const { t, currentLang } = useLanguageStore();

  // Obtener la página activa
  const activePage = coursePages.find(p => p.id === activePageId) || coursePages[0];

  // Helper para contar progreso por sección
  const getProgress = (pageId: string) => {
      const page = coursePages.find(p => p.id === pageId);
      if (!page) return null;
      const total = page.blocks.filter(b => b.type === 'exercise').length;
      if (total === 0) return null;
      const completed = page.blocks.filter(b => b.type === 'exercise' && b.exerciseId && completedExercises[b.exerciseId]).length;
      return { completed, total };
  };

  return (
    <div className="flex h-screen bg-white font-sans overflow-hidden">
      
      {/* Mobile Sidebar Toggle */}
      <button 
        className="md:hidden fixed bottom-4 right-4 z-50 bg-red-600 text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? '✕' : '☰'}
      </button>

      {/* Sidebar - Navegación por Partes/Secciones */}
      <aside className={`
        fixed md:relative z-20 h-full w-72 bg-brand-dark text-white flex-shrink-0 flex flex-col transition-transform duration-300 shadow-xl
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 border-b border-gray-700 bg-brand-dark">
          <h1 className="text-2xl font-black text-white tracking-tight">{t.title}</h1>
          <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-bold">{t.university}</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-3 mt-4">{t.part1}</h3>
            <ul className="space-y-1">
                {coursePages.map((page) => {
                    const progress = getProgress(page.id);
                    return (
                    <li key={page.id}>
                        <button
                            onClick={() => setActivePageId(page.id)}
                            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex justify-between items-center ${
                                activePageId === page.id
                                ? 'bg-brand-blue text-white shadow-md transform scale-[1.02]'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            }`}
                        >
                            <span>{getLocalizedText(page.title, currentLang)}</span>
                            {progress && progress.completed > 0 && (
                                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${progress.completed === progress.total ? 'bg-green-500 text-white' : 'bg-gray-600 text-gray-200'}`}>
                                    {progress.completed}/{progress.total}
                                </span>
                            )}
                        </button>
                    </li>
                )})}
            </ul>
        </div>
      </aside>

      {/* Main Content Scrollable Area */}
      <main className="flex-1 overflow-y-auto bg-white scroll-smooth">
        <div className="max-w-4xl mx-auto px-4 md:px-12 py-10 pb-32">
            
            {/* Top Bar with Language Switcher */}
            <div className="flex justify-end mb-6">
                <LanguageSwitcher />
            </div>

            {/* Renderizado de Bloques en Orden */}
            {activePage.blocks.map((block, index) => (
                <BlockRenderer key={index} block={block} />
            ))}

            {/* Bottom Navigation */}
            <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between">
                {(() => {
                    const currentIndex = coursePages.findIndex(p => p.id === activePageId);
                    const prevPage = coursePages[currentIndex - 1];
                    const nextPage = coursePages[currentIndex + 1];

                    return (
                        <>
                            {prevPage ? (
                                <button
                                    onClick={() => {
                                        setActivePageId(prevPage.id);
                                        window.scrollTo(0, 0);
                                    }}
                                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-[#c0392b] transition-colors"
                                >
                                    ← {getLocalizedText(prevPage.title, currentLang)}
                                </button>
                            ) : <div></div>}

                            {nextPage ? (
                                <button
                                    onClick={() => {
                                        setActivePageId(nextPage.id);
                                        window.scrollTo(0, 0);
                                    }}
                                    className="flex items-center px-4 py-2 text-sm font-medium text-white bg-[#c0392b] border border-[#c0392b] rounded-lg hover:bg-[#a93226] shadow-sm transition-colors"
                                >
                                    {getLocalizedText(nextPage.title, currentLang)} →
                                </button>
                            ) : (
                                <div className="text-gray-400 text-sm font-italic">{t.endOf} {t.part1}</div>
                            )}
                        </>
                    );
                })()}
            </div>

            {/* Footer */}
            <footer className="mt-20 border-t border-gray-200 pt-10 pb-6 text-center text-gray-500 text-sm">
                <p>© 2026 {t.university} / UpnAssist</p>
                <p className="mt-2">
                    {t.footer}
                    <br/>
                    Licensed under Creative Commons BY-NC-SA 4.0.
                </p>
            </footer>

        </div>
      </main>
    </div>
  );
};

// Sub-componente para renderizar cada bloque
const BlockRenderer: React.FC<{ block: ContentBlock }> = ({ block }) => {
    const { t, currentLang } = useLanguageStore(); // Hook de idioma en el subcomponente
    
    // 1. Renderizar Texto
    if (block.type === 'markdown' && block.content) {
        const content = getLocalizedText(block.content, currentLang);
        return (
            <div className="prose prose-slate prose-lg max-w-none font-serif mb-8 text-gray-800">
                <ReactMarkdown
                    components={{
                        h1: ({node, ...props}) => <h1 className="text-4xl font-black text-gray-900 mb-8 mt-2 pb-4 border-b border-gray-100" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4" {...props} />,
                        // Párrafo con lógica para detectar Quiz Placeholder
                        p: ({node, children, ...props}: any) => {
                            if (children && children.toString().includes('[[QUIZ_PLACEHOLDER]]')) {
                                return <QuizPlaceholder />;
                            }
                            return <p className="mb-4 leading-relaxed" {...props}>{children}</p>;
                        },
                        code: ({node, inline, className, children, ...props}: any) => {
                            if (inline) {
                                return <code className="bg-gray-100 text-red-600 px-1 py-0.5 rounded font-mono text-sm font-bold">{children}</code>;
                            }
                            return (
                                <pre className="bg-gray-900 text-gray-50 p-4 rounded-lg overflow-x-auto text-sm my-6 font-mono border border-gray-700 shadow-sm">
                                    <code>{children}</code>
                                </pre>
                            );
                        },
                        blockquote: ({node, children, ...props}: any) => {
                            return (
                                <div className="my-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm text-blue-900">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xl">📘</span>
                                        <span className="font-bold uppercase tracking-wider text-xs">Objetivos de aprendizaje / Nota</span>
                                    </div>
                                    <div className="not-italic text-base md:text-lg leading-relaxed">
                                        {children}
                                    </div>
                                </div>
                            );
                        },
                        img: ({node, ...props}: any) => (
                            <img className="max-w-full h-auto rounded-lg shadow-md my-6 border border-gray-200" {...props} />
                        )
                    }}
                >
                    {content.replace(/<quiz id=".*"><\/quiz>/g, '[[QUIZ_PLACEHOLDER]]')}
                </ReactMarkdown>
            </div>
        );
    }

    // 2. Renderizar Ejercicio
    if (block.type === 'exercise' && block.exerciseId) {
        const exercise = getExercise(block.exerciseId);
        const isCompleted = useProgressStore(state => state.completedExercises[block.exerciseId!]);
        
        if (!exercise) return null;

        return (
            <div className={`my-10 border rounded-lg overflow-hidden shadow-lg ring-1 transition-all duration-500 ${isCompleted ? 'border-green-200 ring-green-100 bg-green-50/10' : 'border-gray-300 ring-black/5 bg-white'}`}>
                <div className={`px-4 py-3 border-b flex justify-between items-center ${isCompleted ? 'bg-green-50 border-green-100' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="flex justify-between items-center mb-2 w-full">
                        <div className="flex items-center gap-2">
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide ${isCompleted ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
                                {isCompleted ? t.completed : t.exercise}
                            </span>
                            <h4 className={`font-bold text-sm ${isCompleted ? 'text-green-900' : 'text-gray-800'}`}>{getLocalizedText(exercise.title, currentLang)}</h4>
                        </div>
                        {isCompleted && <span className="text-green-600 text-xl animate-bounce">✓</span>}
                    </div>
                    {exercise.description && (
                        <div className="text-sm text-gray-600 font-serif italic border-l-2 border-red-200 pl-3 py-1">
                            {getLocalizedText(exercise.description, currentLang)}
                        </div>
                    )}
                </div>
                
                {/* Editor con altura fija para cada ejercicio embebido */}
                <div className="h-[500px]">
                    <PyXomEnvironment 
                        exerciseId={block.exerciseId}
                        initialCode={exercise.initialCode}
                        testCode={exercise.testCode}
                        className="h-full border-0 rounded-none"
                    />
                </div>
            </div>
        );
    }

    return null;
};

export default MoocCoursePage;
