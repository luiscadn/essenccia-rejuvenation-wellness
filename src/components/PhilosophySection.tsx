'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="bg-[#f0efec] py-28 lg:py-40 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3"
        >
          <span className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-[#d7a761]" aria-hidden="true" />
            Message
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-9 space-y-10"
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-light leading-[1.08] tracking-tight text-[#484774] text-balance">
            We believe beauty maintenance should be <span className="italic text-[#739cd2]">accessible</span>,{' '}
            <span className="italic">comforting</span>, and deeply <span className="italic text-[#739cd2]">transformative</span>.
          </h2>
          <p className="max-w-2xl text-sm sm:text-base leading-loose tracking-[0.04em] text-[#5c6c84]">
            Essenccia was founded on a simple idea: clinical results should never feel clinical. Every protocol begins with listening, and every visit is designed to leave you calmer, clearer and more yourself.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
