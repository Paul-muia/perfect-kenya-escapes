
import { Link } from 'react-router-dom';
import { Star, MapPin, Users, Bath, BedDouble, Phone, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Property } from '@/lib/data';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

const PropertyCard = ({ property, featured = false }: PropertyCardProps) => {
  const isMobile = useIsMobile();
  
  const {
    id,
    name,
    location,
    price,
    rating,
    reviewCount,
    bedrooms,
    bathrooms,
    maxGuests,
    images,
    shortDescription,
  } = property;

  const kshPrice = price * 145; // Converting USD to KSH

  const imageCaptions = [
    "Main View",
    "Living Room",
    "Kitchen",
    "Master Bedroom",
    "Bathroom",
    "Balcony",
    "Exterior",
    "Amenities",
  ];

  return (
    <div className={cn(
      "group flex flex-col bg-white rounded-2xl overflow-hidden transition-all hover:shadow-xl luxury-shadow",
      featured ? "h-full" : "h-full"
    )}>
      <div className="relative overflow-hidden">
        {featured && (
          <div className="absolute top-4 left-4 z-10 bg-luxury-purple text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
        
        <Dialog>
          <DialogTrigger asChild>
            <div className="relative w-full aspect-[4/3] overflow-hidden cursor-pointer">
              <img
                src={images[0]}
                alt={name}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[95vw] h-[90vh] p-0">
            <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-black/40 p-2 text-white hover:bg-black/60">
              <X className="h-6 w-6" />
            </DialogClose>
            
            <div className="relative h-full w-full flex items-center justify-center bg-black">
              <Carousel className="w-full h-full" opts={{ loop: true }}>
                <CarouselContent className="h-full">
                  {images.map((image, index) => (
                    <CarouselItem key={index} className="h-full flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <img 
                          src={image} 
                          alt={`${name} - ${imageCaptions[index] || `Image ${index + 1}`}`}
                          className="w-full h-full object-contain"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center">
                          <p className="text-sm md:text-base">
                            {imageCaptions[index] || `Image ${index + 1}`} • {index + 1}/{images.length}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {!isMobile && (
                  <>
                    <CarouselPrevious className="left-4 bg-black/40 text-white hover:bg-black/60 border-none h-10 w-10" />
                    <CarouselNext className="right-4 bg-black/40 text-white hover:bg-black/60 border-none h-10 w-10" />
                  </>
                )}
              </Carousel>
            </div>
          </DialogContent>
        </Dialog>
        
        <div className="absolute bottom-4 left-4 flex space-x-1.5">
          {images.slice(0, 4).map((_, index) => (
            <div 
              key={index} 
              className={cn(
                "w-2 h-2 rounded-full", 
                index === 0 ? "bg-white" : "bg-white/60"
              )}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col flex-grow p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold font-heading text-luxury-darkPurple">{name}</h3>
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium ml-1">{rating}</span>
            <span className="text-sm text-gray-500 ml-1">({reviewCount})</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 text-sm mb-3">
          <MapPin size={14} className="mr-1" />
          <span>{location}</span>
        </div>
        
        <p className="text-gray-600 mb-4 text-sm line-clamp-2 flex-grow">{shortDescription}</p>
        
        <div className="grid grid-cols-3 gap-2 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <BedDouble size={14} className="mr-1.5" />
            <span>{bedrooms} {bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}</span>
          </div>
          <div className="flex items-center">
            <Bath size={14} className="mr-1.5" />
            <span>{bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
          </div>
          <div className="flex items-center">
            <Users size={14} className="mr-1.5" />
            <span>{maxGuests} Guests</span>
          </div>
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
          <div>
            <span className="text-lg font-semibold text-luxury-darkPurple">KSh {kshPrice.toLocaleString()}</span>
            <span className="text-gray-500 text-sm"> / night</span>
          </div>
          <div className="flex items-center space-x-2">
            <a 
              href="https://wa.me/254727283836" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-luxury-purple hover:text-luxury-darkPurple transition-colors"
            >
              <Phone size={18} />
            </a>
            <Link to={`/property/${id}`} className="text-luxury-purple text-sm font-medium group-hover:underline">
              View details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
