'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, ArrowUpRight } from 'lucide-react';
import { TREATMENTS, RECOMMENDED_IDS, Treatment } from '@/data/clinic-data';
import { SectionHeading } from './SectionHeading';

interface RecommendedSectionProps {
  onBookTreatment: (treatment: Treatment) => void;
}

export const RecommendedSection: React.FC<RecommendedSectionProps> = ({ onBookTreatment }) => {
  const picks = RECOMMENDED_IDS.map((id) => TREATMENTS.find((t) => t.id === id)).filter(
    (t): t is Treatment => Boolean(t)
  );

  return (
    <section id="recommended" className="bg-[#f7f7f4] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading eyebrow="First time here" description="Three signature treatments we suggest to begin your journey with us.">
          Recommended for your <span className="italic text-[#739cd2]">first</span> visit
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {picks.map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`group flex flex-col ${i === 1 ? 'md:mt-12' : ''}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#f0efec] shadow-md border border-[#484774]/10">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {t.badge && (
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-[9px] uppercase tracking-[0.2em] font-semibold text-[#484774] shadow-sm">
                    {t.badge}
                  </span>
                )}
              </div>
              <div className="pt-6 space-y-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-[#5c6c84] tabular-nums">
                  <span className="flex items-center gap-2"><Clock className="w-3 h-3" aria-hidden="true" />{t.duration}</span>
                  <span className="text-[#484774] font-semibold">{t.price}</span>
                </div>
                <h3 className="font-serif text-2xl leading-snug font-normal text-[#484774] group-hover:text-[#739cd2] transition-colors">{t.name}</h3>
                <p className="text-sm leading-loose tracking-[0.03em] text-[#5c6c84] line-clamp-3">{t.shortDesc}</p>
                <button
                  onClick={() => onBookTreatment(t)}
                  className="mt-auto self-start inline-flex items-center gap-2 border-b border-[#484774] pb-1 text-[11px] uppercase tracking-[0.2em] font-medium text-[#484774] hover:text-[#739cd2] hover:border-[#739cd2] transition-colors"
                >
                  Reserve this treatment <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
