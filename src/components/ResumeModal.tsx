import React, { useState, useMemo, useRef, useEffect } from 'react';
import { X, FileText, RefreshCw, Code2 } from 'lucide-react';
import { LATEX_RESUME_DATA } from '../data/latex-resume';
import { generateLatex } from '../lib/latexGenerator';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [dataStr, setDataStr] = useState(() => JSON.stringify(LATEX_RESUME_DATA, null, 2));
  const [isCompiling, setIsCompiling] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const { latex, parseError } = useMemo(() => {
    try {
      const parsed = JSON.parse(dataStr);
      return { latex: generateLatex(parsed), parseError: null };
    } catch (e: any) {
      return { latex: '', parseError: e.message };
    }
  }, [dataStr]);

  // Compile PDF in iframe by submitting a hidden form
  const compilePdf = () => {
    if (!latex || !formRef.current || !fileInputRef.current) return;
    
    setIsCompiling(true);
    setError(null);
    
    try {
      // Create a File object from the LaTeX string
      const file = new File([latex], "resume.tex", { type: "text/plain" });
      
      // Use DataTransfer to programmatically set the file input
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      fileInputRef.current.files = dataTransfer.files;
      
      // Submit the form to the iframe target
      formRef.current.submit();
      
      // We assume it takes a few seconds, just reset loading state after a timeout
      // Since we can't reliably read iframe load event for cross-origin PDF
      setTimeout(() => setIsCompiling(false), 3000);
    } catch (err: any) {
      setError("Failed to trigger PDF compilation.");
      setIsCompiling(false);
    }
  };

  // Compile on initial open if valid
  useEffect(() => {
    if (isOpen && latex && !parseError) {
      const timer = setTimeout(() => {
        compilePdf();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDownloadTex = () => {
    if (!latex) return;
    const blob = new Blob([latex], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Priyadharshan_Resume.tex';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-panel w-full max-w-7xl h-[90vh] rounded-2xl border border-white/10 flex flex-col overflow-hidden shadow-2xl bg-[#07090e]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#0f121a]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0070f2]/20 border border-[#0070f2]/40 flex items-center justify-center text-[#38bdf8]">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">LaTeX ATS Resume Generator</h3>
              <p className="text-xs font-mono text-[#94a3b8]">Jake Gutierrez Template | ATS-First Design</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadTex}
              disabled={!!parseError}
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold text-white bg-[#141824] hover:bg-[#1f2436] border border-white/10 transition-all flex items-center gap-1.5 group disabled:opacity-50"
            >
              <FileText className="w-3.5 h-3.5 text-[#38bdf8]" />
              Download .tex
            </button>
            <button
              onClick={compilePdf}
              disabled={!!parseError || isCompiling}
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold text-white bg-[#0070f2] hover:bg-[#0060d0] transition-all flex items-center gap-1.5 group disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isCompiling ? 'animate-spin' : ''}`} />
              {isCompiling ? 'Compiling...' : 'Update PDF Preview'}
            </button>
            <div className="w-px h-6 bg-white/10 mx-1"></div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#94a3b8] hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-500/10 border-b border-red-500/20 text-red-400 px-6 py-2 text-xs font-mono flex items-center gap-2">
            <span>{error}</span>
          </div>
        )}

        {/* Hidden Form for PDF Compilation via iframe (Bypasses CORS) */}
        <form 
          ref={formRef} 
          target="pdf-preview-iframe" 
          action="https://latexonline.cc/compile?command=pdflatex" 
          method="POST" 
          encType="multipart/form-data" 
          className="hidden"
        >
          <input type="file" name="file" ref={fileInputRef} />
        </form>

        {/* Editor Body */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Left Column: JSON Editor */}
          <div className="w-full md:w-1/3 border-r border-white/10 flex flex-col bg-[#07090e]">
            <div className="px-4 py-2 bg-[#0f121a] border-b border-white/5 text-xs font-mono text-[#94a3b8] flex justify-between items-center">
              <span>RESUME DATA (JSON)</span>
              {parseError && <span className="text-red-400">Invalid JSON</span>}
            </div>
            <textarea
              className="flex-1 w-full p-4 bg-transparent text-[#e2e8f0] font-mono text-xs resize-none focus:outline-none leading-relaxed"
              value={dataStr}
              onChange={(e) => setDataStr(e.target.value)}
              spellCheck={false}
            />
          </div>

          {/* Right Column: Live PDF Preview */}
          <div className="w-full md:w-2/3 flex flex-col bg-[#141824] relative">
            <div className="px-4 py-2 bg-[#0f121a] border-b border-white/5 text-xs font-mono text-[#94a3b8] flex justify-between items-center">
              <span>LIVE PDF PREVIEW</span>
              <span className="text-[#64748b]">Powered by latexonline.cc</span>
            </div>
            <div className="flex-1 bg-white relative">
              {isCompiling && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center z-10 text-slate-800">
                  <RefreshCw className="w-8 h-8 animate-spin text-[#0070f2] mb-3" />
                  <p className="font-mono text-sm font-semibold">Compiling LaTeX...</p>
                  <p className="text-xs text-slate-500 mt-1">This usually takes 2-4 seconds.</p>
                </div>
              )}
              <iframe
                ref={iframeRef}
                name="pdf-preview-iframe"
                className="w-full h-full border-none"
                title="PDF Preview"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
