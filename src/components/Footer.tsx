
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">StoreHub</h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Your one-stop shop for amazing products at unbeatable prices. Quality guaranteed.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Instagram</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Categories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Returns</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Subscribe to get updates on new products and offers.
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
            © 2024 StoreHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
