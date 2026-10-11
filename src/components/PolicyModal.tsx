'use client';

import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { SPA_POLICIES } from '@/data/clinic-data';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, onClose }) => {
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
            aria-labelledby="policy-modal-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="relative z-10 w-full max-w-2xl max-h-[90vh] flex flex-col bg-[#f7f7f4] rounded-3xl border border-[#484774]/10 shadow-2xl overflow-hidden"
          >
            <div className="flex items-start justify-between gap-4 p-6 sm:p-8 border-b border-[#484774]/10">
              <div>
                <span className="text-[10px] uppercase tracking-[0.16em] font-semibold text-[#d7a761]">
                  Spa Etiquette
                </span>
                <h2 id="policy-modal-title" className="mt-1 font-serif text-3xl font-light text-[#484774]">
                  Privacy &amp; Spa Policies
                </h2>
              </div>
              <button
                onClick={onClose}
                aria-label="Close policies"
                className="p-2 rounded-full text-[#484774] hover:bg-[#484774]/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-y-auto p-6 sm:p-8 space-y-5">
              {SPA_POLICIES.map((policy) => (
                <section key={policy.title} className="rounded-2xl bg-white/70 border border-[#484774]/10 p-5">
                  <h3 className="font-serif text-xl text-[#484774]">{policy.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed font-light text-stone-700">{policy.text}</p>
                </section>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
