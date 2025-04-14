
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

interface HeroImage {
  src: string;
  alt: string;
}

const heroImages: HeroImage[] = [
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Luxury villa with infinity pool overlooking Nairobi skyline"
  },
  {
    src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Modern apartment with floor to ceiling windows in Nairobi"
  },
  {
    src: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Elegant penthouse with panoramic city views"
  }
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slideshow background images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${image.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden={index !== currentImage}
        />
      ))}

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm mb-6 animate-fade-in">
              Experience Unparalleled Luxury in Kenya
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white drop-shadow-lg mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Your Exclusive Retreat in Kenya's Most Coveted Locations
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
              Discover handpicked luxury properties with exceptional service and unmatched experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '600ms' }}>
              <Button asChild size="lg" className="bg-luxury-purple hover:bg-luxury-lightPurple text-white px-8 py-6 rounded-full font-medium text-base">
                <Link to="/properties">Browse Properties</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white px-8 py-6 rounded-full font-medium text-base">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slideshow indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImage ? 'bg-white w-8' : 'bg-white/50'
            }`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
