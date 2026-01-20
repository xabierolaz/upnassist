import React from 'react';
import { useAuthStore } from '../../stores/authStore';
import { useLanguageStore } from '../../stores/languageStore';
import { LanguageSwitcher } from '../common/LanguageSwitcher';

export const TopBar: React.FC = () => {
  const { user, logout } = useAuthStore();
  const { t } = useLanguageStore();

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
        <LanguageSwitcher />
        
        {user && (
          <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-bold text-gray-800 leading-tight">{user.name}</div>
              <div className="text-xs text-gray-500">{user.email}</div>
            </div>
            <button 
              onClick={logout}
              className="text-gray-500 hover:text-[#c0392b] transition-colors text-sm font-medium"
            >
              {t.logOut}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
