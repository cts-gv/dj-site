import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config";

export default function Hero() {
  const scrollToContent = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={siteConfig.heroPosterImage}
      >
        <source src={siteConfig.heroVideoUrl} type="video/mp4" />
      </video>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-pink-500/15 blur-3xl animate-pulse [animation-delay:1s]" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <div className="max-w-3xl animate-[fadeInUp_1s_ease-out]">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            {siteConfig.slogan}
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white drop-shadow-2xl">
            {siteConfig.djName}
          </h1>
          <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-light text-gray-200 drop-shadow-lg">
            {siteConfig.tagline}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-orange-500/40 transition-all hover:scale-105 hover:shadow-orange-500/60"
            >
              Book Your Event
            </button>
            <button
              onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto rounded-full border-2 border-white/30 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-bold text-white transition-all hover:bg-white/15 hover:border-white/50"
            >
              View Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
