
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 pt-20">
        <div 
          className="w-full h-full bg-center bg-top"
          style={{ 
            backgroundImage: "url('/lovable-uploads/c31e9102-c85a-4589-b486-df7fa802dbe0.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="absolute inset-0 bg-gray-500/70"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center pt-20">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Darko Andjelković Prevoz
          </h1>
          <p className="text-xl text-white/90 mb-8 drop-shadow-md">
            Pouzdane i profesionalne usluge selidbe u Kruševcu i okolini
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-4 sm:px-8 max-w-xs sm:max-w-none mx-auto sm:mx-0"
              onClick={() => document.getElementById('usluge')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Naše usluge
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white text-white px-4 sm:px-8 max-w-xs sm:max-w-none mx-auto sm:mx-0"
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
