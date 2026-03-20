"use client";

import { useEffect, useRef, useState } from "react";

import { ScrollLink } from "@/components/scroll-link";

const links = [
  { label: "Intro", href: "#intro" },
  { label: "About", href: "#about" },
  { label: "Featured", href: "#featured" },
  { label: "Menu", href: "#menu" },
  { label: "Experience", href: "#experience" },
  { label: "Location", href: "#location" },
  { label: "Socials", href: "#socials" }
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="section-frame pt-4">
        <nav className="pointer-events-auto flex items-center justify-between rounded-full border border-white/12 bg-midnight/55 px-5 py-3 shadow-glow backdrop-blur-2xl md:px-6">
          <ScrollLink href="#intro" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
              <span className="text-lg font-semibold text-gold-soft">SL</span>
            </span>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold/75">Shine Laban</p>
              <p className="text-xs text-cream/55">Luxury Egyptian Desserts</p>
            </div>
          </ScrollLink>

          <div ref={menuRef} className="relative flex items-center gap-2 md:gap-3">
            <ScrollLink
              href="#menu"
              className="button-secondary px-4 py-2 text-xs uppercase tracking-[0.28em] md:text-sm"
            >
              Explore Menu
            </ScrollLink>

            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="navbar-dropdown"
              onClick={() => setMenuOpen((open) => !open)}
              className="group flex min-h-[3rem] min-w-[3rem] flex-col items-center justify-center gap-1.5 rounded-full border border-white/12 bg-white/[0.05] p-2 transition duration-300 hover:border-gold/30 hover:bg-white/[0.08]"
            >
              <span
                className={`h-[1.5px] w-5 bg-white transition-all duration-300 ${
                  menuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[1.5px] w-5 bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-[1.5px] w-5 bg-white transition-all duration-300 ${
                  menuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </button>

            <div
              id="navbar-dropdown"
              className={`absolute right-4 top-20 z-50 w-56 origin-top-right rounded-2xl border border-white/5 bg-[#0b1a2a] p-6 shadow-2xl transition-all duration-300 ease-out md:right-6 md:w-64 md:p-7 ${
                menuOpen
                  ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                  : "pointer-events-none -translate-y-2 scale-95 opacity-0"
              }`}
            >
              <div className="space-y-5">
                {links.map((link) => (
                  <ScrollLink
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-sm uppercase tracking-widest text-white/70 transition duration-300 hover:text-[#d4af37]"
                  >
                    {link.label}
                  </ScrollLink>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
