'use client';

import React from 'react';
import Image from 'next/image';
import { X, Clock, Sparkles, CheckCircle2, Calendar } from 'lucide-react';
import { Treatment } from '@/data/clinic-data';

interface TreatmentDetailModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBook: (treatment: Treatment) => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  treatment,
  onClose,
  onBook,
}) => {
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-stone-950/60 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="treatment-modal-title"
        className="relative w-full max-w-2xl bg-[#f7f7f4] rounded-2xl shadow-2xl z-10 overflow-hidden border border-[#a2a1ba]/25 animate-fade-in max-h-[90vh] flex flex-col"
      >
        {/* Header with Hero Image */}
        <div className="relative aspect-[16/8] bg-stone-100 flex-shrink-0">
          <Image
            src={treatment.image}
            alt={treatment.name}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
          
          <button
            onClick={onClose}
            aria-label="Close treatment details"
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 left-6 right-6 text-white space-y-1">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#a2a1ba] font-semibold">
              {treatment.tech}
            </span>
            <h2 id="treatment-modal-title" className="font-serif text-2xl sm:text-3xl font-light leading-snug">
              {treatment.name}
            </h2>
            <div className="flex items-center gap-4 text-xs text-stone-200 pt-1">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#a2a1ba]" />
                {treatment.duration}
              </span>
              <span>•</span>
              <span className="font-sans tracking-wide text-lg font-light tabular-nums text-white">
                {treatment.price}
              </span>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#484774] font-semibold">
              Clinical Overview & Science
            </h3>
            <p className="text-stone-700 text-sm leading-relaxed font-light">
              {treatment.fullDesc}
            </p>
          </div>

          {/* Key Clinical Benefits */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#484774] font-semibold">
              Targeted Benefits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {treatment.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-stone-700 font-light">
                  <CheckCircle2 className="w-4 h-4 text-[#484774] flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Special Preparation Note (from old website wisdom) */}
          <div className="p-4 bg-[#f0efec] rounded-xl border border-[#a2a1ba]/25 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-800">
              <Sparkles className="w-4 h-4 text-[#484774]" />
              <span>Ledy’s Pre-Treatment Recommendation</span>
            </div>
            <p className="text-xs text-stone-600 font-light leading-relaxed">
              To maximize lymphatic drainage and collagen synthesis, stay generously hydrated 48 hours before and after your session. Avoid alcohol or caffeine on the day of treatment for peak cellular detoxification.
            </p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-6 border-t border-[#a2a1ba]/25 bg-white flex items-center justify-between">
          <div>
            <p className="text-xs text-stone-500 uppercase tracking-wider">Investment</p>
            <p className="font-sans tracking-wide text-2xl font-light text-[#484774] tabular-nums">
              {treatment.price}
            </p>
          </div>
          <button
            onClick={() => {
              onClose();
              onBook(treatment);
            }}
            className="px-6 py-3 bg-[#484774] hover:bg-[#3b3a63] text-white text-xs uppercase tracking-[0.2em] font-medium rounded-xl flex items-center gap-2 shadow-md focus-visible:ring-2 focus-visible:ring-[#d7a761]"
          >
            <Calendar className="w-4 h-4 text-[#d7a761]" />
            <span>Book This Protocol</span>
          </button>
        </div>
      </div>
    </div>
  );
};
