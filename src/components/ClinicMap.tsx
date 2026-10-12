'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ExternalLink, Navigation, Compass, Layers, RotateCcw } from 'lucide-react';
import { CLINIC_INFO } from '@/data/clinic-data';

export const ClinicMap: React.FC = () => {
  const [isSatellite, setIsSatellite] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [showInfoWindow, setShowInfoWindow] = useState(true);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(
    'Essenccia Rejuvenation & Wellness 25 Sylvan Road South Suite A Westport CT 06880'
  )}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    '25 Sylvan Road South, Suite A, Westport, CT 06880'
  )}`;

  const handleMouseDown = (e: React.MouseEvent) => {
    // Only drag with left click and when not clicking an interactive element
    if ((e.target as HTMLElement).closest('button, a')) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 2.0));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.75));
  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setShowInfoWindow(true);
  };

  return (
    <div className="w-full select-none">
      {/* Top Map Card Header */}
      <div className="flex items-center justify-between pb-3 border-b border-stone-200/80 mb-3 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-stone-900 tracking-wide">
            Westport Clinic Sanctuary Map
          </span>
          <span className="hidden sm:inline-block text-[11px] text-stone-500 font-light">
            · 25 Sylvan Road South, Suite A
          </span>
        </div>
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[11px] text-[#484774] hover:text-[#739cd2] font-semibold transition-colors"
        >
          <span>Open in Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Main Map Canvas Container */}
      <div
        className="relative w-full h-[460px] sm:h-[500px] rounded-2xl overflow-hidden border border-stone-300 shadow-inner bg-[#edece6] cursor-grab active:cursor-grabbing transition-all"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        role="region"
        aria-label="Interactive map of Essenccia Rejuvenation & Wellness location"
      >
        {/* Animated Pan & Zoom Layer */}
        <div
          className="absolute inset-0 w-full h-full origin-center transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
          }}
        >
          {/* MAP MODE: High-fidelity Vector Google Maps Style */}
          {!isSatellite ? (
            <svg
              viewBox="0 0 800 600"
              className="w-full h-full pointer-events-none"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                {/* Google Maps style drop shadow for pin */}
                <filter id="pinShadow" x="-20%" y="-20%" width="150%" height="150%">
                  <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.35" />
                </filter>
                {/* InfoWindow Shadow */}
                <filter id="infoShadow" x="-10%" y="-10%" width="120%" height="130%">
                  <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#000" floodOpacity="0.22" />
                </filter>
              </defs>

              {/* Base terrain */}
              <rect width="800" height="600" fill="#f2efe9" />

              {/* Water features (light blue stream / wetland curve along Sylvan Rd) */}
              <path
                d="M 370 0 C 375 70, 360 120, 370 170 C 380 210, 420 230, 435 280 C 450 330, 410 380, 400 450 C 390 510, 430 560, 445 600 L 415 600 C 395 560, 370 510, 380 450 C 390 380, 420 330, 410 280 C 395 230, 355 210, 350 170 C 345 120, 355 70, 350 0 Z"
                fill="#bfe5f8"
              />
              <path
                d="M 680 400 C 720 420, 750 480, 800 500 L 800 600 L 640 600 C 650 540, 660 460, 680 400 Z"
                fill="#bfe5f8"
              />
              <path
                d="M 0 380 C 60 400, 110 440, 130 510 C 145 560, 120 600, 120 600 L 0 600 Z"
                fill="#bfe5f8"
              />

              {/* Parks / Greenery */}
              {/* Pasacreta Park */}
              <path
                d="M 470 420 C 530 400, 620 410, 710 440 C 760 460, 780 520, 770 580 C 730 600, 620 590, 520 570 C 470 550, 450 490, 470 420 Z"
                fill="#d8f3dc"
              />
              <text x="560" y="475" fill="#4d7c57" fontSize="13" fontWeight="500" fontFamily="sans-serif">
                Pasacreta Park
              </text>

              {/* Secondary green patch near Sylvan */}
              <rect x="180" y="80" width="120" height="90" rx="16" fill="#e2f6e5" />
              <rect x="520" y="80" width="140" height="110" rx="20" fill="#e2f6e5" />

              {/* Building Footprints (light beige/gray) */}
              <rect x="240" y="240" width="45" height="35" rx="3" fill="#e8e4dc" stroke="#d5d0c7" strokeWidth="1" />
              <rect x="295" y="225" width="40" height="30" rx="3" fill="#e8e4dc" stroke="#d5d0c7" strokeWidth="1" />
              <rect x="360" y="100" width="55" height="40" rx="3" fill="#e8e4dc" stroke="#d5d0c7" strokeWidth="1" />
              <rect x="470" y="160" width="60" height="45" rx="3" fill="#e8e4dc" stroke="#d5d0c7" strokeWidth="1" />
              <rect x="520" y="270" width="55" height="45" rx="3" fill="#e8e4dc" stroke="#d5d0c7" strokeWidth="1" />
              <rect x="440" y="500" width="65" height="45" rx="3" fill="#e8e4dc" stroke="#d5d0c7" strokeWidth="1" />
              <rect x="220" y="470" width="55" height="40" rx="3" fill="#e8e4dc" stroke="#d5d0c7" strokeWidth="1" />

              {/* Sylvan Office Park buildings (near 25 Sylvan) */}
              <rect x="380" y="260" width="60" height="50" rx="4" fill="#ffffff" stroke="#c8c4bc" strokeWidth="1.5" />
              <rect x="340" y="315" width="50" height="38" rx="4" fill="#e6e2da" stroke="#c8c4bc" strokeWidth="1" />

              {/* Road network - Outer strokes */}
              {/* Secondary roads */}
              <path d="M 0 100 Q 180 120, 280 200" fill="none" stroke="#d0cdbe" strokeWidth="14" strokeLinecap="round" />
              <path d="M 0 100 Q 180 120, 280 200" fill="none" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />

              <path d="M 80 500 Q 200 450, 310 380" fill="none" stroke="#d0cdbe" strokeWidth="14" strokeLinecap="round" />
              <path d="M 80 500 Q 200 450, 310 380" fill="none" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />

              <path d="M 330 200 Q 360 80, 420 40 Q 450 20, 490 60" fill="none" stroke="#d0cdbe" strokeWidth="14" strokeLinecap="round" />
              <path d="M 330 200 Q 360 80, 420 40 Q 450 20, 490 60" fill="none" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />

              <path d="M 430 310 Q 560 300, 720 250" fill="none" stroke="#d0cdbe" strokeWidth="14" strokeLinecap="round" />
              <path d="M 430 310 Q 560 300, 720 250" fill="none" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />

              <path d="M 420 480 Q 560 520, 800 480" fill="none" stroke="#d0cdbe" strokeWidth="14" strokeLinecap="round" />
              <path d="M 420 480 Q 560 520, 800 480" fill="none" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />

              {/* Main Arterial Road: SYLVAN ROAD SOUTH */}
              <path
                d="M 20 600 Q 220 430, 330 310 Q 400 230, 470 140 Q 530 60, 580 0"
                fill="none"
                stroke="#c9c4b3"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 20 600 Q 220 430, 330 310 Q 400 230, 470 140 Q 530 60, 580 0"
                fill="none"
                stroke="#ffffff"
                strokeWidth="18"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Street Names (Google Maps Typography) */}
              <text
                x="145"
                y="435"
                transform="rotate(-36 145 435)"
                fill="#70757a"
                fontSize="12"
                fontWeight="500"
                fontFamily="sans-serif"
                letterSpacing="0.4"
              >
                Sylvan Rd S
              </text>
              <text
                x="475"
                y="380"
                transform="rotate(22 475 380)"
                fill="#70757a"
                fontSize="11"
                fontWeight="500"
                fontFamily="sans-serif"
              >
                Sylvan Rd S
              </text>
              <text
                x="345"
                y="110"
                transform="rotate(74 345 110)"
                fill="#70757a"
                fontSize="11"
                fontWeight="500"
                fontFamily="sans-serif"
              >
                Saviano Ln
              </text>
              <text
                x="100"
                y="475"
                transform="rotate(-24 100 475)"
                fill="#70757a"
                fontSize="10"
                fontWeight="500"
                fontFamily="sans-serif"
              >
                Sylvan Ln
              </text>

              {/* Surrounding Landmark Markers (from user screenshot) */}
              {/* Image Works */}
              <g transform="translate(480, 110)">
                <circle cx="0" cy="0" r="10" fill="#ffffff" stroke="#202124" strokeWidth="2.5" />
                <circle cx="0" cy="0" r="4" fill="#202124" />
                <text x="14" y="4" fill="#3c4043" fontSize="11" fontWeight="500" fontFamily="sans-serif">
                  Image Works
                </text>
              </g>

              {/* Chioffi Law */}
              <g transform="translate(500, 300)">
                <circle cx="0" cy="0" r="10" fill="#ffffff" stroke="#202124" strokeWidth="2.5" />
                <circle cx="0" cy="0" r="4" fill="#202124" />
                <text x="15" y="4" fill="#3c4043" fontSize="11" fontWeight="500" fontFamily="sans-serif">
                  Chioffi Law
                </text>
              </g>

              {/* Gold Coast Financial Services */}
              <g transform="translate(415, 320)">
                <circle cx="0" cy="0" r="10" fill="#ffffff" stroke="#202124" strokeWidth="2.5" />
                <circle cx="0" cy="0" r="4" fill="#202124" />
                <text x="-165" y="5" fill="#3c4043" fontSize="11" fontWeight="500" fontFamily="sans-serif" textAnchor="start">
                  Gold Coast Financial Services
                </text>
              </g>

              {/* Sunoco */}
              <g transform="translate(480, 395)">
                <circle cx="0" cy="0" r="11" fill="#ffffff" stroke="#202124" strokeWidth="2.5" />
                {/* Fuel pump mini-glyph */}
                <path d="M -3 -5 L 1 -5 L 1 5 L -3 5 Z M 1 -2 L 3 -2 L 3 3 L 1 3" fill="#202124" stroke="#202124" strokeWidth="0.8" />
                <text x="-48" y="4" fill="#1a73e8" fontSize="11" fontWeight="500" fontFamily="sans-serif">
                  Sunoco
                </text>
              </g>

              {/* Westport Farmers' Market */}
              <text x="25" y="360" fill="#1a73e8" fontSize="11" fontWeight="500" fontFamily="sans-serif">
                Westport Farmers&apos; Market
              </text>
              <text x="25" y="375" fill="#1a73e8" fontSize="10" fontWeight="400" fontFamily="sans-serif">
                · Winter Season
              </text>

              {/* CLINIC MAIN PIN (RED GOOGLE PIN) */}
              <g transform="translate(390, 245)">
                {/* Pin shadow on road */}
                <ellipse cx="2" cy="0" rx="9" ry="4" fill="#000000" opacity="0.3" />

                {/* Google Red Pin SVG Path */}
                <path
                  d="M 0 0 C -10 -15 -17 -26 -17 -38 C -17 -52 -8 -61 0 -61 C 8 -61 17 -52 17 -38 C 17 -26 10 -15 0 0 Z"
                  fill="#ea4335"
                  filter="url(#pinShadow)"
                />
                {/* Inner white circle */}
                <circle cx="0" cy="-38" r="6.5" fill="#ffffff" />
                {/* Tiny deep red core */}
                <circle cx="0" cy="-38" r="2.5" fill="#c5221f" />

                {/* Label next to pin */}
                <text
                  x="22"
                  y="-26"
                  fill="#202124"
                  fontSize="12.5"
                  fontWeight="700"
                  fontFamily="sans-serif"
                  letterSpacing="0.2"
                >
                  ESSENCCIA
                </text>
                <text
                  x="22"
                  y="-12"
                  fill="#202124"
                  fontSize="11.5"
                  fontWeight="600"
                  fontFamily="sans-serif"
                >
                  REJUVENATION &amp;...
                </text>
              </g>
            </svg>
          ) : (
            /* SATELLITE MODE: High-res aerial orthophoto with labels */
            <div className="relative w-full h-full">
              <Image
                src="/images/westport-satellite-map.jpg"
                alt="Westport CT Aerial Satellite View"
                fill
                className="object-cover pointer-events-none"
                priority
              />
              {/* Subtle road and pin overlay in satellite mode */}
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />

              {/* Pin in satellite mode */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="relative">
                  <div className="w-10 h-10 -mt-10 -ml-5">
                    <svg viewBox="0 0 34 50" className="w-full h-full filter drop-shadow-md">
                      <path
                        d="M 17 50 C 7 35 0 24 0 17 C 0 8 8 0 17 0 C 26 0 34 8 34 17 C 34 24 27 35 17 50 Z"
                        fill="#ea4335"
                      />
                      <circle cx="17" cy="17" r="6.5" fill="#ffffff" />
                      <circle cx="17" cy="17" r="2.5" fill="#c5221f" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Interactive InfoWindow Card (Overlay positioned over pin) */}
          {showInfoWindow && (
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[175px] z-20 pointer-events-auto"
              style={{ minWidth: '270px' }}
            >
              <div className="relative bg-white rounded-lg p-3.5 sm:p-4 shadow-[0_4px_16px_rgba(0,0,0,0.28)] border border-stone-200/90 text-stone-900 animate-in fade-in zoom-in-95 duration-150">
                {/* Close Button 'X' */}
                <button
                  type="button"
                  onClick={() => setShowInfoWindow(false)}
                  className="absolute top-2 right-2 p-1 text-stone-400 hover:text-stone-700 transition-colors cursor-pointer"
                  aria-label="Close location card"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>

                {/* Business Name */}
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-stone-900 pr-5 leading-tight">
                  ESSENCCIA REJUVENATION &amp; WELLNESS
                </h4>
                <p className="text-[11px] text-stone-600 font-light mt-1">
                  25 Sylvan Road South, Suite A · Westport, CT
                </p>

                {/* Interactive Action Links */}
                <div className="mt-2.5 pt-2 border-t border-stone-100 flex items-center gap-4 text-xs font-medium">
                  <a
                    href="#treatments"
                    className="text-[#1a73e8] hover:underline underline-offset-2 flex items-center gap-1"
                  >
                    <span>Link</span>
                  </a>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a73e8] hover:underline underline-offset-2 flex items-center gap-1"
                  >
                    <span>Directions</span>
                  </a>
                  <a
                    href={`tel:${CLINIC_INFO.phoneClean}`}
                    className="text-stone-600 hover:text-[#484774] ml-auto text-[11px]"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                </div>

                {/* Pointer Arrow down to Pin */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white drop-shadow-xs" />
              </div>
            </div>
          )}
        </div>

        {/* MAP CONTROLS: Top-Left [ Map | Satellite ] Switcher */}
        <div className="absolute top-3 left-3 z-30 flex rounded-md overflow-hidden bg-white shadow-md border border-stone-300/80 text-xs font-medium">
          <button
            type="button"
            onClick={() => setIsSatellite(false)}
            className={`px-3 py-1.5 transition-colors cursor-pointer ${
              !isSatellite ? 'bg-white font-bold text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Map
          </button>
          <button
            type="button"
            onClick={() => setIsSatellite(true)}
            className={`px-3 py-1.5 transition-colors cursor-pointer border-l border-stone-200 ${
              isSatellite ? 'bg-white font-bold text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Satellite
          </button>
        </div>

        {/* MAP CONTROLS: Top-Right Re-center / Reset */}
        <div className="absolute top-3 right-3 z-30 flex items-center gap-2">
          <button
            type="button"
            onClick={handleReset}
            title="Reset map view and center pin"
            className="p-2 rounded-md bg-white hover:bg-stone-50 text-stone-700 shadow-md border border-stone-300/80 transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          {!showInfoWindow && (
            <button
              type="button"
              onClick={() => setShowInfoWindow(true)}
              className="px-2.5 py-1.5 rounded-md bg-white hover:bg-stone-50 text-[11px] font-semibold text-stone-700 shadow-md border border-stone-300/80 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Compass className="w-3.5 h-3.5 text-[#ea4335]" />
              <span>Show Pin Info</span>
            </button>
          )}
        </div>

        {/* MAP CONTROLS: Bottom-Right (Pegman + Zoom Buttons) */}
        <div className="absolute bottom-6 right-3 z-30 flex flex-col items-center gap-2">
          {/* Pegman Street View Button */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Street View around 25 Sylvan Rd S"
            className="w-8 h-8 rounded-md bg-white hover:bg-stone-50 flex items-center justify-center shadow-md border border-stone-300/80 text-amber-500 hover:text-amber-600 transition-all cursor-pointer group"
          >
            {/* Street View Pegman Glyph */}
            <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm2.5 7h-5c-.8 0-1.5.7-1.5 1.5v6c0 .8.7 1.5 1.5 1.5h1v4h3v-4h1c.8 0 1.5-.7 1.5-1.5v-6c0-.8-.7-1.5-1.5-1.5z" />
            </svg>
          </a>

          {/* Zoom Buttons Stack */}
          <div className="flex flex-col rounded-md overflow-hidden bg-white shadow-md border border-stone-300/80">
            <button
              type="button"
              onClick={handleZoomIn}
              title="Zoom in"
              className="w-8 h-8 flex items-center justify-center text-stone-700 hover:bg-stone-50 font-bold text-lg active:bg-stone-100 transition-colors cursor-pointer"
            >
              +
            </button>
            <div className="w-full h-px bg-stone-200" />
            <button
              type="button"
              onClick={handleZoomOut}
              title="Zoom out"
              className="w-8 h-8 flex items-center justify-center text-stone-700 hover:bg-stone-50 font-bold text-lg active:bg-stone-100 transition-colors cursor-pointer"
            >
              −
            </button>
          </div>
        </div>

        {/* MAP FOOTER: Authentic Google Maps status bar */}
        <div className="absolute bottom-0 inset-x-0 bg-white/80 backdrop-blur-xs px-2.5 py-1 flex items-center justify-between text-[10px] text-stone-600 font-sans z-20 pointer-events-auto border-t border-stone-200/60">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-stone-800 tracking-tight">Google</span>
            <span className="hidden sm:inline text-stone-400">|</span>
            <span className="hidden sm:inline">Keyboard shortcuts</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <span>Map data ©2026 Google</span>
            <div className="hidden sm:flex items-center gap-1 border-b border-stone-500 px-1">
              <span>20 m</span>
            </div>
            <a href="https://www.google.com/intl/en_US/help/terms_maps/" target="_blank" rel="noreferrer" className="hover:underline">
              Terms
            </a>
            <span className="hidden sm:inline hover:underline cursor-pointer">Report a map error</span>
          </div>
        </div>
      </div>

      {/* Map Action Quick Bar underneath */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="flex items-center gap-2 text-xs text-stone-600 font-light">
          <Navigation className="w-3.5 h-3.5 text-[#484774]" />
          <span>Discreet parking available directly at Suite A entrance</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#484774] hover:bg-[#3b3a63] text-white text-xs font-medium transition-all shadow-xs"
          >
            <Navigation className="w-3.5 h-3.5 text-[#d7a761]" />
            <span>Turn-by-Turn Navigation</span>
          </a>
        </div>
      </div>
    </div>
  );
};
