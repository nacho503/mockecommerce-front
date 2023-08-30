import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import './App.css';
import ProductList from './ProductList';

function App() {
  return (
    <ApolloProvider client={client}>
      <ProductList/>
    </ApolloProvider>
  );
}

export default App;
