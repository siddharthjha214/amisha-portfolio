import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // React Router hooks for navigation and checking current path
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated to use paths instead of state values
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    navigate(path); // Navigate using react-router-dom
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <>
      {/* Floating Toolbar Container */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-[90%] md:w-auto max-w-3xl">
        <nav 
          className={`
            relative mx-auto flex items-center justify-between px-2 md:px-3 py-2 rounded-full 
            transition-all duration-500 border
            ${isScrolled 
              ? 'bg-lux-cream/80 dark:bg-lux-black/80 backdrop-blur-xl shadow-2xl shadow-lux-gold/10 border-lux-gold/20' 
              : 'bg-white/40 dark:bg-black/40 backdrop-blur-md border-white/20 dark:border-white/10 shadow-lg'}
          `}
        >
          
          {/* Logo / Monogram */}
          <button 
            type="button"
            className="flex-shrink-0 relative group p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
            onClick={() => handleNavClick('/')}
            aria-label="Home"
          >
            <div className="w-8 h-8 flex items-center justify-center">
               <span className="font-serif font-bold text-xl text-lux-black dark:text-white group-hover:text-lux-gold transition-colors">A.</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 mx-2">
            {navLinks.map((link) => (
              <button
                key={link.path}
                type="button"
                onClick={() => handleNavClick(link.path)}
                className={`
                  relative px-6 py-2.5 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer
                  ${location.pathname === link.path 
                    ? 'text-lux-black dark:text-white bg-white dark:bg-white/10 shadow-sm scale-105' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-lux-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'}
                `}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 pl-2 md:pl-0">
            <button 
              type="button"
              onClick={toggleTheme}
              className="p-3 rounded-full text-gray-600 dark:text-gray-300 hover:text-lux-gold hover:bg-black/5 dark:hover:bg-white/10 transition-all active:scale-95 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Menu Trigger */}
            <button 
              type="button"
              className="md:hidden p-3 text-lux-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </nav>
      </div>

      {/* Mobile Menu Overlay - Full Screen */}
      <div className={`fixed inset-0 bg-lux-cream/95 dark:bg-lux-black/95 backdrop-blur-xl z-[90] flex flex-col items-center justify-center space-y-8 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {navLinks.map((link, index) => (
          <button 
            key={link.path} 
            type="button"
            onClick={() => handleNavClick(link.path)}
            className={`text-4xl font-serif italic transition-all duration-500 transform cursor-pointer ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } ${location.pathname === link.path ? 'text-lux-gold' : 'text-lux-black dark:text-white'}`}
            style={{ transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms' }}
          >
            {link.label}
          </button>
        ))}
        
        {/* Decorative Divider for Mobile Menu */}
        <div className={`w-12 h-1 bg-lux-gold mt-8 rounded-full transition-all duration-700 delay-300 ${isMobileMenuOpen ? 'w-12 opacity-100' : 'w-0 opacity-0'}`}></div>
      </div>
    </>
  );
};