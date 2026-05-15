/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200; // offset for navbar and earlier trigger

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Call once to set initial state based on current scroll position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 w-full z-50 border-b border-white/10 bg-brand-bg/80 backdrop-blur-md shadow-[0_0_20px_rgba(70,5,255,0.1)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="#home" className="text-2xl font-black tracking-tighter text-white">Nahijul.</a>
        
        <div className="hidden md:flex items-center space-x-8 font-sans text-sm font-medium tracking-wide">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={`#${link.id}`}
                className={`transition-all duration-200 ${
                  isActive 
                    ? 'text-brand-primary font-bold border-b-2 border-brand-primary pb-1' 
                    : 'text-slate-400 hover:text-brand-secondary'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        <a href="#contact" className="bg-brand-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-brand-secondary active:-translate-y-px transition-all duration-200 block">
          Hire Me
        </a>
      </div>
    </nav>
  );
}
