import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Fingerprint, MapPin } from 'lucide-react';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import ContactModal from './ContactModal';

const Hero = () => {
  const { ref, isVisible } = useScrollFadeIn(0.1);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-24 text-center">
      <div ref={ref} className={`container mx-auto px-4 fade-section ${isVisible ? 'visible' : ''}`}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
            Gravity
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-foreground/80 mb-6">
            Balance the mind. Empower the path.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-foreground/60 leading-relaxed max-w-3xl mx-auto mb-10 px-4">
            Το Gravity είναι ένας σύγχρονος χώρος υποστήριξης αφιερωμένος στο παιδί και στην οικογένεια. Δημιουργήθηκε με στόχο να προσφέρει ένα ασφαλές, σταθερό και υποστηρικτικό περιβάλλον, όπου κάθε μέλος της οικογένειας μπορεί να νιώσει αποδοχή και φροντίδα.
          </p>

          <div id="hero-cta-area" className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => setModalOpen(true)}
              className="cta-glow bg-cta text-cta-foreground font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-cta/30 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Κλείστε Ραντεβού
            </button>
            <Link
              to="/services"
              className="border-2 border-white/20 text-foreground font-semibold text-lg px-8 py-4 rounded-xl hover:bg-white/5 transition-all duration-300 w-full sm:w-auto"
            >
              Δείτε τις Υπηρεσίες
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 text-foreground/50 text-sm">
            <div className="flex items-center gap-2">
              <Users size={18} className="text-cta" />
              <span>Διεπιστημονική Ομάδα</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-foreground/20" />
            <div className="flex items-center gap-2">
              <Fingerprint size={18} className="text-cta" />
              <span>Εξατομικευμένη Προσέγγιση</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-foreground/20" />
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-cta" />
              <span>Περιστέρι, Αττική</span>
            </div>
          </div>
        </div>
      </div>
      <ContactModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
};

export default Hero;
