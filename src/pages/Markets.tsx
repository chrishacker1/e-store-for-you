
import React from 'react';
import { CartProvider } from '../contexts/CartContext';
import Header from '../components/Header';
import MarketOverview from '../components/MarketOverview';
import Footer from '../components/Footer';

const Markets = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Market Data</h1>
          <MarketOverview />
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Markets;
