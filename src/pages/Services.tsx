import { Brain, Users, Heart, Puzzle } from 'lucide-react';
import Navigation from '../components/Navigation';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import TargetAudienceSection from '../components/TargetAudienceSection';

const Services = () => {
  const services = [
    { title: "Ατομική ψυχοθεραπεία", description: "Προσωπικές συνεδρίες σχεδιασμένες για να σας βοηθήσουν να βρείτε ψυχική ισορροπία και να αντιμετωπίσετε δυσκολίες.", icon: Brain, color: "from-blue-400 to-purple-500" },
    { title: "Συμβουλευτική", description: "Υποστήριξη και καθοδήγηση σε θέματα προσωπικής ανάπτυξης και καθημερινότητας.", icon: Puzzle, color: "from-teal-400 to-blue-500" },
    { title: "Online Συνεδρίες", description: "Άνετες και ασφαλείς συνεδρίες μέσω διαδικτύου, από όπου κι αν βρίσκεστε.", icon: Users, color: "from-green-400 to-teal-500" },
    { title: "Ομαδική Θεραπεία", description: "Θεραπευτικές ομάδες που προσφέρουν στήριξη μέσα από την κοινότητα και την αλληλεπίδραση.", icon: Heart, color: "from-pink-400 to-purple-500" },
    { title: "Εργοθεραπεία", description: "Εξειδικευμένες θεραπευτικές παρεμβάσεις για την ανάπτυξη και βελτίωση των καθημερινών δεξιοτήτων.", icon: Brain, color: "from-orange-400 to-red-500" },
    { title: "Λογοθεραπεία", description: "Υποστήριξη για την ανάπτυξη της επικοινωνίας και των γλωσσικών δεξιοτήτων.", icon: Users, color: "from-cyan-400 to-blue-500" },
    { title: "Ειδική Αγωγή", description: "Εξατομικευμένα προγράμματα εκπαίδευσης και υποστήριξης για παιδιά με ειδικές μαθησιακές ανάγκες.", icon: Heart, color: "from-violet-400 to-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-[#F6F1FF] relative overflow-hidden">
      <TopBar />
      <Navigation />
      
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Οι Υπηρεσίες μας
            </h1>
            <p className="text-xl text-foreground/70">
              Ανακαλύψτε τον δικό σας κόσμο ισορροπίας
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group relative" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className={`bg-gradient-to-br ${service.color} backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 shadow-xl h-full`}>
                    <div className="relative z-10">
                      <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center shadow-lg">
                          <IconComponent className="text-white" size={32} />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
                      <p className="text-white/90 text-center leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <TargetAudienceSection />
      <Footer />
    </div>
  );
};

export default Services;
