/**
 * Helper para manejar los colores de las asignaturas
 * que pueden venir como string o como objeto
 */

export interface ColorScheme {
  main: string;
  light: string;
  hover: string;
  text: string;
  border: string;
  primary: string;  // Made required
}

/**
 * Convierte un color string o ColorScheme en un ColorScheme completo
 */
export function ensureColorScheme(color: string | ColorScheme | undefined): ColorScheme {
  // Si es undefined, retornar colores por defecto
  if (!color) {
    return {
      main: 'bg-gray-500',
      light: 'bg-gray-50',
      hover: 'hover:bg-gray-100',
      text: 'text-gray-900',
      border: 'border-gray-200',
      primary: 'bg-gray-500'
    };
  }

  // Si ya es un ColorScheme, asegurar que tenga todas las propiedades
  if (typeof color === 'object') {
    return {
      main: color.main || 'bg-gray-500',
      light: color.light || 'bg-gray-50',
      hover: color.hover || 'hover:bg-gray-100',
      text: color.text || 'text-gray-900',
      border: color.border || 'border-gray-200',
      primary: color.primary || color.main || 'bg-gray-500'
    };
  }

  // Si es un string (ej: "bg-blue-500"), generar el esquema completo
  const baseColor = color.replace('bg-', '').replace('-500', '');
  return {
    main: color,
    light: `bg-${baseColor}-50`,
    hover: `hover:bg-${baseColor}-100`,
    text: `text-${baseColor}-900`,
    border: `border-${baseColor}-200`,
    primary: color
  };
}

/**
 * Obtiene una propiedad específica del color de forma segura
 */
export function getColorProperty(
  color: string | ColorScheme | undefined, 
  property: keyof ColorScheme
): string {
  const scheme = ensureColorScheme(color);
  return scheme[property];
}
