
import { Link } from 'react-router-dom';
import { Star, MapPin, Users, Bath, BedDouble, SquareIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Property } from '@/lib/data';

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

const PropertyCard = ({ property, featured = false }: PropertyCardProps) => {
  const {
    id,
    name,
    location,
    price,
    currency,
    rating,
    reviewCount,
    bedrooms,
    bathrooms,
    maxGuests,
    sqm,
    images,
    shortDescription,
  } = property;

  return (
    <Link 
      to={`/property/${id}`}
      className={cn(
        "group flex flex-col bg-white rounded-2xl overflow-hidden transition-all hover:shadow-xl luxury-shadow",
        featured ? "h-full" : "h-full"
      )}
    >
      <div className="relative overflow-hidden">
        {/* Featured badge */}
        {featured && (
          <div className="absolute top-4 left-4 z-10 bg-luxury-purple text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
        
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <img
            src={images[0]}
            alt={name}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
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
            <span className="text-lg font-semibold text-luxury-darkPurple">${price}</span>
            <span className="text-gray-500 text-sm"> / night</span>
          </div>
          <span className="text-luxury-purple text-sm font-medium group-hover:underline">View details</span>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
