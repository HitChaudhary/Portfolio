import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import IntroOverlay from './components/IntroOverlay';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  // Apply theme class to <html>
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.add('light');
      html.classList.remove('dark');
    }
  }, [isDark]);

  // Init light mode on mount
  useEffect(() => {
    document.documentElement.classList.add('light');
  }, []);

  const handleThemeToggle = () => setIsDark((v) => !v);

  return (
    <BrowserRouter>
      <div className="selection:bg-[#ff4314] selection:text-white min-h-screen relative overflow-x-hidden">
        <CustomCursor />
        <IntroOverlay />
        <Navbar isDark={isDark} onThemeToggle={handleThemeToggle} />
        <Routes>
          <Route path="/" element={<Home isDark={isDark} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
