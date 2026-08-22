import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  year: string;
  badgeCode: string;
  description: string;
  skills: string[];
}

const CERTIFICATIONS: Certification[] = [
  {
    title: 'Capgemini OCEAN Certified L1 - Application Developer - SAP - FIORI',
    issuer: 'Capgemini',
    year: '2026',
    badgeCode: 'OCEAN-L1-FIORI',
    description: 'Official Capgemini OCEAN Level 1 certification recognizing expertise in enterprise SAP FIORI application architecture, SAPUI5 guidelines, and OData backend integrations.',
    skills: ['SAP FIORI', 'SAPUI5', 'OData Integration', 'Fiori Horizon']
  },
  {
    title: 'Capgemini L2 Industry Certification - Tech & Digital',
    issuer: 'Capgemini',
    year: '2026',
    badgeCode: 'CAP-L2-TECH',
    description: 'Advanced Level 2 industry certification in modern technology, digital transformation standards, and enterprise client solution delivery.',
    skills: ['Digital Transformation', 'Enterprise Tech', 'Solution Delivery']
  },
  {
    title: 'Capgemini L1 Industry Certification - Tech & Digital',
    issuer: 'Capgemini',
    year: '2026',
    badgeCode: 'CAP-L1-TECH',
    description: 'Level 1 industry qualification validating fundamental digital engineering practices, agile methodologies, and tech solution frameworks.',
    skills: ['Digital Engineering', 'Agile Methodologies', 'Tech Foundations']
  },
  {
    title: 'SAP Certified - Backend Developer - SAP Cloud Application Programming Model (CAP)',
    issuer: 'SAP SE',
    year: '2025',
    badgeCode: 'C_CPE_CAP',
    description: 'Official global SAP certification verifying backend cloud development mastery in SAP CAP, CDS schema modeling, OData V4 services, and HANA Cloud integration.',
    skills: ['SAP CAP', 'CDS Modeling', 'Node.js', 'OData V4', 'HANA Cloud']
  }
];

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-[#07090e] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#38bdf8] mb-1 flex items-center gap-2">
            <Award className="w-4 h-4 text-[#0070f2]" />
            Official Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Industry Badges
          </h2>
          <p className="text-base text-[#94a3b8] mt-2">
            Verified SAP and Capgemini certifications in SAP FIORI, SAP BTP CAP backend development, and digital technology.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <div 
              key={idx}
              className="glass-panel p-6 rounded-2xl glass-panel-hover border border-white/10 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0070f2]/10 border border-[#0070f2]/30 flex items-center justify-center text-[#38bdf8]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold text-[#38bdf8] bg-[#0070f2]/10 border border-[#0070f2]/30">
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white group-hover:text-[#38bdf8] transition-colors mb-2 leading-snug">
                  {cert.title}
                </h3>

                <div className="text-xs font-mono text-[#0070f2] mb-3">
                  {cert.issuer} • {cert.badgeCode}
                </div>

                <p className="text-xs text-[#94a3b8] leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-2 py-0.5 rounded text-[11px] font-mono text-[#94a3b8] bg-[#0f121a] border border-white/5">
                      {skill}
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
