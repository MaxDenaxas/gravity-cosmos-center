import { Camera } from 'lucide-react';

const TherapistsSection = () => {
  return (
    <section className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Η Επιστημονική Υπεύθυνη
          </h2>
        </div>
        
        <div className="flex justify-center">
          <div className="group">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/15 hover:border-cta/40 transition-all duration-300 max-w-md text-center">
              {/* Photo placeholder */}
              <div className="flex justify-center mb-6">
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-purple-900/60 to-indigo-900/60 border-2 border-white/20 flex items-center justify-center overflow-hidden">
                  <div className="flex flex-col items-center text-white/40">
                     <Camera size={28} aria-hidden="true" />
                    <span className="text-xs mt-1">Μαρία Κιρσανίδου, Ψυχολόγος στο Περιστέρι</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-1">
                Μαρία Κιρσανίδου
              </h3>
              <p className="text-cta font-medium text-lg mb-5">
                Ψυχολόγος
              </p>

              {/* Bio placeholder */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="text-white/70 text-sm leading-relaxed">
                  Η Μαρία Κιρσανίδου είναι πτυχιούχος Ψυχολογίας με εξειδίκευση στην παιδική και εφηβική ψυχοθεραπεία. Με πολυετή κλινική εμπειρία, εστιάζει στην ολιστική υποστήριξη του παιδιού και της οικογένειας, αξιοποιώντας σύγχρονες θεραπευτικές προσεγγίσεις.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TherapistsSection;
