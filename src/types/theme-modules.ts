// Types for the modular theme system

export interface ModuleConfig {
  enabled: boolean;
  config?: Record<string, any>;
  order?: number; // For display order
}

export interface ThemeModules {
  teoria: ModuleConfig;
  javaxom: ModuleConfig;
  pyxom: ModuleConfig;
  pdfViewer: ModuleConfig;
  quiz: ModuleConfig;
  slides: ModuleConfig;
  herramientas: ModuleConfig;
  laboratorio: ModuleConfig;
  videos: ModuleConfig;
  diagrams: ModuleConfig;
  forum: ModuleConfig;
  exercises: ModuleConfig;
  resources: ModuleConfig;
}

export interface ThemeModuleConfiguration {
  themeId: string;
  subjectId: string;
  title: string;
  description?: string;
  colorScheme: 'purple' | 'green' | 'blue' | 'cyan' | 'orange' | 'red';
  modules: ThemeModules;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: string;
}

// Presets for different subject types
export const MODULE_PRESETS = {
  programming: {
    teoria: { enabled: true, order: 1 },
    javaxom: { enabled: true, order: 2 },
    pyxom: { enabled: false, order: 3 },
    pdfViewer: { enabled: true, order: 4 },
    quiz: { enabled: true, order: 5 },
    slides: { enabled: true, order: 6 },
    herramientas: { enabled: true, order: 7 },
    laboratorio: { enabled: true, order: 8 },
    videos: { enabled: false, order: 9 },
    diagrams: { enabled: true, order: 10 },
    forum: { enabled: false, order: 11 },
    exercises: { enabled: true, order: 12 },
    resources: { enabled: true, order: 13 }
  },
  cloud: {
    teoria: { enabled: true, order: 1 },
    javaxom: { enabled: false, order: 2 },
    pyxom: { enabled: true, order: 3 },
    pdfViewer: { enabled: true, order: 4 },
    quiz: { enabled: true, order: 5 },
    slides: { enabled: true, order: 6 },
    herramientas: { enabled: false, order: 7 },
    laboratorio: { enabled: true, order: 8 },
    videos: { enabled: true, order: 9 },
    diagrams: { enabled: false, order: 10 },
    forum: { enabled: false, order: 11 },
    exercises: { enabled: true, order: 12 },
    resources: { enabled: true, order: 13 }
  },
  business: {
    teoria: { enabled: true, order: 1 },
    javaxom: { enabled: false, order: 2 },
    pyxom: { enabled: false, order: 3 },
    pdfViewer: { enabled: true, order: 4 },
    quiz: { enabled: true, order: 5 },
    slides: { enabled: true, order: 6 },
    herramientas: { enabled: false, order: 7 },
    laboratorio: { enabled: false, order: 8 },
    videos: { enabled: true, order: 9 },
    diagrams: { enabled: true, order: 10 },
    forum: { enabled: true, order: 11 },
    exercises: { enabled: true, order: 12 },
    resources: { enabled: true, order: 13 }
  }
};

// Module metadata for UI
export interface ModuleMetadata {
  id: keyof ThemeModules;
  name: string;
  description: string;
  icon: string; // Icon name from heroicons
  category: 'content' | 'tools' | 'interaction' | 'assessment';
  requiresConfig?: boolean;
}

export const MODULES_METADATA: ModuleMetadata[] = [
  {
    id: 'teoria',
    name: 'Contenido Teórico',
    description: 'Material de estudio y explicaciones conceptuales',
    icon: 'BookOpenIcon',
    category: 'content'
  },
  {
    id: 'javaxom',
    name: 'Editor Java',
    description: 'Editor de código Java con compilación y ejecución',
    icon: 'CodeBracketIcon',
    category: 'tools'
  },
  {
    id: 'pyxom',
    name: 'Editor Python',
    description: 'Editor de código Python con ejecución en tiempo real',
    icon: 'CommandLineIcon',
    category: 'tools'
  },
  {
    id: 'pdfViewer',
    name: 'Visor PDF',
    description: 'Visualizador de documentos PDF integrado',
    icon: 'DocumentTextIcon',
    category: 'content'
  },
  {
    id: 'quiz',
    name: 'Quiz Interactivo',
    description: 'Evaluaciones y cuestionarios interactivos',
    icon: 'AcademicCapIcon',
    category: 'assessment'
  },
  {
    id: 'slides',
    name: 'Presentaciones',
    description: 'Visor de diapositivas y presentaciones',
    icon: 'PresentationChartBarIcon',
    category: 'content'
  },
  {
    id: 'herramientas',
    name: 'Herramientas Interactivas',
    description: 'Simuladores y herramientas específicas del tema',
    icon: 'WrenchScrewdriverIcon',
    category: 'tools'
  },
  {
    id: 'laboratorio',
    name: 'Laboratorio',
    description: 'Ejercicios prácticos y experimentos',
    icon: 'BeakerIcon',
    category: 'tools'
  },
  {
    id: 'videos',
    name: 'Videos',
    description: 'Material audiovisual y tutoriales',
    icon: 'VideoCameraIcon',
    category: 'content'
  },
  {
    id: 'diagrams',
    name: 'Diagramas',
    description: 'Editor y visualizador de diagramas UML',
    icon: 'CubeTransparentIcon',
    category: 'tools'
  },
  {
    id: 'forum',
    name: 'Foro',
    description: 'Espacio de discusión y preguntas',
    icon: 'ChatBubbleLeftRightIcon',
    category: 'interaction'
  },
  {
    id: 'exercises',
    name: 'Ejercicios',
    description: 'Problemas y ejercicios para práctica',
    icon: 'PencilSquareIcon',
    category: 'assessment'
  },
  {
    id: 'resources',
    name: 'Recursos',
    description: 'Enlaces y materiales complementarios',
    icon: 'FolderOpenIcon',
    category: 'content'
  }
];