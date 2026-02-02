import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  toggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
<<<<<<< Updated upstream
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
=======
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
>>>>>>> Stashed changes
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (path: string) =>
    location.pathname === path;

  return (
<<<<<<< Updated upstream
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out px-6 md:px-12 ${
        isScrolled
          ? "py-4 bg-lux-cream/80 dark:bg-lux-black/80 backdrop-blur-md border-b border-gray-200/50 dark:border-white/5"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between relative">
        
        {/* Logo */}
        <button
          className="z-20 group flex items-center justify-center"
          onClick={() => handleNavClick("/")}
          aria-label="Amisha Home"
        >
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <svg viewBox="0 0 100 100" className="w-full h-full text-lux-black dark:text-white transition-colors duration-300">
              <path d="M50 20L32 85" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M50 20L68 85" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              <circle cx="50" cy="54" r="3.5" fill="#D4AF37" />
            </svg>
=======
    <>
      {/* Floating Toolbar Container */}
      <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-[90%] md:w-auto max-w-3xl`}>
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
            className="flex-shrink-0 relative group p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            onClick={() => handleNavClick('home')}
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
                key={link.value}
                onClick={() => handleNavClick(link.value)}
                className={`
                  relative px-6 py-2.5 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300
                  ${currentPage === link.value 
                    ? 'text-lux-black dark:text-white bg-white dark:bg-white/10 shadow-sm scale-105' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-lux-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'}
                `}
              >
                {link.label}
              </button>
            ))}
>>>>>>> Stashed changes
          </div>

<<<<<<< Updated upstream
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 relative group ${
                isActive(link.path)
                  ? "text-lux-gold"
                  : "text-gray-500 dark:text-gray-400 hover:text-lux-black dark:hover:text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-lux-gold transition-all duration-300 ${
                  isActive(link.path)
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-50"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-6 z-20">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-lux-charcoal transition-colors text-gray-600 dark:text-lux-gold-light"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-lux-cream dark:bg-lux-black z-10 flex flex-col items-center justify-center space-y-8 transition-opacity duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <button
            key={link.path}
            onClick={() => handleNavClick(link.path)}
            className={`text-4xl font-display italic transition-colors ${
              isActive(link.path)
                ? "text-lux-gold"
                : "text-lux-black dark:text-white"
            }`}
=======
          {/* Actions */}
          <div className="flex items-center gap-1 pl-2 md:pl-0">
            <button 
              onClick={toggleTheme}
              className="p-3 rounded-full text-gray-600 dark:text-gray-300 hover:text-lux-gold hover:bg-black/5 dark:hover:bg-white/10 transition-all active:scale-95"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Menu Trigger */}
            <button 
              className="md:hidden p-3 text-lux-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
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
            key={link.value} 
            onClick={() => handleNavClick(link.value)}
            className={`text-4xl font-serif italic transition-all duration-500 transform ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } ${currentPage === link.value ? 'text-lux-gold' : 'text-lux-black dark:text-white'}`}
            style={{ transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms' }}
>>>>>>> Stashed changes
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
