"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { menuCategories } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export function OurMenu() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-menu-category]",
        {
          opacity: 0,
          y: 34
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
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
    <section ref={sectionRef} id="menu" className="section-frame py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p data-menu-category className="section-kicker">
            Our Menu
          </p>
          <h2 data-menu-category className="mt-5 text-balance text-4xl text-white sm:text-5xl md:text-6xl">
            Our Menu
          </h2>
          <p
            data-menu-category
            className="mx-auto mt-6 max-w-2xl text-balance text-base leading-8 text-cream/72 md:text-lg"
          >
            Explore our signature Egyptian desserts, crafted with rich ingredients, layered textures, and indulgent
            flavours.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {menuCategories.map((category, index) => (
            <Link
              key={category.title}
              href={`/menu/${category.slug}`}
              data-menu-category
              className="group block cursor-pointer rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-luxury md:p-6"
            >
              <div className="space-y-4">
                <div className="relative h-36 overflow-hidden rounded-[1rem] border border-white/10">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    priority={index < 2}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl text-white">{category.title}</h3>
                  <p className="text-sm leading-7 text-cream/72">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
