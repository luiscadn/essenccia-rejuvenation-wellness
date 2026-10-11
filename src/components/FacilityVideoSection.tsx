'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Sparkles, MapPin, RotateCcw, ArrowRight, ShieldCheck, Feather, Cpu } from 'lucide-react';

interface FacilityVideoSectionProps {
  onOpenBooking?: () => void;
}

const HIGHLIGHTS = [
  {
    icon: Feather,
    title: 'Sensory Calm & Privacy',
    desc: 'Single-occupancy suites with dimmable ambient lighting and warm ergonomic tables, insulating you from outside noise.',
  },
  {
    icon: Cpu,
    title: 'Advanced Medical Modalities',
    desc: 'TriPollar Radiofrequency, Ultrasonic Cavi-Lipo, and Rezenerate nano-infusion wands calibrated for optimal comfort.',
  },
  {
    icon: ShieldCheck,
    title: 'Hospital-Grade Clinical Hygiene',
    desc: 'Hospital autoclave sterilization, medical air purification, and single-use tips between every single appointment.',
  },
];

export const FacilityVideoSection: React.FC<FacilityVideoSectionProps> = ({ onOpenBooking }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play().catch(() => {});
    setIsPlaying(true);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  return (
    <section id="facilities" className="relative bg-[#484774] text-[#f7f7f4] py-24 lg:py-32 overflow-hidden scroll-mt-24">
      {/* Ambient background soft glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#739cd2]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#d7a761]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Editorial Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d7a761]/40 text-[#d7a761] text-[10px] uppercase tracking-[0.22em] font-medium bg-[#3b3a63]/70 backdrop-blur-sm shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#d7a761]" />
                The Sanctuary Experience
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.06] text-balance">
                Step inside our <span className="italic text-[#739cd2]">private clinical suite</span>
              </h2>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed tracking-[0.03em] font-light max-w-xl">
                Explore the dedicated sanctuary at 25 Sylvan Road South, Suite A in Westport. Every detail is curated for sensory calm, hospital-grade hygiene, and unhurried one-on-one sessions with Ledy.
              </p>
            </div>

            {/* Soft, rounded feature highlights (No rigid boxed numbers) */}
            <div className="space-y-4 pt-2 max-w-xl">
              {HIGHLIGHTS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#d7a761]/15 border border-[#d7a761]/30 flex items-center justify-center shrink-0 text-[#d7a761] group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-serif text-xl font-light text-white group-hover:text-[#d7a761] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {onOpenBooking && (
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#f7f7f4] hover:bg-white text-[#484774] text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md hover:shadow-xl hover:scale-[1.02]"
                >
                  <span>Book an Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#d7a761] transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            )}
          </motion.div>

          {/* Vertical 9:16 Portrait Video Player Frame (Native Resolution, Zero Pixel Distortion) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[310px] mx-auto">
              {/* Soft decorative glow */}
              <div className="absolute -inset-2 bg-gradient-to-b from-[#739cd2]/30 via-[#d7a761]/25 to-[#484774]/50 rounded-[3rem] blur-2xl opacity-60" />

              {/* Main Vertical Device/Frame */}
              <div className="relative rounded-[2.5rem] p-2 bg-[#2f2e52]/90 border-2 border-white/20 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)]">
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[2rem] bg-black group flex items-center justify-center">
                  <video
                    ref={videoRef}
                    src="/videos/sanctuary_facilities.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover object-center cursor-pointer"
                    onClick={togglePlay}
                  />

                  {/* Play Center Indicator when paused */}
                  {!isPlaying && (
                    <motion.button
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      onClick={togglePlay}
                      aria-label="Play video"
                      className="absolute w-14 h-14 rounded-full bg-[#484774]/90 backdrop-blur-md border border-[#d7a761]/60 flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform z-20"
                    >
                      <Play className="w-5 h-5 fill-current text-[#d7a761] ml-0.5" />
                    </motion.button>
                  )}

                  {/* Top Badge Overlay */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10 pointer-events-none">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[9px] uppercase tracking-wider text-stone-200">
                      <MapPin className="w-2.5 h-2.5 text-[#d7a761]" />
                      <span>Suite A · Westport</span>
                    </div>
                    <span className="text-[9px] tracking-widest uppercase text-[#d7a761] font-medium px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-xs border border-white/10">
                      Tour
                    </span>
                  </div>

                  {/* Bottom Rounded Control Strip */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-3 sm:p-4 flex flex-col gap-2 z-10">
                    {/* Progress Bar */}
                    <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden cursor-pointer">
                      <div
                        className="bg-[#d7a761] h-full transition-all duration-100 ease-linear rounded-full"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-between text-white text-xs">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={togglePlay}
                          aria-label={isPlaying ? 'Pause video' : 'Play video'}
                          className="p-1.5 rounded-full hover:bg-white/20 transition-colors bg-white/10"
                        >
                          {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-current" />}
                        </button>

                        <button
                          onClick={toggleMute}
                          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                          className="px-2.5 py-1 rounded-full hover:bg-white/20 transition-colors bg-white/10 flex items-center gap-1 text-[9px] uppercase tracking-wider text-stone-200"
                        >
                          {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                          <span>{isMuted ? 'Muted' : 'Sound'}</span>
                        </button>

                        <button
                          onClick={handleRestart}
                          aria-label="Restart tour"
                          className="p-1.5 rounded-full hover:bg-white/20 transition-colors bg-white/10"
                        >
                          <RotateCcw className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-[9px] tracking-widest uppercase text-stone-300 font-medium">
                        Live Suite
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption under vertical frame */}
              <p className="mt-3 text-center text-xs text-stone-300/80 font-light tracking-wide">
                Live Suite Tour · Single-client clinical suite
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
