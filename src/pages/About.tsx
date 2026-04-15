import { Orbit, Atom } from 'lucide-react';
import Navigation from '../components/Navigation';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4B2E83] via-[#5C3D96] to-[#6E4FAA] relative overflow-hidden">
      <TopBar />
      <Navigation />

      <main className="relative z-10 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Η Φιλοσοφία μας
            </h1>
            <div className="flex justify-center items-center gap-4 mb-8">
              <Orbit className="text-primary/50 animate-spin" size={32} />
              <Atom className="text-cta/60 animate-pulse" size={28} />
              <Orbit className="text-primary/50 animate-spin" size={32} />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/15">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Ποια η ιδέα πίσω από το Gravity
            </h2>
            
            <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
              <p>Όλα στο σύμπαν έχουν μια βαρύτητα.</p>
              <p>Κάθε πλανήτης, κάθε αστέρι, ακόμα και το πιο μικρό κομμάτι ύλης έχει το δικό του πεδίο έλξης — τη δική του «βαρύτητα». Το ίδιο και ο άνθρωπος.</p>
              <p>Ό,τι αισθάνεται, ό,τι σκέφτεται, ό,τι κουβαλά μέσα του, έχει τη δική του προσωπική βαρύτητα.</p>
              <p>Κάθε παιδί είναι ένας μικρός κόσμος, γεμάτος από φόβους, όνειρα και ανησυχίες. Μερικές φορές όμως, αυτός ο κόσμος χάνει την ισορροπία του. Μπορεί να νιώθει «βαρύς», να παρασύρεται από σκέψεις και αγωνίες ή να αναζητά τη θέση του μέσα στον κόσμο.</p>
              <p className="text-cta font-semibold">Το Gravity δημιουργήθηκε για να βοηθήσει τα παιδιά να βρουν το δικό τους κέντρο.</p>
              <p>Να καταλάβουν ότι δεν είναι μόνα, και ότι η δύναμη έλξης τους — η μοναδική προσωπικότητά τους — έχει μεγάλη αξία.</p>
              <p>Μέσα από καινοτόμες συνεδρίες που συνδυάζουν την ψυχολογία με βιωματική μάθηση και δημιουργικές μεθόδους — όπως μαθηματικά με ζυγαριές, παραστατικές ιστορίες και γρίφους — τα παιδιά ανακαλύπτουν σιγά-σιγά τη δική τους «τροχιά».</p>
              <p className="text-cta font-semibold text-xl">Όπως οι πλανήτες βρίσκουν ισορροπία γύρω από τον ήλιο, έτσι και κάθε παιδί στο Gravity βρίσκει τη δική του σταθερότητα, την αυτοπεποίθηση και τον προσωπικό του ρυθμό.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
