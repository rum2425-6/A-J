import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import PetalCanvas from './PetalCanvas';

export default function OpeningScreen({ onStartOpening, onOpen, weddingData }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleReveal = () => {
    if (isOpening) return;
    setIsOpening(true);
    onStartOpening?.();
    setTimeout(() => onOpen(), 1500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#17070c] px-5 py-8 select-none"
      onClick={handleReveal}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(145,27,54,0.5)_0%,_rgba(35,8,17,0.96)_68%,_#090306_100%)]" />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#be123c]/20 blur-3xl" />
      <PetalCanvas count={30} />

      <div className="absolute inset-3 rounded-2xl border border-[#d4af37]/45 shadow-[inset_0_0_45px_rgba(0,0,0,0.75)] sm:inset-5" />

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 25 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-3xl cursor-pointer text-center"
      >
        <p className="mb-5 font-script text-3xl text-[#f7d6dc] drop-shadow-lg sm:text-4xl">
          Tap to Reveal
        </p>

        <div className="relative mx-auto h-[min(74vh,720px)] w-full overflow-hidden rounded-[1.4rem] border border-[#d4af37]/40 bg-[#a52d4e] shadow-[0_18px_60px_rgba(0,0,0,0.65)] sm:h-[min(78vh,780px)]">
          <div className="absolute inset-0 bg-[#9f2948] bg-[radial-gradient(circle_at_18%_18%,rgba(255,215,225,0.28)_0_2px,transparent_3px),radial-gradient(circle_at_78%_26%,rgba(255,215,225,0.2)_0_2px,transparent_3px),radial-gradient(circle_at_35%_62%,rgba(255,215,225,0.18)_0_2px,transparent_3px)]" />

          <div className="absolute left-7 top-8 text-5xl text-[#65162e]/55 rotate-[-25deg]">❧</div>
          <div className="absolute right-8 top-20 text-4xl text-[#65162e]/55 rotate-[25deg]">❧</div>
          <div className="absolute left-14 top-32 text-4xl text-[#65162e]/45 rotate-[15deg]">✿</div>
          <div className="absolute right-14 top-40 text-5xl text-[#65162e]/45 rotate-[-20deg]">❧</div>

          <div className="absolute inset-x-0 bottom-0 h-[57%] bg-[#8d2340] [clip-path:polygon(0_28%,50%_0,100%_28%,100%_100%,0_100%)]" />
          <motion.div
            animate={{
              rotateX: isOpening ? 180 : 0,
              zIndex: isOpening ? 1 : 20,
            }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'top center', transformStyle: 'preserve-3d' }}
            className="absolute inset-x-0 top-0 h-[48%] bg-[#b63858] [clip-path:polygon(0_0,100%_0,50%_100%)] shadow-lg"
          />

          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.92 }}
            animate={{
              opacity: isOpening ? 1 : 0,
              y: isOpening ? 0 : 25,
              scale: isOpening ? 1 : 0.92,
            }}
            transition={{ delay: 0.35, duration: 0.65, ease: 'easeOut' }}
            className="absolute left-1/2 top-[17%] z-[5] flex h-[62%] w-[78%] -translate-x-1/2 flex-col items-center justify-center rounded-lg border-2 border-[#d4af37]/55 bg-[#f8ecd5] px-5 text-center shadow-[0_8px_25px_rgba(40,5,15,0.45)] sm:w-[62%]"
          >
            <p className="font-cormorant text-lg italic text-[#8e4d61]">Together with their families</p>
            <p className="mt-4 font-cinzel text-3xl font-bold text-[#7b263f] sm:text-5xl">
              {weddingData.groom.name.replace(/\s+Gupta$/i, '')}
              <span className="block font-script text-3xl text-[#b38b2d] sm:text-4xl">&amp;</span>
              {weddingData.bride.name}
            </p>
            <p className="mt-5 font-cinzel text-xs uppercase tracking-[0.25em] text-[#8e4d61]">
              {weddingData.displayShortDate}
            </p>
            <div className="mt-7 h-px w-24 bg-[#b38b2d]" />
            <p className="mt-4 font-cormorant text-lg text-[#8e4d61]">You are invited to celebrate our love</p>
          </motion.div>

          <motion.div
            animate={{
              opacity: isOpening ? 0 : 1,
              scale: isOpening ? 0.7 : 1,
              y: isOpening ? 12 : 0,
            }}
            transition={{ duration: 0.35 }}
            className="absolute left-1/2 top-[48%] z-30 -translate-x-1/2 -translate-y-1/2"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2.2, repeat: Infinity }}
              className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#f5d9df]/70 bg-[#e8b8c5]/85 shadow-[0_5px_18px_rgba(54,5,20,0.45)] sm:h-28 sm:w-28"
            >
              <span className="font-script text-3xl text-[#8e4d61]">A &amp; J</span>
            </motion.div>
          </motion.div>

          <div className="absolute bottom-7 left-0 right-0 z-10 flex flex-col items-center gap-2">
            <p className="font-cinzel text-[10px] uppercase tracking-[0.3em] text-[#f8dce2]">
              {weddingData.displayShortDate}
            </p>
            <div className="flex items-center gap-2 text-[#ffd700]">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="font-cinzel text-[10px] uppercase tracking-[0.25em]">A Wedding Invitation</span>
              <Sparkles className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>

        <h1 className="mt-7 font-cinzel text-2xl font-bold tracking-wide text-[#f8e6bd] drop-shadow-lg sm:text-3xl">
          {weddingData.groom.name.replace(/\s+Gupta$/i, '')}
          <span className="mx-2 text-[#d4af37]">&amp;</span>
          {weddingData.bride.name}
        </h1>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-xs tracking-wider text-[#e8cbd1]">
          <Heart className="h-3 w-3 fill-[#f43f5e] text-[#f43f5e]" />
          Tap anywhere on the envelope to open
        </p>
      </motion.div>
    </div>
  );
}
