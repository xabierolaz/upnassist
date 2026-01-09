// Tipos para la nueva estructura de asignaturas por temas

export interface TemaAsignatura {
  id: string;
  numero: number;
  titulo: string;
  descripcion: string;
  teoria: ContenidoTeorico;
  ejercicios: EjercicioTema[];
  recursos?: RecursoTema[];
  duracionEstimada?: string;
}

export interface ContenidoTeorico {
  contenido: string; // Contenido en markdown/HTML
  objetivos: string[];
  conceptosClave: string[];
  pdfUrl?: string; // URL del PDF para descargar
}

export interface EjercicioTema {
  id: string;
  tipo: 'pyxom' | 'javaxom' | 'texto' | 'quiz';
  titulo: string;
  descripcion: string;
  dificultad: 'facil' | 'medio' | 'dificil';
  puntos?: number;
  // Para PyXom/JavaXom, se vinculará con los ejercicios existentes por ID
  ejercicioId?: string;
}

export interface RecursoTema {
  id: string;
  tipo: 'video' | 'articulo' | 'documento' | 'enlace';
  titulo: string;
  url: string;
  descripcion?: string;
}

export interface AsignaturaInfo {
  codigo: string;
  nombre: string;
  curso: string;
  semestre: string;
  horario: string;
  profesor?: string;
  descripcion: string;
  temas: TemaAsignatura[];
}

export interface ProgresoTema {
  temaId: string;
  teoriaCompletada: boolean;
  ejerciciosCompletados: string[];
  fechaUltimoAcceso?: Date;
  tiempoInvertido?: number; // en minutos
}
