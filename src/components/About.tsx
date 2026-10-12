import { siteConfig } from "@/config";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-neutral-950 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-orange-500/20 to-pink-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={siteConfig.aboutImage}
                alt={siteConfig.aboutTitle}
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-2 md:right-8 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 px-6 py-4 shadow-xl shadow-orange-500/30">
              <p className="text-3xl font-extrabold text-white">10+</p>
              <p className="text-sm text-white/80">Years Behind the Decks</p>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              Get to Know Me
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              {siteConfig.aboutTitle}
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              {siteConfig.aboutText}
            </p>
            <div className="flex flex-wrap gap-3">
              {["Weddings", "Corporate", "Quinceaneras", "Private Parties", "Festivals"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
