
import React from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, Shield, BarChart, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvestmentHero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Grow Your 
              <span className="text-green-400 block sm:inline sm:ml-3">Wealth</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
              Professional investment management with cutting-edge technology. 
              Start building your financial future today with our expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/portfolio">
                <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  Start Investing
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center">
              <TrendingUp className="h-8 w-8 sm:h-12 sm:w-12 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold text-sm sm:text-base mb-2">High Returns</h3>
              <p className="text-blue-100 text-xs sm:text-sm">Average 12% annual growth</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center">
              <Shield className="h-8 w-8 sm:h-12 sm:w-12 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold text-sm sm:text-base mb-2">Secure</h3>
              <p className="text-blue-100 text-xs sm:text-sm">Bank-level security</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center">
              <BarChart className="h-8 w-8 sm:h-12 sm:w-12 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold text-sm sm:text-base mb-2">Analytics</h3>
              <p className="text-blue-100 text-xs sm:text-sm">Real-time insights</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center">
              <DollarSign className="h-8 w-8 sm:h-12 sm:w-12 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold text-sm sm:text-base mb-2">Low Fees</h3>
              <p className="text-blue-100 text-xs sm:text-sm">From 0.25% annually</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentHero;
