'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BEFORE_AFTER } from '@/data/clinic-data';
import { SectionHeading } from './SectionHeading';

export const BeforeAfterSection: React.FC = () => {
  return (
    <section id="results" className="bg-[#f7f7f4] py-24 lg:py-32 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading eyebrow="Real cases" description="Unretouched photographs from real Essenccia clients. Individual results vary.">
          Results that <span className="italic text-[#739cd2]">speak</span> quietly
        </SectionHeading>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [&>*]:mb-6">
          {BEFORE_AFTER.map((c, i) => (
            <motion.figure
              key={c.image}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.12 }}
              className="break-inside-avoid bg-white border border-[#484774]/10 group shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative overflow-hidden bg-[#f0efec]">
                <Image
                  src={c.image}
                  alt={`Before and after: ${c.treatment}, ${c.goal}`}
                  width={1000}
                  height={800}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="p-6 space-y-3">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="eyebrow !text-[#d7a761]">Case</span>
                  <span className="text-[11px] tabular-nums text-[#a2a1ba] tracking-[0.15em]">0{i + 1}</span>
                </div>
                <h3 className="font-serif text-2xl font-normal text-[#484774] leading-snug">{c.treatment}</h3>
                <dl className="space-y-1.5 text-xs leading-relaxed tracking-[0.03em]">
                  <div className="flex gap-2"><dt className="uppercase tracking-[0.15em] text-[#5c6c84] w-14 shrink-0">Goal</dt><dd className="text-[#484774]">{c.goal}</dd></div>
                  <div className="flex gap-2"><dt className="uppercase tracking-[0.15em] text-[#5c6c84] w-14 shrink-0">Result</dt><dd className="text-[#484774]">{c.result}</dd></div>
                </dl>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
