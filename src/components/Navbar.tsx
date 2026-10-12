'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingBag, Phone, Menu, X, MapPin, ChevronDown, Mail } from 'lucide-react';
import { useCart } from '@/context/cart-context';
import { CLINIC_INFO } from '@/data/clinic-data';
import { InstagramIcon, FacebookIcon } from '@/components/SocialIcons';

interface NavbarProps {
  onOpenBooking: () => void;
  onSelectTreatment: (treatmentId: string) => void;
  onOpenFaq: () => void;
  onOpenPolicy: () => void;
}

type MenuAction =
  | { type: 'link'; href: string }
  | { type: 'treatment'; id: string }
  | { type: 'faq' }
  | { type: 'policy' };

interface MenuItem {
  label: string;
  desc: string;
  action: MenuAction;
}

interface MenuGroup {
  label: string;
  items: MenuItem[];
}

const LEAVE_DELAY_MS = 180;

const HOME_HREF = '#top';
const SIMPLE_LINKS = {
  boutique: { href: '#boutique', label: 'Boutique' },
  contact: { href: '#location', label: 'Contact Us' },
};

const MENU_GROUPS: MenuGroup[] = [
  {
    label: 'About',
    items: [
      { label: 'About Ledy', desc: '23+ years of clinical mastery in Colombia & the U.S.', action: { type: 'link', href: '#director' } },
      { label: 'Your Spa Experience', desc: 'A tour of our private suite in Westport.', action: { type: 'link', href: '#facilities' } },
      { label: 'Before & After', desc: 'Real clinical cases and transformations.', action: { type: 'link', href: '#results' } },
      { label: 'Client Reviews', desc: '5.0 rating and the 2026 Day Spa award.', action: { type: 'link', href: '#award' } },
      { label: 'Our Commitments', desc: 'The four promises behind every consultation.', action: { type: 'link', href: '#promises' } },
      { label: 'Privacy & Spa Policies', desc: 'Cancellations, etiquette and privacy.', action: { type: 'policy' } },
    ],
  },
  {
    label: 'Face',
    items: [
      { label: 'Skin Tightening (Viora RF)', desc: 'Facial radiofrequency and neck tightening.', action: { type: 'treatment', id: 'viora-rf-tightening' } },
      { label: 'Jawline Sculpt & Lift', desc: 'Jawline and double chin definition.', action: { type: 'treatment', id: 'jawline-sculpt-lift' } },
      { label: 'Nanocell Renewal (Rezenerate)', desc: 'Needle-free cellular nano-infusion.', action: { type: 'treatment', id: 'rezenerate-nanoneedling' } },
      { label: 'Skin Nutrient Infusion', desc: 'Electro-mesotherapy with peptides.', action: { type: 'treatment', id: 'infusion-electro-mesotherapy' } },
      { label: 'Diamond Microdermabrasion', desc: 'Medical diamond-tip exfoliation.', action: { type: 'treatment', id: 'diamond-resurfacing' } },
      { label: 'Advanced Deep Pore Renewal', desc: 'Deep cleansing and purification.', action: { type: 'treatment', id: 'advanced-deep-pore-renewal' } },
      { label: 'PRX-T33 Biorevitalization', desc: 'Dermal bio-stimulation without peeling.', action: { type: 'treatment', id: 'prx-treatments' } },
    ],
  },
  {
    label: 'Body',
    items: [
      { label: 'Ultrasound Cavi-Lipo', desc: 'Localized fat reduction by cavitation.', action: { type: 'treatment', id: 'cavi-lipo-body-sculpting' } },
      { label: 'Fat Reduction & Cellulite', desc: 'Body remodeling and cellulite smoothing.', action: { type: 'treatment', id: 'body-contouring-cellulite' } },
      { label: 'Muscle Tone & Firming', desc: 'Microcurrent toning and tightening.', action: { type: 'treatment', id: 'muscle-tone-zerobody' } },
      { label: 'Cavi-Lipo FAQ & Guide', desc: 'Everything to know before your session.', action: { type: 'faq' } },
    ],
  },
  {
    label: 'Wellness',
    items: [
      { label: 'Molecular Hydrogen & LED', desc: 'Hydrogen inhalation and cellular phototherapy.', action: { type: 'treatment', id: 'hydrogen-inhalation-led' } },
      { label: 'PEMF Magnetic Field Therapy', desc: 'Recharge your bioelectric potential.', action: { type: 'treatment', id: 'pemf-magnetic-field' } },
      { label: 'Microcurrent Cellular Care', desc: 'Lymphatic drainage and microcurrents.', action: { type: 'treatment', id: 'microcurrent-cellular-care' } },
    ],
  },
];

