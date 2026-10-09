import { useEffect } from 'react';
import { X, Download, FileText, RefreshCw, FileWarning, CheckCircle } from 'lucide-react';
import { resumeData } from '../data/latex-resume';
import { useResumeCompiler } from '../hooks/useResumeCompiler';

interface ResumeGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeGeneratorModal({ isOpen, onClose }: ResumeGeneratorModalProps) {
  const {
    pdfUrl,
    isCompiling,
    error,
    compile,
    downloadPdf,
    downloadTex
  } = useResumeCompiler(resumeData);

  // Compile on open if not already compiled
  useEffect(() => {
    if (isOpen && !pdfUrl && !isCompiling && !error) {
      compile();
    }
  }, [isOpen, pdfUrl, isCompiling, error, compile]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-6xl h-full max-h-[900px] bg-[#0a0d14] rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/5">
        
        {/* Header */}
        <div className="flex-none px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
              <FileText className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">ATS Resume Generator</h2>
              <div className="flex items-center gap-2 mt-1 text-xs font-mono text-[#94a3b8]">
                <span>Jake Gutierrez Template</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="text-green-400 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  ATS-Optimized
                </span>
              </div>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#94a3b8] hover:text-white hover:bg-white/10 transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Error Banner */}
        {error && (
          <div className="bg-red-500/10 border-b border-red-500/20 text-red-400 px-6 py-3 text-sm flex items-start gap-3">
            <FileWarning className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <strong className="block font-semibold mb-1">Compilation Failed</strong>
              <span className="font-mono text-xs">{error}</span>
            </div>
          </div>
        )}

        {/* Body Container */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-[#05070a]">
          
          {/* Left Panel: Metadata & Controls */}
          <div className="w-full md:w-80 border-r border-white/5 flex flex-col bg-[#0a0d14]/50">
            <div className="p-6 flex-1 overflow-y-auto custom-scrollbar">
              
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wider">Status</h3>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-sm text-[#94a3b8]">Live Compilation</span>
                  {isCompiling ? (
                    <span className="flex items-center gap-2 text-xs font-medium text-amber-400 bg-amber-400/10 px-2 py-1 rounded">
                      <RefreshCw className="w-3 h-3 animate-spin" />
                      Compiling...
                    </span>
                  ) : pdfUrl ? (
                    <span className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                      <CheckCircle className="w-3 h-3" />
                      Ready
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-[#94a3b8]">Waiting...</span>
                  )}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wider">Actions</h3>
                <div className="space-y-3">
                  <button
                    onClick={compile}
                    disabled={isCompiling}
                    className="w-full py-2.5 rounded-lg text-sm font-medium text-white bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 border border-white/10 disabled:opacity-50"
                  >
                    <RefreshCw className={`w-4 h-4 ${isCompiling ? 'animate-spin' : ''}`} />
                    Regenerate PDF
                  </button>
                  
                  <button
                    onClick={downloadTex}
                    className="w-full py-2.5 rounded-lg text-sm font-medium text-white bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 border border-white/10"
                  >
                    <FileText className="w-4 h-4 text-sky-400" />
                    Download Source (.tex)
                  </button>

                  <button
                    onClick={downloadPdf}
                    disabled={!pdfUrl || isCompiling}
                    className="w-full py-2.5 rounded-lg text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:bg-blue-500"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume (PDF)
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Why LaTeX?</h3>
                <ul className="space-y-3 text-sm text-[#94a3b8]">
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>100% Machine Readable. Passes all corporate Applicant Tracking Systems.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Pixel-perfect typesetting using the standard Jake Gutierrez template.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Plain text structure avoids rejection from automated filters.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Right Panel: PDF Viewer */}
          <div className="flex-1 relative bg-zinc-900 flex flex-col">
            <div className="px-4 py-2 bg-zinc-800 border-b border-zinc-700 flex justify-between items-center shadow-sm z-10">
              <span className="text-xs font-mono text-zinc-400">Preview: Priyadharshan_Resume.pdf</span>
              <span className="text-xs text-zinc-500">Powered by texlive.net</span>
            </div>
            
            <div className="flex-1 relative">
              {isCompiling ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900/80 backdrop-blur-sm z-20">
                  <div className="w-12 h-12 rounded-full border-4 border-blue-500/30 border-t-blue-500 animate-spin mb-4" />
                  <p className="text-blue-400 font-mono text-sm animate-pulse">Compiling LaTeX document...</p>
                </div>
              ) : null}
              
              {pdfUrl ? (
                <iframe
                  src={`${pdfUrl}#toolbar=0&navpanes=0&view=FitH`}
                  className="absolute inset-0 w-full h-full border-none"
                  title="PDF Preview"
                />
              ) : !isCompiling && !error ? (
                <div className="absolute inset-0 flex items-center justify-center text-zinc-500 font-mono text-sm">
                  Click 'Regenerate PDF' to render preview
                </div>
              ) : null}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
