import { useState } from 'react';
import { Calendar, CheckCircle, BedDouble } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Property } from '@/lib/data';
import { toast } from '@/components/ui/use-toast';

interface BookingFormProps {
  property: Property;
}

const BookingForm = ({ property }: BookingFormProps) => {
  const { price } = property;
  const kshPrice = price * 145; // Converting USD to KSH (approximate rate)
  
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  
  // Calculate number of nights between check-in and check-out
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    
    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };
  
  const nights = calculateNights();
  const subTotal = nights * kshPrice;
  const serviceFeePerDay = 1166;
  const totalServiceFee = nights * serviceFeePerDay;
  const total = subTotal + totalServiceFee;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkIn || !checkOut) {
      toast({
        title: "Please select dates",
        description: "Check-in and Check-out dates are required.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you shortly to confirm your reservation.",
      action: (
        <div className="h-8 w-8 bg-green-500/20 rounded-full flex items-center justify-center">
          <CheckCircle className="h-5 w-5 text-green-500" />
        </div>
      ),
    });
  };
  
  return (
    <Card className="sticky top-24">
      <CardContent className="pt-6">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-1">
            <span className="text-2xl font-semibold text-luxury-darkPurple">KSh {kshPrice.toLocaleString()}</span>
            <span className="text-gray-500">night</span>
          </div>
          
          <div className="flex items-center">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-600">{property.rating} · {property.reviewCount} reviews</span>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="relative">
              <div className="absolute left-3 top-3 text-gray-400">
                <Calendar size={16} />
              </div>
              <Input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="pl-9"
                min={new Date().toISOString().split('T')[0]}
                required
              />
              <label className="absolute left-9 top-0 text-xs text-gray-500 transform -translate-y-1/2 bg-white px-1">
                Check-in
              </label>
            </div>
            <div className="relative">
              <div className="absolute left-3 top-3 text-gray-400">
                <Calendar size={16} />
              </div>
              <Input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="pl-9"
                min={checkIn || new Date().toISOString().split('T')[0]}
                required
              />
              <label className="absolute left-9 top-0 text-xs text-gray-500 transform -translate-y-1/2 bg-white px-1">
                Check-out
              </label>
            </div>
          </div>
          
          <div className="relative">
            <label htmlFor="guests" className="block text-sm font-medium mb-1">
              Guests
            </label>
            <select
              id="guests"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-luxury-purple focus:border-luxury-purple rounded-md"
            >
              {[...Array(property.maxGuests)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1} {i === 0 ? 'guest' : 'guests'}
                </option>
              ))}
            </select>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-luxury-purple hover:bg-luxury-lightPurple text-white py-6 rounded-lg font-medium text-base"
          >
            Request to Book
          </Button>
        </form>
        
        <div className="mt-6 space-y-2">
          <div className="flex justify-between text-gray-600">
            <span>KSh {kshPrice.toLocaleString()} × {nights || 0} nights</span>
            <span>KSh {subTotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Service fee ({serviceFeePerDay.toLocaleString()} per night)</span>
            <span>KSh {totalServiceFee.toLocaleString()}</span>
          </div>
          <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between font-semibold">
            <span>Total</span>
            <span>KSh {total.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
