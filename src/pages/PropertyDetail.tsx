import { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import AmenitiesSection from '@/components/AmenitiesSection';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  BedDouble, 
  Bath, 
  Users, 
  SquareIcon,
  Maximize2,
  ArrowLeft,
  Check,
  Star,
} from 'lucide-react';
import { properties } from '@/lib/data';
import { cn } from '@/lib/utils';

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  
  const property = properties.find(p => p.id === id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!property) {
    return <Navigate to="/properties" replace />;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto mb-6">
          <Link to="/properties" className="inline-flex items-center text-luxury-purple hover:underline">
            <ArrowLeft size={16} className="mr-1" />
            Back to Properties
          </Link>
        </div>
        
        <div className="container mx-auto mb-6">
          <h1 className="text-3xl lg:text-4xl font-heading font-bold text-luxury-darkPurple mb-2">
            {property.name}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-600">
            <div className="flex items-center">
              <MapPin size={16} className="mr-1.5" />
              {property.location}
            </div>
            <div className="flex items-center">
              <Star size={16} className="mr-1.5 text-yellow-400 fill-yellow-400" />
              <span>{property.rating} · {property.reviewCount} reviews</span>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto mb-8">
          {showAllPhotos ? (
            <div className="fixed inset-0 bg-white z-50 overflow-y-auto p-4 lg:p-8">
              <Button 
                variant="outline"
                size="sm" 
                className="mb-4"
                onClick={() => setShowAllPhotos(false)}
              >
                <ArrowLeft size={16} className="mr-1.5" />
                Back to Property
              </Button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.images.map((image, index) => (
                  <div key={index} className="aspect-video">
                    <img 
                      src={image} 
                      alt={`${property.name} - Photo ${index + 1}`} 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 relative">
              <div className="md:col-span-2 aspect-[4/3] relative">
                <img 
                  src={property.images[0]} 
                  alt={property.name} 
                  className="w-full h-full object-cover rounded-l-lg"
                />
              </div>
              <div className="hidden md:grid md:col-span-2 grid-cols-2 gap-2">
                <img 
                  src={property.images[1]} 
                  alt={`${property.name} - Photo 2`} 
                  className="w-full h-full object-cover"
                />
                <img 
                  src={property.images[2]} 
                  alt={`${property.name} - Photo 3`} 
                  className="w-full h-full object-cover rounded-tr-lg"
                />
                <img 
                  src={property.images[3]} 
                  alt={`${property.name} - Photo 4`} 
                  className="w-full h-full object-cover"
                />
                <div className="relative">
                  <img 
                    src={property.images[0]} 
                    alt={`${property.name} - Photo 5`} 
                    className="w-full h-full object-cover rounded-br-lg"
                  />
                  <div 
                    className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-br-lg cursor-pointer"
                    onClick={() => setShowAllPhotos(true)}
                  >
                    <div className="flex items-center text-white font-medium">
                      <Maximize2 size={18} className="mr-2" />
                      Show all photos
                    </div>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="outline"
                size="sm"
                className="absolute bottom-3 right-3 bg-white md:hidden"
                onClick={() => setShowAllPhotos(true)}
              >
                <Maximize2 size={16} className="mr-1.5" />
                Show all photos
              </Button>
            </div>
          )}
        </div>
        
        <div className="container mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <BedDouble size={16} className="text-luxury-purple mr-2" />
                      <span className="text-sm text-gray-500">Bedrooms</span>
                    </div>
                    <p className="font-semibold text-lg">{property.bedrooms}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Bath size={16} className="text-luxury-purple mr-2" />
                      <span className="text-sm text-gray-500">Bathrooms</span>
                    </div>
                    <p className="font-semibold text-lg">{property.bathrooms}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Users size={16} className="text-luxury-purple mr-2" />
                      <span className="text-sm text-gray-500">Guests</span>
                    </div>
                    <p className="font-semibold text-lg">{property.maxGuests}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <SquareIcon size={16} className="text-luxury-purple mr-2" />
                      <span className="text-sm text-gray-500">Area</span>
                    </div>
                    <p className="font-semibold text-lg">{property.sqm} m²</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-heading font-semibold text-luxury-darkPurple mb-4">
                  About this property
                </h2>
                <div className="prose max-w-none text-gray-600">
                  <p>{property.description}</p>
                </div>
              </div>
              
              <AmenitiesSection amenities={property.amenities} />
              
              <div>
                <h2 className="text-2xl font-heading font-semibold text-luxury-darkPurple mb-4">
                  Location
                </h2>
                <div className="mb-3">
                  <div className="flex items-start">
                    <MapPin size={16} className="text-luxury-purple mt-1 mr-2" />
                    <span>{property.location}, Kenya</span>
                  </div>
                </div>
                <div className="aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.3585440526!2d36.68258752791502!3d-1.3028617916137705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1650984626975!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            
            <div>
              <BookingForm property={property} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
