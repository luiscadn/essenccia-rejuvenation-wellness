'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="top" className="relative bg-[#f7f7f4] overflow-hidden scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 lg:pb-4 space-y-8 relative z-10"
          >

            {/* Editorial Main Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[5.5rem] font-light leading-[1.02] tracking-tight text-[#484774] text-balance">
              Awaken your <span className="italic text-[#739cd2]">true essence</span> through clinical{' '}
              <span className="italic">regenerative</span> science
            </h1>

            <p className="max-w-lg text-sm sm:text-base leading-loose tracking-[0.04em] text-[#5c6c84]">
              Non-surgical skin tightening, nano-needling and body sculpting, guided by more than two decades of medical aesthetic practice and an unhurried, individual approach.
            </p>

            {/* Soft, rounded luxury CTA buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#484774] hover:bg-[#3b3a63] text-[#f7f7f4] text-xs uppercase tracking-[0.16em] font-medium transition-all shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#739cd2]"
              >
                <span>Reserve Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#d7a761] transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#facilities"
                className="group inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-stone-50 border border-[#484774]/20 hover:border-[#484774] text-[#484774] text-xs uppercase tracking-[0.16em] font-medium shadow-xs hover:shadow transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Play className="w-3 h-3 text-[#d7a761] fill-current group-hover:scale-110 transition-transform" />
                <span>Sanctuary Tour</span>
              </a>

              <a
                href="#treatments"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-full bg-[#484774]/5 hover:bg-[#484774]/12 text-[#484774] text-xs uppercase tracking-[0.16em] font-medium transition-all hover:scale-[1.02] border border-transparent hover:border-[#484774]/15"
              >
                <span>Treatments</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-3xl shadow-[0_25px_50px_-20px_rgba(72,71,116,0.35)] border border-[#484774]/10">
              <Image
                src="/images/hero-clinic.jpg"
                alt="Treatment room at Essenccia Rejuvenation & Wellness in Westport, CT"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
            
            <div className="hidden lg:block absolute -left-14 -bottom-6 w-52 aspect-square overflow-hidden rounded-2xl border-4 border-white shadow-xl">
              <Image
                src="/images/ledy-treatment.jpg"
                alt="Ledy performing a clinical facial treatment"
                fill
                sizes="208px"
                className="object-cover"
              />
            </div>

            <div className="absolute top-6 right-6 bg-[#484774]/95 backdrop-blur-md text-[#f7f7f4] px-5 py-4 rounded-2xl border border-[#d7a761]/40 shadow-lg">
              <p className="font-sans text-3xl font-semibold leading-none tabular-nums">23<span className="text-[#d7a761]">+</span></p>
              <p className="mt-1.5 text-[9px] uppercase tracking-[0.2em] text-[#a2a1ba]">Years of mastery</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
