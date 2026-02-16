import { useLanguage } from '../context/LanguageContext';
import { en } from '../translations/en';
import { bn } from '../translations/bn';

// Returns the full translation object for the current language.
// Usage in any component:
//   const t = useT();
//   <h1>{t.hero.headline1}</h1>

export const useT = () => {
  const { language } = useLanguage();
  return language === 'bn' ? bn : en;
};
