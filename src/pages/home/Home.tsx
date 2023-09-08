import React from 'react';
import ProductSlider from '../../components/product-slider/ProductSlider';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS_QUERY } from '../../graphql/queries';
import '../../styles/styles.css';

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;

  const products: Product[] = data?.products || [];

  return <ProductSlider products={products} />;
};

export default Home;