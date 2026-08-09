import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';

const navLinks = [
  { label: 'Home',         to: '/',              external: false },
  { label: 'Projects',     to: '/projects',      external: false },
  { label: 'Achievements', to: '/achievements',  external: false },
  { label: 'Contact',      to: '/contact',       external: false },
  { label: 'GitHub ↗',    to: 'https://github.com/HitChaudhary', external: true },
];

export default function Navbar({ isDark, onThemeToggle }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (to) => location.pathname === to;

  return (
    <header className="w-full py-4 sm:py-6 px-4 sm:px-12 relative z-40 sticky top-0">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-2.5 sm:p-3 px-4 sm:px-6 glass-card-shadow rounded-full relative">

        {/* ── Brand ── */}
        <Link to="/" className="group flex items-center gap-2 sm:gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse shrink-0" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 leading-tight">
            <span className="font-display font-bold text-xs sm:text-base tracking-tight uppercase group-hover:text-[#ff4314] transition-colors whitespace-nowrap">
              HITKUMAR CHAUDHARY
            </span>
            <span className="font-mono-custom text-[10px] sm:text-xs font-normal text-zinc-400 opacity-80">
              // FULL STACK &amp; MERN
            </span>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-6 font-mono-custom text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className="sketch-underline py-1 transition-colors hover:text-[#ff4314] flex items-center gap-1"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className={`sketch-underline py-1 transition-colors hover:text-[#ff4314] ${
                  isActive(link.to) ? 'text-[#ff4314]' : ''
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* ── Right Controls ── */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Theme Toggle */}
          <button
            onClick={onThemeToggle}
            className="p-1.5 sm:p-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800/50 hover:border-[#ff4314] transition-all flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
            ) : (
              <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-700" />
            )}
          </button>

          {/* Resume Download (desktop) */}
          <a
            href="https://drive.google.com/file/d/1cvnbQ51SD6Pi8Se5QRZ60ymQk0UDX5Vu/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/60 dark:bg-zinc-800/60 font-mono-custom text-[10px] font-bold text-zinc-700 dark:text-zinc-200 hover:border-[#ff4314] hover:text-[#ff4314] transition-all"
            title="View Resume"
          >
            <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="hidden lg:inline">RESUME</span>
          </a>

          {/* Hire Me (desktop) */}
          <a
            href="mailto:hitchaudhary093@gmail.com"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#ff4314]/50 bg-[#ff4314]/10 font-mono-custom text-[10px] sm:text-xs font-bold text-[#ff4314] hover:bg-[#ff4314] hover:text-white transition-all"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#10b981]" />
            HIRE ME
          </a>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden p-1.5 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800/50 hover:border-[#ff4314] transition-all"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen
              ? <X className="w-4 h-4 text-[#ff4314]" />
              : <Menu className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
            }
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown ── */}
      {mobileOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 px-4">
          <div className="glass-card-shadow rounded-2xl p-4 flex flex-col gap-3 font-mono-custom text-xs font-bold uppercase tracking-wider">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded-xl hover:bg-[#ff4314]/10 hover:text-[#ff4314] transition-colors flex items-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`py-2 px-3 rounded-xl hover:bg-[#ff4314]/10 hover:text-[#ff4314] transition-colors ${
                    isActive(link.to)
                      ? 'bg-[#ff4314]/10 text-[#ff4314]'
                      : 'text-zinc-600 dark:text-zinc-300'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            {/* Resume in mobile */}
            <a
              href="https://drive.google.com/file/d/1cvnbQ51SD6Pi8Se5QRZ60ymQk0UDX5Vu/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:border-[#ff4314] hover:text-[#ff4314] transition-colors flex items-center gap-2 text-zinc-600 dark:text-zinc-300"
              onClick={() => setMobileOpen(false)}
            >
              <Download className="w-3.5 h-3.5" /> VIEW RESUME
            </a>
            {/* Hire Me in mobile */}
            <a
              href="mailto:hitchaudhary093@gmail.com"
              className="mt-1 py-2.5 px-4 rounded-xl border border-[#ff4314]/50 bg-[#ff4314]/10 text-[#ff4314] hover:bg-[#ff4314] hover:text-white transition-all text-center"
              onClick={() => setMobileOpen(false)}
            >
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                HIRE ME
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
