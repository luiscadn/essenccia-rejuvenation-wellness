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

        {/* Freestanding, soft floating rounded cards (No numbers, large legible typography) */}
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
                className="group relative bg-white rounded-[2.2rem] p-8 sm:p-9 lg:p-10 flex flex-col justify-between border border-[#484774]/12 shadow-[0_15px_35px_-15px_rgba(72,71,116,0.08)] hover:shadow-[0_25px_50px_-15px_rgba(72,71,116,0.18)] transition-all duration-300"
              >
                <div>
                  {/* Distinctive Icon Badge (No number) */}
                  <div className="w-14 h-14 rounded-2xl bg-[#484774]/5 border border-[#484774]/10 flex items-center justify-center text-[#d7a761] group-hover:bg-[#484774] group-hover:scale-105 transition-all duration-300 shadow-xs mb-7">
                    <IconComponent className="w-6 h-6 text-[#d7a761] transition-transform" />
                  </div>

                  {/* Large, High-Legibility Title */}
                  <h3 className="font-sans text-2xl sm:text-[1.75rem] font-semibold tracking-tight leading-snug text-[#484774] group-hover:text-[#739cd2] transition-colors">
                    {p.title}
                  </h3>

                  {/* Large, High-Contrast Description */}
                  <p className="mt-4 text-base sm:text-lg leading-relaxed tracking-[0.01em] text-[#484774]/90 font-normal">
                    {p.text}
                  </p>
                </div>

                {/* Bottom delicate accent dot */}
                <div className="pt-8 mt-6 border-t border-[#484774]/8 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#d7a761]" />
                  <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#484774]">
                    Our Commitment
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
