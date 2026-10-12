'use client';

import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Calendar, Mail } from 'lucide-react';
import { CLINIC_INFO } from '@/data/clinic-data';
import { InstagramIcon, FacebookIcon } from '@/components/SocialIcons';
import { ClinicMap } from '@/components/ClinicMap';

interface LocationSectionProps {
  onOpenBooking: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="location" className="py-24 bg-[#f0efec] border-t border-[#a2a1ba]/25 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Hours & Address Info */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#484774] font-semibold">
                Visit Our Sanctuary
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#484774]">
                A discreet haven located in the <span className="italic text-[#739cd2]">heart</span> of Westport.
              </h2>
              <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
                Experience quiet luxury, ample private parking, and a tranquil escape designed for uninterrupted healing and rejuvenation.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#484774] shadow-sm flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#484774]">
                    Clinic Address
                  </h3>
                  <p className="text-sm text-stone-700 font-light mt-1">
                    {CLINIC_INFO.address}<br />
                    {CLINIC_INFO.city}, {CLINIC_INFO.state} {CLINIC_INFO.zip}
                  </p>
                  <a
                    href="https://maps.google.com/?q=25+Sylvan+Road+South+Suite+A+Westport+CT+06880"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#484774] hover:underline mt-1 font-medium"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#484774] shadow-sm flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#484774]">
                    Clinical Hours
                  </h3>
                  <p className="text-sm text-stone-700 font-light mt-1">
                    {CLINIC_INFO.hours.weekdays}<br />
                    {CLINIC_INFO.hours.sunday}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#484774] shadow-sm flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#484774]">
                    Direct Telephone & Text
                  </h3>
                  <p className="text-sm text-stone-700 font-light mt-1">
                    <a
                      href={`tel:${CLINIC_INFO.phoneClean}`}
                      className="font-medium hover:text-[#484774] transition-colors"
                    >
                      {CLINIC_INFO.phone}
                    </a>
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Call or text Ledy anytime to ask questions or discuss your skin goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#484774] shadow-sm flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-[#484774]">
                    Direct Email Inquiries
                  </h3>
                  <p className="text-sm text-stone-700 font-light mt-1">
                    <a
                      href={`mailto:${CLINIC_INFO.email}`}
                      className="font-medium text-[#484774] hover:text-[#739cd2] transition-colors underline underline-offset-4 break-all"
                    >
                      {CLINIC_INFO.email}
                    </a>
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Send intake questions, protocol inquiries, or consultation requests.
                  </p>
                </div>
              </div>

              {/* Social Channels with Logos */}
              <div className="pt-2 p-4 rounded-2xl bg-white/90 border border-[#a2a1ba]/25 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#484774] font-semibold">
                    Connect On Social Media
                  </span>
                  <span className="text-[10px] text-stone-400 uppercase tracking-widest font-mono">
                    Official Accounts
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={CLINIC_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-amber-500/10 hover:from-purple-500/20 hover:to-amber-500/20 border border-stone-200 text-stone-800 text-xs font-medium transition-all group shadow-2xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
                        <InstagramIcon className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-left">
                        <span className="block font-semibold text-[#484774]">Instagram</span>
                        <span className="block text-[10px] text-stone-500 font-light -mt-0.5">@essenccia_rejuvenation_well</span>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#484774] group-hover:translate-x-0.5 transition-all" />
                  </a>

                  <a
                    href={CLINIC_INFO.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/15 border border-stone-200 text-stone-800 text-xs font-medium transition-all group shadow-2xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-[#1877f2] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
                        <FacebookIcon className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-left">
                        <span className="block font-semibold text-[#484774]">Facebook</span>
                        <span className="block text-[10px] text-stone-500 font-light -mt-0.5">Essenccia Wellness</span>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#484774] group-hover:translate-x-0.5 transition-all" />
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-full bg-[#484774] hover:bg-[#3b3a63] text-white text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02] cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#d7a761]" />
                <span>Reserve Consultation</span>
              </button>
              <a
                href={`tel:${CLINIC_INFO.phoneClean}`}
                className="px-6 py-3.5 rounded-full border border-[#484774]/20 hover:border-[#484774] text-[#484774] text-xs uppercase tracking-[0.2em] font-medium transition-all flex items-center justify-center gap-2 hover:bg-white hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4" />
                <span>Call Clinic</span>
              </a>
              <a
                href={`mailto:${CLINIC_INFO.email}`}
                className="px-6 py-3.5 rounded-full border border-[#484774]/20 hover:border-[#484774] text-[#484774] text-xs uppercase tracking-[0.2em] font-medium transition-all flex items-center justify-center gap-2 hover:bg-white hover:scale-[1.02]"
              >
                <Mail className="w-4 h-4" />
                <span>Email Ledy</span>
              </a>
            </div>
          </div>

          {/* Right: Architectural Card & Interactive Map */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#a2a1ba]/25 shadow-lg space-y-5">
              {/* Interactive Google Map with Pin, InfoWindow, and Controls */}
              <ClinicMap />

              {/* Regional Service Region Badges */}
              <div className="pt-3 border-t border-stone-200/80">
                <div className="flex items-center justify-between pb-2.5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#484774] font-semibold">
                    Connecticut Service Region
                  </span>
                  <span className="text-xs text-stone-500 font-light">
                    Fairfield County · Private Suite
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-stone-600 font-light">
                  <span className="px-2.5 py-1.5 rounded-lg bg-[#f7f7f4] border border-stone-200/60 font-medium text-stone-800 text-center">
                    Westport
                  </span>
                  <span className="px-2.5 py-1.5 rounded-lg bg-[#f7f7f4] border border-stone-200/60 font-medium text-stone-800 text-center">
                    Southport
                  </span>
                  <span className="px-2.5 py-1.5 rounded-lg bg-[#f7f7f4] border border-stone-200/60 font-medium text-stone-800 text-center">
                    Fairfield
                  </span>
                  <span className="px-2.5 py-1.5 rounded-lg bg-[#f7f7f4] border border-stone-200/60 font-medium text-stone-800 text-center">
                    Norwalk
                  </span>
                  <span className="px-2.5 py-1.5 rounded-lg bg-[#f7f7f4] border border-stone-200/60 font-medium text-stone-800 text-center">
                    Darien &amp; New Canaan
                  </span>
                  <span className="px-2.5 py-1.5 rounded-lg bg-[#f7f7f4] border border-stone-200/60 font-medium text-stone-800 text-center">
                    Greenwich
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
