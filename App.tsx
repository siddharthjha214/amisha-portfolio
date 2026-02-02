import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <BrowserRouter>
      <div
        className={`min-h-screen flex flex-col transition-colors duration-700 ease-in-out ${
          isDarkMode
            ? "dark bg-lux-black text-white"
            : "bg-lux-cream text-lux-black"
        }`}
      >
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        <main className="flex-grow flex flex-col w-full relative overflow-hidden">
          <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
            <div className={`absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 ${isDarkMode ? "bg-lux-gold" : "bg-rose-200"}`} />
            <div className={`absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 ${isDarkMode ? "bg-lux-charcoal" : "bg-blue-100"}`} />
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
