'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ShoppingBag, Phone, Menu, X, MapPin } from 'lucide-react';
import { useCart } from '@/context/cart-context';
import { CLINIC_INFO } from '@/data/clinic-data';

interface NavbarProps {
  onOpenBooking: () => void;
}

const NAV_LINKS = [
  { href: '#philosophy', label: 'Philosophy' },
  { href: '#award', label: 'Award 2026' },
  { href: '#facilities', label: 'Sanctuary Tour' },
  { href: '#treatments', label: 'Treatments' },
  { href: '#results', label: 'Results' },
  { href: '#boutique', label: 'Boutique' },
  { href: '#location', label: 'Visit' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const { totalItems, openCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-40">
      <div className="bg-[#484774] text-[#f7f7f4] px-4 py-2.5 text-[10px] tracking-[0.2em] uppercase font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <span className="flex items-center gap-2">
            <MapPin className="w-3 h-3 text-[#d7a761]" aria-hidden="true" />
            Westport, CT
          </span>
          <a
            href="#award"
            className="hidden md:inline-flex items-center gap-2 text-stone-200 hover:text-[#d7a761] transition-colors"
          >
            <span className="text-[#d7a761]">★</span>
            <span className="tracking-[0.16em]">Voted &ldquo;Best Day Spa 2026&rdquo; · BusinessRate Benchmark Award</span>
          </a>
          <a
            href={`tel:${CLINIC_INFO.phoneClean}`}
            className="flex items-center gap-2 tabular-nums hover:text-[#d7a761] transition-colors"
          >
            <Phone className="w-3 h-3 text-[#d7a761]" aria-hidden="true" />
            {CLINIC_INFO.phone}
          </a>
        </div>
      </div>

      <header
        className={`transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-[#f7f7f4]/95 backdrop-blur-md border-[#484774]/10 shadow-[0_8px_30px_-18px_rgba(72,71,116,0.35)]'
            : 'bg-[#f7f7f4]/80 backdrop-blur-sm border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#739cd2]">
            <Image
              src="/fotos_webp/logo_transparent.png"
              alt="Essenccia Rejuvenation & Wellness Official Crest"
              width={48}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-2xl tracking-[0.2em] uppercase font-light text-[#484774]">Essenccia</span>
              <span className="mt-1.5 text-[9px] tracking-[0.3em] uppercase text-[#5c6c84] font-medium">Rejuvenation &amp; Wellness</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#484774] hover:text-[#739cd2] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={openCart}
              aria-label={`Open shopping bag with ${totalItems} items`}
              className="relative p-2.5 text-[#484774] hover:text-[#739cd2] transition-colors focus-visible:ring-2 focus-visible:ring-[#739cd2]"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              {totalItems > 0 && (
                <span className="absolute top-0.5 right-0 bg-[#d7a761] text-[#484774] text-[10px] min-w-4 h-4 px-1 rounded-full flex items-center justify-center font-bold tabular-nums">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex px-6 py-3 bg-[#484774] hover:bg-[#3b3a63] text-[#f7f7f4] text-[11px] uppercase tracking-[0.2em] font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[#739cd2] focus-visible:ring-offset-2"
            >
              Book Consultation
            </button>
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 text-[#484774] focus-visible:ring-2 focus-visible:ring-[#739cd2]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#f7f7f4] border-t border-[#484774]/10 px-6 py-6 space-y-5 animate-fade-in">
            <nav className="flex flex-col gap-4" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-[0.2em] text-[#484774] font-medium py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 bg-[#484774] text-[#f7f7f4] text-[11px] uppercase tracking-[0.2em] font-medium"
            >
              Book Consultation
            </button>
          </div>
        )}
      </header>
    </div>
  );
};
