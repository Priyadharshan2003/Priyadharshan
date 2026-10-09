import React, { useState, useMemo } from 'react';
import { X, Download, FileText, RefreshCw, Code2 } from 'lucide-react';
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

  const { latex, parseError } = useMemo(() => {
    try {
      const parsed = JSON.parse(dataStr);
      return { latex: generateLatex(parsed), parseError: null };
    } catch (e: any) {
      return { latex: '', parseError: e.message };
    }
  }, [dataStr]);

  if (!isOpen) return null;

  const handleDownloadTex = () => {
    if (!latex) return;
    const blob = new Blob([latex], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.tex';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadPdf = async () => {
    if (!latex) return;
    setIsCompiling(true);
    setError(null);
    try {
      const response = await fetch('https://latexonline.cc/compile?command=pdflatex', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: latex,
      });

      if (!response.ok) {
        throw new Error('Failed to compile LaTeX to PDF. Please check syntax.');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'resume.pdf';
      a.click();
      URL.revokeObjectURL(url);
    } catch (e: any) {
      setError(e.message || 'Error compiling PDF.');
    } finally {
      setIsCompiling(false);
    }
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
              onClick={handleDownloadPdf}
              disabled={!!parseError || isCompiling}
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold text-white bg-[#0070f2] hover:bg-[#0060d0] transition-all flex items-center gap-1.5 group disabled:opacity-50"
            >
              {isCompiling ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
              {isCompiling ? 'Compiling PDF...' : 'Generate & Download PDF'}
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

        {/* Editor Body */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Left Column: JSON Editor */}
          <div className="w-full md:w-1/2 border-r border-white/10 flex flex-col bg-[#07090e]">
            <div className="px-4 py-2 bg-[#0f121a] border-b border-white/5 text-xs font-mono text-[#94a3b8] flex justify-between items-center">
              <span>RESUME DATA (JSON)</span>
              {parseError && <span className="text-red-400">Invalid JSON: {parseError}</span>}
            </div>
            <textarea
              className="flex-1 w-full p-4 bg-transparent text-[#e2e8f0] font-mono text-xs resize-none focus:outline-none leading-relaxed"
              value={dataStr}
              onChange={(e) => setDataStr(e.target.value)}
              spellCheck={false}
            />
          </div>

          {/* Right Column: LaTeX Preview */}
          <div className="w-full md:w-1/2 flex flex-col bg-[#07090e]">
            <div className="px-4 py-2 bg-[#0f121a] border-b border-white/5 text-xs font-mono text-[#94a3b8]">
              LIVE LATEX PREVIEW (JAKE GUTIERREZ TEMPLATE)
            </div>
            <div className="flex-1 overflow-auto p-4">
              <pre className="text-[#38bdf8] font-mono text-xs whitespace-pre-wrap leading-relaxed">
                {latex || 'Fix JSON errors to see the preview.'}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
