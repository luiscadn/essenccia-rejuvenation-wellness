'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';
import { PROMISES } from '@/data/clinic-data';
import { SectionHeading } from './SectionHeading';

const PROMISE_ICONS = [Clock, Sparkles, HeartHandshake, ShieldCheck];

export const PromisesSection: React.FC = () => {
  return (
    <section id="promises" className="bg-[#f0efec] py-24 lg:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading eyebrow="Our promise" description="What you can always expect when you sit down with us.">
          Four promises at <span className="italic text-[#739cd2]">every</span> consultation
        </SectionHeading>

        {/* Freestanding, soft floating rounded cards (No rigid square grid boxes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PROMISES.map((p, i) => {
            const IconComponent = PROMISE_ICONS[i] || Sparkles;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white/95 rounded-[2rem] p-8 lg:p-9 flex flex-col justify-between border border-[#484774]/10 shadow-[0_15px_35px_-15px_rgba(72,71,116,0.08)] hover:shadow-[0_25px_50px_-15px_rgba(72,71,116,0.18)] transition-all duration-300"
              >
                {/* Top header with circular badge and icon */}
                <div className="flex items-center justify-between pb-6 border-b border-[#484774]/5">
                  <div className="w-12 h-12 rounded-full bg-[#f7f7f4] border border-[#d7a761]/40 flex items-center justify-center text-[#d7a761] shadow-xs group-hover:scale-110 transition-transform">
                    <span className="font-serif italic text-lg font-light tabular-nums">0{i + 1}</span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#484774]/5 flex items-center justify-center text-[#484774] group-hover:text-[#739cd2] transition-colors">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-6 space-y-3 flex-1 flex flex-col">
                  <h3 className="font-serif text-2xl font-light leading-snug text-[#484774] group-hover:text-[#739cd2] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed tracking-[0.03em] text-[#5c6c84] font-light mt-auto pt-2">
                    {p.text}
                  </p>
                </div>

                {/* Bottom delicate accent dot */}
                <div className="pt-6 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d7a761]" />
                  <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-[#484774]">The Essenccia Way</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
