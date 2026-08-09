import { FolderGit2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ─── Repo Card ─── */
const RepoCard = ({ stars, starsColor, name, desc, lang, repoLink, liveLink }) => (
  <div className="p-5 rounded-2xl inner-glass space-y-3 flex flex-col justify-between group hover:border-[#ff4314]/30 transition-all">
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className={`font-mono-custom text-[10px] font-bold px-2 py-0.5 rounded-full ${starsColor}`}>{stars}</span>
        <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-[#ff4314] transition-colors">
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      <h3 className="text-lg font-display font-bold">{name}</h3>
      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">{desc}</p>
    </div>
    <div className="pt-2 flex items-center justify-between font-mono-custom text-[11px] border-t border-zinc-200/60 dark:border-zinc-800">
      <span className="text-zinc-500 font-bold">{lang}</span>
      <div className="flex items-center gap-3">
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-[#10b981] font-bold hover:underline">LIVE ↗</a>
        )}
        <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-[#ff4314] font-bold hover:underline">REPO ↗</a>
      </div>
    </div>
  </div>
);

export default function Projects() {
  const repos = [
    {
      stars: '★ 1 STAR',
      starsColor: 'text-[#10b981] bg-[#10b981]/10',
      name: 'zubi-dubi-school-erp',
      desc: 'Modern, mobile-first SaaS School ERP and Online Learning Platform built with PostgreSQL and React. Includes multi-role authentication.',
      lang: 'JavaScript',
      repoLink: 'https://github.com/HitChaudhary/zubi-dubi-school-erp',
      liveLink: null, // 🚧 In building
    },
    {
      stars: '★ 2 STARS',
      starsColor: 'text-[#10b981] bg-[#10b981]/10',
      name: 'Restaurant-Cafe-Management',
      desc: 'Full-stack POS system supporting dine-in restaurant and self-order cafe workflows, real-time kitchen tracking, and GST billing.',
      lang: 'JavaScript',
      repoLink: 'https://github.com/HitChaudhary/Restaurant-Cafe-Management',
      liveLink: null,
    },
    {
      stars: '★ 3 STARS',
      starsColor: 'text-[#10b981] bg-[#10b981]/10',
      name: 'college-Management',
      desc: 'Dynamic college web portal with an admin dashboard for real-time inquiry management, digital admissions, and public intake forms.',
      lang: 'JavaScript',
      repoLink: 'https://github.com/HitChaudhary/college-Management',
      liveLink: 'https://college-management-web.vercel.app/',
    },
    {
      stars: '★ 1 STAR',
      starsColor: 'text-[#10b981] bg-[#10b981]/10',
      name: 'Supermart-POS',
      desc: 'Multi-branch retail Point of Sale system featuring atomic inventory management, checkout transactions, and daily sales reports.',
      lang: 'JavaScript',
      repoLink: 'https://github.com/HitChaudhary/Supermart-POS',
      liveLink: 'https://supermart-pos-zji3.vercel.app/login',
    },
    {
      stars: '★ 0 STARS',
      starsColor: 'text-zinc-500 bg-zinc-200/60 dark:bg-zinc-800',
      name: 'hardware-marketplace-fullstack',
      desc: 'Full-stack e-commerce marketplace platform engineered for hardware tools, product catalogs, cart operations, and REST APIs.',
      lang: 'JavaScript',
      repoLink: 'https://github.com/HitChaudhary/hardware-marketplace-fullstack',
      liveLink: 'https://hardware-marketplace-fullstack-zzur.onrender.com',
    },
    {
      stars: '★ 0 STARS',
      starsColor: 'text-zinc-500 bg-zinc-200/60 dark:bg-zinc-800',
      name: 'leadmagnets-redesign',
      desc: 'Modern UI/UX frontend redesign project focused on high-converting landing pages, interactive forms, and micro-interactions.',
      lang: 'JavaScript',
      repoLink: 'https://github.com/HitChaudhary/leadmagnets-redesign',
      liveLink: 'https://srv-d9jlg7flk1mc738eoc3g.onrender.com',
    },
    {
      stars: '★ 0 STARS',
      starsColor: 'text-zinc-500 bg-zinc-200/60 dark:bg-zinc-800',
      name: 'Habit-Tracker',
      desc: 'Productivity application designed to record daily habits, track progress streaks, and visualize completion metrics over time.',
      lang: 'Frontend App',
      repoLink: 'https://github.com/HitChaudhary/Habit-Tracker',
      liveLink: null,
    },
    {
      stars: 'PROFILE README',
      starsColor: 'text-zinc-500 bg-zinc-200/60 dark:bg-zinc-800',
      name: 'HitChaudhary',
      desc: 'Special GitHub configuration repository powering the personal developer profile overview and skill badges.',
      lang: 'GitHub Config',
      repoLink: 'https://github.com/HitChaudhary/HitChaudhary',
      liveLink: null,
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-12 relative space-y-12 py-8 sm:py-12">

      {/* ── PAGE HEADER ── */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#ff4314]/30 bg-[#ff4314]/10 text-xs font-mono-custom font-bold text-[#ff4314]">
          <FolderGit2 className="w-4 h-4" />
          <span>COMPLETE PROJECT DIRECTORY</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight text-[#121214] dark:text-white uppercase">
          PROJECTS &amp; ARCHIVE
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
          A complete catalog of all software systems, full-stack web applications, and open-source repositories engineered using the MERN stack and PostgreSQL.
        </p>
      </section>

      {/* ── ALL REPOS ── */}
      <section id="archive" className="space-y-8">
        <div className="p-6 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] glass-card-shadow space-y-8">
          <div className="border-b border-zinc-200/80 dark:border-zinc-800 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono-custom text-xs font-bold uppercase tracking-wider text-[#ff4314]">// GITHUB REPOSITORY DIRECTORY</span>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold mt-1">All Repositories</h2>
            </div>
            <a href="https://github.com/HitChaudhary" target="_blank" rel="noopener noreferrer"
              className="font-mono-custom text-xs text-zinc-500 hover:text-[#ff4314] transition-colors flex items-center gap-1">
              <span>github.com/HitChaudhary</span> ↗
            </a>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 font-mono-custom text-[10px] font-bold text-zinc-500">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#10b981]" /> LIVE DEMO AVAILABLE</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-400" /> IN BUILDING</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-zinc-400" /> REPO ONLY</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
            {repos.map((repo) => (
              <RepoCard key={repo.name} {...repo} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PAGE FOOTER ── */}
      <footer className="py-8 text-center">
        <div className="p-6 sm:p-8 rounded-[2rem] glass-card-shadow flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-custom text-xs text-zinc-500">
          <span>© 2026 HITKUMAR CHAUDHARY // ALL PROJECTS</span>
          <Link to="/" className="text-[#ff4314] hover:underline">← BACK TO MAIN PORTFOLIO</Link>
        </div>
      </footer>

    </main>
  );
}
