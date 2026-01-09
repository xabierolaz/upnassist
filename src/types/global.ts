/**
 * Tipos e interfaces globales para UpnAssist
 * Definiciones compartidas en toda la aplicación
 */

// ========================================
// TIPOS BASE PARA COMPONENTES
// ========================================

export interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  testId?: string;
  children?: React.ReactNode;
}

export interface ModalComponentProps extends BaseComponentProps {
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export interface InteractiveComponentProps extends BaseComponentProps {
  onClick?: () => void;
  onHover?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export interface FormComponentProps extends BaseComponentProps {
  value?: any;
  onChange?: (value: any) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  label?: string;
}

// ========================================
// TIPOS DE DOMINIO - USUARIO
// ========================================

export type UserRole = 'student' | 'professor' | 'admin';

export interface User {
  id: string;
  email: string;
  displayName: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
  preferences?: UserPreferences;
}

export interface UserPreferences {
  theme?: 'light' | 'dark' | 'auto';
  language?: 'es' | 'en' | 'eu';
  notifications?: NotificationPreferences;
}

export interface NotificationPreferences {
  email: boolean;
  push: boolean;
  calendar: boolean;
  assignments: boolean;
}

// ========================================
// TIPOS DE DOMINIO - EJERCICIOS
// ========================================

export type DifficultyLevel = 'easy' | 'medium' | 'hard';
export type ExerciseStatus = 'not_started' | 'in_progress' | 'completed' | 'failed';

export interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  category: string;
  points?: number;
}

export interface ExecutionResult {
  success: boolean;
  output: string;
  error?: string;
}

// ========================================
// TIPOS DE DOMINIO - CHAT
// ========================================

export interface ChatMessage {
  id: string;
  content: string;
  sender: string;
  senderName?: string;
  timestamp: Date;
  type: 'text' | 'image' | 'file' | 'code';
}

export interface ChatRoom {
  id: string;
  name: string;
  participants: string[];
  createdAt: Date;
}

// ========================================
// TIPOS DE RESPUESTA API
// ========================================

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}

// ========================================
// TIPOS DE UTILIDAD
// ========================================

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export const LoadingState = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error'
} as const;

export type LoadingState = typeof LoadingState[keyof typeof LoadingState];
