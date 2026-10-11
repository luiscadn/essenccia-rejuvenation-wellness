'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Check } from 'lucide-react';
import { TREATMENTS, Treatment } from '@/data/clinic-data';
import { SectionHeading } from './SectionHeading';

interface TreatmentsSectionProps {
  onSelectTreatment: (treatment: Treatment) => void;
  onBookTreatment: (treatment: Treatment) => void;
}

const TABS = [
  { id: 'face', label: 'Facial' },
  { id: 'body', label: 'Corporal' },
  { id: 'wellness', label: 'Bienestar' },
] as const;

type TabId = (typeof TABS)[number]['id'];

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  onSelectTreatment,
  onBookTreatment,
}) => {
  const [active, setActive] = useState<TabId>('face');
  const items = TREATMENTS.filter((t) => t.category === active);

  return (
    <section id="treatments" className="bg-[#f0efec] py-24 lg:py-32 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <SectionHeading eyebrow="Clinical menu" description="Browse by need. Every treatment is non-surgical and tailored in consultation.">
            The treatment <span className="italic text-[#739cd2]">menu</span>
          </SectionHeading>
          
          <div role="tablist" aria-label="Treatment categories" className="flex border-b border-[#484774]/15">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={active === tab.id}
                aria-controls="treatment-panel"
                onClick={() => setActive(tab.id)}
                className={`px-6 py-4 text-[11px] uppercase tracking-[0.2em] font-medium -mb-px border-b-2 transition-all ${
                  active === tab.id
                    ? 'border-[#484774] text-[#484774] font-semibold'
                    : 'border-transparent text-[#5c6c84] hover:text-[#484774]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div
          id="treatment-panel"
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {items.map((t, index) => (
              <motion.article
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group bg-white border border-[#484774]/10 flex flex-col shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#f0efec]">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {t.badge && (
                    <span className="absolute top-4 left-4 bg-[#f7f7f4] px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] font-semibold text-[#484774] shadow-sm">
                      {t.badge}
                    </span>
                  )}
                </div>
                <div className="p-7 flex-1 flex flex-col gap-5">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.15em] tabular-nums">
                    <span className="flex items-center gap-2 text-[#5c6c84]"><Clock className="w-3.5 h-3.5" aria-hidden="true" />{t.duration}</span>
                    <span className="font-semibold text-[#484774]">{t.price}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-normal leading-snug text-[#484774] group-hover:text-[#739cd2] transition-colors">{t.name}</h3>
                  <ul className="space-y-2.5">
                    {t.benefits.slice(0, 3).map((b) => (
                      <li key={b} className="flex items-start gap-3 text-xs leading-relaxed tracking-[0.03em] text-[#5c6c84]">
                        <Check className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#d7a761]" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 grid grid-cols-2 gap-3">
                    <button
                      onClick={() => onSelectTreatment(t)}
                      className="py-3 border border-[#484774]/25 hover:border-[#484774] text-[10px] uppercase tracking-[0.2em] font-medium text-[#484774] transition-colors"
                    >
                      The science
                    </button>
                    <button
                      onClick={() => onBookTreatment(t)}
                      className="py-3 bg-[#484774] hover:bg-[#3b3a63] text-[10px] uppercase tracking-[0.2em] font-medium text-[#f7f7f4] transition-colors"
                    >
                      Reserve
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
