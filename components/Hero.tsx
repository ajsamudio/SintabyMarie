import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] bg-gray-200 overflow-hidden">
      {/* Placeholder Background Image */}
      <img 
        src="https://picsum.photos/id/146/1920/1080" 
        alt="Hero Jewelry" 
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      {/* Violet Overlay for brand consistency */}
      <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/60 to-transparent"></div>

      {/* Text Content */}
      <div className="relative container mx-auto h-full px-4 md:px-8 flex flex-col justify-center">
        <div className="max-w-lg text-white">
          <h2 className="font-serif text-5xl md:text-7xl mb-6 leading-tight drop-shadow-lg">
            Timeless <br />
            <span className="italic font-script text-6xl md:text-8xl text-brand-light">Handcrafted</span> <br />
            Jewelry
          </h2>
          <p className="text-lg md:text-xl mb-8 font-light text-gray-100 max-w-md drop-shadow-md">
            Discover the elegance of artisan designs, created to make every moment shine.
          </p>
          <button className="bg-white text-brand-dark px-8 py-3 uppercase tracking-widest text-sm font-bold hover:bg-brand-accent hover:text-white transition-all duration-300 shadow-lg">
            Shop Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;