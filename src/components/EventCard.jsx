import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles, Flower2, Music, Crown, Wine, Shirt, ExternalLink } from 'lucide-react';

const iconMap = {
  Sparkles: Sparkles,
  Flower2: Flower2,
  Music: Music,
  Crown: Crown,
  Wine: Wine
};

export default function EventCard({ event, index, isAlternate = false }) {
  const IconComponent = iconMap[event.icon] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.15 }}
      className="relative group rounded-3xl overflow-hidden glass-card border border-[#d4af37]/30 glass-card-hover flex flex-col h-full shadow-2xl"
    >
      {/* Event Header Image */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full object-contain bg-[#0a0809] transition-transform duration-700 filter brightness-90"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120e10] via-[#120e10]/40 to-transparent" />

        {/* Floating Event Icon Badge */}
        <div className="absolute top-4 right-4 w-11 h-11 rounded-full bg-[#0a0809]/80 border border-[#d4af37]/50 backdrop-blur-md flex items-center justify-center shadow-lg text-[#ffd700]">
          <IconComponent className="w-5 h-5" />
        </div>

        {/* Tagline overlay */}
        <div className="absolute bottom-3 left-4 right-4">
          <p className="text-[11px] font-cinzel tracking-widest uppercase text-[#ecdda7] drop-shadow-md">
            {event.tagline}
          </p>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-6">
        <div>
          <h3 className="text-2xl sm:text-3xl font-cinzel font-bold gold-gradient-text mb-3">
            {event.name}
          </h3>

          <p className="text-sm font-cormorant italic text-[#e6d8c3] leading-relaxed mb-6">
            “{event.description}”
          </p>

          {/* Details list */}
          <div className="space-y-3 pt-2 border-t border-[#d4af37]/20">
            {/* Date */}
            <div className="flex items-start gap-3 text-xs sm:text-sm font-cinzel text-[#f7f2ea]">
              <Calendar className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <span>{event.date}</span>
            </div>

            {/* Time */}
            <div className="flex items-start gap-3 text-xs sm:text-sm font-cinzel text-[#f7f2ea]">
              <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <span>{event.time}</span>
            </div>

            {/* Venue */}
            <div className="flex items-start gap-3 text-xs sm:text-sm font-cinzel text-[#f7f2ea]">
              <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <span>{event.venue}</span>
            </div>

            {/* Dress Code */}
            {event.dressCode && (
              <div className="flex items-start gap-3 text-xs sm:text-sm font-cinzel text-[#ecdda7]">
                <Shirt className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="italic font-cormorant text-sm text-[#ffd700]">
                  Dress Code: {event.dressCode}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* View Location Button */}
        <div className="pt-4">
          <a
            href={event.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full btn-gold-outline py-2.5 rounded-full text-xs font-cinzel tracking-wider font-semibold flex items-center justify-center gap-2 group-hover:bg-[#d4af37] group-hover:text-[#0a0809] transition-all"
          >
            <span>View Venue Location</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
