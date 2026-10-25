import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function Lightbox({ currentImage, isOpen, onClose, onNext, onPrev, total, currentIndex }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !currentImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center lightbox-backdrop p-4 sm:p-8"
        onClick={onClose}
      >
        {/* Top Control Bar */}
        <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-50 pointer-events-auto">
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-cinzel tracking-widest text-[#d4af37] bg-[#0a0809]/80 px-3.5 py-1.5 rounded-full border border-[#d4af37]/30">
              {currentIndex + 1} / {total}
            </span>
            {currentImage.category && (
              <span className="hidden sm:inline-block text-xs font-cinzel uppercase tracking-wider text-[#baa89b]">
                • {currentImage.category}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#0a0809]/80 border border-[#d4af37]/40 text-[#f7f2ea] hover:text-[#ffd700] hover:border-[#d4af37] flex items-center justify-center transition-all cursor-pointer shadow-lg"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#0a0809]/80 border border-[#d4af37]/40 text-[#f7f2ea] hover:text-[#ffd700] hover:border-[#d4af37] flex items-center justify-center transition-all cursor-pointer shadow-2xl group"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#0a0809]/80 border border-[#d4af37]/40 text-[#f7f2ea] hover:text-[#ffd700] hover:border-[#d4af37] flex items-center justify-center transition-all cursor-pointer shadow-2xl group"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Main Image Container */}
        <motion.div
          key={currentImage.url}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl max-h-[82vh] w-full flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-[0_0_50px_rgba(0,0,0,0.9)] max-h-[75vh]">
            <img
              src={currentImage.url}
              alt={currentImage.title || 'Wedding moment'}
              className="w-full h-full max-h-[72vh] object-contain select-none"
            />
          </div>

          {/* Caption & Description */}
          {(currentImage.title || currentImage.caption) && (
            <div className="mt-4 text-center max-w-xl px-4">
              <h4 className="font-cinzel text-lg sm:text-xl font-bold gold-gradient-text mb-1">
                {currentImage.title}
              </h4>
              <p className="font-cormorant italic text-sm sm:text-base text-[#ecdda7]">
                {currentImage.caption}
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
