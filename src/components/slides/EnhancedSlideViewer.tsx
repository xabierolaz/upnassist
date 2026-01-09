import React, { useState, useEffect } from 'react';
import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  MagnifyingGlassPlusIcon,
  MagnifyingGlassMinusIcon,
  XMarkIcon,
  DocumentIcon,
  Squares2X2Icon,
  ArrowDownTrayIcon,
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon
} from '@heroicons/react/24/outline';

export interface SlideViewerProps {
  pdfUrl?: string;
  slides?: string[];  
  title?: string;
  currentTopic?: string;
  onClose?: () => void;
}

const EnhancedSlideViewer: React.FC<SlideViewerProps> = ({ 
  pdfUrl, 
  slides = [], 
  title = 'Visor de Diapositivas',
  currentTopic = '',
  onClose 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [zoom, setZoom] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [loadError, setLoadError] = useState(false);

  // Si se proporciona un pdfUrl, usarlo como única diapositiva
  const slideUrls = pdfUrl ? [pdfUrl] : slides;
  const totalSlides = slideUrls.length;

  // Manejo de teclas de navegación
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch(e.key) {
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case 'Escape':
          if (isFullscreen) {
            setIsFullscreen(false);
          } else if (onClose) {
            onClose();
          }
          break;
        case 'f':
        case 'F':
          toggleFullscreen();
          break;
        case '+':
        case '=':
          zoomIn();
          break;
        case '-':
        case '_':
          zoomOut();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, isFullscreen]);

  const goToNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
      setLoadError(false);
    }
  };

  const goToPrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setLoadError(false);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setLoadError(false);
    setShowThumbnails(false);
  };

  const zoomIn = () => {
    if (zoom < 200) {
      setZoom(zoom + 25);
    }
  };

  const zoomOut = () => {
    if (zoom > 50) {
      setZoom(zoom - 25);
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const downloadSlide = () => {
    const currentUrl = slideUrls[currentSlide];
    if (currentUrl) {
      const link = document.createElement('a');
      link.href = currentUrl;
      link.download = `${title}_slide_${currentSlide + 1}.pdf`;
      link.click();
    }
  };

  const handleIframeError = () => {
    setLoadError(true);
  };

  if (totalSlides === 0) {
    return (
      <div className="flex items-center justify-center h-96 bg-gray-50 rounded-lg">
        <div className="text-center">
          <DocumentIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No hay diapositivas disponibles</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${isFullscreen ? 'fixed inset-0 z-50' : 'relative'} bg-gray-900 flex flex-col`}>
      {/* Barra de herramientas */}
      <div className="bg-gray-800 text-white px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          {currentTopic && (
            <span className="text-sm text-gray-400">{currentTopic}</span>
          )}
          <span className="text-sm bg-gray-700 px-2 py-1 rounded">
            {currentSlide + 1} / {totalSlides}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Control de zoom */}
          <button
            onClick={zoomOut}
            className="p-2 hover:bg-gray-700 rounded transition-colors"
            title="Reducir zoom"
          >
            <MagnifyingGlassMinusIcon className="w-5 h-5" />
          </button>
          <span className="text-sm w-12 text-center">{zoom}%</span>
          <button
            onClick={zoomIn}
            className="p-2 hover:bg-gray-700 rounded transition-colors"
            title="Aumentar zoom"
          >
            <MagnifyingGlassPlusIcon className="w-5 h-5" />
          </button>
          
          {/* Botones de acción */}
          <div className="ml-4 flex items-center gap-2">
            <button
              onClick={() => setShowThumbnails(!showThumbnails)}
              className="p-2 hover:bg-gray-700 rounded transition-colors"
              title="Ver miniaturas"
            >
              <Squares2X2Icon className="w-5 h-5" />
            </button>
            <button
              onClick={downloadSlide}
              className="p-2 hover:bg-gray-700 rounded transition-colors"
              title="Descargar"
            >
              <ArrowDownTrayIcon className="w-5 h-5" />
            </button>
            <button
              onClick={toggleFullscreen}
              className="p-2 hover:bg-gray-700 rounded transition-colors"
              title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
            >
              {isFullscreen ? (
                <ArrowsPointingInIcon className="w-5 h-5" />
              ) : (
                <ArrowsPointingOutIcon className="w-5 h-5" />
              )}
            </button>
            {onClose && (
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-700 rounded transition-colors ml-2"
                title="Cerrar"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 flex overflow-hidden">
        {/* Panel de miniaturas */}
        {showThumbnails && (
          <div className="w-48 bg-gray-800 p-2 overflow-y-auto">
            <div className="space-y-2">
              {slideUrls.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-full p-2 rounded transition-colors ${
                    currentSlide === index
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <DocumentIcon className="w-6 h-6 mx-auto mb-1" />
                  <span className="text-xs">Diapositiva {index + 1}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Visor de PDF */}
        <div className="flex-1 relative bg-gray-100">
          {loadError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <DocumentIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">No se pudo cargar el PDF</p>
                <button
                  onClick={() => setLoadError(false)}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Reintentar
                </button>
              </div>
            </div>
          ) : (
            <iframe
              src={`${slideUrls[currentSlide]}#zoom=${zoom}`}
              className="w-full h-full"
              title={`Slide ${currentSlide + 1}`}
              onError={handleIframeError}
            />
          )}

          {/* Controles de navegación */}
          {!loadError && totalSlides > 1 && (
            <>
              <button
                onClick={goToPrevious}
                disabled={currentSlide === 0}
                className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all ${
                  currentSlide === 0
                    ? 'bg-gray-400 cursor-not-allowed opacity-50'
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                }`}
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                disabled={currentSlide === totalSlides - 1}
                className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all ${
                  currentSlide === totalSlides - 1
                    ? 'bg-gray-400 cursor-not-allowed opacity-50'
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                }`}
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Barra de estado */}
      <div className="bg-gray-800 text-white px-4 py-1 text-sm flex justify-between">
        <div>
          Usa las flechas del teclado para navegar • F para pantalla completa • +/- para zoom
        </div>
        <div className="text-gray-400">
          ESC para {isFullscreen ? 'salir de pantalla completa' : 'cerrar'}
        </div>
      </div>
    </div>
  );
};

export default EnhancedSlideViewer;
