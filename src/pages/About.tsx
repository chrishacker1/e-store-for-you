
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
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">About WealthHub</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-6">
                Welcome to WealthHub, your trusted partner in building long-term wealth and achieving financial independence. 
                We combine cutting-edge technology with time-tested investment strategies to help you reach your financial goals.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At WealthHub, we believe that everyone deserves access to professional-grade investment management. 
                Our mission is to democratize wealth building by providing sophisticated investment tools, 
                expert guidance, and personalized strategies that were once available only to the ultra-wealthy.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose WealthHub?</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Professional portfolio management with institutional-grade strategies</li>
                <li>Low-cost investing with transparent fee structure</li>
                <li>Advanced risk management and diversification</li>
                <li>Real-time portfolio monitoring and analytics</li>
                <li>Tax-efficient investment strategies</li>
                <li>Dedicated customer support and financial guidance</li>
                <li>Bank-level security and regulatory compliance</li>
                <li>Mobile and web platforms for 24/7 access</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Approach</h2>
              <p className="text-gray-600 mb-4">
                We employ a disciplined, research-driven approach to investing that focuses on:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li><strong>Diversification:</strong> Spreading risk across asset classes and geographic regions</li>
                <li><strong>Cost Efficiency:</strong> Minimizing fees to maximize your returns</li>
                <li><strong>Tax Optimization:</strong> Implementing strategies to reduce your tax burden</li>
                <li><strong>Risk Management:</strong> Balancing growth potential with capital preservation</li>
                <li><strong>Long-term Focus:</strong> Building wealth through patient, strategic investing</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600">
                Founded in 2018 by a team of former Wall Street professionals and technology experts, 
                WealthHub was born from the belief that sophisticated investment management should be 
                accessible to everyone. Today, we manage over $2 billion in assets for thousands of 
                clients worldwide, helping them build wealth and secure their financial futures.
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
