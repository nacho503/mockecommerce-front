import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS_QUERY } from './graphql/queries';

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: Rating;
}



const ProductList:React.FC = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS_QUERY);

  console.log("loading:", loading);
  console.log("error:", error);
  console.log("data:", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;

 const products: Product[] = data?.products || [];


  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product: Product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

