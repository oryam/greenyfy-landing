
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background image */}
      <div 
        className="blur-load absolute inset-0 z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=10&q=1')" }}
      >
        <img 
          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
          alt="Sun light passing through green leafed trees"
          className="w-full h-full object-cover"
          onLoad={() => {
            const parentElement = document.querySelector('.blur-load');
            if (parentElement) parentElement.classList.add('loaded');
          }}
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent z-10"></div>
      
      {/* Content container */}
      <div className="relative z-20 h-full container max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-2xl">
          <span 
            className={cn(
              "inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-white/10 backdrop-blur-sm text-white rounded-full mb-6 opacity-0",
              isLoaded && "animate-fade-in"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            Premium Landscape Services
          </span>
          
          <h1 
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-6 opacity-0 leading-tight tracking-tight",
              isLoaded && "animate-fade-in"
            )}
            style={{ animationDelay: "0.4s" }}
          >
            Transform Your Outdoor Space Into Natural Art
          </h1>
          
          <p 
            className={cn(
              "text-lg md:text-xl text-white/90 mb-8 max-w-lg opacity-0",
              isLoaded && "animate-fade-in"
            )}
            style={{ animationDelay: "0.6s" }}
          >
            Expert garden maintenance, landscape design, and sustainable planting solutions to create outdoor spaces that thrive in harmony with nature.
          </p>
          
          <div 
            className={cn(
              "flex flex-col sm:flex-row gap-4 opacity-0",
              isLoaded && "animate-fade-in"
            )}
            style={{ animationDelay: "0.8s" }}
          >
            <a 
              href="#contact" 
              className="group bg-nature-600 hover:bg-nature-700 text-white px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-all duration-300 btn-hover"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#services" 
              className="backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-all duration-300 btn-hover"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className={cn(
          "absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 opacity-0",
          isLoaded && "animate-fade-in"
        )}
        style={{ animationDelay: "1.2s" }}
      >
        <div className="w-1 h-12 relative">
          <span className="absolute top-0 left-0 w-full h-1/3 bg-white rounded-full animate-float" style={{ animationDelay: "0s" }}></span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
