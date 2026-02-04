import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Star, Sparkles, MoveRight, ArrowUpRight } from 'lucide-react';

interface HomeProps {
  setPage: (page: 'home' | 'about' | 'contact') => void;
}

export const Home: React.FC<HomeProps> = ({ setPage }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const portraitRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();


  // Global Mouse & Scroll Listeners
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Reveal animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
            entry.target.classList.remove('opacity-0', 'translate-y-20', 'scale-95');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-lux-cream dark:bg-lux-black min-h-screen">
      
      {/* --- Global Ambient Effects --- */}
      
      {/* Noise Texture */}
      <div className="fixed inset-0 pointer-events-none z-[50] bg-noise mix-blend-overlay opacity-40 dark:opacity-20"></div>
      
      {/* Spotlight Cursor (Subtle Gold Glow) */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] transition-opacity duration-500 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212, 175, 55, 0.08), transparent 40%)`
        }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 z-10">
        
        {/* Background Gradient Mesh */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-30 dark:opacity-20">
             <div className="absolute top-[20%] left-[20%] w-[60vh] h-[60vh] bg-lux-gold blur-[150px] rounded-full animate-float opacity-30"></div>
             <div className="absolute bottom-[20%] right-[10%] w-[50vh] h-[50vh] bg-rose-300 dark:bg-indigo-900 blur-[150px] rounded-full animate-float" style={{animationDelay: '-3s'}}></div>
        </div>

        <div className="max-w-[1400px] w-full mx-auto relative z-10 flex flex-col items-center">
            
            {/* Massive Editorial Typography */}
            <h1 className="text-center flex flex-col items-center leading-[0.9]">
                <div className="overflow-hidden">
                    <span className="block font-display font-light italic text-6xl md:text-8xl lg:text-[9rem] text-lux-black dark:text-white reveal-content" style={{animationDelay: '0.2s'}}>
                        Hey there, 
                    </span>
                </div>
                <div className="overflow-hidden">
                     <span className="block font-serif text-7xl md:text-9xl lg:text-[11rem] tracking-tighter text-lux-black dark:text-white reveal-content relative" style={{animationDelay: '0.35s'}}>
                        I'm Amisha
                        {/* Gold Underline Decoration */}
                        <span className="absolute -bottom-2 md:-bottom-6 left-0 w-full h-1 md:h-2 bg-lux-gold scale-x-0 animate-[width_1.5s_ease-out_forwards] origin-left" style={{animationDelay: '1s'}}></span>
                     </span>
                </div>
                <div className="overflow-hidden mt-2 md:mt-6">
                    <span className="block font-display font-light text-4xl md:text-6xl lg:text-7xl text-gray-500 dark:text-gray-400 reveal-content" style={{animationDelay: '0.5s'}}>
                        shaping meaningful connections in Human Resources.
                    </span>
                </div>
            </h1>

            {/* Current Role - Magnetic Strip */}
            <div className="mt-8 md:mt-12 animate-fade-in-up opacity-0" style={{animationDelay: '0.9s'}}>
                <a 
                    href="https://upstaff.ca" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-6 px-10 py-5 bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-full hover:border-lux-gold/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(212,175,55,0.3)]"
                >
                    <div className="flex flex-col items-start text-left">
                        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-sans mb-1">Current Role</span>
                        <span className="text-xl md:text-2xl font-serif text-lux-black dark:text-white group-hover:text-lux-gold transition-colors">
                            Senior HR Recruiter @ Upstaff
                        </span>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-lux-black dark:bg-white text-white dark:text-lux-black flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                        <ArrowUpRight size={24} />
                    </div>
                </a>
            </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{animationDelay: '1.5s'}}>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-lux-gold to-transparent"></div>
        </div>
      </section>


      {/* --- PORTRAIT & INTRO SECTION --- */}
      <section className="relative px-6 py-20 md:py-32 z-20">
         <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Text Content */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-10">
                <div className="reveal-on-scroll opacity-0 translate-y-20 transition-all duration-1000 ease-out">
                    <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-lux-gold mb-6 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-lux-gold"></span>
                        The Visionary
                    </h2>
                    <p className="font-serif text-3xl md:text-4xl leading-[1.4] text-lux-black dark:text-white">
                        I don't just fill positions; I architect{" "}
                        <span className="italic text-lux-gold">
                            high-performance cultures
                            </span>.
                            </p>

                </div>

                <div className="reveal-on-scroll opacity-0 translate-y-20 transition-all duration-1000 ease-out delay-100 text-gray-600 dark:text-gray-400 leading-relaxed font-light text-lg space-y-6">
                    <p>
                        With a global footprint spanning Canada, the US, and India, I specialize in bridging the gap between organizational goals and top-tier talent.
                    </p>
                    <p>
                        My methodology combines data-driven precision with deep psychological empathy, ensuring that every hire is not just a fit for today, but a leader for tomorrow.
                    </p>
                </div>

                <div className="reveal-on-scroll opacity-0 translate-y-20 transition-all duration-1000 ease-out delay-200 pt-4">
                     <button 
                     onClick={() => navigate("/about")}
                     className="group flex items-center gap-4 text-lux-black dark:text-white uppercase tracking-widest text-xs font-bold hover:text-lux-gold transition-colors"
                     >

                        Explore My Journey
                        <span className="w-12 h-[1px] bg-current group-hover:w-20 transition-all duration-500"></span>
                        <ArrowRight size={16} />
                     </button>
                </div>
            </div>

            {/* Right: Premium Portrait Display */}
            <div className="lg:col-span-7 order-1 lg:order-2 relative h-[600px] md:h-[700px] flex items-center justify-center">
                
                {/* Background Decor */}
                <div className="absolute right-0 top-0 w-3/4 h-full bg-lux-cream dark:bg-lux-charcoal border border-lux-gold/10 -z-10 transform rotate-2 rounded-[2rem]"></div>
                
                {/* Image Container with Parallax Effect */}
                <div 
                    ref={portraitRef}
                    className="relative w-full max-w-md h-[500px] md:h-[600px] overflow-hidden rounded-[10rem_10rem_0_0] shadow-2xl group border border-white/10"
                >
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-lux-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                    
                    {/* The Image - Using Thumbnail Endpoint for Reliability */}
                    <img 
                        src="https://drive.google.com/thumbnail?id=19DLeo9sRxL-HkhOTUnXspx8L07XQ6Qao&sz=w1000"
                        alt="Amisha Portrait"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top transition-transform duration-[1.5s] ease-out group-hover:scale-110 will-change-transform"
                        style={{ transform: `scale(1.1) translateY(${scrollY * 0.05}px)` }} 
                    />


                    {/* Floating Badge */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-[90%] text-center">
                         <div className="backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-xl">
                            <span className="block font-signature text-3xl text-lux-gold mb-1">Amisha</span>
                            <span className="text-[10px] uppercase tracking-[0.25em] text-white/80">Senior HR Strategist</span>
                         </div>
                    </div>
                </div>

                {/* Decorative Signature Behind */}
                <div className="absolute -bottom-10 -right-10 md:-right-20 z-20 pointer-events-none opacity-50 mix-blend-difference">
                    <svg viewBox="0 0 200 100" className="w-64 h-32 fill-none stroke-lux-gold stroke-2 opacity-50">
                        <path d="M10,80 Q50,10 90,80 T180,80" className="animate-draw" />
                    </svg>
                </div>
            </div>

         </div>
      </section>

      {/* --- SERVICES / EXPERTISE TICKER --- */}
      <section className="py-20 bg-lux-black text-white border-y border-white/10 overflow-hidden relative">
         <div className="absolute inset-0 bg-noise opacity-10"></div>
         <div className="flex gap-12 whitespace-nowrap animate-[scroll_20s_linear_infinite]">
             {[...Array(2)].map((_, i) => (
                 <div key={i} className="flex gap-12 items-center">
                     <span className="text-4xl md:text-6xl font-serif text-transparent stroke-text opacity-50">Global Recruitment</span>
                     <Star className="text-lux-gold w-8 h-8" fill="currentColor" />
                     <span className="text-4xl md:text-6xl font-serif">Talent Acquisition</span>
                     <Star className="text-lux-gold w-8 h-8" fill="currentColor" />
                     <span className="text-4xl md:text-6xl font-serif text-transparent stroke-text opacity-50">Executive Search</span>
                     <Star className="text-lux-gold w-8 h-8" fill="currentColor" />
                     <span className="text-4xl md:text-6xl font-serif">Team Building</span>
                     <Star className="text-lux-gold w-8 h-8" fill="currentColor" />
                 </div>
             ))}
         </div>
         <style>{`
            .stroke-text {
                -webkit-text-stroke: 1px rgba(255,255,255,0.3);
            }
            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
         `}</style>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 px-6 relative flex flex-col items-center text-center">
        <div className="max-w-3xl space-y-8">
            <h3 className="text-5xl md:text-7xl font-display italic text-lux-black dark:text-white reveal-on-scroll opacity-0 translate-y-20 transition-all duration-700">
                Ready to elevate <br/> your standard?
            </h3>
            <div className="reveal-on-scroll opacity-0 translate-y-20 transition-all duration-700 delay-200">
                <button 
                onClick={() => navigate("/contact")}
                className="mt-8 relative inline-flex group items-center justify-center px-12 py-6 overflow-hidden rounded-full bg-lux-black dark:bg-lux-gold text-white dark:text-lux-black transition-all duration-300 hover:w-64"
                >

                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white dark:bg-white rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
                    <span className="relative text-sm font-bold uppercase tracking-widest">Start the Conversation</span>
                </button>
            </div>
        </div>
      </section>

    </div>
  );
};
