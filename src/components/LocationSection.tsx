'use client';

import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '@/data/clinic-data';

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
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-3.5 rounded-full bg-[#484774] hover:bg-[#3b3a63] text-white text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <Calendar className="w-4 h-4 text-[#d7a761]" />
                <span>Reserve Consultation</span>
              </button>
              <a
                href={`tel:${CLINIC_INFO.phoneClean}`}
                className="px-8 py-3.5 rounded-full border border-[#484774]/20 hover:border-[#484774] text-[#484774] text-xs uppercase tracking-[0.2em] font-medium transition-all flex items-center justify-center gap-2 hover:bg-stone-50 hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4" />
                <span>Call Clinic</span>
              </a>
            </div>
          </div>

          {/* Right: Architectural Card & Visual Map Pin */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-8 border border-[#a2a1ba]/25 shadow-md space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#484774] font-semibold">
                  Private Practice In Westport
                </span>
                <h3 className="font-sans text-xl sm:text-2xl font-semibold text-[#484774]">
                  Essenccia Rejuvenation & Wellness
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                  Located at Sylvan Road South in Westport with easy access from the Post Road and I-95. Discreet ground-floor private suite ensuring complete confidentiality and calm.
                </p>
              </div>

              {/* Stylized Minimalist Map Card */}
              <div className="p-6 rounded-xl bg-[#f7f7f4] border border-stone-200/80 space-y-4">
                <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                  <span className="text-xs font-semibold text-stone-800 uppercase tracking-wider">
                    Connecticut Service Region
                  </span>
                  <span className="text-xs text-[#484774] font-medium">Fairfield County</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs text-stone-600 font-light">
                  <div className="space-y-1">
                    <p className="font-medium text-stone-900">• Westport</p>
                    <p className="font-medium text-stone-900">• Southport</p>
                    <p className="font-medium text-stone-900">• Fairfield</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-stone-900">• Norwalk</p>
                    <p className="font-medium text-stone-900">• Darien & New Canaan</p>
                    <p className="font-medium text-stone-900">• Greenwich</p>
                  </div>
                </div>
                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=25+Sylvan+Road+South+Suite+A+Westport+CT+06880"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 bg-[#f0efec] hover:bg-[#f0efec] text-stone-800 text-xs uppercase tracking-wider font-medium text-center rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#484774]" /> Get Driving Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
