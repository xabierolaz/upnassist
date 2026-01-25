import React from 'react';
import { useLanguageStore, Language } from '../../store/languageStore';

export const LanguageSwitcher: React.FC = () => {
  const { currentLang, setLanguage } = useLanguageStore();

  const handleLangChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="flex items-center bg-gray-100 rounded-md p-1 space-x-1">
      {(['ENG', 'CAS', 'EUS'] as Language[]).map((lang) => (
        <button
          key={lang}
          onClick={() => handleLangChange(lang)}
          className={`
            px-2 py-1 text-xs font-bold rounded
            transition-all duration-200
            ${currentLang === lang 
              ? 'bg-white text-[#c0392b] shadow-sm' 
              : 'text-gray-500 hover:text-gray-800 hover:bg-gray-200'}
          `}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};
