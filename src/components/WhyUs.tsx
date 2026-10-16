import {
  Music,
  Clock,
  Mic,
  Sparkles,
  Headphones,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/config";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Music,
  Clock,
  Mic,
  Sparkles,
  Headphones,
  ShieldCheck,
};

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative py-24 md:py-32 bg-gradient-to-b from-black to-neutral-950 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(236,72,153,0.06),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            The DJ-Mando Difference
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            More than just playing songs — we deliver a complete entertainment experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.whyUs.map((item, index) => {
            const Icon = iconMap[item.icon] ?? Music;
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-7 transition-all hover:border-orange-500/40 hover:bg-white/8 hover:-translate-y-1"
              >
                {/* Glow on hover */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-orange-500/0 to-pink-500/0 opacity-0 transition-opacity group-hover:from-orange-500/5 group-hover:to-pink-500/5 group-hover:opacity-100 -z-10" />

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-pink-500/20 ring-1 ring-orange-500/30 transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-7 w-7 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
