import type { UserRole } from '../types/global';

// Constantes y definiciones globales de configuración

export const SUBJECT_COLORS = {
  informatica: {
    primary: 'bg-blue-600',
    secondary: 'bg-blue-100',
    accent: 'text-blue-600',
    background: 'bg-slate-50',
    text: 'text-slate-900',
    border: 'border-blue-200'
  },
  ingenieria_software: {
    primary: 'bg-indigo-600',
    secondary: 'bg-indigo-100',
    accent: 'text-indigo-600',
    background: 'bg-slate-50',
    text: 'text-slate-900',
    border: 'border-indigo-200'
  },
  estructura_datos: {
    primary: 'bg-emerald-600',
    secondary: 'bg-emerald-100',
    accent: 'text-emerald-600',
    background: 'bg-slate-50',
    text: 'text-slate-900',
    border: 'border-emerald-200'
  },
  default: {
    primary: 'bg-slate-600',
    secondary: 'bg-slate-100',
    accent: 'text-slate-600',
    background: 'bg-slate-50',
    text: 'text-slate-900',
    border: 'border-slate-200'
  }
};

export type SubjectColorKey = keyof typeof SUBJECT_COLORS;

// Re-export types from global.ts as source of truth
export type { UserRole, DifficultyLevel, ExerciseStatus } from '../types/global';

// Subject status remains here as it's specific to this module
export type SubjectStatus = 'active' | 'archived' | 'upcoming';

export type EventType = 'info' | 'warning' | 'error' | 'success';

// Tipos de configuración
export interface Route {
  path: string;
  component: React.ComponentType<any>;
  exact?: boolean;
  isPrivate?: boolean;
  roles?: UserRole[];
  title?: string;
}

export interface AppConfig {
  appName: string;
  version: string;
  apiBaseUrl: string;
  maxUploadSize: number;
  features: {
    chat: boolean;
    ai: boolean;
    compiler: boolean;
  }
}

// Alias para mantener compatibilidad con imports existentes
export type SubjectColor = SubjectColorKey;
