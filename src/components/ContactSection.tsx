
import { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you for your message! We'll be in touch soon.");
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-nature-50 to-white" ref={sectionRef}>
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-nature-100 text-nature-800 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-nature-800 mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Contact us today for a free consultation and let our experts help bring your landscaping vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div 
            className={cn(
              "bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 opacity-0",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-nature-800 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-nature-500 focus:border-transparent transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-nature-800 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-nature-500 focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-nature-800 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-nature-500 focus:border-transparent transition-colors"
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-nature-800 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-nature-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="lawn">Lawn Maintenance</option>
                    <option value="tree">Tree Planting</option>
                    <option value="garden">Garden Design</option>
                    <option value="shrub">Shrub & Hedge Trimming</option>
                    <option value="seasonal">Seasonal Planting</option>
                    <option value="renovation">Landscape Renovation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-nature-800 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-nature-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your project or inquiries..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full bg-nature-600 hover:bg-nature-700 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center",
                    isSubmitting ? "opacity-90 cursor-not-allowed" : "btn-hover"
                  )}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
          
          <div 
            className={cn(
              "opacity-0",
              isVisible && "animate-fade-in-right"
            )}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 mb-8">
              <h3 className="font-serif text-xl font-medium text-nature-800 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-nature-100 rounded-full p-3">
                    <Phone className="w-5 h-5 text-nature-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <p className="font-medium text-nature-800">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-nature-100 rounded-full p-3">
                    <Mail className="w-5 h-5 text-nature-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-medium text-nature-800">info@greenscape.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-nature-100 rounded-full p-3">
                    <MapPin className="w-5 h-5 text-nature-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Office</p>
                    <p className="font-medium text-nature-800">
                      123 Garden Street<br />
                      Greenville, CA 90210
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-nature-600 p-8 md:p-10 rounded-2xl text-white">
              <h3 className="font-serif text-xl font-medium mb-4">
                Business Hours
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="mb-4">Need emergency landscape service?</p>
                <a
                  href="tel:+11234567890"
                  className="inline-block bg-white text-nature-600 hover:text-nature-700 font-medium py-2 px-5 rounded-md transition-colors"
                >
                  Call our emergency line
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
