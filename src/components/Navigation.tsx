
import { Link, useLocation } from 'react-router-dom';
import gravityLogo from '../assets/gravity-logo.jpg';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="relative z-10 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4">
            <img src={gravityLogo} alt="Gravity Logo" className="w-16 h-16 object-contain" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Gravity</h1>
              <p className="text-sm text-gray-600">Balance the mind. Empower the path.</p>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`font-semibold hover:text-purple-600 transition-colors ${
                isActive('/') ? 'text-orange-500' : 'text-gray-700'
              }`}
            >
              ΑΡΧΙΚΗ
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-purple-600 transition-colors ${
                isActive('/about') ? 'text-orange-500 font-semibold' : 'text-gray-700'
              }`}
            >
              ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ
            </Link>
            <Link 
              to="/services" 
              className={`hover:text-purple-600 transition-colors ${
                isActive('/services') ? 'text-orange-500 font-semibold' : 'text-gray-700'
              }`}
            >
              ΥΠΗΡΕΣΙΕΣ
            </Link>
            <Link 
              to="/location" 
              className={`hover:text-purple-600 transition-colors ${
                isActive('/location') ? 'text-orange-500 font-semibold' : 'text-gray-700'
              }`}
            >
              ΠΟΥ ΒΡΙΣΚΟΜΑΣΤΕ
            </Link>
            <Link 
              to="/contact" 
              className={`hover:text-purple-600 transition-colors ${
                isActive('/contact') ? 'text-orange-500 font-semibold' : 'text-gray-700'
              }`}
            >
              ΕΠΙΚΟΙΝΩΝΙΑ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
