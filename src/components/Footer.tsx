import { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import gravityLogo from '../assets/gravity-logo-transparent.png';
import ContactModal from './ContactModal';

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <footer className="relative z-10 border-t border-purple-200 bg-primary/5 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={gravityLogo} alt="Κέντρο Ειδικών Θεραπειών Gravity Περιστέρι" className="w-20 h-20 object-contain rounded-full" />
            <p className="text-foreground/50 text-sm text-center md:text-left">
              Balance the mind. Empower the path.
            </p>
          </div>

          <div className="flex flex-col gap-3 items-center md:items-start">
            <h4 className="text-foreground font-semibold mb-2">Επικοινωνία</h4>
            <a href="tel:+306981219691" className="flex items-center gap-2 text-cta hover:underline transition-colors">
              <Phone size={16} />
              <span>698 121 9691</span>
            </a>
            <a href="mailto:gravity.center25@gmail.com" className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors">
              <Mail size={16} />
              <span>gravity.center25@gmail.com</span>
            </a>
            <a href="https://maps.app.goo.gl/oteBKezSZz5gEuJk8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors">
              <MapPin size={16} />
              <span>Περιστέρι, Αττική</span>
            </a>
          </div>

          <div className="flex flex-col gap-4 items-center md:items-start">
            <h4 className="text-foreground font-semibold mb-2">Ακολουθήστε μας</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/gravity_center25" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-cta transition-colors">
                <Instagram size={22} />
              </a>
              <a href="https://www.facebook.com/groups/1291275665934673/" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-cta transition-colors">
                <Facebook size={22} />
              </a>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="mt-2 cta-glow bg-cta text-cta-foreground font-bold px-6 py-3 rounded-xl shadow-lg shadow-cta/20 hover:scale-105 transition-all duration-300 text-center"
            >
              Κλείστε Ραντεβού
            </button>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-purple-200 text-center text-foreground/40 text-sm">
          © {new Date().getFullYear()} Gravity — Κέντρο Ειδικών Θεραπειών
        </div>
      </div>
      <ContactModal open={modalOpen} onOpenChange={setModalOpen} />
    </footer>
  );
};

export default Footer;
