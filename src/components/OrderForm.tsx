/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, PhoneCall, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { COMPANY_INFO, PRODUCTS } from '../constants';

interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderForm({ isOpen, onClose }: OrderFormProps) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm();

  const onSubmit = async (data: any) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form Data:', data);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-dark/60 backdrop-blur-md z-[60]"
          />
          <motion.div
            initial={{ x: '100%', opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0.5 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 bottom-0 right-0 w-full max-w-lg bg-brand-bg shadow-[-20px_0_80px_rgba(0,0,0,0.2)] z-[70] overflow-y-auto"
          >
            <div className="p-12">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-3xl font-black text-brand-dark">درخواست خدمات</h2>
                  <p className="text-xs font-bold text-brand-gold uppercase tracking-widest mt-2">Personalized Consultation</p>
                </div>
                <button 
                  onClick={onClose}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-dark/5 hover:bg-brand-dark/10 transition-colors"
                >
                  <X size={24} className="text-brand-dark" />
                </button>
              </div>

              {isSubmitSuccessful ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-brand-green/5 border border-brand-green/20 p-10 rounded-[2.5rem] text-center"
                >
                  <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center text-white mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-brand-dark mb-4">با موفقیت ثبت شد</h3>
                  <p className="text-brand-dark/60 font-medium leading-relaxed mb-8">
                    کارشناسان مهرآوید تجارت در کمتر از ۳۰ دقیقه برای هماهنگی نهایی با شما تماس خواهند گرفت.
                  </p>
                  <button 
                    onClick={onClose}
                    className="px-8 py-3 bg-brand-dark text-white rounded-xl font-bold hover:bg-brand-green transition-colors"
                  >
                    بستن پنجره
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="bg-white p-8 rounded-[2rem] border border-brand-dark/5 mb-10 shadow-xl shadow-brand-dark/5">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green">
                        <PhoneCall size={20} />
                      </div>
                      <div>
                        <span className="block text-[10px] font-black text-brand-dark/40 uppercase tracking-widest">Direct Line</span>
                        <a href={`tel:${COMPANY_INFO.phone}`} className="text-xl font-black text-brand-dark hover:text-brand-green transition-colors">
                          {COMPANY_INFO.phone}
                        </a>
                      </div>
                    </div>
                    <p className="text-sm text-brand-dark/60 leading-relaxed font-medium">
                      خط مستقیم مدیریت جهت استعلام قیمت‌های حجیم و قراردادهای بلندمدت.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-black text-brand-dark/40 mr-4">FULL NAME</label>
                      <input
                        {...register('name', { required: true })}
                        className="w-full px-6 py-4 bg-white border border-brand-dark/5 rounded-2xl focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/5 transition-all text-sm font-bold"
                        placeholder="نام و نام خانوادگی خود را وارد کنید"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-black text-brand-dark/40 mr-4">PHONE NUMBER</label>
                      <input
                        {...register('phone', { required: true, pattern: /^[0]{1}[0-9]{10}$/ })}
                        className="w-full px-6 py-4 bg-white border border-brand-dark/5 rounded-2xl focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/5 transition-all text-sm font-bold text-left"
                        placeholder="۰۹۱۲۰۰۰۰۰۰۰"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-black text-brand-dark/40 mr-4">PRODUCT INTEREST</label>
                      <select
                        {...register('product')}
                        className="w-full px-6 py-4 bg-white border border-brand-dark/5 rounded-2xl focus:outline-none focus:border-brand-green transition-all text-sm font-bold appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20fill%3D%27none%27%20viewBox%3D%270%200%2020%2020%27%3E%3Cpath%20stroke%3D%27%236B7280%27%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%20stroke-width%3D%271.5%27%20d%3D%27m6%208%204%204%204-4%27%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_1.5rem_center] bg-no-repeat pr-12"
                      >
                        <option value="none">انتخاب کالا...</option>
                        {PRODUCTS.map(p => (
                          <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-black text-brand-dark/40 mr-4">MESSAGE / SPECS</label>
                      <textarea
                        {...register('message')}
                        className="w-full px-6 py-4 bg-white border border-brand-dark/5 rounded-2xl focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/5 transition-all text-sm font-bold h-32 resize-none"
                        placeholder="توضیحات تکمیلی یا مقدار بر حسب تن..."
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-brand-green text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-brand-dark transition-all shadow-2xl shadow-brand-green/20 disabled:opacity-50"
                    >
                      {isSubmitting ? 'در حال ارسال...' : 'ثبت نهایی درخواست'}
                      <Send size={18} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
