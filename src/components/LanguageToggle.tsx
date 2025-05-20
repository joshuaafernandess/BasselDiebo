import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

const LanguageToggle = () => {
  const { toggleLanguage, isArabic } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // On first render, add a brief animation to make language toggle noticeable
  useEffect(() => {
    // Wait for component to mount, then make it visible
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // After 2 seconds, highlight it
      const highlightTimer = setTimeout(() => {
        setIsHovered(true);
        
        // And reset after 1 second
        const resetTimer = setTimeout(() => {
          setIsHovered(false);
        }, 1000);
        
        return () => clearTimeout(resetTimer);
      }, 1500);
      
      return () => clearTimeout(highlightTimer);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <button
      onClick={toggleLanguage}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex items-center transition-all duration-300 px-3 py-1.5 rounded-md ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${
        isHovered || isArabic 
          ? 'bg-blue-100 text-blue-700' 
          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
      } ${isHovered ? 'scale-105' : 'scale-100'}`}
      aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}
      title={isArabic ? "Switch to English" : "التبديل إلى العربية"}
      dir={!isArabic && "rtl"}
    >
      <Globe className={`h-5 w-5 ${isArabic ? 'mr-2' : 'ml-2'}`} />
      <span className={`text-sm font-medium ${!isArabic ? 'text-xs' : ''}`}>
        {isArabic ? "English" : "العربية"}
      </span>
    </button>
  );
};

export default LanguageToggle;
