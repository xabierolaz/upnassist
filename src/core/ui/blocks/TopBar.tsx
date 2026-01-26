import React from 'react';
import { useLanguageStore } from '../../store/languageStore';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { useAuthStore } from '../../../stores/authStore';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';

export const TopBar: React.FC = () => {
  const { t } = useLanguageStore();
  const { user, logout } = useAuthStore();

  return (
    <div className="bg-white shadow-sm border-b border-gray-200 py-2 px-4 flex justify-between items-center z-20">
      <div className="flex items-center space-x-4">
        <div className="font-bold text-xl text-[#c0392b] tracking-tight">
            {t.title}
        </div>
        <div className="hidden md:block text-xs text-gray-500 uppercase tracking-wide border-l border-gray-300 pl-4">
            {t.university}
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        {user && (
          <div className="hidden sm:flex items-center space-x-2 text-xs text-gray-600 mr-2">
            <span className="font-medium">{user.email}</span>
            {user.role === 'admin' && (
              <span className="bg-red-100 text-red-700 px-1.5 py-0.5 rounded text-[10px] font-bold uppercase">Admin</span>
            )}
            <button 
              onClick={() => logout()}
              title="Cerrar sesión"
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowRightStartOnRectangleIcon className="h-4 w-4 text-gray-400 hover:text-red-600" />
            </button>
          </div>
        )}
        <LanguageSwitcher />
      </div>
    </div>
  );
};
