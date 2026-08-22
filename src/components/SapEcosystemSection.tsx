import React, { useState } from 'react';
import { Cpu, Server, Code2, Database, Layers, Copy, Check, Terminal } from 'lucide-react';

interface CodeSnippet {
  id: string;
  name: string;
  lang: string;
  desc: string;
  code: string;
}

const CODE_SNIPPETS: CodeSnippet[] = [
  {
    id: 'cap-cds',
    name: 'schema.cds (SAP CAP Model)',
    lang: 'CDS / Node.js',
    desc: 'Enterprise CAP Core Data Services Entity Definition with Associations & Drafts',
    code: `namespace com.capgemini.enterprise;

using { managed, Country, currency } from '@sap/cds/common';

entity ResourceAssignments : managed {
  key ID          : UUID;
      project     : Association to Projects;
      consultant  : Association to Consultants;
      startDate   : Date;
      endDate     : Date;
      utilization : Decimal(5,2);
      status      : String(20) default 'PENDING';
}

entity Projects : managed {
  key ID          : UUID;
      title       : String(100);
      clientName  : String(100);
      budget      : Decimal(15,2);
      currency    : currency;
      assignments : Composition of many ResourceAssignments on assignments.project = $self;
}`
  },
  {
    id: 'cap-service',
    name: 'resource-service.js (CAP Handler)',
    lang: 'JavaScript / Node.js',
    desc: 'Custom SAP CAP Service Logic & OData V4 Event Lifecycle Handlers',
    code: `const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
  const { ResourceAssignments } = this.entities;

  // Custom validation before resource allocation
  this.before('CREATE', 'ResourceAssignments', async (req) => {
    const { consultant_ID, startDate, endDate, utilization } = req.data;
    
    if (utilization > 100) {
      req.error(400, \`Allocation \${utilization}% exceeds maximum capacity of 100%\`);
    }

    // Check overlap in SAP HANA database
    const existing = await SELECT.from(ResourceAssignments).where({
      consultant_ID,
      startDate: { '<=': endDate },
      endDate:   { '>=': startDate }
    });

    if (existing.length > 0) {
      req.warn(200, 'Consultant is concurrently assigned to another enterprise engagement.');
    }
  });
});`
  },
  {
    id: 'ui5-controller',
    name: 'ResourceOverview.controller.js (UI5)',
    lang: 'JavaScript / UI5',
    desc: 'SAP UI5 Fiori Horizon Controller with OData V4 Data Binding',
    code: `sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
  "use strict";

  return Controller.extend("com.capgemini.ui5.controller.ResourceOverview", {
    onInit: function () {
      var oViewModel = new JSONModel({
        isBusy: false,
        filterStatus: "ALL"
      });
      this.getView().setModel(oViewModel, "viewModel");
    },

    onRefreshOData: function () {
      var oListBinding = this.byId("resourceTable").getBinding("items");
      if (oListBinding) {
        oListBinding.refresh();
        MessageToast.show("SAP OData V4 sync complete.");
      }
    }
  });
});`
  },
  {
    id: 'abap-cds',
    name: 'Z_I_EnterpriseResource.cds (ABAP)',
    lang: 'ABAP CDS',
    desc: 'High-Performance S/4HANA Analytical CDS View for Real-time Reporting',
    code: `@AbapCatalog.sqlViewName: 'ZVI_ENTRES'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Enterprise Resource Analytical View'

define view Z_I_EnterpriseResource 
  as select from ztb_res_assign as Assignment
  association [1..1] to ztb_projects as _Project 
    on $projection.ProjectId = _Project.project_id
{
  key Assignment.assignment_id as AssignmentId,
      Assignment.project_id    as ProjectId,
      Assignment.consultant_id as ConsultantId,
      Assignment.utilization   as UtilizationRate,
      _Project.client_name     as ClientName
}`
  }
];

