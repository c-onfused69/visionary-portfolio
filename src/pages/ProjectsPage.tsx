/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      title: "Nebula Dashboard",
      tags: ["React", "Three.js"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2QXifgT8D9sNE9yp9JiPUM_IOHoO925F1mlUsk38jpbEk79YrDHOoIx70Eu9hun6kDiGMGunw1UHt-68a0mX2jhK1-idMd3Lfq0kcsI_FJ09UryPSf86-ZJgUyQ-PREi63KNBrg1FxVZaNIxDuRF9Oncu8qDvcjW7ekPfIirwVbmMVuWoTcZ0S35xpVL4V9OEAJRhAkZvFBtl4zQfQMzqzWIrddivlUXcfpLtMwxRNRhu5RscQVMhQTwETwJVZCXaQ6Rzbja3jbGc",
      desc: "A real-time data visualization platform for cosmic telemetry and star system tracking."
    },
    {
      title: "Quantum OS",
      tags: ["Next.js", "Tailwind"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClAn-Dcse5GUP5ihh8e8_-nllv91K8Am0eGglV-Mt-fISSvKL3U413CSeN0ZTyiax5VDRsfMBaYuHBVWE6fbKUS78pqFjcrPY4wJiLKmNf6Q0Ivvty3Brys--nooxZDm6jFIvbLupVuqmoDN-oFePN4vieepKjNf6Q9P_cSNXITxUC1c2QXCV0FC3lrW5yR4ByAXxoMu5TB97k8-2Y20QAS3sT7HmvJK-Nrnz8eUGy_kaXMxOxPzgnutNG6euVy3dPVbvVejqsBi-2",
      desc: "An experimental web-based operating system focusing on zero-latency file management."
    },
    {
      title: "Prism AI",
      tags: ["Python", "AI/ML"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrOg6equNQOtmGvxvbheKVd6PenD0vdHU5SO92YkHGLWc18WxPwi4coRStmyBC1rdIYj0Y8iWWSpjPD80NCS7gZC9fvJk4FkJ6nyBx9OL6y5-FlutOB7tGi-6vYN6gs7o7RzEiGtolq4_wRXidwNkyWFqlElcGIcsI3oinPKhS_-cHvHvAt_De6a8lSWqWmcDxPWFCXUhXaBElD-SYkkvTRNm7T9MBn42GXRyHS4nHZo7Ckg1sxXJEisPJyFS9hBbf0VlNo4GCwcaN",
      desc: "Machine learning algorithm that generates procedural 3D art based on atmospheric audio input."
    },
    {
      title: "Aura Connect",
      tags: ["Go", "WebRTC"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHfvpRLciXZ2i7ouDaVxWbzj6nVYEaWnRB5SRQkZsLk2dzk1mPbTEFb9G5p24Cs76Rc5H3DczjnW4lQ5sxReQiA7n6qAVBG7AFNKjgFZwM1SyDE1Vo83A0FleuAF8K4viMlTw9mtz4COYnOY9zuNGGTdxM8qjpFvtmWn40YeafaHblQbkcbEesBHKGNVpcyBJTGnsmcsJqpHmUc7hdJOfcBuXVxcadkKzfXbxXGF8pjJodJ8LDVYl9evHGdVXYafa6ceMq8NgFt68b",
      desc: "P2P encrypted communication tool with zero-trust architecture and holographic UI components."
    },
    {
      title: "Void Engine",
      tags: ["Unity", "C#"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBmyjGWx5HD1G-lMUsjxhFccNLlup2Oh6RkdM6QO_WEu4_r5IE-PF9BShZYi-t2AVaolCiJgrdWdr1ds90gzkX3LTM21Ntzwdn3QE72XsgPPUVo2JIeOWvtCTr4BzC0VNHusAVeh9ESucfI7JMleIL5n8i-mp9g65e0_E9cxP3eclgq4u_L8pHBkTquWUV_Uyekl8Op-m8TzfMRGB3Q38DhchyeZiyx9gpXEof9h3YxaH_pnQ2qH3wWwt-vrMl7qxdg7LFzoyE2D3V",
      desc: "A custom game engine built for ultra-fast rendering of black holes and gravitational lensing."
    },
    {
      title: "Forge Ledger",
      tags: ["Solidity", "Rust"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhNgOAVZsnZUd1JDiLyYfC95_djbfq1WAx31wR19mLz1oldGafY452_d4Wv-PWqtNctQslkBA-1ZGulrT0YnmSAPC7QJqvKi3kgM-iLF-8Y25xNIqKWhNqJTBsRtVVDq2CPs_7oNtM9-Ii5_ULkifNPElIYc1oMTA_X2GxJoTo6qwYeZxnetFBeN5DVfhEASXjS8U8zt9KNn34NsgnlCeukaaXZeO0n_avQVvSx3GC4t_GAxaoCli15KXFLkRKjglqqhCm9Uz5Jonw",
      desc: "Decentralized asset management system with custom smart contract security auditing."
    }
  ];

  return (
    <div className="relative">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#4605FF]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Header Section */}
      <section className="bg-brand-indigo pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">My Projects</h1>
            <p className="text-lg text-slate-400 max-w-2xl">
              A curated showcase of technical precision and creative vision. Exploring the intersection of high-performance engineering and futuristic design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl overflow-hidden hover:border-white/30 hover:special-glow transition-all duration-300 group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src={project.image}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-brand-secondary/15 text-brand-secondary text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-slate-400 text-sm">{project.desc}</p>
                  <a className="inline-flex items-center gap-2 font-bold text-white hover:text-brand-secondary transition-colors" href="#">
                    View Project 
                    <ArrowRight size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/5 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Start a Project Together?</h2>
          <p className="text-lg text-slate-400 mx-auto max-w-xl">
            I'm currently available for freelance work and technical consultations. Let's build something extraordinary.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            {/* <button className="bg-brand-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-secondary hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-brand-primary/20">
              Email Me
            </button> */}
            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=n_iloy@outlook.com"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-brand-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-secondary hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-brand-primary/20 inline-flex items-center justify-center"
>
  Email Me
</a>
            {/* <button className="border border-[#0135e2] text-[#bac3ff] px-8 py-3 rounded-lg font-bold hover:bg-[#0135e2]/10 transition-all duration-300">
              View Resume
            </button> */}
            <a
    href="https://flowcv.com/resume/3lwjmp6d8i2j"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-[#0135e2] text-[#bac3ff] px-8 py-3 rounded-lg font-bold hover:bg-[#0135e2]/10 transition-all duration-300 inline-flex items-center justify-center"
  >
    View Resume
  </a>


          </div>
        </div>
      </section>
    </div>
  );
}
