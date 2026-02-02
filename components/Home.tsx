import React, { useEffect, useState, useRef } from "react";
import { ArrowRight, Star, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
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

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Reveal animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "opacity-100",
              "translate-y-0",
              "scale-100"
            );
            entry.target.classList.remove(
              "opacity-0",
              "translate-y-20",
              "scale-95"
            );
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-lux-cream dark:bg-lux-black min-h-screen">
      
      {/* Noise Texture */}
      <div className="fixed inset-0 pointer-events-none z-[50] bg-noise mix-blend-overlay opacity-40 dark:opacity-20" />

      {/* Spotlight Cursor */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] transition-opacity duration-500 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212, 175, 55, 0.08), transparent 40%)`,
        }}
      />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 z-10">
        <div className="max-w-[1400px] w-full mx-auto flex flex-col items-center">
          <h1 className="text-center flex flex-col items-center leading-[0.9]">
            <span className="font-display font-light italic text-6xl md:text-8xl lg:text-[9rem]">
              Hey there,
            </span>
            <span className="font-serif text-7xl md:text-9xl lg:text-[11rem]">
              I'm Amisha
            </span>
            <span className="mt-4 font-display font-light text-4xl md:text-6xl text-gray-500">
              shaping meaningful connections in Human Resources.
            </span>
          </h1>
        </div>
      </section>

      {/* ABOUT CTA */}
      <section className="px-6 py-32">
        <button
          onClick={() => navigate("/about")}
          className="group flex items-center gap-4 text-lux-black dark:text-white uppercase tracking-widest text-xs font-bold hover:text-lux-gold transition-colors"
        >
          Explore My Journey
          <span className="w-12 h-[1px] bg-current group-hover:w-20 transition-all duration-500" />
          <ArrowRight size={16} />
        </button>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-6 text-center">
        <button
          onClick={() => navigate("/contact")}
          className="inline-flex items-center justify-center px-12 py-6 rounded-full bg-lux-black dark:bg-lux-gold text-white dark:text-lux-black uppercase tracking-widest font-bold hover:scale-105 transition-transform"
        >
          Start the Conversation
        </button>
      </section>
    </div>
  );
};
