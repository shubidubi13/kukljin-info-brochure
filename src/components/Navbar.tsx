
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-primary">
            Kukljin Selidbe
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#usluge"
            className="text-gray-800 hover:text-primary font-medium transition-colors"
          >
            Usluge
          </a>
          <a
            href="#o-nama"
            className="text-gray-800 hover:text-primary font-medium transition-colors"
          >
            O nama
          </a>
          <a
            href="#kontakt"
            className="text-gray-800 hover:text-primary font-medium transition-colors"
          >
            Kontakt
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleMobileMenu}
            className="text-gray-800"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#usluge"
              className="text-gray-800 hover:text-primary font-medium transition-colors block py-2"
              onClick={toggleMobileMenu}
            >
              Usluge
            </a>
            <a
              href="#o-nama"
              className="text-gray-800 hover:text-primary font-medium transition-colors block py-2"
              onClick={toggleMobileMenu}
            >
              O nama
            </a>
            <a
              href="#kontakt"
              className="text-gray-800 hover:text-primary font-medium transition-colors block py-2"
              onClick={toggleMobileMenu}
            >
              Kontakt
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
