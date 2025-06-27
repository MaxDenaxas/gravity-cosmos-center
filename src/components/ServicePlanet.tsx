
import { LucideIcon } from 'lucide-react';

interface ServicePlanetProps {
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  position: {
    left?: string;
    right?: string;
    top: string;
  };
  size: 'small' | 'medium' | 'large';
  color: string;
  delay: number;
}

const ServicePlanet = ({ title, subtitle, icon: Icon, position, size, color, delay }: ServicePlanetProps) => {
  const sizeClasses = {
    small: 'w-32 h-32 text-sm',
    medium: 'w-40 h-40 text-base',
    large: 'w-48 h-48 text-lg'
  };

  const iconSizes = {
    small: 20,
    medium: 24,
    large: 28
  };

  return (
    <div 
      className={`absolute ${sizeClasses[size]} animate-fade-in hover:scale-110 transition-all duration-500 cursor-pointer group`}
      style={{ 
        ...position,
        animationDelay: `${delay}s`,
        animation: `float 6s ease-in-out infinite ${delay}s, fade-in 1s ease-out ${delay}s`
      }}
    >
      <div className={`w-full h-full rounded-full bg-gradient-to-br ${color} shadow-2xl flex flex-col items-center justify-center text-white relative overflow-hidden group-hover:shadow-3xl transition-all duration-300`}>
        {/* Planet surface effect */}
        <div className="absolute inset-0 rounded-full bg-white/10 opacity-50"></div>
        <div className="absolute top-2 left-4 w-6 h-6 rounded-full bg-white/20"></div>
        <div className="absolute bottom-4 right-2 w-4 h-4 rounded-full bg-white/15"></div>
        <div className="absolute top-1/2 right-6 w-3 h-3 rounded-full bg-white/25"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center p-4">
          <Icon size={iconSizes[size]} className="mx-auto mb-2 group-hover:animate-pulse" />
          <h3 className={`font-bold leading-tight ${size === 'large' ? 'text-lg' : 'text-sm'}`}>
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs mt-1 opacity-90">{subtitle}</p>
          )}
        </div>
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
      </div>
    </div>
  );
};

// Add floating animation to global styles
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-10px) rotate(1deg); }
    66% { transform: translateY(5px) rotate(-1deg); }
  }
`;
document.head.appendChild(style);

export default ServicePlanet;
