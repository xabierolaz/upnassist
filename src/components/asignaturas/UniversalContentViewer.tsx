/**
 * UniversalContentViewer - Viewer unificado para todo tipo de contenido
 * Versión 2026 - Clean Architecture
 */

import React, { lazy, Suspense, useState } from 'react';
import {
  DocumentTextIcon,
  FolderIcon,
  PlayCircleIcon,
  DocumentArrowDownIcon,
  LinkIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';
import type { 
  TeoriaContent, 
  PracticaContent, 
  LaboratorioContent,
  EvaluacionContent,
  RecursoItem,
  TipoContenido,
  EjercicioItem,
  QuizQuestion
} from '../../types/asignatura';
import { VirtualExerciseList } from '../common/VirtualList';

// Lazy loading de componentes pesados
const PyXomEnvironment = lazy(() => import('../pyxom/PyXomEnvironment'));

interface UniversalContentViewerProps {
  type: TipoContenido;
  content: TeoriaContent | PracticaContent | LaboratorioContent | EvaluacionContent | RecursoItem[] | null;
  onComplete?: (itemId?: string) => void;
}

export const UniversalContentViewer: React.FC<UniversalContentViewerProps> = ({
  type,
  content,
  onComplete
}) => {
  if (!content) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        <p>No hay contenido disponible para esta sección</p>
      </div>
    );
  }

  // Type guards o casting seguro basado en 'type'
  switch (type) {
    case 'teoria':
      return <TeoriaContentView content={content as TeoriaContent} onComplete={onComplete} />;
    
    case 'practica':
      return <PracticaContentView content={content as PracticaContent} />;
    
    case 'laboratorio':
      return <LaboratorioContentView content={content as LaboratorioContent} />;
    
    case 'evaluacion':
      return <EvaluacionContentView content={content as EvaluacionContent} onComplete={onComplete} />;
    
    case 'recursos':
      return <RecursosContentView recursos={content as RecursoItem[]} />;
    
    default:
      return null;
  }
};

