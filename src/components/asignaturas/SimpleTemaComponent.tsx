import React from 'react';

interface SimpleTemaProps {
  numero: number;
  titulo: string;
  descripcion: string;
  contenido: {
    introduccion: string;
    objetivos: string[];
    conceptosClave: { titulo: string; descripcion: string }[];
    resumen?: string;
  };
}

const SimpleTemaComponent: React.FC<SimpleTemaProps> = ({ numero, titulo, descripcion, contenido }) => {
  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Tema {numero}: {titulo}</h1>
          <p className="text-lg text-gray-600">{descripcion}</p>
        </div>
        
        {/* Introducción */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Introducción</h2>
          <p className="text-gray-700 leading-relaxed">{contenido.introduccion}</p>
        </section>

        {/* Objetivos */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Objetivos del Tema</h2>
          <ul className="space-y-2">
            {contenido.objetivos.map((objetivo, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                <span className="text-gray-700">{objetivo}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Conceptos Clave */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">Conceptos Clave</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contenido.conceptosClave.map((concepto, index) => (
              <div key={index} className="p-4 border-2 border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">{concepto.titulo}</h3>
                <p className="text-gray-600 text-sm">{concepto.descripcion}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Resumen */}
        {contenido.resumen && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-orange-700">Resumen</h2>
            <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
              <p className="text-gray-700">{contenido.resumen}</p>
            </div>
          </section>
        )}

        {/* Footer con recursos */}
        <div className="mt-12 pt-8 border-t-2 border-gray-200">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">Tema {numero} - {titulo}</p>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                Ejercicios
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
                Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleTemaComponent;