import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { courseStructure, loadSection, CoursePage, ContentBlock, getLocalizedText } from '../data/mooc-exercises';
import { PyXomEnvironment } from '../components/pyxom/PyXomEnvironment';
import { useProgressStore } from '../stores/progressStore';
import { QuizPlaceholder } from '../components/mooc/QuizPlaceholder';
import { Quiz } from '../components/mooc/Quiz';
import { useLanguageStore } from '../stores/languageStore';
import { LanguageSwitcher } from '../components/common/LanguageSwitcher';
import { GlobalSidebar } from '../components/common/GlobalSidebar';
import { InteractiveListVisualizer } from '../components/InteractiveListVisualizer';
import { FStringVisualizer } from '../components/FStringVisualizer';
import { MainGuardVisualizer } from '../components/MainGuardVisualizer';
import { SparseMatrixVisualizer } from '../components/SparseMatrixVisualizer';

const MoocCoursePage: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  // Use courseStructure for initial ID
  const [activePageId, setActivePageId] = useState<string>(courseStructure[0].id);
  const [activePageData, setActivePageData] = useState<CoursePage | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const { t, currentLang } = useLanguageStore();

  // Load section data when ID changes
  useEffect(() => {
    if (mainRef.current) mainRef.current.scrollTo(0, 0);
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

      {/* Global Sidebar */}
      <GlobalSidebar 
        isOpen={isSidebarOpen} 
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
        activePageId={activePageId}
        onPageSelect={setActivePageId}
      />

      {/* Main Content */}
      <main ref={mainRef} className="flex-1 overflow-y-auto bg-white scroll-smooth relative">
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

// Reusable Markdown Renderer with Custom Components
const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                pre: ({children}: any) => <>{children}</>,
                h1: ({node: _node, ..._props}) => <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-8" {..._props} />,
                h2: ({node: _node, ..._props}) => <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" {..._props} />,
                p: ({node: _node, children, ...props}: any) => {
                    if (children && children.toString().includes('[[QUIZ_PLACEHOLDER]]')) {
                        return <QuizPlaceholder />;
                    }
                    return <p className="mb-4 leading-relaxed" {...props}>{children}</p>;
                },
                code: ({node: _node, inline, className, children, ..._props}: any) => {
                    // Fix for react-markdown v10: inline prop is no longer passed.
                    // We infer it: if there is a language class OR newlines, it's a block.
                    const match = /language-(\w+)/.exec(className || '');
                    const hasNewlines = String(children).includes('\n');
                    const isBlock = !!match || hasNewlines;

                    if (!isBlock) {
                        return <code className="bg-gray-100 text-red-600 px-1 py-0.5 rounded font-mono text-sm font-bold">{children}</code>;
                    }

                    if (className && className.includes('language-text')) {
                        const content = String(children).trim();
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
                img: ({node: _node, src, ...props}: any) => {
                    let finalSrc = src;
                    if (src && !src.startsWith('http') && !src.startsWith('/')) {
                        finalSrc = '/' + src;
                    }
                    return <img className="max-w-full h-auto rounded-lg shadow-md my-6 border border-gray-200" src={finalSrc} {...props} />;
                }
            }}
        >
            {content
                .replace(/<quiz id=".*?"><\/quiz>/g, '[[QUIZ_PLACEHOLDER]]')
                .replace(/<text-box.*?name=['"](.*?)['"].*?>/g, '\n### $1\n')
                .replace(/<\/text-box>/g, '')
                .replace(/<sample-output>/g, '\n```text\n')
                .replace(/<\/sample-output>/g, '\n```\n')
            }
        </ReactMarkdown>
    );
};

const BlockRenderer: React.FC<{ block: ContentBlock }> = ({ block }) => {
    const { t, currentLang } = useLanguageStore();
    const completedExercises = useProgressStore(state => state.completedExercises);
    
    // Quiz
    if (block.type === 'quiz' && block.questions) {
        return <Quiz questions={block.questions} />;
    }

    // Interactive List Component
    if (block.type === 'interactive-list') {
        return <InteractiveListVisualizer />;
    }

    // F-String Visualizer
    if (block.type === 'interactive-fstring') {
        return <FStringVisualizer />;
    }

    // Main Guard Visualizer
    if (block.type === 'interactive-mainguard') {
        return <MainGuardVisualizer />;
    }

    // Sparse Matrix Visualizer
    if (block.type === 'interactive-sparse-matrix') {
        return <SparseMatrixVisualizer />;
    }

    // Markdown
    if (block.type === 'markdown' && block.content) {
        const content = getLocalizedText(block.content, currentLang);
        return (
            <div className="prose prose-slate prose-lg max-w-none font-serif mb-8 text-gray-800">
                <MarkdownRenderer content={content} />
            </div>
        );
    }

    // Exercise
    if (block.type === 'exercise' && block.exerciseId) {
        const isCompleted = completedExercises[block.exerciseId!];
        const headerColor = isCompleted ? '#13B559' : '#D23D48';

        return (
            <div className="my-14 rounded-2xl shadow-xl overflow-hidden bg-white">
                {/* Header matching original ProgrammingExerciseCard.js styling */}
                <div 
                    className="flex flex-row items-center px-6 py-5 text-white"
                    style={{ backgroundColor: headerColor }}
                >
                    {/* Pencil Icon (FontAwesome faPencilAlt equivalent) */}
                    <div className="mr-6 text-3xl opacity-90">
                        <svg aria-hidden="true" focusable="false" data-icon="pencil-alt" className="h-8 w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                            <path d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"></path>
                        </svg>
                    </div>

                    {/* Title Container */}
                    <div className="flex-1">
                        <div className="text-lg opacity-90 font-normal leading-tight mb-1">
                            {t.exercise} 
                        </div>
                        <h3 className="text-2xl font-medium m-0 leading-tight">
                            {getLocalizedText(block.title, currentLang)}
                        </h3>
                    </div>

                    {/* Points Wrapper */}
                    <div className="ml-4 flex flex-col text-right">
                        <span className="text-lg opacity-90">{t.points}:</span>
                        <div className="text-2xl font-bold leading-none mt-1">
                            {isCompleted ? "1" : "0"}<span className="text-xl mx-1 font-normal">/</span>1
                        </div>
                    </div>
                </div>

                {/* Description - Now using MarkdownRenderer for rich content inside the card! */}
                {block.description && (
                    <div className="px-8 py-6 text-base text-gray-800 font-sans border-b border-gray-100 bg-white leading-relaxed">
                        <MarkdownRenderer content={getLocalizedText(block.description, currentLang)} />
                    </div>
                )}
                
                {/* Environment */}
                <div className="h-[550px] border-t border-gray-100">
                    <PyXomEnvironment 
                        exerciseId={block.exerciseId}
                        initialCode={getLocalizedText(block.initialCode, currentLang) || ''}
                        testCode={block.testCode || ''}
                        className="h-full border-0 rounded-none shadow-none"
                    />
                </div>
            </div>
        );
    }

    return null;
};

export default MoocCoursePage;