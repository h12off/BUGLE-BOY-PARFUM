
import React from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, imageUrl }) => {
  return (
    <div className="group relative overflow-hidden text-center bg-black">
        <img src={imageUrl} alt={name} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 transform translate-y-12 group-hover:translate-y-0">
          <h3 className="text-3xl font-serif text-brand-gold mb-2">{name}</h3>
          <p className="text-brand-light/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto">{description}</p>
        </div>
    </div>
  );
};

export default ProductCard;
