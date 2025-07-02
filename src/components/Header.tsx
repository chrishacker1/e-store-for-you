
import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import Cart from './Cart';

const Header = () => {
  const { state } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to products page with search functionality
      navigate('/products');
      // Here you could implement actual search filtering
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                StoreHub
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors">Home</Link>
              <Link to="/products" className="text-gray-700 hover:text-gray-900 transition-colors">Products</Link>
              <Link to="/categories" className="text-gray-700 hover:text-gray-900 transition-colors">Categories</Link>
              <Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</Link>
            </nav>

            {/* Search and Cart */}
            <div className="flex items-center space-x-4">
              <form onSubmit={handleSearch} className="relative hidden sm:block">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </form>

              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-gray-900"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-2">
                <Link to="/" className="text-gray-700 hover:text-gray-900 py-2 transition-colors">Home</Link>
                <Link to="/products" className="text-gray-700 hover:text-gray-900 py-2 transition-colors">Products</Link>
                <Link to="/categories" className="text-gray-700 hover:text-gray-900 py-2 transition-colors">Categories</Link>
                <Link to="/about" className="text-gray-700 hover:text-gray-900 py-2 transition-colors">About</Link>
                <Link to="/contact" className="text-gray-700 hover:text-gray-900 py-2 transition-colors">Contact</Link>
              </nav>
              <form onSubmit={handleSearch} className="mt-4 sm:hidden relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </form>
            </div>
          )}
        </div>
      </header>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
