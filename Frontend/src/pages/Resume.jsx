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
              FULL-STACK DEVELOPER (MERN)
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
            Full-stack developer with 1+ year of hands-on training and project experience building and deploying web applications with JavaScript, React.js, Node.js, Express.js, MongoDB and PostgreSQL. Delivered 4+ client projects as a MERN Stack Intern and independently built three full-stack applications featuring REST APIs, JWT authentication, role-based access control and multi-tenant data isolation, with live deployments on Render and Vercel.
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
              <p className="text-zinc-600 dark:text-zinc-400 font-normal">JavaScript (ES6+), Python, TypeScript (Basic), HTML5, CSS3, SQL Fundamentals</p>
            </div>
            <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 space-y-1">
              <span className="font-bold text-zinc-900 dark:text-zinc-100">Frontend Development:</span>
              <p className="text-zinc-600 dark:text-zinc-400 font-normal">React.js, React 19 / 18, Redux Toolkit, Tailwind CSS, Responsive Web Design, Single Page Applications</p>
            </div>
            <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 space-y-1">
              <span className="font-bold text-zinc-900 dark:text-zinc-100">Backend Development:</span>
              <p className="text-zinc-600 dark:text-zinc-400 font-normal">Node.js, Express.js, REST APIs, JWT Authentication, Custom Middleware, MVC Architecture, tRPC</p>
            </div>
            <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 space-y-1">
              <span className="font-bold text-zinc-900 dark:text-zinc-100">Databases &amp; ORMs:</span>
              <p className="text-zinc-600 dark:text-zinc-400 font-normal">MongoDB, Mongoose ODM, PostgreSQL, Prisma ORM, Drizzle ORM, Relational &amp; Document Schema Modeling</p>
            </div>
            <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 space-y-1 md:col-span-2">
              <span className="font-bold text-zinc-900 dark:text-zinc-100">Developer Tools, Security &amp; Deployment:</span>
              <p className="text-zinc-600 dark:text-zinc-400 font-normal">Git, GitHub, Postman, Cloudinary Media Management, VS Code, Vercel, Render, GPS Geofencing, Zero-Trust Anti-Spoofing, Multi-Tenant Hierarchy</p>
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

          {/* Project 2: Qrfolio */}
          <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/40 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-display font-black text-zinc-900 dark:text-white">
                  Qrfolio — Dynamic QR &amp; Digital Business Profile Platform
                </h3>
                <span className="px-2 py-0.5 rounded font-mono-custom text-[10px] font-bold bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/30">
                  LIVE DEMO
                </span>
              </div>
              <div className="flex items-center gap-3 font-mono-custom text-xs font-bold">
                <a
                  href="https://qrfolio-one.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#10b981] hover:underline flex items-center gap-0.5"
                >
                  LIVE DEMO <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://github.com/HitChaudhary/Qrfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff4314] hover:underline flex items-center gap-0.5"
                >
                  GITHUB <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <p className="font-mono-custom text-xs text-[#ff4314] font-semibold">
              Tech Stack: React 18, TypeScript, Vite, Node.js, Express, MongoDB, Mongoose, JWT, Cloudinary, Tailwind CSS
            </p>

            <ul className="space-y-1.5 font-sans text-xs text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              <li>
                <strong>Branded Digital Profile:</strong> Built a platform where a business gets one branded QR code (with its logo) that opens a public page with all its links: menu, Maps, Instagram, WhatsApp and reviews.
              </li>
              <li>
                <strong>Atomic Analytics &amp; Privacy:</strong> Tracks scans and link clicks per day with atomic MongoDB updates to avoid double-counting; stores no personal data.
              </li>
              <li>
                <strong>Security Architecture:</strong> Secured with JWT, bcrypt, owner-only data access, admin role checks, Helmet, and rate limiting.
              </li>
              <li>
                <strong>Media &amp; Dashboard:</strong> Cloudinary logo upload restricted to JPG/PNG/WEBP files up to 2 MB. Built owner dashboard (manage and reorder links, download QR, analytics), admin panel for users and businesses, and a Google Review Assistant that drafts review text.
              </li>
            </ul>
          </div>

          {/* Project 3: Zubi Dubi School ERP */}
          <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/40 space-y-2.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-display font-bold text-zinc-900 dark:text-white">
                  Zubi Dubi — Multi-Tenant School Management Platform (SaaS)
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
              Tech Stack: React.js, Vite, Node.js, Express 5, PostgreSQL, Prisma ORM, JWT, Tailwind CSS, GSAP
            </p>

            <ul className="space-y-1.5 font-sans text-xs text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              <li>
                Built a multi-tenant school platform where each school has its own admin, teachers, and students, and a Super Admin approves new schools.
              </li>
              <li>
                Enforces tenant isolation by scoping every query to the schoolId in the verified JWT.
              </li>
              <li>
                4-role RBAC (Super Admin, School Admin, Teacher, Student) with bcrypt hashing and route guards.
              </li>
              <li>
                Teachers create assignments and grade submissions; live classes run through Jitsi, Zoom, or Google Meet links.
              </li>
            </ul>
          </div>

          {/* Project 4: Restaurant & Cafe Management POS */}
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

          {/* Project 5: College Management */}
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
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-2">
            <h2 className="font-mono-custom text-xs font-bold uppercase tracking-wider text-[#ff4314]">
              // PROFESSIONAL EXPERIENCE &amp; INDUSTRIAL TRAINING
            </h2>
            <span className="font-mono-custom text-[11px] text-[#10b981] font-bold">4+ CLIENT PROJECTS DELIVERED</span>
          </div>

          {/* MERN Stack Intern */}
          <div className="p-4 sm:p-5 rounded-2xl border border-[#ff4314]/30 bg-[#ff4314]/5 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-display font-black text-zinc-900 dark:text-white">
                  MERN Stack Intern — Tech Innovation
                </h3>
                <span className="px-2 py-0.5 rounded font-mono-custom text-[10px] font-bold bg-[#ff4314] text-white">
                  INTERNSHIP
                </span>
              </div>
              <span className="font-mono-custom text-xs font-bold text-zinc-500">JUN 2026 — SEP 2026</span>
            </div>

            <p className="font-mono-custom text-xs text-[#ff4314] font-semibold">
              MongoDB | Express.js | React.js | Node.js | Cloudinary
            </p>

            <ul className="space-y-1.5 font-sans text-xs text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              <li>
                Delivered 4+ client projects with the MERN stack, integrating Cloudinary media management and turning client requirements into production-ready features.
              </li>
              <li>
                Redesigned a live production client website end-to-end and received final sign-off within 1–2 revision cycles.
              </li>
              <li>
                Owned requirement gathering and delivery of the 4th client project, from discovery through deployment.
              </li>
              <li>
                Applied secure coding practices (input validation, environment-based secrets, authentication checks) on every feature, using AI-assisted tools to speed up delivery.
              </li>
            </ul>
          </div>

          {/* Industrial Training */}
          <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/40 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base font-display font-bold text-zinc-900 dark:text-white">
                  Advanced MERN Stack Development — Code Master Technology
                </h3>
                <span className="px-2 py-0.5 rounded font-mono-custom text-[10px] font-bold bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  TRAINING
                </span>
              </div>
              <span className="font-mono-custom text-xs font-bold text-zinc-500">JAN 2025 — JUN 2026</span>
            </div>
            <ul className="space-y-1.5 font-sans text-xs text-zinc-700 dark:text-zinc-300 list-disc list-inside">
              <li>
                Structured full-stack training in JavaScript, React.js, Node.js, Express.js, MongoDB and REST API design; built and deployed multiple real-world projects using MVC and scalable schema design.
              </li>
            </ul>
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
              <p className="font-medium text-zinc-600 dark:text-zinc-400">Prayag College Campus, Gujarat | CGPA: 7.4</p>
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
