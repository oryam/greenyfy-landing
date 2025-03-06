
import { useState, useRef, useEffect } from 'react';
import { 
  Scissors, Leaf, TreeDeciduous, TreePine, Flower2, Sprout, ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Scissors className="w-12 h-12 text-nature-600" />,
    title: "Lawn Maintenance",
    description: "Professional grass cutting, edging, and lawn care services to keep your yard looking immaculate year-round."
  },
  {
    icon: <TreeDeciduous className="w-12 h-12 text-nature-600" />,
    title: "Tree Planting",
    description: "Expert tree selection and planting services to enhance your landscape with sustainable, native species."
  },
  {
    icon: <Sprout className="w-12 h-12 text-nature-600" />,
    title: "Garden Design",
    description: "Creative garden planning and implementation to transform your outdoor spaces into beautiful, functional areas."
  },
  {
    icon: <TreePine className="w-12 h-12 text-nature-600" />,
    title: "Shrub & Hedge Trimming",
    description: "Precision trimming and shaping of shrubs and hedges to maintain clean lines and healthy growth."
  },
  {
    icon: <Flower2 className="w-12 h-12 text-nature-600" />,
    title: "Seasonal Planting",
    description: "Seasonal flower planting and rotation to ensure your garden remains vibrant throughout the year."
  },
  {
    icon: <Leaf className="w-12 h-12 text-nature-600" />,
    title: "Landscape Renovation",
    description: "Complete landscape overhauls and renovations to revitalize tired outdoor spaces with modern designs."
  }
];

const ServiceSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timer = setTimeout(() => {
            const indices = Array.from({ length: services.length }, (_, i) => i);
            setVisibleItems(indices);
          }, 200);
          return () => clearTimeout(timer);
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
    <section id="services" className="section-padding bg-gradient-soft" ref={sectionRef}>
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-nature-100 text-nature-800 rounded-full mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-nature-800 mb-4">
            Premium Landscaping Services
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            We offer a comprehensive range of landscaping and garden maintenance services designed to enhance the beauty and functionality of your outdoor spaces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-500 opacity-0 translate-y-4 card-hover",
                visibleItems.includes(index) && "opacity-100 translate-y-0"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-medium text-nature-800 mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center text-nature-600 hover:text-nature-700 font-medium group"
              >
                Learn more
                <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
