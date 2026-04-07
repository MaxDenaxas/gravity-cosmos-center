
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import gravityLogo from '../assets/gravity-logo.png';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'ΑΡΧΙΚΗ' },
    { path: '/about', label: 'Η ΦΙΛΟΣΟΦΙΑ ΜΑΣ' },
    { path: '/services', label: 'ΥΠΗΡΕΣΙΕΣ' },
    { path: '/our-space', label: 'Ο ΧΩΡΟΣ ΜΑΣ' },
    { path: '/location', label: 'ΠΟΥ ΒΡΙΣΚΟΜΑΣΤΕ' },
    { path: '/contact', label: 'ΕΠΙΚΟΙΝΩΝΙΑ' },
  ];

  return (
    <nav className="relative z-10 bg-white/95 backdrop-blur-sm shadow-lg" aria-label="Κύρια πλοήγηση">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4">
            <img src={gravityLogo} alt="Κέντρο Ειδικών Θεραπειών Gravity Περιστέρι" className="w-16 h-16 object-contain" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Gravity</h1>
              <p className="text-sm text-muted-foreground">Balance the mind. Empower the path.</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-primary transition-colors ${
                  isActive(link.path) ? 'text-secondary font-semibold' : 'text-foreground/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors">
                <Menu size={24} className="text-foreground" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-white">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg hover:text-primary transition-colors ${
                      isActive(link.path) ? 'text-secondary font-semibold' : 'text-foreground/80'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
