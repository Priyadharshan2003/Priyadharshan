import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProofGrid } from './components/ProofGrid';
import { AgenticAiSection } from './components/AgenticAiSection';
import { Projects } from './components/Projects';
import { SapEcosystemSection } from './components/SapEcosystemSection';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { ContactFooter } from './components/ContactFooter';
import { ResumeModal } from './components/ResumeModal';
import { Cursor } from '@/components/ui/inverted-cursor';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090e] text-[#f8fafc] selection:bg-[#0070f2]/30 selection:text-[#38bdf8] relative overflow-x-hidden">
      {/* Global Inverted Custom Cursor */}
      <Cursor size={48} />

      {/* Global Minimal Header */}
      <Header onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <ProofGrid />
        
        <div id="agentic-ai">
          <AgenticAiSection />
        </div>

        <Projects />
        <SapEcosystemSection />
        <Experience />
        <Certifications />
        <Education />
      </main>

      {/* Minimal Footer */}
      <ContactFooter onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Resume View/Download Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}

export default App;
