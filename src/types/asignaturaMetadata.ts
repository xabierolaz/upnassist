/**
 * Metadata types for Asignaturas
 */

export interface AsignaturaMetadata {
  codigo: string;
  nombre: string;
  descripcion?: string;
  creditos?: number;
  curso?: string;
  semestre?: string;
  profesor?: string;
  aula?: string;
  horario?: string;
  color?: string | AsignaturaColorScheme;
  icono?: string;
  estado?: 'activo' | 'completado' | 'pendiente';
  temas?: TemaMetadata[];
}

export interface TemaMetadata {
  id: string;
  numero: number;
  titulo: string;
  descripcion?: string;
  duracion?: string;
  estado?: 'completado' | 'en-progreso' | 'bloqueado';
}

export interface AsignaturaColorScheme {
  main: string;
  primary: string;
  light: string;
  hover: string;
  text: string;
  border: string;
}

// Helper para obtener el color como string
export function getColorValue(color: string | AsignaturaColorScheme | undefined, property: keyof AsignaturaColorScheme = 'main'): string {
  if (!color) return 'bg-gray-500';
  
  if (typeof color === 'string') {
    return color;
  }
  
  return color[property] || color.main || 'bg-gray-500';
}

// Export para compatibilidad
export type { AsignaturaMetadata as default };
