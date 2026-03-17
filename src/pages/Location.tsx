import { Star, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import TopBar from '../components/TopBar';

const Location = () => {
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
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Που Βρισκόμαστε
            </h1>
            <div className="flex justify-center items-center gap-2 mb-8">
              <MapPin className="text-purple-300" size={32} />
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-white space-y-6">
                  <h2 className="text-3xl font-bold text-purple-200">
                    Βρείτε μας εύκολα
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-purple-300 mt-1" size={20} />
                      <div>
                        <h3 className="font-semibold text-lg">Διεύθυνση</h3>
                        <p className="text-white/80">ΚΕΝΤΡΟ ΕΙΔΙΚΩΝ ΘΕΡΑΠΕΙΩΝ GRAVITY</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-purple-300 rounded-full mt-1"></div>
                      <div>
                        <h3 className="font-semibold text-lg">Ώρες Λειτουργίας</h3>
                        <p className="text-white/80">Δευτέρα - Παρασκευή: 9:00 - 20:00</p>
                        <p className="text-white/80">Σάββατο: 9:00 - 15:00</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-blue-300 rounded-full mt-1"></div>
                      <div>
                        <h3 className="font-semibold text-lg">Επικοινωνία</h3>
                        <p className="text-white/80">Τηλ: <a href="tel:+306981219691" className="hover:text-white transition-colors">6981219691</a></p>
                        <p className="text-white/80">Email: gravity.center25@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-white/20 p-4 rounded-xl">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50286.15587481944!2d23.653765549999997!3d38.024449799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1a329b559eea9%3A0x62036ac940f156b2!2sWonder%20Waves%20-%20%CE%9A%CE%AD%CE%BD%CF%84%CF%81%CE%BF%20%CE%95%CE%B9%CE%B4%CE%B9%CE%BA%CF%8E%CE%BD%20%CE%98%CE%B5%CF%81%CE%B1%CF%80%CE%B5%CE%B9%CF%8E%CE%BD!5e0!3m2!1sen!2snl!4v1234567890123!5m2!1sen!2snl"
                      width="100%" 
                      height="400" 
                      style={{ border: 0, borderRadius: '8px' }}
                      allowFullScreen
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Gravity Location"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Location;
