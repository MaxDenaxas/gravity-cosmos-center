import { Star } from 'lucide-react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import TopBar from '../components/TopBar';
import OurSpaceSection from '../components/OurSpaceSection';
import TherapistsSection from '../components/TherapistsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 relative overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-white opacity-15 animate-pulse"
            size={Math.random() * 6 + 3}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`
            }}
          />
        ))}
      </div>

      <TopBar />
      <Navigation />
      <Hero />
      <OurSpaceSection />
      <TherapistsSection />
      <Footer />

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black/80 backdrop-blur-md border-t border-white/10 p-3">
        <a
          href="tel:6974135009"
          className="block bg-cta text-cta-foreground font-bold text-center py-3 rounded-xl shadow-lg shadow-cta/30"
        >
          Κλείστε Δωρεάν Αξιολόγηση
        </a>
      </div>
    </div>
  );
};

export default Index;
