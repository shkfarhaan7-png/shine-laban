"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/", icon: FaInstagram },
  { label: "Facebook", href: "https://facebook.com/", icon: FaFacebookF }
];

export function FollowSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-follow-reveal]",
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
            trigger: section,
            start: "top 84%",
            once: true
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="socials" ref={sectionRef} className="section-frame relative z-10 py-16 text-center md:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl py-4 md:py-8">
        <h2 data-follow-reveal className="text-3xl text-white md:text-4xl">
          Follow Us
        </h2>
        <p data-follow-reveal className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-cream/68 md:text-base">
          Stay connected with Shine Laban for the latest desserts, updates, and offers.
        </p>
        <div data-follow-reveal className="mt-8 flex items-center justify-center gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cream/88 shadow-[0_12px_34px_rgba(2,7,22,0.18)] transition duration-300 hover:scale-110 hover:bg-white/10 hover:text-white hover:shadow-[0_18px_44px_rgba(2,7,22,0.28)] md:h-14 md:w-14"
              >
                <Icon className="h-5 w-5 md:h-[1.35rem] md:w-[1.35rem]" />
              </a>
            );
          })}
        </div>
      </div>

      <div data-follow-reveal className="mx-auto my-12 w-full max-w-6xl px-6 md:my-16">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </section>
  );
}
