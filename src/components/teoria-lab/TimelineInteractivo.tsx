import { useState, useEffect } from 'react';
import { InformationCircleIcon, CheckCircleIcon  } from '@heroicons/react/24/outline';

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
  category: 'crisis' | 'metodologia' | 'lenguaje' | 'herramienta';
}

const events: TimelineEvent[] = [
  {
    year: 1968,
    title: 'Crisis del Software',
    description: 'La conferencia de la OTAN en Garmisch identifica la "crisis del software". Los proyectos se retrasan, cuestan más de lo previsto y no cumplen requisitos.',
    impact: 'high',
    category: 'crisis'
  },
  {
    year: 1970,
    title: 'Modelo Cascada',
    description: 'Winston Royce describe el modelo en cascada (waterfall), aunque advierte sobre sus limitaciones.',
    impact: 'high',
    category: 'metodologia'
  },
  {
    year: 1972,
    title: 'Programación Estructurada',
    description: 'Dijkstra populariza la programación estructurada. "Go To Statement Considered Harmful".',
    impact: 'medium',
    category: 'metodologia'
  },
  {
    year: 1980,
    title: 'Smalltalk-80',
    description: 'Se lanza Smalltalk-80, popularizando la Programación Orientada a Objetos.',
    impact: 'high',
    category: 'lenguaje'
  },
  {
    year: 1985,
    title: 'C++',
    description: 'Bjarne Stroustrup publica "The C++ Programming Language", llevando POO al mainstream.',
    impact: 'high',
    category: 'lenguaje'
  },
  {
    year: 1991,
    title: 'Java',
    description: 'Sun Microsystems comienza el desarrollo de Java. "Write once, run anywhere".',
    impact: 'high',
    category: 'lenguaje'
  },
  {
    year: 2001,
    title: 'Manifiesto Ágil',
    description: '17 desarrolladores firman el Manifiesto Ágil, revolucionando el desarrollo de software.',
    impact: 'high',
    category: 'metodologia'
  },
  {
    year: 2003,
    title: 'Scrum',
    description: 'Scrum se populariza como framework ágil líder para gestión de proyectos.',
    impact: 'medium',
    category: 'metodologia'
  },
  {
    year: 2011,
    title: 'DevOps',
    description: 'El movimiento DevOps integra desarrollo y operaciones para entrega continua.',
    impact: 'high',
    category: 'metodologia'
  },
  {
    year: 2020,
    title: 'IA en Desarrollo',
    description: 'GitHub Copilot y herramientas de IA comienzan a asistir en la escritura de código.',
    impact: 'high',
    category: 'herramienta'
  }
];

export default function TimelineInteractivo() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [filter, setFilter] = useState<string>('todos');
  const [viewedEvents, setViewedEvents] = useState<Set<string>>(new Set());
  
  const isCompleted = false;

  useEffect(() => {
  }, []);

  const handleEventClick = (event: TimelineEvent) => {
    setSelectedEvent(event);
    setViewedEvents(prev => new Set(prev).add(`${event.year}`));
    
    // Completar si ha visto al menos 7 eventos
    if (!isCompleted && viewedEvents.size >= 6) { // 6 + el actual = 7
      // completeTool('timeline', score);
    }
  };

  const filteredEvents = filter === 'todos' 
    ? events 
    : events.filter(e => e.category === filter);

  const getCategoryColor = (category: TimelineEvent['category']) => {
    switch (category) {
      case 'crisis': return 'bg-red-500';
      case 'metodologia': return 'bg-blue-500';
      case 'lenguaje': return 'bg-green-500';
      case 'herramienta': return 'bg-purple-500';
    }
  };

  const getImpactSize = (impact: TimelineEvent['impact']) => {
    switch (impact) {
      case 'low': return 'w-3 h-3';
      case 'medium': return 'w-4 h-4';
      case 'high': return 'w-5 h-5';
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            Timeline de la Ingeniería del Software
            {isCompleted && (
              <CheckCircleIcon className="w-6 h-6 text-green-500" title="Completado" />
            )}
          </h3>
          <div className="text-sm text-gray-600">
            {viewedEvents.size}/10 eventos explorados
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          Explora los eventos más importantes en la historia del desarrollo de software.
          {!isCompleted && ' Visualiza al menos 7 eventos para completar esta actividad.'}
        </p>
      </div>

      {/* Filtros */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setFilter('todos')}
          className={`px-3 py-1 rounded-full text-sm transition-colors ${
            filter === 'todos' 
              ? 'bg-gray-800 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Todos
        </button>
        <button
          onClick={() => setFilter('crisis')}
          className={`px-3 py-1 rounded-full text-sm transition-colors ${
            filter === 'crisis' 
              ? 'bg-red-500 text-white' 
              : 'bg-red-100 text-red-700 hover:bg-red-200'
          }`}
        >
          Crisis
        </button>
        <button
          onClick={() => setFilter('metodologia')}
          className={`px-3 py-1 rounded-full text-sm transition-colors ${
            filter === 'metodologia' 
              ? 'bg-blue-500 text-white' 
              : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
          }`}
        >
          Metodologías
        </button>
        <button
          onClick={() => setFilter('lenguaje')}
          className={`px-3 py-1 rounded-full text-sm transition-colors ${
            filter === 'lenguaje' 
              ? 'bg-green-500 text-white' 
              : 'bg-green-100 text-green-700 hover:bg-green-200'
          }`}
        >
          Lenguajes
        </button>
        <button
          onClick={() => setFilter('herramienta')}
          className={`px-3 py-1 rounded-full text-sm transition-colors ${
            filter === 'herramienta' 
              ? 'bg-purple-500 text-white' 
              : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
          }`}
        >
          Herramientas
        </button>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300"></div>
        
        <div className="space-y-6">
          {filteredEvents.map((event, _index) => (
            <div
              key={event.year}
              className="relative flex items-start cursor-pointer group"
              onClick={() => handleEventClick(event)}
            >
              <div className={`absolute left-0 transform -translate-x-1/2 
                ${getImpactSize(event.impact)} ${getCategoryColor(event.category)} 
                rounded-full ring-4 ring-white group-hover:ring-gray-100 transition-all`}>
              </div>
              
              <div className="ml-8 flex-1 bg-gray-50 group-hover:bg-gray-100 rounded-lg p-4 transition-colors">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900">{event.year} - {event.title}</h4>
                  <InformationCircleIcon className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de detalle */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
             onClick={() => setSelectedEvent(null)}>
          <div className="bg-white rounded-lg max-w-lg w-full p-6"
               onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                {selectedEvent.year} - {selectedEvent.title}
              </h3>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-3">
              <p className="text-gray-700">{selectedEvent.description}</p>
              
              <div className="flex items-center gap-4 text-sm">
                <span className={`px-2 py-1 rounded ${getCategoryColor(selectedEvent.category)} text-white`}>
                  {selectedEvent.category}
                </span>
                <span className="text-gray-600">
                  Impacto: {selectedEvent.impact === 'high' ? 'Alto' : selectedEvent.impact === 'medium' ? 'Medio' : 'Bajo'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
