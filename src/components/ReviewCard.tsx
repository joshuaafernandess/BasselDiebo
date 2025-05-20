
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ReviewCardProps {
  date: string;
  text: string;
}

const ReviewCard = ({ date, text }: ReviewCardProps) => {
  const { isArabic } = useLanguage();

  return (
    <Card className="bg-white h-full">
      <CardContent className={`p-6 flex flex-col h-full ${isArabic ? 'text-right' : ''}`} dir={isArabic ? "rtl" : "ltr"}>
        <div className="mb-4">
          <p className="text-sm text-gray-500">{date}</p>
          <div className={`flex mt-1 ${isArabic ? 'justify-end' : ''}`}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
        <p className="text-gray-700 flex-grow">{text}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
