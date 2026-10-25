import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Heart, CheckCircle2, AlertCircle, Sparkles, User, Phone, Mail, Users, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RSVP({ weddingData }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    attending: 'yes', // 'yes' | 'no'
    guestCount: 2,
    events: weddingData.events.map(e => e.id), // default attending all
    dietary: 'all',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a valid contact number.';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Phone number must be at least 8 digits.';
    }
    if (formData.attending === 'yes' && formData.events.length === 0) {
      errs.events = 'Please select at least one ceremony you will attend.';
    }
    return errs;
  };

  const handleEventToggle = (eventId) => {
    setFormData(prev => {
      const exists = prev.events.includes(eventId);
      if (exists) {
        return { ...prev, events: prev.events.filter(id => id !== eventId) };
      } else {
        return { ...prev, events: [...prev.events, eventId] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate mock API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti burst
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#d4af37', '#ffd700', '#f43f5e', '#ffffff', '#ecdda7']
        });
      } catch (err) {
        console.log(err);
      }
    }, 1000);
  };

  return (
    <section id="rsvp" className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-4xl mx-auto overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] rounded-full bg-[#d4af37]/5 blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 mb-3"
        >
          <Heart className="w-4 h-4 text-[#f43f5e] fill-[#f43f5e]" />
          <span className="font-cinzel text-xs md:text-sm uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
            Honored Guests
          </span>
          <Heart className="w-4 h-4 text-[#f43f5e] fill-[#f43f5e]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-cinzel font-bold gold-gradient-text tracking-wide mb-4"
        >
          Will You Join Us?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg font-cormorant italic text-[#e6d8c3]"
        >
          Kindly confirm your presence by 1st November 2026 to help us make your royal experience seamless.
        </motion.p>
      </div>

      {/* RSVP Form Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="glass-card rounded-3xl p-6 sm:p-12 border border-[#d4af37]/35 shadow-2xl backdrop-blur-2xl relative"
      >
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-10 space-y-6"
            >
              <div className="w-20 h-20 rounded-full bg-[#d4af37]/20 border-2 border-[#d4af37] flex items-center justify-center mx-auto text-[#ffd700] shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-2xl sm:text-4xl font-cinzel font-bold gold-gradient-text">
                Response Received
              </h3>

              <p className="text-base sm:text-xl font-cormorant italic text-[#f7f2ea] max-w-lg mx-auto">
                “Thank you for celebrating this special moment with us ❤️ Your blessings mean the world to Amit & Jyoti.”
              </p>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      phone: '',
                      email: '',
                      attending: 'yes',
                      guestCount: 2,
                      events: weddingData.events.map(e => e.id),
                      dietary: 'all',
                      message: ''
                    });
                  }}
                  className="btn-gold-outline px-6 py-2.5 rounded-full text-xs font-cinzel tracking-wider cursor-pointer"
                >
                  Submit Another Response
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Attendance Selection */}
              <div>
                <label className="block text-xs uppercase font-cinzel tracking-wider text-[#d4af37] mb-3">
                  Attendance Confirmation *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attending: 'yes' })}
                    className={`py-3.5 px-4 rounded-xl text-xs font-cinzel tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      formData.attending === 'yes'
                        ? 'bg-[#d4af37] text-[#0a0809] font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                        : 'glass-card text-[#baa89b] hover:text-[#f7f2ea]'
                    }`}
                  >
                    <Heart className="w-4 h-4 fill-current" />
                    <span>Joyfully Accepts With Pleasure</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attending: 'no' })}
                    className={`py-3.5 px-4 rounded-xl text-xs font-cinzel tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      formData.attending === 'no'
                        ? 'bg-[#881337] text-[#f7f2ea] font-bold border border-[#f43f5e]/40 shadow-lg'
                        : 'glass-card text-[#baa89b] hover:text-[#f7f2ea]'
                    }`}
                  >
                    <span>Regretfully Declines With Blessings</span>
                  </button>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-cinzel tracking-wider text-[#f7f2ea] mb-2 flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Kabir & Alisha Verma"
                    className={`w-full px-4 py-3 rounded-xl bg-[#0a0809]/80 border text-sm text-[#f7f2ea] focus:outline-none focus:border-[#d4af37] transition-colors placeholder:text-[#6a5e56] ${
                      errors.fullName ? 'border-[#f43f5e]' : 'border-[#d4af37]/30'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-[#f43f5e] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase font-cinzel tracking-wider text-[#f7f2ea] mb-2 flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full px-4 py-3 rounded-xl bg-[#0a0809]/80 border text-sm text-[#f7f2ea] focus:outline-none focus:border-[#d4af37] transition-colors placeholder:text-[#6a5e56] ${
                      errors.phone ? 'border-[#f43f5e]' : 'border-[#d4af37]/30'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-[#f43f5e] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Guest Count & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-cinzel tracking-wider text-[#f7f2ea] mb-2 flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Number of Guests</span>
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0809]/80 border border-[#d4af37]/30 text-sm text-[#f7f2ea] focus:outline-none focus:border-[#d4af37] cursor-pointer"
                  >
                    <option value={1}>1 Guest (Just me)</option>
                    <option value={2}>2 Guests (Couple)</option>
                    <option value={3}>3 Guests (Family)</option>
                    <option value={4}>4 Guests (Family)</option>
                    <option value={5}>5+ Guests</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-cinzel tracking-wider text-[#f7f2ea] mb-2 flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Email Address (Optional)</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="For itinerary updates"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0809]/80 border border-[#d4af37]/30 text-sm text-[#f7f2ea] focus:outline-none focus:border-[#d4af37] transition-colors placeholder:text-[#6a5e56]"
                  />
                </div>
              </div>

              {/* Preferred Events to Attend */}
              {formData.attending === 'yes' && (
                <div>
                  <label className="block text-xs uppercase font-cinzel tracking-wider text-[#d4af37] mb-2.5">
                    Ceremonies You Plan to Attend:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {weddingData.events.map((event) => {
                      const isChecked = formData.events.includes(event.id);
                      return (
                        <button
                          type="button"
                          key={event.id}
                          onClick={() => handleEventToggle(event.id)}
                          className={`px-3 py-2.5 rounded-xl text-xs font-cinzel tracking-wide text-left transition-all flex items-center gap-2 border cursor-pointer ${
                            isChecked
                              ? 'bg-[#d4af37]/15 border-[#d4af37] text-[#ffd700]'
                              : 'bg-[#0a0809]/40 border-white/10 text-[#baa89b] hover:border-[#d4af37]/40'
                          }`}
                        >
                          <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ${isChecked ? 'bg-[#d4af37] border-[#d4af37]' : 'border-white/30'}`}>
                            {isChecked && <CheckCircle2 className="w-3 h-3 text-[#0a0809]" />}
                          </div>
                          <span className="truncate">{event.name}</span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.events && (
                    <p className="text-xs text-[#f43f5e] mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.events}</span>
                    </p>
                  )}
                </div>
              )}

              {/* Message / Blessings */}
              <div>
                <label className="block text-xs uppercase font-cinzel tracking-wider text-[#f7f2ea] mb-2 flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Blessings & Warm Wishes For The Couple</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Leave a heartfelt note or special requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0809]/80 border border-[#d4af37]/30 text-sm text-[#f7f2ea] focus:outline-none focus:border-[#d4af37] transition-colors placeholder:text-[#6a5e56] resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto btn-gold-luxury px-12 py-4 rounded-full text-xs sm:text-sm font-cinzel tracking-[0.2em] font-semibold flex items-center justify-center gap-3 mx-auto cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Sparkles className="w-4 h-4 animate-spin" />
                      <span>Transmitting Wishes...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirm Attendance</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
