/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { ArrowLeft, ShoppingCart } from 'lucide-react';

export default function Products() {
  return (
    <section id="products" className="py-32 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs font-bold uppercase tracking-[0.4em] text-brand-gold mb-4 block"
            >
              OUR COLLECTION
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark leading-tight">
              محصولات استراتژیک <br />
              <span className="text-brand-green italic">مهرآوید تجارت</span>
            </h2>
          </div>
          <p className="text-brand-dark/60 max-w-sm font-medium leading-relaxed">
            ما مجموعه‌ای از باکیفیت‌ترین نهاده‌های دامی را با استانداردهای نوین بین‌المللی برای پایداری تولید شما تامین می‌کنیم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative flex flex-col md:flex-row bg-white rounded-[2.5rem] overflow-hidden border border-brand-dark/5 hover:border-brand-green/20 transition-all hover:shadow-2xl hover:shadow-brand-green/10"
            >
              <div className="md:w-1/2 aspect-square overflow-hidden overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <div className="w-12 h-12 rounded-2xl bg-brand-bg flex items-center justify-center text-brand-gold font-black mb-6 border border-brand-dark/5">
                  ۰{index + 1}
                </div>
                <h3 className="text-2xl font-black text-brand-dark mb-4">{product.name}</h3>
                <p className="text-brand-dark/50 text-sm mb-8 leading-relaxed font-medium">
                  {product.description}
                </p>
                
                <button className="flex items-center gap-3 text-brand-green font-black group/btn">
                  <span>استعلام قیمت و سفارش</span>
                  <div className="w-10 h-10 rounded-full border border-brand-green/20 flex items-center justify-center group-hover/btn:bg-brand-green group-hover/btn:text-white transition-all transform group-hover/btn:translate-x-2">
                    <ArrowLeft size={16} />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
