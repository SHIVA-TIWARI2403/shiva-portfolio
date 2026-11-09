import React, { useState } from 'react';
import { Layers, Cpu, Database, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export const BreakdownSection: React.FC = () => {
  const [selectedShot, setSelectedShot] = useState<'toolmatrix' | 'slidecraft' | 'milo'>('toolmatrix');

  return (
    <section id="breakdown" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto border-b border-[#292323]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#e32b3c] uppercase tracking-widest mb-2">
            <span>[02] DEEP DIVE</span>
            <span>//</span>
            <span>SYSTEMS BREAKDOWN</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-[#f2efeb] tracking-tight">
            ENGINEERING BREAKDOWNS
          </h2>
          <p className="text-sm sm:text-base text-[#a09c9a] mt-2 max-w-xl font-normal">
            Peeling back the layers of real production software. Inspecting architecture pipelines, concurrency safeguards, and generative logic.
          </p>
        </div>

        {/* Shot Controls (Renando style .shot-controls) */}
        <div className="flex bg-[#101010] border border-[#292323] p-1 font-mono text-xs">
          <button
            onClick={() => setSelectedShot('toolmatrix')}
            className={`px-4 py-2 uppercase transition-all ${
              selectedShot === 'toolmatrix'
                ? 'bg-[#e32b3c] text-white font-bold'
                : 'text-[#a09c9a] hover:text-white'
            }`}
          >
            01 // ToolMatrix AI
          </button>
          <button
            onClick={() => setSelectedShot('slidecraft')}
            className={`px-4 py-2 uppercase transition-all ${
              selectedShot === 'slidecraft'
                ? 'bg-[#e32b3c] text-white font-bold'
                : 'text-[#a09c9a] hover:text-white'
            }`}
          >
            02 // SlideCraft AI
          </button>
          <button
            onClick={() => setSelectedShot('milo')}
            className={`px-4 py-2 uppercase transition-all ${
              selectedShot === 'milo'
                ? 'bg-[#e32b3c] text-white font-bold'
                : 'text-[#a09c9a] hover:text-white'
            }`}
          >
            03 // Milo Social
          </button>
        </div>
      </div>

      {/* Breakdown Display Panel */}
      <div className="bg-[#101010] border border-[#292323] p-6 sm:p-10 relative overflow-hidden">
        {selectedShot === 'toolmatrix' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 bg-[#161616] border border-[#292323] text-[#e32b3c] font-mono text-xs uppercase tracking-wider">
                FLAGSHIP AI COMPARISON ENGINE
              </div>
              <h3 className="font-display text-3xl sm:text-4xl text-white">
                4-WAY REALTIME MODEL BENCHMARKING
              </h3>
              <p className="text-sm sm:text-base text-[#a09c9a] leading-relaxed">
                Traditional directories only show static marketing text. ToolMatrix AI uses a normalized data schema with real-time API polling across 40+ multimodal models. Users can pin any four models side-by-side to compare context limits, reasoning latency, pricing tiers, and benchmark scores.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#292323] font-mono text-xs">
                <div>
                  <span className="text-[#a09c9a] block text-[10px]">DATA PIPELINE</span>
                  <span className="text-white font-bold mt-1 block">FastAPI Engine</span>
                </div>
                <div>
                  <span className="text-[#a09c9a] block text-[10px]">PARALLEL QUERIES</span>
                  <span className="text-white font-bold mt-1 block">Sub-100ms Search</span>
                </div>
                <div>
                  <span className="text-[#a09c9a] block text-[10px]">MODELS ACTIVE</span>
                  <span className="text-[#ff5d65] font-bold mt-1 block">40+ Benchmarks</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://shiva-tiwari2403.github.io/ai-tool-matrix/"
                  target="_blank"
                  rel="noreferrer"
                  className="solid-crimson-button inline-flex items-center gap-2 px-5 py-2.5 text-xs"
                >
                  <span>Experience ToolMatrix AI Live</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Architecture Graphic */}
            <div className="lg:col-span-5 bg-[#090909] border border-[#292323] p-6 space-y-3 font-mono text-xs">
              <div className="text-[#e32b3c] pb-2 border-b border-[#292323] flex justify-between">
                <span>// ARCHITECTURE PIPELINE</span>
                <span>STATUS: 200 OK</span>
              </div>
              <div className="p-3 bg-[#101010] border border-[#292323] flex items-center justify-between">
                <span>01. Real-time Model Scraping</span>
                <Zap className="w-4 h-4 text-[#ff5d65]" />
              </div>
              <div className="p-3 bg-[#101010] border border-[#292323] flex items-center justify-between">
                <span>02. Python / FastAPI Normalization</span>
                <Cpu className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="p-3 bg-[#101010] border border-[#292323] flex items-center justify-between">
                <span>03. React + Vite 4-Way Comparison</span>
                <Layers className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="p-3 bg-[#101010] border border-[#e32b3c] text-white flex items-center justify-between">
                <span>04. Instant Client Filtering</span>
                <CheckCircle2 className="w-4 h-4 text-[#e32b3c]" />
              </div>
            </div>
          </div>
        )}

        {selectedShot === 'slidecraft' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 bg-[#161616] border border-[#292323] text-[#e32b3c] font-mono text-xs uppercase tracking-wider">
                GENERATIVE PRESENTATION SUITE
              </div>
              <h3 className="font-display text-3xl sm:text-4xl text-white">
                AUTONOMOUS BENTO-TO-PPTX TRANSFORMATION
              </h3>
              <p className="text-sm sm:text-base text-[#a09c9a] leading-relaxed">
                SlideCraft AI eliminates manual slide building for academic and technical decks. It parses research prompts, extracts core definitions through Google Gemini 2.5/3.8, arranges them in Bento Grid visual blocks, and writes pure native PowerPoint XML without needing PowerPoint installed.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#292323] font-mono text-xs">
                <div>
                  <span className="text-[#a09c9a] block text-[10px]">OUTPUT FORMAT</span>
                  <span className="text-white font-bold mt-1 block">Native .PPTX Binary</span>
                </div>
                <div>
                  <span className="text-[#a09c9a] block text-[10px]">GENERATION SPEED</span>
                  <span className="text-white font-bold mt-1 block">&lt; 8 Seconds / Deck</span>
                </div>
                <div>
                  <span className="text-[#a09c9a] block text-[10px]">TRANSITIONS</span>
                  <span className="text-[#ff5d65] font-bold mt-1 block">PowerPoint Native</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://github.com/SHIVA-TIWARI2403/ai-student-ppt-maker"
                  target="_blank"
                  rel="noreferrer"
                  className="solid-crimson-button inline-flex items-center gap-2 px-5 py-2.5 text-xs"
                >
                  <span>Inspect SlideCraft AI Repo</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#090909] border border-[#292323] p-6 space-y-3 font-mono text-xs">
              <div className="text-[#e32b3c] pb-2 border-b border-[#292323] flex justify-between">
                <span>// GENERATION PIPELINE</span>
                <span>STATUS: OPERATIONAL</span>
              </div>
              <div className="p-3 bg-[#101010] border border-[#292323] flex items-center justify-between">
                <span>01. Topic Analysis &amp; Extraction</span>
                <Cpu className="w-4 h-4 text-purple-400" />
              </div>
              <div className="p-3 bg-[#101010] border border-[#292323] flex items-center justify-between">
                <span>02. Bento Layout Formatting</span>
                <Layers className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="p-3 bg-[#101010] border border-[#292323] flex items-center justify-between">
                <span>03. python-pptx Native Binary Synthesizer</span>
                <Database className="w-4 h-4 text-amber-400" />
              </div>
              <div className="p-3 bg-[#101010] border border-[#e32b3c] text-white flex items-center justify-between">
                <span>04. Downloadable Presentation File</span>
                <CheckCircle2 className="w-4 h-4 text-[#e32b3c]" />
              </div>
            </div>
          </div>
        )}

        {selectedShot === 'milo' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 bg-[#161616] border border-[#292323] text-[#e32b3c] font-mono text-xs uppercase tracking-wider">
                PRIVACY-FIRST SOCIAL PLATFORM
              </div>
              <h3 className="font-display text-3xl sm:text-4xl text-white">
                ROW LEVEL SECURITY &amp; REALTIME CHAT
              </h3>
              <p className="text-sm sm:text-base text-[#a09c9a] leading-relaxed">
                Milo allows adults to discover companions based strictly on shared hobbies. All conversations and profile discoveries are enforced at the PostgreSQL database level using strict RLS policies, ensuring zero data leakage between user sessions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#292323] font-mono text-xs">
                <div>
                  <span className="text-[#a09c9a] block text-[10px]">SECURITY LEVEL</span>
                  <span className="text-white font-bold mt-1 block">PostgreSQL RLS</span>
                </div>
                <div>
                  <span className="text-[#a09c9a] block text-[10px]">MESSAGING</span>
                  <span className="text-white font-bold mt-1 block">Supabase Realtime</span>
                </div>
                <div>
                  <span className="text-[#a09c9a] block text-[10px]">AUTHENTICATION</span>
                  <span className="text-[#ff5d65] font-bold mt-1 block">Google OAuth 2.0</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://milosathi.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className="solid-crimson-button inline-flex items-center gap-2 px-5 py-2.5 text-xs"
                >
                  <span>Visit Milo Social Hub</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#090909] border border-[#292323] p-6 space-y-3 font-mono text-xs">
              <div className="text-[#e32b3c] pb-2 border-b border-[#292323] flex justify-between">
                <span>// SECURITY &amp; REALTIME PIPELINE</span>
                <span>STATUS: SECURE</span>
              </div>
              <div className="p-3 bg-[#101010] border border-[#292323] flex items-center justify-between">
                <span>01. OAuth 2.0 Authentication</span>
                <Zap className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="p-3 bg-[#101010] border border-[#292323] flex items-center justify-between">
                <span>02. PostgreSQL RLS Isolation</span>
                <Database className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="p-3 bg-[#101010] border border-[#292323] flex items-center justify-between">
                <span>03. WebSocket Realtime Sync</span>
                <Layers className="w-4 h-4 text-amber-400" />
              </div>
              <div className="p-3 bg-[#101010] border border-[#e32b3c] text-white flex items-center justify-between">
                <span>04. Netlify CDN Edge Deploy</span>
                <CheckCircle2 className="w-4 h-4 text-[#e32b3c]" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
