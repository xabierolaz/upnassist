/**
 * Utilidad para migrar todos los temas modulares a la nueva estructura optimizada
 */

// import { ThemeConfigFactory } from '../factories/ThemeConfigFactory'; // Used in generated code

// Mapeo de asignaturas y sus temas
export const SUBJECTS_THEMES = {
  estructuraDatos: {
    name: 'Estructura de Datos',
    themes: [
      { number: 1, title: 'Arrays y Listas', file: 'tema1-arrays' },
      { number: 2, title: 'Pilas y Colas', file: 'tema2-pilas-colas' },
      { number: 3, title: 'Árboles', file: 'tema3-arboles' },
      { number: 4, title: 'Grafos', file: 'tema4-grafos' },
      { number: 5, title: 'Hash Tables', file: 'tema5-hashtables' },
      { number: 6, title: 'Heaps', file: 'tema6-heaps' },
      { number: 7, title: 'Algoritmos Avanzados', file: 'tema7-algoritmos' }
    ]
  },
  informatica: {
    name: 'Informática',
    themes: [
      { number: 1, title: 'Fundamentos', file: 'tema1-fundamentos' },
      { number: 2, title: 'Programación', file: 'tema2-programacion' },
      { number: 3, title: 'Algoritmos', file: 'tema3-algoritmos' },
      { number: 4, title: 'Bases de Datos', file: 'tema4-basesdatos' },
      { number: 5, title: 'Redes', file: 'tema5-redes' },
      { number: 6, title: 'Sistemas Operativos', file: 'tema6-sistemas' },
      { number: 7, title: 'Seguridad', file: 'tema7-seguridad' },
      { number: 8, title: 'Desarrollo Web', file: 'tema8-web' }
    ]
  },
  ingenieriaSoftware: {
    name: 'Ingeniería del Software',
    themes: [
      { number: 1, title: 'Panorámica', file: 'tema1-panoramica' },
      { number: 2, title: 'Requisitos', file: 'tema2-requisitos' },
      { number: 3, title: 'Análisis', file: 'tema3-analisis' },
      { number: 4, title: 'Diseño', file: 'tema4-diseno' },
      { number: 5, title: 'Codificación', file: 'tema5-codificacion' },
      { number: 6, title: 'Pruebas', file: 'tema6-pruebas' },
      { number: 7, title: 'Despliegue', file: 'tema7-despliegue' },
      { number: 8, title: 'Economía', file: 'tema8-economia' },
      { number: 9, title: 'Metodologías', file: 'tema9-metodologias' }
    ]
  },
  aaee: {
    name: 'Análisis de Aplicaciones Empresariales',
    themes: [
      { number: 1, title: 'Gestión Empresarial', file: 'tema1-gestion' },
      { number: 2, title: 'Cloud Computing', file: 'tema2-cloud' },
      { number: 3, title: 'Business Intelligence', file: 'tema3-bi' },
      { number: 4, title: 'Arquitecturas Cloud', file: 'tema4-arquitecturas' },
      { number: 5, title: 'Tecnologías Cloud', file: 'tema5-tecnologias' },
      { number: 6, title: 'Captura de Datos', file: 'tema6-captura' },
      { number: 7, title: 'Data Warehouse', file: 'tema7-datawarehouse' },
      { number: 8, title: 'OLAP', file: 'tema8-olap' },
      { number: 9, title: 'ETL', file: 'tema9-etl' },
      { number: 10, title: 'Cubos e Informes', file: 'tema10-cubos' },
      { number: 11, title: 'Herramientas BI', file: 'tema11-herramientas' }
    ]
  }
};

/**
 * Genera el código para un componente de tema optimizado
 */
export function generateOptimizedThemeComponent(
  subject: string,
  subjectName: string,
  themeNumber: number,
  themeTitle: string,
  contentFile: string
): string {
  return `import React from 'react';
import UnifiedThemeComponent from '../../../components/themes/UnifiedThemeComponent';
import { ThemeConfigFactory } from '../../../factories/ThemeConfigFactory';
import { tema${themeNumber}Content } from '../../../data/temas/${subject}/${contentFile}';

const Tema${themeNumber}${themeTitle.replace(/\s+/g, '')}Optimizado: React.FC = () => {
  const config = ThemeConfigFactory.createConfig({
    subject: '${subject}',
    subjectName: '${subjectName}',
    number: ${themeNumber},
    title: '${themeTitle}',
    description: 'Contenido del tema ${themeNumber}',
    color: 'from-blue-500 to-blue-600',
    content: tema${themeNumber}Content,
    exercises: tema${themeNumber}Content.ejercicios || [],
    resources: tema${themeNumber}Content.recursos || []
  });

  return <UnifiedThemeComponent config={config} />;
};

export default Tema${themeNumber}${themeTitle.replace(/\s+/g, '')}Optimizado;`;
}

/**
 * Genera archivos de contenido base para los temas
 */
export function generateThemeContentTemplate(
  themeNumber: number,
  themeTitle: string
): string {
  return `// Contenido del Tema ${themeNumber}: ${themeTitle}
export const tema${themeNumber}Content = {
  teoria: {
    introduccion: \`
      Introducción al tema ${themeNumber}: ${themeTitle}
    \`,
    objetivos: [
      'Objetivo 1 del tema ${themeNumber}',
      'Objetivo 2 del tema ${themeNumber}',
      'Objetivo 3 del tema ${themeNumber}'
    ],
    conceptosClave: [],
    ejemplos: []
  },
  ejercicios: [],
  recursos: [
    {
      tipo: 'pdf',
      titulo: 'Slides del Tema ${themeNumber}',
      url: '/pdfs/tema${themeNumber}-${themeTitle.toLowerCase().replace(/\s+/g, '-')}.pdf'
    }
  ]
};`;
}