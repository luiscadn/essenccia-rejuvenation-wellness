'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Play,
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Quote,
  X,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { GOOGLE_REVIEWS, GoogleReview } from '@/data/clinic-data';

interface HeroProps {
  onOpenBooking: () => void;
}

const GoogleIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedReview, setExpandedReview] = useState<GoogleReview | null>(null);
  const [isAllReviewsModalOpen, setIsAllReviewsModalOpen] = useState(false);

  const activeReview = GOOGLE_REVIEWS[currentIndex];

  // Auto-rotate every 6.5 seconds when not paused and no modal open
  useEffect(() => {
    if (isPaused || isAllReviewsModalOpen || expandedReview) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % GOOGLE_REVIEWS.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused, isAllReviewsModalOpen, expandedReview]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? GOOGLE_REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % GOOGLE_REVIEWS.length);
  };

  return (
    <section id="top" className="relative bg-[#f7f7f4] overflow-hidden scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left Column: Editorial Headline & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 lg:pb-4 space-y-8 relative z-10"
          >
            {/* Trust Banner with verified 5.0 rating */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#484774]/15 shadow-xs">
              <GoogleIcon className="w-4 h-4 shrink-0" />
              <div className="flex items-center gap-1 text-[#d7a761]">
                <span className="font-semibold text-xs text-[#484774]">5.0</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>
              <span className="h-3.5 w-px bg-stone-200" />
              <span className="text-xs text-[#5c6c84] font-medium">
                31 Verified Google Reviews in Westport, CT
              </span>
            </div>

            {/* Editorial Main Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[5.3rem] font-light leading-[1.02] tracking-tight text-[#484774] text-balance">
              Awaken your <span className="italic text-[#739cd2]">true essence</span> through clinical{' '}
              <span className="italic">regenerative</span> science
            </h1>

            <p className="max-w-xl text-sm sm:text-base leading-loose tracking-[0.03em] text-[#5c6c84]">
              Non-surgical skin tightening, nano-needling and body sculpting, guided by more than two decades of medical aesthetic practice and an unhurried, individual approach.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#484774] hover:bg-[#3b3a63] text-[#f7f7f4] text-xs uppercase tracking-[0.16em] font-medium transition-all shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#739cd2]"
              >
                <span>Reserve Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#d7a761] transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => setIsAllReviewsModalOpen(true)}
                className="group inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-stone-50 border border-[#484774]/20 hover:border-[#484774] text-[#484774] text-xs uppercase tracking-[0.16em] font-medium shadow-xs hover:shadow transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <GoogleIcon className="w-3.5 h-3.5" />
                <span>Read 31 Reviews</span>
              </button>

              <a
                href="#treatments"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-full bg-[#484774]/5 hover:bg-[#484774]/12 text-[#484774] text-xs uppercase tracking-[0.16em] font-medium transition-all hover:scale-[1.02] border border-transparent hover:border-[#484774]/15"
              >
                <span>Treatments</span>
              </a>
            </div>

            {/* Quick stats ribbon */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#484774]/10 max-w-lg">
              <div>
                <p className="font-serif text-2xl font-light text-[#484774]">100%</p>
                <p className="text-[11px] text-[#5c6c84] uppercase tracking-wider mt-0.5">5-Star Score</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-light text-[#484774]">23+ Yrs</p>
                <p className="text-[11px] text-[#5c6c84] uppercase tracking-wider mt-0.5">Master Practice</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-light text-[#484774]">2026</p>
                <p className="text-[11px] text-[#5c6c84] uppercase tracking-wider mt-0.5">Best Day Spa</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Showcase Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Main Carousel Frame */}
            <div className="relative aspect-[4/5] sm:aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-3xl shadow-[0_25px_50px_-20px_rgba(72,71,116,0.35)] border border-[#484774]/15 bg-[#2a2948]">

              {/* Animated Background Image Slide */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeReview.associatedImage}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeReview.associatedImage}
                    alt={`${activeReview.treatmentTag} at Essenccia Rejuvenation & Wellness`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  {/* Gentle darkening overlay for optimum contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
                </motion.div>
              </AnimatePresence>

              {/* Top Floating Glass Badges */}
              <div className="absolute top-4 inset-x-4 flex items-center justify-between z-20 pointer-events-none">
                {/* Google Maps 5.0 Pill */}
                <div className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-md border border-white/60 text-[#484774]">
                  <GoogleIcon className="w-3.5 h-3.5 shrink-0" />
                  <div className="flex items-center gap-1 text-[#d7a761]">
                    <span className="font-semibold text-xs text-[#484774]">5.0</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[10px] text-[#5c6c84] border-l border-stone-200 pl-1.5 font-medium">Verified</span>
                </div>

                {/* 23+ Years Pill */}
                <div className="pointer-events-auto bg-[#484774]/95 backdrop-blur-md text-[#f7f7f4] px-3.5 py-1 rounded-full border border-[#d7a761]/40 shadow-md flex items-center gap-1.5">
                  <span className="font-sans text-xs font-bold text-[#d7a761]">23+</span>
                  <span className="text-[9px] uppercase tracking-wider text-stone-200">Years Mastery</span>
                </div>
              </div>

              {/* Bottom Floating Review Card */}
              <div className="absolute inset-x-3 sm:inset-x-4 bottom-3 sm:bottom-4 z-20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeReview.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/90"
                  >
                    {/* Header Row: Reviewer Details */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        {/* Avatar initials with luxury gradient */}
                        <div className={`w-9 h-9 rounded-full bg-gradient-to-tr ${activeReview.avatarBg} text-white flex items-center justify-center font-semibold text-xs shadow-xs shrink-0`}>
                          {activeReview.initials}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <p className="font-semibold text-xs sm:text-sm text-[#484774] truncate">
                              {activeReview.author}
                            </p>
                            <span className="inline-flex items-center text-[10px] text-[#34A853]" title="Verified Client">
                              <CheckCircle2 className="w-3 h-3" />
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[10px] text-[#5c6c84]">
                            <div className="flex text-[#d7a761]">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-2.5 h-2.5 fill-current" />
                              ))}
                            </div>
                            <span>•</span>
                            <span>{activeReview.timeAgo}</span>
                            {activeReview.isLocalGuide && (
                              <>
                                <span>•</span>
                                <span className="text-[#4285F4] font-medium">Local Guide</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Treatment Pill */}
                      <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-[#484774]/5 border border-[#484774]/10 text-[10px] uppercase tracking-wider font-medium text-[#484774] shrink-0 text-right">
                        {activeReview.treatmentTag.split(',')[0]}
                      </span>
                    </div>

                    {/* Review Quote Body */}
                    <div className="mt-3 relative">
                      <Quote className="w-4 h-4 text-[#d7a761]/40 absolute -top-1 -left-1" />
                      <p className="text-xs sm:text-[13px] leading-relaxed text-[#2d3748] pl-3.5 italic line-clamp-3">
                        &ldquo;{activeReview.highlight}&rdquo;
                      </p>
                    </div>

                    {/* Footer Controls: Read full review, Counter, Next/Prev */}
                    <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setExpandedReview(activeReview)}
                          className="text-[11px] font-semibold text-[#739cd2] hover:text-[#484774] underline underline-offset-2 transition-colors cursor-pointer"
                        >
                          Read full review
                        </button>
                        <span className="text-stone-300">•</span>
                        <span className="text-[10px] text-[#5c6c84] font-mono tabular-nums">
                          {String(currentIndex + 1).padStart(2, '0')}/{String(GOOGLE_REVIEWS.length).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Navigation Arrows */}
                      <div className="flex items-center gap-1">
                        <button
                          onClick={handlePrev}
                          aria-label="Previous review"
                          className="w-7 h-7 rounded-full bg-stone-100 hover:bg-[#484774] hover:text-white text-[#484774] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={handleNext}
                          aria-label="Next review"
                          className="w-7 h-7 rounded-full bg-stone-100 hover:bg-[#484774] hover:text-white text-[#484774] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

            {/* Quick Link under the carousel */}
            <div className="mt-4 flex items-center justify-between text-xs text-[#5c6c84] px-1">
              <button
                onClick={() => setIsAllReviewsModalOpen(true)}
                className="inline-flex items-center gap-1.5 hover:text-[#484774] transition-colors font-medium cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#739cd2]" />
                <span>View all 14 featured client reviews</span>
              </button>
              <a
                href="https://www.google.com/maps/place/ESSENCCIA+REJUVENATION+%26+WELLNESS/@41.1331923,-73.3707839,817m/data=!3m3!1e3!4b1!5s0x89e81b827c75016f:0xb445acf4958becb4!4m6!3m5!1s0x89e81bc1e30b87eb:0x46fffa2d1f802d11!8m2!3d41.1331883!4d-73.3682036!16s%2Fg%2F11vkpvhvhy?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-[#5c6c84] hover:text-[#4285F4] transition-colors"
              >
                <span>Google Maps Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Modal: Single Review Full Details */}
      <AnimatePresence>
        {expandedReview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-200 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setExpandedReview(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
                aria-label="Close review modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Reviewer Header */}
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${expandedReview.avatarBg} text-white flex items-center justify-center font-semibold text-sm shadow-sm`}>
                  {expandedReview.initials}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-base text-[#484774]">
                      {expandedReview.author}
                    </h3>
                    <CheckCircle2 className="w-4 h-4 text-[#34A853]" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#5c6c84] mt-0.5">
                    <div className="flex text-[#d7a761]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span>•</span>
                    <span>{expandedReview.timeAgo}</span>
                    {expandedReview.isLocalGuide && (
                      <>
                        <span>•</span>
                        <span className="text-[#4285F4] font-medium">Local Guide</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Treatment Category Badge */}
              <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-[#484774]/5 border border-[#484774]/10 text-xs font-medium text-[#484774]">
                Service: {expandedReview.treatmentTag}
              </div>

              {/* Full Review Text */}
              <div className="mt-5 text-sm sm:text-base leading-relaxed text-[#484774]/90 space-y-3 font-normal">
                <p>&ldquo;{expandedReview.text}&rdquo;</p>
              </div>

              {/* Owner Response if present */}
              {expandedReview.ownerResponse && (
                <div className="mt-6 p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <p className="font-semibold text-[#484774]">
                      {expandedReview.ownerResponse.author}
                    </p>
                    <span className="text-stone-400">{expandedReview.ownerResponse.timeAgo}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5c6c84] leading-relaxed italic">
                    &ldquo;{expandedReview.ownerResponse.text}&rdquo;
                  </p>
                </div>
              )}

              {/* Footer CTA */}
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-[#5c6c84]">
                  <GoogleIcon className="w-3.5 h-3.5" />
                  <span>Verified Google Review</span>
                </div>
                <button
                  onClick={() => {
                    setExpandedReview(null);
                    onOpenBooking();
                  }}
                  className="px-4 py-2 rounded-full bg-[#484774] text-white text-xs uppercase tracking-wider font-medium hover:bg-[#3b3a63] transition-colors"
                >
                  Book This Treatment
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal: All 14 Client Reviews */}
      <AnimatePresence>
        {isAllReviewsModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-stone-200 max-h-[90vh] flex flex-col"
            >
              <div className="flex items-start justify-between pb-4 border-b border-stone-100">
                <div>
                  <div className="flex items-center gap-2">
                    <GoogleIcon className="w-5 h-5" />
                    <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#484774]">
                      Client Reviews &amp; Testimonials
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-[#d7a761]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="font-semibold text-xs text-[#484774]">5.0 Out of 5</span>
                    <span className="text-stone-300">•</span>
                    <span className="text-xs text-[#5c6c84]">100% 5-Star Rating on Google Maps</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsAllReviewsModalOpen(false)}
                  className="p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
                  aria-label="Close all reviews modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Reviews Grid */}
              <div className="overflow-y-auto py-6 pr-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                {GOOGLE_REVIEWS.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80 hover:border-[#484774]/30 hover:bg-white transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${rev.avatarBg} text-white flex items-center justify-center font-semibold text-xs shadow-xs shrink-0`}>
                            {rev.initials}
                          </div>
                          <div>
                            <p className="font-semibold text-xs text-[#484774]">{rev.author}</p>
                            <p className="text-[10px] text-[#5c6c84]">{rev.timeAgo}</p>
                          </div>
                        </div>
                        <div className="flex text-[#d7a761]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-2.5 h-2.5 fill-current" />
                          ))}
                        </div>
                      </div>

                      <div className="mt-2.5">
                        <span className="inline-block px-2 py-0.5 rounded-full bg-[#484774]/5 text-[10px] font-medium text-[#484774]">
                          {rev.treatmentTag}
                        </span>
                      </div>

                      <p className="mt-3 text-xs leading-relaxed text-[#484774]/90">
                        &ldquo;{rev.text}&rdquo;
                      </p>
                    </div>

                    {rev.ownerResponse && (
                      <div className="mt-4 pt-3 border-t border-stone-200/60 text-[11px] text-[#5c6c84] italic bg-white/60 p-2.5 rounded-xl">
                        <span className="font-semibold text-[#484774] not-italic block mb-0.5">Response from Ledy Madero:</span>
                        &ldquo;{rev.ownerResponse.text}&rdquo;
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-[#5c6c84]">
                  Westport, CT · 14 Featured Reviews Shown
                </span>
                <button
                  onClick={() => {
                    setIsAllReviewsModalOpen(false);
                    onOpenBooking();
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#484774] text-white text-xs uppercase tracking-wider font-medium hover:bg-[#3b3a63] transition-colors"
                >
                  Schedule Your Consultation
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
