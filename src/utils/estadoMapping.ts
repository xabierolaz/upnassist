/**
 * Estado mapping utilities
 * Maps between different estado systems used in the app
 */

// Estados de asignaturas
export type EstadoAsignatura = 'activo' | 'completado' | 'pendiente';
export type EstadoProgreso = 'completo' | 'parcial' | 'pendiente';

/**
 * Map EstadoAsignatura to EstadoProgreso
 */
export function mapEstadoToProgreso(estado: EstadoAsignatura | undefined): EstadoProgreso {
  const map: Record<string, EstadoProgreso> = {
    'activo': 'parcial',
    'completado': 'completo',
    'pendiente': 'pendiente',
    'completo': 'completo',
    'parcial': 'parcial'
  };
  
  return map[estado || 'pendiente'] || 'pendiente';
}

/**
 * Map EstadoProgreso to EstadoAsignatura
 */
export function mapProgresoToEstado(progreso: EstadoProgreso | undefined): EstadoAsignatura {
  const map: Record<string, EstadoAsignatura> = {
    'completo': 'completado',
    'parcial': 'activo',
    'pendiente': 'pendiente',
    'activo': 'activo',
    'completado': 'completado'
  };
  
  return map[progreso || 'pendiente'] || 'pendiente';
}

/**
 * Get color for estado
 */
export function getEstadoColor(estado: EstadoAsignatura | EstadoProgreso | undefined): string {
  const normalizedEstado = estado?.toLowerCase();
  
  switch(normalizedEstado) {
    case 'completo':
    case 'completado':
      return 'text-green-600 bg-green-100';
    case 'parcial':
    case 'activo':
      return 'text-blue-600 bg-blue-100';
    case 'pendiente':
      return 'text-gray-600 bg-gray-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
}

/**
 * Get icon for estado
 */
export function getEstadoIcon(estado: EstadoAsignatura | EstadoProgreso | undefined): string {
  const normalizedEstado = estado?.toLowerCase();
  
  switch(normalizedEstado) {
    case 'completo':
    case 'completado':
      return '✅';
    case 'parcial':
    case 'activo':
      return '🔄';
    case 'pendiente':
      return '⏳';
    default:
      return '❓';
  }
}

/**
 * Get display text for estado
 */
export function getEstadoText(estado: EstadoAsignatura | EstadoProgreso | undefined): string {
  const normalizedEstado = estado?.toLowerCase();
  
  switch(normalizedEstado) {
    case 'completo':
    case 'completado':
      return 'Completado';
    case 'parcial':
      return 'Parcial';
    case 'activo':
      return 'Activo';
    case 'pendiente':
      return 'Pendiente';
    default:
      return 'Desconocido';
  }
}