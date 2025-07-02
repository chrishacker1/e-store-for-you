
import React from 'react';
import { CartProvider } from '../contexts/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, DollarSign, BarChart } from 'lucide-react';

const Portfolio = () => {
  const portfolioData = {
    totalValue: '$125,480.50',
    totalGain: '+$8,340.25',
    totalGainPercent: '+7.13%',
    dayChange: '+$1,234.56',
    dayChangePercent: '+0.99%'
  };

  const holdings = [
    { symbol: 'AAPL', name: 'Apple Inc.', shares: 50, value: '$9,794.50', change: '+3.2%', positive: true },
    { symbol: 'MSFT', name: 'Microsoft Corp.', shares: 25, value: '$9,471.25', change: '+2.8%', positive: true },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', shares: 30, value: '$4,276.80', change: '+2.1%', positive: true },
    { symbol: 'TSLA', name: 'Tesla Inc.', shares: 15, value: '$3,847.65', change: '-1.4%', positive: false },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', shares: 20, value: '$3,104.20', change: '+1.9%', positive: true },
  ];

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">My Portfolio</h1>
          
          {/* Portfolio Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Total Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-2xl font-bold">{portfolioData.totalValue}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Total Gain</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                  <div>
                    <span className="text-2xl font-bold text-green-600">{portfolioData.totalGain}</span>
                    <span className="text-sm text-green-600 ml-2">{portfolioData.totalGainPercent}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Day Change</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                  <div>
                    <span className="text-2xl font-bold text-green-600">{portfolioData.dayChange}</span>
                    <span className="text-sm text-green-600 ml-2">{portfolioData.dayChangePercent}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Holdings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <BarChart className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-2xl font-bold">{holdings.length}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Holdings Table */}
          <Card>
            <CardHeader>
              <CardTitle>Holdings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Symbol</th>
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">Shares</th>
                      <th className="text-left py-3 px-4">Value</th>
                      <th className="text-left py-3 px-4">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {holdings.map((holding, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-4 px-4 font-semibold">{holding.symbol}</td>
                        <td className="py-4 px-4 text-gray-600">{holding.name}</td>
                        <td className="py-4 px-4">{holding.shares}</td>
                        <td className="py-4 px-4 font-semibold">{holding.value}</td>
                        <td className="py-4 px-4">
                          <div className={`flex items-center ${holding.positive ? 'text-green-600' : 'text-red-600'}`}>
                            {holding.positive ? 
                              <TrendingUp className="h-4 w-4 mr-1" /> : 
                              <TrendingDown className="h-4 w-4 mr-1" />
                            }
                            <span className="font-semibold">{holding.change}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6">
                <Button className="mr-4">Add Investment</Button>
                <Button variant="outline">Rebalance Portfolio</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Portfolio;
