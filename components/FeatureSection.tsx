import React from 'react';
import FadeIn from './FadeIn';

const FeatureSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-bg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Left: Image */}
          <div className="w-full md:w-1/2">
            <FadeIn direction="right">
              <div className="relative">
                {/* Decorative border box */}
                <div className="absolute top-4 left-4 w-full h-full border-2 border-brand-accent z-0 hidden md:block"></div>

                <img
                  src="https://picsum.photos/id/338/600/800"
                  alt="Artisan working"
                  className="relative z-10 w-full h-[400px] md:h-[600px] object-cover shadow-xl"
                />
              </div>
            </FadeIn>
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
            <FadeIn direction="left" delay={200}>
              <h2 className="font-script text-5xl text-brand-accent mb-4">Jewelry that Gives Back</h2>
              <h3 className="font-serif text-3xl text-brand-dark mb-6 leading-tight">
                Supporting Artisans & <br /> Communities
              </h3>

              <div className="prose prose-lg text-gray-600 mb-8 mx-auto md:mx-0 font-sans font-light leading-relaxed">
                <p className="mb-4">
                  At SintabyMarie, every piece of jewelry tells a story of hope and opportunity. We believe that education is the key to a brighter future, which is why a portion of every purchase goes directly towards providing books and educational resources to children in underserved communities.
                </p>
                <p>
                  By choosing our handcrafted designs, you are not just wearing beautiful jewelry; you are helping to build libraries and support schools. Together, we can empower the next generation with the knowledge and tools they need to succeed and dream big.
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-4">

                <span className="h-px w-16 bg-brand-dark block md:hidden"></span>
                <button className="text-brand-main underline decoration-1 underline-offset-4 hover:text-brand-dark transition-colors uppercase tracking-widest text-sm font-bold">
                  Read Our Story
                </button>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;