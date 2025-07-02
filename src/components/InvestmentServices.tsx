
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, BarChart, Shield, DollarSign } from 'lucide-react';

const InvestmentServices = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Portfolio Management",
      description: "Professional portfolio management tailored to your risk tolerance and investment goals.",
      features: ["Diversified portfolios", "Risk assessment", "Regular rebalancing", "Performance tracking"]
    },
    {
      icon: BarChart,
      title: "Market Analysis",
      description: "In-depth market research and analysis to inform your investment decisions.",
      features: ["Market trends", "Stock analysis", "Economic indicators", "Investment research"]
    },
    {
      icon: Shield,
      title: "Wealth Protection",
      description: "Strategies to protect and preserve your wealth through various market conditions.",
      features: ["Risk management", "Insurance planning", "Tax optimization", "Estate planning"]
    },
    {
      icon: DollarSign,
      title: "Retirement Planning",
      description: "Comprehensive retirement planning to ensure financial security in your golden years.",
      features: ["401(k) optimization", "IRA management", "Social Security planning", "Income strategies"]
    }
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Investment Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive investment solutions designed to help you achieve your financial goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <IconComponent className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InvestmentServices;
