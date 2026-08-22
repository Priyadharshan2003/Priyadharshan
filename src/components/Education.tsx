import React from 'react';
import { GraduationCap, CheckCircle2 } from 'lucide-react';

interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  year: string;
  highlights: string[];
}

const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Electronics and Communication Engineering',
    institution: 'Sona College of Technology',
    location: 'Salem, Tamil Nadu, India',
    year: '2025',
    highlights: ['Core focus on Digital Systems, IoT Sensors, Microcontrollers, and Embedded Web Interfaces', 'Active contributor to hardware/software hackathons and mini projects']
  },
  {
    degree: 'Academic Minor Certification',
    field: 'Minors in Cybersecurity',
    institution: 'Sona College of Technology',
    location: 'Salem, Tamil Nadu, India',
    year: '2025',
    highlights: ['Specialized coursework in Network Security, Web Application Vulnerabilities, and Encryption Protocols', 'Applied secure coding practices across React & SAP BTP web deployments']
  }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#07090e] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#38bdf8] mb-1 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-[#0070f2]" />
            Academic Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Academic Honors
          </h2>
          <p className="text-base text-[#94a3b8] mt-2">
            Engineering degree background and specialized cybersecurity minor qualification from Sona College of Technology.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION_ITEMS.map((item, idx) => (
            <div 
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-2xl glass-panel-hover border border-white/10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0070f2]/10 border border-[#0070f2]/30 flex items-center justify-center text-[#38bdf8]">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-lg text-xs font-mono font-semibold text-[#38bdf8] bg-[#0070f2]/10 border border-[#0070f2]/30">
                    Graduated {item.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#38bdf8] transition-colors mb-1">
                  {item.degree}
                </h3>
                <div className="text-sm font-semibold text-[#0070f2] mb-1">
                  {item.field}
                </div>
                <div className="text-xs font-mono text-[#94a3b8] mb-4">
                  {item.institution} • {item.location}
                </div>

                <div className="space-y-2 pt-4 border-t border-white/5">
                  {item.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#94a3b8]">
                      <CheckCircle2 className="w-4 h-4 text-[#0070f2] flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{hl}</span>
                    </div>
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
