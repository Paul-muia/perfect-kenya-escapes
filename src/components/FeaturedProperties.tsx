
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PropertyCard from '@/components/PropertyCard';
import { Property } from '@/lib/data';

interface FeaturedPropertiesProps {
  properties: Property[];
}

const FeaturedProperties = ({ properties }: FeaturedPropertiesProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-luxury-darkPurple">
              Featured Properties
            </h2>
            <p className="mt-2 text-gray-600">
              Discover our handpicked selection of luxury stays
            </p>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollLeft}
              className="rounded-full border-luxury-purple text-luxury-purple hover:bg-luxury-purple hover:text-white"
            >
              <ArrowLeft size={20} />
              <span className="sr-only">Scroll left</span>
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={scrollRight}
              className="rounded-full border-luxury-purple text-luxury-purple hover:bg-luxury-purple hover:text-white"
            >
              <ArrowRight size={20} />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {properties.filter(p => p.featured).map((property) => (
            <div key={property.id} className="min-w-[350px] max-w-[350px]">
              <PropertyCard property={property} featured={true} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button 
            asChild
            className="bg-luxury-purple hover:bg-luxury-lightPurple text-white rounded-full px-8"
          >
            <Link to="/properties">View All Properties</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
