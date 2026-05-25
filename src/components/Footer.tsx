/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, MapPin, Phone, Instagram, Send, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-brand-dark text-white pt-32 pb-12 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">
          
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-green rounded-2xl flex items-center justify-center text-brand-bg font-black text-2xl shadow-xl shadow-brand-green/20">
                م
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black">{COMPANY_INFO.name}</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold">International Trading</span>
              </div>
            </div>
            <p className="text-white/40 leading-relaxed mb-10 text-lg font-medium">
              تخصص ما، تامین پایداری برای صنعت دام و طیور است. با تکیه بر دانش روز و لجستیک قدرتمند.
            </p>
            <div className="flex gap-4">
              {[Instagram, Send].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-all group">
                  <Icon size={20} className="text-white/60 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.4em] font-black text-brand-gold mb-10">دسترسی</h4>
            <ul className="space-y-6">
              {['صفحه اصلی', 'محصولات ما', 'درباره مهرآوید', 'مشاوره رایگان'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-white/60 hover:text-white font-bold transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green scale-0 group-hover:scale-100 transition-transform"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <h4 className="text-xs uppercase tracking-[0.4em] font-black text-brand-gold mb-10">ارتباط هوشمند</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-brand-green" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-white/30 font-black mb-2">ADDRESS</span>
                    <p className="text-sm font-bold leading-relaxed">{COMPANY_INFO.address}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-brand-green" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-white/30 font-black mb-2">CONTACT</span>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="block text-sm font-bold hover:text-brand-gold transition-colors">{COMPANY_INFO.phone} - {COMPANY_INFO.ceo}</a>
                    <a href={`tel:${COMPANY_INFO.officePhone}`} className="block text-sm font-bold hover:text-brand-gold transition-colors mt-1">دفتر: {COMPANY_INFO.officePhone}</a>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 relative group">
                <div className="absolute top-6 left-6 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={20} />
                </div>
                <h5 className="text-lg font-black mb-4">همکاری با ما</h5>
                <p className="text-xs text-white/40 leading-relaxed mb-6 font-medium">به جمع تامین‌کنندگان یا مشتریان تراز اول ما بپیوندید.</p>
                <button className="w-full py-3 bg-brand-green text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all">
                  شروع همکاری
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-[0.2em] font-black text-white/20">
          <p>© ۲۰۲۶ MERAVID TRADING. ALL RIGHTS RESERVED.</p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            BACK TO TOP
            <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center">
              <ArrowUpRight size={10} strokeWidth={3} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