export const SapEcosystemSection: React.FC = () => {
  const [activeSnippet, setActiveSnippet] = useState<CodeSnippet>(CODE_SNIPPETS[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="sap-architecture" className="py-20 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-[#38bdf8] bg-[#0070f2]/10 border border-[#0070f2]/30 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Enterprise Architecture & Standards
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            SAP BTP & Full Stack Ecosystem
          </h2>
          <p className="text-base text-[#94a3b8] mt-3">
            How I architect enterprise solutions connecting SAP S/4HANA backends with Cloud Application Programming (CAP) and modern web extensions.
          </p>
        </div>

        {/* Architecture Topology Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          
          {/* Layer 1 */}
          <div className="glass-panel p-5 rounded-2xl border border-white/10 relative">
            <div className="text-[10px] font-mono text-[#0070f2] uppercase tracking-wider font-bold mb-2">Layer 01 • Core Backend</div>
            <div className="flex items-center gap-3 mb-2">
              <Database className="w-5 h-5 text-[#38bdf8]" />
              <h3 className="text-base font-bold text-white">SAP S/4HANA</h3>
            </div>
            <p className="text-xs text-[#94a3b8]">ABAP CDS Views, OData V4 services, SAP ERP Business Logic & In-memory HANA DB.</p>
          </div>

          {/* Layer 2 */}
          <div className="glass-panel p-5 rounded-2xl border border-white/10 relative">
            <div className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-wider font-bold mb-2">Layer 02 • Cloud Platform</div>
            <div className="flex items-center gap-3 mb-2">
              <Server className="w-5 h-5 text-[#38bdf8]" />
              <h3 className="text-base font-bold text-white">SAP BTP & CAP</h3>
            </div>
            <p className="text-xs text-[#94a3b8]">Node.js Cloud Application Programming model, Event Mesh, and Security Services.</p>
          </div>

          {/* Layer 3 */}
          <div className="glass-panel p-5 rounded-2xl border border-white/10 relative">
            <div className="text-[10px] font-mono text-[#818cf8] uppercase tracking-wider font-bold mb-2">Layer 03 • API Gateway</div>
            <div className="flex items-center gap-3 mb-2">
              <Layers className="w-5 h-5 text-[#818cf8]" />
              <h3 className="text-base font-bold text-white">OData V4 & REST</h3>
            </div>
            <p className="text-xs text-[#94a3b8]">Low-latency RESTful APIs, WebSocket events, and enterprise integration endpoints.</p>
          </div>

          {/* Layer 4 */}
          <div className="glass-panel p-5 rounded-2xl border border-white/10 relative">
            <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold mb-2">Layer 04 • Frontends</div>
            <div className="flex items-center gap-3 mb-2">
              <Code2 className="w-5 h-5 text-emerald-400" />
              <h3 className="text-base font-bold text-white">UI5 & React Hub</h3>
            </div>
            <p className="text-xs text-[#94a3b8]">SAP Fiori Quartz/Horizon applications, React dashboards, and mobile extensions.</p>
          </div>

        </div>

        {/* Live SAP Code Inspector */}
        <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          
          {/* Inspector Header */}
          <div className="bg-[#0f121a] px-6 py-4 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              </div>
              <span className="text-xs font-mono font-semibold text-[#94a3b8] flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#38bdf8]" />
                SAP Enterprise Code Inspector
              </span>
            </div>

            {/* Code Snippet Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bg-[#07090e] p-1 rounded-xl border border-white/5">
              {CODE_SNIPPETS.map((snippet) => (
                <button
                  key={snippet.id}
                  onClick={() => setActiveSnippet(snippet)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeSnippet.id === snippet.id
                      ? 'bg-[#0070f2] text-white font-semibold shadow-md'
                      : 'text-[#94a3b8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {snippet.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Snippet Sub-header */}
          <div className="bg-[#121520] px-6 py-2.5 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-[#94a3b8] font-mono">
              <span className="text-white font-semibold">{activeSnippet.name}</span>
              <span>—</span>
              <span className="text-[#38bdf8]">{activeSnippet.desc}</span>
            </div>

            <button
              onClick={handleCopy}
              className="px-2.5 py-1 rounded-lg text-xs font-mono text-[#94a3b8] hover:text-white bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          {/* Code Viewer Body */}
          <div className="p-6 bg-[#090b10] overflow-x-auto">
            <pre className="font-mono text-xs text-slate-200 leading-relaxed">
              <code>{activeSnippet.code}</code>
            </pre>
          </div>

        </div>

      </div>
    </section>
  );
};
