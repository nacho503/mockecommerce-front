import React from 'react';
import '../../styles/styles.css'

export interface ProductCardProps {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {

  const cardStyle = {
    width: '250px', // Set your desired width
    height: '400px', // Set your desired height
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md overflow-hidden hover:shadow-lg" style={cardStyle}>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <h2 className="text-xl text-center font-semibold mt-2">{title}</h2>
      <p className="text-gray-600">{category}</p>
      <p className="text-lg font-semibold mt-1">${price}</p>
      <p className="text-gray-700 mt-2">{description}</p>
      <div className="mt-2 flex items-center">
        <span className="text-yellow-500">{rating.rate}</span>
        <span className="ml-1 text-gray-600">({rating.count} reviews)</span>
      </div>
    </div>
  );
};

export default ProductCard;