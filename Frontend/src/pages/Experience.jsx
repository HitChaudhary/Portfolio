import { Briefcase, Calendar, Building2, CheckCircle2, ShieldCheck, ArrowRight, Code2, Server, Database } from 'lucide-react';
import { Link } from 'react-router-dom';


/* ─── Tech Pill ──────────────────────────────── */
const TechPill = ({ label }) => (
  <span className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 font-mono-custom text-[11px] font-semibold text-zinc-800 dark:text-zinc-200 shadow-xs">
    {label}
  </span>
);

export default function Experience() {
  const experiences = [
    {
      role: 'MERN Stack Intern',
      company: 'Tech Innovation',
      period: 'JUN 2026 — SEP 2026',
      badge: '🔥 PRODUCTION INTERNSHIP',
      badgeColor: 'text-[#ff4314] bg-[#ff4314]/10 border-[#ff4314]/30',
      type: 'Industrial Client Engineering',
      overview: 'Delivered commercial production client work using the modern MERN stack. Spearheaded end-to-end features, full-site redesigns, and multimedia cloud pipelines while maintaining rapid delivery cycles.',
      skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Cloudinary', 'REST APIs', 'Agile Sprints', 'AI-Assisted Coding'],
      highlights: [
        {
          title: '4+ Commercial Client Projects',
          desc: 'Delivered four complete client applications using the MERN stack. Integrated Cloudinary for high-performance image and media uploads, turning varied client specifications into tested production-ready software.',
        },
        {
          title: 'Full Production Website Redesign',
          desc: 'Re-architected and redesigned a live production client website from the ground up, achieving final client sign-off within just 1–2 revision rounds with zero regression.',
        },
        {
          title: 'Independent Project Ownership',
          desc: 'Independently owned the 4th client project from discovery and requirement gathering through database modeling, API architecture, frontend styling, and deployment.',
        },
        {
          title: 'Security-First & AI-Accelerated Development',
          desc: 'Enforced rigorous security hygiene on every feature (input validation, environment-based secret isolation, authorization guards) and utilized AI-assisted development tools to speed up delivery.',
        },
      ],
    },
    {
      role: 'Advanced MERN Stack Development Trainee',
      company: 'Code Master Technology',
      period: 'JAN 2025 — JUN 2026',
      badge: '💻 INDUSTRIAL IMMERSION',
      badgeColor: 'text-[#10b981] bg-[#10b981]/10 border-[#10b981]/30',
      type: 'Structured Professional Training',
      overview: 'Completed 18 months of intensive, hands-on engineering training covering the full JavaScript stack, RESTful API engineering, dual-database modeling (PostgreSQL + MongoDB), and scalable schema design.',
      skills: ['JavaScript (ES6+)', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'JWT Auth', 'MVC Architecture', 'Postman'],
      highlights: [
        {
          title: 'MVC Architecture & Enterprise Clean Code',
          desc: 'Engineered modular, scalable server applications with clean controller-service-repository patterns, separation of concerns, and centralized error-handling middlewares.',
        },
        {
          title: 'Secure Authentication & Route Protection',
          desc: 'Implemented industry-standard JWT authentication flows, bcrypt salt hashing, cookie handling, role-based access control (RBAC), and protected endpoint guards.',
        },
        {
          title: 'Dual Database Paradigms (Relational + Document)',
          desc: 'Built production schemas for both MongoDB (Mongoose ODM) and PostgreSQL (Prisma ORM), learning query optimization, aggregation pipelines, and atomic updates.',
        },
        {
          title: 'Comprehensive API Testing & Postman Suites',
          desc: 'Authored end-to-end API test suites in Postman, validating edge cases, status codes, payload validations, and payload security under simulated concurrent loads.',
        },
      ],
    },
  ];

  const pillars = [
    {
      icon: Code2,
      title: 'Frontend Engineering',
      desc: 'Building responsive, snappy UIs with React 19/18, modern TypeScript, Tailwind CSS, and reusable design systems.',
    },
    {
      icon: Server,
      title: 'Backend & RESTful APIs',
      desc: 'Architecting robust Node.js and Express servers with custom middleware, rate-limiting, Helmet, and tRPC.',
    },
    {
      icon: Database,
      title: 'Data Systems & Isolation',
      desc: 'Expertise in both PostgreSQL (Prisma/Drizzle) and MongoDB (Mongoose) with strict multi-tenant data isolation.',
    },
    {
      icon: ShieldCheck,
      title: 'Zero-Trust Security',
      desc: 'Engineered anti-spoofing validation, cryptographic QR sessions, GPS Haversine math, and granular RBAC guards.',
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-12 relative space-y-12 py-8 sm:py-12">

      {/* ── PAGE HEADER ── */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#ff4314]/30 bg-[#ff4314]/10 text-xs font-mono-custom font-bold text-[#ff4314]">
          <Briefcase className="w-4 h-4" />
          <span>CAREER TRACK RECORD &amp; EXPERIENCE</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight text-[#121214] dark:text-white uppercase">
          EXPERIENCE &amp; JOURNEY
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
          From intensive hands-on training to shipping commercial client applications and independently architecting production-grade SaaS platforms.
        </p>
      </section>

      {/* ── DETAILED EXPERIENCE TIMELINE ── */}
      <section className="space-y-8">
        <div className="p-6 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] glass-card-shadow space-y-10">

          <div className="border-b border-zinc-200/80 dark:border-zinc-800 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono-custom text-xs font-bold uppercase tracking-wider text-[#ff4314]">// INDUSTRY EXPERIENCE</span>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold mt-1">Professional Work History</h2>
            </div>
            <Link
              to="/resume"
              className="inline-flex items-center gap-1.5 font-mono-custom text-xs font-bold text-zinc-600 dark:text-zinc-300 hover:text-[#ff4314] transition-colors"
            >
              <span>VIEW FULL RESUME</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={exp.role}
                className="p-6 sm:p-8 rounded-2xl inner-glass space-y-6 border border-zinc-200/80 dark:border-zinc-800 hover:border-[#ff4314]/40 transition-all"
              >
                {/* Header row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-zinc-200/60 dark:border-zinc-800 pb-5">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className={`px-2.5 py-0.5 rounded-full font-mono-custom text-[10px] font-bold border ${exp.badgeColor}`}>
                        {exp.badge}
                      </span>
                      <span className="font-mono-custom text-xs text-zinc-500 font-semibold">
                        // {exp.type}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-black text-[#121214] dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 font-mono-custom text-sm font-bold text-[#ff4314]">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 font-mono-custom text-xs font-bold text-zinc-700 dark:text-zinc-300 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-[#ff4314]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Role Overview */}
                <p className="font-sans text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
                  {exp.overview}
                </p>

                {/* Tech Skills Pills */}
                <div className="space-y-2">
                  <span className="font-mono-custom text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                    // TECHNOLOGIES &amp; TOOLS APPLIED:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <TechPill key={skill} label={skill} />
                    ))}
                  </div>
                </div>

                {/* Highlights Grid */}
                <div className="space-y-3 pt-2">
                  <span className="font-mono-custom text-[11px] font-bold uppercase tracking-wider text-[#ff4314]">
                    // KEY CONTRIBUTIONS &amp; DELIVERABLES:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {exp.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/70 dark:border-zinc-800 space-y-1.5 hover:border-[#ff4314]/30 transition-colors"
                      >
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                          <h4 className="font-display font-bold text-sm text-zinc-900 dark:text-white">
                            {h.title}
                          </h4>
                        </div>
                        <p className="font-sans text-xs text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed pl-6">
                          {h.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CORE ENGINEERING PILLARS ── */}
      <section className="space-y-8">
        <div className="p-6 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] glass-card-shadow space-y-8">
          <div className="border-b border-zinc-200/80 dark:border-zinc-800 pb-6">
            <span className="font-mono-custom text-xs font-bold uppercase tracking-wider text-[#ff4314]">// WHAT I BRING TO TEAMS</span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold mt-1">Core Engineering Pillars</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="p-5 rounded-2xl inner-glass space-y-3 border border-zinc-200/60 dark:border-zinc-800">
                  <div className="w-10 h-10 rounded-xl bg-[#ff4314]/10 flex items-center justify-center text-[#ff4314]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-zinc-900 dark:text-white">{p.title}</h3>
                  <p className="font-sans text-xs text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── NEXT ACTIONS / CTA BANNER ── */}
      <section className="p-8 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] glass-card-shadow border border-[#ff4314]/30 space-y-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/30 font-mono-custom text-xs font-bold">
          <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
          AVAILABLE FOR FULL-STACK &amp; MERN ROLES
        </div>
        <h2 className="text-2xl sm:text-4xl font-display font-black text-zinc-900 dark:text-white max-w-xl mx-auto">
          Looking for a disciplined full-stack engineer who builds for production?
        </h2>
        <p className="font-sans text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto font-medium">
          Check out my featured projects, read through my technical resume, or get in touch directly.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 font-mono-custom text-xs font-bold">
          <Link
            to="/projects"
            className="px-6 py-3 rounded-full bg-[#ff4314] text-white hover:bg-[#e03a10] transition-all flex items-center gap-2 shadow-sm shadow-[#ff4314]/20"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-[#ff4314] hover:text-[#ff4314] transition-all"
          >
            <span>GET IN TOUCH ✉</span>
          </Link>
        </div>
      </section>

      {/* ── PAGE FOOTER ── */}
      <footer className="py-8 text-center">
        <div className="p-6 sm:p-8 rounded-[2rem] glass-card-shadow flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-custom text-xs text-zinc-500">
          <span>© 2026 HITKUMAR CHAUDHARY // EXPERIENCE</span>
          <Link to="/" className="text-[#ff4314] hover:underline">← BACK TO HOME</Link>
        </div>
      </footer>

    </main>
  );
}
