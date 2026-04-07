import { Star, Brain, Users, Heart, Puzzle } from 'lucide-react';
import Navigation from '../components/Navigation';
import TopBar from '../components/TopBar';
import TargetAudienceSection from '../components/TargetAudienceSection';

const Services = () => {
  const services = [
    {
      title: "Ατομική ψυχοθεραπεία",
      description: "Προσωπικές συνεδρίες σχεδιασμένες για να σας βοηθήσουν να βρείτε ψυχική ισορροπία και να αντιμετωπίσετε δυσκολίες.",
      icon: Brain,
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Συμβουλευτική",
      description: "Υποστήριξη και καθοδήγηση σε θέματα προσωπικής ανάπτυξης και καθημερινότητας.",
      icon: Puzzle,
      color: "from-teal-400 to-blue-500"
    },
    {
      title: "Online Συνεδρίες",
      description: "Άνετες και ασφαλείς συνεδρίες μέσω διαδικτύου, από όπου κι αν βρίσκεστε.",
      icon: Users,
      color: "from-green-400 to-teal-500"
    },
    {
      title: "Ομαδική Θεραπεία",
      description: "Θεραπευτικές ομάδες που προσφέρουν στήριξη μέσα από την κοινότητα και την αλληλεπίδραση.",
      icon: Heart,
      color: "from-pink-400 to-purple-500"
    },
    {
      title: "Εργοθεραπεία",
      description: "Εξειδικευμένες θεραπευτικές παρεμβάσεις για την ανάπτυξη και βελτίωση των καθημερινών δεξιοτήτων.",
      icon: Brain,
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Λογοθεραπεία",
      description: "Υποστήριξη για την ανάπτυξη της επικοινωνίας και των γλωσσικών δεξιοτήτων.",
      icon: Users,
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Ειδική Αγωγή",
      description: "Εξατομικευμένα προγράμματα εκπαίδευσης και υποστήριξης για παιδιά με ειδικές μαθησιακές ανάγκες.",
      icon: Heart,
      color: "from-violet-400 to-purple-500"
    }
  ];

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
      
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Οι Υπηρεσίες μας
            </h1>
            <p className="text-xl text-white/80">
              Ανακαλύψτε τον δικό σας κόσμο ισορροπίας
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`bg-gradient-to-br ${service.color} backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 shadow-2xl h-full`}>
                    <div className="absolute top-4 right-4"><Star className="text-white/30" size={16} /></div>
                    <div className="absolute bottom-4 left-4"><Star className="text-white/20" size={12} /></div>
                    <div className="absolute top-1/2 right-8"><Star className="text-white/25" size={10} /></div>
                    <div className="absolute inset-0 rounded-3xl bg-white/10 opacity-50"></div>
                    <div className="absolute top-6 left-8 w-6 h-6 rounded-full bg-white/20"></div>
                    <div className="absolute bottom-8 right-6 w-4 h-4 rounded-full bg-white/15"></div>
                    
                    <div className="relative z-10">
                      <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center shadow-lg">
                          <IconComponent className="text-white" size={32} />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
                      <p className="text-white/90 text-center leading-relaxed">{service.description}</p>
                    </div>
                    <div className="absolute inset-0 rounded-3xl bg-white/0 group-hover:bg-white/10 transition-all duration-300 pointer-events-none"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <TargetAudienceSection />
    </div>
  );
};

export default Services;
