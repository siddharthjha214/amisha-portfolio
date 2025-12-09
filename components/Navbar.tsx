
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

type Page = 'home' | 'about' | 'contact';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage, isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Contact', value: 'contact' },
  ];

  const handleNavClick = (page: Page) => {
    setPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out px-6 md:px-12 ${
        isScrolled 
          ? 'py-4 bg-lux-cream/80 dark:bg-lux-black/80 backdrop-blur-md border-b border-gray-200/50 dark:border-white/5' 
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between relative">
        
        {/* Logo - Custom Minimalist Monogram */}
        <button 
          className="z-20 group flex items-center justify-center outline-none focus:outline-none"
          onClick={() => handleNavClick('home')}
          aria-label="Amisha Home"
        >
          <div className="relative w-10 h-10 md:w-12 md:h-12">
             <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-lux-black dark:text-white transition-colors duration-300">
                <path d="M50 20L32 85" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="transition-all duration-300 group-hover:stroke-gray-600 dark:group-hover:stroke-gray-300" />
                <path d="M50 20L68 85" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                <circle cx="50" cy="54" r="3.5" fill="#D4AF37" className="transition-transform duration-500 ease-out group-hover:scale-150 origin-center shadow-lg" />
             </svg>
          </div>
        </button>

        {/* Desktop Nav - Center */}
        <div className="hidden md:flex items-center space-x-12 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => handleNavClick(link.value)}
              className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 relative group ${
                currentPage === link.value 
                  ? 'text-lux-gold' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-lux-black dark:hover:text-white'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-lux-gold transition-all duration-300 ${currentPage === link.value ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}></span>
            </button>
          ))}
        </div>

        {/* Right Actions: Theme Toggle & Mobile Menu */}
        <div className="flex items-center space-x-6 z-20">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-lux-charcoal transition-colors text-gray-600 dark:text-lux-gold-light"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button 
            className="md:hidden p-2 text-gray-800 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-lux-cream dark:bg-lux-black z-10 flex flex-col items-center justify-center space-y-8 transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {navLinks.map((link) => (
          <button 
            key={link.value} 
            onClick={() => handleNavClick(link.value)}
            className={`text-4xl font-display italic transition-colors ${
              currentPage === link.value ? 'text-lux-gold' : 'text-lux-black dark:text-white'
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
};
