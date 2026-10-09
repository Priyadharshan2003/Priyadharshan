import type { ResumeData } from '../../data/latex-resume';

export const escapeLatex = (str: string): string => {
  if (!str) return '';
  return str
    .replace(/\\/g, '\\textbackslash ')
    .replace(/&/g, '\\&')
    .replace(/%/g, '\\%')
    .replace(/\$/g, '\\$')
    .replace(/#/g, '\\#')
    .replace(/_/g, '\\_')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}')
    .replace(/~/g, '\\textasciitilde ')
    .replace(/\^/g, '\\textasciicircum ');
};

const buildHeaderSection = (data: ResumeData): string => {
  const contact = [];
  if (data.personalInfo.phone) contact.push(escapeLatex(data.personalInfo.phone));
  if (data.personalInfo.email) contact.push(`\\href{mailto:${escapeLatex(data.personalInfo.email)}}{\\underline{${escapeLatex(data.personalInfo.email)}}}`);
  if (data.personalInfo.linkedin) contact.push(`\\href{https://${escapeLatex(data.personalInfo.linkedin)}}{\\underline{${escapeLatex(data.personalInfo.linkedin)}}}`);
  if (data.personalInfo.github) contact.push(`\\href{https://${escapeLatex(data.personalInfo.github)}}{\\underline{${escapeLatex(data.personalInfo.github)}}}`);

  return `\\begin{center}
  \\textbf{\\Huge \\scshape ${escapeLatex(data.personalInfo.name)}} \\\\ \\vspace{1pt}
  \\small ${contact.join(' $|$ ')}
\\end{center}`;
};

const buildSummarySection = (data: ResumeData): string => {
  if (!data.summary) return '';
  return `\\section{Professional Summary}
\\resumeSubHeadingListStart
  \\resumeItem{${escapeLatex(data.summary)}}
\\resumeSubHeadingListEnd`;
};

const buildEducationSection = (data: ResumeData): string => {
  if (!data.education || data.education.length === 0) return '';
  let tex = `\\section{Education}\n  \\resumeSubHeadingListStart\n`;
  data.education.forEach((edu) => {
    tex += `    \\resumeSubheading
      {${escapeLatex(edu.institution)}}{${escapeLatex(edu.location)}}
      {${escapeLatex(edu.degree)}}{${escapeLatex(edu.period)}}\n`;
  });
  tex += `  \\resumeSubHeadingListEnd`;
  return tex;
};

export const buildExperienceSection = (data: ResumeData): string => {
  if (!data.experience || data.experience.length === 0) return '';
  let tex = `\\section{Experience}\n  \\resumeSubHeadingListStart\n`;
  data.experience.forEach((exp) => {
    tex += `    \\resumeSubheading
      {${escapeLatex(exp.role)}}{${escapeLatex(exp.period)}}
      {${escapeLatex(exp.company)}}{${escapeLatex(exp.location)}}\n`;
    if (exp.points && exp.points.length > 0) {
      tex += `      \\resumeItemListStart\n`;
      exp.points.forEach((pt) => {
        tex += `        \\resumeItem{${escapeLatex(pt)}}\n`;
      });
      tex += `      \\resumeItemListEnd\n`;
    }
  });
  tex += `  \\resumeSubHeadingListEnd`;
  return tex;
};

export const buildOpenSourceSection = (data: ResumeData): string => {
  if (!data.openSource || data.openSource.length === 0) return '';
  let tex = `\\section{Open Source Contributions}\n  \\resumeSubHeadingListStart\n`;
  data.openSource.forEach((os) => {
    tex += `    \\resumeProjectHeading
      {\\textbf{${escapeLatex(os.organization)} (${escapeLatex(os.repository)})} $|$ \\textit{${escapeLatex(os.role)}}}{}\n`;
    
    let techLine = '';
    if (os.technologies && os.technologies.length > 0) {
      techLine = `      \\resumeItem{\\textbf{Technologies:} ${escapeLatex(os.technologies.join(', '))}}\n`;
    }

    tex += `      \\resumeItemListStart\n`;
    if (techLine) tex += techLine;

    if (os.prs && os.prs.length > 0) {
      os.prs.forEach((pr) => {
        tex += `        \\resumeItem{\\href{${escapeLatex(pr.url)}}{\\textbf{${escapeLatex(pr.prNumber)}}} - ${escapeLatex(pr.title)} [${escapeLatex(pr.status)}]}\n`;
        if (pr.contributions && pr.contributions.length > 0) {
          tex += `        \\begin{itemize}[leftmargin=0.25in]\n`;
          pr.contributions.forEach((c) => {
            tex += `          \\item \\small{${escapeLatex(c)}\\vspace{-2pt}}\n`;
          });
          tex += `        \\end{itemize}\n`;
        }
      });
    }
    tex += `      \\resumeItemListEnd\n`;
  });
  tex += `  \\resumeSubHeadingListEnd`;
  return tex;
};

