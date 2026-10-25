import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { weddingData } from './data/weddingData';
import OpeningScreen from './components/OpeningScreen';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Story from './components/Story';
import Quote from './components/Quote';
import Countdown from './components/Countdown';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Location from './components/Location';
import RSVP from './components/RSVP';
import GuestFAQ from './components/GuestFAQ';
import ShareButtons from './components/ShareButtons';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import PetalCanvas from './components/PetalCanvas';

export default function App() {
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);
  const [startAudio, setStartAudio] = useState(false);

  const handleStartOpening = () => {
    setStartAudio(true);
  };

  const handleOpenInvitation = () => {
    setIsInvitationOpened(true);
  };

  return (
    <div className="relative min-h-screen bg-[#0a0809] text-[#f7f2ea] selection:bg-[#d4af37]/30 selection:text-[#ffd700] overflow-x-hidden font-sans">
      {/* 1. Opening Invitation Screen */}
      <AnimatePresence>
        {!isInvitationOpened && (
          <OpeningScreen
            weddingData={weddingData}
            onStartOpening={handleStartOpening}
            onOpen={handleOpenInvitation}
          />
        )}
      </AnimatePresence>

      {/* Main Experience (Revealed as doors open) */}
      <div className={`transition-opacity duration-1000 ${isInvitationOpened ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Floating Ambient Rose Petals & Gold Particle Canvas */}
        <PetalCanvas count={24} />

        {/* Floating Glassmorphism Navigation */}
        <Navigation weddingData={weddingData} />

        {/* Floating Background Music Controller */}
        <MusicPlayer audioUrl={weddingData.music} autoPlay={startAudio} />

        <main>
          {/* 2. Cinematic Hero Section */}
          <Hero weddingData={weddingData} isInvitationOpened={isInvitationOpened} />

          {/* 3. Welcome & Couple Love Story Section */}
          <Story weddingData={weddingData} />

          {/* 4. Elegant Wedding Quote Section */}
          <Quote weddingData={weddingData} />

          {/* 5. Date & Live Countdown Section */}
          <Countdown weddingData={weddingData} />

          {/* 6 & 7. Wedding Events & Ceremonies Itinerary */}
          <Events weddingData={weddingData} />

          {/* 8. Moments of Love Photo Gallery & Lightbox */}
          <Gallery weddingData={weddingData} />

          {/* 10. Venue Location & Travel Guide */}
          <Location weddingData={weddingData} />

          {/* 9. Interactive RSVP Section */}
          <RSVP weddingData={weddingData} />

          {/* Guest FAQ & Guidance */}
          <GuestFAQ guestInfo={weddingData.guestInfo} />

          {/* 11. Share Invitation (WhatsApp, Link, Share API) */}
          <ShareButtons weddingData={weddingData} />
        </main>

        {/* 15. Royal Footer */}
        <Footer weddingData={weddingData} />
      </div>
    </div>
  );
}
