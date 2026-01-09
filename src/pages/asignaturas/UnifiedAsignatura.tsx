/**
 * Página unificada para todas las asignaturas
 * Usa UniversalAsignaturaLayout para renderizar cualquier asignatura
 */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UniversalAsignaturaLayoutEnhanced from '../../components/asignaturas/UniversalAsignaturaLayoutEnhanced';
import type { AsignaturaContent } from '../../types/asignatura';
import { LoadingSpinner } from '../../components/common/LoadingSpinner';
import ErrorBoundary from '../../components/ErrorBoundary';

// Import dinámico de contenido de asignaturas
const loadAsignaturaContent = async (codigo: string): Promise<AsignaturaContent | null> => {
  try {
    switch (codigo) {
      case '509102':
      case 'informatica':
        const { informaticaContent } = await import('../../content/asignaturas/informatica');
        return informaticaContent;
      
      case '506108':
      case 'estructura-datos':
        const { estructuraDatosContent } = await import('../../content/asignaturas/estructura-datos');
        return estructuraDatosContent;
      
      default:
        console.error(`Asignatura no encontrada: ${codigo}`);
        return null;
    }
  } catch (error) {
    console.error(`Error cargando asignatura ${codigo}:`, error);
    return null;
  }
};

const UnifiedAsignatura: React.FC = () => {
  const { codigo } = useParams<{ codigo: string }>();
  const [content, setContent] = useState<AsignaturaContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      if (!codigo) {
        setError('Código de asignatura no especificado');
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      const loadedContent = await loadAsignaturaContent(codigo);
      
      if (loadedContent) {
        setContent(loadedContent);
      } else {
        setError(`No se pudo cargar la asignatura: ${codigo}`);
      }
      
      setLoading(false);
    };

    loadContent();
  }, [codigo]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-600">{error || 'Asignatura no encontrada'}</p>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <UniversalAsignaturaLayoutEnhanced 
        codigo={codigo}
        content={content}
      />
    </ErrorBoundary>
  );
};

export default UnifiedAsignatura;