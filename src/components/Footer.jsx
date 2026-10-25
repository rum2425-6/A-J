import React, { useRef, useEffect } from 'react';
import { Heart, Sparkles, Code, ExternalLink, Mail } from 'lucide-react';

export default function Footer({ weddingData }) {
  const videoRef = useRef(null);

  const bgImage =
    weddingData.footer?.backgroundImage || '/howrah_bridge.jpg';
  const bgVideo =
    weddingData.footer?.backgroundVideo || '/hawrah_hridge.mp4';
  const bgVideoBackup =
    weddingData.footer?.backgroundVideoBackup || '/howrah_bridge.mp4';

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playVideo = () => {
      if (video && video.paused) {
        video.play().catch(() => {});
      }
    };

    playVideo();
    video.addEventListener('loadeddata', playVideo);

    const onUserInteraction = () => playVideo();
    window.addEventListener('click', onUserInteraction, { once: true });
    window.addEventListener('touchstart', onUserInteraction, { once: true });

    return () => {
      video.removeEventListener('loadeddata', playVideo);
      window.removeEventListener('click', onUserInteraction);
      window.removeEventListener('touchstart', onUserInteraction);
    };
  }, [bgVideo]);

  const dev = weddingData.developer || {
    name: "Lucky",
    role: "Lead UI/UX & Web Architect",
    sign: "Lucky",
    tagline: "Crafted with Passion & Precision",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80"
  };

  return (
    <footer className="relative pt-24 pb-12 px-4 border-t border-[#d4af37]/40 text-center overflow-hidden min-h-[650px] flex flex-col justify-between">
      {/* Howrah Bridge Background Video with Image Poster Fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={bgImage}
          className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.06] saturate-[1.1] scale-100"
        >
          <source src={encodeURI(bgVideo)} type="video/mp4" />
          <source src={bgVideo} type="video/mp4" />
          <source src={bgVideoBackup} type="video/mp4" />
          {/* Fallback Image */}
          <img
            src={bgImage}
            alt="Howrah Bridge Kolkata"
            className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.08] saturate-[1.1]"
          />
        </video>
        {/* Subtle bottom fade only for seamless footer edge transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070506] via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto w-full my-auto py-10 px-6 sm:px-12 flex flex-col items-center">
        <h2 className="font-cinzel text-2xl sm:text-4xl font-bold gold-gradient-text tracking-wide drop-shadow-[0_4px_16px_rgba(0,0,0,1)]">
          Welcome to the City of Joy
        </h2>
      </div>

      {/* ================= DEVELOPER SIGNATURE & DETAILS SECTION ================= */}
      <div className="relative z-10 max-w-3xl mx-auto w-full mt-8 pt-6">
        <div className="bg-black/25 border border-[#d4af37]/35 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-[0_8px_30px_rgba(0,0,0,0.7)] hover:border-[#d4af37]/60 transition-colors">
          {/* Left: Circle Photo + Details */}
          <div className="flex items-center gap-4 text-left">
            {/* Circle Photo with Glowing Ring */}
            <div className="relative group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2px] bg-gradient-to-tr from-[#d4af37] via-[#ffd700] to-[#be123c] shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                <img
                  src={dev.avatar}
                  alt={dev.name}
                  className="w-full h-full object-cover rounded-full filter brightness-105"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0a0809] border border-[#d4af37] flex items-center justify-center text-[10px] text-[#ffd700]">
                <Sparkles className="w-3 h-3 text-[#d4af37]" />
              </div>
            </div>

            {/* Developer Details */}
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-cinzel font-bold text-base sm:text-lg gold-gradient-text tracking-wide">
                  {dev.name}
                </h4>
                <span className="px-2 py-0.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[9px] font-cinzel uppercase tracking-widest text-[#ffd700]">
                  Developer
                </span>
              </div>
              <p className="text-xs text-[#baa89b] font-light mt-0.5">
                {dev.role}
              </p>
              <p className="font-cormorant italic text-xs sm:text-sm text-[#e6d8c3]/80">
                {dev.tagline}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-[#e6d8c3]">
                {dev.phone && (
                  <a href={`tel:${dev.phone}`} className="hover:text-[#ffd700] transition-colors">
                    {dev.phone}
                  </a>
                )}
                {dev.email && (
                  <a href={`mailto:${dev.email}`} className="hover:text-[#ffd700] transition-colors">
                    {dev.email}
                  </a>
                )}
              </div>
              <div className="mt-1 flex flex-wrap gap-3 text-[11px]">
                {dev.portfolio && (
                  <a
                    href={dev.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#d4af37] hover:text-[#ffd700] transition-colors"
                  >
                    <Code className="w-3 h-3" />
                    Portfolio
                  </a>
                )}
                {dev.instagram && (
                  <a
                    href={dev.instagram.startsWith('http') ? dev.instagram : `https://instagram.com/${dev.instagram.replace(/^@/, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#d4af37] hover:text-[#ffd700] transition-colors"
                  >
                    Instagram
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right: Developer Signature & Sign-off */}
          <div className="flex flex-col items-center sm:items-end border-t sm:border-t-0 sm:border-l border-[#d4af37]/20 pt-3 sm:pt-0 sm:pl-6 w-full sm:w-auto">
            <span className="text-[10px] uppercase font-cinzel tracking-[0.25em] text-[#8e827a]">
              Handcrafted Signature
            </span>
            {/* Elegant Signature Font */}
            <span className="font-script text-3xl sm:text-4xl text-[#ffd700] drop-shadow-md my-0.5 transform -rotate-3">
              {dev.sign || dev.name}
            </span>
            <span className="text-[10px] font-cinzel tracking-wider text-[#d4af37]/75">
              Digital Experience Architect
            </span>
          </div>
        </div>
      </div>

      {/* Copyright / Attribution */}
      <div className="relative z-10 pt-6 mt-4 border-t border-[#d4af37]/20 max-w-4xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-cinzel text-[#d4af37]/80">
        <p>© 2026 {weddingData.groom.name} & {weddingData.bride.name}. All Rights Reserved.</p>
        <p className="flex items-center gap-1.5 text-[#e6d8c3]">
          <span>Designed & Built with</span>
          <Heart className="w-3.5 h-3.5 text-[#f43f5e] fill-[#f43f5e]" />
          <span>by <strong className="text-[#ffd700] font-semibold">{dev.name}</strong></span>
        </p>
      </div>
    </footer>
  );
}
