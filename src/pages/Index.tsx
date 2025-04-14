
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import TestimonialCard from '@/components/TestimonialCard';
import LocationsGrid from '@/components/LocationsGrid';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { properties, testimonials, blogPosts } from '@/lib/data';
import BlogCard from '@/components/BlogCard';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Properties */}
      <FeaturedProperties properties={properties} />
      
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-luxury-darkPurple mb-4">
                Experience Kenya's Most Exclusive Luxury Stays
              </h2>
              <p className="text-gray-600 mb-6">
                At Perfect Luxury Stays, we curate exceptional properties that combine authentic 
                local character with world-class amenities and services. Our personally vetted 
                collection represents the finest luxury accommodations across Kenya.
              </p>
              <p className="text-gray-600 mb-8">
                Each property in our portfolio is selected for its unique character, prime 
                location, and exceptional quality. Whether you're seeking a sleek penthouse 
                in Nairobi or a beachfront villa in Diani, we ensure your stay exceeds expectations.
              </p>
              <Button asChild className="bg-luxury-purple hover:bg-luxury-lightPurple rounded-full">
                <Link to="/about">
                  Learn More About Us 
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                  alt="Luxury apartment interior" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                  alt="Luxury bathroom" 
                  className="w-full h-60 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4 pt-10">
                <img 
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                  alt="Luxury pool" 
                  className="w-full h-60 object-cover rounded-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                  alt="Beachfront villa" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Locations Grid */}
      <LocationsGrid />
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-luxury-darkPurple">
              What Our Guests Say
            </h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              Read about the experiences of our valued guests
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-luxury-darkPurple">
                Latest from Our Blog
              </h2>
              <p className="mt-2 text-gray-600">
                Travel tips, local insights, and luxury living inspiration
              </p>
            </div>
            <Button 
              asChild
              variant="outline" 
              className="rounded-full border-luxury-purple text-luxury-purple hover:bg-luxury-purple hover:text-white hidden md:flex"
            >
              <Link to="/blog">
                View All Posts
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="text-center mt-8 md:hidden">
            <Button 
              asChild
              variant="outline" 
              className="rounded-full border-luxury-purple text-luxury-purple hover:bg-luxury-purple hover:text-white"
            >
              <Link to="/blog">
                View All Posts
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
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

export default Index;
