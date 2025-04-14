import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'Locations', path: '/properties', dropdown: true },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-white bg-opacity-95 shadow-md py-2' 
        : 'bg-transparent py-4'
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-heading font-semibold text-luxury-darkPurple">
            Perfect <span className="text-luxury-purple">Luxury</span> Stays
          </h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.dropdown ? (
              <div key={link.name} className="relative group">
                <button className={cn(
                  'flex items-center font-medium',
                  isActive(link.path) ? 'text-luxury-purple' : 'text-luxury-darkPurple hover:text-luxury-purple transition-colors'
                )}>
                  {link.name} <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                  <div className="p-2 space-y-1">
                    <Link to="/properties?location=Nairobi" className="block px-4 py-2 text-sm hover:bg-luxury-softPurple rounded-md transition-colors">Nairobi</Link>
                    <Link to="/properties?location=Mombasa" className="block px-4 py-2 text-sm hover:bg-luxury-softPurple rounded-md transition-colors">Mombasa</Link>
                    <Link to="/properties?location=Diani" className="block px-4 py-2 text-sm hover:bg-luxury-softPurple rounded-md transition-colors">Diani</Link>
                    <Link to="/properties?location=Malindi" className="block px-4 py-2 text-sm hover:bg-luxury-softPurple rounded-md transition-colors">Malindi</Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link 
                key={link.name}
                to={link.path} 
                className={cn(
                  'font-medium',
                  isActive(link.path) ? 'text-luxury-purple' : 'text-luxury-darkPurple hover:text-luxury-purple transition-colors'
                )}
              >
                {link.name}
              </Link>
            )
          ))}
          <Button 
            asChild 
            className="bg-luxury-purple hover:bg-luxury-lightPurple text-white font-medium rounded-full"
          >
            <Link to="/properties">Book Now</Link>
          </Button>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="text-luxury-darkPurple p-1"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 w-full shadow-lg animate-fade-in">
          <div className="container py-4 space-y-3">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div key={link.name} className="space-y-2">
                  <div className="font-medium text-luxury-darkPurple">{link.name}</div>
                  <div className="pl-4 space-y-2">
                    <Link to="/properties?location=Nairobi" className="block text-sm hover:text-luxury-purple">Nairobi</Link>
                    <Link to="/properties?location=Mombasa" className="block text-sm hover:text-luxury-purple">Mombasa</Link>
                    <Link to="/properties?location=Diani" className="block text-sm hover:text-luxury-purple">Diani</Link>
                    <Link to="/properties?location=Malindi" className="block text-sm hover:text-luxury-purple">Malindi</Link>
                  </div>
                </div>
              ) : (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className={cn(
                    'block font-medium',
                    isActive(link.path) ? 'text-luxury-purple' : 'text-luxury-darkPurple hover:text-luxury-purple transition-colors'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Button 
              asChild
              className="w-full mt-4 bg-luxury-purple hover:bg-luxury-lightPurple text-white font-medium rounded-full"
            >
              <Link to="/properties" onClick={() => setIsMobileMenuOpen(false)}>Book Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
