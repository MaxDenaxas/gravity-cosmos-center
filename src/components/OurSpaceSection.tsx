import { Link } from 'react-router-dom';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import photo1 from '../assets/grafeio-psyxologou.jpg';
import photo2 from '../assets/aithousa-logotherapeias.jpg';
import photo3 from '../assets/aithousa-ergotherapeias.jpg';

const images = [
  { src: photo1, alt: 'Γραφείο Ψυχολόγου στο Κέντρο Gravity', label: 'Γραφείο Ψυχολόγου' },
  { src: photo2, alt: 'Αίθουσα Λογοθεραπείας στο Κέντρο Gravity', label: 'Αίθουσα Λογοθεραπείας' },
  { src: photo3, alt: 'Αίθουσα Εργοθεραπείας στο Κέντρο Gravity', label: 'Αίθουσα Εργοθεραπείας' },
];

const OurSpaceSection = () => {
  const { ref, isVisible } = useScrollFadeIn();

  return (
    <section className="relative z-10 py-16">
      <div ref={ref} className={`container mx-auto px-4 fade-section ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ο Χώρος μας
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Ένα ζεστό &amp; ασφαλές περιβάλλον. Γνωρίστε τον χώρο του Κέντρου Gravity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
          {images.map((img, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-purple-200 bg-white/60 backdrop-blur-md hover:border-cta/40 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="text-foreground/80 text-sm font-medium">{img.label}</h3>
              </div>
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
