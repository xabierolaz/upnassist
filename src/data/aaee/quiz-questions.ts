export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topic: string;
}

export const quizQuestions: Record<string, QuizQuestion[]> = {
  tema1: [
    {
      id: 'q1-1',
      question: '¿Qué es la gestión empresarial?',
      options: [
        'Solo administración de recursos humanos',
        'Proceso de planificar, organizar, dirigir y controlar recursos',
        'Únicamente control financiero',
        'Gestión de inventarios'
      ],
      correctAnswer: 1,
      explanation: 'La gestión empresarial abarca todos los procesos de planificación, organización, dirección y control de recursos para alcanzar los objetivos organizacionales.',
      topic: 'Gestión Empresarial'
    }
  ],
  tema2: [
    {
      id: 'q2-1',
      question: '¿Qué es el análisis económico?',
      options: [
        'Solo el estudio de precios',
        'El estudio de cómo se asignan recursos escasos',
        'Únicamente contabilidad',
        'Solo estadísticas'
      ],
      correctAnswer: 1,
      explanation: 'El análisis económico estudia cómo se asignan los recursos escasos para satisfacer necesidades ilimitadas.',
      topic: 'Análisis Económico'
    }
  ],
  tema3: [
    {
      id: 'q3-1',
      question: '¿Cuáles son las 4 P del marketing?',
      options: [
        'Producto, Precio, Plaza, Promoción',
        'Personas, Proceso, Producto, Precio',
        'Publicidad, Precio, Plaza, Personas',
        'Producto, Personas, Proceso, Publicidad'
      ],
      correctAnswer: 0,
      explanation: 'Las 4 P del marketing son: Producto, Precio, Plaza (distribución) y Promoción.',
      topic: 'Marketing'
    }
  ],
  tema4: [
    {
      id: 'q4-1',
      question: '¿Qué es la gestión de recursos humanos?',
      options: [
        'Solo contratar personal',
        'Gestión integral del talento humano en la organización',
        'Únicamente pagar salarios',
        'Solo capacitación'
      ],
      correctAnswer: 1,
      explanation: 'La gestión de RRHH incluye reclutamiento, selección, capacitación, desarrollo, compensación y retención del talento.',
      topic: 'Recursos Humanos'
    }
  ],
  tema5: [
    {
      id: 'q5-1',
      question: '¿Qué es la gestión de operaciones?',
      options: [
        'Solo producción',
        'Administración de procesos que crean bienes y servicios',
        'Únicamente logística',
        'Solo control de calidad'
      ],
      correctAnswer: 1,
      explanation: 'La gestión de operaciones administra los procesos que transforman insumos en productos o servicios finales.',
      topic: 'Operaciones'
    }
  ],
  tema6: [
    {
      id: 'q6-1',
      question: '¿Qué es el VAN (Valor Actual Neto)?',
      options: [
        'Un tipo de préstamo',
        'Diferencia entre valor presente de ingresos y egresos',
        'Solo ingresos futuros',
        'Un tipo de impuesto'
      ],
      correctAnswer: 1,
      explanation: 'El VAN es la diferencia entre el valor presente de los flujos de efectivo futuros y la inversión inicial.',
      topic: 'Finanzas'
    }
  ],
  tema7: [
    {
      id: 'q7-1',
      question: '¿Qué es la partida doble en contabilidad?',
      options: [
        'Registrar dos veces',
        'Todo asiento tiene débito y crédito equivalentes',
        'Solo para empresas grandes',
        'Un tipo de impuesto'
      ],
      correctAnswer: 1,
      explanation: 'La partida doble establece que todo asiento contable debe tener un débito y un crédito de igual valor.',
      topic: 'Contabilidad'
    }
  ],
  tema8: [
    {
      id: 'q8-1',
      question: '¿Qué es el análisis FODA?',
      options: [
        'Solo análisis financiero',
        'Fortalezas, Oportunidades, Debilidades y Amenazas',
        'Un tipo de contrato',
        'Solo para marketing'
      ],
      correctAnswer: 1,
      explanation: 'FODA analiza factores internos (Fortalezas y Debilidades) y externos (Oportunidades y Amenazas) de una organización.',
      topic: 'Estrategia'
    }
  ],
  tema9: [
    {
      id: 'q9-1',
      question: '¿Qué es la innovación disruptiva?',
      options: [
        'Mejoras pequeñas',
        'Innovación que crea nuevos mercados',
        'Solo tecnología',
        'Copiar a la competencia'
      ],
      correctAnswer: 1,
      explanation: 'La innovación disruptiva crea nuevos mercados y cadenas de valor, desplazando tecnologías establecidas.',
      topic: 'Innovación'
    }
  ],
  tema10: [
    {
      id: 'q10-1',
      question: '¿Qué es la globalización empresarial?',
      options: [
        'Solo exportar',
        'Integración de mercados y operaciones a nivel mundial',
        'Solo importar',
        'Tener una página web'
      ],
      correctAnswer: 1,
      explanation: 'La globalización empresarial implica la integración de operaciones, mercados y estrategias a escala mundial.',
      topic: 'Internacional'
    }
  ],
  tema11: [
    {
      id: 'q11-1',
      question: '¿Qué es la responsabilidad social empresarial?',
      options: [
        'Solo cumplir leyes',
        'Compromiso con el desarrollo sostenible y stakeholders',
        'Solo donaciones',
        'Marketing verde'
      ],
      correctAnswer: 1,
      explanation: 'La RSE es el compromiso de las empresas con el desarrollo sostenible y el bienestar de todos sus stakeholders.',
      topic: 'Sostenibilidad'
    }
  ]
};

export function getQuizQuestions(tema: string): QuizQuestion[] {
  return quizQuestions[tema] || [];
}

export function getRandomQuestions(tema: string, count: number = 5): QuizQuestion[] {
  const questions = quizQuestions[tema] || [];
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}