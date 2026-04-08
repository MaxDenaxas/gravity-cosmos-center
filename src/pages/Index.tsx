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
    <div className="min-h-screen bg-[#F6F1FF] relative overflow-hidden">
      <TopBar />
      <Navigation />
      <main>
        <Hero />
        <OurSpaceSection />
        <TherapistsSection />
      </main>
      <Footer />

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/80 backdrop-blur-md border-t border-purple-200 p-3">
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
