"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { location } from "@/lib/content";

const menuLinks = [
  { label: "Intro", href: "/#intro" },
  { label: "About", href: "/#about" },
  { label: "Featured", href: "/#featured" },
  { label: "Menu", href: "/#menu" },
  { label: "Experience", href: "/#experience" },
  { label: "Location", href: "/#location" }
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const footer = footerRef.current;
    if (!footer) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-footer-reveal]",
        {
          opacity: 0,
          y: 26
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: footer,
            start: "top 84%",
            once: true
          }
        }
      );
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#071733] via-[#051225] to-[#020c1b] pt-20 pb-20 md:pt-24 md:pb-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-transparent to-black/12" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0 overflow-hidden">
        <div className="absolute left-[8%] top-[58%] h-[20rem] w-[20rem] rounded-full bg-gold/8 blur-[120px]" />
        <div className="absolute right-[10%] top-[18%] h-[18rem] w-[18rem] rounded-full bg-blue-300/8 blur-[120px]" />
      </div>

      <div className="section-frame relative z-10">
        <div className="grid gap-12 text-center md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:text-left">
          <div data-footer-reveal className="max-w-2xl space-y-6">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.38em] text-gold/75">Shine Laban</p>
            <h2 className="text-balance text-3xl text-white md:text-4xl">
              Premium Egyptian desserts with a cleaner, more intentional sense of reveal.
            </h2>
            <div className="flex flex-col items-center gap-6 pt-2 md:items-start">
              <Link
                href="/#menu"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-xl transition duration-300 hover:scale-105 hover:shadow-[0_18px_44px_rgba(255,255,255,0.16)]"
              >
                Explore Menu
              </Link>

              <div className="space-y-1 text-sm text-white/60">
                <p>{location.subtitle}</p>
                <p>{location.phoneDisplay}</p>
                <p>{location.hours}</p>
              </div>
            </div>
          </div>

          <div data-footer-reveal className="flex flex-col justify-start md:min-w-[11rem] md:pt-8">
            <div className="mt-10 flex flex-col gap-4 md:mt-16">
              {menuLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream/72 transition duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div
          data-footer-reveal
          className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50 md:mt-16"
        >
          <p>Designed by Shaikh Farhaan</p>
          <p>Contact - 8424854177</p>
        </div>
      </div>
    </footer>
  );
}
