import { Link } from 'react-router-dom';
import { Users, Fingerprint, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative z-10 py-16 md:py-24 text-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Gravity
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-6">
            Balance the mind. Empower the path.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-10 px-4">
            Το Gravity είναι ένας σύγχρονος χώρος υποστήριξης αφιερωμένος στο παιδί και στην οικογένεια. Δημιουργήθηκε με στόχο να προσφέρει ένα ασφαλές, σταθερό και υποστηρικτικό περιβάλλον, όπου κάθε μέλος της οικογένειας μπορεί να νιώσει αποδοχή και φροντίδα.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:6981219691"
              className="bg-cta text-cta-foreground font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-cta/30 hover:shadow-cta/50 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Κλείστε Δωρεάν Αξιολόγηση
            </a>
            <Link
              to="/services"
              className="border-2 border-white/60 text-white font-semibold text-lg px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
            >
              Δείτε τις Υπηρεσίες
            </Link>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <Users size={18} className="text-cta" />
              <span>Διεπιστημονική Ομάδα</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2">
              <Fingerprint size={18} className="text-cta" />
              <span>Εξατομικευμένη Προσέγγιση</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-cta" />
              <span>Περιστέρι, Αττική</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
