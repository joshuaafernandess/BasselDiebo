import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import clsx from "clsx";

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
}

const TeamCard = ({ name, role, description, imageSrc }: TeamCardProps) => {
  const { isArabic } = useLanguage();
  
  return (
    <Card className="bg-white h-full transition-all duration-300 hover:shadow-md border-none">
      <CardContent
        className={clsx(
          "p-4 md:p-6 flex flex-col items-center space-y-4",
          isArabic ? "text-right" : "text-center"
        )}
        dir={isArabic ? "rtl" : "ltr"}
      >
        <div className="flex flex-col">  {/* Removed items-center to ensure vertical stacking */}
          <div
            className={clsx(
              "relative overflow-hidden rounded-lg shadow-lg border border-gray-100 group hover:shadow-xl transition-shadow duration-300",
              "w-52 h-72 flex-shrink-0 mx-auto" // Center the image horizontally
            )}
          >
            <img 
              src={imageSrc} 
              alt={name} 
              className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className={clsx("mt-4", isArabic ? "text-right" : "text-center")}> {/* Added margin-top to separate text from image */}
            <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
            <p className="text-blue-600 font-medium mb-2">{role}</p>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
