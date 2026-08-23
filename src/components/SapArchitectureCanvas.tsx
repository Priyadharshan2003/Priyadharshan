import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Activity, Zap } from 'lucide-react';

import { type NodeData, SYSTEM_NODES } from '../data/sap-nodes';

export const SapArchitectureCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<NodeData>(SYSTEM_NODES[0]);
  const [activeTab, setActiveTab] = useState<'architecture' | 'ai-mesh' | 'odata-stream'>('architecture');

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07090e, 0.04);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8.5);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 4. Main Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 5. Central Futuristic SAP Core (Holographic Crystal Dodecahedron)
    const coreGeo = new THREE.DodecahedronGeometry(1.0, 0);
    const coreMat = new THREE.MeshPhongMaterial({
      color: 0x0070F2,
      emissive: 0x003887,
      emissiveIntensity: 0.8,
      wireframe: false,
      shininess: 100,
      transparent: true,
      opacity: 0.9
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // Outer Wireframe Crystal Cage
    const cageGeo = new THREE.IcosahedronGeometry(1.35, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x38BDF8,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    mainGroup.add(cageMesh);

    // Dual Orbiting Torus Rings (Futuristic Sci-Fi Reactor Rings)
    const ring1Geo = new THREE.TorusGeometry(1.7, 0.02, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0x0070F2, transparent: true, opacity: 0.6 });
    const ring1Mesh = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1Mesh.rotation.x = Math.PI / 3;
    mainGroup.add(ring1Mesh);

    const ring2Geo = new THREE.TorusGeometry(2.1, 0.015, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xA855F7, transparent: true, opacity: 0.4 });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2Mesh.rotation.y = Math.PI / 4;
    mainGroup.add(ring2Mesh);

    // 6. System Satellite Nodes
    const nodeMeshes: THREE.Mesh[] = [];
    const lineGroup = new THREE.Group();
    mainGroup.add(lineGroup);

    SYSTEM_NODES.forEach((node) => {
      const isCore = node.id === 'core';
      const radius = isCore ? 0.5 : 0.32;
      
      // Node Geometry (Dodecahedron for satellite nodes)
      const sphereGeo = isCore 
        ? new THREE.SphereGeometry(radius, 32, 32)
        : new THREE.DodecahedronGeometry(radius, 0);

      const sphereMat = new THREE.MeshPhongMaterial({
        color: node.color,
        emissive: node.color,
        emissiveIntensity: isCore ? 0.6 : 0.4,
        shininess: 90,
        transparent: true,
        opacity: 0.95
      });
      const mesh = new THREE.Mesh(sphereGeo, sphereMat);
      mesh.position.set(...node.pos);
      mesh.userData = node;
      nodeMeshes.push(mesh);
      mainGroup.add(mesh);

      // Outer Glow Ring for Node
      if (!isCore) {
        const ringGeo = new THREE.RingGeometry(radius + 0.08, radius + 0.14, 32);
        const ringMat = new THREE.MeshBasicMaterial({
          color: node.color,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.5
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.position.set(...node.pos);
        ringMesh.lookAt(camera.position);
        mainGroup.add(ringMesh);
      }

      // Connecting Glowing Laser Lines
      if (!isCore) {
        const lineMat = new THREE.LineDashedMaterial({
          color: node.color,
          dashSize: 0.2,
          gapSize: 0.1,
          transparent: true,
          opacity: 0.65
        });
        const lineGeo = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(...node.pos)
        ]);
        const line = new THREE.Line(lineGeo, lineMat);
        line.computeLineDistances();
        lineGroup.add(line);
      }
    });

    // 7. Data Flow Orbiting Particles
    const particleCount = 60;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 11;
      positions[i + 1] = (Math.random() - 0.5) * 11;
      positions[i + 2] = (Math.random() - 0.5) * 11;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      color: 0x38BDF8,
      transparent: true,
      opacity: 0.5
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particleSystem);

    // 8. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x0070F2, 3.0);
    dirLight1.position.set(6, 6, 6);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xA855F7, 2.0);
    dirLight2.position.set(-6, -6, 3);
    scene.add(dirLight2);

    // 9. Raycasting Mouse Interactivity
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isHovering = false;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      targetRotationY = mouse.x * 0.45;
      targetRotationX = mouse.y * 0.45;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);

      if (intersects.length > 0) {
        const hovered = intersects[0].object.userData as NodeData;
        if (hovered) {
          setActiveNode(hovered);
          isHovering = true;
          document.body.style.cursor = 'pointer';
        }
      } else {
        isHovering = false;
        document.body.style.cursor = 'default';
      }
    };

    const canvasElem = renderer.domElement;
    canvasElem.addEventListener('mousemove', handleMouseMove);

    // 10. Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 11. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Rotation physics
      if (!isHovering) {
        mainGroup.rotation.y += 0.005;
        ring1Mesh.rotation.z += 0.01;
        ring2Mesh.rotation.z -= 0.008;
        cageMesh.rotation.y -= 0.006;
        coreMesh.rotation.x += 0.004;
      } else {
        mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.06;
        mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.06;
      }

      // Dynamic Pulse Core Scaling
      const pulseScale = 1 + Math.sin(elapsedTime * 2.5) * 0.04;
      coreMesh.scale.set(pulseScale, pulseScale, pulseScale);

      // Rotate Satellite Nodes around their axes
      nodeMeshes.forEach((m) => {
        m.rotation.y += 0.01;
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvasElem.removeEventListener('mousemove', handleMouseMove);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [activeTab]);

  return (
    <div className="relative w-full rounded-2xl bg-[#090c14] border border-white/10 overflow-hidden shadow-2xl">
      
      {/* Terminal UI Header Bar */}
      <div className="bg-[#0f121a] px-4 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#0070f2] animate-pulse" />
          <span className="text-xs font-mono font-bold text-white tracking-wide">
            SAP BTP & AGENTIC AI MATRIX v4.2
          </span>
        </div>

        {/* View Selector Tabs */}
        <div className="flex items-center gap-1 bg-[#07090e] p-1 rounded-lg border border-white/10">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
              activeTab === 'architecture'
                ? 'bg-[#0070f2] text-white font-semibold'
                : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            Topology
          </button>
          <button
            onClick={() => setActiveTab('ai-mesh')}
            className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
              activeTab === 'ai-mesh'
                ? 'bg-purple-600 text-white font-semibold'
                : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            AI Mesh
          </button>
          <button
            onClick={() => setActiveTab('odata-stream')}
            className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
              activeTab === 'odata-stream'
                ? 'bg-cyan-600 text-white font-semibold'
                : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            OData Streams
          </button>
        </div>
      </div>

      {/* 3D Canvas Mounting Area */}
      <div className="relative w-full h-[450px] lg:h-[500px]">
        <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

        {/* Dynamic Telemetry HUD (Active Hover Node Tooltip) */}
        {activeNode && (
          <div className="absolute bottom-4 left-4 right-4 sm:left-5 sm:right-auto max-w-sm glass-panel p-4 rounded-xl border border-white/15 shadow-2xl transition-all duration-300 animate-fadeIn pointer-events-none">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeNode.glowColor }} />
                <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#38bdf8]">
                  {activeNode.category}
                </span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
                {activeNode.status}
              </span>
            </div>

            <h4 className="text-sm font-bold text-white tracking-tight">{activeNode.name}</h4>
            <p className="text-xs text-[#94a3b8] mt-1 leading-relaxed">{activeNode.desc}</p>

            <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-300">
              <div className="flex items-center gap-1">
                <span className="text-[#64748b]">Latency:</span>
                <span className="text-[#38bdf8] font-bold">{activeNode.latency}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#64748b]">Protocol:</span>
                <span className="text-white font-bold">{activeNode.protocol}</span>
              </div>
            </div>
          </div>
        )}

        {/* Micro System Status Footer Overlay */}
        <div className="absolute top-4 right-4 pointer-events-none hidden sm:flex items-center gap-3 px-3 py-1.5 rounded-xl bg-[#0f121a]/90 border border-white/10 text-[11px] font-mono text-[#94a3b8]">
          <div className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>Nodes: <strong className="text-white">6 Active</strong></span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>Sync: <strong className="text-emerald-400">100%</strong></span>
          </div>
        </div>

      </div>

    </div>
  );
};
