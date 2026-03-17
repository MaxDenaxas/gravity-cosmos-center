import { Star, Mail, Instagram, Facebook } from 'lucide-react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import OurSpaceSection from '../components/OurSpaceSection';
import TherapistsSection from '../components/TherapistsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950 relative overflow-hidden">
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

      {/* Top bar */}
      <header className="relative z-10 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-white/70 text-sm">
            <a href="mailto:gravity.center25@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={14} />
              <span className="hidden sm:inline">gravity.center25@gmail.com</span>
            </a>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/gravity_center25" target="_blank" rel="noopener noreferrer" className="hover:text-cta transition-colors">
                <Instagram size={16} />
              </a>
              <a href="https://www.facebook.com/groups/1291275665934673/" target="_blank" rel="noopener noreferrer" className="hover:text-cta transition-colors">
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <Navigation />
      <Hero />
      <ServicesCloud />
      <TherapistsSection />
      <Footer />

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black/80 backdrop-blur-md border-t border-white/10 p-3">
        <a
          href="tel:6981219691"
          className="block bg-cta text-cta-foreground font-bold text-center py-3 rounded-xl shadow-lg shadow-cta/30"
        >
          Κλείστε Δωρεάν Αξιολόγηση
        </a>
      </div>
    </div>
  );
};

export default Index;
