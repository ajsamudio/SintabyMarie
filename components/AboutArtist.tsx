import React from 'react';
import profileImg from '@/imgs/profile.jpg';
import FadeIn from './FadeIn';

const AboutArtist: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Left: Content (Order 2 on mobile, 1 on desktop) */}
          <div className="w-full md:w-1/2 md:pr-12 text-center md:text-left order-2 md:order-1">
            <FadeIn direction="right">
              <h2 className="font-script text-5xl text-brand-accent mb-4">About the Artist</h2>
              <h3 className="font-serif text-3xl text-brand-dark mb-6 leading-tight">
                Designed by Marie
              </h3>

              <div className="prose prose-lg text-gray-600 mb-8 mx-auto md:mx-0 font-sans font-light leading-relaxed">
                <p className="mb-4">
                  Every piece of jewelry tells a story. For Marie, that story began in a small studio filled with sunlight and scattered gemstones. With a passion for blending traditional craftsmanship with modern aesthetics, she creates pieces that are meant to be cherished for a lifetime.
                </p>
                <p>
                  "I believe jewelry should be an extension of your personality—effortless, elegant, and uniquely yours." This philosophy drives every sketch, every mold, and every polish, ensuring that when you wear SintabyMarie, you're wearing a work of art.
                </p>
              </div>

              <button className="border border-brand-dark text-brand-dark px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-brand-dark hover:text-white transition-colors">
                Read Full Bio
              </button>
            </FadeIn>
          </div>

          {/* Right: Image (Order 1 on mobile, 2 on desktop) */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <FadeIn direction="left">
              <div className="relative">
                {/* Decorative border box - offset to top-right for alternation */}
                <div className="absolute top-4 right-4 w-full h-full border-2 border-brand-accent z-0 hidden md:block"></div>

                <img
                  src={profileImg}
                  alt="Portrait of the artist"
                  loading="lazy"
                  className="relative z-10 w-full h-[400px] md:h-[600px] object-cover shadow-xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutArtist;