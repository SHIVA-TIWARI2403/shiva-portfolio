import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { BreakdownSection } from './components/BreakdownSection';
import { MilestonesSection } from './components/MilestonesSection';
import { SoftwareSection } from './components/SoftwareSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InteractiveTerminal } from './components/InteractiveTerminal';

export function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Global hotkey `Ctrl + ~` or backquote to open terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === '`' || e.key === '~')) {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#090909] text-[#f2efeb] font-sans antialiased selection:bg-[#e32b3c]/30 selection:text-[#ff5d65]">
      {/* Cinematic Film Grain Overlay */}
      <div className="grain-overlay" />

      {/* Editorial Navbar */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        <ProjectsSection />
        <BreakdownSection />
        <MilestonesSection />
        <SoftwareSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenTerminal={() => setTerminalOpen(true)} />

      {/* CLI Terminal Modal */}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}

export default App;
