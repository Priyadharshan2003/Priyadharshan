import React from 'react';
import { Code2, CheckCircle, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export const OpenSource: React.FC = () => {
  return (
    <section id="open-source" className="py-20 bg-[#07090e] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#38bdf8] mb-1 flex items-center gap-2">
            <GithubIcon className="w-4 h-4 text-[#0070f2]" />
            Open Source
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
            Open Source Contributions
            <span className="text-[#ffcc00] animate-pulse">⭐</span>
          </h2>
          <p className="text-base text-[#94a3b8] mt-2">
            Contributions to public open-source ecosystems.
          </p>
        </div>

        {/* Contributions Container */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-6 before:w-0.5 before:bg-white/10">
          <div className="relative pl-10 sm:pl-16 group">
            
            {/* Timeline Node Icon */}
            <div className="absolute left-0 sm:left-2 top-1.5 w-8 h-8 rounded-xl bg-[#0f121a] border border-[#0070f2] flex items-center justify-center text-[#38bdf8] group-hover:scale-110 transition-transform shadow-lg shadow-[#0070f2]/20">
              <Code2 className="w-4 h-4" />
            </div>

            {/* Card Content */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl glass-panel-hover border border-white/10">
              
              {/* Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                    Open Source Contributor
                  </h3>
                  <div className="text-sm font-semibold text-[#0070f2] flex items-center gap-2 mt-0.5">
                    <span>DeepFirstHQ (deepfirstsearch)</span>
                    <span className="text-[#64748b]">•</span>
                    <span className="text-xs font-mono text-[#94a3b8]">Payment Authorization Ecosystem</span>
                  </div>
                </div>
              </div>

              {/* Key Achievements Bullet points */}
              <div className="space-y-3 mb-6 mt-6">
                <div className="flex items-start gap-2.5 text-xs text-[#f8fafc]">
                  <CheckCircle className="w-4 h-4 text-[#0070f2] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Merged 2 feature contributions into the DeepFirstHQ open-source payment infrastructure platform.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#f8fafc]">
                  <CheckCircle className="w-4 h-4 text-[#0070f2] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Implemented merchant-specific authorization timeout support across SDK and MCP components.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#f8fafc]">
                  <CheckCircle className="w-4 h-4 text-[#0070f2] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Added validation, automated tests, documentation, and integration enhancements.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-[#f8fafc]">
                  <CheckCircle className="w-4 h-4 text-[#0070f2] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Collaborated with maintainers through code reviews and CI/CD pipelines to deliver production-ready releases.</span>
                </div>
                
                <div className="flex items-start gap-2.5 text-xs text-[#f8fafc]">
                  <CheckCircle className="w-4 h-4 text-[#0070f2] flex-shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    Contributions shipped in official releases:
                    <div className="mt-2 ml-2 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[#64748b]">-</span>
                        <a href="https://github.com/DeepFirstHQ/deepfirstsearch/pull/21" target="_blank" rel="noreferrer" className="text-[#38bdf8] hover:underline flex items-center gap-1">
                          PR #21 <ExternalLink className="w-3 h-3" />
                        </a>
                        <span className="text-[#94a3b8]">: SDK support for merchant-specific maxTimeoutSeconds</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#64748b]">-</span>
                        <a href="https://github.com/DeepFirstHQ/deepfirstsearch/pull/29" target="_blank" rel="noreferrer" className="text-[#38bdf8] hover:underline flex items-center gap-1">
                          PR #29 <ExternalLink className="w-3 h-3" />
                        </a>
                        <span className="text-[#94a3b8]">: MCP integration for merchant-specific authorization timeouts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                {['TypeScript', 'Node.js', 'GitHub', 'CI/CD', 'Testing'].map((tech, tIdx) => (
                  <span key={tIdx} className="px-2.5 py-1 rounded-md text-xs font-mono text-[#94a3b8] bg-[#0f121a] border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
