
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
  mobilePosition?: {
    left?: string;
    right?: string;
    top: string;
  };
  size: 'small' | 'medium' | 'large';
  color: string;
  delay: number;
}

const ServicePlanet = ({ title, subtitle, icon: Icon, position, mobilePosition, size, color, delay }: ServicePlanetProps) => {
  const sizeClasses = {
    small: 'w-32 h-32 md:w-36 md:h-36 text-sm',
    medium: 'w-36 h-36 md:w-44 md:h-44 text-base',
    large: 'w-40 h-40 md:w-52 md:h-52 text-lg'
  };

  const iconSizes = {
    small: 20,
    medium: 24,
    large: 28
  };

  const desktopIconSizes = {
    small: 24,
    medium: 28,
    large: 32
  };

  return (
    <>
      {/* Desktop version */}
      <div 
        className={`hidden md:block absolute ${sizeClasses[size]} animate-fade-in hover:scale-110 transition-all duration-500 cursor-pointer group z-20`}
        style={{ 
          ...position,
          animationDelay: `${delay}s`,
          animation: `float 6s ease-in-out infinite ${delay}s, fade-in 1s ease-out ${delay}s`
        }}
      >
        <div className={`w-full h-full rounded-full bg-gradient-to-br ${color} shadow-2xl flex flex-col items-center justify-center text-white relative overflow-hidden group-hover:shadow-3xl transition-all duration-300 border-2 border-white/20`}>
          {/* Enhanced planet surface effect */}
          <div className="absolute inset-0 rounded-full bg-white/15 opacity-60"></div>
          <div className="absolute top-3 left-6 w-8 h-8 rounded-full bg-white/25"></div>
          <div className="absolute bottom-6 right-3 w-5 h-5 rounded-full bg-white/20"></div>
          <div className="absolute top-1/2 right-8 w-4 h-4 rounded-full bg-white/30"></div>
          <div className="absolute bottom-1/3 left-4 w-3 h-3 rounded-full bg-white/25"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center p-6">
            <Icon size={desktopIconSizes[size]} className="mx-auto mb-3 group-hover:animate-pulse drop-shadow-lg" />
            <h3 className={`font-bold leading-tight ${size === 'large' ? 'text-xl' : 'text-base'} drop-shadow-md`}>
              {title}
            </h3>
            {subtitle && (
              <p className="text-sm mt-2 opacity-95 drop-shadow-sm">{subtitle}</p>
            )}
          </div>
          
          {/* Enhanced hover glow effect */}
          <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/15 transition-all duration-300"></div>
          
          {/* Outer glow ring */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
        </div>
      </div>

      {/* Mobile version */}
      <div 
        className={`block md:hidden absolute ${sizeClasses[size]} animate-fade-in hover:scale-110 transition-all duration-500 cursor-pointer group z-20`}
        style={{ 
          ...(mobilePosition || position),
          animationDelay: `${delay}s`,
          animation: `float 6s ease-in-out infinite ${delay}s, fade-in 1s ease-out ${delay}s`
        }}
      >
        <div className={`w-full h-full rounded-full bg-gradient-to-br ${color} shadow-2xl flex flex-col items-center justify-center text-white relative overflow-hidden group-hover:shadow-3xl transition-all duration-300 border-2 border-white/20`}>
          {/* Enhanced planet surface effect */}
          <div className="absolute inset-0 rounded-full bg-white/15 opacity-60"></div>
          <div className="absolute top-3 left-6 w-6 h-6 rounded-full bg-white/25"></div>
          <div className="absolute bottom-4 right-3 w-4 h-4 rounded-full bg-white/20"></div>
          <div className="absolute top-1/2 right-6 w-3 h-3 rounded-full bg-white/30"></div>
          <div className="absolute bottom-1/3 left-3 w-2 h-2 rounded-full bg-white/25"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center p-4">
            <Icon size={iconSizes[size]} className="mx-auto mb-2 group-hover:animate-pulse drop-shadow-lg" />
            <h3 className={`font-bold leading-tight ${size === 'large' ? 'text-base' : 'text-sm'} drop-shadow-md`}>
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs mt-1 opacity-95 drop-shadow-sm">{subtitle}</p>
            )}
          </div>
          
          {/* Enhanced hover glow effect */}
          <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/15 transition-all duration-300"></div>
          
          {/* Outer glow ring */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
        </div>
      </div>
    </>
  );
};

// Enhanced floating animation
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-12px) rotate(1deg); }
    66% { transform: translateY(6px) rotate(-1deg); }
  }
  
  @keyframes fade-in {
    0% { opacity: 0; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1); }
  }
`;
document.head.appendChild(style);

export default ServicePlanet;
