import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', name: 'English', flag: '/flags/gb.svg' },
  { code: 'ua', name: 'Українська', flag: '/flags/ua.svg' },
  { code: 'ru', name: 'Кацапский', flag: '/flags/ru.svg' },
  // Додайте сюди інші 14 мов з вашого списку EDMOON_SITE.txt
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center p-2 border border-gray-700 rounded-md hover:bg-gray-800 transition-colors"
      >
        <img src={currentLanguage.flag} alt={currentLanguage.name} className="w-6 h-auto mr-2 rounded-sm" />
        <svg className={`w-4 h-4 ml-1 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full flex items-center px-4 py-2 text-sm text-left hover:bg-gray-700 ${i18n.language === lang.code ? 'bg-indigo-600' : ''}`}
            >
              <img src={lang.flag} alt={lang.name} className="w-5 h-auto mr-3 rounded-sm" />
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;