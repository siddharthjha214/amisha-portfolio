import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

type Page = 'home' | 'about' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme based on preference or default
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  // Update HTML class for Tailwind dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-700 ease-in-out ${isDarkMode ? 'dark bg-lux-black text-white' : 'bg-lux-cream text-lux-black'}`}>
      <Navbar 
        currentPage={currentPage} 
        setPage={setCurrentPage} 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
      />
      
      <main className="flex-grow flex flex-col w-full relative overflow-hidden">
        {/* Ambient Background Glows */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className={`absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] transition-colors duration-1000 opacity-20 ${isDarkMode ? 'bg-lux-gold' : 'bg-rose-200'}`}></div>
          <div className={`absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] transition-colors duration-1000 opacity-20 ${isDarkMode ? 'bg-lux-charcoal' : 'bg-blue-100'}`}></div>
        </div>

        {/* Page Content with simple fade key */}
        <div key={currentPage} className="animate-fade-in w-full h-full flex-grow flex flex-col">
          {renderPage()}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;