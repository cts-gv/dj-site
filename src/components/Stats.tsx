import { Calendar, Music, Award, Smile } from "lucide-react";
import { siteConfig } from "@/config";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar,
  Music,
  Award,
  Smile,
};

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative py-20 bg-gradient-to-b from-neutral-950 to-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.08),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.stats.map((stat, index) => {
            const Icon = iconMap[stat.icon] ?? Music;
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 text-center transition-all hover:border-orange-500/40 hover:bg-white/8 hover:-translate-y-1"
              >
                <div className="mb-4 flex justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-pink-500/20 ring-1 ring-orange-500/30 transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6 text-orange-400" />
                  </span>
                </div>
                <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm md:text-base text-gray-400 font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
