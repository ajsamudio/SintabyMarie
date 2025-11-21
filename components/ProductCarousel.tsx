import React, { useRef } from 'react';
import { Product } from '../types';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// Generate 20 placeholder products
const products: Product[] = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  name: `Artisan Gem ${i + 1}`,
  price: 45 + (i * 5),
  imageUrl: `https://picsum.photos/seed/${i + 100}/400/500`,
}));

const ProductCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth * 0.75; // Scroll 75% of the visible width
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      className="py-10 md:py-16 bg-white relative" 
      id="best-sellers"
    >
      <div className="container mx-auto px-2 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-6 md:mb-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0">
            <h3 className="font-serif text-3xl md:text-4xl text-brand-dark mb-2">Best Sellers</h3>
            <div className="h-1 w-20 bg-brand-accent"></div>
          </div>
          
          {/* Desktop View All Link */}
          <a href="#all" className="hidden md:flex items-center text-brand-main hover:text-brand-dark transition-colors text-sm font-bold uppercase tracking-wider">
            View All <ArrowRight size={16} className="ml-2" />
          </a>
        </div>

        {/* Carousel Content Wrapper */}
        <div className="relative group">
          
          {/* Navigation Buttons - Show on hover or always visible on mobile */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-20 bg-white/90 backdrop-blur text-brand-dark p-2 rounded-full shadow-xl border border-gray-100 hover:bg-brand-accent hover:text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-20 bg-white/90 backdrop-blur text-brand-dark p-2 rounded-full shadow-xl border border-gray-100 hover:bg-brand-accent hover:text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>

          {/* The Scrollable Strip */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 md:gap-6 pb-6 pt-2 px-1 no-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="flex-shrink-0 w-44 md:w-64 snap-start group/item"
              >
                <div className="relative overflow-hidden aspect-[4/5] bg-gray-100 mb-3 cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 rounded-sm">
                   <img 
                    src={product.imageUrl} 
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-dark/0 group-hover/item:bg-brand-dark/10 transition-colors duration-300"></div>
                  
                  <button className="hidden md:block absolute bottom-0 left-0 w-full bg-brand-dark/95 text-white py-3 text-xs uppercase tracking-widest translate-y-full group-hover/item:translate-y-0 transition-transform duration-300">
                    Add to Cart
                  </button>
                </div>
                <div className="text-center md:text-left px-1">
                  <h4 className="font-serif text-sm md:text-lg text-brand-dark group-hover/item:text-brand-accent transition-colors cursor-pointer truncate">{product.name}</h4>
                  <p className="text-gray-500 font-sans font-light text-xs md:text-base">${product.price}.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View All Button */}
        <div className="mt-6 text-center md:hidden">
          <button className="w-full border border-brand-dark text-brand-dark px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-brand-dark hover:text-white transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;