import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { courseStructure, loadSection, CoursePage, ContentBlock, getLocalizedText, getExercise } from '../data/mooc-exercises';
import { PyXomEnvironment } from '../components/pyxom/PyXomEnvironment';
import { useProgressStore } from '../stores/progressStore';
import { QuizPlaceholder } from '../components/mooc/QuizPlaceholder';
import { Quiz } from '../components/mooc/Quiz';
import { useLanguageStore } from '../stores/languageStore';
import { LanguageSwitcher } from '../components/common/LanguageSwitcher';

const MoocCoursePage: React.FC = () => {
  // Use courseStructure for initial ID
  const [activePageId, setActivePageId] = useState<string>(courseStructure[0].id);
  const [activePageData, setActivePageData] = useState<CoursePage | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // State for collapsible parts. Default Part 1 open.
  const [openParts, setOpenParts] = useState<Record<number, boolean>>({ 1: true });
  
  const completedExercises = useProgressStore(state => state.completedExercises);
  const { t, currentLang } = useLanguageStore();

  // Group sections by part
  const sectionsByPart = courseStructure.reduce((acc, section) => {
    const part = section.part || 1;
    if (!acc[part]) acc[part] = [];
    acc[part].push(section);
    return acc;
  }, {} as Record<number, typeof courseStructure>);

  // Auto-expand part when active page changes
  useEffect(() => {
    const activeSection = courseStructure.find(s => s.id === activePageId);
    if (activeSection && activeSection.part) {
        setOpenParts(prev => ({ ...prev, [activeSection.part]: true }));
    }
  }, [activePageId]);

  const togglePart = (part: number) => {
    setOpenParts(prev => ({ ...prev, [part]: !prev[part] }));
  };

  // Helper for Part Label
  const getPartLabel = (part: number) => {
      // Use existing translation for Part 1 if matches, otherwise generic
      if (part === 1) return t.part1;
      
      const prefix = currentLang === 'EUS' ? '' : (currentLang === 'ENG' ? 'Part' : 'Parte');
      const suffix = currentLang === 'EUS' ? '. Zatia' : '';
      return `${prefix} ${part}${suffix}`.trim();
  };

  // Load section data when ID changes
  useEffect(() => {
    let isMounted = true;
    const load = async () => {
        setIsLoading(true);
        const data = await loadSection(activePageId);
        if (isMounted && data) {
            setActivePageData(data);
        }
        if (isMounted) setIsLoading(false);
    };
    load();
    return () => { isMounted = false; };
  }, [activePageId]);
  
  return (
    <div className="flex h-screen bg-white font-sans overflow-hidden">
      
      {/* Mobile Sidebar Toggle */}
      <button 
        className="md:hidden fixed bottom-4 right-4 z-50 bg-red-600 text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? '✕' : '☰'}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed md:relative z-20 h-full w-72 bg-brand-dark text-white flex-shrink-0 flex flex-col transition-transform duration-300 shadow-xl
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 border-b border-gray-700 bg-brand-dark">
          <h1 className="text-2xl font-black text-white tracking-tight">{t.title}</h1>
          <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-bold">{t.university}</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-gray-600">
            {/* Intro Group */}
            <h3 className="text-xs font-black text-gray-500 uppercase tracking-wider mb-2 px-3 mt-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                {t.introProg}
            </h3>
            {Object.keys(sectionsByPart)
                .map(Number)
                .filter(part => part <= 7)
                .sort((a, b) => a - b)
                .map((part) => {
                const sections = sectionsByPart[part];
                const isOpen = openParts[part];

                return (
                    <div key={part} className="mb-2">
                        <button
                            onClick={() => togglePart(part)}
                            className="w-full flex justify-between items-center px-4 py-3 bg-gray-800/50 hover:bg-gray-700 rounded-lg text-xs font-bold text-gray-300 uppercase tracking-wider transition-colors"
                        >
                            <span>{getPartLabel(part)}</span>
                            <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                        </button>
                        
                        {isOpen && (
                            <ul className="mt-1 space-y-0.5 pl-2 border-l-2 border-gray-700 ml-4">
                                {sections.map((page) => (
                                    <li key={page.id}>
                                        <button
                                            onClick={() => setActivePageId(page.id)}
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
            })}

            {/* Advanced Group */}
            <h3 className="text-xs font-black text-gray-500 uppercase tracking-wider mb-2 px-3 mt-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                {t.advProg}
            </h3>
            {Object.keys(sectionsByPart)
                .map(Number)
                .filter(part => part > 7)
                .sort((a, b) => a - b)
                .map((part) => {
                const sections = sectionsByPart[part];
                const isOpen = openParts[part];

                return (
                    <div key={part} className="mb-2">
                        <button
                            onClick={() => togglePart(part)}
                            className="w-full flex justify-between items-center px-4 py-3 bg-gray-800/50 hover:bg-gray-700 rounded-lg text-xs font-bold text-gray-300 uppercase tracking-wider transition-colors"
                        >
                            <span>{getPartLabel(part)}</span>
                            <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                        </button>
                        
                        {isOpen && (
                            <ul className="mt-1 space-y-0.5 pl-2 border-l-2 border-gray-700 ml-4">
                                {sections.map((page) => (
                                    <li key={page.id}>
                                        <button
                                            onClick={() => setActivePageId(page.id)}
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
            })}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-white scroll-smooth relative">
        <div className="max-w-4xl mx-auto px-4 md:px-12 py-10 pb-32">
            
            <div className="flex justify-end mb-6">
                <LanguageSwitcher />
            </div>

            {isLoading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue"></div>
                </div>
            ) : (
                <>
                    {activePageData ? (
                        <>
                            <h1 className="text-4xl font-black text-gray-900 mb-8 pb-4 border-b border-gray-100">
                                {getLocalizedText(activePageData.title, currentLang)}
                            </h1>
                            {activePageData.blocks.map((block, index) => (
                                <BlockRenderer key={index} block={block} />
                            ))}
                        </>
                    ) : (
                        <div className="text-center text-gray-500">Error loading content.</div>
                    )}
                </>
            )}

            {/* Bottom Navigation */}
            <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between">
                {(() => {
                    const currentIndex = courseStructure.findIndex(p => p.id === activePageId);
                    const prevPage = courseStructure[currentIndex - 1];
                    const nextPage = courseStructure[currentIndex + 1];

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

const BlockRenderer: React.FC<{ block: ContentBlock }> = ({ block }) => {
    const { t, currentLang } = useLanguageStore();
    
    // Quiz
    if (block.type === 'quiz' && block.questions) {
        return <Quiz questions={block.questions} />;
    }

    // Markdown
    if (block.type === 'markdown' && block.content) {
        const content = getLocalizedText(block.content, currentLang);
        return (
            <div className="prose prose-slate prose-lg max-w-none font-serif mb-8 text-gray-800">
                <ReactMarkdown
                    components={{
                        h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-8" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" {...props} />,
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
                            if (className && className.includes('language-text')) {
                                const content = String(children);
                                return (
                                    <div className="my-6 p-4 pt-2 border-l-4 border-gray-300 bg-white shadow-sm rounded-r-md">
                                        <div className="w-full text-right text-xs text-gray-400 mb-1 font-sans">Sample output</div>
                                        <div className="font-mono text-sm whitespace-pre-wrap text-gray-800">{content}</div>
                                    </div>
                                );
                            }
                            return (
                                <pre className="bg-gray-900 text-gray-50 p-4 rounded-lg overflow-x-auto text-sm my-6 font-mono border border-gray-700 shadow-sm">
                                    <code>{children}</code>
                                </pre>
                            );
                        },
                        // Ensure images resolve from public/
                        img: ({node, src, ...props}: any) => {
                            // If src is "images/...", and we are at root, it works.
                            // But if we want to be safe, we can prepend a slash if missing
                            let finalSrc = src;
                            if (src && !src.startsWith('http') && !src.startsWith('/')) {
                                finalSrc = '/' + src;
                            }
                            return <img className="max-w-full h-auto rounded-lg shadow-md my-6 border border-gray-200" src={finalSrc} {...props} />;
                        }
                    }}
                >
                    {content.replace(/<quiz id=".*"><\/quiz>/g, '[[QUIZ_PLACEHOLDER]]')}
                </ReactMarkdown>
            </div>
        );
    }

    // Exercise
    if (block.type === 'exercise' && block.exerciseId) {
        // We need to look up the exercise details. 
        // In the lazy loading model, `getExercise` might not find it if we haven't loaded the data?
        // Actually `exercisesDB` in `mooc-exercises.ts` is constructed from `coursePages` which is now NOT fully populated statically.
        // **CRITICAL FIX**: `exercisesDB` will be empty or partial. 
        // We must rely on the data inside the `activePageData` block itself or refactor how exercises are stored.
        // In the original file I wrote, `exercisesDB` was built from `coursePages` array. 
        // Since `coursePages` array is gone (replaced by `courseStructure` + dynamic imports), `exercisesDB` is gone.
        
        // Solution: The `block` object inside `activePageData` MUST contain all exercise details (title, description, initialCode).
        // My generator script for `sectionX.ts` put full details in the block.
        // So we can use `block` directly! We don't need `getExercise`.
        
        const isCompleted = useProgressStore(state => state.completedExercises[block.exerciseId!]);

        return (
            <div className={`my-10 border rounded-lg overflow-hidden shadow-lg ring-1 transition-all duration-500 ${isCompleted ? 'border-green-200 ring-green-100 bg-green-50/10' : 'border-gray-300 ring-black/5 bg-white'}`}>
                <div className={`px-4 py-3 border-b flex justify-between items-center ${isCompleted ? 'bg-green-50 border-green-100' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="flex justify-between items-center mb-2 w-full">
                        <div className="flex items-center gap-2">
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide ${isCompleted ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
                                {isCompleted ? t.completed : t.exercise}
                            </span>
                            <h4 className={`font-bold text-sm ${isCompleted ? 'text-green-900' : 'text-gray-800'}`}>{getLocalizedText(block.title, currentLang)}</h4>
                        </div>
                        {isCompleted && <span className="text-green-600 text-xl animate-bounce">✓</span>}
                    </div>
                </div>
                {block.description && (
                    <div className="px-4 py-2 text-sm text-gray-600 font-serif italic border-b border-gray-100">
                        {getLocalizedText(block.description, currentLang)}
                    </div>
                )}
                
                <div className="h-[500px]">
                    <PyXomEnvironment 
                        exerciseId={block.exerciseId}
                        initialCode={block.initialCode || ''}
                        testCode={block.testCode || ''}
                        className="h-full border-0 rounded-none"
                    />
                </div>
            </div>
        );
    }

    return null;
};

export default MoocCoursePage;