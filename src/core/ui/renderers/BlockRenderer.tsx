import React from 'react';
import { ContentBlock } from '../../types';
import { useLanguageStore } from '../../store/languageStore';
import { useProgressStore } from '../../store/progressStore';
import { getLocalizedText } from '../../../utils/localization';
import { Quiz } from '../blocks/Quiz';
import { PyXomEnvironment } from '../../engine/python/PyXomEnvironment';
import { MarkdownRenderer } from './MarkdownRenderer';

// Visualizers
import { InteractiveListVisualizer } from '../visualizers/InteractiveListVisualizer';
import { FStringVisualizer } from '../visualizers/FStringVisualizer';
import { MainGuardVisualizer } from '../visualizers/MainGuardVisualizer';
import { SparseMatrixVisualizer } from '../visualizers/SparseMatrixVisualizer';
import { OOPVisualizer } from '../visualizers/OOPVisualizer';

interface BlockRendererProps {
    block: ContentBlock;
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({ block }) => {
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
