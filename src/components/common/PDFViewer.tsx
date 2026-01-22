import React from 'react';
import { useLanguageStore } from '../../stores/languageStore';

interface PDFViewerProps {
    src: string;
    title?: { ENG: string; CAS: string; EUS: string };
}

export const PDFViewer: React.FC<PDFViewerProps> = ({ src, title }) => {
    const { currentLang } = useLanguageStore();

    const displayTitle = title ? title[currentLang] : (currentLang === 'EUS' ? 'Dokumentua' : currentLang === 'CAS' ? 'Documento' : 'Document');

    return (
        <div className="my-10 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden flex flex-col">
            <div className="bg-gray-50 p-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-bold text-gray-700 text-lg flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                    {displayTitle}
                </h3>
                <div className="flex gap-2">
                    <a 
                        href={src} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs bg-white border border-gray-300 px-3 py-1.5 rounded hover:bg-gray-50 transition-colors font-medium flex items-center gap-1 shadow-sm"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        {currentLang === 'EUS' ? 'Pantaila osoa' : currentLang === 'CAS' ? 'Pantalla completa' : 'Full screen'}
                    </a>
                    <a 
                        href={src} 
                        download
                        className="text-xs bg-red-600 text-white px-3 py-1.5 rounded hover:bg-red-700 transition-colors font-medium flex items-center gap-1 shadow-sm"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                        {currentLang === 'EUS' ? 'Deskargatu' : currentLang === 'CAS' ? 'Descargar' : 'Download'}
                    </a>
                </div>
            </div>
            <div className="w-full h-[600px] bg-gray-100">
                <iframe 
                    src={`${src}#toolbar=0&navpanes=0`} 
                    className="w-full h-full border-none"
                    title={displayTitle}
                />
            </div>
            <div className="p-3 bg-gray-50 border-t border-gray-200 text-center">
                <p className="text-xs text-gray-500 italic">
                    {currentLang === 'EUS' ? 'Erabili goiko botoiak dokumentua deskargatzeko edo pantaila osoan ikusteko.' : 
                     currentLang === 'CAS' ? 'Usa los botones superiores para descargar o ver en pantalla completa.' : 
                     'Use the buttons above to download or view in full screen.'}
                </p>
            </div>
        </div>
    );
};
