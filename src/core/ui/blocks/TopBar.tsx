import React from 'react';
import { useLanguageStore } from '../../store/languageStore';
import { LanguageSwitcher } from '../common/LanguageSwitcher';

export const TopBar: React.FC = () => {
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
      </div>
    </div>
  );
};