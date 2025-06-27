
import ServicePlanet from './ServicePlanet';
import { Brain, Users, Heart, Puzzle } from 'lucide-react';

const ServicesCloud = () => {
  const services = [
    {
      title: "Ατομική ψυχοθεραπεία",
      subtitle: "Προσωπικές συνεδρίες για ψυχική ισορροπία",
      icon: Brain,
      position: { left: "5%", top: "10%" },
      mobilePosition: { left: "10%", top: "5%" },
      size: "large" as const,
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Συμβουλευτική",
      subtitle: "Υποστήριξη και καθοδήγηση",
      icon: Puzzle,
      position: { right: "5%", top: "5%" },
      mobilePosition: { right: "10%", top: "35%" },
      size: "medium" as const,
      color: "from-teal-400 to-blue-500"
    },
    {
      title: "Online Συνεδρίες",
      subtitle: "Άνετες συνεδρίες μέσω διαδικτύου",
      icon: Users,
      position: { left: "10%", top: "55%" },
      mobilePosition: { left: "10%", top: "65%" },
      size: "medium" as const,
      color: "from-green-400 to-teal-500"
    },
    {
      title: "Ομαδική Θεραπεία",
      subtitle: "Θεραπευτικές ομάδες",
      icon: Heart,
      position: { right: "10%", top: "60%" },
      mobilePosition: { right: "10%", top: "95%" },
      size: "large" as const,
      color: "from-pink-400 to-purple-500"
    }
  ];

  return (
    <section className="relative z-10 py-10">
      <div className="container mx-auto px-4 relative">
        {/* Services container with better mobile spacing */}
        <div className="relative min-h-[500px] md:min-h-[600px] w-full">
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