export const buildProjectsSection = (data: ResumeData): string => {
  if (!data.projects || data.projects.length === 0) return '';
  let tex = `\\section{Projects}\n  \\resumeSubHeadingListStart\n`;
  data.projects.forEach((proj) => {
    const techStr = proj.technologies ? proj.technologies.join(', ') : '';
    tex += `    \\resumeProjectHeading
      {\\textbf{${escapeLatex(proj.name)}} $|$ \\textit{${escapeLatex(techStr)}}}{${escapeLatex(proj.period || '')}}\n`;
    if (proj.points && proj.points.length > 0) {
      tex += `      \\resumeItemListStart\n`;
      proj.points.forEach((pt) => {
        tex += `        \\resumeItem{${escapeLatex(pt)}}\n`;
      });
      tex += `      \\resumeItemListEnd\n`;
    }
  });
  tex += `  \\resumeSubHeadingListEnd`;
  return tex;
};

export const buildSkillsSection = (data: ResumeData): string => {
  if (!data.skills) return '';
  let tex = `\\section{Technical Skills}\n \\begin{itemize}[leftmargin=0.15in, label={}]\n    \\small{\\item{\n`;
  if (data.skills.languages) tex += `     \\textbf{Languages}{: ${escapeLatex(data.skills.languages)}} \\\\\n`;
  if (data.skills.frameworks) tex += `     \\textbf{Frameworks}{: ${escapeLatex(data.skills.frameworks)}} \\\\\n`;
  if (data.skills.tools) tex += `     \\textbf{Developer Tools}{: ${escapeLatex(data.skills.tools)}} \\\\\n`;
  tex += `    }}\n \\end{itemize}`;
  return tex;
};

const buildCertificationsSection = (data: ResumeData): string => {
  if (!data.certifications || data.certifications.length === 0) return '';
  let tex = `\\section{Certifications}\n  \\resumeSubHeadingListStart\n`;
  data.certifications.forEach((cert) => {
    tex += `    \\resumeProjectHeading
      {\\textbf{${escapeLatex(cert.title)}}}{${escapeLatex(cert.year)}}\n`;
  });
  tex += `  \\resumeSubHeadingListEnd`;
  return tex;
};

export const generateLatexResume = (data: ResumeData): string => {
  const header = `\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}
\\input{glyphtounicode}

\\pagestyle{fancy}
\\fancyhf{} % clear all header and footer fields
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

% Adjust margins
\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in}
\\addtolength{\\textheight}{1.0in}

\\urlstyle{same}

\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

% Sections formatting
\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

% Ensure that generate pdf is machine readable/ATS parsable
\\pdfgentounicode=1

%-------------------------
% Custom commands
\\newcommand{\\resumeItem}[1]{
  \\item\\small{
    {#1 \\vspace{-2pt}}
  }
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-2pt}\\item
    \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & #2 \\\\
      \\textit{\\small#3} & \\textit{\\small #4} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubSubheading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\textit{\\small#1} & \\textit{\\small #2} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeProjectHeading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\small#1 & #2 \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubItem}[1]{\\resumeItem{#1}\\vspace{-4pt}}

\\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}

%-------------------------------------------
%%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%

\\begin{document}
`;

  const sections = [
    header,
    buildHeaderSection(data),
    buildSummarySection(data),
    buildEducationSection(data),
    buildExperienceSection(data),
    buildOpenSourceSection(data),
    buildProjectsSection(data),
    buildSkillsSection(data),
    buildCertificationsSection(data),
    `\\end{document}\n`
  ];

  return sections.filter(Boolean).join('\n\n');
};
