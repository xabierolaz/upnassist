import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

interface BackToDashboardProps {
  className?: string;
}

const BackToDashboard: React.FC<BackToDashboardProps> = ({ className = '' }) => {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate('/upnassist/dashboard');
  };
  
  return (
    <button
      onClick={handleBack}
      className={`flex items-center text-blue-600 hover:text-blue-800 transition-colors ${className}`}
    >
      <ArrowLeftIcon className="h-5 w-5 mr-2" />
      Volver al Dashboard
    </button>
  );
};

export default BackToDashboard;
