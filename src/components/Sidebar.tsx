import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  HomeIcon,
  CodeBracketIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isDashboard = location.pathname === '/' || location.pathname === '/upnassist/dashboard';
  const isPythonCourse = location.pathname.includes('/asignatura/509102');
  const isPlayground = location.pathname.includes('/pyxom');

  return (
    <div className="w-64 bg-white border-r border-gray-200 shadow-sm flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 flex items-center gap-3">
        <div className="bg-indigo-600 text-white p-1.5 rounded-lg">
          <CodeBracketIcon className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">Pyxom</h2>
      </div>

      {/* Navegación */}
      <nav className="flex-1 p-4 space-y-2">
        <button
          onClick={() => navigate('/upnassist/dashboard')}
          className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all font-medium ${
            isDashboard
              ? 'bg-indigo-50 text-indigo-700'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          }`}
        >
          <HomeIcon className="w-5 h-5" />
          <span>Inicio</span>
        </button>

        <div className="pt-4 pb-2">
          <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Aprendizaje
          </p>
        </div>

        <button
          onClick={() => navigate('/upnassist/asignatura/509102')}
          className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all font-medium ${
            isPythonCourse
              ? 'bg-indigo-50 text-indigo-700'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          }`}
        >
          <BookOpenIcon className="w-5 h-5" />
          <span>Curso de Python</span>
        </button>

        <button
          onClick={() => navigate('/upnassist/pyxom')}
          className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all font-medium ${
            isPlayground
              ? 'bg-indigo-50 text-indigo-700'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          }`}
        >
          <CodeBracketIcon className="w-5 h-5" />
          <span>Playground</span>
        </button>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="text-xs text-center text-gray-400">
          v2026.1 • Local AI
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
