import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams, useNavigate } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { loadUnit } from '../loader';
import { useLanguageStore } from '../store/languageStore';
import { Course, ContentBlock, CoursePage } from '../types';
import { getLocalizedText } from '../../utils/localization';
import { GlobalSidebar } from './common/GlobalSidebar';
import { TopBar } from './blocks/TopBar';
import { BlockRenderer } from './renderers/BlockRenderer';

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
    const [pageData, setPageData] = useState<CoursePage | null>(null);
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
            setPageData(data || null);
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

            <main className="flex-1 flex flex-col min-w-0 h-full relative overflow-hidden">
                <TopBar />
                
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
                        <div className="max-w-4xl mx-auto space-y-8 pb-20">
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
