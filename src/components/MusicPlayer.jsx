import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Music, Play, Pause } from 'lucide-react';

export default function MusicPlayer({ audioUrl, autoPlay = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const webAudioCtxRef = useRef(null);
  const oscillatorIntervalRef = useRef(null);

  // Synthesizer fallback if external MP3 cannot load or has network block
  const playSynthesizedHarp = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!webAudioCtxRef.current) {
        webAudioCtxRef.current = new AudioContext();
      }
      const ctx = webAudioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const chords = [
        [261.63, 329.63, 392.00, 523.25], // C Major
        [220.00, 261.63, 329.63, 440.00], // A Minor
        [174.61, 220.00, 261.63, 349.23], // F Major
        [196.00, 246.94, 293.66, 392.00]  // G Major
      ];

      let chordIdx = 0;
      let noteIdx = 0;

      const playNextNote = () => {
        if (!isPlaying || isMuted) return;
        const currentChord = chords[chordIdx];
        const freq = currentChord[noteIdx];

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 1.3);

        noteIdx++;
        if (noteIdx >= currentChord.length) {
          noteIdx = 0;
          chordIdx = (chordIdx + 1) % chords.length;
        }
      };

      if (oscillatorIntervalRef.current) clearInterval(oscillatorIntervalRef.current);
      oscillatorIntervalRef.current = setInterval(playNextNote, 600);
    } catch (e) {
      console.log('Web Audio fallback notice:', e);
    }
  };

  useEffect(() => {
    if (autoPlay) {
      handlePlay();
    }
  }, [autoPlay]);

  const handlePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.6;
      audio.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log('Audio playback prevented or falling back:', err);
          setIsPlaying(true);
          playSynthesizedHarp();
        });
    }
  };

  const handleTogglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      if (audio) audio.pause();
      if (oscillatorIntervalRef.current) clearInterval(oscillatorIntervalRef.current);
      setIsPlaying(false);
    } else {
      handlePlay();
    }
  };

  const handleToggleMute = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={audioUrl}
        loop
        preload="auto"
        onError={() => {
          if (isPlaying) playSynthesizedHarp();
        }}
      />

      {/* Floating Music Control Widget */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 select-none"
      >
        <button
          onClick={handleTogglePlay}
          className={`glass-card p-3 rounded-full border border-[#d4af37]/40 shadow-2xl flex items-center gap-3 group transition-all duration-300 cursor-pointer ${
            isPlaying ? 'bg-[#0a0809]/90 border-[#d4af37]' : 'bg-[#0a0809]/60'
          }`}
          aria-label={isPlaying ? 'Pause Music' : 'Play Music'}
        >
          {/* Animated Music Note / Disc */}
          <div className="relative w-8 h-8 rounded-full bg-[#d4af37]/15 flex items-center justify-center text-[#ffd700]">
            {isPlaying ? (
              <Pause className="w-4 h-4 text-[#ffd700]" />
            ) : (
              <Play className="w-4 h-4 text-[#ffd700] ml-0.5" />
            )}
          </div>

          {/* Sound wave visualizer bars */}
          {isPlaying && !isMuted && (
            <div className="flex items-center gap-0.5 h-4 px-1">
              <span className="w-0.5 h-4 bg-[#ffd700] rounded-full animate-pulse" style={{ animationDuration: '0.6s' }} />
              <span className="w-0.5 h-2 bg-[#ffd700] rounded-full animate-pulse" style={{ animationDuration: '0.9s' }} />
              <span className="w-0.5 h-5 bg-[#ffd700] rounded-full animate-pulse" style={{ animationDuration: '0.4s' }} />
              <span className="w-0.5 h-3 bg-[#ffd700] rounded-full animate-pulse" style={{ animationDuration: '0.7s' }} />
            </div>
          )}

          <span className="hidden sm:inline-block text-[11px] font-cinzel tracking-wider uppercase text-[#ecdda7] pr-2">
            {isPlaying ? 'Wedding Music' : 'Play Theme'}
          </span>
        </button>

        {isPlaying && (
          <button
            onClick={handleToggleMute}
            className="w-10 h-10 rounded-full glass-card border border-[#d4af37]/30 flex items-center justify-center text-[#ecdda7] hover:text-[#ffd700] transition-colors cursor-pointer"
            aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-[#f43f5e]" /> : <Volume2 className="w-4 h-4" />}
          </button>
        )}
      </motion.div>
    </>
  );
}