const TOP_LABEL_CLASS =
  'text-[11px] uppercase tracking-[0.16em] font-medium text-[#484774] hover:text-[#739cd2] transition-colors';

const MenuItemLabel: React.FC<{ item: MenuItem }> = ({ item }) => (
  <>
    <span className="block font-sans text-sm font-semibold leading-tight text-[#484774] group-hover:text-[#739cd2] transition-colors">
      {item.label}
    </span>
    <span className="block mt-0.5 text-[10px] uppercase tracking-[0.16em] font-medium text-[#5c6c84]">
      {item.desc}
    </span>
  </>
);

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onSelectTreatment, onOpenFaq, onOpenPolicy }) => {
  const { totalItems, openCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearLeaveTimer = useCallback(() => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
  }, []);

  const openGroup = (label: string) => {
    clearLeaveTimer();
    setActiveGroup(label);
  };

  const scheduleClose = () => {
    clearLeaveTimer();
    leaveTimer.current = setTimeout(() => setActiveGroup(null), LEAVE_DELAY_MS);
  };

  const runAction = (action: MenuAction) => {
    clearLeaveTimer();
    setActiveGroup(null);
    setMobileMenuOpen(false);
    if (action.type === 'treatment') onSelectTreatment(action.id);
    else if (action.type === 'faq') onOpenFaq();
    else if (action.type === 'policy') onOpenPolicy();
  };

  useEffect(() => clearLeaveTimer, [clearLeaveTimer]);

  useEffect(() => {
    if (!activeGroup) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActiveGroup(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeGroup]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-40">
      <div className="bg-[#484774] text-[#f7f7f4] px-4 py-2.5 text-[10px] tracking-[0.2em] uppercase font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-3 h-3 text-[#d7a761]" aria-hidden="true" />
              Westport, CT
            </span>
            <a
              href={`mailto:${CLINIC_INFO.email}`}
              className="hidden lg:inline-flex items-center gap-1.5 lowercase tracking-normal text-stone-200 hover:text-[#d7a761] transition-colors"
              title={CLINIC_INFO.email}
            >
              <Mail className="w-3 h-3 text-[#d7a761]" aria-hidden="true" />
              <span>{CLINIC_INFO.email}</span>
            </a>
          </div>

          <a
            href="#award"
            className="hidden md:inline-flex items-center gap-2 text-stone-200 hover:text-[#d7a761] transition-colors"
          >
            <span className="text-[#d7a761]">★</span>
            <span className="tracking-[0.16em]">Voted &ldquo;Best Day Spa 2026&rdquo; · BusinessRate Benchmark Award</span>
          </a>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2 pr-2 sm:pr-3 border-r border-white/20">
              <a
                href={CLINIC_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram: @essenccia_rejuvenation_well"
                title="Instagram: @essenccia_rejuvenation_well"
                className="text-stone-200 hover:text-[#d7a761] transition-colors p-0.5 hover:scale-110"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={CLINIC_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook: Essenccia Rejuvenation & Wellness"
                title="Facebook: Essenccia Rejuvenation & Wellness"
                className="text-stone-200 hover:text-[#d7a761] transition-colors p-0.5 hover:scale-110"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
            </div>
            <a
              href={`tel:${CLINIC_INFO.phoneClean}`}
              className="flex items-center gap-2 tabular-nums hover:text-[#d7a761] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#d7a761]" aria-hidden="true" />
              {CLINIC_INFO.phone}
            </a>
          </div>
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

          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
            <a href={HOME_HREF} className={TOP_LABEL_CLASS}>
              Home
            </a>
            {MENU_GROUPS.map((group) => {
              const isOpen = activeGroup === group.label;
              return (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => openGroup(group.label)}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    onClick={() => (isOpen ? setActiveGroup(null) : openGroup(group.label))}
                    onFocus={() => openGroup(group.label)}
                    className={`${TOP_LABEL_CLASS} inline-flex items-center gap-1.5 py-2 focus-visible:ring-2 focus-visible:ring-[#739cd2] rounded-full`}
                  >
                    {group.label}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[22rem]"
                      >
                        <ul className="p-3 rounded-3xl bg-white/95 backdrop-blur-md border border-[#484774]/10 shadow-[0_25px_50px_-15px_rgba(72,71,116,0.15)]">
                          {group.items.map((item) => (
                            <li key={item.label}>
                              {item.action.type === 'link' ? (
                                <a
                                  href={item.action.href}
                                  onClick={() => runAction(item.action)}
                                  className="block px-4 py-2.5 rounded-2xl hover:bg-[#484774]/5 focus-visible:bg-[#484774]/5 focus:outline-none transition-colors group"
                                >
                                  <MenuItemLabel item={item} />
                                </a>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => runAction(item.action)}
                                  className="block w-full text-left px-4 py-2.5 rounded-2xl hover:bg-[#484774]/5 focus-visible:bg-[#484774]/5 focus:outline-none transition-colors group"
                                >
                                  <MenuItemLabel item={item} />
                                </button>
                              )}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            <a href={SIMPLE_LINKS.boutique.href} className={TOP_LABEL_CLASS}>
              {SIMPLE_LINKS.boutique.label}
            </a>
            <a href={SIMPLE_LINKS.contact.href} className={TOP_LABEL_CLASS}>
              {SIMPLE_LINKS.contact.label}
            </a>
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
              className="hidden sm:inline-flex px-6 py-2.5 rounded-full bg-[#484774] hover:bg-[#3b3a63] text-[#f7f7f4] text-[11px] uppercase tracking-[0.2em] font-medium transition-all shadow-xs hover:shadow hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-[#739cd2] focus-visible:ring-offset-2"
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

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="lg:hidden bg-[#f7f7f4] border-t border-[#484774]/10 px-6 py-6 space-y-5 max-h-[calc(100vh-7rem)] overflow-y-auto"
            >
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                <a href={HOME_HREF} onClick={() => setMobileMenuOpen(false)} className="py-3 text-xs uppercase tracking-[0.16em] text-[#484774] font-medium">
                  Home
                </a>
                {MENU_GROUPS.map((group) => {
                  const expanded = mobileGroup === group.label;
                  return (
                    <div key={group.label} className="border-t border-[#484774]/10">
                      <button
                        type="button"
                        aria-expanded={expanded}
                        onClick={() => setMobileGroup(expanded ? null : group.label)}
                        className="w-full flex items-center justify-between py-3 text-xs uppercase tracking-[0.16em] text-[#484774] font-medium"
                      >
                        {group.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {expanded && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            {group.items.map((item) => (
                              <li key={item.label}>
                                {item.action.type === 'link' ? (
                                  <a
                                    href={item.action.href}
                                    onClick={() => runAction(item.action)}
                                    className="block px-4 py-2.5 rounded-2xl active:bg-[#484774]/5"
                                  >
                                    <MenuItemLabel item={item} />
                                  </a>
                                ) : (
                                  <button
                                    type="button"
                                    onClick={() => runAction(item.action)}
                                    className="block w-full text-left px-4 py-2.5 rounded-2xl active:bg-[#484774]/5"
                                  >
                                    <MenuItemLabel item={item} />
                                  </button>
                                )}
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
                {[SIMPLE_LINKS.boutique, SIMPLE_LINKS.contact].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-3 border-t border-[#484774]/10 text-xs uppercase tracking-[0.16em] text-[#484774] font-medium"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="py-3 border-t border-[#484774]/10 space-y-2">
                  <a
                    href={`mailto:${CLINIC_INFO.email}`}
                    className="flex items-center gap-2.5 text-xs text-[#484774] font-medium hover:text-[#739cd2] transition-colors break-all"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#d7a761]" />
                    <span>{CLINIC_INFO.email}</span>
                  </a>
                  <div className="flex items-center gap-3 pt-1">
                    <a
                      href={CLINIC_INFO.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#484774]/5 text-[11px] font-medium text-[#484774] hover:bg-[#484774]/10 transition-colors"
                    >
                      <InstagramIcon className="w-3 h-3 text-[#e1306c]" />
                      <span>Instagram</span>
                    </a>
                    <a
                      href={CLINIC_INFO.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#484774]/5 text-[11px] font-medium text-[#484774] hover:bg-[#484774]/10 transition-colors"
                    >
                      <FacebookIcon className="w-3 h-3 text-[#1877f2]" />
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>
              </nav>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-full bg-[#484774] text-[#f7f7f4] text-[11px] uppercase tracking-[0.16em] font-medium"
              >
                Book Consultation
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};
