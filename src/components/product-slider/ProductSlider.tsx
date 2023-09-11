import React, { useState,useEffect } from 'react';
import ProductCard from '../product-card/ProductCard';


interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductSliderProps {
  products: Product[];
}


const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(5); // Number of cards to display per page
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Adjust the number of cards displayed based on screen width
      if (window.innerWidth >= 1024) {
        setCardsPerPage(5); // Show 5 cards on larger screens
      } else if (window.innerWidth >= 768) {
        setCardsPerPage(3); // Show 3 cards on medium screens
      } else {
        setCardsPerPage(1); // Show 1 card on smaller screens
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize the number of cards

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate the range of indices to display based on currentIndex and cardsPerPage
  const startIndex = currentIndex;
  const endIndex = (startIndex + cardsPerPage) % products.length;

  // Create an array of indices within the current range
  const indicesToDisplay = Array.from(
    { length: cardsPerPage },
    (_, index) => (startIndex + index) % products.length
  );

  return (
    <div className="relative">
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2  w-10 h-10 bg-white border-2 border-black  rounded-full flex items-center justify-center text-gray-800 hover:border-4"
        style={{ zIndex: 1 }} // Ensure the arrows are above the cards
      >
        &lt;
      </button>
      <div className="flex justify-center">
        <div
          className="flex space-x-4 transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${indicesToDisplay.indexOf(
              currentIndex
            ) * (100 / cardsPerPage)}%)`,
          }}
        >
          {indicesToDisplay.map((index) => (
            <div
              key={index}
              className={`w-${100 / cardsPerPage} px-2 hover:scale-105 transform transition-transform duration-300`}
              style={{ minWidth: '200px' }}
            >
              <ProductCard {...products[index]} />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center text-gray-800 hover:border-4"
        style={{ zIndex: 1 }} // Ensure the arrows are above the cards
      >
        &gt;
      </button>
    </div>
  );
};

export default ProductSlider;