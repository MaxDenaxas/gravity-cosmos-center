import { CheckCircle2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

interface BioModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BioModal = ({ open, onOpenChange }: BioModalProps) => {
  const bioPoints = [
    "Έχω πραγματοποιήσει πάνω από 10.000 συνεδρίες, ενώ τα τελευταία 10 χρόνια συνεργάζομαι σε διεπιστημονική ομάδα παιδοψυχιάτρου (ψυχοδιαγνωστικές αξιολογήσεις & θεραπείες).",
    "Διαθέτω εκτεταμένη εμπειρία στη χορήγηση ψυχομετρικών εργαλείων (>500 αξιολογήσεις WISC σε παιδιά 6–17 ετών).",
    "Η πορεία μου περιλαμβάνει: Σχολικές μονάδες, Κέντρα Ημέρας, Κέντρα Ειδικών Θεραπειών, ΣΥΔ ενηλίκων με νοητική υστέρηση.",
    "Παρακολουθώ συστηματικά επιμορφωτικά προγράμματα για συνεχή επιστημονική κατάρτιση.",
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#2D1A4A]/95 backdrop-blur-xl border border-white/15 rounded-2xl max-w-lg w-[90vw] p-0 gap-0">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="text-2xl font-bold text-foreground text-center">
            Μαρία Κιρσανίδου — Βιογραφικό
          </DialogTitle>
        </DialogHeader>
        <div className="p-6 pt-4 space-y-4">
          {bioPoints.map((point, i) => (
            <div key={i} className="flex gap-3 items-start">
              <CheckCircle2 className="text-cta shrink-0 mt-0.5" size={18} />
              <p className="text-foreground/80 text-sm leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BioModal;
