import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Instagram } from 'lucide-react';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const phoneNumber = '+381 62 113 0568';
  const email = 'darkoandjelkovicdzeza@gmail.com';
  const instagramHandle = '@kombi_prevoz_dare_krusevac';
  
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
    <section id="kontakt" className="bg-light-bg" ref={sectionRef}>
      <div className="md:container md:mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kontaktirajte Nas
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Spremni smo da odgovorimo na Vaša pitanja i pomognemo Vam da isplanirate Vašu selidbu
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="animate-on-scroll w-full max-w-4xl">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-center">Kontakt Informacije</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Telefon</h4>
                    <p className="text-gray-600">{phoneNumber}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <p className="text-gray-600 text-sm">{email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <a 
                    href="https://instagram.com/dareprevoz_krusevac" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start hover:opacity-80 transition-opacity"
                  >
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Instagram className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Instagram</h4>
                      <p className="text-gray-600">{instagramHandle}</p>
                    </div>
                  </a>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Adresa</h4>
                    <p className="text-gray-600">37000 Kruševac, Srbija</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 animate-on-scroll">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23473.2!2d21.3287!3d43.5764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755c8f7c1b8e8c7%3A0x1234567890abcdef!2zS3J1xaFldmFj!5e0!3m2!1ssr!2srs!4v1680258189412!5m2!1ssr!2srs"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokacija Kruševac"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
