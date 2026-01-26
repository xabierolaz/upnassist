import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams, useNavigate } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { loadUnit } from '../loader';
import { useLanguageStore } from '../store/languageStore';
import { Course, ContentBlock } from '../types';
import { getLocalizedText } from '../../utils/localization';
import { GlobalSidebar } from './common/GlobalSidebar';
import { PyXomEnvironment } from '../engine/python/PyXomEnvironment';
import { useProgressStore } from '../store/progressStore';
import { Quiz } from './blocks/Quiz';
import { QuizPlaceholder } from './blocks/QuizPlaceholder';

// Visualizers
import { InteractiveListVisualizer } from './visualizers/InteractiveListVisualizer';
import { FStringVisualizer } from './visualizers/FStringVisualizer';
import { MainGuardVisualizer } from './visualizers/MainGuardVisualizer';
import { SparseMatrixVisualizer } from './visualizers/SparseMatrixVisualizer';
import { OOPVisualizer } from './visualizers/OOPVisualizer';

interface CourseShellProps {
    courseManifest: Course;
}

export const CourseShell: React.FC<CourseShellProps> = ({ courseManifest }) => {
    const { unitId } = useParams();
    const navigate = useNavigate();
    const mainRef = useRef<HTMLDivElement>(null);
    const { currentLang } = useLanguageStore();
    
    // Derived state
    const activeUnitId = unitId || courseManifest.modules[0].units[0].id;
    const [pageData, setPageData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // Load content when unit changes
    useEffect(() => {
        if (!activeUnitId) return; 
        
        // Scroll to top
        if (mainRef.current) mainRef.current.scrollTo(0, 0);

        const load = async () => {
            setIsLoading(true);
            const data = await loadUnit(courseManifest.id, activeUnitId);
            setPageData(data);
            setIsLoading(false);
        };
        load();
    }, [activeUnitId, courseManifest.id]);

    // Redirect to first unit if no unit specified
    useEffect(() => {
        if (!unitId && courseManifest.modules.length > 0) {
            navigate(`/course/${courseManifest.id}/${courseManifest.modules[0].units[0].id}`, { replace: true });
        }
    }, [unitId, courseManifest, navigate]);

    return (
        <div className="h-screen bg-gray-50 flex overflow-hidden font-sans text-gray-900">
            <GlobalSidebar
                isOpen={isSidebarOpen}
                onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
                activePageId={activeUnitId}
                modules={courseManifest.modules}
                title={getLocalizedText(courseManifest.title, currentLang)}
                courseId={courseManifest.id}
            />

            <main className="flex-1 flex flex-col min-w-0 h-full relative">
                {/* Mobile Toggle */}
                {!isSidebarOpen && (
                   <button 
                     onClick={() => setIsSidebarOpen(true)}
                     className="md:hidden absolute top-4 left-4 z-50 p-2 bg-brand-dark text-white rounded-md shadow-lg"
                   >
                     <Bars3Icon className="w-6 h-6" />
                   </button>
                )}

                {isLoading ? (
                    <div className="flex-1 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    </div>
                ) : pageData ? (
                    <div className="flex-1 overflow-y-auto p-4 md:p-8" ref={mainRef}>
                        <div className="max-w-4xl mx-auto space-y-8">
                            <header className="mb-8">
                                <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                                    {getLocalizedText(pageData.title, currentLang)}
                                </h1>
                            </header>
                            
                            {pageData.blocks?.map((block: ContentBlock, idx: number) => (
                                <BlockRenderer key={idx} block={block} />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex-1 flex items-center justify-center text-gray-500">
                        Select a unit to start.
                    </div>
                )}
            </main>
        </div>
    );
};

// --- Block Rendering Logic ---

const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                pre: ({children}: any) => <>{children}</>,
                h1: ({node: _node, ..._props}) => <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-8 font-sans" {..._props} />,
                h2: ({node: _node, ..._props}) => <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-sans border-b pb-2 border-gray-200" {..._props} />,
                h3: ({node: _node, ..._props}) => <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3 font-sans" {..._props} />,
                p: ({node: _node, children, ...props}: any) => {
                    if (children && children.toString().includes('[[QUIZ_PLACEHOLDER]]')) {
                        return <QuizPlaceholder />;
                    }
                    return <p className="mb-4 leading-relaxed" {...props}>{children}</p>;
                },
                code: ({node: _node, className, children, ..._props}: any) => {
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
    
    if (block.type === 'quiz' && block.questions) {
        return <Quiz questions={block.questions} />;
    }
    if (block.type === 'interactive-list') return <InteractiveListVisualizer />;
    if (block.type === 'interactive-fstring') return <FStringVisualizer />;
    if (block.type === 'interactive-mainguard') return <MainGuardVisualizer />;
    if (block.type === 'interactive-sparse-matrix') return <SparseMatrixVisualizer />;
    if (block.type === 'interactive-oop') return <OOPVisualizer />;

    if (block.type === 'markdown' && block.content) {
        return (
            <div className="prose prose-slate prose-lg max-w-none font-serif mb-8 text-gray-800">
                <MarkdownRenderer content={getLocalizedText(block.content, currentLang)} />
            </div>
        );
    }

    if (block.type === 'exercise' && block.exerciseId) {
        const isCompleted = completedExercises[block.exerciseId!];
        const headerColor = isCompleted ? '#13B559' : '#D23D48';

        return (
            <div className="my-14 rounded-2xl shadow-xl overflow-hidden bg-white">
                <div className="flex flex-row items-center px-6 py-5 text-white" style={{ backgroundColor: headerColor }}>
                    <div className="mr-6 text-3xl opacity-90">
                        {/* Pencil Icon */}
                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 512 512"><path d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"></path></svg>
                    </div>
                    <div className="flex-1">
                        <div className="text-lg opacity-90 font-normal leading-tight mb-1">{t.exercise}</div>
                        <h3 className="text-2xl font-medium m-0 leading-tight">{getLocalizedText(block.title, currentLang)}</h3>
                    </div>
                    <div className="ml-4 flex flex-col text-right">
                        <span className="text-lg opacity-90">{t.points}:</span>
                        <div className="text-2xl font-bold leading-none mt-1">
                            {isCompleted ? "1" : "0"}<span className="text-xl mx-1 font-normal">/</span>1
                        </div>
                    </div>
                </div>
                {block.description && (
                    <div className="px-8 py-6 text-base text-gray-800 font-sans border-b border-gray-100 bg-white leading-relaxed">
                        <MarkdownRenderer content={getLocalizedText(block.description, currentLang)} />
                    </div>
                )}
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
