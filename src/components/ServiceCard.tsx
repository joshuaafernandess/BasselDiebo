
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard = ({ title, description }: ServiceCardProps) => {
  const { isArabic } = useLanguage();
  
  return (
    <Card className="bg-white h-full transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6 flex flex-col h-full" dir={isArabic ? "rtl" : "ltr"}>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
