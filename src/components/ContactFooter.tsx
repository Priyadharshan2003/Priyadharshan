import React, { useState } from 'react';
import { Mail, Copy, Check, FileText, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon, GithubIcon, InstagramIcon, FigmaIcon, DribbbleIcon } from './Icons';

interface ContactFooterProps {
  onOpenResume: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const email = 'priyadharshanchandranath@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-20 bg-[#07090e] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Container */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden text-center max-w-4xl mx-auto mb-16">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#0070f2]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-[#38bdf8] bg-[#0070f2]/10 border border-[#0070f2]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for Senior Engineering Roles & Consultation
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let’s build enterprise systems <br />
              that scale together.
            </h2>

            <p className="text-base text-[#94a3b8] max-w-xl mx-auto">
              Interested in SAP BTP architecture, CAP microservices, custom Fiori launchpads, or high-performance web engineering? Get in touch directly.
            </p>

            {/* Email Copy Widget */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="glass-panel px-4 py-2.5 rounded-xl border border-white/10 text-sm font-mono text-white flex items-center gap-3 w-full sm:w-auto justify-between">
                <span className="text-[#38bdf8] truncate">{email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-[#94a3b8] hover:text-white transition-colors"
                  title="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <a
                href={`mailto:${email}`}
                className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#0070f2] hover:bg-[#0060d0] shadow-lg shadow-[#0070f2]/25 hover:shadow-[#0070f2]/40 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </a>
            </div>

            {/* Social & Portfolio Network Links */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://www.linkedin.com/in/priyadharshan-chandranath"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl text-xs font-mono text-[#94a3b8] hover:text-white bg-[#0f121a] hover:bg-[#181c26] border border-white/10 transition-all flex items-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0070f2]" />
                LinkedIn
                <ArrowUpRight className="w-3 h-3 text-[#64748b]" />
              </a>

              <a
                href="https://github.com/priyadharshan2003"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl text-xs font-mono text-[#94a3b8] hover:text-white bg-[#0f121a] hover:bg-[#181c26] border border-white/10 transition-all flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4 text-white" />
                GitHub
                <ArrowUpRight className="w-3 h-3 text-[#64748b]" />
              </a>

              <a
                href="https://www.figma.com/@prichan_uiux"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl text-xs font-mono text-[#94a3b8] hover:text-white bg-[#0f121a] hover:bg-[#181c26] border border-white/10 transition-all flex items-center gap-2"
              >
                <FigmaIcon className="w-4 h-4" />
                Figma
                <ArrowUpRight className="w-3 h-3 text-[#64748b]" />
              </a>

              <a
                href="https://dribbble.com/prichan_uiux"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl text-xs font-mono text-[#94a3b8] hover:text-white bg-[#0f121a] hover:bg-[#181c26] border border-white/10 transition-all flex items-center gap-2"
              >
                <DribbbleIcon className="w-4 h-4 text-pink-400" />
                Dribbble
                <ArrowUpRight className="w-3 h-3 text-[#64748b]" />
              </a>

              <a
                href="https://www.instagram.com/priyadharshan_chandranath"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl text-xs font-mono text-[#94a3b8] hover:text-white bg-[#0f121a] hover:bg-[#181c26] border border-white/10 transition-all flex items-center gap-2"
              >
                <InstagramIcon className="w-4 h-4 text-pink-500" />
                Instagram
                <ArrowUpRight className="w-3 h-3 text-[#64748b]" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-3.5 py-2 rounded-xl text-xs font-mono text-[#94a3b8] hover:text-white bg-[#0f121a] hover:bg-[#181c26] border border-white/10 transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#38bdf8]" />
                Resume
              </button>
            </div>

          </div>
        </div>

        {/* Footer Sub-bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748b] pt-8 border-t border-white/5">
          <div>
            © {new Date().getFullYear()} Priyadharshan Chandranath. Senior Analyst @ Capgemini.
          </div>

          <div className="flex items-center gap-4">
            <span>SAP UI5 • BTP • CAP • Full Stack</span>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Back to top ↑</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
