'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PROMISES } from '@/data/clinic-data';
import { SectionHeading } from './SectionHeading';

export const PromisesSection: React.FC = () => {
  return (
    <section id="promises" className="bg-[#f0efec] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading eyebrow="Our promise" description="What you can always expect when you sit down with us.">
          Four promises at <span className="italic text-[#739cd2]">every</span> consultation
        </SectionHeading>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#484774]/10 border border-[#484774]/10">
          {PROMISES.map((p, i) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white p-8 lg:p-10 space-y-6 min-h-72 flex flex-col hover:bg-stone-50/80 transition-colors"
            >
              <span className="font-serif italic text-5xl font-light text-[#d7a761] tabular-nums">0{i + 1}</span>
              <h3 className="font-serif text-2xl font-normal leading-snug text-[#484774]">{p.title}</h3>
              <p className="mt-auto text-sm leading-loose tracking-[0.03em] text-[#5c6c84]">{p.text}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
