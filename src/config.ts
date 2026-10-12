// ============================================================
// DJ-You Site Configuration
// Edit values below to update content across the entire site.
// ============================================================

export const siteConfig = {
  // --- Brand ---
  djName: "DJ-You",
  tagline: "Turning Moments Into Memories",
  slogan: "Unforgettable beats for every celebration",

  // --- Contact ---
  phone: "(555) 123-4567",
  email: "booking@dj-you.com",
  instagram: "https://instagram.com/djyou",
  facebook: "https://facebook.com/djyou",
  tiktok: "https://tiktok.com/@djyou",

  // --- Hero Video ---
  // Video plays as the hero section background. Poster shows before video loads.
  heroVideoUrl: "https://assets.mixkit.co/videos/833/833-1080.mp4",
  heroPosterImage: "https://images.pexels.com/photos/9005458/pexels-photo-9005458.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",

  // --- About Section ---
  aboutImage: "https://images.pexels.com/photos/19641136/pexels-photo-19641136.jpeg?auto=compress&cs=tinysrgb&w=900",
  aboutTitle: "About DJ-You",
  aboutText:
    "With over a decade behind the decks, DJ-You has been the heartbeat of countless celebrations. From intimate weddings to high-energy corporate parties and elegant quinceaneras, every set is crafted to match the vibe of your event. No two crowds are the same — and neither are the mixes. Every song is chosen in real-time based on what the dance floor demands, keeping your guests on their feet all night long.",

  // --- Stats Cards ---
  stats: [
    { value: "500+", label: "Events Performed", icon: "Calendar" },
    { value: "50,000+", label: "Songs Played", icon: "Music" },
    { value: "10", label: "Years of Experience", icon: "Award" },
    { value: "100%", label: "Client Satisfaction", icon: "Smile" },
  ] as { value: string; label: string; icon: string }[],

  // --- Event Portfolio ---
  events: [
    {
      title: "Sarah & Mike's Wedding",
      category: "Wedding",
      date: "June 2025",
      image: "https://images.pexels.com/photos/29081017/pexels-photo-29081017.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A magical evening under the stars with a packed dance floor from first dance to last call.",
      songsPlayed: 145,
      guests: 180,
    },
    {
      title: "TechCorp Annual Gala",
      category: "Corporate",
      date: "December 2024",
      image: "https://images.pexels.com/photos/14636315/pexels-photo-14636315.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "High-energy after-party for 300+ employees featuring a custom mix of throwback hits and modern beats.",
      songsPlayed: 210,
      guests: 320,
    },
    {
      title: "Isabella's Quinceanera",
      category: "Quinceanera",
      date: "March 2025",
      image: "https://images.pexels.com/photos/17931369/pexels-photo-17931369.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A beautiful celebration blending traditional waltzes with the latest hits for an unforgettable night.",
      songsPlayed: 175,
      guests: 150,
    },
    {
      title: "Rooftop Birthday Bash",
      category: "Private Party",
      date: "August 2025",
      image: "https://images.pexels.com/photos/12283306/pexels-photo-12283306.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "An exclusive rooftop party with city views, a curated open-format set, and dancing until 2 AM.",
      songsPlayed: 190,
      guests: 75,
    },
    {
      title: "Hotel Grand Opening",
      category: "Corporate",
      date: "September 2024",
      image: "https://images.pexels.com/photos/16985187/pexels-photo-16985187.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Sophisticated background beats transitioning to a full dance party for the launch of a boutique hotel.",
      songsPlayed: 120,
      guests: 250,
    },
    {
      title: "Emily & James Wedding",
      category: "Wedding",
      date: "October 2024",
      image: "https://images.pexels.com/photos/10408275/pexels-photo-10408275.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A romantic reception with a seamless flow from dinner jazz to an all-out dance party.",
      songsPlayed: 160,
      guests: 200,
    },
  ] as {
    title: string;
    category: string;
    date: string;
    image: string;
    description: string;
    songsPlayed: number;
    guests: number;
  }[],

  // --- Why Us Section ---
  whyUs: [
    {
      icon: "Music",
      title: "Custom Playlists",
      text: "Every setlist is tailored to your taste. You pick the vibe, we handle the rest — with live adjustments based on the crowd's energy.",
    },
    {
      icon: "Clock",
      title: "Punctual & Professional",
      text: "Arrive early, set up on time, and deliver from the first beat to the last. Reliability is non-negotiable.",
    },
    {
      icon: "Mic",
      title: "MC Services Included",
      text: "Need announcements or crowd engagement? Full MC services come standard — introductions, toasts, and more.",
    },
    {
      icon: "Sparkles",
      title: "Premium Sound & Lighting",
      text: "Professional-grade speakers, wireless mics, and dynamic lighting rigs that transform any venue.",
    },
    {
      icon: "Headphones",
      title: "Open-Format DJ",
      text: "Top 40, Latin, hip-hop, throwbacks, EDM, country — if your crowd wants it, we've got it covered.",
    },
    {
      icon: "ShieldCheck",
      title: "Fully Insured",
      text: "Liability insured and contract-backed for your peace of mind. Every booking is protected.",
    },
  ] as { icon: string; title: string; text: string }[],

  // --- Event Types for Contact Form ---
  eventTypes: [
    "Wedding",
    "Private Party",
    "Quinceanera",
    "Corporate Event",
    "Other",
  ],
};

export type SiteConfig = typeof siteConfig;
