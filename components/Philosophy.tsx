import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://i.ibb.co/C3m0qwHL/generation-7fdf7eb8-b4dd-4904-9125-a9f688dd0922.png" 
              alt="Artisanal perfume creation" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-gold mb-6">The Art of Scent</h2>
            <p className="text-lg text-brand-light/90 mb-4 leading-relaxed">
              At Bugle Boy, we believe perfume is more than a fragrance—it's an identity. It's a silent expression of character, an invisible accessory that completes your presence.
            </p>
            <p className="text-brand-light/80 mb-8 leading-relaxed">
              Our master perfumers source the world's finest ingredients, blending tradition with modern innovation to create scents that are both timeless and contemporary. Each bottle encapsulates a story, a mood, a memory waiting to be made.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;