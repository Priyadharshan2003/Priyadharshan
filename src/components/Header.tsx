import React, { useState, useEffect } from 'react';
import { FileText, Mail, Menu, X, Bot } from 'lucide-react';

interface HeaderProps {
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#07090e]/90 backdrop-blur-md border-b border-white/5 py-3 shadow-2xl' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Identity & Status */}
          <a href="#" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-[#0f121a] border border-white/10 group-hover:border-[#0070f2]/40 transition-colors">
              <span className="font-mono text-sm font-bold text-[#f8fafc] group-hover:text-[#38bdf8] transition-colors">PC</span>
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#0070f2] border-2 border-[#07090e]" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#f8fafc] tracking-tight group-hover:text-[#38bdf8] transition-colors whitespace-nowrap">
                Priyadharshan Chandranath
              </div>
              <div className="text-[11px] text-[#94a3b8] flex items-center gap-1.5 font-mono whitespace-nowrap">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0"></span>
                <span>Senior Analyst @ Capgemini</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-xs xl:text-sm font-medium text-[#94a3b8]">
            <a href="#agentic-ai" className="text-[#38bdf8] font-semibold hover:text-white transition-colors flex items-center gap-1.5 whitespace-nowrap">
              <Bot className="w-3.5 h-3.5 text-[#0070f2]" />
              AI SaaS
            </a>
            <a href="#projects" className="hover:text-[#f8fafc] transition-colors whitespace-nowrap">Projects</a>
            <a href="#sap-architecture" className="hover:text-[#f8fafc] transition-colors whitespace-nowrap">SAP Architecture</a>
            <a href="#experience" className="hover:text-[#f8fafc] transition-colors whitespace-nowrap">Experience</a>
            <a href="#certifications" className="hover:text-[#f8fafc] transition-colors whitespace-nowrap">Certifications</a>
            <a href="#education" className="hover:text-[#f8fafc] transition-colors whitespace-nowrap">Education</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0">
            <button 
              onClick={onOpenResume}
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-[#94a3b8] hover:text-white bg-[#0f121a] hover:bg-[#181c26] border border-white/10 hover:border-white/20 transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 text-[#38bdf8]" />
              Resume
            </button>
            <a 
              href="#contact" 
              className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#0070f2] hover:bg-[#0060d0] shadow-lg shadow-[#0070f2]/20 hover:shadow-[#0070f2]/40 transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5" />
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#94a3b8] hover:text-white hover:bg-white/5"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0f121a] border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-4">
          <a 
            href="#agentic-ai" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-[#38bdf8] font-semibold hover:text-white py-1"
          >
            AI SaaS
          </a>
          <a 
            href="#projects" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-[#94a3b8] hover:text-white py-1"
          >
            Projects
          </a>
          <a 
            href="#sap-architecture" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-[#94a3b8] hover:text-white py-1"
          >
            SAP Architecture
          </a>
          <a 
            href="#experience" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-[#94a3b8] hover:text-white py-1"
          >
            Experience
          </a>
          <a 
            href="#certifications" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-[#94a3b8] hover:text-white py-1"
          >
            Certifications
          </a>
          <a 
            href="#education" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-[#94a3b8] hover:text-white py-1"
          >
            Education
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
              className="w-full px-4 py-2 rounded-lg text-xs font-mono font-medium text-white bg-[#181c26] border border-white/10 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#38bdf8]" />
              View Resume
            </button>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#0070f2] flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
