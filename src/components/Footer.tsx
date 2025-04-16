
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-luxury-darkPurple text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-6">Perfect Luxury Stays</h3>
            <p className="text-gray-300 mb-6">
              Exceptional luxury rental properties across Kenya's most coveted destinations, 
              offering unparalleled experiences with personalized service.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-white transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Locations */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Locations</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/properties?location=Nairobi" className="text-gray-300 hover:text-white transition-colors">
                  Nairobi
                </Link>
              </li>
              <li>
                <Link to="/properties?location=Mombasa" className="text-gray-300 hover:text-white transition-colors">
                  Mombasa
                </Link>
              </li>
              <li>
                <Link to="/properties?location=Diani" className="text-gray-300 hover:text-white transition-colors">
                  Diani
                </Link>
              </li>
              <li>
                <Link to="/properties?location=Malindi" className="text-gray-300 hover:text-white transition-colors">
                  Malindi
                </Link>
              </li>
              <li>
                <Link to="/properties?location=Naivasha" className="text-gray-300 hover:text-white transition-colors">
                  Naivasha
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="mr-3 text-luxury-purple mt-1" />
                <address className="text-gray-300 not-italic">
                  Westlands Business Park<br />
                  Nairobi, Kenya
                </address>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-3 text-luxury-purple" />
                <a href="tel:+254727283836" className="text-gray-300 hover:text-white transition-colors">
                  0727 283 836
                </a>
              </div>
              <div className="flex items-center">
                <svg 
                  viewBox="0 0 24 24" 
                  width="20" 
                  height="20" 
                  className="mr-3 text-luxury-purple"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <a 
                  href="https://wa.me/254727283836" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  WhatsApp 0727 283 836
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-3 text-luxury-purple" />
                <a href="mailto:info@perfectluxurystays.com" className="text-gray-300 hover:text-white transition-colors">
                  info@perfectluxurystays.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Perfect Luxury Stays. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-gray-400 text-sm hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
