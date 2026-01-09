import React from 'react';
import { AcademicCapIcon, UserGroupIcon  } from '@heroicons/react/24/outline';

interface UserModeSwitchProps {
  currentMode?: 'student' | 'professor';
  onModeChange: (mode: 'student' | 'professor') => void;
}

const UserModeSwitch: React.FC<UserModeSwitchProps> = ({ currentMode = 'student', onModeChange }) => {
  return (
    <div className="flex items-center bg-gray-100 rounded-full p-0.5">
      <button
        onClick={() => onModeChange('student')}
        className={`flex items-center px-2 py-1 rounded-full text-xs font-medium transition-all ${
          currentMode === 'student'
            ? 'bg-blue-500 text-white shadow-sm'
            : 'text-gray-600 hover:text-gray-800'
        }`}
        title="Modo Estudiante"
      >
        <AcademicCapIcon className="h-3.5 w-3.5" />
        <span className="hidden sm:inline ml-1">Estudiante</span>
      </button>
      <button
        onClick={() => onModeChange('professor')}
        className={`flex items-center px-2 py-1 rounded-full text-xs font-medium transition-all ${
          currentMode === 'professor'
            ? 'bg-green-500 text-white shadow-sm'
            : 'text-gray-600 hover:text-gray-800'
        }`}
        title="Modo Profesor"
      >
        <UserGroupIcon className="h-3.5 w-3.5" />
        <span className="hidden sm:inline ml-1">Profesor</span>
      </button>
    </div>
  );
};

export default UserModeSwitch;
