import React from 'react';
import { useQuery } from '@apollo/client';
import {GET_PRODUCTS_QUERY} from '../../graphql/queries';
import ProductCard from '../../components/product-card/ProductCard';
import '../../styles/styles.css'

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: Rating;
}


const Home: React.FC = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS_QUERY);

  console.log("loading:", loading);
  console.log("error:", error);
  console.log("data:", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;

 const products: Product[] = data?.products || [];

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center">
      <h1 className="text-3xl font-bold text-center text-blue-600">Welcome to Our E-Commerce Store!</h1>
      <div className="grid grid-cols-3 gap-4 p-4"> 
        {products.map((product) => ( 
        <ProductCard key={product.id}
                     title={product.title}
                     price={product.price}
                     description={product.description}
                     category={product.category}
                     image={product.image}
                     rating={product.rating} />
                     ))
        }
      </div> 
    </div>
  );
};

export default Home;