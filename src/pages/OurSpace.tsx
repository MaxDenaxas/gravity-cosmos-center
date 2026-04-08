import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
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
  { src: space7, label: 'Αίθουσα Εργοθεραπείας', alt: 'Αίθουσα εργοθεραπείας στο Κέντρο Gravity' },
  { src: space6, label: 'Χώρος Παιχνιδιού', alt: 'Χώρος παιχνιδιού στο Κέντρο Gravity' },
  { src: space1, label: 'Συμβολικό Παιχνίδι', alt: 'Γωνιά συμβολικού παιχνιδιού στο Κέντρο Gravity' },
  { src: space8, label: 'Αίθουσα Αναμονής', alt: 'Αίθουσα αναμονής γονέων στο Κέντρο Gravity' },
  { src: space5, label: 'Γραφείο Ψυχολόγου', alt: 'Γραφείο ψυχολόγου στο Κέντρο Gravity' },
  { src: space3, label: 'Αίθουσα Λογοθεραπείας', alt: 'Αίθουσα λογοθεραπείας στο Κέντρο Gravity Περιστέρι' },
  { src: space4, label: 'Εκπαιδευτικό Υλικό', alt: 'Εκπαιδευτικό υλικό ειδικής αγωγής στο Κέντρο Gravity' },
  { src: space2, label: 'Βιβλιοθήκη & Υλικά', alt: 'Βιβλιοθήκη και εκπαιδευτικά υλικά στο Κέντρο Gravity' },
];

const OurSpace = () => {
  const { ref, isVisible } = useScrollFadeIn();

  return (
    <div className="min-h-screen bg-[#F6F1FF] relative overflow-hidden">
      <TopBar />
      <Navigation />

      <main className="relative z-10 py-16">
        <div ref={ref} className={`container mx-auto px-4 fade-section ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Ο Χώρος μας
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Γνωρίστε το Κέντρο Ειδικών Θεραπειών Gravity
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto mb-12">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden border border-purple-200 bg-white/60 backdrop-blur-md hover:border-cta/40 transition-all duration-300"
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
                  <h3 className="text-foreground/80 text-sm font-medium">{item.label}</h3>
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
