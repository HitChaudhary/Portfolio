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
    <header className="w-full py-3.5 sm:py-5 px-3 sm:px-8 lg:px-12 relative z-40 sticky top-0">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-2 sm:p-2.5 px-3.5 sm:px-5 glass-card-shadow rounded-full relative gap-2 sm:gap-4">

        {/* ── Brand ── */}
        <Link to="/" className="group flex items-center gap-2 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse shrink-0" />
          <div className="flex items-center gap-1.5 leading-none">
            <span className="font-display font-black text-xs sm:text-sm lg:text-[15px] tracking-tight uppercase group-hover:text-[#ff4314] transition-colors whitespace-nowrap">
              HITKUMAR CHAUDHARY
            </span>
            <span className="hidden xl:inline font-mono-custom text-[9px] font-medium text-zinc-400 dark:text-zinc-500 opacity-80 whitespace-nowrap">
              // FULL STACK &amp; MERN
            </span>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-3.5 lg:gap-5 xl:gap-6 font-mono-custom text-[11px] lg:text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className="sketch-underline py-1 transition-colors hover:text-[#ff4314] flex items-center gap-0.5 whitespace-nowrap"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className={`sketch-underline py-1 transition-colors hover:text-[#ff4314] whitespace-nowrap ${
                  isActive(link.to) ? 'text-[#ff4314]' : ''
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* ── Right Controls ── */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
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

          {/* Resume View / Download (desktop) */}
          <Link
            to="/resume"
            className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/60 dark:bg-zinc-800/60 font-mono-custom text-[10px] font-bold transition-all ${
              isActive('/resume')
                ? 'border-[#ff4314] text-[#ff4314] bg-[#ff4314]/10'
                : 'text-zinc-700 dark:text-zinc-200 hover:border-[#ff4314] hover:text-[#ff4314]'
            }`}
            title="View Resume"
          >
            <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>RESUME</span>
          </Link>

          {/* Hire Me (desktop) */}
          <a
            href="mailto:hitchaudhary093@gmail.com"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full border border-[#ff4314]/50 bg-[#ff4314]/10 font-mono-custom text-[10px] sm:text-[11px] font-bold text-[#ff4314] hover:bg-[#ff4314] hover:text-white transition-all whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
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
            <Link
              to="/resume"
              className="py-2 px-3 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:border-[#ff4314] hover:text-[#ff4314] transition-colors flex items-center gap-2 text-zinc-600 dark:text-zinc-300"
              onClick={() => setMobileOpen(false)}
            >
              <Download className="w-3.5 h-3.5" /> VIEW RESUME
            </Link>
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
