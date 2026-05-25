/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../constants';
import { Shield, Sparkles, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80&w=1200" 
                alt="Agricultural landscape"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-brand-green/10 mix-blend-multiply"></div>
            </motion.div>
            
            {/* Stat Overlays */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -right-10 glass-card p-10 rounded-[2.5rem] bg-brand-green text-brand-bg z-20 hidden md:block"
            >
              <p className="text-5xl font-black mb-2">۱۵+</p>
              <p className="text-xs uppercase tracking-widest font-bold opacity-70">سال سابقه درخشان</p>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-gold mb-6 block">HISTORY & MISSION</span>
              <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-8 leading-tight">
                تعهدی به رنگ <span className="text-brand-green">اصالت</span>، 
                خدمتی به وسعت ایران
              </h2>
              <p className="text-lg text-brand-dark/60 font-medium leading-relaxed mb-12">
                در {COMPANY_INFO.name}، ما معتقدیم که بازرگانی تنها جابه‌جایی کالا نیست، بلکه مدیریت زنجیره ارزش و ایجاد اطمینان برای تولیدکنندگان است. تحت نظارت دقیق جناب آقای {COMPANY_INFO.ceo}، ما استانداردهای جدیدی در تامین نهاده‌های دامی تعریف کرده‌ایم.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-8 bg-brand-bg rounded-3xl border border-brand-dark/5 hover:border-brand-green/20 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-green mb-6 shadow-sm">
                    <Shield size={24} />
                  </div>
                  <h4 className="text-xl font-black text-brand-dark mb-2">اصالت کالا</h4>
                  <p className="text-sm text-brand-dark/50 leading-relaxed font-medium">تضمین ۱۰۰ درصدی تطابق آنالیز بار با نمونه ارسالی.</p>
                </div>
                
                <div className="p-8 bg-brand-bg rounded-3xl border border-brand-dark/5 hover:border-brand-green/20 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-green mb-6 shadow-sm">
                    <Zap size={24} />
                  </div>
                  <h4 className="text-xl font-black text-brand-dark mb-2">سرعت در لجستیک</h4>
                  <p className="text-sm text-brand-dark/50 leading-relaxed font-medium">ارسال محموله در کمترین زمان ممکن از مبادی ورودی کشور.</p>
                </div>
              </div>

              <div className="mt-12 p-8 border-r-4 border-brand-green bg-brand-green/5 rounded-l-3xl">
                <p className="text-brand-dark/80 italic font-bold">
                  "ما در مهرآوید تجارت، نه تنها فروشنده، بلکه شریک تجاری شما در مسیر تامین و تولید هستیم."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-dark/10 flex items-center justify-center">
                    <Sparkles size={16} className="text-brand-gold" />
                  </div>
                  <span className="text-sm font-black text-brand-dark">{COMPANY_INFO.ceo} - مدیرعامل</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
