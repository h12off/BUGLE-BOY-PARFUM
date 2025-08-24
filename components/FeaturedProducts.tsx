
import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    name: 'Noir Élixir',
    description: 'A seductive blend of dark spices, rich leather, and a hint of vanilla.',
    imageUrl: 'https://i.ibb.co/zTZ4XpyK/Whisk-d6c753ee19.jpg'
  },
  {
    name: 'Aura Céleste',
    description: 'An ethereal scent with notes of citrus, white florals, and clean musk.',
    imageUrl: 'https://i.ibb.co/pr9DJq73/Whisk-eb3dc9cb08.jpg'
  },
  {
    name: 'Terre Sauvage',
    description: 'An earthy fragrance combining vetiver, cedarwood, and a touch of amber.',
    imageUrl: 'https://i.ibb.co/xqgLB8jQ/Whisk-dc362703c8.jpg'
  }
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="bg-brand-dark py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-gold mb-4">Our Signature Scents</h2>
          <p className="text-brand-light/80 max-w-2xl mx-auto">Each fragrance is a masterpiece, meticulously composed to evoke a unique sensory journey.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
