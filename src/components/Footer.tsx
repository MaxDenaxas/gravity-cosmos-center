import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import gravityLogo from '../assets/gravity-logo-transparent.png';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & tagline */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={gravityLogo} alt="Gravity Logo" className="w-20 h-20 object-contain rounded-full" />
            <p className="text-white/60 text-sm text-center md:text-left">
              Balance the mind. Empower the path.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3 items-center md:items-start">
            <h4 className="text-white font-semibold mb-2">Επικοινωνία</h4>
            <a href="tel:+306981219691" className="flex items-center gap-2 text-cta hover:underline transition-colors">
              <Phone size={16} />
              <span>698 121 9691</span>
            </a>
            <a href="mailto:gravity.center25@gmail.com" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <Mail size={16} />
              <span>gravity.center25@gmail.com</span>
            </a>
            <a href="https://maps.app.goo.gl/oteBKezSZz5gEuJk8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <MapPin size={16} />
              <span>Περιστέρι, Αττική</span>
            </a>
          </div>

          {/* Social & CTA */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h4 className="text-white font-semibold mb-2">Ακολουθήστε μας</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/gravity_center25" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-cta transition-colors">
                <Instagram size={22} />
              </a>
              <a href="https://www.facebook.com/groups/1291275665934673/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-cta transition-colors">
                <Facebook size={22} />
              </a>
            </div>
            <a
              href="tel:+306981219691"
              className="mt-2 cta-glow bg-cta text-cta-foreground font-bold px-6 py-3 rounded-xl shadow-lg shadow-cta/20 hover:scale-105 transition-all duration-300 text-center"
            >
              Κλείστε Ραντεβού
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} Gravity — Κέντρο Ειδικών Θεραπειών
        </div>
      </div>
    </footer>
  );
};

export default Footer;
