import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config";

/*
 * Draw-on name animation (ported from test.html).
 * Tweak the look here:
 *   --draw-border : neon color the border starts in
 *   --draw-text   : neon color the letters start in
 *   --draw-final  : color both settle into
 */
const drawOnCss = `
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');

.draw-logo {
  --draw-border: #fb923c; /* orange-400 */
  --draw-text: #ec4899;   /* pink-500 */
  --draw-final: #ffffff;
}

.draw-logo svg {
  width: 100%;
  height: auto;
  overflow: visible;
}

/* Border traces itself, then settles to white */
.draw-logo .border-rect {
  fill: none;
  stroke: var(--draw-border);
  stroke-width: 4;
  stroke-dasharray: 1720;   /* perimeter of the 660x200 rect */
  stroke-dashoffset: 1720;
  filter: drop-shadow(0 0 8px rgba(251, 146, 60, 0.8));
  animation:
    drawBorder 7.5s cubic-bezier(0.25, 1, 0.5, 1) forwards,
    fadeBorderToWhite 2s ease-in-out 5s forwards;
}

/* Letters outline themselves, then fill in solid */
.draw-logo text {
  font-family: 'Oswald', 'Impact', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 115px;
  letter-spacing: 12px;
  fill: rgba(255, 255, 255, 0);
  stroke: var(--draw-text);
  stroke-width: 3;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  filter: drop-shadow(0 0 8px rgba(236, 72, 153, 0.8));
  animation:
    drawText 10.5s cubic-bezier(0.25, 1, 0.5, 1) forwards,
    fadeFill 5s ease-in-out 4.5s forwards;
}

/* Everything else waits for the name, then fades in */
.hero-fade-in {
  opacity: 0;
  animation: heroFadeIn 2s ease-in-out 6s forwards;
}

@keyframes drawBorder { to { stroke-dashoffset: 0; } }
@keyframes drawText   { to { stroke-dashoffset: 0; } }
@keyframes fadeBorderToWhite {
  to { stroke: var(--draw-final); filter: drop-shadow(0 0 2px rgba(255,255,255,0.2)); }
}
@keyframes fadeFill {
  to {
    fill: var(--draw-final);
    stroke: var(--draw-final);
    filter: drop-shadow(0 0 2px rgba(255,255,255,0.2));
  }
}
@keyframes heroFadeIn { to { opacity: 1; } }

/* Respect reduced-motion: show the finished state immediately */
@media (prefers-reduced-motion: reduce) {
  .draw-logo .border-rect,
  .draw-logo text,
  .hero-fade-in {
    animation: none;
  }
  .draw-logo .border-rect { stroke-dashoffset: 0; stroke: var(--draw-final); }
  .draw-logo text { stroke-dashoffset: 0; fill: var(--draw-final); stroke: var(--draw-final); }
  .hero-fade-in { opacity: 1; }
}
`;

export default function Hero() {
  const scrollToContent = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <style>{drawOnCss}</style>

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
        <div className="w-full max-w-3xl">
          <p className="hero-fade-in mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
            {siteConfig.slogan}
          </p>

          {/* Name: drawn-on SVG logo. Real h1 text is kept for screen readers/SEO. */}
          <h1 className="draw-logo mx-auto w-full max-w-[640px]">
            <span className="sr-only">{siteConfig.djName}</span>
            <svg viewBox="0 0 700 240" aria-hidden="true">
              <rect className="border-rect" x="20" y="20" width="660" height="200" rx="10" ry="10" />
              <text x="50%" y="54%" textAnchor="middle" dominantBaseline="middle">
                {siteConfig.djName}
              </text>
            </svg>
          </h1>

          <p className="hero-fade-in mt-6 text-xl sm:text-2xl md:text-3xl font-light text-gray-200 drop-shadow-lg">
            {siteConfig.tagline}
          </p>

          <div className="hero-fade-in mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
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
        className="hero-fade-in absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
