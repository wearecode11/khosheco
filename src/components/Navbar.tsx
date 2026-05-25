/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Menu, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../constants';

interface NavbarProps {
  onConsultationClick: () => void;
}

export default function Navbar({ onConsultationClick }: NavbarProps) {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-0 right-0 z-50 px-4"
    >
      <div className="max-w-7xl mx-auto glass-card rounded-full overflow-hidden">
        <div className="px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-brand-bg font-extrabold text-xl shadow-lg shadow-brand-green/20">
              م
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black text-brand-dark leading-none">{COMPANY_INFO.name}</span>
              <span className="text-[10px] text-brand-leaf font-medium uppercase tracking-[0.2em] mt-1">Trading & Logistics</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              <li><a href="#" className="text-sm font-semibold text-brand-dark/60 hover:text-brand-green transition-colors">صفحه اصلی</a></li>
              <li><a href="#products" className="text-sm font-semibold text-brand-dark/60 hover:text-brand-green transition-colors">محصولات</a></li>
              <li><a href="#about" className="text-sm font-semibold text-brand-dark/60 hover:text-brand-green transition-colors">درباره مهرآوید</a></li>
            </ul>
            
            <div className="h-6 w-px bg-brand-dark/10"></div>
            
            <button 
              onClick={onConsultationClick}
              className="group relative flex items-center gap-2 px-6 py-2 bg-brand-green text-white rounded-full font-bold text-sm hover:bg-brand-dark transition-all shadow-xl shadow-brand-green/20"
            >
              <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              مشاوره رایگان
            </button>
          </div>

          <div className="lg:hidden">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-dark/5 hover:bg-brand-dark/10 transition-colors">
              <Menu size={20} className="text-brand-dark" />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
