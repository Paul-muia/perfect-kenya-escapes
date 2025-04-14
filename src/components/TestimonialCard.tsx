
import { Star } from 'lucide-react';
import { Testimonial } from '@/lib/data';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const { name, location, image, rating, text } = testimonial;

  return (
    <div className="bg-white p-6 rounded-xl luxury-shadow flex flex-col h-full">
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover border-2 border-luxury-softPurple"
        />
        <div className="ml-4">
          <h4 className="font-semibold font-heading text-luxury-darkPurple">{name}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <Star 
            key={index} 
            size={16} 
            className={index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"}
          />
        ))}
      </div>
      
      <blockquote className="text-gray-600 italic flex-grow">
        "{text}"
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
