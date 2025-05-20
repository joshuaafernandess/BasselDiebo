import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { languageCookieUtil } from '@/utils/languageCookieUtil';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  isArabic: boolean;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize with 'en' as default, but will check for cookie preference on mount
  const [language, setLanguageState] = useState<Language>('en');

  // On component mount, check for saved language preference in cookie
  useEffect(() => {
    // Only run on client-side
    if (typeof window !== 'undefined') {
      const savedLanguage = languageCookieUtil.getLanguagePreference();
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
        setLanguageState(savedLanguage as Language);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    languageCookieUtil.setLanguagePreference(lang);
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
  };

  const isArabic = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, isArabic, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
