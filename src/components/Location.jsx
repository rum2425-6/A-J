import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation as NavIcon, Plane, Train, Phone, ExternalLink, Sparkles, Building2 } from 'lucide-react';

export default function Location({ weddingData }) {
  return (
    <section id="location" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#d4af37]/5 blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 mb-3"
        >
          <Building2 className="w-4 h-4 text-[#d4af37]" />
          <span className="font-cinzel text-xs md:text-sm uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
            The Royal Destination
          </span>
          <Building2 className="w-4 h-4 text-[#d4af37]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-cinzel font-bold gold-gradient-text tracking-wide mb-4"
        >
          Venue & Travel Guide
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg font-cormorant italic text-[#e6d8c3]"
        >
          Set on the banks of Lake Pichola, offering breathtaking views of royal palaces and heritage Mewari courtyards.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Venue Details Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-10 border border-[#d4af37]/30 flex flex-col justify-between shadow-2xl"
        >
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-[10px] uppercase font-cinzel tracking-widest text-[#d4af37] bg-[#d4af37]/10 px-3 py-1 rounded-full border border-[#d4af37]/30">
                Primary Venue
              </span>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-cinzel font-bold gold-gradient-text mb-2">
                {weddingData.venue.name}
              </h3>
              <p className="text-sm uppercase font-cinzel tracking-wider text-[#baa89b]">
                {weddingData.venue.city}
              </p>
            </div>

            <div className="flex items-start gap-3 text-sm text-[#ecdda7] leading-relaxed pt-2 border-t border-[#d4af37]/20">
              <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
              <span>{weddingData.venue.address}</span>
            </div>

            {/* Travel Connections */}
            <div className="space-y-4 pt-4 border-t border-[#d4af37]/20">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center shrink-0 text-[#ffd700]">
                  <Plane className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-cinzel uppercase tracking-wider text-[#f7f2ea] font-semibold">
                    Nearest Airport
                  </h4>
                  <p className="text-xs sm:text-sm font-cormorant text-[#baa89b]">
                    {weddingData.venue.nearestAirport}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center shrink-0 text-[#ffd700]">
                  <Train className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-cinzel uppercase tracking-wider text-[#f7f2ea] font-semibold">
                    Nearest Railway
                  </h4>
                  <p className="text-xs sm:text-sm font-cormorant text-[#baa89b]">
                    {weddingData.venue.nearestRailway}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center shrink-0 text-[#ffd700]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-cinzel uppercase tracking-wider text-[#f7f2ea] font-semibold">
                    Concierge & Helpdesk
                  </h4>
                  <p className="text-xs sm:text-sm font-cormorant text-[#baa89b]">
                    {weddingData.venue.contactPhone}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={weddingData.venue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-gold-luxury py-3 rounded-full text-xs font-cinzel tracking-wider font-semibold flex items-center justify-center gap-2"
            >
              <span>Open Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(weddingData.venue.name + ' ' + weddingData.venue.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-gold-outline py-3 rounded-full text-xs font-cinzel tracking-wider font-semibold flex items-center justify-center gap-2"
            >
              <NavIcon className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Get Directions</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Interactive Map & Visual Frame */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-7 rounded-3xl overflow-hidden glass-card border border-[#d4af37]/30 shadow-2xl relative min-h-[380px] sm:min-h-[460px] flex flex-col"
        >
          <iframe
            src={weddingData.venue.embedMapUrl}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '380px', flex: 1, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.9)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Venue Location Map"
            className="w-full h-full"
          />

          {/* Map Overlay Badge */}
          <div className="absolute top-4 right-4 bg-[#0a0809]/90 border border-[#d4af37]/40 px-3.5 py-1.5 rounded-full backdrop-blur-md flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px] font-cinzel tracking-wider text-[#f7f2ea]">
              Lake Pichola, Udaipur
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
