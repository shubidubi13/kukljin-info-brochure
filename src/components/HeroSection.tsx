
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1600518464441-9745a14aac25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')", 
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Dare Prevoz Kruševac
          </h1>
          <p className="text-xl text-white/90 mb-8 drop-shadow-md">
            Pouzdane i profesionalne usluge selidbe u Kruševcu i okolini
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8"
              onClick={() => document.getElementById('usluge')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Naše usluge
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white text-white px-8"
              onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Kontaktirajte nas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
