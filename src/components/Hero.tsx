import React from 'react';
import { ArrowRight, FileText, ShieldCheck } from 'lucide-react';
import { SapArchitectureCanvas } from './SapArchitectureCanvas';
import { LinkedinIcon, GithubIcon, FigmaIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-sap-grid bg-radial-gradient">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0070f2]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#38bdf8]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authoritative Senior Engineering Identity & Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status & Stack Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-[#38bdf8] bg-[#0070f2]/10 border border-[#0070f2]/25">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070f2] animate-pulse"></span>
                Senior Analyst (A5) @ Capgemini
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#94a3b8] bg-[#0f121a] border border-white/10">
                SAP UI5 / FIORI • CAPM • ABAP RAP • React Native
              </span>
            </div>

            {/* Concise Confident Title & Subhead */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Building enterprise <br className="hidden sm:inline" />
                systems that <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#38bdf8]">scale.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#94a3b8] font-normal leading-relaxed max-w-2xl">
                I’m <strong className="text-white font-semibold">Priyadharshan Chandranath</strong>, Senior Analyst (A5) at Capgemini specializing in building enterprise-grade applications using <strong className="text-white font-semibold">SAPUI5, FIORI Elements, OData services, SAP BTP CAP, ABAP RAP</strong>, and modern full-stack web platforms.
              </p>
            </div>

            {/* Recruiter Proof Metrics Grid (Upfront Confidence) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3">
              <div className="glass-panel p-3.5 rounded-xl border border-white/5">
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#38bdf8]">A5 Level</div>
                <div className="text-[11px] text-[#94a3b8] font-medium mt-0.5">Senior Analyst</div>
              </div>

              <div className="glass-panel p-3.5 rounded-xl border border-white/5">
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#38bdf8] flex items-center gap-1">
                  <span>SAP</span>
                  <ShieldCheck className="w-4 h-4 text-[#0070f2]" />
                </div>
                <div className="text-[11px] text-[#94a3b8] font-medium mt-0.5">CAP Certified</div>
              </div>

              <div className="glass-panel p-3.5 rounded-xl border border-white/5">
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">4 Certified</div>
                <div className="text-[11px] text-[#94a3b8] font-medium mt-0.5">Capgemini & SAP</div>
              </div>

              <div className="glass-panel p-3.5 rounded-xl border border-white/5">
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#38bdf8]">Capgemini</div>
                <div className="text-[11px] text-[#94a3b8] font-medium mt-0.5">SAP Consulting</div>
              </div>
            </div>

            {/* Action Buttons (Clear & Direct) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a 
                href="#projects"
                className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#0070f2] hover:bg-[#0060d0] shadow-lg shadow-[#0070f2]/25 hover:shadow-[#0070f2]/40 transition-all flex items-center gap-2 group"
              >
                View Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button 
                onClick={onOpenResume}
                className="px-5 py-3 rounded-xl text-sm font-mono font-medium text-[#f8fafc] bg-[#0f121a] hover:bg-[#181c26] border border-white/10 hover:border-white/20 transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#38bdf8]" />
                Download Resume
              </button>

              <div className="flex items-center gap-2 pl-1">
                <a 
                  href="https://www.linkedin.com/in/priyadharshan-chandranath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl text-[#94a3b8] hover:text-white bg-[#0f121a] hover:bg-[#181c26] border border-white/10 transition-all"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0070f2]" />
                </a>

                <a 
                  href="https://github.com/priyadharshan2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl text-[#94a3b8] hover:text-white bg-[#0f121a] hover:bg-[#181c26] border border-white/10 transition-all"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4 text-white" />
                </a>

                <a 
                  href="https://www.figma.com/@prichan_uiux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl text-[#94a3b8] hover:text-white bg-[#0f121a] hover:bg-[#181c26] border border-white/10 transition-all"
                  title="Figma"
                >
                  <FigmaIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Micro Tech Tags */}
            <div className="pt-4 flex items-center gap-3 text-xs text-[#64748b] font-mono">
              <span>Stack:</span>
              <span className="text-[#94a3b8]">SAPUI5</span> •
              <span className="text-[#94a3b8]">FIORI Elements</span> •
              <span className="text-[#94a3b8]">ABAP RAP</span> •
              <span className="text-[#94a3b8]">SAP BTP CAP</span> •
              <span className="text-[#94a3b8]">React Native</span> •
              <span className="text-[#94a3b8]">Next.js</span>
            </div>

          </div>

          {/* Right Column: 1 Single Elegant Floating 3D SAP Architecture Mesh */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel p-2 rounded-2xl border border-white/10 shadow-2xl relative">
              <SapArchitectureCanvas />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
