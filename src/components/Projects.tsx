import React, { useState } from 'react';
import { ExternalLink, Zap, Trophy, Bot, Sparkles, Smartphone } from 'lucide-react';
import { GithubIcon, FigmaIcon, DevfolioIcon } from './Icons';

interface Project {
  id: string;
  title: string;
  category: 'All' | 'Agentic AI SaaS' | 'Mobile Apps' | 'SAP Enterprise' | 'IoT & Web';
  badge?: string;
  subtitle: string;
  description: string;
  architecture: string[];
  metrics: string[];
  techStack: string[];
  linkType?: 'github' | 'devfolio' | 'figma' | 'demo';
  linkUrl?: string;
  linkLabel?: string;
  isAgenticAi?: boolean;
}

const PROJECTS: Project[] = [
  // --- AGENTIC AI SAAS PROJECTS ---
  {
    id: 'nexus-agent',
    title: 'Nexus Agent — Autonomous SAP BTP Multi-Agent Orchestrator',
    badge: 'Trending Agentic AI SaaS',
    category: 'Agentic AI SaaS',
    subtitle: 'Multi-Agent Autonomous ERP Workflow Engine',
    description: 'An autonomous multi-agent SaaS platform that orchestrates SAP S/4HANA OData V4 workflows, automated ABAP code refactoring, and CAP Node.js microservice deployments. Uses autonomous agent tool-calling loops with human-in-the-loop approvals, reducing enterprise SAP migration cycles from weeks to hours.',
    architecture: ['LangGraph Multi-Agent Mesh', 'SAP BTP CAP Adapter', 'HANA Vector DB RAG', 'TypeScript / Next.js 15'],
    metrics: ['94% Autonomous Execution Rate', '$120K Est. Migration Cost Saved / Sprint', 'Zero-Trust SAP Authorization Guardrails'],
    techStack: ['agentic-ai', 'langgraph', 'sap-btp', 'vector-db', 'multi-agent', 'nextjs-15'],
    linkType: 'demo',
    linkUrl: '#contact',
    linkLabel: 'Request Agentic SaaS Demo',
    isAgenticAi: true
  },
  {
    id: 'cognitive-code-agent',
    title: 'CognitiveSaaS — Autonomous AI Code Review & Self-Healing Agent',
    badge: 'Self-Correction Agent Systems',
    category: 'Agentic AI SaaS',
    subtitle: 'Autonomous Developer Productivity Platform',
    description: 'Multi-agent developer platform that autonomously scans SAP ABAP, TypeScript, and Python codebases for Clean Core compliance, OWASP vulnerabilities, and performance anti-patterns. Features self-healing PR generation where agents create automated Git pull requests complete with unit test suites.',
    architecture: ['Self-Correction Agent Loops', 'AST Parser Engine', 'OpenAI & Claude Tool Calling', 'React 19 / Vite'],
    metrics: ['3x Faster Pull Request Approvals', '100% Automated Test Suite Generation', 'Zero False-Positive Security Guardrails'],
    techStack: ['agentic-ai', 'self-healing-code', 'llm-tool-calling', 'python', 'react-19'],
    linkType: 'github',
    linkUrl: 'https://github.com/priyadharshan2003',
    linkLabel: 'Agent Architecture Repo',
    isAgenticAi: true
  },

  // --- MOBILE & FULL STACK APPS (FROM RESUME) ---
  {
    id: '90-degree-pride-homes',
    title: '90 Degree Pride Homes',
    badge: 'Real Estate Mobile App',
    category: 'Mobile Apps',
    subtitle: 'Freelance Mobile Product',
    description: 'Led front-end development of "90 Degree Pride Homes," a cross-platform real estate mobile application featuring role-based access control (RBAC), property listing management, and intuitive UI workflows.',
    architecture: ['React Native Core', 'Expo Mobile Suite', 'Role-Based Access Control', 'Figma UI System'],
    metrics: ['Cross-Platform iOS & Android Deploy', 'Role-Based Access Security', 'Production Real Estate Client App'],
    techStack: ['react-native', 'expo', 'javascript', 'figma', 'mobile-ui'],
    linkType: 'demo',
    linkUrl: '#contact',
    linkLabel: 'Mobile App Showcase'
  },
  {
    id: 'sona-star-admission',
    title: 'Admission Management Mobile App',
    badge: 'Sona Star EdTech App',
    category: 'Mobile Apps',
    subtitle: 'Flutter & UI/UX Design',
    description: 'Contributed to the design and development of an admission management mobile application for academic stakeholders, focusing on accessibility, streamlined application workflows, and intuitive UX.',
    architecture: ['Flutter Mobile Framework', 'Dart Logic', 'Figma UI/UX Prototypes', 'Academic Workflows'],
    metrics: ['Streamlined Admission Workflow', 'Figma Accessibility Design', 'Cross-Platform iOS & Android'],
    techStack: ['flutter', 'dart', 'figma', 'ui-ux-design'],
    linkType: 'demo',
    linkUrl: '#contact',
    linkLabel: 'EdTech Case Study'
  },
  {
    id: 'platfware-web',
    title: 'Platfware Web & Digital Content Platform',
    badge: 'Platfware Startup',
    category: 'IoT & Web',
    subtitle: 'Web Development & Content Design',
    description: 'Crafted intuitive and responsive web user interfaces using React.js, Vite, and modern design tools while managing digital content strategy to align UI/UX with business goals.',
    architecture: ['React.js 18', 'Vite Bundler', 'Figma UI/UX Systems', 'HTML5 / SCSS'],
    metrics: ['Enhanced Brand Digital Presence', 'High Performance Responsive UX', 'Cross-Functional Agile Alignment'],
    techStack: ['reactjs', 'vite', 'figma', 'javascript', 'content-design'],
    linkType: 'demo',
    linkUrl: '#contact',
    linkLabel: 'Web Portal Overview'
  },

  // --- HACKATHONS & AWARD PROJECTS ---
  {
    id: 'shogi-tech',
    title: 'Shogi-Tech',
    badge: '₹2 Lakh Seed Funding',
    category: 'IoT & Web',
    subtitle: 'Hardware & Web Real-Time Tracking',
    description: 'Shogi Live Game Play Tracking is an innovative project designed to provide real-time tracking of Shogi (Japanese chess) game plays using sensors and web technologies. The project integrates hardware and software to automate the detection of Shogi piece movements on a physical board and display the live game state on a web application.',
    architecture: ['IoT Sensor Matrix', 'WebSockets Sync', 'React Dashboard', 'Node.js Core'],
    metrics: ['Received ₹2 Lakh Seed Funding', 'Automated Physical Board Detection', 'Real-Time State Sync'],
    techStack: ['react', 'nodejs', 'tailwind', 'iot-sensors'],
    linkType: 'github',
    linkUrl: 'https://github.com/Priyadharshan2003/Shogi-Live-Game-play-Tracking',
    linkLabel: 'GitHub Repo'
  },
  {
    id: 'osen-fainde',
    title: 'Osen Fainde',
    badge: 'Won Best Hardware Hack Award',
    category: 'IoT & Web',
    subtitle: 'Real-Time Air Pollution Sensor Platform',
    description: 'Developed an IoT-based device that detects air pollution levels in specific regions and alerts users in real time, potential for environmental impact. Incorporated real-time sensor data processing and a user-friendly interface, enhancing the device\'s practical application in urban environments.',
    architecture: ['IoT Air Quality Sensors', 'REST API Engine', 'SCSS Web Portal', 'Alert System'],
    metrics: ['Won Best Hardware Hack Award', 'Real-time Regional Pollution Alerts', 'High Precision Telemetry'],
    techStack: ['react', 'restapi', 'scss', 'iot-sensors'],
    linkType: 'devfolio',
    linkUrl: 'https://devfolio.co/projects/mediband-ae10',
    linkLabel: 'Devfolio Project'
  },
  {
    id: 'eco-swap',
    title: 'ECO-SWAP',
    badge: 'Presented as Mini Project',
    category: 'IoT & Web',
    subtitle: 'AI-Driven Waste Classification Platform',
    description: 'Developed an AI-driven waste classification model using deep learning to improve waste sorting efficiency, highlighting its potential for reducing contamination in the recycling process. Integrated machine learning algorithms to optimize the identification of recyclable materials, improving accuracy by over 15%.',
    architecture: ['Deep Learning Classifier', 'Next.js Frontend', 'Figma UI/UX Design System'],
    metrics: ['Improved Sorting Accuracy by +15%', 'Automated Deep Learning Classification', 'Recycling Optimization'],
    techStack: ['nextjs', 'react', 'figma', 'deep-learning'],
    linkType: 'figma',
    linkUrl: 'https://www.figma.com/community/file/1392693808056424252/ecoswap',
    linkLabel: 'Figma Design & Prototype'
  },

  // --- SAP ENTERPRISE FLAGSHIP ---
  {
    id: 'sap-btp-resource',
    title: 'SAP BTP Enterprise Resource Allocation Platform',
    badge: 'Enterprise Flagship',
    category: 'SAP Enterprise',
    subtitle: 'Capgemini Global Enterprise Solution',
    description: 'Multi-tenant SAP BTP Cloud Application Programming (CAP) platform integrated with S/4HANA OData V4 services, empowering enterprise managers to dynamically assign 5,000+ consultants with real-time utilization analytics.',
    architecture: ['SAP CAP Node.js', 'SAP UI5 Fiori Horizon', 'HANA Cloud DB', 'OData V4'],
    metrics: ['5,000+ Active Users', '40% Reduction in Allocation Latency', 'S/4HANA Real-time Sync'],
    techStack: ['sap-btp', 'node-cap', 'sap-ui5', 'odata-v4'],
    linkType: 'demo',
    linkUrl: '#contact',
    linkLabel: 'Enterprise Case Study'
  }
];

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

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

                {project.linkUrl && (
                  <a 
                    href={project.linkUrl} 
                    target={project.linkUrl.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
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
          ))}
        </div>

      </div>
    </section>
  );
};
