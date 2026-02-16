import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('influenceai-lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('influenceai-lang', language);
    document.documentElement.lang = language === 'bn' ? 'bn' : 'en';
    if (language === 'bn') {
      document.body.classList.add('font-bangla');
    } else {
      document.body.classList.remove('font-bangla');
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'bn' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
};
