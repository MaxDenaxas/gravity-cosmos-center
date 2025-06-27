
import ServicePlanet from './ServicePlanet';
import { Brain, Users, Heart, BookOpen, Lightbulb, Puzzle } from 'lucide-react';

const ServicesCloud = () => {
  const services = [
    {
      title: "Ατομική ψυχοθεραπεία",
      subtitle: "Προσωπικές συνεδρίες για ψυχική ισορροπία",
      icon: Brain,
      position: { left: "8%", top: "15%" },
      size: "large" as const,
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Συμβουλευτική",
      subtitle: "Υποστήριξη και καθοδήγηση",
      icon: Puzzle,
      position: { right: "12%", top: "10%" },
      size: "medium" as const,
      color: "from-teal-400 to-blue-500"
    },
    {
      title: "Online Συνεδρίες",
      subtitle: "Άνετες συνεδρίες μέσω διαδικτύου",
      icon: Users,
      position: { left: "5%", top: "55%" },
      size: "medium" as const,
      color: "from-green-400 to-teal-500"
    },
    {
      title: "Ομαδική Θεραπεία",
      subtitle: "Θεραπευτικές ομάδες",
      icon: Heart,
      position: { right: "8%", top: "60%" },
      size: "large" as const,
      color: "from-pink-400 to-purple-500"
    }
  ];

  return (
    <section className="relative z-10 py-20 min-h-screen">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Οι Υπηρεσίες μας
          </h2>
          <p className="text-xl text-white/80">
            Ανακαλύψτε τον δικό σας κόσμο ισορροπίας
          </p>
        </div>
        
        {/* Enhanced visibility backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-indigo-900/10 to-transparent rounded-3xl"></div>
        
        {services.map((service, index) => (
          <ServicePlanet
            key={index}
            title={service.title}
            subtitle={service.subtitle}
            icon={service.icon}
            position={service.position}
            size={service.size}
            color={service.color}
            delay={index * 0.2}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesCloud;
