import { MapPin, Phone, Mail, Clock, Calendar, Linkedin, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";

const ContactInfo = () => {
  const { language } = useLanguage();
  const isArabic = false; // Force English mode
  const t = translations.contact[language];

  return (
    <section id="contact" className="py-16 px-2 md:px-4 lg:px-8 bg-gray-50 overflow-hidden" dir={isArabic ? "rtl" : "ltr"}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.title}</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>
        
        <div className={`grid grid-cols-1 gap-8 ${isArabic ? '' : 'lg:grid-cols-2'}`}>
          <div className="space-y-8 flex flex-col">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.primaryLocation}</h3>
              <div className="space-y-4">
                <div className={`flex items-start ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <MapPin className={`h-5 w-5 text-blue-600 ${isArabic ? 'ml-2' : 'mr-2'} mt-1`} />
                  <div>
                    <p className="font-medium">{t.address}</p>
                    <p>{t.city}</p>
                  </div>
                </div>
                
                <div className={`flex items-start ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <Phone className={`h-5 w-5 text-blue-600 ${isArabic ? 'ml-2' : 'mr-2'} mt-1`} />
                  <div>
                    <p className="font-medium">{t.directLine}</p>
                    <a href="tel:+14014434270" className="text-blue-600">+1 401-443-4270</a>
                  </div>
                </div>
                
                <div className={`flex items-start ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <Phone className={`h-5 w-5 text-blue-600 ${isArabic ? 'ml-2' : 'mr-2'} mt-1`} />
                  <div>
                    <p className="font-medium">{t.faxNumber}</p>
                    <p>+1 401-808-6673</p>
                  </div>
                </div>
                
                <div className={`flex items-start ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <Mail className={`h-5 w-5 text-blue-600 ${isArabic ? 'ml-2' : 'mr-2'} mt-1`} />
                  <div>
                    <p className="font-medium">{t.email}</p>
                    <a href="mailto:BDiebo@Universityorthopedics.com" className="text-blue-600">
                      BDiebo@Universityorthopedics.com
                    </a>
                  </div>
                </div>
                
                <div className={`flex items-start ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <Clock className={`h-5 w-5 text-blue-600 ${isArabic ? 'ml-2' : 'mr-2'} mt-1`} />
                  <div>
                    <p className="font-medium">{t.officeHours}</p>
                    <div className="space-y-1 mt-1">
                      <p>{t.weekdays}</p>
                      <p>{t.friday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.additionalLocations}</h3>
              <p className="text-gray-600 mb-4">
                {t.trafficNote}
              </p>
              <ul className="space-y-2">
                <li className={`flex items-start ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <MapPin className={`h-5 w-5 text-blue-600 ${isArabic ? 'ml-2' : 'mr-2'} mt-1 flex-shrink-0`} />
                  <span>Kettle Point, East Providence</span>
                </li>
                <li className={`flex items-start ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <MapPin className={`h-5 w-5 text-blue-600 ${isArabic ? 'ml-2' : 'mr-2'} mt-1 flex-shrink-0`} />
                  <span>Cumberland</span>
                </li>
                <li className={`flex items-start ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <MapPin className={`h-5 w-5 text-blue-600 ${isArabic ? 'ml-2' : 'mr-2'} mt-1 flex-shrink-0`} />
                  <span>Mansfield</span>
                </li>
                <li className={`flex items-start ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <MapPin className={`h-5 w-5 text-blue-600 ${isArabic ? 'ml-2' : 'mr-2'} mt-1 flex-shrink-0`} />
                  <span>East Greenwich</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.socialMedia}</h3>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.linkedin.com/in/bassel-george-diebo-md-24a44762/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-700 px-4 py-2 rounded-md border border-gray-200 transition-colors ${isArabic ? 'flex-row-reverse' : ''}`}
                >
                  <Linkedin className={`h-5 w-5 ${isArabic ? 'ml-2' : 'mr-2'} text-blue-600`} />
                  <span>{t.linkedin}</span>
                </a>
                <a 
                  href="https://www.instagram.com/basseldiebo_spinesurgeon/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center bg-white hover:bg-pink-50 text-gray-700 hover:text-pink-700 px-4 py-2 rounded-md border border-gray-200 transition-colors ${isArabic ? 'flex-row-reverse' : ''}`}
                >
                  <Instagram className={`h-5 w-5 ${isArabic ? 'ml-2' : 'mr-2'} text-pink-600`} />
                  <span>{t.instagram}</span>
                </a>
                <a 
                  href="https://x.com/BasselDiebo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 px-4 py-2 rounded-md border border-gray-200 transition-colors ${isArabic ? 'flex-row-reverse' : ''}`}
                >
                  <Twitter className={`h-5 w-5 ${isArabic ? 'ml-2' : 'mr-2'} text-gray-700`} />
                  <span>{t.twitter}</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="h-full">
            <div className="bg-white rounded-xl shadow-xl h-full overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <h3 className="text-xl font-semibold">{t.visitUs}</h3>
                <p className="text-blue-100 text-sm">1 Kettle Point Ave, East Providence, RI 02914</p>
              </div>
              
              <div className="relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                <div className="animate-fadeIn">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.457569928998!2d-71.38106792404424!3d41.83376116440404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e451fb512e0c4d%3A0xa48dea1c81a0788b!2s1%20Kettle%20Point%20Ave%2C%20East%20Providence%2C%20RI%2002914!5e0!3m2!1sen!2sus!4v1716499531178!5m2!1sen!2sus"
                    className="w-full h-[280px] md:h-[320px] lg:h-[300px] xl:h-[320px] border-y border-gray-100"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="Dr. Diebo's Office Location"
                  ></iframe>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 flex items-center justify-center gap-2 py-5 shadow-md hover:shadow-lg"
                  onClick={() => window.open('https://www.google.com/maps/dir/12.863356,74.8569929/1+Kettle+Point+Ave,+East+Providence,+RI+02914,+USA/@1.9861616,-84.4123351,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x89e45aaa2f4773d9:0x3d34746077691b28!2m2!1d-71.3769187!2d41.7964322?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D', '_blank')}
                >
                  <MapPin className="h-5 w-5" />
                  {t.getDirections}
                </Button>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button className="bg-gray-50 hover:bg-gray-100 text-gray-800 border border-gray-200 transition-all" variant="outline" asChild>
                    <a href="tel:+14014434270" className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      {t.callUs}
                    </a>
                  </Button>
                  
                  <Button className="bg-gray-50 hover:bg-gray-100 text-gray-800 border border-gray-200 transition-all" variant="outline" asChild>
                    <a href="mailto:BDiebo@Universityorthopedics.com" className="flex items-center justify-center gap-2">
                      <Mail className="h-4 w-4" />
                      {t.emailUs}
                    </a>
                  </Button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h4 className="text-gray-900 font-medium mb-3 flex items-center">
                    <Calendar className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                    {t.appointmentInfo}
                  </h4>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="font-medium text-blue-700 mb-1">{t.newPatients}</p>
                      <p>{t.newPatientsInfo}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="font-medium text-gray-700 mb-1">{t.whatToBring}</p>
                      <p>{t.whatToBringInfo}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="container mx-auto mt-20 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">© {new Date().getFullYear()} Dr. Bassel G. Diebo. {t.allRightsReserved}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
