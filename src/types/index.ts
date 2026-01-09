/**
 * Punto de entrada central para todos los tipos de UpnAssist
 * Importar desde aquí en lugar de archivos individuales
 */

// Exportar todos los tipos globales
export * from './global';

// Re-exportar configuración tipada
export type { 
  Route, 
  AppConfig, 
  SubjectColor, 
  UserRole as ConfigUserRole,
  ExerciseStatus as ConfigExerciseStatus,
  DifficultyLevel as ConfigDifficultyLevel,
  SubjectStatus as ConfigSubjectStatus,
  EventType as ConfigEventType
} from '../config';

// Re-exportar tipos de asignatura
export type { 
  AsignaturaMetadata,
  TemaAsignatura,
  AsignaturaContent,
  AsignaturaColorScheme,
  AsignaturaLayoutConfig,
  TeoriaContent,
  PracticaContent,
  LaboratorioContent,
  EvaluacionContent,
  EjercicioItem as Ejercicio,
  RecursoItem as Recurso,
  ProyectoLab as ProyectoLaboratorio,
  TabConfig,
  AvisoItem
} from './asignatura';

// Import types needed for aliases
import type { 
  AsignaturaContent,
  AsignaturaLayoutConfig,
  TabConfig,
  AvisoItem,
  TeoriaContent,
  PracticaContent,
  LaboratorioContent,
  QuizQuestion
} from './asignatura';

// Alias exports for backward compatibility
export type AsignaturaData = AsignaturaContent;
export type AsignaturaLayout = AsignaturaLayoutConfig;
export type ModuleConfig = TabConfig;
export type ModuleItem = AvisoItem;
export type SeccionContenido = TeoriaContent | PracticaContent | LaboratorioContent;
export type PreguntaEvaluacion = QuizQuestion;

// Re-exportar tipos de pyxom
export * from './pyxom';

// Re-exportar tipos de quiz con alias para evitar conflicto
export type { QuizQuestion } from './asignatura';