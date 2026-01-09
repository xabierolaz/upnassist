import { useState } from 'react';
import { 
  CodeBracketIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
  // XMarkIcon
} from '@heroicons/react/24/outline';
import { PyXomEnvironment } from './PyXomEnvironment';
import type { PyXomExercise } from './types';

interface ResizablePyXomEnvironmentProps {
  exercise: PyXomExercise;
  defaultWidth?: 'small' | 'medium' | 'large' | 'full';
  onComplete?: (results: any[]) => void;
  onProgress?: (progress: number) => void;
}

export default function ResizablePyXomEnvironment({ 
  exercise, 
  defaultWidth = 'medium',
  onComplete,
  onProgress 
}: ResizablePyXomEnvironmentProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [width, setWidth] = useState<'small' | 'medium' | 'large' | 'full'>(defaultWidth);
  const [isFloating, setIsFloating] = useState(false);

  const getWidthClass = () => {
    if (isCollapsed) return 'w-12';
    switch (width) {
      case 'small': return 'w-1/4';
      case 'medium': return 'w-1/2';
      case 'large': return 'w-3/4';
      case 'full': return 'w-full';
      default: return 'w-1/2';
    }
  };

  const containerClass = isFloating
    ? 'fixed top-20 right-4 z-50 bg-white rounded-lg shadow-2xl border-2 border-gray-200'
    : `${getWidthClass()} transition-all duration-300 ease-in-out`;

  return (
    <div className={containerClass}>
      {/* Barra de control */}
      <div className="bg-gray-100 border-b border-gray-200 px-3 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <CodeBracketIcon className="w-5 h-5 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">
            {isCollapsed ? '' : 'Editor Python (PyXom)'}
          </span>
        </div>
        
        <div className="flex items-center space-x-1">
          {/* Controles de ancho (solo cuando no está colapsado ni flotante) */}
          {!isCollapsed && !isFloating && (
            <div className="flex items-center space-x-1 border-r border-gray-300 pr-2">
              <button
                onClick={() => setWidth('small')}
                className={`px-2 py-1 text-xs rounded ${
                  width === 'small' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
                }`}
                title="Ancho pequeño"
              >
                S
              </button>
              <button
                onClick={() => setWidth('medium')}
                className={`px-2 py-1 text-xs rounded ${
                  width === 'medium' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
                }`}
                title="Ancho medio"
              >
                M
              </button>
              <button
                onClick={() => setWidth('large')}
                className={`px-2 py-1 text-xs rounded ${
                  width === 'large' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
                }`}
                title="Ancho grande"
              >
                L
              </button>
              <button
                onClick={() => setWidth('full')}
                className={`px-2 py-1 text-xs rounded ${
                  width === 'full' ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
                }`}
                title="Ancho completo"
              >
                F
              </button>
            </div>
          )}

          {/* Controles principales */}
          <div className="flex items-center space-x-1">
            {/* Botón flotante/anclado */}
            <button
              onClick={() => setIsFloating(!isFloating)}
              className="p-1 hover:bg-gray-300 rounded"
              title={isFloating ? 'Anclar' : 'Hacer flotante'}
            >
              {isFloating ? (
                <ArrowsPointingInIcon className="w-4 h-4" />
              ) : (
                <ArrowsPointingOutIcon className="w-4 h-4" />
              )}
            </button>

            {/* Botón colapsar/expandir */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-1 hover:bg-gray-300 rounded"
              title={isCollapsed ? 'Expandir' : 'Colapsar'}
            >
              {isCollapsed ? (
                <ChevronRightIcon className="w-4 h-4" />
              ) : (
                <ChevronLeftIcon className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Contenido del editor */}
      {!isCollapsed && (
        <div className={isFloating ? 'h-96 w-80' : 'h-auto'}>
          <PyXomEnvironment 
            exerciseId={exercise.id}
            exercise={exercise}
            onComplete={onComplete}
            onProgress={onProgress}
          />
        </div>
      )}
    </div>
  );
}
