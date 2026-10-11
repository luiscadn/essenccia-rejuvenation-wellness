'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Award, Play } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="top" className="relative bg-[#f7f7f4] overflow-hidden scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-16 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-end">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 lg:pb-8 space-y-9 relative z-10"
          >
            {/* Badges row including the Best of 2026 Winner pill */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href="#award"
                className="group inline-flex items-center gap-2 bg-[#484774] text-white px-3.5 py-1.5 text-[10px] uppercase tracking-[0.22em] font-medium hover:bg-[#3b3a63] transition-colors border border-[#d7a761]/40 shadow-sm"
              >
                <Award className="w-3.5 h-3.5 text-[#d7a761] group-hover:scale-110 transition-transform" />
                <span>Best of 2026 Day Spa Winner</span>
                <span className="text-[#d7a761] font-semibold">· Westport, CT</span>
              </a>

              <span className="inline-flex items-center gap-2 border border-[#484774]/15 bg-white px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium text-[#484774]">
                <MapPin className="w-3 h-3 text-[#d7a761]" aria-hidden="true" />
                25 Sylvan Rd S
              </span>

              <span className="inline-flex items-center gap-2 border border-[#d7a761]/50 bg-white/80 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium text-[#484774] tabular-nums">
                23+ Years Mastery
              </span>
            </div>

            {/* Editorial Main Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[5.5rem] font-light leading-[1.02] tracking-tight text-[#484774] text-balance">
              Awaken your <span className="italic text-[#739cd2]">true essence</span> through clinical{' '}
              <span className="italic">regenerative</span> science
            </h1>

            <p className="max-w-lg text-sm sm:text-base leading-loose tracking-[0.04em] text-[#5c6c84]">
              Non-surgical skin tightening, nano-needling and body sculpting, guided by more than two decades of medical aesthetic practice and an unhurried, individual approach.
            </p>

            {/* CTA action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#484774] hover:bg-[#3b3a63] text-[#f7f7f4] text-[11px] uppercase tracking-[0.2em] font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[#739cd2] focus-visible:ring-offset-2 shadow-sm"
              >
                Reserve a consultation
                <ArrowRight className="w-4 h-4 text-[#d7a761] transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#facilities"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-white hover:bg-stone-50 border border-[#484774]/20 hover:border-[#484774] text-[#484774] text-[11px] uppercase tracking-[0.2em] font-medium transition-colors"
              >
                <Play className="w-3.5 h-3.5 text-[#d7a761] fill-current group-hover:scale-110 transition-transform" />
                Watch Sanctuary Tour
              </a>

              <a
                href="#treatments"
                className="inline-flex items-center justify-center px-6 py-4 border border-transparent hover:border-[#484774]/20 text-[#484774] text-[11px] uppercase tracking-[0.2em] font-medium transition-colors"
              >
                Treatments
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden shadow-[0_20px_40px_-20px_rgba(72,71,116,0.3)]">
              <Image
                src="/images/hero-clinic.jpg"
                alt="Treatment room at Essenccia Rejuvenation & Wellness in Westport, CT"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
            
            <div className="hidden lg:block absolute -left-16 -bottom-8 w-56 aspect-square overflow-hidden border-8 border-[#f7f7f4] shadow-lg">
              <Image
                src="/images/ledy-treatment.jpg"
                alt="Ledy performing a clinical facial treatment"
                fill
                sizes="224px"
                className="object-cover"
              />
            </div>

            <div className="absolute top-6 -right-0 sm:right-6 bg-[#484774] text-[#f7f7f4] px-5 py-4 border-b-2 border-[#d7a761] shadow-md">
              <p className="font-serif text-4xl font-light leading-none tabular-nums">23<span className="text-[#d7a761]">+</span></p>
              <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#a2a1ba]">Years of mastery</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
