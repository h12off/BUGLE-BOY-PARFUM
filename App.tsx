
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Philosophy from './components/Philosophy';

function App(): React.ReactNode {
  return (
    <div className="bg-brand-dark text-brand-light font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <Philosophy />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
