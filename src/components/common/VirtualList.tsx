/**
 * Componente de lista virtualizada para mejorar performance
 * Usa react-window para renderizar solo los elementos visibles
 */

import type { ReactElement } from 'react';
import { FixedSizeList, VariableSizeList } from 'react-window';
import type { ListChildComponentProps } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

interface VirtualListProps<T> {
  items: T[];
  itemHeight?: number | ((index: number) => number);
  renderItem: (item: T, index: number) => ReactElement;
  overscan?: number;
  className?: string;
  loading?: boolean;
  emptyMessage?: string;
}

export function VirtualList<T>({
  items,
  itemHeight = 50,
  renderItem,
  overscan = 5,
  className = '',
  loading = false,
  emptyMessage = 'No hay elementos para mostrar'
}: VirtualListProps<T>) {
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <span className="ml-3">Cargando...</span>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        {emptyMessage}
      </div>
    );
  }

  const Row = ({ index, style }: ListChildComponentProps) => (
    <div style={style}>
      {renderItem(items[index], index)}
    </div>
  );

  // Si itemHeight es una función, usar VariableSizeList
  if (typeof itemHeight === 'function') {
    return (
      <div className={`h-full w-full ${className}`}>
        <AutoSizer>
          {({ height, width }) => (
            <VariableSizeList
              height={height}
              itemCount={items.length}
              itemSize={itemHeight}
              width={width}
              overscanCount={overscan}
            >
              {Row}
            </VariableSizeList>
          )}
        </AutoSizer>
      </div>
    );
  }

  // Si itemHeight es un número, usar FixedSizeList (más eficiente)
  return (
    <div className={`h-full w-full ${className}`}>
      <AutoSizer>
        {({ height, width }) => (
          <FixedSizeList
            height={height}
            itemCount={items.length}
            itemSize={itemHeight}
            width={width}
            overscanCount={overscan}
          >
            {Row}
          </FixedSizeList>
        )}
      </AutoSizer>
    </div>
  );
}

// Componente especializado para listas de mensajes de chat
export function VirtualChatList({
  messages,
  renderMessage,
  className = ''
}: {
  messages: any[];
  renderMessage: (message: any, index: number) => ReactElement;
  className?: string;
}) {
  // Los mensajes de chat tienen altura variable
  const getItemSize = (index: number) => {
    const message = messages[index];
    // Estimar altura basado en longitud del mensaje
    const baseHeight = 60;
    const charsPerLine = 50;
    const lines = Math.ceil((message.content?.length || 0) / charsPerLine);
    return baseHeight + (lines - 1) * 20;
  };

  return (
    <VirtualList
      items={messages}
      itemHeight={getItemSize}
      renderItem={renderMessage}
      className={className}
      emptyMessage="No hay mensajes aún"
    />
  );
}

// Componente especializado para listas de ejercicios
export function VirtualExerciseList({
  exercises,
  onExerciseClick,
  className = ''
}: {
  exercises: any[];
  onExerciseClick?: (exercise: any) => void;
  className?: string;
}) {
  const renderExercise = (exercise: any) => (
    <div
      key={exercise.id}
      className="p-4 bg-white border-b hover:bg-gray-50 cursor-pointer"
      onClick={() => onExerciseClick?.(exercise)}
    >
      <h4 className="font-semibold">{exercise.title || exercise.titulo}</h4>
      <p className="text-sm text-gray-600 mt-1">
        {exercise.description || exercise.descripcion}
      </p>
      <div className="flex items-center gap-2 mt-2">
        <span className={`px-2 py-1 text-xs rounded ${
          exercise.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
          exercise.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
          'bg-red-100 text-red-700'
        }`}>
          {exercise.difficulty}
        </span>
        {exercise.points && (
          <span className="text-sm text-gray-500">{exercise.points} pts</span>
        )}
      </div>
    </div>
  );

  return (
    <VirtualList
      items={exercises}
      itemHeight={120} // Altura fija para ejercicios
      renderItem={renderExercise}
      className={className}
      emptyMessage="No hay ejercicios disponibles"
    />
  );
}