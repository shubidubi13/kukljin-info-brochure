
import { useEffect, useRef } from 'react';
import { Truck } from 'lucide-react';

const VehiclesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="nasa-vozila" className="py-8 px-4 md:px-8 lg:px-16 bg-light-bg" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Naša Vozila
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 animate-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/a12e5ad5-62b6-4792-b008-eacf6ca87b5a.png" 
                  alt="Kombi vozilo za prevoz" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Specifikacije vozila</h3>
                <div className="space-y-4">
                  <div className="flex items-start justify-center">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Truck className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-lg font-medium text-gray-900">Tovarni prostor</h4>
                      <p className="text-gray-600">Optimalno dimenzionisan za sve vrste selidbi</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg w-fit mx-auto">
                    <h5 className="text-lg font-semibold mb-3 text-gray-900">Dimenzije tovarnog prostora:</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-1 border-b border-gray-200 gap-8">
                        <span className="font-medium text-gray-700">Dužina:</span>
                        <span className="text-primary font-semibold">3.4m</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-gray-200 gap-8">
                        <span className="font-medium text-gray-700">Širina:</span>
                        <span className="text-primary font-semibold">2m</span>
                      </div>
                      <div className="flex justify-between items-center py-1 gap-8">
                        <span className="font-medium text-gray-700">Visina:</span>
                        <span className="text-primary font-semibold">2m</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehiclesSection;
