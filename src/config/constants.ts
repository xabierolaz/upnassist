
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

// Enums de configuración
export enum UserRole {
  ADMIN = 'admin',
  TEACHER = 'teacher',
  STUDENT = 'student',
  GUEST = 'guest'
}

export enum ExerciseStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  FAILED = 'failed'
}

export enum DifficultyLevel {
  EASY = 'facil',
  MEDIUM = 'medio',
  HARD = 'dificil'
}

export enum SubjectStatus {
  ACTIVE = 'activa',
  ARCHIVED = 'archivada',
  UPCOMING = 'proxima'
}

export enum EventType {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
  SUCCESS = 'success'
}

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
