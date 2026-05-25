/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Phone, Play } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

interface HeroProps {
  onOrderClick: () => void;
}

export default function Hero({ onOrderClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row bg-brand-bg overflow-hidden">
      {/* Editorial Content Side */}
      <div className="lg:w-1/2 flex items-center justify-center p-8 pt-32 lg:p-24 relative z-20">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[1px] bg-brand-gold"></span>
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-brand-gold">MERAVID TRADING CO.</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black text-brand-dark leading-[1.1] mb-8">
              تامین <span className="text-brand-green italic">هوشمندانه</span> <br />
              نهاده‌های دامی
            </h1>
            
            <p className="text-lg lg:text-xl text-brand-dark/70 font-medium leading-relaxed mb-12 text-balance">
              شرکت بازرگانی مهرآوید تجارت، پلی میان کیفیت جهانی و نیاز هوشمندانه صنعت دام و طیور کشور. با مدیریت مستقیم {COMPANY_INFO.ceo}، ما تداوم کیفیت را تضمین می‌کنیم.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <button 
                onClick={onOrderClick}
                className="group flex items-center gap-4 px-10 py-5 bg-brand-dark text-brand-bg rounded-full font-bold text-lg hover:bg-brand-green transition-all shadow-2xl hover:-translate-y-1 active:translate-y-0"
              >
                ثبت سفارش آنلاین
                <div className="w-8 h-8 rounded-full bg-brand-bg/10 flex items-center justify-center group-hover:bg-brand-bg/20 transition-colors">
                  <ArrowLeft size={18} />
                </div>
              </button>
              
              <div className="flex items-center gap-4">
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-brand-dark/10 text-brand-dark hover:border-brand-green hover:text-brand-green transition-all"
                >
                  <Phone size={24} />
                </a>
                <span className="hidden sm:block text-sm font-bold text-brand-dark/60 tracking-wider">مشاوره تلفنی</span>
              </div>
            </div>

            <div className="mt-20 grid grid-cols-3 gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-black text-brand-dark">۱۵+</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-leaf">سال اعتبار</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-black text-brand-dark">۲K+</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-leaf">مشتری وفادار</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-black text-brand-dark">۱۰۰٪</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-leaf">تضمین سلامت</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Cinematic Visual Side */}
      <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-screen overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb752b1b?auto=format&fit=crop&q=80&w=2000" 
            alt="Agriculture Trading"
            className="w-full h-full object-cover grayscale-[20%] sepia-[10%] hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
        </motion.div>
        
        {/* Decorative Badge */}
        <motion.div 
          initial={{ opacity: 0, rotate: -20, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 5, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-16 right-16 w-40 h-40 bg-brand-gold/90 backdrop-blur-md rounded-full flex flex-col items-center justify-center text-center p-4 shadow-2xl z-30"
        >
          <span className="text-white font-black text-3xl leading-none">PREMIUM</span>
          <span className="text-white/80 text-[8px] uppercase tracking-[0.3em] mt-2 font-bold">Standard 2026</span>
          <div className="w-8 h-[1px] bg-white/40 mt-3"></div>
        </motion.div>

        {/* Floating Play Button for "The Vibe" */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 flex items-center justify-center text-white shadow-2xl z-20 group"
          >
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-brand-dark group-hover:bg-brand-gold group-hover:text-white transition-colors">
              <Play fill="currentColor" size={24} />
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
