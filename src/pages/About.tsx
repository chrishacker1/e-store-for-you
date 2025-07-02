
import React from 'react';
import { CartProvider } from '../contexts/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">About StoreHub</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-6">
                Welcome to StoreHub, your premier destination for quality products at unbeatable prices. 
                We've been serving customers worldwide with a commitment to excellence and customer satisfaction.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At StoreHub, we believe that everyone deserves access to high-quality products without breaking the bank. 
                Our mission is to curate the best selection of electronics, fashion, sports equipment, and home goods 
                from trusted brands and emerging innovators.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us?</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Carefully curated product selection</li>
                <li>Competitive pricing with regular discounts</li>
                <li>Fast and reliable shipping</li>
                <li>Excellent customer service</li>
                <li>Easy returns and exchanges</li>
                <li>Secure payment processing</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600">
                Founded in 2020, StoreHub started as a small online marketplace with a simple vision: 
                to make quality products accessible to everyone. Today, we've grown into a trusted 
                e-commerce platform serving thousands of satisfied customers across the globe.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default About;
