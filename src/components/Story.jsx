import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Compass } from 'lucide-react';

export default function Story({ weddingData }) {
  return (
    <section id="story" className="relative py-24 sm:py-32 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-[#d4af37]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-[#881337]/10 blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 mb-3"
        >
          <Sparkles className="w-4 h-4 text-[#d4af37]" />
          <span className="font-cinzel text-xs md:text-sm uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
            {weddingData.invitationMessage.preTitle}
          </span>
          <Sparkles className="w-4 h-4 text-[#d4af37]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl font-cinzel font-bold gold-gradient-text tracking-wide mb-6"
        >
          {weddingData.invitationMessage.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-xl font-cormorant italic text-[#f7f2ea] leading-relaxed mb-4 max-w-2xl mx-auto"
        >
          “{weddingData.invitationMessage.quote}”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-3 mt-4"
        >
          <span className="h-[1px] w-12 bg-[#d4af37]/40" />
          <Heart className="w-4 h-4 text-[#d4af37] fill-[#d4af37]/20" />
          <span className="h-[1px] w-12 bg-[#d4af37]/40" />
        </motion.div>
      </div>

      {/* Bride & Groom Couple Spotlight */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center mb-24 max-w-5xl mx-auto">
        {/* Groom Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="relative group rounded-3xl overflow-hidden glass-card p-6 sm:p-8 border border-[#d4af37]/30 shadow-2xl"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 border border-[#d4af37]/20">
            <img
              src={weddingData.groom.image}
              alt={weddingData.groom.fullName}
              className="w-full h-full object-contain object-center bg-[#0a0809] transition-transform duration-700 filter brightness-95"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0809] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-4 left-4 right-4 text-left">
              <span className="text-[10px] uppercase font-cinzel tracking-widest text-[#d4af37] bg-[#0a0809]/80 px-2.5 py-1 rounded-full border border-[#d4af37]/30">
                The Groom
              </span>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-cinzel font-bold gold-gradient-text">
              {weddingData.groom.fullName}
            </h3>
            <p className="text-xs uppercase tracking-wider font-cinzel text-[#baa89b] mt-1 mb-3">
              {weddingData.groom.parents}
            </p>
            <p className="text-sm font-cormorant italic text-[#e6d8c3] leading-relaxed">
              {weddingData.groom.about}
            </p>
          </div>
        </motion.div>

        {/* Bride Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="relative group rounded-3xl overflow-hidden glass-card p-6 sm:p-8 border border-[#d4af37]/30 shadow-2xl"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 border border-[#d4af37]/20">
            <img
              src={weddingData.bride.image}
              alt={weddingData.bride.fullName}
              className="w-full h-full object-contain object-center bg-[#0a0809] transition-transform duration-700 filter brightness-95"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0809] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-4 left-4 right-4 text-left">
              <span className="text-[10px] uppercase font-cinzel tracking-widest text-[#d4af37] bg-[#0a0809]/80 px-2.5 py-1 rounded-full border border-[#d4af37]/30">
                The Bride
              </span>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-cinzel font-bold gold-gradient-text">
              {weddingData.bride.fullName}
            </h3>
            <p className="text-xs uppercase tracking-wider font-cinzel text-[#baa89b] mt-1 mb-3">
              {weddingData.bride.parents}
            </p>
            <p className="text-sm font-cormorant italic text-[#e6d8c3] leading-relaxed">
              {weddingData.bride.about}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Couple Story Timeline */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-cinzel uppercase tracking-[0.3em] text-[#d4af37]">
            How Destiny Unfolded
          </span>
          <h3 className="text-2xl sm:text-4xl font-cinzel font-bold text-[#f7f2ea] mt-2">
            Our Journey To Forever
          </h3>
        </div>

        <div className="relative border-l border-[#d4af37]/30 ml-4 sm:ml-32 space-y-12 pb-4">
          {weddingData.storyMilestones.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="relative pl-8 sm:pl-10"
            >
              {/* Timeline Pin Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0a0809] border-2 border-[#d4af37] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              </div>

              {/* Year label (Left on desktop) */}
              <span className="sm:absolute sm:-left-32 sm:top-1 font-cinzel text-xs uppercase tracking-wider text-[#d4af37] font-semibold block mb-1 sm:mb-0 sm:text-right sm:w-24">
                {milestone.year}
              </span>

              {/* Content Card */}
              <div className="glass-card rounded-2xl p-5 sm:p-6 border border-[#d4af37]/20 flex flex-col sm:flex-row gap-5 items-center">
                <div className="w-full sm:w-32 h-28 shrink-0 rounded-xl overflow-hidden border border-[#d4af37]/20">
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="w-full h-full object-contain bg-[#0a0809]"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-cinzel text-lg sm:text-xl font-bold gold-gradient-text mb-2">
                    {milestone.title}
                  </h4>
                  <p className="font-cormorant text-base sm:text-lg text-[#ecdda7] leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
