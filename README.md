# Priyadharshan Chandranath — SAP & Agentic AI Portfolio

<div align="center">

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-3D_Canvas-000000?style=flat-square&logo=three.js&logoColor=white)](https://threejs.org/)
[![SAP Certified](https://img.shields.io/badge/SAP-CAPM_%26_UI5_Certified-0070F2?style=flat-square&logo=sap&logoColor=white)](https://www.sap.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

<p align="center">
  <strong>High-performance, modern web portfolio showcasing enterprise SAP architecture, Agentic AI systems, and full-stack software engineering.</strong>
</p>

[Live Demo](https://priyadharshan.me) • [View Architecture](#-architecture--features) • [Tech Stack](#-technology-stack) • [Quick Start](#-quick-start) • [Contact](#-connect)

</div>

---

## 📌 Overview

This repository houses the personal engineering portfolio of **Priyadharshan Chandranath**, Senior Analyst (A5) at Capgemini. The platform demonstrates the intersection between **mission-critical Enterprise SAP Ecosystems (SAPUI5, CAPM, RAP, Fiori Elements, OData)** and **cutting-edge Agentic AI workflows**, built with modern web aesthetics (dark mode, glassmorphism, 3D interactive canvases, and dynamic blend-mode cursors).

---

## ✨ Key Features & Architecture

### 1. 🌌 Interactive 3D SAP Architecture Mesh (Three.js)
- Real-time 3D interactive topological matrix rendering SAP BTP, OData streams, AI Agent Mesh, and CDS Entity relationships.
- Hardware-accelerated WebGL rendering with automated viewport resize recalculations and optimized draw calls.

### 2. 🎯 Dynamic Circular Inverted Spotlight Cursor
- Custom blend-mode (`mix-blend-difference`) circular cursor tracking mouse coordinates at 60/120fps with `requestAnimationFrame` linear interpolation (lerp).
- Touch-device awareness (`@media (pointer: coarse)`) ensuring zero interference on mobile and tablet touch displays.
- Global native cursor suppression for a seamless, immersive desktop experience.

### 3. 🛡️ Enterprise SAP & AI Matrix
- Comprehensive breakdown of SAP BTP Cloud Application Programming (CAP) Model, ABAP RESTful Application Programming (RAP), and Fiori Elements integrations.
- Agentic AI orchestration frameworks and real-time enterprise telemetry dashboards.

### 4. 💎 State-of-the-Art Design System
- Built on **Tailwind CSS v4** engine with custom HSL tokens, SAP Sapphire accent glows, and backdrop-blur glass panels.
- Highly accessible, semantic HTML5 structure with optimized typography (`Inter`, `Inter Tight`, `JetBrains Mono`).

---

## 🛠️ Technology Stack

| Category | Technologies |
| :--- | :--- |
| **Core Framework** | React 19, TypeScript, Vite 8 (with HMR & Rolldown bundle optimizations) |
| **Styling & Design** | Tailwind CSS v4 (`@tailwindcss/vite`), Custom CSS Grid & Glassmorphism |
| **3D & Visual FX** | Three.js (WebGL Canvas), Inverted Mix-Blend Difference Cursor |
| **Icons & Assets** | Lucide React, Custom Enterprise SVG Architecture Logos |
| **Tooling & Quality** | Oxlint, TypeScript Compiler (`tsc -b`), Native ESM loader |

---

## 📂 Project Structure

```text
priyadharshan_SAP_Portfolio/
├── public/
│   ├── favicon.svg             # Enterprise Sapphire Favicon
│   ├── icons.svg               # SVG Sprites
│   └── sap-icon.svg            # Official SAP Vector Emblem
├── src/
│   ├── assets/                 # High-resolution optimized imagery & diagrams
│   ├── components/
│   │   ├── ui/                 # Reusable atomic UI primitives
│   │   │   ├── inverted-cursor.tsx   # Custom dynamic inverted spotlight cursor
│   │   │   └── demo.tsx              # Component showcase playground
│   │   ├── AgenticAiSection.tsx      # Agentic AI capabilities & frameworks
│   │   ├── Certifications.tsx        # SAP & Cloud certifications showcase
│   │   ├── ContactFooter.tsx         # Enterprise contact links & actions
│   │   ├── Education.tsx             # Academic qualifications
│   │   ├── Experience.tsx            # Capgemini & client experience timeline
│   │   ├── Header.tsx                # Glassmorphic fixed navigation bar
│   │   ├── Hero.tsx                  # Recruiter metrics & core value proposition
│   │   ├── Icons.tsx                 # Tech stack and social SVG vectors
│   │   ├── Projects.tsx              # Flagship enterprise and AI case studies
│   │   ├── ProofGrid.tsx             # Enterprise-grade delivery metrics
│   │   ├── ResumeModal.tsx           # Interactive resume preview & export
│   │   ├── SapArchitectureCanvas.tsx # 3D Three.js topology visualization
│   │   └── SapEcosystemSection.tsx   # SAP BTP & S/4HANA architecture matrix
│   ├── App.tsx                 # Root application component
│   ├── index.css               # Global theme tokens, typography, and styling
│   └── main.tsx                # React DOM entry point
├── package.json                # Project dependencies and build scripts
├── tsconfig.app.json           # Application TypeScript configuration & path aliases
├── tsconfig.json               # Root project reference config
└── vite.config.ts              # Vite plugins and alias resolution (@ -> ./src)
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js**: `v18.x` or `v20.x`+
- **npm** (or `pnpm` / `yarn`)

### 1. Clone the Repository
```bash
git clone https://github.com/Priyadharshan2003/Priyadharshan.git
cd Priyadharshan
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## 🏗️ Production Build & Verification

To generate an optimized, minified production build:

```bash
# Type check and build bundle
npm run build

# Preview production build locally
npm run preview

# Run fast code linting via Oxlint
npm run lint
```

---

## 🚢 Deployment

### Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/Priyadharshan2003/Priyadharshan)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages
1. In `vite.config.ts`, ensure `base: '/Priyadharshan/'` is set if using user/repo page.
2. Build the output: `npm run build`
3. Deploy the `dist` directory using `gh-pages`.

---

## 👨‍💻 Connect

- **Author**: Priyadharshan Chandranath
- **Role**: Senior Analyst (A5) @ Capgemini
- **LinkedIn**: [linkedin.com/in/priyadharshan-chandranath](https://www.linkedin.com/in/priyadharshan-chandranath)
- **GitHub**: [@Priyadharshan2003](https://github.com/Priyadharshan2003)
- **Email**: [priyan2003chandru@gmail.com](mailto:priyan2003chandru@gmail.com)

---

<div align="center">
  <sub>Built with ❤️ by Priyadharshan Chandranath. Engineered for high performance and enterprise scale.</sub>
</div>
