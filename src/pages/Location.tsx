import { MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

const Location = () => {
  return (
    <div className="min-h-screen bg-[#F6F1FF] relative overflow-hidden">
      <TopBar />
      <Navigation />

      <main className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Που Βρισκόμαστε
            </h1>
            <div className="flex justify-center items-center gap-2 mb-8">
              <MapPin className="text-primary" size={32} />
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-foreground space-y-6">
                  <h2 className="text-3xl font-bold text-primary">
                    Βρείτε μας εύκολα
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-primary mt-1" size={20} />
                      <div>
                        <h3 className="font-semibold text-lg">Διεύθυνση</h3>
                        <p className="text-foreground/70">Σαπφούς 2, Περιστέρι 121 37</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-primary/30 rounded-full mt-1"></div>
                      <div>
                        <h3 className="font-semibold text-lg">Ώρες Λειτουργίας</h3>
                        <p className="text-foreground/70">Δευτέρα - Παρασκευή: 9:00 - 20:00</p>
                        <p className="text-foreground/70">Σάββατο: 9:00 - 15:00</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-cta/30 rounded-full mt-1"></div>
                      <div>
                        <h3 className="font-semibold text-lg">Επικοινωνία</h3>
                        <p className="text-foreground/70">Τηλ: <a href="tel:+306981219691" className="hover:text-foreground transition-colors">6981219691</a></p>
                        <p className="text-foreground/70">Email: <a href="mailto:gravity.center25@gmail.com" className="hover:text-foreground transition-colors">gravity.center25@gmail.com</a></p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d69755.64156794568!2d23.669682941734706!3d38.03020273303993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ddef92aeaaa92f%3A0x9ab4d46e4308c3a4!2zzprOlc6dzqTOoc6fIM6VzpnOlM6ZzprOqc6dIM6YzpXOoc6RzqDOlc6ZzqnOnSBHUkFWSVRZ!5e0!3m2!1sel!2sgr!4v1774894543936!5m2!1sel!2sgr"
                      width="100%" 
                      height="450" 
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
      <Footer />
    </div>
  );
};

export default Location;
