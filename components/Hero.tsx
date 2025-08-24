import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: "url('https://i.ibb.co/KpbLLF2d/Whisk-330eb7ab0f.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white p-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-wider mb-4 text-shadow-lg">
          Elegance in a Bottle
        </h1>
        <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto tracking-wide">
          Discover the essence of sophistication with Bugle Boy Parfum. Crafted for the modern individual who values timeless luxury.
        </p>
      </div>
    </section>
  );
};

export default Hero;