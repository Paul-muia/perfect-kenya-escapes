
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  MapPin, 
  BedDouble, 
  Users, 
  Filter, 
  ChevronDown,
  X
} from 'lucide-react';
import { properties, Property } from '@/lib/data';
import { cn } from '@/lib/utils';

const Properties = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const locationParam = params.get('location');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(locationParam || '');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [guests, setGuests] = useState('');
  
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter properties based on search criteria
  useEffect(() => {
    let results = [...properties];
    
    if (searchTerm) {
      results = results.filter(property => 
        property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedLocation) {
      results = results.filter(property => 
        property.location.toLowerCase().includes(selectedLocation.toLowerCase())
      );
    }
    
    if (minPrice) {
      // Prices are already in KSH now
      results = results.filter(property => property.price >= parseInt(minPrice));
    }
    
    if (maxPrice) {
      // Prices are already in KSH now
      results = results.filter(property => property.price <= parseInt(maxPrice));
    }
    
    if (bedrooms) {
      results = results.filter(property => property.bedrooms >= parseInt(bedrooms));
    }
    
    if (guests) {
      results = results.filter(property => property.maxGuests >= parseInt(guests));
    }
    
    setFilteredProperties(results);
  }, [searchTerm, selectedLocation, minPrice, maxPrice, bedrooms, guests]);
  
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedLocation('');
    setMinPrice('');
    setMaxPrice('');
    setBedrooms('');
    setGuests('');
  };
  
  // Locations for filter
  const locations = Array.from(new Set(properties.map(p => p.location)));
  
  // Count the number of active filters
  const activeFilterCount = [
    selectedLocation, 
    minPrice, 
    maxPrice, 
    bedrooms, 
    guests
  ].filter(Boolean).length;

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-24">
        {/* Page Header */}
        <div className="bg-gray-50 py-8">
          <div className="container mx-auto">
            <h1 className="text-3xl lg:text-4xl font-heading font-bold text-luxury-darkPurple mb-2">
              Luxury Properties
            </h1>
            <p className="text-gray-600">
              Discover our handpicked selection of luxury stays across Kenya's most coveted locations
            </p>
          </div>
        </div>
        
        {/* Filters */}
        <div className="bg-white sticky top-16 z-30 shadow-sm">
          <div className="container mx-auto py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Search */}
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search properties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-300 focus:border-luxury-purple focus:ring-luxury-purple rounded-full"
                />
              </div>
              
              {/* Filter Toggle Button */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 border-gray-300 rounded-full"
              >
                <Filter size={16} />
                <span>Filters</span>
                {activeFilterCount > 0 && (
                  <div className="h-5 w-5 bg-luxury-purple text-white rounded-full flex items-center justify-center text-xs">
                    {activeFilterCount}
                  </div>
                )}
                <ChevronDown size={16} className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </Button>
            </div>
            
            {/* Extended Filters */}
            {showFilters && (
              <div className="pt-4 pb-2 border-t mt-4 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {/* Location Filter */}
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                      <select
                        id="location"
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        className="pl-10 block w-full border border-gray-300 rounded-md focus:ring-luxury-purple focus:border-luxury-purple py-2"
                      >
                        <option value="">Any Location</option>
                        {locations.map(location => (
                          <option key={location} value={location}>{location}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  {/* Price Range */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700 mb-1">
                        Min Price (KSh)
                      </label>
                      <Input
                        id="minPrice"
                        type="number"
                        placeholder="KSh"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="border-gray-300 focus:border-luxury-purple focus:ring-luxury-purple"
                      />
                    </div>
                    <div>
                      <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-1">
                        Max Price (KSh)
                      </label>
                      <Input
                        id="maxPrice"
                        type="number"
                        placeholder="KSh"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="border-gray-300 focus:border-luxury-purple focus:ring-luxury-purple"
                      />
                    </div>
                  </div>
                  
                  {/* Bedrooms Filter */}
                  <div>
                    <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-1">
                      Bedrooms
                    </label>
                    <div className="relative">
                      <BedDouble className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                      <select
                        id="bedrooms"
                        value={bedrooms}
                        onChange={(e) => setBedrooms(e.target.value)}
                        className="pl-10 block w-full border border-gray-300 rounded-md focus:ring-luxury-purple focus:border-luxury-purple py-2"
                      >
                        <option value="">Any</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                        <option value="5">5+</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Guests Filter */}
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                      Guests
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                      <select
                        id="guests"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="pl-10 block w-full border border-gray-300 rounded-md focus:ring-luxury-purple focus:border-luxury-purple py-2"
                      >
                        <option value="">Any</option>
                        <option value="2">2+</option>
                        <option value="4">4+</option>
                        <option value="6">6+</option>
                        <option value="8">8+</option>
                        <option value="10">10+</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                {/* Filter Actions */}
                <div className="flex justify-end mt-4">
                  <Button
                    variant="ghost"
                    onClick={resetFilters}
                    className="text-luxury-purple hover:bg-luxury-purple/10 flex items-center"
                  >
                    <X size={16} className="mr-2" /> Reset Filters
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Properties Grid */}
        <div className="container mx-auto py-8">
          {filteredProperties.length > 0 ? (
            <>
              <div className="text-sm text-gray-500 mb-6">
                {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-luxury-darkPurple mb-2">No properties found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters or search criteria</p>
              <Button
                variant="outline"
                onClick={resetFilters}
                className="border-luxury-purple text-luxury-purple hover:bg-luxury-purple hover:text-white"
              >
                Reset All Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Properties;
