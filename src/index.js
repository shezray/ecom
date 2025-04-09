import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18

import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { UserProvider } from './contexts/user.context';
import { ProductsProvider } from './contexts/products.context';

import './index.scss';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Create root using new API

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
