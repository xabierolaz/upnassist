import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CodeBracketIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Bienvenido a Pyxom</h1>
        <p className="mt-2 text-gray-600">Plataforma de aprendizaje interactivo de Python.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tarjeta de Acceso Directo a Python */}
        <div 
          onClick={() => navigate('/upnassist/asignatura/509102')} // Código de informática
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <CodeBracketIcon className="w-8 h-8" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Curso de Python</h3>
          <p className="text-gray-500 text-sm">
            Accede al curso completo de Informática: Fundamentos, Estructuras de Control y Funciones.
          </p>
        </div>

        {/* Tarjeta de Playground (Futuro) */}
        <div 
          onClick={() => navigate('/upnassist/pyxom')}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 text-green-600 rounded-lg group-hover:bg-green-600 group-hover:text-white transition-colors">
              <BookOpenIcon className="w-8 h-8" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Playground Libre</h3>
          <p className="text-gray-500 text-sm">
            Editor de código libre para experimentar con Python y WebLLM.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
