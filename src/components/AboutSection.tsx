import { useEffect, useRef } from 'react';

const AboutSection = () => {
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
    <section id="o-nama" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1507493864924-12046c988f8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Tim za selidbe" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O Nama
            </h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-gray-700 mb-4 text-lg">
              Naša kompanija za selidbe iz Kruševca već godinama pruža pouzdane usluge selidbe za domaćinstva i preduzeća. Sa našim iskusnim timom i specijalizovanom opremom, garantujemo bezbednost vaših stvari tokom celog procesa selidbe.
            </p>
            <p className="text-gray-700 mb-6 text-lg">
              Posvećeni smo pružanju profesionalnih i efikasnih usluga selidbe koje su prilagođene vašim specifičnim potrebama. Bilo da se selite lokalno u Kruševcu i okolini ili na druge lokacije, naš tim će se pobrinuti da vaša selidba protekne glatko.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start">
                <div className="rounded-full bg-primary/10 p-3 mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Iskusni profesionalci</h3>
                  <p className="text-gray-600">Obučen tim sa višegodišnjim iskustvom</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="rounded-full bg-primary/10 p-3 mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Sigurnost</h3>
                  <p className="text-gray-600">Bezbednost vaših stvari je naš prioritet</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="rounded-full bg-primary/10 p-3 mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Efikasnost</h3>
                  <p className="text-gray-600">Brza i tačna usluga koja štedi vaše vreme</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="rounded-full bg-primary/10 p-3 mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Pristupačne cene</h3>
                  <p className="text-gray-600">Konkurentne cene bez skrivenih troškova</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
