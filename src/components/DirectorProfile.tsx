'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, ArrowRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const CREDENTIALS = [
  { value: '23+', label: 'Years in practice' },
  { value: '2', label: 'Countries of medical training' },
  { value: '1:1', label: 'Individualized protocols' },
  { value: '2026', label: 'Day Spa Winner' },
];

export const DirectorProfile: React.FC = () => {
  return (
    <section id="director" className="bg-[#f7f7f4] py-24 lg:py-32 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-[#f0efec] shadow-[0_20px_40px_-20px_rgba(72,71,116,0.3)]">
            <Image
              src="/fotos_webp/ledy_founder.webp"
              alt="Ledy, founder and director of Essenccia Rejuvenation & Wellness"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-white border border-[#484774]/10 px-6 py-5 shadow-[0_20px_40px_-24px_rgba(72,71,116,0.4)]">
            <p className="eyebrow">Founder &amp; Director</p>
            <p className="font-serif text-3xl font-light text-[#484774] mt-1">Ledy</p>
            <p className="text-[10px] uppercase tracking-wider text-[#d7a761] font-semibold mt-0.5">Best of 2026 Awardee</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-10"
        >
          <SectionHeading eyebrow="The Director">
            Two decades of <span className="italic text-[#739cd2]">listening</span> to skin
          </SectionHeading>

          <div className="space-y-6 max-w-xl text-sm sm:text-base leading-loose tracking-[0.04em] text-[#5c6c84]">
            <p>
              With more than 23 years of experience and medical aesthetic training in Colombia, Ledy brings a holistic, deeply individual perspective to every client she welcomes in Westport.
            </p>
            <p>
              She treats the person, not the chart: skin, lifestyle, and goals are considered together, then matched with the most gentle and effective non-surgical technology available.
            </p>
          </div>

          {/* Award banner link */}
          <div className="max-w-xl p-4 bg-[#f0efec] border-l-4 border-[#d7a761] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-[#d7a761] shrink-0" />
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#484774]">
                  Recognized by BusinessRate Benchmark
                </p>
                <p className="text-xs text-[#5c6c84]">
                  Named Best of 2026 Day Spa in Westport, Connecticut.
                </p>
              </div>
            </div>
            <a
              href="#award"
              className="text-[10px] uppercase tracking-widest text-[#484774] hover:text-[#739cd2] font-semibold shrink-0 flex items-center gap-1"
            >
              Details <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-[#484774]/10 pt-8 max-w-xl">
            {CREDENTIALS.map((c) => (
              <div key={c.label}>
                <dt className="sr-only">{c.label}</dt>
                <dd className="font-serif text-3xl sm:text-4xl font-light text-[#484774] tabular-nums">{c.value}</dd>
                <p className="mt-2 text-[10px] uppercase tracking-[0.18em] leading-relaxed text-[#5c6c84]">{c.label}</p>
              </div>
            ))}
          </dl>
        </motion.div>

      </div>
    </section>
  );
};
