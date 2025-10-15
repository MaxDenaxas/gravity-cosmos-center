
import { Phone, Mail, Star, Instagram, Facebook } from 'lucide-react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import ServicesCloud from '../components/ServicesCloud';
import TherapistsSection from '../components/TherapistsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 relative overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-white opacity-20 animate-pulse"
            size={Math.random() * 8 + 4}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 bg-indigo-600/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center text-white text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:gravity.center25@gmail.com" className="hover:text-purple-200 transition-colors">
                  gravity.center25@gmail.com
                </a>
              </div>
            </div>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/gravity_center25" target="_blank" rel="noopener noreferrer" className="hover:text-purple-200 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="https://www.facebook.com/groups/1291275665934673/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-200 transition-colors">
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
    </div>
  );
};

export default Index;
