/**
 * Contenido estructurado de la asignatura Informática
 * Código: 509102
 */

import type { AsignaturaContent, EjercicioItem } from '../../types/asignatura';
import { SUBJECT_COLORS } from '../../config';

// Helper para crear ejercicios con tipo correcto
const crearEjercicio = (data: Partial<EjercicioItem>): EjercicioItem => {
  return {
    id: data.id || '',
    titulo: data.titulo || '',
    enunciado: data.enunciado || data.description || '',
    dificultad: data.dificultad || 'medio',
    puntos: data.puntos || 0,
    tipo: 'codigo',
    ...data
  } as EjercicioItem;
};

export const informaticaContent: AsignaturaContent = {
  metadata: {
    id: '509102',
    codigo: '509102',
    nombre: 'Informática',
    curso: '2025-2026',
    semestre: 1, // Otoño
    creditos: 6,
    profesor: 'Dr. Juan Pérez',
    emailProfesor: 'juan.perez@upna.es',
    horario: 'Lunes 8:00-12:00',
    descripcion: 'Introducción a la programación con Python.',
    estado: 'activa',
    colorTema: SUBJECT_COLORS.informatica.primary
  },

  temas: [
    {
      id: 'inf-tema-1',
      numero: 1,
      titulo: 'Introducción a la Programación',
      descripcion: 'Conceptos básicos de programación y algoritmos',
      duracionEstimada: 4,
      
      teoria: {
        id: 'inf-tema-1-teoria',
        titulo: 'Fundamentos de la Programación',
        descripcion: 'Aprende los conceptos básicos de la programación',
        resumen: 'Contenido introductorio sobre algoritmos y Python.',
        diapositivas: [
          {
            titulo: 'Presentación: Introducción a Python',
            url: '/slides/informatica/tema1-intro-python.pdf'
          }
        ]
      },
      
      practica: {
        id: 'inf-tema-1-practica',
        titulo: 'Ejercicios básicos de Python',
        descripcion: 'Practica los conceptos fundamentales',
        objetivos: ['Entender print', 'Variables'],
        ejercicios: [
          crearEjercicio({
            id: 'inf-p1-e1',
            tipo: 'codigo',
            titulo: 'Hola Mundo',
            enunciado: 'Crea tu primer programa en Python',
            dificultad: 'facil',
            puntos: 10,
            lenguaje: 'python',
            codigoInicial: 'print("Hola")',
            solucion: 'print("Hola Mundo")'
          })
        ]
      },
      
      laboratorio: {
        id: 'inf-tema-1-lab',
        titulo: 'Laboratorio: Entorno de desarrollo',
        descripcion: 'Configura tu entorno de desarrollo Python',
        tipo: 'pyxom',
        duracionEstimada: 60,
        ejerciciosCompilador: []
      }
    }
  ],

  recursos: [],
  avisos: [],

  config: {
    mostrarProgreso: true,
    mostrarCalendario: true,
    mostrarForo: false,
    mostrarChat: true,
    permitirDescargas: true,
    tabs: [
      { id: 'teoria', label: 'Teoría', visible: true, orden: 1 },
      { id: 'practica', label: 'Práctica', visible: true, orden: 2 },
      { id: 'laboratorio', label: 'Laboratorio', visible: true, orden: 3 },
      { id: 'evaluacion', label: 'Evaluación', visible: true, orden: 4 },
      { id: 'recursos', label: 'Recursos', visible: true, orden: 5 }
    ]
  }
};

export default informaticaContent;