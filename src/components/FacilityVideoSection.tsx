'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Sparkles, MapPin, Maximize, RotateCcw } from 'lucide-react';

interface FacilityVideoSectionProps {
  onOpenBooking?: () => void;
}

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

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
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
      {/* Ambient background architectural accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#739cd2]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d7a761]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#d7a761]/40 text-[#d7a761] text-[10px] uppercase tracking-[0.25em] font-medium bg-[#3b3a63]/50">
              <Sparkles className="w-3.5 h-3.5 text-[#d7a761]" />
              The Sanctuary Experience
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.08] text-balance">
              Step inside our <span className="italic text-[#739cd2]">private clinical suite</span>
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed tracking-[0.03em] max-w-2xl font-light">
              Explore the dedicated sanctuary at 25 Sylvan Road South, Suite A in Westport. Every suite is curated for sensory calm, hospital-grade hygiene, and unhurried one-on-one sessions with Ledy.
            </p>
          </motion.div>
        </div>

        {/* Video Player Box with Editorial Framing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-sm overflow-hidden bg-stone-900 border border-white/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] group"
        >
          {/* HTML5 Video element */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] max-h-[640px] w-full overflow-hidden bg-black flex items-center justify-center">
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

            {/* Play/Pause Center Indicator on Hover/Pause */}
            {!isPlaying && (
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                onClick={togglePlay}
                aria-label="Play video"
                className="absolute w-20 h-20 rounded-full bg-[#484774]/80 backdrop-blur-md border border-[#d7a761]/60 flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform"
              >
                <Play className="w-8 h-8 fill-current text-[#d7a761] ml-1" />
              </motion.button>
            )}

            {/* Video Controls Bar Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 flex flex-col gap-3 transition-opacity duration-300">
              {/* Progress Bar */}
              <div className="w-full bg-white/20 h-1 overflow-hidden cursor-pointer rounded-full">
                <div
                  className="bg-[#d7a761] h-full transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Controls and metadata */}
              <div className="flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    className="p-2 hover:text-[#d7a761] transition-colors bg-white/10 hover:bg-white/20 rounded-full"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    className="p-2 hover:text-[#d7a761] transition-colors bg-white/10 hover:bg-white/20 rounded-full flex items-center gap-1.5"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    <span className="hidden sm:inline text-[10px] uppercase tracking-wider text-stone-300">
                      {isMuted ? 'Muted' : 'Audio On'}
                    </span>
                  </button>

                  <button
                    onClick={handleRestart}
                    aria-label="Restart tour"
                    className="p-2 hover:text-[#d7a761] transition-colors bg-white/10 hover:bg-white/20 rounded-full"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <span className="hidden md:flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#d7a761]">
                    <MapPin className="w-3.5 h-3.5" />
                    Suite A · Westport, CT
                  </span>

                  <button
                    onClick={handleFullscreen}
                    aria-label="View full screen"
                    className="p-2 hover:text-[#d7a761] transition-colors bg-white/10 hover:bg-white/20 rounded-full"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Architectural Pillars / Features below video */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="p-6 bg-white/5 border border-white/10 space-y-3"
          >
            <span className="text-[10px] font-mono tracking-widest text-[#d7a761]">01 / ENVIRONMENT</span>
            <h3 className="font-serif text-2xl text-white font-light">Sensory Calm &amp; Privacy</h3>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light">
              Single-occupancy clinical rooms designed to insulate you from outside stress, with dimmable ambient lighting and warm ergonomic treatment tables.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-6 bg-white/5 border border-white/10 space-y-3"
          >
            <span className="text-[10px] font-mono tracking-widest text-[#d7a761]">02 / EQUIPMENT</span>
            <h3 className="font-serif text-2xl text-white font-light">Advanced Medical Modalities</h3>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light">
              Equipped with calibrated TriPollar Radiofrequency, Ultrasonic Cavi-Lipo body sculpting, Rezenerate nano-infusion wands, and medical-grade diamond tips.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="p-6 bg-white/5 border border-white/10 space-y-3"
          >
            <span className="text-[10px] font-mono tracking-widest text-[#d7a761]">03 / STANDARDS</span>
            <h3 className="font-serif text-2xl text-white font-light">Impeccable Clinical Hygiene</h3>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light">
              Hospital-grade disinfection protocols between each guest, featuring medical autoclaves, single-use tips, and organic restorative essences.
            </p>
          </motion.div>
        </div>

        {/* Optional Action Bar */}
        {onOpenBooking && (
          <div className="mt-12 text-center">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#f7f7f4] hover:bg-white text-[#484774] text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors"
            >
              Book an Appointment in Our Suite
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
