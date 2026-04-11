import { useState } from 'react';
import BioModal from './BioModal';
import mariaPhoto from '../assets/maria-kirsanidou.png';

const TherapistsSection = () => {
  const [bioOpen, setBioOpen] = useState(false);

  return (
    <section className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Η Επιστημονική Υπεύθυνη
          </h2>
        </div>
        
        <div className="flex justify-center">
          <div className="group">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-cta/40 transition-all duration-300 max-w-md text-center">
              {/* Photo */}
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full border-2 border-cta/30 overflow-hidden shadow-lg shadow-cta/10">
                  <img
                    src={mariaPhoto}
                    alt="Μαρία Κιρσανίδου, Ψυχολόγος στο Περιστέρι"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-1">
                Μαρία Κιρσανίδου
              </h3>
              <p className="text-cta font-medium text-lg mb-5">
                Ψυχολόγος
              </p>

              {/* Short hook bio */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-5">
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Με 25+ χρόνια κλινικής εμπειρίας και περισσότερες από 10.000 συνεδρίες, παρέχω επιστημονικά τεκμηριωμένη υποστήριξη σε παιδιά, εφήβους, ενήλικες και γονείς.
                </p>
              </div>

              <button
                onClick={() => setBioOpen(true)}
                className="border-2 border-white/20 text-foreground font-semibold px-6 py-2.5 rounded-xl hover:bg-white/5 transition-all duration-300 text-sm"
              >
                Αναλυτικό Βιογραφικό
              </button>
            </div>
          </div>
        </div>
      </div>

      <BioModal open={bioOpen} onOpenChange={setBioOpen} />
    </section>
  );
};

export default TherapistsSection;
