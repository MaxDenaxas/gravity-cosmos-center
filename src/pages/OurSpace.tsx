import { Link } from 'react-router-dom';
import { Star, ArrowLeft } from 'lucide-react';
import Navigation from '../components/Navigation';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

import space1 from '../assets/space-1.jpg';
import space2 from '../assets/space-2.jpg';
import space3 from '../assets/space-3.jpg';
import space4 from '../assets/space-4.jpg';
import space5 from '../assets/space-5.jpg';
import space6 from '../assets/space-6.jpg';
import space7 from '../assets/space-7.jpg';
import space8 from '../assets/space-8.jpg';

const galleryItems = [
  { src: space7, label: 'Αίθουσα Θεραπείας', alt: 'Κύρια αίθουσα θεραπείας στο Κέντρο Gravity' },
  { src: space6, label: 'Παιδικός Χώρος', alt: 'Παιδικός χώρος δραστηριοτήτων στο Κέντρο Gravity' },
  { src: space1, label: 'Γωνιά Παρέμβασης Παιδιών', alt: 'Γωνιά παιδικής παρέμβασης με Playmobil στο Κέντρο Gravity' },
  { src: space8, label: 'Αίθουσα Αναμονής', alt: 'Αίθουσα αναμονής γονέων στο Κέντρο Gravity' },
  { src: space5, label: 'Γραφείο Αξιολογήσεων', alt: 'Γραφείο ψυχολογικών αξιολογήσεων στο Κέντρο Gravity' },
  { src: space3, label: 'Αίθουσα Λογοθεραπείας', alt: 'Αίθουσα λογοθεραπείας στο Κέντρο Gravity Περιστέρι' },
  { src: space4, label: 'Εκπαιδευτικό Υλικό', alt: 'Εκπαιδευτικό υλικό ειδικής αγωγής στο Κέντρο Gravity' },
  { src: space2, label: 'Βιβλιοθήκη & Υλικά', alt: 'Βιβλιοθήκη και εκπαιδευτικά υλικά στο Κέντρο Gravity' },
];

const OurSpace = () => {
  const { ref, isVisible } = useScrollFadeIn();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-white opacity-15 animate-pulse"
            size={Math.random() * 6 + 3}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          />
        ))}
      </div>

      <TopBar />
      <Navigation />

      <main className="relative z-10 py-16">
        <div ref={ref} className={`container mx-auto px-4 fade-section ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Ο Χώρος μας
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Γνωρίστε το Κέντρο Ειδικών Θεραπειών Gravity
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto mb-12">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden border border-white/15 bg-white/5 backdrop-blur-md hover:border-cta/40 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="text-white/90 text-sm font-medium">{item.label}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-cta hover:text-cta/80 font-medium transition-colors"
            >
              <ArrowLeft size={18} />
              Επιστροφή στην Αρχική
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OurSpace;
