import { useState } from 'react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import TopBar from '../components/TopBar';
import OurSpaceSection from '../components/OurSpaceSection';
import TherapistsSection from '../components/TherapistsSection';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2D1A4A] via-[#3A2265] to-[#4B2E83] relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-1 h-1 bg-white/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-cta/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[30%] right-1/3 w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[50%] left-16 w-1.5 h-1.5 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[70%] right-10 w-1 h-1 bg-cta/15 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[85%] left-1/3 w-1 h-1 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }} />
        {/* Orbit rings */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] border border-white/[0.03] rounded-full" />
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] border border-primary/5 rounded-full" />
      </div>

      <TopBar />
      <Navigation />
      <main>
        <Hero />
        <OurSpaceSection />
        <TherapistsSection />
      </main>
      <Footer />

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#2D1A4A]/90 backdrop-blur-md border-t border-white/10 p-3">
        <button
          onClick={() => setModalOpen(true)}
          className="block w-full cta-glow bg-cta text-cta-foreground font-bold text-center py-3 rounded-xl shadow-lg shadow-cta/30"
        >
          Κλείστε Ραντεβού
        </button>
      </div>

      <ContactModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
};

export default Index;
