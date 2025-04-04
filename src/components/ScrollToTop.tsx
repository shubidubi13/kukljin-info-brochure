
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="bg-primary/90 hover:bg-primary text-white p-3 rounded-full shadow-lg"
          size="icon"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </Button>
      )}
    </div>
  );
};

export default ScrollToTop;
