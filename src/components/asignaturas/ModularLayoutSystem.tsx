/**
 * Sistema Modular de Layout para Asignaturas
 * Permite organizar el contenido en módulos reordenables y redimensionables
 * Versión Estática - Sin persistencia en Firebase
 */

import React from 'react';
import { Responsive, WidthProvider, Layout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { 
  XMarkIcon
} from '@heroicons/react/24/outline';

const ResponsiveGridLayout = WidthProvider(Responsive);

export interface ModuleItem {
  id: string;
  type: string;
  title: string;
  content: React.ReactNode;
  enabled: boolean;
  priority: number;
  
  // Configuración de tamaño
  preferredSize: 'small' | 'medium' | 'large' | 'full';
  minW?: number;
  minH?: number;
  
  // Capabilities
  resizable?: boolean;
  draggable?: boolean;
  closable?: boolean;
  minimizable?: boolean;
}

interface ModularLayoutSystemProps {
  modules: ModuleItem[];
  asignaturaId: string;
  temaId: string;
  onModuleToggle?: (moduleId: string, enabled: boolean) => void;
  onLayoutChange?: (layout: any[]) => void;
  readOnly?: boolean;
}

export const ModularLayoutSystem: React.FC<ModularLayoutSystemProps> = ({
  modules,
  onModuleToggle,
  readOnly = false
}) => {
  // Filtrar módulos habilitados
  const activeModules = modules.filter(m => m.enabled);
  
  // Generar layout por defecto basado en preferredSize
  const generateLayout = (items: ModuleItem[]): Layout[] => {
    let yOffset = 0;
    
    return items.map((item) => {
      let w = 12;
      let h = 8;
      
      switch (item.preferredSize) {
        case 'small': w = 4; h = 6; break;
        case 'medium': w = 6; h = 8; break;
        case 'large': w = 12; h = 10; break;
        case 'full': w = 12; h = 12; break;
      }
      
      const layoutItem = {
        i: item.id,
        x: (yOffset % 2) * 6, // Alternar columnas si cabe
        y: yOffset,
        w: w,
        h: h,
        minW: item.minW || 3,
        minH: item.minH || 4,
        static: readOnly && !item.draggable
      };
      
      yOffset += h; // Simple vertical stacking for default
      return layoutItem;
    });
  };

  const layout = generateLayout(activeModules);

  return (
    <div className="modular-layout-container p-4 bg-gray-50 min-h-screen">
      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={30}
        isDraggable={!readOnly}
        isResizable={!readOnly}
        margin={[16, 16]}
      >
        {activeModules.map((module) => (
          <div key={module.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col">
            {/* Header del Módulo */}
            <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex justify-between items-center cursor-move handle">
              <h3 className="font-semibold text-gray-700 text-sm select-none">{module.title}</h3>
              <div className="flex items-center gap-2">
                {!readOnly && module.closable && (
                  <button 
                    onClick={() => onModuleToggle?.(module.id, false)}
                    className="p-1 hover:bg-gray-200 rounded text-gray-500"
                    title="Cerrar módulo"
                  >
                    <XMarkIcon className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
            
            {/* Contenido */}
            <div className="flex-1 overflow-auto p-4 relative">
              {module.content}
            </div>
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};
