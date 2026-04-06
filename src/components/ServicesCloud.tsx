import { Brain, Users, Heart, Puzzle, Hand, MessageCircle, GraduationCap } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

interface ServiceItem {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  color: string;
}

const services: ServiceItem[] = [
  { title: "Ατομική Ψυχοθεραπεία", subtitle: "Προσωπικές συνεδρίες για ψυχική ισορροπία", icon: Brain, color: "from-blue-400 to-purple-500" },
  { title: "Συμβουλευτική", subtitle: "Υποστήριξη και καθοδήγηση", icon: Puzzle, color: "from-teal-400 to-blue-500" },
  { title: "Online Συνεδρίες", subtitle: "Άνετες συνεδρίες μέσω διαδικτύου", icon: Users, color: "from-green-400 to-teal-500" },
  { title: "Ομαδική Θεραπεία", subtitle: "Θεραπευτικές ομάδες", icon: Heart, color: "from-pink-400 to-purple-500" },
  { title: "Εργοθεραπεία", subtitle: "Θεραπευτικές παρεμβάσεις για καθημερινές δεξιότητες", icon: Hand, color: "from-orange-400 to-red-500" },
  { title: "Λογοθεραπεία", subtitle: "Ανάπτυξη επικοινωνίας και γλωσσικών δεξιοτήτων", icon: MessageCircle, color: "from-cyan-400 to-blue-500" },
  { title: "Ειδική Αγωγή", subtitle: "Προγράμματα για παιδιά με ειδικές ανάγκες", icon: GraduationCap, color: "from-violet-400 to-purple-500" },
];

const ServicesCloud = () => {
  const { ref, isVisible } = useScrollFadeIn();

  return (
    <section className="relative z-10 py-16">
      <div ref={ref} className={`container mx-auto px-4 fade-section ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Οι Υπηρεσίες μας
          </h2>
          <p className="text-lg text-white/60">
            Ολοκληρωμένη υποστήριξη για κάθε ανάγκη
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-cta/30 hover:bg-white/10 hover:scale-[1.03] transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2" role="heading" aria-level={3}>{service.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{service.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesCloud;
