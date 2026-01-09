import React from 'react';
import type { ComponentRegistry } from '../../types/asignatura';

// Registro centralizado de componentes interactivos por asignatura
// Mapea strings (IDs de componentes en JSON) a componentes React reales

export const componentRegistryInstance: ComponentRegistry = {
  // Aquí se registrarán los componentes específicos de las asignaturas activas
  // Ejemplo: 'TimelineIS': TimelineIS, 
};

export const getComponent = (componentName: string): React.ComponentType<any> | null => {
  return componentRegistryInstance[componentName] || null;
};

// Re-exportar para compatibilidad si alguien lo importaba por defecto
export default componentRegistryInstance;
