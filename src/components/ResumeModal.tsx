import React from 'react';
import { X, Download, FileText, ShieldCheck, Mail, MapPin } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-panel w-full max-w-4xl max-h-[90vh] rounded-2xl border border-white/10 flex flex-col overflow-hidden shadow-2xl bg-[#0f121a]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#07090e]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0070f2]/20 border border-[#0070f2]/40 flex items-center justify-center text-[#38bdf8]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">PRIYADHARSHAN_CHANDRANATH_RESUME.pdf</h3>
              <p className="text-xs font-mono text-[#94a3b8]">Senior Analyst (A5) - SAP UI5 / FIORI @ Capgemini</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Resume download initiated for Priyadharshan Chandranath.");
              }}
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold text-white bg-[#0070f2] hover:bg-[#0060d0] transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Download PDF
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#94a3b8] hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Styled Executive Resume */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 text-xs sm:text-sm font-sans bg-[#0d0f17]">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">PRIYADHARSHAN CHANDRANATH</h1>
            <div className="text-[#38bdf8] font-semibold text-sm mt-1">SENIOR ANALYST (A5) - SAP UI5 / FIORI</div>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-[#94a3b8] mt-3">
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-[#0070f2]" /> priyadharshanchandranath@gmail.com</span>
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#0070f2]" /> Salem, Tamil Nadu, India</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Capgemini OCEAN & SAP Certified</span>
            </div>
          </div>

          {/* About Profile */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#38bdf8] mb-2">About Profile</h2>
            <p className="leading-relaxed text-[#94a3b8]">
              I am a Senior Analyst with expertise in SAP UI5/FIORI development and a strong foundation in front-end technologies. I specialize in building enterprise-grade applications using SAPUI5, FIORI Elements, and OData services. My experience spans both freelance and corporate environments, where I’ve contributed to mobile and web applications using React Native, MERN stack, and SAP BTP. I’m passionate about clean UI design, full-stack development, and continuously improving through hands-on learning.
            </p>
          </div>

          {/* Key Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#38bdf8] mb-2">Key Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="bg-[#141824] p-3 rounded-lg border border-white/5 space-y-1">
                <div className="text-white font-bold text-xs">Functional Skills</div>
                <div className="text-[#94a3b8] text-[11px] leading-relaxed">Business Analysis, UI/UX Design, Team Collaboration, Agile Development, Resource Management, PMO Operations</div>
              </div>
              <div className="bg-[#141824] p-3 rounded-lg border border-white/5 space-y-1">
                <div className="text-white font-bold text-xs">Technical Stack</div>
                <div className="text-[#94a3b8] text-[11px] leading-relaxed">SAPUI5, FIORI Elements, ABAP RAP, ABAP Cloud, SAP BTP CAP, Node.js, React.js, React Native, Next.js, OData</div>
              </div>
              <div className="bg-[#141824] p-3 rounded-lg border border-white/5 space-y-1">
                <div className="text-white font-bold text-xs">Tools & IDEs</div>
                <div className="text-[#94a3b8] text-[11px] leading-relaxed">VSCode, SAP Business Application Studio (BAS), WebIDE, Figma, Expo, SAP Fieldglass, SharePoint</div>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#38bdf8] mb-3">Work Experience</h2>
            
            <div className="space-y-4">
              {/* Role 1 */}
              <div className="bg-[#141824]/60 p-4 rounded-xl border border-white/5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-white font-bold gap-1">
                  <span>Senior Analyst — Capgemini</span>
                  <span className="font-mono text-xs text-[#38bdf8]">July 2025 – Present</span>
                </div>
                <div className="text-xs text-[#0070f2] font-semibold">IT Services – SAP Consulting</div>
                <ul className="list-disc list-inside text-xs text-[#94a3b8] space-y-1 leading-relaxed">
                  <td>Design and customize SAP FIORI applications following SAP's design guidelines.</td>
                  <td>Integrate front-end components with SAP backend systems using OData.</td>
                  <td>Collaborate with functional teams to deliver scalable and intuitive solutions.</td>
                </ul>
              </div>

              {/* Role 2 */}
              <div className="bg-[#141824]/60 p-4 rounded-xl border border-white/5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-white font-bold gap-1">
                  <span>Project Management Team - A5 — Capgemini</span>
                  <span className="font-mono text-xs text-[#38bdf8]">February 2026 – Present</span>
                </div>
                <div className="text-xs text-[#0070f2] font-semibold">PMO Operations</div>
                <ul className="list-disc list-inside text-xs text-[#94a3b8] space-y-1 leading-relaxed">
                  <td>Handled PMO Operations data cleaning, reporting trackers using Microsoft Excel.</td>
                  <td>Managed document control and repository management on Microsoft SharePoint.</td>
                  <td>Handled resource management and vendor workforce handling using SAP Fieldglass.</td>
                </ul>
              </div>

              {/* Role 3 */}
              <div className="bg-[#141824]/60 p-4 rounded-xl border border-white/5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-white font-bold gap-1">
                  <span>React Native Developer — Freelance</span>
                  <span className="font-mono text-xs text-[#38bdf8]">January 2023 – July 2025</span>
                </div>
                <div className="text-xs text-[#0070f2] font-semibold">Mobile & Web Development</div>
                <ul className="list-disc list-inside text-xs text-[#94a3b8] space-y-1 leading-relaxed">
                  <td>Led front-end development of "90 Degree Pride Homes," a mobile app with role-based access control.</td>
                  <td>Built and deployed web applications using React.js and Expo tools.</td>
                </ul>
              </div>

              {/* Role 4 */}
              <div className="bg-[#141824]/60 p-4 rounded-xl border border-white/5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-white font-bold gap-1">
                  <span>Frontend Developer & Content Designer — Platfware</span>
                  <span className="font-mono text-xs text-[#38bdf8]">January 2025 – April 2025</span>
                </div>
                <div className="text-xs text-[#0070f2] font-semibold">Startup – Web Development & Digital Content</div>
                <ul className="list-disc list-inside text-xs text-[#94a3b8] space-y-1 leading-relaxed">
                  <td>Crafted intuitive and responsive user interfaces using React.js and modern design tools.</td>
                  <td>Collaborated with cross-functional teams to align UI/UX with business goals.</td>
                  <td>Designed and managed digital content to enhance brand presence.</td>
                </ul>
              </div>

              {/* Role 5 */}
              <div className="bg-[#141824]/60 p-4 rounded-xl border border-white/5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-white font-bold gap-1">
                  <span>Flutter Developer & UI/UX Designer — Sona Star</span>
                  <span className="font-mono text-xs text-[#38bdf8]">February 2023 – July 2023</span>
                </div>
                <div className="text-xs text-[#0070f2] font-semibold">EdTech – Mobile App Development</div>
                <ul className="list-disc list-inside text-xs text-[#94a3b8] space-y-1 leading-relaxed">
                  <td>Designed intuitive user interfaces using Figma, focusing on accessibility and UX.</td>
                  <td>Collaborated with academic stakeholders to align app features with admission workflows.</td>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#38bdf8] mb-2">Certifications</h2>
            <div className="text-xs text-[#94a3b8] space-y-1.5 font-mono">
              <div>• <strong>2026</strong> | Capgemini OCEAN Certified L1 - Application Developer - SAP - FIORI</div>
              <div>• <strong>2026</strong> | Capgemini L2 Industry Certification - Tech & Digital</div>
              <div>• <strong>2026</strong> | Capgemini L1 Industry Certification - Tech & Digital</div>
              <div>• <strong>2025</strong> | SAP Certified - Backend Developer - SAP Cloud Application Programming Model</div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#38bdf8] mb-2">Education</h2>
            <div className="text-xs text-[#94a3b8] space-y-2">
              <div>
                <strong className="text-white">2025 | Minors in Cybersecurity</strong> — Sona College of Technology | Salem
              </div>
              <div>
                <strong className="text-white">2025 | BE Electronics and Communication Engineering</strong> — Sona College of Technology | Salem
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
