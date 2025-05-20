import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const isArabic = false; // Force English mode
  const t = translations.navigation[language];
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm ${isMobile ? "py-3" : "py-4"}`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex items-center justify-between ${isArabic ? 'flex-row-reverse' : ''}`}>
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-800">{t.adultScoliosis}</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-700 font-medium">{t.about}</a>
            <a href="#services" className="text-gray-700 hover:text-blue-700 font-medium">{t.services}</a>
            <a href="#cases" className="text-gray-700 hover:text-blue-700 font-medium">{t.cases}</a>
            <a href="#reviews" className="text-gray-700 hover:text-blue-700 font-medium">{t.reviews}</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-700 font-medium">{t.contact}</a>
            <LanguageToggle />
          </nav>

          <div className="hidden md:flex items-center">
            <a href="tel:+14014434270" className="flex items-center text-blue-700 font-medium">
              <Phone className={`h-4 w-4 ${isArabic ? "ml-2" : "mr-2"}`} />
              <span>401-443-4270</span>
            </a>
            <Button 
              className={`${isArabic ? "mr-6" : "ml-6"}`} 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t.schedule}
            </Button>
          </div>

          {/* Mobile Icons for Quick Access */}
          <div className={`flex items-center md:hidden w-full justify-between px-2 ${isArabic ? 'flex-row-reverse space-x-reverse' : 'space-x-0'}`}>
            <div className="flex items-center space-x-0.5">
              <LanguageToggle />
            </div>
            <a href="tel:+14014434270" className="flex items-center text-blue-700 font-medium" aria-label="Call">
              <Phone className="h-5 w-5" />
            </a>
            <button
              className="text-gray-700 ml-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4 py-4">
              <a href="#about" className="text-gray-700 hover:text-blue-700 font-medium" onClick={toggleMenu}>{t.about}</a>
              <a href="#services" className="text-gray-700 hover:text-blue-700 font-medium" onClick={toggleMenu}>{t.services}</a>
              <a href="#cases" className="text-gray-700 hover:text-blue-700 font-medium" onClick={toggleMenu}>{t.cases}</a>
              <a href="#reviews" className="text-gray-700 hover:text-blue-700 font-medium" onClick={toggleMenu}>{t.reviews}</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-700 font-medium" onClick={toggleMenu}>{t.contact}</a>
              <Button className="mt-2">{t.schedule}</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
