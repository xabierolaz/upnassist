import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { QuizPlaceholder } from '../blocks/QuizPlaceholder';

export const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
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
