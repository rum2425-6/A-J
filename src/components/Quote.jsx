import React from 'react';
import { motion } from 'framer-motion';
import { Quote as QuoteIcon, Sparkles } from 'lucide-react';

export default function Quote({ weddingData }) {
  return (
    <section className="relative py-28 px-4 overflow-hidden my-8">
      {/* Cinematic Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80"
          alt="Atmospheric wedding background"
          className="w-full h-full object-cover filter brightness-[0.22] contrast-[1.1] scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0809] via-transparent to-[#0a0809]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.06)_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="w-14 h-14 rounded-full border border-[#d4af37]/40 bg-[#0a0809]/80 flex items-center justify-center mx-auto mb-8 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
        >
          <QuoteIcon className="w-6 h-6 text-[#d4af37]" />
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-2xl sm:text-4xl md:text-5xl font-cormorant italic text-[#f7f2ea] leading-tight md:leading-snug max-w-3xl mx-auto mb-8 drop-shadow-md"
        >
          “{weddingData.featuredQuote.text}”
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#d4af37]" />
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>
          <p className="font-cinzel text-xs sm:text-sm tracking-[0.25em] uppercase text-[#ecdda7]">
            {weddingData.featuredQuote.verse}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
