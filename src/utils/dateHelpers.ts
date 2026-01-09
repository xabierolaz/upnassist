/**
 * Date and timestamp utilities
 * Handles conversion between number timestamps and Date objects
 */

/**
 * Convert any timestamp format to Date
 */
export function toDate(timestamp: number | Date | string | undefined): Date {
  if (!timestamp) return new Date();
  
  if (timestamp instanceof Date) {
    return timestamp;
  }
  
  if (typeof timestamp === 'number') {
    return new Date(timestamp);
  }
  
  if (typeof timestamp === 'string') {
    return new Date(timestamp);
  }
  
  return new Date();
}

/**
 * Ensure value is a Date object (alias for toDate for backward compatibility)
 */
export function ensureDate(timestamp: number | Date | string | undefined): Date {
  return toDate(timestamp);
}

/**
 * Convert any timestamp to number (milliseconds)
 */
export function toTimestamp(date: number | Date | string | undefined): number {
  if (!date) return Date.now();
  
  if (typeof date === 'number') {
    return date;
  }
  
  if (date instanceof Date) {
    return date.getTime();
  }
  
  if (typeof date === 'string') {
    return new Date(date).getTime();
  }
  
  return Date.now();
}

/**
 * Convert timestamp to ISO string
 */
export function toISOString(timestamp: number | Date | string | undefined): string {
  return toDate(timestamp).toISOString();
}

/**
 * Format date for display
 */
export function formatDate(timestamp: number | Date | string | undefined, locale: string = 'es-ES'): string {
  const date = toDate(timestamp);
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Format time for display
 */
export function formatTime(timestamp: number | Date | string | undefined, locale: string = 'es-ES'): string {
  const date = toDate(timestamp);
  return date.toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit'
  });
}

/**
 * Get relative time (e.g., "hace 5 minutos")
 */
export function getRelativeTime(timestamp: number | Date | string | undefined): string {
  const date = toDate(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  
  if (diffSecs < 60) {
    return 'hace unos segundos';
  } else if (diffMins < 60) {
    return `hace ${diffMins} minuto${diffMins > 1 ? 's' : ''}`;
  } else if (diffHours < 24) {
    return `hace ${diffHours} hora${diffHours > 1 ? 's' : ''}`;
  } else if (diffDays < 30) {
    return `hace ${diffDays} día${diffDays > 1 ? 's' : ''}`;
  } else {
    return formatDate(date);
  }
}