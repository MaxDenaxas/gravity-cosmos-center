import { Phone, Mail, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#2D1A4A]/95 backdrop-blur-xl border border-white/15 rounded-2xl max-w-md w-[90vw] p-0 gap-0">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 text-foreground/40 hover:text-foreground transition-colors z-10"
        >
          <X size={22} />
        </button>
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="text-2xl font-bold text-foreground text-center">
            Επικοινωνήστε μαζί μας
          </DialogTitle>
        </DialogHeader>
        <div className="p-6 pt-4 flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+306981219691"
            className="flex-1 flex items-center justify-center gap-3 cta-glow bg-cta text-cta-foreground font-bold text-lg px-6 py-4 rounded-xl shadow-lg shadow-cta/30 hover:scale-105 transition-all duration-300"
          >
            <Phone size={22} />
            Καλέστε μας
          </a>
          <a
            href="mailto:gravity.center25@gmail.com"
            className="flex-1 flex items-center justify-center gap-3 border-2 border-white/20 text-foreground font-bold text-lg px-6 py-4 rounded-xl hover:bg-white/5 transition-all duration-300"
          >
            <Mail size={22} />
            Στείλτε Email
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
