import React from 'react';
import { Briefcase, Building2, Calendar, CheckCircle } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  achievements: string[];
  techStack: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Senior Analyst (A5) — SAP Consulting',
    company: 'Capgemini',
    location: 'IT Services – SAP Consulting',
    period: 'July 2025 – Present',
    type: 'Full-time',
    summary: 'Developing and enhancing SAP FIORI applications using SAPUI5 and OData services following official SAP design guidelines.',
    achievements: [
      'Design and customize enterprise SAP FIORI applications adhering strictly to SAP Fiori Horizon design guidelines.',
      'Integrate high-throughput front-end components with SAP backend systems using OData protocols.',
      'Collaborate with cross-functional teams to deliver scalable, intuitive enterprise SAP solutions.',
      'Leverage SAP BAS (Business Application Studio), SAP ABAP Cloud, and OpenUI5 for Clean Core developments.'
    ],
    techStack: ['SAPUI5', 'SAP Fiori', 'OData', 'ABAP Cloud', 'SAP BAS', 'OpenUI5', 'JavaScript']
  },
  {
    role: 'Project Management Team (PMO Operations)',
    company: 'Capgemini',
    location: 'Resource & Workforce Operations',
    period: 'February 2026 – Present',
    type: 'Corporate Operations',
    summary: 'Handled data cleaning, reporting trackers, document control, and vendor workforce resource management.',
    achievements: [
      'Managed vendor workforce handling and enterprise resource allocations using SAP Fieldglass.',
      'Maintained document repository control and data classification workflows on Microsoft SharePoint.',
      'Engineered automated data cleaning and reporting trackers using Microsoft Excel.'
    ],
    techStack: ['SAP Fieldglass', 'SharePoint', 'PMO Operations', 'Excel Trackers']
  },
  {
    role: 'React Native Developer',
    company: 'Freelance',
    location: 'Mobile & Web Development',
    period: 'January 2023 – July 2025',
    type: 'Freelance',
    summary: 'Developed "90 Degree Pride Homes" real estate mobile application and deployed responsive web apps.',
    achievements: [
      'Led front-end development of "90 Degree Pride Homes," a cross-platform mobile app featuring role-based access control (RBAC).',
      'Architected and deployed multiple full-stack web applications utilizing React.js and Expo.',
      'Applied prompt engineering techniques and Figma design systems for rapid UX iteration.'
    ],
    techStack: ['React Native', 'React.js', 'Expo', 'Figma', 'Prompt Engineering', 'iOS / Android']
  },
  {
    role: 'Frontend Developer & Content Designer',
    company: 'Platfware',
    location: 'Salem, Tamil Nadu, India',
    period: 'January 2025 – April 2025',
    type: 'Startup',
    summary: 'Designed and developed responsive web applications while managing digital content strategy.',
    achievements: [
      'Crafted intuitive, responsive user interfaces using React.js, Vite, and modern UI/UX design tools.',
      'Collaborated with cross-functional teams to align digital product interfaces with business goals.',
      'Designed and managed digital content assets to enhance brand presence and user engagement.'
    ],
    techStack: ['React.js', 'Vite', 'Figma', 'HTML/CSS', 'JavaScript', 'UI/UX Design']
  },
  {
    role: 'Flutter Developer & UI/UX Designer',
    company: 'Sona Star',
    location: 'Education Technology',
    period: 'February 2023 – July 2023',
    type: 'EdTech App',
    summary: 'Contributed to the design and development of an admission management mobile application.',
    achievements: [
      'Designed intuitive user interfaces in Figma focusing on accessibility and seamless UX workflows.',
      'Collaborated with academic stakeholders to align mobile features with institutional admission workflows.',
      'Engineered cross-platform mobile UI using Flutter and Dart.'
    ],
    techStack: ['Flutter', 'Dart', 'Figma', 'Mobile App Dev', 'iOS / Android']
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[#07090e] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#38bdf8] mb-1 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-[#0070f2]" />
            Work History
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-base text-[#94a3b8] mt-2">
            Chronological engineering roles across Capgemini corporate consulting, startup web development, and freelance mobile product engineering.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-6 before:w-0.5 before:bg-white/10">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-10 sm:pl-16 group">
              
              {/* Timeline Node Icon */}
              <div className="absolute left-0 sm:left-2 top-1.5 w-8 h-8 rounded-xl bg-[#0f121a] border border-[#0070f2] flex items-center justify-center text-[#38bdf8] group-hover:scale-110 transition-transform shadow-lg shadow-[#0070f2]/20">
                <Building2 className="w-4 h-4" />
              </div>

              {/* Card Content */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl glass-panel-hover border border-white/10">
                
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-[#0070f2] flex items-center gap-2 mt-0.5">
                      <span>{exp.company}</span>
                      <span className="text-[#64748b]">•</span>
                      <span className="text-xs font-mono text-[#94a3b8]">{exp.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8] bg-[#0070f2]/10 border border-[#0070f2]/30 px-3 py-1.5 rounded-lg w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">
                  {exp.summary}
                </p>

                {/* Key Achievements Bullet points */}
                <div className="space-y-2 mb-6">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs text-[#f8fafc]">
                      <CheckCircle className="w-4 h-4 text-[#0070f2] flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {exp.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-md text-xs font-mono text-[#94a3b8] bg-[#0f121a] border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
