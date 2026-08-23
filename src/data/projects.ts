export interface Project {
  id: string;
  title: string;
  category: 'All' | 'Agentic AI SaaS' | 'Mobile Apps' | 'SAP Enterprise' | 'IoT & Web';
  badge?: string;
  subtitle: string;
  description: string;
  architecture: string[];
  metrics: string[];
  techStack: string[];
  linkType?: 'github' | 'devfolio' | 'figma' | 'demo';
  linkUrl?: string;
  linkLabel?: string;
  githubUrl?: string;
  isAgenticAi?: boolean;
}

export const PROJECTS: Project[] = [
  // --- AGENTIC AI SAAS PROJECTS ---
  {
    id: 'nexus-agent',
    title: 'Nexus Agent — Autonomous SAP BTP Multi-Agent Orchestrator',
    badge: 'Trending Agentic AI SaaS',
    category: 'Agentic AI SaaS',
    subtitle: 'Multi-Agent Autonomous ERP Workflow Engine',
    description: 'An autonomous multi-agent SaaS platform that orchestrates SAP S/4HANA OData V4 workflows, automated ABAP code refactoring, and CAP Node.js microservice deployments. Uses autonomous agent tool-calling loops with human-in-the-loop approvals, reducing enterprise SAP migration cycles from weeks to hours.',
    architecture: ['LangGraph Multi-Agent Mesh', 'SAP BTP CAP Adapter', 'HANA Vector DB RAG', 'TypeScript / Next.js 15'],
    metrics: ['94% Autonomous Execution Rate', '$120K Est. Migration Cost Saved / Sprint', 'Zero-Trust SAP Authorization Guardrails'],
    techStack: ['agentic-ai', 'langgraph', 'sap-btp', 'vector-db', 'multi-agent', 'nextjs-15'],
    linkType: 'demo',
    linkUrl: 'https://nexus-agent-sap-gamma.vercel.app/',
    linkLabel: 'Live Demo',
    githubUrl: 'https://github.com/Priyadharshan2003/nexus-agent',
    isAgenticAi: true
  },
  {
    id: 'cognitive-code-agent',
    title: 'looprix - Autonomous AI Code Review & Self-Healing Agent',
    badge: 'Self-Correction Agent Systems',
    category: 'Agentic AI SaaS',
    subtitle: 'Autonomous Developer Productivity Platform',
    description: 'Multi-agent developer platform that autonomously scans SAP ABAP, TypeScript, and Python codebases for Clean Core compliance, OWASP vulnerabilities, and performance anti-patterns. Features self-healing PR generation where agents create automated Git pull requests complete with unit test suites.',
    architecture: ['Self-Correction Agent Loops', 'AST Parser Engine', 'OpenAI & Claude Tool Calling', 'React 19 / Vite'],
    metrics: ['3x Faster Pull Request Approvals', '100% Automated Test Suite Generation', 'Zero False-Positive Security Guardrails'],
    techStack: ['agentic-ai', 'self-healing-code', 'llm-tool-calling', 'python', 'react-19'],
    linkType: 'demo',
    linkUrl: 'https://looprix-six.vercel.app/',
    linkLabel: 'Live Demo',
    githubUrl: 'https://github.com/Priyadharshan2003/looprix',
    isAgenticAi: true
  },

  // --- MOBILE & FULL STACK APPS (FROM RESUME) ---
  {
    id: '90-degree-pride-homes',
    title: '90 Degree Pride Homes',
    badge: 'Real Estate Mobile App',
    category: 'Mobile Apps',
    subtitle: 'Freelance Mobile Product',
    description: 'Led front-end development of "90 Degree Pride Homes," a cross-platform real estate mobile application featuring role-based access control (RBAC), property listing management, and intuitive UI workflows.',
    architecture: ['React Native Core', 'Expo Mobile Suite', 'Role-Based Access Control', 'Figma UI System'],
    metrics: ['Cross-Platform iOS & Android Deploy', 'Role-Based Access Security', 'Production Real Estate Client App'],
    techStack: ['react-native', 'expo', 'javascript', 'figma', 'mobile-ui'],
    linkType: 'demo',
    linkUrl: '#contact',
    linkLabel: 'Mobile App Showcase'
  },
  {
    id: 'sona-star-admission',
    title: 'Admission Management Mobile App',
    badge: 'Sona Star EdTech App',
    category: 'Mobile Apps',
    subtitle: 'Flutter & UI/UX Design',
    description: 'Contributed to the design and development of an admission management mobile application for academic stakeholders, focusing on accessibility, streamlined application workflows, and intuitive UX.',
    architecture: ['Flutter Mobile Framework', 'Dart Logic', 'Figma UI/UX Prototypes', 'Academic Workflows'],
    metrics: ['Streamlined Admission Workflow', 'Figma Accessibility Design', 'Cross-Platform iOS & Android'],
    techStack: ['flutter', 'dart', 'figma', 'ui-ux-design'],
    linkType: 'demo',
    linkUrl: '#contact',
    linkLabel: 'EdTech Case Study'
  },
  {
    id: 'platfware-web',
    title: 'Platfware Web & Digital Content Platform',
    badge: 'Platfware Startup',
    category: 'IoT & Web',
    subtitle: 'Web Development & Content Design',
    description: 'Crafted intuitive and responsive web user interfaces using React.js, Vite, and modern design tools while managing digital content strategy to align UI/UX with business goals.',
    architecture: ['React.js 18', 'Vite Bundler', 'Figma UI/UX Systems', 'HTML5 / SCSS'],
    metrics: ['Enhanced Brand Digital Presence', 'High Performance Responsive UX', 'Cross-Functional Agile Alignment'],
    techStack: ['reactjs', 'vite', 'figma', 'javascript', 'content-design'],
    linkType: 'demo',
    linkUrl: '#contact',
    linkLabel: 'Web Portal Overview'
  },

  // --- HACKATHONS & AWARD PROJECTS ---
  {
    id: 'shogi-tech',
    title: 'Shogi-Tech',
    badge: '₹2 Lakh Seed Funding',
    category: 'IoT & Web',
    subtitle: 'Hardware & Web Real-Time Tracking',
    description: 'Shogi Live Game Play Tracking is an innovative project designed to provide real-time tracking of Shogi (Japanese chess) game plays using sensors and web technologies. The project integrates hardware and software to automate the detection of Shogi piece movements on a physical board and display the live game state on a web application.',
    architecture: ['IoT Sensor Matrix', 'WebSockets Sync', 'React Dashboard', 'Node.js Core'],
    metrics: ['Received ₹2 Lakh Seed Funding', 'Automated Physical Board Detection', 'Real-Time State Sync'],
    techStack: ['react', 'nodejs', 'tailwind', 'iot-sensors'],
    linkType: 'github',
    linkUrl: 'https://github.com/Priyadharshan2003/Shogi-Live-Game-play-Tracking',
    linkLabel: 'GitHub Repo'
  },
  {
    id: 'osen-fainde',
    title: 'Osen Fainde',
    badge: 'Won Best Hardware Hack Award',
    category: 'IoT & Web',
    subtitle: 'Real-Time Air Pollution Sensor Platform',
    description: 'Developed an IoT-based device that detects air pollution levels in specific regions and alerts users in real time, potential for environmental impact. Incorporated real-time sensor data processing and a user-friendly interface, enhancing the device\'s practical application in urban environments.',
    architecture: ['IoT Air Quality Sensors', 'REST API Engine', 'SCSS Web Portal', 'Alert System'],
    metrics: ['Won Best Hardware Hack Award', 'Real-time Regional Pollution Alerts', 'High Precision Telemetry'],
    techStack: ['react', 'restapi', 'scss', 'iot-sensors'],
    linkType: 'devfolio',
    linkUrl: 'https://devfolio.co/projects/mediband-ae10',
    linkLabel: 'Devfolio Project'
  },
  {
    id: 'eco-swap',
    title: 'ECO-SWAP',
    badge: 'Presented as Mini Project',
    category: 'IoT & Web',
    subtitle: 'AI-Driven Waste Classification Platform',
    description: 'Developed an AI-driven waste classification model using deep learning to improve waste sorting efficiency, highlighting its potential for reducing contamination in the recycling process. Integrated machine learning algorithms to optimize the identification of recyclable materials, improving accuracy by over 15%.',
    architecture: ['Deep Learning Classifier', 'Next.js Frontend', 'Figma UI/UX Design System'],
    metrics: ['Improved Sorting Accuracy by +15%', 'Automated Deep Learning Classification', 'Recycling Optimization'],
    techStack: ['nextjs', 'react', 'figma', 'deep-learning'],
    linkType: 'figma',
    linkUrl: 'https://www.figma.com/community/file/1392693808056424252/ecoswap',
    linkLabel: 'Figma Design & Prototype'
  },

  // --- SAP ENTERPRISE FLAGSHIP ---
  {
    id: 'sap-btp-resource',
    title: 'SAP BTP Enterprise Resource Allocation Platform',
    badge: 'Enterprise Flagship',
    category: 'SAP Enterprise',
    subtitle: 'Capgemini Global Enterprise Solution',
    description: 'Multi-tenant SAP BTP Cloud Application Programming (CAP) platform integrated with S/4HANA OData V4 services, empowering enterprise managers to dynamically assign 5,000+ consultants with real-time utilization analytics.',
    architecture: ['SAP CAP Node.js', 'SAP UI5 Fiori Horizon', 'HANA Cloud DB', 'OData V4'],
    metrics: ['5,000+ Active Users', '40% Reduction in Allocation Latency', 'S/4HANA Real-time Sync'],
    techStack: ['sap-btp', 'node-cap', 'sap-ui5', 'odata-v4'],
    linkType: 'demo',
    linkUrl: '#contact',
    linkLabel: 'Enterprise Case Study'
  }
];
