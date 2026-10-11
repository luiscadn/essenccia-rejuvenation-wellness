'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Plus, Calendar } from 'lucide-react';
import { CAVI_LIPO_FAQ } from '@/data/clinic-data';

interface CaviLipoFaqModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBook: () => void;
}

export const CaviLipoFaqModal: React.FC<CaviLipoFaqModalProps> = ({ isOpen, onClose, onBook }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-sm"
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="faq-modal-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="relative z-10 w-full max-w-2xl max-h-[90vh] flex flex-col bg-[#f7f7f4] rounded-3xl border border-[#484774]/10 shadow-2xl overflow-hidden"
          >
            <div className="flex items-start justify-between gap-4 p-6 sm:p-8 border-b border-[#484774]/10">
              <div>
                <span className="text-[10px] uppercase tracking-[0.16em] font-semibold text-[#d7a761]">
                  Guide &amp; FAQ
                </span>
                <h2 id="faq-modal-title" className="mt-1 font-serif text-3xl font-light text-[#484774]">
                  Cavi-Lipo Questions
                </h2>
              </div>
              <button
                onClick={onClose}
                aria-label="Close Cavi-Lipo FAQ"
                className="p-2 rounded-full text-[#484774] hover:bg-[#484774]/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-4 sm:p-6 space-y-2">
              {CAVI_LIPO_FAQ.map((item, i) => {
                const expanded = openIndex === i;
                return (
                  <div key={item.question} className="rounded-2xl bg-white/70 border border-[#484774]/10">
                    <button
                      onClick={() => setOpenIndex(expanded ? null : i)}
                      aria-expanded={expanded}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="font-serif text-lg text-[#484774]">{item.question}</span>
                      <Plus
                        className={`w-4 h-4 shrink-0 text-[#d7a761] transition-transform ${expanded ? 'rotate-45' : ''}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {expanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-sm leading-relaxed font-light text-stone-700">{item.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="p-5 sm:p-6 border-t border-[#484774]/10 bg-white/60 flex justify-end">
              <button
                onClick={() => {
                  onClose();
                  onBook();
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#484774] hover:bg-[#3b3a63] text-[#f7f7f4] text-[11px] uppercase tracking-[0.16em] font-medium"
              >
                <Calendar className="w-4 h-4 text-[#d7a761]" />
                Book Consultation
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
