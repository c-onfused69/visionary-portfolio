/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Brush, Code, Layout, Box, Database, Terminal, Palette, Cloud } from 'lucide-react';

export default function AboutPage() {
  const arsenal = [
    { name: "UI Design", icon: Brush },
    { name: "Frontend Dev", icon: Code },
    { name: "System Design", icon: Layout },
    { name: "Motion Graphics", icon: Box },
    { name: "Node.js / SQL", icon: Database },
    { name: "React / Vue", icon: Terminal },
    { name: "Brand Strategy", icon: Palette },
    { name: "Cloud Arch", icon: Cloud },
  ];

  const journey = [
    {
      period: "2023 — Present",
      role: "Project Manager @ Desh Engineering",
      desc: "Manage 5+ concurrent engineering projects from initiation to delivery, ensuring all project documentation is complete, accurate, and aligned with requirements. Monitor budgets and material costs, achieving a 10% reduction in spending through careful planning and proactive adjustments."
    },
    {
      period: "2022 — 2023",
      role: "Data Analyst @ 3PL Express (Redx)",
      desc: "Verified and processed an average of 1,500+ daily logistics data entries, maintaining 99% accuracy while meeting tight daily deadlines. Reviewed incoming records to identify missing information, inconsistencies, and errors; proactively reached out to three operational teams to obtain corrections and clarify discrepancies."
    },
    {
      period: "2021 — 2022",
      role: "Logistics Specialist @ Sundarban Courier Service (Pvt.) Ltd.",
      desc: "Coordinated the timely dispatch of 200+ shipments daily, ensuring accurate documentation and compliance with company policies. Collaborated with cross-functional teams to resolve logistical issues, resulting in a 15% improvement in delivery times and enhanced customer satisfaction."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 relative">
      <div className="absolute -z-10 top-0 right-0 w-150 h-150 bg-[#4605FF]/5 blur-[120px] rounded-full" />
      <div className="absolute -z-10 bottom-0 left-0 w-100 h-100 bg-brand-primary/5 blur-[100px] rounded-full" />

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-[#4605FF]/20 blur-3xl opacity-50 group-hover:opacity-75 transition-opacity" />
          <div className="relative aspect-square rounded-xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(70,5,255,0.3)]">
            <img 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              src="https://nniloy888.netlify.app/root/images/DP.jpg"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-black text-white">About Me</h1>
          <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
            <p>
               I am a Web Developer and Data Analyst with a passion for creating innovative and efficient solutions.
            </p>
            <p>
              I endeavor to create high-quality work that satisfies the needs of my clients using my expertise in data analysis and web development.
            </p>
            <p>
              Beyond the screen, I am a lifelong explorer of celestial mechanics and architectural minimalism, influences that you'll find woven throughout my visual style and structural logic.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Technical Arsenal */}
      <section className="mb-24">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-brand-secondary rounded-full" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {arsenal.map((item, index) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-brand-surface p-4 rounded-xl border border-white/10 flex items-center gap-3 group hover:border-brand-secondary transition-colors"
            >
              <item.icon size={20} className="text-brand-secondary group-hover:scale-110 transition-transform" />
              <span className="font-bold text-[10px] uppercase tracking-widest text-brand-secondary">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Professional Journey */}
      <section className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Professional Journey</h2>
          <p className="text-slate-500 text-xs uppercase tracking-[0.2em]">Building the Future, One Block at a Time</p>
        </div>
        
        <div className="relative pl-2">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />
          {journey.map((item, index) => (
            <motion.div 
              key={item.role}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 mb-12"
            >
              <div className="absolute left-1.25 top-2 w-2.75 h-2.75 rounded-full bg-brand-secondary shadow-[0_0_10px_#fabd06]" />
              <span className="text-brand-secondary text-[10px] font-bold uppercase tracking-widest mb-2 block">{item.period}</span>
              <h3 className="text-2xl font-bold text-white">{item.role}</h3>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
