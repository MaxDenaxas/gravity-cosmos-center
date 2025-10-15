
const Hero = () => {
  return (
    <section className="relative z-10 py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Καλώς ήρθατε στο κέντρο ψυχολογικών θεραπειών
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl py-8 px-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-purple-600">
              Gravity
            </h3>
            <p className="text-lg text-gray-700 mt-2">
              Balance the mind. Empower the path.
            </p>
            <p className="text-base text-gray-600 mt-4 leading-relaxed">
              Το Gravity είναι ένας σύγχρονος χώρος υποστήριξης αφιερωμένος στο παιδί και στην οικογένεια. Δημιουργήθηκε με στόχο να προσφέρει ένα ασφαλές, σταθερό και υποστηρικτικό περιβάλλον, όπου κάθε μέλος της οικογένειας μπορεί να νιώσει αποδοχή και φροντίδα.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
