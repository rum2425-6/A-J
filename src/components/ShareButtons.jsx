import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Copy, Check, MessageCircle, Sparkles, Send } from 'lucide-react';

export default function ShareButtons({ weddingData }) {
  const [copied, setCopied] = useState(false);

  const getShareUrl = () => {
    return typeof window !== 'undefined' ? window.location.href : weddingData.share.url;
  };

  const getShareMessage = () => {
    return `✨ You're cordially invited to celebrate our special day! ❤️\n\nJoin us for the royal wedding of ${weddingData.bride.fullName} & ${weddingData.groom.fullName} at ${weddingData.venue.name}, ${weddingData.venue.city}.\n\nView the cinematic invitation & RSVP here:\n${getShareUrl()}`;
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(getShareMessage());
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(getShareUrl()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${weddingData.bride.name} & ${weddingData.groom.name}'s Wedding Invitation`,
          text: weddingData.share.text,
          url: getShareUrl()
        });
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error(err);
        }
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <section className="relative py-16 px-4 max-w-4xl mx-auto">
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-[#d4af37]/35 text-center shadow-2xl relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/5 to-transparent pointer-events-none" />

        <div className="flex items-center justify-center gap-2 mb-3">
          <Share2 className="w-4 h-4 text-[#d4af37]" />
          <span className="text-xs uppercase font-cinzel tracking-[0.25em] text-[#d4af37] font-semibold">
            Pass On The Love
          </span>
          <Share2 className="w-4 h-4 text-[#d4af37]" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-cinzel font-bold gold-gradient-text mb-3">
          Share This Invitation
        </h3>

        <p className="text-sm sm:text-base font-cormorant italic text-[#e6d8c3] max-w-lg mx-auto mb-8">
          Help us invite your family and friends by sharing our digital wedding celebration link.
        </p>

        {/* Share Button Group */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppShare}
            className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-cinzel text-xs font-semibold tracking-wider flex items-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Share on WhatsApp</span>
          </button>

          {/* Copy Link Button */}
          <button
            onClick={handleCopyLink}
            className="btn-gold-luxury px-6 py-3.5 rounded-full text-xs font-cinzel font-semibold tracking-wider flex items-center gap-2 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#0a0809]" />
                <span>Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#0a0809]" />
                <span>Copy Invite Link</span>
              </>
            )}
          </button>

          {/* Native Share API if available */}
          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              onClick={handleNativeShare}
              className="btn-gold-outline px-6 py-3.5 rounded-full text-xs font-cinzel font-semibold tracking-wider flex items-center gap-2 cursor-pointer"
            >
              <Share2 className="w-4 h-4 text-[#d4af37]" />
              <span>More Options</span>
            </button>
          )}
        </div>

        {/* Toast alert when copied */}
        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0809] border border-[#d4af37] text-xs font-cinzel text-[#ffd700]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Invitation link copied to your clipboard</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
