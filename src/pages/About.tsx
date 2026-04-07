import { Star, Orbit, Atom } from 'lucide-react';
import Navigation from '../components/Navigation';
import TopBar from '../components/TopBar';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 relative overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-white opacity-20 animate-pulse"
            size={Math.random() * 8 + 4}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`
            }}
          />
        ))}
      </div>

      <TopBar />
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Η Φιλοσοφία μας
            </h1>
            <div className="flex justify-center items-center gap-4 mb-8">
              <Orbit className="text-purple-300 animate-spin" size={32} />
              <Atom className="text-blue-300 animate-pulse" size={28} />
              <Orbit className="text-pink-300 animate-spin" size={32} />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Ποια η ιδέα πίσω από το Gravity
            </h2>
            
            <div className="space-y-6 text-white/90 text-lg leading-relaxed">
              <p>Όλα στο σύμπαν έχουν μια βαρύτητα.</p>
              <p>Κάθε πλανήτης, κάθε αστέρι, ακόμα και το πιο μικρό κομμάτι ύλης έχει το δικό του πεδίο έλξης — τη δική του «βαρύτητα». Το ίδιο και ο άνθρωπος.</p>
              <p>Ό,τι αισθάνεται, ό,τι σκέφτεται, ό,τι κουβαλά μέσα του, έχει τη δική του προσωπική βαρύτητα.</p>
              <p>Κάθε παιδί είναι ένας μικρός κόσμος, γεμάτος από φόβους, όνειρα και ανησυχίες. Μερικές φορές όμως, αυτός ο κόσμος χάνει την ισορροπία του. Μπορεί να νιώθει «βαρύς», να παρασύρεται από σκέψεις και αγωνίες ή να αναζητά τη θέση του μέσα στον κόσμο.</p>
              <p className="text-purple-200 font-semibold">Το Gravity δημιουργήθηκε για να βοηθήσει τα παιδιά να βρουν το δικό τους κέντρο.</p>
              <p>Να καταλάβουν ότι δεν είναι μόνα, και ότι η δύναμη έλξης τους — η μοναδική προσωπικότητά τους — έχει μεγάλη αξία.</p>
              <p>Μέσα από καινοτόμες συνεδρίες που συνδυάζουν την ψυχολογία με βιωματική μάθηση και δημιουργικές μεθόδους — όπως μαθηματικά με ζυγαριές, παραστατικές ιστορίες και γρίφους — τα παιδιά ανακαλύπτουν σιγά-σιγά τη δική τους «τροχιά».</p>
              <p className="text-blue-200 font-semibold text-xl">Όπως οι πλανήτες βρίσκουν ισορροπία γύρω από τον ήλιο, έτσι και κάθε παιδί στο Gravity βρίσκει τη δική του σταθερότητα, την αυτοπεποίθηση και τον προσωπικό του ρυθμό.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
