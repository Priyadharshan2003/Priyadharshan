import React, { useState, useEffect } from 'react';
import { X, Download, FileText, AlertCircle, CheckCircle, FileArchive } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RESUME_STYLES = [
  { id: 'NeoBrutalism', name: 'Neo Brutalism', size: '~120 KB', desc: 'Bold, high contrast, creative.' },
  { id: 'Oxford', name: 'Oxford Professional', size: '~105 KB', desc: 'Classic serif, ATS-friendly.' },
  { id: 'Bento', name: 'Minimalist Bento', size: '~115 KB', desc: 'Modern grid layout, clean.' }
];

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeStyle, setActiveStyle] = useState(RESUME_STYLES[0]);
  const [toast, setToast] = useState<{ message: string; type: 'error' | 'success' } | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  if (!isOpen) return null;

  const getPdfPath = (id: string) => `/assets/resume/Priyadharshan_Resume_${id}.pdf`;

  const handleDownload = async (id: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const path = getPdfPath(id);
    
    try {
      const res = await fetch(path, { method: 'HEAD' });
      if (!res.ok) {
        setToast({ message: `${id} PDF not generated yet. Run generation script.`, type: 'error' });
        return;
      }
      
      const link = document.createElement('a');
      link.href = path;
      link.download = `Priyadharshan_Resume_${id}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setToast({ message: 'Download started successfully!', type: 'success' });
    } catch (err) {
      console.error('Download error:', err);
      setToast({ message: 'Network error or file missing.', type: 'error' });
    }
  };

  const handleDownloadAll = async () => {
    for (const style of RESUME_STYLES) {
      await handleDownload(style.id);
      await new Promise(resolve => setTimeout(resolve, 500)); // Small delay between downloads
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-panel w-full max-w-5xl h-[85vh] rounded-2xl border border-white/10 flex flex-col overflow-hidden shadow-2xl bg-[#0f121a]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#07090e]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0070f2]/20 border border-[#0070f2]/40 flex items-center justify-center text-[#38bdf8]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Select Resume Style</h3>
              <p className="text-xs font-mono text-[#94a3b8]">3 Production-Ready Designs</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadAll}
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold text-white bg-[#141824] hover:bg-[#1f2436] border border-white/10 transition-all flex items-center gap-1.5 group"
            >
              <FileArchive className="w-3.5 h-3.5 text-[#38bdf8] group-hover:scale-110 transition-transform" />
              Download All
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#94a3b8] hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Toast Notification */}
        {toast && (
          <div className={`absolute top-20 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg text-xs font-mono flex items-center gap-2 z-50 animate-fadeIn ${toast.type === 'error' ? 'bg-red-500/90 text-white' : 'bg-emerald-500/90 text-white'}`}>
            {toast.type === 'error' ? <AlertCircle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
            {toast.message}
          </div>
        )}

        {/* Modal Body: Two Columns */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-[#0d0f17]">
          
          {/* Left Column: Styles List */}
          <div className="w-full md:w-72 border-r border-white/10 bg-[#07090e] p-4 flex flex-col gap-3 overflow-y-auto">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#94a3b8] mb-1">Templates</div>
            
            {RESUME_STYLES.map(style => (
              <div 
                key={style.id}
                onClick={() => setActiveStyle(style)}
                className={`p-3 rounded-xl border transition-all cursor-pointer group flex flex-col gap-2 relative overflow-hidden ${activeStyle.id === style.id ? 'bg-[#0070f2]/10 border-[#0070f2]/40' : 'bg-[#141824] border-white/5 hover:border-white/20'}`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-bold text-sm text-white">{style.name}</div>
                  <div className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-[#94a3b8] border border-white/10">PDF</div>
                </div>
                <div className="text-xs text-[#94a3b8]">{style.desc}</div>
                
                <div className="flex items-center justify-between mt-1 pt-2 border-t border-white/5">
                  <span className="text-[10px] font-mono text-[#94a3b8]">{style.size}</span>
                  <button 
                    onClick={(e) => handleDownload(style.id, e)}
                    className="p-1.5 rounded bg-[#0070f2] text-white hover:bg-[#0060d0] transition-colors flex items-center gap-1 group-hover:shadow-[0_0_10px_rgba(0,112,242,0.5)]"
                    aria-label={`Download ${style.name} Resume`}
                    title="Download PDF"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: PDF Preview */}
          <div className="flex-1 p-4 sm:p-6 bg-[#0a0c13] flex flex-col relative h-full">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Preview: {activeStyle.name}
              </h4>
              <button 
                onClick={(e) => handleDownload(activeStyle.id, e)}
                className="text-xs font-mono text-[#38bdf8] hover:text-[#0070f2] flex items-center gap-1 transition-colors"
              >
                <Download className="w-3 h-3" /> Direct Download
              </button>
            </div>
            
            <div className="flex-1 rounded-xl border border-white/10 bg-white overflow-hidden relative shadow-inner">
              {/* Fallback overlay if iframe fails or is loading */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 gap-3 bg-slate-50/50 pointer-events-none">
                <FileText className="w-12 h-12 text-slate-300" />
                <span className="text-sm font-medium">PDF Preview Loading...</span>
              </div>
              
              <iframe 
                src={getPdfPath(activeStyle.id) + "#view=FitH"}
                className="w-full h-full relative z-10"
                title={`${activeStyle.name} Resume Preview`}
                onError={(e) => {
                  console.error("Iframe load error:", e);
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

