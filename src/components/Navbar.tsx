
import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-8", 
        isScrolled ? "py-3 bg-white/90 shadow-sm backdrop-blur-sm" : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center space-x-2 text-nature-800 z-50"
          aria-label="GreenScape Home"
        >
          <Leaf className="w-8 h-8 text-nature-600" />
          <span className="font-serif text-xl md:text-2xl font-medium">GreenScape</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-10">
          {['Services', 'About', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="fancy-link text-sm text-nature-800 font-medium transition-colors hover:text-nature-600"
            >
              {item}
            </a>
          ))}
        </nav>
        
        <button 
          className="inline-flex md:hidden p-2 text-nature-800 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white/95 backdrop-blur-sm transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center items-center",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center space-y-8">
          {['Services', 'About', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg text-nature-800 hover:text-nature-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
