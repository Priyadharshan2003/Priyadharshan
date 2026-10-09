import { useState, useCallback, useEffect } from 'react';
import { compileLatex, downloadPdf as downloadPdfService, downloadTex as downloadTexService } from '../services/latexCompiler';
import { generateLatexResume } from '../lib/resume/latex-template';
import type { ResumeData } from '../data/latex-resume';

export const useResumeCompiler = (initialData: ResumeData) => {
  const [resumeData, setResumeData] = useState<ResumeData>(initialData);
  const [latexCode, setLatexCode] = useState<string>('');
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [isCompiling, setIsCompiling] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Re-generate LaTeX code whenever resumeData changes
  useEffect(() => {
    try {
      const tex = generateLatexResume(resumeData);
      setLatexCode(tex);
    } catch (err: any) {
      setError(`Template Error: ${err.message}`);
    }
  }, [resumeData]);

  const compile = useCallback(async () => {
    if (!latexCode) return;
    
    setIsCompiling(true);
    setError(null);
    
    // Revoke old URL to prevent memory leaks
    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl);
    }

    const result = await compileLatex(latexCode);
    
    if (result.error) {
      setError(result.error);
      setPdfUrl(null);
    } else if (result.pdfUrl) {
      setPdfUrl(result.pdfUrl);
    }
    
    setIsCompiling(false);
  }, [latexCode, pdfUrl]);

  const downloadPdf = useCallback(() => {
    if (pdfUrl) {
      downloadPdfService(pdfUrl, 'Priyadharshan_Resume.pdf');
    } else {
      setError('PDF not compiled yet.');
    }
  }, [pdfUrl]);

  const downloadTex = useCallback(() => {
    if (latexCode) {
      downloadTexService(latexCode, 'Priyadharshan_Resume.tex');
    }
  }, [latexCode]);

  return {
    resumeData,
    setResumeData,
    latexCode,
    pdfUrl,
    isCompiling,
    error,
    compile,
    downloadPdf,
    downloadTex
  };
};
