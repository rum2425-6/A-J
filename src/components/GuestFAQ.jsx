import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export default function GuestFAQ({ guestInfo }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  if (!guestInfo || guestInfo.length === 0) return null;

  return (
    <section className="relative py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-2">
          <HelpCircle className="w-4 h-4 text-[#d4af37]" />
          <span className="text-xs uppercase font-cinzel tracking-[0.25em] text-[#d4af37] font-semibold">
            Guest Assistance
          </span>
          <HelpCircle className="w-4 h-4 text-[#d4af37]" />
        </div>
        <h3 className="text-2xl sm:text-4xl font-cinzel font-bold gold-gradient-text">
          Important Guest Information
        </h3>
      </div>

      <div className="space-y-4">
        {guestInfo.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="glass-card rounded-2xl border border-[#d4af37]/20 overflow-hidden transition-colors hover:border-[#d4af37]/50"
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="font-cinzel text-sm sm:text-base font-semibold text-[#f7f2ea]">
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#d4af37] shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-1 text-sm font-cormorant text-[#ecdda7] leading-relaxed border-t border-[#d4af37]/10">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
