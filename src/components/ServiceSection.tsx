
import { useEffect, useRef } from 'react';

const services = [
  {
    icon: "🏠",
    title: "Selidbe stanova i kuća",
    description: "Potpuna usluga selidbe za vaš dom, od pakovanja do transporta.",
  },
  {
    icon: "🏢",
    title: "Poslovne selidbe",
    description: "Brze i efikasne selidbe kancelarija i poslovnih prostora.",
  },
  {
    icon: "📦",
    title: "Pakovanje i raspakivanje",
    description: "Profesionalno pakovanje vaših stvari sa kvalitetnim materijalima.",
  },
  {
    icon: "🚚",
    title: "Transport nameštaja",
    description: "Bezbedan transport vašeg nameštaja i vrednih stvari.",
  },
  {
    icon: "🔨",
    title: "Montaža i demontaža",
    description: "Stručna montaža i demontaža nameštaja.",
  },
  {
    icon: "🏪",
    title: "Skladištenje",
    description: "Sigurno skladištenje vaših stvari na kraći ili duži period.",
  },
];

const ServiceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 100);
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
    <section id="usluge" className="section-padding bg-light-bg" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Naše Usluge
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pružamo kompletne usluge selidbe prilagođene vašim potrebama
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-on-scroll"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
