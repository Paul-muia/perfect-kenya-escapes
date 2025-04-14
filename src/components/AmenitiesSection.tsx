
import { 
  Wifi, 
  Utensils, 
  WashingMachine, 
  Wind, 
  Mountain, 
  Car, 
  Tv, 
  Coffee,
  Briefcase,
  Shield,
  Key,
  Pool,
  Sparkles,
  Bath,
  Plus,
  ChevronsUpDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from 'react';

interface AmenitySectionProps {
  amenities: string[];
}

interface AmenityGroup {
  title: string;
  icon: React.ReactNode;
  items: string[];
}

const AmenitiesSection = ({ amenities }: AmenitySectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Group amenities by category
  const amenityGroups: AmenityGroup[] = [
    {
      title: "General",
      icon: <Plus className="h-4 w-4" />,
      items: amenities.filter(a => a.includes("WiFi") || a.includes("Air conditioning") || a.includes("security") || a.includes("check-in"))
    },
    {
      title: "Kitchen & Laundry",
      icon: <Utensils className="h-4 w-4" />,
      items: amenities.filter(a => a.includes("kitchen") || a.includes("washer") || a.includes("coffee") || a.includes("appliance"))
    },
    {
      title: "Outdoor & Views",
      icon: <Mountain className="h-4 w-4" />,
      items: amenities.filter(a => a.includes("view") || a.includes("balcony") || a.includes("terrace") || a.includes("garden"))
    },
    {
      title: "Facilities & Services",
      icon: <Pool className="h-4 w-4" />,
      items: amenities.filter(a => a.includes("pool") || a.includes("gym") || a.includes("spa") || a.includes("cleaning"))
    },
    {
      title: "Entertainment",
      icon: <Tv className="h-4 w-4" />,
      items: amenities.filter(a => a.includes("TV") || a.includes("Netflix") || a.includes("entertainment"))
    },
    {
      title: "Parking & Transport",
      icon: <Car className="h-4 w-4" />,
      items: amenities.filter(a => a.includes("parking") || a.includes("garage"))
    }
  ];

  // Get amenities that weren't categorized
  const otherAmenities = amenities.filter(amenity => 
    !amenityGroups.some(group => 
      group.items.includes(amenity)
    )
  );

  if (otherAmenities.length > 0) {
    amenityGroups.push({
      title: "Other Amenities",
      icon: <Plus className="h-4 w-4" />,
      items: otherAmenities
    });
  }

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-heading font-semibold text-luxury-darkPurple mb-4">
        Amenities
      </h3>
      
      {/* Preview of some amenities */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 mb-4">
        {amenities.slice(0, 6).map((amenity, index) => (
          <div key={index} className="flex items-center text-gray-600">
            <Plus className="h-4 w-4 mr-2 text-luxury-purple" />
            <span>{amenity}</span>
          </div>
        ))}
      </div>

      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="space-y-2"
      >
        <CollapsibleTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center w-full justify-between rounded-lg px-4 py-2 text-left font-medium"
          >
            <span>{isOpen ? 'Show less' : 'Show all amenities'}</span>
            <ChevronsUpDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <ScrollArea className="h-[400px] rounded-md border p-4">
            <div className="space-y-6">
              {amenityGroups.map((group, index) => (
                group.items.length > 0 && (
                  <div key={index}>
                    <h4 className="font-medium text-luxury-darkPurple flex items-center mb-3">
                      {group.icon}
                      <span className="ml-2">{group.title}</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2">
                      {group.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center text-gray-600">
                          <Plus className="h-4 w-4 mr-2 text-luxury-purple" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          </ScrollArea>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default AmenitiesSection;
