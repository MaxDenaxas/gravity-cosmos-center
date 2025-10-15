
import ServicePlanet from './ServicePlanet';
import { Brain, Users, Heart, Puzzle, Hand, MessageCircle, GraduationCap } from 'lucide-react';

const ServicesCloud = () => {
  const services = [
    {
      title: "Ατομική ψυχοθεραπεία",
      subtitle: "Προσωπικές συνεδρίες για ψυχική ισορροπία",
      icon: Brain,
      position: { left: "5%", top: "5%" },
      mobilePosition: { left: "5%", top: "2%" },
      size: "large" as const,
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Συμβουλευτική",
      subtitle: "Υποστήριξη και καθοδήγηση",
      icon: Puzzle,
      position: { right: "5%", top: "3%" },
      mobilePosition: { right: "5%", top: "18%" },
      size: "medium" as const,
      color: "from-teal-400 to-blue-500"
    },
    {
      title: "Online Συνεδρίες",
      subtitle: "Άνετες συνεδρίες μέσω διαδικτύου",
      icon: Users,
      position: { left: "8%", top: "38%" },
      mobilePosition: { left: "5%", top: "34%" },
      size: "medium" as const,
      color: "from-green-400 to-teal-500"
    },
    {
      title: "Ομαδική Θεραπεία",
      subtitle: "Θεραπευτικές ομάδες",
      icon: Heart,
      position: { right: "8%", top: "36%" },
      mobilePosition: { right: "5%", top: "50%" },
      size: "large" as const,
      color: "from-pink-400 to-purple-500"
    },
    {
      title: "Εργοθεραπεία",
      subtitle: "Θεραπευτικές παρεμβάσεις για καθημερινές δεξιότητες",
      icon: Hand,
      position: { left: "15%", top: "70%" },
      mobilePosition: { left: "5%", top: "66%" },
      size: "medium" as const,
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Λογοθεραπεία",
      subtitle: "Ανάπτυξη επικοινωνίας και γλωσσικών δεξιοτήτων",
      icon: MessageCircle,
      position: { right: "15%", top: "68%" },
      mobilePosition: { right: "5%", top: "82%" },
      size: "medium" as const,
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Ειδική Αγωγή",
      subtitle: "Προγράμματα για παιδιά με ειδικές ανάγκες",
      icon: GraduationCap,
      position: { left: "50%", top: "85%", transform: "translateX(-50%)" },
      mobilePosition: { left: "50%", top: "98%", transform: "translateX(-50%)" },
      size: "large" as const,
      color: "from-violet-400 to-purple-500"
    }
  ];

  return (
    <section className="relative z-10 py-10">
      <div className="container mx-auto px-4 relative">
        {/* Services container with better mobile spacing */}
        <div className="relative min-h-[800px] md:min-h-[900px] w-full">
          {services.map((service, index) => (
            <ServicePlanet
              key={index}
              title={service.title}
              subtitle={service.subtitle}
              icon={service.icon}
              position={service.position}
              mobilePosition={service.mobilePosition}
              size={service.size}
              color={service.color}
              delay={index * 0.3}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCloud;
