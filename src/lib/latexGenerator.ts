export function generateLatex(data: any): string {
  const escapeLatex = (str: string) => {
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

  const contact = [];
  if (data.header.phone) contact.push(escapeLatex(data.header.phone));
  if (data.header.email) contact.push(`\\href{mailto:${escapeLatex(data.header.email)}}{\\underline{${escapeLatex(data.header.email)}}}`);
  if (data.header.linkedin) contact.push(`\\href{https://${escapeLatex(data.header.linkedin)}}{\\underline{${escapeLatex(data.header.linkedin)}}}`);
  if (data.header.github) contact.push(`\\href{https://${escapeLatex(data.header.github)}}{\\underline{${escapeLatex(data.header.github)}}}`);

  let tex = header;
  tex += `\n\\begin{center}\n`;
  tex += `  \\textbf{\\Huge \\scshape ${escapeLatex(data.header.name)}} \\\\ \\vspace{1pt}\n`;
  tex += `  \\small ${contact.join(' $|$ ')}\n`;
  tex += `\\end{center}\n\n`;

  if (data.about) {
    tex += `\\section{Professional Summary}\n`;
    tex += `\\resumeSubHeadingListStart\n`;
    tex += `  \\resumeItem{${escapeLatex(data.about)}}\n`;
    tex += `\\resumeSubHeadingListEnd\n\n`;
  }

  if (data.education && data.education.length > 0) {
    tex += `\\section{Education}\n`;
    tex += `  \\resumeSubHeadingListStart\n`;
    data.education.forEach((edu: any) => {
      tex += `    \\resumeSubheading\n`;
      tex += `      {${escapeLatex(edu.institution)}}{${escapeLatex(edu.location)}}\n`;
      tex += `      {${escapeLatex(edu.degree)}}{${escapeLatex(edu.period)}}\n`;
    });
    tex += `  \\resumeSubHeadingListEnd\n\n`;
  }

  if (data.experience && data.experience.length > 0) {
    tex += `\\section{Experience}\n`;
    tex += `  \\resumeSubHeadingListStart\n`;
    data.experience.forEach((exp: any) => {
      tex += `    \\resumeSubheading\n`;
      tex += `      {${escapeLatex(exp.role)}}{${escapeLatex(exp.period)}}\n`;
      tex += `      {${escapeLatex(exp.company)}}{${escapeLatex(exp.location)}}\n`;
      if (exp.points && exp.points.length > 0) {
        tex += `      \\resumeItemListStart\n`;
        exp.points.forEach((pt: string) => {
          tex += `        \\resumeItem{${escapeLatex(pt)}}\n`;
        });
        tex += `      \\resumeItemListEnd\n`;
      }
    });
    tex += `  \\resumeSubHeadingListEnd\n\n`;
  }

  if (data.openSource && data.openSource.length > 0) {
    tex += `\\section{Open Source Contributions}\n`;
    tex += `  \\resumeSubHeadingListStart\n`;
    data.openSource.forEach((os: any) => {
      tex += `    \\resumeProjectHeading\n`;
      tex += `      {\\textbf{${escapeLatex(os.organization)} (${escapeLatex(os.repository)})} $|$ \\textit{${escapeLatex(os.role)}}}{}\n`;
      
      let techLine = '';
      if (os.technologies && os.technologies.length > 0) {
        techLine = `      \\resumeItem{\\textbf{Technologies:} ${escapeLatex(os.technologies.join(', '))}}\n`;
      }

      tex += `      \\resumeItemListStart\n`;
      if (techLine) tex += techLine;

      if (os.prs && os.prs.length > 0) {
        os.prs.forEach((pr: any) => {
          tex += `        \\resumeItem{\\href{${escapeLatex(pr.url)}}{\\textbf{${escapeLatex(pr.prNumber)}}} - ${escapeLatex(pr.title)} [${escapeLatex(pr.status)}]}\n`;
          if (pr.contributions && pr.contributions.length > 0) {
            tex += `        \\begin{itemize}[leftmargin=0.25in]\n`;
            pr.contributions.forEach((c: string) => {
              tex += `          \\item \\small{${escapeLatex(c)}\\vspace{-2pt}}\n`;
            });
            tex += `        \\end{itemize}\n`;
          }
        });
      }
      tex += `      \\resumeItemListEnd\n`;
    });
    tex += `  \\resumeSubHeadingListEnd\n\n`;
  }

  if (data.projects && data.projects.length > 0) {
    tex += `\\section{Projects}\n`;
    tex += `  \\resumeSubHeadingListStart\n`;
    data.projects.forEach((proj: any) => {
      const techStr = proj.technologies ? proj.technologies.join(', ') : '';
      tex += `    \\resumeProjectHeading\n`;
      tex += `      {\\textbf{${escapeLatex(proj.name)}} $|$ \\textit{${escapeLatex(techStr)}}}{${escapeLatex(proj.period || '')}}\n`;
      if (proj.points && proj.points.length > 0) {
        tex += `      \\resumeItemListStart\n`;
        proj.points.forEach((pt: string) => {
          tex += `        \\resumeItem{${escapeLatex(pt)}}\n`;
        });
        tex += `      \\resumeItemListEnd\n`;
      }
    });
    tex += `  \\resumeSubHeadingListEnd\n\n`;
  }

  if (data.skills) {
    tex += `\\section{Technical Skills}\n`;
    tex += ` \\begin{itemize}[leftmargin=0.15in, label={}]\n`;
    tex += `    \\small{\\item{\n`;
    if (data.skills.languages) tex += `     \\textbf{Languages}{: ${escapeLatex(data.skills.languages)}} \\\\\n`;
    if (data.skills.frameworks) tex += `     \\textbf{Frameworks}{: ${escapeLatex(data.skills.frameworks)}} \\\\\n`;
    if (data.skills.tools) tex += `     \\textbf{Developer Tools}{: ${escapeLatex(data.skills.tools)}} \\\\\n`;
    tex += `    }}\n`;
    tex += ` \\end{itemize}\n\n`;
  }

  if (data.certifications && data.certifications.length > 0) {
    tex += `\\section{Certifications}\n`;
    tex += `  \\resumeSubHeadingListStart\n`;
    data.certifications.forEach((cert: any) => {
      tex += `    \\resumeProjectHeading\n`;
      tex += `      {\\textbf{${escapeLatex(cert.title)}}}{${escapeLatex(cert.year)}}\n`;
    });
    tex += `  \\resumeSubHeadingListEnd\n\n`;
  }

  tex += `\\end{document}\n`;
  
  return tex;
}
