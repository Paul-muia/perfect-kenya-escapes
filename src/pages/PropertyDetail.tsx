
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
  Maximize2,
  ArrowLeft,
  Star,
  X,
} from 'lucide-react';
import { properties } from '@/lib/data';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);
  
  const property = properties.find(p => p.id === id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!property) {
    return <Navigate to="/properties" replace />;
  }
  
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
          <Dialog open={open} onOpenChange={setOpen}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 relative">
              <DialogTrigger asChild>
                <div className="md:col-span-2 aspect-[4/3] relative cursor-pointer">
                  <img 
                    src={property.images[0]} 
                    alt={property.name} 
                    className="w-full h-full object-contain rounded-l-lg"
                  />
                </div>
              </DialogTrigger>
              <div className="hidden md:grid md:col-span-2 grid-cols-2 gap-2">
                {property.images.slice(1, 5).map((image, index) => (
                  <DialogTrigger key={index} asChild>
                    <div className={cn(
                      "cursor-pointer relative",
                      index === 1 && "rounded-tr-lg",
                      index === 3 && "rounded-br-lg"
                    )}>
                      <img 
                        src={image} 
                        alt={`${property.name} - Photo ${index + 1}`} 
                        className={cn(
                          "w-full h-full object-contain",
                          index === 1 && "rounded-tr-lg",
                          index === 3 && "rounded-br-lg"
                        )}
                      />
                    </div>
                  </DialogTrigger>
                ))}
              </div>
              
              <DialogTrigger asChild>
                <Button 
                  variant="outline"
                  size="sm"
                  className="absolute bottom-3 right-3 bg-white"
                  onClick={() => setOpen(true)}
                >
                  <Maximize2 size={16} className="mr-1.5" />
                  Show all photos
                </Button>
              </DialogTrigger>
            </div>

            <DialogContent className="sm:max-w-[95vw] h-[90vh] p-0">
              <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-black/40 p-2 text-white hover:bg-black/60">
                <X className="h-6 w-6" />
              </DialogClose>
              
              <div className="relative h-full w-full flex items-center justify-center bg-black">
                <Carousel className="w-full h-full" opts={{ loop: true }}>
                  <CarouselContent className="h-full">
                    {property.images.map((image, index) => (
                      <CarouselItem key={index} className="h-full flex items-center justify-center">
                        <div className="relative w-full h-full">
                          <img 
                            src={image} 
                            alt={`${property.name} - ${imageCaptions[index] || `Image ${index + 1}`}`}
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center">
                            <p className="text-sm md:text-base">
                              {imageCaptions[index] || `Image ${index + 1}`} • {index + 1}/{property.images.length}
                            </p>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4 bg-black/40 text-white hover:bg-black/60 border-none h-10 w-10" />
                  <CarouselNext className="right-4 bg-black/40 text-white hover:bg-black/60 border-none h-10 w-10" />
                </Carousel>
              </div>
            </DialogContent>
          </Dialog>
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
                      <BedDouble size={16} className="text-luxury-purple mr-2" />
                      <span className="text-sm text-gray-500">Beds</span>
                    </div>
                    <p className="font-semibold text-lg">{property.bedrooms * 2}</p>
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
