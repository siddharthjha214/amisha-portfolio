
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Image (Desktop Order 1) */}
        <div className="order-1 md:order-1 relative flex justify-center md:justify-start">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            
            {/* Abstract Blob Behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 text-amber-100">
               <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current opacity-80 animate-pulse" style={{animationDuration: '8s'}}>
                <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,32C59,42.5,47.1,50.6,35.2,56.6C23.3,62.6,11.4,66.5,-1.2,68.6C-13.8,70.7,-26.3,71,-38.4,65.8C-50.5,60.6,-62.2,49.9,-71.2,36.8C-80.2,23.7,-86.5,8.2,-84.9,-6.6C-83.3,-21.4,-73.8,-35.5,-62.4,-47C-51,-58.5,-37.7,-67.4,-24.3,-75.1C-10.9,-82.8,2.6,-89.3,15.9,-89.1C29.2,-88.9,42.3,-82,53,-73" transform="translate(100 100)" />
              </svg>
            </div>

            {/* Decorative Rings */}
            <div className="absolute inset-0 rounded-full border border-navy/5 scale-110"></div>
            <div className="absolute inset-0 rounded-full border border-navy/5 scale-125"></div>

            {/* Portrait */}
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10">
              <img 
                src="https://picsum.photos/id/64/800/800" 
                alt="Sid Portrait" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
              />
            </div>
            
            {/* Floating Badge (Optional) */}
            <div className="absolute -bottom-4 -right-4 z-20 bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 hidden md:block animate-bounce" style={{animationDuration: '3s'}}>
              <span className="text-2xl">🚀</span>
            </div>
          </div>
        </div>

        {/* Right Column: Text (Desktop Order 2) */}
        <div className="order-2 md:order-2 text-center md:text-left space-y-8">
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-navy leading-tight">
              Hey, I’m <span className="relative whitespace-nowrap">
                Sid
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-350 -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span> <span className="inline-block animate-wave origin-bottom-right">👋</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-lg mx-auto md:mx-0">
              A 24-year-old business nerd exploring <span className="font-medium text-navy">startups</span>, <span className="font-medium text-navy">strategy</span>, and <span className="font-medium text-navy">growth</span>.
            </h2>
          </div>

          <p className="text-gray-500 leading-relaxed max-w-lg mx-auto md:mx-0 border-l-2 border-amber-350 pl-4 md:pl-6 text-left italic">
            "I turn messy ideas into clear projects, experiments, and resources for people who want to do meaningful work."
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4">
            <Button onClick={() => document.getElementById('projects')?.scrollIntoView()}>
              View My Projects
            </Button>
            <Button variant="outline" className="group">
              <Download size={18} className="mr-2 group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </Button>
          </div>

          <div className="pt-8 flex items-center justify-center md:justify-start text-sm text-gray-400 font-medium">
             <span className="flex items-center">
                Available for internships & early-stage roles
                <span className="block w-2 h-2 bg-green-500 rounded-full ml-2 animate-pulse"></span>
             </span>
          </div>
        </div>

      </div>

      {/* Hand Drawn Arrow Scroll Indicator */}
      <div className="absolute bottom-8 right-8 md:right-20 hidden lg:block opacity-40">
        <div className="flex flex-col items-center gap-2">
            <span className="font-handwriting text-sm -rotate-12">See my work</span>
            <svg width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-navy">
                <path d="M10 5 C 10 20, 25 25, 20 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M10 45 L 20 50 L 30 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
        </div>
      </div>
    </section>
  );
};
