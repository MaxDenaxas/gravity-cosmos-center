
import { Phone } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="relative z-10 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full flex items-center justify-center">
              <div className="text-white font-bold text-xl">G</div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Gravity</h1>
              <p className="text-sm text-gray-600">Balance the mind. Empower the path.</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">ΑΡΧΙΚΗ</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">ΠΡΟΓΡΑΜΜΑΤΑ</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">ΕΠΙΚΟΙΝΩΝΙΑ</a>
            <div className="flex items-center gap-2 text-gray-700">
              <Phone size={16} />
              <span className="font-semibold">213 0909 508</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
