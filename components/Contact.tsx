import React, { useState } from 'react';
import { Section } from './ui/Section';
import { ArrowRight, Mail, Linkedin, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    
    // Web3Forms Access Key
    formData.append("access_key", "793d2fc4-2fb6-495d-8d57-98de6fceb52a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset(); // Clear the form
      } else {
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section className="flex-grow flex items-center justify-center pt-32 pb-20">
      <div className="w-full max-w-2xl mx-auto text-center">
        
        <div className="mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-serif text-lux-black dark:text-white mb-4">Let's Connect</h2>
          <p className="text-gray-500 dark:text-gray-400">Open for opportunities, collaborations, and conversations.</p>
        </div>

        {isSuccess ? (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 mb-8 animate-slide-up flex flex-col items-center">
            <CheckCircle className="text-green-500 mb-4" size={48} />
            <h3 className="text-2xl font-serif text-lux-black dark:text-white mb-2">Message Sent!</h3>
            <p className="text-gray-600 dark:text-gray-300">Thank you for reaching out. I will get back to you shortly.</p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="mt-6 text-sm font-bold uppercase tracking-widest text-lux-gold hover:text-lux-black dark:hover:text-white transition-colors"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form className="space-y-8 animate-slide-up text-left" style={{ animationDelay: '0.2s' }} onSubmit={handleSubmit}>
            
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

            {/* Hidden field to prevent spam bots */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            {errorMessage && (
              <p className="text-red-500 text-sm text-center">{errorMessage}</p>
            )}

            <div className="pt-4 text-center">
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center justify-center px-10 py-4 text-base font-medium text-center text-white bg-lux-black dark:bg-lux-gold dark:text-lux-black rounded-full transition-all duration-300 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl hover:-translate-y-1'}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} 
                {!isSubmitting && <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />}
              </button>
            </div>

          </form>
        )}

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