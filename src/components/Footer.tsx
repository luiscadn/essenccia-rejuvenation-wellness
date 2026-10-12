'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Check, Award, ArrowUpRight } from 'lucide-react';
import { CLINIC_INFO } from '@/data/clinic-data';

interface FooterProps {
  onOpenPolicy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#484774] text-[#f7f7f4] pt-20 pb-12 border-t border-[#3b3a63]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Brand Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#3b3a63]">
          <div className="lg:col-span-6 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/fotos_webp/logo_transparent.png"
                alt="Essenccia Crest"
                width={50}
                height={50}
                className="h-12 w-auto object-contain brightness-110"
              />
              <div>
                <span className="font-serif text-3xl sm:text-4xl tracking-[0.16em] text-[#f7f7f4] uppercase font-light">
                  Essenccia
                </span>
                <span className="block text-[10px] tracking-[0.3em] uppercase text-[#d7a761] font-medium mt-0.5">
                  Rejuvenation &amp; Wellness
                </span>
              </div>
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-[#d7a761]/40 text-[#d7a761] text-[10px] uppercase tracking-widest font-medium">
              <Award className="w-3.5 h-3.5" />
              <span>Voted Best Day Spa 2026 · BusinessRate Benchmark</span>
            </div>

            <p className="text-stone-300 text-sm font-light max-w-md leading-relaxed">
              Westport, Connecticut’s sanctuary for non-surgical facial rejuvenation, ultrasonic body sculpting, and clean cellular skincare. Honoring over 23 years of dedicated clinical practice.
            </p>
            <div className="pt-2 flex items-center gap-4 text-stone-400">
              <a
                href={CLINIC_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Essenccia on Instagram"
                className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:text-[#d7a761] hover:border-[#d7a761] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={CLINIC_INFO.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Essenccia on Facebook"
                className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:text-[#d7a761] hover:border-[#d7a761] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#d7a761] font-semibold">
              The Essenccia Journal
            </span>
            <h3 className="font-sans text-xl sm:text-2xl font-semibold leading-snug text-white">
              Receive private invitations and seasonal skin protocols.
            </h3>
            <p className="text-stone-400 text-xs font-light">
              Subscribers receive complimentary seasonal consultations and private access to new boutique releases.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
              <input
                type="email"
                required
                placeholder="Enter your email address…"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-[#3b3a63] border border-[#3b3a63] rounded-lg text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#d7a761]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#d7a761] hover:bg-[#d7a761] text-[#484774] text-xs uppercase tracking-widest font-semibold rounded-lg transition-colors flex items-center gap-1.5"
              >
                {subscribed ? <Check className="w-4 h-4" /> : <span>Join</span>}
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-[#d7a761] font-light">
                Welcome to the Essenccia circle. Your private welcome code has been sent.
              </p>
            )}
          </div>
        </div>

        {/* Links Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-[#3b3a63] text-xs">
          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-widest text-[#d7a761] font-semibold">
              Clinical Menu
            </p>
            <ul className="space-y-2 text-stone-400 font-light">
              <li><a href="#treatments" className="hover:text-white transition-colors">Rezenerate™ Nano-Needling</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">Viora RF Skin Tightening</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">Cavi-Lipo Ultrasound Body</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">PRX-T33 Biorevitalization</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">Infusion Electro-Mesotherapy</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-widest text-[#d7a761] font-semibold">
              Wellness & Science
            </p>
            <ul className="space-y-2 text-stone-400 font-light">
              <li><a href="#treatments" className="hover:text-white transition-colors">Molecular Hydrogen Therapy</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">PEMF Magnetic Resonance</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">Clinical LED Phototherapy</a></li>
              <li><a href="#treatments" className="hover:text-white transition-colors">Cellulite & Lymphatic Flow</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-widest text-[#d7a761] font-semibold">
              Skincare Boutique
            </p>
            <ul className="space-y-2 text-stone-400 font-light">
              <li><a href="#boutique" className="hover:text-white transition-colors">Stem Regenerative Serum</a></li>
              <li><a href="#boutique" className="hover:text-white transition-colors">Cellular Renewal Cream</a></li>
              <li><a href="#boutique" className="hover:text-white transition-colors">Hydra Nutrition Elixir</a></li>
              <li><a href="#boutique" className="hover:text-white transition-colors">Hydra-Foam Cleanser</a></li>
              <li><a href="#boutique" className="hover:text-white transition-colors">Lash & Brow Peptide Elixir</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-widest text-[#d7a761] font-semibold">
              Westport Clinic
            </p>
            <p className="text-stone-400 font-light leading-relaxed">
              {CLINIC_INFO.address}<br />
              {CLINIC_INFO.city}, {CLINIC_INFO.state} {CLINIC_INFO.zip}<br />
              <a href={`tel:${CLINIC_INFO.phoneClean}`} className="text-white hover:text-[#d7a761] block mt-1">
                {CLINIC_INFO.phone}
              </a>
            </p>
            <p className="text-stone-500 text-[11px]">
              {CLINIC_INFO.hours.weekdays}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-light border-t border-stone-800/80">
          <p>© 2026 Essenccia Rejuvenation &amp; Wellness. All rights reserved.</p>

          {/* Developer Credit Signature Link */}
          <a
            href="https://luiscadena.abstergo.page/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/90 hover:bg-stone-800/90 border border-stone-800/90 hover:border-[#d7a761]/60 transition-all duration-300 shadow-xs group cursor-pointer"
            title="Visit Luis Cadena's website"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#739cd2] group-hover:bg-[#d7a761] group-hover:scale-125 transition-all shadow-xs" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 group-hover:text-stone-300 transition-colors">
              code by
            </span>
            <span className="font-serif italic text-sm text-stone-200 group-hover:text-[#d7a761] transition-colors font-medium tracking-wide">
              Luis Cadena
            </span>
            <ArrowUpRight className="w-3 h-3 text-stone-500 group-hover:text-[#d7a761] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          <div className="flex items-center gap-6">
            <span>Westport, Connecticut</span>
            <span>•</span>
            {onOpenPolicy ? (
              <button
                type="button"
                onClick={onOpenPolicy}
                className="hover:text-[#d7a761] transition-colors focus-visible:underline cursor-pointer"
              >
                Privacy Policy
              </button>
            ) : (
              <Link href="/privacy" className="hover:text-[#d7a761] transition-colors">
                Privacy Policy
              </Link>
            )}
            <span>•</span>
            {onOpenPolicy ? (
              <button
                type="button"
                onClick={onOpenPolicy}
                className="hover:text-[#d7a761] transition-colors focus-visible:underline cursor-pointer"
              >
                Terms of Care
              </button>
            ) : (
              <Link href="/privacy" className="hover:text-[#d7a761] transition-colors">
                Terms of Care
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
