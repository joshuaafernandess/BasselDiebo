import { useState } from 'react';
import { Search } from 'lucide-react'; // Importing a magnifying glass-like icon
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";

type CaseImageProps = {
  src: string;
  alt: string;
};

const CaseImage = ({ src, alt }: CaseImageProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isArabic } = useLanguage();

  return (
    <>
      <div 
        className="relative h-48 bg-gray-200 overflow-hidden group cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-20">
          <Search className="text-white opacity-0 group-hover:opacity-100 h-8 w-8 transition-opacity duration-300" />
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none" dir={isArabic ? "rtl" : "ltr"}>
          <div className="relative bg-white rounded-lg overflow-hidden">
            <img 
              src={src} 
              alt={alt} 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <button 
              className={`absolute ${isArabic ? 'top-2 left-2' : 'top-2 right-2'} bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70 transition-all`}
              onClick={() => setIsOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CaseImage;
