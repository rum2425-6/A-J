import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Heart, CalendarPlus, ExternalLink } from 'lucide-react';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';

export default function Countdown({ weddingData }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });
  const [showCalendarMenu, setShowCalendarMenu] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetTime = new Date(weddingData.weddingDate).getTime();
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isExpired: false
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [weddingData.weddingDate]);

  const units = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds }
  ];

  return (
    <section id="countdown" className="relative py-24 sm:py-32 px-4 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#d4af37]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Save the date badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card border border-[#d4af37]/40 mb-6"
        >
          <Heart className="w-3.5 h-3.5 text-[#f43f5e] fill-[#f43f5e]" />
          <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">
            Save The Date
          </span>
          <Heart className="w-3.5 h-3.5 text-[#f43f5e] fill-[#f43f5e]" />
        </motion.div>

        {/* Date Display */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-cinzel font-bold gold-gradient-text tracking-wide mb-3"
        >
          {weddingData.displayDate}
        </motion.h2>

        {/* Venue and City */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-xl font-cormorant text-[#ecdda7] flex items-center justify-center gap-2 mb-12"
        >
          <MapPin className="w-4 h-4 text-[#d4af37]" />
          <span>{weddingData.venue.name} • {weddingData.venue.city}</span>
        </motion.p>

        {/* Live Countdown Timer Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-card rounded-3xl p-6 sm:p-12 border border-[#d4af37]/30 max-w-4xl mx-auto shadow-2xl backdrop-blur-2xl"
        >
          {timeLeft.isExpired ? (
            <div className="py-8">
              <span className="text-4xl sm:text-6xl font-cinzel font-bold gold-gradient-text animate-pulse">
                Today is the Day ❤️
              </span>
              <p className="text-lg font-cormorant italic text-[#f7f2ea] mt-4">
                The celebration of love has begun. We welcome you with open arms!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {units.map((unit, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center justify-center p-5 sm:p-8 rounded-2xl bg-gradient-to-b from-[#1a1316]/80 to-[#0e0a0c]/90 border border-[#d4af37]/25 shadow-inner group hover:border-[#d4af37]/60 transition-colors"
                >
                  <span className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-bold gold-gradient-text tracking-tight group-hover:scale-105 transition-transform duration-300">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="font-cinzel text-[11px] sm:text-xs tracking-[0.25em] text-[#baa89b] mt-2 group-hover:text-[#d4af37] transition-colors">
                    {unit.label}
                  </span>
                  {/* Subtle inner corner tick */}
                  <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#d4af37]/30" />
                </div>
              ))}
            </div>
          )}

          {/* Action CTAs: Add to Calendar & Google Maps */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 pt-8 border-t border-[#d4af37]/20 relative">
            {/* Calendar Menu */}
            <div className="relative">
              <button
                onClick={() => setShowCalendarMenu(!showCalendarMenu)}
                className="btn-gold-luxury px-6 py-3 rounded-full text-xs font-cinzel font-semibold tracking-wider flex items-center gap-2 cursor-pointer"
                aria-label="Add to Calendar options"
              >
                <CalendarPlus className="w-4 h-4 text-[#0a0809]" />
                <span>Add to Calendar</span>
              </button>

              {showCalendarMenu && (
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-56 rounded-2xl glass-card border border-[#d4af37]/40 p-2 shadow-2xl z-30 flex flex-col gap-1">
                  <a
                    href={getGoogleCalendarUrl(weddingData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl text-xs font-cinzel tracking-wider text-[#f7f2ea] hover:bg-[#d4af37]/20 hover:text-[#ffd700] text-left transition-colors flex items-center justify-between"
                    onClick={() => setShowCalendarMenu(false)}
                  >
                    <span>Google Calendar</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#d4af37]" />
                  </a>
                  <button
                    onClick={() => {
                      downloadIcsFile(weddingData);
                      setShowCalendarMenu(false);
                    }}
                    className="px-4 py-2.5 rounded-xl text-xs font-cinzel tracking-wider text-[#f7f2ea] hover:bg-[#d4af37]/20 hover:text-[#ffd700] text-left transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span>Apple / Outlook (.ics)</span>
                    <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                  </button>
                </div>
              )}
            </div>

            {/* Google Maps Button */}
            <a
              href={weddingData.venue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-outline px-6 py-3 rounded-full text-xs font-cinzel font-semibold tracking-wider flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#d4af37]" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
