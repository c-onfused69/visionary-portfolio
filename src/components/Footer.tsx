/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Linkedin, Github, Dribbble } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-20 border-t border-white/5 bg-brand-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold text-slate-200">Nahijul.</span>
          <p className="font-sans text-xs uppercase tracking-widest text-slate-500">© 2024 Portfolio. All rights reserved.</p>
        </div>
        
        <div className="flex gap-8">
          <a href="https://www.linkedin.com/in/nahijul-islam-niloy-139a09190/" className="font-sans text-xs uppercase tracking-widest text-slate-500 hover:text-brand-primary transition-colors flex items-center gap-2">
            <Linkedin size={14} /> LinkedIn
          </a>
          <a href="https://github.com/c-onfused69" className="font-sans text-xs uppercase tracking-widest text-slate-500 hover:text-brand-primary transition-colors flex items-center gap-2">
            <Github size={14} /> Github
          </a>
          <a href="#" className="font-sans text-xs uppercase tracking-widest text-slate-500 hover:text-brand-primary transition-colors flex items-center gap-2">
            <Dribbble size={14} /> Dribbble
          </a>
        </div>
      </div>
    </footer>
  );
}
