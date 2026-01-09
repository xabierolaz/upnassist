/**
 * Sistema de tipos para el layout universal de asignaturas
 * Todas las asignaturas deben seguir esta estructura
 */

// ========================================
// METADATA DE ASIGNATURA
// ========================================

export type AsignaturaEstado = 'activa' | 'archivada' | 'proxima';

export interface AsignaturaMetadata {
  id: string;
  codigo: string;
  nombre: string;
  curso: string; // "2025-2026"
  semestre: 1 | 2;
  creditos: number;
  profesor: string;
  emailProfesor: string;
  descripcion: string;
  imagenPortada?: string;
  colorTema?: string; // class de tailwind ej: "bg-blue-600"
  estado: AsignaturaEstado;
  horario?: string;
  aula?: string;
}

export interface AsignaturaColorScheme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

// ========================================
// CONTENIDO DE TEORÍA
// ========================================

export interface DiapositivaItem {
  titulo: string;
  url: string; // ruta al PDF
  paginaInicio?: number;
}

export interface ConceptoClave {
  termino: string;
  definicion: string;
}

export interface TeoriaContent {
  id: string;
  titulo: string;
  descripcion?: string;
  diapositivas?: DiapositivaItem[];
  resumen?: string; // Markdown
  conceptosClave?: ConceptoClave[];
  lecturasRecomendadas?: RecursoItem[];
  videosExplicativos?: RecursoItem[];
}

// ========================================
// CONTENIDO DE PRÁCTICA (EJERCICIOS)
// ========================================

export interface TestCase {
  id: string;
  nombre: string;
  entrada: string;
  salidaEsperada: string;
  esOculto?: boolean;
}

export interface EjercicioItem {
  id: string;
  tipo?: 'codigo' | 'quiz' | 'teorico'; // Añadido para compatibilidad
  titulo: string;
  enunciado: string; // antes descripcion
  dificultad: 'facil' | 'medio' | 'dificil';
  puntos: number;
  
  // Propiedades específicas de código
  lenguaje?: 'python' | 'sql' | 'java'; // java legacy
  codigoInicial?: string;
  solucion?: string;
  hints?: string[];
  tests?: TestCase[];
  
  // Compatibilidad con propiedades antiguas (mapeo)
  description?: string; // alias de enunciado
  title?: string; // alias de titulo
}

export interface PracticaContent {
  id: string;
  titulo: string;
  descripcion: string;
  ejercicios: EjercicioItem[];
  objetivos: string[];
  entregable?: boolean;
  fechaEntrega?: Date;
}

// ========================================
// CONTENIDO DE EVALUACIÓN
// ========================================

export interface QuizQuestion {
  id: string;
  pregunta: string; // alias question
  opciones: string[]; // alias options
  respuestaCorrecta: number | string; // index or value 'true'/'false'
  explicacion?: string;
  puntos?: number;
  tipo?: 'multiple' | 'verdadero-falso';
  
  // Alias for legacy compat
  question?: string;
  options?: string[];
  correctAnswer?: number;
  explanation?: string;
}

export interface EvaluacionContent {
  id: string;
  titulo: string;
  tipo: 'quiz' | 'examen' | 'test';
  preguntas?: QuizQuestion[];
  duracionMinutos?: number;
  fecha?: Date;
  peso?: number; // % de la nota
  
  // Listas legacy
  examenes?: any[];
  trabajos?: any[];
  criterios?: any[];
}

// ========================================
// CONTENIDO DE LABORATORIO
// ========================================

export interface LaboratorioContent {
  id: string;
  titulo: string;
  descripcion: string;
  tipo: 'pyxom' | 'sql' | 'web' | 'proyecto' | 'javaxom';
  duracionEstimada?: number; // en minutos
  
  // Para PyXom y otros compiladores
  ejerciciosCompilador?: EjercicioItem[];
  
  // Para proyectos
  proyecto?: ProyectoLab;
}

export interface ProyectoLab {
  titulo: string;
  descripcion: string;
  objetivos: string[];
  requisitos: string[];
  entregables: EntregableItem[];
  recursos?: RecursoItem[];
  equipos?: boolean;
  tamañoEquipo?: number;
}

