export interface CompilerResponse {
  pdfUrl?: string;
  error?: string;
}

const TEXLIVE_API_URL = 'https://texlive.net/cgi-bin/latexcgi';

/**
 * Compiles LaTeX source code to a PDF using texlive.net API.
 * Uses FormData to simulate a file upload which is required by the API.
 */
export const compileLatex = async (latexCode: string): Promise<CompilerResponse> => {
  try {
    const formData = new FormData();
    const file = new File([latexCode], 'resume.tex', { type: 'text/plain' });
    formData.append('filecontents[]', file);
    formData.append('filename[]', 'resume.tex');
    formData.append('engine', 'pdflatex');
    formData.append('return', 'pdf');

    const response = await fetch(TEXLIVE_API_URL, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      return { error: `Compiler returned status ${response.status}: ${response.statusText}` };
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/pdf')) {
      const blob = await response.blob();
      const pdfUrl = URL.createObjectURL(blob);
      return { pdfUrl };
    } else {
      const textResponse = await response.text();
      return { error: `Compilation failed: ${textResponse.substring(0, 200)}...` };
    }
  } catch (err: any) {
    return { error: err.message || 'Failed to connect to compiler API' };
  }
};

export const downloadPdf = (pdfUrl: string, filename: string = 'Resume.pdf') => {
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadTex = (latexCode: string, filename: string = 'Resume.tex') => {
  const blob = new Blob([latexCode], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
