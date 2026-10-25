import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Crown, Sparkles } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Story', href: '#story' },
  { name: 'Date', href: '#countdown' },
  { name: 'Events', href: '#events' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Location', href: '#location' },
  { name: 'RSVP', href: '#rsvp' }
];

export default function Navigation({ weddingData }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Track active section
      const sections = ['hero', 'story', 'countdown', 'events', 'gallery', 'location', 'rsvp'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Navbar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-4 sm:top-6 inset-x-0 z-40 flex justify-center px-4 pointer-events-none"
      >
        <nav
          className={`pointer-events-auto px-5 sm:px-8 py-3 rounded-full transition-all duration-500 flex items-center justify-between gap-6 sm:gap-10 ${
            isScrolled
              ? 'glass-nav border border-[#d4af37]/35 shadow-2xl backdrop-blur-xl'
              : 'bg-[#0a0809]/40 border border-white/10 backdrop-blur-md'
          }`}
        >
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 text-sm sm:text-base font-cinzel font-bold gold-gradient-text tracking-wider"
          >
            <Crown className="w-4 h-4 text-[#ffd700]" />
            <span>{weddingData.monogram}</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs uppercase font-cinzel tracking-[0.18em] transition-all relative py-1 ${
                    isActive
                      ? 'text-[#ffd700] font-semibold'
                      : 'text-[#baa89b] hover:text-[#f7f2ea]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#d4af37]"
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop RSVP CTA Button */}
          <div className="hidden md:block">
            <a
              href="#rsvp"
              onClick={(e) => handleNavClick(e, '#rsvp')}
              className="btn-gold-luxury px-5 py-2 rounded-full text-[11px] font-cinzel font-semibold tracking-widest inline-block"
            >
              RSVP
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center text-[#ecdda7] hover:text-[#ffd700] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden glass-card rounded-3xl p-6 border border-[#d4af37]/40 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex flex-col items-center gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm uppercase font-cinzel tracking-widest text-[#f7f2ea] hover:text-[#ffd700] py-2 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="w-full pt-2 border-t border-[#d4af37]/20 text-center">
                <a
                  href="#rsvp"
                  onClick={(e) => handleNavClick(e, '#rsvp')}
                  className="w-full btn-gold-luxury py-3 rounded-full text-xs font-cinzel font-semibold tracking-widest inline-block"
                >
                  Confirm RSVP
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
