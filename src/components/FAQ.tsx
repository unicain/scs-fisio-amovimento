import React, { useState } from 'react';
import { lpData } from '../data';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function FAQ() {
  if (!lpData.faq) return null;
  const [openId, setOpenId] = useState<string | null>(lpData.faq.items[0]?.id || null);

  return (
    <section className="bg-white py-24 sm:py-32" id="faq">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-display font-bold tracking-tight text-slate-900 sm:text-4xl">
            {lpData.faq.sectionTitle}
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-3xl divide-y divide-slate-200">
           {lpData.faq.items.map((item) => (
             <div key={item.id} className="py-6">
                <button 
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                  className="flex w-full items-start justify-between text-left text-slate-900 group"
                >
                  <span className="text-base font-semibold leading-7 group-hover:text-slate-600 transition-colors">
                     {item.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                     {openId === item.id ? (
                        <Minus className="h-5 w-5" style={{ color: lpData.theme.primaryColor }} />
                     ) : (
                        <Plus className="h-5 w-5 text-slate-400 group-hover:text-slate-600 transition-colors" />
                     )}
                  </span>
                </button>
                <AnimatePresence>
                   {openId === item.id && (
                     <motion.div
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: 'auto', opacity: 1 }}
                       exit={{ height: 0, opacity: 0 }}
                       className="overflow-hidden"
                     >
                       <p className="mt-4 text-base leading-7 text-slate-600">
                          {item.answer}
                       </p>
                     </motion.div>
                   )}
                </AnimatePresence>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
