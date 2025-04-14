import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, WhatsApp, MapPin } from 'lucide-react';

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
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
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
                <Link to="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition-colors">
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
                <span className="text-gray-300">
                  Westlands Business Park<br />
                  Nairobi, Kenya
                </span>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-3 text-luxury-purple" />
                <a href="tel:+254727283836" className="text-gray-300 hover:text-white transition-colors">
                  +254 727 283 836
                </a>
              </div>
              <div className="flex items-center">
                <WhatsApp size={20} className="mr-3 text-luxury-purple" />
                <a 
                  href="https://wa.me/254727283836" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  WhatsApp +254 727 283 836
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-3 text-luxury-purple" />
                <a href="mailto:paulmutukumuia@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  paulmutukumuia@gmail.com
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
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
