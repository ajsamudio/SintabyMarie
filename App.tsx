import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCarousel from './components/ProductCarousel';
import FeatureSection from './components/FeatureSection';
import AboutArtist from './components/AboutArtist';
import Footer from './components/Footer';
import StickySocials from './components/StickySocials';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductCarousel />
        <FeatureSection />
        <AboutArtist />
      </main>
      <Footer />
      <StickySocials />
    </div>
  );
};

export default App;