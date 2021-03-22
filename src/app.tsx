import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { injectGlobal } from '@emotion/css';
import Header from './components/header';
import Products from './components/products';
// import Cart from './components/cart';
import { graphqlClient } from './graph';

function App() {
  return (
    <ApolloProvider client={graphqlClient}>
      <>
        <Header />
        <Products />
        {/* <Cart /> */}
      </>
    </ApolloProvider>
  );
}

export default App;

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    height: 100%;
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Libre Franklin", 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    min-height: 100vh;
    font-size: 16px;
  }
  
  #root {
    max-width: 2560px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
`;
