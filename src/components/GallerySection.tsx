
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface GalleryImage {
  src: string;
  alt: string;
  size: 'wide' | 'tall' | 'square';
}

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Vibrant orange flowers in garden",
    size: 'wide'
  },
  {
    src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "River between mountains under white clouds",
    size: 'tall'
  },
  {
    src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Pine trees in forest",
    size: 'square'
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Mountain landscape with sunrays",
    size: 'wide'
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Foggy mountain summit",
    size: 'tall'
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Body of water surrounded by trees",
    size: 'square'
  }
];

const GallerySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timer = setTimeout(() => {
            const indices = Array.from({ length: galleryImages.length }, (_, i) => i);
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

  const getImageClassName = (size: string) => {
    switch (size) {
      case 'wide':
        return 'col-span-2 row-span-1';
      case 'tall':
        return 'col-span-1 row-span-2';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <section id="gallery" className="section-padding bg-nature-50" ref={sectionRef}>
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-nature-100 text-nature-800 rounded-full mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-nature-800 mb-4">
            Showcasing Our Finest Work
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Browse through a selection of our completed landscape projects, each reflecting our commitment to quality, sustainability, and innovative design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className={cn(
                getImageClassName(image.size),
                "group relative overflow-hidden rounded-lg shadow-sm opacity-0 translate-y-8",
                visibleItems.includes(index) && "animate-scale-up opacity-100 translate-y-0"
              )}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div className="blur-load h-full w-full" style={{ backgroundImage: `url(${image.src}?w=10&q=10)` }}>
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onLoad={(e) => {
                    const parent = e.currentTarget.parentElement;
                    if (parent) parent.classList.add('loaded');
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <p className="text-white text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
