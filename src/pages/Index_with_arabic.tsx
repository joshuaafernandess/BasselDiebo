import { useState } from "react";
import { ArrowRight, MapPin, Phone, Mail, Clock, Calendar, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ReviewCard from "@/components/ReviewCard";
import ServiceCard from "@/components/ServiceCard";
import TreatmentCard from "@/components/TreatmentCard";
import ContactInfo from "@/components/ContactInfo";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TeamCard from "@/components/TeamCard";
import CaseImage from "@/components/CaseImage";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { teamTranslations, treatmentTranslations, procedureTranslations, locationTranslations } from "@/utils/teamTranslations";
import { serviceCardTranslations } from "@/utils/serviceTranslations";

const Index = () => {
  const [showLocationDialog, setShowLocationDialog] = useState(false);
  const { language, isArabic } = useLanguage();
  const aboutT = translations.about[language];
  const sectionsT = translations.sections[language];
  const teamT = teamTranslations[language];
  const treatmentT = treatmentTranslations[language];
  const procedureT = procedureTranslations[language];
  const serviceT = serviceCardTranslations[language];
  const locationT = locationTranslations[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content with padding for fixed navbar */}
      <div className="pt-16">
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50" dir={isArabic ? "rtl" : "ltr"}>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{aboutT.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {aboutT.bio}
                </p>
                <div className="pt-4">
                  <Button onClick={() => setShowLocationDialog(true)}>
                    {aboutT.appointment} <ArrowRight className={`${isArabic ? 'mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />
                  </Button>
                </div>
              </div>
              <div className="relative h-full rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/Diebo Media/Bassel Diebo Portrait.png" 
                  alt="Dr. Diebo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Reviews Section */}
        <section id="reviews" className="py-16 px-4 md:px-8 lg:px-16" dir={isArabic ? "rtl" : "ltr"}>
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{sectionsT.reviews.title}</h2>
              <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                {sectionsT.reviews.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ReviewCard 
                date="April 2024"
                text="I've literally waited 13 long years and been through 4 surgeons until I found Dr Daniels & Dr Diebo...They're the only ones I trusted to fix my severe kyphosis and scoliosis. It took 2 days to fix, but I'm a whole different person, I look like I've never had a spinal disability. I'm 3 weeks post-op, and for the first time in happy tears & felt a 5+ star 🌟 rating was overdue. I went from 5ft3in to 5ft7.5in. If I could give them 1 million stars I would ✨️ thank you for giving me a normal life back!"
              />
              <ReviewCard 
                date="March 2024"
                text="Dr. Bassel Diebo is amazing! I am 3 weeks post-op, walking straight as an arrow and no pain, only taking Tylenol when needed! There aren't enough stars to rate this surgeon!"
              />
              <ReviewCard 
                date="February 2024"
                text="I have been a patient of Dr Diebo since 05/26/2023 As an Orthopedic Spine Surgeon he is the best Dr's I have ever met. On 09/26/2023 in a single surgery He was able to fix my spine and my body. What (The other Dr. in 5 surgeries did not do it) Thank you Dr. B.G. Diebo."
              />
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section id="services" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50" dir={isArabic ? "rtl" : "ltr"}>
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{sectionsT.services.title}</h2>
              <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                {sectionsT.services.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard 
                title={serviceT.scoliosis.title}
                description={serviceT.scoliosis.description}
              />
              <ServiceCard 
                title={serviceT.flatback.title}
                description={serviceT.flatback.description}
              />
              <ServiceCard 
                title={serviceT.failedSurgery.title}
                description={serviceT.failedSurgery.description}
              />
              <ServiceCard 
                title={serviceT.posture.title}
                description={serviceT.posture.description}
              />
            </div>
            
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{sectionsT.services.spineConditions}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                <TreatmentCard title={treatmentT.agingSpine} />
                <TreatmentCard title={treatmentT.spondylolisthesis} />
                <TreatmentCard title={treatmentT.stenosis} />
                <TreatmentCard title={treatmentT.scoliosisDeformity} />
                <TreatmentCard title={treatmentT.herniatedDisc} />
                <TreatmentCard title={treatmentT.fractures} />
                <TreatmentCard title={treatmentT.failedBackSurgery} />
                <TreatmentCard title={treatmentT.tumors} />
                <TreatmentCard title={treatmentT.infections} />
              </div>
            </div>
            
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{sectionsT.services.spineProcedures}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Card className="bg-white">
                  <CardContent className="p-6 space-y-4" dir={isArabic ? "rtl" : "ltr"}>
                    <h4 className="font-semibold text-lg">{sectionsT.services.minimally}</h4>
                    <ul className="space-y-2">
                      <li className={`flex items-start ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
                        <Check className={`h-5 w-5 text-blue-600 ${isArabic ? 'ml-2' : 'mr-2'} mt-1 flex-shrink-0`} />
                        <span>{procedureT.minInvasiveFusions}</span>
                      </li>
                      <li className={`flex items-start ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
                        <Check className={`h-5 w-5 text-blue-600 ${isArabic ? 'ml-2' : 'mr-2'} mt-1 flex-shrink-0`} />
                        <span>{procedureT.minInvasiveDecompression}</span>
                      </li>
                      <li className={`flex items-start ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
                        <Check className={`h-5 w-5 text-blue-600 ${isArabic ? 'ml-2' : 'mr-2'} mt-1 flex-shrink-0`} />
                        <span>{procedureT.microdiscectomy}</span>
                      </li>
                      <li className={`flex items-start ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
                        <Check className={`h-5 w-5 text-blue-600 ${isArabic ? 'ml-2' : 'mr-2'} mt-1 flex-shrink-0`} />
                        <span>{procedureT.cervicalDiscReplacement}</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6 space-y-4" dir={isArabic ? "rtl" : "ltr"}>
                    <h4 className="font-semibold text-lg">{sectionsT.services.traditional}</h4>
                    <ul className="space-y-2">
                      <li className={`flex items-start ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
                        <Check className={`h-5 w-5 text-blue-600 ${isArabic ? 'ml-2' : 'mr-2'} mt-1 flex-shrink-0`} />
                        <span>{procedureT.tradOpenFusions}</span>
                      </li>
                      <li className={`flex items-start ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
                        <Check className={`h-5 w-5 text-blue-600 ${isArabic ? 'ml-2' : 'mr-2'} mt-1 flex-shrink-0`} />
                        <span>{procedureT.tradOpenDecompressions}</span>
                      </li>
                      <li className={`flex items-start ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
                        <Check className={`h-5 w-5 text-blue-600 ${isArabic ? 'ml-2' : 'mr-2'} mt-1 flex-shrink-0`} />
                        <span>{procedureT.fusionTypes}</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-6 space-y-4" dir={isArabic ? "rtl" : "ltr"}>
                    <h4 className="font-semibold text-lg">{sectionsT.services.advanced}</h4>
                    <ul className="space-y-2">
                      <li className={`flex items-start ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
                        <Check className={`h-5 w-5 text-blue-600 ${isArabic ? 'ml-2' : 'mr-2'} mt-1 flex-shrink-0`} />
                        <span>{procedureT.rodPedicle}</span>
                      </li>
                      <li className={`flex items-start ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
                        <Check className={`h-5 w-5 text-blue-600 ${isArabic ? 'ml-2' : 'mr-2'} mt-1 flex-shrink-0`} />
                        <span>{procedureT.osteotomies}</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 px-4 md:px-8 lg:px-16" dir={isArabic ? "rtl" : "ltr"}>
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{sectionsT.team.title}</h2>
              <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                {sectionsT.team.subtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
              <TeamCard 
                name={teamT.sonia.name}
                role={teamT.sonia.role}
                description={teamT.sonia.description}
                imageSrc="/Diebo Media/Team/Sonia Costa.png"
              />
              <TeamCard 
                name={teamT.victoria.name}
                role={teamT.victoria.role}
                description={teamT.victoria.description}
                imageSrc="/Diebo Media/Team/Victoria Costa.png"
              />
              <TeamCard 
                name={teamT.thomas.name}
                role={teamT.thomas.role}
                description={teamT.thomas.description}
                imageSrc="/Diebo Media/Team/Thomas Patrick.png"
              />
              <TeamCard 
                name={teamT.taylor.name}
                role={teamT.taylor.role}
                description={teamT.taylor.description}
                imageSrc="/Diebo Media/Team/Taylor Heck.png"
              />
            </div>
          </div>
        </section>
        
        {/* Case Studies Section */}
        <section id="cases" className="py-16 px-4 md:px-8 lg:px-16" dir={isArabic ? "rtl" : "ltr"}>
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{sectionsT.cases.title}</h2>
              <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                {sectionsT.cases.subtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden">
                <CaseImage src="/Diebo Media/Cases/Case 1.png" alt="Case 1" />
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{sectionsT.cases.case1.title}</h3>
                  <p className="text-gray-600">{sectionsT.cases.case1.description}</p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CaseImage src="/Diebo Media/Cases/Case 2.png" alt="Case 2" />
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{sectionsT.cases.case2.title}</h3>
                  <p className="text-gray-600">{sectionsT.cases.case2.description}</p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CaseImage src="/Diebo Media/Cases/Case 3.png" alt="Case 3" />
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{sectionsT.cases.case3.title}</h3>
                  <p className="text-gray-600">{sectionsT.cases.case3.description}</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <CaseImage src="/Diebo Media/Cases/Case 4.png" alt="Case 4" />
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{sectionsT.cases.case4.title}</h3>
                  <p className="text-gray-600">{sectionsT.cases.case4.description}</p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CaseImage src="/Diebo Media/Cases/Case 5.png" alt="Case 5" />
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{sectionsT.cases.case5.title}</h3>
                  <p className="text-gray-600">{sectionsT.cases.case5.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Societies Section */}
        <section id="societies" className="py-16 px-2 md:px-4 lg:px-8 bg-gray-50 overflow-hidden" dir={isArabic ? "rtl" : "ltr"}>
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{sectionsT.societies.title}</h2>
              <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                {sectionsT.societies.subtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
              <a href="https://www.spine.org/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105" title="North American Spine Society">
                <img src="/Diebo Media/Societies/Society he is a part of 1.png" alt="North American Spine Society" className="max-h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
              </a>
              <a href="https://www.aaos.org/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105" title="American Academy of Orthopaedic Surgeons">
                <img src="/Diebo Media/Societies/Society he is a part of 2.png" alt="American Academy of Orthopaedic Surgeons" className="max-h-24 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
              </a>
              <a href="https://www.alphaomegaalpha.org/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105" title="Alpha Omega Alpha Honor Medical Society">
                <img src="/Diebo Media/Societies/Society he is a part of 3.png" alt="Alpha Omega Alpha Honor Medical Society" className="max-h-20 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
              </a>
              <a href="https://www.aoassn.org/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105" title="American Orthopaedic Association">
                <img src="/Diebo Media/Societies/Society he is a part of 4.png" alt="American Orthopaedic Association" className="max-h-20 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
              </a>
              <a href="https://www.srs.org/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105" title="Scoliosis Research Society">
                <img src="/Diebo Media/Societies/Society he is a part of 5.png" alt="Scoliosis Research Society" className="max-h-20 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
              </a>
              <a href="https://issgf.org/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105" title="International Spine Study Group Foundation">
                <img src="/Diebo Media/Societies/Society he is a part of 6.png" alt="International Spine Study Group Foundation" className="max-h-20 w-auto grayscale hover:grayscale-0 transition-all duration-300" />
              </a>
            </div>
          </div>
        </section>
        
        {/* Academic Appointments and Education Section */}
        <section id="education" className="py-16 px-4 md:px-8 lg:px-16" dir={isArabic ? "rtl" : "ltr"}>
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{sectionsT.education.title}</h2>
              <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                {sectionsT.education.subtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-800">{sectionsT.education.positions.professor.title}</h3>
                      <p className="text-gray-700">{sectionsT.education.positions.professor.subtitle}</p>
                    </div>
                    <span className="text-gray-500 text-sm">{sectionsT.education.positions.professor.duration}</span>
                  </div>
                  <div className="space-y-1 text-gray-600">
                    {sectionsT.education.positions.professor.details.map((detail, index) => (
                      <p key={index}>{detail}</p>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-800">{sectionsT.education.positions.surgeon.title}</h3>
                    </div>
                    <span className="text-gray-500 text-sm">{sectionsT.education.positions.surgeon.duration}</span>
                  </div>
                  <div className="space-y-1 text-gray-600">
                    {sectionsT.education.positions.surgeon.details.map((detail, index) => (
                      <p key={index}>{detail}</p>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-800">{sectionsT.education.positions.fellowship.title}</h3>
                    </div>
                    <span className="text-gray-500 text-sm">{sectionsT.education.positions.fellowship.duration}</span>
                  </div>
                  <div className="space-y-1 text-gray-600">
                    {sectionsT.education.positions.fellowship.details.map((detail, index) => (
                      <p key={index}>{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-800">{sectionsT.education.positions.residency.title}</h3>
                    </div>
                    <span className="text-gray-500 text-sm">{sectionsT.education.positions.residency.duration}</span>
                  </div>
                  <div className="space-y-1 text-gray-600">
                    {sectionsT.education.positions.residency.details.map((detail, index) => (
                      <p key={index}>{detail}</p>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-800">{sectionsT.education.positions.postdoc.title}</h3>
                    </div>
                    <span className="text-gray-500 text-sm">{sectionsT.education.positions.postdoc.duration}</span>
                  </div>
                  <div className="space-y-1 text-gray-600">
                    {sectionsT.education.positions.postdoc.details.map((detail, index) => (
                      <p key={index}>{detail}</p>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-blue-800">{sectionsT.education.positions.general.title}</h3>
                    </div>
                    <span className="text-gray-500 text-sm">{sectionsT.education.positions.general.duration}</span>
                  </div>
                  <div className="space-y-1 text-gray-600">
                    {sectionsT.education.positions.general.details.map((detail, index) => (
                      <p key={index}>{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <ContactInfo />
      </div>
      
      {/* Locations Dialog */}
      <Dialog open={showLocationDialog} onOpenChange={setShowLocationDialog}>
        <DialogContent className="sm:max-w-md" dir={isArabic ? "rtl" : "ltr"}>
          <DialogHeader>
            <DialogTitle>{locationT.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">{locationT.kettlePoint}</h4>
              <p className="text-sm text-gray-600">{locationT.kettlePointAddress}</p>
            </div>
            <div>
              <h4 className="font-medium">{locationT.cumberland}</h4>
              <p className="text-sm text-gray-600">{locationT.cumberlandAddress}</p>
            </div>
            <div>
              <h4 className="font-medium">{locationT.mansfield}</h4>
              <p className="text-sm text-gray-600">{locationT.mansfieldAddress}</p>
            </div>
            <div>
              <h4 className="font-medium">{locationT.eastGreenwich}</h4>
              <p className="text-sm text-gray-600">{locationT.eastGreenwichAddress}</p>
            </div>
            <p className="text-sm">
              {locationT.trafficNote}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
