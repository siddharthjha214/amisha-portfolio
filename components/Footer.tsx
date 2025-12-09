import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-6 md:px-12 mt-auto border-t border-gray-200/50 dark:border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-xs text-gray-400 tracking-widest uppercase">
          © {new Date().getFullYear()} Amisha. All rights reserved.
        </p>

        <div className="flex items-center space-x-8">
          <a 
            href="https://www.linkedin.com/in/amisha-jhaa/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-gray-500 hover:text-lux-gold transition-colors"
          >
            LinkedIn
          </a>
        </div>
        
      </div>
    </footer>
  );
};