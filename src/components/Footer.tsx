import { Phone, Mail, Instagram, Facebook, Music2, Heart } from "lucide-react";
import { siteConfig } from "@/config";

export default function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-pink-500">
                <Music2 className="h-5 w-5 text-white" />
              </span>
              <span className="text-xl font-bold text-white">{siteConfig.djName}</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              {siteConfig.tagline}. Professional DJ services for weddings, private parties,
              quinceaneras, and corporate events.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About", href: "#about" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Why Us", href: "#why-us" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-500 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-300 mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-gray-500 hover:text-orange-400 transition-colors text-sm"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-gray-500 hover:text-orange-400 transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-orange-400 hover:border-orange-500/40 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-orange-400 hover:border-orange-500/40 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-orange-400 hover:border-orange-500/40 transition-all"
                aria-label="TikTok"
              >
                <Music2 className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} {siteConfig.djName}. All rights reserved.
          </p>
         <p className="flex items-center gap-1.5 text-sm text-gray-600">
  Made with <Heart className="h-3.5 w-3.5 text-orange-500 fill-orange-500" /> for music lovers by:{" "}
  <a
    href="https://ctechsolution.tech"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline text-gray-700"
  >
    Community Tech Solutions
  </a>
</p>
        </div>
      </div>
    </footer>
  );
}
