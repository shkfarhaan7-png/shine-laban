"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ScrollLink } from "@/components/scroll-link";

gsap.registerPlugin(ScrollTrigger);

export function HeroContent() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-reveal]",
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero-content" ref={sectionRef} className="relative py-16 md:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink to-transparent" />
      <div className="section-frame relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="space-y-6 md:space-y-8">
            <h1
              data-hero-reveal
              className="text-balance text-5xl leading-[0.92] text-white sm:text-6xl md:text-7xl lg:text-[6.15rem]"
            >
              Authentic Egyptian Indulgence
            </h1>
            <p data-hero-reveal className="text-balance text-xl text-gold-soft sm:text-2xl md:text-[1.7rem]">
              A Taste of Shine Laban
            </p>
            <p
              data-hero-reveal
              className="mx-auto max-w-2xl text-balance text-sm leading-7 text-cream/76 sm:text-base md:text-lg md:leading-8"
            >
              Made with the finest ingredients and a touch of Egyptian tradition. Silky smooth, luxuriously creamy
              and bursting with authentic flavour. Perfect for sharing or savoring solo.
            </p>
            <div data-hero-reveal className="flex items-center justify-center pt-3">
              <ScrollLink href="#menu" className="button-primary min-w-[11.5rem]">
                Explore Menu
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
