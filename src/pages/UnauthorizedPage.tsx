/**
 * Página de Acceso No Autorizado
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const UnauthorizedPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <ExclamationTriangleIcon className="w-10 h-10 text-red-600" />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Acceso No Autorizado
          </h1>
          
          <p className="text-gray-600 mb-6">
            No tienes permisos para acceder a esta sección.
            Contacta con el administrador si crees que esto es un error.
          </p>
          
          <div className="space-y-3">
            <button
              onClick={() => navigate(-1)}
              className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Volver Atrás
            </button>
            
            <button
              onClick={() => navigate('/upnassist')}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Ir al Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedPage;