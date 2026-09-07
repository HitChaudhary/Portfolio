import { Printer, Download, ExternalLink, Mail, Phone, MapPin, ArrowLeft, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-8">
      {/* ── Top Actions Bar (Hidden on print) ── */}
      <div className="print:hidden flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl glass-card-shadow">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono-custom text-xs font-bold text-zinc-600 dark:text-zinc-300 hover:text-[#ff4314] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO MAIN PORTFOLIO</span>
        </Link>

        <div className="flex flex-wrap items-center gap-3 font-mono-custom text-xs font-bold">
          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:border-[#ff4314] hover:text-[#ff4314] transition-all flex items-center gap-2 shadow-sm"
          >
            <Printer className="w-4 h-4" />
            <span>PRINT / SAVE PDF</span>
          </button>

          <a
            href="https://drive.google.com/file/d/1cvnbQ51SD6Pi8Se5QRZ60ymQk0UDX5Vu/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#ff4314] text-white hover:bg-[#e03a10] transition-all flex items-center gap-2 shadow-sm shadow-[#ff4314]/20"
          >
            <Download className="w-4 h-4" />
            <span>ORIGINAL DRIVE RESUME ↗</span>
          </a>
        </div>
      </div>

      {/* ── Resume Sheet Container ── */}
      <div className="bg-white text-zinc-900 dark:bg-[#111116] dark:text-zinc-100 p-6 sm:p-12 rounded-[2rem] shadow-2xl border border-zinc-200/80 dark:border-zinc-800 print:border-none print:shadow-none print:p-0 print:rounded-none space-y-8">

        {/* ── Header ── */}
        <header className="border-b border-zinc-200 dark:border-zinc-800 pb-6 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h1 className="text-3xl sm:text-4xl font-display font-black tracking-tight uppercase text-[#121214] dark:text-white">
                HITKUMAR CHAUDHARY
              </h1>
              <p className="font-mono-custom text-sm font-bold text-[#ff4314] mt-1">
                Full-Stack &amp; MERN Stack Developer // Final-Year B.Sc. (CA &amp; IT)
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono-custom text-[11px] font-bold bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/30 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              SEEKING MERN INTERNSHIP
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono-custom text-xs text-zinc-600 dark:text-zinc-400 pt-2">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#ff4314]" /> Idar, Gujarat, India
            </span>
            <span>•</span>
            <a href="mailto:hitchaudhary093@gmail.com" className="hover:text-[#ff4314] transition-colors flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#ff4314]" /> hitchaudhary093@gmail.com
            </a>
            <span>•</span>
            <a href="tel:+919328322307" className="hover:text-[#ff4314] transition-colors flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#ff4314]" /> +91 93283 22307
            </a>
            <span>•</span>
            <a href="https://github.com/HitChaudhary" target="_blank" rel="noopener noreferrer" className="text-[#ff4314] hover:underline font-bold">
              github.com/HitChaudhary ↗
            </a>
            <span>•</span>
            <a href="https://linkedin.com/in/hit-chaudhary" target="_blank" rel="noopener noreferrer" className="text-[#0077b5] hover:underline font-bold">
              linkedin.com/in/hit-chaudhary ↗
            </a>
          </div>
        </header>

        {/* ── Summary ── */}
        <section className="space-y-2">
          <h2 className="font-mono-custom text-xs font-bold uppercase tracking-wider text-[#ff4314]">
            // PROFESSIONAL SUMMARY
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
            Product-focused Full-Stack &amp; MERN Developer in final year of B.Sc. CA &amp; IT, actively seeking internship opportunities. Proven expertise building production-grade web systems, implementing zero-trust security (signed session tokens, GPS geofencing against spoofing), multi-tenant SaaS architectures with strict data isolation, and robust full-stack workflows using React 19, TypeScript, Node.js, Express, PostgreSQL, and MongoDB.
          </p>
        </section>

        {/* ── Technical Skills ── */}
        <section className="space-y-3">
          <h2 className="font-mono-custom text-xs font-bold uppercase tracking-wider text-[#ff4314]">
            // TECHNICAL SKILLS &amp; PROFICIENCIES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono-custom text-xs">
            <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 space-y-1">
              <span className="font-bold text-zinc-900 dark:text-zinc-100">Languages &amp; Core:</span>
              <p className="text-zinc-600 dark:text-zinc-400 font-normal">TypeScript, JavaScript (ES6+), HTML5, CSS3, SQL</p>
            </div>
            <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 space-y-1">
              <span className="font-bold text-zinc-900 dark:text-zinc-100">Frontend Development:</span>
              <p className="text-zinc-600 dark:text-zinc-400 font-normal">React 19, React.js, Tailwind CSS, Single Page Applications (SPA), Context API / State Management</p>
            </div>
            <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 space-y-1">
              <span className="font-bold text-zinc-900 dark:text-zinc-100">Backend &amp; APIs:</span>
              <p className="text-zinc-600 dark:text-zinc-400 font-normal">Node.js, Express.js, tRPC, RESTful APIs, WebSockets / Socket.io, JWT Authentication, Custom Middleware, MVC</p>
            </div>
            <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 space-y-1">
              <span className="font-bold text-zinc-900 dark:text-zinc-100">Databases &amp; ORMs:</span>
              <p className="text-zinc-600 dark:text-zinc-400 font-normal">PostgreSQL, Prisma ORM, MongoDB, Mongoose ODM, Relational &amp; Document Schema Modeling</p>
            </div>
            <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 space-y-1 md:col-span-2">
              <span className="font-bold text-zinc-900 dark:text-zinc-100">System Design &amp; Security Concepts:</span>
              <p className="text-zinc-600 dark:text-zinc-400 font-normal">GPS Geofencing Math &amp; Radius Validation, Cryptographic Signed Session Tokens, Anti-Spoofing Zero-Trust Verification, Multi-Tenant Hierarchy (Super Admin → Org Admin → Dept → User), Race Condition Prevention, Git, Postman, Vercel, Render</p>
            </div>
          </div>
        </section>

        {/* ── Key Featured Projects ── */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-2">
            <h2 className="font-mono-custom text-xs font-bold uppercase tracking-wider text-[#ff4314]">
              // FEATURED ENGINEERING PROJECTS
            </h2>
            <span className="font-mono-custom text-[11px] text-zinc-500">PRODUCTION &amp; SAAS WORKFLOWS</span>
          </div>

          {/* Project 1: Presenso */}
          <div className="p-4 sm:p-5 rounded-2xl border border-[#ff4314]/30 bg-[#ff4314]/5 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-display font-black text-zinc-900 dark:text-white">
                  Presenso — Presence Workforce Management Platform
                </h3>
                <span className="px-2 py-0.5 rounded font-mono-custom text-[10px] font-bold bg-[#ff4314] text-white">
                  FLAGSHIP SAAS
                </span>
              </div>
              <div className="flex items-center gap-3 font-mono-custom text-xs font-bold">
                <a
                  href="https://presenso-presence-workforce-management.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#10b981] hover:underline flex items-center gap-0.5"
                >
                  LIVE DEMO <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://github.com/HitChaudhary/Presenso-Presence-Workforce-Management-Platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff4314] hover:underline flex items-center gap-0.5"
                >
                  GITHUB <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <p className="font-mono-custom text-xs text-[#ff4314] font-semibold">
              Tech Stack: React 19, TypeScript, Node.js, Express.js, tRPC, PostgreSQL, Tailwind CSS
            </p>

            <ul className="space-y-1.5 font-sans text-xs text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              <li>
                <strong>Hardware Elimination:</strong> Replaced ₹15,000 biometric scanner devices per office by converting employees' smartphones into secure 2-second QR &amp; GPS attendance scanners with zero hardware, AMC, or installation fees.
              </li>
              <li>
                <strong>Zero-Trust Server Validation:</strong> Engineered server-side verification evaluating dynamic signed QR session tokens and browser GPS against exact office geofences. Strictly prevents GPS spoofing, remote scanning, token reuse, and concurrent race conditions.
              </li>
              <li>
                <strong>Enterprise Multi-Tenancy:</strong> Designed a 4-tier hierarchy (Super Admin → Org Admin → Departments → Employees) with complete org-level data isolation, automated attendance close-out, leave approval workflows, and live analytics dashboards.
              </li>
            </ul>
          </div>

          {/* Project 2: Zubi Dubi School ERP */}
          <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/40 space-y-2.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-display font-bold text-zinc-900 dark:text-white">
                  Zubi Dubi School ERP &amp; Learning Platform
                </h3>
                <span className="px-2 py-0.5 rounded font-mono-custom text-[10px] font-bold bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/30">
                  MOBILE-FIRST SAAS
                </span>
              </div>
              <a
                href="https://github.com/HitChaudhary/zubi-dubi-school-erp"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-custom text-xs font-bold text-[#ff4314] hover:underline flex items-center gap-0.5"
              >
                GITHUB REPO <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <p className="font-mono-custom text-xs text-zinc-500 font-semibold">
              Tech Stack: React.js, Node.js, Express.js, PostgreSQL, Prisma ORM, Tailwind CSS
            </p>

            <ul className="space-y-1.5 font-sans text-xs text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              <li>
                Architected relational institutional data models using PostgreSQL and Prisma ORM for high query performance and data integrity.
              </li>
              <li>
                Engineered secure multi-role authentication guards and tailored dashboards for Administrators, Teachers, and Students.
              </li>
            </ul>
          </div>

          {/* Project 3: Restaurant & Cafe Management POS */}
          <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/40 space-y-2.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="text-base sm:text-lg font-display font-bold text-zinc-900 dark:text-white">
                Restaurant &amp; Cafe POS Management System
              </h3>
              <a
                href="https://github.com/HitChaudhary/Restaurant-Cafe-Management"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-custom text-xs font-bold text-[#ff4314] hover:underline flex items-center gap-0.5"
              >
                GITHUB REPO <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <p className="font-mono-custom text-xs text-zinc-500 font-semibold">
              Tech Stack: React.js, Node.js, Express.js, MongoDB, Chart.js, JWT
            </p>

            <ul className="space-y-1.5 font-sans text-xs text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              <li>
                Created a dual-mode POS application supporting dine-in restaurant table billing and self-ordering cafe modes.
              </li>
              <li>
                Built a real-time Kanban kitchen queue (New, Preparing, Ready), automated GST multi-payment calculations (Cash/UPI/Card), and Chart.js daily revenue analytics.
              </li>
            </ul>
          </div>

          {/* Project 4: College Management */}
          <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/40 space-y-2.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="text-base sm:text-lg font-display font-bold text-zinc-900 dark:text-white">
                Prayag College Portal &amp; Admission Management
              </h3>
              <div className="flex items-center gap-3 font-mono-custom text-xs font-bold">
                <a
                  href="https://college-management-web.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#10b981] hover:underline flex items-center gap-0.5"
                >
                  LIVE <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://github.com/HitChaudhary/college-Management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff4314] hover:underline flex items-center gap-0.5"
                >
                  GITHUB <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <p className="font-mono-custom text-xs text-zinc-500 font-semibold">
              Tech Stack: React.js, Node.js, Express.js, MongoDB, Vercel
            </p>

            <ul className="space-y-1.5 font-sans text-xs text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              <li>
                Digitized student inquiries and visitor tracking workflows for Prayag College, replacing manual paperwork with a digital intake portal.
              </li>
            </ul>
          </div>
        </section>

        {/* ── Experience & Training ── */}
        <section className="space-y-3">
          <h2 className="font-mono-custom text-xs font-bold uppercase tracking-wider text-[#ff4314]">
            // EXPERIENCE &amp; INDUSTRIAL TRAINING
          </h2>
          <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/40 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="text-base font-display font-bold text-zinc-900 dark:text-white">
                Advanced MERN Stack Development Trainee
              </h3>
              <span className="font-mono-custom text-xs font-bold text-zinc-500">JAN 2025 — PRESENT</span>
            </div>
            <p className="font-mono-custom text-xs text-[#ff4314] font-semibold">Code Master Technology</p>
            <p className="font-sans text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
              Completed hands-on intensive training building scalable full-stack applications with modern JavaScript (ES6+), React.js, Node.js, Express.js, and MongoDB/PostgreSQL. Implemented JWT authentication patterns, REST API endpoints, MVC architecture, Agile sprints, and Postman testing suites.
            </p>
          </div>
        </section>

        {/* ── Education ── */}
        <section className="space-y-3">
          <h2 className="font-mono-custom text-xs font-bold uppercase tracking-wider text-[#ff4314]">
            // EDUCATION
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-xs">
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-sm text-zinc-900 dark:text-white">B.Sc. (CA &amp; IT) — Final Year</span>
                <span className="font-mono-custom text-[10px] text-[#10b981] font-bold">2023 — 2026</span>
              </div>
              <p className="font-medium text-zinc-600 dark:text-zinc-400">Prayag College Campus, Gujarat</p>
              <p className="text-[11px] text-zinc-500 font-mono-custom">DBMS, Web Tech, Software Engineering, Data Structures</p>
            </div>

            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-sm text-zinc-900 dark:text-white">Higher Secondary (Class XII)</span>
                <span className="font-mono-custom text-[10px] text-zinc-500 font-bold">2023</span>
              </div>
              <p className="font-medium text-zinc-600 dark:text-zinc-400">Sheth C J High School, Vadali, Gujarat</p>
              <p className="text-[11px] text-zinc-500 font-mono-custom">Score: 62% // Science &amp; General Track</p>
            </div>
          </div>
        </section>

        {/* ── Certifications & Keynotes ── */}
        <section className="space-y-3">
          <h2 className="font-mono-custom text-xs font-bold uppercase tracking-wider text-[#ff4314]">
            // CERTIFICATIONS &amp; TECHNICAL TALKS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-xs">
            <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-zinc-900 dark:text-white">Generative AI Mastermind</span>
                <span className="font-mono-custom text-[10px] text-[#ff4314] font-bold">16h CERTIFIED</span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">OutSkill // LLM workflows, automated AI agents &amp; prompt design.</p>
            </div>

            <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-zinc-900 dark:text-white">Technical Keynote: RAG Architecture</span>
                <span className="font-mono-custom text-[10px] text-[#10b981] font-bold">COLLEGE SPEAKER</span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">Prayag College // Vector databases, document chunking &amp; context pipelines.</p>
            </div>
          </div>
        </section>

      </div>

      {/* ── Page Footer ── */}
      <footer className="print:hidden text-center py-4">
        <div className="p-6 rounded-[2rem] glass-card-shadow flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-custom text-xs text-zinc-500">
          <span>© 2026 HITKUMAR CHAUDHARY // RESUME</span>
          <Link to="/" className="text-[#ff4314] hover:underline">← BACK TO HOME</Link>
        </div>
      </footer>
    </main>
  );
}
