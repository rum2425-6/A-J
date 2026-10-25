/**
 * Centralized Wedding Configuration Data
 * Replace details here to customize the entire wedding invitation experience.
 */

export const weddingData = {
  // Couple Information
  bride: {
    name: "Jyoti",
    fullName: "Jyoti Sahu",
    parents: "Daughter of Mr. Ramesh Sahu & Mrs. Rakha Davi",
    instagram: "@jyoti_sahu",
    about: "An architect with a passion for classical music and stargazing, whose radiant smile brightens every room.",
    image: "/Jyoti.jpg"
  },
  groom: {
    name: "Amit Gupta",
    fullName: "Amit Gupta",
    parents: "Son of Mr. Rajesh Kumar Gupta & Mrs. Anju Devi",
    instagram: "amitgupta16119",
    about: "An entrepreneur with a penchant for vintage cars and mountain trails, whose calm presence anchors their world.",
    image: "/Amit.jpg"
  },

  // Monogram & Tagline
  monogram: "A & J",
  tagline: "Together with their families, invite you to celebrate love, laughter, and happily ever after.",
  hashtag: "#AmitGuptaAndJyotiSahu",

  // Wedding Date & Timings
  weddingDate: "2026-11-21T18:00:00+05:30", // ISO string for live countdown
  displayDate: "Saturday, 21th November 2026",
  displayShortDate: "21 . 11 . 2026",

  // Primary Venue
  venue: {
    name: "KM Hotel & Banquet",
    city: "Howrah, West Bengal",
    address: "Bally, Durgapur, P.O. Samabaya Pally (N.H.-2), Delhi Road Howrah-711205 West Bengal.India",
    coordinates: {
      latitude: 22.6542976,
      longitude: 88.3281795
    },
    mapUrl: "https://www.google.com/maps/search/?api=1&query=22.6542976%2C88.3281795",
    embedMapUrl: "https://www.google.com/maps?q=22.6542976,88.3281795&z=16&output=embed",
    nearestAirport: "Nata Subhas chandra Bose International Airport,Kolkata (28 km)",
    nearestRailway: "Dankuni City Railway Station (6 km)",
    contactPerson: "Concierge / RSVP Helpdesk",
    contactPhone: "Tel. (+91)-9051466425"
  },

  // Hero Video & Audio Assets
  // User's added background wedding video
  heroVideo: "/Ring Reel mp4.mp4",
  heroVideoBackup: "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-posing-in-nature-41551-large.mp4",
  heroPoster: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=85",
  videoStartTime: 0,  // Play from start
  videoEndTime: null, // Play full duration / loop naturally
  videoRotation: 0,   // Natural upright orientation (0 degrees)
  music: "/song.mp4", // Background music for the hero section
  musicTitle: "A Thousand Golden Moments",

 
  // Welcome / Invitation Message
  invitationMessage: {
    preTitle: "With the Blessings of Our Families",
    title: "Together with Our Families, We Invite You",
    quote: "With great joy and happiness, we invite you to join us as Amit Gupta and Jyoti Sahu begin their beautiful journey of marriage. Your presence will make this special occasion even more memorable.",
    subText: "Please join us to celebrate our wedding and bless us with your love and good wishes."
  },


 
  // Quote Section
  featuredQuote: {
    text: "A beautiful marriage begins with love, grows with trust, and lasts a lifetime with understanding and respect.",
    author: "Wedding Blessing",
    verse: "“May your life together be filled with love, happiness, and countless beautiful memories.”"
  },


 
  // Couple's Story Timeline
  storyMilestones: [
    {
      year: "A Special Beginning",
      title: "When Two Hearts Met",
      description: "Every beautiful journey begins with a special moment. Two hearts came together, beginning a journey filled with care, understanding, and the promise of a beautiful future.",
      image: "/AM_1.jpg"
    },
    {
      year: "A Promise of Forever",
      title: "Growing Together in Love",
      description: "With every passing moment, their bond grew stronger through trust, respect, and happiness. Together, they began dreaming of a future filled with love and togetherness.",
      image: "/AM_2.jpg"
    },
    {
      year: "Forever Begins",
      title: "A Beautiful New Chapter",
      description: "With the love and blessings of their families, Amit Gupta and Jyoti Sahu are ready to begin a new chapter of life together, promising to stand by each other through every moment.",
      image: "/AM_3.jpg"
    }
  ],


  // Wedding Events Itinerary
 
 
  // Wedding Events Itinerary
  events: [
    {
      id: "haldi",
      name: "Haldi Ceremony",
      tagline: "A Joyful Beginning Filled with Love and Blessings",
      date: "Thursday, 19th November 2026",
      time: "4:00 PM onwards",
      venue: "Ashima Lodge, 1st Debirpara, Chamrail, Howrah",
      dressCode: "Yellow, Mustard & Traditional Attire",
      icon: "Sparkles",
      image: "/haldi.png",
      description: "Join us for a joyful Haldi ceremony filled with love, laughter, family traditions, and blessings for the beautiful journey ahead.",
      mapUrl: "https://maps.app.goo.gl/Q4MRQ3BsF3UcHqFt6"
    },
    {
      id: "mehndi",
      name: "Mehndi Ceremony",
      tagline: "Beautiful Henna, Happiness & Togetherness",
      date: "Friday, 20th November 2026",
      time: "Time to be confirmed",
      venue: "Ashima Lodge, 1st Debirpara, Chamrail, Howrah",
      dressCode: "Green, Floral & Traditional Attire",
      icon: "Flower2",
      image: "/mehndi.png",
      description: "Celebrate with beautiful mehndi designs, cheerful moments, and the warmth of family and friends as we prepare for the wedding.",
      mapUrl: "https://maps.app.goo.gl/Q4MRQ3BsF3UcHqFt6"
    },
    {
      id: "sangeet",
      name: "Sangeet Ceremony",
      tagline: "An Evening of Music, Dance & Celebration",
      date: "Friday, 20th November 2026",
      time: "Time to be confirmed",
      venue: "Ashima Lodge, 1st Debirpara, Chamrail, Howrah",
      dressCode: "Festive Indian & Indo-Western Attire",
      icon: "Music",
      image: "/sangit.png",
      description: "Enjoy an evening of music, dance, and joyful performances as family and friends come together to celebrate this special occasion.",
      mapUrl: "https://maps.app.goo.gl/Q4MRQ3BsF3UcHqFt6"
    },


   
    {
      id: "reception",
      name: "Welcome Party",
      tagline: "A Warm Welcome & A Celebration of Togetherness",
      date: "Wednesday, 25th November 2026",
      time: "04:00 PM onwards",
      venue: "Anju Villa, Sanigawan Road, Kanpur Nagar",
      dressCode: "Smart Casuals & Festive Attire",
      icon: "Sparkles",
      image: "/welcom.png",
      description: "Join us for a warm and joyful welcome party filled with happiness, laughter, and wonderful moments. We look forward to welcoming our family and friends and celebrating this special occasion together.",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Anju+Villa%2C+Sanigawan+Road%2C+Kanpur+Nagar"
    }

  ],

  // Gallery Photos
  gallery: [
    {
      id: 1,
      url: "/Jyoti.jpg",
      title: "The Regal Bride",
      caption: "Jyoti adorned in hand-embroidered royal zardozi silk.",
      category: "Bride"
    },
    {
      id: 2,
      url: "/AmitF.jpg",
      title: "Groom in Splendor",
      caption: "Amit in tailored raw silk sherwani with emerald accents.",
      category: "Groom"
    },
    {
      id: 3,
      url: "/mandap.jpg",
      title: "Sacred Mandap",
      caption: "Mandap woven with thousand fragrant tuberoses and jasmine.",
      category: "Decor"
    },
    {
      id: 4,
      url: "/AM_3.jpg",
      title: "Moments of Joy",
      caption: "Pure unscripted laughter during our pre-wedding shoot.",
      category: "Couple"
    },
    {
      id: 5,
      url: "/hotal.jpg",
      title: "KM Hotel & Banquet",
      caption: "Heritage polki and uncut diamonds passed down through generations.",
      category: "Details"
    },
    {
      id: 6,
      url: "/banq.jpg",
      title: "Palace at Twilight",
      caption: "Udaivilas lit up in amber hues as night falls over the lake.",
      category: "Venue"
    },
    {
      id: 7,
      url: "/AM_1.jpg",
      title: "Forever Entwined",
      caption: "Hands held tight against the sunset over Lake Pichola.",
      category: "Couple"
    },
    {
      id: 8,
      url: "/AM_2.jpg",
      title: "The Royal Feast",
      caption: "Candlelight dining setups under the stars.",
      category: "Decor"
    }
  ],

  // Share Configuration
  share: {
    title: "Amit Gupta & Jyoti Sahu's Wedding Invitation",
    text: "✨ You're cordially invited to celebrate the wedding of Amit Gupta & Jyoti Sahu on 21st November 2026 at KM Hotel & Banquet, Howrah, West Bengal.",
    url: typeof window !== 'undefined' ? window.location.href : "https://amit-jyoti-wedding.com"
  },

  // FAQ / Important Information for Guests
  guestInfo: [
    {
      q: "What is the dress code for the events?",
      a: "Each event has a recommended color palette and style mentioned in the itinerary above. Traditional Indian or formal evening wear is warmly encouraged."
    },
    {
      q: "Where is the wedding venue?",
      a: "The wedding will take place at KM Hotel & Banquet, Bally, Durgapur, Howrah, West Bengal 711205. Please use the Venue & Travel Guide section for the map and directions."
    },
    {
      q: "Are children welcome?",
      a: "Absolutely! We would love to celebrate this special occasion with the whole family."
    },
    {
      q: "Whom do I contact for travel and venue queries?",
      a: "Please contact the Concierge / RSVP Helpdesk at Tel. (+91)-9xcxxxxxxx for assistance with venue, travel, and RSVP-related questions."
    }
  ],

  // Footer & Blessings
  footer: {
    closingQuote: "We cannot wait to celebrate the most magical weekend of our lives with you.",
    familyNames: "With love & blessings from the Malhotra & Singhania Families",
    designedWith: "Crafted with love for Amit & Jyoti",
    backgroundVideo: "/hawrah_hridge.mp4",
    backgroundVideoBackup: "/howrah_bridge.mp4",
    backgroundImage: "/howrah_bridge.jpg"
  },

 
  // Developer Profile & Signature Details
  developer: {
    name: "Sumit Kumar Gupta",
    role: "Full Stack Web Developer",
    sign: "Sumit",
    tagline: "Crafted with Passion & Precision",
    avatar: "/test.jpeg",
    phone: "7607096369",
    email: "luckygupta7607@gmail.com",
    portfolio: "https://dev-portfolio-eta-sand.vercel.app/",
    instagram: "https://www.instagram.com/friendly_boy_22246/"
  }

};
