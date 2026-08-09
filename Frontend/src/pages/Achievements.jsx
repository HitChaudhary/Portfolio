import { Award, CheckCircle, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const CheckItem = ({ children }) => (
  <li className="flex items-center gap-2">
    <CheckCircle className="w-3.5 h-3.5 text-[#10b981] shrink-0" />
    {children}
  </li>
);

export default function Achievements() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-12 relative space-y-12 py-8 sm:py-12">

      {/* ── PAGE HEADER ── */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#ff4314]/30 bg-[#ff4314]/10 text-xs font-mono-custom font-bold text-[#ff4314]">
          <Award className="w-4 h-4" />
          <span>MILESTONES &amp; ACADEMIC HIGHLIGHTS</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight text-[#121214] dark:text-white uppercase">
          ACHIEVEMENTS
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
          Key technical keynotes, 3rd-year college developments built for real campus workflows, and industry certifications.
        </p>
      </section>

      {/* ── PRESENTATIONS ── */}
      <section id="presentations" className="space-y-8">
        <div className="p-6 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] glass-card-shadow space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-zinc-200/80 dark:border-zinc-800 pb-6 gap-4">
            <div>
              <span className="font-mono-custom text-xs font-bold uppercase tracking-wider text-[#ff4314]">// 01. INDIVIDUAL COLLEGE KEYNOTE</span>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold mt-1">AI-Native Apps &amp; RAG Presentation</h2>
            </div>
            <span className="font-mono-custom text-xs text-zinc-500 bg-zinc-100 dark:bg-zinc-800/80 px-3 py-1 rounded-full">COLLEGE PRESENTATION</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl sm:text-2xl font-display font-bold">Retrieval-Augmented Generation (RAG) Architecture</h3>
              <p className="text-xs sm:text-sm opacity-80 leading-relaxed font-medium">
                Prepared and delivered an individual technical presentation detailing how Retrieval-Augmented Generation bridges vector databases with LLM context windows to power domain-specific AI workflows.
              </p>
              <div className="p-3.5 rounded-2xl inner-glass space-y-1 font-mono-custom text-xs">
                <span className="font-bold text-[#ff4314] uppercase text-[10px]">// SUPERVISED BY</span>
                <p className="font-semibold text-xs">Mr. Shaileshbhai Patel</p>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl inner-glass space-y-3 font-mono-custom text-xs">
              <div className="font-bold text-sm uppercase border-b border-zinc-200/60 dark:border-zinc-800 pb-2">// KEY TOPICS PRESENTED</div>
              <ul className="space-y-2 opacity-80 font-semibold text-xs">
                <CheckItem>Vector Embeddings &amp; Search</CheckItem>
                <CheckItem>Document Chunking Pipelines</CheckItem>
                <CheckItem>Prompt Injection Guards</CheckItem>
                <CheckItem>Real-Time Context Retrieval</CheckItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPSTONE ── */}
      <section id="academic" className="space-y-8">
        <div className="p-6 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] glass-card-shadow space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-zinc-200/80 dark:border-zinc-800 pb-6 gap-4">
            <div>
              <span className="font-mono-custom text-xs font-bold uppercase tracking-wider text-[#ff4314]">// 02. 3RD-YEAR DEGREE PROJECT</span>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold mt-1">Prayag College Portal System</h2>
            </div>
            <span className="font-mono-custom text-xs text-[#10b981] bg-[#10b981]/10 px-3 py-1 rounded-full font-bold">BUILT FOR MY OWN CAMPUS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl sm:text-2xl font-display font-bold">Solving Real Operational Campus Inquiry Friction</h3>
              <p className="text-xs sm:text-sm opacity-80 leading-relaxed font-medium">
                Designed and built a full-stack MERN application as my 3rd-year college project specifically tailored for Prayag College Campus. The platform replaces paper-based visitor tracking with a streamlined digital intake system for prospective student inquiries and trial forms.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono-custom text-xs pt-2">
                <div className="p-3.5 rounded-2xl inner-glass space-y-1">
                  <span className="font-bold text-[#ff4314] uppercase text-[10px]">// PROJECT PURPOSE</span>
                  <p className="font-semibold text-xs">Digitizing Visitor &amp; Trial Admissions</p>
                </div>
                <div className="p-3.5 rounded-2xl inner-glass space-y-1">
                  <span className="font-bold text-[#10b981] uppercase text-[10px]">// TECH STACK</span>
                  <p className="font-semibold text-xs">MongoDB, Express, React, Node.js</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl inner-glass space-y-3 font-mono-custom text-xs">
              <div className="font-bold text-sm uppercase border-b border-zinc-200/60 dark:border-zinc-800 pb-2">// FOCUSED ARCHITECTURAL SCOPE</div>
              <ul className="space-y-2 opacity-80 font-semibold text-xs">
                <CheckItem>Visitor Inquiry &amp; Trial Application Forms</CheckItem>
                <CheckItem>Focused Visitor Management UX</CheckItem>
                <CheckItem>Prayag College Custom Workflows</CheckItem>
                <CheckItem>Dynamic Public Intake Dashboard</CheckItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section id="certifications" className="space-y-8">
        <div className="p-6 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] glass-card-shadow space-y-8">
          <div className="border-b border-zinc-200/80 dark:border-zinc-800 pb-6">
            <span className="font-mono-custom text-xs font-bold uppercase tracking-wider text-[#ff4314]">// 03. INDUSTRY CERTIFICATIONS</span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold mt-1">Verified Credentials</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cert 1 */}
            <div className="p-6 rounded-2xl inner-glass space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-custom text-[10px] font-bold text-[#ff4314] bg-[#ff4314]/10 px-2.5 py-1 rounded-full">16-HOUR PROGRAM</span>
                <Award className="w-5 h-5 text-[#ff4314]" />
              </div>
              <h3 className="text-xl font-display font-bold">Generative AI Mastermind</h3>
              <p className="text-xs opacity-80 leading-relaxed font-medium">
                Completed an intensive 16-hour certification program with OutSkill focusing on LLM workflows, automated AI agents, and prompt engineering architecture.
              </p>
              <div className="pt-2 font-mono-custom text-[11px] text-zinc-400 border-t border-zinc-200/60 dark:border-zinc-800">
                ISSUED BY: OutSkill // CERTIFIED
              </div>
            </div>

            {/* Cert 2 */}
            <div className="p-6 rounded-2xl inner-glass space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-custom text-[10px] font-bold text-[#10b981] bg-[#10b981]/10 px-2.5 py-1 rounded-full">ACADEMIC DEGREE</span>
                <GraduationCap className="w-5 h-5 text-[#10b981]" />
              </div>
              <h3 className="text-xl font-display font-bold">BSc in Computer Applications &amp; IT</h3>
              <p className="text-xs opacity-80 leading-relaxed font-medium">
                Prayag College Campus // Completed coursework specializing in software development, web architecture, and relational database systems.
              </p>
              <div className="pt-2 font-mono-custom text-[11px] text-zinc-400 border-t border-zinc-200/60 dark:border-zinc-800">
                MAJOR: BSc. (CA &amp; IT)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAGE FOOTER ── */}
      <footer className="py-8 text-center">
        <div className="p-6 sm:p-8 rounded-[2rem] glass-card-shadow flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-custom text-xs text-zinc-500">
          <span>© 2026 HITKUMAR CHAUDHARY // ACHIEVEMENTS</span>
          <Link to="/" className="text-[#ff4314] hover:underline">← BACK TO MAIN PORTFOLIO</Link>
        </div>
      </footer>

    </main>
  );
}
