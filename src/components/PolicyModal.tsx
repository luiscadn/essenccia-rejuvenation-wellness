'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ShieldCheck, Phone, Mail, ExternalLink, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { PRIVACY_TERMS_SECTIONS, SPA_POLICIES } from '@/data/clinic-data';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'privacy' | 'spa';
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'privacy',
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'spa'>(defaultTab);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(defaultTab);
    }
  }, [isOpen, defaultTab]);

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
            className="fixed inset-0 bg-[#3b3a63]/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="policy-modal-title"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#f7f7f4] rounded-3xl border border-[#484774]/15 shadow-2xl overflow-hidden"
          >
            {/* Modal Header */}
            <div className="p-6 sm:p-8 pb-5 border-b border-[#484774]/10 bg-white/70 backdrop-blur-md">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#d7a761]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Client Trust &amp; Transparency</span>
                  </div>
                  <h2 id="policy-modal-title" className="font-serif text-2xl sm:text-3xl font-light text-[#484774] leading-snug">
                    Terms &amp; Conditions / <span className="italic text-[#739cd2]">Privacy Policy</span>
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="p-2 rounded-full text-[#484774] hover:bg-[#484774]/10 transition-colors focus-visible:ring-2 focus-visible:ring-[#739cd2]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Tabs */}
              <div className="flex items-center gap-2 mt-5 border-b border-[#484774]/10">
                <button
                  type="button"
                  onClick={() => setActiveTab('privacy')}
                  className={`pb-3 text-xs uppercase tracking-[0.16em] font-semibold transition-all relative ${
                    activeTab === 'privacy'
                      ? 'text-[#484774] border-b-2 border-[#484774]'
                      : 'text-[#5c6c84] hover:text-[#484774]'
                  }`}
                >
                  Privacy &amp; SMS Terms
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('spa')}
                  className={`pb-3 text-xs uppercase tracking-[0.16em] font-semibold transition-all relative ${
                    activeTab === 'spa'
                      ? 'text-[#484774] border-b-2 border-[#484774]'
                      : 'text-[#5c6c84] hover:text-[#484774]'
                  }`}
                >
                  Sanctuary Etiquette
                </button>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
              {activeTab === 'privacy' ? (
                <div className="space-y-6">
                  {/* Official Introduction Banner */}
                  <div className="p-5 rounded-2xl bg-white border border-[#484774]/10 shadow-xs space-y-2">
                    <p className="font-sans text-xs uppercase tracking-[0.18em] text-[#d7a761] font-semibold">
                      Commitment to Your Privacy
                    </p>
                    <p className="font-sans text-sm sm:text-base leading-relaxed text-[#484774] font-medium">
                      <strong className="font-semibold uppercase tracking-wide">ESSENCCIA REJUVENATION &amp; WELLNESS</strong> respects your privacy. By opting into our SMS messaging service, you agree to the following terms regarding how we handle your information:
                    </p>
                  </div>

                  {/* 8 Numbered Clauses */}
                  <div className="space-y-4">
                    {PRIVACY_TERMS_SECTIONS.map((sec) => (
                      <section
                        key={sec.number}
                        className="p-5 rounded-2xl bg-white/70 border border-[#484774]/10 hover:border-[#484774]/20 transition-all space-y-2"
                      >
                        <div className="flex items-baseline gap-2">
                          <span className="font-sans text-xs font-bold text-[#d7a761] uppercase tracking-wider">
                            {sec.number}.
                          </span>
                          <h3 className="font-sans text-base sm:text-lg font-semibold text-[#484774]">
                            {sec.title}
                          </h3>
                        </div>

                        {/* Text rendering with bullet support */}
                        <div className="font-sans text-sm leading-relaxed text-[#5c6c84] space-y-2 pt-0.5 whitespace-pre-line">
                          {sec.text}
                        </div>

                        {/* Interactive contact callouts for clauses 6 and 7 */}
                        {sec.number === '6' && (
                          <div className="pt-2 flex flex-wrap items-center gap-3">
                            <a
                              href="tel:2034868989"
                              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#484774]/5 hover:bg-[#484774]/10 text-xs text-[#484774] font-semibold transition-colors"
                            >
                              <Phone className="w-3.5 h-3.5 text-[#d7a761]" />
                              <span>(203) 486-8989</span>
                            </a>
                            <a
                              href="mailto:info@essencciarejuvenationwellness.com"
                              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#484774]/5 hover:bg-[#484774]/10 text-xs text-[#484774] font-semibold transition-colors"
                            >
                              <Mail className="w-3.5 h-3.5 text-[#d7a761]" />
                              <span>info@essencciarejuvenationwellness.com</span>
                            </a>
                          </div>
                        )}

                        {sec.number === '8' && (
                          <div className="mt-3 p-3 rounded-xl bg-emerald-50/80 border border-emerald-200/60 flex items-center gap-2.5 text-xs text-emerald-800 font-medium">
                            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>100% Mobile Privacy Guarantee: Your mobile number is never shared with third parties or outside affiliates.</span>
                          </div>
                        )}
                      </section>
                    ))}
                  </div>
                </div>
              ) : (
                /* Sanctuary Etiquette Tab */
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white border border-[#484774]/10 text-xs sm:text-sm text-[#5c6c84] leading-relaxed">
                    To maintain our serene atmosphere and respect each client’s dedicated sanctuary time, we kindly ask all guests to observe our clinic etiquette guidelines.
                  </div>

                  {SPA_POLICIES.map((policy) => (
                    <section
                      key={policy.title}
                      className="p-5 rounded-2xl bg-white/70 border border-[#484774]/10 space-y-1.5"
                    >
                      <h3 className="font-sans text-base sm:text-lg font-semibold text-[#484774]">
                        {policy.title}
                      </h3>
                      <p className="font-sans text-sm leading-relaxed text-[#5c6c84] font-normal">
                        {policy.text}
                      </p>
                    </section>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Footer with Standalone Link */}
            <div className="p-5 sm:px-8 border-t border-[#484774]/10 bg-white/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5c6c84]">
              <Link
                href="/privacy"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-[#484774] hover:text-[#739cd2] font-semibold underline underline-offset-4 transition-colors"
              >
                <span>View Fullscreen Privacy Policy Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#484774] hover:bg-[#3b3a63] text-white text-xs uppercase tracking-[0.16em] font-medium transition-all"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
