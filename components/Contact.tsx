
import React from 'react';
import { Section } from './ui/Section';
import { ArrowRight, Mail, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Section className="flex-grow flex items-center justify-center pt-32 pb-20">
      <div className="w-full max-w-2xl mx-auto text-center">
        
        <div className="mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-serif text-lux-black dark:text-white mb-4">Let's Connect</h2>
          <p className="text-gray-500 dark:text-gray-400">Open for opportunities, collaborations, and conversations.</p>
        </div>

        <form className="space-y-8 animate-slide-up text-left" style={{ animationDelay: '0.2s' }} onSubmit={(e) => e.preventDefault()}>
          
          <div className="group relative z-0 w-full mb-6 group">
            <input 
              type="text" 
              name="name" 
              id="name" 
              className="block py-4 px-0 w-full text-lg text-lux-black dark:text-white bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-lux-gold peer transition-colors" 
              placeholder=" " 
              required 
            />
            <label htmlFor="name" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lux-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Your Name
            </label>
          </div>

          <div className="group relative z-0 w-full mb-6 group">
            <input 
              type="email" 
              name="email" 
              id="email" 
              className="block py-4 px-0 w-full text-lg text-lux-black dark:text-white bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-lux-gold peer transition-colors" 
              placeholder=" " 
              required 
            />
            <label htmlFor="email" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lux-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email Address
            </label>
          </div>

          <div className="group relative z-0 w-full mb-6 group">
            <textarea 
              name="message" 
              id="message" 
              rows={4} 
              className="block py-4 px-0 w-full text-lg text-lux-black dark:text-white bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-lux-gold peer transition-colors resize-none" 
              placeholder=" " 
              required 
            ></textarea>
            <label htmlFor="message" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lux-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Message
            </label>
          </div>

          <div className="pt-4 text-center">
            <button className="inline-flex items-center justify-center px-10 py-4 text-base font-medium text-center text-white bg-lux-black dark:bg-lux-gold dark:text-lux-black rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              Send Message <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </form>

        <div className="mt-20 pt-10 border-t border-gray-200 dark:border-white/10 w-full animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                
                <a 
                    href="mailto:amishajhaalg@gmail.com" 
                    className="group flex items-center justify-center gap-4 px-8 py-4 min-w-[200px] rounded-full border border-gray-300 dark:border-white/20 hover:border-lux-gold dark:hover:border-lux-gold bg-transparent transition-all duration-500 hover:-translate-y-1"
                >
                    <Mail size={18} className="text-gray-500 dark:text-gray-400 group-hover:text-lux-gold transition-colors" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-lux-black dark:text-white group-hover:text-lux-gold transition-colors">
                        Email
                    </span>
                </a>

                <a 
                    href="https://www.linkedin.com/in/amisha-jhaa/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-4 px-8 py-4 min-w-[200px] rounded-full border border-gray-300 dark:border-white/20 hover:border-lux-gold dark:hover:border-lux-gold bg-transparent transition-all duration-500 hover:-translate-y-1"
                >
                    <Linkedin size={18} className="text-gray-500 dark:text-gray-400 group-hover:text-lux-gold transition-colors" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-lux-black dark:text-white group-hover:text-lux-gold transition-colors">
                        LinkedIn
                    </span>
                </a>

            </div>
        </div>

      </div>
    </Section>
  );
};
