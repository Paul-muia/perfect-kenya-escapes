
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, MapPin, Mail, Phone } from 'lucide-react';
import { team } from '@/lib/data';

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-luxury-darkPurple mb-4">
              Our Story
            </h1>
            <p className="text-xl text-gray-600">
              Creating exceptional luxury experiences across Kenya
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Perfect Luxury Stays founding team" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-luxury-darkPurple mb-4">
                Our Journey
              </h2>
              <p className="text-gray-600 mb-4">
                Perfect Luxury Stays began in 2018 with a simple vision: to showcase Kenya's most exceptional 
                properties to discerning travelers seeking authentic luxury experiences. Founder Sophia Njeri, 
                after years working in premium hospitality across Africa and Europe, recognized a gap in the 
                market for truly exceptional, personally vetted luxury accommodations.
              </p>
              <p className="text-gray-600 mb-4">
                What started with just three exclusive properties in Nairobi has grown into a carefully 
                curated portfolio spanning Kenya's most desirable locations, from city penthouses to 
                beachfront villas. Our growth has been intentionally measured, ensuring we maintain our 
                commitment to personalized service and property excellence.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we pride ourselves on offering more than just accommodation – we create tailored 
                experiences that connect our guests with the very best of Kenyan luxury while maintaining 
                the personal touch that has been our signature from day one.
              </p>
              <Button 
                asChild
                className="bg-luxury-purple hover:bg-luxury-lightPurple text-white rounded-full"
              >
                <Link to="/properties">
                  View Our Properties
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-luxury-darkPurple mb-4">
              Our Values
            </h2>
            <p className="text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-luxury-softPurple rounded-full flex items-center justify-center mb-4">
                <Check className="text-luxury-purple" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-luxury-darkPurple mb-3">
                Excellence in Every Detail
              </h3>
              <p className="text-gray-600">
                We believe luxury is in the details. Each property in our collection undergoes rigorous 
                vetting for design, comfort, amenities, and service to ensure an exceptional experience.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-luxury-softPurple rounded-full flex items-center justify-center mb-4">
                <Check className="text-luxury-purple" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-luxury-darkPurple mb-3">
                Authentic Local Experiences
              </h3>
              <p className="text-gray-600">
                We celebrate Kenya's rich cultures and landscapes by connecting our guests with genuine 
                local experiences that complement their luxury accommodation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-luxury-softPurple rounded-full flex items-center justify-center mb-4">
                <Check className="text-luxury-purple" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-luxury-darkPurple mb-3">
                Personalized Service
              </h3>
              <p className="text-gray-600">
                We recognize that true luxury is personal. We take time to understand each guest's preferences 
                and tailor their experience accordingly, from property selection to local recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-luxury-darkPurple mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600">
              The passionate professionals behind Perfect Luxury Stays
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.id} className="bg-white rounded-lg luxury-shadow p-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-heading font-semibold text-luxury-darkPurple text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-luxury-purple text-center mb-4">{member.role}</p>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold text-luxury-darkPurple mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-6">
                  Have questions about our properties or services? Our team is ready to help you plan your perfect luxury stay.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin size={20} className="mr-3 text-luxury-purple mt-1" />
                    <span className="text-gray-600">
                      Westlands Business Park<br />
                      Nairobi, Kenya
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={20} className="mr-3 text-luxury-purple" />
                    <a href="tel:+254712345678" className="text-gray-600 hover:text-luxury-purple transition-colors">
                      +254 712 345 678
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail size={20} className="mr-3 text-luxury-purple" />
                    <a href="mailto:info@perfectluxurystays.com" className="text-gray-600 hover:text-luxury-purple transition-colors">
                      info@perfectluxurystays.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full border-gray-300 rounded-md focus:ring-luxury-purple focus:border-luxury-purple"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full border-gray-300 rounded-md focus:ring-luxury-purple focus:border-luxury-purple"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full border-gray-300 rounded-md focus:ring-luxury-purple focus:border-luxury-purple"
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-luxury-purple hover:bg-luxury-lightPurple text-white rounded-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-luxury-purple text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Ready to Experience Luxury in Kenya?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-white/90">
            Browse our exclusive collection of properties and book your unforgettable stay today.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-white text-luxury-purple hover:bg-gray-100 rounded-full px-8 py-6 font-medium"
          >
            <Link to="/properties">
              Explore All Properties
            </Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
