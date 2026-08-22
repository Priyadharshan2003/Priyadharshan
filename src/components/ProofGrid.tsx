import React from 'react';
import { Building2, Award, Terminal, CheckCircle2, Layers } from 'lucide-react';

export const ProofGrid: React.FC = () => {
  return (
    <section className="py-12 bg-[#07090e] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-[#38bdf8] mb-1 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0070f2]" />
              Enterprise Track Record
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Verified Experience & Enterprise Impact
            </h2>
          </div>
          <p className="text-sm text-[#94a3b8] max-w-md">
            Architecting mission-critical SAP integrations and web systems for global enterprise clients at Capgemini.
          </p>
        </div>

        {/* Proof Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Capgemini Role */}
          <div className="glass-panel p-6 rounded-2xl glass-panel-hover border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Building2 className="w-20 h-20 text-[#0070f2]" />
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#0070f2]/10 border border-[#0070f2]/30 flex items-center justify-center text-[#38bdf8]">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Capgemini</h3>
                <p className="text-xs text-[#38bdf8] font-mono">Senior Analyst • SAP Practice</p>
              </div>
            </div>

            <p className="text-xs text-[#94a3b8] leading-relaxed mb-4">
              Leading technical implementation of SAP BTP extensions, CAP Node.js services, and UI5 Fiori enterprise applications for Fortune 500 accounts.
            </p>

            <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-[#f8fafc] font-mono">
              <div className="flex items-center justify-between">
                <span className="text-[#94a3b8]">Focus:</span>
                <span>SAP BTP & Full Stack</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#94a3b8]">Scale:</span>
                <span>Multi-tenant Enterprise</span>
              </div>
            </div>
          </div>

          {/* Card 2: SAP Certification */}
          <div className="glass-panel p-6 rounded-2xl glass-panel-hover border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Award className="w-20 h-20 text-[#38bdf8]" />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#0070f2]/10 border border-[#0070f2]/30 flex items-center justify-center text-[#38bdf8]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">SAP Certified Developer</h3>
                <p className="text-xs text-[#38bdf8] font-mono">Backend CAP & BTP</p>
              </div>
            </div>

            <p className="text-xs text-[#94a3b8] leading-relaxed mb-4">
              Officially certified in SAP Cloud Application Programming Model (CAP), OData services, CDS data modeling, and HANA Cloud integration.
            </p>

            <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-[#f8fafc] font-mono">
              <div className="flex items-center justify-between">
                <span className="text-[#94a3b8]">Credential:</span>
                <span>SAP Global ID Verified</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#94a3b8]">Specialization:</span>
                <span>Node.js / CAP / OData V4</span>
              </div>
            </div>
          </div>

          {/* Card 3: Engineering Delivery */}
          <div className="glass-panel p-6 rounded-2xl glass-panel-hover border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Layers className="w-20 h-20 text-[#0070f2]" />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#0070f2]/10 border border-[#0070f2]/30 flex items-center justify-center text-[#38bdf8]">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Product Engineering</h3>
                <p className="text-xs text-[#38bdf8] font-mono">SAP + Modern Web</p>
              </div>
            </div>

            <p className="text-xs text-[#94a3b8] leading-relaxed mb-4">
              Bridging legacy SAP backend logic with modern React/Next.js interfaces, custom Fiori launchpads, and microfrontend architectures.
            </p>

            <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-[#f8fafc] font-mono">
              <div className="flex items-center justify-between">
                <span className="text-[#94a3b8]">Performance:</span>
                <span>40% Faster Payload Sync</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#94a3b8]">Architectures:</span>
                <span>BTP + Microfrontends</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
