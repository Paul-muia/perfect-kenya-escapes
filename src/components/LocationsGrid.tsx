
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const locations = [
  {
    name: "Nairobi",
    count: 12,
    image: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    name: "Mombasa",
    count: 8,
    image: "https://images.unsplash.com/photo-1596005554384-d293674c91d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    name: "Diani",
    count: 5,
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdbc86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    name: "Malindi",
    count: 4,
    image: "https://images.unsplash.com/photo-1574060634302-9711d69f29f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  }
];

const LocationsGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-luxury-darkPurple">
            Popular Locations
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of luxury properties across Kenya's most coveted destinations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location) => (
            <Link 
              key={location.name} 
              to={`/properties?location=${location.name}`}
              className="group relative rounded-xl overflow-hidden h-60 shadow-md transition-transform hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors z-10"></div>
              <img 
                src={location.image} 
                alt={location.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20 text-white">
                <h3 className="text-xl font-semibold font-heading mb-1">{location.name}</h3>
                <div className="flex items-center text-sm">
                  <MapPin size={14} className="mr-1.5" />
                  <span>{location.count} Properties</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsGrid;
