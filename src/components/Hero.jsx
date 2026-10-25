import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Calendar, MapPin, Sparkles } from 'lucide-react';

export default function Hero({ weddingData, isInvitationOpened }) {
  const videoRef = useRef(null);

  const startTime = weddingData.videoStartTime ?? 0;
  const endTime = weddingData.videoEndTime ?? null;
  const rotation = weddingData.videoRotation ?? 0;

  const scrollToStory = () => {
    const el = document.getElementById('story');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure muted attributes are applied to satisfy browser autoplay policies
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playVideo = () => {
      if (video && video.paused) {
        video.play().catch(() => {});
      }
    };

    if (startTime > 0 && video.currentTime < startTime) {
      video.currentTime = startTime;
    }
    playVideo();

    const handleLoadedMetadata = () => {
      if (startTime > 0) {
        video.currentTime = startTime;
      }
      playVideo();
    };

    const handleTimeUpdate = () => {
      if (endTime && video.currentTime >= endTime) {
        video.currentTime = startTime || 0;
        playVideo();
      }
    };

    const handleEnded = () => {
      video.currentTime = startTime || 0;
      playVideo();
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    // Resume playing on user interaction if autoplay was initially throttled
    const onUserGesture = () => {
      playVideo();
    };
    window.addEventListener('click', onUserGesture, { once: true });
    window.addEventListener('touchstart', onUserGesture, { once: true });

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      window.removeEventListener('click', onUserGesture);
      window.removeEventListener('touchstart', onUserGesture);
    };
  }, [startTime, endTime, isInvitationOpened]);

  // Handle optional custom rotation or natural full-bleed fit
  const isRotated = rotation !== 0;
  const isPerpendicular = rotation === 90 || rotation === 270 || rotation === -90;
  const videoTransformStyle = isRotated
    ? {
        transform: `rotate(${rotation}deg) scale(${isPerpendicular ? '1.78' : '1.05'})`,
        transformOrigin: 'center center',
      }
    : undefined;

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video with Poster fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop={!endTime}
          playsInline
          preload="auto"
          poster={weddingData.heroPoster}
          style={videoTransformStyle}
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.72] contrast-[1.05] transition-transform duration-300"
        >
          <source src={encodeURI(weddingData.heroVideo)} type="video/mp4" />
          <source src={weddingData.heroVideo} type="video/mp4" />
          <source src={weddingData.heroVideoBackup} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Cinematic Multi-layered Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0809] via-[#0a0809]/30 to-[#0a0809]/70 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.1)_0%,_rgba(10,8,9,0.75)_100%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.08)_0%,_transparent_60%)] pointer-events-none" />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center">
        {/* Sub-header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center gap-2 mb-4 md:mb-6"
        >
          <span className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-[#d4af37]" />
          <p className="font-cinzel text-xs md:text-sm tracking-[0.3em] uppercase text-[#f3eed8] font-light">
            Together With Their Families
          </p>
          <span className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-[#d4af37]" />
        </motion.div>

        {/* Main Couple Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="space-y-2 md:space-y-3"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-cinzel font-black tracking-wider uppercase gold-gradient-text drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
            {weddingData.groom.name.replace(/\s+Gupta$/i, '')}
          </h1>

          <div className="flex items-center justify-center gap-4 my-1">
            <span className="h-[1px] w-16 md:w-28 bg-[#d4af37]/60" />
            <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#ffd700] px-2 italic drop-shadow-md">
              &
            </span>
            <span className="h-[1px] w-16 md:w-28 bg-[#d4af37]/60" />
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-cinzel font-black tracking-wider uppercase gold-gradient-text drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
            {weddingData.bride.name}
          </h1>
        </motion.div>

        {/* Romantic tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-cormorant italic text-lg sm:text-2xl text-[#ecdda7] mt-6 mb-8 tracking-wide font-light max-w-xl"
        >
          “Were meant to be, woven together for eternity”
        </motion.p>

        {/* Date and Venue Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-6 py-3 rounded-full glass-card border border-[#d4af37]/30 shadow-xl"
        >
          <div className="flex items-center gap-2 text-xs sm:text-sm font-cinzel text-[#f7f2ea]">
            <Calendar className="w-4 h-4 text-[#d4af37]" />
            <span className="tracking-wider">{weddingData.displayDate}</span>
          </div>
          <span className="hidden sm:inline text-[#d4af37]/40">•</span>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-cinzel text-[#f7f2ea]">
            <MapPin className="w-4 h-4 text-[#d4af37]" />
            <span className="tracking-wider">{weddingData.venue.name}, {weddingData.venue.city}</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToStory}
      >
        <span className="text-[10px] uppercase font-cinzel tracking-[0.3em] text-[#baa89b] hover:text-[#d4af37] transition-colors">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="p-1 rounded-full border border-[#d4af37]/40 text-[#d4af37]"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
