import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Home, Users, Brain, Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const navItems = [
    {
      name: 'Home',
      path: '/',
      icon: <Home className="w-4 h-4" />
    },
    {
      name: 'Sobre Nosotros',
      path: '/sobreNosotros',
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'Respuesta AI',
      path: '/respuesta',
      icon: <Brain className="w-4 h-4" />
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-blue-500/20 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={() => handleNavigation('/')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="relative">
              <Shield className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <Terminal className="w-3 h-3 text-cyan-400 absolute -bottom-1 -right-1" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Kali Linux
              </span>
              <span className="text-xs text-gray-500 -mt-1">Penetration Testing</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.path)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-blue-600/20 transition-all duration-200 group relative"
              >
                <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
                  {item.icon}
                </span>
                <span className="font-medium">{item.name}</span>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </button>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors font-medium">
              Docs
            </button>
            <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg font-semibold shadow-lg shadow-blue-500/30 transition-all duration-200 transform hover:scale-105">
              Download
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(item.path)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-blue-600/20 transition-all duration-200 text-left"
                >
                  <span className="text-blue-400">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </button>
              ))}
              <div className="pt-4 border-t border-gray-800 mt-2 space-y-2">
                <button className="w-full px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors font-medium text-left">
                  Docs
                </button>
                <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg font-semibold shadow-lg shadow-blue-500/30 transition-all duration-200">
                  Download
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Subtle glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </nav>
  );
};

export default Navbar;
