
import { Leaf, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-nature-800 text-white">
      <div className="container max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="w-7 h-7 text-nature-400" />
              <span className="font-serif text-xl font-medium">GreenScape</span>
            </div>
            <p className="text-nature-300 mb-6 max-w-xs">
              Premium landscaping and garden maintenance services to transform your outdoor spaces into sustainable natural art.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-nature-700 hover:bg-nature-600 transition-colors p-2 rounded-full"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-nature-700 hover:bg-nature-600 transition-colors p-2 rounded-full"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-nature-700 hover:bg-nature-600 transition-colors p-2 rounded-full"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-nature-700 hover:bg-nature-600 transition-colors p-2 rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              {['Lawn Maintenance', 'Tree Planting', 'Garden Design', 'Shrub & Hedge Trimming', 'Seasonal Planting', 'Landscape Renovation'].map((item) => (
                <li key={item}>
                  <a 
                    href="#services" 
                    className="text-nature-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'Our Team', 'Testimonials', 'Portfolio', 'Careers', 'FAQ'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-nature-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-6">Newsletter</h3>
            <p className="text-nature-300 mb-4">
              Subscribe to our newsletter for seasonal gardening tips and exclusive offers.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2.5 bg-nature-700 border border-nature-600 rounded-md focus:outline-none focus:ring-2 focus:ring-nature-500 focus:border-transparent transition-colors text-white placeholder:text-nature-400"
                required
              />
              <button 
                type="submit"
                className="w-full bg-nature-600 hover:bg-nature-500 transition-colors text-white font-medium py-2.5 px-4 rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-nature-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-nature-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} GreenScape. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-nature-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-nature-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-nature-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
