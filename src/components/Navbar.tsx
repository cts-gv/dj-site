import { useEffect, useState } from "react";
import { Menu, X, Music2 } from "lucide-react";
import { siteConfig } from "@/config";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Stats", href: "#stats" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md py-3 shadow-lg shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => handleNavClick("#hero")}
          className="flex items-center gap-2 group"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-pink-500 shadow-lg shadow-orange-500/30 transition-transform group-hover:scale-110">
            <Music2 className="h-5 w-5 text-white" />
          </span>
          <span className="text-xl font-bold tracking-tight text-white">
            {siteConfig.djName}
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-gray-300 hover:text-orange-400 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-orange-400 after:transition-all hover:after:w-full"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNavClick("#contact")}
          className="hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:shadow-orange-500/50 hover:scale-105"
        >
          Book Now
        </button>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4 bg-black/95 backdrop-blur-md">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left py-3 text-gray-300 hover:text-orange-400 transition-colors border-b border-white/5"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNavClick("#contact")}
              className="mt-3 w-full rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white"
            >
              Book Now
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
