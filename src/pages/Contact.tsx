
import { Star, Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import Navigation from '../components/Navigation';

const Contact = () => {
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

      {/* Header */}
      <header className="relative z-10 bg-indigo-600/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center text-white text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>6981219691</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@gravity.gr</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-200 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="https://www.facebook.com/groups/1291275655934673/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-200 transition-colors">
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Επικοινωνία
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Το πρώτο βήμα για να βρείτε την ισορροπία σας
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-8">
                Στοιχεία Επικοινωνίας
              </h2>
              
              <div className="space-y-6">
                <a href="tel:6981219691" className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Phone className="text-purple-300" size={24} />
                  <div>
                    <h3 className="text-white font-semibold">Τηλέφωνο</h3>
                    <p className="text-white/80">6981219691</p>
                  </div>
                </a>
                
                <a href="mailto:info@gravity.gr" className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Mail className="text-blue-300" size={24} />
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-white/80">info@gravity.gr</p>
                  </div>
                </a>
                
                <a href="https://maps.app.goo.gl/oteBKezSZz5gEuJk8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <MapPin className="text-green-300" size={24} />
                  <div>
                    <h3 className="text-white font-semibold">Διεύθυνση</h3>
                    <p className="text-white/80">Wonder Waves - Κέντρο Ειδικών Θεραπειών</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                  <Clock className="text-pink-300" size={24} />
                  <div>
                    <h3 className="text-white font-semibold">Ώρες Λειτουργίας</h3>
                    <p className="text-white/80">Δευτέρα - Παρασκευή: 9:00 - 20:00</p>
                    <p className="text-white/80">Σάββατο: 9:00 - 15:00</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-200 transition-colors">
                      <Instagram size={24} />
                    </a>
                    <a href="https://www.facebook.com/groups/1291275655934673/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition-colors">
                      <Facebook size={24} />
                    </a>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Κοινωνικά Δίκτυα</h3>
                    <p className="text-white/80">Ακολουθήστε μας στα social media</p>
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

export default Contact;
