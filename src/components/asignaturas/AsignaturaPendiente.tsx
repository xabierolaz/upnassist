import React from 'react';
import { ArrowLeftIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

interface AsignaturaPendienteProps {
  nombre: string;
  codigo: string;
  descripcion: string;
}

const AsignaturaPendiente: React.FC<AsignaturaPendienteProps> = ({ nombre, codigo, descripcion }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/upnassist/asignaturas')}
          className="mb-4 flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Volver a asignaturas
        </button>

        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <WrenchScrewdriverIcon className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{nombre}</h1>
          <p className="text-gray-600 mb-4">Código: {codigo}</p>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold text-yellow-900 mb-2">
              🚧 Asignatura en Construcción
            </h2>
            <p className="text-yellow-800">
              Esta asignatura está siendo migrada al nuevo sistema de organización por temas.
            </p>
            <p className="text-sm text-yellow-700 mt-2">
              {descripcion}
            </p>
          </div>

          <div className="text-gray-600">
            <p className="mb-4">
              Próximamente disponible con:
            </p>
            <ul className="space-y-2 text-left max-w-md mx-auto">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Contenido organizado por temas
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Teoría y práctica integradas
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Descarga de PDFs por tema
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Seguimiento de progreso detallado
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsignaturaPendiente;
