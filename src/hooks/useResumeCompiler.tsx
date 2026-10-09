import { useState } from 'react';
import { usePDF } from '@react-pdf/renderer';
import { ReactPdfResume } from '../lib/resume/ReactPdfTemplate';
import type { ResumeData } from '../data/latex-resume';

export const useResumeCompiler = (initialData: ResumeData) => {
  const [resumeData, setResumeData] = useState<ResumeData>(initialData);
  
  const [instance, updateInstance] = usePDF({ 
    document: <ReactPdfResume data={resumeData} /> 
  });

  const downloadPdf = () => {
    if (instance.url) {
      const link = document.createElement('a');
      link.href = instance.url;
      link.download = 'Priyadharshan_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return {
    resumeData,
    setResumeData,
    pdfUrl: instance.url,
    isCompiling: instance.loading,
    error: instance.error ? String(instance.error) : null,
    compile: () => updateInstance(<ReactPdfResume data={resumeData} />),
    downloadPdf,
    downloadTex: () => alert("Offline generator doesn't produce .tex source.")
  };
};
