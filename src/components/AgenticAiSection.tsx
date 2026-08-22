import React from 'react';
import { Bot, Sparkles, Terminal, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AgenticPillar {
  title: string;
  category: string;
  description: string;
  techList: string[];
  metrics: string;
}

const AGENTIC_PILLARS: AgenticPillar[] = [
  {
    title: 'Multi-Agent Orchestration & Mesh',
    category: 'Autonomous Workflows',
    description: 'Designing autonomous agent graphs with stateful memory, cyclic feedback loops, and human-in-the-loop approvals using LangGraph and CrewAI.',
    techList: ['LangGraph', 'CrewAI', 'AutoGen', 'Model Context Protocol (MCP)'],
    metrics: '94% Autonomous Execution'
  },
  {
    title: 'Enterprise Function & Tool Calling',
    category: 'Deterministic Execution',
    description: 'Connecting LLMs to real SAP S/4HANA OData V4 services, CAP Node.js APIs, and SQL databases with strict JSON schema validation and retry loops.',
    techList: ['OpenAI Tool Calling', 'Anthropic Claude Tools', 'SAP OData Connectors', 'Zod Schema'],
    metrics: 'Zero Hallucination Tool Invocation'
  },
  {
    title: 'Hybrid RAG & Vector Memory',
    category: 'Context & Knowledge',
    description: 'Building high-throughput hybrid vector retrieval systems leveraging SAP HANA Vector Engine and Pinecone with Reciprocal Rank Fusion (RRF).',
    techList: ['SAP HANA Vector Engine', 'Pinecone', 'Qdrant', 'SentenceTransformers'],
    metrics: 'Sub-400ms Context Retrieval'
  },
  {
    title: 'Enterprise Security & Guardrails',
    category: 'Production Governance',
    description: 'Enforcing zero-trust enterprise security guardrails, PII redaction, role-based tool execution permissions, and SAP Clean Core standards.',
    techList: ['Guardrails AI', 'NeMo Guardrails', 'SAP IAS SSO', 'Clean Core Compliance'],
    metrics: '100% Enterprise Security Audit Pass'
  }
];

export const AgenticAiSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#07090e] border-t border-white/5 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0070f2]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-[#38bdf8] bg-[#0070f2]/15 border border-[#0070f2]/30 mb-3">
            <Bot className="w-3.5 h-3.5 text-[#38bdf8]" />
            High-Impact Tech Stack & Enterprise AI Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Agentic AI Architecture & SaaS Mastery
          </h2>
          <p className="text-base text-[#94a3b8] mt-3 leading-relaxed">
            Architecting next-generation Agentic AI SaaS platforms that bridge autonomous multi-agent orchestration with mission-critical SAP enterprise backends.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {AGENTIC_PILLARS.map((pillar, idx) => (
            <div 
              key={idx}
              className="glass-panel p-6 rounded-2xl glass-panel-hover border border-[#0070f2]/20 bg-[#0c0f18]/80 flex flex-col justify-between group"
            >
              <div>
                <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#38bdf8] mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#0070f2]" />
                  {pillar.category}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#38bdf8] transition-colors mb-3">
                  {pillar.title}
                </h3>

                <p className="text-xs text-[#94a3b8] leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <div className="space-y-1.5 mb-6">
                  <div className="text-[11px] font-mono text-[#64748b]">Core Frameworks:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.techList.map((tech, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded text-[11px] font-mono text-white bg-[#141824] border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {pillar.metrics}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Agentic AI Code & Orchestration Architecture Visualizer */}
        <div className="glass-panel rounded-2xl border border-white/10 p-6 sm:p-8 bg-[#0a0d14] relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="text-xs font-mono font-semibold text-[#38bdf8] flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#0070f2]" />
                Targeting Senior Agentic AI Architect & Product Roles
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Ready to deploy autonomous AI agents for your enterprise SaaS product.
              </h3>
              <p className="text-xs sm:text-sm text-[#94a3b8]">
                Combining 1+ year of enterprise engineering discipline at Capgemini with modern LangGraph multi-agent orchestration to build high-ROI SaaS systems.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <a
                href="#projects"
                className="px-5 py-3 rounded-xl text-xs font-mono font-semibold text-white bg-[#0070f2] hover:bg-[#0060d0] shadow-lg shadow-[#0070f2]/30 transition-all flex items-center gap-2"
              >
                <span>Explore Agentic SaaS Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="px-5 py-3 rounded-xl text-xs font-mono font-semibold text-[#38bdf8] bg-[#0f121a] hover:bg-[#181c26] border border-[#0070f2]/30 transition-all"
              >
                Schedule Engineering Discussion
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
