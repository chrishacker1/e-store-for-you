
import { CartProvider } from '../contexts/CartContext';
import Header from '../components/Header';
import InvestmentHero from '../components/InvestmentHero';
import InvestmentServices from '../components/InvestmentServices';
import MarketOverview from '../components/MarketOverview';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <InvestmentHero />
        <InvestmentServices />
        <MarketOverview />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
