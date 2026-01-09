/**
 * Layout Universal de Asignaturas - Versión Pyxom Pura
 * Renderiza el contenido estático definido en los archivos de contenido.
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  BookOpenIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';
import type {
  AsignaturaContent,
  TemaAsignatura,
  TipoContenido
} from '../../types/asignatura';
import type { AsignaturaMetadata } from '../../types/asignaturaMetadata';
import UniversalContentViewer from './UniversalContentViewer';
import { PyXomEnvironment } from '../pyxom/PyXomEnvironment';

interface UniversalAsignaturaLayoutEnhancedProps {
  codigo?: string;
  metadata?: AsignaturaMetadata;
  content: AsignaturaContent;
  // Props de progreso ignoradas en versión estática
  progreso?: any[];
  onProgresoUpdate?: (temaId: string, tipo: TipoContenido, itemId?: string) => void;
}

const UniversalAsignaturaLayoutEnhanced: React.FC<UniversalAsignaturaLayoutEnhancedProps> = ({
  content
}) => {
  const navigate = useNavigate();
  
  // Estados
  const [temaSeleccionado, setTemaSeleccionado] = useState<TemaAsignatura | null>(null);
  const [ejercicioSeleccionado, setEjercicioSeleccionado] = useState<string | null>(null);
  const [sidebarColapsado, setSidebarColapsado] = useState(false);

  // Inicializar tema seleccionado
  useEffect(() => {
    if (content.temas.length > 0 && !temaSeleccionado) {
      setTemaSeleccionado(content.temas[0]);
    }
  }, [content.temas, temaSeleccionado]);

  // Resetear ejercicio al cambiar de tema
  useEffect(() => {
    setEjercicioSeleccionado(null);
  }, [temaSeleccionado]);

  const handleTemaChange = (tema: TemaAsignatura) => {
    setTemaSeleccionado(tema);
    setEjercicioSeleccionado(null);
  };

  const handleEjercicioSelect = (ejercicioId: string) => {
    setEjercicioSeleccionado(ejercicioId);
  };

  if (!temaSeleccionado) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        <p>Selecciona un tema para comenzar</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30 h-16 flex items-center px-6">
        <button
          onClick={() => navigate('/upnassist/dashboard')}
          className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </button>
        <div>
          <h1 className="text-lg font-bold text-gray-900">{content.metadata.nombre}</h1>
          <p className="text-xs text-gray-500">{content.metadata.codigo}</p>
        </div>
      </header>

      <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
        {/* Sidebar de temas */}
        <aside className={`${sidebarColapsado ? 'w-16' : 'w-72'} bg-gray-50 border-r border-gray-200 transition-all duration-300 flex flex-col`}>
          <div className="p-4 flex justify-between items-center border-b border-gray-200">
            <h2 className={`font-semibold text-gray-700 text-sm uppercase tracking-wide ${sidebarColapsado ? 'hidden' : ''}`}>
              Temario
            </h2>
            <button
              onClick={() => setSidebarColapsado(!sidebarColapsado)}
              className="p-1 hover:bg-gray-200 rounded text-gray-500"
            >
              {sidebarColapsado ? '→' : '←'}
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {content.temas.map((tema) => (
              <div key={tema.id}>
                <button
                  onClick={() => handleTemaChange(tema)}
                  className={`w-full text-left p-3 rounded-md transition-all flex items-center gap-3 ${
                    temaSeleccionado?.id === tema.id && !ejercicioSeleccionado
                      ? 'bg-white text-blue-700 shadow-sm border border-gray-200 font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  title={sidebarColapsado ? tema.titulo : undefined}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
                    {tema.numero}
                  </div>
                  {!sidebarColapsado && (
                    <span className="text-sm truncate">{tema.titulo}</span>
                  )}
                </button>
                
                {/* Lista de ejercicios del tema */}
                {!sidebarColapsado && temaSeleccionado?.id === tema.id && tema.laboratorio?.ejerciciosCompilador && (
                  <div className="ml-9 mt-1 space-y-1 border-l-2 border-gray-200 pl-2">
                    {tema.laboratorio.ejerciciosCompilador.map((ejercicio) => (
                      <button
                        key={ejercicio.id}
                        onClick={() => handleEjercicioSelect(ejercicio.id)}
                        className={`w-full text-left py-1.5 px-2 rounded text-xs transition-colors flex items-center gap-2 ${
                          ejercicioSeleccionado === ejercicio.id
                            ? 'bg-blue-50 text-blue-700 font-medium'
                            : 'text-gray-500 hover:text-gray-900'
                        }`}
                      >
                        <CodeBracketIcon className="w-3 h-3" />
                        <span className="truncate">{ejercicio.title || ejercicio.titulo}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* Área principal */}
        <main className="flex-1 overflow-y-auto bg-white">
          {ejercicioSeleccionado ? (
            // Vista de Ejercicio (PyXom)
            <div className="h-full flex flex-col">
              <PyXomEnvironment
                exerciseId={ejercicioSeleccionado}
              />
            </div>
          ) : (
            // Vista de Teoría (Resumen del tema)
            <div className="p-8 max-w-4xl mx-auto">
              <div className="mb-8 pb-4 border-b border-gray-100">
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Tema {temaSeleccionado.numero}</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-1">{temaSeleccionado.titulo}</h2>
                <p className="text-lg text-gray-600 mt-4 leading-relaxed">{temaSeleccionado.descripcion}</p>
              </div>
              
              <div className="grid gap-8">
                {temaSeleccionado.teoria && (
                  <section>
                    <div className="flex items-center gap-2 mb-4 text-gray-900">
                      <BookOpenIcon className="w-6 h-6" />
                      <h3 className="text-xl font-bold">Material de Estudio</h3>
                    </div>
                    <UniversalContentViewer
                      content={temaSeleccionado.teoria}
                      type="teoria"
                    />
                  </section>
                )}

                {temaSeleccionado.practica && (
                  <section>
                    <h3 className="text-xl font-bold mb-4">Práctica</h3>
                    <UniversalContentViewer
                      content={temaSeleccionado.practica}
                      type="practica"
                    />
                  </section>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default UniversalAsignaturaLayoutEnhanced;
