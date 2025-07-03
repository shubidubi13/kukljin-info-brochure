
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
        isScrolled ? 'bg-gray-800 shadow-md py-3' : 'bg-gray-800 py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img 
            src="./lovable-uploads/4a6753b3-0350-40d8-81c0-cfe0bad0cd4d.png" 
            alt="DAP Logo" 
            className="h-14 w-14 filter invert"
          />
          <a href="#" className="text-2xl font-bold text-white">
            Darko Andjelković Prevoz
          </a>
        </div>

        {/* Desktop Navigation */}
        {/* <nav className="hidden md:flex space-x-8">
          <a
            href="#usluge"
            className="text-white hover:text-primary font-medium transition-colors"
          >
            Usluge
          </a>
          <a
            href="#o-nama"
            className="text-white hover:text-primary font-medium transition-colors"
          >
            O nama
          </a>
          <a
            href="#kontakt"
            className="text-white hover:text-primary font-medium transition-colors"
          >
            Kontakt
          </a>
        </nav> */}

        {/* Mobile Menu Button */}
        {/* <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleMobileMenu}
            className="text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div> */}
      </div>

      {/* Mobile Menu */}
      {/* {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#usluge"
              className="text-white hover:text-primary font-medium transition-colors block py-2"
              onClick={toggleMobileMenu}
            >
              Usluge
            </a>
            <a
              href="#o-nama"
              className="text-white hover:text-primary font-medium transition-colors block py-2"
              onClick={toggleMobileMenu}
            >
              O nama
            </a>
            <a
              href="#kontakt"
              className="text-white hover:text-primary font-medium transition-colors block py-2"
              onClick={toggleMobileMenu}
            >
              Kontakt
            </a>
          </div>
        </div>
      )} */}
    </header>
  );
};

export default Navbar;
