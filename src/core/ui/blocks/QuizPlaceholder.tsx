import React from 'react';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

export const QuizPlaceholder: React.FC = () => {
  return (
    <div className="my-8 p-6 bg-purple-50 border border-purple-100 rounded-xl shadow-sm flex items-start gap-4">
        <div className="flex-shrink-0">
            <DocumentTextIcon className="w-8 h-8 text-purple-600" />
        </div>
        <div>
            <h4 className="font-bold text-purple-900 mb-1">Cuestionario Teórico</h4>
            <p className="text-purple-800 text-sm">
                En la plataforma original, aquí hay un cuestionario de opción múltiple para verificar tu comprensión.
                <br/>
                <span className="italic text-purple-600 text-xs mt-2 block">
                    (Esta funcionalidad interactiva está en desarrollo para UpnAssist 2026)
                </span>
            </p>
        </div>
    </div>
  );
};
