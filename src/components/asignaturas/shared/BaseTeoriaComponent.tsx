import React from 'react';
import ListaContenidos, { type ContenidoItem } from '../ListaContenidos';

interface BaseTeoriaProps {
  temas: ContenidoItem[];
  asignatura: string;
  noticeContent?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Componente base reutilizable para secciones de teoría
 * Elimina duplicidad entre diferentes asignaturas
 */
export default function BaseTeoriaComponent({ 
  temas, 
  // asignatura, // Unused
  noticeContent,
  children 
}: BaseTeoriaProps) {
  return (
    <div className="space-y-8">
      <ListaContenidos 
        titulo="Temario" 
        items={temas} 
      />
      
      {noticeContent && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          {noticeContent}
        </div>
      )}
      
      {children}
    </div>
  );
}