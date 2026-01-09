import { useState } from 'react';
import { 
  DocumentIcon, 
  FolderOpenIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  PresentationChartBarIcon,
  EyeIcon,
  ArrowDownTrayIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import EnhancedSlideViewer from './EnhancedSlideViewer';

interface Slide {
  title: string;
  path: string;
  type: 'pdf' | 'pptx';
}

interface Topic {
  name: string;
  slides: Slide[];
}

export interface SlideViewerProps {
  pdfUrl?: string;
  title?: string;
  onClose?: () => void;
}

// Estructura de transparencias basada en los archivos encontrados
const transparenciasData: Topic[] = [
  {
    name: 'Tema 0: Presentación',
    slides: [
      { title: 'Presentación del curso', path: '/slides/Tema 0. Presentación.pdf', type: 'pdf' }
    ]
  },
  {
    name: 'Tema 1: Panorámica',
    slides: [
      { title: 'Diapositivas Parte A', path: '/slides/Tema 1. Panorámica. Diapos. A.pdf', type: 'pdf' },
      { title: 'Diapositivas Parte B', path: '/slides/Tema 1. Panorámica. Diapos. B.pdf', type: 'pdf' }
    ]
  },
  {
    name: 'Tema 2: Requisitos',
    slides: [
      { title: 'Diapositivas', path: '/slides/Tema 2. Requisitos. Diapos.pdf', type: 'pdf' }
    ]
  },
  {
    name: 'Tema 3: Análisis',
    slides: [
      { title: 'Diapositivas', path: '/slides/Tema 3. Análisis. Diapos.pdf', type: 'pdf' }
    ]
  },
  {
    name: 'Tema 4: Diseño',
    slides: [
      { title: 'Diapositivas', path: '/slides/Tema 4. Diseño. Diapos.pdf', type: 'pdf' }
    ]
  },
  {
    name: 'Tema 5: Construcción',
    slides: [
      { title: 'Diapositivas', path: '/slides/Tema 5. Construcción. Diapos.pdf', type: 'pdf' }
    ]
  },
  {
    name: 'Tema 6: Calidad del Software',
    slides: [
      { title: 'Diapositivas', path: '/slides/Tema 6. Calidad del Software. Diapos.pdf', type: 'pdf' }
    ]
  },
  {
    name: 'Tema 7: Mantenimiento',
    slides: [
      { title: 'Diapositivas', path: '/slides/Tema 7. Mantenimiento. Diapos.pdf', type: 'pdf' }
    ]
  },
  {
    name: 'Tema 8: Gestión de Proyectos',
    slides: [
      { title: 'Diapositivas', path: '/slides/Tema 8. Gestión de Proyectos. Diapos.pdf', type: 'pdf' }
    ]
  },
  {
    name: 'Tema 9: Metodologías Ágiles',
    slides: [
      { title: 'Diapositivas', path: '/slides/Tema 9. Metodologías Ágiles. Diapos.pdf', type: 'pdf' }
    ]
  }
];

const SlidesViewer: React.FC<SlideViewerProps> = ({ pdfUrl, title, onClose }) => {
  const [expandedTopics, setExpandedTopics] = useState<number[]>([]);
  const [selectedSlide, setSelectedSlide] = useState<Slide | null>(null);
  const [showViewer, setShowViewer] = useState(false);

  // Si se proporciona un pdfUrl directamente, mostrarlo
  if (pdfUrl) {
    return (
      <EnhancedSlideViewer 
        pdfUrl={pdfUrl}
        title={title || 'Visor de PDF'}
        onClose={onClose}
      />
    );
  }

  const toggleTopic = (index: number) => {
    setExpandedTopics(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleViewSlide = (slide: Slide) => {
    setSelectedSlide(slide);
    setShowViewer(true);
  };

  const handleDownloadSlide = (slide: Slide) => {
    const link = document.createElement('a');
    link.href = slide.path;
    link.download = slide.title + '.pdf';
    link.click();
  };

  const handleCloseViewer = () => {
    setShowViewer(false);
    setSelectedSlide(null);
  };

  if (showViewer && selectedSlide) {
    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-75">
        <div className="relative w-full h-full">
          <button
            onClick={handleCloseViewer}
            className="absolute top-4 right-4 z-10 p-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
          <EnhancedSlideViewer
            pdfUrl={selectedSlide.path}
            title={selectedSlide.title}
            onClose={handleCloseViewer}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <PresentationChartBarIcon className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-800">
            Transparencias del Curso
          </h2>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          Accede a todas las presentaciones y materiales de clase
        </p>
      </div>

      <div className="p-6">
        <div className="space-y-2">
          {transparenciasData.map((topic, topicIndex) => (
            <div key={topicIndex} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleTopic(topicIndex)}
                className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-3">
                  <FolderOpenIcon className="w-5 h-5 text-gray-500" />
                  <span className="font-medium text-gray-700">{topic.name}</span>
                  <span className="text-sm text-gray-500">
                    ({topic.slides.length} {topic.slides.length === 1 ? 'archivo' : 'archivos'})
                  </span>
                </div>
                {expandedTopics.includes(topicIndex) ? (
                  <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronRightIcon className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {expandedTopics.includes(topicIndex) && (
                <div className="bg-white border-t border-gray-200">
                  {topic.slides.map((slide, slideIndex) => (
                    <div
                      key={slideIndex}
                      className="px-4 py-3 hover:bg-gray-50 flex items-center justify-between border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex items-center gap-3">
                        <DocumentIcon className="w-5 h-5 text-red-500" />
                        <div>
                          <p className="text-sm font-medium text-gray-700">
                            {slide.title}
                          </p>
                          <p className="text-xs text-gray-500">
                            Formato: {slide.type.toUpperCase()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleViewSlide(slide)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                          title="Ver presentación"
                        >
                          <EyeIcon className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDownloadSlide(slide)}
                          className="p-2 text-green-600 hover:bg-green-50 rounded transition-colors"
                          title="Descargar"
                        >
                          <ArrowDownTrayIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {transparenciasData.length === 0 && (
          <div className="text-center py-8">
            <DocumentIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">No hay transparencias disponibles</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SlidesViewer;
