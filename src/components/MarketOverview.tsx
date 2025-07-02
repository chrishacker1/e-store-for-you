
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';

const MarketOverview = () => {
  const marketData = [
    { name: 'S&P 500', value: '4,756.50', change: '+1.2%', positive: true },
    { name: 'NASDAQ', value: '14,893.75', change: '+0.8%', positive: true },
    { name: 'DOW JONES', value: '37,689.54', change: '-0.3%', positive: false },
    { name: 'RUSSELL 2000', value: '2,043.43', change: '+2.1%', positive: true },
  ];

  const topPerformers = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: '$195.89', change: '+3.2%' },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: '$378.85', change: '+2.8%' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: '$142.56', change: '+2.1%' },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: '$155.21', change: '+1.9%' },
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Market Overview
          </h2>
          <p className="text-lg text-gray-600">
            Stay updated with real-time market data and trends
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Major Indices */}
          <Card>
            <CardHeader>
              <CardTitle>Major Indices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {marketData.map((index, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">{index.name}</h4>
                      <p className="text-2xl font-bold text-gray-900">{index.value}</p>
                    </div>
                    <div className={`flex items-center ${index.positive ? 'text-green-600' : 'text-red-600'}`}>
                      {index.positive ? 
                        <TrendingUp className="h-5 w-5 mr-1" /> : 
                        <TrendingDown className="h-5 w-5 mr-1" />
                      }
                      <span className="font-semibold">{index.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Performers */}
          <Card>
            <CardHeader>
              <CardTitle>Top Performers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPerformers.map((stock, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">{stock.symbol}</h4>
                      <p className="text-sm text-gray-600">{stock.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">{stock.price}</p>
                      <div className="flex items-center text-green-600">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        <span className="font-semibold text-sm">{stock.change}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MarketOverview;
