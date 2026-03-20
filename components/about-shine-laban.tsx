"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { aboutShineLaban } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export function AboutShineLaban() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-about-image]",
        {
          opacity: 0,
          x: -60
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 76%",
            once: true
          }
        }
      );

      gsap.fromTo(
        "[data-about-copy]",
        {
          opacity: 0,
          x: 60
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.95,
          ease: "power3.out",
          stagger: 0.12,
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

  const paragraphs = aboutShineLaban.copy.split("\n\n");

  return (
    <section id="about" ref={sectionRef} className="section-frame py-16 md:py-24 lg:py-32">
      <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div data-about-image className="relative mx-auto w-full max-w-[520px] md:mx-0">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <div className="relative aspect-[4/5] min-h-[22rem] md:min-h-[28rem]">
              <Image
                src={aboutShineLaban.image}
                alt="Featured Shine Laban dessert"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
            </div>
          </div>

          <div className="absolute bottom-5 left-5 rounded-[1rem] border border-white/10 bg-white/[0.08] px-4 py-3 shadow-[0_18px_42px_rgba(2,7,22,0.22)] backdrop-blur-md md:bottom-6 md:left-6">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-gold/80">Established</p>
            <p className="mt-1 text-xl text-white">2024</p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[520px] space-y-6 text-center md:mx-0 md:text-left">
          <div className="space-y-4">
            <p data-about-copy className="section-kicker">
              About Shine Laban
            </p>
            <h2
              data-about-copy
              className="mt-2 mb-6 text-balance text-4xl leading-tight text-white md:text-5xl"
            >
              India&apos;s First Egyptian Dessert Experience
            </h2>
            <div
              data-about-copy
              className="mx-auto h-px w-24 bg-gradient-to-r from-gold/0 via-gold-soft to-gold/0 md:mx-0"
            />
          </div>

          <div
            data-about-copy
            className="mx-auto max-w-[480px] rounded-[1.4rem] border border-white/10 bg-white/5 p-6 shadow-luxury backdrop-blur-sm md:mx-0"
          >
            <div className="space-y-4 text-left">
              {paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-cream/74 md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mx-auto grid max-w-[480px] grid-cols-2 gap-4 md:mx-0">
            {aboutShineLaban.stats.map((stat) => (
              <div
                key={`${stat.value}-${stat.label}`}
                data-about-copy
                className="rounded-[1.2rem] border border-white/10 bg-white/[0.05] p-5 text-center"
              >
                <p className="text-lg font-semibold leading-none text-white md:text-xl">{stat.value}</p>
                <p className="mx-auto mt-2 max-w-[11rem] text-[0.68rem] font-medium uppercase tracking-[0.15em] leading-5 text-gold/72 md:text-[0.72rem]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
