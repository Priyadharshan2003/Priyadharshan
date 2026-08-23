import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { RESUME_DATA } from '../src/data/resume';

// Helper to resolve directory in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'assets', 'resume');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const generateHTML = (style) => {
  const { header, about, skills, experience, certifications, education } = RESUME_DATA;

  const baseCSS = `
    * { box-sizing: border-box; }
    body { margin: 0; padding: 0; }
  `;

  let styleCSS = '';
  
  if (style === 'NeoBrutalism') {
    styleCSS = `
      body { font-family: 'Courier New', Courier, monospace; background: #fdf6e3; color: #111; }
      .container { max-width: 800px; margin: 0 auto; }
      h1 { font-size: 36px; border: 4px solid #111; padding: 10px; background: #ffcc00; box-shadow: 8px 8px 0 #111; text-transform: uppercase; margin-bottom: 5px; }
      .subtitle { font-weight: bold; background: #38bdf8; display: inline-block; padding: 5px 10px; border: 2px solid #111; box-shadow: 4px 4px 0 #111; margin-bottom: 20px; }
      .contact { display: flex; gap: 20px; font-weight: bold; margin-bottom: 30px; }
      .section { border: 3px solid #111; padding: 20px; margin-bottom: 30px; background: #fff; box-shadow: 6px 6px 0 #111; }
      .section h2 { border-bottom: 3px solid #111; padding-bottom: 10px; margin-top: 0; background: #bbf7d0; display: inline-block; padding: 5px 10px; border: 2px solid #111; box-shadow: 4px 4px 0 #111; margin-bottom: 15px;}
      .exp-item { border-bottom: 2px dashed #111; padding-bottom: 15px; margin-bottom: 15px; page-break-inside: avoid; break-inside: avoid; }
      .exp-item:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
      .role-title { font-size: 18px; font-weight: bold; background: #e9d5ff; display: inline-block; padding: 2px 8px; border: 2px solid #111; }
    `;
  } else if (style === 'Oxford') {
    styleCSS = `
      body { font-family: 'Times New Roman', Times, serif; background: #fff; color: #333; line-height: 1.5; }
      .container { max-width: 800px; margin: 0 auto; }
      h1 { font-size: 32px; text-align: center; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 2px; }
      .subtitle { text-align: center; font-size: 16px; font-style: italic; margin-bottom: 10px; color: #555; }
      .contact { text-align: center; font-size: 14px; margin-bottom: 30px; border-bottom: 1px solid #333; padding-bottom: 15px; }
      .section { margin-bottom: 25px; }
      .section h2 { font-size: 18px; text-transform: uppercase; border-bottom: 1px solid #333; padding-bottom: 5px; margin-bottom: 10px; letter-spacing: 1px; }
      .exp-item { margin-bottom: 15px; page-break-inside: avoid; break-inside: avoid; }
      .role-header { display: flex; justify-content: space-between; font-weight: bold; }
      .company { font-style: italic; color: #555; }
      ul { padding-left: 20px; margin-top: 5px; }
      li { margin-bottom: 3px; font-size: 14px; }
    `;
  } else if (style === 'Bento') {
    styleCSS = `
      body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background: #fafafa; color: #1a1a1a; }
      .container { max-width: 800px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
      .header-card { grid-column: 1 / -1; background: #fff; padding: 30px; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); text-align: center; }
      h1 { margin: 0 0 10px 0; font-size: 32px; font-weight: 800; letter-spacing: -1px; }
      .subtitle { color: #0070f2; font-weight: 600; margin-bottom: 15px; }
      .contact { color: #666; font-size: 14px; }
      .card { background: #fff; padding: 25px; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
      .card.full { grid-column: 1 / -1; }
      .card h2 { margin-top: 0; font-size: 16px; color: #888; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; }
      .exp-item { margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid; }
      .role-title { font-weight: 700; font-size: 16px; color: #111; }
      .company { color: #0070f2; font-weight: 500; font-size: 14px; }
      ul { padding-left: 15px; color: #555; font-size: 14px; }
    `;
  }

  const bentoGridHTML = style === 'Bento' ? `
    <div class="container">
      <div class="header-card">
        <h1>${header.name}</h1>
        <div class="subtitle">${header.title}</div>
        <div class="contact">${header.email} • ${header.location} <br/> 🏆 ${header.certBadge}</div>
      </div>
      <div class="card full">
        <h2>About</h2>
        <p style="font-size: 15px; line-height: 1.6; color: #444; margin: 0;">${about}</p>
      </div>
      <div class="card full">
        <h2>Experience</h2>
        ${experience.map(exp => `
          <div class="exp-item">
            <div style="display: flex; justify-content: space-between;">
              <span class="role-title">${exp.role}</span>
              <span style="color: #888; font-size: 13px;">${exp.period}</span>
            </div>
            <div class="company">${exp.company} • ${exp.department}</div>
            <ul>${exp.points.map(p => `<li>${p}</li>`).join('')}</ul>
          </div>
        `).join('')}
      </div>
      <div class="card" style="page-break-inside: avoid; break-inside: avoid;">
        <h2>Skills</h2>
        <p><strong>Functional:</strong><br/>${skills.functional}</p>
        <p><strong>Technical:</strong><br/>${skills.technical}</p>
        <p><strong>Tools:</strong><br/>${skills.tools}</p>
      </div>
      <div class="card" style="page-break-inside: avoid; break-inside: avoid;">
        <h2>Certifications & Education</h2>
        <ul style="padding-left: 0; list-style: none;">
          ${certifications.map(c => `<li style="margin-bottom: 10px;"><strong>${c.year}</strong><br/>${c.title}</li>`).join('')}
        </ul>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 15px 0;" />
        <ul style="padding-left: 0; list-style: none;">
          ${education.map(e => `<li style="margin-bottom: 10px;"><strong>${e.year}</strong><br/>${e.degree}<br/><span style="color: #888; font-size: 13px;">${e.institution}</span></li>`).join('')}
        </ul>
      </div>
    </div>
  ` : `
    <div class="container">
      <h1>${header.name}</h1>
      <div class="subtitle">${header.title}</div>
      <div class="contact">
        <span>${header.email}</span> &nbsp;|&nbsp; 
        <span>${header.location}</span> &nbsp;|&nbsp; 
        <span>${header.certBadge}</span>
      </div>
      
      <div class="section">
        <h2>About</h2>
        <p>${about}</p>
      </div>

      <div class="section">
        <h2>Skills</h2>
        <div><strong>Functional:</strong> ${skills.functional}</div>
        <div style="margin-top: 5px;"><strong>Technical:</strong> ${skills.technical}</div>
        <div style="margin-top: 5px;"><strong>Tools:</strong> ${skills.tools}</div>
      </div>

      <div class="section">
        <h2>Experience</h2>
        ${experience.map(exp => `
          <div class="exp-item">
            <div class="role-header">
              <span class="role-title">${exp.role}</span>
              <span>${exp.period}</span>
            </div>
            <div class="company">${exp.company} — ${exp.department}</div>
            <ul>
              ${exp.points.map(p => `<li>${p}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      <div class="section" style="page-break-inside: avoid;">
        <h2>Certifications</h2>
        <ul>
          ${certifications.map(c => `<li><strong>${c.year}</strong>: ${c.title}</li>`).join('')}
        </ul>
      </div>

      <div class="section" style="page-break-inside: avoid;">
        <h2>Education</h2>
        <ul>
          ${education.map(e => `<li><strong>${e.year}</strong>: ${e.degree} — ${e.institution}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>${baseCSS}${styleCSS}</style>
      </head>
      <body>
        ${bentoGridHTML}
      </body>
    </html>
  `;
};

async function generatePDFs() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: 'new' });
  
  const styles = ['NeoBrutalism', 'Oxford', 'Bento'];
  
  for (const style of styles) {
    console.log(`Generating ${style} resume...`);
    const page = await browser.newPage();
    const htmlContent = generateHTML(style);
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    
    const outputPath = path.join(OUTPUT_DIR, `Priyadharshan_Resume_${style}.pdf`);
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '40px', right: '40px', bottom: '40px', left: '40px' }
    });
    console.log(`Saved -> ${outputPath}`);
    await page.close();
  }
  
  await browser.close();
  console.log('All PDFs generated successfully!');
}

generatePDFs().catch(console.error);
