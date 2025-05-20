
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface TreatmentCardProps {
  title: string;
}

const TreatmentCard = ({ title }: TreatmentCardProps) => {
  const { isArabic } = useLanguage();
  
  return (
    <Card className="bg-white">
      <CardContent className="p-4 flex items-center" dir={isArabic ? "rtl" : "ltr"}>
        <Check className={`h-5 w-5 text-blue-600 ${isArabic ? 'ml-3' : 'mr-3'} flex-shrink-0`} />
        <span className="text-gray-800">{title}</span>
      </CardContent>
    </Card>
  );
};

export default TreatmentCard;
