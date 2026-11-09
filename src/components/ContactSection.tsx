import React, { useState } from 'react';
import { Linkedin, Github, Send, Copy, Check, ArrowUpRight, MessageSquare } from 'lucide-react';
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
      colors: ['#e32b3c', '#ff5d65', '#ffffff']
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
      origin: { y: 0.6 },
      colors: ['#e32b3c', '#ff5d65', '#ffffff']
    });

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Shiva,\n\n${message}\n\nBest,\n${name} (${email})`);
    setTimeout(() => {
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    }, 800);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#e32b3c] uppercase tracking-widest mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>[06] DIRECT TRANSMISSION</span>
          </div>
          <h2 className="font-display text-5xl sm:text-7xl text-[#f2efeb] tracking-tight">
            LET'S BUILD SOMETHING EXTRAORDINARY
          </h2>
          <p className="text-sm sm:text-base text-[#a09c9a] mt-2 max-w-xl font-normal">
            Whether you have an ambitious AI project, a high-impact engineering role, or a technical inquiry—my terminal is always listening.
          </p>
        </div>

        <div className="text-xs font-mono text-[#10b981] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
          <span>STATUS: OPEN FOR NEW OPPORTUNITIES</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Coordinates & Socials */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 bg-[#101010] border border-[#292323] hover:border-[#e32b3c] transition-all">
            <span className="text-[11px] font-mono text-[#a09c9a] uppercase block mb-1">
              DIRECT COORDINATE // PRIMARY EMAIL
            </span>
            <div className="font-display text-xl sm:text-2xl text-white mb-4 tracking-wide break-all">
              {PERSONAL_INFO.email}
            </div>
            <button
              onClick={handleCopy}
              className="w-full py-2.5 px-4 bg-[#161616] border border-[#292323] hover:border-[#e32b3c] text-xs font-mono uppercase tracking-wider text-white flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#10b981]" />
                  <span className="text-[#10b981]">COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#e32b3c]" />
                  <span>COPY EMAIL ADDRESS</span>
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-5 bg-[#101010] border border-[#292323] hover:border-[#e32b3c] transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-4">
                <Github className="w-6 h-6 text-[#a09c9a] group-hover:text-white transition-colors" />
                <ArrowUpRight className="w-4 h-4 text-[#a09c9a] group-hover:text-[#e32b3c] transition-colors" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#a09c9a] uppercase block">CODE REPOSITORY</span>
                <span className="font-display text-lg text-white">@SHIVA-TIWARI</span>
              </div>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-5 bg-[#101010] border border-[#292323] hover:border-[#e32b3c] transition-all flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-4">
                <Linkedin className="w-6 h-6 text-[#e32b3c] group-hover:scale-110 transition-transform" />
                <ArrowUpRight className="w-4 h-4 text-[#a09c9a] group-hover:text-[#e32b3c] transition-colors" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#a09c9a] uppercase block">CAREER NETWORK</span>
                <span className="font-display text-lg text-white">SATENDRA T.</span>
              </div>
            </a>
          </div>

          <div className="p-4 bg-[#101010] border border-[#292323] flex items-center justify-between text-xs font-mono text-[#a09c9a]">
            <span>LOCATION: {PERSONAL_INFO.location}</span>
            <span>TIME: IST (UTC+5:30)</span>
          </div>
        </div>

        {/* Right Column: Transmission Form */}
        <div className="lg:col-span-7">
          <div className="p-8 bg-[#101010] border border-[#292323]">
            <h3 className="font-display text-2xl text-white mb-2">
              DISPATCH AN INQUIRY
            </h3>
            <p className="text-xs font-mono text-[#a09c9a] mb-6">
              Fill out the fields below to launch a direct email transmission.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-[#161616] border border-[#10b981] text-[#10b981] space-y-2 font-mono">
                <Check className="w-8 h-8 mx-auto text-[#10b981]" />
                <h4 className="text-base font-bold uppercase">TRANSMISSION DRAFTED!</h4>
                <p className="text-xs text-[#a09c9a]">
                  Opening your default mail client with the drafted message... If it doesn't open automatically, write directly to <span className="text-white font-bold">{PERSONAL_INFO.email}</span>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#a09c9a] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 bg-[#161616] border border-[#292323] text-white placeholder-[#a09c9a]/50 text-xs font-mono focus:outline-none focus:border-[#e32b3c] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#a09c9a] mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-3 bg-[#161616] border border-[#292323] text-white placeholder-[#a09c9a]/50 text-xs font-mono focus:outline-none focus:border-[#e32b3c] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#a09c9a] mb-1.5">
                    Project / Engineering Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your initiative, timeline, or engineering opportunity..."
                    className="w-full px-4 py-3 bg-[#161616] border border-[#292323] text-white placeholder-[#a09c9a]/50 text-xs font-mono focus:outline-none focus:border-[#e32b3c] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="solid-crimson-button w-full py-3.5 text-xs flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>TRANSMIT MESSAGE DIRECTLY</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
