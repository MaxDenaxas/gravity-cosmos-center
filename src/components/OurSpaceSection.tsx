import { ImageIcon } from 'lucide-react';

const OurSpaceSection = () => {
  return (
    <section className="relative z-10 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Ο Χώρος μας
          </h2>
          <p className="text-lg text-white/60">
            Ένα ασφαλές και φιλόξενο περιβάλλον
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="aspect-[4/3] bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-cta/30 transition-all duration-300"
            >
              <ImageIcon size={36} className="text-white/30" />
              <span className="text-white/30 text-sm">Φωτογραφία χώρου</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSpaceSection;
