import { useState } from "react";
import { Music2, Users, Calendar } from "lucide-react";
import { siteConfig } from "@/config";

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...new Set(siteConfig.events.map((e) => e.category))];
  const filteredEvents =
    filter === "All"
      ? siteConfig.events
      : siteConfig.events.filter((e) => e.category === filter);

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/4 left-0 h-80 w-80 rounded-full bg-pink-500/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-orange-500/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            Past Events
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Event Portfolio
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            A glimpse into the celebrations we've had the honor of soundtracking.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                filter === cat
                  ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-500/30"
                  : "border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 transition-colors hover:border-orange-500/40"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                   src={event.image}
                   alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent transform-gpu" />
                <span className="absolute top-4 left-4 rounded-full bg-orange-500/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  {event.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-5">
                <div className="mb-2 flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="h-3.5 w-3.5" />
                  {event.date}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {event.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-5 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Music2 className="h-4 w-4 text-orange-400" />
                    <span className="font-bold text-white">{event.songsPlayed}</span>
                    <span className="text-gray-500">songs</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Users className="h-4 w-4 text-pink-400" />
                    <span className="font-bold text-white">{event.guests}</span>
                    <span className="text-gray-500">guests</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
