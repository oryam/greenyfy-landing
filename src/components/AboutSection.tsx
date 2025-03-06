
import { useRef, useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  "Sustainable gardening practices",
  "Expert horticulturists and landscape designers",
  "Premium quality plants and materials",
  "Tailored design approach for each client",
  "Ongoing maintenance programs",
  "Eco-friendly pest control solutions"
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
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
    <section id="about" className="section-padding overflow-hidden" ref={sectionRef}>
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            className={cn(
              "lg:order-2 relative opacity-0",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              {/* First image - main */}
              <div className="rounded-2xl overflow-hidden shadow-xl animate-image-glow">
                <img 
                  src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Low angle view of trees" 
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
              </div>
              
              {/* Second image - small overlay */}
              <div className="absolute -bottom-12 -left-12 w-2/3 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Bird's eye view of green mountains" 
                  className="w-full h-auto object-cover aspect-[3/2]"
                />
              </div>
              
              {/* Decorative element */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-nature-100 rounded-full opacity-50 -z-10"></div>
            </div>
          </div>
          
          <div 
            className={cn(
              "lg:order-1 opacity-0",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.4s" }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-nature-100 text-nature-800 rounded-full mb-4">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-nature-800 mb-6 leading-tight">
              Creating Harmonious Outdoor Spaces Since 2008
            </h2>
            <p className="text-muted-foreground mb-6">
              At GreenScape, we believe that a thoughtfully designed landscape can transform not just your property, but your daily experience of home. Our team of dedicated professionals combines horticultural expertise with creative design principles to create sustainable, beautiful outdoor spaces.
            </p>
            <p className="text-muted-foreground mb-8">
              With over 15 years of experience in landscape design and garden maintenance, we've built our reputation on attention to detail, sustainable practices, and a client-centered approach that ensures your vision comes to life.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-2"
                >
                  <div className="bg-nature-100 rounded-full p-1 mt-0.5">
                    <Check className="w-4 h-4 text-nature-600" />
                  </div>
                  <span className="text-sm text-nature-800">{feature}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="#contact" 
              className="inline-block bg-nature-600 hover:bg-nature-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 btn-hover"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
