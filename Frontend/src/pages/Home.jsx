import { useEffect, useRef } from 'react';
import { GitFork, ExternalLink, MapPin, Mail, Phone } from 'lucide-react';
import BoilingCanvas from '../components/BoilingCanvas';
import Footer from '../components/Footer';

/* ─── Skill Tags ─────────────────────────── */
const Tag = ({ children }) => (
  <span className="px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/90 text-zinc-800 dark:text-zinc-200 shadow-sm hover:border-[#ff4314] transition-colors font-mono-custom text-[10px] sm:text-xs font-bold">
    {children}
  </span>
);

/* ─── Project Item ─────────────────────────── */
const ProjectItem = ({ badge, badgeColor, statusTag, title, desc, tags, link, linkLabel, details, isLast }) => (
  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start ${!isLast ? 'border-b border-zinc-200/80 dark:border-zinc-800 pb-10' : ''}`}>
    <div className="lg:col-span-5 space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono-custom text-xs font-bold border ${badgeColor}`}>
          <span>{badge}</span>
        </div>
        {statusTag && (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full font-mono-custom text-[10px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
            {statusTag}
          </span>
        )}
      </div>
      <h3 className="text-2xl sm:text-3xl font-display font-black">{title}</h3>
      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium">{desc}</p>
      <div className="flex flex-wrap gap-2 font-mono-custom text-xs pt-2">
        {tags.map((t) => (
          <span key={t} className="px-3 py-1 rounded-full bg-white/90 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-bold">
            {t}
          </span>
        ))}
      </div>
      {link && (
        <div className="pt-2">
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-xs font-mono-custom font-bold text-[#ff4314] hover:underline inline-flex items-center gap-1">
            <span>{linkLabel}</span> →
          </a>
        </div>
      )}
    </div>
    <div className="lg:col-span-7 space-y-3 font-sans text-xs">
      {details.map((d, i) => (
        <div key={i} className="p-3.5 sm:p-4 rounded-2xl inner-glass space-y-1">
          <span className={`font-mono-custom font-bold uppercase text-[10px] ${i % 2 === 0 ? 'text-[#ff4314]' : 'text-[#10b981]'}`}>{d.label}</span>
          <p className="opacity-90 font-medium text-xs sm:text-sm">{d.text}</p>
        </div>
      ))}
    </div>
  </div>
);


/* ─── Tech Stack Card ─────────────────────── */
const StackCard = ({ title, items }) => (
  <div className="p-5 sm:p-6 rounded-2xl inner-glass space-y-3">
    <div className="font-mono-custom font-bold text-sm uppercase">{title}</div>
    <ul className="space-y-2 opacity-80 font-mono-custom font-semibold text-xs">
      {items.map((item) => (
        <li key={item}>• {item}</li>
      ))}
    </ul>
  </div>
);

/* ─── Experience Item ─────────────────────── */
const ExpItem = ({ title, period, company, desc, isActive }) => (
  <div className={`relative pl-6 sm:pl-8 border-l-2 ${isActive ? 'border-[#ff4314]' : 'border-zinc-300 dark:border-zinc-800'} space-y-2`}>
    <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white dark:border-[#0a0a0c] ${isActive ? 'bg-[#ff4314]' : 'bg-zinc-300 dark:bg-zinc-700'}`} />
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
      <h3 className="text-lg sm:text-xl font-display font-bold">{title}</h3>
      <span className="font-mono-custom text-xs font-bold text-zinc-500">{period}</span>
    </div>
    {company && <p className={`text-xs sm:text-sm font-semibold ${isActive ? 'text-[#ff4314]' : 'opacity-90'}`}>{company}</p>}
    {desc && <p className="text-xs sm:text-sm opacity-80 leading-relaxed font-medium pt-1">{desc}</p>}
  </div>
);

export default function Home({ isDark }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      hero.classList.add('no-transition');
    } else {
      setTimeout(() => {
        hero.classList.add('hero-visible');
      }, 920);
    }
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-12 relative space-y-12">

      {/* ── HERO ── */}
      <section id="hero" ref={heroRef} className="hero-reveal min-h-[calc(100vh-100px)] flex flex-col justify-center items-center text-center relative py-8 sm:py-12 space-y-6">

        <div className="font-mono-custom text-xl sm:text-4xl font-bold tracking-tight opacity-90 flex items-center justify-center">
          <span>Hi! I'm</span>
          <span className="blinking-cursor" />
        </div>

        <BoilingCanvas isDark={isDark} />

        {/* Waving GIF - light mode only */}
        {!isDark && (
          <div className="flex justify-center items-center my-1">
            <img
              src="https://res.cloudinary.com/dhj96mp6v/image/upload/v1785822575/wavingDude_ojcely.gif"
              alt="Waving Character"
              className="w-28 sm:w-44 h-auto object-contain"
            />
          </div>
        )}

        <div className="max-w-2xl space-y-3 px-2">
          <h2 className="text-xl sm:text-3xl font-display font-extrabold leading-tight">
            Full Stack &amp; MERN Stack Developer
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 font-sans text-sm sm:text-lg font-medium leading-relaxed">
            Results-driven developer skilled in building scalable RESTful APIs, MVC architecture, JWT authentication, and responsive React SPAs from schema modeling through to production deployment.
          </p>
        </div>

        {/* Contact strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 font-mono-custom text-xs text-zinc-600 dark:text-zinc-400">
          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#ff4314]" /> Idar, Gujarat, India</span>
          <span>•</span>
          <a href="mailto:hitchaudhary093@gmail.com" className="hover:text-[#ff4314] transition-colors flex items-center gap-1">
            <Mail className="w-3.5 h-3.5" /> hitchaudhary093@gmail.com
          </a>
          <span>•</span>
          <a href="tel:+919328322307" className="hover:text-[#ff4314] transition-colors flex items-center gap-1">
            <Phone className="w-3.5 h-3.5" /> +91 93283 22307
          </a>
        </div>

        {/* Skill badges */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-1">
          {['React.js & Redux', 'Node.js & Express', 'PostgreSQL & MongoDB', 'JWT & REST APIs'].map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>

        {/* Social links */}
        <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-3 font-mono-custom text-xs font-bold">
          <a href="https://github.com/HitChaudhary" target="_blank" rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800/90 text-zinc-800 dark:text-zinc-200 hover:bg-[#ff4314] hover:border-[#ff4314] hover:text-white transition-all flex items-center gap-2 shadow-sm">
            <GitFork className="w-4 h-4" /> <span>GITHUB ↗</span>
          </a>
          <a href="https://linkedin.com/in/hit-chaudhary" target="_blank" rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800/90 text-zinc-800 dark:text-zinc-200 hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all flex items-center gap-2 shadow-sm">
            <ExternalLink className="w-4 h-4" /> <span>LINKEDIN ↗</span>
          </a>
        </div>


        <a href="#stack" className="pt-4 flex items-center gap-2 font-mono-custom text-xs font-bold text-zinc-500 hover:text-[#ff4314] transition-colors">
          <span className="animate-bounce">↓</span>
          <span>EXPLORE SKILLS &amp; PROJECTS</span>
        </a>
      </section>

      {/* ── TECH STACK (Skills) ── */}
      <section id="stack" className="py-6 sm:py-8 space-y-8">
        <div className="p-6 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] glass-card-shadow space-y-8">
          <div className="border-b border-zinc-200/80 dark:border-zinc-800 pb-6">
            <span className="font-mono-custom text-xs font-bold uppercase tracking-wider text-[#ff4314]">// 01. TECHNICAL SKILLS</span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold mt-1">Skills &amp; Technologies</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <StackCard title="Frontend" items={['JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Single-Page Apps (SPA)']} />
            <StackCard title="Backend & APIs" items={['Node.js & Express.js', 'Socket.io', 'MVC Architecture', 'JWT Authentication', 'Custom Middleware']} />
            <StackCard title="Databases" items={['PostgreSQL', 'Prisma ORM', 'MongoDB', 'Mongoose ODM', 'Schema Design & CRUD']} />
            <StackCard title="Tools & Methods" items={['Git & GitHub', 'Postman API Testing', 'AI-Assisted Prototyping', 'Vercel & Render Deployment']} />
          </div>
        </div>
      </section>

      {/* ── WORK (Projects) ── */}
      <section id="work" className="py-6 sm:py-8 space-y-8">
        <div className="p-6 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] glass-card-shadow space-y-8 sm:space-y-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-zinc-200/80 dark:border-zinc-800 pb-6 gap-4">
            <div>
              <span className="font-mono-custom text-xs font-bold uppercase tracking-wider text-[#ff4314]">// 02. FEATURED PROJECTS</span>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold mt-1">Full-Stack Deliverables</h2>
            </div>
            <a href="https://github.com/HitChaudhary" target="_blank" rel="noopener noreferrer"
              className="font-mono-custom text-xs text-zinc-500 hover:text-[#ff4314] transition-colors">
              VIEW ALL REPOS ON GITHUB ↗
            </a>
          </div>

          <ProjectItem
            badge="MOBILE-FIRST SAAS PLATFORM"
            badgeColor="bg-[#10b981]/10 text-[#10b981] border-[#10b981]/20"
            statusTag="🚧 IN BUILDING"
            title="Zubi Dubi School ERP"
            desc="A modern, mobile-first SaaS School ERP and Online Learning Platform powered by PostgreSQL and React. Currently features the initial landing home page and a multi-role authentication system."
            tags={['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM']}
            link="https://github.com/HitChaudhary/zubi-dubi-school-erp"
            linkLabel="VIEW REPOSITORY CODE"
            details={[
              { label: '// SAAS PLATFORM ARCHITECTURE', text: 'Architected with PostgreSQL and Prisma ORM for relational school data modeling, structured multi-role guards, and responsive mobile-first performance.' },
              { label: '// IMPLEMENTED MODULES', text: 'Includes a modern institutional landing page and a secure multi-role login system engineered for granular access control across Admins, Teachers, and Students.' },
            ]}
          />

          <ProjectItem
            badge="FEATURED MERN POS // JAN - MAY 2025"
            badgeColor="bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20"
            title="Restaurant & Cafe POS"
            desc="Dual-mode POS and order management application for dine-in restaurants and self-order cafes featuring role-based JWT auth, real-time kitchen tracking, and GST billing."
            tags={['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js']}
            link="https://github.com/HitChaudhary/Restaurant-Cafe-Management"
            linkLabel="VIEW REPOSITORY CODE"
            details={[
              { label: '// CORE HIGHLIGHTS', text: 'Built Kanban-style order board (New, Preparing, Ready), automated GST billing across Cash/UPI/Card, and designed MongoDB relational schemas for menus, staff, and transactions.' },
              { label: '// ADMIN DASHBOARD', text: 'Integrated Chart.js revenue analytics, real-time menu toggles, and top-selling item reporting for restaurant managers.' },
            ]}
          />

          <ProjectItem
            badge="CAPSTONE PROJECT // SEP 2024 - JAN 2025"
            badgeColor="bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
            title="College Management Web App"
            desc="Transformed a static college website into a dynamic platform equipped with an Admin Dashboard for real-time content management, inquiry intake, and digital admissions."
            tags={['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Vercel']}
            link="https://github.com/HitChaudhary/college-Management"
            linkLabel="VIEW REPOSITORY CODE"
            details={[
              { label: '// CAMPUS IMPACT', text: 'Engineered a digital admission portal and automated student inquiry management system, significantly reducing paper-based administrative workflows.' },
              { label: '// DEPLOYMENT', text: 'Deployed frontend to Vercel with optimized asset loading, responsive layouts, and cross-browser compatibility across all mobile devices.' },
            ]}
          />

          <ProjectItem
            badge="FULL STACK SYSTEM // 2025"
            badgeColor="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
            title="Supermarket Management System"
            desc="Full-stack supermarket software incorporating billing, inventory tracking, catalog management, and automated transaction logging."
            tags={['React.js', 'Node.js', 'Express.js', 'MongoDB']}
            link="https://github.com/HitChaudhary/Supermart-POS"
            linkLabel="VIEW REPOSITORY CODE"
            isLast
            details={[
              { label: '// BACKEND ARCHITECTURE', text: 'Designed backend RESTful API endpoints with Node.js and MongoDB database schemas for catalog tracking, stock alerts, and automated transaction logs.' },
            ]}
          />
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-6 sm:py-8 space-y-8">
        <div className="p-6 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] glass-card-shadow space-y-8 sm:space-y-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-zinc-200/80 dark:border-zinc-800 pb-6 gap-4">
            <div>
              <span className="font-mono-custom text-xs font-bold uppercase tracking-wider text-[#ff4314]">// 03. EXPERIENCE &amp; EDUCATION</span>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold mt-1">Professional Background</h2>
            </div>
            <span className="font-mono-custom text-xs text-zinc-400">QUALIFICATIONS</span>
          </div>

          <div className="space-y-8 sm:space-y-10 font-sans">
            <ExpItem
              isActive
              title="Advanced MERN Stack Development Trainee"
              period="JAN 2025 — PRESENT"
              company="Code Master Technology"
              desc="Completed advanced training in modern JavaScript (ES6+), React.js, Node.js, Express.js, and MongoDB. Gained practical experience implementing JWT authentication, Agile workflows, MVC design patterns, and Postman API testing."
            />
            <ExpItem
              title="Bachelor of Science in Computer Applications & IT (B.Sc. CA & IT)"
              period="APR 2023 — APR 2026"
              company="Prayag College Campus, Gujarat"
              desc="Relevant Coursework: Database Management Systems (DBMS), Web Technologies, Software Engineering, Data Structures, Python."
            />
            <ExpItem
              title="Higher Secondary Certificate (Class XII)"
              period="GRADE: 62%"
              company="Sheth C J High School, Vadali, Gujarat"
            />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
}
