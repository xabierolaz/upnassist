import React from 'react';
import { motion } from 'framer-motion';
import { ExclamationTriangleIcon, ArrowLeftIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

interface ErrorScreenProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  onBack?: () => void;
}

export const ErrorScreen: React.FC<ErrorScreenProps> = ({ 
  title = 'Error', 
  message = 'Ha ocurrido un error inesperado',
  onRetry,
  onBack 
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full mx-4"
      >
        <div className="bg-white rounded-lg shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <ExclamationTriangleIcon className="w-10 h-10 text-red-600" />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
          <p className="text-gray-600 mb-6">{message}</p>
          
          <div className="flex gap-3 justify-center">
            {onBack && (
              <button
                onClick={onBack}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                Volver
              </button>
            )}
            {onRetry && (
              <button
                onClick={onRetry}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <ArrowPathIcon className="w-4 h-4" />
                Reintentar
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ErrorScreen;
