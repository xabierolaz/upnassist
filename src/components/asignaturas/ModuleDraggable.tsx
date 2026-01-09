import React from 'react';

interface ModuleDraggableProps {
  module?: any;
  children?: React.ReactNode;
  [key: string]: any;
}

/**
 * TODO: Implementar componente de módulo arrastrable
 * Stub temporal para permitir compilación
 */
const ModuleDraggable: React.FC<ModuleDraggableProps> = ({ children }) => {
  return (
    <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg cursor-move">
      <div className="text-gray-500 text-center mb-2">
        [Módulo Arrastrable - Por Implementar]
      </div>
      {children}
    </div>
  );
};

export default ModuleDraggable;