export type EntregableItem = string | {
  nombre: string;
  descripcion: string;
  formato: string;
  fechaLimite?: Date;
};

// ========================================
// RECURSOS Y MATERIALES
// ========================================

export interface RecursoItem {
  id: string;
  tipo: 'pdf' | 'link' | 'video' | 'codigo' | 'libro' | 'documento' | 'enlace' | 'slides' | 'componente';
  titulo: string;
  descripcion?: string;
  url?: string;
  icono?: string;
  tamaño?: string; // para PDFs
  duracion?: string; // para videos
  obligatorio?: boolean;
  
  // Propiedades legacy para compatibilidad
  componentName?: string;
  componentProps?: any;
  contenido?: string; // HTML legacy
}


// ========================================
// TEMA (UNIDAD DIDÁCTICA)
// ========================================

export interface TemaAsignatura {
  id: string;
  numero: number;
  titulo: string;
  descripcion: string;
  duracionEstimada?: number; // en horas
  
  teoria?: TeoriaContent;
  practica?: PracticaContent;
  laboratorio?: LaboratorioContent;
  evaluacion?: EvaluacionContent;
  recursos?: RecursoItem[];
  
  // Estado y progreso
  bloqueado?: boolean;
  prerequisitos?: string[]; // IDs de temas previos requeridos
}

// ========================================
// CONTENIDO COMPLETO DE ASIGNATURA
// ========================================

export interface AsignaturaContent {
  metadata: AsignaturaMetadata;
  temas: TemaAsignatura[];
  recursos?: RecursoItem[]; // Recursos generales de la asignatura
  avisos?: AvisoItem[];
  
  // Configuración del layout
  config?: AsignaturaLayoutConfig;
}

export interface AsignaturaLayoutConfig {
  mostrarProgreso?: boolean;
  mostrarCalendario?: boolean;
  mostrarForo?: boolean;
  mostrarChat?: boolean;
  permitirDescargas?: boolean;
  
  // Personalización de tabs
  tabs?: TabConfig[];
}

export interface TabConfig {
  id: string;
  label: string;
  icono?: string;
  visible: boolean;
  orden?: number;
}

export interface AvisoItem {
  id: string;
  tipo: 'info' | 'warning' | 'error' | 'success';
  titulo: string;
  mensaje: string;
  fecha: Date;
  importante?: boolean;
}

// ========================================
// PROGRESO DEL ESTUDIANTE
// ========================================

export interface ProgresoAsignatura {
  asignaturaId: string;
  estudianteId: string;
  temas: ProgresoTema[];
  asistencia?: number;
  ultimoAcceso?: Date;
}

export interface ProgresoTema {
  temaId: string;
  teoriaCompletada: boolean;
  ejerciciosCompletados: string[]; // IDs de ejercicios
  laboratorioCompletado: boolean;
  tiempoDedicado?: number; // en minutos
  fechaInicio?: Date;
  fechaCompletado?: Date;
}

// ========================================
// SISTEMA DE COMPONENTES DINÁMICOS
// ========================================

export interface ComponenteInteractivo {
  nombre: string;
  componente: React.ComponentType<any>;
  props?: any;
}

// Registro de componentes disponibles
export interface ComponentRegistry {
  [key: string]: React.ComponentType<any>;
}

// ========================================
// HELPERS Y UTILIDADES
// ========================================

export type TipoContenido = 'teoria' | 'practica' | 'laboratorio' | 'recursos' | 'evaluacion';

export interface BreadcrumbItem {
  label: string;
  path?: string;
  active?: boolean;
}

// Para filtrado y búsqueda
export interface FiltrosAsignatura {
  curso?: string;
  semestre?: string;
  estado?: AsignaturaEstado;
  profesor?: string;
  creditos?: number;
}

// Estadísticas
export interface EstadisticasAsignatura {
  totalEstudiantes: number;
  progresoPromedio: number;
  temasCompletados: number;
  ejerciciosResueltos: number;
}
