import React, { useState, useMemo } from 'react';
import { ExternalLink, Zap, Trophy, Bot, Sparkles, Smartphone } from 'lucide-react';
import { GithubIcon, FigmaIcon, DevfolioIcon } from './Icons';

import { PROJECTS } from '../data/projects';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects = useMemo(() => activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory), [activeCategory]);

  const renderProjectIcon = (linkType?: string) => {
    switch (linkType) {
      case 'github':
        return <GithubIcon className="w-4 h-4 text-white" />;
      case 'devfolio':
        return <DevfolioIcon className="w-4 h-4 text-[#38bdf8]" />;
      case 'figma':
        return <FigmaIcon className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4 text-[#38bdf8]" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#07090e] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Section Description */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#38bdf8] mb-1 flex items-center gap-2">
            <Bot className="w-4 h-4 text-[#0070f2]" />
            Featured Projects & Products
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects & Case Studies
          </h2>
          <p className="text-base text-[#94a3b8] mt-3 leading-relaxed">
            Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories, design community files, and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 bg-[#0f121a] p-1.5 rounded-xl border border-white/10 w-fit mb-10">
          {['All', 'Agentic AI SaaS', 'Mobile Apps', 'SAP Enterprise', 'IoT & Web'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                activeCategory === cat
                  ? 'bg-[#0070f2] text-white font-semibold shadow-md'
                  : 'text-[#94a3b8] hover:text-white hover:bg-white/5'
              }`}
            >
              {cat === 'Agentic AI SaaS' && <Bot className="w-3.5 h-3.5 text-[#38bdf8]" />}
              {cat === 'Mobile Apps' && <Smartphone className="w-3.5 h-3.5 text-[#38bdf8]" />}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className={`glass-panel p-6 sm:p-8 rounded-2xl glass-panel-hover border flex flex-col justify-between group relative overflow-hidden ${
                project.isAgenticAi 
                  ? 'border-[#0070f2]/40 bg-[#0f1422]/90 shadow-2xl shadow-[#0070f2]/10' 
                  : 'border-white/10'
              }`}
            >
              {/* Card Accent Top Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${
                project.isAgenticAi 
                  ? 'bg-gradient-to-r from-[#0070f2] via-[#38bdf8] to-purple-500' 
                  : 'bg-gradient-to-r from-[#0070f2] via-[#38bdf8] to-[#0070f2]'
              } opacity-90`} />

              <div>
                {/* Meta Header & Award Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold flex items-center gap-1.5 ${
                      project.isAgenticAi 
                        ? 'text-[#38bdf8] bg-[#0070f2]/20 border border-[#0070f2]/50' 
                        : 'text-[#38bdf8] bg-[#0070f2]/10 border border-[#0070f2]/30'
                    }`}>
                      {project.isAgenticAi && <Sparkles className="w-3 h-3 text-[#38bdf8]" />}
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold flex items-center gap-1 ${
                        project.isAgenticAi 
                          ? 'text-purple-300 bg-purple-500/10 border border-purple-500/30' 
                          : 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/30'
                      }`}>
                        {project.isAgenticAi ? <Bot className="w-3 h-3 text-purple-400" /> : <Trophy className="w-3 h-3 text-emerald-400" />}
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-[#64748b]">
                    {project.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#38bdf8] transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Architecture Highlights */}
                <div className="mb-6">
                  <div className="text-[11px] font-mono text-[#64748b] uppercase tracking-wider mb-2">System Architecture:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.architecture.map((arch, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-mono text-[#f8fafc] bg-[#141824] border border-white/5">
                        {arch}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verified Impact Metrics */}
                <div className="space-y-1.5 mb-6 pt-4 border-t border-white/5">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                      <Zap className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Badges & Direct Action Link */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className={`text-[11px] font-mono ${project.isAgenticAi ? 'text-[#38bdf8]' : 'text-[#94a3b8]'}`}>
                      #{tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-2 ${
                        project.isAgenticAi 
                          ? 'text-white bg-white/10 hover:bg-white/20 border border-white/10' 
                          : 'text-[#94a3b8] hover:text-white bg-white/5 hover:bg-white/10 border border-white/5'
                      }`}
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.linkUrl && (
                    <a 
                      href={project.linkUrl} 
                      target={project.linkUrl.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      aria-label={`${project.title} ${project.linkLabel}`}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-2 ${
                        project.isAgenticAi 
                          ? 'text-white bg-[#0070f2] hover:bg-[#0060d0] shadow-lg shadow-[#0070f2]/30' 
                          : 'text-white bg-[#0070f2]/20 hover:bg-[#0070f2] border border-[#0070f2]/40'
                      }`}
                    >
                      {renderProjectIcon(project.linkType)}
                      <span>{project.linkLabel}</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
