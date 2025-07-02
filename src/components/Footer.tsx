
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">WealthHub</h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Professional investment management with cutting-edge technology. Building wealth for your future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Facebook</a>
            </div>
          </div>

          {/* Investment Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Portfolio Management</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Retirement Planning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Tax Optimization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Wealth Management</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Home</Link></li>
              <li><Link to="/markets" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Markets</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-4">Market Updates</h4>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Subscribe to get weekly market insights and investment tips.
            </p>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none text-gray-900 focus:outline-none text-sm sm:text-base"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-b-lg sm:rounded-r-lg sm:rounded-b-none hover:bg-blue-700 transition-colors text-sm sm:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2024 WealthHub. All rights reserved. Securities offered through WealthHub Financial LLC, member FINRA/SIPC.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
