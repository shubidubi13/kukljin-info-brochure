
import { useEffect, useRef } from 'react';

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
    <section id="nasa-vozila" className="section-padding bg-light-bg" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
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
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80" 
                  alt="Kombi vozilo za prevoz" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Specifikacije vozila</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h4a1 1 0 0 1 0 2v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 0-2h4z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">Tovarni prostor</h4>
                      <p className="text-gray-600">Optimalno dimenzionisan za sve vrste selidbi</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h5 className="text-lg font-semibold mb-4 text-gray-900">Dimenzije tovarnog prostora:</h5>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="font-medium text-gray-700">Dužina:</span>
                        <span className="text-primary font-semibold">3.4m</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="font-medium text-gray-700">Širina:</span>
                        <span className="text-primary font-semibold">2m</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
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
