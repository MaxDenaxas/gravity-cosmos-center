import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import Navigation from '../components/Navigation';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#F6F1FF] relative overflow-hidden">
      <TopBar />
      <Navigation />

      <main className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Επικοινωνία
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              Το πρώτο βήμα για να βρείτε την ισορροπία σας
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-200">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Στοιχεία Επικοινωνίας
              </h2>
              
              <div className="space-y-6">
                <a href="tel:+306981219691" className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                  <Phone className="text-primary" size={24} />
                  <div>
                    <h3 className="text-foreground font-semibold">Τηλέφωνο</h3>
                    <p className="text-foreground/70">6981219691</p>
                  </div>
                </a>
                
                <a href="mailto:gravity.center25@gmail.com" className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                  <Mail className="text-cta" size={24} />
                  <div>
                    <h3 className="text-foreground font-semibold">Email</h3>
                    <p className="text-foreground/70">gravity.center25@gmail.com</p>
                  </div>
                </a>
                
                <a href="https://maps.app.goo.gl/oteBKezSZz5gEuJk8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                  <MapPin className="text-green-600" size={24} />
                  <div>
                    <h3 className="text-foreground font-semibold">Διεύθυνση</h3>
                    <p className="text-foreground/70">ΚΕΝΤΡΟ ΕΙΔΙΚΩΝ ΘΕΡΑΠΕΙΩΝ GRAVITY</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                  <Clock className="text-primary" size={24} />
                  <div>
                    <h3 className="text-foreground font-semibold">Ώρες Λειτουργίας</h3>
                    <p className="text-foreground/70">Δευτέρα - Παρασκευή: 9:00 - 20:00</p>
                    <p className="text-foreground/70">Σάββατο: 9:00 - 15:00</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/gravity_center25" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 transition-colors">
                      <Instagram size={24} />
                    </a>
                    <a href="https://www.facebook.com/groups/1291275665934673/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">
                      <Facebook size={24} />
                    </a>
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold">Κοινωνικά Δίκτυα</h3>
                    <p className="text-foreground/70">Ακολουθήστε μας στα social media</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
