import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/styles.css'

export interface ProductCardProps {
  id: number;
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
  id,
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
    <Link to={`/product/${id}`}>
      <div className="bg-white p-4 rounded-lg shadow-md overflow-hidden hover:shadow-lg" style={cardStyle}>
        <div className="flex flex-col h-full">
        <div className="min-h-48">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        </div>
        <div className="flex flex-col flex-grow">
        <h2 className="text-lg text-center font-semibold mt-2 leading-none" style={{ width: 'max-content' }}>{title}</h2>
        <p className="text-gray-600">{category}</p>
        <p className="text-lg font-semibold mt-1">${price}</p>
        <p className="text-gray-700 mt-2 flex-grow overflow-y-auto max-h-36">{description}</p>
        <div className="mt-2 flex items-center">
          <span className="text-yellow-500">{rating.rate}</span>
          <span className="ml-1 text-gray-600">({rating.count} reviews)</span>
        </div>
        </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;