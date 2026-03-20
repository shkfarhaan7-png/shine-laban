"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ScrollLink } from "@/components/scroll-link";
import { featuredProducts } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export function FeaturedProducts() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-featured-reveal]",
        { opacity: 0, y: 42 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.1,
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

  return (
    <section ref={sectionRef} id="featured" className="section-frame py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p data-featured-reveal className="section-kicker">
          Featured Products
        </p>
        <h2
          data-featured-reveal
          className="mt-5 text-balance text-4xl text-white sm:text-5xl md:text-6xl"
        >
          A short menu of signature desserts, presented simply.
        </h2>
        <p
          data-featured-reveal
          className="mx-auto mt-6 max-w-2xl text-balance text-base leading-8 text-cream/72 md:text-lg"
        >
          No filters, no extra steps. Just the standout bowls and cups that best represent the Shine Laban
          experience.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {featuredProducts.map((product, index) => (
          <article
            key={product.id}
            data-featured-reveal
            className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.045] shadow-luxury transition duration-500 hover:-translate-y-2 hover:shadow-[0_34px_90px_rgba(2,7,22,0.42)]"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority={index < 2}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
              <div className="absolute left-4 top-4 rounded-full border border-white/12 bg-ink/55 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-gold-soft">
                {product.label}
              </div>
            </div>
            <div className="space-y-4 p-5">
              <div>
                <h3 className="text-2xl text-white">{product.name}</h3>
                <p className="mt-3 text-sm leading-7 text-cream/70">{product.description}</p>
              </div>
              <div className="flex items-center justify-between gap-4">
                <p className="text-xl text-gold-soft">{product.price}</p>
                <ScrollLink href="#location" className="button-secondary px-4 py-2 text-xs uppercase tracking-[0.28em]">
                  Order Now
                </ScrollLink>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
