export interface NodeData {
  id: string;
  name: string;
  category: string;
  desc: string;
  latency: string;
  protocol: string;
  status: string;
  pos: [number, number, number];
  color: number;
  glowColor: string;
}

export const SYSTEM_NODES: NodeData[] = [
  { 
    id: 'core',
    name: 'SAP BTP & S/4HANA Kernel', 
    category: 'Core Platform Engine', 
    desc: 'Central Business Technology Platform managing enterprise ERP state, SAP Cloud CAP model, and tenant isolation.',
    latency: '< 8ms',
    protocol: 'SAP RFC / CAP',
    status: 'OPERATIONAL',
    pos: [0, 0, 0], 
    color: 0x0070F2,
    glowColor: '#0070F2'
  },
  { 
    id: 'cap',
    name: 'SAP CAP Node.js Microservices', 
    category: 'Backend Cloud Services', 
    desc: 'Enterprise CAP Core Data Services (CDS) entity layer handling business logic and draft management.',
    latency: '12ms',
    protocol: 'Node.js / CDS',
    status: 'ACTIVE',
    pos: [2.5, 1.4, 0.6], 
    color: 0x38BDF8,
    glowColor: '#38BDF8'
  },
  { 
    id: 'fiori',
    name: 'SAP UI5 & Fiori Horizon', 
    category: 'Enterprise UX Frontends', 
    desc: 'Quartz & Horizon responsive user interface components with OData V4 model bindings.',
    latency: '16ms',
    protocol: 'OpenUI5 / HTTPS',
    status: 'ACTIVE',
    pos: [-2.5, 1.5, -0.6], 
    color: 0x60A5FA,
    glowColor: '#60A5FA'
  },
  { 
    id: 'agentic',
    name: 'Agentic AI Orchestrator', 
    category: 'Autonomous Multi-Agent', 
    desc: 'LangGraph multi-agent mesh executing autonomous ERP tool calling, ABAP code inspection, and L3 incident triage.',
    latency: '34ms',
    protocol: 'MCP / gRPC',
    status: 'SYNCED',
    pos: [0, 2.6, -1.2], 
    color: 0xA855F7,
    glowColor: '#A855F7'
  },
  { 
    id: 'odata',
    name: 'OData V4 & REST Mesh', 
    category: 'High-Throughput Gateway', 
    desc: 'Enterprise REST/OData gateway handling real-time CRUD streams and Event Mesh topics.',
    latency: '10ms',
    protocol: 'OData V4 REST',
    status: 'ACTIVE',
    pos: [2.0, -1.9, 1.0], 
    color: 0x818CF8,
    glowColor: '#818CF8'
  },
  { 
    id: 'hana',
    name: 'SAP HANA Vector DB', 
    category: 'In-Memory Vector Search', 
    desc: 'High-performance in-memory relational engine with vector embeddings for hybrid RAG search.',
    latency: '5ms',
    protocol: 'HANA SQL / Vector',
    status: 'OPTIMAL',
    pos: [-2.1, -1.7, -0.8], 
    color: 0x0284C7,
    glowColor: '#0284C7'
  }
];
