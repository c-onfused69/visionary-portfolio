/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';


export default function HomePage() {
  const featuredWork = [
    {
      title: "Ask Your Bee",
      category: "UI/UX Design",
      image: "https://github.com/c-onfused69/portfolio-template-cms/blob/master/root/images/showcase/works/askyourbee.png?raw=true",
      desc: "A next-generation Ai Driven Q&A platform that delivers instant, accurate answers to complex questions across any domain."
    },
    {
      title: "Ether Flow",
      category: "Web App",
      image: "https://github.com/c-onfused69/portfolio-template-cms/blob/master/root/images/My%20work%201.png?raw=true",
      desc: "Real-time collaboration platform for distributed engineering teams working on high-scale systems."
    },
    {
      title: "Pliain Piir",
      category: "Branding",
      image: "https://github.com/c-onfused69/portfolio-template-cms/blob/master/root/images/showcase/9.png?raw=true",
      desc: "Complete visual identity design for a pet shop specializing in fishkeeping hobby."
    }
  ];

  return (
    <div className="relative overflow-hidden">


      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden pointer-events-none">
        {/* Spline Background */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-auto">
          <iframe 
            src="https://my.spline.design/googlyeyes-dKPv1crqYGxmTiGJTjGWDQ8K-R6o/" 
            frameBorder="0" 
            width="100%" 
            height="100%"
            className="w-full h-full"
          ></iframe>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 flex flex-col items-center justify-center pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto"
          >
            <span className="text-[#4605FF] font-bold text-xs uppercase tracking-widest">Available for Freelance</span>
            <h1 className="text-6xl md:text-7xl font-black leading-[1.1] tracking-tight text-white">
              Crafting Digital <span className="text-brand-primary">Experiences</span> that Matter.
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              I bridge the gap between technical complexity and intuitive design. Let's build something visionary together.
            </p>
            <div className="flex justify-center gap-4 mt-4 w-full">
              <a href="#contact" className="bg-brand-primary text-white px-8 py-4 rounded-xl font-bold transition-all duration-200 hover:bg-brand-secondary hover:-translate-y-1 special-glow">
                Get in Touch
              </a>
              <a href="#projects" className="border border-brand-primary/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-primary/10 transition-colors">
                View Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-brand-indigo">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Work</h2>
              <p className="text-slate-400 max-w-md">Selected projects that showcase my passion for design and engineering.</p>
            </div>
            <a href="#projects" className="text-brand-primary font-bold flex items-center gap-2 group">
              See All Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredWork.map((project, index) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl overflow-hidden flex flex-col group"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src={project.image}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <span className="text-brand-secondary text-xs font-bold uppercase tracking-widest">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Chips Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {['Figma', 'Tailwind CSS', 'React.js', 'TypeScript', 'Motion Design', 'Product Strategy'].map((skill, index) => (
              <motion.div 
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-2 bg-[#0135e2]/15 border border-[#0135e2]/30 text-[#bac3ff] rounded-full font-bold text-xs uppercase tracking-widest"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
