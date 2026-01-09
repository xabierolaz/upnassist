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
        {/* Tarjeta de Acceso Directo a Python MOOC */}
        <div 
          onClick={() => navigate('/upnassist/mooc')} 
          className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-l-[#c0392b] hover:shadow-lg transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-red-50 text-[#c0392b] rounded-lg group-hover:bg-[#c0392b] group-hover:text-white transition-colors">
              <CodeBracketIcon className="w-8 h-8" />
            </div>
            <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded-full uppercase">Nuevo</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Python Programming MOOC 2026</h3>
          <p className="text-gray-500 text-sm mb-4">
            Versión interactiva del curso oficial de la Universidad de Helsinki. Aprende Python desde cero con feedback en tiempo real.
          </p>
          <div className="text-sm font-medium text-[#c0392b] flex items-center">
            Comenzar ahora →
          </div>
        </div>

        {/* Tarjeta de Asignatura Tradicional */}
        <div 
          onClick={() => navigate('/upnassist/asignatura/509102')}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <BookOpenIcon className="w-8 h-8" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Informática (Grado)</h3>
          <p className="text-gray-500 text-sm">
            Recursos clásicos de la asignatura: Diapositivas, PDF y Exámenes anteriores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
