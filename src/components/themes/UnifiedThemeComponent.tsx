import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpenIcon, 
  BeakerIcon, 
  ClipboardDocumentCheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DocumentArrowDownIcon
} from '@heroicons/react/24/outline';

export interface ThemeSection {
  id: string;
  title: string;
  icon?: React.ComponentType<any>;
  content?: React.ReactNode;
  type?: 'teoria' | 'ejercicios' | 'quiz' | 'recursos';
}

export interface ThemeConfig {
  id: string;
  subjectId: string;
  title: string;
  description: string;
  modulePreset?: string;
  quizData?: any;
  pdfPath?: string;
  exercises?: any[];
  navigationPrev?: {
    path: string;
    label: string;
  };
  navigationNext?: {
    path: string;
    label: string;
  };
  sections: ThemeSection[];
}

interface UnifiedThemeComponentProps {
  config: ThemeConfig;
}

const UnifiedThemeComponent: React.FC<UnifiedThemeComponentProps> = ({ config }) => {
  const [activeSection, setActiveSection] = useState<string>(config.sections[0]?.id || '');
  
  const getDefaultIcon = (type?: string) => {
    switch(type) {
      case 'ejercicios':
        return BeakerIcon;
      case 'quiz':
        return ClipboardDocumentCheckIcon;
      case 'recursos':
        return DocumentArrowDownIcon;
      default:
        return BookOpenIcon;
    }
  };

  const currentSection = config.sections.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold mb-2">{config.title}</h1>
          <p className="text-blue-100">{config.description}</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {config.navigationPrev ? (
              <Link 
                to={config.navigationPrev.path}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ChevronLeftIcon className="h-5 w-5 mr-1" />
                {config.navigationPrev.label}
              </Link>
            ) : <div />}
            
            {config.pdfPath && (
              <a 
                href={config.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
              >
                <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
                Descargar PDF
              </a>
            )}
            
            {config.navigationNext ? (
              <Link 
                to={config.navigationNext.path}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                {config.navigationNext.label}
                <ChevronRightIcon className="h-5 w-5 ml-1" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar with sections */}
          <aside className="lg:w-64">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="font-semibold text-gray-900 mb-3">Secciones</h2>
              <nav className="space-y-1">
                {config.sections.map((section) => {
                  const Icon = section.icon || getDefaultIcon(section.type);
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                        activeSection === section.id
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="h-5 w-5 mr-2" />
                      <span className="text-left">{section.title}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {currentSection ? (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {currentSection.title}
                  </h2>
                  <div className="prose max-w-none">
                    {currentSection.content || (
                      <div className="text-center py-12 text-gray-500">
                        <BookOpenIcon className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                        <p>Contenido en desarrollo para esta sección</p>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <p>Selecciona una sección para comenzar</p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default UnifiedThemeComponent;