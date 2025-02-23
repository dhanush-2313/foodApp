import React from 'react';
import LandingPage from './suby/pages/LandingPage';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ProductMenu from './suby/components/ProductMenu';
import LoginPage from './suby/pages/LoginPage';
import SignupPage from './suby/pages/SignupPage';
import { AuthProvider } from './suby/context/AuthContext';
import { CartProvider } from './suby/context/CartContext';
import Cart from './suby/components/Cart';

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/products/:firmId/:firmName' element={<ProductMenu />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;