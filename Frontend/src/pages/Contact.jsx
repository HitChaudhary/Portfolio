import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'c79b9016-49e2-4196-9f7f-30b9b10c09f0',
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Portfolio Contact from ${formData.name}`,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-12 relative space-y-12 py-8 sm:py-12">

      {/* ── PAGE HEADER ── */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#ff4314]/30 bg-[#ff4314]/10 text-xs font-mono-custom font-bold text-[#ff4314]">
          <Mail className="w-4 h-4" />
          <span>INITIATE CONTACT</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight text-[#121214] dark:text-white uppercase">
          Let's Talk
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
          Open for Full Stack & MERN Stack Developer opportunities. Drop a message and I'll respond within 24 hours.
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ── LEFT: Contact Info ── */}
        <div className="lg:col-span-1 space-y-6">
          <div className="p-6 sm:p-8 rounded-[2rem] glass-card-shadow space-y-6">
            <div className="space-y-1">
              <span className="font-mono-custom text-xs font-bold uppercase tracking-wider text-[#ff4314]">// REACH ME AT</span>
              <h2 className="text-xl font-display font-bold">Contact Details</h2>
            </div>

            <div className="space-y-4 font-sans">
              <a href="mailto:hitchaudhary093@gmail.com"
                className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-[#ff4314]/10 flex items-center justify-center shrink-0 group-hover:bg-[#ff4314] transition-colors">
                  <Mail className="w-4 h-4 text-[#ff4314] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-mono-custom text-[10px] font-bold uppercase text-zinc-500 tracking-wider">Email</p>
                  <p className="text-sm font-semibold group-hover:text-[#ff4314] transition-colors break-all">hitchaudhary093@gmail.com</p>
                </div>
              </a>

              <a href="tel:+919328322307" className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-[#10b981]/10 flex items-center justify-center shrink-0 group-hover:bg-[#10b981] transition-colors">
                  <Phone className="w-4 h-4 text-[#10b981] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-mono-custom text-[10px] font-bold uppercase text-zinc-500 tracking-wider">Phone</p>
                  <p className="text-sm font-semibold group-hover:text-[#10b981] transition-colors">+91 93283 22307</p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-zinc-500" />
                </div>
                <div>
                  <p className="font-mono-custom text-[10px] font-bold uppercase text-zinc-500 tracking-wider">Location</p>
                  <p className="text-sm font-semibold">Idar, Gujarat, India</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="pt-2 border-t border-zinc-200/80 dark:border-zinc-800 space-y-3">
              <p className="font-mono-custom text-[10px] font-bold uppercase text-zinc-500 tracking-wider">// FIND ME ON</p>
              <div className="flex flex-col gap-2 font-mono-custom text-xs font-bold">
                <a href="https://github.com/HitChaudhary" target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-[#ff4314] hover:text-[#ff4314] transition-all flex items-center justify-between">
                  <span>GitHub</span><span>↗</span>
                </a>
                <a href="https://linkedin.com/in/hit-chaudhary" target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-[#0077b5] hover:text-[#0077b5] transition-all flex items-center justify-between">
                  <span>LinkedIn</span><span>↗</span>
                </a>
                <a href="https://www.instagram.com/hit_chaudhary_0770" target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-[#e1306c] hover:text-[#e1306c] transition-all flex items-center justify-between">
                  <span>Instagram</span><span>↗</span>
                </a>
              </div>
            </div>

            {/* Availability badge */}
            <div className="p-4 rounded-2xl inner-glass">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse shrink-0" />
                <span className="font-mono-custom text-xs font-bold text-[#10b981]">AVAILABLE FOR WORK</span>
              </div>
              <p className="font-sans text-xs opacity-70 mt-1.5">
                Open to full-time roles &amp; freelance projects
              </p>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Contact Form ── */}
        <div className="lg:col-span-2">
          <div className="p-6 sm:p-10 rounded-[2rem] glass-card-shadow h-full">
            <div className="space-y-1 mb-8">
              <span className="font-mono-custom text-xs font-bold uppercase tracking-wider text-[#ff4314]">// SEND A MESSAGE</span>
              <h2 className="text-xl font-display font-bold">I'll get back to you within 24 hours</h2>
            </div>

            {/* Success State */}
            {status === 'success' && (
              <div className="flex items-start gap-3 p-5 rounded-2xl bg-[#10b981]/10 border border-[#10b981]/30 mb-6">
                <CheckCircle className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
                <div>
                  <p className="font-mono-custom text-sm font-bold text-[#10b981]">MESSAGE SENT!</p>
                  <p className="font-sans text-xs opacity-80 mt-0.5">Thanks! I'll reply to your email within 24 hours.</p>
                </div>
              </div>
            )}

            {/* Error State */}
            {status === 'error' && (
              <div className="flex items-start gap-3 p-5 rounded-2xl bg-red-500/10 border border-red-500/30 mb-6">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-mono-custom text-sm font-bold text-red-500">SOMETHING WENT WRONG</p>
                  <p className="font-sans text-xs opacity-80 mt-0.5">Please email me directly at hitchaudhary093@gmail.com</p>
                </div>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-2">
                  <label className="font-mono-custom text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl inner-glass font-sans text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none border border-transparent focus:border-[#ff4314] transition-colors bg-transparent"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="font-mono-custom text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl inner-glass font-sans text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none border border-transparent focus:border-[#ff4314] transition-colors bg-transparent"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="font-mono-custom text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Job Opportunity / Project Collaboration / Freelance Work"
                  className="w-full px-4 py-3 rounded-xl inner-glass font-sans text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none border border-transparent focus:border-[#ff4314] transition-colors bg-transparent"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="font-mono-custom text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about the role, project, or opportunity..."
                  className="w-full px-4 py-3 rounded-xl inner-glass font-sans text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none border border-transparent focus:border-[#ff4314] transition-colors bg-transparent resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#ff4314] text-white font-mono-custom text-sm font-bold hover:bg-[#e03a10] transition-all shadow-lg shadow-[#ff4314]/20 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    <span>SENDING...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </button>

              <p className="font-mono-custom text-[10px] text-zinc-400 pt-1">
                * Required fields. Your message goes directly to my Gmail inbox.
              </p>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
