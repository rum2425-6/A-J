import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CalendarHeart } from 'lucide-react';
import EventCard from './EventCard';

export default function Events({ weddingData }) {
  return (
    <section id="events" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#d4af37]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-[#881337]/10 blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 mb-3"
        >
          <CalendarHeart className="w-4 h-4 text-[#d4af37]" />
          <span className="font-cinzel text-xs md:text-sm uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
            Wedding Itinerary & Celebrations
          </span>
          <CalendarHeart className="w-4 h-4 text-[#d4af37]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-cinzel font-bold gold-gradient-text tracking-wide mb-6"
        >
          Sacred Events & Ceremonies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg font-cormorant italic text-[#e6d8c3] max-w-2xl mx-auto leading-relaxed"
        >
          Each ritual carries centuries of heritage, joy, music, and divine blessings. Join us in making each occasion unforgettable.
        </motion.p>
      </div>

      {/* Events Grid / Timeline layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {weddingData.events.map((event, index) => (
          <EventCard
            key={event.id || index}
            event={event}
            index={index}
            isAlternate={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}
