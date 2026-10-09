export interface PersonalInfo {
  name: string;
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

export interface OpenSourcePR {
  prNumber: string;
  title: string;
  url: string;
  status: string;
  contributions: string[];
}

export interface OpenSource {
  organization: string;
  repository: string;
  role: string;
  technologies?: string[];
  pullRequests?: string;
  mergedPRs?: string;
  contributions?: string[];
  prs?: OpenSourcePR[];
}

export interface Project {
  name: string;
  technologies: string[];
  period: string;
  points: string[];
}

export interface Skills {
  languages: string;
  frameworks: string;
  tools: string;
}

export interface Certification {
  year: string;
  title: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  education: Education[];
  experience: Experience[];
  openSource: OpenSource[];
  projects: Project[];
  skills: Skills;
  certifications: Certification[];
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: 'Priyadharshan Chandranath',
    phone: '+91-9442876978',
    email: 'priyadharshanchandranath@gmail.com',
    location: 'Salem, Tamil Nadu, India',
    linkedin: 'linkedin.com/in/priyadharshan',
    github: 'github.com/Priyadharshan2003'
  },
  summary: `Senior Analyst with expertise in SAP UI5/FIORI development and a strong foundation in front-end technologies. Specialized in building enterprise-grade applications using SAPUI5, FIORI Elements, and OData services.`,
  education: [
    {
      institution: 'Sona College of Technology',
      location: 'Salem, TX',
      degree: 'Bachelor of Engineering in Electronics and Communication',
      period: 'Aug. 2021 -- May 2025'
    }
  ],
  experience: [
    {
      role: 'Senior Analyst (A5) — SAP Consulting',
      company: 'Capgemini',
      location: 'Remote',
      period: 'July 2025 -- Present',
      points: [
        'Design and customize enterprise SAP FIORI applications adhering strictly to SAP Fiori Horizon design guidelines.',
        'Integrate high-throughput front-end components with SAP backend systems using OData protocols.',
        'Leverage SAP BAS, SAP ABAP Cloud, and OpenUI5 for Clean Core developments.'
      ]
    },
    {
      role: 'Project Management Team',
      company: 'Capgemini',
      location: 'Remote',
      period: 'Feb. 2026 -- Present',
      points: [
        'Managed vendor workforce handling and enterprise resource allocations using SAP Fieldglass.',
        'Engineered automated data cleaning and reporting trackers using Microsoft Excel.'
      ]
    }
  ],
  openSource: [
    {
      organization: 'DeepFirstHQ',
      repository: 'deepfirstsearch',
      role: 'Open Source Contributor',
      technologies: ['TypeScript', 'Node.js', 'GitHub Actions', 'Testing'],
      prs: [
        {
          prNumber: 'PR #21',
          title: 'feat(sdk): add merchant-specific maxTimeoutSeconds support',
          url: 'https://github.com/DeepFirstHQ/deepfirstsearch/pull/21',
          status: 'MERGED',
          contributions: [
            'Added merchant-specific authorization timeout configuration support.',
            'Implemented validation, shared timeout utilities, tests, and documentation.',
            'Merged into main branch and released in SDK v0.5.5.'
          ]
        },
        {
          prNumber: 'PR #29',
          title: 'feat(mcp): support merchant-specific authorization timeouts',
          url: 'https://github.com/DeepFirstHQ/deepfirstsearch/pull/29',
          status: 'MERGED',
          contributions: [
            'Added support for merchant-specific authorization timeout overrides in MCP.',
            'Added validation, integration tests, and merchant registry enhancements.',
            'Merged into main branch and released in MCP v0.1.7.'
          ]
        }
      ]
    }
  ],
  projects: [],
  skills: {
    languages: 'JavaScript, TypeScript, ABAP, HTML/CSS',
    frameworks: 'React, Node.js, SAPUI5, FIORI Elements, OData',
    tools: 'Git, SAP BAS, VS Code, GitHub Actions, SAP BTP'
  },
  certifications: [
    { year: '2026', title: 'SAP Certified - Generative AI Developer' },
    { year: '2025', title: 'SAP Certified - Backend Developer - SAP Cloud Application Programming Model' }
  ]
};
