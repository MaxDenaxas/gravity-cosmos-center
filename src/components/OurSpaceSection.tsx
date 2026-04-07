import { Link } from 'react-router-dom';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import space1 from '../assets/space-1.jpg';
import space2 from '../assets/space-2.jpg';
import space3 from '../assets/space-3.jpg';

const images = [
  { src: space1, alt: 'Χώρος θεραπείας παιδιών στο Κέντρο Gravity' },
  { src: space2, alt: 'Εκπαιδευτικό υλικό στο Κέντρο Gravity Περιστέρι' },
  { src: space3, alt: 'Αίθουσα λογοθεραπείας στο Κέντρο Gravity' },
];

const OurSpaceSection = () => {
  const { ref, isVisible } = useScrollFadeIn();

  return (
    <section className="relative z-10 py-16">
      <div ref={ref} className={`container mx-auto px-4 fade-section ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Ο Χώρος μας
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Ένα ζεστό &amp; ασφαλές περιβάλλον. Γνωρίστε τον χώρο του Κέντρου Gravity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
          {images.map((img, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 backdrop-blur-md hover:border-cta/40 transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/our-space"
            className="inline-block cta-glow bg-cta text-cta-foreground font-bold py-3 px-8 rounded-xl shadow-lg shadow-cta/30 hover:scale-105 transition-transform duration-300"
          >
            Δείτε τον Χώρο μας
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurSpaceSection;
