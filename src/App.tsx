import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import './App.css';
// import ProductList from './ProductList';

import Home from './pages/home/Home';

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <ProductList/> */}
      <Home/>
    </ApolloProvider>
  );
}

export default App;
