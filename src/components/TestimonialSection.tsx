
import { useRef, useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  content: string;
  author: string;
  role: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    content: "GreenScape completely transformed our backyard into a peaceful retreat. Their attention to detail and plant knowledge is impressive. We couldn't be happier with the results.",
    author: "Emily Richardson",
    role: "Homeowner",
    rating: 5
  },
  {
    content: "We've been using GreenScape's maintenance services for over three years now, and our garden has never looked better. Their team is professional, punctual, and truly cares about the health of our landscape.",
    author: "Michael Donovan",
    role: "Estate Manager",
    rating: 5
  },
  {
    content: "The tree planting service was exceptional. They helped us select species that would thrive in our soil and climate conditions, and the installation was done with great care for the existing landscape.",
    author: "Sarah Johnson",
    role: "Property Developer",
    rating: 4
  },
  {
    content: "From concept to completion, GreenScape exceeded our expectations. They listened to our ideas and transformed them into a garden that's not only beautiful but also surprisingly low-maintenance.",
    author: "David Chen",
    role: "Residential Client",
    rating: 5
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
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

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        className={cn(
          "w-4 h-4", 
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        )} 
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding" ref={sectionRef}>
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-nature-100 text-nature-800 rounded-full mb-4">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-nature-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            We take pride in exceeding client expectations and creating landscapes that bring joy for years to come.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={cn(
                "opacity-0 absolute inset-0 transition-all duration-700 ease-in-out",
                activeIndex === index ? "opacity-100 translate-x-0 relative" : 
                index < activeIndex ? "-translate-x-full" : "translate-x-full"
              )}
            >
              <div 
                className={cn(
                  "bg-white rounded-2xl p-10 md:p-14 shadow-sm border border-gray-100 text-center",
                  isVisible && "animate-scale-up"
                )}
              >
                <div className="flex justify-center mb-5">
                  {renderStars(testimonial.rating)}
                </div>
                
                <blockquote className="text-xl md:text-2xl font-serif text-nature-800 mb-8 italic">
                  "{testimonial.content}"
                </blockquote>
                
                <div>
                  <p className="font-medium text-nature-800">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation controls */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-nature-100 text-nature-600 hover:bg-nature-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    activeIndex === index ? "bg-nature-600 w-6" : "bg-nature-200"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-nature-100 text-nature-600 hover:bg-nature-200 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
