import React, { useState } from 'react';
import { Linkedin, Github, Send, Copy, Check, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#06b6d4', '#10b981', '#8b5cf6']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 }
    });

    // Open native email client with pre-filled details
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Shiva,\n\n${message}\n\nBest,\n${name} (${email})`);
    setTimeout(() => {
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    }, 800);
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Initiate Transmission</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Let’s Build Something Remarkable
        </h2>
        <p className="text-slate-400 mt-2 text-sm sm:text-base">
          Have an AI venture, full-stack opening, or collaborative inquiry? My inbox is always active.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Card: Direct Contact & Socials */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Direct Box */}
          <div className="p-6 rounded-2xl bg-[#0B1120] border border-white/10 hover:border-cyan-500/30 transition-all shadow-xl group">
            <span className="text-xs font-mono text-slate-400 block mb-1">PRIMARY COORDINATE</span>
            <div className="text-lg font-bold text-white mb-3 font-mono break-all">
              {PERSONAL_INFO.email}
            </div>
            <button
              onClick={handleCopy}
              className="w-full py-2.5 px-4 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 font-mono text-xs flex items-center justify-center gap-2 hover:bg-cyan-500/10 hover:text-cyan-300 hover:border-cyan-500/30 transition-all active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>
          </div>

          {/* Social Profiles */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0B1120] border border-white/10 hover:border-white/20 transition-all group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <Github className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block">GitHub</span>
                <span className="text-sm font-semibold text-white">@SHIVA-TIWARI2403</span>
              </div>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0B1120] border border-white/10 hover:border-cyan-500/30 transition-all group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <Linkedin className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block">LinkedIn</span>
                <span className="text-sm font-semibold text-white">Satendra Tiwari</span>
              </div>
            </a>
          </div>

          {/* Location badge */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Timezone: IST (UTC+5:30)</span>
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Online &amp; Active
            </span>
          </div>
        </div>

        {/* Right Card: Quick Direct Form */}
        <div className="lg:col-span-7">
          <div className="p-7 rounded-2xl bg-[#0B1120] border border-white/10 shadow-2xl relative">
            <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              <span>Send a Message</span>
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill out the details below to dispatch an inquiry directly.
            </p>

            {submitted ? (
              <div className="p-8 text-center rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-300 space-y-2">
                <Check className="w-8 h-8 mx-auto text-emerald-400" />
                <h4 className="text-base font-bold">Transmission Prepared!</h4>
                <p className="text-xs text-slate-300">
                  Opening your default mail client with the drafted message... If it doesn't open automatically, write directly to <span className="font-mono text-emerald-300">{PERSONAL_INFO.email}</span>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message / Opportunity Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project, engineering role, or timeline..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.01] active:scale-95 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message Directly</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