// ========================================
// TEORIA CONTENT VIEW
// ========================================
const TeoriaContentView: React.FC<{ content: TeoriaContent; onComplete?: (itemId?: string) => void }> = ({ 
  content, 
  onComplete 
}) => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold mb-4">{content.titulo}</h2>
        {content.descripcion && (
          <p className="text-gray-700 mb-6">{content.descripcion}</p>
        )}

        {/* Conceptos Clave */}
        {content.conceptosClave && content.conceptosClave.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3 text-blue-800">Conceptos Clave</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.conceptosClave.map((concepto, idx) => (
                <div key={idx} className="bg-blue-50 p-4 rounded-md">
                  <span className="font-bold block text-blue-900">{concepto.termino}</span>
                  <span className="text-sm text-blue-800">{concepto.definicion}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Diapositivas */}
        {content.diapositivas && content.diapositivas.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">Material de Clase</h3>
            <div className="space-y-2">
              {content.diapositivas.map((diapositiva, idx) => (
                <a 
                  key={idx}
                  href={diapositiva.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 border rounded hover:bg-gray-50 transition-colors"
                  onClick={() => onComplete?.(diapositiva.url)}
                >
                  <DocumentTextIcon className="w-5 h-5 text-gray-500 mr-3" />
                  <span>{diapositiva.titulo}</span>
                  {diapositiva.paginaInicio && (
                    <span className="ml-auto text-xs text-gray-400">Pág. {diapositiva.paginaInicio}</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Resumen Markdown */}
        {content.resumen && (
          <div className="prose max-w-none mt-6 p-4 bg-gray-50 rounded border">
            <h3 className="text-lg font-semibold mb-2">Resumen</h3>
            <div className="whitespace-pre-wrap font-serif">{content.resumen}</div>
          </div>
        )}
      </div>
    </div>
  );
};

// ========================================
// PRACTICA CONTENT VIEW
// ========================================
const PracticaContentView: React.FC<{ content: PracticaContent }> = ({ 
  content
}) => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold">{content.titulo}</h2>
          {content.entregable && (
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
              Entregable
            </span>
          )}
        </div>
        
        <p className="text-gray-700 mb-6">{content.descripcion}</p>

        {content.fechaEntrega && (
          <div className="mb-6 p-3 bg-yellow-50 text-yellow-800 rounded-md text-sm border border-yellow-100">
            <strong>Fecha límite:</strong> {new Date(content.fechaEntrega).toLocaleDateString()}
          </div>
        )}

        {/* Lista de Ejercicios */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Ejercicios Propuestos</h3>
          {content.ejercicios.map((ej: EjercicioItem, idx: number) => (
            <div key={ej.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between mb-2">
                <h4 className="font-bold">Ejercicio {idx + 1}: {ej.titulo}</h4>
                <span className={`text-xs px-2 py-0.5 rounded-full capitalize ${
                  ej.dificultad === 'facil' ? 'bg-green-100 text-green-800' :
                  ej.dificultad === 'medio' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {ej.dificultad}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-3">{ej.enunciado}</p>
              {ej.puntos > 0 && (
                <div className="text-xs text-gray-500 text-right">
                  Valora: {ej.puntos} pts
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ========================================
// LABORATORIO CONTENT VIEW
// ========================================
const LaboratorioContentView: React.FC<{ content: LaboratorioContent; onComplete?: (itemId?: string) => void }> = ({ 
  content,
  onComplete
}) => {
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);

  // Adaptación de ejercicios para VirtualExerciseList
  const ejerciciosAdaptados = content.ejerciciosCompilador?.map((ej: any) => ({
    id: ej.id || String(Math.random()),
    title: ej.title || ej.titulo || 'Ejercicio sin título',
    description: ej.description || ej.enunciado || '',
    difficulty: (ej.difficulty || ej.dificultad || 'medium') as 'easy' | 'medium' | 'hard',
    status: 'not_started',
    points: ej.points || ej.puntos || 10
  })) || [];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold mb-2">{content.titulo}</h2>
        <p className="text-gray-600 mb-4">{content.descripcion}</p>
        
        {content.duracionEstimada && (
          <div className="text-sm text-gray-500 mb-6 flex items-center gap-2">
            <span className="font-semibold">Tiempo estimado:</span> {content.duracionEstimada} min
          </div>
        )}

        {/* PyXom Environment */}
        {content.tipo === 'pyxom' && ejerciciosAdaptados.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <CodeBracketIcon className="w-6 h-6 text-indigo-600" />
              <h3 className="text-lg font-semibold">Entorno de Programación Python</h3>
            </div>
            
            <div className="h-96 border rounded-lg bg-gray-50">
              {ejerciciosAdaptados.length > 0 ? (
                <VirtualExerciseList
                  exercises={ejerciciosAdaptados}
                  onExerciseClick={(ejercicio) => setSelectedExercise(ejercicio.id)}
                />
              ) : (
                <div className="p-4 text-center text-gray-500">No hay ejercicios configurados.</div>
              )}
            </div>
            
            {selectedExercise && (
              <div className="mt-6 border-t pt-6">
                <Suspense fallback={
                  <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                    <span className="ml-3 text-gray-600">Iniciando motor Python (Pyodide)...</span>
                  </div>
                }>
                  <PyXomEnvironment
                    exerciseId={selectedExercise}
                    onComplete={() => {
                      onComplete?.(selectedExercise);
                    }}
                  />
                </Suspense>
              </div>
            )}
          </div>
        )}

        {/* Proyecto */}
        {content.tipo === 'proyecto' && content.proyecto && (
          <div className="mt-6 border-t pt-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FolderIcon className="w-6 h-6 text-yellow-600" />
              {content.proyecto.titulo}
            </h3>
            <div className="prose max-w-none text-gray-700">
              <p>{content.proyecto.descripcion}</p>
              
              {content.proyecto.objetivos && (
                <>
                  <h4 className="font-semibold mt-4">Objetivos</h4>
                  <ul>
                    {content.proyecto.objetivos.map((obj, i) => <li key={i}>{obj}</li>)}
                  </ul>
                </>
              )}

              {content.proyecto.entregables && (
                <div className="mt-6 bg-yellow-50 p-4 rounded-md border border-yellow-100">
                  <h4 className="font-semibold text-yellow-900">Entregables Requeridos</h4>
                  <ul className="list-disc pl-5 mt-2">
                    {content.proyecto.entregables.map((ent, idx) => {
                      if (typeof ent === 'string') return <li key={idx}>{ent}</li>;
                      return (
                        <li key={idx}>
                          <span className="font-medium">{ent.nombre}</span>
                          <span className="text-gray-600 text-sm"> - {ent.descripcion} ({ent.formato})</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ========================================
// EVALUACION CONTENT VIEW
// ========================================
const EvaluacionContentView: React.FC<{ content: EvaluacionContent; onComplete?: (itemId?: string) => void }> = ({ 
  content,
  onComplete
}) => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold mb-4">{content.titulo}</h2>
        <div className="flex gap-4 text-sm text-gray-500 mb-6">
          <span className="bg-gray-100 px-2 py-1 rounded">Tipo: {content.tipo.toUpperCase()}</span>
          {content.duracionMinutos && <span>Duración: {content.duracionMinutos} min</span>}
        </div>

        {content.tipo === 'quiz' && content.preguntas && (
          <div className="space-y-6">
            {content.preguntas.map((p: QuizQuestion, idx: number) => (
              <div key={p.id} className="border p-4 rounded-lg">
                <p className="font-medium mb-3">{idx + 1}. {p.pregunta || p.question}</p>
                <div className="space-y-2">
                  {(p.opciones || p.options)?.map((opt, optIdx) => (
                    <div key={optIdx} className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded cursor-pointer border border-transparent hover:border-gray-200">
                      <div className="w-4 h-4 rounded-full border border-gray-400"></div>
                      <span>{opt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            <button 
              onClick={() => onComplete?.(content.id)}
              className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 font-medium"
            >
              Enviar Respuestas
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// ========================================
// RECURSOS CONTENT VIEW
// ========================================
const RecursosContentView: React.FC<{ recursos: RecursoItem[] }> = ({ recursos }) => {
  const recursosPorTipo = recursos.reduce((acc, recurso) => {
    const tipo = recurso.tipo || 'otros';
    if (!acc[tipo]) acc[tipo] = [];
    acc[tipo].push(recurso);
    return acc;
  }, {} as Record<string, RecursoItem[]>);

  const getIconForTipo = (tipo: string) => {
    switch (tipo) {
      case 'libro': return <DocumentTextIcon className="w-5 h-5" />;
      case 'video': return <PlayCircleIcon className="w-5 h-5" />;
      case 'enlace': 
      case 'link': return <LinkIcon className="w-5 h-5" />;
      case 'documento': 
      case 'pdf': return <DocumentArrowDownIcon className="w-5 h-5" />;
      default: return <FolderIcon className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-6">
      {Object.entries(recursosPorTipo).map(([tipo, recursosDelTipo]) => (
        <div key={tipo} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h4 className="font-bold text-lg mb-4 capitalize flex items-center gap-2">
            {getIconForTipo(tipo)}
            {tipo}s
          </h4>
          <div className="grid gap-3">
            {recursosDelTipo.map((recurso, index) => (
              <a
                key={index}
                href={recurso.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-blue-300 hover:shadow-sm transition-all group"
              >
                <div className="text-gray-400 group-hover:text-blue-500">
                  {getIconForTipo(tipo)}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 group-hover:text-blue-700">{recurso.titulo}</p>
                  {recurso.descripcion && (
                    <p className="text-sm text-gray-500 mt-1">{recurso.descripcion}</p>
                  )}
                </div>
                {recurso.obligatorio && (
                  <span className="px-2 py-1 text-xs bg-red-100 text-red-700 rounded font-medium">
                    Obligatorio
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UniversalContentViewer;