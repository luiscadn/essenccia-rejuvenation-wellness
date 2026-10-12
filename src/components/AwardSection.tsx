'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Star, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface AwardSectionProps {
  onOpenBooking?: () => void;
}

export const AwardSection: React.FC<AwardSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="award" className="relative bg-[#f0efec] py-24 lg:py-32 overflow-hidden scroll-mt-24 border-y border-[#484774]/10">
      {/* Subtle architectural ambient gradient */}
      <div className="absolute inset-0 bg-radial from-white/60 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column: Ledy holding the Best of 2026 award */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Luxury Gold Plaque Badge: Above photo on mobile, elegantly floating on tablet/desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-4 sm:mb-0 sm:absolute sm:-top-6 sm:-right-6 bg-[#484774] text-white p-4 sm:p-6 rounded-2xl shadow-[0_20px_40px_-15px_rgba(72,71,116,0.5)] border-2 border-[#d7a761]/40 sm:max-w-[260px] z-20 w-full sm:w-auto"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#d7a761]/20 flex items-center justify-center shrink-0 border border-[#d7a761]/50">
                  <Award className="w-5 h-5 text-[#d7a761]" />
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-[0.25em] text-[#d7a761] font-semibold">
                    Winner
                  </span>
                  <span className="font-sans text-lg font-semibold leading-none text-white">
                    Best of 2026
                  </span>
                </div>
              </div>
              <p className="mt-3 text-[10px] tracking-wider uppercase text-stone-300 font-medium border-t border-white/10 pt-2.5">
                Day Spa Category · Westport, CT
              </p>
            </motion.div>

            <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_25px_50px_-12px_rgba(72,71,116,0.25)] border border-[#484774]/10 bg-stone-200">
              <Image
                src="/fotos_webp/ledy_award.webp"
                alt="Ledy, founder of Essenccia Rejuvenation & Wellness, receiving the Best of 2026 Day Spa award"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />

              {/* Editorial bottom overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#484774]/95 via-[#484774]/50 to-transparent p-6 text-white">
                <div className="flex items-center gap-2">
                  <div className="flex text-[#d7a761]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] font-medium text-stone-200">5.0 Google Reviews</span>
                </div>
                <p className="mt-1 font-sans text-sm font-medium tracking-wide text-white/95">
                  Ledy receiving the 2026 Benchmark Honor
                </p>
              </div>
            </div>
          </motion.div>

          {/* Editorial Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Main Section Heading */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.08] text-[#484774] text-balance">
              Voted <span className="italic text-[#739cd2]">Best of 2026</span> in Westport, Connecticut
            </h2>

            <p className="font-sans text-lg sm:text-xl text-[#484774]/90 font-normal leading-relaxed italic">
              &ldquo;An authentic validation from our clients, honoring two decades of regenerative beauty and bespoke care.&rdquo;
            </p>

            {/* Official Description */}
            <div className="space-y-4 text-sm sm:text-base leading-relaxed tracking-[0.03em] text-[#5c6c84]">
              <p>
                Essenccia Rejuvenation &amp; Wellness has officially been awarded the prestigious{' '}
                <strong className="text-[#484774] font-semibold">&ldquo;Best of 2026&rdquo;</strong> award by business rating platform{' '}
                <strong className="text-[#484774] font-semibold">BusinessRate</strong> through its renowned{' '}
                <strong className="text-[#484774] font-semibold">Benchmark Program</strong>.
              </p>
              <p>
                This exclusive distinction honors Essenccia as the top business in the{' '}
                <span className="text-[#484774] font-medium underline decoration-[#d7a761] underline-offset-4">Day Spa category</span> in Westport, Connecticut, based directly on verified client feedback, satisfaction scores, and authentic Google reviews.
              </p>
            </div>

            {/* Recognition Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#484774]/15">
              <div className="p-5 rounded-2xl bg-white/80 border border-[#484774]/10 shadow-xs">
                <div className="flex items-center gap-1.5 text-[#d7a761]">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-sans text-2xl font-bold text-[#484774] tabular-nums">5.0</span>
                </div>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#5c6c84]">Google Rating</p>
                <p className="text-[11px] text-[#484774] mt-0.5 font-medium">100% Verified Reviews</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/80 border border-[#484774]/10 shadow-xs">
                <div className="flex items-center gap-1.5 text-[#484774]">
                  <ShieldCheck className="w-4 h-4 text-[#d7a761]" />
                  <span className="font-sans text-2xl font-bold text-[#484774]">Benchmark</span>
                </div>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#5c6c84]">Audited Quality</p>
                <p className="text-[11px] text-[#484774] mt-0.5 font-medium">BusinessRate Program</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/80 border border-[#484774]/10 shadow-xs">
                <div className="flex items-center gap-1.5 text-[#484774]">
                  <CheckCircle2 className="w-4 h-4 text-[#d7a761]" />
                  <span className="font-sans text-2xl font-bold text-[#484774] tabular-nums">23+</span>
                </div>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#5c6c84]">Years Heritage</p>
                <p className="text-[11px] text-[#484774] mt-0.5 font-medium">Master Clinical Practice</p>
              </div>
            </div>

            {/* Call to action */}
            {onOpenBooking && (
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#484774] hover:bg-[#3b3a63] text-white text-xs uppercase tracking-[0.18em] font-medium transition-all shadow-md hover:shadow-lg hover:scale-[1.02]"
                >
                  <span>Experience Award-Winning Care</span>
                  <ArrowRight className="w-4 h-4 text-[#d7a761] transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  href="#facilities"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#484774]/25 hover:border-[#484774] bg-white/60 hover:bg-white text-[#484774] text-xs uppercase tracking-[0.18em] font-medium transition-all hover:scale-[1.02]"
                >
                  Tour The Facility
                </a>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
