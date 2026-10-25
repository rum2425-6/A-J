import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Sparkles, Maximize2, Heart } from 'lucide-react';
import Lightbox from './Lightbox';

export default function Gallery({ weddingData }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Couple', 'Bride', 'Groom', 'Decor', 'Venue'];

  const filteredGallery = selectedCategory === 'All'
    ? weddingData.gallery
    : weddingData.gallery.filter(item => item.category === selectedCategory);

  const handleOpenLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev + 1) % filteredGallery.length);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length);
  };

  return (
    <section id="gallery" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Ambience glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-[#d4af37]/5 blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 mb-3"
        >
          <Camera className="w-4 h-4 text-[#d4af37]" />
          <span className="font-cinzel text-xs md:text-sm uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
            Captured Memories
          </span>
          <Camera className="w-4 h-4 text-[#d4af37]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-cinzel font-bold gold-gradient-text tracking-wide mb-4"
        >
          Moments of Love
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg font-cormorant italic text-[#e6d8c3]"
        >
          A few cherished glimpses from our beautiful journey together.
        </motion.p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs font-cinzel tracking-wider uppercase transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#d4af37] text-[#0a0809] font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                : 'glass-card text-[#baa89b] hover:text-[#f7f2ea] hover:border-[#d4af37]/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry / Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredGallery.map((photo, index) => {
          // Create varied heights for a luxury masonry effect
          const isLarge = index === 7;

          return (
            <motion.div
              key={photo.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: (index % 4) * 0.1 }}
              onClick={() => handleOpenLightbox(index)}
              className={`relative group rounded-2xl overflow-hidden glass-card border border-[#d4af37]/25 cursor-pointer shadow-lg aspect-[3/4] ${
                isLarge ? 'sm:col-span-2 sm:aspect-[16/10]' : ''
              }`}
            >
              <img
                src={photo.url}
                alt={photo.title || 'Wedding moment'}
                className="w-full h-full object-contain bg-[#0a0809] transition-transform duration-700 ease-out filter brightness-95"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0809] via-[#0a0809]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />

              {/* Hover Details Card */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="flex justify-end">
                  <div className="w-9 h-9 rounded-full bg-[#0a0809]/80 border border-[#d4af37]/40 flex items-center justify-center text-[#ffd700]">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-cinzel tracking-widest text-[#d4af37] bg-[#0a0809]/90 px-2 py-0.5 rounded-full border border-[#d4af37]/30 mb-2 inline-block">
                    {photo.category}
                  </span>
                  <h4 className="font-cinzel text-base sm:text-lg font-bold text-[#f7f2ea] drop-shadow-md">
                    {photo.title}
                  </h4>
                  <p className="font-cormorant italic text-xs sm:text-sm text-[#ecdda7] line-clamp-1">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <Lightbox
          isOpen={selectedImageIndex !== null}
          currentImage={filteredGallery[selectedImageIndex]}
          currentIndex={selectedImageIndex}
          total={filteredGallery.length}
          onClose={handleCloseLightbox}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
}
