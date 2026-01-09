/**
 * Contenido estructurado de Estructura de Datos
 * Código: 506108
 */

import type { AsignaturaContent, TemaAsignatura } from '../../types/asignatura';
import { SUBJECT_COLORS } from '../../config/constants';

// TEMAS IMPORTADOS
// En una implementación ideal, esto vendría de módulos separados, 
// pero aquí los consolidamos para eliminar dependencias dispersas en src/data

const TEMA_1_ARRAYS: TemaAsignatura = {
  id: 'ed-tema-1',
  numero: 1,
  titulo: 'Arrays y Listas',
  descripcion: 'Estructuras de datos fundamentales: Arrays estáticos, dinámicos y Listas enlazadas.',
  duracionEstimada: 6,
  
  teoria: {
    id: 'ed-tema-1-teoria',
    titulo: 'Fundamentos de Arrays y Listas',
    descripcion: 'Análisis de estructuras lineales básicas',
    resumen: `
## Introducción
Los arrays y listas son las estructuras de datos más fundamentales en la programación.
Un array es una colección de elementos del mismo tipo almacenados en posiciones de memoria contiguas.
Las listas enlazadas son estructuras dinámicas donde cada elemento apunta al siguiente.

### Objetivos
* Comprender la diferencia entre arrays estáticos y dinámicos
* Implementar operaciones básicas en arrays (inserción, eliminación, búsqueda)
* Diseñar e implementar listas enlazadas simples y dobles
* Analizar la complejidad temporal de las operaciones
    `,
    conceptosClave: [
      {
        termino: 'Array Estático',
        definicion: 'Estructura de tamaño fijo con acceso directo por índice O(1). Búsqueda O(n).'
      },
      {
        termino: 'Array Dinámico',
        definicion: 'Array que puede cambiar de tamaño (ArrayList, Vector). Inserción amortizada O(1).'
      },
      {
        termino: 'Lista Enlazada',
        definicion: 'Nodos conectados mediante punteros. Inserción/Eliminación O(1) si se tiene referencia.'
      }
    ],
    diapositivas: [
      {
        titulo: 'Slides del Tema 1: Arrays y Listas',
        url: '/slides/tema1-1.pdf'
      }
    ]
  },
  
  practica: {
    id: 'ed-tema-1-practica',
    titulo: 'Ejercicios de Arrays',
    descripcion: 'Implementación de algoritmos sobre arrays y listas',
    ejercicios: [
      {
        id: 'ej1-1',
        titulo: 'Rotar Array',
        enunciado: 'Rota un array k posiciones a la derecha. Ejemplo: [1,2,3,4,5] con k=2 -> [4,5,1,2,3]',
        dificultad: 'medio',
        puntos: 10,
        hints: ['Puedes usar reversión múltiple', 'Considera k % n para optimizar']
      },
      {
        id: 'ej1-2',
        titulo: 'Detectar Ciclo en Lista',
        enunciado: 'Determina si una lista enlazada tiene un ciclo interno.',
        dificultad: 'medio',
        puntos: 15,
        hints: ['Algoritmo de Floyd (tortuga y liebre)', 'Usa dos punteros con diferentes velocidades']
      }
    ],
    objetivos: ['Dominar manipulación de índices', 'Entender punteros y referencias']
  }
};

const TEMA_2_PILAS_COLAS: TemaAsignatura = {
  id: 'ed-tema-2',
  numero: 2,
  titulo: 'Pilas y Colas',
  descripcion: 'Estructuras lineales con acceso restringido: Stack (LIFO) y Queue (FIFO).',
  duracionEstimada: 6,
  
  teoria: {
    id: 'ed-tema-2-teoria',
    titulo: 'Pilas y Colas',
    descripcion: 'Fundamentos de LIFO y FIFO',
    conceptosClave: [
      { termino: 'Stack (Pila)', definicion: 'Estructura LIFO (Last In, First Out). Operaciones: push, pop.' },
      { termino: 'Queue (Cola)', definicion: 'Estructura FIFO (First In, First Out). Operaciones: enqueue, dequeue.' }
    ]
  },
  
  practica: {
    id: 'ed-tema-2-practica',
    titulo: 'Implementación de Pilas',
    descripcion: 'Uso de pilas para resolver problemas',
    ejercicios: [
      {
        id: 'ej2-1',
        titulo: 'Validar Paréntesis',
        enunciado: 'Dada una cadena con caracteres (){}[], determinar si los paréntesis están balanceados.',
        dificultad: 'facil',
        puntos: 10,
        hints: ['Usa una pila para guardar los paréntesis de apertura', 'Si encuentras cierre, verifica el tope de la pila']
      }
    ],
    objetivos: ['Aplicar LIFO en problemas de parsing']
  }
};

export const estructuraDatosContent: AsignaturaContent = {
  metadata: {
    id: '506108',
    codigo: '506108',
    nombre: 'Estructura de Datos',
    curso: '2025-2026',
    semestre: 2,
    creditos: 6,
    profesor: 'Dra. María González',
    emailProfesor: 'maria.gonzalez@upna.es',
    horario: 'Lunes 12:00-14:00, Jueves 10:00-12:00',
    descripcion: 'Curso avanzado sobre estructuras de datos, algoritmos fundamentales y análisis de complejidad temporal y espacial.',
    estado: 'activa',
    colorTema: SUBJECT_COLORS.estructura_datos.primary
  },

  temas: [
    TEMA_1_ARRAYS,
    TEMA_2_PILAS_COLAS,
    {
      id: 'ed-tema-3',
      numero: 3,
      titulo: 'Árboles',
      descripcion: 'Estructuras jerárquicas: Árboles binarios, AVL, B-Trees.',
      duracionEstimada: 8
    },
    {
      id: 'ed-tema-4',
      numero: 4,
      titulo: 'Grafos',
      descripcion: 'Representación de relaciones complejas. Algoritmos BFS, DFS, Dijkstra.',
      duracionEstimada: 10
    }
  ],

  config: {
    mostrarProgreso: true,
    mostrarCalendario: true,
    mostrarForo: true,
    mostrarChat: true,
    permitirDescargas: true,
    tabs: [
      { id: 'teoria', label: 'Teoría', visible: true, orden: 1 },
      { id: 'practica', label: 'Ejercicios', visible: true, orden: 2 },
      { id: 'laboratorio', label: 'Laboratorio', visible: true, orden: 3 }
    ]
  }
};

export default estructuraDatosContent;
