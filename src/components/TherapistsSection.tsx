
import { User, Star } from 'lucide-react';

const TherapistsSection = () => {
  return (
    <section className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Οι Θεραπευτές μας
          </h2>
          <p className="text-xl text-white/80">
            Εμπειρογνώμονες στην ψυχική υγεία
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="relative group">
            <div className="bg-gradient-to-br from-purple-400/20 to-indigo-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 shadow-2xl max-w-md">
              {/* Cosmic decoration */}
              <div className="absolute top-4 right-4">
                <Star className="text-yellow-300 opacity-70" size={20} />
              </div>
              <div className="absolute bottom-4 left-4">
                <Star className="text-blue-300 opacity-50" size={16} />
              </div>
              
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <User className="text-white" size={40} />
                </div>
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Μαρία Κιρσανίδου
                </h3>
                <p className="text-lg text-purple-200 mb-4">
                  Ψυχολόγος
                </p>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TherapistsSection;
