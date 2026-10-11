'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { REASONS } from '@/data/clinic-data';
import { SectionHeading } from './SectionHeading';

export const ReasonsSection: React.FC = () => {
  return (
    <section id="reasons" className="bg-[#484774] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-14">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-4"
        >
          <SectionHeading eyebrow="Why Essenccia" tone="dark">
            Three reasons clients <span className="italic text-[#739cd2]">choose</span> us
          </SectionHeading>
        </motion.div>

        <ol className="lg:col-span-8 divide-y divide-[#f7f7f4]/15 border-y border-[#f7f7f4]/15">
          {REASONS.map((r, i) => (
            <motion.li
              key={r.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="grid grid-cols-[4rem_1fr] sm:grid-cols-[6rem_1fr] gap-4 py-10 group"
            >
              <span className="font-sans text-4xl sm:text-5xl font-semibold text-[#d7a761] tabular-nums group-hover:scale-105 transition-transform origin-left">
                {r.number}.
              </span>
              <div className="space-y-3">
                <h3 className="font-sans text-xl sm:text-2xl font-semibold leading-snug text-[#f7f7f4] group-hover:text-[#739cd2] transition-colors">
                  {r.title}
                </h3>
                <p className="max-w-xl text-sm leading-loose tracking-[0.03em] text-[#a2a1ba]">{r.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};
