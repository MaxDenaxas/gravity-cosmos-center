import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

const TopBar = () => {
  return (
    <header className="relative z-10 bg-primary/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center text-foreground/60 text-sm">
          <div className="flex items-center gap-5">
            <a href="tel:+306981219691" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone size={14} />
              <span className="hidden sm:inline">6981219691</span>
            </a>
            <a href="mailto:gravity.center25@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail size={14} />
              <span className="hidden sm:inline">gravity.center25@gmail.com</span>
            </a>
          </div>
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
  );
};

export default TopBar;
