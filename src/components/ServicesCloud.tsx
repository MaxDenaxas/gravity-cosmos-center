
import ServicePlanet from './ServicePlanet';
import { Brain, Users, Heart, BookOpen, Lightbulb, Puzzle } from 'lucide-react';

const ServicesCloud = () => {
  const services = [
    {
      title: "Λογοθεραπεία",
      subtitle: "(ελληνικά - αγγλικά)",
      icon: Brain,
      position: { left: "10%", top: "20%" },
      size: "large",
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Διαγνωστικά εργαλεία",
      icon: Puzzle,
      position: { right: "15%", top: "15%" },
      size: "medium",
      color: "from-teal-400 to-blue-500"
    },
    {
      title: "Εργοθεραπεία",
      icon: Users,
      position: { left: "5%", top: "60%" },
      size: "medium",
      color: "from-green-400 to-teal-500"
    },
    {
      title: "Παιδοψυχιατρική υποστήριξη",
      icon: Heart,
      position: { left: "45%", top: "70%" },
      size: "large",
      color: "from-pink-400 to-purple-500"
    },
    {
      title: "Μαθησιακές δυσκολίες",
      icon: BookOpen,
      position: { right: "10%", top: "55%" },
      size: "medium",
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Πρώιμη παρέμβαση",
      icon: Lightbulb,
      position: { left: "35%", top: "45%" },
      size: "small",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Συμβουλευτική γονέων",
      icon: Users,
      position: { right: "35%", top: "80%" },
      size: "small",
      color: "from-indigo-400 to-purple-500"
    }
  ];

  return (
    <section className="relative z-10 py-20 min-h-screen">
      <div className="container mx-auto px-4 relative">
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
