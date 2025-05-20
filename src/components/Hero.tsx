import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const Hero = () => {
  const { language, isArabic } = useLanguage();
  const t = translations.hero[language];

  return (
    <section className="relative bg-gray-900 text-white" dir={isArabic ? "rtl" : "ltr"}>
      <div 
        className="absolute inset-0 bg-cover bg-center filter blur-md transition-all duration-700 ease-in-out"
        style={{ backgroundImage: "url('/Diebo Media/Brown Ortho Spine Logo.png')" }}
      />
      <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-700 ease-in-out" />
      <div className="relative container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t.title}
          </h1>
          <div className="space-y-2 text-xl md:text-2xl mb-8 max-w-2xl">
            <p>{t.role}</p>
            <p>{t.professor}</p>
            <p>{t.researchDirector}</p>
            <p>{t.fellowshipDirector}</p>
            <p>{t.university}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700" 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t.consultation} <ArrowRight className={`${isArabic ? 'mr-2 rotate-180' : 'ml-2'} h-5 w-5`} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent text-white border-white hover:bg-white/10"
              onClick={() => {
                const treatmentsSection = document.getElementById('services');
                if (treatmentsSection) {
                  treatmentsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t.treatments}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
