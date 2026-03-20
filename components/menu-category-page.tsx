"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

import type { MenuCategory } from "@/lib/content";

export function MenuCategoryPage({ category }: { category: MenuCategory }) {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-category-reveal]",
        {
          opacity: 0,
          y: 36
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.1
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-frame py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#menu"
          data-category-reveal
          className="inline-flex items-center gap-2 text-sm text-gold-soft transition duration-300 hover:text-white"
        >
          <span aria-hidden="true">&larr;</span>
          <span>Back to Menu</span>
        </Link>

        <div className="mt-8 max-w-3xl">
          <p data-category-reveal className="section-kicker">
            Category
          </p>
          <h1 data-category-reveal className="mt-5 text-balance text-4xl text-white sm:text-5xl md:text-6xl">
            {category.title}
          </h1>
          <p
            data-category-reveal
            className="mt-6 max-w-2xl text-balance text-base leading-8 text-cream/72 md:text-lg"
          >
            {category.description}
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {category.items.map((item, index) => (
            <article
              key={item.id}
              data-category-reveal
              className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.05] shadow-luxury transition duration-300 hover:-translate-y-1 hover:scale-[1.03]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  priority={index < 2}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
              </div>

              <div className="space-y-4 p-5">
                <div>
                  <h2 className="text-2xl text-white">{item.name}</h2>
                  <p className="mt-3 text-sm leading-7 text-cream/72">{item.description}</p>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xl text-gold-soft">{item.price}</p>
                  <Link href="/#location" className="button-secondary px-4 py-2 text-xs uppercase tracking-[0.28em]">
                    Order Now
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
