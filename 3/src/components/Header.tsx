import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">QA</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">QA Path</h1>
              <p className="text-xs text-gray-500">Powered by Alternative Path</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Products
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Pricing
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact Us
            </button>
            <a
              href="https://qa-path.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Sign In
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">
              Products
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">
              Services
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">
              Pricing
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">
              Contact Us
            </button>
            <a
              href="https://qa-path.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
            >
              Sign In
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
