"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { location } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export function LocationSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-location-copy]",
        {
          opacity: 0,
          x: -36,
          y: 20
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true
          }
        }
      );

      gsap.fromTo(
        "[data-location-map]",
        {
          opacity: 0,
          x: 36,
          y: 20
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 76%",
            once: true
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const mapEmbedUrl = "https://www.google.com/maps?q=DZ+City+Amrut+Nagar+Mumbra&output=embed";

  return (
    <section id="location" ref={sectionRef} className="relative py-16 md:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#071733] to-[#081c3a]" />

      <div className="section-frame">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="mx-auto flex w-full max-w-xl flex-col text-center md:mx-0 md:text-left">
            <p
              data-location-copy
              className="text-xs font-semibold uppercase tracking-[0.38em] text-gold/70"
            >
              Location
            </p>
            <h2
              data-location-copy
              className="mt-5 text-balance text-4xl text-white sm:text-5xl md:text-6xl"
            >
              {location.title}
            </h2>
            <p data-location-copy className="mt-3 text-base text-white/70 md:text-lg">
              {location.subtitle}
            </p>
            <p data-location-copy className="mt-4 max-w-md text-sm leading-7 text-white/60 md:text-base md:leading-8">
              {location.supportLine}
            </p>
            <div data-location-copy className="mt-6 flex justify-center md:justify-start">
              <a
                href={location.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_18px_48px_rgba(255,255,255,0.16)]"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div data-location-map className="relative">
            <div className="relative h-[280px] w-full overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.3)] sm:h-[350px] md:h-[420px]">
              <iframe
                src={mapEmbedUrl}
                title="Shine Laban Mumbra map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
