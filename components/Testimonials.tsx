
import React from 'react';

const testimonials = [
  {
    quote: "Bugle Boy isn't just a perfume, it's an experience. Noir Élixir has become my signature scent. I feel incomplete without it.",
    author: "Alexandra Chen",
    title: "Fashion Blogger"
  },
  {
    quote: "The complexity and longevity of Terre Sauvage is unparalleled. It's subtle yet powerful, and I receive compliments every time I wear it.",
    author: "James Miller",
    title: "Architect"
  },
  {
    quote: "I was searching for a unique scent and found it in Aura Céleste. It's so fresh and elegant. Truly a masterpiece of perfumery.",
    author: "Sophia Dubois",
    title: "Art Curator"
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-brand-dark py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-gold mb-4">Whispers of Acclaim</h2>
           <p className="text-brand-light/80 max-w-2xl mx-auto">Hear what our discerning clientele have to say about their sensory journey with us.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border border-brand-gold/20 p-8 text-center bg-black flex flex-col">
              <div className="flex-grow">
                <p className="text-brand-light/90 italic text-lg mb-6 before:content-['“'] before:text-brand-gold before:text-4xl before:mr-1 after:content-['”'] after:text-brand-gold after:text-4xl after:ml-1">
                  {testimonial.quote}
                </p>
              </div>
              <div>
                <p className="font-serif text-xl text-brand-gold">{testimonial.author}</p>
                <p className="text-sm text-brand-light/60 tracking-widest uppercase">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
